╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                       📦 CAJA 09: ECONOMÍA Y TIENDA                                  ║
║                                                                                      ║
║    "El músculo sin ropa de marca es invisible.                                       ║
║     La riqueza virtual es el espejo del esfuerzo real."                              ║
║                                                                                      ║
║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
║    │                                                                            │   ║
║    │   💰 09.1 Core         💎 09.2 Rewards      🏪 09.3 Store                 │   ║
║    │   Economy Engine       Task Rewards         Catalog System                 │   ║
║    │                                                                            │   ║
║    │   🎒 09.4 Inventory    🔒 09.5 Gating       💳 09.6 Purchase              │   ║
║    │   Management           Requirements         Transactions                   │   ║
║    │                                                                            │   ║
║    │   ⚖️ 09.7 Balance      🖼️ 09.8 Item-IA      🧪 09.9 Testing               │   ║
║    │   Anti-Exploit         Integration          Economy Tests                  │   ║
║    │                                                                            │   ║
║    └────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                      ║
║    Responsable: Claude (Documentación) → Antigravity (Implementación)               ║
║    Entregables: 9 subcajas con ~58 tareas atómicas                                  ║
║    Tiempo Estimado: 4-6 horas de desarrollo                                         ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ÍNDICE DE SUBCAJAS

SUBCAJA 09.1: Core Economy Engine
SUBCAJA 09.2: Task Rewards System
SUBCAJA 09.3: Store Catalog System
SUBCAJA 09.4: Inventory Management
SUBCAJA 09.5: Gating Requirements
SUBCAJA 09.6: Purchase Transactions
SUBCAJA 09.7: Balance & Anti-Exploit
SUBCAJA 09.8: Item-IA Integration
SUBCAJA 09.9: Economy Testing


SUBCAJA 09.1: Core Economy Engine
Motor Central de Economía
Archivos a Crear
CopyRutas:
├── /src/lib/core/economy/index.ts          # Exports
├── /src/lib/core/economy/types.ts          # Tipos de economía
├── /src/lib/core/economy/constants.ts      # Constantes económicas
├── /src/lib/core/economy/wallet.ts         # Lógica de wallet
└── /src/lib/core/economy/transactions.ts   # Procesamiento de transacciones

Tiempo Estimado: 45-60 minutos
Estructura de Tipos
typescriptCopy// /src/lib/core/economy/types.ts

/**
 * Estado del wallet de un usuario
 */
export interface WalletState {
  userId: string;
  btcBalance: number;        // Balance actual
  totalEarned: number;       // Total histórico ganado
  totalSpent: number;        // Total histórico gastado
  lastTransactionAt: Date | null;
}

/**
 * Tipos de transacción
 */
export type TransactionType = 
  | 'task_reward'           // Recompensa por completar tarea
  | 'streak_bonus'          // Bono por racha
  | 'level_up_bonus'        // Bono por subir de nivel
  | 'perfect_day_bonus'     // Bono por día perfecto (100%)
  | 'purchase'              // Compra en tienda
  | 'premium_purchase';     // Compra de BTC con dinero real

/**
 * Registro de transacción
 */
export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;           // Positivo = ingreso, Negativo = gasto
  balanceBefore: number;
  balanceAfter: number;
  metadata: Record<string, unknown>;
  createdAt: Date;
}

/**
 * Resultado de operación de wallet
 */
export interface WalletOperationResult {
  success: boolean;
  newBalance: number;
  transaction?: Transaction;
  error?: WalletError;
}

/**
 * Errores de wallet
 */
export type WalletError = 
  | 'INSUFFICIENT_FUNDS'
  | 'INVALID_AMOUNT'
  | 'WALLET_NOT_FOUND'
  | 'TRANSACTION_FAILED';
Constantes Económicas (del cuestionario1)
typescriptCopy// /src/lib/core/economy/constants.ts

/**
 * Recompensas base por tipo de tarea
 * Fuente: cuestionario1 - Sección 9.2
 */
export const TASK_REWARDS = {
  // ARQUETIPO MENTAL (aura_lvl)
  meditation: 100,          // "Meditación Consciente (Oracle): 100 Bitcoins"
  cold_shower: 50,          // Estimado proporcional
  reading: 50,              // "Lectura: 50 BTC"
  wake_early: 25,           // "Despertar: 25 BTC"
  
  // ARQUETIPO CARA (face_lvl)
  posture: 50,              // "Postura: 50 BTC"
  facial: 50,               // "Facial: 50 BTC"
  kegel: 50,                // "Kegel: 50 BTC" (por sesión)
  
  // ARQUETIPO PRODUCTIVIDAD (wealth_lvl)
  journal: 150,             // "Diario de Estrategia (Journal): 150 Bitcoins"
  skill_learning: 50,       // "Skill Lab: 50 BTC por cada 30 min"
  focus_work: 100,          // "Focus Work: 100 BTC por cada hora"
  
  // ARQUETIPO FÍSICO (muscle_lvl, fat_lvl)
  strength: 250,            // "Entrenamiento de Fuerza (Logbook): 250 Bitcoins"
  cardio: 100,              // "Cardio: 100 BTC"
  hydration: 25,            // "Hidratación: 25 BTC"
} as const;

/**
 * Multiplicadores de racha
 * Fuente: cuestionario1 - P5.4.3
 */
export const STREAK_MULTIPLIERS = {
  0: 1.0,    // Sin racha
  3: 1.1,    // Días 1-7: x1.1
  7: 1.1,    // Días 1-7: x1.1
  14: 1.5,   // Días 8-14: x1.5
  30: 2.5,   // Días 30+: x2.5 (Multiplicador Crítico)
} as const;

/**
 * Bonificaciones especiales
 * Fuente: cuestionario1 - Economía
 */
export const SPECIAL_BONUSES = {
  perfectDay: 100,          // "+100 BTC extra" por día 100%
  levelUp: (level: number) => level * 200, // Estimado: 200 BTC por nivel
  
  // Bonos de racha del cuestionario
  streak7: 0,               // Multiplicador, no bono fijo
  streak30: 0,              // Multiplicador, no bono fijo
} as const;

/**
 * Límites económicos
 */
export const ECONOMY_LIMITS = {
  maxDailyEarnings: 3500,   // "Hard Cap de 3,500 Bitcoins diarios"
  maxWalletBalance: 999999, // Límite técnico
  minPurchaseAmount: 1,
} as const;

/**
 * Multiplicadores por nivel de usuario
 * Fuente: cuestionario1 - "Multiplicador de Rango Jerárquico"
 */
export const LEVEL_MULTIPLIERS: Record<number, number> = {
  1: 1.0,   // Nivel 1-2 (Indigente/Arrimado): x1.0
  2: 1.0,
  3: 1.2,   // Nivel 3-4 (Alucín/Chalán): x1.2
  4: 1.2,
  5: 1.5,   // Nivel 5-6 (Godín/Acomodado): x1.5
  6: 1.5,
  7: 2.0,   // Nivel 7-8 (Pudiente/Millonario): x2.0
  8: 2.0,
  9: 3.0,   // Nivel 9-10 (Magnate/Semi-Dios): x3.0
  10: 3.0,
};
Tareas Atómicas para 09.1
yamlCopyTAREA-09.1.1:
  Nombre: "Crear estructura de archivos de economía"
  Acción: "Crear carpeta /src/lib/core/economy con archivos base"
  Responsable: Antigravity
  Comando: |
    mkdir -p src/lib/core/economy
    touch src/lib/core/economy/{index.ts,types.ts,constants.ts,wallet.ts,transactions.ts}
  Criterio de Éxito: "Archivos creados con exports básicos"

TAREA-09.1.2:
  Nombre: "Definir tipos de economía"
  Acción: "Crear /src/lib/core/economy/types.ts"
  Responsable: Antigravity
  Input: "Estructura de tipos definida arriba"
  Output: "Archivo con todos los tipos TypeScript"
  Prompt para Antigravity: |
    Crea el archivo /src/lib/core/economy/types.ts con:
    - WalletState interface
    - TransactionType union
    - Transaction interface
    - WalletOperationResult interface
    - WalletError union
    
    Asegúrate de que todos los tipos tengan JSDoc comments.

TAREA-09.1.3:
  Nombre: "Definir constantes económicas"
  Acción: "Crear /src/lib/core/economy/constants.ts"
  Responsable: Antigravity
  Input: "Valores del cuestionario1"
  Output: "Constantes con valores exactos"
  Prompt para Antigravity: |
    Crea el archivo /src/lib/core/economy/constants.ts con los valores
    exactos del cuestionario1:
    - TASK_REWARDS: Recompensas por tarea (meditation: 100, strength: 250, etc.)
    - STREAK_MULTIPLIERS: x1.1 para 7 días, x1.5 para 14, x2.5 para 30+
    - LEVEL_MULTIPLIERS: x1.0 para niveles 1-2, x1.2 para 3-4, etc.
    - ECONOMY_LIMITS: maxDailyEarnings: 3500
    
    Usa 'as const' para type inference estricto.

TAREA-09.1.4:
  Nombre: "Implementar función getStreakMultiplier"
  Acción: "En wallet.ts, calcular multiplicador según días de racha"
  Responsable: Antigravity
  Input: "streakDays: number"
  Output: "number (multiplicador)"
  Código:
    ```typescript
    /**
     * Obtiene el multiplicador de BTC basado en días de racha
     * Fuente: cuestionario1 - "Multiplicador de Racha"
     */
    export function getStreakMultiplier(streakDays: number): number {
      if (streakDays >= 30) return 2.5;
      if (streakDays >= 14) return 1.5;
      if (streakDays >= 7) return 1.1;
      return 1.0;
    }
    ```
  Test: |
    expect(getStreakMultiplier(0)).toBe(1.0);
    expect(getStreakMultiplier(6)).toBe(1.0);
    expect(getStreakMultiplier(7)).toBe(1.1);
    expect(getStreakMultiplier(14)).toBe(1.5);
    expect(getStreakMultiplier(30)).toBe(2.5);
    expect(getStreakMultiplier(100)).toBe(2.5);

