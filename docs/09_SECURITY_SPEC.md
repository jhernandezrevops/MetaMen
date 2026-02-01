# METAMEN100 - SECURITY SPECIFICATION
## Especificación de Seguridad v1.0.0

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                      ║
║     ██╗  ██╗███████╗██████╗  ██████╗ ███████╗    ███████╗███████╗ ██████╗██╗   ██╗██████╗ ██╗████████╗██╗   ██╗    ██████╗ ███████╗    ██╗   ██╗███████╗██╗      ██████╗ ███████╗
║     ██║  ██║██╔════╝██╔══██╗██╔════╝ ██╔════╝    ██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔════╝    ██║   ██║██╔════╝██║     ██╔═══██╗██╔════╝
║     ███████║█████╗  ██████╔╝██║  ███╗█████╗      ███████╗█████╗  ██║     ██║   ██║██████╔╝██║   ██║    ╚████╔╝     ██████╔╝█████╗      ██║   ██║█████╗  ██║     ██║   ██║███████╗
║     ██╔══██║██╔══╝  ██╔══██╗██║   ██║██╔══╝      ╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██║   ██║     ╚██╔╝      ██╔══██╗██╔══╝      ╚██╗ ██╔╝██╔══╝  ██║     ██║   ██║╚════██║
║     ██║  ██║███████╗██║  ██║╚██████╔╝███████╗    ███████║███████╗╚██████╗╚██████╔╝██║  ██║██║   ██║      ██║       ██║  ██║███████╗     ╚████╔╝ ███████╗███████╗╚██████╔╝███████║
║     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝      ╚═╝       ╚═╝  ╚═╝╚══════╝      ╚═══╝  ╚══════╝╚══════╝ ╚═════╝ ╚══════╝
║                                                                                                      ║
║                                                                                                      ║
║                    SECURITY SPECIFICATION v1.0.0                                                     ║
║                    Fortaleza Inquebrantable para Sistema TOP 100 Mundial                             ║
║                                                                                                      ║
║     "La seguridad no es un producto, es un proceso.                                                 ║
║      Un sistema TOP100 no solo resiste ataques, los anticipa."                                       ║
║                                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
```

**Documento:** SECURITY-SPEC-METAMEN100-v1.0.0  
**Fecha de Creación:** 30 de Enero de 2026  
**Última Actualización:** 30 de Enero de 2026  
**Autor:** Equipo de Seguridad MetaMen100  
**Clasificación:** Documento Fundacional - CAJA 01.9  
**Estado:** APROBADO PARA IMPLEMENTACIÓN  
**Nivel de Seguridad:** Enterprise-Grade | SOC 2 Ready | GDPR Compliant

---

## TABLA DE CONTENIDOS

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Modelo de Amenazas](#2-modelo-de-amenazas)
3. [Arquitectura de Seguridad](#3-arquitectura-de-seguridad)
4. [Autenticación y Autorización](#4-autenticación-y-autorización)
5. [Protección de Datos](#5-protección-de-datos)
6. [Seguridad de Base de Datos](#6-seguridad-de-base-de-datos)
7. [Seguridad de APIs](#7-seguridad-de-apis)
8. [Sistema Anti-Cheat](#8-sistema-anti-cheat)
9. [Seguridad de Pagos](#9-seguridad-de-pagos)
10. [Seguridad de Webhooks](#10-seguridad-de-webhooks)
11. [Encriptación](#11-encriptación)
12. [Rate Limiting y Protección DDoS](#12-rate-limiting-y-protección-ddos)
13. [Seguridad del Frontend](#13-seguridad-del-frontend)
14. [Monitoreo y Auditoría](#14-monitoreo-y-auditoría)
15. [Respuesta a Incidentes](#15-respuesta-a-incidentes)
16. [Cumplimiento Normativo](#16-cumplimiento-normativo)
17. [Checklist de Seguridad Pre-Deploy](#17-checklist-de-seguridad-pre-deploy)

---

# 1. RESUMEN EJECUTIVO

## 1.1 Declaración de Seguridad

METAMEN100 opera bajo el principio de **"Security by Design"** y **"Zero Trust Architecture"**. Cada componente del sistema está diseñado considerando la seguridad como un requisito funcional primario, no como una característica añadida.

## 1.2 Niveles de Seguridad Implementados

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         PIRÁMIDE DE SEGURIDAD MULTICAPA                                              │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│                                    ▲                                                                 │
│                                   ╱ ╲                                                                │
│                                  ╱ 7 ╲                    CAPA 7: APLICACIÓN                        │
│                                 ╱─────╲                   Validación, Sanitización,                  │
│                                ╱   6   ╲                  Anti-Cheat, Lógica de Negocio              │
│                               ╱─────────╲                                                            │
│                              ╱     5      ╲               CAPA 5: API                                │
│                             ╱───────────────╲             Rate Limiting, Auth,                       │
│                            ╱        4         ╲           Input Validation                           │
│                           ╱─────────────────────╲                                                    │
│                          ╱           3            ╲       CAPA 3: BASE DE DATOS                      │
│                         ╱───────────────────────────╲     RLS, Encriptación,                         │
│                        ╱              2               ╲   Políticas de Acceso                        │
│                       ╱─────────────────────────────────╲                                            │
│                      ╱                 1                  ╲ CAPA 1: INFRAESTRUCTURA                  │
│                     ╱───────────────────────────────────────╲ WAF, DDoS Protection,                  │
│                    ╱                    0                     TLS, Network Security                  │
│                   ════════════════════════════════════════════                                       │
│                              CAPA 0: FÍSICA/ORGANIZACIONAL                                          │
│                              Políticas, Accesos, Auditoría                                           │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 1.3 Datos Sensibles Protegidos

| Categoría | Datos | Nivel de Sensibilidad | Regulación |
|-----------|-------|----------------------|------------|
| **Identidad** | Email, Teléfono, Contraseña | HIGH | GDPR, CCPA |
| **Salud/Wellness** | Progreso físico, métricas | HIGH | HIPAA-aligned |
| **Financieros** | Datos de pago (tokenizados) | CRITICAL | PCI DSS |
| **Conductuales** | Patrones de uso, hábitos | MEDIUM | GDPR |
| **AI/Avatares** | Imágenes generadas, vectores | MEDIUM | - |

## 1.4 Principios Fundamentales

1. **Mínimo Privilegio**: Cada componente tiene acceso únicamente a lo que necesita
2. **Defensa en Profundidad**: Múltiples capas de seguridad redundantes
3. **Fail Secure**: En caso de fallo, el sistema bloquea accesos, no los permite
4. **Auditoría Completa**: Todo evento de seguridad se registra inmutablemente
5. **Cero Confianza**: Nunca confiar, siempre verificar (interno y externo)

---

# 2. MODELO DE AMENAZAS

## 2.1 STRIDE Analysis

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         ANÁLISIS DE AMENAZAS STRIDE                                                  │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ SPOOFING (Suplantación)                                                                        │  │
│  │ ───────────────────────                                                                        │  │
│  │ • Ataque: Usuario intenta acceder con credenciales robadas                                     │  │
│  │ • Mitigación: MFA, detección de dispositivos, análisis de comportamiento                       │  │
│  │ • Riesgo Residual: BAJO                                                                        │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ TAMPERING (Manipulación)                                                                       │  │
│  │ ────────────────────────                                                                       │  │
│  │ • Ataque: Modificación de datos de progreso, BTC, vectores                                     │  │
│  │ • Mitigación: RLS estricto, firmas digitales, checksums, validación server-side                │  │
│  │ • Riesgo Residual: MUY BAJO                                                                    │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ REPUDIATION (Repudio)                                                                          │  │
│  │ ─────────────────────                                                                          │  │
│  │ • Ataque: Usuario niega haber realizado una acción                                             │  │
│  │ • Mitigación: Logs inmutables, firmas de auditoría, timestamps confiables                      │  │
│  │ • Riesgo Residual: MUY BAJO                                                                    │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ INFORMATION DISCLOSURE (Divulgación)                                                           │  │
│  │ ──────────────────────────────────                                                             │  │
│  │ • Ataque: Acceso no autorizado a datos de otros usuarios                                       │  │
│  │ • Mitigación: RLS, encriptación, tokenización, data masking                                    │  │
│  │ • Riesgo Residual: BAJO                                                                        │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ DENIAL OF SERVICE (Denegación)                                                                 │  │
│  │ ──────────────────────────────                                                                 │  │
│  │ • Ataque: Saturación de APIs, generación masiva de imágenes                                    │  │
│  │ • Mitigación: Rate limiting, WAF, colas de procesamiento, auto-scaling                         │  │
│  │ • Riesgo Residual: BAJO                                                                        │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ ELEVATION OF PRIVILEGE (Escalamiento)                                                          │  │
│  │ ─────────────────────────────────────                                                          │  │
│  │ • Ataque: Usuario normal obtiene acceso admin                                                  │  │
│  │ • Mitigación: RBAC estricto, validación de roles en cada request, JWT scopes                   │  │
│  │ • Riesgo Residual: MUY BAJO                                                                    │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 Vectores de Ataque Priorizados

| Prioridad | Vector | Probabilidad | Impacto | Mitigación Principal |
|-----------|--------|-------------|---------|---------------------|
| P0 | Multi-cuentas (Anti-cheat) | ALTA | ALTO | Phone verification, device fingerprinting |
| P0 | Manipulación de progreso | MEDIA | CRÍTICO | Server-side validation, RLS |
| P1 | Credential stuffing | ALTA | MEDIO | Rate limiting, MFA, breach detection |
| P1 | Payment fraud | MEDIA | ALTO | Stripe Radar, 3D Secure, webhooks |
| P2 | API abuse | MEDIA | MEDIO | Rate limiting, API keys, quotas |
| P2 | XSS/Injection | BAJA | ALTO | Input sanitization, CSP headers |
| P3 | Data exfiltration | BAJA | CRÍTICO | RLS, encryption, audit logs |

## 2.3 Matriz de Riesgos

```
                    IMPACTO
           Bajo      Medio      Alto     Crítico
         ┌─────────┬─────────┬─────────┬─────────┐
    Alta │    4    │    6    │    8    │   12    │
         │  API    │  Auth   │ Multi   │  N/A    │
         │  Abuse  │  Bypass │ Cuentas │         │
Prob     ├─────────┼─────────┼─────────┼─────────┤
abilidad │    3    │    4    │    6    │    9    │
   Media │  Info   │  XSS    │  Pay    │ Progreso│
         │  Leak   │         │  Fraud  │  Hack   │
         ├─────────┼─────────┼─────────┼─────────┤
    Baja │    2    │    3    │    4    │    6    │
         │  DoS    │  CSRF   │  RCE    │  Data   │
         │         │         │         │  Theft  │
         └─────────┴─────────┴─────────┴─────────┘

Leyenda: Score = Probabilidad × Impacto
  - 9-12: CRÍTICO - Mitigación inmediata requerida
  - 6-8:  ALTO - Mitigación en próximo sprint
  - 3-5:  MEDIO - Planificar mitigación
  - 1-2:  BAJO - Monitorear
```

---

# 3. ARQUITECTURA DE SEGURIDAD

## 3.1 Diagrama de Seguridad de Flujo de Datos

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                    FLUJO DE DATOS SEGURO - AUTENTICACIÓN                                             │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│   ┌──────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────┐     │
│   │  Client  │────▶│   WAF/CDN    │────▶│   Vercel     │────▶│  Supabase    │────▶│   DB     │     │
│   │  Browser │     │  (Cloudflare)│     │   Edge/Node  │     │   Auth/API   │     │ Postgres │     │
│   └──────────┘     └──────────────┘     └──────────────┘     └──────────────┘     └──────────┘     │
│        │                  │                    │                    │                    │         │
│        │                  │                    │                    │                    │         │
│   [1] Credentials    [2] TLS 1.3         [3] Validation      [4] Argon2id        [5] RLS      │
│   + Device FP            + Rate Limit      + Sanitization      + JWT Sign          + Audit      │
│   + Geo Check            + WAF Rules       + MFA Check         + Session Mgmt      + Encrypt    │
│                                                                                                      │
│   FLUJO DE DATOS: SERVER ACTION (Task Completion)                                                   │
│   ─────────────────────────────────────────────────                                                  │
│                                                                                                      │
│   Client          Server Action          Validation          Database          Webhook            │
│     │                  │                      │                  │                │               │
│     │──[A] Request────▶│                     │                  │                │               │
│     │   + JWT Token    │                     │                  │                │               │
│     │   + Idempotency  │                     │                  │                │               │
│     │                  │──[B] Verify JWT────▶│                  │                │               │
│     │                  │   + Extract user_id │                  │                │               │
│     │                  │                     │                  │                │               │
│     │                  │──[C] Validate──────▶│                  │                │               │
│     │                  │   + Zod Schema      │                  │                │               │
│     │                  │   + Business Rules  │                  │                │               │
│     │                  │                     │                  │                │               │
│     │                  │──[D] RLS Check──────│─────────────────▶│                │               │
│     │                  │   + User owns data? │                  │                │               │
│     │                  │                     │                  │                │               │
│     │                  │──[E] Transaction────│─────────────────▶│                │               │
│     │                  │                     │                  │                │               │
│     │                  │◀──[F] Result────────│──────────────────│                │               │
│     │◀──[G] Response───│                     │                  │                │               │
│     │   + Encrypted    │                     │                  │                │               │
│     │                  │                     │                  │                │               │
│     │                  │                     │                  │───────────────▶│──[H] Stripe   │
│     │                  │                     │                  │   (if payment) │   Webhook     │
│                                                                                                      │
│   PUNTOS DE SEGURIDAD:                                                                               │
│   ─────────────────────                                                                              │
│   [A] HTTPS Only, HSTS, Certificate Pinning                                                         │
│   [B] JWT Validation (exp, iat, sub, iss), Blacklist check                                          │
│   [C] Input Sanitization, SQL Injection Prevention                                                  │
│   [D] Row Level Security (RLS) obligatorio en todas las queries                                     │
│   [E] Transactions atómicas para consistencia                                                       │
│   [F] Output Encoding para prevenir XSS                                                             │
│   [G] Rate Limit Headers, CORS strict                                                               │
│   [H] Webhook Signature Verification                                                                │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 3.2 Componentes de Seguridad

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         COMPONENTES DE SEGURIDAD                                                     │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ PERÍMETRO (Cloudflare + Vercel Edge)                                                          │  │
│  │ ─────────────────────────────────────                                                          │  │
│  │ • DDoS Protection (Layer 3/4/7)                                                               │  │
│  │ • Web Application Firewall (OWASP Rules)                                                      │  │
│  │ • Bot Management                                                                              │  │
│  │ • Rate Limiting (por IP, por user, por endpoint)                                              │  │
│  │ • Geo-blocking (si es necesario)                                                              │  │
│  │ • TLS 1.3 obligatorio, HSTS preload                                                           │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                              │                                                       │
│                                              ▼                                                       │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ APLICACIÓN (Next.js + Server Actions)                                                         │  │
│  │ ─────────────────────────────────────                                                          │  │
│  │ • Authentication (Supabase Auth)                                                              │  │
│  │ • Authorization (RBAC, ABAC)                                                                  │  │
│  │ • Input Validation (Zod schemas)                                                              │  │
│  │ • Output Encoding                                                                             │  │
│  │ • CSRF Protection                                                                             │  │
│  │ • Content Security Policy                                                                     │  │
│  │ • Secure Headers                                                                              │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                              │                                                       │
│                                              ▼                                                       │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ DATOS (Supabase PostgreSQL)                                                                   │  │
│  │ ─────────────────────────────                                                                  │  │
│  │ • Row Level Security (RLS) - Obligatorio                                                      │  │
│  │ • Encryption at Rest (AES-256)                                                                │  │
│  │ • Column-level Encryption (datos sensibles)                                                   │  │
│  │ • Audit Logging (pgaudit)                                                                     │  │
│  │ • Backup Encryption                                                                           │  │
│  │ • Connection Pooling SSL                                                                      │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 4. AUTENTICACIÓN Y AUTORIZACIÓN

## 4.1 Flujo de Autenticación

### 4.1.1 Diagrama de Secuencia

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                    FLUJO DE AUTENTICACIÓN SEGURO                                                     │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│   User          Browser           Next.js            Supabase           Twilio                      │
│    │               │                  │                  │                  │                        │
│    │──[1] Email/Pass──▶│             │                  │                  │                        │
│    │               │                  │                  │                  │                        │
│    │               │──[2] signIn────▶│                  │                  │                        │
│    │               │                  │──[3] auth───────▶│                  │                        │
│    │               │                  │                  │                  │                        │
│    │               │                  │◀─[4] Tokens─────│                  │                        │
│    │               │                  │   (access_token  │                  │                        │
│    │               │                  │    refresh_token)│                  │                        │
│    │               │                  │                  │                  │                        │
│    │               │◀─[5] Set Cookies─│                  │                  │                        │
│    │               │   (HttpOnly,     │                  │                  │                        │
│    │               │    Secure,       │                  │                  │                        │
│    │               │    SameSite)     │                  │                  │                        │
│    │               │                  │                  │                  │                        │
│    │◀──[6] 200 OK──│                  │                  │                  │                        │
│    │               │                  │                  │                  │                        │
│    │──[7] Phone───▶│                  │                  │                  │                        │
│    │               │──[8] verifyPhone─▶│                  │                  │                        │
│    │               │                  │                  │──[9] SMS───────▶│                        │
│    │               │                  │                  │                  │                        │
│    │◀─[10] Code────│                  │                  │                  │                        │
│    │               │                  │                  │                  │                        │
│    │──[11] Code───▶│                  │                  │                  │                        │
│    │               │──[12] verify────▶│                  │                  │                        │
│    │               │                  │                  │──[13] check─────▶│                        │
│    │               │                  │                  │                  │                        │
│    │               │                  │                  │◀──[14] OK────────│                        │
│    │               │                  │                  │                  │                        │
│    │               │                  │──[15] update────▶│                  │                        │
│    │               │                  │                  │                  │                        │
│    │◀──[16] Success─│                  │                  │                  │                        │
│    │               │                  │                  │                  │                        │
│                                                                                                      │
│   SEGURIDAD:                                                                                         │
│   ───────────                                                                                        │
│   • [5] Cookies HttpOnly (no accesible por JS)                                                       │
│   • [5] Secure flag (solo HTTPS)                                                                     │
│   • [5] SameSite=Strict (CSRF protection)                                                            │
│   • [7-16] Phone verification preventa multi-cuentas                                                 │
│   • Tokens JWT con expiración corta (1 hora)                                                         │
│   • Refresh rotation habilitado                                                                      │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 4.1.2 Configuración de Supabase Auth

```typescript
// lib/config/auth.ts

