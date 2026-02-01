# METAMEN100 - TECHNICAL SPECIFICATION
## Especificación Técnica v1.0.0

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                      ║
║     ███╗   ███╗███████╗████████╗ █████╗ ███╗   ███╗███████╗███╗   ██╗ ██╗ ██████╗     ████████╗      ║
║     ████╗ ████║██╔════╝╚══██╔══╝██╔══██╗████╗ ████║██╔════╝████╗  ██║███║██╔═████╗    ╚══██╔══╝      ║
║     ██╔████╔██║█████╗     ██║   ███████║██╔████╔██║█████╗  ██╔██╗ ██║╚██║██║██╔██║       ██║         ║
║     ██║╚██╔╝██║██╔══╝     ██║   ██╔══██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║ ██║████╔╝██║       ██║         ║
║     ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║ ██║╚██████╔╝       ██║         ║
║     ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═╝ ╚═════╝        ╚═╝         ║
║                                                                                                      ║
║                    TECHNICAL SPECIFICATION v1.0.0                                                   ║
║                    Arquitectura para Sistema TOP 100 Mundial                                        ║
║                                                                                                      ║
║     "Especificaciones técnicas quirúrgicas para un sistema de alta                                 ║
║      disponibilidad, escalabilidad y rendimiento excepcional."                                      ║
║                                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
```

**Documento:** TECH-SPEC-METAMEN100-v1.0.0  
**Fecha de Creación:** 30 de Enero de 2026  
**Última Actualización:** 30 de Enero de 2026  
**Autor:** Equipo de Arquitectura MetaMen100  
**Clasificación:** Documento Fundacional - CAJA 01.3  
**Estado:** APROBADO PARA DESARROLLO  

---

## TABLA DE CONTENIDOS

1. [Arquitectura del Sistema](#1-arquitectura-del-sistema)
2. [Stack Tecnológico Detallado](#2-stack-tecnológico-detallado)
3. [Estructura de Carpetas Definitiva](#3-estructura-de-carpetas-definitiva)
4. [Contratos de API](#4-contratos-de-api)
5. [Tipos Compartidos](#5-tipos-compartidos)
6. [Patrones de Código](#6-patrones-de-código)
7. [Variables de Entorno](#7-variables-de-entorno)
8. [Convenciones de Código](#8-convenciones-de-código)

---

# 1. ARQUITECTURA DEL SISTEMA

## 1.1 Diagrama de Alto Nivel

### 1.1.1 Arquitectura General

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              ARQUITECTURA METAMEN100 - VISTA GENERAL                                │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    CLIENT LAYER                                            │     │
│   │                              (Next.js 14 + React 18)                                       │     │
│   │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │     │
│   │  │   Landing    │  │   Dashboard  │  │   Tools      │  │    Store     │  │  Profile   │  │     │
│   │  │   (SSR)      │  │  (App Router)│  │  (Client)    │  │   (Client)   │  │  (Mixed)   │  │     │
│   │  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘  └────────────┘  │     │
│   │                                                                                           │     │
│   │  State: Zustand │ Cache: React Query │ UI: Tailwind + Framer Motion                      │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                                │                                                     │
│                                                │ HTTPS / JSON                                        │
│                                                ▼                                                     │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                              SERVER LAYER (Next.js API)                                    │     │
│   │  ┌─────────────────────────────────────────────────────────────────────────────────────┐  │     │
│   │  │                         SERVER ACTIONS (Next.js 14)                                  │  │     │
│   │  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │  │     │
│   │  │  │    Auth     │ │   Tasks     │ │   Store     │ │   Profile   │ │   Wallet    │   │  │     │
│   │  │  │   Actions   │ │   Actions   │ │   Actions   │ │   Actions   │ │   Actions   │   │  │     │
│   │  │  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘   │  │     │
│   │  └─────────────────────────────────────────────────────────────────────────────────────┘  │     │
│   │                                                                                           │     │
│   │  ┌─────────────────────────────────────────────────────────────────────────────────────┐  │     │
│   │  │                         API ROUTES (Webhooks)                                        │  │     │
│   │  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐                       │  │     │
│   │  │  │  /api/webhooks  │  │  /api/webhooks  │  │  /api/cron      │                       │  │     │
│   │  │  │    /stripe      │  │  /replicate     │  │  /judgement     │                       │  │     │
│   │  │  └─────────────────┘  └─────────────────┘  └─────────────────┘                       │  │     │
│   │  └─────────────────────────────────────────────────────────────────────────────────────┘  │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                                │                                                     │
│                     ┌──────────────────────────┼──────────────────────────┐                          │
│                     │                          │                          │                          │
│                     ▼                          ▼                          ▼                          │
│   ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐                      │
│   │     SUPABASE         │  │     INNGEST          │  │    CLOUDFLARE        │                      │
│   │    (PostgreSQL)      │  │     (Queue/Jobs)     │  │       R2             │                      │
│   │  ┌────────────────┐  │  │  ┌────────────────┐  │  │  ┌────────────────┐  │                      │
│   │  │  Primary DB    │  │  │  │ Judgement Jobs │  │  │  │ Avatar Images  │  │                      │
│   │  │  Auth          │  │  │  │ Image Gen      │  │  │  │ Static Assets  │  │                      │
│   │  │  Realtime      │  │  │  │ Notifications  │  │  │  │ Item Previews  │  │                      │
│   │  └────────────────┘  │  │  └────────────────┘  │  │  └────────────────┘  │                      │
│   └──────────────────────┘  └──────────────────────┘  └──────────────────────┘                      │
│              │                           │                           │                             │
│              └───────────────────────────┼───────────────────────────┘                             │
│                                          │                                                         │
│                                          ▼                                                         │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                              EXTERNAL SERVICES                                             │     │
│   │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐   │     │
│   │  │     STRIPE       │  │    REPLICATE     │  │  GEMINI (Google) │  │     RESEND       │   │     │
│   │  │   (Payments)     │  │  (Image Gen)     │  │  (Image Gen)     │  │   (Email)        │   │     │
│   │  └──────────────────┘  └──────────────────┘  └──────────────────┘  └──────────────────┘   │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 1.1.2 Diagrama de Componentes

```
╔═════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                         DIAGRAMA DE COMPONENTES DETALLADO                                            ║
╠═════════════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                                      ║
║  ┌─────────────────────────────────────────────────────────────────────────────────────────────────┐ ║
║  │                                    COMPONENTES DEL CLIENTE                                       │ ║
║  ├─────────────────────────────────────────────────────────────────────────────────────────────────┤ ║
║  │                                                                                                  │ ║
║  │  ┌─────────────────────────────────────────────────────────────────────────────────────────┐   │ ║
║  │  │                              UI COMPONENTS (shadcn/ui)                                   │   │ ║
║  │  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │   │ ║
║  │  │  │    Button    │ │     Card     │ │    Modal     │ │   Skeleton   │ │    Toast     │   │   │ ║
║  │  │  │    Input     │ │   Select     │ │   Dialog     │ │   Badge      │ │  Progress    │   │   │ ║
║  │  │  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘   │   │ ║
║  │  └─────────────────────────────────────────────────────────────────────────────────────────┘   │ ║
║  │                                                                                                  │ ║
║  │  ┌─────────────────────────────────────────────────────────────────────────────────────────┐   │ ║
║  │  │                              FEATURE COMPONENTS                                           │   │ ║
║  │  │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │   │ ║
║  │  │  │   AvatarDisplay  │  │   HealthBar      │  │   TaskList       │  │   VectorRadar    │  │   │ ║
║  │  │  │   TimeMatrix     │  │   StreakCounter  │  │   StoreGrid      │  │   ToolPlayer     │  │   │ ║
║  │  │  └──────────────────┘  └──────────────────┘  └──────────────────┘  └──────────────────┘  │   │ ║
║  │  └─────────────────────────────────────────────────────────────────────────────────────────┘   │ ║
║  │                                                                                                  │ ║
║  │  ┌─────────────────────────────────────────────────────────────────────────────────────────┐   │ ║
║  │  │                              STATE MANAGEMENT (Zustand)                                   │   │ ║
║  │  │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │   │ ║
║  │  │  │   useAvatarStore │  │   useTaskStore   │  │   useWalletStore │  │   useUIStore     │  │   │ ║
║  │  │  │   - avatarState  │  │   - tasks        │  │   - balance      │  │   - modals       │  │   │ ║
║  │  │  │   - isLoading    │  │   - completed    │  │   - history      │  │   - theme        │  │   │ ║
║  │  │  └──────────────────┘  └──────────────────┘  └──────────────────┘  └──────────────────┘  │   │ ║
║  │  └─────────────────────────────────────────────────────────────────────────────────────────┘   │ ║
║  │                                                                                                  │ ║
║  └─────────────────────────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                                      ║
║  ┌─────────────────────────────────────────────────────────────────────────────────────────────────┐ ║
║  │                                    COMPONENTES DEL SERVIDOR                                      │ ║
║  ├─────────────────────────────────────────────────────────────────────────────────────────────────┤ ║
║  │                                                                                                  │ ║
║  │  ┌─────────────────────────────────────────────────────────────────────────────────────────┐   │ ║
║  │  │                              SERVER ACTIONS (Next.js)                                     │   │ ║
║  │  │                                                                                           │   │ ║
║  │  │  auth/                                                                                    │   │ ║
║  │  │   ├── login.ts                    - Autenticación de usuarios                           │   │ ║
║  │  │   ├── register.ts                 - Registro con validación                             │   │ ║
║  │  │   ├── logout.ts                   - Cierre de sesión                                    │   │ ║
║  │  │   └── verify-phone.ts             - Verificación SMS                                    │   │ ║
║  │  │                                                                                           │   │ ║
║  │  │  tasks/                                                                                   │   │ ║
║  │  │   ├── getTodayTasks.ts          - Obtener tareas del día                                │   │ ║
║  │  │   ├── completeTask.ts           - Completar tarea con validación                        │   │ ║
║  │  │   └── createCustomTask.ts       - Crear tarea personalizada                             │   │ ║
║  │  │                                                                                           │   │ ║
║  │  │  store/                                                                                   │   │ ║
║  │  │   ├── getItems.ts               - Listar items de tienda                                │   │ ║
║  │  │   ├── purchaseItem.ts           - Comprar item (transacción)                            │   │ ║
║  │  │   └── getInventory.ts           - Obtener inventario del usuario                        │   │ ║
║  │  │                                                                                           │   │ ║
║  │  │  wallet/                                                                                  │   │ ║
║  │  │   ├── getBalance.ts             - Consultar balance BTC                                 │   │ ║
║  │  │   └── getTransactionHistory.ts  - Historial de transacciones                            │   │ ║
║  │  │                                                                                           │   │ ║
║  │  │  profile/                                                                                 │   │ ║
║  │  │   ├── updateProfile.ts          - Actualizar datos de perfil                            │   │ ║
║  │  │   └── updateSettings.ts         - Actualizar configuración                               │   │ ║
║  │  │                                                                                           │   │ ║
║  │  └─────────────────────────────────────────────────────────────────────────────────────────┘   │ ║
║  │                                                                                                  │ ║
║  │  ┌─────────────────────────────────────────────────────────────────────────────────────────┐   │ ║
║  │  │                              SERVICIOS EXTERNOS                                           │   │ ║
║  │  │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │   │ ║
║  │  │  │  SupabaseClient  │  │  ReplicateClient │  │   StripeClient   │  │   InngestClient  │  │   │ ║
║  │  │  │   - Database     │  │   - Generate     │  │   - Checkout     │  │   - Schedule     │  │   │ ║
║  │  │  │   - Auth         │  │   - Webhook      │  │   - Webhook      │  │   - Queue        │  │   │ ║
║  │  │  │   - Storage      │  │   - Fallback     │  │   - Subscription │  │   - Retry        │  │   │ ║
║  │  │  └──────────────────┘  └──────────────────┘  └──────────────────┘  └──────────────────┘  │   │ ║
║  │  └─────────────────────────────────────────────────────────────────────────────────────────┘   │ ║
║  │                                                                                                  │ ║
║  └─────────────────────────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                                      ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════╝
```

## 1.2 Capas del Sistema

### 1.2.1 Capa de Presentación (Next.js)

```yaml
Nombre: Presentation Layer
Tecnología: Next.js 14.2+ con App Router
Responsabilidades:
  - Renderizado de UI (Server Components y Client Components)
  - Manejo de estado local y global (Zustand)
  - Enrutamiento y navegación
  - Llamadas a Server Actions
  - Caché de datos (React Query / SWR)
  - Optimización de imágenes y assets

Server Components (Default):
  - Landing Page (/)
  - Dashboard layout (/dashboard)
  - Páginas de autenticación (/login, /register)
  - SEO-critical pages

Client Components ('use client'):
  - Formularios interactivos
  - Reproductores de audio/video
  - Animaciones complejas (Framer Motion)
  - Componentes con estado local complejo
  - Canvas/WebGL elements
```

### 1.2.2 Capa de Lógica de Negocio (/lib/core)

```yaml
Nombre: Business Logic Layer
Ubicación: /src/lib/core
Responsabilidades:
  - Cálculo de vectores (AURA, JAWLINE, WEALTH, PHYSIQUE, ENV)
  - Procesamiento de Judgement Night
  - Cálculo de recompensas BTC
  - Validaciones de negocio
  - Máquinas de estado
  - Lógica pura sin dependencias de I/O

Características:
  - Funciones puras (misma entrada = misma salida)
  - Altamente testeable (unit tests 100% coverage)
  - Sin side effects
  - Tipado estricto con TypeScript
  - Documentación JSDoc completa
```

### 1.2.3 Capa de Datos (Supabase)

```yaml
Nombre: Data Layer
Tecnología: PostgreSQL 15 via Supabase
Responsabilidades:
  - Persistencia de datos
  - Autenticación y autorización (RLS)
  - Realtime subscriptions
  - Storage de archivos
  - Funciones de PostgreSQL
  - Triggers y procedimientos almacenados

Tablas Principales:
  - profiles: Información del usuario
  - avatar_states: Estado del avatar (vectores)
  - wallets: Balance de BTC
  - daily_tasks: Tareas del día
  - daily_logs: Registro histórico
  - subscriptions: Estado de suscripción
  - store_items: Catálogo de tienda
  - inventory: Items del usuario

Seguridad:
  - Row Level Security (RLS) en todas las tablas
  - Políticas granulares por usuario
  - Service role para operaciones administrativas
