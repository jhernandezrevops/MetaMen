METAMEN100: ESTRUCTURA DE CAJAS MATRIOSKA
Mapa de Descomposición del Sistema

Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    🎁 CAJA MAESTRA: METAMEN100                                       ║
║                    Sistema Operativo de Conducta TOP 100 Mundial                     ║
║                                                                                      ║
║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
║    │                                                                            │   ║
║    │   📦 CAJA 01        📦 CAJA 02        📦 CAJA 03        📦 CAJA 04        │   ║
║    │   Documentación     Infraestructura   Base de Datos     Motor Core        │   ║
║    │   Fundacional       y DevOps          y Backend         (Lógica Pura)     │   ║
║    │                                                                            │   ║
║    │   📦 CAJA 05        📦 CAJA 06        📦 CAJA 07        📦 CAJA 08        │   ║
║    │   Autenticación     Dashboard         Arsenal de        IA Generativa     │   ║
║    │   y Onboarding      y UI              Herramientas      (Imágenes)        │   ║
║    │                                                                            │   ║
║    │   📦 CAJA 09        📦 CAJA 10        📦 CAJA 11        📦 CAJA 12        │   ║
║    │   Economía          Monetización      Notificaciones    Observabilidad    │   ║
║    │   y Tienda          (Stripe)          y Realtime        y Calidad         │   ║
║    │                                                                            │   ║
║    │   📦 CAJA 13                                                              │   ║
║    │   Lanzamiento                                                             │   ║
║    │   y Operaciones                                                           │   ║
║    │                                                                            │   ║
║    └────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

📦 CAJA 01: DOCUMENTACIÓN FUNDACIONAL

Propósito: Todo lo que debe existir ANTES de escribir una sola línea de código.
Responsable Principal: Claude (Planificación)
Entregables: Documentos .md en carpeta /docs

ÍNDICE DE SUBCAJAS
CopyCAJA 01: DOCUMENTACIÓN FUNDACIONAL
│
├── 📄 01.1 PRODUCT REQUIREMENTS DOCUMENT (PRD)
│   ├── 01.1.1 User Stories Completas
│   ├── 01.1.2 Criterios de Aceptación por Feature
│   ├── 01.1.3 Requisitos No Funcionales
│   ├── 01.1.4 Edge Cases Documentados
│   └── 01.1.5 Métricas de Éxito (KPIs)
│
├── 📄 01.2 ARCHITECTURE DECISION RECORDS (ADRs)
│   ├── 01.2.1 ADR-001: Elección de Stack Frontend
│   ├── 01.2.2 ADR-002: Elección de Backend/Database
│   ├── 01.2.3 ADR-003: Elección de Servicio de IA
│   ├── 01.2.4 ADR-004: Elección de Pagos
│   ├── 01.2.5 ADR-005: Estrategia de Estado Global
│   ├── 01.2.6 ADR-006: Estrategia de Autenticación
│   └── 01.2.7 ADR-007: Estrategia de Queue/Jobs
│
├── 📄 01.3 TECHNICAL SPECIFICATION
│   ├── 01.3.1 Arquitectura del Sistema (Diagramas)
│   ├── 01.3.2 Flujo de Datos Completo
│   ├── 01.3.3 Modelo de Dominio
│   ├── 01.3.4 Contratos de API (OpenAPI/Swagger)
│   └── 01.3.5 Tipos Compartidos (TypeScript)
│
├── 📄 01.4 DATA MODEL SPECIFICATION
│   ├── 01.4.1 Diagrama Entidad-Relación
│   ├── 01.4.2 Diccionario de Datos Completo
│   ├── 01.4.3 Políticas de RLS Detalladas
│   ├── 01.4.4 Índices y Optimización
│   └── 01.4.5 Estrategia de Migraciones
│
├── 📄 01.5 GAME DESIGN DOCUMENT (GDD)
│   ├── 01.5.1 Sistema de Vectores (AURA, JAWLINE, WEALTH, PHYSIQUE, ENV)
│   ├── 01.5.2 Sistema de Niveles (1-10 + Post-game 11-13)
│   ├── 01.5.3 Sistema de Arquetipos de Tareas (4 arquetipos)
│   ├── 01.5.4 Sistema de Arquetipos de Personajes (6 semillas)
│   ├── 01.5.5 Sistema de Salud (10 corazones)
│   ├── 01.5.6 Sistema de Racha y Multiplicadores
│   ├── 01.5.7 Protocolo de 100 Días (Fases y Hitos)
│   ├── 01.5.8 Judgement Night (Cierre de Día)
│   └── 01.5.9 Muerte y Resurrección del Avatar
│
├── 📄 01.6 CONTENT SPECIFICATION
│   ├── 01.6.1 Tareas del Protocolo (100 días)
│   ├── 01.6.2 Catálogo de Items de Tienda
│   ├── 01.6.3 Textos de UI (Copywriting)
│   ├── 01.6.4 Prompts de IA para Generación
│   └── 01.6.5 Contenido de Herramientas (libros, audios, rutinas)
│
├── 📄 01.7 UI/UX SPECIFICATION
│   ├── 01.7.1 Design System (Colores, Tipografía, Espaciado)
│   ├── 01.7.2 Componentes Base (Especificación)
│   ├── 01.7.3 Wireframes por Pantalla
│   ├── 01.7.4 Flujos de Usuario (User Flows)
│   └── 01.7.5 Estados de Componentes
│
├── 📄 01.8 TEST PLAN
│   ├── 01.8.1 Estrategia de Testing (Pirámide)
│   ├── 01.8.2 Tests Unitarios Requeridos
│   ├── 01.8.3 Tests de Integración Requeridos
│   ├── 01.8.4 Tests E2E Requeridos
│   └── 01.8.5 Cobertura Mínima por Área
│
└── 📄 01.9 SECURITY SPECIFICATION
    ├── 01.9.1 Threat Model
    ├── 01.9.2 Checklist de Seguridad
    ├── 01.9.3 Políticas de Autenticación
    ├── 01.9.4 Manejo de Datos Sensibles
    └── 01.9.5 Headers y CSP

📦 CAJA 02: INFRAESTRUCTURA Y DEVOPS

Propósito: Configuración del entorno de desarrollo, CI/CD y servicios externos.
Responsable Principal: Claude (Arquitectura) + Antigravity (Implementación)
Entregables: Archivos de configuración, workflows, scripts

