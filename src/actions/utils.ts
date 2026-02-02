/**
 * METAMEN100 - Server Actions Utilities
 * Utilidades compartidas para Server Actions
 */

import type { z } from 'zod';

/**
 * Tipo de resultado de una acción
 */
export type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: string; code?: string };

/**
 * Crea un resultado exitoso
 */
export function success<T>(data: T): ActionResult<T> {
  return { success: true, data };
}

/**
 * Crea un resultado de error
 */
export function error(message: string, code?: string): ActionResult<never> {
  return { success: false, error: message, code };
}

/**
 * Valida input con Zod
 */
export async function validateInput<T extends z.ZodTypeAny>(
  schema: T,
  input: unknown
): Promise<{ success: true; data: z.infer<T> } | { success: false; error: string }> {
  const result = schema.safeParse(input);

  if (!result.success) {
    const zodError = result.error as unknown as { errors: Array<{ message: string }> };
    const firstError = zodError.errors[0];
    return {
      success: false,
      error: firstError?.message ?? 'Validation error',
    };
  }

  return { success: true, data: result.data };
}

/**
 * Maneja errores de forma consistente
 */
export function handleError(err: unknown): ActionResult<never> {
  if (err instanceof Error) {
    // Mapear errores conocidos
    if (err.message === 'UNAUTHORIZED') {
      return error('No autorizado', 'UNAUTHORIZED');
    }
    return error(err.message);
  }
  return error('Error interno del servidor', 'INTERNAL_ERROR');
}

/**
 * Códigos de error estándar
 */
export const ErrorCodes = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  ALREADY_EXISTS: 'ALREADY_EXISTS',
  INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
  LEVEL_REQUIREMENT_NOT_MET: 'LEVEL_REQUIREMENT_NOT_MET',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;