```

### 1.2.4 Capa de Servicios Externos

```yaml
Nombre: External Services Layer
Servicios:
  
  Replicate/Gemini:
    Propósito: Generación de imágenes de avatar
    Modo: Async via queue
    Fallback: Imagen anterior + reintentos
    
  Stripe:
    Propósito: Procesamiento de pagos
    Modo: Webhooks para eventos
    Features: Subscriptions, Checkout, Customer Portal
    
  Inngest:
    Propósito: Queue y scheduling de jobs
    Modo: Cron jobs y event-driven
    Jobs: Judgement Night, Image Generation, Notifications
    
  Resend:
    Propósito: Envío de emails transaccionales
    Modo: API REST
    Templates: Bienvenida, Recuperación, Facturas
    
  Cloudflare R2:
    Propósito: Storage de imágenes de avatares
    Modo: S3-compatible API
    CDN: Integrado con Cloudflare
```

## 1.3 Flujo de Datos

### 1.3.1 Flujo de Autenticación

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              FLUJO DE AUTENTICACIÓN                                                  │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│   USUARIO                                                                                            │
│      │                                                                                               │
│      │ 1. POST /register (email, password)                                                           │
│      ▼                                                                                               │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    NEXT.JS SERVER                                            │     │
│   │  ┌─────────────────────────────────────────────────────────────────────────────────────┐  │     │
│   │  │  auth/register.ts (Server Action)                                                    │  │     │
│   │  │                                                                                       │  │     │
│   │  │  2. Validar input con Zod                                                            │  │     │
│   │  │     - Email válido                                                                   │  │     │
│   │  │     - Password fuerte                                                                │  │     │
│   │  │     - Confirmación coincide                                                          │  │     │
│   │  │                                                                                       │  │     │
│   │  │  3. Llamar a Supabase Auth                                                           │  │     │
│   │  │     supabase.auth.signUp({ email, password })                                        │  │     │
│   │  │                                                                                       │  │     │
│   │  └─────────────────────────────────────────────────────────────────────────────────────┘  │     │
│   │                                    │                                                      │     │
│   └────────────────────────────────────┼──────────────────────────────────────────────────────┘     │
│                                        │                                                             │
│                                        ▼                                                             │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    SUPABASE AUTH                                           │     │
│   │  4. Crear usuario en auth.users                                                            │     │
│   │  5. Disparar trigger: handle_new_user()                                                    │     │
│   │                                                                                            │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                        │                                                             │
│                                        ▼                                                             │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    DATABASE (PostgreSQL)                                   │     │
│   │  6. Trigger crea registros automáticos:                                                    │     │
│   │     INSERT INTO profiles (user_id, nickname, ...)                                          │     │
│   │     INSERT INTO avatar_states (user_id, aura_lvl=1, ...)                                   │     │
│   │     INSERT INTO wallets (user_id, balance=0)                                               │     │
│   │     INSERT INTO subscriptions (user_id, status='trial', ...)                               │     │
│   │                                                                                            │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                        │                                                             │
│                                        ▼                                                             │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    NEXT.JS SERVER (continuación)                           │     │
│   │  7. Crear sesión JWT                                                                       │     │
│   │  8. Devolver respuesta: { success: true, user, nickname }                                  │     │
│   │                                                                                            │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                        │                                                             │
│                                        ▼                                                             │
│   USUARIO                                                                                            │
│      │ 9. Redirigir a /onboarding                                                                  │
│      ▼                                                                                               │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 1.3.2 Flujo de Completar Tarea

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              FLUJO: COMPLETAR TAREA                                                  │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│   USUARIO                                                                                            │
│      │                                                                                               │
│      │ 1. Click en "Completar Tarea" (taskId: "task_123")                                            │
│      ▼                                                                                               │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    CLIENTE (Browser)                                         │     │
│   │  2. Optimistic UI: Marcar tarea como completada inmediatamente                              │     │
│   │  3. Llamar Server Action: completeTask({ taskId, idempotencyKey })                         │     │
│   │                                                                                            │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                        │                                                             │
│                                        ▼                                                             │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    NEXT.JS SERVER                                            │     │
│   │  ┌─────────────────────────────────────────────────────────────────────────────────────┐  │     │
│   │  │  tasks/complete.ts (Server Action)                                                   │  │     │
│   │  │                                                                                       │  │     │
│   │  │  4. VALIDACIÓN                                                                        │  │     │
│   │  │     a. Validar sesión del usuario                                                    │  │     │
│   │  │     b. Validar taskId con Zod                                                        │  │     │
│   │  │     c. Verificar idempotencia (no duplicados)                                        │  │     │
│   │  │                                                                                       │  │     │
│   │  │  5. VERIFICACIONES DE NEGOCIO                                                         │  │     │
│   │  │     a. ¿La tarea existe? → TASK_NOT_FOUND                                            │  │     │
│   │  │     b. ¿Es del usuario actual? → UNAUTHORIZED                                        │  │     │
│   │  │     c. ¿Ya está completada? → TASK_ALREADY_COMPLETED                                 │  │     │
│   │  │     d. ¿Está dentro del horario válido? → OUTSIDE_TIME_WINDOW                        │  │     │
│   │  │                                                                                       │  │     │
│   │  │  6. TRANSA CCIÓN EN BASE DE DATOS                                                      │  │     │
│   │  │     BEGIN TRANSACTION;                                                               │  │     │
│   │  │                                                                                       │  │     │
│   │  │     a. Marcar tarea como completada:                                                 │  │     │
│   │  │        UPDATE daily_tasks SET status='completed', completed_at=NOW()                 │  │     │
│   │  │        WHERE id = task_id;                                                           │  │     │
│   │  │                                                                                       │  │     │
│   │  │     b. Calcular recompensa BTC:                                                      │  │     │
│   │  │        btc_earned = task.base_reward × streak_multiplier × level_multiplier          │  │     │
│   │  │                                                                                       │  │     │
│   │  │     c. Actualizar wallet:                                                            │  │     │
│   │  │        UPDATE wallets SET balance = balance + btc_earned                             │  │     │
│   │  │        WHERE user_id = user_id;                                                      │  │     │
│   │  │                                                                                       │  │     │
│   │  │     d. Calcular cambios de vectores:                                                 │  │     │
│   │  │        - aura_lvl += task.aura_modifier                                              │  │     │
│   │  │        - muscle_lvl += task.muscle_modifier                                          │  │     │
│   │  │        - fat_lvl -= task.fat_burn_modifier                                           │  │     │
│   │  │        - etc.                                                                        │  │     │
│   │  │                                                                                       │  │     │
│   │  │     e. Actualizar avatar_states:                                                     │  │     │
│   │  │        UPDATE avatar_states SET ...                                                  │  │     │
│   │  │                                                                                       │  │     │
│   │  │     f. Registrar transacción:                                                        │  │     │
│   │  │        INSERT INTO wallet_transactions (...)                                         │  │     │
│   │  │                                                                                       │  │     │
│   │  │     COMMIT;                                                                          │  │     │
│   │  │                                                                                       │  │     │
│   │  │  7. DEVOLVER RESPUESTA                                                                │  │     │
│   │  │     {                                                                                │  │     │
│   │  │       success: true,                                                                 │  │     │
│   │  │       data: {                                                                        │  │     │
│   │  │         taskId: "task_123",                                                          │  │     │
│   │  │         btcEarned: 30,                                                               │  │     │
│   │  │         newBalance: 1250,                                                            │  │     │
│   │  │         vectorChanges: { aura: +0.05, muscle: +0.03 },                               │  │     │
│   │  │         newStreakMultiplier: 1.2                                                    │  │     │
│   │  │       }                                                                              │  │     │
│   │  │     }                                                                                │  │     │
│   │  │                                                                                       │  │     │
│   │  └─────────────────────────────────────────────────────────────────────────────────────┘  │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                        │                                                             │
│                                        ▼                                                             │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    CLIENTE (continuación)                                  │     │
│   │  8. Actualizar estado global (Zustand) con nuevos valores                                  │     │
│   │  9. Mostrar animación de celebración (+30 BTC)                                             │     │
│   │  10. Actualizar UI de vectores si es visible                                              │     │
│   │                                                                                            │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 1.3.3 Flujo de Judgement Night

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              FLUJO: JUDGEMENT NIGHT                                                  │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│   TRIGGER: Cron Job (Inngest) a medianoche hora del usuario                                         │
│      │                                                                                               │
│      ▼                                                                                               │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    INNGEST (Queue System)                                  │     │
│   │  Job: "judgement-night.process"                                                            │     │
│   │                                                                                            │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                        │                                                             │
│                                        ▼                                                             │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    NEXT.JS SERVER                                            │     │
│   │  ┌─────────────────────────────────────────────────────────────────────────────────────┐  │     │
│   │  │  api/cron/judgement/route.ts                                                         │  │     │
│   │  │                                                                                       │  │     │
│   │  │  1. Obtener usuarios activos para esta hora                                           │  │     │
│   │  │     SELECT * FROM profiles WHERE timezone = current_timezone                         │  │     │
│   │  │     AND EXISTS (SELECT 1 FROM subscriptions WHERE status IN ('trial', 'active'))     │  │     │
│   │  │                                                                                       │  │     │
│   │  │  2. Para CADA USUARIO:                                                                │  │     │
│   │  │                                                                                       │  │     │
│   │  │     a. Obtener tareas del día:                                                       │  │     │
│   │  │        SELECT * FROM daily_tasks WHERE user_id = $1 AND day_number = $2              │  │     │
│   │  │                                                                                       │  │     │
│   │  │     b. Calcular tasa de completitud:                                                 │  │     │
│   │  │        completed = COUNT WHERE status = 'completed'                                  │  │     │
│   │  │        total = COUNT total                                                           │  │     │
│   │  │        rate = completed / total                                                      │  │     │
│   │  │                                                                                       │  │     │
│   │  │     c. Determinar resultado:                                                         │  │     │
│   │  │        IF rate >= 0.80: day_status = 'success'                                       │  │     │
│   │  │        ELSE IF rate >= 0.50: day_status = 'partial'                                  │  │     │
│   │  │        ELSE: day_status = 'failed'                                                   │  │     │
│   │  │                                                                                       │  │     │
│   │  │     d. Aplicar consecuencias:                                                        │  │     │
│   │  │        IF day_status = 'failed':                                                     │  │     │
│   │  │           health_points -= 1                                                         │  │     │
│   │  │           streak_days = 0                                                            │  │     │
│   │  │        ELSE IF day_status IN ('success', 'partial'):                                 │  │     │
│   │  │           streak_days += 1                                                           │  │     │
│   │  │                                                                                       │  │     │
│   │  │     e. Aplicar DECAY biológico:                                                      │  │     │
│   │  │        IF no cardio hoy: fat_lvl += 0.02                                             │  │     │
│   │  │        IF no fuerza hoy: muscle_lvl -= 0.02                                          │  │     │
│   │  │        IF no meditación hoy: aura_lvl -= 0.01                                        │  │     │
│   │  │                                                                                       │  │     │
│   │  │     f. Verificar muerte:                                                             │  │     │
│   │  │        IF health_points <= 0:                                                        │  │     │
│   │  │           ejecutar processAvatarDeath()                                              │  │     │
│   │  │           day_status = 'death'                                                       │  │     │
│   │  │                                                                                       │  │     │
│   │  │     g. Avanzar día:                                                                  │  │     │
│   │  │        current_day += 1                                                              │  │     │
│   │  │                                                                                       │  │     │
│   │  │     h. Crear log del día:                                                            │  │     │
│   │  │        INSERT INTO daily_logs (...)                                                  │  │     │
│   │  │                                                                                       │  │     │
│   │  │     i. Encolar generación de imagen:                                                 │  │     │
│   │  │        inngest.send('image.generate', { user_id, priority })                         │  │     │
│   │  │                                                                                       │  │     │
│   │  │     j. Enviar notificación:                                                          │  │     │
│   │  │        pushNotification(user, `Día evaluado: ${day_status}`)                         │  │     │
│   │  │                                                                                       │  │     │
│   │  │  3. Retornar resumen del batch                                                        │  │     │
│   │  │     { processed: 1500, success: 1200, partial: 200, failed: 100 }                    │  │     │
│   │  │                                                                                       │  │     │
│   │  └─────────────────────────────────────────────────────────────────────────────────────┘  │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 1.3.4 Flujo de Generación de Imagen

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              FLUJO: GENERACIÓN DE IMAGEN CON IA                                      │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│   TRIGGER: Judgement Night completa OR regeneración solicitada                                       │
│      │                                                                                               │
│      ▼                                                                                               │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    INNGEST QUEUE                                           │     │
│   │  Job: "image.generate" (prioridad: high/normal/low)                                        │     │
│   │  Retry: 3 intentos con backoff exponencial                                                 │     │
│   │  Timeout: 60 segundos                                                                      │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                        │                                                             │
│                                        ▼                                                             │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    IMAGE GENERATION SERVICE                                │     │
│   │  ┌─────────────────────────────────────────────────────────────────────────────────────┐  │     │
│   │  │  lib/services/image-generation.ts                                                    │  │     │
│   │  │                                                                                       │  │     │
│   │  │  1. OBTENER DATOS DEL USUARIO                                                         │  │     │
│   │  │     - avatar_states (vectores)                                                       │  │     │
│   │  │     - profiles (arquetipo base)                                                      │  │     │
│   │  │     - inventory (items equipados)                                                    │  │     │
│   │  │                                                                                       │  │     │
│   │  │  2. CONSTRUIR PROMPT                                                                  │  │     │
│   │  │                                                                                       │  │     │
│   │  │     a. Style Header (constante):                                                     │  │     │
│   │  │        "16-bit pixel art style, high quality, detailed, cinematic lighting"          │  │     │
│   │  │                                                                                       │  │     │
│   │  │     b. Identity Anchors (del arquetipo):                                             │  │     │
│   │  │        - Rastas: "brown dreadlocks, round face, warm brown skin"                     │  │     │
│   │  │        - Muscles: "bald, square jaw, thick neck, tan skin"                           │  │     │
│   │  │        - etc.                                                                        │  │     │
│   │  │                                                                                       │  │     │
│   │  │     c. Body State Tokens:                                                            │  │     │
│   │  │        - fat_lvl 1-3: "shredded, six-pack abs, lean"                                 │  │     │
│   │  │        - fat_lvl 4-7: "athletic build, defined muscles"                              │  │     │
│   │  │        - fat_lvl 8-10: "average build, slight gut"                                   │  │     │
│   │  │        - fat_lvl 11-13: "overweight, large belly"                                    │  │     │
│   │  │        + muscle_lvl proporcional                                                     │  │     │
│   │  │                                                                                       │  │     │
│   │  │     d. Face State Tokens (JAWLINE):                                                  │  │     │
│   │  │        - face_lvl 1-4: "round face, double chin"                                     │  │     │
│   │  │        - face_lvl 5-8: "defined jawline, visible cheekbones"                         │  │     │
│   │  │        - face_lvl 9-13: "sharp jawline, hollow cheeks, model-like"                   │  │     │
│   │  │                                                                                       │  │     │
│   │  │     e. Posture Tokens (AURA):                                                        │  │     │
│   │  │        - aura_lvl 1-4: "slouched posture, looking down"                              │  │     │
│   │  │        - aura_lvl 5-8: "straight posture, confident stance"                          │  │     │
│   │  │        - aura_lvl 9-13: "powerful imperial posture, commanding presence"             │  │     │
│   │  │                                                                                       │  │     │
│   │  │     f. Attire Tokens (WEALTH):                                                       │  │     │
│   │  │        - wealth_lvl 1-3: "torn dirty clothes, stained shirt"                         │  │     │
│   │  │        - wealth_lvl 4-6: "basic jeans, clean polo shirt"                             │  │     │
│   │  │        - wealth_lvl 7-9: "tailored suit, luxury watch"                               │  │     │
│   │  │        - wealth_lvl 10-13: "designer clothes, platinum accessories"                  │  │     │
│   │  │        + items equipados del inventario                                              │  │     │
│   │  │                                                                                       │  │     │
│   │  │     g. Environment Tokens (ENV):                                                     │  │     │
│   │  │        - env_lvl 1-2: "dark alley, rain, garbage bags"                               │  │     │
│   │  │        - env_lvl 3-4: "small cramped room, dim lighting"                             │  │     │
│   │  │        - env_lvl 5-6: "modern office, clean desk"                                    │  │     │
│   │  │        - env_lvl 7-8: "luxury penthouse, marble floors"                              │  │     │
│   │  │        - env_lvl 9-10: "private jet, throne room"                                    │  │     │
│   │  │                                                                                       │  │     │
│   │  │     h. Degradation Tokens (si health_points bajo):                                   │  │     │
│   │  │        - health 1-3: "wounded, bandages, tired expression"                           │  │     │
│   │  │                                                                                       │  │     │
│   │  │     PROMPT COMPLETO:                                                                 │  │     │
│   │  │     "[Style] + [Identity] + [Body] + [Face] + [Posture] + [Attire] + [Environment]" │  │     │
│   │  │                                                                                       │  │     │
│   │  │  3. LLAMAR A API DE IA                                                                │  │     │
│   │  │                                                                                       │  │     │
│   │  │     Primario: Gemini 2.5 Flash Image                                                  │  │     │
│   │  │     Fallback: Replicate (SDXL)                                                        │  │     │
│   │  │                                                                                       │  │     │
│   │  │     response = await replicate.run("stability-ai/sdxl", {                            │  │     │
│   │  │       input: {                                                                        │  │     │
│   │  │         prompt: fullPrompt,                                                          │  │     │
│   │  │         negative_prompt: "blur, low quality, distorted face",                         │  │     │
│   │  │         width: 1024,                                                                 │  │     │
│   │  │         height: 1024,                                                                │  │     │
│   │  │         num_outputs: 1                                                                │  │     │
│   │  │       }                                                                               │  │     │
│   │  │     })                                                                                │  │     │
│   │  │                                                                                       │  │     │
│   │  │  4. PROCESAR RESULTADO                                                                │  │     │
│   │  │                                                                                       │  │     │
│   │  │     a. Descargar imagen generada                                                     │  │     │
│   │  │     b. Subir a Cloudflare R2:                                                        │  │     │
│   │  │        r2.upload(`avatars/${user_id}/${day_number}.png`, image)                      │  │     │
│   │  │     c. Obtener URL pública                                                           │  │     │
│   │  │     d. Actualizar avatar_states:                                                     │  │     │
│   │  │        UPDATE avatar_states SET                                                      │  │     │
│   │  │          last_image_url = $1,                                                        │  │     │
│   │  │          last_image_generated_at = NOW()                                             │  │     │
│   │  │        WHERE user_id = $2                                                            │  │     │
│   │  │                                                                                       │  │     │
│   │  │  5. NOTIFICAR AL CLIENTE                                                              │  │     │
│   │  │     - Realtime update via Supabase                                                   │  │     │
│   │  │     - Push notification: "Tu nuevo avatar está listo"                                │  │     │
│   │  │                                                                                       │  │     │
│   │  └─────────────────────────────────────────────────────────────────────────────────────┘  │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 1.3.5 Flujo de Compra

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              FLUJO: COMPRAR ITEM EN TIENDA                                           │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│   USUARIO                                                                                            │
│      │                                                                                               │
│      │ 1. Click en "Comprar" (itemId: "rolex_gold", price: 5000 BTC)                                │
│      ▼                                                                                               │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    CLIENTE                                                   │     │
│   │  2. Mostrar modal de confirmación:                                                         │     │
│   │     - Item: Rolex Gold                                                                     │     │
│   │     - Precio: 5,000 BTC                                                                    │     │
│   │     - Balance actual: 12,000 BTC                                                           │     │
│   │     - Balance restante: 7,000 BTC                                                          │     │
│   │  3. Usuario confirma                                                                       │     │
│   │  4. Llamar: purchaseItem({ itemId, idempotencyKey })                                       │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                        │                                                             │
│                                        ▼                                                             │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    SERVER ACTION                                             │     │
│   │  store/purchaseItem.ts                                                                     │     │
│   │                                                                                            │     │
│   │  5. VALIDACIONES                                                                           │     │
│   │     a. ¿Usuario autenticado?                                                               │     │
│   │     b. ¿Item existe? → ITEM_NOT_FOUND                                                      │     │
│   │     c. ¿Usuario cumple nivel requerido? → LEVEL_TOO_LOW                                    │     │
│   │     d. ¿Usuario cumple gating de vectores? → VECTOR_REQUIREMENT_NOT_MET                    │     │
│   │     e. ¿Usuario tiene suficiente BTC? → INSUFFICIENT_FUNDS                                 │     │
│   │     f. ¿Idempotencia? (no compra duplicada)                                               │     │
│   │                                                                                            │     │
│   │  6. TRANSACCIÓN ATÓMICA                                                                    │     │
│   │     BEGIN;                                                                                 │     │
│   │                                                                                            │     │
│   │     a. Debitar BTC:                                                                        │     │
│   │        UPDATE wallets SET balance = balance - 5000                                         │     │
│   │        WHERE user_id = $1 AND balance >= 5000;                                             │     │
│   │        -- Si no se actualizó fila, rollback: INSUFFICIENT_FUNDS                           │     │
│   │                                                                                            │     │
│   │     b. Añadir a inventario:                                                                │     │
│   │        INSERT INTO inventory (user_id, item_id, equipped, purchased_at)                    │     │
│   │        VALUES ($1, $2, true, NOW());                                                        │     │
│   │                                                                                            │     │
│   │     c. Registrar transacción:                                                              │     │
│   │        INSERT INTO wallet_transactions (...)                                               │     │
│   │                                                                                            │     │
│   │     COMMIT;                                                                                │     │
│   │                                                                                            │     │
│   │  7. RESPUESTA                                                                              │     │
│   │     {                                                                                      │     │
│   │       success: true,                                                                       │     │
│   │       data: {                                                                              │     │
│   │         item: { id: "rolex_gold", name: "Rolex Gold", ... },                               │     │
│   │         newBalance: 7000,                                                                  │     │
│   │         equipped: true                                                                     │     │
│   │       }                                                                                    │     │
│   │     }                                                                                      │     │
│   │                                                                                            │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                        │                                                             │
│                                        ▼                                                             │
│   ┌───────────────────────────────────────────────────────────────────────────────────────────┐     │
│   │                                    CLIENTE (continuación)                                  │     │
│   │  8. Mostrar animación de compra exitosa                                                    │     │
│   │  9. Actualizar balance en UI                                                               │     │
│   │  10. Actualizar inventario                                                                 │     │
│   │  11. Mostrar: "Rolex Gold equipado. Aparecerá en tu próxima imagen."                       │     │
│   │                                                                                            │     │
│   └───────────────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 1.4 Comunicación entre Servicios

### 1.4.1 Diagrama de Secuencia: Cliente ↔ Server Actions

```
┌──────────┐          ┌──────────────┐          ┌──────────────┐          ┌──────────────┐
│  Client  │          │ Server Action│          │   Core Lib   │          │  Supabase    │
└────┬─────┘          └──────┬───────┘          └──────┬───────┘          └──────┬───────┘
     │                       │                         │                         │
     │ 1. invoke action()    │                         │                         │
     │──────────────────────>│                         │                         │
     │                       │                         │                         │
     │                       │ 2. validate input       │                         │
     │                       │────────────────────────>│                         │
     │                       │                         │                         │
     │                       │<────────────────────────│                         │
     │                       │                         │                         │
     │                       │ 3. business logic       │                         │
     │                       │ (calc rewards, etc)     │                         │
     │                       │────────────────────────>│                         │
     │                       │                         │                         │
     │                       │<────────────────────────│                         │
     │                       │                         │                         │
     │                       │ 4. db query             │                         │
     │                       │──────────────────────────────────────────────────>│
     │                       │                         │                         │
     │                       │<──────────────────────────────────────────────────│
     │                       │                         │                         │
     │<──────────────────────│ 5. return result        │                         │
     │                       │                         │                         │
     │ 6. update UI          │                         │                         │
     │────┐                  │                         │                         │
     │    │                  │                         │                         │
     │<───┘                  │                         │                         │
     │                       │                         │                         │
