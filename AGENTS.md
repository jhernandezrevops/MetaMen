# AGENTS.md - MetaMen100

> **Guía de Referencia para Agentes de Código**
> 
> Este documento proporciona información esencial sobre el proyecto MetaMen100 para que los agentes de IA puedan trabajar de manera efectiva sin necesidad de conocimiento previo del sistema.

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
| **Frontend** | Next.js (App Router) | ^14.2.0 |
| **Lenguaje** | TypeScript | ^5.4.0 (strict mode) |
| **Backend** | Supabase (PostgreSQL + Auth) | PostgreSQL 15 |
| **Estilos** | Tailwind CSS + shadcn/ui | ^3.4.0 |
| **Estado** | Zustand | ^4.5.0 |
| **Data Fetching** | TanStack Query | ^5.0.0 |
| **Validación** | Zod | ^3.22.0 |
| **Animaciones** | Framer Motion | ^11.0.0 |
| **Colas** | Inngest | ^3.0.0 |
| **Pagos** | Stripe | ^14.0.0 |
| **Storage** | Cloudflare R2 | S3-compatible |
| **Emails** | Resend | ^2.0.0 |
| **IA/Imágenes** | Gemini 2.5 Flash / Replicate | Primary/Fallback |

### Arquitectura de Alto Nivel

```
┌─────────────────────────────────────────────────────────────┐
│  CLIENT LAYER (Next.js 14 + React 18)                      │
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
│   └── workflows/               # Workflows de desarrollo
│
├── 📁 .agents/skills/           # Skills de Kimi Code
│   ├── doc-coauthoring/         # Skill de documentación
│   └── mermaid-diagrams/        # Skill de diagramas
│
├── 📁 docs/                     # Documentación completa
│   ├── 00_planning/cajas/       # Planificación por cajas
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
│   ├── modelo1.json            # Obeso (Nivel 1)
│   ├── modelo2.json            # Flaco (Nivel 1)
│   ├── modelo3.json            # Fitness (Nivel 1)
│   └── ... (modelo4-6.json)
│
├── 📁 schemas/                  # Esquemas Zod
│
├── 📁 src/                      # Código fuente (estructura planificada)
│   ├── app/                     # Next.js App Router
│   ├── components/              # Componentes React
│   ├── lib/                     # Lógica pura, hooks, utils
│   ├── types/                   # Tipos TypeScript
│   └── styles/                  # Estilos globales
│
├── 📁 templates/                # Plantillas de código
│
└── 📁 tests/                    # Tests unitarios y E2E
```

---

## 🎯 Módulos Principales

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

## 🔧 Convenciones de Código

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

### TypeScript - Modo Estricto Obligatorio
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler"
  }
}
```

### Estructura de Server Actions
```typescript
'use server';

import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

// 1. Schema de validación
const schema = z.object({
  // Define inputs aquí
});

type Input = z.infer<typeof schema>;

interface Output {
  success: true;
  data: {
    // Define output aquí
  };
}

/**
 * [Descripción de la acción]
 * @param input - [Descripción del input]
 * @returns [Descripción del output]
 * @throws [Errores posibles]
 */
export async function actionName(input: Input): Promise<Output> {
  try {
    // 1. Validar input
    const validated = schema.parse(input);
    
    // 2. Obtener cliente autenticado
    const supabase = createClient();
    
    // 3. Verificar autorización
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('UNAUTHORIZED');
    
    // 4. Ejecutar operación
    // ... lógica aquí
    
    // 5. Revalidar caches
    revalidatePath('/dashboard');
    
    return { success: true, data: {} };
  } catch (error) {
    // Manejo de errores estandarizado
    throw error;
  }
}
```

### Reglas de Calidad
- ✅ Usar TypeScript en modo estricto
- ✅ Tipos explícitos en funciones exportadas
- ✅ Manejar errores con try/catch y tipos de error
- ✅ Usar Zod para validación de inputs
- ✅ Seguir principios SOLID
- ✅ JSDoc para funciones públicas
- ❌ NUNCA usar 'any' explícito
- ❌ NUNCA dejar console.log en producción
- ❌ NUNCA ignorar errores con @ts-ignore
- ❌ NUNCA usar 'var' o 'let' innecesario

---

## 🧪 Testing

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

### Herramientas de Testing
- **Unit/Integration**: Vitest
- **E2E**: Playwright
- **Component Testing**: @testing-library/react

---

## 🚀 Build y Despliegue

### Comandos de Desarrollo

```bash
# Instalación de dependencias
pnpm install

