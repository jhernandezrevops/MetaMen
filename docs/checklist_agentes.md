# ✅ CHECKLIST DE SKILLS Y MCP SERVERS
## METAMEN100 - Sistema Operativo de Conducta
### Documento de Referencia para Agentes IA

---

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║   ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗██╗     ██╗███████╗████████╗        ║
║  ██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝██║     ██║██╔════╝╚══██╔══╝        ║
║  ██║     ███████║█████╗  ██║     █████╔╝ ██║     ██║███████╗   ██║           ║
║  ██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ ██║     ██║╚════██║   ██║           ║
║  ╚██████╗██║  ██║███████╗╚██████╗██║  ██╗███████╗██║███████║   ██║           ║
║   ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝   ╚═╝           ║
║                                                                               ║
║            SKILLS + MCP SERVERS PARA METAMEN100 v1.0                          ║
║            Última actualización: 30 Enero 2026                                ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

## 📋 RESUMEN EJECUTIVO

| Tipo | Cantidad | Estado |
|------|----------|--------|
| Skills (skills.sh) | 32 críticos | ⏳ Por instalar |
| MCP Servers | 8 recomendados | ⏳ Por instalar |
| Skills Custom | 4 por crear | ⏳ Pendiente |

---

# PARTE 1: SKILLS DE SKILLS.SH

## 🔴 CATEGORÍA 1: CORE BACKEND (CRÍTICO)

### ☐ 1. supabase-postgres-best-practices
- **Fuente:** supabase/agent-skills
- **Instalaciones:** 7.2K
- **Prioridad:** 🔴 CRÍTICA
- **Instalar:**
```bash
npx skills add supabase/agent-skills --skill supabase-postgres-best-practices
```
- **Resuelve:**
  - ☐ Optimización de queries
  - ☐ Gestión de conexiones
  - ☐ Diseño de schema
  - ☐ Concurrencia
  - ☐ Seguridad/RLS
  - ☐ Acceso a datos
  - ☐ Monitoreo
  - ☐ Features avanzados
- **Impacto:** Resuelve 6/10 fallas del diagnóstico

---

### ☐ 2. postgresql-table-design
- **Fuente:** wshobson/agents
- **Prioridad:** 🔴 CRÍTICA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill postgresql-table-design
```
- **Aplicar en tablas:**
  - ☐ users (vectores, corazones, BTC)
  - ☐ tasks (tareas por arquetipo)
  - ☐ activity_logs (historial)
  - ☐ inventory (items del usuario)
  - ☐ purchases (transacciones)
  - ☐ avatar_history (imágenes generadas)
  - ☐ notifications
  - ☐ image_generation_queue

---

### ☐ 3. sql-optimization-patterns
- **Fuente:** wshobson/agents
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill sql-optimization-patterns
```
- **Casos de uso METAMEN:**
  - ☐ Judgement Night (procesamiento masivo a medianoche)
  - ☐ Cálculo de leaderboards
  - ☐ Queries de historial de imágenes
  - ☐ Actualización atómica de vectores

---

## 🔴 CATEGORÍA 2: FRONTEND REACT/NEXT.JS (CRÍTICO)

### ☐ 4. vercel-react-best-practices ⭐ #1 GLOBAL
- **Fuente:** vercel-labs/agent-skills
- **Instalaciones:** 86.2K
- **Prioridad:** 🔴 CRÍTICA
- **Instalar:**
```bash
npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices
```
- **40+ reglas en 8 categorías:**
  - ☐ Estrategia de renderizado
  - ☐ Optimización de bundle
  - ☐ Data fetching paralelo
  - ☐ Gestión de estado
  - ☐ Performance

---

### ☐ 5. next-best-practices
- **Fuente:** vercel-labs/next-skills
- **Prioridad:** 🔴 CRÍTICA
- **Instalar:**
```bash
npx skills add vercel-labs/next-skills --skill next-best-practices
```
- **Cubre:**
  - ☐ App Router patterns
  - ☐ Server Actions
  - ☐ Route handlers
  - ☐ Middleware

---