TAREA-09.1.5:
  Nombre: "Implementar función getLevelMultiplier"
  Acción: "En wallet.ts, calcular multiplicador según nivel"
  Responsable: Antigravity
  Input: "level: number"
  Output: "number (multiplicador)"
  Código:
    ```typescript
    /**
     * Obtiene el multiplicador de BTC basado en nivel del usuario
     * Fuente: cuestionario1 - "Multiplicador de Rango Jerárquico"
     */
    export function getLevelMultiplier(level: number): number {
      const clampedLevel = Math.min(10, Math.max(1, level));
      return LEVEL_MULTIPLIERS[clampedLevel] ?? 1.0;
    }
    ```

TAREA-09.1.6:
  Nombre: "Implementar función calculateTaskReward"
  Acción: "Calcular recompensa final con multiplicadores"
  Responsable: Antigravity
  Input: "taskCategory, streakDays, userLevel"
  Output: "number (BTC a otorgar)"
  Código:
    ```typescript
    /**
     * Calcula la recompensa final de una tarea aplicando multiplicadores
     */
    export function calculateTaskReward(
      taskCategory: keyof typeof TASK_REWARDS,
      streakDays: number,
      userLevel: number
    ): number {
      const baseReward = TASK_REWARDS[taskCategory];
      const streakMultiplier = getStreakMultiplier(streakDays);
      const levelMultiplier = getLevelMultiplier(userLevel);
      
      const finalReward = Math.floor(baseReward * streakMultiplier * levelMultiplier);
      
      return finalReward;
    }
    ```
  Test: |
    // Meditación base (100), sin racha (x1), nivel 1 (x1) = 100
    expect(calculateTaskReward('meditation', 0, 1)).toBe(100);
    
    // Fuerza base (250), racha 30 (x2.5), nivel 9 (x3) = 1875
    expect(calculateTaskReward('strength', 30, 9)).toBe(1875);

TAREA-09.1.7:
  Nombre: "Implementar función creditBtc (pura)"
  Acción: "Función pura que calcula nuevo estado de wallet"
  Responsable: Antigravity
  Input: "walletState, amount, transactionType, metadata"
  Output: "WalletOperationResult"
  Código:
    ```typescript
    /**
     * Función PURA que calcula el nuevo estado del wallet al acreditar BTC
     * NO hace I/O - solo calcula
     */
    export function creditBtc(
      wallet: WalletState,
      amount: number,
      type: TransactionType,
      metadata: Record<string, unknown> = {}
    ): WalletOperationResult {
      if (amount <= 0) {
        return {
          success: false,
          newBalance: wallet.btcBalance,
          error: 'INVALID_AMOUNT',
        };
      }
      
      const newBalance = wallet.btcBalance + amount;
      const cappedBalance = Math.min(newBalance, ECONOMY_LIMITS.maxWalletBalance);
      
      return {
        success: true,
        newBalance: cappedBalance,
        transaction: {
          id: '', // Se genera en la capa de DB
          userId: wallet.userId,
          type,
          amount,
          balanceBefore: wallet.btcBalance,
          balanceAfter: cappedBalance,
          metadata,
          createdAt: new Date(),
        },
      };
    }
    ```

TAREA-09.1.8:
  Nombre: "Implementar función debitBtc (pura)"
  Acción: "Función pura que calcula nuevo estado al debitar"
  Responsable: Antigravity
  Input: "walletState, amount, transactionType, metadata"
  Output: "WalletOperationResult"
  Código:
    ```typescript
    /**
     * Función PURA que calcula el nuevo estado del wallet al debitar BTC
     * NO hace I/O - solo calcula
     */
    export function debitBtc(
      wallet: WalletState,
      amount: number,
      type: TransactionType,
      metadata: Record<string, unknown> = {}
    ): WalletOperationResult {
      if (amount <= 0) {
        return {
          success: false,
          newBalance: wallet.btcBalance,
          error: 'INVALID_AMOUNT',
        };
      }
      
      if (wallet.btcBalance < amount) {
        return {
          success: false,
          newBalance: wallet.btcBalance,
          error: 'INSUFFICIENT_FUNDS',
        };
      }
      
      const newBalance = wallet.btcBalance - amount;
      
      return {
        success: true,
        newBalance,
        transaction: {
          id: '',
          userId: wallet.userId,
          type,
          amount: -amount, // Negativo para débito
          balanceBefore: wallet.btcBalance,
          balanceAfter: newBalance,
          metadata,
          createdAt: new Date(),
        },
      };
    }
    ```

TAREA-09.1.9:
  Nombre: "Crear barrel export"
  Acción: "Exportar todo desde index.ts"
  Responsable: Antigravity
  Código:
    ```typescript
    // /src/lib/core/economy/index.ts
    export * from './types';
    export * from './constants';
    export * from './wallet';
    export * from './transactions';
    ```

SUBCAJA 09.2: Task Rewards System
Sistema de Recompensas por Tarea
Archivos a Crear
CopyRutas:
├── /src/lib/core/economy/rewards.ts        # Lógica de recompensas
└── /src/actions/economy/credit-task-reward.ts  # Server Action

Tiempo Estimado: 30-45 minutos
Estructura del Sistema
typescriptCopy// /src/lib/core/economy/rewards.ts

import { 
  TASK_REWARDS, 
  SPECIAL_BONUSES, 
  ECONOMY_LIMITS 
} from './constants';
import { 
  getStreakMultiplier, 
  getLevelMultiplier, 
  creditBtc 
} from './wallet';
import type { WalletState, WalletOperationResult } from './types';
import type { TaskCategory } from '@/types/tasks';

/**
 * Contexto para calcular recompensa de tarea
 */
export interface TaskRewardContext {
  taskCategory: TaskCategory;
  streakDays: number;
  userLevel: number;
  isPerfectDay: boolean;
  todayEarnings: number;  // BTC ganados hoy (para cap)
}

/**
 * Resultado del cálculo de recompensa
 */
export interface TaskRewardResult {
  baseReward: number;
  streakMultiplier: number;
  levelMultiplier: number;
  perfectDayBonus: number;
  totalBeforeCap: number;
  finalReward: number;
  wasCapped: boolean;
  breakdown: {
    base: number;
    afterStreak: number;
    afterLevel: number;
    afterBonus: number;
    afterCap: number;
  };
}
Tareas Atómicas para 09.2
yamlCopyTAREA-09.2.1:
  Nombre: "Crear archivo rewards.ts"
  Acción: "Crear /src/lib/core/economy/rewards.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el archivo de lógica de recompensas con los tipos:
    - TaskRewardContext interface
    - TaskRewardResult interface

TAREA-09.2.2:
  Nombre: "Implementar función calculateTaskRewardDetailed"
  Acción: "Calcular recompensa con desglose completo"
  Responsable: Antigravity
  Input: "TaskRewardContext"
  Output: "TaskRewardResult"
  Código:
    ```typescript
    /**
     * Calcula la recompensa de una tarea con desglose detallado
     * Aplica: base → streak multiplier → level multiplier → bonuses → cap
     */
    export function calculateTaskRewardDetailed(
      context: TaskRewardContext
    ): TaskRewardResult {
      const { taskCategory, streakDays, userLevel, isPerfectDay, todayEarnings } = context;
      
      // 1. Base reward
      const baseReward = TASK_REWARDS[taskCategory] ?? 0;
      
      // 2. Apply streak multiplier
      const streakMultiplier = getStreakMultiplier(streakDays);
      const afterStreak = Math.floor(baseReward * streakMultiplier);
      
      // 3. Apply level multiplier
      const levelMultiplier = getLevelMultiplier(userLevel);
      const afterLevel = Math.floor(afterStreak * levelMultiplier);
      
      // 4. Add perfect day bonus (solo si es la última tarea del día 100%)
      const perfectDayBonus = isPerfectDay ? SPECIAL_BONUSES.perfectDay : 0;
      const afterBonus = afterLevel + perfectDayBonus;
      
      // 5. Apply daily cap
      const remainingCap = Math.max(0, ECONOMY_LIMITS.maxDailyEarnings - todayEarnings);
      const finalReward = Math.min(afterBonus, remainingCap);
      const wasCapped = afterBonus > remainingCap;
      
      return {
        baseReward,
        streakMultiplier,
        levelMultiplier,
        perfectDayBonus,
        totalBeforeCap: afterBonus,
        finalReward,
        wasCapped,
        breakdown: {
          base: baseReward,
          afterStreak,
          afterLevel,
          afterBonus,
          afterCap: finalReward,
        },
      };
    }
    ```
  Test: |
    const context = {
      taskCategory: 'strength',
      streakDays: 30,
      userLevel: 9,
      isPerfectDay: false,
      todayEarnings: 0,
    };
    const result = calculateTaskRewardDetailed(context);
    // 250 * 2.5 * 3.0 = 1875
    expect(result.finalReward).toBe(1875);
    expect(result.wasCapped).toBe(false);

TAREA-09.2.3:
  Nombre: "Implementar función applyTaskReward"
  Acción: "Aplicar recompensa a wallet (función pura)"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Aplica una recompensa de tarea al wallet
     * Función PURA - no hace I/O
     */
    export function applyTaskReward(
      wallet: WalletState,
      context: TaskRewardContext
    ): {
      walletResult: WalletOperationResult;
      rewardDetails: TaskRewardResult;
    } {
      const rewardDetails = calculateTaskRewardDetailed(context);
      
      if (rewardDetails.finalReward === 0) {
        return {
          walletResult: {
            success: true,
            newBalance: wallet.btcBalance,
          },
          rewardDetails,
        };
      }
      
      const walletResult = creditBtc(
        wallet,
        rewardDetails.finalReward,
        'task_reward',
        {
          taskCategory: context.taskCategory,
          breakdown: rewardDetails.breakdown,
        }
      );
      
      return { walletResult, rewardDetails };
    }
    ```

TAREA-09.2.4:
  Nombre: "Crear Server Action creditTaskReward"
  Acción: "Crear /src/actions/economy/credit-task-reward.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el Server Action que:
    1. Valida autenticación
    2. Obtiene wallet y avatar_state del usuario
    3. Calcula recompensa con calculateTaskRewardDetailed
    4. Ejecuta transacción en DB (update wallet + insert transaction)
    5. Retorna resultado con desglose
    
    Usa transacción de Postgres para atomicidad.
    Schema de input: { taskId: string, taskCategory: TaskCategory }

TAREA-09.2.5:
  Nombre: "Implementar cálculo de todayEarnings"
  Acción: "Función para obtener BTC ganados hoy"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Calcula el total de BTC ganados hoy por el usuario
     * Se usa para aplicar el daily cap
     */
    export async function getTodayEarnings(
      supabase: SupabaseClient,
      userId: string
    ): Promise<number> {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const { data, error } = await supabase
        .from('transactions')
        .select('amount')
        .eq('user_id', userId)
        .gt('amount', 0) // Solo ingresos
        .gte('created_at', today.toISOString());
      
      if (error || !data) return 0;
      
      return data.reduce((sum, tx) => sum + tx.amount, 0);
    }
    ```