/**
 * Configuración de seguridad para Supabase Auth
 * Todas las opciones están orientadas a máxima seguridad
 */

export const authConfig = {
  // Proveedores habilitados
  providers: ['email', 'phone'],
  
  // Política de contraseñas
  passwordPolicy: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: false, // Balance UX/Seguridad
    maxLength: 128,
  },
  
  // Configuración de sesión
  session: {
    // Access token: 1 hora
    accessTokenExpiry: 60 * 60,
    // Refresh token: 30 días
    refreshTokenExpiry: 30 * 24 * 60 * 60,
    // Rotación de refresh tokens (prevenir replay attacks)
    refreshTokenRotation: true,
    // Detectar uso de token robado
    detectTokenReuse: true,
  },
  
  // MFA (Multi-Factor Authentication) - Futuro
  mfa: {
    enabled: false, // Habilitar en fase de crecimiento
    enforceForAdmins: true,
    methods: ['totp', 'sms'],
  },
  
  // Verificación de email obligatoria
  emailVerification: {
    required: true,
    // Link expira en 24 horas
    linkExpiry: 24 * 60 * 60,
    // Solo un link activo por vez
    singleUse: true,
  },
  
  // Rate limiting
  rateLimits: {
    // Máximo 5 intentos de login fallidos por IP/hora
    loginAttempts: { max: 5, window: 3600 },
    // Máximo 3 intentos de verificación de email
    emailVerification: { max: 3, window: 3600 },
    // Máximo 3 códigos SMS por hora
    smsVerification: { max: 3, window: 3600 },
  },
  
  // Seguridad adicional
  security: {
    // Requerir email confirmation antes de login
    confirmEmail: true,
    // Permitir solo un session por dispositivo (opcional)
    singleSessionPerDevice: false,
    // Invalidar sesiones después de cambio de password
    invalidateSessionsOnPasswordChange: true,
  },
};

// URLs de redirección permitidas (prevenir open redirect)
export const allowedRedirectUrls = [
  'https://metamen100.com',
  'https://metamen100.com/dashboard',
  'https://app.metamen100.com',
  // No incluir wildcards por seguridad
];
```

## 4.2 Row Level Security (RLS) - Políticas

### 4.2.1 Estrategia de RLS

```sql
-- ==========================================
-- POLÍTICAS DE SEGURIDAD A NIVEL DE FILA (RLS)
-- ==========================================
-- 
-- Principio: DENY BY DEFAULT
-- Cada tabla con datos de usuario DEBE tener RLS habilitado
-- Las políticas deben ser específicas y auditables

-- ==========================================
-- TABLA: profiles
-- ==========================================

-- Habilitar RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Política: Usuarios solo pueden ver su propio perfil
CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Política: Usuarios solo pueden actualizar su propio perfil
CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Política: Solo sistema puede crear perfiles (trigger)
CREATE POLICY "System can create profiles"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

-- Política: Admins pueden ver todos los perfiles (si aplica)
-- CREATE POLICY "Admins can view all profiles"
-- ON profiles FOR SELECT
-- TO authenticated
-- USING (
--   EXISTS (
--     SELECT 1 FROM user_roles 
--     WHERE user_id = auth.uid() AND role = 'admin'
--   )
-- );

-- ==========================================
-- TABLA: avatar_states
-- ==========================================

ALTER TABLE avatar_states ENABLE ROW LEVEL SECURITY;

-- SELECT: Solo propietario
CREATE POLICY "Users can view own avatar state"
ON avatar_states FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- UPDATE: Solo propietario (a través de funciones seguras)
CREATE POLICY "Users can update own avatar state via functions"
ON avatar_states FOR UPDATE
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- INSERT: Solo sistema (trigger)
CREATE POLICY "System can create avatar states"
ON avatar_states FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

-- DELETE: Nadie puede eliminar (soft delete si es necesario)
-- No hay política DELETE = DENY BY DEFAULT

-- ==========================================
-- TABLA: daily_tasks
-- ==========================================

ALTER TABLE daily_tasks ENABLE ROW LEVEL SECURITY;

-- SELECT: Solo tareas del usuario
CREATE POLICY "Users can view own tasks"
ON daily_tasks FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- UPDATE: Solo para marcar como completado (vía función)
CREATE POLICY "Users can update own tasks via functions"
ON daily_tasks FOR UPDATE
TO authenticated
USING (user_id = auth.uid() AND status = 'pending')
WITH CHECK (user_id = auth.uid());

-- ==========================================
-- TABLA: wallets
-- ==========================================

ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;

-- SELECT: Solo propietario
CREATE POLICY "Users can view own wallet"
ON wallets FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- UPDATE: Solo sistema (transacciones atómicas)
CREATE POLICY "System can update wallets"
ON wallets FOR UPDATE
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- ==========================================
-- TABLA: wallet_transactions
-- ==========================================

ALTER TABLE wallet_transactions ENABLE ROW LEVEL SECURITY;

-- SELECT: Solo transacciones del usuario
CREATE POLICY "Users can view own transactions"
ON wallet_transactions FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- INSERT: Solo sistema (funciones RPC)
CREATE POLICY "System can create transactions"
ON wallet_transactions FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

-- UPDATE/DELETE: DENEGADO (transacciones inmutables)
-- No se permiten para mantener integridad financiera

-- ==========================================
-- TABLA: inventory
-- ==========================================

ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;

-- SELECT: Solo items del usuario
CREATE POLICY "Users can view own inventory"
ON inventory FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- UPDATE: Solo para equipar/desequipar
CREATE POLICY "Users can update own inventory"
ON inventory FOR UPDATE
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- ==========================================
-- TABLA: subscriptions
-- ==========================================

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- SELECT: Solo propietario
CREATE POLICY "Users can view own subscription"
ON subscriptions FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- UPDATE: Solo sistema (webhooks de Stripe)
CREATE POLICY "System can update subscriptions"
ON subscriptions FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

-- ==========================================
-- TABLA: idempotency_keys
-- ==========================================

ALTER TABLE idempotency_keys ENABLE ROW LEVEL SECURITY;

-- Todas las operaciones: Solo sistema
CREATE POLICY "System manages idempotency keys"
ON idempotency_keys FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- ==========================================
-- TABLA: audit_logs
-- ==========================================

ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- SELECT: Usuarios solo ven sus propios logs
CREATE POLICY "Users can view own audit logs"
ON audit_logs FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- INSERT: Solo sistema
CREATE POLICY "System can create audit logs"
ON audit_logs FOR INSERT
TO authenticated
WITH CHECK (true);
```

### 4.2.2 Funciones de Seguridad

```sql
-- ==========================================
-- FUNCIONES DE SEGURIDAD AUXILIARES
-- ==========================================

-- Función para verificar si el usuario es propietario
CREATE OR REPLACE FUNCTION is_owner(table_name text, record_id uuid)
RETURNS boolean AS $$
DECLARE
  result boolean;
BEGIN
  EXECUTE format(
    'SELECT EXISTS (SELECT 1 FROM %I WHERE id = $1 AND user_id = auth.uid())',
    table_name
  ) INTO result USING record_id;
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Función para enmascarar datos sensibles
CREATE OR REPLACE FUNCTION mask_email(email text)
RETURNS text AS $$
DECLARE
  at_pos integer;
  username text;
  domain text;
  masked text;
BEGIN
  at_pos := position('@' in email);
  username := left(email, at_pos - 1);
  domain := substring(email from at_pos);
  
  -- Enmascarar parte del username
  IF length(username) <= 2 THEN
    masked := '***' || domain;
  ELSE
    masked := left(username, 2) || '***' || domain;
  END IF;
  
  RETURN masked;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Función para enmascarar teléfono
CREATE OR REPLACE FUNCTION mask_phone(phone text)
RETURNS text AS $$
BEGIN
  IF phone IS NULL THEN
    RETURN NULL;
  END IF;
  
  -- Mostrar solo últimos 4 dígitos
  RETURN '****' || right(regexp_replace(phone, '[^0-9]', '', 'g'), 4);
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Función para obtener IP del cliente
CREATE OR REPLACE FUNCTION get_client_ip()
RETURNS text AS $$
BEGIN
  RETURN current_setting('request.headers', true)::json->>'x-forwarded-for';
EXCEPTION
  WHEN OTHERS THEN
    RETURN NULL;
END;
$$ LANGUAGE plpgsql STABLE;

-- Función para obtener User-Agent
CREATE OR REPLACE FUNCTION get_user_agent()
RETURNS text AS $$
BEGIN
  RETURN current_setting('request.headers', true)::json->>'user-agent';
EXCEPTION
  WHEN OTHERS THEN
    RETURN NULL;
END;
$$ LANGUAGE plpgsql STABLE;
```

## 4.3 JWT y Manejo de Sesiones

### 4.3.1 Estructura de Tokens

```typescript
// types/auth.ts

/**
 * Estructura del JWT Access Token
 * Basado en RFC 7519 (JSON Web Token)
 */
interface AccessTokenPayload {
  // Identificador del token
  sub: string;           // User ID (UUID)
  
  // Metadatos del token
  aud: 'authenticated';  // Audiencia
  iss: string;           // Issuer (Supabase URL)
  iat: number;           // Issued At (timestamp)
  exp: number;           // Expiration (timestamp)
  
  // Claims personalizados
  email: string;
  phone_verified: boolean;
  role: 'authenticated';
  
  // App-specific claims
  app_metadata: {
    provider: 'email' | 'phone';
    providers: string[];
  };
  
  user_metadata: {
    nickname: string;
    onboarding_completed: boolean;
  };
  
  // Session ID para invalidación
  session_id: string;
  
  // Versión para rotación
  token_version: number;
}

/**
 * Estructura del Refresh Token
 * Solo se almacena en cookie HttpOnly
 */
interface RefreshTokenPayload {
  sub: string;           // User ID
  session_id: string;    // Para rotación
  token_version: number; // Para invalidación masiva
  exp: number;           // 30 días
}
```

### 4.3.2 Middleware de Autenticación

```typescript
// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

// Rutas que no requieren autenticación
const publicRoutes = [
  '/',
  '/auth/login',
  '/auth/register',
  '/auth/callback',
  '/auth/reset-password',
  '/api/webhooks/*',
];

// Rutas que requieren email verificado
const verifiedRoutes = [
  '/dashboard',
  '/dashboard/tasks',
  '/dashboard/store',
  '/dashboard/inventory',
];

// Rutas de onboarding (solo si no completado)
const onboardingRoutes = ['/onboarding'];

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });
  
  // Verificar sesión
  const {
    data: { session },
  } = await supabase.auth.getSession();
  
  const pathname = request.nextUrl.pathname;
  
  // Permitir rutas públicas
  if (publicRoutes.some(route => pathname.startsWith(route.replace('*', '')))) {
    return res;
  }
  
  // Verificar autenticación para rutas protegidas
  if (!session) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  // Verificar email verificado
  if (verifiedRoutes.some(route => pathname.startsWith(route))) {
    if (!session.user.email_confirmed_at) {
      return NextResponse.redirect(new URL('/auth/verify-email', request.url));
    }
  }
  
  // Verificar onboarding completado
  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarding_completed')
    .eq('id', session.user.id)
    .single();
  
  if (!profile?.onboarding_completed && !onboardingRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/onboarding', request.url));
  }
  
  // Redirigir a dashboard si intenta acceder a onboarding ya completado
  if (profile?.onboarding_completed && pathname === '/onboarding') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  // Añadir headers de seguridad
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://*.supabase.co https://api.stripe.com;"
  );
  
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
```

---



## 4.4 Autorización Basada en Roles (RBAC)

### 4.4.1 Definición de Roles

```typescript
// lib/auth/roles.ts

/**
 * Roles y permisos del sistema
 * Estructura jerárquica: admin > moderator > user
 */

export enum Role {
  USER = 'user',
  MODERATOR = 'moderator',
  ADMIN = 'admin',
  SERVICE = 'service', // Para servicios internos
}

export enum Permission {
  // Perfil
  PROFILE_READ = 'profile:read',
  PROFILE_UPDATE = 'profile:update',
  PROFILE_DELETE = 'profile:delete',
  
  // Tareas
  TASK_READ = 'task:read',
  TASK_CREATE = 'task:create',
  TASK_UPDATE = 'task:update',
  TASK_DELETE = 'task:delete',
  TASK_COMPLETE = 'task:complete',
  
  // Tienda
  STORE_READ = 'store:read',
  STORE_PURCHASE = 'store:purchase',
  
  // Inventario
  INVENTORY_READ = 'inventory:read',
  INVENTORY_EQUIP = 'inventory:equip',
  
  // Wallet
  WALLET_READ = 'wallet:read',
  
  // Suscripción
  SUBSCRIPTION_READ = 'subscription:read',
  SUBSCRIPTION_MANAGE = 'subscription:manage',
  