### ☐ 6. next-cache-components
- **Fuente:** vercel-labs/next-skills
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add vercel-labs/next-skills --skill next-cache-components
```
- **Cachear en METAMEN:**
  - ☐ Catálogo de tienda
  - ☐ Leaderboards (revalidar cada hora)
  - ☐ Configuraciones de niveles

---

### ☐ 7. nextjs-app-router-patterns
- **Fuente:** wshobson/agents
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill nextjs-app-router-patterns
```
- **Patrones a implementar:**
  - ☐ Parallel routes (dashboard + sidebar)
  - ☐ Intercepting routes (modal de compra)
  - ☐ Route groups

---

### ☐ 8. react-state-management
- **Fuente:** wshobson/agents
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill react-state-management
```
- **Estado global METAMEN:**
  - ☐ Vectores (AURA, JAWLINE, WEALTH, PHYSIQUE, ENV)
  - ☐ Bitcoins (BTC)
  - ☐ Corazones
  - ☐ Racha
  - ☐ Sync con Supabase realtime

---

### ☐ 9. tanstack-query
- **Fuente:** jezweb/claude-skills
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add jezweb/claude-skills --skill tanstack-query
```
- **Usar para:**
  - ☐ Optimistic mutations (completar tarea)
  - ☐ Cache invalidation (compras)
  - ☐ Polling (estado de generación de imagen)

---

## 🔴 CATEGORÍA 3: TESTING & QA (CRÍTICO)

### ☐ 10. test-driven-development ⭐ SUPERPOWERS
- **Fuente:** obra/superpowers
- **Instalaciones:** 2.7K
- **Prioridad:** 🔴 CRÍTICA
- **Instalar:**
```bash
git clone https://github.com/obra/superpowers ~/.claude/skills/superpowers
```
- **Metodología:** RED-GREEN-REFACTOR
- **Diagnóstico decía:** "CERO ESTRATEGIA DE TESTING"

---

### ☐ 11. webapp-testing
- **Fuente:** anthropics/skills
- **Instalaciones:** 3.5K
- **Prioridad:** 🔴 CRÍTICA
- **Instalar:**
```bash
npx skills add anthropics/skills --skill webapp-testing
```
- **Tipos de tests:**
  - ☐ Component tests (Vitest)
  - ☐ Integration tests (API routes)
  - ☐ E2E tests (onboarding flow)

---

### ☐ 12. e2e-testing-patterns
- **Fuente:** wshobson/agents
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill e2e-testing-patterns
```
- **Flujos críticos a testear:**
  - ☐ Onboarding completo
  - ☐ Completar tarea → actualizar vector
  - ☐ Compra en tienda
  - ☐ Muerte (0 corazones) → Reset
  - ☐ Paywall Día 6

---

### ☐ 13. javascript-testing-patterns
- **Fuente:** wshobson/agents
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill javascript-testing-patterns
```
- **Casos específicos:**
  - ☐ Mocking de Supabase
  - ☐ Testing de Server Actions
  - ☐ Snapshots de UI

---

### ☐ 14. python-testing-patterns
- **Fuente:** wshobson/agents
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill python-testing-patterns
```
- **Para:** Scripts de generación de prompts Gemini

---

## 🟡 CATEGORÍA 4: CI/CD & DEVOPS (ALTA)

### ☐ 15. github-actions-templates
- **Fuente:** wshobson/agents
- **Instalaciones:** ~900
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill github-actions-templates
```
- **Pipeline propuesto:**
  1. ☐ Lint/Type Check
  2. ☐ Unit/Integration Tests
  3. ☐ E2E Tests
  4. ☐ Deploy Preview
  5. ☐ Deploy Production

---

### ☐ 16. vercel-deploy
- **Fuente:** vercel-labs/agent-skills
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add vercel-labs/agent-skills --skill vercel-deploy
```
- **Features:**
  - ☐ Claimable deployments
  - ☐ Preview deployments
  - ☐ Instant rollback

---

### ☐ 17. expo-cicd-workflows
- **Fuente:** expo/skills
- **Prioridad:** 🟢 MEDIA (Fase 2 - Mobile)
- **Instalar:**
```bash
npx skills add expo/skills --skill expo-cicd-workflows
```

---

### ☐ 18. monorepo-management
- **Fuente:** wshobson/agents
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill monorepo-management
```
- **Estructura propuesta:**
```
apps/
  ├── web/        # Next.js app
  └── admin/      # Panel admin
packages/
  ├── core/       # Lógica de negocio
  ├── ui/         # Componentes
  ├── db/         # Schema Supabase
  └── ai/         # Prompts Gemini
tooling/
  └── eslint-config/
```

