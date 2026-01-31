# 🎯 ANÁLISIS DE SKILLS.SH PARA METAMEN100
## Sistema Operativo de Conducta y Espejo Bio-Digital

---

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║     ███╗   ███╗███████╗████████╗ █████╗ ███╗   ███╗███████╗███╗   ██╗       ║
║     ████╗ ████║██╔════╝╚══════██║██╔══██╗████╗ ████║██╔════╝████╗  ██║       ║
║     ██╔████╔██║█████╗     ███╔╝ ███████║██╔████╔██║█████╗  ██╔██╗ ██║       ║
║     ██║╚██╔╝██║██╔══╝    ███╔╝  ██╔══██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║       ║
║     ██║ ╚═╝ ██║███████╗ ███╔╝   ██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║       ║
║     ╚═╝     ╚═╝╚══════╝ ╚══╝    ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝       ║
║                                                                              ║
║                    SKILLS ANALYSIS - Enero 2026                              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 📋 RESUMEN EJECUTIVO

Tras analizar el catálogo de **200+ skills** disponibles en skills.sh y cruzarlo con los requerimientos de METAMEN100, he identificado **32 skills críticas** organizadas en **8 categorías** que acelerarán drásticamente el desarrollo del proyecto.

### Estadísticas Clave:
| Categoría | Skills Identificadas | Prioridad |
|-----------|---------------------|-----------|
| 🔧 Core Backend (Supabase) | 4 | CRÍTICA |
| ⚛️ Frontend (React/Next.js) | 6 | CRÍTICA |
| 🧪 Testing & QA | 5 | CRÍTICA |
| 🚀 CI/CD & DevOps | 4 | ALTA |
| 🔐 Autenticación & Seguridad | 3 | ALTA |
| 🎨 UI/UX & Diseño | 4 | MEDIA-ALTA |
| 📊 Gamificación & Estado | 3 | ALTA |
| 📝 Documentación & Proceso | 3 | MEDIA |
| **TOTAL** | **32** | - |

---

## 1️⃣ CORE BACKEND (SUPABASE) - PRIORIDAD CRÍTICA

### 1.1 supabase-postgres-best-practices
```bash
npx skills add supabase/agent-skills --skill supabase-postgres-best-practices
```

**¿Por qué es CRÍTICA para METAMEN100?**
- El diagnóstico identificó **tablas faltantes** (activity_logs, image_generation_queue, notifications)
- Falta **RLS (Row Level Security)** detallado
- Sin **optimización de queries** ni índices
- Necesita **transacciones atómicas** para el motor de vectores

**Categorías cubiertas:**
| Categoría | Impacto | Relevancia METAMEN |
|-----------|---------|-------------------|
| Query Performance | CRÍTICO | Cálculos de vectores diarios |
| Connection Management | CRÍTICO | Múltiples usuarios concurrentes |
| Schema Design | ALTO | 5 vectores + 10 niveles + economía |
| Concurrency & Locking | MEDIO-ALTO | Judgement Night procesamiento |
| Security & RLS | MEDIO-ALTO | Anti-multicuenta, datos sensibles |
| Data Access Patterns | MEDIO | Historial de imágenes, logs |

**Impacto específico:**
```typescript
// ANTES (sin skill)
const updateVector = async (userId: string, vector: string, delta: number) => {
  const { data } = await supabase
    .from('users')
    .select(vector)
    .eq('id', userId)
    .single();
  // Race condition posible!
  await supabase.from('users').update({ [vector]: data[vector] + delta });
};

// DESPUÉS (con skill)
const updateVector = async (userId: string, vector: string, delta: number) => {
  // Transacción atómica con RLS
  const { data, error } = await supabase.rpc('atomic_vector_update', {
    p_user_id: userId,
    p_vector: vector,
    p_delta: delta
  });
};
```

### 1.2 postgresql-table-design
```bash
npx skills add wshobson/agents --skill postgresql-table-design
```

**Relevancia METAMEN100:**
- Diseño correcto de las 6+ tablas faltantes identificadas en diagnóstico
- Relaciones entre `users`, `tasks`, `inventory`, `purchases`, `avatars`
- Índices para queries frecuentes (top usuarios, búsqueda por nivel)

