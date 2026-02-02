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

// ============================================
// TASK DEFINITIONS DATA
// ============================================
const taskDefinitions = [
  // TAREAS UNIVERSALES (todos los arquetipos)
  {
    name: 'Despertar temprano',
    slug: 'despertar-temprano',
    description: 'Levantarse antes de las 6am',
    archetype: null,
    btc_reward: 10,
    aura_impact: 0.1,
    face_impact: 0.05,
    wealth_impact: 0.05,
    muscle_impact: 0,
    fat_impact: -0.05,
  },
  {
    name: 'Meditación matutina',
    slug: 'meditacion',
    description: '10 minutos de meditación',
    archetype: null,
    btc_reward: 15,
    aura_impact: 0.2,
    face_impact: 0.1,
    wealth_impact: 0,
    muscle_impact: 0,
    fat_impact: 0,
  },
  {
    name: 'Lectura diaria',
    slug: 'lectura',
    description: 'Leer 30 minutos',
    archetype: null,
    btc_reward: 12,
    aura_impact: 0.15,
    face_impact: 0,
    wealth_impact: 0.1,
    muscle_impact: 0,
    fat_impact: 0,
  },
  {
    name: 'Sin alcohol',
    slug: 'sin-alcohol',
    description: 'No consumir alcohol hoy',
    archetype: null,
    btc_reward: 20,
    aura_impact: 0.1,
    face_impact: 0.15,
    wealth_impact: 0.05,
    muscle_impact: 0.1,
    fat_impact: -0.1,
  },
  {
    name: 'Agua suficiente',
    slug: 'hidratacion',
    description: 'Beber 2+ litros de agua',
    archetype: null,
    btc_reward: 8,
    aura_impact: 0.05,
    face_impact: 0.1,
    wealth_impact: 0,
    muscle_impact: 0.05,
    fat_impact: -0.05,
  },

  // TAREAS MUSCLES
  {
    name: 'Entrenamiento de fuerza',
    slug: 'gym-fuerza',
    description: 'Sesión de pesas 60+ min',
    archetype: 'muscles',
    btc_reward: 25,
    aura_impact: 0.1,
    face_impact: 0.1,
    wealth_impact: 0,
    muscle_impact: 0.3,
    fat_impact: -0.15,
  },
  {
    name: '10,000 pasos',
    slug: 'pasos-10k',
    description: 'Caminar 10,000 pasos',
    archetype: 'muscles',
    btc_reward: 15,
    aura_impact: 0.05,
    face_impact: 0.05,
    wealth_impact: 0,
    muscle_impact: 0.1,
    fat_impact: -0.2,
  },
  {
    name: 'Proteína completa',
    slug: 'proteina',
    description: 'Consumir 150g+ proteína',
    archetype: 'muscles',
    btc_reward: 12,
    aura_impact: 0,
    face_impact: 0.05,
    wealth_impact: 0,
    muscle_impact: 0.2,
    fat_impact: 0,
  },

  // TAREAS RASTAS (creatividad/espiritualidad)
  {
    name: 'Práctica artística',
    slug: 'arte',
    description: 'Crear algo artístico',
    archetype: 'rastas',
    btc_reward: 20,
    aura_impact: 0.25,
    face_impact: 0.05,
    wealth_impact: 0.1,
    muscle_impact: 0,
    fat_impact: 0,
  },
  {
    name: 'Conexión naturaleza',
    slug: 'naturaleza',
    description: 'Tiempo en naturaleza 30+ min',
    archetype: 'rastas',
    btc_reward: 15,
    aura_impact: 0.3,
    face_impact: 0.1,
    wealth_impact: 0,
    muscle_impact: 0.05,
    fat_impact: -0.05,
  },

  // TAREAS PECAS (disciplina/carácter)
  {
    name: 'Journaling',
    slug: 'journal',
    description: 'Escribir en diario personal',
    archetype: 'pecas',
    btc_reward: 18,
    aura_impact: 0.2,
    face_impact: 0.1,
    wealth_impact: 0.05,
    muscle_impact: 0,
    fat_impact: 0,
  },
  {
    name: 'Cold shower',
    slug: 'cold-shower',
    description: 'Ducha fría 3+ minutos',
    archetype: 'pecas',
    btc_reward: 20,
    aura_impact: 0.15,
    face_impact: 0.15,
    wealth_impact: 0,
    muscle_impact: 0.1,
    fat_impact: -0.05,
  },

  // TAREAS LIC (profesional/riqueza)
  {
    name: 'Networking',
    slug: 'networking',
    description: 'Conectar con contacto profesional',
    archetype: 'lic',
    btc_reward: 25,
    aura_impact: 0.1,
    face_impact: 0.1,
    wealth_impact: 0.3,
    muscle_impact: 0,
    fat_impact: 0,
  },
  {
    name: 'Deep work',
    slug: 'deep-work',
    description: '4 horas de trabajo enfocado',
    archetype: 'lic',
    btc_reward: 30,
    aura_impact: 0.05,
    face_impact: 0,
    wealth_impact: 0.35,
    muscle_impact: 0,
    fat_impact: 0,
  },

  // TAREAS RUBIO (social/carisma)
  {
    name: 'Conversación profunda',
    slug: 'conversacion',
    description: 'Conversación significativa',
    archetype: 'rubio',
    btc_reward: 18,
    aura_impact: 0.25,
    face_impact: 0.15,
    wealth_impact: 0.05,
    muscle_impact: 0,
    fat_impact: 0,
  },
  {
    name: 'Acto de bondad',
    slug: 'bondad',
    description: 'Ayudar a alguien desinteresadamente',
    archetype: 'rubio',
    btc_reward: 15,
    aura_impact: 0.35,
    face_impact: 0.1,
    wealth_impact: 0,
    muscle_impact: 0,
    fat_impact: 0,
  },

  // TAREAS GRENAS (rebeldía/autenticidad)
  {
    name: 'Romper zona confort',
    slug: 'zona-confort',
    description: 'Hacer algo que te incomode',
    archetype: 'grenas',
    btc_reward: 25,
    aura_impact: 0.3,
    face_impact: 0.1,
    wealth_impact: 0.1,
    muscle_impact: 0.05,
    fat_impact: 0,
  },
  {
    name: 'Aprender nuevo',
    slug: 'aprendizaje',
    description: 'Aprender skill nuevo',
    archetype: 'grenas',
    btc_reward: 22,
    aura_impact: 0.2,
    face_impact: 0,
    wealth_impact: 0.2,
    muscle_impact: 0,
    fat_impact: 0,
  },
];

