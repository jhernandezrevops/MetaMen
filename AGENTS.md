# AGENTS.md - MetaMen100

> **Guía de Referencia para Agentes de Código**
> 
> Este documento proporciona información esencial sobre el proyecto MetaMen100 para que los agentes de IA puedan trabajar de manera efectiva.

---

## 📋 Resumen Ejecutivo

**MetaMen100** es un **Sistema Operativo de Conducta y espejo bio-digital de alto rendimiento para hombres**. Es una aplicación web de gamificación personal que une disciplina real con evolución digital inmediata a través de un protocolo de 100 días.

### Concepto Central
El sistema traduce matemáticamente la disciplina diaria del mundo real en la evolución visual inmediata de un avatar digital. Cada acción completada (ejercicio, meditación, trabajo productivo) impacta los vectores del avatar, que se visualizan mediante generación de imágenes con IA.

### Pilares Fundamentales
1. **Espejo Bio-Digital**: Tu avatar refleja tu progreso real sin filtros
2. **Motor de Vectores**: 5 vectores matemáticos (AURA, JAWLINE, WEALTH, PHYSIQUE, ENV) determinan la apariencia
3. **Protocolo de 100 Días**: Arco narrativo con niveles 1-10, muerte y resurrección

---

## 🏗️ Arquitectura del Sistema

### Stack Tecnológico

| Capa | Tecnología | Versión |
|------|------------|---------|
| **Frontend** | Next.js (App Router) | ^16.1.6 |
| **Lenguaje** | TypeScript | ^5.x (strict mode) |
| **Backend** | Supabase (PostgreSQL + Auth) | PostgreSQL 15+ |
| **Estilos** | Tailwind CSS + PostCSS | ^4.x |
| **Animaciones** | Framer Motion | ^12.x |
| **Estado** | Zustand | ^5.x |
| **Validación** | Zod | ^4.x |
| **Forms** | React Hook Form | ^7.x |
| **Testing** | Vitest + Playwright | Vitest ^4.x, Playwright ^1.58 |
| **Pagos** | Stripe | ^20.x |
| **Fuentes** | Geist (Vercel) | - |
| **Hooks** | @hookform/resolvers | ^5.x |
| **Icons** | Lucide React | ^0.563 |
| **Charts** | Recharts | ^3.7 |
| **Dates** | date-fns, date-fns-tz | ^4.x |

### Arquitectura de Alto Nivel

