ANÁLISIS FORENSE DE METAMEN100: AUTOPSIA TÉCNICA DE UN INTENTO FALLIDO

Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    METAMEN100 - ANÁLISIS FORENSE TÉCNICO v1.0                        ║
║                                                                                      ║
║     ██████╗ ██╗ █████╗  ██████╗ ███╗   ██╗ ██████╗ ███████╗████████╗██╗ ██████╗     ║
║     ██╔══██╗██║██╔══██╗██╔════╝ ████╗  ██║██╔═══██╗██╔════╝╚══██╔══╝██║██╔════╝     ║
║     ██║  ██║██║███████║██║  ███╗██╔██╗ ██║██║   ██║███████╗   ██║   ██║██║          ║
║     ██║  ██║██║██╔══██║██║   ██║██║╚██╗██║██║   ██║╚════██║   ██║   ██║██║          ║
║     ██████╔╝██║██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝███████║   ██║   ██║╚██████╗     ║
║     ╚═════╝ ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝   ╚═╝   ╚═╝ ╚═════╝     ║
║                                                                                      ║
║                    "Un sistema TOP 100 no se construye con ambición;                 ║
║                     se construye con precisión quirúrgica"                           ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ÍNDICE

RESUMEN EJECUTIVO DEL DIAGNÓSTICO
FASE 0: ANÁLISIS DE DOCUMENTACIÓN PRE-DESARROLLO

2.1 Lo que el Blueprint hizo BIEN
2.2 Lo que el Blueprint hizo MAL
2.3 Lo que el Blueprint debió MEJORAR
2.4 Documentos que FALTARON generar


FASE 1: ANÁLISIS COMPARATIVO CUESTIONARIO1 vs BLUEPRINT

3.1 Divergencias críticas identificadas
3.2 Tecnologías faltantes
3.3 Procesos no ejecutados
3.4 Configuraciones de herramientas omitidas


CONCLUSIONES Y SIGUIENTE PASO


1. RESUMEN EJECUTIVO DEL DIAGNÓSTICO
1.1 Veredicto General
El intento previo de desarrollo de MetaMen100 falló en alcanzar calidad de producción debido a una combinación de factores críticos:
CategoríaNivel AlcanzadoNivel Requerido TOP 100BrechaDocumentación Técnica25%95%-70%Especificación de API10%100%-90%Testing & QA5%90%-85%DevOps & CI/CD0%100%-100%Seguridad15%100%-85%Observabilidad0%90%-90%Manejo de Estados30%95%-65%Edge Cases10%95%-85%
1.2 Las 10 Causas Raíz del Fracaso
Copy╔═══════════════════════════════════════════════════════════════════════════════╗
║  #1  DOCUMENTACIÓN VISIONARIA SIN ESPECIFICACIÓN TÉCNICA                      ║
║      → Mucho "qué" pero casi nada de "cómo exactamente"                       ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  #2  AUSENCIA DE CONTRATOS DE API                                             ║
║      → Sin OpenAPI/Swagger, sin tipos compartidos cliente-servidor            ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  #3  CERO ESTRATEGIA DE TESTING                                               ║
║      → Sin plan de tests unitarios, integración, E2E                          ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  #4  PIPELINE DE CI/CD INEXISTENTE                                            ║
║      → Sin GitHub Actions, sin linting automatizado, sin deploy automático    ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  #5  SEGURIDAD COMO AFTERTHOUGHT                                              ║
║      → RLS mencionado pero no especificado en detalle, sin OWASP checklist    ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  #6  OBSERVABILIDAD NULA                                                      ║
║      → Sin logging estructurado, sin métricas, sin alertas                    ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  #7  MANEJO DE ERRORES SUPERFICIAL                                            ║
║      → try/catch genérico sin estrategia de recuperación                      ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  #8  ESTADOS Y TRANSICIONES NO MODELADOS                                      ║
║      → Sin máquinas de estado, sin validación de transiciones                 ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  #9  CONFIGURACIÓN DE HERRAMIENTAS INCOMPLETA                                 ║
║      → Antigravity sin MCP servers, sin skills, sin configuración óptima      ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  #10 ARQUITECTURA SIN CONSIDERACIÓN DE ESCALA                                 ║
║      → Sin caching, sin rate limiting, sin optimización de queries            ║
╚═══════════════════════════════════════════════════════════════════════════════╝

2. FASE 0: ANÁLISIS DE DOCUMENTACIÓN PRE-DESARROLLO
2.1 Lo que el Blueprint hizo BIEN
2.1.1 Visión Clara del Producto
yamlCopy✅ CORRECTO:
  - Definición del problema central (fragmentación + invisibilidad del progreso)
  - Propuesta de valor única (espejo bio-digital con IA generativa)
  - Diferenciación vs competencia (Habitica)
  - Target de usuario bien definido (hombres 20-35, buscando transformación)
2.1.2 Sistema de Vectores Conceptualmente Sólido
yamlCopy✅ CORRECTO:
  - Los 5 vectores (FAT, MUSCLE, POSTURE, LUXURY, ENV) son coherentes
  - La escala 1-13 es apropiada para granularidad visual
  - El concepto de decaimiento biológico es realista
  - La relación tarea → vector está bien pensada
2.1.3 Gamificación con Consecuencias Reales
yamlCopy✅ CORRECTO:
  - Sistema de corazones con muerte permanente
  - Racha con multiplicadores
  - Economía de BTC con escasez real
  - Gating de items por nivel
2.1.4 Stack Tecnológico Moderno
yamlCopy✅ CORRECTO:
  - Next.js 14+ con App Router (decisión correcta)
  - Supabase para backend (apropiado para MVP)
  - Tailwind CSS (eficiente)
  - TypeScript strict (esencial)
2.1.5 Estructura de Carpetas Organizada
yamlCopy✅ CORRECTO:
  - Separación clara de /lib/core para lógica de negocio
  - /components organizado por dominio
  - Server Actions en /actions
  - Types centralizados en /types

2.2 Lo que el Blueprint hizo MAL
2.2.1 Esquema de Base de Datos Incompleto
yamlCopy❌ ERROR CRÍTICO - Tablas faltantes:

  1. No existe tabla `activity_logs`:
     - Tracking de cada acción del usuario
     - Necesario para analytics y debugging

  2. No existe tabla `image_generation_queue`:
     - Cola de generación de imágenes
     - Estados: pending, processing, completed, failed
     - Reintentos automáticos

  3. No existe tabla `notifications`:
     - Notificaciones persistentes
     - Estados: unread, read, dismissed

  4. No existe tabla `user_sessions`:
     - Tracking de dispositivos
     - Detección de multi-cuenta

  5. No existe tabla `feature_flags`:
     - Control de features por usuario
     - A/B testing

  6. No existe tabla `audit_log`:
     - Log inmutable de cambios críticos
     - Compliance y debugging

  7. No existe tabla `rate_limits`:
     - Tracking de rate limiting por usuario/IP

  8. No existe tabla `tool_sessions`:
     - Sesiones de herramientas (meditación, focus, etc.)
     - Tracking de tiempo real
2.2.2 RLS (Row Level Security) Mal Especificado
sqlCopy-- ❌ ERROR: Las políticas definidas son demasiado simples

-- Lo que se definió:
CREATE POLICY "Users can view own wallet" ON public.wallets
    FOR SELECT USING (auth.uid() = user_id);

-- Lo que DEBIÓ definirse:
CREATE POLICY "wallet_select" ON public.wallets
    FOR SELECT USING (
        auth.uid() = user_id
        OR
        EXISTS (
            SELECT 1 FROM public.admin_users 
            WHERE admin_users.user_id = auth.uid()
            AND admin_users.role IN ('super_admin', 'support')
        )
    );

-- Faltó: Políticas para service_role
-- Faltó: Políticas para funciones administrativas
-- Faltó: Políticas temporales para migración de datos
2.2.3 Sin Validación de Datos en Backend
typescriptCopy// ❌ ERROR: El código no tiene validación robusta

// Lo que se mostró:
export async function completeTask(taskId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  // ... lógica
}

// Lo que DEBIÓ existir:
import { z } from 'zod';

const CompleteTaskSchema = z.object({
  taskId: z.string().uuid('Invalid task ID format'),
});

export async function completeTask(rawInput: unknown) {
  // 1. Validar input
  const parseResult = CompleteTaskSchema.safeParse(rawInput);
  if (!parseResult.success) {
    return {
      success: false,
      error: 'VALIDATION_ERROR',
      details: parseResult.error.flatten(),
    };
  }
  const { taskId } = parseResult.data;

  // 2. Verificar auth con manejo específico
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError) {
    console.error('[completeTask] Auth error:', authError);
    return {
      success: false,
      error: 'AUTH_ERROR',
      code: authError.code,
    };
  }
  
  if (!user) {
    return {
      success: false,
      error: 'UNAUTHORIZED',
    };
  }

  // 3. Verificar ownership de la tarea
  const { data: task, error: taskError } = await supabase
    .from('daily_tasks')
    .select('*')
    .eq('id', taskId)
    .eq('user_id', user.id)
    .single();

  if (taskError || !task) {
    return {
      success: false,
      error: 'TASK_NOT_FOUND',
    };
  }

  // 4. Validar estado de la tarea
  if (task.status !== 'pending') {
    return {
      success: false,
      error: 'TASK_ALREADY_PROCESSED',
      currentStatus: task.status,
    };
  }

  // 5. Validar que la tarea es del día actual
  const { data: avatarState } = await supabase
    .from('avatar_states')
    .select('current_day')
    .eq('user_id', user.id)
    .single();

  if (task.day_number !== avatarState?.current_day) {
    return {
      success: false,
      error: 'TASK_DAY_MISMATCH',
      expectedDay: avatarState?.current_day,
      taskDay: task.day_number,
    };
  }

  // Continuar con lógica...
}
2.2.4 Manejo de Errores Primitivo
typescriptCopy// ❌ ERROR: Error handling genérico sin utilidad

