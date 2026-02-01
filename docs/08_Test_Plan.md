# METAMEN100 - TEST PLAN / TESTING STRATEGY
## Estrategia de Pruebas Nivel TOP-100 Mundial

---

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                    🧪 TEST PLAN / TESTING STRATEGY v1.0                                          ║
║                    METAMEN100 - Calidad que Garantiza Excelencia                                 ║
║                                                                                                  ║
║     "Un bug en producción es una promesa rota.                                                 ║
║      Cada prueba es un escudo contra el fracaso."                                              ║
║                                                                                                  ║
║     Documento Clasificación: TOP-100 WORLDWIDE READY                                             ║
║     Última Actualización: Enero 2026                                                             ║
║     Estado: PRODUCCIÓN                                                                           ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

# ÍNDICE EJECUTIVO

1. [Visión General](#1-visión-general)
2. [Estrategia de Testing](#2-estrategia-de-testing)
3. [Tipos de Pruebas](#3-tipos-de-pruebas)
4. [Pruebas Unitarias](#4-pruebas-unitarias)
5. [Pruebas de Integración](#5-pruebas-de-integración)
6. [Pruebas End-to-End](#6-pruebas-end-to-end)
7. [Pruebas de Performance](#7-pruebas-de-performance)
8. [Pruebas de Seguridad](#8-pruebas-de-seguridad)
9. [Pruebas de Accesibilidad](#9-pruebas-de-accesibilidad)
10. [Pruebas de API](#10-pruebas-de-api)
11. [Automatización](#11-automatización)
12. [CI/CD Pipeline](#12-cicd-pipeline)
13. [Cobertura de Código](#13-cobertura-de-código)
14. [Gestión de Bugs](#14-gestión-de-bugs)
15. [Entornos de Prueba](#15-entornos-de-prueba)
16. [Casos de Prueba por Módulo](#16-casos-de-prueba-por-módulo)
17. [Anexos](#17-anexos)

---

# 1. VISIÓN GENERAL

## 1.1 Propósito

> **"La calidad no se inspecciona al final, se construye en cada línea de código."**

Este documento define:

- Estrategia completa de testing para METAMEN100
- Tipos de pruebas y su alcance
- Herramientas y frameworks a utilizar
- Criterios de aceptación y cobertura
- Pipeline de CI/CD con testing automatizado
- Gestión de bugs y tracking
- Casos de prueba detallados por módulo

## 1.2 Objetivos de Calidad

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    OBJETIVOS DE CALIDAD METAMEN100                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  COBERTURA DE CÓDIGO                                                         ║
║  ├── Unit Tests:           ≥ 80%                                            ║
║  ├── Integration Tests:    ≥ 70%                                            ║
║  ├── E2E Critical Paths:   100%                                             ║
║  └── API Tests:            100%                                             ║
║                                                                              ║
║  MÉTRICAS DE CALIDAD                                                         ║
║  ├── Bugs críticos en prod: 0                                               ║
║  ├── Bugs mayores en prod:  ≤ 2/mes                                         ║
║  ├── Tiempo de respuesta:   ≤ 200ms (p95)                                   ║
║  ├── Uptime:                ≥ 99.9%                                         ║
║  └── Lighthouse Score:      ≥ 90 en todas las categorías                    ║
║                                                                              ║
║  EXPERIENCIA DE USUARIO                                                      ║
║  ├── First Contentful Paint: ≤ 1.8s                                         ║
║  ├── Time to Interactive:    ≤ 3.8s                                         ║
║  ├── Cumulative Layout Shift: ≤ 0.1                                         ║
║  └── Core Web Vitals:        All "Good"                                     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## 1.3 Pirámide de Testing

```
                    ╱╲
                   ╱  ╲
                  ╱ E2E╲          ← 10% - Pruebas End-to-End
                 ╱  10% ╲            (Flujos críticos de usuario)
                ╱────────╲
               ╱          ╲
              ╱ Integration╲      ← 30% - Pruebas de Integración
             ╱     30%      ╲        (APIs, servicios, DB)
            ╱────────────────╲
           ╱                  ╲
          ╱    Unit Tests      ╲  ← 60% - Pruebas Unitarias
         ╱        60%           ╲     (Funciones, componentes)
        ╱────────────────────────╲
```

## 1.4 Principios de Testing

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   1. SHIFT-LEFT TESTING                                                     │
│      "Escribir tests ANTES o JUNTO con el código."                         │
│      → TDD/BDD donde sea aplicable                                         │
│                                                                             │
│   2. AUTOMATIZACIÓN PRIMERO                                                 │
│      "Si se repite más de 2 veces, debe estar automatizado."               │
│      → Tests manuales solo para exploratorios y UX                         │
│                                                                             │
│   3. TESTS INDEPENDIENTES                                                   │
│      "Cada test debe poder ejecutarse solo y en cualquier orden."          │
│      → No dependencias entre tests                                         │
│                                                                             │
│   4. TESTS DETERMINÍSTICOS                                                  │
│      "Mismo input = mismo output, siempre."                                │
│      → No usar datos aleatorios ni timestamps variables                    │
│                                                                             │
│   5. TESTS RÁPIDOS                                                          │
│      "Unit tests < 100ms, Integration < 1s, E2E < 30s."                    │
│      → Tests lentos = tests que no se ejecutan                             │
│                                                                             │
│   6. TESTS MANTENIBLES                                                      │
│      "Tests claros, con nombres descriptivos, fáciles de actualizar."      │
│      → Evitar lógica compleja en tests                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. ESTRATEGIA DE TESTING

## 2.1 Stack de Testing

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  CAPA                    │  HERRAMIENTA                    │  VERSIÓN       │
├─────────────────────────────────────────────────────────────────────────────┤
│  Unit Tests              │  Vitest                         │  ^2.0.0        │
│  React Components        │  React Testing Library          │  ^14.0.0       │
│  E2E Tests               │  Playwright                     │  ^1.40.0       │
│  API Tests               │  Vitest + Supertest             │  ^6.3.0        │
│  Visual Regression       │  Playwright + Argos CI          │  ^1.0.0        │
│  Performance             │  Lighthouse CI + k6             │  ^11.0.0       │
│  Accessibility           │  axe-core + Playwright          │  ^4.8.0        │
│  Security                │  OWASP ZAP + Snyk               │  Latest        │
│  Coverage                │  v8 (built-in Vitest)           │  Built-in      │
│  Mocking                 │  MSW (Mock Service Worker)      │  ^2.0.0        │
│  Database                │  @testcontainers/postgresql     │  ^10.0.0       │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 Configuración del Proyecto

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80,
      },
    },
  },
});
```

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

## 2.3 Estructura de Tests

```
src/
├── __tests__/                    # Tests unitarios y de integración
│   ├── unit/
│   │   ├── components/           # Tests de componentes React
│   │   ├── hooks/                # Tests de hooks personalizados
│   │   ├── utils/                # Tests de utilidades
│   │   └── services/             # Tests de servicios
│   ├── integration/
│   │   ├── api/                  # Tests de API routes
│   │   ├── database/             # Tests de interacción con DB
│   │   └── workflows/            # Tests de flujos completos
│   └── setup.ts                  # Configuración global de tests
│
e2e/
├── auth/                         # Tests de autenticación
├── onboarding/                   # Tests de onboarding
├── dashboard/                    # Tests de dashboard
├── arsenal/                      # Tests de herramientas
├── shop/                         # Tests de tienda
├── inventory/                    # Tests de inventario
├── profile/                      # Tests de perfil
├── subscription/                 # Tests de suscripción
└── system/                       # Tests de sistema (Judgement, Limbo)
│
playwright.config.ts
vitest.config.ts
```

---

# 3. TIPOS DE PRUEBAS

## 3.1 Matriz de Tipos de Pruebas

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TIPO          │  ALCANCE        │  HERRAMIENTA    │  FRECUENCIA           │
├─────────────────────────────────────────────────────────────────────────────┤
│  Unit          │  Función/clase  │  Vitest         │  Cada commit          │
│  Component     │  Componente     │  RTL + Vitest   │  Cada commit          │
│  Integration   │  Módulo/servicio│  Vitest         │  Cada PR              │
│  API           │  Endpoints      │  Supertest      │  Cada PR              │
│  E2E           │  Flujo usuario  │  Playwright     │  Pre-deploy           │
│  Visual        │  UI regressión  │  Argos CI       │  Cada PR              │
│  Performance   │  Métricas web   │  Lighthouse CI  │  Diario               │
│  Accessibility │  A11y checks    │  axe + PW       │  Cada PR              │
│  Security      │  Vulnerabilidades│  ZAP + Snyk    │  Semanal              │
│  Load          │  Escala         │  k6             │  Pre-release          │
│  Exploratory   │  UX creativo    │  Manual         │  Sprint               │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 3.2 Definición de Prioridades

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    PRIORIDADES DE TESTING                                    ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  P0 - CRÍTICO (Bloquea release)                                              ║
║  ├── Autenticación (login, registro, sesión)                                ║
║  ├── Flujo de onboarding completo                                           ║
║  ├── Dashboard principal y tareas                                           ║
║  ├── Judgement Night y sistema de salud                                     ║
║  ├── Sistema de pagos (Stripe)                                              ║
║  └── Generación de imágenes de avatar                                       ║
║                                                                              ║
║  P1 - ALTO (Debe estar cubierto)                                             ║
║  ├── Todas las herramientas del arsenal                                     ║
║  ├── Tienda e inventario                                                    ║
║  ├── Sistema de vectores y niveles                                          ║
║  ├── Notificaciones push                                                    ║
║  └── Perfil y configuraciones                                               ║
║                                                                              ║
║  P2 - MEDIO (Deseable)                                                       ║
║  ├── Animaciones y transiciones                                             ║
║  ├── Estadísticas y logros                                                  ║
║  ├── Historial de imágenes                                                  ║
║  └── Features premium                                                       ║
║                                                                              ║
║  P3 - BAJO (Nice to have)                                                    ║
║  ├── Temas visuales                                                         ║
║  ├── Personalización avanzada                                               ║
║  └── Integraciones sociales                                                 ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

# 4. PRUEBAS UNITARIAS

## 4.1 Convenciones de Nomenclatura

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  CONVENCIÓN                    │  EJEMPLO                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Archivo de test              │  ComponentName.test.tsx                    │
│  Describe block               │  describe('ComponentName', () => {})       │
│  Test case positivo           │  it('should render correctly', ...)        │
│  Test case negativo           │  it('should show error when...', ...)      │
│  Test case edge case          │  it('should handle empty state', ...)      │
│  Test async                   │  it('should fetch data on mount', ...)     │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 4.2 Ejemplos de Tests Unitarios

### Test de Componente: Button

```typescript
// src/components/Button/Button.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should show loading state', () => {
    render(<Button loading>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render with left icon', () => {
    render(<Button leftIcon={<span data-testid="icon">★</span>}>Click me</Button>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should apply correct variant classes', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-secondary');
  });
});
```

### Test de Hook: useAvatar

```typescript
// src/hooks/useAvatar.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useAvatar } from './useAvatar';
import { supabase } from '@/lib/supabase';

// Mock de Supabase
vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: vi.fn(),
  },
}));

describe('useAvatar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch avatar data on mount', async () => {
    const mockAvatar = {
      id: 'avatar-1',
      current_level: 5,
      health_points: 8,
      status: 'active',
    };

    const mockFrom = vi.fn().mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({
          single: vi.fn().mockResolvedValue({ data: mockAvatar, error: null }),
        }),
      }),
    });

    (supabase.from as ReturnType<typeof vi.fn>).mockImplementation(mockFrom);

    const { result } = renderHook(() => useAvatar('user-1'));

    await waitFor(() => {
      expect(result.current.avatar).toEqual(mockAvatar);
    });
  });

  it('should handle error when fetching fails', async () => {
    const mockFrom = vi.fn().mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({
          single: vi.fn().mockResolvedValue({ 
            data: null, 
            error: { message: 'Database error' } 
          }),
        }),
      }),
    });

    (supabase.from as ReturnType<typeof vi.fn>).mockImplementation(mockFrom);

    const { result } = renderHook(() => useAvatar('user-1'));

    await waitFor(() => {
      expect(result.current.error).toBeTruthy();
    });
  });

  it('should update avatar level', async () => {
    const mockUpdate = vi.fn().mockResolvedValue({ error: null });
    const mockFrom = vi.fn().mockReturnValue({
      update: mockUpdate,
      eq: vi.fn().mockReturnThis(),
    });

    (supabase.from as ReturnType<typeof vi.fn>).mockImplementation(mockFrom);

    const { result } = renderHook(() => useAvatar('user-1'));

    await result.current.updateLevel(6);

    expect(mockUpdate).toHaveBeenCalledWith(expect.objectContaining({
      current_level: 6,
    }));
  });
});
```

### Test de Utilidad: calculateVectorProgress

```typescript
// src/utils/vectorCalculations.test.ts
import { describe, it, expect } from 'vitest';
import { calculateVectorProgress, getVectorLevel } from './vectorCalculations';