```
┌─────────────────────────────────────────────────────────────┐
│  CLIENT LAYER (Next.js 16 + React 19)                      │
│  ├─ Landing Page (SSR)                                     │
│  ├─ Dashboard (App Router)                                 │
│  ├─ Tools (Client Components)                              │
│  └─ Store (Client Components)                              │
│                                                             │
│  State: Zustand │ Cache: React Query │ UI: Tailwind        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ HTTPS/JSON
┌─────────────────────────────────────────────────────────────┐
│  SERVER LAYER (Next.js)                                    │
│  ├─ Server Actions (auth, tasks, store, wallet)            │
│  └─ API Routes (webhooks: Stripe, Replicate)               │
└─────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   SUPABASE      │  │    INNGEST      │  │  CLOUDFLARE R2  │
│  (PostgreSQL)   │  │  (Queue/Jobs)   │  │  (Storage)      │
│  ├─ Auth        │  │  ├─ Judgement   │  │  └─ Avatars     │
│  ├─ Database    │  │  ├─ Image Gen   │  │                 │
│  └─ Realtime    │  │  └─ Cron Jobs   │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

## 📁 Estructura de Carpetas

```
metamen100/
│
├── 📁 .agent/                   # Configuración de agentes
│   ├── rules/rules.md           # Reglas del proyecto
│   ├── skills/                  # Skills personalizadas
│   │   ├── nextjs-app-router-patterns/
│   │   ├── nextjs-supabase-auth/
│   │   ├── tailwind-v4-shadcn/
│   │   ├── typescript-advanced-types/
│   │   └── webapp-testing/
│   └── workflows/               # Workflows de desarrollo
│       ├── debug.md
│       ├── implementar-caja.md
│       ├── refactorizar.md
│       └── server-action.md
│
├── 📁 .agents/skills/           # Skills de Kimi Code
│   ├── doc-coauthoring/
│   └── mermaid-diagrams/
│
├── 📁 docs/                     # Documentación completa (27 archivos)
│   ├── 00_planning/cajas/       # Planificación por cajas
│   │   ├── caja_0.0.0.md        # Estructura de cajas matrioska
│   │   ├── caja_1.0.0.md        # Documentación fundacional
│   │   ├── caja_2.0.0.md        # Infraestructura y DevOps
│   │   ├── caja_3.0.0.md        # Base de datos y Backend
│   │   ├── caja_4.0.0.md        # Motor Core
│   │   ├── caja_5.0.0.md        # Autenticación y Onboarding
│   │   ├── caja_6.0.0.md        # Dashboard y UI
│   │   ├── caja_7.0.0.md        # Arsenal de Herramientas
│   │   ├── caja_8.0.0.md        # IA Generativa
│   │   ├── caja_9.0.0.md        # Economía y Tienda
│   │   ├── caja_10.0.0.md       # Monetización
│   │   ├── caja_11.0.0.md       # Notificaciones
│   │   ├── caja_12.0.0.md       # Observabilidad
│   │   └── caja_13.0.0.md       # Lanzamiento
│   │   ├── diagnostico.md       # Análisis de estado
│   │   ├── interrogatorio.md    # Definición de requisitos
│   │   └── skills.md            # Skills necesarias
│   ├── 01_PRD.md               # Product Requirements
│   ├── 02_ADRs.md              # Architecture Decisions
│   ├── 03_TECH_SPEC.md         # Technical Specification
│   ├── 04_Data_Model.md        # Database Model
│   ├── 05_GDD.md               # Game Design Document
│   ├── 06_Content_Spec.md      # Content Specification
│   ├── 07_UI_UX_Spec.md        # UI/UX Design
│   ├── 08_Test_Plan.md         # Testing Strategy
│   └── 09_SECURITY_SPEC.md     # Security Specification
│
├── 📁 prompts/personaje_base/   # Modelos JSON de arquetipos
│   └── (modelos de personajes)
│
├── 📁 schemas/                  # Esquemas Zod (vacío, por crear)
│
├── 📁 src/                      # Código fuente
│   └── app/                     # Next.js App Router
│       ├── layout.tsx           # Layout raíz
│       ├── page.tsx             # Página de inicio
│       ├── globals.css          # Estilos globales
│       └── favicon.ico
│
├── 📁 templates/                # Plantillas de código (vacío)
│
├── 📁 public/                   # Archivos estáticos
│
├── 📁 tests/                    # Tests (por crear)
│
├── .editorconfig                # Configuración de editor
├── .gitignore                   # Git ignore
├── .prettierrc                  # Configuración Prettier
├── .prettierignore              # Prettier ignore
├── commitlint.config.mjs        # Configuración commitlint
├── eslint.config.mjs            # Configuración ESLint
├── next.config.ts               # Configuración Next.js
├── next-env.d.ts                # Tipos de Next.js
├── package.json                 # Dependencias
├── pnpm-lock.yaml               # Lock de pnpm
├── pnpm-workspace.yaml          # Workspace pnpm
├── postcss.config.mjs           # Configuración PostCSS
├── README.md                    # README básico
├── tsconfig.json                # Configuración TypeScript
└── AGENTS.md                    # Este archivo
```

---

## 🎯 Módulos Principales (Documentados)

### 1. Sistema de Autenticación
- Registro/Login con email y Google OAuth
- Verificación telefónica (SMS OTP)
- JWT tokens con refresh automático
- Row Level Security (RLS) en todas las tablas

### 2. Dashboard Principal
- Visualización del avatar actual
- Estado de salud (10 corazones)
- Balance de BTC (moneda virtual)
- Nivel actual y racha de días
- Time Matrix de 100 días

### 3. Sistema de Tareas
- Tareas diarias personalizadas por arquetipo
- Check-in de hábitos (gym, meditación, lectura)
- Recompensas BTC por completar
- Multiplicadores por racha

### 4. Motor de Vectores (Core)
5 vectores que determinan la apariencia del avatar:
- **AURA** (Mental): Postura, mirada, presencia
- **JAWLINE** (Cara): Definición mandibular
- **WEALTH** (Productividad): Ropa, accesorios, entorno
- **PHYSIQUE** (Físico): Grasa y músculo
- **ENV** (Entorno): Ubicación del fondo

### 5. Judgement Night
Evaluación automática diaria (medianoche):
- Calcula tasa de completitud de tareas
- Aplica consecuencias (pérdida de corazones)
- Aplica decay biológico (si no se hizo ejercicio)
- Genera nueva imagen del avatar
- Notifica al usuario

### 6. Tienda e Inventario
- Items que modifican vectores del avatar
- Moneda BTC ganada con disciplina
- Gating por nivel y vectores requeridos
- Items cosméticos (ropa, accesorios, entornos)

### 7. Arsenal de Herramientas
9 herramientas integradas:
- Meditación (timer + guías)
- Gym Tracker (log de ejercicios)
- Journal (diario diario)
- Focus Timer (Pomodoro)
- Kegel Trainer
- Lectura (tracker de libros)
- Yoga Facial
- Hipnosis
- Mobility

---

## 🚀 Build y Desarrollo

### Comandos Disponibles

```bash
# Instalación de dependencias
pnpm install