ÍNDICE DE SUBCAJAS
CopyCAJA 02: INFRAESTRUCTURA Y DEVOPS
│
├── 🔧 02.1 CONFIGURACIÓN DEL PROYECTO
│   ├── 02.1.1 package.json (dependencias exactas)
│   ├── 02.1.2 tsconfig.json (modo estricto)
│   ├── 02.1.3 next.config.js (optimizaciones)
│   ├── 02.1.4 tailwind.config.ts (Design System)
│   └── 02.1.5 postcss.config.js
│
├── 🔧 02.2 LINTING Y FORMATTING
│   ├── 02.2.1 .eslintrc.js (reglas estrictas)
│   ├── 02.2.2 .prettierrc (formato consistente)
│   ├── 02.2.3 .editorconfig
│   └── 02.2.4 lint-staged.config.js
│
├── 🔧 02.3 GIT HOOKS
│   ├── 02.3.1 Husky Setup
│   ├── 02.3.2 Pre-commit Hook (lint + format)
│   ├── 02.3.3 Pre-push Hook (type-check + tests)
│   └── 02.3.4 Commit Message Validation
│
├── 🔧 02.4 CI/CD PIPELINE
│   ├── 02.4.1 GitHub Actions: Lint & Type Check
│   ├── 02.4.2 GitHub Actions: Unit Tests
│   ├── 02.4.3 GitHub Actions: Integration Tests
│   ├── 02.4.4 GitHub Actions: E2E Tests
│   ├── 02.4.5 GitHub Actions: Security Audit
│   ├── 02.4.6 GitHub Actions: Deploy Preview (PRs)
│   └── 02.4.7 GitHub Actions: Deploy Production
│
├── 🔧 02.5 VARIABLES DE ENTORNO
│   ├── 02.5.1 .env.local (template)
│   ├── 02.5.2 .env.example (documentación)
│   ├── 02.5.3 Validación de Variables (zod)
│   └── 02.5.4 Configuración en Vercel
│
├── 🔧 02.6 SERVICIOS EXTERNOS
│   ├── 02.6.1 Supabase Project Setup
│   ├── 02.6.2 Vercel Project Setup
│   ├── 02.6.3 Stripe Account Setup
│   ├── 02.6.4 Replicate Account Setup
│   ├── 02.6.5 Redis/Upstash Setup
│   └── 02.6.6 Dominios y DNS
│
├── 🔧 02.7 HERRAMIENTAS DE DESARROLLO
│   ├── 02.7.1 Antigravity: System Prompt
│   ├── 02.7.2 Antigravity: MCP Servers Config
│   ├── 02.7.3 Antigravity: Skills/Custom Instructions
│   └── 02.7.4 Scripts de Desarrollo (npm scripts)
│
└── 🔧 02.8 ESTRUCTURA DE CARPETAS
    ├── 02.8.1 /src Layout Completo
    ├── 02.8.2 /docs Layout
    ├── 02.8.3 /tests Layout
    ├── 02.8.4 /scripts Layout
    └── 02.8.5 /supabase Layout

📦 CAJA 03: BASE DE DATOS Y BACKEND

Propósito: Schema de PostgreSQL, funciones, RLS, y lógica de servidor.
Responsable Principal: Claude (Diseño) + Antigravity (Implementación SQL)
Entregables: Migraciones SQL, tipos TypeScript, cliente Supabase

ÍNDICE DE SUBCAJAS
CopyCAJA 03: BASE DE DATOS Y BACKEND
│
├── 🗄️ 03.1 SCHEMA DE BASE DE DATOS
│   ├── 03.1.1 Tabla: profiles
│   ├── 03.1.2 Tabla: avatar_states
│   ├── 03.1.3 Tabla: wallets
│   ├── 03.1.4 Tabla: daily_tasks
│   ├── 03.1.5 Tabla: daily_logs
│   ├── 03.1.6 Tabla: subscriptions
│   ├── 03.1.7 Tabla: store_items
│   ├── 03.1.8 Tabla: inventory
│   ├── 03.1.9 Tabla: tool_progress
│   ├── 03.1.10 Tabla: activity_logs
│   ├── 03.1.11 Tabla: image_generation_queue
│   ├── 03.1.12 Tabla: notifications
│   ├── 03.1.13 Tabla: idempotency_keys
│   └── 03.1.14 ENUMs y Custom Types
│
├── 🗄️ 03.2 FUNCIONES DE POSTGRES
│   ├── 03.2.1 fn_handle_new_user (Trigger de registro)
│   ├── 03.2.2 fn_complete_task_transaction
│   ├── 03.2.3 fn_process_judgement_transaction
│   ├── 03.2.4 fn_purchase_item_transaction
│   ├── 03.2.5 fn_process_avatar_death
│   ├── 03.2.6 fn_calculate_level
│   └── 03.2.7 fn_update_updated_at (Trigger)
│
├── 🗄️ 03.3 ROW LEVEL SECURITY (RLS)
│   ├── 03.3.1 Políticas de profiles
│   ├── 03.3.2 Políticas de avatar_states
│   ├── 03.3.3 Políticas de wallets
│   ├── 03.3.4 Políticas de daily_tasks
│   ├── 03.3.5 Políticas de daily_logs
│   ├── 03.3.6 Políticas de subscriptions
│   ├── 03.3.7 Políticas de inventory
│   ├── 03.3.8 Políticas de store_items (público)
│   └── 03.3.9 Políticas para Service Role
│
├── 🗄️ 03.4 ÍNDICES Y OPTIMIZACIÓN
│   ├── 03.4.1 Índices de Búsqueda Frecuente
│   ├── 03.4.2 Índices Compuestos
│   └── 03.4.3 Análisis de Queries Críticas
│
├── 🗄️ 03.5 MIGRACIONES
│   ├── 03.5.1 Migración Inicial (Schema completo)
│   ├── 03.5.2 Seed Data (Items de Tienda)
│   └── 03.5.3 Estrategia de Versionado
│
├── 🗄️ 03.6 TIPOS DE TYPESCRIPT
│   ├── 03.6.1 database.types.ts (generado)
│   ├── 03.6.2 Tipos de Dominio
│   └── 03.6.3 Tipos de API Responses
│
├── 🗄️ 03.7 CLIENTE SUPABASE
│   ├── 03.7.1 client.ts (Browser)
│   ├── 03.7.2 server.ts (Server Components)
│   ├── 03.7.3 middleware.ts (Auth)
│   └── 03.7.4 admin.ts (Service Role)
│
└── 🗄️ 03.8 SERVER ACTIONS
    ├── 03.8.1 Estructura Base de Actions
    ├── 03.8.2 Validación con Zod
    ├── 03.8.3 Manejo de Errores Estandarizado
    └── 03.8.4 Idempotencia