### 1.3 sql-optimization-patterns
```bash
npx skills add wshobson/agents --skill sql-optimization-patterns
```

**Casos de uso METAMEN100:**
- Query de Judgement Night (procesar todos los usuarios a las 12:00)
- Cálculo de leaderboards
- Historial de imágenes generadas

### 1.4 neon-serverless-postgres (Alternativa)
```bash
npx skills add neondatabase/using-neon
```

**Nota:** Útil si decides migrar de Supabase a Neon para mejor cold-start en edge functions.

---

## 2️⃣ FRONTEND (REACT/NEXT.JS) - PRIORIDAD CRÍTICA

### 2.1 vercel-react-best-practices ⭐ TOP SKILL
```bash
npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices
```

**Instalaciones:** 86.2K (skill #1 global)

**¿Por qué es CRÍTICA?**
El diagnóstico identificó falta de:
- Estrategia de **rendering** (SSR vs CSR vs ISR)
- Optimización de **bundle size**
- Manejo de **waterfalls asíncronas**

**40+ reglas en 8 categorías:**
| Categoría | Reglas | Aplicación METAMEN |
|-----------|--------|-------------------|
| Component Performance | 8 | Avatar render, Dashboard |
| Data Fetching | 6 | Tasks del día, balance BTC |
| Bundle Optimization | 5 | First load < 200KB |
| State Management | 6 | Zustand para vectores |
| Server Components | 5 | Tienda, inventario |
| Hooks Best Practices | 4 | useAvatar, useStreak |
| Rendering Strategies | 4 | ISR para leaderboards |
| Memory Management | 2 | Cleanup de suscripciones |

**Ejemplo de impacto:**
```tsx
// ANTES (waterfall detectada por skill)
async function Dashboard() {
  const user = await getUser(); // 200ms
  const tasks = await getTasks(user.id); // 300ms espera a user
  const balance = await getBalance(user.id); // 200ms espera a tasks
  // Total: 700ms secuenciales
}

// DESPUÉS (skill corrige)
async function Dashboard() {
  const user = await getUser();
  const [tasks, balance] = await Promise.all([
    getTasks(user.id),
    getBalance(user.id)
  ]);
  // Total: 300ms paralelos
}
```

### 2.2 next-best-practices
```bash
npx skills add vercel-labs/next-skills --skill next-best-practices
```

**Cubre específicamente:**
- App Router patterns
- Server Actions (para completar tareas)
- Route handlers
- Middleware (auth, rate limiting)

### 2.3 next-cache-components (Next.js 16+)
```bash
npx skills add vercel-labs/next-skills --skill next-cache-components
```

**Aplicación METAMEN100:**
- Cache de catálogo de tienda
- Cache de leaderboards (revalidar cada hora)
- Cache de configuración de niveles

### 2.4 nextjs-app-router-patterns
```bash
npx skills add wshobson/agents --skill nextjs-app-router-patterns
```

**Patrones específicos:**
- Parallel routes (dashboard + sidebar)
- Intercepting routes (modal de compra)
- Route groups (agrupación por feature)

### 2.5 react-state-management
```bash
npx skills add wshobson/agents --skill react-state-management
```

**Crítico para:**
- Estado global de usuario (vectores, BTC, corazones)
- Estado de UI (modales, notificaciones)
- Sincronización con Supabase realtime

### 2.6 tanstack-query
```bash
npx skills add jezweb/claude-skills --skill tanstack-query
```

**Uso en METAMEN100:**
- Mutations optimistas al completar tareas
- Invalidación de cache al comprar items
- Polling del estado de generación de imagen

---

## 3️⃣ TESTING & QA - PRIORIDAD CRÍTICA

### 3.1 test-driven-development (obra/superpowers) ⭐
```bash
git clone https://github.com/obra/superpowers ~/.claude/skills/superpowers
```

**Instalaciones:** 2.7K

El diagnóstico identificó: **"CERO ESTRATEGIA DE TESTING"**

**Metodología RED-GREEN-REFACTOR aplicada a METAMEN100:**
```typescript
// RED: Test falla primero
test('usuario pierde corazón por inactividad total', () => {
  const user = createUser({ hearts: 5 });
  const result = processJudgementNight(user, { tasksCompleted: 0 });
  expect(result.hearts).toBe(4); // FALLA - no implementado
});

// GREEN: Implementar mínimo
function processJudgementNight(user, dayActivity) {
  if (dayActivity.tasksCompleted === 0) {
    return { ...user, hearts: user.hearts - 1 };
  }
  return user;
}

// REFACTOR: Mejorar sin romper test
```

### 3.2 webapp-testing (anthropics/skills)
```bash
npx skills add anthropics/skills --skill webapp-testing
```

**Instalaciones:** 3.5K

**Cobertura para METAMEN100:**
- Tests de componentes React (Vitest)
- Tests de integración (API routes)
- Tests E2E (flujo de onboarding)

### 3.3 e2e-testing-patterns
```bash
npx skills add wshobson/agents --skill e2e-testing-patterns
```

**Flujos críticos a testear:**
1. Onboarding completo (selección arquetipo → juramento → primer día)
2. Completar tarea → ver recompensa → actualización avatar
3. Flujo de compra (seleccionar item → pagar BTC → equipar)
4. Proceso de muerte (0 corazones → reset → nuevo ciclo)

### 3.4 javascript-testing-patterns
```bash
npx skills add wshobson/agents --skill javascript-testing-patterns
```

**Patrones específicos:**
- Mocking de Supabase
- Testing de Server Actions
- Snapshot testing para UI

### 3.5 python-testing-patterns (para scripts de IA)
```bash
npx skills add wshobson/agents --skill python-testing-patterns
```

**Aplicación:** Testing de scripts de generación de prompts para Gemini

---

## 4️⃣ CI/CD & DEVOPS - PRIORIDAD ALTA

### 4.1 github-actions-templates ⭐
```bash
npx skills add wshobson/agents --skill github-actions-templates
```

El diagnóstico identificó: **"PIPELINE DE CI/CD INEXISTENTE"**

**Workflow propuesto para METAMEN100:**
```yaml
# .github/workflows/ci.yml
name: METAMEN100 CI/CD
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  # Job 1: Lint + Type Check
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup
        uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
  
  # Job 2: Unit + Integration Tests
  test:
    needs: quality
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: test
    steps:
      - run: npm run test:unit
      - run: npm run test:integration
  
  # Job 3: E2E Tests
  e2e:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - run: npx playwright install
      - run: npm run test:e2e
  
  # Job 4: Deploy Preview
  deploy-preview:
    needs: e2e
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    steps:
      - uses: vercel/deploy-preview@v1
```

### 4.2 vercel-deploy (vercel-labs)
```bash
npx skills add vercel-labs/agent-skills --skill vercel-deploy
```

**Features:**
- Deployments claimables desde Claude
- Preview deployments automáticos
- Rollback instantáneo

### 4.3 expo-cicd-workflows (para móvil futuro)
```bash
npx skills add expo/skills --skill expo-cicd-workflows
```

**Nota:** Útil cuando METAMEN100 se expanda a apps nativas.

### 4.4 monorepo-management
```bash
npx skills add wshobson/agents --skill monorepo-management
```

**Estructura propuesta:**
```
metamen100/
├── apps/
│   ├── web/           # Next.js app
│   └── admin/         # Panel de admin
├── packages/
│   ├── core/          # Lógica de vectores
│   ├── ui/            # Componentes compartidos
│   ├── db/            # Schema + migrations
│   └── ai/            # Prompts de Gemini
└── tooling/
    ├── eslint/
    └── typescript/
```

---

## 5️⃣ AUTENTICACIÓN & SEGURIDAD - PRIORIDAD ALTA

### 5.1 better-auth-best-practices ⭐
```bash
npx skills add better-auth/skills --skill better-auth-best-practices
```

**Instalaciones:** 5.7K

El diagnóstico identificó: **"SEGURIDAD COMO AFTERTHOUGHT"**

**Configuración recomendada para METAMEN100:**
```typescript
import { betterAuth } from 'better-auth';

export const auth = betterAuth({
  database: {
    provider: 'supabase',
    url: process.env.SUPABASE_URL,
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [
    phoneVerification(), // Anti-multicuenta
    rateLimit({
      window: 60000,
      max: 5, // 5 intentos por minuto
    }),
  ],
});
```

### 5.2 auth-implementation-patterns
```bash
npx skills add wshobson/agents --skill auth-implementation-patterns
```

**Patrones METAMEN100:**
- JWT con refresh tokens
- Session management
- Phone verification anti-multicuenta

### 5.3 security-audit (squirrelscan)
```bash
npx skills add squirrelscan/skills --skill audit-website
```

**Audita:**
- OWASP Top 10
- Headers de seguridad
- Vulnerabilidades comunes

---

## 6️⃣ UI/UX & DISEÑO - PRIORIDAD MEDIA-ALTA

### 6.1 frontend-design (anthropics/skills) ⭐
```bash
npx skills add anthropics/skills --skill frontend-design
```

**Instalaciones:** 25.3K (skill #5 global)

**Aplicación METAMEN100:**
- Diseño del dashboard principal
- Visualización de vectores (barras de progreso)
- Animaciones de recompensa

### 6.2 web-design-guidelines (vercel-labs)
```bash
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
```

**Instalaciones:** 65.4K (skill #2 global)

**100+ reglas de:**
- Accesibilidad
- Performance percibida
- UX patterns

### 6.3 ui-ux-pro-max
```bash
npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
```

**Instalaciones:** 6.8K

**Features:**
- Design tokens system
- Micro-interacciones
- Feedback visual

### 6.4 tailwind-design-system
```bash
npx skills add wshobson/agents --skill tailwind-design-system
```

**Sistema de diseño METAMEN100:**
```typescript
// tailwind.config.ts
const metamenTheme = {
  colors: {
    vector: {
      aura: '#8B5CF6',      // Violeta
      jawline: '#F97316',   // Naranja
      wealth: '#10B981',    // Verde
      physique: '#EF4444',  // Rojo
      env: '#3B82F6',       // Azul
    },
    level: {
      indigente: '#6B7280',
      alucin: '#FBBF24',
      semidios: '#FFD700',
    },
    health: {
      full: '#10B981',
      low: '#EF4444',
      critical: '#7C2D12',
    },
  },
};
```

---

## 7️⃣ GAMIFICACIÓN & ESTADO - PRIORIDAD ALTA

### 7.1 systematic-debugging (obra/superpowers)
```bash
# Ya incluido en obra/superpowers
```

**Aplicación:** Debug del motor de vectores y sistema de rachas.

### 7.2 xstate-patterns (recomendación externa)
No está en skills.sh pero es CRÍTICO para METAMEN100.

**Máquina de estados para ciclo de usuario:**
```typescript
import { createMachine } from 'xstate';

const userCycleMachine = createMachine({
  id: 'userCycle',
  initial: 'onboarding',
  states: {
    onboarding: {
      on: {
        COMPLETE_TUTORIAL: 'trial',
      },
    },
    trial: {
      on: {
        DAY_6_REACHED: 'paywall',
        SUBSCRIBE: 'active',
      },
    },
    paywall: {
      on: {
        SUBSCRIBE: 'active',
        TIMEOUT: 'limbo',
      },
    },
    active: {
      on: {
        CANCEL: 'limbo',
        DEATH: 'reset',
        DAY_100: 'completed',
      },
    },
    limbo: {
      on: {
        RESUBSCRIBE: 'active',
        HEARTS_DEPLETED: 'reset',
      },
    },
    reset: {
      on: {
        RESTART: 'active',
      },
    },
    completed: {
      on: {
        PRESTIGE: 'active',
      },
    },
  },
});
```

### 7.3 error-handling-patterns
```bash
npx skills add wshobson/agents --skill error-handling-patterns
```

**Sistema de errores METAMEN100:**
```typescript
// Error codes específicos del sistema
enum MetamenError {
  INSUFFICIENT_BTC = 'E001',
  VECTOR_LIMIT_REACHED = 'E002',
  ITEM_LOCKED = 'E003',
  STREAK_BROKEN = 'E004',
  DEATH_TRIGGERED = 'E005',
  GATING_FAILED = 'E006',
}
```

---

## 8️⃣ DOCUMENTACIÓN & PROCESO - PRIORIDAD MEDIA

### 8.1 doc-coauthoring (anthropics/skills)
```bash
npx skills add anthropics/skills --skill doc-coauthoring
```

**Para generar:**
- PRD completo
- Technical Specification
- API Documentation

### 8.2 skill-creator (anthropics/skills)
```bash
npx skills add anthropics/skills --skill skill-creator
```

**Crear skill custom METAMEN100:**
```markdown
# METAMEN100 Development Skill

## Triggers
- Vector calculations
- Gamification logic
- Avatar generation prompts

## Rules
1. Always use transactions for vector updates
2. Validate gating before item purchase
3. Log all critical actions to activity_log
```

### 8.3 mermaid-diagrams (softaworks)
```bash
npx skills add softaworks/agent-toolkit --skill mermaid-diagrams
```

**Para documentar:**
- Flujos de usuario
- Arquitectura del sistema
- Máquinas de estado

---

## 📦 INSTALACIÓN RECOMENDADA

### Fase 1: Core (Semana 1)
```bash
# Backend crítico
npx skills add supabase/agent-skills --skill supabase-postgres-best-practices
npx skills add wshobson/agents --skill postgresql-table-design

# Frontend crítico
npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices
npx skills add vercel-labs/next-skills --skill next-best-practices

# Testing desde día 1
git clone https://github.com/obra/superpowers ~/.claude/skills/superpowers
npx skills add anthropics/skills --skill webapp-testing
```

### Fase 2: Infraestructura (Semana 2)
```bash
# CI/CD
npx skills add wshobson/agents --skill github-actions-templates

# Auth & Security
npx skills add better-auth/skills --skill better-auth-best-practices

# UI/UX
npx skills add anthropics/skills --skill frontend-design
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
```

### Fase 3: Optimización (Semana 3+)
```bash
# Performance
npx skills add wshobson/agents --skill sql-optimization-patterns
npx skills add vercel-labs/next-skills --skill next-cache-components

# Quality
npx skills add wshobson/agents --skill e2e-testing-patterns
npx skills add squirrelscan/skills --skill audit-website
```

---

## 🎯 MATRIZ DE IMPACTO vs ESFUERZO

```
                    ALTO IMPACTO
                         │
    ┌────────────────────┼────────────────────┐
    │                    │                    │
    │  Quick Wins        │  Major Projects    │
    │                    │                    │
    │  • react-best-     │  • TDD skill       │
    │    practices       │  • CI/CD pipeline  │
    │  • supabase-       │  • better-auth     │
    │    postgres        │                    │
    │  • frontend-       │                    │
    │    design          │                    │
    │                    │                    │
BAJO├────────────────────┼────────────────────┤ALTO
ESFUERZO                 │                    ESFUERZO
    │                    │                    │
    │  Fill-Ins          │  Thankless Tasks   │
    │                    │                    │
    │  • mermaid-        │  • security-audit  │
    │    diagrams        │  • monorepo-mgmt   │
    │  • doc-coauthoring │                    │
    │                    │                    │
    └────────────────────┼────────────────────┘
                         │
                    BAJO IMPACTO
```

---

## ⚠️ SKILLS NO RECOMENDADAS (Para este proyecto)

| Skill | Razón de exclusión |
|-------|-------------------|
| expo/* | METAMEN100 es web-first, móvil es fase 2 |
| vue-* | Stack es React/Next.js |
| swift-* | No hay componente iOS nativo |
| python-* (mayoría) | Backend es TypeScript |
| wordpress-* | Irrelevante |
| blockchain-* | BTC interno no es crypto real |

---