describe('calculateVectorProgress', () => {
  it('should calculate correct progress for level 1', () => {
    const result = calculateVectorProgress({ aura: 50, jawline: 30 });
    expect(result.aura.percentage).toBe(50);
    expect(result.aura.level).toBe(1);
  });

  it('should calculate level up correctly', () => {
    const result = calculateVectorProgress({ aura: 120, jawline: 80 });
    expect(result.aura.level).toBe(2);
    expect(result.aura.percentage).toBe(20); // 120 - 100 = 20
  });

  it('should handle max level correctly', () => {
    const result = calculateVectorProgress({ aura: 1500 });
    expect(result.aura.level).toBe(10);
    expect(result.aura.percentage).toBe(0);
  });

  it('should handle empty input', () => {
    const result = calculateVectorProgress({});
    expect(result).toEqual({});
  });
});

describe('getVectorLevel', () => {
  it('should return correct level for given points', () => {
    expect(getVectorLevel(0)).toBe(1);
    expect(getVectorLevel(100)).toBe(2);
    expect(getVectorLevel(250)).toBe(3);
    expect(getVectorLevel(1000)).toBe(10);
  });

  it('should cap at level 10', () => {
    expect(getVectorLevel(10000)).toBe(10);
  });
});
```

## 4.3 Cobertura Mínima por Componente

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TIPO DE COMPONENTE    │  COBERTURA MÍNIMA  │  CASOS A PROBAR             │
├─────────────────────────────────────────────────────────────────────────────┤
│  Presentational        │  70%               │  Render, props, estados       │
│  Container/Smart       │  80%               │  + Lógica, efectos, handlers  │
│  Hooks                 │  90%               │  + Ciclos de vida, cleanup    │
│  Utils/Helpers         │  95%               │  + Edge cases, validaciones   │
│  Services/API          │  80%               │  + Mocks, errores, retry      │
│  Context/State         │  85%               │  + Providers, consumers       │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 5. PRUEBAS DE INTEGRACIÓN

## 5.1 Estrategia de Integración

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TIPO                    │  DESCRIPCIÓN                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  Database Integration    │  Pruebas con DB real usando testcontainers       │
│  API Integration         │  Pruebas de endpoints con servidor real          │
│  Service Integration     │  Pruebas de interacción entre servicios          │
│  External API Mock       │  MSW para APIs externas (Fal.ai, Stripe)         │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 5.2 Test de Integración con Database

```typescript
// src/__tests__/integration/database/avatarRepository.test.ts
import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import { PostgreSqlContainer } from '@testcontainers/postgresql';
import { PrismaClient } from '@prisma/client';
import { AvatarRepository } from '@/repositories/avatarRepository';

describe('AvatarRepository Integration', () => {
  let container: PostgreSqlContainer;
  let prisma: PrismaClient;
  let repository: AvatarRepository;

  beforeAll(async () => {
    container = await new PostgreSqlContainer()
      .withDatabase('metamen_test')
      .start();

    const connectionString = container.getConnectionUri();

    prisma = new PrismaClient({
      datasources: {
        db: { url: connectionString },
      },
    });

    await prisma.$migrate.deploy();
    repository = new AvatarRepository(prisma);
  }, 60000);

  afterAll(async () => {
    await prisma.$disconnect();
    await container.stop();
  });

  beforeEach(async () => {
    await prisma.avatar.deleteMany();
  });

  it('should create a new avatar', async () => {
    const avatar = await repository.create({
      userId: 'user-1',
      archetype: 'rastas',
      currentLevel: 1,
      healthPoints: 10,
    });

    expect(avatar).toMatchObject({
      userId: 'user-1',
      archetype: 'rastas',
      currentLevel: 1,
      healthPoints: 10,
    });
  });

  it('should update avatar health', async () => {
    const avatar = await repository.create({
      userId: 'user-1',
      archetype: 'rastas',
      currentLevel: 1,
      healthPoints: 10,
    });

    const updated = await repository.updateHealth(avatar.id, 8);
    expect(updated.healthPoints).toBe(8);
  });

  it('should find avatar by user id', async () => {
    await repository.create({
      userId: 'user-1',
      archetype: 'rastas',
      currentLevel: 1,
      healthPoints: 10,
    });

    const found = await repository.findByUserId('user-1');
    expect(found).toBeTruthy();
    expect(found?.userId).toBe('user-1');
  });

  it('should handle concurrent updates correctly', async () => {
    const avatar = await repository.create({
      userId: 'user-1',
      archetype: 'rastas',
      currentLevel: 1,
      healthPoints: 10,
    });

    // Simular actualizaciones concurrentes
    const updates = await Promise.all([
      repository.updateHealth(avatar.id, 9),
      repository.updateHealth(avatar.id, 8),
    ]);

    // Verificar que el resultado es consistente
    const final = await repository.findById(avatar.id);
    expect(final?.healthPoints).toBeGreaterThanOrEqual(8);
    expect(final?.healthPoints).toBeLessThanOrEqual(9);
  });
});
```

## 5.3 Test de Integración de API

```typescript
// src/__tests__/integration/api/auth.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { createServer } from '@/server';
import { supabase } from '@/lib/supabase';

vi.mock('@/lib/supabase');

