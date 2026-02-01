```
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 01: DOCUMENTACIÓN FUNDACIONAL                             ║
║                                                                                      ║
║    "Un sistema TOP 100 no se construye sobre ideas;                                  ║
║     se construye sobre especificaciones quirúrgicas"                                 ║
║                                                                                      ║
║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
║    │                                                                            │   ║
║    │   📄 01.1 PRD              📄 01.2 ADRs             📄 01.3 Tech Spec      │   ║
║    │   Product Requirements    Architecture Decisions   Technical Specification │   ║
║    │                                                                            │   ║
║    │   📄 01.4 Data Model      📄 01.5 GDD              📄 01.6 Content        │   ║
║    │   Database Specification  Game Design Document     Content Specification   │   ║
║    │                                                                            │   ║
║    │   📄 01.7 UI/UX           📄 01.8 Test Plan        📄 01.9 Security       │   ║
║    │   Design Specification    Testing Strategy         Security Specification  │   ║
║    │                                                                            │   ║
║    └────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                      ║
║    Responsable: Claude (Tú me dictas, yo genero)                                    ║
║    Entregables: 9 documentos .md en /docs                                           ║
║    Tiempo Estimado: 2-3 días de trabajo intenso                                     ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

---

# ÍNDICE DE DESGLOSE ATÓMICO

1. [SUBCAJA 01.1: PRD (Product Requirements Document)](#subcaja-011-prd)
2. [SUBCAJA 01.2: ADRs (Architecture Decision Records)](#subcaja-012-adrs)
3. [SUBCAJA 01.3: Technical Specification](#subcaja-013-technical-specification)
4. [SUBCAJA 01.4: Data Model Specification](#subcaja-014-data-model-specification)
5. [SUBCAJA 01.5: GDD (Game Design Document)](#subcaja-015-gdd)
6. [SUBCAJA 01.6: Content Specification](#subcaja-016-content-specification)
7. [SUBCAJA 01.7: UI/UX Specification](#subcaja-017-uiux-specification)
8. [SUBCAJA 01.8: Test Plan](#subcaja-018-test-plan)
9. [SUBCAJA 01.9: Security Specification](#subcaja-019-security-specification)

---

# SUBCAJA 01.1: PRD
## Product Requirements Document

### Archivo a Crear
```
Ruta: /docs/01_PRD.md
Tamaño Estimado: ~3,000 líneas
Tiempo de Generación: 45-60 minutos
```

### Estructura del Documento

```
01_PRD.md
│
├── 1. RESUMEN EJECUTIVO
│   ├── 1.1 Visión del Producto
│   ├── 1.2 Problema que Resuelve
│   ├── 1.3 Propuesta de Valor Única
│   └── 1.4 Métricas de Éxito (North Star)
│
├── 2. USUARIO OBJETIVO
│   ├── 2.1 Persona Principal
│   ├── 2.2 Demografía
│   ├── 2.3 Psicografía
│   ├── 2.4 Jobs To Be Done
│   └── 2.5 Usuarios Excluidos
│
├── 3. USER STORIES POR MÓDULO
│   │
│   ├── 3.1 MÓDULO: AUTENTICACIÓN
│   │   ├── US-AUTH-001: Registro con Email
│   │   ├── US-AUTH-002: Registro con Google
│   │   ├── US-AUTH-003: Verificación de Teléfono
│   │   ├── US-AUTH-004: Login
│   │   ├── US-AUTH-005: Recuperación de Contraseña
│   │   └── US-AUTH-006: Logout
│   │
│   ├── 3.2 MÓDULO: ONBOARDING
│   │   ├── US-ONB-001: Ver Pantalla de Bienvenida
│   │   ├── US-ONB-002: Seleccionar Arquetipo
│   │   ├── US-ONB-003: Completar Tutorial de Vectores
│   │   ├── US-ONB-004: Firmar Juramento
│   │   └── US-ONB-005: Configurar Notificaciones
│   │
│   ├── 3.3 MÓDULO: DASHBOARD
│   │   ├── US-DASH-001: Ver Avatar Actual
│   │   ├── US-DASH-002: Ver Estado de Salud
│   │   ├── US-DASH-003: Ver Balance de BTC
│   │   ├── US-DASH-004: Ver Nivel Actual
│   │   ├── US-DASH-005: Ver Racha Actual
│   │   ├── US-DASH-006: Ver Calendario de 100 Días
│   │   └── US-DASH-007: Ver Countdown a Judgement Night
│   │
│   ├── 3.4 MÓDULO: TAREAS
│   │   ├── US-TASK-001: Ver Tareas del Día
│   │   ├── US-TASK-002: Completar Tarea
│   │   ├── US-TASK-003: Ver Recompensa de Tarea
│   │   ├── US-TASK-004: Crear Tarea Personalizada
│   │   ├── US-TASK-005: Ver Progreso del Día
│   │   └── US-TASK-006: Ver Historial de Tareas
│   │
│   ├── 3.5 MÓDULO: HERRAMIENTAS (ARSENAL)
│   │   ├── US-TOOL-001: Acceder a Biblioteca de Poder
│   │   ├── US-TOOL-002: Acceder a Templo del Hierro
│   │   ├── US-TOOL-003: Acceder a Cámara de Meditación
│   │   ├── US-TOOL-004: Acceder a Bitácora de Guerra
│   │   ├── US-TOOL-005: Acceder a Vitalidad Sexual
│   │   ├── US-TOOL-006: Acceder a Escultor Facial
│   │   ├── US-TOOL-007: Crear Hipnosis Personalizada [Premium]
│   │   ├── US-TOOL-008: Acceder a Movilidad Táctica
│   │   └── US-TOOL-009: Acceder a Focus Chamber
│   │
│   ├── 3.6 MÓDULO: TIENDA
│   │   ├── US-STORE-001: Ver Catálogo de Items
│   │   ├── US-STORE-002: Filtrar por Categoría
│   │   ├── US-STORE-003: Ver Detalle de Item
│   │   ├── US-STORE-004: Comprar Item
│   │   └── US-STORE-005: Ver Inventario
│   │
│   ├── 3.7 MÓDULO: INVENTARIO
│   │   ├── US-INV-001: Ver Items Comprados
│   │   ├── US-INV-002: Equipar Item
│   │   ├── US-INV-003: Desequipar Item
│   │   └── US-INV-004: Ver Items Bloqueados
│   │
│   ├── 3.8 MÓDULO: PAGOS
│   │   ├── US-PAY-001: Ver Estado de Suscripción
│   │   ├── US-PAY-002: Iniciar Checkout
│   │   ├── US-PAY-003: Completar Pago
│   │   ├── US-PAY-004: Cancelar Suscripción
│   │   ├── US-PAY-005: Comprar BTC con Dinero Real
│   │   └── US-PAY-006: Ver Historial de Pagos
│   │
│   ├── 3.9 MÓDULO: PERFIL
│   │   ├── US-PROF-001: Ver Datos del Perfil
│   │   ├── US-PROF-002: Editar Zona Horaria
│   │   ├── US-PROF-003: Ver Logros
│   │   ├── US-PROF-004: Ver Historial de Imágenes
│   │   └── US-PROF-005: Configurar Notificaciones
│   │
│   └── 3.10 MÓDULO: SISTEMA (BACKEND)
│       ├── US-SYS-001: Procesar Judgement Night
│       ├── US-SYS-002: Generar Imagen Diaria
│       ├── US-SYS-003: Enviar Notificaciones
│       ├── US-SYS-004: Procesar Muerte de Avatar
│       └── US-SYS-005: Manejar Modo Limbo
│
├── 4. CRITERIOS DE ACEPTACIÓN DETALLADOS
│   │
│   ├── 4.1 Template de Criterio
│   │   ├── Given (Contexto)
│   │   ├── When (Acción)
│   │   ├── Then (Resultado Esperado)
│   │   └── And (Condiciones Adicionales)
│   │
│   └── 4.2 Criterios por User Story (todas las anteriores)
│
├── 5. REQUISITOS NO FUNCIONALES
│   │
│   ├── 5.1 Performance
│   │   ├── RNF-PERF-001: Tiempo de Carga Inicial (LCP < 2s)
│   │   ├── RNF-PERF-002: Time to Interactive (TTI < 3s)
│   │   ├── RNF-PERF-003: API Response Time (p95 < 200ms)
│   │   └── RNF-PERF-004: Generación de Imagen (< 30s)
│   │
│   ├── 5.2 Disponibilidad
│   │   ├── RNF-AVAIL-001: Uptime (99.9%)
│   │   └── RNF-AVAIL-002: Degradación Graceful
│   │
│   ├── 5.3 Seguridad
│   │   ├── RNF-SEC-001: Autenticación en Todas las Rutas Protegidas
│   │   ├── RNF-SEC-002: Validación de Inputs en Servidor
│   │   ├── RNF-SEC-003: Rate Limiting
│   │   └── RNF-SEC-004: Encriptación de Datos Sensibles
│   │
│   ├── 5.4 Escalabilidad
│   │   ├── RNF-SCALE-001: 1,000 Usuarios Concurrentes
│   │   └── RNF-SCALE-002: 100 Generaciones de Imagen Simultáneas
│   │
│   └── 5.5 Usabilidad
│       ├── RNF-UX-001: Mobile First
│       ├── RNF-UX-002: Accesibilidad WCAG 2.1 AA
│       └── RNF-UX-003: Soporte de Idioma (Español México)
│
├── 6. EDGE CASES Y ESCENARIOS LÍMITE
│   │
│   ├── 6.1 Edge Cases de Tiempo
│   │   ├── EC-TIME-001: Tarea completada justo al cambio de día
│   │   ├── EC-TIME-002: Usuario en zona horaria diferente
│   │   └── EC-TIME-003: Cambio de horario de verano
│   │
│   ├── 6.2 Edge Cases de Estado
│   │   ├── EC-STATE-001: Usuario con 1 corazón y falla el día
│   │   ├── EC-STATE-002: Usuario completa 80% exacto
│   │   ├── EC-STATE-003: Usuario en día 100 completado
│   │   └── EC-STATE-004: Usuario resucitado con inventario
│   │
│   ├── 6.3 Edge Cases de Pagos
│   │   ├── EC-PAY-001: Webhook duplicado de Stripe
│   │   ├── EC-PAY-002: Pago fallido durante trial
│   │   ├── EC-PAY-003: Cancelación a mitad de periodo
│   │   └── EC-PAY-004: Disputa/Chargeback
│   │
│   ├── 6.4 Edge Cases de IA
│   │   ├── EC-AI-001: Generación de imagen falla 3 veces
│   │   ├── EC-AI-002: API de Replicate caída
│   │   └── EC-AI-003: Imagen generada con contenido inapropiado
│   │
│   └── 6.5 Edge Cases de Red
│       ├── EC-NET-001: Pérdida de conexión durante tarea
│       ├── EC-NET-002: Request duplicado por retry
│       └── EC-NET-003: Timeout en operación crítica
│
├── 7. MÉTRICAS DE ÉXITO (KPIs)
│   │
│   ├── 7.1 Métricas de Adquisición
│   │   ├── KPI-ACQ-001: Registros por Día
│   │   ├── KPI-ACQ-002: Tasa de Completación de Onboarding
│   │   └── KPI-ACQ-003: Costo por Adquisición (CPA)
│   │
│   ├── 7.2 Métricas de Activación
│   │   ├── KPI-ACT-001: % que Completa Día 1
│   │   ├── KPI-ACT-002: % que Llega a Día 6
│   │   └── KPI-ACT-003: Tiempo al Primer "Aha Moment"
│   │
│   ├── 7.3 Métricas de Retención
│   │   ├── KPI-RET-001: Retención Día 7
│   │   ├── KPI-RET-002: Retención Día 30
│   │   ├── KPI-RET-003: Retención Día 100
│   │   └── KPI-RET-004: Churn Rate Mensual
│   │
│   ├── 7.4 Métricas de Revenue
│   │   ├── KPI-REV-001: Tasa de Conversión Trial → Pago
│   │   ├── KPI-REV-002: ARPU (Average Revenue Per User)
│   │   ├── KPI-REV-003: LTV (Lifetime Value)
│   │   └── KPI-REV-004: MRR (Monthly Recurring Revenue)
│   │
│   └── 7.5 Métricas de Engagement
│       ├── KPI-ENG-001: DAU/MAU Ratio
│       ├── KPI-ENG-002: Tareas Completadas por Día
│       ├── KPI-ENG-003: Tiempo en App por Sesión
│       └── KPI-ENG-004: Uso de Herramientas
│
└── 8. ROADMAP DE FEATURES
    │
    ├── 8.1 MVP (Día 1)
    │   └── [Lista de features incluidas]
    │
    ├── 8.2 Post-MVP v1.1
    │   └── [Lista de features planeadas]
    │
    └── 8.3 Futuro (v2.0+)
        └── [Lista de features aspiracionales]
```

### Tareas Atómicas para 01.1 PRD

```yaml
TAREA-01.1.1:
  Nombre: "Crear estructura base del archivo PRD"
  Acción: "Crear /docs/01_PRD.md con headers de todas las secciones"
  Responsable: Claude
  Input: "Estructura definida arriba"
  Output: "Archivo con estructura vacía pero completa"
  Criterio de Éxito: "El archivo existe y tiene todos los headers"
  Prompt para Claude: |
    Crea el archivo /docs/01_PRD.md con la estructura de headers exacta 
    mostrada arriba. Solo headers, sin contenido aún.

TAREA-01.1.2:
  Nombre: "Redactar Sección 1: Resumen Ejecutivo"
  Acción: "Completar visión, problema, propuesta de valor"
  Responsable: Claude
  Input: "Cuestionario1 - Secciones 1.1 a 1.5"
  Output: "Sección 1 completa"
  Criterio de Éxito: |
    - Visión en máximo 3 oraciones
    - Problema claramente articulado
    - Propuesta de valor con diferenciadores vs competencia
  Prompt para Claude: |
    Basándote en el cuestionario1, redacta la Sección 1 del PRD:
    1.1 Visión: "MetaMen100 es..."
    1.2 Problema: El problema central de fragmentación e invisibilidad
    1.3 Propuesta: Espejo bio-digital + IA generativa
    1.4 Métricas North Star: Usuarios que completan 100 días

TAREA-01.1.3:
  Nombre: "Redactar Sección 2: Usuario Objetivo"
  Acción: "Definir persona, demografía, psicografía"
  Responsable: Claude
  Input: "Cuestionario1 - Sección 1.3"
  Output: "Sección 2 completa"
  Criterio de Éxito: |
    - Persona con nombre ficticio y descripción detallada
    - Demografía específica (edad 20-35, masculino)
    - Jobs To Be Done en formato estándar
  Prompt para Claude: |
    Basándote en el cuestionario1 sección 1.3, crea la Sección 2 del PRD:
    - Persona: "Carlos, 28 años, desarrollador web..."
    - Demografía: Hombres 20-35, México/LATAM
    - Psicografía: Ansioso, sobreinformado, baja autoestima
    - JTBD: "Cuando [situación], quiero [motivación], para [resultado]"
    - Usuarios excluidos: Con trastornos alimenticios graves

TAREA-01.1.4:
  Nombre: "Redactar User Stories - Módulo Auth"
  Acción: "Escribir US-AUTH-001 a US-AUTH-006"
  Responsable: Claude
  Input: "Cuestionario2 - Sección 2 Registro y Autenticación"
  Output: "6 User Stories con criterios"
  Criterio de Éxito: |
    - Cada US sigue formato "Como [rol], quiero [acción], para [beneficio]"
    - Cada US tiene al menos 3 criterios de aceptación
    - Cada US tiene prioridad (Must/Should/Could)
  Prompt para Claude: |
    Escribe las User Stories de autenticación basándote en el cuestionario2:
    - Email/Password + Google Auth
    - Verificación de teléfono obligatoria (anti-multicuenta)
    - Nickname automático (METAMEN-001, METAMEN-002...)
    
    Formato por cada US:
    ```
    ### US-AUTH-001: Registro con Email
    **Como** visitante
    **Quiero** registrarme con mi email y contraseña
    **Para** comenzar el protocolo de 100 días
    
    **Prioridad:** Must Have
    
    **Criterios de Aceptación:**
    - [ ] Given: Estoy en /register
    - [ ] When: Ingreso email válido y contraseña (min 8 chars)
    - [ ] Then: Se crea mi cuenta y recibo nickname automático
    - [ ] And: Se crean profile, avatar_state, wallet, subscription
    - [ ] And: Soy redirigido a /onboarding
    ```

TAREA-01.1.5:
  Nombre: "Redactar User Stories - Módulo Onboarding"
  Acción: "Escribir US-ONB-001 a US-ONB-005"
  Responsable: Claude
  Input: "Cuestionario1 - Sección P10.1.1"
  Output: "5 User Stories con criterios"
  Criterio de Éxito: "Cada paso del wizard tiene su US"
  Prompt para Claude: |
    Escribe las User Stories de onboarding:
    - Step 1: Bienvenida con efecto terminal
    - Step 2: Selección de arquetipo (6 semillas con lore)
    - Step 3: Tutorial de vectores (AURA, JAWLINE, WEALTH, PHYSIQUE, ENV)
    - Step 4: Juramento (press & hold 3 segundos)
    - Step 5: Notificaciones

TAREA-01.1.6:
  Nombre: "Redactar User Stories - Módulo Dashboard"
  Acción: "Escribir US-DASH-001 a US-DASH-007"
  Responsable: Claude
  Input: "Cuestionario2 - Sección 4 Dashboard Principal"
  Output: "7 User Stories"
  Criterio de Éxito: "Cubre todas las métricas visibles en HUD"

TAREA-01.1.7:
  Nombre: "Redactar User Stories - Módulo Tareas"
  Acción: "Escribir US-TASK-001 a US-TASK-006"
  Responsable: Claude
  Input: "Cuestionario2 - Secciones 4.7 y 5"
  Output: "6 User Stories"
  Criterio de Éxito: "Incluye crear, completar, ver historial"

TAREA-01.1.8:
  Nombre: "Redactar User Stories - Módulo Herramientas"
  Acción: "Escribir US-TOOL-001 a US-TOOL-009"
  Responsable: Claude
  Input: "Cuestionario1 - Sección P3.5.2"
  Output: "9 User Stories (una por herramienta)"
  Criterio de Éxito: "Cada herramienta tiene su US con funcionalidades específicas"

TAREA-01.1.9:
  Nombre: "Redactar User Stories - Módulo Tienda"
  Acción: "Escribir US-STORE-001 a US-STORE-005"
  Responsable: Claude
  Input: "Cuestionario2 - Sección 10"
  Output: "5 User Stories"
  Criterio de Éxito: "Cubre navegación, compra, validaciones"

TAREA-01.1.10:
  Nombre: "Redactar User Stories - Módulo Inventario"
  Acción: "Escribir US-INV-001 a US-INV-004"
  Responsable: Claude
  Input: "Cuestionario2 - Sección 10.4"
  Output: "4 User Stories"
  Criterio de Éxito: "Incluye equipar, desequipar, bloqueo por nivel"

TAREA-01.1.11:
  Nombre: "Redactar User Stories - Módulo Pagos"
  Acción: "Escribir US-PAY-001 a US-PAY-006"
  Responsable: Claude
  Input: "Cuestionario2 - Sección 7"
  Output: "6 User Stories"
  Criterio de Éxito: "Cubre trial, checkout, cancelación, BTC premium"

TAREA-01.1.12:
  Nombre: "Redactar User Stories - Módulo Perfil"
  Acción: "Escribir US-PROF-001 a US-PROF-005"
  Responsable: Claude
  Input: "Cuestionario2 - Sección 11"
  Output: "5 User Stories"
  Criterio de Éxito: "Cubre datos, configuración, historial"

TAREA-01.1.13:
  Nombre: "Redactar User Stories - Módulo Sistema"
  Acción: "Escribir US-SYS-001 a US-SYS-005"
  Responsable: Claude
  Input: "Cuestionario2 - Sección 8"
  Output: "5 User Stories de backend"
  Criterio de Éxito: "Cubre Judgement, generación IA, muerte, limbo"

TAREA-01.1.14:
  Nombre: "Redactar Sección 5: Requisitos No Funcionales"
  Acción: "Documentar RNFs de performance, seguridad, etc."
  Responsable: Claude
  Input: "Mejores prácticas TOP 100"
  Output: "Sección 5 completa"
  Criterio de Éxito: "Métricas específicas y medibles"

TAREA-01.1.15:
  Nombre: "Redactar Sección 6: Edge Cases"
  Acción: "Documentar todos los escenarios límite"
  Responsable: Claude
  Input: "Diagnóstico previo + cuestionarios"
  Output: "Sección 6 completa"
  Criterio de Éxito: "Cada edge case tiene comportamiento esperado"

TAREA-01.1.16:
  Nombre: "Redactar Sección 7: KPIs"
  Acción: "Definir métricas de éxito"
  Responsable: Claude
  Input: "Mejores prácticas SaaS"
  Output: "Sección 7 completa"
  Criterio de Éxito: "Cada KPI tiene target específico"

TAREA-01.1.17:
  Nombre: "Redactar Sección 8: Roadmap"
  Acción: "Definir features por versión"
  Responsable: Claude
  Input: "Cuestionarios + priorización"
  Output: "Sección 8 completa"
  Criterio de Éxito: "MVP claramente delimitado"

TAREA-01.1.18:
  Nombre: "Revisión Final del PRD"
  Acción: "Verificar consistencia y completitud"
  Responsable: Claude
  Input: "Documento completo"
  Output: "Documento validado"
  Criterio de Éxito: "Sin secciones vacías, referencias cruzadas correctas"
```

---

# SUBCAJA 01.2: ADRs
## Architecture Decision Records

### Archivo a Crear
```
Ruta: /docs/02_ADRs.md
Tamaño Estimado: ~1,500 líneas
Tiempo de Generación: 30-45 minutos
```

### Estructura del Documento

```
02_ADRs.md
│
├── INTRODUCCIÓN
│   ├── ¿Qué son los ADRs?
│   └── Template de ADR
│
├── ADR-001: FRAMEWORK FRONTEND
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Next.js 14+
│   │   ├── Remix
│   │   ├── SvelteKit
│   │   └── Nuxt 3
│   ├── Decisión: Next.js 14+ con App Router
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-002: BACKEND Y BASE DE DATOS
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Supabase
│   │   ├── Firebase
│   │   ├── PlanetScale + Auth0
│   │   └── Self-hosted PostgreSQL
│   ├── Decisión: Supabase
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-003: SERVICIO DE IA GENERATIVA
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Replicate API
│   │   ├── RunPod Serverless
│   │   ├── Modal Labs
│   │   ├── Fal.ai
│   │   └── Self-hosted GPU
│   ├── Decisión: Replicate API (inicialmente) + Gemini 3 Pro Image (alternativa)
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-004: PROCESAMIENTO DE PAGOS
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Stripe
│   │   ├── Paddle
│   │   ├── LemonSqueezy
│   │   └── MercadoPago
│   ├── Decisión: Stripe
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-005: ESTADO GLOBAL EN CLIENTE
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Zustand
│   │   ├── Jotai
│   │   ├── Redux Toolkit
│   │   └── React Context
│   ├── Decisión: Zustand
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-006: AUTENTICACIÓN
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Supabase Auth
│   │   ├── Clerk
│   │   ├── Auth0
│   │   └── NextAuth.js
│   ├── Decisión: Supabase Auth + Verificación SMS
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-007: QUEUE SYSTEM PARA JOBS
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── BullMQ + Redis
│   │   ├── Inngest
│   │   ├── Trigger.dev
│   │   └── Supabase Edge Functions + pg_cron
│   ├── Decisión: Inngest (para simplicidad inicial)
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-008: ESTILOS CSS
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Tailwind CSS
│   │   ├── CSS Modules
│   │   ├── Styled Components
│   │   └── Vanilla Extract
│   ├── Decisión: Tailwind CSS
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-009: HOSTING Y DEPLOYMENT
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Vercel
│   │   ├── Netlify
│   │   ├── Railway
│   │   └── AWS Amplify
│   ├── Decisión: Vercel
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-010: STORAGE DE IMÁGENES
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Supabase Storage
│   │   ├── Cloudflare R2
│   │   ├── AWS S3
│   │   └── Uploadthing
│   ├── Decisión: Supabase Storage (MVP) → Cloudflare R2 (escala)
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-011: VALIDACIÓN DE DATOS
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Zod
│   │   ├── Yup
│   │   ├── Valibot
│   │   └── AJV
│   ├── Decisión: Zod
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
├── ADR-012: TESTING FRAMEWORK
│   ├── Contexto
│   ├── Opciones Consideradas
│   │   ├── Jest + React Testing Library
│   │   ├── Vitest
│   │   └── Playwright
│   ├── Decisión: Vitest (unit) + Playwright (E2E)
│   ├── Razones
│   ├── Consecuencias
│   └── Estado: Aceptado
│
└── ADR-013: OBSERVABILIDAD
    ├── Contexto
    ├── Opciones Consideradas
    │   ├── Sentry
    │   ├── LogRocket
    │   ├── Axiom
    │   └── PostHog
    ├── Decisión: Sentry (errors) + PostHog (analytics)
    ├── Razones
    ├── Consecuencias
    └── Estado: Aceptado
```

### Tareas Atómicas para 01.2 ADRs

```yaml
TAREA-01.2.1:
  Nombre: "Crear estructura base del archivo ADRs"
  Acción: "Crear /docs/02_ADRs.md con template"
  Responsable: Claude
  Output: "Archivo con estructura"
  Prompt para Claude: |
    Crea /docs/02_ADRs.md con:
    1. Introducción explicando qué son los ADRs
    2. Template estándar de ADR:
       - Título
       - Contexto
       - Opciones Consideradas
       - Decisión
       - Razones
       - Consecuencias (positivas y negativas)
       - Estado (Aceptado/Rechazado/Deprecado)
    3. Headers para los 13 ADRs listados

TAREA-01.2.2:
  Nombre: "Redactar ADR-001: Framework Frontend"
  Acción: "Documentar decisión de Next.js"
  Responsable: Claude
  Input: "Stack definido en cuestionarios"
  Prompt para Claude: |
    Redacta ADR-001 para Next.js 14+ con App Router:
    - Contexto: Necesitamos SSR, Server Actions, buen DX
    - Por qué NO Remix: Menos ecosistema
    - Por qué NO SvelteKit: Equipo no familiarizado
    - Razones: Server Actions, ecosistema, Vercel integration
    - Consecuencias: Lock-in parcial con Vercel

TAREA-01.2.3:
  Nombre: "Redactar ADR-002: Backend y Base de Datos"
  Acción: "Documentar decisión de Supabase"
  Responsable: Claude
  Prompt para Claude: |
    Redacta ADR-002 para Supabase:
    - Contexto: Necesitamos PostgreSQL + Auth + Realtime
    - Por qué NO Firebase: NoSQL no apto para relaciones complejas
    - Razones: PostgreSQL, RLS, Auth integrado, Realtime
    - Consecuencias: Vendor lock-in aceptable

TAREA-01.2.4:
  Nombre: "Redactar ADR-003: Servicio de IA"
  Acción: "Documentar decisión de Replicate/Gemini"
  Responsable: Claude
  Prompt para Claude: |
    Redacta ADR-003:
    - Contexto: Generar imágenes de avatar estilo pixel art
    - Opción principal: Replicate (SDXL)
    - Opción alternativa: Gemini 3 Pro Image (mencionado en cuestionario)
    - Razones: API simple, pricing por uso, no requiere infra

TAREA-01.2.5 a TAREA-01.2.13:
  # Repetir patrón para cada ADR restante
  # ADR-004 a ADR-013
```

---

# SUBCAJA 01.3: Technical Specification
## Especificación Técnica

### Archivo a Crear
```
Ruta: /docs/03_TECH_SPEC.md
Tamaño Estimado: ~2,000 líneas
Tiempo de Generación: 45-60 minutos
```

### Estructura del Documento

```
03_TECH_SPEC.md
│
├── 1. ARQUITECTURA DEL SISTEMA
│   │
│   ├── 1.1 Diagrama de Alto Nivel
│   │   └── [ASCII art o descripción detallada]
│   │
│   ├── 1.2 Capas del Sistema
│   │   ├── Capa de Presentación (Next.js)
│   │   ├── Capa de Lógica de Negocio (/lib/core)
│   │   ├── Capa de Datos (Supabase)
│   │   └── Capa de Servicios Externos (Replicate, Stripe)
│   │
│   ├── 1.3 Flujo de Datos
│   │   ├── Flujo de Autenticación
│   │   ├── Flujo de Completar Tarea
│   │   ├── Flujo de Judgement Night
│   │   ├── Flujo de Generación de Imagen
│   │   └── Flujo de Compra
│   │
│   └── 1.4 Comunicación entre Servicios
│       ├── Cliente ↔ Server Actions
│       ├── Server ↔ Supabase
│       ├── Server ↔ Replicate
│       ├── Server ↔ Stripe
│       └── Webhooks
│
├── 2. STACK TECNOLÓGICO DETALLADO
│   │
│   ├── 2.1 Frontend
│   │   ├── Framework: Next.js 14.2+
│   │   ├── Lenguaje: TypeScript 5.4+
│   │   ├── Estilos: Tailwind CSS 3.4+
│   │   ├── Animaciones: Framer Motion 11+
│   │   ├── Estado: Zustand 4.5+
│   │   ├── Formularios: React Hook Form 7+ + Zod 3+
│   │   ├── Iconos: Lucide React
│   │   └── Charts: Recharts 2+
│   │
│   ├── 2.2 Backend
│   │   ├── Database: PostgreSQL 15 (Supabase)
│   │   ├── Auth: Supabase Auth
│   │   ├── Realtime: Supabase Realtime
│   │   ├── Storage: Supabase Storage / Cloudflare R2
│   │   └── Jobs: Inngest / Supabase Edge Functions
│   │
│   ├── 2.3 IA/ML
│   │   ├── Imágenes: Replicate API (SDXL) / Gemini 3 Pro Image
│   │   └── Voice (futuro): ElevenLabs
│   │
│   ├── 2.4 Pagos
│   │   └── Stripe (Checkout, Subscriptions, Webhooks)
│   │
│   └── 2.5 Infraestructura
│       ├── Hosting: Vercel
│       ├── CDN: Vercel Edge Network / Cloudflare
│       ├── Monitoring: Sentry + PostHog
│       └── CI/CD: GitHub Actions
│
├── 3. ESTRUCTURA DE CARPETAS DEFINITIVA
│   │
│   └── [Árbol completo de carpetas con descripción de cada una]
│
├── 4. CONTRATOS DE API
│   │
│   ├── 4.1 Server Actions
│   │   ├── auth/login
│   │   ├── auth/register
│   │   ├── auth/logout
│   │   ├── tasks/getTodayTasks
│   │   ├── tasks/completeTask
│   │   ├── tasks/createCustomTask
│   │   ├── store/getItems
│   │   ├── store/purchaseItem
│   │   ├── inventory/equipItem
│   │   ├── profile/updateProfile
│   │   └── payments/createCheckout
│   │
│   ├── 4.2 API Routes (Webhooks)
│   │   ├── POST /api/webhooks/stripe
│   │   └── POST /api/webhooks/replicate
│   │
│   └── 4.3 Formato de Respuesta Estándar
│       ├── Success: { success: true, data: T }
│       └── Error: { success: false, error: string, code: ErrorCode }
│
├── 5. TIPOS COMPARTIDOS
│   │
│   ├── 5.1 Tipos de Dominio
│   │   ├── AvatarState
│   │   ├── TaskCategory
│   │   ├── SubscriptionStatus
│   │   └── etc.
│   │
│   ├── 5.2 Tipos de API
│   │   ├── Request types
│   │   └── Response types
│   │
│   └── 5.3 Tipos de UI
│       └── Component props
│
├── 6. PATRONES DE CÓDIGO
│   │
│   ├── 6.1 Server Components vs Client Components
│   ├── 6.2 Server Actions Pattern
│   ├── 6.3 Error Handling Pattern
│   ├── 6.4 Validation Pattern (Zod)
│   ├── 6.5 Database Transaction Pattern
│   └── 6.6 Idempotency Pattern
│
├── 7. VARIABLES DE ENTORNO
│   │
│   ├── 7.1 Requeridas
│   ├── 7.2 Opcionales
│   └── 7.3 Validación con Zod
│
└── 8. CONVENCIONES DE CÓDIGO
    │
    ├── 8.1 Nombrado
    ├── 8.2 Imports
    ├── 8.3 Comentarios
    └── 8.4 Commits
```

### Tareas Atómicas para 01.3 Tech Spec

```yaml
TAREA-01.3.1:
  Nombre: "Crear estructura base Tech Spec"
  Acción: "Crear /docs/03_TECH_SPEC.md"
  Responsable: Claude
  
TAREA-01.3.2:
  Nombre: "Diagramar Arquitectura del Sistema"
  Acción: "Crear diagrama ASCII de arquitectura"
  Responsable: Claude
  Prompt para Claude: |
    Crea un diagrama ASCII que muestre:
    - Browser (Next.js Client)
    - Vercel (Next.js Server)
    - Supabase (DB + Auth + Realtime)
    - Replicate/Gemini (IA)
    - Stripe (Pagos)
    - Inngest (Jobs)
    
    Con flechas mostrando la dirección del flujo de datos.

TAREA-01.3.3:
  Nombre: "Documentar Flujos de Datos"
  Acción: "Crear diagramas de secuencia para flujos críticos"
  Responsable: Claude
  Prompt para Claude: |
    Crea diagramas de secuencia (en texto) para:
    1. Flujo de Completar Tarea:
       User → UI → Server Action → Validate → DB Transaction → 
       Update Vectors → Credit BTC → Return → Update UI
    
    2. Flujo de Judgement Night:
       Cron Trigger → Get Users → For Each User →
       Calculate Completion → Apply Health → Generate Image → 
       Create Log → Advance Day → Notify

TAREA-01.3.4:
  Nombre: "Documentar Stack con Versiones Exactas"
  Acción: "Listar cada tecnología con versión específica"
  Responsable: Claude
  
TAREA-01.3.5:
  Nombre: "Documentar Estructura de Carpetas Definitiva"
  Acción: "Crear árbol completo con descripciones"
  Responsable: Claude
  
TAREA-01.3.6:
  Nombre: "Documentar Contratos de API"
  Acción: "Especificar cada Server Action"
  Responsable: Claude
  Prompt para Claude: |
    Para cada Server Action, documenta:
    - Nombre de la función
    - Input (con tipos Zod)
    - Output (tipo de respuesta)
    - Errores posibles
    - Ejemplo de uso
    
    Ejemplo:
    ```typescript
    // tasks/completeTask
    Input: { taskId: string, idempotencyKey: string }
    Output: { success: true, data: { btcEarned: number, newState: AvatarState } }
           | { success: false, error: ErrorCode, message: string }
    Errors: TASK_NOT_FOUND, TASK_ALREADY_COMPLETED, UNAUTHORIZED
    ```

TAREA-01.3.7:
  Nombre: "Documentar Tipos Compartidos"
  Acción: "Definir todos los tipos TypeScript"
  Responsable: Claude
  
TAREA-01.3.8:
  Nombre: "Documentar Patrones de Código"
  Acción: "Ejemplos de cada patrón"
  Responsable: Claude
  
TAREA-01.3.9:
  Nombre: "Documentar Variables de Entorno"
  Acción: "Lista completa con validación"
  Responsable: Claude
  
TAREA-01.3.10:
  Nombre: "Documentar Convenciones"
  Acción: "Guía de estilo de código"
  Responsable: Claude
```

---

# SUBCAJA 01.4: Data Model Specification
## Especificación del Modelo de Datos

### Archivo a Crear
```
Ruta: /docs/04_DATA_MODEL.md
Tamaño Estimado: ~2,500 líneas
Tiempo de Generación: 45-60 minutos
```

### Estructura del Documento

```
04_DATA_MODEL.md
│
├── 1. DIAGRAMA ENTIDAD-RELACIÓN
│   └── [Diagrama ASCII detallado]
│
├── 2. DICCIONARIO DE DATOS
│   │
│   ├── 2.1 TABLA: profiles
│   │   ├── Descripción
│   │   ├── Columnas (nombre, tipo, nullable, default, descripción)
│   │   ├── Primary Key
│   │   ├── Foreign Keys
│   │   ├── Índices
│   │   └── Ejemplo de Registro
│   │
│   ├── 2.2 TABLA: avatar_states
│   │   ├── Descripción
│   │   ├── Columnas
│   │   │   ├── user_id (FK)
│   │   │   ├── aura_lvl (DECIMAL 4,2) - Vector AURA
│   │   │   ├── face_lvl (DECIMAL 4,2) - Vector JAWLINE
│   │   │   ├── wealth_lvl (DECIMAL 4,2) - Vector WEALTH
│   │   │   ├── muscle_lvl (DECIMAL 4,2) - Vector PHYSIQUE (músculo)
│   │   │   ├── fat_lvl (DECIMAL 4,2) - Vector PHYSIQUE (grasa)
│   │   │   ├── env_lvl (INTEGER) - Vector ENV
│   │   │   ├── health_points (INTEGER) - 0-10 (expandible a 13)
│   │   │   ├── current_day (INTEGER) - 1-100
│   │   │   ├── current_level (INTEGER) - 1-10 (+11-13 post-game)
│   │   │   ├── streak_days (INTEGER)
│   │   │   └── last_image_url (TEXT)
│   │   └── Ejemplo de Registro
│   │
│   ├── 2.3 TABLA: wallets
│   │   └── [Estructura completa]
│   │
│   ├── 2.4 TABLA: daily_tasks
│   │   └── [Estructura completa con categorías de arquetipos]
│   │
│   ├── 2.5 TABLA: daily_logs
│   │   └── [Estructura completa]
│   │
│   ├── 2.6 TABLA: subscriptions
│   │   └── [Estructura completa]
│   │
│   ├── 2.7 TABLA: store_items
│   │   └── [Estructura completa con categorías]
│   │
│   ├── 2.8 TABLA: inventory
│   │   └── [Estructura completa]
│   │
│   ├── 2.9 TABLA: tool_progress
│   │   └── [Estructura completa]
│   │
│   ├── 2.10 TABLA: activity_logs
│   │   └── [Estructura completa]
│   │
│   ├── 2.11 TABLA: image_generation_queue
│   │   └── [Estructura completa]
│   │
│   ├── 2.12 TABLA: notifications
│   │   └── [Estructura completa]
│   │
│   └── 2.13 TABLA: idempotency_keys
│       └── [Estructura completa]
│
├── 3. ENUMS Y TIPOS PERSONALIZADOS
│   │
│   ├── 3.1 task_type: 'protocol' | 'custom'
│   ├── 3.2 task_status: 'pending' | 'completed' | 'failed'
│   ├── 3.3 task_category (por arquetipo):
│   │   ├── MENTAL: 'meditation' | 'cold_shower' | 'reading' | 'wake_early'
│   │   ├── CARA: 'posture' | 'facial' | 'kegel'
│   │   ├── PRODUCTIVIDAD: 'journal' | 'skill_learning' | 'focus_work'
│   │   └── FÍSICO: 'strength' | 'cardio' | 'hydration'
│   ├── 3.4 day_status: 'success' | 'partial' | 'failed' | 'death'
│   ├── 3.5 subscription_status: 'trial' | 'active' | 'limbo' | 'cancelled'
│   ├── 3.6 item_category: 'armor' | 'accessories' | 'vehicles' | 'properties' | 'companions' | 'pets' | 'powerups'
│   └── 3.7 item_rarity: 'common' | 'rare' | 'epic' | 'legendary'
│
├── 4. POLÍTICAS DE RLS (Row Level Security)
│   │
│   ├── 4.1 Política Base: Usuario solo ve sus datos
│   ├── 4.2 Políticas por Tabla
│   │   ├── profiles: SELECT/UPDATE own
│   │   ├── avatar_states: SELECT/UPDATE own
│   │   ├── wallets: SELECT/UPDATE own
│   │   ├── daily_tasks: SELECT/INSERT/UPDATE/DELETE own
│   │   ├── daily_logs: SELECT/INSERT own (no update/delete)
│   │   ├── subscriptions: SELECT own
│   │   ├── inventory: SELECT/INSERT/UPDATE own
│   │   ├── store_items: SELECT all (público)
│   │   └── etc.
│   └── 4.3 Políticas para Service Role
│
├── 5. FUNCIONES DE POSTGRES
│   │
│   ├── 5.1 fn_handle_new_user()
│   │   ├── Trigger: AFTER INSERT ON auth.users
│   │   ├── Acción: Crear profile, avatar_state, wallet, subscription
│   │   └── SQL Completo
│   │
│   ├── 5.2 fn_complete_task_transaction()
│   │   ├── Input: user_id, task_id, btc_reward, vector_changes
│   │   ├── Acción: Transacción atómica
│   │   └── SQL Completo
│   │
│   ├── 5.3 fn_process_judgement_transaction()
│   │   ├── Input: user_id, new_state, day_status, metrics
│   │   ├── Acción: Transacción atómica
│   │   └── SQL Completo
│   │
│   ├── 5.4 fn_purchase_item_transaction()
│   │   ├── Input: user_id, item_id
│   │   ├── Acción: Validar y procesar compra
│   │   └── SQL Completo
│   │
│   ├── 5.5 fn_process_avatar_death()
│   │   ├── Input: user_id
│   │   ├── Acción: Reset de estado
│   │   └── SQL Completo
│   │
│   └── 5.6 fn_update_updated_at()
│       ├── Trigger: BEFORE UPDATE
│       └── SQL Completo
│
├── 6. ÍNDICES Y OPTIMIZACIÓN
│   │
│   ├── 6.1 Índices Primarios (automáticos)
│   ├── 6.2 Índices de Foreign Key
│   ├── 6.3 Índices Compuestos
│   │   ├── daily_tasks(user_id, day_number)
│   │   ├── daily_tasks(user_id, status)
│   │   ├── daily_logs(user_id, day_number)
│   │   └── inventory(user_id, equipped)
│   └── 6.4 Índices Parciales
│
├── 7. ESTRATEGIA DE MIGRACIONES
│   │
│   ├── 7.1 Herramienta: Supabase Migrations
│   ├── 7.2 Convención de Nombres
│   ├── 7.3 Proceso de Migración
│   └── 7.4 Rollback Strategy
│
└── 8. SEED DATA
    │
    ├── 8.1 Store Items (Catálogo inicial)
    └── 8.2 Protocolo de Tareas (100 días)
```

### Tareas Atómicas para 01.4 Data Model

```yaml
TAREA-01.4.1:
  Nombre: "Crear estructura base Data Model"
  Acción: "Crear /docs/04_DATA_MODEL.md"
  Responsable: Claude

TAREA-01.4.2:
  Nombre: "Crear Diagrama ER"
  Acción: "Diagrama ASCII de relaciones"
  Responsable: Claude
  Prompt para Claude: |
    Crea un diagrama ER en ASCII mostrando:
    - auth.users (1) ─── (1) profiles
    - profiles (1) ─── (1) avatar_states
    - profiles (1) ─── (1) wallets
    - profiles (1) ─── (1) subscriptions
    - profiles (1) ─── (N) daily_tasks
    - profiles (1) ─── (N) daily_logs
    - profiles (1) ─── (N) inventory
    - store_items (1) ─── (N) inventory

TAREA-01.4.3:
  Nombre: "Documentar Tabla profiles"
  Acción: "Diccionario completo"
  Responsable: Claude
  Prompt para Claude: |
    Documenta la tabla profiles con:
    - id: UUID PK FK→auth.users
    - nickname: VARCHAR(50) UNIQUE NOT NULL (MetaMen1, MetaMen2...)
    - email: VARCHAR(255)
    - phone: VARCHAR(20) UNIQUE
    - phone_verified: BOOLEAN DEFAULT false
    - timezone: VARCHAR(50) DEFAULT 'America/Mexico_City'
    - base_avatar_id: INTEGER (1-6, los arquetipos)
    - onboarding_completed: BOOLEAN DEFAULT false
    - created_at, updated_at: TIMESTAMPTZ

TAREA-01.4.4:
  Nombre: "Documentar Tabla avatar_states"
  Acción: "Diccionario con vectores correctos"
  Responsable: Claude
  Prompt para Claude: |
    Documenta la tabla avatar_states con los vectores del cuestionario1:
    - user_id: UUID FK→profiles
    - aura_lvl: DECIMAL(4,2) DEFAULT 1.00 [1.0-13.0] (Arquetipo Mental)
    - face_lvl: DECIMAL(4,2) DEFAULT 1.00 [1.0-13.0] (Arquetipo Cara/JAWLINE)
    - wealth_lvl: DECIMAL(4,2) DEFAULT 1.00 [1.0-13.0] (Arquetipo Productividad)
    - muscle_lvl: DECIMAL(4,2) DEFAULT 1.00 [1.0-13.0] (Arquetipo Físico)
    - fat_lvl: DECIMAL(4,2) DEFAULT 13.00 [13.0-1.0 inverso] (Arquetipo Físico)
    - env_lvl: INTEGER DEFAULT 1 [1-13] (Progresión temporal)
    - health_points: INTEGER DEFAULT 10 [0-10, expandible a 13]
    - current_day: INTEGER DEFAULT 1 [1-100]
    - current_level: INTEGER DEFAULT 1 [1-10, +11-13 post-game]
    - streak_days: INTEGER DEFAULT 0
    - last_image_url: TEXT
    - last_image_generated_at: TIMESTAMPTZ

TAREA-01.4.5:
  Nombre: "Documentar Tabla wallets"
  Acción: "Diccionario completo"
  Responsable: Claude

TAREA-01.4.6:
  Nombre: "Documentar Tabla daily_tasks"
  Acción: "Diccionario con categorías de arquetipos"
  Responsable: Claude
  Prompt para Claude: |
    Documenta daily_tasks con las categorías del cuestionario1:
    - task_category debe incluir:
      - Arquetipo Mental: meditation, cold_shower, reading, wake_early
      - Arquetipo Cara: posture, facial, kegel
      - Arquetipo Productividad: journal, skill_learning, focus_work
      - Arquetipo Físico: strength, cardio, hydration

TAREA-01.4.7:
  Nombre: "Documentar Tablas Restantes"
  Acción: "daily_logs, subscriptions, store_items, inventory, etc."
  Responsable: Claude

TAREA-01.4.8:
  Nombre: "Documentar ENUMs"
  Acción: "Todos los tipos personalizados"
  Responsable: Claude

TAREA-01.4.9:
  Nombre: "Documentar RLS Policies"
  Acción: "SQL completo de cada política"
  Responsable: Claude

TAREA-01.4.10:
  Nombre: "Documentar Funciones de Postgres"
  Acción: "SQL completo de cada función"
  Responsable: Claude

  TAREA-01.4.11:
    Nombre: "Documentar Índices y Optimización"
    Acción: "Lista completa de índices requeridos"
    Responsable: Claude

  TAREA-01.4.12:
    Nombre: "Documentar Estrategia de Migraciones"
    Acción: "Proceso y convenciones"
    Responsable: Claude

  TAREA-01.4.13:
    Nombre: "Crear Seed Data de Store Items"
    Acción: "JSON/SQL con catálogo inicial"
    Responsable: Claude
    Prompt para Claude: |
      Crea el seed data para store_items con categorías:
      - Armadura (ropa por nivel)
      - Accesorios (relojes, cadenas, lentes)
      - Vehículos (por nivel: bici, moto, carro, deportivo, supercar)
      - Propiedades (por nivel: cuarto, depa, casa, mansión)
      - Compañeras (gating por fat_lvl + nivel)
      - Mascotas
      - Power-ups

      Cada item debe tener:
      - Nombre, descripción, precio BTC
      - Nivel requerido
      - Gating especial (ej: fat_lvl < 5 para joyas)
      - Prompt tokens para IA

  TAREA-01.4.14:
    Nombre: "Revisión Final Data Model"
    Acción: "Verificar consistencia"
    Responsable: Claude

  ---
  SUBCAJA 01.5: GDD

  Game Design Document

  Archivo a Crear

  Ruta: /docs/05_GDD.md
  Tamaño Estimado: ~4,000 líneas
  Tiempo de Generación: 60-90 minutos

  Estructura del Documento

  05_GDD.md
  │
  ├── 1. RESUMEN DEL JUEGO
  │   ├── 1.1 Concepto Central (One-liner)
  │   ├── 1.2 Género: Gamificación + RPG de Progresión Personal
  │   ├── 1.3 Plataforma: Web (Mobile First)
  │   ├── 1.4 Target: Hombres 20-35
  │   └── 1.5 Unique Selling Points
  │
  ├── 2. SISTEMA DE VECTORES (El Corazón del Sistema)
  │   │
  │   ├── 2.1 Filosofía de los Vectores
  │   │   └── "Tu avatar es tu espejo bio-digital"
  │   │
  │   ├── 2.2 Vector: AURA (aura_lvl)
  │   │   ├── Descripción: Presencia, energía, magnetismo personal
  │   │   ├── Rango: 1.00 - 13.00
  │   │   ├── Arquetipo de Tareas: MENTAL
  │   │   ├── Tareas que lo Afectan:
  │   │   │   ├── Meditación (+0.05 por sesión)
  │   │   │   ├── Ducha fría (+0.03 por sesión)
  │   │   │   ├── Lectura (+0.03 por sesión)
  │   │   │   └── Despertar temprano (+0.02 por día)
  │   │   ├── Decay: -0.01 por día sin tarea mental
  │   │   ├── Efecto Visual: Brillo/glow alrededor del avatar
  │   │   └── Tokens IA por Nivel
  │   │
  │   ├── 2.3 Vector: JAWLINE (face_lvl)
  │   │   ├── Descripción: Definición facial, mandíbula, atractivo facial
  │   │   ├── Rango: 1.00 - 13.00
  │   │   ├── Arquetipo de Tareas: CARA
  │   │   ├── Tareas que lo Afectan:
  │   │   │   ├── Corrección de postura (+0.03 por sesión)
  │   │   │   ├── Ejercicios faciales/Mewing (+0.04 por sesión)
  │   │   │   └── Kegel (+0.02 por sesión, 2x día)
  │   │   ├── Decay: -0.01 por día sin tarea facial
  │   │   ├── Efecto Visual: Definición de mandíbula, simetría
  │   │   └── Tokens IA por Nivel
  │   │
  │   ├── 2.4 Vector: WEALTH (wealth_lvl)
  │   │   ├── Descripción: Apariencia de éxito, riqueza percibida
  │   │   ├── Rango: 1.00 - 13.00
  │   │   ├── Arquetipo de Tareas: PRODUCTIVIDAD
  │   │   ├── Tareas que lo Afectan:
  │   │   │   ├── Journal (+0.03 por entrada)
  │   │   │   ├── Aprendizaje de skill (+0.05 por hora)
  │   │   │   └── Focus work (+0.02 por hora, 3h/día)
  │   │   ├── Decay: -0.01 por día sin productividad
  │   │   ├── Efecto Visual: Calidad de ropa, accesorios, entorno
  │   │   └── Tokens IA por Nivel
  │   │
  │   ├── 2.5 Vector: PHYSIQUE (muscle_lvl + fat_lvl)
  │   │   │
  │   │   ├── 2.5.1 SUB-VECTOR: MÚSCULO (muscle_lvl)
  │   │   │   ├── Descripción: Masa muscular, tonificación
  │   │   │   ├── Rango: 1.00 - 13.00 (ascendente)
  │   │   │   ├── Tareas que lo Afectan:
  │   │   │   │   ├── Entrenamiento de fuerza (+0.05 por sesión)
  │   │   │   │   └── Hidratación (+0.01 por día completado)
  │   │   │   ├── Decay: -0.02 por día sin fuerza
  │   │   │   └── Efecto Visual: Tamaño de músculos, definición
  │   │   │
  │   │   └── 2.5.2 SUB-VECTOR: GRASA (fat_lvl)
  │   │   │   ├── Descripción: Porcentaje de grasa corporal
  │   │   │   ├── Rango: 13.00 - 1.00 (INVERSO: 13=obeso, 1=definido)
  │   │   │   ├── Tareas que lo Afectan:
  │   │   │   │   ├── Cardio (-0.05 de grasa por sesión)
  │   │   │   │   ├── Hidratación (-0.01 de grasa por día)
  │   │   │   │   └── Focus work (-0.01, actividad sedentaria controlada)
  │   │   │   ├── Decay: +0.02 por día sin cardio
  │   │   │   └── Efecto Visual: Definición abdominal, cara hinchada vs definida
  │   │   │
  │   │   └── 2.5.3 Cálculo Combinado de PHYSIQUE
  │   │       └── physique_score = (muscle_lvl + (14 - fat_lvl)) / 2
  │   │
  │   └── 2.6 Vector: ENV (env_lvl)
  │       ├── Descripción: Calidad del entorno, escenario de fondo
  │       ├── Rango: 1 - 13 (entero)
  │       ├── Progresión: Basado en nivel del usuario + tiempo
  │       ├── Niveles de Entorno:
  │       │   ├── 1-2: Calle, bajo puente
  │       │   ├── 3-4: Cuarto de servicio
  │       │   ├── 5-6: Departamento básico
  │       │   ├── 7-8: Departamento de lujo
  │       │   ├── 9-10: Casa moderna
  │       │   ├── 11-12: Mansión
  │       │   └── 13: Penthouse/Yate
  │       ├── Efecto Visual: Fondo completo de la imagen
  │       └── Tokens IA por Nivel
  │
  ├── 3. SISTEMA DE NIVELES (Progresión del Usuario)
  │   │
  │   ├── 3.1 Filosofía de Niveles
  │   │   └── "De la marginalidad al éxito absoluto"
  │   │
  │   ├── 3.2 Niveles Base (1-10)
  │   │   │
  │   │   ├── Nivel 1: INDIGENTE
  │   │   │   ├── Descripción: El punto más bajo
  │   │   │   ├── Días: 1-2
  │   │   │   ├── Entorno: Bajo un puente, cartón
  │   │   │   ├── Ropa: Harapos
  │   │   │   └── Video de Hito: Avatar mirándose en charco
  │   │   │
  │   │   ├── Nivel 2: ARRIMADO
  │   │   │   ├── Descripción: Pidiendo asilo
  │   │   │   ├── Días: 3-5
  │   │   │   ├── Entorno: Sofá de conocido
  │   │   │   ├── Ropa: Ropa prestada
  │   │   │   └── Video de Hito: Tocando puerta para pedir alojamiento
  │   │   │
  │   │   ├── Nivel 3: ALUCÍN (HITO DÍA 6 - CONVERSIÓN)
  │   │   │   ├── Descripción: Primer trabajo, primeras posesiones
  │   │   │   ├── Días: 6-15
  │   │   │   ├── Entorno: Cuarto de servicio
  │   │   │   ├── Ropa: Jeans, playera básica
  │   │   │   ├── Video de Hito: Poniéndose gorra y cadena por primera vez
  │   │   │   └── **PUNTO DE CONVERSIÓN: Trial → Pago**
  │   │   │
  │   │   ├── Nivel 4: CHALÁN
  │   │   │   ├── Descripción: Empleado básico
  │   │   │   ├── Días: 16-30
  │   │   │   ├── Entorno: Cuarto rentado
  │   │   │   ├── Ropa: Uniforme de trabajo
  │   │   │   └── Video de Hito: Recibiendo primer sueldo
  │   │   │
  │   │   ├── Nivel 5: GODÍN
  │   │   │   ├── Descripción: Oficinista
  │   │   │   ├── Días: 31-45
  │   │   │   ├── Entorno: Departamento pequeño
  │   │   │   ├── Ropa: Camisa, pantalón vestir
  │   │   │   └── Video de Hito: Entrando a oficina
  │   │   │
  │   │   ├── Nivel 6: ACOMODADO
  │   │   │   ├── Descripción: Profesionista estable
  │   │   │   ├── Días: 46-60
  │   │   │   ├── Entorno: Departamento nice
  │   │   │   ├── Ropa: Ropa de marca básica
  │   │   │   └── Video de Hito: Comprando primer auto
  │   │   │
  │   │   ├── Nivel 7: PUDIENTE
  │   │   │   ├── Descripción: Gerente / Emprendedor exitoso
  │   │   │   ├── Días: 61-75
  │   │   │   ├── Entorno: Casa propia
  │   │   │   ├── Ropa: Traje
  │   │   │   └── Video de Hito: Cerrando negocio importante
  │   │   │
  │   │   ├── Nivel 8: MILLONARIO
  │   │   │   ├── Descripción: Patrimonio de 7 cifras
  │   │   │   ├── Días: 76-85
  │   │   │   ├── Entorno: Casa de lujo
  │   │   │   ├── Ropa: Ropa de diseñador
  │   │   │   └── Video de Hito: En auto deportivo
  │   │   │
  │   │   ├── Nivel 9: MAGNATE
  │   │   │   ├── Descripción: Imperio empresarial
  │   │   │   ├── Días: 86-95
  │   │   │   ├── Entorno: Mansión
  │   │   │   ├── Ropa: Traje a la medida
  │   │   │   └── Video de Hito: En helicóptero
  │   │   │
  │   │   └── Nivel 10: SEMI-DIOS
  │   │       ├── Descripción: Dominio total
  │   │       ├── Días: 96-100
  │   │       ├── Entorno: Penthouse / Yate
  │   │       ├── Ropa: Lo mejor de lo mejor
  │   │       └── Video de Hito: Escena épica de celebración día 100
  │   │
  │   └── 3.3 Niveles Post-Game (11-13) - MODO PRESTIGIO
  │       ├── Nivel 11: ÉLITE
  │       ├── Nivel 12: LEYENDA
  │       └── Nivel 13: INMORTAL
  │
  ├── 4. SISTEMA DE ARQUETIPOS (Las 6 Semillas)
  │   │
  │   ├── 4.1 Propósito de los Arquetipos
  │   │   └── Identidad visual base que se transforma
  │   │
  │   ├── 4.2 Arquetipo 1: "RASTAS"
  │   │   ├── Nombre Real: Por definir durante onboarding
  │   │   ├── Descripción: Ex-gamer bonachón
  │   │   ├── Apariencia: Dreadlocks, cara redonda, amigable
  │   │   ├── Lore: "Pasó años frente a la pantalla..."
  │   │   ├── Identity Anchors (para IA):
  │   │   │   ├── Pelo: "brown dreadlocks, thick locks"
  │   │   │   ├── Cara: "round face, friendly eyes, wide nose"
  │   │   │   └── Tono: "warm brown skin"
  │   │   └── Transformación Visual: De gamer a CEO tech
  │   │
  │   ├── 4.3 Arquetipo 2: "EL MUSCLES"
  │   │   ├── Descripción: Ex-cadenero, espalda ancha
  │   │   ├── Apariencia: Calvo, cuello grueso, intimidante
  │   │   ├── Lore: "Trabajó la noche en antros..."
  │   │   ├── Identity Anchors:
  │   │   │   ├── Pelo: "bald, shaved head"
  │   │   │   ├── Cara: "square jaw, small eyes, thick neck"
  │   │   │   └── Tono: "tan skin"
  │   │   └── Transformación Visual: De matón a empresario fitness
  │   │
  │   ├── 4.4 Arquetipo 3: "PECAS"
  │   │   ├── Descripción: Genio cripto caído
  │   │   ├── Apariencia: Pelo rizado, pecas, delgado
  │   │   ├── Lore: "Hizo millones y lo perdió todo..."
  │   │   ├── Identity Anchors:
  │   │   │   ├── Pelo: "curly red-brown hair, messy"
  │   │   │   ├── Cara: "freckles, thin face, sharp features"
  │   │   │   └── Tono: "pale skin with freckles"
  │   │   └── Transformación Visual: De nerd quebrado a magnate tech
  │   │
  │   ├── 4.5 Arquetipo 4: "EL GREÑAS"
  │   │   ├── Descripción: Rockero calvo con perilla
  │   │   ├── Apariencia: Calvo arriba, greñas atrás, perilla
  │   │   ├── Lore: "La banda nunca despegó..."
  │   │   ├── Identity Anchors:
  │   │   │   ├── Pelo: "balding with long hair in back, goatee"
  │   │   │   ├── Cara: "angular face, deep set eyes"
  │   │   │   └── Tono: "weathered skin"
  │   │   └── Transformación Visual: De músico frustrado a productor exitoso
  │   │
  │   ├── 4.6 Arquetipo 5: "EL RUBIO"
  │   │   ├── Descripción: Galán de prepa pasado de moda
  │   │   ├── Apariencia: Rubio, mandíbula cuadrada, ex-atleta
  │   │   ├── Lore: "El más popular, ahora olvidado..."
  │   │   ├── Identity Anchors:
  │   │   │   ├── Pelo: "blonde wavy hair, styled back"
  │   │   │   ├── Cara: "strong jaw, blue eyes, handsome"
  │   │   │   └── Tono: "fair skin"
  │   │   └── Transformación Visual: De glory days a nuevo prime
  │   │
  │   └── 4.7 Arquetipo 6: "EL LIC"
  │       ├── Descripción: Ejecutivo reemplazado por IA
  │       ├── Apariencia: Pelo negro, lentes, barba de días
  │       ├── Lore: "El algoritmo lo dejó sin empleo..."
  │       ├── Identity Anchors:
  │       │   ├── Pelo: "black hair, receding hairline"
  │       │   ├── Cara: "rectangular glasses, stubble, tired eyes"
  │       │   └── Tono: "olive skin"
  │       └── Transformación Visual: De despedido a dueño de la empresa
  │
  ├── 5. SISTEMA DE SALUD (Corazones)
  │   │
  │   ├── 5.1 Mecánica Base
  │   │   ├── Máximo Inicial: 10 corazones
  │   │   ├── Máximo Expandido: 13 corazones (post-game)
  │   │   └── Al llegar a 0: MUERTE DEL AVATAR
  │   │
  │   ├── 5.2 Cómo se Pierde Salud
  │   │   ├── Judgement Night con < 80% completado: -1 corazón
  │   │   ├── Judgement Night con 0% completado: -2 corazones
  │   │   ├── Cada 3 días en Modo Limbo: -1 corazón
  │   │   └── [Futuro] Eventos especiales negativos
  │   │
  │   ├── 5.3 Cómo se Recupera Salud
  │   │   ├── Racha de 7 días: +1 corazón (si < máximo)
  │   │   ├── Completar día al 100%: Preserva salud
  │   │   └── [Futuro] Items de tienda
  │   │
  │   ├── 5.4 Estados de Salud
  │   │   ├── Saludable (8-10/13): UI normal
  │   │   ├── Herido (4-7): UI con advertencia amarilla
  │   │   ├── Crítico (1-3): UI con advertencia roja, notificaciones
  │   │   └── Muerto (0): Pantalla de muerte, reset
  │   │
  │   └── 5.5 Visualización
  │       ├── Barra de corazones estilo Zelda
  │       ├── Animación de pérdida (corazón roto)
  │       └── Efecto visual en avatar (heridas, vendajes)
  │
  ├── 6. SISTEMA DE RACHA (Streak)
  │   │
  │   ├── 6.1 Definición de Día Exitoso
  │   │   └── Completar ≥ 80% de las tareas del protocolo
  │   │
  │   ├── 6.2 Multiplicadores de BTC por Racha
  │   │   ├── 0-6 días: x1.0 (base)
  │   │   ├── 7-13 días: x1.1
  │   │   ├── 14-20 días: x1.2
  │   │   ├── 21-29 días: x1.3
  │   │   ├── 30-59 días: x1.5
  │   │   ├── 60-89 días: x1.75
  │   │   └── 90+ días: x2.0
  │   │
  │   ├── 6.3 Bonificaciones Especiales
  │   │   ├── 7 días: +1 corazón
  │   │   ├── 14 días: +500 BTC bonus
  │   │   ├── 30 días: +1,500 BTC + Badge especial
  │   │   ├── 60 días: +3,000 BTC + Item exclusivo
  │   │   └── 100 días: Recompensa épica
  │   │
  │   ├── 6.4 Ruptura de Racha
  │   │   ├── Se rompe al completar < 80%
  │   │   ├── Contador vuelve a 0
  │   │   ├── Multiplicador vuelve a x1.0
  │   │   └── Animación de "racha rota"
  │   │
  │   └── 6.5 Protección de Racha (Futuro)
  │       └── Item comprable para proteger 1 día
  │
  ├── 7. JUDGEMENT NIGHT (Cierre del Día)
  │   │
  │   ├── 7.1 Timing
  │   │   ├── Se ejecuta a las 00:00 hora local del usuario
  │   │   ├── Basado en timezone del perfil
  │   │   └── Job programado (cron)
  │   │
  │   ├── 7.2 Proceso
  │   │   ├── 1. Obtener tareas del día del usuario
  │   │   ├── 2. Calcular completion rate
  │   │   ├── 3. Determinar resultado (success/partial/failed)
  │   │   ├── 4. Aplicar cambios de salud
  │   │   ├── 5. Actualizar racha
  │   │   ├── 6. Aplicar decay biológico
  │   │   ├── 7. Avanzar día
  │   │   ├── 8. Encolar generación de imagen
  │   │   ├── 9. Crear log del día
  │   │   └── 10. Enviar notificaciones
  │   │
  │   ├── 7.3 Resultados Posibles
  │   │   │
  │   │   ├── SUCCESS (100%)
  │   │   │   ├── Salud: Sin cambio
  │   │   │   ├── Racha: +1
  │   │   │   ├── Imagen: Prioridad alta
  │   │   │   └── Notificación: Celebración
  │   │   │
  │   │   ├── PARTIAL (80-99%)
  │   │   │   ├── Salud: Sin cambio
  │   │   │   ├── Racha: +1
  │   │   │   ├── Imagen: Prioridad normal
  │   │   │   └── Notificación: Día superado
  │   │   │
  │   │   ├── FAILED (< 80%)
  │   │   │   ├── Salud: -1 corazón
  │   │   │   ├── Racha: Reset a 0
  │   │   │   ├── Imagen: Prioridad baja
  │   │   │   └── Notificación: Advertencia
  │   │   │
  │   │   └── DEATH (0 corazones tras failed)
  │   │       ├── Ejecutar proceso de muerte
  │   │       ├── Imagen: Avatar deteriorado
  │   │       └── Notificación: Alerta de muerte
  │   │
  │   └── 7.4 Decay Biológico
  │       ├── Si no hubo cardio: fat_lvl + 0.02
  │       ├── Si no hubo fuerza: muscle_lvl - 0.02
  │       ├── Si no hubo meditación: aura_lvl - 0.01
  │       └── Mínimos/máximos respetados
  │
  ├── 8. MUERTE Y RESURRECCIÓN
  │   │
  │   ├── 8.1 Qué SE RESETEA
  │   │   ├── fat_lvl → 13.00 (máxima grasa)
  │   │   ├── muscle_lvl → 1.00 (mínimo músculo)
  │   │   ├── health_points → 10 (salud completa)
  │   │   ├── streak_days → 0
  │   │   ├── current_day → 1 (reinicio del protocolo)
  │   │   └── current_level → 1
  │   │
  │   ├── 8.2 Qué se CONSERVA
  │   │   ├── aura_lvl (Progreso mental)
  │   │   ├── face_lvl (Progreso facial)
  │   │   ├── wealth_lvl (Progreso productivo)
  │   │   ├── env_lvl (Parcialmente, -3 niveles)
  │   │   ├── BTC en wallet (Sin penalización)
  │   │   ├── Inventario comprado
  │   │   └── Historial y estadísticas
  │   │
  │   ├── 8.3 Bloqueo de Items
  │   │   └── Items con nivel_requerido > nivel_actual se bloquean
  │   │       (No se pierden, solo no se pueden usar)
  │   │
  │   ├── 8.4 Pantalla de Muerte
  │   │   ├── Animación dramática
  │   │   ├── Resumen de lo perdido
  │   │   ├── Resumen de lo conservado
  │   │   ├── Mensaje motivacional
  │   │   └── Botón "Renacer"
  │   │
  │   └── 8.5 Filosofía de la Muerte
  │       └── "El dolor de perder el físico enseña el valor del esfuerzo"
  │
  ├── 9. ECONOMÍA (Sistema de BTC)
  │   │
  │   ├── 9.1 Moneda Virtual: BTC
  │   │   └── 100% ficticio, sin valor real
  │   │
  │   ├── 9.2 Fuentes de BTC
  │   │   │
  │   │   ├── 9.2.1 Recompensas por Tarea
  │   │   │   ├── Meditación: 15 BTC
  │   │   │   ├── Ducha fría: 20 BTC
  │   │   │   ├── Lectura: 15 BTC
  │   │   │   ├── Despertar temprano: 10 BTC
  │   │   │   ├── Corrección postura: 15 BTC
  │   │   │   ├── Ejercicios faciales: 15 BTC
  │   │   │   ├── Kegel: 10 BTC (x2 al día)
  │   │   │   ├── Journal: 20 BTC
  │   │   │   ├── Skill learning: 25 BTC/hora
  │   │   │   ├── Focus work: 20 BTC/hora (máx 3h)
  │   │   │   ├── Fuerza: 30 BTC
  │   │   │   ├── Cardio: 25 BTC
  │   │   │   └── Hidratación: 10 BTC
  │   │   │
  │   │   ├── 9.2.2 Bonos
  │   │   │   ├── Día perfecto: +50 BTC
  │   │   │   ├── Subida de nivel: +100 × nivel BTC
  │   │   │   └── Bonos de racha (ver sección 6.3)
  │   │   │
  │   │   └── 9.2.3 Compra con Dinero Real (Premium)
  │   │       ├── Pack 1: 1,000 BTC = $1.99 USD
  │   │       ├── Pack 2: 5,000 BTC = $7.99 USD
  │   │       └── Pack 3: 15,000 BTC = $19.99 USD
  │   │
  │   ├── 9.3 Usos de BTC
  │   │   ├── Comprar items en tienda
  │   │   ├── [Futuro] Desbloquear features
  │   │   └── [Futuro] Protección de racha
  │   │
  │   ├── 9.4 Balance y Anti-Farming
  │   │   ├── Daily cap: ~250 BTC/día sin bonos
  │   │   └── Tareas no se pueden completar múltiples veces
  │   │
  │   └── 9.5 Escasez y Valor Percibido
  │       └── Items caros para crear aspiración
  │
  ├── 10. PROTOCOLO DE 100 DÍAS
  │   │
  │   ├── 10.1 Estructura Semanal de Tareas
  │   │   │
  │   │   ├── ARQUETIPO MENTAL (aura_lvl):
  │   │   │   ├── Meditación: 7 sesiones/semana
  │   │   │   ├── Ducha fría: 3 sesiones/semana
  │   │   │   ├── Lectura: 7 sesiones/semana
  │   │   │   └── Despertar temprano: 7 días/semana
  │   │   │
  │   │   ├── ARQUETIPO CARA (face_lvl):
  │   │   │   ├── Corrección postura: 3 sesiones/semana
  │   │   │   ├── Ejercicios faciales: 3 sesiones/semana
  │   │   │   └── Kegel: 10 sesiones/semana (2/día × 5 días)
  │   │   │
  │   │   ├── ARQUETIPO PRODUCTIVIDAD (wealth_lvl):
  │   │   │   ├── Journal: 6 sesiones/semana
  │   │   │   ├── Skill learning: 5 horas/semana
  │   │   │   └── Focus work: 15 horas/semana
  │   │   │
  │   │   └── ARQUETIPO FÍSICO (muscle_lvl, fat_lvl):
  │   │       ├── Fuerza: 5 sesiones/semana
  │   │       ├── Cardio: 3 sesiones/semana
  │   │       └── Hidratación (1.5L): 7 días/semana
  │   │
  │   ├── 10.2 Fases del Protocolo
  │   │   │
  │   │   ├── FASE 1: DESPERTAR (Días 1-25)
  │   │   │   ├── Foco: Establecer hábitos básicos
  │   │   │   └── Dificultad: Tareas simples
  │   │   │
  │   │   ├── FASE 2: CONSTRUCCIÓN (Días 26-50)
  │   │   │   ├── Foco: Intensificar
  │   │   │   └── Dificultad: Tareas más largas
  │   │   │
  │   │   ├── FASE 3: TRANSFORMACIÓN (Días 51-75)
  │   │   │   ├── Foco: Resultados visibles
  │   │   │   └── Dificultad: Alta
  │   │   │
  │   │   └── FASE 4: MAESTRÍA (Días 76-100)
  │   │       ├── Foco: Consolidación
  │   │       └── Dificultad: Máxima
  │   │
  │   └── 10.3 Hitos Especiales
  │       ├── Día 6: Conversión (Trial termina)
  │       ├── Día 30: Primer mes completo
  │       ├── Día 60: Dos meses
  │       └── Día 100: Victoria
  │
  ├── 11. ARSENAL DE HERRAMIENTAS
  │   │
  │   ├── 11.1 BIBLIOTECA DE PODER
  │   │   ├── Función: Lectura gamificada
  │   │   ├── Features: Catálogo de PDFs, tracking de páginas, timer
  │   │   └── Validación: 15 min de lectura = tarea completada
  │   │
  │   ├── 11.2 TEMPLO DEL HIERRO
  │   │   ├── Función: Gym tracker
  │   │   ├── Features: Ejercicios, series/reps, peso, timer descanso
  │   │   └── Validación: Completar rutina = tarea completada
  │   │
  │   ├── 11.3 CÁMARA DE MEDITACIÓN
  │   │   ├── Función: Meditación guiada
  │   │   ├── Features: Audios guiados, binaurales, timer libre
  │   │   └── Validación: 90% del audio = tarea completada
  │   │
  │   ├── 11.4 BITÁCORA DE GUERRA (Journal)
  │   │   ├── Función: Diario personal
  │   │   ├── Features: Editor rico, prompts, historial
  │   │   └── Validación: Mínimo 100 palabras = tarea completada
  │   │
  │   ├── 11.5 VITALIDAD SEXUAL (Kegel)
  │   │   ├── Función: Ejercicios de suelo pélvico
  │   │   ├── Features: Sistema aprieta/afloja visual
  │   │   └── Validación: Completar rutina = tarea completada
  │   │
  │   ├── 11.6 ESCULTOR FACIAL
  │   │   ├── Función: Yoga facial y mewing
  │   │   ├── Features: Videos demostrativos, timer
  │   │   └── Validación: Completar rutina = tarea completada
  │   │
  │   ├── 11.7 CREA TU HIPNOSIS [PREMIUM]
  │   │   ├── Función: Generar audio de afirmaciones con IA
  │   │   ├── Features: Editor de decretos, selector de ondas, IA voice
  │   │   └── Validación: Escuchar audio = bonus (no obligatorio)
  │   │
  │   ├── 11.8 MOVILIDAD TÁCTICA
  │   │   ├── Función: Stretching y corrección postural
  │   │   ├── Features: 3 rutinas, videos, timer
  │   │   └── Validación: Completar rutina = tarea completada
  │   │
  │   └── 11.9 FOCUS CHAMBER
  │       ├── Función: Pomodoro con música
  │       ├── Features: Timer configurable, música concentración
  │       └── Validación: Completar bloques = horas de focus work
  │
  ├── 12. TIENDA E INVENTARIO
  │   │
  │   ├── 12.1 Categorías de Items
  │   │   ├── Armadura (Ropa)
  │   │   ├── Accesorios
  │   │   ├── Vehículos
  │   │   ├── Propiedades
  │   │   ├── Compañeras
  │   │   ├── Mascotas
  │   │   └── Power-ups
  │   │
  │   ├── 12.2 Gating de Items
  │   │   ├── Por Nivel: item.level_required <= user.level
  │   │   ├── Por Vector: Ej. joyas requieren fat_lvl < 5
  │   │   └── Por Exclusividad: Items únicos
  │   │
  │   └── 12.3 Efecto en IA
  │       └── Items equipados agregan tokens al prompt
  │
  └── 13. SUSCRIPCIÓN Y LIMBO
      │
      ├── 13.1 Modelo de Suscripción
      │   ├── Trial: 5 días gratis (termina día 6)
      │   ├── Mensual: $19.90 USD/mes
      │   └── Anual: $140 USD/año (40% descuento)
      │
      ├── 13.2 Modo Limbo
      │   ├── Trigger: Trial expirado o pago fallido
      │   ├── Acceso: Solo lectura
      │   ├── Degradación: -1 corazón cada 3 días
      │   ├── Límite: 30 días
      │   └── Recuperación: Pagar reactiva cuenta
      │
      └── 13.3 Qué Incluye la Suscripción
          ├── Acceso completo a herramientas
          ├── Generación de imagen diaria
          ├── Crea tu Hipnosis
          └── Sin anuncios

  Tareas Atómicas para 01.5 GDD

  TAREA-01.5.1:
    Nombre: "Crear estructura base GDD"
    Acción: "Crear /docs/05_GDD.md"
    Responsable: Claude

  TAREA-01.5.2:
    Nombre: "Documentar Sistema de Vectores Completo"
    Acción: "Sección 2 con AURA, JAWLINE, WEALTH, PHYSIQUE, ENV"
    Responsable: Claude
    Prompt para Claude: |
      Documenta los 5 vectores del cuestionario1:
      - AURA (aura_lvl): Arquetipo Mental
      - JAWLINE (face_lvl): Arquetipo Cara
      - WEALTH (wealth_lvl): Arquetipo Productividad
      - PHYSIQUE (muscle_lvl + fat_lvl): Arquetipo Físico
      - ENV (env_lvl): Progresión temporal

      Para cada vector incluye:
      - Tareas que lo afectan
      - Modificadores exactos
      - Decay diario
      - Tokens de IA para cada nivel (1-13)

  TAREA-01.5.3:
    Nombre: "Documentar Sistema de Niveles"
    Acción: "Sección 3 con los 10 niveles + 3 post-game"
    Responsable: Claude
    Prompt para Claude: |
      Documenta los niveles del cuestionario1:
      1. Indigente
      2. Arrimado
      3. Alucín (HITO DÍA 6)
      4. Chalán
      5. Godín
      6. Acomodado
      7. Pudiente
      8. Millonario
      9. Magnate
      10. Semi-Dios
      11-13: Post-game

      Para cada nivel:
      - Días aproximados
      - Descripción narrativa
      - Entorno visual
      - Ropa típica
      - Video de hito (descripción)

  TAREA-01.5.4:
    Nombre: "Documentar Arquetipos de Personajes"
    Acción: "Sección 4 con las 6 semillas"
    Responsable: Claude

  TAREA-01.5.5:
    Nombre: "Documentar Sistema de Salud"
    Acción: "Sección 5 completa"
    Responsable: Claude

  TAREA-01.5.6:
    Nombre: "Documentar Sistema de Racha"
    Acción: "Sección 6 con multiplicadores"
    Responsable: Claude

  TAREA-01.5.7:
    Nombre: "Documentar Judgement Night"
    Acción: "Sección 7 con proceso completo"
    Responsable: Claude

  TAREA-01.5.8:
    Nombre: "Documentar Muerte y Resurrección"
    Acción: "Sección 8 con reglas exactas"
    Responsable: Claude

  TAREA-01.5.9:
    Nombre: "Documentar Economía"
    Acción: "Sección 9 con valores de BTC"
    Responsable: Claude

  TAREA-01.5.10:
    Nombre: "Documentar Protocolo de 100 Días"
    Acción: "Sección 10 con estructura semanal"
    Responsable: Claude

  TAREA-01.5.11:
    Nombre: "Documentar Arsenal de Herramientas"
    Acción: "Sección 11 con las 9 herramientas"
    Responsable: Claude

  TAREA-01.5.12:
    Nombre: "Documentar Tienda y Suscripción"
    Acción: "Secciones 12 y 13"
    Responsable: Claude

  TAREA-01.5.13:
    Nombre: "Revisión Final GDD"
    Acción: "Verificar consistencia con cuestionario1"
    Responsable: Claude

  ---
  SUBCAJA 01.6: Content Specification

  Especificación de Contenido

  Archivo a Crear

  Ruta: /docs/06_CONTENT.md
  Tamaño Estimado: ~2,000 líneas
  Tiempo de Generación: 45-60 minutos

  Estructura del Documento

  06_CONTENT.md
  │
  ├── 1. TAREAS DEL PROTOCOLO
  │   │
  │   ├── 1.1 Estructura de una Tarea
  │   │   ├── ID único
  │   │   ├── Nombre
  │   │   ├── Descripción corta
  │   │   ├── Instrucciones
  │   │   ├── Categoría (task_category)
  │   │   ├── Arquetipo (mental/cara/productividad/físico)
  │   │   ├── Vector que afecta
  │   │   ├── Modificador del vector
  │   │   ├── Recompensa BTC
  │   │   ├── Duración estimada
  │   │   ├── Herramienta asociada
  │   │   └── Criterio de completado
  │   │
  │   ├── 1.2 Tareas por Arquetipo
  │   │   │
  │   │   ├── ARQUETIPO MENTAL
  │   │   │   ├── meditation: Sesión de meditación
  │   │   │   ├── cold_shower: Ducha fría
  │   │   │   ├── reading: Sesión de lectura
  │   │   │   └── wake_early: Despertar a hora ideal
  │   │   │
  │   │   ├── ARQUETIPO CARA
  │   │   │   ├── posture: Ejercicios de postura
  │   │   │   ├── facial: Ejercicios faciales/Mewing
  │   │   │   └── kegel: Ejercicios kegel
  │   │   │
  │   │   ├── ARQUETIPO PRODUCTIVIDAD
  │   │   │   ├── journal: Entrada de diario
  │   │   │   ├── skill_learning: Hora de aprendizaje
  │   │   │   └── focus_work: Hora de trabajo enfocado
  │   │   │
  │   │   └── ARQUETIPO FÍSICO
  │   │       ├── strength: Entrenamiento de fuerza
  │   │       ├── cardio: Sesión de cardio
  │   │       └── hydration: Hidratación diaria
  │   │
  │   └── 1.3 Distribución Semanal
  │       └── [Tabla de qué tareas van qué días]
  │
  ├── 2. CATÁLOGO DE TIENDA
  │   │
  │   ├── 2.1 Estructura de un Item
  │   │   ├── ID
  │   │   ├── Nombre
  │   │   ├── Descripción
  │   │   ├── Categoría
  │   │   ├── Rareza
  │   │   ├── Precio BTC
  │   │   ├── Nivel requerido
  │   │   ├── Gating adicional (vector requirements)
  │   │   ├── Prompt tokens para IA
  │   │   └── Imagen de preview
  │   │
  │   ├── 2.2 Items por Categoría
  │   │   │
  │   │   ├── ARMADURA (Ropa)
  │   │   │   ├── Nivel 1-2: Harapos, ropa de segunda
  │   │   │   ├── Nivel 3-4: Ropa básica, jeans
  │   │   │   ├── Nivel 5-6: Ropa casual nice
  │   │   │   ├── Nivel 7-8: Marcas reconocidas
  │   │   │   ├── Nivel 9-10: Diseñador
  │   │   │   └── [Lista completa de 20-30 items]
  │   │   │
  │   │   ├── ACCESORIOS
  │   │   │   ├── Relojes (por nivel)
  │   │   │   ├── Cadenas (requiere fat_lvl < 5)
  │   │   │   ├── Anillos (por nivel)
  │   │   │   ├── Lentes (por nivel)
  │   │   │   └── [Lista completa]
  │   │   │
  │   │   ├── VEHÍCULOS
  │   │   │   ├── Nivel 3: Bicicleta
  │   │   │   ├── Nivel 4: Moto básica
  │   │   │   ├── Nivel 5: Carro económico (Chevy tuneado)
  │   │   │   ├── Nivel 6: Sedan
  │   │   │   ├── Nivel 7: SUV premium
  │   │   │   ├── Nivel 8: Deportivo
  │   │   │   ├── Nivel 9: Supercar
  │   │   │   └── Nivel 10: Hypercar/Yate
  │   │   │
  │   │   ├── PROPIEDADES
  │   │   │   └── [Afecta env_lvl visual]
  │   │   │
  │   │   ├── COMPAÑERAS
  │   │   │   └── [Gating por fat_lvl y nivel]
  │   │   │
  │   │   ├── MASCOTAS
  │   │   │   └── [Por nivel]
  │   │   │
  │   │   └── POWER-UPS
  │   │       ├── Protección de racha (1 día)
  │   │       ├── Boost de BTC (x2 por 24h)
  │   │       └── [Otros]
  │   │
  │   └── 2.3 Balance Económico
  │       └── [Precios balanceados para progresión]
  │
  ├── 3. TEXTOS DE UI (Copywriting)
  │   │
  │   ├── 3.1 Pantallas de Auth
  │   │   ├── Títulos
  │   │   ├── Subtítulos
  │   │   ├── Labels
  │   │   ├── Placeholders
  │   │   ├── Botones
  │   │   └── Mensajes de error
  │   │
  │   ├── 3.2 Onboarding
  │   │   ├── Texto de bienvenida
  │   │   ├── Descripciones de arquetipos
  │   │   ├── Tutorial de vectores
  │   │   ├── Texto del juramento
  │   │   └── Texto de notificaciones
  │   │
  │   ├── 3.3 Dashboard
  │   │   ├── Labels del HUD
  │   │   └── Tooltips
  │   │
  │   ├── 3.4 Tareas
  │   │   └── [Textos de cada tarea]
  │   │
  │   ├── 3.5 Herramientas
  │   │   └── [Textos de cada herramienta]
  │   │
  │   ├── 3.6 Tienda
  │   │   └── [Textos de navegación y compra]
  │   │
  │   ├── 3.7 Estados Especiales
  │   │   ├── Avatar muerto
  │   │   ├── Modo limbo
  │   │   └── Trial expirado
  │   │
  │   └── 3.8 Notificaciones
  │       ├── Push notifications
  │       └── Emails
  │
  ├── 4. PROMPTS DE IA
  │   │
  │   ├── 4.1 STYLE_HEADER (Inmutable)
  │   │   └── "8bit pixel art, game sprite, vibrant colors..."
  │   │
  │   ├── 4.2 NEGATIVE_PROMPT (Inmutable)
  │   │   └── "blurry, realistic, photograph, 3D render..."
  │   │
  │   ├── 4.3 Identity Anchors por Arquetipo
  │   │   ├── Rastas: [tokens]
  │   │   ├── Muscles: [tokens]
  │   │   ├── Pecas: [tokens]
  │   │   ├── Greñas: [tokens]
  │   │   ├── Rubio: [tokens]
  │   │   └── Lic: [tokens]
  │   │
  │   ├── 4.4 Body State Tokens
  │   │   └── Matriz fat_lvl × muscle_lvl → tokens
  │   │
  │   ├── 4.5 Face State Tokens
  │   │   └── face_lvl 1-13 → tokens
  │   │
  │   ├── 4.6 Posture/Aura Tokens
  │   │   └── aura_lvl 1-13 → tokens
  │   │
  │   ├── 4.7 Attire Tokens
  │   │   └── Por nivel + wealth_lvl + items equipados
  │   │
  │   ├── 4.8 Environment Tokens
  │   │   └── env_lvl 1-13 → tokens
  │   │
  │   └── 4.9 Degradation Tokens
  │       └── health_points → tokens de deterioro
  │
  ├── 5. CONTENIDO DE HERRAMIENTAS
  │   │
  │   ├── 5.1 BIBLIOTECA DE PODER
  │   │   ├── Lista de libros recomendados
  │   │   ├── Categorías de libros
  │   │   └── Fuente de PDFs (legales)
  │   │
  │   ├── 5.2 TEMPLO DEL HIERRO
  │   │   ├── Catálogo de ejercicios
  │   │   ├── Rutinas predefinidas
  │   │   └── GIFs demostrativos
  │   │
  │   ├── 5.3 CÁMARA DE MEDITACIÓN
  │   │   ├── Lista de meditaciones guiadas
  │   │   ├── Sonidos binaurales
  │   │   └── Fuente de audios
  │   │
  │   ├── 5.4 BITÁCORA DE GUERRA
  │   │   └── Prompts diarios para journaling
  │   │
  │   ├── 5.5 VITALIDAD SEXUAL
  │   │   └── Rutinas de kegel por nivel
  │   │
  │   ├── 5.6 ESCULTOR FACIAL
  │   │   ├── Ejercicios de yoga facial
  │   │   ├── Guía de mewing
  │   │   └── Videos demostrativos
  │   │
  │   ├── 5.7 CREA TU HIPNOSIS
  │   │   ├── Decretos ejemplo
  │   │   ├── Tipos de ondas cerebrales
  │   │   └── Configuración de voz IA
  │   │
  │   ├── 5.8 MOVILIDAD TÁCTICA
  │   │   ├── Rutinas de stretching
  │   │   └── Videos
  │   │
  │   └── 5.9 FOCUS CHAMBER
  │       └── Música de concentración (fuentes)
  │
  └── 6. ASSETS REQUERIDOS
      │
      ├── 6.1 Iconos
      ├── 6.2 Imágenes de UI
      ├── 6.3 Previews de tienda
      └── 6.4 Assets de herramientas

  Tareas Atómicas para 01.6 Content

  TAREA-01.6.1:
    Nombre: "Crear estructura base Content"
    Acción: "Crear /docs/06_CONTENT.md"
    Responsable: Claude

  TAREA-01.6.2:
    Nombre: "Documentar Tareas del Protocolo"
    Acción: "Definición completa de cada tarea"
    Responsable: Claude

  TAREA-01.6.3:
    Nombre: "Documentar Catálogo de Tienda"
    Acción: "Lista de items con precios y requisitos"
    Responsable: Claude

  TAREA-01.6.4:
    Nombre: "Redactar Textos de UI"
    Acción: "Copywriting de todas las pantallas"
    Responsable: Claude

  TAREA-01.6.5:
    Nombre: "Documentar Prompts de IA"
    Acción: "Todos los tokens por vector/nivel"
    Responsable: Claude

  TAREA-01.6.6:
    Nombre: "Documentar Contenido de Herramientas"
    Acción: "Recursos necesarios para cada herramienta"
    Responsable: Claude

  ---
  SUBCAJA 01.7: UI/UX Specification

  Especificación de Diseño

  Archivo a Crear

  Ruta: /docs/07_UIUX.md
  Tamaño Estimado: ~1,500 líneas
  Tiempo de Generación: 30-45 minutos

  Estructura del Documento

  07_UIUX.md
  │
  ├── 1. DESIGN SYSTEM
  │   │
  │   ├── 1.1 Paleta de Colores
  │   │   ├── bg-primary: #0A0A0B (Negro profundo)
  │   │   ├── bg-secondary: #111113
  │   │   ├── bg-tertiary: #1A1A1D
  │   │   ├── text-primary: #FFFFFF
  │   │   ├── text-secondary: #A1A1AA
  │   │   ├── accent-gold: #FFD700
  │   │   ├── accent-red: #FF3B30 (peligro)
  │   │   ├── accent-green: #30D158 (éxito)
  │   │   ├── accent-blue: #0A84FF
  │   │   └── [Más colores semánticos]
  │   │
  │   ├── 1.2 Tipografía
  │   │   ├── Font Principal: Inter
  │   │   ├── Font Mono: JetBrains Mono
  │   │   ├── Escala: 12/14/16/18/20/24/32/48
  │   │   └── Pesos: 400/500/600/700
  │   │
  │   ├── 1.3 Espaciado
  │   │   └── Base 4px: 4/8/12/16/20/24/32/48/64
  │   │
  │   ├── 1.4 Border Radius
  │   │   ├── sm: 4px
  │   │   ├── md: 8px
  │   │   ├── lg: 12px
  │   │   ├── xl: 16px
  │   │   └── full: 9999px
  │   │
  │   ├── 1.5 Sombras y Efectos
  │   │   ├── Glow dorado (nivel alto)
  │   │   ├── Glassmorphism
  │   │   └── Gradientes
  │   │
  │   └── 1.6 Breakpoints
  │       ├── sm: 640px
  │       ├── md: 768px
  │       ├── lg: 1024px
  │       └── xl: 1280px
  │
  ├── 2. COMPONENTES BASE
  │   │
  │   ├── 2.1 Button
  │   │   ├── Variants: primary, secondary, ghost, danger
  │   │   ├── Sizes: sm, md, lg
  │   │   └── States: default, hover, active, disabled, loading
  │   │
  │   ├── 2.2 Input
  │   │   └── [Especificación]
  │   │
  │   ├── 2.3 Card
  │   │   └── [Especificación]
  │   │
  │   ├── 2.4 Modal
  │   │   └── [Especificación]
  │   │
  │   ├── 2.5 Toast
  │   │   └── [Especificación]
  │   │
  │   └── [Más componentes...]
  │
  ├── 3. WIREFRAMES POR PANTALLA
  │   │
  │   ├── 3.1 Landing Page
  │   │   └── [ASCII wireframe + descripción]
  │   │
  │   ├── 3.2 Login/Register
  │   │   └── [ASCII wireframe]
  │   │
  │   ├── 3.3 Onboarding (cada step)
  │   │   └── [ASCII wireframes]
  │   │
  │   ├── 3.4 Dashboard Principal
  │   │   └── [ASCII wireframe]
  │   │
  │   ├── 3.5 Tareas del Día
  │   │   └── [ASCII wireframe]
  │   │
  │   ├── 3.6 Herramientas
  │   │   └── [ASCII wireframes]
  │   │
  │   ├── 3.7 Tienda
  │   │   └── [ASCII wireframe]
  │   │
  │   ├── 3.8 Inventario
  │   │   └── [ASCII wireframe]
  │   │
  │   ├── 3.9 Perfil
  │   │   └── [ASCII wireframe]
  │   │
  │   └── 3.10 Estados Especiales
  │       ├── Avatar muerto
  │       ├── Modo limbo
  │       └── Trial expirado
  │
  ├── 4. FLUJOS DE USUARIO
  │   │
  │   ├── 4.1 Flujo: Registro → Primera sesión
  │   ├── 4.2 Flujo: Día típico de uso
  │   ├── 4.3 Flujo: Completar tarea
  │   ├── 4.4 Flujo: Comprar item
  │   └── 4.5 Flujo: Suscribirse
  │
  ├── 5. ANIMACIONES
  │   │
  │   ├── 5.1 Transiciones de página
  │   ├── 5.2 Animación de completar tarea
  │   ├── 5.3 Animación de BTC ganados
  │   ├── 5.4 Animación de subida de nivel
  │   ├── 5.5 Animación de pérdida de corazón
  │   └── 5.6 Efecto de imagen generándose
  │
  └── 6. RESPONSIVE DESIGN
      │
      ├── 6.1 Mobile First Approach
      ├── 6.2 Adaptaciones por breakpoint
      └── 6.3 Touch vs Mouse considerations

  Tareas Atómicas para 01.7 UI/UX

  TAREA-01.7.1:
    Nombre: "Crear estructura base UI/UX"
    Acción: "Crear /docs/07_UIUX.md"
    Responsable: Claude

  TAREA-01.7.2:
    Nombre: "Documentar Design System"
    Acción: "Colores, tipografía, espaciado"
    Responsable: Claude

  TAREA-01.7.3:
    Nombre: "Documentar Componentes Base"
    Acción: "Especificación de cada componente"
    Responsable: Claude

  TAREA-01.7.4:
    Nombre: "Crear Wireframes ASCII"
    Acción: "Wireframe de cada pantalla"
    Responsable: Claude

  TAREA-01.7.5:
    Nombre: "Documentar Flujos de Usuario"
    Acción: "Diagramas de flujo principales"
    Responsable: Claude

  TAREA-01.7.6:
    Nombre: "Documentar Animaciones"
    Acción: "Especificación de cada animación"
    Responsable: Claude

  ---
  SUBCAJA 01.8: Test Plan

  Plan de Testing

  Archivo a Crear

  Ruta: /docs/08_TEST_PLAN.md
  Tamaño Estimado: ~1,500 líneas
  Tiempo de Generación: 30-45 minutos

  Estructura del Documento

  08_TEST_PLAN.md
  │
  ├── 1. ESTRATEGIA DE TESTING
  │   │
  │   ├── 1.1 Pirámide de Tests
  │   │   ├── Unit Tests: 75%
  │   │   ├── Integration Tests: 20%
  │   │   └── E2E Tests: 5%
  │   │
  │   ├── 1.2 Herramientas
  │   │   ├── Unit/Integration: Vitest
  │   │   ├── Component: React Testing Library
  │   │   └── E2E: Playwright
  │   │
  │   └── 1.3 Cobertura Objetivos
  │       ├── /lib/core/*: 95%
  │       ├── /actions/*: 80%
  │       └── Global: 70%
  │
  ├── 2. TESTS UNITARIOS REQUERIDOS
  │   │
  │   ├── 2.1 Motor de Vectores (/lib/core/vectors)
  │   │   ├── VEC-001: clamp limita valores correctamente
  │   │   ├── VEC-002: processTaskImpact modifica vector correcto
  │   │   ├── VEC-003: processTaskImpact respeta límites
  │   │   ├── VEC-004: applyBiologicalDecay reduce valores
  │   │   └── [Lista completa...]
  │   │
  │   ├── 2.2 Motor de Niveles (/lib/core/levels)
  │   │   ├── LVL-001: calculateLevel retorna nivel correcto
  │   │   ├── LVL-002: calculateLevel con valores mínimos
  │   │   ├── LVL-003: calculateLevel con valores máximos
  │   │   └── [Lista completa...]
  │   │
  │   ├── 2.3 Motor de Salud (/lib/core/health)
  │   │   └── [Lista de tests...]
  │   │
  │   ├── 2.4 Motor de Racha (/lib/core/streak)
  │   │   └── [Lista de tests...]
  │   │
  │   ├── 2.5 Judgement Night (/lib/core/judgement)
  │   │   └── [Lista de tests...]
  │   │
  │   ├── 2.6 Muerte/Resurrección (/lib/core/death)
  │   │   └── [Lista de tests...]
  │   │
  │   ├── 2.7 Economía (/lib/core/economy)
  │   │   └── [Lista de tests...]
  │   │
  │   └── 2.8 Validaciones (/lib/core/validations)
  │       └── [Lista de tests...]
  │
  ├── 3. TESTS DE INTEGRACIÓN REQUERIDOS
  │   │
  │   ├── 3.1 Flujos de Base de Datos
  │   │   ├── INT-DB-001: Crear usuario crea todas las entidades
  │   │   ├── INT-DB-002: Completar tarea actualiza atómicamente
  │   │   ├── INT-DB-003: Compra valida y procesa correctamente
  │   │   └── [Lista completa...]
  │   │
  │   ├── 3.2 Flujos de Auth
  │   │   ├── INT-AUTH-001: Login exitoso establece sesión
  │   │   ├── INT-AUTH-002: Middleware protege rutas
  │   │   └── [Lista completa...]
  │   │
  │   └── 3.3 RLS
  │       ├── INT-RLS-001: Usuario no puede ver datos de otro
  │       └── [Lista completa...]
  │
  ├── 4. TESTS E2E REQUERIDOS
  │   │
  │   ├── 4.1 User Journeys Críticos
  │   │   ├── E2E-001: Registro → Onboarding → Dashboard
  │   │   ├── E2E-002: Login → Completar tareas → Verificar stats
  │   │   ├── E2E-003: Tienda → Comprar → Verificar inventario
  │   │   └── E2E-004: Checkout de suscripción (Stripe test)
  │   │
  │   └── 4.2 Estados de Error
  │       ├── E2E-ERR-001: Sesión expirada redirige a login
  │       └── [Lista completa...]
  │
  ├── 5. CONFIGURACIÓN
  │   │
  │   ├── 5.1 vitest.config.ts
  │   ├── 5.2 playwright.config.ts
  │   ├── 5.3 Mocks y Fixtures
  │   └── 5.4 Setup de Test DB
  │
  └── 6. CI INTEGRATION
      │
      ├── 6.1 Cuándo se ejecutan los tests
      ├── 6.2 Thresholds de fallo
      └── 6.3 Reportes de cobertura

  Tareas Atómicas para 01.8 Test Plan

  TAREA-01.8.1:
    Nombre: "Crear estructura base Test Plan"
    Acción: "Crear /docs/08_TEST_PLAN.md"
    Responsable: Claude

  TAREA-01.8.2:
    Nombre: "Documentar Estrategia de Testing"
    Acción: "Pirámide, herramientas, coberturas"
    Responsable: Claude

  TAREA-01.8.3:
    Nombre: "Listar Tests Unitarios Requeridos"
    Acción: "Todos los tests para /lib/core"
    Responsable: Claude

  TAREA-01.8.4:
    Nombre: "Listar Tests de Integración"
    Acción: "Tests de DB, Auth, RLS"
    Responsable: Claude

  TAREA-01.8.5:
    Nombre: "Listar Tests E2E"
    Acción: "User journeys críticos"
    Responsable: Claude

  TAREA-01.8.6:
    Nombre: "Documentar Configuración"
    Acción: "Archivos de config de testing"
    Responsable: Claude

  ---
  SUBCAJA 01.9: Security Specification

  Especificación de Seguridad

  Archivo a Crear

  Ruta: /docs/09_SECURITY.md
  Tamaño Estimado: ~1,000 líneas
  Tiempo de Generación: 20-30 minutos

  Estructura del Documento

  09_SECURITY.md
  │
  ├── 1. THREAT MODEL
  │   │
  │   ├── 1.1 Assets a Proteger
  │   │   ├── Datos de usuario
  │   │   ├── Tokens de pago
  │   │   ├── Sesiones
  │   │   └── BTC virtuales
  │   │
  │   ├── 1.2 Actores de Amenaza
  │   │   ├── Usuario malicioso
  │   │   ├── Atacante externo
  │   │   └── Competidores
  │   │
  │   └── 1.3 Vectores de Ataque
  │       ├── Injection (SQL, XSS)
  │       ├── Auth bypass
  │       ├── Rate limiting bypass
  │       └── Data scraping
  │
  ├── 2. CHECKLIST DE SEGURIDAD
  │   │
  │   ├── 2.1 Autenticación
  │   │   ├── [ ] JWT con expiración corta (1h)
  │   │   ├── [ ] Refresh tokens rotan en cada uso
  │   │   ├── [ ] Rate limit en login (5/min)
  │   │   ├── [ ] Verificación de teléfono anti-multicuenta
  │   │   └── [ ] Logout invalida sesión en servidor
  │   │
  │   ├── 2.2 Autorización
  │   │   ├── [ ] RLS en TODAS las tablas
  │   │   ├── [ ] Verificación de ownership en mutations
  │   │   ├── [ ] Service role key solo en backend
  │   │   └── [ ] Admin routes separadas
  │   │
  │   ├── 2.3 Input Validation
  │   │   ├── [ ] Todos los inputs validados con Zod
  │   │   ├── [ ] Sanitización de HTML
  │   │   ├── [ ] File upload validado
  │   │   └── [ ] UUID validation
  │   │
  │   ├── 2.4 API Security
  │   │   ├── [ ] Rate limiting global
  │   │   ├── [ ] CORS configurado
  │   │   ├── [ ] Webhook signatures verificadas
  │   │   └── [ ] Error messages no exponen stack traces
  │   │
  │   └── 2.5 Datos Sensibles
  │       ├── [ ] PII mínimo (solo necesario)
  │       ├── [ ] Logs no contienen passwords/tokens
  │       ├── [ ] Stripe tokens nunca tocan servidor
  │       └── [ ] Backups encriptados
  │
  ├── 3. HEADERS DE SEGURIDAD
  │   │
  │   ├── 3.1 CSP (Content Security Policy)
  │   ├── 3.2 HSTS
  │   ├── 3.3 X-Frame-Options
  │   ├── 3.4 X-Content-Type-Options
  │   └── 3.5 Referrer-Policy
  │
  ├── 4. RATE LIMITING
  │   │
  │   ├── 4.1 Límites por Endpoint
  │   │   ├── login: 5/min
  │   │   ├── register: 3/min
  │   │   ├── completeTask: 10/min
  │   │   ├── generateImage: 1/hora
  │   │   └── default: 100/min
  │   │
  │   └── 4.2 Implementación
  │       └── [Código/configuración]
  │
  ├── 5. OWASP TOP 10 CHECKLIST
  │   │
  │   ├── A01: Broken Access Control → RLS + ownership checks
  │   ├── A02: Cryptographic Failures → HTTPS, hashing
  │   ├── A03: Injection → Parameterized queries, Zod
  │   ├── A04: Insecure Design → Threat modeling
  │   ├── A05: Security Misconfiguration → Headers, env vars
  │   ├── A06: Vulnerable Components → Dependabot
  │   ├── A07: Auth Failures → Strong auth, rate limiting
  │   ├── A08: Data Integrity → Signatures, transactions
  │   ├── A09: Logging Failures → Structured logging
  │   └── A10: SSRF → URL validation
  │
  └── 6. INCIDENT RESPONSE
      │
      ├── 6.1 Qué hacer si se detecta breach
      ├── 6.2 Contactos de emergencia
      └── 6.3 Proceso de disclosure

  Tareas Atómicas para 01.9 Security

  TAREA-01.9.1:
    Nombre: "Crear estructura base Security"
    Acción: "Crear /docs/09_SECURITY.md"
    Responsable: Claude

  TAREA-01.9.2:
    Nombre: "Documentar Threat Model"
    Acción: "Assets, actores, vectores"
    Responsable: Claude

  TAREA-01.9.3:
    Nombre: "Crear Checklist de Seguridad"
    Acción: "Lista verificable"
    Responsable: Claude

  TAREA-01.9.4:
    Nombre: "Documentar Headers de Seguridad"
    Acción: "Configuración específica"
    Responsable: Claude

  TAREA-01.9.5:
    Nombre: "Documentar Rate Limiting"
    Acción: "Límites por endpoint"
    Responsable: Claude

  TAREA-01.9.6:
    Nombre: "Mapear OWASP Top 10"
    Acción: "Mitigaciones por vulnerabilidad"
    Responsable: Claude

  ---
  RESUMEN DE CAJA 01: DOCUMENTACIÓN FUNDACIONAL

  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║                    📦 CAJA 01 - RESUMEN DE ENTREGABLES                              ║
  ║                                                                                      ║
  ╠══════════════════════════════════════════════════════════════════════════════════════╣
  ║                                                                                      ║
  ║  DOCUMENTO              │ ARCHIVO              │ TAREAS │ TIEMPO EST.               ║
  ║  ──────────────────────┼──────────────────────┼────────┼──────────────             ║
  ║  01.1 PRD              │ /docs/01_PRD.md      │   18   │ 45-60 min                 ║
  ║  01.2 ADRs             │ /docs/02_ADRs.md     │   13   │ 30-45 min                 ║
  ║  01.3 Tech Spec        │ /docs/03_TECH_SPEC.md│   10   │ 45-60 min                 ║
  ║  01.4 Data Model       │ /docs/04_DATA_MODEL.md│  14   │ 45-60 min                 ║
  ║  01.5 GDD              │ /docs/05_GDD.md      │   13   │ 60-90 min                 ║
  ║  01.6 Content          │ /docs/06_CONTENT.md  │    6   │ 45-60 min                 ║
  ║  01.7 UI/UX            │ /docs/07_UIUX.md     │    6   │ 30-45 min                 ║
  ║  01.8 Test Plan        │ /docs/08_TEST_PLAN.md│    6   │ 30-45 min                 ║
  ║  01.9 Security         │ /docs/09_SECURITY.md │    6   │ 20-30 min                 ║
  ║  ──────────────────────┼──────────────────────┼────────┼──────────────             ║
  ║  TOTAL                 │ 9 documentos         │   92   │ 6-8 horas                 ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝

  ---
  SIGUIENTE PASO

  Operador, el desglose atómico de la CAJA 01: DOCUMENTACIÓN FUNDACIONAL está completo.

  Tienes ahora:
  - 9 subcajas desglosadas
  - 92 tareas atómicas identificadas
  - Estructura exacta de cada documento
  - Prompts específicos para que yo genere el contenido