TAREA-09.2.6:
  Nombre: "Implementar bono por subida de nivel"
  Acción: "Función para calcular y aplicar bono de level up"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Calcula el bono por subir de nivel
     * Fuente: cuestionario1 - "Subir de Nivel: 2,000 BTC"
     */
    export function calculateLevelUpBonus(newLevel: number): number {
      // Bono fijo de 2000 BTC por cada nivel que sube
      return 2000;
    }
    
    /**
     * Aplica bono de level up al wallet
     */
    export function applyLevelUpBonus(
      wallet: WalletState,
      oldLevel: number,
      newLevel: number
    ): WalletOperationResult {
      if (newLevel <= oldLevel) {
        return {
          success: true,
          newBalance: wallet.btcBalance,
        };
      }
      
      const bonus = calculateLevelUpBonus(newLevel);
      
      return creditBtc(wallet, bonus, 'level_up_bonus', {
        oldLevel,
        newLevel,
      });
    }
    ```

SUBCAJA 09.3: Store Catalog System
Sistema de Catálogo de Tienda
Archivos a Crear
CopyRutas:
├── /src/lib/store/types.ts                 # Tipos de tienda
├── /src/lib/store/constants.ts             # Catálogo de items
├── /src/lib/store/catalog.ts               # Lógica de catálogo
├── /src/actions/store/get-items.ts         # Server Action: obtener items
└── /src/actions/store/get-item-detail.ts   # Server Action: detalle de item

Tiempo Estimado: 45-60 minutos
Estructura de Tipos
typescriptCopy// /src/lib/store/types.ts

/**
 * Categorías de items en la tienda
 * Fuente: cuestionario1 - Sección 10
 */
export type ItemCategory = 
  | 'armor'         // Armadura (Ropa)
  | 'accessories'   // Relojes, Cadenas, Lentes
  | 'vehicles'      // Vehículos
  | 'properties'    // Propiedades (afecta env_lvl)
  | 'companions'    // Compañeras
  | 'pets'          // Mascotas
  | 'powerups';     // Power-ups (Medkit, Escudo de Racha)

/**
 * Rareza de items
 */
export type ItemRarity = 'common' | 'rare' | 'epic' | 'legendary';

/**
 * Requisito de vector para comprar item
 */
export interface VectorRequirement {
  vector: 'aura_lvl' | 'face_lvl' | 'wealth_lvl' | 'muscle_lvl' | 'fat_lvl' | 'env_lvl';
  operator: '<' | '<=' | '>' | '>=' | '==';
  value: number;
}

/**
 * Definición de un item de tienda
 */
export interface StoreItem {
  id: string;
  name: string;
  description: string;
  category: ItemCategory;
  rarity: ItemRarity;
  priceBtc: number;
  levelRequired: number;
  vectorRequirements: VectorRequirement[];  // Gating adicional
  promptTokens: string;                      // Tokens para IA
  previewImageUrl: string | null;
  isActive: boolean;
  maxQuantity: number;                       // 1 = único, -1 = ilimitado
  createdAt: Date;
}

/**
 * Item en el catálogo con estado de disponibilidad para el usuario
 */
export interface CatalogItem extends StoreItem {
  canPurchase: boolean;
  purchaseBlockedReason: PurchaseBlockedReason | null;
  isOwned: boolean;
  isEquipped: boolean;
}

/**
 * Razones por las que no se puede comprar
 */
export type PurchaseBlockedReason = 
  | 'INSUFFICIENT_FUNDS'
  | 'LEVEL_TOO_LOW'
  | 'VECTOR_REQUIREMENT_NOT_MET'
  | 'ALREADY_OWNED'
  | 'MAX_QUANTITY_REACHED'
  | 'ITEM_NOT_ACTIVE';
Catálogo de Items (del cuestionario1)
typescriptCopy// /src/lib/store/constants.ts

import type { StoreItem, ItemCategory } from './types';

/**
 * Catálogo completo de items
 * Fuente: cuestionario1 - Sección 10.2
 */
export const STORE_CATALOG: StoreItem[] = [
  // ═══════════════════════════════════════════════════════════════
  // ARMADURA (ROPA)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'armor_clean_tee',
    name: 'Camiseta Limpia',
    description: 'Una camiseta blanca básica pero limpia.',
    category: 'armor',
    rarity: 'common',
    priceBtc: 500,
    levelRequired: 2,
    vectorRequirements: [],
    promptTokens: 'wearing a clean white t-shirt',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'armor_black_compression',
    name: 'Playera Compresión Negra',
    description: 'Resalta tu físico.',
    category: 'armor',
    rarity: 'common',
    priceBtc: 1000,
    levelRequired: 3,
    vectorRequirements: [],
    promptTokens: 'wearing a tight black compression shirt showing muscles',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'armor_grey_suit',
    name: 'Traje Gris Slim Fit',
    description: 'Para el oficinista que quiere destacar.',
    category: 'armor',
    rarity: 'rare',
    priceBtc: 10000,
    levelRequired: 6,
    vectorRequirements: [],
    promptTokens: 'wearing a tailored grey slim fit suit',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'armor_italian_black',
    name: 'Traje Italiano Negro',
    description: 'Elegancia absoluta.',
    category: 'armor',
    rarity: 'epic',
    priceBtc: 25000,
    levelRequired: 8,
    vectorRequirements: [],
    promptTokens: 'wearing an expensive Italian black suit, perfectly tailored',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'armor_tuxedo',
    name: 'Esmoquin 007',
    description: 'Para los eventos de élite.',
    category: 'armor',
    rarity: 'legendary',
    priceBtc: 50000,
    levelRequired: 9,
    vectorRequirements: [],
    promptTokens: 'wearing a James Bond style tuxedo with bow tie',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },

  // ═══════════════════════════════════════════════════════════════
  // ACCESORIOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'acc_casio_watch',
    name: 'Reloj Digital Casio',
    description: 'Clásico y funcional.',
    category: 'accessories',
    rarity: 'common',
    priceBtc: 800,
    levelRequired: 3,
    vectorRequirements: [],
    promptTokens: 'wearing a classic digital Casio watch',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'acc_silver_chain',
    name: 'Cadena de Plata',
    description: 'Discreta pero con estilo.',
    category: 'accessories',
    rarity: 'rare',
    priceBtc: 2000,
    levelRequired: 4,
    vectorRequirements: [
      { vector: 'fat_lvl', operator: '<', value: 8 }, // Requiere fat bajo
    ],
    promptTokens: 'wearing a thin silver chain necklace',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'acc_silver_diver',
    name: 'Reloj Silver Diver',
    description: 'Para el hombre activo.',
    category: 'accessories',
    rarity: 'rare',
    priceBtc: 5000,
    levelRequired: 5,
    vectorRequirements: [],
    promptTokens: 'wearing a silver diver watch with metallic bracelet',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'acc_gold_cuban',
    name: 'Cadena Cuban Link Oro',
    description: 'El estándar del éxito.',
    category: 'accessories',
    rarity: 'epic',
    priceBtc: 15000,
    levelRequired: 7,
    vectorRequirements: [
      { vector: 'fat_lvl', operator: '<', value: 5 },
    ],
    promptTokens: 'wearing a thick gold Cuban link chain',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'acc_gold_royal',
    name: 'Reloj Gold Royal',
    description: 'Para los que ya llegaron.',
    category: 'accessories',
    rarity: 'epic',
    priceBtc: 20000,
    levelRequired: 8,
    vectorRequirements: [],
    promptTokens: 'wearing a prestigious gold Royal watch',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'acc_tourbillon',
    name: 'Tourbillon Skeleton',
    description: 'La cúspide de la relojería.',
    category: 'accessories',
    rarity: 'legendary',
    priceBtc: 80000,
    levelRequired: 10,
    vectorRequirements: [],
    promptTokens: 'wearing an ultra-luxury Tourbillon skeleton watch',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'acc_aviator',
    name: 'Lentes Aviator',
    description: 'Clásicos y atemporales.',
    category: 'accessories',
    rarity: 'common',
    priceBtc: 3000,
    levelRequired: 4,
    vectorRequirements: [],
    promptTokens: 'wearing classic aviator sunglasses',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },

  // ═══════════════════════════════════════════════════════════════
  // VEHÍCULOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'vehicle_chevy_tuned',
    name: 'Chevy Tuneado',
    description: 'El orgullo del barrio.',
    category: 'vehicles',
    rarity: 'common',
    priceBtc: 5000,
    levelRequired: 4,
    vectorRequirements: [],
    promptTokens: 'standing next to a tuned Chevy lowrider car',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'vehicle_sedan',
    name: 'Sedán Ejecutivo',
    description: 'Profesional y confiable.',
    category: 'vehicles',
    rarity: 'rare',
    priceBtc: 15000,
    levelRequired: 6,
    vectorRequirements: [],
    promptTokens: 'standing next to a black executive sedan',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'vehicle_sports',
    name: 'Deportivo Rojo',
    description: 'Velocidad y estilo.',
    category: 'vehicles',
    rarity: 'epic',
    priceBtc: 40000,
    levelRequired: 8,
    vectorRequirements: [],
    promptTokens: 'standing next to a red sports car',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'vehicle_lambo',
    name: 'Lamborghini',
    description: 'El sueño de todo hombre.',
    category: 'vehicles',
    rarity: 'legendary',
    priceBtc: 100000,
    levelRequired: 9,
    vectorRequirements: [],
    promptTokens: 'standing next to a green Lamborghini Huracán supercar',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'vehicle_jet',
    name: 'Jet Privado METAMEN',
    description: 'El cielo es el límite.',
    category: 'vehicles',
    rarity: 'legendary',
    priceBtc: 150000,
    levelRequired: 10,
    vectorRequirements: [],
    promptTokens: 'standing in front of a private jet with METAMEN logo',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },

  // ═══════════════════════════════════════════════════════════════
  // PROPIEDADES (Afectan ENV_LVL visual)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'prop_loft',
    name: 'Loft Industrial',
    description: 'Minimalismo urbano.',
    category: 'properties',
    rarity: 'rare',
    priceBtc: 15000,
    levelRequired: 6,
    vectorRequirements: [],
    promptTokens: 'inside an industrial loft apartment with exposed brick',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'prop_penthouse',
    name: 'Penthouse NY',
    description: 'La vista desde arriba.',
    category: 'properties',
    rarity: 'epic',
    priceBtc: 40000,
    levelRequired: 8,
    vectorRequirements: [],
    promptTokens: 'inside a luxury New York penthouse with city view',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'prop_bunker',
    name: 'Búnker Táctico',
    description: 'Tu centro de operaciones.',
    category: 'properties',
    rarity: 'epic',
    priceBtc: 60000,
    levelRequired: 9,
    vectorRequirements: [],
    promptTokens: 'inside a high-tech tactical bunker with screens and equipment',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },
  {
    id: 'prop_island',
    name: 'Isla Privada',
    description: 'Tu propio paraíso.',
    category: 'properties',
    rarity: 'legendary',
    priceBtc: 150000,
    levelRequired: 10,
    vectorRequirements: [],
    promptTokens: 'on a private tropical island with mansion in background',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: 1,
    createdAt: new Date(),
  },

  // ═══════════════════════════════════════════════════════════════
  // POWER-UPS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'powerup_medkit',
    name: 'Medkit',
    description: 'Recupera 1 corazón. Máximo 1 por semana.',
    category: 'powerups',
    rarity: 'rare',
    priceBtc: 5000,
    levelRequired: 1,
    vectorRequirements: [],
    promptTokens: '', // No afecta imagen
    previewImageUrl: null,
    isActive: true,
    maxQuantity: -1, // Consumible ilimitado (pero con cooldown)
    createdAt: new Date(),
  },
  {
    id: 'powerup_shield',
    name: 'Escudo de Racha',
    description: 'Protege tu racha por 1 día de fallo.',
    category: 'powerups',
    rarity: 'rare',
    priceBtc: 3000,
    levelRequired: 1,
    vectorRequirements: [],
    promptTokens: '',
    previewImageUrl: null,
    isActive: true,
    maxQuantity: -1,
    createdAt: new Date(),
  },
];

/**
 * Obtener items por categoría
 */
export function getItemsByCategory(category: ItemCategory): StoreItem[] {
  return STORE_CATALOG.filter(item => item.category === category && item.isActive);
}

/**
 * Obtener item por ID
 */
export function getItemById(itemId: string): StoreItem | undefined {
  return STORE_CATALOG.find(item => item.id === itemId);
}
Tareas Atómicas para 09.3
yamlCopyTAREA-09.3.1:
  Nombre: "Crear estructura de archivos de tienda"
  Acción: "Crear carpeta /src/lib/store con archivos base"
  Responsable: Antigravity
  Comando: |
    mkdir -p src/lib/store
    mkdir -p src/actions/store
    touch src/lib/store/{index.ts,types.ts,constants.ts,catalog.ts}
    touch src/actions/store/{get-items.ts,get-item-detail.ts}

TAREA-09.3.2:
  Nombre: "Definir tipos de tienda"
  Acción: "Crear /src/lib/store/types.ts"
  Responsable: Antigravity
  Input: "Estructura de tipos definida arriba"

TAREA-09.3.3:
  Nombre: "Crear catálogo de items"
  Acción: "Crear /src/lib/store/constants.ts con catálogo completo"
  Responsable: Antigravity
  Input: "Catálogo definido arriba (expandir a 50+ items)"
  Prompt para Antigravity: |
    Crea el catálogo completo de items basándote en la estructura proporcionada.
    Incluye al menos:
    - 10 items de Armadura (ropa por nivel)
    - 10 items de Accesorios (relojes, cadenas, lentes)
    - 6 items de Vehículos
    - 5 items de Propiedades
    - 5 items de Compañeras (con gating de fat_lvl)
    - 5 items de Mascotas
    - 4 items de Power-ups

TAREA-09.3.4:
  Nombre: "Implementar función getItemsByCategory"
  Acción: "Filtrar items por categoría"
  Responsable: Antigravity
  Test: |
    const armor = getItemsByCategory('armor');
    expect(armor.length).toBeGreaterThan(0);
    expect(armor.every(i => i.category === 'armor')).toBe(true);

TAREA-09.3.5:
  Nombre: "Implementar función getItemById"
  Acción: "Obtener item por ID"
  Responsable: Antigravity
  Test: |
    const item = getItemById('armor_clean_tee');
    expect(item).toBeDefined();
    expect(item?.name).toBe('Camiseta Limpia');

TAREA-09.3.6:
  Nombre: "Implementar función getItemsForLevel"
  Acción: "Obtener items disponibles para un nivel específico"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Obtiene items que el usuario PUEDE ver según su nivel
     * (aunque no necesariamente pueda comprar)
     */
    export function getItemsForLevel(
      userLevel: number,
      showUpToNextLevel: boolean = true
    ): StoreItem[] {
      const maxLevel = showUpToNextLevel ? userLevel + 1 : userLevel;
      return STORE_CATALOG.filter(
        item => item.isActive && item.levelRequired <= maxLevel
      );
    }
    ```