// Lo que se mostró:
try {
  // lógica
} catch (error) {
  console.error('Action failed:', error);
  return { success: false, error: 'Mensaje amigable' };
}

// Lo que DEBIÓ existir:

// 1. Definir tipos de error específicos
enum ErrorCode {
  // Auth
  AUTH_EXPIRED = 'AUTH_EXPIRED',
  AUTH_INVALID = 'AUTH_INVALID',
  UNAUTHORIZED = 'UNAUTHORIZED',
  
  // Validation
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  
  // Business Logic
  TASK_NOT_FOUND = 'TASK_NOT_FOUND',
  TASK_ALREADY_COMPLETED = 'TASK_ALREADY_COMPLETED',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  LEVEL_REQUIREMENT_NOT_MET = 'LEVEL_REQUIREMENT_NOT_MET',
  
  // System
  DATABASE_ERROR = 'DATABASE_ERROR',
  EXTERNAL_SERVICE_ERROR = 'EXTERNAL_SERVICE_ERROR',
  RATE_LIMITED = 'RATE_LIMITED',
  
  // Unknown
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

// 2. Crear clase de error personalizada
class AppError extends Error {
  constructor(
    public code: ErrorCode,
    public message: string,
    public statusCode: number = 400,
    public details?: Record<string, unknown>,
    public isOperational: boolean = true,
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }

  static fromSupabaseError(error: PostgrestError): AppError {
    // Mapear errores de Supabase a códigos internos
    const errorMap: Record<string, ErrorCode> = {
      'PGRST116': ErrorCode.TASK_NOT_FOUND,
      '23505': ErrorCode.VALIDATION_ERROR, // unique violation
      '23503': ErrorCode.VALIDATION_ERROR, // foreign key violation
    };
    
    return new AppError(
      errorMap[error.code] || ErrorCode.DATABASE_ERROR,
      error.message,
      400,
      { originalCode: error.code, hint: error.hint }
    );
  }
}

// 3. Wrapper de errores para Server Actions
async function safeAction<T>(
  action: () => Promise<T>,
  context: string
): Promise<{ success: true; data: T } | { success: false; error: ErrorCode; message: string; details?: unknown }> {
  try {
    const data = await action();
    return { success: true, data };
  } catch (error) {
    if (error instanceof AppError) {
      console.error(`[${context}] AppError:`, {
        code: error.code,
        message: error.message,
        details: error.details,
      });
      return {
        success: false,
        error: error.code,
        message: error.message,
        details: error.details,
      };
    }
    
    console.error(`[${context}] Unexpected error:`, error);
    return {
      success: false,
      error: ErrorCode.UNKNOWN_ERROR,
      message: 'Ha ocurrido un error inesperado',
    };
  }
}
2.2.5 Sin Transacciones de Base de Datos
typescriptCopy// ❌ ERROR: Operaciones multi-tabla sin transacciones

// Lo que implícitamente se asumió:
await supabase.from('daily_tasks').update({ status: 'completed' });
await supabase.from('wallets').update({ btc_balance: newBalance });
await supabase.from('avatar_states').update({ fat_lvl: newFat });
// Si falla la tercera, las dos primeras ya se ejecutaron = INCONSISTENCIA

// Lo que DEBIÓ existir:

// Opción 1: Usar una función de Postgres
// En migrations:
CREATE OR REPLACE FUNCTION complete_task_transaction(
  p_user_id UUID,
  p_task_id UUID,
  p_btc_reward INTEGER,
  p_vector_changes JSONB
)
RETURNS JSONB AS $$
DECLARE
  v_task RECORD;
  v_avatar RECORD;
  v_result JSONB;
BEGIN
  -- Lock para evitar race conditions
  PERFORM pg_advisory_xact_lock(hashtext(p_user_id::text || '_task'));
  
  -- Verificar y obtener tarea
  SELECT * INTO v_task
  FROM daily_tasks
  WHERE id = p_task_id AND user_id = p_user_id
  FOR UPDATE;
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Task not found';
  END IF;
  
  IF v_task.status != 'pending' THEN
    RAISE EXCEPTION 'Task already processed';
  END IF;
  
  -- Actualizar tarea
  UPDATE daily_tasks
  SET status = 'completed', completed_at = NOW()
  WHERE id = p_task_id;
  
  -- Actualizar wallet
  UPDATE wallets
  SET 
    btc_balance = btc_balance + p_btc_reward,
    total_earned = total_earned + p_btc_reward
  WHERE user_id = p_user_id;
  
  -- Actualizar vectores
  UPDATE avatar_states
  SET
    fat_lvl = LEAST(13, GREATEST(1, fat_lvl + COALESCE((p_vector_changes->>'fat_lvl')::DECIMAL, 0))),
    muscle_lvl = LEAST(13, GREATEST(1, muscle_lvl + COALESCE((p_vector_changes->>'muscle_lvl')::DECIMAL, 0))),
    posture_lvl = LEAST(13, GREATEST(1, posture_lvl + COALESCE((p_vector_changes->>'posture_lvl')::DECIMAL, 0))),
    luxury_lvl = LEAST(13, GREATEST(1, luxury_lvl + COALESCE((p_vector_changes->>'luxury_lvl')::DECIMAL, 0))),
    updated_at = NOW()
  WHERE user_id = p_user_id
  RETURNING * INTO v_avatar;
  
  -- Registrar en activity_logs
  INSERT INTO activity_logs (user_id, action, details)
  VALUES (p_user_id, 'task_completed', jsonb_build_object(
    'task_id', p_task_id,
    'btc_reward', p_btc_reward,
    'vector_changes', p_vector_changes
  ));
  
  -- Construir resultado
  v_result := jsonb_build_object(
    'task_id', p_task_id,
    'btc_earned', p_btc_reward,
    'new_state', row_to_json(v_avatar)
  );
  
  RETURN v_result;
EXCEPTION
  WHEN OTHERS THEN
    RAISE;
END;
$$ LANGUAGE plpgsql;

// En el código TypeScript:
export async function completeTask(taskId: string) {
  // ... validaciones previas ...
  
  const { data, error } = await supabase.rpc('complete_task_transaction', {
    p_user_id: user.id,
    p_task_id: taskId,
    p_btc_reward: task.btc_reward,
    p_vector_changes: TASK_MODIFIERS[task.category],
  });
  
  if (error) {
    return {
      success: false,
      error: mapPostgresError(error),
    };
  }
  
  return {
    success: true,
    data,
  };
}
2.2.6 Sin Idempotencia en Operaciones Críticas
typescriptCopy// ❌ ERROR: Las operaciones no son idempotentes

// Problema: Si el cliente pierde conexión y reintenta, puede duplicar efectos

// Lo que DEBIÓ existir:

// 1. Agregar idempotency_key a las operaciones
interface CompleteTaskInput {
  taskId: string;
  idempotencyKey: string; // UUID generado por el cliente
}

// 2. Tabla para tracking
CREATE TABLE idempotency_keys (
  key VARCHAR(255) PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id),
  action VARCHAR(100) NOT NULL,
  result JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ DEFAULT NOW() + INTERVAL '24 hours'
);

CREATE INDEX idx_idempotency_expires ON idempotency_keys(expires_at);

// 3. Middleware de idempotencia
async function withIdempotency<T>(
  key: string,
  userId: string,
  action: string,
  operation: () => Promise<T>
): Promise<T> {
  const supabase = await createClient();
  
  // Verificar si ya existe
  const { data: existing } = await supabase
    .from('idempotency_keys')
    .select('result')
    .eq('key', key)
    .eq('user_id', userId)
    .single();
  
  if (existing) {
    console.log(`[Idempotency] Returning cached result for key: ${key}`);
    return existing.result as T;
  }
  
  // Ejecutar operación
  const result = await operation();
  
  // Guardar resultado
  await supabase.from('idempotency_keys').insert({
    key,
    user_id: userId,
    action,
    result,
  });
  
  return result;
}

2.3 Lo que el Blueprint debió MEJORAR
2.3.1 Especificación de API Incompleta
yamlCopy❌ PROBLEMA: No existe documentación OpenAPI

✅ DEBIÓ EXISTIR:

# openapi.yaml
openapi: 3.0.3
info:
  title: MetaMen100 API
  version: 1.0.0
  description: API para el sistema de gamificación MetaMen100

servers:
  - url: https://api.metamen100.com/v1
    description: Production
  - url: http://localhost:3000/api
    description: Development

paths:
  /tasks/complete:
    post:
      operationId: completeTask
      summary: Marca una tarea como completada
      tags:
        - Tasks
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - taskId
                - idempotencyKey
              properties:
                taskId:
                  type: string
                  format: uuid
                  description: ID de la tarea a completar
                idempotencyKey:
                  type: string
                  format: uuid
                  description: Clave única para garantizar idempotencia
      responses:
        '200':
          description: Tarea completada exitosamente
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TaskCompletionResult'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '404':
          $ref: '#/components/responses/NotFound'
        '409':
          description: La tarea ya fue procesada
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
        '429':
          $ref: '#/components/responses/RateLimited'

components:
  schemas:
    TaskCompletionResult:
      type: object
      properties:
        success:
          type: boolean
        data:
          type: object
          properties:
            taskId:
              type: string
              format: uuid
            btcEarned:
              type: integer
            newState:
              $ref: '#/components/schemas/AvatarState'
            
    AvatarState:
      type: object
      properties:
        fatLvl:
          type: number
          minimum: 1
          maximum: 13
        muscleLvl:
          type: number
          minimum: 1
          maximum: 13
        postureLvl:
          type: number
          minimum: 1
          maximum: 13
        luxuryLvl:
          type: number
          minimum: 1
          maximum: 13
        envLvl:
          type: integer
          minimum: 1
          maximum: 13
        healthPoints:
          type: integer
          minimum: 0
          maximum: 13
        currentDay:
          type: integer
          minimum: 1
          maximum: 100
        currentLevel:
          type: integer
          minimum: 1
          maximum: 13
        streakDays:
          type: integer
          minimum: 0

    Error:
      type: object
      required:
        - success
        - error
        - message
      properties:
        success:
          type: boolean
          enum: [false]
        error:
          type: string
          enum:
            - VALIDATION_ERROR
            - TASK_NOT_FOUND
            - TASK_ALREADY_COMPLETED
            - INSUFFICIENT_FUNDS
            - UNAUTHORIZED
            - RATE_LIMITED
        message:
          type: string
        details:
          type: object

  responses:
    BadRequest:
      description: Solicitud inválida
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    Unauthorized:
      description: No autorizado
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    NotFound:
      description: Recurso no encontrado
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    RateLimited:
      description: Demasiadas solicitudes
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
          headers:
            Retry-After:
              schema:
                type: integer
              description: Segundos hasta poder reintentar

  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