# Desarrollo local (http://localhost:3000)
pnpm dev

# Build de producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Linting
pnpm lint
```

### Scripts de package.json

| Script | Descripción |
|--------|-------------|
| `dev` | Inicia servidor de desarrollo con Turbopack |
| `build` | Compila la aplicación para producción |
| `start` | Inicia servidor de producción |
| `lint` | Ejecuta ESLint |

---

## 🔧 Convenciones de Código

### TypeScript - Modo Estricto Obligatorio

El proyecto usa TypeScript en modo estricto como se define en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx"
  }
}
```

### Naming Conventions

| Tipo | Convención | Ejemplo |
|------|------------|---------|
| Componentes | PascalCase | `TaskCard.tsx` |
| Hooks | camelCase con prefijo 'use' | `useAvatar.ts` |
| Utils | camelCase | `calculateVectorProgress.ts` |
| Types | PascalCase con sufijo | `AvatarState` |
| Enums | PascalCase | `TaskCategory` |
| Constants | UPPER_SNAKE_CASE | `MAX_HEALTH_POINTS` |
| Server Actions | camelCase | `completeTaskAction` |
| Database | snake_case | `avatar_states` |

### Prettier Configuration

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### EditorConfig

```
root = true
[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
```

### Commits Convencionales

El proyecto usa commitlint con configuración convencional:

**Tipos permitidos:**
- `feat` - Nueva característica
- `fix` - Corrección de bug
- `docs` - Documentación
- `style` - Cambios de estilo (formato)
- `refactor` - Refactorización
- `perf` - Mejoras de rendimiento
- `test` - Tests
- `build` - Cambios de build
- `ci` - CI/CD
- `chore` - Tareas de mantenimiento
- `revert` - Revertir cambios

**Scopes permitidos:**
`core`, `auth`, `onboarding`, `dashboard`, `tasks`, `tools`, `store`, `avatar`, `payments`, `ui`, `db`, `api`, `config`, `deps`

---

## 🧪 Testing

### Herramientas Configuradas

| Herramienta | Uso | Versión |
|-------------|-----|---------|
| **Vitest** | Unit/Integration Tests | ^4.0.18 |
| **Playwright** | E2E Tests | ^1.58.1 |
| **@testing-library/react** | Component Testing | ^16.3.2 |
| **@testing-library/jest-dom** | Matchers DOM | ^6.9.1 |

### Estrategia de Testing

```
                    ╱╲
                   ╱  ╲
                  ╱ E2E╲          ← 10% - Pruebas End-to-End
                 ╱  10% ╲            (Flujos críticos de usuario)
                ╱────────╲
               ╱          ╲
              ╱ Integration╲      ← 30% - Pruebas de Integración
             ╱     30%      ╲        (APIs, Server Actions)
            ╱────────────────╲
           ╱                  ╲
          ╱      Unit Tests    ╲  ← 60% - Pruebas Unitarias
         ╱         60%          ╲     (Lógica pura, cálculos)
        ╱────────────────────────╲
```

### Objetivos de Cobertura