TAREA-09.3.7:
  Nombre: "Crear Server Action getStoreItems"
  Acción: "Crear /src/actions/store/get-items.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el Server Action que:
    1. Acepta parámetros opcionales: category, minLevel, maxLevel
    2. Obtiene los items del catálogo filtrados
    3. Para cada item, verifica si el usuario actual puede comprarlo
    4. Retorna CatalogItem[] con canPurchase y purchaseBlockedReason
    
    Schema de input: { category?: ItemCategory, page?: number, limit?: number }

TAREA-09.3.8:
  Nombre: "Crear Server Action getItemDetail"
  Acción: "Crear /src/actions/store/get-item-detail.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el Server Action que:
    1. Recibe itemId
    2. Obtiene el item del catálogo
    3. Obtiene el estado del usuario (nivel, vectores, wallet, inventario)
    4. Calcula canPurchase con razón detallada si no puede
    5. Retorna CatalogItem completo

SUBCAJA 09.4: Inventory Management
Gestión de Inventario
Archivos a Crear
CopyRutas:
├── /src/lib/inventory/types.ts             # Tipos de inventario
├── /src/lib/inventory/inventory.ts         # Lógica de inventario
├── /src/actions/inventory/get-inventory.ts # Server Action
├── /src/actions/inventory/equip-item.ts    # Server Action
└── /src/actions/inventory/unequip-item.ts  # Server Action

Tiempo Estimado: 30-45 minutos
Estructura de Tipos
typescriptCopy// /src/lib/inventory/types.ts

import type { StoreItem, ItemCategory } from '@/lib/store/types';

/**
 * Item en el inventario del usuario
 */
export interface InventoryItem {
  id: string;                // ID del registro de inventario
  userId: string;
  itemId: string;            // ID del item en catálogo
  equipped: boolean;
  purchasedAt: Date;
  unlockedLevel: number;     // Nivel al que se compró (para bloqueo tras muerte)
}

/**
 * Item de inventario con datos completos del item
 */
export interface InventoryItemWithDetails extends InventoryItem {
  item: StoreItem;
  isLocked: boolean;         // Bloqueado por nivel actual < nivel requerido
  lockReason: string | null;
}

/**
 * Estado del inventario del usuario
 */
export interface InventoryState {
  items: InventoryItemWithDetails[];
  equippedByCategory: Record<ItemCategory, InventoryItemWithDetails | null>;
  totalItems: number;
  totalEquipped: number;
}

/**
 * Resultado de operación de inventario
 */
export interface InventoryOperationResult {
  success: boolean;
  inventory?: InventoryState;
  error?: InventoryError;
}

export type InventoryError = 
  | 'ITEM_NOT_IN_INVENTORY'
  | 'ITEM_LOCKED'
  | 'ITEM_ALREADY_EQUIPPED'
  | 'ITEM_NOT_EQUIPPED'
  | 'CATEGORY_CONFLICT';
Tareas Atómicas para 09.4
yamlCopyTAREA-09.4.1:
  Nombre: "Crear estructura de archivos de inventario"
  Acción: "Crear carpeta /src/lib/inventory con archivos"
  Responsable: Antigravity
  Comando: |
    mkdir -p src/lib/inventory
    mkdir -p src/actions/inventory
    touch src/lib/inventory/{index.ts,types.ts,inventory.ts}
    touch src/actions/inventory/{get-inventory.ts,equip-item.ts,unequip-item.ts}

TAREA-09.4.2:
  Nombre: "Definir tipos de inventario"
  Acción: "Crear /src/lib/inventory/types.ts"
  Responsable: Antigravity