2.3.2 Estados y Transiciones No Modelados
typescriptCopy// ❌ PROBLEMA: No hay máquinas de estado definidas

// ✅ DEBIÓ EXISTIR:

// 1. Máquina de estado para suscripciones
type SubscriptionState = 'trial' | 'active' | 'limbo' | 'cancelled';

interface SubscriptionTransition {
  from: SubscriptionState;
  to: SubscriptionState;
  trigger: string;
  guard?: (context: SubscriptionContext) => boolean;
  action?: (context: SubscriptionContext) => void;
}

const SUBSCRIPTION_TRANSITIONS: SubscriptionTransition[] = [
  {
    from: 'trial',
    to: 'active',
    trigger: 'PAYMENT_COMPLETED',
    action: (ctx) => {
      ctx.trialEndsAt = null;
      ctx.currentPeriodStart = new Date();
    },
  },
  {
    from: 'trial',
    to: 'limbo',
    trigger: 'TRIAL_EXPIRED',
    guard: (ctx) => new Date() > ctx.trialEndsAt,
    action: (ctx) => {
      ctx.limboStartedAt = new Date();
    },
  },
  {
    from: 'limbo',
    to: 'active',
    trigger: 'PAYMENT_COMPLETED',
  },
  {
    from: 'limbo',
    to: 'cancelled',
    trigger: 'LIMBO_EXPIRED',
    guard: (ctx) => {
      const daysSinceLimbo = Math.floor(
        (Date.now() - ctx.limboStartedAt.getTime()) / (1000 * 60 * 60 * 24)
      );
      return daysSinceLimbo >= 30;
    },
  },
  {
    from: 'active',
    to: 'limbo',
    trigger: 'PAYMENT_FAILED',
  },
  {
    from: 'active',
    to: 'cancelled',
    trigger: 'USER_CANCELLED',
  },
];

function canTransition(
  current: SubscriptionState,
  trigger: string,
  context: SubscriptionContext
): SubscriptionState | null {
  const transition = SUBSCRIPTION_TRANSITIONS.find(
    (t) => t.from === current && t.trigger === trigger
  );
  
  if (!transition) return null;
  if (transition.guard && !transition.guard(context)) return null;
  
  return transition.to;
}

// 2. Máquina de estado para tareas
type TaskState = 'pending' | 'completed' | 'failed' | 'expired';

const TASK_TRANSITIONS = [
  { from: 'pending', to: 'completed', trigger: 'USER_COMPLETE' },
  { from: 'pending', to: 'failed', trigger: 'DAY_CLOSED_INCOMPLETE' },
  { from: 'pending', to: 'expired', trigger: 'DAY_ADVANCED' },
];

// 3. Máquina de estado para generación de imagen
type ImageGenState = 'idle' | 'queued' | 'generating' | 'completed' | 'failed' | 'retrying';

const IMAGE_GEN_TRANSITIONS = [
  { from: 'idle', to: 'queued', trigger: 'REQUEST_GENERATION' },
  { from: 'queued', to: 'generating', trigger: 'WORKER_PICKED_UP' },
  { from: 'generating', to: 'completed', trigger: 'GENERATION_SUCCESS' },
  { from: 'generating', to: 'retrying', trigger: 'GENERATION_FAILED', guard: (ctx) => ctx.attempts < 3 },
  { from: 'generating', to: 'failed', trigger: 'GENERATION_FAILED', guard: (ctx) => ctx.attempts >= 3 },
  { from: 'retrying', to: 'generating', trigger: 'RETRY_SCHEDULED' },
];
2.3.3 Sin Estrategia de Caching
typescriptCopy// ❌ PROBLEMA: Cada request consulta la DB sin caching

// ✅ DEBIÓ EXISTIR:

// 1. Cache en memoria para datos estáticos (store items)
const STORE_ITEMS_CACHE_KEY = 'store_items_v1';
const STORE_ITEMS_TTL = 3600; // 1 hora

async function getStoreItems(): Promise<StoreItem[]> {
  // Intentar cache primero
  const cached = await redis.get(STORE_ITEMS_CACHE_KEY);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Si no hay cache, consultar DB
  const { data } = await supabase
    .from('store_items')
    .select('*')
    .eq('is_active', true);
  
  // Guardar en cache
  await redis.setex(STORE_ITEMS_CACHE_KEY, STORE_ITEMS_TTL, JSON.stringify(data));
  
  return data;
}

// 2. Cache por usuario para avatar state (con invalidación)
async function getAvatarState(userId: string): Promise<AvatarState> {
  const cacheKey = `avatar_state:${userId}`;
  
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  const { data } = await supabase
    .from('avatar_states')
    .select('*')
    .eq('user_id', userId)
    .single();
  
  // Cache corto porque cambia frecuentemente
  await redis.setex(cacheKey, 60, JSON.stringify(data)); // 1 minuto
  
  return data;
}

// 3. Invalidación de cache
async function invalidateUserCache(userId: string): Promise<void> {
  const keys = [
    `avatar_state:${userId}`,
    `wallet:${userId}`,
    `tasks:${userId}:*`,
  ];
  
  for (const pattern of keys) {
    const matchingKeys = await redis.keys(pattern);
    if (matchingKeys.length > 0) {
      await redis.del(...matchingKeys);
    }
  }
}

// 4. Stale-while-revalidate para datos menos críticos
async function getWithSWR<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: { ttl: number; staleTtl: number }
): Promise<T> {
  const cached = await redis.get(key);
  
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    const age = Date.now() - timestamp;
    
    if (age < options.ttl * 1000) {
      // Datos frescos
      return data;
    }
    
    if (age < options.staleTtl * 1000) {
      // Datos stale pero usables, revalidar en background
      fetcher().then((newData) => {
        redis.setex(key, options.staleTtl, JSON.stringify({
          data: newData,
          timestamp: Date.now(),
        }));
      });
      return data;
    }
  }
  
  // Sin cache o muy viejo
  const data = await fetcher();
  await redis.setex(key, options.staleTtl, JSON.stringify({
    data,
    timestamp: Date.now(),
  }));
  
  return data;
}
2.3.4 Sin Rate Limiting
typescriptCopy// ❌ PROBLEMA: Cualquier usuario puede hacer requests ilimitados

// ✅ DEBIÓ EXISTIR:

// 1. Rate limiting por endpoint
const RATE_LIMITS = {
  'completeTask': { points: 10, duration: 60 }, // 10 por minuto
  'generateImage': { points: 1, duration: 3600 }, // 1 por hora
  'purchaseItem': { points: 5, duration: 60 }, // 5 por minuto
  'default': { points: 100, duration: 60 }, // 100 por minuto
};

// 2. Implementación con Redis
import { RateLimiterRedis } from 'rate-limiter-flexible';

const rateLimiters: Record<string, RateLimiterRedis> = {};

function getRateLimiter(action: string): RateLimiterRedis {
  if (rateLimiters[action]) {
    return rateLimiters[action];
  }
  
  const config = RATE_LIMITS[action] || RATE_LIMITS.default;
  
  rateLimiters[action] = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: `rl:${action}`,
    points: config.points,
    duration: config.duration,
    blockDuration: config.duration, // Block for same duration if exceeded
  });
  
  return rateLimiters[action];
}

// 3. Middleware de rate limiting
async function checkRateLimit(
  action: string,
  userId: string
): Promise<{ allowed: boolean; retryAfter?: number }> {
  const limiter = getRateLimiter(action);
  
  try {
    await limiter.consume(userId);
    return { allowed: true };
  } catch (error) {
    if (error instanceof Error && 'msBeforeNext' in error) {
      return {
        allowed: false,
        retryAfter: Math.ceil((error as any).msBeforeNext / 1000),
      };
    }
    throw error;
  }
}

// 4. Uso en Server Actions
export async function completeTask(input: CompleteTaskInput) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { success: false, error: 'UNAUTHORIZED' };
  }
  
  // Check rate limit
  const rateCheck = await checkRateLimit('completeTask', user.id);
  if (!rateCheck.allowed) {
    return {
      success: false,
      error: 'RATE_LIMITED',
      retryAfter: rateCheck.retryAfter,
    };
  }
  
  // Continuar con lógica...
}

2.4 Documentos que FALTARON Generar
2.4.1 DOCUMENTO FALTANTE #1: PRD (Product Requirements Document)
markdownCopy# ❌ FALTÓ: PRD - Product Requirements Document

## Contenido que DEBIÓ tener:

### 1. User Stories con Criterios de Aceptación

US-001: Registro de Usuario
  Como visitante
  Quiero registrarme con mi email
  Para comenzar el protocolo de 100 días
  
  Criterios de Aceptación:
  - [ ] El sistema valida formato de email
  - [ ] El sistema verifica que el email no esté registrado
  - [ ] El sistema genera nickname automático (MetaMen + número secuencial)
  - [ ] El sistema crea profile, avatar_state, wallet y subscription automáticamente
  - [ ] El trial dura exactamente 5 días (hasta el día 6 a las 00:00 hora local)
  - [ ] El usuario recibe email de bienvenida en menos de 5 minutos
  - [ ] El usuario es redirigido al onboarding inmediatamente
  
  Métricas de Éxito:
  - Tasa de conversión registro → onboarding completado > 80%
  - Tiempo promedio de registro < 2 minutos

