/**
 * METAMEN100 - Supabase Admin Client
 * Cliente con service role para operaciones administrativas
 *
 * ⚠️ NUNCA usar en código del cliente (browser)
 * Solo usar en Server Actions o API Routes
 */

import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database.types';
import { getServerEnv } from '@/lib/env';

/**
 * Crea un cliente de Supabase con service role
 * Este cliente tiene acceso completo a la base de datos
 *
 * ⚠️ SOLO USAR EN SERVIDOR
 */
export function createAdminClient() {
  const env = getServerEnv();

  return createClient<Database>(
    process.env['NEXT_PUBLIC_SUPABASE_URL']!,
    env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}

/**
 * Verifica si un usuario es administrador
 * Basado en metadata del usuario en auth.users
 */
export async function isAdmin(userId: string): Promise<boolean> {
  const adminClient = createAdminClient();

  const { data, error } = await adminClient
    .from('users')
    .select('*')
    .eq('supabase_user_id', userId)
    .single();

  if (error || !data) {
    return false;
  }

  return (data as unknown as { is_admin?: boolean }).is_admin ?? false;
}

/**
 * Obtiene estadísticas de admin
 */
export async function getAdminStats() {
  const adminClient = createAdminClient();

  const [{ count: totalUsers }, { count: activeAvatars }, { count: totalTasks }] =
    await Promise.all([
      adminClient.from('users').select('*', { count: 'exact', head: true }),
      adminClient
        .from('avatars')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active'),
      adminClient.from('task_completions').select('*', { count: 'exact', head: true }),
    ]);

  return {
    totalUsers: totalUsers ?? 0,
    activeAvatars: activeAvatars ?? 0,
    totalTasks: totalTasks ?? 0,
  };
}