TAREA-09.4.3:
  Nombre: "Implementar función checkItemLocked"
  Acción: "Verificar si un item está bloqueado por nivel"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Verifica si un item está bloqueado después de una muerte
     * Un item se bloquea si el nivel actual del usuario es menor
     * al nivel requerido del item
     */
    export function checkItemLocked(
      item: StoreItem,
      currentUserLevel: number
    ): { isLocked: boolean; lockReason: string | null } {
      if (currentUserLevel >= item.levelRequired) {
        return { isLocked: false, lockReason: null };
      }
      
      return {
        isLocked: true,
        lockReason: `Requiere nivel ${item.levelRequired}. Tu nivel actual: ${currentUserLevel}`,
      };
    }
    ```

TAREA-09.4.4:
  Nombre: "Implementar función getEquippedItems"
  Acción: "Obtener items equipados por categoría"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Obtiene el mapa de items equipados por categoría
     */
    export function getEquippedByCategory(
      inventoryItems: InventoryItemWithDetails[]
    ): Record<ItemCategory, InventoryItemWithDetails | null> {
      const equipped: Record<ItemCategory, InventoryItemWithDetails | null> = {
        armor: null,
        accessories: null,
        vehicles: null,
        properties: null,
        companions: null,
        pets: null,
        powerups: null,
      };
      
      for (const invItem of inventoryItems) {
        if (invItem.equipped && !invItem.isLocked) {
          equipped[invItem.item.category] = invItem;
        }
      }
      
      return equipped;
    }
    ```

TAREA-09.4.5:
  Nombre: "Implementar función canEquipItem"
  Acción: "Verificar si se puede equipar un item"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Verifica si un item puede ser equipado
     */
    export function canEquipItem(
      inventoryItem: InventoryItemWithDetails,
      currentEquipped: Record<ItemCategory, InventoryItemWithDetails | null>
    ): { canEquip: boolean; reason: InventoryError | null } {
      // Verificar si está bloqueado
      if (inventoryItem.isLocked) {
        return { canEquip: false, reason: 'ITEM_LOCKED' };
      }
      
      // Verificar si ya está equipado
      if (inventoryItem.equipped) {
        return { canEquip: false, reason: 'ITEM_ALREADY_EQUIPPED' };
      }
      
      // Power-ups no se equipan, se usan
      if (inventoryItem.item.category === 'powerups') {
        return { canEquip: false, reason: 'CATEGORY_CONFLICT' };
      }
      
      return { canEquip: true, reason: null };
    }
    ```

TAREA-09.4.6:
  Nombre: "Crear Server Action getInventory"
  Acción: "Crear /src/actions/inventory/get-inventory.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el Server Action que:
    1. Obtiene el usuario autenticado
    2. Obtiene todos los items en su inventario (tabla inventory)
    3. Para cada item, obtiene los datos del catálogo
    4. Calcula si está bloqueado basado en nivel actual
    5. Construye InventoryState completo
    6. Retorna el inventario con items equipados por categoría

TAREA-09.4.7:
  Nombre: "Crear Server Action equipItem"
  Acción: "Crear /src/actions/inventory/equip-item.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el Server Action que:
    1. Valida que el item esté en inventario del usuario
    2. Valida que no esté bloqueado
    3. Desequipa cualquier otro item de la misma categoría
    4. Equipa el item solicitado
    5. Actualiza la DB en transacción
    6. Retorna nuevo InventoryState
    
    Schema de input: { inventoryItemId: string }

TAREA-09.4.8:
  Nombre: "Crear Server Action unequipItem"
  Acción: "Crear /src/actions/inventory/unequip-item.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el Server Action que:
    1. Valida que el item esté equipado
    2. Desequipa el item
    3. Actualiza la DB
    4. Retorna nuevo InventoryState

SUBCAJA 09.5: Gating Requirements
Sistema de Requisitos y Restricciones
Archivos a Crear
CopyRutas:
├── /src/lib/store/gating.ts                # Lógica de gating
└── /src/lib/store/validators.ts            # Validadores de compra

Tiempo Estimado: 30-45 minutos
Estructura del Sistema de Gating
typescriptCopy// /src/lib/store/gating.ts

import type { StoreItem, VectorRequirement, PurchaseBlockedReason } from './types';
import type { AvatarState } from '@/types/avatar';
import type { WalletState } from '@/lib/core/economy/types';

/**
 * Contexto completo del usuario para validar compra
 */
export interface PurchaseContext {
  item: StoreItem;
  wallet: WalletState;
  avatarState: AvatarState;
  ownedItemIds: string[];
  purchaseCooldowns: Record<string, Date>; // Para power-ups con cooldown
}

/**
 * Resultado de validación de compra
 */
export interface PurchaseValidationResult {
  canPurchase: boolean;
  reasons: PurchaseBlockedReason[];
  details: {
    hasFunds: boolean;
    meetsLevel: boolean;
    meetsVectorRequirements: boolean;
    notAlreadyOwned: boolean;
    withinQuantityLimit: boolean;
    notOnCooldown: boolean;
  };
}
Tareas Atómicas para 09.5
yamlCopyTAREA-09.5.1:
  Nombre: "Crear archivo gating.ts"
  Acción: "Crear /src/lib/store/gating.ts"
  Responsable: Antigravity

TAREA-09.5.2:
  Nombre: "Implementar función checkFunds"
  Acción: "Verificar si el usuario tiene suficientes BTC"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Verifica si el usuario tiene fondos suficientes
     */
    export function checkFunds(
      wallet: WalletState,
      priceBtc: number
    ): boolean {
      return wallet.btcBalance >= priceBtc;
    }
    ```

TAREA-09.5.3:
  Nombre: "Implementar función checkLevelRequirement"
  Acción: "Verificar requisito de nivel"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Verifica si el usuario cumple el nivel requerido
     */
    export function checkLevelRequirement(
      userLevel: number,
      requiredLevel: number
    ): boolean {
      return userLevel >= requiredLevel;
    }
    ```

TAREA-09.5.4:
  Nombre: "Implementar función checkVectorRequirement"
  Acción: "Verificar un requisito de vector individual"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Verifica un requisito de vector específico
     * Ej: { vector: 'fat_lvl', operator: '<', value: 5 }
     */
    export function checkVectorRequirement(
      avatarState: AvatarState,
      requirement: VectorRequirement
    ): boolean {
      const vectorValue = avatarState[requirement.vector];
      
      switch (requirement.operator) {
        case '<':
          return vectorValue < requirement.value;
        case '<=':
          return vectorValue <= requirement.value;
        case '>':
          return vectorValue > requirement.value;
        case '>=':
          return vectorValue >= requirement.value;
        case '==':
          return vectorValue === requirement.value;
        default:
          return false;
      }
    }
    ```
  Test: |
    const state = { fat_lvl: 6, muscle_lvl: 8 } as AvatarState;
    
    // fat_lvl < 8 → true (6 < 8)
    expect(checkVectorRequirement(state, { vector: 'fat_lvl', operator: '<', value: 8 })).toBe(true);
    
    // fat_lvl < 5 → false (6 < 5)
    expect(checkVectorRequirement(state, { vector: 'fat_lvl', operator: '<', value: 5 })).toBe(false);

TAREA-09.5.5:
  Nombre: "Implementar función checkAllVectorRequirements"
  Acción: "Verificar todos los requisitos de vector de un item"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Verifica todos los requisitos de vector de un item
     */
    export function checkAllVectorRequirements(
      avatarState: AvatarState,
      requirements: VectorRequirement[]
    ): { passed: boolean; failedRequirements: VectorRequirement[] } {
      const failed: VectorRequirement[] = [];
      
      for (const req of requirements) {
        if (!checkVectorRequirement(avatarState, req)) {
          failed.push(req);
        }
      }
      
      return {
        passed: failed.length === 0,
        failedRequirements: failed,
      };
    }
    ```

TAREA-09.5.6:
  Nombre: "Implementar función checkOwnership"
  Acción: "Verificar si el usuario ya posee el item"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Verifica si el usuario ya posee el item
     */
    export function checkOwnership(
      ownedItemIds: string[],
      itemId: string,
      maxQuantity: number
    ): { alreadyOwned: boolean; currentQuantity: number } {
      const currentQuantity = ownedItemIds.filter(id => id === itemId).length;
      
      // maxQuantity -1 significa ilimitado
      const alreadyOwned = maxQuantity !== -1 && currentQuantity >= maxQuantity;
      
      return { alreadyOwned, currentQuantity };
    }
    ```

TAREA-09.5.7:
  Nombre: "Implementar función validatePurchase"
  Acción: "Validación completa de compra"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Realiza validación completa de si el usuario puede comprar un item
     */
    export function validatePurchase(
      context: PurchaseContext
    ): PurchaseValidationResult {
      const { item, wallet, avatarState, ownedItemIds } = context;
      const reasons: PurchaseBlockedReason[] = [];
      
      // 1. Check funds
      const hasFunds = checkFunds(wallet, item.priceBtc);
      if (!hasFunds) reasons.push('INSUFFICIENT_FUNDS');
      
      // 2. Check level
      const meetsLevel = checkLevelRequirement(avatarState.current_level, item.levelRequired);
      if (!meetsLevel) reasons.push('LEVEL_TOO_LOW');
      
      // 3. Check vector requirements
      const vectorCheck = checkAllVectorRequirements(avatarState, item.vectorRequirements);
      const meetsVectorRequirements = vectorCheck.passed;
      if (!meetsVectorRequirements) reasons.push('VECTOR_REQUIREMENT_NOT_MET');
      
      // 4. Check ownership
      const ownershipCheck = checkOwnership(ownedItemIds, item.id, item.maxQuantity);
      const notAlreadyOwned = !ownershipCheck.alreadyOwned;
      if (!notAlreadyOwned) {
        reasons.push(item.maxQuantity === 1 ? 'ALREADY_OWNED' : 'MAX_QUANTITY_REACHED');
      }
      
      // 5. Check if item is active
      if (!item.isActive) reasons.push('ITEM_NOT_ACTIVE');
      
      return {
        canPurchase: reasons.length === 0,
        reasons,
        details: {
          hasFunds,
          meetsLevel,
          meetsVectorRequirements,
          notAlreadyOwned,
          withinQuantityLimit: notAlreadyOwned,
          notOnCooldown: true, // TODO: Implementar para power-ups
        },
      };
    }
    ```

TAREA-09.5.8:
  Nombre: "Implementar función getGatingMessage"
  Acción: "Generar mensaje human-readable de por qué no puede comprar"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Genera mensaje descriptivo de por qué no se puede comprar
     */
    export function getGatingMessage(
      reason: PurchaseBlockedReason,
      item: StoreItem,
      context: Partial<PurchaseContext>
    ): string {
      switch (reason) {
        case 'INSUFFICIENT_FUNDS':
          return `Necesitas ${item.priceBtc} BTC. Tienes ${context.wallet?.btcBalance ?? 0} BTC.`;
        
        case 'LEVEL_TOO_LOW':
          return `Requiere nivel ${item.levelRequired}. Tu nivel: ${context.avatarState?.current_level ?? 1}.`;
        
        case 'VECTOR_REQUIREMENT_NOT_MET':
          const reqs = item.vectorRequirements.map(r => 
            `${r.vector} ${r.operator} ${r.value}`
          ).join(', ');
          return `No cumples los requisitos: ${reqs}`;
        
        case 'ALREADY_OWNED':
          return 'Ya posees este item.';
        
        case 'MAX_QUANTITY_REACHED':
          return `Máximo ${item.maxQuantity} permitido.`;
        
        case 'ITEM_NOT_ACTIVE':
          return 'Este item no está disponible actualmente.';
        
        default:
          return 'No puedes comprar este item.';
      }
    }
    ```