📦 CAJA 04: MOTOR CORE (LÓGICA PURA)

Propósito: Toda la lógica de negocio sin dependencias externas (I/O).
Responsable Principal: Claude (Diseño) + Antigravity (Implementación)
Entregables: Funciones puras en /lib/core, tests unitarios

ÍNDICE DE SUBCAJAS
CopyCAJA 04: MOTOR CORE (LÓGICA PURA)
│
├── ⚙️ 04.1 SISTEMA DE VECTORES
│   ├── 04.1.1 Definición de Vectores (AURA, JAWLINE, WEALTH, PHYSIQUE, ENV)
│   ├── 04.1.2 Función: clamp (limitar valores 1-13)
│   ├── 04.1.3 Función: processTaskImpact
│   ├── 04.1.4 Función: applyBiologicalDecay
│   ├── 04.1.5 Constantes: TASK_MODIFIERS por Arquetipo
│   └── 04.1.6 Tests: vectors.test.ts
│
├── ⚙️ 04.2 SISTEMA DE NIVELES
│   ├── 04.2.1 Definición de Niveles (1-10 + 11-13 Post-game)
│   ├── 04.2.2 Función: calculateLevel
│   ├── 04.2.3 Función: calculateEnvLevel
│   ├── 04.2.4 Umbrales de Transición
│   ├── 04.2.5 Nombres y Descripciones por Nivel
│   └── 04.2.6 Tests: levels.test.ts
│
├── ⚙️ 04.3 SISTEMA DE SALUD
│   ├── 04.3.1 Constantes: MAX_HEALTH (10 base, 13 expandido)
│   ├── 04.3.2 Función: processHealthChange
│   ├── 04.3.3 Función: canRecoverHealth
│   ├── 04.3.4 Reglas de Pérdida de Corazones
│   ├── 04.3.5 Reglas de Recuperación de Corazones
│   └── 04.3.6 Tests: health.test.ts
│
├── ⚙️ 04.4 SISTEMA DE RACHA (STREAK)
│   ├── 04.4.1 Constantes: STREAK_MULTIPLIERS
│   ├── 04.4.2 Función: calculateStreakMultiplier
│   ├── 04.4.3 Función: processStreakBreak
│   ├── 04.4.4 Bonificaciones por Hitos de Racha
│   └── 04.4.5 Tests: streak.test.ts
│
├── ⚙️ 04.5 JUDGEMENT NIGHT
│   ├── 04.5.1 Función: processJudgementNight
│   ├── 04.5.2 Función: calculateCompletionRate
│   ├── 04.5.3 Regla del 80% (Éxito/Fallo)
│   ├── 04.5.4 Estados de Resultado (success, partial, failed, death)
│   └── 04.5.5 Tests: judgement.test.ts
│
├── ⚙️ 04.6 MUERTE Y RESURRECCIÓN
│   ├── 04.6.1 Función: processAvatarDeath
│   ├── 04.6.2 Qué se Resetea
│   ├── 04.6.3 Qué se Conserva
│   ├── 04.6.4 Bloqueo de Inventario por Nivel
│   └── 04.6.5 Tests: death.test.ts
│
├── ⚙️ 04.7 ECONOMÍA
│   ├── 04.7.1 Constantes: TASK_REWARDS
│   ├── 04.7.2 Función: calculateTaskReward
│   ├── 04.7.3 Función: calculateDayBonuses
│   ├── 04.7.4 Constantes: DAILY_CAP
│   ├── 04.7.5 Multiplicadores por Nivel
│   └── 04.7.6 Tests: economy.test.ts
│
├── ⚙️ 04.8 PROTOCOLO DE 100 DÍAS
│   ├── 04.8.1 Definición de Fases (4 Fases)
│   ├── 04.8.2 Tareas por Día (Estructura)
│   ├── 04.8.3 Hitos Especiales (Día 6, 30, 60, 100)
│   ├── 04.8.4 Progresión de Dificultad
│   └── 04.8.5 Arquetipos de Tareas (Mental, Cara, Productividad, Físico)
│
├── ⚙️ 04.9 VALIDACIONES DE NEGOCIO
│   ├── 04.9.1 Función: canCompleteTask
│   ├── 04.9.2 Función: canPurchaseItem
│   ├── 04.9.3 Función: canEquipItem
│   ├── 04.9.4 Función: isTrialExpired
│   └── 04.9.5 Tests: validations.test.ts
│
└── ⚙️ 04.10 MÁQUINAS DE ESTADO
    ├── 04.10.1 TaskStateMachine (pending → completed/failed)
    ├── 04.10.2 SubscriptionStateMachine (trial → active/limbo/cancelled)
    ├── 04.10.3 ImageGenerationStateMachine (idle → queued → generating → completed/failed)
    └── 04.10.4 Tests: state-machines.test.ts

📦 CAJA 05: AUTENTICACIÓN Y ONBOARDING

Propósito: Flujo completo desde visitante hasta usuario activo.
Responsable Principal: Antigravity (Implementación)
Entregables: Páginas de auth, componentes de onboarding, middleware