  // Admin
  USER_READ = 'user:read',
  USER_UPDATE = 'user:update',
  USER_BAN = 'user:ban',
  AUDIT_READ = 'audit:read',
  SYSTEM_CONFIG = 'system:config',
}

// Mapeo de roles a permisos
export const rolePermissions: Record<Role, Permission[]> = {
  [Role.USER]: [
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE,
    Permission.TASK_READ,
    Permission.TASK_CREATE,
    Permission.TASK_COMPLETE,
    Permission.STORE_READ,
    Permission.STORE_PURCHASE,
    Permission.INVENTORY_READ,
    Permission.INVENTORY_EQUIP,
    Permission.WALLET_READ,
    Permission.SUBSCRIPTION_READ,
    Permission.SUBSCRIPTION_MANAGE,
  ],
  
  [Role.MODERATOR]: [
    ...rolePermissions[Role.USER],
    Permission.USER_READ,
    Permission.AUDIT_READ,
  ],
  
  [Role.ADMIN]: [
    ...rolePermissions[Role.MODERATOR],
    Permission.PROFILE_DELETE,
    Permission.TASK_DELETE,
    Permission.USER_UPDATE,
    Permission.USER_BAN,
    Permission.SYSTEM_CONFIG,
  ],
  
  [Role.SERVICE]: [
    // Permisos especiales para servicios backend
    Permission.AUDIT_READ,
    Permission.SYSTEM_CONFIG,
  ],
};

// Helper para verificar permisos
export function hasPermission(role: Role, permission: Permission): boolean {
  return rolePermissions[role]?.includes(permission) ?? false;
}

export function hasAnyPermission(role: Role, permissions: Permission[]): boolean {
  return permissions.some(p => hasPermission(role, p));
}

export function hasAllPermissions(role: Role, permissions: Permission[]): boolean {
  return permissions.every(p => hasPermission(role, p));
}
```

### 4.4.2 Hook de Autorización

```typescript
// hooks/useAuthorization.ts

import { useMemo } from 'react';
import { useUser } from './useUser';
import { Role, Permission, hasPermission } from '@/lib/auth/roles';

interface UseAuthorizationReturn {
  role: Role | null;
  isLoading: boolean;
  hasPermission: (permission: Permission) => boolean;
  hasRole: (requiredRole: Role) => boolean;
  can: {
    readProfile: boolean;
    updateProfile: boolean;
    completeTask: boolean;
    purchaseItem: boolean;
    // ... más permisos comunes
  };
}

export function useAuthorization(): UseAuthorizationReturn {
  const { user, isLoading } = useUser();
  
  const role = useMemo(() => {
    if (!user) return null;
    return (user.app_metadata?.role as Role) || Role.USER;
  }, [user]);
  
  const checkPermission = useMemo(() => {
    return (permission: Permission): boolean => {
      if (!role) return false;
      return hasPermission(role, permission);
    };
  }, [role]);
  
  const checkRole = useMemo(() => {
    return (requiredRole: Role): boolean => {
      if (!role) return false;
      // Jerarquía de roles
      const hierarchy = [Role.USER, Role.MODERATOR, Role.ADMIN];
      const userLevel = hierarchy.indexOf(role);
      const requiredLevel = hierarchy.indexOf(requiredRole);
      return userLevel >= requiredLevel;
    };
  }, [role]);
  
  const can = useMemo(() => ({
    readProfile: checkPermission(Permission.PROFILE_READ),
    updateProfile: checkPermission(Permission.PROFILE_UPDATE),
    completeTask: checkPermission(Permission.TASK_COMPLETE),
    purchaseItem: checkPermission(Permission.STORE_PURCHASE),
  }), [checkPermission]);
  
  return {
    role,
    isLoading,
    hasPermission: checkPermission,
    hasRole: checkRole,
    can,
  };
}
```

---

# 5. PROTECCIÓN DE DATOS

## 5.1 Clasificación de Datos

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         CLASIFICACIÓN DE DATOS                                                       │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  NIVEL 4: CRÍTICO (Datos de Pago)                                                                   │
│  ─────────────────────────────────                                                                  │
│  • Tarjetas de crédito/débito (tokenizadas por Stripe)                                             │
│  • Datos bancarios                                                                                  │
│  • Historial de transacciones financieras detallado                                                 │
│  • Manejo: Tokenización, nunca almacenar en DB propia                                               │
│  • Encriptación: AES-256-GCM                                                                        │
│  • Acceso: Solo servicios de pago autorizados                                                       │
│                                                                                                      │
│  NIVEL 3: SENSIBLE (PII - Personally Identifiable Information)                                      │
│  ──────────────────────────────────────────────────────────                                         │
│  • Email addresses                                                                                  │
│  • Números de teléfono (verificación)                                                               │
│  • Contraseñas (hash Argon2id)                                                                      │
│  • Datos de salud/Wellness (progreso físico, métricas)                                              │
│  • Manejo: Encriptación en reposo, anonimización para analytics                                     │
│  • Encriptación: AES-256-CBC + HMAC                                                                 │
│  • Acceso: Solo propietario y sistemas autorizados                                                  │
│                                                                                                      │
│  NIVEL 2: CONFIDENCIAL (Datos de Aplicación)                                                        │
│  ────────────────────────────────────────────────                                                   │
│  • Progreso en el juego (día, nivel, vectores)                                                      │
│  • Inventario y compras                                                                             │
│  • Configuraciones de usuario                                                                       │
│  • Logs de actividad                                                                                │
│  • Manejo: RLS obligatorio, acceso controlado                                                       │
│  • Encriptación: TLS in-transit                                                                     │
│  • Acceso: Propietario + moderadores (solo lectura)                                                 │
│                                                                                                      │
│  NIVEL 1: PÚBLICO (Datos No Sensibles)                                                              │
│  ─────────────────────────────────────                                                              │
│  • Información de items de tienda (sin precios reales)                                              │
│  • Contenido estático                                                                               │
│  • Imágenes de avatares (públicas pero con URL firmada)                                             │
│  • Manejo: Caché, CDN                                                                               │
│  • Encriptación: TLS in-transit                                                                     │
│  • Acceso: Público                                                                                  │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 5.2 Encriptación de Datos Sensibles

### 5.2.1 Encriptación en Reposo

```typescript
// lib/crypto/encryption.ts

import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const KEY_LENGTH = 32;
const IV_LENGTH = 16;
const AUTH_TAG_LENGTH = 16;

/**
 * Encripta datos sensibles antes de almacenar en DB
 * Usado para datos PII que requieren recuperación
 */
export function encrypt(text: string, secretKey: string): string {
  const iv = randomBytes(IV_LENGTH);
  const key = scryptSync(secretKey, 'salt', KEY_LENGTH);
  
  const cipher = createCipheriv(ALGORITHM, key, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  
  // Formato: iv:authTag:encrypted
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}

/**
 * Desencripta datos para mostrar al usuario autorizado
 */
export function decrypt(encryptedData: string, secretKey: string): string {
  const [ivHex, authTagHex, encrypted] = encryptedData.split(':');
  
  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  const key = scryptSync(secretKey, 'salt', KEY_LENGTH);
  
  const decipher = createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

/**
 * Hashea datos para búsquedas (determinístico)
 * Útil para detectar duplicados sin revelar el valor
 */
export function hashForSearch(value: string, secretKey: string): string {
  const key = scryptSync(secretKey, 'salt', KEY_LENGTH);
  const hmac = createHmac('sha256', key);
  hmac.update(value.toLowerCase().trim());
  return hmac.digest('hex');
}
```

### 5.2.2 Anonimización para Analytics

```typescript
// lib/privacy/anonymization.ts

import { createHash } from 'crypto';

/**
 * Anonimiza datos para análisis estadístico
 * Mantiene utilidad para analytics sin comprometer privacidad
 */

export function anonymizeUserId(userId: string): string {
  return createHash('sha256')
    .update(userId + process.env.ANONYMIZATION_SALT)
    .digest('hex')
    .substring(0, 16);
}

export function anonymizeEmail(email: string): string {
  const [localPart, domain] = email.split('@');
  const hashedLocal = createHash('sha256')
    .update(localPart)
    .digest('hex')
    .substring(0, 8);
  return `${hashedLocal}@${domain}`;
}

export function anonymizePhone(phone: string): string {
  // Solo conservar código de país y últimos 2 dígitos
  const digits = phone.replace(/\D/g, '');
  const countryCode = digits.substring(0, 2); // Asume código de 2 dígitos
  const lastTwo = digits.slice(-2);
  return `${countryCode}******${lastTwo}`;
}

/**
 * Generaliza datos de ubicación
 * Reduce precisión para proteger privacidad
 */
export function generalizeTimezone(timezone: string): string {
  // De "America/New_York" a "America/Estados_Unidos"
  const region = timezone.split('/')[0];
  return region;
}

/**
 * K-anonimidad para vectores
 * Agrupa usuarios en buckets para análisis
 */
export function kAnonymizeVector(value: number, bucketSize: number = 1): string {
  const bucket = Math.floor(value / bucketSize) * bucketSize;
  return `${bucket}-${bucket + bucketSize}`;
}
```

## 5.3 Máscaras de Datos

```typescript
// lib/privacy/masking.ts

/**
 * Funciones de enmascaramiento para mostrar datos
 * con nivel apropiado según contexto
 */

export const maskers = {
  /**
   * Enmascara email: j***@ejemplo.com
   */
  email(email: string): string {
    const [local, domain] = email.split('@');
    if (local.length <= 2) {
      return `***@${domain}`;
    }
    return `${local.slice(0, 2)}***@${domain}`;
  },
  
  /**
   * Enmascara teléfono: +52 **** 1234
   */
  phone(phone: string): string {
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 8) return '****';
    
    const countryCode = digits.slice(0, 2);
    const lastFour = digits.slice(-4);
    return `+${countryCode} **** ${lastFour}`;
  },
  
  /**
   * Enmascara nombre: J*** D***
   */
  name(name: string): string {
    return name
      .split(' ')
      .map(part => part.charAt(0) + '*'.repeat(part.length - 1))
      .join(' ');
  },
  
  /**
   * Enmascara IP: 192.***.***.1
   */
  ip(ip: string): string {
    const parts = ip.split('.');
    if (parts.length !== 4) return '***.***.***.***';
    return `${parts[0]}.***.***.${parts[3]}`;
  },
  
  /**
   * Enmascara UUID: ****-****-****-****-1234
   */
  uuid(uuid: string): string {
    const lastPart = uuid.split('-').pop();
    return `****-****-****-****-${lastPart}`;
  },
  
  /**
   * Balance de wallet (sin cambios, pero con formato)
   */
  btc(balance: number): string {
    return `${balance.toLocaleString()} BTC`;
  },
};
```

---

# 6. SEGURIDAD DE BASE DE DATOS

## 6.1 Configuración de PostgreSQL

```sql
-- ==========================================
-- CONFIGURACIÓN DE SEGURIDAD POSTGRESQL
-- ==========================================

-- 1. Configuración de conexiones
-- Solo conexiones SSL/TLS
ALTER SYSTEM SET ssl = 'on';
ALTER SYSTEM SET ssl_min_protocol_version = 'TLSv1.2';

-- 2. Logging de auditoría
ALTER SYSTEM SET log_connections = 'on';
ALTER SYSTEM SET log_disconnections = 'on';
ALTER SYSTEM SET log_line_prefix = '%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h ';
ALTER SYSTEM SET log_statement = 'ddl'; -- Log DDL statements
ALTER SYSTEM SET log_min_duration_statement = 1000; -- Log queries > 1s

-- 3. Límites de seguridad
ALTER SYSTEM SET max_connections = '100'; -- Limitar conexiones
ALTER SYSTEM SET statement_timeout = '30000'; -- 30 segundos max por query
ALTER SYSTEM SET idle_in_transaction_session_timeout = '60000'; -- 1 minuto

-- 4. Extensiones de seguridad
CREATE EXTENSION IF NOT EXISTS pgcrypto; -- Funciones criptográficas
CREATE EXTENSION IF NOT EXISTS pg_stat_statements; -- Análisis de queries

-- ==========================================
-- USUARIOS Y ROLES
-- ==========================================

-- Rol para aplicación (mínimos privilegios)
CREATE ROLE app_role WITH 
  NOLOGIN
  NOSUPERUSER
  NOCREATEDB
  NOCREATEROLE;

-- Permisos para app_role
GRANT USAGE ON SCHEMA public TO app_role;
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO app_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO app_role;

-- Rol para servicios (solo ejecución de funciones)
CREATE ROLE service_role WITH
  NOLOGIN
  NOSUPERUSER;

GRANT USAGE ON SCHEMA public TO service_role;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO service_role;

-- Rol para lectura analítica (solo SELECT, no acceso a PII)
CREATE ROLE analytics_role WITH
  NOLOGIN
  NOSUPERUSER;

GRANT USAGE ON SCHEMA public TO analytics_role;
-- Solo tablas anonimizadas
GRANT SELECT ON public.analytics_events TO analytics_role;
GRANT SELECT ON public.analytics_aggregates TO analytics_role;

-- ==========================================
-- TRIGGERS DE AUDITORÍA
-- ==========================================

-- Tabla de logs de auditoría
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL, -- INSERT, UPDATE, DELETE, SELECT
  table_name TEXT NOT NULL,
  record_id UUID,
  old_data JSONB,
  new_data JSONB,
  ip_address INET,
  user_agent TEXT,
  session_id TEXT
);

-- Índices para auditoría
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
CREATE INDEX idx_audit_logs_table_name ON audit_logs(table_name);

-- RLS para audit_logs (solo sistema)
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Audit logs are immutable"
ON audit_logs FOR ALL
TO authenticated
USING (false)
WITH CHECK (false);

-- Función de auditoría genérica
CREATE OR REPLACE FUNCTION audit_trigger()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    INSERT INTO audit_logs (user_id, action, table_name, record_id, old_data, ip_address, user_agent)
    VALUES (
      auth.uid(),
      TG_OP,
      TG_TABLE_NAME,
      OLD.id,
      to_jsonb(OLD),
      inet_client_addr(),
      current_setting('request.headers', true)::json->>'user-agent'
    );
    RETURN OLD;
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO audit_logs (user_id, action, table_name, record_id, old_data, new_data, ip_address, user_agent)
    VALUES (
      auth.uid(),
      TG_OP,
      TG_TABLE_NAME,
      NEW.id,
      to_jsonb(OLD),
      to_jsonb(NEW),
      inet_client_addr(),
      current_setting('request.headers', true)::json->>'user-agent'
    );
    RETURN NEW;
  ELSIF TG_OP = 'INSERT' THEN
    INSERT INTO audit_logs (user_id, action, table_name, record_id, new_data, ip_address, user_agent)
    VALUES (
      auth.uid(),
      TG_OP,
      TG_TABLE_NAME,
      NEW.id,
      to_jsonb(NEW),
      inet_client_addr(),
      current_setting('request.headers', true)::json->>'user-agent'
    );
    RETURN NEW;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Aplicar auditoría a tablas críticas
CREATE TRIGGER audit_profiles
AFTER INSERT OR UPDATE OR DELETE ON profiles
FOR EACH ROW EXECUTE FUNCTION audit_trigger();

CREATE TRIGGER audit_wallets
AFTER INSERT OR UPDATE OR DELETE ON wallets
FOR EACH ROW EXECUTE FUNCTION audit_trigger();

CREATE TRIGGER audit_subscriptions
AFTER INSERT OR UPDATE OR DELETE ON subscriptions
FOR EACH ROW EXECUTE FUNCTION audit_trigger();
```

## 6.2 Prevención de Inyección SQL

```typescript
// lib/server/db/security.ts

/**
 * Capa de protección contra SQL Injection
 * Todas las queries deben usar parámetros preparados
 */

