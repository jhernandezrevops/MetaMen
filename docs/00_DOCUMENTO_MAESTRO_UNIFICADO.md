# DOCUMENTO MAESTRO UNIFICADO - METAMEN100

**Versión:** 1.0  
**Fecha:** Febrero 2026  
**Estado:** Documento de Referencia Técnica Consolidada  

---

## ÍNDICE DE CONTENIDO

1. [Visión General del Sistema](#1-visión-general-del-sistema)
2. [Arquitectura Técnica](#2-arquitectura-técnica)
3. [Modelo de Datos](#3-modelo-de-datos)
4. [Sistemas Core](#4-sistemas-core)
5. [Game Design Systems](#5-game-design-systems)
6. [Flujos de Usuario](#6-flujos-de-usuario)
7. [APIs y Contratos](#7-apis-y-contratos)
8. [Seguridad](#8-seguridad)
9. [Testing](#9-testing)
10. [Trazabilidad de Origen](#10-trazabilidad-de-origen)

---

## 1. VISIÓN GENERAL DEL SISTEMA

### 1.1 Qué es METAMEN100

METAMEN100 es un **Sistema Operativo de Conducta** que transforma la autodisciplina en un juego de progresión visual. El usuario completa tareas diarias de desarrollo personal (mental, físico, productividad) y su avatar digital evoluciona visualmente para reflejar su progreso real.

**Origen:** [01_PRD.md](#) | [05_GDD.md](#)

### 1.2 Core Loop del Sistema

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CORE LOOP METAMEN100                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐          │
│   │  TAREAS  │────►│ COMPLETAR│────►│   BTC    │────►│  TIENDA  │          │
│   │  DIARIAS │     │  TAREA   │     │ GANADOS  │     │  COMPRAR │          │
│   └──────────┘     └──────────┘     └──────────┘     └──────────┘          │
│        │                                              │                     │
│        │                                              │                     │
│        ▼                                              ▼                     │
│   ┌──────────┐                                  ┌──────────┐               │
│   │ VECTORES │                                  │  ITEMS   │               │
│   │ MEJORAN  │                                  │ EQUIPADOS│               │
│   └──────────┘                                  └──────────┘               │
│        │                                              │                     │
│        └──────────────────┬───────────────────────────┘                     │
│                           ▼                                                 │
│                    ┌──────────────┐                                         │
│                    │    AVATAR    │                                         │
│                    │   EVOLUCIONA │                                         │
│                    │   (IA IMAGE) │                                         │
│                    └──────────────┘                                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.3 Pilares del Sistema

| Pilar | Descripción Técnica | Documento Origen |
|-------|---------------------|------------------|
| **Avatar Visual** | Generación diaria de imagen con IA basada en vectores | ADR-004, GDD |
| **Sistema de Vectores** | 5 dimensiones medibles que determinan apariencia | GDD Sección 3 |
| **Economía BTC** | Moneda virtual ganada por disciplina, gastada en estatus | GDD Sección 9 |
| **Judgement Night** | Proceso automatizado de evaluación diaria | GDD Sección 7 |
| **Sistema de Salud** | 10-13 corazones, muerte permanente del avatar | GDD Sección 5 |

---

## 2. ARQUITECTURA TÉCNICA

### 2.1 Stack Tecnológico Definido

**Origen:** [02_ADRs.md](#) | [03_TECH_SPEC.md](#)

```yaml
Frontend:
  Framework: Next.js 14 (App Router)
  Lenguaje: TypeScript 5.4
  Estilos: Tailwind CSS 3.4
  UI Components: shadcn/ui
  Estado: Zustand
  Queries: TanStack Query v5
  Animaciones: Framer Motion

Backend:
  Runtime: Node.js (Next.js API Routes + Server Actions)
  Base de Datos: PostgreSQL 15 (Supabase)
  ORM: Prisma
  Autenticación: Supabase Auth
  Colas: BullMQ + Redis
  Jobs: Inngest

IA/ML:
  Generación Imágenes: Google Gemini (primario), Replicate (fallback)
  Modelo: gemini-2.5-flash-image-preview
  Voz (futuro): ElevenLabs

Pagos:
  Procesador: Stripe
  Webhooks: checkout.session.completed, invoice.paid, invoice.payment_failed

Infraestructura:
  Hosting: Vercel
  Storage Imágenes: Cloudflare R2
  Email: Resend
  Monitoreo: Sentry + PostHog
```

### 2.2 Decisiones de Arquitectura (ADRs)

#### ADR-001: Framework Frontend - Next.js

**Decisión:** Next.js 14 con App Router  
**Justificación:**
- Server Components reducen JavaScript enviado al cliente
- Server Actions eliminan necesidad de API routes para mutaciones
- App Router proporciona mejor rendimiento y UX
- Integración nativa con React 18

**Alternativas rechazadas:**
- Remix: Menos maduro, menor ecosistema
- Astro: No optimizado para aplicaciones interactivas
- CRA/Vite: Sin SSR, peor SEO y performance inicial

#### ADR-002: Base de Datos - PostgreSQL + Prisma

**Decisión:** PostgreSQL 15 via Supabase con Prisma ORM  
**Justificación:**
- Datos intrínsecamente relacionales (usuarios → avatares → vectores → imágenes)
- Type safety end-to-end con Prisma Client
- Migraciones automáticas
- Row Level Security nativo en Supabase

**Alternativas rechazadas:**
- MongoDB: Modelado de relaciones complejo, sin integridad referencial
- MySQL: PostgreSQL tiene mejor soporte para JSON y arrays
- Drizzle ORM: Comunidad más pequeña, menos tooling

#### ADR-003: Autenticación - Supabase Auth

**Decisión:** Supabase Auth con JWT + RLS  
**Justificación:**
- Integración nativa con PostgreSQL
- Row Level Security a nivel de base de datos
- Sin costo adicional (incluido en Supabase)
- SDK oficial para Next.js

**Flujo de sesión:**
```
Usuario → Next.js Frontend → Supabase Auth → PostgreSQL (users)
                                    ↓
                              JWT + Cookie httpOnly
                                    ↓
                         Middleware Next.js valida JWT
                                    ↓
                         Server Actions reciben usuario autenticado
```

#### ADR-004: Generación de Imágenes - Fal.ai + Replicate

**Decisión:** Fal.ai (Flux Schnell) como primario, Replicate como fallback  
**Justificación:**
- Velocidad: ~8-15 segundos vs 15-30 de Replicate
- Costo: $0.003/imagen
- Queue management nativo
- Webhook support para notificaciones asíncronas

**Arquitectura de generación:**
```
Judgement Night → BullMQ Queue → Fal.ai API → Webhook → Supabase Storage
                                        ↓
                              Fallback: Replicate
```

#### ADR-005: Sistema de Colas - BullMQ + Redis

**Decisión:** BullMQ con Redis para jobs asíncronos  
**Colas definidas:**
- `image-generation`: Generación de imágenes de avatar
- `notifications`: Envío de push/email
- `payments`: Procesamiento de webhooks de pago
- `analytics`: Cálculos de estadísticas
- `cleanup`: Tareas de mantenimiento

**Prioridades:**
- 10: Image generation para días exitosos
- 8: Notificaciones urgentes (salud crítica)
- 5: Image generation para días fallidos
- 3: Notificaciones normales
- 1: Analytics y cleanup

#### ADR-006: Notificaciones - Web Push + Email

**Decisión:**
- Canal primario: Web Push API (OneSignal)
- Canal secundario: Email (Resend)
- Canal in-app: Supabase Realtime + UI Toast

#### ADR-007: Modelo de Suscripción - Freemium con Trial

**Decisión:**
- Trial: 5 días gratis (termina día 6)
- Mensual: $19.90 USD/mes
- Anual: $140 USD/año (40% descuento)
- Punto de conversión: Día 6 (Hito Alucín)

---

## 3. MODELO DE DATOS

### 3.1 Diagrama Entidad-Relación

**Origen:** [04_Data_Model.md](#)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DIAGRAMA ENTIDAD-RELACIÓN                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────┐       ┌──────────┐       ┌─────────────┐       ┌───────────┐  │
│  │  users  │◄─────►│ avatars  │◄─────►│avatar_vectors│      │avatar_images│
│  └────┬────┘       └────┬─────┘       └─────────────┘       └───────────┘  │
│       │                 │                                                   │
│       │                 │         ┌─────────────┐       ┌─────────────┐    │
│       │                 └────────►│ daily_logs  │       │  inventory  │    │
│       │                           └─────────────┘       └─────────────┘    │
│       │                                                                     │
│       │         ┌──────────────┐      ┌──────────────┐      ┌───────────┐  │
│       └────────►│subscriptions │      │   payments   │      │  wallet   │  │
│                 └──────────────┘      └──────────────┘      └───────────┘  │
│                                                                             │
│  ┌──────────────────┐      ┌──────────────┐      ┌──────────────────┐      │
│  │ task_definitions │◄────►│task_completions│    │  journal_entries │      │
│  └──────────────────┘      └──────────────┘      └──────────────────┘      │
│                                                                             │
│  ┌──────────────┐      ┌──────────────┐                                    │
│  │  shop_items  │◄────►│inventory_items│                                   │
│  └──────────────┘      └──────────────┘                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Tablas Principales

#### 3.2.1 users

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(50) UNIQUE,
    full_name VARCHAR(100),
    avatar_url TEXT,
    supabase_user_id UUID NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login_at TIMESTAMPTZ
);
```

**Reglas:**
- `supabase_user_id` vincula con auth de Supabase
- `username` auto-generado como "METAMEN-XXXX" al registrar
- Soft delete no implementado (datos retenidos por compliance)

#### 3.2.2 avatars

```sql
CREATE TYPE avatar_archetype AS ENUM ('rastas', 'muscles', 'pecas', 'grenas', 'rubio', 'lic');
CREATE TYPE avatar_status AS ENUM ('active', 'dead', 'completed');

CREATE TABLE avatars (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    name VARCHAR(100),
    archetype avatar_archetype NOT NULL,
    current_day INTEGER NOT NULL DEFAULT 1,
    current_level INTEGER NOT NULL DEFAULT 1,
    streak_days INTEGER NOT NULL DEFAULT 0,
    health_points INTEGER NOT NULL DEFAULT 10,
    max_health_points INTEGER NOT NULL DEFAULT 10,
    status avatar_status NOT NULL DEFAULT 'active',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    died_at TIMESTAMPTZ,
    
    CONSTRAINT avatars_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT avatars_current_day_range CHECK (current_day >= 1 AND current_day <= 100),
    CONSTRAINT avatars_current_level_range CHECK (current_level >= 1 AND current_level <= 13),
    CONSTRAINT avatars_health_points_non_negative CHECK (health_points >= 0)
);
```

**Reglas:**
- Un usuario solo puede tener un avatar `active` a la vez
- `current_day` avanza 1 cada Judgement Night exitoso
- `health_points` inicia en 10, máximo expandible a 13 (post-game)
- Muerte: cuando `health_points` = 0

#### 3.2.3 avatar_vectors

```sql
CREATE TABLE avatar_vectors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    avatar_id UUID NOT NULL UNIQUE,
    aura_level DECIMAL(4,2) NOT NULL DEFAULT 1.00,
    face_level DECIMAL(4,2) NOT NULL DEFAULT 1.00,
    wealth_level DECIMAL(4,2) NOT NULL DEFAULT 1.00,
    muscle_level DECIMAL(4,2) NOT NULL DEFAULT 1.00,
    fat_level DECIMAL(4,2) NOT NULL DEFAULT 13.00,
    env_level INTEGER NOT NULL DEFAULT 1,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    CONSTRAINT avatar_vectors_avatar_id_fk FOREIGN KEY (avatar_id) REFERENCES avatars(id) ON DELETE CASCADE,
    CONSTRAINT avatar_vectors_aura_range CHECK (aura_level >= 1.00 AND aura_level <= 13.00),
    CONSTRAINT avatar_vectors_face_range CHECK (face_level >= 1.00 AND face_level <= 13.00),
    CONSTRAINT avatar_vectors_wealth_range CHECK (wealth_level >= 1.00 AND wealth_level <= 13.00),
    CONSTRAINT avatar_vectors_muscle_range CHECK (muscle_level >= 1.00 AND muscle_level <= 13.00),
    CONSTRAINT avatar_vectors_fat_range CHECK (fat_level >= 1.00 AND fat_level <= 13.00),
    CONSTRAINT avatar_vectors_env_range CHECK (env_level >= 1 AND env_level <= 13)
);
```

**Reglas:**
- Relación 1:1 con avatars
- `fat_level` inicia en 13 (máxima grasa), disminuye con ejercicio
- `muscle_level` inicia en 1, aumenta con entrenamiento
- `env_level` determina el fondo/escenario del avatar

#### 3.2.4 avatar_images

```sql
CREATE TYPE image_status AS ENUM ('pending', 'processing', 'completed', 'failed');

CREATE TABLE avatar_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    avatar_id UUID NOT NULL,
    day_number INTEGER NOT NULL,
    image_url TEXT,
    thumbnail_url TEXT,
    status image_status NOT NULL DEFAULT 'pending',
    prompt TEXT NOT NULL,
    generation_time INTEGER,
    error_message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    
    CONSTRAINT avatar_images_avatar_day_unique UNIQUE (avatar_id, day_number),
    CONSTRAINT avatar_images_avatar_id_fk FOREIGN KEY (avatar_id) REFERENCES avatars(id) ON DELETE CASCADE,
    CONSTRAINT avatar_images_day_number_range CHECK (day_number >= 1 AND day_number <= 100)
);
```

**Reglas:**
- Una imagen por día por avatar
- `prompt` almacena el prompt completo enviado a la IA
- `generation_time` en segundos, para métricas

#### 3.2.5 task_definitions

```sql
CREATE TYPE task_archetype AS ENUM ('mental', 'cara', 'productividad', 'fisico');
CREATE TYPE task_frequency AS ENUM ('daily', 'weekly', 'custom');

CREATE TABLE task_definitions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    archetype task_archetype NOT NULL,
    category VARCHAR(50) NOT NULL,
    btc_reward INTEGER NOT NULL DEFAULT 0,
    xp_reward INTEGER NOT NULL DEFAULT 0,
    aura_impact DECIMAL(4,2) DEFAULT 0.00,
    face_impact DECIMAL(4,2) DEFAULT 0.00,
    wealth_impact DECIMAL(4,2) DEFAULT 0.00,
    muscle_impact DECIMAL(4,2) DEFAULT 0.00,
    fat_impact DECIMAL(4,2) DEFAULT 0.00,
    min_duration INTEGER,
    frequency task_frequency NOT NULL DEFAULT 'daily',
    max_per_day INTEGER NOT NULL DEFAULT 1,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

**Reglas:**
- `slug` para referencia única en código
- `category` permite subcategorías (ej: 'meditacion', 'gym', 'journal')
- `min_duration` en minutos, para validación de completado

#### 3.2.6 task_completions

```sql
CREATE TABLE task_completions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    task_id UUID NOT NULL,
    avatar_id UUID,
    completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    duration INTEGER,
    notes TEXT,
    metadata JSONB,
    btc_earned INTEGER NOT NULL DEFAULT 0,
    xp_earned INTEGER NOT NULL DEFAULT 0,
    
    CONSTRAINT task_completions_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT task_completions_task_id_fk FOREIGN KEY (task_id) REFERENCES task_definitions(id) ON DELETE RESTRICT,
    CONSTRAINT task_completions_avatar_id_fk FOREIGN KEY (avatar_id) REFERENCES avatars(id) ON DELETE SET NULL
);
```

**Reglas:**
- `metadata` almacena datos específicos (ej: pesos del gym, páginas leídas)
- `duration` en minutos reales, para análisis
- Índice compuesto: `(user_id, completed_at)` para consultas frecuentes

#### 3.2.7 shop_items

```sql
CREATE TYPE shop_category AS ENUM ('armadura', 'accesorios', 'vehiculos', 'propiedades', 'companeras', 'mascotas', 'powerups');

CREATE TABLE shop_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    category shop_category NOT NULL,
    subcategory VARCHAR(50),
    price_btc INTEGER NOT NULL DEFAULT 0,
    required_level INTEGER NOT NULL DEFAULT 1,
    required_aura DECIMAL(4,2),
    required_face DECIMAL(4,2),
    required_wealth DECIMAL(4,2),
    required_fat_max DECIMAL(4,2),
    image_url TEXT,
    ai_token TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_limited BOOLEAN NOT NULL DEFAULT false,
    limited_until TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

**Reglas:**
- `ai_token` se inyecta en prompts de generación de imagen
- `required_fat_max`: grasa máxima permitida para comprar (coherencia estética)
- Gating por nivel y vectores

#### 3.2.8 inventory_items

```sql
CREATE TABLE inventory_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    shop_item_id UUID NOT NULL,
    is_equipped BOOLEAN NOT NULL DEFAULT false,
    is_locked BOOLEAN NOT NULL DEFAULT false,
    purchased_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    equipped_at TIMESTAMPTZ,
    
    CONSTRAINT inventory_items_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT inventory_items_shop_item_id_fk FOREIGN KEY (shop_item_id) REFERENCES shop_items(id) ON DELETE RESTRICT,
    CONSTRAINT inventory_items_unique_per_user_item UNIQUE (user_id, shop_item_id)
);
```

**Reglas:**
- `is_locked`: bloqueado post-muerte hasta recuperar nivel
- Un item por usuario (no duplicados)

### 3.3 Índices Clave

```sql
-- Índices para consultas frecuentes
CREATE INDEX idx_avatars_user_status ON avatars(user_id, status);
CREATE INDEX idx_avatar_vectors_avatar_id ON avatar_vectors(avatar_id);
CREATE INDEX idx_avatar_images_avatar_day ON avatar_images(avatar_id, day_number);
CREATE INDEX idx_task_completions_user_date ON task_completions(user_id, completed_at);
CREATE INDEX idx_daily_logs_avatar_result ON daily_logs(avatar_id, result, day_number DESC);
CREATE INDEX idx_inventory_items_user ON inventory_items(user_id);
CREATE INDEX idx_shop_items_category_price ON shop_items(category, price_btc) WHERE is_active = true;
```

### 3.4 Row Level Security (RLS)

**Políticas implementadas:**

| Tabla | Políticas | Descripción |
|-------|-----------|-------------|
| users | 3 | SELECT/UPDATE propio, INSERT service_role |
| avatars | 4 | CRUD propio avatares |
| avatar_vectors | 2 | Ver/actualizar propios |
| avatar_images | 1 | Solo propias imágenes |
| task_completions | 2 | CRUD propios |
| inventory_items | 2 | CRUD propio inventario |
| journal_entries | 5 | CRUD propias entries |
| shop_items | 2 | Read público, Write admin |
| queue_jobs | 1 | Solo service_role |

**Ejemplo de política RLS:**
```sql
CREATE POLICY "avatars_select_own"
    ON avatars FOR SELECT
    USING (EXISTS (
        SELECT 1 FROM users 
        WHERE users.id = avatars.user_id 
        AND users.supabase_user_id = auth.uid()
    ));
```

---

## 4. SISTEMAS CORE

### 4.1 Sistema de Vectores

**Origen:** [05_GDD.md](#) Sección 3

#### 4.1.1 Definición de Vectores

| Vector | Nombre | Descripción | Afectado por |
|--------|--------|-------------|--------------|
| `aura_lvl` | AURA | Presencia mental, disciplina | Meditación, duchas frías, lectura |
| `face_lvl` | JAWLINE | Atractivo facial, mandíbula | Postura, ejercicios faciales, Kegel |
| `wealth_lvl` | WEALTH | Estatus económico | Journal, skill learning, focus work |
| `muscle_lvl` | PHYSIQUE (músculo) | Composición corporal | Entrenamiento fuerza, hidratación |
| `fat_lvl` | PHYSIQUE (grasa) | Porcentaje de grasa | Cardio, dieta implícita |
| `env_lvl` | ENV | Entorno de vida | Nivel general, propiedades compradas |

#### 4.1.2 Rangos de Vectores

```
Rango: 1.00 - 13.00

1-3:    Nivel básico (Indigente → Arrimado → Alucín)
4-6:    Nivel intermedio (Chalán → Godín → Acomodado)
7-9:    Nivel avanzado (Pudiente → Millonario → Magnate)
10-13:  Nivel élite (Semi-Dios → Inmortal)
```

#### 4.1.3 Impacto de Tareas en Vectores

| Tarea | Vector | Impacto | Frecuencia |
|-------|--------|---------|------------|
| Meditación | aura_lvl | +0.05 | 7x/semana |
| Ducha fría | aura_lvl | +0.03 | 3x/semana |
| Lectura | aura_lvl | +0.03 | 7x/semana |
| Postura | face_lvl | +0.03 | 3x/semana |
| Ejercicios faciales | face_lvl | +0.04 | 3x/semana |
| Kegel | face_lvl | +0.02 | 10x/semana |
| Journal | wealth_lvl | +0.03 | 6x/semana |
| Skill learning | wealth_lvl | +0.05/hora | 5h/semana |
| Focus work | wealth_lvl | +0.02/hora | 15h/semana |
| Entrenamiento fuerza | muscle_lvl | +0.05 | 5x/semana |
| Cardio | fat_lvl | -0.05 | 3x/semana |
| Hidratación | muscle_lvl/fat_lvl | +0.01/-0.01 | 7x/semana |

### 4.2 Sistema de Salud (Corazones)

**Origen:** [05_GDD.md](#) Sección 5

#### 4.2.1 Mecánica Base

```
MÁXIMO INICIAL:     10 corazones
MÁXIMO EXPANDIDO:   13 corazones (post-game, niveles 11-13)
CONDICIÓN CRÍTICA:  Al llegar a 0 = MUERTE DEL AVATAR
```

#### 4.2.2 Pérdida de Salud

| Condición | Pérdida | Descripción |
|-----------|---------|-------------|
| Judgement Night < 80% | -1 corazón | Día fallido |
| Judgement Night 0% | -2 corazones | Día completamente fallido |
| Modo Limbo (3 días) | -1 corazón | Degradación por suscripción expirada |
| Ruptura de racha 15+ días | -2 corazones | Impacto emocional |

#### 4.2.3 Recuperación de Salud

| Condición | Ganancia | Restricción |
|-----------|----------|-------------|
| Día 100% completado | +1 corazón | Si < máximo |
| Racha de 7 días | +1 corazón | Si < máximo |
| Botiquín de Disciplina | +1 corazón | Máximo 1 por semana, compra en tienda |
| Subida de nivel | +1 corazón | Automático |

#### 4.2.4 Estados de Salud

| Estado | Corazones | Efecto UI | Efecto Avatar |
|--------|-----------|-----------|---------------|
| Saludable | 8-10/13 | Normal | Postura perfecta, brillo saludable |
| Herido | 4-7 | Borde amarillo | Hombros ligeramente caídos |
| Crítico | 1-3 | Rojo pulsante | Postura encorvada, vendajes visibles |
| Muerte | 0 | Pantalla muerte | Avatar en el suelo, paleta gris |

### 4.3 Sistema de Racha (Streak)

**Origen:** [05_GDD.md](#) Sección 6

#### 4.3.1 Definición de Día Exitoso

> **Día exitoso = Completar ≥ 80% de las tareas del protocolo**

#### 4.3.2 Multiplicadores de BTC por Racha

| Días | Multiplicador | Bono Adicional | Nombre Fase |
|------|---------------|----------------|-------------|
| 0-6 | x1.0 (base) | - | Despertar |
| 7-13 | x1.1 | - | Validación |
| 14-20 | x1.2 | - | Consolidación |
| 21-29 | x1.3 | - | Momentum |
| 30-59 | x1.5 | +1,500 BTC + Badge | Estado de Flujo |
| 60-89 | x1.75 | +3,000 BTC + Item | Círculo de Élite |
| 90+ | x2.0 | +5,000 BTC + Aura | Aura de Inmortalidad |

#### 4.3.3 Ruptura de Racha

**Condición:** Completar < 80% de tareas en un día

**Consecuencias:**
1. Contador de racha resetea a 0
2. Multiplicador vuelve a x1.0
3. Pérdida de 1 corazón de salud
4. Degradación inmediata de 0.5 puntos en AURA
5. Animación de "racha rota" con efecto de cristal quebrándose

### 4.4 Judgement Night (Cierre del Día)

**Origen:** [05_GDD.md](#) Sección 7

#### 4.4.1 Timing

| Aspecto | Especificación |
|---------|----------------|
| Hora de ejecución | 00:00 hora local del usuario |
| Base de zona horaria | Perfil del usuario (configurable) |
| Mecanismo | Job programado (cron via Inngest) |
| Duración | 30-60 segundos máximo |

#### 4.4.2 Proceso Completo

```
PASO 1: OBTENER DATOS
• Obtener tareas del día del usuario
• Calcular tareas completadas vs. totales

PASO 2: CALCULAR COMPLETION RATE
completion_rate = (tareas_completadas / tareas_totales) × 100

PASO 3: DETERMINAR RESULTADO
• SUCCESS:   100% completado
• PARTIAL:   80-99% completado
• FAILED:    < 80% completado
• DEATH:     FAILED + health_points = 0

PASO 4: APLICAR CAMBIOS DE SALUD
• SUCCESS/PARTIAL: Sin cambio
• FAILED: -1 corazón
• FAILED 0%: -2 corazones

PASO 5: ACTUALIZAR RACHA
• SUCCESS/PARTIAL: +1 día de racha
• FAILED: Reset a 0

PASO 6: APLICAR DECAY BIOLÓGICO
• Sin cardio: fat_lvl + 0.02
• Sin fuerza: muscle_lvl - 0.02
• Sin meditación: aura_lvl - 0.01

PASO 7: AVANZAR DÍA
• current_day += 1
• Verificar si se alcanzó nuevo nivel

PASO 8: ENCOLAR GENERACIÓN DE IMAGEN
• Crear job de generación de imagen
• Prioridad basada en resultado del día

PASO 9: CREAR LOG DEL DÍA
• Registrar métricas, cambios, resultado

PASO 10: ENVIAR NOTIFICACIONES
• Notificar resultado al usuario
```

#### 4.4.3 Resultados Posibles

| Resultado | Condición | Salud | Racha | Imagen | BTC |
|-----------|-----------|-------|-------|--------|-----|
| SUCCESS | 100% | Sin cambio | +1 | Prioridad ALTA | +50 |
| PARTIAL | 80-99% | Sin cambio | +1 | Prioridad NORMAL | 0 |
| FAILED | < 80% | -1 | Reset 0 | Prioridad BAJA | 0 |
| FAILED 0% | 0% | -2 | Reset 0 | Prioridad BAJA | 0 |

### 4.5 Muerte y Resurrección

**Origen:** [05_GDD.md](#) Sección 8

#### 4.5.1 Qué SE RESETEA

| Vector | Valor Antes | Valor Después |
|--------|-------------|---------------|
| fat_lvl | X | 13.00 (máxima grasa) |
| muscle_lvl | X | 1.00 (mínimo músculo) |
| health_points | 0 | 10 (salud completa) |
| streak_days | X | 0 |
| current_day | X | 1 (reinicio del protocolo) |
| current_level | X | 1 (Indigente) |

**BTC perdidos:** 50% de los Bitcoins acumulados

#### 4.5.2 Qué se CONSERVA

| Vector | Valor | Razón |
|--------|-------|-------|
| aura_lvl | X | Progreso mental (disciplina interna) |
| face_lvl | X | Progreso facial (hábitos de cuidado) |
| wealth_lvl | X | Progreso productivo (conocimiento) |
| env_lvl | X - 3 | Parcialmente (-3 niveles de entorno) |
| BTC | X × 0.5 | 50% de Bitcoins |
| Inventario | X | Items comprados (pero bloqueados) |
| Historial | X | Estadísticas y logros |

#### 4.5.3 Bloqueo de Items Post-Muerte

Los items no se pierden, pero quedan **BLOQUEADOS** hasta que el usuario recupere el nivel necesario.

**Ejemplo:**
- Usuario muere con nivel 7
- Tenía comprado: Reloj de lujo (req. nivel 7)
- Tras muerte: Reloj aparece como "BLOQUEADO - Requiere Nivel 7"
- Al alcanzar nivel 7 nuevamente: Reloj se desbloquea automáticamente

### 4.6 Economía BTC

**Origen:** [05_GDD.md](#) Sección 9

#### 4.6.1 Fuentes de BTC

**Recompensas por Tarea:**

| Arquetipo | Tarea | Recompensa | Frecuencia |
|-----------|-------|------------|------------|
| Mental | Meditación | 15 BTC | 7x/semana |
| Mental | Ducha fría | 20 BTC | 3x/semana |
| Mental | Lectura | 15 BTC | 7x/semana |
| Mental | Despertar temprano | 10 BTC | 7x/semana |
| Cara | Postura | 15 BTC | 3x/semana |
| Cara | Ejercicios faciales | 15 BTC | 3x/semana |
| Cara | Kegel | 10 BTC | 10x/semana |
| Productividad | Journal | 20 BTC | 6x/semana |
| Productividad | Skill learning | 25 BTC/hora | 5h/semana |
| Productividad | Focus work | 20 BTC/hora | 15h/semana |
| Físico | Entrenamiento fuerza | 30 BTC | 5x/semana |
| Físico | Cardio | 25 BTC | 3x/semana |
| Físico | Hidratación | 10 BTC | 7x/semana |

**Bonos Adicionales:**

| Bono | Condición | Recompensa |
|------|-----------|------------|
| Día perfecto | 100% tareas | +50 BTC |
| Subida de nivel | Alcanzar nuevo nivel | +100 × nivel |
| Racha 7 días | 7 días consecutivos | +500 BTC |
| Racha 14 días | 14 días consecutivos | +1,000 BTC |
| Racha 30 días | 30 días consecutivos | +1,500 BTC |
| Racha 60 días | 60 días consecutivos | +3,000 BTC |

#### 4.6.2 Usos de BTC

| Uso | Descripción |
|-----|-------------|
| Comprar items en tienda | Ropa, accesorios, vehículos, propiedades |
| Escudos de Consistencia | Proteger racha de 1 día de fallo |
| Botiquines de Corazones | Recuperar 1 corazón de salud |
| Resurrección Inmediata | Reset de corazones tras muerte |

#### 4.6.3 Anti-Farming

| Regla | Descripción |
|-------|-------------|
| Tareas únicas | No se pueden completar múltiples veces |
| Focus Work límite | 4h para pago completo (50% después) |
| Cooldown fuerza | 4h entre sesiones de fuerza |
| Verificación tiempo | Tiempo mínimo en herramientas |

### 4.7 Sistema de Niveles

**Origen:** [05_GDD.md](#) Sección 4

| Nivel | Título | Requisito | Entorno Visual |
|-------|--------|-----------|----------------|
| 1 | INDIGENTE | Inicio | Callejón oscuro |
| 2 | ARRIMADO | Día 10 completado | Cuarto de servicio |
| 3 | ALUCÍN | Día 25 completado | Departamento básico |
| 4 | CHALÁN | Día 40 completado | Departamento decente |
| 5 | GODÍN | Día 55 completado | Oficina moderna |
| 6 | ACOMODADO | Día 70 completado | Departamento de lujo |
| 7 | PUDIENTE | Día 80 completado | Casa moderna |
| 8 | MILLONARIO | Día 90 completado | Mansión |
| 9 | MAGNATE | Día 95 completado | Penthouse de élite |
| 10 | SEMI-DIOS | Día 100 completado | Palacio/Ciudadela |
| 11-13 | INMORTAL | Post-game | Reino divino |

---

## 5. GAME DESIGN SYSTEMS

### 5.1 Arquetipos de Avatar

**Origen:** [05_GDD.md](#) Sección 4

| # | Arquetipo | Identity Anchor (Pelo) | Transformación |
|---|-----------|------------------------|----------------|
| 1 | RASTAS | brown dreadlocks, thick locks | Gamer → CEO |
| 2 | MUSCLES | bald, shaved head | Matón → Fit |
| 3 | PECAS | curly red-brown hair, freckles | Nerd → Tech |
| 4 | GREÑAS | balding with long hair in back | Rocker → Prod |
| 5 | RUBIO | blonde wavy hair, styled back | Galán → Model |
| 6 | LIC | black hair, receding hairline | Exec → Owner |

### 5.2 Protocolo de 100 Días

**Origen:** [05_GDD.md](#) Sección 10

| Fase | Días | Niveles | Foco |
|------|------|---------|------|
| Despertar | 1-25 | 1-4 | Establecer hábitos básicos |
| Construcción | 26-50 | 5-6 | Intensificar esfuerzo |
| Transformación | 51-75 | 7-8 | Resultados visibles |
| Maestría | 76-100 | 9-10 | Consolidación y trascendencia |

### 5.3 Arsenal de Herramientas

**Origen:** [05_GDD.md](#) Sección 11

| # | Herramienta | Vector | Función |
|---|-------------|--------|---------|
| 1 | Biblioteca de Poder | AURA | Lectura gamificada |
| 2 | Templo del Hierro | PHYSIQUE | Gym tracker |
| 3 | Cámara de Meditación | AURA | Meditación guiada |
| 4 | Bitácora de Guerra | WEALTH | Journal personal |
| 5 | Vitalidad Sexual | JAWLINE | Ejercicios Kegel |
| 6 | Escultor Facial | JAWLINE | Yoga facial |
| 7 | Crea tu Hipnosis | AURA | Audio afirmaciones IA [PREMIUM] |
| 8 | Movilidad Táctica | JAWLINE | Stretching y postura |
| 9 | Focus Chamber | WEALTH | Pomodoro con música |

### 5.4 Tienda de Estatus

**Origen:** [05_GDD.md](#) Sección 12

#### Categorías de Items

| Categoría | Descripción | Impacto Visual |
|-----------|-------------|----------------|
| ARMADURA | Ropa y vestimenta | Cuerpo del avatar |
| ACCESORIOS | Relojes, cadenas, lentes | Detalles del avatar |
| VEHÍCULOS | Bicis, motos, autos, jets | Fondo del avatar |
| PROPIEDADES | Cuartos, depas, mansiones | Fondo del avatar |
| COMPAÑERAS | Acompañantes | Junto al avatar |
| MASCOTAS | Animales de compañía | Junto al avatar |
| POWER-UPS | Escudos, botiquines | Efectos temporales |

#### Sistema de Gating

| Tipo | Descripción |
|------|-------------|
| Gating por Nivel | item.level_required <= user.current_level |
| Gating por Vector | Ej: Joyería requiere fat_lvl < 5 |
| Gating por Exclusividad | Items limitados por tiempo/logros |
| Gating por Racha | Algunos items requieren racha mínima |

### 5.5 Suscripción y Limbo

**Origen:** [05_GDD.md](#) Sección 13

#### Modelo de Suscripción

| Plan | Precio | Duración |
|------|--------|----------|
| Trial | Gratis | 5 días (termina día 6) |
| Mensual | $19.90 USD | 1 mes |
| Anual | $140 USD | 1 año (40% descuento) |

#### Modo Limbo

**Trigger:** Trial expirado sin pago O pago fallido

**Características:**
- Acceso: Solo lectura (ver progreso, no interactuar)
- Degradación: -1 corazón cada 3 días
- Límite: 30 días máximo en Limbo
- Avatar: Se vuelve gris, encorvado, degradado

---

## 6. FLUJOS DE USUARIO

### 6.1 Onboarding

**Origen:** [01_PRD.md](#) Sección 3.2

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FLUJO DE ONBOARDING                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  STEP 1: REGISTRO                                                           │
│  • Email + password                                                         │
│  • Nickname auto-generado: "METAMEN-XXXX"                                   │
│  • Crear registros: users, wallet, subscription (trial)                     │
│                                                                             │
│  STEP 2: SELECCIÓN DE ARQUETIPO                                             │
│  • 6 arquetipos disponibles                                                 │
│  • Preview visual de cada uno                                               │
│  • Lore y trasfondo del personaje                                           │
│  • Confirmación con animación                                               │
│                                                                             │
│  STEP 3: TUTORIAL DE VECTORES                                               │
│  • Explicación de los 5 vectores                                            │
│  • Cómo las tareas afectan cada vector                                      │
│  • Visualización de estado inicial (todos en nivel 1)                       │
│                                                                             │
│  STEP 4: JURAMENTO                                                          │
│  • Ceremonia de compromiso                                                  │
│  • Mantener presionado botón por 3 segundos                                 │
│  • Texto del juramento con resaltado palabra por palabra                    │
│                                                                             │
│  STEP 5: CONFIGURACIÓN DE NOTIFICACIONES                                    │
│  • Toggle notificaciones push                                               │
│  • Hora de despertar                                                        │
│  • Frecuencia de recordatorios                                              │
│                                                                             │
│  → REDIRECCIÓN A DASHBOARD                                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Dashboard Principal

**Origen:** [01_PRD.md](#) Sección 3.3

#### Elementos del Dashboard

| Elemento | Descripción | Origen de Datos |
|----------|-------------|-----------------|
| Avatar | Imagen generada por IA centrada | avatar_images |
| Barra de Salud | Corazones (10-13 máximo) | avatars.health_points |
| Balance BTC | Bitcoins acumulados | wallets.balance |
| Nivel y Título | Nivel actual (1-10+) | avatars.current_level |
| Racha Actual | Días consecutivos exitosos | avatars.streak_days |
| Time Matrix | Calendario 10×10 de 100 días | daily_logs |
| Countdown | Tiempo hasta Judgement Night | Calculado |

#### Estados del Avatar

| Estado | Indicador | Descripción |
|--------|-----------|-------------|
| Normal | Sin indicador | Avatar actualizado |
| Nuevo | Badge "NUEVO" | Imagen generada desde última visita |
| Generando | Spinner/Loading | Procesando nueva imagen |
| Error | Icono de alerta | Fallo en generación |

### 6.3 Flujo de Tareas

**Origen:** [01_PRD.md](#) Sección 3.4

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FLUJO DE TAREAS                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. VER TAREAS DEL DÍA                                                      │
│     • Lista agrupada por arquetipo                                          │
│     • Nombre, icono, recompensa BTC, vector afectado                        │
│     • Estado: pendiente/completada/fallida                                  │
│                                                                             │
│  2. COMPLETAR TAREA                                                         │
│     • Click en checkbox/botón                                               │
│     • Diálogo de confirmación                                               │
│     • Opción: usar herramienta integrada o confirmar manual                 │
│                                                                             │
│  3. RECOMPENSAS APLICADAS                                                   │
│     • BTC ganados (animación)                                               │
│     • Actualización de vectores                                             │
│     • Animación de celebración                                              │
│                                                                             │
│  4. VALIDACIONES                                                            │
│     • No se puede completar 2 veces el mismo día                            │
│     • Algunas tareas requieren tiempo mínimo                                │
│     • Tareas de herramientas requieren uso de la herramienta                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.4 Flujo de Compra

**Origen:** [01_PRD.md](#) Sección 3.6

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FLUJO DE COMPRA                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. EXPLORAR CATÁLOGO                                                       │
│     • Grid de items organizados por categoría                               │
│     • Filtros: categoría, rango de precio, nivel requerido                  │
│     • Items bloqueados aparecen gris/opacos                                 │
│                                                                             │
│  2. VER DETALLE                                                             │
│     • Imagen grande, nombre, descripción                                    │
│     • Precio en BTC, nivel requerido                                        │
│     • Gating adicional (ej: "Requiere fat_lvl < 5")                         │
│     • Preview de cómo se vería en avatar                                    │
│                                                                             │
│  3. COMPRAR                                                                 │
│     • Confirmación con balance actual y restante                            │
│     • Validación: saldo suficiente, cumple requisitos                       │
│     • Animación de compra exitosa                                           │
│     • Item añadido a inventario y equipado automáticamente                  │
│                                                                             │
│  4. ERRORES MANEJADOS                                                       │
│     • "Saldo insuficiente. Te faltan X BTC."                                │
│     • "No cumples el nivel requerido (Nivel Y necesario)."                  │
│     • "No cumples los requisitos de vector."                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. APIs Y CONTRATOS

### 7.1 Server Actions - Formato Estándar

**Origen:** [03_TECH_SPEC.md](#) Sección 4.1

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

### 7.2 Auth Actions

#### auth/register

```typescript
// Input
interface RegisterInput {
  email: string;           // email válido
  password: string;        // min 8 chars, 1 mayúscula, 1 minúscula, 1 número
  passwordConfirmation: string;
  termsAccepted: boolean;
  privacyAccepted: boolean;
}

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
```

#### auth/login

```typescript
// Input
interface LoginInput {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// Output Success
interface LoginSuccess {
  userId: string;
  email: string;
  nickname: string;
  subscriptionStatus: 'trial' | 'active' | 'limbo';
  onboardingCompleted: boolean;
}
```

### 7.3 Task Actions

#### tasks/getTodayTasks

```typescript
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
  toolUrl?: string;
}
```

#### tasks/completeTask

```typescript
// Input
interface CompleteTaskInput {
  taskId: string;
  idempotencyKey: string;  // UUID para prevenir duplicados
  duration?: number;         // minutos reales
  notes?: string;
}

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
```

### 7.4 Store Actions

#### store/purchaseItem

```typescript
// Input
interface PurchaseItemInput {
  itemId: string;
  idempotencyKey: string;
}

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
}
```

### 7.5 Webhooks

#### Stripe Webhooks

| Evento | Acción |
|--------|--------|
| `checkout.session.completed` | Crear suscripción |
| `invoice.paid` | Extender suscripción |
| `invoice.payment_failed` | Marcar past_due |
| `customer.subscription.deleted` | Cancelar suscripción |

---

## 8. SEGURIDAD

### 8.1 Requisitos de Seguridad

**Origen:** [09_SECURITY_SPEC.md](#)

| ID | Requisito | Implementación |
|----|-----------|----------------|
| SEC-001 | Autenticación en rutas protegidas | JWT tokens con Supabase Auth |
| SEC-002 | Validación de inputs en servidor | Zod para validación de schemas |
| SEC-003 | Rate limiting | Auth: 5 intentos/min, API: 100 req/min |
| SEC-004 | Encriptación de datos sensibles | TLS 1.3 en tránsito, AES-256 en reposo |
| SEC-005 | Row Level Security | Políticas granulares por user_id |
| SEC-006 | Sanitización de inputs | Prevención XSS, SQL injection |

### 8.2 Rate Limiting

```yaml
Auth:
  - 5 intentos por minuto para login
  - Bloqueo temporal tras 5 fallos

API General:
  - 100 requests por minuto por usuario
  - Headers: X-RateLimit-Limit, X-RateLimit-Remaining

Webhooks:
  - Verificación de firma obligatoria
  - Stripe: webhook_secret
  - Replicate: signature verification
```

### 8.3 Encriptación

```yaml
En tránsito:
  Protocolo: TLS 1.3
  Certificados: Let's Encrypt (auto-renew)

En reposo:
  Journal entries: AES-256-GCM
  API Keys: Hash bcrypt con salt
  Tokens JWT: HS256 (Supabase default)
```

---

## 9. TESTING

### 9.1 Estrategia de Testing

**Origen:** [08_Test_Plan.md](#)

| Tipo | Herramienta | Cobertura |
|------|-------------|-----------|
| Unit Tests | Vitest | Lógica de negocio, cálculos |
| Integration Tests | Vitest + Testing Library | Server Actions, DB queries |
| E2E Tests | Playwright | Flujos críticos de usuario |
| Visual Regression | Chromatic | UI components |

### 9.2 Tests Críticos

#### Sistema de Vectores

```typescript
// Test: Cálculo de progreso de nivel
it('should calculate correct level from vector values', () => {
  expect(calculateLevel(5.5)).toBe(5);
  expect(calculateLevel(10.2)).toBe(10);
});

// Test: Impacto de tareas en vectores
it('should apply correct vector changes on task completion', () => {
  const result = applyVectorChanges('meditation', baseVectors);
  expect(result.aura_lvl).toBe(baseVectors.aura_lvl + 0.05);
});
```

#### Judgement Night

```typescript
// Test: Evaluación de día exitoso
it('should mark day as success when 100% tasks completed', () => {
  const result = evaluateDay({ completed: 10, total: 10 });
  expect(result.status).toBe('success');
  expect(result.btcEarned).toBe(50);
});

// Test: Pérdida de corazón en día fallido
it('should lose health on failed day', () => {
  const result = evaluateDay({ completed: 3, total: 10, health: 5 });
  expect(result.status).toBe('failed');
  expect(result.healthChange).toBe(-1);
});
```

#### Sistema de Economía

```typescript
// Test: Cálculo de recompensas con multiplicador
it('should apply streak multiplier to BTC rewards', () => {
  const reward = calculateReward(30, { streakDays: 35 }); // x1.5
  expect(reward).toBe(45); // 30 * 1.5
});

// Test: No farming - límite diario
it('should enforce daily BTC cap', () => {
  const result = calculateDailyCap(4000);
  expect(result.cappedAmount).toBe(3500);
});
```

### 9.3 Tests E2E Críticos

| Flujo | Escenarios |
|-------|------------|
| Registro | Éxito, email duplicado, contraseña débil |
| Onboarding | Selección arquetipo, juramento, notificaciones |
| Completar tarea | Éxito, duplicado, tiempo insuficiente |
| Judgement Night | Éxito, parcial, fallido, muerte |
| Compra en tienda | Éxito, saldo insuficiente, nivel bajo |

---

## 10. TRAZABILIDAD DE ORIGEN

### 10.1 Mapa de Contenido por Documento

| Sección | Contenido | Documento Origen |
|---------|-----------|------------------|
| 1.1 Qué es METAMEN100 | Visión del producto | 01_PRD.md, 05_GDD.md |
| 2.1 Stack Tecnológico | Decisiones técnicas | 02_ADRs.md, 03_TECH_SPEC.md |
| 2.2 ADRs | Decisiones arquitectura | 02_ADRs.md |
| 3.1 Diagrama ER | Modelo de datos | 04_Data_Model.md |
| 3.2 Tablas | Schema SQL completo | 04_Data_Model.md |
| 4.1 Sistema de Vectores | Vectores y progresión | 05_GDD.md Sección 3 |
| 4.2 Sistema de Salud | Corazones y muerte | 05_GDD.md Sección 5 |
| 4.3 Sistema de Racha | Multiplicadores | 05_GDD.md Sección 6 |
| 4.4 Judgement Night | Proceso diario | 05_GDD.md Sección 7 |
| 4.5 Muerte | Reseteo y conservación | 05_GDD.md Sección 8 |
| 4.6 Economía BTC | Fuentes y usos | 05_GDD.md Sección 9 |
| 5.1 Arquetipos | Modelos base | 05_GDD.md Sección 4 |
| 5.2 Protocolo 100 días | Fases y progresión | 05_GDD.md Sección 10 |
| 5.3 Arsenal | 9 herramientas | 05_GDD.md Sección 11 |
| 5.4 Tienda | Items y gating | 05_GDD.md Sección 12 |
| 5.5 Suscripción | Trial y limbo | 05_GDD.md Sección 13 |
| 6.1 Onboarding | Flujo de registro | 01_PRD.md Sección 3.2 |
| 6.2 Dashboard | Elementos UI | 01_PRD.md Sección 3.3 |
| 6.3 Tareas | Completar tareas | 01_PRD.md Sección 3.4 |
| 6.4 Compra | Flujo de tienda | 01_PRD.md Sección 3.6 |
| 7.1 Server Actions | Contratos API | 03_TECH_SPEC.md Sección 4 |
| 8.1 Seguridad | Requisitos | 09_SECURITY_SPEC.md |
| 9.1 Testing | Estrategia | 08_Test_Plan.md |

### 10.2 Glosario de Términos

| Término | Definición | Origen |
|---------|------------|--------|
| **Avatar** | Representación digital del usuario | GDD |
| **Vector** | Dimensión medible de transformación | GDD |
| **Arquetipo** | Modelo base del avatar (6 disponibles) | GDD |
| **Judgement Night** | Proceso de cierre y evaluación diaria | GDD |
| **BTC** | Bitcoins virtuales, moneda del sistema | GDD |
| **RLS** | Row Level Security, seguridad a nivel de fila | Data Model |
| **Identity Anchor** | Tokens inmutables para consistencia de IA | GDD |
| **Gating** | Restricciones de compra por nivel/vector | GDD |

---

## APÉNDICE: CONTRADICCIONES RESUELTAS

### A.1 Proveedor de IA para Imágenes

**Contradicción:**
- ADR-004 menciona Fal.ai como primario
- TECH_SPEC.md menciona Google Gemini como primario

**Resolución:** 
El documento más reciente (TECH_SPEC.md) tiene prioridad. **Google Gemini** es el proveedor primario, con Replicate como fallback.

### A.2 Sistema de Colas

**Contradicción:**
- ADR-005 define BullMQ + Redis
- TECH_SPEC.md menciona Inngest

**Resolución:**
Ambos sistemas coexisten:
- **Inngest**: Jobs programados (Judgement Night, recordatorios)
- **BullMQ + Redis**: Jobs de generación de imágenes, notificaciones

---

*Documento Maestro Unificado - METAMEN100*  
*Generado: Febrero 2026*  
*Estado: Documento de referencia técnica consolidada*