ÍNDICE DE SUBCAJAS
CopyCAJA 05: AUTENTICACIÓN Y ONBOARDING
│
├── 🔐 05.1 LANDING PAGE
│   ├── 05.1.1 Página: / (Landing)
│   ├── 05.1.2 Header con Navegación
│   ├── 05.1.3 Hero Section
│   ├── 05.1.4 Social Proof (Marquee)
│   ├── 05.1.5 CTA Buttons
│   └── 05.1.6 Footer
│
├── 🔐 05.2 AUTENTICACIÓN
│   ├── 05.2.1 Página: /login
│   ├── 05.2.2 Página: /register
│   ├── 05.2.3 Componente: LoginForm
│   ├── 05.2.4 Componente: RegisterForm
│   ├── 05.2.5 Route: /auth/callback
│   ├── 05.2.6 OAuth: Google
│   └── 05.2.7 Verificación de Teléfono (SMS)
│
├── 🔐 05.3 MIDDLEWARE DE AUTH
│   ├── 05.3.1 middleware.ts (Next.js)
│   ├── 05.3.2 Protección de Rutas /dashboard
│   ├── 05.3.3 Redirección de Usuarios Autenticados
│   └── 05.3.4 Manejo de Sesión Expirada
│
├── 🔐 05.4 ONBOARDING WIZARD
│   ├── 05.4.1 Página: /onboarding
│   ├── 05.4.2 Step 1: Bienvenida
│   ├── 05.4.3 Step 2: Selección de Arquetipo (6 Semillas)
│   ├── 05.4.4 Step 3: Tutorial de Vectores
│   ├── 05.4.5 Step 4: El Juramento (Press & Hold)
│   ├── 05.4.6 Step 5: Configuración de Notificaciones
│   ├── 05.4.7 Barra de Progreso
│   └── 05.4.8 Persistencia de Progreso
│
├── 🔐 05.5 SELECCIÓN DE ARQUETIPO
│   ├── 05.5.1 Componente: ArchetypeCarousel
│   ├── 05.5.2 Datos de los 6 Arquetipos (Rastas, Muscles, Pecas, Greñas, Rubio, Lic)
│   ├── 05.5.3 Visualización de Lore
│   ├── 05.5.4 Animación de Selección
│   └── 05.5.5 Persistencia en DB
│
├── 🔐 05.6 EL JURAMENTO
│   ├── 05.6.1 Componente: OathCeremony
│   ├── 05.6.2 Texto del Juramento
│   ├── 05.6.3 Interacción Press & Hold (3s)
│   ├── 05.6.4 Animación de Progreso
│   ├── 05.6.5 Feedback Háptico
│   └── 05.6.6 Registro de Contrato
│
└── 🔐 05.7 INICIALIZACIÓN DEL USUARIO
    ├── 05.7.1 Trigger: handle_new_user
    ├── 05.7.2 Creación de Profile
    ├── 05.7.3 Creación de Avatar State
    ├── 05.7.4 Creación de Wallet
    ├── 05.7.5 Creación de Subscription (Trial 5 días)
    └── 05.7.6 Generación de Tareas Día 1

📦 CAJA 06: DASHBOARD Y UI

Propósito: Interfaz principal del usuario (HUD), componentes visuales.
Responsable Principal: Antigravity (Implementación)
Entregables: Páginas del dashboard, componentes, Design System

ÍNDICE DE SUBCAJAS
CopyCAJA 06: DASHBOARD Y UI
│
├── 🎨 06.1 DESIGN SYSTEM
│   ├── 06.1.1 Paleta de Colores (Dark Luxury)
│   ├── 06.1.2 Tipografía (Inter, JetBrains Mono)
│   ├── 06.1.3 Espaciado y Grid
│   ├── 06.1.4 Sombras y Efectos (Glow, Glassmorphism)
│   ├── 06.1.5 Animaciones Base
│   └── 06.1.6 Responsive Breakpoints
│
├── 🎨 06.2 COMPONENTES UI BASE
│   ├── 06.2.1 Button (variants, sizes, states)
│   ├── 06.2.2 Card (variants)
│   ├── 06.2.3 Input (states, icons)
│   ├── 06.2.4 Modal
│   ├── 06.2.5 Toast/Notification
│   ├── 06.2.6 Loader/Skeleton
│   ├── 06.2.7 ProgressBar
│   ├── 06.2.8 Badge
│   └── 06.2.9 Tooltip
│
├── 🎨 06.3 LAYOUT DEL DASHBOARD
│   ├── 06.3.1 Sidebar (Desktop)
│   ├── 06.3.2 Bottom Navigation (Mobile)
│   ├── 06.3.3 Header
│   ├── 06.3.4 Main Content Area
│   └── 06.3.5 Layout Responsive
│
├── 🎨 06.4 COMPONENTES DEL HUD
│   ├── 06.4.1 AvatarDisplay (Imagen del Avatar)
│   ├── 06.4.2 HealthBar (10-13 Corazones)
│   ├── 06.4.3 LevelBanner (Nivel Actual)
│   ├── 06.4.4 StatsCard (BTC, XP, Racha)
│   ├── 06.4.5 VectorsRadar (Gráfico de Araña)
│   ├── 06.4.6 TimeMatrix (Calendario de 100 días)
│   └── 06.4.7 CountdownTimer (Hasta Judgement Night)
│
├── 🎨 06.5 PÁGINA: DASHBOARD PRINCIPAL
│   ├── 06.5.1 /dashboard/page.tsx
│   ├── 06.5.2 Server Component: Data Fetching
│   ├── 06.5.3 Client Components: Interactividad
│   ├── 06.5.4 Realtime Updates (Supabase)
│   └── 06.5.5 Loading States
│
├── 🎨 06.6 PÁGINA: TAREAS DEL DÍA
│   ├── 06.6.1 /dashboard/tasks/page.tsx
│   ├── 06.6.2 TaskList Component
│   ├── 06.6.3 TaskCard Component
│   ├── 06.6.4 TaskCheckbox (con animación)
│   ├── 06.6.5 Agrupación por Arquetipo
│   └── 06.6.6 Progreso del Día
│
├── 🎨 06.7 PÁGINA: ANALYTICS
│   ├── 06.7.1 /dashboard/analytics/page.tsx
│   ├── 06.7.2 Radar de Vectores (Recharts)
│   ├── 06.7.3 Calendario Histórico
│   ├── 06.7.4 Comparador Antes/Ahora
│   └── 06.7.5 Estadísticas de Uso de Herramientas
│
├── 🎨 06.8 PÁGINA: PERFIL
│   ├── 06.8.1 /dashboard/profile/page.tsx
│   ├── 06.8.2 Datos del Usuario
│   ├── 06.8.3 Configuración de Zona Horaria
│   ├── 06.8.4 Suscripción y Pagos
│   ├── 06.8.5 Logros Desbloqueados
│   └── 06.8.6 Historial de Imágenes
│
└── 🎨 06.9 ESTADOS ESPECIALES
    ├── 06.9.1 Estado: Generando Imagen
    ├── 06.9.2 Estado: Salud Crítica (<3 corazones)
    ├── 06.9.3 Estado: Avatar Muerto
    ├── 06.9.4 Estado: Trial Expirado
    └── 06.9.5 Estado: Modo Limbo

📦 CAJA 07: ARSENAL DE HERRAMIENTAS

Propósito: Las 9 herramientas que alimentan los vectores del usuario.
Responsable Principal: Antigravity (Implementación)
Entregables: Páginas y componentes para cada herramienta

