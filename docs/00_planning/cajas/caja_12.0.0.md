📦 CAJA 12: OBSERVABILIDAD Y CALIDAD
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 12: OBSERVABILIDAD Y CALIDAD                              ║
║                                                                                      ║
║    "Un sistema TOP 100 no solo funciona;                                             ║
║     sabe exactamente CÓMO está funcionando en cada momento"                          ║
║                                                                                      ║
║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
║    │                                                                            │   ║
║    │   📊 12.1 Logging        📈 12.2 Metrics       🚨 12.3 Error Tracking     │   ║
║    │   Structured Logging     Business Analytics    Sentry Integration          │   ║
║    │                                                                            │   ║
║    │   🔔 12.4 Alerting       🧪 12.5 Unit Tests   🔗 12.6 Integration Tests   │   ║
║    │   Monitoring & Alerts    Vitest + Coverage     Database + API Tests        │   ║
║    │                                                                            │   ║
║    │   🎭 12.7 E2E Tests      🔄 12.8 CI/CD        🧹 12.9 Code Quality        │   ║
║    │   Playwright Journeys    GitHub Actions        Linting + Formatting        │   ║
║    │                                                                            │   ║
║    │   ⚡ 12.10 Performance                                                     │   ║
║    │   Web Vitals + Optimization                                                │   ║
║    │                                                                            │   ║
║    └────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                      ║
║    Responsable: Claude (Documentación) + Antigravity (Implementación)               ║
║    Entregables: Configs, Tests, Pipelines, Dashboards                               ║
║    Tiempo Estimado: 2-3 días de implementación                                      ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ÍNDICE DE DESGLOSE ATÓMICO - CAJA 12

SUBCAJA 12.1: Logging Estructurado
SUBCAJA 12.2: Métricas de Negocio (Analytics)
SUBCAJA 12.3: Error Tracking (Sentry)
SUBCAJA 12.4: Alertas y Monitoring
SUBCAJA 12.5: Unit Tests
SUBCAJA 12.6: Integration Tests
SUBCAJA 12.7: E2E Tests (Playwright)
SUBCAJA 12.8: CI/CD Pipeline
SUBCAJA 12.9: Code Quality
SUBCAJA 12.10: Performance Monitoring


SUBCAJA 12.1: Logging Estructurado
Sistema de Logs para Debugging y Auditoría
Archivos a Crear
CopyRutas:
├── /src/lib/logger/index.ts           (Logger principal)
├── /src/lib/logger/transports.ts      (Transportes de logs)
├── /src/lib/logger/formatters.ts      (Formateo de logs)
├── /src/lib/logger/contexts.ts        (Contextos por dominio)
└── /src/lib/logger/middleware.ts      (Middleware para Server Actions)

Tamaño Estimado: ~400 líneas total
Tiempo de Generación: 30-45 minutos
Estructura del Sistema de Logging
CopyLOGGING SYSTEM
│
├── 1. ARQUITECTURA DE LOGGING
│   │
│   ├── 1.1 Librería Principal
│   │   └── pino (Ultra-rápido, JSON nativo)
│   │
│   ├── 1.2 Niveles de Log
│   │   ├── fatal: Sistema no puede continuar
│   │   ├── error: Error que requiere atención
│   │   ├── warn: Situación anormal pero manejable
│   │   ├── info: Eventos de negocio importantes
│   │   ├── debug: Información para debugging
│   │   └── trace: Detalle máximo (solo dev)
│   │
│   ├── 1.3 Destinos de Logs
│   │   ├── Development: Console (pretty print)
│   │   ├── Production: JSON stdout → Vercel Logs
│   │   └── Futuro: Axiom/Datadog para retención
│   │
│   └── 1.4 Campos Base (Automáticos)
│       ├── timestamp: ISO 8601
│       ├── level: string
│       ├── env: development|production
│       ├── service: "metamen100"
│       ├── version: APP_VERSION
│       └── requestId: UUID único por request
│
├── 2. LOGGERS POR DOMINIO
│   │
│   ├── 2.1 authLogger
│   │   ├── Dominio: Autenticación
│   │   └── Eventos: login, logout, register, verify
│   │
│   ├── 2.2 taskLogger
│   │   ├── Dominio: Tareas
│   │   └── Eventos: complete, create, fail
│   │
│   ├── 2.3 judgementLogger
│   │   ├── Dominio: Judgement Night
│   │   └── Eventos: start, success, fail, death
│   │
│   ├── 2.4 imageLogger
│   │   ├── Dominio: Generación de Imágenes
│   │   └── Eventos: queue, start, complete, fail
│   │
│   ├── 2.5 paymentLogger
│   │   ├── Dominio: Pagos
│   │   └── Eventos: checkout, success, fail, webhook
│   │
│   ├── 2.6 storeLogger
│   │   ├── Dominio: Tienda
│   │   └── Eventos: view, purchase, equip
│   │
│   └── 2.7 toolLogger
│       ├── Dominio: Herramientas
│       └── Eventos: start, progress, complete
│
├── 3. REDACCIÓN DE LOGS (Lo que NO logear)
│   │
│   ├── 3.1 Campos a Redactar
│   │   ├── password
│   │   ├── token
│   │   ├── authorization
│   │   ├── cookie
│   │   ├── creditCard
│   │   ├── phone (parcial: últimos 4)
│   │   └── email (parcial: ***@domain.com)
│   │
│   └── 3.2 Implementación
│       └── pino.redact(['password', 'token', ...])
│
├── 4. FORMATO DE EVENTOS
│   │
│   ├── 4.1 Evento de Negocio
│   │   {
│   │     "level": "info",
│   │     "domain": "tasks",
│   │     "action": "task_completed",
│   │     "userId": "uuid",
│   │     "taskId": "uuid",
│   │     "category": "meditation",
│   │     "btcReward": 15,
│   │     "durationMs": 234,
│   │     "timestamp": "2025-01-15T10:30:00Z"
│   │   }
│   │
│   ├── 4.2 Evento de Error
│   │   {
│   │     "level": "error",
│   │     "domain": "payments",
│   │     "action": "webhook_failed",
│   │     "error": {
│   │       "code": "SIGNATURE_INVALID",
│   │       "message": "Webhook signature verification failed"
│   │     },
│   │     "webhookId": "evt_xxx",
│   │     "timestamp": "..."
│   │   }
│   │
│   └── 4.3 Evento de Performance
│       {
│         "level": "info",
│         "domain": "performance",
│         "action": "server_action_duration",
│         "actionName": "completeTask",
│         "durationMs": 156,
│         "success": true
│       }
│
└── 5. MIDDLEWARE DE LOGGING
    │
    ├── 5.1 Server Action Wrapper
    │   └── Loguea inicio, fin, duración, resultado
    │
    ├── 5.2 Request ID Propagation
    │   └── Mismo ID a través de todo el request
    │
    └── 5.3 User Context
        └── Agregar userId automáticamente si está autenticado
Tareas Atómicas para 12.1 Logging
yamlCopyTAREA-12.1.1:
  Nombre: "Instalar dependencias de logging"
  Acción: "pnpm add pino pino-pretty"
  Responsable: Antigravity
  Comando: |
    pnpm add pino
    pnpm add -D pino-pretty
  Criterio de Éxito: "Dependencias en package.json"

TAREA-12.1.2:
  Nombre: "Crear logger principal"
  Acción: "Crear /src/lib/logger/index.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el archivo /src/lib/logger/index.ts con:
    
    ```typescript
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
        version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      },
      redact: {
        paths: ['password', 'token', 'authorization', 'cookie', 'creditCard'],
        censor: '[REDACTED]',
      },
      transport: isProduction ? undefined : {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'HH:MM:ss',
          ignore: 'pid,hostname',
        },
      },
    });
    
    export type Logger = typeof logger;
    ```
  Output: "Archivo creado y funcional"

TAREA-12.1.3:
  Nombre: "Crear loggers por dominio"
  Acción: "Crear /src/lib/logger/contexts.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/logger/contexts.ts con child loggers para cada dominio:
    
    ```typescript
    import { logger } from './index';
    
    // Child loggers por dominio de negocio
    export const authLogger = logger.child({ domain: 'auth' });
    export const taskLogger = logger.child({ domain: 'tasks' });
    export const judgementLogger = logger.child({ domain: 'judgement' });
    export const imageLogger = logger.child({ domain: 'image-gen' });
    export const paymentLogger = logger.child({ domain: 'payments' });
    export const storeLogger = logger.child({ domain: 'store' });
    export const toolLogger = logger.child({ domain: 'tools' });
    export const systemLogger = logger.child({ domain: 'system' });
    ```
  Output: "Archivo con todos los loggers de dominio"

TAREA-12.1.4:
  Nombre: "Crear middleware para Server Actions"
  Acción: "Crear /src/lib/logger/middleware.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/logger/middleware.ts con un wrapper para Server Actions:
    
    ```typescript
    import { logger } from './index';
    import { nanoid } from 'nanoid';
    
    type AsyncFunction<T> = (...args: any[]) => Promise<T>;
    
    export function withLogging<T>(
      actionName: string,
      domainLogger: typeof logger,
      action: AsyncFunction<T>
    ): AsyncFunction<T> {
      return async (...args: any[]) => {
        const requestId = nanoid();
        const startTime = Date.now();
        
        const actionLogger = domainLogger.child({ 
          requestId, 
          action: actionName 
        });
        
        actionLogger.info({ event: 'action_start' });
        
        try {
          const result = await action(...args);
          const durationMs = Date.now() - startTime;
          
          actionLogger.info({ 
            event: 'action_complete',
            durationMs,
            success: true,
          });
          
          return result;
        } catch (error) {
          const durationMs = Date.now() - startTime;
          
          actionLogger.error({
            event: 'action_error',
            durationMs,
            success: false,
            error: {
              message: error instanceof Error ? error.message : 'Unknown error',
              name: error instanceof Error ? error.name : 'UnknownError',
            },
          });
          
          throw error;
        }
      };
    }
    ```
  Output: "Middleware funcional"

TAREA-12.1.5:
  Nombre: "Integrar logging en Server Actions existentes"
  Acción: "Agregar logs a actions/tasks.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Modifica /src/actions/tasks.ts para usar el taskLogger:
    
    Antes:
    ```typescript
    export async function completeTask(input) {
      // lógica
    }
    ```
    
    Después:
    ```typescript
    import { taskLogger } from '@/lib/logger/contexts';
    import { withLogging } from '@/lib/logger/middleware';
    
    async function _completeTask(input) {
      // Agregar logs en puntos clave:
      taskLogger.info({ 
        event: 'validating_task',
        taskId: input.taskId 
      });
      
      // ... lógica existente ...
      
      taskLogger.info({
        event: 'task_completed',
        userId: user.id,
        taskId: input.taskId,
        category: task.category,
        btcReward: task.btc_reward,
      });
      
      return result;
    }
    
    export const completeTask = withLogging(
      'completeTask',
      taskLogger,
      _completeTask
    );
    ```
  Output: "Server Action con logging completo"

TAREA-12.1.6:
  Nombre: "Integrar logging en Judgement Night"
  Acción: "Agregar logs a lib/core/judgement.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Asegura que executeJudgementNight tenga logs detallados:
    
    ```typescript
    import { judgementLogger } from '@/lib/logger/contexts';
    
    export async function executeJudgementNight(userId: string) {
      judgementLogger.info({ event: 'judgement_start', userId });
      
      // ... al calcular completion rate:
      judgementLogger.info({
        event: 'completion_calculated',
        userId,
        completionRate,
        tasksCompleted: completedTasks.length,
        tasksTotal: protocolTasks.length,
      });
      
      // ... al aplicar health change:
      judgementLogger.info({
        event: 'health_updated',
        userId,
        previousHealth: state.health_points,
        healthChange,
        newHealth: state.health_points + healthChange,
      });
      
      // ... si hay muerte:
      if (state.health_points <= 0) {
        judgementLogger.warn({
          event: 'avatar_death',
          userId,
          currentDay: state.current_day,
        });
      }
      
      // ... al completar:
      judgementLogger.info({
        event: 'judgement_complete',
        userId,
        status: result.status,
        newDay: state.current_day + 1,
        durationMs: Date.now() - startTime,
      });
    }
    ```
  Output: "Judgement Night completamente logeado"

