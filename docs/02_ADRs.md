# METAMEN100 - ARCHITECTURE DECISION RECORDS (ADRs)
## Registro de Decisiones Arquitectónicas de Nivel TOP-100 Mundial

---

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                    🏛️ ARCHITECTURE DECISION RECORDS v1.0                                         ║
║                    METAMEN100 - Fundamentos Técnicos Sólidos                                     ║
║                                                                                                  ║
║     "Cada decisión técnica documentada, cada trade-off justificado,                            ║
║      cada elección trazable hasta los requisitos de negocio."                                   ║
║                                                                                                  ║
║     Documento Clasificación: TOP-100 WORLDWIDE READY                                            ║
║     Última Actualización: Enero 2026                                                            ║
║     Estado: PRODUCCIÓN                                                                          ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

# ÍNDICE EJECUTIVO

1. [Introducción a los ADRs](#1-introducción-a-los-adrs)
2. [ADR-001: Stack Tecnológico Principal](#adr-001-stack-tecnológico-principal)
3. [ADR-002: Arquitectura de Base de Datos](#adr-002-arquitectura-de-base-de-datos)
4. [ADR-003: Sistema de Autenticación](#adr-003-sistema-de-autenticación)
5. [ADR-004: Generación de Imágenes con IA](#adr-004-generación-de-imágenes-con-ia)
6. [ADR-005: Arquitectura de Colas](#adr-005-arquitectura-de-colas)
7. [ADR-006: Sistema de Notificaciones](#adr-006-sistema-de-notificaciones)
8. [ADR-007: Modelo de Suscripción](#adr-007-modelo-de-suscripción)
9. [ADR-008: Estrategia de Caché](#adr-008-estrategia-de-caché)
10. [ADR-009: Seguridad y Encriptación](#adr-009-seguridad-y-encriptación)
11. [ADR-010: Escalabilidad Horizontal](#adr-010-escalabilidad-horizontal)
12. [ADR-011: Monitoreo y Observabilidad](#adr-011-monitoreo-y-observabilidad)
13. [ADR-012: Estrategia de Backup](#adr-012-estrategia-de-backup)
14. [ADR-013: Internacionalización](#adr-013-internacionalización)
15. [ADR-014: Arquitectura Frontend](#adr-014-arquitectura-frontend)
16. [ADR-015: API Gateway](#adr-015-api-gateway)
17. [ADR-016: Gestión de Assets Estáticos](#adr-016-gestión-de-assets-estáticos)
18. [ADR-017: Sistema de Logging](#adr-017-sistema-de-logging)
19. [ADR-018: Arquitectura de Microservicios](#adr-018-arquitectura-de-microservicios)
20. [ADR-019: Estrategia de Testing](#adr-019-estrategia-de-testing)
21. [ADR-020: Cumplimiento Legal (GDPR/LGPD)](#adr-020-cumplimiento-legal-gdprlgpd)
22. [Resumen de Decisiones](#resumen-de-decisiones)

---

# 1. INTRODUCCIÓN A LOS ADRs

## 1.1 Propósito

> **"La arquitectura de software es el conjunto de decisiones que serían difíciles de cambiar más tarde. Las documentamos para que cada elección sea consciente, justificada y trazable."**

Los Architecture Decision Records (ADRs) son documentos que capturan decisiones arquitectónicas importantes junto con su contexto y consecuencias. Este documento sirve como:

- **Memoria técnica** del proyecto
- **Justificación** ante stakeholders
- **Guía** para nuevos desarrolladores
- **Base** para auditorías técnicas

## 1.2 Formato de ADR

Cada ADR en este documento sigue el formato estándar:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ADR-XXX: TÍTULO DE LA DECISIÓN                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  Estado:          [Propuesto | Aceptado | En implementación | Obsoleto]    │
│  Fecha:           [Fecha de decisión]                                       │
│  Decisores:       [Personas que tomaron la decisión]                        │
│  Área:            [Backend | Frontend | Infraestructura | Seguridad | ...] │
├─────────────────────────────────────────────────────────────────────────────┤
│  CONTEXTO                                                                     │
│  ─────────                                                                  │
│  ¿Qué problema estamos resolviendo? ¿Qué fuerzas están en juego?           │
│                                                                             │
│  DECISIÓN                                                                     │
│  ────────                                                                   │
│  ¿Qué decidimos hacer? ¿Cuál es la solución elegida?                       │
│                                                                             │
│  JUSTIFICACIÓN                                                                │
│  ─────────────                                                              │
│  ¿Por qué esta opción? ¿Qué la hace superior a las alternativas?           │
│                                                                             │
│  ALTERNATIVAS CONSIDERADAS                                                    │
│  ──────────────────────────                                                 │
│  • Opción A: [Descripción] → [Por qué se rechazó]                          │
│  • Opción B: [Descripción] → [Por qué se rechazó]                          │
│                                                                             │
│  CONSECUENCIAS                                                                │
│  ─────────────                                                              │
│  Positivas: [Beneficios de la decisión]                                     │
│  Negativas: [Costos o trade-offs]                                           │
│  Riesgos:   [Riesgos identificados]                                         │
│                                                                             │
│  IMPLEMENTACIÓN                                                               │
│  ──────────────                                                             │
│  [Detalles técnicos de implementación]                                      │
│                                                                             │
│  MÉTRICAS DE ÉXITO                                                          │
│  ─────────────────                                                          │
│  [Cómo mediremos si la decisión fue correcta]                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 1.3 Principios de Arquitectura de METAMEN100

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         PRINCIPIOS ARQUITECTÓNICOS                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  1. ESCALABILIDAD HORIZONTAL                                                 ║
║     "Diseñado para crecer. Cada componente puede escalar independientemente."║
║                                                                              ║
║  2. RESILIENCIA                                                              ║
║     "Fallos aislados. Un componente caído no afecta al sistema global."     ║
║                                                                              ║
║  3. OBSERVABILIDAD                                                           ║
║     "Todo es medible. Métricas, logs y trazas en cada capa."                ║
║                                                                              ║
║  4. SEGURIDAD POR DISEÑO                                                     ║
║     "Seguridad no es un afterthought. Está en cada decisión."               ║
║                                                                              ║
║  5. COSTO-EFECTIVIDAD                                                        ║
║     "Cada dólar gastado debe generar valor medible."                        ║
║                                                                              ║
║  6. VELOCIDAD DE DESARROLLO                                                  ║
║     "Developer experience importa. Menos fricción = más features."          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

# ADR-001: STACK TECNOLÓGICO PRINCIPAL

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-001: STACK TECNOLÓGICO PRINCIPAL                                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Full Stack / Infraestructura                               ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 es una aplicación web de gamificación personal que requiere:

1. **Backend robusto:** Manejo de usuarios, tareas, progreso, economía virtual
2. **Generación de imágenes:** Integración con APIs de IA (Fal.ai, Replicate)
3. **Colas de procesamiento:** Generación asíncrona de imágenes
4. **Frontend moderno:** Experiencia de usuario fluida y responsiva
5. **Base de datos:** Relacional para datos estructurados
6. **Escalabilidad:** Capacidad de crecer sin re-arquitectura

Las tecnologías deben:
- Ser modernas y con comunidad activa
- Tener buen soporte en la nube (AWS, Vercel, Railway)
- Permitir desarrollo rápido sin sacrificar calidad
- Ser costo-efectivas para un startup en crecimiento

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  STACK ELEGIDO                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CAPA                    │  TECNOLOGÍA                                       │
│  ─────────────────────────────────────────────────────────────────────      │
│  Frontend                │  Next.js 15 (App Router) + React 19 + TypeScript  │
│  Estilos                 │  Tailwind CSS 4 + shadcn/ui                       │
│  Backend/API             │  Next.js API Routes + Server Actions              │
│  Base de Datos           │  PostgreSQL (Supabase)                            │
│  ORM                     │  Prisma ORM                                       │
│  Autenticación           │  Supabase Auth (PostgreSQL-based)                 │
│  Colas                   │  BullMQ + Redis                                   │
│  Storage                 │  Supabase Storage                                 │
│  Hosting                 │  Vercel (Frontend) + Railway/Render (Workers)    │
│  IA/Imágenes             │  Fal.ai (primario) + Replicate (backup)          │
│  Notificaciones          │  Web Push API + OneSignal                         │
│  Monitoreo               │  Vercel Analytics + LogRocket                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## JUSTIFICACIÓN

### ¿Por qué Next.js 15?

```
CRITERIO              │  NEXT.JS 15  │  ALTERNATIVAS  │  VEREDICTO
────────────────────────────────────────────────────────────────────────
Server Components     │  ✅ Nativo   │  Nuxt, Svelte  │  Menos JS al cliente
App Router            │  ✅ Estable  │  Pages Router  │  Mejor rendimiento
Server Actions        │  ✅ Built-in │  tRPC, REST    │  Menos boilerplate
TypeScript            │  ✅ First-class│ Manual       │  Type safety
Ecosistema            │  ✅ Masivo   │  Nuxt, Remix   │  Más recursos
Vercel Integration    │  ✅ Perfecta │  Manual        │  Deploy sin fricción
```

**Análisis detallado:**

Next.js 15 con App Router representa el estado del arte en frameworks React. Los Server Components permiten renderizar componentes en el servidor, reduciendo drásticamente el JavaScript enviado al cliente — crítico para una experiencia móvil fluida.

Los Server Actions eliminan la necesidad de APIs REST manuales para operaciones CRUD, reduciendo la complejidad del código y potenciales bugs de serialización.

### ¿Por qué Supabase?

```
CRITERIO              │  SUPABASE    │  ALTERNATIVAS  │  VEREDICTO
────────────────────────────────────────────────────────────────────────
PostgreSQL            │  ✅ Managed  │  RDS, Self-host│  Sin administración
Auth integrado        │  ✅ Built-in │  Auth0, Clerk  │  Unificado con DB
Realtime              │  ✅ Built-in │  Socket.io     │  Menos infraestructura
Storage               │  ✅ Built-in │  S3, Cloudinary│  Unificado
Costo                 │  ✅ Generoso │  Enterprise    │  Free tier amplio
Type Safety           │  ✅ Prisma   │  Manual        │  End-to-end types
```

**Análisis detallado:**

Supabase proporciona PostgreSQL administrado con autenticación, realtime subscriptions y storage en una sola plataforma. Esto reduce la complejidad operativa y los puntos de fallo.

La integración con Prisma ORM proporciona type safety end-to-end: los tipos de la base de datos se propagan automáticamente al frontend.

### ¿Por qué Fal.ai para imágenes?

```
CRITERIO              │  FAL.AI      │  ALTERNATIVAS  │  VEREDICTO
────────────────────────────────────────────────────────────────────────
Velocidad             │  ✅ ~8-15s   │  Replicate 30s │  Mejor UX
Costo                 │  ✅ $0.003/img│ DALL-E $0.04  │  10x más barato
Control               │  ✅ Avanzado │  Limitado      │  Más parámetros
Queue Management      │  ✅ Built-in │  Manual        │  Menos código
Webhook Support       │  ✅ Nativo   │  Manual        │  Async fácil
```

**Análisis detallado:**

Fal.ai fue elegido como proveedor primario por su velocidad y costo. Generar una imagen en ~8-15 segundos vs 30+ segundos de alternativas mejora significativamente la experiencia de usuario.

El costo de $0.003 por imagen (con Flux Schnell) permite escalar económicamente. Con 10,000 usuarios generando una imagen diaria, el costo mensual es ~$900 vs ~$12,000 con DALL-E.

### ¿Por qué BullMQ para colas?

```
CRITERIO              │  BULLMQ      │  ALTERNATIVAS  │  VEREDICTO
────────────────────────────────────────────────────────────────────────
Redis-based           │  ✅ Estándar │  SQS, RabbitMQ │  Infra simple
Priorities            │  ✅ Built-in │  Manual        │  Jobs urgentes primero
Retries               │  ✅ Configurable│ Manual      │  Resiliencia
Dashboard             │  ✅ Bull Board│  Manual        │  Observabilidad
TypeScript            │  ✅ First-class│  Manual       │  Type safety
```

**Análisis detallado:**

BullMQ sobre Redis proporciona un sistema de colas robusto con prioridades nativas — crítico para el sistema de generación de imágenes donde los usuarios con días exitosos deben tener prioridad.

La capacidad de reintentos configurables asegura que fallos temporales de la API de IA no resulten en pérdida de jobs.

## ALTERNATIVAS CONSIDERADAS

### Alternativa A: MERN Stack (MongoDB + Express + React + Node)

```
DESCRIPCIÓN:
Stack tradicional con MongoDB como base de datos NoSQL.

RAZÓN DE RECHAZO:
❌ MongoDB no es ideal para datos altamente relacionales (usuarios-tareas-progreso-items)
❌ Requiere más código para relaciones complejas
❌ Sin type safety nativo entre backend y frontend
❌ Mayor complejidad de autenticación (JWT manual)

VEREDICTO: Rechazado por complejidad innecesaria para datos relacionales.
```

### Alternativa B: Firebase (Firestore + Cloud Functions)

```
DESCRIPCIÓN:
Plataforma serverless de Google con Firestore como base de datos.

RAZÓN DE RECHAZO:
❌ Firestore es NoSQL documental, complejo para queries relacionales
❌ Vendor lock-in severo con Google
❌ Costos impredecibles a escala (cobro por lectura/escritura)
❌ Menos control sobre la infraestructura

VEREDICTO: Rechazado por vendor lock-in y costos impredecibles.
```

### Alternativa C: tRPC + Prisma + Next.js

```
DESCRIPCIÓN:
API type-safe con tRPC en lugar de Server Actions.

RAZÓN DE RECHAZO:
⚠️ tRPC es excelente pero añade capa de complejidad
⚠️ Server Actions de Next.js 15 cubre el 90% de casos de uso
⚠️ Menos código = menos bugs

VEREDICTO: Considerado pero Server Actions es suficiente y más simple.
```

### Alternativa D: Python Backend (FastAPI/Django)

```
DESCRIPCIÓN:
Backend separado en Python con frontend en Next.js.

RAZÓN DE RECHAZO:
❌ Duplica la infraestructura (2 deploys, 2 monitoreos)
❌ Overhead de comunicación entre servicios
❌ Menos type safety end-to-end
❌ Mayor costo operativo

VEREDICTO: Rechazado por complejidad operativa innecesaria.
```

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Desarrollo rápido** | Server Actions reducen 40% del código de API |
| **Type safety** | End-to-end TypeScript elimina clases de bugs |
| **Escalabilidad** | Cada capa puede escalar independientemente |
| **Costo predecible** | Supabase free tier + Vercel hobby inicial |
| **Comunidad activa** | Recursos abundantes, soluciones documentadas |
| **Developer experience** | Menos context switching, más productividad |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Vercel vendor lock-in** | Next.js puede deployarse en cualquier lugar |
| **Supabase dependencia** | PostgreSQL estándar, migración posible |
| **Curva de aprendizaje** | Documentación extensa y equipo capacitado |
| **Server Actions limitaciones** | Para casos complejos, usar API routes |

### Riesgos

```
RIESGO                              │  PROBABILIDAD  │  IMPACTO  │  MITIGACIÓN
────────────────────────────────────────────────────────────────────────────────
Fal.ai deja de operar               │  Baja          │  Alto     │  Replicate backup
Supabase cambia precios             │  Media         │  Medio    │  PostgreSQL portátil
Vercel limita hobby tier            │  Media         │  Medio    │  Plan pro pagado
Next.js introduce breaking changes  │  Baja          │  Medio    │  Tests de regresión
```

## IMPLEMENTACIÓN

### Estructura de Carpetas

```
metamen100/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Grupo de rutas de auth
│   │   ├── login/
│   │   ├── register/
│   │   └── callback/
│   ├── (dashboard)/              # Grupo de rutas protegidas
│   │   ├── dashboard/
│   │   ├── avatar/
│   │   ├── tools/
│   │   ├── shop/
│   │   └── settings/
│   ├── api/                      # API routes (webhooks, etc.)
│   └── layout.tsx
├── components/                   # Componentes React
│   ├── ui/                       # shadcn/ui components
│   ├── tools/                    # Componentes de herramientas
│   └── avatar/                   # Componentes del avatar
├── lib/                          # Utilidades y configuración
│   ├── db/                       # Prisma client y queries
│   ├── supabase/                 # Clientes Supabase
│   ├── queue/                    # Configuración BullMQ
│   └── ai/                       # Integraciones de IA
├── prisma/                       # Schema y migraciones
├── workers/                      # Workers de colas
│   └── image-generation.ts
├── types/                        # Tipos TypeScript globales
├── public/                       # Assets estáticos
└── tests/                        # Tests
```

### Dependencias Principales

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "@supabase/supabase-js": "^2.47.0",
    "@prisma/client": "^6.0.0",
    "bullmq": "^5.0.0",
    "ioredis": "^5.0.0",
    "@fal-ai/client": "^1.0.0",
    "replicate": "^1.0.0",
    "tailwindcss": "^4.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "zod": "^3.23.0",
    "react-hook-form": "^7.54.0",
    "@hookform/resolvers": "^3.9.0",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.469.0",
    "date-fns": "^4.1.0",
    "uuid": "^11.0.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.0",
    "prisma": "^6.0.0",
    "eslint": "^9.17.0",
    "prettier": "^3.4.0",
    "vitest": "^2.1.0",
    "@testing-library/react": "^16.1.0"
  }
}
```

## MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| **Tiempo de build** | < 60 segundos | Vercel dashboard |
| **Bundle size** | < 200KB inicial | Lighthouse |
| **LCP (Largest Contentful Paint)** | < 2.5s | Lighthouse |
| **Developer onboarding** | < 30 minutos | Feedback de nuevos devs |
| **Bug density** | < 0.5 bugs/100 líneas | Tracker de issues |

---

# ADR-002: ARQUITECTURA DE BASE DE DATOS

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-002: ARQUITECTURA DE BASE DE DATOS                                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Base de Datos / Backend                                    ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 maneja datos altamente relacionales:

- **Usuarios** tienen múltiples **Avatares** (a lo largo del tiempo)
- **Avatares** tienen **Vectores** (AURA, JAWLINE, etc.)
- **Usuarios** completan **Tareas** diarias
- **Tareas** pertenecen a **Arquetipos**
- **Usuarios** compran **Items** en la tienda
- **Items** tienen diferentes **Categorías**
- **Avatares** generan **Imágenes** diarias

La base de datos debe:
- Mantener integridad referencial
- Soportar queries complejas (reportes, estadísticas)
- Escalar horizontalmente si es necesario
- Ser fácilmente migrable

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  BASE DE DATOS ELEGIDA: PostgreSQL (via Supabase)                           │
│  ORM ELEGIDO: Prisma ORM                                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  MOTIVACIÓN:                                                                │
│  • Datos altamente relacionales requieren SQL                               │
│  • PostgreSQL es el estándar de facto para aplicaciones modernas            │
│  • Prisma proporciona type safety y migrations automáticas                  │
│  • Supabase administra PostgreSQL sin operaciones manuales                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## ESQUEMA DE BASE DE DATOS

### Diagrama Entidad-Relación (Simplificado)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         DIAGRAMA ER SIMPLIFICADO                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐       ┌──────────┐       ┌──────────┐                       │
│   │  users   │◄─────►│ avatars  │◄─────►│ vectors  │                       │
│   └──────────┘       └──────────┘       └──────────┘                       │
│        │                  │                                              │
│        │                  │                                              │
│        ▼                  ▼                                              │
│   ┌──────────┐       ┌──────────┐       ┌──────────┐                       │
│   │subscriptions│    │ images   │       │  items   │                       │
│   └──────────┘       └──────────┘       └──────────┘                       │
│        │                  │                  │                            │
│        │                  │                  │                            │
│        ▼                  ▼                  ▼                            │
│   ┌──────────┐       ┌──────────┐       ┌──────────┐                       │
│   │payments  │       │tasks     │       │inventory │                       │
│   └──────────┘       └──────────┘       └──────────┘                       │
│                                                                             │
│   Relaciones principales:                                                   │
│   • users 1:N avatars (un usuario puede tener múltiples ciclos)            │
│   • avatars 1:1 vectors (cada avatar tiene un estado de vectores)          │
│   • avatars 1:N images (cada avatar genera múltiples imágenes)             │
│   • users 1:N tasks (un usuario completa múltiples tareas)                 │
│   • users 1:N inventory (un usuario posee múltiples items)                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Schema Prisma Completo

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// =====================================================
// MODELOS DE USUARIO Y AUTENTICACIÓN
// =====================================================

model User {
  id                String    @id @default(uuid())
  email             String    @unique
  username          String?   @unique
  fullName          String?
  avatarUrl         String?
  
  // Campos de Supabase Auth
  supabaseUserId    String    @unique
  
  // Metadata
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  lastLoginAt       DateTime?
  
  // Relaciones
  avatars           Avatar[]
  subscriptions     Subscription[]
  payments          Payment[]
  tasks             TaskCompletion[]
  inventory         InventoryItem[]
  journalEntries    JournalEntry[]
  
  // Configuración
  settings          UserSettings?
  
  @@map("users")
}

model UserSettings {
  id                    String   @id @default(uuid())
  userId                String   @unique
  user                  User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Preferencias
  timezone              String   @default("America/Mexico_City")
  language              String   @default("es")
  theme                 String   @default("dark")
  
  // Notificaciones
  pushNotifications     Boolean  @default(true)
  emailNotifications    Boolean  @default(true)
  reminderTime          String   @default("20:00") // Hora del Judgement Night
  
  // Privacidad
  profileVisibility     String   @default("private") // private, friends, public
  
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt
  
  @@map("user_settings")
}

// =====================================================
// MODELOS DE SUSCRIPCIÓN
// =====================================================

model Subscription {
  id                String    @id @default(uuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Plan
  plan              String    // monthly, yearly
  status            String    // active, cancelled, expired, past_due
  
  // Fechas
  startedAt         DateTime  @default(now())
  expiresAt         DateTime
  cancelledAt       DateTime?
  
  // Proveedor de pago
  provider          String    // stripe, paypal
  providerSubscriptionId String?
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@map("subscriptions")
}

model Payment {
  id                String    @id @default(uuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Detalles del pago
  amount            Decimal   @db.Decimal(10, 2)
  currency          String    @default("USD")
  status            String    // succeeded, failed, pending, refunded
  
  // Proveedor
  provider          String    // stripe, paypal
  providerPaymentId String?
  
  // Metadata
  description       String?
  metadata          Json?
  
  createdAt         DateTime  @default(now())
  
  @@map("payments")
}

// =====================================================
// MODELOS DE AVATAR Y PROGRESO
// =====================================================

model Avatar {
  id                String    @id @default(uuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Identidad
  name              String?
  archetype         String    // rastas, muscles, pecas, grenas, rubio, lic
  
  // Progreso del ciclo
  currentDay        Int       @default(1)
  currentLevel      Int       @default(1)
  streakDays        Int       @default(0)
  healthPoints      Int       @default(10)
  maxHealthPoints   Int       @default(10)
  
  // Estado
  status            String    @default("active") // active, dead, completed
  
  // Fechas
  createdAt         DateTime  @default(now())
  completedAt       DateTime?
  diedAt            DateTime?
  
  // Relaciones
  vectors           AvatarVector?
  images            AvatarImage[]
  dailyLogs         DailyLog[]
  
  @@map("avatars")
}

model AvatarVector {
  id                String    @id @default(uuid())
  avatarId          String    @unique
  avatar            Avatar    @relation(fields: [avatarId], references: [id], onDelete: Cascade)
  
  // Vectores principales (escala 1-13)
  auraLevel         Decimal   @default(1.00) @db.Decimal(4, 2)
  faceLevel         Decimal   @default(1.00) @db.Decimal(4, 2)
  wealthLevel       Decimal   @default(1.00) @db.Decimal(4, 2)
  muscleLevel       Decimal   @default(1.00) @db.Decimal(4, 2)
  fatLevel          Decimal   @default(13.00) @db.Decimal(4, 2) // Inverso: 13 = obeso
  envLevel          Int       @default(1)
  
  // Metadata
  updatedAt         DateTime  @updatedAt
  
  @@map("avatar_vectors")
}

model DailyLog {
  id                String    @id @default(uuid())
  avatarId          String
  avatar            Avatar    @relation(fields: [avatarId], references: [id], onDelete: Cascade)
  
  // Día específico
  dayNumber         Int
  date              DateTime  @db.Date
  
  // Resultado
  completionRate    Decimal   @db.Decimal(5, 2) // Porcentaje 0-100
  result            String    // success, partial, failed, death
  
  // Cambios
  healthChange      Int       @default(0)
  auraChange        Decimal   @default(0.00) @db.Decimal(4, 2)
  faceChange        Decimal   @default(0.00) @db.Decimal(4, 2)
  wealthChange      Decimal   @default(0.00) @db.Decimal(4, 2)
  muscleChange      Decimal   @default(0.00) @db.Decimal(4, 2)
  fatChange         Decimal   @default(0.00) @db.Decimal(4, 2)
  
  // BTC ganados
  btcEarned         Int       @default(0)
  
  // Metadata
  createdAt         DateTime  @default(now())
  
  @@unique([avatarId, dayNumber])
  @@map("daily_logs")
}

// =====================================================
// MODELOS DE IMÁGENES
// =====================================================

model AvatarImage {
  id                String    @id @default(uuid())
  avatarId          String
  avatar            Avatar    @relation(fields: [avatarId], references: [id], onDelete: Cascade)
  
  // Día específico
  dayNumber         Int
  
  // URLs
  imageUrl          String    // URL de la imagen generada
  thumbnailUrl      String?   // URL del thumbnail
  
  // Estado de generación
  status            String    @default("pending") // pending, processing, completed, failed
  
  // Metadata de generación
  prompt            String    @db.Text
  generationTime    Int?      // Tiempo en segundos
  
  // Errores
  errorMessage      String?
  
  // Fechas
  createdAt         DateTime  @default(now())
  completedAt       DateTime?
  
  @@unique([avatarId, dayNumber])
  @@map("avatar_images")
}

// =====================================================
// MODELOS DE TAREAS
// =====================================================

model TaskDefinition {
  id                String    @id @default(uuid())
  
  // Identificación
  name              String
  slug              String    @unique
  description       String    @db.Text
  
  // Categoría
  archetype         String    // mental, cara, productividad, fisico
  category          String    // meditacion, lectura, gym, cardio, etc.
  
  // Recompensas
  btcReward         Int       @default(0)
  xpReward          Int       @default(0)
  
  // Impacto en vectores
  auraImpact        Decimal   @default(0.00) @db.Decimal(4, 2)
  faceImpact        Decimal   @default(0.00) @db.Decimal(4, 2)
  wealthImpact      Decimal   @default(0.00) @db.Decimal(4, 2)
  muscleImpact      Decimal   @default(0.00) @db.Decimal(4, 2)
  fatImpact         Decimal   @default(0.00) @db.Decimal(4, 2)
  
  // Configuración
  minDuration       Int?      // Duración mínima en minutos
  frequency         String    // daily, weekly, custom
  maxPerDay         Int       @default(1)
  
  // Estado
  isActive          Boolean   @default(true)
  
  // Relaciones
  completions       TaskCompletion[]
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@map("task_definitions")
}

model TaskCompletion {
  id                String    @id @default(uuid())
  
  // Relaciones
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  taskId            String
  task              TaskDefinition @relation(fields: [taskId], references: [id], onDelete: Cascade)
  
  // Avatar activo al momento
  avatarId          String?
  
  // Detalles de completado
  completedAt       DateTime  @default(now())
  duration          Int?      // Duración en minutos
  notes             String?   @db.Text
  metadata          Json?     // Datos adicionales (ej: pesos del gym)
  
  // Recompensas aplicadas
  btcEarned         Int       @default(0)
  xpEarned          Int       @default(0)
  
  @@map("task_completions")
}

// =====================================================
// MODELOS DE TIENDA E INVENTARIO
// =====================================================

model ShopItem {
  id                String    @id @default(uuid())
  
  // Identificación
  name              String
  slug              String    @unique
  description       String    @db.Text
  
  // Categoría
  category          String    // armadura, accesorios, vehiculos, propiedades, powerups
  subcategory       String?   // gorras, cadenas, relojes, etc.
  
  // Precio
  priceBtc          Int       @default(0)
  
  // Gating
  requiredLevel     Int       @default(1)
  requiredAura      Decimal?  @db.Decimal(4, 2)
  requiredFace      Decimal?  @db.Decimal(4, 2)
  requiredWealth    Decimal?  @db.Decimal(4, 2)
  requiredFatMax    Decimal?  @db.Decimal(4, 2) // Grasa máxima permitida
  
  // Visual
  imageUrl          String?
  
  // Token de IA (para inyección en prompts)
  aiToken           String    @db.Text
  
  // Estado
  isActive          Boolean   @default(true)
  isLimited         Boolean   @default(false) // Item de tiempo limitado
  limitedUntil      DateTime?
  
  // Relaciones
  inventoryItems    InventoryItem[]
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@map("shop_items")
}

model InventoryItem {
  id                String    @id @default(uuid())
  
  // Relaciones
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  shopItemId        String
  shopItem          ShopItem  @relation(fields: [shopItemId], references: [id], onDelete: Cascade)
  
  // Estado
  isEquipped        Boolean   @default(false)
  isLocked          Boolean   @default(false) // Bloqueado por nivel post-muerte
  
  // Fechas
  purchasedAt       DateTime  @default(now())
  equippedAt        DateTime?
  
  @@unique([userId, shopItemId])
  @@map("inventory_items")
}

// =====================================================
// MODELOS DE JOURNAL
// =====================================================

model JournalEntry {
  id                String    @id @default(uuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Contenido
  title             String?
  content           String    @db.Text
  
  // Análisis de IA (futuro)
  sentiment         String?   // positive, neutral, negative
  keywords          String[]
  
  // Fecha del entry (puede ser diferente a createdAt)
  entryDate         DateTime  @db.Date
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@map("journal_entries")
}

// =====================================================
// MODELOS DE SISTEMA
// =====================================================

model QueueJob {
  id                String    @id @default(uuid())
  
  // Identificación
  name              String
  queue             String    // image-generation, notifications, etc.
  
  // Datos
  data              Json
  
  // Estado
  status            String    @default("pending") // pending, processing, completed, failed
  
  // Prioridad
  priority          Int       @default(0) // Mayor = más prioritario
  
  // Reintentos
  attempts          Int       @default(0)
  maxAttempts       Int       @default(3)
  
  // Errores
  errorMessage      String?
  
  // Fechas
  createdAt         DateTime  @default(now())
  processedAt       DateTime?
  completedAt       DateTime?
  
  @@index([status, priority, createdAt])
  @@map("queue_jobs")
}

model SystemLog {
  id                String    @id @default(uuid())
  
  // Metadata
  level             String    // info, warn, error, debug
  message           String    @db.Text
  context           String?   // Componente que generó el log
  
  // Datos adicionales
  metadata          Json?
  userId            String?
  
  // Fecha
  createdAt         DateTime  @default(now())
  
  @@index([level, createdAt])
  @@index([userId, createdAt])
  @@map("system_logs")
}
```

## JUSTIFICACIÓN

### ¿Por qué PostgreSQL sobre MongoDB?

```
CRITERIO              │  POSTGRESQL  │  MONGODB       │  VEREDICTO
────────────────────────────────────────────────────────────────────────
Relaciones complejas  │  ✅ JOINs     │  ⚠️ Manual     │  SQL gana
Integridad referencial│  ✅ FKs       │  ❌ No nativo  │  SQL gana
Type safety           │  ✅ Prisma    │  ⚠️ Parcial    │  SQL gana
Queries analíticas    │  ✅ SQL       │  ⚠️ Aggregation│  SQL gana
Ecosistema            │  ✅ Maduro    │  ✅ Maduro     │  Empate
Escalabilidad         │  ✅ Read replicas│ ⚠️ Sharding │  SQL gana
```

**Análisis detallado:**

Los datos de METAMEN100 son intrínsecamente relacionales. Un usuario tiene avatares, un avatar tiene vectores, un avatar genera imágenes, un usuario completa tareas. Estas relaciones son naturales de modelar en SQL con foreign keys.

MongoDB requeriría denormalización o múltiples queries para obtener datos relacionados, aumentando la complejidad del código y riesgo de inconsistencias.

### ¿Por qué Prisma ORM?

```
CRITERIO              │  PRISMA      │  TYPEORM       │  DRIZZLE   │  RAW SQL
────────────────────────────────────────────────────────────────────────────────
Type safety           │  ✅ Excelente │  ⚠️ Buena      │  ✅ Buena  │  ❌ Manual
Migrations            │  ✅ Automático│  ✅ Automático │  ⚠️ Manual │  ❌ Manual
Developer experience  │  ✅ Mejor     │  ⚠️ Buena      │  ⚠️ Buena  │  ❌ Peor
Query builder         │  ✅ Intuitivo │  ⚠️ Verboso    │  ✅ SQL-like│ ❌ N/A
Performance           │  ⚠️ Buena     │  ⚠️ Buena      │  ✅ Mejor  │  ✅ Óptima
Comunidad             │  ✅ Grande    │  ✅ Grande     │  ⚠️ Creciente│ N/A
```

**Análisis detallado:**

Prisma proporciona la mejor developer experience con type safety end-to-end. El Prisma Client genera tipos TypeScript automáticamente del schema, eliminando clases enteras de bugs.

Las migraciones automáticas permiten evolucionar el schema sin scripts manuales de SQL.

## ALTERNATIVAS CONSIDERADAS

### Alternativa A: MongoDB Atlas

```
DESCRIPCIÓN:
Base de datos NoSQL documental administrada.

RAZÓN DE RECHAZO:
❌ Modelado de relaciones complejo y propenso a errores
❌ Sin integridad referencial nativa
❌ Queries analíticas más difíciles
❌ Costos impredecibles a escala

VEREDICTO: Rechazado por inadecuación para datos relacionales.
```

### Alternativa B: MySQL (RDS)

```
DESCRIPCIÓN:
Base de datos SQL tradicional via AWS RDS.

RAZÓN DE RECHAZO:
⚠️ PostgreSQL tiene mejor soporte para JSON y arrays
⚠️ PostgreSQL es el estándar en el ecosistema moderno
⚠️ Supabase solo soporta PostgreSQL

VEREDICTO: PostgreSQL es superior para casos de uso modernos.
```

### Alternativa C: Drizzle ORM

```
DESCRIPCIÓN:
ORM moderno con enfoque SQL-first.

RAZÓN DE RECHAZO:
⚠️ Comunidad más pequeña que Prisma
⚠️ Menos tooling (Prisma Studio, etc.)
⚠️ Curva de aprendizaje más pronunciada

VEREDICTO: Prometedor pero Prisma es más maduro para producción.
```

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Type safety** | Zero runtime errors por tipos incorrectos |
| **Migraciones automáticas** | Evolución del schema sin dolor |
| **Prisma Studio** | UI para inspeccionar datos en desarrollo |
| **SQL estándar** | Portabilidad entre proveedores |
| **Supabase managed** | Sin operaciones de base de datos |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Prisma overhead** | Query caching, connection pooling |
| **Schema rigidez** | Migraciones planificadas |
| **Vendor lock-in Supabase** | PostgreSQL estándar, migrable |

## IMPLEMENTACIÓN

### Configuración de Prisma

```typescript
// lib/db/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' 
    ? ['query', 'error', 'warn'] 
    : ['error'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

### Patrón de Repositorio (Opcional)

```typescript
// lib/db/repositories/user.repository.ts
import { prisma } from '../prisma'

export const UserRepository = {
  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        avatars: {
          where: { status: 'active' },
          include: { vectors: true }
        }
      }
    })
  },
  
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email }
    })
  },
  
  async create(data: { email: string; supabaseUserId: string }) {
    return prisma.user.create({
      data: {
        ...data,
        settings: { create: {} }
      }
    })
  },
  
  // ... más métodos
}
```

## MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| **Query time p95** | < 100ms | Prisma logs |
| **Migration time** | < 30 segundos | CI/CD logs |
| **Zero-downtime deploys** | 100% | Uptime monitoring |
| **Data integrity errors** | 0 | Error tracking |

---

# ADR-003: SISTEMA DE AUTENTICACIÓN

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-003: SISTEMA DE AUTENTICACIÓN                                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Seguridad / Backend                                        ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 requiere un sistema de autenticación que:

1. **Sea seguro:** Protección contra ataques comunes (SQL injection, XSS, CSRF)
2. **Sea escalable:** Manejar miles de usuarios concurrentes
3. **Sea fácil de usar:** Login social, magic links, mínima fricción
4. **Sea mantenible:** Sin código de autenticación custom propio
5. **Sea integrable:** Funcionar con Supabase y Next.js

Las opciones incluyen:
- Auth propio (JWT manual, bcrypt, etc.)
- Supabase Auth (integrado con PostgreSQL)
- Auth0 / Clerk (servicios externos)
- Firebase Auth

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SISTEMA DE AUTENTICACIÓN ELEGIDO: Supabase Auth                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  MÉTODOS DE AUTENTICACIÓN SOPORTADOS:                                       │
│  ─────────────────────────────────────                                      │
│  • Email + Password                                                         │
│  • Magic Link (passwordless)                                                │
│  • OAuth Social (Google, GitHub, Discord)                                   │
│  • OTP (One-Time Password)                                                  │
│                                                                             │
│  FLUJO DE SESIÓN:                                                           │
│  ────────────────                                                           │
│  1. Usuario se autentica via Supabase Auth                                  │
│  2. Supabase genera JWT con claims                                          │
│  3. JWT se almacena en cookie httpOnly                                      │
│  4. Middleware de Next.js valida JWT en cada request                        │
│  5. Server Actions reciben usuario autenticado                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## ARQUITECTURA DE AUTENTICACIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FLUJO DE AUTENTICACIÓN                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐  │
│   │ Usuario │────►│  Next.js    │────►│  Supabase   │────►│  PostgreSQL │  │
│   │         │     │  Frontend   │     │  Auth       │     │  (Users)    │  │
│   └─────────┘     └─────────────┘     └─────────────┘     └─────────────┘  │
│        │                 │                   │                   │          │
│        │                 │                   │                   │          │
│        │  1. Login       │                   │                   │          │
│        │────────────────►│                   │                   │          │
│        │                 │  2. Auth request  │                   │          │
│        │                 │──────────────────►│                   │          │
│        │                 │                   │  3. Validate      │          │
│        │                 │                   │──────────────────►│          │
│        │                 │                   │                   │          │
│        │                 │  4. JWT + User    │                   │          │
│        │                 │◄──────────────────│                   │          │
│        │  5. Set cookie  │                   │                   │          │
│        │◄────────────────│                   │                   │          │
│        │                 │                   │                   │          │
│   ┌─────────┐           │                   │                   │          │
│   │ Cookie  │◄──────────┘                   │                   │          │
│   │ httpOnly│                               │                   │          │
│   └─────────┘                               │                   │          │
│                                                                             │
│   SUBSEQUENT REQUESTS:                                                      │
│   ┌─────────┐     ┌─────────────┐     ┌─────────────┐                      │
│   │ Cookie  │────►│  Middleware │────►│  Server     │                      │
│   │ JWT     │     │  Next.js    │     │  Action/API │                      │
│   └─────────┘     └─────────────┘     └─────────────┘                      │
│                           │                                               │
│                           │  Validate JWT                                 │
│                           │  Extract userId                               │
│                           │  Attach to request                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## JUSTIFICACIÓN

### ¿Por qué Supabase Auth sobre alternativas?

```
CRITERIO              │  SUPABASE   │  AUTH0      │  CLERK      │  FIREBASE
────────────────────────────────────────────────────────────────────────────────
Costo                 │  ✅ Gratis  │  ⚠️ $$$     │  ⚠️ $$$     │  ✅ Gratis
Integración DB        │  ✅ Nativa  │  ❌ API     │  ❌ API     │  ❌ NoSQL
Next.js SDK           │  ✅ Oficial │  ⚠️ Comunidad│ ✅ Oficial │  ⚠️ Comunidad
Social Login          │  ✅ Built-in│  ✅ Built-in│  ✅ Built-in│  ✅ Built-in
Row Level Security    │  ✅ Nativo  │  ❌ N/A     │  ❌ N/A     │  ❌ N/A
Magic Links           │  ✅ Built-in│  ✅ Built-in│  ✅ Built-in│  ✅ Built-in
Self-hosting          │  ✅ Posible │  ❌ No      │  ❌ No      │  ❌ No
```

**Análisis detallado:**

Supabase Auth es la opción óptima porque:

1. **Integración nativa con PostgreSQL:** Los usuarios de auth se sincronizan automáticamente con la tabla `users` de la aplicación
2. **Row Level Security (RLS):** Políticas de seguridad a nivel de fila en PostgreSQL
3. **Sin costo adicional:** Incluido en el tier gratuito de Supabase
4. **SDK oficial para Next.js:** Integración probada y documentada
5. **Control total:** Podemos self-hostar si es necesario

### Row Level Security (RLS)

```sql
-- Ejemplo de políticas RLS en Supabase

-- Habilitar RLS en tabla de avatares
ALTER TABLE avatars ENABLE ROW LEVEL SECURITY;

-- Política: Usuarios solo pueden ver sus propios avatares
CREATE POLICY "Users can only view their own avatars"
ON avatars FOR SELECT
USING (user_id = auth.uid());

-- Política: Usuarios solo pueden insertar avatares para sí mismos
CREATE POLICY "Users can only create their own avatars"
ON avatars FOR INSERT
WITH CHECK (user_id = auth.uid());

-- Política: Usuarios solo pueden actualizar sus propios avatares
CREATE POLICY "Users can only update their own avatars"
ON avatars FOR UPDATE
USING (user_id = auth.uid());
```

## ALTERNATIVAS CONSIDERADAS

### Alternativa A: Auth0

```
DESCRIPCIÓN:
Servicio de autenticación empresarial de Okta.

RAZÓN DE RECHAZO:
❌ Costo significativo a escala ($23/1000 usuarios/mes)
❌ Vendor lock-in severo
❌ Integración con DB requiere webhooks complejos
❌ Overkill para un startup en crecimiento

VEREDICTO: Rechazado por costo y complejidad innecesaria.
```

### Alternativa B: Clerk

```
DESCRIPCIÓN:
Servicio de autenticación moderno con excelente DX.

RAZÓN DE RECHAZO:
⚠️ Costo a escala ($25/mes base + $0.02/MAU)
⚠️ No tiene integración nativa con PostgreSQL
⚠️ Menos maduro que Supabase Auth

VEREDICTO: Buena opción pero Supabase es más integrado.
```

### Alternativa C: Autenticación Propia (JWT manual)

```
DESCRIPCIÓN:
Implementar auth desde cero con bcrypt, JWT, etc.

RAZÓN DE RECHAZO:
❌ Riesgo de seguridad (implementación propia = bugs)
❌ Mantenimiento continuo
❌ Sin features avanzadas (social login, magic links)
❌ Tiempo de desarrollo significativo

VEREDICTO: Rechazado por riesgo de seguridad y tiempo.
```

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Seguridad probada** | Supabase Auth maneja miles de apps |
| **Sin código de auth** | 80% menos código de autenticación |
| **Features avanzadas** | Magic links, social login, MFA |
| **RLS nativo** | Seguridad a nivel de base de datos |
| **Sin costo adicional** | Incluido en Supabase |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Dependencia de Supabase** | Podemos migrar a auth propio si es necesario |
| **Menos control** | Webhooks para casos especiales |
| **Customización limitada** | UI components personalizables |

## IMPLEMENTACIÓN

### Configuración de Supabase Auth

```typescript
// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)
```

```typescript
// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )
}
```

### Middleware de Autenticación

```typescript
// middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value)
          })
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  // Refresh session if expired
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard') && !user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect logged-in users from auth pages
  if ((request.nextUrl.pathname === '/login' || 
       request.nextUrl.pathname === '/register') && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
```

### Server Actions con Autenticación

```typescript
// app/actions/avatar.actions.ts
'use server'

import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { revalidatePath } from 'next/cache'

export async function getCurrentAvatar() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('Unauthorized')
  }

  const avatar = await prisma.avatar.findFirst({
    where: {
      userId: user.id,
      status: 'active'
    },
    include: {
      vectors: true
    }
  })

  return avatar
}

export async function completeTask(taskId: string, data: TaskCompletionData) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('Unauthorized')
  }

  // ... lógica de completar tarea
  
  revalidatePath('/dashboard')
}
```

## MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| **Login success rate** | > 98% | Supabase analytics |
| **Session duration** | > 7 días | User behavior |
| **Auth-related errors** | < 0.1% | Error tracking |
| **Time to implement auth** | < 2 días | Development logs |

---


# ADR-004: GENERACIÓN DE IMÁGENES CON IA

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-004: GENERACIÓN DE IMÁGENES CON IA                                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            IA / Backend / Infraestructura                             ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

El feature distintivo de METAMEN100 es la **generación diaria de imágenes del avatar** basada en el progreso del usuario. Este sistema debe:

1. **Ser rápido:** < 30 segundos de espera para el usuario
2. **Ser consistente:** Mismo personaje, diferentes estados
3. **Ser económico:** Costo predecible y escalable
4. **Ser confiable:** Fallback si el proveedor primario falla
5. **Ser escalable:** Manejar picos de generación (00:00 hora local de cada usuario)

Los proveedores considerados:
- **Fal.ai:** API de generación de imágenes, especializado en Flux
- **Replicate:** Plataforma de modelos de ML, incluye Flux
- **OpenAI DALL-E 3:** API de OpenAI
- **Midjourney:** API (limitada, vía Discord)
- **Stability AI:** API de Stable Diffusion
- **Self-hosted:** Modelos locales (SDXL, etc.)

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PROVEEDOR PRIMARIO: Fal.ai (Flux Schnell)                                  │
│  PROVEEDOR BACKUP: Replicate (Flux Schnell)                                 │
│  MODELO: Flux Schnell (8B parameters, ~8-15s generación)                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ARQUITECTURA:                                                              │
│  ────────────                                                               │
│                                                                             │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                   │
│  │   Usuario   │────►│  BullMQ     │────►│   Fal.ai    │                   │
│  │   Request   │     │   Queue     │     │   API       │                   │
│  └─────────────┘     └─────────────┘     └─────────────┘                   │
│                              │                     │                        │
│                              │                     │                        │
│                              ▼                     ▼                        │
│                       ┌─────────────┐     ┌─────────────┐                   │
│                       │   Redis     │     │  Webhook    │                   │
│                       │   Store     │     │  Callback   │                   │
│                       └─────────────┘     └─────────────┘                   │
│                                                   │                         │
│                                                   ▼                         │
│                                            ┌─────────────┐                  │
│                                            │  Supabase   │                  │
│                                            │  Storage    │                  │
│                                            └─────────────┘                  │
│                                                                             │
│  FLUJO:                                                                     │
│  1. Judgement Night encola job de generación                                │
│  2. Worker procesa job con prioridad                                        │
│  3. Llama a Fal.ai con prompt construido                                    │
│  4. Fal.ai genera imagen y llama webhook                                    │
│  5. Webhook guarda imagen en Supabase Storage                               │
│  6. Notificación al usuario vía WebSocket/Push                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## ARQUITECTURA DETALLADA

### Sistema de Prompts

```typescript
// lib/ai/prompt-builder.ts

interface VectorState {
  auraLevel: number
  faceLevel: number
  wealthLevel: number
  muscleLevel: number
  fatLevel: number
  envLevel: number
}

interface AvatarConfig {
  archetype: 'rastas' | 'muscles' | 'pecas' | 'grenas' | 'rubio' | 'lic'
  equippedItems: string[]
}

export class PromptBuilder {
  // Identity Anchors por arquetipo (INMUTABLES)
  private static readonly IDENTITY_ANCHORS: Record<string, string> = {
    rastas: 'brown dreadlocks, thick locks, well-maintained, round face, friendly eyes, warm brown skin',
    muscles: 'bald, shaved head, clean scalp, square jaw, small intense eyes, thick neck, tan skin',
    pecas: 'curly red-brown hair, messy, freckles covering face, thin face, pale skin',
    grenas: 'balding with long hair in back, goatee beard, angular face, weathered skin',
    rubio: 'blonde wavy hair, styled back, strong jaw, blue eyes, fair skin',
    lic: 'black hair, receding hairline, rectangular glasses, stubble, olive skin'
  }

  // Tokens de físico por nivel
  private static getPhysiqueToken(muscleLevel: number, fatLevel: number): string {
    const physiqueScore = (muscleLevel + (14 - fatLevel)) / 2
    
    if (physiqueScore <= 3) return 'severely overweight, hanging belly, no muscle definition, soft body'
    if (physiqueScore <= 6) return 'overweight but firm, some muscle under fat, broader shoulders emerging'
    if (physiqueScore <= 9) return 'fit body, visible muscles, some abdominal definition, athletic build'
    if (physiqueScore <= 11) return 'muscular body, six pack visible, V-taper, vascular arms'
    return 'bodybuilder physique, extreme definition, full vascularity, perfect proportions'
  }

  // Tokens de ropa por nivel de wealth
  private static getClothingToken(wealthLevel: number): string {
    if (wealthLevel <= 3) return 'tattered dirty clothes, stained t-shirt, worn-out pants'
    if (wealthLevel <= 6) return 'clean basic clothes, simple shirt, basic watch, presentable'
    if (wealthLevel <= 8) return 'branded clothing, quality fabrics, designer watch, subtle jewelry'
    if (wealthLevel <= 10) return 'tailored suit, luxury watch, gold chain, designer accessories'
    return 'bespoke clothing, rare timepieces, exclusive accessories, futuristic luxury'
  }

  // Tokens de entorno por nivel
  private static getEnvironmentToken(envLevel: number): string {
    const environments: Record<number, string> = {
      1: 'dark alley under bridge, cardboard boxes, rain, trash bags, barrel fires, toxic fog',
      2: 'abandoned building, broken windows, graffiti, debris, dim lighting',
      3: 'small service room, pawn shop office, CRT monitors, pizza boxes, exposed wiring',
      4: 'modest apartment, second-hand furniture, single window, basic kitchen',
      5: 'modern cubicle, coffee shop, clean desk, monstera plant, city view',
      6: 'nice apartment, IKEA furniture, organized space, natural light',
      7: 'luxury penthouse, marble floors, floor-to-ceiling windows, skyline view',
      8: 'executive suite, designer furniture, art collection, smart home',
      9: 'private mansion, gardens, pool, home theater, wine cellar',
      10: 'global command center, holographic displays, throne, robot assistants',
      11: 'sky palace, floating architecture, aurora borealis background',
      12: 'space station, Earth view, zero gravity elements, advanced technology',
      13: 'divine realm, golden light, ethereal architecture, clouds, celestial'
    }
    return environments[envLevel] || environments[1]
  }

  // Construir prompt completo
  static buildPrompt(vectors: VectorState, config: AvatarConfig): string {
    const identity = this.IDENTITY_ANCHORS[config.archetype]
    const physique = this.getPhysiqueToken(vectors.muscleLevel, vectors.fatLevel)
    const clothing = this.getClothingToken(vectors.wealthLevel)
    const environment = this.getEnvironmentToken(vectors.envLevel)
    
    // Items equipados
    const itemsPrompt = config.equippedItems.length > 0 
      ? `wearing ${config.equippedItems.join(', ')}` 
      : ''

    return `
      Professional character portrait, full body shot, 
      ${identity},
      ${physique},
      ${clothing},
      ${itemsPrompt},
      standing in ${environment},
      dramatic lighting, cinematic composition, 
      8k quality, photorealistic, highly detailed
    `.trim().replace(/\s+/g, ' ')
  }
}
```

### Worker de Generación de Imágenes

```typescript
// workers/image-generation.ts
import { Queue, Worker } from 'bullmq'
import { fal } from '@fal-ai/client'
import { replicate } from '@/lib/ai/replicate'
import { supabase } from '@/lib/supabase/client'
import { PromptBuilder } from '@/lib/ai/prompt-builder'
import { prisma } from '@/lib/db/prisma'

// Configurar Fal.ai
fal.config({
  credentials: process.env.FAL_KEY
})

interface ImageGenerationJob {
  avatarId: string
  userId: string
  dayNumber: number
  vectors: VectorState
  config: AvatarConfig
  priority: number // 1-10, mayor = más prioritario
}

// Cola de generación
export const imageQueue = new Queue<ImageGenerationJob>('image-generation', {
  connection: redis,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000
    }
  }
})

// Worker de procesamiento
export const imageWorker = new Worker<ImageGenerationJob>(
  'image-generation',
  async (job) => {
    const { avatarId, userId, dayNumber, vectors, config } = job.data
    
    console.log(`[Worker] Generating image for avatar ${avatarId}, day ${dayNumber}`)
    
    // Construir prompt
    const prompt = PromptBuilder.buildPrompt(vectors, config)
    
    // Registrar inicio
    await prisma.avatarImage.create({
      data: {
        avatarId,
        dayNumber,
        prompt,
        status: 'processing'
      }
    })
    
    const startTime = Date.now()
    
    try {
      // Intentar con Fal.ai primero
      const result = await generateWithFal(prompt, avatarId, dayNumber)
      
      const generationTime = (Date.now() - startTime) / 1000
      
      // Descargar y subir a Supabase Storage
      const imageUrl = await downloadAndUpload(result.image.url, userId, avatarId, dayNumber)
      
      // Actualizar registro
      await prisma.avatarImage.update({
        where: { avatarId_dayNumber: { avatarId, dayNumber } },
        data: {
          imageUrl,
          status: 'completed',
          generationTime,
          completedAt: new Date()
        }
      })
      
      // Notificar al usuario
      await notifyUser(userId, {
        type: 'image_generated',
        avatarId,
        dayNumber,
        imageUrl
      })
      
      console.log(`[Worker] Image generated successfully in ${generationTime}s`)
      
    } catch (error) {
      console.error('[Worker] Fal.ai failed, trying Replicate:', error)
      
      try {
        // Fallback a Replicate
        const result = await generateWithReplicate(prompt)
        const imageUrl = await downloadAndUpload(result, userId, avatarId, dayNumber)
        
        await prisma.avatarImage.update({
          where: { avatarId_dayNumber: { avatarId, dayNumber } },
          data: {
            imageUrl,
            status: 'completed',
            completedAt: new Date()
          }
        })
        
      } catch (fallbackError) {
        // Ambos proveedores fallaron
        await prisma.avatarImage.update({
          where: { avatarId_dayNumber: { avatarId, dayNumber } },
          data: {
            status: 'failed',
            errorMessage: (fallbackError as Error).message
          }
        })
        
        throw fallbackError
      }
    }
  },
  {
    connection: redis,
    concurrency: 5 // Procesar 5 jobs simultáneamente
  }
)

// Generar con Fal.ai
async function generateWithFal(prompt: string, avatarId: string, dayNumber: number) {
  return await fal.subscribe('fal-ai/flux/schnell', {
    input: {
      prompt,
      image_size: 'portrait_4_3',
      num_inference_steps: 4,
      seed: Math.floor(Math.random() * 1000000), // Seed aleatorio para variación
      enable_safety_checker: false // Contenido controlado por nosotros
    },
    webhookUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/fal`,
    webhookSecret: process.env.FAL_WEBHOOK_SECRET
  })
}

// Generar con Replicate (fallback)
async function generateWithReplicate(prompt: string) {
  const output = await replicate.run(
    'black-forest-labs/flux-schnell',
    {
      input: {
        prompt,
        aspect_ratio: '4:3',
        output_format: 'png'
      }
    }
  )
  
  return output as string
}

// Descargar imagen y subir a Supabase Storage
async function downloadAndUpload(
  imageUrl: string, 
  userId: string, 
  avatarId: string, 
  dayNumber: number
): Promise<string> {
  // Descargar imagen
  const response = await fetch(imageUrl)
  const blob = await response.blob()
  
  // Generar nombre único
  const fileName = `${userId}/${avatarId}/day-${dayNumber}-${Date.now()}.png`
  
  // Subir a Supabase Storage
  const { data, error } = await supabase
    .storage
    .from('avatar-images')
    .upload(fileName, blob, {
      contentType: 'image/png',
      upsert: true
    })
  
  if (error) throw error
  
  // Obtener URL pública
  const { data: { publicUrl } } = supabase
    .storage
    .from('avatar-images')
    .getPublicUrl(fileName)
  
  return publicUrl
}

// Notificar al usuario
async function notifyUser(userId: string, data: any) {
  // WebSocket o Push notification
  // Implementación depende del sistema de notificaciones elegido
}
```

### Webhook Handler

```typescript
// app/api/webhooks/fal/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'
import { prisma } from '@/lib/db/prisma'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('x-fal-signature')
  
  // Verificar firma
  const expectedSignature = createHmac('sha256', process.env.FAL_WEBHOOK_SECRET!)
    .update(body)
    .digest('hex')
  
  if (signature !== expectedSignature) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }
  
  const data = JSON.parse(body)
  
  // El webhook de Fal.ai notifica cuando la imagen está lista
  // Pero ya estamos usando el resultado directo en el worker
  // Este endpoint sirve como backup/logging
  
  console.log('[Webhook] Fal.ai callback received:', data)
  
  return NextResponse.json({ received: true })
}
```

## JUSTIFICACIÓN

### Comparativa de Proveedores de IA

```
PROVEEDOR      │  COSTO/IMAGEN  │  VELOCIDAD  │  CALIDAD  │  CONSISTENCIA  │  VEREDICTO
────────────────────────────────────────────────────────────────────────────────────────
Fal.ai Flux    │  $0.003        │  ~8-15s     │  ★★★★★    │  ★★★★☆         │  ✅ PRIMARIO
Replicate Flux │  $0.003        │  ~15-30s    │  ★★★★★    │  ★★★★☆         │  ✅ BACKUP
DALL-E 3       │  $0.04         │  ~5-10s     │  ★★★★★    │  ★★★★★         │  ❌ Costo
Midjourney     │  ~$0.05        │  ~60s       │  ★★★★★    │  ★★★★★         │  ❌ API limitada
Stable Diff XL │  $0.002        │  ~10s       │  ★★★★☆    │  ★★★☆☆         │  ⚠️ Calidad
Self-hosted    │  $0 (hardware) │  ~30s       │  ★★★★☆    │  ★★★★☆         │  ⚠️ Complejidad
```

**Análisis detallado:**

**Fal.ai** es el proveedor primario por:
1. **Velocidad:** ~8-15 segundos vs 15-30 de Replicate
2. **Costo:** $0.003/imagen (Flux Schnell)
3. **Queue management nativo:** Maneja picos automáticamente
4. **Webhook support:** Notificaciones asíncronas

**Replicate** es el backup por:
1. **Misma calidad:** Mismo modelo (Flux)
2. **Disponibilidad:** Diferente infraestructura = redundancia
3. **Costo similar:** $0.003/imagen

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Velocidad** | UX superior con ~8-15s de espera |
| **Costo escalable** | ~$900/mes para 10K usuarios diarios |
| **Consistencia** | Mismo modelo, parámetros controlados |
| **Redundancia** | Fallback automático a Replicate |
| **Colas nativas** | Fal.ai maneja picos automáticamente |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Dependencia de proveedores externos** | Fallback implementado |
| **Costo a escala masiva** | Modelo de negocio debe soportarlo |
| **Variabilidad en consistencia** | Identity Anchors + seed control |
| **Latencia de red** | Webhooks asíncronos |

### Riesgos

```
RIESGO                              │  PROBABILIDAD  │  IMPACTO  │  MITIGACIÓN
────────────────────────────────────────────────────────────────────────────────
Fal.ai deja de operar               │  Baja          │  Alto     │  Replicate backup
Ambos proveedores fallan            │  Muy baja      │  Crítico  │  Cola de reintentos
Costo excede presupuesto            │  Media         │  Alto     │  Rate limiting
Calidad inconsistente               │  Media         │  Medio    │  Prompt engineering
```

## MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| **Tiempo promedio de generación** | < 15 segundos | Worker logs |
| **Tasa de éxito** | > 98% | Image status tracking |
| **Costo por usuario/mes** | < $3 | Billing dashboard |
| **Fallback activations** | < 5% | Worker logs |
| **Consistencia visual** | > 90% aprobación | User feedback |

---

# ADR-005: ARQUITECTURA DE COLAS

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-005: ARQUITECTURA DE COLAS                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Backend / Infraestructura                                  ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 tiene operaciones que no deben bloquear el request/response cycle:

1. **Generación de imágenes:** Llamadas a APIs de IA que toman segundos
2. **Envío de notificaciones:** Push, email, WebSocket
3. **Procesamiento de pagos:** Webhooks de Stripe/PayPal
4. **Cálculos pesados:** Estadísticas, reportes
5. **Limpieza de datos:** Tareas programadas

Las colas deben:
- Ser confiables (no perder jobs)
- Soportar prioridades
- Permitir reintentos configurables
- Ser observables (dashboard, logs)
- Escalar horizontalmente

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SISTEMA DE COLAS ELEGIDO: BullMQ + Redis                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  COLAS DEFINIDAS:                                                           │
│  ────────────────                                                           │
│  1. image-generation      - Generación de imágenes de avatar                │
│  2. notifications         - Envío de push/email notifications               │
│  3. payments              - Procesamiento de webhooks de pago               │
│  4. analytics             - Cálculos de estadísticas                        │
│  5. cleanup               - Tareas de mantenimiento                         │
│                                                                             │
│  PRIORIDADES:                                                               │
│  ────────────                                                               │
│  • 10: Image generation para días exitosos (SUCCESS)                        │
│  • 5:  Image generation para días fallidos (FAILED)                         │
│  • 8:  Notificaciones urgentes (salud crítica)                              │
│  • 3:  Notificaciones normales                                              │
│  • 1:  Analytics y cleanup                                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## ARQUITECTURA DE COLAS

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ARQUITECTURA DE COLAS BULLMQ                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────┐                                                           │
│   │   Redis     │  ← Estado de colas, jobs, locks                          │
│   │   Server    │                                                           │
│   └──────┬──────┘                                                           │
│          │                                                                  │
│          │  Pub/Sub                                                          │
│          │                                                                  │
│   ┌──────┴──────┬─────────────┬─────────────┬─────────────┐                │
│   │             │             │             │             │                │
│   ▼             ▼             ▼             ▼             ▼                │
│ ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐                  │
│ │Queue │    │Queue │    │Queue │    │Queue │    │Queue │                  │
│ │Image │    │Notif │    │Pay   │    │Analy │    │Clean │                  │
│ │Gen   │    │      │    │      │    │      │    │      │                  │
│ └──┬───┘    └──┬───┘    └──┬───┘    └──┬───┘    └──┬───┘                  │
│    │           │           │           │           │                       │
│    │           │           │           │           │                       │
│    ▼           ▼           ▼           ▼           ▼                       │
│ ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐                  │
│ │Worker│    │Worker│    │Worker│    │Worker│    │Worker│                  │
│ │Image │    │Notif │    │Pay   │    │Analy │    │Clean │                  │
│ │Gen   │    │      │    │      │    │      │    │      │                  │
│ └──┬───┘    └──┬───┘    └──┬───┘    └──┬───┘    └──┬───┘                  │
│    │           │           │           │           │                       │
│    └───────────┴───────────┴───────────┴───────────┘                       │
│                          │                                                 │
│                          ▼                                                 │
│                   ┌─────────────┐                                          │
│                   │  Bull Board │  ← Dashboard de monitoreo                │
│                   │  (UI)       │                                          │
│                   └─────────────┘                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## JUSTIFICACIÓN

### ¿Por qué BullMQ sobre alternativas?

```
CRITERIO              │  BULLMQ      │  BEE QUEUE   │  AGENDA     │  AWS SQS
────────────────────────────────────────────────────────────────────────────────
Redis-based           │  ✅ Sí       │  ✅ Sí       │  ✅ Sí      │  ❌ No
Prioridades           │  ✅ Nativo   │  ⚠️ Limitado │  ⚠️ Manual  │  ⚠️ Limitado
Reintentos            │  ✅ Flexible │  ✅ Sí       │  ✅ Sí      │  ✅ Sí
Dashboard UI          │  ✅ Bull Board│ ⚠️ Básico   │  ❌ No      │  ⚠️ AWS Console
TypeScript            │  ✅ First-class│ ✅ Sí      │  ✅ Sí      │  ⚠️ SDK
Delayed jobs          │  ✅ Sí       │  ✅ Sí       │  ✅ Sí      │  ✅ Sí
Rate limiting         │  ✅ Sí       │  ❌ No       │  ❌ No      │  ✅ Sí
```

**Análisis detallado:**

BullMQ es el estándar de facto para colas en Node.js con Redis. Proporciona:

1. **Prioridades nativas:** Crítico para el sistema de generación de imágenes
2. **Reintentos configurables:** Exponential backoff, límites de intentos
3. **Bull Board:** Dashboard web para monitoreo
4. **TypeScript first-class:** Type safety completo
5. **Rate limiting:** Prevenir sobrecarga de APIs externas

## IMPLEMENTACIÓN

### Configuración de Redis

```typescript
// lib/queue/redis.ts
import IORedis from 'ioredis'

export const redis = new IORedis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null, // Requerido por BullMQ
})

// Manejo de errores
redis.on('error', (error) => {
  console.error('[Redis] Error:', error)
})

redis.on('connect', () => {
  console.log('[Redis] Connected')
})
```

### Definición de Colas

```typescript
// lib/queue/queues.ts
import { Queue } from 'bullmq'
import { redis } from './redis'

// Cola de generación de imágenes
export const imageQueue = new Queue('image-generation', {
  connection: redis,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000
    },
    removeOnComplete: {
      age: 24 * 3600, // Mantener 24 horas
      count: 1000
    },
    removeOnFail: {
      age: 7 * 24 * 3600 // Mantener 7 días
    }
  }
})

// Cola de notificaciones
export const notificationQueue = new Queue('notifications', {
  connection: redis,
  defaultJobOptions: {
    attempts: 5,
    backoff: {
      type: 'fixed',
      delay: 10000
    }
  }
})

// Cola de pagos
export const paymentQueue = new Queue('payments', {
  connection: redis,
  defaultJobOptions: {
    attempts: 10,
    backoff: {
      type: 'exponential',
      delay: 60000 // 1 minuto
    }
  }
})

// Cola de analytics
export const analyticsQueue = new Queue('analytics', {
  connection: redis,
  defaultJobOptions: {
    attempts: 3,
    priority: 1 // Baja prioridad
  }
})

// Cola de cleanup
export const cleanupQueue = new Queue('cleanup', {
  connection: redis,
  defaultJobOptions: {
    attempts: 1,
    priority: 1
  }
})
```

### Encolar Jobs

```typescript
// Ejemplo: Encolar generación de imagen
async function queueImageGeneration(
  avatarId: string,
  userId: string,
  dayNumber: number,
  isSuccessDay: boolean
) {
  const priority = isSuccessDay ? 10 : 5
  
  await imageQueue.add(
    'generate-avatar-image',
    {
      avatarId,
      userId,
      dayNumber,
      // ... otros datos
    },
    {
      priority,
      jobId: `${avatarId}-${dayNumber}`, // Prevenir duplicados
    }
  )
}

// Ejemplo: Encolar notificación
async function queueNotification(
  userId: string,
  type: string,
  data: any,
  isUrgent: boolean = false
) {
  await notificationQueue.add(
    'send-notification',
    {
      userId,
      type,
      data
    },
    {
      priority: isUrgent ? 8 : 3
    }
  )
}
```

### Dashboard Bull Board

```typescript
// app/api/admin/queues/route.ts
import { createBullBoard } from '@bull-board/api'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'
import { FastifyAdapter } from '@bull-board/fastify'
import { imageQueue, notificationQueue, paymentQueue } from '@/lib/queue/queues'

const serverAdapter = new FastifyAdapter()

createBullBoard({
  queues: [
    new BullMQAdapter(imageQueue),
    new BullMQAdapter(notificationQueue),
    new BullMQAdapter(paymentQueue),
  ],
  serverAdapter,
})

// Montar en /admin/queues
// Proteger con autenticación de admin
```

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Desacoplamiento** | Requests rápidos, procesamiento asíncrono |
| **Resiliencia** | Jobs reintentan automáticamente |
| **Escalabilidad** | Workers pueden escalar independientemente |
| **Observabilidad** | Dashboard completo de colas |
| **Prioridades** | Usuarios exitosos primero |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Complejidad adicional** | Documentación clara, monitoreo |
| **Dependencia de Redis** | Redis managed (Upstash/Railway) |
| **Debugging más difícil** | Logging completo, trazas |

## MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| **Jobs procesados/hora** | > 1000 | Bull Board |
| **Tasa de fallo** | < 2% | Bull Board |
| **Tiempo en cola p95** | < 30 segundos | Bull Board |
| **Redis uptime** | > 99.9% | Redis monitoring |

---

# ADR-006: SISTEMA DE NOTIFICACIONES

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-006: SISTEMA DE NOTIFICACIONES                                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Frontend / Backend                                         ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 requiere notificaciones para:

1. **Judgement Night:** Resultado del día, nueva imagen generada
2. **Recordatorios de tareas:** "Hora de meditar", "No olvides el gym"
3. **Alertas de salud:** "Tu avatar está herido", "Corazón crítico"
4. **Hitos:** "¡7 días de racha!", "Nivel alcanzado"
5. **Re-engagement:** "Tu avatar te extraña", "Vuelve a la disciplina"

Los canales considerados:
- **Web Push:** Notificaciones del navegador (PWA)
- **Email:** Para resúmenes y recordatorios importantes
- **In-app:** Notificaciones dentro de la aplicación
- **SMS:** Para alertas críticas (futuro)

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SISTEMA DE NOTIFICACIONES ELEGIDO:                                         │
│                                                                             │
│  CANAL PRIMARIO:    Web Push API (PWA)                                      │
│  CANAL SECUNDARIO:  Email (Resend/SendGrid)                                 │
│  CANAL IN-APP:      Supabase Realtime + UI Toast                            │
│                                                                             │
│  PROVEEDOR PUSH:    OneSignal (gratuito hasta 10K suscriptores)             │
│  PROVEEDOR EMAIL:   Resend (100 emails/día gratis)                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## ARQUITECTURA DE NOTIFICACIONES

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ARQUITECTURA DE NOTIFICACIONES                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   TRIGGER              │  CANAL              │  PRIORIDAD  │  EJEMPLO       │
│   ─────────────────────────────────────────────────────────────────────     │
│   Judgement Night      │  Push + In-app      │  Alta       │  "Día 15: Éxito"│
│   Imagen generada      │  Push + In-app      │  Alta       │  "Tu evolución" │
│   Recordatorio tarea   │  Push               │  Media      │  "Hora de gym"  │
│   Salud crítica        │  Push + Email       │  Crítica    │  "¡2 corazones!"│
│   Hito de racha        │  Push + In-app      │  Media      │  "¡30 días!"    │
│   Re-engagement        │  Email              │  Baja       │  "Te extrañamos"│
│                                                                             │
│   ┌─────────────┐                                                           │
│   │   Evento    │  (Judgement, Tarea, etc.)                                 │
│   └──────┬──────┘                                                           │
│          │                                                                  │
│          ▼                                                                  │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                  │
│   │  BullMQ     │────►│  OneSignal  │────►│  Web Push   │                  │
│   │  Queue      │     │  API        │     │  Cliente    │                  │
│   └─────────────┘     └─────────────┘     └─────────────┘                  │
│          │                                                                  │
│          └────────────────► ┌─────────────┐                                 │
│                             │  Resend     │────► Email                     │
│                             │  API        │                                 │
│                             └─────────────┘                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## TIPOS DE NOTIFICACIÓN

### Notificaciones de Judgement Night

```typescript
interface JudgementNotification {
  type: 'judgement_complete'
  title: string
  body: string
  data: {
    avatarId: string
    dayNumber: number
    result: 'success' | 'partial' | 'failed'
    healthChange: number
    streakDays: number
    imageUrl?: string
  }
}

// Éxito
{
  title: '🔥 Día 15: PERFECTO',
  body: 'Tu disciplina es inquebrantable. Tu avatar ha evolucionado.',
  icon: '/icons/success.png',
  badge: '/icons/badge.png'
}

// Fallido
{
  title: '⚠️ Día 16: FALLIDO',
  body: 'Perdiste 1 corazón. Mañana es una nueva oportunidad.',
  icon: '/icons/warning.png'
}
```

### Notificaciones de Recordatorio

```typescript
interface ReminderNotification {
  type: 'task_reminder'
  title: string
  body: string
  data: {
    taskType: string
    scheduledTime: string
  }
}

// Ejemplos
{
  title: '🧘 Hora de Meditar',
  body: 'Tu AURA necesita atención. 10 minutos para tu mejor versión.',
  tag: 'meditation-reminder'
}

{
  title: '💪 Gym Time',
  body: 'El Templo del Hierro te espera. Tu físico no se construye solo.',
  tag: 'gym-reminder'
}
```

### Notificaciones de Salud Crítica

```typescript
interface HealthNotification {
  type: 'health_critical' | 'health_low'
  title: string
  body: string
  requireInteraction: true
  data: {
    healthPoints: number
    maxHealthPoints: number
  }
}

// Crítico (1-3 corazones)
{
  title: '🚨 ¡TU AVATAR ESTÁ EN PELIGRO!',
  body: 'Solo te quedan 2 corazones. Completa tus tareas HOY.',
  requireInteraction: true,
  vibrate: [200, 100, 200]
}
```

## IMPLEMENTACIÓN

### Service Worker para Push

```typescript
// public/sw.js
self.addEventListener('push', (event) => {
  const data = event.data.json()
  
  const options = {
    body: data.body,
    icon: data.icon || '/icon-192x192.png',
    badge: data.badge || '/badge-72x72.png',
    tag: data.tag,
    requireInteraction: data.requireInteraction || false,
    vibrate: data.vibrate || [100, 50, 100],
    data: data.data,
    actions: data.actions || []
  }
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  const data = event.notification.data
  let url = '/dashboard'
  
  if (data?.avatarId) {
    url = `/avatar/${data.avatarId}`
  }
  
  event.waitUntil(
    clients.openWindow(url)
  )
})
```

### Suscripción a Push

```typescript
// lib/notifications/push.ts

export async function subscribeToPush(): Promise<PushSubscription | null> {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.log('Push notifications not supported')
    return null
  }
  
  const registration = await navigator.serviceWorker.ready
  
  // Solicitar permiso
  const permission = await Notification.requestPermission()
  
  if (permission !== 'granted') {
    console.log('Notification permission denied')
    return null
  }
  
  // Suscribir
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
    )
  })
  
  // Guardar en backend
  await savePushSubscription(subscription)
  
  return subscription
}

async function savePushSubscription(subscription: PushSubscription) {
  const supabase = await createClient()
  
  await supabase.from('push_subscriptions').upsert({
    user_id: (await supabase.auth.getUser()).data.user?.id,
    subscription: JSON.stringify(subscription),
    updated_at: new Date().toISOString()
  })
}
```

### Envío de Notificaciones (Backend)

```typescript
// lib/notifications/send.ts
import { notificationQueue } from '@/lib/queue/queues'

interface NotificationPayload {
  userId: string
  type: string
  title: string
  body: string
  data?: Record<string, any>
  priority?: 'low' | 'normal' | 'high'
}

export async function sendNotification(payload: NotificationPayload) {
  // Encolar en BullMQ
  await notificationQueue.add(
    'send-notification',
    payload,
    {
      priority: payload.priority === 'high' ? 8 : 
                payload.priority === 'normal' ? 5 : 3
    }
  )
}

// Worker de notificaciones
export const notificationWorker = new Worker(
  'notifications',
  async (job) => {
    const { userId, type, title, body, data } = job.data
    
    // Obtener suscripción del usuario
    const { data: subscription } = await supabase
      .from('push_subscriptions')
      .select('subscription')
      .eq('user_id', userId)
      .single()
    
    if (!subscription) {
      console.log(`[Notification] No subscription for user ${userId}`)
      return
    }
    
    // Enviar via OneSignal
    await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${process.env.ONESIGNAL_REST_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        app_id: process.env.ONESIGNAL_APP_ID,
        include_player_ids: [subscription.subscription],
        headings: { en: title },
        contents: { en: body },
        data: data,
        priority: data?.priority === 'high' ? 10 : 5
      })
    })
  },
  { connection: redis }
)
```

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Engagement** | Notificaciones aumentan retención 40% |
| **Re-engagement** | Recuperar usuarios inactivos |
| **UX inmediata** | Feedback instantáneo de acciones |
| **Multi-canal** | Fallback si un canal falla |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Permisos del usuario** | Onboarding claro, valor demostrado |
| **Fatiga de notificaciones** | Frecuencia controlada, prioridades |
| **Dependencia de OneSignal** | Web Push API nativo como backup |

## MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| **Tasa de suscripción push** | > 60% | Analytics |
| **Tasa de apertura** | > 20% | OneSignal |
| **Re-engagement rate** | > 15% | User activity |
| **Notificaciones/Usuario/día** | < 5 | Rate limiting |

---


# ADR-007: MODELO DE SUSCRIPCIÓN

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-007: MODELO DE SUSCRIPCIÓN                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Negocio / Backend / Pagos                                  ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 es un producto SaaS que requiere un modelo de monetización sostenible. Consideraciones:

1. **Trial gratuito:** Permitir a usuarios experimentar el valor antes de pagar
2. **Punto de conversión:** Momento óptimo para convertir usuarios gratuitos a pagados
3. **Pricing:** Competitivo pero sostenible
4. **Procesamiento de pagos:** Seguro, confiable, internacional
5. **Gestión de suscripciones:** Upgrades, downgrades, cancelaciones

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  MODELO DE SUSCRIPCIÓN ELEGIDO: Freemium con Trial                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ESTRUCTURA:                                                                │
│  ───────────                                                                │
│  • TRIAL: 5 días completamente gratis (termina día 6)                       │
│  • MENSUAL: $19.90 USD/mes                                                  │
│  • ANUAL: $140 USD/año (40% descuento vs mensual)                           │
│                                                                             │
│  PUNTO DE CONVERSIÓN: Día 6 (Hito Alucín)                                   │
│  ─────────────────────────────────────────                                  │
│  • Día 6 = Primer cambio visual dramático del avatar                        │
│  • Dopamina en pico = Momento óptimo para conversión                        │
│  • Sin pago = Avatar vuelve a degradarse                                    │
│                                                                             │
│  PROVEEDOR DE PAGOS: Stripe                                                 │
│  ────────────────────                                                       │
│  • Internacional (soporta México, LATAM, España)                            │
│  • Webhooks confiables                                                      │
│  • Dashboard completo                                                       │
│  • SDK excelente                                                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## FLUJO DE SUSCRIPCIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FLUJO DE SUSCRIPCIÓN                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   DÍA 1-5: TRIAL ACTIVO                                                     │
│   ─────────────────────                                                     │
│   • Acceso completo a todas las herramientas                                │
│   • Generación diaria de imágenes                                           │
│   • Progreso guardado                                                       │
│                                                                             │
│   DÍA 5: ÚLTIMO DÍA                                                         │
│   ────────────────                                                          │
│   • Notificación: "Mañana decide tu destino"                                │
│   • Preview de lo que se perderá                                            │
│                                                                             │
│   DÍA 6: ⭐ PUNTO DE CONVERSIÓN                                             │
│   ─────────────────────────────                                             │
│   • Hito Alucín: Avatar con gorra y cadena                                  │
│   • Modal de conversión bloquea continuar                                   │
│   • Opciones: Pagar ahora / Ver en modo Limbo                               │
│                                                                             │
│   POST-PAGO:                                                                │
│   ──────────                                                                │
│   • Suscripción activa                                                      │
│   • Acceso completo sin restricciones                                       │
│   • Renueva automáticamente                                                 │
│                                                                             │
│   CANCELACIÓN:                                                              │
│   ────────────                                                              │
│   • Acceso hasta final del período pagado                                   │
│   • Entra en modo Limbo tras expirar                                       │
│   • Degradación de corazones cada 3 días                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## ARQUITECTURA DE PAGOS

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ARQUITECTURA DE PAGOS CON STRIPE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                  │
│   │   Usuario   │────►│   Next.js   │────►│   Stripe    │                  │
│   │   Checkout  │     │   API       │     │   Checkout  │                  │
│   └─────────────┘     └─────────────┘     └─────────────┘                  │
│                                                     │                       │
│                                                     │                       │
│                                                     ▼                       │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                  │
│   │  Supabase   │◄────│   Webhook   │◄────│   Stripe    │                  │
│   │  (Estado)   │     │   Handler   │     │   Events    │                  │
│   └─────────────┘     └─────────────┘     └─────────────┘                  │
│                                                                             │
│   EVENTOS STRIPE PROCESADOS:                                                │
│   ──────────────────────────                                                │
│   • checkout.session.completed  → Crear suscripción                         │
│   • invoice.paid                → Extender suscripción                      │
│   • invoice.payment_failed      → Marcar past_due                           │
│   • customer.subscription.deleted → Cancelar suscripción                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## IMPLEMENTACIÓN

### Schema de Suscripción

```typescript
// prisma/schema.prisma (extracto)

model Subscription {
  id                String    @id @default(uuid())
  userId            String    @unique
  user              User      @relation(fields: [userId], references: [id])
  
  // Plan
  plan              String    // monthly, yearly
  status            String    // active, cancelled, expired, past_due
  
  // Fechas
  startedAt         DateTime  @default(now())
  expiresAt         DateTime
  cancelledAt       DateTime?
  
  // Stripe
  stripeCustomerId       String?
  stripeSubscriptionId   String?
  stripePriceId          String?
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@map("subscriptions")
}

model Payment {
  id                String    @id @default(uuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id])
  
  amount            Decimal   @db.Decimal(10, 2)
  currency          String    @default("USD")
  status            String    // succeeded, failed, pending, refunded
  
  stripePaymentId   String?
  stripeInvoiceId   String?
  
  description       String?
  metadata          Json?
  
  createdAt         DateTime  @default(now())
  
  @@map("payments")
}
```

### Checkout Session

```typescript
// app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia'
})

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  const { plan } = await request.json() // 'monthly' | 'yearly'
  
  const priceId = plan === 'yearly' 
    ? process.env.STRIPE_YEARLY_PRICE_ID 
    : process.env.STRIPE_MONTHLY_PRICE_ID
  
  // Crear o obtener customer de Stripe
  let customerId: string
  
  const { data: existingSub } = await supabase
    .from('subscriptions')
    .select('stripeCustomerId')
    .eq('userId', user.id)
    .single()
  
  if (existingSub?.stripeCustomerId) {
    customerId = existingSub.stripeCustomerId
  } else {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { userId: user.id }
    })
    customerId = customer.id
  }
  
  // Crear sesión de checkout
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    line_items: [{
      price: priceId,
      quantity: 1
    }],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/cancel`,
    metadata: { userId: user.id, plan }
  })
  
  return NextResponse.json({ url: session.url })
}
```

### Webhook Handler

```typescript
// app/api/webhooks/stripe/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { prisma } from '@/lib/db/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia'
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const payload = await request.text()
  const signature = request.headers.get('stripe-signature')!
  
  let event: Stripe.Event
  
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret)
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid signature' }, 
      { status: 400 }
    )
  }
  
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      await handleCheckoutCompleted(session)
      break
    }
    
    case 'invoice.paid': {
      const invoice = event.data.object as Stripe.Invoice
      await handleInvoicePaid(invoice)
      break
    }
    
    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      await handlePaymentFailed(invoice)
      break
    }
    
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      await handleSubscriptionCancelled(subscription)
      break
    }
  }
  
  return NextResponse.json({ received: true })
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.userId
  const plan = session.metadata?.plan as 'monthly' | 'yearly'
  
  if (!userId) return
  
  const subscription = await stripe.subscriptions.retrieve(
    session.subscription as string
  )
  
  const expiresAt = new Date(subscription.current_period_end * 1000)
  
  await prisma.subscription.upsert({
    where: { userId },
    create: {
      userId,
      plan,
      status: 'active',
      expiresAt,
      stripeCustomerId: session.customer as string,
      stripeSubscriptionId: subscription.id,
      stripePriceId: subscription.items.data[0].price.id
    },
    update: {
      plan,
      status: 'active',
      expiresAt,
      stripeSubscriptionId: subscription.id,
      stripePriceId: subscription.items.data[0].price.id
    }
  })
  
  // Notificar al usuario
  await sendNotification({
    userId,
    type: 'subscription_activated',
    title: '¡Bienvenido a METAMEN100!',
    body: `Tu suscripción ${plan === 'yearly' ? 'anual' : 'mensual'} está activa.`
  })
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  const subscriptionId = invoice.subscription as string
  
  const subscription = await prisma.subscription.findFirst({
    where: { stripeSubscriptionId: subscriptionId }
  })
  
  if (!subscription) return
  
  const stripeSub = await stripe.subscriptions.retrieve(subscriptionId)
  const expiresAt = new Date(stripeSub.current_period_end * 1000)
  
  await prisma.subscription.update({
    where: { id: subscription.id },
    data: {
      status: 'active',
      expiresAt
    }
  })
  
  // Registrar pago
  await prisma.payment.create({
    data: {
      userId: subscription.userId,
      amount: invoice.amount_paid / 100,
      currency: invoice.currency.toUpperCase(),
      status: 'succeeded',
      stripePaymentId: invoice.payment_intent as string,
      stripeInvoiceId: invoice.id,
      description: `Suscripción ${subscription.plan}`
    }
  })
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const subscriptionId = invoice.subscription as string
  
  await prisma.subscription.updateMany({
    where: { stripeSubscriptionId: subscriptionId },
    data: { status: 'past_due' }
  })
}