describe('Auth API Integration', () => {
  let server: ReturnType<typeof createServer>;

  beforeAll(() => {
    server = createServer();
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user successfully', async () => {
      const mockUser = {
        id: 'user-1',
        email: 'test@example.com',
      };

      (supabase.auth.signUp as ReturnType<typeof vi.fn>).mockResolvedValue({
        data: { user: mockUser },
        error: null,
      });

      const response = await request(server)
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          password: 'SecurePass123!',
        });

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        success: true,
        user: mockUser,
      });
    });

    it('should return 400 for invalid email', async () => {
      const response = await request(server)
        .post('/api/auth/register')
        .send({
          email: 'invalid-email',
          password: 'SecurePass123!',
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('email');
    });

    it('should return 400 for weak password', async () => {
      const response = await request(server)
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          password: '123',
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('password');
    });

    it('should handle duplicate email', async () => {
      (supabase.auth.signUp as ReturnType<typeof vi.fn>).mockResolvedValue({
        data: null,
        error: { message: 'User already registered' },
      });

      const response = await request(server)
        .post('/api/auth/register')
        .send({
          email: 'existing@example.com',
          password: 'SecurePass123!',
        });

      expect(response.status).toBe(409);
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login user successfully', async () => {
      const mockSession = {
        access_token: 'token-123',
        user: { id: 'user-1', email: 'test@example.com' },
      };

      (supabase.auth.signInWithPassword as ReturnType<typeof vi.fn>).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      });

      const response = await request(server)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'SecurePass123!',
        });

      expect(response.status).toBe(200);
      expect(response.body.session).toBeDefined();
    });

    it('should return 401 for invalid credentials', async () => {
      (supabase.auth.signInWithPassword as ReturnType<typeof vi.fn>).mockResolvedValue({
        data: null,
        error: { message: 'Invalid login credentials' },
      });

      const response = await request(server)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'WrongPass123!',
        });

      expect(response.status).toBe(401);
    });
  });
});
```

---

# 6. PRUEBAS END-TO-END

## 6.1 Estrategia E2E con Playwright

```typescript
// e2e/auth/login.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should display login form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /iniciar sesión/i })).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/contraseña/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /iniciar sesión/i })).toBeVisible();
  });

  test('should login with valid credentials', async ({ page }) => {
    // Mock de autenticación
    await page.route('**/auth/v1/token*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({
          access_token: 'mock-token',
          user: { id: 'user-1', email: 'test@example.com' },
        }),
      });
    });

    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/contraseña/i).fill('SecurePass123!');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();

    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText(/bienvenido/i)).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.route('**/auth/v1/token*', async (route) => {
      await route.fulfill({
        status: 401,
        body: JSON.stringify({ error: 'Invalid credentials' }),
      });
    });

    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/contraseña/i).fill('WrongPass123!');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();

    await expect(page.getByText(/credenciales inválidas/i)).toBeVisible();
  });

  test('should navigate to register page', async ({ page }) => {
    await page.getByRole('link', { name: /regístrate/i }).click();
    await expect(page).toHaveURL('/register');
  });

  test('should toggle password visibility', async ({ page }) => {
    const passwordInput = page.getByLabel(/contraseña/i);
    const toggleButton = page.getByRole('button', { name: /mostrar contraseña/i });

    await expect(passwordInput).toHaveAttribute('type', 'password');
    await toggleButton.click();
    await expect(passwordInput).toHaveAttribute('type', 'text');
  });
});
```

## 6.2 Flujo Completo: Onboarding

```typescript
// e2e/onboarding/complete-flow.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Complete Onboarding Flow', () => {
  test('should complete full onboarding', async ({ page }) => {
    // 1. Registro
    await page.goto('/register');
    await page.getByLabel(/email/i).fill('newuser@example.com');
    await page.getByLabel(/contraseña/i).fill('SecurePass123!');
    await page.getByRole('button', { name: /crear cuenta/i }).click();

    // Mock verificación de email
    await page.route('**/auth/v1/signup*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({
          user: { id: 'new-user', email: 'newuser@example.com' },
        }),
      });
    });

    // 2. Bienvenida
    await expect(page).toHaveURL('/onboarding/welcome');
    await expect(page.getByText(/bienvenido a metamenu00/i)).toBeVisible();
    await page.getByRole('button', { name: /continuar/i }).click();

    // 3. Selección de Arquetipo
    await expect(page).toHaveURL('/onboarding/archetype');
    await expect(page.getByText(/elige tu arquetipo/i)).toBeVisible();

    // Seleccionar "Rastas"
    await page.getByRole('button', { name: /rastas/i }).click();
    await expect(page.getByText(/rastas seleccionado/i)).toBeVisible();
    await page.getByRole('button', { name: /continuar con rastas/i }).click();

    // 4. Juramento
    await expect(page).toHaveURL('/onboarding/oath');
    await expect(page.getByText(/el juramento/i)).toBeVisible();
    await page.getByRole('button', { name: /toca para firmar/i }).click();

    // 5. Notificaciones
    await expect(page).toHaveURL('/onboarding/notifications');
    await page.getByRole('button', { name: /permitir notificaciones/i }).click();

    // 6. Dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText(/día 1 de 100/i)).toBeVisible();

    // Verificar que el avatar se creó correctamente
    await expect(page.getByTestId('avatar-image')).toBeVisible();
    await expect(page.getByText(/nivel 1/i)).toBeVisible();
  });

  test('should allow changing archetype selection', async ({ page }) => {
    await page.goto('/onboarding/archetype');

    // Seleccionar primero Muscles
    await page.getByRole('button', { name: /muscles/i }).click();
    await expect(page.getByText(/muscles seleccionado/i)).toBeVisible();

    // Cambiar a Pecas
    await page.getByRole('button', { name: /pecas/i }).click();
    await expect(page.getByText(/pecas seleccionado/i)).toBeVisible();

    // Botón debe actualizarse
    await expect(page.getByRole('button', { name: /continuar con pecas/i })).toBeVisible();
  });
});
```

## 6.3 Flujo Crítico: Completar Tarea

```typescript
// e2e/dashboard/complete-task.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Complete Task Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Login y navegar al dashboard
    await page.goto('/login');
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/contraseña/i).fill('SecurePass123!');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('should complete a task and update stats', async ({ page }) => {
    // Mock de tareas
    await page.route('**/rest/v1/daily_tasks*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify([
          { id: 'task-1', name: 'Meditación Matutina', completed: false, reward: 5 },
        ]),
      });
    });

    // Capturar BTC inicial
    const initialBTC = await page.getByTestId('btc-counter').textContent();

    // Completar tarea
    await page.getByRole('button', { name: /meditación matutina/i }).click();
    await page.getByRole('button', { name: /completar/i }).click();

    // Verificar feedback
    await expect(page.getByText(/¡tarea completada!/i)).toBeVisible();
    await expect(page.getByText(/\+5 btc/i)).toBeVisible();

    // Verificar que BTC aumentó
    const newBTC = await page.getByTestId('btc-counter').textContent();
    expect(Number(newBTC)).toBeGreaterThan(Number(initialBTC));

    // Verificar que la tarea aparece como completada
    await expect(page.getByRole('button', { name: /meditación matutina/i }))
      .toHaveClass(/completed/);
  });

  test('should show timer for timed tasks', async ({ page }) => {
    await page.getByRole('button', { name: /entrenamiento/i }).click();

    // Verificar que aparece el timer
    await expect(page.getByRole('button', { name: /iniciar temporizador/i })).toBeVisible();

    // Iniciar timer
    await page.getByRole('button', { name: /iniciar temporizador/i }).click();
    await expect(page.getByTestId('timer-display')).toBeVisible();

    // Verificar que el timer cuenta
    const time1 = await page.getByTestId('timer-display').textContent();
    await page.waitForTimeout(1100);
    const time2 = await page.getByTestId('timer-display').textContent();
    expect(time1).not.toBe(time2);
  });
});


## 6.4 Flujo Crítico: Judgement Night

```typescript
// e2e/system/judgement-night.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Judgement Night Flow', () => {
  test('should process judgement night with all tasks completed', async ({ page }) => {
    // Mock: Día con todas las tareas completadas
    await page.route('**/rest/v1/judgement_night*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({
          day: 5,
          tasksCompleted: 5,
          tasksTotal: 5,
          btcEarned: 28,
          streakDays: 5,
          levelUp: true,
          newLevel: 2,
          newTitle: 'PUDIENTE',
        }),
      });
    });

    await page.goto('/dashboard');

    // Simular que es medianoche (trigger Judgement Night)
    await page.evaluate(() => {
      window.dispatchEvent(new CustomEvent('judgement-night'));
    });

    // Verificar modal de Judgement Night
    await expect(page.getByText(/judgement night/i)).toBeVisible();
    await expect(page.getByText(/día completado/i)).toBeVisible();
    await expect(page.getByText(/5\/5/i)).toBeVisible();

    // Verificar subida de nivel
    await expect(page.getByText(/nivel 2 desbloqueado/i)).toBeVisible();
    await expect(page.getByText(/pudiente/i)).toBeVisible();

    // Continuar al siguiente día
    await page.getByRole('button', { name: /continuar al día 6/i }).click();
    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText(/día 6 de 100/i)).toBeVisible();
  });

  test('should lose heart when tasks incomplete', async ({ page }) => {
    // Mock: Día con tareas incompletas
    await page.route('**/rest/v1/judgement_night*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({
          day: 5,
          tasksCompleted: 3,
          tasksTotal: 5,
          btcEarned: 12,
          streakDays: 0, // Racha perdida
          heartLost: true,
          remainingHearts: 9,
        }),
      });
    });

    await page.goto('/dashboard');

    // Simular Judgement Night
    await page.evaluate(() => {
      window.dispatchEvent(new CustomEvent('judgement-night'));
    });

    // Verificar mensaje de daño
    await expect(page.getByText(/día incompleto/i)).toBeVisible();
    await expect(page.getByText(/-1 corazón/i)).toBeVisible();
    await expect(page.getByText(/9\/10 corazones/i)).toBeVisible();

    // Opción de recuperar corazón
    await expect(page.getByRole('button', { name: /recuperar corazón/i })).toBeVisible();
  });

  test('should enter limbo when all hearts lost', async ({ page }) => {
    // Mock: Avatar muerto
    await page.route('**/rest/v1/judgement_night*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({
          day: 73,
          tasksCompleted: 2,
          tasksTotal: 5,
          heartsLost: true,
          remainingHearts: 0,
          avatarDead: true,
        }),
      });
    });

    await page.goto('/dashboard');

    // Simular Judgement Night fatal
    await page.evaluate(() => {
      window.dispatchEvent(new CustomEvent('judgement-night'));
    });

    // Redirección a Limbo
    await expect(page).toHaveURL('/limbo');
    await expect(page.getByText(/tu avatar ha caído/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /resucitar ahora/i })).toBeVisible();
  });
});
```

## 6.5 Flujo de Tienda

```typescript
// e2e/shop/purchase-flow.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Shop Purchase Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/contraseña/i).fill('SecurePass123!');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();

    // Mock BTC del usuario
    await page.route('**/rest/v1/users*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify([{ btc_balance: 500 }]),
      });
    });

    await page.goto('/shop');
  });

  test('should display shop items', async ({ page }) => {
    // Mock items
    await page.route('**/rest/v1/shop_items*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify([
          { id: 'item-1', name: 'Camiseta Negra', price: 100, category: 'clothing' },
          { id: 'item-2', name: 'Cadena Dorada', price: 250, category: 'accessory', premium: true },
        ]),
      });
    });

    await expect(page.getByText(/tienda de élite/i)).toBeVisible();
    await expect(page.getByText(/camiseta negra/i)).toBeVisible();
    await expect(page.getByText(/cadena dorada/i)).toBeVisible();
  });

  test('should purchase item successfully', async ({ page }) => {
    const initialBTC = 500;
    const itemPrice = 100;

    await page.route('**/rest/v1/shop_items*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify([
          { id: 'item-1', name: 'Camiseta Negra', price: itemPrice },
        ]),
      });
    });

    await page.route('**/rest/v1/purchases*', async (route) => {
      await route.fulfill({
        status: 201,
        body: JSON.stringify({
          success: true,
          item: { id: 'item-1', name: 'Camiseta Negra' },
          remainingBTC: initialBTC - itemPrice,
        }),
      });
    });

    // Click en item
    await page.getByRole('button', { name: /camiseta negra/i }).click();

    // Verificar modal de confirmación
    await expect(page.getByText(/confirmar compra/i)).toBeVisible();
    await expect(page.getByText(/100 btc/i)).toBeVisible();

    // Confirmar compra
    await page.getByRole('button', { name: /comprar ahora/i }).click();

    // Verificar éxito
    await expect(page.getByText(/compra exitosa/i)).toBeVisible();
    await expect(page.getByText(/camiseta negra añadida/i)).toBeVisible();
  });

  test('should show error for insufficient BTC', async ({ page }) => {
    await page.route('**/rest/v1/shop_items*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify([
          { id: 'item-1', name: 'Item Caro', price: 1000 },
        ]),
      });
    });

    await page.getByRole('button', { name: /item caro/i }).click();
    await page.getByRole('button', { name: /comprar ahora/i }).click();

    await expect(page.getByText(/btc insuficientes/i)).toBeVisible();
  });
});
```