---

## 🟡 CATEGORÍA 5: AUTH & SEGURIDAD (ALTA)

### ☐ 19. better-auth-best-practices ⭐
- **Fuente:** better-auth/skills
- **Instalaciones:** 5.7K
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add better-auth/skills --skill better-auth-best-practices
```
- **Implementar:**
  - ☐ JWT + refresh tokens
  - ☐ Verificación por teléfono (anti-multicuenta)
  - ☐ Rate limiting

---

### ☐ 20. auth-implementation-patterns
- **Fuente:** wshobson/agents
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill auth-implementation-patterns
```
- **Flujos:**
  - ☐ Session management
  - ☐ Verificación telefónica
  - ☐ Refresh token rotation

---

### ☐ 21. security-audit
- **Fuente:** squirrelscan/skills
- **Instalaciones:** 7.7K
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add squirrelscan/skills --skill audit-website
```
- **Verificar:**
  - ☐ OWASP Top 10
  - ☐ Security headers
  - ☐ Vulnerabilidades comunes

---

## 🟢 CATEGORÍA 6: UI/UX & DISEÑO (MEDIA-ALTA)

### ☐ 22. frontend-design ⭐ #5 GLOBAL
- **Fuente:** anthropics/skills
- **Instalaciones:** 25.3K
- **Prioridad:** 🟢 MEDIA-ALTA
- **Instalar:**
```bash
npx skills add anthropics/skills --skill frontend-design
```
- **Aplicar en:**
  - ☐ Dashboard principal
  - ☐ Visualización de vectores
  - ☐ Animaciones de recompensa

---

### ☐ 23. web-design-guidelines ⭐ #2 GLOBAL
- **Fuente:** vercel-labs/agent-skills
- **Instalaciones:** 65.4K
- **Prioridad:** 🟢 MEDIA-ALTA
- **Instalar:**
```bash
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
```
- **100+ reglas:**
  - ☐ Accesibilidad
  - ☐ Perceived performance
  - ☐ UX patterns

---

### ☐ 24. ui-ux-pro-max
- **Fuente:** nextlevelbuilder/ui-ux-pro-max-skill
- **Instalaciones:** 6.8K
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
```
- **Incluye:**
  - ☐ Design tokens
  - ☐ Micro-interactions
  - ☐ Visual feedback

---

### ☐ 25. tailwind-design-system
- **Fuente:** wshobson/agents
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill tailwind-design-system
```
- **Tema METAMEN:**
```javascript
colors: {
  aura: 'violet',
  jawline: 'orange', 
  wealth: 'green',
  physique: 'red',
  env: 'blue'
}
```

---

## 🟡 CATEGORÍA 7: GAMIFICACIÓN & ESTADO (ALTA)

### ☐ 26. systematic-debugging
- **Fuente:** obra/superpowers (incluido en #10)
- **Prioridad:** 🟡 ALTA
- **Ya instalado con:** superpowers
- **Usar para debuggear:**
  - ☐ Motor de vectores
  - ☐ Sistema de rachas
  - ☐ Cálculo de BTC

---

### ☐ 27. error-handling-patterns
- **Fuente:** wshobson/agents
- **Prioridad:** 🟡 ALTA
- **Instalar:**
```bash
npx skills add wshobson/agents --skill error-handling-patterns
```
- **Códigos de error METAMEN:**
  - ☐ INSUFFICIENT_BTC
  - ☐ VECTOR_LIMIT_REACHED
  - ☐ ITEM_LOCKED
  - ☐ STREAK_BROKEN
  - ☐ DEATH_TRIGGERED
  - ☐ GATING_FAILED

---

## 🟢 CATEGORÍA 8: DOCUMENTACIÓN & PROCESO (MEDIA)

### ☐ 28. doc-coauthoring
- **Fuente:** anthropics/skills
- **Instalaciones:** 2.5K
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add anthropics/skills --skill doc-coauthoring
```
- **Generar:**
  - ☐ PRD actualizado
  - ☐ Especificación técnica
  - ☐ Documentación API (OpenAPI)

