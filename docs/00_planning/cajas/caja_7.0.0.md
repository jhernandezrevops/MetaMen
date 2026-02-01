📦 CAJA 07: ARSENAL DE HERRAMIENTAS
Desglose Atómico Completo

Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 07: ARSENAL DE HERRAMIENTAS                               ║
║                                                                                      ║
║    "Las armas que transforman la intención en acción medible"                        ║
║                                                                                      ║
║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
║    │                                                                            │   ║
║    │   🔧 07.1 Arquitectura    🔧 07.2 Biblioteca     🔧 07.3 Templo           │   ║
║    │   del Arsenal            de Poder (Lectura)    del Hierro (Gym)          │   ║
║    │                                                                            │   ║
║    │   🔧 07.4 Cámara         🔧 07.5 Bitácora       🔧 07.6 Vitalidad         │   ║
║    │   de Meditación          de Guerra (Journal)   Sexual (Kegel)            │   ║
║    │                                                                            │   ║
║    │   🔧 07.7 Escultor       🔧 07.8 Crea tu        🔧 07.9 Movilidad         │   ║
║    │   Facial (Mewing)        Hipnosis [PREMIUM]    Táctica (Stretch)         │   ║
║    │                                                                            │   ║
║    │   🔧 07.10 Focus                                                          │   ║
║    │   Chamber (Pomodoro)                                                      │   ║
║    │                                                                            │   ║
║    └────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                      ║
║    Responsable: Claude (Diseño) → Antigravity (Implementación)                      ║
║    Entregables: 9 herramientas funcionales + arquitectura compartida                ║
║    Tiempo Estimado: 3-4 días de implementación                                      ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ÍNDICE DE DESGLOSE ATÓMICO - CAJA 07

SUBCAJA 07.1: Arquitectura del Arsenal
SUBCAJA 07.2: Biblioteca de Poder (Lectura)
SUBCAJA 07.3: Templo del Hierro (Gym)
SUBCAJA 07.4: Cámara de Meditación
SUBCAJA 07.5: Bitácora de Guerra (Journal)
SUBCAJA 07.6: Vitalidad Sexual (Kegel)
SUBCAJA 07.7: Escultor Facial (Mewing)
SUBCAJA 07.8: Crea tu Hipnosis [PREMIUM]
SUBCAJA 07.9: Movilidad Táctica (Stretching)
SUBCAJA 07.10: Focus Chamber (Pomodoro)


MAPEO HERRAMIENTAS → ARQUETIPOS → VECTORES
Copy╔════════════════════════════════════════════════════════════════════════════════════╗
║                     MAPEO HERRAMIENTAS → SISTEMA DE VECTORES                       ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║  HERRAMIENTA              │ TAREA(S)           │ ARQUETIPO      │ VECTOR          ║
║  ─────────────────────────┼────────────────────┼────────────────┼───────────────  ║
║  Biblioteca de Poder      │ reading            │ MENTAL         │ aura_lvl        ║
║  Templo del Hierro        │ strength, cardio   │ FÍSICO         │ muscle/fat_lvl  ║
║  Cámara de Meditación     │ meditation         │ MENTAL         │ aura_lvl        ║
║  Bitácora de Guerra       │ journal            │ PRODUCTIVIDAD  │ wealth_lvl      ║
║  Vitalidad Sexual         │ kegel              │ CARA           │ face_lvl        ║
║  Escultor Facial          │ facial             │ CARA           │ face_lvl        ║
║  Crea tu Hipnosis         │ (auxiliar premium) │ MENTAL         │ aura_lvl        ║
║  Movilidad Táctica        │ posture            │ CARA           │ face_lvl        ║
║  Focus Chamber            │ focus_work         │ PRODUCTIVIDAD  │ wealth_lvl      ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝

SUBCAJA 07.1: Arquitectura del Arsenal
Estructura Compartida de Herramientas
Archivos a Crear
CopyRutas:
├── /src/app/(dashboard)/tools/layout.tsx
├── /src/app/(dashboard)/tools/page.tsx
├── /src/components/tools/ToolCard.tsx
├── /src/components/tools/ToolHeader.tsx
├── /src/components/tools/ToolProgress.tsx
├── /src/components/tools/ToolTimer.tsx
├── /src/components/tools/ToolAudioPlayer.tsx
├── /src/components/tools/ToolVideoPlayer.tsx
├── /src/lib/tools/types.ts
├── /src/lib/tools/constants.ts
├── /src/lib/tools/hooks/useToolSession.ts
├── /src/lib/tools/hooks/useToolProgress.ts
├── /src/lib/tools/hooks/useToolTimer.ts
├── /src/actions/tools/saveProgress.ts
├── /src/actions/tools/completeSession.ts

Tiempo de Generación: 30-45 minutos
Estructura del Módulo
Copy07.1 Arquitectura del Arsenal
│
├── 1. TIPOS COMPARTIDOS (/lib/tools/types.ts)
│   │
│   ├── 1.1 ToolType (enum)
│   │   ├── 'library'      // Biblioteca de Poder
│   │   ├── 'gym'          // Templo del Hierro
│   │   ├── 'meditation'   // Cámara de Meditación
│   │   ├── 'journal'      // Bitácora de Guerra
│   │   ├── 'kegel'        // Vitalidad Sexual
│   │   ├── 'facial'       // Escultor Facial
│   │   ├── 'hypnosis'     // Crea tu Hipnosis
│   │   ├── 'stretching'   // Movilidad Táctica
│   │   └── 'focus'        // Focus Chamber
│   │
│   ├── 1.2 ToolSession
│   │   ├── id: string
│   │   ├── toolType: ToolType
│   │   ├── startedAt: Date
│   │   ├── completedAt: Date | null
│   │   ├── durationSeconds: number
│   │   ├── metadata: Record<string, unknown>
│   │   └── status: 'active' | 'completed' | 'abandoned'
│   │
│   ├── 1.3 ToolProgress
│   │   ├── userId: string
│   │   ├── toolType: ToolType
│   │   ├── itemId: string | null
│   │   ├── progressPercent: number
│   │   ├── currentPosition: number
│   │   ├── totalDuration: number
│   │   └── lastAccessedAt: Date
│   │
│   └── 1.4 ToolCompletionResult
│       ├── success: boolean
│       ├── taskId: string | null
│       ├── btcEarned: number
│       └── vectorsUpdated: VectorChange[]
│
├── 2. CONSTANTES (/lib/tools/constants.ts)
│   │
│   ├── 2.1 TOOL_CONFIG
│   │   └── [Configuración por herramienta]
│   │
│   ├── 2.2 TOOL_ROUTES
│   │   ├── library: '/tools/library'
│   │   ├── gym: '/tools/gym'
│   │   ├── meditation: '/tools/meditation'
│   │   ├── journal: '/tools/journal'
│   │   ├── kegel: '/tools/kegel'
│   │   ├── facial: '/tools/facial'
│   │   ├── hypnosis: '/tools/hypnosis'
│   │   ├── stretching: '/tools/stretching'
│   │   └── focus: '/tools/focus'
│   │
│   └── 2.3 TOOL_ICONS
│       └── [Mapeo de iconos Lucide por herramienta]
│
├── 3. HOOKS COMPARTIDOS
│   │
│   ├── 3.1 useToolSession
│   │   ├── startSession(toolType, metadata)
│   │   ├── endSession(completed: boolean)
│   │   ├── getActiveSession()
│   │   └── sessionDuration (computed)
│   │
│   ├── 3.2 useToolProgress
│   │   ├── loadProgress(toolType, itemId)
│   │   ├── saveProgress(progressData)
│   │   ├── progress (state)
│   │   └── isLoading (state)
│   │
│   └── 3.3 useToolTimer
│       ├── start()
│       ├── pause()
│       ├── reset()
│       ├── elapsed (state)
│       ├── isRunning (state)
│       └── formatTime(seconds)
│
├── 4. COMPONENTES COMPARTIDOS
│   │
│   ├── 4.1 ToolCard
│   │   ├── Props: { tool: ToolConfig, onClick }
│   │   ├── Muestra: Icono, nombre, descripción, estado
│   │   └── Estilo: Card con hover effect
│   │
│   ├── 4.2 ToolHeader
│   │   ├── Props: { title, subtitle, backUrl }
│   │   ├── Muestra: Título, botón volver
│   │   └── Estilo: Header fijo
│   │
│   ├── 4.3 ToolProgress
│   │   ├── Props: { current, total, label }
│   │   ├── Muestra: Barra de progreso con %
│   │   └── Estilo: Barra horizontal con glow
│   │
│   ├── 4.4 ToolTimer
│   │   ├── Props: { duration?, onComplete, autoStart }
│   │   ├── Modes: countdown | stopwatch
│   │   ├── Muestra: Tiempo en formato MM:SS
│   │   └── Estilo: Círculo animado
│   │
│   ├── 4.5 ToolAudioPlayer
│   │   ├── Props: { src, onProgress, onComplete }
│   │   ├── Features: Play/Pause, seek, volume
│   │   └── Estilo: Reproductor minimalista
│   │
│   └── 4.6 ToolVideoPlayer
│       ├── Props: { src, onProgress, onComplete }
│       ├── Features: Play/Pause, fullscreen
│       └── Estilo: Video con controles overlay
│
├── 5. SERVER ACTIONS COMPARTIDAS
│   │
│   ├── 5.1 saveToolProgress
│   │   ├── Input: { toolType, itemId?, progress }
│   │   ├── Action: Upsert en tool_progress
│   │   └── Output: { success, progress }
│   │
│   └── 5.2 completeToolSession
│       ├── Input: { toolType, sessionData }
│       ├── Action:
│       │   ├── 1. Validar sesión mínima
│       │   ├── 2. Buscar tarea asociada pendiente
│       │   ├── 3. Si existe, marcar completada
│       │   ├── 4. Otorgar BTC
│       │   └── 5. Actualizar vectores
│       └── Output: ToolCompletionResult
│
└── 6. PÁGINA ÍNDICE DEL ARSENAL
    │
    ├── 6.1 Layout (/tools/layout.tsx)
    │   └── Container con sidebar de herramientas
    │
    └── 6.2 Página Principal (/tools/page.tsx)
        ├── Grid de ToolCards
        └── Acceso rápido a cada herramienta
Tareas Atómicas para 07.1 Arquitectura
yamlCopyTAREA-07.1.1:
  Nombre: "Crear tipos compartidos de herramientas"
  Acción: "Crear /src/lib/tools/types.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el archivo /src/lib/tools/types.ts con:
    
    1. Enum ToolType con las 9 herramientas:
       'library', 'gym', 'meditation', 'journal', 'kegel', 
       'facial', 'hypnosis', 'stretching', 'focus'
    
    2. Interface ToolSession:
       - id: string
       - toolType: ToolType
       - startedAt: Date
       - completedAt: Date | null
       - durationSeconds: number
       - metadata: Record<string, unknown>
       - status: 'active' | 'completed' | 'abandoned'
    
    3. Interface ToolProgress:
       - userId: string
       - toolType: ToolType
       - itemId: string | null
       - progressPercent: number (0-100)
       - currentPosition: number
       - totalDuration: number
       - lastAccessedAt: Date
    
    4. Interface ToolCompletionResult:
       - success: boolean
       - taskId: string | null
       - btcEarned: number
       - vectorsUpdated: { vector: string, change: number }[]
    
    5. Interface ToolConfig:
       - type: ToolType
       - name: string
       - description: string
       - icon: string (nombre de icono Lucide)
       - route: string
       - archetype: 'mental' | 'cara' | 'productividad' | 'fisico'
       - vector: 'aura_lvl' | 'face_lvl' | 'wealth_lvl' | 'muscle_lvl' | 'fat_lvl'
       - isPremium: boolean
       - minDurationSeconds: number (para validar completado)
    
    Usar TypeScript estricto, exportar todos los tipos.

TAREA-07.1.2:
  Nombre: "Crear constantes de herramientas"
  Acción: "Crear /src/lib/tools/constants.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/tools/constants.ts con:
    
    1. TOOL_CONFIG: Record<ToolType, ToolConfig>
       Incluir todas las 9 herramientas con su configuración:
       
       - library: {
           name: "Biblioteca de Poder",
           description: "Conocimiento que transforma",
           icon: "BookOpen",
           route: "/tools/library",
           archetype: "mental",
           vector: "aura_lvl",
           isPremium: false,
           minDurationSeconds: 900 // 15 min
         }
       
       - gym: {
           name: "Templo del Hierro",
           description: "Forja tu físico",
           icon: "Dumbbell",
           route: "/tools/gym",
           archetype: "fisico",
           vector: "muscle_lvl",
           isPremium: false,
           minDurationSeconds: 1800 // 30 min
         }
       
       [Continuar con las 7 restantes siguiendo el patrón del cuestionario1]
    
    2. TOOL_ROUTES: Record<ToolType, string>
    
    3. TOOL_ICONS: Record<ToolType, LucideIcon>
    
    4. TOOL_COMPLETION_THRESHOLDS: Record<ToolType, number>
       // % mínimo para considerar completada (ej: 90 para audio)

TAREA-07.1.3:
  Nombre: "Crear hook useToolSession"
  Acción: "Crear /src/lib/tools/hooks/useToolSession.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el hook useToolSession que:
    
    1. Mantiene estado de sesión activa en memoria
    2. Guarda en localStorage para persistencia
    3. Expone:
       - startSession(toolType: ToolType, metadata?: Record<string, unknown>)
       - endSession(completed: boolean): Promise<ToolCompletionResult | null>
       - getActiveSession(): ToolSession | null
       - sessionDuration: number (segundos transcurridos)
       - isSessionActive: boolean
    
    4. useEffect para calcular duración cada segundo cuando hay sesión activa
    
    5. Cleanup al desmontar componente
    
    Usar Zustand para el estado si es necesario para compartir entre componentes.

TAREA-07.1.4:
  Nombre: "Crear hook useToolProgress"
  Acción: "Crear /src/lib/tools/hooks/useToolProgress.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el hook useToolProgress que:
    
    1. Carga progreso desde la DB via Server Action
    2. Guarda progreso con debounce (cada 5 segundos max)
    3. Expone:
       - loadProgress(toolType: ToolType, itemId?: string): Promise<void>
       - updateProgress(progressPercent: number, currentPosition: number): void
       - saveProgress(): Promise<void> (manual save)
       - progress: ToolProgress | null
       - isLoading: boolean
       - isSaving: boolean
    
    4. Auto-save al desmontar si hay cambios pendientes

TAREA-07.1.5:
  Nombre: "Crear hook useToolTimer"
  Acción: "Crear /src/lib/tools/hooks/useToolTimer.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el hook useToolTimer que:
    
    1. Soporta dos modos:
       - 'countdown': Cuenta regresiva desde duration hasta 0
       - 'stopwatch': Cuenta desde 0 hacia arriba
    
    2. Expone:
       - start(): void
       - pause(): void
       - reset(): void
       - setDuration(seconds: number): void (solo countdown)
       - elapsed: number (segundos)
       - remaining: number (solo countdown)
       - isRunning: boolean
       - isComplete: boolean (countdown llegó a 0)
       - progress: number (0-100, para countdown)
    
    3. Callbacks:
       - onTick?: (elapsed: number) => void
       - onComplete?: () => void
    
    4. Usa requestAnimationFrame o setInterval eficiente

TAREA-07.1.6:
  Nombre: "Crear componente ToolCard"
  Acción: "Crear /src/components/tools/ToolCard.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente ToolCard:
    
    Props:
    - tool: ToolConfig
    - onClick: () => void
    - disabled?: boolean
    - showProgress?: boolean
    - progress?: number (0-100)
    
    Estructura:
    - Card con bg-secondary, border sutil
    - Icono grande (48px) con color según archetype
    - Nombre en texto grande
    - Descripción en texto secundario
    - Badge "PREMIUM" si isPremium
    - Barra de progreso opcional en la parte inferior
    
    Estados:
    - Default: Opacidad 100%
    - Hover: Scale 1.02, border glow
    - Disabled: Opacidad 50%, cursor not-allowed
    
    Usar Framer Motion para animaciones.

TAREA-07.1.7:
  Nombre: "Crear componente ToolHeader"
  Acción: "Crear /src/components/tools/ToolHeader.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente ToolHeader:
    
    Props:
    - title: string
    - subtitle?: string
    - backUrl?: string (default: '/tools')
    - rightContent?: ReactNode
    
    Estructura:
    - Sticky top, z-index alto
    - Botón de volver (ChevronLeft)
    - Título centrado o a la izquierda
    - Subtítulo debajo del título
    - Área derecha para contenido adicional
    
    Estilo:
    - Background con glassmorphism
    - Padding responsive
    - Border bottom sutil

TAREA-07.1.8:
  Nombre: "Crear componente ToolProgress"
  Acción: "Crear /src/components/tools/ToolProgress.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente ToolProgress:
    
    Props:
    - current: number
    - total: number
    - label?: string
    - showPercentage?: boolean (default true)
    - color?: 'default' | 'gold' | 'green' | 'red'
    - size?: 'sm' | 'md' | 'lg'
    
    Estructura:
    - Label opcional arriba
    - Barra de progreso con animación smooth
    - Porcentaje a la derecha
    
    Estilo:
    - Background track oscuro
    - Fill con gradiente según color
    - Glow effect en el fill
    - Altura según size (4px, 8px, 12px)

TAREA-07.1.9:
  Nombre: "Crear componente ToolTimer"
  Acción: "Crear /src/components/tools/ToolTimer.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente ToolTimer:
    
    Props:
    - mode: 'countdown' | 'stopwatch'
    - duration?: number (requerido si countdown)
    - autoStart?: boolean
    - onComplete?: () => void
    - onTick?: (elapsed: number) => void
    - size?: 'sm' | 'md' | 'lg' (diámetro del círculo)
    - showControls?: boolean
    
    Estructura:
    - Círculo SVG con progress ring
    - Tiempo en el centro (MM:SS o HH:MM:SS)
    - Controles debajo: Play/Pause, Reset
    
    Estilo:
    - Círculo con stroke animado
    - Color cambia según progreso (verde → amarillo → rojo en countdown)
    - Pulse animation cuando está corriendo
    - Vibración cuando completa (si soportado)
    
    Usar el hook useToolTimer internamente.

TAREA-07.1.10:
  Nombre: "Crear componente ToolAudioPlayer"
  Acción: "Crear /src/components/tools/ToolAudioPlayer.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente ToolAudioPlayer:
    
    Props:
    - src: string
    - title?: string
    - onProgress?: (percent: number, currentTime: number) => void
    - onComplete?: () => void
    - initialProgress?: number (segundos, para resume)
    - preventSkip?: boolean (no permite adelantar)
    
    Estructura:
    - Visualizador de ondas o barra de progreso
    - Botón Play/Pause grande centrado
    - Tiempo actual / Tiempo total
    - Barra de progreso clickeable (si !preventSkip)
    - Control de volumen
    
    Estilo:
    - Fondo oscuro
    - Botón con glow
    - Barra de progreso con gradient
    
    Funcionalidad:
    - Usa <audio> nativo
    - Guarda progreso cada 5 segundos
    - Resume desde initialProgress
    - Detecta 90% completado para onComplete

TAREA-07.1.11:
  Nombre: "Crear componente ToolVideoPlayer"
  Acción: "Crear /src/components/tools/ToolVideoPlayer.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente ToolVideoPlayer:
    
    Props:
    - src: string
    - poster?: string
    - onProgress?: (percent: number, currentTime: number) => void
    - onComplete?: () => void
    - loop?: boolean (para ejercicios en loop)
    - autoPlay?: boolean
    
    Estructura:
    - Video con aspect ratio 16:9
    - Controles overlay que aparecen al hover/tap
    - Play/Pause central grande
    - Barra de progreso en la parte inferior
    - Botón fullscreen
    
    Estilo:
    - Esquinas redondeadas
    - Controles con glassmorphism
    - Transición suave de controles

TAREA-07.1.12:
  Nombre: "Crear Server Action saveToolProgress"
  Acción: "Crear /src/actions/tools/saveProgress.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action saveToolProgress:
    
    'use server'
    
    Input (con Zod):
    - toolType: ToolType
    - itemId: string | null
    - progressPercent: number (0-100)
    - currentPosition: number
    - totalDuration: number
    
    Proceso:
    1. Verificar autenticación
    2. Validar input con Zod
    3. Upsert en tabla tool_progress:
       - Si existe registro con mismo user_id + toolType + itemId: UPDATE
       - Si no existe: INSERT
    4. Retornar progreso actualizado
    
    Output:
    - { success: true, progress: ToolProgress }
    - { success: false, error: string }

TAREA-07.1.13:
  Nombre: "Crear Server Action completeToolSession"
  Acción: "Crear /src/actions/tools/completeSession.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action completeToolSession:
    
    'use server'
    
    Input (con Zod):
    - toolType: ToolType
    - durationSeconds: number
    - metadata: Record<string, unknown> (opcional)
    
    Proceso:
    1. Verificar autenticación
    2. Validar que durationSeconds >= minDurationSeconds del tool
    3. Buscar tarea pendiente del día actual que coincida:
       - Mapeo toolType → task_category:
         'library' → 'reading'
         'gym' → 'strength' o 'cardio' (según metadata)
         'meditation' → 'meditation'
         'journal' → 'journal'
         'kegel' → 'kegel'
         'facial' → 'facial'
         'stretching' → 'posture'
         'focus' → 'focus_work'
    4. Si hay tarea pendiente:
       - Llamar a completeTask (reutilizar)
       - Retornar btcEarned y vectorsUpdated
    5. Si no hay tarea (ya completada o fuera de horario):
       - Registrar sesión igualmente
       - Retornar success pero sin rewards
    
    Output: ToolCompletionResult

TAREA-07.1.14:
  Nombre: "Crear layout del Arsenal"
  Acción: "Crear /src/app/(dashboard)/tools/layout.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el layout para /tools:
    
    - Container principal con padding responsive
    - NO incluir sidebar aquí (ya está en dashboard layout)
    - Slot para children
    - Fondo consistente con el resto del dashboard

TAREA-07.1.15:
  Nombre: "Crear página índice del Arsenal"
  Acción: "Crear /src/app/(dashboard)/tools/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página principal /tools:
    
    Estructura:
    1. Título "ARSENAL" con estilo militar
    2. Subtítulo "Elige tu arma de transformación"
    3. Grid de ToolCards (3 columnas desktop, 2 tablet, 1 mobile)
    4. Ordenar por arquetipo:
       - Sección MENTAL: Biblioteca, Meditación
       - Sección CARA: Facial, Kegel, Postura
       - Sección PRODUCTIVIDAD: Journal, Focus
       - Sección FÍSICO: Gym
       - Sección PREMIUM: Hipnosis
    
    Funcionalidad:
    - Cada card navega a su ruta
    - Mostrar progreso si hay sesión en curso
    - Badge "En progreso" si hay sesión activa
    
    Estilo:
    - Headers de sección con línea decorativa
    - Animación stagger al cargar cards

SUBCAJA 07.2: Biblioteca de Poder (Lectura)
Herramienta de Lectura Gamificada
Archivos a Crear
CopyRutas:
├── /src/app/(dashboard)/tools/library/page.tsx
├── /src/app/(dashboard)/tools/library/[bookId]/page.tsx
├── /src/components/tools/library/BookCard.tsx
├── /src/components/tools/library/BookReader.tsx
├── /src/components/tools/library/ReadingTimer.tsx
├── /src/lib/tools/library/books.ts
├── /src/lib/tools/library/types.ts
├── /src/actions/tools/library/getBooks.ts
├── /src/actions/tools/library/getBookProgress.ts
├── /src/actions/tools/library/saveReadingProgress.ts
├── /public/books/[libro].pdf (assets)

Tiempo de Generación: 45-60 minutos
Estructura del Módulo
Copy07.2 Biblioteca de Poder
│
├── 1. TIPOS ESPECÍFICOS (/lib/tools/library/types.ts)
│   │
│   ├── 1.1 Book
│   │   ├── id: string
│   │   ├── title: string
│   │   ├── author: string
│   │   ├── description: string
│   │   ├── coverUrl: string
│   │   ├── pdfUrl: string
│   │   ├── totalPages: number
│   │   ├── category: 'stoicism' | 'finance' | 'productivity' | 'psychology'
│   │   └── difficulty: 'beginner' | 'intermediate' | 'advanced'
│   │
│   ├── 1.2 ReadingProgress
│   │   ├── bookId: string
│   │   ├── currentPage: number
│   │   ├── totalPages: number
│   │   ├── percentComplete: number
│   │   ├── totalReadingTime: number (segundos)
│   │   ├── lastReadAt: Date
│   │   └── isComplete: boolean
│   │
│   └── 1.3 ReadingSession
│       ├── startPage: number
│       ├── endPage: number
│       ├── durationSeconds: number
│       └── pagesRead: number
│
├── 2. CATÁLOGO DE LIBROS (/lib/tools/library/books.ts)
│   │
│   └── BOOK_CATALOG: Book[]
│       ├── "Meditaciones" - Marco Aurelio
│       ├── "El Hombre en Busca de Sentido" - Viktor Frankl
│       ├── "Padre Rico, Padre Pobre" - Robert Kiyosaki
│       ├── "El Arte de la Guerra" - Sun Tzu
│       ├── "Atomic Habits" - James Clear
│       ├── "Los 7 Hábitos de la Gente Altamente Efectiva"
│       ├── "Piense y Hágase Rico" - Napoleon Hill
│       ├── "El Poder del Ahora" - Eckhart Tolle
│       ├── "Cómo Ganar Amigos" - Dale Carnegie
│       └── "The Rational Male" - Rollo Tomassi
│
├── 3. COMPONENTES
│   │
│   ├── 3.1 BookCard
│   │   ├── Props: { book, progress?, onClick }
│   │   ├── Muestra: Cover, título, autor, progreso
│   │   └── Estilo: Card vertical con cover prominente
│   │
│   ├── 3.2 BookReader
│   │   ├── Props: { book, initialPage, onPageChange, onSessionEnd }
│   │   ├── Usa: react-pdf o pdf.js
│   │   ├── Features:
│   │   │   ├── Navegación por páginas
│   │   │   ├── Zoom
│   │   │   ├── Modo noche
│   │   │   └── Bookmarks
│   │   └── Estilo: Lector full-height
│   │
│   └── 3.3 ReadingTimer
│       ├── Props: { minMinutes, onComplete }
│       ├── Muestra: Timer de sesión de lectura
│       └── Valida: Mínimo 15 min para completar tarea
│
├── 4. PÁGINAS
│   │
│   ├── 4.1 Página de Biblioteca (/tools/library)
│   │   ├── Header con título
│   │   ├── Filtros por categoría
│   │   ├── Grid de BookCards
│   │   └── Sección "Continuar leyendo"
│   │
│   └── 4.2 Página de Lector (/tools/library/[bookId])
│       ├── ToolHeader con título del libro
│       ├── BookReader full-height
│       ├── Timer flotante
│       └── Botón "Terminar sesión"
│
├── 5. SERVER ACTIONS
│   │
│   ├── 5.1 getBooks
│   │   └── Retorna catálogo + progreso del usuario
│   │
│   ├── 5.2 getBookProgress
│   │   └── Retorna progreso específico de un libro
│   │
│   └── 5.3 saveReadingProgress
│       ├── Input: bookId, currentPage, sessionDuration
│       ├── Actualiza: tool_progress
│       └── Si sessionDuration >= 900s: Completa tarea
│
└── 6. LÓGICA DE VALIDACIÓN
    │
    ├── 6.1 Criterio de Completado
    │   └── 15 minutos de lectura O 15 páginas avanzadas
    │
    ├── 6.2 Anti-skip
    │   └── Timer corre mientras el documento está visible
    │
    └── 6.3 Persistencia
        └── Guarda página cada cambio, tiempo cada 30s
Tareas Atómicas para 07.2 Biblioteca
yamlCopyTAREA-07.2.1:
  Nombre: "Crear tipos de Biblioteca"
  Acción: "Crear /src/lib/tools/library/types.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea los tipos para la Biblioteca:
    
    1. Interface Book:
       - id: string
       - title: string
       - author: string
       - description: string
       - coverUrl: string
       - pdfUrl: string
       - totalPages: number
       - category: 'stoicism' | 'finance' | 'productivity' | 'psychology'
       - difficulty: 'beginner' | 'intermediate' | 'advanced'
    
    2. Interface ReadingProgress:
       - bookId: string
       - currentPage: number
       - totalPages: number
       - percentComplete: number
       - totalReadingTimeSeconds: number
       - lastReadAt: Date
       - isComplete: boolean
    
    3. Interface ReadingSession:
       - startPage: number
       - endPage: number
       - durationSeconds: number
       - pagesRead: number
    
    4. Interface BookWithProgress:
       - Extends Book
       - progress: ReadingProgress | null