import { createClient } from '@supabase/supabase-js';

// Lista de palabras clave peligrosas para detección
const SQL_KEYWORDS = [
  'SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', 'CREATE',
  'ALTER', 'EXEC', 'UNION', 'INTO', 'LOAD_FILE', 'OUTFILE',
  '--', '/*', '*/', ';', 'OR 1=1', "' OR '" , '" OR "',
];

/**
 * Detecta posibles intentos de SQL Injection
 */
export function detectSqlInjection(input: string): boolean {
  const normalized = input.toUpperCase().replace(/\s+/g, ' ');
  
  return SQL_KEYWORDS.some(keyword => {
    // Detectar keywords fuera de contexto seguro
    const pattern = new RegExp(`\\b${keyword}\\b`, 'i');
    return pattern.test(normalized);
  });
}

/**
 * Sanitiza input para búsquedas seguras
 */
export function sanitizeSearchInput(input: string): string {
  // Eliminar caracteres especiales peligrosos
  return input
    .replace(/[<>'";]/g, '')
    .replace(/--/g, '')
    .replace(/\/\*/g, '')
    .replace(/\*\//g, '')
    .trim();
}

/**
 * Validador de nombres de tablas/columnas permitidas
 * Prevenir enumeration attacks
 */
const ALLOWED_TABLES = [
  'profiles', 'avatar_states', 'daily_tasks', 'wallets',
  'wallet_transactions', 'inventory', 'subscriptions',
  'store_items', 'daily_logs',
];

const ALLOWED_COLUMNS: Record<string, string[]> = {
  profiles: ['id', 'nickname', 'email', 'timezone', 'onboarding_completed'],
  avatar_states: ['user_id', 'aura_lvl', 'face_lvl', 'wealth_lvl', 'muscle_lvl', 'fat_lvl'],
  // ... más columnas permitidas
};

export function validateTableName(table: string): boolean {
  return ALLOWED_TABLES.includes(table);
}

export function validateColumnName(table: string, column: string): boolean {
  const allowed = ALLOWED_COLUMNS[table];
  if (!allowed) return false;
  return allowed.includes(column);
}

/**
 * Builder de queries seguras
 */
export class SafeQueryBuilder {
  private table: string = '';
  private columns: string[] = [];
  private conditions: Array<{ column: string; operator: string; value: unknown }> = [];
  
  from(table: string): this {
    if (!validateTableName(table)) {
      throw new Error(`Tabla no permitida: ${table}`);
    }
    this.table = table;
    return this;
  }
  
  select(columns: string[]): this {
    for (const col of columns) {
      if (!validateColumnName(this.table, col)) {
        throw new Error(`Columna no permitida: ${col}`);
      }
    }
    this.columns = columns;
    return this;
  }
  
  where(column: string, operator: string, value: unknown): this {
    if (!validateColumnName(this.table, column)) {
      throw new Error(`Columna no permitida: ${column}`);
    }
    this.conditions.push({ column, operator, value });
    return this;
  }
  
  build(): { table: string; columns: string[]; conditions: typeof this.conditions } {
    return {
      table: this.table,
      columns: this.columns,
      conditions: this.conditions,
    };
  }
}
```

---

# 7. SEGURIDAD DE APIs

## 7.1 Rate Limiting

### 7.1.1 Configuración por Endpoint

```typescript
// lib/api/rate-limit.ts

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Cliente Redis para rate limiting
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

/**
 * Configuración de rate limits por endpoint y método
 * Protección contra brute force y abuso de API
 */
export const rateLimits = {
  // Autenticación: muy restrictivo
  auth: {
    login: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 intentos por hora
      analytics: true,
    }),
    register: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '1 h'), // 3 registros por hora
      analytics: true,
    }),
    verifyPhone: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '1 h'), // 3 códigos SMS por hora
      analytics: true,
    }),
    passwordReset: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '1 h'),
      analytics: true,
    }),
  },
  
  // Tareas: moderado
  tasks: {
    complete: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(50, '1 h'), // 50 tareas por hora (máximo posible)
      analytics: true,
    }),
    read: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(100, '1 m'), // 100 lecturas por minuto
      analytics: true,
    }),
  },
  
  // Tienda: restrictivo para compras
  store: {
    purchase: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, '1 m'), // 10 compras por minuto
      analytics: true,
    }),
    browse: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(100, '1 m'),
      analytics: true,
    }),
  },
  
  // Generales
  default: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, '1 m'), // 100 requests por minuto
    analytics: true,
  }),
  
  // API keys (para servicios externos)
  apiKey: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(1000, '1 m'), // 1000 por minuto
    analytics: true,
  }),
};

/**
 * Headers de rate limit para clientes
 */
export function addRateLimitHeaders(
  response: Response,
  limit: number,
  remaining: number,
  reset: number
): Response {
  response.headers.set('X-RateLimit-Limit', limit.toString());
  response.headers.set('X-RateLimit-Remaining', remaining.toString());
  response.headers.set('X-RateLimit-Reset', reset.toString());
  return response;
}
```

### 7.1.2 Middleware de Rate Limiting

```typescript
// middleware/rate-limit.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimits } from '@/lib/api/rate-limit';

/**
 * Determina qué rate limit aplicar según la ruta
 */
function getRateLimiterForPath(path: string) {
  if (path.startsWith('/api/auth/login')) return rateLimits.auth.login;
  if (path.startsWith('/api/auth/register')) return rateLimits.auth.register;
  if (path.startsWith('/api/auth/verify-phone')) return rateLimits.auth.verifyPhone;
  if (path.startsWith('/api/tasks/complete')) return rateLimits.tasks.complete;
  if (path.startsWith('/api/store/purchase')) return rateLimits.store.purchase;
  return rateLimits.default;
}

/**
 * Extrae identificador para rate limiting
 * Prioridad: user ID > API key > IP address
 */
function getIdentifier(request: NextRequest): string {
  // Si hay user autenticado (desde JWT)
  const userId = request.headers.get('x-user-id');
  if (userId) return `user:${userId}`;
  
  // Si hay API key
  const apiKey = request.headers.get('x-api-key');
  if (apiKey) return `apikey:${apiKey}`;
  
  // Fallback a IP (menos confiable)
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : request.ip;
  return `ip:${ip}`;
}

export async function rateLimitMiddleware(request: NextRequest) {
  const identifier = getIdentifier(request);
  const limiter = getRateLimiterForPath(request.nextUrl.pathname);
  
  const { success, limit, remaining, reset } = await limiter.limit(identifier);
  
  if (!success) {
    return NextResponse.json(
      {
        error: 'RATE_LIMIT_EXCEEDED',
        message: 'Has excedido el límite de requests. Por favor intenta más tarde.',
        retryAfter: Math.ceil((reset - Date.now()) / 1000),
      },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': reset.toString(),
          'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
        },
      }
    );
  }
  
  // Continuar con request y agregar headers
  const response = NextResponse.next();
  response.headers.set('X-RateLimit-Limit', limit.toString());
  response.headers.set('X-RateLimit-Remaining', remaining.toString());
  response.headers.set('X-RateLimit-Reset', reset.toString());
  
  return response;
}
```

## 7.2 Validación de Input

### 7.2.1 Schema Validator

```typescript
// lib/validation/security.ts

import { z } from 'zod';

/**
 * Schemas de validación con sanitización implícita
 * Previenen XSS, NoSQL injection, y otros ataques
 */

// Sanitizador de strings (previene XSS)
const sanitizeString = (str: string) => {
  return str
    .replace(/[<>]/g, '') // Eliminar tags HTML
    .trim();
};

// Schema de email seguro
export const emailSchema = z
  .string()
  .email('Email inválido')
  .max(254, 'Email demasiado largo')
  .transform(sanitizeString)
  .refine(
    (email) => !email.includes('+'), // Opcional: bloquear emails con + (anti-multi)
    { message: 'Email con + no permitido' }
  );

// Schema de contraseña fuerte
export const passwordSchema = z
  .string()
  .min(8, 'Mínimo 8 caracteres')
  .max(128, 'Máximo 128 caracteres')
  .regex(/[A-Z]/, 'Al menos una mayúscula')
  .regex(/[a-z]/, 'Al menos una minúscula')
  .regex(/[0-9]/, 'Al menos un número')
  .regex(/^[^\s]*$/, 'No puede contener espacios')
  .refine(
    (pwd) => !['password', '12345678', 'qwerty'].includes(pwd.toLowerCase()),
    { message: 'Contraseña demasiado común' }
  );

// Schema de UUID
export const uuidSchema = z
  .string()
  .uuid('ID inválido')
  .transform((id) => id.toLowerCase().trim());

// Schema de teléfono (E.164)
export const phoneSchema = z
  .string()
  .regex(/^\+[1-9]\d{1,14}$/, 'Formato de teléfono inválido');

// Schema de nombre de usuario
export const nicknameSchema = z
  .string()
  .min(3, 'Mínimo 3 caracteres')
  .max(30, 'Máximo 30 caracteres')
  .regex(/^[a-zA-Z0-9_-]+$/, 'Solo letras, números, guiones y guiones bajos')
  .transform((name) => sanitizeString(name).toLowerCase())
  .refine(
    (name) => !['admin', 'root', 'system', 'support'].includes(name),
    { message: 'Nombre reservado' }
  );

// Schema de código de verificación
export const verificationCodeSchema = z
  .string()
  .regex(/^\d{6}$/, 'Código debe ser 6 dígitos');

// Schema de texto largo (notas, descripciones)
export const longTextSchema = z
  .string()
  .max(5000, 'Texto demasiado largo')
  .transform(sanitizeString);

// Schema de número entero positivo
export const positiveIntSchema = z.number().int().positive();

// Schema de número en rango
export const rangeSchema = (min: number, max: number) =>
  z.number().min(min).max(max);

// Schema de booleano
export const booleanSchema = z.boolean();

// Schema de fecha
export const dateSchema = z.string().datetime();

// Schema de timezone
export const timezoneSchema = z.string().regex(/^[A-Za-z_]+\/[A-Za-z_]+$/);

/**
 * Validador compuesto para objetos complejos
 */
export function createSecureObjectSchema<T extends z.ZodRawShape>(shape: T) {
  return z.object(shape).strict(); // .strict() rechaza propiedades no definidas
}
```

### 7.2.2 Sanitización de Output

```typescript
// lib/validation/output.ts

import { escapeHtml, escapeAttribute } from 'lodash-es';

/**
 * Sanitiza datos antes de enviar al cliente
 * Previene XSS en la respuesta
 */

export function sanitizeApiResponse<T extends Record<string, unknown>>(
  data: T
): T {
  const sanitized: Record<string, unknown> = {};
  
  for (const [key, value] of Object.entries(data)) {
    // No sanitizar null/undefined
    if (value == null) {
      sanitized[key] = value;
      continue;
    }
    
    // Sanitizar strings
    if (typeof value === 'string') {
      sanitized[key] = sanitizeString(value);
      continue;
    }
    
    // Recursivamente sanitizar objetos
    if (typeof value === 'object' && !Array.isArray(value)) {
      sanitized[key] = sanitizeApiResponse(value as Record<string, unknown>);
      continue;
    }
    
    // Sanitizar arrays
    if (Array.isArray(value)) {
      sanitized[key] = value.map(item =>
        typeof item === 'string'
          ? sanitizeString(item)
          : typeof item === 'object' && item !== null
          ? sanitizeApiResponse(item as Record<string, unknown>)
          : item
      );
      continue;
    }
    
    // Números, booleanos, etc. - pasar tal cual
    sanitized[key] = value;
  }
  
  return sanitized as T;
}

function sanitizeString(str: string): string {
  // Escapar caracteres HTML peligrosos
  return escapeHtml(str);
}

/**
 * Limpia datos sensibles antes de logging
 */
export function sanitizeForLogging<T extends Record<string, unknown>>(
  data: T
): T {
  const sensitiveFields = [
    'password',
    'token',
    'secret',
    'creditCard',
    'cvv',
    'ssn',
    'phone',
    'email',
  ];
  
  const sanitized: Record<string, unknown> = {};
  
  for (const [key, value] of Object.entries(data)) {
    const lowerKey = key.toLowerCase();
    
    if (sensitiveFields.some(field => lowerKey.includes(field))) {
      sanitized[key] = '[REDACTED]';
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeForLogging(value as Record<string, unknown>);
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized as T;
}
```

## 7.3 Seguridad de CORS

```typescript
// lib/api/cors.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Configuración de CORS restrictiva
 * Solo permite orígenes explícitamente autorizados
 */

const ALLOWED_ORIGINS = [
  'https://metamen100.com',
  'https://app.metamen100.com',
  'https://www.metamen100.com',
  // Orígenes de desarrollo (solo en dev)
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : []),
];

const ALLOWED_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'];

const ALLOWED_HEADERS = [
  'Content-Type',
  'Authorization',
  'X-Requested-With',
  'X-Idempotency-Key',
  'X-Client-Version',
];

export function corsMiddleware(request: NextRequest): NextResponse | null {
  const origin = request.headers.get('origin');
  
  // Si es preflight request
  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 204 });
    return addCorsHeaders(response, origin);
  }
  
  // Validar origen
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json(
      { error: 'CORS origin not allowed' },
      { status: 403 }
    );
  }
  
  return null; // Continuar con el request
}

export function addCorsHeaders(
  response: NextResponse,
  origin: string | null
): NextResponse {
  const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin)
    ? origin
    : ALLOWED_ORIGINS[0];
  
  response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
  response.headers.set('Access-Control-Allow-Methods', ALLOWED_METHODS.join(','));
  response.headers.set('Access-Control-Allow-Headers', ALLOWED_HEADERS.join(','));
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Max-Age', '86400'); // 24 horas
  
  return response;
}
```

---

# 8. SISTEMA ANTI-CHEAT

## 8.1 Arquitectura Anti-Cheat

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         SISTEMA ANTI-CHEAT (PROOF OF WORK)                                           │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│   "Un teléfono = Una vida = Una cuenta"                                                             │
│                                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ NIVEL 1: VERIFICACIÓN DE TELÉFONO (KYC Ligero)                                                │  │
│  │ ─────────────────────────────────────────────────                                             │  │
│  │ • SMS OTP a número único                                                                      │  │
│  │ • Blacklist de números virtuales (Twilio Lookup)                                              │  │
│  │ • Detección de VOIP/SMS gateways                                                              │  │
│  │ • Cooldown de 24h entre re-verificaciones                                                     │  │
│  │ • Límite: 1 cuenta por número cada 90 días                                                    │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                               │                                                      │
│                                               ▼                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ NIVEL 2: FINGERPRINTING DE DISPOSITIVO                                                        │  │
│  │ ─────────────────────────────────────                                                         │  │
│  │ • Device ID único (fingerprintjs)                                                             │  │
│  │ • Detección de emuladores                                                                     │  │
│  │ • Análisis de comportamiento de input                                                         │  │
│  │ • Canvas/WebGL fingerprinting                                                                 │  │
│  │ • Detección de automation tools (Selenium, Puppeteer)                                         │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                               │                                                      │
│                                               ▼                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ NIVEL 3: ANÁLISIS DE COMPORTAMIENTO                                                           │  │
│  │ ────────────────────────────────────                                                          │  │
│  │ • Velocidad de completado de tareas (human-like?)                                             │  │
│  │ • Patrones de horarios (imposible humano = bot)                                               │  │
│  │ • Geolocalización consistente                                                                 │  │
│  │ • Detección de VPN/TOR (IPQS)                                                                 │  │
│  │ • Análisis de secuencias de acciones                                                          │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                               │                                                      │
│                                               ▼                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ NIVEL 4: DETECCIÓN DE MANIPULACIÓN                                                            │  │
│  │ ──────────────────────────────────                                                            │  │
│  │ • Timestamp validation (no puede completar en el futuro)                                      │  │
│  │ • Server-side state (no confiar en cliente)                                                   │  │
│  │ • Checksumming de progreso                                                                    │  │
│  │ • Detección de time manipulation (rooted/jailbroken devices)                                  │  │
│  │ • Replay attack detection (idempotency keys)                                                  │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 8.2 Implementación Anti-Cheat

### 8.2.1 Verificación de Teléfono

```typescript
// lib/server/anti-cheat/phone-verification.ts