```

### 1.4.2 Diagrama: Server ↔ Supabase

```yaml
Conexión: Server ↔ Supabase
Protocolo: PostgreSQL wire protocol (via supabase-js)
Autenticación: 
  - Client-side: Anon key (RLS enabled)
  - Server-side: Service role key (bypass RLS)

Operaciones:
  - Query: SELECT con RLS automático
  - Insert: INSERT con validaciones
  - Update: UPDATE con optimistic locking
  - Delete: Soft deletes (status = 'deleted')
  - Realtime: WebSocket subscriptions

Connection Pooling:
  - Max connections: 100 (Supabase default)
  - PgBouncer: Transaction mode
  - Retry logic: 3 intentos con backoff
```

### 1.4.3 Diagrama: Webhooks

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              ARQUITECTURA DE WEBHOOKS                                                │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  STRIPE WEBHOOK                                                                                      │
│  ───────────────                                                                                     │
│                                                                                                      │
│  Stripe ──POST /api/webhooks/stripe──> Next.js API Route                                             │
│                                              │                                                       │
│                                              ▼                                                       │
│                                     ┌─────────────────┐                                              │
│                                     │ 1. Verify sig   │  (stripe.webhooks.constructEvent)           │
│                                     │ 2. Parse event  │                                              │
│                                     └─────────────────┘                                              │
│                                              │                                                       │
│                                              ▼                                                       │
│                                     ┌─────────────────┐                                              │
│                                     │ Event Handler   │                                              │
│                                     ├─────────────────┤                                              │
│                                     │ checkout.       │ ──> Crear/activar suscripción              │
│                                     │ session.        │                                              │
│                                     │ completed       │                                              │
│                                     ├─────────────────┤                                              │
│                                     │ invoice.        │ ──> Registrar pago, extender access        │
│                                     │ paid            │                                              │
│                                     ├─────────────────┤                                              │
│                                     │ invoice.        │ ──> Notificar usuario, iniciar limbo       │
│                                     │ payment_failed  │                                              │
│                                     ├─────────────────┤                                              │
│                                     │ customer.       │ ──> Desactivar acceso                      │
│                                     │ subscription.   │                                              │
│                                     │ deleted         │                                              │
│                                     └─────────────────┘                                              │
│                                                                                                      │
│  REPLICATE WEBHOOK                                                                                   │
│  ────────────────                                                                                    │
│                                                                                                      │
│  Replicate ──POST /api/webhooks/replicate──> Next.js API Route                                       │
│                                                     │                                                │
│                                                     ▼                                                │
│                                            ┌─────────────────┐                                       │
│                                            │ 1. Verify token │                                       │
│                                            │ 2. Get output   │                                       │
│                                            └─────────────────┘                                       │
│                                                     │                                                │
│                                                     ▼                                                │
│                                            ┌─────────────────┐                                       │
│                                            │ Upload to R2    │                                       │
│                                            │ Update DB       │                                       │
│                                            │ Notify user     │                                       │
│                                            └─────────────────┘                                       │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. STACK TECNOLÓGICO DETALLADO

## 2.1 Frontend

### 2.1.1 Framework y Lenguaje

```yaml
Framework:
  Nombre: Next.js
  Versión: ^14.2.0
  Justificación: 
    - App Router para Server Components
    - Server Actions para mutations
    - Edge Runtime para API routes
    - Optimización de imágenes integrada
    - SEO-friendly con SSR/SSG

Lenguaje:
  Nombre: TypeScript
  Versión: ^5.4.0
  Configuración:
    - strict: true
    - noImplicitAny: true
    - strictNullChecks: true
    - noUncheckedIndexedAccess: true

Configuración tsconfig.json:
  ```json
  {
    "compilerOptions": {
      "target": "ES2022",
      "lib": ["dom", "dom.iterable", "ES2022"],
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "incremental": true,
      "plugins": [{ "name": "next" }],
      "paths": {
        "@/*": ["./src/*"],
        "@/components/*": ["./src/components/*"],
        "@/lib/*": ["./src/lib/*"],
        "@/types/*": ["./src/types/*"]
      }
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    "exclude": ["node_modules"]
  }
  ```
```

### 2.1.2 Estilos y UI

```yaml
Framework CSS:
  Nombre: Tailwind CSS
  Versión: ^3.4.0
  Configuración:
    - Dark mode: class
    - Custom colors: definidos en tailwind.config.ts
    - Plugins: typography, forms, aspect-ratio

UI Components:
  Base: shadcn/ui
  Versión: latest
  Componentes utilizados:
    - Button
    - Card
    - Dialog
    - Dropdown Menu
    - Form
    - Input
    - Label
    - Progress
    - Select
    - Skeleton
    - Slider
    - Switch
    - Tabs
    - Toast
    - Tooltip

Animaciones:
  Librería: Framer Motion
  Versión: ^11.0.0
  Uso:
    - Transiciones de página
    - Animaciones de entrada/salida
    - Gestures (drag, tap)
    - Layout animations
    - Stagger effects

Iconos:
  Librería: Lucide React
  Versión: ^0.300.0
  Alternativa: Tabler Icons (para iconos más específicos)
```

### 2.1.3 Estado y Data Fetching

```yaml
Estado Global:
  Librería: Zustand
  Versión: ^4.5.0
  Middleware:
    - persist: Persistir estado en localStorage
    - immer: Mutaciones inmutables
    - devtools: Redux DevTools integration