async function handleSubscriptionCancelled(subscription: Stripe.Subscription) {
  await prisma.subscription.updateMany({
    where: { stripeSubscriptionId: subscription.id },
    data: { 
      status: 'cancelled',
      cancelledAt: new Date()
    }
  })
}
```

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Conversión optimizada** | Día 6 = Momento de máximo valor percibido |
| **Pricing competitivo** | $19.90/mes = Accesible para target |
| **Stripe confiable** | Webhooks probados, internacional |
| **Flexible** | Upgrades/downgrades automáticos |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Comisión Stripe** | 2.9% + $0.30 por transacción |
| **Chargebacks** | Política clara, soporte proactivo |
| **Dependencia de Stripe** | PayPal como alternativa futura |

## MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| **Conversión Trial→Pago** | > 12% | Stripe + Analytics |
| **Churn mensual** | < 8% | Stripe |
| **LTV (Lifetime Value)** | > $200 | Calculado |
| **Chargeback rate** | < 1% | Stripe |

---

# ADR-008: ESTRATEGIA DE CACHÉ

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-008: ESTRATEGIA DE CACHÉ                                                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Backend / Performance                                      ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 necesita estrategias de caché para:

1. **Reducir latencia:** Respuestas rápidas para el usuario
2. **Reducir carga de DB:** Menos queries repetidos
3. **Reducir costos:** Menos operaciones de base de datos
4. **Mejorar UX:** Carga instantánea de datos frecuentes

Tipos de datos a cachear:
- Perfil del usuario y configuración
- Estado del avatar y vectores
- Catálogo de tienda
- Imágenes generadas
- Estadísticas y reportes

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTRATEGIA DE CACHÉ MULTI-NIVEL                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  NIVEL 1: NEXT.JS CACHE (Edge)                                              │
│  ─────────────────────────────                                              │
│  • Datos: Páginas estáticas, API routes con cache                           │
│  • TTL: Según ruta (1h - 24h)                                               │
│  • Invalidación: On-demand via revalidatePath                               │
│                                                                             │
│  NIVEL 2: RE-DIS CACHÉ (Aplicación)                                         │
│  ──────────────────────────────────                                         │
│  • Datos: Perfil usuario, estado avatar, catálogo tienda                    │
│  • TTL: 5 minutos - 1 hora                                                  │
│  • Invalidación: Key-based, pattern-based                                   │
│                                                                             │
│  NIVEL 3: REACT QUERY / SWR (Cliente)                                       │
│  ────────────────────────────────────                                       │
│  • Datos: Todo lo que se fetcha en el cliente                               │
│  • TTL:Stale-while-revalidate                                               │
│  • Invalidación: Mutations automáticas                                      │
│                                                                             │
│  NIVEL 4: CDN (Vercel Edge Network)                                         │
│  ───────────────────────────────────                                        │
│  • Datos: Imágenes estáticas, assets                                        │
│  • TTL: 1 año (con hash en nombre)                                          │
│  • Invalidación: Deploy nuevo                                               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## POLÍTICAS DE CACHÉ

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  RECURSO                    │  CACHÉ        │  TTL        │  INVALIDACIÓN   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Perfil usuario             │  Redis        │  5 min      │  On update      │
│  Estado avatar              │  Redis        │  1 min      │  Judgement Night│
│  Vectores                   │  Redis        │  1 min      │  On change      │
│  Catálogo tienda            │  Redis        │  1 hora     │  Manual         │
│  Imágenes avatar            │  CDN          │  1 año      │  Nunca          │
│  Estadísticas               │  Redis        │  5 min      │  On new data    │
│  Página dashboard           │  Next.js      │  1 min      │  revalidatePath │
│  Assets estáticos           │  CDN          │  1 año      │  Deploy         │
└─────────────────────────────────────────────────────────────────────────────┘
```