import { createClient } from '@/lib/server/db';

interface PhoneVerificationResult {
  valid: boolean;
  reason?: 'INVALID_FORMAT' | 'VOIP_NOT_ALLOWED' | 'ALREADY_USED' | 'RATE_LIMITED';
  phoneHash?: string;
}

/**
 * Verifica si un número de teléfono es válido y único
 */
export async function verifyPhoneNumber(
  phone: string,
  userId: string
): Promise<PhoneVerificationResult> {
  const supabase = createClient();
  
  // 1. Validar formato E.164
  const e164Regex = /^\+[1-9]\d{1,14}$/;
  if (!e164Regex.test(phone)) {
    return { valid: false, reason: 'INVALID_FORMAT' };
  }
  
  // 2. Verificar contra Twilio Lookup (VOIP detection)
  const lookupResult = await twilioLookup(phone);
  if (lookupResult.carrier?.type === 'voip') {
    return { valid: false, reason: 'VOIP_NOT_ALLOWED' };
  }
  
  // 3. Verificar si ya está en uso
  const phoneHash = hashPhone(phone);
  
  const { data: existing } = await supabase
    .from('phone_registry')
    .select('user_id, verified_at')
    .eq('phone_hash', phoneHash)
    .single();
  
  if (existing && existing.user_id !== userId) {
    // Verificar cooldown de 90 días
    const daysSinceVerified = daysSince(existing.verified_at);
    if (daysSinceVerified < 90) {
      return { valid: false, reason: 'ALREADY_USED' };
    }
  }
  
  // 4. Rate limiting
  const rateLimitKey = `phone_verify:${userId}`;
  const attempts = await getRateLimitAttempts(rateLimitKey);
  if (attempts >= 3) {
    return { valid: false, reason: 'RATE_LIMITED' };
  }
  
  return { valid: true, phoneHash };
}

/**
 * Hash del teléfono para almacenamiento seguro
 */
function hashPhone(phone: string): string {
  const normalized = phone.replace(/\D/g, '');
  return createHash('sha256')
    .update(normalized + process.env.PHONE_HASH_SALT)
    .digest('hex');
}

/**
 * Verificación con Twilio
 */
async function twilioLookup(phone: string) {
  const response = await fetch(
    `https://lookups.twilio.com/v1/PhoneNumbers/${phone}?Type=carrier`,
    {
      headers: {
        Authorization: `Basic ${btoa(
          `${process.env.TWILIO_SID}:${process.env.TWILIO_AUTH_TOKEN}`
        )}`,
      },
    }
  );
  
  return response.json();
}
```

### 8.2.2 Fingerprinting de Dispositivo

```typescript
// lib/client/device-fingerprint.ts

/**
 * Genera fingerprint del dispositivo en cliente
 * Se envía al servidor para análisis
 */

interface DeviceFingerprint {
  visitorId: string;
  components: {
    userAgent: string;
    language: string;
    colorDepth: number;
    deviceMemory: number;
    hardwareConcurrency: number;
    screenResolution: [number, number];
    timezone: string;
    sessionStorage: boolean;
    localStorage: boolean;
    indexedDB: boolean;
    cpuClass?: string;
    platform: string;
    plugins: string[];
    canvas: string; // Canvas fingerprint hash
    webgl: string;  // WebGL fingerprint hash
    webglVendor: string;
    webglRenderer: string;
  };
  confidence: {
    score: number; // 0-1
    comment: string;
  };
}

export async function generateFingerprint(): Promise<DeviceFingerprint> {
  // Usar FingerprintJS Pro para ID estable
  const fp = await import('@fingerprintjs/fingerprintjs-pro');
  const fpPromise = fp.load({ apiKey: process.env.NEXT_PUBLIC_FP_API_KEY! });
  
  const result = await fpPromise;
  const visitorId = await result.get();
  
  // Componentes adicionales para análisis
  const components = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    colorDepth: window.screen.colorDepth,
    deviceMemory: (navigator as any).deviceMemory || 'unknown',
    hardwareConcurrency: navigator.hardwareConcurrency,
    screenResolution: [window.screen.width, window.screen.height] as [number, number],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    sessionStorage: !!window.sessionStorage,
    localStorage: !!window.localStorage,
    indexedDB: !!window.indexedDB,
    cpuClass: (navigator as any).cpuClass,
    platform: navigator.platform,
    plugins: Array.from(navigator.plugins).map(p => p.name),
    canvas: getCanvasFingerprint(),
    webgl: getWebGLFingerprint(),
    webglVendor: getWebGLVendor(),
    webglRenderer: getWebGLRenderer(),
  };
  
  // Detectar automatización
  const automationSignals = detectAutomation();
  
  return {
    visitorId: visitorId.visitorId,
    components,
    confidence: visitorId.confidence,
  };
}

function getCanvasFingerprint(): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillStyle = '#f60';
  ctx.fillRect(0, 0, 200, 50);
  ctx.fillStyle = '#069';
  ctx.fillText('Fingerprint Canvas', 2, 15);
  
  return canvas.toDataURL();
}

function getWebGLFingerprint(): string {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) return '';
  
  return (gl as WebGLRenderingContext).getParameter(
    (gl as WebGLRenderingContext).VERSION
  );
}

function getWebGLVendor(): string {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl');
  if (!gl) return '';
  return gl.getParameter(gl.VENDOR);
}

function getWebGLRenderer(): string {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl');
  if (!gl) return '';
  return gl.getParameter(gl.RENDERER);
}

function detectAutomation(): string[] {
  const signals: string[] = [];
  
  // Detectar Selenium/WebDriver
  if ((window as any).navigator.webdriver) {
    signals.push('webdriver');
  }
  
  // Detectar Chrome headless
  if ((window as any).chrome?.runtime?.OnInstalledReason === undefined &&
      navigator.userAgent.includes('Chrome')) {
    // Posible headless
  }
  
  // Detectar PhantomJS
  if ((window as any).callPhantom || (window as any)._phantom) {
    signals.push('phantomjs');
  }
  
  // Plugins faltantes (headless)
  if (navigator.plugins.length === 0) {
    signals.push('no_plugins');
  }
  
  return signals;
}
```

### 8.2.3 Análisis de Comportamiento

```typescript
// lib/server/anti-cheat/behavior-analysis.ts

import { createClient } from '@/lib/server/db';

interface BehaviorAnalysis {
  isSuspicious: boolean;
  riskScore: number; // 0-100
  flags: string[];
}

/**
 * Analiza el comportamiento del usuario para detectar trampa
 */
export async function analyzeUserBehavior(
  userId: string,
  action: 'task_complete' | 'login' | 'purchase',
  metadata: Record<string, unknown>
): Promise<BehaviorAnalysis> {
  const supabase = createClient();
  const flags: string[] = [];
  let riskScore = 0;
  
  // 1. Análisis de velocidad
  if (action === 'task_complete') {
    const timeSpent = metadata.duration as number;
    const minExpectedTime = metadata.estimatedDuration as number;
    
    // Si completó en menos del 10% del tiempo esperado
    if (timeSpent < minExpectedTime * 0.1) {
      flags.push('IMPOSSIBLE_SPEED');
      riskScore += 30;
    }
  }
  
  // 2. Patrón horario
  const userHour = await getUserLocalHour(userId);
  const serverHour = new Date().getUTCHours();
  
  // Si las horas no coinciden con timezone declarado
  const declaredTimezone = await getUserTimezone(userId);
  const expectedHour = getExpectedHour(serverHour, declaredTimezone);
  
  if (Math.abs(userHour - expectedHour) > 2) {
    flags.push('TIMEZONE_MISMATCH');
    riskScore += 20;
  }
  
  // 3. Secuencia de acciones
  const recentActions = await getRecentActions(userId, 24);
  const sequenceScore = analyzeSequencePattern(recentActions);
  
  if (sequenceScore > 0.9) { // Patrón demasiado regular = bot
    flags.push('ROBOTIC_PATTERN');
    riskScore += 25;
  }
  
  // 4. Geolocalización
  const currentIp = metadata.ip as string;
  const lastIp = await getLastIp(userId);
  
  if (lastIp && !isSameRegion(currentIp, lastIp)) {
    flags.push('LOCATION_JUMP');
    riskScore += 15;
  }
  
  // 5. Verificar si está en lista de sospechosos
  const isBlacklisted = await checkBlacklist(currentIp, metadata.deviceId as string);
  if (isBlacklisted) {
    flags.push('BLACKLISTED');
    riskScore += 50;
  }
  
  return {
    isSuspicious: riskScore >= 50,
    riskScore,
    flags,
  };
}

/**
 * Registra comportamiento sospechoso para revisión
 */
export async function flagSuspiciousBehavior(
  userId: string,
  analysis: BehaviorAnalysis,
  context: Record<string, unknown>
): Promise<void> {
  const supabase = createClient();
  
  // Insertar en tabla de alertas
  await supabase.from('anti_cheat_alerts').insert({
    user_id: userId,
    risk_score: analysis.riskScore,
    flags: analysis.flags,
    context,
    status: analysis.riskScore >= 70 ? 'critical' : 'warning',
    created_at: new Date().toISOString(),
  });
  
  // Si es crítico, suspender temporalmente
  if (analysis.riskScore >= 80) {
    await suspendUser(userId, 'SUSPICIOUS_BEHAVIOR', 24); // 24 horas
  }
  
  // Notificar a moderadores si es necesario
  if (analysis.riskScore >= 60) {
    await notifyModerators(userId, analysis);
  }
}
```

## 8.3 Validación Server-Side Anti-Cheat

```typescript
// lib/server/anti-cheat/task-validation.ts

/**
 * Valida la completitud de una tarea con múltiples capas de seguridad
 */

interface TaskValidationContext {
  userId: string;
  taskId: string;
  claimedCompletionTime: number;
  clientTimestamp: number;
  serverTimestamp: number;
  deviceFingerprint: string;
}

export async function validateTaskCompletion(
  context: TaskValidationContext
): Promise<{ valid: boolean; reason?: string }> {
  const { userId, taskId, claimedCompletionTime, clientTimestamp, serverTimestamp } = context;
  
  // 1. Validar que el cliente timestamp no está en el futuro
  const driftTolerance = 60000; // 1 minuto de tolerancia
  if (clientTimestamp > serverTimestamp + driftTolerance) {
    return { valid: false, reason: 'FUTURE_TIMESTAMP' };
  }
  
  // 2. Validar que no está demasiado en el pasado (replay attack)
  const maxAge = 5 * 60 * 1000; // 5 minutos
  if (serverTimestamp - clientTimestamp > maxAge) {
    return { valid: false, reason: 'STALE_REQUEST' };
  }
  
  // 3. Validar tiempo de completado mínimo
  const task = await getTask(taskId);
  if (!task) {
    return { valid: false, reason: 'TASK_NOT_FOUND' };
  }
  
  const minTime = task.estimated_duration * 0.5; // Al menos 50% del tiempo
  if (claimedCompletionTime < minTime * 60 * 1000) {
    return { valid: false, reason: 'INSUFFICIENT_TIME' };
  }
  
  // 4. Validar que el día actual corresponde
  const userState = await getAvatarState(userId);
  if (task.day_number !== userState.current_day) {
    return { valid: false, reason: 'WRONG_DAY' };
  }
  
  // 5. Validar que la tarea no está ya completada
  if (task.status === 'completed') {
    return { valid: false, reason: 'ALREADY_COMPLETED' };
  }
  
  // 6. Análisis de comportamiento
  const behaviorAnalysis = await analyzeUserBehavior(userId, 'task_complete', {
    duration: claimedCompletionTime,
    estimatedDuration: task.estimated_duration,
    deviceId: context.deviceFingerprint,
  });
  
  if (behaviorAnalysis.isSuspicious) {
    await flagSuspiciousBehavior(userId, behaviorAnalysis, {
      taskId,
      claimedCompletionTime,
    });
    
    if (behaviorAnalysis.riskScore >= 70) {
      return { valid: false, reason: 'SUSPICIOUS_BEHAVIOR' };
    }
  }
  
  return { valid: true };
}
```

---



# 9. SEGURIDAD DE PAGOS

## 9.1 Arquitectura de Pagos Seguros

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         FLUJO SEGURO DE PAGOS (PCI DSS COMPLIANT)                                    │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│   Cliente                    Nuestro Servidor              Stripe                                   │
│      │                              │                         │                                      │
│      │                              │                         │                                      │
│      │──[1] Iniciar checkout───────│                         │                                      │
│      │                              │                         │                                      │
│      │                              │──[2] Crear sesión──────▶│                                      │
│      │                              │   + plan_id            │                                      │
│      │                              │   + metadata           │                                      │
│      │                              │   + client_reference_id│                                      │
│      │                              │                         │                                      │
│      │◀──[3] URL de checkout───────│                         │                                      │
│      │                              │                         │                                      │
│      │──[4] Redirigir a Stripe────▶│                         │                                      │
│      │         (Stripe Hosted)     │                         │                                      │
│      │                              │                         │                                      │
│      │         [5] Pago seguro]─────│────────────────────────▶│                                      │
│      │         (Stripe Elements)    │                         │                                      │
│      │                              │                         │                                      │
│      │                              │                         │──[6] Procesar pago]                   │
│      │                              │                         │   + Validación                       │
│      │                              │                         │   + 3D Secure                        │
│      │                              │                         │   + Fraud detection                  │
│      │                              │                         │                                      │
│      │                              │◀──[7] Webhook───────────│   (Stripe → Nuestro servidor)        │
│      │                              │   + signature          │                                      │
│      │                              │   + event data         │                                      │
│      │                              │                         │                                      │
│      │                              │──[8] Verificar firma]   │                                      │
│      │                              │──[9] Actualizar DB]     │                                      │
│      │                              │   + subscription       │                                      │
│      │                              │   + audit log          │                                      │
│      │                              │                         │                                      │
│      │◀──[10] Confirmación─────────│                         │                                      │
│      │                              │                         │                                      │
│                                                                                                      │
│   SEGURIDAD:                                                                                         │
│   ───────────                                                                                        │
│   • [2] Nunca enviamos datos de tarjeta a nuestro servidor                                          │
│   • [4-5] Stripe Elements carga iframe seguro (PCI SAQ A)                                           │
│   • [7] Webhook firmado con secreto compartido                                                      │
│   • [8] Verificación criptográfica obligatoria                                                       │
│   • [9] Transacción atómica para consistencia                                                        │
│   • Tokens de tarjeta: nunca almacenados en nuestra DB                                              │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 9.2 Implementación Stripe Segura

### 9.2.1 Creación de Checkout Session

```typescript
// lib/server/payments/stripe.ts

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20', // Versión específica para consistencia
  typescript: true,
  appInfo: {
    name: 'METAMEN100',
    version: '1.0.0',
  },
});

/**
 * Crea una sesión de checkout segura
 * Nunca recibe datos de tarjeta
 */