TAREA-12.1.7:
  Nombre: "Integrar logging en generación de imágenes"
  Acción: "Agregar logs a lib/ai/image-generator.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Agrega logging detallado al pipeline de generación:
    
    ```typescript
    import { imageLogger } from '@/lib/logger/contexts';
    
    export async function generateAvatarImage(userId: string, state: AvatarState) {
      const generationId = nanoid();
      
      imageLogger.info({
        event: 'generation_queued',
        generationId,
        userId,
        level: state.current_level,
      });
      
      // ... al construir prompt:
      imageLogger.debug({
        event: 'prompt_built',
        generationId,
        promptLength: prompt.length,
        // NO loguear el prompt completo en producción (puede ser largo)
      });
      
      // ... al llamar a Replicate:
      imageLogger.info({
        event: 'api_call_start',
        generationId,
        provider: 'replicate',
      });
      
      // ... al recibir resultado:
      imageLogger.info({
        event: 'generation_complete',
        generationId,
        userId,
        durationMs,
        imageUrl: result.imageUrl.substring(0, 50) + '...', // Truncar URL
      });
    }
    ```
  Output: "Pipeline de IA con logging"

TAREA-12.1.8:
  Nombre: "Integrar logging en pagos"
  Acción: "Agregar logs a actions/payments.ts y webhooks"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Logging crítico para pagos:
    
    ```typescript
    import { paymentLogger } from '@/lib/logger/contexts';
    
    // En checkout:
    paymentLogger.info({
      event: 'checkout_initiated',
      userId,
      priceId: plan.priceId,
    });
    
    // En webhook:
    export async function POST(req: Request) {
      const signature = req.headers.get('stripe-signature');
      
      paymentLogger.info({
        event: 'webhook_received',
        webhookId: req.headers.get('x-request-id'),
        hasSignature: !!signature,
      });
      
      // Si firma inválida:
      paymentLogger.error({
        event: 'webhook_signature_invalid',
        error: 'Signature verification failed',
      });
      
      // Si éxito:
      paymentLogger.info({
        event: 'subscription_activated',
        userId,
        subscriptionId,
        plan: session.metadata?.plan,
      });
    }
    ```
  Output: "Pagos completamente logeados"

TAREA-12.1.9:
  Nombre: "Crear barrel export"
  Acción: "Asegurar exports correctos"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Actualiza /src/lib/logger/index.ts para exportar todo:
    
    ```typescript
    // Re-export todo
    export * from './contexts';
    export * from './middleware';
    export { logger } from './index';
    ```
  Output: "Imports simplificados"

TAREA-12.1.10:
  Nombre: "Documentar estándares de logging"
  Acción: "Agregar sección a /docs/03_TECH_SPEC.md"
  Responsable: Claude
  Prompt para Claude: |
    Agrega una sección "Logging Standards" a 03_TECH_SPEC.md con:
    - Niveles de log y cuándo usar cada uno
    - Formato de eventos
    - Qué loguear y qué no
    - Ejemplos de buenos logs
  Output: "Documentación de logging"

SUBCAJA 12.2: Métricas de Negocio (Analytics)
PostHog para Tracking de Eventos y Análisis
Archivos a Crear
CopyRutas:
├── /src/lib/analytics/index.ts        (Cliente PostHog)
├── /src/lib/analytics/events.ts       (Definición de eventos)
├── /src/lib/analytics/identify.ts     (Identificación de usuarios)
├── /src/lib/analytics/provider.tsx    (Provider para React)
└── /src/app/layout.tsx                (Integración del provider)

Tamaño Estimado: ~300 líneas total
Tiempo de Generación: 30-45 minutos
Estructura del Sistema de Analytics
CopyANALYTICS SYSTEM (PostHog)
│
├── 1. ARQUITECTURA
│   │
│   ├── 1.1 Servicio: PostHog Cloud
│   │   └── Free tier: 1M eventos/mes
│   │
│   ├── 1.2 Integración
│   │   ├── Cliente: posthog-js (browser)
│   │   └── Servidor: posthog-node (Server Actions)
│   │
│   └── 1.3 Identificación
│       ├── distinctId: user.id (UUID de Supabase)
│       ├── Pre-login: anonymous ID
│       └── Post-login: merge con user ID
│
├── 2. EVENTOS DE NEGOCIO
│   │
│   ├── 2.1 FUNNEL DE ADQUISICIÓN
│   │   ├── page_viewed (landing)
│   │   ├── signup_started
│   │   ├── signup_completed
│   │   ├── onboarding_step_completed
│   │   │   ├── step: 'archetype_selected'
│   │   │   ├── step: 'tutorial_completed'
│   │   │   └── step: 'oath_taken'
│   │   └── onboarding_completed
│   │
│   ├── 2.2 ENGAGEMENT DIARIO
│   │   ├── session_started
│   │   ├── task_viewed
│   │   ├── task_completed
│   │   │   ├── taskId
│   │   │   ├── category (meditation, strength, etc.)
│   │   │   ├── archetype (mental, cara, productividad, físico)
│   │   │   └── dayNumber
│   │   ├── tool_opened
│   │   │   └── toolName (biblioteca, templo, etc.)
│   │   ├── tool_session_completed
│   │   │   ├── toolName
│   │   │   └── durationMinutes
│   │   └── day_completion_rate
│   │       ├── completionRate (0-100)
│   │       └── status (success/partial/failed)
│   │
│   ├── 2.3 PROGRESIÓN
│   │   ├── level_up
│   │   │   ├── previousLevel
│   │   │   ├── newLevel
│   │   │   └── dayNumber
│   │   ├── streak_milestone
│   │   │   └── days (7, 14, 30, etc.)
│   │   ├── streak_broken
│   │   │   └── previousStreak
│   │   ├── health_changed
│   │   │   ├── previousHealth
│   │   │   ├── newHealth
│   │   │   └── cause
│   │   └── avatar_died
│   │       └── dayNumber
│   │
│   ├── 2.4 MONETIZACIÓN
│   │   ├── trial_started
│   │   ├── paywall_viewed
│   │   │   └── location (day6, tool, etc.)
│   │   ├── checkout_started
│   │   │   └── plan (monthly/annual)
│   │   ├── subscription_activated
│   │   │   ├── plan
│   │   │   └── price
│   │   ├── subscription_cancelled
│   │   │   └── reason (optional)
│   │   ├── btc_purchased
│   │   │   ├── packId
│   │   │   ├── amount
│   │   │   └── price
│   │   └── limbo_entered
│   │
│   ├── 2.5 TIENDA
│   │   ├── store_viewed
│   │   │   └── category
│   │   ├── item_viewed
│   │   │   ├── itemId
│   │   │   └── price
│   │   ├── item_purchased
│   │   │   ├── itemId
│   │   │   ├── category
│   │   │   └── price
│   │   └── item_equipped
│   │       └── itemId
│   │
│   └── 2.6 IMAGEN IA
│       ├── image_generation_started
│       ├── image_generation_completed
│       │   └── durationSeconds
│       └── image_generation_failed
│           └── error
│
├── 3. USER PROPERTIES
│   │
│   ├── 3.1 Identificación
│   │   ├── $email
│   │   ├── nickname
│   │   └── archetypeId
│   │
│   ├── 3.2 Estado Actual
│   │   ├── currentLevel
│   │   ├── currentDay
│   │   ├── healthPoints
│   │   ├── streakDays
│   │   └── btcBalance
│   │
│   ├── 3.3 Suscripción
│   │   ├── subscriptionStatus
│   │   ├── plan
│   │   └── trialEndsAt
│   │
│   └── 3.4 Engagement
│       ├── totalTasksCompleted
│       ├── totalDaysActive
│       └── favoriteToolName
│
└── 4. DASHBOARDS A CREAR EN POSTHOG
    │
    ├── 4.1 Overview
    │   ├── DAU/MAU
    │   ├── New signups (daily)
    │   └── Active subscriptions
    │
    ├── 4.2 Funnel de Conversión
    │   └── Landing → Signup → Onboarding → Day 6 → Paid
    │
    ├── 4.3 Retención
    │   ├── Day 1, 7, 30 retention
    │   └── Cohort analysis
    │
    ├── 4.4 Engagement
    │   ├── Tasks completed per day
    │   ├── Tool usage distribution
    │   └── Average session duration
    │
    └── 4.5 Revenue
        ├── MRR
        ├── Conversion rate
        └── Churn rate
Tareas Atómicas para 12.2 Analytics
yamlCopyTAREA-12.2.1:
  Nombre: "Crear cuenta en PostHog"
  Acción: "Registrarse en PostHog Cloud"
  Responsable: Manual (tú)
  Pasos: |
    1. Ir a https://posthog.com
    2. Crear cuenta con tu email
    3. Crear proyecto "MetaMen100"
    4. Copiar API Key (público)
    5. Guardar en .env.local como NEXT_PUBLIC_POSTHOG_KEY
    6. Copiar Host URL
    7. Guardar como NEXT_PUBLIC_POSTHOG_HOST
  Criterio de Éxito: "Variables de entorno configuradas"

TAREA-12.2.2:
  Nombre: "Instalar dependencias de PostHog"
  Acción: "pnpm add posthog-js posthog-node"
  Responsable: Antigravity
  Comando: |
    pnpm add posthog-js posthog-node
  Criterio de Éxito: "Dependencias instaladas"

TAREA-12.2.3:
  Nombre: "Crear cliente PostHog browser"
  Acción: "Crear /src/lib/analytics/client.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/analytics/client.ts:
    
    ```typescript
    import posthog from 'posthog-js';
    
    export const initPostHog = () => {
      if (typeof window === 'undefined') return;
      if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
      
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        capture_pageview: false, // Manejamos manualmente
        capture_pageleave: true,
        persistence: 'localStorage',
        autocapture: false, // Solo eventos explícitos
        disable_session_recording: true, // Por ahora
      });
    };
    
    export { posthog };
    ```
  Output: "Cliente PostHog configurado"

TAREA-12.2.4:
  Nombre: "Crear cliente PostHog servidor"
  Acción: "Crear /src/lib/analytics/server.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/analytics/server.ts:
    
    ```typescript
    import { PostHog } from 'posthog-node';
    
    let posthogServer: PostHog | null = null;
    
    export const getPostHogServer = () => {
      if (!posthogServer && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        posthogServer = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
          flushAt: 1, // Flush inmediato en serverless
          flushInterval: 0,
        });
      }
      return posthogServer;
    };
    
    export const trackServerEvent = (
      distinctId: string,
      event: string,
      properties?: Record<string, any>
    ) => {
      const ph = getPostHogServer();
      if (ph) {
        ph.capture({
          distinctId,
          event,
          properties,
        });
      }
    };
    
    export const identifyUser = (
      distinctId: string,
      properties: Record<string, any>
    ) => {
      const ph = getPostHogServer();
      if (ph) {
        ph.identify({
          distinctId,
          properties,
        });
      }
    };
    ```
  Output: "Cliente servidor configurado"

TAREA-12.2.5:
  Nombre: "Crear definición de eventos tipada"
  Acción: "Crear /src/lib/analytics/events.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/analytics/events.ts con tipos para todos los eventos:
    
    ```typescript
    // Tipos de eventos
    export type AnalyticsEvent = 
      // Funnel
      | { name: 'page_viewed'; properties: { page: string } }
      | { name: 'signup_started'; properties: { method: 'email' | 'google' } }
      | { name: 'signup_completed'; properties: { method: 'email' | 'google' } }
      | { name: 'onboarding_step_completed'; properties: { step: string; archetypeId?: number } }
      | { name: 'onboarding_completed'; properties: { archetypeId: number; durationMs: number } }
      
      // Engagement
      | { name: 'task_completed'; properties: { 
          taskId: string;
          category: string;
          archetype: 'mental' | 'cara' | 'productividad' | 'físico';
          dayNumber: number;
          btcReward: number;
        }}
      | { name: 'tool_opened'; properties: { toolName: string } }
      | { name: 'tool_session_completed'; properties: { toolName: string; durationMinutes: number } }
      
      // Progresión
      | { name: 'level_up'; properties: { previousLevel: number; newLevel: number; dayNumber: number } }
      | { name: 'streak_milestone'; properties: { days: number } }
      | { name: 'streak_broken'; properties: { previousStreak: number } }
      | { name: 'avatar_died'; properties: { dayNumber: number } }
      
      // Monetización
      | { name: 'checkout_started'; properties: { plan: string } }
      | { name: 'subscription_activated'; properties: { plan: string; price: number } }
      | { name: 'item_purchased'; properties: { itemId: number; category: string; price: number } }
    ;
    
    // Helper con type safety
    export function createEvent<T extends AnalyticsEvent['name']>(
      name: T,
      properties: Extract<AnalyticsEvent, { name: T }>['properties']
    ) {
      return { name, properties };
    }
    ```
  Output: "Eventos tipados"