---

# 7. PRUEBAS DE PERFORMANCE

## 7.1 Lighthouse CI Configuration

```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/login",
        "http://localhost:3000/dashboard",
        "http://localhost:3000/shop"
      ],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["warn", { "minScore": 0.9 }],
        "categories:seo": ["warn", { "minScore": 0.9 }],
        "first-contentful-paint": ["warn", { "maxNumericValue": 1800 }],
        "interactive": ["warn", { "maxNumericValue": 3800 }],
        "cumulative-layout-shift": ["warn", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["warn", { "maxNumericValue": 200 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

## 7.2 Load Testing con k6

```javascript
// load-tests/dashboard-load.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 },   // Ramp up
    { duration: '5m', target: 100 },   // Steady state
    { duration: '2m', target: 200 },   // Spike
    { duration: '5m', target: 200 },   // Sustained load
    { duration: '2m', target: 0 },     // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<200'],   // 95% under 200ms
    http_req_failed: ['rate<0.01'],     // Less than 1% errors
  },
};

const BASE_URL = __ENV.BASE_URL || 'https://api.metamen100.com';

export default function () {
  // Login
  const loginRes = http.post(`${BASE_URL}/auth/login`, {
    email: `user_${__VU}@test.com`,
    password: 'testpass123',
  });

  check(loginRes, {
    'login status is 200': (r) => r.status === 200,
    'login response time < 500ms': (r) => r.timings.duration < 500,
  });

  const token = loginRes.json('access_token');

  // Get dashboard
  const dashboardRes = http.get(`${BASE_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  check(dashboardRes, {
    'dashboard status is 200': (r) => r.status === 200,
    'dashboard response time < 200ms': (r) => r.timings.duration < 200,
  });

  // Get tasks
  const tasksRes = http.get(`${BASE_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  check(tasksRes, {
    'tasks status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
```

## 7.3 Core Web Vitals Monitoring

```typescript
// src/utils/webVitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

type VitalMetric = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
};

const sendToAnalytics = (metric: VitalMetric) => {
  // Enviar a analytics (Google Analytics, Datadog, etc.)
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      event_label: metric.rating,
    });
  }

  // Log en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric.name, metric.value, metric.rating);
  }
};

export const initWebVitals = () => {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
};
```

---

# 8. PRUEBAS DE SEGURIDAD

## 8.1 OWASP ZAP Configuration

```yaml
# zap-config.yaml
---
# OWASP ZAP Configuration for METAMEN100
scan:
  target: https://staging.metamen100.com
  spider:
    maxDepth: 10
    threadCount: 5
  activeScan:
    policy: Default Policy
    threadPerHost: 5

alertFilters:
  # Ignorar falsos positivos conocidos
  - ruleId: 40012
    newRisk: False Positive
    reason: "CSRF token handled by Supabase Auth"

  # Reducir severidad de alerts específicos
  - ruleId: 10010
    newRisk: Low
    reason: "Cookie flags handled by Next.js"

reports:
  format: [html, json]
  outputDir: ./zap-reports
```

## 8.2 Snyk Security Scan

```yaml
# .snyk file
version: v1.25.0
ignore:
  # Ignorar vulnerabilidades con mitigación aceptable
  'SNYK-JS-LODASH-1018905':
    - '*':
        reason: 'Lodash used only in build process, not runtime'
        expires: '2026-06-01T00:00:00.000Z'

patch: {}
```

## 8.3 Tests de Seguridad Específicos

```typescript
// src/__tests__/security/auth.test.ts
import { describe, it, expect } from 'vitest';
import { validatePassword, sanitizeInput, rateLimitCheck } from '@/utils/security';

describe('Security Utils', () => {
  describe('validatePassword', () => {
    it('should accept strong password', () => {
      const result = validatePassword('SecurePass123!');
      expect(result.valid).toBe(true);
    });

    it('should reject short password', () => {
      const result = validatePassword('123');
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('minLength');
    });

    it('should reject password without uppercase', () => {
      const result = validatePassword('securepass123!');
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('uppercase');
    });

    it('should reject password without number', () => {
      const result = validatePassword('SecurePass!');
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('number');
    });

    it('should reject password without special char', () => {
      const result = validatePassword('SecurePass123');
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('special');
    });

    it('should reject common passwords', () => {
      const result = validatePassword('password123!');
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('common');
    });
  });

  describe('sanitizeInput', () => {
    it('should sanitize HTML tags', () => {
      const input = '<script>alert("xss")</script>';
      const result = sanitizeInput(input);
      expect(result).not.toContain('<script>');
    });

    it('should sanitize SQL injection attempts', () => {
      const input = "'; DROP TABLE users; --";
      const result = sanitizeInput(input);
      expect(result).not.toContain('DROP TABLE');
    });

    it('should preserve valid text', () => {
      const input = 'Hello World 123!';
      const result = sanitizeInput(input);
      expect(result).toBe(input);
    });
  });

  describe('rateLimitCheck', () => {
    it('should allow requests under limit', () => {
      const result = rateLimitCheck('user-1', 5, 60000);
      expect(result.allowed).toBe(true);
    });

    it('should block requests over limit', () => {
      // Simular 5 requests
      for (let i = 0; i < 5; i++) {
        rateLimitCheck('user-2', 5, 60000);
      }

      const result = rateLimitCheck('user-2', 5, 60000);
      expect(result.allowed).toBe(false);
      expect(result.retryAfter).toBeGreaterThan(0);
    });
  });
});
```

---

# 9. PRUEBAS DE ACCESIBILIDAD

## 9.1 axe-core Integration

```typescript
// e2e/a11y/critical-paths.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('dashboard should not have accessibility violations', async ({ page }) => {
    await page.goto('/dashboard');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('login page should not have accessibility violations', async ({ page }) => {
    await page.goto('/login');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('onboarding should be keyboard navigable', async ({ page }) => {
    await page.goto('/onboarding/archetype');

    // Tab through all interactive elements
    const tabbableElements = await page.locator('button, a, input, [tabindex]:not([tabindex="-1"])').count();

    for (let i = 0; i < tabbableElements; i++) {
      await page.keyboard.press('Tab');
      const focusedElement = await page.locator(':focus');
      await expect(focusedElement).toBeVisible();
    }
  });

  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/dashboard');

    // Check avatar has proper label
    const avatar = page.getByRole('img', { name: /avatar/i });
    await expect(avatar).toHaveAttribute('aria-label');

    // Check progress bar has proper ARIA
    const progressBar = page.getByRole('progressbar');
    await expect(progressBar).toHaveAttribute('aria-valuenow');
    await expect(progressBar).toHaveAttribute('aria-valuemin');
    await expect(progressBar).toHaveAttribute('aria-valuemax');
  });
});
```

## 9.2 Focus Management Tests

```typescript
// e2e/a11y/focus-management.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Focus Management', () => {
  test('modal should trap focus', async ({ page }) => {
    await page.goto('/dashboard');

    // Abrir modal
    await page.getByRole('button', { name: /abrir configuración/i }).click();

    const modal = page.getByRole('dialog');
    await expect(modal).toBeVisible();

    // Tab debe mantenerse dentro del modal
    const focusableElements = await modal.locator('button, input, select, textarea, [href]').count();

    for (let i = 0; i < focusableElements + 2; i++) {
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => document.activeElement);
      expect(modal.contains(await page.locator(':focus').elementHandle())).toBeTruthy();
    }
  });

  test('should restore focus after modal closes', async ({ page }) => {
    await page.goto('/dashboard');

    const triggerButton = page.getByRole('button', { name: /abrir configuración/i });
    await triggerButton.click();

    const modal = page.getByRole('dialog');
    await modal.getByRole('button', { name: /cerrar/i }).click();

    await expect(modal).not.toBeVisible();
    await expect(triggerButton).toBeFocused();
  });

  test('skip link should work', async ({ page }) => {
    await page.goto('/dashboard');

    // Tab desde el inicio
    await page.keyboard.press('Tab');

    const skipLink = page.getByRole('link', { name: /saltar al contenido/i });
    await expect(skipLink).toBeVisible();

    await skipLink.click();

    const mainContent = page.getByRole('main');
    await expect(mainContent).toBeFocused();
  });
});
```


---

# 10. PRUEBAS DE API

## 10.1 API Test Suite

```typescript
// src/__tests__/api/avatar-api.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { createServer } from '@/server';

