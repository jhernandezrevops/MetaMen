import { z } from 'zod';

/**
 * METAMEN100 - Environment Variables Validation
 * Valida variables de entorno con Zod para seguridad en runtime
 *
 * @see docs/02_ADRs.md para decisiones de arquitectura
 */

// ============================================
// SCHEMA DE VARIABLES DEL SERVIDOR
// ============================================
const serverEnvSchema = z.object({
  // Supabase
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, 'SUPABASE_SERVICE_ROLE_KEY is required'),
  SUPABASE_PROJECT_ID: z.string().optional(),

  // Stripe
  STRIPE_SECRET_KEY: z.string().min(1, 'STRIPE_SECRET_KEY is required'),
  STRIPE_WEBHOOK_SECRET: z.string().min(1, 'STRIPE_WEBHOOK_SECRET is required'),

  // Replicate
  REPLICATE_API_TOKEN: z.string().optional(),

  // Node environment
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

// ============================================
// SCHEMA DE VARIABLES DEL CLIENTE
// ============================================
const clientEnvSchema = z.object({
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url('Invalid SUPABASE_URL'),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, 'SUPABASE_ANON_KEY is required'),

  // Stripe
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1, 'STRIPE_PUBLISHABLE_KEY is required'),

  // App
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_APP_NAME: z.string().default('METAMEN100'),
});

// ============================================
// TIPOS EXPORTADOS
// ============================================
export type ServerEnv = z.infer<typeof serverEnvSchema>;
export type ClientEnv = z.infer<typeof clientEnvSchema>;

// ============================================
// VALIDACIÓN Y EXPORTACIÓN
// ============================================

/**
 * Valida las variables de entorno del servidor
 * Solo debe llamarse en el servidor (Server Components, API Routes, Server Actions)
 * @throws {Error} Si las variables requeridas no están definidas
 */
export function getServerEnv(): ServerEnv {
  const parsed = serverEnvSchema.safeParse(process.env);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    const errorMessage = Object.entries(errors)
      .map(([key, value]) => `${key}: ${value?.join(', ')}`)
      .join('\n');

    throw new Error(`❌ Invalid server environment variables:\n${errorMessage}`);
  }

  return parsed.data;
}

/**
 * Valida las variables de entorno del cliente
 * Seguro para usar en Client Components
 * @throws {Error} Si las variables requeridas no están definidas
 */
export function getClientEnv(): ClientEnv {
  const clientEnv = {
    NEXT_PUBLIC_SUPABASE_URL: process.env['NEXT_PUBLIC_SUPABASE_URL'],
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'],
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env['NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'],
    NEXT_PUBLIC_APP_URL: process.env['NEXT_PUBLIC_APP_URL'],
    NEXT_PUBLIC_APP_NAME: process.env['NEXT_PUBLIC_APP_NAME'],
  };

  const parsed = clientEnvSchema.safeParse(clientEnv);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    const errorMessage = Object.entries(errors)
      .map(([key, value]) => `${key}: ${value?.join(', ')}`)
      .join('\n');

    throw new Error(`❌ Invalid client environment variables:\n${errorMessage}`);
  }

  return parsed.data;
}

/**
 * Objeto con todas las variables de entorno del cliente
 * Pre-validado para uso directo
 */
export const env = {
  // Supabase
  supabaseUrl: process.env['NEXT_PUBLIC_SUPABASE_URL'] ?? '',
  supabaseAnonKey: process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ?? '',

  // Stripe
  stripePublishableKey: process.env['NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'] ?? '',

  // App
  appUrl: process.env['NEXT_PUBLIC_APP_URL'] ?? 'http://localhost:3000',
  appName: process.env['NEXT_PUBLIC_APP_NAME'] ?? 'METAMEN100',

  // Environment
  isDev: process.env['NODE_ENV'] === 'development',
  isProd: process.env['NODE_ENV'] === 'production',
  isTest: process.env['NODE_ENV'] === 'test',
} as const;
