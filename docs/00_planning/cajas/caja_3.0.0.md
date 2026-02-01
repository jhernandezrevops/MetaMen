● 📦 CAJA 03: BASE DE DATOS Y BACKEND

  Desglose Atómico Completo

  ---
  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║                    📦 CAJA 03: BASE DE DATOS Y BACKEND                               ║
  ║                                                                                      ║
  ║    "La base de datos es el corazón del sistema;                                      ║
  ║     si el corazón está mal diseñado, todo el cuerpo falla"                          ║
  ║                                                                                      ║
  ║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
  ║    │                                                                            │   ║
  ║    │   🗄️ 03.1 Schema        🗄️ 03.2 Funciones      🗄️ 03.3 RLS              │   ║
  ║    │   Tablas y Tipos        Postgres Functions      Row Level Security        │   ║
  ║    │                                                                            │   ║
  ║    │   🗄️ 03.4 Índices       🗄️ 03.5 Migraciones    🗄️ 03.6 Types TS         │   ║
  ║    │   Optimización          Versionado DB           Tipos Generados          │   ║
  ║    │                                                                            │   ║
  ║    │   🗄️ 03.7 Cliente       🗄️ 03.8 Actions                                  │   ║
  ║    │   Supabase Clients      Server Actions Base                               │   ║
  ║    │                                                                            │   ║
  ║    └────────────────────────────────────────────────────────────────────────────┘   ║
  ║                                                                                      ║
  ║    Responsable: Claude (Diseño SQL) + Antigravity (Implementación)                  ║
  ║    Entregables: Migraciones SQL, tipos TS, clientes Supabase, Server Actions        ║
  ║    Tiempo Estimado: 4-6 horas de implementación                                     ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝

  ---
  ÍNDICE DE DESGLOSE ATÓMICO

  1. #subcaja-031-schema-de-base-de-datos
  2. #subcaja-032-funciones-de-postgres
  3. #subcaja-033-row-level-security
  4. #subcaja-034-índices-y-optimización
  5. #subcaja-035-migraciones
  6. #subcaja-036-tipos-de-typescript
  7. #subcaja-037-cliente-supabase
  8. #subcaja-038-server-actions-base

  ---
  SUBCAJA 03.1: Schema de Base de Datos

  Definición de Tablas, ENUMs y Tipos

  Archivos a Crear

  Archivos:
  ├── supabase/migrations/
  │   └── 00000000000001_init.sql    # Migración inicial completa
  └── src/types/
      └── database.types.ts           # Tipos generados (auto)

  ---
  03.1.1: ENUMs y Tipos Personalizados

  Estructura SQL Completa

  -- ============================================
  -- ENUMS Y TIPOS PERSONALIZADOS
  -- ============================================

  -- Tipo de tarea (protocolo fijo vs personalizada)
  CREATE TYPE task_type AS ENUM ('protocol', 'custom');

  -- Estado de tarea
  CREATE TYPE task_status AS ENUM ('pending', 'completed', 'failed', 'expired');

  -- Categoría de tarea por Arquetipo
  CREATE TYPE task_category AS ENUM (
    -- Arquetipo MENTAL (afecta aura_lvl)
    'meditation',      -- Meditación
    'cold_shower',     -- Ducha fría
    'reading',         -- Lectura
    'wake_early',      -- Despertar temprano

    -- Arquetipo CARA (afecta face_lvl)
    'posture',         -- Corrección de postura
    'facial',          -- Ejercicios faciales / Mewing
    'kegel',           -- Ejercicios Kegel

    -- Arquetipo PRODUCTIVIDAD (afecta wealth_lvl)
    'journal',         -- Bitácora / Journal
    'skill_learning',  -- Aprendizaje de habilidades
    'focus_work',      -- Trabajo enfocado (Pomodoro)

    -- Arquetipo FÍSICO (afecta muscle_lvl, fat_lvl)
    'strength',        -- Entrenamiento de fuerza
    'cardio',          -- Cardio
    'hydration'        -- Hidratación (1.5L)
  );

  -- Arquetipo de tarea (para agrupar)
  CREATE TYPE task_archetype AS ENUM (
    'mental',        -- AURA
    'face',          -- JAWLINE
    'productivity',  -- WEALTH
    'physical'       -- PHYSIQUE
  );

  -- Estado del día después de Judgement Night
  CREATE TYPE day_status AS ENUM (
    'success',    -- 100% completado
    'partial',    -- 80-99% completado
    'failed',     -- <80% completado
    'death'       -- Usuario murió
  );

  -- Estado de suscripción
  CREATE TYPE subscription_status AS ENUM (
    'trial',      -- Período de prueba (días 1-5)
    'active',     -- Suscripción activa
    'limbo',      -- Trial expirado o pago fallido
    'cancelled'   -- Cancelada
  );

  -- Categoría de item de tienda
  CREATE TYPE item_category AS ENUM (
    'armor',        -- Ropa/Armadura
    'accessories',  -- Accesorios (relojes, cadenas, etc.)
    'vehicles',     -- Vehículos
    'properties',   -- Propiedades (afecta ENV visual)
    'companions',   -- Compañeras
    'pets',         -- Mascotas
    'powerups'      -- Power-ups consumibles
  );

  -- Rareza de item
  CREATE TYPE item_rarity AS ENUM (
    'common',     -- Común
    'uncommon',   -- Poco común
    'rare',       -- Raro
    'epic',       -- Épico
    'legendary'   -- Legendario
  );

  -- Estado de generación de imagen
  CREATE TYPE image_gen_status AS ENUM (
    'pending',     -- En cola
    'processing',  -- Generando
    'completed',   -- Completada
    'failed',      -- Fallida
    'retrying'     -- Reintentando
  );

  -- Tipo de notificación
  CREATE TYPE notification_type AS ENUM (
    'task_completed',
    'level_up',
    'streak_milestone',
    'health_warning',
    'health_critical',
    'avatar_died',
    'image_ready',
    'trial_expiring',
    'payment_failed',
    'general'
  );

  ---
  03.1.2: Tabla profiles

  Estructura SQL

  -- ============================================
  -- TABLA: profiles
  -- Información básica del usuario
  -- ============================================

  CREATE TABLE public.profiles (
    -- Primary Key (misma que auth.users)
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,

    -- Identificación
    nickname VARCHAR(50) UNIQUE NOT NULL,  -- MetaMen1, MetaMen2, etc.
    email VARCHAR(255),                     -- Email del usuario

    -- Verificación de teléfono (anti-multicuenta)
    phone VARCHAR(20) UNIQUE,               -- Número de teléfono
    phone_verified BOOLEAN DEFAULT false,   -- ¿Verificado por SMS?

    -- Configuración
    timezone VARCHAR(50) DEFAULT 'America/Mexico_City',  -- Zona horaria
    locale VARCHAR(10) DEFAULT 'es-MX',                   -- Idioma/región

    -- Arquetipo seleccionado (1-6)
    base_avatar_id SMALLINT CHECK (base_avatar_id BETWEEN 1 AND 6),
    -- 1: Rastas
    -- 2: El Muscles
    -- 3: Pecas
    -- 4: El Greñas
    -- 5: El Rubio
    -- 6: El Lic

    -- Estado de onboarding
    onboarding_completed BOOLEAN DEFAULT false,
    onboarding_step SMALLINT DEFAULT 0,      -- Paso actual del onboarding
    oath_signed_at TIMESTAMPTZ,              -- Cuándo firmó el juramento

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
  );

  -- Índices
  CREATE INDEX idx_profiles_nickname ON public.profiles(nickname);
  CREATE INDEX idx_profiles_phone ON public.profiles(phone) WHERE phone IS NOT NULL;

  -- Trigger para updated_at
  CREATE TRIGGER set_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_update_updated_at();

  -- Comentarios
  COMMENT ON TABLE public.profiles IS 'Información básica del usuario y configuración';
  COMMENT ON COLUMN public.profiles.base_avatar_id IS 'Arquetipo visual: 1=Rastas, 2=Muscles, 3=Pecas, 4=Greñas, 5=Rubio, 6=Lic';

  ---
  03.1.3: Tabla avatar_states

  Estructura SQL (VECTORES ACTUALIZADOS DEL CUESTIONARIO1)

  -- ============================================
  -- TABLA: avatar_states
  -- Estado actual del avatar (vectores, salud, progreso)
  -- VECTORES: AURA, JAWLINE, WEALTH, PHYSIQUE (muscle+fat), ENV
  -- ============================================

  CREATE TABLE public.avatar_states (
    -- Primary Key / Foreign Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- ============================================
    -- VECTORES DE TRANSFORMACIÓN
    -- ============================================

    -- Vector AURA (Arquetipo Mental)
    -- Afectado por: meditation, cold_shower, reading, wake_early
    -- Rango: 1.00 - 13.00 (ascendente)
    aura_lvl DECIMAL(4,2) DEFAULT 1.00 NOT NULL
      CHECK (aura_lvl >= 1.00 AND aura_lvl <= 13.00),

    -- Vector JAWLINE (Arquetipo Cara)
    -- Afectado por: posture, facial, kegel
    -- Rango: 1.00 - 13.00 (ascendente)
    face_lvl DECIMAL(4,2) DEFAULT 1.00 NOT NULL
      CHECK (face_lvl >= 1.00 AND face_lvl <= 13.00),

    -- Vector WEALTH (Arquetipo Productividad)
    -- Afectado por: journal, skill_learning, focus_work
    -- Rango: 1.00 - 13.00 (ascendente)
    wealth_lvl DECIMAL(4,2) DEFAULT 1.00 NOT NULL
      CHECK (wealth_lvl >= 1.00 AND wealth_lvl <= 13.00),

    -- Vector PHYSIQUE: MÚSCULO (Arquetipo Físico)
    -- Afectado por: strength, hydration
    -- Rango: 1.00 - 13.00 (ascendente)
    muscle_lvl DECIMAL(4,2) DEFAULT 1.00 NOT NULL
      CHECK (muscle_lvl >= 1.00 AND muscle_lvl <= 13.00),

    -- Vector PHYSIQUE: GRASA (Arquetipo Físico)
    -- Afectado por: cardio, hydration
    -- Rango: 13.00 - 1.00 (INVERSO: 13=máxima grasa, 1=definido)
    fat_lvl DECIMAL(4,2) DEFAULT 13.00 NOT NULL
      CHECK (fat_lvl >= 1.00 AND fat_lvl <= 13.00),

    -- Vector ENV (Entorno)
    -- Progresión basada en nivel y tiempo
    -- Rango: 1 - 13 (entero)
    env_lvl SMALLINT DEFAULT 1 NOT NULL
      CHECK (env_lvl >= 1 AND env_lvl <= 13),

    -- ============================================
    -- SISTEMA DE SALUD
    -- ============================================

    -- Corazones actuales (0 = muerte)
    -- Base: 10, Expandible a 13 en post-game
    health_points SMALLINT DEFAULT 10 NOT NULL
      CHECK (health_points >= 0 AND health_points <= 13),

    -- Máximo de corazones (10 base, 13 expandido)
    max_health_points SMALLINT DEFAULT 10 NOT NULL
      CHECK (max_health_points >= 10 AND max_health_points <= 13),

    -- ============================================
    -- PROGRESIÓN DEL PROTOCOLO
    -- ============================================

    -- Día actual del protocolo (1-100, puede superar 100 en post-game)
    current_day SMALLINT DEFAULT 1 NOT NULL
      CHECK (current_day >= 1),

    -- Nivel actual del usuario
    -- 1-10: Niveles base (Indigente → Semi-Dios)
    -- 11-13: Post-game (Élite, Leyenda, Inmortal)
    current_level SMALLINT DEFAULT 1 NOT NULL
      CHECK (current_level >= 1 AND current_level <= 13),

    -- Racha actual de días exitosos
    streak_days SMALLINT DEFAULT 0 NOT NULL
      CHECK (streak_days >= 0),

    -- Mayor racha alcanzada (para estadísticas)
    max_streak_days SMALLINT DEFAULT 0 NOT NULL
      CHECK (max_streak_days >= 0),

    -- ============================================
    -- IMAGEN DEL AVATAR
    -- ============================================

    -- URL de la última imagen generada
    last_image_url TEXT,

    -- Cuándo se generó la última imagen
    last_image_generated_at TIMESTAMPTZ,

    -- ============================================
    -- ESTADÍSTICAS ACUMULADAS
    -- ============================================

    -- Total de días completados exitosamente
    total_days_completed SMALLINT DEFAULT 0 NOT NULL,

    -- Total de tareas completadas
    total_tasks_completed INTEGER DEFAULT 0 NOT NULL,

    -- Veces que el avatar ha muerto
    death_count SMALLINT DEFAULT 0 NOT NULL,

    -- ============================================
    -- METADATA
    -- ============================================

    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
  );

  -- Índices
  CREATE INDEX idx_avatar_states_user_id ON public.avatar_states(user_id);
  CREATE INDEX idx_avatar_states_current_day ON public.avatar_states(current_day);
  CREATE INDEX idx_avatar_states_current_level ON public.avatar_states(current_level);

  -- Trigger para updated_at
  CREATE TRIGGER set_avatar_states_updated_at
    BEFORE UPDATE ON public.avatar_states
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_update_updated_at();

  -- Comentarios
  COMMENT ON TABLE public.avatar_states IS 'Estado actual del avatar: vectores, salud, progresión';
  COMMENT ON COLUMN public.avatar_states.aura_lvl IS 'Vector AURA: presencia, magnetismo (1-13, Arquetipo Mental)';
  COMMENT ON COLUMN public.avatar_states.face_lvl IS 'Vector JAWLINE: definición facial (1-13, Arquetipo Cara)';
  COMMENT ON COLUMN public.avatar_states.wealth_lvl IS 'Vector WEALTH: apariencia de éxito (1-13, Arquetipo Productividad)';
  COMMENT ON COLUMN public.avatar_states.muscle_lvl IS 'Vector PHYSIQUE-Músculo: masa muscular (1-13, Arquetipo Físico)';
  COMMENT ON COLUMN public.avatar_states.fat_lvl IS 'Vector PHYSIQUE-Grasa: grasa corporal (13=obeso → 1=definido, INVERSO)';
  COMMENT ON COLUMN public.avatar_states.env_lvl IS 'Vector ENV: calidad del entorno (1-13)';

  ---
  03.1.4: Tabla wallets

  Estructura SQL

  -- ============================================
  -- TABLA: wallets
  -- Balance de BTC virtual del usuario
  -- ============================================

  CREATE TABLE public.wallets (
    -- Primary Key / Foreign Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- Balance actual de BTC
    btc_balance INTEGER DEFAULT 0 NOT NULL CHECK (btc_balance >= 0),

    -- Estadísticas
    total_earned INTEGER DEFAULT 0 NOT NULL,   -- Total ganado históricamente
    total_spent INTEGER DEFAULT 0 NOT NULL,    -- Total gastado en tienda

    -- Límites diarios (anti-farming)
    today_earned INTEGER DEFAULT 0 NOT NULL,   -- BTC ganados hoy
    daily_cap INTEGER DEFAULT 500 NOT NULL,    -- Máximo por día sin bonos
    last_reset_date DATE DEFAULT CURRENT_DATE, -- Última vez que se reseteó today_earned

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
  );

  -- Índices
  CREATE INDEX idx_wallets_user_id ON public.wallets(user_id);
  CREATE INDEX idx_wallets_balance ON public.wallets(btc_balance);

  -- Trigger para updated_at
  CREATE TRIGGER set_wallets_updated_at
    BEFORE UPDATE ON public.wallets
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_update_updated_at();

  -- Comentarios
  COMMENT ON TABLE public.wallets IS 'Balance de BTC virtual del usuario';
  COMMENT ON COLUMN public.wallets.btc_balance IS 'Balance actual de BTC (moneda virtual)';
  COMMENT ON COLUMN public.wallets.daily_cap IS 'Máximo de BTC ganables por día (sin bonos)';

  ---
  03.1.5: Tabla subscriptions

  Estructura SQL

  -- ============================================
  -- TABLA: subscriptions
  -- Estado de suscripción y pagos
  -- ============================================

  CREATE TABLE public.subscriptions (
    -- Primary Key / Foreign Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- Estado actual
    status subscription_status DEFAULT 'trial' NOT NULL,

    -- Stripe IDs
    stripe_customer_id VARCHAR(255),
    stripe_subscription_id VARCHAR(255),
    stripe_price_id VARCHAR(255),

    -- Período de trial
    trial_starts_at TIMESTAMPTZ DEFAULT NOW(),
    trial_ends_at TIMESTAMPTZ,  -- Día 6 a las 00:00 hora local

    -- Período de suscripción actual
    current_period_start TIMESTAMPTZ,
    current_period_end TIMESTAMPTZ,

    -- Modo Limbo
    limbo_started_at TIMESTAMPTZ,  -- Cuándo entró en limbo
    limbo_health_penalty_applied_at TIMESTAMPTZ,  -- Último penalty de salud

    -- Cancelación
    cancel_at_period_end BOOLEAN DEFAULT false,
    cancelled_at TIMESTAMPTZ,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
  );

  -- Índices
  CREATE INDEX idx_subscriptions_user_id ON public.subscriptions(user_id);
  CREATE INDEX idx_subscriptions_status ON public.subscriptions(status);
  CREATE INDEX idx_subscriptions_stripe_customer ON public.subscriptions(stripe_customer_id);
  CREATE INDEX idx_subscriptions_trial_ends ON public.subscriptions(trial_ends_at)
    WHERE status = 'trial';

  -- Trigger para updated_at
  CREATE TRIGGER set_subscriptions_updated_at
    BEFORE UPDATE ON public.subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_update_updated_at();

  -- Comentarios
  COMMENT ON TABLE public.subscriptions IS 'Estado de suscripción y datos de Stripe';
  COMMENT ON COLUMN public.subscriptions.trial_ends_at IS 'El trial termina el día 6 a las 00:00';
  COMMENT ON COLUMN public.subscriptions.limbo_started_at IS 'Timestamp de entrada a modo limbo';

  ---
  03.1.6: Tabla daily_tasks

  Estructura SQL

  -- ============================================
  -- TABLA: daily_tasks
  -- Tareas diarias del usuario
  -- ============================================

  CREATE TABLE public.daily_tasks (
    -- Primary Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Foreign Key
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- Identificación de la tarea
    day_number SMALLINT NOT NULL,              -- Día del protocolo (1-100+)
    task_date DATE NOT NULL,                    -- Fecha real de la tarea

    -- Tipo y categoría
    task_type task_type NOT NULL,               -- 'protocol' o 'custom'
    task_category task_category NOT NULL,       -- Categoría específica
    task_archetype task_archetype NOT NULL,     -- Arquetipo (mental, face, etc.)

    -- Contenido
    title VARCHAR(100) NOT NULL,                -- Título de la tarea
    description TEXT,                           -- Descripción/instrucciones

    -- Estado
    status task_status DEFAULT 'pending' NOT NULL,
    completed_at TIMESTAMPTZ,

    -- Recompensa
    btc_reward SMALLINT DEFAULT 0 NOT NULL,     -- BTC al completar

    -- Modificadores de vectores (se aplican al completar)
    vector_modifiers JSONB DEFAULT '{}',
    -- Ejemplo: {"aura_lvl": 0.05, "face_lvl": 0.03}

    -- Duración (para tareas con tiempo)
    duration_minutes SMALLINT,                   -- Duración esperada
    actual_duration_minutes SMALLINT,            -- Duración real

    -- Herramienta asociada
    tool_id VARCHAR(50),                         -- ID de herramienta (library, gym, etc.)

    -- Para tareas personalizadas
    is_custom BOOLEAN DEFAULT false,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

    -- Constraints
    CONSTRAINT unique_user_day_category UNIQUE (user_id, day_number, task_category, task_type)
  );

  -- Índices
  CREATE INDEX idx_daily_tasks_user_id ON public.daily_tasks(user_id);
  CREATE INDEX idx_daily_tasks_user_day ON public.daily_tasks(user_id, day_number);
  CREATE INDEX idx_daily_tasks_user_date ON public.daily_tasks(user_id, task_date);
  CREATE INDEX idx_daily_tasks_status ON public.daily_tasks(status);
  CREATE INDEX idx_daily_tasks_pending ON public.daily_tasks(user_id, status)
    WHERE status = 'pending';

  -- Trigger para updated_at
  CREATE TRIGGER set_daily_tasks_updated_at
    BEFORE UPDATE ON public.daily_tasks
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_update_updated_at();

  -- Comentarios
  COMMENT ON TABLE public.daily_tasks IS 'Tareas diarias del protocolo y personalizadas';
  COMMENT ON COLUMN public.daily_tasks.vector_modifiers IS 'JSON con modificadores: {"aura_lvl": 0.05}';
  COMMENT ON COLUMN public.daily_tasks.tool_id IS 'Herramienta asociada: library, gym, meditation, etc.';

  ---
  03.1.7: Tabla daily_logs

  Estructura SQL

  -- ============================================
  -- TABLA: daily_logs
  -- Registro histórico de cada día completado
  -- ============================================

  CREATE TABLE public.daily_logs (
    -- Primary Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Foreign Key
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- Identificación del día
    day_number SMALLINT NOT NULL,
    log_date DATE NOT NULL,

    -- Resultado del día
    status day_status NOT NULL,

    -- Métricas del día
    tasks_completed SMALLINT NOT NULL,
    tasks_total SMALLINT NOT NULL,
    completion_rate DECIMAL(5,2) NOT NULL,  -- Porcentaje (0.00 - 100.00)

    -- Recompensas del día
    btc_earned INTEGER DEFAULT 0 NOT NULL,
    streak_bonus INTEGER DEFAULT 0,
    day_bonus INTEGER DEFAULT 0,

    -- Cambios de salud
    health_change SMALLINT DEFAULT 0,       -- Puede ser negativo
    health_after SMALLINT NOT NULL,         -- Salud después del día

    -- Cambios de racha
    streak_before SMALLINT NOT NULL,
    streak_after SMALLINT NOT NULL,

    -- Snapshot de vectores al cierre del día
    vectors_snapshot JSONB NOT NULL,
    -- Ejemplo: {"aura_lvl": 5.25, "face_lvl": 3.00, ...}

    -- Imagen generada
    image_url TEXT,
    image_generated_at TIMESTAMPTZ,

    -- Timestamps
    closed_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,  -- Cuándo se cerró el día
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

    -- Constraints
    CONSTRAINT unique_user_day_log UNIQUE (user_id, day_number)
  );

  -- Índices
  CREATE INDEX idx_daily_logs_user_id ON public.daily_logs(user_id);
  CREATE INDEX idx_daily_logs_user_day ON public.daily_logs(user_id, day_number);
  CREATE INDEX idx_daily_logs_date ON public.daily_logs(log_date);
  CREATE INDEX idx_daily_logs_status ON public.daily_logs(status);

  -- Comentarios
  COMMENT ON TABLE public.daily_logs IS 'Registro histórico inmutable de cada día';
  COMMENT ON COLUMN public.daily_logs.vectors_snapshot IS 'Snapshot de todos los vectores al cierre';
  COMMENT ON COLUMN public.daily_logs.closed_at IS 'Timestamp de Judgement Night';

  ---
  03.1.8: Tabla store_items

  Estructura SQL

  -- ============================================
  -- TABLA: store_items
  -- Catálogo de items de la tienda
  -- ============================================

  CREATE TABLE public.store_items (
    -- Primary Key
    id SERIAL PRIMARY KEY,

    -- Identificación
    slug VARCHAR(50) UNIQUE NOT NULL,           -- Identificador único legible
    name VARCHAR(100) NOT NULL,                  -- Nombre del item
    description TEXT,                            -- Descripción

    -- Categorización
    category item_category NOT NULL,
    rarity item_rarity DEFAULT 'common' NOT NULL,

    -- Precio y requisitos
    price_btc INTEGER NOT NULL CHECK (price_btc >= 0),
    level_required SMALLINT DEFAULT 1 NOT NULL CHECK (level_required >= 1 AND level_required <= 13),

    -- Gating adicional (requisitos de vectores)
    vector_requirements JSONB DEFAULT '{}',
    -- Ejemplo: {"fat_lvl": {"max": 5}} = requiere fat_lvl <= 5 (estar fit)

    -- Tokens para IA (se agregan al prompt de generación)
    prompt_tokens TEXT,
    -- Ejemplo: "wearing expensive gold rolex watch, luxury timepiece"

    -- Visuales
    preview_image_url TEXT,

    -- Disponibilidad
    is_active BOOLEAN DEFAULT true,
    is_limited BOOLEAN DEFAULT false,           -- ¿Es edición limitada?
    stock_quantity INTEGER,                      -- NULL = ilimitado

    -- Orden de display
    sort_order INTEGER DEFAULT 0,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
  );

  -- Índices
  CREATE INDEX idx_store_items_category ON public.store_items(category);
  CREATE INDEX idx_store_items_level ON public.store_items(level_required);
  CREATE INDEX idx_store_items_active ON public.store_items(is_active) WHERE is_active = true;
  CREATE INDEX idx_store_items_price ON public.store_items(price_btc);

  -- Trigger para updated_at
  CREATE TRIGGER set_store_items_updated_at
    BEFORE UPDATE ON public.store_items
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_update_updated_at();

  -- Comentarios
  COMMENT ON TABLE public.store_items IS 'Catálogo de items disponibles en tienda';
  COMMENT ON COLUMN public.store_items.vector_requirements IS 'Requisitos de vectores: {"fat_lvl": {"max": 5}}';
  COMMENT ON COLUMN public.store_items.prompt_tokens IS 'Tokens para agregar al prompt de IA';

  ---
  03.1.9: Tabla inventory

  Estructura SQL

  -- ============================================
  -- TABLA: inventory
  -- Items comprados por el usuario
  -- ============================================

  CREATE TABLE public.inventory (
    -- Primary Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Foreign Keys
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    item_id INTEGER NOT NULL REFERENCES public.store_items(id),

    -- Estado
    equipped BOOLEAN DEFAULT false,             -- ¿Está equipado actualmente?
    locked_until_level SMALLINT,                -- Si murió, nivel requerido para desbloquear

    -- Metadata de compra
    purchased_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    price_paid INTEGER NOT NULL,                -- Precio al momento de compra

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

    -- Constraints
    CONSTRAINT unique_user_item UNIQUE (user_id, item_id)
  );

  -- Índices
  CREATE INDEX idx_inventory_user_id ON public.inventory(user_id);
  CREATE INDEX idx_inventory_equipped ON public.inventory(user_id, equipped) WHERE equipped = true;
  CREATE INDEX idx_inventory_locked ON public.inventory(user_id, locked_until_level)
    WHERE locked_until_level IS NOT NULL;

  -- Trigger para updated_at
  CREATE TRIGGER set_inventory_updated_at
    BEFORE UPDATE ON public.inventory
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_update_updated_at();

  -- Comentarios
  COMMENT ON TABLE public.inventory IS 'Items comprados por el usuario';
  COMMENT ON COLUMN public.inventory.locked_until_level IS 'Si murió, debe alcanzar este nivel para usar el item';

  ---
  03.1.10: Tabla tool_progress

  Estructura SQL

  -- ============================================
  -- TABLA: tool_progress
  -- Progreso en las herramientas del arsenal
  -- ============================================

  CREATE TABLE public.tool_progress (
    -- Primary Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Foreign Key
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- Herramienta
    tool_id VARCHAR(50) NOT NULL,
    -- Valores: 'library', 'gym', 'meditation', 'journal',
    --          'kegel', 'facial', 'hypnosis', 'mobility', 'focus'

    -- Progreso específico por herramienta (flexible)
    progress_data JSONB DEFAULT '{}',
    -- Ejemplos:
    -- library: {"current_book": "uuid", "pages_read": 150, "books_completed": 2}
    -- gym: {"current_routine": "push", "total_workouts": 45, "last_weights": {...}}
    -- meditation: {"total_minutes": 500, "sessions_completed": 30}
    -- journal: {"total_entries": 25, "total_words": 15000}
    -- focus: {"total_pomodoros": 100, "total_focus_hours": 150}

    -- Estadísticas generales
    total_sessions INTEGER DEFAULT 0,
    total_time_minutes INTEGER DEFAULT 0,
    last_used_at TIMESTAMPTZ,

    -- Streak específico de la herramienta
    current_streak SMALLINT DEFAULT 0,
    max_streak SMALLINT DEFAULT 0,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

    -- Constraints
    CONSTRAINT unique_user_tool UNIQUE (user_id, tool_id)
  );

  -- Índices
  CREATE INDEX idx_tool_progress_user_id ON public.tool_progress(user_id);
  CREATE INDEX idx_tool_progress_tool ON public.tool_progress(tool_id);
  CREATE INDEX idx_tool_progress_user_tool ON public.tool_progress(user_id, tool_id);

  -- Trigger para updated_at
  CREATE TRIGGER set_tool_progress_updated_at
    BEFORE UPDATE ON public.tool_progress
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_update_updated_at();

  -- Comentarios
  COMMENT ON TABLE public.tool_progress IS 'Progreso del usuario en cada herramienta del arsenal';
  COMMENT ON COLUMN public.tool_progress.progress_data IS 'JSON flexible con datos específicos de la herramienta';

  ---
  03.1.11: Tabla activity_logs

  Estructura SQL

  -- ============================================
  -- TABLA: activity_logs
  -- Log de actividad para analytics y debugging
  -- ============================================

  CREATE TABLE public.activity_logs (
    -- Primary Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Foreign Key
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- Acción
    action VARCHAR(100) NOT NULL,
    -- Ejemplos: 'task_completed', 'item_purchased', 'level_up',
    --           'streak_broken', 'avatar_died', 'image_generated'

    -- Detalles de la acción
    details JSONB DEFAULT '{}',
    -- Ejemplo task_completed: {"task_id": "uuid", "category": "meditation", "btc_earned": 15}
    -- Ejemplo level_up: {"from_level": 3, "to_level": 4, "bonus_btc": 400}

    -- Contexto
    ip_address INET,
    user_agent TEXT,

    -- Timestamp
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
  );

  -- Índices
  CREATE INDEX idx_activity_logs_user_id ON public.activity_logs(user_id);
  CREATE INDEX idx_activity_logs_action ON public.activity_logs(action);
  CREATE INDEX idx_activity_logs_created ON public.activity_logs(created_at);
  CREATE INDEX idx_activity_logs_user_action ON public.activity_logs(user_id, action);

  -- Partición por mes (opcional, para escala)
  -- CREATE INDEX idx_activity_logs_created_month ON public.activity_logs(date_trunc('month', created_at));

  -- Comentarios
  COMMENT ON TABLE public.activity_logs IS 'Log de actividad para analytics y auditoría';
  COMMENT ON COLUMN public.activity_logs.details IS 'JSON con detalles específicos de la acción';

  ---
  03.1.12: Tabla image_generation_queue

  Estructura SQL

  -- ============================================
  -- TABLA: image_generation_queue
  -- Cola de generación de imágenes
  -- ============================================

  CREATE TABLE public.image_generation_queue (
    -- Primary Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Foreign Key
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- Estado
    status image_gen_status DEFAULT 'pending' NOT NULL,

    -- Prioridad (menor = más prioritario)
    priority SMALLINT DEFAULT 5 NOT NULL CHECK (priority >= 1 AND priority <= 10),
    -- 1-3: Alta (día exitoso)
    -- 4-6: Normal (día parcial)
    -- 7-10: Baja (día fallido, regeneración manual)

    -- Contexto de generación
    day_number SMALLINT NOT NULL,
    day_status day_status,

    -- Prompt generado
    prompt TEXT NOT NULL,
    negative_prompt TEXT,

    -- Parámetros de generación
    generation_params JSONB DEFAULT '{}',
    -- Ejemplo: {"model": "sdxl", "steps": 30, "cfg_scale": 7}

    -- Resultado
    result_url TEXT,
    result_metadata JSONB,

    -- Reintentos
    attempts SMALLINT DEFAULT 0,
    max_attempts SMALLINT DEFAULT 3,
    last_error TEXT,

    -- Timestamps
    queued_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
  );

  -- Índices
  CREATE INDEX idx_image_queue_user_id ON public.image_generation_queue(user_id);
  CREATE INDEX idx_image_queue_status ON public.image_generation_queue(status);
  CREATE INDEX idx_image_queue_pending ON public.image_generation_queue(status, priority, queued_at)
    WHERE status = 'pending';
  CREATE INDEX idx_image_queue_processing ON public.image_generation_queue(status)
    WHERE status = 'processing';

  -- Trigger para updated_at
  CREATE TRIGGER set_image_queue_updated_at
    BEFORE UPDATE ON public.image_generation_queue
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_update_updated_at();

  -- Comentarios
  COMMENT ON TABLE public.image_generation_queue IS 'Cola de generación de imágenes de avatar';
  COMMENT ON COLUMN public.image_generation_queue.priority IS '1-3: Alta, 4-6: Normal, 7-10: Baja';

  ---
  03.1.13: Tabla notifications

  Estructura SQL

  -- ============================================
  -- TABLA: notifications
  -- Notificaciones persistentes del usuario
  -- ============================================

  CREATE TABLE public.notifications (
    -- Primary Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Foreign Key
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- Tipo y contenido
    type notification_type NOT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,

    -- Datos adicionales
    data JSONB DEFAULT '{}',
    -- Ejemplo level_up: {"new_level": 5, "level_name": "Godín"}

    -- Estado
    is_read BOOLEAN DEFAULT false,
    read_at TIMESTAMPTZ,

    -- Acciones
    action_url TEXT,                 -- URL a la que lleva al hacer click
    action_label VARCHAR(50),        -- Texto del botón de acción

    -- Expiración
    expires_at TIMESTAMPTZ,          -- NULL = no expira

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
  );

  -- Índices
  CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
  CREATE INDEX idx_notifications_unread ON public.notifications(user_id, is_read)
    WHERE is_read = false;
  CREATE INDEX idx_notifications_type ON public.notifications(type);
  CREATE INDEX idx_notifications_created ON public.notifications(created_at);

  -- Comentarios
  COMMENT ON TABLE public.notifications IS 'Notificaciones in-app persistentes';
  COMMENT ON COLUMN public.notifications.action_url IS 'Ruta interna o URL externa';

  ---
  03.1.14: Tabla idempotency_keys

  Estructura SQL

  -- ============================================
  -- TABLA: idempotency_keys
  -- Garantiza operaciones idempotentes
  -- ============================================

  CREATE TABLE public.idempotency_keys (
    -- Primary Key
    key VARCHAR(255) PRIMARY KEY,

    -- Foreign Key
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- Acción
    action VARCHAR(100) NOT NULL,

    -- Resultado cacheado
    result JSONB,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '24 hours') NOT NULL
  );

  -- Índices
  CREATE INDEX idx_idempotency_user ON public.idempotency_keys(user_id);
  CREATE INDEX idx_idempotency_expires ON public.idempotency_keys(expires_at);

  -- Limpieza automática de keys expiradas (usando pg_cron o cron job externo)
  -- DELETE FROM public.idempotency_keys WHERE expires_at < NOW();

  -- Comentarios
  COMMENT ON TABLE public.idempotency_keys IS 'Keys de idempotencia para operaciones críticas';
  COMMENT ON COLUMN public.idempotency_keys.expires_at IS 'Las keys expiran después de 24 horas';

  ---
  Tareas Atómicas para 03.1 Schema

  TAREA-03.1.1:
    Nombre: "Crear archivo de migración inicial"
    Acción: "Crear supabase/migrations/00000000000001_init.sql"
    Responsable: Antigravity
    Output: "Archivo de migración vacío con header"
    Comando: |
      touch supabase/migrations/00000000000001_init.sql
    Criterio de Éxito: "Archivo existe"

  TAREA-03.1.2:
    Nombre: "Agregar función helper updated_at"
    Acción: "Crear función trigger para updated_at"
    Responsable: Antigravity
    SQL: |
      CREATE OR REPLACE FUNCTION public.fn_update_updated_at()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = NOW();
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    Criterio de Éxito: "Función creada sin errores"

  TAREA-03.1.3:
    Nombre: "Crear ENUMs y tipos personalizados"
    Acción: "Agregar todos los ENUMs al SQL"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.1"
    Criterio de Éxito: "Todos los ENUMs creados"

  TAREA-03.1.4:
    Nombre: "Crear tabla profiles"
    Acción: "Agregar CREATE TABLE profiles"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.2"
    Criterio de Éxito: "Tabla creada con índices y trigger"

  TAREA-03.1.5:
    Nombre: "Crear tabla avatar_states"
    Acción: "Agregar CREATE TABLE avatar_states con vectores correctos"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.3"
    Nota: "IMPORTANTE: Usar los vectores del cuestionario1 (aura_lvl, face_lvl, wealth_lvl, muscle_lvl, fat_lvl, env_lvl)"
    Criterio de Éxito: "Tabla creada con todos los vectores"

  TAREA-03.1.6:
    Nombre: "Crear tabla wallets"
    Acción: "Agregar CREATE TABLE wallets"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.4"
    Criterio de Éxito: "Tabla creada"

  TAREA-03.1.7:
    Nombre: "Crear tabla subscriptions"
    Acción: "Agregar CREATE TABLE subscriptions"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.5"
    Criterio de Éxito: "Tabla creada"

  TAREA-03.1.8:
    Nombre: "Crear tabla daily_tasks"
    Acción: "Agregar CREATE TABLE daily_tasks con categorías por arquetipo"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.6"
    Criterio de Éxito: "Tabla creada con categorías correctas"

  TAREA-03.1.9:
    Nombre: "Crear tabla daily_logs"
    Acción: "Agregar CREATE TABLE daily_logs"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.7"
    Criterio de Éxito: "Tabla creada"

  TAREA-03.1.10:
    Nombre: "Crear tabla store_items"
    Acción: "Agregar CREATE TABLE store_items"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.8"
    Criterio de Éxito: "Tabla creada"

  TAREA-03.1.11:
    Nombre: "Crear tabla inventory"
    Acción: "Agregar CREATE TABLE inventory"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.9"
    Criterio de Éxito: "Tabla creada"

  TAREA-03.1.12:
    Nombre: "Crear tabla tool_progress"
    Acción: "Agregar CREATE TABLE tool_progress"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.10"
    Criterio de Éxito: "Tabla creada"

  TAREA-03.1.13:
    Nombre: "Crear tabla activity_logs"
    Acción: "Agregar CREATE TABLE activity_logs"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.11"
    Criterio de Éxito: "Tabla creada"

  TAREA-03.1.14:
    Nombre: "Crear tabla image_generation_queue"
    Acción: "Agregar CREATE TABLE image_generation_queue"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.12"
    Criterio de Éxito: "Tabla creada"

  TAREA-03.1.15:
    Nombre: "Crear tabla notifications"
    Acción: "Agregar CREATE TABLE notifications"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.13"
    Criterio de Éxito: "Tabla creada"

  TAREA-03.1.16:
    Nombre: "Crear tabla idempotency_keys"
    Acción: "Agregar CREATE TABLE idempotency_keys"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.1.14"
    Criterio de Éxito: "Tabla creada"

  TAREA-03.1.17:
    Nombre: "Validar migración completa"
    Acción: "Ejecutar migración en Supabase local"
    Responsable: Antigravity
    Comando: |
      pnpm supabase db reset
    Criterio de Éxito: "Migración ejecuta sin errores"

  ---
  SUBCAJA 03.2: Funciones de Postgres

  Stored Procedures y Triggers

  Archivos a Crear

  Ubicación: supabase/migrations/00000000000001_init.sql
  (Se agregan al final de la migración inicial)

  ---
  03.2.1: Función fn_handle_new_user

  Trigger que se ejecuta al crear usuario en auth.users

  -- ============================================
  -- FUNCIÓN: fn_handle_new_user
  -- Se ejecuta automáticamente al crear usuario en auth.users
  -- Crea: profile, avatar_state, wallet, subscription
  -- ============================================

  CREATE OR REPLACE FUNCTION public.fn_handle_new_user()
  RETURNS TRIGGER AS $$
  DECLARE
    v_nickname VARCHAR(50);
    v_user_count INTEGER;
    v_trial_end TIMESTAMPTZ;
  BEGIN
    -- Generar nickname secuencial (MetaMen1, MetaMen2, ...)
    SELECT COUNT(*) + 1 INTO v_user_count FROM public.profiles;
    v_nickname := 'MetaMen' || v_user_count::TEXT;

    -- Calcular fin de trial (día 6 a las 00:00)
    -- Trial = 5 días completos, termina al inicio del día 6
    v_trial_end := (DATE_TRUNC('day', NOW()) + INTERVAL '5 days')::TIMESTAMPTZ;

    -- 1. Crear profile
    INSERT INTO public.profiles (id, nickname, email)
    VALUES (
      NEW.id,
      v_nickname,
      NEW.email
    );

    -- 2. Crear avatar_state (valores iniciales según cuestionario1)
    INSERT INTO public.avatar_states (
      user_id,
      aura_lvl,      -- AURA: 1.00
      face_lvl,      -- JAWLINE: 1.00
      wealth_lvl,    -- WEALTH: 1.00
      muscle_lvl,    -- PHYSIQUE-Músculo: 1.00
      fat_lvl,       -- PHYSIQUE-Grasa: 13.00 (máxima grasa inicial)
      env_lvl,       -- ENV: 1
      health_points, -- 10 corazones
      max_health_points,
      current_day,
      current_level,
      streak_days
    )
    VALUES (
      NEW.id,
      1.00,   -- aura_lvl
      1.00,   -- face_lvl
      1.00,   -- wealth_lvl
      1.00,   -- muscle_lvl
      13.00,  -- fat_lvl (INVERSO: 13 = máxima grasa)
      1,      -- env_lvl
      10,     -- health_points
      10,     -- max_health_points
      1,      -- current_day
      1,      -- current_level (Indigente)
      0       -- streak_days
    );

    -- 3. Crear wallet
    INSERT INTO public.wallets (user_id, btc_balance)
    VALUES (NEW.id, 0);

    -- 4. Crear subscription en trial
    INSERT INTO public.subscriptions (
      user_id,
      status,
      trial_starts_at,
      trial_ends_at
    )
    VALUES (
      NEW.id,
      'trial',
      NOW(),
      v_trial_end
    );

    -- 5. Log de actividad
    INSERT INTO public.activity_logs (user_id, action, details)
    VALUES (
      NEW.id,
      'user_registered',
      jsonb_build_object(
        'nickname', v_nickname,
        'trial_ends_at', v_trial_end
      )
    );

    RETURN NEW;
  END;
  $$ LANGUAGE plpgsql SECURITY DEFINER;

  -- Trigger en auth.users
  CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_handle_new_user();

  -- Comentarios
  COMMENT ON FUNCTION public.fn_handle_new_user() IS
    'Crea profile, avatar_state, wallet y subscription al registrar usuario';

  ---
  03.2.2: Función fn_complete_task_transaction

  Transacción atómica para completar tarea

  -- ============================================
  -- FUNCIÓN: fn_complete_task_transaction
  -- Completa una tarea de forma atómica
  -- ============================================

  CREATE OR REPLACE FUNCTION public.fn_complete_task_transaction(
    p_user_id UUID,
    p_task_id UUID,
    p_idempotency_key VARCHAR(255) DEFAULT NULL
  )
  RETURNS JSONB AS $$
  DECLARE
    v_task RECORD;
    v_avatar RECORD;
    v_wallet RECORD;
    v_subscription RECORD;
    v_btc_reward INTEGER;
    v_streak_multiplier DECIMAL(3,2);
    v_final_reward INTEGER;
    v_vector_changes JSONB;
    v_result JSONB;
    v_existing_result JSONB;
  BEGIN
    -- 1. Verificar idempotencia
    IF p_idempotency_key IS NOT NULL THEN
      SELECT result INTO v_existing_result
      FROM public.idempotency_keys
      WHERE key = p_idempotency_key AND user_id = p_user_id;

      IF FOUND THEN
        RETURN v_existing_result;
      END IF;
    END IF;

    -- 2. Lock advisory para evitar race conditions
    PERFORM pg_advisory_xact_lock(hashtext(p_user_id::text || '_task'));

    -- 3. Obtener tarea con lock
    SELECT * INTO v_task
    FROM public.daily_tasks
    WHERE id = p_task_id AND user_id = p_user_id
    FOR UPDATE;

    IF NOT FOUND THEN
      RAISE EXCEPTION 'Task not found';
    END IF;

    IF v_task.status != 'pending' THEN
      RAISE EXCEPTION 'Task already processed: %', v_task.status;
    END IF;

    -- 4. Obtener estado del avatar
    SELECT * INTO v_avatar
    FROM public.avatar_states
    WHERE user_id = p_user_id
    FOR UPDATE;

    -- 5. Verificar que la tarea es del día actual
    IF v_task.day_number != v_avatar.current_day THEN
      RAISE EXCEPTION 'Task day mismatch: task=%, current=%', v_task.day_number, v_avatar.current_day;
    END IF;

    -- 6. Verificar suscripción activa
    SELECT * INTO v_subscription
    FROM public.subscriptions
    WHERE user_id = p_user_id;

    IF v_subscription.status = 'limbo' OR v_subscription.status = 'cancelled' THEN
      RAISE EXCEPTION 'Subscription not active: %', v_subscription.status;
    END IF;

    -- 7. Calcular multiplicador de racha
    v_streak_multiplier := CASE
      WHEN v_avatar.streak_days < 7 THEN 1.0
      WHEN v_avatar.streak_days < 14 THEN 1.1
      WHEN v_avatar.streak_days < 21 THEN 1.2
      WHEN v_avatar.streak_days < 30 THEN 1.3
      WHEN v_avatar.streak_days < 60 THEN 1.5
      WHEN v_avatar.streak_days < 90 THEN 1.75
      ELSE 2.0
    END;

    -- 8. Calcular recompensa final
    v_btc_reward := v_task.btc_reward;
    v_final_reward := FLOOR(v_btc_reward * v_streak_multiplier);

    -- 9. Obtener modificadores de vectores
    v_vector_changes := COALESCE(v_task.vector_modifiers, '{}'::JSONB);

    -- 10. Actualizar tarea
    UPDATE public.daily_tasks
    SET
      status = 'completed',
      completed_at = NOW(),
      updated_at = NOW()
    WHERE id = p_task_id;

    -- 11. Actualizar vectores del avatar
    UPDATE public.avatar_states
    SET
      aura_lvl = LEAST(13, GREATEST(1, aura_lvl + COALESCE((v_vector_changes->>'aura_lvl')::DECIMAL, 0))),
      face_lvl = LEAST(13, GREATEST(1, face_lvl + COALESCE((v_vector_changes->>'face_lvl')::DECIMAL, 0))),
      wealth_lvl = LEAST(13, GREATEST(1, wealth_lvl + COALESCE((v_vector_changes->>'wealth_lvl')::DECIMAL, 0))),
      muscle_lvl = LEAST(13, GREATEST(1, muscle_lvl + COALESCE((v_vector_changes->>'muscle_lvl')::DECIMAL, 0))),
      fat_lvl = LEAST(13, GREATEST(1, fat_lvl + COALESCE((v_vector_changes->>'fat_lvl')::DECIMAL, 0))),
      total_tasks_completed = total_tasks_completed + 1,
      updated_at = NOW()
    WHERE user_id = p_user_id;

    -- 12. Actualizar wallet
    UPDATE public.wallets
    SET
      btc_balance = btc_balance + v_final_reward,
      total_earned = total_earned + v_final_reward,
      today_earned = today_earned + v_final_reward,
      updated_at = NOW()
    WHERE user_id = p_user_id;

    -- 13. Log de actividad
    INSERT INTO public.activity_logs (user_id, action, details)
    VALUES (
      p_user_id,
      'task_completed',
      jsonb_build_object(
        'task_id', p_task_id,
        'category', v_task.task_category,
        'btc_base', v_btc_reward,
        'btc_final', v_final_reward,
        'streak_multiplier', v_streak_multiplier,
        'vector_changes', v_vector_changes
      )
    );

    -- 14. Obtener estado actualizado
    SELECT * INTO v_avatar FROM public.avatar_states WHERE user_id = p_user_id;
    SELECT * INTO v_wallet FROM public.wallets WHERE user_id = p_user_id;

    -- 15. Construir resultado
    v_result := jsonb_build_object(
      'success', true,
      'task_id', p_task_id,
      'btc_earned', v_final_reward,
      'streak_multiplier', v_streak_multiplier,
      'new_balance', v_wallet.btc_balance,
      'vector_changes', v_vector_changes,
      'avatar_state', jsonb_build_object(
        'aura_lvl', v_avatar.aura_lvl,
        'face_lvl', v_avatar.face_lvl,
        'wealth_lvl', v_avatar.wealth_lvl,
        'muscle_lvl', v_avatar.muscle_lvl,
        'fat_lvl', v_avatar.fat_lvl
      )
    );

    -- 16. Guardar idempotency key
    IF p_idempotency_key IS NOT NULL THEN
      INSERT INTO public.idempotency_keys (key, user_id, action, result)
      VALUES (p_idempotency_key, p_user_id, 'complete_task', v_result)
      ON CONFLICT (key) DO NOTHING;
    END IF;

    RETURN v_result;

  EXCEPTION
    WHEN OTHERS THEN
      RAISE;
  END;
  $$ LANGUAGE plpgsql SECURITY DEFINER;

  -- Comentarios
  COMMENT ON FUNCTION public.fn_complete_task_transaction IS
    'Completa una tarea de forma atómica: actualiza task, vectores, wallet';

  ---
  03.2.3: Función fn_process_judgement_night

  Procesa el cierre del día

  -- ============================================
  -- FUNCIÓN: fn_process_judgement_night
  -- Procesa el cierre del día (Judgement Night)
  -- ============================================

  CREATE OR REPLACE FUNCTION public.fn_process_judgement_night(
    p_user_id UUID
  )
  RETURNS JSONB AS $$
  DECLARE
    v_avatar RECORD;
    v_subscription RECORD;
    v_tasks_completed INTEGER;
    v_tasks_total INTEGER;
    v_completion_rate DECIMAL(5,2);
    v_day_status day_status;
    v_health_change INTEGER := 0;
    v_streak_broken BOOLEAN := false;
    v_streak_before INTEGER;
    v_btc_day_bonus INTEGER := 0;
    v_btc_streak_bonus INTEGER := 0;
    v_new_health INTEGER;
    v_new_streak INTEGER;
    v_had_fitness BOOLEAN;
    v_decay_applied JSONB := '{}';
    v_vectors_snapshot JSONB;
    v_result JSONB;
  BEGIN
    -- 1. Lock advisory
    PERFORM pg_advisory_xact_lock(hashtext(p_user_id::text || '_judgement'));

    -- 2. Obtener estado actual
    SELECT * INTO v_avatar
    FROM public.avatar_states
    WHERE user_id = p_user_id
    FOR UPDATE;

    SELECT * INTO v_subscription
    FROM public.subscriptions
    WHERE user_id = p_user_id;

    -- 3. Calcular métricas del día
    SELECT
      COUNT(*) FILTER (WHERE status = 'completed'),
      COUNT(*)
    INTO v_tasks_completed, v_tasks_total
    FROM public.daily_tasks
    WHERE user_id = p_user_id
      AND day_number = v_avatar.current_day
      AND task_type = 'protocol';

    -- Evitar división por cero
    IF v_tasks_total > 0 THEN
      v_completion_rate := (v_tasks_completed::DECIMAL / v_tasks_total) * 100;
    ELSE
      v_completion_rate := 0;
    END IF;

    -- 4. Verificar si hubo fitness (para decay)
    SELECT EXISTS(
      SELECT 1 FROM public.daily_tasks
      WHERE user_id = p_user_id
        AND day_number = v_avatar.current_day
        AND task_category IN ('cardio', 'strength')
        AND status = 'completed'
    ) INTO v_had_fitness;

    -- 5. Determinar estado del día y cambios
    v_streak_before := v_avatar.streak_days;

    IF v_completion_rate >= 100 THEN
      -- Día perfecto
      v_day_status := 'success';
      v_new_streak := v_avatar.streak_days + 1;
      v_btc_day_bonus := 50;  -- Bonus día perfecto
    ELSIF v_completion_rate >= 80 THEN
      -- Día parcial (éxito)
      v_day_status := 'partial';
      v_new_streak := v_avatar.streak_days + 1;
    ELSE
      -- Día fallido
      v_day_status := 'failed';
      v_health_change := -1;
      v_new_streak := 0;
      v_streak_broken := v_avatar.streak_days > 0;

      -- Si 0% completado, doble daño
      IF v_completion_rate = 0 THEN
        v_health_change := -2;
      END IF;
    END IF;

    -- 6. Aplicar bonus de racha si corresponde
    IF v_new_streak = 7 THEN
      v_health_change := v_health_change + 1;  -- Recuperar 1 corazón
      v_btc_streak_bonus := 100;
    ELSIF v_new_streak = 14 THEN
      v_btc_streak_bonus := 500;
    ELSIF v_new_streak = 30 THEN
      v_btc_streak_bonus := 1500;
    ELSIF v_new_streak = 60 THEN
      v_btc_streak_bonus := 3000;
    END IF;

    -- 7. Calcular nueva salud
    v_new_health := GREATEST(0, LEAST(v_avatar.max_health_points, v_avatar.health_points + v_health_change));

    -- 8. Verificar muerte
    IF v_new_health = 0 THEN
      v_day_status := 'death';
      -- La muerte se procesa en fn_process_avatar_death
    END IF;

    -- 9. Aplicar decay biológico si no hubo fitness
    IF NOT v_had_fitness THEN
      v_decay_applied := jsonb_build_object(
        'fat_lvl', 0.02,      -- Grasa aumenta
        'muscle_lvl', -0.02   -- Músculo disminuye
      );
    END IF;

    -- 10. Snapshot de vectores antes de actualizar
    v_vectors_snapshot := jsonb_build_object(
      'aura_lvl', v_avatar.aura_lvl,
      'face_lvl', v_avatar.face_lvl,
      'wealth_lvl', v_avatar.wealth_lvl,
      'muscle_lvl', v_avatar.muscle_lvl,
      'fat_lvl', v_avatar.fat_lvl,
      'env_lvl', v_avatar.env_lvl
    );

    -- 11. Actualizar avatar_state
    UPDATE public.avatar_states
    SET
      -- Aplicar decay
      fat_lvl = LEAST(13, GREATEST(1, fat_lvl + COALESCE((v_decay_applied->>'fat_lvl')::DECIMAL, 0))),
      muscle_lvl = LEAST(13, GREATEST(1, muscle_lvl + COALESCE((v_decay_applied->>'muscle_lvl')::DECIMAL, 0))),
      -- Actualizar salud y racha
      health_points = v_new_health,
      streak_days = v_new_streak,
      max_streak_days = GREATEST(max_streak_days, v_new_streak),
      -- Avanzar día
      current_day = current_day + 1,
      -- Estadísticas
      total_days_completed = CASE WHEN v_day_status IN ('success', 'partial') THEN total_days_completed + 1 ELSE total_days_completed END,
      updated_at = NOW()
    WHERE user_id = p_user_id;

    -- 12. Actualizar wallet con bonos
    IF v_btc_day_bonus > 0 OR v_btc_streak_bonus > 0 THEN
      UPDATE public.wallets
      SET
        btc_balance = btc_balance + v_btc_day_bonus + v_btc_streak_bonus,
        total_earned = total_earned + v_btc_day_bonus + v_btc_streak_bonus,
        updated_at = NOW()
      WHERE user_id = p_user_id;
    END IF;

    -- 13. Marcar tareas pendientes como fallidas
    UPDATE public.daily_tasks
    SET status = 'failed', updated_at = NOW()
    WHERE user_id = p_user_id
      AND day_number = v_avatar.current_day
      AND status = 'pending';

    -- 14. Crear log del día
    INSERT INTO public.daily_logs (
      user_id,
      day_number,
      log_date,
      status,
      tasks_completed,
      tasks_total,
      completion_rate,
      btc_earned,
      streak_bonus,
      day_bonus,
      health_change,
      health_after,
      streak_before,
      streak_after,
      vectors_snapshot,
      closed_at
    ) VALUES (
      p_user_id,
      v_avatar.current_day,
      CURRENT_DATE,
      v_day_status,
      v_tasks_completed,
      v_tasks_total,
      v_completion_rate,
      v_btc_day_bonus + v_btc_streak_bonus,
      v_btc_streak_bonus,
      v_btc_day_bonus,
      v_health_change,
      v_new_health,
      v_streak_before,
      v_new_streak,
      v_vectors_snapshot,
      NOW()
    );

    -- 15. Log de actividad
    INSERT INTO public.activity_logs (user_id, action, details)
    VALUES (
      p_user_id,
      'judgement_night',
      jsonb_build_object(
        'day_number', v_avatar.current_day,
        'status', v_day_status,
        'completion_rate', v_completion_rate,
        'health_change', v_health_change,
        'streak_broken', v_streak_broken,
        'decay_applied', v_decay_applied
      )
    );

    -- 16. Construir resultado
    v_result := jsonb_build_object(
      'success', true,
      'day_number', v_avatar.current_day,
      'status', v_day_status,
      'completion_rate', v_completion_rate,
      'tasks_completed', v_tasks_completed,
      'tasks_total', v_tasks_total,
      'health_change', v_health_change,
      'new_health', v_new_health,
      'streak_before', v_streak_before,
      'streak_after', v_new_streak,
      'streak_broken', v_streak_broken,
      'btc_earned', v_btc_day_bonus + v_btc_streak_bonus,
      'decay_applied', v_decay_applied,
      'is_dead', v_new_health = 0
    );

    RETURN v_result;

  EXCEPTION
    WHEN OTHERS THEN
      RAISE;
  END;
  $$ LANGUAGE plpgsql SECURITY DEFINER;

  -- Comentarios
  COMMENT ON FUNCTION public.fn_process_judgement_night IS
    'Procesa el cierre del día: calcula resultado, actualiza estado, crea log';

  ---
  03.2.4: Función fn_purchase_item_transaction

  Transacción de compra en tienda

  -- ============================================
  -- FUNCIÓN: fn_purchase_item_transaction
  -- Procesa compra de item de tienda
  -- ============================================

  CREATE OR REPLACE FUNCTION public.fn_purchase_item_transaction(
    p_user_id UUID,
    p_item_id INTEGER,
    p_idempotency_key VARCHAR(255) DEFAULT NULL
  )
  RETURNS JSONB AS $$
  DECLARE
    v_item RECORD;
    v_avatar RECORD;
    v_wallet RECORD;
    v_vector_reqs JSONB;
    v_existing_result JSONB;
    v_result JSONB;
  BEGIN
    -- 1. Verificar idempotencia
    IF p_idempotency_key IS NOT NULL THEN
      SELECT result INTO v_existing_result
      FROM public.idempotency_keys
      WHERE key = p_idempotency_key AND user_id = p_user_id;

      IF FOUND THEN
        RETURN v_existing_result;
      END IF;
    END IF;

    -- 2. Lock advisory
    PERFORM pg_advisory_xact_lock(hashtext(p_user_id::text || '_purchase'));

    -- 3. Obtener item
    SELECT * INTO v_item
    FROM public.store_items
    WHERE id = p_item_id AND is_active = true;

    IF NOT FOUND THEN
      RAISE EXCEPTION 'Item not found or not active';
    END IF;

    -- 4. Verificar que no lo tenga ya
    IF EXISTS(SELECT 1 FROM public.inventory WHERE user_id = p_user_id AND item_id = p_item_id) THEN
      RAISE EXCEPTION 'Item already owned';
    END IF;

    -- 5. Obtener estado del usuario
    SELECT * INTO v_avatar FROM public.avatar_states WHERE user_id = p_user_id;
    SELECT * INTO v_wallet FROM public.wallets WHERE user_id = p_user_id FOR UPDATE;

    -- 6. Verificar nivel requerido
    IF v_avatar.current_level < v_item.level_required THEN
      RAISE EXCEPTION 'Level requirement not met: required=%, current=%',
        v_item.level_required, v_avatar.current_level;
    END IF;

    -- 7. Verificar requisitos de vectores
    v_vector_reqs := COALESCE(v_item.vector_requirements, '{}'::JSONB);

    -- Verificar fat_lvl máximo (ej: joyas requieren estar fit)
    IF (v_vector_reqs->'fat_lvl'->>'max')::DECIMAL IS NOT NULL THEN
      IF v_avatar.fat_lvl > (v_vector_reqs->'fat_lvl'->>'max')::DECIMAL THEN
        RAISE EXCEPTION 'Fat level requirement not met: required max=%, current=%',
          (v_vector_reqs->'fat_lvl'->>'max')::DECIMAL, v_avatar.fat_lvl;
      END IF;
    END IF;

    -- Verificar otros requisitos de vectores si existen...

    -- 8. Verificar balance suficiente
    IF v_wallet.btc_balance < v_item.price_btc THEN
      RAISE EXCEPTION 'Insufficient balance: required=%, current=%',
        v_item.price_btc, v_wallet.btc_balance;
    END IF;

    -- 9. Verificar stock (si aplica)
    IF v_item.is_limited AND v_item.stock_quantity IS NOT NULL AND v_item.stock_quantity <= 0 THEN
      RAISE EXCEPTION 'Item out of stock';
    END IF;

    -- 10. Descontar balance
    UPDATE public.wallets
    SET
      btc_balance = btc_balance - v_item.price_btc,
      total_spent = total_spent + v_item.price_btc,
      updated_at = NOW()
    WHERE user_id = p_user_id;

    -- 11. Agregar a inventario
    INSERT INTO public.inventory (user_id, item_id, price_paid)
    VALUES (p_user_id, p_item_id, v_item.price_btc);

    -- 12. Reducir stock si es limitado
    IF v_item.is_limited AND v_item.stock_quantity IS NOT NULL THEN
      UPDATE public.store_items
      SET stock_quantity = stock_quantity - 1
      WHERE id = p_item_id;
    END IF;

    -- 13. Log de actividad
    INSERT INTO public.activity_logs (user_id, action, details)
    VALUES (
      p_user_id,
      'item_purchased',
      jsonb_build_object(
        'item_id', p_item_id,
        'item_name', v_item.name,
        'category', v_item.category,
        'price', v_item.price_btc
      )
    );

    -- 14. Obtener nuevo balance
    SELECT btc_balance INTO v_wallet.btc_balance FROM public.wallets WHERE user_id = p_user_id;

    -- 15. Construir resultado
    v_result := jsonb_build_object(
      'success', true,
      'item_id', p_item_id,
      'item_name', v_item.name,
      'price_paid', v_item.price_btc,
      'new_balance', v_wallet.btc_balance
    );

    -- 16. Guardar idempotency key
    IF p_idempotency_key IS NOT NULL THEN
      INSERT INTO public.idempotency_keys (key, user_id, action, result)
      VALUES (p_idempotency_key, p_user_id, 'purchase_item', v_result)
      ON CONFLICT (key) DO NOTHING;
    END IF;

    RETURN v_result;

  EXCEPTION
    WHEN OTHERS THEN
      RAISE;
  END;
  $$ LANGUAGE plpgsql SECURITY DEFINER;

  -- Comentarios
  COMMENT ON FUNCTION public.fn_purchase_item_transaction IS
    'Procesa compra de item: valida, descuenta BTC, agrega a inventario';

  ---
  03.2.5: Función fn_process_avatar_death

  Procesa la muerte del avatar

  -- ============================================
  -- FUNCIÓN: fn_process_avatar_death
  -- Procesa la muerte del avatar
  -- Resetea: fat, muscle, health, streak, day, level
  -- Conserva: aura, face, wealth, env (parcial), BTC, inventario
  -- ============================================

  CREATE OR REPLACE FUNCTION public.fn_process_avatar_death(
    p_user_id UUID
  )
  RETURNS JSONB AS $$
  DECLARE
    v_avatar RECORD;
    v_old_env INTEGER;
    v_new_env INTEGER;
    v_result JSONB;
  BEGIN
    -- 1. Lock advisory
    PERFORM pg_advisory_xact_lock(hashtext(p_user_id::text || '_death'));

    -- 2. Obtener estado actual
    SELECT * INTO v_avatar
    FROM public.avatar_states
    WHERE user_id = p_user_id
    FOR UPDATE;

    IF v_avatar.health_points > 0 THEN
      RAISE EXCEPTION 'Avatar is not dead';
    END IF;

    -- 3. Calcular nuevo env_lvl (pierde 3 niveles)
    v_old_env := v_avatar.env_lvl;
    v_new_env := GREATEST(1, v_avatar.env_lvl - 3);

    -- 4. Resetear avatar
    UPDATE public.avatar_states
    SET
      -- RESETEAR (Arquetipo Físico vuelve a estado inicial)
      fat_lvl = 13.00,           -- Máxima grasa
      muscle_lvl = 1.00,         -- Mínimo músculo
      health_points = 10,        -- Salud completa
      streak_days = 0,           -- Racha a 0
      current_day = 1,           -- Reiniciar protocolo
      current_level = 1,         -- Nivel 1 (Indigente)

      -- CONSERVAR (con ajuste de env)
      env_lvl = v_new_env,
      -- aura_lvl se mantiene
      -- face_lvl se mantiene
      -- wealth_lvl se mantiene

      -- Estadísticas
      death_count = death_count + 1,

      updated_at = NOW()
    WHERE user_id = p_user_id;

    -- 5. Bloquear items por nivel
    UPDATE public.inventory
    SET
      equipped = false,
      locked_until_level = (
        SELECT level_required
        FROM public.store_items
        WHERE id = inventory.item_id
      )
    WHERE user_id = p_user_id
      AND (SELECT level_required FROM public.store_items WHERE id = inventory.item_id) > 1;

    -- 6. Crear notificación de muerte
    INSERT INTO public.notifications (user_id, type, title, message, data)
    VALUES (
      p_user_id,
      'avatar_died',
      'Tu avatar ha muerto',
      'Has perdido tu progreso físico, pero conservas tu mente y riqueza. Es hora de renacer.',
      jsonb_build_object(
        'death_count', v_avatar.death_count + 1,
        'conserved', jsonb_build_object(
          'aura_lvl', v_avatar.aura_lvl,
          'face_lvl', v_avatar.face_lvl,
          'wealth_lvl', v_avatar.wealth_lvl
        )
      )
    );

    -- 7. Log de actividad
    INSERT INTO public.activity_logs (user_id, action, details)
    VALUES (
      p_user_id,
      'avatar_died',
      jsonb_build_object(
        'day_at_death', v_avatar.current_day,
        'level_at_death', v_avatar.current_level,
        'death_count', v_avatar.death_count + 1,
        'env_change', jsonb_build_object('from', v_old_env, 'to', v_new_env),
        'conserved_vectors', jsonb_build_object(
          'aura_lvl', v_avatar.aura_lvl,
          'face_lvl', v_avatar.face_lvl,
          'wealth_lvl', v_avatar.wealth_lvl
        )
      )
    );

    -- 8. Construir resultado
    v_result := jsonb_build_object(
      'success', true,
      'death_count', v_avatar.death_count + 1,
      'reset', jsonb_build_object(
        'fat_lvl', 13.00,
        'muscle_lvl', 1.00,
        'health_points', 10,
        'streak_days', 0,
        'current_day', 1,
        'current_level', 1
      ),
      'conserved', jsonb_build_object(
        'aura_lvl', v_avatar.aura_lvl,
        'face_lvl', v_avatar.face_lvl,
        'wealth_lvl', v_avatar.wealth_lvl,
        'env_lvl', v_new_env
      ),
      'items_locked', (
        SELECT COUNT(*) FROM public.inventory
        WHERE user_id = p_user_id AND locked_until_level IS NOT NULL
      )
    );

    RETURN v_result;

  EXCEPTION
    WHEN OTHERS THEN
      RAISE;
  END;
  $$ LANGUAGE plpgsql SECURITY DEFINER;

  -- Comentarios
  COMMENT ON FUNCTION public.fn_process_avatar_death IS
    'Procesa muerte: resetea físico, conserva mental/productivo, bloquea items';

  ---
  03.2.6: Función fn_calculate_level

  Calcula el nivel basado en vectores

  -- ============================================
  -- FUNCIÓN: fn_calculate_level
  -- Calcula el nivel del usuario basado en vectores
  -- Niveles 1-10: Indigente → Semi-Dios
  -- Niveles 11-13: Post-game (Élite, Leyenda, Inmortal)
  -- ============================================

  CREATE OR REPLACE FUNCTION public.fn_calculate_level(
    p_aura_lvl DECIMAL,
    p_face_lvl DECIMAL,
    p_wealth_lvl DECIMAL,
    p_muscle_lvl DECIMAL,
    p_fat_lvl DECIMAL,
    p_current_day INTEGER
  )
  RETURNS INTEGER AS $$
  DECLARE
    v_physique_score DECIMAL;
    v_average_score DECIMAL;
    v_level INTEGER;
  BEGIN
    -- Calcular score de physique
    -- fat_lvl es inverso: 13=máxima grasa, 1=definido
    -- Convertimos a escala normal: (14 - fat_lvl) = 1=mala, 13=buena
    v_physique_score := (p_muscle_lvl + (14 - p_fat_lvl)) / 2;

    -- Calcular promedio de todos los vectores
    v_average_score := (p_aura_lvl + p_face_lvl + p_wealth_lvl + v_physique_score) / 4;

    -- Determinar nivel basado en promedio y día
    -- Esto permite que el nivel suba naturalmente con el tiempo y esfuerzo
    v_level := CASE
      -- Niveles base (1-10) basados principalmente en promedio de vectores
      WHEN v_average_score < 2 THEN 1   -- Indigente
      WHEN v_average_score < 3 THEN 2   -- Arrimado
      WHEN v_average_score < 4 THEN 3   -- Alucín
      WHEN v_average_score < 5 THEN 4   -- Chalán
      WHEN v_average_score < 6 THEN 5   -- Godín
      WHEN v_average_score < 7 THEN 6   -- Acomodado
      WHEN v_average_score < 8 THEN 7   -- Pudiente
      WHEN v_average_score < 9 THEN 8   -- Millonario
      WHEN v_average_score < 10.5 THEN 9  -- Magnate
      WHEN v_average_score < 12 THEN 10   -- Semi-Dios
      -- Post-game (requiere también día > 100)
      WHEN v_average_score >= 12 AND p_current_day > 100 THEN
        CASE
          WHEN v_average_score < 12.5 THEN 11  -- Élite
          WHEN v_average_score < 13 THEN 12    -- Leyenda
          ELSE 13                               -- Inmortal
        END
      ELSE 10  -- Semi-Dios si aún no completó día 100
    END;

    RETURN v_level;
  END;
  $$ LANGUAGE plpgsql IMMUTABLE;

  -- Comentarios
  COMMENT ON FUNCTION public.fn_calculate_level IS
    'Calcula nivel (1-13) basado en promedio de vectores y día actual';

  ---
  Tareas Atómicas para 03.2 Funciones

  TAREA-03.2.1:
    Nombre: "Crear función fn_update_updated_at"
    Acción: "Agregar función helper para triggers de updated_at"
    Responsable: Antigravity
    SQL: "CREATE OR REPLACE FUNCTION public.fn_update_updated_at()..."
    Criterio de Éxito: "Función creada"

  TAREA-03.2.2:
    Nombre: "Crear función fn_handle_new_user"
    Acción: "Agregar trigger de creación de usuario"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.2.1"
    Criterio de Éxito: "Al crear usuario en auth.users, se crean profile, avatar_state, wallet, subscription"

  TAREA-03.2.3:
    Nombre: "Crear función fn_complete_task_transaction"
    Acción: "Agregar función de completar tarea"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.2.2"
    Criterio de Éxito: "Función completa tarea atómicamente"

  TAREA-03.2.4:
    Nombre: "Crear función fn_process_judgement_night"
    Acción: "Agregar función de cierre de día"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.2.3"
    Criterio de Éxito: "Función procesa Judgement Night correctamente"

  TAREA-03.2.5:
    Nombre: "Crear función fn_purchase_item_transaction"
    Acción: "Agregar función de compra"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.2.4"
    Criterio de Éxito: "Función procesa compras atómicamente"

  TAREA-03.2.6:
    Nombre: "Crear función fn_process_avatar_death"
    Acción: "Agregar función de muerte"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.2.5"
    Criterio de Éxito: "Función resetea correctamente según cuestionario1"

  TAREA-03.2.7:
    Nombre: "Crear función fn_calculate_level"
    Acción: "Agregar función de cálculo de nivel"
    Responsable: Antigravity
    Input: "Estructura SQL de 03.2.6"
    Criterio de Éxito: "Función calcula niveles 1-13 correctamente"

  TAREA-03.2.8:
    Nombre: "Validar todas las funciones"
    Acción: "Ejecutar migración y probar funciones"
    Responsable: Antigravity
    Comando: "pnpm supabase db reset"
    Criterio de Éxito: "Todas las funciones ejecutan sin errores"

  ---
  SUBCAJA 03.3: Row Level Security (RLS)

  Políticas de Seguridad por Tabla

  Estructura General

  -- ============================================
  -- ROW LEVEL SECURITY (RLS)
  -- Habilitar RLS en TODAS las tablas
  -- ============================================

  -- Habilitar RLS
  ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.avatar_states ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.daily_tasks ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.daily_logs ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.store_items ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.tool_progress ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.image_generation_queue ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.idempotency_keys ENABLE ROW LEVEL SECURITY;

  ---
  03.3.1: Políticas de profiles

  -- ============================================
  -- POLÍTICAS: profiles
  -- ============================================

  -- SELECT: Usuario puede ver su propio perfil
  CREATE POLICY "profiles_select_own" ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

  -- UPDATE: Usuario puede actualizar su propio perfil
  CREATE POLICY "profiles_update_own" ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

  -- INSERT: Solo el trigger puede insertar (via SECURITY DEFINER)
  -- No se crea política de INSERT para usuarios

  ---
  03.3.2: Políticas de avatar_states

  -- ============================================
  -- POLÍTICAS: avatar_states
  -- ============================================

  -- SELECT: Usuario puede ver su propio estado
  CREATE POLICY "avatar_states_select_own" ON public.avatar_states
    FOR SELECT
    USING (auth.uid() = user_id);

  -- UPDATE: Solo funciones con SECURITY DEFINER pueden actualizar
  -- (Las actualizaciones se hacen via funciones de Postgres)

  ---
  03.3.3: Políticas de wallets

  -- ============================================
  -- POLÍTICAS: wallets
  -- ============================================

  -- SELECT: Usuario puede ver su propia wallet
  CREATE POLICY "wallets_select_own" ON public.wallets
    FOR SELECT
    USING (auth.uid() = user_id);

  -- UPDATE: Solo funciones con SECURITY DEFINER pueden actualizar

  ---
  03.3.4: Políticas de subscriptions

  -- ============================================
  -- POLÍTICAS: subscriptions
  -- ============================================

  -- SELECT: Usuario puede ver su propia suscripción
  CREATE POLICY "subscriptions_select_own" ON public.subscriptions
    FOR SELECT
    USING (auth.uid() = user_id);

  -- UPDATE: Solo webhooks de Stripe (via service_role) pueden actualizar

  ---
  03.3.5: Políticas de daily_tasks

  -- ============================================
  -- POLÍTICAS: daily_tasks
  -- ============================================

  -- SELECT: Usuario puede ver sus propias tareas
  CREATE POLICY "daily_tasks_select_own" ON public.daily_tasks
    FOR SELECT
    USING (auth.uid() = user_id);

  -- INSERT: Usuario puede crear tareas personalizadas
  CREATE POLICY "daily_tasks_insert_own" ON public.daily_tasks
    FOR INSERT
    WITH CHECK (
      auth.uid() = user_id
      AND task_type = 'custom'  -- Solo tareas personalizadas
    );

  -- UPDATE: Usuario puede actualizar sus propias tareas
  CREATE POLICY "daily_tasks_update_own" ON public.daily_tasks
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

  -- DELETE: Usuario puede eliminar solo tareas personalizadas
  CREATE POLICY "daily_tasks_delete_own_custom" ON public.daily_tasks
    FOR DELETE
    USING (
      auth.uid() = user_id
      AND task_type = 'custom'
    );

  ---
  03.3.6: Políticas de daily_logs

  -- ============================================
  -- POLÍTICAS: daily_logs
  -- Inmutable: solo lectura para usuarios
  -- ============================================

  -- SELECT: Usuario puede ver sus propios logs
  CREATE POLICY "daily_logs_select_own" ON public.daily_logs
    FOR SELECT
    USING (auth.uid() = user_id);

  -- INSERT/UPDATE/DELETE: Solo funciones con SECURITY DEFINER

  ---
  03.3.7: Políticas de store_items

  -- ============================================
  -- POLÍTICAS: store_items
  -- Catálogo público de lectura
  -- ============================================

  -- SELECT: Todos pueden ver items activos
  CREATE POLICY "store_items_select_active" ON public.store_items
    FOR SELECT
    USING (is_active = true);

  -- INSERT/UPDATE/DELETE: Solo admin (via service_role)

  ---
  03.3.8: Políticas de inventory

  -- ============================================
  -- POLÍTICAS: inventory
  -- ============================================

  -- SELECT: Usuario puede ver su propio inventario
  CREATE POLICY "inventory_select_own" ON public.inventory
    FOR SELECT
    USING (auth.uid() = user_id);

  -- UPDATE: Usuario puede equipar/desequipar items
  CREATE POLICY "inventory_update_own" ON public.inventory
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

  -- INSERT/DELETE: Solo funciones con SECURITY DEFINER

  ---
  03.3.9: Políticas de tool_progress

  -- ============================================
  -- POLÍTICAS: tool_progress
  -- ============================================

  -- SELECT: Usuario puede ver su propio progreso
  CREATE POLICY "tool_progress_select_own" ON public.tool_progress
    FOR SELECT
    USING (auth.uid() = user_id);

  -- INSERT: Usuario puede crear registro de progreso
  CREATE POLICY "tool_progress_insert_own" ON public.tool_progress
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

  -- UPDATE: Usuario puede actualizar su progreso
  CREATE POLICY "tool_progress_update_own" ON public.tool_progress
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

  ---
  03.3.10: Políticas de activity_logs

  -- ============================================
  -- POLÍTICAS: activity_logs
  -- Solo lectura para usuarios
  -- ============================================

  -- SELECT: Usuario puede ver sus propios logs
  CREATE POLICY "activity_logs_select_own" ON public.activity_logs
    FOR SELECT
    USING (auth.uid() = user_id);

  -- INSERT: Solo funciones con SECURITY DEFINER

  ---
  03.3.11: Políticas de image_generation_queue

  -- ============================================
  -- POLÍTICAS: image_generation_queue
  -- ============================================

  -- SELECT: Usuario puede ver sus propias generaciones
  CREATE POLICY "image_queue_select_own" ON public.image_generation_queue
    FOR SELECT
    USING (auth.uid() = user_id);

  -- INSERT/UPDATE: Solo funciones con SECURITY DEFINER y workers

  ---
  03.3.12: Políticas de notifications

  -- ============================================
  -- POLÍTICAS: notifications
  -- ============================================

  -- SELECT: Usuario puede ver sus propias notificaciones
  CREATE POLICY "notifications_select_own" ON public.notifications
    FOR SELECT
    USING (auth.uid() = user_id);

  -- UPDATE: Usuario puede marcar como leídas
  CREATE POLICY "notifications_update_own" ON public.notifications
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

  -- DELETE: Usuario puede eliminar sus notificaciones
  CREATE POLICY "notifications_delete_own" ON public.notifications
    FOR DELETE
    USING (auth.uid() = user_id);

  ---
  03.3.13: Políticas de idempotency_keys

  -- ============================================
  -- POLÍTICAS: idempotency_keys
  -- ============================================

  -- SELECT: Usuario puede ver sus propias keys
  CREATE POLICY "idempotency_select_own" ON public.idempotency_keys
    FOR SELECT
    USING (auth.uid() = user_id);

  -- INSERT/UPDATE: Solo funciones con SECURITY DEFINER

  ---
  Tareas Atómicas para 03.3 RLS

  TAREA-03.3.1:
    Nombre: "Habilitar RLS en todas las tablas"
    Acción: "ALTER TABLE ... ENABLE ROW LEVEL SECURITY"
    Responsable: Antigravity
    Criterio de Éxito: "RLS habilitado en 13 tablas"

  TAREA-03.3.2:
    Nombre: "Crear políticas de profiles"
    Acción: "CREATE POLICY para profiles"
    Responsable: Antigravity
    Criterio de Éxito: "Políticas SELECT y UPDATE creadas"

  TAREA-03.3.3:
    Nombre: "Crear políticas de avatar_states"
    Acción: "CREATE POLICY para avatar_states"
    Responsable: Antigravity
    Criterio de Éxito: "Política SELECT creada"

  TAREA-03.3.4:
    Nombre: "Crear políticas de wallets"
    Acción: "CREATE POLICY para wallets"
    Responsable: Antigravity
    Criterio de Éxito: "Política SELECT creada"

  TAREA-03.3.5:
    Nombre: "Crear políticas de subscriptions"
    Acción: "CREATE POLICY para subscriptions"
    Responsable: Antigravity
    Criterio de Éxito: "Política SELECT creada"

  TAREA-03.3.6:
    Nombre: "Crear políticas de daily_tasks"
    Acción: "CREATE POLICY para daily_tasks"
    Responsable: Antigravity
    Criterio de Éxito: "Políticas CRUD creadas"

  TAREA-03.3.7:
    Nombre: "Crear políticas de daily_logs"
    Acción: "CREATE POLICY para daily_logs"
    Responsable: Antigravity
    Criterio de Éxito: "Política SELECT creada"

  TAREA-03.3.8:
    Nombre: "Crear políticas de store_items"
    Acción: "CREATE POLICY para store_items"
    Responsable: Antigravity
    Criterio de Éxito: "Política SELECT pública creada"

  TAREA-03.3.9:
    Nombre: "Crear políticas de inventory"
    Acción: "CREATE POLICY para inventory"
    Responsable: Antigravity
    Criterio de Éxito: "Políticas SELECT y UPDATE creadas"

  TAREA-03.3.10:
    Nombre: "Crear políticas de tool_progress"
    Acción: "CREATE POLICY para tool_progress"
    Responsable: Antigravity
    Criterio de Éxito: "Políticas CRUD creadas"

  TAREA-03.3.11:
    Nombre: "Crear políticas de activity_logs"
    Acción: "CREATE POLICY para activity_logs"
    Responsable: Antigravity
    Criterio de Éxito: "Política SELECT creada"

  TAREA-03.3.12:
    Nombre: "Crear políticas de image_generation_queue"
    Acción: "CREATE POLICY para image_generation_queue"
    Responsable: Antigravity
    Criterio de Éxito: "Política SELECT creada"

  TAREA-03.3.13:
    Nombre: "Crear políticas de notifications"
    Acción: "CREATE POLICY para notifications"
    Responsable: Antigravity
    Criterio de Éxito: "Políticas CRUD creadas"

  TAREA-03.3.14:
    Nombre: "Crear políticas de idempotency_keys"
    Acción: "CREATE POLICY para idempotency_keys"
    Responsable: Antigravity
    Criterio de Éxito: "Política SELECT creada"

  TAREA-03.3.15:
    Nombre: "Validar RLS con tests"
    Acción: "Probar que usuarios no pueden acceder a datos de otros"
    Responsable: Antigravity
    Criterio de Éxito: "Todas las políticas funcionan correctamente"

  ---
  SUBCAJA 03.4: Índices y Optimización

  Índices Adicionales y Análisis

  -- ============================================
  -- ÍNDICES ADICIONALES PARA OPTIMIZACIÓN
  -- ============================================

  -- Índice para búsqueda de usuarios por trial expirando
  CREATE INDEX idx_subscriptions_trial_expiring
    ON public.subscriptions(trial_ends_at)
    WHERE status = 'trial' AND trial_ends_at IS NOT NULL;

  -- Índice para usuarios en limbo
  CREATE INDEX idx_subscriptions_limbo
    ON public.subscriptions(limbo_started_at)
    WHERE status = 'limbo';

  -- Índice para tareas pendientes del día actual
  CREATE INDEX idx_daily_tasks_today_pending
    ON public.daily_tasks(user_id, day_number, status)
    WHERE status = 'pending';

  -- Índice para ranking de usuarios por nivel
  CREATE INDEX idx_avatar_states_leaderboard
    ON public.avatar_states(current_level DESC, streak_days DESC);

  -- Índice para generación de imágenes pendientes
  CREATE INDEX idx_image_queue_worker
    ON public.image_generation_queue(status, priority, queued_at)
    WHERE status IN ('pending', 'retrying');

  -- Índice para notificaciones no leídas
  CREATE INDEX idx_notifications_unread_count
    ON public.notifications(user_id)
    WHERE is_read = false;

  -- Índice parcial para items equipados
  CREATE INDEX idx_inventory_equipped_items
    ON public.inventory(user_id, item_id)
    WHERE equipped = true;

  -- Índice para limpieza de idempotency keys
  CREATE INDEX idx_idempotency_cleanup
    ON public.idempotency_keys(expires_at)
    WHERE expires_at < NOW();

  ---
  Tareas Atómicas para 03.4 Índices

  TAREA-03.4.1:
    Nombre: "Agregar índices de optimización"
    Acción: "CREATE INDEX adicionales"
    Responsable: Antigravity
    Criterio de Éxito: "Índices creados"

  TAREA-03.4.2:
    Nombre: "Documentar queries críticas"
    Acción: "Listar queries que usan los índices"
    Responsable: Claude
    Criterio de Éxito: "Documentación de queries"

  TAREA-03.4.3:
    Nombre: "Configurar ANALYZE automático"
    Acción: "Verificar autovacuum settings"
    Responsable: Antigravity
    Criterio de Éxito: "Autovacuum configurado"

  ---
  SUBCAJA 03.5: Migraciones

  Estructura de Migraciones

  TAREA-03.5.1:
    Nombre: "Consolidar migración inicial"
    Acción: "Combinar todo el SQL en 00000000000001_init.sql"
    Responsable: Antigravity
    Orden del archivo:
      1. Función fn_update_updated_at
      2. ENUMs y tipos
      3. Tablas (en orden de dependencias)
      4. Funciones de negocio
      5. Triggers
      6. RLS y políticas
      7. Índices adicionales
    Criterio de Éxito: "Migración ejecuta sin errores"

  TAREA-03.5.2:
    Nombre: "Crear script de seed"
    Acción: "Crear supabase/seed.sql con datos iniciales"
    Responsable: Antigravity
    Contenido:
      - Store items (catálogo inicial de ~50 items)
    Criterio de Éxito: "Seed ejecuta sin errores"

  TAREA-03.5.3:
    Nombre: "Documentar proceso de migración"
    Acción: "Crear guía en docs/"
    Responsable: Claude
    Criterio de Éxito: "Guía completa"

  ---
  SUBCAJA 03.6: Tipos de TypeScript

  Generación y Tipos Adicionales

  // src/types/database.types.ts
  // Este archivo se genera automáticamente con:
  // pnpm db:generate

  // src/types/domain.ts
  // Tipos de dominio adicionales

  export type VectorName = 'aura_lvl' | 'face_lvl' | 'wealth_lvl' | 'muscle_lvl' | 'fat_lvl' | 'env_lvl';

  export type TaskArchetype = 'mental' | 'face' | 'productivity' | 'physical';

  export type LevelName =
    | 'Indigente'      // 1
    | 'Arrimado'       // 2
    | 'Alucín'         // 3
    | 'Chalán'         // 4
    | 'Godín'          // 5
    | 'Acomodado'      // 6
    | 'Pudiente'       // 7
    | 'Millonario'     // 8
    | 'Magnate'        // 9
    | 'Semi-Dios'      // 10
    | 'Élite'          // 11
    | 'Leyenda'        // 12
    | 'Inmortal';      // 13

  export const LEVEL_NAMES: Record<number, LevelName> = {
    1: 'Indigente',
    2: 'Arrimado',
    3: 'Alucín',
    4: 'Chalán',
    5: 'Godín',
    6: 'Acomodado',
    7: 'Pudiente',
    8: 'Millonario',
    9: 'Magnate',
    10: 'Semi-Dios',
    11: 'Élite',
    12: 'Leyenda',
    13: 'Inmortal',
  };

  export interface VectorModifiers {
    aura_lvl?: number;
    face_lvl?: number;
    wealth_lvl?: number;
    muscle_lvl?: number;
    fat_lvl?: number;
  }

  export interface JudgementResult {
    success: boolean;
    dayNumber: number;
    status: 'success' | 'partial' | 'failed' | 'death';
    completionRate: number;
    tasksCompleted: number;
    tasksTotal: number;
    healthChange: number;
    newHealth: number;
    streakBefore: number;
    streakAfter: number;
    streakBroken: boolean;
    btcEarned: number;
    decayApplied: VectorModifiers;
    isDead: boolean;
  }

  ---
  Tareas Atómicas para 03.6 Tipos

  TAREA-03.6.1:
    Nombre: "Generar tipos de base de datos"
    Acción: "Ejecutar pnpm db:generate"
    Responsable: Antigravity
    Comando: |
      pnpm supabase gen types typescript --project-id $SUPABASE_PROJECT_ID > src/types/database.types.ts
    Criterio de Éxito: "Archivo generado sin errores"

  TAREA-03.6.2:
    Nombre: "Crear tipos de dominio"
    Acción: "Crear src/types/domain.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Tipos de dominio definidos"

  TAREA-03.6.3:
    Nombre: "Crear tipos de API"
    Acción: "Crear src/types/api.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Tipos de request/response definidos"

  TAREA-03.6.4:
    Nombre: "Crear barrel export"
    Acción: "Crear src/types/index.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Exports centralizados"

  ---
  SUBCAJA 03.7: Cliente Supabase

  Archivos de Cliente

  // src/lib/supabase/client.ts
  // Cliente para uso en browser (Client Components)

  import { createBrowserClient } from '@supabase/ssr';
  import type { Database } from '@/types/database.types';

  export function createClient() {
    return createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }

  // src/lib/supabase/server.ts
  // Cliente para uso en Server Components y Server Actions

  import { createServerClient } from '@supabase/ssr';
  import { cookies } from 'next/headers';
  import type { Database } from '@/types/database.types';

  export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              );
            } catch {
              // Ignorar en Server Components (read-only)
            }
          },
        },
      }
    );
  }

  // src/lib/supabase/middleware.ts
  // Cliente para uso en middleware

  import { createServerClient } from '@supabase/ssr';
  import { NextResponse, type NextRequest } from 'next/server';
  import type { Database } from '@/types/database.types';

  export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
      request,
    });

    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
            supabaseResponse = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Rutas protegidas
    const protectedPaths = ['/dashboard', '/onboarding'];
    const isProtectedPath = protectedPaths.some(path =>
      request.nextUrl.pathname.startsWith(path)
    );

    if (isProtectedPath && !user) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    // Redirigir usuarios autenticados del login/register al dashboard
    const authPaths = ['/login', '/register'];
    const isAuthPath = authPaths.some(path =>
      request.nextUrl.pathname.startsWith(path)
    );

    if (isAuthPath && user) {
      const url = request.nextUrl.clone();
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }

    return supabaseResponse;
  }

  // src/lib/supabase/admin.ts
  // Cliente con service role (solo para backend)

  import { createClient } from '@supabase/supabase-js';
  import type { Database } from '@/types/database.types';
  import { getServerEnv } from '@/lib/env';

  export function createAdminClient() {
    const env = getServerEnv();

    return createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      env.SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );
  }

  ---
  Tareas Atómicas para 03.7 Cliente Supabase

  TAREA-03.7.1:
    Nombre: "Crear cliente browser"
    Acción: "Crear src/lib/supabase/client.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Cliente funciona en Client Components"

  TAREA-03.7.2:
    Nombre: "Crear cliente server"
    Acción: "Crear src/lib/supabase/server.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Cliente funciona en Server Components"

  TAREA-03.7.3:
    Nombre: "Crear cliente middleware"
    Acción: "Crear src/lib/supabase/middleware.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Middleware protege rutas correctamente"

  TAREA-03.7.4:
    Nombre: "Crear cliente admin"
    Acción: "Crear src/lib/supabase/admin.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Cliente con service role funciona"

  TAREA-03.7.5:
    Nombre: "Crear middleware de Next.js"
    Acción: "Crear src/middleware.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Rutas protegidas funcionan"

  ---
  SUBCAJA 03.8: Server Actions Base

  Estructura Base de Actions

  // src/actions/utils.ts
  // Utilidades compartidas para Server Actions

  import { z } from 'zod';

  export type ActionResult<T> =
    | { success: true; data: T }
    | { success: false; error: string; code?: string };

  export function createActionResult<T>(data: T): ActionResult<T> {
    return { success: true, data };
  }

  export function createActionError(error: string, code?: string): ActionResult<never> {
    return { success: false, error, code };
  }

  export async function validateInput<T extends z.ZodTypeAny>(
    schema: T,
    input: unknown
  ): Promise<{ success: true; data: z.infer<T> } | { success: false; error: string }> {
    const result = schema.safeParse(input);

    if (!result.success) {
      return {
        success: false,
        error: result.error.errors[0]?.message ?? 'Validation error',
      };
    }

    return { success: true, data: result.data };
  }

  // src/actions/tasks/complete-task.ts
  // Ejemplo de Server Action

  'use server';

  import { z } from 'zod';
  import { createClient } from '@/lib/supabase/server';
  import { revalidatePath } from 'next/cache';
  import type { ActionResult } from '../utils';
  import { validateInput, createActionError } from '../utils';

  const completeTaskSchema = z.object({
    taskId: z.string().uuid(),
    idempotencyKey: z.string().uuid().optional(),
  });

  type CompleteTaskInput = z.infer<typeof completeTaskSchema>;

  interface CompleteTaskResult {
    taskId: string;
    btcEarned: number;
    newBalance: number;
    vectorChanges: Record<string, number>;
  }

  export async function completeTask(
    input: unknown
  ): Promise<ActionResult<CompleteTaskResult>> {
    // 1. Validar input
    const validation = await validateInput(completeTaskSchema, input);
    if (!validation.success) {
      return createActionError(validation.error, 'VALIDATION_ERROR');
    }

    const { taskId, idempotencyKey } = validation.data;

    // 2. Verificar autenticación
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return createActionError('No autorizado', 'UNAUTHORIZED');
    }

    // 3. Llamar a la función de Postgres
    const { data, error } = await supabase.rpc('fn_complete_task_transaction', {
      p_user_id: user.id,
      p_task_id: taskId,
      p_idempotency_key: idempotencyKey,
    });

    if (error) {
      console.error('[completeTask] RPC error:', error);

      // Mapear errores de Postgres a códigos internos
      if (error.message.includes('not found')) {
        return createActionError('Tarea no encontrada', 'TASK_NOT_FOUND');
      }
      if (error.message.includes('already processed')) {
        return createActionError('Tarea ya completada', 'TASK_ALREADY_COMPLETED');
      }
      if (error.message.includes('day mismatch')) {
        return createActionError('La tarea no es del día actual', 'TASK_DAY_MISMATCH');
      }
      if (error.message.includes('Subscription not active')) {
        return createActionError('Suscripción no activa', 'SUBSCRIPTION_INACTIVE');
      }

      return createActionError('Error al completar tarea', 'INTERNAL_ERROR');
    }

    // 4. Revalidar cache
    revalidatePath('/dashboard');
    revalidatePath('/dashboard/tasks');

    // 5. Retornar resultado
    return {
      success: true,
      data: {
        taskId: data.task_id,
        btcEarned: data.btc_earned,
        newBalance: data.new_balance,
        vectorChanges: data.vector_changes,
      },
    };
  }

  ---
  Tareas Atómicas para 03.8 Server Actions

  TAREA-03.8.1:
    Nombre: "Crear utilidades de actions"
    Acción: "Crear src/actions/utils.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Tipos y helpers definidos"

  TAREA-03.8.2:
    Nombre: "Crear action completeTask"
    Acción: "Crear src/actions/tasks/complete-task.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Action completa tareas correctamente"

  TAREA-03.8.3:
    Nombre: "Crear action getTodayTasks"
    Acción: "Crear src/actions/tasks/get-today-tasks.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Action retorna tareas del día"

  TAREA-03.8.4:
    Nombre: "Crear action purchaseItem"
    Acción: "Crear src/actions/store/purchase-item.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Action procesa compras"

  TAREA-03.8.5:
    Nombre: "Crear action equipItem"
    Acción: "Crear src/actions/inventory/equip-item.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Action equipa/desequipa items"

  TAREA-03.8.6:
    Nombre: "Crear action getProfile"
    Acción: "Crear src/actions/profile/get-profile.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Action retorna perfil completo"

  TAREA-03.8.7:
    Nombre: "Crear action createCheckout"
    Acción: "Crear src/actions/payments/create-checkout.ts"
    Responsable: Antigravity
    Criterio de Éxito: "Action crea sesión de Stripe"

  TAREA-03.8.8:
    Nombre: "Crear barrel exports"
    Acción: "Crear index.ts en cada carpeta de actions"
    Responsable: Antigravity
    Criterio de Éxito: "Imports centralizados"

  ---
  RESUMEN DE CAJA 03: BASE DE DATOS Y BACKEND

  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║                    📦 CAJA 03 - RESUMEN DE ENTREGABLES                              ║
  ║                                                                                      ║
  ╠══════════════════════════════════════════════════════════════════════════════════════╣
  ║                                                                                      ║
  ║  SUBCAJA              │ ENTREGABLES PRINCIPALES        │ TAREAS │ RESPONSABLE       ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  03.1 Schema DB       │ 14 tablas, ENUMs, tipos        │   17   │ Antigravity       ║
  ║                       │ (profiles, avatar_states,      │        │                   ║
  ║                       │ wallets, daily_tasks, etc.)    │        │                   ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  03.2 Funciones PG    │ 7 funciones de Postgres        │    8   │ Antigravity       ║
  ║                       │ (handle_new_user, complete_    │        │                   ║
  ║                       │ task, judgement, purchase...)  │        │                   ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  03.3 RLS             │ Políticas para 13 tablas       │   15   │ Antigravity       ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  03.4 Índices         │ ~15 índices de optimización    │    3   │ Antigravity       ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  03.5 Migraciones     │ 1 migración inicial + seed     │    3   │ Antigravity       ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  03.6 Tipos TS        │ database.types.ts, domain.ts,  │    4   │ Antigravity       ║
  ║                       │ api.ts                         │        │                   ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  03.7 Cliente Supabase│ client.ts, server.ts,          │    5   │ Antigravity       ║
  ║                       │ middleware.ts, admin.ts        │        │                   ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  03.8 Server Actions  │ Estructura base + 6 actions    │    8   │ Antigravity       ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  TOTAL                │ ~40 archivos                   │   63   │                   ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝

  ---
  RESUMEN ACUMULADO CAJAS 01-03

  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                         PROGRESO DE DESGLOSE ATÓMICO                                 ║
  ╠══════════════════════════════════════════════════════════════════════════════════════╣
  ║                                                                                      ║
  ║  📦 CAJA 01: Documentación Fundacional    │ 9 subcajas  │  92 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 02: Infraestructura y DevOps     │ 8 subcajas  │  50 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 03: Base de Datos y Backend      │ 8 subcajas  │  63 tareas │ ✅ COMPLETO  ║
  ║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
  ║  📦 CAJA 04: Motor Core (Lógica Pura)     │ 10 subcajas │  ?? tareas │ ⏳ PENDIENTE ║
  ║  📦 CAJA 05: Autenticación y Onboarding   │ 7 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
  ║  📦 CAJA 06: Dashboard y UI               │ 9 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
  ║  📦 CAJA 07: Arsenal de Herramientas      │ 10 subcajas │  ?? tareas │ ⏳ PENDIENTE ║
  ║  📦 CAJA 08: IA Generativa                │ 8 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
  ║  📦 CAJA 09: Economía y Tienda            │ 7 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
  ║  📦 CAJA 10: Monetización (Stripe)        │ 8 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
  ║  📦 CAJA 11: Notificaciones y Realtime    │ 6 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
  ║  📦 CAJA 12: Observabilidad y Calidad     │ 7 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
  ║  📦 CAJA 13: Lanzamiento y Operaciones    │ 7 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
  ║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
  ║  TOTAL DESGLOSADO HASTA AHORA             │ 25 subcajas │ 205 tareas │ 3/13 CAJAS   ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝
