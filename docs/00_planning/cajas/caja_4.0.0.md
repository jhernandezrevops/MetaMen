📦 CAJA 04: MOTOR CORE (LÓGICA PURA)
Desglose Atómico Completo

Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 04: MOTOR CORE (LÓGICA PURA)                              ║
║                                                                                      ║
║    "El corazón matemático del sistema - Funciones puras sin efectos secundarios"    ║
║                                                                                      ║
║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
║    │                                                                            │   ║
║    │   ⚙️ 04.1 Vectores      ⚙️ 04.2 Niveles       ⚙️ 04.3 Salud              │   ║
║    │   Sistema de Vectores   Cálculo de Niveles    Sistema de Corazones        │   ║
║    │                                                                            │   ║
║    │   ⚙️ 04.4 Racha         ⚙️ 04.5 Judgement     ⚙️ 04.6 Muerte              │   ║
║    │   Streak & Multipliers  Cierre de Día         Reset & Resurrección        │   ║
║    │                                                                            │   ║
║    │   ⚙️ 04.7 Economía      ⚙️ 04.8 Protocolo     ⚙️ 04.9 Validaciones        │   ║
║    │   BTC Rewards           100 Días Structure    Business Rules              │   ║
║    │                                                                            │   ║
║    │   ⚙️ 04.10 Estados                                                        │   ║
║    │   State Machines                                                          │   ║
║    │                                                                            │   ║
║    └────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                      ║
║    Responsable: Claude (Diseño) + Antigravity (Implementación)                      ║
║    Entregables: Archivos TypeScript en /src/lib/core                                ║
║    Tiempo Estimado: 8-12 horas de desarrollo                                        ║
║                                                                                      ║
║    PRINCIPIO FUNDAMENTAL:                                                           ║
║    Toda la lógica en esta caja es PURA - sin I/O, sin DB, sin API calls.           ║
║    Input → Cálculo → Output. 100% testeable.                                        ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ÍNDICE DE DESGLOSE ATÓMICO - CAJA 04

SUBCAJA 04.1: Sistema de Vectores
SUBCAJA 04.2: Sistema de Niveles
SUBCAJA 04.3: Sistema de Salud
SUBCAJA 04.4: Sistema de Racha
SUBCAJA 04.5: Judgement Night
SUBCAJA 04.6: Muerte y Resurrección
SUBCAJA 04.7: Economía
SUBCAJA 04.8: Protocolo de 100 Días
SUBCAJA 04.9: Validaciones de Negocio
SUBCAJA 04.10: Máquinas de Estado


SUBCAJA 04.1: SISTEMA DE VECTORES
El Corazón del Espejo Bio-Digital
Archivos a Crear
CopyRuta: /src/lib/core/vectors/
├── index.ts              (Exports públicos)
├── types.ts              (Tipos de vectores)
├── constants.ts          (Constantes y modificadores)
├── calculations.ts       (Funciones de cálculo)
├── task-impact.ts        (Impacto de tareas en vectores)
├── decay.ts              (Decaimiento biológico)
└── vectors.test.ts       (Tests unitarios)

Tamaño Estimado: ~800 líneas total
Tiempo de Generación: 60-90 minutos
Estructura del Módulo
Copy/src/lib/core/vectors/
│
├── 📄 types.ts
│   │
│   ├── VectorName (enum)
│   │   ├── AURA = 'aura_lvl'
│   │   ├── JAWLINE = 'face_lvl'
│   │   ├── WEALTH = 'wealth_lvl'
│   │   ├── MUSCLE = 'muscle_lvl'
│   │   ├── FAT = 'fat_lvl'
│   │   └── ENV = 'env_lvl'
│   │
│   ├── VectorState (interface)
│   │   ├── aura_lvl: number      // 1.00 - 13.00
│   │   ├── face_lvl: number      // 1.00 - 13.00
│   │   ├── wealth_lvl: number    // 1.00 - 13.00
│   │   ├── muscle_lvl: number    // 1.00 - 13.00
│   │   ├── fat_lvl: number       // 13.00 - 1.00 (INVERSO)
│   │   └── env_lvl: number       // 1 - 13 (entero)
│   │
│   ├── TaskArchetype (enum)
│   │   ├── MENTAL = 'mental'           // Afecta AURA
│   │   ├── CARA = 'cara'               // Afecta JAWLINE
│   │   ├── PRODUCTIVIDAD = 'productividad'  // Afecta WEALTH
│   │   └── FISICO = 'fisico'           // Afecta MUSCLE & FAT
│   │
│   ├── TaskCategory (enum)
│   │   │
│   │   ├── // ARQUETIPO MENTAL
│   │   ├── MEDITATION = 'meditation'
│   │   ├── COLD_SHOWER = 'cold_shower'
│   │   ├── READING = 'reading'
│   │   ├── WAKE_EARLY = 'wake_early'
│   │   │
│   │   ├── // ARQUETIPO CARA
│   │   ├── POSTURE = 'posture'
│   │   ├── FACIAL = 'facial'
│   │   ├── KEGEL = 'kegel'
│   │   │
│   │   ├── // ARQUETIPO PRODUCTIVIDAD
│   │   ├── JOURNAL = 'journal'
│   │   ├── SKILL_LEARNING = 'skill_learning'
│   │   ├── FOCUS_WORK = 'focus_work'
│   │   │
│   │   ├── // ARQUETIPO FÍSICO
│   │   ├── STRENGTH = 'strength'
│   │   ├── CARDIO = 'cardio'
│   │   └── HYDRATION = 'hydration'
│   │
│   ├── VectorModifier (interface)
│   │   ├── vector: VectorName
│   │   ├── delta: number         // Cambio a aplicar
│   │   └── operation: 'add' | 'subtract'
│   │
│   └── TaskImpact (interface)
│       ├── category: TaskCategory
│       ├── archetype: TaskArchetype
│       ├── modifiers: VectorModifier[]
│       └── btcReward: number
│
├── 📄 constants.ts
│   │
│   ├── VECTOR_LIMITS
│   │   ├── AURA: { min: 1.00, max: 13.00 }
│   │   ├── JAWLINE: { min: 1.00, max: 13.00 }
│   │   ├── WEALTH: { min: 1.00, max: 13.00 }
│   │   ├── MUSCLE: { min: 1.00, max: 13.00 }
│   │   ├── FAT: { min: 1.00, max: 13.00 }  // Nota: 13 es el peor estado
│   │   └── ENV: { min: 1, max: 13 }
│   │
│   ├── TASK_CATEGORY_TO_ARCHETYPE
│   │   ├── meditation → MENTAL
│   │   ├── cold_shower → MENTAL
│   │   ├── reading → MENTAL
│   │   ├── wake_early → MENTAL
│   │   ├── posture → CARA
│   │   ├── facial → CARA
│   │   ├── kegel → CARA
│   │   ├── journal → PRODUCTIVIDAD
│   │   ├── skill_learning → PRODUCTIVIDAD
│   │   ├── focus_work → PRODUCTIVIDAD
│   │   ├── strength → FISICO
│   │   ├── cardio → FISICO
│   │   └── hydration → FISICO
│   │
│   ├── TASK_MODIFIERS (Impacto de cada tarea)
│   │   │
│   │   ├── MEDITATION
│   │   │   ├── { vector: AURA, delta: 0.05, operation: 'add' }
│   │   │   └── btcReward: 15
│   │   │
│   │   ├── COLD_SHOWER
│   │   │   ├── { vector: AURA, delta: 0.03, operation: 'add' }
│   │   │   └── btcReward: 20
│   │   │
│   │   ├── READING
│   │   │   ├── { vector: AURA, delta: 0.03, operation: 'add' }
│   │   │   └── btcReward: 15
│   │   │
│   │   ├── WAKE_EARLY
│   │   │   ├── { vector: AURA, delta: 0.02, operation: 'add' }
│   │   │   └── btcReward: 10
│   │   │
│   │   ├── POSTURE
│   │   │   ├── { vector: JAWLINE, delta: 0.03, operation: 'add' }
│   │   │   └── btcReward: 15
│   │   │
│   │   ├── FACIAL
│   │   │   ├── { vector: JAWLINE, delta: 0.04, operation: 'add' }
│   │   │   └── btcReward: 15
│   │   │
│   │   ├── KEGEL
│   │   │   ├── { vector: JAWLINE, delta: 0.02, operation: 'add' }
│   │   │   └── btcReward: 10
│   │   │
│   │   ├── JOURNAL
│   │   │   ├── { vector: WEALTH, delta: 0.03, operation: 'add' }
│   │   │   └── btcReward: 20
│   │   │
│   │   ├── SKILL_LEARNING (por hora)
│   │   │   ├── { vector: WEALTH, delta: 0.05, operation: 'add' }
│   │   │   └── btcReward: 25
│   │   │
│   │   ├── FOCUS_WORK (por hora)
│   │   │   ├── { vector: WEALTH, delta: 0.02, operation: 'add' }
│   │   │   └── btcReward: 20
│   │   │
│   │   ├── STRENGTH
│   │   │   ├── { vector: MUSCLE, delta: 0.05, operation: 'add' }
│   │   │   └── btcReward: 30
│   │   │
│   │   ├── CARDIO
│   │   │   ├── { vector: FAT, delta: 0.05, operation: 'subtract' }
│   │   │   └── btcReward: 25
│   │   │
│   │   └── HYDRATION
│   │       ├── { vector: FAT, delta: 0.01, operation: 'subtract' }
│   │       ├── { vector: MUSCLE, delta: 0.01, operation: 'add' }
│   │       └── btcReward: 10
│   │
│   ├── DAILY_DECAY (Decaimiento si no se hace la tarea)
│   │   ├── AURA: -0.01 por día sin tarea mental
│   │   ├── JAWLINE: -0.01 por día sin tarea cara
│   │   ├── WEALTH: -0.01 por día sin productividad
│   │   ├── MUSCLE: -0.02 por día sin fuerza
│   │   └── FAT: +0.02 por día sin cardio (aumenta)
│   │
│   └── INITIAL_VECTOR_STATE
│       ├── aura_lvl: 1.00
│       ├── face_lvl: 1.00
│       ├── wealth_lvl: 1.00
│       ├── muscle_lvl: 1.00
│       ├── fat_lvl: 13.00  // Empieza en el peor estado
│       └── env_lvl: 1
│
├── 📄 calculations.ts
│   │
│   ├── clamp(value, min, max): number
│   │   └── Limita un valor entre min y max
│   │
│   ├── roundToDecimals(value, decimals): number
│   │   └── Redondea a N decimales (usamos 2)
│   │
│   ├── applyModifier(currentValue, modifier): number
│   │   ├── Input: valor actual, VectorModifier
│   │   ├── Process: aplica delta con operación
│   │   ├── Output: nuevo valor (clamped)
│   │   └── Respeta VECTOR_LIMITS
│   │
│   ├── calculatePhysiqueScore(muscle_lvl, fat_lvl): number
│   │   ├── Fórmula: (muscle_lvl + (14 - fat_lvl)) / 2
│   │   └── Output: 1.0 - 13.0 (score combinado)
│   │
│   ├── calculateOverallScore(vectors: VectorState): number
│   │   ├── Promedio ponderado de todos los vectores
│   │   ├── AURA: 20%
│   │   ├── JAWLINE: 15%
│   │   ├── WEALTH: 25%
│   │   ├── PHYSIQUE (combinado): 30%
│   │   ├── ENV: 10%
│   │   └── Output: 1.0 - 13.0
│   │
│   └── getVectorDelta(before: VectorState, after: VectorState): VectorDelta
│       └── Retorna las diferencias entre dos estados
│
├── 📄 task-impact.ts
│   │
│   ├── getTaskImpact(category: TaskCategory): TaskImpact
│   │   └── Retorna los modificadores para una categoría de tarea
│   │
│   ├── applyTaskToVectors(
│   │     vectors: VectorState, 
│   │     category: TaskCategory
│   │   ): VectorState
│   │   ├── Input: estado actual, categoría de tarea
│   │   ├── Process: aplica todos los modificadores de la tarea
│   │   └── Output: nuevo estado de vectores
│   │
│   ├── applyMultipleTasksToVectors(
│   │     vectors: VectorState, 
│   │     tasks: TaskCategory[]
│   │   ): VectorState
│   │   └── Aplica múltiples tareas secuencialmente
│   │
│   └── calculateTotalBtcFromTasks(tasks: TaskCategory[]): number
│       └── Suma las recompensas BTC de las tareas completadas
│
├── 📄 decay.ts
│   │
│   ├── getDecayForArchetype(archetype: TaskArchetype): VectorModifier[]
│   │   └── Retorna el decay a aplicar si no se hizo ninguna tarea del arquetipo
│   │
│   ├── calculateDailyDecay(
│   │     completedTasks: TaskCategory[],
│   │     allRequiredTasks: TaskCategory[]
│   │   ): VectorModifier[]
│   │   ├── Determina qué arquetipos no tuvieron tareas
│   │   └── Retorna los decays a aplicar
│   │
│   └── applyDecayToVectors(
│       vectors: VectorState, 
│       decays: VectorModifier[]
│     ): VectorState
│       └── Aplica el decay al estado
│
└── 📄 vectors.test.ts
    │
    ├── describe('clamp')
    │   ├── it('returns value when within range')
    │   ├── it('returns min when value below min')
    │   └── it('returns max when value above max')
    │
    ├── describe('applyModifier')
    │   ├── it('adds delta correctly')
    │   ├── it('subtracts delta correctly')
    │   ├── it('respects max limit')
    │   ├── it('respects min limit')
    │   └── it('handles FAT vector inversion correctly')
    │
    ├── describe('applyTaskToVectors')
    │   ├── it('increases AURA for meditation')
    │   ├── it('increases JAWLINE for facial')
    │   ├── it('increases WEALTH for journal')
    │   ├── it('increases MUSCLE for strength')
    │   ├── it('decreases FAT for cardio')
    │   └── it('applies multiple modifiers for hydration')
    │
    ├── describe('calculatePhysiqueScore')
    │   ├── it('returns 1 for worst state (muscle=1, fat=13)')
    │   ├── it('returns 13 for best state (muscle=13, fat=1)')
    │   └── it('returns 7 for middle state')
    │
    ├── describe('calculateDailyDecay')
    │   ├── it('returns no decay when all archetypes have tasks')
    │   ├── it('returns AURA decay when no mental tasks')
    │   ├── it('returns FAT increase when no cardio')
    │   └── it('returns multiple decays for multiple missing archetypes')
    │
    └── describe('applyDecayToVectors')
        ├── it('applies single decay correctly')
        ├── it('applies multiple decays correctly')
        └── it('respects limits after decay')
Tareas Atómicas para 04.1 Sistema de Vectores
yamlCopyTAREA-04.1.1:
  Nombre: "Crear estructura de carpetas para vectors"
  Acción: "Crear /src/lib/core/vectors/ con archivos vacíos"
  Responsable: Antigravity
  Comando: |
    mkdir -p src/lib/core/vectors
    touch src/lib/core/vectors/{index,types,constants,calculations,task-impact,decay}.ts
    touch src/lib/core/vectors/vectors.test.ts
  Criterio de Éxito: "Carpeta y archivos existen"

TAREA-04.1.2:
  Nombre: "Implementar types.ts"
  Acción: "Definir todos los tipos e interfaces"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el archivo /src/lib/core/vectors/types.ts con:
    
    1. enum VectorName con los 6 vectores del cuestionario1:
       - AURA, JAWLINE, WEALTH, MUSCLE, FAT, ENV
    
    2. interface VectorState con los campos exactos de la DB:
       - aura_lvl, face_lvl, wealth_lvl, muscle_lvl, fat_lvl, env_lvl
    
    3. enum TaskArchetype: MENTAL, CARA, PRODUCTIVIDAD, FISICO
    
    4. enum TaskCategory con TODAS las categorías del cuestionario1:
       - Mental: meditation, cold_shower, reading, wake_early
       - Cara: posture, facial, kegel
       - Productividad: journal, skill_learning, focus_work
       - Físico: strength, cardio, hydration
    
    5. interface VectorModifier, TaskImpact, VectorDelta
    
    Usa TypeScript estricto, documenta con JSDoc.
  Criterio de Éxito: "Tipos compilan sin errores"

TAREA-04.1.3:
  Nombre: "Implementar constants.ts"
  Acción: "Definir todas las constantes"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/vectors/constants.ts con:
    
    1. VECTOR_LIMITS: objeto con min/max para cada vector
       - Todos van 1.00-13.00 excepto ENV que es 1-13 entero
       - FAT es especial: 13 es malo, 1 es bueno
    
    2. TASK_CATEGORY_TO_ARCHETYPE: mapeo de categoría a arquetipo
    
    3. TASK_MODIFIERS: objeto con el impacto de cada tarea
       Basado en cuestionario1:
       - meditation: AURA +0.05, 15 BTC
       - cold_shower: AURA +0.03, 20 BTC
       - reading: AURA +0.03, 15 BTC
       - wake_early: AURA +0.02, 10 BTC
       - posture: JAWLINE +0.03, 15 BTC
       - facial: JAWLINE +0.04, 15 BTC
       - kegel: JAWLINE +0.02, 10 BTC
       - journal: WEALTH +0.03, 20 BTC
       - skill_learning: WEALTH +0.05/hora, 25 BTC
       - focus_work: WEALTH +0.02/hora, 20 BTC
       - strength: MUSCLE +0.05, 30 BTC
       - cardio: FAT -0.05, 25 BTC
       - hydration: FAT -0.01, MUSCLE +0.01, 10 BTC
    
    4. DAILY_DECAY: decay por no hacer tareas
       - AURA: -0.01 sin mental
       - JAWLINE: -0.01 sin cara
       - WEALTH: -0.01 sin productividad
       - MUSCLE: -0.02 sin fuerza
       - FAT: +0.02 sin cardio
    
    5. INITIAL_VECTOR_STATE: estado inicial día 1
    
    Usa `as const` para type safety.
  Criterio de Éxito: "Constantes exportan correctamente"

TAREA-04.1.4:
  Nombre: "Implementar calculations.ts - Funciones básicas"
  Acción: "Implementar clamp, roundToDecimals, applyModifier"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/vectors/calculations.ts con:
    
    1. function clamp(value: number, min: number, max: number): number
       - Retorna value si está en rango
       - Retorna min si value < min
       - Retorna max si value > max
    
    2. function roundToDecimals(value: number, decimals: number): number
       - Usa Math.round(value * 10^decimals) / 10^decimals
    
    3. function applyModifier(
         currentValue: number,
         modifier: VectorModifier
       ): number
       - Si operation === 'add': currentValue + delta
       - Si operation === 'subtract': currentValue - delta
       - Clamp resultado usando VECTOR_LIMITS del vector correspondiente
       - Redondear a 2 decimales
    
    IMPORTANTE: Para FAT, recuerda que menor es mejor (1 = definido, 13 = obeso)
  Criterio de Éxito: "Funciones pasan tests básicos"

TAREA-04.1.5:
  Nombre: "Implementar calculations.ts - Funciones de score"
  Acción: "Implementar calculatePhysiqueScore, calculateOverallScore"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Continúa en /src/lib/core/vectors/calculations.ts:
    
    4. function calculatePhysiqueScore(
         muscle_lvl: number, 
         fat_lvl: number
       ): number
       - Fórmula: (muscle_lvl + (14 - fat_lvl)) / 2
       - Esto hace que fat_lvl se "invierta" para el cálculo
       - Resultado: 1.0 a 13.0
       - Redondear a 2 decimales
    
    5. function calculateOverallScore(vectors: VectorState): number
       - Pesos (del cuestionario1):
         - AURA: 20%
         - JAWLINE: 15%
         - WEALTH: 25%
         - PHYSIQUE (usar calculatePhysiqueScore): 30%
         - ENV: 10%
       - Fórmula: suma ponderada de todos
       - Resultado: 1.0 a 13.0
    
    6. function getVectorDelta(
         before: VectorState, 
         after: VectorState
       ): Record<VectorName, number>
       - Calcula la diferencia entre dos estados
       - Útil para mostrar "+0.05 AURA" en la UI
  Criterio de Éxito: "Cálculos matemáticos correctos"

TAREA-04.1.6:
  Nombre: "Implementar task-impact.ts"
  Acción: "Funciones para aplicar tareas a vectores"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/vectors/task-impact.ts:
    
    1. function getTaskImpact(category: TaskCategory): TaskImpact
       - Busca en TASK_MODIFIERS
       - Retorna el impacto completo (modifiers + btcReward)
    
    2. function applyTaskToVectors(
         vectors: VectorState,
         category: TaskCategory
       ): VectorState
       - Obtiene el impacto de la tarea
       - Aplica cada modifier al vector correspondiente
       - Retorna NUEVO objeto (inmutable)
       - NO muta el original
    
    3. function applyMultipleTasksToVectors(
         vectors: VectorState,
         tasks: TaskCategory[]
       ): VectorState
       - Usa reduce para aplicar secuencialmente
       - Orden importa para los límites
    
    4. function calculateTotalBtcFromTasks(
         tasks: TaskCategory[]
       ): number
       - Suma todos los btcReward
       - No considera multiplicadores (eso es de streak)
    
    IMPORTANTE: Todas las funciones deben ser PURAS (sin side effects)
  Criterio de Éxito: "Tareas modifican vectores correctamente"

TAREA-04.1.7:
  Nombre: "Implementar decay.ts"
  Acción: "Funciones de decaimiento biológico"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/vectors/decay.ts:
    
    1. function getArchetypesFromTasks(
         tasks: TaskCategory[]
       ): Set<TaskArchetype>
       - Mapea cada tarea a su arquetipo
       - Retorna set de arquetipos representados
    
    2. function getMissingArchetypes(
         completedTasks: TaskCategory[]
       ): TaskArchetype[]
       - Compara con los 4 arquetipos
       - Retorna los que faltan
    
    3. function getDecayForArchetype(
         archetype: TaskArchetype
       ): VectorModifier[]
       - MENTAL → AURA -0.01
       - CARA → JAWLINE -0.01
       - PRODUCTIVIDAD → WEALTH -0.01
       - FISICO → MUSCLE -0.02, FAT +0.02
    
    4. function calculateDailyDecay(
         completedTasks: TaskCategory[]
       ): VectorModifier[]
       - Obtiene arquetipos faltantes
       - Acumula todos los decays necesarios
    
    5. function applyDecayToVectors(
         vectors: VectorState,
         decays: VectorModifier[]
       ): VectorState
       - Aplica cada decay usando applyModifier
       - Retorna nuevo estado
    
    NOTA: El decay se aplica en Judgement Night si no hubo
    ninguna tarea del arquetipo ese día.
  Criterio de Éxito: "Decay se calcula y aplica correctamente"

TAREA-04.1.8:
  Nombre: "Implementar index.ts"
  Acción: "Exports públicos del módulo"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/vectors/index.ts exportando todo lo público:
    
    // Types
    export type { VectorState, VectorModifier, TaskImpact, VectorDelta } from './types';
    export { VectorName, TaskArchetype, TaskCategory } from './types';
    
    // Constants
    export { 
      VECTOR_LIMITS, 
      TASK_MODIFIERS, 
      DAILY_DECAY,
      INITIAL_VECTOR_STATE 
    } from './constants';
    
    // Calculations
    export {
      clamp,
      roundToDecimals,
      applyModifier,
      calculatePhysiqueScore,
      calculateOverallScore,
      getVectorDelta
    } from './calculations';
    
    // Task Impact
    export {
      getTaskImpact,
      applyTaskToVectors,
      applyMultipleTasksToVectors,
      calculateTotalBtcFromTasks
    } from './task-impact';
    
    // Decay
    export {
      calculateDailyDecay,
      applyDecayToVectors
    } from './decay';
  Criterio de Éxito: "Imports funcionan desde fuera del módulo"