Data Fetching:
  Librería: TanStack Query (React Query)
  Versión: ^5.0.0
  Configuración:
    - staleTime: 5 minutos
    - cacheTime: 10 minutos
    - retry: 3
    - refetchOnWindowFocus: false

Validación:
  Librería: Zod
  Versión: ^3.22.0
  Uso:
    - Validación de formularios
    - Validación de Server Actions
    - Tipos inferidos de schemas

Formularios:
  Librería: React Hook Form
  Versión: ^7.49.0
  Integración: Con Zod para validación
```

### 2.1.4 Visualización de Datos

```yaml
Charts:
  Librería: Recharts
  Versión: ^2.10.0
  Gráficos utilizados:
    - Radar Chart (vectores del avatar)
    - Line Chart (progreso histórico)
    - Bar Chart (estadísticas)

Calendario:
  Librería: @mantine/dates (o similar)
  Uso: Time Matrix de 100 días
```

## 2.2 Backend

### 2.2.1 Base de Datos y Autenticación

```yaml
Plataforma: Supabase
URL: https://supabase.com

PostgreSQL:
  Versión: 15
  Extensiones:
    - pg_cron (jobs programados)
    - pg_stat_statements (query performance)
    - uuid-ossp (UUID generation)

Autenticación:
  Proveedor: Supabase Auth
  Métodos:
    - Email/Password
    - Google OAuth
    - Phone OTP (SMS)
  Features:
    - JWT tokens
    - Refresh tokens
    - Email confirmation
    - Password reset

Realtime:
  Subscriptions: PostgreSQL CDC (Change Data Capture)
  Uso: Actualizaciones de avatar, notificaciones

Storage:
  Buckets:
    - avatars: Imágenes generadas de usuarios
    - items: Imágenes de items de tienda
    - documents: Libros PDF (acceso controlado)

Row Level Security:
  Habilitado: Sí (en todas las tablas de usuario)
  Políticas: Granulares por user_id
```

### 2.2.2 Queue y Jobs

```yaml
Plataforma: Inngest
URL: https://inngest.com

Jobs Definidos:
  - judgement-night.process:
      Schedule: Cron (medianoche por timezone)
      Purpose: Evaluación diaria de usuarios
      
  - image.generate:
      Trigger: Evento (post-judgement)
      Purpose: Generar imagen de avatar
      Retry: 3 intentos con backoff
      
  - notification.send:
      Trigger: Evento (varios)
      Purpose: Enviar push notifications
      
  - user.reminder:
      Schedule: Cron (varios horarios)
      Purpose: Recordatorios de tareas

Features:
  - Delayed jobs
  - Step functions (workflows complejos)
  - Idempotencia automática
  - Dashboard de monitoreo
```

## 2.3 IA/ML

```yaml
Generación de Imágenes - Primario:
  Proveedor: Google AI (Gemini)
  Modelo: gemini-2.5-flash-image-preview
  API: REST
  Pricing: Pay-per-use
  Features:
    - Consistencia de personaje
    - Alta calidad de imagen
    - Buen manejo de prompts complejos

Generación de Imágenes - Fallback:
  Proveedor: Replicate
  Modelo: stability-ai/sdxl
  Alternativas:
    - lucataco/realistic-vision-v5.1
    - batouresearch/high-resolution-controlnet-tile

Voice (Futuro):
  Proveedor: ElevenLabs
  Uso: Crear hipnosis personalizada
  Endpoint: /text-to-speech

Moderación de Contenido:
  Proveedor: OpenAI (o similar)
  Uso: Verificar imágenes generadas
  Endpoint: /moderations
```

## 2.4 Pagos

```yaml
Plataforma: Stripe
URL: https://stripe.com

Productos:
  - MetaMen100 Monthly:
      Price: $19.90 USD
      Interval: month
      
  - MetaMen100 Annual:
      Price: $140.00 USD
      Interval: year
      
  - BTC Packs (Add-ons):
      - Starter: 1,000 BTC = $1.99
      - Advanced: 5,000 BTC = $7.99
      - Elite: 15,000 BTC = $19.99

Features:
  - Checkout Session (hosted)
  - Customer Portal (self-service)
  - Subscription management
  - Webhooks para eventos
  - Idempotency keys

Webhooks manejados:
  - checkout.session.completed
  - invoice.paid
  - invoice.payment_failed
  - customer.subscription.deleted
```

## 2.5 Infraestructura

```yaml
Hosting:
  Plataforma: Vercel
  Plan: Pro (para producción)
  Features:
    - Edge Network CDN
    - Analytics integrado
    - Preview deployments
    - Serverless Functions

Storage de Imágenes:
  Plataforma: Cloudflare R2
  Compatible: S3 API
  Pricing: $0.015/GB/month
  CDN: Integrado con Cloudflare

Email:
  Transaccional: Resend
  Marketing: (Futuro) Mailchimp/SendGrid

Monitoreo:
  Errores: Sentry
  Analytics: PostHog (o Mixpanel)
  Uptime: Better Uptime (o UptimeRobot)

CI/CD:
  Plataforma: GitHub Actions
  Workflows:
    - Lint & Type Check
    - Unit Tests
    - E2E Tests
    - Deploy Preview (PRs)
    - Deploy Production (main)
```

### 2.5.1 Resumen de Dependencias

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.4.0",
    "@supabase/supabase-js": "^2.39.0",
    "@supabase/ssr": "^0.0.10",
    "zustand": "^4.5.0",
    "@tanstack/react-query": "^5.0.0",
    "framer-motion": "^11.0.0",
    "tailwindcss": "^3.4.0",
    "zod": "^3.22.0",
    "react-hook-form": "^7.49.0",
    "@hookform/resolvers": "^3.3.0",
    "recharts": "^2.10.0",
    "lucide-react": "^0.300.0",
    "stripe": "^14.0.0",
    "inngest": "^3.0.0",
    "@aws-sdk/client-s3": "^3.0.0",
    "resend": "^2.0.0",
    "@sentry/nextjs": "^7.0.0",
    "posthog-js": "^1.0.0",
    "dayjs": "^1.11.0",
    "uuid": "^9.0.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "playwright": "^1.40.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.0.0"
  }
}
```

---

# 3. ESTRUCTURA DE CARPETAS DEFINITIVA

```
metamen100/
│
├── 📁 .github/
│   └── workflows/
│       ├── lint.yml
│       ├── test.yml
│       └── deploy.yml
│
├── 📁 .husky/
│   ├── pre-commit
│   └── pre-push
│
├── 📁 docs/
│   ├── 01_PRD.md
│   ├── 02_ADRs.md
│   ├── 03_TECH_SPEC.md          <-- ESTE DOCUMENTO
│   ├── 04_DATA_MODEL.md
│   ├── 05_GDD.md
│   └── ...
│
├── 📁 public/
│   ├── images/
│   │   ├── logo/
│   │   ├── icons/
│   │   └── backgrounds/
│   ├── fonts/
│   └── favicon.ico
│
├── 📁 src/
│   │
│   ├── 📁 app/                    # Next.js App Router
│   │   │
│   │   ├── 📁 (auth)/             # Grupo: Autenticación
│   │   │   ├── layout.tsx
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── callback/
│   │   │       └── route.ts
│   │   │
│   │   ├── 📁 (marketing)/        # Grupo: Marketing/Landing
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx           # Landing page
│   │   │
│   │   ├── 📁 (dashboard)/        # Grupo: Dashboard (protegido)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx           # Dashboard home
│   │   │   │
│   │   │   ├── 📁 tasks/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── 📁 store/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── 📁 inventory/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── 📁 analytics/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── 📁 profile/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── settings/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── billing/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   └── 📁 tools/          # Herramientas integradas
│   │   │       ├── layout.tsx
│   │   │       ├── library/
│   │   │       │   └── page.tsx
│   │   │       ├── gym/
│   │   │       │   └── page.tsx
│   │   │       ├── meditation/
│   │   │       │   └── page.tsx
│   │   │       ├── journal/
│   │   │       │   └── page.tsx
│   │   │       ├── kegel/
│   │   │       │   └── page.tsx
│   │   │       ├── facial/
│   │   │       │   └── page.tsx
│   │   │       ├── hypnosis/
│   │   │       │   └── page.tsx
│   │   │       ├── mobility/
│   │   │       │   └── page.tsx
│   │   │       └── focus/
│   │   │           └── page.tsx
│   │   │
│   │   ├── 📁 api/                # API Routes
│   │   │   └── webhooks/
│   │   │       ├── stripe/
│   │   │       │   └── route.ts
│   │   │       └── replicate/
│   │   │           └── route.ts
│   │   │
│   │   ├── layout.tsx             # Root layout
│   │   ├── loading.tsx            # Global loading
│   │   ├── error.tsx              # Global error
│   │   └── not-found.tsx          # 404 page
│   │
│   ├── 📁 components/
│   │   │
│   │   ├── 📁 ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   └── ...
│   │   │
│   │   ├── 📁 avatar/
│   │   │   ├── AvatarDisplay.tsx
│   │   │   ├── AvatarViewer.tsx
│   │   │   └── AvatarHistory.tsx
│   │   │
│   │   ├── 📁 dashboard/
│   │   │   ├── HealthBar.tsx
│   │   │   ├── LevelBadge.tsx
│   │   │   ├── StreakCounter.tsx
│   │   │   ├── TimeMatrix.tsx
│   │   │   ├── VectorRadar.tsx
│   │   │   └── WalletBalance.tsx
│   │   │
│   │   ├── 📁 tasks/
│   │   │   ├── TaskList.tsx
│   │   │   ├── TaskCard.tsx
│   │   │   ├── TaskCheckButton.tsx
│   │   │   └── TaskProgress.tsx
│   │   │
│   │   ├── 📁 store/
│   │   │   ├── StoreGrid.tsx
│   │   │   ├── ItemCard.tsx
│   │   │   ├── ItemDetail.tsx
│   │   │   └── PurchaseModal.tsx
│   │   │
│   │   ├── 📁 layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   └── 📁 providers/
│   │       ├── QueryProvider.tsx
│   │       ├── ThemeProvider.tsx
│   │       └── AuthProvider.tsx
│   │
│   ├── 📁 hooks/                  # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useAvatar.ts
│   │   ├── useTasks.ts
│   │   ├── useWallet.ts
│   │   ├── useRealtime.ts
│   │   └── useNotification.ts
│   │
│   ├── 📁 lib/                    # Librerías y utilidades
│   │   │
│   │   ├── 📁 core/               # Lógica de negocio pura
│   │   │   ├── calculations/
│   │   │   │   ├── vectors.ts     # Cálculo de vectores
│   │   │   │   ├── rewards.ts     # Cálculo de recompensas
│   │   │   │   └── levels.ts      # Cálculo de niveles
│   │   │   │
│   │   │   ├── judgement/
│   │   │   │   ├── evaluateDay.ts
│   │   │   │   ├── applyDecay.ts
│   │   │   │   └── processDeath.ts
│   │   │   │
│   │   │   └── __tests__/         # Tests unitarios
│   │   │       ├── vectors.test.ts
│   │   │       ├── rewards.test.ts
│   │   │       └── judgement.test.ts
│   │   │
│   │   ├── 📁 server/             # Server-side utilities
│   │   │   ├── actions/           # Server Actions
│   │   │   │   ├── auth/
│   │   │   │   ├── tasks/
│   │   │   │   ├── store/
│   │   │   │   ├── wallet/
│   │   │   │   └── profile/
│   │   │   │
│   │   │   ├── db/                # Database client
│   │   │   │   ├── index.ts       # Supabase client
│   │   │   │   ├── schema.ts      # Database types
│   │   │   │   └── queries/       # Complex queries
│   │   │   │
│   │   │   └── services/          # External services
│   │   │       ├── image-generation.ts
│   │   │       ├── stripe.ts
│   │   │       ├── inngest.ts
│   │   │       └── email.ts
│   │   │
│   │   ├── 📁 utils/              # Utilidades
│   │   │   ├── cn.ts              # className merger
│   │   │   ├── format.ts          # Formateo de números/fechas
│   │   │   ├── validation.ts      # Validaciones
│   │   │   └── constants.ts       # Constantes
│   │   │
│   │   └── config.ts              # Configuración global
│   │
│   ├── 📁 types/                  # TypeScript types
│   │   ├── database.ts            # Tipos de Supabase
│   │   ├── api.ts                 # Tipos de API
│   │   ├── domain.ts              # Tipos de dominio
│   │   └── index.ts
│   │
│   ├── 📁 stores/                 # Zustand stores
│   │   ├── avatarStore.ts
│   │   ├── taskStore.ts
│   │   ├── walletStore.ts
│   │   └── uiStore.ts
│   │
│   └── middleware.ts              # Next.js middleware (auth)
│
├── 📁 supabase/
│   ├── 📁 migrations/             # Database migrations
│   │   ├── 00001_initial.sql
│   │   └── ...
│   ├── 📁 functions/              # Edge Functions (si aplica)
│   ├── 📁 triggers/               # SQL triggers
│   ├── 📁 policies/               # RLS policies
│   └── seed.sql                   # Seed data
│
├── 📁 tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│       └── playwright/
│
├── .env.example
├── .env.local                     # No commit
├── .eslintrc.js
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
└── package.json
```

### 3.1 Descripción de Carpetas Clave

| Carpeta | Propósito | Contenido Típico |
|---------|-----------|------------------|
| `app/` | Next.js App Router | Páginas, layouts, API routes |
| `components/ui/` | shadcn/ui | Componentes base reutilizables |
| `components/avatar/` | Domain-specific | Componentes del avatar |
| `lib/core/` | Business logic | Funciones puras, cálculos |
| `lib/server/actions/` | Server Actions | Mutaciones de datos |
| `lib/server/db/` | Database | Cliente Supabase, queries |
| `lib/server/services/` | Integrations | APIs externas (Stripe, etc) |
| `hooks/` | React hooks | Custom hooks |
| `stores/` | State management | Zustand stores |
| `types/` | TypeScript | Definiciones de tipos |
| `supabase/migrations/` | DB schema | Migraciones SQL |

---



# 4. CONTRATOS DE API

## 4.1 Server Actions

### 4.1.1 Formato Estándar

Todas las Server Actions siguen el formato:

```typescript
'use server';

import { z } from 'zod';
import { createClient } from '@/lib/server/db';
import { ActionResponse, ErrorCode } from '@/types/api';

// Schema de validación
const inputSchema = z.object({
  // definición
});

type Input = z.infer<typeof inputSchema>;

// Respuesta exitosa
type SuccessData = {
  // definición
};

export async function actionName(input: Input): Promise<ActionResponse<SuccessData>> {
  try {
    // 1. Validar input
    const validated = inputSchema.parse(input);
    
    // 2. Verificar autenticación
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return { success: false, error: ErrorCode.UNAUTHORIZED };
    }
    
    // 3. Ejecutar lógica de negocio
    const result = await executeBusinessLogic(validated, user.id);
    
    // 4. Retornar éxito
    return { success: true, data: result };
    
  } catch (error) {
    // 5. Manejar errores
    if (error instanceof z.ZodError) {
      return { success: false, error: ErrorCode.VALIDATION_ERROR, message: error.message };
    }
    
    console.error('actionName error:', error);
    return { success: false, error: ErrorCode.INTERNAL_ERROR };
  }
}
```

### 4.1.2 Auth Actions

#### `auth/register`

```typescript
// Input
interface RegisterInput {
  email: string;           // email válido
  password: string;        // min 8 chars, 1 mayúscula, 1 minúscula, 1 número
  passwordConfirmation: string; // debe coincidir con password
  termsAccepted: boolean;  // debe ser true
  privacyAccepted: boolean; // debe ser true
}

// Zod Schema
const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string()
    .min(8, 'Mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Al menos una mayúscula')
    .regex(/[a-z]/, 'Al menos una minúscula')
    .regex(/[0-9]/, 'Al menos un número'),
  passwordConfirmation: z.string(),
  termsAccepted: z.boolean().refine(v => v, 'Debes aceptar los términos'),
  privacyAccepted: z.boolean().refine(v => v, 'Debes aceptar la privacidad'),
}).refine(data => data.password === data.passwordConfirmation, {
  message: 'Las contraseñas no coinciden',
  path: ['passwordConfirmation'],
});

// Output Success
interface RegisterSuccess {
  userId: string;
  email: string;
  nickname: string;  // METAMEN-XXXX
}

// Output Error
enum RegisterError {
  EMAIL_EXISTS = 'EMAIL_EXISTS',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
}

// Ejemplo de uso
const result = await register({
  email: 'usuario@ejemplo.com',
  password: 'Password123',
  passwordConfirmation: 'Password123',
  termsAccepted: true,
  privacyAccepted: true,
});

if (result.success) {
  // result.data = { userId, email, nickname }
  router.push('/onboarding');
} else {
  // result.error, result.message
  toast.error(result.message);
}
```

#### `auth/login`

```typescript
// Input
interface LoginInput {
  email: string;
  password: string;
  rememberMe?: boolean;  // default: false
}

// Zod Schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Contraseña requerida'),
  rememberMe: z.boolean().optional(),
});

// Output Success
interface LoginSuccess {
  userId: string;
  email: string;
  nickname: string;
  subscriptionStatus: 'trial' | 'active' | 'limbo';
  onboardingCompleted: boolean;
}

// Output Error
enum LoginError {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED',
  ACCOUNT_SUSPENDED = 'ACCOUNT_SUSPENDED',
  TOO_MANY_ATTEMPTS = 'TOO_MANY_ATTEMPTS',
}
```

#### `auth/logout`

```typescript
// Input: void

// Output Success
interface LogoutSuccess {
  message: 'Sesión cerrada exitosamente';
}

// Output Error
enum LogoutError {
  UNAUTHORIZED = 'UNAUTHORIZED',
}
```

#### `auth/verifyPhone`

```typescript
// Input
interface VerifyPhoneInput {
  phoneNumber: string;  // formato E.164 (+521234567890)
  code?: string;        // opcional, para verificación
}

// Output Success - Enviar código
interface SendCodeSuccess {
  message: 'Código enviado';
  expiresIn: 180;  // segundos
}

// Output Success - Verificar código
interface VerifyCodeSuccess {
  verified: true;
}

// Output Error
enum VerifyPhoneError {
  INVALID_PHONE = 'INVALID_PHONE',
  PHONE_EXISTS = 'PHONE_EXISTS',  // Ya registrado a otra cuenta
  INVALID_CODE = 'INVALID_CODE',
  CODE_EXPIRED = 'CODE_EXPIRED',
  TOO_MANY_ATTEMPTS = 'TOO_MANY_ATTEMPTS',
}
```

### 4.1.3 Task Actions

#### `tasks/getTodayTasks`

```typescript
// Input: void (usa sesión del usuario)

// Output Success
interface GetTodayTasksSuccess {
  dayNumber: number;  // 1-100
  date: string;       // ISO date
  tasks: Task[];
  completionRate: number;  // 0-1
}

interface Task {
  id: string;
  name: string;
  description: string;
  category: 'mental' | 'cara' | 'productividad' | 'fisico';
  vectorEffects: VectorEffect[];
  baseReward: number;  // BTC
  estimatedDuration: number;  // minutos
  status: 'pending' | 'completed' | 'failed';
  completedAt?: string;
  toolUrl?: string;  // URL de herramienta asociada
}

interface VectorEffect {
  vector: 'aura' | 'face' | 'wealth' | 'muscle' | 'fat';
  modifier: number;
}

// Ejemplo de respuesta
{
  dayNumber: 34,
  date: '2026-02-15',
  tasks: [
    {
      id: 'task_med_001',
      name: 'Meditación de la Mañana',
      description: '20 minutos de meditación mindfulness',
      category: 'mental',
      vectorEffects: [{ vector: 'aura', modifier: 0.05 }],
      baseReward: 15,
      estimatedDuration: 20,
      status: 'pending',
      toolUrl: '/dashboard/tools/meditation'
    },
    // ... más tareas
  ],
  completionRate: 0.6  // 60% completado
}
```

#### `tasks/completeTask`

```typescript
// Input
interface CompleteTaskInput {
  taskId: string;
  idempotencyKey: string;  // UUID para prevenir duplicados
  duration?: number;         // minutos reales (opcional)
  notes?: string;           // notas del usuario (opcional)
}

// Zod Schema
const completeTaskSchema = z.object({
  taskId: z.string().uuid(),
  idempotencyKey: z.string().uuid(),
  duration: z.number().int().positive().optional(),
  notes: z.string().max(500).optional(),
});

// Output Success
interface CompleteTaskSuccess {
  taskId: string;
  status: 'completed';
  btcEarned: number;
  newBalance: number;
  vectorChanges: VectorChange[];
  streakMultiplier: number;
  completedAt: string;
}

interface VectorChange {
  vector: string;
  previousValue: number;
  newValue: number;
  change: number;
}

// Output Error
enum CompleteTaskError {
  TASK_NOT_FOUND = 'TASK_NOT_FOUND',
  TASK_ALREADY_COMPLETED = 'TASK_ALREADY_COMPLETED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  OUTSIDE_TIME_WINDOW = 'OUTSIDE_TIME_WINDOW',
  INSUFFICIENT_TIME = 'INSUFFICIENT_TIME',  // No cumplió duración mínima
}
```

#### `tasks/createCustomTask`

```typescript
// Input
interface CreateCustomTaskInput {
  name: string;
  description: string;
  category: 'mental' | 'cara' | 'productividad' | 'fisico';
  frequency: 'daily' | 'weekly' | 'custom';
  customDays?: number[];  // 0-6 (domingo-sábado) si frequency='custom'
}

// Zod Schema
const createCustomTaskSchema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().max(500),
  category: z.enum(['mental', 'cara', 'productividad', 'fisico']),
  frequency: z.enum(['daily', 'weekly', 'custom']),
  customDays: z.array(z.number().int().min(0).max(6)).optional(),
});

// Output Success
interface CreateCustomTaskSuccess {
  taskId: string;
  name: string;
  baseReward: number;  // Siempre 50% de tarea normal
  message: 'Tarea personal creada. Recordatorio: Solo puedes tener 2 activas.';
}

// Output Error
enum CreateCustomTaskError {
  MAX_CUSTOM_TASKS_REACHED = 'MAX_CUSTOM_TASKS_REACHED',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
}
```

### 4.1.4 Store Actions

#### `store/getItems`

```typescript
// Input
interface GetItemsInput {
  category?: 'armor' | 'accessories' | 'vehicles' | 'properties' | 'companions' | 'pets' | 'powerups';
  minLevel?: number;
  maxPrice?: number;
  onlyAvailable?: boolean;  // Solo items que el usuario puede comprar
  page?: number;            // default: 1
  limit?: number;           // default: 20, max: 100
}

// Output Success
interface GetItemsSuccess {
  items: StoreItem[];
  total: number;
  page: number;
  hasMore: boolean;
  filters: {
    category?: string;
    minLevel?: number;
    maxPrice?: number;
  };
}

interface StoreItem {
  id: string;
  name: string;
  description: string;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  price: number;
  levelRequired: number;
  vectorRequirements?: VectorRequirement[];
  imageUrl: string;
  isAvailable: boolean;  // Considerando nivel y vectores del usuario
  isNew?: boolean;
}

interface VectorRequirement {
  vector: string;
  minValue?: number;
  maxValue?: number;
}
```

#### `store/purchaseItem`

```typescript
// Input
interface PurchaseItemInput {
  itemId: string;
  idempotencyKey: string;
}

// Zod Schema
const purchaseItemSchema = z.object({
  itemId: z.string().uuid(),
  idempotencyKey: z.string().uuid(),
});

// Output Success
interface PurchaseItemSuccess {
  item: StoreItem;
  price: number;
  newBalance: number;
  equipped: boolean;
  inventoryId: string;
}

// Output Error
enum PurchaseItemError {
  ITEM_NOT_FOUND = 'ITEM_NOT_FOUND',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  LEVEL_TOO_LOW = 'LEVEL_TOO_LOW',
  VECTOR_REQUIREMENT_NOT_MET = 'VECTOR_REQUIREMENT_NOT_MET',
  ITEM_ALREADY_OWNED = 'ITEM_ALREADY_OWNED',
  IDEMPOTENCY_ERROR = 'IDEMPOTENCY_ERROR',
}
```

#### `store/getInventory`

```typescript
// Input: void

// Output Success
interface GetInventorySuccess {
  items: InventoryItem[];
  totalValue: number;
  itemsByCategory: Record<string, number>;
}

interface InventoryItem {
  inventoryId: string;
  item: StoreItem;
  purchasedAt: string;
  equipped: boolean;
  locked?: boolean;  // Bloqueado por nivel tras muerte
  lockedReason?: string;  // "Requiere Nivel 8"
}
```

#### `inventory/equipItem`

```typescript
// Input
interface EquipItemInput {
  inventoryId: string;
  equip: boolean;  // true = equipar, false = desequipar
}

// Output Success
interface EquipItemSuccess {
  inventoryId: string;
  equipped: boolean;
  affectedSlots: string[];  // Slots que cambiaron
}

// Output Error
enum EquipItemError {
  ITEM_NOT_FOUND = 'ITEM_NOT_FOUND',
  ITEM_LOCKED = 'ITEM_LOCKED',
  SLOT_CONFLICT = 'SLOT_CONFLICT',  // Ya tiene item en ese slot
}
```

### 4.1.5 Wallet Actions

#### `wallet/getBalance`

```typescript
// Input: void

// Output Success
interface GetBalanceSuccess {
  balance: number;
  lifetimeEarned: number;
  lifetimeSpent: number;
}
```

#### `wallet/getTransactionHistory`

```typescript
// Input
interface GetTransactionHistoryInput {
  page?: number;
  limit?: number;
  type?: 'earning' | 'spending' | 'all';
  startDate?: string;
  endDate?: string;
}

// Output Success
interface GetTransactionHistorySuccess {
  transactions: Transaction[];
  total: number;
  page: number;
  hasMore: boolean;
}

interface Transaction {
  id: string;
  type: 'earning' | 'spending';
  amount: number;
  balanceAfter: number;
  description: string;
  metadata?: {
    taskId?: string;
    taskName?: string;
    itemId?: string;
    itemName?: string;
  };
  createdAt: string;
}
```

### 4.1.6 Profile Actions

#### `profile/getProfile`

```typescript
// Input: void

// Output Success
interface GetProfileSuccess {
  userId: string;
  nickname: string;
  email: string;
  phoneVerified: boolean;
  timezone: string;
  baseAvatarId: number;  // 1-6 (arquetipo)
  onboardingCompleted: boolean;
  createdAt: string;
  stats: {
    currentDay: number;
    currentLevel: number;
    streakDays: number;
    maxStreak: number;
    daysCompleted: number;
    daysFailed: number;
  };
}
```

#### `profile/updateProfile`

```typescript
// Input
interface UpdateProfileInput {
  timezone?: string;
  notifications?: NotificationSettings;
}

interface NotificationSettings {
  morningReminder: boolean;
  morningTime: string;  // HH:mm
  taskReminders: boolean;
  healthAlerts: boolean;
  judgementAlert: boolean;
}

// Output Success
interface UpdateProfileSuccess {
  message: 'Perfil actualizado';
  updatedFields: string[];
}
```

#### `profile/getAvatarState`

```typescript
// Input: void

// Output Success
interface GetAvatarStateSuccess {
  vectors: {
    aura: number;    // 1.00 - 13.00
    face: number;    // 1.00 - 13.00
    wealth: number;  // 1.00 - 13.00
    muscle: number;  // 1.00 - 13.00
    fat: number;     // 13.00 - 1.00 (inverso)
    env: number;     // 1 - 13
  };
  health: {
    current: number;  // 0-10
    max: number;      // 10-13
  };
  lastImageUrl: string | null;
  lastImageGeneratedAt: string | null;
  isGenerating: boolean;
}
```

### 4.1.7 Payment Actions

#### `payments/createCheckout`

```typescript
// Input
interface CreateCheckoutInput {
  plan: 'monthly' | 'annual';
  successUrl: string;
  cancelUrl: string;
}

// Output Success
interface CreateCheckoutSuccess {
  checkoutUrl: string;  // URL de Stripe Checkout
  sessionId: string;
}

// Output Error
enum CreateCheckoutError {
  ALREADY_SUBSCRIBED = 'ALREADY_SUBSCRIBED',
  INVALID_PLAN = 'INVALID_PLAN',
}
```

#### `payments/getSubscriptionStatus`

```typescript
// Input: void

// Output Success
interface GetSubscriptionStatusSuccess {
  status: 'trial' | 'active' | 'limbo' | 'cancelled' | 'none';
  plan?: 'monthly' | 'annual';
  currentPeriodStart?: string;
  currentPeriodEnd?: string;
  trialEndsAt?: string;
  daysRemaining?: number;
  cancelAtPeriodEnd?: boolean;
}
```

## 4.2 API Routes (Webhooks)

### 4.2.1 Stripe Webhook

