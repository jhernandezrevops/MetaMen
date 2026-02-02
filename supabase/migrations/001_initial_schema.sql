-- ============================================
-- METAMEN100 - Database Schema Migration
-- Sistema Operativo de Conducta TOP 100 Mundial
-- ============================================
-- Ejecutar este script en Supabase SQL Editor

-- ============================================
-- 1. ENUMS
-- ============================================

CREATE TYPE avatar_archetype AS ENUM (
  'rastas', 'muscles', 'pecas', 'grenas', 'rubio', 'lic'
);

CREATE TYPE avatar_status AS ENUM (
  'active', 'dead', 'completed'
);

CREATE TYPE subscription_plan AS ENUM (
  'monthly', 'yearly'
);

CREATE TYPE subscription_status AS ENUM (
  'active', 'cancelled', 'expired', 'past_due'
);

CREATE TYPE payment_status AS ENUM (
  'succeeded', 'failed', 'pending', 'refunded'
);

CREATE TYPE image_status AS ENUM (
  'pending', 'generated', 'failed'
);

CREATE TYPE day_result AS ENUM (
  'win', 'loss'
);

CREATE TYPE shop_category AS ENUM (
  'background', 'clothing', 'accessory', 'effect'
);

-- ============================================
-- 2. TABLES
-- ============================================

-- USERS
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE,
  full_name VARCHAR(255),
  avatar_url TEXT,
  supabase_user_id UUID UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_login_at TIMESTAMPTZ
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_supabase_user_id ON users(supabase_user_id);
CREATE INDEX idx_users_created_at ON users(created_at);

-- USER SETTINGS
CREATE TABLE user_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  timezone VARCHAR(50) DEFAULT 'America/Mexico_City',
  language VARCHAR(10) DEFAULT 'es',
  theme VARCHAR(20) DEFAULT 'dark',
  push_notifications BOOLEAN DEFAULT TRUE,
  email_notifications BOOLEAN DEFAULT TRUE,
  reminder_time TIME DEFAULT '20:00:00',
  profile_visibility VARCHAR(20) DEFAULT 'private',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_user_settings_user_id ON user_settings(user_id);

-- SUBSCRIPTIONS
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan subscription_plan NOT NULL,
  status subscription_status DEFAULT 'active',
  started_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL,
  cancelled_at TIMESTAMPTZ,
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  stripe_price_id VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_expires_at ON subscriptions(expires_at);
CREATE INDEX idx_subscriptions_stripe_subscription_id ON subscriptions(stripe_subscription_id);

-- PAYMENTS
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status payment_status NOT NULL,
  stripe_payment_id VARCHAR(255),
  stripe_invoice_id VARCHAR(255),
  description TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_created_at ON payments(created_at);
CREATE INDEX idx_payments_stripe_payment_id ON payments(stripe_payment_id);

-- AVATARS
CREATE TABLE avatars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100),
  archetype avatar_archetype NOT NULL,
  current_day INT DEFAULT 1 CHECK (current_day >= 1 AND current_day <= 100),
  current_level INT DEFAULT 1 CHECK (current_level >= 1 AND current_level <= 13),
  streak_days INT DEFAULT 0,
  health_points INT DEFAULT 10 CHECK (health_points >= 0),
  max_health_points INT DEFAULT 10,
  status avatar_status DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  died_at TIMESTAMPTZ
);

CREATE INDEX idx_avatars_user_id ON avatars(user_id);
CREATE INDEX idx_avatars_user_status ON avatars(user_id, status);
CREATE INDEX idx_avatars_status ON avatars(status);
CREATE INDEX idx_avatars_created_at ON avatars(created_at);

-- AVATAR VECTORS
CREATE TABLE avatar_vectors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  avatar_id UUID UNIQUE NOT NULL REFERENCES avatars(id) ON DELETE CASCADE,
  aura_level DECIMAL(4, 2) DEFAULT 1.00 CHECK (aura_level >= 1 AND aura_level <= 13),
  face_level DECIMAL(4, 2) DEFAULT 1.00 CHECK (face_level >= 1 AND face_level <= 13),
  wealth_level DECIMAL(4, 2) DEFAULT 1.00 CHECK (wealth_level >= 1 AND wealth_level <= 13),
  muscle_level DECIMAL(4, 2) DEFAULT 1.00 CHECK (muscle_level >= 1 AND muscle_level <= 13),
  fat_level DECIMAL(4, 2) DEFAULT 13.00 CHECK (fat_level >= 1 AND fat_level <= 13),
  env_level INT DEFAULT 1 CHECK (env_level >= 1 AND env_level <= 6),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_avatar_vectors_avatar_id ON avatar_vectors(avatar_id);

-- AVATAR IMAGES
CREATE TABLE avatar_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  avatar_id UUID NOT NULL REFERENCES avatars(id) ON DELETE CASCADE,
  day_number INT NOT NULL CHECK (day_number >= 1 AND day_number <= 100),
  image_url TEXT,
  status image_status DEFAULT 'pending',
  prompt TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(avatar_id, day_number)
);

CREATE INDEX idx_avatar_images_avatar_id ON avatar_images(avatar_id);
CREATE INDEX idx_avatar_images_status ON avatar_images(status);

-- DAILY LOGS
CREATE TABLE daily_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  avatar_id UUID NOT NULL REFERENCES avatars(id) ON DELETE CASCADE,
  day_number INT NOT NULL CHECK (day_number >= 1 AND day_number <= 100),
  result day_result NOT NULL,
  btc_earned DECIMAL(10, 2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(avatar_id, day_number)
);

CREATE INDEX idx_daily_logs_avatar_id ON daily_logs(avatar_id);