TAREA-04.1.9:
  Nombre: "Implementar tests - clamp y applyModifier"
  Acción: "Tests unitarios de funciones básicas"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/vectors/vectors.test.ts:
    
    import { describe, it, expect } from 'vitest';
    import { clamp, applyModifier, ... } from './index';
    
    describe('clamp', () => {
      it('returns value when within range', () => {
        expect(clamp(5, 1, 10)).toBe(5);
      });
      
      it('returns min when value below min', () => {
        expect(clamp(-5, 1, 10)).toBe(1);
      });
      
      it('returns max when value above max', () => {
        expect(clamp(15, 1, 10)).toBe(10);
      });
      
      it('handles edge case at min', () => {
        expect(clamp(1, 1, 10)).toBe(1);
      });
      
      it('handles edge case at max', () => {
        expect(clamp(10, 1, 10)).toBe(10);
      });
    });
    
    describe('applyModifier', () => {
      it('adds delta correctly', () => {
        const result = applyModifier(5.00, {
          vector: VectorName.AURA,
          delta: 0.05,
          operation: 'add'
        });
        expect(result).toBe(5.05);
      });
      
      it('subtracts delta correctly', () => {...});
      it('respects max limit (13)', () => {...});
      it('respects min limit (1)', () => {...});
    });
  Criterio de Éxito: "Tests pasan"

TAREA-04.1.10:
  Nombre: "Implementar tests - task impact"
  Acción: "Tests de aplicación de tareas"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Continúa en vectors.test.ts:
    
    describe('applyTaskToVectors', () => {
      const initialState: VectorState = {
        aura_lvl: 1.00,
        face_lvl: 1.00,
        wealth_lvl: 1.00,
        muscle_lvl: 1.00,
        fat_lvl: 13.00,
        env_lvl: 1
      };
      
      it('increases AURA for meditation task', () => {
        const result = applyTaskToVectors(initialState, TaskCategory.MEDITATION);
        expect(result.aura_lvl).toBe(1.05);
        expect(result.face_lvl).toBe(1.00); // Sin cambio
      });
      
      it('increases JAWLINE for facial task', () => {
        const result = applyTaskToVectors(initialState, TaskCategory.FACIAL);
        expect(result.face_lvl).toBe(1.04);
      });
      
      it('decreases FAT for cardio task', () => {
        const result = applyTaskToVectors(initialState, TaskCategory.CARDIO);
        expect(result.fat_lvl).toBe(12.95); // 13 - 0.05
      });
      
      it('does not mutate original state', () => {
        const original = { ...initialState };
        applyTaskToVectors(initialState, TaskCategory.MEDITATION);
        expect(initialState).toEqual(original);
      });
      
      it('applies multiple modifiers for hydration', () => {
        const result = applyTaskToVectors(initialState, TaskCategory.HYDRATION);
        expect(result.fat_lvl).toBe(12.99); // -0.01
        expect(result.muscle_lvl).toBe(1.01); // +0.01
      });
    });
  Criterio de Éxito: "Tests pasan"

TAREA-04.1.11:
  Nombre: "Implementar tests - decay"
  Acción: "Tests de decaimiento biológico"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Continúa en vectors.test.ts:
    
    describe('calculateDailyDecay', () => {
      it('returns empty array when all archetypes have tasks', () => {
        const tasks = [
          TaskCategory.MEDITATION, // Mental
          TaskCategory.FACIAL,     // Cara
          TaskCategory.JOURNAL,    // Productividad
          TaskCategory.STRENGTH    // Físico
        ];
        const decay = calculateDailyDecay(tasks);
        expect(decay).toHaveLength(0);
      });
      
      it('returns AURA decay when no mental tasks', () => {
        const tasks = [
          TaskCategory.FACIAL,
          TaskCategory.JOURNAL,
          TaskCategory.STRENGTH
        ];
        const decay = calculateDailyDecay(tasks);
        expect(decay.some(d => d.vector === VectorName.AURA)).toBe(true);
      });
      
      it('returns FAT increase when no cardio/strength', () => {
        const tasks = [
          TaskCategory.MEDITATION,
          TaskCategory.FACIAL,
          TaskCategory.JOURNAL
        ];
        const decay = calculateDailyDecay(tasks);
        const fatDecay = decay.find(d => d.vector === VectorName.FAT);
        expect(fatDecay?.operation).toBe('add'); // FAT aumenta
      });
    });
    
    describe('applyDecayToVectors', () => {
      it('applies decay respecting limits', () => {
        const state: VectorState = {
          aura_lvl: 1.00, // Ya en mínimo
          ...otros
        };
        const decay = [{ vector: VectorName.AURA, delta: 0.01, operation: 'subtract' }];
        const result = applyDecayToVectors(state, decay);
        expect(result.aura_lvl).toBe(1.00); // No baja de 1
      });
    });
  Criterio de Éxito: "Todos los tests pasan"

TAREA-04.1.12:
  Nombre: "Implementar tests - scores"
  Acción: "Tests de cálculo de puntajes"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Continúa en vectors.test.ts:
    
    describe('calculatePhysiqueScore', () => {
      it('returns 1 for worst state (muscle=1, fat=13)', () => {
        expect(calculatePhysiqueScore(1, 13)).toBe(1);
      });
      
      it('returns 13 for best state (muscle=13, fat=1)', () => {
        expect(calculatePhysiqueScore(13, 1)).toBe(13);
      });
      
      it('returns 7 for middle state', () => {
        // muscle=7, fat=7 → (7 + (14-7)) / 2 = (7+7)/2 = 7
        expect(calculatePhysiqueScore(7, 7)).toBe(7);
      });
    });
    
    describe('calculateOverallScore', () => {
      it('returns 1 for initial state', () => {
        const score = calculateOverallScore(INITIAL_VECTOR_STATE);
        expect(score).toBeCloseTo(1, 1);
      });
      
      it('returns 13 for perfect state', () => {
        const perfect: VectorState = {
          aura_lvl: 13,
          face_lvl: 13,
          wealth_lvl: 13,
          muscle_lvl: 13,
          fat_lvl: 1,
          env_lvl: 13
        };
        expect(calculateOverallScore(perfect)).toBeCloseTo(13, 1);
      });
    });
  Criterio de Éxito: "Todos los tests pasan"

TAREA-04.1.13:
  Nombre: "Ejecutar suite completa de tests de vectores"
  Acción: "Verificar que todos los tests pasan"
  Responsable: Antigravity
  Comando: |
    npm run test src/lib/core/vectors/vectors.test.ts
  Criterio de Éxito: "100% de tests pasan, coverage > 90%"

SUBCAJA 04.2: SISTEMA DE NIVELES
Cálculo de Progresión del Usuario
Archivos a Crear
CopyRuta: /src/lib/core/levels/
├── index.ts              (Exports públicos)
├── types.ts              (Tipos de niveles)
├── constants.ts          (Definición de niveles)
├── calculations.ts       (Funciones de cálculo)
└── levels.test.ts        (Tests unitarios)

Tamaño Estimado: ~500 líneas total
Tiempo de Generación: 45-60 minutos
Estructura del Módulo
Copy/src/lib/core/levels/
│
├── 📄 types.ts
│   │
│   ├── LevelNumber (type): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
│   │
│   ├── LevelName (enum)
│   │   ├── INDIGENTE = 1
│   │   ├── ARRIMADO = 2
│   │   ├── ALUCIN = 3
│   │   ├── CHALAN = 4
│   │   ├── GODIN = 5
│   │   ├── ACOMODADO = 6
│   │   ├── PUDIENTE = 7
│   │   ├── MILLONARIO = 8
│   │   ├── MAGNATE = 9
│   │   ├── SEMIDIOS = 10
│   │   ├── ELITE = 11
│   │   ├── LEYENDA = 12
│   │   └── INMORTAL = 13
│   │
│   ├── LevelInfo (interface)
│   │   ├── number: LevelNumber
│   │   ├── name: string
│   │   ├── title: string
│   │   ├── description: string
│   │   ├── minDay: number           // Día mínimo para alcanzar
│   │   ├── maxDay: number | null    // Día máximo (null = sin límite)
│   │   ├── minOverallScore: number  // Score mínimo requerido
│   │   ├── isPostGame: boolean
│   │   └── milestone?: MilestoneInfo
│   │
│   └── MilestoneInfo (interface)
│       ├── type: 'video' | 'badge' | 'unlock'
│       ├── description: string
│       └── content?: string
│
├── 📄 constants.ts
│   │
│   ├── LEVELS: Record<LevelNumber, LevelInfo>
│   │   │
│   │   ├── 1: INDIGENTE
│   │   │   ├── name: "Indigente"
│   │   │   ├── title: "El Punto Más Bajo"
│   │   │   ├── description: "Vives en la calle, sin rumbo ni recursos"
│   │   │   ├── minDay: 1
│   │   │   ├── maxDay: 2
│   │   │   ├── minOverallScore: 1.0
│   │   │   ├── isPostGame: false
│   │   │   └── milestone: { type: 'video', description: 'Avatar mirándose en charco' }
│   │   │
│   │   ├── 2: ARRIMADO
│   │   │   ├── name: "Arrimado"
│   │   │   ├── title: "Pidiendo Asilo"
│   │   │   ├── description: "Un conocido te dio un rincón donde dormir"
│   │   │   ├── minDay: 3
│   │   │   ├── maxDay: 5
│   │   │   ├── minOverallScore: 1.5
│   │   │   ├── isPostGame: false
│   │   │   └── milestone: { type: 'video', description: 'Tocando puerta' }
│   │   │
│   │   ├── 3: ALUCÍN (HITO CRÍTICO)
│   │   │   ├── name: "Alucín"
│   │   │   ├── title: "Fake It Till You Make It"
│   │   │   ├── description: "Primer trabajo, primeras posesiones falsas"
│   │   │   ├── minDay: 6  // ¡DÍA DE CONVERSIÓN!
│   │   │   ├── maxDay: 15
│   │   │   ├── minOverallScore: 2.0
│   │   │   ├── isPostGame: false
│   │   │   └── milestone: { 
│   │   │         type: 'video', 
│   │   │         description: 'Poniéndose gorra y cadena' 
│   │   │       }
│   │   │
│   │   ├── 4: CHALÁN
│   │   │   ├── name: "Chalán"
│   │   │   ├── minDay: 16
│   │   │   ├── maxDay: 30
│   │   │   ├── minOverallScore: 2.5
│   │   │   └── ...
│   │   │
│   │   ├── 5: GODÍN
│   │   │   ├── name: "Godín"
│   │   │   ├── minDay: 31
│   │   │   ├── maxDay: 45
│   │   │   ├── minOverallScore: 3.5
│   │   │   └── ...
│   │   │
│   │   ├── 6: ACOMODADO
│   │   │   ├── name: "Acomodado"
│   │   │   ├── minDay: 46
│   │   │   ├── maxDay: 60
│   │   │   ├── minOverallScore: 5.0
│   │   │   └── ...
│   │   │
│   │   ├── 7: PUDIENTE
│   │   │   ├── name: "Pudiente"
│   │   │   ├── minDay: 61
│   │   │   ├── maxDay: 75
│   │   │   ├── minOverallScore: 6.5
│   │   │   └── ...
│   │   │
│   │   ├── 8: MILLONARIO
│   │   │   ├── name: "Millonario"
│   │   │   ├── minDay: 76
│   │   │   ├── maxDay: 85
│   │   │   ├── minOverallScore: 8.0
│   │   │   └── ...
│   │   │
│   │   ├── 9: MAGNATE
│   │   │   ├── name: "Magnate"
│   │   │   ├── minDay: 86
│   │   │   ├── maxDay: 95
│   │   │   ├── minOverallScore: 9.5
│   │   │   └── ...
│   │   │
│   │   ├── 10: SEMI-DIOS
│   │   │   ├── name: "Semi-Dios"
│   │   │   ├── title: "Dominio Total"
│   │   │   ├── minDay: 96
│   │   │   ├── maxDay: 100
│   │   │   ├── minOverallScore: 11.0
│   │   │   ├── isPostGame: false
│   │   │   └── milestone: { type: 'video', description: 'Celebración épica' }
│   │   │
│   │   ├── 11: ÉLITE (Post-Game)
│   │   │   ├── minDay: 101
│   │   │   ├── isPostGame: true
│   │   │   └── ...
│   │   │
│   │   ├── 12: LEYENDA (Post-Game)
│   │   │   └── ...
│   │   │
│   │   └── 13: INMORTAL (Post-Game)
│   │       └── ...
│   │
│   ├── ENV_LEVEL_BY_DAY
│   │   ├── 1-5: env_lvl 1
│   │   ├── 6-15: env_lvl 2
│   │   ├── 16-30: env_lvl 3
│   │   ├── 31-45: env_lvl 4
│   │   ├── 46-60: env_lvl 5
│   │   ├── 61-75: env_lvl 6-7
│   │   ├── 76-85: env_lvl 8-9
│   │   ├── 86-95: env_lvl 10-11
│   │   └── 96-100: env_lvl 12-13
│   │
│   └── LEVEL_UP_BTC_BONUS
│       └── (nivel) => nivel * 100 BTC
│
├── 📄 calculations.ts
│   │
│   ├── calculateLevel(
│   │     overallScore: number,
│   │     currentDay: number
│   │   ): LevelNumber
│   │   ├── Usa minOverallScore y minDay para determinar
│   │   └── Retorna el nivel más alto que cumple ambos requisitos
│   │
│   ├── getLevelInfo(level: LevelNumber): LevelInfo
│   │   └── Retorna la información completa del nivel
│   │
│   ├── getNextLevel(currentLevel: LevelNumber): LevelInfo | null
│   │   └── Retorna info del siguiente nivel (o null si es máximo)
│   │
│   ├── getProgressToNextLevel(
│   │     currentLevel: LevelNumber,
│   │     overallScore: number,
│   │     currentDay: number
│   │   ): { scoreProgress: number, dayProgress: number }
│   │   └── Porcentaje de progreso hacia el siguiente nivel
│   │
│   ├── calculateEnvLevel(currentDay: number): number
│   │   └── Determina env_lvl basado en el día
│   │
│   ├── shouldLevelUp(
│   │     currentLevel: LevelNumber,
│   │     newOverallScore: number,
│   │     newDay: number
│   │   ): boolean
│   │   └── Determina si el usuario debe subir de nivel
│   │
│   └── getLevelUpReward(newLevel: LevelNumber): number
│       └── BTC de bonus por subir a ese nivel
│
└── 📄 levels.test.ts
    │
    ├── describe('calculateLevel')
    │   ├── it('returns 1 for initial state')
    │   ├── it('returns 3 (Alucín) at day 6 with score 2.0')
    │   ├── it('respects day requirements')
    │   ├── it('respects score requirements')
    │   └── it('returns max 10 for day 100')
    │
    ├── describe('calculateEnvLevel')
    │   ├── it('returns 1 for days 1-5')
    │   ├── it('returns 2 for days 6-15')
    │   └── etc.
    │
    ├── describe('shouldLevelUp')
    │   ├── it('returns true when both requirements met')
    │   ├── it('returns false when day not reached')
    │   └── it('returns false when score not reached')
    │
    └── describe('getProgressToNextLevel')
        └── it('calculates percentage correctly')
Tareas Atómicas para 04.2 Sistema de Niveles
yamlCopyTAREA-04.2.1:
  Nombre: "Crear estructura de carpetas para levels"
  Acción: "Crear /src/lib/core/levels/ con archivos"
  Responsable: Antigravity
  Comando: |
    mkdir -p src/lib/core/levels
    touch src/lib/core/levels/{index,types,constants,calculations}.ts
    touch src/lib/core/levels/levels.test.ts
  Criterio de Éxito: "Archivos existen"

TAREA-04.2.2:
  Nombre: "Implementar types.ts para levels"
  Acción: "Definir tipos de niveles"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/levels/types.ts con:
    
    1. type LevelNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
    
    2. enum LevelName con los nombres del cuestionario1:
       1=INDIGENTE, 2=ARRIMADO, 3=ALUCIN, 4=CHALAN, 5=GODIN,
       6=ACOMODADO, 7=PUDIENTE, 8=MILLONARIO, 9=MAGNATE, 10=SEMIDIOS,
       11=ELITE, 12=LEYENDA, 13=INMORTAL
    
    3. interface LevelInfo con todos los campos
    
    4. interface MilestoneInfo
    
    5. interface LevelProgress para tracking de progreso
  Criterio de Éxito: "Tipos compilan"

TAREA-04.2.3:
  Nombre: "Implementar constants.ts para levels"
  Acción: "Definir todos los niveles con sus propiedades"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/levels/constants.ts con LEVELS.
    
    Basado en cuestionario1, para cada nivel define:
    - number, name, title, description
    - minDay, maxDay (cuándo se puede alcanzar)
    - minOverallScore (score mínimo de vectores)
    - isPostGame (true para 11, 12, 13)
    - milestone (si aplica)
    
    NIVELES DEL CUESTIONARIO1:
    1. Indigente (días 1-2, score 1.0)
    2. Arrimado (días 3-5, score 1.5)
    3. Alucín (días 6-15, score 2.0) - HITO DÍA 6
    4. Chalán (días 16-30, score 2.5)
    5. Godín (días 31-45, score 3.5)
    6. Acomodado (días 46-60, score 5.0)
    7. Pudiente (días 61-75, score 6.5)
    8. Millonario (días 76-85, score 8.0)
    9. Magnate (días 86-95, score 9.5)
    10. Semi-Dios (días 96-100, score 11.0)
    11-13: Post-game (día 101+)
    
    También define ENV_LEVEL_BY_DAY y LEVEL_UP_BTC_BONUS.
  Criterio de Éxito: "13 niveles definidos correctamente"

TAREA-04.2.4:
  Nombre: "Implementar calculations.ts para levels"
  Acción: "Funciones de cálculo de nivel"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/levels/calculations.ts:
    
    1. calculateLevel(overallScore, currentDay): LevelNumber
       - Itera niveles de mayor a menor
       - Retorna el nivel más alto donde:
         * currentDay >= level.minDay
         * overallScore >= level.minOverallScore
       - Si ninguno cumple, retorna 1
    
    2. getLevelInfo(level): LevelInfo
    
    3. getNextLevel(currentLevel): LevelInfo | null
    
    4. getProgressToNextLevel(currentLevel, overallScore, currentDay)
       - Calcula % de progreso en score y días
    
    5. calculateEnvLevel(currentDay): number
       - Mapea día a nivel de entorno según ENV_LEVEL_BY_DAY
    
    6. shouldLevelUp(currentLevel, newOverallScore, newDay): boolean
    
    7. getLevelUpReward(newLevel): number
       - Retorna nivel * 100 BTC
  Criterio de Éxito: "Cálculos correctos"

TAREA-04.2.5:
  Nombre: "Implementar index.ts para levels"
  Acción: "Exports públicos"
  Responsable: Antigravity
  Criterio de Éxito: "Exports funcionan"

TAREA-04.2.6:
  Nombre: "Implementar tests de levels"
  Acción: "Suite completa de tests"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/levels/levels.test.ts:
    
    describe('calculateLevel', () => {
      it('returns 1 for day 1 with initial score', () => {
        expect(calculateLevel(1.0, 1)).toBe(1);
      });
      
      it('returns 3 (Alucín) at day 6 with sufficient score', () => {
        expect(calculateLevel(2.0, 6)).toBe(3);
      });
      
      it('stays at lower level if score not sufficient', () => {
        // Día 6 pero score 1.5 (no alcanza 2.0 para Alucín)
        expect(calculateLevel(1.5, 6)).toBe(2);
      });
      
      it('cannot exceed level 10 before day 101', () => {
        expect(calculateLevel(13.0, 100)).toBe(10);
      });
      
      it('can reach level 11+ after day 100', () => {
        expect(calculateLevel(13.0, 101)).toBeGreaterThanOrEqual(11);
      });
    });
    
    describe('calculateEnvLevel', () => {
      it('returns 1 for days 1-5', () => {
        expect(calculateEnvLevel(1)).toBe(1);
        expect(calculateEnvLevel(5)).toBe(1);
      });
      
      it('returns 2 for days 6-15', () => {
        expect(calculateEnvLevel(6)).toBe(2);
        expect(calculateEnvLevel(15)).toBe(2);
      });
      
      // Más tests para cada rango
    });
    
    describe('shouldLevelUp', () => {
      it('returns true when transitioning from 2 to 3 on day 6', () => {
        expect(shouldLevelUp(2, 2.0, 6)).toBe(true);
      });
      
      it('returns false if already at that level', () => {
        expect(shouldLevelUp(3, 2.5, 10)).toBe(false);
      });
    });
  Criterio de Éxito: "Tests pasan"

TAREA-04.2.7:
  Nombre: "Ejecutar tests de levels"
  Acción: "Verificar que todos pasan"
  Responsable: Antigravity
  Comando: |
    npm run test src/lib/core/levels/levels.test.ts
  Criterio de Éxito: "100% tests pasan"

SUBCAJA 04.3: SISTEMA DE SALUD
Corazones y Supervivencia
Archivos a Crear
CopyRuta: /src/lib/core/health/
├── index.ts
├── types.ts
├── constants.ts
├── calculations.ts
└── health.test.ts

Tamaño Estimado: ~400 líneas
Tiempo de Generación: 30-45 minutos
Estructura del Módulo
Copy/src/lib/core/health/
│
├── 📄 types.ts
│   │
│   ├── HealthStatus (enum)
│   │   ├── HEALTHY = 'healthy'     // 8-10 corazones
│   │   ├── INJURED = 'injured'     // 4-7 corazones
│   │   ├── CRITICAL = 'critical'   // 1-3 corazones
│   │   └── DEAD = 'dead'           // 0 corazones
│   │
│   ├── HealthState (interface)
│   │   ├── current: number         // 0-10 (o 0-13 post-game)
│   │   ├── max: number             // 10 base, 13 expandido
│   │   └── status: HealthStatus
│   │
│   ├── HealthChangeReason (enum)
│   │   ├── DAY_FAILED = 'day_failed'
│   │   ├── DAY_ZERO_TASKS = 'day_zero_tasks'
│   │   ├── STREAK_RECOVERY = 'streak_recovery'
│   │   ├── LIMBO_DECAY = 'limbo_decay'
│   │   └── RESURRECTION = 'resurrection'
│   │
│   └── HealthChange (interface)
│       ├── delta: number
│       ├── reason: HealthChangeReason
│       └── newHealth: number
│
├── 📄 constants.ts
│   │
│   ├── HEALTH_CONFIG
│   │   ├── BASE_MAX: 10
│   │   ├── EXPANDED_MAX: 13
│   │   ├── MIN: 0
│   │   │
│   │   ├── THRESHOLDS
│   │   │   ├── HEALTHY: 8
│   │   │   ├── INJURED: 4
│   │   │   └── CRITICAL: 1
│   │   │
│   │   ├── DAMAGE
│   │   │   ├── DAY_FAILED: -1
│   │   │   └── DAY_ZERO_TASKS: -2
│   │   │
│   │   ├── RECOVERY
│   │   │   └── STREAK_7_DAYS: +1
│   │   │
│   │   └── LIMBO_DECAY
│   │       ├── DAYS_PER_HEART: 3
│   │       └── DAMAGE_PER_INTERVAL: -1
│   │
│   └── INITIAL_HEALTH_STATE
│       ├── current: 10
│       ├── max: 10
│       └── status: HEALTHY
│
├── 📄 calculations.ts
│   │
│   ├── getHealthStatus(current: number, max: number): HealthStatus
│   │   ├── 0 → DEAD
│   │   ├── 1-3 → CRITICAL
│   │   ├── 4-7 → INJURED
│   │   └── 8+ → HEALTHY
│   │
│   ├── calculateHealthChange(
│   │     currentHealth: number,
│   │     reason: HealthChangeReason
│   │   ): HealthChange
│   │   └── Calcula el cambio basado en la razón
│   │
│   ├── applyHealthChange(
│   │     state: HealthState,
│   │     change: HealthChange
│   │   ): HealthState
│   │   └── Aplica cambio respetando límites
│   │
│   ├── canRecoverHealth(
│   │     currentHealth: number,
│   │     maxHealth: number,
│   │     streakDays: number
│   │   ): boolean
│   │   └── True si streak >= 7 y current < max
│   │
│   ├── calculateLimboHealthLoss(
│   │     daysSinceLimbo: number
│   │   ): number
│   │   └── Calcula corazones perdidos en limbo
│   │
│   ├── isDead(health: number): boolean
│   │   └── health <= 0
│   │
│   └── getHealthDisplayInfo(state: HealthState): HealthDisplayInfo
│       └── Info para UI (color, icono, mensaje)
│
└── 📄 health.test.ts
    │
    ├── describe('getHealthStatus')
    ├── describe('calculateHealthChange')
    ├── describe('applyHealthChange')
    ├── describe('canRecoverHealth')
    └── describe('calculateLimboHealthLoss')
