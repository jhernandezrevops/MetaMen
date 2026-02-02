/**
 * METAMEN100 - Next.js Middleware
 * Protección de rutas y gestión de autenticación
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 */

import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

/**
 * Middleware principal de la aplicación
 * Maneja la protección de rutas y la sesión de Supabase
 */
export async function middleware(request: NextRequest) {
  return updateSession(request);
}

/**
 * Configuración del matcher
 * Define qué rutas ejecutan el middleware
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
