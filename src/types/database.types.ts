/**
 * METAMEN100 - Database Types
 * Tipos TypeScript generados para las tablas de Supabase
 * Basado en schema SQL: supabase/migrations/001_initial_schema.sql
 */

// ============================================
// ENUMS
// ============================================

export type AvatarArchetype = 'rastas' | 'muscles' | 'pecas' | 'grenas' | 'rubio' | 'lic';

export type AvatarStatus = 'active' | 'dead' | 'completed';

export type SubscriptionPlan = 'monthly' | 'yearly';

export type SubscriptionStatus = 'active' | 'cancelled' | 'expired' | 'past_due';

export type PaymentStatus = 'succeeded' | 'failed' | 'pending' | 'refunded';

export type ImageStatus = 'pending' | 'generated' | 'failed';

export type DayResult = 'win' | 'loss';

export type ShopCategory = 'background' | 'clothing' | 'accessory' | 'effect';

// ============================================
// TABLE TYPES
// ============================================

/**
 * Tabla: users
 * Usuario registrado en el sistema
 */
export interface User {
    id: string;
    email: string;
    username: string | null;
    full_name: string | null;
    avatar_url: string | null;
    supabase_user_id: string;
    created_at: string;
    updated_at: string;
    last_login_at: string | null;
}

/**
 * Tabla: user_settings
 * Configuraciones de usuario
 */
export interface UserSettings {
    id: string;
    user_id: string;
    timezone: string;
    language: string;
    theme: string;
    push_notifications: boolean;
    email_notifications: boolean;
    reminder_time: string;
    profile_visibility: string;
    created_at: string;
    updated_at: string;
}

/**
 * Tabla: subscriptions
 * Suscripciones de usuarios
 */
export interface Subscription {
    id: string;
    user_id: string;
    plan: SubscriptionPlan;
    status: SubscriptionStatus;
    started_at: string;
    expires_at: string;
    cancelled_at: string | null;
    stripe_customer_id: string | null;
    stripe_subscription_id: string | null;
    stripe_price_id: string | null;
    created_at: string;
    updated_at: string;
}

/**
 * Tabla: payments
 * Historial de pagos
 */
export interface Payment {
    id: string;
    user_id: string;
    amount: number;
    currency: string;
    status: PaymentStatus;
    stripe_payment_id: string | null;
    stripe_invoice_id: string | null;
    description: string | null;
    metadata: Record<string, unknown> | null;
    created_at: string;
}

/**
 * Tabla: avatars
 * Avatar del usuario en el reto de 100 días
 */
export interface Avatar {
    id: string;
    user_id: string;
    name: string | null;
    archetype: AvatarArchetype;
    current_day: number;
    current_level: number;
    streak_days: number;
    health_points: number;
    max_health_points: number;
    status: AvatarStatus;
    created_at: string;
    completed_at: string | null;
    died_at: string | null;
}

/**
 * Tabla: avatar_vectors
 * Vectores de progreso del avatar (1-13)
 */
export interface AvatarVectors {
    id: string;
    avatar_id: string;
    aura_level: number;
    face_level: number;
    wealth_level: number;
    muscle_level: number;
    fat_level: number;
    env_level: number;
    updated_at: string;
}

/**
 * Tabla: avatar_images
 * Imágenes generadas por IA para cada día
 */
export interface AvatarImage {
    id: string;
    avatar_id: string;
    day_number: number;
    image_url: string | null;
    status: ImageStatus;
    prompt: string | null;
    created_at: string;
}

/**
 * Tabla: daily_logs
 * Registro diario de progreso
 */
export interface DailyLog {
    id: string;
    avatar_id: string;
    day_number: number;
    result: DayResult;
    btc_earned: number;
    created_at: string;
}

/**
 * Tabla: task_definitions
 * Definiciones de tareas disponibles
 */
export interface TaskDefinition {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    archetype: AvatarArchetype | null;
    btc_reward: number;
    aura_impact: number;
    face_impact: number;
    wealth_impact: number;
    muscle_impact: number;
    fat_impact: number;
    is_active: boolean;
    created_at: string;
}

/**
 * Tabla: task_completions
 * Tareas completadas por usuarios
 */
export interface TaskCompletion {
    id: string;
    user_id: string;
    task_id: string;
    completed_at: string;
    btc_earned: number;
}

/**
 * Tabla: shop_items
 * Items disponibles en la tienda
 */
export interface ShopItem {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    category: ShopCategory;
    price_btc: number;
    required_level: number;
    ai_token: string | null;
    image_url: string | null;
    is_active: boolean;
    created_at: string;
}

/**
 * Tabla: inventory_items
 * Items comprados por usuarios
 */
export interface InventoryItem {
    id: string;
    user_id: string;
    shop_item_id: string;
    is_equipped: boolean;
    acquired_at: string;
}