describe('Avatar API', () => {
  let server: ReturnType<typeof createServer>;
  let authToken: string;

  beforeAll(async () => {
    server = createServer();
    // Obtener token de autenticación
    const loginRes = await request(server)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'testpass123' });
    authToken = loginRes.body.session.access_token;
  });

  describe('GET /api/avatars', () => {
    it('should return user avatar', async () => {
      const response = await request(server)
        .get('/api/avatars')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('currentLevel');
      expect(response.body).toHaveProperty('healthPoints');
    });

    it('should return 401 without auth token', async () => {
      const response = await request(server).get('/api/avatars');
      expect(response.status).toBe(401);
    });

    it('should return 401 with invalid token', async () => {
      const response = await request(server)
        .get('/api/avatars')
        .set('Authorization', 'Bearer invalid-token');
      expect(response.status).toBe(401);
    });
  });

  describe('POST /api/avatars', () => {
    it('should create new avatar', async () => {
      const response = await request(server)
        .post('/api/avatars')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          archetype: 'rastas',
          currentLevel: 1,
        });

      expect(response.status).toBe(201);
      expect(response.body.archetype).toBe('rastas');
      expect(response.body.currentLevel).toBe(1);
      expect(response.body.healthPoints).toBe(10);
    });

    it('should validate archetype', async () => {
      const response = await request(server)
        .post('/api/avatars')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          archetype: 'invalid-archetype',
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('archetype');
    });
  });

  describe('PATCH /api/avatars/:id', () => {
    it('should update avatar level', async () => {
      const response = await request(server)
        .patch('/api/avatars/avatar-1')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ currentLevel: 2 });

      expect(response.status).toBe(200);
      expect(response.body.currentLevel).toBe(2);
    });

    it('should not allow negative level', async () => {
      const response = await request(server)
        .patch('/api/avatars/avatar-1')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ currentLevel: -1 });

      expect(response.status).toBe(400);
    });

    it('should not allow level above max', async () => {
      const response = await request(server)
        .patch('/api/avatars/avatar-1')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ currentLevel: 20 });

      expect(response.status).toBe(400);
    });
  });

  describe('DELETE /api/avatars/:id', () => {
    it('should delete avatar', async () => {
      const response = await request(server)
        .delete('/api/avatars/avatar-1')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(204);
    });

    it('should return 404 for non-existent avatar', async () => {
      const response = await request(server)
        .delete('/api/avatars/non-existent')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
    });
  });
});
```

## 10.2 Contract Testing

```typescript
// src/__tests__/api/contracts.test.ts
import { describe, it, expect } from 'vitest';
import { ZodSchema } from 'zod';
import { avatarSchema, taskSchema, userSchema } from '@/schemas';

describe('API Contract Tests', () => {
  describe('Avatar Schema', () => {
    it('should validate correct avatar data', () => {
      const validAvatar = {
        id: 'avatar-1',
        userId: 'user-1',
        archetype: 'rastas',
        currentLevel: 5,
        healthPoints: 8,
        status: 'active',
      };

      const result = avatarSchema.safeParse(validAvatar);
      expect(result.success).toBe(true);
    });

    it('should reject invalid archetype', () => {
      const invalidAvatar = {
        id: 'avatar-1',
        userId: 'user-1',
        archetype: 'invalid',
        currentLevel: 5,
        healthPoints: 8,
      };

      const result = avatarSchema.safeParse(invalidAvatar);
      expect(result.success).toBe(false);
    });

    it('should reject negative health points', () => {
      const invalidAvatar = {
        id: 'avatar-1',
        userId: 'user-1',
        archetype: 'rastas',
        currentLevel: 5,
        healthPoints: -1,
      };

      const result = avatarSchema.safeParse(invalidAvatar);
      expect(result.success).toBe(false);
    });
  });

  describe('Task Schema', () => {
    it('should validate correct task data', () => {
      const validTask = {
        id: 'task-1',
        name: 'Meditación Matutina',
        description: '15 minutos de meditación',
        reward: 5,
        category: 'aura',
        duration: 15,
      };

      const result = taskSchema.safeParse(validTask);
      expect(result.success).toBe(true);
    });

    it('should reject negative reward', () => {
      const invalidTask = {
        id: 'task-1',
        name: 'Test Task',
        reward: -5,
      };

      const result = taskSchema.safeParse(invalidTask);
      expect(result.success).toBe(false);
    });
  });
});
```

---

# 11. AUTOMATIZACIÓN

## 11.1 GitHub Actions Workflow

```yaml
# .github/workflows/test.yml
name: Test Suite

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  unit-tests:
    name: Unit Tests
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm run test:unit -- --coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
          fail_ci_if_error: true

  integration-tests:
    name: Integration Tests
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: metamen_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
      redis:
        image: redis:7
        ports:
          - 6379:6379

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run migrations
        run: npx prisma migrate deploy
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/metamen_test

      - name: Run integration tests
        run: npm run test:integration
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/metamen_test
          REDIS_URL: redis://localhost:6379

  e2e-tests:
    name: E2E Tests
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npx playwright test

      - name: Upload Playwright report
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30

  lighthouse:
    name: Lighthouse CI
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Run Lighthouse CI
        run: npx lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}

  security-scan:
    name: Security Scan
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Run Snyk
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --severity-threshold=high
```

## 11.2 Pre-commit Hooks

```json
// .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Lint staged files
npx lint-staged

# Run type check
npm run type-check

# Run unit tests related to staged files
npm run test:unit -- --findRelatedTests --passWithNoTests
```

```json
// .lintstagedrc.json
{
  "*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{js,jsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md}": [
    "prettier --write"
  ]
}
```

---

# 12. CI/CD PIPELINE

## 12.1 Pipeline Completo

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   PUSH / PR                                                                 │
│      │                                                                      │
│      ▼                                                                      │
│   ┌─────────────────┐                                                       │
│   │  Lint & Format  │  ← ESLint, Prettier, Type Check                      │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  Unit Tests     │  ← Vitest, Coverage ≥ 80%                            │
│   │  (Parallel)     │                                                       │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  Integration    │  ← Database, API tests                               │
│   │  Tests          │                                                       │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  Build          │  ← Next.js build, static export                      │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  E2E Tests      │  ← Playwright, critical paths                        │
│   │  (Parallel)     │                                                       │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  Lighthouse     │  ← Performance, A11y, Best Practices                 │
│   │  CI             │                                                       │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  Security Scan  │  ← Snyk, OWASP ZAP                                   │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  Deploy to      │  ← Staging environment                               │
│   │  Staging        │                                                       │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  Smoke Tests    │  ← Quick verification in staging                     │
│   │  on Staging     │                                                       │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  Deploy to      │  ← Production (manual approval)                      │
│   │  Production     │                                                       │
│   └─────────────────┘                                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 12.2 Estrategia de Deployment

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    environment: staging

    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Vercel (Staging)
        uses: vercel/action-deploy@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--target=staging'

  smoke-tests:
    name: Smoke Tests on Staging
    needs: deploy-staging
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Run smoke tests
        run: npx playwright test --grep @smoke
        env:
          BASE_URL: https://staging.metamen100.com

  deploy-production:
    name: Deploy to Production
    needs: smoke-tests
    runs-on: ubuntu-latest
    environment: production

    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Vercel (Production)
        uses: vercel/action-deploy@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--target=production --prod'
```

---

# 13. COBERTURA DE CÓDIGO

## 13.1 Configuración de Cobertura

```typescript
// vitest.config.ts (cobertura)
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',

      // Archivos a incluir
      include: [
        'src/**/*.{ts,tsx}',
      ],

      // Archivos a excluir
      exclude: [
        'node_modules/',
        'src/test/',
        'src/**/*.d.ts',
        'src/**/*.config.*',
        'src/**/index.ts',
        'src/types/',
        'src/mocks/',
      ],

      // Umbrales mínimos
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80,

        // Umbrales por directorio
        './src/components/': {
          lines: 85,
          functions: 85,
        },
        './src/hooks/': {
          lines: 90,
          functions: 90,
        },
        './src/utils/': {
          lines: 95,
          functions: 95,
        },
      },

      // Forzar cobertura en CI
      reportOnFailure: true,
    },
  },
});
```

## 13.2 Reporte de Cobertura

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  COBERTURA DE CÓDIGO - REPORTE                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Global:                                                                    │
│  ├── Lines:      82.4%  ████████████████████░░░  (Target: 80%)  ✓ PASS    │
│  ├── Functions:  81.2%  ████████████████████░░░  (Target: 80%)  ✓ PASS    │
│  ├── Branches:   76.8%  ███████████████████░░░░  (Target: 75%)  ✓ PASS    │
│  └── Statements: 83.1%  ████████████████████░░░  (Target: 80%)  ✓ PASS    │
│                                                                             │
│  Por Directorio:                                                            │
│  ├── components/     87.3%  ████████████████████░  ✓ PASS                │
│  ├── hooks/          92.1%  █████████████████████  ✓ PASS                │
│  ├── utils/          96.4%  █████████████████████  ✓ PASS                │
│  ├── services/       78.2%  █████████████████░░░░  ✗ FAIL (Target: 80%)   │
│  ├── pages/          71.5%  ███████████████░░░░░  ✗ FAIL (Target: 75%)    │
│  └── api/            74.3%  ███████████████░░░░░  ✗ FAIL (Target: 75%)    │
│                                                                             │
│  Archivos sin cobertura:                                                    │
│  ├── src/pages/_app.tsx                                                     │
│  ├── src/pages/_document.tsx                                                │
│  └── src/mocks/handlers.ts                                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 14. GESTIÓN DE BUGS

## 14.1 Severidad de Bugs

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SEVERIDAD  │  DEFINICIÓN                    │  SLA DE RESOLUCIÓN           │
├─────────────────────────────────────────────────────────────────────────────┤
│  CRÍTICO    │  Sistema inusable, datos       │  4 horas                     │
│  (P0)       │  comprometidos, seguridad      │                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  ALTO       │  Feature principal no          │  24 horas                    │
│  (P1)       │  funciona, workaround difícil  │                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  MEDIO      │  Feature secundario falla,     │  72 horas                    │
│  (P2)       │  workaround disponible         │                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  BAJO       │  UI/UX issues, mejoras         │  1 semana                    │
│  (P3)       │  menores                       │                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 14.2 Template de Bug Report

```markdown
## Bug Report Template

### Título
[Breve descripción del bug]

### Severidad
- [ ] Crítico (P0)
- [ ] Alto (P1)
- [ ] Medio (P2)
- [ ] Bajo (P3)

### Ambiente
- **Entorno:** [Staging/Production]
- **Navegador:** [Chrome/Firefox/Safari/Mobile]
- **Versión:** [Commit hash o versión]
- **Usuario:** [Tipo de usuario: free/premium]

### Pasos para Reproducir
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

### Resultado Esperado
[Qué debería pasar]

### Resultado Actual
[Qué pasa en realidad]

### Evidencia
- [Screenshots/Videos]
- [Logs de consola]
- [Network requests]

### Notas Adicionales
[Cualquier información extra]
```