-- TASK DEFINITIONS
CREATE TABLE task_definitions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  archetype avatar_archetype,
  btc_reward DECIMAL(10, 2) DEFAULT 0,
  aura_impact DECIMAL(3, 2) DEFAULT 0,
  face_impact DECIMAL(3, 2) DEFAULT 0,
  wealth_impact DECIMAL(3, 2) DEFAULT 0,
  muscle_impact DECIMAL(3, 2) DEFAULT 0,
  fat_impact DECIMAL(3, 2) DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_task_definitions_slug ON task_definitions(slug);
CREATE INDEX idx_task_definitions_archetype ON task_definitions(archetype);
CREATE INDEX idx_task_definitions_is_active ON task_definitions(is_active);

-- TASK COMPLETIONS
CREATE TABLE task_completions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  task_id UUID NOT NULL REFERENCES task_definitions(id) ON DELETE CASCADE,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  btc_earned DECIMAL(10, 2) DEFAULT 0
);

CREATE INDEX idx_task_completions_user_id ON task_completions(user_id);
CREATE INDEX idx_task_completions_task_id ON task_completions(task_id);
CREATE INDEX idx_task_completions_completed_at ON task_completions(completed_at);

-- SHOP ITEMS
CREATE TABLE shop_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  category shop_category NOT NULL,
  price_btc DECIMAL(10, 2) NOT NULL,
  required_level INT DEFAULT 1 CHECK (required_level >= 1 AND required_level <= 13),
  ai_token TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_shop_items_slug ON shop_items(slug);
CREATE INDEX idx_shop_items_category ON shop_items(category);
CREATE INDEX idx_shop_items_is_active ON shop_items(is_active);

-- INVENTORY ITEMS
CREATE TABLE inventory_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  shop_item_id UUID NOT NULL REFERENCES shop_items(id) ON DELETE CASCADE,
  is_equipped BOOLEAN DEFAULT FALSE,
  acquired_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, shop_item_id)
);

CREATE INDEX idx_inventory_items_user_id ON inventory_items(user_id);
CREATE INDEX idx_inventory_items_shop_item_id ON inventory_items(shop_item_id);

-- JOURNAL ENTRIES
CREATE TABLE journal_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  entry_date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, entry_date)
);

CREATE INDEX idx_journal_entries_user_id ON journal_entries(user_id);
CREATE INDEX idx_journal_entries_entry_date ON journal_entries(entry_date);

-- ============================================
-- 3. TRIGGERS - Auto-update updated_at
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to tables with updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_settings_updated_at BEFORE UPDATE ON user_settings
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_avatar_vectors_updated_at BEFORE UPDATE ON avatar_vectors
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_journal_entries_updated_at BEFORE UPDATE ON journal_entries
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 4. TRIGGER - Auto-create avatar_vectors
-- ============================================

CREATE OR REPLACE FUNCTION create_avatar_vectors_on_avatar_insert()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO avatar_vectors (avatar_id) VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER auto_create_avatar_vectors AFTER INSERT ON avatars
FOR EACH ROW EXECUTE FUNCTION create_avatar_vectors_on_avatar_insert();

-- ============================================
-- 5. ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all user tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE avatars ENABLE ROW LEVEL SECURITY;
ALTER TABLE avatar_vectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE avatar_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_completions ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;

-- Users can only see/modify their own data
CREATE POLICY users_policy ON users
  FOR ALL USING (supabase_user_id = auth.uid());

CREATE POLICY user_settings_policy ON user_settings
  FOR ALL USING (user_id IN (SELECT id FROM users WHERE supabase_user_id = auth.uid()));

CREATE POLICY subscriptions_policy ON subscriptions
  FOR ALL USING (user_id IN (SELECT id FROM users WHERE supabase_user_id = auth.uid()));

CREATE POLICY payments_policy ON payments
  FOR ALL USING (user_id IN (SELECT id FROM users WHERE supabase_user_id = auth.uid()));

CREATE POLICY avatars_policy ON avatars
  FOR ALL USING (user_id IN (SELECT id FROM users WHERE supabase_user_id = auth.uid()));

CREATE POLICY avatar_vectors_policy ON avatar_vectors
  FOR ALL USING (avatar_id IN (
    SELECT id FROM avatars WHERE user_id IN (
      SELECT id FROM users WHERE supabase_user_id = auth.uid()
    )
  ));

CREATE POLICY avatar_images_policy ON avatar_images
  FOR ALL USING (avatar_id IN (
    SELECT id FROM avatars WHERE user_id IN (
      SELECT id FROM users WHERE supabase_user_id = auth.uid()
    )
  ));

CREATE POLICY daily_logs_policy ON daily_logs
  FOR ALL USING (avatar_id IN (
    SELECT id FROM avatars WHERE user_id IN (
      SELECT id FROM users WHERE supabase_user_id = auth.uid()
    )
  ));

CREATE POLICY task_completions_policy ON task_completions
  FOR ALL USING (user_id IN (SELECT id FROM users WHERE supabase_user_id = auth.uid()));

CREATE POLICY inventory_items_policy ON inventory_items
  FOR ALL USING (user_id IN (SELECT id FROM users WHERE supabase_user_id = auth.uid()));

CREATE POLICY journal_entries_policy ON journal_entries
  FOR ALL USING (user_id IN (SELECT id FROM users WHERE supabase_user_id = auth.uid()));

-- Public read access for task_definitions and shop_items
ALTER TABLE task_definitions ENABLE ROW LEVEL SECURITY;
ALTER TABLE shop_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY task_definitions_read ON task_definitions
  FOR SELECT USING (TRUE);

CREATE POLICY shop_items_read ON shop_items
  FOR SELECT USING (TRUE);

-- ============================================
-- 6. SUCCESS MESSAGE
-- ============================================
SELECT 'METAMEN100 Database Schema Created Successfully! 🚀' AS message;