ÍNDICE DE SUBCAJAS
CopyCAJA 07: ARSENAL DE HERRAMIENTAS
│
├── 🛠️ 07.1 ESTRUCTURA COMÚN
│   ├── 07.1.1 Layout de Herramientas
│   ├── 07.1.2 Componente Base: ToolPage
│   ├── 07.1.3 Tracking de Progreso (tool_progress)
│   ├── 07.1.4 Validación de Completado
│   └── 07.1.5 Integración con Tareas Diarias
│
├── 🛠️ 07.2 BIBLIOTECA DE PODER (Lectura)
│   ├── 07.2.1 /dashboard/tools/library/page.tsx
│   ├── 07.2.2 Catálogo de Libros
│   ├── 07.2.3 Lector PDF Integrado
│   ├── 07.2.4 Tracking de Páginas
│   ├── 07.2.5 Timer de Lectura
│   └── 07.2.6 Sistema de Notas/Highlights
│
├── 🛠️ 07.3 TEMPLO DEL HIERRO (Gym)
│   ├── 07.3.1 /dashboard/tools/gym/page.tsx
│   ├── 07.3.2 Catálogo de Ejercicios
│   ├── 07.3.3 Constructor de Rutinas
│   ├── 07.3.4 Logbook (series, reps, peso)
│   ├── 07.3.5 Timer de Descanso
│   ├── 07.3.6 Videos Demostrativos (GIFs)
│   └── 07.3.7 Progresión Sugerida
│
├── 🛠️ 07.4 CÁMARA DE MEDITACIÓN
│   ├── 07.4.1 /dashboard/tools/meditation/page.tsx
│   ├── 07.4.2 Reproductor de Audio
│   ├── 07.4.3 Biblioteca de Meditaciones Guiadas
│   ├── 07.4.4 Sonidos Binaurales
│   ├── 07.4.5 Timer de Meditación Libre
│   └── 07.4.6 Validación de Completado (90% del audio)
│
├── 🛠️ 07.5 BITÁCORA DE GUERRA (Journal)
│   ├── 07.5.1 /dashboard/tools/journal/page.tsx
│   ├── 07.5.2 Editor de Texto Rico
│   ├── 07.5.3 Prompts Diarios Guiados
│   ├── 07.5.4 Historial de Entradas
│   ├── 07.5.5 Resumen Semanal con IA
│   └── 07.5.6 Análisis de Sentimiento
│
├── 🛠️ 07.6 VITALIDAD SEXUAL (Kegel)
│   ├── 07.6.1 /dashboard/tools/kegel/page.tsx
│   ├── 07.6.2 Tutorial Inicial
│   ├── 07.6.3 Sistema Aprieta/Afloja (Visual + Vibración)
│   ├── 07.6.4 Rutinas por Nivel
│   ├── 07.6.5 Timer Interactivo
│   └── 07.6.6 Tracking de Racha
│
├── 🛠️ 07.7 ESCULTOR FACIAL
│   ├── 07.7.1 /dashboard/tools/facial/page.tsx
│   ├── 07.7.2 Rutinas de Yoga Facial
│   ├── 07.7.3 Guía de Mewing
│   ├── 07.7.4 Videos Demostrativos
│   ├── 07.7.5 Timer por Ejercicio
│   └── 07.7.6 Rutina AM/PM
│
├── 🛠️ 07.8 CREA TU HIPNOSIS [PREMIUM]
│   ├── 07.8.1 /dashboard/tools/hypnosis/page.tsx
│   ├── 07.8.2 Editor de Decretos/Afirmaciones
│   ├── 07.8.3 Selector de Background (Alpha, Theta, Beta, Delta)
│   ├── 07.8.4 Generación de Voz con IA (ElevenLabs)
│   ├── 07.8.5 Biblioteca Personal de Audios
│   └── 07.8.6 Límites por Suscripción
│
├── 🛠️ 07.9 MOVILIDAD TÁCTICA (Stretching)
│   ├── 07.9.1 /dashboard/tools/mobility/page.tsx
│   ├── 07.9.2 3 Rutinas de Corrección Postural
│   ├── 07.9.3 Videos en Loop
│   ├── 07.9.4 Timer por Ejercicio
│   └── 07.9.5 Categorías (AM, PM, Post-Entreno)
│
└── 🛠️ 07.10 FOCUS CHAMBER
    ├── 07.10.1 /dashboard/tools/focus/page.tsx
    ├── 07.10.2 Timer Pomodoro Configurable
    ├── 07.10.3 Música de Concentración
    ├── 07.10.4 Modo Zen (Pantalla Completa)
    ├── 07.10.5 Tracking de Bloques Completados
    └── 07.10.6 Bloqueo de Notificaciones

📦 CAJA 08: IA GENERATIVA

Propósito: Pipeline completo de generación de imágenes del avatar.
Responsable Principal: Claude (Diseño de Prompts) + Antigravity (Implementación)
Entregables: Sistema de prompts, cliente de API, queue de generación

ÍNDICE DE SUBCAJAS
CopyCAJA 08: IA GENERATIVA
│
├── 🤖 08.1 SISTEMA DE PROMPTS
│   ├── 08.1.1 STYLE_HEADER (Constante inmutable)
│   ├── 08.1.2 NEGATIVE_PROMPT (Constante)
│   ├── 08.1.3 Identity Anchors (6 Arquetipos)
│   ├── 08.1.4 Body State Tokens (por fat_lvl + muscle_lvl)
│   ├── 08.1.5 Face State Tokens (por face_lvl)
│   ├── 08.1.6 Posture State Tokens (por aura_lvl)
│   ├── 08.1.7 Attire Tokens (por nivel + wealth_lvl)
│   ├── 08.1.8 Environment Tokens (por env_lvl)
│   ├── 08.1.9 Degradation Tokens (por health_points)
│   └── 08.1.10 Equipment Tokens (del inventario)
│
├── 🤖 08.2 PROMPT BUILDER
│   ├── 08.2.1 Función: buildAvatarPrompt
│   ├── 08.2.2 Función: getBodyTokens
│   ├── 08.2.3 Función: getFaceTokens
│   ├── 08.2.4 Función: getPostureTokens
│   ├── 08.2.5 Función: getAttireTokens
│   ├── 08.2.6 Función: getEnvironmentTokens
│   ├── 08.2.7 Función: getDegradationTokens
│   ├── 08.2.8 Función: getEquipmentTokens
│   └── 08.2.9 Tests: prompt-builder.test.ts
│
├── 🤖 08.3 CLIENTE REPLICATE
│   ├── 08.3.1 Configuración del Cliente
│   ├── 08.3.2 Función: generateImage
│   ├── 08.3.3 Retry con Backoff Exponencial
│   ├── 08.3.4 Manejo de Errores Específicos
│   ├── 08.3.5 Logging de Generaciones
│   └── 08.3.6 Tests: replicate.test.ts
│
├── 🤖 08.4 QUEUE DE GENERACIÓN
│   ├── 08.4.1 Configuración de BullMQ
│   ├── 08.4.2 Job: image-generation
│   ├── 08.4.3 Worker de Procesamiento
│   ├── 08.4.4 Prioridades (success > partial > failed)
│   ├── 08.4.5 Reintentos Automáticos
│   └── 08.4.6 Dashboard de Monitoreo
│
├── 🤖 08.5 STORAGE DE IMÁGENES
│   ├── 08.5.1 Configuración de Cloudflare R2 / Supabase Storage
│   ├── 08.5.2 Naming Convention
│   ├── 08.5.3 Lifecycle Rules (retención)
│   └── 08.5.4 CDN y Caching
│
├── 🤖 08.6 FLUJO COMPLETO
│   ├── 08.6.1 Trigger: Judgement Night
│   ├── 08.6.2 Encolar Generación
│   ├── 08.6.3 Worker Procesa
│   ├── 08.6.4 Guardar URL en DB
│   ├── 08.6.5 Notificar al Usuario (Realtime)
│   └── 08.6.6 Fallback si Falla
│
├── 🤖 08.7 FALLBACK Y RESILIENCIA
│   ├── 08.7.1 Estrategia de Fallback
│   ├── 08.7.2 Imagen Anterior con Badge
│   ├── 08.7.3 Reintento Programado
│   └── 08.7.4 Alertas de Fallos
│
└── 🤖 08.8 VIDEOS DE HITOS (Futuro)
    ├── 08.8.1 Definición de Hitos con Video
    ├── 08.8.2 Pipeline de Generación de Video
    ├── 08.8.3 Storage y Delivery
    └── 08.8.4 Integración con Niveles