```typescript
// POST /api/webhooks/stripe

// Headers requeridos:
// - stripe-signature: Firma de Stripe

// Body (Stripe event):
interface StripeWebhookBody {
  id: string;
  type: StripeEventType;
  data: {
    object: StripeObject;
  };
}

type StripeEventType = 
  | 'checkout.session.completed'
  | 'invoice.paid'
  | 'invoice.payment_failed'
  | 'customer.subscription.deleted'
  | 'customer.subscription.updated';

// Respuesta
// 200 OK - Evento procesado
// 400 Bad Request - Firma inválida
// 500 Internal Error - Error al procesar

// Procesamiento:
// 1. Verificar firma con STRIPE_WEBHOOK_SECRET
// 2. Verificar idempotencia (event_id no procesado antes)
// 3. Procesar según event.type
// 4. Responder 200 inmediatamente (procesamiento async si es largo)
```

### 4.2.2 Replicate Webhook

```typescript
// POST /api/webhooks/replicate

// Headers requeridos:
// - Authorization: Bearer {REPLICATE_WEBHOOK_TOKEN}

// Body:
interface ReplicateWebhookBody {
  id: string;
  status: 'succeeded' | 'failed' | 'canceled';
  output?: string[];  // URLs de imágenes generadas
  error?: string;
  metrics?: {
    predict_time: number;
  };
}

// Procesamiento:
// 1. Verificar token
// 2. Si status='succeeded':
//    - Descargar imagen
//    - Subir a R2
//    - Actualizar avatar_states
//    - Notificar usuario
// 3. Si status='failed':
//    - Reintentar si intentos < 3
//    - O mantener imagen anterior
```

## 4.3 Formato de Respuesta Estándar

### 4.3.1 Respuesta Exitosa

```typescript
interface ActionResponse<T> =
  | { success: true; data: T }
  | { success: false; error: ErrorCode; message?: string };

// Ejemplo éxito:
{
  success: true,
  data: {
    balance: 12500,
    lifetimeEarned: 50000
  }
}

// Ejemplo error:
{
  success: false,
  error: 'INSUFFICIENT_FUNDS',
  message: 'Saldo insuficiente. Te faltan 2,500 BTC.'
}
```

### 4.3.2 Códigos de Error

```typescript
enum ErrorCode {
  // Auth
  UNAUTHORIZED = 'UNAUTHORIZED',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  EMAIL_EXISTS = 'EMAIL_EXISTS',
  EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED',
  ACCOUNT_SUSPENDED = 'ACCOUNT_SUSPENDED',
  TOO_MANY_ATTEMPTS = 'TOO_MANY_ATTEMPTS',
  
  // Validation
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INVALID_INPUT = 'INVALID_INPUT',
  
  // Tasks
  TASK_NOT_FOUND = 'TASK_NOT_FOUND',
  TASK_ALREADY_COMPLETED = 'TASK_ALREADY_COMPLETED',
  OUTSIDE_TIME_WINDOW = 'OUTSIDE_TIME_WINDOW',
  MAX_CUSTOM_TASKS_REACHED = 'MAX_CUSTOM_TASKS_REACHED',
  
  // Store
  ITEM_NOT_FOUND = 'ITEM_NOT_FOUND',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  LEVEL_TOO_LOW = 'LEVEL_TOO_LOW',
  VECTOR_REQUIREMENT_NOT_MET = 'VECTOR_REQUIREMENT_NOT_MET',
  ITEM_ALREADY_OWNED = 'ITEM_ALREADY_OWNED',
  ITEM_LOCKED = 'ITEM_LOCKED',
  
  // Payments
  ALREADY_SUBSCRIBED = 'ALREADY_SUBSCRIBED',
  INVALID_PLAN = 'INVALID_PLAN',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  
  // General
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
}
```

---

# 5. TIPOS COMPARTIDOS

## 5.1 Tipos de Dominio

```typescript
// src/types/domain.ts

// ==========================================
// VECTORES
// ==========================================

export type VectorType = 'aura' | 'face' | 'wealth' | 'muscle' | 'fat' | 'env';

export interface VectorState {
  aura: number;    // 1.00 - 13.00
  face: number;    // 1.00 - 13.00
  wealth: number;  // 1.00 - 13.00
  muscle: number;  // 1.00 - 13.00
  fat: number;     // 13.00 - 1.00 (inverso)
  env: number;     // 1 - 13
}

export interface VectorEffect {
  vector: VectorType;
  modifier: number;
}

// ==========================================
// USUARIO Y PERFIL
// ==========================================

export type ArchetypeType = 1 | 2 | 3 | 4 | 5 | 6;

export interface Archetype {
  id: ArchetypeType;
  name: string;
  description: string;
  lore: string;
  identityAnchors: string[];
  baseTokens: string;
}

export interface UserProfile {
  id: string;
  nickname: string;
  email: string;
  phoneVerified: boolean;
  timezone: string;
  baseAvatarId: ArchetypeType;
  onboardingCompleted: boolean;
  createdAt: Date;
}

// ==========================================
// ESTADO DEL AVATAR
// ==========================================

export interface AvatarState {
  userId: string;
  vectors: VectorState;
  healthPoints: number;     // 0-10 (expandible a 13)
  maxHealthPoints: number;  // 10-13
  currentDay: number;       // 1-100
  currentLevel: number;     // 1-10 (+11-13 post-game)
  streakDays: number;
  lastImageUrl: string | null;
  lastImageGeneratedAt: Date | null;
}

// ==========================================
// TAREAS
// ==========================================

export type TaskCategory = 'mental' | 'cara' | 'productividad' | 'fisico';
export type TaskStatus = 'pending' | 'completed' | 'failed';
export type TaskType = 'protocol' | 'custom';

export interface Task {
  id: string;
  userId: string;
  name: string;
  description: string;
  category: TaskCategory;
  type: TaskType;
  vectorEffects: VectorEffect[];
  baseReward: number;
  estimatedDuration: number;
  dayNumber: number;
  status: TaskStatus;
  completedAt: Date | null;
  toolUrl?: string;
}

export interface TaskCompletion {
  taskId: string;
  completedAt: Date;
  duration?: number;
  btcEarned: number;
  notes?: string;
}

// ==========================================
// ECONOMÍA
// ==========================================

export interface Wallet {
  userId: string;
  balance: number;
  lifetimeEarned: number;
  lifetimeSpent: number;
}

export type TransactionType = 'earning' | 'spending' | 'refund';

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  balanceAfter: number;
  description: string;
  metadata: Record<string, unknown>;
  createdAt: Date;
}

// ==========================================
// TIENDA E INVENTARIO
// ==========================================

export type ItemCategory = 'armor' | 'accessories' | 'vehicles' | 'properties' | 'companions' | 'pets' | 'powerups';
export type ItemRarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface StoreItem {
  id: string;
  name: string;
  description: string;
  category: ItemCategory;
  rarity: ItemRarity;
  price: number;
  levelRequired: number;
  vectorRequirements?: {
    vector: VectorType;
    minValue?: number;
    maxValue?: number;
  }[];
  imageUrl: string;
  promptTokens: string;
}

export interface InventoryItem {
  id: string;
  userId: string;
  itemId: string;
  item: StoreItem;
  purchasedAt: Date;
  equipped: boolean;
  locked: boolean;
  lockedReason?: string;
}

// ==========================================
// SUSCRIPCIÓN
// ==========================================

export type SubscriptionStatus = 'trial' | 'active' | 'limbo' | 'cancelled' | 'none';
export type SubscriptionPlan = 'monthly' | 'annual';

export interface Subscription {
  userId: string;
  status: SubscriptionStatus;
  plan?: SubscriptionPlan;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  trialEndsAt?: Date;
  currentPeriodStart?: Date;
  currentPeriodEnd?: Date;
  cancelAtPeriodEnd: boolean;
}

// ==========================================
// LOGS Y PROGRESO
// ==========================================

export type DayStatus = 'success' | 'partial' | 'failed' | 'death';

export interface DailyLog {
  id: string;
  userId: string;
  dayNumber: number;
  date: Date;
  status: DayStatus;
  completionRate: number;
  tasksCompleted: number;
  tasksTotal: number;
  btcEarned: number;
  vectorChanges: VectorEffect[];
  healthChange: number;
  streakAtDay: number;
}

// ==========================================
// NOTIFICACIONES
// ==========================================

export type NotificationType = 
  | 'task_reminder'
  | 'judgement_approaching'
  | 'judgement_complete'
  | 'level_up'
  | 'streak_milestone'
  | 'health_critical'
  | 'image_generated'
  | 'trial_expiring';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}
```

## 5.2 Tipos de API

```typescript
// src/types/api.ts

export interface ActionResponse<T> {
  success: true;
  data: T;
} | {
  success: false;
  error: ErrorCode;
  message?: string;
};

export enum ErrorCode {
  UNAUTHORIZED = 'UNAUTHORIZED',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  EMAIL_EXISTS = 'EMAIL_EXISTS',
  EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED',
  ACCOUNT_SUSPENDED = 'ACCOUNT_SUSPENDED',
  TOO_MANY_ATTEMPTS = 'TOO_MANY_ATTEMPTS',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INVALID_INPUT = 'INVALID_INPUT',
  TASK_NOT_FOUND = 'TASK_NOT_FOUND',
  TASK_ALREADY_COMPLETED = 'TASK_ALREADY_COMPLETED',
  OUTSIDE_TIME_WINDOW = 'OUTSIDE_TIME_WINDOW',
  MAX_CUSTOM_TASKS_REACHED = 'MAX_CUSTOM_TASKS_REACHED',
  ITEM_NOT_FOUND = 'ITEM_NOT_FOUND',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  LEVEL_TOO_LOW = 'LEVEL_TOO_LOW',
  VECTOR_REQUIREMENT_NOT_MET = 'VECTOR_REQUIREMENT_NOT_MET',
  ITEM_ALREADY_OWNED = 'ITEM_ALREADY_OWNED',
  ITEM_LOCKED = 'ITEM_LOCKED',
  ALREADY_SUBSCRIBED = 'ALREADY_SUBSCRIBED',
  INVALID_PLAN = 'INVALID_PLAN',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
}

// Request/Response types específicos
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  hasMore: boolean;
}

export interface ApiError {
  code: ErrorCode;
  message: string;
  details?: Record<string, string[]>;
}
```

## 5.3 Tipos de Base de Datos (Supabase)

```typescript
// src/types/database.ts
// Generated from Supabase schema

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          nickname: string;
          email: string;
          phone: string | null;
          phone_verified: boolean;
          timezone: string;
          base_avatar_id: number;
          onboarding_completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          nickname: string;
          email: string;
          phone?: string | null;
          phone_verified?: boolean;
          timezone?: string;
          base_avatar_id: number;
          onboarding_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          nickname?: string;
          email?: string;
          phone?: string | null;
          phone_verified?: boolean;
          timezone?: string;
          base_avatar_id?: number;
          onboarding_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      avatar_states: {
        Row: {
          user_id: string;
          aura_lvl: number;
          face_lvl: number;
          wealth_lvl: number;
          muscle_lvl: number;
          fat_lvl: number;
          env_lvl: number;
          health_points: number;
          max_health_points: number;
          current_day: number;
          current_level: number;
          streak_days: number;
          last_image_url: string | null;
          last_image_generated_at: string | null;
          created_at: string;
          updated_at: string;
        };
        // ... Insert y Update similares
      };
      // ... más tablas
    };
    Functions: {
      fn_handle_new_user: {
        Args: Record<PropertyKey, never>;
        Returns: void;
      };
      fn_complete_task_transaction: {
        Args: {
          p_user_id: string;
          p_task_id: string;
          p_btc_reward: number;
          p_vector_changes: Json;
        };
        Returns: void;
      };
      // ... más funciones
    };
    Enums: {
      task_category: 'mental' | 'cara' | 'productividad' | 'fisico';
      task_status: 'pending' | 'completed' | 'failed';
      day_status: 'success' | 'partial' | 'failed' | 'death';
      subscription_status: 'trial' | 'active' | 'limbo' | 'cancelled';
      item_category: 'armor' | 'accessories' | 'vehicles' | 'properties' | 'companions' | 'pets' | 'powerups';
      item_rarity: 'common' | 'rare' | 'epic' | 'legendary';
    };
  };
}
```

## 5.4 Tipos de UI

```typescript
// src/types/ui.ts

import { ReactNode } from 'react';

// Component Props base
export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

// Avatar Display
export interface AvatarDisplayProps extends BaseProps {
  imageUrl: string | null;
  isGenerating?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  onClick?: () => void;
}

// Task Card
export interface TaskCardProps extends BaseProps {
  task: Task;
  onComplete: (taskId: string) => void;
  disabled?: boolean;
}

// Health Bar
export interface HealthBarProps extends BaseProps {
  current: number;
  max: number;
  showWarning?: boolean;
}

// Vector Radar Chart
export interface VectorRadarProps extends BaseProps {
  vectors: VectorState;
  animate?: boolean;
}

// Time Matrix
export interface TimeMatrixProps extends BaseProps {
  logs: DailyLog[];
  currentDay: number;
  onDayClick?: (day: number) => void;
}

// Store Item Card
export interface ItemCardProps extends BaseProps {
  item: StoreItem;
  isOwned?: boolean;
  isEquipped?: boolean;
  isLocked?: boolean;
  userBalance: number;
  userLevel: number;
  onPurchase?: (itemId: string) => void;
  onEquip?: (itemId: string) => void;
}
```

---



# 6. PATRONES DE CÓDIGO

## 6.1 Server Components vs Client Components

### 6.1.1 Reglas de Decisión

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         SERVER vs CLIENT COMPONENTS                                                  │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  USAR SERVER COMPONENT CUANDO:                                                                     │
│  ─────────────────────────────                                                                     │
│  ✓ No necesita interactividad del usuario                                                          │
│  ✓ Solo muestra datos (lectura)                                                                    │
│  ✓ Necesita acceso directo a base de datos                                                         │
│  ✓ SEO es importante                                                                               │
│  ✓ Es página inicial/ruta principal                                                                │
│  ✓ No usa hooks de React (useState, useEffect)                                                     │
│  ✓ No usa browser APIs (window, document, localStorage)                                            │
│                                                                                                      │
│  EJEMPLOS:                                                                                           │
│  - Landing page                                                                                    │
│  - Dashboard layout principal                                                                      │
│  - Páginas de autenticación                                                                        │
│  - Server Actions wrappers                                                                         │
│                                                                                                      │
│  USAR CLIENT COMPONENT ('use client') CUANDO:                                                      │
│  ────────────────────────────────────────────                                                      │
│  ✓ Necesita estado local (useState)                                                                │
│  ✓ Necesita efectos secundarios (useEffect)                                                        │
│  ✓ Maneja eventos del usuario (onClick, onSubmit)                                                  │
│  ✓ Usa browser APIs                                                                                │
│  ✓ Es una herramienta interactiva (meditación, timer)                                              │
│  ✓ Usa librerías client-only (Framer Motion en interacciones)                                      │
│                                                                                                      │
│  EJEMPLOS:                                                                                           │
│  - Formularios                                                                                     │
│  - Reproductores de audio/video                                                                    │
│  - Componentes con animaciones de interacción                                                      │
│  - Tool players (gym, focus, kegel)                                                                │
│                                                                                                      │
│  REGLA DE ORO:                                                                                       │
│  ┌─────────────────────────────────────────────────────────────────────────────────────────────┐   │
│  │  Por defecto: SERVER COMPONENT                                                             │   │
│  │  Solo agregar 'use client' cuando sea absolutamente necesario                              │   │
│  └─────────────────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 6.1.2 Ejemplo: Composición Server + Client