SUBCAJA 09.6: Purchase Transactions
Transacciones de Compra
Archivos a Crear
CopyRutas:
├── /src/actions/store/purchase-item.ts     # Server Action principal
├── /src/lib/store/purchase.ts              # Lógica de compra
└── /supabase/migrations/XXX_purchase_function.sql  # Función de DB

Tiempo Estimado: 45-60 minutos
Tareas Atómicas para 09.6
yamlCopyTAREA-09.6.1:
  Nombre: "Crear función de Postgres para compra atómica"
  Acción: "Crear migración con función fn_purchase_item"
  Responsable: Antigravity
  SQL:
    ```sql
    -- /supabase/migrations/XXXXXX_purchase_function.sql
    
    CREATE OR REPLACE FUNCTION fn_purchase_item(
      p_user_id UUID,
      p_item_id TEXT,
      p_item_price INTEGER,
      p_item_category TEXT
    )
    RETURNS JSONB AS $$
    DECLARE
      v_wallet RECORD;
      v_existing_count INTEGER;
      v_inventory_id UUID;
      v_result JSONB;
    BEGIN
      -- 1. Lock wallet row to prevent race conditions
      SELECT * INTO v_wallet
      FROM wallets
      WHERE user_id = p_user_id
      FOR UPDATE;
      
      IF NOT FOUND THEN
        RAISE EXCEPTION 'Wallet not found';
      END IF;
      
      -- 2. Verify sufficient funds
      IF v_wallet.btc_balance < p_item_price THEN
        RAISE EXCEPTION 'Insufficient funds: have %, need %', 
          v_wallet.btc_balance, p_item_price;
      END IF;
      
      -- 3. Check if already owned (for unique items)
      SELECT COUNT(*) INTO v_existing_count
      FROM inventory
      WHERE user_id = p_user_id AND item_id = p_item_id;
      
      -- Note: maxQuantity check should be done in application layer
      -- since we don't have item metadata in DB
      
      -- 4. Deduct from wallet
      UPDATE wallets
      SET 
        btc_balance = btc_balance - p_item_price,
        total_spent = total_spent + p_item_price,
        updated_at = NOW()
      WHERE user_id = p_user_id;
      
      -- 5. Add to inventory
      INSERT INTO inventory (user_id, item_id, equipped, purchased_at)
      VALUES (p_user_id, p_item_id, false, NOW())
      RETURNING id INTO v_inventory_id;
      
      -- 6. Record transaction
      INSERT INTO transactions (
        user_id, type, amount, balance_before, balance_after, metadata, created_at
      ) VALUES (
        p_user_id,
        'purchase',
        -p_item_price,
        v_wallet.btc_balance,
        v_wallet.btc_balance - p_item_price,
        jsonb_build_object('item_id', p_item_id, 'category', p_item_category),
        NOW()
      );
      
      -- 7. Log activity
      INSERT INTO activity_logs (user_id, action, details, created_at)
      VALUES (
        p_user_id,
        'item_purchased',
        jsonb_build_object(
          'item_id', p_item_id,
          'price', p_item_price,
          'category', p_item_category
        ),
        NOW()
      );
      
      -- 8. Build result
      v_result := jsonb_build_object(
        'success', true,
        'inventory_id', v_inventory_id,
        'new_balance', v_wallet.btc_balance - p_item_price,
        'item_id', p_item_id
      );
      
      RETURN v_result;
      
    EXCEPTION
      WHEN OTHERS THEN
        RAISE;
    END;
    $$ LANGUAGE plpgsql;
    ```

TAREA-09.6.2:
  Nombre: "Crear Server Action purchaseItem"
  Acción: "Crear /src/actions/store/purchase-item.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el Server Action que:
    1. Valida autenticación
    2. Obtiene el item del catálogo
    3. Obtiene el contexto del usuario (wallet, avatar, inventory)
    4. Ejecuta validatePurchase para verificar todos los requisitos
    5. Si pasa validación, llama a fn_purchase_item
    6. Retorna resultado con nuevo balance e inventory_id
    
    Schema de input con Zod:
    ```typescript
    const PurchaseItemSchema = z.object({
      itemId: z.string().min(1),
      idempotencyKey: z.string().uuid(),
    });
    ```
    
    Debe usar idempotency para evitar compras duplicadas.

TAREA-09.6.3:
  Nombre: "Implementar idempotencia en compras"
  Acción: "Verificar idempotency key antes de procesar"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Verifica si la compra ya fue procesada (idempotencia)
     */
    async function checkIdempotency(
      supabase: SupabaseClient,
      userId: string,
      idempotencyKey: string
    ): Promise<{ alreadyProcessed: boolean; previousResult?: unknown }> {
      const { data } = await supabase
        .from('idempotency_keys')
        .select('result')
        .eq('key', idempotencyKey)
        .eq('user_id', userId)
        .single();
      
      if (data) {
        return { alreadyProcessed: true, previousResult: data.result };
      }
      
      return { alreadyProcessed: false };
    }
    
    /**
     * Guarda resultado de compra para idempotencia
     */
    async function saveIdempotencyResult(
      supabase: SupabaseClient,
      userId: string,
      idempotencyKey: string,
      result: unknown
    ): Promise<void> {
      await supabase
        .from('idempotency_keys')
        .insert({
          key: idempotencyKey,
          user_id: userId,
          action: 'purchase_item',
          result,
          expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24h
        });
    }
    ```

TAREA-09.6.4:
  Nombre: "Implementar auto-equip opcional"
  Acción: "Opción para equipar item automáticamente tras compra"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Añade parámetro opcional autoEquip al purchaseItem.
    Si autoEquip = true y el item no es powerup:
    1. Desequipa cualquier item de la misma categoría
    2. Equipa el item recién comprado
    
    Esto debe ser parte de la transacción.

TAREA-09.6.5:
  Nombre: "Implementar webhook de compra (para analytics)"
  Acción: "Emitir evento de compra para tracking"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Emite evento de compra para analytics
     */
    async function emitPurchaseEvent(
      userId: string,
      itemId: string,
      itemCategory: string,
      priceBtc: number
    ): Promise<void> {
      // PostHog tracking
      if (typeof window !== 'undefined' && window.posthog) {
        window.posthog.capture('item_purchased', {
          item_id: itemId,
          category: itemCategory,
          price_btc: priceBtc,
        });
      }
      
      // También se puede enviar a un endpoint de analytics server-side
    }
    ```

SUBCAJA 09.7: Balance & Anti-Exploit
Balance Económico y Anti-Explotación
Archivos a Crear
CopyRutas:
├── /src/lib/core/economy/anti-exploit.ts   # Reglas anti-exploit
└── /src/lib/core/economy/balance.ts        # Verificaciones de balance

Tiempo Estimado: 30-45 minutos
Tareas Atómicas para 09.7
yamlCopyTAREA-09.7.1:
  Nombre: "Implementar daily cap enforcement"
  Acción: "Asegurar que no se exceda el límite diario"
  Responsable: Antigravity
  Código:
    ```typescript
    // /src/lib/core/economy/anti-exploit.ts
    
    import { ECONOMY_LIMITS } from './constants';
    
    /**
     * Calcula cuántos BTC puede ganar el usuario hoy
     */
    export function calculateRemainingDailyCap(
      todayEarnings: number
    ): number {
      return Math.max(0, ECONOMY_LIMITS.maxDailyEarnings - todayEarnings);
    }
    
    /**
     * Aplica el daily cap a una recompensa
     */
    export function applyDailyCap(
      intendedReward: number,
      todayEarnings: number
    ): { finalReward: number; wasCapped: boolean; excessAmount: number } {
      const remaining = calculateRemainingDailyCap(todayEarnings);
      
      if (intendedReward <= remaining) {
        return {
          finalReward: intendedReward,
          wasCapped: false,
          excessAmount: 0,
        };
      }
      
      return {
        finalReward: remaining,
        wasCapped: true,
        excessAmount: intendedReward - remaining,
      };
    }
    ```