# Desarrollo local
pnpm dev

# Build de producción
pnpm build

# Verificación de tipos
pnpm type-check

# Linting
pnpm lint

# Formateo
pnpm format

# Tests
pnpm test              # Unit tests
pnpm test:e2e          # E2E tests
pnpm test:coverage     # Cobertura
```

### Pipeline CI/CD (GitHub Actions)
1. Lint & Type Check
2. Unit Tests
3. E2E Tests
4. Deploy Preview (PRs)
5. Deploy Production (main)

### Infraestructura
- **Hosting**: Vercel (Pro plan)
- **Base de Datos**: Supabase (managed PostgreSQL)
- **Storage**: Cloudflare R2 (imágenes)
- **Colas**: Inngest
- **Monitoreo**: Sentry + PostHog

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

### Checklist de Seguridad Pre-Deploy
- [ ] Validación de inputs con Zod
- [ ] Server Actions para operaciones sensibles
- [ ] RLS en todas las queries a Supabase
- [ ] No exponer secrets en cliente
- [ ] Sanitizar outputs (XSS prevention)
- [ ] Idempotency keys para operaciones críticas
- [ ] Rate limiting en APIs públicas

---

## 🎮 Sistema de Cajas (Organización del Trabajo)

El desarrollo está organizado en "cajas" (módulos de trabajo):

| Caja | Descripción | Estado |
|------|-------------|--------|
| 00 | Setup Inicial | 🟡 Pendiente |
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

## 📚 Documentación de Referencia

### Documentos Fundacionales (ya creados)
1. **01_PRD.md** - Product Requirements Document (~232KB)
2. **02_ADRs.md** - Architecture Decision Records (~232KB)
3. **03_TECH_SPEC.md** - Technical Specification (~191KB)
4. **04_Data_Model.md** - Database Specification (~164KB)
5. **05_GDD.md** - Game Design Document (~239KB)
6. **06_Content_Spec.md** - Content Specification (~83KB)
7. **07_UI_UX_Spec.md** - UI/UX Design (~127KB)
8. **08_Test_Plan.md** - Testing Strategy (~201KB)
9. **09_SECURITY_SPEC.md** - Security Specification (~194KB)

### Workflows de Desarrollo
Ubicados en `.agent/workflows/`:
- **implementar-caja.md** - Flujo para implementar una subcaja
- **refactorizar.md** - Refactorización quirúrgica
- **debug.md** - Debugging sistemático
- **server-action.md** - Template para Server Actions

---

## 🤖 Configuración de Agentes

### Skills Disponibles
El proyecto incluye las siguientes skills personalizadas:
- `doc-coauthoring` - Workflow de co-autoría de documentación
- `mermaid-diagrams` - Creación de diagramas con Mermaid
- `find-skills` - Descubrimiento de skills
- `kimi-cli-help` - Ayuda de Kimi CLI
- `skill-creator` - Creación de nuevas skills

### Workflows Predefinidos
Cuando trabajes en el proyecto, sigue estos workflows:

1. **Para implementar una caja**: Usar workflow `implementar-caja.md`
2. **Para crear una Server Action**: Usar template `server-action.md`
3. **Para debuggear**: Usar workflow `debug.md`
4. **Para refactorizar**: Usar workflow `refactorizar.md`

---

## ⚠️ Notas Importantes para Agentes

1. **Estado del Proyecto**: Este es un proyecto en fase inicial. La documentación está completa (Caja 01) pero el código fuente en `src/` aún no ha sido implementado.

2. **Idioma**: La documentación está principalmente en español. Los comentarios en código y documentación técnica pueden estar en español o inglés según convención.

3. **Calidad Esperada**: Todo código debe ser de nivel "TOP 100 Mundial" - quirúrgico, no aproximado.

4. **Antes de Codificar**: 
   - Leer la caja correspondiente en `docs/00_planning/cajas/`
   - Consultar PRD y Tech Spec para requisitos
   - Seguir ADRs para decisiones técnicas

5. **No Hacer**:
   - No sugerir tecnologías alternativas sin consultar ADRs
   - No ignorar las reglas de seguridad
   - No comprometer la calidad del código

---

## 📞 Recursos Adicionales

- **README.md**: Información básica del proyecto
- **checklist_agentes.md**: Checklist de skills y MCPs recomendados
- **docs/**: Documentación completa del proyecto

---

*Última actualización: Enero 2026*
*Versión del documento: 1.0.0*