```tsx
// app/dashboard/page.tsx (SERVER COMPONENT)
// No tiene 'use client', puede acceder a DB directamente

import { createClient } from '@/lib/server/db';
import { AvatarDisplay } from '@/components/avatar/AvatarDisplay';
import { TaskList } from '@/components/tasks/TaskList';
import { DashboardShell } from '@/components/dashboard/DashboardShell';

export default async function DashboardPage() {
  const supabase = createClient();
  
  // Acceso directo a DB (solo en Server Component)
  const { data: avatarState } = await supabase
    .from('avatar_states')
    .select('*')
    .single();
  
  const { data: tasks } = await supabase
    .from('daily_tasks')
    .select('*')
    .eq('day_number', avatarState?.current_day);

  return (
    <DashboardShell>
      {/* Client Component para interacción */}
      <AvatarDisplay 
        imageUrl={avatarState?.last_image_url} 
        isGenerating={!avatarState?.last_image_url}
      />
      
      {/* Client Component para interacción */}
      <TaskList initialTasks={tasks} />
    </DashboardShell>
  );
}
```

```tsx
// components/tasks/TaskList.tsx (CLIENT COMPONENT)
'use client';

import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { completeTask } from '@/lib/server/actions/tasks';
import type { Task } from '@/types/domain';

interface TaskListProps {
  initialTasks: Task[];
}

export function TaskList({ initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [completing, setCompleting] = useState<string | null>(null);

  const handleComplete = async (taskId: string) => {
    setCompleting(taskId);
    
    const result = await completeTask({ 
      taskId, 
      idempotencyKey: generateUUID() 
    });
    
    if (result.success) {
      // Optimistic update
      setTasks(prev => prev.map(t => 
        t.id === taskId ? { ...t, status: 'completed' } : t
      ));
    }
    
    setCompleting(null);
  };

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onComplete={handleComplete}
          disabled={completing === task.id}
        />
      ))}
    </div>
  );
}
```

## 6.2 Server Actions Pattern

### 6.2.1 Estructura de Server Action

```typescript
// lib/server/actions/tasks/completeTask.ts
'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { createClient } from '@/lib/server/db';
import { calculateRewards } from '@/lib/core/calculations/rewards';
import type { ActionResponse } from '@/types/api';
import { ErrorCode } from '@/types/api';

// 1. SCHEMA DE VALIDACIÓN
const completeTaskSchema = z.object({
  taskId: z.string().uuid(),
  idempotencyKey: z.string().uuid(),
  duration: z.number().int().positive().optional(),
});

type CompleteTaskInput = z.infer<typeof completeTaskSchema>;

// 2. TIPO DE RESPUESTA
interface CompleteTaskSuccess {
  taskId: string;
  btcEarned: number;
  newBalance: number;
  vectorChanges: Array<{
    vector: string;
    previousValue: number;
    newValue: number;
  }>;
}

// 3. FUNCIÓN PRINCIPAL
export async function completeTask(
  input: CompleteTaskInput
): Promise<ActionResponse<CompleteTaskSuccess>> {
  try {
    // 3.1 Validar input
    const validated = completeTaskSchema.parse(input);
    
    // 3.2 Verificar autenticación
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { 
        success: false, 
        error: ErrorCode.UNAUTHORIZED 
      };
    }
    
    // 3.3 Verificar idempotencia
    const { data: existingCompletion } = await supabase
      .from('task_completions')
      .select('id')
      .eq('idempotency_key', validated.idempotencyKey)
      .single();
    
    if (existingCompletion) {
      return { 
        success: false, 
        error: ErrorCode.TASK_ALREADY_COMPLETED 
      };
    }
    
    // 3.4 Obtener tarea y verificar
    const { data: task } = await supabase
      .from('daily_tasks')
      .select('*')
      .eq('id', validated.taskId)
      .eq('user_id', user.id)
      .single();
    
    if (!task) {
      return { 
        success: false, 
        error: ErrorCode.TASK_NOT_FOUND 
      };
    }
    
    if (task.status === 'completed') {
      return { 
        success: false, 
        error: ErrorCode.TASK_ALREADY_COMPLETED 
      };
    }
    
    // 3.5 Ejecutar en transacción
    const { data: result, error } = await supabase.rpc(
      'fn_complete_task_transaction',
      {
        p_user_id: user.id,
        p_task_id: validated.taskId,
        p_idempotency_key: validated.idempotencyKey,
      }
    );
    
    if (error) throw error;
    
    // 3.6 Revalidar paths afectados
    revalidatePath('/dashboard');
    revalidatePath('/dashboard/tasks');
    
    // 3.7 Retornar éxito
    return {
      success: true,
      data: {
        taskId: validated.taskId,
        btcEarned: result.btc_earned,
        newBalance: result.new_balance,
        vectorChanges: result.vector_changes,
      },
    };
    
  } catch (error) {
    console.error('completeTask error:', error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: ErrorCode.VALIDATION_ERROR,
        message: error.errors[0].message,
      };
    }
    
    return {
      success: false,
      error: ErrorCode.INTERNAL_ERROR,
    };
  }
}
```

### 6.2.2 Uso de Server Action en Client Component

```tsx
'use client';

import { useState } from 'react';
import { completeTask } from '@/lib/server/actions/tasks';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

interface CompleteTaskButtonProps {
  taskId: string;
}

export function CompleteTaskButton({ taskId }: CompleteTaskButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  // Generar idempotency key una vez por render
  const [idempotencyKey] = useState(() => uuidv4());

  const handleClick = async () => {
    setIsLoading(true);
    
    try {
      const result = await completeTask({
        taskId,
        idempotencyKey,
      });
      
      if (result.success) {
        toast.success(`¡+${result.data.btcEarned} BTC ganados!`);
        // El revalidatePath actualizará automáticamente los Server Components
      } else {
        toast.error(result.message || 'Error al completar tarea');
      }
    } catch (error) {
      toast.error('Error inesperado');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleClick} 
      disabled={isLoading}
      loading={isLoading}
    >
      Completar
    </Button>
  );
}
```

## 6.3 Error Handling Pattern

### 6.3.1 Jerarquía de Errores

```typescript
// lib/errors/index.ts

// Error base de la aplicación
export class AppError extends Error {
  constructor(
    public code: ErrorCode,
    message: string,
    public statusCode: number = 500,
    public details?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'AppError';
  }
}

// Errores específicos
export class ValidationError extends AppError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(ErrorCode.VALIDATION_ERROR, message, 400, details);
    this.name = 'ValidationError';
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(ErrorCode.NOT_FOUND, `${resource} no encontrado`, 404);
    this.name = 'NotFoundError';
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'No autorizado') {
    super(ErrorCode.UNAUTHORIZED, message, 401);
    this.name = 'UnauthorizedError';
  }
}

export class InsufficientFundsError extends AppError {
  constructor(required: number, current: number) {
    super(
      ErrorCode.INSUFFICIENT_FUNDS,
      `Saldo insuficiente. Requerido: ${required}, Actual: ${current}`,
      400,
      { required, current }
    );
    this.name = 'InsufficientFundsError';
  }
}
```

### 6.3.2 Error Boundary

```tsx
// components/providers/ErrorBoundary.tsx
'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorFallback } from '@/components/ui/error-fallback';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // Enviar a Sentry en producción
    if (process.env.NODE_ENV === 'production') {
      // Sentry.captureException(error, { extra: errorInfo });
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}
```

### 6.3.3 Manejo de Errores en Server Actions

```typescript
// lib/server/actions/wrapAction.ts

import { ActionResponse, ErrorCode } from '@/types/api';
import { AppError } from '@/lib/errors';

export function wrapAction<TArgs, TResult>(
  action: (args: TArgs) => Promise<TResult>
): (args: TArgs) => Promise<ActionResponse<TResult>> {
  return async (args: TArgs) => {
    try {
      const data = await action(args);
      return { success: true, data };
    } catch (error) {
      console.error('Action error:', error);
      
      // Si es un error de aplicación conocido
      if (error instanceof AppError) {
        return {
          success: false,
          error: error.code,
          message: error.message,
        };
      }
      
      // Si es un error de Zod
      if (error instanceof z.ZodError) {
        return {
          success: false,
          error: ErrorCode.VALIDATION_ERROR,
          message: error.errors.map(e => e.message).join(', '),
        };
      }
      
      // Error desconocido
      return {
        success: false,
        error: ErrorCode.INTERNAL_ERROR,
        message: 'Ha ocurrido un error inesperado',
      };
    }
  };
}
```

## 6.4 Validation Pattern (Zod)

### 6.4.1 Schemas Comunes

```typescript
// lib/validation/schemas.ts

import { z } from 'zod';

// Schemas base
export const uuidSchema = z.string().uuid();

export const emailSchema = z.string().email('Email inválido');

export const passwordSchema = z
  .string()
  .min(8, 'Mínimo 8 caracteres')
  .regex(/[A-Z]/, 'Al menos una mayúscula')
  .regex(/[a-z]/, 'Al menos una minúscula')
  .regex(/[0-9]/, 'Al menos un número');

// Schemas de dominio
export const vectorValueSchema = z.number().min(1).max(13);

export const taskCategorySchema = z.enum([
  'mental',
  'cara',
  'productividad',
  'fisico',
]);

// Schemas de input
export const completeTaskSchema = z.object({
  taskId: uuidSchema,
  idempotencyKey: uuidSchema,
  duration: z.number().int().positive().optional(),
  notes: z.string().max(500).optional(),
});

export const purchaseItemSchema = z.object({
  itemId: uuidSchema,
  idempotencyKey: uuidSchema,
});

export const updateProfileSchema = z.object({
  timezone: z.string().optional(),
  notifications: z
    .object({
      morningReminder: z.boolean().optional(),
      morningTime: z.string().regex(/^\d{2}:\d{2}$/).optional(),
      taskReminders: z.boolean().optional(),
    })
    .optional(),
});

// Helper para inferir tipos
export type CompleteTaskInput = z.infer<typeof completeTaskSchema>;
export type PurchaseItemInput = z.infer<typeof purchaseItemSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
```

### 6.4.2 Validación de Formularios

```tsx
// components/forms/RegisterForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const registerSchema = z
  .object({
    email: z.string().email('Email inválido'),
    password: z
      .string()
      .min(8, 'Mínimo 8 caracteres')
      .regex(/[A-Z]/, 'Al menos una mayúscula')
      .regex(/[a-z]/, 'Al menos una minúscula')
      .regex(/[0-9]/, 'Al menos un número'),
    passwordConfirmation: z.string(),
    termsAccepted: z.boolean().refine((v) => v, 'Debes aceptar los términos'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Las contraseñas no coinciden',
    path: ['passwordConfirmation'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    // Enviar a Server Action
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email')}
        type="email"
        placeholder="Email"
        error={errors.email?.message}
      />
      <Input
        {...register('password')}
        type="password"
        placeholder="Contraseña"
        error={errors.password?.message}
      />
      <Input
        {...register('passwordConfirmation')}
        type="password"
        placeholder="Confirmar contraseña"
        error={errors.passwordConfirmation?.message}
      />
      {/* ... */}
      <Button type="submit" loading={isSubmitting}>
        Registrarse
      </Button>
    </form>
  );
}
```

## 6.5 Database Transaction Pattern

### 6.5.1 Transacciones en PostgreSQL

```sql
-- Función de PostgreSQL para completar tarea
CREATE OR REPLACE FUNCTION fn_complete_task_transaction(
  p_user_id UUID,
  p_task_id UUID,
  p_idempotency_key UUID
)
RETURNS TABLE (
  btc_earned INTEGER,
  new_balance INTEGER,
  vector_changes JSONB
) AS $$
DECLARE
  v_task RECORD;
  v_avatar_state RECORD;
  v_btc_earned INTEGER;
  v_streak_multiplier NUMERIC;
  v_level_multiplier NUMERIC;
  v_vector_changes JSONB;
BEGIN
  -- 1. Obtener datos de la tarea
  SELECT * INTO v_task
  FROM daily_tasks
  WHERE id = p_task_id AND user_id = p_user_id;
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'TASK_NOT_FOUND';
  END IF;
  
  -- 2. Obtener estado del avatar
  SELECT * INTO v_avatar_state
  FROM avatar_states
  WHERE user_id = p_user_id;
  
  -- 3. Calcular multiplicadores
  v_streak_multiplier := calculate_streak_multiplier(v_avatar_state.streak_days);
  v_level_multiplier := calculate_level_multiplier(v_avatar_state.current_level);
  
  -- 4. Calcular BTC
  v_btc_earned := ROUND(v_task.base_reward * v_streak_multiplier * v_level_multiplier);
  
  -- 5. Calcular cambios de vectores
  v_vector_changes := calculate_vector_changes(v_task.vector_effects);
  
  -- 6. Actualizar tarea
  UPDATE daily_tasks
  SET 
    status = 'completed',
    completed_at = NOW(),
    btc_earned = v_btc_earned
  WHERE id = p_task_id;
  
  -- 7. Actualizar wallet
  UPDATE wallets
  SET 
    balance = balance + v_btc_earned,
    lifetime_earned = lifetime_earned + v_btc_earned
  WHERE user_id = p_user_id;
  
  -- 8. Actualizar vectores
  UPDATE avatar_states
  SET
    aura_lvl = LEAST(13, aura_lvl + (v_vector_changes->>'aura')::NUMERIC),
    muscle_lvl = LEAST(13, muscle_lvl + (v_vector_changes->>'muscle')::NUMERIC),
    -- ... más vectores
    updated_at = NOW()
  WHERE user_id = p_user_id;
  
  -- 9. Registrar transacción
  INSERT INTO wallet_transactions (
    user_id, type, amount, description, metadata
  ) VALUES (
    p_user_id, 'earning', v_btc_earned, 
    'Tarea completada: ' || v_task.name,
    jsonb_build_object('task_id', p_task_id)
  );
  
  -- 10. Retornar resultado
  RETURN QUERY SELECT 
    v_btc_earned,
    (SELECT balance FROM wallets WHERE user_id = p_user_id),
    v_vector_changes;
END;
$$ LANGUAGE plpgsql;
```

