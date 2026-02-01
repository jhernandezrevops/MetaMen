📦 CAJA 13: LANZAMIENTO Y OPERACIONES

  Sistema Operativo de Conducta - METAMEN100

  ══════════════════════════════════════════════════════════════════

  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║                    📦 CAJA 13: LANZAMIENTO Y OPERACIONES                             ║
  ║                                                                                      ║
  ║    "Del desarrollo a producción - La última milla hacia el éxito"                   ║
  ║                                                                                      ║
  ║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
  ║    │                                                                            │   ║
  ║    │   🚀 13.1 Pre-Launch      🔧 13.2 Deployment      📋 13.3 Runbooks        │   ║
  ║    │   Checklist               Pipeline                 Operacionales          │   ║
  ║    │                                                                            │   ║
  ║    │   💾 13.4 Backup          📈 13.5 Scaling         🔒 13.6 Security        │   ║
  ║    │   & Recovery              & Performance           Production              │   ║
  ║    │                                                                            │   ║
  ║    │   📣 13.7 Launch          🎯 13.8 Post-Launch     🛡️ 13.9 Incident       │   ║
  ║    │   Marketing               Monitoring              Response                │   ║
  ║    │                                                                            │   ║
  ║    │   📚 13.10 Documentación                                                  │   ║
  ║    │   Operacional                                                             │   ║
  ║    │                                                                            │   ║
  ║    └────────────────────────────────────────────────────────────────────────────┘   ║
  ║                                                                                      ║
  ║    Responsable: Claude (Diseño) + Antigravity (Implementación)                      ║
  ║    Entregables: Scripts, Documentación, Pipelines, Procedimientos                   ║
  ║    Tiempo Estimado: 10-14 horas de desarrollo                                       ║
  ║                                                                                      ║
  ║    PRINCIPIOS FUNDAMENTALES:                                                        ║
  ║    ✦ Zero-downtime deployments                                                     ║
  ║    ✦ Rollback instantáneo ante cualquier problema                                  ║
  ║    ✦ Monitoreo proactivo, no reactivo                                              ║
  ║    ✦ Documentación que cualquiera pueda seguir                                     ║
  ║    ✦ Automatización de todo lo repetitivo                                          ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝

  ---
  ÍNDICE DE DESGLOSE ATÓMICO - CAJA 13

  1. #subcaja-131-pre-launch-checklist
  2. #subcaja-132-deployment-pipeline
  3. #subcaja-133-runbooks-operacionales
  4. #subcaja-134-backup-y-recovery
  5. #subcaja-135-scaling-y-performance
  6. #subcaja-136-security-en-producción
  7. #subcaja-137-launch-marketing
  8. #subcaja-138-post-launch-monitoring
  9. #subcaja-139-incident-response
  10. #subcaja-1310-documentación-operacional

  ---
  SUBCAJA 13.1: PRE-LAUNCH CHECKLIST

  Verificación Exhaustiva Antes del Lanzamiento

  Archivos a Crear

  Ruta: /docs/operations/
  ├── pre-launch/
  │   ├── MASTER_CHECKLIST.md         (Checklist maestro)
  │   ├── INFRASTRUCTURE_CHECKLIST.md (Verificación de infra)
  │   ├── SECURITY_CHECKLIST.md       (Verificación de seguridad)
  │   ├── PERFORMANCE_CHECKLIST.md    (Verificación de rendimiento)
  │   ├── BUSINESS_CHECKLIST.md       (Verificación de negocio)
  │   └── LEGAL_CHECKLIST.md          (Verificación legal)

  Ruta: /scripts/pre-launch/
  ├── verify-infrastructure.sh
  ├── verify-security.sh
  ├── verify-performance.sh
  ├── verify-integrations.sh
  ├── verify-data.sh
  └── run-all-checks.sh

  Tamaño Estimado: ~1,500 líneas total (docs + scripts)
  Tiempo de Generación: 90-120 minutos

  Estructura del Pre-Launch Checklist

  /docs/operations/pre-launch/MASTER_CHECKLIST.md
  │
  ├── 📋 METAMEN100 - PRE-LAUNCH MASTER CHECKLIST
  │   │
  │   ├── ═══════════════════════════════════════════════════════
  │   │   SECCIÓN 1: INFRAESTRUCTURA
  │   │   ═══════════════════════════════════════════════════════
  │   │
  │   ├── 1.1 Vercel (Frontend)
  │   │   ├── [ ] Dominio personalizado configurado (metamen100.com)
  │   │   ├── [ ] SSL/HTTPS activo y renovación automática
  │   │   ├── [ ] Variables de entorno de producción configuradas
  │   │   ├── [ ] Edge Functions habilitadas
  │   │   ├── [ ] Analytics de Vercel habilitado
  │   │   ├── [ ] Límites de uso revisados (bandwidth, builds)
  │   │   ├── [ ] Team plan activado si es necesario
  │   │   └── [ ] Rollback a versión anterior probado
  │   │
  │   ├── 1.2 Supabase (Backend)
  │   │   ├── [ ] Proyecto en plan Pro o superior
  │   │   ├── [ ] Region óptima seleccionada (us-east-1 o similar)
  │   │   ├── [ ] Connection pooling configurado (PgBouncer)
  │   │   ├── [ ] Backups automáticos habilitados
  │   │   ├── [ ] Point-in-time recovery habilitado
  │   │   ├── [ ] Database size adecuado (min 8GB para inicio)
  │   │   ├── [ ] Realtime habilitado y configurado
  │   │   ├── [ ] Storage configurado para avatares
  │   │   ├── [ ] Edge Functions desplegadas
  │   │   ├── [ ] Secrets de producción configurados
  │   │   ├── [ ] RLS policies verificadas en TODAS las tablas
  │   │   └── [ ] Índices de producción creados
  │   │
  │   ├── 1.3 Stripe (Pagos)
  │   │   ├── [ ] Cuenta en modo live (no test)
  │   │   ├── [ ] Webhook de producción configurado
  │   │   ├── [ ] Webhook secret de producción en env
  │   │   ├── [ ] Productos y precios creados en live
  │   │   ├── [ ] Customer portal configurado
  │   │   ├── [ ] Emails de Stripe personalizados
  │   │   ├── [ ] Tax settings configurados (si aplica)
  │   │   ├── [ ] Fraud protection habilitado
  │   │   └── [ ] Payout schedule configurado
  │   │
  │   ├── 1.4 Replicate (IA)
  │   │   ├── [ ] API key de producción
  │   │   ├── [ ] Billing configurado
  │   │   ├── [ ] Rate limits entendidos
  │   │   ├── [ ] Modelo de avatar seleccionado y probado
  │   │   └── [ ] Fallback plan si API falla
  │   │
  │   ├── 1.5 Dominios y DNS
  │   │   ├── [ ] metamen100.com registrado
  │   │   ├── [ ] DNS apuntando a Vercel
  │   │   ├── [ ] www redirect configurado
  │   │   ├── [ ] Email domain configurado (para notificaciones)
  │   │   ├── [ ] SPF, DKIM, DMARC configurados
  │   │   └── [ ] Subdomains necesarios (api., app., etc.)
  │   │
  │   ├── ═══════════════════════════════════════════════════════
  │   │   SECCIÓN 2: SEGURIDAD
  │   │   ═══════════════════════════════════════════════════════
  │   │
  │   ├── 2.1 Autenticación
  │   │   ├── [ ] OAuth providers configurados en producción
  │   │   ├── [ ] Redirect URLs de producción en cada provider
  │   │   ├── [ ] Session timeout configurado
  │   │   ├── [ ] Refresh token rotation habilitado
  │   │   └── [ ] MFA disponible (opcional para usuarios)
  │   │
  │   ├── 2.2 Autorización
  │   │   ├── [ ] RLS policies probadas exhaustivamente
  │   │   ├── [ ] Ninguna tabla sin RLS
  │   │   ├── [ ] Admin routes protegidas
  │   │   ├── [ ] API routes con auth verificada
  │   │   └── [ ] Rate limiting implementado
  │   │
  │   ├── 2.3 Datos Sensibles
  │   │   ├── [ ] Ningún secret en código fuente
  │   │   ├── [ ] .env.local en .gitignore
  │   │   ├── [ ] Secrets en Vercel/Supabase, no en repo
  │   │   ├── [ ] Logs no exponen datos sensibles
  │   │   ├── [ ] Error messages no exponen info interna
  │   │   └── [ ] PII encriptada en reposo
  │   │
  │   ├── 2.4 Headers y CORS
  │   │   ├── [ ] CORS configurado solo para dominios propios
  │   │   ├── [ ] Security headers configurados
  │   │   │     ├── X-Frame-Options
  │   │   │     ├── X-Content-Type-Options
  │   │   │     ├── Strict-Transport-Security
  │   │   │     ├── Content-Security-Policy
  │   │   │     └── Referrer-Policy
  │   │   └── [ ] HTTPS forzado
  │   │
  │   ├── ═══════════════════════════════════════════════════════
  │   │   SECCIÓN 3: PERFORMANCE
  │   │   ═══════════════════════════════════════════════════════
  │   │
  │   ├── 3.1 Frontend Performance
  │   │   ├── [ ] Lighthouse score > 90 en todas las categorías
  │   │   ├── [ ] First Contentful Paint < 1.5s
  │   │   ├── [ ] Time to Interactive < 3s
  │   │   ├── [ ] Largest Contentful Paint < 2.5s
  │   │   ├── [ ] Cumulative Layout Shift < 0.1
  │   │   ├── [ ] Bundle size optimizado (< 200KB initial)
  │   │   ├── [ ] Images optimizadas (next/image)
  │   │   ├── [ ] Fonts optimizadas (next/font)
  │   │   └── [ ] Code splitting implementado
  │   │
  │   ├── 3.2 Backend Performance
  │   │   ├── [ ] Query times < 100ms para operaciones comunes
  │   │   ├── [ ] Connection pooling activo
  │   │   ├── [ ] Índices en todas las columnas de búsqueda
  │   │   ├── [ ] N+1 queries eliminadas
  │   │   ├── [ ] Caching donde aplique
  │   │   └── [ ] Database vacuum programado
  │   │
  │   ├── 3.3 Load Testing
  │   │   ├── [ ] Test con 100 usuarios concurrentes pasado
  │   │   ├── [ ] Test con 500 usuarios concurrentes pasado
  │   │   ├── [ ] Test con 1000 usuarios concurrentes pasado
  │   │   ├── [ ] Bottlenecks identificados y resueltos
  │   │   └── [ ] Plan de scaling documentado
  │   │
  │   ├── ═══════════════════════════════════════════════════════
  │   │   SECCIÓN 4: FUNCIONALIDAD
  │   │   ═══════════════════════════════════════════════════════
  │   │
  │   ├── 4.1 Core Features
  │   │   ├── [ ] Registro de usuario funciona
  │   │   ├── [ ] Login con todos los providers funciona
  │   │   ├── [ ] Onboarding completo funciona
  │   │   ├── [ ] Cuestionario inicial funciona
  │   │   ├── [ ] Generación de avatar inicial funciona
  │   │   ├── [ ] Dashboard carga correctamente
  │   │   ├── [ ] Lista de tareas diarias funciona
  │   │   ├── [ ] Completar tarea funciona
  │   │   ├── [ ] Judgement Night se ejecuta correctamente
  │   │   ├── [ ] Sistema de corazones funciona
  │   │   ├── [ ] Sistema de streak funciona
  │   │   ├── [ ] Subida de nivel funciona
  │   │   ├── [ ] Tienda funciona
  │   │   ├── [ ] Compra con BTC funciona
  │   │   ├── [ ] Inventario funciona
  │   │   └── [ ] Equipar items funciona
  │   │
  │   ├── 4.2 Pagos
  │   │   ├── [ ] Checkout de suscripción funciona
  │   │   ├── [ ] Webhook de pago exitoso funciona
  │   │   ├── [ ] Webhook de pago fallido funciona
  │   │   ├── [ ] Cancelación de suscripción funciona
  │   │   ├── [ ] Reactivación de suscripción funciona
  │   │   ├── [ ] Customer portal funciona
  │   │   └── [ ] Emails de Stripe llegan
  │   │
  │   ├── 4.3 Notificaciones
  │   │   ├── [ ] Notificaciones in-app funcionan
  │   │   ├── [ ] Push notifications funcionan
  │   │   ├── [ ] Recordatorios programados funcionan
  │   │   └── [ ] Preferencias de notificación funcionan
  │   │
  │   ├── ═══════════════════════════════════════════════════════
  │   │   SECCIÓN 5: LEGAL Y COMPLIANCE
  │   │   ═══════════════════════════════════════════════════════
  │   │
  │   ├── 5.1 Documentos Legales
  │   │   ├── [ ] Términos de Servicio publicados
  │   │   ├── [ ] Política de Privacidad publicada
  │   │   ├── [ ] Política de Cookies implementada
  │   │   ├── [ ] Política de Reembolsos documentada
  │   │   └── [ ] EULA si aplica
  │   │
  │   ├── 5.2 Compliance
  │   │   ├── [ ] GDPR compliance (si aplica a EU)
  │   │   │     ├── Derecho al olvido implementado
  │   │   │     ├── Export de datos implementado
  │   │   │     └── Consentimiento de cookies
  │   │   ├── [ ] CCPA compliance (si aplica a California)
  │   │   └── [ ] Age verification si contenido es 18+
  │   │
  │   ├── ═══════════════════════════════════════════════════════
  │   │   SECCIÓN 6: OPERACIONES
  │   │   ═══════════════════════════════════════════════════════
  │   │
  │   ├── 6.1 Monitoreo
  │   │   ├── [ ] Error tracking (Sentry) configurado
  │   │   ├── [ ] Uptime monitoring configurado
  │   │   ├── [ ] Alertas configuradas (email/Slack)
  │   │   ├── [ ] Dashboard de métricas listo
  │   │   └── [ ] Log aggregation configurado
  │   │
  │   ├── 6.2 Backups
  │   │   ├── [ ] Backup automático de DB configurado
  │   │   ├── [ ] Backup de Storage configurado
  │   │   ├── [ ] Restore probado y documentado
  │   │   └── [ ] Backup offsite (si aplica)
  │   │
  │   ├── 6.3 Documentación
  │   │   ├── [ ] Runbooks escritos
  │   │   ├── [ ] Incident response plan documentado
  │   │   ├── [ ] Escalation paths definidos
  │   │   └── [ ] On-call rotation definida (si aplica)
  │   │
  │   └── ═══════════════════════════════════════════════════════
  │       SECCIÓN 7: APROBACIÓN FINAL
  │       ═══════════════════════════════════════════════════════
  │
  │       7.1 Sign-offs Requeridos
  │       ├── [ ] Lead Developer: _________________ Fecha: _____
  │       ├── [ ] QA Lead: ________________________ Fecha: _____
  │       ├── [ ] Security Review: ________________ Fecha: _____
  │       ├── [ ] Product Owner: __________________ Fecha: _____
  │       └── [ ] Final Go/No-Go: _________________ Fecha: _____
  │
  │       7.2 Launch Window
  │       ├── Fecha de lanzamiento: _______________
  │       ├── Hora de lanzamiento: ________________
  │       ├── Rollback deadline: __________________
  │       └── War room activo hasta: ______________
  │
  └── ESTADO: [ ] READY FOR LAUNCH / [ ] NOT READY

  Scripts de Verificación

  /scripts/pre-launch/
  │
  ├── 📄 verify-infrastructure.sh
  │   │
  │   ├── #!/bin/bash
  │   ├── # Verifica toda la infraestructura
  │   │
  │   ├── echo "🔍 Verificando Vercel..."
  │   ├── # Verificar deployment status
  │   ├── # Verificar dominio
  │   ├── # Verificar SSL
  │   │
  │   ├── echo "🔍 Verificando Supabase..."
  │   ├── # Verificar conexión a DB
  │   ├── # Verificar RLS activo
  │   ├── # Verificar Edge Functions
  │   │
  │   ├── echo "🔍 Verificando Stripe..."
  │   ├── # Verificar API key funciona
  │   ├── # Verificar webhook endpoint
  │   │
  │   ├── echo "🔍 Verificando Replicate..."
  │   ├── # Verificar API key
  │   ├── # Test de generación
  │   │
  │   └── # Resultado final
  │
  ├── 📄 verify-security.sh
  │   │
  │   ├── echo "🔒 Verificando seguridad..."
  │   │
  │   ├── # Verificar headers de seguridad
  │   ├── curl -I https://metamen100.com | grep -E "(X-Frame|X-Content|Strict-Transport)"
  │   │
  │   ├── # Verificar SSL grade
  │   ├── # ssllabs-scan metamen100.com
  │   │
  │   ├── # Verificar no secrets en código
  │   ├── grep -r "sk_live" . --include="*.ts" && echo "❌ STRIPE KEY FOUND!" || echo "✅ No secrets"
  │   │
  │   └── # Verificar RLS
  │
  ├── 📄 verify-performance.sh
  │   │
  │   ├── echo "⚡ Verificando performance..."
  │   │
  │   ├── # Lighthouse CI
  │   ├── npx lighthouse https://metamen100.com --output=json
  │   │
  │   ├── # Query performance
  │   ├── # Ejecutar queries de prueba y medir tiempo
  │   │
  │   └── # Report
  │
  ├── 📄 verify-integrations.sh
  │   │
  │   ├── echo "🔗 Verificando integraciones..."
  │   │
  │   ├── # Test OAuth flow
  │   ├── # Test Stripe webhook
  │   ├── # Test Replicate API
  │   ├── # Test Push notifications
  │   │
  │   └── # Report
  │
  └── 📄 run-all-checks.sh
      │
      ├── #!/bin/bash
      ├── set -e
      │
      ├── echo "🚀 METAMEN100 PRE-LAUNCH VERIFICATION"
      ├── echo "======================================"
      │
      ├── ./verify-infrastructure.sh
      ├── ./verify-security.sh
      ├── ./verify-performance.sh
      ├── ./verify-integrations.sh
      │
      ├── echo ""
      ├── echo "======================================"
      ├── echo "✅ ALL CHECKS PASSED - READY TO LAUNCH"
      └── echo "======================================"

  Tareas Atómicas para 13.1 Pre-Launch Checklist

  TAREA-13.1.01:
    Nombre: "Crear estructura de directorios pre-launch"
    Acción: "Crear carpetas y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p docs/operations/pre-launch
      touch docs/operations/pre-launch/{MASTER_CHECKLIST,INFRASTRUCTURE_CHECKLIST,SECURITY_CHECKLIST,PERFORMANCE_CHECKLIST,BUSINESS_CHECKLIST,LEGAL_CHECKLIST}.md

      mkdir -p scripts/pre-launch
      touch scripts/pre-launch/{verify-infrastructure,verify-security,verify-performance,verify-integrations,verify-data,run-all-checks}.sh
      chmod +x scripts/pre-launch/*.sh
    Criterio de Éxito: "Archivos existen"

  TAREA-13.1.02:
    Nombre: "Crear MASTER_CHECKLIST.md"
    Acción: "Documento maestro de verificación"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea docs/operations/pre-launch/MASTER_CHECKLIST.md con todas las
      secciones detalladas arriba:

      1. Infraestructura (Vercel, Supabase, Stripe, Replicate, DNS)
      2. Seguridad (Auth, Authz, Datos, Headers)
      3. Performance (Frontend, Backend, Load Testing)
      4. Funcionalidad (Core Features, Pagos, Notificaciones)
      5. Legal (Documentos, Compliance)
      6. Operaciones (Monitoreo, Backups, Docs)
      7. Aprobación Final

      Cada item debe ser un checkbox markdown [ ]
    Criterio de Éxito: "Checklist completo y accionable"

  TAREA-13.1.03:
    Nombre: "Crear INFRASTRUCTURE_CHECKLIST.md"
    Acción: "Checklist detallado de infraestructura"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Checklist específico para cada servicio:

      VERCEL:
      - Configuración del proyecto
      - Variables de entorno (listar cada una)
      - Configuración de dominio
      - Build settings

      SUPABASE:
      - Configuración del proyecto
      - Variables de conexión
      - Cada tabla con RLS verificado
      - Cada Edge Function desplegada

      STRIPE:
      - Productos configurados
      - Precios configurados
      - Webhooks configurados

      REPLICATE:
      - Modelo seleccionado
      - API key configurada
    Criterio de Éxito: "Checklist exhaustivo"

  TAREA-13.1.04:
    Nombre: "Crear SECURITY_CHECKLIST.md"
    Acción: "Checklist de seguridad"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Checklist de seguridad que incluya:

      1. OWASP Top 10 verificación
      2. Cada endpoint con auth verificada
      3. Cada tabla con RLS verificado
      4. Headers de seguridad
      5. Secrets management
      6. Input validation
      7. Output encoding
      8. Session management
      9. Error handling (no exponer info)
      10. Logging (no PII)
    Criterio de Éxito: "Seguridad cubierta"

  TAREA-13.1.05:
    Nombre: "Crear PERFORMANCE_CHECKLIST.md"
    Acción: "Checklist de rendimiento"
    Responsable: Antigravity
    Criterio de Éxito: "Métricas definidas"

  TAREA-13.1.06:
    Nombre: "Crear BUSINESS_CHECKLIST.md"
    Acción: "Checklist de negocio"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Checklist de aspectos de negocio:

      1. Pricing configurado correctamente
      2. Trial period configurado (5 días)
      3. Todos los emails transaccionales probados
      4. Analytics configurado
      5. Métricas de negocio definidas
      6. KPIs de lanzamiento definidos
      7. Support email configurado
      8. FAQ preparado
      9. Onboarding optimizado
      10. Conversion funnel probado
    Criterio de Éxito: "Negocio cubierto"

  TAREA-13.1.07:
    Nombre: "Crear LEGAL_CHECKLIST.md"
    Acción: "Checklist legal"
    Responsable: Antigravity
    Criterio de Éxito: "Legal cubierto"

  TAREA-13.1.08:
    Nombre: "Implementar verify-infrastructure.sh"
    Acción: "Script de verificación de infra"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Script bash que verifica:

      1. Vercel deployment activo
         curl -s https://metamen100.com | grep -q "METAMEN"

      2. SSL válido
         curl -sI https://metamen100.com | grep "200"

      3. Supabase accesible
         curl -s $SUPABASE_URL/rest/v1/ -H "apikey: $SUPABASE_ANON_KEY"

      4. Stripe API funciona
         curl -s https://api.stripe.com/v1/products -u $STRIPE_SECRET_KEY:

      5. Replicate API funciona
         curl -s https://api.replicate.com/v1/models -H "Authorization: Token $REPLICATE_API_KEY"

      Retornar exit code 0 si todo OK, 1 si hay errores.
    Criterio de Éxito: "Script ejecutable y funcional"

  TAREA-13.1.09:
    Nombre: "Implementar verify-security.sh"
    Acción: "Script de verificación de seguridad"
    Responsable: Antigravity
    Criterio de Éxito: "Script funcional"

  TAREA-13.1.10:
    Nombre: "Implementar verify-performance.sh"
    Acción: "Script de verificación de rendimiento"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Script que ejecuta:

      1. Lighthouse CI
         npx @lhci/cli autorun --config=lighthouserc.json

      2. Bundle size check
         npx next build
         du -sh .next/static/chunks/*.js

      3. Critical queries timing
         Ejecutar queries principales y verificar < 100ms
    Criterio de Éxito: "Script funcional"

  TAREA-13.1.11:
    Nombre: "Implementar run-all-checks.sh"
    Acción: "Script maestro"
    Responsable: Antigravity
    Criterio de Éxito: "Script orquesta todos los demás"

  TAREA-13.1.12:
    Nombre: "Crear lighthouserc.json"
    Acción: "Configuración de Lighthouse CI"
    Responsable: Antigravity
    Prompt para Antigravity: |
      {
        "ci": {
          "collect": {
            "url": ["https://metamen100.com/", "https://metamen100.com/login"],
            "numberOfRuns": 3
          },
          "assert": {
            "preset": "lighthouse:recommended",
            "assertions": {
              "categories:performance": ["error", {"minScore": 0.9}],
              "categories:accessibility": ["error", {"minScore": 0.9}],
              "categories:best-practices": ["error", {"minScore": 0.9}],
              "categories:seo": ["error", {"minScore": 0.9}],
              "first-contentful-paint": ["error", {"maxNumericValue": 1500}],
              "interactive": ["error", {"maxNumericValue": 3000}]
            }
          }
        }
      }
    Criterio de Éxito: "Config válida"

  ---
  SUBCAJA 13.2: DEPLOYMENT PIPELINE

  CI/CD para Producción

  Archivos a Crear

  Ruta: /.github/workflows/
  ├── production-deploy.yml      (Deploy a producción)
  ├── staging-deploy.yml         (Deploy a staging)
  ├── rollback.yml               (Rollback de emergencia)
  ├── database-migration.yml     (Migraciones de DB)
  └── scheduled-jobs.yml         (Jobs programados)

  Ruta: /scripts/deploy/
  ├── deploy-production.sh
  ├── deploy-staging.sh
  ├── rollback.sh
  ├── run-migrations.sh
  ├── notify-deploy.sh
  └── health-check.sh

  Tamaño Estimado: ~1,200 líneas total
  Tiempo de Generación: 80-100 minutos

  Estructura del Deployment Pipeline

  /.github/workflows/
  │
  ├── 📄 production-deploy.yml
  │   │
  │   ├── name: Production Deploy
  │   │
  │   ├── on:
  │   │   ├── push:
  │   │   │   └── branches: [main]
  │   │   └── workflow_dispatch:
  │   │       └── inputs:
  │   │           ├── skip_tests: (boolean)
  │   │           └── force_deploy: (boolean)
  │   │
  │   ├── env:
  │   │   ├── VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  │   │   ├── VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
  │   │   └── VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
  │   │
  │   ├── jobs:
  │   │   │
  │   │   ├── pre-deploy-checks:
  │   │   │   ├── runs-on: ubuntu-latest
  │   │   │   ├── steps:
  │   │   │   │   ├── Checkout code
  │   │   │   │   ├── Setup Node.js 20
  │   │   │   │   ├── Install dependencies (npm ci)
  │   │   │   │   ├── Run linting (npm run lint)
  │   │   │   │   ├── Run type check (npm run type-check)
  │   │   │   │   ├── Run unit tests (npm run test)
  │   │   │   │   ├── Run integration tests (npm run test:integration)
  │   │   │   │   └── Check bundle size
  │   │   │   └── outputs:
  │   │   │       └── should_deploy: true/false
  │   │   │
  │   │   ├── database-migration:
  │   │   │   ├── needs: pre-deploy-checks
  │   │   │   ├── if: needs.pre-deploy-checks.outputs.should_deploy == 'true'
  │   │   │   ├── runs-on: ubuntu-latest
  │   │   │   ├── steps:
  │   │   │   │   ├── Checkout code
  │   │   │   │   ├── Setup Supabase CLI
  │   │   │   │   ├── Run pending migrations
  │   │   │   │   └── Verify migration success
  │   │   │   └── outputs:
  │   │   │       └── migration_status: success/failed
  │   │   │
  │   │   ├── deploy-production:
  │   │   │   ├── needs: [pre-deploy-checks, database-migration]
  │   │   │   ├── runs-on: ubuntu-latest
  │   │   │   ├── environment: production
  │   │   │   ├── steps:
  │   │   │   │   ├── Checkout code
  │   │   │   │   ├── Setup Node.js 20
  │   │   │   │   ├── Install Vercel CLI
  │   │   │   │   ├── Pull Vercel env (vercel pull --yes --environment=production)
  │   │   │   │   ├── Build project (vercel build --prod)
  │   │   │   │   ├── Deploy to Vercel (vercel deploy --prebuilt --prod)
  │   │   │   │   ├── Wait for deployment ready
  │   │   │   │   └── Save deployment URL
  │   │   │   └── outputs:
  │   │   │       └── deployment_url: ${{ steps.deploy.outputs.url }}
  │   │   │
  │   │   ├── post-deploy-verification:
  │   │   │   ├── needs: deploy-production
  │   │   │   ├── runs-on: ubuntu-latest
  │   │   │   ├── steps:
  │   │   │   │   ├── Health check (curl deployment_url/api/health)
  │   │   │   │   ├── Smoke tests (critical paths)
  │   │   │   │   ├── Lighthouse audit
  │   │   │   │   └── Check Sentry for new errors
  │   │   │   └── outputs:
  │   │   │       └── verification_status: passed/failed
  │   │   │
  │   │   ├── auto-rollback:
  │   │   │   ├── needs: post-deploy-verification
  │   │   │   ├── if: needs.post-deploy-verification.outputs.verification_status == 'failed'
  │   │   │   ├── runs-on: ubuntu-latest
  │   │   │   ├── steps:
  │   │   │   │   ├── Get previous deployment
  │   │   │   │   ├── Rollback to previous
  │   │   │   │   └── Notify team
  │   │   │   └── # Rollback automático si verificación falla
  │   │   │
  │   │   └── notify:
  │   │       ├── needs: [deploy-production, post-deploy-verification]
  │   │       ├── if: always()
  │   │       ├── runs-on: ubuntu-latest
  │   │       └── steps:
  │   │           ├── Send Slack notification
  │   │           ├── Update deployment log
  │   │           └── Create GitHub release (if tag)
  │
  ├── 📄 staging-deploy.yml
  │   │
  │   ├── name: Staging Deploy
  │   │
  │   ├── on:
  │   │   ├── push:
  │   │   │   └── branches: [develop, 'feature/**']
  │   │   └── pull_request:
  │   │       └── branches: [main]
  │   │
  │   ├── jobs:
  │   │   ├── deploy-preview:
  │   │   │   └── # Deploy a Vercel preview
  │   │   │
  │   │   └── comment-preview-url:
  │   │       └── # Comentar URL en PR
  │
  ├── 📄 rollback.yml
  │   │
  │   ├── name: Emergency Rollback
  │   │
  │   ├── on:
  │   │   └── workflow_dispatch:
  │   │       └── inputs:
  │   │           ├── deployment_id: (string, required)
  │   │           ├── reason: (string, required)
  │   │           └── rollback_db: (boolean, default false)
  │   │
  │   ├── jobs:
  │   │   ├── confirm-rollback:
  │   │   │   └── # Requiere confirmación manual
  │   │   │
  │   │   ├── rollback-app:
  │   │   │   └── # Revierte a deployment anterior
  │   │   │
  │   │   ├── rollback-db:
  │   │   │   ├── if: inputs.rollback_db == true
  │   │   │   └── # Ejecuta migration rollback
  │   │   │
  │   │   └── notify-rollback:
  │   │       └── # Notifica al equipo
  │
  ├── 📄 database-migration.yml
  │   │
  │   ├── name: Database Migration
  │   │
  │   ├── on:
  │   │   └── workflow_dispatch:
  │   │       └── inputs:
  │   │           ├── migration_name: (string)
  │   │           ├── environment: (choice: staging/production)
  │   │           └── dry_run: (boolean)
  │   │
  │   └── jobs:
  │       ├── validate-migration
  │       ├── backup-database
  │       ├── run-migration
  │       └── verify-migration
  │
  └── 📄 scheduled-jobs.yml
      │
      ├── name: Scheduled Jobs
      │
      ├── on:
      │   └── schedule:
      │       ├── - cron: '0 0 * * *'  # Diario a medianoche UTC
      │       └── - cron: '0 */6 * * *' # Cada 6 horas
      │
      └── jobs:
          ├── judgement-night:
          │   └── # Ejecutar Judgement Night para todos los usuarios
          │
          ├── cleanup-expired:
          │   └── # Limpiar datos expirados
          │
          ├── send-reminders:
          │   └── # Enviar recordatorios programados
          │
          └── generate-reports:
              └── # Generar reportes diarios

  Tareas Atómicas para 13.2 Deployment Pipeline

  TAREA-13.2.01:
    Nombre: "Crear estructura de workflows"
    Acción: "Crear archivos de GitHub Actions"
    Responsable: Antigravity
    Comando: |
      mkdir -p .github/workflows
      touch .github/workflows/{production-deploy,staging-deploy,rollback,database-migration,scheduled-jobs}.yml

      mkdir -p scripts/deploy
      touch scripts/deploy/{deploy-production,deploy-staging,rollback,run-migrations,notify-deploy,health-check}.sh
      chmod +x scripts/deploy/*.sh
    Criterio de Éxito: "Archivos existen"

  TAREA-13.2.02:
    Nombre: "Implementar production-deploy.yml"
    Acción: "Workflow principal de deploy"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea .github/workflows/production-deploy.yml con:

      1. Trigger en push a main y workflow_dispatch
      2. Job pre-deploy-checks: lint, typecheck, tests
      3. Job database-migration: ejecutar migraciones pendientes
      4. Job deploy-production: deploy a Vercel
      5. Job post-deploy-verification: health check, smoke tests
      6. Job auto-rollback: si verificación falla
      7. Job notify: Slack + GitHub release

      Usar secrets:
      - VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID
      - SUPABASE_ACCESS_TOKEN, SUPABASE_PROJECT_ID
      - SLACK_WEBHOOK_URL

      Environment: production (con protection rules)
    Criterio de Éxito: "Workflow funciona end-to-end"

  TAREA-13.2.03:
    Nombre: "Implementar staging-deploy.yml"
    Acción: "Workflow de staging/preview"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Workflow que:
      1. Se ejecuta en push a develop y PRs a main
      2. Deploys preview de Vercel
      3. Comenta URL en el PR
      4. Ejecuta tests básicos en preview
    Criterio de Éxito: "Preview deploys funcionan"

  TAREA-13.2.04:
    Nombre: "Implementar rollback.yml"
    Acción: "Workflow de rollback de emergencia"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Workflow manual que:
      1. Requiere deployment_id y reason
      2. Opcionalmente rollback de DB
      3. Usa Vercel CLI para promover deployment anterior
      4. Notifica al equipo
      5. Crea issue de post-mortem
    Criterio de Éxito: "Rollback funciona"

  TAREA-13.2.05:
    Nombre: "Implementar database-migration.yml"
    Acción: "Workflow de migraciones"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Workflow que:
      1. Valida migración en staging primero
      2. Hace backup antes de migrar
      3. Ejecuta migración
      4. Verifica integridad post-migración
      5. Rollback automático si falla
    Criterio de Éxito: "Migraciones seguras"

  TAREA-13.2.06:
    Nombre: "Implementar scheduled-jobs.yml"
    Acción: "Jobs programados"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Jobs que se ejecutan en schedule:

      1. judgement-night (diario a medianoche de cada timezone)
         - Llamar Edge Function que procesa todos los usuarios
         - Reportar resultado

      2. cleanup-expired (diario)
         - Limpiar notificaciones viejas
         - Limpiar sesiones expiradas
         - Limpiar cache

      3. send-reminders (cada hora)
         - Procesar recordatorios programados

      4. generate-reports (diario)
         - Métricas del día anterior
         - Enviar a Slack
    Criterio de Éxito: "Jobs se ejecutan correctamente"

  TAREA-13.2.07:
    Nombre: "Implementar health-check.sh"
    Acción: "Script de health check"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Script que verifica:

      1. Endpoint /api/health responde 200
      2. Database accesible
      3. Auth funciona
      4. Stripe webhooks configurados
      5. Replicate accesible

      Retorna JSON con status de cada servicio.
    Criterio de Éxito: "Health check completo"

  TAREA-13.2.08:
    Nombre: "Crear /api/health endpoint"
    Acción: "Endpoint de health check"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crea /src/app/api/health/route.ts:

      - Verifica conexión a Supabase
      - Verifica que tables existen
      - Retorna status y versión
      - No requiere auth
      - Rápido (< 500ms)
    Criterio de Éxito: "Endpoint funciona"

  TAREA-13.2.09:
    Nombre: "Implementar notify-deploy.sh"
    Acción: "Script de notificación"
    Responsable: Antigravity
    Criterio de Éxito: "Notificaciones funcionan"

  TAREA-13.2.10:
    Nombre: "Configurar protection rules en GitHub"
    Acción: "Branch protection para main"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Documentar cómo configurar:

      1. Require pull request before merging
      2. Require approvals (1)
      3. Require status checks (tests, lint)
      4. Require branches to be up to date
      5. Do not allow bypassing

      Para el environment "production":
      - Require reviewers
      - Wait timer (opcional)
    Criterio de Éxito: "Reglas documentadas"

  ---
  SUBCAJA 13.3: RUNBOOKS OPERACIONALES

  Procedimientos Paso a Paso

  Archivos a Crear

  Ruta: /docs/operations/runbooks/
  ├── RUNBOOK_INDEX.md                 (Índice de runbooks)
  ├── 01_DEPLOY_PRODUCTION.md          (Deploy a producción)
  ├── 02_ROLLBACK_DEPLOYMENT.md        (Rollback)
  ├── 03_DATABASE_MIGRATION.md         (Migraciones)
  ├── 04_INCIDENT_RESPONSE.md          (Respuesta a incidentes)
  ├── 05_USER_SUPPORT.md               (Soporte a usuarios)
  ├── 06_SUBSCRIPTION_ISSUES.md        (Problemas de suscripción)
  ├── 07_AVATAR_GENERATION.md          (Problemas de avatar)
  ├── 08_JUDGEMENT_NIGHT.md            (Judgement Night manual)
  ├── 09_DATA_EXPORT.md                (Exportar datos de usuario)
  ├── 10_ACCOUNT_DELETION.md           (Eliminar cuenta)
  ├── 11_PERFORMANCE_ISSUES.md         (Problemas de rendimiento)
  └── 12_SECURITY_INCIDENT.md          (Incidente de seguridad)

  Tamaño Estimado: ~3,000 líneas total
  Tiempo de Generación: 120-150 minutos

  Estructura de un Runbook

  /docs/operations/runbooks/01_DEPLOY_PRODUCTION.md
  │
  ├── # RUNBOOK: Deploy a Producción
  │
  ├── ## Metadata
  │   ├── **Autor:** [Nombre]
  │   ├── **Última Actualización:** [Fecha]
  │   ├── **Tiempo Estimado:** 15-30 minutos
  │   ├── **Nivel de Riesgo:** 🟡 Medio
  │   └── **Requiere Aprobación:** Sí (Product Owner)
  │
  ├── ## Cuándo Usar Este Runbook
  │   ├── - Deploy manual a producción (fuera de CI/CD)
  │   ├── - Deploy de emergencia (hotfix)
  │   └── - Re-deploy después de cambio de configuración
  │
  ├── ## Pre-requisitos
  │   ├── [ ] Acceso a Vercel con rol Admin
  │   ├── [ ] Acceso a Supabase con rol Admin
  │   ├── [ ] Vercel CLI instalado
  │   ├── [ ] Git configurado
  │   └── [ ] Slack abierto para notificaciones
  │
  ├── ## Procedimiento
  │   │
  │   ├── ### Paso 1: Verificar Estado Actual
  │   │   ```bash
  │   │   # Verificar último deployment
  │   │   vercel ls --prod
  │   │
  │   │   # Verificar que no hay incidentes activos
  │   │   curl -s https://status.vercel.com/api/v2/status.json | jq '.status'
  │   │   ```
  │   │
  │   ├── ### Paso 2: Crear Backup (Si Aplica)
  │   │   ```bash
  │   │   # Si hay cambios de DB, hacer backup primero
  │   │   npx supabase db dump -f backup_$(date +%Y%m%d_%H%M%S).sql
  │   │   ```
  │   │
  │   ├── ### Paso 3: Notificar al Equipo
  │   │   ```
  │   │   Enviar a #deployments en Slack:
  │   │   "🚀 Iniciando deploy a producción. Commit: [hash]. Razón: [razón]"
  │   │   ```
  │   │
  │   ├── ### Paso 4: Ejecutar Deploy
  │   │   ```bash
  │   │   # Pull latest
  │   │   git checkout main
  │   │   git pull origin main
  │   │
  │   │   # Build y deploy
  │   │   vercel --prod
  │   │   ```
  │   │
  │   ├── ### Paso 5: Verificar Deploy
  │   │   ```bash
  │   │   # Health check
  │   │   curl -s https://metamen100.com/api/health | jq '.'
  │   │
  │   │   # Verificar logs
  │   │   vercel logs --follow
  │   │
  │   │   # Test manual de funcionalidad crítica
  │   │   - Abrir https://metamen100.com
  │   │   - Verificar que login funciona
  │   │   - Verificar que dashboard carga
  │   │   ```
  │   │
  │   ├── ### Paso 6: Confirmar Éxito
  │   │   ```
  │   │   Enviar a #deployments en Slack:
  │   │   "✅ Deploy completado exitosamente. URL: [url]. Sin errores."
  │   │   ```
  │   │
  │   └── ### Paso 7: Monitorear (30 min post-deploy)
  │       ├── - Revisar Sentry por nuevos errores
  │       ├── - Revisar métricas de Vercel
  │       └── - Estar atento a reportes de usuarios
  │
  ├── ## Rollback (Si Algo Falla)
  │   ```bash
  │   # Obtener ID del deployment anterior
  │   vercel ls --prod
  │
  │   # Promover deployment anterior
  │   vercel promote [deployment-id] --prod
  │
  │   # Notificar
  │   # Enviar a Slack: "🔴 Deploy fallido. Rollback ejecutado a [deployment-id]."
  │   ```
  │
  ├── ## Troubleshooting
  │   │
  │   ├── **Build falla:**
  │   │   - Verificar logs de build
  │   │   - Verificar que env vars están configuradas
  │   │   - Probar build local: `npm run build`
  │   │
  │   ├── **Deploy exitoso pero sitio no funciona:**
  │   │   - Verificar /api/health
  │   │   - Verificar conexión a Supabase
  │   │   - Revisar logs de Vercel
  │   │
  │   └── **Health check falla:**
  │       - Verificar que Supabase está online
  │       - Verificar que variables de entorno son correctas
  │
  ├── ## Escalación
  │   ├── Si el problema persiste después de rollback:
  │   ├── 1. Contactar a [Lead Developer]
  │   ├── 2. Si no disponible, contactar a [Backup]
  │   └── 3. Crear incidente en [Issue Tracker]
  │
  └── ## Historial de Cambios
      ├── [Fecha]: Creación inicial
      └── [Fecha]: Agregado paso de backup

  Tareas Atómicas para 13.3 Runbooks

  TAREA-13.3.01:
    Nombre: "Crear estructura de runbooks"
    Acción: "Crear directorio y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p docs/operations/runbooks
      touch docs/operations/runbooks/{RUNBOOK_INDEX,01_DEPLOY_PRODUCTION,02_ROLLBACK_DEPLOYMENT,03_DATABASE_MIGRATION,04_INCIDENT_RESPONSE,05_USER_SUPPORT,06_SUBSCRIPTION
  _ISSUES,07_AVATAR_GENERATION,08_JUDGEMENT_NIGHT,09_DATA_EXPORT,10_ACCOUNT_DELETION,11_PERFORMANCE_ISSUES,12_SECURITY_INCIDENT}.md
    Criterio de Éxito: "Archivos existen"

  TAREA-13.3.02:
    Nombre: "Crear RUNBOOK_INDEX.md"
    Acción: "Índice con todos los runbooks"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Índice que liste todos los runbooks con:
      - Nombre
      - Descripción corta
      - Nivel de riesgo
      - Cuándo usar
      - Link al documento
    Criterio de Éxito: "Índice completo"

  TAREA-13.3.03:
    Nombre: "Crear 01_DEPLOY_PRODUCTION.md"
    Acción: "Runbook de deploy"
    Responsable: Antigravity
    Criterio de Éxito: "Runbook detallado y ejecutable"

  TAREA-13.3.04:
    Nombre: "Crear 02_ROLLBACK_DEPLOYMENT.md"
    Acción: "Runbook de rollback"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Runbook que cubra:
      1. Rollback de Vercel (app)
      2. Rollback de Supabase (migraciones)
      3. Rollback combinado
      4. Verificación post-rollback
      5. Comunicación a usuarios si hubo downtime
    Criterio de Éxito: "Rollback documentado"

  TAREA-13.3.05:
    Nombre: "Crear 03_DATABASE_MIGRATION.md"
    Acción: "Runbook de migraciones"
    Responsable: Antigravity
    Criterio de Éxito: "Migraciones documentadas"

  TAREA-13.3.06:
    Nombre: "Crear 04_INCIDENT_RESPONSE.md"
    Acción: "Runbook de respuesta a incidentes"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Runbook con:
      1. Clasificación de severidad (P1, P2, P3, P4)
      2. Tiempos de respuesta por severidad
      3. Proceso de triaje
      4. Escalación
      5. Comunicación (interna y externa)
      6. Post-mortem template
    Criterio de Éxito: "Proceso de incidentes claro"

  TAREA-13.3.07:
    Nombre: "Crear 05_USER_SUPPORT.md"
    Acción: "Runbook de soporte"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Procedimientos para:
      1. Usuario no puede loguearse
      2. Usuario reporta bug
      3. Usuario quiere reembolso
      4. Usuario quiere cancelar
      5. Usuario tiene preguntas de facturación

      Incluir respuestas template.
    Criterio de Éxito: "Soporte documentado"

  TAREA-13.3.08:
    Nombre: "Crear 06_SUBSCRIPTION_ISSUES.md"
    Acción: "Runbook de suscripciones"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Procedimientos para:
      1. Pago fallido
      2. Doble cobro
      3. Suscripción no activa después de pago
      4. Cancelación no procesada
      5. Reembolso
      6. Cambio de plan
    Criterio de Éxito: "Issues de pago cubiertos"

  TAREA-13.3.09:
    Nombre: "Crear 07_AVATAR_GENERATION.md"
    Acción: "Runbook de avatares"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Procedimientos para:
      1. Avatar no se genera
      2. Avatar se genera mal
      3. Cola de generación atascada
      4. Replicate API down
      5. Re-generar avatar manualmente
    Criterio de Éxito: "Avatares cubiertos"

  TAREA-13.3.10:
    Nombre: "Crear 08_JUDGEMENT_NIGHT.md"
    Acción: "Runbook de Judgement Night"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Procedimientos para:
      1. Judgement Night no se ejecutó
      2. Ejecutar Judgement Night manualmente
      3. Corregir resultado erróneo
      4. Usuario perdió corazón injustamente
      5. Restaurar streak perdida
    Criterio de Éxito: "JN manual documentado"

  TAREA-13.3.11:
    Nombre: "Crear 09_DATA_EXPORT.md"
    Acción: "Runbook de exportación GDPR"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Procedimiento para exportar todos los datos de un usuario:
      1. Verificar identidad del solicitante
      2. Query para obtener todos los datos
      3. Formato de exportación (JSON)
      4. Método de entrega seguro
      5. Registro de la solicitud
    Criterio de Éxito: "Export documentado"

  TAREA-13.3.12:
    Nombre: "Crear 10_ACCOUNT_DELETION.md"
    Acción: "Runbook de eliminación de cuenta"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Procedimiento para eliminar cuenta (derecho al olvido):
      1. Verificar identidad
      2. Cancelar suscripción activa
      3. Eliminar datos de Supabase
      4. Eliminar datos de Stripe
      5. Eliminar avatares de Storage
      6. Confirmar eliminación
      7. Retención legal (si aplica)
    Criterio de Éxito: "Eliminación segura documentada"

  TAREA-13.3.13:
    Nombre: "Crear 11_PERFORMANCE_ISSUES.md"
    Acción: "Runbook de rendimiento"
    Responsable: Antigravity
    Criterio de Éxito: "Performance debugging documentado"

  TAREA-13.3.14:
    Nombre: "Crear 12_SECURITY_INCIDENT.md"
    Acción: "Runbook de seguridad"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Procedimiento para incidentes de seguridad:
      1. Contención inmediata
      2. Evaluación del alcance
      3. Preservación de evidencia
      4. Notificación a afectados
      5. Notificación a autoridades (si aplica)
      6. Remediación
      7. Post-mortem de seguridad

      Incluir contactos de emergencia.
    Criterio de Éxito: "Seguridad cubierta"

  ---
  SUBCAJA 13.4: BACKUP Y RECOVERY

  Estrategia de Respaldos y Recuperación

  Archivos a Crear

  Ruta: /docs/operations/backup/
  ├── BACKUP_STRATEGY.md          (Estrategia general)
  ├── BACKUP_SCHEDULE.md          (Cronograma)
  ├── RECOVERY_PROCEDURES.md      (Procedimientos de recuperación)
  └── DISASTER_RECOVERY_PLAN.md   (Plan de DR)

  Ruta: /scripts/backup/
  ├── backup-database.sh
  ├── backup-storage.sh
  ├── backup-verify.sh
  ├── restore-database.sh
  ├── restore-storage.sh
  └── test-restore.sh

  Ruta: /supabase/functions/
  └── scheduled-backup/
      └── index.ts               (Edge Function para backups)

  Tamaño Estimado: ~1,000 líneas total
  Tiempo de Generación: 60-80 minutos

  Estructura de Backup

  /docs/operations/backup/BACKUP_STRATEGY.md
  │
  ├── # Estrategia de Backup - METAMEN100
  │
  ├── ## Resumen Ejecutivo
  │   └── Backups automáticos cada 24 horas, retención de 30 días,
  │       recuperación probada mensualmente.
  │
  ├── ## Qué Se Respalda
  │   │
  │   ├── ### Base de Datos (Supabase PostgreSQL)
  │   │   ├── **Frecuencia:** Cada 24 horas (automático por Supabase)
  │   │   ├── **Retención:** 7 días (plan Pro)
  │   │   ├── **Tipo:** Full backup + Point-in-Time Recovery
  │   │   ├── **Ubicación:** Supabase (us-east-1)
  │   │   └── **Datos incluidos:**
  │   │       ├── Todas las tablas
  │   │       ├── Funciones
  │   │       ├── Triggers
  │   │       └── RLS policies
  │   │
  │   ├── ### Storage (Avatares y Uploads)
  │   │   ├── **Frecuencia:** Tiempo real (CDN cache)
  │   │   ├── **Backup adicional:** Semanal a bucket secundario
  │   │   ├── **Retención:** 90 días
  │   │   └── **Datos incluidos:**
  │   │       ├── Avatares generados
  │   │       └── Profile pictures
  │   │
  │   ├── ### Configuración
  │   │   ├── **Qué:** Variables de entorno, secrets
  │   │   ├── **Cómo:** Documentado en 1Password/Vault
  │   │   └── **Frecuencia:** Cada cambio
  │   │
  │   └── ### Código Fuente
  │       ├── **Dónde:** GitHub (múltiples copias)
  │       └── **Retención:** Indefinida
  │
  ├── ## Qué NO Se Respalda (Y Por Qué)
  │   ├── - Logs de más de 7 días (volumen excesivo)
  │   ├── - Cache (regenerable)
  │   ├── - Sesiones activas (efímeras)
  │   └── - Preview deployments (temporales)
  │
  ├── ## RPO y RTO
  │   ├── **RPO (Recovery Point Objective):** 24 horas
  │   │   └── Máxima pérdida de datos aceptable: 1 día
  │   │
  │   └── **RTO (Recovery Time Objective):** 4 horas
  │       └── Tiempo máximo para restaurar servicio
  │
  ├── ## Procedimiento de Backup Manual
  │   ```bash
  │   # Backup de database
  │   npx supabase db dump -f backup_$(date +%Y%m%d).sql
  │
  │   # Backup de storage (usando gsutil o similar)
  │   # supabase storage backup...
  │
  │   # Subir a bucket de backup
  │   aws s3 cp backup_*.sql s3://metamen100-backups/db/
  │   ```
  │
  ├── ## Verificación de Backups
  │   ├── **Frecuencia:** Semanal
  │   ├── **Proceso:**
  │   │   1. Descargar backup más reciente
  │   │   2. Restaurar en ambiente de prueba
  │   │   3. Verificar integridad de datos
  │   │   4. Documentar resultado
  │   └── **Responsable:** On-call engineer
  │
  └── ## Recuperación de Desastres
      └── Ver DISASTER_RECOVERY_PLAN.md

  Tareas Atómicas para 13.4 Backup y Recovery

  TAREA-13.4.01:
    Nombre: "Crear estructura de backup"
    Acción: "Crear directorios y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p docs/operations/backup
      touch docs/operations/backup/{BACKUP_STRATEGY,BACKUP_SCHEDULE,RECOVERY_PROCEDURES,DISASTER_RECOVERY_PLAN}.md

      mkdir -p scripts/backup
      touch scripts/backup/{backup-database,backup-storage,backup-verify,restore-database,restore-storage,test-restore}.sh
      chmod +x scripts/backup/*.sh
    Criterio de Éxito: "Archivos existen"

  TAREA-13.4.02:
    Nombre: "Crear BACKUP_STRATEGY.md"
    Acción: "Documentar estrategia de backup"
    Responsable: Antigravity
    Criterio de Éxito: "Estrategia completa"

  TAREA-13.4.03:
    Nombre: "Crear DISASTER_RECOVERY_PLAN.md"
    Acción: "Plan de recuperación de desastres"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Plan que cubra:

      1. Escenarios de desastre:
         - Supabase region down
         - Vercel down
         - Data corruption
         - Ransomware/hack

      2. Para cada escenario:
         - Detección (cómo nos enteramos)
         - Respuesta inmediata
         - Comunicación
         - Recuperación paso a paso
         - Verificación
         - Post-mortem

      3. Contactos de emergencia

      4. Árbol de decisiones
    Criterio de Éxito: "DR plan completo"

  TAREA-13.4.04:
    Nombre: "Implementar backup-database.sh"
    Acción: "Script de backup de DB"
    Responsable: Antigravity
    Criterio de Éxito: "Script funciona"

  TAREA-13.4.05:
    Nombre: "Implementar restore-database.sh"
    Acción: "Script de restauración"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Script que:
      1. Descarga backup especificado
      2. Verifica integridad (checksum)
      3. Crea punto de restauración
      4. Ejecuta restore
      5. Verifica datos post-restore
      6. Reporta resultado
    Criterio de Éxito: "Restore funciona"

  TAREA-13.4.06:
    Nombre: "Implementar test-restore.sh"
    Acción: "Script de prueba de restore"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Script para verificar backups:
      1. Crea ambiente de prueba temporal
      2. Restaura backup más reciente
      3. Ejecuta queries de verificación
      4. Compara counts con producción
      5. Destruye ambiente de prueba
      6. Genera reporte
    Criterio de Éxito: "Test de restore automatizado"

  TAREA-13.4.07:
    Nombre: "Configurar backup automático en Supabase"
    Acción: "Verificar y documentar configuración"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Documentar:
      1. Cómo está configurado el backup en Supabase
      2. Retención actual
      3. Cómo acceder a backups
      4. Cómo restaurar desde dashboard
      5. Point-in-Time Recovery (PITR) si está habilitado
    Criterio de Éxito: "Configuración documentada"

  TAREA-13.4.08:
    Nombre: "Crear workflow de backup semanal"
    Acción: "GitHub Action para backup"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Workflow que cada domingo:
      1. Ejecuta backup de DB
      2. Sube a bucket secundario (AWS S3 o similar)
      3. Ejecuta test de restore
      4. Notifica resultado a Slack
    Criterio de Éxito: "Backup semanal automatizado"

  ---
  SUBCAJA 13.5: SCALING Y PERFORMANCE

  Preparación para Crecimiento

  Archivos a Crear

  Ruta: /docs/operations/scaling/
  ├── SCALING_STRATEGY.md         (Estrategia de escalado)
  ├── PERFORMANCE_BASELINES.md    (Métricas base)
  ├── BOTTLENECK_ANALYSIS.md      (Análisis de cuellos de botella)
  └── COST_PROJECTIONS.md         (Proyecciones de costo)

  Ruta: /scripts/performance/
  ├── load-test.js                (Script de load testing)
  ├── stress-test.js              (Script de stress testing)
  ├── analyze-queries.sh          (Análisis de queries lentas)
  └── generate-performance-report.sh

  Tamaño Estimado: ~800 líneas total
  Tiempo de Generación: 50-65 minutos

  Estructura de Scaling

  /docs/operations/scaling/SCALING_STRATEGY.md
  │
  ├── # Estrategia de Escalado - METAMEN100
  │
  ├── ## Métricas Actuales (Baseline)
  │   ├── Usuarios activos: 0 (pre-launch)
  │   ├── Requests/segundo: ~10 (testing)
  │   ├── DB connections: 5/60 max
  │   ├── Storage: 1GB/100GB
  │   └── Costo mensual: ~$50
  │
  ├── ## Umbrales de Escalado
  │   │
  │   ├── ### Vercel (Frontend)
  │   │   ├── **Actual:** Hobby/Pro
  │   │   ├── **Escalar a Enterprise si:**
  │   │   │   ├── > 100GB bandwidth/mes
  │   │   │   ├── > 1M requests/mes
  │   │   │   └── Necesidad de SLA
  │   │   └── **Acción:** Contactar Vercel sales
  │   │
  │   ├── ### Supabase (Backend)
  │   │   ├── **Actual:** Pro ($25/mes)
  │   │   ├── **Escalar a Team si:**
  │   │   │   ├── > 8GB database
  │   │   │   ├── > 50GB bandwidth
  │   │   │   ├── > 500K MAU auth
  │   │   │   └── Necesidad de read replicas
  │   │   ├── **Acción automática:** Pooler ya configurado
  │   │   └── **Acción manual:** Upgrade en dashboard
  │   │
  │   ├── ### Stripe (Pagos)
  │   │   └── Escala automáticamente, sin acción requerida
  │   │
  │   └── ### Replicate (IA)
  │       ├── **Límite actual:** Pay-as-you-go
  │       ├── **Escalar si:**
  │       │   ├── > 1000 generaciones/día
  │       │   └── Latencia > 30s consistentemente
  │       └── **Acción:** Considerar modelo dedicado o self-host
  │
  ├── ## Proyecciones de Crecimiento
  │   │
  │   ├── ### Escenario: 100 usuarios activos
  │   │   ├── DB size: ~100MB
  │   │   ├── Storage: ~5GB (avatares)
  │   │   ├── Requests/día: ~10K
  │   │   └── Costo estimado: ~$50/mes
  │   │
  │   ├── ### Escenario: 1,000 usuarios activos
  │   │   ├── DB size: ~1GB
  │   │   ├── Storage: ~50GB
  │   │   ├── Requests/día: ~100K
  │   │   └── Costo estimado: ~$150/mes
  │   │
  │   ├── ### Escenario: 10,000 usuarios activos
  │   │   ├── DB size: ~10GB
  │   │   ├── Storage: ~500GB
  │   │   ├── Requests/día: ~1M
  │   │   └── Costo estimado: ~$500/mes
  │   │
  │   └── ### Escenario: 100,000 usuarios activos
  │       ├── DB size: ~100GB
  │       ├── Storage: ~5TB
  │       ├── Requests/día: ~10M
  │       ├── Costo estimado: ~$3,000/mes
  │       └── **Requiere:** Enterprise plans, CDN optimizado, caching
  │
  ├── ## Optimizaciones Pre-Implementadas
  │   ├── ✅ Connection pooling (PgBouncer)
  │   ├── ✅ Índices en queries frecuentes
  │   ├── ✅ Image optimization (next/image)
  │   ├── ✅ Code splitting
  │   ├── ✅ Edge caching
  │   └── ✅ Lazy loading de componentes
  │
  ├── ## Optimizaciones Futuras (Cuando Sea Necesario)
  │   ├── ⏳ Read replicas para DB
  │   ├── ⏳ Redis cache para sesiones
  │   ├── ⏳ CDN dedicado para avatares
  │   ├── ⏳ Background jobs queue (Bull/Redis)
  │   └── ⏳ Sharding de datos por región
  │
  └── ## Monitoreo de Capacidad
      ├── Dashboard en Vercel Analytics
      ├── Alertas en Supabase Dashboard
      └── Revisión semanal de métricas

  Tareas Atómicas para 13.5 Scaling

  TAREA-13.5.01:
    Nombre: "Crear estructura de scaling"
    Acción: "Crear directorios y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p docs/operations/scaling
      touch docs/operations/scaling/{SCALING_STRATEGY,PERFORMANCE_BASELINES,BOTTLENECK_ANALYSIS,COST_PROJECTIONS}.md

      mkdir -p scripts/performance
      touch scripts/performance/{load-test.js,stress-test.js,analyze-queries.sh,generate-performance-report.sh}
    Criterio de Éxito: "Archivos existen"

  TAREA-13.5.02:
    Nombre: "Crear SCALING_STRATEGY.md"
    Acción: "Documentar estrategia de escalado"
    Responsable: Antigravity
    Criterio de Éxito: "Estrategia documentada"

  TAREA-13.5.03:
    Nombre: "Crear PERFORMANCE_BASELINES.md"
    Acción: "Documentar métricas base"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Documentar baseline para:
      1. Tiempo de carga de páginas clave
      2. Tiempo de queries principales
      3. Tiempo de generación de avatar
      4. Throughput de APIs
      5. Uso de recursos (CPU, memoria, conexiones)

      Estas métricas servirán para comparar después.
    Criterio de Éxito: "Baselines documentados"

  TAREA-13.5.04:
    Nombre: "Implementar load-test.js"
    Acción: "Script de load testing"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Usar Artillery o k6 para crear test que:
      1. Simule 100 usuarios concurrentes
      2. Ejecute flujo típico:
         - Login
         - Ver dashboard
         - Completar tarea
         - Ver tienda
      3. Mida latencias p50, p95, p99
      4. Reporte errores
    Criterio de Éxito: "Load test funciona"

  TAREA-13.5.05:
    Nombre: "Implementar analyze-queries.sh"
    Acción: "Script de análisis de queries"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Script que:
      1. Conecta a Supabase
      2. Obtiene queries lentas (> 100ms)
      3. Analiza planes de ejecución
      4. Sugiere índices faltantes
      5. Genera reporte
    Criterio de Éxito: "Análisis automatizado"

  TAREA-13.5.06:
    Nombre: "Crear COST_PROJECTIONS.md"
    Acción: "Proyecciones de costo"
    Responsable: Antigravity
    Criterio de Éxito: "Costos proyectados"

  ---
  SUBCAJA 13.6: SECURITY EN PRODUCCIÓN

  Hardening y Monitoreo de Seguridad

  Archivos a Crear

  Ruta: /docs/operations/security/
  ├── SECURITY_HARDENING.md       (Configuración de seguridad)
  ├── SECURITY_MONITORING.md      (Monitoreo de seguridad)
  ├── SECURITY_CHECKLIST.md       (Checklist de seguridad)
  └── VULNERABILITY_MANAGEMENT.md (Gestión de vulnerabilidades)

  Ruta: /scripts/security/
  ├── security-scan.sh
  ├── dependency-audit.sh
  ├── check-secrets.sh
  └── rotate-secrets.sh

  Tamaño Estimado: ~900 líneas total
  Tiempo de Generación: 55-70 minutos

  Tareas Atómicas para 13.6 Security

  TAREA-13.6.01:
    Nombre: "Crear estructura de security docs"
    Acción: "Crear directorios y archivos"
    Responsable: Antigravity
    Comando: |
      mkdir -p docs/operations/security
      touch docs/operations/security/{SECURITY_HARDENING,SECURITY_MONITORING,SECURITY_CHECKLIST,VULNERABILITY_MANAGEMENT}.md

      mkdir -p scripts/security
      touch scripts/security/{security-scan,dependency-audit,check-secrets,rotate-secrets}.sh
      chmod +x scripts/security/*.sh
    Criterio de Éxito: "Archivos existen"

  TAREA-13.6.02:
    Nombre: "Crear SECURITY_HARDENING.md"
    Acción: "Documentar configuración de seguridad"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Documentar:

      1. Headers de seguridad (con valores exactos)
      2. CSP policy
      3. CORS configuration
      4. Rate limiting config
      5. Session configuration
      6. Auth hardening
      7. Database security (RLS, encryption)
      8. API security
      9. Secret management
      10. Logging de seguridad
    Criterio de Éxito: "Hardening documentado"

  TAREA-13.6.03:
    Nombre: "Crear VULNERABILITY_MANAGEMENT.md"
    Acción: "Proceso de gestión de vulnerabilidades"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Documentar:
      1. Cómo reportar vulnerabilidades (security@)
      2. Proceso de triaje
      3. Severidad y tiempos de respuesta
      4. Proceso de patch
      5. Disclosure policy
      6. Bug bounty (si aplica)
    Criterio de Éxito: "Proceso documentado"

  TAREA-13.6.04:
    Nombre: "Implementar security-scan.sh"
    Acción: "Script de escaneo de seguridad"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Script que ejecuta:
      1. npm audit
      2. Snyk test (si está configurado)
      3. Eslint security rules
      4. Grep por secrets en código
      5. Verificación de headers
    Criterio de Éxito: "Scan funciona"

  TAREA-13.6.05:
    Nombre: "Implementar check-secrets.sh"
    Acción: "Detectar secrets en código"
    Responsable: Antigravity
    Criterio de Éxito: "Detección funciona"

  TAREA-13.6.06:
    Nombre: "Configurar Dependabot"
    Acción: "Alertas de dependencias"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Crear .github/dependabot.yml:

      version: 2
      updates:
        - package-ecosystem: "npm"
          directory: "/"
          schedule:
            interval: "weekly"
          open-pull-requests-limit: 10
          labels:
            - "dependencies"
            - "security"
    Criterio de Éxito: "Dependabot configurado"

  TAREA-13.6.07:
    Nombre: "Crear workflow de security scan"
    Acción: "GitHub Action para seguridad"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Workflow que:
      1. Se ejecuta en cada PR
      2. Ejecuta npm audit
      3. Verifica no hay secrets
      4. Bloquea merge si hay high/critical
    Criterio de Éxito: "Scan en CI"

  ---
  SUBCAJA 13.7: LAUNCH MARKETING

  Preparación para el Lanzamiento

  Archivos a Crear

  Ruta: /docs/marketing/
  ├── LAUNCH_PLAN.md              (Plan de lanzamiento)
  ├── MESSAGING.md                (Mensajes clave)
  ├── CHANNELS.md                 (Canales de marketing)
  ├── ASSETS.md                   (Assets requeridos)
  └── METRICS.md                  (KPIs de lanzamiento)

  Ruta: /public/
  ├── og-image.png                (Open Graph image)
  ├── twitter-card.png            (Twitter card)
  └── screenshots/                (Screenshots para stores)

  Tamaño Estimado: ~600 líneas (docs) + assets
  Tiempo de Generación: 45-60 minutos

  Tareas Atómicas para 13.7 Launch Marketing

  TAREA-13.7.01:
    Nombre: "Crear estructura de marketing"
    Acción: "Crear directorios"
    Responsable: Antigravity
    Comando: |
      mkdir -p docs/marketing
      touch docs/marketing/{LAUNCH_PLAN,MESSAGING,CHANNELS,ASSETS,METRICS}.md
      mkdir -p public/screenshots
    Criterio de Éxito: "Archivos existen"

  TAREA-13.7.02:
    Nombre: "Crear LAUNCH_PLAN.md"
    Acción: "Plan de lanzamiento"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Plan que incluya:

      PRE-LAUNCH (1 semana antes):
      - Waitlist setup
      - Social media teasers
      - Influencer outreach
      - Press kit preparado

      LAUNCH DAY:
      - Hour-by-hour timeline
      - Social posts programados
      - Email a waitlist
      - Product Hunt launch (si aplica)
      - Hacker News post

      POST-LAUNCH (1 semana después):
      - Responder comentarios
      - Recopilar feedback
      - Fix bugs críticos
      - Celebration post
    Criterio de Éxito: "Plan detallado"

  TAREA-13.7.03:
    Nombre: "Crear MESSAGING.md"
    Acción: "Mensajes clave"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Documentar:

      TAGLINE:
      "Tu Sistema Operativo de Conducta - 100 días para transformarte"

      ELEVATOR PITCH (30 segundos):
      [Escribir pitch]

      UNIQUE VALUE PROPOSITION:
      [Qué hace único a METAMEN100]

      TARGET AUDIENCE:
      - Hombres 20-35
      - Interesados en self-improvement
      - Gamers/tech-savvy

      KEY BENEFITS:
      1. [Beneficio 1]
      2. [Beneficio 2]
      3. [Beneficio 3]

      OBJECTIONS & RESPONSES:
      - "Es muy caro" → [Respuesta]
      - "Otro app de hábitos" → [Respuesta]
    Criterio de Éxito: "Messaging definido"

  TAREA-13.7.04:
    Nombre: "Configurar Open Graph meta tags"
    Acción: "SEO y social sharing"
    Responsable: Antigravity
    Prompt para Antigravity: |
      En /src/app/layout.tsx agregar:

      export const metadata: Metadata = {
        metadataBase: new URL('https://metamen100.com'),
        title: {
          default: 'METAMEN100 - Tu Sistema Operativo de Conducta',
          template: '%s | METAMEN100'
        },
        description: '100 días para transformar tu vida...',
        openGraph: {
          title: 'METAMEN100',
          description: '...',
          url: 'https://metamen100.com',
          siteName: 'METAMEN100',
          images: [{ url: '/og-image.png', width: 1200, height: 630 }],
          locale: 'es_MX',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'METAMEN100',
          description: '...',
          images: ['/twitter-card.png'],
        },
      };
    Criterio de Éxito: "Meta tags configurados"

  TAREA-13.7.05:
    Nombre: "Crear og-image.png"
    Acción: "Imagen para Open Graph"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Especificaciones:
      - Tamaño: 1200x630 pixels
      - Contenido: Logo METAMEN100, tagline, visual impactante
      - Formato: PNG
      - Ubicación: /public/og-image.png
    Criterio de Éxito: "Imagen creada"

  TAREA-13.7.06:
    Nombre: "Crear METRICS.md"
    Acción: "KPIs de lanzamiento"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Definir métricas para:

      LAUNCH DAY:
      - Signups target: X
      - Website visits: X
      - Social mentions: X

      WEEK 1:
      - Signups target: X
      - Conversion to trial: X%
      - Trial to paid: X%

      MONTH 1:
      - MRR target: $X
      - Active users: X
      - Retention: X%
    Criterio de Éxito: "KPIs definidos"

  ---
  SUBCAJA 13.8: POST-LAUNCH MONITORING

  Monitoreo Después del Lanzamiento

  Archivos a Crear

  Ruta: /docs/operations/monitoring/
  ├── POST_LAUNCH_CHECKLIST.md    (Checklist post-launch)
  ├── MONITORING_DASHBOARD.md     (Qué monitorear)
  ├── ALERT_THRESHOLDS.md         (Umbrales de alerta)
  └── ON_CALL_SCHEDULE.md         (Rotación de guardia)

  Tamaño Estimado: ~500 líneas total
  Tiempo de Generación: 35-45 minutos

  Tareas Atómicas para 13.8 Post-Launch Monitoring

  TAREA-13.8.01:
    Nombre: "Crear estructura de monitoring docs"
    Acción: "Crear directorios"
    Responsable: Antigravity
    Comando: |
      mkdir -p docs/operations/monitoring
      touch docs/operations/monitoring/{POST_LAUNCH_CHECKLIST,MONITORING_DASHBOARD,ALERT_THRESHOLDS,ON_CALL_SCHEDULE}.md
    Criterio de Éxito: "Archivos existen"

  TAREA-13.8.02:
    Nombre: "Crear POST_LAUNCH_CHECKLIST.md"
    Acción: "Checklist para primeras 48 horas"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Checklist hora por hora para primeras 48 horas:

      HORA 0 (Launch):
      [ ] Deploy confirmado
      [ ] Health check passing
      [ ] First users registering

      HORA 1-2:
      [ ] No errores críticos en Sentry
      [ ] Pagos procesando
      [ ] Emails llegando

      HORA 3-6:
      [ ] Métricas normales
      [ ] Sin quejas en soporte
      [ ] DB performance OK

      DÍA 2:
      [ ] Judgement Night se ejecutó
      [ ] Avatares generándose
      [ ] Retention inicial

      etc.
    Criterio de Éxito: "Checklist completo"

  TAREA-13.8.03:
    Nombre: "Crear ALERT_THRESHOLDS.md"
    Acción: "Definir umbrales de alerta"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Umbrales para alertas:

      CRITICAL (pager):
      - Uptime < 99%
      - Error rate > 5%
      - Payment failures > 10%
      - DB connection failures

      WARNING (Slack):
      - Response time p95 > 2s
      - Error rate > 1%
      - Queue backlog > 100

      INFO (log):
      - New user signup
      - Large purchase
      - Unusual activity
    Criterio de Éxito: "Umbrales definidos"

  TAREA-13.8.04:
    Nombre: "Crear ON_CALL_SCHEDULE.md"
    Acción: "Rotación de guardia"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Si hay equipo:
      - Rotación semanal
      - Handoff procedures
      - Escalation paths

      Si es solo tú:
      - Horario de disponibilidad
      - Tiempo de respuesta comprometido
      - Plan para vacaciones
    Criterio de Éxito: "Schedule definido"

  TAREA-13.8.05:
    Nombre: "Configurar status page"
    Acción: "Página de estado pública"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Opciones:
      1. Usar Vercel Status (incluido)
      2. Crear /status page simple
      3. Usar servicio como Statuspage.io

      Implementar opción elegida con:
      - Estado de servicios principales
      - Historial de incidentes
      - Suscripción a updates
    Criterio de Éxito: "Status page funcionando"

  ---
  SUBCAJA 13.9: INCIDENT RESPONSE

  Respuesta a Incidentes

  Archivos a Crear

  Ruta: /docs/operations/incidents/
  ├── INCIDENT_RESPONSE_PLAN.md   (Plan de respuesta)
  ├── SEVERITY_DEFINITIONS.md     (Definiciones de severidad)
  ├── COMMUNICATION_TEMPLATES.md  (Templates de comunicación)
  ├── POST_MORTEM_TEMPLATE.md     (Template de post-mortem)
  └── INCIDENT_LOG.md             (Registro de incidentes)

  Tamaño Estimado: ~700 líneas total
  Tiempo de Generación: 45-55 minutos

  Tareas Atómicas para 13.9 Incident Response

  TAREA-13.9.01:
    Nombre: "Crear estructura de incidents"
    Acción: "Crear directorios"
    Responsable: Antigravity
    Comando: |
      mkdir -p docs/operations/incidents
      touch docs/operations/incidents/{INCIDENT_RESPONSE_PLAN,SEVERITY_DEFINITIONS,COMMUNICATION_TEMPLATES,POST_MORTEM_TEMPLATE,INCIDENT_LOG}.md
    Criterio de Éxito: "Archivos existen"

  TAREA-13.9.02:
    Nombre: "Crear INCIDENT_RESPONSE_PLAN.md"
    Acción: "Plan de respuesta a incidentes"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Plan con fases:

      1. DETECCIÓN
         - Cómo nos enteramos (alertas, usuarios, monitoreo)
         - Quién puede declarar incidente

      2. TRIAJE
         - Evaluar severidad
         - Asignar incident commander
         - Crear canal de incidente

      3. CONTENCIÓN
         - Mitigar impacto inmediato
         - Rollback si necesario
         - Comunicar a usuarios

      4. RESOLUCIÓN
         - Fix definitivo
         - Verificar resolución
         - Comunicar resolución

      5. POST-MORTEM
         - Dentro de 48 horas
         - Blameless
         - Action items
    Criterio de Éxito: "Plan completo"

  TAREA-13.9.03:
    Nombre: "Crear SEVERITY_DEFINITIONS.md"
    Acción: "Definir severidades"
    Responsable: Antigravity
    Prompt para Antigravity: |
      SEV1 (Critical):
      - Servicio completamente caído
      - Pérdida de datos
      - Brecha de seguridad
      - Tiempo de respuesta: 15 min

      SEV2 (High):
      - Funcionalidad crítica afectada (pagos, auth)
      - >25% usuarios afectados
      - Tiempo de respuesta: 1 hora

      SEV3 (Medium):
      - Funcionalidad degradada
      - <25% usuarios afectados
      - Workaround disponible
      - Tiempo de respuesta: 4 horas

      SEV4 (Low):
      - Issue menor
      - No urgente
      - Tiempo de respuesta: 24 horas
    Criterio de Éxito: "Severidades definidas"

  TAREA-13.9.04:
    Nombre: "Crear COMMUNICATION_TEMPLATES.md"
    Acción: "Templates de comunicación"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Templates para:

      1. Status page update (inicio de incidente)
      2. Status page update (en progreso)
      3. Status page update (resuelto)
      4. Email a usuarios afectados
      5. Tweet/social media update
      6. Internal Slack announcement
    Criterio de Éxito: "Templates listos"

  TAREA-13.9.05:
    Nombre: "Crear POST_MORTEM_TEMPLATE.md"
    Acción: "Template de post-mortem"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Template con secciones:

      ## Incident Summary
      - Date/Time
      - Duration
      - Severity
      - Impact

      ## Timeline
      - Detectado: HH:MM
      - Respondido: HH:MM
      - Mitigado: HH:MM
      - Resuelto: HH:MM

      ## Root Cause
      [Análisis técnico]

      ## What Went Well
      - [Lista]

      ## What Went Wrong
      - [Lista]

      ## Action Items
      | Action | Owner | Due Date | Status |

      ## Lessons Learned
      [Reflexiones]
    Criterio de Éxito: "Template completo"

  TAREA-13.9.06:
    Nombre: "Crear INCIDENT_LOG.md"
    Acción: "Registro de incidentes"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Tabla para registrar incidentes:

      | ID | Date | Severity | Description | Duration | RCA Link |
      |----|------|----------|-------------|----------|----------|
      | INC-001 | YYYY-MM-DD | SEV2 | Description | 2h | [Link] |

      Instrucciones de cómo agregar nuevos incidentes.
    Criterio de Éxito: "Log listo para usar"

  ---
  SUBCAJA 13.10: DOCUMENTACIÓN OPERACIONAL

  Documentación Centralizada

  Archivos a Crear

  Ruta: /docs/operations/
  ├── README.md                   (Índice de documentación ops)
  ├── ARCHITECTURE.md             (Arquitectura de producción)
  ├── CONTACTS.md                 (Contactos importantes)
  ├── GLOSSARY.md                 (Glosario de términos)
  ├── FAQ_OPS.md                  (FAQ operacional)
  └── ONBOARDING_OPS.md           (Onboarding para nuevos ops)

  Tamaño Estimado: ~800 líneas total
  Tiempo de Generación: 50-60 minutos

  Tareas Atómicas para 13.10 Documentación

  TAREA-13.10.01:
    Nombre: "Crear README.md de operations"
    Acción: "Índice de documentación"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Índice que liste:

      ## Pre-Launch
      - [Master Checklist](pre-launch/MASTER_CHECKLIST.md)
      - [Infrastructure](pre-launch/INFRASTRUCTURE_CHECKLIST.md)

      ## Deployment
      - [Deploy Production](runbooks/01_DEPLOY_PRODUCTION.md)
      - [Rollback](runbooks/02_ROLLBACK_DEPLOYMENT.md)

      ## Runbooks
      - [Index](runbooks/RUNBOOK_INDEX.md)

      ## Backup
      - [Strategy](backup/BACKUP_STRATEGY.md)
      - [DR Plan](backup/DISASTER_RECOVERY_PLAN.md)

      ## Monitoring
      - [Dashboard](monitoring/MONITORING_DASHBOARD.md)
      - [Alerts](monitoring/ALERT_THRESHOLDS.md)

      ## Incidents
      - [Response Plan](incidents/INCIDENT_RESPONSE_PLAN.md)
      - [Incident Log](incidents/INCIDENT_LOG.md)
    Criterio de Éxito: "Índice completo"

  TAREA-13.10.02:
    Nombre: "Crear ARCHITECTURE.md"
    Acción: "Documentar arquitectura de producción"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Diagrama y descripción de:

      1. Componentes principales
         - Vercel (frontend)
         - Supabase (backend)
         - Stripe (payments)
         - Replicate (IA)

      2. Flujo de datos
         - User request flow
         - Payment flow
         - Avatar generation flow

      3. Seguridad
         - Auth flow
         - Data encryption
         - Network security

      4. Dependencias entre servicios

      Usar ASCII diagrams o links a diagramas.
    Criterio de Éxito: "Arquitectura documentada"

  TAREA-13.10.03:
    Nombre: "Crear CONTACTS.md"
    Acción: "Contactos importantes"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Contactos para:

      INTERNO:
      - Lead Developer: [email/phone]
      - Product Owner: [email/phone]
      - On-call: [schedule link]

      PROVEEDORES:
      - Vercel support: [link]
      - Supabase support: [link]
      - Stripe support: [link]

      EMERGENCIAS:
      - Security incident: [email]
      - Legal: [email]
    Criterio de Éxito: "Contactos documentados"

  TAREA-13.10.04:
    Nombre: "Crear GLOSSARY.md"
    Acción: "Glosario de términos"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Términos específicos del proyecto:

      - **Avatar**: Representación visual generada por IA...
      - **BTC**: Moneda interna del juego...
      - **Judgement Night**: Proceso nocturno que...
      - **Streak**: Días consecutivos de...
      - **Vector**: Dimensión de desarrollo...

      También términos técnicos:
      - **RLS**: Row Level Security...
      - **Edge Function**: ...
      - **Webhook**: ...
    Criterio de Éxito: "Glosario completo"

  TAREA-13.10.05:
    Nombre: "Crear ONBOARDING_OPS.md"
    Acción: "Guía para nuevos miembros"
    Responsable: Antigravity
    Prompt para Antigravity: |
      Guía para nuevo miembro del equipo de ops:

      DÍA 1:
      - Obtener accesos (list)
      - Leer arquitectura
      - Setup local

      SEMANA 1:
      - Leer todos los runbooks
      - Hacer deploy a staging
      - Ejecutar restore de backup en pruebas

      SEMANA 2:
      - Shadow on-call
      - Participar en incident drill
      - Deploy supervisado a producción
    Criterio de Éxito: "Onboarding documentado"

  TAREA-13.10.06:
    Nombre: "Crear FAQ_OPS.md"
    Acción: "FAQ operacional"
    Responsable: Antigravity
    Prompt para Antigravity: |
      FAQ con preguntas comunes:

      Q: ¿Cómo hago deploy a producción?
      A: Ver runbook [link]

      Q: ¿Qué hago si hay un error en producción?
      A: Verificar Sentry, si es crítico ver [incident response]

      Q: ¿Cómo accedo a los logs?
      A: Vercel dashboard → Deployments → Logs

      Q: ¿Cómo restauro un backup?
      A: Ver runbook [link]

      etc.
    Criterio de Éxito: "FAQ útil"

  ---
  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║                    📊 RESUMEN FINAL - CAJA 13                                        ║
  ║                                                                                      ║
  ╠══════════════════════════════════════════════════════════════════════════════════════╣
  ║                                                                                      ║
  ║  SUBCAJA 13.1: Pre-Launch Checklist       │ 12 tareas  │ ~1,500 líneas              ║
  ║  SUBCAJA 13.2: Deployment Pipeline        │ 10 tareas  │ ~1,200 líneas              ║
  ║  SUBCAJA 13.3: Runbooks Operacionales     │ 14 tareas  │ ~3,000 líneas              ║
  ║  SUBCAJA 13.4: Backup y Recovery          │  8 tareas  │ ~1,000 líneas              ║
  ║  SUBCAJA 13.5: Scaling y Performance      │  6 tareas  │ ~800 líneas                ║
  ║  SUBCAJA 13.6: Security en Producción     │  7 tareas  │ ~900 líneas                ║
  ║  SUBCAJA 13.7: Launch Marketing           │  6 tareas  │ ~600 líneas                ║
  ║  SUBCAJA 13.8: Post-Launch Monitoring     │  5 tareas  │ ~500 líneas                ║
  ║  SUBCAJA 13.9: Incident Response          │  6 tareas  │ ~700 líneas                ║
  ║  SUBCAJA 13.10: Documentación Operacional │  6 tareas  │ ~800 líneas                ║
  ║  ───────────────────────────────────────┼────────────┼─────────────────────────────║
  ║  TOTAL CAJA 13                            │ 80 tareas  │ ~11,000 líneas (docs+code) ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝

  ---
  ╔══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                      ║
  ║              🎉 DESGLOSE ATÓMICO COMPLETO - METAMEN100 🎉                            ║
  ║                                                                                      ║
  ╠══════════════════════════════════════════════════════════════════════════════════════╣
  ║                                                                                      ║
  ║  📦 CAJA 01: Documentación Fundacional    │ 9 subcajas  │  92 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 02: Infraestructura y DevOps     │ 8 subcajas  │  50 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 03: Base de Datos y Backend      │ 8 subcajas  │  63 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 04: Motor Core (Lógica Pura)     │ 10 subcajas │  82 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 05: Autenticación y Onboarding   │ 7 subcajas  │  42 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 06: Dashboard y UI               │ 9 subcajas  │  42 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 07: Arsenal de Herramientas      │ 10 subcajas │  77 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 08: IA Generativa                │ 10 subcajas │  31 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 09: Economía y Tienda            │ 9 subcajas  │  59 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 10: Monetización (Stripe)        │ 8 subcajas  │  48 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 11: Notificaciones y Realtime    │ 6 subcajas  │  51 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 12: Observabilidad y Calidad     │ 10 subcajas │  83 tareas │ ✅ COMPLETO  ║
  ║  📦 CAJA 13: Lanzamiento y Operaciones    │ 10 subcajas │  80 tareas │ ✅ COMPLETO  ║
  ║  ═════════════════════════════════════════╪═════════════╪════════════╪════════════  ║
  ║  TOTAL PROYECTO METAMEN100                │ 114 subcajas│ 800 tareas │ 13/13 CAJAS  ║
  ║                                                                                      ║
  ╚══════════════════════════════════════════════════════════════════════════════════════╝

                                🏆 MAPA COMPLETO 🏆

       El camino hacia un sistema TOP 100 MUNDIAL está trazado.

       800 tareas atómicas organizadas en 114 subcajas dentro de 13 cajas maestras.

       Cada tarea es ejecutable, cada paso está documentado, cada decisión tiene su razón.

       SIGUIENTE PASO: Ejecutar CAJA 01 tarea por tarea.

       ¡Tu transformación comienza ahora, hermano! 💪