// ============================================
// SHOP ITEMS DATA
// ============================================
const shopItems = [
  // BACKGROUNDS (env_level)
  {
    name: 'Cuarto básico',
    slug: 'bg-cuarto',
    description: 'Habitación simple',
    category: 'background',
    price_btc: 0,
    required_level: 1,
    ai_token: 'simple bedroom background',
  },
  {
    name: 'Apartamento',
    slug: 'bg-apartamento',
    description: 'Apartamento moderno',
    category: 'background',
    price_btc: 500,
    required_level: 3,
    ai_token: 'modern apartment background',
  },
  {
    name: 'Penthouse',
    slug: 'bg-penthouse',
    description: 'Penthouse de lujo',
    category: 'background',
    price_btc: 2000,
    required_level: 6,
    ai_token: 'luxury penthouse background',
  },
  {
    name: 'Mansión',
    slug: 'bg-mansion',
    description: 'Mansión espectacular',
    category: 'background',
    price_btc: 5000,
    required_level: 9,
    ai_token: 'luxurious mansion background',
  },
  {
    name: 'Isla privada',
    slug: 'bg-isla',
    description: 'Tu propia isla',
    category: 'background',
    price_btc: 15000,
    required_level: 12,
    ai_token: 'private island paradise background',
  },

  // CLOTHING
  {
    name: 'Camiseta básica',
    slug: 'cloth-basic',
    description: 'Ropa casual',
    category: 'clothing',
    price_btc: 0,
    required_level: 1,
    ai_token: 'casual basic t-shirt',
  },
  {
    name: 'Ropa deportiva',
    slug: 'cloth-sport',
    description: 'Outfit fitness premium',
    category: 'clothing',
    price_btc: 300,
    required_level: 2,
    ai_token: 'premium athletic wear',
  },
  {
    name: 'Traje elegante',
    slug: 'cloth-suit',
    description: 'Traje a medida',
    category: 'clothing',
    price_btc: 800,
    required_level: 4,
    ai_token: 'tailored business suit',
  },
  {
    name: 'Diseñador',
    slug: 'cloth-designer',
    description: 'Ropa de diseñador',
    category: 'clothing',
    price_btc: 2500,
    required_level: 7,
    ai_token: 'designer luxury clothing',
  },

  // ACCESSORIES
  {
    name: 'Reloj clásico',
    slug: 'acc-watch',
    description: 'Reloj elegante',
    category: 'accessory',
    price_btc: 400,
    required_level: 3,
    ai_token: 'elegant wristwatch',
  },
  {
    name: 'Lentes de sol',
    slug: 'acc-sunglasses',
    description: 'Lentes premium',
    category: 'accessory',
    price_btc: 250,
    required_level: 2,
    ai_token: 'premium sunglasses',
  },
  {
    name: 'Cadena oro',
    slug: 'acc-chain',
    description: 'Cadena de oro',
    category: 'accessory',
    price_btc: 1500,
    required_level: 5,
    ai_token: 'gold chain necklace',
  },

  // EFFECTS
  {
    name: 'Aura básica',
    slug: 'fx-aura-basic',
    description: 'Brillo sutil',
    category: 'effect',
    price_btc: 200,
    required_level: 2,
    ai_token: 'subtle glow aura effect',
  },
  {
    name: 'Aura dorada',
    slug: 'fx-aura-gold',
    description: 'Aura dorada brillante',
    category: 'effect',
    price_btc: 1000,
    required_level: 6,
    ai_token: 'golden radiant aura effect',
  },
  {
    name: 'Aura legendaria',
    slug: 'fx-aura-legend',
    description: 'Aura de poder supremo',
    category: 'effect',
    price_btc: 5000,
    required_level: 10,
    ai_token: 'legendary power aura effect',
  },
];

async function seed(): Promise<void> {
  console.info('🌱 Starting METAMEN100 database seed...\n');

  try {
    // ============================================
    // SEED TASK DEFINITIONS
    // ============================================
    console.info('📋 Seeding task_definitions...');

    const { error: taskError, data: taskData } = await supabase
      .from('task_definitions')
      .upsert(taskDefinitions, { onConflict: 'slug' })
      .select();

    if (taskError) {
      throw new Error(`Task definitions seed failed: ${taskError.message}`);
    }

    console.info(`   ✅ ${taskData?.length ?? 0} task definitions seeded`);

    // ============================================
    // SEED SHOP ITEMS
    // ============================================
    console.info('🛒 Seeding shop_items...');

    const { error: shopError, data: shopData } = await supabase
      .from('shop_items')
      .upsert(shopItems, { onConflict: 'slug' })
      .select();

    if (shopError) {
      throw new Error(`Shop items seed failed: ${shopError.message}`);
    }

    console.info(`   ✅ ${shopData?.length ?? 0} shop items seeded`);

    console.info('\n🎉 Database seed completed successfully!\n');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

// Ejecutar seed
seed();