## IMPLEMENTACIÓN

### Caché con Redis

```typescript
// lib/cache/redis-cache.ts
import { redis } from '@/lib/queue/redis'

interface CacheOptions {
  ttl?: number // segundos
  tags?: string[]
}

export class RedisCache {
  private static readonly DEFAULT_TTL = 300 // 5 minutos
  
  static async get<T>(key: string): Promise<T | null> {
    const data = await redis.get(key)
    return data ? JSON.parse(data) : null
  }
  
  static async set<T>(
    key: string, 
    value: T, 
    options: CacheOptions = {}
  ): Promise<void> {
    const ttl = options.ttl || this.DEFAULT_TTL
    const data = JSON.stringify(value)
    
    await redis.setex(key, ttl, data)
    
    // Agregar a tags para invalidación por grupo
    if (options.tags) {
      for (const tag of options.tags) {
        await redis.sadd(`tag:${tag}`, key)
      }
    }
  }
  
  static async delete(key: string): Promise<void> {
    await redis.del(key)
  }
  
  static async invalidateByTag(tag: string): Promise<void> {
    const keys = await redis.smembers(`tag:${tag}`)
    if (keys.length > 0) {
      await redis.del(...keys)
      await redis.del(`tag:${tag}`)
    }
  }
  
  static async getOrSet<T>(
    key: string,
    factory: () => Promise<T>,
    options: CacheOptions = {}
  ): Promise<T> {
    const cached = await this.get<T>(key)
    if (cached !== null) {
      return cached
    }
    
    const value = await factory()
    await this.set(key, value, options)
    return value
  }
}
```