US-002: Completar Tarea
  Como usuario registrado
  Quiero marcar una tarea como completada
  Para progresar en el protocolo
  
  Criterios de Aceptación:
  - [ ] Solo puedo completar tareas del día actual
  - [ ] No puedo completar la misma tarea dos veces
  - [ ] Al completar, recibo BTC inmediatamente
  - [ ] Al completar, mis vectores se actualizan inmediatamente
  - [ ] La UI refleja el cambio sin refresh
  - [ ] Si hay error de red, puedo reintentar sin duplicar
  
  Edge Cases:
  - [ ] Si el día cambia mientras completo, la tarea se invalida
  - [ ] Si pierdo conexión, el estado se sincroniza al reconectar

### 2. Requisitos No Funcionales

RNF-001: Performance
  - Tiempo de carga inicial < 2 segundos (LCP)
  - Time to Interactive < 3 segundos
  - API response time < 200ms (p95)
  - Generación de imagen < 30 segundos

RNF-002: Disponibilidad
  - Uptime objetivo: 99.9%
  - Máximo downtime mensual: 43 minutos
  - Degradación graceful si falla la generación de imagen

RNF-003: Seguridad
  - Todas las rutas de API requieren autenticación
  - Todos los inputs validados en servidor
  - Rate limiting en todos los endpoints
  - Logs de auditoría para operaciones sensibles

RNF-004: Escalabilidad
  - Soportar 1,000 usuarios concurrentes sin degradación
  - Soportar 100 generaciones de imagen simultáneas

### 3. Casos de Borde Documentados

| Escenario | Comportamiento Esperado | Prioridad |
|-----------|-------------------------|-----------|
| Usuario completa tarea justo al cambio de día | Tarea se completa si inició antes de 00:00 | Alta |
| Generación de imagen falla 3 veces | Mostrar última imagen con badge "Actualizando..." | Alta |
| Usuario tiene 1 corazón y falla el día | Avatar muere, reinicio suave | Alta |
| Stripe webhook duplicado | Idempotencia, no duplicar efectos | Alta |
| Usuario cancela suscripción a mitad de periodo | Acceso hasta fin de periodo pagado | Media |
| Usuario intenta comprar item sin nivel | Error claro, no descontar BTC | Alta |
2.4.2 DOCUMENTO FALTANTE #2: ADR (Architecture Decision Records)
markdownCopy# ❌ FALTÓ: ADRs - Architecture Decision Records

## ADR-001: Elección de Next.js sobre alternativas

### Contexto
Necesitamos elegir un framework frontend que soporte SSR, Server Actions
y tenga buen ecosistema.

### Opciones Consideradas
1. Next.js 14+
2. Remix
3. SvelteKit
4. Nuxt 3

### Decisión
Next.js 14+ con App Router

### Razones
- Mayor ecosistema y comunidad
- Integración nativa con Vercel para deployment
- Server Actions eliminan necesidad de API routes adicionales
- Mejor soporte de tipos con TypeScript
- Compatibilidad con Supabase excelente

### Consecuencias
- Positivas: Desarrollo rápido, deployment simple
- Negativas: Lock-in parcial con Vercel para features avanzados

---

## ADR-002: Supabase sobre Firebase/PlanetScale

### Contexto
Necesitamos una base de datos con autenticación integrada y realtime.

### Opciones Consideradas
1. Supabase (PostgreSQL)
2. Firebase (Firestore)
3. PlanetScale + Auth0
4. Self-hosted PostgreSQL + Clerk

### Decisión
Supabase

### Razones
- PostgreSQL permite relaciones complejas y transacciones ACID
- Auth integrado reduce complejidad
- RLS nativo para seguridad
- Realtime subscriptions incluido
- Pricing predecible
- Funciones de Postgres para lógica de negocio

### Consecuencias
- Positivas: Stack simplificado, menos servicios que integrar
- Negativas: Vendor lock-in con Supabase

---

## ADR-003: Replicate sobre RunPod/Modal

### Contexto
Necesitamos generar imágenes con IA de forma consistente y escalable.

### Opciones Consideradas
1. Replicate API
2. RunPod Serverless
3. Modal Labs
4. Self-hosted GPU

### Decisión
Replicate API

### Razones
- API más simple y documentada
- Pricing por uso (no necesitamos GPU dedicada)
- Modelos pre-entrenados disponibles (SDXL)
- Soporte para LoRA personalizado
- No requiere gestión de infraestructura

### Consecuencias
- Positivas: Desarrollo rápido, sin gestión de GPUs
- Negativas: Costo por imagen (~$0.01), dependencia de tercero

---

## ADR-004: Zustand sobre Redux/Jotai

### Contexto
Necesitamos estado global en el cliente para datos del usuario.

### Decisión
Zustand

### Razones
- API mínima, menos boilerplate que Redux
- Integración simple con React 18
- Soporte de TypeScript excelente
- Tamaño pequeño (~1KB)
- No requiere Provider wrapping

---

## ADR-005: Server Actions sobre API Routes

### Contexto
Necesitamos endpoints para mutaciones de datos.

### Decisión
Server Actions como método primario, API Routes solo para webhooks.

### Razones
- Tipado end-to-end sin código adicional
- Menos código que mantener
- Validación automática con Zod
- Mejor DX (Developer Experience)
- Revalidación de cache integrada

### Trade-offs
- API Routes siguen siendo necesarios para webhooks de terceros
- Server Actions no son cacheable como GET requests
2.4.3 DOCUMENTO FALTANTE #3: Test Plan
markdownCopy# ❌ FALTÓ: Test Plan Completo

## 1. Estrategia de Testing

### Pirámide de Tests
Copy                ▲
               / \
              / E2E \         5%  - Playwright
             /───────\
            / Integration\    20% - Jest + Supabase
           /─────────────\
          /    Unit Tests  \  75% - Jest + React Testing Library
         ───────────────────
Copy
## 2. Tests Unitarios Requeridos

### 2.1 Motor de Vectores (lib/core/vectors.ts)

| Test ID | Descripción | Input | Expected Output |
|---------|-------------|-------|-----------------|
| VEC-001 | calculateLevel con estado inicial | fat:13, muscle:1, posture:1 | 1 |
| VEC-002 | calculateLevel con estado perfecto | fat:1, muscle:13, posture:13 | 13 |
| VEC-003 | calculateLevel con valores medios | fat:7, muscle:7, posture:7 | 7 |
| VEC-004 | processTaskImpact cardio reduce fat | fat:10, task:cardio | fat:9.95 |
| VEC-005 | processTaskImpact no excede límites | fat:1, task:cardio | fat:1 (no negativo) |
| VEC-006 | processTaskImpact strength aumenta muscle | muscle:5, task:strength | muscle:5.05 |
| VEC-007 | processJudgementNight 100% completado | 5/5 tasks, streak:6 | streak:7, health:+0 |
| VEC-008 | processJudgementNight 7 días racha recupera | streak:6, health:12 | health:13 |
| VEC-009 | processJudgementNight <80% daña | 3/5 tasks | health:-1, streak:0 |
| VEC-010 | processJudgementNight aplica decay | noFitness:true | fat:+0.02 |
| VEC-011 | processAvatarDeath resetea físico | any state | fat:13, muscle:1, posture:1 |
| VEC-012 | processAvatarDeath mantiene luxury/env | luxury:5, env:4 | luxury:5, env:4 |

### 2.2 Economía (lib/core/economy.ts)

| Test ID | Descripción | Input | Expected Output |
|---------|-------------|-------|-----------------|
| ECO-001 | calculateTaskReward base | task:meditation, level:1 | 15 BTC |
| ECO-002 | calculateTaskReward con multiplicador | task:meditation, streak:7 | 15 * 1.1 = 16 BTC |
| ECO-003 | calculateTaskReward con multiplicador alto | task:meditation, streak:30 | 15 * 1.5 = 22 BTC |
| ECO-004 | canPurchaseItem suficiente balance | balance:1000, price:500 | true |
| ECO-005 | canPurchaseItem insuficiente balance | balance:100, price:500 | false |
| ECO-006 | canPurchaseItem nivel insuficiente | level:3, required:5 | false |

## 3. Tests de Integración

### 3.1 Flujos de Base de Datos

| Test ID | Descripción | Pasos |
|---------|-------------|-------|
| INT-001 | Registro crea todas las entidades | 1. Crear usuario auth, 2. Verificar profile, avatar_state, wallet, subscription creados |
| INT-002 | Completar tarea actualiza DB atómicamente | 1. Completar tarea, 2. Verificar task.status, wallet.balance, avatar_state simultáneamente |
| INT-003 | Compra descuenta e inserta | 1. Comprar item, 2. Verificar wallet decrementado, inventory insertado |
| INT-004 | RLS previene acceso cruzado | 1. Usuario A no puede ver datos de Usuario B |

### 3.2 Flujos de Autenticación

| Test ID | Descripción | Pasos |
|---------|-------------|-------|
| AUTH-001 | Login exitoso redirige a dashboard | 1. Login, 2. Verificar redirect, 3. Verificar sesión válida |
| AUTH-002 | Sesión expirada redirige a login | 1. Expirar token, 2. Acceder dashboard, 3. Verificar redirect |
| AUTH-003 | Middleware protege rutas | 1. Sin auth, 2. Acceder /dashboard, 3. Verificar redirect a /login |

## 4. Tests E2E (Playwright)

### 4.1 User Journeys Críticos

| Test ID | Journey | Duración Máxima |
|---------|---------|-----------------|
| E2E-001 | Registro → Onboarding → Dashboard | 30s |
| E2E-002 | Login → Completar 3 tareas → Verificar stats | 45s |
| E2E-003 | Dashboard → Tienda → Comprar item → Verificar avatar | 60s |
| E2E-004 | Flujo de pago Stripe (test mode) | 90s |

## 5. Cobertura Mínima Requerida

