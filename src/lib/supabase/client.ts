/**
 * METAMEN100 - Supabase Browser Client
 * Cliente para uso en Client Components
 *
 * @see https://supabase.com/docs/guides/auth/server-side/nextjs
 */

import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/database.types';

/**
 * Crea un cliente de Supabase para el navegador
 * Este cliente es seguro para usar en Client Components
 */
export function createClient() {
  return createBrowserClient<Database>(
    process.env['NEXT_PUBLIC_SUPABASE_URL']!,
    process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY']!
  );
}

// Cliente singleton para uso directo
let clientInstance: ReturnType<typeof createClient> | null = null;

/**
 * Obtiene el cliente de Supabase (singleton)
 */
export function getSupabaseClient() {
  if (!clientInstance) {
    clientInstance = createClient();
  }
  return clientInstance;
}