📦 CAJA 09: ECONOMÍA Y TIENDA

Propósito: Sistema de BTC virtuales, tienda de items, inventario.
Responsable Principal: Antigravity (Implementación)
Entregables: Páginas de tienda, lógica de compra, inventario

ÍNDICE DE SUBCAJAS
CopyCAJA 09: ECONOMÍA Y TIENDA
│
├── 💰 09.1 SISTEMA DE BTC
│   ├── 09.1.1 Wallet del Usuario
│   ├── 09.1.2 Función: creditBTC
│   ├── 09.1.3 Función: debitBTC
│   ├── 09.1.4 Historial de Transacciones
│   └── 09.1.5 Anti-Farming Rules
│
├── 💰 09.2 GANANCIAS DE BTC
│   ├── 09.2.1 Recompensas por Tarea
│   ├── 09.2.2 Multiplicadores de Racha
│   ├── 09.2.3 Bonos de Día Perfecto
│   ├── 09.2.4 Bonos de Subida de Nivel
│   ├── 09.2.5 Daily Cap (límite diario)
│   └── 09.2.6 Multiplicadores por Nivel
│
├── 💰 09.3 CATÁLOGO DE TIENDA
│   ├── 09.3.1 Categoría: Armadura (Ropa)
│   ├── 09.3.2 Categoría: Accesorios (Relojes, Cadenas)
│   ├── 09.3.3 Categoría: Vehículos
│   ├── 09.3.4 Categoría: Propiedades
│   ├── 09.3.5 Categoría: Compañeras
│   ├── 09.3.6 Categoría: Mascotas
│   ├── 09.3.7 Categoría: Power-ups
│   └── 09.3.8 Items por Nivel Requerido
│
├── 💰 09.4 PÁGINA: TIENDA
│   ├── 09.4.1 /dashboard/store/page.tsx
│   ├── 09.4.2 Grid de Items
│   ├── 09.4.3 Filtros por Categoría
│   ├── 09.4.4 Filtros por Precio
│   ├── 09.4.5 Modal de Detalle de Item
│   ├── 09.4.6 Indicador de Requisitos
│   └── 09.4.7 Botón de Compra
│
├── 💰 09.5 PROCESO DE COMPRA
│   ├── 09.5.1 Server Action: purchaseItem
│   ├── 09.5.2 Validación de Balance
│   ├── 09.5.3 Validación de Nivel
│   ├── 09.5.4 Validación de Gating (ej: fat_lvl para joyas)
│   ├── 09.5.5 Transacción Atómica
│   ├── 09.5.6 Confirmación Visual
│   └── 09.5.7 Animación de Compra
│
├── 💰 09.6 INVENTARIO
│   ├── 09.6.1 /dashboard/inventory/page.tsx
│   ├── 09.6.2 Grid de Items Comprados
│   ├── 09.6.3 Toggle Equipar/Desequipar
│   ├── 09.6.4 Slots de Equipamiento
│   ├── 09.6.5 Items Bloqueados (por nivel tras muerte)
│   └── 09.6.6 Efecto Visual de Equipo
│
└── 💰 09.7 INYECCIÓN DE CAPITAL (Pago Real)
    ├── 09.7.1 Packs de BTC Disponibles
    ├── 09.7.2 Integración con Stripe
    ├── 09.7.3 Confirmación de Compra
    └── 09.7.4 Acreditación Instantánea

📦 CAJA 10: MONETIZACIÓN (STRIPE)

Propósito: Suscripciones, trial, pagos, webhooks.
Responsable Principal: Antigravity (Implementación)
Entregables: Integración Stripe, páginas de pago, manejo de suscripción