TAREA-12.2.6:
  Nombre: "Crear hook useAnalytics"
  Acción: "Crear /src/lib/analytics/hooks.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/analytics/hooks.ts:
    
    ```typescript
    'use client';
    
    import { useCallback } from 'react';
    import { posthog } from './client';
    import type { AnalyticsEvent } from './events';
    
    export function useAnalytics() {
      const track = useCallback(<T extends AnalyticsEvent['name']>(
        name: T,
        properties: Extract<AnalyticsEvent, { name: T }>['properties']
      ) => {
        posthog.capture(name, properties);
      }, []);
      
      const identify = useCallback((
        userId: string,
        traits: Record<string, any>
      ) => {
        posthog.identify(userId, traits);
      }, []);
      
      const reset = useCallback(() => {
        posthog.reset();
      }, []);
      
      return { track, identify, reset };
    }
    ```
  Output: "Hook de analytics"

TAREA-12.2.7:
  Nombre: "Crear PostHog Provider"
  Acción: "Crear /src/lib/analytics/provider.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/analytics/provider.tsx:
    
    ```typescript
    'use client';
    
    import { useEffect } from 'react';
    import { usePathname, useSearchParams } from 'next/navigation';
    import { initPostHog, posthog } from './client';
    
    export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
      const pathname = usePathname();
      const searchParams = useSearchParams();
      
      useEffect(() => {
        initPostHog();
      }, []);
      
      useEffect(() => {
        if (pathname) {
          let url = window.origin + pathname;
          if (searchParams?.toString()) {
            url = url + `?${searchParams.toString()}`;
          }
          posthog.capture('$pageview', { $current_url: url });
        }
      }, [pathname, searchParams]);
      
      return <>{children}</>;
    }
    ```
  Output: "Provider configurado"

TAREA-12.2.8:
  Nombre: "Integrar Provider en layout"
  Acción: "Modificar /src/app/layout.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Agrega el AnalyticsProvider a /src/app/layout.tsx:
    
    ```typescript
    import { AnalyticsProvider } from '@/lib/analytics/provider';
    
    export default function RootLayout({ children }) {
      return (
        <html>
          <body>
            <AnalyticsProvider>
              {children}
            </AnalyticsProvider>
          </body>
        </html>
      );
    }
    ```
  Output: "Provider integrado"

TAREA-12.2.9:
  Nombre: "Integrar tracking en completeTask"
  Acción: "Agregar evento en actions/tasks.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    En completeTask, después de completar exitosamente:
    
    ```typescript
    import { trackServerEvent } from '@/lib/analytics/server';
    
    // Después de la transacción exitosa:
    trackServerEvent(user.id, 'task_completed', {
      taskId: input.taskId,
      category: task.category,
      archetype: task.archetype,
      dayNumber: avatarState.current_day,
      btcReward: task.btc_reward,
    });
    ```
  Output: "Evento de tarea integrado"

TAREA-12.2.10:
  Nombre: "Integrar tracking en level_up"
  Acción: "Agregar evento en lógica de niveles"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Cuando el usuario sube de nivel (en Judgement Night o al completar tareas):
    
    ```typescript
    if (newLevel > previousLevel) {
      trackServerEvent(userId, 'level_up', {
        previousLevel,
        newLevel,
        dayNumber: state.current_day,
      });
    }
    ```
  Output: "Evento de nivel integrado"

TAREA-12.2.11:
  Nombre: "Integrar tracking en suscripción"
  Acción: "Agregar eventos en checkout y webhook"
  Responsable: Antigravity
  Prompt para Antigravity: |
    En checkout:
    ```typescript
    trackServerEvent(user.id, 'checkout_started', { plan });
    ```
    
    En webhook de subscription.created:
    ```typescript
    trackServerEvent(userId, 'subscription_activated', {
      plan: session.metadata?.plan,
      price: session.amount_total / 100,
    });
    ```
  Output: "Eventos de pago integrados"

TAREA-12.2.12:
  Nombre: "Integrar tracking en tienda"
  Acción: "Agregar eventos en acciones de tienda"
  Responsable: Antigravity
  Prompt para Antigravity: |
    En purchaseItem:
    ```typescript
    trackServerEvent(user.id, 'item_purchased', {
      itemId: item.id,
      category: item.category,
      price: item.price_btc,
    });
    ```
  Output: "Eventos de tienda integrados"

TAREA-12.2.13:
  Nombre: "Crear identificación de usuario post-login"
  Acción: "Llamar identify después de auth"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Después de login/registro exitoso, identificar al usuario:
    
    ```typescript
    // En el cliente (después de redirect al dashboard):
    import { useAnalytics } from '@/lib/analytics/hooks';
    
    function DashboardPage() {
      const { identify } = useAnalytics();
      const { user, avatarState } = useUserData();
      
      useEffect(() => {
        if (user) {
          identify(user.id, {
            $email: user.email,
            nickname: user.nickname,
            archetypeId: avatarState.base_avatar_id,
            currentLevel: avatarState.current_level,
            subscriptionStatus: user.subscription_status,
          });
        }
      }, [user]);
    }
    ```
  Output: "Identificación integrada"

TAREA-12.2.14:
  Nombre: "Documentar eventos de analytics"
  Acción: "Crear tabla de eventos en documentación"
  Responsable: Claude
  Prompt para Claude: |
    Agrega una sección "Analytics Events" a la documentación técnica con:
    - Lista de todos los eventos
    - Properties de cada evento
    - Cuándo se disparan
    - Ejemplo de payload
  Output: "Documentación de eventos"

SUBCAJA 12.3: Error Tracking (Sentry)
Captura y Reporte de Errores
Archivos a Crear/Modificar
CopyRutas:
├── /sentry.client.config.ts           (Config cliente)
├── /sentry.server.config.ts           (Config servidor)
├── /sentry.edge.config.ts             (Config edge functions)
├── /src/instrumentation.ts            (Instrumentación Next.js)
├── /src/app/global-error.tsx          (Error boundary global)
├── /src/components/error-boundary.tsx (Error boundary reutilizable)
└── /next.config.js                    (Actualizar con Sentry)

Tamaño Estimado: ~350 líneas total
Tiempo de Generación: 30-45 minutos
Estructura del Sistema de Error Tracking
CopyERROR TRACKING (Sentry)
│
├── 1. CONFIGURACIÓN
│   │
│   ├── 1.1 Proyecto Sentry
│   │   ├── Organización: metamen100
│   │   ├── Proyecto: metamen100-web
│   │   └── DSN: Guardado en NEXT_PUBLIC_SENTRY_DSN
│   │
│   ├── 1.2 Environments
│   │   ├── development
│   │   ├── preview (Vercel previews)
│   │   └── production
│   │
│   └── 1.3 Release Tracking
│       └── Versión: GIT_COMMIT_SHA
│
├── 2. CAPTURA DE ERRORES
│   │
│   ├── 2.1 Errores Automáticos
│   │   ├── JavaScript exceptions (client)
│   │   ├── Server errors (API routes, Server Actions)
│   │   ├── React error boundaries
│   │   └── Unhandled promise rejections
│   │
│   ├── 2.2 Errores Manuales
│   │   ├── Sentry.captureException(error)
│   │   └── Sentry.captureMessage(message)
│   │
│   └── 2.3 Breadcrumbs (Context)
│       ├── Navegación
│       ├── Clicks
│       ├── API calls
│       └── Console logs
│
├── 3. FILTRADO DE ERRORES
│   │
│   ├── 3.1 Errores a IGNORAR
│   │   ├── ResizeObserver loop limit exceeded
│   │   ├── Network errors por ad blockers
│   │   ├── Browser extensions errors
│   │   └── AbortError (cancelación normal)
│   │
│   └── 3.2 Errores Operacionales
│       └── AppError con isOperational: true
│           (No enviar a Sentry, son esperados)
│
├── 4. CONTEXTO ADICIONAL
│   │
│   ├── 4.1 User Context
│   │   ├── id (userId)
│   │   ├── email (redactado)
│   │   └── nickname
│   │
│   ├── 4.2 Tags
│   │   ├── transaction: nombre del Server Action
│   │   ├── feature: área funcional
│   │   └── level: nivel del usuario
│   │
│   └── 4.3 Extra Data
│       ├── avatarState (en errores de vectores)
│       └── taskData (en errores de tareas)
│
├── 5. PERFORMANCE MONITORING
│   │
│   ├── 5.1 Transactions
│   │   ├── Server Actions
│   │   ├── Page loads
│   │   └── API calls
│   │
│   ├── 5.2 Sample Rate
│   │   ├── Production: 10% (tracesSampleRate: 0.1)
│   │   └── Development: 100%
│   │
│   └── 5.3 Métricas
│       ├── LCP, FID, CLS (Web Vitals)
│       └── Custom spans
│
└── 6. ALERTAS
    │
    ├── 6.1 Alertas por Defecto
    │   └── New issue detected
    │
    └── 6.2 Alertas Personalizadas
        ├── Error rate > 5% en 5 min
        ├── Payment errors (cualquiera)
        └── Avatar death errors
Tareas Atómicas para 12.3 Error Tracking
yamlCopyTAREA-12.3.1:
  Nombre: "Crear cuenta y proyecto en Sentry"
  Acción: "Configurar Sentry Cloud"
  Responsable: Manual (tú)
  Pasos: |
    1. Ir a https://sentry.io
    2. Crear cuenta
    3. Crear organización "metamen100"
    4. Crear proyecto "metamen100-web" (Next.js)
    5. Copiar DSN
    6. Guardar en .env.local como NEXT_PUBLIC_SENTRY_DSN
    7. Guardar SENTRY_AUTH_TOKEN para source maps
  Criterio de Éxito: "DSN disponible"

TAREA-12.3.2:
  Nombre: "Instalar Sentry SDK"
  Acción: "Instalar y configurar automáticamente"
  Responsable: Antigravity
  Comando: |
    npx @sentry/wizard@latest -i nextjs
  Nota: |
    Este comando:
    - Instala @sentry/nextjs
    - Crea sentry.client.config.ts
    - Crea sentry.server.config.ts
    - Crea sentry.edge.config.ts
    - Modifica next.config.js
    - Crea instrumentation.ts
  Criterio de Éxito: "Archivos de config creados"

TAREA-12.3.3:
  Nombre: "Configurar sentry.client.config.ts"
  Acción: "Personalizar configuración cliente"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Modifica sentry.client.config.ts:
    
    ```typescript
    import * as Sentry from '@sentry/nextjs';
    
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NODE_ENV,
      
      // Performance
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
      
      // Replay (opcional, para debug visual)
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 0,
      
      // Filtrar errores no relevantes
      beforeSend(event, hint) {
        const error = hint.originalException;
        
        // Ignorar errores operacionales
        if (error instanceof AppError && error.isOperational) {
          return null;
        }
        
        // Ignorar errores conocidos de browser
        const ignoreMessages = [
          'ResizeObserver loop',
          'Network request failed',
          'Load failed',
          'AbortError',
        ];
        
        if (event.message && ignoreMessages.some(m => event.message?.includes(m))) {
          return null;
        }
        
        return event;
      },
      
      // Integrations
      integrations: [
        new Sentry.BrowserTracing({
          tracePropagationTargets: [
            'localhost',
            /^https:\/\/metamen100\.com/,
          ],
        }),
      ],
    });
    ```
  Output: "Config cliente personalizada"

TAREA-12.3.4:
  Nombre: "Configurar sentry.server.config.ts"
  Acción: "Personalizar configuración servidor"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Modifica sentry.server.config.ts:
    
    ```typescript
    import * as Sentry from '@sentry/nextjs';
    
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NODE_ENV,
      
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
      
      beforeSend(event, hint) {
        const error = hint.originalException;
        
        // Errores operacionales no se envían
        if (error instanceof AppError && error.isOperational) {
          return null;
        }
        
        return event;
      },
    });
    ```
  Output: "Config servidor personalizada"

TAREA-12.3.5:
  Nombre: "Crear Error Boundary global"
  Acción: "Crear /src/app/global-error.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/app/global-error.tsx:
    
    ```typescript
    'use client';
    
    import * as Sentry from '@sentry/nextjs';
    import { useEffect } from 'react';
    
    export default function GlobalError({
      error,
      reset,
    }: {
      error: Error & { digest?: string };
      reset: () => void;
    }) {
      useEffect(() => {
        Sentry.captureException(error);
      }, [error]);
      
      return (
        <html>
          <body className="bg-bg-primary text-white min-h-screen flex items-center justify-center">
            <div className="text-center p-8">
              <h1 className="text-2xl font-bold mb-4">
                ⚠️ Error del Sistema
              </h1>
              <p className="text-gray-400 mb-6">
                Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
              </p>
              <button
                onClick={reset}
                className="px-6 py-3 bg-accent-red rounded-lg font-medium hover:bg-red-600 transition"
              >
                Reintentar
              </button>
            </div>
          </body>
        </html>
      );
    }
    ```
  Output: "Error boundary global"