/**
 * Tabla: journal_entries
 * Entradas del diario personal
 */
export interface JournalEntry {
    id: string;
    user_id: string;
    content: string;
    entry_date: string;
    created_at: string;
    updated_at: string;
}

// ============================================
// INSERT TYPES (for creating records)
// ============================================

export type UserInsert = Omit<User, 'id' | 'created_at' | 'updated_at'>;
export type UserSettingsInsert = Omit<UserSettings, 'id' | 'created_at' | 'updated_at'>;
export type SubscriptionInsert = Omit<Subscription, 'id' | 'created_at' | 'updated_at'>;
export type PaymentInsert = Omit<Payment, 'id' | 'created_at'>;
export type AvatarInsert = Omit<Avatar, 'id' | 'created_at' | 'completed_at' | 'died_at'>;
export type AvatarVectorsInsert = Omit<AvatarVectors, 'id' | 'updated_at'>;
export type AvatarImageInsert = Omit<AvatarImage, 'id' | 'created_at'>;
export type DailyLogInsert = Omit<DailyLog, 'id' | 'created_at'>;
export type TaskDefinitionInsert = Omit<TaskDefinition, 'id' | 'created_at'>;
export type TaskCompletionInsert = Omit<TaskCompletion, 'id' | 'completed_at'>;
export type ShopItemInsert = Omit<ShopItem, 'id' | 'created_at'>;
export type InventoryItemInsert = Omit<InventoryItem, 'id' | 'acquired_at'>;
export type JournalEntryInsert = Omit<JournalEntry, 'id' | 'created_at' | 'updated_at'>;

// ============================================
// UPDATE TYPES (for updating records)
// ============================================

export type UserUpdate = Partial<Omit<User, 'id' | 'created_at'>>;
export type UserSettingsUpdate = Partial<Omit<UserSettings, 'id' | 'user_id' | 'created_at'>>;
export type SubscriptionUpdate = Partial<Omit<Subscription, 'id' | 'user_id' | 'created_at'>>;
export type AvatarUpdate = Partial<Omit<Avatar, 'id' | 'user_id' | 'created_at'>>;
export type AvatarVectorsUpdate = Partial<Omit<AvatarVectors, 'id' | 'avatar_id'>>;
export type ShopItemUpdate = Partial<Omit<ShopItem, 'id' | 'created_at'>>;
export type JournalEntryUpdate = Partial<Omit<JournalEntry, 'id' | 'user_id' | 'created_at'>>;

// ============================================
// SUPABASE DATABASE TYPE (for createClient)
// ============================================

export interface Database {
    public: {
        Tables: {
            users: {
                Row: User;
                Insert: UserInsert;
                Update: UserUpdate;
            };
            user_settings: {
                Row: UserSettings;
                Insert: UserSettingsInsert;
                Update: UserSettingsUpdate;
            };
            subscriptions: {
                Row: Subscription;
                Insert: SubscriptionInsert;
                Update: SubscriptionUpdate;
            };
            payments: {
                Row: Payment;
                Insert: PaymentInsert;
                Update: Partial<Payment>;
            };
            avatars: {
                Row: Avatar;
                Insert: AvatarInsert;
                Update: AvatarUpdate;
            };
            avatar_vectors: {
                Row: AvatarVectors;
                Insert: AvatarVectorsInsert;
                Update: AvatarVectorsUpdate;
            };
            avatar_images: {
                Row: AvatarImage;
                Insert: AvatarImageInsert;
                Update: Partial<AvatarImage>;
            };
            daily_logs: {
                Row: DailyLog;
                Insert: DailyLogInsert;
                Update: Partial<DailyLog>;
            };
            task_definitions: {
                Row: TaskDefinition;
                Insert: TaskDefinitionInsert;
                Update: Partial<TaskDefinition>;
            };
            task_completions: {
                Row: TaskCompletion;
                Insert: TaskCompletionInsert;
                Update: Partial<TaskCompletion>;
            };
            shop_items: {
                Row: ShopItem;
                Insert: ShopItemInsert;
                Update: ShopItemUpdate;
            };
            inventory_items: {
                Row: InventoryItem;
                Insert: InventoryItemInsert;
                Update: Partial<InventoryItem>;
            };
            journal_entries: {
                Row: JournalEntry;
                Insert: JournalEntryInsert;
                Update: JournalEntryUpdate;
            };
        };
        Enums: {
            avatar_archetype: AvatarArchetype;
            avatar_status: AvatarStatus;
            subscription_plan: SubscriptionPlan;
            subscription_status: SubscriptionStatus;
            payment_status: PaymentStatus;
            image_status: ImageStatus;
            day_result: DayResult;
            shop_category: ShopCategory;
        };
    };
}