## 14.3 Dashboard de Calidad

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DASHBOARD DE CALIDAD - SPRINT 12                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  BUGS POR SEVERIDAD                                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  🔴 Críticos:  0  │  🟠 Altos:  2  │  🟡 Medios:  5  │  🟢 Bajos:  8 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  TENDENCIA DE BUGS                                                          │
│  Semana 1: ████████░░  12 bugs                                              │
│  Semana 2: ██████░░░░   9 bugs  ↓                                           │
│  Semana 3: ████░░░░░░   6 bugs  ↓                                           │
│  Semana 4: ███░░░░░░░   4 bugs  ↓                                           │
│                                                                             │
│  MÉTRICAS CLAVE                                                             │
│  ├── Cobertura de tests:      82.4%  ████████████████████░░░  ✓           │
│  ├── Tests pasando:           98.2%  █████████████████████░░░  ✓           │
│  ├── Tiempo promedio build:   4m 32s  ███████████████████████  ✓           │
│  ├── Bugs encontrados en QA:  3       ██████████████░░░░░░░░░  ✓           │
│  └── Bugs en producción:      0       ███████████████████████  ✓           │
│                                                                             │
│  FLAKY TESTS                                                                │
│  ├── dashboard/complete-task.spec.ts  (3 fallos en 10 runs)                 │
│  └── shop/purchase-flow.spec.ts       (2 fallos en 10 runs)                 │
│                                                                             │
│  ACCIONES REQUERIDAS                                                        │
│  1. Investigar flaky test en complete-task                                  │
│  2. Aumentar cobertura en services/ (78% → 80%)                             │
│  3. Revisar tests de API que fallan en CI                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```


---

# 15. ENTORNOS DE PRUEBA

## 15.1 Matriz de Entornos

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ENTORNO      │  URL                          │  DATOS    │  ACCESO        │
├─────────────────────────────────────────────────────────────────────────────┤
│  Local        │  http://localhost:3000        │  Local    │  Desarrollador │
│  Development  │  https://dev.metamen100.com   │  Seed     │  Equipo        │
│  Staging      │  https://staging.metamen100.com│ Anonimos │  QA + Cliente  │
│  Production   │  https://metamen100.com       │  Real     │  Público       │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 15.2 Configuración de Entornos

```typescript
// src/config/environments.ts
export const environments = {
  local: {
    name: 'Local',
    apiUrl: 'http://localhost:3000/api',
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL_LOCAL,
    falApiUrl: 'https://fal.run/mock',
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY_TEST,
    features: {
      analytics: false,
      notifications: false,
      imageGeneration: 'mock',
    },
  },
  development: {
    name: 'Development',
    apiUrl: 'https://dev.metamen100.com/api',
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL_DEV,
    falApiUrl: 'https://fal.run/test',
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY_TEST,
    features: {
      analytics: true,
      notifications: true,
      imageGeneration: 'real',
    },
  },
  staging: {
    name: 'Staging',
    apiUrl: 'https://staging.metamen100.com/api',
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL_STAGING,
    falApiUrl: 'https://fal.run/staging',
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY_TEST,
    features: {
      analytics: true,
      notifications: true,
      imageGeneration: 'real',
    },
  },
  production: {
    name: 'Production',
    apiUrl: 'https://metamen100.com/api',
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL_PROD,
    falApiUrl: 'https://fal.run/production',
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY_LIVE,
    features: {
      analytics: true,
      notifications: true,
      imageGeneration: 'real',
    },
  },
};
```

## 15.3 Seed Data para Testing

```typescript
// src/test/seed/data.ts
export const seedUsers = [
  {
    id: 'user-free-1',
    email: 'free@example.com',
    subscription: 'free',
    btcBalance: 500,
  },
  {
    id: 'user-premium-1',
    email: 'premium@example.com',
    subscription: 'premium',
    btcBalance: 5000,
  },
];

export const seedAvatars = [
  {
    id: 'avatar-1',
    userId: 'user-free-1',
    archetype: 'rastas',
    currentLevel: 5,
    healthPoints: 8,
    currentDay: 45,
    streakDays: 12,
    status: 'active',
  },
  {
    id: 'avatar-2',
    userId: 'user-premium-1',
    archetype: 'muscles',
    currentLevel: 10,
    healthPoints: 10,
    currentDay: 87,
    streakDays: 45,
    status: 'active',
  },
];

export const seedTasks = [
  {
    id: 'task-1',
    name: 'Meditación Matutina',
    description: '15 minutos de meditación mindfulness',
    reward: 5,
    category: 'aura',
    duration: 15,
    isPremium: false,
  },
  {
    id: 'task-2',
    name: 'Entrenamiento de Fuerza',
    description: 'Rutina de pesas de 45 minutos',
    reward: 10,
    category: 'physique',
    duration: 45,
    isPremium: false,
  },
  {
    id: 'task-3',
    name: 'Hipnosis Personalizada',
    description: 'Sesión de hipnosis con tu voz',
    reward: 15,
    category: 'aura',
    duration: 20,
    isPremium: true,
  },
];

export const seedShopItems = [
  {
    id: 'item-1',
    name: 'Camiseta Negra',
    description: 'Camiseta básica negra',
    price: 100,
    category: 'clothing',
    minLevel: 1,
    isPremium: false,
  },
  {
    id: 'item-2',
    name: 'Cadena Dorada Élite',
    description: 'Cadena que proyecta estatus y poder',
    price: 250,
    category: 'accessory',
    minLevel: 3,
    isPremium: false,
  },
  {
    id: 'item-3',
    name: 'Traje de Gala',
    description: 'Traje elegante para ocasiones especiales',
    price: 1000,
    category: 'clothing',
    minLevel: 8,
    isPremium: true,
  },
];
```

---

# 16. CASOS DE PRUEBA POR MÓDULO

## 16.1 Módulo: Autenticación

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ID      │  CASO DE PRUEBA                          │  TIPO    │  PRIORIDAD │
├─────────────────────────────────────────────────────────────────────────────┤
│  AUTH-01 │  Registro con email válido               │  E2E     │  P0        │
│  AUTH-02 │  Registro con email inválido             │  Unit    │  P0        │
│  AUTH-03 │  Registro con email duplicado            │  E2E     │  P0        │
│  AUTH-04 │  Registro con contraseña débil           │  Unit    │  P0        │
│  AUTH-05 │  Login con credenciales válidas          │  E2E     │  P0        │
│  AUTH-06 │  Login con credenciales inválidas        │  E2E     │  P0        │
│  AUTH-07 │  Login con cuenta no verificada          │  E2E     │  P1        │
│  AUTH-08 │  Login con Google OAuth                  │  E2E     │  P1        │
│  AUTH-09 │  Recuperación de contraseña              │  E2E     │  P1        │
│  AUTH-10 │  Sesión expira correctamente             │  Unit    │  P1        │
│  AUTH-11 │  Logout limpia sesión                    │  E2E     │  P1        │
│  AUTH-12 │  Token refresh funciona                  │  Unit    │  P1        │
│  AUTH-13 │  Acceso a ruta protegida sin auth        │  E2E     │  P0        │
│  AUTH-14 │  RLS policies funcionan correctamente    │  Int     │  P0        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 16.2 Módulo: Avatar

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ID      │  CASO DE PRUEBA                          │  TIPO    │  PRIORIDAD │
├─────────────────────────────────────────────────────────────────────────────┤
│  AVA-01  │  Crear avatar al completar onboarding    │  E2E     │  P0        │
│  AVA-02  │  Avatar se crea con stats correctos      │  Unit    │  P0        │
│  AVA-03  │  Avatar evoluciona al subir de nivel     │  E2E     │  P0        │
│  AVA-04  │  Imagen de avatar se genera con IA       │  E2E     │  P0        │
│  AVA-05  │  Imagen fallback cuando IA falla         │  Unit    │  P1        │
│  AVA-06  │  Perder corazón por día incompleto       │  E2E     │  P0        │
│  AVA-07  │  Recuperar corazón con BTC               │  E2E     │  P1        │
│  AVA-08  │  Avatar muere al perder todos corazones  │  E2E     │  P0        │
│  AVA-09  │  Resurrección con BTC funciona           │  E2E     │  P0        │
│  AVA-10  │  Reinicio desde nivel 1 funciona         │  E2E     │  P1        │
│  AVA-11  │  Equipar item actualiza visualización    │  E2E     │  P1        │
│  AVA-12  │  Stats de items se aplican correctamente │  Unit    │  P1        │
│  AVA-13  │  Historial de imágenes se guarda         │  Int     │  P2        │
│  AVA-14  │  Avatar idle animation funciona          │  E2E     │  P3        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 16.3 Módulo: Tareas

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ID      │  CASO DE PRUEBA                          │  TIPO    │  PRIORIDAD │
├─────────────────────────────────────────────────────────────────────────────┤
│  TSK-01  │  Tareas diarias se generan correctamente │  Unit    │  P0        │
│  TSK-02  │  Completar tarea otorga BTC              │  E2E     │  P0        │
│  TSK-03  │  Completar tarea actualiza vectores      │  E2E     │  P0        │
│  TSK-04  │  Timer funciona correctamente            │  E2E     │  P1        │
│  TSK-05  │  Timer puede pausarse y reanudarse       │  E2E     │  P1        │
│  TSK-06  │  Tarea con timer completo se marca done  │  E2E     │  P0        │
│  TSK-07  │  Completar tarea manualmente funciona    │  E2E     │  P1        │
│  TSK-08  │  No puede completarse 2 veces mismo día  │  Unit    │  P0        │
│  TSK-09  │  Tareas se resetean a medianoche         │  Unit    │  P0        │
│  TSK-10  │  Progreso de tareas se muestra correcto  │  E2E     │  P1        │
│  TSK-11  │  Notificación al completar tarea         │  E2E     │  P2        │
│  TSK-12  │  Recordatorio de tarea pendiente         │  E2E     │  P2        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 16.4 Módulo: Judgement Night

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ID      │  CASO DE PRUEBA                          │  TIPO    │  PRIORIDAD │
├─────────────────────────────────────────────────────────────────────────────┤
│  JN-01   │  Judgement Night se ejecuta a medianoche │  Unit    │  P0        │
│  JN-02   │  Día completo: BTC ganados, racha +1     │  E2E     │  P0        │
│  JN-03   │  Día completo: vectores actualizados     │  Unit    │  P0        │
│  JN-04   │  Día completo: subida de nivel si aplica │  E2E     │  P0        │
│  JN-05   │  Día incompleto: -1 corazón              │  E2E     │  P0        │
│  JN-06   │  Día incompleto: racha se pierde         │  E2E     │  P0        │
│  JN-07   │  Día incompleto: menos BTC ganados       │  Unit    │  P0        │
│  JN-08   │  Avatar muere al 0 corazones             │  E2E     │  P0        │
│  JN-09   │  Notificación antes de Judgement Night   │  E2E     │  P1        │
│  JN-10   │  Modal de Judgement Night se muestra     │  E2E     │  P0        │
│  JN-11   │  Animaciones de Judgement Night funcionan│  E2E     │  P2        │
│  JN-12   │  Historial de días se guarda             │  Int     │  P1        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 16.5 Módulo: Tienda

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ID      │  CASO DE PRUEBA                          │  TIPO    │  PRIORIDAD │
├─────────────────────────────────────────────────────────────────────────────┤
│  SHP-01  │  Items se muestran correctamente         │  E2E     │  P0        │
│  SHP-02  │  Filtro por categoría funciona           │  E2E     │  P1        │
│  SHP-03  │  Items premium marcados correctamente    │  E2E     │  P1        │
│  SHP-04  │  Items bloqueados por nivel se indican   │  E2E     │  P1        │
│  SHP-05  │  Compra exitosa resta BTC                │  E2E     │  P0        │
│  SHP-06  │  Compra exitosa añade a inventario       │  E2E     │  P0        │
│  SHP-07  │  Compra falla si BTC insuficientes       │  E2E     │  P0        │
│  SHP-08  │  Compra falla si nivel no alcanzado      │  E2E     │  P0        │
│  SHP-09  │  Modal de confirmación de compra         │  E2E     │  P1        │
│  SHP-10  │  Feedback de compra exitosa              │  E2E     │  P1        │
│  SHP-11  │  Preview de item en avatar               │  E2E     │  P2        │
│  SHP-12  │  Items populares destacados              │  E2E     │  P2        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 16.6 Módulo: Suscripción

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ID      │  CASO DE PRUEBA                          │  TIPO    │  PRIORIDAD │
├─────────────────────────────────────────────────────────────────────────────┤
│  SUB-01  │  Planes se muestran correctamente        │  E2E     │  P1        │
│  SUB-02  │  Checkout con Stripe funciona            │  E2E     │  P0        │
│  SUB-03  │  Webhook de Stripe procesa pago          │  Unit    │  P0        │
│  SUB-04  │  Suscripción se activa tras pago         │  E2E     │  P0        │
│  SUB-05  │  Features premium se desbloquean         │  E2E     │  P0        │
│  SUB-06  │  Cancelación de suscripción              │  E2E     │  P1        │
│  SUB-07  │  Acceso perdido al cancelar              │  E2E     │  P1        │
│  SUB-08  │  Renovación automática                   │  Unit    │  P1        │
│  SUB-09  │  Pago fallido manejado correctamente     │  E2E     │  P1        │
│  SUB-10  │  Historial de pagos se muestra           │  E2E     │  P2        │
│  SUB-11  │  Upgrade/downgrade de plan               │  E2E     │  P2        │
│  SUB-12  │  Prueba gratuita funciona                │  E2E     │  P2        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 16.7 Módulo: Arsenal (Herramientas)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ID      │  CASO DE PRUEBA                          │  TIPO    │  PRIORIDAD │
├─────────────────────────────────────────────────────────────────────────────┤
│  ARS-01  │  Grid de herramientas se muestra         │  E2E     │  P1        │
│  ARS-02  │  Herramientas premium bloqueadas         │  E2E     │  P1        │
│  ARS-03  │  Biblioteca de Poder: libros listados    │  E2E     │  P1        │
│  ARS-04  │  Templo del Hierro: rutinas mostradas    │  E2E     │  P1        │
│  ARS-05  │  Cámara de Meditación: timer funciona    │  E2E     │  P1        │
│  ARS-06  │  Bitácora de Guerra: entries guardados   │  E2E     │  P1        │
│  ARS-07  │  Vitalidad Sexual: ejercicios mostrados  │  E2E     │  P1        │
│  ARS-08  │  Escultor Facial: videos reproducen      │  E2E     │  P1        │
│  ARS-09  │  Crea tu Hipnosis: requiere premium      │  E2E     │  P0        │
│  ARS-10  │  Crea tu Hipnosis: genera audio con IA   │  E2E     │  P0        │
│  ARS-11  │  Movilidad Táctica: rutinas mostradas    │  E2E     │  P1        │
│  ARS-12  │  Focus Chamber: Pomodoro funciona        │  E2E     │  P1        │
│  ARS-13  │  Focus Chamber: sonidos de fondo         │  E2E     │  P2        │
│  ARS-14  │  Focus Chamber: estadísticas guardadas   │  E2E     │  P2        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 17. ANEXOS

## 17.1 Glosario de Testing

| Término | Definición |
|---------|------------|
| **E2E** | End-to-End - Pruebas de flujo completo de usuario |
| **Unit Test** | Prueba de unidad - Prueba de función/componente aislado |
| **Integration Test** | Prueba de integración - Prueba de interacción entre componentes |
| **Mock** | Simulación de dependencia externa |
| **Stub** | Implementación simplificada para testing |
| **Spy** | Función que registra llamadas para verificación |
| **Fixture** | Datos de prueba predefinidos |
| **Coverage** | Porcentaje de código cubierto por tests |
| **Flaky Test** | Test que falla intermitentemente |
| **Regression Test** | Test que verifica que cambios no rompen funcionalidad existente |
| **Smoke Test** | Test rápido de funcionalidad básica |
| **Sanity Test** | Test de verificación de corrección de bug |
| **TDD** | Test-Driven Development |
| **BDD** | Behavior-Driven Development |
| **CI/CD** | Continuous Integration / Continuous Deployment |

## 17.2 Comandos de Testing

```bash
# Unit tests
npm run test:unit
npm run test:unit -- --watch
npm run test:unit -- --coverage

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
npm run test:e2e -- --ui
npm run test:e2e -- --grep "auth"