ÍNDICE DE SUBCAJAS
CopyCAJA 10: MONETIZACIÓN
│
├── 💳 10.1 CONFIGURACIÓN DE STRIPE
│   ├── 10.1.1 Productos y Precios
│   ├── 10.1.2 Webhook Endpoints
│   ├── 10.1.3 Customer Portal
│   └── 10.1.4 Test Mode vs Live Mode
│
├── 💳 10.2 MODELO DE SUSCRIPCIÓN
│   ├── 10.2.1 Trial: 5 Días (Termina Día 6)
│   ├── 10.2.2 Plan Mensual: $19.90 USD
│   ├── 10.2.3 Plan Anual: $140 USD (40% descuento)
│   └── 10.2.4 Features por Tier (único tier)
│
├── 💳 10.3 FLUJO DE TRIAL
│   ├── 10.3.1 Inicio Automático al Registrar
│   ├── 10.3.2 Contador de Días Restantes
│   ├── 10.3.3 Notificaciones de Expiración
│   └── 10.3.4 Bloqueo al Expirar
│
├── 💳 10.4 CHECKOUT
│   ├── 10.4.1 Server Action: createCheckoutSession
│   ├── 10.4.2 Página de Checkout (Stripe Hosted)
│   ├── 10.4.3 Success Page
│   ├── 10.4.4 Cancel Page
│   └── 10.4.5 Manejo de Errores
│
├── 💳 10.5 WEBHOOKS
│   ├── 10.5.1 Route: /api/webhooks/stripe
│   ├── 10.5.2 Event: checkout.session.completed
│   ├── 10.5.3 Event: invoice.paid
│   ├── 10.5.4 Event: invoice.payment_failed
│   ├── 10.5.5 Event: customer.subscription.deleted
│   ├── 10.5.6 Verificación de Signature
│   └── 10.5.7 Idempotencia de Eventos
│
├── 💳 10.6 MODO LIMBO
│   ├── 10.6.1 Trigger: Trial Expirado sin Pago
│   ├── 10.6.2 Trigger: Pago Fallido
│   ├── 10.6.3 UI de Limbo
│   ├── 10.6.4 Degradación de Salud en Limbo
│   ├── 10.6.5 Límite de Tiempo (30 días)
│   └── 10.6.6 Reactivación
│
├── 💳 10.7 PÁGINA: PRICING/BLOCKED
│   ├── 10.7.1 /blocked/page.tsx
│   ├── 10.7.2 Mensaje de Trial Expirado
│   ├── 10.7.3 Preview del Avatar Actual
│   ├── 10.7.4 Botones de Suscripción
│   └── 10.7.5 FAQ de Pagos
│
└── 💳 10.8 GESTIÓN DE SUSCRIPCIÓN
    ├── 10.8.1 Portal de Cliente Stripe
    ├── 10.8.2 Cancelación
    ├── 10.8.3 Reactivación
    ├── 10.8.4 Cambio de Plan
    └── 10.8.5 Historial de Facturas

📦 CAJA 11: NOTIFICACIONES Y REALTIME

Propósito: Sistema de comunicación con el usuario.
Responsable Principal: Antigravity (Implementación)
Entregables: Push notifications, emails, realtime updates

ÍNDICE DE SUBCAJAS
CopyCAJA 11: NOTIFICACIONES Y REALTIME
│
├── 🔔 11.1 NOTIFICACIONES IN-APP
│   ├── 11.1.1 Componente: NotificationCenter
│   ├── 11.1.2 Toast Notifications
│   ├── 11.1.3 Persistencia en DB
│   ├── 11.1.4 Estados: unread, read, dismissed
│   └── 11.1.5 Badge Counter
│
├── 🔔 11.2 PUSH NOTIFICATIONS
│   ├── 11.2.1 Configuración de FCM (Firebase)
│   ├── 11.2.2 Service Worker
│   ├── 11.2.3 Solicitud de Permisos
│   ├── 11.2.4 Almacenamiento de Tokens
│   └── 11.2.5 Envío desde Backend
│
├── 🔔 11.3 EMAIL NOTIFICATIONS
│   ├── 11.3.1 Proveedor (Resend/SendGrid)
│   ├── 11.3.2 Templates de Email
│   ├── 11.3.3 Email: Bienvenida
│   ├── 11.3.4 Email: Resumen Semanal
│   ├── 11.3.5 Email: Trial Expirando
│   ├── 11.3.6 Email: Avatar en Peligro
│   └── 11.3.7 Email: Avatar Muerto
│
├── 🔔 11.4 REALTIME (SUPABASE)
│   ├── 11.4.1 Subscripción a avatar_states
│   ├── 11.4.2 Subscripción a wallets
│   ├── 11.4.3 Subscripción a daily_tasks
│   ├── 11.4.4 Hook: useRealtimeAvatar
│   ├── 11.4.5 Hook: useRealtimeWallet
│   └── 11.4.6 Reconexión Automática
│
├── 🔔 11.5 TRIGGERS DE NOTIFICACIÓN
│   ├── 11.5.1 Tarea Completada
│   ├── 11.5.2 BTC Ganados
│   ├── 11.5.3 Subida de Nivel
│   ├── 11.5.4 Racha Alcanzada
│   ├── 11.5.5 Imagen Generada
│   ├── 11.5.6 Salud Crítica
│   ├── 11.5.7 Recordatorio de Tareas
│   └── 11.5.8 Judgement Night Cercano
│
└── 🔔 11.6 PREFERENCIAS DE USUARIO
    ├── 11.6.1 Toggle por Tipo de Notificación
    ├── 11.6.2 Horarios de No Molestar
    └── 11.6.3 Frecuencia de Emails

📦 CAJA 12: OBSERVABILIDAD Y CALIDAD

Propósito: Logging, métricas, testing, seguridad.
Responsable Principal: Claude (Diseño) + Antigravity (Implementación)
Entregables: Configuración de servicios, tests, auditoría

ÍNDICE DE SUBCAJAS
CopyCAJA 12: OBSERVABILIDAD Y CALIDAD
│
├── 📊 12.1 LOGGING ESTRUCTURADO
│   ├── 12.1.1 Configuración de Pino
│   ├── 12.1.2 Child Loggers por Dominio
│   ├── 12.1.3 Formato de Logs
│   ├── 12.1.4 Redacción de Datos Sensibles
│   └── 12.1.5 Integración con Servicio (Axiom/Logtail)
│
├── 📊 12.2 ERROR TRACKING
│   ├── 12.2.1 Configuración de Sentry
│   ├── 12.2.2 Client-side Error Boundary
│   ├── 12.2.3 Server-side Error Handling
│   ├── 12.2.4 Source Maps
│   └── 12.2.5 Alertas por Severidad
│
├── 📊 12.3 MÉTRICAS DE NEGOCIO
│   ├── 12.3.1 Configuración de PostHog/Mixpanel
│   ├── 12.3.2 Eventos de Registro
│   ├── 12.3.3 Eventos de Onboarding
│   ├── 12.3.4 Eventos de Tareas
│   ├── 12.3.5 Eventos de Pagos
│   ├── 12.3.6 Eventos de Retención
│   └── 12.3.7 Dashboard de Métricas
│
├── 📊 12.4 UPTIME MONITORING
│   ├── 12.4.1 Configuración de BetterUptime/Checkly
│   ├── 12.4.2 Health Check Endpoints
│   ├── 12.4.3 Alertas de Downtime
│   └── 12.4.4 Status Page Pública
│
├── 📊 12.5 TESTING
│   ├── 12.5.1 Jest Configuration
│   ├── 12.5.2 React Testing Library Setup
│   ├── 12.5.3 Tests Unitarios (lib/core)
│   ├── 12.5.4 Tests de Integración (DB)
│   ├── 12.5.5 Playwright Configuration
│   ├── 12.5.6 Tests E2E Críticos
│   └── 12.5.7 Coverage Reports
│
├── 📊 12.6 SEGURIDAD
│   ├── 12.6.1 OWASP Checklist
│   ├── 12.6.2 Dependabot Configuration
│   ├── 12.6.3 CodeQL Analysis
│   ├── 12.6.4 Security Headers
│   ├── 12.6.5 Rate Limiting
│   └── 12.6.6 Auditoría de RLS
│
└── 📊 12.7 PERFORMANCE
    ├── 12.7.1 Core Web Vitals Monitoring
    ├── 12.7.2 Database Query Analysis
    ├── 12.7.3 API Response Times
    ├── 12.7.4 Bundle Size Analysis
    └── 12.7.5 Image Optimization

📦 CAJA 13: LANZAMIENTO Y OPERACIONES

Propósito: Deploy a producción, monitoreo, mantenimiento.
Responsable Principal: Antigravity (Implementación)
Entregables: Configuración de producción, runbooks, documentación

ÍNDICE DE SUBCAJAS
CopyCAJA 13: LANZAMIENTO Y OPERACIONES
│
├── 🚀 13.1 PREPARACIÓN PRE-LANZAMIENTO
│   ├── 13.1.1 Checklist de Lanzamiento
│   ├── 13.1.2 Revisión de Variables de Entorno
│   ├── 13.1.3 Configuración de DNS
│   ├── 13.1.4 SSL/TLS Verificación
│   ├── 13.1.5 Backups Configurados
│   └── 13.1.6 Legal (ToS, Privacy Policy)
│
├── 🚀 13.2 DEPLOY A PRODUCCIÓN
│   ├── 13.2.1 Vercel Production Deploy
│   ├── 13.2.2 Supabase Production Config
│   ├── 13.2.3 Stripe Live Mode
│   ├── 13.2.4 Replicate Production
│   ├── 13.2.5 Redis Production
│   └── 13.2.6 Smoke Tests Post-Deploy
│
├── 🚀 13.3 MONITOREO EN PRODUCCIÓN
│   ├── 13.3.1 Dashboard de Métricas
│   ├── 13.3.2 Alertas Configuradas
│   ├── 13.3.3 On-Call Setup
│   └── 13.3.4 Incident Response Plan
│
├── 🚀 13.4 RUNBOOKS
│   ├── 13.4.1 Runbook: Deploy Manual
│   ├── 13.4.2 Runbook: Rollback
│   ├── 13.4.3 Runbook: Incident Response
│   ├── 13.4.4 Runbook: Database Migration
│   ├── 13.4.5 Runbook: Scale Up/Down
│   └── 13.4.6 Runbook: Data Recovery
│
├── 🚀 13.5 PRIMER USUARIO (METAMEN1)
│   ├── 13.5.1 Registro Personal
│   ├── 13.5.2 Dogfooding Completo
│   ├── 13.5.3 Bug Tracking Personal
│   └── 13.5.4 Iteración Basada en Uso Real
│
├── 🚀 13.6 MANTENIMIENTO
│   ├── 13.6.1 Actualización de Dependencias
│   ├── 13.6.2 Rotación de Secrets
│   ├── 13.6.3 Limpieza de Datos
│   ├── 13.6.4 Optimización de Base de Datos
│   └── 13.6.5 Feature Flag Management
│
└── 🚀 13.7 DOCUMENTACIÓN DE OPERACIONES
    ├── 13.7.1 README Actualizado
    ├── 13.7.2 CONTRIBUTING.md
    ├── 13.7.3 CHANGELOG.md
    ├── 13.7.4 API Documentation
    └── 13.7.5 User Guide (futuro)

RESUMEN DE CAJAS
Copy╔═══════════════════════════════════════════════════════════════════════════════╗
║                          MAPA DE 13 CAJAS                                     ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  📦 CAJA 01: Documentación Fundacional     → 9 subcajas (Claude)             ║
║  📦 CAJA 02: Infraestructura y DevOps      → 8 subcajas (Claude + Antigravity)║
║  📦 CAJA 03: Base de Datos y Backend       → 8 subcajas (Claude + Antigravity)║
║  📦 CAJA 04: Motor Core (Lógica Pura)      → 10 subcajas (Claude + Antigravity)║
║  📦 CAJA 05: Autenticación y Onboarding    → 7 subcajas (Antigravity)        ║
║  📦 CAJA 06: Dashboard y UI                → 9 subcajas (Antigravity)        ║
║  📦 CAJA 07: Arsenal de Herramientas       → 10 subcajas (Antigravity)       ║
║  📦 CAJA 08: IA Generativa                 → 8 subcajas (Claude + Antigravity)║
║  📦 CAJA 09: Economía y Tienda             → 7 subcajas (Antigravity)        ║
║  📦 CAJA 10: Monetización (Stripe)         → 8 subcajas (Antigravity)        ║
║  📦 CAJA 11: Notificaciones y Realtime     → 6 subcajas (Antigravity)        ║
║  📦 CAJA 12: Observabilidad y Calidad      → 7 subcajas (Claude + Antigravity)║
║  📦 CAJA 13: Lanzamiento y Operaciones     → 7 subcajas (Antigravity)        ║
║                                                                               ║
║  ════════════════════════════════════════════════════════════════════════════ ║
║  TOTAL: 13 CAJAS PRINCIPALES | 94 SUBCAJAS                                    ║
╚═══════════════════════════════════════════════════════════════════════════════╝

SIGUIENTE PASO
Operador, ahora tienes el mapa completo de las 13 cajas que componen MetaMen100.
¿Cuál caja deseas abrir primero?
Mi recomendación para un desarrollo TOP 100:
CopyORDEN ÓPTIMO DE APERTURA:

1️⃣ CAJA 01 (Documentación) → Sin esto, todo lo demás es construir sobre arena
2️⃣ CAJA 04 (Motor Core)    → La lógica debe existir antes que la UI
3️⃣ CAJA 02 (Infraestructura) → Setup del entorno
4️⃣ CAJA 03 (Base de Datos)  → Schema y funciones
5️⃣ ... (las demás en secuencia)
Cuando indiques qué caja abrir, desglosaré cada subcaja hasta el nivel de tareas atómicas con:

Archivos exactos a crear
Contenido de cada archivo
Comandos a ejecutar
Prompts para Antigravity
Criterios de éxito