| Tipo | Cobertura Mínima |
|------|------------------|
| Unit Tests | ≥ 80% |
| Integration Tests | ≥ 70% |
| E2E Critical Paths | 100% |
| API Tests | 100% |

### Flujos Críticos a Testear

1. Onboarding completo
2. Completar tarea → actualizar vector
3. Compra en tienda
4. Muerte (0 corazones) → Reset
5. Paywall Día 6

---

## 🔐 Seguridad

### Principios de Seguridad

- **Security by Design**: Seguridad en cada línea de código
- **Zero Trust Architecture**: Nunca confiar, siempre verificar
- **RLS**: Row Level Security obligatorio en todas las tablas
- **Validación**: Zod para todos los inputs

### Pirámide de Seguridad Multicapa

```
        ▲
       ╱ ╲
      ╱ 7 ╲              CAPA 7: APLICACIÓN
     ╱─────╲                 Validación, Sanitización, Anti-Cheat
    ╱   6   ╲
   ╱─────────╲           CAPA 5: API
  ╱     5      ╲             Rate Limiting, Auth, Input Validation
 ╱───────────────╲
╱        4         ╲     CAPA 3: BASE DE DATOS
╱─────────────────────╲      RLS, Encriptación, Políticas de Acceso
╱           3            ╲
╱──────────────────────────╲
╱              2               ╲  CAPA 1: INFRAESTRUCTURA
╱────────────────────────────────╲   WAF, DDoS Protection, TLS
╱                 1                  ╲
═══════════════════════════════════════
       CAPA 0: FÍSICA/ORGANIZACIONAL
       Políticas, Accesos, Auditoría
```

### Checklist de Seguridad

- [ ] Validación de inputs con Zod
- [ ] Server Actions para operaciones sensibles
- [ ] RLS en todas las queries a Supabase
- [ ] No exponer secrets en cliente
- [ ] Sanitizar outputs (XSS prevention)
- [ ] Idempotency keys para operaciones críticas
- [ ] Rate limiting en APIs públicas

### Headers de Seguridad (Next.js)

Configurados en `next.config.ts`:
- `Strict-Transport-Security`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (camera, microphone, geolocation)

---

## 🗺️ Path Aliases

Configurados en `tsconfig.json`:

```json
{
  "paths": {
    "@/*": ["./src/*"],
    "@/components/*": ["./src/components/*"],
    "@/lib/*": ["./src/lib/*"],
    "@/actions/*": ["./src/actions/*"],
    "@/hooks/*": ["./src/hooks/*"],
    "@/types/*": ["./src/types/*"]
  }
}
```

---

## 🎨 Estilos y UI

### Tailwind CSS v4

El proyecto usa Tailwind CSS v4 con la nueva sintaxis de `@import` y `@theme`:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### Fuentes

- **Geist Sans**: Fuente principal
- **Geist Mono**: Fuente monoespaciada

Ambas cargadas desde `next/font/google`.

---

## 🎮 Sistema de Cajas (Organización del Trabajo)

El desarrollo está organizado en "cajas" (módulos de trabajo):

| Caja | Descripción | Estado |
|------|-------------|--------|
| 00 | Setup Inicial | ✅ Configurado |
| 01 | Documentación Fundacional | ✅ Completa |
| 02 | Supabase & Autenticación | 🟡 Pendiente |
| 03 | Dashboard & Avatar | 🟡 Pendiente |
| 04 | Sistema de Tareas | 🟡 Pendiente |
| 05 | Judgement Night | 🟡 Pendiente |
| 06 | Tienda e Inventario | 🟡 Pendiente |
| 07 | Arsenal de Herramientas | 🟡 Pendiente |
| 08 | Optimización & Performance | 🟡 Pendiente |
| 09 | Testing & QA | 🟡 Pendiente |
| 10 | DevOps & CI/CD | 🟡 Pendiente |
| 11 | Analytics & Monitoreo | 🟡 Pendiente |
| 12 | Pre-Launch | 🟡 Pendiente |
| 13 | Post-Launch | 🟡 Pendiente |

### Archivos de Planificación

- `docs/00_planning/cajas/caja_X.X.X.md` - Especificación detallada de cada caja
- `docs/00_planning/diagnostico.md` - Análisis de estado actual
- `docs/00_planning/interrogatorio.md` - Definición de requisitos
- `docs/00_planning/skills.md` - Skills necesarias