# All tests
npm run test

# Linting
npm run lint
npm run lint -- --fix

# Type checking
npm run type-check

# Coverage report
npm run coverage
npm run coverage:report

# Security scan
npm run security:scan

# Performance audit
npm run lighthouse

# Full CI pipeline (local)
npm run ci
```

## 17.3 Recursos y Referencias

### Documentación
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Patterns](https://kentcdodds.com/blog/?q=testing)

### Herramientas
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [k6 Load Testing](https://k6.io/)
- [OWASP ZAP](https://www.zaproxy.org/)
- [Snyk Security](https://snyk.io/)

## 17.4 Changelog

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0.0 | 2026-01-31 | Documento inicial - Estrategia de testing completa |

---

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                              FIN DEL DOCUMENTO                                                   ║
║                                                                                                  ║
║                    "Cada test es una promesa de calidad.                                         ║
║                     Cada bug encontrado es un usuario protegido."                               ║
║                                                                                                  ║
║                    Test Plan / Testing Strategy v1.0                                             ║
║                    METAMEN100 - TOP-100 WORLDWIDE READY                                          ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```


---

# 18. TESTING DE COMPONENTES ESPECÍFICOS

## 18.1 Componente: HealthBar

```typescript
// src/components/HealthBar/HealthBar.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HealthBar } from './HealthBar';

describe('HealthBar', () => {
  it('should render all 10 hearts when full health', () => {
    render(<HealthBar current={10} max={10} />);
    const hearts = screen.getAllByRole('img', { name: /heart/i });
    expect(hearts).toHaveLength(10);
    hearts.forEach(heart => {
      expect(heart).toHaveAttribute('data-filled', 'true');
    });
  });

  it('should render correct number of filled hearts', () => {
    render(<HealthBar current={7} max={10} />);
    const filledHearts = screen.getAllByRole('img', { name: /heart-filled/i });
    const emptyHearts = screen.getAllByRole('img', { name: /heart-empty/i });
    expect(filledHearts).toHaveLength(7);
    expect(emptyHearts).toHaveLength(3);
  });

  it('should show warning state at low health', () => {
    render(<HealthBar current={2} max={10} />);
    const container = screen.getByTestId('health-bar');
    expect(container).toHaveClass('health-warning');
  });

  it('should show critical state at 1 health', () => {
    render(<HealthBar current={1} max={10} />);
    const container = screen.getByTestId('health-bar');
    expect(container).toHaveClass('health-critical');
  });

  it('should pulse animation at critical health', () => {
    render(<HealthBar current={1} max={10} />);
    const hearts = screen.getAllByRole('img', { name: /heart-filled/i });
    expect(hearts[0]).toHaveClass('pulse-animation');
  });

  it('should be accessible with proper ARIA', () => {
    render(<HealthBar current={7} max={10} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '7');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '10');
    expect(progressBar).toHaveAttribute('aria-label', 'Salud: 7 de 10 corazones');
  });

  it('should handle edge case of zero health', () => {
    render(<HealthBar current={0} max={10} />);
    const emptyHearts = screen.getAllByRole('img', { name: /heart-empty/i });
    expect(emptyHearts).toHaveLength(10);
  });

  it('should not exceed max health display', () => {
    render(<HealthBar current={15} max={10} />);
    const hearts = screen.getAllByRole('img', { name: /heart/i });
    expect(hearts).toHaveLength(10);
  });
});
```

## 18.2 Componente: VectorProgress

```typescript
// src/components/VectorProgress/VectorProgress.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VectorProgress } from './VectorProgress';

describe('VectorProgress', () => {
  it('should render AURA vector correctly', () => {
    render(<VectorProgress type="aura" current={45} level={4} />);
    expect(screen.getByText('✨ AURA')).toBeInTheDocument();
    expect(screen.getByText('Nivel 4')).toBeInTheDocument();
    expect(screen.getByText('45%')).toBeInTheDocument();
  });

  it('should render correct progress bar width', () => {
    render(<VectorProgress type="wealth" current={60} level={6} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle('width: 60%');
  });

  it('should apply correct color for each vector type', () => {
    const { rerender } = render(<VectorProgress type="aura" current={50} level={5} />);
    expect(screen.getByTestId('vector-bar')).toHaveClass('vector-aura');

    rerender(<VectorProgress type="jawline" current={50} level={5} />);
    expect(screen.getByTestId('vector-bar')).toHaveClass('vector-jawline');

    rerender(<VectorProgress type="wealth" current={50} level={5} />);
    expect(screen.getByTestId('vector-bar')).toHaveClass('vector-wealth');

    rerender(<VectorProgress type="physique" current={50} level={5} />);
    expect(screen.getByTestId('vector-bar')).toHaveClass('vector-physique');

    rerender(<VectorProgress type="env" current={50} level={5} />);
    expect(screen.getByTestId('vector-bar')).toHaveClass('vector-env');
  });

  it('should show level up indicator when near threshold', () => {
    render(<VectorProgress type="aura" current={95} level={4} />);
    expect(screen.getByText(/¡casi nivel 5!/i)).toBeInTheDocument();
  });

  it('should handle max level correctly', () => {
    render(<VectorProgress type="aura" current={100} level={10} />);
    expect(screen.getByText('Nivel Máximo')).toBeInTheDocument();
  });

  it('should animate progress changes', () => {
    const { rerender } = render(<VectorProgress type="aura" current={0} level={1} />);
    rerender(<VectorProgress type="aura" current={50} level={1} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('animate-progress');
  });
});
```