| Área | Cobertura Mínima |
|------|------------------|
| lib/core/* | 95% |
| actions/* | 80% |
| components/ui/* | 70% |
| Flujos críticos E2E | 100% |

## 6. Configuración de Jest

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/lib/**/*.{ts,tsx}',
    'src/actions/**/*.{ts,tsx}',
    'src/components/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
    'src/lib/core/': {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
Copy
### 2.4.4 DOCUMENTO FALTANTE #4: CI/CD Pipeline

```yaml
# ❌ FALTÓ: .github/workflows/ci.yml

name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '20.x'
  PNPM_VERSION: '8'

jobs:
  # ===================================
  # JOB 1: Linting y Type Checking
  # ===================================
  lint:
    name: 🔍 Lint & Type Check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}
      
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Run ESLint
        run: pnpm lint
      
      - name: Run TypeScript check
        run: pnpm type-check
      
      - name: Check formatting
        run: pnpm format:check

  # ===================================
  # JOB 2: Unit Tests
  # ===================================
  unit-tests:
    name: 🧪 Unit Tests
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4
      
      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}
      
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Run unit tests with coverage
        run: pnpm test:unit --coverage
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
          fail_ci_if_error: true

  # ===================================
  # JOB 3: Integration Tests
  # ===================================
  integration-tests:
    name: 🔗 Integration Tests
    runs-on: ubuntu-latest
    needs: lint
    services:
      postgres:
        image: supabase/postgres:15.1.0.55
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
      - uses: actions/checkout@v4
      
      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}
      
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Setup test database
        run: |
          PGPASSWORD=postgres psql -h localhost -U postgres -d test_db -f ./supabase/migrations/init.sql
      
      - name: Run integration tests
        run: pnpm test:integration
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db

  # ===================================
  # JOB 4: E2E Tests
  # ===================================
  e2e-tests:
    name: 🎭 E2E Tests
    runs-on: ubuntu-latest
    needs: [unit-tests, integration-tests]
    steps:
      - uses: actions/checkout@v4
      
      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}
      
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Install Playwright browsers
        run: pnpm exec playwright install --with-deps chromium
      
      - name: Build application
        run: pnpm build
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.TEST_SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.TEST_SUPABASE_ANON_KEY }}
      
      - name: Run E2E tests
        run: pnpm test:e2e
        env:
          BASE_URL: http://localhost:3000
      
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/

  # ===================================
  # JOB 5: Security Audit
  # ===================================
  security:
    name: 🔒 Security Audit
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4
      
      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}
      
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Run security audit
        run: pnpm audit --audit-level=high
      
      - name: Run SAST scan
        uses: github/codeql-action/analyze@v2
        with:
          languages: javascript

  # ===================================
  # JOB 6: Deploy Preview
  # ===================================
  deploy-preview:
    name: 🚀 Deploy Preview
    runs-on: ubuntu-latest
    needs: [unit-tests, integration-tests]
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel Preview
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          scope: ${{ secrets.VERCEL_ORG_ID }}
      
      - name: Comment PR with preview URL
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `🚀 Preview deployed: ${process.env.VERCEL_URL}`
            })

  # ===================================
  # JOB 7: Deploy Production
  # ===================================
  deploy-production:
    name: 🚀 Deploy Production
    runs-on: ubuntu-latest
    needs: [e2e-tests, security]
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    environment:
      name: production
      url: https://metamen100.com
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel Production
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          scope: ${{ secrets.VERCEL_ORG_ID }}
      
      - name: Notify Slack
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          text: 'Production deployment completed!'
          webhook_url: ${{ secrets.SLACK_WEBHOOK }}
2.4.5 DOCUMENTO FALTANTE #5: Observability & Monitoring
markdownCopy# ❌ FALTÓ: Observability Setup

## 1. Structured Logging

### Logger Configuration
```typescript
// lib/logger.ts
import pino from 'pino';

const isProduction = process.env.NODE_ENV === 'production';

export const logger = pino({
  level: isProduction ? 'info' : 'debug',
  formatters: {
    level: (label) => ({ level: label }),
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  base: {
    env: process.env.NODE_ENV,
    service: 'metamen100',
    version: process.env.NEXT_PUBLIC_APP_VERSION,
  },
  redact: ['password', 'token', 'authorization', 'cookie'],
});

// Child loggers for different domains
export const authLogger = logger.child({ domain: 'auth' });
export const taskLogger = logger.child({ domain: 'tasks' });
export const imageLogger = logger.child({ domain: 'image-gen' });
export const paymentLogger = logger.child({ domain: 'payments' });
Uso Correcto
typescriptCopy// En vez de:
console.log('Task completed', taskId);

// Usar:
taskLogger.info({
  action: 'task_completed',
  userId: user.id,
  taskId,
  category: task.category,
  btcReward: task.btc_reward,
  durationMs: Date.now() - startTime,
});
2. Error Tracking (Sentry)
Configuración
typescriptCopy// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  
  beforeSend(event, hint) {
    // Filtrar errores conocidos/esperados
    const error = hint.originalException;
    if (error instanceof AppError && error.isOperational) {
      return null; // No enviar errores operacionales a Sentry
    }
    return event;
  },
  
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ['localhost', 'metamen100.com'],
    }),
  ],
});
Error Boundaries
typescriptCopy// components/ErrorBoundary.tsx
'use client';

import * as Sentry from '@sentry/nextjs';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  eventId: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, eventId: null };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true, eventId: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1>Algo salió mal</h1>
          <button onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId! })}>
            Reportar error
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
3. Métricas de Negocio
Dashboard de Métricas
typescriptCopy// lib/metrics.ts
import { PostHog } from 'posthog-node';

const posthog = new PostHog(process.env.POSTHOG_API_KEY!, {
  host: 'https://app.posthog.com',
});

// Eventos de negocio
export const trackEvent = {
  userRegistered: (userId: string, method: 'email' | 'google') => {
    posthog.capture({
      distinctId: userId,
      event: 'user_registered',
      properties: { method },
    });
  },

  onboardingCompleted: (userId: string, archetypeId: number, durationMs: number) => {
    posthog.capture({
      distinctId: userId,
      event: 'onboarding_completed',
      properties: { archetypeId, durationMs },
    });
  },

  taskCompleted: (userId: string, category: string, dayNumber: number) => {
    posthog.capture({
      distinctId: userId,
      event: 'task_completed',
      properties: { category, dayNumber },
    });
  },

  dayEvaluated: (userId: string, status: 'success' | 'partial' | 'failed', completionRate: number) => {
    posthog.capture({
      distinctId: userId,
      event: 'day_evaluated',
      properties: { status, completionRate },
    });
  },

  avatarDied: (userId: string, dayNumber: number, cause: string) => {
    posthog.capture({
      distinctId: userId,
      event: 'avatar_died',
      properties: { dayNumber, cause },
    });
  },

  subscriptionStarted: (userId: string, plan: string, price: number) => {
    posthog.capture({
      distinctId: userId,
      event: 'subscription_started',
      properties: { plan, price },
    });
  },

  itemPurchased: (userId: string, itemId: number, category: string, price: number) => {
    posthog.capture({
      distinctId: userId,
      event: 'item_purchased',
      properties: { itemId, category, price },
    });
  },
};
4. Alertas
Configuración de Alertas
yamlCopy# alerts.yml (para usar con BetterStack/PagerDuty)
alerts:
  - name: high_error_rate
    description: Error rate > 5% in last 5 minutes
    query: |
      sum(rate(http_requests_total{status=~"5.."}[5m])) 
      / sum(rate(http_requests_total[5m])) > 0.05
    severity: critical
    notify: [slack-engineering, pagerduty]

  - name: image_generation_failures
    description: Image generation failure rate > 20%
    query: |
      sum(rate(image_generation_failed_total[15m])) 
      / sum(rate(image_generation_total[15m])) > 0.20
    severity: warning
    notify: [slack-engineering]

  - name: api_latency_high
    description: P95 latency > 2 seconds
    query: |
      histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 2
    severity: warning
    notify: [slack-engineering]

  - name: payment_failures
    description: Any payment failure
    query: |
      increase(payment_failed_total[5m]) > 0
    severity: critical
    notify: [slack-engineering, email-finance]
Copy
### 2.4.6 DOCUMENTO FALTANTE #6: Security Checklist

```markdown
# ❌ FALTÓ: Security Checklist

## 1. Autenticación

| Check | Status | Notes |
|-------|--------|-------|
| JWT tokens tienen expiración corta (1h) | ⬜ | |
| Refresh tokens rotan en cada uso | ⬜ | |
| Logout invalida sesión en servidor | ⬜ | |
| Intentos de login limitados (5/min) | ⬜ | |
| Contraseñas hasheadas con bcrypt (cost 12) | ⬜ | |
| 2FA disponible para usuarios premium | ⬜ | |
| Verificación de email obligatoria | ⬜ | |

## 2. Autorización

| Check | Status | Notes |
|-------|--------|-------|
| RLS habilitado en TODAS las tablas | ⬜ | |
| Verificación de ownership en cada mutación | ⬜ | |
| Admin routes separadas y protegidas | ⬜ | |
| Service role key solo en backend | ⬜ | |
| API keys rotables | ⬜ | |

## 3. Input Validation

| Check | Status | Notes |
|-------|--------|-------|
| Todos los inputs validados con Zod | ⬜ | |
| SQL injection prevenido (parametrized queries) | ⬜ | |
| XSS prevenido (sanitización de HTML) | ⬜ | |
| CSRF tokens en formularios | ⬜ | |
| File upload validado (tipo, tamaño) | ⬜ | |

## 4. API Security

| Check | Status | Notes |
|-------|--------|-------|
| Rate limiting en todos los endpoints | ⬜ | |
| CORS configurado correctamente | ⬜ | |
| Headers de seguridad (CSP, HSTS, etc.) | ⬜ | |
| Webhooks verificados con signatures | ⬜ | |
| Respuestas de error no exponen stack traces | ⬜ | |

## 5. Datos Sensibles

| Check | Status | Notes |
|-------|--------|-------|
| PII encriptado en reposo | ⬜ | |
| Logs no contienen datos sensibles | ⬜ | |
| Stripe tokens nunca tocan nuestro servidor | ⬜ | |
| Backups encriptados | ⬜ | |
| Retención de datos definida | ⬜ | |

## 6. Headers de Seguridad Requeridos

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data: https://replicate.delivery;
      font-src 'self';
      connect-src 'self' https://*.supabase.co https://api.replicate.com https://api.stripe.com;
      frame-src https://js.stripe.com;
    `.replace(/\n/g, '')
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];
Copy
---

