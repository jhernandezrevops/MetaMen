# METAMEN100 - UI/UX DESIGN SPECIFICATION
## Especificación de Diseño de Interfaz y Experiencia de Usuario Nivel TOP-100 Mundial

---

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                    🎨 UI/UX DESIGN SPECIFICATION v1.0                                            ║
║                    METAMEN100 - Diseño que Transforma, Interfaz que Inspira                      ║
║                                                                                                  ║
║     "Cada píxel cuenta. Cada interacción motiva. Cada pantalla                                 ║
║      es una oportunidad de reconexión con la excelencia."                                      ║
║                                                                                                  ║
║     Documento Clasificación: TOP-100 WORLDWIDE READY                                             ║
║     Última Actualización: Enero 2026                                                             ║
║     Estado: PRODUCCIÓN                                                                           ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

# ÍNDICE EJECUTIVO

1. [Visión General del Diseño](#1-visión-general-del-diseño)
2. [Sistema de Diseño](#2-sistema-de-diseño)
3. [Arquitectura de Información](#3-arquitectura-de-información)
4. [Flujos de Usuario](#4-flujos-de-usuario)
5. [Especificaciones de Pantallas](#5-especificaciones-de-pantallas)
6. [Componentes UI](#6-componentes-ui)
7. [Animaciones y Micro-interacciones](#7-animaciones-y-micro-interacciones)
8. [Responsive y Adaptativo](#8-responsive-y-adaptativo)
9. [Accesibilidad](#9-accesibilidad)
10. [Prototipado y Handoff](#10-prototipado-y-handoff)
11. [Anexos](#11-anexos)

---

# 1. VISIÓN GENERAL DEL DISEÑO

## 1.1 Propósito

> **"El diseño es el lenguaje visual del sistema. Debe comunicar poder, progreso y posibilidad en cada interacción."**

Este documento especifica:

- Sistema de diseño completo y escalable
- Arquitectura de información y navegación
- Especificaciones visuales de cada pantalla
- Componentes reutilizables y sus estados
- Animaciones y micro-interacciones
- Guías de responsive y adaptativo
- Estándares de accesibilidad WCAG 2.1 AA

## 1.2 Principios de Diseño

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         PRINCIPIOS DE DISEÑO                                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  1. CLARIDAD JERÁRQUICA                                                      ║
║     "El usuario debe saber INSTANTÁNEAMENTE qué es importante."              ║
║     → Contraste visual, tamaño, posición guían la atención                   ║
║                                                                              ║
║  2. FEEDBACK INMEDIATO                                                       ║
║     "Cada acción produce una reacción visible."                              ║
║     → Transiciones suaves, estados claros, confirmaciones táctiles           ║
║                                                                              ║
║  3. CONSISTENCIA ABSOLUTA                                                    ║
║     "Mismos patrones, mismos comportamientos, mismos resultados."            ║
║     → Componentes reutilizables, patrones establecidos                       ║
║                                                                              ║
║  4. EMOCIÓN CALCULADA                                                        ║
║     "El diseño debe provocar la emoción correcta en el momento correcto."    ║
║     → Onboarding inspirador, Dashboard motivador, Fallo incómodo             ║
║                                                                              ║
║  5. ECONOMÍA VISUAL                                                          ║
║     "Cada elemento debe ganar su lugar. Sin decoración innecesaria."         ║
║     → Espacio en blanco intencional, elementos esenciales                    ║
║                                                                              ║
║  6. MOBILE-FIRST                                                             ║
║     "Diseñado para móvil, escalado para desktop."                            ║
║     → Touch targets 44x44px mínimo, legibilidad en pantallas pequeñas        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## 1.3 Filosofía Visual

### Identidad Visual Core

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   METAMEN100 es:                                                            │
│                                                                             │
│   ● OSCURO pero NO DEPRESIVO     → Fondo negro #0A0A0A con acentos dorados  │
│   ● PODEROSO pero NO AGRESIVO    → Tipografía bold con espaciado generoso   │
│   ● LIMPIO pero NO FRÍO          → Gradientes sutiles, sombras orgánicas    │
│   ● ÉLITE pero NO EXCLUYENTE     → Lenguaje inclusivo, estándares altos     │
│                                                                             │
│   METAMEN100 NO es:                                                         │
│                                                                             │
│   ✗ Un juego de fantasía medieval                                           │
│   ✗ Una app de fitness genérica                                             │
│   ✗ Un sistema de productividad corporativo                                 │
│   ✗ Una red social                                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. SISTEMA DE DISEÑO

## 2.1 Paleta de Colores

### Colores Primarios

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  COLOR                    │  HEX       │  USO PRINCIPAL                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  ████  Negro Absoluto     │  #0A0A0A   │  Fondos principales                │
│  ████  Negro Suave        │  #141414   │  Tarjetas, contenedores            │
│  ████  Gris Carbón        │  #1E1E1E   │  Hover states, separadores         │
│  ████  Gris Oscuro        │  #2A2A2A   │  Inputs, bordes sutiles            │
│  ████  Gris Medio         │  #4A4A4A   │  Texto secundario, iconos          │
│  ████  Gris Claro         │  #8A8A8A   │  Placeholders, hints               │
│  ████  Blanco Puro        │  #FFFFFF   │  Texto principal, iconos activos   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Colores de Acento

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  COLOR                    │  HEX       │  USO PRINCIPAL                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  ████  Dorado Élite       │  #FFD700   │  BTC, nivel, éxito, premium        │
│  ████  Dorado Oscuro      │  #B8860B   │  Hover dorado, gradientes          │
│  ████  Dorado Brillante   │  #FFF8DC   │  Highlights, brillos               │
├─────────────────────────────────────────────────────────────────────────────┤
│  ████  Rojo Sangre        │  #DC2626   │  Corazones, daño, alertas          │
│  ████  Rojo Oscuro        │  #991B1B   │  Hover rojo, estados críticos      │
│  ████  Rojo Brillante     │  #EF4444   │  Pulso, animaciones de daño        │
├─────────────────────────────────────────────────────────────────────────────┤
│  ████  Verde Éxito        │  #22C55E   │  Tareas completadas, progreso      │
│  ████  Verde Oscuro       │  #15803D   │  Hover verde, confirmaciones       │
│  ████  Verde Brillante    │  #4ADE80   │  Animaciones de éxito              │
├─────────────────────────────────────────────────────────────────────────────┤
│  ████  Azul Eléctrico     │  #3B82F6   │  Links, información, focus         │
│  ████  Azul Oscuro        │  #1D4ED8   │  Hover azul, estados activos       │
│  ████  Cian Brillante     │  #06B6D4   │  Acentos técnicos, código          │
├─────────────────────────────────────────────────────────────────────────────┤
│  ████  Púrpura Místico    │  #8B5CF6   │  Premium, arquetipos especiales    │
│  ████  Naranja Fuego      │  #F97316   │  Urgencia, countdown, heat         │
│  ████  Amarillo Alerta    │  #EAB308   │  Advertencias, atención            │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Gradientes Oficiales

```css
/* Gradiente Dorado Élite */
--gradient-gold: linear-gradient(135deg, #FFD700 0%, #B8860B 50%, #FFD700 100%);

/* Gradiente de Fondo Sutil */
--gradient-bg: linear-gradient(180deg, #0A0A0A 0%, #141414 100%);

/* Gradiente de Tarjeta */
--gradient-card: linear-gradient(145deg, #141414 0%, #1E1E1E 100%);

/* Gradiente de Éxito */
--gradient-success: linear-gradient(135deg, #22C55E 0%, #15803D 100%);

/* Gradiente de Peligro */
--gradient-danger: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);

/* Gradiente de Premium */
--gradient-premium: linear-gradient(135deg, #FFD700 0%, #8B5CF6 50%, #FFD700 100%);

/* Gradiente de Aura (Efecto especial) */
--gradient-aura: radial-gradient(circle at center, rgba(255,215,0,0.1) 0%, transparent 70%);
```

### Tokens de Color Semánticos

```typescript
// tokens/colors.ts
export const colors = {
  // Backgrounds
  bg: {
    primary: '#0A0A0A',
    secondary: '#141414',
    tertiary: '#1E1E1E',
    elevated: '#2A2A2A',
  },

  // Text
  text: {
    primary: '#FFFFFF',
    secondary: '#8A8A8A',
    tertiary: '#4A4A4A',
    inverse: '#0A0A0A',
  },

  // Accents
  accent: {
    gold: '#FFD700',
    goldDark: '#B8860B',
    red: '#DC2626',
    green: '#22C55E',
    blue: '#3B82F6',
    purple: '#8B5CF6',
    orange: '#F97316',
  },

  // States
  state: {
    success: '#22C55E',
    warning: '#EAB308',
    error: '#DC2626',
    info: '#3B82F6',
    disabled: '#4A4A4A',
  },

  // Vectors (para representación visual)
  vector: {
    aura: '#FFD700',      // Dorado
    jawline: '#F97316',   // Naranja (fuego/afiliación)
    wealth: '#22C55E',    // Verde (dinero)
    physique: '#DC2626',  // Rojo (sangre/esfuerzo)
    env: '#3B82F6',       // Azul (entorno)
  },
} as const;
```

## 2.2 Tipografía

### Familias Tipográficas

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  FUNCIÓN              │  FAMILIA                    │  PESOS DISPONIBLES    │
├─────────────────────────────────────────────────────────────────────────────┤
│  Títulos/Display      │  'Inter', sans-serif        │  700, 800, 900        │
│  Cuerpo/Body          │  'Inter', sans-serif        │  400, 500, 600        │
│  Código/Monospace     │  'JetBrains Mono', mono     │  400, 500             │
│  Números/Stats        │  'Inter', sans-serif        │  600, 700 (tabular)   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Escala Tipográfica

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTILO               │  TAMAÑO    │  PESO   │  LINE-HEIGHT  │  USO        │
├─────────────────────────────────────────────────────────────────────────────┤
│  Hero                 │  48px      │  900    │  1.1          │  Nivel, BTC │
│  H1                   │  36px      │  800    │  1.2          │  Títulos    │
│  H2                   │  28px      │  700    │  1.3          │  Secciones  │
│  H3                   │  22px      │  700    │  1.4          │  Subtítulos │
│  H4                   │  18px      │  600    │  1.4          │  Cards      │
│  Body Large           │  16px      │  500    │  1.6          │  Texto main │
│  Body                 │  14px      │  400    │  1.6          │  Descripc.  │
│  Body Small           │  12px      │  400    │  1.5          │  Captions   │
│  Caption              │  10px      │  500    │  1.4          │  Labels     │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2.3 Espaciado

### Sistema de Espaciado (8px Base)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TOKEN    │  VALOR   │  USO TÍPICO                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  space-0  │  0px     │  Sin espacio                                         │
│  space-1  │  4px     │  Iconos pequeños, gaps mínimos                       │
│  space-2  │  8px     │  Padding interno de botones, icon+text              │
│  space-3  │  12px    │  Padding de inputs, gaps de lista                   │
│  space-4  │  16px    │  Padding de cards, secciones                        │
│  space-5  │  20px    │  Margins de sección                                 │
│  space-6  │  24px    │  Padding de modales, gaps de grid                   │
│  space-8  │  32px    │  Separación de secciones grandes                    │
│  space-10 │  40px    │  Padding de pantalla                                │
│  space-12 │  48px    │  Separación de bloques principales                  │
│  space-16 │  64px    │  Espaciado de hero sections                         │
│  space-20 │  80px    │  Separación de páginas                              │
│  space-24 │  96px    │  Espaciado máximo                                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2.4 Bordes y Sombras

### Radio de Bordes

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TOKEN          │  VALOR   │  USO                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│  radius-none    │  0px     │  Elementos cuadrados, data tables               │
│  radius-sm      │  4px     │  Tags, badges, chips                            │
│  radius-md      │  8px     │  Botones, inputs pequeños                       │
│  radius-lg      │  12px    │  Cards, modales, contenedores                   │
│  radius-xl      │  16px    │  Cards grandes, hero cards                      │
│  radius-2xl     │  24px    │  Pantallas modales, onboarding                  │
│  radius-full    │  9999px  │  Avatares, botones pill, badges circulares      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Sombras

```css
/* Sombra Sutil (Elevación baja) */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);

/* Sombra Media (Cards, botones) */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 
             0 2px 4px -2px rgba(0, 0, 0, 0.3);

/* Sombra Grande (Modales, dropdowns) */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 
             0 4px 6px -4px rgba(0, 0, 0, 0.4);

/* Sombra Extra (Toasts, notificaciones) */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 
             0 8px 10px -6px rgba(0, 0, 0, 0.5);

/* Glow Dorado (Efecto especial) */
--shadow-gold: 0 0 20px rgba(255, 215, 0, 0.3),
               0 0 40px rgba(255, 215, 0, 0.1);

/* Glow Rojo (Daño, alerta) */
--shadow-red: 0 0 20px rgba(220, 38, 38, 0.4),
              0 0 40px rgba(220, 38, 38, 0.2);

/* Glow Verde (Éxito) */
--shadow-green: 0 0 20px rgba(34, 197, 94, 0.4),
                0 0 40px rgba(34, 197, 94, 0.2);
```

## 2.5 Breakpoints

```typescript
// tokens/breakpoints.ts
export const breakpoints = {
  xs: '320px',   // Móviles pequeños
  sm: '640px',   // Móviles grandes
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops
  xl: '1280px',  // Desktops
  '2xl': '1536px', // Pantallas grandes
} as const;
```


---

# 3. ARQUITECTURA DE INFORMACIÓN

## 3.1 Mapa de Navegación

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   🏠 AUTH (No autenticado)                                                  │
│   ├── /login                    → Pantalla de Login                         │
│   ├── /register                 → Pantalla de Registro                      │
│   └── /forgot-password          → Recuperación de contraseña                │
│                                                                             │
│   🚀 ONBOARDING (Primera vez)                                               │
│   ├── /onboarding/welcome       → Bienvenida + Propósito                   │
│   ├── /onboarding/archetype     → Selección de Arquetipo                   │
│   ├── /onboarding/oath          → Juramento de los 100 días                │
│   └── /onboarding/notifications → Configuración de notificaciones          │
│                                                                             │
│   📊 DASHBOARD (Principal)                                                   │
│   ├── /dashboard                → Dashboard principal                        │
│   │   ├── Avatar Section        → Avatar + Stats principales                │
│   │   ├── Health Bar            → Corazones + Estado                        │
│   │   ├── Progress Calendar     → Calendario de 100 días                    │
│   │   ├── Daily Tasks           → Tareas del día                            │
│   │   └── Vector Status         → Estado de los 5 vectores                  │
│   │                                                                          │
│   ├── /dashboard/tasks          → Gestión de tareas                          │
│   ├── /dashboard/history        → Historial de progreso                      │
│   └── /dashboard/stats          → Estadísticas detalladas                    │
│                                                                             │
│   🛠️ ARSENAL (Herramientas)                                                  │
│   ├── /arsenal                  → Grid de herramientas                       │
│   ├── /arsenal/library          → Biblioteca de Poder                        │
│   ├── /arsenal/temple           → Templo del Hierro                          │
│   ├── /arsenal/meditation       → Cámara de Meditación                       │
│   ├── /arsenal/journal          → Bitácora de Guerra                         │
│   ├── /arsenal/vitality         → Vitalidad Sexual                           │
│   ├── /arsenal/sculptor         → Escultor Facial                            │
│   ├── /arsenal/hypnosis         → Crea tu Hipnosis [Premium]                 │
│   ├── /arsenal/mobility         → Movilidad Táctica                          │
│   └── /arsenal/focus            → Focus Chamber                              │
│                                                                             │
│   🏪 TIENDA (Economía)                                                       │
│   ├── /shop                     → Catálogo de items                          │
│   ├── /shop/category/[id]       → Filtrado por categoría                     │
│   └── /shop/item/[id]           → Detalle de item                            │
│                                                                             │
│   🎒 INVENTARIO                                                              │
│   ├── /inventory                → Items equipados y disponibles              │
│   └── /inventory/locked         → Items bloqueados (preview)                 │
│                                                                             │
│   👤 PERFIL                                                                  │
│   ├── /profile                  → Perfil del usuario                         │
│   ├── /profile/settings         → Configuración                              │
│   ├── /profile/achievements     → Logros y medallas                          │
│   └── /profile/images           → Historial de imágenes del avatar           │
│                                                                             │
│   💳 SUSCRIPCIÓN                                                             │
│   ├── /subscription             → Estado de suscripción                      │
│   ├── /subscription/upgrade     → Planes disponibles                         │
│   └── /subscription/history     → Historial de pagos                         │
│                                                                             │
│   ⚰️ LIMBO (Avatar muerto)                                                   │
│   └── /limbo                    → Resurrección del avatar                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 3.2 Jerarquía Visual por Pantalla

### Dashboard Principal

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ZONA                    │  PRIORIDAD  │  ATENCIÓN ESPERADA                │
├─────────────────────────────────────────────────────────────────────────────┤
│  Header (Nivel + BTC)    │  ALTA       │  20% - Identificación inmediata   │
│  Avatar Central          │  CRÍTICA    │  40% - Foco principal             │
│  Health Bar              │  ALTA       │  15% - Estado de supervivencia    │
│  Daily Tasks             │  MEDIA      │  15% - Acción requerida           │
│  Vector Status           │  BAJA       │  10% - Contexto adicional         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 4. FLUJOS DE USUARIO

## 4.1 Flujo de Onboarding

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   INICIO                                                                    │
│     │                                                                       │
│     ▼                                                                       │
│   ┌─────────────────┐                                                       │
│   │  /register      │  ← Registro con email/password                       │
│   │  o Google       │                                                       │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐     NO     ┌─────────────────┐                       │
│   │  ¿Verificó      │───────────→│  Reenviar email │                       │
│   │  email?         │            │  de verificación│                       │
│   └────────┬────────┘            └─────────────────┘                       │
│            │ SÍ                                                            │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  /onboarding/   │  ← Propósito, promesa de transformación              │
│   │  welcome        │  ← Video introductorio (opcional)                    │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  /onboarding/   │  ← 6 arquetipos con preview visual                   │
│   │  archetype      │  ← Stats de cada arquetipo                           │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  /onboarding/   │  ← Juramento de compromiso                          │
│   │  oath           │  ← Firma digital (tap para confirmar)                │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  /onboarding/   │  ← Permisos de notificaciones                        │
│   │  notifications  │  ← Configuración de horario ideal                    │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  /dashboard     │  ← ¡Bienvenido a tu transformación!                  │
│   │  (Primer día)   │  ← Tutorial interactivo de tareas                    │
│   └─────────────────┘                                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 4.2 Flujo de Completar Tarea

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   DASHBOARD                                                                 │
│     │                                                                       │
│     ▼                                                                       │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  📋 TAREAS DE HOY - DÍA 1                                          │   │
│   │                                                                     │   │
│   │  ☐ Meditación Matutina (15 min)                    [+5 BTC]        │   │
│   │  ☐ Ducha de Agua Fría                              [+3 BTC]        │   │
│   │  ☐ Lectura de Poder (30 min)                       [+5 BTC]        │   │
│   │  ☐ Entrenamiento de Fuerza                         [+10 BTC]       │   │
│   │  ☐ Journal Nocturno                                [+5 BTC]        │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│            │                                                                │
│            │ Tap en tarea                                                    │
│            ▼                                                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  🧘 MEDITACIÓN MATUTINA                                            │   │
│   │                                                                     │   │
│   │  [INICIAR TEMPORIZADOR]                                            │   │
│   │                                                                     │   │
│   │  o [REGISTRAR MANUALMENTE]                                         │   │
│   │                                                                     │   │
│   │  Duración: 15 minutos recomendados                                 │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│            │                                                                │
│            │ Iniciar timer / Confirmar manual                               │
│            ▼                                                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  ⏱️ 14:58 ... 00:00                                                │   │
│   │                                                                     │   │
│   │  [CANCELAR]                              [COMPLETAR]               │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│            │                                                                │
│            │ Timer completo / Confirmar                                     │
│            ▼                                                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  ✅ ¡TAREA COMPLETADA!                                             │   │
│   │                                                                     │   │
│   │  +5 BTC ganados                                                    │   │
│   │  +1 punto AURA                                                     │   │
│   │                                                                     │   │
│   │  [CONTINUAR]                                                       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│            │                                                                │
│            ▼                                                                │
│   Actualización en tiempo real del avatar y stats                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 4.3 Flujo de Judgement Night

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   23:59                                                                     │
│     │                                                                       │
│     ▼                                                                       │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  ⚠️ JUDGEMENT NIGHT EN 1 MINUTO                                    │   │
│   │                                                                     │   │
│   │  Completa tus tareas pendientes                                    │   │
│   │                                                                     │   │
│   │  [VER TAREAS PENDIENTES]                                           │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│            │                                                                │
│            │ 00:00 - Fin del día                                            │
│            ▼                                                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                    🔥 JUDGEMENT NIGHT 🔥                            │   │
│   │                                                                     │   │
│   │  [AVATAR EVALUANDO...]                                              │   │
│   │                                                                     │   │
│   │  Calculando resultados del día...                                  │   │
│   │  [████████████░░░░░░░░] 60%                                        │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│            │                                                                │
│            │ Cálculo completo                                               │
│            ▼                                                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  ✅ DÍA COMPLETADO                                                  │   │
│   │  Tareas: 5/5 (100%)  BTC: +28  Racha: 7 días 🔥                    │   │
│   │                                                                     │   │
│   │  🎉 ¡NIVEL 8 DESBLOQUEADO!                                          │   │
│   │  Has ascendido a: MILLONARIO                                        │   │
│   │                                                                     │   │
│   │  [VER NUEVO AVATAR]          [CONTINUAR AL DÍA 48]                 │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 5. ESPECIFICACIONES DE PANTALLAS

## 5.1 Login (/login)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                    ⚡ METAMEN100                                    │   │
│   │              "Forja tu Leyenda en 100 Días"                       │   │
│   │                                                                     │   │
│   │  ┌─────────────────────────────────────────────────────────────┐   │   │
│   │  │  📧 Email                                                   │   │   │
│   │  │  [                                          ]               │   │   │
│   │  └─────────────────────────────────────────────────────────────┘   │   │
│   │                                                                     │   │
│   │  ┌─────────────────────────────────────────────────────────────┐   │   │
│   │  │  🔒 Contraseña                                              │   │   │
│   │  │  [                                          ] [👁️]          │   │   │
│   │  └─────────────────────────────────────────────────────────────┘   │   │
│   │                                                                     │   │
│   │  ┌─────────────────────────────────────────────────────────────┐   │   │
│   │  │                    [    INICIAR SESIÓN    ]                 │   │   │
│   │  └─────────────────────────────────────────────────────────────┘   │   │
│   │                                                                     │   │
│   │  ────────────────  o  ────────────────                             │   │
│   │                                                                     │   │
│   │  ┌─────────────────────────────────────────────────────────────┐   │   │
│   │  │              [    CONTINUAR CON GOOGLE    ]                 │   │   │
│   │  └─────────────────────────────────────────────────────────────┘   │   │
│   │                                                                     │   │
│   │  ¿No tienes cuenta? [Regístrate ahora]                             │   │
│   │  ¿Olvidaste tu contraseña? [Recuperar]                             │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones Técnicas

| Elemento | Especificación |
|----------|----------------|
| **Background** | `#0A0A0A` con gradiente sutil |
| **Card Container** | `#141414`, `border-radius: 24px`, `padding: 40px` |
| **Logo** | Icono + "METAMEN100" en dorado `#FFD700`, `font-weight: 900` |
| **Inputs** | `#2A2A2A` bg, `#4A4A4A` border, `#FFFFFF` text, focus: `#FFD700` border |
| **Botón Primario** | Gradient dorado, `#0A0A0A` text, `height: 48px`, `border-radius: 12px` |
| **Botón Google** | `#FFFFFF` bg, `#0A0A0A` text, icono Google |
| **Links** | `#FFD700` color, underline on hover |

## 5.2 Dashboard Principal (/dashboard)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ⚡ METAMEN100              NIVEL 7    💰 1,250    🔔    👤          │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                         🔥 7 DÍAS                                    │  │
│  │                    ┌─────────────────┐                                │  │
│  │                    │   [AVATAR]      │                                │  │
│  │                    │   NIVEL 7       │                                │  │
│  │                    │   PUDIENTE      │                                │  │
│  │                    └─────────────────┘                                │  │
│  │              ┌─────────────────────────────────────┐                  │  │
│  │              │  ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️  │                  │  │
│  │              │         8/10 CORAZONES              │                  │  │
│  │              └─────────────────────────────────────┘                  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  📅 PROGRESO - DÍA 47 DE 100                                         │  │
│  │  [D1][D2][D3][D4][D5][D6][D7][D8][D9][D10]...                        │  │
│  │   ✅   ✅   ✅   ✅   ✅   ✅   ✅   ⬅️  ☐   ☐                        │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  📋 TAREAS DE HOY                                                    │  │
│  │  ✅ Meditación Matutina                              +5 BTC  [DONE]  │  │
│  │  ✅ Ducha de Agua Fría                               +3 BTC  [DONE]  │  │
│  │  ☐  Lectura de Poder (20 min restantes)              +5 BTC  [DO]    │  │
│  │  ☐  Entrenamiento de Fuerza                         +10 BTC  [DO]    │  │
│  │  ☐  Journal Nocturno                                 +5 BTC  [DO]    │  │
│  │  Progreso: 2/5 (40%)                    [VER TODAS]                  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  📊 ESTADO DE VECTORES                                               │  │
│  │  ✨ AURA      [████████░░░░░░░░░░░░] 45%  Nivel 4                    │  │
│  │  😤 JAWLINE   [██████░░░░░░░░░░░░░░] 35%  Nivel 3                    │  │
│  │  💰 WEALTH    [████████████░░░░░░░░] 60%  Nivel 6                    │  │
│  │  💪 PHYSIQUE  [██████████░░░░░░░░░░] 50%  Nivel 5                    │  │
│  │  🏠 ENV       [██████████████░░░░░░] 70%  Nivel 7                    │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🛠️ ARSENAL                      [VER TODO]                          │  │
│  │  [📚] [🏋️] [🧘] [📓] [⚡] [😤] [🎵] [🤸] [🎯]                      │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🏠    🛠️    🏪    🎒    👤                                          │  │
│  │  Dash  Tools  Shop   Inv   Prof                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones Técnicas - Sección Avatar

| Elemento | Especificación |
|----------|----------------|
| **Avatar Container** | `width: 280px`, `height: 280px`, centrado |
| **Avatar Image** | `border-radius: 16px`, `object-fit: cover` |
| **Glow Effect** | `box-shadow: 0 0 40px rgba(255, 215, 0, 0.2)` |
| **Level Badge** | Position absolute bottom, `#FFD700` bg, `#0A0A0A` text |
| **Health Hearts** | Iconos de 24px, filled = `#DC2626`, empty = `#4A4A4A` |
| **Racha Badge** | Icono fuego `#F97316`, número en bold |

### Especificaciones Técnicas - Vector Bars

```css
.vector-bar {
  height: 12px;
  border-radius: 6px;
  background: #2A2A2A;
  overflow: hidden;
}

.vector-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.5s ease-out;
}

.vector-aura { background: linear-gradient(90deg, #FFD700, #FFF8DC); }
.vector-jawline { background: linear-gradient(90deg, #F97316, #FFD700); }
.vector-wealth { background: linear-gradient(90deg, #22C55E, #4ADE80); }
.vector-physique { background: linear-gradient(90deg, #DC2626, #EF4444); }
.vector-env { background: linear-gradient(90deg, #3B82F6, #06B6D4); }
```

## 5.3 Arsenal (/arsenal)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ⚡ METAMEN100              🛠️ TU ARSENAL                            │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  📚 BIBLIOTECA DE PODER                                              │  │
│  │  [📚]  Conocimiento que transforma  [ACCEDER]                        │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🏋️ TEMPLO DEL HIERRO                                                │  │
│  │  [🏋️]  Rutinas de élite  [ACCEDER]                                   │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🧘 CÁMARA DE MEDITACIÓN                                             │  │
│  │  [🧘]  Domina tu mente  [ACCEDER]                                    │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  📓 BITÁCORA DE GUERRA                                               │  │
│  │  [📓]  Tu mente escrita  [ACCEDER]                                   │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ⚡ VITALIDAD SEXUAL                                                 │  │
│  │  [⚡]  Energía masculina  [ACCEDER]                                  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  😤 ESCULTOR FACIAL                                                  │  │
│  │  [😤]  Define tu mandíbula  [ACCEDER]                                │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🎵 CREA TU HIPNOSIS              ⭐ PREMIUM                          │  │
│  │  [🎵]  Tu voz, tu transformación  [🔒 DESBLOQUEAR CON PREMIUM]       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🤸 MOVILIDAD TÁCTICA                                                │  │
│  │  [🤸]  Cuerpo funcional  [ACCEDER]                                   │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🎯 FOCUS CHAMBER                                                    │  │
│  │  [🎯]  Elimina distracciones  [ACCEDER]                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Gradientes por Herramienta

```css
.tool-library { background: linear-gradient(135deg, #8B5CF6, #3B82F6); }
.tool-temple { background: linear-gradient(135deg, #DC2626, #F97316); }
.tool-meditation { background: linear-gradient(135deg, #06B6D4, #3B82F6); }
.tool-journal { background: linear-gradient(135deg, #8B5CF6, #EC4899); }
.tool-vitality { background: linear-gradient(135deg, #F97316, #EAB308); }
.tool-sculptor { background: linear-gradient(135deg, #F97316, #DC2626); }
.tool-hypnosis { background: linear-gradient(135deg, #FFD700, #8B5CF6); }
.tool-mobility { background: linear-gradient(135deg, #22C55E, #06B6D4); }
.tool-focus { background: linear-gradient(135deg, #3B82F6, #06B6D4); }
```


## 5.4 Focus Chamber (/arsenal/focus)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ←  🎯 FOCUS CHAMBER                                                 │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                         ⏱️ 25:00                                     │  │
│  │                    ┌─────────────┐                                   │  │
│  │                    │  [CIRCLE    │                                   │  │
│  │                    │   TIMER]    │                                   │  │
│  │                    └─────────────┘                                   │  │
│  │              ┌─────────────────────────────────────┐                 │  │
│  │              │  OBJETIVO: "Terminar capítulo 3"    │                 │  │
│  │              └─────────────────────────────────────┘                 │  │
│  │              [    PAUSAR    ]      [   DETENER   ]                  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  CONFIGURACIÓN                                                       │  │
│  │  Modo:  ● Pomodoro (25min)  ○ Deep Work (50min)  ○ Ultra (90min)   │  │
│  │  Sonido:  ● Blanco  ○ Lluvia  ○ Café  ○ Binaural                    │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ESTADÍSTICAS DE HOY                                                 │  │
│  │  Sesiones: 2/4  |  Tiempo: 50 min                                    │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Timer Circular - Especificaciones

```css
.focus-timer {
  width: 240px;
  height: 240px;
  position: relative;
}

.timer-circle-bg {
  fill: none;
  stroke: #2A2A2A;
  stroke-width: 8;
}

.timer-circle-progress {
  fill: none;
  stroke: url(#gradient-gold);
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 754; /* 2 * PI * 120 */
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
  transform: rotate(-90deg);
  transform-origin: center;
}

.timer-text {
  font-size: 48px;
  font-weight: 700;
  fill: #FFFFFF;
  text-anchor: middle;
  dominant-baseline: middle;
}
```

## 5.5 Judgement Night Modal

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                    🔥 JUDGEMENT NIGHT 🔥                              │  │
│  │                                                                       │  │
│  │  [AVATAR EVALUANDO...]                                                │  │
│  │                                                                       │  │
│  │  Calculando resultados del día...                                    │  │
│  │  [████████████░░░░░░░░] 60%                                          │  │
│  │                                                                       │  │
│  │  ─────────────────────────────────────────────────────────────────   │  │
│  │                                                                       │  │
│  │  ✅ DÍA COMPLETADO                                                    │  │
│  │  Tareas: 5/5 (100%)  BTC: +28  Racha: 7 días 🔥                      │  │
│  │                                                                       │  │
│  │  VECTORES ACTUALIZADOS:                                              │  │
│  │  ✨ AURA     +3  [████████░░░] 45%                                   │  │
│  │  💪 PHYSIQUE +5  [██████████░] 50%                                   │  │
│  │  💰 WEALTH   +2  [████████████░░] 60%                                │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │  🎉 ¡NIVEL 8 DESBLOQUEADO!                                  │     │  │
│  │  │  Has ascendido a: MILLONARIO                                │     │  │
│  │  │  Nuevo escenario: Penthouse                                 │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  │  [VER NUEVO AVATAR]          [CONTINUAR AL DÍA 48]                   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones de Animación

| Elemento | Animación | Duración | Easing |
|----------|-----------|----------|--------|
| Modal Entry | Scale 0.8 → 1, Opacity 0 → 1 | 400ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| Avatar Glow | Pulse shadow gold | 2s infinite | `ease-in-out` |
| Stats Counter | Number count up | 1000ms | `ease-out` |
| Progress Bars | Width 0 → value | 800ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Level Up Badge | Scale bounce | 600ms | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |
| Confetti | Particle explosion | 3000ms | `ease-out` |

## 5.6 Limbo (/limbo)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                    ⚰️ TU AVATAR HA CAÍDO ⚰️                          │  │
│  │                                                                       │  │
│  │  [AVATAR EN ESCALA DE GRISES]                                         │  │
│  │  ❤️ 0/10 CORAZONES  |  Día 73 de 100  |  Racha perdida: 15 días      │  │
│  │                                                                       │  │
│  │  CAUSA DE MUERTE:                                                     │  │
│  │  5 días consecutivos sin completar el 80% de tareas.                  │  │
│  │  Tu disciplina flaqueó. Tu avatar pagó el precio.                     │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │  💰 RESURRECCIÓN INMEDIATA                                  │     │  │
│  │  │  Costo: 500 BTC | Recuperas: Todo                           │     │  │
│  │  │  [RESUCITAR AHORA]                                          │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │  🔄 NUEVO COMIENZO                                          │     │  │
│  │  │  Costo: Gratis | Pierdes: Nivel, items, progreso            │     │  │
│  │  │  [REINICIAR DESDE NIVEL 1]                                  │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  │  💳 ¿No tienes suficientes BTC? [COMPRAR BTC]                        │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones Visuales - Limbo

| Elemento | Especificación |
|----------|----------------|
| **Background** | `#0A0A0A` con overlay oscuro adicional |
| **Avatar** | `filter: grayscale(100%)`, opacity 0.7 |
| **Hearts** | Todos `#4A4A4A` (vacíos), animación de pulso lento |
| **Mensaje** | `#DC2626` color, `font-weight: 700` |
| **Resurrect Button** | Gradient dorado, más prominente |
| **Restart Button** | `#2A2A2A` bg, `#8A8A8A` border |

---

# 6. COMPONENTES UI

## 6.1 Botones

### Variantes de Botón

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  VARIANTE          │  VISUAL                              │  USO            │
├─────────────────────────────────────────────────────────────────────────────┤
│  Primary           │  Fondo dorado gradiente              │  Acción main    │
│                    │  Texto negro bold                    │  CTA principal  │
│                    │  Hover: brillo aumentado             │                 │
├─────────────────────────────────────────────────────────────────────────────┤
│  Secondary         │  Fondo transparente                  │  Acción secund. │
│                    │  Borde dorado 2px                    │  Cancelar       │
│                    │  Texto dorado                        │  Alternativa    │
├─────────────────────────────────────────────────────────────────────────────┤
│  Tertiary          │  Fondo #2A2A2A                       │  Acción subtle  │
│                    │  Sin borde                           │  Opciones       │
│                    │  Texto blanco                        │  Menos important│
├─────────────────────────────────────────────────────────────────────────────┤
│  Danger            │  Fondo rojo gradiente                │  Destructivo    │
│                    │  Texto blanco                        │  Eliminar       │
│                    │  Hover: rojo más intenso             │  Peligro        │
├─────────────────────────────────────────────────────────────────────────────┤
│  Ghost             │  Fondo transparente                  │  Icon buttons   │
│                    │  Hover: #1E1E1E bg                   │  Toolbar        │
│                    │  Texto/icono blanco                  │  Subtle actions │
├─────────────────────────────────────────────────────────────────────────────┤
│  Disabled          │  Fondo #2A2A2A                       │  No disponible  │
│                    │  Texto #4A4A4A                       │  Bloqueado      │
│                    │  Cursor: not-allowed                 │                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones Técnicas - Botones

```typescript
// components/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

// Tamaños
const sizes = {
  sm: { height: '36px', padding: '0 16px', fontSize: '14px' },
  md: { height: '44px', padding: '0 24px', fontSize: '14px' },
  lg: { height: '52px', padding: '0 32px', fontSize: '16px' },
};

// Border radius
const borderRadius = '12px';
```

## 6.2 Inputs

### Variantes de Input

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTADO            │  VISUAL                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Default           │  BG: #2A2A2A, Border: transparent                    │
│                    │  Placeholder: #4A4A4A                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  Focus             │  Border: #FFD700 2px, Shadow: gold glow sutil        │
│                    │  Label: #FFD700                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  Error             │  Border: #DC2626 2px, Icon: alerta                   │
│                    │  Message: #DC2626 debajo                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  Success           │  Border: #22C55E 2px, Icon: checkmark                │
│                    │  Subtle green bg tint                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  Disabled          │  BG: #1E1E1E, Text: #4A4A4A                          │
│                    │  Cursor: not-allowed                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 6.3 Cards

### Variantes de Card

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TIPO              │  ESPECIFICACIÓN                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  Default           │  BG: #141414, Radius: 16px, Padding: 24px            │
│                    │  Shadow: shadow-md, Hover: elevación sutil           │
├─────────────────────────────────────────────────────────────────────────────┤
│  Interactive       │  Hover: border dorado 1px, cursor pointer            │
│                    │  Active: scale 0.98                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  Highlighted       │  Border: dorado 2px, Glow sutil                      │
│                    │  Para cards premium/importantes                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  Flat              │  Sin shadow, BG: #1E1E1E                             │
│                    │  Para listas, items anidados                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  Outlined          │  BG: transparent, Border: #2A2A2A 1px                │
│                    │  Para secciones secundarias                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 6.4 Modales

### Especificaciones de Modal

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ELEMENTO          │  ESPECIFICACIÓN                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  Overlay           │  BG: rgba(0, 0, 0, 0.8), backdrop-blur: 4px          │
│                    │  Click outside: cierra modal                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  Container         │  BG: #141414, Radius: 24px                           │
│                    │  Max-width: 480px (mobile), 560px (desktop)          │
│                    │  Max-height: 90vh, overflow: auto                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  Header            │  Padding: 24px, Border-bottom: #2A2A2A 1px           │
│                    │  Title: 20px bold, Close: icon X                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  Body              │  Padding: 24px                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  Footer            │  Padding: 24px, Border-top: #2A2A2A 1px              │
│                    │  Buttons: flex, gap: 12px, justify-end               │
├─────────────────────────────────────────────────────────────────────────────┤
│  Animation Entry   │  Scale: 0.95 → 1, Opacity: 0 → 1                     │
│                    │  Duration: 300ms, Easing: ease-out                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Animation Exit    │  Scale: 1 → 0.95, Opacity: 1 → 0                     │
│                    │  Duration: 200ms, Easing: ease-in                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 6.5 Progress Indicators

### Barra de Progreso

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TIPO              │  ESPECIFICACIÓN                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  Linear            │  Height: 8px, Radius: 4px, BG: #2A2A2A               │
│                    │  Fill: gradient según contexto, animate width        │
├─────────────────────────────────────────────────────────────────────────────┤
│  Circular          │  Size: 120px, Stroke: 8px                            │
│                    │  BG stroke: #2A2A2A, Progress: gradient              │
│                    │  Text center: percentage                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  Segmented         │  Segments: 10, Size: 24px each                       │
│                    │  Active: dorado, Inactive: #2A2A2A                  │
│                    │  Para días completados                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  Dots              │  Size: 8px, Gap: 8px                                 │
│                    │  Active: #FFD700, Inactive: #4A4A4A                 │
│                    │  Para steps, onboarding                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 6.6 Badges y Tags

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TIPO              │  ESPECIFICACIÓN                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  Level Badge       │  BG: gradient dorado, Text: negro bold               │
│                    │  Shape: pill, Padding: 4px 12px                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  BTC Badge         │  BG: #141414, Border: dorado 1px                     │
│                    │  Icon: 🪙, Text: dorado                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Premium Badge     │  BG: gradient purple/gold, Icon: ⭐                  │
│                    │  Glow effect, animación sutil                        │
├─────────────────────────────────────────────────────────────────────────────┤
│  Status Tag        │  Success: #22C55E bg, Error: #DC2626 bg              │
│                    │  Warning: #EAB308 bg, Info: #3B82F6 bg               │
├─────────────────────────────────────────────────────────────────────────────┤
│  Vector Tag        │  Color según vector, Icono correspondiente           │
│                    │  Aura: dorado, Jawline: naranja, etc.               │
└─────────────────────────────────────────────────────────────────────────────┘
```


---

# 7. ANIMACIONES Y MICRO-INTERACCIONES

## 7.1 Principios de Animación

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    PRINCIPIOS DE ANIMACIÓN                                   ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  1. PROPÓSITO                                                                ║
║     "Cada animación debe comunicar algo: estado, feedback, o transición."   ║
║                                                                              ║
║  2. VELOCIDAD                                                                ║
║     • Micro-interacciones: 150-200ms                                        ║
║     • Transiciones de página: 300-400ms                                     ║
║     • Animaciones de celebración: 800-1500ms                                ║
║                                                                              ║
║  3. EASING                                                                   ║
║     • Entradas: ease-out (deceleración)                                     ║
║     • Salidas: ease-in (aceleración)                                        ║
║     • Interactivas: ease-in-out                                             ║
║     • Bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)                        ║
║                                                                              ║
║  4. CONSISTENCIA                                                             ║
║     "Mismos patrones de movimiento en toda la app."                         ║
║                                                                              ║
║  5. PERFORMANCE                                                              ║
║     • Usar transform y opacity (GPU accelerated)                            ║
║     • Evitar animar layout properties (width, height, top, left)            ║
║     • Reducir motion para prefers-reduced-motion                            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## 7.2 Animaciones por Componente

### Botón Press

```css
@keyframes buttonPress {
  0% { transform: scale(1); }
  50% { transform: scale(0.96); }
  100% { transform: scale(1); }
}

.btn-press {
  animation: buttonPress 150ms ease-out;
}
```

### Card Hover

```css
.card {
  transition: transform 200ms ease-out, box-shadow 200ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.card:active {
  transform: translateY(-2px) scale(0.98);
}
```

### Task Complete

```css
@keyframes taskComplete {
  0% {
    transform: scale(1);
    border-color: #4A4A4A;
  }
  50% {
    transform: scale(1.02);
    border-color: #22C55E;
  }
  100% {
    transform: scale(1);
    border-color: #22C55E;
  }
}

.task-complete-animation {
  animation: taskComplete 300ms ease-out;
}
```

### BTC Gain

```css
@keyframes btcFloat {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-40px) scale(1.2);
  }
}

.btc-gain {
  animation: btcFloat 1000ms ease-out forwards;
}
```

### Heart Loss

```css
@keyframes heartBreak {
  0% {
    transform: scale(1);
    filter: none;
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(0.8);
    filter: grayscale(100%);
  }
  100% {
    transform: scale(1);
    filter: grayscale(100%);
  }
}

.heart-loss {
  animation: heartBreak 500ms ease-out;
}
```

### Level Up

```css
@keyframes levelUp {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.6);
  }
}

.level-up-badge {
  animation: levelUp 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards,
             glowPulse 2s ease-in-out infinite 600ms;
}
```

### Page Transitions

```css
/* Slide In Right */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide Out Left */
@keyframes slideOutLeft {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-30%);
    opacity: 0;
  }
}

.page-enter {
  animation: slideInRight 300ms ease-out;
}

.page-exit {
  animation: slideOutLeft 300ms ease-in;
}
```

## 7.3 Animaciones de Avatar

### Idle Animation

```css
@keyframes avatarIdle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.avatar-idle {
  animation: avatarIdle 3s ease-in-out infinite;
}
```

### Avatar Evolution

```css
@keyframes avatarEvolve {
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  25% {
    transform: scale(0.95);
    filter: brightness(1.5);
  }
  50% {
    transform: scale(1.05);
    filter: brightness(2);
  }
  75% {
    transform: scale(1.02);
    filter: brightness(1.2);
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
}

.avatar-evolve {
  animation: avatarEvolve 1500ms ease-out;
}
```

### Avatar Damage

```css
@keyframes avatarDamage {
  0%, 100% {
    transform: translateX(0);
    filter: none;
  }
  20% {
    transform: translateX(-8px);
    filter: sepia(100%) hue-rotate(-50deg) saturate(200%);
  }
  40% {
    transform: translateX(8px);
    filter: sepia(100%) hue-rotate(-50deg) saturate(200%);
  }
  60% {
    transform: translateX(-4px);
    filter: sepia(50%) hue-rotate(-50deg) saturate(150%);
  }
  80% {
    transform: translateX(4px);
    filter: sepia(25%) hue-rotate(-50deg) saturate(125%);
  }
}

.avatar-damage {
  animation: avatarDamage 500ms ease-out;
}
```

## 7.4 Skeleton Loaders

```css
@keyframes skeletonShimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #1E1E1E 25%,
    #2A2A2A 50%,
    #1E1E1E 75%
  );
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s ease-in-out infinite;
  border-radius: 8px;
}
```

---

# 8. RESPONSIVE Y ADAPTATIVO

## 8.1 Breakpoints y Adaptaciones

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  BREAKPOINT  │  DISPOSITIVO        │  ADAPTACIONES CLAVE                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  < 640px     │  Mobile (base)      │  • Navbar inferior                       │
│  (sm)        │                     │  • Single column layout                  │
│              │                     │  • Avatar: 200px                         │
│              │                     │  • Cards: full width                     │
│              │                     │  • Modales: full screen                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  640-768px   │  Mobile Large       │  • Navbar inferior                       │
│  (md)        │                     │  • Grid 2 columns en arsenal             │
│              │                     │  • Avatar: 240px                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  768-1024px  │  Tablet             │  • Sidebar opcional                      │
│  (lg)        │                     │  • Grid 2-3 columns                      │
│              │                     │  • Avatar: 280px                         │
│              │                     │  • Dashboard: 2 columnas                 │
├─────────────────────────────────────────────────────────────────────────────┤
│  1024-1280px │  Laptop             │  • Sidebar fija                          │
│  (xl)        │                     │  • Grid 3-4 columns                      │
│              │                     │  • Avatar: 320px                         │
│              │                     │  • Dashboard: 3 columnas                 │
├─────────────────────────────────────────────────────────────────────────────┤
│  > 1280px    │  Desktop            │  • Sidebar fija + espaciado amplio       │
│  (2xl)       │                     │  • Grid 4 columns                        │
│              │                     │  • Avatar: 360px                         │
│              │                     │  • Layout maximizado                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 8.2 Layout Mobile

```
┌─────────────────────────────┐
│  HEADER (64px)              │
│  [Logo]    [BTC] [Notif]    │
├─────────────────────────────┤
│                             │
│  CONTENIDO SCROLLABLE       │
│                             │
│  ┌─────────────────────┐    │
│  │  AVATAR SECTION     │    │
│  │  [     200px      ] │    │
│  │  [    AVATAR      ] │    │
│  │  [               ]  │    │
│  └─────────────────────┘    │
│                             │
│  ┌─────────────────────┐    │
│  │  HEALTH BAR         │    │
│  │  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  │    │
│  └─────────────────────┘    │
│                             │
│  ┌─────────────────────┐    │
│  │  DAILY TASKS        │    │
│  │  (stack vertical)   │    │
│  └─────────────────────┘    │
│                             │
│  ┌─────────────────────┐    │
│  │  VECTOR STATUS      │    │
│  │  (stack vertical)   │    │
│  └─────────────────────┘    │
│                             │
│  ┌─────────────────────┐    │
│  │  ARSENAL GRID       │    │
│  │  [1] [2]            │    │
│  │  [3] [4]            │    │
│  └─────────────────────┘    │
│                             │
├─────────────────────────────┤
│  NAVBAR (64px)              │
│  🏠  🛠️  🏪  🎒  👤          │
│  Dash Tool Shop Inv Prof    │
└─────────────────────────────┘
```

## 8.3 Layout Desktop

```
┌────────┬──────────────────────────────────────────────────────────┐
│        │  HEADER (64px)                                           │
│        │  [Logo]              [Nivel] [BTC] [Notif] [Profile]     │
│        ├──────────────────────────────────────────────────────────┤
│        │                                                          │
│        │  ┌────────────────────┐  ┌─────────────────────────────┐ │
│        │  │                    │  │  📋 TAREAS DE HOY           │ │
│        │  │   AVATAR           │  │                             │ │
│        │  │   320px            │  │  ✅ Tarea 1        [DONE]   │ │
│        │  │                    │  │  ☐ Tarea 2          [DO]    │ │
│        │  │   [   IMAGE    ]   │  │  ☐ Tarea 3          [DO]    │ │
│        │  │                    │  │                             │ │
│        │  │   ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  │  │  Progreso: 33%              │ │
│        │  │                    │  └─────────────────────────────┘ │
│        │  │   🔥 7 DÍAS        │                                  │
│        │  │                    │  ┌─────────────────────────────┐ │
│        │  └────────────────────┘  │  📊 VECTORES                │ │
│        │                          │                             │ │
│        │  ┌────────────────────┐  │  ✨ AURA    [████░░░░░░]   │ │
│        │  │  📅 PROGRESO       │  │  💪 PHYSIQUE[██████░░░░]   │ │
│        │  │  [D1][D2][D3]...   │  │  💰 WEALTH  [████████░░]   │ │
│        │  └────────────────────┘  └─────────────────────────────┘ │
│        │                                                          │
│        │  ┌─────────────────────────────────────────────────────┐ │
│        │  │  🛠️ ARSENAL                                         │ │
│        │  │  [1] [2] [3] [4] [5] [6] [7] [8] [9]                │ │
│        │  └─────────────────────────────────────────────────────┘ │
│        │                                                          │
├────────┤                                                          │
│SIDEBAR │                                                          │
│(240px) │                                                          │
│        │                                                          │
│  🏠    │                                                          │
│ Dash   │                                                          │
│        │                                                          │
│  🛠️    │                                                          │
│ Tools  │                                                          │
│        │                                                          │
│  🏪    │                                                          │
│ Shop   │                                                          │
│        │                                                          │
│  🎒    │                                                          │
│ Inv    │                                                          │
│        │                                                          │
│  👤    │                                                          │
│ Prof   │                                                          │
│        │                                                          │
└────────┴──────────────────────────────────────────────────────────┘
```

## 8.4 Touch Targets

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ELEMENTO              │  MÍNIMO  │  RECOMENDADO  │  NOTAS                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  Botones               │  44x44   │  48x48        │  Altura mínima 44px     │
│  Iconos clickeables    │  44x44   │  48x48        │  Incluir padding        │
│  Inputs                │  48px h  │  52px h       │  Fácil tocar            │
│  Cards clickeables     │  100% w  │  -            │  Full width en mobile   │
│  Navbar items          │  64x64   │  -            │  Espaciado amplio       │
│  Checkbox/Radio        │  24x24   │  32x32        │  Fácilmente tecleable   │
│  Slider handles        │  28x28   │  32x32        │  Fácil agarrar          │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 9. ACCESIBILIDAD

## 9.1 Cumplimiento WCAG 2.1 AA

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    REQUISITOS WCAG 2.1 AA                                    ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  1. PERCEPTIBLE                                                              ║
║     ✓ Contraste de texto 4.5:1 mínimo                                       ║
║     ✓ Contraste de UI components 3:1                                        ║
║     ✓ Imágenes con alt text descriptivo                                     ║
║     ✓ Contenido no depende solo de color                                    ║
║                                                                              ║
║  2. OPERABLE                                                                 ║
║     ✓ Todo funcional vía teclado                                            ║
║     ✓ Focus indicators visibles                                             ║
║     ✓ No hay traps de foco                                                  ║
║     ✓ Skip links para navegación                                            ║
║     ✓ Targets de touch 44x44px mínimo                                       ║
║                                                                              ║
║  3. COMPRENSIBLE                                                             ║
║     ✓ Lenguaje de página identificado                                       ║
║     ✓ Labels y errores de formularios claros                                ║
║     ✓ Consistencia en navegación                                            ║
║                                                                              ║
║  4. ROBUSTO                                                                  ║
║     ✓ HTML válido y semántico                                               ║
║     ✓ ARIA labels donde necesario                                           ║
║     ✓ Compatible con screen readers                                         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## 9.2 Tokens de Accesibilidad

```typescript
// tokens/a11y.ts
export const a11y = {
  // Contrast ratios (calculated)
  contrast: {
    textOnDark: 15.3, // White on #0A0A0A
    textOnCard: 13.8, // White on #141414
    goldOnDark: 8.2,  // #FFD700 on #0A0A0A
    mutedText: 4.7,   // #8A8A8A on #0A0A0A
  },

  // Focus styles
  focus: {
    outline: '2px solid #FFD700',
    outlineOffset: '2px',
    boxShadow: '0 0 0 3px rgba(255, 215, 0, 0.3)',
  },

  // Reduced motion
  reducedMotion: {
    transition: 'none',
    animation: 'none',
  },

  // Screen reader only
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  },
} as const;
```

## 9.3 Focus Management

```css
/* Focus visible (keyboard only) */
:focus-visible {
  outline: 2px solid #FFD700;
  outline-offset: 2px;
}

/* Focus within (parent highlighting) */
.focus-within:focus-within {
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.3);
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #FFD700;
  color: #0A0A0A;
  padding: 8px 16px;
  z-index: 9999;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 0;
}
```

## 9.4 ARIA Labels

```tsx
// Ejemplos de ARIA labels

// Avatar con estado
<div 
  role="img" 
  aria-label={`Avatar nivel ${level}, ${health} de 10 corazones`}
>
  <img src={avatarUrl} alt="" />
</div>

// Health bar
<div 
  role="progressbar" 
  aria-valuenow={health} 
  aria-valuemin={0} 
  aria-valuemax={10}
  aria-label={`Salud: ${health} de 10 corazones`}
>
  {/* hearts */}
</div>

// Task list
<ul aria-label="Tareas del día">
  <li>
    <button 
      aria-pressed={completed}
      aria-label={`${taskName}, ${completed ? 'completada' : 'pendiente'}, ${reward} BTC`}
    >
      {/* task content */}
    </button>
  </li>
</ul>
```

## 9.5 Modo Alto Contraste

```css
@media (prefers-contrast: high) {
  :root {
    --bg-primary: #000000;
    --bg-secondary: #000000;
    --text-primary: #FFFFFF;
    --accent-gold: #FFFF00;
    --border-width: 2px;
  }

  .card {
    border: 2px solid #FFFFFF;
  }

  .btn-primary {
    border: 2px solid #FFFFFF;
  }
}
```

## 9.6 Reducción de Movimiento

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .avatar-idle {
    animation: none;
  }

  .confetti {
    display: none;
  }
}
```


---

# 10. PROTOTIPADO Y HANDOFF

## 10.1 Estructura de Archivos de Diseño

```
design/
├── 01-foundation/
│   ├── colors.figma
│   ├── typography.figma
│   ├── spacing.figma
│   └── shadows.figma
│
├── 02-components/
│   ├── buttons.figma
│   ├── inputs.figma
│   ├── cards.figma
│   ├── modals.figma
│   ├── progress.figma
│   └── badges.figma
│
├── 03-patterns/
│   ├── navigation.figma
│   ├── forms.figma
│   ├── lists.figma
│   └── empty-states.figma
│
├── 04-screens/
│   ├── auth/
│   │   ├── login.figma
│   │   ├── register.figma
│   │   └── forgot-password.figma
│   │
│   ├── onboarding/
│   │   ├── welcome.figma
│   │   ├── archetype.figma
│   │   ├── oath.figma
│   │   └── notifications.figma
│   │
│   ├── dashboard/
│   │   ├── main.figma
│   │   ├── tasks.figma
│   │   ├── history.figma
│   │   └── stats.figma
│   │
│   ├── arsenal/
│   │   ├── grid.figma
│   │   ├── library.figma
│   │   ├── temple.figma
│   │   ├── meditation.figma
│   │   ├── journal.figma
│   │   ├── vitality.figma
│   │   ├── sculptor.figma
│   │   ├── hypnosis.figma
│   │   ├── mobility.figma
│   │   └── focus.figma
│   │
│   ├── shop/
│   │   ├── catalog.figma
│   │   └── item-detail.figma
│   │
│   ├── inventory/
│   │   └── inventory.figma
│   │
│   ├── profile/
│   │   ├── profile.figma
│   │   ├── settings.figma
│   │   └── achievements.figma
│   │
│   └── system/
│       ├── judgement-night.figma
│       └── limbo.figma
│
├── 05-prototypes/
│   ├── user-flows.figma
│   ├── interactions.figma
│   └── animations.figma
│
└── 06-assets/
    ├── icons/
    ├── illustrations/
    └── avatars/
```

## 10.2 Handoff Checklist

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ITEM                          │  CHECK  │  NOTAS                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  Figma file organizado         │  ☐     │  Pages, components, styles       │
│  Tokens exportados             │  ☐     │  JSON para Tailwind              │
│  Icons exportados (SVG)        │  ☐     │  24px, 32px, 48px                │
│  Ilustraciones (SVG/PNG)       │  ☐     │  1x, 2x, 3x                      │
│  Avatars placeholders          │  ☐     │  Todos los niveles               │
│  Animaciones documentadas      │  ☐     │  Timing, easing, triggers        │
│  Responsive specs              │  ☐     │  Breakpoints, adaptaciones       │
│  A11y notes                    │  ☐     │  Focus, labels, roles            │
│  Edge cases                    │  ☐     │  Empty, error, loading           │
│  Prototype links               │  ☐     │  Flujos principales              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 10.3 Tokens para Desarrollo

```json
{
  "token": {
    "color": {
      "bg": {
        "primary": { "value": "#0A0A0A", "type": "color" },
        "secondary": { "value": "#141414", "type": "color" },
        "tertiary": { "value": "#1E1E1E", "type": "color" }
      },
      "text": {
        "primary": { "value": "#FFFFFF", "type": "color" },
        "secondary": { "value": "#8A8A8A", "type": "color" },
        "tertiary": { "value": "#4A4A4A", "type": "color" }
      },
      "accent": {
        "gold": { "value": "#FFD700", "type": "color" },
        "red": { "value": "#DC2626", "type": "color" },
        "green": { "value": "#22C55E", "type": "color" }
      }
    },
    "font": {
      "family": {
        "sans": { "value": "Inter, system-ui, sans-serif", "type": "fontFamily" },
        "mono": { "value": "JetBrains Mono, monospace", "type": "fontFamily" }
      },
      "size": {
        "hero": { "value": "48px", "type": "fontSize" },
        "h1": { "value": "36px", "type": "fontSize" },
        "h2": { "value": "28px", "type": "fontSize" },
        "body": { "value": "14px", "type": "fontSize" }
      },
      "weight": {
        "normal": { "value": "400", "type": "fontWeight" },
        "bold": { "value": "700", "type": "fontWeight" },
        "black": { "value": "900", "type": "fontWeight" }
      }
    },
    "spacing": {
      "1": { "value": "4px", "type": "spacing" },
      "2": { "value": "8px", "type": "spacing" },
      "4": { "value": "16px", "type": "spacing" },
      "8": { "value": "32px", "type": "spacing" }
    },
    "radius": {
      "sm": { "value": "4px", "type": "borderRadius" },
      "md": { "value": "8px", "type": "borderRadius" },
      "lg": { "value": "12px", "type": "borderRadius" },
      "xl": { "value": "16px", "type": "borderRadius" },
      "full": { "value": "9999px", "type": "borderRadius" }
    },
    "shadow": {
      "sm": { "value": "0 1px 2px 0 rgba(0,0,0,0.3)", "type": "boxShadow" },
      "md": { "value": "0 4px 6px -1px rgba(0,0,0,0.4)", "type": "boxShadow" },
      "lg": { "value": "0 10px 15px -3px rgba(0,0,0,0.5)", "type": "boxShadow" },
      "gold": { "value": "0 0 20px rgba(255,215,0,0.3)", "type": "boxShadow" }
    }
  }
}
```

## 10.4 Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0A',
          secondary: '#141414',
          tertiary: '#1E1E1E',
          elevated: '#2A2A2A',
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          secondary: '#8A8A8A',
          tertiary: '#4A4A4A',
        },
        accent: {
          gold: '#FFD700',
          'gold-dark': '#B8860B',
          red: '#DC2626',
          green: '#22C55E',
          blue: '#3B82F6',
          purple: '#8B5CF6',
          orange: '#F97316',
        },
        vector: {
          aura: '#FFD700',
          jawline: '#F97316',
          wealth: '#22C55E',
          physique: '#DC2626',
          env: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: ['3rem', { lineHeight: '1.1', fontWeight: '900' }],
        h1: ['2.25rem', { lineHeight: '1.2', fontWeight: '800' }],
        h2: ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['1.375rem', { lineHeight: '1.4', fontWeight: '700' }],
        h4: ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(255, 215, 0, 0.3)',
        'gold-lg': '0 0 40px rgba(255, 215, 0, 0.4)',
        'red': '0 0 20px rgba(220, 38, 38, 0.4)',
        'green': '0 0 20px rgba(34, 197, 94, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

# 11. ANEXOS

## 11.1 Glosario de Términos UI/UX

| Término | Definición |
|---------|------------|
| **Avatar** | Representación visual del usuario en el sistema |
| **BTC** | Bitcoins - moneda virtual del sistema |
| **Componente** | Elemento UI reutilizable (botón, input, card) |
| **Dashboard** | Pantalla principal con resumen de progreso |
| **Focus Indicator** | Borde o sombra que muestra el elemento enfocado |
| **Heurística** | Principio o regla de diseño probada |
| **Judgement Night** | Evaluación diaria a las 00:00 |
| **Limbo** | Estado cuando el avatar pierde todos los corazones |
| **Micro-interacción** | Animación pequeña que da feedback de una acción |
| **Modal** | Ventana emergente que bloquea la interacción con el fondo |
| **Onboarding** | Flujo de introducción para nuevos usuarios |
| **Responsive** | Diseño que se adapta a diferentes tamaños de pantalla |
| **Racha** | Días consecutivos completando tareas |
| **Token** | Variable de diseño (color, spacing, etc.) |
| **Touch Target** | Área clickeable para interacciones táctiles |
| **Vector** | Dimensión de progreso (AURA, JAWLINE, WEALTH, PHYSIQUE, ENV) |
| **WCAG** | Web Content Accessibility Guidelines |
| **Wireframe** | Esquema visual de baja fidelidad de una pantalla |

## 11.2 Referencias y Recursos

### Diseño
- [Material Design 3](https://m3.material.io/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Tipografía
- [Inter Font](https://rsms.me/inter/)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

### Iconografía
- [Lucide Icons](https://lucide.dev/)
- [Heroicons](https://heroicons.com/)

### Animación
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)

## 11.3 Changelog

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0.0 | 2026-01-31 | Documento inicial - Sistema de diseño completo |

---

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                              FIN DEL DOCUMENTO                                                   ║
║                                                                                                  ║
║                    "Diseño que inspira. Interfaz que transforma."                               ║
║                                                                                                  ║
║                    UI/UX Design Specification v1.0                                               ║
║                    METAMEN100 - TOP-100 WORLDWIDE READY                                          ║
║                                                                                                  ║
║                    Total de líneas: 2,847+                                                       ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```


---

# 12. ESPECIFICACIONES ADICIONALES DE PANTALLAS

## 12.1 Onboarding - Selección de Arquetipo (/onboarding/archetype)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ←                                                                    │  │
│  │                                                                       │  │
│  │              ELIGE TU ARQUETIPO                                       │  │
│  │                                                                       │  │
│  │  "Tu arquetipo define tu estilo visual y tu camino de evolución"    │  │
│  │                                                                       │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │  │
│  │  │  [RASTAS]   │  │  [MUSCLES]  │  │  [PECAS]    │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │  [IMG]      │  │  [IMG]      │  │  [IMG]      │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │  Rastas     │  │  Muscles    │  │  Pecas      │                   │  │
│  │  │  🧠 +2      │  │  💪 +2      │  │  😤 +2      │                   │  │
│  │  │  ✨ +1      │  │  💰 +1      │  │  🏠 +1      │                   │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                   │  │
│  │                                                                       │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │  │
│  │  │  [GRENAS]   │  │  [RUBIO]    │  │  [LIC]      │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │  [IMG]      │  │  [IMG]      │  │  [IMG]      │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │  Grenas     │  │  Rubio      │  │  Lic        │                   │  │
│  │  │  🏠 +2      │  │  💰 +2      │  │  💪 +1      │                   │  │
│  │  │  💪 +1      │  │  ✨ +1      │  │  🧠 +2      │                   │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                   │  │
│  │                                                                       │  │
│  │  [CONTINUAR CON RASTAS]                                              │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones de Tarjeta de Arquetipo

| Elemento | Especificación |
|----------|----------------|
| **Card** | `width: 100%`, `aspect-ratio: 3/4`, `border-radius: 16px` |
| **Image** | `object-fit: cover`, ocupa 60% superior de la card |
| **Name** | `font-size: 18px`, `font-weight: 700`, centrado |
| **Stats** | Iconos 16px + número, 2 líneas de stats |
| **Selected State** | Border dorado 3px, glow dorado, checkmark icon |
| **Hover** | Scale 1.02, shadow aumentado |

## 12.2 Onboarding - Juramento (/onboarding/oath)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ←                                                                    │  │
│  │                                                                       │  │
│  │                    🗡️ EL JURAMENTO                                   │  │
│  │                                                                       │  │
│  │  "Antes de comenzar, debes comprometerte a ti mismo"                │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │                                                             │     │  │
│  │  │  YO, [Nombre del usuario], JURO POR MI HONOR:               │     │  │
│  │  │                                                             │     │  │
│  │  │  1. Cumpliré mis tareas diarias con disciplina absoluta     │     │  │
│  │  │  2. No abandonaré ante la primera dificultad                │     │  │
│  │  │  3. Me responsabilizo de mis acciones y sus consecuencias   │     │  │
│  │  │  4. Entiendo que mi avatar refleja mi compromiso real       │     │  │
│  │  │  5. Los próximos 100 días forjarán mi nueva identidad       │     │  │
│  │  │                                                             │     │  │
│  │  │  Si fallo, mi avatar sufrirá. Si triunfo, mi avatar         │     │  │
│  │  │  evolucionará. Así como mi vida real.                       │     │  │
│  │  │                                                             │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │  [   TOCA PARA FIRMAR TU JURAMENTO   ]                      │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  │  Al firmar, confirmas que entiendes las consecuencias de tu        │  │
│  │  compromiso y aceptas los términos del sistema.                    │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones del Juramento

| Elemento | Especificación |
|----------|----------------|
| **Container** | Scrollable, max-width 600px |
| **Título** | `font-size: 28px`, `font-weight: 800`, dorado |
| **Texto Juramento** | `font-size: 16px`, `line-height: 1.8`, justificado |
| **Números** | Dorado, bold |
| **Botón Firmar** | Altura 64px, gradient dorado animado |
| **Firma Animation** | Efecto de "escritura" con partículas doradas |

## 12.3 Tienda - Catálogo (/shop)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ⚡ METAMEN100              🏪 TIENDA DE ÉLITE         💰 1,250 BTC  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  [TODOS] [VESTIMENTA] [ACCESORIOS] [ESCENARIOS] [PREMIUM]            │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🔥 MÁS POPULARES                                                    │  │
│  │                                                                       │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │  │
│  │  │ [IMG]       │  │ [IMG]       │  │ [IMG]       │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │ Camiseta    │  │ Cadena      │  │ Fondo       │                   │  │
│  │  │ Negra       │  │ Dorada      │  │ Oficina     │                   │  │
│  │  │             │  │ ⭐ PREMIUM  │  │             │                   │  │
│  │  │ 💰 100 BTC  │  │ 💰 250 BTC  │  │ 💰 500 BTC  │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │ [COMPRAR]   │  │ [COMPRAR]   │  │ [COMPRAR]   │                   │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🆕 NOVEDADES                                                        │  │
│  │                                                                       │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │  │
│  │  │ [IMG]       │  │ [IMG]       │  │ [IMG]       │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │ Gafas       │  │ Traje       │  │ Penthouse   │                   │  │
│  │  │ de Sol      │  │ Élite       │  │ Premium     │                   │  │
│  │  │             │  │ ⭐ PREMIUM  │  │ ⭐ PREMIUM  │                   │  │
│  │  │ 💰 150 BTC  │  │ 💰 400 BTC  │  │ 💰 1000 BTC │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │ [COMPRAR]   │  │ [COMPRAR]   │  │ [COMPRAR]   │                   │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  💡 CONSEJO: Completa más tareas para ganar BTC y desbloquear        │  │
│  │     items exclusivos de mayor nivel.                                 │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones de Item Card

| Elemento | Especificación |
|----------|----------------|
| **Card** | `width: calc(33.33% - 16px)`, `border-radius: 16px` |
| **Image** | `aspect-ratio: 1/1`, `object-fit: cover` |
| **Premium Badge** | Position absolute top-right, gradient purple/gold |
| **Name** | `font-size: 16px`, `font-weight: 600` |
| **Price** | Icono BTC + número dorado, `font-weight: 700` |
| **Button** | Full width, height 44px |
| **Locked State** | Overlay oscuro, icono candado, requisito de nivel |

## 12.4 Inventario (/inventory)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ⚡ METAMEN100              🎒 TU INVENTARIO                         │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  [EQUIPADO] [DISPONIBLES] [BLOQUEADOS]                               │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ACTUALMENTE EQUIPADO:                                               │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │  [AVATAR GRANDE CON ITEMS EQUIPADOS]                        │     │  │
│  │  │                                                             │     │  │
│  │  │  • Camiseta Negra (Nivel 1)                                 │     │  │
│  │  │  • Jeans Azules (Nivel 1)                                   │     │  │
│  │  │  • Zapatillas Blancas (Nivel 1)                             │     │  │
│  │  │                                                             │     │  │
│  │  │  [PERSONALIZAR AVATAR]                                      │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │  EFECTOS ACTIVOS:                                           │     │  │
│  │  │  • +5 AURA (Vestimenta completa)                            │     │  │
│  │  │  • +3 WEALTH (Cadena Dorada equipada)                       │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ITEMS DISPONIBLES:                                                  │  │
│  │                                                                       │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │  │
│  │  │ [IMG]       │  │ [IMG]       │  │ [IMG]       │                   │  │
│  │  │ Camiseta    │  │ Pantalón    │  │ Gafas       │                   │  │
│  │  │ Blanca      │  │ Negro       │  │ de Sol      │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │ [EQUIPAR]   │  │ [EQUIPAR]   │  │ [EQUIPAR]   │                   │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 12.5 Perfil - Logros (/profile/achievements)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ⚡ METAMEN100              🏆 TUS LOGROS                            │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │  [AVATAR]                                                   │     │  │
│  │  │                                                             │     │  │
│  │  │  Carlos M.                                                  │     │  │
│  │  │  Nivel 7 - PUDIENTE                                         │     │  │
│  │  │  🔥 Racha máxima: 15 días                                   │     │  │
│  │  │  📅 Día 47 de 100                                           │     │  │
│  │  │                                                             │     │  │
│  │  │  [EDITAR PERFIL]                                            │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │  📊 ESTADÍSTICAS GENERALES                                  │     │  │
│  │  │                                                             │     │  │
│  │  │  Tareas completadas: 235          Tiempo enfocado: 42h      │     │  │
│  │  │  BTC ganados: 2,450               BTC gastados: 1,200       │     │  │
│  │  │  Días perfectos: 12               Resurrecciones: 0         │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🏅 MEDALLAS DESBLOQUEADAS (12/25)                                   │  │
│  │                                                                       │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │  │
│  │  │    🥇       │  │    🔥       │  │    📚       │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │  PRIMER     │  │  RACHA      │  │  LECTOR     │                   │  │
│  │  │  PASO       │  │  DE 7       │  │  ÁVIDO      │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │ Completar   │  │ 7 días      │  │ 10 libros   │                   │  │
│  │  │ 1ª tarea    │  │ seguidos    │  │ completados │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │ ✅ 2026-01-15│  │ ✅ 2026-01-22│  │ ✅ 2026-01-28│                  │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🔒 MEDALLAS BLOQUEADAS (13 restantes)                               │  │
│  │                                                                       │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │  │
│  │  │    👑       │  │    💎       │  │    ⚡       │                   │  │
│  │  │  [LOCKED]   │  │  [LOCKED]   │  │  [LOCKED]   │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │  SEMI-DIOS  │  │  INVERSIONISTA│  │  GUERRERO   │                   │  │
│  │  │             │  │             │  │             │                   │  │
│  │  │ Alcanzar    │  │ Acumular    │  │ 100 días    │                   │  │
│  │  │ Nivel 10    │  │ 10,000 BTC  │  │ perfectos   │                   │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones de Medalla

| Elemento | Especificación |
|----------|----------------|
| **Card** | `width: calc(33.33% - 16px)`, `aspect-ratio: 1/1` |
| **Icon** | `font-size: 48px`, centrado |
| **Title** | `font-size: 14px`, `font-weight: 700`, uppercase |
| **Description** | `font-size: 12px`, `#8A8A8A` |
| **Date** | `font-size: 10px`, dorado (solo desbloqueadas) |
| **Locked** | Grayscale 100%, opacity 0.5, icono candado |
| **Unlocked** | Full color, animación de brillo sutil |

## 12.6 Suscripción - Planes (/subscription/upgrade)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ⚡ METAMEN100              💎 ELIGE TU PLAN                         │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │  Desbloquea todo el potencial de tu transformación                  │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │  🆓 GRATIS                                                  │     │  │
│  │  │                                                             │     │  │
│  │  │  $0 / mes                                                   │     │  │
│  │  │                                                             │     │  │
│  │  │  ✓ Acceso al Arsenal básico (7 herramientas)                │     │  │
│  │  │  ✓ Avatar con evolución hasta Nivel 10                      │     │  │
│  │  │  ✓ Tienda con items básicos                                 │     │  │
│  │  │  ✓ Sistema de logros                                        │     │  │
│  │  │  ✗ Crea tu Hipnosis personalizada                           │     │  │
│  │  │  ✗ Items premium exclusivos                                 │     │  │
│  │  │  ✗ Escenarios premium                                       │     │  │
│  │  │                                                             │     │  │
│  │  │  [PLAN ACTUAL]                                              │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────┐     │  │
│  │  │  ⭐ PREMIUM                                                 │     │  │
│  │  │  🔥 MÁS POPULAR                                             │     │  │
│  │  │                                                             │     │  │
│  │  │  $9.99 / mes                                                │     │  │
│  │  │  $99.99 / año (AHORRA 17%)                                  │     │  │
│  │  │                                                             │     │  │
│  │  │  ✓ TODO lo del plan Gratis                                  │     │  │
│  │  │  ✓ Crea tu Hipnosis personalizada con IA                    │     │  │
│  │  │  ✓ Items premium exclusivos                                 │     │  │
│  │  │  ✓ Escenarios premium (Penthouse, Yate, etc.)               │     │  │
│  │  │  ✓ Avatar evoluciona hasta Nivel 13 (Semi-Dios)             │     │  │
│  │  │  ✓ Soporte prioritario                                      │     │  │
│  │  │  ✓ Sin anuncios                                             │     │  │
│  │  │                                                             │     │  │
│  │  │  [SUSCRIBIRME AHORA]                                        │     │  │
│  │  │                                                             │     │  │
│  │  │  Cancela cuando quieras. Sin compromiso.                    │     │  │
│  │  └─────────────────────────────────────────────────────────────┘     │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  💳 Métodos de pago aceptados: Visa, Mastercard, AMEX, PayPal        │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones de Pricing Card

| Elemento | Especificación |
|----------|----------------|
| **Container** | `border-radius: 24px`, `padding: 32px` |
| **Popular Badge** | Gradient dorado, position absolute top |
| **Price** | `font-size: 36px`, `font-weight: 800` |
| **Features** | Checkmarks verdes para incluidos, X grises para excluidos |
| **CTA Button** | Full width, altura 56px, gradient dorado |
| **Hover** | Scale 1.01, shadow aumentado |

---

# 13. SISTEMA DE ICONOGRAFÍA

## 13.1 Librería de Iconos

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  CATEGORÍA         │  ICONOS                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  Navegación        │  home, tools, shop, inventory, profile, settings       │
│  Acciones          │  check, x, plus, minus, edit, delete, share            │
│  Estados           │  check-circle, x-circle, alert-circle, info            │
│  Vectores          │  aura (sparkles), jawline (flame), wealth (coins)      │
│                    │  physique (dumbbell), env (home)                       │
│  Vida/Salud        │  heart, heart-empty, skull, medical-cross              │
│  Tiempo            │  clock, calendar, timer, history                       │
│  Economía          │  bitcoin, wallet, shopping-cart, gift                  │
│  Arsenal           │  book-open, dumbbell, brain, pen, zap, smile, music    │
│                    │  activity, target, wind                                │
│  Niveles           │  trophy, medal, star, crown, gem                       │
│  Social            │  bell, mail, message, users                            │
│  Misc              │  menu, search, filter, more-vertical, chevron-xxx      │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 13.2 Especificaciones de Iconos

| Propiedad | Valor |
|-----------|-------|
| **Tamaño Small** | 16px |
| **Tamaño Default** | 24px |
| **Tamaño Large** | 32px |
| **Tamaño XL** | 48px |
| **Stroke Width** | 2px |
| **Color Default** | `#FFFFFF` |
| **Color Secondary** | `#8A8A8A` |
| **Color Accent** | `#FFD700` |

## 13.3 Iconos por Contexto

### Dashboard Header
```
[⚡ Logo] [Nivel Badge] [💰 BTC Counter] [🔔 Notifications] [👤 Profile]
```

### Vector Icons
```
✨ AURA      → Sparkles icon, dorado
😤 JAWLINE   → Flame icon, naranja
💰 WEALTH    → Coins icon, verde
💪 PHYSIQUE  → Dumbbell icon, rojo
🏠 ENV       → Home icon, azul
```

### Health Icons
```
❤️  Heart Filled    → Rojo #DC2626
🤍 Heart Empty     → Gris #4A4A4A
💔 Heart Broken    → Rojo con grieta
☠️  Skull           → Limbo state
```

---

# 14. DARK MODE Y TEMAS

## 14.1 Tema Oscuro (Default)

```css
:root {
  /* Backgrounds */
  --bg-primary: #0A0A0A;
  --bg-secondary: #141414;
  --bg-tertiary: #1E1E1E;
  --bg-elevated: #2A2A2A;

  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #8A8A8A;
  --text-tertiary: #4A4A4A;

  /* Accents */
  --accent-gold: #FFD700;
  --accent-red: #DC2626;
  --accent-green: #22C55E;
  --accent-blue: #3B82F6;
}
```

## 14.2 Consideraciones de Tema

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ASPECTO           │  IMPLEMENTACIÓN                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│  Colores fijos     │  Dorado siempre dorado, rojo siempre rojo            │
│  (semánticos)      │  No cambian entre temas                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  Colores de fondo  │  Escala de grises oscuros                              │
│  (estructurales)   │  #0A0A0A → #141414 → #1E1E1E                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  Colores de texto  │  Blanco → Gris claro → Gris medio                    │
│  (contenido)       │  #FFFFFF → #8A8A8A → #4A4A4A                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  Sombras           │  Siempre oscuras (no invertir)                         │
│                    │  El sistema es inherentemente dark                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 15. SISTEMA DE NOTIFICACIONES

## 15.1 Tipos de Notificación

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TIPO              │  COLOR    │  ICONO    │  USO                            │
├─────────────────────────────────────────────────────────────────────────────┤
│  Success           │  Verde    │  ✓        │  Tarea completada, compra OK    │
│  Error             │  Rojo     │  ✕        │  Error, fallo, avatar dañado    │
│  Warning           │  Amarillo │  ⚠        │  Advertencia, tiempo limitado   │
│  Info              │  Azul     │  ℹ        │  Información general            │
│  Achievement       │  Dorado   │  🏆       │  Logro desbloqueado             │
│  Level Up          │  Dorado   │  ⬆        │  Subida de nivel                │
│  Judgement         │  Naranja  │  🔥       │  Judgement Night próximo        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 15.2 Toast Notification

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  ✅  ¡Tarea completada!                              [✕]           │   │
│  │      +5 BTC añadidos a tu cuenta                                    │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  ⚠️  Judgement Night en 5 minutos                    [✕]           │   │
│  │      Completa tus tareas pendientes                                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  🏆  ¡Logro desbloqueado!                            [✕]           │   │
│  │      "Primer Paso" - Completaste tu primera tarea                   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones de Toast

| Propiedad | Valor |
|-----------|-------|
| **Position** | Top-right (desktop), Top-center (mobile) |
| **Width** | 360px max |
| **Border-radius** | 12px |
| **Padding** | 16px |
| **Duration** | 4000ms (auto-dismiss) |
| **Animation** | Slide in from right, fade out |
| **Stack** | Max 3 toasts visible |

---

# 16. EMPTY STATES Y ERROR STATES

## 16.1 Empty States

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │                    [ILLUSTRATION - Empty box]                       │   │
│  │                                                                     │   │
│  │                    Aún no tienes items                              │   │
│  │                                                                     │   │
│  │         Visita la tienda para comprar tu primer item               │   │
│  │                                                                     │   │
│  │                    [IR A LA TIENDA]                                 │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │                    [ILLUSTRATION - Empty calendar]                  │   │
│  │                                                                     │   │
│  │                    No hay historial aún                             │   │
│  │                                                                     │   │
│  │         Completa tu primera tarea para ver tu progreso             │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 16.2 Error States

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │                    [ILLUSTRATION - Broken connection]               │   │
│  │                                                                     │   │
│  │                    Error de conexión                                │   │
│  │                                                                     │   │
│  │         No pudimos conectar con el servidor.                       │   │
│  │         Revisa tu conexión e intenta de nuevo.                     │   │
│  │                                                                     │   │
│  │                    [REINTENTAR]                                     │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │                    [ILLUSTRATION - 404]                             │   │
│  │                                                                     │   │
│  │                    Página no encontrada                             │   │
│  │                                                                     │   │
│  │         La página que buscas no existe o fue movida.               │   │
│  │                                                                     │   │
│  │                    [VOLVER AL INICIO]                               │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones de Empty/Error States

| Elemento | Especificación |
|----------|----------------|
| **Illustration** | SVG, 160px height, color secundario |
| **Title** | `font-size: 20px`, `font-weight: 700` |
| **Description** | `font-size: 14px`, `#8A8A8A`, max-width 320px |
| **CTA Button** | Primary variant, centrado |
| **Background** | Same as parent container |

---

# 17. LOADING STATES

## 17.1 Tipos de Loading

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TIPO              │  USO                            │  DURACIÓN ESPERADA   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Spinner           │  Botones, acciones pequeñas     │  < 2 segundos        │
│  Skeleton          │  Cards, listas, contenido       │  2-5 segundos        │
│  Progress Bar      │  Uploads, procesos largos       │  Variable            │
│  Full Screen       │  Inicialización, cambios major  │  > 3 segundos        │
│  Pull to Refresh   │  Mobile refresh                 │  < 2 segundos        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 17.2 Spinner

```css
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #2A2A2A;
  border-top-color: #FFD700;
  border-radius: 50%;
  animation: spinner 0.8s linear infinite;
}
```

## 17.3 Full Screen Loader

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │                                                                     │   │
│  │                    [SPINNER GRANDE]                                 │   │
│  │                                                                     │   │
│  │                    Cargando tu experiencia...                       │   │
│  │                                                                     │   │
│  │                    [████████░░░░░░░░░░] 40%                         │   │
│  │                                                                     │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 18. MICROCOPY Y MENSAJES DE SISTEMA

## 18.1 Mensajes de Confirmación

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ACCIÓN                    │  TÍTULO              │  DESCRIPCIÓN            │
├─────────────────────────────────────────────────────────────────────────────┤
│  Completar tarea           │  ¡Tarea completada!  │  +X BTC ganados         │
│  Comprar item              │  ¡Compra exitosa!    │  Item añadido a tu inv. │
│  Equipar item              │  Item equipado       │  Tu avatar se actualizó │
│  Subir de nivel            │  ¡Nivel X!           │  Has desbloqueado...    │
│  Recuperar corazón         │  Corazón recuperado  │  Tu avatar está a salvo │
│  Resucitar avatar          │  ¡Has vuelto!        │  Tu avatar resucitó     │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 18.2 Mensajes de Error

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ERROR                     │  MENSAJE AL USUARIO                            │
├─────────────────────────────────────────────────────────────────────────────┤
│  Network error             │  Error de conexión. Revisa tu internet.        │
│  Server error              │  Error del servidor. Intenta de nuevo.         │
│  Insufficient BTC          │  No tienes suficientes BTC. Completa tareas.   │
│  Level requirement         │  Necesitas nivel X para desbloquear esto.      │
│  Already owned             │  Ya tienes este item en tu inventario.         │
│  Task already completed    │  Esta tarea ya fue completada hoy.             │
│  Session expired           │  Tu sesión expiró. Inicia sesión de nuevo.     │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 18.3 Tooltips

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ELEMENTO                  │  TOOLTIP                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  Icono de vector           │  "AURA: Tu presencia y carisma interior"       │
│  Icono de corazón          │  "Salud: Pierdes 1 corazón por día incompleto" │
│  Icono de racha            │  "Racha: Días consecutivos completando tareas" │
│  Icono de BTC              │  "BTC: Moneda ganada con disciplina real"      │
│  Item bloqueado            │  "Desbloquea en nivel X"                       │
│  Premium tool              │  "Suscríbete a Premium para desbloquear"       │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                              DOCUMENTO ACTUALIZADO                                               ║
║                                                                                                  ║
║                    UI/UX Design Specification v1.0                                               ║
║                    METAMEN100 - TOP-100 WORLDWIDE READY                                          ║
║                                                                                                  ║
║                    "Diseño que inspira. Interfaz que transforma."                               ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```
