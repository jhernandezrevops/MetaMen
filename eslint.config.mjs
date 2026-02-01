/**
 * METAMEN100 - ESLint Configuration
 * Configuración estricta para calidad TOP 100 Mundial
 *
 * @see docs/02_ADRs.md para decisiones de arquitectura
 */
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  // Next.js base configs
  ...nextVitals,
  ...nextTs,

  // Global ignores
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'playwright-report/**',
    'next-env.d.ts',
    '.agents/**',
    'templates/**',
  ]),

  // Custom rules for METAMEN100
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // ========================================
      // TypeScript Estricto
      // ========================================

      // Prohibir 'any' explícito
      '@typescript-eslint/no-explicit-any': 'error',

      // No variables sin usar (excepto las que empiezan con _)
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Consistencia en type vs interface
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // Importar tipos como type imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
        },
      ],

      // ========================================
      // React
      // ========================================

      // Dependencias de useEffect completas
      'react-hooks/exhaustive-deps': 'error',

      // ========================================
      // Seguridad
      // ========================================

      // Prohibir eval
      'no-eval': 'error',

      // Prohibir implied eval
      'no-implied-eval': 'error',

      // Prohibir new Function
      'no-new-func': 'error',

      // ========================================
      // Estilo General
      // ========================================

      // Preferir const sobre let
      'prefer-const': 'error',

      // No var
      'no-var': 'error',

      // Preferir template literals
      'prefer-template': 'warn',

      // Usar === en lugar de ==
      eqeqeq: ['error', 'always', { null: 'ignore' }],

      // No console en producción (warn para permitir durante desarrollo)
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],

      // No debugger
      'no-debugger': 'error',
    },
  },

  // Override para tests - permitir any y otras flexibilidades
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', 'tests/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-console': 'off',
    },
  },

  // Override para scripts - permitir console
  {
    files: ['scripts/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },

  // Override para archivos de configuración
  {
    files: ['*.config.ts', '*.config.mjs', '*.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);

export default eslintConfig;