# 3. FASE 1: ANÁLISIS COMPARATIVO CUESTIONARIO1 vs BLUEPRINT

## 3.1 Divergencias Críticas Identificadas

### 3.1.1 Sistema de Arquetipos

```yaml
CUESTIONARIO1 (Actualizado):
  Arquetipos definidos:
    1. "Rastas" - Ex-gamer bonachón, dreadlocks
    2. "El Muscles" - Ex-cadenero, espalda ancha
    3. "Pecas" - Genio cripto caído, pelo rizado
    4. "El Greñas" - Rockero calvo con perilla
    5. "El Rubio" - Galán de prepa pasado de moda
    6. "El Lic" - Ejecutivo reemplazado por IA

BLUEPRINT (Desactualizado):
  Arquetipos definidos:
    1. "THE TITAN" - Afro-Latino, dreadlocks
    2. "THE NOMAD" - Latino/Mestizo
    3. "THE GHOST" - Caucásico rubio
    4. "THE SHADOW" - Afroamericano calvo
    5. "THE MONK" - Asiático
    6. "THE STEEL" - Mediterráneo

⚠️ DISCREPANCIA: Los nombres, etnias y backgrounds son completamente diferentes.
   El Cuestionario1 tiene mayor profundidad narrativa.
3.1.2 Sistema de Tareas por Arquetipo
yamlCopyCUESTIONARIO1 (Actualizado):
  Define 4 arquetipos de TAREAS (no de personajes):
  
  ARQUETIPO MENTAL:
    - 7 sesiones meditación/semana
    - 3 duchas frías/semana
    - 7 despertares a hora ideal/semana
    - 7 sesiones lectura/semana
    → Afecta: AURA (aura_lvl)

  ARQUETIPO ATRACTIVO CARA:
    - 3 sesiones corrección postura/semana
    - 3 sesiones ejercicios faciales/semana
    - 10 sesiones kegel/semana (2/día × 5 días)
    → Afecta: JAWLINE (face_lvl)

  ARQUETIPO PRODUCTIVIDAD:
    - 6 sesiones journal/semana
    - 5 horas aprendizaje/semana (1h × 5 días)
    - 15 horas focus work/semana (3h × 5 días)
    → Afecta: WEALTH (wealth_lvl)

  ARQUETIPO FÍSICO:
    - 5 sesiones fuerza/semana
    - 3 sesiones cardio/semana
    - 1.5L agua diario (7/7)
    → Afecta: PHYSIQUE (fat_lvl, muscle_lvl)

BLUEPRINT (Desactualizado):
  NO define arquetipos de tareas
  Usa categorías simples: fitness, meditation, reading, etc.
  NO especifica frecuencias semanales
  NO conecta categorías con vectores específicos

⚠️ PROBLEMA CRÍTICO: El Blueprint no implementa la estructura de arquetipos de tareas
   que el Cuestionario1 define como core del sistema.
3.1.3 Sistema de Vectores
yamlCopyCUESTIONARIO1 (Actualizado):
  Vectores definidos (actualizados):
    - AURA (aura_lvl): 1-13, controlado por Arquetipo Mental
    - JAWLINE (face_lvl): 1-13, controlado por Arquetipo Cara
    - WEALTH (wealth_lvl): 1-13, controlado por Arquetipo Productividad
    - PHYSIQUE (muscle_lvl): 1-13, controlado por Arquetipo Físico
    - PHYSIQUE (fat_lvl): 13-1 (inverso), controlado por Arquetipo Físico
    - ENV (env_lvl): 1-13, progresión temporal + nivel usuario

BLUEPRINT (Desactualizado):
  Vectores definidos:
    - FAT_LVL: 13→1
    - MUSCLE_LVL: 1→13
    - POSTURE_LVL: 1→13 (renombrado a AURA en Cuestionario1)
    - LUXURY_LVL: 1→13 (renombrado a WEALTH en Cuestionario1)
    - ENV_LVL: 1→13

⚠️ DISCREPANCIA MENOR: Nombres diferentes pero funcionalidad similar.
   JAWLINE (face_lvl) es NUEVO en Cuestionario1 y no existe en Blueprint.
3.1.4 Sistema de Herramientas (Arsenal)
yamlCopyCUESTIONARIO1 (Actualizado):
  9 Herramientas definidas:
    1. Biblioteca de Poder (Lectura con libros cargados)
    2. Templo del Hierro (Gym con ejercicios seleccionables)
    3. Cámara de Meditación (Audios binaurales + guiados)
    4. Bitácora de Guerra (Journal con resumen IA semanal)
    5. Vitalidad Sexual (Kegel con sistema aprieta/afloja)
    6. Escultor Facial (Yoga facial con videos)
    7. Crea tu Hipnosis (IA genera audio personalizado) [PREMIUM]
    8. Movilidad Táctica (Estiramientos con sesiones)
    9. Focus Chamber (Pomodoro + música concentración)

BLUEPRINT (Desactualizado):
  9 Herramientas listadas pero con especificaciones incompletas:
  - Sin detalle de "Crea tu Hipnosis" (generación con IA)
  - Sin especificación de libros cargados en Biblioteca
  - Sin detalle de sistema kegel interactivo

⚠️ PROBLEMA: Las herramientas necesitan especificación técnica detallada
   que el Blueprint no proporciona.
3.1.5 Sistema de Niveles
yamlCopyCUESTIONARIO1 (Actualizado):
  10 Niveles principales (1-10):
    1. Indigente
    2. Arrimado
    3. Alucín (HITO DÍA 6 - Conversión)
    4. Chalán
    5. Godín
    6. Acomodado
    7. Pudiente
    8. Millonario
    9. Magnate
    10. Semi-Dios
  
  + Niveles post-game (11-13) para Modo Prestigio

BLUEPRINT (Desactualizado):
  13 Niveles continuos (1-13):
    0. Marginado
    1. Indigente
    2. Sobreviviente
    3. Endeudado
    4. Alucín
    5. Godín
    6. Acomodado
    7. Pudiente
    8. Rico
    9. Millonario
    10. Multimillonario
    11. Magnate
    12. Elite
    13. Leyenda

⚠️ DISCREPANCIA: El Cuestionario1 tiene 10 niveles base con post-game,
   mientras Blueprint tiene 13 niveles continuos.
   Nombres y posiciones difieren significativamente.
3.1.6 Hitos y Eventos Especiales
yamlCopyCUESTIONARIO1 (Actualizado):
  Eventos por nivel (videos generados por IA):
    - Nvl-1: Video del personaje mirándose en espejo, lamentando estado
    - Nvl-2: Video dejando las calles para cuarto de servicio
    - Nvl-3 (Día 6): Video cómico colocándose gorra y cadena
    - Nvl-4: Video con auto Chevy tuneado
    - Nvl-5: Video siendo recibido en oficina
    - Nvl-6 a 10: Por definir

BLUEPRINT (Desactualizado):
  NO define eventos de video
  Solo menciona generación de imagen estática diaria

⚠️ FEATURE FALTANTE: El Blueprint no contempla la generación de videos
   animados para hitos, que es parte del diferenciador del Cuestionario1.

3.2 Tecnologías Faltantes
3.2.1 Queue System para Jobs de Background
yamlCopyFALTÓ: Sistema de colas para tareas asíncronas

REQUERIDO:
  - BullMQ con Redis para job queues
  - Workers para:
    - Generación de imágenes
    - Envío de notificaciones
    - Procesamiento de Judgement Night
    - Generación de resúmenes IA semanales
    - Sincronización con Stripe

IMPLEMENTACIÓN CORRECTA:

# docker-compose.yml
services:
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

# lib/queue/index.ts
import { Queue, Worker, Job } from 'bullmq';

const connection = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || '6379'),
};

// Queues
export const imageGenerationQueue = new Queue('image-generation', { connection });
export const notificationQueue = new Queue('notifications', { connection });
export const judgementQueue = new Queue('judgement-night', { connection });

// Workers
export function startWorkers() {
  new Worker('image-generation', async (job: Job<ImageGenJobData>) => {
    const { userId, prompt, negativePrompt } = job.data;
    
    try {
      const imageUrl = await generateImage({ prompt, negativePrompt });
      await updateAvatarImage(userId, imageUrl);
      return { success: true, imageUrl };
    } catch (error) {
      if (job.attemptsMade < 3) {
        throw error; // BullMQ reintentará
      }
      // Marcar como fallido definitivamente
      await markImageGenerationFailed(userId);
      return { success: false, error: error.message };
    }
  }, { 
    connection,
    concurrency: 5,
    limiter: { max: 10, duration: 60000 }, // Max 10 por minuto
  });
}
3.2.2 Realtime Subscriptions
yamlCopyFALTÓ: Especificación de subscripciones en tiempo real

REQUERIDO:
  - Supabase Realtime para:
    - Actualización de avatar_state cuando cambian vectores
    - Notificaciones en tiempo real
    - Actualización de wallet
    - Estado de generación de imagen

IMPLEMENTACIÓN CORRECTA:

# hooks/useRealtimeAvatar.ts
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { AvatarState } from '@/types';

export function useRealtimeAvatar(userId: string) {
  const [state, setState] = useState<AvatarState | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  useEffect(() => {
    const supabase = createClient();
    
    // Fetch inicial
    supabase
      .from('avatar_states')
      .select('*')
      .eq('user_id', userId)
      .single()
      .then(({ data }) => setState(data));
    
    // Suscripción realtime
    const channel = supabase
      .channel(`avatar-${userId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'avatar_states',
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          setState(payload.new as AvatarState);
          
          // Detectar si la imagen cambió
          if (payload.new.last_image_url !== payload.old?.last_image_url) {
            setIsGenerating(false);
          }
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);
  
  return { state, isGenerating, setIsGenerating };
}
3.2.3 Feature Flags System
yamlCopyFALTÓ: Sistema de feature flags

