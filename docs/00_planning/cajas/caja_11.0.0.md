╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║                    📦 CAJA 11: NOTIFICACIONES Y REALTIME                             ║
  ║                                                                                      ║
  ║    "Mantener al usuario conectado y consciente de su progreso en tiempo real"       ║
  ║                                                                                      ║
  ║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
  ║    │                                                                            │   ║
  ║    │   🔔 11.1 Sistema de       📡 11.2 Supabase      ⏰ 11.3 Recordatorios    │   ║
  ║    │   Notificaciones           Realtime              y Alarmas                │   ║
  ║    │                                                                            │   ║
  ║    │   📱 11.4 Push             🎯 11.5 Eventos       📊 11.6 Estado           │   ║
  ║    │   Notifications            del Sistema           en Tiempo Real           │   ║
  ║    │                                                                            │   ║
  ║    └────────────────────────────────────────────────────────────────────────────┘   ║
  ║                                                                                      ║
  ║    Responsable: Claude (Diseño) + Antigravity (Implementación)                      ║
  ║    Entregables: Componentes React, Hooks, Service Workers, Supabase Realtime       ║
  ║    Tiempo Estimado: 6-8 horas de desarrollo                                         ║
  ║                                                                                      ║
  ║    PRINCIPIOS FUNDAMENTALES:                                                        ║
  ║    ✦ El usuario nunca debe sentirse solo en su transformación                      ║
  ║    ✦ Notificaciones que motivan, no que molestan                                   ║
  ║    ✦ Tiempo real para feedback inmediato de acciones                               ║
  ║    ✦ Push notifications para engagement fuera de la app                            ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝

  ---
  ÍNDICE DE DESGLOSE ATÓMICO - CAJA 11

  1. #subcaja-111-sistema-de-notificaciones-in-app
  2. #subcaja-112-supabase-realtime
  3. #subcaja-113-recordatorios-y-alarmas
  4. #subcaja-114-push-notifications-pwa
  5. #subcaja-115-eventos-del-sistema
  6. #subcaja-116-estado-en-tiempo-real

  ---
  SUBCAJA 11.1: SISTEMA DE NOTIFICACIONES IN-APP

  Centro de Notificaciones y Toasts

  Archivos a Crear

  Ruta: /src/lib/notifications/
  ├── index.ts                    (Exports públicos)
  ├── types.ts                    (Tipos de notificaciones)
  ├── constants.ts                (Configuración y templates)
  ├── notification-service.ts     (Servicio central)
  └── templates.ts                (Templates de mensajes)

  Ruta: /src/components/notifications/
  ├── NotificationCenter.tsx      (Panel de notificaciones)
  ├── NotificationItem.tsx        (Item individual)
  ├── NotificationBell.tsx        (Icono con badge)
  ├── NotificationToast.tsx       (Toast flotante)
  ├── NotificationProvider.tsx    (Context provider)
  └── hooks/
      ├── useNotifications.ts     (Hook principal)
      ├── useNotificationToast.ts (Hook para toasts)
      └── useUnreadCount.ts       (Contador de no leídas)

  Tamaño Estimado: ~1,200 líneas total
  Tiempo de Generación: 90-120 minutos

  Estructura del Módulo

  /src/lib/notifications/
  │
  ├── 📄 types.ts
  │   │
  │   ├── NotificationType (enum)
  │   │   ├── TASK_REMINDER = 'task_reminder'
  │   │   ├── TASK_COMPLETED = 'task_completed'
  │   │   ├── DAY_START = 'day_start'
  │   │   ├── JUDGEMENT_WARNING = 'judgement_warning'
  │   │   ├── JUDGEMENT_RESULT = 'judgement_result'
  │   │   ├── LEVEL_UP = 'level_up'
  │   │   ├── STREAK_MILESTONE = 'streak_milestone'
  │   │   ├── STREAK_AT_RISK = 'streak_at_risk'
  │   │   ├── HEALTH_LOW = 'health_low'
  │   │   ├── AVATAR_READY = 'avatar_ready'
  │   │   ├── PURCHASE_SUCCESS = 'purchase_success'
  │   │   ├── SUBSCRIPTION_EXPIRING = 'subscription_expiring'
  │   │   ├── SUBSCRIPTION_RENEWED = 'subscription_renewed'
  │   │   ├── ACHIEVEMENT_UNLOCKED = 'achievement_unlocked'
  │   │   └── SYSTEM_MESSAGE = 'system_message'
  │   │
  │   ├── NotificationPriority (enum)
  │   │   ├── LOW = 'low'
  │   │   ├── NORMAL = 'normal'
  │   │   ├── HIGH = 'high'
  │   │   └── URGENT = 'urgent'
  │   │
  │   ├── NotificationChannel (enum)
  │   │   ├── IN_APP = 'in_app'
  │   │   ├── TOAST = 'toast'
  │   │   ├── PUSH = 'push'
  │   │   └── EMAIL = 'email'
  │   │
  │   ├── Notification (interface)
  │   │   ├── id: string
  │   │   ├── userId: string
  │   │   ├── type: NotificationType
  │   │   ├── priority: NotificationPriority
  │   │   ├── title: string
  │   │   ├── message: string
  │   │   ├── icon?: string
  │   │   ├── actionUrl?: string
  │   │   ├── actionLabel?: string
  │   │   ├── metadata?: Record<string, unknown>
  │   │   ├── read: boolean
  │   │   ├── dismissed: boolean
  │   │   ├── channels: NotificationChannel[]
  │   │   ├── createdAt: Date
  │   │   └── expiresAt?: Date
  │   │
  │   ├── NotificationPreferences (interface)
  │   │   ├── userId: string
  │   │   ├── enabled: boolean
  │   │   ├── channels: {
  │   │   │     inApp: boolean
  │   │   │     push: boolean
  │   │   │     email: boolean
  │   │   │   }
  │   │   ├── quietHours: {
  │   │   │     enabled: boolean
  │   │   │     start: string  // "22:00"
  │   │   │     end: string    // "08:00"
  │   │   │   }
  │   │   └── typePreferences: Record<NotificationType, boolean>
  │   │
  │   ├── ToastNotification (interface)
  │   │   ├── id: string
  │   │   ├── type: 'success' | 'error' | 'warning' | 'info'
  │   │   ├── title: string
  │   │   ├── message?: string
  │   │   ├── duration: number (ms)
  │   │   ├── dismissible: boolean
  │   │   └── action?: { label: string, onClick: () => void }
  │   │
  │   └── NotificationTemplate (interface)
  │       ├── type: NotificationType
  │       ├── titleTemplate: string
  │       ├── messageTemplate: string
  │       ├── icon: string
  │       ├── defaultPriority: NotificationPriority
  │       ├── defaultChannels: NotificationChannel[]
  │       └── defaultDuration?: number
  │
  ├── 📄 constants.ts
  │   │
  │   ├── NOTIFICATION_CONFIG
  │   │   ├── MAX_STORED: 100
  │   │   ├── MAX_DISPLAYED: 50
  │   │   ├── AUTO_DISMISS_DELAY: 5000 (ms)
  │   │   ├── TOAST_DURATION: {
  │   │   │     success: 3000,
  │   │   │     error: 5000,
  │   │   │     warning: 4000,
  │   │   │     info: 3000
  │   │   │   }
  │   │   ├── POLLING_INTERVAL: 30000 (ms)
  │   │   └── REALTIME_ENABLED: true
  │   │
  │   ├── NOTIFICATION_ICONS
  │   │   ├── task_reminder: '📋'
  │   │   ├── task_completed: '✅'
  │   │   ├── day_start: '🌅'
  │   │   ├── judgement_warning: '⚠️'
  │   │   ├── judgement_result: '⚖️'
  │   │   ├── level_up: '🎉'
  │   │   ├── streak_milestone: '🔥'
  │   │   ├── streak_at_risk: '😰'
  │   │   ├── health_low: '💔'
  │   │   ├── avatar_ready: '🖼️'
  │   │   ├── purchase_success: '🛒'
  │   │   ├── subscription_expiring: '⏰'
  │   │   ├── subscription_renewed: '💳'
  │   │   ├── achievement_unlocked: '🏆'
  │   │   └── system_message: '📢'
  │   │
  │   ├── PRIORITY_COLORS
  │   │   ├── low: 'gray'
  │   │   ├── normal: 'blue'
  │   │   ├── high: 'orange'
  │   │   └── urgent: 'red'
  │   │
  │   └── DEFAULT_PREFERENCES: NotificationPreferences
  │       ├── enabled: true
  │       ├── channels: { inApp: true, push: true, email: false }
  │       ├── quietHours: { enabled: false, start: '22:00', end: '08:00' }
  │       └── typePreferences: (todos en true excepto system_message)
  │
  ├── 📄 templates.ts
  │   │
  │   ├── NOTIFICATION_TEMPLATES: Record<NotificationType, NotificationTemplate>
  │   │   │
  │   │   ├── TASK_REMINDER
  │   │   │   ├── titleTemplate: "¡No olvides tu tarea!"
  │   │   │   ├── messageTemplate: "Tienes {{taskCount}} tareas pendientes hoy. {{taskName}} te espera."
  │   │   │   ├── icon: '📋'
  │   │   │   ├── defaultPriority: NORMAL
  │   │   │   └── defaultChannels: [IN_APP, PUSH]
  │   │   │
  │   │   ├── TASK_COMPLETED
  │   │   │   ├── titleTemplate: "¡Tarea completada!"
  │   │   │   ├── messageTemplate: "{{taskName}} ✓ (+{{btcReward}} BTC, +{{vectorGain}} {{vectorName}})"
  │   │   │   ├── icon: '✅'
  │   │   │   ├── defaultPriority: NORMAL
  │   │   │   └── defaultChannels: [TOAST]
  │   │   │
  │   │   ├── DAY_START
  │   │   │   ├── titleTemplate: "¡Buenos días, guerrero!"
  │   │   │   ├── messageTemplate: "Día {{dayNumber}} de tu transformación. Tienes {{taskCount}} tareas hoy."
  │   │   │   ├── icon: '🌅'
  │   │   │   ├── defaultPriority: NORMAL
  │   │   │   └── defaultChannels: [IN_APP, PUSH]
  │   │   │
  │   │   ├── JUDGEMENT_WARNING
  │   │   │   ├── titleTemplate: "⚠️ Judgement Night se acerca"
  │   │   │   ├── messageTemplate: "Tienes {{hoursRemaining}} horas. Completado: {{completionRate}}%"
  │   │   │   ├── icon: '⚠️'
  │   │   │   ├── defaultPriority: HIGH
  │   │   │   └── defaultChannels: [IN_APP, PUSH, TOAST]
  │   │   │
  │   │   ├── JUDGEMENT_RESULT
  │   │   │   ├── titleTemplate: "{{status}}: Día {{dayNumber}}"
  │   │   │   ├── messageTemplate: "Completaste {{completionRate}}%. {{healthChange}} {{streakInfo}}"
  │   │   │   ├── icon: '⚖️'
  │   │   │   ├── defaultPriority: HIGH
  │   │   │   └── defaultChannels: [IN_APP, PUSH]
  │   │   │
  │   │   ├── LEVEL_UP
  │   │   │   ├── titleTemplate: "🎉 ¡SUBISTE DE NIVEL!"
  │   │   │   ├── messageTemplate: "Ahora eres {{levelName}} (Nivel {{levelNumber}}). +{{btcBonus}} BTC"
  │   │   │   ├── icon: '🎉'
  │   │   │   ├── defaultPriority: HIGH
  │   │   │   └── defaultChannels: [IN_APP, PUSH, TOAST]
  │   │   │
  │   │   ├── STREAK_MILESTONE
  │   │   │   ├── titleTemplate: "🔥 ¡Racha de {{streakDays}} días!"
  │   │   │   ├── messageTemplate: "Has mantenido tu disciplina por {{streakDays}} días. {{reward}}"
  │   │   │   ├── icon: '🔥'
  │   │   │   ├── defaultPriority: HIGH
  │   │   │   └── defaultChannels: [IN_APP, PUSH, TOAST]
  │   │   │
  │   │   ├── STREAK_AT_RISK
  │   │   │   ├── titleTemplate: "😰 Tu racha está en riesgo"
  │   │   │   ├── messageTemplate: "Completa tus tareas hoy o perderás {{streakDays}} días de racha."
  │   │   │   ├── icon: '😰'
  │   │   │   ├── defaultPriority: URGENT
  │   │   │   └── defaultChannels: [IN_APP, PUSH, TOAST]
  │   │   │
  │   │   ├── HEALTH_LOW
  │   │   │   ├── titleTemplate: "💔 Salud crítica"
  │   │   │   ├── messageTemplate: "Te quedan {{heartsRemaining}} corazones. ¡No falles hoy!"
  │   │   │   ├── icon: '💔'
  │   │   │   ├── defaultPriority: URGENT
  │   │   │   └── defaultChannels: [IN_APP, PUSH, TOAST]
  │   │   │
  │   │   ├── AVATAR_READY
  │   │   │   ├── titleTemplate: "🖼️ Tu nuevo avatar está listo"
  │   │   │   ├── messageTemplate: "Tu avatar ha evolucionado. ¡Míralo ahora!"
  │   │   │   ├── icon: '🖼️'
  │   │   │   ├── defaultPriority: NORMAL
  │   │   │   └── defaultChannels: [IN_APP, PUSH, TOAST]
  │   │   │
  │   │   ├── PURCHASE_SUCCESS
  │   │   │   ├── titleTemplate: "🛒 Compra exitosa"
  │   │   │   ├── messageTemplate: "Has adquirido {{itemName}} por {{price}} BTC."
  │   │   │   ├── icon: '🛒'
  │   │   │   ├── defaultPriority: NORMAL
  │   │   │   └── defaultChannels: [TOAST]
  │   │   │
  │   │   ├── SUBSCRIPTION_EXPIRING
  │   │   │   ├── titleTemplate: "⏰ Tu suscripción expira pronto"
  │   │   │   ├── messageTemplate: "Tu suscripción expira en {{daysRemaining}} días. Renueva para no perder acceso."
  │   │   │   ├── icon: '⏰'
  │   │   │   ├── defaultPriority: HIGH
  │   │   │   └── defaultChannels: [IN_APP, PUSH, EMAIL]
  │   │   │
  │   │   ├── SUBSCRIPTION_RENEWED
  │   │   │   ├── titleTemplate: "💳 Suscripción renovada"
  │   │   │   ├── messageTemplate: "Tu suscripción ha sido renovada hasta {{expirationDate}}."
  │   │   │   ├── icon: '💳'
  │   │   │   ├── defaultPriority: NORMAL
  │   │   │   └── defaultChannels: [IN_APP, EMAIL]
  │   │   │
  │   │   └── ACHIEVEMENT_UNLOCKED
  │   │       ├── titleTemplate: "🏆 ¡Logro desbloqueado!"
  │   │       ├── messageTemplate: "Has obtenido: {{achievementName}}"
  │   │       ├── icon: '🏆'
  │   │       ├── defaultPriority: HIGH
  │   │       └── defaultChannels: [IN_APP, PUSH, TOAST]
  │   │
  │   ├── function renderTemplate(
  │   │     template: string,
  │   │     variables: Record<string, string | number>
  │   │   ): string
  │   │   └── Reemplaza {{variable}} con valores
  │   │
  │   └── function createNotificationFromTemplate(
  │       type: NotificationType,
  │       variables: Record<string, string | number>,
  │       overrides?: Partial<Notification>
  │     ): Omit<Notification, 'id' | 'userId' | 'createdAt'>
  │
  └── 📄 notification-service.ts
      │
      ├── class NotificationService
      │   │
      │   ├── constructor(supabaseClient: SupabaseClient)
      │   │
      │   ├── // Crear notificaciones
      │   ├── async create(
      │   │     userId: string,
      │   │     type: NotificationType,
      │   │     variables: Record<string, unknown>,
      │   │     options?: Partial<Notification>
      │   │   ): Promise<Notification>
      │   │
      │   ├── async createFromTemplate(
      │   │     userId: string,
      │   │     type: NotificationType,
      │   │     variables: Record<string, string | number>
      │   │   ): Promise<Notification>
      │   │
      │   ├── // Leer notificaciones
      │   ├── async getAll(
      │   │     userId: string,
      │   │     options?: { limit?: number, includeRead?: boolean }
      │   │   ): Promise<Notification[]>
      │   │
      │   ├── async getUnread(userId: string): Promise<Notification[]>
      │   │
      │   ├── async getUnreadCount(userId: string): Promise<number>
      │   │
      │   ├── // Actualizar estado
      │   ├── async markAsRead(notificationId: string): Promise<void>
      │   │
      │   ├── async markAllAsRead(userId: string): Promise<void>
      │   │
      │   ├── async dismiss(notificationId: string): Promise<void>
      │   │
      │   ├── async dismissAll(userId: string): Promise<void>
      │   │
      │   ├── // Preferencias
      │   ├── async getPreferences(userId: string): Promise<NotificationPreferences>
      │   │
      │   ├── async updatePreferences(
      │   │     userId: string,
      │   │     preferences: Partial<NotificationPreferences>
      │   │   ): Promise<NotificationPreferences>
      │   │
      │   ├── // Limpieza
      │   ├── async deleteExpired(userId: string): Promise<number>
      │   │
      │   └── async deleteOld(userId: string, olderThanDays: number): Promise<number>

  Componentes React

  /src/components/notifications/
  │
  ├── 📄 NotificationProvider.tsx
  │   │
  │   ├── NotificationContext
  │   │   ├── notifications: Notification[]
  │   │   ├── unreadCount: number
  │   │   ├── isLoading: boolean
  │   │   ├── markAsRead: (id: string) => void
  │   │   ├── markAllAsRead: () => void
  │   │   ├── dismiss: (id: string) => void
  │   │   ├── showToast: (toast: ToastNotification) => void
  │   │   └── refresh: () => void
  │   │
  │   ├── NotificationProvider component
  │   │   ├── Carga notificaciones al montar
  │   │   ├── Suscribe a Supabase Realtime
  │   │   ├── Maneja toasts
  │   │   └── Expone context a children
  │   │
  │   └── useNotificationContext hook
  │
  ├── 📄 NotificationCenter.tsx
  │   │
  │   ├── Props
  │   │   ├── isOpen: boolean
  │   │   ├── onClose: () => void
  │   │   └── position?: 'left' | 'right'
  │   │
  │   ├── Features
  │   │   ├── Lista scrolleable de notificaciones
  │   │   ├── Tabs: Todas | No leídas
  │   │   ├── Botón "Marcar todas como leídas"
  │   │   ├── Empty state cuando no hay notificaciones
  │   │   ├── Animaciones de entrada/salida
  │   │   └── Click fuera para cerrar
  │   │
  │   └── Diseño
  │       ├── Panel deslizante desde la derecha
  │       ├── Header con título y acciones
  │       ├── Lista de NotificationItem
  │       └── Footer con link a configuración
  │
  ├── 📄 NotificationItem.tsx
  │   │
  │   ├── Props
  │   │   ├── notification: Notification
  │   │   ├── onRead: (id: string) => void
  │   │   └── onDismiss: (id: string) => void
  │   │
  │   ├── Features
  │   │   ├── Icono según tipo
  │   │   ├── Título y mensaje
  │   │   ├── Tiempo relativo (hace 5 min)
  │   │   ├── Indicador de no leída (punto azul)
  │   │   ├── Botón de acción si aplica
  │   │   ├── Swipe to dismiss (mobile)
  │   │   └── Hover effects
  │   │
  │   └── Diseño
  │       ├── Card con padding
  │       ├── Borde izquierdo de color según prioridad
  │       ├── Layout: [Icon] [Content] [Actions]
  │       └── Fondo diferente si no leída
  │
  ├── 📄 NotificationBell.tsx
  │   │
  │   ├── Props
  │   │   ├── onClick: () => void
  │   │   └── className?: string
  │   │
  │   ├── Features
  │   │   ├── Icono de campana
  │   │   ├── Badge con número de no leídas
  │   │   ├── Animación de shake cuando llega nueva
  │   │   └── Tooltip con "X notificaciones"
  │   │
  │   └── Diseño
  │       ├── Botón circular
  │       ├── Badge rojo con número (máx 99+)
  │       └── Animación de pulso si hay nuevas
  │
  ├── 📄 NotificationToast.tsx
  │   │
  │   ├── Props
  │   │   ├── toast: ToastNotification
  │   │   └── onDismiss: (id: string) => void
  │   │
  │   ├── Features
  │   │   ├── Aparece desde abajo-derecha
  │   │   ├── Auto-dismiss después de duration
  │   │   ├── Botón X para cerrar manual
  │   │   ├── Progress bar de tiempo restante
  │   │   ├── Pausar timer on hover
  │   │   └── Stacking de múltiples toasts
  │   │
  │   └── Diseño
  │       ├── Card flotante con sombra
  │       ├── Colores según tipo (success=verde, error=rojo, etc.)
  │       ├── Icono + título + mensaje
  │       └── Animación de entrada/salida
  │
  └── 📄 hooks/
      │
      ├── useNotifications.ts
      │   ├── Retorna: { notifications, unreadCount, isLoading, refresh }
      │   └── Usa NotificationContext
      │
      ├── useNotificationToast.ts
      │   ├── Retorna: { showSuccess, showError, showWarning, showInfo }
      │   ├── showSuccess(title, message?, options?)
      │   ├── showError(title, message?, options?)
      │   ├── showWarning(title, message?, options?)
      │   └── showInfo(title, message?, options?)
      │
      └── useUnreadCount.ts
          ├── Retorna: number
          ├── Actualiza en tiempo real
          └── Optimizado para re-renders mínimos

  Tareas Atómicas para 11.1 Sistema de Notificaciones In-App

  TAREA-11.1.01:
    Nombre: "Crear estructura de carpetas para notifications"
    Acción: "Crear directorios y archivos vacíos"
    Responsable: Antigravity
    Comando: |
      mkdir -p src/lib/notifications
      touch src/lib/notifications/{index,types,constants,templates,notification-service}.ts

      mkdir -p src/components/notifications/hooks
      touch src/components/notifications/{NotificationProvider,NotificationCenter,NotificationItem,NotificationBell,NotificationToast}.tsx
      touch src/components/notifications/hooks/{useNotifications,useNotificationToast,useUnreadCount}.ts
    Criterio de Éxito: "Archivos existen"

  TAREA-11.1.02:
    Nombre: "Implementar types.ts para notifications"
    Acción: "Definir todos los tipos e interfaces"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/notifications/types.ts con:

      1. enum NotificationType con todos los tipos:
         - TASK_REMINDER, TASK_COMPLETED, DAY_START
         - JUDGEMENT_WARNING, JUDGEMENT_RESULT
         - LEVEL_UP, STREAK_MILESTONE, STREAK_AT_RISK
         - HEALTH_LOW, AVATAR_READY, PURCHASE_SUCCESS
         - SUBSCRIPTION_EXPIRING, SUBSCRIPTION_RENEWED
         - ACHIEVEMENT_UNLOCKED, SYSTEM_MESSAGE

      2. enum NotificationPriority: LOW, NORMAL, HIGH, URGENT

      3. enum NotificationChannel: IN_APP, TOAST, PUSH, EMAIL

      4. interface Notification con todos los campos

      5. interface NotificationPreferences con configuración de usuario

      6. interface ToastNotification para toasts efímeros

      7. interface NotificationTemplate para templates de mensajes

      Documenta con JSDoc cada tipo.
    Criterio de Éxito: "Tipos compilan sin errores"

  TAREA-11.1.03:
    Nombre: "Implementar constants.ts para notifications"
    Acción: "Definir configuración y constantes"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/notifications/constants.ts:

      export const NOTIFICATION_CONFIG = {
        MAX_STORED: 100,
        MAX_DISPLAYED: 50,
        AUTO_DISMISS_DELAY: 5000,
        TOAST_DURATION: {
          success: 3000,
          error: 5000,
          warning: 4000,
          info: 3000
        },
        POLLING_INTERVAL: 30000,
        REALTIME_ENABLED: true
      } as const;

      export const NOTIFICATION_ICONS: Record<NotificationType, string> = {
        [NotificationType.TASK_REMINDER]: '📋',
        [NotificationType.TASK_COMPLETED]: '✅',
        [NotificationType.DAY_START]: '🌅',
        [NotificationType.JUDGEMENT_WARNING]: '⚠️',
        [NotificationType.JUDGEMENT_RESULT]: '⚖️',
        [NotificationType.LEVEL_UP]: '🎉',
        [NotificationType.STREAK_MILESTONE]: '🔥',
        [NotificationType.STREAK_AT_RISK]: '😰',
        [NotificationType.HEALTH_LOW]: '💔',
        [NotificationType.AVATAR_READY]: '🖼️',
        [NotificationType.PURCHASE_SUCCESS]: '🛒',
        [NotificationType.SUBSCRIPTION_EXPIRING]: '⏰',
        [NotificationType.SUBSCRIPTION_RENEWED]: '💳',
        [NotificationType.ACHIEVEMENT_UNLOCKED]: '🏆',
        [NotificationType.SYSTEM_MESSAGE]: '📢'
      };

      export const PRIORITY_COLORS = {
        low: { bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-600' },
        normal: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-600' },
        high: { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-600' },
        urgent: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-600' }
      } as const;

      export const DEFAULT_PREFERENCES: NotificationPreferences = {
        userId: '',
        enabled: true,
        channels: {
          inApp: true,
          push: true,
          email: false
        },
        quietHours: {
          enabled: false,
          start: '22:00',
          end: '08:00'
        },
        typePreferences: Object.fromEntries(
          Object.values(NotificationType).map(type => [type, true])
        ) as Record<NotificationType, boolean>
      };
    Criterio de Éxito: "Constantes exportan correctamente"

  TAREA-11.1.04:
    Nombre: "Implementar templates.ts"
    Acción: "Templates de mensajes para cada tipo"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/notifications/templates.ts:

      import { NotificationType, NotificationPriority, NotificationChannel, NotificationTemplate, Notification } from './types';
      import { NOTIFICATION_ICONS } from './constants';

      export const NOTIFICATION_TEMPLATES: Record<NotificationType, NotificationTemplate> = {
        [NotificationType.TASK_REMINDER]: {
          type: NotificationType.TASK_REMINDER,
          titleTemplate: '¡No olvides tu tarea!',
          messageTemplate: 'Tienes {{taskCount}} tareas pendientes hoy. {{taskName}} te espera.',
          icon: NOTIFICATION_ICONS[NotificationType.TASK_REMINDER],
          defaultPriority: NotificationPriority.NORMAL,
          defaultChannels: [NotificationChannel.IN_APP, NotificationChannel.PUSH]
        },

        [NotificationType.TASK_COMPLETED]: {
          type: NotificationType.TASK_COMPLETED,
          titleTemplate: '¡Tarea completada!',
          messageTemplate: '{{taskName}} ✓ (+{{btcReward}} BTC, +{{vectorGain}} {{vectorName}})',
          icon: NOTIFICATION_ICONS[NotificationType.TASK_COMPLETED],
          defaultPriority: NotificationPriority.NORMAL,
          defaultChannels: [NotificationChannel.TOAST],
          defaultDuration: 3000
        },

        // ... (todos los demás templates como se especificó arriba)
      };

      export function renderTemplate(
        template: string,
        variables: Record<string, string | number>
      ): string {
        let result = template;
        for (const [key, value] of Object.entries(variables)) {
          result = result.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
        }
        return result;
      }

      export function createNotificationFromTemplate(
        type: NotificationType,
        variables: Record<string, string | number>,
        overrides?: Partial<Notification>
      ): Omit<Notification, 'id' | 'userId' | 'createdAt'> {
        const template = NOTIFICATION_TEMPLATES[type];

        return {
          type,
          priority: overrides?.priority ?? template.defaultPriority,
          title: renderTemplate(template.titleTemplate, variables),
          message: renderTemplate(template.messageTemplate, variables),
          icon: overrides?.icon ?? template.icon,
          channels: overrides?.channels ?? template.defaultChannels,
          read: false,
          dismissed: false,
          metadata: variables,
          ...overrides
        };
      }
    Criterio de Éxito: "Templates renderizan correctamente"

  TAREA-11.1.05:
    Nombre: "Implementar notification-service.ts"
    Acción: "Servicio central de notificaciones"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/notifications/notification-service.ts:

      import { createClient } from '@/lib/supabase/client';
      import { Notification, NotificationType, NotificationPreferences } from './types';
      import { createNotificationFromTemplate } from './templates';
      import { DEFAULT_PREFERENCES, NOTIFICATION_CONFIG } from './constants';

      export class NotificationService {
        private supabase = createClient();

        async create(
          userId: string,
          type: NotificationType,
          variables: Record<string, string | number>,
          options?: Partial<Notification>
        ): Promise<Notification> {
          const notificationData = createNotificationFromTemplate(type, variables, options);

          const { data, error } = await this.supabase
            .from('notifications')
            .insert({
              user_id: userId,
              ...notificationData
            })
            .select()
            .single();

          if (error) throw error;
          return this.mapToNotification(data);
        }

        async getAll(
          userId: string,
          options?: { limit?: number; includeRead?: boolean }
        ): Promise<Notification[]> {
          let query = this.supabase
            .from('notifications')
            .select('*')
            .eq('user_id', userId)
            .eq('dismissed', false)
            .order('created_at', { ascending: false })
            .limit(options?.limit ?? NOTIFICATION_CONFIG.MAX_DISPLAYED);

          if (!options?.includeRead) {
            query = query.eq('read', false);
          }

          const { data, error } = await query;
          if (error) throw error;
          return (data ?? []).map(this.mapToNotification);
        }

        async getUnreadCount(userId: string): Promise<number> {
          const { count, error } = await this.supabase
            .from('notifications')
            .select('*', { count: 'exact', head: true })
            .eq('user_id', userId)
            .eq('read', false)
            .eq('dismissed', false);

          if (error) throw error;
          return count ?? 0;
        }

        async markAsRead(notificationId: string): Promise<void> {
          const { error } = await this.supabase
            .from('notifications')
            .update({ read: true, read_at: new Date().toISOString() })
            .eq('id', notificationId);

          if (error) throw error;
        }

        async markAllAsRead(userId: string): Promise<void> {
          const { error } = await this.supabase
            .from('notifications')
            .update({ read: true, read_at: new Date().toISOString() })
            .eq('user_id', userId)
            .eq('read', false);

          if (error) throw error;
        }

        async dismiss(notificationId: string): Promise<void> {
          const { error } = await this.supabase
            .from('notifications')
            .update({ dismissed: true })
            .eq('id', notificationId);

          if (error) throw error;
        }

        async getPreferences(userId: string): Promise<NotificationPreferences> {
          const { data, error } = await this.supabase
            .from('notification_preferences')
            .select('*')
            .eq('user_id', userId)
            .single();

          if (error || !data) {
            return { ...DEFAULT_PREFERENCES, userId };
          }

          return this.mapToPreferences(data);
        }

        async updatePreferences(
          userId: string,
          preferences: Partial<NotificationPreferences>
        ): Promise<NotificationPreferences> {
          const { data, error } = await this.supabase
            .from('notification_preferences')
            .upsert({
              user_id: userId,
              ...preferences,
              updated_at: new Date().toISOString()
            })
            .select()
            .single();

          if (error) throw error;
          return this.mapToPreferences(data);
        }

        private mapToNotification(row: any): Notification {
          return {
            id: row.id,
            userId: row.user_id,
            type: row.type,
            priority: row.priority,
            title: row.title,
            message: row.message,
            icon: row.icon,
            actionUrl: row.action_url,
            actionLabel: row.action_label,
            metadata: row.metadata,
            read: row.read,
            dismissed: row.dismissed,
            channels: row.channels,
            createdAt: new Date(row.created_at),
            expiresAt: row.expires_at ? new Date(row.expires_at) : undefined
          };
        }

        private mapToPreferences(row: any): NotificationPreferences {
          return {
            userId: row.user_id,
            enabled: row.enabled,
            channels: row.channels,
            quietHours: row.quiet_hours,
            typePreferences: row.type_preferences
          };
        }
      }

      export const notificationService = new NotificationService();
    Criterio de Éxito: "Servicio funciona con Supabase"

  TAREA-11.1.06:
    Nombre: "Implementar index.ts para notifications lib"
    Acción: "Exports públicos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/notifications/index.ts:

      // Types
      export type { Notification, NotificationPreferences, ToastNotification, NotificationTemplate } from './types';
      export { NotificationType, NotificationPriority, NotificationChannel } from './types';

      // Constants
      export { NOTIFICATION_CONFIG, NOTIFICATION_ICONS, PRIORITY_COLORS, DEFAULT_PREFERENCES } from './constants';

      // Templates
      export { NOTIFICATION_TEMPLATES, renderTemplate, createNotificationFromTemplate } from './templates';

      // Service
      export { NotificationService, notificationService } from './notification-service';
    Criterio de Éxito: "Exports funcionan"

  TAREA-11.1.07:
    Nombre: "Implementar NotificationProvider.tsx"
    Acción: "Context provider para notificaciones"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/components/notifications/NotificationProvider.tsx:

      'use client';

      import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
      import { createClient } from '@/lib/supabase/client';
      import { Notification, ToastNotification, notificationService } from '@/lib/notifications';

      interface NotificationContextValue {
        notifications: Notification[];
        unreadCount: number;
        isLoading: boolean;
        toasts: ToastNotification[];
        markAsRead: (id: string) => Promise<void>;
        markAllAsRead: () => Promise<void>;
        dismiss: (id: string) => Promise<void>;
        showToast: (toast: Omit<ToastNotification, 'id'>) => void;
        dismissToast: (id: string) => void;
        refresh: () => Promise<void>;
      }

      const NotificationContext = createContext<NotificationContextValue | null>(null);

      export function NotificationProvider({ children }: { children: ReactNode }) {
        const [notifications, setNotifications] = useState<Notification[]>([]);
        const [unreadCount, setUnreadCount] = useState(0);
        const [isLoading, setIsLoading] = useState(true);
        const [toasts, setToasts] = useState<ToastNotification[]>([]);

        const supabase = createClient();

        // Cargar notificaciones iniciales
        const loadNotifications = useCallback(async () => {
          try {
            const [notifs, count] = await Promise.all([
              notificationService.getAll(userId, { includeRead: true }),
              notificationService.getUnreadCount(userId)
            ]);
            setNotifications(notifs);
            setUnreadCount(count);
          } catch (error) {
            console.error('Error loading notifications:', error);
          } finally {
            setIsLoading(false);
          }
        }, []);

        // Suscribir a cambios en tiempo real
        useEffect(() => {
          loadNotifications();

          const channel = supabase
            .channel('notifications')
            .on(
              'postgres_changes',
              {
                event: 'INSERT',
                schema: 'public',
                table: 'notifications',
                filter: `user_id=eq.${userId}`
              },
              (payload) => {
                const newNotification = mapPayloadToNotification(payload.new);
                setNotifications(prev => [newNotification, ...prev]);
                setUnreadCount(prev => prev + 1);

                // Mostrar toast si el canal incluye TOAST
                if (newNotification.channels.includes('toast')) {
                  showToast({
                    type: getToastType(newNotification.priority),
                    title: newNotification.title,
                    message: newNotification.message,
                    duration: 5000,
                    dismissible: true
                  });
                }
              }
            )
            .subscribe();

          return () => {
            supabase.removeChannel(channel);
          };
        }, []);

        const markAsRead = async (id: string) => {
          await notificationService.markAsRead(id);
          setNotifications(prev =>
            prev.map(n => n.id === id ? { ...n, read: true } : n)
          );
          setUnreadCount(prev => Math.max(0, prev - 1));
        };

        const markAllAsRead = async () => {
          await notificationService.markAllAsRead(userId);
          setNotifications(prev => prev.map(n => ({ ...n, read: true })));
          setUnreadCount(0);
        };

        const dismiss = async (id: string) => {
          await notificationService.dismiss(id);
          setNotifications(prev => prev.filter(n => n.id !== id));
        };

        const showToast = (toast: Omit<ToastNotification, 'id'>) => {
          const id = `toast_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          const newToast = { ...toast, id };
          setToasts(prev => [...prev, newToast]);

          // Auto-dismiss
          setTimeout(() => {
            dismissToast(id);
          }, toast.duration || 5000);
        };

        const dismissToast = (id: string) => {
          setToasts(prev => prev.filter(t => t.id !== id));
        };

        return (
          <NotificationContext.Provider value={{
            notifications,
            unreadCount,
            isLoading,
            toasts,
            markAsRead,
            markAllAsRead,
            dismiss,
            showToast,
            dismissToast,
            refresh: loadNotifications
          }}>
            {children}
          </NotificationContext.Provider>
        );
      }

      export function useNotificationContext() {
        const context = useContext(NotificationContext);
        if (!context) {
          throw new Error('useNotificationContext must be used within NotificationProvider');
        }
        return context;
      }
    Criterio de Éxito: "Provider funciona con realtime"

  TAREA-11.1.08:
    Nombre: "Implementar NotificationBell.tsx"
    Acción: "Icono de campana con badge"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/components/notifications/NotificationBell.tsx:

      'use client';

      import { Bell } from 'lucide-react';
      import { useNotificationContext } from './NotificationProvider';
      import { cn } from '@/lib/utils';

      interface NotificationBellProps {
        onClick: () => void;
        className?: string;
      }

      export function NotificationBell({ onClick, className }: NotificationBellProps) {
        const { unreadCount } = useNotificationContext();

        return (
          <button
            onClick={onClick}
            className={cn(
              'relative p-2 rounded-full hover:bg-gray-100 transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-purple-500',
              className
            )}
            aria-label={`Notificaciones${unreadCount > 0 ? ` (${unreadCount} sin leer)` : ''}`}
          >
            <Bell className="w-6 h-6 text-gray-600" />

            {unreadCount > 0 && (
              <span className={cn(
                'absolute -top-1 -right-1 min-w-[20px] h-5 px-1',
                'flex items-center justify-center',
                'bg-red-500 text-white text-xs font-bold rounded-full',
                'animate-pulse'
              )}>
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </button>
        );
      }
    Criterio de Éxito: "Badge muestra contador correcto"

  TAREA-11.1.09:
    Nombre: "Implementar NotificationItem.tsx"
    Acción: "Componente de item individual"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea componente NotificationItem.tsx con:
      - Icono según tipo
      - Título y mensaje
      - Tiempo relativo (usando date-fns o similar)
      - Indicador visual de no leída
      - Botón de acción si tiene actionUrl
      - Botón de dismiss
      - Estilos según prioridad
      - Animación de hover
    Criterio de Éxito: "Item renderiza correctamente"

  TAREA-11.1.10:
    Nombre: "Implementar NotificationCenter.tsx"
    Acción: "Panel completo de notificaciones"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea componente NotificationCenter.tsx con:
      - Panel deslizante desde la derecha
      - Header con título "Notificaciones"
      - Tabs: "Todas" | "No leídas"
      - Botón "Marcar todas como leídas"
      - Lista de NotificationItem
      - Empty state con ilustración
      - Scroll infinito o paginación
      - Animaciones con Framer Motion
      - Click fuera o ESC para cerrar
    Criterio de Éxito: "Panel funciona completamente"

  TAREA-11.1.11:
    Nombre: "Implementar NotificationToast.tsx"
    Acción: "Componente de toast flotante"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea componente NotificationToast.tsx con:
      - Posición fija abajo-derecha
      - Container para múltiples toasts (stacking)
      - Colores según tipo (success/error/warning/info)
      - Icono + título + mensaje
      - Botón X para cerrar
      - Progress bar de tiempo restante
      - Pausar timer on hover
      - Animaciones de entrada (slide-in) y salida (fade-out)
      - Max 5 toasts visibles a la vez
    Criterio de Éxito: "Toasts funcionan con stacking"

  TAREA-11.1.12:
    Nombre: "Implementar hooks de notificaciones"
    Acción: "Custom hooks para consumir notificaciones"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea los hooks en /src/components/notifications/hooks/:

      1. useNotifications.ts
         - Wrapper simple de useNotificationContext
         - Retorna { notifications, unreadCount, isLoading, refresh }

      2. useNotificationToast.ts
         - Retorna funciones helper:
           - showSuccess(title, message?, options?)
           - showError(title, message?, options?)
           - showWarning(title, message?, options?)
           - showInfo(title, message?, options?)
         - Cada función crea un toast con el tipo correcto

      3. useUnreadCount.ts
         - Hook optimizado que solo retorna unreadCount
         - Minimiza re-renders
    Criterio de Éxito: "Hooks funcionan correctamente"

  TAREA-11.1.13:
    Nombre: "Crear tabla notifications en Supabase"
    Acción: "Migración SQL para notificaciones"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea migración SQL para la tabla notifications:

      CREATE TABLE notifications (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
        type TEXT NOT NULL,
        priority TEXT NOT NULL DEFAULT 'normal',
        title TEXT NOT NULL,
        message TEXT NOT NULL,
        icon TEXT,
        action_url TEXT,
        action_label TEXT,
        metadata JSONB DEFAULT '{}',
        channels TEXT[] DEFAULT ARRAY['in_app'],
        read BOOLEAN DEFAULT false,
        read_at TIMESTAMPTZ,
        dismissed BOOLEAN DEFAULT false,
        expires_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Índices
      CREATE INDEX idx_notifications_user_unread
        ON notifications(user_id, read, dismissed)
        WHERE read = false AND dismissed = false;

      CREATE INDEX idx_notifications_user_created
        ON notifications(user_id, created_at DESC);

      -- RLS
      ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

      CREATE POLICY "Users can read own notifications"
        ON notifications FOR SELECT
        USING (auth.uid() = user_id);

      CREATE POLICY "Users can update own notifications"
        ON notifications FOR UPDATE
        USING (auth.uid() = user_id);

      -- También crear tabla notification_preferences
    Criterio de Éxito: "Tabla creada con RLS"

  ---
  SUBCAJA 11.2: SUPABASE REALTIME

  Sincronización en Tiempo Real

  Archivos a Crear

  Ruta: /src/lib/realtime/
  ├── index.ts                    (Exports públicos)
  ├── types.ts                    (Tipos de eventos)
  ├── channels.ts                 (Definición de canales)
  ├── subscriptions.ts            (Gestión de suscripciones)
  └── hooks/
      ├── useRealtimeSubscription.ts
      ├── usePresence.ts
      └── useBroadcast.ts

  Tamaño Estimado: ~600 líneas total
  Tiempo de Generación: 45-60 minutos

  Estructura del Módulo

  /src/lib/realtime/
  │
  ├── 📄 types.ts
  │   │
  │   ├── RealtimeEvent (enum)
  │   │   ├── NOTIFICATION_NEW = 'notification:new'
  │   │   ├── TASK_COMPLETED = 'task:completed'
  │   │   ├── AVATAR_UPDATED = 'avatar:updated'
  │   │   ├── WALLET_CHANGED = 'wallet:changed'
  │   │   ├── LEVEL_UP = 'level:up'
  │   │   ├── HEALTH_CHANGED = 'health:changed'
  │   │   ├── STREAK_CHANGED = 'streak:changed'
  │   │   ├── JUDGEMENT_STARTED = 'judgement:started'
  │   │   ├── JUDGEMENT_COMPLETED = 'judgement:completed'
  │   │   ├── SUBSCRIPTION_CHANGED = 'subscription:changed'
  │   │   └── SYSTEM_BROADCAST = 'system:broadcast'
  │   │
  │   ├── RealtimeChannel (enum)
  │   │   ├── USER_UPDATES = 'user-updates'
  │   │   ├── NOTIFICATIONS = 'notifications'
  │   │   ├── AVATAR_GENERATION = 'avatar-generation'
  │   │   ├── GLOBAL_EVENTS = 'global-events'
  │   │   └── PRESENCE = 'presence'
  │   │
  │   ├── RealtimePayload<T> (interface)
  │   │   ├── event: RealtimeEvent
  │   │   ├── payload: T
  │   │   ├── timestamp: string
  │   │   └── userId?: string
  │   │
  │   ├── PresenceState (interface)
  │   │   ├── onlineAt: string
  │   │   ├── userId: string
  │   │   └── metadata?: Record<string, unknown>
  │   │
  │   └── SubscriptionOptions (interface)
  │       ├── channel: RealtimeChannel
  │       ├── event?: RealtimeEvent | RealtimeEvent[]
  │       ├── filter?: string
  │       └── onMessage: (payload: RealtimePayload<unknown>) => void
  │
  ├── 📄 channels.ts
  │   │
  │   ├── CHANNEL_CONFIG: Record<RealtimeChannel, ChannelConfig>
  │   │   │
  │   │   ├── USER_UPDATES
  │   │   │   ├── name: 'user-updates:{userId}'
  │   │   │   ├── type: 'postgres_changes'
  │   │   │   ├── tables: ['avatar_states', 'wallets', 'daily_logs']
  │   │   │   └── events: ['UPDATE']
  │   │   │
  │   │   ├── NOTIFICATIONS
  │   │   │   ├── name: 'notifications:{userId}'
  │   │   │   ├── type: 'postgres_changes'
  │   │   │   ├── tables: ['notifications']
  │   │   │   └── events: ['INSERT']
  │   │   │
  │   │   ├── AVATAR_GENERATION
  │   │   │   ├── name: 'avatar-generation:{userId}'
  │   │   │   ├── type: 'postgres_changes'
  │   │   │   ├── tables: ['image_generation_queue']
  │   │   │   └── events: ['UPDATE']
  │   │   │
  │   │   ├── GLOBAL_EVENTS
  │   │   │   ├── name: 'global-events'
  │   │   │   ├── type: 'broadcast'
  │   │   │   └── events: ['system:broadcast']
  │   │   │
  │   │   └── PRESENCE
  │   │       ├── name: 'presence'
  │   │       ├── type: 'presence'
  │   │       └── trackOnline: true
  │   │
  │   ├── function getChannelName(
  │   │     channel: RealtimeChannel,
  │   │     userId?: string
  │   │   ): string
  │   │
  │   └── function getChannelConfig(
  │       channel: RealtimeChannel
  │     ): ChannelConfig
  │
  ├── 📄 subscriptions.ts
  │   │
  │   ├── class RealtimeManager
  │   │   │
  │   │   ├── private supabase: SupabaseClient
  │   │   ├── private activeChannels: Map<string, RealtimeChannel>
  │   │   │
  │   │   ├── subscribe(options: SubscriptionOptions): () => void
  │   │   │   ├── Crea o reutiliza canal
  │   │   │   ├── Configura listeners según tipo
  │   │   │   ├── Retorna función de cleanup
  │   │   │   └── Maneja reconexión automática
  │   │   │
  │   │   ├── unsubscribe(channelName: string): void
  │   │   │
  │   │   ├── unsubscribeAll(): void
  │   │   │
  │   │   ├── subscribeToUserUpdates(
  │   │   │     userId: string,
  │   │   │     onUpdate: (payload: any) => void
  │   │   │   ): () => void
  │   │   │
  │   │   ├── subscribeToNotifications(
  │   │   │     userId: string,
  │   │   │     onNotification: (notification: Notification) => void
  │   │   │   ): () => void
  │   │   │
  │   │   ├── subscribeToAvatarGeneration(
  │   │   │     userId: string,
  │   │   │     onUpdate: (status: ImageGenStatus) => void
  │   │   │   ): () => void
  │   │   │
  │   │   ├── broadcast(
  │   │   │     channel: RealtimeChannel,
  │   │   │     event: RealtimeEvent,
  │   │   │     payload: unknown
  │   │   │   ): Promise<void>
  │   │   │
  │   │   ├── trackPresence(userId: string): () => void
  │   │   │
  │   │   └── getOnlineUsers(): PresenceState[]
  │   │
  │   └── export const realtimeManager = new RealtimeManager()
  │
  └── 📄 hooks/
      │
      ├── useRealtimeSubscription.ts
      │   │
      │   ├── function useRealtimeSubscription<T>(
      │   │     channel: RealtimeChannel,
      │   │     options?: {
      │   │       event?: RealtimeEvent | RealtimeEvent[],
      │   │       filter?: string,
      │   │       enabled?: boolean
      │   │     }
      │   │   ): { data: T | null, isConnected: boolean }
      │   │
      │   └── Maneja suscripción/cleanup automático
      │
      ├── usePresence.ts
      │   │
      │   ├── function usePresence(): {
      │   │     onlineUsers: PresenceState[],
      │   │     isTracking: boolean,
      │   │     track: () => void,
      │   │     untrack: () => void
      │   │   }
      │   │
      │   └── Gestiona presencia del usuario actual
      │
      └── useBroadcast.ts
          │
          ├── function useBroadcast(channel: RealtimeChannel): {
          │     broadcast: (event: RealtimeEvent, payload: unknown) => Promise<void>,
          │     isReady: boolean
          │   }
          │
          └── Hook para enviar broadcasts

  Tareas Atómicas para 11.2 Supabase Realtime

  TAREA-11.2.01:
    Nombre: "Crear estructura para realtime"
    Acción: "Crear directorios y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p src/lib/realtime/hooks
      touch src/lib/realtime/{index,types,channels,subscriptions}.ts
      touch src/lib/realtime/hooks/{useRealtimeSubscription,usePresence,useBroadcast}.ts
    Criterio de Éxito: "Archivos existen"

  TAREA-11.2.02:
    Nombre: "Implementar types.ts para realtime"
    Acción: "Definir tipos de eventos y canales"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/realtime/types.ts con todos los enums e interfaces
      especificados en la estructura del módulo.

      Importante:
      - RealtimeEvent para todos los eventos del sistema
      - RealtimeChannel para los diferentes canales
      - RealtimePayload<T> genérico para tipado fuerte
      - PresenceState para tracking de usuarios online
      - SubscriptionOptions para configurar suscripciones
    Criterio de Éxito: "Tipos compilan"

  TAREA-11.2.03:
    Nombre: "Implementar channels.ts"
    Acción: "Configuración de canales de Supabase"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/realtime/channels.ts con:

      1. CHANNEL_CONFIG con la configuración de cada canal
      2. Función getChannelName que interpola userId
      3. Función getChannelConfig

      Cada canal debe especificar:
      - name (puede tener placeholder {userId})
      - type ('postgres_changes' | 'broadcast' | 'presence')
      - tables (para postgres_changes)
      - events (INSERT, UPDATE, DELETE o eventos custom)
    Criterio de Éxito: "Configuración completa"

  TAREA-11.2.04:
    Nombre: "Implementar subscriptions.ts"
    Acción: "Gestor central de suscripciones"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/realtime/subscriptions.ts con RealtimeManager:

      class RealtimeManager {
        private supabase = createClient();
        private activeChannels = new Map<string, RealtimeChannel>();

        subscribe(options: SubscriptionOptions): () => void {
          const channelName = getChannelName(options.channel, options.userId);

          // Verificar si ya existe
          if (this.activeChannels.has(channelName)) {
            // Reutilizar canal existente
          }

          // Crear nuevo canal
          const channel = this.supabase.channel(channelName);

          // Configurar según tipo
          if (config.type === 'postgres_changes') {
            channel.on('postgres_changes', {...}, callback);
          } else if (config.type === 'broadcast') {
            channel.on('broadcast', {...}, callback);
          } else if (config.type === 'presence') {
            channel.on('presence', {...}, callback);
          }

          channel.subscribe();
          this.activeChannels.set(channelName, channel);

          // Retornar cleanup
          return () => this.unsubscribe(channelName);
        }

        // Métodos helper específicos
        subscribeToUserUpdates(userId, onUpdate) {...}
        subscribeToNotifications(userId, onNotification) {...}
        subscribeToAvatarGeneration(userId, onUpdate) {...}

        // Broadcast
        async broadcast(channel, event, payload) {...}

        // Presence
        trackPresence(userId) {...}
        getOnlineUsers() {...}
      }

      export const realtimeManager = new RealtimeManager();
    Criterio de Éxito: "Manager funciona con múltiples canales"

  TAREA-11.2.05:
    Nombre: "Implementar useRealtimeSubscription hook"
    Acción: "Hook para suscripciones reactivas"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/realtime/hooks/useRealtimeSubscription.ts:

      'use client';

      import { useState, useEffect, useRef } from 'react';
      import { realtimeManager } from '../subscriptions';
      import { RealtimeChannel, RealtimeEvent, RealtimePayload } from '../types';

      interface UseRealtimeOptions {
        event?: RealtimeEvent | RealtimeEvent[];
        filter?: string;
        enabled?: boolean;
      }

      export function useRealtimeSubscription<T = unknown>(
        channel: RealtimeChannel,
        userId: string,
        options: UseRealtimeOptions = {}
      ): {
        data: T | null;
        isConnected: boolean;
        error: Error | null;
      } {
        const [data, setData] = useState<T | null>(null);
        const [isConnected, setIsConnected] = useState(false);
        const [error, setError] = useState<Error | null>(null);

        const { event, filter, enabled = true } = options;

        useEffect(() => {
          if (!enabled || !userId) return;

          const unsubscribe = realtimeManager.subscribe({
            channel,
            userId,
            event,
            filter,
            onMessage: (payload: RealtimePayload<T>) => {
              setData(payload.payload);
            },
            onConnect: () => setIsConnected(true),
            onDisconnect: () => setIsConnected(false),
            onError: (err) => setError(err)
          });

          return () => {
            unsubscribe();
          };
        }, [channel, userId, event, filter, enabled]);

        return { data, isConnected, error };
      }
    Criterio de Éxito: "Hook maneja suscripción/cleanup"

  TAREA-11.2.06:
    Nombre: "Implementar usePresence hook"
    Acción: "Hook para tracking de presencia"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/realtime/hooks/usePresence.ts:

      Hook que:
      - Track automático del usuario actual
      - Lista de usuarios online
      - Métodos track/untrack
      - Cleanup automático al desmontar
    Criterio de Éxito: "Presencia funciona"

  TAREA-11.2.07:
    Nombre: "Implementar useBroadcast hook"
    Acción: "Hook para enviar broadcasts"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/realtime/hooks/useBroadcast.ts:

      Hook que:
      - Expone función broadcast(event, payload)
      - Indica si el canal está listo (isReady)
      - Maneja errores de envío
    Criterio de Éxito: "Broadcast funciona"

  TAREA-11.2.08:
    Nombre: "Implementar index.ts para realtime"
    Acción: "Exports públicos"
    Responsable: Antigravity
    Criterio de Éxito: "Exports funcionan"

  ---
  SUBCAJA 11.3: RECORDATORIOS Y ALARMAS

  Sistema de Recordatorios Programados

  Archivos a Crear

  Ruta: /src/lib/reminders/
  ├── index.ts
  ├── types.ts
  ├── constants.ts
  ├── reminder-service.ts
  ├── scheduler.ts
  └── reminder-triggers.ts

  Ruta: /src/components/reminders/
  ├── ReminderSettings.tsx
  ├── ReminderScheduleForm.tsx
  └── hooks/
      └── useReminders.ts

  Tamaño Estimado: ~700 líneas total
  Tiempo de Generación: 50-65 minutos

  Estructura del Módulo

  /src/lib/reminders/
  │
  ├── 📄 types.ts
  │   │
  │   ├── ReminderType (enum)
  │   │   ├── TASK_REMINDER = 'task_reminder'
  │   │   ├── JUDGEMENT_WARNING = 'judgement_warning'
  │   │   ├── MORNING_MOTIVATION = 'morning_motivation'
  │   │   ├── EVENING_REVIEW = 'evening_review'
  │   │   ├── STREAK_PROTECTION = 'streak_protection'
  │   │   └── CUSTOM = 'custom'
  │   │
  │   ├── ReminderFrequency (enum)
  │   │   ├── ONCE = 'once'
  │   │   ├── DAILY = 'daily'
  │   │   ├── WEEKDAYS = 'weekdays'
  │   │   ├── WEEKENDS = 'weekends'
  │   │   └── CUSTOM = 'custom'
  │   │
  │   ├── Reminder (interface)
  │   │   ├── id: string
  │   │   ├── userId: string
  │   │   ├── type: ReminderType
  │   │   ├── title: string
  │   │   ├── message: string
  │   │   ├── scheduledTime: string  // "HH:mm"
  │   │   ├── frequency: ReminderFrequency
  │   │   ├── daysOfWeek?: number[] // 0-6, domingo-sábado
  │   │   ├── enabled: boolean
  │   │   ├── lastTriggered?: Date
  │   │   ├── nextTrigger?: Date
  │   │   └── channels: NotificationChannel[]
  │   │
  │   └── ReminderSchedule (interface)
  │       ├── morningTime: string
  │       ├── eveningTime: string
  │       ├── judgementWarningHours: number[]
  │       └── customReminders: Reminder[]
  │
  ├── 📄 constants.ts
  │   │
  │   ├── DEFAULT_REMINDER_TIMES
  │   │   ├── MORNING: '07:00'
  │   │   ├── MIDDAY: '12:00'
  │   │   ├── AFTERNOON: '17:00'
  │   │   └── EVENING: '21:00'
  │   │
  │   ├── JUDGEMENT_WARNING_HOURS
  │   │   └── [3, 1] // 3 horas y 1 hora antes de medianoche
  │   │
  │   ├── REMINDER_TEMPLATES
  │   │   ├── MORNING_MOTIVATION
  │   │   │   ├── title: "🌅 ¡Buenos días, guerrero!"
  │   │   │   └── messages: [
  │   │   │         "Un nuevo día, una nueva oportunidad de ser mejor.",
  │   │   │         "Tu avatar cuenta contigo. ¡A por esas tareas!",
  │   │   │         "Día {{dayNumber}} te espera. ¡Hazlo épico!"
  │   │   │       ]
  │   │   │
  │   │   ├── TASK_REMINDER
  │   │   │   ├── title: "📋 Tienes tareas pendientes"
  │   │   │   └── message: "{{pendingCount}} tareas te esperan hoy."
  │   │   │
  │   │   ├── JUDGEMENT_WARNING
  │   │   │   ├── title: "⚠️ Judgement Night en {{hours}} horas"
  │   │   │   └── message: "Completado: {{completionRate}}%. ¡No pierdas tu racha!"
  │   │   │
  │   │   ├── EVENING_REVIEW
  │   │   │   ├── title: "🌙 Revisa tu día"
  │   │   │   └── message: "Has completado {{completedCount}}/{{totalCount}} tareas."
  │   │   │
  │   │   └── STREAK_PROTECTION
  │   │       ├── title: "🔥 ¡Protege tu racha!"
  │   │       └── message: "{{streakDays}} días en juego. Completa tus tareas."
  │   │
  │   └── DEFAULT_SCHEDULE: ReminderSchedule
  │
  ├── 📄 reminder-service.ts
  │   │
  │   ├── class ReminderService
  │   │   │
  │   │   ├── async getSchedule(userId: string): Promise<ReminderSchedule>
  │   │   │
  │   │   ├── async updateSchedule(
  │   │   │     userId: string,
  │   │   │     schedule: Partial<ReminderSchedule>
  │   │   │   ): Promise<ReminderSchedule>
  │   │   │
  │   │   ├── async getReminders(userId: string): Promise<Reminder[]>
  │   │   │
  │   │   ├── async createReminder(
  │   │   │     userId: string,
  │   │   │     reminder: Omit<Reminder, 'id' | 'userId'>
  │   │   │   ): Promise<Reminder>
  │   │   │
  │   │   ├── async updateReminder(
  │   │   │     reminderId: string,
  │   │   │     updates: Partial<Reminder>
  │   │   │   ): Promise<Reminder>
  │   │   │
  │   │   ├── async deleteReminder(reminderId: string): Promise<void>
  │   │   │
  │   │   ├── async toggleReminder(
  │   │   │     reminderId: string,
  │   │   │     enabled: boolean
  │   │   │   ): Promise<void>
  │   │   │
  │   │   └── async getUpcomingReminders(
  │   │       userId: string,
  │   │       withinHours: number
  │   │     ): Promise<Reminder[]>
  │   │
  │   └── export const reminderService = new ReminderService()
  │
  ├── 📄 scheduler.ts
  │   │
  │   ├── function calculateNextTrigger(
  │   │     scheduledTime: string,
  │   │     frequency: ReminderFrequency,
  │   │     daysOfWeek?: number[],
  │   │     timezone?: string
  │   │   ): Date
  │   │
  │   ├── function isTimeToTrigger(
  │   │     reminder: Reminder,
  │   │     currentTime: Date,
  │   │     toleranceMinutes: number
  │   │   ): boolean
  │   │
  │   ├── function getDueReminders(
  │   │     reminders: Reminder[],
  │   │     currentTime: Date
  │   │   ): Reminder[]
  │   │
  │   └── function formatTimeForTimezone(
  │       time: string,
  │       fromTimezone: string,
  │       toTimezone: string
  │     ): string
  │
  └── 📄 reminder-triggers.ts
      │
      ├── // Estas funciones son llamadas por Supabase Edge Functions o cron jobs
      │
      ├── async function triggerMorningMotivation(userId: string): Promise<void>
      │   ├── Obtiene estado actual del usuario
      │   ├── Genera mensaje personalizado
      │   └── Crea notificación
      │
      ├── async function triggerTaskReminder(userId: string): Promise<void>
      │   ├── Obtiene tareas pendientes
      │   ├── Si hay pendientes, crea recordatorio
      │   └── Envía por canales configurados
      │
      ├── async function triggerJudgementWarning(
      │     userId: string,
      │     hoursRemaining: number
      │   ): Promise<void>
      │   ├── Calcula completion rate actual
      │   ├── Genera mensaje urgente
      │   └── Envía notificación de alta prioridad
      │
      ├── async function triggerEveningReview(userId: string): Promise<void>
      │   ├── Resume el día
      │   └── Prepara para Judgement Night
      │
      └── async function triggerStreakProtection(userId: string): Promise<void>
          ├── Si racha > 0 y completion < 80%
          └── Envía recordatorio urgente

  Tareas Atómicas para 11.3 Recordatorios y Alarmas

  TAREA-11.3.01:
    Nombre: "Crear estructura para reminders"
    Acción: "Crear directorios y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p src/lib/reminders
      touch src/lib/reminders/{index,types,constants,reminder-service,scheduler,reminder-triggers}.ts

      mkdir -p src/components/reminders/hooks
      touch src/components/reminders/{ReminderSettings,ReminderScheduleForm}.tsx
      touch src/components/reminders/hooks/useReminders.ts
    Criterio de Éxito: "Archivos existen"

  TAREA-11.3.02:
    Nombre: "Implementar types.ts para reminders"
    Acción: "Definir tipos de recordatorios"
    Responsable: Antigravity
    Criterio de Éxito: "Tipos compilan"

  TAREA-11.3.03:
    Nombre: "Implementar constants.ts para reminders"
    Acción: "Templates y configuración por defecto"
    Responsable: Antigravity
    Criterio de Éxito: "Constantes exportan"

  TAREA-11.3.04:
    Nombre: "Implementar reminder-service.ts"
    Acción: "CRUD de recordatorios"
    Responsable: Antigravity
    Criterio de Éxito: "Servicio funciona con Supabase"

  TAREA-11.3.05:
    Nombre: "Implementar scheduler.ts"
    Acción: "Lógica de programación"
    Responsable: Antigravity
    Criterio de Éxito: "Cálculos de tiempo correctos"

  TAREA-11.3.06:
    Nombre: "Implementar reminder-triggers.ts"
    Acción: "Funciones de disparo"
    Responsable: Antigravity
    Criterio de Éxito: "Triggers crean notificaciones"

  TAREA-11.3.07:
    Nombre: "Implementar ReminderSettings.tsx"
    Acción: "UI de configuración de recordatorios"
    Responsable: Antigravity
    Criterio de Éxito: "Componente renderiza"

  TAREA-11.3.08:
    Nombre: "Implementar ReminderScheduleForm.tsx"
    Acción: "Formulario para crear/editar recordatorios"
    Responsable: Antigravity
    Criterio de Éxito: "Formulario funciona"

  TAREA-11.3.09:
    Nombre: "Crear tabla reminders en Supabase"
    Acción: "Migración SQL"
    Responsable: Antigravity
    Prompt para Antigravity: |
      CREATE TABLE reminders (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
        type TEXT NOT NULL,
        title TEXT NOT NULL,
        message TEXT NOT NULL,
        scheduled_time TIME NOT NULL,
        frequency TEXT NOT NULL DEFAULT 'daily',
        days_of_week INTEGER[],
        enabled BOOLEAN DEFAULT true,
        channels TEXT[] DEFAULT ARRAY['push', 'in_app'],
        last_triggered TIMESTAMPTZ,
        next_trigger TIMESTAMPTZ,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE INDEX idx_reminders_user ON reminders(user_id);
      CREATE INDEX idx_reminders_next ON reminders(next_trigger) WHERE enabled = true;

      -- RLS policies
    Criterio de Éxito: "Tabla creada"

  ---
  SUBCAJA 11.4: PUSH NOTIFICATIONS (PWA)

  Notificaciones del Sistema Operativo

  Archivos a Crear

  Ruta: /src/lib/push/
  ├── index.ts
  ├── types.ts
  ├── push-service.ts
  ├── subscription-manager.ts
  └── service-worker-push.ts

  Ruta: /public/
  └── sw-push.js                 (Service Worker para push)

  Ruta: /src/components/push/
  ├── PushPermissionBanner.tsx
  ├── PushSettings.tsx
  └── hooks/
      └── usePushNotifications.ts

  Tamaño Estimado: ~800 líneas total
  Tiempo de Generación: 60-75 minutos

  Estructura del Módulo

  /src/lib/push/
  │
  ├── 📄 types.ts
  │   │
  │   ├── PushPermissionState (type)
  │   │   └── 'default' | 'granted' | 'denied'
  │   │
  │   ├── PushSubscriptionState (interface)
  │   │   ├── isSupported: boolean
  │   │   ├── permission: PushPermissionState
  │   │   ├── subscription: PushSubscription | null
  │   │   └── isSubscribed: boolean
  │   │
  │   ├── PushPayload (interface)
  │   │   ├── title: string
  │   │   ├── body: string
  │   │   ├── icon?: string
  │   │   ├── badge?: string
  │   │   ├── image?: string
  │   │   ├── tag?: string
  │   │   ├── data?: {
  │   │   │     url?: string
  │   │   │     notificationId?: string
  │   │   │     type?: NotificationType
  │   │   │   }
  │   │   ├── actions?: Array<{
  │   │   │     action: string
  │   │   │     title: string
  │   │   │     icon?: string
  │   │   │   }>
  │   │   └── requireInteraction?: boolean
  │   │
  │   └── ServiceWorkerMessage (interface)
  │       ├── type: 'NOTIFICATION_CLICK' | 'NOTIFICATION_CLOSE' | 'PUSH_RECEIVED'
  │       ├── payload: unknown
  │       └── timestamp: number
  │
  ├── 📄 push-service.ts
  │   │
  │   ├── class PushService
  │   │   │
  │   │   ├── private vapidPublicKey: string
  │   │   │
  │   │   ├── async checkSupport(): Promise<boolean>
  │   │   │   ├── Verifica 'serviceWorker' in navigator
  │   │   │   ├── Verifica 'PushManager' in window
  │   │   │   └── Verifica 'Notification' in window
  │   │   │
  │   │   ├── async getPermissionState(): Promise<PushPermissionState>
  │   │   │
  │   │   ├── async requestPermission(): Promise<PushPermissionState>
  │   │   │   └── Pide permiso al usuario
  │   │   │
  │   │   ├── async getSubscription(): Promise<PushSubscription | null>
  │   │   │   └── Obtiene suscripción existente
  │   │   │
  │   │   ├── async subscribe(): Promise<PushSubscription>
  │   │   │   ├── Registra service worker si no existe
  │   │   │   ├── Obtiene suscripción push
  │   │   │   ├── Envía a backend para guardar
  │   │   │   └── Retorna suscripción
  │   │   │
  │   │   ├── async unsubscribe(): Promise<void>
  │   │   │   ├── Cancela suscripción local
  │   │   │   └── Notifica al backend
  │   │   │
  │   │   ├── async sendTestNotification(): Promise<void>
  │   │   │   └── Envía notificación de prueba
  │   │   │
  │   │   └── async getSubscriptionState(): Promise<PushSubscriptionState>
  │   │
  │   └── export const pushService = new PushService()
  │
  ├── 📄 subscription-manager.ts
  │   │
  │   ├── async function saveSubscription(
  │   │     userId: string,
  │   │     subscription: PushSubscription
  │   │   ): Promise<void>
  │   │   └── Guarda en tabla push_subscriptions
  │   │
  │   ├── async function deleteSubscription(
  │   │     userId: string,
  │   │     endpoint: string
  │   │   ): Promise<void>
  │   │
  │   ├── async function getUserSubscriptions(
  │   │     userId: string
  │   │   ): Promise<PushSubscription[]>
  │   │
  │   └── async function sendPushToUser(
  │       userId: string,
  │       payload: PushPayload
  │     ): Promise<{ sent: number, failed: number }>
  │       ├── Obtiene todas las suscripciones del usuario
  │       ├── Envía a cada una
  │       └── Limpia suscripciones inválidas
  │
  └── 📄 service-worker-push.ts
      │
      └── // Código que se incluirá en el service worker
          │
          ├── self.addEventListener('push', (event) => {...})
          │   ├── Parsea payload
          │   ├── Muestra notificación nativa
          │   └── Registra en analytics
          │
          ├── self.addEventListener('notificationclick', (event) => {...})
          │   ├── Cierra notificación
          │   ├── Abre URL si hay data.url
          │   └── Envía mensaje al cliente
          │
          └── self.addEventListener('notificationclose', (event) => {...})
              └── Registra cierre para analytics

  /public/sw-push.js
  │
  └── // Service Worker compilado
      ├── Handlers de push
      ├── Handlers de notification click
      ├── Cache estratégico (opcional)
      └── Background sync (opcional)

  Tareas Atómicas para 11.4 Push Notifications

  TAREA-11.4.01:
    Nombre: "Crear estructura para push"
    Acción: "Crear directorios y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p src/lib/push
      touch src/lib/push/{index,types,push-service,subscription-manager,service-worker-push}.ts

      mkdir -p src/components/push/hooks
      touch src/components/push/{PushPermissionBanner,PushSettings}.tsx
      touch src/components/push/hooks/usePushNotifications.ts

      touch public/sw-push.js
    Criterio de Éxito: "Archivos existen"

  TAREA-11.4.02:
    Nombre: "Implementar types.ts para push"
    Acción: "Definir tipos de push notifications"
    Responsable: Antigravity
    Criterio de Éxito: "Tipos compilan"

  TAREA-11.4.03:
    Nombre: "Implementar push-service.ts"
    Acción: "Servicio de push notifications"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Implementa PushService con:

      1. checkSupport() - verifica compatibilidad del navegador
      2. getPermissionState() - estado actual del permiso
      3. requestPermission() - solicitar permiso al usuario
      4. subscribe() - crear suscripción push
      5. unsubscribe() - cancelar suscripción
      6. getSubscriptionState() - estado completo

      Usa la Web Push API estándar.
      VAPID public key viene de env: NEXT_PUBLIC_VAPID_PUBLIC_KEY
    Criterio de Éxito: "Suscripción funciona"

  TAREA-11.4.04:
    Nombre: "Implementar subscription-manager.ts"
    Acción: "Gestión de suscripciones en DB"
    Responsable: Antigravity
    Criterio de Éxito: "Suscripciones se guardan/eliminan"

  TAREA-11.4.05:
    Nombre: "Implementar service worker sw-push.js"
    Acción: "Service worker para push"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /public/sw-push.js:

      // Push event handler
      self.addEventListener('push', function(event) {
        const data = event.data?.json() ?? {};

        const options = {
          body: data.body || 'Nueva notificación',
          icon: data.icon || '/icons/icon-192x192.png',
          badge: data.badge || '/icons/badge-72x72.png',
          image: data.image,
          tag: data.tag || 'default',
          data: data.data || {},
          actions: data.actions || [],
          requireInteraction: data.requireInteraction || false,
          vibrate: [200, 100, 200]
        };

        event.waitUntil(
          self.registration.showNotification(data.title || 'METAMEN100', options)
        );
      });

      // Notification click handler
      self.addEventListener('notificationclick', function(event) {
        event.notification.close();

        const url = event.notification.data?.url || '/';

        event.waitUntil(
          clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then(clientList => {
              // Si ya hay una ventana abierta, enfocarla
              for (const client of clientList) {
                if (client.url === url && 'focus' in client) {
                  return client.focus();
                }
              }
              // Si no, abrir nueva
              return clients.openWindow(url);
            })
        );
      });
    Criterio de Éxito: "Service worker funciona"

  TAREA-11.4.06:
    Nombre: "Implementar PushPermissionBanner.tsx"
    Acción: "Banner para solicitar permiso"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Componente que:
      - Se muestra solo si permiso = 'default'
      - Explica beneficios de las notificaciones
      - Botón "Activar notificaciones"
      - Botón "Ahora no" (dismiss temporal)
      - Animación de entrada
      - No mostrar si usuario ya rechazó permanentemente
    Criterio de Éxito: "Banner funciona"

  TAREA-11.4.07:
    Nombre: "Implementar usePushNotifications hook"
    Acción: "Hook para gestión de push"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Hook que retorna:
      {
        isSupported: boolean,
        permission: PushPermissionState,
        isSubscribed: boolean,
        isLoading: boolean,
        error: Error | null,
        requestPermission: () => Promise<void>,
        subscribe: () => Promise<void>,
        unsubscribe: () => Promise<void>,
        sendTest: () => Promise<void>
      }
    Criterio de Éxito: "Hook funciona"

  TAREA-11.4.08:
    Nombre: "Crear tabla push_subscriptions"
    Acción: "Migración SQL"
    Responsable: Antigravity
    Prompt para Antigravity: |
      CREATE TABLE push_subscriptions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
        endpoint TEXT NOT NULL UNIQUE,
        p256dh TEXT NOT NULL,
        auth TEXT NOT NULL,
        user_agent TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        last_used TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE INDEX idx_push_subscriptions_user ON push_subscriptions(user_id);
      CREATE INDEX idx_push_subscriptions_endpoint ON push_subscriptions(endpoint);
    Criterio de Éxito: "Tabla creada"

  TAREA-11.4.09:
    Nombre: "Configurar VAPID keys"
    Acción: "Generar y configurar claves VAPID"
    Responsable: Antigravity
    Prompt para Antigravity: |
      1. Generar VAPID keys con web-push:
         npx web-push generate-vapid-keys

      2. Agregar a .env.local:
         NEXT_PUBLIC_VAPID_PUBLIC_KEY=...
         VAPID_PRIVATE_KEY=...
         VAPID_SUBJECT=mailto:soporte@metamen100.com

      3. Agregar a Supabase Edge Function secrets
    Criterio de Éxito: "Keys configuradas"

  ---
  SUBCAJA 11.5: EVENTOS DEL SISTEMA

  Emisión y Manejo de Eventos Internos

  Archivos a Crear

  Ruta: /src/lib/events/
  ├── index.ts
  ├── types.ts
  ├── event-emitter.ts
  ├── event-handlers.ts
  └── hooks/
      └── useSystemEvents.ts

  Tamaño Estimado: ~500 líneas total
  Tiempo de Generación: 35-45 minutos

  Estructura del Módulo

  /src/lib/events/
  │
  ├── 📄 types.ts
  │   │
  │   ├── SystemEvent (enum)
  │   │   ├── // Tareas
  │   │   ├── TASK_STARTED = 'task:started'
  │   │   ├── TASK_COMPLETED = 'task:completed'
  │   │   ├── TASK_SKIPPED = 'task:skipped'
  │   │   ├── TASK_FAILED = 'task:failed'
  │   │   │
  │   │   ├── // Día
  │   │   ├── DAY_STARTED = 'day:started'
  │   │   ├── DAY_PROGRESS_UPDATE = 'day:progress'
  │   │   ├── JUDGEMENT_STARTED = 'judgement:started'
  │   │   ├── JUDGEMENT_COMPLETED = 'judgement:completed'
  │   │   │
  │   │   ├── // Progreso
  │   │   ├── LEVEL_UP = 'level:up'
  │   │   ├── STREAK_UPDATED = 'streak:updated'
  │   │   ├── STREAK_MILESTONE = 'streak:milestone'
  │   │   ├── STREAK_BROKEN = 'streak:broken'
  │   │   ├── VECTORS_UPDATED = 'vectors:updated'
  │   │   │
  │   │   ├── // Salud
  │   │   ├── HEALTH_CHANGED = 'health:changed'
  │   │   ├── HEALTH_LOW = 'health:low'
  │   │   ├── AVATAR_DIED = 'avatar:died'
  │   │   ├── AVATAR_RESURRECTED = 'avatar:resurrected'
  │   │   │
  │   │   ├── // Economía
  │   │   ├── BTC_EARNED = 'btc:earned'
  │   │   ├── BTC_SPENT = 'btc:spent'
  │   │   ├── PURCHASE_COMPLETED = 'purchase:completed'
  │   │   │
  │   │   ├── // Avatar
  │   │   ├── AVATAR_GENERATION_STARTED = 'avatar:generation:started'
  │   │   ├── AVATAR_GENERATION_COMPLETED = 'avatar:generation:completed'
  │   │   ├── AVATAR_GENERATION_FAILED = 'avatar:generation:failed'
  │   │   │
  │   │   ├── // Suscripción
  │   │   ├── SUBSCRIPTION_ACTIVATED = 'subscription:activated'
  │   │   ├── SUBSCRIPTION_CANCELLED = 'subscription:cancelled'
  │   │   ├── SUBSCRIPTION_EXPIRED = 'subscription:expired'
  │   │   │
  │   │   └── // Sistema
  │   │   └── ERROR_OCCURRED = 'error:occurred'
  │   │
  │   ├── EventPayload<E extends SystemEvent> (type)
  │   │   └── Mapeo de evento a su payload tipado
  │   │
  │   └── EventHandler<E extends SystemEvent> (type)
  │       └── (payload: EventPayload<E>) => void | Promise<void>
  │
  ├── 📄 event-emitter.ts
  │   │
  │   ├── class SystemEventEmitter
  │   │   │
  │   │   ├── private listeners: Map<SystemEvent, Set<EventHandler>>
  │   │   │
  │   │   ├── on<E extends SystemEvent>(
  │   │   │     event: E,
  │   │   │     handler: EventHandler<E>
  │   │   │   ): () => void
  │   │   │   └── Retorna función para desuscribir
  │   │   │
  │   │   ├── once<E extends SystemEvent>(
  │   │   │     event: E,
  │   │   │     handler: EventHandler<E>
  │   │   │   ): void
  │   │   │   └── Handler que se ejecuta una vez
  │   │   │
  │   │   ├── off<E extends SystemEvent>(
  │   │   │     event: E,
  │   │   │     handler: EventHandler<E>
  │   │   │   ): void
  │   │   │
  │   │   ├── emit<E extends SystemEvent>(
  │   │   │     event: E,
  │   │   │     payload: EventPayload<E>
  │   │   │   ): void
  │   │   │   ├── Ejecuta todos los handlers
  │   │   │   └── Log a console en development
  │   │   │
  │   │   ├── emitAsync<E extends SystemEvent>(
  │   │   │     event: E,
  │   │   │     payload: EventPayload<E>
  │   │   │   ): Promise<void>
  │   │   │   └── Espera a que terminen todos los handlers
  │   │   │
  │   │   └── removeAllListeners(event?: SystemEvent): void
  │   │
  │   └── export const systemEvents = new SystemEventEmitter()
  │
  ├── 📄 event-handlers.ts
  │   │
  │   ├── // Handlers que conectan eventos con acciones
  │   │
  │   ├── function setupEventHandlers(): void
  │   │   │
  │   │   ├── // Cuando completa tarea → notificar
  │   │   ├── systemEvents.on(TASK_COMPLETED, async (payload) => {
  │   │   │     await notificationService.create(
  │   │   │       payload.userId,
  │   │   │       NotificationType.TASK_COMPLETED,
  │   │   │       { taskName: payload.taskName, ... }
  │   │   │     );
  │   │   │   });
  │   │   │
  │   │   ├── // Cuando sube de nivel → notificar + analytics
  │   │   ├── systemEvents.on(LEVEL_UP, async (payload) => {
  │   │   │     await notificationService.create(...);
  │   │   │     analytics.track('level_up', payload);
  │   │   │   });
  │   │   │
  │   │   ├── // Cuando salud baja → notificar si crítico
  │   │   ├── systemEvents.on(HEALTH_CHANGED, async (payload) => {
  │   │   │     if (payload.newHealth <= 3) {
  │   │   │       await notificationService.create(
  │   │   │         payload.userId,
  │   │   │         NotificationType.HEALTH_LOW,
  │   │   │         { heartsRemaining: payload.newHealth }
  │   │   │       );
  │   │   │     }
  │   │   │   });
  │   │   │
  │   │   └── // ... más handlers
  │   │
  │   └── // Llamar en app initialization
  │
  └── 📄 hooks/useSystemEvents.ts
      │
      ├── function useSystemEvent<E extends SystemEvent>(
      │     event: E,
      │     handler: EventHandler<E>,
      │     deps?: DependencyList
      │   ): void
      │   └── Suscribe/desuscribe automáticamente
      │
      └── function useEventEmitter(): {
            emit: <E>(event: E, payload: EventPayload<E>) => void
          }

  Tareas Atómicas para 11.5 Eventos del Sistema

  TAREA-11.5.01:
    Nombre: "Crear estructura para events"
    Acción: "Crear directorios y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p src/lib/events/hooks
      touch src/lib/events/{index,types,event-emitter,event-handlers}.ts
      touch src/lib/events/hooks/useSystemEvents.ts
    Criterio de Éxito: "Archivos existen"

  TAREA-11.5.02:
    Nombre: "Implementar types.ts para events"
    Acción: "Definir todos los eventos del sistema"
    Responsable: Antigravity
    Criterio de Éxito: "Tipos compilan"

  TAREA-11.5.03:
    Nombre: "Implementar event-emitter.ts"
    Acción: "Emisor de eventos tipado"
    Responsable: Antigravity
    Criterio de Éxito: "Emitter funciona"

  TAREA-11.5.04:
    Nombre: "Implementar event-handlers.ts"
    Acción: "Conectar eventos con acciones"
    Responsable: Antigravity
    Criterio de Éxito: "Handlers registrados"

  TAREA-11.5.05:
    Nombre: "Implementar useSystemEvents hook"
    Acción: "Hook para React"
    Responsable: Antigravity
    Criterio de Éxito: "Hook funciona"

  TAREA-11.5.06:
    Nombre: "Integrar eventos en Server Actions"
    Acción: "Emitir eventos desde actions"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Modificar Server Actions existentes para emitir eventos:

      1. completeTask action → emit TASK_COMPLETED
      2. processJudgement action → emit JUDGEMENT_COMPLETED
      3. purchaseItem action → emit PURCHASE_COMPLETED
      4. etc.

      Los eventos permiten desacoplar la lógica de notificaciones
      de la lógica de negocio.
    Criterio de Éxito: "Eventos se emiten correctamente"

  ---
  SUBCAJA 11.6: ESTADO EN TIEMPO REAL

  Sincronización de Estado del Usuario

  Archivos a Crear

  Ruta: /src/lib/realtime-state/
  ├── index.ts
  ├── types.ts
  ├── user-state-sync.ts
  └── hooks/
      ├── useRealtimeUserState.ts
      ├── useRealtimeVectors.ts
      ├── useRealtimeHealth.ts
      └── useRealtimeWallet.ts

  Tamaño Estimado: ~550 líneas total
  Tiempo de Generación: 40-50 minutos

  Estructura del Módulo

  /src/lib/realtime-state/
  │
  ├── 📄 types.ts
  │   │
  │   ├── RealtimeUserState (interface)
  │   │   ├── vectors: VectorState
  │   │   ├── health: HealthState
  │   │   ├── wallet: WalletState
  │   │   ├── streak: number
  │   │   ├── level: number
  │   │   ├── currentDay: number
  │   │   ├── todaysTasks: DailyTask[]
  │   │   ├── completionRate: number
  │   │   └── lastUpdated: Date
  │   │
  │   ├── StateUpdateEvent (interface)
  │   │   ├── type: 'vectors' | 'health' | 'wallet' | 'streak' | 'tasks'
  │   │   ├── previousValue: unknown
  │   │   ├── newValue: unknown
  │   │   └── timestamp: Date
  │   │
  │   └── StateSyncOptions (interface)
  │       ├── enablePolling: boolean
  │       ├── pollingInterval: number
  │       ├── enableRealtime: boolean
  │       └── onStateChange?: (event: StateUpdateEvent) => void
  │
  ├── 📄 user-state-sync.ts
  │   │
  │   ├── class UserStateSync
  │   │   │
  │   │   ├── private userId: string
  │   │   ├── private state: RealtimeUserState
  │   │   ├── private listeners: Set<(state: RealtimeUserState) => void>
  │   │   ├── private pollingTimer?: NodeJS.Timeout
  │   │   ├── private realtimeChannel?: RealtimeChannel
  │   │   │
  │   │   ├── constructor(userId: string, options?: StateSyncOptions)
  │   │   │
  │   │   ├── async initialize(): Promise<void>
  │   │   │   ├── Carga estado inicial
  │   │   │   ├── Configura realtime
  │   │   │   └── Inicia polling si está habilitado
  │   │   │
  │   │   ├── getState(): RealtimeUserState
  │   │   │
  │   │   ├── subscribe(listener: (state: RealtimeUserState) => void): () => void
  │   │   │
  │   │   ├── async refresh(): Promise<void>
  │   │   │   └── Fuerza recarga del estado
  │   │   │
  │   │   ├── private handleRealtimeUpdate(payload: any): void
  │   │   │   ├── Actualiza estado local
  │   │   │   └── Notifica listeners
  │   │   │
  │   │   ├── private startPolling(): void
  │   │   │
  │   │   ├── private stopPolling(): void
  │   │   │
  │   │   └── destroy(): void
  │   │       └── Limpia suscripciones y timers
  │   │
  │   └── // Factory function
  │   └── function createUserStateSync(
  │       userId: string,
  │       options?: StateSyncOptions
  │     ): UserStateSync
  │
  └── 📄 hooks/
      │
      ├── useRealtimeUserState.ts
      │   │
      │   ├── function useRealtimeUserState(): {
      │   │     state: RealtimeUserState | null,
      │   │     isLoading: boolean,
      │   │     isConnected: boolean,
      │   │     error: Error | null,
      │   │     refresh: () => Promise<void>
      │   │   }
      │   │
      │   └── Hook principal que mantiene el estado sincronizado
      │
      ├── useRealtimeVectors.ts
      │   │
      │   ├── function useRealtimeVectors(): {
      │   │     vectors: VectorState | null,
      │   │     isLoading: boolean
      │   │   }
      │   │
      │   └── Hook especializado para vectores
      │
      ├── useRealtimeHealth.ts
      │   │
      │   ├── function useRealtimeHealth(): {
      │   │     health: HealthState | null,
      │   │     isLoading: boolean,
      │   │     isCritical: boolean
      │   │   }
      │   │
      │   └── Hook especializado para salud
      │
      └── useRealtimeWallet.ts
          │
          ├── function useRealtimeWallet(): {
          │     balance: number,
          │     isLoading: boolean,
          │     lastTransaction?: Transaction
          │   }
          │
          └── Hook especializado para wallet

  Tareas Atómicas para 11.6 Estado en Tiempo Real

  TAREA-11.6.01:
    Nombre: "Crear estructura para realtime-state"
    Acción: "Crear directorios y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p src/lib/realtime-state/hooks
      touch src/lib/realtime-state/{index,types,user-state-sync}.ts
      touch src/lib/realtime-state/hooks/{useRealtimeUserState,useRealtimeVectors,useRealtimeHealth,useRealtimeWallet}.ts
    Criterio de Éxito: "Archivos existen"

  TAREA-11.6.02:
    Nombre: "Implementar types.ts para realtime-state"
    Acción: "Definir tipos de estado"
    Responsable: Antigravity
    Criterio de Éxito: "Tipos compilan"

  TAREA-11.6.03:
    Nombre: "Implementar user-state-sync.ts"
    Acción: "Clase de sincronización"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Implementa UserStateSync que:

      1. Mantiene estado del usuario sincronizado
      2. Suscribe a cambios de Supabase Realtime
      3. Fallback a polling si realtime falla
      4. Notifica a listeners cuando hay cambios
      5. Maneja reconexión automática
      6. Optimiza actualizaciones (debounce)
    Criterio de Éxito: "Sync funciona"

  TAREA-11.6.04:
    Nombre: "Implementar useRealtimeUserState hook"
    Acción: "Hook principal de estado"
    Responsable: Antigravity
    Criterio de Éxito: "Hook retorna estado actualizado"

  TAREA-11.6.05:
    Nombre: "Implementar hooks especializados"
    Acción: "Hooks para vectores, health, wallet"
    Responsable: Antigravity
    Criterio de Éxito: "Hooks funcionan"

  TAREA-11.6.06:
    Nombre: "Integrar realtime state en Dashboard"
    Acción: "Usar hooks en componentes"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Actualizar Dashboard para usar hooks de realtime:

      1. VectorDisplay → useRealtimeVectors
      2. HealthDisplay → useRealtimeHealth
      3. WalletDisplay → useRealtimeWallet

      Esto hace que los valores se actualicen automáticamente
      cuando cambian en el backend.
    Criterio de Éxito: "Dashboard actualiza en tiempo real"

  ---
  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║                    📊 RESUMEN FINAL - CAJA 11                                        ║
  ║                                                                                      ║
  ╠══════════════════════════════════════════════════════════════════════════════════════╣
  ║                                                                                      ║
  ║  SUBCAJA 11.1: Sistema de Notificaciones  │ 13 tareas  │ ~1,200 líneas              ║
  ║  SUBCAJA 11.2: Supabase Realtime          │  8 tareas  │ ~600 líneas                ║
  ║  SUBCAJA 11.3: Recordatorios y Alarmas    │  9 tareas  │ ~700 líneas                ║
  ║  SUBCAJA 11.4: Push Notifications (PWA)   │  9 tareas  │ ~800 líneas                ║
  ║  SUBCAJA 11.5: Eventos del Sistema        │  6 tareas  │ ~500 líneas                ║
  ║  SUBCAJA 11.6: Estado en Tiempo Real      │  6 tareas  │ ~550 líneas                ║
  ║  ───────────────────────────────────────┼────────────┼─────────────────────────────║
  ║  TOTAL CAJA 11                            │ 51 tareas  │ ~4,350 líneas código       ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝

  ---
  ╔══════════════════════════════════════════════════════════════════════════════════════╗
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
  ║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
  ║  📦 CAJA 12: Observabilidad y Calidad     │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
  ║  📦 CAJA 13: Lanzamiento y Operaciones    │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
  ║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
  ║  TOTAL DESGLOSADO HASTA AHORA             │ 94 subcajas │ 637 tareas │ 11/13 CAJAS  ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