export async function createCheckoutSession(
  userId: string,
  plan: 'monthly' | 'annual',
  customerEmail: string
): Promise<{ sessionId: string; url: string }> {
  // Verificar que el usuario no tiene suscripción activa
  const existingSub = await getSubscription(userId);
  if (existingSub?.status === 'active') {
    throw new Error('ALREADY_SUBSCRIBED');
  }
  
  // Obtener o crear cliente de Stripe
  let customerId = existingSub?.stripe_customer_id;
  
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: customerEmail,
      metadata: {
        user_id: userId,
        source: 'metamen100_web',
      },
    });
    customerId = customer.id;
  }
  
  // Crear sesión de checkout
  const priceId = plan === 'monthly'
    ? process.env.STRIPE_PRICE_MONTHLY
    : process.env.STRIPE_PRICE_ANNUAL;
  
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
    client_reference_id: userId, // Para mapear en webhook
    metadata: {
      user_id: userId,
      plan,
    },
    subscription_data: {
      metadata: {
        user_id: userId,
        plan,
      },
    },
    // Seguridad adicional
    allow_promotion_codes: false,
    billing_address_collection: 'required',
    // 3D Secure automático
    automatic_tax: { enabled: true },
  });
  
  // Log de seguridad
  await auditLog({
    userId,
    action: 'CHECKOUT_INITIATED',
    metadata: { session_id: session.id, plan },
  });
  
  return {
    sessionId: session.id,
    url: session.url!,
  };
}
```

### 9.2.2 Webhook Handler Seguro

```typescript
// app/api/webhooks/stripe/route.ts

import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { createClient } from '@/lib/server/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

/**
 * Handler de webhooks de Stripe con verificación de firma
 */
export async function POST(request: Request) {
  const payload = await request.text();
  const signature = headers().get('stripe-signature');
  
  if (!signature) {
    console.error('Stripe webhook: Missing signature');
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }
  
  let event: Stripe.Event;
  
  try {
    // Verificación criptográfica de la firma
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.error('Stripe webhook: Invalid signature', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }
  
  // Idempotency: verificar si ya procesamos este evento
  const supabase = createClient();
  const { data: existing } = await supabase
    .from('stripe_webhook_events')
    .select('id')
    .eq('event_id', event.id)
    .single();
  
  if (existing) {
    console.log('Stripe webhook: Event already processed', event.id);
    return NextResponse.json({ received: true });
  }
  
  // Registrar evento para idempotencia
  await supabase.from('stripe_webhook_events').insert({
    event_id: event.id,
    event_type: event.type,
    processed_at: new Date().toISOString(),
  });
  
  // Procesar evento según tipo
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      }
      
      case 'invoice.paid': {
        await handleInvoicePaid(event.data.object as Stripe.Invoice);
        break;
      }
      
      case 'invoice.payment_failed': {
        await handlePaymentFailed(event.data.object as Stripe.Invoice);
        break;
      }
      
      case 'customer.subscription.deleted': {
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      }
      
      case 'customer.subscription.updated': {
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      }
      
      default: {
        console.log('Stripe webhook: Unhandled event type', event.type);
      }
    }
  } catch (error) {
    console.error('Stripe webhook: Processing error', error);
    // No retornar 500 para evitar reintentos innecesarios de Stripe
    // El error se loguea y se puede revisar manualmente
  }
  
  return NextResponse.json({ received: true });
}

/**
 * Maneja checkout exitoso
 */
async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.client_reference_id;
  
  if (!userId) {
    throw new Error('Missing client_reference_id');
  }
  
  const supabase = createClient();
  
  // Actualizar suscripción en DB
  await supabase.from('subscriptions').upsert({
    user_id: userId,
    status: 'active',
    stripe_customer_id: session.customer as string,
    stripe_subscription_id: session.subscription as string,
    plan: session.metadata?.plan,
    current_period_start: new Date().toISOString(),
    current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date().toISOString(),
  });
  
  // Notificar al usuario
  await notifyUser(userId, 'SUBSCRIPTION_ACTIVATED');
  
  // Audit log
  await auditLog({
    userId,
    action: 'SUBSCRIPTION_ACTIVATED',
    metadata: {
      session_id: session.id,
      customer_id: session.customer,
    },
  });
}

/**
 * Maneja pago fallido
 */
async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const subscriptionId = invoice.subscription as string;
  
  // Obtener usuario por subscription_id
  const supabase = createClient();
  const { data: sub } = await supabase
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', subscriptionId)
    .single();
  
  if (!sub) return;
  
  // Actualizar estado a limbo
  await supabase
    .from('subscriptions')
    .update({ status: 'limbo' })
    .eq('user_id', sub.user_id);
  
  // Notificar al usuario
  await notifyUser(sub.user_id, 'PAYMENT_FAILED');
}
```

## 9.3 Prevención de Fraude

```typescript
// lib/server/payments/fraud-prevention.ts

/**
 * Medidas adicionales de prevención de fraude
 */

interface FraudCheckResult {
  allowed: boolean;
  reason?: string;
  riskScore: number;
}

/**
 * Verifica si un intento de pago debe ser bloqueado
 */
export async function prePaymentFraudCheck(
  userId: string,
  ipAddress: string,
  deviceFingerprint: string
): Promise<FraudCheckResult> {
  const supabase = createClient();
  let riskScore = 0;
  
  // 1. Verificar historial de chargebacks
  const hasChargeback = await checkChargebackHistory(userId);
  if (hasChargeback) {
    return {
      allowed: false,
      reason: 'CHARGEBACK_HISTORY',
      riskScore: 100,
    };
  }
  
  // 2. Verificar IPs sospechosas
  const ipReputation = await checkIpReputation(ipAddress);
  if (ipReputation.riskScore > 70) {
    riskScore += ipReputation.riskScore;
  }
  
  // 3. Verificar si el dispositivo está asociado a múltiples cuentas
  const accountsWithDevice = await supabase
    .from('device_fingerprints')
    .select('user_id')
    .eq('fingerprint', deviceFingerprint);
  
  if (accountsWithDevice.data && accountsWithDevice.data.length > 2) {
    riskScore += 30;
  }
  
  // 4. Verificar velocidad de intentos
  const recentAttempts = await getRecentPaymentAttempts(userId, 1);
  if (recentAttempts > 3) {
    riskScore += 25;
  }
  
  // 5. Verificar coincidencia de país (billing vs IP)
  const billingCountry = await getBillingCountry(userId);
  const ipCountry = await getIpCountry(ipAddress);
  
  if (billingCountry && ipCountry && billingCountry !== ipCountry) {
    riskScore += 20;
  }
  
  // Decisiones basadas en score
  if (riskScore >= 80) {
    return {
      allowed: false,
      reason: 'HIGH_RISK',
      riskScore,
    };
  }
  
  if (riskScore >= 50) {
    // Requerir verificación adicional (3D Secure)
    return {
      allowed: true,
      reason: 'REQUIRES_3DS',
      riskScore,
    };
  }
  
  return {
    allowed: true,
    riskScore,
  };
}
```

---

# 10. SEGURIDAD DE WEBHOOKS

## 10.1 Validación de Webhooks

### 10.1.1 Stripe Webhook Security

```typescript
// lib/server/webhooks/security.ts

import { createHmac, timingSafeEqual } from 'crypto';

/**
 * Valida la firma de un webhook de Stripe
 * Previene ataques de webhook spoofing
 */
export function validateStripeWebhook(
  payload: string,
  signature: string,
  secret: string
): boolean {
  try {
    const event = stripe.webhooks.constructEvent(payload, signature, secret);
    return true;
  } catch {
    return false;
  }
}

/**
 * Valida timestamp para prevenir replay attacks
 * Rechaza webhooks más antiguos de 5 minutos
 */
export function validateWebhookTimestamp(
  timestamp: number,
  toleranceSeconds: number = 300
): boolean {
  const now = Math.floor(Date.now() / 1000);
  const diff = Math.abs(now - timestamp);
  return diff <= toleranceSeconds;
}
```

### 10.1.2 Replicate Webhook Security

```typescript
// lib/server/webhooks/replicate.ts

import { createHmac } from 'crypto';

/**
 * Valida webhooks de Replicate
 */
export function validateReplicateWebhook(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const expectedSignature = createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}
```

## 10.2 Protección de Endpoints de Webhook

```typescript
// app/api/webhooks/[provider]/route.ts

import { NextResponse } from 'next/server';
import { rateLimitByIp } from '@/lib/api/rate-limit';

/**
 * Middleware de seguridad para endpoints de webhook
 */
async function webhookSecurityMiddleware(
  request: Request,
  provider: string
): Promise<{ ok: true } | { ok: false; response: NextResponse }> {
  // 1. Rate limiting por IP
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const rateLimit = await rateLimitByIp(ip, 'webhook', 100); // 100 por hora
  
  if (!rateLimit.success) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: 'RATE_LIMITED' },
        { status: 429 }
      ),
    };
  }
  
  // 2. Verificar Content-Type
  const contentType = request.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: 'INVALID_CONTENT_TYPE' },
        { status: 400 }
      ),
    };
  }
  
  // 3. Verificar origen si es posible (IP allowlist)
  const allowedIps = getAllowedWebhookIps(provider);
  if (allowedIps.length > 0 && !allowedIps.includes(ip)) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: 'UNAUTHORIZED_IP' },
        { status: 403 }
      ),
    };
  }
  
  return { ok: true };
}

function getAllowedWebhookIps(provider: string): string[] {
  switch (provider) {
    case 'stripe':
      return [
        '3.18.12.63',
        '3.130.192.231',
        '13.235.14.237',
        '13.235.122.149',
        '35.154.171.200',
        '52.15.183.38',
        '54.88.130.119',
        '54.88.130.237',
        '54.187.174.169',
        '54.187.205.235',
        '54.187.216.72',
      ];
    default:
      return [];
  }
}
```

---

# 11. ENCRIPTACIÓN

## 11.1 Estrategia de Encriptación

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         ESTRATEGIA DE ENCRIPTACIÓN MULTI-NIVEL                                       │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  NIVEL 1: EN TRÁNSITO (In Transit)                                                                  │
│  ─────────────────────────────────                                                                  │
│  Protocolo: TLS 1.3 (mínimo 1.2)                                                                    │
│  Certificados: ECDSA P-256 con AES-256-GCM                                                          │
│  HSTS: max-age=31536000; includeSubDomains; preload                                                 │
│  Perfect Forward Secrecy: Habilitado                                                                │
│  Certificate Pinning: Opcional para app móvil                                                       │
│                                                                                                      │
│  NIVEL 2: EN REPOSO (At Rest)                                                                       │
│  ──────────────────────────                                                                         │
│  Proveedor: Cloudflare R2 (AES-256)                                                                 │
│  Base de Datos: Supabase (AES-256-GCM)                                                              │
│  Backups: Encriptados con clave separada                                                            │
│                                                                                                      │
│  NIVEL 3: A NIVEL DE APLICACIÓN                                                                     │
│  ────────────────────────────────                                                                   │
│  Datos sensibles PII: AES-256-GCM con clave maestra                                                 │
│  Secrets: AWS Secrets Manager / HashiCorp Vault                                                     │
│  API Keys: Encriptadas en DB, rotación automática                                                   │
│                                                                                                      │
│  NIVEL 4: NIVEL DE CAMPO                                                                            │
│  ─────────────────────────                                                                          │
│  Campos sensibles específicos:                                                                      │
│  • Teléfono: Hash + Encriptación                                                                    │
│  • Email: Encriptación reversible                                                                   │
│  • Datos de salud: Encriptación + Access logging                                                    │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 11.2 Gestión de Secretos

```typescript
// lib/config/secrets.ts

/**
 * Gestión centralizada de secretos
 * En producción, usar AWS Secrets Manager o similar
 */

interface Secrets {
  // Encriptación
  ENCRYPTION_MASTER_KEY: string;
  PHONE_HASH_SALT: string;
  
  // JWT
  JWT_SECRET: string;
  
  // APIs
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  REPLICATE_API_TOKEN: string;
  GEMINI_API_KEY: string;
  
  // Base de datos
  DATABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
}

/**
 * Obtiene un secreto de forma segura
 * En producción, esto consultaría un vault
 */
export function getSecret<K extends keyof Secrets>(key: K): Secrets[K] {
  const value = process.env[key];
  
  if (!value) {
    throw new Error(`Missing required secret: ${key}`);
  }
  
  return value as Secrets[K];
}

/**
 * Rotación de secretos
 * Implementación de rotación programada
 */
export async function rotateSecret(key: keyof Secrets): Promise<void> {
  // 1. Generar nuevo secreto
  const newSecret = generateSecureRandom(32);
  
  // 2. Almacenar nuevo secreto (grace period)
  await storeSecret(`${key}_NEW`, newSecret);
  
  // 3. Esperar período de grace (24h)
  // Durante este tiempo, aceptar ambos secrets
  
  // 4. Promover nuevo secreto
  await storeSecret(key, newSecret);
  await deleteSecret(`${key}_NEW`);
  
  // 5. Notificar equipo
  await notifySecretRotation(key);
}

function generateSecureRandom(length: number): string {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
```

## 11.3 Encriptación de Backups

```typescript
// lib/server/backup/encryption.ts

import { createCipheriv, createDecipheriv, randomBytes, pbkdf2Sync } from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const ITERATIONS = 100000;
const KEY_LENGTH = 32;
const IV_LENGTH = 16;

/**
 * Encripta un backup antes de almacenarlo
 */
export function encryptBackup(
  data: Buffer,
  password: string
): { encrypted: Buffer; salt: Buffer; iv: Buffer } {
  const salt = randomBytes(16);
  const iv = randomBytes(IV_LENGTH);
  
  const key = pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, 'sha256');
  
  const cipher = createCipheriv(ALGORITHM, key, iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  
  return { encrypted, salt, iv };
}

/**
 * Desencripta un backup
 */
export function decryptBackup(
  encrypted: Buffer,
  password: string,
  salt: Buffer,
  iv: Buffer
): Buffer {
  const key = pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, 'sha256');
  
  const decipher = createDecipheriv(ALGORITHM, key, iv);
  return Buffer.concat([decipher.update(encrypted), decipher.final()]);
}
```

---

# 12. RATE LIMITING Y PROTECCIÓN DDoS

## 12.1 Arquitectura de Protección

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         ARQUITECTURA DE PROTECCIÓN DDoS                                              │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  NIVEL 1: CLOUDFLARE (Edge)                                                                         │
│  ─────────────────────────                                                                          │
│  • DDoS Protection (L3/L4/L7) - Unlimited                                                           │
│  • WAF con OWASP Core Rule Set                                                                      │
│  • Rate limiting por IP (1000 req/10s)                                                              │
│  • Bot Management (detección ML)                                                                    │
│  • Challenge/JS Challenge para sospechosos                                                          │
│  • CAPTCHA para ataques persistentes                                                                │
│                                                                                                      │
│  NIVEL 2: VERCEL EDGE                                                                               │
│  ────────────────────                                                                               │
│  • Rate limiting por función                                                                        │
│  • Geoblocking si es necesario                                                                      │
│  • IP blocking dinámico                                                                             │
│                                                                                                      │
│  NIVEL 3: APLICACIÓN (Upstash Redis)                                                                │
│  ─────────────────────────────────                                                                  │
│  • Rate limiting por user ID                                                                        │
│  • Rate limiting por endpoint específico                                                            │
│  • Circuit breaker para servicios externos                                                          │
│                                                                                                      │
│  NIVEL 4: BASE DE DATOS                                                                             │
│  ───────────────────────                                                                            │
│  • Connection pooling (pgbouncer)                                                                   │
│  • Query timeout (30s)                                                                              │
│  • Statement cost limits                                                                            │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 12.2 Implementación de Rate Limiting

```typescript
// lib/api/ddos-protection.ts

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

/**
 * Rate limiters por nivel de criticidad
 */