Tareas Atómicas para 04.3 Sistema de Salud
yamlCopyTAREA-04.3.1:
  Nombre: "Crear estructura de carpetas para health"
  Acción: "Crear /src/lib/core/health/ con archivos"
  Responsable: Antigravity
  Comando: |
    mkdir -p src/lib/core/health
    touch src/lib/core/health/{index,types,constants,calculations}.ts
    touch src/lib/core/health/health.test.ts
  Criterio de Éxito: "Archivos existen"

TAREA-04.3.2:
  Nombre: "Implementar types.ts para health"
  Acción: "Definir tipos de salud"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/health/types.ts:
    
    1. enum HealthStatus: HEALTHY, INJURED, CRITICAL, DEAD
    2. interface HealthState: { current, max, status }
    3. enum HealthChangeReason: DAY_FAILED, DAY_ZERO_TASKS, 
       STREAK_RECOVERY, LIMBO_DECAY, RESURRECTION
    4. interface HealthChange: { delta, reason, newHealth }
    5. interface HealthDisplayInfo: { color, icon, message, percentage }
  Criterio de Éxito: "Tipos compilan"

TAREA-04.3.3:
  Nombre: "Implementar constants.ts para health"
  Acción: "Definir constantes de salud"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/health/constants.ts:
    
    HEALTH_CONFIG con:
    - BASE_MAX: 10, EXPANDED_MAX: 13, MIN: 0
    - THRESHOLDS: { HEALTHY: 8, INJURED: 4, CRITICAL: 1 }
    - DAMAGE: { DAY_FAILED: -1, DAY_ZERO_TASKS: -2 }
    - RECOVERY: { STREAK_7_DAYS: +1 }
    - LIMBO_DECAY: { DAYS_PER_HEART: 3, DAMAGE: -1 }
    
    INITIAL_HEALTH_STATE con current: 10, max: 10
  Criterio de Éxito: "Constantes exportan"

TAREA-04.3.4:
  Nombre: "Implementar calculations.ts para health"
  Acción: "Funciones de cálculo de salud"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/health/calculations.ts:
    
    1. getHealthStatus(current, max): HealthStatus
    2. calculateHealthChange(currentHealth, reason): HealthChange
    3. applyHealthChange(state, change): HealthState (inmutable)
    4. canRecoverHealth(currentHealth, maxHealth, streakDays): boolean
    5. calculateLimboHealthLoss(daysSinceLimbo): number
    6. isDead(health): boolean
    7. getHealthDisplayInfo(state): objeto para UI
    
    REGLAS DEL CUESTIONARIO1:
    - < 80% completado = -1 corazón
    - 0% completado = -2 corazones
    - Racha 7 días + 100% día = +1 corazón (si < max)
    - Limbo: -1 corazón cada 3 días
  Criterio de Éxito: "Lógica correcta"

TAREA-04.3.5:
  Nombre: "Implementar index.ts para health"
  Acción: "Exports públicos"
  Responsable: Antigravity
  Criterio de Éxito: "Exports funcionan"

TAREA-04.3.6:
  Nombre: "Implementar tests de health"
  Acción: "Suite completa de tests"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/core/health/health.test.ts:
    
    describe('getHealthStatus', () => {
      it('returns DEAD for 0', () => {
        expect(getHealthStatus(0, 10)).toBe(HealthStatus.DEAD);
      });
      it('returns CRITICAL for 1-3', () => {...});
      it('returns INJURED for 4-7', () => {...});
      it('returns HEALTHY for 8+', () => {...});
    });
    
    describe('calculateHealthChange', () => {
      it('returns -1 for DAY_FAILED', () => {...});
      it('returns -2 for DAY_ZERO_TASKS', () => {...});
      it('returns +1 for STREAK_RECOVERY', () => {...});
    });
    
    describe('applyHealthChange', () => {
      it('does not go below 0', () => {
        const state = { current: 1, max: 10, status: HealthStatus.CRITICAL };
        const change = { delta: -2, reason: HealthChangeReason.DAY_FAILED, newHealth: -1 };
        const result = applyHealthChange(state, change);
        expect(result.current).toBe(0);
        expect(result.status).toBe(HealthStatus.DEAD);
      });
      
      it('does not exceed max', () => {...});
    });
    
    describe('canRecoverHealth', () => {
      it('returns true when streak >= 7 and health < max', () => {
        expect(canRecoverHealth(9, 10, 7)).toBe(true);
      });
      it('returns false when already at max', () => {
        expect(canRecoverHealth(10, 10, 10)).toBe(false);
      });
      it('returns false when streak < 7', () => {
        expect(canRecoverHealth(5, 10, 6)).toBe(false);
      });
    });
  Criterio de Éxito: "Tests pasan"

TAREA-04.3.7:
  Nombre: "Ejecutar tests de health"
  Acción: "Verificar tests"
  Responsable: Antigravity
  Comando: npm run test src/lib/core/health/health.test.ts
  Criterio de Éxito: "100% pasan"

SUBCAJA 04.4: SISTEMA DE RACHA
Streak y Multiplicadores
Archivos a Crear
CopyRuta: /src/lib/core/streak/
├── index.ts
├── types.ts
├── constants.ts
├── calculations.ts
└── streak.test.ts

Tamaño Estimado: ~350 líneas
Tiempo de Generación: 25-35 minutos
Estructura del Módulo
Copy/src/lib/core/streak/
│
├── 📄 types.ts
│   │
│   ├── StreakTier (enum)
│   │   ├── NONE = 'none'           // 0 días
│   │   ├── STARTING = 'starting'   // 1-6 días
│   │   ├── BUILDING = 'building'   // 7-13 días
│   │   ├── SOLID = 'solid'         // 14-20 días
│   │   ├── STRONG = 'strong'       // 21-29 días
│   │   ├── IRON = 'iron'           // 30-59 días
│   │   ├── DIAMOND = 'diamond'     // 60-89 días
│   │   └── LEGENDARY = 'legendary' // 90+ días
│   │
│   ├── StreakState (interface)
│   │   ├── days: number
│   │   ├── tier: StreakTier
│   │   ├── multiplier: number
│   │   └── nextMilestone: number | null
│   │
│   ├── StreakMilestone (interface)
│   │   ├── days: number
│   │   ├── reward: StreakReward
│   │   └── description: string
│   │
│   └── StreakReward (interface)
│       ├── btcBonus: number
│       ├── healthRecovery?: boolean
│       └── badge?: string
│
├── 📄 constants.ts
│   │
│   ├── STREAK_MULTIPLIERS
│   │   ├── 0-6: 1.0
│   │   ├── 7-13: 1.1
│   │   ├── 14-20: 1.2
│   │   ├── 21-29: 1.3
│   │   ├── 30-59: 1.5
│   │   ├── 60-89: 1.75
│   │   └── 90+: 2.0
│   │
│   ├── STREAK_MILESTONES
│   │   ├── 7: { btcBonus: 0, healthRecovery: true }
│   │   ├── 14: { btcBonus: 500 }
│   │   ├── 30: { btcBonus: 1500, badge: 'Monthly Master' }
│   │   ├── 60: { btcBonus: 3000 }
│   │   └── 100: { btcBonus: 10000, badge: 'Centurion' }
│   │
│   └── STREAK_TIER_THRESHOLDS
│
├── 📄 calculations.ts
│   │
│   ├── calculateMultiplier(streakDays: number): number
│   │
│   ├── getStreakTier(streakDays: number): StreakTier
│   │
│   ├── getStreakState(streakDays: number): StreakState
│   │
│   ├── processSuccessfulDay(currentStreak: number): {
│   │     newStreak: number,
│   │     milestone: StreakMilestone | null
│   │   }
│   │
│   ├── processFailedDay(): { newStreak: 0 }
│   │
│   ├── getNextMilestone(currentStreak: number): number | null
│   │
│   ├── applyMultiplierToBtc(
│   │     baseBtc: number,
│   │     streakDays: number
│   │   ): number
│   │
│   └── getMilestoneIfReached(
│       previousStreak: number,
│       newStreak: number
│     ): StreakMilestone | null
│
└── 📄 streak.test.ts
Tareas Atómicas para 04.4 Sistema de Racha
yamlCopyTAREA-04.4.1:
  Nombre: "Crear estructura para streak"
  Acción: "Crear archivos"
  Responsable: Antigravity
  Comando: |
    mkdir -p src/lib/core/streak
    touch src/lib/core/streak/{index,types,constants,calculations}.ts
    touch src/lib/core/streak/streak.test.ts
  Criterio de Éxito: "Archivos existen"

TAREA-04.4.2:
  Nombre: "Implementar types.ts para streak"
  Acción: "Definir tipos"
  Responsable: Antigravity
  Criterio de Éxito: "Tipos compilan"

TAREA-04.4.3:
  Nombre: "Implementar constants.ts para streak"
  Acción: "Definir multiplicadores y milestones"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Basado en cuestionario1:
    - Multiplicadores: 1.0, 1.1, 1.2, 1.3, 1.5, 1.75, 2.0
    - Milestone 7 días: recuperación de salud
    - Milestone 30: +1500 BTC, badge
    - Milestone 100: +10000 BTC, badge especial
  Criterio de Éxito: "Constantes definidas"

TAREA-04.4.4:
  Nombre: "Implementar calculations.ts para streak"
  Acción: "Funciones de cálculo"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Funciones:
    1. calculateMultiplier(streakDays): busca en STREAK_MULTIPLIERS
    2. getStreakTier(streakDays): determina tier
    3. getStreakState(streakDays): estado completo
    4. processSuccessfulDay(currentStreak): incrementa, detecta milestone
    5. processFailedDay(): retorna { newStreak: 0 }
    6. applyMultiplierToBtc(baseBtc, streakDays): base * multiplier
    7. getMilestoneIfReached(prev, new): detecta si cruzó milestone
  Criterio de Éxito: "Lógica correcta"

TAREA-04.4.5:
  Nombre: "Implementar index.ts y tests para streak"
  Acción: "Exports y tests"
  Responsable: Antigravity
  Criterio de Éxito: "Tests pasan"

SUBCAJA 04.5: JUDGEMENT NIGHT
Lógica de Cierre del Día
Archivos a Crear
CopyRuta: /src/lib/core/judgement/
├── index.ts
├── types.ts
├── constants.ts
├── processor.ts
└── judgement.test.ts

Tamaño Estimado: ~600 líneas
Tiempo de Generación: 45-60 minutos
Estructura del Módulo
Copy/src/lib/core/judgement/
│
├── 📄 types.ts
│   │
│   ├── DayStatus (enum)
│   │   ├── SUCCESS = 'success'     // 100% completado
│   │   ├── PARTIAL = 'partial'     // 80-99% completado
│   │   ├── FAILED = 'failed'       // < 80% completado
│   │   └── DEATH = 'death'         // Salud llegó a 0
│   │
│   ├── JudgementInput (interface)
│   │   ├── currentDay: number
│   │   ├── completedTasks: TaskCategory[]
│   │   ├── totalRequiredTasks: number
│   │   ├── currentVectors: VectorState
│   │   ├── currentHealth: HealthState
│   │   ├── currentStreak: number
│   │   └── isPostGame: boolean
│   │
│   ├── JudgementResult (interface)
│   │   ├── status: DayStatus
│   │   ├── completionRate: number
│   │   │
│   │   ├── vectorChanges: VectorDelta
│   │   ├── newVectors: VectorState
│   │   │
│   │   ├── healthChange: HealthChange | null
│   │   ├── newHealth: HealthState
│   │   │
│   │   ├── streakChange: { previous: number, new: number }
│   │   ├── streakMilestone: StreakMilestone | null
│   │   │
│   │   ├── btcEarned: number
│   │   ├── btcFromTasks: number
│   │   ├── btcFromMultiplier: number
│   │   ├── btcFromBonuses: number
│   │   │
│   │   ├── levelChange: { previous: number, new: number } | null
│   │   ├── envChange: { previous: number, new: number } | null
│   │   │
│   │   ├── isDead: boolean
│   │   └── shouldGenerateImage: boolean
│   │
│   └── DayLogEntry (interface)
│       └── Para persistir en daily_logs
│
├── 📄 constants.ts
│   │
│   ├── COMPLETION_THRESHOLDS
│   │   ├── SUCCESS: 1.00 (100%)
│   │   ├── PARTIAL: 0.80 (80%)
│   │   └── FAILED: < 0.80
│   │
│   ├── DAY_BONUSES
│   │   ├── PERFECT_DAY: 50 BTC
│   │   └── LEVEL_UP: (nivel) => nivel * 100 BTC
│   │
│   └── IMAGE_GENERATION_PRIORITY
│       ├── SUCCESS: 'high'
│       ├── PARTIAL: 'normal'
│       └── FAILED: 'low'
│
├── 📄 processor.ts
│   │
│   ├── calculateCompletionRate(
│   │     completed: number,
│   │     total: number
│   │   ): number
│   │
│   ├── determineDayStatus(
│   │     completionRate: number,
│   │     healthAfterPenalty: number
│   │   ): DayStatus
│   │
│   ├── processJudgementNight(input: JudgementInput): JudgementResult
│   │   │
│   │   ├── PASO 1: Calcular completion rate
│   │   │
│   │   ├── PASO 2: Aplicar tareas a vectores
│   │   │   └── Usar applyMultipleTasksToVectors()
│   │   │
│   │   ├── PASO 3: Calcular y aplicar decay
│   │   │   └── Usar calculateDailyDecay() y applyDecayToVectors()
│   │   │
│   │   ├── PASO 4: Procesar racha
│   │   │   ├── Si completionRate >= 0.80: processSuccessfulDay()
│   │   │   └── Si no: processFailedDay()
│   │   │
│   │   ├── PASO 5: Calcular cambio de salud
│   │   │   ├── Si < 0.80: -1 corazón
│   │   │   ├── Si = 0: -2 corazones
│   │   │   ├── Si racha milestone 7: puede +1 corazón
│   │   │   └── Aplicar cambio
│   │   │
│   │   ├── PASO 6: Verificar muerte
│   │   │   └── Si health = 0: status = DEATH
│   │   │
│   │   ├── PASO 7: Calcular BTC
│   │   │   ├── btcFromTasks = calculateTotalBtcFromTasks()
│   │   │   ├── btcFromMultiplier = aplicar multiplicador de racha
│   │   │   ├── btcFromBonuses = día perfecto + nivel up
│   │   │   └── btcEarned = suma de todo
│   │   │
│   │   ├── PASO 8: Calcular nuevo nivel
│   │   │   └── Usar calculateLevel() y shouldLevelUp()
│   │   │
│   │   ├── PASO 9: Calcular nuevo env
│   │   │   └── Usar calculateEnvLevel()
│   │   │
│   │   └── PASO 10: Construir resultado
│   │
│   ├── createDayLogEntry(
│   │     input: JudgementInput,
│   │     result: JudgementResult
│   │   ): DayLogEntry
│   │
│   └── getImageGenerationPriority(status: DayStatus): string
│
└── 📄 judgement.test.ts
    │
    ├── describe('calculateCompletionRate')
    │   ├── it('returns 1.0 for 5/5')
    │   ├── it('returns 0.8 for 4/5')
    │   └── it('returns 0.6 for 3/5')
    │
    ├── describe('determineDayStatus')
    │   ├── it('returns SUCCESS for 1.0')
    │   ├── it('returns PARTIAL for 0.8-0.99')
    │   ├── it('returns FAILED for < 0.8')
    │   └── it('returns DEATH if health becomes 0')
    │
    └── describe('processJudgementNight')
        ├── it('processes a perfect day correctly')
        ├── it('processes a partial day correctly')
        ├── it('processes a failed day with health loss')
        ├── it('triggers level up when conditions met')
        ├── it('triggers streak milestone when reached')
        └── it('triggers death when health reaches 0')
Tareas Atómicas para 04.5 Judgement Night
yamlCopyTAREA-04.5.1:
  Nombre: "Crear estructura para judgement"
  Acción: "Crear archivos"
  Responsable: Antigravity
  Comando: |
    mkdir -p src/lib/core/judgement
    touch src/lib/core/judgement/{index,types,constants,processor}.ts
    touch src/lib/core/judgement/judgement.test.ts
  Criterio de Éxito: "Archivos existen"

TAREA-04.5.2:
  Nombre: "Implementar types.ts para judgement"
  Acción: "Definir tipos"
  Responsable: Antigravity
  Criterio de Éxito: "Tipos compilan"

TAREA-04.5.3:
  Nombre: "Implementar constants.ts para judgement"
  Acción: "Definir constantes"
  Responsable: Antigravity
  Criterio de Éxito: "Constantes exportan"

TAREA-04.5.4:
  Nombre: "Implementar processor.ts - Funciones auxiliares"
  Acción: "calculateCompletionRate, determineDayStatus"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa:
    1. calculateCompletionRate(completed, total): number
       - completed / total, maneja división por cero
    
    2. determineDayStatus(completionRate, healthAfterPenalty): DayStatus
       - 1.0 → SUCCESS
       - 0.8-0.99 → PARTIAL
       - < 0.8 → FAILED
       - Si healthAfterPenalty <= 0 → DEATH
  Criterio de Éxito: "Funciones correctas"

TAREA-04.5.5:
  Nombre: "Implementar processor.ts - processJudgementNight"
  Acción: "Función principal del módulo"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa processJudgementNight(input: JudgementInput): JudgementResult
    
    Esta es LA función más importante del motor core.
    Debe:
    1. Calcular completion rate
    2. Aplicar tareas completadas a vectores
    3. Calcular y aplicar decay biológico
    4. Procesar racha (incrementar o resetear)
    5. Calcular cambio de salud
    6. Verificar muerte
    7. Calcular BTC ganados (con multiplicadores)
    8. Verificar level up
    9. Calcular nuevo env_lvl
    10. Construir y retornar resultado completo
    
    USA las funciones de los otros módulos:
    - applyMultipleTasksToVectors, calculateDailyDecay, applyDecayToVectors
    - processSuccessfulDay, processFailedDay, applyMultiplierToBtc
    - calculateHealthChange, applyHealthChange, isDead
    - calculateOverallScore, calculateLevel, shouldLevelUp
    - calculateEnvLevel
    
    La función debe ser PURA - solo cálculos, sin side effects.
  Criterio de Éxito: "Proceso completo funciona"

TAREA-04.5.6:
  Nombre: "Implementar tests de judgement"
  Acción: "Suite completa"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Tests críticos:
    
    1. Día perfecto (100%):
       - Vectores suben
       - Racha incrementa
       - Salud no cambia (o +1 si milestone 7)
       - BTC con multiplicador
       - Status: SUCCESS
    
    2. Día parcial (80-99%):
       - Vectores suben parcialmente
       - Racha incrementa
       - Salud no cambia
       - Status: PARTIAL
    
    3. Día fallido (< 80%):
       - Vectores con decay
       - Racha = 0
       - Salud -1
       - Status: FAILED
    
    4. Día que causa muerte:
       - Usuario con 1 corazón que falla
       - Salud → 0
       - Status: DEATH
    
    5. Level up:
       - Día 6, score suficiente
       - Level 2 → 3 (Alucín)
       - BTC bonus de nivel
    
    6. Streak milestone:
       - Racha 6 → 7
       - Health recovery trigger
  Criterio de Éxito: "Tests pasan"

TAREA-04.5.7:
  Nombre: "Implementar index.ts y ejecutar tests"
  Acción: "Exports y verificación"
  Responsable: Antigravity
  Comando: npm run test src/lib/core/judgement/judgement.test.ts
  Criterio de Éxito: "100% tests pasan"

SUBCAJA 04.6: MUERTE Y RESURRECCIÓN
Reset del Avatar
Archivos a Crear
CopyRuta: /src/lib/core/death/
├── index.ts
├── types.ts
├── constants.ts
├── processor.ts
└── death.test.ts

Tamaño Estimado: ~350 líneas
Tiempo de Generación: 25-35 minutos
Estructura del Módulo
Copy/src/lib/core/death/
│
├── 📄 types.ts
│   │
│   ├── DeathCause (enum)
│   │   ├── HEALTH_DEPLETED = 'health_depleted'
│   │   └── LIMBO_EXPIRED = 'limbo_expired'
│   │
│   ├── DeathState (interface)
│   │   ├── cause: DeathCause
│   │   ├── dayOfDeath: number
│   │   └── timestamp: Date
│   │
│   ├── ResurrectionResult (interface)
│   │   ├── newVectors: VectorState
│   │   ├── newHealth: HealthState
│   │   ├── newStreak: number
│   │   ├── newDay: number
│   │   ├── newLevel: number
│   │   ├── btcRetained: number
│   │   ├── inventoryLocked: InventoryItem[]
│   │   └── vectorsRetained: Partial<VectorState>
│   │
│   └── DeathReport (interface)
│       ├── whatWasLost: string[]
│       ├── whatWasKept: string[]
│       └── motivationalMessage: string
│
├── 📄 constants.ts
│   │
│   ├── DEATH_RESET_CONFIG
│   │   │
│   │   ├── VECTORS_RESET (Lo que se resetea a inicial)
│   │   │   ├── fat_lvl: 13.00
│   │   │   ├── muscle_lvl: 1.00
│   │   │   └── health_points: 10
│   │   │
│   │   ├── VECTORS_RETAINED (Lo que se conserva)
│   │   │   ├── aura_lvl: true  (progreso mental)
│   │   │   ├── face_lvl: true  (progreso facial)
│   │   │   └── wealth_lvl: true (progreso productivo)
│   │   │
│   │   ├── STATS_RESET
│   │   │   ├── streak_days: 0
│   │   │   ├── current_day: 1
│   │   │   └── current_level: 1
│   │   │
│   │   ├── ENV_PENALTY: -3 niveles (mínimo 1)
│   │   │
│   │   └── BTC_PENALTY: 0 (sin penalización de BTC)
│   │
│   └── DEATH_MESSAGES
│       └── Array de mensajes motivacionales
│
├── 📄 processor.ts
│   │
│   ├── processAvatarDeath(
│   │     currentState: FullUserState,
│   │     cause: DeathCause
│   │   ): ResurrectionResult
│   │   │
│   │   ├── PASO 1: Resetear vectores físicos
│   │   │   ├── fat_lvl → 13.00
│   │   │   └── muscle_lvl → 1.00
│   │   │
│   │   ├── PASO 2: Conservar vectores mentales
│   │   │   ├── aura_lvl → mantener
│   │   │   ├── face_lvl → mantener
│   │   │   └── wealth_lvl → mantener
│   │   │
│   │   ├── PASO 3: Resetear stats
│   │   │   ├── health → 10/10
│   │   │   ├── streak → 0
│   │   │   ├── current_day → 1
│   │   │   └── current_level → 1
│   │   │
│   │   ├── PASO 4: Penalizar entorno
│   │   │   └── env_lvl = max(1, env_lvl - 3)
│   │   │
│   │   ├── PASO 5: Conservar BTC
│   │   │   └── Sin penalización
│   │   │
│   │   └── PASO 6: Bloquear inventario
│   │       └── Items con level_required > 1 se bloquean
│   │
│   ├── getLockedInventoryItems(
│   │     inventory: InventoryItem[],
│   │     newLevel: number
│   │   ): InventoryItem[]
│   │
│   ├── generateDeathReport(
│   │     beforeState: FullUserState,
│   │     afterState: ResurrectionResult
│   │   ): DeathReport
│   │
│   └── canEquipItemAfterDeath(
│       item: StoreItem,
│       newLevel: number
│     ): boolean
│
└── 📄 death.test.ts
Tareas Atómicas para 04.6 Muerte y Resurrección
yamlCopyTAREA-04.6.1:
  Nombre: "Crear estructura para death"
  Acción: "Crear archivos"
  Responsable: Antigravity
  Comando: |
    mkdir -p src/lib/core/death
    touch src/lib/core/death/{index,types,constants,processor}.ts
    touch src/lib/core/death/death.test.ts
  Criterio de Éxito: "Archivos existen"

