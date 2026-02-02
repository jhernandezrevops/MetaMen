-- ============================================
-- METAMEN100 - Database Functions
-- Funciones de negocio para el sistema de gamificación
-- ============================================

-- ============================================
-- 1. FUNCIONES DE TRIGGER
-- ============================================

-- Función para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Función para crear avatar_vectors automáticamente
CREATE OR REPLACE FUNCTION create_avatar_vectors_on_avatar_insert()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO avatar_vectors (avatar_id) VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 2. FUNCIONES DE NEGOCIO - JUDGEMENT NIGHT
-- ============================================

-- Procesa el cierre del día (Judgement Night)
CREATE OR REPLACE FUNCTION process_judgement_night(
  p_avatar_id UUID,
  p_user_id UUID
)
RETURNS JSONB AS $$
DECLARE
  v_avatar RECORD;
  v_vectors RECORD;
  v_tasks_completed INTEGER;
  v_tasks_total INTEGER;
  v_completion_rate DECIMAL(5,2);
  v_day_result day_result;
  v_btc_earned DECIMAL(10,2) := 0;
  v_health_change INTEGER := 0;
  v_new_health INTEGER;
  v_streak_change INTEGER := 0;
  v_new_streak INTEGER;
BEGIN
  -- Obtener datos del avatar
  SELECT * INTO v_avatar FROM avatars WHERE id = p_avatar_id AND user_id = p_user_id;
  SELECT * INTO v_vectors FROM avatar_vectors WHERE avatar_id = p_avatar_id;
  
  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Avatar not found');
  END IF;

  -- Contar tareas completadas hoy
  SELECT 
    COUNT(*) FILTER (WHERE tc.completed_at >= CURRENT_DATE),
    COUNT(*)
  INTO v_tasks_completed, v_tasks_total
  FROM task_completions tc
  WHERE tc.user_id = p_user_id
    AND tc.completed_at >= CURRENT_DATE
    AND tc.completed_at < CURRENT_DATE + INTERVAL '1 day';

  -- Calcular tasa de completitud
  IF v_tasks_total > 0 THEN
    v_completion_rate := (v_tasks_completed::DECIMAL / v_tasks_total) * 100;
  ELSE
    v_completion_rate := 0;
  END IF;

  -- Determinar resultado del día
  IF v_completion_rate >= 80 THEN
    v_day_result := 'win';
    v_streak_change := 1;
    v_btc_earned := 50; -- Bonus por día ganado
    
    -- Bonus adicional por día perfecto (100%)
    IF v_completion_rate >= 100 THEN
      v_btc_earned := v_btc_earned + 25;
    END IF;
  ELSE
    v_day_result := 'loss';
    v_streak_change := -v_avatar.streak_days; -- Reset streak
    v_health_change := -1;
    
    -- Doble daño si 0% completado
    IF v_completion_rate = 0 THEN
      v_health_change := -2;
    END IF;
  END IF;

  -- Calcular nueva salud
  v_new_health := GREATEST(0, LEAST(v_avatar.max_health_points, v_avatar.health_points + v_health_change));
  
  -- Calcular nueva racha
  IF v_day_result = 'win' THEN
    v_new_streak := v_avatar.streak_days + 1;
  ELSE
    v_new_streak := 0;
  END IF;

  -- Bonus de racha cada 7 días
  IF v_new_streak > 0 AND v_new_streak % 7 = 0 THEN
    v_btc_earned := v_btc_earned + (v_new_streak * 10);
    v_new_health := LEAST(v_avatar.max_health_points, v_new_health + 1); -- Recuperar 1 corazón
  END IF;

  -- Actualizar avatar
  UPDATE avatars SET
    current_day = LEAST(100, v_avatar.current_day + 1),
    streak_days = v_new_streak,
    health_points = v_new_health,
    status = CASE WHEN v_new_health = 0 THEN 'dead'::avatar_status ELSE v_avatar.status END,
    died_at = CASE WHEN v_new_health = 0 THEN NOW() ELSE v_avatar.died_at END,
    completed_at = CASE WHEN v_avatar.current_day + 1 >= 100 THEN NOW() ELSE v_avatar.completed_at END
  WHERE id = p_avatar_id;

  -- Aplicar decay si día perdido
  IF v_day_result = 'loss' THEN
    UPDATE avatar_vectors SET
      muscle_level = GREATEST(1, muscle_level - 0.05),
      fat_level = LEAST(13, fat_level + 0.05)
    WHERE avatar_id = p_avatar_id;
  END IF;

  -- Crear registro del día
  INSERT INTO daily_logs (avatar_id, day_number, result, btc_earned)
  VALUES (p_avatar_id, v_avatar.current_day, v_day_result, v_btc_earned);

  RETURN jsonb_build_object(
    'success', true,
    'day_number', v_avatar.current_day,
    'result', v_day_result,
    'completion_rate', v_completion_rate,
    'tasks_completed', v_tasks_completed,
    'tasks_total', v_tasks_total,
    'btc_earned', v_btc_earned,
    'health_change', v_health_change,
    'new_health', v_new_health,
    'streak_before', v_avatar.streak_days,
    'streak_after', v_new_streak,
    'is_dead', v_new_health = 0,
    'is_completed', v_avatar.current_day >= 100
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 3. FUNCIONES DE TAREAS
-- ============================================

-- Completar tarea y otorgar recompensas
CREATE OR REPLACE FUNCTION complete_task(
  p_task_definition_id UUID,
  p_user_id UUID,
  p_avatar_id UUID
)
RETURNS JSONB AS $$
DECLARE
  v_task RECORD;
  v_vectors RECORD;
  v_multiplier DECIMAL(3,2) := 1.0;
  v_btc_reward DECIMAL(10,2);
BEGIN
  -- Obtener definición de tarea
  SELECT * INTO v_task FROM task_definitions WHERE id = p_task_definition_id AND is_active = TRUE;
  
  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Task not found or inactive');
  END IF;

  -- Verificar que no se haya completado hoy
  IF EXISTS (
    SELECT 1 FROM task_completions 
    WHERE task_id = p_task_definition_id 
      AND user_id = p_user_id
      AND completed_at >= CURRENT_DATE
  ) THEN
    RETURN jsonb_build_object('success', false, 'error', 'Task already completed today');
  END IF;

  -- Calcular multiplicador por racha
  SELECT streak_days INTO v_multiplier FROM avatars WHERE id = p_avatar_id;
  v_multiplier := 1.0 + (LEAST(v_multiplier, 30) * 0.02); -- Max 60% bonus at 30 days

  -- Calcular BTC reward
  v_btc_reward := ROUND(v_task.btc_reward * v_multiplier);

  -- Crear registro de completitud
  INSERT INTO task_completions (user_id, task_id, btc_earned)
  VALUES (p_user_id, p_task_definition_id, v_btc_reward);

  -- Actualizar vectores del avatar
  UPDATE avatar_vectors SET
    aura_level = LEAST(13, aura_level + COALESCE(v_task.aura_impact, 0)),
    face_level = LEAST(13, face_level + COALESCE(v_task.face_impact, 0)),
    wealth_level = LEAST(13, wealth_level + COALESCE(v_task.wealth_impact, 0)),
    muscle_level = LEAST(13, muscle_level + COALESCE(v_task.muscle_impact, 0)),
    fat_level = GREATEST(1, fat_level + COALESCE(v_task.fat_impact, 0))
  WHERE avatar_id = p_avatar_id
  RETURNING * INTO v_vectors;

  -- Calcular nuevo nivel
  PERFORM recalculate_avatar_level(p_avatar_id);

  RETURN jsonb_build_object(
    'success', true,
    'task_id', p_task_definition_id,
    'btc_earned', v_btc_reward,
    'multiplier', v_multiplier,
    'vector_changes', jsonb_build_object(
      'aura', v_task.aura_impact,
      'face', v_task.face_impact,
      'wealth', v_task.wealth_impact,
      'muscle', v_task.muscle_impact,
      'fat', v_task.fat_impact
    ),
    'new_levels', jsonb_build_object(
      'aura', v_vectors.aura_level,
      'face', v_vectors.face_level,
      'wealth', v_vectors.wealth_level,
      'muscle', v_vectors.muscle_level,
      'fat', v_vectors.fat_level
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 4. FUNCIONES DE TIENDA
-- ============================================

-- Comprar item de tienda
CREATE OR REPLACE FUNCTION purchase_shop_item(
  p_shop_item_id UUID,
  p_user_id UUID
)
RETURNS JSONB AS $$
DECLARE
  v_item RECORD;
  v_avatar RECORD;
  v_inventory_count INTEGER;
BEGIN
  -- Obtener item
  SELECT * INTO v_item FROM shop_items WHERE id = p_shop_item_id AND is_active = TRUE;
  
  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Item not found');
  END IF;

  -- Verificar que no se tenga ya
  SELECT COUNT(*) INTO v_inventory_count 
  FROM inventory_items 
  WHERE user_id = p_user_id AND shop_item_id = p_shop_item_id;

  IF v_inventory_count > 0 THEN
    RETURN jsonb_build_object('success', false, 'error', 'Item already owned');
  END IF;

  -- Obtener avatar para verificar nivel
  SELECT * INTO v_avatar FROM avatars WHERE user_id = p_user_id;
  
  IF v_avatar.current_level < v_item.required_level THEN
    RETURN jsonb_build_object(
      'success', false, 
      'error', 'Level requirement not met',
      'required', v_item.required_level,
      'current', v_avatar.current_level
    );
  END IF;

  -- Aquí se verificaría el balance de BTC (necesitaríamos una tabla de wallets)
  -- Por ahora permitimos la compra si cumple el nivel

  -- Agregar a inventario
  INSERT INTO inventory_items (user_id, shop_item_id)
  VALUES (p_user_id, p_shop_item_id);

  RETURN jsonb_build_object(
    'success', true,
    'item_id', p_shop_item_id,
    'item_name', v_item.name,
    'price_paid', v_item.price_btc
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Equipar/Desequipar item
CREATE OR REPLACE FUNCTION toggle_equip_item(
  p_inventory_item_id UUID,
  p_user_id UUID
)
RETURNS JSONB AS $$
DECLARE
  v_item RECORD;
  v_new_status BOOLEAN;
BEGIN
  -- Obtener item del inventario
  SELECT ii.*, si.name INTO v_item 
  FROM inventory_items ii
  JOIN shop_items si ON ii.shop_item_id = si.id
  WHERE ii.id = p_inventory_item_id AND ii.user_id = p_user_id;
  
  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Item not found in inventory');
  END IF;

  -- Toggle estado
  v_new_status := NOT v_item.is_equipped;

  UPDATE inventory_items 
  SET is_equipped = v_new_status 
  WHERE id = p_inventory_item_id;

  RETURN jsonb_build_object(
    'success', true,
    'item_id', p_inventory_item_id,
    'item_name', v_item.name,
    'is_equipped', v_new_status
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 5. FUNCIONES DE AVATAR
-- ============================================

-- Recalcular nivel del avatar basado en vectores
CREATE OR REPLACE FUNCTION recalculate_avatar_level(p_avatar_id UUID)
RETURNS VOID AS $$
DECLARE
  v_vectors RECORD;
  v_average DECIMAL(5,2);
  v_new_level INTEGER;
BEGIN
  SELECT * INTO v_vectors FROM avatar_vectors WHERE avatar_id = p_avatar_id;
  
  IF NOT FOUND THEN
    RETURN;
  END IF;

  -- Calcular promedio de vectores (fat es inverso)
  v_average := (
    v_vectors.aura_level + 
    v_vectors.face_level + 
    v_vectors.wealth_level + 
    v_vectors.muscle_level + 
    (14 - v_vectors.fat_level) +  -- Invertir fat (13->1, 1->13)
    v_vectors.env_level
  ) / 6;

  -- Determinar nivel (1-13)
  v_new_level := CASE
    WHEN v_average < 2 THEN 1
    WHEN v_average < 3 THEN 2
    WHEN v_average < 4 THEN 3
    WHEN v_average < 5 THEN 4
    WHEN v_average < 6 THEN 5
    WHEN v_average < 7 THEN 6
    WHEN v_average < 8 THEN 7
    WHEN v_average < 9 THEN 8
    WHEN v_average < 10 THEN 9
    WHEN v_average < 11 THEN 10
    WHEN v_average < 12 THEN 11
    WHEN v_average < 12.5 THEN 12
    ELSE 13
  END;

  UPDATE avatars SET current_level = v_new_level WHERE id = p_avatar_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Resucitar avatar (después de muerte)
CREATE OR REPLACE FUNCTION resurrect_avatar(
  p_avatar_id UUID,
  p_user_id UUID
)
RETURNS JSONB AS $$
DECLARE
  v_avatar RECORD;
  v_vectors RECORD;
BEGIN
  SELECT * INTO v_avatar FROM avatars WHERE id = p_avatar_id AND user_id = p_user_id;
  
  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Avatar not found');
  END IF;

  IF v_avatar.status != 'dead' THEN
    RETURN jsonb_build_object('success', false, 'error', 'Avatar is not dead');
  END IF;

  -- Obtener vectores actuales
  SELECT * INTO v_vectors FROM avatar_vectors WHERE avatar_id = p_avatar_id;

  -- Resetear avatar (conservar mente pero perder físico)
  UPDATE avatars SET
    status = 'active',
    current_day = 1,
    current_level = 1,
    streak_days = 0,
    health_points = 5, -- Empezar con media salud
    died_at = NULL
  WHERE id = p_avatar_id;

  -- Resetear vectores físicos, conservar mente
  UPDATE avatar_vectors SET
    muscle_level = 1.0,
    fat_level = 10.0, -- Gordito pero no máximo
    env_level = GREATEST(1, env_level - 2) -- Perder algo de entorno
  WHERE avatar_id = p_avatar_id;

  RETURN jsonb_build_object(
    'success', true,
    'message', 'Avatar resurrected',
    'conserved', jsonb_build_object(
      'aura', v_vectors.aura_level,
      'face', v_vectors.face_level,
      'wealth', v_vectors.wealth_level
    ),
    'reset', jsonb_build_object(
      'muscle', 1.0,
      'fat', 10.0,
      'day', 1,
      'level', 1
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 6. FUNCIONES DE UTILIDAD
-- ============================================

-- Obtener estadísticas del avatar
CREATE OR REPLACE FUNCTION get_avatar_stats(p_avatar_id UUID)
RETURNS JSONB AS $$
DECLARE
  v_avatar RECORD;
  v_vectors RECORD;
  v_total_tasks INTEGER;
  v_wins INTEGER;
  v_btc_total DECIMAL(10,2);
BEGIN
  SELECT * INTO v_avatar FROM avatars WHERE id = p_avatar_id;
  SELECT * INTO v_vectors FROM avatar_vectors WHERE avatar_id = p_avatar_id;
  
  SELECT 
    COUNT(*),
    COUNT(*) FILTER (WHERE result = 'win')
  INTO v_total_tasks, v_wins
  FROM daily_logs WHERE avatar_id = p_avatar_id;

  SELECT COALESCE(SUM(btc_earned), 0) INTO v_btc_total
  FROM daily_logs WHERE avatar_id = p_avatar_id;

  RETURN jsonb_build_object(
    'avatar', row_to_json(v_avatar),
    'vectors', row_to_json(v_vectors),
    'stats', jsonb_build_object(
      'total_days', v_total_tasks,
      'wins', v_wins,
      'losses', v_total_tasks - v_wins,
      'win_rate', CASE WHEN v_total_tasks > 0 THEN (v_wins::DECIMAL / v_total_tasks * 100) ELSE 0 END,
      'total_btc_earned', v_btc_total
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 7. SUCCESS MESSAGE
-- ============================================
SELECT 'METAMEN100 Database Functions Created Successfully! 🚀' AS message;