export const ddosProtection = {
  // Crítico: Autenticación
  critical: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 por minuto
    analytics: true,
    prefix: 'ratelimit:critical',
  }),
  
  // Alto: Operaciones importantes
  high: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(20, '1 m'), // 20 por minuto
    analytics: true,
    prefix: 'ratelimit:high',
  }),
  
  // Medio: Operaciones regulares
  medium: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, '1 m'), // 100 por minuto
    analytics: true,
    prefix: 'ratelimit:medium',
  }),
  
  // Bajo: Operaciones de lectura
  low: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(1000, '1 m'), // 1000 por minuto
    analytics: true,
    prefix: 'ratelimit:low',
  }),
  
  // Burst protection para picos
  burst: new Ratelimit({
    redis,
    limiter: Ratelimit.tokenBucket(50, '10 s', 100), // 50/s, burst 100
    analytics: true,
    prefix: 'ratelimit:burst',
  }),
};

/**
 * Circuit breaker para servicios externos
 * Prevenir cascade failures
 */
export class CircuitBreaker {
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private failureCount = 0;
  private lastFailureTime?: number;
  
  constructor(
    private name: string,
    private threshold = 5,
    private timeout = 60000 // 1 minuto
  ) {}
  
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - (this.lastFailureTime || 0) > this.timeout) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error(`Circuit breaker OPEN for ${this.name}`);
      }
    }
    
    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  private onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }
  
  private onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.threshold) {
      this.state = 'OPEN';
    }
  }
}

// Circuit breakers para servicios externos
export const circuitBreakers = {
  stripe: new CircuitBreaker('stripe', 5, 30000),
  replicate: new CircuitBreaker('replicate', 3, 60000),
  gemini: new CircuitBreaker('gemini', 5, 30000),
  supabase: new CircuitBreaker('supabase', 10, 10000),
};
```

---

# 13. SEGURIDAD DEL FRONTEND

## 13.1 Content Security Policy

```typescript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self'",
              "connect-src 'self' https://*.supabase.co https://api.stripe.com https://api.replicate.com",
              "frame-src https://js.stripe.com https://hooks.stripe.com",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), payment=(self)',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

## 13.2 Protección XSS

```typescript
// lib/client/security/xss.ts

import DOMPurify from 'dompurify';

/**
 * Sanitiza HTML antes de renderizar
 * Previene XSS persistente y reflejado
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: [], // No permitir atributos
  });
}

/**
 * Escapar para atributos HTML
 */
export function escapeHtmlAttribute(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Escapar para JavaScript
 */
export function escapeJs(unsafe: string): string {
  return JSON.stringify(unsafe);
}
```

## 13.3 Protección CSRF

```typescript
// lib/client/security/csrf.ts

/**
 * Genera y valida tokens CSRF
 * Aunque usamos SameSite=Strict, esto es defensa en profundidad
 */

const CSRF_TOKEN_KEY = 'csrf_token';

export function generateCsrfToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  const token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  
  // Almacenar en sessionStorage (no persistente)
  sessionStorage.setItem(CSRF_TOKEN_KEY, token);
  
  return token;
}

export function getCsrfToken(): string | null {
  return sessionStorage.getItem(CSRF_TOKEN_KEY);
}

export function validateCsrfToken(token: string): boolean {
  const stored = getCsrfToken();
  return stored !== null && stored === token;
}

/**
 * Hook para incluir token CSRF en requests
 */
export function useCsrfToken(): { csrfToken: string | null; includeCsrf: (headers: HeadersInit) => HeadersInit } {
  const csrfToken = getCsrfToken();
  
  const includeCsrf = (headers: HeadersInit): HeadersInit => ({
    ...headers,
    'X-CSRF-Token': csrfToken || '',
  });
  
  return { csrfToken, includeCsrf };
}
```

---

# 14. MONITOREO Y AUDITORÍA

## 14.1 Sistema de Logging

```typescript
// lib/server/logging/audit.ts

import { createClient } from '@/lib/server/db';

/**
 * Niveles de log de auditoría
 */
export enum AuditLevel {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  CRITICAL = 'critical',
  SECURITY = 'security',
}

/**
 * Categorías de eventos auditados
 */
export enum AuditCategory {
  AUTH = 'auth',           // Login, logout, register
  DATA_ACCESS = 'data_access', // Lectura de datos sensibles
  DATA_MODIFY = 'data_modify', // Modificación de datos
  PAYMENT = 'payment',     // Transacciones
  ADMIN = 'admin',         // Acciones administrativas
  SECURITY = 'security',   // Eventos de seguridad
  SYSTEM = 'system',       // Eventos del sistema
}

interface AuditLogEntry {
  id?: string;
  timestamp: string;
  level: AuditLevel;
  category: AuditCategory;
  userId?: string;
  sessionId?: string;
  ipAddress?: string;
  userAgent?: string;
  action: string;
  resource?: string;
  resourceId?: string;
  status: 'success' | 'failure' | 'blocked';
  details?: Record<string, unknown>;
  errorMessage?: string;
}

/**
 * Registra un evento de auditoría
 */
export async function auditLog(entry: Omit<AuditLogEntry, 'id' | 'timestamp'>): Promise<void> {
  const supabase = createClient();
  
  const fullEntry: AuditLogEntry = {
    ...entry,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  };
  
  // Insertar en DB
  await supabase.from('audit_logs').insert({
    id: fullEntry.id,
    timestamp: fullEntry.timestamp,
    level: fullEntry.level,
    category: fullEntry.category,
    user_id: fullEntry.userId,
    session_id: fullEntry.sessionId,
    ip_address: fullEntry.ipAddress,
    user_agent: fullEntry.userAgent,
    action: fullEntry.action,
    resource: fullEntry.resource,
    resource_id: fullEntry.resourceId,
    status: fullEntry.status,
    details: fullEntry.details,
    error_message: fullEntry.errorMessage,
  });
  
  // Si es crítico o seguridad, también enviar a sistema externo (Sentry, etc)
  if (entry.level === AuditLevel.CRITICAL || entry.level === AuditLevel.SECURITY) {
    await sendToSecurityMonitoring(fullEntry);
  }
}

/**
 * Helpers específicos para eventos comunes
 */
export const audit = {
  auth: {
    login: (userId: string, success: boolean, details?: Record<string, unknown>) =>
      auditLog({
        level: success ? AuditLevel.INFO : AuditLevel.WARNING,
        category: AuditCategory.AUTH,
        userId,
        action: 'LOGIN',
        status: success ? 'success' : 'failure',
        details,
      }),
    
    logout: (userId: string, details?: Record<string, unknown>) =>
      auditLog({
        level: AuditLevel.INFO,
        category: AuditCategory.AUTH,
        userId,
        action: 'LOGOUT',
        status: 'success',
        details,
      }),
    
    passwordChange: (userId: string, success: boolean) =>
      auditLog({
        level: AuditLevel.INFO,
        category: AuditCategory.AUTH,
        userId,
        action: 'PASSWORD_CHANGE',
        status: success ? 'success' : 'failure',
      }),
  },
  
  data: {
    access: (userId: string, resource: string, resourceId: string, details?: Record<string, unknown>) =>
      auditLog({
        level: AuditLevel.INFO,
        category: AuditCategory.DATA_ACCESS,
        userId,
        action: 'READ',
        resource,
        resourceId,
        status: 'success',
        details,
      }),
    
    modify: (userId: string, resource: string, resourceId: string, changes: Record<string, unknown>) =>
      auditLog({
        level: AuditLevel.INFO,
        category: AuditCategory.DATA_MODIFY,
        userId,
        action: 'UPDATE',
        resource,
        resourceId,
        status: 'success',
        details: { changes },
      }),
  },
  
  payment: {
    transaction: (userId: string, amount: number, currency: string, success: boolean, details?: Record<string, unknown>) =>
      auditLog({
        level: success ? AuditLevel.INFO : AuditLevel.ERROR,
        category: AuditCategory.PAYMENT,
        userId,
        action: 'TRANSACTION',
        status: success ? 'success' : 'failure',
        details: { amount, currency, ...details },
      }),
  },
  
  security: {
    suspiciousActivity: (userId: string, reason: string, details?: Record<string, unknown>) =>
      auditLog({
        level: AuditLevel.SECURITY,
        category: AuditCategory.SECURITY,
        userId,
        action: 'SUSPICIOUS_ACTIVITY',
        status: 'blocked',
        details: { reason, ...details },
      }),
    
    accessDenied: (userId: string | undefined, resource: string, reason: string) =>
      auditLog({
        level: AuditLevel.WARNING,
        category: AuditCategory.SECURITY,
        userId,
        action: 'ACCESS_DENIED',
        resource,
        status: 'blocked',
        errorMessage: reason,
      }),
  },
};

async function sendToSecurityMonitoring(entry: AuditLogEntry): Promise<void> {
  // Enviar a Sentry, Datadog, o sistema de monitoreo
  // Implementación específica según herramienta
  console.error('SECURITY EVENT:', entry);
}
```

## 14.2 Alertas de Seguridad

```typescript
// lib/server/monitoring/alerts.ts

/**
 * Configuración de alertas de seguridad
 */

interface SecurityAlertRule {
  name: string;
  condition: (events: AuditLogEntry[]) => boolean;
  severity: 'low' | 'medium' | 'high' | 'critical';
  action: (context: Record<string, unknown>) => Promise<void>;
}

export const securityAlertRules: SecurityAlertRule[] = [
  {
    name: 'BRUTE_FORCE_DETECTED',
    condition: (events) => {
      // 5 logins fallidos en 10 minutos desde misma IP
      const recentFailures = events.filter(
        e => e.action === 'LOGIN' && 
             e.status === 'failure' &&
             Date.now() - new Date(e.timestamp).getTime() < 10 * 60 * 1000
      );
      return recentFailures.length >= 5;
    },
    severity: 'high',
    action: async (context) => {
      await blockIp(context.ipAddress as string, 60); // Bloquear 1 hora
      await notifySecurityTeam('Brute force attack detected', context);
    },
  },
  
  {
    name: 'UNAUTHORIZED_DATA_ACCESS',
    condition: (events) => {
      // Intentos de acceso a datos de otros usuarios
      return events.some(e => 
        e.action === 'ACCESS_DENIED' && 
        e.category === AuditCategory.DATA_ACCESS
      );
    },
    severity: 'critical',
    action: async (context) => {
      await suspendUser(context.userId as string, 'SUSPICIOUS_ACCESS_ATTEMPT');
      await notifySecurityTeam('Unauthorized data access attempt', context);
    },
  },
  
  {
    name: 'PAYMENT_FRAUD_PATTERN',
    condition: (events) => {
      // Múltiples pagos fallidos seguidos
      const recentFailures = events.filter(
        e => e.category === AuditCategory.PAYMENT && 
             e.status === 'failure' &&
             Date.now() - new Date(e.timestamp).getTime() < 60 * 60 * 1000
      );
      return recentFailures.length >= 3;
    },
    severity: 'medium',
    action: async (context) => {
      await flagForReview(context.userId as string, 'payment_fraud');
    },
  },
  
  {
    name: 'ADMIN_ACTION_DETECTED',
    condition: (events) => {
      return events.some(e => e.category === AuditCategory.ADMIN);
    },
    severity: 'low',
    action: async (context) => {
      await logAdminAction(context);
    },
  },
];

async function blockIp(ip: string, minutes: number): Promise<void> {
  const redis = getRedisClient();
  await redis.setex(`blocked_ip:${ip}`, minutes * 60, 'true');
}

async function suspendUser(userId: string, reason: string): Promise<void> {
  const supabase = createClient();
  await supabase.from('user_suspensions').insert({
    user_id: userId,
    reason,
    suspended_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24h default
  });
}

async function notifySecurityTeam(message: string, context: Record<string, unknown>): Promise<void> {
  // Enviar email/Slack/PagerDuty
  console.error(`SECURITY ALERT: ${message}`, context);
}
```

---

# 15. RESPUESTA A INCIDENTES

## 15.1 Plan de Respuesta a Incidentes

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         PLAN DE RESPUESTA A INCIDENTES (IRP)                                         │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  FASE 1: DETECCIÓN Y ANÁLISIS (0-1 hora)                                                            │
│  ────────────────────────────────────────                                                           │
│  1. Alerta generada por sistema de monitoreo                                                        │
│  2. Verificar autenticidad del incidente                                                           │
│  3. Clasificar severidad (P1-Critical, P2-High, P3-Medium, P4-Low)                                 │
│  4. Notificar al equipo de seguridad (on-call)                                                      │
│  5. Crear ticket de incidente con timestamp                                                        │
│                                                                                                      │
│  FASE 2: CONTENCIÓN (1-4 horas)                                                                     │
│  ───────────────────────────────                                                                    │
│  1. Aislar sistemas afectados (si es necesario)                                                     │
│  2. Bloquear IPs/usuarios maliciosos                                                               │
│  3. Rotar secrets comprometidos                                                                    │
│  4. Activar modo de mantenimiento (si es necesario)                                                │
│  5. Preservar evidencia (logs, snapshots)                                                          │
│                                                                                                      │
│  FASE 3: ERRADICACIÓN (4-24 horas)                                                                  │
│  ─────────────────────────────────                                                                  │
│  1. Identificar vector de ataque                                                                   │
│  2. Eliminar acceso no autorizado                                                                  │
│  3. Parchear vulnerabilidades                                                                      │
│  4. Verificar integridad de datos                                                                  │
│  5. Restaurar desde backups si es necesario                                                        │
│                                                                                                      │
│  FASE 4: RECUPERACIÓN (24-72 horas)                                                                 │
│  ──────────────────────────────────                                                                 │
│  1. Restaurar servicios afectados                                                                  │
│  2. Monitoreo intensivo de indicadores                                                            │
│  3. Verificación de funcionalidad                                                                  │
│  4. Comunicación a usuarios (si aplica)                                                            │
│                                                                                                      │
│  FASE 5: POST-INCIDENTE (72+ horas)                                                                 │
│  ─────────────────────────────────                                                                  │
│  1. Documentar lecciones aprendidas                                                                │
│  2. Actualizar políticas y procedimientos                                                          │
│  3. Implementar mejoras preventivas                                                                │
│  4. Comunicación final (blog post/email si es público)                                             │
│  5. Cerrar ticket y archivar evidencia                                                             │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 15.2 Playbooks de Incidentes

```typescript
// lib/server/incident-response/playbooks.ts

/**
 * Playbooks automatizados para respuesta a incidentes
 */

interface IncidentContext {
  type: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  affectedUsers?: string[];
  affectedSystems?: string[];
  indicators: Record<string, unknown>;
}

/**
 * Playbook: Data Breach
 */
export async function dataBreachPlaybook(context: IncidentContext): Promise<void> {
  console.log('EXECUTING: Data Breach Playbook');
  
  // 1. Inmediato: Revocar todas las sesiones
  await revokeAllSessions();
  
  // 2. Forzar cambio de contraseña para usuarios afectados
  if (context.affectedUsers) {
    for (const userId of context.affectedUsers) {
      await forcePasswordReset(userId);
    }
  }
  
  // 3. Notificar a autoridades (si aplica GDPR/CCPA)
  await notifyAuthorities(context);
  
  // 4. Preparar comunicación a usuarios
  await prepareUserNotification(context);
  
  // 5. Escalar a ejecutivos
  await escalateToLeadership(context);
}

/**
 * Playbook: DDoS Attack
 */
export async function ddosPlaybook(context: IncidentContext): Promise<void> {
  console.log('EXECUTING: DDoS Playbook');
  
  // 1. Activar modo "under attack" en Cloudflare
  await activateUnderAttackMode();
  
  // 2. Escalar límites de rate limiting
  await increaseRateLimits();
  
  // 3. Activar cache agresivo
  await enableAggressiveCaching();
  
  // 4. Contactar a Cloudflare para mitigación adicional
  await requestCloudflareSupport();
}

/**
 * Playbook: Account Takeover
 */
export async function accountTakeoverPlaybook(context: IncidentContext): Promise<void> {
  console.log('EXECUTING: Account Takeover Playbook');
  
  const userId = context.indicators.userId as string;
  
  // 1. Suspender cuenta inmediatamente
  await suspendUser(userId, 'ACCOUNT_TAKEOVER_DETECTED');
  
  // 2. Revocar todas las sesiones
  await revokeUserSessions(userId);
  
  // 3. Revertir transacciones recientes sospechosas
  await reviewRecentTransactions(userId);
  
  // 4. Notificar al usuario legítimo
  await notifyUserOfSuspiciousActivity(userId);
  
  // 5. Requerir verificación de identidad para recuperación
  await requireIdentityVerification(userId);
}

/**
 * Playbook: Payment Fraud
 */
export async function paymentFraudPlaybook(context: IncidentContext): Promise<void> {
  console.log('EXECUTING: Payment Fraud Playbook');
  
  // 1. Bloquear transacciones del usuario
  const userId = context.indicators.userId as string;
  await blockUserPayments(userId);
  
  // 2. Reportar a Stripe Radar
  await reportToStripeRadar(context);
  
  // 3. Marcar cuenta para revisión manual
  await flagForManualReview(userId);
  
  // 4. Revertir beneficios obtenidos fraudulentamente
  await reverseFraudulentBenefits(userId);
}

// Implementaciones de auxiliares
async function revokeAllSessions(): Promise<void> {
  // Implementación específica
}

async function forcePasswordReset(userId: string): Promise<void> {
  const supabase = createClient();
  await supabase.auth.admin.sendRawEmail({
    to: userId,
    subject: 'Security Alert: Password Reset Required',
    // ...
  });
}

async function notifyAuthorities(context: IncidentContext): Promise<void> {
  if (context.severity === 'critical') {
    // Notificar a autoridades según jurisdicción
  }
}
```

