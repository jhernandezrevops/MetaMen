# METAMEN100 - GAME DESIGN DOCUMENT
## Sistema Operativo de Conducta TOP 100 Mundial

---

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                    🎮 GAME DESIGN DOCUMENT v1.0                                                  ║
║                    METAMEN100 - El Espejo Bio-Digital                                            ║
║                                                                                                  ║
║     "Disciplina real convertida en estatus digital inmediato"                                   ║
║                                                                                                  ║
║     Documento Clasificación: TOP-100 WORLDWIDE READY                                            ║
║     Última Actualización: Enero 2026                                                            ║
║     Estado: PRODUCCIÓN                                                                          ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

# ÍNDICE EJECUTIVO

1. [Resumen del Juego](#1-resumen-del-juego)
2. [Sistema de Vectores](#2-sistema-de-vectores)
3. [Sistema de Niveles](#3-sistema-de-niveles)
4. [Sistema de Arquetipos](#4-sistema-de-arquetipos)
5. [Sistema de Salud](#5-sistema-de-salud)
6. [Sistema de Racha](#6-sistema-de-racha)
7. [Judgement Night](#7-judgement-night)
8. [Muerte y Resurrección](#8-muerte-y-resurrección)
9. [Economía (BTC)](#9-economía-btc)
10. [Protocolo de 100 Días](#10-protocolo-de-100-días)
11. [Arsenal de Herramientas](#11-arsenal-de-herramientas)
12. [Tienda e Inventario](#12-tienda-e-inventario)
13. [Suscripción y Limbo](#13-suscripción-y-limbo)

---

# 1. RESUMEN DEL JUEGO

## 1.1 Concepto Central (One-Liner)

> **"METAMEN100 es un Sistema Operativo de Conducta y espejo bio-digital de alto rendimiento para hombres, que unifica las herramientas necesarias en un solo lugar y genera compromiso a través de un motor de vectores e IA generativa para traducir matemáticamente tu disciplina diaria del mundo real en la evolución visual inmediata de un avatar, imponiendo consecuencias brutales de estatus y supervivencia a lo largo de un protocolo de 100 días."**

## 1.2 Género

**Gamificación + RPG de Progresión Personal**

- **Sub-género:** Self-Improvement Simulator / Life OS
- **Inspiraciones:** Habitica (gamificación), Ring Fit Adventure (fitness gamificado), Duolingo (rachas), The Sims (progresión visual)
- **Diferenciador Único:** Sincronización visual diaria mediante IA generativa que refleja el progreso real del usuario

## 1.3 Plataforma

- **Primaria:** Web (Mobile First - Responsive)
- **Futuro:** Aplicaciones nativas iOS/Android
- **Tecnología:** Progressive Web App (PWA) con capacidades offline

## 1.4 Target Demográfico

| Atributo | Especificación |
|----------|----------------|
| **Edad** | 20-35 años |
| **Género** | Masculino |
| **Ubicación** | México, LATAM, España (expansión global futura) |
| **Situación** | Estancados, buscando transformación personal |
| **Psicografía** | Ansiosos, sobreinformados, baja autoestima, desean estatus |
| **Tecnología** | Smartphone gama media/alta, familiarizados con apps y juegos |

## 1.5 Unique Selling Points (USPs)

### USP #1: El Espejo Bio-Digital
> "Tu avatar es tu espejo incondicional. Si fallas, se ve. Si triunfas, se ve."

La generación diaria de imágenes mediante IA crea una representación visual exacta del progreso del usuario. No hay lugar para engañarse.

### USP #2: Consecuencias Brutales de Supervivencia
> "10 corazones. 100 días. Muerte permanente del avatar."

El sistema de salud con pérdida permanente de progreso físico crea urgencia real y compromiso emocional.

### USP #3: Sincronización de Gratificación Inmediata
> "Cada acción real tiene impacto visual inmediato."

A diferencia de otras apps donde los cambios tardan semanas en notarse, METAMEN100 traduce cada tarea completada en evolución visible del avatar.

### USP #4: Suite Todo-en-Uno
> "9 herramientas integradas. Ninguna app externa necesaria."

Meditación, gym tracker, journal, focus timer, kegel trainer, lectura, yoga facial - todo en una sola plataforma.

### USP #5: Economía de Estatus Real
> "Gana Bitcoins virtuales con tu disciplina. Compra tu evolución."

La moneda interna se gana con el esfuerzo real y se gasta en activos que mejoran la apariencia del avatar.

---

## 1.6 La Promesa del Producto

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   ANTES DE METAMEN100                    DESPUÉS DE 100 DÍAS                ║
║   ───────────────────                    ───────────────────                ║
║                                                                              ║
║   ❌ 5 apps diferentes                    ✅ 1 sistema unificado              ║
║   ❌ Progreso invisible                   ✅ Evolución visual diaria          ║
║   ❌ Sin consecuencias por fallar         ✅ Avatar que sufre si fallas       ║
║   ❌ Motivación que decae                 ✅ Sistema de racha adictivo        ║
║   ❌ Cambios lentos                       ✅ Gratificación inmediata          ║
║   ❌ Aislamiento                          ✅ Comunidad de élite               ║
║                                                                              ║
║   RESULTADO: Un hombre transformado con identidad de élite consolidada      ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

# 2. SISTEMA DE VECTORES (El Corazón del Sistema)

## 2.1 Filosofía de los Vectores

> **"Tu avatar es tu espejo bio-digital"**

Los vectores son las dimensiones medibles de transformación personal. Cada vector representa un aspecto crítico del desarrollo humano y se traduce directamente en características visuales del avatar.

### Principios Fundamentales

1. **Transparencia Total:** Todo progreso (o regresión) es visible
2. **Interdependencia:** Los vectores se influyen mutuamente
3. **Decay Biológico:** Sin mantenimiento, los vectores degradan
4. **Sincronización Visual:** Cada punto de vector tiene representación gráfica

## 2.2 Vector: AURA (aura_lvl)

### Descripción
La fuerza mental, el enfoque y la presencia imperial del usuario. Representa la disciplina interna, la claridad mental y el magnetismo personal.

### Especificaciones Técnicas

| Atributo | Valor |
|----------|-------|
| **Rango** | 1.00 - 13.00 |
| **Arquetipo de Tareas** | MENTAL |
| **Decay Diario** | -0.01 por día sin tarea mental |
| **Efecto Visual** | Brillo/glow alrededor del avatar, postura erguida |

### Tareas que Afectan AURA

| Tarea | Modificador | Frecuencia |
|-------|-------------|------------|
| Meditación | +0.05 por sesión | 7x/semana |
| Ducha fría | +0.03 por sesión | 3x/semana |
| Lectura | +0.03 por sesión | 7x/semana |
| Despertar temprano | +0.02 por día | 7x/semana |

### Tokens de IA por Nivel

```
Nivel 1-3 (Bajo):
  "hunched posture, looking down, defeated expression, 
   shoulders forward, no presence"

Nivel 4-6 (Medio-Bajo):
  "improving posture, head starting to lift, 
   neutral expression, shoulders back slightly"

Nivel 7-9 (Medio-Alto):
  "confident posture, chin up, direct gaze, 
   shoulders back, calm expression"

Nivel 10-11 (Alto):
  "imperial posture, perfect alignment, intense gaze, 
   commanding presence, subtle confidence"

Nivel 12-13 (Máximo):
  "transcendent posture, hunter eyes, magnetic presence, 
   subtle golden aura effect, air of absolute control"
```

### Sinergias con Otros Vectores

- **AURA × PRODUCTIVIDAD:** Si AURA > 10, las sesiones de Focus Work otorgan +20% BTC adicionales
- **AURA × PHYSIQUE:** AURA > 9 otorga "Resiliencia de Racha" (primer día de fallo no degrada AURA)
- **ENV × AURA:** Entorno limpio (ENV > 5) ralentiza 20% el decay de AURA

---

## 2.3 Vector: JAWLINE (face_lvl)

### Descripción
La estructura facial, simetría y definición estética del rostro. Representa el atractivo facial, la virilidad percibida y el "lookmaxing".

### Especificaciones Técnicas

| Atributo | Valor |
|----------|-------|
| **Rango** | 1.00 - 13.00 |
| **Arquetipo de Tareas** | CARA |
| **Decay Diario** | -0.01 por día sin tarea facial |
| **Efecto Visual** | Definición de mandíbula, simetría, pómulos |

### Tareas que Afectan JAWLINE

| Tarea | Modificador | Frecuencia |
|-------|-------------|------------|
| Corrección de postura | +0.03 por sesión | 3x/semana |
| Ejercicios faciales/Mewing | +0.04 por sesión | 3x/semana |
| Kegel | +0.02 por sesión | 10x/semana (2/día × 5 días) |

### Interacción Crítica con PHYSIQUE

```
FÓRMULA VISUAL DEL ROSTRO:

Si face_lvl es ALTO pero fat_lvl es ALTO:
  → "Cara fuerte pero hinchada" (mandíbula oculta)

Si face_lvl es ALTO y fat_lvl es BAJO:
  → "Cara de Gigachad" (huecos en mejillas, mandíbula definida)

META: face_lvl ≥ 10 + fat_lvl ≤ 4 = JAWLINE ÓPTIMO
```

### Tokens de IA por Nivel

```
Nivel 1-3 (Bajo):
  "round face, no jaw definition, chubby cheeks, 
   double chin visible, soft features"

Nivel 4-6 (Medio-Bajo):
  "face starting to slim, slight jaw emerging, 
   cheeks less puffy, weak chin"

Nivel 7-9 (Medio-Alto):
  "defined jawline visible, cheekbones emerging, 
   face structure apparent, masculine features"

Nivel 10-11 (Alto):
  "strong square jaw, high cheekbones, hollow cheeks, 
   hunter eyes, chiseled features"

Nivel 12-13 (Máximo):
  "diamond jawline, razor-sharp definition, 
   model-tier facial structure, perfect symmetry"
```

---

## 2.4 Vector: WEALTH (wealth_lvl)

### Descripción
El nivel de estatus económico proyectado y calidad de vida. Representa la productividad, el valor del tiempo y la abundancia material.

### Especificaciones Técnicas

| Atributo | Valor |
|----------|-------|
| **Rango** | 1.00 - 13.00 |
| **Arquetipo de Tareas** | PRODUCTIVIDAD |
| **Decay Diario** | -0.01 por día sin productividad |
| **Efecto Visual** | Calidad de ropa, accesorios, entorno |

### Tareas que Afectan WEALTH

| Tarea | Modificador | Frecuencia |
|-------|-------------|------------|
| Journal | +0.03 por entrada | 6x/semana |
| Aprendizaje de skill | +0.05 por hora | 5h/semana |
| Focus work | +0.02 por hora | 15h/semana (3h/día × 5 días) |

### Tokens de IA por Nivel (Ropa)

```
Nivel 1-3 (Harapos):
  "tattered dirty clothes, stained t-shirt, 
   worn-out pants, no accessories"

Nivel 4-6 (Smart Casual):
  "clean basic clothes, simple shirt, 
   basic watch, presentable appearance"

Nivel 7-8 (Marcas):
  "branded clothing, quality fabrics, 
   designer watch, subtle jewelry"

Nivel 9-10 (Ultra-Lujo):
  "tailored suit, luxury watch, gold chain, 
   designer accessories, old money aesthetic"

Nivel 11-13 (Divino):
  "bespoke clothing, rare timepieces, 
   exclusive accessories, futuristic luxury"
```

### Restricciones de Gating (WEALTH)

| Restricción | Condición |
|-------------|-----------|
| Ropa de lujo (10+) | Requiere AURA ≥ 5 (no puedes lucir rico sin presencia) |
| Joyería alta | Requiere JAWLINE ≥ 6 (coherencia estética) |
| Accesorios exclusivos | Requiere nivel de usuario ≥ 8 |

---

## 2.5 Vector: PHYSIQUE (muscle_lvl + fat_lvl)

### Descripción
La composición física del cuerpo: masa muscular ganada versus grasa perdida. El vector más visible y transformador del avatar.

### 2.5.1 SUB-VECTOR: MÚSCULO (muscle_lvl)

| Atributo | Valor |
|----------|-------|
| **Rango** | 1.00 - 13.00 (ascendente) |
| **Decay Diario** | -0.02 por día sin fuerza |

**Tareas:**
- Entrenamiento de fuerza: +0.05 por sesión
- Hidratación: +0.01 por día completado

### 2.5.2 SUB-VECTOR: GRASA (fat_lvl)

| Atributo | Valor |
|----------|-------|
| **Rango** | 13.00 - 1.00 (INVERSO: 13=obeso, 1=definido) |
| **Decay Diario** | +0.02 por día sin cardio (aumenta grasa) |

**Tareas:**
- Cardio: -0.05 de grasa por sesión
- Hidratación: -0.01 de grasa por día
- Focus work: -0.01 (actividad sedentaria controlada)

### 2.5.3 Cálculo Combinado de PHYSIQUE

```
PHYSIQUE_SCORE = (muscle_lvl + (14 - fat_lvl)) / 2

Ejemplo:
- muscle_lvl = 8
- fat_lvl = 5
- PHYSIQUE_SCORE = (8 + (14 - 5)) / 2 = (8 + 9) / 2 = 8.5
```

### Tokens de IA por Nivel (Cuerpo)

```
Nivel 1-3 (Obeso):
  "severely overweight, hanging belly, 
   no muscle definition, soft body"

Nivel 4-6 (Compacto):
  "overweight but firm, some muscle under fat, 
   broader shoulders emerging"

Nivel 7-9 (En Forma):
  "fit body, visible muscles, 
   some abdominal definition, athletic build"

Nivel 10-11 (Definido):
  "muscular body, six pack visible, 
   V-taper, vascular arms"

Nivel 12-13 (Élite):
  "bodybuilder physique, extreme definition, 
   full vascularity, perfect proportions"
```

---

## 2.6 Vector: ENV (env_lvl)

### Descripción
La calidad del entorno, escenario de fondo donde existe el avatar. Representa el "rango de dominio" territorial del usuario.

### Especificaciones Técnicas

| Atributo | Valor |
|----------|-------|
| **Rango** | 1 - 13 (entero) |
| **Progresión** | Basado en nivel del usuario + tiempo + propiedades compradas |
| **Efecto Visual** | Fondo completo de la imagen |

### Niveles de Entorno

| Nivel | Entorno | Descripción |
|-------|---------|-------------|
| 1-2 | Calle/Basurero | Bajo un puente, cartón, lluvia gris |
| 3-4 | Cuarto de Servicio | Habitación precaria, vecindad |
| 5-6 | Departamento Básico | Espacio propio modesto |
| 7-8 | Departamento de Lujo | Penthouse moderno |
| 9-10 | Casa Moderna | Residencia de élite |
| 11-12 | Mansión | Propiedad expansiva |
| 13 | Palacio/Yate | Dominio absoluto |

### Tokens de IA por Nivel

```
Nivel 1-2 (El Abismo):
  "dark alley under bridge, cardboard boxes, 
   rain, trash bags, barrel fires, toxic fog"

Nivel 3-4 (El Bunker):
  "small service room, pawn shop office, 
   CRT monitors, pizza boxes, exposed wiring"

Nivel 5-6 (La Torre):
  "modern cubicle, coffee shop, 
   clean desk, monstera plant, city view"

Nivel 7-8 (El Olimpo Urbano):
  "luxury penthouse, marble floors, 
   infinity pool, supercar in background"

Nivel 9-10 (El Trono):
  "global command center, private jet, 
   holographic displays, throne, robot assistants"
```

---

## 2.7 Matriz de Interdependencia de Vectores

```
                    ┌─────────────────────────────────────────┐
                    │         MATRIZ DE SINERGIAS             │
                    └─────────────────────────────────────────┘

    AURA ◄────────► JAWLINE
    │    
    │      • AURA > 10: Focus Work +20% BTC
    │      • JAWLINE > 8: Misiones de influencia social
    │
    ▼
  WEALTH ◄────────► PHYSIQUE
    │
    │      • PHYSIQUE > 7: Kegel +15% efectividad
    │      • WEALTH > 8: ENV mejora más rápido
    │
    ▼
   ENV ──────────► AURA
          
          • ENV > 5: Decay de AURA -20%
          • ENV > 10: Aura visual dorada

═══════════════════════════════════════════════════════════════════

    RESTRICCIONES DE GATING:
    ────────────────────────
    
    WEALTH 10+  ──► Requiere AURA ≥ 5
    JAWLINE 11+ ──► Requiere fat_lvl ≤ 5
    ENV 11+     ──► Requiere nivel ≥ 8
    PHYSIQUE 12+──► Requiere AURA ≥ 8
```

---

# 3. SISTEMA DE NIVELES (Progresión del Usuario)

## 3.1 Filosofía de Niveles

> **"De la marginalidad al éxito absoluto"**

Los niveles representan el estatus social del usuario dentro del sistema. Cada nivel desbloquea nuevas capacidades, items y representaciones visuales.

### Sistema de Progresión

- **Niveles Base:** 1-10 (Ciclo principal de 100 días)
- **Niveles Post-Game:** 11-13 (Modo Prestigio)
- **Cálculo:** Basado en XP acumulado + umbrales mínimos de vectores

---

## 3.2 Niveles Base (1-10)

### NIVEL 1: INDIGENTE

```
┌─────────────────────────────────────────────────────────────────┐
│  INDIGENTE - El Punto Más Bajo                                  │
├─────────────────────────────────────────────────────────────────┤
│  Días:           1-2                                            │
│  Requisitos:     Estado inicial                                 │
│  Salida:         Completar 3 días de Arquetipo Mental + ENV > 2 │
├─────────────────────────────────────────────────────────────────┤
│  DESCRIPCIÓN NARRATIVA:                                         │
│  El punto más bajo. Sin rumbo, sin recursos, sin respeto        │
│  propio. El caos total antes de la decisión de cambiar.         │
├─────────────────────────────────────────────────────────────────┤
│  ENTORNO VISUAL:                                                │
│  Bajo un puente oxidado, cartón para dormir, lluvia pixelada    │
│  gris, neblina tóxica, bolsas de basura amontonadas.            │
├─────────────────────────────────────────────────────────────────┤
│  ROPA:                                                          │
│  Harapos sucios, telas desgarradas, sin accesorios              │
├─────────────────────────────────────────────────────────────────┤
│  VIDEO DE HITO (Día 1):                                         │
│  Avatar mirándose en un charco de agua sucia, expresión de      │
│  resignación. Reflejo distorsionado.                            │
├─────────────────────────────────────────────────────────────────┤
│  BENEFICIOS DESBLOQUEADOS:                                      │
│  • Herramienta de Diario                                        │
│  • Acceso a Oráculo (meditación)                                │
└─────────────────────────────────────────────────────────────────┘
```

### NIVEL 2: ARRIMADO

```
┌─────────────────────────────────────────────────────────────────┐
│  ARRIMADO - Pidiendo Asilo                                      │
├─────────────────────────────────────────────────────────────────┤
│  Días:           3-5                                            │
│  Requisitos:     Superar Nivel 1 + Poseer 100 BTC               │
│  Salida:         Wealth > 3 + Aura > 2                          │
├─────────────────────────────────────────────────────────────────┤
│  DESCRIPCIÓN NARRATIVA:                                         │
│  Has dejado las calles, pero sigues en el margen. Vives en el   │
│  cuarto de servicio de una horrible vecindad.                   │
├─────────────────────────────────────────────────────────────────┤
│  ENTORNO VISUAL:                                                │
│  Sofá de conocido, habitación prestada, paredes con humedad,    │
│  luz precaria, cama simple.                                     │
├─────────────────────────────────────────────────────────────────┤
│  ROPA:                                                          │
│  Ropa prestada, camiseta básica limpia                          │
├─────────────────────────────────────────────────────────────────┤
│  VIDEO DE HITO:                                                 │
│  Avatar tocando puerta para pedir alojamiento, siendo recibido  │
│  con desconfianza.                                              │
├─────────────────────────────────────────────────────────────────┤
│  BENEFICIOS DESBLOQUEADOS:                                      │
│  • Recuperación de salud (+1 corazón extra al dormir)           │
│  • Acceso a Templo del Hierro (gym tracker)                     │
└─────────────────────────────────────────────────────────────────┘
```

### NIVEL 3: ALUCÍN (HITO DÍA 6 - CONVERSIÓN)

```
┌─────────────────────────────────────────────────────────────────┐
│  ALUCÍN - Proyección de Éxito                                   │
│  ⭐ PUNTO DE CONVERSIÓN: TRIAL → PAGO ⭐                        │
├─────────────────────────────────────────────────────────────────┤
│  Días:           6-15                                           │
│  Requisitos:     DÍA 6 OBLIGATORIO + Aura > 3                   │
│  Salida:         Wealth > 4 + Physique > 3                      │
├─────────────────────────────────────────────────────────────────┤
│  DESCRIPCIÓN NARRATIVA:                                         │
│  "Fake it till you make it". El momento en que el usuario       │
│  "siente" que puede ser alguien importante.                     │
│                                                                 │
│  ⚠️ CRÍTICO: Este es el día final de la prueba gratuita.        │
│  El usuario debe pagar para mantener esta nueva apariencia.     │
├─────────────────────────────────────────────────────────────────┤
│  ENTORNO VISUAL:                                                │
│  Cuarto de servicio propio, ordenado, primeros muebles          │
├─────────────────────────────────────────────────────────────────┤
│  ROPA:                                                          │
│  Jeans limpios, playera básica, GORRA ALUCÍN desbloqueada       │
├─────────────────────────────────────────────────────────────────┤
│  VIDEO DE HITO (Día 6):                                         │
│  Avatar poniéndose gorra y cadena por primera vez.              │
│  Toque cómico de transformación.                                │
├─────────────────────────────────────────────────────────────────┤
│  BENEFICIOS DESBLOQUEADOS:                                      │
│  • Multiplicador de BTC x1.2 por Focus Work                     │
│  • Gorra Alucín (ítem exclusivo)                                │
│  • Acceso a suscripción (pago requerido para continuar)         │
└─────────────────────────────────────────────────────────────────┘
```

### NIVEL 4: CHALÁN

```
┌─────────────────────────────────────────────────────────────────┐
│  CHALÁN - El Trabajador Esforzado                               │
├─────────────────────────────────────────────────────────────────┤
│  Días:           16-30                                          │
│  Requisitos:     Superar Día 12 + 5 sesiones de Focus Work      │
│  Salida:         Wealth > 5 + Physique > 4                      │
├─────────────────────────────────────────────────────────────────┤
│  DESCRIPCIÓN NARRATIVA:                                         │
│  Humildad y disciplina manual. Ganas dinero con sudor real.     │
│  La construcción de la base física y el valor del trabajo.      │
├─────────────────────────────────────────────────────────────────┤
│  ENTORNO VISUAL:                                                │
│  Cuarto rentado propio, ordenado, primeros muebles nuevos       │
├─────────────────────────────────────────────────────────────────┤
│  ROPA:                                                          │
│  Ropa de trabajo funcional, botas, cuerpo empezando a verse     │
│  compacto por el trabajo físico                                 │
├─────────────────────────────────────────────────────────────────┤
│  VIDEO DE HITO:                                                 │
│  Avatar trabajando una jornada bajo el sol, recibiendo su       │
│  primer sueldo.                                                 │
├─────────────────────────────────────────────────────────────────┤
│  BENEFICIOS DESBLOQUEADOS:                                      │
│  • Bono de XP por entrenamientos de fuerza (+15%)               │
│  • Acceso a rutinas HIIT básicas                                │
└─────────────────────────────────────────────────────────────────┘
```

### NIVEL 5: GODÍN

```
┌─────────────────────────────────────────────────────────────────┐
│  GODÍN - Estabilidad y Rutina                                   │
├─────────────────────────────────────────────────────────────────┤
│  Días:           31-45                                          │
│  Requisitos:     Superar Día 22 + Nivel de Usuario 5            │
│  Salida:         Physique > 6 + Jawline > 5                     │
├─────────────────────────────────────────────────────────────────┤
│  DESCRIPCIÓN NARRATIVA:                                         │
│  El engranaje eficiente. Empleo estable y gimnasio regular.     │
│  La base del éxito social.                                      │
├─────────────────────────────────────────────────────────────────┤
│  ENTORNO VISUAL:                                                │
│  Departamento pequeño pero ordenado, oficina moderna            │
├─────────────────────────────────────────────────────────────────┤
│  ROPA:                                                          │
│  Camisa polo, pantalón de vestir, oficina-ready                 │
├─────────────────────────────────────────────────────────────────┤
│  VIDEO DE HITO:                                                 │
│  Avatar siendo recibido en su primer día de trabajo como        │
│  asistente, llegando a la oficina.                              │
├─────────────────────────────────────────────────────────────────┤
│  BENEFICIOS DESBLOQUEADOS:                                      │
│  • Desbloqueo del Módulo HIIT "Blaze" avanzado                  │
│  • Acceso a ropa de marca básica en tienda                      │
└─────────────────────────────────────────────────────────────────┘
```

### NIVEL 6: ACOMODADO

```
┌─────────────────────────────────────────────────────────────────┐
│  ACOMODADO - Confort y Calidad                                  │
├─────────────────────────────────────────────────────────────────┤
│  Días:           46-60                                          │
│  Requisitos:     Superar Día 35 + Wealth > 6                    │
│  Salida:         Wealth > 7 + Aura > 7                          │
├─────────────────────────────────────────────────────────────────┤
│  DESCRIPCIÓN NARRATIVA:                                         │
│  El fin de la mentalidad de escasez. Confort y calidad de vida. │
├─────────────────────────────────────────────────────────────────┤
│  ENTORNO VISUAL:                                                │
│  Apartamento moderno, decoración cuidada, espacio amplio        │
├─────────────────────────────────────────────────────────────────┤
│  ROPA:                                                          │
│  Ropa de marca de buena calidad, smart casual                   │
├─────────────────────────────────────────────────────────────────┤
│  VIDEO DE HITO:                                                 │
│  Avatar comprando su primer auto (Chevy tuneado)                │
├─────────────────────────────────────────────────────────────────┤
│  BENEFICIOS DESBLOQUEADOS:                                      │
│  • Multiplicador de BTC x1.5                                    │
│  • Acceso a vehículos en tienda                                 │
└─────────────────────────────────────────────────────────────────┘
```

### NIVEL 7: PUDIENTE

```
┌─────────────────────────────────────────────────────────────────┐
│  PUDIENTE - El Líder en Ascenso                                 │
├─────────────────────────────────────────────────────────────────┤
│  Días:           61-75                                          │
│  Requisitos:     Superar Día 48 + Physique > 8                  │
│  Salida:         Jawline > 8 + Wealth > 8                       │
├─────────────────────────────────────────────────────────────────┤
│  DESCRIPCIÓN NARRATIVA:                                         │
│  La afluencia es notable y el respeto se gana.                  │
│  Liderazgo social y salud de alto rendimiento.                  │
├─────────────────────────────────────────────────────────────────┤
│  ENTORNO VISUAL:                                                │
│  Condominio de lujo, vista panorámica, espacios amplios         │
├─────────────────────────────────────────────────────────────────┤
│  ROPA:                                                          │
│  Traje de calidad, barba perfilada, mirada de cazador           │
├─────────────────────────────────────────────────────────────────┤
│  VIDEO DE HITO:                                                 │
│  Avatar cerrando un negocio importante, apretón de manos        │
├─────────────────────────────────────────────────────────────────┤
│  BENEFICIOS DESBLOQUEADOS:                                      │
│  • Desbloqueo de joyería de gama alta en tienda                 │
│  • Acceso a propiedades nivel 7+                                │
└─────────────────────────────────────────────────────────────────┘
```

### NIVEL 8: MILLONARIO

```
┌─────────────────────────────────────────────────────────────────┐
│  MILLONARIO - Dominio Total del Entorno                         │
├─────────────────────────────────────────────────────────────────┤
│  Días:           76-85                                          │
│  Requisitos:     Superar Día 62 + Propiedad comprada            │
│  Salida:         Wealth > 10 + Aura > 11                        │
├─────────────────────────────────────────────────────────────────┤
│  DESCRIPCIÓN NARRATIVA:                                         │
│  El dinero ya no es una preocupación. Éxito tangible masivo.    │
├─────────────────────────────────────────────────────────────────┤
│  ENTORNO VISUAL:                                                │
│  Casa de lujo, penthouse, garage con superdeportivos            │
├─────────────────────────────────────────────────────────────────┤
│  ROPA:                                                          │
│  Traje a medida, reloj de lujo, abdominales visibles            │
├─────────────────────────────────────────────────────────────────┤
│  VIDEO DE HITO:                                                 │
│  Avatar en auto deportivo, llegando a su mansión                │
├─────────────────────────────────────────────────────────────────┤
│  BENEFICIOS DESBLOQUEADOS:                                      │
│  • Multiplicador de Racha x2.0 permanente                       │
│  • Acceso a items legendarios                                   │
└─────────────────────────────────────────────────────────────────┘
```

### NIVEL 9: MAGNATE

```
┌─────────────────────────────────────────────────────────────────┐
│  MAGNATE - Dueño del Imperio                                    │
├─────────────────────────────────────────────────────────────────┤
│  Días:           86-95                                          │
│  Requisitos:     Superar Día 80 + Aura > 12 + 50 Focus Work     │
│  Salida:         S-Max en todos los vectores                    │
├─────────────────────────────────────────────────────────────────┤
│  DESCRIPCIÓN NARRATIVA:                                         │
│  Eres la autoridad máxima en tu mundo.                          │
│  Maestría personal y gestión de grandes activos.                │
├─────────────────────────────────────────────────────────────────┤
│  ENTORNO VISUAL:                                                │
│  Mansión expansiva, oficina ejecutiva global, helicóptero       │
├─────────────────────────────────────────────────────────────────┤
│  ROPA:                                                          │
│  Esmoquin impecable, ropa de lujo exclusiva                     │
├─────────────────────────────────────────────────────────────────┤
│  VIDEO DE HITO:                                                 │
│  Avatar en helicóptero, viendo su imperio desde las alturas     │
├─────────────────────────────────────────────────────────────────┤
│  BENEFICIOS DESBLOQUEADOS:                                      │
│  • Acceso a assets de ultra-lujo (Jet Privado, Helipuerto)      │
│  • Aura dorada permanente                                       │
└─────────────────────────────────────────────────────────────────┘
```

### NIVEL 10: SEMI-DIOS

```
┌─────────────────────────────────────────────────────────────────┐
│  SEMI-DIOS - Trascendencia                                      │
├─────────────────────────────────────────────────────────────────┤
│  Días:           96-100                                         │
│  Requisitos:     Día 100 + S-Max Total + 10 Corazones activos   │
│  Salida:         N/A (Nivel Final)                              │
├─────────────────────────────────────────────────────────────────┤
│  DESCRIPCIÓN NARRATIVA:                                         │
│  Trascendencia. Identidad indestructible.                       │
│  Has ganado el juego de la vida.                                │
│                                                                 │
│  "El cambio fundamental es que dejas de ser una víctima de      │
│   tus circunstancias para convertirte en el Arquitecto de       │
│   tu propia realidad."                                          │
├─────────────────────────────────────────────────────────────────┤
│  ENTORNO VISUAL:                                                │
│  Palacio tecnológico, estación espacial, centro de mando global │
├─────────────────────────────────────────────────────────────────┤
│  ROPA:                                                          │
│  Lo mejor de lo mejor, textiles futuristas, armadura dorada     │
├─────────────────────────────────────────────────────────────────┤
│  VIDEO DE HITO (Día 100):                                       │
│  Escena épica de celebración, time-lapse de evolución completa  │
├─────────────────────────────────────────────────────────────────┤
│  BENEFICIOS DESBLOQUEADOS:                                      │
│  • Estatus de "Inmortal"                                        │
│  • Modo Prestigio (Niveles 11-13)                               │
│  • Acceso al "Consejo de Leyendas"                              │
│  • Capa de Oro Divina (ítem único)                              │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3.3 Niveles Post-Game (11-13) - MODO PRESTIGIO

```
┌─────────────────────────────────────────────────────────────────┐
│  MODO PRESTIGIO - Para los que no se conforman                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  NIVEL 11: ÉLITE                                                │
│  ─────────────                                                  │
│  • Desbloqueado tras completar 100 días                         │
│  • Tareas aumentan en dificultad                                │
│  • Nuevos items exclusivos de prestigio                         │
│                                                                 │
│  NIVEL 12: LEYENDA                                              │
│  ──────────────                                                 │
│  • Requiere 2 ciclos de 100 días completados                    │
│  • Acceso a mentoría de nuevos usuarios                         │
│  • Efectos visuales legendarios                                 │
│                                                                 │
│  NIVEL 13: INMORTAL                                             │
│  ───────────────                                                │
│  • Requiere 3+ ciclos perfectos                                 │
│  • Estatus máximo del sistema                                   │
│  • Avatar con aura divina permanente                            │
│  • Acceso a features exclusivas de desarrollo                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---


# 4. SISTEMA DE ARQUETIPOS (Las 6 Semillas)

## 4.1 Propósito de los Arquetipos

> **"Identidad visual base que se transforma"**

Los arquetipos son los 6 modelos base de avatar que el usuario selecciona durante el onboarding. Cada uno tiene:
- **Lore único:** Historia de origen trágica
- **Identity Anchors:** Características físicas inmutables para consistencia de IA
- **Transformación Visual:** Arco narrativo de evolución

La elección de arquetipo es **INMUTABLE** durante el ciclo de 100 días. Solo puede cambiarse tras muerte del avatar o al iniciar nuevo ciclo.

---

## 4.2 Arquetipo 1: "RASTAS"

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         ARQUETIPO: RASTAS                                    ║
║                         Modelo Base #1                                       ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  NOMBRE REAL:     Por definir durante onboarding                             ║
║  APODO:          "Rastas" / "El Gamer Caído"                                 ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  PASADO (LORE):                                                              ║
║  ─────────────                                                               ║
║  El Rastas es un hombre noble de los que se conocen como "bonachón", tanto   ║
║  así que su esposa tenía sus encuentros con su mejor amigo en la habitación  ║
║  de a un lado mientras el buen Rastas disputaba una partida de Minecraft,    ║
║  hasta que un día olvidó conectar los audífonos y la traición fue            ║
║  descubierta. Nadie sabe cómo pasó, pero el final de esta historia termina   ║
║  con nuestro protagonista durmiendo en las calles. Dicen que en lugar de     ║
║  echar a su mujer, el que terminó echado fue él.                             ║
║                                                                              ║
║  TRANSFORMACIÓN: De gamer en decadencia → CEO tech de élite                  ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  DESCRIPCIÓN VISUAL INICIAL:                                                 ║
║  ───────────────────────────                                                 ║
║  Gordo, descuidado, no existe camisa en la que pueda meter su panza,         ║
║  pero sus rastas siguen impecables. Ex-gamer en decadencia absoluta.         ║
║                                                                              ║
║  ESTILO: Ex-gamer en decadencia absoluta                                     ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  IDENTITY ANCHORS (Para IA - Inmutables):                                    ║
║  ────────────────────────────────────────                                    ║
║  • PELO:     "brown dreadlocks, thick locks, well-maintained"                ║
║  • CARA:     "round face, friendly eyes, wide nose, warm expression"         ║
║  • TONO:     "warm brown skin"                                               ║
║  • RASGO:    "dreadlocks always clean and styled"                            ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  TRANSFORMACIÓN VISUAL:                                                      ║
║  ──────────────────────                                                      ║
║  NIVEL 1-3:  Gamer obeso, camiseta gris manchada, rastas impecables          ║
║  NIVEL 4-6:  Primeros signos de orden, ropa limpia, postura mejorando        ║
║  NIVEL 7-9:  Fit, ropa tech-wear, rastas con accesorios dorados              ║
║  NIVEL 10+:  CEO tech, traje futurista, rastas estilizadas, aura de poder    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 4.3 Arquetipo 2: "EL MUSCLES"

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         ARQUETIPO: EL MUSCLES                                ║
║                         Modelo Base #2                                       ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  NOMBRE REAL:     Por definir durante onboarding                             ║
║  APODO:          "Muscles" / "El Tanque" / "Ex-Cadenero"                     ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  PASADO (LORE):                                                              ║
║  ─────────────                                                               ║
║  Solía ser el "cadenero" más respetado de la zona de antros, su vida eran    ║
║  las pesas y la seguridad. Todo acabó cuando un romance prohibido con la     ║
║  hija de un magnate local salió mal: lo dejó sin contactos, sin empleo y     ║
║  con una orden de restricción. Cambió los batidos de proteína por los        ║
║  tamales de la esquina y la depresión lo convirtió en el "Tanque" que es     ║
║  hoy.                                                                        ║
║                                                                              ║
║  TRANSFORMACIÓN: De matón sedentario → Empresario fitness                    ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  DESCRIPCIÓN VISUAL INICIAL:                                                 ║
║  ───────────────────────────                                                 ║
║  Espalda ancha enterrada en grasa, camiseta de resaque que le queda como     ║
║  ombliguera y mirada de "ya no me importa nada".                             ║
║                                                                              ║
║  ESTILO: Ex-seguridad urbana en modo sedentario                              ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  IDENTITY ANCHORS (Para IA - Inmutables):                                    ║
║  ────────────────────────────────────────                                    ║
║  • PELO:     "bald, shaved head, clean scalp"                                ║
║  • CARA:     "square jaw, small intense eyes, thick neck"                    ║
║  • TONO:     "tan skin, weathered look"                                      ║
║  • RASGO:    "intimidating presence even when overweight"                    ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  TRANSFORMACIÓN VISUAL:                                                      ║
║  ──────────────────────                                                      ║
║  NIVEL 1-3:  Gordo con espalda ancha, camiseta apretada, calvo brillante     ║
║  NIVEL 4-6:  Grasa convirtiéndose en músculo, postura de seguridad volviendo ║
║  NIVEL 7-9:  Culturista voluminoso, cuello grueso, mirada intimidante        ║
║  NIVEL 10+:  Fisicoculturista de élite, dueño de gimnasio, presencia extrema ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 4.4 Arquetipo 3: "PECAS"

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         ARQUETIPO: PECAS                                     ║
║                         Modelo Base #3                                       ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  NOMBRE REAL:     Por definir durante onboarding                             ║
║  APODO:          "Pecas" / "El Genio Caído" / "Crypto-Boy"                   ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  PASADO (LORE):                                                              ║
║  ─────────────                                                               ║
║  Un genio de las computadoras que lo tuvo todo... en papel. Apostó los       ║
║  ahorros de su vida (y los de sus padres) en una moneda que prometía         ║
║  llevarlo "a la luna", pero terminó estrellándose en el suelo. Ahora vive    ║
║  en el cuarto de lavado de su tía, escondiéndose del mundo bajo su           ║
║  sudadera marrón mientras sueña con su antiguo estatus.                      ║
║                                                                              ║
║  TRANSFORMACIÓN: De nerd quebrado → Magnate tech                             ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  DESCRIPCIÓN VISUAL INICIAL:                                                 ║
║  ───────────────────────────                                                 ║
║  Pelo rizado alborotado, cara pecosa y una sudadera que huele a encierro     ║
║  y papitas.                                                                  ║
║                                                                              ║
║  ESTILO: Genio informático en bancarrota emocional                           ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  IDENTITY ANCHORS (Para IA - Inmutables):                                    ║
║  ────────────────────────────────────────                                    ║
║  • PELO:     "curly red-brown hair, messy, unkempt"                          ║
║  • CARA:     "freckles covering face, thin face, sharp features"             ║
║  • TONO:     "pale skin with prominent freckles"                             ║
║  • RASGO:    "intelligent but tired eyes"                                    ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  TRANSFORMACIÓN VISUAL:                                                      ║
║  ──────────────────────                                                      ║
║  NIVEL 1-3:  Delgado pero descuidado, sudadera marrón, mirada perdida        ║
║  NIVEL 4-6:  Primeros músculos, ropa limpia, mirada recuperando foco         ║
║  NIVEL 7-9:  Fit, ropa tech minimalista, pecas destacando en piel sana       ║
║  NIVEL 10+:  Magnate tech, traje elegante, pelo rizado estilizado, lentes   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 4.5 Arquetipo 4: "EL GREÑAS"

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         ARQUETIPO: EL GREÑAS                                 ║
║                         Modelo Base #4                                       ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  NOMBRE REAL:     Por definir durante onboarding                             ║
║  APODO:          "Greñas" / "El Rocker" / "Veterano"                         ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  PASADO (LORE):                                                              ║
║  ─────────────                                                               ║
║  Lideraba una banda de rock pesado en los 90. Era el rey del escenario      ║
║  hasta que la calvicie y el streaming acabaron con su carrera. Intentó      ║
║  poner un taller de motos, pero se comió las ganancias antes de abrir.      ║
║  Vive de los recuerdos de sus giras mientras usa ropa de deporte que no     ║
║  conoce el gimnasio.                                                         ║
║                                                                              ║
║  TRANSFORMACIÓN: De músico frustrado → Productor exitoso                     ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  DESCRIPCIÓN VISUAL INICIAL:                                                 ║
║  ───────────────────────────                                                 ║
║  Calvo impecable con una perilla tipo "candado" negro que es su último      ║
║  orgullo. Sudadera vieja y mirada de veterano olvidado.                      ║
║                                                                              ║
║  ESTILO: Rockero "Old School" en el olvido                                   ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  IDENTITY ANCHORS (Para IA - Inmutables):                                    ║
║  ────────────────────────────────────────                                    ║
║  • PELO:     "balding with long hair in back, goatee beard"                  ║
║  • CARA:     "angular face, deep set eyes, goatee"                           ║
║  • TONO:     "weathered skin, aged appearance"                               ║
║  • RASGO:    "goatee always perfectly groomed"                               ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  TRANSFORMACIÓN VISUAL:                                                      ║
║  ──────────────────────                                                      ║
║  NIVEL 1-3:  Calvo con greñas, perilla negra, ropa de rock vieja             ║
║  NIVEL 4-6:  Perilla mantenida, ropa limpia, mirada recuperando brillo       ║
║  NIVEL 7-9:  Fit, estilo rock elegante, perilla estilizada, cuero limpio     ║
║  NIVEL 10+:  Productor de élite, traje rockero, perilla digna de ícono       ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 4.6 Arquetipo 5: "EL RUBIO"

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         ARQUETIPO: EL RUBIO                                  ║
║                         Modelo Base #5                                       ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  NOMBRE REAL:     Por definir durante onboarding                             ║
║  APODO:          "Rubio" / "El Galán" / "Ex-Popular"                         ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  PASADO (LORE):                                                              ║
║  ─────────────                                                               ║
║  El "rubio galán" de la preparatoria que nunca aceptó que el tiempo pasa.    ║
║  Después de que su banda de covers de Bon Jovi fracasara, se dedicó a la    ║
║  vida contemplativa (comer y dormir). Su chaqueta de mezclilla es lo único   ║
║  que le queda de su época dorada, aunque ya no cierra ni por milagro de      ║
║  Dios.                                                                       ║
║                                                                              ║
║  TRANSFORMACIÓN: De glory days → Nuevo prime de élite                        ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  DESCRIPCIÓN VISUAL INICIAL:                                                 ║
║  ───────────────────────────                                                 ║
║  Pelo rubio spiky desordenado, vientre al aire libre y actitud de estrella   ║
║  de rock sin público.                                                        ║
║                                                                              ║
║  ESTILO: Rebelde sin causa y sin condición física                            ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  IDENTITY ANCHORS (Para IA - Inmutables):                                    ║
║  ────────────────────────────────────────                                    ║
║  • PELO:     "blonde wavy hair, styled back or spiky"                        ║
║  • CARA:     "strong jaw, blue eyes, handsome features"                      ║
║  • TONO:     "fair skin"                                                     ║
║  • RASGO:    "natural good looks under the weight"                           ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  TRANSFORMACIÓN VISUAL:                                                      ║
║  ──────────────────────                                                      ║
║  NIVEL 1-3:  Galán obeso, pelo rubio desordenado, chaqueta que no cierra     ║
║  NIVEL 4-6:  Primeros signos de jawline, pelo arreglado, ropa ajustada       ║
║  NIVEL 7-9:  Fit, rubio estilizado, ropa de marca, mirada de confianza       ║
║  NIVEL 10+:  Modelo de élite, rubio perfecto, traje impecable, galán total   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 4.7 Arquetipo 6: "EL LIC"

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         ARQUETIPO: EL LIC                                    ║
║                         Modelo Base #6                                       ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  NOMBRE REAL:     Por definir durante onboarding                             ║
║  APODO:          "Lic" / "El Ejecutivo" / "Reemplazado"                      ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  PASADO (LORE):                                                              ║
║  ─────────────                                                               ║
║  Era el empleado del mes durante 5 años seguidos. Tenía el plan de retiro    ║
║  perfecto hasta que un software de inteligencia artificial hizo su trabajo   ║
║  en 2 segundos. Lo despidieron un viernes por la tarde y para el lunes ya    ║
║  había descubierto que la comida rápida es la mejor terapia para el estrés   ║
║  de ser irrelevante.                                                         ║
║                                                                              ║
║  TRANSFORMACIÓN: De despedido → Dueño de empresa                             ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  DESCRIPCIÓN VISUAL INICIAL:                                                 ║
║  ───────────────────────────                                                 ║
║  Cabello desordenado estilo afro, piel bronceada por esperar el camión y     ║
║  una playera gris que lucha por no explotar.                                 ║
║                                                                              ║
║  ESTILO: Ejecutivo caído en desgracia por la tecnología                      ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  IDENTITY ANCHORS (Para IA - Inmutables):                                    ║
║  ────────────────────────────────────────                                    ║
║  • PELO:     "black hair, receding hairline, messy"                          ║
║  • CARA:     "rectangular glasses, stubble, tired eyes"                      ║
║  • TONO:     "olive skin"                                                    ║
║  • RASGO:    "intellectual appearance despite neglect"                       ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  TRANSFORMACIÓN VISUAL:                                                      ║
║  ──────────────────────                                                      ║
║  NIVEL 1-3:  Ejecutivo obeso, pelo desordenado, lentes sucios, barba de días ║
║  NIVEL 4-6:  Primer orden, lentes limpios, barba cuidada, ropa ajustada      ║
║  NIVEL 7-9:  Fit, ejecutivo elegante, lentes de diseñador, barba perfecta    ║
║  NIVEL 10+:  CEO tech, traje futurista, lentes sin marco, presencia de líder ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 4.8 Matriz Comparativa de Arquetipos

```
┌─────────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│   ARQUETIPO     │   PELO       │   TONO       │   RASGO      │  TRANSFORM   │
├─────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ 1. RASTAS       │ Dreadlocks   │ Warm brown   │ Friendly     │ Gamer→CEO    │
│ 2. MUSCLES      │ Bald         │ Tan          │ Intimidating │ Matón→Fit    │
│ 3. PECAS        │ Curly red    │ Pale/freckle │ Intelligent  │ Nerd→Tech    │
│ 4. GREÑAS       │ Balding long │ Weathered    │ Veteran      │ Rocker→Prod  │
│ 5. RUBIO        │ Blonde wavy  │ Fair         │ Handsome     │ Galán→Model  │
│ 6. LIC          │ Black afro   │ Olive        │ Intellectual │ Exec→Owner   │
└─────────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
```

---

# 5. SISTEMA DE SALUD (Corazones)

## 5.1 Mecánica Base

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         SISTEMA DE SALUD                                     ║
║                    "10 Corazones. Muerte Permanente."                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  MÁXIMO INICIAL:     10 corazones                                            ║
║  MÁXIMO EXPANDIDO:   13 corazones (post-game, niveles 11-13)                 ║
║  CONDICIÓN CRÍTICA:  Al llegar a 0 = MUERTE DEL AVATAR                       ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### Representación Visual

La barra de corazones está inspirada en Zelda, con diseños progresivos:

```
CORAZONES SALUDABLES (8-10/13):
❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️
→ UI normal, corazones brillantes, latido suave

CORAZONES HERIDOS (4-7):
💛 💛 💛 💛 💛 ❤️ ❤️ ❤️ ❤️ ❤️
→ UI con advertencia amarilla, latido más rápido

CORAZONES CRÍTICOS (1-3):
🖤 🖤 🖤 🖤 🖤 🖤 🖤 ❤️ ❤️ ❤️
→ UI con advertencia ROJA, latido acelerado, notificaciones urgentes

MUERTE (0):
🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤
→ Pantalla de muerte, animación dramática
```

---

## 5.2 Cómo se Pierde Salud

| Condición | Pérdida | Descripción |
|-----------|---------|-------------|
| **Judgement Night < 80%** | -1 corazón | Día fallido (menos del 80% de tareas) |
| **Judgement Night 0%** | -2 corazones | Día completamente fallido |
| **Modo Limbo (3 días)** | -1 corazón | Degradación por suscripción expirada |
| **Ruptura de racha 15+ días** | -2 corazones | Impacto emocional de la decepción |
| **Día de Guerra fallido** | -2 corazones | Fallar en día de intensidad doble |

---

## 5.3 Cómo se Recupera Salud

| Condición | Ganancia | Restricción |
|-----------|----------|-------------|
| **Día 100% completado** | +1 corazón | Si < máximo |
| **Racha de 7 días** | +1 corazón | Si < máximo |
| **Botiquín de Disciplina** | +1 corazón | Máximo 1 por semana, compra en tienda |
| **Subida de nivel** | +1 corazón | Automático al alcanzar nuevo nivel |

---

## 5.4 Estados de Salud

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTADO SALUDABLE (8-10/13 corazones)                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  • UI normal, sin advertencias                                              │
│  • Avatar se muestra con postura normal                                     │
│  • Notificaciones estándar                                                  │
│  • Multiplicadores de BTC al 100%                                           │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTADO HERIDO (4-7 corazones)                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  • UI con borde amarillo de advertencia                                     │
│  • Avatar muestra signos de fatiga (hombros caídos ligeramente)             │
│  • Notificaciones más frecuentes de recordatorio                            │
│  • Multiplicadores de BTC al 90%                                            │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTADO CRÍTICO (1-3 corazones)                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  • UI con borde ROJO PULSANTE                                               │
│  • Avatar se muestra herido (vendajes, postura encorvada)                   │
│  • Notificaciones urgentes cada 3 horas                                     │
│  • Multiplicadores de BTC al 75%                                            │
│  • Mensaje de alerta: "¡TU AVATAR ESTÁ EN PELIGRO!"                         │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  MUERTE (0 corazones)                                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  • Pantalla de muerte dramática                                             │
│  • Animación de avatar colapsando                                                                           │
│  • Sonido de estática y corazón deteniéndose                                │
│  • Resumen de lo perdido vs. lo conservado                                  │
│  • Botón "Renacer" para iniciar nuevo ciclo                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5.5 Visualización en el Avatar

### Efectos Visuales por Estado de Salud

```
SALUD 10/10:
  → Postura perfecta, brillo saludable en piel, mirada alerta

SALUD 7-9:
  → Postura ligeramente cansada, menos brillo en piel

SALUD 4-6:
  → Hombros caídos, ojeras leves, ropa ligeramente desaliñada

SALUD 1-3:
  → Postura encorvada, vendajes visibles, mirada derrotada
  → Fondo del avatar se oscurece

SALUD 0 (MUERTE):
  → Avatar en el suelo, escenario deteriorado, paleta gris
```

---

# 6. SISTEMA DE RACHA (Streak)

## 6.1 Definición de Día Exitoso

> **"Completar ≥ 80% de las tareas del protocolo"**

Un día se considera exitoso cuando el usuario completa al menos el 80% de las tareas obligatorias de los 4 arquetipos.

### Cálculo del Porcentaje

```
Tareas obligatorias por día:
• Arquetipo Mental:    1 tarea mínimo (meditación)
• Arquetipo Cara:      1 tarea mínimo (postura/facial/kegel)
• Arquetipo Productividad: 1 tarea mínimo (journal/skill/focus)
• Arquetipo Físico:    1 tarea mínimo (fuerza/cardio/hidratación)

Total mínimo: 4 tareas
Para 80%: Completar al menos 4 de 4 tareas principales
```

---

## 6.2 Multiplicadores de BTC por Racha

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MULTIPLICADORES DE RACHA                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   DÍAS        MULTIPLICADOR    BONO ADICIONAL         NOMBRE FASE           │
│   ─────────────────────────────────────────────────────────────────────     │
│   0-6         x1.0 (base)      -                      Despertar             │
│   7-13        x1.1             -                      Validación            │
│   14-20       x1.2             -                      Consolidación         │
│   21-29       x1.3             -                      Momentum              │
│   30-59       x1.5             +1,500 BTC + Badge     Estado de Flujo       │
│   60-89       x1.75            +3,000 BTC + Item      Círculo de Élite      │
│   90+         x2.0             +5,000 BTC + Aura      Aura de Inmortalidad  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6.3 Bonificaciones Especiales por Hito de Racha

| Hito | Bonificación | Descripción |
|------|--------------|-------------|
| **7 días** | +1 corazón | Recuperación de salud por consistencia |
| **14 días** | +500 BTC bonus | Recompensa por dos semanas |
| **30 días** | +1,500 BTC + Badge especial | Primer mes completo |
| **60 días** | +3,000 BTC + Ítem exclusivo | Dos meses de disciplina |
| **100 días** | Recompensa épica | Final del protocolo |

---

## 6.4 Ruptura de Racha

### Qué Pasa al Romper la Racha

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         RUPTURA DE RACHA                                     ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  CONDICIÓN: Completar < 80% de tareas en un día                              ║
║                                                                              ║
║  CONSECUENCIAS:                                                              ║
║  ──────────────                                                              ║
║  1. Contador de racha se resetea a 0                                         ║
║  2. Multiplicador vuelve a x1.0                                              ║
║  3. Pérdida de 1 corazón de salud                                            ║
║  4. Degradación inmediata de 0.5 puntos en AURA                              ║
║  5. Animación de "racha rota" con efecto de cristal quebrándose              ║
║                                                                              ║
║  EFECTO VISUAL:                                                              ║
║  • Avatar muestra decepción                                                  ║
║  • UI parpadea en rojo brevemente                                            ║
║  • Sonido de estática digital                                                ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 6.5 Protección de Racha (Futuro)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESCUDO DE CONSISTENCIA (Item de Tienda)                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PRECIO:      2,500 BTC                                                     │
│  EFECTO:      Protege la racha de 1 día de fallo                            │
│  LÍMITE:      Máximo 1 por semana                                           │
│  USO:         Automático al detectar día fallido                            │
│                                                                             │
│  NOTA:        El usuario debe haber completado al menos 50% de tareas       │
│               para que el escudo se active.                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6.6 Fases de Racha Detalladas

### FASE 1: Despertar del Hábito (Días 1-7)

```
MULTIPLICADOR: x1.0 → x1.1
OBJETIVO: Superar la fricción inicial de crear hábitos

BENEFICIOS:
• El usuario comienza a acumular recursos un 10% más rápido
• Desbloqueo de accesorios básicos en tienda
• Feedback positivo frecuente del sistema

PSICOLOGÍA:
"Estos primeros días son los más difíciles. Cada día que completes
es una victoria contra tu antigua versión."
```

### FASE 2: Validación de Identidad (Días 8-14)

```
MULTIPLICADOR: x1.1 → x1.2
OBJETIVO: Reforzar el compromiso cuando la motivación inicial decae

BENEFICIOS:
• Desbloqueo de accesorio temporal (ej: Calzado de neón)
• Aura de color sutil alrededor del avatar
• +500 BTC bonus al alcanzar día 14

PSICOLOGÍA:
"Ver un cambio visual tangible refuerza el compromiso justo cuando
la motivación biológica inicial suele decaer."
```

### FASE 3: Estado de Flujo (Días 30-59)

```
MULTIPLICADOR: x1.5
OBJETIVO: Recompensa masiva por completar el primer mes

BENEFICIOS:
• Las ganancias se disparan un 50%
• Permite adquirir primeros activos de estatus real
• Badge "Guerrero del Mes" permanente
• +1,500 BTC bonus

PSICOLOGÍA:
"Has probado que puedes mantener la disciplina por 30 días.
Ahora eres un verdadero practicante."
```

### FASE 4: Resiliencia del Guerrero (Días 60-89)

```
MULTIPLICADOR: x1.75
OBJETIVO: Prevenir desánimo por imprevistos de la vida real

BENEFICIOS:
• Vector AURA entra en modo "Blindado"
• No se degrada durante las primeras 48h tras un fallo
• Ítem exclusivo de racha 60 días
• +3,000 BTC bonus

PSICOLOGÍA:
"La vida real tiene imprevistos. Esta protección te permite
recuperarte sin perder todo tu progreso mental."
```

### FASE 5: Aura de Inmortalidad (Días 90-100)

```
MULTIPLICADOR: x2.0
OBJETIVO: Recompensa suprema por la recta final

BENEFICIOS:
• Protección Suprema: Fallar un día NO resta corazones
• La nueva identidad de élite está tan arraigada que un desliz
temporal no destruye la estructura construida
• +5,000 BTC bonus al completar día 100

PSICOLOGÍA:
"Eres un Semi-Dios en potencia. Tu disciplina ya es parte de
tu identidad, no solo un hábito."
```

---


# 7. JUDGEMENT NIGHT (Cierre del Día)

## 7.1 Concepto

> **"Cada noche, tu día es juzgado. Tu avatar paga el precio de tus decisiones."**

Judgement Night es el proceso automático que ocurre al final de cada día del protocolo (hora configurable por usuario, default 00:00). Evalúa el desempeño del usuario, aplica consecuencias y genera la nueva imagen del avatar.

---

## 7.2 Timing

| Aspecto | Especificación |
|---------|----------------|
| **Hora de ejecución** | 00:00 hora local del usuario |
| **Base de zona horaria** | Perfil del usuario (configurable) |
| **Mecanismo** | Job programado (cron) |
| **Duración** | 30-60 segundos máximo |

---

## 7.3 Proceso Completo de Judgement Night

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    PROCESO JUDGEMENT NIGHT                                   ║
║                    (Ejecutado automáticamente)                               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PASO 1: OBTENER DATOS                                                       ║
║  ───────────────────                                                         ║
║  • Obtener tareas del día del usuario                                        ║
║  • Calcular tareas completadas vs. totales                                   ║
║  • Verificar tareas críticas (meditación, ejercicio)                         ║
║                                                                              ║
║  PASO 2: CALCULAR COMPLETION RATE                                            ║
║  ───────────────────────────────                                             ║
║  completion_rate = (tareas_completadas / tareas_totales) × 100               ║
║                                                                              ║
║  PASO 3: DETERMINAR RESULTADO                                                ║
║  ────────────────────────────                                                ║
║  • SUCCESS:   100% completado                                                ║
║  • PARTIAL:   80-99% completado                                              ║
║  • FAILED:    < 80% completado                                               ║
║  • DEATH:     FAILED + health_points = 0                                     ║
║                                                                              ║
║  PASO 4: APLICAR CAMBIOS DE SALUD                                            ║
║  ────────────────────────────────                                            ║
║  • SUCCESS/PARTIAL: Sin cambio                                               ║
║  • FAILED: -1 corazón                                                        ║
║  • FAILED 0%: -2 corazones                                                   ║
║                                                                              ║
║  PASO 5: ACTUALIZAR RACHA                                                    ║
║  ───────────────────                                                         ║
║  • SUCCESS/PARTIAL: +1 día de racha                                          ║
║  • FAILED: Reset a 0                                                         ║
║                                                                              ║
║  PASO 6: APLICAR DECAY BIOLÓGICO                                             ║
║  ───────────────────────────────                                             ║
║  • Sin cardio: fat_lvl + 0.02                                                ║
║  • Sin fuerza: muscle_lvl - 0.02                                             ║
║  • Sin meditación: aura_lvl - 0.01                                           ║
║                                                                              ║
║  PASO 7: AVANZAR DÍA                                                         ║
║  ───────────────                                                             ║
║  • current_day += 1                                                          ║
║  • Verificar si se alcanzó nuevo nivel                                       ║
║                                                                              ║
║  PASO 8: ENCOLAR GENERACIÓN DE IMAGEN                                        ║
║  ───────────────────────────────────                                         ║
║  • Crear job de generación de imagen                                         ║
║  • Prioridad basada en resultado del día                                     ║
║                                                                              ║
║  PASO 9: CREAR LOG DEL DÍA                                                   ║
║  ───────────────────                                                         ║
║  • Registrar métricas, cambios, resultado                                    ║
║                                                                              ║
║  PASO 10: ENVIAR NOTIFICACIONES                                              ║
║  ───────────────────────────                                                 ║
║  • Notificar resultado al usuario                                            ║
║  • Mostrar preview de avatar actualizado                                     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 7.4 Resultados Posibles

### SUCCESS (100% Completado)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ✅ DÍA PERFECTO                                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SALUD:        Sin cambio                                                   │
│  RACHA:        +1 día                                                       │
│  IMAGEN:       Prioridad ALTA                                               │
│  NOTIFICACIÓN: Celebración con animación de oro                             │
│  BONO BTC:     +50 BTC (Día Perfecto)                                       │
│                                                                             │
│  MENSAJE: "DÍA PERFECTO. Tu disciplina es inquebrantable."                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### PARTIAL (80-99% Completado)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ⚡ DÍA SUPERADO                                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SALUD:        Sin cambio                                                   │
│  RACHA:        +1 día                                                       │
│  IMAGEN:       Prioridad NORMAL                                             │
│  NOTIFICACIÓN: Día superado, recordatorio de mejora                         │
│  BONO BTC:     Ninguno                                                      │
│                                                                             │
│  MENSAJE: "Día superado. La excelencia exige el 100%."                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### FAILED (< 80% Completado)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ❌ DÍA FALLIDO                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SALUD:        -1 corazón                                                   │
│  RACHA:        Reset a 0                                                    │
│  IMAGEN:       Prioridad BAJA                                               │
│  NOTIFICACIÓN: Advertencia con efecto de glitch                             │
│  DEGRADACIÓN:  -0.5 AURA                                                    │
│                                                                             │
│  MENSAJE: "El descanso es para los débiles. Mañana empiezas de nuevo."      │
│                                                                             │
│  EFECTO VISUAL:                                                             │
│  • Avatar muestra decepción                                                 │
│  • Corazón se rompe con animación                                           │
│  • UI parpadea en rojo                                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### DEATH (0 Corazones tras Failed)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  💀 MUERTE DEL AVATAR                                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PROCESO:      Ejecutar proceso de muerte completo                          │
│  IMAGEN:       Avatar deteriorado, paleta gris                              │
│  NOTIFICACIÓN: Alerta de muerte con sonido dramático                        │
│                                                                             │
│  MENSAJE: "Tu avatar ha muerto. Pero tú puedes renacer."                    │
│                                                                             │
│  ACCIONES:                                                                  │
│  • Mostrar pantalla de muerte                                               │
│  • Resumen de lo perdido vs. conservado                                     │
│  • Botón "Renacer" para reiniciar                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7.5 Decay Biológico

### Mecánica de Degradación Natural

```
Si el usuario NO completó ciertas tareas en el día:

┌─────────────────────────────────────────────────────────────────────────────┐
│  TAREA NO COMPLETADA          │  EFECTO EN VECTOR                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  Sin Cardio                   │  fat_lvl + 0.02 (aumenta grasa)            │
│  Sin Entrenamiento Fuerza     │  muscle_lvl - 0.02 (pierde músculo)        │
│  Sin Meditación               │  aura_lvl - 0.01 (pierde presencia)        │
│  Sin Tarea Facial             │  face_lvl - 0.01 (pierde definición)       │
│  Sin Productividad            │  wealth_lvl - 0.01 (pierde estatus)        │
└─────────────────────────────────────────────────────────────────────────────┘

NOTA: Los valores mínimos/máximos de cada vector se respetan.
```

---

## 7.6 Prioridades de Generación de Imagen

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PRIORIDAD    │  RESULTADO        │  TIEMPO ESTIMADO  │  COLA              │
├─────────────────────────────────────────────────────────────────────────────┤
│  ALTA         │  SUCCESS (100%)   │  < 30 segundos    │  Primero           │
│  NORMAL       │  PARTIAL (80-99%) │  < 2 minutos      │  Segundo           │
│  BAJA         │  FAILED (< 80%)   │  < 5 minutos      │  Último            │
│  CRÍTICA      │  DEATH            │  Inmediato        │  Prioridad máxima  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 8. MUERTE Y RESURRECCIÓN

## 8.1 Concepto

> **"El dolor de perder el físico enseña el valor del esfuerzo"**

La muerte del avatar es el evento más dramático del sistema. Ocurre cuando los corazones de salud llegan a cero. Representa el fracaso total de la disciplina y trae consecuencias severas pero justas.

---

## 8.2 Qué SE RESETEA

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         RESETEO POR MUERTE                                   ║
║                    "El precio del fracaso"                                   ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  VECTOR              │  VALOR ANTES  │  VALOR DESPUÉS                        ║
║  ────────────────────────────────────────────────────────────────            ║
║  fat_lvl             │  X            │  13.00 (máxima grasa)                 ║
║  muscle_lvl          │  X            │  1.00 (mínimo músculo)                ║
║  health_points       │  0            │  10 (salud completa)                  ║
║  streak_days         │  X            │  0                                    ║
║  current_day         │  X            │  1 (reinicio del protocolo)           ║
║  current_level       │  X            │  1 (Indigente)                        ║
║                                                                              ║
║  BTC PERDIDOS: 50% de los Bitcoins acumulados (penalización por quiebra)     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 8.3 Qué se CONSERVA

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    CONSERVADO TRAS MUERTE                                    ║
║              "El conocimiento permanece, el físico se pierde"                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  VECTOR              │  VALOR  │  RAZÓN                                      ║
║  ────────────────────────────────────────────────────────────────            ║
║  aura_lvl            │  X      │  Progreso mental (disciplina interna)       ║
║  face_lvl            │  X      │  Progreso facial (hábitos de cuidado)       ║
║  wealth_lvl          │  X      │  Progreso productivo (conocimiento)         ║
║  env_lvl             │  X - 3  │  Parcialmente (-3 niveles de entorno)       ║
║  BTC                 │  X × 0.5│  50% de Bitcoins (penalización)             ║
║  Inventario          │  X      │  Items comprados (pero bloqueados)          ║
║  Historial           │  X      │  Estadísticas y logros                      ║
║  XP Total            │  X      │  Proof of Work acumulado                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 8.4 Bloqueo de Items por Nivel

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SISTEMA DE BLOQUEO POST-MUERTE                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CONCEPTO: Los items no se pierden, pero quedan BLOQUEADOS hasta que       │
│  el usuario recupere el nivel necesario para "merecerlos" nuevamente.      │
│                                                                             │
│  EJEMPLO:                                                                   │
│  • Usuario muere con nivel 7                                                 │
│  • Tenía comprado: Reloj de lujo (req. nivel 7)                            │
│  • Tras muerte: Reloj aparece como "BLOQUEADO - Requiere Nivel 7"          │
│  • Al alcanzar nivel 7 nuevamente: Reloj se desbloquea automáticamente     │
│                                                                             │
│  MENSAJE EN UI:                                                             │
│  "Este ítem te pertenece, pero debes recuperar el nivel para usarlo.       │
│   La verdadera riqueza no se compra, se gana."                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 8.5 Pantalla de Muerte

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                                                                              ║
║                           💀                                                 ║
║                                                                              ║
║                    TU AVATAR HA MUERTO                                       ║
║                                                                              ║
║         "La disciplina es la diferencia entre lo que quieres                 ║
║                    y lo que obtienes."                                       ║
║                                                                              ║
║  ═══════════════════════════════════════════════════════════════════════     ║
║                                                                              ║
║  PERDIDO:                         CONSERVADO:                                ║
║  ────────                         ──────────                                 ║
║  ❌ Nivel X                       ✅ Nivel Mental (aura_lvl)                 ║
║  ❌ Físico logrado                ✅ Conocimiento (wealth_lvl)               ║
║  ❌ Racha de X días               ✅ 50% de BTC                              ║
║  ❌ 50% de Bitcoins               ✅ Inventario (bloqueado)                  ║
║                                                                              ║
║  ═══════════════════════════════════════════════════════════════════════     ║
║                                                                              ║
║  "Pero la muerte no es el final. Es una lección.                             ║
║   Puedes renacer, más fuerte, con el conocimiento de tus errores."          ║
║                                                                              ║
║                    ┌─────────────────────┐                                   ║
║                    │     RENACER         │                                   ║
║                    │   (Iniciar Ciclo)   │                                   ║
║                    └─────────────────────┘                                   ║
║                                                                              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 8.6 Filosofía de la Muerte

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  "El dolor de perder el físico enseña el valor del esfuerzo."              │
│                                                                             │
│  La muerte en METAMEN100 no es un castigo arbitrario. Es la consecuencia   │
│  natural de la negligencia sostenida. Al igual que en la vida real,        │
│  descuidar tu salud y disciplina tiene consecuencias reales.               │
│                                                                             │
│  PERO: A diferencia de la vida real, aquí tienes una segunda oportunidad.  │
│  Puedes renacer con el conocimiento de lo que funciona, con la sabiduría   │
│  de tus errores, y con la determinación de no volver a fallar.             │
│                                                                             │
│  Cada muerte es una escuela. Cada resurrección es una promesa.             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 8.7 Costo Escalante de Muertes Consecutivas

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  CICLO DE MUERTE  │  PENALIZACIÓN BTC  │  EFECTO VISUAL                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  1ª muerte        │  -50% BTC            │  Sin efecto adicional             │
│  2ª muerte        │  -60% BTC            │  "Cicatriz Digital" visible       │
│  3ª muerte        │  -70% BTC            │  Cicatriz más prominente          │
│  4ª+ muerte       │  -75% BTC (máx)      │  Cicatriz permanente, aura gris   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  NOTA: Las cicatrices digitales son visibles en el perfil del avatar       │
│  como recordatorio permanente de los fracasos pasados.                     │
│                                                                             │
│  MENSAJE CON CICATRIZ: "Llevo X cicatrices. Cada una es una lección."      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 9. ECONOMÍA (Sistema de BTC)

## 9.1 Moneda Virtual: BTC

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         BITCOINS (BTC)                                       ║
║              "Prueba de Valor. Energía de disciplina transmutada."           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  NATURALEZA: 100% ficticio, sin valor real, sin blockchain                   ║
║  SÍMBOLO: ₿                                                                  ║
║  UNIDAD MÍNIMA: 1 BTC                                                        ║
║                                                                              ║
║  NARRATIVA: Representa la "Prueba de Valor" (Proof of Value). Es la          ║
║  energía de productividad y disciplina del usuario transmutada en            ║
║  recursos digitales. En METAMEN100, no compras cosas; demuestras que         ║
║  eres digno de poseerlas.                                                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 9.2 Fuentes de BTC

### 9.2.1 Recompensas por Tarea

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ARQUETIPO MENTAL                                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  Tarea                    │  Recompensa  │  Frecuencia                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  Meditación               │  15 BTC      │  7x/semana                      │
│  Ducha fría               │  20 BTC      │  3x/semana                      │
│  Lectura                  │  15 BTC      │  7x/semana                      │
│  Despertar temprano       │  10 BTC      │  7x/semana                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  SUBTOTAL SEMANAL: ~305 BTC                                                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  ARQUETIPO CARA                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  Tarea                    │  Recompensa  │  Frecuencia                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  Corrección de postura    │  15 BTC      │  3x/semana                      │
│  Ejercicios faciales      │  15 BTC      │  3x/semana                      │
│  Kegel                    │  10 BTC      │  10x/semana (2/día × 5)         │
├─────────────────────────────────────────────────────────────────────────────┤
│  SUBTOTAL SEMANAL: ~190 BTC                                                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  ARQUETIPO PRODUCTIVIDAD                                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  Tarea                    │  Recompensa      │  Frecuencia                 │
├─────────────────────────────────────────────────────────────────────────────┤
│  Journal                  │  20 BTC          │  6x/semana                  │
│  Skill learning           │  25 BTC/hora     │  5h/semana                  │
│  Focus work               │  20 BTC/hora     │  15h/semana (3h × 5)        │
├─────────────────────────────────────────────────────────────────────────────┤
│  SUBTOTAL SEMANAL: ~620 BTC                                                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  ARQUETIPO FÍSICO                                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  Tarea                    │  Recompensa  │  Frecuencia                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  Entrenamiento fuerza     │  30 BTC      │  5x/semana                      │
│  Cardio                   │  25 BTC      │  3x/semana                      │
│  Hidratación              │  10 BTC      │  7x/semana                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  SUBTOTAL SEMANAL: ~295 BTC                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 9.2.2 Bonos Adicionales

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  BONO                     │  CONDICIÓN                    │  RECOMPENSA     │
├─────────────────────────────────────────────────────────────────────────────┤
│  Día perfecto             │  100% tareas completadas      │  +50 BTC        │
│  Subida de nivel          │  Alcanzar nuevo nivel         │  +100 × nivel   │
│  Racha 7 días             │  7 días consecutivos          │  +500 BTC       │
│  Racha 14 días            │  14 días consecutivos         │  +1,000 BTC     │
│  Racha 30 días            │  30 días consecutivos         │  +1,500 BTC     │
│  Racha 60 días            │  60 días consecutivos         │  +3,000 BTC     │
│  Evolución de vector      │  Subir 1 nivel en vector      │  +2,000 BTC     │
│  Día de Guerra            │  Día intensidad doble         │  +1,500 BTC     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 9.2.3 Compra con Dinero Real (Premium)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PACK         │  PRECIO USD    │  BTC INCLUIDOS    │  BONO                │
├─────────────────────────────────────────────────────────────────────────────┤
│  Pack 1       │  $1.99         │  1,000 BTC        │  -                   │
│  Pack 2       │  $7.99         │  5,000 BTC        │  +500 BTC (10%)      │
│  Pack 3       │  $19.99        │  15,000 BTC       │  +3,000 BTC (20%)    │
└─────────────────────────────────────────────────────────────────────────────┘

NOTA: Los packs son opcionales. Todo el contenido es alcanzable sin pagar
dinero real, aunque requiere más tiempo y disciplina.
```

---

## 9.3 Usos de BTC

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  USO                              │  DESCRIPCIÓN                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  Comprar items en tienda          │  Ropa, accesorios, vehículos, etc.     │
│  Escudos de Consistencia          │  Proteger racha de 1 día de fallo      │
│  Botiquines de Corazones          │  Recuperar 1 corazón de salud          │
│  Módulo Oracle Premium            │  IA avanzada para journal (futuro)     │
│  Resurrección Inmediata           │  Reset de corazones tras muerte        │
│  Desbloquear features             │  Contenido exclusivo (futuro)          │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 9.4 Balance y Anti-Farming

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         ANTI-FARMING                                         ║
║              "Disciplina sobre intensidad explosiva"                         ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  DAILY CAP (Límite Diario):                                                  ║
║  • Usuario promedio: ~1,000-1,500 BTC/día                                    ║
║  • Usuario "Hustler" extremo: Hard Cap de 3,500 BTC/día                      ║
║                                                                              ║
║  REGLAS ANTI-FARMING:                                                        ║
║  ────────────────────                                                        ║
║  1. Tareas no se pueden completar múltiples veces                            ║
║  2. Focus Work tiene límite de 4h para pago completo (50% después)           ║
║  3. Cooldown de 4h entre sesiones de fuerza                                  ║
║  4. Verificación de tiempo mínimo en herramientas                            ║
║                                                                              ║
║  FILOSOFÍA:                                                                  ║
║  "El sistema castiga la 'intensidad explosiva' de un solo día y premia       ║
║   la 'intensidad moderada pero infinita'."                                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 9.5 Simulación de Ganancias

### Usuario Perfecto (100 días)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  FASE              │  DÍAS      │  PROMEDIO/DÍA    │  SUBTOTAL              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Días 1-20         │  20        │  1,000 BTC       │  20,000 BTC            │
│  Días 21-50        │  30        │  1,800 BTC       │  54,000 BTC            │
│  Días 51-80        │  30        │  3,000 BTC       │  90,000 BTC            │
│  Días 81-100       │  20        │  5,000 BTC       │  100,000 BTC           │
│  Bonos diversos    │  -         │  -               │  ~30,000 BTC           │
├─────────────────────────────────────────────────────────────────────────────┤
│  TOTAL ACUMULADO:  ~294,000 BTC                                             │
│                                                                             │
│  Este capital permite comprar:                                              │
│  • 100% de ropa y accesorios                                                │
│  • ~60% de items legendarios                                                │
│  • 2 de 4 propiedades de nivel 9-10                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Usuario Promedio (60% días perfectos, 30% aceptables, 10% fallidos)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  FASE              │  DÍAS      │  PROMEDIO/DÍA    │  SUBTOTAL              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Días 1-30         │  30        │  600 BTC         │  18,000 BTC            │
│  Días 31-60        │  30        │  1,200 BTC       │  36,000 BTC            │
│  Días 61-100       │  40        │  2,000 BTC       │  80,000 BTC            │
│  Bonos (menores)   │  -         │  -               │  ~10,000 BTC           │
├─────────────────────────────────────────────────────────────────────────────┤
│  TOTAL ACUMULADO:  ~144,000 BTC                                             │
│                                                                             │
│  Este capital permite comprar:                                              │
│  • ~70% de ropa y accesorios                                                │
│  • ~30% de items legendarios                                                │
│  • 1 propiedad de nivel 7-8                                                 │
│                                                                             │
│  NOTA: El usuario promedio tendrá que elegir estratégicamente               │
│  qué items comprar, creando aspiración para futuros ciclos.                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 9.6 Precios de Items de Tienda

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  CATEGORÍA        │  ITEM MÁS BARATO    │  ITEM MÁS CARO                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  Armadura (Ropa)  │  250 BTC (básica)   │  25,000 BTC (traje legendario)    │
│  Accesorios       │  500 BTC (reloj)    │  15,000 BTC (reloj ultra-lujo)    │
│  Vehículos        │  2,000 BTC (bici)   │  80,000 BTC (supercar)            │
│  Propiedades      │  5,000 BTC (cuarto) │  100,000 BTC (mansión)            │
│  Compañeras       │  10,000 BTC         │  50,000 BTC                       │
│  Mascotas         │  1,000 BTC          │  8,000 BTC                        │
│  Power-ups        │  500 BTC            │  5,000 BTC                        │
├─────────────────────────────────────────────────────────────────────────────┤
│  ÍTEM MÁS CARO DEL JUEGO:                                                   │
│  "Ciudadela Privada" / "Jet METAMEN Personalizado" = 150,000 BTC           │
│  (Requiere casi todo el capital de un ciclo perfecto)                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

---


# 10. PROTOCOLO DE 100 DÍAS

## 10.1 Estructura General

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    PROTOCOLO DE 100 DÍAS                                     ║
║           "El camino de Indigente a Semi-Dios"                               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  DURACIÓN:        100 días consecutivos                                      ║
║  OBJETIVO:        Transformación total de identidad                          ║
║  MÉTODO:          Disciplina diaria gamificada                               ║
║  RESULTADO:       Sincronización de avatar con identidad real                ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 10.2 Estructura Semanal de Tareas

### ARQUETIPO MENTAL (aura_lvl)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TAREA                    │  FRECUENCIA    │  IMPACTO VECTOR                │
├─────────────────────────────────────────────────────────────────────────────┤
│  Meditación               │  7 sesiones    │  +0.05 por sesión              │
│  Ducha fría               │  3 sesiones    │  +0.03 por sesión              │
│  Lectura                  │  7 sesiones    │  +0.03 por sesión              │
│  Despertar temprano       │  7 días        │  +0.02 por día                 │
├─────────────────────────────────────────────────────────────────────────────┤
│  TOTAL SEMANAL: ~0.60 puntos de AURA                                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### ARQUETIPO CARA (face_lvl)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TAREA                    │  FRECUENCIA    │  IMPACTO VECTOR                │
├─────────────────────────────────────────────────────────────────────────────┤
│  Corrección de postura    │  3 sesiones    │  +0.03 por sesión              │
│  Ejercicios faciales      │  3 sesiones    │  +0.04 por sesión              │
│  Kegel                    │  10 sesiones   │  +0.02 por sesión              │
├─────────────────────────────────────────────────────────────────────────────┤
│  TOTAL SEMANAL: ~0.41 puntos de FACE                                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### ARQUETIPO PRODUCTIVIDAD (wealth_lvl)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TAREA                    │  FRECUENCIA    │  IMPACTO VECTOR                │
├─────────────────────────────────────────────────────────────────────────────┤
│  Journal                  │  6 sesiones    │  +0.03 por entrada             │
│  Skill learning           │  5 horas       │  +0.05 por hora                │
│  Focus work               │  15 horas      │  +0.02 por hora                │
├─────────────────────────────────────────────────────────────────────────────┤
│  TOTAL SEMANAL: ~0.63 puntos de WEALTH                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### ARQUETIPO FÍSICO (muscle_lvl + fat_lvl)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TAREA                    │  FRECUENCIA    │  IMPACTO VECTOR                │
├─────────────────────────────────────────────────────────────────────────────┤
│  Entrenamiento fuerza     │  5 sesiones    │  muscle +0.05 por sesión       │
│  Cardio                   │  3 sesiones    │  fat -0.05 por sesión          │
│  Hidratación (1.5L)       │  7 días        │  muscle +0.01, fat -0.01       │
├─────────────────────────────────────────────────────────────────────────────┤
│  TOTAL SEMANAL:                                                             │
│  • muscle: +0.32 puntos                                                     │
│  • fat: -0.22 puntos                                                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 10.3 Fases del Protocolo

### FASE 1: DESPERTAR (Días 1-25)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         FASE 1: DESPERTAR                                    ║
║                         Días 1-25                                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  FOCO:           Establecer hábitos básicos                                  ║
║  DIFICULTAD:     Tareas simples y cortas                                     ║
║  NIVELES:        1-4 (Indigente → Chalán)                                    ║
║                                                                              ║
║  ════════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  TAREAS POR DÍA (Promedio):                                                  ║
║  • Meditación: 10 minutos                                                    ║
║  • Lectura: 20 minutos                                                       ║
║  • Journal: 5 minutos                                                        ║
║  • Focus Work: 1 hora                                                        │
║  • Entrenamiento: 30 minutos (ligero)                                        │
║  • Cardio: 20 minutos (caminata)                                             │
║                                                                              ║
║  ════════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  OBJETIVOS DE FASE:                                                          ║
║  ✓ Establecer rutina de meditación diaria                                    ║
║  ✓ Iniciar hábito de lectura                                                 ║
║  ✓ Comenzar actividad física regular                                         ║
║  ✓ Desarrollar hábito de journal                                             ║
║                                                                              ║
║  HITO CRÍTICO: Día 6 (Alucín) - Conversión de Trial a Pago                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### FASE 2: CONSTRUCCIÓN (Días 26-50)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         FASE 2: CONSTRUCCIÓN                                 ║
║                         Días 26-50                                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  FOCO:           Intensificar esfuerzo                                       ║
║  DIFICULTAD:     Tareas más largas, mayor volumen                            ║
║  NIVELES:        5-6 (Godín → Acomodado)                                     ║
║                                                                              ║
║  ════════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  TAREAS POR DÍA (Promedio):                                                  ║
║  • Meditación: 15 minutos                                                    ║
║  • Ducha fría: 3 minutos (3x/semana)                                         ║
║  • Lectura: 30 minutos                                                       ║
║  • Journal: 10 minutos                                                       ║
║  • Skill Learning: 1 hora                                                    │
║  • Focus Work: 2 horas                                                       │
║  • Entrenamiento: 45 minutos (moderado)                                      │
║  • Cardio: 30 minutos (HIIT introducido)                                     │
║                                                                              ║
║  ════════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  OBJETIVOS DE FASE:                                                          ║
║  ✓ Aumentar duración de meditación                                           ║
║  ✓ Introducir duchas frías                                                   ║
║  ✓ Incrementar volumen de entrenamiento                                      ║
║  ✓ Establecer rutina de Focus Work                                           ║
║  ✓ Comenzar aprendizaje de skill de alto valor                               ║
║                                                                              ║
║  HITO: Día 30 - Primer mes completo, Badge especial                          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### FASE 3: TRANSFORMACIÓN (Días 51-75)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         FASE 3: TRANSFORMACIÓN                               ║
║                         Días 51-75                                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  FOCO:           Resultados visibles                                         ║
║  DIFICULTAD:     Alta intensidad                                             ║
║  NIVELES:        7-8 (Pudiente → Millonario)                                 ║
║                                                                              ║
║  ════════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  TAREAS POR DÍA (Promedio):                                                  ║
║  • Meditación: 20 minutos                                                    ║
║  • Ducha fría: 5 minutos (3x/semana)                                         ║
║  • Lectura: 30 minutos                                                       ║
║  • Journal: 10 minutos                                                       ║
║  • Skill Learning: 1 hora                                                    │
║  • Focus Work: 3 horas                                                       │
║  • Entrenamiento: 60 minutos (intenso)                                       │
║  • Cardio: 40 minutos (HIIT completo)                                        │
║  • Ejercicios faciales: 15 minutos (3x/semana)                               │
║  • Kegel: 10 minutos (2x/día)                                                │
║                                                                              ║
║  ════════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  OBJETIVOS DE FASE:                                                          ║
║  ✓ Máxima intensidad en entrenamiento                                        ║
║  ✓ Resultados físicos visibles                                               ║
║  ✓ Productividad de élite (3h Focus Work)                                    ║
║  ✓ Mandíbula y rostro definiéndose                                           ║
║  ✓ Estatus económico proyectado mejorando                                    ║
║                                                                              ║
║  HITO: Día 60 - Dos meses, ítem exclusivo de racha                           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### FASE 4: MAESTRÍA (Días 76-100)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         FASE 4: MAESTRÍA                                     ║
║                         Días 76-100                                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  FOCO:           Consolidación y trascendencia                               ║
║  DIFICULTAD:     Máxima                                                      ║
║  NIVELES:        9-10 (Magnate → Semi-Dios)                                  ║
║                                                                              ║
║  ════════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  TAREAS POR DÍA (Promedio):                                                  ║
║  • Meditación: 20 minutos                                                    ║
║  • Ducha fría: 5 minutos (3x/semana)                                         ║
║  • Lectura: 30 minutos                                                       ║
║  • Journal: 10 minutos                                                       ║
║  • Skill Learning: 1 hora                                                    │
║  • Focus Work: 3 horas                                                       │
║  • Entrenamiento: 60-75 minutos (élite)                                      │
║  • Cardio: 45 minutos (HIIT avanzado)                                        │
║  • Ejercicios faciales: 15 minutos (3x/semana)                               │
║  • Kegel: 10 minutos (2x/día)                                                │
║  • Corrección postural: 15 minutos (3x/semana)                               │
║                                                                              ║
║  ════════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  OBJETIVOS DE FASE:                                                          ║
║  ✓ Maestría total de todos los arquetipos                                    ║
║  ✓ Cuerpo de élite (definición máxima)                                       ║
║  ✓ Productividad sostenida de alto nivel                                     ║
║  ✓ Presencia magnética (AURA máxima)                                         ║
║  ✓ Preparación para estatus de Semi-Dios                                     ║
║                                                                              ║
║  HITO FINAL: Día 100 - Victoria, estatus de Inmortal                         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 10.4 Hitos Especiales

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  DÍA  │  NOMBRE           │  SIGNIFICADO                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  1    │  El Inicio        │  Primer día del protocolo, selección de arquetipo│
│  6    │  Alucín           │  ⭐ Conversión Trial → Pago, primer cambio visible│
│  7    │  Primera Semana   │  +1 corazón, inicio de multiplicador x1.1      │
│  14   │  Dos Semanas      │  +500 BTC bonus, consolidación de hábitos      │
│  30   │  Primer Mes       │  +1,500 BTC + Badge "Guerrero del Mes"         │
│  60   │  Dos Meses        │  +3,000 BTC + Ítem exclusivo de racha          │
│  90   │  Tres Meses       │  Protección de corazones, recta final          │
│  100  │  VICTORIA         │  🏆 Semi-Dios, estatus Inmortal, recompensa épica│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 10.5 Progresión de Dificultad

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SEMANA  │  MEDITACIÓN  │  FUERZA    │  FOCUS    │  CARDIO    │  KEGEL     │
├─────────────────────────────────────────────────────────────────────────────┤
│  1-2     │  10 min      │  30 min    │  1h       │  20 min    │  5 min     │
│  3-4     │  12 min      │  35 min    │  1.5h     │  25 min    │  5 min     │
│  5-6     │  15 min      │  40 min    │  2h       │  30 min    │  7 min     │
│  7-8     │  15 min      │  45 min    │  2h       │  35 min    │  7 min     │
│  9-10    │  18 min      │  50 min    │  2.5h     │  35 min    │  10 min    │
│  11-12   │  20 min      │  60 min    │  3h       │  40 min    │  10 min    │
│  13-14   │  20 min      │  60-75 min │  3h       │  45 min    │  10 min    │
└─────────────────────────────────────────────────────────────────────────────┘

NOTA: Los tiempos son objetivos. El usuario puede distribuir el volumen
semanal según su disponibilidad, siempre completando las frecuencias mínimas.
```

---

# 11. ARSENAL DE HERRAMIENTAS

## 11.1 Visión General

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         ARSENAL DE HERRAMIENTAS                              ║
║                    "9 herramientas. Todo en uno."                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  METAMEN100 incluye 9 herramientas integradas que eliminan la necesidad      ║
║  de usar apps externas. Cada herramienta alimenta uno o más vectores.        ║
║                                                                              ║
║  1. BIBLIOTECA DE PODER      → Lectura gamificada                            ║
║  2. TEMPLO DEL HIERRO        → Gym tracker                                   ║
║  3. CÁMARA DE MEDITACIÓN     → Meditación guiada                             ║
║  4. BITÁCORA DE GUERRA       → Journal personal                              ║
║  5. VITALIDAD SEXUAL         → Ejercicios Kegel                              ║
║  6. ESCULTOR FACIAL          → Yoga facial y mewing                          ║
║  7. CREA TU HIPNOSIS         → Audio de afirmaciones con IA [PREMIUM]        ║
║  8. MOVILIDAD TÁCTICA        → Stretching y postura                          ║
║  9. FOCUS CHAMBER            → Pomodoro con música                           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 11.2 BIBLIOTECA DE PODER (Lectura)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERRAMIENTA #1: BIBLIOTECA DE PODER                                        │
│  Vector: AURA                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FUNCIÓN: Lectura gamificada con los mejores libros de desarrollo personal │
│                                                                             │
│  FEATURES:                                                                  │
│  • Catálogo de PDFs curados (libros de élite)                               │
│  • Tracking de páginas leídas                                               │
│  • Timer de lectura integrado                                               │
│  • Barra de progreso por libro                                              │
│  • Sistema de notas/highlights                                              │
│  • Recomendaciones basadas en nivel                                         │
│                                                                             │
│  VALIDACIÓN: 15 minutos de lectura = tarea completada                       │
│                                                                             │
│  RECOMPENSA: 15 BTC por sesión                                              │
│                                                                             │
│  LIBROS INCLUIDOS (Ejemplos):                                               │
│  • "Atomic Habits" - James Clear                                            │
│  • "Deep Work" - Cal Newport                                                │
│  • "The 48 Laws of Power" - Robert Greene                                   │
│  • "Can't Hurt Me" - David Goggins                                          │
│  • "Meditations" - Marcus Aurelius                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.3 TEMPLO DEL HIERRO (Gym)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERRAMIENTA #2: TEMPLO DEL HIERRO                                          │
│  Vector: PHYSIQUE (muscle_lvl)                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FUNCIÓN: Gym tracker completo para entrenamiento de fuerza                │
│                                                                             │
│  FEATURES:                                                                  │
│  • Catálogo de ejercicios con videos demostrativos (GIFs)                   │
│  • Constructor de rutinas personalizadas                                    │
│  • Logbook: series, repeticiones, peso                                      │
│  • Timer de descanso entre series                                           │
│  • Historial de marcas personales (PRs)                                     │
│  • Progresión sugerida basada en datos                                      │
│  • Gráficos de progreso por ejercicio                                       │
│                                                                             │
│  VALIDACIÓN: Completar rutina registrada = tarea completada                 │
│                                                                             │
│  RECOMPENSA: 30 BTC por sesión                                              │
│                                                                             │
│  EJERCICIOS BASE:                                                           │
│  • Empuje: Press banca, Press militar, Flexiones                            │
│  • Tracción: Dominadas, Remo, Curl de bíceps                                │
│  • Piernas: Sentadilla, Peso muerto, Zancadas                              │
│  • Core: Plancha, Crunches, Russian twists                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.4 CÁMARA DE MEDITACIÓN

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERRAMIENTA #3: CÁMARA DE MEDITACIÓN                                       │
│  Vector: AURA                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FUNCIÓN: Meditación guiada con audios diseñados para METAMEN100           │
│                                                                             │
│  FEATURES:                                                                  │
│  • Reproductor de audio integrado                                           │
│  • Biblioteca de meditaciones guiadas por nivel                             │
│  • Sonidos binaurales (Alpha, Theta, Delta)                                 │
│  • Timer de meditación libre                                                │
│  • Control de volumen por capas (voz/sonidos)                               │
│  • Tracking de sesiones completadas                                         │
│  • Streak de meditación independiente                                       │
│                                                                             │
│  VALIDACIÓN: 90% del audio completado = tarea completada                    │
│                                                                             │
│  RECOMPENSA: 15 BTC por sesión                                              │
│                                                                             │
│  MEDITACIONES POR NIVEL:                                                    │
│  • Nivel 1-3: "Despertar" (3-5 min) - Fundamentos                           │
│  • Nivel 4-6: "Foco" (5-10 min) - Concentración                             │
│  • Nivel 7-9: "Dominio" (10-15 min) - Control mental                        │
│  • Nivel 10+: "Trascendencia" (15-20 min) - Iluminación                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.5 BITÁCORA DE GUERRA (Journal)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERRAMIENTA #4: BITÁCORA DE GUERRA                                         │
│  Vector: WEALTH                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FUNCIÓN: Diario personal para reflexión y planificación                   │
│                                                                             │
│  FEATURES:                                                                  │
│  • Editor de texto enriquecido                                              │
│  • Prompts diarios guiados por nivel                                        │
│  • Historial de entradas con búsqueda                                       │
│  • Resumen semanal con IA (análisis de patrones)                            │
│  • Análisis de sentimiento de entradas                                      │
│  • Tags y categorización                                                    │
│  • Exportación a PDF                                                        │
│                                                                             │
│  VALIDACIÓN: Mínimo 100 palabras = tarea completada                         │
│                                                                             │
│  RECOMPENSA: 20 BTC por entrada                                             │
│                                                                             │
│  PROMPTS POR NIVEL:                                                         │
│  • Nivel 1-3: "¿Qué estoy haciendo mal y cómo lo corrijo?"                  │
│  • Nivel 4-6: "¿Qué acciones de hoy me acercan a mis metas?"                │
│  • Nivel 7-9: "¿Cómo puedo optimizar mi día para máximo impacto?"           │
│  • Nivel 10+: "¿Qué legado estoy construyendo con mis acciones diarias?"    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.6 VITALIDAD SEXUAL (Kegel)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERRAMIENTA #5: VITALIDAD SEXUAL                                           │
│  Vector: JAWLINE (face_lvl)                                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FUNCIÓN: Ejercicios de suelo pélvico (Kegels) para salud sexual           │
│                                                                             │
│  FEATURES:                                                                  │
│  • Tutorial inicial obligatorio                                             │
│  • Sistema visual Aprieta/Afloja (animación)                                │
│  • Rutinas por nivel de dificultad                                          │
│  • Timer interactivo con guía                                               │
│  • Tracking de racha de sesiones                                            │
│  • Vibración háptica (en dispositivos compatibles)                          │
│                                                                             │
│  VALIDACIÓN: Completar rutina programada = tarea completada                 │
│                                                                             │
│  RECOMPENSA: 10 BTC por sesión (2 sesiones/día × 5 días = 100 BTC/semana)   │
│                                                                             │
│  RUTINAS POR NIVEL:                                                         │
│  • Nivel 1-3: Principiante (3s aprieta / 3s afloja × 10)                    │
│  • Nivel 4-6: Intermedio (5s aprieta / 5s afloja × 15)                      │
│  • Nivel 7-9: Avanzado (7s aprieta / 5s afloja × 20)                        │
│  • Nivel 10+: Experto (10s aprieta / 5s afloja × 25)                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.7 ESCULTOR FACIAL

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERRAMIENTA #6: ESCULTOR FACIAL                                            │
│  Vector: JAWLINE (face_lvl)                                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FUNCIÓN: Yoga facial, mewing y ejercicios para definición facial          │
│                                                                             │
│  FEATURES:                                                                  │
│  • Rutinas de yoga facial en video (GIFs de alta calidad)                   │
│  • Guía de Mewing (postura de lengua)                                       │
│  • Videos demostrativos de cada ejercicio                                   │
│  • Timer por ejercicio                                                      │
│  • Rutina AM y Rutina PM                                                    │
│  • Tracking de consistencia                                                 │
│                                                                             │
│  VALIDACIÓN: Completar rutina programada = tarea completada                 │
│                                                                             │
│  RECOMPENSA: 15 BTC por sesión                                              │
│                                                                             │
│  EJERCICIOS INCLUIDOS:                                                      │
│  • Mewing (postura correcta de lengua)                                      │
│  • Jaw jutting (protrusión de mandíbula)                                    │
│  • Neck curls (curls de cuello)                                             │
│  • Cheek puffs (inflado de mejillas)                                        │
│  • Eye squeezes (apriete de ojos)                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.8 CREA TU HIPNOSIS [PREMIUM]

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERRAMIENTA #7: CREA TU HIPNOSIS [PREMIUM]                                 │
│  Vector: AURA (bonus, no obligatorio)                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FUNCIÓN: Generar audio de afirmaciones personalizado con IA               │
│                                                                             │
│  FEATURES:                                                                  │
│  • Editor de decretos/afirmaciones personalizadas                           │
│  • Selector de ondas cerebrales (Alpha, Theta, Beta, Delta)                 │
│  • Generación de voz con IA (ElevenLabs)                                    │
│  • Biblioteca personal de audios generados                                  │
│  • Música de fondo personalizable                                           │
│                                                                             │
│  VALIDACIÓN: Escuchar audio generado = bonus (no obligatorio)               │
│                                                                             │
│  RECOMPENSA: +10 BTC bonus por escuchar audio generado                      │
│                                                                             │
│  LÍMITES POR SUSCRIPCIÓN:                                                   │
│  • Mensual: 5 audios/mes                                                    │
│  • Anual: Ilimitado                                                         │
│                                                                             │
│  NOTA: Esta herramienta es PREMIUM y requiere suscripción activa.           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.9 MOVILIDAD TÁCTICA

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERRAMIENTA #8: MOVILIDAD TÁCTICA                                          │
│  Vector: JAWLINE (face_lvl) - Postura afecta mandíbula                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FUNCIÓN: Stretching y corrección postural                                 │
│                                                                             │
│  FEATURES:                                                                  │
│  • 3 rutinas de corrección postural cargadas                                │
│  • Videos en loop de alta calidad                                           │
│  • Timer por ejercicio                                                      │
│  • Categorías: AM (mañana), PM (tarde), Post-Entreno                        │
│  • Tracking de progreso en flexibilidad                                     │
│                                                                             │
│  VALIDACIÓN: Completar rutina programada = tarea completada                 │
│                                                                             │
│  RECOMPENSA: 15 BTC por sesión                                              │
│                                                                             │
│  RUTINAS:                                                                   │
│  • Rutina AM: "Despertar Espinal" (15 min) - Movilidad columna              │
│  • Rutina PM: "Apertura de Hombros" (15 min) - Postura erguida              │
│  • Post-Entreno: "Recuperación" (10 min) - Estiramiento muscular            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.10 FOCUS CHAMBER

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERRAMIENTA #9: FOCUS CHAMBER                                              │
│  Vector: WEALTH                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FUNCIÓN: Timer Pomodoro con música de concentración                       │
│                                                                             │
│  FEATURES:                                                                  │
│  • Timer Pomodoro configurable (default: 25 min trabajo / 5 min descanso)   │
│  • Música de concentración integrada (sonidos ambientales, binaurales)      │
│  • Modo Zen (pantalla completa sin distracciones)                           │
│  • Tracking de bloques completados                                          │
│  • Estadísticas de focus por día/semana/mes                                 │
│  • Bloqueo de notificaciones durante sesión                                 │
│                                                                             │
│  VALIDACIÓN: Completar bloques = horas de Focus Work                        │
│                                                                             │
│  RECOMPENSA: 20 BTC por hora de Focus Work                                  │
│                                                                             │
│  CONFIGURACIONES:                                                           │
│  • Pomodoro clásico: 25/5                                                   │
│  • Deep Work: 50/10                                                         │
│  • Ultra Focus: 90/20                                                       │
│                                                                             │
│  MÚSICA DISPONIBLE:                                                         │
│  • Sonidos blancos/marrones                                                 │
│  • Frecuencias binaurales (Alpha, Beta)                                     │
│  • Ambiente de café                                                         │
│  • Lluvia/ Naturaleza                                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.11 Matriz de Herramientas vs Vectores

```
┌──────────────────────────┬────────┬─────────┬─────────┬──────────┬─────────┐
│  HERRAMIENTA             │  AURA  │ JAWLINE │  WEALTH │ PHYSIQUE │  ENV    │
├──────────────────────────┼────────┼─────────┼─────────┼──────────┼─────────┤
│  Biblioteca de Poder     │   ✓    │         │         │          │         │
│  Templo del Hierro       │        │         │         │    ✓     │         │
│  Cámara de Meditación    │   ✓    │         │         │          │         │
│  Bitácora de Guerra      │        │         │    ✓    │          │         │
│  Vitalidad Sexual        │        │    ✓    │         │          │         │
│  Escultor Facial         │        │    ✓    │         │          │         │
│  Crea tu Hipnosis        │   ✓    │         │         │          │         │
│  Movilidad Táctica       │        │    ✓    │         │          │         │
│  Focus Chamber           │        │         │    ✓    │          │         │
└──────────────────────────┴────────┴─────────┴─────────┴──────────┴─────────┘
```

---


# 12. TIENDA E INVENTARIO

## 12.1 Concepto

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         TIENDA DE ESTATUS                                    ║
║              "Demuestra que eres digno de poseer la grandeza"                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  La Tienda de Estatus es el catálogo de aspiraciones del usuario. Aquí      ║
║  puede gastar sus Bitcoins ganados con disciplina real en activos que       ║
║  mejoran la apariencia de su avatar.                                         ║
║                                                                              ║
║  FILOSOFÍA: "No compras cosas; demuestras que eres digno de poseerlas."     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 12.2 Categorías de Items

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  CATEGORÍA        │  DESCRIPCIÓN                    │  IMPACTO VISUAL        │
├─────────────────────────────────────────────────────────────────────────────┤
│  ARMADURA         │  Ropa y vestimenta              │  Cuerpo del avatar     │
│  ACCESORIOS       │  Relojes, cadenas, lentes       │  Detalles del avatar   │
│  VEHÍCULOS        │  Bicis, motos, autos, jets      │  Fondo del avatar      │
│  PROPIEDADES      │  Cuartos, depas, mansiones      │  Fondo del avatar      │
│  COMPAÑERAS       │  Acompañantes (gating por lvl)  │  Junto al avatar       │
│  MASCOTAS         │  Animales de compañía           │  Junto al avatar       │
│  POWER-UPS        │  Escudos, botiquines, boosts    │  Efectos temporales    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.3 Sistema de Gating

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         GATING DE MERECIMIENTO                               ║
║              "No puedes lucir lo que no has ganado"                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Los items tienen restricciones que el usuario debe cumplir para             ║
║  poder comprarlos y equiparlos.                                              ║
║                                                                              ║
║  TIPOS DE GATING:                                                            ║
║  ────────────────                                                            ║
║                                                                              ║
║  1. GATING POR NIVEL:                                                        ║
║     item.level_required <= user.current_level                                ║
║                                                                              ║
║  2. GATING POR VECTOR:                                                       ║
║     Ejemplo: Joyería de alto valor requiere fat_lvl < 5                      ║
║     (no puedes lucir cadenas de oro si tienes papada)                        ║
║                                                                              ║
║  3. GATING POR EXCLUSIVIDAD:                                                 ║
║     Items únicos disponibles solo por tiempo limitado o logros               ║
║                                                                              ║
║  4. GATING POR RACHA:                                                        ║
║     Algunos items requieren racha mínima de X días                           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 12.4 Catálogo de Items

### ARMADURA (Ropa)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NIVEL  │  ITEM                    │  PRECIO    │  GATING                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  1-2    │  Harapos sucios          │  (inicial) │  -                        │
│  3-4    │  Playera básica limpia   │  250 BTC   │  Nivel 3                  │
│  3-4    │  Jeans ajustados         │  500 BTC   │  Nivel 3                  │
│  5-6    │  Camisa polo de marca    │  1,500 BTC │  Nivel 5                  │
│  5-6    │  Pantalón chino          │  2,000 BTC │  Nivel 5                  │
│  7-8    │  Camisa de vestir        │  5,000 BTC │  Nivel 7                  │
│  7-8    │  Blazer elegante         │  8,000 BTC │  Nivel 7, fat_lvl < 8     │
│  9-10   │  Traje a medida          │  15,000 BTC│  Nivel 9, fat_lvl < 6     │
│  9-10   │  Traje de diseñador      │  25,000 BTC│  Nivel 9, fat_lvl < 5     │
│  11-13  │  Armadura dorada divina  │  50,000 BTC│  Nivel 11, S-Max 2 vectores│
└─────────────────────────────────────────────────────────────────────────────┘
```

### ACCESORIOS

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NIVEL  │  ITEM                    │  PRECIO    │  GATING                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  3      │  Gorra Alucín            │  500 BTC   │  Nivel 3 (exclusivo)      │
│  4      │  Cadena básica           │  1,000 BTC │  Nivel 4                  │
│  5      │  Reloj casual            │  3,000 BTC │  Nivel 5                  │
│  6      │  Lentes de sol           │  2,500 BTC │  Nivel 6                  │
│  7      │  Reloj de marca          │  8,000 BTC │  Nivel 7                  │
│  8      │  Cadena de oro           │  12,000 BTC│  Nivel 8, fat_lvl < 5     │
│  9      │  Reloj de lujo           │  20,000 BTC│  Nivel 9, fat_lvl < 4     │
│  10     │  Anillo de sello         │  15,000 BTC│  Nivel 10                 │
│  11-13  │  Corona de Semi-Dios     │  40,000 BTC│  Nivel 11, S-Max todos    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### VEHÍCULOS

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NIVEL  │  ITEM                    │  PRECIO    │  GATING                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  3      │  Bicicleta básica        │  2,000 BTC │  Nivel 3                  │
│  4      │  Moto scooter            │  5,000 BTC │  Nivel 4                  │
│  5      │  Chevy tuneado           │  12,000 BTC│  Nivel 5 (hito especial)  │
│  6      │  Sedan ejecutivo         │  20,000 BTC│  Nivel 6                  │
│  7      │  SUV premium             │  35,000 BTC│  Nivel 7                  │
│  8      │  Auto deportivo          │  60,000 BTC│  Nivel 8                  │
│  9      │  Supercar                │  80,000 BTC│  Nivel 9                  │
│  10     │  Hypercar                │  100,000 BTC│  Nivel 10                │
│  11-13  │  Jet privado METAMEN     │  150,000 BTC│  Nivel 11, racha 90+     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### PROPIEDADES

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NIVEL  │  ITEM                    │  PRECIO    │  GATING                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  1-2    │  Callejón (inicial)      │  (inicial) │  -                        │
│  3-4    │  Cuarto de servicio      │  5,000 BTC │  Nivel 3                  │
│  5-6    │  Departamento básico     │  15,000 BTC│  Nivel 5                  │
│  7-8    │  Departamento de lujo    │  40,000 BTC│  Nivel 7                  │
│  9-10   │  Casa moderna            │  70,000 BTC│  Nivel 9                  │
│  10     │  Mansión                 │  100,000 BTC│  Nivel 10                │
│  11-13  │  Palacio/Ciudadela       │  150,000 BTC│  Nivel 11, 2 ciclos      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### POWER-UPS

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ITEM                    │  PRECIO    │  EFECTO                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Escudo de Consistencia  │  2,500 BTC │  Protege racha de 1 día fallido      │
│  Botiquín de Corazón     │  5,000 BTC │  Recupera 1 corazón de salud         │
│  Inyección de XP         │  3,000 BTC │  +500 XP instantáneo (1x/semana)     │
│  Resurrección Inmediata  │  10,000 BTC│  Revive sin perder 50% BTC           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.5 Efecto en IA

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SISTEMA DE INYECCIÓN DE TOKENS                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Los items equipados se inyectan como tokens en el prompt de generación     │
│  de imagen del avatar.                                                      │
│                                                                             │
│  EJEMPLO:                                                                   │
│  • Usuario compra "Reloj de lujo" y lo equipa                               │
│  • Token añadido al prompt: "wearing luxury Swiss watch, gold bracelet"     │
│  • Avatar generado incluye el reloj en la muñeca                           │
│                                                                             │
│  JERARQUÍA DE COMPOSICIÓN:                                                  │
│  1. Capa 0: Fondo Escenario (Base Nivel)                                    │
│  2. Capa 1: Props de Fondo (Vehículos/Propiedades)                          │
│  3. Capa 2: Base Corporal (Anatomía lograda)                                │
│  4. Capa 3: Ropa y Calzado (Armadura)                                       │
│  5. Capa 4: Accesorios (Relojes, Cadenas, Lentes)                           │
│  6. Capa 5: Aura y Efectos de Iluminación                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.6 Inventario

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SISTEMA DE INVENTARIO                                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FUNCIONALIDADES:                                                           │
│  • Ver todos los items comprados                                            │
│  • Equipar/Desequipar items                                                 │
│  • Slots de equipamiento limitados                                          │
│  • Items bloqueados mostrados con candado                                   │
│  • Preview de cómo se vería el avatar con items equipados                   │
│                                                                             │
│  SLOTS DE EQUIPAMIENTO:                                                     │
│  • Cabeza: Gorras, sombreros                                                │
│  • Rostro: Lentes                                                           │
│  • Cuello: Cadenas                                                          │
│  • Muñecas: Relojes, pulseras                                               │
│  • Dedos: Anillos                                                           │
│  • Cuerpo: Ropa (automático por nivel)                                      │
│  • Fondo: Propiedad/Vehículo                                                │
│  • Compañero: Persona/Mascota                                               │
│                                                                             │
│  ITEMS BLOQUEADOS:                                                          │
│  • No se pierden tras muerte                                                │
│  • Quedan bloqueados hasta recuperar nivel                                  │
│  • Mensaje: "Requiere Nivel X para equipar"                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 13. SUSCRIPCIÓN Y LIMBO

## 13.1 Modelo de Suscripción

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         MODELO DE SUSCRIPCIÓN                                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TRIAL:          5 días gratis (termina día 6)                               ║
║  MENSUAL:        $19.90 USD/mes                                              ║
║  ANUAL:          $140 USD/año (40% descuento vs mensual)                     ║
║                                                                              ║
║  CONVERSIÓN:     Día 6 (Hito Alucín) - Punto de máximo cambio visual         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 13.2 Qué Incluye la Suscripción

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  FEATURE              │  TRIAL (5 días)  │  SUSCRIPCIÓN ACTIVA              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Acceso a herramientas│  ✅ Limitado     │  ✅ Completo                     │
│  Generación de imagen │  ✅ Diaria       │  ✅ Diaria                       │
│  Guardado de progreso │  ✅              │  ✅                              │
│  Crea tu Hipnosis     │  ❌              │  ✅                              │
│  Items premium tienda │  ❌              │  ✅                              │
│  Soporte prioritario  │  ❌              │  ✅                              │
│  Sin anuncios         │  ✅              │  ✅                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.3 Modo Limbo

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         MODO LIMBO                                           ║
║              "El purgatorio de la negligencia"                               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TRIGGER: Trial expirado sin pago O pago fallido                             ║
║                                                                              ║
║  CARACTERÍSTICAS:                                                            ║
║  ────────────────                                                            ║
║  • Acceso: Solo lectura (ver progreso, no interactuar)                       ║
║  • Degradación: -1 corazón cada 3 días                                       ║
║  • Límite: 30 días máximo en Limbo                                           ║
║  • Avatar: Se vuelve gris, encorvado, degradado                              ║
║                                                                              ║
║  RECUPERACIÓN:                                                               ║
║  • Pagar reactiva cuenta inmediatamente                                      ║
║  • Se recupera desde el estado actual (con degradación aplicada)             ║
║                                                                              ║
║  MENSAJE EN LIMBO:                                                           ║
║  "Tu avatar está en estasis. La disciplina requiere compromiso.              ║
║   Reactiva tu suscripción para continuar la evolución."                      ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 13.4 Flujo de Trial a Pago

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  DÍA  │  ESTADO              │  ACCIÓN DEL SISTEMA                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  1    │  Trial activo        │  Acceso completo, onboarding                 │
│  2-4  │  Trial activo        │  Funcionalidad normal, recordatorios         │
│  5    │  Trial último día    │  Notificación: "Mañana decide tu destino"    │
│  6    │  ⭐ CONVERSIÓN       │  Hito Alucín, bloqueo si no paga             │
│  6+   │  Activo/Pago         │  Acceso completo con suscripción             │
│  6+   │  Limbo/No pago       │  Solo lectura, degradación progresiva        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.5 Estrategia de Conversión

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ESTRATEGIA DE CONVERSIÓN DÍA 6                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PSICOLOGÍA APLICADA:                                                       │
│                                                                             │
│  1. INVERSIÓN PREVIA:                                                       │
│     El usuario ya invirtió 5 días de esfuerzo. El costo hundido lo          │
│     motiva a continuar.                                                     │
│                                                                             │
│  2. DOPAMINA EN PICO:                                                       │
│     El día 6 es el "Hito Alucín" - primer cambio visual dramático.          │
│     La dopamina está en su máximo.                                          │
│                                                                             │
│  3. PÉRDIDA AVERSIVA:                                                       │
│     El sistema muestra lo que PERDERÁ si no paga:                           │
│     • Avatar volviendo a la grasa                                           │
│     • Progreso desapareciendo                                               │
│     • "Tu Semi-Dios nunca nacerá"                                           │
│                                                                             │
│  4. PROMESA DE TRASCENDENCIA:                                               │
│     Preview de cómo se verá el avatar en niveles superiores                 │
│     "Esto es solo el comienzo..."                                           │
│                                                                             │
│  OBJETIVO DE CONVERSIÓN: 12% de usuarios activos que llegan al día 5        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 14. APÉNDICE: REFERENCIAS Y GLOSARIO

## 14.1 Glosario de Términos

| Término | Definición |
|---------|------------|
| **AURA** | Vector de presencia mental y disciplina interna |
| **BTC** | Bitcoins virtuales, moneda del sistema |
| **Decay** | Degradación natural de vectores por inactividad |
| **ENV** | Vector de entorno/escenario del avatar |
| **Face Lvl** | Vector de definición facial (JAWLINE) |
| **Gating** | Restricciones para comprar/equipar items |
| **Judgement Night** | Proceso de cierre y evaluación diaria |
| **JAWLINE** | Vector de mandíbula y atractivo facial |
| **Limbo** | Estado de cuenta expirada sin pago |
| **Muscle Lvl** | Sub-vector de masa muscular |
| **Fat Lvl** | Sub-vector de grasa corporal (inverso) |
| **PHYSIQUE** | Vector combinado de muscle + fat |
| **Proof of Work** | Evidencia de esfuerzo real |
| **Racha** | Días consecutivos completados exitosamente |
| **Semi-Dios** | Nivel 10, estado máximo del ciclo |
| **Streak** | Sinónimo de racha |
| **Vector** | Dimensión medible de transformación |
| **WEALTH** | Vector de estatus económico |

## 14.2 Abreviaciones

| Abreviación | Significado |
|-------------|-------------|
| **GDD** | Game Design Document |
| **UI** | User Interface |
| **UX** | User Experience |
| **IA** | Inteligencia Artificial |
| **HIIT** | High Intensity Interval Training |
| **PR** | Personal Record (marca personal) |
| **MVP** | Minimum Viable Product |
| **CTA** | Call to Action |
| **KPI** | Key Performance Indicator |

## 14.3 Referencias de Diseño

```
SISTEMAS INSPIRADORES:
─────────────────────
• Habitica - Sistema de gamificación de hábitos
• Ring Fit Adventure - Fitness gamificado
• Duolingo - Sistema de rachas
• The Sims - Progresión visual de personajes
• Zelda - Sistema de corazones de vida
• RPGs Japoneses - Sistema de niveles y progresión

REFERENCIAS VISUALES:
────────────────────
• Supabase.com - Dark mode, minimalismo técnico
• Cyberpunk 2077 - Estética neón/futurista
• Dark Souls - Dificultad gratificante
• Stardew Valley - Pixel art moderno
```

---

# 15. HISTORIAL DE VERSIONES

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  VERSIÓN  │  FECHA      │  CAMBIOS                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  0.1      │  Ene 2026   │  Documento inicial, estructura base               │
│  1.0      │  Ene 2026   │  GDD completo con todos los sistemas              │
│  1.1      │  -          │  Pendiente: Balance de economía post-testing      │
│  1.2      │  -          │  Pendiente: Ajustes de dificultad post-launch     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                                                                              ║
║           FIN DEL GAME DESIGN DOCUMENT                                       ║
║                                                                              ║
║           METAMEN100 v1.0                                                    ║
║           "Disciplina real. Estatus digital. Vida transformada."             ║
║                                                                              ║
║                                                                              ║
║           Documento preparado para sistema TOP-100 Mundial                   ║
║           Total de líneas: ~2,800+                                           ║
║           Estado: PRODUCCIÓN                                                 ║
║                                                                              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

*Documento generado para METAMEN100 - Sistema Operativo de Conducta*
*Enero 2026*