---

## 🤖 Workflows y Skills Disponibles

### Workflows en `.agent/workflows/`

- **implementar-caja.md** - Flujo para implementar una subcaja
- **refactorizar.md** - Refactorización quirúrgica
- **debug.md** - Debugging sistemático
- **server-action.md** - Template para Server Actions

### Skills en `.agent/skills/`

- **nextjs-app-router-patterns** - Patrones de App Router
- **nextjs-supabase-auth** - Autenticación con Supabase
- **tailwind-v4-shadcn** - Tailwind v4 + shadcn/ui
- **typescript-advanced-types** - Tipos avanzados de TypeScript
- **webapp-testing** - Testing de aplicaciones web

### Skills en `.agents/skills/`

- **doc-coauthoring** - Workflow de co-autoría de documentación
- **mermaid-diagrams** - Creación de diagramas con Mermaid

---

## 📚 Documentación de Referencia

### Documentos Fundacionales (en `docs/`)

1. **01_PRD.md** - Product Requirements Document
2. **02_ADRs.md** - Architecture Decision Records
3. **03_TECH_SPEC.md** - Technical Specification
4. **04_Data_Model.md** - Database Specification
5. **05_GDD.md** - Game Design Document
6. **06_Content_Spec.md** - Content Specification
7. **07_UI_UX_Spec.md** - UI/UX Design
8. **08_Test_Plan.md** - Testing Strategy
9. **09_SECURITY_SPEC.md** - Security Specification

---

## ⚠️ Estado Actual del Proyecto

**IMPORTANTE**: Este proyecto está en fase inicial de desarrollo.

### Lo que existe:
- ✅ Configuración completa de Next.js + TypeScript + Tailwind
- ✅ Documentación extensiva (Caja 01 completa)
- ✅ Configuración de ESLint, Prettier, commitlint
- ✅ Estructura de carpetas planificada
- ✅ Skills y workflows de agentes configurados

### Lo que falta implementar:
- 🟡 Lógica de negocio en `src/`
- 🟡 Esquemas Zod en `schemas/`
- 🟡 Tests en `tests/`
- 🟡 Configuración de Supabase
- 🟡 Integración con servicios externos (Stripe, Replicate, etc.)
- 🟡 CI/CD pipeline

---

## ⚠️ Notas Importantes para Agentes

1. **Idioma**: La documentación está principalmente en español. Los comentarios en código y documentación técnica pueden estar en español o inglés según convención.

2. **Calidad Esperada**: Todo código debe ser de nivel "TOP 100 Mundial" - quirúrgico, no aproximado.

3. **Antes de Codificar**:
   - Leer la caja correspondiente en `docs/00_planning/cajas/`
   - Consultar PRD y Tech Spec para requisitos
   - Seguir ADRs para decisiones técnicas

4. **Reglas de No Negociables**:
   - ✅ Usar TypeScript en modo estricto
   - ✅ Tipos explícitos en funciones exportadas
   - ✅ Manejar errores con try/catch
   - ✅ Usar Zod para validación
   - ✅ Seguir principios SOLID
   - ✅ JSDoc para funciones públicas
   - ❌ NUNCA usar 'any' explícito
   - ❌ NUNCA dejar console.log en producción
   - ❌ NUNCA ignorar errores con @ts-ignore
   - ❌ NUNCA usar 'var' o 'let' innecesario

5. **Estructura de Server Actions**:
   ```typescript
   'use server';
   
   import { z } from 'zod';
   import { createClient } from '@/lib/supabase/server';
   
   const schema = z.object({ /* ... */ });
   
   /**
    * Descripción de la acción
    * @param input - Descripción del input
    * @returns Descripción del output
    * @throws Errores posibles
    */
   export async function actionName(input: Input): Promise<Output> {
     try {
       const validated = schema.parse(input);
       const supabase = createClient();
       const { data: { user } } = await supabase.auth.getUser();
       if (!user) throw new Error('UNAUTHORIZED');
       // ... lógica
       return { success: true, data: {} };
     } catch (error) {
       throw error;
     }
   }
   ```

---

*Última actualización: Febrero 2026*
*Versión del documento: 2.0.0*