### Uso en Repositorios

```typescript
// lib/db/repositories/avatar.repository.ts
import { RedisCache } from '@/lib/cache/redis-cache'
import { prisma } from '../prisma'

export const AvatarRepository = {
  async findActiveByUserId(userId: string) {
    const cacheKey = `avatar:active:${userId}`
    
    return RedisCache.getOrSet(
      cacheKey,
      async () => {
        return prisma.avatar.findFirst({
          where: { userId, status: 'active' },
          include: { vectors: true }
        })
      },
      { ttl: 60, tags: [`user:${userId}`, 'avatar'] }
    )
  },
  
  async updateVectors(avatarId: string, data: VectorUpdateData) {
    // Actualizar en DB
    const updated = await prisma.avatarVector.update({
      where: { avatarId },
      data
    })
    
    // Invalidar caché
    const avatar = await prisma.avatar.findUnique({
      where: { id: avatarId },
      select: { userId: true }
    })
    
    if (avatar) {
      await RedisCache.delete(`avatar:active:${avatar.userId}`)
    }
    
    return updated
  }
}
```

### React Query (Cliente)

```typescript
// lib/hooks/use-avatar.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export function useAvatar() {
  return useQuery({
    queryKey: ['avatar'],
    queryFn: async () => {
      const response = await fetch('/api/avatar')
      return response.json()
    },
    staleTime: 1000 * 60, // 1 minuto
    gcTime: 1000 * 60 * 5 // 5 minutos
  })
}

export function useCompleteTask() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (taskId: string) => {
      const response = await fetch('/api/tasks/complete', {
        method: 'POST',
        body: JSON.stringify({ taskId })
      })
      return response.json()
    },
    onSuccess: () => {
      // Invalidar caché del avatar tras completar tarea
      queryClient.invalidateQueries({ queryKey: ['avatar'] })
    }
  })
}
```

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Menor latencia** | 80% de requests desde caché |
| **Menor costo DB** | 60% menos queries |
| **Mejor UX** | Carga instantánea de datos |
| **Escalabilidad** | Soporta más usuarios sin DB upgrade |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Stale data** | TTL corto, invalidación proactiva |
| **Complejidad** | Documentación clara, patrones consistentes |
| **Memoria Redis** | Monitoreo, evicción LRU |

## MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| **Cache hit rate** | > 80% | Redis stats |
| **DB query reduction** | > 60% | Query logs |
| **P95 response time** | < 200ms | APM |

---

# ADR-009: SEGURIDAD Y ENCRIPTACIÓN

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-009: SEGURIDAD Y ENCRIPTACIÓN                                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Seguridad                                                  ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 maneja datos sensibles:
- Información personal de usuarios
- Datos de pago (via Stripe, no almacenados)
- Progreso y hábitos personales
- Tokens de autenticación

Debe cumplir con:
- GDPR (Europa)
- LGPD (Brasil)
- Ley de Protección de Datos Personales (México)

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTRATEGIA DE SEGURIDAD POR CAPAS                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CAPA 1: TRANSPORTE (HTTPS/TLS 1.3)                                         │
│  ───────────────────────────────────                                        │
│  • Todo el tráfico encriptado                                               │
│  • Certificados SSL automáticos (Vercel)                                    │
│  • HSTS habilitado                                                          │
│                                                                             │
│  CAPA 2: AUTENTICACIÓN (JWT + RLS)                                          │
│  ─────────────────────────────────                                          │
│  • Tokens JWT con expiración                                                │
│  • Cookies httpOnly, secure, sameSite                                       │
│  • Row Level Security en PostgreSQL                                         │
│                                                                             │
│  CAPA 3: APLICACIÓN (Validación + Sanitización)                             │
│  ───────────────────────────────────────────────                            │
│  • Validación de inputs con Zod                                             │
│  • Sanitización de outputs (XSS protection)                                 │
│  • Rate limiting en APIs                                                    │
│                                                                             │
│  CAPA 4: DATOS (Encriptación en reposo)                                     │
│  ────────────────────────────────────────                                   │
│  • Journal entries encriptados                                              │
│  • Backups encriptados                                                      │
│  • Claves en variables de entorno                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## MEDIDAS DE SEGURIDAD