REQUERIDO:
  - Control de features por:
    - Entorno (dev/staging/prod)
    - Usuario (beta testers)
    - % de usuarios (rollout gradual)
    - Suscripción (free vs premium)

IMPLEMENTACIÓN CORRECTA:

# lib/features/index.ts
import { createClient } from '@/lib/supabase/server';

interface FeatureConfig {
  enabled: boolean;
  enabledForUsers?: string[];
  enabledForPercentage?: number;
  requiresSubscription?: boolean;
}

const FEATURES: Record<string, FeatureConfig> = {
  'custom-hypnosis': {
    enabled: true,
    requiresSubscription: true,
  },
  'video-milestones': {
    enabled: false,
    enabledForUsers: ['test-user-1', 'test-user-2'],
  },
  'new-onboarding': {
    enabled: true,
    enabledForPercentage: 50,
  },
};

export async function isFeatureEnabled(
  featureKey: string,
  userId?: string
): Promise<boolean> {
  const config = FEATURES[featureKey];
  if (!config) return false;
  if (!config.enabled) return false;
  
  // Check specific users
  if (config.enabledForUsers && userId) {
    if (config.enabledForUsers.includes(userId)) return true;
  }
  
  // Check percentage rollout
  if (config.enabledForPercentage && userId) {
    const hash = simpleHash(userId + featureKey);
    if ((hash % 100) < config.enabledForPercentage) return true;
  }
  
  // Check subscription requirement
  if (config.requiresSubscription && userId) {
    const supabase = await createClient();
    const { data: sub } = await supabase
      .from('subscriptions')
      .select('status')
      .eq('user_id', userId)
      .single();
    
    if (sub?.status !== 'active') return false;
  }
  
  return config.enabled && !config.enabledForPercentage && !config.enabledForUsers;
}

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}
3.2.4 Configuración de MCP Servers para Antigravity
yamlCopy❌ FALTÓ COMPLETAMENTE: Configuración de herramientas de desarrollo con IA

REQUERIDO PARA ANTIGRAVITY:

1. MCP Servers a configurar:
   - @anthropic/mcp-server-filesystem: Acceso al sistema de archivos
   - @anthropic/mcp-server-github: Integración con GitHub
   - @anthropic/mcp-server-postgres: Conexión directa a Supabase/Postgres
   - mcp-server-fetch: Para consultar documentación web

2. Skills/Custom Instructions:
   - Contexto del proyecto MetaMen100
   - Convenciones de código
   - Estructura de carpetas
   - Tipos de TypeScript del proyecto

CONFIGURACIÓN CORRECTA:

# .antigravity/config.json (si Antigravity lo soporta)
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-filesystem", "/path/to/metamen100"],
      "env": {}
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-postgres"],
      "env": {
        "DATABASE_URL": "${SUPABASE_DB_URL}"
      }
    }
  },
  "customInstructions": {
    "projectContext": "Leyendo de /docs/*.md",
    "codeStyle": "TypeScript strict, no any, Tailwind CSS",
    "architecture": "Next.js 14 App Router, Server Actions, Supabase"
  }
}

# Alternativa: Custom System Prompt para el agente
SYSTEM_PROMPT = """
Eres el arquitecto principal de MetaMen100.

CONTEXTO DEL PROYECTO:
- Aplicación de gamificación de hábitos con IA generativa
- Target: Hombres 20-35 buscando transformación
- Stack: Next.js 14+, TypeScript, Supabase, Tailwind, Replicate

REGLAS INQUEBRANTABLES:
1. TypeScript estricto - NUNCA usar 'any'
2. Validar TODOS los inputs con Zod
3. Verificar autenticación en TODAS las Server Actions
4. Usar transacciones para operaciones multi-tabla
5. Logging estructurado con pino
6. Tests para toda lógica de negocio

ESTRUCTURA:
- /lib/core: Lógica de negocio pura (sin I/O)
- /actions: Server Actions (con I/O)
- /components: UI components
- /hooks: Custom React hooks

ANTES DE GENERAR CÓDIGO:
1. Lee los archivos relevantes en /docs
2. Verifica los tipos en /types/database.ts
3. Sigue las convenciones existentes en el codebase

CUANDO GENERES CÓDIGO:
1. Incluye manejo de errores completo
2. Incluye tipos explícitos (no inferidos)
3. Incluye comentarios JSDoc para funciones públicas
4. Incluye validación de inputs
"""

3.3 Procesos No Ejecutados
3.3.1 Proceso de Onboarding Detallado
typescriptCopy// ❌ FALTÓ: Implementación completa del flujo de onboarding

// ✅ DEBIÓ EXISTIR:

// types/onboarding.ts
interface OnboardingStep {
  id: string;
  title: string;
  component: React.ComponentType<OnboardingStepProps>;
  canSkip: boolean;
  completionCriteria: (data: OnboardingData) => boolean;
}

interface OnboardingData {
  archetypeSelected: number | null;
  oathTaken: boolean;
  tutorialCompleted: boolean;
  notificationsEnabled: boolean;
}

// lib/onboarding/steps.ts
export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 'welcome',
    title: 'Bienvenido al Protocolo',
    component: WelcomeStep,
    canSkip: false,
    completionCriteria: () => true, // Solo click en continuar
  },
  {
    id: 'archetype',
    title: 'Selección de Arquetipo',
    component: ArchetypeSelectionStep,
    canSkip: false,
    completionCriteria: (data) => data.archetypeSelected !== null,
  },
  {
    id: 'tutorial',
    title: 'Tutorial del Sistema',
    component: TutorialStep,
    canSkip: true, // Usuarios experimentados pueden saltar
    completionCriteria: (data) => data.tutorialCompleted,
  },
  {
    id: 'oath',
    title: 'El Juramento',
    component: OathStep,
    canSkip: false,
    completionCriteria: (data) => data.oathTaken,
  },
  {
    id: 'notifications',
    title: 'Configurar Notificaciones',
    component: NotificationsStep,
    canSkip: true,
    completionCriteria: () => true,
  },
];

// components/onboarding/OathStep.tsx
'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface OathStepProps {
  nickname: string;
  onComplete: () => void;
}

