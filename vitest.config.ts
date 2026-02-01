/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

/**
 * METAMEN100 - Vitest Configuration
 * Configuración de tests unitarios
 *
 * @see docs/08_Test_Plan.md para estrategia de testing
 */
export default defineConfig({
  plugins: [react()],

  test: {
    // Entorno de testing (jsdom para React)
    environment: 'jsdom',

    // Archivos de setup que se ejecutan antes de cada test
    setupFiles: ['./tests/setup.ts'],

    // Patrón de archivos de test
    include: ['src/**/*.{test,spec}.{ts,tsx}', 'tests/**/*.{test,spec}.{ts,tsx}'],

    // Excluir directorios
    exclude: ['node_modules', '.next', 'playwright-report', 'tests/e2e/**'],

    // Configuración de coverage
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.d.ts',
        'src/**/*.test.{ts,tsx}',
        'src/**/*.spec.{ts,tsx}',
        'src/types/**',
        'src/app/layout.tsx',
        'src/app/page.tsx',
      ],
      thresholds: {
        // Umbrales mínimos de cobertura
        statements: 70,
        branches: 70,
        functions: 70,
        lines: 70,
      },
    },

    // Globals para no importar describe, it, expect en cada archivo
    globals: true,

    // Reporter
    reporters: ['verbose'],

    // Timeout por test
    testTimeout: 10000,

    // Ejecutar tests en paralelo
    pool: 'threads',

    // Watch mode
    watch: false,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/components'),
      '@/lib': resolve(__dirname, './src/lib'),
      '@/hooks': resolve(__dirname, './src/hooks'),
      '@/types': resolve(__dirname, './src/types'),
      '@/actions': resolve(__dirname, './src/actions'),
    },
  },
});