TAREA-07.2.2:
  Nombre: "Crear catálogo de libros"
  Acción: "Crear /src/lib/tools/library/books.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el catálogo de libros inicial:
    
    export const BOOK_CATALOG: Book[] = [
      {
        id: 'meditaciones',
        title: 'Meditaciones',
        author: 'Marco Aurelio',
        description: 'Reflexiones estoicas del emperador romano',
        coverUrl: '/books/covers/meditaciones.jpg',
        pdfUrl: '/books/pdf/meditaciones.pdf',
        totalPages: 120,
        category: 'stoicism',
        difficulty: 'intermediate'
      },
      // ... 9 libros más según cuestionario1
    ];
    
    Incluir los 10 libros mencionados en el cuestionario.
    
    También exportar:
    - BOOK_CATEGORIES con nombres legibles
    - getBookById(id: string): Book | undefined
    - getBooksByCategory(category: string): Book[]

TAREA-07.2.3:
  Nombre: "Crear componente BookCard"
  Acción: "Crear /src/components/tools/library/BookCard.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente BookCard:
    
    Props:
    - book: Book
    - progress?: ReadingProgress
    - onClick: () => void
    
    Estructura:
    - Cover del libro (imagen, fallback si no existe)
    - Título (max 2 líneas, truncate)
    - Autor
    - Badge de categoría
    - Barra de progreso si progress existe
    - "Continuar" si progress > 0 y < 100%
    - "✓ Completado" si progress = 100%
    
    Estilo:
    - Card vertical
    - Hover: elevación
    - Cover con aspect ratio de libro (2:3)

TAREA-07.2.4:
  Nombre: "Crear componente BookReader"
  Acción: "Crear /src/components/tools/library/BookReader.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente BookReader usando react-pdf:
    
    Props:
    - book: Book
    - initialPage?: number (default 1)
    - onPageChange: (page: number) => void
    - onSessionEnd: (session: ReadingSession) => void
    
    Estructura:
    - Documento PDF renderizado
    - Controles de navegación:
      - Anterior / Siguiente
      - Input de número de página
      - Slider de páginas
    - Controles de vista:
      - Zoom (-, +, fit)
      - Modo noche toggle
    - Indicador de página actual / total
    
    Funcionalidad:
    - Cargar documento desde pdfUrl
    - Guardar página inicial al montar (para calcular páginas leídas)
    - Scroll suave entre páginas
    - Responsive (scroll horizontal en mobile)
    
    Estilo:
    - Fondo oscuro para modo noche
    - Controles flotantes semitransparentes

TAREA-07.2.5:
  Nombre: "Crear componente ReadingTimer"
  Acción: "Crear /src/components/tools/library/ReadingTimer.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente ReadingTimer:
    
    Props:
    - minMinutes: number (default 15)
    - onComplete: () => void
    - onTick?: (seconds: number) => void
    
    Estructura:
    - Timer circular pequeño
    - Texto "Tiempo de lectura: MM:SS"
    - Indicador visual cuando se alcanza el mínimo (brillo verde)
    - Botón "Completar sesión" (habilitado solo si >= minMinutes)
    
    Lógica:
    - Usar useToolTimer en modo 'stopwatch'
    - Pausar si documento no está visible (Page Visibility API)
    - Mostrar notificación cuando se alcanza el mínimo
    
    Estilo:
    - Flotante en esquina superior derecha
    - Glassmorphism
    - Collapsible (solo icono cuando minimizado)

TAREA-07.2.6:
  Nombre: "Crear Server Action getBooks"
  Acción: "Crear /src/actions/tools/library/getBooks.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action getBooks:
    
    'use server'
    
    Input: ninguno (usa usuario autenticado)
    
    Proceso:
    1. Verificar autenticación
    2. Obtener BOOK_CATALOG
    3. Para cada libro, buscar progreso en tool_progress:
       - WHERE user_id = userId AND toolType = 'library' AND itemId = book.id
    4. Mapear a BookWithProgress[]
    
    Output:
    - { success: true, books: BookWithProgress[] }
    - { success: false, error: string }

TAREA-07.2.7:
  Nombre: "Crear Server Action saveReadingProgress"
  Acción: "Crear /src/actions/tools/library/saveReadingProgress.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action saveReadingProgress:
    
    'use server'
    
    Input (Zod):
    - bookId: string
    - currentPage: number
    - sessionDurationSeconds: number
    - pagesReadInSession: number
    
    Proceso:
    1. Verificar autenticación
    2. Validar input
    3. Obtener progreso existente o crear nuevo
    4. Actualizar:
       - currentPage
       - percentComplete = (currentPage / totalPages) * 100
       - totalReadingTimeSeconds += sessionDurationSeconds
       - lastReadAt = now()
       - isComplete = percentComplete >= 100
    5. Guardar en tool_progress
    6. Si sessionDurationSeconds >= 900 (15 min) O pagesReadInSession >= 15:
       - Llamar a completeToolSession('library', ...)
    
    Output:
    - { success: true, progress: ReadingProgress, taskCompleted: boolean, btcEarned: number }

TAREA-07.2.8:
  Nombre: "Crear página de Biblioteca"
  Acción: "Crear /src/app/(dashboard)/tools/library/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/library:
    
    Estructura:
    1. ToolHeader: "BIBLIOTECA DE PODER", "El conocimiento es poder"
    
    2. Sección "Continuar leyendo" (si hay libros en progreso):
       - Horizontal scroll de BookCards en progreso
       - Ordenados por lastReadAt DESC
    
    3. Filtros de categoría:
       - Tabs: Todos | Estoicismo | Finanzas | Productividad | Psicología
    
    4. Grid de todos los libros:
       - 4 columnas desktop, 2 mobile
       - BookCards
       - Filtrado por categoría activa
    
    Funcionalidad:
    - Fetch libros con getBooks()
    - Click en libro → navegar a /tools/library/[bookId]
    
    Loading state:
    - Skeleton cards mientras carga

TAREA-07.2.9:
  Nombre: "Crear página de Lector"
  Acción: "Crear /src/app/(dashboard)/tools/library/[bookId]/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/library/[bookId]:
    
    Params: bookId (string)
    
    Estructura:
    1. ToolHeader con título del libro, botón volver a biblioteca
    
    2. BookReader (ocupa casi toda la pantalla)
       - initialPage desde progreso guardado
    
    3. ReadingTimer flotante
    
    4. Botón "Terminar sesión" (fixed bottom)
    
    Funcionalidad:
    - Al montar: getBookProgress(bookId), guardar página inicial
    - onPageChange: debounce → saveReadingProgress parcial
    - onSessionEnd: saveReadingProgress completo
    - Antes de salir: confirmar si hay sesión activa > 5 min
    
    Error handling:
    - Si bookId no existe: redirect a /tools/library
    - Si error cargando PDF: mostrar mensaje con retry

SUBCAJA 07.3: Templo del Hierro (Gym)
Herramienta de Entrenamiento de Fuerza
Archivos a Crear
CopyRutas:
├── /src/app/(dashboard)/tools/gym/page.tsx
├── /src/app/(dashboard)/tools/gym/workout/page.tsx
├── /src/app/(dashboard)/tools/gym/exercises/page.tsx
├── /src/components/tools/gym/WorkoutBuilder.tsx
├── /src/components/tools/gym/ExerciseCard.tsx
├── /src/components/tools/gym/ExerciseDetail.tsx
├── /src/components/tools/gym/SetTracker.tsx
├── /src/components/tools/gym/RestTimer.tsx
├── /src/components/tools/gym/WorkoutSummary.tsx
├── /src/lib/tools/gym/exercises.ts
├── /src/lib/tools/gym/routines.ts
├── /src/lib/tools/gym/types.ts
├── /src/actions/tools/gym/saveWorkout.ts
├── /src/actions/tools/gym/getWorkoutHistory.ts

Tiempo de Generación: 60-75 minutos
Estructura del Módulo
Copy07.3 Templo del Hierro
│
├── 1. TIPOS ESPECÍFICOS (/lib/tools/gym/types.ts)
│   │
│   ├── 1.1 MuscleGroup
│   │   └── 'chest' | 'back' | 'shoulders' | 'biceps' | 'triceps' | 
│   │       'legs' | 'core' | 'cardio'
│   │
│   ├── 1.2 Exercise
│   │   ├── id: string
│   │   ├── name: string
│   │   ├── muscleGroup: MuscleGroup
│   │   ├── secondaryMuscles: MuscleGroup[]
│   │   ├── equipment: 'barbell' | 'dumbbell' | 'machine' | 'bodyweight' | 'cable'
│   │   ├── description: string
│   │   ├── gifUrl: string
│   │   └── tips: string[]
│   │
│   ├── 1.3 WorkoutSet
│   │   ├── setNumber: number
│   │   ├── reps: number
│   │   ├── weight: number (kg)
│   │   ├── isWarmup: boolean
│   │   └── isCompleted: boolean
│   │
│   ├── 1.4 WorkoutExercise
│   │   ├── exerciseId: string
│   │   ├── sets: WorkoutSet[]
│   │   ├── restSeconds: number
│   │   └── notes: string
│   │
│   ├── 1.5 Workout
│   │   ├── id: string
│   │   ├── name: string
│   │   ├── exercises: WorkoutExercise[]
│   │   ├── startedAt: Date
│   │   ├── completedAt: Date | null
│   │   ├── totalVolume: number (kg × reps)
│   │   └── type: 'strength' | 'cardio' | 'mixed'
│   │
│   └── 1.6 WorkoutTemplate (Rutina predefinida)
│       ├── id: string
│       ├── name: string
│       ├── description: string
│       ├── muscleGroups: MuscleGroup[]
│       ├── exercises: WorkoutExercise[] (sin completar)
│       └── estimatedMinutes: number
│
├── 2. CATÁLOGO DE EJERCICIOS (/lib/tools/gym/exercises.ts)
│   │
│   └── EXERCISE_CATALOG: Exercise[]
│       ├── PECHO
│       │   ├── bench_press: "Press de Banca"
│       │   ├── incline_press: "Press Inclinado"
│       │   ├── chest_fly: "Aperturas"
│       │   └── pushups: "Lagartijas"
│       │
│       ├── ESPALDA
│       │   ├── deadlift: "Peso Muerto"
│       │   ├── barbell_row: "Remo con Barra"
│       │   ├── pullups: "Dominadas"
│       │   └── lat_pulldown: "Jalón al Pecho"
│       │
│       ├── PIERNA
│       │   ├── squat: "Sentadilla"
│       │   ├── leg_press: "Prensa"
│       │   ├── lunges: "Desplantes"
│       │   └── leg_curl: "Curl Femoral"
│       │
│       ├── HOMBROS
│       │   ├── overhead_press: "Press Militar"
│       │   ├── lateral_raise: "Elevaciones Laterales"
│       │   └── face_pulls: "Face Pulls"
│       │
│       ├── BRAZOS
│       │   ├── barbell_curl: "Curl con Barra"
│       │   ├── tricep_pushdown: "Jalón de Tríceps"
│       │   └── hammer_curl: "Curl Martillo"
│       │
│       └── CARDIO
│           ├── treadmill: "Caminadora"
│           ├── stationary_bike: "Bicicleta"
│           └── rowing: "Remo"
│
├── 3. RUTINAS PREDEFINIDAS (/lib/tools/gym/routines.ts)
│   │
│   └── WORKOUT_TEMPLATES: WorkoutTemplate[]
│       ├── push_day: "Día de Empuje" (Pecho, Hombros, Tríceps)
│       ├── pull_day: "Día de Jalón" (Espalda, Bíceps)
│       ├── leg_day: "Día de Pierna"
│       ├── upper_body: "Tren Superior"
│       ├── lower_body: "Tren Inferior"
│       ├── full_body: "Cuerpo Completo"
│       └── hiit_cardio: "HIIT Cardio"
│
├── 4. COMPONENTES
│   │
│   ├── 4.1 ExerciseCard
│   │   ├── Props: { exercise, onClick, showGif }
│   │   └── Muestra: Nombre, músculo, GIF preview
│   │
│   ├── 4.2 ExerciseDetail
│   │   ├── Props: { exercise, onAddToWorkout }
│   │   └── Muestra: GIF grande, descripción, tips
│   │
│   ├── 4.3 WorkoutBuilder
│   │   ├── Props: { template?, onStart }
│   │   ├── Permite: Agregar/quitar ejercicios, configurar sets
│   │   └── Output: Workout lista para iniciar
│   │
│   ├── 4.4 SetTracker
│   │   ├── Props: { exercise, sets, onSetComplete, onUpdateSet }
│   │   ├── Muestra: Lista de sets con inputs
│   │   └── Interacción: Marcar set completado
│   │
│   ├── 4.5 RestTimer
│   │   ├── Props: { seconds, onComplete, onSkip }
│   │   └── Muestra: Countdown entre sets
│   │
│   └── 4.6 WorkoutSummary
│       ├── Props: { workout }
│       └── Muestra: Resumen final, volumen total, PR alcanzados
│
├── 5. PÁGINAS
│   │
│   ├── 5.1 Página Principal (/tools/gym)
│   │   ├── "Iniciar Entrenamiento" button
│   │   ├── Rutinas predefinidas
│   │   ├── Historial reciente
│   │   └── PR (Personal Records)
│   │
│   ├── 5.2 Página de Workout Activo (/tools/gym/workout)
│   │   ├── Lista de ejercicios del workout
│   │   ├── SetTracker para ejercicio actual
│   │   ├── RestTimer entre sets
│   │   ├── Botón "Siguiente ejercicio"
│   │   └── Botón "Terminar entrenamiento"
│   │
│   └── 5.3 Catálogo de Ejercicios (/tools/gym/exercises)
│       ├── Filtros por músculo
│       ├── Grid de ExerciseCards
│       └── ExerciseDetail en modal
│
├── 6. SERVER ACTIONS
│   │
│   ├── 6.1 saveWorkout
│   │   ├── Input: Workout completo
│   │   ├── Guarda en workout_logs
│   │   ├── Calcula volumen total
│   │   ├── Detecta PRs
│   │   └── Completa tarea 'strength' o 'cardio'
│   │
│   └── 6.2 getWorkoutHistory
│       └── Retorna últimos workouts del usuario
│
└── 7. LÓGICA DE VALIDACIÓN
    │
    ├── 7.1 Criterio de Completado para 'strength'
    │   └── Mínimo 3 ejercicios con 3+ sets completados
    │
    ├── 7.2 Criterio de Completado para 'cardio'
    │   └── Mínimo 20 minutos de ejercicio cardiovascular
    │
    └── 7.3 Vector afectado
        ├── strength → muscle_lvl +0.05
        └── cardio → fat_lvl -0.05
