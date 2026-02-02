/**
 * METAMEN100 - Supabase Clients Exports
 * Exportaciones centralizadas de clientes Supabase
 */

export { createClient as createBrowserClient } from './client';
export { createClient as createServerClient, getCurrentUser, requireAuth } from './server';
export { updateSession } from './middleware';
export { createAdminClient, isAdmin, getAdminStats } from './admin';
