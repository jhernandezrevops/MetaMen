/**
 * METAMEN100 - Database Seed Script
 * Pobla la base de datos con datos iniciales para desarrollo
 *
 * Uso: pnpm db:seed
 */

import { createClient } from '@supabase/supabase-js';

// Verificar variables de entorno
const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'];
const supabaseServiceKey = process.env['SUPABASE_SERVICE_ROLE_KEY'];

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('   Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function seed(): Promise<void> {
  console.info('🌱 Starting database seed...\n');

  try {
    // ============================================
    // VERIFICAR CONEXIÓN
    // ============================================
    console.info('🔌 Checking Supabase connection...');
    const { error: healthError } = await supabase
      .from('_health_check_placeholder')
      .select('*')
      .limit(1);

    // Ignorar error de tabla no existente - es esperado
    if (healthError && !healthError.message.includes('does not exist')) {
      throw healthError;
    }

    console.info('✅ Supabase connection OK');

    // ============================================
    // SEED TASKS CATEGORIES (Placeholder)
    // ============================================
    console.info('📦 Seeding task categories...');

    // TODO: Implementar seeds cuando se creen las tablas
    console.info('   ⏭️  No tables to seed yet - run after database setup');

    console.info('\n✅ Database seed completed!\n');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

// Ejecutar seed
seed();