Tareas Atómicas para 07.3 Templo del Hierro
yamlCopyTAREA-07.3.1:
  Nombre: "Crear tipos del Gym"
  Acción: "Crear /src/lib/tools/gym/types.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea los tipos para el Templo del Hierro:
    
    1. Type MuscleGroup = 'chest' | 'back' | 'shoulders' | 'biceps' | 
       'triceps' | 'legs' | 'core' | 'cardio'
    
    2. Interface Exercise con:
       - id, name, muscleGroup, secondaryMuscles[]
       - equipment: 'barbell' | 'dumbbell' | 'machine' | 'bodyweight' | 'cable'
       - description, gifUrl, tips[]
    
    3. Interface WorkoutSet:
       - setNumber, reps, weight (kg), isWarmup, isCompleted
    
    4. Interface WorkoutExercise:
       - exerciseId, sets: WorkoutSet[], restSeconds, notes
    
    5. Interface Workout:
       - id, name, exercises[], startedAt, completedAt
       - totalVolume (kg × reps), type: 'strength' | 'cardio' | 'mixed'
    
    6. Interface WorkoutTemplate:
       - id, name, description, muscleGroups[], exercises[], estimatedMinutes
    
    7. Interface PersonalRecord:
       - exerciseId, weight, reps, achievedAt

TAREA-07.3.2:
  Nombre: "Crear catálogo de ejercicios"
  Acción: "Crear /src/lib/tools/gym/exercises.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el catálogo de ejercicios con al menos 20 ejercicios:
    
    PECHO (4):
    - bench_press, incline_press, chest_fly, pushups
    
    ESPALDA (4):
    - deadlift, barbell_row, pullups, lat_pulldown
    
    PIERNA (4):
    - squat, leg_press, lunges, leg_curl
    
    HOMBROS (3):
    - overhead_press, lateral_raise, face_pulls
    
    BRAZOS (3):
    - barbell_curl, tricep_pushdown, hammer_curl
    
    CARDIO (3):
    - treadmill, stationary_bike, rowing
    
    Para cada ejercicio incluir:
    - Descripción en español
    - gifUrl: '/exercises/[id].gif' (placeholder)
    - Tips de ejecución (2-3)
    
    Exportar también:
    - getExerciseById(id)
    - getExercisesByMuscle(muscleGroup)

TAREA-07.3.3:
  Nombre: "Crear rutinas predefinidas"
  Acción: "Crear /src/lib/tools/gym/routines.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea las rutinas predefinidas:
    
    1. push_day: "Día de Empuje"
       - Bench Press: 4×8
       - Incline Press: 3×10
       - Overhead Press: 3×10
       - Lateral Raise: 3×12
       - Tricep Pushdown: 3×12
       - Estimado: 45 min
    
    2. pull_day: "Día de Jalón"
       - Deadlift: 4×6
       - Barbell Row: 4×8
       - Lat Pulldown: 3×10
       - Face Pulls: 3×15
       - Barbell Curl: 3×10
       - Estimado: 50 min
    
    3. leg_day: "Día de Pierna"
       - Squat: 4×8
       - Leg Press: 3×10
       - Lunges: 3×10 cada pierna
       - Leg Curl: 3×12
       - Estimado: 45 min
    
    4. full_body: "Cuerpo Completo"
       - Squat, Bench, Deadlift, Overhead Press, Barbell Row
       - 3×8 cada uno
       - Estimado: 60 min
    
    5. hiit_cardio: "HIIT Cardio"
       - 20 min de intervalos
       - Estimado: 25 min

TAREA-07.3.4:
  Nombre: "Crear componente ExerciseCard"
  Acción: "Crear /src/components/tools/gym/ExerciseCard.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente ExerciseCard:
    
    Props:
    - exercise: Exercise
    - onClick: () => void
    - selected?: boolean
    - showGif?: boolean (default false, hover true)
    
    Estructura:
    - GIF/imagen del ejercicio (aspect 16:9)
    - Nombre del ejercicio
    - Chips de músculos que trabaja
    - Icono del equipamiento
    
    Interacción:
    - Hover: muestra GIF en loop
    - Click: llama onClick
    - Selected: borde dorado