TAREA-09.7.2:
  Nombre: "Implementar cooldown de tareas"
  Acción: "Evitar que se complete la misma tarea múltiples veces"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Cooldowns mínimos entre completar la misma categoría de tarea
     * En segundos
     */
    export const TASK_COOLDOWNS: Record<string, number> = {
      meditation: 60 * 60,      // 1 hora entre meditaciones
      strength: 4 * 60 * 60,    // 4 horas entre sesiones de fuerza
      cardio: 4 * 60 * 60,
      kegel: 2 * 60 * 60,       // 2 horas entre kegels (permitido 2x día)
      default: 30,              // 30 segundos mínimo entre cualquier tarea
    };
    
    /**
     * Verifica si el usuario puede completar una tarea (cooldown)
     */
    export function checkTaskCooldown(
      taskCategory: string,
      lastCompletedAt: Date | null
    ): { canComplete: boolean; waitSeconds: number } {
      if (!lastCompletedAt) {
        return { canComplete: true, waitSeconds: 0 };
      }
      
      const cooldown = TASK_COOLDOWNS[taskCategory] ?? TASK_COOLDOWNS.default;
      const elapsedSeconds = (Date.now() - lastCompletedAt.getTime()) / 1000;
      const waitSeconds = Math.max(0, cooldown - elapsedSeconds);
      
      return {
        canComplete: waitSeconds === 0,
        waitSeconds: Math.ceil(waitSeconds),
      };
    }
    ```

TAREA-09.7.3:
  Nombre: "Implementar detección de farming sospechoso"
  Acción: "Detectar patrones de uso sospechoso"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Configuración de detección de farming
     */
    const FARMING_DETECTION = {
      maxTasksPerHour: 20,
      maxBtcPerHour: 2000,
      minSecondsBetweenTasks: 5,
    };
    
    /**
     * Verifica si hay actividad sospechosa
     */
    export function detectSuspiciousActivity(
      recentTasks: { completedAt: Date }[],
      recentEarnings: number
    ): { isSuspicious: boolean; reason: string | null } {
      // Check rate of tasks
      const tasksLastHour = recentTasks.filter(t => 
        Date.now() - t.completedAt.getTime() < 60 * 60 * 1000
      ).length;
      
      if (tasksLastHour > FARMING_DETECTION.maxTasksPerHour) {
        return {
          isSuspicious: true,
          reason: 'Demasiadas tareas completadas en poco tiempo',
        };
      }
      
      // Check earnings rate
      if (recentEarnings > FARMING_DETECTION.maxBtcPerHour) {
        return {
          isSuspicious: true,
          reason: 'Ganancias inusualmente altas',
        };
      }
      
      // Check minimum time between tasks
      if (recentTasks.length >= 2) {
        const sorted = [...recentTasks].sort(
          (a, b) => b.completedAt.getTime() - a.completedAt.getTime()
        );
        const timeBetween = (sorted[0].completedAt.getTime() - sorted[1].completedAt.getTime()) / 1000;
        
        if (timeBetween < FARMING_DETECTION.minSecondsBetweenTasks) {
          return {
            isSuspicious: true,
            reason: 'Completando tareas demasiado rápido',
          };
        }
      }
      
      return { isSuspicious: false, reason: null };
    }
    ```

TAREA-09.7.4:
  Nombre: "Implementar validación de balance negativo"
  Acción: "Prevenir que el balance sea negativo por race conditions"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Verifica integridad del wallet antes de operación
     */
    export function validateWalletIntegrity(
      wallet: WalletState
    ): { isValid: boolean; issues: string[] } {
      const issues: string[] = [];
      
      if (wallet.btcBalance < 0) {
        issues.push('Balance negativo detectado');
      }
      
      if (wallet.totalEarned < wallet.btcBalance) {
        issues.push('Total ganado menor que balance actual');
      }
      
      if (wallet.totalSpent < 0) {
        issues.push('Total gastado negativo');
      }
      
      return {
        isValid: issues.length === 0,
        issues,
      };
    }
    ```

TAREA-09.7.5:
  Nombre: "Implementar límite de compras por día"
  Acción: "Limitar número de compras diarias"
  Responsable: Antigravity
  Código:
    ```typescript
    const MAX_PURCHASES_PER_DAY = 20;
    
    /**
     * Verifica si el usuario puede hacer más compras hoy
     */
    export async function canMakePurchaseToday(
      supabase: SupabaseClient,
      userId: string
    ): Promise<{ canPurchase: boolean; purchasesToday: number }> {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const { count } = await supabase
        .from('transactions')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('type', 'purchase')
        .gte('created_at', today.toISOString());
      
      const purchasesToday = count ?? 0;
      
      return {
        canPurchase: purchasesToday < MAX_PURCHASES_PER_DAY,
        purchasesToday,
      };
    }
    ```

SUBCAJA 09.8: Item-IA Integration
Integración de Items con IA Generativa
Archivos a Crear
CopyRutas:
├── /src/lib/ai/item-tokens.ts              # Generación de tokens para items
└── /src/lib/ai/prompt-items.ts             # Integración con prompt builder

Tiempo Estimado: 30-45 minutos
Tareas Atómicas para 09.8
yamlCopyTAREA-09.8.1:
  Nombre: "Implementar función getEquippedItemTokens"
  Acción: "Obtener tokens de items equipados para prompt de IA"
  Responsable: Antigravity
  Código:
    ```typescript
    // /src/lib/ai/item-tokens.ts
    
    import type { InventoryItemWithDetails } from '@/lib/inventory/types';
    
    /**
     * Genera los tokens de items equipados para el prompt de IA
     */
    export function getEquippedItemTokens(
      equippedItems: InventoryItemWithDetails[]
    ): string[] {
      return equippedItems
        .filter(item => item.equipped && !item.isLocked && item.item.promptTokens)
        .map(item => item.item.promptTokens);
    }
    
    /**
     * Genera la sección [EQUIPPED] del prompt
     */
    export function buildEquippedSection(
      equippedItems: InventoryItemWithDetails[]
    ): string {
      const tokens = getEquippedItemTokens(equippedItems);
      
      if (tokens.length === 0) {
        return '';
      }
      
      return `[EQUIPPED] ${tokens.join(', ')}`;
    }
    ```

TAREA-09.8.2:
  Nombre: "Implementar priorización de tokens por categoría"
  Acción: "Ordenar tokens para que los más importantes vayan primero"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Orden de prioridad de categorías en el prompt
     * Los primeros tienen más peso visual
     */
    const CATEGORY_PRIORITY: Record<string, number> = {
      armor: 1,        // Ropa primero (más visible)
      accessories: 2,  // Accesorios segundo
      vehicles: 3,     // Vehículos (si está en escena)
      properties: 4,   // Propiedades (fondo)
      companions: 5,   // Compañeras
      pets: 6,         // Mascotas
      powerups: 99,    // No afectan visual
    };
    
    /**
     * Ordena items equipados por prioridad visual
     */
    export function sortByVisualPriority(
      items: InventoryItemWithDetails[]
    ): InventoryItemWithDetails[] {
      return [...items].sort((a, b) => {
        const priorityA = CATEGORY_PRIORITY[a.item.category] ?? 50;
        const priorityB = CATEGORY_PRIORITY[b.item.category] ?? 50;
        return priorityA - priorityB;
      });
    }
    ```