TAREA-12.3.6:
  Nombre: "Crear Error Boundary reutilizable"
  Acción: "Crear /src/components/error-boundary.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/components/error-boundary.tsx:
    
    ```typescript
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
      
      static getDerivedStateFromError(): Partial<State> {
        return { hasError: true };
      }
      
      componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        Sentry.withScope((scope) => {
          scope.setExtras({ componentStack: errorInfo.componentStack });
          const eventId = Sentry.captureException(error);
          this.setState({ eventId });
        });
      }
      
      render() {
        if (this.state.hasError) {
          return this.props.fallback || (
            <div className="p-6 bg-bg-tertiary rounded-lg text-center">
              <p className="text-gray-400 mb-4">
                Algo salió mal en esta sección.
              </p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="text-accent-blue hover:underline"
              >
                Reintentar
              </button>
            </div>
          );
        }
        
        return this.props.children;
      }
    }
    ```
  Output: "Error boundary reutilizable"

TAREA-12.3.7:
  Nombre: "Integrar contexto de usuario en Sentry"
  Acción: "Agregar user context después de auth"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Después de que el usuario hace login, setear contexto:
    
    ```typescript
    // En el componente de Dashboard o layout autenticado:
    import * as Sentry from '@sentry/nextjs';
    
    useEffect(() => {
      if (user) {
        Sentry.setUser({
          id: user.id,
          email: user.email, // Sentry lo redacta si está configurado
          username: user.nickname,
        });
      } else {
        Sentry.setUser(null);
      }
    }, [user]);
    ```
    
    También en Server Actions críticos:
    ```typescript
    Sentry.setUser({ id: user.id });
    Sentry.setTag('transaction', 'completeTask');
    ```
  Output: "User context integrado"

TAREA-12.3.8:
  Nombre: "Capturar errores en Server Actions"
  Acción: "Agregar Sentry.captureException en catch blocks"
  Responsable: Antigravity
  Prompt para Antigravity: |
    En el wrapper de Server Actions o en cada uno:
    
    ```typescript
    export async function completeTask(input) {
      try {
        // ... lógica
      } catch (error) {
        // Solo capturar si no es operacional
        if (!(error instanceof AppError && error.isOperational)) {
          Sentry.captureException(error, {
            tags: { action: 'completeTask' },
            extra: { input },
          });
        }
        throw error;
      }
    }
    ```
  Output: "Captura en Server Actions"

TAREA-12.3.9:
  Nombre: "Capturar errores en webhook de Stripe"
  Acción: "Agregar tracking en webhook"
  Responsable: Antigravity
  Prompt para Antigravity: |
    En el webhook de Stripe:
    
    ```typescript
    export async function POST(req: Request) {
      try {
        // ... lógica
      } catch (error) {
        Sentry.captureException(error, {
          tags: { 
            source: 'stripe_webhook',
            eventType: event?.type,
          },
          extra: {
            webhookId: req.headers.get('stripe-webhook-id'),
          },
        });
        
        return new Response('Webhook error', { status: 400 });
      }
    }
    ```
  Output: "Webhook con error tracking"

TAREA-12.3.10:
  Nombre: "Configurar alertas en Sentry"
  Acción: "Crear reglas de alerta"
  Responsable: Manual (tú)
  Pasos: |
    En Sentry Dashboard:
    1. Ir a Alerts → Create Alert
    2. Crear alerta "High Error Rate":
       - Condition: Number of events > 50 in 5 minutes
       - Action: Email notification
    3. Crear alerta "Payment Errors":
       - Filter: tags.source:stripe_webhook OR tags.action:createCheckout
       - Condition: Any new issue
       - Action: Email + Slack (si tienes)
    4. Crear alerta "Critical - Avatar Death Error":
       - Filter: tags.action:processAvatarDeath AND is:unresolved
       - Condition: Any new issue
       - Action: Immediate notification
  Criterio de Éxito: "Alertas configuradas"

TAREA-12.3.11:
  Nombre: "Verificar source maps en producción"
  Acción: "Asegurar que se suben los source maps"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Verifica que next.config.js tenga la configuración de Sentry:
    
    ```javascript
    // next.config.js
    const { withSentryConfig } = require('@sentry/nextjs');
    
    const nextConfig = {
      // tu config existente
    };
    
    module.exports = withSentryConfig(nextConfig, {
      org: 'metamen100',
      project: 'metamen100-web',
      silent: true,
      widenClientFileUpload: true,
      hideSourceMaps: true,
      disableLogger: true,
    });
    ```
    
    Y que SENTRY_AUTH_TOKEN esté en las variables de Vercel.
  Output: "Source maps configurados"

SUBCAJA 12.4: Alertas y Monitoring
Sistema de Alertas y Health Checks
Archivos a Crear
CopyRutas:
├── /src/app/api/health/route.ts       (Health check endpoint)
├── /src/lib/monitoring/alerts.ts      (Sistema de alertas)
├── /src/lib/monitoring/health.ts      (Health checks)
└── Configuración en servicios externos

Tamaño Estimado: ~200 líneas total
Tiempo de Generación: 20-30 minutos
Estructura del Sistema de Alertas
CopyALERTING & MONITORING
│
├── 1. HEALTH CHECKS
│   │
│   ├── 1.1 Endpoint /api/health
│   │   ├── Status: 200 OK
│   │   ├── Checks:
│   │   │   ├── Database connection
│   │   │   ├── Redis connection (si aplica)
│   │   │   └── External services
│   │   └── Response:
│   │       {
│   │         "status": "healthy",
│   │         "timestamp": "...",
│   │         "checks": {
│   │           "database": "ok",
│   │           "uptime": 12345
│   │         }
│   │       }
│   │
│   └── 1.2 Endpoint /api/health/deep
│       └── Checks más extensivos (solo para admin)
│
├── 2. UPTIME MONITORING
│   │
│   ├── 2.1 Servicio: BetterStack (ex BetterUptime)
│   │   └── Free tier: 5 monitors, 3 min interval
│   │
│   └── 2.2 Monitors a Crear
│       ├── https://metamen100.com (Landing)
│       ├── https://metamen100.com/api/health (API)
│       └── https://metamen100.com/dashboard (App)
│
├── 3. ALERTAS DE NEGOCIO
│   │
│   ├── 3.1 Canales
│   │   ├── Email (siempre)
│   │   └── Slack (opcional)
│   │
│   └── 3.2 Triggers
│       ├── Error rate > 5% en 5 min
│       ├── API latency p95 > 2s
│       ├── Payment failure (cualquiera)
│       ├── Image generation failure rate > 20%
│       ├── User reported critical issue
│       └── Downtime detected
│
├── 4. DASHBOARDS
│   │
│   ├── 4.1 Vercel Analytics (incluido)
│   │   ├── Web Vitals
│   │   ├── Request count
│   │   └── Error rate
│   │
│   ├── 4.2 PostHog (configurado en 12.2)
│   │   └── Business metrics
│   │
│   └── 4.3 Supabase Dashboard
│       ├── DB connections
│       ├── Query performance
│       └── Storage usage
│
└── 5. RUNBOOKS
    │
    └── 5.1 Qué hacer cuando...
        ├── Database down
        ├── Image generation failing
        ├── Payment webhook failing
        └── High error rate
Tareas Atómicas para 12.4 Alerting
yamlCopyTAREA-12.4.1:
  Nombre: "Crear health check endpoint"
  Acción: "Crear /src/app/api/health/route.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/app/api/health/route.ts:
    
    ```typescript
    import { createClient } from '@/lib/supabase/server';
    import { NextResponse } from 'next/server';
    
    export const dynamic = 'force-dynamic';
    export const runtime = 'edge';
    
    export async function GET() {
      const startTime = Date.now();
      const checks: Record<string, string> = {};
      let status: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';
      
      // Check database
      try {
        const supabase = await createClient();
        const { error } = await supabase
          .from('profiles')
          .select('id')
          .limit(1)
          .single();
        
        if (error && error.code !== 'PGRST116') {
          throw error;
        }
        checks.database = 'ok';
      } catch (e) {
        checks.database = 'error';
        status = 'unhealthy';
      }
      
      const responseTime = Date.now() - startTime;
      
      return NextResponse.json({
        status,
        timestamp: new Date().toISOString(),
        responseTimeMs: responseTime,
        checks,
        version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      }, {
        status: status === 'healthy' ? 200 : 503,
      });
    }
    ```
  Output: "Health check endpoint"

TAREA-12.4.2:
  Nombre: "Configurar BetterStack"
  Acción: "Crear cuenta y monitors"
  Responsable: Manual (tú)
  Pasos: |
    1. Ir a https://betterstack.com/better-uptime
    2. Crear cuenta gratuita
    3. Crear monitor para landing:
       - URL: https://metamen100.com
       - Check interval: 3 min
       - Regions: US, EU
    4. Crear monitor para API:
       - URL: https://metamen100.com/api/health
       - Expected status: 200
       - Check interval: 3 min
    5. Configurar notificaciones:
       - Email al tuyo
       - Slack webhook (opcional)
  Criterio de Éxito: "Monitors activos"

TAREA-12.4.3:
  Nombre: "Documentar runbooks"
  Acción: "Crear /docs/RUNBOOKS.md"
  Responsable: Claude
  Prompt para Claude: |
    Crea /docs/RUNBOOKS.md con procedimientos para:
    
    1. Database connection issues
       - Síntomas
       - Verificación
       - Pasos de resolución
       - Escalación
    
    2. High error rate
       - Cómo identificar la causa
       - Rollback si es necesario
       - Comunicación a usuarios
    
    3. Payment failures
       - Verificar en Stripe dashboard
       - Verificar webhook logs
       - Contactar soporte Stripe
    
    4. Image generation failures
       - Verificar status de Replicate
       - Verificar rate limits
       - Fallback a imagen anterior
    
    5. Downtime completo
       - Verificar Vercel status
       - Verificar Supabase status
       - Comunicar ETA a usuarios
  Output: "Runbook documentado"

TAREA-12.4.4:
  Nombre: "Crear alerta de payment failures en código"
  Acción: "Notificar cuando hay error de pago"
  Responsable: Antigravity
  Prompt para Antigravity: |
    En el webhook de Stripe, cuando hay error crítico:
    
    ```typescript
    import { paymentLogger } from '@/lib/logger/contexts';
    
    // Función para alertar (puede ser email, Slack, etc.)
    async function alertPaymentFailure(details: Record<string, any>) {
      // Log crítico
      paymentLogger.error({
        event: 'payment_critical_failure',
        alertLevel: 'critical',
        ...details,
      });
      
      // TODO: Integrar con servicio de alertas
      // Por ahora, Sentry lo captura
    }
    
    // En el catch del webhook:
    await alertPaymentFailure({
      webhookId,
      eventType: event?.type,
      error: error.message,
    });
    ```
  Output: "Alerta de pagos configurada"

SUBCAJA 12.5: Unit Tests
Tests Unitarios con Vitest
Archivos a Crear
CopyRutas:
├── /vitest.config.ts                  (Configuración Vitest)
├── /src/lib/core/__tests__/           (Tests del motor core)
│   ├── vectors.test.ts
│   ├── levels.test.ts
│   ├── health.test.ts
│   ├── streak.test.ts
│   ├── economy.test.ts
│   └── judgement.test.ts
├── /src/lib/core/__tests__/fixtures/  (Datos de prueba)
│   └── test-data.ts
└── /src/lib/__tests__/                (Tests de utilidades)