TAREA-07.3.5:
  Nombre: "Crear componente SetTracker"
  Acción: "Crear /src/components/tools/gym/SetTracker.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente SetTracker:
    
    Props:
    - exercise: Exercise
    - sets: WorkoutSet[]
    - previousBest?: { weight: number, reps: number }
    - onSetComplete: (setIndex: number) => void
    - onUpdateSet: (setIndex: number, updates: Partial<WorkoutSet>) => void
    - onAddSet: () => void
    
    Estructura:
    - Header con nombre del ejercicio y GIF pequeño
    - Si previousBest: "Mejor anterior: 80kg × 8"
    - Lista de sets:
      - Cada row: [Set #] [Input kg] × [Input reps] [Checkbox completado]
      - Set warmup con estilo diferente
    - Botón "Agregar set"
    
    Funcionalidad:
    - Al completar set: vibración, sonido
    - Si supera previousBest: mostrar "🏆 PR!"
    - Inputs numéricos con +/- buttons

TAREA-07.3.6:
  Nombre: "Crear componente RestTimer"
  Acción: "Crear /src/components/tools/gym/RestTimer.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente RestTimer:
    
    Props:
    - seconds: number (default 90)
    - onComplete: () => void
    - onSkip: () => void
    - autoStart?: boolean
    
    Estructura:
    - Modal/overlay que aparece entre sets
    - Timer circular grande
    - "Descanso" texto
    - Botón "Saltar descanso"
    - Sonido/vibración al completar
    
    Estilo:
    - Fondo semitransparente
    - Timer prominente
    - Animación de countdown

TAREA-07.3.7:
  Nombre: "Crear componente WorkoutBuilder"
  Acción: "Crear /src/components/tools/gym/WorkoutBuilder.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente WorkoutBuilder:
    
    Props:
    - template?: WorkoutTemplate (para precargar)
    - onStart: (workout: Workout) => void
    
    Estructura:
    1. Input nombre del workout
    2. Lista de ejercicios agregados:
       - Drag & drop para reordenar
       - Configurar sets/reps por ejercicio
       - Botón eliminar
    3. Botón "Agregar ejercicio" → abre selector
    4. Tiempo estimado total
    5. Botón "INICIAR ENTRENAMIENTO"
    
    Selector de ejercicio:
    - Modal con grid de ExerciseCards
    - Filtros por músculo
    - Click agrega al workout

TAREA-07.3.8:
  Nombre: "Crear componente WorkoutSummary"
  Acción: "Crear /src/components/tools/gym/WorkoutSummary.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente WorkoutSummary:
    
    Props:
    - workout: Workout (completado)
    - prsAchieved: PersonalRecord[]
    - onClose: () => void
    
    Estructura:
    - Header "ENTRENAMIENTO COMPLETADO"
    - Duración total
    - Volumen total (suma de kg × reps)
    - Ejercicios completados / total
    - Sección de PRs logrados (si hay)
    - BTC ganados
    - Botón "Cerrar"
    
    Animaciones:
    - Confetti si hay PRs
    - Counter de BTC subiendo

TAREA-07.3.9:
  Nombre: "Crear Server Action saveWorkout"
  Acción: "Crear /src/actions/tools/gym/saveWorkout.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action saveWorkout:
    
    'use server'
    
    Input (Zod):
    - workout: Workout completo
    
    Proceso:
    1. Verificar autenticación
    2. Calcular volumen total: Σ(weight × reps) de todos los sets completados
    3. Calcular duración: completedAt - startedAt
    4. Detectar PRs:
       - Para cada ejercicio, comparar con workout_logs anteriores
       - Si weight > max anterior con mismas reps → PR
    5. Guardar en workout_logs (nueva tabla o JSON en tool_progress)
    6. Determinar tipo de tarea completada:
       - Si type = 'strength' y >= 3 ejercicios con 3+ sets → tarea 'strength'
       - Si type = 'cardio' y >= 20 min → tarea 'cardio'
    7. Si aplica, llamar a completeToolSession
    
    Output:
    - { success, btcEarned, prsAchieved[], vectorChange }

TAREA-07.3.10:
  Nombre: "Crear página principal del Gym"
  Acción: "Crear /src/app/(dashboard)/tools/gym/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/gym:
    
    Estructura:
    1. ToolHeader: "TEMPLO DEL HIERRO"
    
    2. Botón grande "INICIAR ENTRENAMIENTO" 
       → navega a /tools/gym/workout
    
    3. Sección "Rutinas Rápidas":
       - Cards de WorkoutTemplates
       - Click → inicia WorkoutBuilder con template
    
    4. Sección "Últimos Entrenamientos":
       - Lista de últimos 5 workouts
       - Fecha, duración, volumen
    
    5. Sección "Personal Records":
       - Top PRs del usuario
       - Ejercicio, peso, reps, fecha
    
    6. Link "Ver todos los ejercicios" → /tools/gym/exercises

TAREA-07.3.11:
  Nombre: "Crear página de Workout Activo"
  Acción: "Crear /src/app/(dashboard)/tools/gym/workout/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/gym/workout:
    
    Estado:
    - workout: Workout (en progreso)
    - currentExerciseIndex: number
    - showRestTimer: boolean
    
    Estructura:
    1. Header con timer de workout total
    
    2. Indicador de progreso: "Ejercicio 2 de 5"
    
    3. SetTracker del ejercicio actual
    
    4. RestTimer (modal) cuando showRestTimer = true
    
    5. Botones:
       - "Siguiente ejercicio" (si no es el último)
       - "Terminar entrenamiento"
    
    Flujo:
    1. Si no hay workout en estado, mostrar WorkoutBuilder
    2. Al iniciar, crear Workout y comenzar timer
    3. Al completar set, mostrar RestTimer
    4. Al terminar RestTimer o skip, continuar
    5. Al finalizar, llamar a saveWorkout
    6. Mostrar WorkoutSummary
    
    Prevención de pérdida:
    - Guardar estado en localStorage
    - Confirmar antes de salir si hay workout activo

TAREA-07.3.12:
  Nombre: "Crear página de Catálogo de Ejercicios"
  Acción: "Crear /src/app/(dashboard)/tools/gym/exercises/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/gym/exercises:
    
    Estructura:
    1. ToolHeader: "CATÁLOGO DE EJERCICIOS"
    
    2. Filtros:
       - Tabs por MuscleGroup
       - Toggle de equipamiento
    
    3. Grid de ExerciseCards
       - 3 columnas desktop
       - Filtrado según selección
    
    4. Modal ExerciseDetail al click:
       - GIF grande en loop
       - Descripción
       - Tips
       - Músculos trabajados
       - Botón "Agregar a workout" (si viene de builder)

SUBCAJA 07.4: Cámara de Meditación
Herramienta de Meditación Guiada
Archivos a Crear
CopyRutas:
├── /src/app/(dashboard)/tools/meditation/page.tsx
├── /src/app/(dashboard)/tools/meditation/[sessionId]/page.tsx
├── /src/components/tools/meditation/MeditationCard.tsx
├── /src/components/tools/meditation/MeditationPlayer.tsx
├── /src/components/tools/meditation/BreathingGuide.tsx
├── /src/lib/tools/meditation/sessions.ts
├── /src/lib/tools/meditation/types.ts
├── /src/actions/tools/meditation/completeMeditation.ts
├── /public/audio/meditations/[session].mp3

Tiempo de Generación: 45-60 minutos
Estructura del Módulo
Copy07.4 Cámara de Meditación
│
├── 1. TIPOS ESPECÍFICOS (/lib/tools/meditation/types.ts)
│   │
│   ├── 1.1 MeditationType
│   │   └── 'guided' | 'breathing' | 'binaural' | 'silence'
│   │
│   ├── 1.2 MeditationSession
│   │   ├── id: string
│   │   ├── title: string
│   │   ├── description: string
│   │   ├── type: MeditationType
│   │   ├── durationMinutes: number
│   │   ├── audioUrl: string
│   │   ├── category: 'morning' | 'focus' | 'stress' | 'sleep'
│   │   └── difficulty: 'beginner' | 'intermediate' | 'advanced'
│   │
│   └── 1.3 MeditationProgress
│       ├── sessionId: string
│       ├── completedAt: Date
│       └── durationListened: number
│
├── 2. CATÁLOGO DE MEDITACIONES (/lib/tools/meditation/sessions.ts)
│   │
│   └── MEDITATION_CATALOG: MeditationSession[]
│       ├── MATUTINAS
│       │   ├── "Despertar del Guerrero" (10 min)
│       │   └── "Intención del Día" (5 min)
│       │
│       ├── ENFOQUE
│       │   ├── "Preparación Mental" (10 min)
│       │   └── "Concentración Profunda" (15 min)
│       │
│       ├── ESTRÉS
│       │   ├── "Calma en el Caos" (10 min)
│       │   └── "Respiración 4-7-8" (5 min)
│       │
│       ├── SUEÑO
│       │   ├── "Relajación Nocturna" (20 min)
│       │   └── "Body Scan" (15 min)
│       │
│       └── BINAURALES (sin guía vocal)
│           ├── "Alpha Focus" (30 min)
│           ├── "Theta Deep" (30 min)
│           └── "Delta Sleep" (45 min)
│
├── 3. COMPONENTES
│   │
│   ├── 3.1 MeditationCard
│   │   ├── Props: { session, onSelect, isCompleted }
│   │   └── Muestra: Título, duración, tipo, icono
│   │
│   ├── 3.2 MeditationPlayer
│   │   ├── Props: { session, onComplete, onProgress }
│   │   ├── Features:
│   │   │   ├── Reproductor de audio
│   │   │   ├── Visualización de ondas
│   │   │   ├── No permite skip adelante
│   │   │   └── Background play
│   │   └── Valida: 90% escuchado para completar
│   │
│   └── 3.3 BreathingGuide
│       ├── Props: { pattern: [inhale, hold, exhale], onComplete }
│       ├── Muestra: Círculo que se expande/contrae
│       └── Usa: Para ejercicios de respiración
│
├── 4. PÁGINAS
│   │
│   ├── 4.1 Página Principal (/tools/meditation)
│   │   ├── Sección por categoría
│   │   ├── "Sesión rápida" (5 min)
│   │   └── Historial de sesiones
│   │
│   └── 4.2 Página de Sesión (/tools/meditation/[sessionId])
│       ├── MeditationPlayer fullscreen
│       ├── Ambiente oscuro
│       └── Botón salir con confirmación
│
├── 5. SERVER ACTIONS
│   │
│   └── 5.1 completeMeditation
│       ├── Input: sessionId, durationListened
│       ├── Valida: >= 90% del audio
│       └── Completa tarea 'meditation'
│
└── 6. LÓGICA DE VALIDACIÓN
    │
    ├── 6.1 Criterio de Completado
    │   └── Escuchar 90% del audio sin saltar
    │
    ├── 6.2 Vector afectado
    │   └── aura_lvl +0.03
    │
    └── 6.3 Duración mínima
        └── 10 minutos para completar tarea
Tareas Atómicas para 07.4 Meditación
yamlCopyTAREA-07.4.1:
  Nombre: "Crear tipos de Meditación"
  Acción: "Crear /src/lib/tools/meditation/types.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea los tipos para Cámara de Meditación:
    
    1. Type MeditationType = 'guided' | 'breathing' | 'binaural' | 'silence'
    
    2. Interface MeditationSession:
       - id, title, description
       - type: MeditationType
       - durationMinutes: number
       - audioUrl: string
       - category: 'morning' | 'focus' | 'stress' | 'sleep'
       - difficulty: 'beginner' | 'intermediate' | 'advanced'
       - imageUrl?: string (para cover)
    
    3. Interface MeditationProgress:
       - sessionId, completedAt, durationListened
       - percentCompleted: number

TAREA-07.4.2:
  Nombre: "Crear catálogo de meditaciones"
  Acción: "Crear /src/lib/tools/meditation/sessions.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el catálogo con 10 meditaciones:
    
    MORNING (2):
    - "Despertar del Guerrero" - 10 min, guided, beginner
    - "Intención del Día" - 5 min, guided, beginner
    
    FOCUS (2):
    - "Preparación Mental" - 10 min, guided, intermediate
    - "Concentración Profunda" - 15 min, guided, advanced
    
    STRESS (2):
    - "Calma en el Caos" - 10 min, guided, beginner
    - "Respiración 4-7-8" - 5 min, breathing, beginner
    
    SLEEP (2):
    - "Relajación Nocturna" - 20 min, guided, beginner
    - "Body Scan" - 15 min, guided, intermediate
    
    BINAURAL (2):
    - "Alpha Focus" - 30 min, binaural
    - "Theta Deep" - 30 min, binaural
    
    Helpers:
    - getMeditationById(id)
    - getMeditationsByCategory(category)
    - getQuickMeditation() → retorna una de <= 5 min

TAREA-07.4.3:
  Nombre: "Crear componente MeditationCard"
  Acción: "Crear /src/components/tools/meditation/MeditationCard.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente MeditationCard:
    
    Props:
    - session: MeditationSession
    - onSelect: () => void
    - isCompleted?: boolean
    
    Estructura:
    - Icono según type (🧘 guided, 🌬️ breathing, 🎵 binaural)
    - Título
    - Duración "10 min"
    - Badge de categoría
    - Check verde si isCompleted
    
    Estilo:
    - Card horizontal
    - Hover: glow suave
    - Colores según categoría

TAREA-07.4.4:
  Nombre: "Crear componente MeditationPlayer"
  Acción: "Crear /src/components/tools/meditation/MeditationPlayer.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente MeditationPlayer:
    
    Props:
    - session: MeditationSession
    - onComplete: () => void
    - onProgress: (percent: number, currentTime: number) => void
    - onExit: () => void
    
    Estructura:
    - Fullscreen con fondo oscuro/gradiente
    - Título de la sesión
    - Visualización:
      - Para guided/binaural: onda de audio animada
      - Para breathing: círculo pulsante
    - Timer central grande
    - Botón play/pause
    - Barra de progreso (NO clickeable si guided)
    - Botón "Salir" con confirmación
    
    Funcionalidad:
    - Usar ToolAudioPlayer internamente
    - preventSkip = true para guided
    - Al llegar a 90%: onComplete()
    - Background play via Media Session API
    
    Estilo:
    - Ambiente zen
    - Animaciones suaves
    - Modo oscuro forzado

TAREA-07.4.5:
  Nombre: "Crear componente BreathingGuide"
  Acción: "Crear /src/components/tools/meditation/BreathingGuide.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente BreathingGuide:
    
    Props:
    - pattern: { inhale: number, hold: number, exhale: number } (segundos)
    - cycles: number (default 10)
    - onComplete: () => void
    
    Estructura:
    - Círculo central que:
      - Se expande durante inhale
      - Se mantiene durante hold
      - Se contrae durante exhale
    - Texto: "Inhala" / "Mantén" / "Exhala"
    - Contador de ciclos
    - Timer del ciclo actual
    
    Animación:
    - Transición suave del círculo
    - Cambio de color según fase
    - Vibración suave al cambiar fase

TAREA-07.4.6:
  Nombre: "Crear Server Action completeMeditation"
  Acción: "Crear /src/actions/tools/meditation/completeMeditation.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action completeMeditation:
    
    'use server'
    
    Input (Zod):
    - sessionId: string
    - durationListenedSeconds: number
    
    Proceso:
    1. Verificar autenticación
    2. Obtener sesión del catálogo
    3. Calcular porcentaje: duration / (session.durationMinutes * 60)
    4. Si porcentaje >= 0.9:
       - Guardar progreso
       - Si durationListenedSeconds >= 600 (10 min):
         - Llamar a completeToolSession('meditation', ...)
    5. Retornar resultado
    
    Output:
    - { success, taskCompleted, btcEarned }

TAREA-07.4.7:
  Nombre: "Crear página principal de Meditación"
  Acción: "Crear /src/app/(dashboard)/tools/meditation/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/meditation:
    
    Estructura:
    1. ToolHeader: "CÁMARA DE MEDITACIÓN"
    
    2. Botón "Sesión Rápida" (5 min) - prominente
    
    3. Secciones por categoría:
       - MATUTINAS
       - ENFOQUE
       - ESTRÉS
       - SUEÑO
       - BINAURALES
       
       Cada sección: scroll horizontal de MeditationCards
    
    4. Sección "Completadas hoy" (si hay)
    
    Funcionalidad:
    - Click en card → navegar a /tools/meditation/[sessionId]
    - Cargar estado de completado del día

TAREA-07.4.8:
  Nombre: "Crear página de Sesión de Meditación"
  Acción: "Crear /src/app/(dashboard)/tools/meditation/[sessionId]/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/meditation/[sessionId]:
    
    Params: sessionId
    
    Estructura:
    - MeditationPlayer fullscreen
    - Sin header (experiencia inmersiva)
    - Botón de salir en esquina
    
    Funcionalidad:
    - Cargar sesión por ID
    - Si no existe: redirect a /tools/meditation
    - onComplete: guardar y mostrar mensaje de éxito
    - onExit: confirmar si progreso > 50%
    
    UX:
    - Transición fade-in al entrar
    - Bloquear notificaciones del sistema (si posible)

SUBCAJA 07.5: Bitácora de Guerra (Journal)
Herramienta de Journaling
Archivos a Crear
CopyRutas:
├── /src/app/(dashboard)/tools/journal/page.tsx
├── /src/app/(dashboard)/tools/journal/new/page.tsx
├── /src/app/(dashboard)/tools/journal/[entryId]/page.tsx
├── /src/components/tools/journal/JournalEditor.tsx
├── /src/components/tools/journal/JournalEntry.tsx
├── /src/components/tools/journal/JournalPrompt.tsx
├── /src/components/tools/journal/JournalCalendar.tsx
├── /src/lib/tools/journal/prompts.ts
├── /src/lib/tools/journal/types.ts
├── /src/actions/tools/journal/saveEntry.ts
├── /src/actions/tools/journal/getEntries.ts

Tiempo de Generación: 45-60 minutos
Estructura del Módulo
Copy07.5 Bitácora de Guerra
│
├── 1. TIPOS ESPECÍFICOS (/lib/tools/journal/types.ts)
│   │
│   ├── 1.1 JournalEntry
│   │   ├── id: string
│   │   ├── userId: string
│   │   ├── date: Date
│   │   ├── dayNumber: number (del protocolo)
│   │   ├── content: string (HTML o Markdown)
│   │   ├── wordCount: number
│   │   ├── promptsAnswered: string[]
│   │   ├── mood: 1-5 (opcional)
│   │   ├── createdAt: Date
│   │   └── updatedAt: Date
│   │
│   └── 1.2 JournalPrompt
│       ├── id: string
│       ├── question: string
│       ├── category: 'reflection' | 'planning' | 'gratitude' | 'goals'
│       └── phase: number (1-4 del protocolo)
│
├── 2. PROMPTS DE JOURNAL (/lib/tools/journal/prompts.ts)
│   │
│   └── JOURNAL_PROMPTS: JournalPrompt[]
│       ├── REFLEXIÓN
│       │   ├── "¿Qué lograste hoy?"
│       │   ├── "¿Qué podrías haber hecho mejor?"
│       │   └── "¿Qué aprendiste de tus errores?"
│       │
│       ├── PLANIFICACIÓN
│       │   ├── "¿Cuáles son tus 3 prioridades para mañana?"
│       │   └── "¿Qué obstáculos anticipas?"
│       │
│       ├── GRATITUD
│       │   ├── "Menciona 3 cosas por las que estás agradecido"
│       │   └── "¿Quién te ayudó hoy?"
│       │
│       └── METAS
│           ├── "¿Cómo te acercaste a tu meta principal?"
│           └── "¿Qué harías diferente si pudieras repetir el día?"
│
├── 3. COMPONENTES
│   │
│   ├── 3.1 JournalEditor
│   │   ├── Props: { initialContent?, onSave, minWords }
│   │   ├── Editor: Tiptap o similar (rich text)
│   │   ├── Features:
│   │   │   ├── Formato básico (bold, italic, lists)
│   │   │   ├── Contador de palabras
│   │   │   └── Auto-save cada 30s
│   │   └── Valida: Mínimo 100 palabras
│   │
│   ├── 3.2 JournalEntry
│   │   ├── Props: { entry, onClick }
│   │   └── Muestra: Fecha, preview del contenido, mood
│   │
│   ├── 3.3 JournalPrompt
│   │   ├── Props: { prompt, onAnswer }
│   │   └── Muestra: Pregunta con botón para responder
│   │
│   └── 3.4 JournalCalendar
│       ├── Props: { entries, onSelectDate }
│       └── Muestra: Calendario con días marcados
│
├── 4. PÁGINAS
│   │
│   ├── 4.1 Página Principal (/tools/journal)
│   │   ├── Botón "Nueva entrada" (si no hay hoy)
│   │   ├── Entrada de hoy (si existe)
│   │   ├── JournalCalendar
│   │   └── Lista de entradas recientes
│   │
│   ├── 4.2 Nueva Entrada (/tools/journal/new)
│   │   ├── Prompts sugeridos del día
│   │   ├── JournalEditor
│   │   └── Botón guardar
│   │
│   └── 4.3 Ver Entrada (/tools/journal/[entryId])
│       └── Entrada en modo lectura (no editable)
│
├── 5. SERVER ACTIONS
│   │
│   ├── 5.1 saveEntry
│   │   ├── Input: content, promptsAnswered
│   │   ├── Calcula wordCount
│   │   ├── Si wordCount >= 100: completa tarea 'journal'
│   │   └── Guarda en journal_entries
│   │
│   └── 5.2 getEntries
│       ├── Input: dateRange? (opcional)
│       └── Retorna entradas del usuario
│
└── 6. LÓGICA DE VALIDACIÓN
    │
    ├── 6.1 Criterio de Completado
    │   └── Mínimo 100 palabras O responder 3 prompts
    │
    ├── 6.2 Vector afectado
    │   └── wealth_lvl +0.03 (productividad mental)
    │
    └── 6.3 Una entrada por día
        └── Si ya existe entrada hoy, se edita
Tareas Atómicas para 07.5 Journal
yamlCopyTAREA-07.5.1:
  Nombre: "Crear tipos de Journal"
  Acción: "Crear /src/lib/tools/journal/types.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea los tipos para Bitácora de Guerra:
    
    1. Interface JournalEntry:
       - id: string
       - userId: string
       - date: Date
       - dayNumber: number
       - content: string
       - wordCount: number
       - promptsAnswered: string[]
       - mood?: 1 | 2 | 3 | 4 | 5
       - createdAt: Date
       - updatedAt: Date
    
    2. Interface JournalPrompt:
       - id: string
       - question: string
       - category: 'reflection' | 'planning' | 'gratitude' | 'goals'
       - phase: 1 | 2 | 3 | 4
    
    3. Type JournalSaveInput:
       - content: string
       - promptsAnswered?: string[]
       - mood?: number

TAREA-07.5.2:
  Nombre: "Crear prompts de Journal"
  Acción: "Crear /src/lib/tools/journal/prompts.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el catálogo de prompts (mínimo 15):
    
    REFLECTION (4):
    - "¿Qué lograste hoy?"
    - "¿Qué podrías haber hecho mejor?"
    - "¿Qué aprendiste?"
    - "¿Qué te hizo sentir orgulloso?"
    
    PLANNING (4):
    - "¿Cuáles son tus 3 prioridades para mañana?"
    - "¿Qué obstáculos anticipas?"
    - "¿Cómo vas a superarlos?"
    - "¿Qué hábito quieres fortalecer mañana?"
    
    GRATITUDE (3):
    - "Menciona 3 cosas por las que estás agradecido"
    - "¿Quién te ayudó hoy?"
    - "¿Qué momento del día disfrutaste más?"
    
    GOALS (4):
    - "¿Cómo te acercaste a tu meta principal?"
    - "¿Estás en el camino correcto? ¿Por qué?"
    - "¿Qué necesitas cambiar para avanzar más rápido?"
    - "Visualiza tu yo de dentro de 30 días. ¿Qué está haciendo diferente?"
    
    Helpers:
    - getDailyPrompts(dayNumber): 3 prompts aleatorios por día
    - getPromptsByCategory(category)

TAREA-07.5.3:
  Nombre: "Crear componente JournalEditor"
  Acción: "Crear /src/components/tools/journal/JournalEditor.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente JournalEditor usando Tiptap:
    
    Props:
    - initialContent?: string
    - onSave: (content: string, wordCount: number) => void
    - minWords?: number (default 100)
    - prompts?: JournalPrompt[]
    
    Estructura:
    - Toolbar: Bold, Italic, Bullet List, Heading
    - Editor area (altura flexible, min 300px)
    - Footer:
      - Contador de palabras "45/100 palabras"
      - Indicador de auto-guardado
      - Botón "Guardar" (disabled si < minWords)
    
    Funcionalidad:
    - Auto-save cada 30 segundos a localStorage
    - Contar palabras en tiempo real
    - Mostrar prompts como sugerencias clickeables
    - Al click en prompt: insertar en el editor como heading
    
    Estilo:
    - Editor oscuro
    - Contador cambia de rojo a verde al cumplir mínimo

TAREA-07.5.4:
  Nombre: "Crear componente JournalCalendar"
  Acción: "Crear /src/components/tools/journal/JournalCalendar.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente JournalCalendar:
    
    Props:
    - entries: JournalEntry[]
    - onSelectDate: (date: Date) => void
    - currentMonth?: Date
    
    Estructura:
    - Header con mes/año y navegación
    - Grid de días
    - Días con entrada: marcados con punto/color
    - Día actual: highlight
    - Días futuros: deshabilitados
    
    Interacción:
    - Click en día con entrada → onSelectDate
    - Click en día sin entrada → navegar a crear
    
    Estilo:
    - Compacto
    - Colores según mood si existe

TAREA-07.5.5:
  Nombre: "Crear Server Action saveEntry"
  Acción: "Crear /src/actions/tools/journal/saveEntry.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action saveEntry:
    
    'use server'
    
    Input (Zod):
    - content: string
    - promptsAnswered?: string[]
    - mood?: number (1-5)
    
    Proceso:
    1. Verificar autenticación
    2. Calcular wordCount (strip HTML, contar palabras)
    3. Obtener dayNumber actual del avatar_state
    4. Buscar si ya existe entrada para hoy:
       - Si existe: UPDATE
       - Si no: INSERT
    5. Si wordCount >= 100 O promptsAnswered.length >= 3:
       - Llamar a completeToolSession('journal', ...)
    6. Retornar resultado
    
    Output:
    - { success, entry, taskCompleted, btcEarned }

TAREA-07.5.6:
  Nombre: "Crear página principal de Journal"
  Acción: "Crear /src/app/(dashboard)/tools/journal/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/journal:
    
    Estructura:
    1. ToolHeader: "BITÁCORA DE GUERRA"
    
    2. Si hay entrada de hoy:
       - Card con preview de la entrada
       - Botón "Continuar escribiendo"
    
    3. Si NO hay entrada de hoy:
       - Botón grande "ESCRIBIR ENTRADA DE HOY"
    
    4. JournalCalendar (últimos 2 meses)
    
    5. Lista "Entradas recientes":
       - Últimas 5 entradas
       - JournalEntry cards
       - Click → ver entrada
    
    Stats:
    - Días con entrada este mes
    - Racha de journaling

TAREA-07.5.7:
  Nombre: "Crear página nueva entrada"
  Acción: "Crear /src/app/(dashboard)/tools/journal/new/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/journal/new:
    
    Estructura:
    1. ToolHeader: "DÍA [X] - [Fecha]"
    
    2. Sección de prompts sugeridos:
       - 3 prompts del día
       - Click en prompt lo agrega al editor
    
    3. JournalEditor (ocupa resto de pantalla)
    
    4. Selector de mood (opcional):
       - 5 emojis: 😞 😐 🙂 😊 🔥
    
    Funcionalidad:
    - Cargar entrada existente si hay (para editar)
    - onSave → saveEntry → mostrar confirmación
    - Advertir antes de salir si hay cambios sin guardar

SUBCAJA 07.6: Vitalidad Sexual (Kegel)
Herramienta de Ejercicios Kegel
Archivos a Crear
CopyRutas:
├── /src/app/(dashboard)/tools/kegel/page.tsx
├── /src/components/tools/kegel/KegelTrainer.tsx
├── /src/components/tools/kegel/KegelProgress.tsx
├── /src/lib/tools/kegel/routines.ts
├── /src/lib/tools/kegel/types.ts
├── /src/actions/tools/kegel/completeKegel.ts

Tiempo de Generación: 30-45 minutos
Estructura del Módulo
Copy07.6 Vitalidad Sexual
│
├── 1. TIPOS ESPECÍFICOS (/lib/tools/kegel/types.ts)
│   │
│   ├── 1.1 KegelRoutine
│   │   ├── id: string
│   │   ├── name: string
│   │   ├── holdSeconds: number
│   │   ├── relaxSeconds: number
│   │   ├── reps: number
│   │   ├── sets: number
│   │   ├── restBetweenSets: number
│   │   └── difficulty: 'beginner' | 'intermediate' | 'advanced'
│   │
│   └── 1.2 KegelSession
│       ├── routineId: string
│       ├── completedReps: number
│       ├── completedSets: number
│       └── totalDuration: number
│
├── 2. RUTINAS DE KEGEL (/lib/tools/kegel/routines.ts)
│   │
│   └── KEGEL_ROUTINES: KegelRoutine[]
│       ├── beginner: 5s hold, 5s relax, 10 reps, 3 sets
│       ├── intermediate: 7s hold, 5s relax, 12 reps, 3 sets
│       └── advanced: 10s hold, 5s relax, 15 reps, 4 sets
│
├── 3. COMPONENTES
│   │
│   ├── 3.1 KegelTrainer
│   │   ├── Props: { routine, onComplete }
│   │   ├── Muestra:
│   │   │   ├── Círculo pulsante (expandir=apretar, contraer=relajar)
│   │   │   ├── Texto "APRIETA" / "RELAJA"
│   │   │   ├── Timer del hold actual
│   │   │   ├── Contador de reps/sets
│   │   │   └── Vibración del dispositivo como guía
│   │   └── Audio: Beep al cambiar fase
│   │
│   └── 3.2 KegelProgress
│       ├── Props: { totalSessions, currentLevel }
│       └── Muestra: Progreso hacia siguiente nivel
│
├── 4. PÁGINAS
│   │
│   └── 4.1 Página Principal (/tools/kegel)
│       ├── Selector de rutina (nivel)
│       ├── Botón "INICIAR"
│       ├── KegelTrainer (cuando activo)
│       ├── Stats: sesiones completadas
│       └── Tutorial inicial (primera vez)
│
├── 5. SERVER ACTIONS
│   │
│   └── 5.1 completeKegel
│       ├── Input: routineId, session
│       └── Completa tarea 'kegel' (2x al día disponible)
│
└── 6. LÓGICA DE VALIDACIÓN
    │
    ├── 6.1 Criterio de Completado
    │   └── Completar rutina completa (3-4 sets)
    │
    ├── 6.2 Vector afectado
    │   └── face_lvl +0.02 (arquetipo CARA)
    │
    └── 6.3 Frecuencia
        └── 2 sesiones diarias, 5 días a la semana
Tareas Atómicas para 07.6 Kegel
yamlCopyTAREA-07.6.1:
  Nombre: "Crear tipos de Kegel"
  Acción: "Crear /src/lib/tools/kegel/types.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea los tipos para Vitalidad Sexual:
    
    1. Interface KegelRoutine:
       - id: string
       - name: string
       - holdSeconds: number
       - relaxSeconds: number
       - reps: number
       - sets: number
       - restBetweenSets: number
       - difficulty: 'beginner' | 'intermediate' | 'advanced'
       - estimatedMinutes: number
    
    2. Interface KegelSession:
       - routineId: string
       - completedReps: number
       - completedSets: number
       - totalDurationSeconds: number
       - completedAt: Date
    
    3. Type KegelPhase = 'hold' | 'relax' | 'rest'

TAREA-07.6.2:
  Nombre: "Crear rutinas de Kegel"
  Acción: "Crear /src/lib/tools/kegel/routines.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea las rutinas de Kegel:
    
    1. beginner:
       - name: "Nivel Novato"
       - holdSeconds: 5
       - relaxSeconds: 5
       - reps: 10
       - sets: 3
       - restBetweenSets: 30
       - estimatedMinutes: 6
    
    2. intermediate:
       - name: "Nivel Guerrero"
       - holdSeconds: 7
       - relaxSeconds: 5
       - reps: 12
       - sets: 3
       - restBetweenSets: 20
       - estimatedMinutes: 8
    
    3. advanced:
       - name: "Nivel Maestro"
       - holdSeconds: 10
       - relaxSeconds: 5
       - reps: 15
       - sets: 4
       - restBetweenSets: 15
       - estimatedMinutes: 12
    
    Helpers:
    - getRoutineByDifficulty(difficulty)
    - calculateRoutineDuration(routine)

TAREA-07.6.3:
  Nombre: "Crear componente KegelTrainer"
  Acción: "Crear /src/components/tools/kegel/KegelTrainer.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente KegelTrainer:
    
    Props:
    - routine: KegelRoutine
    - onComplete: (session: KegelSession) => void
    - onCancel: () => void
    
    Estado:
    - phase: 'hold' | 'relax' | 'rest'
    - currentRep: number
    - currentSet: number
    - phaseTimer: number
    
    Estructura:
    - Círculo central grande que:
      - Se expande suavemente durante 'hold'
      - Se contrae durante 'relax'
      - Permanece neutro durante 'rest'
    - Texto grande: "APRIETA" / "RELAJA" / "DESCANSO"
    - Timer del fase actual
    - Indicador: "Rep 5/10 • Set 2/3"
    - Barra de progreso total
    - Botón "Cancelar"
    
    Funcionalidad:
    - Vibración al cambiar de fase (si disponible)
    - Sonido sutil al cambiar
    - Secuencia automática: hold → relax → (repeat) → rest → next set
    - Al completar todos los sets: onComplete
    
    Estilo:
    - Fondo oscuro
    - Círculo con gradiente según fase
    - Animaciones fluidas

TAREA-07.6.4:
  Nombre: "Crear Server Action completeKegel"
  Acción: "Crear /src/actions/tools/kegel/completeKegel.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action completeKegel:
    
    'use server'
    
    Input (Zod):
    - routineId: string
    - completedReps: number
    - completedSets: number
    - totalDurationSeconds: number
    
    Proceso:
    1. Verificar autenticación
    2. Verificar que routine existe
    3. Verificar que se completó al menos 80% (sets/reps)
    4. Contar sesiones de kegel completadas hoy:
       - Si < 2: puede completar tarea 'kegel'
       - Si >= 2: registrar pero no dar recompensa extra
    5. Si aplica: completeToolSession('kegel', ...)
    6. Guardar session en historial
    
    Output:
    - { success, sessionNumber (1 o 2), taskCompleted, btcEarned }

TAREA-07.6.5:
  Nombre: "Crear página de Kegel"
  Acción: "Crear /src/app/(dashboard)/tools/kegel/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/kegel:
    
    Estado:
    - selectedRoutine: KegelRoutine | null
    - isTraining: boolean
    - todaySessions: number (0, 1, o 2)
    
    Estructura:
    1. ToolHeader: "VITALIDAD SEXUAL"
    
    2. Si isTraining:
       - KegelTrainer fullscreen
    
    3. Si !isTraining:
       a. Tutorial (solo primera vez):
          - Explicación breve de qué es y beneficios
          - Cómo hacer el ejercicio
       
       b. Estado del día:
          - "Sesión 1/2 completada" o "0/2"
          - Siguiente sesión disponible
       
       c. Selector de nivel:
          - Cards de cada rutina
          - Tiempo estimado
          - Click selecciona
       
       d. Botón "INICIAR SESIÓN"
    
    4. Stats:
       - Sesiones totales
       - Racha actual
       - Nivel actual vs siguiente

SUBCAJA 07.7: Escultor Facial (Mewing)
Herramienta de Yoga Facial
Archivos a Crear
CopyRutas:
├── /src/app/(dashboard)/tools/facial/page.tsx
├── /src/app/(dashboard)/tools/facial/[routineId]/page.tsx
├── /src/components/tools/facial/FacialRoutineCard.tsx
├── /src/components/tools/facial/FacialExercise.tsx
├── /src/components/tools/facial/MewingGuide.tsx
├── /src/lib/tools/facial/routines.ts
├── /src/lib/tools/facial/types.ts
├── /src/actions/tools/facial/completeFacial.ts

Tiempo de Generación: 30-45 minutos
Estructura del Módulo
Copy07.7 Escultor Facial
│
├── 1. TIPOS ESPECÍFICOS (/lib/tools/facial/types.ts)
│   │
│   ├── 1.1 FacialExercise
│   │   ├── id: string
│   │   ├── name: string
│   │   ├── description: string
│   │   ├── durationSeconds: number
│   │   ├── reps: number (si aplica)
│   │   ├── gifUrl: string
│   │   └── targetArea: 'jaw' | 'cheeks' | 'forehead' | 'neck'
│   │
│   ├── 1.2 FacialRoutine
│   │   ├── id: string
│   │   ├── name: string
│   │   ├── description: string
│   │   ├── exercises: FacialExercise[]
│   │   └── totalMinutes: number
│   │
│   └── 1.3 MewingGuidance
│       ├── tonguePosition: string
│       ├── teethPosition: string
│       └── breathingTip: string
│
├── 2. RUTINAS FACIALES (/lib/tools/facial/routines.ts)
│   │
│   └── FACIAL_ROUTINES: FacialRoutine[]
│       ├── morning_routine: "Rutina Matutina" (10 min)
│       │   ├── Face massage warmup
│       │   ├── Jawline clenches
│       │   ├── Cheek lifts
│       │   └── Neck stretches
│       │
│       ├── jawline_focus: "Definición de Mandíbula" (8 min)
│       │   ├── Chin lifts
│       │   ├── Jaw slides
│       │   └── Resistance exercises
│       │
│       └── mewing_practice: "Práctica de Mewing" (5 min)
│           └── Guía de posición de lengua
│
├── 3. COMPONENTES
│   │
│   ├── 3.1 FacialRoutineCard
│   │   ├── Props: { routine, onClick }
│   │   └── Muestra: Nombre, duración, área target
│   │
│   ├── 3.2 FacialExercise
│   │   ├── Props: { exercise, onComplete }
│   │   ├── Muestra: GIF, instrucciones, timer
│   │   └── Transición automática entre ejercicios
│   │
│   └── 3.3 MewingGuide
│       └── Guía visual de posición de lengua
│
├── 4. PÁGINAS
│   │
│   ├── 4.1 Página Principal (/tools/facial)
│   │   ├── Rutinas disponibles
│   │   ├── Guía de Mewing
│   │   └── Progreso semanal
│   │
│   └── 4.2 Página de Rutina (/tools/facial/[routineId])
│       └── Secuencia de ejercicios
│
├── 5. SERVER ACTIONS
│   │
│   └── 5.1 completeFacial
│       └── Completa tarea 'facial'
│
└── 6. LÓGICA DE VALIDACIÓN
    │
    ├── 6.1 Criterio de Completado
    │   └── Completar rutina completa (5-10 min)
    │
    └── 6.2 Vector afectado
        └── face_lvl +0.04
Tareas Atómicas para 07.7 Escultor Facial
yamlCopyTAREA-07.7.1:
  Nombre: "Crear tipos de Facial"
  Acción: "Crear /src/lib/tools/facial/types.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea los tipos para Escultor Facial:
    
    1. Interface FacialExercise:
       - id, name, description
       - durationSeconds: number
       - reps?: number
       - gifUrl: string
       - targetArea: 'jaw' | 'cheeks' | 'forehead' | 'neck'
       - instructions: string[]
    
    2. Interface FacialRoutine:
       - id, name, description
       - exercises: FacialExercise[]
       - totalMinutes: number
       - difficulty: 'easy' | 'medium' | 'hard'

TAREA-07.7.2:
  Nombre: "Crear rutinas faciales"
  Acción: "Crear /src/lib/tools/facial/routines.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea 3 rutinas faciales:
    
    1. morning_routine: "Despertar Facial"
       - Masaje circular de cara (60s)
       - Ejercicios de mandíbula (5 reps, 60s)
       - Elevación de mejillas (10 reps, 90s)
       - Estiramientos de cuello (60s)
       - Total: ~5 min
    
    2. jawline_focus: "Cincel de Mandíbula"
       - Chin tucks (10 reps)
       - Jaw clenches (15 reps)
       - Resistance pushes (10 reps)
       - Total: ~8 min
    
    3. mewing_practice: "Práctica Mewing"
       - Guía de posición correcta
       - Hold de 2 minutos
       - Total: ~5 min
    
    Cada ejercicio con:
    - Descripción clara
    - gifUrl placeholder
    - Instrucciones paso a paso

TAREA-07.7.3:
  Nombre: "Crear componente FacialExercise"
  Acción: "Crear /src/components/tools/facial/FacialExercise.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente FacialExercise:
    
    Props:
    - exercise: FacialExercise
    - onComplete: () => void
    - onSkip: () => void
    
    Estructura:
    - GIF/Video del ejercicio (loop)
    - Nombre del ejercicio
    - Instrucciones paso a paso
    - Timer o contador de reps
    - Barra de progreso
    - Botones: "Completado" / "Saltar"
    
    Funcionalidad:
    - Auto-avance cuando timer llega a 0
    - Vibración al completar
    - Transición suave al siguiente

TAREA-07.7.4:
  Nombre: "Crear página principal de Facial"
  Acción: "Crear /src/app/(dashboard)/tools/facial/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/facial:
    
    Estructura:
    1. ToolHeader: "ESCULTOR FACIAL"
    
    2. Grid de FacialRoutineCards
    
    3. Sección "¿Qué es Mewing?":
       - Explicación breve
       - Imagen de posición correcta
       - Link a rutina de mewing
    
    4. Stats:
       - Sesiones esta semana
       - Racha

TAREA-07.7.5:
  Nombre: "Crear página de Rutina Facial"
  Acción: "Crear /src/app/(dashboard)/tools/facial/[routineId]/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/facial/[routineId]:
    
    Estado:
    - currentExerciseIndex: number
    - isComplete: boolean
    
    Estructura:
    1. Header con nombre de rutina y progreso
    
    2. FacialExercise del ejercicio actual
    
    3. Indicador: "Ejercicio 2 de 4"
    
    4. Al completar todos:
       - Mensaje de éxito
       - BTC ganados
       - Botón volver
    
    Funcionalidad:
    - Secuencia automática de ejercicios
    - onComplete de cada ejercicio avanza al siguiente
    - Al terminar: completeFacial()

SUBCAJA 07.8: Crea tu Hipnosis [PREMIUM]
Generador de Audio Personalizado con IA
Archivos a Crear
CopyRutas:
├── /src/app/(dashboard)/tools/hypnosis/page.tsx
├── /src/app/(dashboard)/tools/hypnosis/create/page.tsx
├── /src/app/(dashboard)/tools/hypnosis/[audioId]/page.tsx
├── /src/components/tools/hypnosis/HypnosisCreator.tsx
├── /src/components/tools/hypnosis/HypnosisCard.tsx
├── /src/components/tools/hypnosis/HypnosisPlayer.tsx
├── /src/components/tools/hypnosis/WaveSelector.tsx
├── /src/lib/tools/hypnosis/types.ts
├── /src/lib/tools/hypnosis/waves.ts
├── /src/actions/tools/hypnosis/createHypnosis.ts
├── /src/actions/tools/hypnosis/getUserHypnosis.ts

Tiempo de Generación: 45-60 minutos
Estructura del Módulo
Copy07.8 Crea tu Hipnosis [PREMIUM]
│
├── 1. TIPOS ESPECÍFICOS (/lib/tools/hypnosis/types.ts)
│   │
│   ├── 1.1 WaveType
│   │   └── 'alpha' | 'theta' | 'beta' | 'delta'
│   │
│   ├── 1.2 VoiceType
│   │   └── 'male_deep' | 'male_calm' | 'whisper'
│   │
│   ├── 1.3 CustomHypnosis
│   │   ├── id: string
│   │   ├── userId: string
│   │   ├── title: string
│   │   ├── script: string (el decreto)
│   │   ├── waveType: WaveType
│   │   ├── voiceType: VoiceType
│   │   ├── audioUrl: string
│   │   ├── durationSeconds: number
│   │   ├── createdAt: Date
│   │   └── playCount: number
│   │
│   └── 1.4 HypnosisCreationStatus
│       └── 'pending' | 'processing' | 'completed' | 'failed'
│
├── 2. CONFIGURACIÓN DE ONDAS (/lib/tools/hypnosis/waves.ts)
│   │
│   └── WAVE_CONFIG
│       ├── alpha: { frequency: '8-12 Hz', benefit: 'Relajación activa, creatividad' }
│       ├── theta: { frequency: '4-8 Hz', benefit: 'Meditación profunda, programación' }
│       ├── beta: { frequency: '12-30 Hz', benefit: 'Concentración, energía' }
│       └── delta: { frequency: '0.5-4 Hz', benefit: 'Sueño profundo, regeneración' }
│
├── 3. COMPONENTES
│   │
│   ├── 3.1 HypnosisCreator
│   │   ├── Props: { onSubmit }
│   │   ├── Steps:
│   │   │   ├── 1. Escribir decreto/afirmaciones
│   │   │   ├── 2. Seleccionar tipo de onda
│   │   │   ├── 3. Seleccionar voz
│   │   │   └── 4. Preview y crear
│   │   └── Valida: Max 500 palabras, contenido apropiado
│   │
│   ├── 3.2 HypnosisCard
│   │   ├── Props: { hypnosis, onClick, onDelete }
│   │   └── Muestra: Título, tipo onda, duración, plays
│   │
│   ├── 3.3 HypnosisPlayer
│   │   ├── Props: { hypnosis, onComplete }
│   │   └── Similar a MeditationPlayer
│   │
│   └── 3.4 WaveSelector
│       ├── Props: { selected, onChange }
│       └── Cards visuales de cada tipo de onda
│
├── 4. PÁGINAS
│   │
│   ├── 4.1 Página Principal (/tools/hypnosis)
│   │   ├── Check de suscripción premium
│   │   ├── Botón "Crear nueva hipnosis"
│   │   ├── Lista de hipnosis creadas
│   │   └── Límite: 5 hipnosis por usuario
│   │
│   ├── 4.2 Crear Hipnosis (/tools/hypnosis/create)
│   │   └── HypnosisCreator wizard
│   │
│   └── 4.3 Reproducir (/tools/hypnosis/[audioId])
│       └── HypnosisPlayer
│
├── 5. SERVER ACTIONS
│   │
│   ├── 5.1 createHypnosis
│   │   ├── Input: title, script, waveType, voiceType
│   │   ├── Proceso:
│   │   │   ├── 1. Validar suscripción premium
│   │   │   ├── 2. Validar límite (max 5)
│   │   │   ├── 3. Sanitizar script
│   │   │   ├── 4. Llamar a API de TTS (ElevenLabs)
│   │   │   ├── 5. Mezclar con background de ondas
│   │   │   ├── 6. Subir a storage
│   │   │   └── 7. Guardar en DB
│   │   └── Output: CustomHypnosis
│   │
│   ├── 5.2 getUserHypnosis
│   │   └── Retorna hipnosis del usuario
│   │
│   └── 5.3 deleteHypnosis
│       └── Elimina una hipnosis
│
└── 6. RESTRICCIONES PREMIUM
    │
    ├── 6.1 Requiere suscripción activa
    ├── 6.2 Máximo 5 audios por usuario
    └── 6.3 No cuenta como tarea obligatoria
Tareas Atómicas para 07.8 Hipnosis
yamlCopyTAREA-07.8.1:
  Nombre: "Crear tipos de Hipnosis"
  Acción: "Crear /src/lib/tools/hypnosis/types.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea los tipos para Crea tu Hipnosis:
    
    1. Type WaveType = 'alpha' | 'theta' | 'beta' | 'delta'
    
    2. Type VoiceType = 'male_deep' | 'male_calm' | 'whisper'
    
    3. Interface CustomHypnosis:
       - id, userId, title, script
       - waveType: WaveType
       - voiceType: VoiceType
       - audioUrl: string
       - durationSeconds: number
       - createdAt: Date
       - playCount: number
       - status: 'pending' | 'processing' | 'completed' | 'failed'
    
    4. Interface WaveConfig:
       - type: WaveType
       - name: string
       - frequency: string
       - benefit: string
       - color: string
       - backgroundUrl: string

TAREA-07.8.2:
  Nombre: "Crear configuración de ondas"
  Acción: "Crear /src/lib/tools/hypnosis/waves.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la configuración de ondas cerebrales:
    
    export const WAVE_CONFIGS: WaveConfig[] = [
      {
        type: 'alpha',
        name: 'Ondas Alpha',
        frequency: '8-12 Hz',
        benefit: 'Relajación activa, creatividad, aprendizaje',
        color: '#4CAF50', // verde
        backgroundUrl: '/audio/waves/alpha.mp3'
      },
      {
        type: 'theta',
        name: 'Ondas Theta',
        frequency: '4-8 Hz',
        benefit: 'Meditación profunda, programación subconsciente',
        color: '#9C27B0', // púrpura
        backgroundUrl: '/audio/waves/theta.mp3'
      },
      {
        type: 'beta',
        name: 'Ondas Beta',
        frequency: '12-30 Hz',
        benefit: 'Concentración activa, energía mental',
        color: '#FF9800', // naranja
        backgroundUrl: '/audio/waves/beta.mp3'
      },
      {
        type: 'delta',
        name: 'Ondas Delta',
        frequency: '0.5-4 Hz',
        benefit: 'Sueño profundo, regeneración celular',
        color: '#2196F3', // azul
        backgroundUrl: '/audio/waves/delta.mp3'
      }
    ];
    
    export function getWaveConfig(type: WaveType): WaveConfig

TAREA-07.8.3:
  Nombre: "Crear componente HypnosisCreator"
  Acción: "Crear /src/components/tools/hypnosis/HypnosisCreator.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente HypnosisCreator:
    
    Props:
    - onSubmit: (data: CreateHypnosisInput) => Promise<void>
    - isLoading: boolean
    
    Estado (wizard de 4 pasos):
    - step: 1 | 2 | 3 | 4
    - title: string
    - script: string
    - waveType: WaveType
    - voiceType: VoiceType
    
    Step 1 - Escribe tu decreto:
    - Input de título
    - Textarea para el script (decretos/afirmaciones)
    - Contador de palabras (max 500)
    - Sugerencias de formato
    - Ejemplos de decretos
    
    Step 2 - Selecciona la onda:
    - WaveSelector con las 4 opciones
    - Explicación de cada una
    
    Step 3 - Selecciona la voz:
    - 3 opciones de voz
    - Preview de cada una (5 segundos)
    
    Step 4 - Confirmar:
    - Resumen de todo
    - Estimación de duración
    - Botón "CREAR HIPNOSIS"
    
    Navegación:
    - Botones Anterior/Siguiente
    - Progress indicator

TAREA-07.8.4:
  Nombre: "Crear Server Action createHypnosis"
  Acción: "Crear /src/actions/tools/hypnosis/createHypnosis.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action createHypnosis:
    
    'use server'
    
    Input (Zod):
    - title: string (max 100)
    - script: string (max 2000 chars / 500 palabras)
    - waveType: WaveType
    - voiceType: VoiceType
    
    Proceso:
    1. Verificar autenticación
    2. Verificar suscripción premium activa
    3. Contar hipnosis existentes del usuario:
       - Si >= 5: error "Límite alcanzado"
    4. Sanitizar script (eliminar contenido inapropiado)
    5. Crear registro en DB con status = 'pending'
    6. Encolar job de generación:
       - Llamar a ElevenLabs API para TTS
       - Mezclar voz con background de ondas
       - Subir resultado a storage
       - Actualizar registro con audioUrl y status = 'completed'
    7. Retornar registro inicial (cliente hace polling)
    
    Output:
    - { success, hypnosis: CustomHypnosis }
    
    Nota: La generación real es async, el cliente
    debe hacer polling o usar realtime para saber cuando está listo.

TAREA-07.8.5:
  Nombre: "Crear página principal de Hipnosis"
  Acción: "Crear /src/app/(dashboard)/tools/hypnosis/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/hypnosis:
    
    Verificación inicial:
    - Si usuario no es premium → mostrar paywall
    
    Estructura (si es premium):
    1. ToolHeader: "CREA TU HIPNOSIS"
    
    2. Contador: "3/5 hipnosis creadas"
    
    3. Botón "CREAR NUEVA" (si < 5)
       → navega a /tools/hypnosis/create
    
    4. Grid de HypnosisCards:
       - Mis hipnosis creadas
       - Status indicator (si está procesando)
       - Click → reproducir
       - Botón eliminar
    
    Estado vacío:
    - Mensaje invitando a crear la primera

TAREA-07.8.6:
  Nombre: "Crear página de creación"
  Acción: "Crear /src/app/(dashboard)/tools/hypnosis/create/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/hypnosis/create:
    
    Verificación:
    - Si no premium → redirect
    - Si ya tiene 5 → redirect con mensaje
    
    Estructura:
    1. ToolHeader: "NUEVA HIPNOSIS"
    
    2. HypnosisCreator
    
    Funcionalidad:
    - onSubmit: llamar a createHypnosis
    - Loading state durante creación
    - Al completar: redirect a /tools/hypnosis/[newId]

SUBCAJA 07.9: Movilidad Táctica (Stretching)
Herramienta de Estiramientos y Postura
Archivos a Crear
CopyRutas:
├── /src/app/(dashboard)/tools/stretching/page.tsx
├── /src/app/(dashboard)/tools/stretching/[routineId]/page.tsx
├── /src/components/tools/stretching/StretchRoutineCard.tsx
├── /src/components/tools/stretching/StretchExercise.tsx
├── /src/lib/tools/stretching/routines.ts
├── /src/lib/tools/stretching/types.ts
├── /src/actions/tools/stretching/completeStretching.ts

Tiempo de Generación: 30-45 minutos
Estructura del Módulo (Simplificado - Similar a Facial)
Copy07.9 Movilidad Táctica
│
├── 1. TIPOS: StretchExercise, StretchRoutine
│
├── 2. RUTINAS (3):
│   ├── morning_stretch: "Activación Matutina" (5 min)
│   ├── posture_fix: "Corrección Postural" (10 min)
│   └── back_relief: "Alivio de Espalda" (8 min)
│
├── 3. COMPONENTES: Similar a Facial
│
├── 4. PÁGINAS: Principal + Rutina activa
│
├── 5. SERVER ACTION: completeStretching
│
└── 6. VALIDACIÓN
    ├── Completar rutina completa
    └── Vector: face_lvl +0.03 (arquetipo CARA/postura)
Tareas Atómicas para 07.9 Stretching
yamlCopyTAREA-07.9.1:
  Nombre: "Crear tipos y rutinas de Stretching"
  Acción: "Crear /src/lib/tools/stretching/"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea tipos y rutinas para Movilidad Táctica.
    Estructura muy similar a Escultor Facial pero enfocado en:
    - Estiramientos de espalda
    - Corrección de postura (hombros adelantados)
    - Movilidad de cadera
    - Estiramientos de cuello
    
    3 rutinas:
    1. morning_stretch (5 min): Activación suave
    2. posture_fix (10 min): Ejercicios correctivos
    3. back_relief (8 min): Descompresión de columna

TAREA-07.9.2:
  Nombre: "Crear componentes de Stretching"
  Acción: "Crear /src/components/tools/stretching/"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea componentes reutilizando la estructura de Facial:
    - StretchRoutineCard
    - StretchExercise
    
    Pueden ser variantes o heredar de los componentes base.

TAREA-07.9.3:
  Nombre: "Crear páginas de Stretching"
  Acción: "Crear páginas"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea las páginas:
    - /tools/stretching (lista de rutinas)
    - /tools/stretching/[routineId] (rutina activa)
    
    Estructura idéntica a Facial pero con contenido de stretching.

TAREA-07.9.4:
  Nombre: "Crear Server Action completeStretching"
  Acción: "Crear /src/actions/tools/stretching/completeStretching.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action que:
    - Valida completación de rutina
    - Completa tarea 'posture'
    - Afecta face_lvl +0.03

SUBCAJA 07.10: Focus Chamber (Pomodoro)
Herramienta de Concentración
Archivos a Crear
CopyRutas:
├── /src/app/(dashboard)/tools/focus/page.tsx
├── /src/components/tools/focus/FocusTimer.tsx
├── /src/components/tools/focus/FocusMusic.tsx
├── /src/components/tools/focus/FocusStats.tsx
├── /src/lib/tools/focus/presets.ts
├── /src/lib/tools/focus/types.ts
├── /src/lib/tools/focus/music.ts
├── /src/actions/tools/focus/saveFocusSession.ts

Tiempo de Generación: 45-60 minutos
Estructura del Módulo
Copy07.10 Focus Chamber
│
├── 1. TIPOS ESPECÍFICOS (/lib/tools/focus/types.ts)
│   │
│   ├── 1.1 FocusPreset
│   │   ├── id: string
│   │   ├── name: string
│   │   ├── workMinutes: number
│   │   ├── breakMinutes: number
│   │   └── rounds: number
│   │
│   ├── 1.2 FocusSession
│   │   ├── presetId: string
│   │   ├── startedAt: Date
│   │   ├── endedAt: Date
│   │   ├── totalFocusMinutes: number
│   │   ├── completedRounds: number
│   │   └── wasInterrupted: boolean
│   │
│   └── 1.3 FocusMusicType
│       └── 'binaural' | 'lofi' | 'brown_noise' | 'rain' | 'silence'
│
├── 2. PRESETS DE FOCUS (/lib/tools/focus/presets.ts)
│   │
│   └── FOCUS_PRESETS: FocusPreset[]
│       ├── pomodoro: 25 min work, 5 min break, 4 rounds
│       ├── deep_work: 50 min work, 10 min break, 2 rounds
│       ├── ultra_focus: 90 min work, 15 min break, 1 round
│       └── quick: 15 min work, 3 min break, 2 rounds
│
├── 3. MÚSICA (/lib/tools/focus/music.ts)
│   │
│   └── FOCUS_MUSIC
│       ├── binaural_gamma: Ondas gamma para concentración
│       ├── lofi_beats: Lo-fi hip hop
│       ├── brown_noise: Ruido marrón
│       ├── rain_sounds: Lluvia
│       └── silence: Sin música
│
├── 4. COMPONENTES
│   │
│   ├── 4.1 FocusTimer
│   │   ├── Props: { preset, onComplete, onInterrupt }
│   │   ├── Muestra:
│   │   │   ├── Timer circular grande
│   │   │   ├── Estado: FOCUS / BREAK
│   │   │   ├── Round actual
│   │   │   └── Controles: Pause, Stop
│   │   └── Funcionalidad:
│   │       ├── Notificación al terminar cada fase
│   │       ├── Prevenir salir de la app (warning)
│   │       └── Tracking si app está en foco
│   │
│   ├── 4.2 FocusMusic
│   │   ├── Props: { type, volume, onTypeChange }
│   │   ├── Reproductor de música de fondo
│   │   └── Control de volumen
│   │
│   └── 4.3 FocusStats
│       ├── Props: { todayMinutes, weekMinutes }
│       └── Visualización del tiempo enfocado
│
├── 5. PÁGINAS
│   │
│   └── 5.1 Página Principal (/tools/focus)
│       ├── Selector de preset
│       ├── Selector de música
│       ├── FocusTimer (cuando activo)
│       ├── FocusStats
│       └── Historial de sesiones
│
├── 6. SERVER ACTIONS
│   │
│   └── 6.1 saveFocusSession
│       ├── Input: session data
│       ├── Calcula horas totales del día
│       ├── Si >= 3 horas: completa tarea 'focus_work'
│       └── Afecta wealth_lvl
│
└── 7. LÓGICA DE VALIDACIÓN
    │
    ├── 7.1 Criterio de Completado
    │   └── 3 horas de focus work al día
    │
    ├── 7.2 Vector afectado
    │   └── wealth_lvl +0.02 por hora
    │
    └── 7.3 Máximo recompensable
        └── 3 horas/día (después no da más BTC)
Tareas Atómicas para 07.10 Focus Chamber
yamlCopyTAREA-07.10.1:
  Nombre: "Crear tipos de Focus"
  Acción: "Crear /src/lib/tools/focus/types.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea los tipos para Focus Chamber:
    
    1. Interface FocusPreset:
       - id, name
       - workMinutes, breakMinutes, rounds
       - description: string
    
    2. Interface FocusSession:
       - presetId, startedAt, endedAt
       - totalFocusMinutes, completedRounds
       - wasInterrupted: boolean
       - musicType?: FocusMusicType
    
    3. Type FocusMusicType = 'binaural' | 'lofi' | 'brown_noise' | 'rain' | 'silence'
    
    4. Interface FocusDayStats:
       - date: Date
       - totalMinutes: number
       - sessionsCount: number
       - taskCompleted: boolean

TAREA-07.10.2:
  Nombre: "Crear presets y música"
  Acción: "Crear /src/lib/tools/focus/"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea presets.ts:
    
    FOCUS_PRESETS = [
      {
        id: 'pomodoro',
        name: 'Pomodoro Clásico',
        workMinutes: 25,
        breakMinutes: 5,
        rounds: 4,
        description: '4 bloques de 25 min = 100 min de focus'
      },
      {
        id: 'deep_work',
        name: 'Deep Work',
        workMinutes: 50,
        breakMinutes: 10,
        rounds: 2,
        description: '2 bloques de 50 min = 100 min de focus'
      },
      {
        id: 'ultra_focus',
        name: 'Ultra Focus',
        workMinutes: 90,
        breakMinutes: 15,
        rounds: 1,
        description: '1 bloque de 90 min para trabajo intenso'
      },
      {
        id: 'quick',
        name: 'Sesión Rápida',
        workMinutes: 15,
        breakMinutes: 3,
        rounds: 2,
        description: '30 min de focus para cuando hay poco tiempo'
      }
    ]
    
    Y music.ts con configuración de cada tipo de música.

TAREA-07.10.3:
  Nombre: "Crear componente FocusTimer"
  Acción: "Crear /src/components/tools/focus/FocusTimer.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente FocusTimer:
    
    Props:
    - preset: FocusPreset
    - onComplete: (session: FocusSession) => void
    - onInterrupt: (partialSession: Partial<FocusSession>) => void
    
    Estado:
    - phase: 'work' | 'break'
    - currentRound: number
    - timeRemaining: number (segundos)
    - isPaused: boolean
    - totalFocusTime: number (acumulado)
    
    Estructura:
    - Círculo grande con timer
    - Color según phase (rojo=work, verde=break)
    - Texto: "ENFÓCATE" / "DESCANSA"
    - Round indicator: "Round 2/4"
    - Controles: Pause, Stop (con confirmación)
    
    Funcionalidad:
    - Al terminar work → notificación → auto-start break
    - Al terminar break → notificación → auto-start work
    - Al completar todos los rounds → onComplete
    - Stop antes de terminar → onInterrupt
    - Page Visibility: pausar si sale de la app (opcional warning)
    
    Sonidos:
    - Bell suave al cambiar de fase

TAREA-07.10.4:
  Nombre: "Crear componente FocusMusic"
  Acción: "Crear /src/components/tools/focus/FocusMusic.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente FocusMusic:
    
    Props:
    - currentType: FocusMusicType
    - onTypeChange: (type: FocusMusicType) => void
    - volume: number (0-100)
    - onVolumeChange: (volume: number) => void
    - isPlaying: boolean
    
    Estructura:
    - Selector horizontal de tipos de música (iconos)
    - Slider de volumen
    - Visualizador simple de ondas (si reproduciéndose)
    
    Funcionalidad:
    - Reproducción en loop
    - Fade entre cambios de tipo
    - Guardar preferencia en localStorage

TAREA-07.10.5:
  Nombre: "Crear Server Action saveFocusSession"
  Acción: "Crear /src/actions/tools/focus/saveFocusSession.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la Server Action saveFocusSession:
    
    'use server'
    
    Input (Zod):
    - presetId: string
    - totalFocusMinutes: number
    - completedRounds: number
    - wasInterrupted: boolean
    
    Proceso:
    1. Verificar autenticación
    2. Guardar sesión en focus_sessions (o tool_progress)
    3. Calcular total de minutos de hoy:
       - Sumar todas las sesiones del día
    4. Si totalHoy >= 180 (3 horas) Y no taskCompleted hoy:
       - Llamar a completeToolSession('focus', ...)
       - Marcar día como completado
    5. Calcular BTC:
       - 20 BTC por hora (máx 60 BTC/día)
    
    Output:
    - { success, session, todayTotal, taskCompleted, btcEarned }

TAREA-07.10.6:
  Nombre: "Crear página de Focus"
  Acción: "Crear /src/app/(dashboard)/tools/focus/page.tsx"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página /tools/focus:
    
    Estado:
    - selectedPreset: FocusPreset | null
    - isSessionActive: boolean
    - musicType: FocusMusicType
    - musicVolume: number
    
    Estructura:
    
    1. ToolHeader: "FOCUS CHAMBER"
    
    2. Si isSessionActive:
       - FocusTimer fullscreen-ish
       - FocusMusic en la parte inferior
       - Botón "Terminar sesión"
    
    3. Si !isSessionActive:
       a. FocusStats del día:
          - "Hoy: 1.5h / 3h objetivo"
          - Barra de progreso
       
       b. Selector de Preset:
          - Cards de cada preset
          - Tiempo total estimado
          - Click selecciona
       
       c. Selector de Música:
          - FocusMusic (mini)
       
       d. Botón "INICIAR SESIÓN"
    
    4. Historial:
       - Últimas 5 sesiones
       - Fecha, duración, completado

RESUMEN DE CAJA 07: ARSENAL DE HERRAMIENTAS
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 07 - RESUMEN DE ENTREGABLES                              ║
║                                                                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  SUBCAJA                      │ ARCHIVOS   │ TAREAS │ TIEMPO EST.                   ║
║  ────────────────────────────┼────────────┼────────┼──────────────                  ║
║  07.1 Arquitectura Arsenal   │    15      │   15   │ 30-45 min                      ║
║  07.2 Biblioteca de Poder    │    10      │    9   │ 45-60 min                      ║
║  07.3 Templo del Hierro      │    14      │   12   │ 60-75 min                      ║
║  07.4 Cámara de Meditación   │     8      │    8   │ 45-60 min                      ║
║  07.5 Bitácora de Guerra     │    10      │    7   │ 45-60 min                      ║
║  07.6 Vitalidad Sexual       │     6      │    5   │ 30-45 min                      ║
║  07.7 Escultor Facial        │     8      │    5   │ 30-45 min                      ║
║  07.8 Crea tu Hipnosis       │    10      │    6   │ 45-60 min                      ║
║  07.9 Movilidad Táctica      │     6      │    4   │ 30-45 min                      ║
║  07.10 Focus Chamber         │     8      │    6   │ 45-60 min                      ║
║  ────────────────────────────┼────────────┼────────┼──────────────                  ║
║  TOTAL CAJA 07               │ ~95 archiv │   77   │ 6-8 horas                      ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ACTUALIZACIÓN DEL PROGRESO TOTAL
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
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  📦 CAJA 08: IA Generativa                │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 09: Economía y Tienda            │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 10: Monetización (Stripe)        │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 11: Notificaciones y Realtime    │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 12: Observabilidad y Calidad     │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 13: Lanzamiento y Operaciones    │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  TOTAL DESGLOSADO HASTA AHORA             │ 61 subcajas │ 448 tareas │ 7/13 CAJAS   ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