---

### ☐ 29. skill-creator ⭐
- **Fuente:** anthropics/skills
- **Instalaciones:** 12.5K
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add anthropics/skills --skill skill-creator
```
- **Crear skills custom para:**
  - ☐ gemini-image-generation
  - ☐ gamification-engine
  - ☐ metamen-vector-system

---

### ☐ 30. mermaid-diagrams
- **Fuente:** softaworks/agent-toolkit
- **Instalaciones:** 1.9K
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add softaworks/agent-toolkit --skill mermaid-diagrams
```
- **Documentar:**
  - ☐ Flujos de usuario
  - ☐ Arquitectura del sistema
  - ☐ State machines

---

### ☐ 31. context7
- **Fuente:** intellectronica/agent-skills
- **Instalaciones:** 973
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add intellectronica/agent-skills --skill context7
```
- **Para:** Estudiar documentación oficial antes de construir

---

### ☐ 32. browser-use
- **Fuente:** browser-use/browser-use
- **Instalaciones:** 6.2K
- **Prioridad:** 🟢 MEDIA
- **Instalar:**
```bash
npx skills add browser-use/browser-use --skill browser-use
```
- **Para:** E2E testing con automatización de browser

---

# PARTE 2: MCP SERVERS PARA ANTIGRAVITY/CURSOR

## 🔴 MCP CRÍTICOS (Instalar Semana 1)

### ☐ MCP-1. Supabase MCP
- **Prioridad:** 🔴 CRÍTICA
- **Configuración:**
```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server-supabase@latest", "--project-ref", "TU_PROJECT_REF"],
      "env": {}
    }
  }
}
```
- **Instalación rápida:**
```
Antigravity: ... → MCP → Manage MCP Servers → "Supabase" → Install
```
- **Capacidades:**
  - ☐ Crear/modificar tablas
  - ☐ Ejecutar SQL
  - ☐ Generar migraciones
  - ☐ Ver logs Edge Functions
  - ☐ Administrar secrets
  - ☐ Generar TypeScript types

---

### ☐ MCP-2. GitHub MCP
- **Prioridad:** 🔴 CRÍTICA
- **Configuración:**
```json
{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_TU_TOKEN"
      }
    }
  }
}
```
- **Capacidades:**
  - ☐ Crear/gestionar PRs
  - ☐ Administrar issues
  - ☐ Crear branches
  - ☐ Hacer merges
  - ☐ Gestionar releases

---

### ☐ MCP-3. Vercel MCP
- **Prioridad:** 🔴 CRÍTICA
- **Configuración:**
```json
{
  "mcpServers": {
    "vercel": {
      "command": "npx",
      "args": ["-y", "@vercel/mcp-server"],
      "env": {
        "VERCEL_TOKEN": "TU_VERCEL_TOKEN"
      }
    }
  }
}
```
- **Capacidades:**
  - ☐ Deploy previews
  - ☐ Ver logs producción
  - ☐ Gestionar env vars
  - ☐ Configurar dominios
  - ☐ Rollbacks instantáneos

---

## 🟡 MCP ALTA PRIORIDAD (Instalar Semana 2)

### ☐ MCP-4. Stripe MCP
- **Prioridad:** 🟡 ALTA
- **Configuración:**
```json
{
  "mcpServers": {
    "stripe": {
      "command": "npx",
      "args": ["-y", "@stripe/mcp-server"],
      "env": {
        "STRIPE_SECRET_KEY": "sk_test_TU_KEY"
      }
    }
  }
}
```
- **Capacidades:**
  - ☐ Crear productos/precios
  - ☐ Gestionar suscripciones ($19.90/mes)
  - ☐ Procesar pagos
  - ☐ Crear checkout sessions
  - ☐ Manejar webhooks

---

### ☐ MCP-5. Sentry MCP
- **Prioridad:** 🟡 ALTA
- **Configuración (Remote):**
```json
{
  "mcpServers": {
    "sentry": {
      "url": "https://mcp.sentry.dev/mcp",
      "transport": "http"
    }
  }
}
```
- **Capacidades:**
  - ☐ Error tracking tiempo real
  - ☐ Performance monitoring
  - ☐ Stack traces completos
  - ☐ Alertas automáticas
  - ☐ Análisis de errores con IA

---

## 🟢 MCP MEDIA PRIORIDAD (Instalar Semana 3+)

### ☐ MCP-6. Figma MCP
- **Prioridad:** 🟢 MEDIA
- **Instalación:**
```
Antigravity: ... → MCP → Manage MCP Servers → "Figma" → Install
```
- **Capacidades:**
  - ☐ Convertir diseños a código
  - ☐ Extraer assets
  - ☐ Design tokens

---

### ☐ MCP-7. Linear MCP
- **Prioridad:** 🟢 MEDIA
- **Configuración:**
```json
{
  "mcpServers": {
    "linear": {
      "url": "https://mcp.linear.app/sse",
      "transport": "sse"
    }
  }
}
```
- **Capacidades:**
  - ☐ Crear/gestionar issues
  - ☐ Sprints
  - ☐ Roadmap

---

### ☐ MCP-8. Rube (Composio) - OPCIONAL
- **Prioridad:** 🔵 OPCIONAL
- **Descripción:** Meta-MCP que actúa como hub
- **Ventajas:**
  - ☐ Un solo MCP para múltiples servicios
  - ☐ Carga dinámica de herramientas
  - ☐ OAuth centralizado

---

# PARTE 3: SKILLS CUSTOM A CREAR

## ⚠️ SKILLS QUE NO EXISTEN EN SKILLS.SH

### ☐ CUSTOM-1. gemini-image-generation
- **Estado:** Por crear
- **Usar:** skill-creator (#29)
- **Propósito:** Generación de avatares con Gemini 2.5 Flash
- **Incluir:**
  - ☐ Prompts base por modelo de avatar
  - ☐ Consistencia facial (JSON schemas)
  - ☐ Jerarquía de capas visuales
  - ☐ Manejo de rate limits

---

### ☐ CUSTOM-2. gamification-engine
- **Estado:** Por crear
- **Usar:** skill-creator (#29)
- **Propósito:** Sistema de vectores y mecánicas
- **Incluir:**
  - ☐ Fórmulas de incremento/decremento
  - ☐ Rendimientos decrecientes
  - ☐ Sistema de rachas
  - ☐ Cálculo de BTC
  - ☐ Sistema de corazones

---

### ☐ CUSTOM-3. xstate-patterns
- **Estado:** Por crear
- **Usar:** skill-creator (#29)
- **Propósito:** Máquinas de estado del ciclo de usuario
- **Estados:**
  - ☐ onboarding
  - ☐ trial
  - ☐ paywall
  - ☐ active
  - ☐ limbo
  - ☐ reset
  - ☐ completed

---

### ☐ CUSTOM-4. stripe-subscription
- **Estado:** Por crear
- **Usar:** skill-creator (#29)
- **Propósito:** Modelo de monetización METAMEN
- **Incluir:**
  - ☐ Trial 5 días
  - ☐ Suscripción $19.90/mes
  - ☐ Microtransacciones
  - ☐ Estado de estasis

---

# PARTE 4: COMANDOS DE INSTALACIÓN RÁPIDA

## 🔥 FASE 1: CORE (Instalar HOY)

```bash
# Skills Backend/DB
npx skills add supabase/agent-skills --skill supabase-postgres-best-practices
npx skills add wshobson/agents --skill postgresql-table-design