### Headers de Seguridad

```typescript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' blob: data: https://*.supabase.co",
              "font-src 'self'",
              "connect-src 'self' https://*.supabase.co https://*.fal.ai",
              "frame-ancestors 'none'"
            ].join('; ')
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
```

### Rate Limiting

```typescript
// lib/rate-limit.ts
import { LRUCache } from 'lru-cache'

interface RateLimitOptions {
  uniqueTokenPerInterval?: number
  interval?: number
}

export function rateLimit(options: RateLimitOptions) {
  const tokenCache = new LRUCache({
    max: options.uniqueTokenPerInterval || 500,
    ttl: options.interval || 60000
  })
  
  return {
    check: (token: string, limit: number) => {
      const tokenCount = (tokenCache.get(token) as number[]) || [0]
      
      if (tokenCount[0] === 0) {
        tokenCache.set(token, [1])
        return { success: true, limit, remaining: limit - 1 }
      }
      
      const currentUsage = tokenCount[0]
      
      if (currentUsage >= limit) {
        return { success: false, limit, remaining: 0 }
      }
      
      tokenCount[0] = currentUsage + 1
      return { success: true, limit, remaining: limit - currentUsage - 1 }
    }
  }
}

// Uso en API routes
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minuto
  uniqueTokenPerInterval: 500
})

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'anonymous'
  const { success } = limiter.check(ip, 10) // 10 requests/minuto
  
  if (!success) {
    return new Response('Rate limit exceeded', { status: 429 })
  }
  
  // ... resto del handler
}
```

### Encriptación de Datos Sensibles

```typescript
// lib/encryption.ts
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto'
import { promisify } from 'util'

const scryptAsync = promisify(scrypt)

const ALGORITHM = 'aes-256-gcm'

export class Encryption {
  private static async getKey() {
    return scryptAsync(
      process.env.ENCRYPTION_KEY!, 
      'salt', 
      32
    ) as Promise<Buffer>
  }
  
  static async encrypt(text: string): Promise<string> {
    const key = await this.getKey()
    const iv = randomBytes(16)
    const cipher = createCipheriv(ALGORITHM, key, iv)
    
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    
    const authTag = cipher.getAuthTag()
    
    return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`
  }
  
  static async decrypt(encryptedData: string): Promise<string> {
    const key = await this.getKey()
    const [ivHex, authTagHex, encrypted] = encryptedData.split(':')
    
    const iv = Buffer.from(ivHex, 'hex')
    const authTag = Buffer.from(authTagHex, 'hex')
    
    const decipher = createDecipheriv(ALGORITHM, key, iv)
    decipher.setAuthTag(authTag)
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    
    return decrypted
  }
}

