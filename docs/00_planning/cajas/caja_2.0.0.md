 📦 CAJA 02: INFRAESTRUCTURA Y DEVOPS

  Desglose Atómico Completo

  ---
  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║                    📦 CAJA 02: INFRAESTRUCTURA Y DEVOPS                              ║
  ║                                                                                      ║
  ║    "La infraestructura invisible es la que permite                                   ║
  ║     que el código visible funcione sin fricción"                                     ║
  ║                                                                                      ║
  ║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
  ║    │                                                                            │   ║
  ║    │   🔧 02.1 Config        🔧 02.2 Linting       🔧 02.3 Git Hooks           │   ║
  ║    │   Proyecto Base         ESLint/Prettier       Husky/Lint-staged           │   ║
  ║    │                                                                            │   ║
  ║    │   🔧 02.4 CI/CD         🔧 02.5 Env Vars      🔧 02.6 Servicios           │   ║
  ║    │   GitHub Actions        Variables Entorno     Externos (Setup)            │   ║
  ║    │                                                                            │   ║
  ║    │   🔧 02.7 Dev Tools     🔧 02.8 Estructura                                │   ║
  ║    │   Antigravity Config    Carpetas Definitiva                               │   ║
  ║    │                                                                            │   ║
  ║    └────────────────────────────────────────────────────────────────────────────┘   ║
  ║                                                                                      ║
  ║    Responsable: Claude (Diseño) + Antigravity (Implementación)                      ║
  ║    Entregables: Archivos de configuración, scripts, workflows                       ║
  ║    Tiempo Estimado: 3-4 horas de implementación                                     ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝

  ---
  ÍNDICE DE DESGLOSE ATÓMICO

  1. #subcaja-021-configuración-del-proyecto
  2. #subcaja-022-linting-y-formatting
  3. #subcaja-023-git-hooks
  4. #subcaja-024-cicd-pipeline
  5. #subcaja-025-variables-de-entorno
  6. #subcaja-026-servicios-externos
  7. #subcaja-027-herramientas-de-desarrollo
  8. #subcaja-028-estructura-de-carpetas

  ---
  SUBCAJA 02.1: Configuración del Proyecto

  Archivos Base de Configuración

  Archivos a Crear/Modificar

  Archivos:
  ├── package.json
  ├── tsconfig.json
  ├── next.config.js
  ├── tailwind.config.ts
  └── postcss.config.js

  Estructura de 02.1.1: package.json

  // package.json - Estructura Completa
  {
    "name": "metamen100",
    "version": "0.1.0",
    "private": true,
    "description": "Sistema Operativo de Conducta - Espejo Bio-Digital",

    "scripts": {
      // Desarrollo
      "dev": "next dev",
      "dev:turbo": "next dev --turbo",

      // Build
      "build": "next build",
      "start": "next start",

      // Linting y Formatting
      "lint": "next lint && eslint . --ext .ts,.tsx",
      "lint:fix": "eslint . --ext .ts,.tsx --fix",
      "format": "prettier --write .",
      "format:check": "prettier --check .",

      // Type Checking
      "type-check": "tsc --noEmit",

      // Testing
      "test": "vitest",
      "test:unit": "vitest run",
      "test:watch": "vitest watch",
      "test:coverage": "vitest run --coverage",
      "test:e2e": "playwright test",
      "test:e2e:ui": "playwright test --ui",

      // Database
      "db:generate": "supabase gen types typescript --project-id $SUPABASE_PROJECT_ID > src/types/database.types.ts",
      "db:migrate": "supabase db push",
      "db:reset": "supabase db reset",
      "db:seed": "tsx scripts/seed.ts",

      // Utilities
      "prepare": "husky install",
      "analyze": "ANALYZE=true next build",
      "clean": "rm -rf .next node_modules/.cache"
    },

    "dependencies": {
      // Framework
      "next": "14.2.x",
      "react": "18.3.x",
      "react-dom": "18.3.x",

      // Supabase
      "@supabase/supabase-js": "2.x",
      "@supabase/ssr": "0.x",

      // UI
      "tailwindcss": "3.4.x",
      "framer-motion": "11.x",
      "lucide-react": "0.x",
      "recharts": "2.x",
      "clsx": "2.x",
      "tailwind-merge": "2.x",

      // Forms & Validation
      "react-hook-form": "7.x",
      "zod": "3.x",
      "@hookform/resolvers": "3.x",

      // State
      "zustand": "4.x",

      // Payments
      "@stripe/stripe-js": "3.x",
      "stripe": "14.x",

      // Utilities
      "date-fns": "3.x",
      "date-fns-tz": "3.x"
    },

    "devDependencies": {
      // TypeScript
      "typescript": "5.4.x",
      "@types/node": "20.x",
      "@types/react": "18.x",
      "@types/react-dom": "18.x",

      // Linting
      "eslint": "8.x",
      "eslint-config-next": "14.x",
      "@typescript-eslint/eslint-plugin": "7.x",
      "@typescript-eslint/parser": "7.x",
      "eslint-plugin-import": "2.x",

      // Formatting
      "prettier": "3.x",
      "prettier-plugin-tailwindcss": "0.x",

      // Git Hooks
      "husky": "9.x",
      "lint-staged": "15.x",

      // Testing
      "vitest": "1.x",
      "@vitejs/plugin-react": "4.x",
      "@testing-library/react": "15.x",
      "@testing-library/jest-dom": "6.x",
      "@playwright/test": "1.x",

      // Supabase CLI
      "supabase": "1.x",

      // Scripts
      "tsx": "4.x"
    },

    "engines": {
      "node": ">=20.0.0",
      "pnpm": ">=8.0.0"
    },

    "packageManager": "pnpm@8.15.0"
  }

  Estructura de 02.1.2: tsconfig.json

  // tsconfig.json - Modo Estricto Completo
  {
    "compilerOptions": {
      // Strict Mode - TODOS habilitados
      "strict": true,
      "noImplicitAny": true,
      "strictNullChecks": true,
      "strictFunctionTypes": true,
      "strictBindCallApply": true,
      "strictPropertyInitialization": true,
      "noImplicitThis": true,
      "useUnknownInCatchVariables": true,
      "alwaysStrict": true,

      // Additional Checks
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "exactOptionalPropertyTypes": true,
      "noImplicitReturns": true,
      "noFallthroughCasesInSwitch": true,
      "noUncheckedIndexedAccess": true,
      "noImplicitOverride": true,
      "noPropertyAccessFromIndexSignature": true,

      // Module Resolution
      "target": "ES2022",
      "lib": ["dom", "dom.iterable", "ES2022"],
      "module": "esnext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,

      // JSX
      "jsx": "preserve",

      // Paths
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"],
        "@/components/*": ["./src/components/*"],
        "@/lib/*": ["./src/lib/*"],
        "@/actions/*": ["./src/actions/*"],
        "@/hooks/*": ["./src/hooks/*"],
        "@/types/*": ["./src/types/*"],
        "@/styles/*": ["./src/styles/*"]
      },

      // Output
      "noEmit": true,
      "incremental": true,

      // Next.js Plugin
      "plugins": [
        { "name": "next" }
      ],

      // Skip lib check for faster builds
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true
    },

    "include": [
      "next-env.d.ts",
      "**/*.ts",
      "**/*.tsx",
      ".next/types/**/*.ts"
    ],

    "exclude": [
      "node_modules",
      ".next",
      "out",
      "coverage",
      "playwright-report"
    ]
  }

  Estructura de 02.1.3: next.config.js

  // next.config.js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    // Experimental features
    experimental: {
      // Server Actions enabled by default in 14.x
      typedRoutes: true,
    },

    // Images
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.supabase.co',
          pathname: '/storage/**',
        },
        {
          protocol: 'https',
          hostname: 'replicate.delivery',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: '*.r2.cloudflarestorage.com',
          pathname: '/**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
    },

    // Headers de Seguridad
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on',
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload',
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=()',
            },
          ],
        },
      ];
    },

    // Redirects
    async redirects() {
      return [
        {
          source: '/app',
          destination: '/dashboard',
          permanent: true,
        },
      ];
    },

    // Webpack (para análisis de bundle)
    webpack: (config, { isServer }) => {
      if (process.env.ANALYZE === 'true') {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: isServer
              ? '../analyze/server.html'
              : './analyze/client.html',
          })
        );
      }
      return config;
    },

    // Logging
    logging: {
      fetches: {
        fullUrl: true,
      },
    },

    // Output
    output: 'standalone',

    // Power by header disabled
    poweredByHeader: false,
  };

  module.exports = nextConfig;

  Estructura de 02.1.4: tailwind.config.ts

  // tailwind.config.ts
  import type { Config } from 'tailwindcss';

  const config: Config = {
    darkMode: 'class',

    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
      extend: {
        // Colores del Design System
        colors: {
          // Backgrounds
          'bg-primary': '#0A0A0B',
          'bg-secondary': '#111113',
          'bg-tertiary': '#1A1A1D',
          'bg-elevated': '#232326',

          // Text
          'text-primary': '#FFFFFF',
          'text-secondary': '#A1A1AA',
          'text-tertiary': '#71717A',
          'text-muted': '#52525B',

          // Accents
          'accent-gold': '#FFD700',
          'accent-gold-dim': '#B8860B',
          'accent-red': '#FF3B30',
          'accent-red-dim': '#8B0000',
          'accent-green': '#30D158',
          'accent-green-dim': '#228B22',
          'accent-blue': '#0A84FF',
          'accent-purple': '#BF5AF2',

          // Semantic
          'success': '#30D158',
          'warning': '#FFD60A',
          'error': '#FF3B30',
          'info': '#0A84FF',

          // Borders
          'border-default': '#27272A',
          'border-subtle': '#1F1F22',
          'border-strong': '#3F3F46',
        },

        // Tipografía
        fontFamily: {
          sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
          mono: ['var(--font-jetbrains)', 'monospace'],
        },

        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['2rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.5rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
        },

        // Espaciado (base 4px)
        spacing: {
          '4.5': '1.125rem',
          '13': '3.25rem',
          '15': '3.75rem',
          '18': '4.5rem',
          '22': '5.5rem',
          '30': '7.5rem',
        },

        // Border Radius
        borderRadius: {
          'sm': '4px',
          'md': '8px',
          'lg': '12px',
          'xl': '16px',
          '2xl': '24px',
        },

        // Sombras
        boxShadow: {
          'glow-gold': '0 0 20px rgba(255, 215, 0, 0.3)',
          'glow-gold-strong': '0 0 40px rgba(255, 215, 0, 0.5)',
          'glow-red': '0 0 20px rgba(255, 59, 48, 0.3)',
          'glow-green': '0 0 20px rgba(48, 209, 88, 0.3)',
          'glow-blue': '0 0 20px rgba(10, 132, 255, 0.3)',
          'elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
          'card': '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
        },

        // Animaciones
        animation: {
          'fade-in': 'fadeIn 0.3s ease-out',
          'fade-out': 'fadeOut 0.3s ease-out',
          'slide-up': 'slideUp 0.3s ease-out',
          'slide-down': 'slideDown 0.3s ease-out',
          'scale-in': 'scaleIn 0.2s ease-out',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
          'shake': 'shake 0.5s ease-in-out',
          'heartbeat': 'heartbeat 1s ease-in-out infinite',
        },

        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeOut: {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
          },
          slideUp: {
            '0%': { transform: 'translateY(10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideDown: {
            '0%': { transform: 'translateY(-10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
          glow: {
            '0%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.2)' },
            '100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' },
          },
          shake: {
            '0%, 100%': { transform: 'translateX(0)' },
            '25%': { transform: 'translateX(-5px)' },
            '75%': { transform: 'translateX(5px)' },
          },
          heartbeat: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
          },
        },

        // Backdrop Blur
        backdropBlur: {
          xs: '2px',
        },

        // Z-Index
        zIndex: {
          '60': '60',
          '70': '70',
          '80': '80',
          '90': '90',
          '100': '100',
        },
      },
    },

    plugins: [
      // Plugin para clases de animación con delay
      function({ addUtilities }) {
        const animationDelays = {
          '.animation-delay-100': { 'animation-delay': '100ms' },
          '.animation-delay-200': { 'animation-delay': '200ms' },
          '.animation-delay-300': { 'animation-delay': '300ms' },
          '.animation-delay-500': { 'animation-delay': '500ms' },
          '.animation-delay-700': { 'animation-delay': '700ms' },
          '.animation-delay-1000': { 'animation-delay': '1000ms' },
        };
        addUtilities(animationDelays);
      },
    ],
  };

  export default config;

  Estructura de 02.1.5: postcss.config.js

  // postcss.config.js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };

  Tareas Atómicas para 02.1

  TAREA-02.1.1:
    Nombre: "Inicializar proyecto Next.js"
    Acción: "Crear proyecto base con pnpm create next-app"
    Responsable: Antigravity
    Comando: |
      pnpm create next-app metamen100 --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
      cd metamen100
    Criterio de Éxito: "Proyecto corre con pnpm dev"
    Prompt para Antigravity: |
      Crea un nuevo proyecto Next.js 14 con:
      - TypeScript
      - Tailwind CSS
      - ESLint
      - App Router
      - Src directory
      - Import alias @/*

  TAREA-02.1.2:
    Nombre: "Configurar package.json completo"
    Acción: "Actualizar package.json con todos los scripts y dependencias"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: "package.json actualizado"
    Criterio de Éxito: "pnpm install sin errores"
    Prompt para Antigravity: |
      Actualiza package.json para incluir:
      - Todos los scripts (dev, build, lint, test, db)
      - Dependencias exactas listadas
      - DevDependencies exactas listadas
      - Engines (node >=20, pnpm >=8)
      - PackageManager pnpm@8.15.0

  TAREA-02.1.3:
    Nombre: "Configurar tsconfig.json estricto"
    Acción: "Actualizar tsconfig.json con modo estricto completo"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: "tsconfig.json actualizado"
    Criterio de Éxito: "pnpm type-check pasa sin errores"
    Prompt para Antigravity: |
      Actualiza tsconfig.json con todas las opciones estrictas:
      - strict: true
      - noImplicitAny: true
      - noUncheckedIndexedAccess: true
      - exactOptionalPropertyTypes: true
      - Y todas las demás opciones listadas

      Incluye los paths aliases para @/components, @/lib, etc.

  TAREA-02.1.4:
    Nombre: "Configurar next.config.js"
    Acción: "Crear configuración de Next.js con headers de seguridad"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: "next.config.js completo"
    Criterio de Éxito: "Build exitoso, headers visibles en respuestas"
    Prompt para Antigravity: |
      Crea next.config.js con:
      - Images remotePatterns para Supabase, Replicate, R2
      - Headers de seguridad (HSTS, X-Frame-Options, CSP básico)
      - Redirects (/app -> /dashboard)
      - Webpack config para bundle analyzer
      - Output standalone
      - PoweredByHeader false

  TAREA-02.1.5:
    Nombre: "Configurar tailwind.config.ts"
    Acción: "Crear configuración de Tailwind con Design System"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: "tailwind.config.ts completo"
    Criterio de Éxito: "Clases personalizadas funcionan en componentes"
    Prompt para Antigravity: |
      Crea tailwind.config.ts con:
      - Colores del Design System (bg-primary, text-secondary, accent-gold, etc.)
      - Tipografía (Inter, JetBrains Mono)
      - Espaciado extendido
      - Border radius customizados
      - Sombras con glow effects
      - Animaciones (fade-in, slide-up, glow, heartbeat)
      - Keyframes completos
      - Plugin para animation-delay

  TAREA-02.1.6:
    Nombre: "Configurar postcss.config.js"
    Acción: "Crear configuración básica de PostCSS"
    Responsable: Antigravity
    Output: "postcss.config.js"
    Criterio de Éxito: "Tailwind procesa correctamente"

  TAREA-02.1.7:
    Nombre: "Instalar dependencias"
    Acción: "Ejecutar pnpm install"
    Responsable: Antigravity
    Comando: "pnpm install"
    Criterio de Éxito: "Instalación sin errores ni vulnerabilidades críticas"

  TAREA-02.1.8:
    Nombre: "Verificar configuración inicial"
    Acción: "Ejecutar build y verificar que todo funciona"
    Responsable: Antigravity
    Comandos: |
      pnpm type-check
      pnpm lint
      pnpm build
    Criterio de Éxito: "Todos los comandos pasan sin errores"

  ---
  SUBCAJA 02.2: Linting y Formatting

  ESLint, Prettier, Configuraciones

  Archivos a Crear

  Archivos:
  ├── .eslintrc.js
  ├── .prettierrc
  ├── .prettierignore
  └── .editorconfig

  Estructura de 02.2.1: .eslintrc.js

  // .eslintrc.js
  module.exports = {
    root: true,

    env: {
      browser: true,
      es2022: true,
      node: true,
    },

    extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/strict',
      'plugin:@typescript-eslint/stylistic',
      'plugin:import/recommended',
      'plugin:import/typescript',
    ],

    parser: '@typescript-eslint/parser',

    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
      ecmaFeatures: {
        jsx: true,
      },
    },

    plugins: [
      '@typescript-eslint',
      'import',
    ],

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },

    rules: {
      // ========================================
      // TypeScript Estricto
      // ========================================

      // Prohibir 'any' explícito
      '@typescript-eslint/no-explicit-any': 'error',

      // Requerir tipos de retorno explícitos en funciones exportadas
      '@typescript-eslint/explicit-function-return-type': ['warn', {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      }],

      // Requerir tipos de retorno en métodos de módulo
      '@typescript-eslint/explicit-module-boundary-types': 'warn',

      // No variables sin usar (excepto las que empiezan con _)
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],

      // Expresiones booleanas estrictas
      '@typescript-eslint/strict-boolean-expressions': ['error', {
        allowString: false,
        allowNumber: false,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
      }],

      // No promesas flotantes
      '@typescript-eslint/no-floating-promises': 'error',

      // Await solo en thenables
      '@typescript-eslint/await-thenable': 'error',

      // No mal uso de promesas
      '@typescript-eslint/no-misused-promises': ['error', {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      }],

      // Preferir nullish coalescing
      '@typescript-eslint/prefer-nullish-coalescing': 'error',

      // Preferir optional chaining
      '@typescript-eslint/prefer-optional-chain': 'error',

      // No non-null assertion innecesaria
      '@typescript-eslint/no-unnecessary-condition': 'warn',

      // Consistencia en type vs interface
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // Importar tipos como type imports
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      }],

      // ========================================
      // React
      // ========================================

      // Dependencias de useEffect completas
      'react-hooks/exhaustive-deps': 'error',

      // No renderizado con leak
      'react/jsx-no-leaked-render': ['error', {
        validStrategies: ['ternary', 'coerce'],
      }],

      // Sin React en scope (Next.js lo inyecta)
      'react/react-in-jsx-scope': 'off',

      // Props en orden alfabético (opcional pero ordenado)
      'react/jsx-sort-props': ['warn', {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      }],

      // ========================================
      // Imports
      // ========================================

      // Orden de imports
      'import/order': ['error', {
        groups: [
          'builtin',     // Node builtins (fs, path)
          'external',    // npm packages
          'internal',    // @ alias imports
          ['parent', 'sibling'], // relative imports
          'index',
          'type',        // type imports last
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'next'],
      }],

      // No imports duplicados
      'import/no-duplicates': 'error',

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
      'prefer-template': 'error',

      // Usar === en lugar de ==
      'eqeqeq': ['error', 'always', { null: 'ignore' }],

      // No console en producción
      'no-console': ['warn', {
        allow: ['warn', 'error', 'info']
      }],

      // No debugger
      'no-debugger': 'error',
    },

    // Overrides para archivos específicos
    overrides: [
      // Tests pueden usar any
      {
        files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts'],
        rules: {
          '@typescript-eslint/no-explicit-any': 'off',
          '@typescript-eslint/no-non-null-assertion': 'off',
        },
      },
      // Scripts pueden usar console
      {
        files: ['scripts/**/*.ts'],
        rules: {
          'no-console': 'off',
        },
      },
      // Config files son CommonJS
      {
        files: ['*.config.js', '*.config.ts'],
        rules: {
          '@typescript-eslint/no-var-requires': 'off',
        },
      },
    ],

    // Archivos a ignorar
    ignorePatterns: [
      'node_modules/',
      '.next/',
      'out/',
      'coverage/',
      'playwright-report/',
      '*.config.js',
      'next-env.d.ts',
    ],
  };

  Estructura de 02.2.2: .prettierrc

  {
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "useTabs": false,
    "trailingComma": "es5",
    "printWidth": 100,
    "bracketSpacing": true,
    "bracketSameLine": false,
    "arrowParens": "always",
    "endOfLine": "lf",
    "quoteProps": "as-needed",
    "jsxSingleQuote": false,
    "proseWrap": "preserve",
    "htmlWhitespaceSensitivity": "css",
    "embeddedLanguageFormatting": "auto",
    "plugins": ["prettier-plugin-tailwindcss"],
    "tailwindFunctions": ["cn", "clsx", "cva"],
    "tailwindConfig": "./tailwind.config.ts"
  }

  Estructura de 02.2.3: .prettierignore

  # Dependencies
  node_modules/

  # Build outputs
  .next/
  out/
  dist/
  build/

  # Coverage
  coverage/

  # Test outputs
  playwright-report/
  test-results/

  # Cache
  .cache/
  *.tsbuildinfo

  # Generated
  src/types/database.types.ts

  # Misc
  *.md
  *.svg
  *.ico
  *.png
  *.jpg
  *.jpeg
  *.gif
  *.woff
  *.woff2
  pnpm-lock.yaml
  package-lock.json

  Estructura de 02.2.4: .editorconfig

  # .editorconfig
  root = true

  [*]
  charset = utf-8
  end_of_line = lf
  indent_size = 2
  indent_style = space
  insert_final_newline = true
  trim_trailing_whitespace = true
  max_line_length = 100

  [*.md]
  trim_trailing_whitespace = false
  max_line_length = off

  [*.{yml,yaml}]
  indent_size = 2

  [Makefile]
  indent_style = tab

  [*.{json,jsonc}]
  indent_size = 2

  Tareas Atómicas para 02.2

  TAREA-02.2.1:
    Nombre: "Crear .eslintrc.js"
    Acción: "Crear archivo de configuración de ESLint"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".eslintrc.js"
    Criterio de Éxito: "pnpm lint ejecuta sin errores de configuración"
    Prompt para Antigravity: |
      Crea .eslintrc.js con las reglas estrictas definidas:
      - TypeScript strict (no-explicit-any, strict-boolean-expressions)
      - React hooks exhaustive-deps como error
      - Import order con grupos específicos
      - Reglas de seguridad (no-eval, no-implied-eval)
      - Overrides para tests y scripts

  TAREA-02.2.2:
    Nombre: "Crear .prettierrc"
    Acción: "Crear archivo de configuración de Prettier"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".prettierrc"
    Criterio de Éxito: "pnpm format funciona correctamente"

  TAREA-02.2.3:
    Nombre: "Crear .prettierignore"
    Acción: "Crear archivo de exclusiones de Prettier"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".prettierignore"

  TAREA-02.2.4:
    Nombre: "Crear .editorconfig"
    Acción: "Crear configuración de editor"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".editorconfig"

  TAREA-02.2.5:
    Nombre: "Instalar dependencias de linting"
    Acción: "Instalar ESLint plugins y Prettier"
    Responsable: Antigravity
    Comando: |
      pnpm add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser \
        eslint-plugin-import eslint-import-resolver-typescript \
        prettier prettier-plugin-tailwindcss
    Criterio de Éxito: "Dependencias instaladas sin errores"

  TAREA-02.2.6:
    Nombre: "Verificar linting"
    Acción: "Ejecutar lint y format:check"
    Responsable: Antigravity
    Comandos: |
      pnpm lint
      pnpm format:check
    Criterio de Éxito: "Ambos comandos pasan"

  ---
  SUBCAJA 02.3: Git Hooks

  Husky, Lint-Staged, Commit Validation

  Archivos a Crear

  Archivos:
  ├── .husky/
  │   ├── pre-commit
  │   └── pre-push
  ├── lint-staged.config.js
  └── commitlint.config.js (opcional)

  Estructura de 02.3.1: Husky Setup

  # Inicialización de Husky
  pnpm exec husky install

  # Crear .husky/pre-commit
  pnpm exec husky add .husky/pre-commit "pnpm exec lint-staged"

  # Crear .husky/pre-push
  pnpm exec husky add .husky/pre-push "pnpm type-check && pnpm test:unit"

  Estructura de 02.3.2: .husky/pre-commit

  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  echo "🔍 Running pre-commit checks..."

  # Run lint-staged
  pnpm exec lint-staged

  # Check for console.log statements in staged files (warn only)
  STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx)$' || true)
  if [ -n "$STAGED_FILES" ]; then
    CONSOLE_LOGS=$(echo "$STAGED_FILES" | xargs grep -l 'console\.log' 2>/dev/null || true)
    if [ -n "$CONSOLE_LOGS" ]; then
      echo "⚠️  Warning: console.log found in:"
      echo "$CONSOLE_LOGS"
      echo "Consider removing before production."
    fi
  fi

  echo "✅ Pre-commit checks passed!"

  Estructura de 02.3.3: .husky/pre-push

  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  echo "🔍 Running pre-push checks..."

  # Type checking
  echo "📝 Type checking..."
  pnpm type-check || {
    echo "❌ Type check failed. Push aborted."
    exit 1
  }

  # Unit tests
  echo "🧪 Running unit tests..."
  pnpm test:unit || {
    echo "❌ Unit tests failed. Push aborted."
    exit 1
  }

  echo "✅ Pre-push checks passed!"

  Estructura de 02.3.4: lint-staged.config.js

  // lint-staged.config.js
  module.exports = {
    // TypeScript/JavaScript files
    '*.{ts,tsx}': [
      'eslint --fix --max-warnings=0',
      'prettier --write',
    ],

    // JavaScript files (config files)
    '*.{js,jsx}': [
      'eslint --fix --max-warnings=0',
      'prettier --write',
    ],

    // JSON files
    '*.json': [
      'prettier --write',
    ],

    // CSS/SCSS files
    '*.{css,scss}': [
      'prettier --write',
    ],

    // Markdown files
    '*.md': [
      'prettier --write',
    ],

    // SQL files (migraciones)
    '*.sql': [
      'prettier --write',
    ],
  };

  Estructura de 02.3.5: commitlint.config.js (Opcional)

  // commitlint.config.js
  // Convención de commits tipo Conventional Commits
  module.exports = {
    extends: ['@commitlint/config-conventional'],

    rules: {
      // Tipos permitidos
      'type-enum': [
        2,
        'always',
        [
          'feat',     // Nueva feature
          'fix',      // Bug fix
          'docs',     // Documentación
          'style',    // Formato, no afecta código
          'refactor', // Refactoring
          'perf',     // Performance
          'test',     // Tests
          'build',    // Build system
          'ci',       // CI/CD
          'chore',    // Mantenimiento
          'revert',   // Revert
        ],
      ],

      // Longitud del subject
      'subject-max-length': [2, 'always', 72],

      // No punto al final del subject
      'subject-full-stop': [2, 'never', '.'],

      // Subject en lowercase
      'subject-case': [2, 'always', 'lower-case'],

      // Body máximo 100 chars por línea
      'body-max-line-length': [2, 'always', 100],
    },
  };

  Tareas Atómicas para 02.3

  TAREA-02.3.1:
    Nombre: "Instalar Husky y Lint-Staged"
    Acción: "Instalar dependencias de git hooks"
    Responsable: Antigravity
    Comando: "pnpm add -D husky lint-staged"
    Criterio de Éxito: "Dependencias instaladas"

  TAREA-02.3.2:
    Nombre: "Inicializar Husky"
    Acción: "Crear directorio .husky y configurar prepare script"
    Responsable: Antigravity
    Comandos: |
      pnpm exec husky install
      # Verificar que package.json tiene "prepare": "husky install"
    Criterio de Éxito: "Directorio .husky creado"

  TAREA-02.3.3:
    Nombre: "Crear pre-commit hook"
    Acción: "Crear .husky/pre-commit"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Comando: |
      pnpm exec husky add .husky/pre-commit "pnpm exec lint-staged"
    Criterio de Éxito: "Hook se ejecuta en commit"

  TAREA-02.3.4:
    Nombre: "Crear pre-push hook"
    Acción: "Crear .husky/pre-push"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Criterio de Éxito: "Hook se ejecuta en push"

  TAREA-02.3.5:
    Nombre: "Crear lint-staged.config.js"
    Acción: "Configurar lint-staged"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Criterio de Éxito: "lint-staged corre correctamente"

  TAREA-02.3.6:
    Nombre: "Verificar hooks"
    Acción: "Hacer commit de prueba"
    Responsable: Antigravity
    Comandos: |
      git add .
      git commit -m "test: verify git hooks"
    Criterio de Éxito: "Hooks se ejecutan y commit se crea"

  TAREA-02.3.7 (Opcional):
    Nombre: "Configurar Commitlint"
    Acción: "Agregar validación de mensajes de commit"
    Responsable: Antigravity
    Comandos: |
      pnpm add -D @commitlint/cli @commitlint/config-conventional
      echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
      pnpm exec husky add .husky/commit-msg 'pnpm exec commitlint --edit $1'
    Criterio de Éxito: "Commits mal formateados son rechazados"

  ---
  SUBCAJA 02.4: CI/CD Pipeline

  GitHub Actions Workflows

  Archivos a Crear

  Archivos:
  ├── .github/
  │   ├── workflows/
  │   │   ├── ci.yml           # Pipeline principal
  │   │   ├── preview.yml      # Deploy de preview (PRs)
  │   │   └── production.yml   # Deploy de producción
  │   ├── dependabot.yml       # Actualizaciones automáticas
  │   └── CODEOWNERS           # Ownership de código

  Estructura de 02.4.1: .github/workflows/ci.yml

  # .github/workflows/ci.yml
  name: CI Pipeline

  on:
    push:
      branches: [main, develop]
    pull_request:
      branches: [main, develop]

  env:
    NODE_VERSION: '20'
    PNPM_VERSION: '8'

  concurrency:
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true

  jobs:
    # ================================================
    # Job 1: Linting y Type Checking
    # ================================================
    lint:
      name:  Lint & Type Check
      runs-on: ubuntu-latest
      timeout-minutes: 10

      steps:
        - name: Checkout code
          uses: actions/checkout@v4

        - name: Setup pnpm
          uses: pnpm/action-setup@v2
          with:
            version: ${{ env.PNPM_VERSION }}

        - name: Setup Node.js
          uses: actions/setup-node@v4
          with:
            node-version: ${{ env.NODE_VERSION }}
            cache: 'pnpm'

        - name: Install dependencies
          run: pnpm install --frozen-lockfile

        - name: Run ESLint
          run: pnpm lint

        - name: Run TypeScript check
          run: pnpm type-check

        - name: Check formatting
          run: pnpm format:check

    # ================================================
    # Job 2: Unit Tests
    # ================================================
    unit-tests:
      name: 🧪 Unit Tests
      runs-on: ubuntu-latest
      needs: lint
      timeout-minutes: 15

      steps:
        - name: Checkout code
          uses: actions/checkout@v4

        - name: Setup pnpm
          uses: pnpm/action-setup@v2
          with:
            version: ${{ env.PNPM_VERSION }}

        - name: Setup Node.js
          uses: actions/setup-node@v4
          with:
            node-version: ${{ env.NODE_VERSION }}
            cache: 'pnpm'

        - name: Install dependencies
          run: pnpm install --frozen-lockfile

        - name: Run unit tests with coverage
          run: pnpm test:coverage

        - name: Upload coverage to Codecov
          uses: codecov/codecov-action@v4
          with:
            files: ./coverage/lcov.info
            fail_ci_if_error: false
            token: ${{ secrets.CODECOV_TOKEN }}

    # ================================================
    # Job 3: Build
    # ================================================
    build:
      name: 🏗️ Build
      runs-on: ubuntu-latest
      needs: lint
      timeout-minutes: 15

      steps:
        - name: Checkout code
          uses: actions/checkout@v4

        - name: Setup pnpm
          uses: pnpm/action-setup@v2
          with:
            version: ${{ env.PNPM_VERSION }}

        - name: Setup Node.js
          uses: actions/setup-node@v4
          with:
            node-version: ${{ env.NODE_VERSION }}
            cache: 'pnpm'

        - name: Install dependencies
          run: pnpm install --frozen-lockfile

        - name: Build application
          run: pnpm build
          env:
            NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
            NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: ${{ secrets.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY }}

        - name: Upload build artifacts
          uses: actions/upload-artifact@v4
          with:
            name: build-output
            path: .next
            retention-days: 1

    # ================================================
    # Job 4: E2E Tests (Solo en PRs a main)
    # ================================================
    e2e-tests:
      name: 🎭 E2E Tests
      runs-on: ubuntu-latest
      needs: [unit-tests, build]
      if: github.event_name == 'pull_request' && github.base_ref == 'main'
      timeout-minutes: 30

      steps:
        - name: Checkout code
          uses: actions/checkout@v4

        - name: Setup pnpm
          uses: pnpm/action-setup@v2
          with:
            version: ${{ env.PNPM_VERSION }}

        - name: Setup Node.js
          uses: actions/setup-node@v4
          with:
            node-version: ${{ env.NODE_VERSION }}
            cache: 'pnpm'

        - name: Install dependencies
          run: pnpm install --frozen-lockfile

        - name: Install Playwright browsers
          run: pnpm exec playwright install --with-deps chromium

        - name: Download build artifacts
          uses: actions/download-artifact@v4
          with:
            name: build-output
            path: .next

        - name: Run E2E tests
          run: pnpm test:e2e
          env:
            NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.TEST_SUPABASE_URL }}
            NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.TEST_SUPABASE_ANON_KEY }}

        - name: Upload Playwright report
          uses: actions/upload-artifact@v4
          if: failure()
          with:
            name: playwright-report
            path: playwright-report/
            retention-days: 7

    # ================================================
    # Job 5: Security Audit
    # ================================================
    security:
      name: 🔒 Security Audit
      runs-on: ubuntu-latest
      needs: lint
      timeout-minutes: 10

      steps:
        - name: Checkout code
          uses: actions/checkout@v4

        - name: Setup pnpm
          uses: pnpm/action-setup@v2
          with:
            version: ${{ env.PNPM_VERSION }}

        - name: Setup Node.js
          uses: actions/setup-node@v4
          with:
            node-version: ${{ env.NODE_VERSION }}
            cache: 'pnpm'

        - name: Install dependencies
          run: pnpm install --frozen-lockfile

        - name: Run security audit
          run: pnpm audit --audit-level=high
          continue-on-error: true

        - name: Run SAST with CodeQL
          uses: github/codeql-action/init@v3
          with:
            languages: javascript-typescript

        - name: Perform CodeQL Analysis
          uses: github/codeql-action/analyze@v3

    # ================================================
    # Job 6: Status Check (Para branch protection)
    # ================================================
    ci-success:
      name: ✅ CI Success
      runs-on: ubuntu-latest
      needs: [lint, unit-tests, build, security]
      if: always()

      steps:
        - name: Check all jobs passed
          run: |
            if [ "${{ needs.lint.result }}" != "success" ] || \
               [ "${{ needs.unit-tests.result }}" != "success" ] || \
               [ "${{ needs.build.result }}" != "success" ] || \
               [ "${{ needs.security.result }}" != "success" ]; then
              echo "One or more jobs failed"
              exit 1
            fi
            echo "All jobs passed!"

  Estructura de 02.4.2: .github/workflows/preview.yml

  # .github/workflows/preview.yml
  name: Preview Deployment

  on:
    pull_request:
      types: [opened, synchronize, reopened]

  env:
    VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
    VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

  jobs:
    deploy-preview:
      name: 🚀 Deploy Preview
      runs-on: ubuntu-latest
      timeout-minutes: 15

      steps:
        - name: Checkout code
          uses: actions/checkout@v4

        - name: Setup pnpm
          uses: pnpm/action-setup@v2
          with:
            version: '8'

        - name: Setup Node.js
          uses: actions/setup-node@v4
          with:
            node-version: '20'
            cache: 'pnpm'

        - name: Install Vercel CLI
          run: pnpm add -g vercel@latest

        - name: Pull Vercel Environment Information
          run: vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}

        - name: Build Project Artifacts
          run: vercel build --token=${{ secrets.VERCEL_TOKEN }}

        - name: Deploy to Vercel Preview
          id: deploy
          run: |
            DEPLOY_URL=$(vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }})
            echo "url=$DEPLOY_URL" >> $GITHUB_OUTPUT

        - name: Comment PR with Preview URL
          uses: actions/github-script@v7
          with:
            script: |
              const url = '${{ steps.deploy.outputs.url }}';
              const body = `## 🚀 Preview Deployment Ready!\n\n**URL:** ${url}\n\n---\n_This preview was deployed
  automatically by GitHub Actions._`;

              // Find existing comment
              const { data: comments } = await github.rest.issues.listComments({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: context.issue.number,
              });

              const botComment = comments.find(comment =>
                comment.user.type === 'Bot' &&
                comment.body.includes('Preview Deployment Ready')
              );

              if (botComment) {
                await github.rest.issues.updateComment({
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  comment_id: botComment.id,
                  body: body,
                });
              } else {
                await github.rest.issues.createComment({
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  issue_number: context.issue.number,
                  body: body,
                });
              }

  Estructura de 02.4.3: .github/workflows/production.yml

  # .github/workflows/production.yml
  name: Production Deployment

  on:
    push:
      branches: [main]

  env:
    VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
    VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

  jobs:
    # Esperar que CI pase
    wait-for-ci:
      name: ⏳ Wait for CI
      runs-on: ubuntu-latest
      steps:
        - name: Wait for CI workflow
          uses: lewagon/wait-on-check-action@v1.3.4
          with:
            ref: ${{ github.sha }}
            check-name: 'CI Success'
            repo-token: ${{ secrets.GITHUB_TOKEN }}
            wait-interval: 10

    deploy-production:
      name: 🚀 Deploy Production
      runs-on: ubuntu-latest
      needs: wait-for-ci
      timeout-minutes: 15
      environment:
        name: production
        url: https://metamen100.com

      steps:
        - name: Checkout code
          uses: actions/checkout@v4

        - name: Setup pnpm
          uses: pnpm/action-setup@v2
          with:
            version: '8'

        - name: Setup Node.js
          uses: actions/setup-node@v4
          with:
            node-version: '20'
            cache: 'pnpm'

        - name: Install Vercel CLI
          run: pnpm add -g vercel@latest

        - name: Pull Vercel Environment Information
          run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}

        - name: Build Project Artifacts
          run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

        - name: Deploy to Vercel Production
          run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}

        # Notificación de deploy exitoso (opcional - Slack)
        - name: Notify Slack
          if: success()
          uses: 8398a7/action-slack@v3
          with:
            status: ${{ job.status }}
            text: ' Production deployment successful!'
            webhook_url: ${{ secrets.SLACK_WEBHOOK }}
          continue-on-error: true

  Estructura de 02.4.4: .github/dependabot.yml

  # .github/dependabot.yml
  version: 2

  updates:
    # npm/pnpm dependencies
    - package-ecosystem: "npm"
      directory: "/"
      schedule:
        interval: "weekly"
        day: "monday"
        time: "09:00"
        timezone: "America/Mexico_City"
      open-pull-requests-limit: 10
      reviewers:
        - "tu-usuario"
      labels:
        - "dependencies"
        - "automated"
      commit-message:
        prefix: "deps"
        include: "scope"
      groups:
        # Agrupar actualizaciones de Next.js
        next:
          patterns:
            - "next"
            - "next-*"
            - "@next/*"
        # Agrupar actualizaciones de React
        react:
          patterns:
            - "react"
            - "react-dom"
            - "@types/react*"
        # Agrupar actualizaciones de testing
        testing:
          patterns:
            - "vitest"
            - "@testing-library/*"
            - "playwright"
            - "@playwright/*"
        # Agrupar actualizaciones de linting
        linting:
          patterns:
            - "eslint*"
            - "@typescript-eslint/*"
            - "prettier*"
      ignore:
        # Ignorar major versions de algunas dependencias críticas
        - dependency-name: "next"
          update-types: ["version-update:semver-major"]

    # GitHub Actions
    - package-ecosystem: "github-actions"
      directory: "/"
      schedule:
        interval: "weekly"
        day: "monday"
      labels:
        - "github-actions"
        - "automated"

  Estructura de 02.4.5: .github/CODEOWNERS

  # .github/CODEOWNERS
  # Propietarios de código para review automático

  # Por defecto, el owner principal
  * @tu-usuario

  # Rutas críticas requieren review específico
  /src/lib/core/ @tu-usuario
  /src/actions/ @tu-usuario
  /supabase/migrations/ @tu-usuario

  # Configuración de CI/CD
  /.github/ @tu-usuario

  # Configuración de seguridad
  /src/middleware.ts @tu-usuario
  /src/lib/supabase/ @tu-usuario

  Tareas Atómicas para 02.4

  TAREA-02.4.1:
    Nombre: "Crear directorio .github/workflows"
    Acción: "Crear estructura de directorios"
    Responsable: Antigravity
    Comando: "mkdir -p .github/workflows"

  TAREA-02.4.2:
    Nombre: "Crear ci.yml"
    Acción: "Crear pipeline principal de CI"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".github/workflows/ci.yml"
    Criterio de Éxito: "Workflow se ejecuta en push/PR"
    Prompt para Antigravity: |
      Crea .github/workflows/ci.yml con:
      - Job lint: ESLint, type-check, format:check
      - Job unit-tests: vitest con coverage
      - Job build: next build
      - Job e2e-tests: playwright (solo en PRs a main)
      - Job security: pnpm audit + CodeQL
      - Job ci-success: status check final

      Usa pnpm, Node 20, concurrency para cancelar runs anteriores.

  TAREA-02.4.3:
    Nombre: "Crear preview.yml"
    Acción: "Crear workflow de preview deployments"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".github/workflows/preview.yml"
    Criterio de Éxito: "PRs generan preview deployments"

  TAREA-02.4.4:
    Nombre: "Crear production.yml"
    Acción: "Crear workflow de deployment a producción"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".github/workflows/production.yml"
    Criterio de Éxito: "Push a main despliega a producción"

  TAREA-02.4.5:
    Nombre: "Crear dependabot.yml"
    Acción: "Configurar Dependabot"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".github/dependabot.yml"
    Criterio de Éxito: "Dependabot crea PRs de actualización"

  TAREA-02.4.6:
    Nombre: "Crear CODEOWNERS"
    Acción: "Configurar ownership de código"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".github/CODEOWNERS"

  TAREA-02.4.7:
    Nombre: "Configurar secrets en GitHub"
    Acción: "Documentar secrets requeridos"
    Responsable: Claude (documentar) + Usuario (configurar)
    Output: "Lista de secrets a configurar"
    Secrets Requeridos: |
      - VERCEL_TOKEN
      - VERCEL_ORG_ID
      - VERCEL_PROJECT_ID
      - NEXT_PUBLIC_SUPABASE_URL
      - NEXT_PUBLIC_SUPABASE_ANON_KEY
      - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      - TEST_SUPABASE_URL
      - TEST_SUPABASE_ANON_KEY
      - CODECOV_TOKEN (opcional)
      - SLACK_WEBHOOK (opcional)

  ---
  SUBCAJA 02.5: Variables de Entorno

  Environment Variables Configuration

  Archivos a Crear

  Archivos:
  ├── .env.example          # Template documentado
  ├── .env.local            # Variables locales (gitignored)
  └── src/lib/env.ts        # Validación con Zod

  Estructura de 02.5.1: .env.example

  # .env.example
  # ============================================
  # METAMEN100 - Environment Variables Template
  # ============================================
  # Copia este archivo a .env.local y completa los valores

  # ============================================
  # SUPABASE
  # ============================================
  # URL del proyecto Supabase (Settings > API)
  NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co

  # Anon Key (pública, safe para frontend)
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

  # Service Role Key (NUNCA exponer en frontend)
  SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

  # Database URL (para migraciones)
  DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres

  # ============================================
  # STRIPE
  # ============================================
  # Publishable Key (pública, safe para frontend)
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx

  # Secret Key (NUNCA exponer en frontend)
  STRIPE_SECRET_KEY=sk_test_xxx

  # Webhook Signing Secret
  STRIPE_WEBHOOK_SECRET=whsec_xxx

  # Price IDs
  STRIPE_PRICE_MONTHLY=price_xxx
  STRIPE_PRICE_YEARLY=price_xxx

  # ============================================
  # REPLICATE (IA Generativa)
  # ============================================
  REPLICATE_API_TOKEN=r8_xxx

  # ============================================
  # APP CONFIG
  # ============================================
  # URL base de la aplicación
  NEXT_PUBLIC_APP_URL=http://localhost:3000

  # Versión de la app (para cache busting)
  NEXT_PUBLIC_APP_VERSION=0.1.0

  # Entorno
  NODE_ENV=development

  # ============================================
  # FEATURE FLAGS (Opcional)
  # ============================================
  NEXT_PUBLIC_ENABLE_ANALYTICS=false
  NEXT_PUBLIC_ENABLE_SENTRY=false

  # ============================================
  # OBSERVABILIDAD (Opcional)
  # ============================================
  # Sentry DSN
  NEXT_PUBLIC_SENTRY_DSN=

  # PostHog API Key
  NEXT_PUBLIC_POSTHOG_KEY=
  NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

  # ============================================
  # RATE LIMITING (Opcional)
  # ============================================
  # Redis URL para rate limiting (Upstash)
  UPSTASH_REDIS_REST_URL=
  UPSTASH_REDIS_REST_TOKEN=

  Estructura de 02.5.2: src/lib/env.ts

  // src/lib/env.ts
  import { z } from 'zod';

  /**
   * Schema de validación para variables de entorno del servidor
   * Estas variables NUNCA se exponen al cliente
   */
  const serverEnvSchema = z.object({
    // Supabase
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, 'SUPABASE_SERVICE_ROLE_KEY is required'),
    DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL').optional(),

    // Stripe
    STRIPE_SECRET_KEY: z.string().startsWith('sk_', 'STRIPE_SECRET_KEY must start with sk_'),
    STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_', 'STRIPE_WEBHOOK_SECRET must start with whsec_'),
    STRIPE_PRICE_MONTHLY: z.string().startsWith('price_', 'STRIPE_PRICE_MONTHLY must start with price_'),
    STRIPE_PRICE_YEARLY: z.string().startsWith('price_', 'STRIPE_PRICE_YEARLY must start with price_'),

    // Replicate
    REPLICATE_API_TOKEN: z.string().startsWith('r8_', 'REPLICATE_API_TOKEN must start with r8_'),

    // Node
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

    // Rate Limiting (opcional)
    UPSTASH_REDIS_REST_URL: z.string().url().optional(),
    UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
  });

  /**
   * Schema de validación para variables de entorno del cliente
   * Estas variables son públicas y se exponen al navegador
   * DEBEN empezar con NEXT_PUBLIC_
   */
  const clientEnvSchema = z.object({
    // Supabase
    NEXT_PUBLIC_SUPABASE_URL: z.string().url('NEXT_PUBLIC_SUPABASE_URL must be a valid URL'),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, 'NEXT_PUBLIC_SUPABASE_ANON_KEY is required'),

    // Stripe
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().startsWith('pk_', 'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY must start with
   pk_'),

    // App
    NEXT_PUBLIC_APP_URL: z.string().url('NEXT_PUBLIC_APP_URL must be a valid URL'),
    NEXT_PUBLIC_APP_VERSION: z.string().default('0.1.0'),

    // Feature Flags
    NEXT_PUBLIC_ENABLE_ANALYTICS: z.string().transform(v => v === 'true').default('false'),
    NEXT_PUBLIC_ENABLE_SENTRY: z.string().transform(v => v === 'true').default('false'),

    // Observabilidad (opcional)
    NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional().or(z.literal('')),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional(),
  });

  // Tipo inferido de las variables del servidor
  export type ServerEnv = z.infer<typeof serverEnvSchema>;

  // Tipo inferido de las variables del cliente
  export type ClientEnv = z.infer<typeof clientEnvSchema>;

  /**
   * Valida y retorna las variables de entorno del servidor
   * Solo llamar en código del servidor (Server Components, API Routes, Server Actions)
   */
  function validateServerEnv(): ServerEnv {
    const parsed = serverEnvSchema.safeParse(process.env);

    if (!parsed.success) {
      console.error('❌ Invalid server environment variables:');
      console.error(parsed.error.flatten().fieldErrors);
      throw new Error('Invalid server environment variables');
    }

    return parsed.data;
  }

  /**
   * Valida y retorna las variables de entorno del cliente
   * Safe para llamar en cualquier lugar
   */
  function validateClientEnv(): ClientEnv {
    const clientEnv = {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
      NEXT_PUBLIC_ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS,
      NEXT_PUBLIC_ENABLE_SENTRY: process.env.NEXT_PUBLIC_ENABLE_SENTRY,
      NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
      NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
      NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    };

    const parsed = clientEnvSchema.safeParse(clientEnv);

    if (!parsed.success) {
      console.error('❌ Invalid client environment variables:');
      console.error(parsed.error.flatten().fieldErrors);
      throw new Error('Invalid client environment variables');
    }

    return parsed.data;
  }

  // Singleton para evitar validación múltiple
  let serverEnvCache: ServerEnv | null = null;
  let clientEnvCache: ClientEnv | null = null;

  /**
   * Variables de entorno del servidor (lazy loaded)
   * @throws Error si las variables no son válidas
   */
  export function getServerEnv(): ServerEnv {
    if (typeof window !== 'undefined') {
      throw new Error('getServerEnv() cannot be called on the client');
    }

    if (serverEnvCache === null) {
      serverEnvCache = validateServerEnv();
    }

    return serverEnvCache;
  }

  /**
   * Variables de entorno del cliente (lazy loaded)
   */
  export function getClientEnv(): ClientEnv {
    if (clientEnvCache === null) {
      clientEnvCache = validateClientEnv();
    }

    return clientEnvCache;
  }

  // Para acceso directo en Server Components
  export const serverEnv = typeof window === 'undefined' ? getServerEnv() : ({} as ServerEnv);

  // Para acceso directo en cualquier lugar
  export const clientEnv = getClientEnv();

  Tareas Atómicas para 02.5

  TAREA-02.5.1:
    Nombre: "Crear .env.example"
    Acción: "Crear template de variables de entorno"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".env.example"
    Criterio de Éxito: "Archivo documentado y completo"
    Prompt para Antigravity: |
      Crea .env.example con todas las variables documentadas:
      - Supabase (URL, anon key, service role, database URL)
      - Stripe (publishable, secret, webhook, price IDs)
      - Replicate API token
      - App config (URL, version)
      - Feature flags opcionales
      - Observabilidad opcional

  TAREA-02.5.2:
    Nombre: "Crear .env.local desde template"
    Acción: "Copiar .env.example a .env.local"
    Responsable: Antigravity
    Comando: "cp .env.example .env.local"
    Nota: "Usuario debe completar valores reales"

  TAREA-02.5.3:
    Nombre: "Verificar .gitignore incluye .env.local"
    Acción: "Asegurar que .env.local está ignorado"
    Responsable: Antigravity
    Comando: "grep -q '.env.local' .gitignore || echo '.env.local' >> .gitignore"

  TAREA-02.5.4:
    Nombre: "Crear src/lib/env.ts"
    Acción: "Crear validación de env vars con Zod"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: "src/lib/env.ts"
    Criterio de Éxito: "App falla en start si faltan variables"
    Prompt para Antigravity: |
      Crea src/lib/env.ts con:
      - serverEnvSchema (variables privadas)
      - clientEnvSchema (variables NEXT_PUBLIC_)
      - Funciones getServerEnv() y getClientEnv()
      - Validación con Zod
      - Tipos exportados ServerEnv y ClientEnv
      - Error descriptivo si faltan variables

  TAREA-02.5.5:
    Nombre: "Verificar validación de env"
    Acción: "Importar env en app y verificar"
    Responsable: Antigravity
    Comando: "pnpm dev"
    Criterio de Éxito: "App inicia sin errores de env"

  ---
  SUBCAJA 02.6: Servicios Externos

  Setup de Servicios (Supabase, Vercel, Stripe, Replicate)

  Documentación de Setup

  02.6: Guía de Setup de Servicios Externos
  │
  ├── 02.6.1 SUPABASE PROJECT SETUP
  │   │
  │   ├── Crear Proyecto
  │   │   ├── Ir a https://supabase.com/dashboard
  │   │   ├── Click "New Project"
  │   │   ├── Nombre: metamen100
  │   │   ├── Database Password: [generar segura]
  │   │   ├── Region: us-east-1 (o más cercana)
  │   │   └── Plan: Free tier para desarrollo
  │   │
  │   ├── Obtener Credenciales
  │   │   ├── Settings > API
  │   │   ├── Copiar Project URL → NEXT_PUBLIC_SUPABASE_URL
  │   │   ├── Copiar anon public key → NEXT_PUBLIC_SUPABASE_ANON_KEY
  │   │   └── Copiar service_role key → SUPABASE_SERVICE_ROLE_KEY
  │   │
  │   ├── Configurar Auth
  │   │   ├── Authentication > Providers
  │   │   ├── Habilitar Email
  │   │   ├── Habilitar Google (configurar OAuth)
  │   │   └── Habilitar Phone (Twilio para SMS)
  │   │
  │   ├── Configurar URL Redirects
  │   │   ├── Authentication > URL Configuration
  │   │   ├── Site URL: http://localhost:3000 (dev)
  │   │   └── Redirect URLs: http://localhost:3000/auth/callback
  │   │
  │   └── Instalar CLI Local
  │       └── pnpm add -D supabase
  │
  ├── 02.6.2 VERCEL PROJECT SETUP
  │   │
  │   ├── Conectar Repositorio
  │   │   ├── Ir a https://vercel.com/new
  │   │   ├── Importar repositorio de GitHub
  │   │   ├── Framework: Next.js (auto-detectado)
  │   │   └── Root Directory: ./
  │   │
  │   ├── Configurar Variables de Entorno
  │   │   ├── Settings > Environment Variables
  │   │   ├── Agregar TODAS las variables de .env.example
  │   │   └── Marcar variables según entorno (Production, Preview, Development)
  │   │
  │   ├── Configurar Dominio
  │   │   ├── Settings > Domains
  │   │   ├── Agregar dominio personalizado
  │   │   └── Configurar DNS según instrucciones
  │   │
  │   └── Obtener Tokens para CI/CD
  │       ├── Settings > Tokens
  │       ├── Crear token con scope del proyecto
  │       ├── Obtener VERCEL_ORG_ID (Account Settings > General)
  │       └── Obtener VERCEL_PROJECT_ID (Project Settings > General)
  │
  ├── 02.6.3 STRIPE ACCOUNT SETUP
  │   │
  │   ├── Crear Cuenta
  │   │   ├── Ir a https://dashboard.stripe.com/register
  │   │   └── Completar verificación de negocio
  │   │
  │   ├── Obtener API Keys
  │   │   ├── Developers > API Keys
  │   │   ├── Copiar Publishable key → NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  │   │   └── Copiar Secret key → STRIPE_SECRET_KEY
  │   │
  │   ├── Crear Productos y Precios
  │   │   ├── Products > Add Product
  │   │   ├── Producto: "MetaMen100 Subscription"
  │   │   ├── Precio Mensual: $19.90 USD/mes (recurring)
  │   │   ├── Precio Anual: $140 USD/año (recurring)
  │   │   └── Copiar Price IDs → STRIPE_PRICE_MONTHLY, STRIPE_PRICE_YEARLY
  │   │
  │   ├── Configurar Webhook
  │   │   ├── Developers > Webhooks
  │   │   ├── Add endpoint: https://metamen100.com/api/webhooks/stripe
  │   │   ├── Events a escuchar:
  │   │   │   ├── checkout.session.completed
  │   │   │   ├── invoice.paid
  │   │   │   ├── invoice.payment_failed
  │   │   │   └── customer.subscription.deleted
  │   │   └── Copiar Signing secret → STRIPE_WEBHOOK_SECRET
  │   │
  │   └── Configurar Customer Portal
  │       ├── Settings > Billing > Customer Portal
  │       ├── Habilitar portal
  │       └── Configurar opciones de cancelación
  │
  ├── 02.6.4 REPLICATE ACCOUNT SETUP
  │   │
  │   ├── Crear Cuenta
  │   │   └── Ir a https://replicate.com
  │   │
  │   ├── Obtener API Token
  │   │   ├── Account Settings > API Tokens
  │   │   └── Copiar token → REPLICATE_API_TOKEN
  │   │
  │   └── Explorar Modelos
  │       ├── Modelo principal: stability-ai/sdxl
  │       └── Alternativa: bytedance/sdxl-lightning-4step (más rápido)
  │
  ├── 02.6.5 REDIS/UPSTASH SETUP (Opcional - Rate Limiting)
  │   │
  │   ├── Crear Cuenta
  │   │   └── Ir a https://upstash.com
  │   │
  │   ├── Crear Database
  │   │   ├── Create Database
  │   │   ├── Name: metamen100-ratelimit
  │   │   ├── Region: us-east-1
  │   │   └── Type: Regional
  │   │
  │   └── Obtener Credenciales
  │       ├── Copiar REST URL → UPSTASH_REDIS_REST_URL
  │       └── Copiar REST Token → UPSTASH_REDIS_REST_TOKEN
  │
  └── 02.6.6 DOMINIOS Y DNS
      │
      ├── Registrar Dominio
      │   └── Usar registrador (Cloudflare, Namecheap, etc.)
      │
      ├── Configurar DNS en Vercel
      │   ├── Agregar dominio en Vercel
      │   ├── Configurar registros DNS según instrucciones
      │   └── Esperar propagación (puede tomar horas)
      │
      └── Configurar SSL
          └── Vercel maneja automáticamente con Let's Encrypt

  Tareas Atómicas para 02.6

  TAREA-02.6.1:
    Nombre: "Crear proyecto en Supabase"
    Acción: "Setup inicial de Supabase"
    Responsable: Usuario (manual)
    Pasos: |
      1. Ir a supabase.com/dashboard
      2. Crear nuevo proyecto "metamen100"
      3. Guardar credenciales en .env.local
      4. Habilitar providers de auth
      5. Configurar redirect URLs
    Criterio de Éxito: "Credenciales en .env.local, auth funcional"

  TAREA-02.6.2:
    Nombre: "Configurar Supabase CLI local"
    Acción: "Inicializar Supabase en el proyecto"
    Responsable: Antigravity
    Comandos: |
      pnpm supabase init
      pnpm supabase link --project-ref [PROJECT_REF]
    Criterio de Éxito: "supabase status muestra proyecto conectado"

  TAREA-02.6.3:
    Nombre: "Crear proyecto en Vercel"
    Acción: "Setup inicial de Vercel"
    Responsable: Usuario (manual)
    Pasos: |
      1. Importar repositorio en Vercel
      2. Configurar variables de entorno
      3. Obtener tokens para CI/CD
    Criterio de Éxito: "Deploy inicial exitoso"

  TAREA-02.6.4:
    Nombre: "Configurar secrets en GitHub"
    Acción: "Agregar secrets para CI/CD"
    Responsable: Usuario (manual)
    Secrets: |
      - VERCEL_TOKEN
      - VERCEL_ORG_ID
      - VERCEL_PROJECT_ID
      - NEXT_PUBLIC_SUPABASE_URL
      - NEXT_PUBLIC_SUPABASE_ANON_KEY
      - (todos los demás)
    Criterio de Éxito: "CI workflow ejecuta sin errores de secrets"

  TAREA-02.6.5:
    Nombre: "Crear cuenta y productos en Stripe"
    Acción: "Setup de Stripe"
    Responsable: Usuario (manual)
    Pasos: |
      1. Crear cuenta en Stripe
      2. Obtener API keys
      3. Crear productos y precios
      4. Configurar webhook
      5. Configurar Customer Portal
    Criterio de Éxito: "Checkout de prueba funcional"

  TAREA-02.6.6:
    Nombre: "Crear cuenta en Replicate"
    Acción: "Setup de Replicate"
    Responsable: Usuario (manual)
    Pasos: |
      1. Crear cuenta en Replicate
      2. Obtener API token
      3. Agregar a .env.local
    Criterio de Éxito: "Generación de imagen de prueba exitosa"

  TAREA-02.6.7:
    Nombre: "Crear guía de setup documentada"
    Acción: "Crear /docs/SETUP_GUIDE.md"
    Responsable: Claude
    Output: "Guía paso a paso para setup de servicios"
    Criterio de Éxito: "Desarrollador nuevo puede hacer setup completo"

  ---
  SUBCAJA 02.7: Herramientas de Desarrollo

  Configuración de Antigravity y Developer Experience

  Archivos a Crear

  Archivos:
  ├── .antigravity/
  │   └── instructions.md     # System prompt para Antigravity
  ├── .vscode/
  │   ├── settings.json       # Configuración de VS Code
  │   ├── extensions.json     # Extensiones recomendadas
  │   └── launch.json         # Configuración de debugging
  └── scripts/
      ├── seed.ts             # Script de seeding de DB
      └── generate-types.ts   # Generación de tipos de Supabase

  Estructura de 02.7.1: .antigravity/instructions.md

  # MetaMen100 - System Instructions para Antigravity

  ## Contexto del Proyecto

  MetaMen100 es un Sistema Operativo de Conducta y espejo bio-digital de alto rendimiento.
  Es una aplicación de gamificación de hábitos con IA generativa que transforma la vida
  de hombres en un protocolo de 100 días.

  ## Stack Tecnológico

  - **Framework**: Next.js 14+ con App Router
  - **Lenguaje**: TypeScript 5.4+ (modo estricto)
  - **Estilos**: Tailwind CSS 3.4+
  - **Base de Datos**: PostgreSQL via Supabase
  - **Auth**: Supabase Auth
  - **Pagos**: Stripe
  - **IA Generativa**: Replicate API (SDXL)
  - **State Management**: Zustand
  - **Testing**: Vitest + Playwright

  ## Estructura de Carpetas

  src/
  ├── app/                    # App Router pages
  │   ├── (auth)/            # Grupo de rutas de auth
  │   ├── (dashboard)/       # Grupo de rutas protegidas
  │   └── api/               # API Routes (solo webhooks)
  ├── components/
  │   ├── ui/                # Componentes base reutilizables
  │   └── [domain]/          # Componentes por dominio
  ├── lib/
  │   ├── core/              # Lógica de negocio PURA (sin I/O)
  │   ├── supabase/          # Clientes de Supabase
  │   └── utils/             # Utilidades generales
  ├── actions/               # Server Actions
  ├── hooks/                 # Custom React hooks
  ├── types/                 # Tipos TypeScript
  └── styles/                # Estilos globales

  ## Reglas de Código OBLIGATORIAS

  ### TypeScript
  1. NUNCA usar `any` - usar `unknown` y narrowing
  2. Tipos explícitos en funciones exportadas
  3. Usar `interface` para objetos, `type` para uniones/intersecciones
  4. Importar tipos con `import type { }`

  ### Validación
  1. TODOS los inputs validados con Zod en el servidor
  2. Crear schemas reutilizables en `/lib/validations/`
  3. Nunca confiar en datos del cliente

  ### Server Actions
  1. Siempre verificar autenticación primero
  2. Verificar ownership de recursos
  3. Usar transacciones para operaciones multi-tabla
  4. Retornar formato estándar: `{ success: boolean, data?: T, error?: string }`

  ### Componentes
  1. Server Components por defecto
  2. `'use client'` solo cuando sea necesario
  3. Props con tipos explícitos
  4. Composición sobre herencia

  ### Error Handling
  1. Usar try/catch con errores tipados
  2. Logging estructurado con contexto
  3. Nunca exponer stack traces al cliente
  4. Códigos de error consistentes

  ## Patrones de Código

  ### Server Action Example
  ```typescript
  'use server';

  import { z } from 'zod';
  import { createClient } from '@/lib/supabase/server';
  import { revalidatePath } from 'next/cache';

  const inputSchema = z.object({
    taskId: z.string().uuid(),
  });

  export async function completeTask(input: unknown) {
    // 1. Validar input
    const parsed = inputSchema.safeParse(input);
    if (!parsed.success) {
      return { success: false, error: 'VALIDATION_ERROR' };
    }

    // 2. Verificar auth
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return { success: false, error: 'UNAUTHORIZED' };
    }

    // 3. Ejecutar lógica
    try {
      // ... lógica de negocio
      revalidatePath('/dashboard');
      return { success: true, data: result };
    } catch (error) {
      console.error('[completeTask]', error);
      return { success: false, error: 'INTERNAL_ERROR' };
    }
  }

  Mecánicas del Sistema (Cuestionario1)

  Vectores

  - AURA (aura_lvl): 1-13, Arquetipo Mental
  - JAWLINE (face_lvl): 1-13, Arquetipo Cara
  - WEALTH (wealth_lvl): 1-13, Arquetipo Productividad
  - PHYSIQUE: muscle_lvl (1-13) + fat_lvl (13-1 inverso)
  - ENV (env_lvl): 1-13, Progresión temporal

  Niveles (1-10 + 3 post-game)

  1. Indigente → 2. Arrimado → 3. Alucín → 4. Chalán → 5. Godín
  → 6. Acomodado → 7. Pudiente → 8. Millonario → 9. Magnate → 10. Semi-Dios

  Sistema de Salud

  - 10 corazones base (expandible a 13)
  - -1 corazón si día < 80% completado
  - +1 corazón por racha de 7 días
  - 0 corazones = muerte del avatar

  Comandos Útiles

  pnpm dev          # Desarrollo
  pnpm build        # Build
  pnpm lint         # Linting
  pnpm type-check   # Type checking
  pnpm test         # Unit tests
  pnpm test:e2e     # E2E tests
  pnpm db:generate  # Generar tipos de DB

  Antes de Generar Código

  1. Lee los archivos relevantes en /docs
  2. Verifica los tipos en /src/types
  3. Sigue las convenciones existentes
  4. Incluye manejo de errores completo
  5. Incluye validación de inputs

  ### Estructura de 02.7.2: .vscode/settings.json

  ```json
  {
    // Editor
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "explicit"
    },
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.rulers": [100],
    "editor.wordWrap": "on",

    // Files
    "files.eol": "\n",
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "files.exclude": {
      "**/.next": true,
      "**/node_modules": true,
      "**/coverage": true
    },

    // TypeScript
    "typescript.preferences.importModuleSpecifier": "non-relative",
    "typescript.updateImportsOnFileMove.enabled": "always",
    "typescript.tsdk": "node_modules/typescript/lib",

    // ESLint
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact"
    ],
    "eslint.workingDirectories": ["."],

    // Prettier
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    // Tailwind CSS
    "tailwindCSS.experimental.classRegex": [
      ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
      ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
      ["cva\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
    ],
    "tailwindCSS.includeLanguages": {
      "typescript": "javascript",
      "typescriptreact": "javascript"
    },

    // Search
    "search.exclude": {
      "**/node_modules": true,
      "**/.next": true,
      "**/coverage": true,
      "**/pnpm-lock.yaml": true
    }
  }

  Estructura de 02.7.3: .vscode/extensions.json

  {
    "recommendations": [
      // Essential
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode",
      "bradlc.vscode-tailwindcss",

      // TypeScript
      "ms-vscode.vscode-typescript-next",

      // React
      "dsznajder.es7-react-js-snippets",
      "formulahendry.auto-rename-tag",

      // Git
      "eamodio.gitlens",
      "mhutchie.git-graph",

      // Testing
      "ZixuanChen.vitest-explorer",
      "ms-playwright.playwright",

      // Utilities
      "christian-kohler.path-intellisense",
      "streetsidesoftware.code-spell-checker",
      "streetsidesoftware.code-spell-checker-spanish",

      // Themes (opcional)
      "GitHub.github-vscode-theme"
    ],
    "unwantedRecommendations": []
  }

  Estructura de 02.7.4: .vscode/launch.json

  {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Next.js: debug server-side",
        "type": "node-terminal",
        "request": "launch",
        "command": "pnpm dev"
      },
      {
        "name": "Next.js: debug client-side",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:3000"
      },
      {
        "name": "Next.js: debug full stack",
        "type": "node-terminal",
        "request": "launch",
        "command": "pnpm dev",
        "serverReadyAction": {
          "pattern": "started server on .+, url: (https?://.+)",
          "uriFormat": "%s",
          "action": "debugWithChrome"
        }
      }
    ]
  }

  Estructura de 02.7.5: scripts/seed.ts

  // scripts/seed.ts
  import { createClient } from '@supabase/supabase-js';
  import { config } from 'dotenv';

  // Cargar variables de entorno
  config({ path: '.env.local' });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  async function seedStoreItems() {
    console.log('🌱 Seeding store items...');

    const storeItems = [
      // Armadura - Nivel 1-2
      {
        name: 'Harapos de Superviviente',
        description: 'Ropa desgastada pero funcional',
        category: 'armor',
        rarity: 'common',
        price_btc: 0,
        level_required: 1,
        prompt_tokens: 'wearing torn dirty clothes, ragged outfit',
      },
      // ... más items
    ];

    const { error } = await supabase.from('store_items').upsert(storeItems);

    if (error) {
      console.error('Error seeding store items:', error);
      process.exit(1);
    }

    console.log(`✅ Seeded ${storeItems.length} store items`);
  }

  async function main() {
    console.log('🚀 Starting database seed...\n');

    await seedStoreItems();

    console.log('\n✨ Seed completed successfully!');
    process.exit(0);
  }

  main().catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  });

  Tareas Atómicas para 02.7

  TAREA-02.7.1:
    Nombre: "Crear directorio .antigravity"
    Acción: "Crear carpeta de configuración de Antigravity"
    Responsable: Antigravity
    Comando: "mkdir -p .antigravity"

  TAREA-02.7.2:
    Nombre: "Crear instructions.md para Antigravity"
    Acción: "Crear system prompt documentado"
    Responsable: Claude
    Input: "Estructura definida arriba"
    Output: ".antigravity/instructions.md"
    Criterio de Éxito: "Antigravity tiene contexto completo del proyecto"

  TAREA-02.7.3:
    Nombre: "Crear .vscode/settings.json"
    Acción: "Configurar VS Code"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".vscode/settings.json"
    Criterio de Éxito: "Format on save funciona"

  TAREA-02.7.4:
    Nombre: "Crear .vscode/extensions.json"
    Acción: "Configurar extensiones recomendadas"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".vscode/extensions.json"

  TAREA-02.7.5:
    Nombre: "Crear .vscode/launch.json"
    Acción: "Configurar debugging"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: ".vscode/launch.json"

  TAREA-02.7.6:
    Nombre: "Crear scripts/seed.ts"
    Acción: "Crear script de seeding"
    Responsable: Antigravity
    Input: "Estructura definida arriba"
    Output: "scripts/seed.ts"
    Criterio de Éxito: "pnpm db:seed ejecuta sin errores"

  TAREA-02.7.7:
    Nombre: "Verificar configuración de dev tools"
    Acción: "Probar todas las herramientas"
    Responsable: Antigravity
    Comandos: |
      # Verificar format on save
      # Verificar ESLint en editor
      # Verificar Tailwind IntelliSense
      # Verificar debugging
    Criterio de Éxito: "Todas las herramientas funcionan"

  ---
  SUBCAJA 02.8: Estructura de Carpetas

  Árbol de Directorios Definitivo

  Estructura Completa del Proyecto

  metamen100/
  │
  ├── .github/
  │   ├── workflows/
  │   │   ├── ci.yml
  │   │   ├── preview.yml
  │   │   └── production.yml
  │   ├── dependabot.yml
  │   └── CODEOWNERS
  │
  ├── .husky/
  │   ├── pre-commit
  │   └── pre-push
  │
  ├── .vscode/
  │   ├── settings.json
  │   ├── extensions.json
  │   └── launch.json
  │
  ├── .antigravity/
  │   └── instructions.md
  │
  ├── docs/
  │   ├── 01_PRD.md
  │   ├── 02_ADRs.md
  │   ├── 03_TECH_SPEC.md
  │   ├── 04_DATA_MODEL.md
  │   ├── 05_GDD.md
  │   ├── 06_CONTENT.md
  │   ├── 07_UIUX.md
  │   ├── 08_TEST_PLAN.md
  │   ├── 09_SECURITY.md
  │   └── SETUP_GUIDE.md
  │
  ├── public/
  │   ├── favicon.ico
  │   ├── fonts/
  │   │   ├── Inter-Variable.woff2
  │   │   └── JetBrainsMono-Variable.woff2
  │   └── images/
  │       ├── logo.svg
  │       └── og-image.png
  │
  ├── scripts/
  │   ├── seed.ts
  │   └── generate-types.ts
  │
  ├── supabase/
  │   ├── migrations/
  │   │   └── 00000000000000_init.sql
  │   ├── seed.sql
  │   └── config.toml
  │
  ├── src/
  │   │
  │   ├── app/
  │   │   ├── layout.tsx                 # Root layout
  │   │   ├── page.tsx                   # Landing page
  │   │   ├── loading.tsx                # Global loading
  │   │   ├── error.tsx                  # Global error
  │   │   ├── not-found.tsx              # 404 page
  │   │   ├── globals.css                # Estilos globales
  │   │   │
  │   │   ├── (marketing)/               # Grupo: páginas públicas
  │   │   │   ├── layout.tsx
  │   │   │   ├── pricing/
  │   │   │   │   └── page.tsx
  │   │   │   └── about/
  │   │   │       └── page.tsx
  │   │   │
  │   │   ├── (auth)/                    # Grupo: autenticación
  │   │   │   ├── layout.tsx
  │   │   │   ├── login/
  │   │   │   │   └── page.tsx
  │   │   │   ├── register/
  │   │   │   │   └── page.tsx
  │   │   │   ├── forgot-password/
  │   │   │   │   └── page.tsx
  │   │   │   └── auth/
  │   │   │       └── callback/
  │   │   │           └── route.ts       # OAuth callback
  │   │   │
  │   │   ├── (onboarding)/              # Grupo: onboarding
  │   │   │   ├── layout.tsx
  │   │   │   └── onboarding/
  │   │   │       └── page.tsx
  │   │   │
  │   │   ├── (dashboard)/               # Grupo: app principal (protegido)
  │   │   │   ├── layout.tsx
  │   │   │   │
  │   │   │   ├── dashboard/
  │   │   │   │   ├── page.tsx           # Dashboard principal
  │   │   │   │   ├── loading.tsx
  │   │   │   │   │
  │   │   │   │   ├── tasks/
  │   │   │   │   │   └── page.tsx       # Tareas del día
  │   │   │   │   │
  │   │   │   │   ├── analytics/
  │   │   │   │   │   └── page.tsx       # Estadísticas
  │   │   │   │   │
  │   │   │   │   ├── profile/
  │   │   │   │   │   └── page.tsx       # Perfil
  │   │   │   │   │
  │   │   │   │   ├── store/
  │   │   │   │   │   └── page.tsx       # Tienda
  │   │   │   │   │
  │   │   │   │   ├── inventory/
  │   │   │   │   │   └── page.tsx       # Inventario
  │   │   │   │   │
  │   │   │   │   └── tools/             # Arsenal de herramientas
  │   │   │   │       ├── page.tsx       # Lista de herramientas
  │   │   │   │       ├── library/
  │   │   │   │       │   └── page.tsx   # Biblioteca de Poder
  │   │   │   │       ├── gym/
  │   │   │   │       │   └── page.tsx   # Templo del Hierro
  │   │   │   │       ├── meditation/
  │   │   │   │       │   └── page.tsx   # Cámara de Meditación
  │   │   │   │       ├── journal/
  │   │   │   │       │   └── page.tsx   # Bitácora de Guerra
  │   │   │   │       ├── kegel/
  │   │   │   │       │   └── page.tsx   # Vitalidad Sexual
  │   │   │   │       ├── facial/
  │   │   │   │       │   └── page.tsx   # Escultor Facial
  │   │   │   │       ├── hypnosis/
  │   │   │   │       │   └── page.tsx   # Crea tu Hipnosis [Premium]
  │   │   │   │       ├── mobility/
  │   │   │   │       │   └── page.tsx   # Movilidad Táctica
  │   │   │   │       └── focus/
  │   │   │   │           └── page.tsx   # Focus Chamber
  │   │   │   │
  │   │   │   └── blocked/
  │   │   │       └── page.tsx           # Pantalla de trial expirado
  │   │   │
  │   │   └── api/
  │   │       └── webhooks/
  │   │           ├── stripe/
  │   │           │   └── route.ts       # Webhook de Stripe
  │   │           └── replicate/
  │   │               └── route.ts       # Webhook de Replicate (futuro)
  │   │
  │   ├── components/
  │   │   │
  │   │   ├── ui/                        # Componentes base reutilizables
  │   │   │   ├── button.tsx
  │   │   │   ├── card.tsx
  │   │   │   ├── input.tsx
  │   │   │   ├── modal.tsx
  │   │   │   ├── toast.tsx
  │   │   │   ├── skeleton.tsx
  │   │   │   ├── progress.tsx
  │   │   │   ├── badge.tsx
  │   │   │   ├── tooltip.tsx
  │   │   │   └── index.ts               # Barrel export
  │   │   │
  │   │   ├── layout/                    # Componentes de layout
  │   │   │   ├── header.tsx
  │   │   │   ├── sidebar.tsx
  │   │   │   ├── bottom-nav.tsx
  │   │   │   └── footer.tsx
  │   │   │
  │   │   ├── auth/                      # Componentes de auth
  │   │   │   ├── login-form.tsx
  │   │   │   ├── register-form.tsx
  │   │   │   └── oauth-buttons.tsx
  │   │   │
  │   │   ├── onboarding/                # Componentes de onboarding
  │   │   │   ├── welcome-step.tsx
  │   │   │   ├── archetype-selector.tsx
  │   │   │   ├── vectors-tutorial.tsx
  │   │   │   ├── oath-ceremony.tsx
  │   │   │   └── notifications-setup.tsx
  │   │   │
  │   │   ├── dashboard/                 # Componentes del dashboard
  │   │   │   ├── avatar-display.tsx
  │   │   │   ├── health-bar.tsx
  │   │   │   ├── level-banner.tsx
  │   │   │   ├── stats-card.tsx
  │   │   │   ├── vectors-radar.tsx
  │   │   │   ├── time-matrix.tsx
  │   │   │   └── countdown-timer.tsx
  │   │   │
  │   │   ├── tasks/                     # Componentes de tareas
  │   │   │   ├── task-list.tsx
  │   │   │   ├── task-card.tsx
  │   │   │   ├── task-checkbox.tsx
  │   │   │   └── progress-indicator.tsx
  │   │   │
  │   │   ├── store/                     # Componentes de tienda
  │   │   │   ├── item-grid.tsx
  │   │   │   ├── item-card.tsx
  │   │   │   ├── item-modal.tsx
  │   │   │   └── category-filter.tsx
  │   │   │
  │   │   ├── tools/                     # Componentes de herramientas
  │   │   │   ├── tool-layout.tsx
  │   │   │   ├── timer.tsx
  │   │   │   ├── audio-player.tsx
  │   │   │   └── progress-tracker.tsx
  │   │   │
  │   │   └── shared/                    # Componentes compartidos
  │   │       ├── error-boundary.tsx
  │   │       ├── loading-spinner.tsx
  │   │       └── providers.tsx
  │   │
  │   ├── lib/
  │   │   │
  │   │   ├── core/                      # Lógica de negocio PURA (sin I/O)
  │   │   │   ├── vectors.ts             # Cálculos de vectores
  │   │   │   ├── levels.ts              # Cálculos de niveles
  │   │   │   ├── health.ts              # Lógica de salud
  │   │   │   ├── streak.ts              # Lógica de racha
  │   │   │   ├── judgement.ts           # Lógica de Judgement Night
  │   │   │   ├── death.ts               # Lógica de muerte/resurrección
  │   │   │   ├── economy.ts             # Cálculos de BTC
  │   │   │   ├── validations.ts         # Validaciones de negocio
  │   │   │   ├── constants.ts           # Constantes del sistema
  │   │   │   └── index.ts               # Barrel export
  │   │   │
  │   │   ├── supabase/                  # Clientes de Supabase
  │   │   │   ├── client.ts              # Cliente para browser
  │   │   │   ├── server.ts              # Cliente para server
  │   │   │   ├── middleware.ts          # Cliente para middleware
  │   │   │   └── admin.ts               # Cliente con service role
  │   │   │
  │   │   ├── stripe/                    # Integración con Stripe
  │   │   │   ├── client.ts              # Stripe client
  │   │   │   └── webhooks.ts            # Webhook handlers
  │   │   │
  │   │   ├── replicate/                 # Integración con Replicate
  │   │   │   ├── client.ts              # Replicate client
  │   │   │   └── prompts.ts             # Prompt builder
  │   │   │
  │   │   ├── validations/               # Schemas de Zod
  │   │   │   ├── auth.ts
  │   │   │   ├── tasks.ts
  │   │   │   ├── store.ts
  │   │   │   └── profile.ts
  │   │   │
  │   │   ├── utils/                     # Utilidades generales
  │   │   │   ├── cn.ts                  # clsx + tailwind-merge
  │   │   │   ├── format.ts              # Formateo de datos
  │   │   │   └── date.ts                # Utilidades de fecha
  │   │   │
  │   │   ├── env.ts                     # Validación de env vars
  │   │   └── logger.ts                  # Logging estructurado
  │   │
  │   ├── actions/                       # Server Actions
  │   │   ├── auth/
  │   │   │   ├── login.ts
  │   │   │   ├── register.ts
  │   │   │   ├── logout.ts
  │   │   │   └── verify-phone.ts
  │   │   │
  │   │   ├── tasks/
  │   │   │   ├── get-today-tasks.ts
  │   │   │   ├── complete-task.ts
  │   │   │   └── create-custom-task.ts
  │   │   │
  │   │   ├── store/
  │   │   │   ├── get-items.ts
  │   │   │   └── purchase-item.ts
  │   │   │
  │   │   ├── inventory/
  │   │   │   ├── get-inventory.ts
  │   │   │   └── equip-item.ts
  │   │   │
  │   │   ├── profile/
  │   │   │   ├── get-profile.ts
  │   │   │   └── update-profile.ts
  │   │   │
  │   │   └── payments/
  │   │       ├── create-checkout.ts
  │   │       └── create-portal-session.ts
  │   │
  │   ├── hooks/                         # Custom React hooks
  │   │   ├── use-avatar-state.ts
  │   │   ├── use-realtime-avatar.ts
  │   │   ├── use-realtime-wallet.ts
  │   │   ├── use-countdown.ts
  │   │   ├── use-timer.ts
  │   │   └── use-media-query.ts
  │   │
  │   ├── stores/                        # Zustand stores
  │   │   ├── user-store.ts
  │   │   └── ui-store.ts
  │   │
  │   ├── types/                         # Tipos TypeScript
  │   │   ├── database.types.ts          # Tipos generados de Supabase
  │   │   ├── domain.ts                  # Tipos de dominio
  │   │   ├── api.ts                     # Tipos de API responses
  │   │   └── index.ts                   # Barrel export
  │   │
  │   ├── styles/                        # Estilos adicionales
  │   │   └── fonts.ts                   # Configuración de fonts
  │   │
  │   └── middleware.ts                  # Next.js middleware (auth)
  │
  ├── tests/
  │   ├── unit/                          # Tests unitarios
  │   │   └── lib/
  │   │       └── core/
  │   │           ├── vectors.test.ts
  │   │           ├── levels.test.ts
  │   │           ├── health.test.ts
  │   │           └── ...
  │   │
  │   ├── integration/                   # Tests de integración
  │   │   └── actions/
  │   │       ├── tasks.test.ts
  │   │       └── ...
  │   │
  │   └── e2e/                           # Tests E2E (Playwright)
  │       ├── auth.spec.ts
  │       ├── onboarding.spec.ts
  │       ├── dashboard.spec.ts
  │       └── ...
  │
  ├── .env.example
  ├── .env.local                         # (gitignored)
  ├── .eslintrc.js
  ├── .gitignore
  ├── .prettierrc
  ├── .prettierignore
  ├── .editorconfig
  ├── commitlint.config.js
  ├── lint-staged.config.js
  ├── next.config.js
  ├── package.json
  ├── pnpm-lock.yaml
  ├── postcss.config.js
  ├── tailwind.config.ts
  ├── tsconfig.json
  ├── vitest.config.ts
  ├── playwright.config.ts
  └── README.md

  Tareas Atómicas para 02.8

  TAREA-02.8.1 (Continuación):
    Comando: |
      # Crear estructura de src
      mkdir -p src/{app,components,lib,actions,hooks,stores,types,styles}

      # App router groups
      mkdir -p "src/app/(marketing)"
      mkdir -p "src/app/(auth)/login" "src/app/(auth)/register" "src/app/(auth)/auth/callback"
      mkdir -p "src/app/(onboarding)/onboarding"
      mkdir -p "src/app/(dashboard)/dashboard/{tasks,analytics,profile,store,inventory}"
      mkdir -p "src/app/(dashboard)/dashboard/tools/{library,gym,meditation,journal,kegel,facial,hypnosis,mobility,focus}"
      mkdir -p "src/app/(dashboard)/blocked"
      mkdir -p "src/app/api/webhooks/{stripe,replicate}"

      # Components
      mkdir -p src/components/{ui,layout,auth,onboarding,dashboard,tasks,store,tools,shared}

      # Lib
      mkdir -p src/lib/{core,supabase,stripe,replicate,validations,utils}

      # Actions
      mkdir -p src/actions/{auth,tasks,store,inventory,profile,payments}

      # Other src folders
      mkdir -p src/{hooks,stores,types,styles}

      # Root folders
      mkdir -p {docs,public/{fonts,images},scripts,supabase/migrations,tests/{unit/lib/core,integration/actions,e2e}}

      # Config folders
      mkdir -p .github/workflows .husky .vscode .antigravity

    Criterio de Éxito: "Estructura de carpetas completa creada"

  TAREA-02.8.2:
    Nombre: "Crear archivos placeholder"
    Acción: "Crear archivos index.ts y .gitkeep en carpetas vacías"
    Responsable: Antigravity
    Comando: |
      # Crear barrel exports
      touch src/components/ui/index.ts
      touch src/lib/core/index.ts
      touch src/types/index.ts

      # Crear .gitkeep en carpetas que estarán vacías inicialmente
      touch public/fonts/.gitkeep
      touch public/images/.gitkeep
      touch supabase/migrations/.gitkeep

    Criterio de Éxito: "Git puede trackear carpetas vacías"

  TAREA-02.8.3:
    Nombre: "Documentar estructura en README"
    Acción: "Actualizar README.md con descripción de carpetas"
    Responsable: Claude
    Output: "README.md con sección de estructura"
    Criterio de Éxito: "Desarrollador nuevo entiende la organización"

  ---
  RESUMEN DE CAJA 02: INFRAESTRUCTURA Y DEVOPS

  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║                    📦 CAJA 02 - RESUMEN DE ENTREGABLES                              ║
  ║                                                                                      ║
  ╠══════════════════════════════════════════════════════════════════════════════════════╣
  ║                                                                                      ║
  ║  SUBCAJA              │ ARCHIVOS PRINCIPALES           │ TAREAS │ RESPONSABLE       ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  02.1 Config Proyecto │ package.json, tsconfig.json,   │   8    │ Antigravity       ║
  ║                       │ next.config.js, tailwind.config│        │                   ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  02.2 Linting         │ .eslintrc.js, .prettierrc,     │   6    │ Antigravity       ║
  ║                       │ .editorconfig                  │        │                   ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  02.3 Git Hooks       │ .husky/*, lint-staged.config   │   7    │ Antigravity       ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  02.4 CI/CD           │ .github/workflows/*.yml,       │   7    │ Antigravity       ║
  ║                       │ dependabot.yml, CODEOWNERS     │        │                   ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  02.5 Env Vars        │ .env.example, src/lib/env.ts   │   5    │ Antigravity       ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  02.6 Servicios       │ (Configuración manual)         │   7    │ Usuario + Claude  ║
  ║                       │ docs/SETUP_GUIDE.md            │        │                   ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  02.7 Dev Tools       │ .antigravity/instructions.md,  │   7    │ Claude +          ║
  ║                       │ .vscode/*, scripts/*           │        │ Antigravity       ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  02.8 Estructura      │ Árbol de directorios completo  │   3    │ Antigravity       ║
  ║  ─────────────────────┼────────────────────────────────┼────────┼──────────────────  ║
  ║  TOTAL                │ ~30 archivos de configuración  │  50    │                   ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