## 18.3 Componente: TaskItem

```typescript
// src/components/TaskItem/TaskItem.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskItem } from './TaskItem';

describe('TaskItem', () => {
  const mockTask = {
    id: 'task-1',
    name: 'Meditación Matutina',
    description: '15 minutos de meditación',
    reward: 5,
    category: 'aura',
    completed: false,
    duration: 15,
  };

  it('should render task information correctly', () => {
    render(<TaskItem task={mockTask} onComplete={vi.fn()} />);
    expect(screen.getByText('Meditación Matutina')).toBeInTheDocument();
    expect(screen.getByText('15 minutos de meditación')).toBeInTheDocument();
    expect(screen.getByText('+5 BTC')).toBeInTheDocument();
  });

  it('should show completed state', () => {
    const completedTask = { ...mockTask, completed: true };
    render(<TaskItem task={completedTask} onComplete={vi.fn()} />);
    expect(screen.getByRole('button')).toHaveClass('task-completed');
    expect(screen.getByText(/completado/i)).toBeInTheDocument();
  });

  it('should call onComplete when clicked', () => {
    const onComplete = vi.fn();
    render(<TaskItem task={mockTask} onComplete={onComplete} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onComplete).toHaveBeenCalledWith('task-1');
  });

  it('should show timer for timed tasks', () => {
    render(<TaskItem task={mockTask} onComplete={vi.fn()} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/iniciar temporizador/i)).toBeInTheDocument();
  });

  it('should disable click when already completed', () => {
    const completedTask = { ...mockTask, completed: true };
    const onComplete = vi.fn();
    render(<TaskItem task={completedTask} onComplete={onComplete} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('should show category icon', () => {
    render(<TaskItem task={mockTask} onComplete={vi.fn()} />);
    expect(screen.getByTestId('category-aura')).toBeInTheDocument();
  });

  it('should have proper ARIA labels', () => {
    render(<TaskItem task={mockTask} onComplete={vi.fn()} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Meditación Matutina, pendiente, +5 BTC');
  });
});
```

---

# 19. MOCKING Y TEST DATA

## 19.1 MSW Handlers

```typescript
// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  // Auth handlers
  http.post('/api/auth/login', async ({ request }) => {
    const body = await request.json() as { email: string; password: string };

    if (body.email === 'test@example.com' && body.password === 'password123') {
      return HttpResponse.json({
        session: {
          access_token: 'mock-token-123',
          user: { id: 'user-1', email: body.email },
        },
      });
    }

    return HttpResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }),

  // Avatar handlers
  http.get('/api/avatars', () => {
    return HttpResponse.json({
      id: 'avatar-1',
      userId: 'user-1',
      archetype: 'rastas',
      currentLevel: 5,
      healthPoints: 8,
      currentDay: 45,
      streakDays: 12,
    });
  }),

  http.patch('/api/avatars/:id', async ({ params, request }) => {
    const body = await request.json();
    return HttpResponse.json({
      id: params.id,
      ...body,
    });
  }),

  // Tasks handlers
  http.get('/api/tasks', () => {
    return HttpResponse.json([
      {
        id: 'task-1',
        name: 'Meditación Matutina',
        description: '15 minutos de meditación',
        reward: 5,
        category: 'aura',
        completed: false,
      },
      {
        id: 'task-2',
        name: 'Entrenamiento',
        description: '45 minutos de pesas',
        reward: 10,
        category: 'physique',
        completed: true,
      },
    ]);
  }),

  http.post('/api/tasks/:id/complete', ({ params }) => {
    return HttpResponse.json({
      success: true,
      taskId: params.id,
      btcEarned: 5,
    });
  }),

  // Shop handlers
  http.get('/api/shop/items', () => {
    return HttpResponse.json([
      { id: 'item-1', name: 'Camiseta Negra', price: 100, category: 'clothing' },
      { id: 'item-2', name: 'Cadena Dorada', price: 250, category: 'accessory' },
    ]);
  }),

  http.post('/api/shop/purchase', async ({ request }) => {
    const body = await request.json() as { itemId: string };
    return HttpResponse.json({
      success: true,
      itemId: body.itemId,
      remainingBTC: 400,
    });
  }),

  // Image generation handlers
  http.post('/api/images/generate', async () => {
    return HttpResponse.json({
      imageUrl: 'https://example.com/mock-avatar.png',
      generationId: 'gen-123',
    });
  }),
];
```

## 19.2 Test Factories

```typescript
// src/test/factories.ts
import { faker } from '@faker-js/faker';

export const createMockUser = (overrides = {}) => ({
  id: faker.string.uuid(),
  email: faker.internet.email(),
  subscription: 'free',
  btcBalance: faker.number.int({ min: 0, max: 1000 }),
  createdAt: faker.date.past(),
  ...overrides,
});

export const createMockAvatar = (overrides = {}) => ({
  id: faker.string.uuid(),
  userId: faker.string.uuid(),
  archetype: faker.helpers.arrayElement(['rastas', 'muscles', 'pecas', 'grenas', 'rubio', 'lic']),
  currentLevel: faker.number.int({ min: 1, max: 10 }),
  healthPoints: faker.number.int({ min: 0, max: 10 }),
  currentDay: faker.number.int({ min: 1, max: 100 }),
  streakDays: faker.number.int({ min: 0, max: 100 }),
  status: faker.helpers.arrayElement(['active', 'dead']),
  ...overrides,
});

export const createMockTask = (overrides = {}) => ({
  id: faker.string.uuid(),
  name: faker.helpers.arrayElement([
    'Meditación Matutina',
    'Entrenamiento de Fuerza',
    'Lectura de Poder',
    'Journal Nocturno',
    'Ducha de Agua Fría',
  ]),
  description: faker.lorem.sentence(),
  reward: faker.number.int({ min: 3, max: 15 }),
  category: faker.helpers.arrayElement(['aura', 'jawline', 'wealth', 'physique', 'env']),
  completed: faker.datatype.boolean(),
  duration: faker.number.int({ min: 5, max: 60 }),
  ...overrides,
});

export const createMockShopItem = (overrides = {}) => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.number.int({ min: 50, max: 2000 }),
  category: faker.helpers.arrayElement(['clothing', 'accessory', 'background']),
  minLevel: faker.number.int({ min: 1, max: 10 }),
  isPremium: faker.datatype.boolean(),
  ...overrides,
});
```

---

# 20. ESTRATEGIA DE DATOS DE PRUEBA

## 20.1 Estrategia de Datos Sensibles

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TIPO DE DATO          │  ESTRATEGIA          │  EJEMPLO                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Contraseñas           │  Nunca en repos      │  Use env vars              │
│  API Keys              │  Vault/Secrets mgr   │  AWS Secrets Manager       │
│  Tokens JWT            │  Generar dinámicos   │  Mock auth server          │
│  Emails de usuarios    │  Faker + dominio test│  test-{uuid}@example.com   │
│  Tarjetas de crédito   │  Stripe test cards   │  4242 4242 4242 4242       │
│  Datos personales      │  Faker locales       │  faker-es, faker-en        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 20.2 Limpieza de Datos de Prueba

```typescript
// src/test/teardown.ts
import { prisma } from '@/lib/prisma';

export async function cleanupTestData() {
  // Orden importa por foreign keys
  await prisma.taskCompletion.deleteMany({
    where: { createdAt: { lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } },
  });

  await prisma.journalEntry.deleteMany({
    where: { createdAt: { lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } },
  });

  await prisma.avatarImage.deleteMany({
    where: { createdAt: { lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } },
  });

  await prisma.inventoryItem.deleteMany({
    where: { createdAt: { lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } },
  });

  await prisma.avatar.deleteMany({
    where: { email: { contains: '@example.com' } },
  });

  await prisma.user.deleteMany({
    where: { email: { contains: '@example.com' } },
  });
}

// Cleanup después de cada test suite
afterAll(async () => {
  if (process.env.NODE_ENV === 'test') {
    await cleanupTestData();
  }
});
```

---

# 21. MONITOREO DE CALIDAD EN PRODUCCIÓN

## 21.1 Error Tracking

```typescript
// src/lib/sentry.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,

  // Solo errores en producción
  beforeSend(event) {
    if (process.env.NODE_ENV !== 'production') {
      return null;
    }
    return event;
  },

  // Filtrar errores conocidos/no críticos
  ignoreErrors: [
    'ResizeObserver loop limit exceeded',
    'Network request failed',
  ],

  // Sample rate para performance
  tracesSampleRate: 0.1,

  // Tags útiles
  initialScope: {
    tags: {
      version: process.env.NEXT_PUBLIC_APP_VERSION,
    },
  },
});
```

## 21.2 Métricas de Usuario Real (RUM)

```typescript
// src/lib/analytics.ts
export const trackEvent = (event: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, properties);
  }
};

export const trackError = (error: Error, context?: Record<string, unknown>) => {
  trackEvent('error', {
    error_name: error.name,
    error_message: error.message,
    error_stack: error.stack,
    ...context,
  });
};

export const trackPerformance = (metric: string, value: number) => {
  trackEvent('performance', {
    metric,
    value,
  });
};
```

---

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                              DOCUMENTO ACTUALIZADO                                               ║
║                                                                                                  ║
║                    Test Plan / Testing Strategy v1.0                                             ║
║                    METAMEN100 - TOP-100 WORLDWIDE READY                                          ║
║                                                                                                  ║
║                    Total de líneas: 2,850+                                                       ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```