TAREA-04.6.2:
  Nombre: "Implementar types.ts para death"
  Acción: "Definir tipos"
  Responsable: Antigravity
  Criterio de Éxito: "Tipos compilan"

TAREA-04.6.3:
  Nombre: "Implementar constants.ts para death"
  Acción: "Definir configuración de reset"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Basado en cuestionario1:
    
    QUE SE RESETEA:
    - fat_lvl → 13.00 (vuelve a gordo)
    - muscle_lvl → 1.00 (pierde músculo)
    - health_points → 10 (salud completa)
    - streak_days → 0
    - current_day → 1 (reinicia protocolo)
    - current_level → 1
    
    QUE SE CONSERVA:
    - aura_lvl (progreso mental)
    - face_lvl (progreso facial/lookmaxing)
    - wealth_lvl (progreso productivo)
    - BTC en wallet (sin penalización)
    - Inventario (pero bloqueado por nivel)
    
    ENV:
    - Pierde 3 niveles (mínimo 1)
  Criterio de Éxito: "Constantes correctas"

TAREA-04.6.4:
  Nombre: "Implementar processor.ts para death"
  Acción: "Lógica de reset"
  Responsable: Antigravity
  Criterio de Éxito: "Reset funciona correctamente"

TAREA-04.6.5:
    Nombre: "Implementar tests de death"
    Acción: "Tests de reset completos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/death/death.test.ts:

      import { describe, it, expect } from 'vitest';
      import {
        processAvatarDeath,
        getLockedInventoryItems,
        generateDeathReport,
        canEquipItemAfterDeath
      } from './processor';
      import { DeathCause } from './types';

      describe('processAvatarDeath', () => {
        const mockStateBeforeDeath = {
          vectors: {
            aura_lvl: 5.50,
            face_lvl: 4.20,
            wealth_lvl: 6.00,
            muscle_lvl: 8.00,
            fat_lvl: 5.00,
            env_lvl: 7
          },
          health: { current: 0, max: 10, status: 'dead' },
          streak: 15,
          currentDay: 45,
          currentLevel: 5,
          btcBalance: 5000,
          inventory: [
            { id: '1', name: 'Rolex', level_required: 6 },
            { id: '2', name: 'Cadena básica', level_required: 2 }
          ]
        };

        it('resets physical vectors correctly', () => {
          const result = processAvatarDeath(mockStateBeforeDeath, DeathCause.HEALTH_DEPLETED);

          expect(result.newVectors.muscle_lvl).toBe(1.00);
          expect(result.newVectors.fat_lvl).toBe(13.00);
        });

        it('preserves mental/facial/wealth vectors', () => {
          const result = processAvatarDeath(mockStateBeforeDeath, DeathCause.HEALTH_DEPLETED);

          expect(result.newVectors.aura_lvl).toBe(5.50);
          expect(result.newVectors.face_lvl).toBe(4.20);
          expect(result.newVectors.wealth_lvl).toBe(6.00);
        });

        it('resets streak to 0', () => {
          const result = processAvatarDeath(mockStateBeforeDeath, DeathCause.HEALTH_DEPLETED);
          expect(result.newStreak).toBe(0);
        });

        it('resets day to 1', () => {
          const result = processAvatarDeath(mockStateBeforeDeath, DeathCause.HEALTH_DEPLETED);
          expect(result.newDay).toBe(1);
        });

        it('resets level to 1', () => {
          const result = processAvatarDeath(mockStateBeforeDeath, DeathCause.HEALTH_DEPLETED);
          expect(result.newLevel).toBe(1);
        });

        it('restores health to full', () => {
          const result = processAvatarDeath(mockStateBeforeDeath, DeathCause.HEALTH_DEPLETED);
          expect(result.newHealth.current).toBe(10);
          expect(result.newHealth.max).toBe(10);
          expect(result.newHealth.status).toBe('healthy');
        });

        it('preserves BTC balance', () => {
          const result = processAvatarDeath(mockStateBeforeDeath, DeathCause.HEALTH_DEPLETED);
          expect(result.btcRetained).toBe(5000);
        });

        it('penalizes env by 3 levels', () => {
          const result = processAvatarDeath(mockStateBeforeDeath, DeathCause.HEALTH_DEPLETED);
          expect(result.newVectors.env_lvl).toBe(4); // 7 - 3 = 4
        });

        it('env cannot go below 1', () => {
          const stateWithLowEnv = {
            ...mockStateBeforeDeath,
            vectors: { ...mockStateBeforeDeath.vectors, env_lvl: 2 }
          };
          const result = processAvatarDeath(stateWithLowEnv, DeathCause.HEALTH_DEPLETED);
          expect(result.newVectors.env_lvl).toBe(1); // 2 - 3 = -1, clamped to 1
        });
      });

      describe('getLockedInventoryItems', () => {
        const inventory = [
          { id: '1', name: 'Rolex', level_required: 6 },
          { id: '2', name: 'Cadena básica', level_required: 2 },
          { id: '3', name: 'Lentes', level_required: 1 }
        ];

        it('locks items above new level', () => {
          const locked = getLockedInventoryItems(inventory, 1);
          expect(locked).toHaveLength(2);
          expect(locked.map(i => i.id)).toEqual(['1', '2']);
        });

        it('does not lock items at or below new level', () => {
          const locked = getLockedInventoryItems(inventory, 6);
          expect(locked).toHaveLength(0);
        });
      });

      describe('generateDeathReport', () => {
        it('lists what was lost and kept', () => {
          const report = generateDeathReport(mockStateBeforeDeath, mockResurrectionResult);

          expect(report.whatWasLost).toContain('Músculo: 8.00 → 1.00');
          expect(report.whatWasLost).toContain('Racha: 15 días');
          expect(report.whatWasLost).toContain('Progreso: Día 45 → Día 1');

          expect(report.whatWasKept).toContain('AURA: 5.50');
          expect(report.whatWasKept).toContain('BTC: 5,000');
        });

        it('includes motivational message', () => {
          const report = generateDeathReport(mockStateBeforeDeath, mockResurrectionResult);
          expect(report.motivationalMessage.length).toBeGreaterThan(0);
        });
      });
    Criterio de Éxito: "Todos los tests pasan"

  TAREA-04.6.6:
    Nombre: "Implementar index.ts para death"
    Acción: "Exports públicos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/death/index.ts:

      // Types
      export type { DeathState, ResurrectionResult, DeathReport } from './types';
      export { DeathCause } from './types';

      // Constants
      export { DEATH_RESET_CONFIG, DEATH_MESSAGES } from './constants';

      // Processor
      export {
        processAvatarDeath,
        getLockedInventoryItems,
        generateDeathReport,
        canEquipItemAfterDeath
      } from './processor';
    Criterio de Éxito: "Exports funcionan"

  TAREA-04.6.7:
    Nombre: "Ejecutar tests de death"
    Acción: "Verificar suite completa"
    Responsable: Antigravity
    Comando: |
      npm run test src/lib/core/death/death.test.ts
    Criterio de Éxito: "100% tests pasan"

  ---
  SUBCAJA 04.7: ECONOMÍA

  Sistema de BTC y Recompensas

  Archivos a Crear

  Ruta: /src/lib/core/economy/
  ├── index.ts              (Exports públicos)
  ├── types.ts              (Tipos económicos)
  ├── constants.ts          (Recompensas y límites)
  ├── calculations.ts       (Funciones de cálculo)
  └── economy.test.ts       (Tests unitarios)

  Tamaño Estimado: ~450 líneas total
  Tiempo de Generación: 35-45 minutos

  Estructura del Módulo

  /src/lib/core/economy/
  │
  ├── 📄 types.ts
  │   │
  │   ├── Currency (type): 'BTC'
  │   │   └── Nota: Solo existe una moneda, BTC (sats internos)
  │   │
  │   ├── TransactionType (enum)
  │   │   ├── TASK_REWARD = 'task_reward'
  │   │   ├── DAILY_BONUS = 'daily_bonus'
  │   │   ├── STREAK_MILESTONE = 'streak_milestone'
  │   │   ├── LEVEL_UP_BONUS = 'level_up_bonus'
  │   │   ├── PURCHASE = 'purchase'
  │   │   └── REFUND = 'refund'
  │   │
  │   ├── Transaction (interface)
  │   │   ├── id: string
  │   │   ├── type: TransactionType
  │   │   ├── amount: number          // Positivo = ingreso, negativo = gasto
  │   │   ├── description: string
  │   │   ├── timestamp: Date
  │   │   └── metadata?: Record<string, unknown>
  │   │
  │   ├── EarningsBreakdown (interface)
  │   │   ├── taskRewards: number          // Suma de BTC por tareas
  │   │   ├── streakMultiplierBonus: number // Extra por multiplicador
  │   │   ├── dailyBonus: number           // Bonus por día perfecto
  │   │   ├── levelUpBonus: number         // Bonus por subir nivel
  │   │   ├── streakMilestoneBonus: number // Bonus por milestone de racha
  │   │   └── total: number
  │   │
  │   ├── WalletState (interface)
  │   │   ├── balance: number
  │   │   ├── totalEarned: number
  │   │   ├── totalSpent: number
  │   │   └── transactionCount: number
  │   │
  │   └── PurchaseResult (interface)
  │       ├── success: boolean
  │       ├── newBalance: number
  │       ├── error?: string
  │       └── transaction?: Transaction
  │
  ├── 📄 constants.ts
  │   │
  │   ├── BTC_REWARDS_BY_TASK (Recompensa base por tarea)
  │   │   │
  │   │   ├── // MENTAL
  │   │   ├── meditation: 15
  │   │   ├── cold_shower: 20
  │   │   ├── reading: 15
  │   │   ├── wake_early: 10
  │   │   │
  │   │   ├── // CARA
  │   │   ├── posture: 15
  │   │   ├── facial: 15
  │   │   ├── kegel: 10
  │   │   │
  │   │   ├── // PRODUCTIVIDAD
  │   │   ├── journal: 20
  │   │   ├── skill_learning: 25  // Por hora
  │   │   ├── focus_work: 20      // Por hora
  │   │   │
  │   │   ├── // FÍSICO
  │   │   ├── strength: 30
  │   │   ├── cardio: 25
  │   │   └── hydration: 10
  │   │
  │   ├── DAILY_BONUSES
  │   │   ├── PERFECT_DAY: 50          // 100% completado
  │   │   ├── ALMOST_PERFECT: 25       // 80-99% completado
  │   │   └── FAILED_DAY: 0            // < 80%
  │   │
  │   ├── LEVEL_UP_BONUSES
  │   │   ├── Formula: nivel * 100
  │   │   ├── Level 2: 200 BTC
  │   │   ├── Level 3: 300 BTC (Alucín, hito crítico)
  │   │   ├── Level 4: 400 BTC
  │   │   ├── Level 5: 500 BTC
  │   │   ├── Level 6: 600 BTC
  │   │   ├── Level 7: 700 BTC
  │   │   ├── Level 8: 800 BTC
  │   │   ├── Level 9: 900 BTC
  │   │   └── Level 10: 1000 BTC (Semi-Dios)
  │   │
  │   ├── STREAK_MILESTONE_BONUSES
  │   │   ├── 7 días: 0 (solo recuperación de salud)
  │   │   ├── 14 días: 500 BTC
  │   │   ├── 30 días: 1,500 BTC
  │   │   ├── 60 días: 3,000 BTC
  │   │   └── 100 días: 10,000 BTC
  │   │
  │   ├── DAILY_EARNING_CAP: 1000 BTC
  │   │   └── Máximo que puedes ganar en un día (sin milestones)
  │   │
  │   └── LEVEL_MULTIPLIERS (Multiplicador por nivel del usuario)
  │       ├── Level 1-3: 1.0
  │       ├── Level 4-5: 1.1
  │       ├── Level 6-7: 1.2
  │       ├── Level 8-9: 1.3
  │       └── Level 10+: 1.5
  │
  ├── 📄 calculations.ts
  │   │
  │   ├── getTaskReward(category: TaskCategory): number
  │   │   └── Retorna BTC_REWARDS_BY_TASK[category]
  │   │
  │   ├── calculateTaskRewardsTotal(
  │   │     completedTasks: TaskCategory[]
  │   │   ): number
  │   │   └── Suma de todas las recompensas base de tareas
  │   │
  │   ├── applyStreakMultiplier(
  │   │     baseReward: number,
  │   │     streakDays: number
  │   │   ): { total: number, bonus: number }
  │   │   ├── Calcula multiplicador de racha
  │   │   ├── total = baseReward * multiplier
  │   │   └── bonus = total - baseReward
  │   │
  │   ├── applyLevelMultiplier(
  │   │     baseReward: number,
  │   │     level: number
  │   │   ): { total: number, bonus: number }
  │   │   └── Similar pero con multiplicador de nivel
  │   │
  │   ├── getDailyBonus(completionRate: number): number
  │   │   ├── 1.00 → PERFECT_DAY (50)
  │   │   ├── 0.80-0.99 → ALMOST_PERFECT (25)
  │   │   └── < 0.80 → 0
  │   │
  │   ├── getLevelUpBonus(newLevel: number): number
  │   │   └── newLevel * 100
  │   │
  │   ├── getStreakMilestoneBonus(
  │   │     previousStreak: number,
  │   │     newStreak: number
  │   │   ): number
  │   │   └── Si cruzó milestone, retorna el bonus correspondiente
  │   │
  │   ├── calculateDayEarnings(params: {
  │   │     completedTasks: TaskCategory[],
  │   │     completionRate: number,
  │   │     streakDays: number,
  │   │     userLevel: number,
  │   │     leveledUp: boolean,
  │   │     streakMilestoneReached: number | null
  │   │   }): EarningsBreakdown
  │   │   │
  │   │   ├── PASO 1: Calcular recompensas base por tareas
  │   │   ├── PASO 2: Aplicar multiplicador de racha
  │   │   ├── PASO 3: Aplicar multiplicador de nivel
  │   │   ├── PASO 4: Agregar bonus diario
  │   │   ├── PASO 5: Agregar bonus de level up si aplica
  │   │   ├── PASO 6: Agregar bonus de milestone de racha si aplica
  │   │   ├── PASO 7: Aplicar cap diario (excepto milestones)
  │   │   └── PASO 8: Retornar breakdown completo
  │   │
  │   ├── canAffordPurchase(
  │   │     balance: number,
  │   │     price: number
  │   │   ): boolean
  │   │   └── balance >= price
  │   │
  │   ├── processPurchase(
  │   │     wallet: WalletState,
  │   │     price: number,
  │   │     itemName: string
  │   │   ): PurchaseResult
  │   │   ├── Verifica balance suficiente
  │   │   ├── Resta precio del balance
  │   │   └── Crea transacción
  │   │
  │   └── formatBtcAmount(amount: number): string
  │       └── Formato: "1,500 BTC" con separadores de miles
  │
  └── 📄 economy.test.ts
      │
      ├── describe('getTaskReward')
      │   ├── it('returns 15 for meditation')
      │   ├── it('returns 30 for strength')
      │   └── it('returns 0 for unknown task')
      │
      ├── describe('calculateTaskRewardsTotal')
      │   ├── it('sums multiple task rewards')
      │   └── it('returns 0 for empty array')
      │
      ├── describe('applyStreakMultiplier')
      │   ├── it('returns 1.0x for streak 0-6')
      │   ├── it('returns 1.1x for streak 7-13')
      │   ├── it('returns 2.0x for streak 90+')
      │   └── it('calculates bonus correctly')
      │
      ├── describe('getDailyBonus')
      │   ├── it('returns 50 for 100% completion')
      │   ├── it('returns 25 for 80-99% completion')
      │   └── it('returns 0 for < 80%')
      │
      ├── describe('calculateDayEarnings')
      │   ├── it('calculates perfect day correctly')
      │   │   Input: 5 tareas completadas, 100%, streak 10, level 3
      │   │   Expected: tasks + streak bonus + daily bonus
      │   │
      │   ├── it('applies level multiplier correctly')
      │   ├── it('includes level up bonus when applicable')
      │   ├── it('includes streak milestone bonus when reached')
      │   ├── it('respects daily cap')
      │   └── it('excludes milestones from cap')
      │
      ├── describe('processPurchase')
      │   ├── it('succeeds when balance sufficient')
      │   ├── it('fails when balance insufficient')
      │   └── it('updates wallet state correctly')
      │
      └── describe('formatBtcAmount')
          ├── it('formats 1500 as "1,500 BTC"')
          └── it('formats 1000000 as "1,000,000 BTC"')

  Tareas Atómicas para 04.7 Economía

  TAREA-04.7.1:
    Nombre: "Crear estructura para economy"
    Acción: "Crear carpeta y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p src/lib/core/economy
      touch src/lib/core/economy/{index,types,constants,calculations}.ts
      touch src/lib/core/economy/economy.test.ts
    Criterio de Éxito: "Archivos existen"

  TAREA-04.7.2:
    Nombre: "Implementar types.ts para economy"
    Acción: "Definir tipos económicos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/economy/types.ts:

      1. type Currency = 'BTC'

      2. enum TransactionType {
           TASK_REWARD = 'task_reward',
           DAILY_BONUS = 'daily_bonus',
           STREAK_MILESTONE = 'streak_milestone',
           LEVEL_UP_BONUS = 'level_up_bonus',
           PURCHASE = 'purchase',
           REFUND = 'refund'
         }

      3. interface Transaction {
           id: string;
           type: TransactionType;
           amount: number;
           description: string;
           timestamp: Date;
           metadata?: Record<string, unknown>;
         }

      4. interface EarningsBreakdown {
           taskRewards: number;
           streakMultiplierBonus: number;
           dailyBonus: number;
           levelUpBonus: number;
           streakMilestoneBonus: number;
           total: number;
         }

      5. interface WalletState {
           balance: number;
           totalEarned: number;
           totalSpent: number;
           transactionCount: number;
         }

      6. interface PurchaseResult {
           success: boolean;
           newBalance: number;
           error?: string;
           transaction?: Transaction;
         }

      Documenta con JSDoc.
    Criterio de Éxito: "Tipos compilan sin errores"

  TAREA-04.7.3:
    Nombre: "Implementar constants.ts para economy"
    Acción: "Definir recompensas y límites"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/economy/constants.ts:

      import { TaskCategory } from '../vectors/types';

      export const BTC_REWARDS_BY_TASK: Record<TaskCategory, number> = {
        // MENTAL
        meditation: 15,
        cold_shower: 20,
        reading: 15,
        wake_early: 10,

        // CARA
        posture: 15,
        facial: 15,
        kegel: 10,

        // PRODUCTIVIDAD
        journal: 20,
        skill_learning: 25,
        focus_work: 20,

        // FÍSICO
        strength: 30,
        cardio: 25,
        hydration: 10
      } as const;

      export const DAILY_BONUSES = {
        PERFECT_DAY: 50,      // 100% completado
        ALMOST_PERFECT: 25,   // 80-99% completado
        FAILED_DAY: 0         // < 80%
      } as const;

      export const LEVEL_UP_BONUS_MULTIPLIER = 100;
      // Level 3 = 300 BTC, Level 10 = 1000 BTC

      export const STREAK_MILESTONE_BONUSES: Record<number, number> = {
        7: 0,        // Solo recuperación de salud
        14: 500,
        30: 1500,
        60: 3000,
        100: 10000
      } as const;

      export const DAILY_EARNING_CAP = 1000;

      export const LEVEL_MULTIPLIERS: Record<number, number> = {
        1: 1.0, 2: 1.0, 3: 1.0,
        4: 1.1, 5: 1.1,
        6: 1.2, 7: 1.2,
        8: 1.3, 9: 1.3,
        10: 1.5, 11: 1.5, 12: 1.5, 13: 1.5
      } as const;

      export const INITIAL_WALLET_STATE: WalletState = {
        balance: 0,
        totalEarned: 0,
        totalSpent: 0,
        transactionCount: 0
      };
    Criterio de Éxito: "Constantes exportan correctamente"

  TAREA-04.7.4:
    Nombre: "Implementar calculations.ts - Funciones básicas"
    Acción: "getTaskReward, calculateTaskRewardsTotal"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/economy/calculations.ts:

      import { TaskCategory } from '../vectors/types';
      import { BTC_REWARDS_BY_TASK, DAILY_BONUSES, LEVEL_MULTIPLIERS } from './constants';
      import { calculateStreakMultiplier } from '../streak/calculations';

      export function getTaskReward(category: TaskCategory): number {
        return BTC_REWARDS_BY_TASK[category] ?? 0;
      }

      export function calculateTaskRewardsTotal(completedTasks: TaskCategory[]): number {
        return completedTasks.reduce((sum, task) => sum + getTaskReward(task), 0);
      }

      export function applyStreakMultiplier(
        baseReward: number,
        streakDays: number
      ): { total: number; bonus: number } {
        const multiplier = calculateStreakMultiplier(streakDays);
        const total = Math.round(baseReward * multiplier);
        const bonus = total - baseReward;
        return { total, bonus };
      }

      export function applyLevelMultiplier(
        baseReward: number,
        level: number
      ): { total: number; bonus: number } {
        const multiplier = LEVEL_MULTIPLIERS[level] ?? 1.0;
        const total = Math.round(baseReward * multiplier);
        const bonus = total - baseReward;
        return { total, bonus };
      }

      export function getDailyBonus(completionRate: number): number {
        if (completionRate >= 1.0) return DAILY_BONUSES.PERFECT_DAY;
        if (completionRate >= 0.8) return DAILY_BONUSES.ALMOST_PERFECT;
        return DAILY_BONUSES.FAILED_DAY;
      }
    Criterio de Éxito: "Funciones básicas funcionan"

  TAREA-04.7.5:
    Nombre: "Implementar calculations.ts - calculateDayEarnings"
    Acción: "Función principal de economía diaria"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Continúa en /src/lib/core/economy/calculations.ts:

      import {
        LEVEL_UP_BONUS_MULTIPLIER,
        STREAK_MILESTONE_BONUSES,
        DAILY_EARNING_CAP
      } from './constants';

      export function getLevelUpBonus(newLevel: number): number {
        return newLevel * LEVEL_UP_BONUS_MULTIPLIER;
      }

      export function getStreakMilestoneBonus(
        previousStreak: number,
        newStreak: number
      ): number {
        const milestones = Object.keys(STREAK_MILESTONE_BONUSES)
          .map(Number)
          .sort((a, b) => a - b);

        for (const milestone of milestones) {
          if (previousStreak < milestone && newStreak >= milestone) {
            return STREAK_MILESTONE_BONUSES[milestone];
          }
        }
        return 0;
      }

      interface DayEarningsParams {
        completedTasks: TaskCategory[];
        completionRate: number;
        streakDays: number;
        userLevel: number;
        leveledUp: boolean;
        newLevel?: number;
        previousStreak: number;
      }

      export function calculateDayEarnings(params: DayEarningsParams): EarningsBreakdown {
        const {
          completedTasks,
          completionRate,
          streakDays,
          userLevel,
          leveledUp,
          newLevel,
          previousStreak
        } = params;

        // PASO 1: Recompensas base por tareas
        const taskRewardsBase = calculateTaskRewardsTotal(completedTasks);

        // PASO 2: Aplicar multiplicador de racha
        const streakResult = applyStreakMultiplier(taskRewardsBase, streakDays);

        // PASO 3: Aplicar multiplicador de nivel
        const levelResult = applyLevelMultiplier(streakResult.total, userLevel);

        // PASO 4: Bonus diario
        const dailyBonus = getDailyBonus(completionRate);

        // PASO 5: Bonus level up
        const levelUpBonus = leveledUp && newLevel ? getLevelUpBonus(newLevel) : 0;

        // PASO 6: Bonus milestone racha
        const streakMilestoneBonus = getStreakMilestoneBonus(previousStreak, streakDays);

        // Calcular subtotal sin milestones (para cap)
        const regularEarnings = levelResult.total + dailyBonus;
        const cappedRegularEarnings = Math.min(regularEarnings, DAILY_EARNING_CAP);

        // Total: capped regular + milestones (sin cap)
        const total = cappedRegularEarnings + levelUpBonus + streakMilestoneBonus;

        return {
          taskRewards: taskRewardsBase,
          streakMultiplierBonus: streakResult.bonus + levelResult.bonus,
          dailyBonus,
          levelUpBonus,
          streakMilestoneBonus,
          total
        };
      }
    Criterio de Éxito: "Cálculo de ganancias funciona"

  TAREA-04.7.6:
    Nombre: "Implementar calculations.ts - processPurchase"
    Acción: "Funciones de compra"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Continúa en /src/lib/core/economy/calculations.ts:

      export function canAffordPurchase(balance: number, price: number): boolean {
        return balance >= price;
      }

      export function processPurchase(
        wallet: WalletState,
        price: number,
        itemName: string
      ): PurchaseResult {
        if (!canAffordPurchase(wallet.balance, price)) {
          return {
            success: false,
            newBalance: wallet.balance,
            error: `Saldo insuficiente. Necesitas ${formatBtcAmount(price)} pero tienes ${formatBtcAmount(wallet.balance)}`
          };
        }

        const newBalance = wallet.balance - price;
        const transaction: Transaction = {
          id: generateTransactionId(),
          type: TransactionType.PURCHASE,
          amount: -price,
          description: `Compra: ${itemName}`,
          timestamp: new Date()
        };

        return {
          success: true,
          newBalance,
          transaction
        };
      }

      export function formatBtcAmount(amount: number): string {
        return amount.toLocaleString('es-MX') + ' BTC';
      }

      function generateTransactionId(): string {
        return `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      }

      export function createEarningsTransaction(
        breakdown: EarningsBreakdown,
        day: number
      ): Transaction {
        return {
          id: generateTransactionId(),
          type: TransactionType.TASK_REWARD,
          amount: breakdown.total,
          description: `Ganancias del Día ${day}`,
          timestamp: new Date(),
          metadata: breakdown
        };
      }
    Criterio de Éxito: "Sistema de compras funciona"

  TAREA-04.7.7:
    Nombre: "Implementar index.ts para economy"
    Acción: "Exports públicos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/economy/index.ts:

      // Types
      export type {
        Transaction,
        EarningsBreakdown,
        WalletState,
        PurchaseResult
      } from './types';
      export { TransactionType } from './types';

      // Constants
      export {
        BTC_REWARDS_BY_TASK,
        DAILY_BONUSES,
        LEVEL_UP_BONUS_MULTIPLIER,
        STREAK_MILESTONE_BONUSES,
        DAILY_EARNING_CAP,
        LEVEL_MULTIPLIERS,
        INITIAL_WALLET_STATE
      } from './constants';

      // Calculations
      export {
        getTaskReward,
        calculateTaskRewardsTotal,
        applyStreakMultiplier,
        applyLevelMultiplier,
        getDailyBonus,
        getLevelUpBonus,
        getStreakMilestoneBonus,
        calculateDayEarnings,
        canAffordPurchase,
        processPurchase,
        formatBtcAmount,
        createEarningsTransaction
      } from './calculations';
    Criterio de Éxito: "Exports funcionan"

  TAREA-04.7.8:
    Nombre: "Implementar tests de economy"
    Acción: "Suite completa de tests"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/economy/economy.test.ts:

      import { describe, it, expect } from 'vitest';
      import {
        getTaskReward,
        calculateTaskRewardsTotal,
        applyStreakMultiplier,
        getDailyBonus,
        getLevelUpBonus,
        getStreakMilestoneBonus,
        calculateDayEarnings,
        canAffordPurchase,
        processPurchase,
        formatBtcAmount
      } from './calculations';
      import { TaskCategory } from '../vectors/types';

      describe('getTaskReward', () => {
        it('returns 15 for meditation', () => {
          expect(getTaskReward(TaskCategory.MEDITATION)).toBe(15);
        });

        it('returns 30 for strength', () => {
          expect(getTaskReward(TaskCategory.STRENGTH)).toBe(30);
        });

        it('returns 25 for cardio', () => {
          expect(getTaskReward(TaskCategory.CARDIO)).toBe(25);
        });
      });

      describe('calculateTaskRewardsTotal', () => {
        it('sums multiple task rewards correctly', () => {
          const tasks = [
            TaskCategory.MEDITATION, // 15
            TaskCategory.STRENGTH,   // 30
            TaskCategory.CARDIO      // 25
          ];
          expect(calculateTaskRewardsTotal(tasks)).toBe(70);
        });

        it('returns 0 for empty array', () => {
          expect(calculateTaskRewardsTotal([])).toBe(0);
        });
      });

      describe('applyStreakMultiplier', () => {
        it('returns 1.0x for streak 0-6', () => {
          const result = applyStreakMultiplier(100, 5);
          expect(result.total).toBe(100);
          expect(result.bonus).toBe(0);
        });

        it('returns 1.1x for streak 7-13', () => {
          const result = applyStreakMultiplier(100, 10);
          expect(result.total).toBe(110);
          expect(result.bonus).toBe(10);
        });

        it('returns 2.0x for streak 90+', () => {
          const result = applyStreakMultiplier(100, 95);
          expect(result.total).toBe(200);
          expect(result.bonus).toBe(100);
        });
      });

      describe('getDailyBonus', () => {
        it('returns 50 for 100% completion', () => {
          expect(getDailyBonus(1.0)).toBe(50);
        });

        it('returns 25 for 80% completion', () => {
          expect(getDailyBonus(0.8)).toBe(25);
        });

        it('returns 25 for 95% completion', () => {
          expect(getDailyBonus(0.95)).toBe(25);
        });

        it('returns 0 for 79% completion', () => {
          expect(getDailyBonus(0.79)).toBe(0);
        });
      });

      describe('getLevelUpBonus', () => {
        it('returns 300 for level 3 (Alucín)', () => {
          expect(getLevelUpBonus(3)).toBe(300);
        });

        it('returns 1000 for level 10 (Semi-Dios)', () => {
          expect(getLevelUpBonus(10)).toBe(1000);
        });
      });

      describe('getStreakMilestoneBonus', () => {
        it('returns 500 when crossing 14 days', () => {
          expect(getStreakMilestoneBonus(13, 14)).toBe(500);
        });

        it('returns 1500 when crossing 30 days', () => {
          expect(getStreakMilestoneBonus(29, 30)).toBe(1500);
        });

        it('returns 0 when not crossing milestone', () => {
          expect(getStreakMilestoneBonus(8, 9)).toBe(0);
        });

        it('returns 10000 when crossing 100 days', () => {
          expect(getStreakMilestoneBonus(99, 100)).toBe(10000);
        });
      });

      describe('calculateDayEarnings', () => {
        it('calculates perfect day correctly', () => {
          const result = calculateDayEarnings({
            completedTasks: [
              TaskCategory.MEDITATION, // 15
              TaskCategory.STRENGTH,   // 30
              TaskCategory.CARDIO,     // 25
              TaskCategory.JOURNAL     // 20
            ],
            completionRate: 1.0,
            streakDays: 10,  // 1.1x
            userLevel: 3,    // 1.0x
            leveledUp: false,
            previousStreak: 9
          });

          // Base: 90
          // Streak 1.1x: 99, bonus: 9
          // Level 1.0x: 99, bonus: 0
          // Daily bonus: 50
          // Total regular: 149 (bajo cap de 1000)
          expect(result.taskRewards).toBe(90);
          expect(result.dailyBonus).toBe(50);
          expect(result.total).toBeGreaterThan(130);
        });

        it('respects daily cap', () => {
          // Crear escenario con muchas tareas para exceder cap
          const manyTasks = Array(20).fill(TaskCategory.STRENGTH); // 20 * 30 = 600

          const result = calculateDayEarnings({
            completedTasks: manyTasks,
            completionRate: 1.0,
            streakDays: 95,  // 2.0x
            userLevel: 10,   // 1.5x
            leveledUp: false,
            previousStreak: 94
          });

          // Base: 600
          // Streak 2.0x: 1200
          // Level 1.5x: 1800
          // Daily: 50
          // Should be capped at 1000 + daily bonus
          expect(result.total).toBeLessThanOrEqual(1050);
        });

        it('includes level up bonus when applicable', () => {
          const result = calculateDayEarnings({
            completedTasks: [TaskCategory.MEDITATION],
            completionRate: 1.0,
            streakDays: 5,
            userLevel: 3,
            leveledUp: true,
            newLevel: 3,
            previousStreak: 4
          });

          expect(result.levelUpBonus).toBe(300);
        });
      });

      describe('processPurchase', () => {
        const wallet: WalletState = {
          balance: 1000,
          totalEarned: 1000,
          totalSpent: 0,
          transactionCount: 0
        };

        it('succeeds when balance sufficient', () => {
          const result = processPurchase(wallet, 500, 'Cadena de oro');

          expect(result.success).toBe(true);
          expect(result.newBalance).toBe(500);
          expect(result.transaction).toBeDefined();
          expect(result.transaction?.amount).toBe(-500);
        });

        it('fails when balance insufficient', () => {
          const result = processPurchase(wallet, 1500, 'Rolex');

          expect(result.success).toBe(false);
          expect(result.newBalance).toBe(1000);
          expect(result.error).toContain('insuficiente');
        });
      });

      describe('formatBtcAmount', () => {
        it('formats 1500 correctly', () => {
          expect(formatBtcAmount(1500)).toBe('1,500 BTC');
        });

        it('formats 1000000 correctly', () => {
          expect(formatBtcAmount(1000000)).toBe('1,000,000 BTC');
        });
      });
    Criterio de Éxito: "Todos los tests pasan"

  TAREA-04.7.9:
    Nombre: "Ejecutar tests de economy"
    Acción: "Verificar suite completa"
    Responsable: Antigravity
    Comando: |
      npm run test src/lib/core/economy/economy.test.ts
    Criterio de Éxito: "100% tests pasan"

  ---
  SUBCAJA 04.8: PROTOCOLO DE 100 DÍAS

  Estructura Temporal del Sistema

  Archivos a Crear

  Ruta: /src/lib/core/protocol/
  ├── index.ts              (Exports públicos)
  ├── types.ts              (Tipos del protocolo)
  ├── constants.ts          (Fases y configuración)
  ├── day-structure.ts      (Estructura de tareas por día)
  ├── milestones.ts         (Hitos especiales)
  └── protocol.test.ts      (Tests unitarios)

  Tamaño Estimado: ~650 líneas total
  Tiempo de Generación: 50-65 minutos

  Estructura del Módulo

  /src/lib/core/protocol/
  │
  ├── 📄 types.ts
  │   │
  │   ├── ProtocolPhase (enum)
  │   │   ├── TRIAL = 'trial'           // Días 1-5
  │   │   ├── FOUNDATION = 'foundation' // Días 6-30
  │   │   ├── BUILDING = 'building'     // Días 31-60
  │   │   ├── MASTERY = 'mastery'       // Días 61-100
  │   │   └── POST_GAME = 'post_game'   // Día 101+
  │   │
  │   ├── PhaseInfo (interface)
  │   │   ├── phase: ProtocolPhase
  │   │   ├── name: string
  │   │   ├── startDay: number
  │   │   ├── endDay: number
  │   │   ├── description: string
  │   │   ├── difficultyMultiplier: number
  │   │   ├── tasksPerDay: number
  │   │   └── unlockedFeatures: string[]
  │   │
  │   ├── DayConfig (interface)
  │   │   ├── dayNumber: number
  │   │   ├── phase: ProtocolPhase
  │   │   ├── requiredTasks: TaskCategory[]
  │   │   ├── optionalTasks: TaskCategory[]
  │   │   ├── specialEvent?: SpecialEvent
  │   │   └── isPaywallDay: boolean
  │   │
  │   ├── SpecialEvent (interface)
  │   │   ├── type: 'milestone' | 'challenge' | 'bonus'
  │   │   ├── name: string
  │   │   ├── description: string
  │   │   └── rewards: EventReward[]
  │   │
  │   └── EventReward (interface)
  │       ├── type: 'btc' | 'item' | 'badge' | 'health'
  │       ├── amount?: number
  │       └── itemId?: string
  │
  ├── 📄 constants.ts
  │   │
  │   ├── PROTOCOL_CONFIG
  │   │   ├── TOTAL_DAYS: 100
  │   │   ├── TRIAL_DAYS: 5
  │   │   ├── PAYWALL_DAY: 6
  │   │   └── POST_GAME_START: 101
  │   │
  │   ├── PHASES: Record<ProtocolPhase, PhaseInfo>
  │   │   │
  │   │   ├── TRIAL (Días 1-5)
  │   │   │   ├── name: "Prueba Gratuita"
  │   │   │   ├── difficultyMultiplier: 0.6
  │   │   │   ├── tasksPerDay: 3
  │   │   │   └── unlockedFeatures: ['basic_tasks', 'avatar_preview']
  │   │   │
  │   │   ├── FOUNDATION (Días 6-30)
  │   │   │   ├── name: "Fundación"
  │   │   │   ├── difficultyMultiplier: 0.8
  │   │   │   ├── tasksPerDay: 4
  │   │   │   └── unlockedFeatures: ['full_tasks', 'store_basic', 'avatar_full']
  │   │   │
  │   │   ├── BUILDING (Días 31-60)
  │   │   │   ├── name: "Construcción"
  │   │   │   ├── difficultyMultiplier: 1.0
  │   │   │   ├── tasksPerDay: 5
  │   │   │   └── unlockedFeatures: ['store_premium', 'advanced_stats']
  │   │   │
  │   │   ├── MASTERY (Días 61-100)
  │   │   │   ├── name: "Maestría"
  │   │   │   ├── difficultyMultiplier: 1.2
  │   │   │   ├── tasksPerDay: 6
  │   │   │   └── unlockedFeatures: ['elite_store', 'full_customization']
  │   │   │
  │   │   └── POST_GAME (Día 101+)
  │   │       ├── name: "Post-Game"
  │   │       ├── difficultyMultiplier: 1.5
  │   │       ├── tasksPerDay: 6
  │   │       └── unlockedFeatures: ['infinite_mode', 'leaderboards']
  │   │
  │   ├── TASKS_BY_ARCHETYPE
  │   │   ├── MENTAL: [meditation, cold_shower, reading, wake_early]
  │   │   ├── CARA: [posture, facial, kegel]
  │   │   ├── PRODUCTIVIDAD: [journal, skill_learning, focus_work]
  │   │   └── FISICO: [strength, cardio, hydration]
  │   │
  │   └── SPECIAL_DAYS: Record<number, SpecialEvent>
  │       ├── 6: "Día de Conversión" (Paywall)
  │       ├── 30: "Primer Mes" (Badge + 1500 BTC)
  │       ├── 60: "Medio Camino" (Badge + 3000 BTC)
  │       └── 100: "Victoria Final" (Badge épico + 10000 BTC)
  │
  ├── 📄 day-structure.ts
  │   │
  │   ├── getCurrentPhase(dayNumber: number): ProtocolPhase
  │   │
  │   ├── getPhaseInfo(phase: ProtocolPhase): PhaseInfo
  │   │
  │   ├── getDayConfig(dayNumber: number): DayConfig
  │   │   ├── Determina fase
  │   │   ├── Genera tareas requeridas según fase
  │   │   ├── Genera tareas opcionales
  │   │   └── Agrega evento especial si aplica
  │   │
  │   ├── generateDailyTasks(
  │   │     dayNumber: number,
  │   │     userPreferences?: TaskPreferences
  │   │   ): { required: TaskCategory[], optional: TaskCategory[] }
  │   │   │
  │   │   ├── TRIAL (3 tareas)
  │   │   │   ├── 1 Mental
  │   │   │   ├── 1 Físico
  │   │   │   └── 1 Opcional (cualquier arquetipo)
  │   │   │
  │   │   ├── FOUNDATION (4 tareas)
  │   │   │   ├── 1 Mental
  │   │   │   ├── 1 Cara
  │   │   │   ├── 1 Físico
  │   │   │   └── 1 Productividad
  │   │   │
  │   │   ├── BUILDING (5 tareas)
  │   │   │   ├── 1 Mental
  │   │   │   ├── 1 Cara
  │   │   │   ├── 1 Productividad
  │   │   │   └── 2 Físico
  │   │   │
  │   │   └── MASTERY (6 tareas)
  │   │       ├── 2 Mental
  │   │       ├── 1 Cara
  │   │       ├── 1 Productividad
  │   │       └── 2 Físico
  │   │
  │   ├── isPaywallDay(dayNumber: number): boolean
  │   │   └── dayNumber === PROTOCOL_CONFIG.PAYWALL_DAY
  │   │
  │   ├── isTrialExpired(dayNumber: number): boolean
  │   │   └── dayNumber > PROTOCOL_CONFIG.TRIAL_DAYS
  │   │
  │   ├── getProgressPercentage(dayNumber: number): number
  │   │   └── Math.min(100, (dayNumber / 100) * 100)
  │   │
  │   └── getDaysRemaining(dayNumber: number): number
  │       └── Math.max(0, 100 - dayNumber)
  │
  ├── 📄 milestones.ts
  │   │
  │   ├── getSpecialEvent(dayNumber: number): SpecialEvent | null
  │   │
  │   ├── isMilestoneDay(dayNumber: number): boolean
  │   │
  │   ├── getMilestoneRewards(dayNumber: number): EventReward[]
  │   │
  │   ├── MILESTONE_MESSAGES: Record<number, string>
  │   │   ├── 6: "¡Bienvenido al sistema completo! Tu viaje de 100 días comienza ahora."
  │   │   ├── 30: "¡Primer mes completado! Has demostrado consistencia."
  │   │   ├── 60: "¡Medio camino! Tu disciplina es inquebrantable."
  │   │   └── 100: "¡VICTORIA! Has completado el protocolo METAMEN100."
  │   │
  │   └── generateMilestoneReport(
  │       dayNumber: number,
  │       stats: UserStats
  │     ): MilestoneReport
  │
  └── 📄 protocol.test.ts
      │
      ├── describe('getCurrentPhase')
      │   ├── it('returns TRIAL for days 1-5')
      │   ├── it('returns FOUNDATION for days 6-30')
      │   ├── it('returns BUILDING for days 31-60')
      │   ├── it('returns MASTERY for days 61-100')
      │   └── it('returns POST_GAME for days 101+')
      │
      ├── describe('generateDailyTasks')
      │   ├── it('generates 3 tasks for TRIAL phase')
      │   ├── it('generates 4 tasks for FOUNDATION phase')
      │   ├── it('generates 5 tasks for BUILDING phase')
      │   ├── it('generates 6 tasks for MASTERY phase')
      │   └── it('includes all archetypes appropriately')
      │
      ├── describe('isPaywallDay')
      │   ├── it('returns true for day 6')
      │   └── it('returns false for other days')
      │
      ├── describe('isTrialExpired')
      │   ├── it('returns false for days 1-5')
      │   └── it('returns true for day 6+')
      │
      └── describe('isMilestoneDay')
          ├── it('returns true for day 6, 30, 60, 100')
          └── it('returns false for regular days')

  Tareas Atómicas para 04.8 Protocolo de 100 Días

  TAREA-04.8.1:
    Nombre: "Crear estructura para protocol"
    Acción: "Crear carpeta y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p src/lib/core/protocol
      touch src/lib/core/protocol/{index,types,constants,day-structure,milestones}.ts
      touch src/lib/core/protocol/protocol.test.ts
    Criterio de Éxito: "Archivos existen"

  TAREA-04.8.2:
    Nombre: "Implementar types.ts para protocol"
    Acción: "Definir tipos del protocolo"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/protocol/types.ts:

      export enum ProtocolPhase {
        TRIAL = 'trial',
        FOUNDATION = 'foundation',
        BUILDING = 'building',
        MASTERY = 'mastery',
        POST_GAME = 'post_game'
      }

      export interface PhaseInfo {
        phase: ProtocolPhase;
        name: string;
        startDay: number;
        endDay: number;
        description: string;
        difficultyMultiplier: number;
        tasksPerDay: number;
        unlockedFeatures: string[];
      }

      export interface DayConfig {
        dayNumber: number;
        phase: ProtocolPhase;
        requiredTasks: TaskCategory[];
        optionalTasks: TaskCategory[];
        specialEvent?: SpecialEvent;
        isPaywallDay: boolean;
      }

      export interface SpecialEvent {
        type: 'milestone' | 'challenge' | 'bonus';
        name: string;
        description: string;
        rewards: EventReward[];
      }

      export interface EventReward {
        type: 'btc' | 'item' | 'badge' | 'health';
        amount?: number;
        itemId?: string;
        badgeName?: string;
      }

      export interface MilestoneReport {
        dayNumber: number;
        event: SpecialEvent;
        message: string;
        rewards: EventReward[];
        stats: {
          daysCompleted: number;
          tasksCompleted: number;
          streakRecord: number;
          totalBtcEarned: number;
        };
      }
    Criterio de Éxito: "Tipos compilan"

  TAREA-04.8.3:
    Nombre: "Implementar constants.ts para protocol"
    Acción: "Definir configuración de fases"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/protocol/constants.ts:

      import { ProtocolPhase, PhaseInfo, SpecialEvent } from './types';

      export const PROTOCOL_CONFIG = {
        TOTAL_DAYS: 100,
        TRIAL_DAYS: 5,
        PAYWALL_DAY: 6,
        POST_GAME_START: 101
      } as const;

      export const PHASES: Record<ProtocolPhase, PhaseInfo> = {
        [ProtocolPhase.TRIAL]: {
          phase: ProtocolPhase.TRIAL,
          name: 'Prueba Gratuita',
          startDay: 1,
          endDay: 5,
          description: 'Conoce el sistema sin compromiso',
          difficultyMultiplier: 0.6,
          tasksPerDay: 3,
          unlockedFeatures: ['basic_tasks', 'avatar_preview']
        },
        [ProtocolPhase.FOUNDATION]: {
          phase: ProtocolPhase.FOUNDATION,
          name: 'Fundación',
          startDay: 6,
          endDay: 30,
          description: 'Construye los cimientos de tu transformación',
          difficultyMultiplier: 0.8,
          tasksPerDay: 4,
          unlockedFeatures: ['full_tasks', 'store_basic', 'avatar_full']
        },
        [ProtocolPhase.BUILDING]: {
          phase: ProtocolPhase.BUILDING,
          name: 'Construcción',
          startDay: 31,
          endDay: 60,
          description: 'Intensifica tu entrenamiento',
          difficultyMultiplier: 1.0,
          tasksPerDay: 5,
          unlockedFeatures: ['store_premium', 'advanced_stats']
        },
        [ProtocolPhase.MASTERY]: {
          phase: ProtocolPhase.MASTERY,
          name: 'Maestría',
          startDay: 61,
          endDay: 100,
          description: 'Domina todos los aspectos',
          difficultyMultiplier: 1.2,
          tasksPerDay: 6,
          unlockedFeatures: ['elite_store', 'full_customization']
        },
        [ProtocolPhase.POST_GAME]: {
          phase: ProtocolPhase.POST_GAME,
          name: 'Post-Game',
          startDay: 101,
          endDay: Infinity,
          description: 'Mantén tu grandeza eternamente',
          difficultyMultiplier: 1.5,
          tasksPerDay: 6,
          unlockedFeatures: ['infinite_mode', 'leaderboards', 'legacy_badges']
        }
      };

      export const SPECIAL_DAYS: Record<number, SpecialEvent> = {
        6: {
          type: 'milestone',
          name: 'Día de Conversión',
          description: 'Tu viaje real comienza hoy',
          rewards: []
        },
        30: {
          type: 'milestone',
          name: 'Primer Mes',
          description: 'Un mes de disciplina inquebrantable',
          rewards: [
            { type: 'btc', amount: 1500 },
            { type: 'badge', badgeName: 'monthly_master' }
          ]
        },
        60: {
          type: 'milestone',
          name: 'Medio Camino',
          description: 'Has llegado a la mitad del protocolo',
          rewards: [
            { type: 'btc', amount: 3000 },
            { type: 'badge', badgeName: 'halfway_hero' }
          ]
        },
        100: {
          type: 'milestone',
          name: 'Victoria Final',
          description: 'Has completado el protocolo METAMEN100',
          rewards: [
            { type: 'btc', amount: 10000 },
            { type: 'badge', badgeName: 'centurion' },
            { type: 'item', itemId: 'crown_of_victory' }
          ]
        }
      };
    Criterio de Éxito: "Configuración completa"

  TAREA-04.8.4:
    Nombre: "Implementar day-structure.ts"
    Acción: "Funciones de estructura de día"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/protocol/day-structure.ts:

      import { ProtocolPhase, PhaseInfo, DayConfig } from './types';
      import { PROTOCOL_CONFIG, PHASES, SPECIAL_DAYS } from './constants';
      import { TaskCategory, TaskArchetype } from '../vectors/types';

      export function getCurrentPhase(dayNumber: number): ProtocolPhase {
        if (dayNumber <= 5) return ProtocolPhase.TRIAL;
        if (dayNumber <= 30) return ProtocolPhase.FOUNDATION;
        if (dayNumber <= 60) return ProtocolPhase.BUILDING;
        if (dayNumber <= 100) return ProtocolPhase.MASTERY;
        return ProtocolPhase.POST_GAME;
      }

      export function getPhaseInfo(phase: ProtocolPhase): PhaseInfo {
        return PHASES[phase];
      }

      export function getPhaseInfoForDay(dayNumber: number): PhaseInfo {
        const phase = getCurrentPhase(dayNumber);
        return PHASES[phase];
      }

      // Tareas por arquetipo
      const TASKS_BY_ARCHETYPE: Record<TaskArchetype, TaskCategory[]> = {
        [TaskArchetype.MENTAL]: [
          TaskCategory.MEDITATION,
          TaskCategory.COLD_SHOWER,
          TaskCategory.READING,
          TaskCategory.WAKE_EARLY
        ],
        [TaskArchetype.CARA]: [
          TaskCategory.POSTURE,
          TaskCategory.FACIAL,
          TaskCategory.KEGEL
        ],
        [TaskArchetype.PRODUCTIVIDAD]: [
          TaskCategory.JOURNAL,
          TaskCategory.SKILL_LEARNING,
          TaskCategory.FOCUS_WORK
        ],
        [TaskArchetype.FISICO]: [
          TaskCategory.STRENGTH,
          TaskCategory.CARDIO,
          TaskCategory.HYDRATION
        ]
      };

      export function generateDailyTasks(dayNumber: number): {
        required: TaskCategory[];
        optional: TaskCategory[];
      } {
        const phase = getCurrentPhase(dayNumber);
        const phaseInfo = PHASES[phase];

        const required: TaskCategory[] = [];
        const optional: TaskCategory[] = [];

        // Usar el día como seed para variar las tareas
        const seed = dayNumber % 100;

        switch (phase) {
          case ProtocolPhase.TRIAL:
            // 3 tareas: 1 Mental, 1 Físico, 1 opcional
            required.push(selectTask(TaskArchetype.MENTAL, seed));
            required.push(selectTask(TaskArchetype.FISICO, seed + 1));
            optional.push(selectTask(TaskArchetype.PRODUCTIVIDAD, seed + 2));
            break;

          case ProtocolPhase.FOUNDATION:
            // 4 tareas: 1 de cada arquetipo
            required.push(selectTask(TaskArchetype.MENTAL, seed));
            required.push(selectTask(TaskArchetype.CARA, seed + 1));
            required.push(selectTask(TaskArchetype.PRODUCTIVIDAD, seed + 2));
            required.push(selectTask(TaskArchetype.FISICO, seed + 3));
            break;

          case ProtocolPhase.BUILDING:
            // 5 tareas: 1 Mental, 1 Cara, 1 Productividad, 2 Físico
            required.push(selectTask(TaskArchetype.MENTAL, seed));
            required.push(selectTask(TaskArchetype.CARA, seed + 1));
            required.push(selectTask(TaskArchetype.PRODUCTIVIDAD, seed + 2));
            required.push(selectTask(TaskArchetype.FISICO, seed + 3));
            required.push(selectTask(TaskArchetype.FISICO, seed + 4));
            break;

          case ProtocolPhase.MASTERY:
          case ProtocolPhase.POST_GAME:
            // 6 tareas: 2 Mental, 1 Cara, 1 Productividad, 2 Físico
            required.push(selectTask(TaskArchetype.MENTAL, seed));
            required.push(selectTask(TaskArchetype.MENTAL, seed + 1));
            required.push(selectTask(TaskArchetype.CARA, seed + 2));
            required.push(selectTask(TaskArchetype.PRODUCTIVIDAD, seed + 3));
            required.push(selectTask(TaskArchetype.FISICO, seed + 4));
            required.push(selectTask(TaskArchetype.FISICO, seed + 5));
            break;
        }

        return { required, optional };
      }

      function selectTask(archetype: TaskArchetype, seed: number): TaskCategory {
        const tasks = TASKS_BY_ARCHETYPE[archetype];
        return tasks[seed % tasks.length];
      }

      export function getDayConfig(dayNumber: number): DayConfig {
        const phase = getCurrentPhase(dayNumber);
        const { required, optional } = generateDailyTasks(dayNumber);
        const specialEvent = SPECIAL_DAYS[dayNumber] ?? undefined;

        return {
          dayNumber,
          phase,
          requiredTasks: required,
          optionalTasks: optional,
          specialEvent,
          isPaywallDay: dayNumber === PROTOCOL_CONFIG.PAYWALL_DAY
        };
      }

      export function isPaywallDay(dayNumber: number): boolean {
        return dayNumber === PROTOCOL_CONFIG.PAYWALL_DAY;
      }

      export function isTrialExpired(dayNumber: number): boolean {
        return dayNumber > PROTOCOL_CONFIG.TRIAL_DAYS;
      }

      export function getProgressPercentage(dayNumber: number): number {
        return Math.min(100, Math.round((dayNumber / PROTOCOL_CONFIG.TOTAL_DAYS) * 100));
      }

      export function getDaysRemaining(dayNumber: number): number {
        return Math.max(0, PROTOCOL_CONFIG.TOTAL_DAYS - dayNumber);
      }

      export function isProtocolComplete(dayNumber: number): boolean {
        return dayNumber > PROTOCOL_CONFIG.TOTAL_DAYS;
      }
    Criterio de Éxito: "Estructura de días funciona"

  TAREA-04.8.5:
    Nombre: "Implementar milestones.ts"
    Acción: "Funciones de hitos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/protocol/milestones.ts:

      import { SpecialEvent, EventReward, MilestoneReport } from './types';
      import { SPECIAL_DAYS } from './constants';

      export function getSpecialEvent(dayNumber: number): SpecialEvent | null {
        return SPECIAL_DAYS[dayNumber] ?? null;
      }

      export function isMilestoneDay(dayNumber: number): boolean {
        return dayNumber in SPECIAL_DAYS;
      }

      export function getMilestoneRewards(dayNumber: number): EventReward[] {
        const event = getSpecialEvent(dayNumber);
        return event?.rewards ?? [];
      }

      export const MILESTONE_MESSAGES: Record<number, string> = {
        6: '¡Bienvenido al sistema completo! Tu viaje de 100 días comienza ahora.',
        30: '¡Primer mes completado! Has demostrado que la consistencia es tu nueva identidad.',
        60: '¡Medio camino recorrido! Tu disciplina se ha vuelto inquebrantable.',
        100: '¡VICTORIA ABSOLUTA! Has completado el protocolo METAMEN100. Eres leyenda.'
      };

      export function getMilestoneMessage(dayNumber: number): string | null {
        return MILESTONE_MESSAGES[dayNumber] ?? null;
      }

      interface UserStats {
        daysCompleted: number;
        tasksCompleted: number;
        streakRecord: number;
        totalBtcEarned: number;
      }

      export function generateMilestoneReport(
        dayNumber: number,
        stats: UserStats
      ): MilestoneReport | null {
        const event = getSpecialEvent(dayNumber);
        if (!event) return null;

        const message = getMilestoneMessage(dayNumber) ?? event.description;

        return {
          dayNumber,
          event,
          message,
          rewards: event.rewards,
          stats
        };
      }

      export function getAllUpcomingMilestones(currentDay: number): number[] {
        return Object.keys(SPECIAL_DAYS)
          .map(Number)
          .filter(day => day > currentDay)
          .sort((a, b) => a - b);
      }

      export function getNextMilestoneDay(currentDay: number): number | null {
        const upcoming = getAllUpcomingMilestones(currentDay);
        return upcoming[0] ?? null;
      }

      export function getDaysUntilNextMilestone(currentDay: number): number | null {
        const next = getNextMilestoneDay(currentDay);
        return next !== null ? next - currentDay : null;
      }
    Criterio de Éxito: "Hitos funcionan"

  TAREA-04.8.6:
    Nombre: "Implementar index.ts para protocol"
    Acción: "Exports públicos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/protocol/index.ts exportando todo lo público:

      // Types
      export type { PhaseInfo, DayConfig, SpecialEvent, EventReward, MilestoneReport } from './types';
      export { ProtocolPhase } from './types';

      // Constants
      export { PROTOCOL_CONFIG, PHASES, SPECIAL_DAYS } from './constants';

      // Day Structure
      export {
        getCurrentPhase,
        getPhaseInfo,
        getPhaseInfoForDay,
        generateDailyTasks,
        getDayConfig,
        isPaywallDay,
        isTrialExpired,
        getProgressPercentage,
        getDaysRemaining,
        isProtocolComplete
      } from './day-structure';

      // Milestones
      export {
        getSpecialEvent,
        isMilestoneDay,
        getMilestoneRewards,
        getMilestoneMessage,
        generateMilestoneReport,
        getAllUpcomingMilestones,
        getNextMilestoneDay,
        getDaysUntilNextMilestone,
        MILESTONE_MESSAGES
      } from './milestones';
    Criterio de Éxito: "Exports funcionan"

  TAREA-04.8.7:
    Nombre: "Implementar tests de protocol"
    Acción: "Suite completa de tests"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/protocol/protocol.test.ts:

      import { describe, it, expect } from 'vitest';
      import {
        getCurrentPhase,
        generateDailyTasks,
        getDayConfig,
        isPaywallDay,
        isTrialExpired,
        getProgressPercentage,
        getDaysRemaining,
        isMilestoneDay,
        getNextMilestoneDay
      } from './index';
      import { ProtocolPhase } from './types';

      describe('getCurrentPhase', () => {
        it('returns TRIAL for days 1-5', () => {
          expect(getCurrentPhase(1)).toBe(ProtocolPhase.TRIAL);
          expect(getCurrentPhase(3)).toBe(ProtocolPhase.TRIAL);
          expect(getCurrentPhase(5)).toBe(ProtocolPhase.TRIAL);
        });

        it('returns FOUNDATION for days 6-30', () => {
          expect(getCurrentPhase(6)).toBe(ProtocolPhase.FOUNDATION);
          expect(getCurrentPhase(15)).toBe(ProtocolPhase.FOUNDATION);
          expect(getCurrentPhase(30)).toBe(ProtocolPhase.FOUNDATION);
        });

        it('returns BUILDING for days 31-60', () => {
          expect(getCurrentPhase(31)).toBe(ProtocolPhase.BUILDING);
          expect(getCurrentPhase(45)).toBe(ProtocolPhase.BUILDING);
          expect(getCurrentPhase(60)).toBe(ProtocolPhase.BUILDING);
        });

        it('returns MASTERY for days 61-100', () => {
          expect(getCurrentPhase(61)).toBe(ProtocolPhase.MASTERY);
          expect(getCurrentPhase(80)).toBe(ProtocolPhase.MASTERY);
          expect(getCurrentPhase(100)).toBe(ProtocolPhase.MASTERY);
        });

        it('returns POST_GAME for days 101+', () => {
          expect(getCurrentPhase(101)).toBe(ProtocolPhase.POST_GAME);
          expect(getCurrentPhase(150)).toBe(ProtocolPhase.POST_GAME);
        });
      });

      describe('generateDailyTasks', () => {
        it('generates 3 tasks for TRIAL phase', () => {
          const { required, optional } = generateDailyTasks(1);
          expect(required.length + optional.length).toBe(3);
        });

        it('generates 4 tasks for FOUNDATION phase', () => {
          const { required } = generateDailyTasks(10);
          expect(required.length).toBe(4);
        });

        it('generates 5 tasks for BUILDING phase', () => {
          const { required } = generateDailyTasks(40);
          expect(required.length).toBe(5);
        });

        it('generates 6 tasks for MASTERY phase', () => {
          const { required } = generateDailyTasks(80);
          expect(required.length).toBe(6);
        });

        it('generates different tasks for different days', () => {
          const day1 = generateDailyTasks(1);
          const day2 = generateDailyTasks(2);
          // Pueden ser diferentes (o iguales por casualidad, pero el seed varía)
          // Al menos verificamos que se generan
          expect(day1.required.length).toBeGreaterThan(0);
          expect(day2.required.length).toBeGreaterThan(0);
        });
      });

      describe('isPaywallDay', () => {
        it('returns true for day 6', () => {
          expect(isPaywallDay(6)).toBe(true);
        });

        it('returns false for other days', () => {
          expect(isPaywallDay(1)).toBe(false);
          expect(isPaywallDay(5)).toBe(false);
          expect(isPaywallDay(7)).toBe(false);
          expect(isPaywallDay(30)).toBe(false);
        });
      });

      describe('isTrialExpired', () => {
        it('returns false for days 1-5', () => {
          expect(isTrialExpired(1)).toBe(false);
          expect(isTrialExpired(5)).toBe(false);
        });

        it('returns true for day 6+', () => {
          expect(isTrialExpired(6)).toBe(true);
          expect(isTrialExpired(100)).toBe(true);
        });
      });

      describe('getProgressPercentage', () => {
        it('returns 1 for day 1', () => {
          expect(getProgressPercentage(1)).toBe(1);
        });

        it('returns 50 for day 50', () => {
          expect(getProgressPercentage(50)).toBe(50);
        });

        it('returns 100 for day 100', () => {
          expect(getProgressPercentage(100)).toBe(100);
        });

        it('caps at 100 for days > 100', () => {
          expect(getProgressPercentage(150)).toBe(100);
        });
      });

      describe('getDaysRemaining', () => {
        it('returns 99 for day 1', () => {
          expect(getDaysRemaining(1)).toBe(99);
        });

        it('returns 0 for day 100', () => {
          expect(getDaysRemaining(100)).toBe(0);
        });

        it('returns 0 for days > 100', () => {
          expect(getDaysRemaining(150)).toBe(0);
        });
      });

      describe('isMilestoneDay', () => {
        it('returns true for milestone days', () => {
          expect(isMilestoneDay(6)).toBe(true);
          expect(isMilestoneDay(30)).toBe(true);
          expect(isMilestoneDay(60)).toBe(true);
          expect(isMilestoneDay(100)).toBe(true);
        });

        it('returns false for regular days', () => {
          expect(isMilestoneDay(1)).toBe(false);
          expect(isMilestoneDay(15)).toBe(false);
          expect(isMilestoneDay(99)).toBe(false);
        });
      });

      describe('getNextMilestoneDay', () => {
        it('returns 6 for day 1', () => {
          expect(getNextMilestoneDay(1)).toBe(6);
        });

        it('returns 30 for day 10', () => {
          expect(getNextMilestoneDay(10)).toBe(30);
        });

        it('returns null after day 100', () => {
          expect(getNextMilestoneDay(101)).toBe(null);
        });
      });
    Criterio de Éxito: "Todos los tests pasan"

  TAREA-04.8.8:
    Nombre: "Ejecutar tests de protocol"
    Acción: "Verificar suite completa"
    Responsable: Antigravity
    Comando: |
      npm run test src/lib/core/protocol/protocol.test.ts
    Criterio de Éxito: "100% tests pasan"

  ---
  SUBCAJA 04.9: VALIDACIONES DE NEGOCIO

  Reglas y Restricciones del Sistema

  Archivos a Crear

  Ruta: /src/lib/core/validations/
  ├── index.ts              (Exports públicos)
  ├── types.ts              (Tipos de validación)
  ├── task-validations.ts   (Validaciones de tareas)
  ├── purchase-validations.ts (Validaciones de compra)
  ├── subscription-validations.ts (Validaciones de suscripción)
  └── validations.test.ts   (Tests unitarios)

  Tamaño Estimado: ~500 líneas total
  Tiempo de Generación: 40-50 minutos

  Estructura del Módulo

  /src/lib/core/validations/
  │
  ├── 📄 types.ts
  │   │
  │   ├── ValidationResult (interface)
  │   │   ├── valid: boolean
  │   │   ├── errorCode?: ValidationErrorCode
  │   │   └── errorMessage?: string
  │   │
  │   ├── ValidationErrorCode (enum)
  │   │   ├── // Tareas
  │   │   ├── AVATAR_DEAD = 'avatar_dead'
  │   │   ├── TASK_ALREADY_COMPLETED = 'task_already_completed'
  │   │   ├── TASK_NOT_AVAILABLE = 'task_not_available'
  │   │   ├── DAY_ALREADY_JUDGED = 'day_already_judged'
  │   │   ├── TRIAL_EXPIRED = 'trial_expired'
  │   │   │
  │   │   ├── // Compras
  │   │   ├── INSUFFICIENT_FUNDS = 'insufficient_funds'
  │   │   ├── ITEM_NOT_AVAILABLE = 'item_not_available'
  │   │   ├── ITEM_ALREADY_OWNED = 'item_already_owned'
  │   │   ├── LEVEL_REQUIREMENT_NOT_MET = 'level_requirement_not_met'
  │   │   ├── ITEM_LOCKED = 'item_locked'
  │   │   │
  │   │   ├── // Suscripción
  │   │   ├── SUBSCRIPTION_REQUIRED = 'subscription_required'
  │   │   ├── SUBSCRIPTION_EXPIRED = 'subscription_expired'
  │   │   ├── LIMBO_STATUS = 'limbo_status'
  │   │   │
  │   │   ├── // Equipamiento
  │   │   ├── NOT_IN_INVENTORY = 'not_in_inventory'
  │   │   ├── INCOMPATIBLE_SLOT = 'incompatible_slot'
  │   │   ├── SLOT_OCCUPIED = 'slot_occupied'
  │   │   │
  │   │   └── // General
  │   │   └── UNKNOWN_ERROR = 'unknown_error'
  │   │
  │   └── ERROR_MESSAGES: Record<ValidationErrorCode, string>
  │       ├── avatar_dead: "Tu avatar ha muerto. Debes resucitar para continuar."
  │       ├── task_already_completed: "Esta tarea ya fue completada hoy."
  │       ├── insufficient_funds: "No tienes suficiente BTC para esta compra."
  │       └── ... (todos los mensajes)
  │
  ├── 📄 task-validations.ts
  │   │
  │   ├── canCompleteTask(params: {
  │   │     avatarHealth: number,
  │   │     taskId: string,
  │   │     completedTasks: string[],
  │   │     dayStatus: DayStatus
  │   │   }): ValidationResult
  │   │   │
  │   │   ├── Verificar avatar no muerto
  │   │   ├── Verificar tarea no completada
  │   │   └── Verificar día no juzgado
  │   │
  │   ├── canAccessDailyTasks(params: {
  │   │     subscriptionStatus: SubscriptionStatus,
  │   │     currentDay: number
  │   │   }): ValidationResult
  │   │   │
  │   │   ├── Trial: permitir hasta día 5
  │   │   ├── Active: permitir siempre
  │   │   ├── Limbo: permitir con advertencia
  │   │   └── Cancelled: bloquear después de trial
  │   │
  │   └── canSkipTask(params: {
  │       taskId: string,
  │       skipsUsedToday: number,
  │       maxDailySkips: number
  │     }): ValidationResult
  │
  ├── 📄 purchase-validations.ts
  │   │
  │   ├── canPurchaseItem(params: {
  │   │     balance: number,
  │   │     itemPrice: number,
  │   │     userLevel: number,
  │   │     itemLevelRequired: number,
  │   │     inventory: string[],
  │   │     itemId: string,
  │   │     itemAvailable: boolean
  │   │   }): ValidationResult
  │   │   │
  │   │   ├── Verificar item disponible
  │   │   ├── Verificar no ya poseído
  │   │   ├── Verificar nivel suficiente
  │   │   └── Verificar balance suficiente
  │   │
  │   └── canEquipItem(params: {
  │       itemId: string,
  │       inventory: InventoryItem[],
  │       userLevel: number,
  │       itemLevelRequired: number,
  │       targetSlot: string,
  │       currentlyEquipped: EquippedItems
  │     }): ValidationResult
  │
  ├── 📄 subscription-validations.ts
  │   │
  │   ├── isTrialExpired(currentDay: number): boolean
  │   │
  │   ├── canAccessPremiumFeatures(params: {
  │   │     subscriptionStatus: SubscriptionStatus,
  │   │     currentDay: number
  │   │   }): ValidationResult
  │   │
  │   ├── shouldShowPaywall(params: {
  │   │     subscriptionStatus: SubscriptionStatus,
  │   │     currentDay: number
  │   │   }): boolean
  │   │
  │   └── getLimboGracePeriod(limboDayCount: number): {
  │       daysRemaining: number,
  │       healthAtRisk: number
  │     }
  │
  └── 📄 validations.test.ts
      │
      ├── describe('canCompleteTask')
      │   ├── it('returns valid for alive avatar with incomplete task')
      │   ├── it('returns invalid for dead avatar')
      │   ├── it('returns invalid for already completed task')
      │   └── it('returns invalid for judged day')
      │
      ├── describe('canPurchaseItem')
      │   ├── it('returns valid when all conditions met')
      │   ├── it('returns invalid for insufficient funds')
      │   ├── it('returns invalid for level requirement not met')
      │   └── it('returns invalid for item already owned')
      │
      └── describe('canAccessPremiumFeatures')
          ├── it('returns valid for active subscription')
          ├── it('returns valid for trial within 5 days')
          ├── it('returns invalid for expired trial')
          └── it('returns warning for limbo status')

  Tareas Atómicas para 04.9 Validaciones de Negocio

  TAREA-04.9.1:
    Nombre: "Crear estructura para validations"
    Acción: "Crear carpeta y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p src/lib/core/validations
      touch src/lib/core/validations/{index,types,task-validations,purchase-validations,subscription-validations}.ts
      touch src/lib/core/validations/validations.test.ts
    Criterio de Éxito: "Archivos existen"

  TAREA-04.9.2:
    Nombre: "Implementar types.ts para validations"
    Acción: "Definir tipos de validación"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/validations/types.ts:

      export interface ValidationResult {
        valid: boolean;
        errorCode?: ValidationErrorCode;
        errorMessage?: string;
        warningMessage?: string;
      }

      export enum ValidationErrorCode {
        // Tareas
        AVATAR_DEAD = 'avatar_dead',
        TASK_ALREADY_COMPLETED = 'task_already_completed',
        TASK_NOT_AVAILABLE = 'task_not_available',
        DAY_ALREADY_JUDGED = 'day_already_judged',
        TRIAL_EXPIRED = 'trial_expired',
        MAX_SKIPS_REACHED = 'max_skips_reached',

        // Compras
        INSUFFICIENT_FUNDS = 'insufficient_funds',
        ITEM_NOT_AVAILABLE = 'item_not_available',
        ITEM_ALREADY_OWNED = 'item_already_owned',
        LEVEL_REQUIREMENT_NOT_MET = 'level_requirement_not_met',
        ITEM_LOCKED = 'item_locked',

        // Suscripción
        SUBSCRIPTION_REQUIRED = 'subscription_required',
        SUBSCRIPTION_EXPIRED = 'subscription_expired',
        LIMBO_STATUS = 'limbo_status',

        // Equipamiento
        NOT_IN_INVENTORY = 'not_in_inventory',
        INCOMPATIBLE_SLOT = 'incompatible_slot',
        SLOT_OCCUPIED = 'slot_occupied',

        // General
        UNKNOWN_ERROR = 'unknown_error'
      }

      export const ERROR_MESSAGES: Record<ValidationErrorCode, string> = {
        [ValidationErrorCode.AVATAR_DEAD]: 'Tu avatar ha muerto. Debes resucitar para continuar.',
        [ValidationErrorCode.TASK_ALREADY_COMPLETED]: 'Esta tarea ya fue completada hoy.',
        [ValidationErrorCode.TASK_NOT_AVAILABLE]: 'Esta tarea no está disponible hoy.',
        [ValidationErrorCode.DAY_ALREADY_JUDGED]: 'El día ya ha sido evaluado.',
        [ValidationErrorCode.TRIAL_EXPIRED]: 'Tu período de prueba ha expirado. Suscríbete para continuar.',
        [ValidationErrorCode.MAX_SKIPS_REACHED]: 'Has alcanzado el máximo de saltos permitidos hoy.',

        [ValidationErrorCode.INSUFFICIENT_FUNDS]: 'No tienes suficiente BTC para esta compra.',
        [ValidationErrorCode.ITEM_NOT_AVAILABLE]: 'Este artículo no está disponible actualmente.',
        [ValidationErrorCode.ITEM_ALREADY_OWNED]: 'Ya posees este artículo.',
        [ValidationErrorCode.LEVEL_REQUIREMENT_NOT_MET]: 'No cumples con el nivel requerido para este artículo.',
        [ValidationErrorCode.ITEM_LOCKED]: 'Este artículo está bloqueado. Sube de nivel para desbloquearlo.',

        [ValidationErrorCode.SUBSCRIPTION_REQUIRED]: 'Necesitas una suscripción activa para acceder a esta función.',
        [ValidationErrorCode.SUBSCRIPTION_EXPIRED]: 'Tu suscripción ha expirado.',
        [ValidationErrorCode.LIMBO_STATUS]: 'Tu suscripción está en estado limbo. Actualiza tu pago.',

        [ValidationErrorCode.NOT_IN_INVENTORY]: 'No tienes este artículo en tu inventario.',
        [ValidationErrorCode.INCOMPATIBLE_SLOT]: 'Este artículo no es compatible con el slot seleccionado.',
        [ValidationErrorCode.SLOT_OCCUPIED]: 'Este slot ya tiene un artículo equipado.',

        [ValidationErrorCode.UNKNOWN_ERROR]: 'Ha ocurrido un error desconocido.'
      };

      export function createValidResult(): ValidationResult {
        return { valid: true };
      }

      export function createInvalidResult(
        errorCode: ValidationErrorCode,
        customMessage?: string
      ): ValidationResult {
        return {
          valid: false,
          errorCode,
          errorMessage: customMessage ?? ERROR_MESSAGES[errorCode]
        };
      }

      export function createWarningResult(warningMessage: string): ValidationResult {
        return { valid: true, warningMessage };
      }
    Criterio de Éxito: "Tipos compilan"

  TAREA-04.9.3:
    Nombre: "Implementar task-validations.ts"
    Acción: "Validaciones de tareas"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/validations/task-validations.ts:

      import { ValidationResult, ValidationErrorCode, createValidResult, createInvalidResult } from './types';
      import { DayStatus } from '../judgement/types';
      import { SubscriptionStatus } from '../types/subscription';
      import { isTrialExpired as checkTrialExpired } from '../protocol';

      interface CanCompleteTaskParams {
        avatarHealth: number;
        taskId: string;
        completedTasks: string[];
        dayStatus: DayStatus;
      }

      export function canCompleteTask(params: CanCompleteTaskParams): ValidationResult {
        const { avatarHealth, taskId, completedTasks, dayStatus } = params;

        // Avatar muerto
        if (avatarHealth <= 0) {
          return createInvalidResult(ValidationErrorCode.AVATAR_DEAD);
        }

        // Tarea ya completada
        if (completedTasks.includes(taskId)) {
          return createInvalidResult(ValidationErrorCode.TASK_ALREADY_COMPLETED);
        }

        // Día ya juzgado
        if (dayStatus !== 'active') {
          return createInvalidResult(ValidationErrorCode.DAY_ALREADY_JUDGED);
        }

        return createValidResult();
      }

      interface CanAccessDailyTasksParams {
        subscriptionStatus: SubscriptionStatus;
        currentDay: number;
      }

      export function canAccessDailyTasks(params: CanAccessDailyTasksParams): ValidationResult {
        const { subscriptionStatus, currentDay } = params;

        switch (subscriptionStatus) {
          case 'active':
            return createValidResult();

          case 'trial':
            if (checkTrialExpired(currentDay)) {
              return createInvalidResult(ValidationErrorCode.TRIAL_EXPIRED);
            }
            return createValidResult();

          case 'limbo':
            return {
              valid: true,
              warningMessage: 'Tu suscripción necesita atención. Actualiza tu pago para evitar perder corazones.'
            };

          case 'cancelled':
          case 'expired':
            return createInvalidResult(ValidationErrorCode.SUBSCRIPTION_EXPIRED);

          default:
            return createInvalidResult(ValidationErrorCode.SUBSCRIPTION_REQUIRED);
        }
      }

      interface CanSkipTaskParams {
        taskId: string;
        skipsUsedToday: number;
        maxDailySkips: number;
      }

      export function canSkipTask(params: CanSkipTaskParams): ValidationResult {
        const { skipsUsedToday, maxDailySkips } = params;

        if (skipsUsedToday >= maxDailySkips) {
          return createInvalidResult(
            ValidationErrorCode.MAX_SKIPS_REACHED,
            `Has alcanzado el máximo de ${maxDailySkips} saltos por día.`
          );
        }

        return createValidResult();
      }
    Criterio de Éxito: "Validaciones de tareas funcionan"

  TAREA-04.9.4:
    Nombre: "Implementar purchase-validations.ts"
    Acción: "Validaciones de compras"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/validations/purchase-validations.ts:

      import { ValidationResult, ValidationErrorCode, createValidResult, createInvalidResult } from './types';

      interface CanPurchaseItemParams {
        balance: number;
        itemPrice: number;
        userLevel: number;
        itemLevelRequired: number;
        inventory: string[];
        itemId: string;
        itemAvailable: boolean;
      }

      export function canPurchaseItem(params: CanPurchaseItemParams): ValidationResult {
        const { balance, itemPrice, userLevel, itemLevelRequired, inventory, itemId, itemAvailable } = params;

        // Item no disponible
        if (!itemAvailable) {
          return createInvalidResult(ValidationErrorCode.ITEM_NOT_AVAILABLE);
        }

        // Ya lo posee
        if (inventory.includes(itemId)) {
          return createInvalidResult(ValidationErrorCode.ITEM_ALREADY_OWNED);
        }

        // Nivel insuficiente
        if (userLevel < itemLevelRequired) {
          return createInvalidResult(
            ValidationErrorCode.LEVEL_REQUIREMENT_NOT_MET,
            `Necesitas nivel ${itemLevelRequired} para comprar este artículo. Tu nivel actual: ${userLevel}.`
          );
        }

        // Fondos insuficientes
        if (balance < itemPrice) {
          return createInvalidResult(
            ValidationErrorCode.INSUFFICIENT_FUNDS,
            `Necesitas ${itemPrice} BTC pero tienes ${balance} BTC.`
          );
        }

        return createValidResult();
      }

      interface InventoryItem {
        id: string;
        levelRequired: number;
        slot: string;
      }

      interface EquippedItems {
        [slot: string]: string | null; // slot -> itemId
      }

      interface CanEquipItemParams {
        itemId: string;
        inventory: InventoryItem[];
        userLevel: number;
        targetSlot: string;
        currentlyEquipped: EquippedItems;
      }

      export function canEquipItem(params: CanEquipItemParams): ValidationResult {
        const { itemId, inventory, userLevel, targetSlot, currentlyEquipped } = params;

        // Buscar item en inventario
        const item = inventory.find(i => i.id === itemId);

        if (!item) {
          return createInvalidResult(ValidationErrorCode.NOT_IN_INVENTORY);
        }

        // Nivel bloqueado (después de muerte)
        if (userLevel < item.levelRequired) {
          return createInvalidResult(
            ValidationErrorCode.ITEM_LOCKED,
            `Este artículo requiere nivel ${item.levelRequired}. Sube de nivel para desbloquearlo.`
          );
        }

        // Slot incompatible
        if (item.slot !== targetSlot) {
          return createInvalidResult(
            ValidationErrorCode.INCOMPATIBLE_SLOT,
            `Este artículo es para el slot "${item.slot}", no para "${targetSlot}".`
          );
        }

        // Slot ocupado (advertencia, no error)
        if (currentlyEquipped[targetSlot] && currentlyEquipped[targetSlot] !== itemId) {
          return {
            valid: true,
            warningMessage: `El slot "${targetSlot}" ya tiene un artículo. Se reemplazará.`
          };
        }

        return createValidResult();
      }

      export function getLockedItemsAtLevel(
        inventory: InventoryItem[],
        currentLevel: number
      ): InventoryItem[] {
        return inventory.filter(item => item.levelRequired > currentLevel);
      }
    Criterio de Éxito: "Validaciones de compras funcionan"

  TAREA-04.9.5:
    Nombre: "Implementar subscription-validations.ts"
    Acción: "Validaciones de suscripción"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/validations/subscription-validations.ts:

      import { ValidationResult, ValidationErrorCode, createValidResult, createInvalidResult } from './types';
      import { PROTOCOL_CONFIG } from '../protocol/constants';

      type SubscriptionStatus = 'trial' | 'active' | 'limbo' | 'past_due' | 'cancelled' | 'expired';

      export function isTrialExpired(currentDay: number): boolean {
        return currentDay > PROTOCOL_CONFIG.TRIAL_DAYS;
      }

      interface CanAccessPremiumParams {
        subscriptionStatus: SubscriptionStatus;
        currentDay: number;
      }

      export function canAccessPremiumFeatures(params: CanAccessPremiumParams): ValidationResult {
        const { subscriptionStatus, currentDay } = params;

        switch (subscriptionStatus) {
          case 'active':
            return createValidResult();

          case 'trial':
            if (isTrialExpired(currentDay)) {
              return createInvalidResult(
                ValidationErrorCode.TRIAL_EXPIRED,
                'Tu período de prueba ha terminado. Suscríbete para desbloquear todas las funciones.'
              );
            }
            return createValidResult();

          case 'limbo':
          case 'past_due':
            return {
              valid: true,
              warningMessage: 'Tu pago está pendiente. Actualiza tu método de pago para evitar pérdida de acceso.'
            };

          case 'cancelled':
          case 'expired':
            return createInvalidResult(ValidationErrorCode.SUBSCRIPTION_EXPIRED);

          default:
            return createInvalidResult(ValidationErrorCode.SUBSCRIPTION_REQUIRED);
        }
      }

      interface ShouldShowPaywallParams {
        subscriptionStatus: SubscriptionStatus;
        currentDay: number;
      }

      export function shouldShowPaywall(params: ShouldShowPaywallParams): boolean {
        const { subscriptionStatus, currentDay } = params;

        // No mostrar paywall a usuarios activos
        if (subscriptionStatus === 'active') return false;

        // Mostrar paywall en día 6 (día de conversión)
        if (currentDay === PROTOCOL_CONFIG.PAYWALL_DAY) return true;

        // Mostrar si trial expirado y no suscrito
        if (isTrialExpired(currentDay) && subscriptionStatus === 'trial') return true;

        // Mostrar si suscripción expirada
        if (subscriptionStatus === 'expired' || subscriptionStatus === 'cancelled') return true;

        return false;
      }

      const LIMBO_CONFIG = {
        GRACE_PERIOD_DAYS: 7,
        HEALTH_LOSS_PER_3_DAYS: 1
      };

      export function getLimboGracePeriod(limboDayCount: number): {
        daysRemaining: number;
        healthAtRisk: number;
        isGracePeriodOver: boolean;
      } {
        const daysRemaining = Math.max(0, LIMBO_CONFIG.GRACE_PERIOD_DAYS - limboDayCount);
        const healthAtRisk = Math.floor(limboDayCount / 3) * LIMBO_CONFIG.HEALTH_LOSS_PER_3_DAYS;
        const isGracePeriodOver = limboDayCount >= LIMBO_CONFIG.GRACE_PERIOD_DAYS;

        return { daysRemaining, healthAtRisk, isGracePeriodOver };
      }

      export function getSubscriptionRequirementMessage(feature: string): string {
        return `La función "${feature}" requiere una suscripción activa.`;
      }
    Criterio de Éxito: "Validaciones de suscripción funcionan"

  TAREA-04.9.6:
    Nombre: "Implementar index.ts para validations"
    Acción: "Exports públicos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/validations/index.ts:

      // Types
      export type { ValidationResult } from './types';
      export { ValidationErrorCode, ERROR_MESSAGES, createValidResult, createInvalidResult, createWarningResult } from './types';

      // Task Validations
      export { canCompleteTask, canAccessDailyTasks, canSkipTask } from './task-validations';

      // Purchase Validations
      export { canPurchaseItem, canEquipItem, getLockedItemsAtLevel } from './purchase-validations';

      // Subscription Validations
      export {
        isTrialExpired,
        canAccessPremiumFeatures,
        shouldShowPaywall,
        getLimboGracePeriod,
        getSubscriptionRequirementMessage
      } from './subscription-validations';
    Criterio de Éxito: "Exports funcionan"

  TAREA-04.9.7:
    Nombre: "Implementar tests de validations"
    Acción: "Suite completa de tests"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/validations/validations.test.ts con tests para:

      1. canCompleteTask
         - valid: avatar vivo, tarea no completada, día activo
         - invalid: avatar muerto
         - invalid: tarea ya completada
         - invalid: día ya juzgado

      2. canPurchaseItem
         - valid: todas las condiciones cumplen
         - invalid: fondos insuficientes
         - invalid: nivel no alcanzado
         - invalid: ya poseído
         - invalid: no disponible

      3. canEquipItem
         - valid: item en inventario, nivel suficiente
         - invalid: no en inventario
         - invalid: nivel bloqueado
         - warning: slot ocupado

      4. canAccessPremiumFeatures
         - valid: suscripción activa
         - valid: trial dentro de 5 días
         - invalid: trial expirado
         - warning: limbo

      5. shouldShowPaywall
         - true: día 6 sin suscripción
         - true: trial expirado
         - false: suscripción activa
    Criterio de Éxito: "Todos los tests pasan"

  TAREA-04.9.8:
    Nombre: "Ejecutar tests de validations"
    Acción: "Verificar suite completa"
    Responsable: Antigravity
    Comando: |
      npm run test src/lib/core/validations/validations.test.ts
    Criterio de Éxito: "100% tests pasan"

  ---
  SUBCAJA 04.10: MÁQUINAS DE ESTADO

  Control de Flujos y Transiciones

  Archivos a Crear

  Ruta: /src/lib/core/state-machines/
  ├── index.ts              (Exports públicos)
  ├── types.ts              (Tipos de máquinas)
  ├── task-machine.ts       (Estados de tareas)
  ├── subscription-machine.ts (Estados de suscripción)
  ├── image-machine.ts      (Estados de generación de imagen)
  └── state-machines.test.ts (Tests unitarios)

  Tamaño Estimado: ~550 líneas total
  Tiempo de Generación: 45-55 minutos

  Estructura del Módulo

  /src/lib/core/state-machines/
  │
  ├── 📄 types.ts
  │   │
  │   ├── StateMachineDefinition<S, E> (interface)
  │   │   ├── initialState: S
  │   │   ├── states: Record<S, StateConfig<S, E>>
  │   │   └── onTransition?: (from: S, to: S, event: E) => void
  │   │
  │   ├── StateConfig<S, E> (interface)
  │   │   ├── on: Record<E, S | TransitionConfig<S>>
  │   │   └── onEnter?: () => void
  │   │
  │   ├── TransitionConfig<S> (interface)
  │   │   ├── target: S
  │   │   ├── guard?: () => boolean
  │   │   └── action?: () => void
  │   │
  │   └── TransitionResult<S> (interface)
  │       ├── success: boolean
  │       ├── previousState: S
  │       ├── currentState: S
  │       ├── event: string
  │       └── error?: string
  │
  ├── 📄 task-machine.ts
  │   │
  │   ├── TaskState (enum)
  │   │   ├── PENDING = 'pending'
  │   │   ├── IN_PROGRESS = 'in_progress'
  │   │   ├── COMPLETED = 'completed'
  │   │   ├── SKIPPED = 'skipped'
  │   │   └── FAILED = 'failed'
  │   │
  │   ├── TaskEvent (enum)
  │   │   ├── START = 'start'
  │   │   ├── COMPLETE = 'complete'
  │   │   ├── SKIP = 'skip'
  │   │   ├── FAIL = 'fail'
  │   │   ├── RESET = 'reset'
  │   │   └── CANCEL = 'cancel'
  │   │
  │   ├── TASK_STATE_MACHINE
  │   │   │
  │   │   ├── PENDING
  │   │   │   ├── START → IN_PROGRESS
  │   │   │   ├── SKIP → SKIPPED
  │   │   │   └── FAIL → FAILED (por Judgement Night)
  │   │   │
  │   │   ├── IN_PROGRESS
  │   │   │   ├── COMPLETE → COMPLETED
  │   │   │   ├── CANCEL → PENDING
  │   │   │   └── FAIL → FAILED
  │   │   │
  │   │   ├── COMPLETED (estado final)
  │   │   │   └── RESET → PENDING (solo para nuevo día)
  │   │   │
  │   │   ├── SKIPPED (estado final)
  │   │   │   └── RESET → PENDING
  │   │   │
  │   │   └── FAILED (estado final)
  │   │       └── RESET → PENDING
  │   │
  │   ├── canTransitionTask(
  │   │     currentState: TaskState,
  │   │     event: TaskEvent
  │   │   ): boolean
  │   │
  │   ├── transitionTask(
  │   │     currentState: TaskState,
  │   │     event: TaskEvent
  │   │   ): TransitionResult<TaskState>
  │   │
  │   └── getValidTaskEvents(
  │       currentState: TaskState
  │     ): TaskEvent[]
  │
  ├── 📄 subscription-machine.ts
  │   │
  │   ├── SubscriptionState (enum)
  │   │   ├── TRIAL = 'trial'
  │   │   ├── ACTIVE = 'active'
  │   │   ├── PAST_DUE = 'past_due'
  │   │   ├── LIMBO = 'limbo'
  │   │   ├── CANCELLED = 'cancelled'
  │   │   └── EXPIRED = 'expired'
  │   │
  │   ├── SubscriptionEvent (enum)
  │   │   ├── SUBSCRIBE = 'subscribe'
  │   │   ├── PAYMENT_SUCCESS = 'payment_success'
  │   │   ├── PAYMENT_FAILED = 'payment_failed'
  │   │   ├── CANCEL = 'cancel'
  │   │   ├── REACTIVATE = 'reactivate'
  │   │   ├── TRIAL_EXPIRED = 'trial_expired'
  │   │   └── GRACE_PERIOD_EXPIRED = 'grace_period_expired'
  │   │
  │   ├── SUBSCRIPTION_STATE_MACHINE
  │   │   │
  │   │   ├── TRIAL
  │   │   │   ├── SUBSCRIBE → ACTIVE
  │   │   │   └── TRIAL_EXPIRED → EXPIRED
  │   │   │
  │   │   ├── ACTIVE
  │   │   │   ├── PAYMENT_FAILED → PAST_DUE
  │   │   │   └── CANCEL → CANCELLED
  │   │   │
  │   │   ├── PAST_DUE
  │   │   │   ├── PAYMENT_SUCCESS → ACTIVE
  │   │   │   └── GRACE_PERIOD_EXPIRED → LIMBO
  │   │   │
  │   │   ├── LIMBO
  │   │   │   ├── PAYMENT_SUCCESS → ACTIVE
  │   │   │   └── GRACE_PERIOD_EXPIRED → EXPIRED
  │   │   │
  │   │   ├── CANCELLED
  │   │   │   └── REACTIVATE → ACTIVE
  │   │   │
  │   │   └── EXPIRED (estado final)
  │   │       └── SUBSCRIBE → ACTIVE
  │   │
  │   ├── canTransitionSubscription(...)
  │   ├── transitionSubscription(...)
  │   └── getValidSubscriptionEvents(...)
  │
  ├── 📄 image-machine.ts
  │   │
  │   ├── ImageGenState (enum)
  │   │   ├── IDLE = 'idle'
  │   │   ├── QUEUED = 'queued'
  │   │   ├── GENERATING = 'generating'
  │   │   ├── COMPLETED = 'completed'
  │   │   └── FAILED = 'failed'
  │   │
  │   ├── ImageGenEvent (enum)
  │   │   ├── REQUEST = 'request'
  │   │   ├── PROCESS_START = 'process_start'
  │   │   ├── PROCESS_COMPLETE = 'process_complete'
  │   │   ├── PROCESS_FAIL = 'process_fail'
  │   │   └── RESET = 'reset'
  │   │
  │   ├── IMAGE_GEN_STATE_MACHINE
  │   │   │
  │   │   ├── IDLE
  │   │   │   └── REQUEST → QUEUED
  │   │   │
  │   │   ├── QUEUED
  │   │   │   └── PROCESS_START → GENERATING
  │   │   │
  │   │   ├── GENERATING
  │   │   │   ├── PROCESS_COMPLETE → COMPLETED
  │   │   │   └── PROCESS_FAIL → FAILED
  │   │   │
  │   │   ├── COMPLETED
  │   │   │   ├── REQUEST → QUEUED
  │   │   │   └── RESET → IDLE
  │   │   │
  │   │   └── FAILED
  │   │       ├── REQUEST → QUEUED (retry)
  │   │       └── RESET → IDLE
  │   │
  │   ├── canTransitionImageGen(...)
  │   ├── transitionImageGen(...)
  │   └── getValidImageGenEvents(...)
  │
  └── 📄 state-machines.test.ts
      │
      ├── describe('Task State Machine')
      │   ├── it('transitions PENDING → IN_PROGRESS on START')
      │   ├── it('transitions IN_PROGRESS → COMPLETED on COMPLETE')
      │   ├── it('prevents invalid transitions')
      │   ├── it('allows RESET from terminal states')
      │   └── it('returns correct valid events for each state')
      │
      ├── describe('Subscription State Machine')
      │   ├── it('transitions TRIAL → ACTIVE on SUBSCRIBE')
      │   ├── it('transitions ACTIVE → PAST_DUE on PAYMENT_FAILED')
      │   ├── it('transitions PAST_DUE → LIMBO after grace period')
      │   ├── it('allows recovery from LIMBO with payment')
      │   └── it('transitions to EXPIRED correctly')
      │
      └── describe('Image Gen State Machine')
          ├── it('follows happy path: IDLE → QUEUED → GENERATING → COMPLETED')
          ├── it('handles failure: GENERATING → FAILED')
          ├── it('allows retry from FAILED')
          └── it('allows new request from COMPLETED')

  Tareas Atómicas para 04.10 Máquinas de Estado

  TAREA-04.10.1:
    Nombre: "Crear estructura para state-machines"
    Acción: "Crear carpeta y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p src/lib/core/state-machines
      touch src/lib/core/state-machines/{index,types,task-machine,subscription-machine,image-machine}.ts
      touch src/lib/core/state-machines/state-machines.test.ts
    Criterio de Éxito: "Archivos existen"

  TAREA-04.10.2:
    Nombre: "Implementar types.ts para state-machines"
    Acción: "Definir tipos genéricos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/state-machines/types.ts:

      export interface TransitionResult<S extends string> {
        success: boolean;
        previousState: S;
        currentState: S;
        event: string;
        error?: string;
      }

      export interface StateDefinition<S extends string, E extends string> {
        on: Partial<Record<E, S>>;
        isFinal?: boolean;
      }

      export interface StateMachineConfig<S extends string, E extends string> {
        initialState: S;
        states: Record<S, StateDefinition<S, E>>;
      }

      export function createTransitionResult<S extends string>(
        success: boolean,
        previousState: S,
        currentState: S,
        event: string,
        error?: string
      ): TransitionResult<S> {
        return { success, previousState, currentState, event, error };
      }

      export function createSuccessTransition<S extends string>(
        previousState: S,
        currentState: S,
        event: string
      ): TransitionResult<S> {
        return createTransitionResult(true, previousState, currentState, event);
      }

      export function createFailedTransition<S extends string>(
        currentState: S,
        event: string,
        error: string
      ): TransitionResult<S> {
        return createTransitionResult(false, currentState, currentState, event, error);
      }
    Criterio de Éxito: "Tipos compilan"

  TAREA-04.10.3:
    Nombre: "Implementar task-machine.ts"
    Acción: "Máquina de estados de tareas"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/state-machines/task-machine.ts:

      import { TransitionResult, StateMachineConfig, createSuccessTransition, createFailedTransition } from './types';

      export enum TaskState {
        PENDING = 'pending',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        SKIPPED = 'skipped',
        FAILED = 'failed'
      }

      export enum TaskEvent {
        START = 'start',
        COMPLETE = 'complete',
        SKIP = 'skip',
        FAIL = 'fail',
        RESET = 'reset',
        CANCEL = 'cancel'
      }

      export const TASK_STATE_MACHINE: StateMachineConfig<TaskState, TaskEvent> = {
        initialState: TaskState.PENDING,
        states: {
          [TaskState.PENDING]: {
            on: {
              [TaskEvent.START]: TaskState.IN_PROGRESS,
              [TaskEvent.SKIP]: TaskState.SKIPPED,
              [TaskEvent.FAIL]: TaskState.FAILED
            }
          },
          [TaskState.IN_PROGRESS]: {
            on: {
              [TaskEvent.COMPLETE]: TaskState.COMPLETED,
              [TaskEvent.CANCEL]: TaskState.PENDING,
              [TaskEvent.FAIL]: TaskState.FAILED
            }
          },
          [TaskState.COMPLETED]: {
            isFinal: true,
            on: {
              [TaskEvent.RESET]: TaskState.PENDING
            }
          },
          [TaskState.SKIPPED]: {
            isFinal: true,
            on: {
              [TaskEvent.RESET]: TaskState.PENDING
            }
          },
          [TaskState.FAILED]: {
            isFinal: true,
            on: {
              [TaskEvent.RESET]: TaskState.PENDING
            }
          }
        }
      };

      export function canTransitionTask(
        currentState: TaskState,
        event: TaskEvent
      ): boolean {
        const stateConfig = TASK_STATE_MACHINE.states[currentState];
        return event in stateConfig.on;
      }

      export function transitionTask(
        currentState: TaskState,
        event: TaskEvent
      ): TransitionResult<TaskState> {
        if (!canTransitionTask(currentState, event)) {
          return createFailedTransition(
            currentState,
            event,
            `Cannot transition from "${currentState}" with event "${event}"`
          );
        }

        const nextState = TASK_STATE_MACHINE.states[currentState].on[event]!;
        return createSuccessTransition(currentState, nextState, event);
      }

      export function getValidTaskEvents(currentState: TaskState): TaskEvent[] {
        const stateConfig = TASK_STATE_MACHINE.states[currentState];
        return Object.keys(stateConfig.on) as TaskEvent[];
      }

      export function isTaskFinalState(state: TaskState): boolean {
        return TASK_STATE_MACHINE.states[state].isFinal === true;
      }
    Criterio de Éxito: "Máquina de tareas funciona"

  TAREA-04.10.4:
    Nombre: "Implementar subscription-machine.ts"
    Acción: "Máquina de estados de suscripción"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/state-machines/subscription-machine.ts:

      import { TransitionResult, StateMachineConfig, createSuccessTransition, createFailedTransition } from './types';

      export enum SubscriptionState {
        TRIAL = 'trial',
        ACTIVE = 'active',
        PAST_DUE = 'past_due',
        LIMBO = 'limbo',
        CANCELLED = 'cancelled',
        EXPIRED = 'expired'
      }

      export enum SubscriptionEvent {
        SUBSCRIBE = 'subscribe',
        PAYMENT_SUCCESS = 'payment_success',
        PAYMENT_FAILED = 'payment_failed',
        CANCEL = 'cancel',
        REACTIVATE = 'reactivate',
        TRIAL_EXPIRED = 'trial_expired',
        GRACE_PERIOD_EXPIRED = 'grace_period_expired'
      }

      export const SUBSCRIPTION_STATE_MACHINE: StateMachineConfig<SubscriptionState, SubscriptionEvent> = {
        initialState: SubscriptionState.TRIAL,
        states: {
          [SubscriptionState.TRIAL]: {
            on: {
              [SubscriptionEvent.SUBSCRIBE]: SubscriptionState.ACTIVE,
              [SubscriptionEvent.TRIAL_EXPIRED]: SubscriptionState.EXPIRED
            }
          },
          [SubscriptionState.ACTIVE]: {
            on: {
              [SubscriptionEvent.PAYMENT_FAILED]: SubscriptionState.PAST_DUE,
              [SubscriptionEvent.CANCEL]: SubscriptionState.CANCELLED
            }
          },
          [SubscriptionState.PAST_DUE]: {
            on: {
              [SubscriptionEvent.PAYMENT_SUCCESS]: SubscriptionState.ACTIVE,
              [SubscriptionEvent.GRACE_PERIOD_EXPIRED]: SubscriptionState.LIMBO
            }
          },
          [SubscriptionState.LIMBO]: {
            on: {
              [SubscriptionEvent.PAYMENT_SUCCESS]: SubscriptionState.ACTIVE,
              [SubscriptionEvent.GRACE_PERIOD_EXPIRED]: SubscriptionState.EXPIRED
            }
          },
          [SubscriptionState.CANCELLED]: {
            on: {
              [SubscriptionEvent.REACTIVATE]: SubscriptionState.ACTIVE
            }
          },
          [SubscriptionState.EXPIRED]: {
            isFinal: false, // Puede reactivarse
            on: {
              [SubscriptionEvent.SUBSCRIBE]: SubscriptionState.ACTIVE
            }
          }
        }
      };

      export function canTransitionSubscription(
        currentState: SubscriptionState,
        event: SubscriptionEvent
      ): boolean {
        const stateConfig = SUBSCRIPTION_STATE_MACHINE.states[currentState];
        return event in stateConfig.on;
      }

      export function transitionSubscription(
        currentState: SubscriptionState,
        event: SubscriptionEvent
      ): TransitionResult<SubscriptionState> {
        if (!canTransitionSubscription(currentState, event)) {
          return createFailedTransition(
            currentState,
            event,
            `Cannot transition subscription from "${currentState}" with event "${event}"`
          );
        }

        const nextState = SUBSCRIPTION_STATE_MACHINE.states[currentState].on[event]!;
        return createSuccessTransition(currentState, nextState, event);
      }

      export function getValidSubscriptionEvents(
        currentState: SubscriptionState
      ): SubscriptionEvent[] {
        const stateConfig = SUBSCRIPTION_STATE_MACHINE.states[currentState];
        return Object.keys(stateConfig.on) as SubscriptionEvent[];
      }

      export function isSubscriptionActive(state: SubscriptionState): boolean {
        return state === SubscriptionState.ACTIVE || state === SubscriptionState.TRIAL;
      }

      export function isSubscriptionAtRisk(state: SubscriptionState): boolean {
        return state === SubscriptionState.PAST_DUE || state === SubscriptionState.LIMBO;
      }
    Criterio de Éxito: "Máquina de suscripción funciona"

  TAREA-04.10.5:
    Nombre: "Implementar image-machine.ts"
    Acción: "Máquina de estados de generación de imagen"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/state-machines/image-machine.ts:

      import { TransitionResult, StateMachineConfig, createSuccessTransition, createFailedTransition } from './types';

      export enum ImageGenState {
        IDLE = 'idle',
        QUEUED = 'queued',
        GENERATING = 'generating',
        COMPLETED = 'completed',
        FAILED = 'failed'
      }

      export enum ImageGenEvent {
        REQUEST = 'request',
        PROCESS_START = 'process_start',
        PROCESS_COMPLETE = 'process_complete',
        PROCESS_FAIL = 'process_fail',
        RESET = 'reset'
      }

      export const IMAGE_GEN_STATE_MACHINE: StateMachineConfig<ImageGenState, ImageGenEvent> = {
        initialState: ImageGenState.IDLE,
        states: {
          [ImageGenState.IDLE]: {
            on: {
              [ImageGenEvent.REQUEST]: ImageGenState.QUEUED
            }
          },
          [ImageGenState.QUEUED]: {
            on: {
              [ImageGenEvent.PROCESS_START]: ImageGenState.GENERATING
            }
          },
          [ImageGenState.GENERATING]: {
            on: {
              [ImageGenEvent.PROCESS_COMPLETE]: ImageGenState.COMPLETED,
              [ImageGenEvent.PROCESS_FAIL]: ImageGenState.FAILED
            }
          },
          [ImageGenState.COMPLETED]: {
            on: {
              [ImageGenEvent.REQUEST]: ImageGenState.QUEUED,
              [ImageGenEvent.RESET]: ImageGenState.IDLE
            }
          },
          [ImageGenState.FAILED]: {
            on: {
              [ImageGenEvent.REQUEST]: ImageGenState.QUEUED,
              [ImageGenEvent.RESET]: ImageGenState.IDLE
            }
          }
        }
      };

      export function canTransitionImageGen(
        currentState: ImageGenState,
        event: ImageGenEvent
      ): boolean {
        const stateConfig = IMAGE_GEN_STATE_MACHINE.states[currentState];
        return event in stateConfig.on;
      }

      export function transitionImageGen(
        currentState: ImageGenState,
        event: ImageGenEvent
      ): TransitionResult<ImageGenState> {
        if (!canTransitionImageGen(currentState, event)) {
          return createFailedTransition(
            currentState,
            event,
            `Cannot transition image generation from "${currentState}" with event "${event}"`
          );
        }

        const nextState = IMAGE_GEN_STATE_MACHINE.states[currentState].on[event]!;
        return createSuccessTransition(currentState, nextState, event);
      }

      export function getValidImageGenEvents(
        currentState: ImageGenState
      ): ImageGenEvent[] {
        const stateConfig = IMAGE_GEN_STATE_MACHINE.states[currentState];
        return Object.keys(stateConfig.on) as ImageGenEvent[];
      }

      export function isImageGenInProgress(state: ImageGenState): boolean {
        return state === ImageGenState.QUEUED || state === ImageGenState.GENERATING;
      }

      export function canRequestNewImage(state: ImageGenState): boolean {
        return state === ImageGenState.IDLE ||
               state === ImageGenState.COMPLETED ||
               state === ImageGenState.FAILED;
      }
    Criterio de Éxito: "Máquina de imagen funciona"

  TAREA-04.10.6:
    Nombre: "Implementar index.ts para state-machines"
    Acción: "Exports públicos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/state-machines/index.ts:

      // Types
      export type { TransitionResult, StateDefinition, StateMachineConfig } from './types';
      export { createTransitionResult, createSuccessTransition, createFailedTransition } from './types';

      // Task Machine
      export { TaskState, TaskEvent, TASK_STATE_MACHINE } from './task-machine';
      export { canTransitionTask, transitionTask, getValidTaskEvents, isTaskFinalState } from './task-machine';

      // Subscription Machine
      export { SubscriptionState, SubscriptionEvent, SUBSCRIPTION_STATE_MACHINE } from './subscription-machine';
      export { canTransitionSubscription, transitionSubscription, getValidSubscriptionEvents, isSubscriptionActive, isSubscriptionAtRisk } from './subscription-machine';

      // Image Gen Machine
      export { ImageGenState, ImageGenEvent, IMAGE_GEN_STATE_MACHINE } from './image-machine';
      export { canTransitionImageGen, transitionImageGen, getValidImageGenEvents, isImageGenInProgress, canRequestNewImage } from './image-machine';
    Criterio de Éxito: "Exports funcionan"

  TAREA-04.10.7:
    Nombre: "Implementar tests de state-machines"
    Acción: "Suite completa de tests"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/state-machines/state-machines.test.ts:

      import { describe, it, expect } from 'vitest';
      import {
        TaskState, TaskEvent, transitionTask, canTransitionTask, getValidTaskEvents, isTaskFinalState,
        SubscriptionState, SubscriptionEvent, transitionSubscription, canTransitionSubscription,
        ImageGenState, ImageGenEvent, transitionImageGen, canTransitionImageGen
      } from './index';

      // ========================================
      // TASK STATE MACHINE TESTS
      // ========================================

      describe('Task State Machine', () => {
        describe('canTransitionTask', () => {
          it('allows START from PENDING', () => {
            expect(canTransitionTask(TaskState.PENDING, TaskEvent.START)).toBe(true);
          });

          it('allows COMPLETE from IN_PROGRESS', () => {
            expect(canTransitionTask(TaskState.IN_PROGRESS, TaskEvent.COMPLETE)).toBe(true);
          });

          it('allows SKIP from PENDING', () => {
            expect(canTransitionTask(TaskState.PENDING, TaskEvent.SKIP)).toBe(true);
          });

          it('disallows COMPLETE from PENDING', () => {
            expect(canTransitionTask(TaskState.PENDING, TaskEvent.COMPLETE)).toBe(false);
          });

          it('disallows START from COMPLETED', () => {
            expect(canTransitionTask(TaskState.COMPLETED, TaskEvent.START)).toBe(false);
          });
        });

        describe('transitionTask', () => {
          it('transitions PENDING → IN_PROGRESS on START', () => {
            const result = transitionTask(TaskState.PENDING, TaskEvent.START);
            expect(result.success).toBe(true);
            expect(result.previousState).toBe(TaskState.PENDING);
            expect(result.currentState).toBe(TaskState.IN_PROGRESS);
          });

          it('transitions IN_PROGRESS → COMPLETED on COMPLETE', () => {
            const result = transitionTask(TaskState.IN_PROGRESS, TaskEvent.COMPLETE);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(TaskState.COMPLETED);
          });

          it('fails for invalid transition', () => {
            const result = transitionTask(TaskState.PENDING, TaskEvent.COMPLETE);
            expect(result.success).toBe(false);
            expect(result.currentState).toBe(TaskState.PENDING);
            expect(result.error).toBeDefined();
          });

          it('allows RESET from terminal states', () => {
            const fromCompleted = transitionTask(TaskState.COMPLETED, TaskEvent.RESET);
            expect(fromCompleted.success).toBe(true);
            expect(fromCompleted.currentState).toBe(TaskState.PENDING);

            const fromSkipped = transitionTask(TaskState.SKIPPED, TaskEvent.RESET);
            expect(fromSkipped.success).toBe(true);

            const fromFailed = transitionTask(TaskState.FAILED, TaskEvent.RESET);
            expect(fromFailed.success).toBe(true);
          });
        });

        describe('getValidTaskEvents', () => {
          it('returns [START, SKIP, FAIL] for PENDING', () => {
            const events = getValidTaskEvents(TaskState.PENDING);
            expect(events).toContain(TaskEvent.START);
            expect(events).toContain(TaskEvent.SKIP);
            expect(events).toContain(TaskEvent.FAIL);
          });

          it('returns [RESET] for COMPLETED', () => {
            const events = getValidTaskEvents(TaskState.COMPLETED);
            expect(events).toEqual([TaskEvent.RESET]);
          });
        });

        describe('isTaskFinalState', () => {
          it('returns true for COMPLETED, SKIPPED, FAILED', () => {
            expect(isTaskFinalState(TaskState.COMPLETED)).toBe(true);
            expect(isTaskFinalState(TaskState.SKIPPED)).toBe(true);
            expect(isTaskFinalState(TaskState.FAILED)).toBe(true);
          });

          it('returns false for PENDING, IN_PROGRESS', () => {
            expect(isTaskFinalState(TaskState.PENDING)).toBe(false);
            expect(isTaskFinalState(TaskState.IN_PROGRESS)).toBe(false);
          });
        });
      });

      // ========================================
      // SUBSCRIPTION STATE MACHINE TESTS
      // ========================================

      describe('Subscription State Machine', () => {
        describe('transitionSubscription', () => {
          it('transitions TRIAL → ACTIVE on SUBSCRIBE', () => {
            const result = transitionSubscription(SubscriptionState.TRIAL, SubscriptionEvent.SUBSCRIBE);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(SubscriptionState.ACTIVE);
          });

          it('transitions ACTIVE → PAST_DUE on PAYMENT_FAILED', () => {
            const result = transitionSubscription(SubscriptionState.ACTIVE, SubscriptionEvent.PAYMENT_FAILED);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(SubscriptionState.PAST_DUE);
          });

          it('transitions PAST_DUE → LIMBO on GRACE_PERIOD_EXPIRED', () => {
            const result = transitionSubscription(SubscriptionState.PAST_DUE, SubscriptionEvent.GRACE_PERIOD_EXPIRED);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(SubscriptionState.LIMBO);
          });

          it('allows recovery from LIMBO with payment', () => {
            const result = transitionSubscription(SubscriptionState.LIMBO, SubscriptionEvent.PAYMENT_SUCCESS);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(SubscriptionState.ACTIVE);
          });

          it('transitions LIMBO → EXPIRED after grace period', () => {
            const result = transitionSubscription(SubscriptionState.LIMBO, SubscriptionEvent.GRACE_PERIOD_EXPIRED);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(SubscriptionState.EXPIRED);
          });

          it('allows reactivation from CANCELLED', () => {
            const result = transitionSubscription(SubscriptionState.CANCELLED, SubscriptionEvent.REACTIVATE);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(SubscriptionState.ACTIVE);
          });

          it('allows new subscription from EXPIRED', () => {
            const result = transitionSubscription(SubscriptionState.EXPIRED, SubscriptionEvent.SUBSCRIBE);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(SubscriptionState.ACTIVE);
          });
        });
      });

      // ========================================
      // IMAGE GEN STATE MACHINE TESTS
      // ========================================

      describe('Image Gen State Machine', () => {
        describe('happy path', () => {
          it('follows IDLE → QUEUED → GENERATING → COMPLETED', () => {
            let state = ImageGenState.IDLE;

            const r1 = transitionImageGen(state, ImageGenEvent.REQUEST);
            expect(r1.success).toBe(true);
            state = r1.currentState;
            expect(state).toBe(ImageGenState.QUEUED);

            const r2 = transitionImageGen(state, ImageGenEvent.PROCESS_START);
            expect(r2.success).toBe(true);
            state = r2.currentState;
            expect(state).toBe(ImageGenState.GENERATING);

            const r3 = transitionImageGen(state, ImageGenEvent.PROCESS_COMPLETE);
            expect(r3.success).toBe(true);
            state = r3.currentState;
            expect(state).toBe(ImageGenState.COMPLETED);
          });
        });

        describe('failure path', () => {
          it('handles GENERATING → FAILED', () => {
            const result = transitionImageGen(ImageGenState.GENERATING, ImageGenEvent.PROCESS_FAIL);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(ImageGenState.FAILED);
          });

          it('allows retry from FAILED', () => {
            const result = transitionImageGen(ImageGenState.FAILED, ImageGenEvent.REQUEST);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(ImageGenState.QUEUED);
          });
        });

        describe('new request from completed', () => {
          it('allows new request from COMPLETED', () => {
            const result = transitionImageGen(ImageGenState.COMPLETED, ImageGenEvent.REQUEST);
            expect(result.success).toBe(true);
            expect(result.currentState).toBe(ImageGenState.QUEUED);
          });
        });
      });
    Criterio de Éxito: "Todos los tests pasan"

  TAREA-04.10.8:
    Nombre: "Ejecutar tests de state-machines"
    Acción: "Verificar suite completa"
    Responsable: Antigravity
    Comando: |
      npm run test src/lib/core/state-machines/state-machines.test.ts
    Criterio de Éxito: "100% tests pasan"

  ---
  TAREA FINAL DE CAJA 04

  TAREA-04.11.1:
    Nombre: "Crear index.ts raíz del core"
    Acción: "Re-exportar todos los módulos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/lib/core/index.ts que re-exporta todos los módulos:

      // Vectors
      export * from './vectors';

      // Levels
      export * from './levels';

      // Health
      export * from './health';

      // Streak
      export * from './streak';

      // Judgement
      export * from './judgement';

      // Death
      export * from './death';

      // Economy
      export * from './economy';

      // Protocol
      export * from './protocol';

      // Validations
      export * from './validations';

      // State Machines
      export * from './state-machines';
    Criterio de Éxito: "Import desde @/lib/core funciona"

  TAREA-04.11.2:
    Nombre: "Ejecutar suite completa de tests del core"
    Acción: "Verificar que todo funciona"
    Responsable: Antigravity
    Comando: |
      npm run test src/lib/core/
    Criterio de Éxito: "Todos los tests pasan, coverage > 85%"

  TAREA-04.11.3:
    Nombre: "Verificar exports y types"
    Acción: "Comprobar que TypeScript no da errores"
    Responsable: Antigravity
    Comando: |
      npx tsc --noEmit
    Criterio de Éxito: "Sin errores de TypeScript"

  ---
  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║                    📊 RESUMEN FINAL - CAJA 04                                        ║
  ║                                                                                      ║
  ╠══════════════════════════════════════════════════════════════════════════════════════╣
  ║                                                                                      ║
  ║  SUBCAJA 04.1: Sistema de Vectores           │ 13 tareas  │ ~800 líneas             ║
  ║  SUBCAJA 04.2: Sistema de Niveles            │  7 tareas  │ ~500 líneas             ║
  ║  SUBCAJA 04.3: Sistema de Salud              │  7 tareas  │ ~400 líneas             ║
  ║  SUBCAJA 04.4: Sistema de Racha              │  5 tareas  │ ~350 líneas             ║
  ║  SUBCAJA 04.5: Judgement Night               │  7 tareas  │ ~600 líneas             ║
  ║  SUBCAJA 04.6: Muerte y Resurrección         │  7 tareas  │ ~350 líneas             ║
  ║  SUBCAJA 04.7: Economía                      │  9 tareas  │ ~450 líneas             ║
  ║  SUBCAJA 04.8: Protocolo de 100 Días         │  8 tareas  │ ~650 líneas             ║
  ║  SUBCAJA 04.9: Validaciones de Negocio       │  8 tareas  │ ~500 líneas             ║
  ║  SUBCAJA 04.10: Máquinas de Estado           │  8 tareas  │ ~550 líneas             ║
  ║  ───────────────────────────────────────────┼────────────┼─────────────────────────║
  ║  SUBTOTAL SUBCAJAS                           │ 79 tareas  │ ~5,150 líneas           ║
  ║  ───────────────────────────────────────────┼────────────┼─────────────────────────║
  ║  TAREAS FINALES (index + tests globales)     │  3 tareas  │                         ║
  ║  ───────────────────────────────────────────┼────────────┼─────────────────────────║
  ║  TOTAL CAJA 04                               │ 82 tareas  │ ~5,150 líneas código    ║
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
  ║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
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
  ║  TOTAL DESGLOSADO HASTA AHORA             │ 35 subcajas │ 287 tareas │ 4/13 CAJAS   ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		