// Uso para journal entries
export async function createJournalEntry(userId: string, content: string) {
  const encryptedContent = await Encryption.encrypt(content)
  
  return prisma.journalEntry.create({
    data: {
      userId,
      content: encryptedContent,
      entryDate: new Date()
    }
  })
}
```

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Protección de datos** | Cumplimiento regulatorio |
| **Confianza del usuario** | Política de privacidad transparente |
| **Prevención de ataques** | XSS, CSRF, rate limiting |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Overhead de encriptación** | Solo datos sensibles |
| **Complejidad** | Documentación, code reviews |

## MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| **Vulnerabilidades** | 0 críticas | Security audit |
| **Penetration test** | Pass | External audit |
| **Compliance** | GDPR, LGPD | Legal review |

---

# ADR-010: ESCALABILIDAD HORIZONTAL

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-010: ESCALABILIDAD HORIZONTAL                                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Infraestructura                                            ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 debe poder escalar desde:
- **Lanzamiento:** 100 usuarios concurrentes
- **Crecimiento:** 10,000 usuarios concurrentes
- **Éxito:** 100,000+ usuarios concurrentes

Sin re-arquitectura significativa.

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTRATEGIA DE ESCALABILIDAD                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FASE 1: LANZAMIENTO (0-1K usuarios)                                        │
│  ────────────────────────────────────                                       │
│  • Vercel Hobby (frontend)                                                  │
│  • Supabase Free (DB + Auth + Storage)                                      │
│  • Railway/Render (workers)                                                 │
│  • Upstash Free (Redis)                                                     │
│  • Costo: ~$0/mes                                                           │
│                                                                             │
│  FASE 2: CRECIMIENTO (1K-50K usuarios)                                      │
│  ─────────────────────────────────────                                      │
│  • Vercel Pro ($20/mes)                                                     │
│  • Supabase Pro ($25/mes)                                                   │
│  • Railway Standard ($25/mes)                                               │
│  • Upstash Pay-as-you-go                                                    │
│  • Costo: ~$100-200/mes                                                     │
│                                                                             │
│  FASE 3: ESCALA (50K-500K usuarios)                                         │
│  ──────────────────────────────────                                         │
│  • Vercel Enterprise                                                        │
│  • Supabase Enterprise / AWS RDS                                            │
│  • Railway / AWS ECS (workers)                                              │
│  • Redis Cluster (ElastiCache)                                              │
│  • CDN dedicado                                                             │
│  • Costo: ~$1000-5000/mes                                                   │
│                                                                             │
│  FASE 4: HIPERESCALA (500K+ usuarios)                                       │
│  ───────────────────────────────────                                        │
│  • Arquitectura multi-región                                                │
│  • Database sharding                                                        │
│  • Microservicios                                                           │
│  • CDN global                                                               │
│  • Costo: $10K+/mes                                                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## ARQUITECTURA ESCALABLE

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ARQUITECTURA ESCALABLE                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                  │
│   │   CDN       │────►│   Vercel    │────►│   Supabase  │                  │
│   │   (Assets)  │     │   (Next.js) │     │   (DB/Auth) │                  │
│   └─────────────┘     └──────┬──────┘     └─────────────┘                  │
│                              │                                             │
│                              │                                             │
│                              ▼                                             │
│                       ┌─────────────┐     ┌─────────────┐                  │
│                       │   Railway   │────►│   Redis     │                  │
│                       │   (Workers) │     │   (Queues)  │                  │
│                       └─────────────┘     └─────────────┘                  │
│                                                                             │
│   CADA CAPA PUEDE ESCALAR INDEPENDIENTEMENTE:                               │
│   • Vercel: Auto-scaling por tráfico                                        │
│   • Supabase: Read replicas, connection pooling                             │
│   • Workers: Múltiples instancias                                           │
│   • Redis: Cluster mode                                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## MÉTRICAS DE ESCALABILIDAD

| Métrica | Fase 1 | Fase 2 | Fase 3 | Fase 4 |
|---------|--------|--------|--------|--------|
| Usuarios concurrentes | 100 | 10K | 100K | 1M+ |
| Requests/segundo | 10 | 1K | 10K | 100K+ |
| DB connections | 10 | 100 | 1K | 10K+ |
| Costo estimado/mes | $0 | $200 | $2K | $20K+ |

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Crecimiento sin fricción** | Escalar según demanda |
| **Costo controlado** | Pagar solo por lo que se usa |
| **Sin vendor lock-in** | Cada componente es reemplazable |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Complejidad operativa** | Documentación, runbooks |
| **Monitoreo requerido** | APM desde el día 1 |

---


# ADR-011: MONITOREO Y OBSERVABILIDAD

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-011: MONITOREO Y OBSERVABILIDAD                                         ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Observabilidad / DevOps                                    ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

Para un sistema TOP-100 mundial, la observabilidad es crítica. Necesitamos:

1. **Monitoreo de infraestructura:** Uptime, recursos, errores
2. **Monitoreo de aplicación:** Performance, errores, trazas
3. **Monitoreo de negocio:** Métricas de producto, conversión, retención
4. **Alertas proactivas:** Detectar problemas antes de que afecten usuarios
5. **Debugging:** Capacidad de investigar incidentes rápidamente

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  STACK DE OBSERVABILIDAD ELEGIDO                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CAPA                    │  HERRAMIENTA        │  PROPÓSITO                 │
│  ─────────────────────────────────────────────────────────────────────      │
│  APM                     │  Vercel Analytics   │  Performance, Web Vitals   │
│  Error Tracking          │  LogRocket          │  Session replay, errores   │
│  Logs                    │  Vercel + Custom    │  Logs centralizados        │
│  Métricas                │  Vercel + Custom    │  Métricas de negocio       │
│  Alertas                 │  Vercel + Custom    │  Notificaciones de issues  │
│  Dashboard               │  Custom + Vercel    │  Vista unificada           │
│                                                                             │
│  FUTURO (Escala):                                                           │
│  • Datadog / New Relic para APM avanzado                                    │
│  • Grafana + Prometheus para métricas custom                                │
│  • PagerDuty para alertas críticas                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## MÉTRICAS CLAVE

### Métricas Técnicas (SLIs)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  CATEGORÍA        │  MÉTRICA              │  OBJETIVO    │  SEVERIDAD       │
├─────────────────────────────────────────────────────────────────────────────┤
│  Disponibilidad   │  Uptime               │  > 99.9%     │  Crítico         │
│  Performance      │  LCP                  │  < 2.5s      │  Alto            │
│  Performance      │  FID                  │  < 100ms     │  Alto            │
│  Performance      │  CLS                  │  < 0.1       │  Medio           │
│  Errores          │  Error rate           │  < 0.1%      │  Crítico         │
│  Errores          │  5xx rate             │  < 0.01%     │  Crítico         │
│  Recursos         │  CPU usage            │  < 80%       │  Alto            │
│  Recursos         │  Memory usage         │  < 80%       │  Alto            │
│  DB               │  Query time p95       │  < 100ms     │  Alto            │
│  DB               │  Connection pool      │  < 80%       │  Medio           │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Métricas de Negocio (KPIs)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  MÉTRICA                    │  OBJETIVO    │  FRECUENCIA  │  RESPONSABLE    │
├─────────────────────────────────────────────────────────────────────────────┤
│  DAU (Daily Active Users)   │  Crecer 10%/mes │  Diario   │  Product        │
│  MAU (Monthly Active Users) │  Crecer 15%/mes │  Mensual  │  Product        │
│  Trial→Paid Conversion      │  > 12%          │  Diario   │  Growth         │
│  Churn Rate                 │  < 8%/mes       │  Mensual  │  Product        │
│  NPS (Net Promoter Score)   │  > 50           │  Trimestre│  Product        │
│  Task Completion Rate       │  > 70%          │  Diario   │  Product        │
│  Image Generation Success   │  > 98%          │  Diario   │  Engineering    │
│  Avg Session Duration       │  > 10 min       │  Diario   │  Product        │
│  Support Tickets            │  < 5/100 users  │  Semanal  │  Support        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## IMPLEMENTACIÓN

### Logging Estructurado

```typescript
// lib/logger.ts
interface LogContext {
  userId?: string
  avatarId?: string
  requestId?: string
  [key: string]: any
}

class Logger {
  private static instance: Logger
  
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }
  
  private log(
    level: 'info' | 'warn' | 'error' | 'debug',
    message: string,
    context?: LogContext
  ) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...context,
      environment: process.env.NODE_ENV
    }
    
    // En producción, enviar a servicio de logs
    if (process.env.NODE_ENV === 'production') {
      // Enviar a Vercel Logs o servicio externo
      console.log(JSON.stringify(logEntry))
    } else {
      console[level](`[${level.toUpperCase()}]`, message, context)
    }
  }
  
  info(message: string, context?: LogContext) {
    this.log('info', message, context)
  }
  
  warn(message: string, context?: LogContext) {
    this.log('warn', message, context)
  }
  
  error(message: string, error?: Error, context?: LogContext) {
    this.log('error', message, {
      ...context,
      error: error?.message,
      stack: error?.stack
    })
  }
  
  debug(message: string, context?: LogContext) {
    if (process.env.DEBUG === 'true') {
      this.log('debug', message, context)
    }
  }
}

export const logger = Logger.getInstance()

// Uso
logger.info('User completed task', {
  userId: 'uuid',
  taskId: 'task-uuid',
  taskType: 'meditation'
})

logger.error('Image generation failed', error, {
  userId: 'uuid',
  avatarId: 'avatar-uuid',
  provider: 'fal.ai'
})
```

### Middleware de Trazas

```typescript
// middleware.ts (extracto)
import { NextResponse } from 'next/server'
import { logger } from '@/lib/logger'
import { v4 as uuidv4 } from 'uuid'

export async function middleware(request: Request) {
  const requestId = uuidv4()
  const startTime = Date.now()
  
  // Agregar requestId al header
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-request-id', requestId)
  
  const response = await NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
  
  // Log de request
  const duration = Date.now() - startTime
  
  logger.info('Request completed', {
    requestId,
    method: request.method,
    path: request.url,
    status: response.status,
    duration,
    userAgent: request.headers.get('user-agent')
  })
  
  // Agregar headers de respuesta
  response.headers.set('x-request-id', requestId)
  response.headers.set('x-response-time', `${duration}ms`)
  
  return response
}
```

### Tracking de Métricas de Negocio

```typescript
// lib/analytics/business-metrics.ts
import { prisma } from '@/lib/db/prisma'

export class BusinessMetrics {
  // Daily Active Users
  static async getDAU(date: Date = new Date()): Promise<number> {
    const startOfDay = new Date(date.setHours(0, 0, 0, 0))
    const endOfDay = new Date(date.setHours(23, 59, 59, 999))
    
    const result = await prisma.taskCompletion.groupBy({
      by: ['userId'],
      where: {
        completedAt: {
          gte: startOfDay,
          lte: endOfDay
        }
      }
    })
    
    return result.length
  }
  
  // Trial to Paid Conversion
  static async getTrialConversion(
    startDate: Date,
    endDate: Date
  ): Promise<number> {
    const trials = await prisma.user.count({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      }
    })
    
    const conversions = await prisma.subscription.count({
      where: {
        user: {
          createdAt: {
            gte: startDate,
            lte: endDate
          }
        },
        status: 'active'
      }
    })
    
    return trials > 0 ? (conversions / trials) * 100 : 0
  }
  
  // Task Completion Rate
  static async getTaskCompletionRate(date: Date = new Date()): Promise<number> {
    const startOfDay = new Date(date.setHours(0, 0, 0, 0))
    const endOfDay = new Date(date.setHours(23, 59, 59, 999))
    
    const completions = await prisma.taskCompletion.count({
      where: {
        completedAt: {
          gte: startOfDay,
          lte: endOfDay
        }
      }
    })
    
    // Estimado de tareas esperadas (usuarios activos × tareas diarias)
    const activeUsers = await this.getDAU(date)
    const expectedTasks = activeUsers * 4 // 4 tareas base por día
    
    return expectedTasks > 0 ? (completions / expectedTasks) * 100 : 0
  }
}
```

## ALERTAS

```typescript
// lib/alerts/alert-rules.ts
interface AlertRule {
  name: string
  condition: () => Promise<boolean>
  severity: 'critical' | 'warning' | 'info'
  channels: string[] // email, slack, sms
  cooldown: number // minutos
}

export const alertRules: AlertRule[] = [
  {
    name: 'High Error Rate',
    condition: async () => {
      // Verificar si error rate > 1% en últimos 5 minutos
      return false // Implementar
    },
    severity: 'critical',
    channels: ['email', 'slack'],
    cooldown: 15
  },
  {
    name: 'Image Generation Failure Spike',
    condition: async () => {
      // Verificar si tasa de fallo > 5% en última hora
      return false // Implementar
    },
    severity: 'warning',
    channels: ['slack'],
    cooldown: 30
  },
  {
    name: 'Database Connection Pool Exhausted',
    condition: async () => {
      // Verificar conexiones DB
      return false // Implementar
    },
    severity: 'critical',
    channels: ['email', 'slack', 'sms'],
    cooldown: 5
  }
]
```

## CONSECUENCIAS

### Positivas

| Beneficio | Impacto |
|-----------|---------|
| **Detección temprana** | Problemas detectados antes de afectar usuarios |
| **Debugging rápido** | Trazas y logs para investigar incidentes |
| **Decisiones data-driven** | Métricas de negocio para priorizar features |

### Negativas (Trade-offs)

| Trade-off | Mitigación |
|-----------|------------|
| **Overhead de logging** | Sampling en producción |
| **Costo de herramientas** | Empezar con free tiers |

---

# ADR-012: ESTRATEGIA DE BACKUP

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-012: ESTRATEGIA DE BACKUP                                               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Infraestructura / Datos                                    ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

Los datos de METAMEN100 son críticos:
- Progreso de usuarios (meses de esfuerzo)
- Suscripciones y pagos
- Journal entries personales

Debe haber:
- Backups automáticos
- Recuperación rápida (RTO < 1 hora)
- Pérdida mínima de datos (RPO < 1 hora)

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTRATEGIA DE BACKUP 3-2-1                                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  • 3 copias de los datos                                                    │
│  • 2 medios diferentes (cloud + local)                                      │
│  • 1 copia offsite                                                          │
│                                                                             │
│  IMPLEMENTACIÓN:                                                            │
│  ────────────────                                                           │
│                                                                             │
│  BASE DE DATOS:                                                             │
│  • Supabase auto-backups: Diario, retención 7 días                          │
│  • Backups manuales semanales a S3                                          │
│  • Retención: 30 días en S3                                                 │
│                                                                             │
│  IMÁGENES (Supabase Storage):                                               │
│  • Replicación automática                                                   │
│  • Backup mensual a S3                                                      │
│                                                                             │
│  CONFIGURACIÓN:                                                             │
│  • Infrastructure as Code (Terraform)                                       │
│  • Versionado en Git                                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## PROCEDIMIENTO DE RECUPERACIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PLAYBOOK: RECUPERACIÓN DE BASE DE DATOS                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ESCENARIO 1: PÉRDIDA DE DATOS RECIENTE (< 1 hora)                          │
│  ─────────────────────────────────────────────────                            │
│  1. Identificar punto de recuperación (WAL logs)                            │
│  2. Restaurar desde backup más reciente                                     │
│  3. Aplicar WAL logs hasta el momento del incidente                         │
│  4. Verificar integridad                                                    │
│  5. Tiempo estimado: 15-30 minutos                                          │
│                                                                             │
│  ESCENARIO 2: CORRUPCIÓN DE BASE DE DATOS                                   │
│  ────────────────────────────────────────                                   │
│  1. Detener acceso a la aplicación                                          │
│  2. Crear snapshot del estado actual (forensics)                            │
│  3. Restaurar desde backup limpio                                           │
│  4. Verificar integridad con checksumm                                      │
│  5. Restaurar acceso                                                        │
│  6. Tiempo estimado: 30-60 minutos                                          │
│                                                                             │
│  ESCENARIO 3: DESASTRE TOTAL (Supabase caído)                               │
│  ────────────────────────────────────────────                               │
│  1. Activar plan de contingencia                                            │
│  2. Restaurar DB en nueva instancia (AWS RDS)                               │
│  3. Actualizar connection strings                                           │
│  4. Verificar funcionalidad                                                 │
│  5. Tiempo estimado: 1-2 horas                                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## MÉTRICAS DE BACKUP

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| **RTO (Recovery Time Objective)** | < 1 hora | Drills |
| **RPO (Recovery Point Objective)** | < 1 hora | Backup frequency |
| **Backup success rate** | > 99% | Monitoring |
| **Restore test frequency** | Mensual | Calendar |

---

# ADR-013: INTERNACIONALIZACIÓN (i18n)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-013: INTERNACIONALIZACIÓN (i18n)                                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Frontend / Producto                                        ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 se lanzará en:
- **Fase 1:** México, LATAM (español)
- **Fase 2:** España (español)
- **Fase 3:** USA, global (inglés)

La arquitectura debe soportar múltiples idiomas desde el inicio.

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTRATEGIA DE i18n: next-intl                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  BIBLIOTECA: next-intl (oficial para Next.js App Router)                    │
│                                                                             │
│  IDIOMAS SOPORTADOS:                                                        │
│  • es (español) - Default para lanzamiento                                  │
│  • en (inglés) - Fase 3                                                     │
│  • pt (portugués) - Futuro (Brasil)                                         │
│                                                                             │
│  ESTRUCTURA:                                                                │
│  messages/                                                                  │
│  ├── es/                                                                    │
│  │   ├── common.json                                                        │
│  │   ├── auth.json                                                          │
│  │   ├── dashboard.json                                                     │
│  │   ├── tools.json                                                         │
│  │   └── shop.json                                                          │
│  └── en/                                                                    │
│      └── ...                                                                │
│                                                                             │
│  DETECCIÓN DE IDIOMA:                                                       │
│  • Primero: Preferencia del usuario (guardada en DB)                        │
│  • Segundo: Accept-Language header                                          │
│  • Tercero: Default (es)                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## IMPLEMENTACIÓN

```typescript
// next.config.js
const nextConfig = {
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: true
  }
}

// middleware.ts
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es'
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}

// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

// Uso en componentes
import { useTranslations } from 'next-intl'

export function Dashboard() {
  const t = useTranslations('dashboard')
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('welcome', { name: 'Usuario' })}</p>
    </div>
  )
}
```

---

# ADR-014: ARQUITECTURA FRONTEND

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-014: ARQUITECTURA FRONTEND                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Frontend                                                   ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

El frontend de METAMEN100 debe ser:
- **Rápido:** LCP < 2.5s, FID < 100ms
- **Responsivo:** Mobile-first, PWA
- **Accesible:** WCAG 2.1 AA
- **Mantenible:** Código limpio, testeable

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ARQUITECTURA FRONTEND: Next.js App Router + Component-Based                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ESTRUCTURA DE CARPETAS:                                                    │
│  ────────────────────────                                                   │
│                                                                             │
│  app/                                                                       │
│  ├── (auth)/              # Grupo: rutas de autenticación                   │
│  │   ├── login/                                                             │
│  │   ├── register/                                                          │
│  │   └── layout.tsx         # Layout sin sidebar                            │
│  │                                                                          │
│  ├── (dashboard)/         # Grupo: rutas protegidas                         │
│  │   ├── dashboard/                                                         │
│  │   ├── avatar/                                                            │
│  │   ├── tools/                                                             │
│  │   ├── shop/                                                              │
│  │   ├── settings/                                                          │
│  │   └── layout.tsx         # Layout con sidebar                            │
│  │                                                                          │
│  ├── api/                 # API routes                                      │
│  │   ├── webhooks/                                                          │
│  │   └── ...                                                                │
│  │                                                                          │
│  ├── layout.tsx           # Root layout                                     │
│  ├── loading.tsx          # Loading global                                  │
│  ├── error.tsx            # Error boundary global                           │
│  └── not-found.tsx        # 404 global                                      │
│                                                                             │
│  components/                                                                │
│  ├── ui/                  # shadcn/ui components                            │
│  ├── layout/              # Layout components                               │
│  ├── avatar/              # Avatar-related components                       │
│  ├── tools/               # Tool components                                 │
│  └── charts/              # Chart components                                │
│                                                                             │
│  lib/                                                                       │
│  ├── hooks/               # Custom React hooks                              │
│  ├── utils/               # Utility functions                               │
│  ├── db/                  # Database client                                 │
│  ├── ai/                  # AI integrations                                 │
│  └── cache/               # Cache utilities                                 │
│                                                                             │
│  types/                   # Global TypeScript types                         │
│  styles/                  # Global styles                                   │
│  public/                  # Static assets                                   │
│                                                                             │
│  PATRONES:                                                                  │
│  ─────────                                                                  │
│  • Server Components por default                                            │
│  • Client Components solo cuando necesario                                  │
│  • Colocation: componentes cerca de donde se usan                           │
│  • Composition over inheritance                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## PATRONES DE COMPONENTES

### Server Component (Default)

```typescript
// app/dashboard/page.tsx
import { AvatarCard } from '@/components/avatar/avatar-card'
import { TaskList } from '@/components/tasks/task-list'
import { getCurrentAvatar } from '@/app/actions/avatar.actions'

// Server Component - no 'use client'
export default async function DashboardPage() {
  const avatar = await getCurrentAvatar()
  
  return (
    <div className="grid gap-6">
      <AvatarCard avatar={avatar} />
      <TaskList avatarId={avatar.id} />
    </div>
  )
}
```

### Client Component (Cuando necesario)

```typescript
// components/tools/meditation-timer.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function MeditationTimer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  
  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
    }
    
    return () => clearInterval(interval)
  }, [isRunning])
  
  return (
    <div>
      <div className="text-4xl font-mono">
        {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
      </div>
      <Button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </Button>
    </div>
  )
}
```

---

# ADR-015: API GATEWAY

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-015: API GATEWAY                                                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Backend                                                    ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 necesita:
- API REST para clientes
- Webhooks para proveedores externos (Stripe, Fal.ai)
- Rate limiting
- Autenticación unificada

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  API GATEWAY: Next.js API Routes (Server Actions + Route Handlers)          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SERVER ACTIONS (Operaciones CRUD):                                         │
│  ─────────────────────────────────                                          │
│  • Mutaciones de datos                                                      │
│  • Llamadas desde Client Components                                         │
│  • Type-safe automático                                                     │
│                                                                             │
│  ROUTE HANDLERS (API REST):                                                │
│  ──────────────────────────                                                 │
│  • Webhooks externos                                                        │
│  • Endpoints públicos                                                       │
│  • Streaming responses                                                      │
│                                                                             │
│  ESTRUCTURA:                                                                │
│  ────────────                                                               │
│  app/                                                                       │
│  ├── actions/               # Server Actions                                │
│  │   ├── avatar.actions.ts                                                  │
│  │   ├── task.actions.ts                                                    │
│  │   └── shop.actions.ts                                                    │
│  │                                                                          │
│  └── api/                   # Route Handlers                                │
│      ├── webhooks/                                                          │
│      │   ├── stripe/route.ts                                                │
│      │   └── fal/route.ts                                                   │
│      └── health/route.ts                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## CONVENCIONES DE API

### Server Actions

```typescript
// app/actions/avatar.actions.ts
'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'

const UpdateVectorsSchema = z.object({
  avatarId: z.string().uuid(),
  auraDelta: z.number().optional(),
  muscleDelta: z.number().optional(),
  fatDelta: z.number().optional()
})

export async function updateAvatarVectors(
  input: z.infer<typeof UpdateVectorsSchema>
) {
  // Validar input
  const validated = UpdateVectorsSchema.parse(input)
  
  // Verificar autenticación
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('Unauthorized')
  }
  
  // Verificar ownership
  const avatar = await prisma.avatar.findFirst({
    where: { id: validated.avatarId, userId: user.id }
  })
  
  if (!avatar) {
    throw new Error('Avatar not found')
  }
  
  // Actualizar
  const updated = await prisma.avatarVector.update({
    where: { avatarId: validated.avatarId },
    data: {
      auraLevel: { increment: validated.auraDelta || 0 },
      muscleLevel: { increment: validated.muscleDelta || 0 },
      fatLevel: { increment: validated.fatDelta || 0 }
    }
  })
  
  // Invalidar caché
  revalidatePath('/dashboard')
  revalidatePath('/avatar')
  
  return updated
}
```

### Route Handlers

```typescript
// app/api/webhooks/stripe/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia'
})

export async function POST(request: NextRequest) {
  const payload = await request.text()
  const signature = request.headers.get('stripe-signature')!
  
  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
    
    // Procesar evento
    await processStripeEvent(event)
    
    return NextResponse.json({ received: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }
}
```

---

# ADR-016: GESTIÓN DE ASSETS ESTÁTICOS

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-016: GESTIÓN DE ASSETS ESTÁTICOS                                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Frontend / Performance                                     ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

Assets estáticos incluyen:
- Imágenes (logos, iconos, ilustraciones)
- Fuentes
- Videos
- Audios (meditaciones)

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTRATEGIA DE ASSETS                                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  TIPO              │  UBICACIÓN           │  OPTIMIZACIÓN                    │
│  ─────────────────────────────────────────────────────────────────────      │
│  Imágenes UI       │  public/             │  Next.js Image optimization      │
│  Imágenes Avatar   │  Supabase Storage    │  CDN automático                  │
│  Fuentes           │  public/fonts/       │  Subset, preload                 │
│  Audios            │  Supabase Storage    │  Streaming, compression          │
│  Videos            │  Supabase Storage    │  HLS streaming (futuro)          │
│                                                                             │
│  FORMATOS:                                                                  │
│  ─────────                                                                  │
│  • Imágenes: WebP (con fallback JPEG)                                       │
│  • Iconos: SVG                                                              │
│  • Fuentes: WOFF2                                                           │
│  • Audios: MP3 (128kbps)                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# ADR-017: SISTEMA DE LOGGING

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-017: SISTEMA DE LOGGING                                                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Observabilidad                                             ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

Logging es esencial para debugging, auditoría y cumplimiento.

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SISTEMA DE LOGGING: Estructurado + Jerárquico                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  NIVELES DE LOG:                                                            │
│  ────────────────                                                           │
│  • ERROR: Errores que afectan usuarios                                      │
│  • WARN:  Condiciones anómalas                                              │
│  • INFO:  Eventos importantes del negocio                                   │
│  • DEBUG: Información detallada (solo dev)                                  │
│                                                                             │
│  FORMATO (JSON estructurado):                                               │
│  ──────────────────────────────                                             │
│  {                                                                          │
│    "timestamp": "2026-01-15T10:30:00Z",                                     │
│    "level": "INFO",                                                         │
│    "message": "User completed task",                                        │
│    "service": "metamen100",                                                 │
│    "environment": "production",                                             │
│    "requestId": "uuid",                                                     │
│    "userId": "uuid",                                                        │
│    "context": {                                                             │
│      "taskId": "uuid",                                                      │
│      "taskType": "meditation"                                               │
│    }                                                                        │
│  }                                                                          │
│                                                                             │
│  DESTINOS:                                                                  │
│  ─────────                                                                  │
│  • Desarrollo: Console                                                      │
│  • Producción: Vercel Logs + (futuro: Datadog/ELK)                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# ADR-018: ARQUITECTURA DE MICROSERVICIOS

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-018: ARQUITECTURA DE MICROSERVICIOS                                     ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ⚠️ PROPUESTO (Fase 3+)                                     ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Arquitectura                                               ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

Para Fase 3+ (escala masiva), considerar migración a microservicios.

## DECISIÓN PROPUESTA

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  MIGRACIÓN A MICROSERVICIOS (Fase 3+)                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SERVICIOS IDENTIFICADOS:                                                   │
│  ─────────────────────────                                                  │
│  • api-gateway:      Entry point, routing, auth                             │
│  • user-service:     Gestión de usuarios, perfiles                          │
│  • avatar-service:   Gestión de avatares, vectores, imágenes                │
│  • task-service:     Gestión de tareas, completados                         │
│  • shop-service:     Tienda, inventario, transacciones                      │
│  • payment-service:  Suscripciones, pagos                                   │
│  • notification-service: Push, email                                        │
│  • ai-service:       Generación de imágenes, prompts                        │
│  • analytics-service: Métricas, reportes                                    │
│                                                                             │
│  COMUNICACIÓN:                                                              │
│  ─────────────                                                              │
│  • Síncrona: gRPC (interno)                                                 │
│  • Asíncrona: Event Bus (Kafka/RabbitMQ)                                    │
│                                                                             │
│  CRITERIOS PARA MIGRAR:                                                     │
│  ──────────────────────                                                     │
│  • > 100K usuarios concurrentes                                             │
│  • Equipo > 10 desarrolladores                                              │
│  • Necesidad de deploy independiente                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# ADR-019: ESTRATEGIA DE TESTING

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-019: ESTRATEGIA DE TESTING                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Calidad / Testing                                          ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

Testing es crítico para un sistema TOP-100 mundial.

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PIRÁMIDE DE TESTING                                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                    ┌─────────┐                                              │
│                    │  E2E    │  10%  (Playwright)                          │
│                    │  Tests  │                                              │
│                   ┌┴─────────┴┐                                             │
│                   │ Integration│  30%  (Vitest + MSW)                       │
│                   │   Tests    │                                             │
│                  ┌┴────────────┴┐                                            │
│                  │    Unit       │  60%  (Vitest)                           │
│                  │    Tests      │                                            │
│                  └───────────────┘                                            │
│                                                                             │
│  HERRAMIENTAS:                                                              │
│  ──────────────                                                             │
│  • Unit/Integration: Vitest                                                 │
│  • E2E: Playwright                                                          │
│  • Mocking: MSW (Mock Service Worker)                                       │
│  • Coverage: v8 (objetivo: > 80%)                                           │
│                                                                             │
│  COBERTURA MÍNIMA:                                                          │
│  ──────────────────                                                         │
│  • Core business logic: > 90%                                               │
│  • API routes: > 80%                                                        │
│  • UI components: > 70%                                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# ADR-020: CUMPLIMIENTO LEGAL (GDPR/LGPD)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ADR-020: CUMPLIMIENTO LEGAL (GDPR/LGPD)                                     ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Estado:          ✅ ACEPTADO                                                ║
║  Fecha:           Enero 2026                                                 ║
║  Decisores:       Equipo de Arquitectura METAMEN100                        ║
║  Área:            Legal / Seguridad                                          ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## CONTEXTO

METAMEN100 debe cumplir con:
- GDPR (usuarios de Europa)
- LGPD (usuarios de Brasil)
- Ley de Protección de Datos Personales (México)

## DECISIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  MEDIDAS DE CUMPLIMIENTO                                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CONSENTIMIENTO:                                                            │
│  ────────────────                                                           │
│  • Checkbox explícito en registro                                           │
│  • Política de privacidad clara                                             │
│  • Términos de servicio                                                     │
│                                                                             │
│  DERECHOS DEL USUARIO:                                                      │
│  ───────────────────────                                                    │
│  • Acceso: Ver todos sus datos                                              │
│  • Rectificación: Modificar datos                                           │
│  • Eliminación: "Olvidarme"                                                 │
│  • Portabilidad: Exportar datos                                             │
│                                                                             │
│  SEGURIDAD:                                                                 │
│  ──────────                                                                 │
│  • Encriptación en tránsito (TLS 1.3)                                       │
│  • Encriptación en reposo (journal entries)                                 │
│  • Acceso limitado (RLS)                                                    │
│                                                                             │
│  NOTIFICACIÓN DE BREACHES:                                                  │
│  ─────────────────────────                                                  │
│  • Procedimiento documentado                                                │
│  • Notificación en 72 horas                                                 │
│                                                                             │
│  DPO (Data Protection Officer):                                             │
│  ──────────────────────────────                                             │
│  • Designar responsable                                                     │
│  • Contacto: privacy@metamen100.com                                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# RESUMEN DE DECISIONES

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    RESUMEN EJECUTIVO DE ADRs                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ADR    │  DECISIÓN                          │  ESTADO    │  PRIORIDAD    │
│  ─────────────────────────────────────────────────────────────────────      │
│  001    │  Next.js + Supabase + Fal.ai       │  ✅ Aceptado │  Crítica    │
│  002    │  PostgreSQL + Prisma               │  ✅ Aceptado │  Crítica    │
│  003    │  Supabase Auth                     │  ✅ Aceptado │  Crítica    │
│  004    │  Fal.ai + Replicate (backup)       │  ✅ Aceptado │  Crítica    │
│  005    │  BullMQ + Redis                    │  ✅ Aceptado │  Crítica    │
│  006    │  Web Push + OneSignal              │  ✅ Aceptado │  Alta       │
│  007    │  Stripe + Trial 5 días             │  ✅ Aceptado │  Crítica    │
│  008    │  Multi-nivel (Redis + Next.js)     │  ✅ Aceptado │  Alta       │
│  009    │  Seguridad por capas               │  ✅ Aceptado │  Crítica    │
│  010    │  Escalabilidad por fases           │  ✅ Aceptado │  Alta       │
│  011    │  Vercel Analytics + LogRocket      │  ✅ Aceptado │  Alta       │
│  012    │  Backup 3-2-1                      │  ✅ Aceptado │  Crítica    │
│  013    │  next-intl (es/en)                 │  ✅ Aceptado │  Media      │
│  014    │  App Router + Component-based      │  ✅ Aceptado │  Crítica    │
│  015    │  Server Actions + Route Handlers   │  ✅ Aceptado │  Crítica    │
│  016    │  Supabase Storage + Next Image     │  ✅ Aceptado │  Media      │
│  017    │  JSON estructurado                 │  ✅ Aceptado │  Media      │
│  018    │  Microservicios (Fase 3+)          │  ⚠️ Propuesto│  Baja       │
│  019    │  Vitest + Playwright               │  ✅ Aceptado │  Alta       │
│  020    │  GDPR/LGPD compliance              │  ✅ Aceptado │  Crítica    │
│                                                                             │
│  TOTAL: 20 ADRs documentados                                                │
│  Aceptados: 19                                                              │
│  Propuestos: 1                                                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                                                                              ║
║           FIN DE ARCHITECTURE DECISION RECORDS                               ║
║                                                                              ║
║           METAMEN100 v1.0                                                    ║
║           "Cada decisión documentada, cada trade-off justificado"            ║
║                                                                              ║
║                                                                              ║
║           Documento preparado para sistema TOP-100 Mundial                   ║
║           Total de líneas: ~3,200+                                           ║
║           ADRs documentados: 20                                              ║
║           Estado: PRODUCCIÓN                                                 ║
║                                                                              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

*Documento generado para METAMEN100 - Sistema Operativo de Conducta*
*Enero 2026*