Tamaño Estimado: ~800 líneas de tests
Tiempo de Generación: 60-90 minutos
Estructura de Unit Tests
CopyUNIT TESTS
│
├── 1. CONFIGURACIÓN DE VITEST
│   │
│   ├── 1.1 Por qué Vitest
│   │   ├── Compatible con Vite (más rápido)
│   │   ├── API compatible con Jest
│   │   ├── TypeScript nativo
│   │   └── ESM support
│   │
│   └── 1.2 Configuración
│       ├── Test environment: node
│       ├── Coverage provider: v8
│       └── Path aliases: @/*
│
├── 2. TESTS DE MOTOR DE VECTORES
│   │
│   ├── 2.1 clamp()
│   │   ├── TEST: Limita valores al rango correcto
│   │   ├── TEST: Respeta mínimo
│   │   ├── TEST: Respeta máximo
│   │   └── TEST: No modifica valores dentro del rango
│   │
│   ├── 2.2 processTaskImpact()
│   │   ├── TEST: meditation incrementa aura_lvl
│   │   ├── TEST: cold_shower incrementa aura_lvl
│   │   ├── TEST: posture incrementa face_lvl
│   │   ├── TEST: facial incrementa face_lvl
│   │   ├── TEST: kegel incrementa face_lvl
│   │   ├── TEST: journal incrementa wealth_lvl
│   │   ├── TEST: skill_learning incrementa wealth_lvl
│   │   ├── TEST: focus_work incrementa wealth_lvl
│   │   ├── TEST: strength incrementa muscle_lvl
│   │   ├── TEST: cardio decrementa fat_lvl
│   │   ├── TEST: hydration afecta correctamente
│   │   ├── TEST: No excede límite superior (13)
│   │   └── TEST: No baja de límite inferior (1)
│   │
│   └── 2.3 applyBiologicalDecay()
│       ├── TEST: Aplica decay a aura sin tareas mentales
│       ├── TEST: Aplica decay a muscle sin fuerza
│       ├── TEST: Aplica decay a fat sin cardio
│       └── TEST: No aplica decay si hay tareas
│
├── 3. TESTS DE MOTOR DE NIVELES
│   │
│   ├── 3.1 calculateLevel()
│   │   ├── TEST: Estado inicial retorna nivel 1
│   │   ├── TEST: Estado perfecto retorna nivel 10
│   │   ├── TEST: Vectores medios retornan nivel intermedio
│   │   └── TEST: Formula pondera correctamente
│   │
│   └── 3.2 getLevelTitle()
│       ├── TEST: Nivel 1 = "Indigente"
│       ├── TEST: Nivel 3 = "Alucín"
│       ├── TEST: Nivel 10 = "Semi-Dios"
│       └── TEST: Niveles post-game (11-13)
│
├── 4. TESTS DE MOTOR DE SALUD
│   │
│   ├── 4.1 calculateHealthChange()
│   │   ├── TEST: 100% completado = 0 cambio
│   │   ├── TEST: 80-99% = 0 cambio
│   │   ├── TEST: <80% = -1 corazón
│   │   ├── TEST: 0% = -2 corazones
│   │   └── TEST: Racha 7+ con 100% = +1 si < max
│   │
│   └── 4.2 isAvatarDead()
│       ├── TEST: 0 health = true
│       └── TEST: >0 health = false
│
├── 5. TESTS DE MOTOR DE RACHA
│   │
│   ├── 5.1 updateStreak()
│   │   ├── TEST: Día exitoso incrementa streak
│   │   ├── TEST: Día fallido resetea streak
│   │   └── TEST: 80% exacto mantiene streak
│   │
│   └── 5.2 getStreakMultiplier()
│       ├── TEST: 0-6 días = x1.0
│       ├── TEST: 7-13 días = x1.1
│       ├── TEST: 14-20 días = x1.2
│       ├── TEST: 30+ días = x1.5
│       └── TEST: 90+ días = x2.0
│
├── 6. TESTS DE ECONOMÍA
│   │
│   ├── 6.1 calculateTaskReward()
│   │   ├── TEST: Retorna reward base por categoría
│   │   ├── TEST: Aplica multiplicador de streak
│   │   └── TEST: Aplica multiplicador de nivel
│   │
│   ├── 6.2 canAfford()
│   │   ├── TEST: Balance suficiente = true
│   │   └── TEST: Balance insuficiente = false
│   │
│   └── 6.3 canPurchaseItem()
│       ├── TEST: Nivel suficiente = true
│       ├── TEST: Nivel insuficiente = false
│       ├── TEST: Gating por fat_lvl
│       └── TEST: Balance insuficiente = false
│
└── 7. TESTS DE JUDGEMENT NIGHT
    │
    ├── 7.1 calculateCompletionRate()
    │   ├── TEST: 5/5 = 100%
    │   ├── TEST: 4/5 = 80%
    │   ├── TEST: 0/5 = 0%
    │   └── TEST: Sin tareas = 0%
    │
    └── 7.2 processJudgementNight()
        ├── TEST: Día perfecto mantiene health y sube streak
        ├── TEST: Día fallido resta health y resetea streak
        ├── TEST: Aplica decay biológico
        ├── TEST: Avanza día
        └── TEST: Detecta muerte
Tareas Atómicas para 12.5 Unit Tests
yamlCopyTAREA-12.5.1:
  Nombre: "Instalar Vitest y dependencias"
  Acción: "pnpm add -D vitest @vitest/coverage-v8"
  Responsable: Antigravity
  Comando: |
    pnpm add -D vitest @vitest/coverage-v8 @testing-library/react @testing-library/jest-dom
  Criterio de Éxito: "Dependencias instaladas"

TAREA-12.5.2:
  Nombre: "Crear configuración de Vitest"
  Acción: "Crear /vitest.config.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /vitest.config.ts:
    
    ```typescript
    import { defineConfig } from 'vitest/config';
    import react from '@vitejs/plugin-react';
    import path from 'path';
    
    export default defineConfig({
      plugins: [react()],
      test: {
        environment: 'node',
        globals: true,
        coverage: {
          provider: 'v8',
          reporter: ['text', 'json', 'html'],
          exclude: [
            'node_modules/',
            '.next/',
            '**/*.config.*',
            '**/*.d.ts',
          ],
        },
        include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    });
    ```
  Output: "Configuración creada"

TAREA-12.5.3:
  Nombre: "Agregar scripts de test a package.json"
  Acción: "Agregar scripts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Agrega a package.json:
    
    ```json
    {
      "scripts": {
        "test": "vitest",
        "test:run": "vitest run",
        "test:coverage": "vitest run --coverage",
        "test:ui": "vitest --ui"
      }
    }
    ```
  Output: "Scripts agregados"

TAREA-12.5.4:
  Nombre: "Crear fixtures de datos de prueba"
  Acción: "Crear /src/lib/core/__tests__/fixtures/test-data.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea fixtures con estados de ejemplo:
    
    ```typescript
    import type { AvatarState, DailyTask } from '@/types';
    
    export const initialAvatarState: AvatarState = {
      user_id: 'test-user-id',
      aura_lvl: 1.00,
      face_lvl: 1.00,
      wealth_lvl: 1.00,
      muscle_lvl: 1.00,
      fat_lvl: 13.00,
      env_lvl: 1,
      health_points: 10,
      current_day: 1,
      current_level: 1,
      streak_days: 0,
      base_avatar_id: 1,
      last_image_url: null,
    };
    
    export const midGameAvatarState: AvatarState = {
      ...initialAvatarState,
      aura_lvl: 5.50,
      face_lvl: 4.00,
      wealth_lvl: 5.00,
      muscle_lvl: 6.00,
      fat_lvl: 7.00,
      env_lvl: 5,
      health_points: 8,
      current_day: 30,
      current_level: 5,
      streak_days: 15,
    };
    
    export const perfectAvatarState: AvatarState = {
      ...initialAvatarState,
      aura_lvl: 13.00,
      face_lvl: 13.00,
      wealth_lvl: 13.00,
      muscle_lvl: 13.00,
      fat_lvl: 1.00,
      env_lvl: 10,
      health_points: 10,
      current_day: 100,
      current_level: 10,
      streak_days: 100,
    };
    
    export const createMockTask = (
      overrides: Partial<DailyTask> = {}
    ): DailyTask => ({
      id: 'task-1',
      user_id: 'test-user-id',
      day_number: 1,
      task_type: 'protocol',
      title: 'Test Task',
      description: 'Test description',
      category: 'meditation',
      archetype: 'mental',
      status: 'pending',
      btc_reward: 15,
      created_at: new Date().toISOString(),
      ...overrides,
    });
    ```
  Output: "Fixtures creadas"

TAREA-12.5.5:
  Nombre: "Crear tests de vectors.ts"
  Acción: "Crear /src/lib/core/__tests__/vectors.test.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea tests completos para el motor de vectores:
    
    ```typescript
    import { describe, it, expect } from 'vitest';
    import { 
      clamp, 
      processTaskImpact, 
      applyBiologicalDecay,
      TASK_VECTOR_MODIFIERS,
    } from '../vectors';
    import { initialAvatarState } from './fixtures/test-data';
    
    describe('clamp', () => {
      it('should return value within range', () => {
        expect(clamp(5, 1, 13)).toBe(5);
      });
      
      it('should return min when value is below', () => {
        expect(clamp(0, 1, 13)).toBe(1);
      });
      
      it('should return max when value is above', () => {
        expect(clamp(15, 1, 13)).toBe(13);
      });
    });
    
    describe('processTaskImpact', () => {
      it('should increase aura_lvl for meditation', () => {
        const result = processTaskImpact(
          { ...initialAvatarState },
          'meditation'
        );
        expect(result.aura_lvl).toBeGreaterThan(initialAvatarState.aura_lvl);
      });
      
      it('should increase face_lvl for facial exercises', () => {
        const result = processTaskImpact(
          { ...initialAvatarState },
          'facial'
        );
        expect(result.face_lvl).toBeGreaterThan(initialAvatarState.face_lvl);
      });
      
      it('should increase muscle_lvl for strength', () => {
        const result = processTaskImpact(
          { ...initialAvatarState },
          'strength'
        );
        expect(result.muscle_lvl).toBeGreaterThan(initialAvatarState.muscle_lvl);
      });
      
      it('should decrease fat_lvl for cardio', () => {
        const state = { ...initialAvatarState, fat_lvl: 10 };
        const result = processTaskImpact(state, 'cardio');
        expect(result.fat_lvl).toBeLessThan(state.fat_lvl);
      });
      
      it('should not exceed max value 13', () => {
        const state = { ...initialAvatarState, aura_lvl: 12.99 };
        const result = processTaskImpact(state, 'meditation');
        expect(result.aura_lvl).toBeLessThanOrEqual(13);
      });
      
      it('should not go below min value 1', () => {
        const state = { ...initialAvatarState, fat_lvl: 1.01 };
        const result = processTaskImpact(state, 'cardio');
        expect(result.fat_lvl).toBeGreaterThanOrEqual(1);
      });
    });
    
    describe('applyBiologicalDecay', () => {
      it('should decay aura without mental tasks', () => {
        const result = applyBiologicalDecay(
          { ...initialAvatarState, aura_lvl: 5 },
          { hadMeditation: false, hadStrength: true, hadCardio: true }
        );
        expect(result.aura_lvl).toBeLessThan(5);
      });
      
      it('should not decay aura with mental tasks', () => {
        const result = applyBiologicalDecay(
          { ...initialAvatarState, aura_lvl: 5 },
          { hadMeditation: true, hadStrength: false, hadCardio: false }
        );
        expect(result.aura_lvl).toBe(5);
      });
      
      // ... más tests
    });
    ```
  Output: "Tests de vectores"

TAREA-12.5.6:
  Nombre: "Crear tests de levels.ts"
  Acción: "Crear /src/lib/core/__tests__/levels.test.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea tests para el motor de niveles:
    
    ```typescript
    import { describe, it, expect } from 'vitest';
    import { calculateLevel, getLevelTitle, LEVEL_TITLES } from '../levels';
    import { 
      initialAvatarState, 
      midGameAvatarState, 
      perfectAvatarState 
    } from './fixtures/test-data';
    
    describe('calculateLevel', () => {
      it('should return level 1 for initial state', () => {
        expect(calculateLevel(initialAvatarState)).toBe(1);
      });
      
      it('should return level 10 for perfect state', () => {
        expect(calculateLevel(perfectAvatarState)).toBe(10);
      });
      
      it('should return intermediate level for mid-game state', () => {
        const level = calculateLevel(midGameAvatarState);
        expect(level).toBeGreaterThan(1);
        expect(level).toBeLessThan(10);
      });
    });
    
    describe('getLevelTitle', () => {
      it('should return "Indigente" for level 1', () => {
        expect(getLevelTitle(1)).toBe('Indigente');
      });
      
      it('should return "Alucín" for level 3', () => {
        expect(getLevelTitle(3)).toBe('Alucín');
      });
      
      it('should return "Semi-Dios" for level 10', () => {
        expect(getLevelTitle(10)).toBe('Semi-Dios');
      });
    });
    ```
  Output: "Tests de niveles"

TAREA-12.5.7:
  Nombre: "Crear tests de health.ts"
  Acción: "Crear /src/lib/core/__tests__/health.test.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea tests para el motor de salud:
    
    ```typescript
    import { describe, it, expect } from 'vitest';
    import { 
      calculateHealthChange, 
      isAvatarDead,
      applyHealthChange,
    } from '../health';
    
    describe('calculateHealthChange', () => {
      it('should return 0 for 100% completion', () => {
        const change = calculateHealthChange(1.0, 5);
        expect(change).toBe(0);
      });
      
      it('should return 0 for 80% completion', () => {
        const change = calculateHealthChange(0.8, 0);
        expect(change).toBe(0);
      });
      
      it('should return -1 for < 80% completion', () => {
        const change = calculateHealthChange(0.79, 0);
        expect(change).toBe(-1);
      });
      
      it('should return -2 for 0% completion', () => {
        const change = calculateHealthChange(0, 0);
        expect(change).toBe(-2);
      });
      
      it('should return +1 for 100% with 7+ day streak and < max health', () => {
        const change = calculateHealthChange(1.0, 7, 8, 10);
        expect(change).toBe(1);
      });
    });
    
    describe('isAvatarDead', () => {
      it('should return true for 0 health', () => {
        expect(isAvatarDead(0)).toBe(true);
      });
      
      it('should return false for > 0 health', () => {
        expect(isAvatarDead(1)).toBe(false);
      });
    });
    ```
  Output: "Tests de salud"

TAREA-12.5.8:
  Nombre: "Crear tests de streak.ts"
  Acción: "Crear /src/lib/core/__tests__/streak.test.ts"
  Responsable: Antigravity
  # Similar a los anteriores

TAREA-12.5.9:
  Nombre: "Crear tests de economy.ts"
  Acción: "Crear /src/lib/core/__tests__/economy.test.ts"
  Responsable: Antigravity
  # Similar a los anteriores

TAREA-12.5.10:
  Nombre: "Crear tests de judgement.ts"
  Acción: "Crear /src/lib/core/__tests__/judgement.test.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea tests para processJudgementNight (lógica pura):
    
    ```typescript
    import { describe, it, expect } from 'vitest';
    import { processJudgementNight } from '../judgement';
    import { initialAvatarState, createMockTask } from './fixtures/test-data';
    
    describe('processJudgementNight', () => {
      it('should maintain health and increase streak for perfect day', () => {
        const tasks = [
          createMockTask({ status: 'completed' }),
          createMockTask({ status: 'completed', id: 'task-2' }),
        ];
        
        const result = processJudgementNight(
          { ...initialAvatarState, health_points: 8 },
          tasks,
          { hadMeditation: true, hadStrength: true, hadCardio: true }
        );
        
        expect(result.newState.health_points).toBe(8);
        expect(result.newState.streak_days).toBe(1);
        expect(result.status).toBe('success');
      });
      
      it('should decrease health for failed day', () => {
        const tasks = [
          createMockTask({ status: 'pending' }),
          createMockTask({ status: 'completed', id: 'task-2' }),
        ];
        
        const result = processJudgementNight(
          { ...initialAvatarState },
          tasks,
          { hadMeditation: false, hadStrength: false, hadCardio: false }
        );
        
        expect(result.newState.health_points).toBeLessThan(initialAvatarState.health_points);
        expect(result.newState.streak_days).toBe(0);
        expect(result.status).toBe('failed');
      });
      
      it('should advance day number', () => {
        const result = processJudgementNight(
          { ...initialAvatarState, current_day: 5 },
          [],
          {}
        );
        
        expect(result.newState.current_day).toBe(6);
      });
      
      it('should detect avatar death', () => {
        const result = processJudgementNight(
          { ...initialAvatarState, health_points: 1 },
          [createMockTask({ status: 'pending' })], // 0% completion = -2 health
          {}
        );
        
        expect(result.isDead).toBe(true);
        expect(result.status).toBe('death');
      });
    });
    ```
  Output: "Tests de Judgement Night"

TAREA-12.5.11:
  Nombre: "Ejecutar tests y verificar cobertura"
  Acción: "pnpm test:coverage"
  Responsable: Antigravity
  Comando: |
    pnpm test:coverage
  Criterio de Éxito: |
    - Todos los tests pasan
    - /lib/core/* tiene > 90% cobertura

SUBCAJA 12.6: Integration Tests
Tests de Integración con Base de Datos
Archivos a Crear
CopyRutas:
├── /src/__tests__/integration/        (Tests de integración)
│   ├── setup.ts                       (Setup de test DB)
│   ├── auth.test.ts
│   ├── tasks.test.ts
│   ├── store.test.ts
│   └── rls.test.ts
└── /vitest.config.integration.ts      (Config separada)

Tamaño Estimado: ~500 líneas de tests
Tiempo de Generación: 45-60 minutos
Estructura de Integration Tests
CopyINTEGRATION TESTS
│
├── 1. SETUP
│   │
│   ├── 1.1 Base de Datos de Test
│   │   └── Usar Supabase local (Docker) o proyecto de test
│   │
│   ├── 1.2 Cleanup
│   │   └── Truncar tablas antes de cada test
│   │
│   └── 1.3 Fixtures
│       └── Usuarios de prueba con diferentes estados
│
├── 2. TESTS DE AUTENTICACIÓN
│   │
│   ├── INT-AUTH-001: Crear usuario crea todas las entidades
│   │   └── profile, avatar_state, wallet, subscription
│   │
│   └── INT-AUTH-002: Login establece sesión válida
│
├── 3. TESTS DE TAREAS
│   │
│   ├── INT-TASK-001: Completar tarea actualiza atómicamente
│   │   └── task.status, wallet.balance, avatar_state en una transacción
│   │
│   ├── INT-TASK-002: No se puede completar tarea de otro usuario
│   │
│   └── INT-TASK-003: No se puede completar tarea ya completada
│
├── 4. TESTS DE TIENDA
│   │
│   ├── INT-STORE-001: Compra exitosa descuenta BTC y agrega a inventario
│   │
│   ├── INT-STORE-002: Compra fallida no modifica nada
│   │
│   └── INT-STORE-003: Gating por nivel funciona
│
├── 5. TESTS DE RLS
│   │
│   ├── INT-RLS-001: Usuario no puede ver datos de otro
│   │
│   ├── INT-RLS-002: Usuario puede ver sus propios datos
│   │
│   └── INT-RLS-003: Usuario no puede modificar datos de otro
│
└── 6. TESTS DE TRANSACCIONES
    │
    └── INT-TX-001: Rollback en error parcial
Tareas Atómicas para 12.6 Integration Tests
yamlCopyTAREA-12.6.1:
  Nombre: "Crear configuración de Vitest para integración"
  Acción: "Crear /vitest.config.integration.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /vitest.config.integration.ts:
    
    ```typescript
    import { defineConfig } from 'vitest/config';
    import path from 'path';
    
    export default defineConfig({
      test: {
        environment: 'node',
        globals: true,
        include: ['src/__tests__/integration/**/*.test.ts'],
        setupFiles: ['src/__tests__/integration/setup.ts'],
        testTimeout: 30000, // 30s para DB operations
        poolOptions: {
          threads: {
            singleThread: true, // Secuencial para evitar conflictos de DB
          },
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    });
    ```
  Output: "Configuración de integración"

TAREA-12.6.2:
  Nombre: "Crear setup de tests de integración"
  Acción: "Crear /src/__tests__/integration/setup.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea setup.ts:
    
    ```typescript
    import { createClient } from '@supabase/supabase-js';
    import { beforeEach, afterAll } from 'vitest';
    
    // Cliente con service role para testing
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    
    export { supabaseAdmin };
    
    // Cleanup antes de cada test
    beforeEach(async () => {
      // Truncar en orden correcto por foreign keys
      await supabaseAdmin.rpc('truncate_test_tables');
    });
    
    // Crear función de truncate en la DB (migration):
    // CREATE OR REPLACE FUNCTION truncate_test_tables()
    // RETURNS void AS $$
    // BEGIN
    //   TRUNCATE inventory, daily_logs, daily_tasks, tool_progress,
    //            wallets, avatar_states, subscriptions, profiles CASCADE;
    // END;
    // $$ LANGUAGE plpgsql;
    
    afterAll(async () => {
      // Cleanup final
    });
    
    // Helper para crear usuario de test
    export async function createTestUser(email = 'test@example.com') {
      const { data: authUser, error } = await supabaseAdmin.auth.admin.createUser({
        email,
        password: 'test-password-123',
        email_confirm: true,
      });
      
      if (error) throw error;
      
      // Esperar a que el trigger cree las entidades
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const { data: profile } = await supabaseAdmin
        .from('profiles')
        .select('*')
        .eq('id', authUser.user.id)
        .single();
      
      return { authUser: authUser.user, profile };
    }
    
    // Helper para crear cliente autenticado
    export async function createAuthenticatedClient(email: string, password: string) {
      const supabase = createClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!
      );
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      return supabase;
    }
    ```
  Output: "Setup de integración"

TAREA-12.6.3:
  Nombre: "Crear script de test:integration"
  Acción: "Agregar script a package.json"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Agrega a package.json:
    
    ```json
    {
      "scripts": {
        "test:integration": "vitest run --config vitest.config.integration.ts"
      }
    }
    ```
  Output: "Script agregado"

TAREA-12.6.4:
  Nombre: "Crear tests de autenticación"
  Acción: "Crear /src/__tests__/integration/auth.test.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```typescript
    import { describe, it, expect } from 'vitest';
    import { supabaseAdmin, createTestUser } from './setup';
    
    describe('Authentication Integration', () => {
      it('should create all user entities on signup', async () => {
        const { authUser, profile } = await createTestUser('new@test.com');
        
        expect(profile).toBeDefined();
        expect(profile.id).toBe(authUser.id);
        expect(profile.nickname).toMatch(/^METAMEN-\d+$/);
        
        // Verificar avatar_state
        const { data: avatarState } = await supabaseAdmin
          .from('avatar_states')
          .select('*')
          .eq('user_id', authUser.id)
          .single();
        
        expect(avatarState).toBeDefined();
        expect(avatarState.aura_lvl).toBe(1);
        expect(avatarState.health_points).toBe(10);
        
        // Verificar wallet
        const { data: wallet } = await supabaseAdmin
          .from('wallets')
          .select('*')
          .eq('user_id', authUser.id)
          .single();
        
        expect(wallet).toBeDefined();
        expect(wallet.btc_balance).toBe(0);
        
        // Verificar subscription
        const { data: subscription } = await supabaseAdmin
          .from('subscriptions')
          .select('*')
          .eq('user_id', authUser.id)
          .single();
        
        expect(subscription).toBeDefined();
        expect(subscription.status).toBe('trial');
      });
    });
    ```
  Output: "Tests de auth"

TAREA-12.6.5:
  Nombre: "Crear tests de tareas"
  Acción: "Crear /src/__tests__/integration/tasks.test.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```typescript
    import { describe, it, expect, beforeEach } from 'vitest';
    import { supabaseAdmin, createTestUser, createAuthenticatedClient } from './setup';
    
    describe('Tasks Integration', () => {
      let testUserId: string;
      let authenticatedClient: any;
      
      beforeEach(async () => {
        const { authUser } = await createTestUser('tasks@test.com');
        testUserId = authUser.id;
        authenticatedClient = await createAuthenticatedClient(
          'tasks@test.com', 
          'test-password-123'
        );
        
        // Crear tarea de prueba
        await supabaseAdmin.from('daily_tasks').insert({
          user_id: testUserId,
          day_number: 1,
          task_type: 'protocol',
          title: 'Test Meditation',
          category: 'meditation',
          archetype: 'mental',
          btc_reward: 15,
        });
      });
      
      it('should complete task and update wallet atomically', async () => {
        // Obtener tarea
        const { data: task } = await supabaseAdmin
          .from('daily_tasks')
          .select('id')
          .eq('user_id', testUserId)
          .single();
        
        // Simular llamada al RPC de transacción
        const { data, error } = await supabaseAdmin.rpc('complete_task_transaction', {
          p_user_id: testUserId,
          p_task_id: task.id,
          p_btc_reward: 15,
          p_vector_changes: { aura_lvl: 0.03 },
        });
        
        expect(error).toBeNull();
        
        // Verificar tarea completada
        const { data: updatedTask } = await supabaseAdmin
          .from('daily_tasks')
          .select('status')
          .eq('id', task.id)
          .single();
        
        expect(updatedTask.status).toBe('completed');
        
        // Verificar wallet actualizado
        const { data: wallet } = await supabaseAdmin
          .from('wallets')
          .select('btc_balance')
          .eq('user_id', testUserId)
          .single();
        
        expect(wallet.btc_balance).toBe(15);
        
        // Verificar avatar state actualizado
        const { data: avatarState } = await supabaseAdmin
          .from('avatar_states')
          .select('aura_lvl')
          .eq('user_id', testUserId)
          .single();
        
        expect(Number(avatarState.aura_lvl)).toBeCloseTo(1.03, 2);
      });
    });
    ```
  Output: "Tests de tareas"

TAREA-12.6.6:
  Nombre: "Crear tests de RLS"
  Acción: "Crear /src/__tests__/integration/rls.test.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```typescript
    import { describe, it, expect, beforeEach } from 'vitest';
    import { createTestUser, createAuthenticatedClient } from './setup';
    
    describe('RLS Policies', () => {
      let user1Id: string;
      let user2Client: any;
      
      beforeEach(async () => {
        // Crear dos usuarios
        const { authUser: user1 } = await createTestUser('user1@test.com');
        user1Id = user1.id;
        
        await createTestUser('user2@test.com');
        user2Client = await createAuthenticatedClient('user2@test.com', 'test-password-123');
      });
      
      it('should not allow user to view another user profile', async () => {
        const { data, error } = await user2Client
          .from('profiles')
          .select('*')
          .eq('id', user1Id)
          .single();
        
        // RLS debe devolver null o error
        expect(data).toBeNull();
      });
      
      it('should not allow user to update another user avatar_state', async () => {
        const { error } = await user2Client
          .from('avatar_states')
          .update({ aura_lvl: 13 })
          .eq('user_id', user1Id);
        
        // No debe haber error pero tampoco actualizar nada
        // Verificamos que no se modificó
        const { data } = await user2Client
          .from('avatar_states')
          .select('aura_lvl')
          .eq('user_id', user1Id)
          .single();
        
        expect(data).toBeNull(); // No puede ni leerlo
      });
    });
    ```
  Output: "Tests de RLS"

TAREA-12.6.7:
  Nombre: "Crear tests de tienda"
  Acción: "Crear /src/__tests__/integration/store.test.ts"
  Responsable: Antigravity
  # Similar estructura

TAREA-12.6.8:
  Nombre: "Ejecutar tests de integración"
  Acción: "pnpm test:integration"
  Responsable: Antigravity
  Criterio de Éxito: "Todos los tests pasan"

SUBCAJA 12.7: E2E Tests (Playwright)
Tests End-to-End de User Journeys
Archivos a Crear
CopyRutas:
├── /playwright.config.ts              (Configuración)
├── /e2e/                              (Tests E2E)
│   ├── auth.spec.ts
│   ├── onboarding.spec.ts
│   ├── dashboard.spec.ts
│   ├── tasks.spec.ts
│   └── store.spec.ts
├── /e2e/fixtures/                     (Fixtures compartidos)
│   └── test-user.ts
└── /e2e/helpers/                      (Helpers)
    └── auth.ts

Tamaño Estimado: ~600 líneas de tests
Tiempo de Generación: 45-60 minutos
Estructura de E2E Tests
CopyE2E TESTS (Playwright)
│
├── 1. CONFIGURACIÓN
│   │
│   ├── 1.1 Base URL
│   │   └── http://localhost:3000 (dev)
│   │
│   ├── 1.2 Browser
│   │   └── Chromium (headless en CI)
│   │
│   └── 1.3 Timeouts
│       └── 30s por test
│
├── 2. USER JOURNEYS
│   │
│   ├── E2E-001: Registro → Onboarding → Dashboard
│   │   ├── Ir a /register
│   │   ├── Llenar formulario
│   │   ├── Submit
│   │   ├── Verificar redirect a /onboarding
│   │   ├── Completar selección de arquetipo
│   │   ├── Completar tutorial
│   │   ├── Firmar juramento
│   │   └── Verificar llegada a /dashboard
│   │
│   ├── E2E-002: Login → Completar Tareas → Ver Stats
│   │   ├── Login con credenciales
│   │   ├── Ver lista de tareas
│   │   ├── Completar 2 tareas
│   │   ├── Verificar BTC incrementa
│   │   └── Verificar UI actualizada
│   │
│   ├── E2E-003: Dashboard → Tienda → Comprar → Inventario
│   │   ├── Ir a tienda
│   │   ├── Filtrar por categoría
│   │   ├── Click en item
│   │   ├── Comprar
│   │   ├── Verificar BTC decrementó
│   │   └── Verificar item en inventario
│   │
│   └── E2E-004: Herramientas → Usar → Completar
│       ├── Abrir Focus Chamber
│       ├── Iniciar sesión de 25 min (simular)
│       └── Verificar tarea completada
│
└── 3. EDGE CASES
    │
    ├── E2E-ERR-001: Sesión expirada redirige a login
    │
    └── E2E-ERR-002: Error de red muestra mensaje
Tareas Atómicas para 12.7 E2E Tests
yamlCopyTAREA-12.7.1:
  Nombre: "Instalar Playwright"
  Acción: "pnpm add -D @playwright/test"
  Responsable: Antigravity
  Comando: |
    pnpm add -D @playwright/test
    npx playwright install chromium
  Criterio de Éxito: "Playwright instalado"

TAREA-12.7.2:
  Nombre: "Crear configuración de Playwright"
  Acción: "Crear /playwright.config.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /playwright.config.ts:
    
    ```typescript
    import { defineConfig, devices } from '@playwright/test';
    
    export default defineConfig({
      testDir: './e2e',
      fullyParallel: false, // Secuencial para evitar conflictos
      forbidOnly: !!process.env.CI,
      retries: process.env.CI ? 2 : 0,
      workers: 1,
      reporter: [
        ['html'],
        ['json', { outputFile: 'playwright-report/results.json' }],
      ],
      use: {
        baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
      },
      projects: [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
      ],
      webServer: process.env.CI ? undefined : {
        command: 'pnpm dev',
        url: 'http://localhost:3000',
        reuseExistingServer: true,
      },
    });
    ```
  Output: "Configuración creada"

TAREA-12.7.3:
  Nombre: "Agregar script de E2E"
  Acción: "Agregar a package.json"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Agrega a package.json:
    
    ```json
    {
      "scripts": {
        "test:e2e": "playwright test",
        "test:e2e:ui": "playwright test --ui"
      }
    }
    ```
  Output: "Scripts agregados"

TAREA-12.7.4:
  Nombre: "Crear helpers de auth"
  Acción: "Crear /e2e/helpers/auth.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```typescript
    import { Page } from '@playwright/test';
    
    export async function login(page: Page, email: string, password: string) {
      await page.goto('/login');
      await page.getByLabel('Email').fill(email);
      await page.getByLabel('Contraseña').fill(password);
      await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
      await page.waitForURL('/dashboard');
    }
    
    export async function register(page: Page, email: string, password: string) {
      await page.goto('/register');
      await page.getByLabel('Email').fill(email);
      await page.getByLabel('Contraseña').fill(password);
      await page.getByLabel('Confirmar Contraseña').fill(password);
      await page.getByRole('button', { name: 'Registrarse' }).click();
      await page.waitForURL('/onboarding');
    }
    ```
  Output: "Helpers de auth"

TAREA-12.7.5:
  Nombre: "Crear test de registro y onboarding"
  Acción: "Crear /e2e/onboarding.spec.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```typescript
    import { test, expect } from '@playwright/test';
    import { register } from './helpers/auth';
    
    test.describe('Onboarding Flow', () => {
      test('should complete full onboarding', async ({ page }) => {
        const testEmail = `test-${Date.now()}@example.com`;
        
        // Registro
        await register(page, testEmail, 'TestPassword123!');
        
        // Verificar que estamos en onboarding
        await expect(page).toHaveURL('/onboarding');
        
        // Paso 1: Seleccionar arquetipo
        await page.getByRole('button', { name: 'Rastas' }).click();
        await page.getByRole('button', { name: 'Continuar' }).click();
        
        // Paso 2: Tutorial de vectores
        await page.getByRole('button', { name: 'Siguiente' }).click();
        await page.getByRole('button', { name: 'Siguiente' }).click();
        await page.getByRole('button', { name: 'Entendido' }).click();
        
        // Paso 3: Juramento (press and hold)
        const oathButton = page.getByRole('button', { name: 'Firmar' });
        await oathButton.click({ delay: 3500 }); // Hold for 3.5s
        
        // Verificar llegada al dashboard
        await page.waitForURL('/dashboard', { timeout: 10000 });
        await expect(page.getByText('METAMEN-')).toBeVisible();
      });
    });
    ```
  Output: "Test de onboarding"

TAREA-12.7.6:
  Nombre: "Crear test de completar tareas"
  Acción: "Crear /e2e/tasks.spec.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```typescript
    import { test, expect } from '@playwright/test';
    import { login } from './helpers/auth';
    
    test.describe('Tasks Flow', () => {
      // Este test asume que hay un usuario de prueba pre-creado
      // con email: e2e-test@metamen100.com
      
      test('should complete task and see BTC increase', async ({ page }) => {
        await login(page, 'e2e-test@metamen100.com', 'E2ETestPassword!');
        
        // Obtener BTC inicial
        const btcElement = page.getByTestId('btc-balance');
        const initialBtc = await btcElement.textContent();
        
        // Encontrar y completar primera tarea
        const firstTask = page.getByTestId('task-item').first();
        const taskReward = await firstTask.getByTestId('task-reward').textContent();
        
        await firstTask.getByRole('button', { name: 'Completar' }).click();
        
        // Verificar que la tarea se marcó
        await expect(firstTask).toHaveAttribute('data-completed', 'true');
        
        // Verificar que BTC aumentó
        await expect(btcElement).not.toHaveText(initialBtc!);
      });
    });
    ```
  Output: "Test de tareas"

TAREA-12.7.7:
  Nombre: "Crear test de tienda"
  Acción: "Crear /e2e/store.spec.ts"
  Responsable: Antigravity
  # Similar estructura

TAREA-12.7.8:
  Nombre: "Ejecutar tests E2E"
  Acción: "pnpm test:e2e"
  Responsable: Antigravity
  Criterio de Éxito: "Todos los tests pasan"

SUBCAJA 12.8: CI/CD Pipeline
GitHub Actions para Automatización
Archivos a Crear
CopyRutas:
├── /.github/workflows/ci.yml          (Pipeline principal)
├── /.github/workflows/deploy.yml      (Deploy a producción)
└── /.github/dependabot.yml            (Actualizaciones automáticas)

Tamaño Estimado: ~300 líneas
Tiempo de Generación: 30-45 minutos
Estructura del CI/CD Pipeline
CopyCI/CD PIPELINE
│
├── 1. TRIGGERS
│   │
│   ├── 1.1 Push a main
│   │   └── CI completo + Deploy
│   │
│   ├── 1.2 Push a develop
│   │   └── CI completo
│   │
│   └── 1.3 Pull Request
│       └── CI (lint, test, build)
│
├── 2. JOBS
│   │
│   ├── 2.1 lint-and-typecheck
│   │   ├── pnpm lint
│   │   ├── pnpm type-check
│   │   └── pnpm format:check
│   │
│   ├── 2.2 unit-tests
│   │   ├── pnpm test:run
│   │   └── Upload coverage
│   │
│   ├── 2.3 integration-tests
│   │   ├── Setup test DB
│   │   └── pnpm test:integration
│   │
│   ├── 2.4 e2e-tests
│   │   ├── Build app
│   │   ├── Start server
│   │   └── pnpm test:e2e
│   │
│   ├── 2.5 security-audit
│   │   └── pnpm audit
│   │
│   └── 2.6 deploy-preview (PRs)
│       └── Deploy a Vercel preview
│
├── 3. DEPLOY A PRODUCCIÓN
│   │
│   ├── 3.1 Trigger: Push a main
│   │
│   ├── 3.2 Requiere: Todos los tests pasan
│   │
│   └── 3.3 Pasos:
│       ├── Deploy a Vercel
│       └── Notificar (Slack/email)
│
└── 4. DEPENDABOT
    │
    └── Actualizaciones semanales de dependencias
Tareas Atómicas para 12.8 CI/CD
yamlCopyTAREA-12.8.1:
  Nombre: "Crear workflow de CI"
  Acción: "Crear /.github/workflows/ci.yml"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /.github/workflows/ci.yml:
    
    ```yaml
    name: CI
    
    on:
      push:
        branches: [main, develop]
      pull_request:
        branches: [main]
    
    env:
      NODE_VERSION: '20.x'
      PNPM_VERSION: '8'
    
    jobs:
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
          
          - name: Run unit tests
            run: pnpm test:run --coverage
          
          - name: Upload coverage
            uses: codecov/codecov-action@v3
            with:
              files: ./coverage/lcov.info
              fail_ci_if_error: true
    
      e2e-tests:
        name: 🎭 E2E Tests
        runs-on: ubuntu-latest
        needs: [lint, unit-tests]
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
            run: npx playwright install --with-deps chromium
          
          - name: Build application
            run: pnpm build
            env:
              NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.TEST_SUPABASE_URL }}
              NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.TEST_SUPABASE_ANON_KEY }}
          
          - name: Run E2E tests
            run: pnpm test:e2e
          
          - uses: actions/upload-artifact@v3
            if: failure()
            with:
              name: playwright-report
              path: playwright-report/
    
      security:
        name: 🔒 Security Audit
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          
          - uses: pnpm/action-setup@v2
            with:
              version: ${{ env.PNPM_VERSION }}
          
          - name: Run audit
            run: pnpm audit --audit-level=high
    ```
  Output: "Workflow de CI creado"

TAREA-12.8.2:
  Nombre: "Crear workflow de deploy"
  Acción: "Crear /.github/workflows/deploy.yml"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /.github/workflows/deploy.yml:
    
    ```yaml
    name: Deploy to Production
    
    on:
      push:
        branches: [main]
      workflow_dispatch:
    
    jobs:
      deploy:
        name: 🚀 Deploy
        runs-on: ubuntu-latest
        environment:
          name: production
          url: https://metamen100.com
        steps:
          - uses: actions/checkout@v4
          
          - name: Deploy to Vercel
            uses: amondnet/vercel-action@v25
            with:
              vercel-token: ${{ secrets.VERCEL_TOKEN }}
              vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
              vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
              vercel-args: '--prod'
              scope: ${{ secrets.VERCEL_ORG_ID }}
    ```
  Output: "Workflow de deploy creado"

TAREA-12.8.3:
  Nombre: "Crear configuración de Dependabot"
  Acción: "Crear /.github/dependabot.yml"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```yaml
    version: 2
    updates:
      - package-ecosystem: "npm"
        directory: "/"
        schedule:
          interval: "weekly"
          day: "monday"
        open-pull-requests-limit: 10
        groups:
          minor-and-patch:
            patterns:
              - "*"
            update-types:
              - "minor"
              - "patch"
    ```
  Output: "Dependabot configurado"

TAREA-12.8.4:
  Nombre: "Configurar secrets en GitHub"
  Acción: "Agregar secrets al repositorio"
  Responsable: Manual (tú)
  Pasos: |
    En GitHub → Settings → Secrets and variables → Actions:
    
    1. VERCEL_TOKEN: Token de Vercel
    2. VERCEL_ORG_ID: ID de organización
    3. VERCEL_PROJECT_ID: ID del proyecto
    4. TEST_SUPABASE_URL: URL de Supabase de test
    5. TEST_SUPABASE_ANON_KEY: Key de Supabase de test
    6. CODECOV_TOKEN: Token de Codecov (opcional)
  Criterio de Éxito: "Secrets configurados"

TAREA-12.8.5:
  Nombre: "Verificar que CI pasa"
  Acción: "Push a develop y verificar"
  Responsable: Antigravity
  Comando: |
    git add .
    git commit -m "feat: add CI/CD pipeline"
    git push origin develop
  Criterio de Éxito: "✅ verde en GitHub Actions"

SUBCAJA 12.9: Code Quality
Linting, Formatting y Standards
Archivos a Crear/Modificar
CopyRutas:
├── /.eslintrc.js                      (ESLint config)
├── /.prettierrc                       (Prettier config)
├── /.editorconfig                     (Editor config)
├── /.husky/pre-commit                 (Pre-commit hook)
├── /.husky/commit-msg                 (Commit msg hook)
└── /commitlint.config.js              (Commit lint config)

Tamaño Estimado: ~150 líneas
Tiempo de Generación: 20-30 minutos
Tareas Atómicas para 12.9 Code Quality
yamlCopyTAREA-12.9.1:
  Nombre: "Configurar ESLint estricto"
  Acción: "Crear/actualizar /.eslintrc.js"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /.eslintrc.js:
    
    ```javascript
    module.exports = {
      root: true,
      extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/stylistic',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'import/order': ['error', {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        }],
      },
    };
    ```
  Output: "ESLint configurado"

TAREA-12.9.2:
  Nombre: "Configurar Prettier"
  Acción: "Crear /.prettierrc"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```json
    {
      "semi": true,
      "singleQuote": true,
      "tabWidth": 2,
      "trailingComma": "es5",
      "printWidth": 100,
      "plugins": ["prettier-plugin-tailwindcss"],
      "tailwindFunctions": ["cn", "clsx"]
    }
    ```
  Output: "Prettier configurado"

TAREA-12.9.3:
  Nombre: "Configurar Husky"
  Acción: "Instalar y configurar Husky"
  Responsable: Antigravity
  Comando: |
    pnpm add -D husky lint-staged @commitlint/cli @commitlint/config-conventional
    npx husky init
  Output: "Husky instalado"

TAREA-12.9.4:
  Nombre: "Crear pre-commit hook"
  Acción: "Crear /.husky/pre-commit"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```bash
    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"
    
    npx lint-staged
    ```
  Output: "Pre-commit hook creado"

TAREA-12.9.5:
  Nombre: "Configurar lint-staged"
  Acción: "Agregar a package.json"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Agrega a package.json:
    
    ```json
    {
      "lint-staged": {
        "*.{ts,tsx}": [
          "eslint --fix",
          "prettier --write"
        ],
        "*.{json,md,yml}": [
          "prettier --write"
        ]
      }
    }
    ```
  Output: "lint-staged configurado"

TAREA-12.9.6:
  Nombre: "Configurar commitlint"
  Acción: "Crear /commitlint.config.js"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```javascript
    module.exports = {
      extends: ['@commitlint/config-conventional'],
      rules: {
        'type-enum': [2, 'always', [
          'feat', 'fix', 'docs', 'style', 'refactor',
          'perf', 'test', 'build', 'ci', 'chore', 'revert'
        ]],
        'subject-case': [2, 'always', 'lower-case'],
      },
    };
    ```
  Output: "Commitlint configurado"

TAREA-12.9.7:
  Nombre: "Crear commit-msg hook"
  Acción: "Crear /.husky/commit-msg"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```bash
    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"
    
    npx --no -- commitlint --edit "$1"
    ```
  Output: "Commit-msg hook creado"

TAREA-12.9.8:
  Nombre: "Agregar scripts de calidad"
  Acción: "Agregar a package.json"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```json
    {
      "scripts": {
        "lint": "eslint . --ext .ts,.tsx",
        "lint:fix": "eslint . --ext .ts,.tsx --fix",
        "format": "prettier --write .",
        "format:check": "prettier --check .",
        "type-check": "tsc --noEmit"
      }
    }
    ```
  Output: "Scripts agregados"

SUBCAJA 12.10: Performance Monitoring
Web Vitals y Optimización
Archivos a Crear
CopyRutas:
├── /src/lib/performance/web-vitals.ts (Tracking de Web Vitals)
├── /src/lib/performance/measure.ts    (Medición personalizada)
└── /src/components/performance-reporter.tsx

Tamaño Estimado: ~150 líneas
Tiempo de Generación: 20-30 minutos
Tareas Atómicas para 12.10 Performance
yamlCopyTAREA-12.10.1:
  Nombre: "Configurar Web Vitals"
  Acción: "Crear /src/lib/performance/web-vitals.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```typescript
    import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';
    import { posthog } from '@/lib/analytics/client';
    
    export function reportWebVitals() {
      onCLS((metric) => {
        posthog.capture('web_vital', {
          name: 'CLS',
          value: metric.value,
          rating: metric.rating,
        });
      });
      
      onFID((metric) => {
        posthog.capture('web_vital', {
          name: 'FID',
          value: metric.value,
          rating: metric.rating,
        });
      });
      
      onFCP((metric) => {
        posthog.capture('web_vital', {
          name: 'FCP',
          value: metric.value,
          rating: metric.rating,
        });
      });
      
      onLCP((metric) => {
        posthog.capture('web_vital', {
          name: 'LCP',
          value: metric.value,
          rating: metric.rating,
        });
      });
      
      onTTFB((metric) => {
        posthog.capture('web_vital', {
          name: 'TTFB',
          value: metric.value,
          rating: metric.rating,
        });
      });
    }
    ```
  Output: "Web Vitals configurado"

TAREA-12.10.2:
  Nombre: "Integrar Web Vitals en layout"
  Acción: "Llamar reportWebVitals en layout"
  Responsable: Antigravity
  Prompt para Antigravity: |
    En /src/app/layout.tsx, agregar:
    
    ```typescript
    'use client';
    
    import { useEffect } from 'react';
    import { reportWebVitals } from '@/lib/performance/web-vitals';
    
    export function WebVitalsReporter() {
      useEffect(() => {
        reportWebVitals();
      }, []);
      
      return null;
    }
    
    // En el layout:
    <body>
      <WebVitalsReporter />
      {children}
    </body>
    ```
  Output: "Web Vitals integrado"

TAREA-12.10.3:
  Nombre: "Configurar Vercel Speed Insights"
  Acción: "Instalar y configurar"
  Responsable: Antigravity
  Comando: |
    pnpm add @vercel/speed-insights
  Prompt para Antigravity: |
    En layout.tsx:
    
    ```typescript
    import { SpeedInsights } from '@vercel/speed-insights/next';
    
    <body>
      {children}
      <SpeedInsights />
    </body>
    ```
  Output: "Speed Insights configurado"

TAREA-12.10.4:
  Nombre: "Crear dashboard de performance en PostHog"
  Acción: "Crear dashboard en PostHog"
  Responsable: Manual (tú)
  Pasos: |
    En PostHog:
    1. Crear nuevo Dashboard "Performance"
    2. Agregar gráfico: LCP over time
    3. Agregar gráfico: CLS distribution
    4. Agregar gráfico: Web Vitals by page
    5. Agregar alerta: LCP > 2.5s
  Criterio de Éxito: "Dashboard creado"

RESUMEN DE CAJA 12: OBSERVABILIDAD Y CALIDAD
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 12 - RESUMEN DE ENTREGABLES                              ║
║                                                                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  SUBCAJA                   │ ARCHIVOS         │ TAREAS │ TIEMPO EST.                ║
║  ─────────────────────────┼──────────────────┼────────┼──────────────               ║
║  12.1 Logging             │ 5 archivos       │   10   │ 30-45 min                   ║
║  12.2 Analytics (PostHog) │ 6 archivos       │   14   │ 30-45 min                   ║
║  12.3 Error Tracking      │ 6 archivos       │   11   │ 30-45 min                   ║
║  12.4 Alerting            │ 3 archivos       │    4   │ 20-30 min                   ║
║  12.5 Unit Tests          │ 8+ archivos      │   11   │ 60-90 min                   ║
║  12.6 Integration Tests   │ 5 archivos       │    8   │ 45-60 min                   ║
║  12.7 E2E Tests           │ 6 archivos       │    8   │ 45-60 min                   ║
║  12.8 CI/CD Pipeline      │ 3 archivos       │    5   │ 30-45 min                   ║
║  12.9 Code Quality        │ 6 archivos       │    8   │ 20-30 min                   ║
║  12.10 Performance        │ 3 archivos       │    4   │ 20-30 min                   ║
║  ─────────────────────────┼──────────────────┼────────┼──────────────               ║
║  TOTAL                    │ ~51 archivos     │   83   │ 6-8 horas                   ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

PROGRESO ACUMULADO
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                         PROGRESO DE DESGLOSE ATÓMICO                                 ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  📦 CAJA 01: Documentación Fundacional    │ 9 subcajas  │  92 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 02: Infraestructura y DevOps     │ 8 subcajas  │  50 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 03: Base de Datos y Backend      │ 8 subcajas  │  63 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 04: Motor Core (Lógica Pura)     │ 10 subcajas │  82 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 05: Autenticación y Onboarding   │ 7 subcajas  │  42 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 06: Dashboard y UI               │ 9 subcajas  │  42 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 07: Arsenal de Herramientas      │ 10 subcajas │  77 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 08: IA Generativa                │ 10 subcajas │  31 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 09: Economía y Tienda            │ 9 subcajas  │  59 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 10: Monetización (Stripe)        │ 8 subcajas  │  48 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 11: Notificaciones y Realtime    │ 6 subcajas  │  51 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 12: Observabilidad y Calidad     │ 10 subcajas │  83 tareas │ ✅ COMPLETO  ║
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  📦 CAJA 13: Lanzamiento y Operaciones    │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  TOTAL DESGLOSADO HASTA AHORA             │ 104 subcajas│ 720 tareas │ 12/13 CAJAS  ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

Operador, la CAJA 12 está completamente desglosada con 83 tareas atómicas.
Esta caja es CRÍTICA porque garantiza que el sistema sea:

Observable: Sabemos qué pasa en cada momento
Confiable: Errores son capturados y notificados
Medible: Métricas de negocio disponibles
Testeable: Cobertura de tests adecuada
Automatizado: CI/CD sin intervención manual