export function OathStep({ nickname, onComplete }: OathStepProps) {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const holdTimer = useRef<NodeJS.Timeout | null>(null);
  const startTime = useRef<number>(0);
  
  const REQUIRED_HOLD_TIME = 3000; // 3 segundos
  
  const oathText = `YO, ${nickname}, ME COMPROMETO A NO MENTIR A MI REFLEJO.
ACEPTO QUE CADA ACCIÓN TIENE CONSECUENCIAS.
MI AVATAR ES MI ESPEJO. SI FALLO, ÉL SUFRE.
HOY COMIENZA MI TRANSFORMACIÓN DE 100 DÍAS.`;

  const handlePressStart = () => {
    setIsHolding(true);
    startTime.current = Date.now();
    
    holdTimer.current = setInterval(() => {
      const elapsed = Date.now() - startTime.current;
      const newProgress = Math.min(100, (elapsed / REQUIRED_HOLD_TIME) * 100);
      setProgress(newProgress);
      
      if (elapsed >= REQUIRED_HOLD_TIME) {
        clearInterval(holdTimer.current!);
        // Vibración háptica si está disponible
        if (navigator.vibrate) {
          navigator.vibrate(200);
        }
        onComplete();
      }
    }, 50);
  };

  const handlePressEnd = () => {
    setIsHolding(false);
    setProgress(0);
    if (holdTimer.current) {
      clearInterval(holdTimer.current);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      {/* Texto del juramento */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <pre className="text-lg font-mono text-white/80 whitespace-pre-line">
          {oathText}
        </pre>
      </motion.div>
      
      {/* Botón de huella */}
      <div className="relative">
        <motion.button
          className="w-32 h-32 rounded-full bg-bg-tertiary border-2 border-white/20 flex items-center justify-center"
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onMouseLeave={handlePressEnd}
          onTouchStart={handlePressStart}
          onTouchEnd={handlePressEnd}
          animate={{
            scale: isHolding ? 0.95 : 1,
            borderColor: isHolding ? '#FF0000' : 'rgba(255,255,255,0.2)',
          }}
        >
          <FingerprintIcon className="w-16 h-16 text-white/40" />
        </motion.button>
        
        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-32 h-32 -rotate-90"
          viewBox="0 0 128 128"
        >
          <circle
            cx="64"
            cy="64"
            r="60"
            fill="none"
            stroke="#FF0000"
            strokeWidth="4"
            strokeDasharray={`${progress * 3.77} 377`}
            className="transition-all duration-100"
          />
        </svg>
      </div>
      
      <p className="mt-6 text-white/50 text-sm">
        Mantén presionado por 3 segundos para firmar el pacto
      </p>
    </div>
  );
}
3.3.2 Proceso de Judgement Night Completo
typescriptCopy// ❌ FALTÓ: Implementación robusta del cierre de día

// ✅ DEBIÓ EXISTIR:

// lib/judgement/processor.ts
import { createClient } from '@/lib/supabase/server';
import { processJudgementNight } from '@/lib/core/vectors';
import { logger } from '@/lib/logger';
import { imageGenerationQueue, notificationQueue } from '@/lib/queue';

interface JudgementContext {
  userId: string;
  currentDay: number;
  tasks: DailyTask[];
  avatarState: AvatarState;
  subscription: Subscription;
}

export async function executeJudgementNight(userId: string): Promise<JudgementResult> {
  const supabase = await createClient();
  const startTime = Date.now();
  
  logger.info({ userId, action: 'judgement_start' });
  
  try {
    // 1. Obtener contexto completo
    const context = await getJudgementContext(supabase, userId);
    
    // 2. Verificar si el usuario está en limbo (no procesar)
    if (context.subscription.status === 'limbo') {
      return await handleLimboJudgement(supabase, context);
    }
    
    // 3. Calcular métricas del día
    const protocolTasks = context.tasks.filter(t => t.task_type === 'protocol');
    const completedTasks = protocolTasks.filter(t => t.status === 'completed');
    const completionRate = protocolTasks.length > 0 
      ? completedTasks.length / protocolTasks.length 
      : 0;
    
    const hadFitness = completedTasks.some(t => 
      t.category === 'cardio' || t.category === 'strength'
    );
    
    // 4. Procesar vectores (lógica pura)
    const result = processJudgementNight(
      context.avatarState,
      completedTasks.length,
      protocolTasks.length,
      hadFitness
    );
    
    // 5. Aplicar cambios en transacción
    const { error: txError } = await supabase.rpc('process_judgement_transaction', {
      p_user_id: userId,
      p_new_state: result.newState,
      p_day_status: result.status,
      p_tasks_completed: completedTasks.length,
      p_tasks_total: protocolTasks.length,
      p_btc_earned: calculateDayBtc(completedTasks),
      p_health_change: result.healthChange,
    });
    
    if (txError) {
      throw new Error(`Transaction failed: ${txError.message}`);
    }
    
    // 6. Encolar generación de imagen
    if (result.status !== 'death') {
      await imageGenerationQueue.add('daily-image', {
        userId,
        dayNumber: context.currentDay + 1,
        priority: result.status === 'success' ? 'high' : 'normal',
      });
    }
    
    // 7. Enviar notificaciones
    await sendJudgementNotifications(userId, result);
    
    // 8. Log resultado
    logger.info({
      userId,
      action: 'judgement_complete',
      day: context.currentDay,
      status: result.status,
      completionRate,
      healthChange: result.healthChange,
      durationMs: Date.now() - startTime,
    });
    
    return result;
    
  } catch (error) {
    logger.error({
      userId,
      action: 'judgement_error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    
    // Notificar equipo de ingeniería
    await notificationQueue.add('alert-engineering', {
      type: 'judgement_failure',
      userId,
      error: error instanceof Error ? error.message : 'Unknown',
    });
    
    throw error;
  }
}

async function handleLimboJudgement(
  supabase: SupabaseClient,
  context: JudgementContext
): Promise<JudgementResult> {
  // En limbo, solo se pierde vida gradualmente
  const daysSinceLimbo = Math.floor(
    (Date.now() - new Date(context.subscription.updated_at).getTime()) / (1000 * 60 * 60 * 24)
  );
  
  // Perder 1 corazón cada 3 días en limbo
  const healthLoss = Math.floor(daysSinceLimbo / 3) - (context.avatarState.health_points - 13);
  
  if (healthLoss > 0) {
    const newHealth = Math.max(0, context.avatarState.health_points - healthLoss);
    
    await supabase
      .from('avatar_states')
      .update({ health_points: newHealth })
      .eq('user_id', context.userId);
    
    if (newHealth === 0) {
      return { ...processAvatarDeath(context.avatarState), status: 'death' };
    }
  }
  
  return {
    newState: { ...context.avatarState, health_points: context.avatarState.health_points - healthLoss },
    healthChange: -healthLoss,
    streakBroken: false,
    isDead: false,
    status: 'failed',
  };
}

// Función SQL para transacción atómica
/*
CREATE OR REPLACE FUNCTION process_judgement_transaction(
  p_user_id UUID,
  p_new_state JSONB,
  p_day_status TEXT,
  p_tasks_completed INTEGER,
  p_tasks_total INTEGER,
  p_btc_earned INTEGER,
  p_health_change INTEGER
) RETURNS VOID AS $$
BEGIN
  -- Actualizar avatar_state
  UPDATE avatar_states SET
    fat_lvl = (p_new_state->>'fat_lvl')::DECIMAL,
    muscle_lvl = (p_new_state->>'muscle_lvl')::DECIMAL,
    posture_lvl = (p_new_state->>'posture_lvl')::DECIMAL,
    luxury_lvl = (p_new_state->>'luxury_lvl')::DECIMAL,
    env_lvl = (p_new_state->>'env_lvl')::INTEGER,
    health_points = (p_new_state->>'health_points')::INTEGER,
    current_day = (p_new_state->>'current_day')::INTEGER,
    current_level = (p_new_state->>'current_level')::INTEGER,
    streak_days = (p_new_state->>'streak_days')::INTEGER,
    updated_at = NOW()
  WHERE user_id = p_user_id;
  
  -- Crear log del día
  INSERT INTO daily_logs (
    user_id, day_number, log_date, tasks_completed, tasks_total,
    btc_earned, health_change, status, vectors_snapshot, closed_at
  ) VALUES (
    p_user_id,
    (p_new_state->>'current_day')::INTEGER - 1,
    CURRENT_DATE,
    p_tasks_completed,
    p_tasks_total,
    p_btc_earned,
    p_health_change,
    p_day_status::day_status,
    p_new_state,
    NOW()
  );
  
  -- Actualizar wallet
  UPDATE wallets SET
    btc_balance = btc_balance + p_btc_earned,
    total_earned = total_earned + p_btc_earned
  WHERE user_id = p_user_id;
  
  -- Marcar tareas no completadas como fallidas
  UPDATE daily_tasks SET
    status = 'failed'
  WHERE user_id = p_user_id
    AND day_number = (p_new_state->>'current_day')::INTEGER - 1
    AND status = 'pending';
    
END;
$$ LANGUAGE plpgsql;
*/

3.4 Configuraciones de Herramientas Omitidas
3.4.1 ESLint Configuración Estricta
javascriptCopy// ❌ FALTÓ: .eslintrc.js con reglas estrictas

// ✅ DEBIÓ EXISTIR:

module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript estricto
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    
    // React
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-no-leaked-render': 'error',
    
    // Import order
    'import/order': ['error', {
      'groups': [
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling'],
        'index',
        'type',
      ],
      'newlines-between': 'always',
      'alphabetize': { order: 'asc' },
    }],
    
    // Seguridad
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off', // Permitido en tests
      },
    },
  ],
};
3.4.2 Prettier Configuración
jsonCopy// ❌ FALTÓ: .prettierrc

// ✅ DEBIÓ EXISTIR:

{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindFunctions": ["cn", "clsx"]
}
3.4.3 TypeScript Configuración Estricta
jsonCopy// ❌ PROBLEMA: tsconfig.json no especificado en detalle

// ✅ DEBIÓ EXISTIR:

{
  "compilerOptions": {
    // Strict mode completo
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "useUnknownInCatchVariables": true,
    "alwaysStrict": true,
    
    // Checks adicionales
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    
    // Module resolution
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    
    // JSX
    "jsx": "preserve",
    
    // Paths
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    
    // Output
    "noEmit": true,
    "incremental": true,
    
    // Plugins
    "plugins": [
      { "name": "next" }
    ]
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
3.4.4 Husky + Lint-Staged
jsonCopy// ❌ FALTÓ: Pre-commit hooks

// ✅ DEBIÓ EXISTIR:

// package.json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}

// .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged

// .husky/pre-push
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run type-check
npm run test:unit

4. CONCLUSIONES Y SIGUIENTE PASO
4.1 Resumen de Hallazgos
Copy╔═══════════════════════════════════════════════════════════════════════════════╗
║                        RESUMEN DE HALLAZGOS                                   ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  DOCUMENTACIÓN:                                                               ║
║  ├── Blueprint: Buena visión, mala especificación técnica                    ║
║  ├── Faltantes: PRD, ADRs, Test Plan, CI/CD, Security Checklist             ║
║  └── Problema: Sin OpenAPI, sin contratos de API                             ║
║                                                                               ║
║  ARQUITECTURA:                                                                ║
║  ├── Base correcta: Next.js + Supabase + Tailwind                           ║
║  ├── Faltantes: Queue system, caching, rate limiting, feature flags         ║
║  └── Problema: Sin transacciones, sin idempotencia, sin estados formales    ║
║                                                                               ║
║  CÓDIGO:                                                                      ║
║  ├── Tipos: OK pero incompletos (falta face_lvl/JAWLINE)                    ║
║  ├── Validación: Básica, necesita Zod en todos los inputs                   ║
║  └── Error handling: Primitivo, necesita sistema estructurado               ║
║                                                                               ║
║  PROCESOS:                                                                    ║
║  ├── Testing: Inexistente                                                    ║
║  ├── CI/CD: Inexistente                                                      ║
║  ├── Monitoring: Inexistente                                                 ║
║  └── Security: Superficial                                                   ║
║                                                                               ║
║  DISCREPANCIAS CUESTIONARIO1 vs BLUEPRINT:                                   ║
║  ├── Arquetipos de tareas: NO implementados en Blueprint                    ║
║  ├── face_lvl/JAWLINE: NO existe en Blueprint                               ║
║  ├── Videos de hitos: NO contemplados en Blueprint                          ║
║  └── 10 niveles vs 13: Estructura diferente                                 ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
4.2 Próximo Paso Recomendado
Para proceder con un desarrollo de calidad TOP 100 mundial, se requiere:

FASE 0.5: Documentación Completa

Generar todos los documentos faltantes (PRD, ADRs, Test Plan, etc.)
Actualizar Blueprint con información del Cuestionario1
Crear OpenAPI specification


FASE 1: Refactorización de Arquitectura

Implementar sistema de arquetipos de tareas
Agregar face_lvl/JAWLINE a base de datos y lógica
Configurar queue system con BullMQ
Implementar transacciones atómicas


FASE 2: Infraestructura de Calidad

Configurar CI/CD pipeline completo
Implementar logging estructurado
Configurar Sentry para error tracking
Establecer métricas y alertas