# Skills Frontend
npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices
npx skills add vercel-labs/next-skills --skill next-best-practices

# Skills Testing
git clone https://github.com/obra/superpowers ~/.claude/skills/superpowers
npx skills add anthropics/skills --skill webapp-testing
```

## 🛡️ FASE 2: INFRAESTRUCTURA (Esta semana)

```bash
# CI/CD
npx skills add wshobson/agents --skill github-actions-templates
npx skills add vercel-labs/agent-skills --skill vercel-deploy

# Seguridad
npx skills add better-auth/skills --skill better-auth-best-practices
npx skills add wshobson/agents --skill auth-implementation-patterns

# UI/UX
npx skills add anthropics/skills --skill frontend-design
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
```

## 🎨 FASE 3: OPTIMIZACIÓN (Próxima semana)

```bash
# Performance
npx skills add wshobson/agents --skill sql-optimization-patterns
npx skills add vercel-labs/next-skills --skill next-cache-components

# Testing Avanzado
npx skills add wshobson/agents --skill e2e-testing-patterns
npx skills add wshobson/agents --skill javascript-testing-patterns

# Seguridad Audit
npx skills add squirrelscan/skills --skill audit-website

# Documentación
npx skills add anthropics/skills --skill skill-creator
npx skills add softaworks/agent-toolkit --skill mermaid-diagrams
```

---

# PARTE 5: CONFIGURACIÓN MCP COMPLETA

## 📦 mcp_config.json FINAL

```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server-supabase@latest", "--project-ref", "YOUR_PROJECT_REF"],
      "env": {}
    },
    "github": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_YOUR_TOKEN"
      }
    },
    "vercel": {
      "command": "npx",
      "args": ["-y", "@vercel/mcp-server"],
      "env": {
        "VERCEL_TOKEN": "YOUR_VERCEL_TOKEN"
      }
    },
    "stripe": {
      "command": "npx",
      "args": ["-y", "@stripe/mcp-server"],
      "env": {
        "STRIPE_SECRET_KEY": "sk_test_YOUR_KEY"
      }
    },
    "sentry": {
      "url": "https://mcp.sentry.dev/mcp",
      "transport": "http"
    },
    "linear": {
      "url": "https://mcp.linear.app/sse",
      "transport": "sse"
    }
  }
}
```

---

# PARTE 6: MATRIZ DE IMPACTO

## 📊 Impacto Estimado con Skills + MCPs

| Métrica | Sin Tools | Con Tools | Mejora |
|---------|-----------|-----------|--------|
| Tiempo desarrollo | 6-8 meses | 3-4 meses | **50%↓** |
| Bugs producción | Alto | Bajo | **70%↓** |
| Cobertura tests | 5% | 80%+ | **75%↑** |
| Performance | Sin optimizar | Optimizado | **2-3x↑** |
| Context switching | Constante | Mínimo | **80%↓** |

---

# PARTE 7: COMPATIBILIDAD

## ✅ IDEs/Agentes Compatibles

| Tool | Skills | MCPs | Notas |
|------|--------|------|-------|
| Claude Code | ✅ | ✅ | Full support |
| Cursor | ✅ | ✅ | Full support |
| Antigravity | ✅ | ✅ | MCP Store integrado |
| Windsurf | ✅ | ✅ | Full support |
| VS Code + Copilot | ✅ | ✅ | Via Cline extension |
| Codex | ✅ | ⚠️ | Limited MCP |

---

# PARTE 8: INSTRUCCIONES PARA AGENTES

## 📜 DIRECTIVAS PARA AGENTES IA

```
Al trabajar en METAMEN100, los agentes deben:

1. CONSULTAR este checklist antes de cada tarea
2. VERIFICAR qué skills están instalados y usarlos
3. UTILIZAR los MCPs conectados para:
   - Supabase: queries, migraciones, types
   - GitHub: PRs, issues, branches
   - Vercel: deployments, logs
   - Stripe: productos, suscripciones
   - Sentry: error tracking

4. SEGUIR las mejores prácticas de los skills instalados:
   - TDD para todo código nuevo
   - Patterns de React/Next.js de Vercel
   - RLS y transacciones de Supabase
   - Autenticación de better-auth

5. REPORTAR si falta algún skill necesario
6. PRIORIZAR skills marcados como 🔴 CRÍTICO
```

---

## 🔒 SEGURIDAD - RECORDATORIOS

```
⚠️ NUNCA:
- Conectar MCPs a producción
- Guardar tokens en repos públicos
- Ejecutar DROP/DELETE sin revisión
- Dar permisos admin innecesarios

✅ SIEMPRE:
- Usar entornos de desarrollo
- Crear Bot Users con permisos limitados
- Revisar acciones destructivas
- Scope MCPs a proyectos específicos
```

---

*Documento generado: 30 Enero 2026*
*Proyecto: METAMEN100 - Sistema Operativo de Conducta*
*Compatible: Antigravity, Cursor, Claude Code, Windsurf*