## 6.6 Idempotency Pattern

### 6.6.1 Implementación

```typescript
// lib/server/idempotency/index.ts

import { createClient } from '@/lib/server/db';

interface IdempotencyKey {
  key: string;
  userId: string;
  action: string;
  status: 'pending' | 'completed' | 'failed';
  response?: unknown;
  createdAt: Date;
  expiresAt: Date;
}

export async function checkIdempotencyKey(
  key: string,
  userId: string
): Promise<{ exists: false } | { exists: true; response: unknown }> {
  const supabase = createClient();
  
  const { data } = await supabase
    .from('idempotency_keys')
    .select('*')
    .eq('key', key)
    .eq('user_id', userId)
    .single();
  
  if (!data) {
    // Crear registro pending
    await supabase.from('idempotency_keys').insert({
      key,
      user_id: userId,
      status: 'pending',
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24h
    });
    
    return { exists: false };
  }
  
  if (data.status === 'completed') {
    return { exists: true, response: data.response };
  }
  
  // Si está pending o failed, permitir reintentar
  return { exists: false };
}

export async function completeIdempotencyKey(
  key: string,
  userId: string,
  response: unknown
): Promise<void> {
  const supabase = createClient();
  
  await supabase
    .from('idempotency_keys')
    .update({
      status: 'completed',
      response,
    })
    .eq('key', key)
    .eq('user_id', userId);
}
```

### 6.6.2 Uso en Server Action

```typescript
export async function purchaseItem(input: PurchaseItemInput) {
  // 1. Verificar idempotencia
  const idempotencyCheck = await checkIdempotencyKey(
    input.idempotencyKey,
    user.id
  );
  
  if (idempotencyCheck.exists) {
    // Ya se procesó, retornar respuesta cacheada
    return { success: true, data: idempotencyCheck.response };
  }
  
  try {
    // 2. Ejecutar compra
    const result = await executePurchase(input);
    
    // 3. Marcar como completado
    await completeIdempotencyKey(
      input.idempotencyKey,
      user.id,
      result
    );
    
    return { success: true, data: result };
  } catch (error) {
    // Marcar como failed para permitir reintento
    await failIdempotencyKey(input.idempotencyKey, user.id);
    throw error;
  }
}
```

---

# 7. VARIABLES DE ENTORNO

## 7.1 Variables Requeridas

```bash
# ==========================================
# NEXT.JS / APP
# ==========================================

# URL base de la aplicación
NEXT_PUBLIC_APP_URL=https://metamen100.com

# Entorno (development, staging, production)
NODE_ENV=production

# ==========================================
# SUPABASE
# ==========================================

# URL de Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co

# Anon key (para cliente)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Service role key (para servidor - NUNCA exponer al cliente)
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# ==========================================
# STRIPE
# ==========================================

# Clave publicable
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Clave secreta
STRIPE_SECRET_KEY=sk_live_...

# Webhook secret
STRIPE_WEBHOOK_SECRET=whsec_...

# IDs de precios
STRIPE_PRICE_MONTHLY=price_...
STRIPE_PRICE_ANNUAL=price_...

# ==========================================
# REPLICATE (Image Generation)
# ==========================================

REPLICATE_API_TOKEN=r8_...

# Modelo por defecto
REPLICATE_MODEL=stability-ai/sdxl

# Webhook URL (para callbacks)
REPLICATE_WEBHOOK_URL=https://metamen100.com/api/webhooks/replicate

# ==========================================
# GEMINI (Google AI - Image Generation Primary)
# ==========================================

GEMINI_API_KEY=AIza...

# ==========================================
# CLOUDFLARE R2 (Storage)
# ==========================================

R2_ENDPOINT=https://xxx.r2.cloudflarestorage.com
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET_NAME=metamen100-avatars
R2_PUBLIC_URL=https://avatars.metamen100.com

# ==========================================
# INNGEST (Queue/Jobs)
# ==========================================

INNGEST_EVENT_KEY=...
INNGEST_SIGNING_KEY=...

# ==========================================
# RESEND (Email)
# ==========================================

RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=noreply@metamen100.com

# ==========================================
# SENTRY (Error Tracking)
# ==========================================

SENTRY_DSN=https://...@....ingest.sentry.io/...
SENTRY_AUTH_TOKEN=...

# ==========================================
# POSTHOG (Analytics)
# ==========================================

NEXT_PUBLIC_POSTHOG_KEY=phc_...
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

## 7.2 Variables Opcionales

```bash
# ==========================================
# OPCIONALES
# ==========================================

# Feature flags
NEXT_PUBLIC_FEATURE_PREMIUM_HYPNOSIS=false
NEXT_PUBLIC_FEATURE_COMMUNITY=false

# Límites y configuración
MAX_CUSTOM_TASKS=2
MAX_IMAGE_GENERATION_RETRIES=3
DEFAULT_TRIAL_DAYS=5

# Cache
REDIS_URL=redis://...

# Monitoreo adicional
LOG_LEVEL=info
```

## 7.3 Validación con Zod

```typescript
// lib/config/env.ts

import { z } from 'zod';

const envSchema = z.object({
  // App
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  SUPABASE_SERVICE_ROLE_KEY: z.string(),
  
  // Stripe
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().startsWith('pk_'),
  STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
  STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_'),
  STRIPE_PRICE_MONTHLY: z.string().startsWith('price_'),
  STRIPE_PRICE_ANNUAL: z.string().startsWith('price_'),
  
  // Replicate
  REPLICATE_API_TOKEN: z.string().startsWith('r8_'),
  
  // Gemini
  GEMINI_API_KEY: z.string().startsWith('AIza'),
  
  // R2
  R2_ENDPOINT: z.string().url(),
  R2_ACCESS_KEY_ID: z.string(),
  R2_SECRET_ACCESS_KEY: z.string(),
  R2_BUCKET_NAME: z.string(),
  R2_PUBLIC_URL: z.string().url(),
  
  // Inngest
  INNGEST_EVENT_KEY: z.string(),
  INNGEST_SIGNING_KEY: z.string(),
  
  // Email
  RESEND_API_KEY: z.string().startsWith('re_'),
  RESEND_FROM_EMAIL: z.string().email(),
  
  // Monitoring (opcional en dev)
  SENTRY_DSN: z.string().url().optional(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().startsWith('phc_').optional(),
});

// Validar en tiempo de build
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    '❌ Variables de entorno inválidas:',
    parsed.error.flatten().fieldErrors
  );
  process.exit(1);
}

export const env = parsed.data;
```

---

# 8. CONVENCIONES DE CÓDIGO

## 8.1 Nombrado

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         CONVENCIONES DE NOMBRADO                                                     │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  ARCHIVOS                                                                                            │
│  ────────                                                                                            │
│  Components:       PascalCase.tsx               (AvatarDisplay.tsx)                                  │
│  Hooks:            useCamelCase.ts              (useAvatar.ts)                                       │
│  Utils:            camelCase.ts                 (formatDate.ts)                                      │
│  Server Actions:   camelCase.ts                 (completeTask.ts)                                    │
│  Types:            camelCase.ts OR types.ts     (domain.ts)                                          │
│  Constants:        UPPER_SNAKE.ts               (CONSTANTS.ts)                                       │
│  Tests:            *.test.ts o *.spec.ts                                                           │
│                                                                                                      │
│  VARIABLES Y FUNCIONES                                                                               │
│  ────────────────────────                                                                            │
│  Variables:        camelCase                    const userName = '...'                               │
│  Funciones:        camelCase                    function getUser() {}                                │
│  Async functions:  camelCase                    async function fetchData() {}                        │
│  Booleanos:        is/has/should + camelCase    const isLoading = true                               │
│  Constantes:       UPPER_SNAKE                  const MAX_RETRY = 3                                  │
│                                                                                                      │
│  TYPES E INTERFACES                                                                                  │
│  ──────────────────                                                                                  │
│  Types:            PascalCase                   type UserId = string                                 │
│  Interfaces:       PascalCase                   interface UserProps {}                               │
│  Enums:            PascalCase                   enum Status { ... }                                  │
│  Generics:         T, K, V o descriptivo        function identity<T>(arg: T): T                      │
│                                                                                                      │
│  COMPONENTES REACT                                                                                   │
│  ───────────────────                                                                                 │
│  Componentes:      PascalCase                   function AvatarDisplay() {}                          │
│  Props interface:  ComponentName + Props        interface AvatarDisplayProps {}                      │
│  Styled components: ComponentName + Styled      const ButtonStyled = styled.button                   │
│                                                                                                      │
│  BASE DE DATOS                                                                                       │
│  ─────────────                                                                                       │
│  Tablas:           snake_case                   profiles, avatar_states                              │
│  Columnas:         snake_case                   user_id, aura_lvl                                    │
│  Funciones:        fn_ + snake_case             fn_handle_new_user                                   │
│  Triggers:         tr_ + snake_case             tr_update_updated_at                                 │
│  Índices:          idx_ + snake_case            idx_user_day                                         │
│                                                                                                      │
│  CSS/TAILWIND                                                                                        │
│  ────────────                                                                                        │
│  Clases utilitarias: kebab-case                 flex, items-center, bg-black                         │
│  Custom classes:   camelCase en className       <div className="customContainer">                    │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 8.2 Imports

```typescript
// Orden de imports (de más general a más específico)

// 1. React/Next.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 2. Librerías externas
import { z } from 'zod';
import { motion } from 'framer-motion';

// 3. Componentes UI (shadcn)
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// 4. Componentes de dominio
import { AvatarDisplay } from '@/components/avatar/AvatarDisplay';
import { TaskList } from '@/components/tasks/TaskList';

// 5. Hooks
import { useAuth } from '@/hooks/useAuth';
import { useAvatar } from '@/hooks/useAvatar';

// 6. Librerías internas
import { cn } from '@/lib/utils/cn';
import { formatDate } from '@/lib/utils/format';

// 7. Server Actions
import { completeTask } from '@/lib/server/actions/tasks';

// 8. Types
import type { Task } from '@/types/domain';
import type { ActionResponse } from '@/types/api';

// 9. Estilos (si aplica)
import './styles.css';
```

## 8.3 Comentarios

```typescript
// ==========================================
// SECCIÓN: Título descriptivo
// ==========================================

/**
 * Descripción breve de la función/componente
 * 
 * @param paramName - Descripción del parámetro
 * @returns Descripción del valor retornado
 * @throws Qué errores puede lanzar
 * 
 * @example
 * ```typescript
 * const result = myFunction('value');
 * ```
 */

// Comentario inline para lógica compleja
// TODO: Refactorizar cuando X esté listo
// FIXME: Bug conocido, arreglar en v1.1
// HACK: Solución temporal, reemplazar
// NOTE: Comportamiento importante a recordar
```

## 8.4 Commits

```
Formato: <type>(<scope>): <subject>

Tipos:
  feat:     Nueva característica
  fix:      Corrección de bug
  docs:     Documentación
  style:    Cambios de formato (espacios, comillas, etc)
  refactor: Refactorización de código
  perf:     Mejora de performance
  test:     Tests
  chore:    Tareas de mantenimiento
  ci:       Cambios en CI/CD

Scopes:
  auth, tasks, store, wallet, profile, ui, core, api, db, etc.

Ejemplos:
  feat(auth): add phone verification
  fix(tasks): prevent duplicate completions
  refactor(core): extract vector calculation logic
  perf(api): optimize daily task queries
  docs(readme): update installation instructions
```

## 8.5 Ejemplo de Archivo Completo

```tsx
// src/components/avatar/AvatarDisplay.tsx
'use client';

/**
 * AvatarDisplay
 * 
 * Muestra la imagen del avatar actual con estados de carga y error.
 * Incluye animación de entrada y badge de "nuevo" cuando aplica.
 * 
 * @example
 * ```tsx
 * <AvatarDisplay 
 *   imageUrl="https://..."
 *   size="lg"
 *   isGenerating={false}
 * />
 * ```
 */

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils/cn';
import type { AvatarSize } from '@/types/ui';

interface AvatarDisplayProps {
  imageUrl: string | null;
  size?: AvatarSize;
  isGenerating?: boolean;
  isNew?: boolean;
  className?: string;
  onClick?: () => void;
}

const sizeMap: Record<AvatarSize, number> = {
  sm: 64,
  md: 128,
  lg: 256,
  xl: 512,
};

export function AvatarDisplay({
  imageUrl,
  size = 'md',
  isGenerating = false,
  isNew = false,
  className,
  onClick,
}: AvatarDisplayProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const dimension = sizeMap[size];
  
  if (isGenerating || !imageUrl) {
    return (
      <div className={cn('relative', className)}>
        <Skeleton 
          className="rounded-lg" 
          style={{ width: dimension, height: dimension }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm text-gray-500">Generando...</span>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn('relative', className)}
      onClick={onClick}
    >
      {isLoading && (
        <Skeleton 
          className="absolute inset-0 rounded-lg" 
        />
      )}
      
      <Image
        src={imageUrl}
        alt="Avatar actual"
        width={dimension}
        height={dimension}
        className={cn(
          'rounded-lg object-cover transition-opacity',
          isLoading ? 'opacity-0' : 'opacity-100',
          onClick && 'cursor-pointer hover:opacity-90'
        )}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        priority={size === 'lg' || size === 'xl'}
      />
      
      {isNew && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          NUEVO
        </span>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
          <span className="text-sm text-gray-400">Error al cargar</span>
        </div>
      )}
    </motion.div>
  );
}
```

---

```
╔═════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                      ║
║                              FIN DEL TECHNICAL SPECIFICATION                                         ║
║                                                                                                      ║
║   Technical Specification v1.0.0 - METAMEN100                                                        ║
║   Total de líneas: ~3200+                                                                            ║
║   Server Actions documentadas: 15+                                                                   ║
║   Patrones de código: 6 completos                                                                    ║
║   Variables de entorno: 30+                                                                          ║
║                                                                                                      ║
║   "Arquitectura sólida para un sistema de transformación personal                                  ║
║    que escalará a TOP 100 mundial."                                                                 ║
║                                                                                                      ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

*Documento generado conforme a especificaciones de Caja 01.3 del Sistema MetaMen100*  
*Arquitectura diseñada para alta disponibilidad, escalabilidad y rendimiento*