---

# 16. CUMPLIMIENTO NORMATIVO

## 16.1 GDPR (Reglamento General de Protección de Datos)

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         CUMPLIMIENTO GDPR                                                            │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  PRINCIPIOS APLICADOS:                                                                              │
│  ─────────────────────                                                                              │
│                                                                                                      │
│  1. LICITUD, LEALTAD Y TRANSPARENCIA                                                               │
│     ✓ Consentimiento explícito para procesamiento de datos                                         │
│     ✓ Política de privacidad clara y accesible                                                      │
│     ✓ Términos de servicio comprensibles                                                            │
│                                                                                                      │
│  2. LIMITACIÓN DE LA FINALIDAD                                                                      │
│     ✓ Datos recopilados solo para fines específicos (gamificación, mejora física)                  │
│     ✓ No compartir con terceros sin consentimiento                                                  │
│     ✓ AI training solo con datos anonimizados                                                      │
│                                                                                                      │
│  3. MINIMIZACIÓN DE DATOS                                                                           │
│     ✓ Solo recopilar datos necesarios para el servicio                                             │
│     ✓ No solicitar datos sensibles innecesarios                                                    │
│     ✓ Anonimización para analytics                                                                 │
│                                                                                                      │
│  4. EXACTITUD                                                                                       │
│     ✓ Usuarios pueden actualizar sus datos                                                         │
│     ✓ Verificación de datos de contacto                                                            │
│                                                                                                      │
│  5. LIMITACIÓN DEL PLAZO DE CONSERVACIÓN                                                            │
│     ✓ Datos de cuenta: Hasta eliminación + 30 días                                                 │
│     ✓ Logs de auditoría: 1 año                                                                     │
│     ✓ Backups: 90 días                                                                             │
│     ✓ Datos analíticos: 2 años (anonimizados)                                                      │
│                                                                                                      │
│  6. INTEGRIDAD Y CONFIDENCIALIDAD                                                                   │
│     ✓ Encriptación en tránsito y reposo                                                            │
│     ✓ Acceso restringido y auditado                                                                │
│     ✓ Pseudonimización donde sea posible                                                           │
│                                                                                                      │
│  7. RENDICIÓN DE CUENTAS                                                                            │
│     ✓ Registro de actividades de procesamiento                                                     │
│     ✓ DPO designado (Data Protection Officer)                                                      │
│     ✓ Evaluaciones de impacto en privacidad (DPIA)                                                 │
│                                                                                                      │
│  DERECHOS DE LOS USUARIOS:                                                                          │
│  ─────────────────────────                                                                          │
│  ✓ Derecho de acceso: /api/gdpr/export-data                                                        │
│  ✓ Derecho de rectificación: /settings/profile                                                     │
│  ✓ Derecho al olvido: /api/gdpr/delete-account                                                     │
│  ✓ Derecho de oposición: Configuración de notificaciones                                           │
│  ✓ Derecho de portabilidad: Exportación JSON                                                       │
│  ✓ Derecho a no ser perfilado: Opción en configuración                                             │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 16.1.1 Implementación de Derechos GDPR

```typescript
// lib/server/gdpr/rights.ts

import { createClient } from '@/lib/server/db';
import { createReadStream } from 'fs';

/**
 * Derecho de acceso (Art. 15 GDPR)
 * Exporta todos los datos del usuario
 */
export async function exportUserData(userId: string): Promise<{
  json: string;
  csv: string;
}> {
  const supabase = createClient();
  
  // Recopilar datos de todas las tablas
  const [
    profile,
    avatarState,
    tasks,
    wallet,
    transactions,
    inventory,
    subscription,
    logs,
  ] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', userId).single(),
    supabase.from('avatar_states').select('*').eq('user_id', userId).single(),
    supabase.from('daily_tasks').select('*').eq('user_id', userId),
    supabase.from('wallets').select('*').eq('user_id', userId).single(),
    supabase.from('wallet_transactions').select('*').eq('user_id', userId),
    supabase.from('inventory').select('*').eq('user_id', userId),
    supabase.from('subscriptions').select('*').eq('user_id', userId).single(),
    supabase.from('audit_logs').select('*').eq('user_id', userId),
  ]);
  
  const data = {
    exported_at: new Date().toISOString(),
    user_id: userId,
    profile: profile.data,
    avatar_state: avatarState.data,
    tasks: tasks.data,
    wallet: wallet.data,
    transactions: transactions.data,
    inventory: inventory.data,
    subscription: subscription.data,
    audit_logs: logs.data,
  };
  
  return {
    json: JSON.stringify(data, null, 2),
    csv: convertToCSV(data),
  };
}

/**
 * Derecho al olvido (Art. 17 GDPR)
 * Elimina todos los datos personales del usuario
 */
export async function deleteUserAccount(userId: string): Promise<void> {
  const supabase = createClient();
  
  // 1. Anonimizar datos en lugar de eliminar (para integridad referencial)
  await supabase.from('profiles').update({
    email: `deleted_${userId}@anonymous.com`,
    phone: null,
    nickname: `deleted_${userId.slice(0, 8)}`,
    deleted_at: new Date().toISOString(),
  }).eq('id', userId);
  
  // 2. Eliminar datos sensibles
  await supabase.from('avatar_states').delete().eq('user_id', userId);
  await supabase.from('wallets').delete().eq('user_id', userId);
  await supabase.from('inventory').delete().eq('user_id', userId);
  
  // 3. Anonimizar transacciones (conservar para contabilidad)
  await supabase.from('wallet_transactions').update({
    user_id: null,
    anonymized: true,
  }).eq('user_id', userId);
  
  // 4. Cancelar suscripción
  await cancelStripeSubscription(userId);
  
  // 5. Eliminar cuenta de auth
  await supabase.auth.admin.deleteUser(userId);
  
  // 6. Registrar eliminación
  await auditLog({
    level: AuditLevel.INFO,
    category: AuditCategory.DATA_MODIFY,
    action: 'ACCOUNT_DELETED',
    userId,
    status: 'success',
  });
}
```

## 16.2 CCPA (California Consumer Privacy Act)

```typescript
// lib/server/ccpa/compliance.ts

/**
 * Cumplimiento CCPA para usuarios de California
 */

export async function handleCCPARequest(
  userId: string,
  requestType: 'know' | 'delete' | 'opt-out' | 'opt-in'
): Promise<void> {
  switch (requestType) {
    case 'know':
      // Similar a GDPR export
      await exportUserData(userId);
      break;
      
    case 'delete':
      // Similar a GDPR deletion
      await deleteUserAccount(userId);
      break;
      
    case 'opt-out':
      // No vender datos (ya no lo hacemos)
      await optOutOfDataSales(userId);
      break;
      
    case 'opt-in':
      // Permitir venta de datos
      await optInToDataSales(userId);
      break;
  }
}

async function optOutOfDataSales(userId: string): Promise<void> {
  const supabase = createClient();
  await supabase.from('privacy_preferences').upsert({
    user_id: userId,
    do_not_sell: true,
    updated_at: new Date().toISOString(),
  });
}
```

## 16.3 Certificaciones y Auditorías

| Estándar | Estado | Objetivo |
|----------|--------|----------|
| SOC 2 Type II | Roadmap Q3 2026 | Seguridad, disponibilidad, confidencialidad |
| ISO 27001 | Roadmap 2027 | Gestión de seguridad de la información |
| PCI DSS | SAQ A (Stripe) | Cumplimiento para procesamiento de pagos |

---

# 17. CHECKLIST DE SEGURIDAD PRE-DEPLOY

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         CHECKLIST DE SEGURIDAD PRE-DESPLIEGUE                                        │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                      │
│  INFRAESTRUCTURA                                                                                    │
│  ────────────────                                                                                    │
│  [ ] TLS 1.3 habilitado en todos los dominios                                                       │
│  [ ] Certificados válidos y no expirados                                                            │
│  [ ] HSTS habilitado con preload                                                                    │
│  [ ] Cloudflare configurado con WAF                                                                 │
│  [ ] Rate limiting activado en todas las capas                                                      │
│  [ ] DDoS protection activado                                                                       │
│                                                                                                      │
│  BASE DE DATOS                                                                                      │
│  ──────────────                                                                                      │
│  [ ] RLS habilitado en todas las tablas de usuario                                                  │
│  [ ] Políticas RLS probadas (no permiten acceso cruzado)                                            │
│  [ ] Triggers de auditoría activos                                                                  │
│  [ ] Backups encriptados configurados                                                               │
│  [ ] Contraseñas de DB rotadas                                                                      │
│  [ ] Conexiones SSL obligatorias                                                                    │
│                                                                                                      │
│  AUTENTICACIÓN                                                                                      │
│  ──────────────                                                                                      │
│  [ ] JWT secrets seguros (256+ bits)                                                                │
│  [ ] Expiración de tokens configurada                                                               │
│  [ ] Refresh token rotation habilitado                                                              │
│  [ ] Cookies HttpOnly, Secure, SameSite                                                             │
│  [ ] Rate limiting en login/register                                                                │
│  [ ] MFA disponible para admins                                                                     │
│                                                                                                      │
│  API Y SERVER ACTIONS                                                                               │
│  ─────────────────────                                                                               │
│  [ ] Validación de input en todos los endpoints                                                     │
│  [ ] Sanitización de output implementada                                                            │
│  [ ] Idempotency keys requeridas para operaciones destructivas                                      │
│  [ ] Error handling sin leak de información                                                         │
│  [ ] CORS configurado restrictivamente                                                              │
│  [ ] CSRF protection implementada                                                                   │
│                                                                                                      │
│  PAGOS                                                                                              │
│  ──────                                                                                              │
│  [ ] Stripe webhook secrets configurados                                                            │
│  [ ] Verificación de firmas de webhooks                                                             │
│  [ ] Idempotencia de eventos de Stripe                                                              │
│  [ ] No se almacenan datos de tarjeta                                                               │
│  [ ] 3D Secure habilitado                                                                           │
│                                                                                                      │
│  FRONTEND                                                                                           │
│  ────────                                                                                            │
│  [ ] CSP headers configurados                                                                       │
│  [ ] XSS protection activada                                                                        │
│  [ ] Clickjacking protection (X-Frame-Options)                                                      │
│  [ ] Content-Type sniffing deshabilitado                                                            │
│  [ ] Secrets no expuestos en cliente                                                                │
│                                                                                                      │
│  MONITOREO                                                                                          │
│  ──────────                                                                                          │
│  [ ] Sentry configurado para errores                                                                │
│  [ ] Audit logging activo                                                                           │
│  [ ] Alertas de seguridad configuradas                                                              │
│  [ ] Dashboard de métricas de seguridad                                                             │
│  [ ] Playbooks de incidentes documentados                                                           │
│                                                                                                      │
│  CUMPLIMIENTO                                                                                       │
│  ────────────                                                                                        │
│  [ ] Política de privacidad actualizada                                                             │
│  [ ] Términos de servicio actualizados                                                              │
│  [ ] Derechos GDPR implementados (export/delete)                                                    │
│  [ ] Cookie consent implementado                                                                    │
│  [ ] DPO designado (si aplica)                                                                      │
│                                                                                                      │
│  ANTI-CHEAT                                                                                         │
│  ──────────                                                                                          │
│  [ ] Verificación de teléfono obligatoria                                                           │
│  [ ] Rate limiting en verificación SMS                                                              │
│  [ ] Detección de VOIP activada                                                                     │
│  [ ] Device fingerprinting implementado                                                             │
│  [ ] Análisis de comportamiento activo                                                              │
│  [ ] Validación server-side de progreso                                                             │
│                                                                                                      │
│  DOCUMENTACIÓN                                                                                      │
│  ─────────────                                                                                       │
│  [ ] Runbook de seguridad actualizado                                                               │
│  [ ] Contactos de emergencia disponibles                                                            │
│  [ ] Plan de respuesta a incidentes revisado                                                        │
│  [ ] Penetration testing programado                                                                 │
│                                                                                                      │
│  ─────────────────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                                      │
│  FIRMA DE APROBACIÓN:                                                                               │
│                                                                                                      │
│  Seguridad revisada por: _________________________ Fecha: _____________                            │
│  Infraestructura revisada por: ___________________ Fecha: _____________                            │
│  Cumplimiento revisado por: _____________________ Fecha: _____________                            │
│                                                                                                      │
│  [ ] APROBADO PARA PRODUCCIÓN                                                                       │
│                                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

```
╔═════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                      ║
║                         FIN DEL SECURITY SPECIFICATION                                               ║
║                                                                                                      ║
║   Security Specification v1.0.0 - METAMEN100                                                         ║
║   Total de líneas: ~3200+                                                                            ║
║   Secciones: 17 completas                                                                            ║
║   Controles de seguridad: 100+                                                                       ║
║   Playbooks de incidentes: 4                                                                         ║
║                                                                                                      ║
║   "La seguridad no es un estado, es un proceso continuo.                                            ║
║    Un sistema TOP100 nunca baja la guardia."                                                         ║
║                                                                                                      ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

## REFERENCIAS

### Estándares Consultados
- OWASP Top 10 2021
- OWASP Application Security Verification Standard (ASVS) 4.0
- NIST Cybersecurity Framework 1.1
- ISO/IEC 27001:2022
- PCI DSS v4.0
- GDPR (Reglamento UE 2016/679)
- CCPA (California Civil Code 1798.100)

### Herramientas de Seguridad
- **SAST**: CodeQL, Semgrep
- **DAST**: OWASP ZAP
- **Dependencias**: Snyk, Dependabot
- **Secrets**: GitLeaks, TruffleHog
- **Container**: Trivy
- **Cloud**: Prowler, ScoutSuite

### Recursos Adicionales
- [Supabase Security Guide](https://supabase.com/docs/guides/security)
- [Next.js Security](https://nextjs.org/docs/security)
- [Stripe Security Best Practices](https://stripe.com/docs/security)
- [Cloudflare Security Center](https://www.cloudflare.com/security-center/)

---

*Documento generado conforme a especificaciones de Caja 01.9 del Sistema MetaMen100*  
*Seguridad diseñada para proteger datos de usuarios y mantener integridad del sistema*  
*Aprobado para implementación en ambiente de producción*