TAREA-09.8.3:
  Nombre: "Implementar override de entorno por propiedad"
  Acción: "Si hay propiedad equipada, usar su fondo en lugar del env_lvl"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Determina el fondo a usar basado en propiedades equipadas
     * Si hay una propiedad equipada, override el env_lvl
     */
    export function getEnvironmentOverride(
      equippedItems: InventoryItemWithDetails[],
      defaultEnvLevel: number
    ): { useOverride: boolean; tokens: string } {
      const property = equippedItems.find(
        item => item.item.category === 'properties' && item.equipped && !item.isLocked
      );
      
      if (property) {
        return {
          useOverride: true,
          tokens: property.item.promptTokens,
        };
      }
      
      return {
        useOverride: false,
        tokens: '', // Usar tokens de env_lvl default
      };
    }
    ```

TAREA-09.8.4:
  Nombre: "Integrar items en buildAvatarPrompt"
  Acción: "Modificar el prompt builder para incluir items"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Modifica la función buildAvatarPrompt en /src/lib/ai/prompt-builder.ts para:
    1. Recibir inventario equipado como parámetro
    2. Llamar a buildEquippedSection() para obtener tokens de items
    3. Insertar la sección [EQUIPPED] antes de [ENVIRONMENT]
    4. Verificar si hay override de entorno por propiedad
    
    El prompt final debe verse así:
    ```
    [STYLE] 8bit pixel art...
    [CHARACTER] brown dreadlocks...
    [BODY] athletic build...
    [FACE] defined jawline...
    [POSTURE] confident stance...
    [EQUIPPED] wearing Italian black suit, gold Cuban link chain, aviator sunglasses
    [ENVIRONMENT] inside luxury penthouse...
    ```

TAREA-09.8.5:
  Nombre: "Implementar validación de tokens conflictivos"
  Acción: "Detectar y resolver conflictos entre items"
  Responsable: Antigravity
  Código:
    ```typescript
    /**
     * Algunos items pueden tener tokens conflictivos
     * Ej: "shirtless" vs "wearing suit"
     */
    const CONFLICTING_TOKENS: [string, string][] = [
      ['shirtless', 'wearing'],
      ['barefoot', 'shoes'],
    ];
    
    /**
     * Filtra tokens conflictivos, priorizando items de mayor nivel
     */
    export function resolveTokenConflicts(
      tokens: string[]
    ): string[] {
      // Por ahora, simplemente remover duplicados
      // En el futuro, implementar lógica de resolución más sofisticada
      return [...new Set(tokens)];
    }
    ```

SUBCAJA 09.9: Economy Testing
Testing del Sistema Económico
Archivos a Crear
CopyRutas:
├── /src/lib/core/economy/__tests__/wallet.test.ts
├── /src/lib/core/economy/__tests__/rewards.test.ts
├── /src/lib/store/__tests__/gating.test.ts
├── /src/lib/store/__tests__/catalog.test.ts
└── /tests/integration/economy.test.ts

Tiempo Estimado: 30-45 minutos
Tareas Atómicas para 09.9
yamlCopyTAREA-09.9.1:
  Nombre: "Crear tests unitarios para wallet.ts"
  Acción: "Crear /src/lib/core/economy/__tests__/wallet.test.ts"
  Responsable: Antigravity
  Tests Requeridos:
    ```typescript
    describe('wallet functions', () => {
      describe('getStreakMultiplier', () => {
        it('returns 1.0 for 0 days', () => {
          expect(getStreakMultiplier(0)).toBe(1.0);
        });
        
        it('returns 1.1 for 7 days', () => {
          expect(getStreakMultiplier(7)).toBe(1.1);
        });
        
        it('returns 1.5 for 14 days', () => {
          expect(getStreakMultiplier(14)).toBe(1.5);
        });
        
        it('returns 2.5 for 30+ days', () => {
          expect(getStreakMultiplier(30)).toBe(2.5);
          expect(getStreakMultiplier(100)).toBe(2.5);
        });
      });
      
      describe('getLevelMultiplier', () => {
        it('returns correct multipliers for each level range', () => {
          expect(getLevelMultiplier(1)).toBe(1.0);
          expect(getLevelMultiplier(3)).toBe(1.2);
          expect(getLevelMultiplier(5)).toBe(1.5);
          expect(getLevelMultiplier(7)).toBe(2.0);
          expect(getLevelMultiplier(9)).toBe(3.0);
        });
        
        it('clamps values outside range', () => {
          expect(getLevelMultiplier(0)).toBe(1.0);
          expect(getLevelMultiplier(15)).toBe(3.0);
        });
      });
      
      describe('creditBtc', () => {
        const baseWallet: WalletState = {
          userId: 'test',
          btcBalance: 1000,
          totalEarned: 1000,
          totalSpent: 0,
          lastTransactionAt: null,
        };
        
        it('adds amount to balance', () => {
          const result = creditBtc(baseWallet, 500, 'task_reward');
          expect(result.success).toBe(true);
          expect(result.newBalance).toBe(1500);
        });
        
        it('rejects zero or negative amounts', () => {
          expect(creditBtc(baseWallet, 0, 'task_reward').success).toBe(false);
          expect(creditBtc(baseWallet, -100, 'task_reward').success).toBe(false);
        });
        
        it('respects max balance', () => {
          const richWallet = { ...baseWallet, btcBalance: 999990 };
          const result = creditBtc(richWallet, 100, 'task_reward');
          expect(result.newBalance).toBe(999999); // capped
        });
      });
      
      describe('debitBtc', () => {
        it('subtracts amount from balance', () => {
          const wallet: WalletState = { ...baseWallet, btcBalance: 1000 };
          const result = debitBtc(wallet, 300, 'purchase');
          expect(result.success).toBe(true);
          expect(result.newBalance).toBe(700);
        });
        
        it('fails if insufficient funds', () => {
          const wallet: WalletState = { ...baseWallet, btcBalance: 100 };
          const result = debitBtc(wallet, 500, 'purchase');
          expect(result.success).toBe(false);
          expect(result.error).toBe('INSUFFICIENT_FUNDS');
        });
      });
    });
    ```

TAREA-09.9.2:
  Nombre: "Crear tests unitarios para rewards.ts"
  Acción: "Crear /src/lib/core/economy/__tests__/rewards.test.ts"
  Responsable: Antigravity
  Tests Requeridos:
    ```typescript
    describe('calculateTaskRewardDetailed', () => {
      it('calculates base reward correctly', () => {
        const result = calculateTaskRewardDetailed({
          taskCategory: 'meditation',
          streakDays: 0,
          userLevel: 1,
          isPerfectDay: false,
          todayEarnings: 0,
        });
        expect(result.baseReward).toBe(100);
        expect(result.finalReward).toBe(100);
      });
      
      it('applies streak multiplier', () => {
        const result = calculateTaskRewardDetailed({
          taskCategory: 'meditation',
          streakDays: 30,
          userLevel: 1,
          isPerfectDay: false,
          todayEarnings: 0,
        });
        expect(result.streakMultiplier).toBe(2.5);
        expect(result.finalReward).toBe(250); // 100 * 2.5
      });
      
      it('applies level multiplier', () => {
        const result = calculateTaskRewardDetailed({
          taskCategory: 'strength',
          streakDays: 0,
          userLevel: 9,
          isPerfectDay: false,
          todayEarnings: 0,
        });
        expect(result.levelMultiplier).toBe(3.0);
        expect(result.finalReward).toBe(750); // 250 * 3
      });
      
      it('applies both multipliers', () => {
        const result = calculateTaskRewardDetailed({
          taskCategory: 'strength',
          streakDays: 30,
          userLevel: 9,
          isPerfectDay: false,
          todayEarnings: 0,
        });
        // 250 * 2.5 * 3.0 = 1875
        expect(result.finalReward).toBe(1875);
      });
      
      it('adds perfect day bonus', () => {
        const result = calculateTaskRewardDetailed({
          taskCategory: 'meditation',
          streakDays: 0,
          userLevel: 1,
          isPerfectDay: true,
          todayEarnings: 0,
        });
        expect(result.perfectDayBonus).toBe(100);
        expect(result.finalReward).toBe(200); // 100 + 100
      });
      
      it('respects daily cap', () => {
        const result = calculateTaskRewardDetailed({
          taskCategory: 'strength',
          streakDays: 30,
          userLevel: 9,
          isPerfectDay: false,
          todayEarnings: 3400, // Ya ganó 3400, cap es 3500
        });
        expect(result.wasCapped).toBe(true);
        expect(result.finalReward).toBe(100); // Solo 100 disponible
      });
    });
    ```

TAREA-09.9.3:
  Nombre: "Crear tests unitarios para gating.ts"
  Acción: "Crear /src/lib/store/__tests__/gating.test.ts"
  Responsable: Antigravity
  Tests Requeridos:
    ```typescript
    describe('validatePurchase', () => {
      const mockItem: StoreItem = {
        id: 'test_item',
        name: 'Test',
        priceBtc: 1000,
        levelRequired: 5,
        vectorRequirements: [
          { vector: 'fat_lvl', operator: '<', value: 8 },
        ],
        // ... otros campos
      };
      
      it('passes when all requirements met', () => {
        const result = validatePurchase({
          item: mockItem,
          wallet: { btcBalance: 2000 },
          avatarState: { current_level: 6, fat_lvl: 5 },
          ownedItemIds: [],
          purchaseCooldowns: {},
        });
        expect(result.canPurchase).toBe(true);
        expect(result.reasons).toHaveLength(0);
      });
      
      it('fails for insufficient funds', () => {
        const result = validatePurchase({
          item: mockItem,
          wallet: { btcBalance: 500 },
          avatarState: { current_level: 6, fat_lvl: 5 },
          ownedItemIds: [],
          purchaseCooldowns: {},
        });
        expect(result.canPurchase).toBe(false);
        expect(result.reasons).toContain('INSUFFICIENT_FUNDS');
      });
      
      it('fails for level too low', () => {
        const result = validatePurchase({
          item: mockItem,
          wallet: { btcBalance: 2000 },
          avatarState: { current_level: 3, fat_lvl: 5 },
          ownedItemIds: [],
          purchaseCooldowns: {},
        });
        expect(result.canPurchase).toBe(false);
        expect(result.reasons).toContain('LEVEL_TOO_LOW');
      });
      
      it('fails for vector requirement not met', () => {
        const result = validatePurchase({
          item: mockItem,
          wallet: { btcBalance: 2000 },
          avatarState: { current_level: 6, fat_lvl: 10 }, // fat > 8
          ownedItemIds: [],
          purchaseCooldowns: {},
        });
        expect(result.canPurchase).toBe(false);
        expect(result.reasons).toContain('VECTOR_REQUIREMENT_NOT_MET');
      });
      
      it('fails for already owned unique item', () => {
        const result = validatePurchase({
          item: { ...mockItem, maxQuantity: 1 },
          wallet: { btcBalance: 2000 },
          avatarState: { current_level: 6, fat_lvl: 5 },
          ownedItemIds: ['test_item'],
          purchaseCooldowns: {},
        });
        expect(result.canPurchase).toBe(false);
        expect(result.reasons).toContain('ALREADY_OWNED');
      });
    });
    ```

TAREA-09.9.4:
  Nombre: "Crear tests de integración de economía"
  Acción: "Crear /tests/integration/economy.test.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea tests de integración que:
    1. Crea un usuario de prueba con wallet
    2. Completa una tarea y verifica que el balance aumentó
    3. Compra un item y verifica que el balance disminuyó
    4. Verifica que el item aparece en inventario
    5. Verifica que no puede comprar el mismo item único dos veces
    
    Usa Supabase test client y limpia datos después de cada test.

TAREA-09.9.5:
  Nombre: "Crear tests de edge cases económicos"
  Acción: "Tests para casos límite"
  Responsable: Antigravity
  Tests Requeridos:
    ```typescript
    describe('economy edge cases', () => {
      it('handles race condition in purchase', async () => {
        // Simular dos compras simultáneas del mismo item
        // Solo una debe succeeder
      });
      
      it('handles daily cap reset at midnight', () => {
        // Verificar que el cap se resetea correctamente
      });
      
      it('handles negative balance attempt', () => {
        // Intentar gastar más de lo que se tiene
      });
      
      it('handles max wallet balance', () => {
        // Intentar ganar cuando ya está al máximo
      });
    });
    ```

RESUMEN DE CAJA 09: ECONOMÍA Y TIENDA
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 09 - RESUMEN DE ENTREGABLES                               ║
║                                                                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  SUBCAJA               │ ARCHIVOS                      │ TAREAS │ TIEMPO EST.        ║
║  ─────────────────────┼───────────────────────────────┼────────┼──────────────      ║
║  09.1 Core Economy    │ economy/*.ts                  │    9   │ 45-60 min          ║
║  09.2 Task Rewards    │ economy/rewards.ts, actions/* │    6   │ 30-45 min          ║
║  09.3 Store Catalog   │ store/*.ts, actions/store/*   │    8   │ 45-60 min          ║
║  09.4 Inventory       │ inventory/*.ts, actions/*     │    8   │ 30-45 min          ║
║  09.5 Gating          │ store/gating.ts, validators.ts│    8   │ 30-45 min          ║
║  09.6 Purchase        │ actions/store/purchase.ts     │    5   │ 45-60 min          ║
║  09.7 Anti-Exploit    │ economy/anti-exploit.ts       │    5   │ 30-45 min          ║
║  09.8 Item-IA         │ ai/item-tokens.ts             │    5   │ 30-45 min          ║
║  09.9 Testing         │ __tests__/*.test.ts           │    5   │ 30-45 min          ║
║  ─────────────────────┼───────────────────────────────┼────────┼──────────────      ║
║  TOTAL                │ ~20 archivos                  │   59   │ 5-7 horas          ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ACTUALIZACIÓN DEL PROGRESO ACUMULADO
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
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  📦 CAJA 10: Monetización (Stripe)        │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 11: Notificaciones y Realtime    │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 12: Observabilidad y Calidad     │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 13: Lanzamiento y Operaciones    │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  TOTAL DESGLOSADO HASTA AHORA             │ 80 subcajas │ 538 tareas │ 9/13 CAJAS   ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝





