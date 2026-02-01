---
trigger: always_on
---

# ============================================
# REGLA 1: CONTEXTO DEL PROYECTO
# ============================================
name: "METAMEN100 - Contexto del Proyecto"
description: "Siempre mantener el contexto completo del sistema TOP 100"

rule: |
  Antes de cualquier respuesta relacionada con código:
  1. Recuerda que estás trabajando en METAMEN100
  2. Es un Sistema Operativo de Conducta de nivel TOP 100 Mundial
  3. La calidad debe ser quirúrgica, no aproximada
  4. Todo código debe seguir las especificaciones en /docs/
  
  Si el usuario no especifica una caja, pregunta:
  "¿Qué caja de METAMEN100 estamos trabajando? (01-13)"

# ============================================
# REGLA 2: STACK TECNOLÓGICO
# ============================================
name: "Stack Tecnológico Obligatorio"
description: "Tecnologías aprobadas en ADRs"

rule: |
  Tecnologías permitidas para METAMEN100:
  - Frontend: Next.js 14.2+, React 18.3+, TypeScript 5.4+
  - Backend: Supabase (PostgreSQL, Auth, Realtime)
  - Estilos: Tailwind CSS 3.4+, Framer Motion 11+
  - Estado: Zustand 4.5+
  - Forms: React Hook Form 7+ + Zod 3+
  - Testing: Vitest + Playwright
  - Pagos: Stripe
  - IA: Replicate API / Gemini 3 Pro Image
  
  PROHIBIDO sugerir alternativas sin consultar ADR-001 a ADR-013

# ============================================
# REGLA 3: ESTRUCTURA DE CARPETAS
# ============================================
name: "Estructura de Carpetas V2.0"
description: "Layout obligatorio del proyecto"

rule: |
  Toda generación de código debe respetar:
  
  A:\PROYECTOS\METAMEN100_V2.0
  ├── .agents/skills/           # Skills de Kimi Code
  ├── docs/                     # Documentación (CAJA 01)
  │   ├── 00_planning/
  │   ├── 01_requirements/
  │   ├── 02_architecture/
  │   └── 03_database/
  ├── prompts/personaje_base/   # Modelos JSON de arquetipos
  ├── schemas/                  # Esquemas Zod
  ├── src/
  │   ├── app/                  # Next.js App Router
  │   ├── components/           # Componentes React
  │   ├── lib/                  # Lógica pura, hooks, utils
  │   ├── types/                # Tipos TypeScript
  │   └── styles/               # Estilos globales
  ├── templates/                # Plantillas de código
  └── tests/                    # Tests unitarios y E2E

# ============================================
# REGLA 4: CALIDAD DE CÓDIGO
# ============================================
name: "Estándares TOP 100"
description: "Calidad quirúrgica obligatoria"

rule: |
  Todo código generado DEBE:
  1. Usar TypeScript en modo estricto (strict: true)
  2. Tener tipos explícitos en funciones exportadas
  3. Manejar errores con try/catch y tipos de error
  4. Usar Zod para validación de inputs
  5. Seguir principios SOLID
  6. Tener JSDoc para funciones públicas
  7. Ser testeable (inyección de dependencias)
  
  NUNCA:
  - Usar 'any' explícito
  - Dejar console.log en producción
  - Ignorar errores con @ts-ignore
  - Usar 'var' o 'let' innecesario

# ============================================
# REGLA 5: DOCUMENTACIÓN INLINE
# ============================================
name: "Documentación en Código"
description: "Todo código debe explicarse a sí mismo"

rule: |
  Requerimientos de documentación:
  
  1. JSDoc para funciones:
     ```typescript
     /**
      * Calcula el impacto de una tarea en los vectores del avatar
      * @param taskId - ID de la tarea completada
      * @param userId - ID del usuario
      * @returns Nuevo estado del avatar con vectores actualizados
      * @throws TaskNotFoundError si la tarea no existe
      */
     ```
  
  2. Comentarios explicativos para lógica compleja
  3. README.md en cada carpeta de /src/
  4. CHANGELOG.md para cambios significativos

# ============================================
# REGLA 6: SEGURIDAD
# ============================================
name: "Security by Design"
description: "Seguridad en cada línea de código"

rule: |
  Todo código DEBE cumplir:
  1. Validar inputs con Zod antes de procesar
  2. Usar Server Actions para operaciones sensibles
  3. Implementar RLS en todas las queries a Supabase
  4. Nunca exponer secrets en cliente
  5. Sanitizar outputs para prevenir XSS
  6. Usar idempotency keys para operaciones críticas
  7. Rate limiting en APIs públicas

# ============================================
# REGLA 7: NAMING CONVENTIONS
# ============================================
name: "Convenciones de Nomenclatura"
description: "Nombres consistentes y descriptivos"

rule: |
  Convenciones obligatorias:
  
  - Componentes: PascalCase (TaskCard.tsx)
  - Hooks: camelCase con prefijo 'use' (useAvatar.ts)
  - Utils: camelCase (calculateVectorProgress.ts)
  - Types: PascalCase con sufijo (AvatarState)
  - Enums: PascalCase (TaskCategory)
  - Constants: UPPER_SNAKE_CASE (MAX_HEALTH_POINTS)
  - Server Actions: camelCase (completeTaskAction)
  - Database: snake_case (avatar_states)

# ============================================
# REGLA 8: PERFORMANCE
# ============================================
name: "Performance Budget"
description: "Métricas de performance obligatorias"

rule: |
  Todo código DEBE respetar:
  - LCP < 2 segundos
  - TTI < 3.8 segundos
  - CLS < 0.1
  - API Response p95 < 200ms
  - Bundle size monitoreado
  
  Usar:
  - React.memo para componentes pesados
  - useMemo/useCallback apropiadamente
  - Lazy loading para rutas
  - Suspense boundaries
  - Imágenes optimizadas (next/image)