import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind de forma inteligente
 * Resuelve conflictos y merge clases duplicadas
 *
 * @param inputs - Clases CSS a combinar
 * @returns String de clases combinadas
 *
 * @example
 * cn('px-4 py-2', 'px-6') // → 'py-2 px-6'
 * cn('text-red-500', condition && 'text-blue-500')
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formatea un número como moneda
 * @param value - Valor numérico
 * @param currency - Código de moneda (default: MXN)
 */
export function formatCurrency(value: number, currency = 'MXN'): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
  }).format(value);
}

/**
 * Capitaliza la primera letra de un string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Genera un ID único
 */
export function generateId(): string {
  return crypto.randomUUID();
}

/**
 * Espera un tiempo determinado
 * @param ms - Milisegundos a esperar
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Trunca un string a una longitud máxima
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return `${str.slice(0, length)}...`;
}
