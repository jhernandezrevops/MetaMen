# METAMEN100 - CONTENT SPECIFICATION
## Especificación de Contenido TOP 100 Mundial

---

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                    📋 CONTENT SPECIFICATION v1.0                                                 ║
║                    METAMEN100 - El Espejo Bio-Digital                                            ║
║                                                                                                  ║
║     "Todo el contenido que da vida al Sistema Operativo de Conducta"                            ║
║                                                                                                  ║
║     Documento Clasificación: TOP-100 WORLDWIDE READY                                            ║
║     Última Actualización: Enero 2026                                                            ║
║     Estado: PRODUCCIÓN                                                                          ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

# ÍNDICE

1. [Tareas del Protocolo](#1-tareas-del-protocolo)
2. [Catálogo de Tienda](#2-catálogo-de-tienda)
3. [Textos de UI (Copywriting)](#3-textos-de-ui-copywriting)
4. [Prompts de IA](#4-prompts-de-ia)
5. [Contenido de Herramientas](#5-contenido-de-herramientas)
6. [Assets Requeridos](#6-assets-requeridos)

---

# 1. TAREAS DEL PROTOCOLO

## 1.1 Estructura de una Tarea

```typescript
interface Task {
  // Identificación
  id: string;                    // Formato: "TASK_{ARCH}_{SEQ}" (ej: "TASK_MEN_001")
  name: string;                  // Nombre visible al usuario
  description: string;           // Descripción corta (máx 100 chars)
  
  // Categorización
  category: TaskCategory;        // 'obligatoria' | 'opcional' | 'bonus'
  archetype: Archetype;          // 'MENTAL' | 'CARA' | 'PRODUCTIVIDAD' | 'FISICO'
  vector_target: Vector;         // 'AURA' | 'JAWLINE' | 'WEALTH' | 'PHYSIQUE' | 'ENV'
  
  // Impacto
  vector_modifier: number;       // Incremento base al vector (0.01 - 0.10)
  btc_reward: number;            // Bitcoins ganados al completar
  xp_reward: number;             // XP ganados al completar
  
  // Requisitos
  duration_minutes: number;      // Duración mínima en minutos
  frequency_weekly: number;      // Veces por semana requeridas
  tool_required: string | null;  // Herramienta asociada (si aplica)
  
  // Validación
  completion_criteria: string;   // Criterio de completitud específico
  proof_type: ProofType;         // 'time_based' | 'input_based' | 'action_based'
  
  // Unlock
  level_required: number;        // Nivel mínimo para desbloquear
  day_available_from: number;    // Día desde el que está disponible
}
```

---

## 1.2 Tareas por Arquetipo

### ARQUETIPO MENTAL → VECTOR AURA

| ID | Nombre | Descripción | BTC | XP | Duración | Freq/Sem | Herramienta | Criterio |
|----|--------|-------------|-----|-----|----------|----------|-------------|----------|
| TASK_MEN_001 | Meditación Consciente | Sesión de meditación guiada o libre | 100 | 50 | 5-20 min | 7 | Cámara de Meditación | 90% audio completado |
| TASK_MEN_002 | Lectura de Poder | Leer literatura de desarrollo personal | 15 | 25 | 15 min | 7 | Biblioteca de Poder | Timer completado |
| TASK_MEN_003 | Ducha Fría | Exposición a agua fría controlada | 50 | 35 | 2-5 min | 3 | — | Check manual |
| TASK_MEN_004 | Despertar Estratégico | Despertar a la hora programada | 30 | 20 | — | 7 | — | Hora de check-in |
| TASK_MEN_005 | Audio-Hipnosis | Escuchar sesión de hipnosis personalizada | 75 | 40 | 10-30 min | 3 | Crea tu Hipnosis | Audio completado |

**Distribución Semanal MENTAL:**
- Lunes a Domingo: Meditación (7x) + Lectura (7x) + Despertar (7x)
- Lunes, Miércoles, Viernes: Ducha Fría (3x)
- Martes, Jueves, Sábado: Audio-Hipnosis (3x)

**Incrementos Vector AURA:**
- Meditación: +0.03 aura_lvl por sesión
- Lectura: +0.02 aura_lvl por sesión
- Ducha Fría: +0.04 aura_lvl por sesión
- Despertar: +0.01 aura_lvl por día
- Audio-Hipnosis: +0.03 aura_lvl por sesión

---

### ARQUETIPO CARA → VECTOR JAWLINE

| ID | Nombre | Descripción | BTC | XP | Duración | Freq/Sem | Herramienta | Criterio |
|----|--------|-------------|-----|-----|----------|----------|-------------|----------|
| TASK_CAR_001 | Yoga Facial | Ejercicios para definición facial | 15 | 30 | 10-15 min | 3 | Escultor Facial | Rutina completada |
| TASK_CAR_002 | Mewing Practice | Práctica de postura de lengua | 10 | 15 | 5 min | 7 | Escultor Facial | Timer completado |
| TASK_CAR_003 | Corrección Postural | Ejercicios de alineación espinal | 15 | 25 | 10 min | 3 | Movilidad Táctica | Rutina completada |
| TASK_CAR_004 | Ejercicios Kegel | Fortalecimiento suelo pélvico | 10 | 20 | 5-10 min | 10 (2/día x 5) | Vitalidad Sexual | Rutina completada |

**Distribución Semanal CARA:**
- Lunes, Miércoles, Viernes: Yoga Facial (3x) + Corrección Postural (3x)
- Todos los días: Mewing (7x)
- Lunes a Viernes: Kegel 2x/día (10 sesiones/semana)

**Incrementos Vector JAWLINE:**
- Yoga Facial: +0.04 face_lvl por sesión
- Mewing: +0.01 face_lvl por día
- Corrección Postural: +0.02 face_lvl por sesión
- Kegel: +0.01 face_lvl por sesión

---

### ARQUETIPO PRODUCTIVIDAD → VECTOR WEALTH

| ID | Nombre | Descripción | BTC | XP | Duración | Freq/Sem | Herramienta | Criterio |
|----|--------|-------------|-----|-----|----------|----------|-------------|----------|
| TASK_PRO_001 | Journal Estratégico | Escribir reflexión y planificación diaria | 150 | 60 | 10 min | 6 | Bitácora de Guerra | Mín. 100 palabras |
| TASK_PRO_002 | Focus Work | Trabajo concentrado sin distracciones | 100/h | 50/h | 3h | 5 sesiones | Focus Chamber | Timer activo + check |
| TASK_PRO_003 | Skill Learning | Aprendizaje de habilidad de alto valor | 50/30min | 40/30min | 1h | 5h total | Biblioteca de Poder | Timer completado |
| TASK_PRO_004 | Día de Guerra | Jornada de intensidad máxima (100% tareas) | 1500 bonus | 500 | Todo el día | 1 | — | 100% tareas completadas |

**Distribución Semanal PRODUCTIVIDAD:**
- Lunes a Sábado: Journal (6x)
- Lunes a Viernes: Focus Work 3h/día (5 sesiones)
- Lunes a Viernes: Skill Learning 1h/día (5h total)
- Sábado: Día de Guerra (opcional, alto riesgo/recompensa)

**Incrementos Vector WEALTH:**
- Journal: +0.03 wealth_lvl por entrada
- Focus Work: +0.02 wealth_lvl por hora (máx +0.06/día)
- Skill Learning: +0.01 wealth_lvl por 30 min
- Día de Guerra: +0.10 wealth_lvl si se completa

---

### ARQUETIPO FÍSICO → VECTOR PHYSIQUE

| ID | Nombre | Descripción | BTC | XP | Duración | Freq/Sem | Herramienta | Criterio |
|----|--------|-------------|-----|-----|----------|----------|-------------|----------|
| TASK_FIS_001 | Entrenamiento Fuerza | Sesión de levantamiento de pesas | 250 | 100 | 45-60 min | 5 | Templo del Hierro | Rutina registrada |
| TASK_FIS_002 | Cardio HIIT | Entrenamiento cardiovascular intervalos | 100 | 60 | 20-40 min | 3 | — | Timer completado |
| TASK_FIS_003 | Hidratación | Consumir 1.5L de agua | 20 | 15 | — | 7 | — | Check manual |
| TASK_FIS_004 | Stretching/Movilidad | Rutina de flexibilidad | 25 | 20 | 10-15 min | 3 | Movilidad Táctica | Rutina completada |

**Distribución Semanal FÍSICO:**
- Lunes, Martes, Jueves, Viernes, Sábado: Entrenamiento Fuerza (5x)
- Lunes, Miércoles, Viernes: Cardio HIIT (3x)
- Todos los días: Hidratación 1.5L (7x)
- Martes, Jueves, Sábado: Stretching (3x)

**Incrementos Vector PHYSIQUE:**
- Entrenamiento Fuerza: +0.05 muscle_lvl, -0.02 fat_lvl por sesión
- Cardio HIIT: -0.04 fat_lvl por sesión
- Hidratación: +0.01 muscle_lvl (tonicidad)
- Stretching: +0.01 muscle_lvl (recuperación)

---

## 1.3 Matriz Semanal Completa

```
╔═══════════════╦═══════╦═══════╦═══════╦═══════╦═══════╦═══════╦═══════╗
║  TAREA        ║  LUN  ║  MAR  ║  MIE  ║  JUE  ║  VIE  ║  SAB  ║  DOM  ║
╠═══════════════╬═══════╬═══════╬═══════╬═══════╬═══════╬═══════╬═══════╣
║ Meditación    ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║
║ Lectura       ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║
║ Ducha Fría    ║   ✓   ║       ║   ✓   ║       ║   ✓   ║       ║       ║
║ Despertar     ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║
║ Yoga Facial   ║   ✓   ║       ║   ✓   ║       ║   ✓   ║       ║       ║
║ Mewing        ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║
║ Postura       ║   ✓   ║       ║   ✓   ║       ║   ✓   ║       ║       ║
║ Kegel (x2)    ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║       ║       ║
║ Journal       ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║       ║
║ Focus Work    ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║       ║       ║
║ Skill Learn   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║       ║       ║
║ Fuerza        ║   ✓   ║   ✓   ║       ║   ✓   ║   ✓   ║   ✓   ║       ║
║ Cardio HIIT   ║   ✓   ║       ║   ✓   ║       ║   ✓   ║       ║       ║
║ Hidratación   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║   ✓   ║
║ Stretching    ║       ║   ✓   ║       ║   ✓   ║       ║   ✓   ║       ║
╠═══════════════╬═══════╬═══════╬═══════╬═══════╬═══════╬═══════╬═══════╣
║ TOTAL TAREAS  ║   14  ║   12  ║   13  ║   12  ║   14  ║   8   ║   4   ║
╚═══════════════╩═══════╩═══════╩═══════╩═══════╩═══════╩═══════╩═══════╝

TOTAL SEMANAL: 77 tareas base
UMBRAL ÉXITO DIARIO: 80% de tareas del día completadas
```

---

## 1.4 Progresión de Tareas por Fase

### FASE 1: DESPERTAR (Días 1-25)

| Tarea | Duración Inicial | Frecuencia | Intensidad |
|-------|------------------|------------|------------|
| Meditación | 5 min | 7x/sem | Básica |
| Lectura | 15 min | 7x/sem | Básica |
| Entrenamiento | 30 min | 3x/sem | Ligera |
| Focus Work | 1h | 3x/sem | Introducción |
| Kegel | 3s/3s × 10 | 6x/sem | Principiante |

### FASE 2: CONSTRUCCIÓN (Días 26-50)

| Tarea | Duración | Frecuencia | Intensidad |
|-------|----------|------------|------------|
| Meditación | 15 min | 7x/sem | Intermedia |
| Lectura | 30 min | 7x/sem | Consistente |
| Entrenamiento | 45 min | 5x/sem | Moderada |
| Focus Work | 2h | 5x/sem | Establecida |
| Kegel | 5s/5s × 15 | 10x/sem | Intermedio |
| Cardio HIIT | 20 min | 3x/sem | Introducido |
| Yoga Facial | 10 min | 3x/sem | Introducido |

### FASE 3: TRANSFORMACIÓN (Días 51-75)

| Tarea | Duración | Frecuencia | Intensidad |
|-------|----------|------------|------------|
| Meditación | 20 min | 7x/sem | Avanzada |
| Lectura | 30 min | 7x/sem | Profunda |
| Entrenamiento | 60 min | 5x/sem | Intensa |
| Focus Work | 3h | 5x/sem | Máxima |
| Kegel | 7s/5s × 20 | 10x/sem | Avanzado |
| Cardio HIIT | 30 min | 3x/sem | Completo |
| Yoga Facial | 15 min | 3x/sem | Intenso |

### FASE 4: TRANSCENDENCIA (Días 76-100)

| Tarea | Duración | Frecuencia | Intensidad |
|-------|----------|------------|------------|
| Meditación | 20-30 min | 7x/sem | Maestría |
| Todo resto | Mantener | 5-7x/sem | Élite |

---

# 2. CATÁLOGO DE TIENDA

## 2.1 Estructura de un Item

```typescript
interface StoreItem {
  // Identificación
  id: string;                    // Formato: "ITEM_{CAT}_{SEQ}" (ej: "ITEM_ARM_001")
  name: string;                  // Nombre visible
  description: string;           // Descripción corta
  
  // Clasificación
  category: ItemCategory;        // Ver categorías abajo
  rarity: Rarity;                // 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  
  // Economía
  price_btc: number;             // Precio en Bitcoins
  
  // Gating (Requisitos)
  level_required: number;        // Nivel mínimo
  vector_requirements: {
    aura_min?: number;
    jawline_min?: number;
    wealth_min?: number;
    physique_min?: number;
    fat_max?: number;            // Grasa máxima permitida
  };
  streak_required?: number;      // Racha mínima
  special_condition?: string;    // Condición especial
  
  // IA Generation
  prompt_tokens: string[];       // Tokens para inyectar en prompt
  preview_url: string;           // URL de preview
  
  // Funcionalidad
  effect?: ItemEffect;           // Efecto funcional si aplica
}
```

---

## 2.2 Items por Categoría

### CATEGORÍA: ARMADURA (Ropa)

| ID | Nombre | Rareza | Precio | Nivel | Gating | Prompt Tokens |
|----|--------|--------|--------|-------|--------|---------------|
| ITEM_ARM_001 | Harapos Sucios | Common | — | 1 | Inicial | "dirty torn rags, stained gray shirt, ripped clothes" |
| ITEM_ARM_002 | Playera Básica Limpia | Common | 250 | 3 | — | "clean white t-shirt, simple cotton tee, neat casual" |
| ITEM_ARM_003 | Jeans Ajustados | Common | 500 | 3 | — | "fitted dark jeans, slim denim, casual pants" |
| ITEM_ARM_004 | Sudadera Streetwear | Uncommon | 1,000 | 4 | — | "modern hoodie, streetwear style, urban fashion" |
| ITEM_ARM_005 | Camisa Polo de Marca | Uncommon | 1,500 | 5 | — | "branded polo shirt, smart casual, collar shirt" |
| ITEM_ARM_006 | Pantalón Chino | Uncommon | 2,000 | 5 | — | "chino pants, smart casual trousers, tailored fit" |
| ITEM_ARM_007 | Chaqueta de Cuero | Rare | 4,000 | 6 | fat_lvl < 9 | "leather jacket, biker style, premium leather coat" |
| ITEM_ARM_008 | Camisa de Vestir | Rare | 5,000 | 7 | — | "dress shirt, formal button-up, crisp white shirt" |
| ITEM_ARM_009 | Blazer Elegante | Rare | 8,000 | 7 | fat_lvl < 8 | "elegant blazer, fitted suit jacket, tailored blazer" |
| ITEM_ARM_010 | Traje Smart Casual | Epic | 12,000 | 8 | fat_lvl < 7 | "smart casual suit, modern businessman attire" |
| ITEM_ARM_011 | Traje a Medida | Epic | 15,000 | 9 | fat_lvl < 6 | "bespoke suit, tailored fit, premium wool suit" |
| ITEM_ARM_012 | Traje de Diseñador | Epic | 25,000 | 9 | fat_lvl < 5 | "designer suit, luxury italian suit, executive attire" |
| ITEM_ARM_013 | Esmoquin Impecable | Legendary | 35,000 | 10 | fat_lvl < 5, aura > 10 | "black tie tuxedo, gala formal wear, impeccable tux" |
| ITEM_ARM_014 | Armadura Dorada Divina | Legendary | 50,000 | 11 | S-Max 2 vectores | "golden divine armor, celestial warrior attire, godlike robes" |

---

### CATEGORÍA: ACCESORIOS

| ID | Nombre | Rareza | Precio | Nivel | Gating | Prompt Tokens |
|----|--------|--------|--------|-------|--------|---------------|
| ITEM_ACC_001 | Gorra Alucín | Common | 500 | 3 | Exclusivo Día 6 | "snapback cap, urban style cap, fitted baseball hat" |
| ITEM_ACC_002 | Lentes Casuales | Common | 750 | 4 | — | "casual sunglasses, simple eyewear" |
| ITEM_ACC_003 | Cadena Básica | Uncommon | 1,000 | 4 | — | "simple chain necklace, silver pendant" |
| ITEM_ACC_004 | Pulsera de Cuero | Uncommon | 800 | 4 | — | "leather bracelet, wrist accessory" |
| ITEM_ACC_005 | Reloj Casual | Uncommon | 3,000 | 5 | — | "casual wristwatch, everyday watch" |
| ITEM_ACC_006 | Lentes de Sol Premium | Rare | 2,500 | 6 | — | "premium sunglasses, designer shades, aviator glasses" |
| ITEM_ACC_007 | Reloj de Marca | Rare | 8,000 | 7 | — | "branded watch, luxury timepiece, automatic watch" |
| ITEM_ACC_008 | Cadena de Oro | Epic | 12,000 | 8 | fat_lvl < 5 | "gold chain necklace, heavy gold pendant, luxury chain" |
| ITEM_ACC_009 | Reloj de Lujo | Epic | 20,000 | 9 | fat_lvl < 4 | "luxury swiss watch, gold bracelet watch, premium chronograph" |
| ITEM_ACC_010 | Anillo de Sello | Epic | 15,000 | 10 | — | "signet ring, gold family crest ring, power ring" |
| ITEM_ACC_011 | Rolex Presidencial | Legendary | 30,000 | 10 | wealth > 10 | "presidential rolex, gold rolex day-date, billionaire watch" |
| ITEM_ACC_012 | Corona de Semi-Dios | Legendary | 40,000 | 11 | S-Max todos | "divine crown, golden laurel wreath, emperor's crown" |

---

### CATEGORÍA: VEHÍCULOS

| ID | Nombre | Rareza | Precio | Nivel | Gating | Prompt Tokens |
|----|--------|--------|--------|-------|--------|---------------|
| ITEM_VEH_001 | Bicicleta Básica | Common | 2,000 | 3 | — | "bicycle in background, simple bike" |
| ITEM_VEH_002 | Moto Scooter | Uncommon | 5,000 | 4 | — | "scooter motorcycle, vespa style" |
| ITEM_VEH_003 | Chevy Tuneado | Uncommon | 12,000 | 5 | Hito especial | "tuned chevrolet, modified muscle car" |
| ITEM_VEH_004 | Sedan Ejecutivo | Rare | 20,000 | 6 | — | "executive sedan, black luxury sedan, business car" |
| ITEM_VEH_005 | SUV Premium | Rare | 35,000 | 7 | — | "premium SUV, luxury crossover, range rover style" |
| ITEM_VEH_006 | Auto Deportivo | Epic | 60,000 | 8 | — | "sports car, ferrari style, red exotic car" |
| ITEM_VEH_007 | Supercar | Epic | 80,000 | 9 | — | "supercar, lamborghini style, hypercar" |
| ITEM_VEH_008 | Hypercar | Legendary | 100,000 | 10 | — | "hypercar, bugatti style, ultimate supercar" |
| ITEM_VEH_009 | Jet Privado METAMEN | Legendary | 150,000 | 11 | racha > 90 | "private jet in background, luxury aircraft" |

---

### CATEGORÍA: PROPIEDADES (ENV)

| ID | Nombre | Rareza | Precio | Nivel | Gating | Prompt Tokens |
|----|--------|--------|--------|-------|--------|---------------|
| ITEM_PRO_001 | Callejón Oscuro | Common | — | 1-2 | Inicial | "dark alley background, rainy street, urban decay" |
| ITEM_PRO_002 | Cuarto de Servicio | Common | 5,000 | 3 | — | "small room, humble quarters, basic bedroom" |
| ITEM_PRO_003 | Vecindad Popular | Uncommon | 8,000 | 4 | — | "neighborhood setting, modest home exterior" |
| ITEM_PRO_004 | Oficina Básica | Uncommon | 10,000 | 5 | — | "office cubicle, workplace, corporate environment" |
| ITEM_PRO_005 | Departamento Moderno | Rare | 15,000 | 5-6 | — | "modern apartment, city view, contemporary interior" |
| ITEM_PRO_006 | Casa de Lujo | Rare | 40,000 | 7 | — | "luxury house interior, upscale home, designer interior" |
| ITEM_PRO_007 | Penthouse | Epic | 70,000 | 8 | — | "penthouse suite, city skyline view, luxury high-rise" |
| ITEM_PRO_008 | Mansión | Epic | 100,000 | 9-10 | — | "mansion interior, grand estate, palatial home" |
| ITEM_PRO_009 | Jet Interior | Legendary | 120,000 | 10 | — | "private jet interior, luxury aircraft cabin" |
| ITEM_PRO_010 | Palacio/Ciudadela | Legendary | 150,000 | 11 | 2 ciclos | "palace throne room, emperor's chamber, divine temple" |

---

### CATEGORÍA: COMPAÑERAS

| ID | Nombre | Rareza | Precio | Nivel | Gating | Prompt Tokens |
|----|--------|--------|--------|-------|--------|---------------|
| ITEM_COM_001 | Modelo Casual | Rare | 25,000 | 7 | jawline > 6 | "beautiful woman beside him, attractive companion" |
| ITEM_COM_002 | Modelo Premium | Epic | 50,000 | 9 | jawline > 8, fat < 5 | "stunning model, elegant woman, luxury companion" |
| ITEM_COM_003 | Modelos Duales | Legendary | 80,000 | 10 | jawline > 10 | "two beautiful women, dual companions, elite company" |

---

### CATEGORÍA: MASCOTAS

| ID | Nombre | Rareza | Precio | Nivel | Gating | Prompt Tokens |
|----|--------|--------|--------|-------|--------|---------------|
| ITEM_MAS_001 | Perro Callejero | Common | 1,500 | 3 | — | "stray dog companion, loyal mutt" |
| ITEM_MAS_002 | Bulldog Francés | Uncommon | 5,000 | 5 | — | "french bulldog pet, cute dog" |
| ITEM_MAS_003 | Pastor Alemán | Rare | 12,000 | 7 | — | "german shepherd, protection dog" |
| ITEM_MAS_004 | Doberman | Epic | 20,000 | 8 | — | "doberman pinscher, guard dog" |
| ITEM_MAS_005 | León Domesticado | Legendary | 60,000 | 10 | — | "pet lion, exotic predator companion" |

---

### CATEGORÍA: POWER-UPS

| ID | Nombre | Rareza | Precio | Efecto | Límite |
|----|--------|--------|--------|--------|--------|
| ITEM_PWR_001 | Escudo de Consistencia | Uncommon | 2,500 | Protege racha de 1 día fallido | 2/semana |
| ITEM_PWR_002 | Botiquín de Corazón | Rare | 5,000 | Recupera 1 corazón de salud | 1/semana |
| ITEM_PWR_003 | Inyección de XP | Uncommon | 3,000 | +500 XP instantáneo | 1/semana |
| ITEM_PWR_004 | Boost de BTC | Rare | 4,000 | +25% BTC por 24h | 1/semana |
| ITEM_PWR_005 | Resurrección Inmediata | Epic | 10,000 | Revive sin perder 50% BTC | 1/ciclo |
| ITEM_PWR_006 | Escudo de Aura | Rare | 6,000 | Previene decay AURA por 48h | 1/semana |

---

## 2.3 Balance Económico de Tienda

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         BALANCE ECONÓMICO                                     ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  USUARIO PERFECTO (100 días):                                                ║
║  ─────────────────────────────                                               ║
║  Total BTC ganados: ~294,000 BTC                                             ║
║  Puede comprar: ~60% del catálogo completo                                   ║
║                                                                              ║
║  DESGLOSE DE CATEGORÍAS:                                                     ║
║  • Armadura completa (14 items):    ~130,000 BTC                             ║
║  • Accesorios completos (12 items): ~135,000 BTC                             ║
║  • Vehículo tope:                    150,000 BTC                             ║
║  • Propiedad tope:                   150,000 BTC                             ║
║  • Compañeras (todas):               155,000 BTC                             ║
║  • Mascotas (todas):                  98,500 BTC                             ║
║                                                                              ║
║  ESTRATEGIA PARA COMPLETAR TODO:                                             ║
║  Requiere ~2 ciclos de 100 días o compra de packs BTC reales                 ║
║                                                                              ║
║  PRECIOS DE REFERENCIA:                                                      ║
║  • Item más barato: 250 BTC (Playera básica)                                 ║
║  • Item más caro: 150,000 BTC (Jet/Ciudadela)                                ║
║  • Precio promedio: ~15,000 BTC                                              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

# 3. TEXTOS DE UI (COPYWRITING)

## 3.1 Pantallas de Auth

### Login

```yaml
title: "Accede al Protocolo"
subtitle: "Tu avatar te espera"
email_placeholder: "Correo electrónico"
password_placeholder: "Contraseña"
button_login: "INGRESAR AL SISTEMA"
forgot_password: "¿Olvidaste tu contraseña?"
no_account: "¿Sin cuenta? Inicia el Protocolo"
error_invalid: "Credenciales inválidas. El sistema no te reconoce."
error_network: "Error de conexión. Verifica tu red."
```

### Register

```yaml
title: "Inicia el Protocolo de 100 Días"
subtitle: "Tu transformación comienza ahora"
name_placeholder: "Nombre de guerra"
email_placeholder: "Correo electrónico"
password_placeholder: "Contraseña (mín. 8 caracteres)"
password_confirm_placeholder: "Confirma contraseña"
terms_checkbox: "Acepto los términos del Contrato de Trascendencia"
button_register: "ACTIVAR MI AVATAR"
has_account: "¿Ya tienes cuenta? Ingresa"
error_email_exists: "Este correo ya está registrado en el sistema."
error_weak_password: "Contraseña débil. Un Semi-Dios necesita más seguridad."
success: "Cuenta creada. Preparando tu avatar..."
```

### Forgot Password

```yaml
title: "Recupera el Acceso"
subtitle: "Todos caen. Los guerreros se levantan."
email_placeholder: "Correo de tu cuenta"
button_send: "ENVIAR CÓDIGO DE RECUPERACIÓN"
success: "Revisa tu correo. El código expira en 10 minutos."
error_not_found: "Este correo no está en el sistema."
```

---

## 3.2 Onboarding

### Pantalla 1: Bienvenida

```yaml
title: "HACKING IDENTITY..."
subtitle: "Buscando METAMEN 001..."
animation: "Consola militar iniciando"
progress_text: "Localizado."
button: "CONTINUAR"
```

### Pantalla 2: Selección de Arquetipo

```yaml
title: "SELECCIONA TU SEMILLA DE IDENTIDAD"
subtitle: "Este es tu punto de partida. No hay vuelta atrás."
instruction: "Desliza para ver los modelos base"

archetype_1_name: "RASTAS"
archetype_1_lore: "El Rastas es un hombre noble de los que se conocen como 'bonachón'. Su esposa tenía sus encuentros con su mejor amigo mientras él disputaba una partida de Minecraft. Terminó en las calles porque no supo poner límites."

archetype_2_name: "EL MUSCLES"
archetype_2_lore: "Solía ser el cadenero más respetado de la zona de antros. Un romance prohibido con la hija de un magnate lo dejó sin contactos ni empleo. Cambió los batidos de proteína por tamales de la esquina."

archetype_3_name: "PECAS"
archetype_3_lore: "Un genio de las computadoras que lo tuvo todo en papel. Apostó los ahorros de su vida en una moneda que prometía llevarlo 'a la luna', pero terminó estrellándose. Vive escondido en el cuarto de lavado de su tía."

archetype_4_name: "EL GREÑAS"
archetype_4_lore: "Lideraba una banda de rock pesado en los 90. La calvicie y el streaming acabaron con su carrera. Vive de los recuerdos de sus giras mientras usa ropa que no conoce el gimnasio."

archetype_5_name: "EL RUBIO"
archetype_5_lore: "El 'rubio galán' de la preparatoria que nunca aceptó que el tiempo pasa. Su chaqueta de mezclilla es lo único que le queda de su época dorada, aunque ya no cierra."

archetype_6_name: "EL LIC"
archetype_6_lore: "Era el empleado del mes durante 5 años seguidos. Un software de IA hizo su trabajo en 2 segundos. La comida rápida fue su única terapia contra la irrelevancia."

button_confirm: "ESTA ES MI SEMILLA"
warning: "⚠️ Esta elección es permanente durante los 100 días"
```

### Pantalla 3: Escaneo Bio-Digital

```yaml
title: "INICIANDO ESCANEO BIO-DIGITAL"
subtitle: "Calibrando vectores de identidad..."
vector_1: "AURA detectada... CRÍTICA"
vector_2: "JAWLINE analizado... DEGRADADO"
vector_3: "WEALTH escaneado... INDIGENTE"
vector_4: "PHYSIQUE medido... OBESO"
vector_5: "ENV localizado... ABISMO"
completion: "Escaneo completo. Protocolo inicializado."
button: "VER MI AVATAR"
```

### Pantalla 4: Contrato de Trascendencia

```yaml
title: "CONTRATO DE TRASCENDENCIA"
subtitle: "El compromiso es la moneda de los Semi-Dioses"
body: |
  Por medio de este contrato digital, me comprometo a:
  
  • Ejecutar el Protocolo de 100 días sin excusas
  • Aceptar las consecuencias de mi negligencia
  • Nunca engañar al sistema (el espejo no miente)
  • Perseguir la versión más poderosa de mí mismo
  
  Entiendo que el fracaso tiene consecuencias visuales.
  Entiendo que la muerte del avatar es permanente.
  Entiendo que solo yo puedo salvarme.

instruction: "Mantén presionado para firmar"
hold_text: "FIRMANDO..."
signature_complete: "CONTRATO FIRMADO"
decline_warning: "Si declinas, el protocolo se cierra permanentemente."
button_decline: "NO ESTOY LISTO"
```

### Pantalla 5: Dashboard Revelado

```yaml
title: "SISTEMA INICIALIZADO"
subtitle: "Tu avatar ha sido activado"
health_warning: "⚠️ ALERTA: Comienzas con 5 de 10 corazones por negligencia previa"
mission_prompt: "Tu primera misión está lista"
button: "INICIAR DÍA 1"
```

---

## 3.3 Dashboard

### Header

```yaml
greeting_morning: "Buenos días, Guerrero."
greeting_afternoon: "Buenas tardes, Guerrero."
greeting_evening: "Buenas noches, Guerrero."
streak_display: "🔥 {streak} días en racha"
level_display: "Nivel {level}: {level_name}"
```

### Level Names

```yaml
level_1: "Indigente"
level_2: "Arrimado"
level_3: "Alucín"
level_4: "Chalán"
level_5: "Godín"
level_6: "Acomodado"
level_7: "Pudiente"
level_8: "Millonario"
level_9: "Magnate"
level_10: "Semi-Dios"
```

### Stats Card

```yaml
health_label: "Salud"
health_format: "{current}/10 ❤️"
xp_label: "Experiencia"
xp_format: "{current}/{next_level} XP"
btc_label: "Bitcoins"
btc_format: "{amount} BTC"
streak_label: "Racha"
streak_format: "{days} días"
```

### Tasks Section

```yaml
section_title: "Misiones del Día"
completed: "Completada"
pending: "Pendiente"
in_progress: "En progreso"
locked: "Bloqueada"
tasks_completed: "{done}/{total} misiones completadas"
progress_bar: "{percentage}% del día"
```

### Avatar Section

```yaml
mirror_title: "EL ESPEJO"
last_update: "Última sincronización: {time}"
regenerating: "Sincronizando avatar..."
tap_to_expand: "Toca para ver en pantalla completa"
```

---

## 3.4 Tareas

### Task Card

```yaml
btc_reward: "+{amount} BTC"
xp_reward: "+{amount} XP"
duration: "{minutes} min"
start_button: "INICIAR"
complete_button: "COMPLETAR"
in_progress_text: "En progreso..."
completed_text: "✓ Completada"
```

### Completion Messages

```yaml
meditation_complete: "Mente sincronizada. Tu AURA se fortalece."
workout_complete: "Hierro dominado. Tu FÍSICO evoluciona."
journal_complete: "Estrategia registrada. Tu WEALTH crece."
reading_complete: "Conocimiento absorbido. Tu AURA se expande."
facial_complete: "Escultura facial en progreso. Tu JAWLINE se define."
kegel_complete: "Energía vital activada."
focus_complete: "Deep Work completado. Productividad de élite."
cold_shower_complete: "Resiliencia forjada. Nada puede detenerte."
```

### Failure Messages

```yaml
task_missed: "Misión fallida. Tu avatar lo siente."
streak_broken: "Racha rota. Reconstruye desde las cenizas."
day_incomplete: "Día incompleto. El espejo no miente."
```

---

## 3.5 Herramientas

### Biblioteca de Poder

```yaml
title: "BIBLIOTECA DE PODER"
subtitle: "El conocimiento es la espada del guerrero"
reading_timer: "Tiempo de lectura"
pages_read: "Páginas leídas hoy"
book_progress: "{percent}% completado"
start_reading: "LEER"
stop_reading: "DETENER"
```

### Templo del Hierro

```yaml
title: "TEMPLO DEL HIERRO"
subtitle: "Donde se forjan los cuerpos de élite"
select_routine: "Selecciona rutina"
start_workout: "INICIAR ENTRENAMIENTO"
rest_timer: "Descanso: {seconds}s"
set_complete: "Serie completada"
log_weight: "Registrar peso"
previous_pr: "PR anterior: {weight}kg"
new_pr: "🏆 ¡NUEVO RÉCORD PERSONAL!"
```

### Cámara de Meditación

```yaml
title: "CÁMARA DE MEDITACIÓN"
subtitle: "El silencio es el lenguaje del poder"
select_meditation: "Selecciona meditación"
duration_short: "Despertar (5 min)"
duration_medium: "Foco (10 min)"
duration_long: "Dominio (15 min)"
duration_master: "Trascendencia (20 min)"
begin: "INICIAR SESIÓN"
breathe_in: "INHALA"
breathe_out: "EXHALA"
hold: "MANTÉN"
session_complete: "Sesión completada. Tu mente se expande."
```

### Bitácora de Guerra

```yaml
title: "BITÁCORA DE GUERRA"
subtitle: "Documenta tu conquista"
prompt_label: "Prompt del día:"
prompts:
  level_1_3: "¿Qué estoy haciendo mal y cómo lo corrijo?"
  level_4_6: "¿Qué acciones de hoy me acercan a mis metas?"
  level_7_9: "¿Cómo puedo optimizar mi día para máximo impacto?"
  level_10: "¿Qué legado estoy construyendo con mis acciones diarias?"
placeholder: "Escribe tu reflexión..."
word_count: "{count} palabras (mínimo 100)"
save_entry: "GUARDAR ENTRADA"
entry_saved: "Entrada guardada. La estrategia está documentada."
```

### Vitalidad Sexual

```yaml
title: "VITALIDAD SEXUAL"
subtitle: "El poder primordial del guerrero"
begin_routine: "INICIAR RUTINA"
squeeze: "APRIETA"
release: "AFLOJA"
rep_count: "Repetición {current}/{total}"
routine_complete: "Energía vital activada."
next_level: "Siguiente nivel desbloqueado en {days} días"
```

### Escultor Facial

```yaml
title: "ESCULTOR FACIAL"
subtitle: "La mandíbula define al hombre"
mewing_title: "Mewing"
mewing_instruction: "Lengua al paladar, labios sellados"
jaw_exercise_title: "Ejercicio de Mandíbula"
jaw_instruction: "Sigue el video"
rep_timer: "Mantén: {seconds}s"
routine_am: "Rutina AM"
routine_pm: "Rutina PM"
```

### Focus Chamber

```yaml
title: "FOCUS CHAMBER"
subtitle: "El santuario de la productividad"
set_duration: "Duración de sesión"
duration_options: ["1 hora", "2 horas", "3 horas", "4 horas"]
ambient_sound: "Sonido ambiente"
sound_options: ["Silencio", "Lluvia", "Café", "Naturaleza", "Lo-Fi"]
start_focus: "INICIAR DEEP WORK"
pause: "PAUSA"
resume: "CONTINUAR"
time_remaining: "Tiempo restante: {time}"
session_complete: "Deep Work completado. Productividad de élite alcanzada."
```

---

## 3.6 Tienda

### Main

```yaml
title: "TIENDA DE ESTATUS"
subtitle: "Demuestra que eres digno de la grandeza"
balance: "Tu balance: {amount} BTC"
categories:
  armadura: "Armadura"
  accesorios: "Accesorios"
  vehiculos: "Vehículos"
  propiedades: "Propiedades"
  companeras: "Compañeras"
  mascotas: "Mascotas"
  powerups: "Power-Ups"
filter_label: "Filtrar por"
sort_label: "Ordenar por"
```

### Item Card

```yaml
price: "{amount} BTC"
owned: "ADQUIRIDO"
equipped: "EQUIPADO"
buy_button: "COMPRAR"
equip_button: "EQUIPAR"
locked: "🔒 Bloqueado"
lock_reason_level: "Requiere Nivel {level}"
lock_reason_vector: "Requiere {vector} > {value}"
lock_reason_streak: "Requiere racha de {days} días"
```

### Purchase Flow

```yaml
confirm_title: "Confirmar Compra"
confirm_body: "¿Adquirir {item_name} por {price} BTC?"
confirm_button: "CONFIRMAR"
cancel_button: "CANCELAR"
success: "¡Item adquirido! Equípalo en tu inventario."
insufficient_funds: "Fondos insuficientes. Gana más BTC."
```

---

## 3.7 Estados Especiales

### Judgement Night

```yaml
title: "JUDGEMENT NIGHT"
subtitle: "La hora del juicio ha llegado"
summary_title: "Resumen del día"
tasks_completed: "Tareas completadas: {done}/{total}"
btc_earned: "BTC ganados: +{amount}"
xp_earned: "XP ganados: +{amount}"
streak_status_kept: "🔥 Racha mantenida: {days} días"
streak_status_broken: "💔 Racha rota"
vector_changes: "Cambios en vectores:"
vector_up: "↑ {vector}: +{amount}"
vector_down: "↓ {vector}: {amount}"
health_change: "Salud: {change}"
closing_success: "Día exitoso. Descansa, guerrero."
closing_failure: "Día fallido. Mañana es otra batalla."
regenerate_avatar: "Sincronizando avatar..."
```

### Death Screen

```yaml
title: "MUERTE DEL AVATAR"
subtitle: "Has fallado el Protocolo"
body: |
  Tu avatar ha muerto por negligencia.
  
  Los corazones llegaron a cero.
  El espejo refleja el vacío.
  
  Consecuencias:
  • Regreso a Nivel 1 (Indigente)
  • Pérdida del 50% de tus Bitcoins
  • Todos los vectores a nivel base
  • Racha reseteada a 0
  
  Solo los verdaderos guerreros se levantan.
video_prompt: "Reproduciendo secuencia de muerte..."
resurrect_button: "RESURGIR DE LAS CENIZAS"
resurrect_premium: "RESURRECCIÓN INMEDIATA (10,000 BTC)"
confirm_reset: "¿Estás listo para comenzar de nuevo?"
```

### Subscription Paywall

```yaml
title: "MOMENTO DE DECISIÓN"
subtitle: "Tu avatar está en estasis"
body: |
  Has llegado al Día 6: el Hito Alucín.
  Tu primera gran transformación visual está lista.
  
  Pero para continuar, necesitas compromiso real.
  
  Sin suscripción:
  • Avatar en modo gris
  • Corazones degradándose
  • Progreso congelado
  
  Con Elite Pass ($19.90/mes):
  • Evolución visual diaria
  • Acceso a todas las herramientas
  • Tu Semi-Dios te espera
price_display: "$19.90 USD/mes"
subscribe_button: "ACTIVAR ELITE PASS"
later_button: "Decidir después"
stasis_warning: "Tu avatar entrará en estasis en {hours} horas"
```

### Limbo State

```yaml
title: "ESTASIS"
subtitle: "Tu avatar espera"
body: "Tu avatar está en estasis. La disciplina requiere compromiso. Reactiva tu suscripción para continuar la evolución."
days_remaining: "Días en limbo: {days}/30"
warning: "Después de 30 días, el avatar muere."
reactivate_button: "REACTIVAR SUSCRIPCIÓN"
```

---

## 3.8 Notificaciones

### Push Notifications

```yaml
# Recordatorios de tareas
morning_reminder: "☀️ Buenos días, Guerrero. Tu protocolo del día te espera."
task_pending: "⏰ {task_name} pendiente. No dejes que tu avatar sufra."
evening_reminder: "🌙 Quedan {hours}h para completar el día. El juicio se acerca."

# Rachas
streak_milestone_7: "🔥 ¡7 días de racha! Multiplicador x1.5 activado."
streak_milestone_30: "🔥🔥 ¡30 días! Eres imparable. Multiplicador x2.5."
streak_danger: "⚠️ Tu racha de {days} días está en peligro. Completa hoy."

# Salud
health_low: "❤️ Solo {hearts} corazones. Un fallo más y..."
health_critical: "💀 ALERTA CRÍTICA: 1 corazón restante. Tu avatar agoniza."
health_recovered: "💚 Corazón recuperado. Sigue así."

# Logros
achievement_unlocked: "🏆 Logro desbloqueado: {achievement_name}"
level_up: "⬆️ ¡Subiste a Nivel {level}: {level_name}!"
item_unlocked: "🔓 Nuevo item disponible en la Tienda: {item_name}"

# Económicos
btc_earned: "💰 +{amount} BTC ganados hoy"
btc_bonus: "🎁 Bonus de racha: +{amount} BTC"

# Trial
trial_day_3: "📅 Día 3 de trial. Tu transformación apenas comienza."
trial_last_day: "⚡ ÚLTIMO DÍA de trial. Mañana decide tu destino."
trial_expired: "⏳ Trial expirado. Tu avatar entra en estasis."
```

### In-App Toasts

```yaml
task_completed: "✓ {task_name} completada"
btc_received: "+{amount} BTC"
xp_received: "+{amount} XP"
vector_increased: "↑ {vector} +{amount}"
vector_decreased: "↓ {vector} {amount}"
item_purchased: "Item adquirido"
item_equipped: "Item equipado"
streak_continued: "🔥 Racha: {days} días"
error_generic: "Error. Intenta de nuevo."
offline_mode: "Modo offline. Cambios se sincronizarán."
syncing: "Sincronizando..."
sync_complete: "Sincronización completa"
```

---

# 4. PROMPTS DE IA

## 4.1 Style Header (Inmutable)

```
STYLE_HEADER = """
Hyperrealistic digital portrait, cinematic lighting, 8k resolution, 
sharp focus, professional photography style, dramatic chiaroscuro, 
volumetric lighting, highly detailed skin texture, photorealistic rendering,
magazine cover quality, award-winning portrait photography
"""
```

## 4.2 Negative Prompt (Inmutable)

```
NEGATIVE_PROMPT = """
cartoon, anime, illustration, painting, sketch, drawing, 3d render,
low quality, blurry, pixelated, distorted, deformed, disfigured,
bad anatomy, wrong proportions, extra limbs, missing limbs,
floating limbs, disconnected limbs, mutation, mutated,
ugly, duplicate, morbid, gross, malformed, watermark, signature,
text, logo, border, frame, cropped, worst quality, jpeg artifacts,
oversaturated, overexposed, underexposed, grainy, noisy
"""
```

## 4.3 Identity Anchors por Arquetipo

### Arquetipo 1: RASTAS

```
IDENTITY_RASTAS = """
Hispanic male, early 30s, distinctive long dreadlocks hairstyle,
round friendly face structure, warm brown eyes, broad nose,
natural dark brown skin tone, full lips, thick eyebrows,
CONSISTENT FACIAL FEATURES: maintain exact face structure across all generations,
unique identifying marks: small mole on left cheek
"""
```

### Arquetipo 2: EL MUSCLES

```
IDENTITY_MUSCLES = """
Hispanic male, mid 30s, bald head, broad powerful shoulders,
square jaw structure, intense dark eyes, thick neck,
tan skin tone, small ears close to head, prominent brow ridge,
CONSISTENT FACIAL FEATURES: maintain exact face structure across all generations,
unique identifying marks: scar on right eyebrow
"""
```

### Arquetipo 3: PECAS

```
IDENTITY_PECAS = """
Hispanic male, late 20s, curly auburn-brown hair,
face covered in freckles, green-hazel eyes, pointed chin,
pale skin with freckles, thin nose, high cheekbones,
CONSISTENT FACIAL FEATURES: maintain exact face structure across all generations,
unique identifying marks: distinctive freckle pattern on nose bridge
"""
```

### Arquetipo 4: EL GREÑAS

```
IDENTITY_GRENAS = """
Hispanic male, mid 40s, completely bald head,
thick black goatee beard, deep-set brown eyes, weathered face,
olive skin tone, strong jawline, crow's feet around eyes,
CONSISTENT FACIAL FEATURES: maintain exact face structure across all generations,
unique identifying marks: slightly crooked nose from old break
"""
```

### Arquetipo 5: EL RUBIO

```
IDENTITY_RUBIO = """
Hispanic male, early 30s, spiky blonde hair,
boyish face structure, bright blue eyes, dimpled chin,
light skin tone, straight nose, expressive eyebrows,
CONSISTENT FACIAL FEATURES: maintain exact face structure across all generations,
unique identifying marks: cleft chin, blonde stubble
"""
```

### Arquetipo 6: EL LIC

```
IDENTITY_LIC = """
Hispanic male, late 30s, disheveled dark curly afro hair,
professional face structure, intelligent brown eyes, defined cheekbones,
tan bronze skin, medium nose, full dark eyebrows,
CONSISTENT FACIAL FEATURES: maintain exact face structure across all generations,
unique identifying marks: small birthmark on right temple
"""
```

---

## 4.4 Body State Tokens (fat_lvl × muscle_lvl)

### Matriz de Composición Corporal

```python
BODY_TOKENS = {
    # fat_lvl: 13 (obesidad mórbida) a 1 (ultra definido)
    # muscle_lvl: 1 (atrofiado) a 13 (culturista)
    
    # FAT HIGH (13-11) + MUSCLE LOW (1-4)
    "fat_13_muscle_1": "morbidly obese body, massive belly overhang, no visible muscle, saggy arms, double chin, extremely overweight physique",
    "fat_12_muscle_2": "severely obese body, large belly, minimal muscle tone, soft arms, very overweight",
    "fat_11_muscle_3": "obese body type, prominent belly, slight muscle under fat, overweight physique",
    
    # FAT HIGH (13-11) + MUSCLE MEDIUM (5-8)
    "fat_13_muscle_5": "powerlifter body type, massive frame, muscle hidden under fat, strong but obese",
    "fat_12_muscle_6": "strongman physique, big belly but powerful build, thick arms and legs",
    "fat_11_muscle_7": "bulky build, belly present but muscular frame visible, thick neck and arms",
    
    # FAT MEDIUM (10-7) + MUSCLE LOW (1-4)
    "fat_10_muscle_1": "chubby body, soft midsection, untrained physique, average overweight",
    "fat_9_muscle_2": "soft body type, visible belly, minimal definition, out of shape",
    "fat_8_muscle_3": "slightly overweight, soft around middle, beginner gym body",
    "fat_7_muscle_4": "average body, some belly fat, developing muscle tone",
    
    # FAT MEDIUM (10-7) + MUSCLE MEDIUM (5-8)
    "fat_10_muscle_5": "bulky build, muscle with fat overlay, thick arms",
    "fat_9_muscle_6": "solid build, visible strength, moderate belly",
    "fat_8_muscle_7": "athletic bulk, muscular with some softness, powerful build",
    "fat_7_muscle_8": "muscular bulk phase, strong visible muscles with softness",
    
    # FAT LOW (6-4) + MUSCLE LOW (1-4)
    "fat_6_muscle_1": "skinny-fat body, thin but soft, no definition",
    "fat_5_muscle_2": "lean but untrained, thin with no muscle mass",
    "fat_4_muscle_3": "slim body, light muscle tone beginning, fit appearance",
    
    # FAT LOW (6-4) + MUSCLE MEDIUM (5-8)
    "fat_6_muscle_5": "lean athletic build, visible muscle definition emerging",
    "fat_5_muscle_6": "athletic physique, good muscle definition, lean",
    "fat_4_muscle_7": "fit muscular body, clear muscle separation, athletic",
    "fat_4_muscle_8": "very athletic, muscular and lean, visible abs beginning",
    
    # FAT VERY LOW (3-1) + MUSCLE HIGH (9-13)
    "fat_3_muscle_9": "bodybuilder physique, very defined muscles, six pack visible",
    "fat_2_muscle_10": "competition ready body, striated muscles, extreme definition",
    "fat_2_muscle_11": "elite physique, full muscular development, paper thin skin",
    "fat_1_muscle_12": "godlike physique, maximum muscle mass, shredded to the bone",
    "fat_1_muscle_13": "peak human form, superhero physique, impossible definition, vascular arms and shoulders"
}
```

---

## 4.5 Face State Tokens (face_lvl)

```python
FACE_TOKENS = {
    1: "bloated round face, severe double chin, no jawline visible, puffy cheeks, soft features, face fat obscuring bone structure",
    
    2: "very round face, prominent double chin, jawline barely visible, puffy appearance, soft facial features",
    
    3: "round face shape, double chin present, soft jawline emerging, chubby cheeks, beginning to show structure",
    
    4: "moderately round face, chin starting to define, soft jawline visible, cheeks still full, improving definition",
    
    5: "face fat reducing, single chin, jawline becoming visible, cheeks less puffy, bone structure emerging",
    
    6: "balanced face shape, defined chin, jawline clearly visible, cheeks normal, good facial structure",
    
    7: "lean face, strong chin, defined jawline, normal cheeks, angular features emerging",
    
    8: "angular face, sharp chin, strong jawline, hollow cheeks beginning, masculine features",
    
    9: "very angular face, very sharp chin, razor sharp jawline, hollow cheeks, high cheekbones visible",
    
    10: "chiseled face, perfectly defined chin, extreme jawline definition, hollow cheeks, model-tier bone structure",
    
    11: "sculptor's dream face, diamond-cut jawline, extreme cheekbone definition, hunter eyes, elite genetics visible",
    
    12: "god-tier facial aesthetics, blade-like jawline, maximum definition, intimidating sharp features, peak masculinity",
    
    13: "divine facial structure, otherworldly sharp features, maximum hollow cheeks, jawline that could cut glass, semi-god tier aesthetics"
}
```

---

## 4.6 Posture/Aura Tokens (aura_lvl)

```python
AURA_TOKENS = {
    1: "defeated posture, slumped shoulders, downcast eyes, no confidence, broken body language, invisible presence",
    
    2: "poor posture, shoulders forward, avoiding eye contact, low confidence, submissive body language",
    
    3: "mediocre posture, slight slouch, uncertain gaze, developing confidence, neutral presence",
    
    4: "improving posture, shoulders back attempt, occasional eye contact, growing confidence",
    
    5: "decent posture, neutral stance, comfortable eye contact, present but not commanding",
    
    6: "good posture, shoulders squared, steady gaze, noticeable confidence, taking up space",
    
    7: "strong posture, chest out, direct eye contact, confident presence, commands some attention",
    
    8: "excellent posture, powerful stance, intense gaze, strong confidence, room notices when enters",
    
    9: "dominant posture, perfectly erect spine, piercing gaze, radiating confidence, magnetic presence",
    
    10: "imperial posture, maximum presence, hypnotic intense stare, aura of power, impossible to ignore",
    
    11: "transcendent posture, ethereal glow beginning, eyes that command, subtle light aura around figure",
    
    12: "divine posture, visible golden aura particles, glowing presence, godlike bearing, light emanating",
    
    13: "semi-god presence, brilliant golden aura surrounding body, divine light particles orbiting, otherworldly glow, transcendent being"
}
```

---

## 4.7 Attire Tokens

### Por Nivel + wealth_lvl

```python
ATTIRE_TOKENS = {
    # Level 1-2: Indigente/Arrimado
    "level_1_wealth_1": "dirty torn rags, stained gray shirt, ripped old clothes, homeless attire",
    "level_2_wealth_2": "worn out clothes, faded t-shirt, old jeans with holes, poor condition clothing",
    
    # Level 3-4: Alucín/Chalán  
    "level_3_wealth_3": "clean basic clothes, plain white t-shirt, fitted jeans, simple but neat",
    "level_4_wealth_4": "casual streetwear, modern hoodie, clean sneakers, urban fashion",
    
    # Level 5-6: Godín/Acomodado
    "level_5_wealth_5": "smart casual attire, polo shirt, chino pants, clean leather shoes",
    "level_6_wealth_6": "business casual, button-down shirt, quality pants, premium accessories",
    
    # Level 7-8: Pudiente/Millonario
    "level_7_wealth_7": "designer casual, premium brands, elegant watch, luxury accessories",
    "level_8_wealth_8": "luxury attire, tailored clothing, expensive accessories, high-end fashion",
    
    # Level 9-10: Magnate/Semi-Dios
    "level_9_wealth_9": "bespoke suit, luxury watch, designer everything, billionaire aesthetic",
    "level_10_wealth_10": "custom couture, ultimate luxury, priceless accessories, divine attire",
    
    # Level 11-13: Prestige
    "level_11_wealth_11": "celestial robes, golden accents, divine fabric, otherworldly clothing",
    "level_12_wealth_12": "emperor's attire, golden divine armor elements, transcendent fashion",
    "level_13_wealth_13": "godlike raiment, pure light and gold, celestial warrior attire"
}
```

### Items Equipados (se agregan al prompt)

```python
# Los items comprados inyectan tokens adicionales
EQUIPPED_ITEM_TOKENS = {
    "ITEM_ACC_001": "wearing snapback cap",
    "ITEM_ACC_007": "wearing luxury branded watch",
    "ITEM_ACC_008": "wearing heavy gold chain necklace",
    "ITEM_ACC_011": "wearing gold Rolex presidential watch",
    "ITEM_ACC_012": "wearing golden divine crown",
    # etc...
}
```

---

## 4.8 Environment Tokens (env_lvl)

```python
ENV_TOKENS = {
    1: "dark dirty alley background, rainy night, urban decay, graffiti walls, trash on ground, flickering street light",
    
    2: "run-down neighborhood, cracked sidewalk, old buildings, budget housing area, modest surroundings",
    
    3: "small modest room background, basic furniture, simple bedroom, humble living space",
    
    4: "workshop or construction site background, blue collar workplace, industrial setting",
    
    5: "standard office background, corporate cubicle, professional workplace environment",
    
    6: "nice apartment interior, modern furniture, city view through window, comfortable living space",
    
    7: "luxury apartment, high-end interior design, expensive furniture, premium living space",
    
    8: "penthouse suite background, floor-to-ceiling windows, city skyline view, ultra luxury interior",
    
    9: "mansion interior, grand hall, expensive art, palatial home, extreme wealth evident",
    
    10: "private jet interior, or mega yacht deck, ultimate luxury transportation",
    
    11: "emperor's throne room, golden palace interior, divine architecture",
    
    12: "celestial space background, among the stars, divine realm",
    
    13: "godly dimension, pure light and clouds, heaven-like realm, divine throne"
}
```

---

## 4.9 Degradation Tokens (health_points)

```python
HEALTH_DEGRADATION_TOKENS = {
    10: "",  # Salud completa, sin degradación
    9: "",   # Casi completa
    8: "",   # Buena salud
    7: "slightly tired appearance, minor fatigue visible",
    6: "visible tiredness, slight bags under eyes, minor stress signs",
    5: "fatigued appearance, bags under eyes, stress visible in face",
    4: "exhausted look, dark circles, pale complexion, visible strain",
    3: "very tired, hollow eyes, sickly pale, clearly unwell",
    2: "extremely fatigued, sunken eyes, grayish skin tone, near collapse",
    1: "death's door appearance, ghostly pale, hollow cheeks from illness, barely alive"
}
```

---

## 4.10 Prompt Assembly Function

```python
def assemble_avatar_prompt(user_state: dict) -> str:
    """
    Ensambla el prompt completo para generación de avatar
    """
    
    # 1. Style Header (siempre primero)
    prompt_parts = [STYLE_HEADER]
    
    # 2. Identity Anchor (arquetipo seleccionado)
    archetype_id = user_state["archetype_id"]
    prompt_parts.append(IDENTITY_ANCHORS[archetype_id])
    
    # 3. Body State
    fat_lvl = user_state["fat_lvl"]
    muscle_lvl = user_state["muscle_lvl"]
    body_key = f"fat_{fat_lvl}_muscle_{muscle_lvl}"
    prompt_parts.append(BODY_TOKENS.get(body_key, BODY_TOKENS["fat_10_muscle_1"]))
    
    # 4. Face State
    face_lvl = user_state["face_lvl"]
    prompt_parts.append(FACE_TOKENS[face_lvl])
    
    # 5. Posture/Aura
    aura_lvl = user_state["aura_lvl"]
    prompt_parts.append(AURA_TOKENS[aura_lvl])
    
    # 6. Attire (base por nivel)
    level = user_state["current_level"]
    wealth_lvl = user_state["wealth_lvl"]
    attire_key = f"level_{level}_wealth_{wealth_lvl}"
    prompt_parts.append(ATTIRE_TOKENS.get(attire_key, ATTIRE_TOKENS["level_1_wealth_1"]))
    
    # 7. Equipped Items (tokens adicionales)
    for item_id in user_state.get("equipped_items", []):
        if item_id in EQUIPPED_ITEM_TOKENS:
            prompt_parts.append(EQUIPPED_ITEM_TOKENS[item_id])
    
    # 8. Environment
    env_lvl = user_state["env_lvl"]
    prompt_parts.append(ENV_TOKENS[env_lvl])
    
    # 9. Health Degradation
    health = user_state["health_points"]
    if health < 10:
        prompt_parts.append(HEALTH_DEGRADATION_TOKENS[health])
    
    # Combinar todo
    full_prompt = ", ".join(prompt_parts)
    
    return full_prompt
```

---

# 5. CONTENIDO DE HERRAMIENTAS

## 5.1 Biblioteca de Poder (Lectura)

### Libros Incluidos

| ID | Título | Autor | Categoría | Páginas | Nivel Recomendado |
|----|--------|-------|-----------|---------|-------------------|
| BOOK_001 | Atomic Habits | James Clear | Hábitos | 320 | 1-3 |
| BOOK_002 | Deep Work | Cal Newport | Productividad | 296 | 3-5 |
| BOOK_003 | The 48 Laws of Power | Robert Greene | Estrategia | 452 | 5-7 |
| BOOK_004 | Can't Hurt Me | David Goggins | Mentalidad | 364 | 4-6 |
| BOOK_005 | Meditations | Marcus Aurelius | Filosofía | 256 | 6-8 |
| BOOK_006 | The Way of the Superior Man | David Deida | Masculinidad | 224 | 5-7 |
| BOOK_007 | 12 Rules for Life | Jordan Peterson | Filosofía | 448 | 4-6 |
| BOOK_008 | The Rational Male | Rollo Tomassi | Relaciones | 336 | 6-8 |
| BOOK_009 | Extreme Ownership | Jocko Willink | Liderazgo | 320 | 7-9 |
| BOOK_010 | The Art of War | Sun Tzu | Estrategia | 128 | 8-10 |
| BOOK_011 | Think and Grow Rich | Napoleon Hill | Riqueza | 320 | 3-5 |
| BOOK_012 | The Power of Now | Eckhart Tolle | Espiritualidad | 236 | 7-9 |
| BOOK_013 | Discipline Equals Freedom | Jocko Willink | Disciplina | 192 | 5-7 |
| BOOK_014 | Mastery | Robert Greene | Maestría | 352 | 8-10 |
| BOOK_015 | The 4-Hour Body | Tim Ferriss | Físico | 592 | 4-6 |

### Categorías de Libros

```yaml
categories:
  - id: "habitos"
    name: "Hábitos y Disciplina"
    icon: "🎯"
    description: "Construye sistemas inquebrantables"
    
  - id: "productividad"
    name: "Productividad de Élite"
    icon: "⚡"
    description: "Maximiza tu output diario"
    
  - id: "estrategia"
    name: "Estrategia y Poder"
    icon: "♟️"
    description: "Domina el juego de la vida"
    
  - id: "mentalidad"
    name: "Mentalidad de Guerrero"
    icon: "🧠"
    description: "Forja una mente invencible"
    
  - id: "filosofia"
    name: "Filosofía Estoica"
    icon: "📿"
    description: "Sabiduría atemporal"
    
  - id: "masculinidad"
    name: "Masculinidad Consciente"
    icon: "👑"
    description: "El camino del hombre superior"
    
  - id: "riqueza"
    name: "Mentalidad de Riqueza"
    icon: "💎"
    description: "Piensa como magnate"
    
  - id: "fisico"
    name: "Optimización Física"
    icon: "💪"
    description: "Hackea tu biología"
```

---

## 5.2 Templo del Hierro (Gym)

### Catálogo de Ejercicios

**EMPUJE:**
| ID | Ejercicio | Grupo Muscular | Dificultad | Video/GIF |
|----|-----------|----------------|------------|-----------|
| EX_PU_001 | Press de Banca | Pectoral | Intermedio | bench_press.gif |
| EX_PU_002 | Press Inclinado | Pectoral Superior | Intermedio | incline_press.gif |
| EX_PU_003 | Press Militar | Hombros | Intermedio | military_press.gif |
| EX_PU_004 | Press Arnold | Hombros | Avanzado | arnold_press.gif |
| EX_PU_005 | Flexiones | Pectoral | Principiante | pushups.gif |
| EX_PU_006 | Fondos | Tríceps | Intermedio | dips.gif |
| EX_PU_007 | Extensión Tríceps | Tríceps | Principiante | tricep_ext.gif |

**TRACCIÓN:**
| ID | Ejercicio | Grupo Muscular | Dificultad | Video/GIF |
|----|-----------|----------------|------------|-----------|
| EX_TR_001 | Dominadas | Espalda | Intermedio | pullups.gif |
| EX_TR_002 | Remo con Barra | Espalda | Intermedio | barbell_row.gif |
| EX_TR_003 | Remo en Polea | Espalda | Principiante | cable_row.gif |
| EX_TR_004 | Curl de Bíceps | Bíceps | Principiante | bicep_curl.gif |
| EX_TR_005 | Curl Martillo | Bíceps | Principiante | hammer_curl.gif |
| EX_TR_006 | Face Pulls | Deltoides Post | Intermedio | face_pulls.gif |

**PIERNAS:**
| ID | Ejercicio | Grupo Muscular | Dificultad | Video/GIF |
|----|-----------|----------------|------------|-----------|
| EX_PI_001 | Sentadilla | Cuádriceps | Intermedio | squat.gif |
| EX_PI_002 | Peso Muerto | Isquiotibiales | Avanzado | deadlift.gif |
| EX_PI_003 | Prensa | Cuádriceps | Principiante | leg_press.gif |
| EX_PI_004 | Zancadas | Glúteos | Intermedio | lunges.gif |
| EX_PI_005 | Extensión de Pierna | Cuádriceps | Principiante | leg_ext.gif |
| EX_PI_006 | Curl Femoral | Isquiotibiales | Principiante | leg_curl.gif |
| EX_PI_007 | Elevación de Talones | Pantorrillas | Principiante | calf_raise.gif |

**CORE:**
| ID | Ejercicio | Grupo Muscular | Dificultad | Video/GIF |
|----|-----------|----------------|------------|-----------|
| EX_CO_001 | Plancha | Core | Principiante | plank.gif |
| EX_CO_002 | Crunch Abdominal | Abdominales | Principiante | crunch.gif |
| EX_CO_003 | Russian Twist | Oblicuos | Intermedio | russian_twist.gif |
| EX_CO_004 | Elevación de Piernas | Abdomen Bajo | Intermedio | leg_raise.gif |
| EX_CO_005 | Ab Wheel | Core Completo | Avanzado | ab_wheel.gif |

### Rutinas Pre-Cargadas

**Rutina A: Push (Empuje)**
```yaml
name: "Push Day - Empuje"
duration: 45-60 min
exercises:
  - exercise_id: EX_PU_001  # Press Banca
    sets: 4
    reps: "8-10"
    rest: 90s
  - exercise_id: EX_PU_003  # Press Militar
    sets: 3
    reps: "10-12"
    rest: 90s
  - exercise_id: EX_PU_002  # Press Inclinado
    sets: 3
    reps: "10-12"
    rest: 60s
  - exercise_id: EX_PU_006  # Fondos
    sets: 3
    reps: "8-12"
    rest: 60s
  - exercise_id: EX_PU_007  # Extensión Tríceps
    sets: 3
    reps: "12-15"
    rest: 45s
```

**Rutina B: Pull (Tracción)**
```yaml
name: "Pull Day - Tracción"
duration: 45-60 min
exercises:
  - exercise_id: EX_TR_001  # Dominadas
    sets: 4
    reps: "6-10"
    rest: 90s
  - exercise_id: EX_TR_002  # Remo Barra
    sets: 4
    reps: "8-10"
    rest: 90s
  - exercise_id: EX_TR_003  # Remo Polea
    sets: 3
    reps: "10-12"
    rest: 60s
  - exercise_id: EX_TR_006  # Face Pulls
    sets: 3
    reps: "15-20"
    rest: 45s
  - exercise_id: EX_TR_004  # Curl Bíceps
    sets: 3
    reps: "10-12"
    rest: 45s
```

**Rutina C: Legs (Piernas)**
```yaml
name: "Leg Day - Piernas"
duration: 50-70 min
exercises:
  - exercise_id: EX_PI_001  # Sentadilla
    sets: 4
    reps: "8-10"
    rest: 120s
  - exercise_id: EX_PI_002  # Peso Muerto
    sets: 4
    reps: "6-8"
    rest: 120s
  - exercise_id: EX_PI_004  # Zancadas
    sets: 3
    reps: "10/pierna"
    rest: 90s
  - exercise_id: EX_PI_005  # Extensión
    sets: 3
    reps: "12-15"
    rest: 60s
  - exercise_id: EX_PI_006  # Curl Femoral
    sets: 3
    reps: "12-15"
    rest: 60s
  - exercise_id: EX_PI_007  # Pantorrillas
    sets: 4
    reps: "15-20"
    rest: 45s
```

---

## 5.3 Cámara de Meditación

### Biblioteca de Meditaciones

| ID | Nombre | Duración | Nivel | Descripción | Audio File |
|----|--------|----------|-------|-------------|------------|
| MED_001 | Despertar del Guerrero | 5 min | 1-3 | Meditación básica de respiración | awakening_5min.mp3 |
| MED_002 | Foco Matutino | 7 min | 2-4 | Preparación mental para el día | morning_focus_7min.mp3 |
| MED_003 | Respiración de Poder | 10 min | 3-5 | Respiración Wim Hof modificada | power_breath_10min.mp3 |
| MED_004 | Enfoque Láser | 10 min | 4-6 | Concentración pre-trabajo | laser_focus_10min.mp3 |
| MED_005 | Dominio del Estrés | 12 min | 5-7 | Manejo de ansiedad | stress_master_12min.mp3 |
| MED_006 | Visualización de Éxito | 15 min | 6-8 | Visualización guiada | success_visual_15min.mp3 |
| MED_007 | Consciencia Imperial | 15 min | 7-9 | Presencia y poder personal | imperial_15min.mp3 |
| MED_008 | Silencio del Magnate | 20 min | 8-10 | Meditación en silencio profundo | magnate_silence_20min.mp3 |
| MED_009 | Trascendencia | 20 min | 9-10 | Estado alterado de consciencia | transcendence_20min.mp3 |
| MED_010 | Conexión Divina | 30 min | 10 | Meditación de Semi-Dios | divine_30min.mp3 |

### Sonidos Binaurales

| ID | Tipo | Frecuencia | Propósito | Audio File |
|----|------|------------|-----------|------------|
| BIN_001 | Alpha | 10 Hz | Relajación, creatividad | alpha_10hz.mp3 |
| BIN_002 | Theta | 6 Hz | Meditación profunda | theta_6hz.mp3 |
| BIN_003 | Delta | 2 Hz | Sueño, regeneración | delta_2hz.mp3 |
| BIN_004 | Beta | 20 Hz | Concentración, alerta | beta_20hz.mp3 |
| BIN_005 | Gamma | 40 Hz | Peak performance | gamma_40hz.mp3 |

---

## 5.4 Bitácora de Guerra (Journal)

### Prompts por Nivel

**Niveles 1-3 (Supervivencia):**
```yaml
prompts:
  - "¿Qué estoy haciendo mal y cómo lo corrijo hoy?"
  - "¿Cuáles son mis 3 debilidades más grandes ahora mismo?"
  - "¿Qué excusas me doy a mí mismo? Escríbelas y refútalas."
  - "¿Por qué estoy aquí? ¿Qué me llevó a necesitar esta transformación?"
  - "¿Qué haría mi versión Semi-Dios diferente hoy?"
  - "Describe al hombre que serás en 100 días."
```

**Niveles 4-6 (Construcción):**
```yaml
prompts:
  - "¿Qué acciones de hoy me acercan a mis metas?"
  - "¿Qué victoria pequeña celebro hoy?"
  - "¿Cómo mejoré respecto a ayer?"
  - "¿Qué hábito se está volviendo automático?"
  - "¿Qué resistencia interna superé hoy?"
  - "¿Cómo estoy invirtiendo mi tiempo de mayor energía?"
```

**Niveles 7-9 (Optimización):**
```yaml
prompts:
  - "¿Cómo puedo optimizar mi día para máximo impacto?"
  - "¿Qué estoy haciendo que ya no sirve a mi misión?"
  - "¿Dónde estoy perdiendo energía innecesariamente?"
  - "¿Qué decisiones de alto apalancamiento tomé hoy?"
  - "¿Cómo estoy liderando a otros con mi ejemplo?"
  - "¿Qué patrones de pensamiento limitante persisten?"
```

**Nivel 10 (Trascendencia):**
```yaml
prompts:
  - "¿Qué legado estoy construyendo con mis acciones diarias?"
  - "¿Cómo estoy impactando positivamente a otros?"
  - "¿Qué sabiduría compartiría con mi yo del Día 1?"
  - "¿Qué nuevas fronteras estoy explorando?"
  - "¿Cómo mantengo la humildad en el éxito?"
  - "¿Qué siguiente nivel de existencia visualizo?"
```

---

## 5.5 Vitalidad Sexual (Kegel)

### Rutinas por Nivel

**Nivel Principiante (1-3):**
```yaml
routine:
  name: "Despertar Vital"
  duration: 3 min
  instructions:
    - step: "Preparación"
      duration: 30s
      instruction: "Siéntate cómodo, respira profundo"
    - step: "Serie 1"
      reps: 10
      contract: 3s
      relax: 3s
    - step: "Descanso"
      duration: 30s
    - step: "Serie 2"
      reps: 10
      contract: 3s
      relax: 3s
  total_reps: 20
```

**Nivel Intermedio (4-6):**
```yaml
routine:
  name: "Energía Creciente"
  duration: 5 min
  instructions:
    - step: "Preparación"
      duration: 30s
    - step: "Serie 1"
      reps: 15
      contract: 5s
      relax: 5s
    - step: "Descanso"
      duration: 30s
    - step: "Serie 2"
      reps: 15
      contract: 5s
      relax: 5s
    - step: "Serie Rápida"
      reps: 20
      contract: 1s
      relax: 1s
  total_reps: 50
```

**Nivel Avanzado (7-9):**
```yaml
routine:
  name: "Poder Primordial"
  duration: 7 min
  instructions:
    - step: "Preparación"
      duration: 30s
    - step: "Serie Larga"
      reps: 20
      contract: 7s
      relax: 5s
    - step: "Descanso"
      duration: 30s
    - step: "Serie Sostenida"
      reps: 10
      contract: 10s
      relax: 5s
    - step: "Serie Rápida"
      reps: 30
      contract: 1s
      relax: 1s
  total_reps: 60
```

**Nivel Experto (10+):**
```yaml
routine:
  name: "Dominio Absoluto"
  duration: 10 min
  instructions:
    - step: "Preparación"
      duration: 30s
    - step: "Serie Ultra"
      reps: 25
      contract: 10s
      relax: 5s
    - step: "Descanso"
      duration: 30s
    - step: "Serie Máxima"
      reps: 15
      contract: 15s
      relax: 5s
    - step: "Serie Rápida"
      reps: 40
      contract: 1s
      relax: 1s
  total_reps: 80
```

---

## 5.6 Escultor Facial

### Ejercicios de Yoga Facial

| ID | Ejercicio | Área | Duración | Repeticiones | Video |
|----|-----------|------|----------|--------------|-------|
| FAC_001 | Mewing | Mandíbula/Lengua | Constante | — | mewing_guide.mp4 |
| FAC_002 | Jaw Jutting | Mandíbula | 30s | 15 | jaw_jut.gif |
| FAC_003 | Neck Curls | Cuello | 60s | 20 | neck_curl.gif |
| FAC_004 | Cheek Lifts | Mejillas | 30s | 15 | cheek_lift.gif |
| FAC_005 | Eye Squeeze | Área ocular | 30s | 20 | eye_squeeze.gif |
| FAC_006 | Lip Stretch | Labios | 30s | 10 | lip_stretch.gif |
| FAC_007 | Chin Lock | Mentón | 30s | 10 | chin_lock.gif |
| FAC_008 | Forehead Smooth | Frente | 30s | 15 | forehead.gif |

### Rutinas Pre-Cargadas

**Rutina AM (Mañana):**
```yaml
name: "Escultura Matutina"
duration: 10 min
exercises:
  - FAC_001: 2 min (instrucciones mewing)
  - FAC_002: 1 min (15 reps jaw jut)
  - FAC_003: 1 min (20 reps neck curl)
  - FAC_004: 1 min (15 reps cheek lift)
  - FAC_005: 1 min (20 reps eye squeeze)
  - FAC_006: 1 min (10 reps lip stretch)
  - FAC_007: 1 min (10 reps chin lock)
  - FAC_008: 1 min (15 reps forehead)
  - Descanso: 1 min
```

**Rutina PM (Noche):**
```yaml
name: "Definición Nocturna"
duration: 8 min
exercises:
  - FAC_001: 2 min (refuerzo mewing)
  - FAC_002: 2 min (30 reps intenso)
  - FAC_003: 2 min (40 reps intenso)
  - FAC_007: 1 min (20 reps)
  - Relajación: 1 min
```

---

## 5.7 Crea tu Hipnosis

### Tipos de Sesiones

| ID | Tipo | Propósito | Duración | Ondas |
|----|------|-----------|----------|-------|
| HYP_001 | Confianza | Autoestima | 15 min | Alpha |
| HYP_002 | Foco | Concentración | 12 min | Beta |
| HYP_003 | Descanso | Relajación profunda | 20 min | Delta |
| HYP_004 | Visualización | Metas | 15 min | Theta |
| HYP_005 | Energía | Motivación | 10 min | Beta |
| HYP_006 | Disciplina | Hábitos | 15 min | Alpha |

### Decretos Base (Afirmaciones)

**Categoría: Confianza**
```yaml
affirmations:
  - "Soy un hombre de poder incuestionable"
  - "Mi presencia comanda respeto naturalmente"
  - "Irradio confianza en cada paso que doy"
  - "Soy digno de todo lo bueno que deseo"
  - "Mi valor no depende de la opinión de nadie"
```

**Categoría: Disciplina**
```yaml
affirmations:
  - "La disciplina es mi identidad, no mi esfuerzo"
  - "Hago lo que debo, cuando debo, sin excusas"
  - "Mi palabra es ley, incluso para mí mismo"
  - "El dolor temporal construye gloria permanente"
  - "Cada día me vuelvo más inquebrantable"
```

**Categoría: Riqueza**
```yaml
affirmations:
  - "El dinero fluye hacia mí con facilidad"
  - "Soy un imán para las oportunidades"
  - "Mi trabajo genera valor extraordinario"
  - "Merezco abundancia en todas sus formas"
  - "La riqueza es mi estado natural"
```

**Categoría: Físico**
```yaml
affirmations:
  - "Mi cuerpo se transforma con cada repetición"
  - "Soy una máquina de rendimiento óptimo"
  - "El dolor es el combustible de mi evolución"
  - "Mi disciplina física refleja mi fuerza mental"
  - "Cada día me veo mejor que ayer"
```

---

## 5.8 Movilidad Táctica

### Rutinas de Stretching

**Rutina Completa (15 min):**
```yaml
name: "Movilidad Guerrera"
stretches:
  - name: "Neck Rolls"
    duration: 60s
    instruction: "Círculos lentos con el cuello"
    
  - name: "Shoulder Circles"
    duration: 60s
    instruction: "Rotaciones de hombros amplias"
    
  - name: "Cat-Cow"
    duration: 90s
    instruction: "Flexión y extensión de columna"
    
  - name: "Hip Flexor Stretch"
    duration: 60s per side
    instruction: "Zancada profunda mantenida"
    
  - name: "Hamstring Stretch"
    duration: 60s per leg
    instruction: "Pierna extendida, alcanzar pie"
    
  - name: "Quad Stretch"
    duration: 60s per leg
    instruction: "De pie, talón al glúteo"
    
  - name: "Chest Opener"
    duration: 60s
    instruction: "Brazos hacia atrás, pecho abierto"
    
  - name: "Spinal Twist"
    duration: 60s per side
    instruction: "Torsión sentado"
    
  - name: "Child's Pose"
    duration: 90s
    instruction: "Postura del niño, relajación"
```

---

## 5.9 Focus Chamber

### Soundscapes Disponibles

| ID | Nombre | Categoría | Duración | Archivo |
|----|--------|-----------|----------|---------|
| SND_001 | Silencio Absoluto | Silence | — | — |
| SND_002 | Lluvia Suave | Nature | Loop | rain_soft.mp3 |
| SND_003 | Lluvia Intensa | Nature | Loop | rain_heavy.mp3 |
| SND_004 | Bosque | Nature | Loop | forest.mp3 |
| SND_005 | Olas del Mar | Nature | Loop | ocean_waves.mp3 |
| SND_006 | Café Ambiente | Urban | Loop | coffee_shop.mp3 |
| SND_007 | Biblioteca | Urban | Loop | library.mp3 |
| SND_008 | Lo-Fi Beats | Music | Loop | lofi_beats.mp3 |
| SND_009 | Ambient Electronic | Music | Loop | ambient_electronic.mp3 |
| SND_010 | White Noise | Noise | Loop | white_noise.mp3 |
| SND_011 | Brown Noise | Noise | Loop | brown_noise.mp3 |
| SND_012 | Tormenta | Nature | Loop | thunderstorm.mp3 |

---

# 6. ASSETS REQUERIDOS

## 6.1 Iconos

### Sistema de Navegación
```yaml
icons:
  - name: "icon_home"
    size: "24x24, 32x32, 48x48"
    format: "SVG + PNG"
    description: "Ícono de inicio/dashboard"
    
  - name: "icon_tasks"
    size: "24x24, 32x32, 48x48"
    format: "SVG + PNG"
    description: "Ícono de tareas/misiones"
    
  - name: "icon_tools"
    size: "24x24, 32x32, 48x48"
    format: "SVG + PNG"
    description: "Ícono de herramientas"
    
  - name: "icon_store"
    size: "24x24, 32x32, 48x48"
    format: "SVG + PNG"
    description: "Ícono de tienda"
    
  - name: "icon_profile"
    size: "24x24, 32x32, 48x48"
    format: "SVG + PNG"
    description: "Ícono de perfil/settings"
```

### Vectores
```yaml
vector_icons:
  - name: "icon_aura"
    description: "Llama/energía para AURA"
    
  - name: "icon_jawline"
    description: "Mandíbula/cara para JAWLINE"
    
  - name: "icon_wealth"
    description: "Moneda/diamante para WEALTH"
    
  - name: "icon_physique"
    description: "Músculo/pesa para PHYSIQUE"
    
  - name: "icon_env"
    description: "Casa/edificio para ENV"
```

### Sistema de Salud
```yaml
health_icons:
  - name: "heart_full"
    description: "Corazón lleno (rojo)"
    
  - name: "heart_empty"
    description: "Corazón vacío (outline)"
    
  - name: "heart_breaking"
    description: "Corazón rompiéndose (animado)"
```

### Economía
```yaml
economy_icons:
  - name: "icon_btc"
    description: "Bitcoin dorado"
    
  - name: "icon_xp"
    description: "Estrella/rayo para XP"
    
  - name: "icon_streak"
    description: "Llama para racha"
```

### Herramientas
```yaml
tool_icons:
  - name: "icon_meditation"
    description: "Loto/mente"
    
  - name: "icon_gym"
    description: "Pesa/mancuerna"
    
  - name: "icon_journal"
    description: "Libro/pluma"
    
  - name: "icon_reading"
    description: "Libro abierto"
    
  - name: "icon_kegel"
    description: "Símbolo energía"
    
  - name: "icon_facial"
    description: "Rostro/mandíbula"
    
  - name: "icon_focus"
    description: "Reloj/cerebro"
    
  - name: "icon_hypnosis"
    description: "Espiral/onda"
    
  - name: "icon_mobility"
    description: "Figura estirando"
```

---

## 6.2 Imágenes de UI

### Onboarding
```yaml
onboarding_images:
  - name: "onboarding_console"
    description: "Fondo de consola militar"
    size: "1920x1080"
    format: "PNG"
    
  - name: "archetype_slider_bg"
    description: "Fondo para selector de arquetipos"
    size: "1920x1080"
    format: "PNG"
    
  - name: "contract_bg"
    description: "Fondo épico para contrato"
    size: "1920x1080"
    format: "PNG"
```

### Arquetipos (Base Renders)
```yaml
archetype_images:
  # Cada arquetipo necesita render inicial (gordo)
  - name: "archetype_rastas_base"
    description: "Render inicial del Rastas"
    size: "1024x1024"
    format: "PNG"
    
  - name: "archetype_muscles_base"
    description: "Render inicial del Muscles"
    size: "1024x1024"
    format: "PNG"
    
  - name: "archetype_pecas_base"
    description: "Render inicial de Pecas"
    size: "1024x1024"
    format: "PNG"
    
  - name: "archetype_grenas_base"
    description: "Render inicial del Greñas"
    size: "1024x1024"
    format: "PNG"
    
  - name: "archetype_rubio_base"
    description: "Render inicial del Rubio"
    size: "1024x1024"
    format: "PNG"
    
  - name: "archetype_lic_base"
    description: "Render inicial del Lic"
    size: "1024x1024"
    format: "PNG"
```

### Backgrounds por Nivel
```yaml
level_backgrounds:
  - name: "bg_level_1_alley"
    description: "Callejón oscuro lluvioso"
    size: "1920x1080"
    
  - name: "bg_level_3_room"
    description: "Cuarto de servicio"
    size: "1920x1080"
    
  - name: "bg_level_5_office"
    description: "Oficina corporativa"
    size: "1920x1080"
    
  - name: "bg_level_7_luxury_apt"
    description: "Departamento de lujo"
    size: "1920x1080"
    
  - name: "bg_level_9_penthouse"
    description: "Penthouse con skyline"
    size: "1920x1080"
    
  - name: "bg_level_10_throne"
    description: "Salón del trono"
    size: "1920x1080"
```

---

## 6.3 Previews de Tienda

```yaml
store_previews:
  # Cada item de tienda necesita preview
  # Formato: 512x512 PNG con fondo transparente
  
  armadura:
    - "preview_arm_playera_basica.png"
    - "preview_arm_jeans.png"
    - "preview_arm_polo.png"
    - "preview_arm_blazer.png"
    - "preview_arm_traje.png"
    # ... todos los items de armadura
    
  accesorios:
    - "preview_acc_gorra.png"
    - "preview_acc_cadena.png"
    - "preview_acc_reloj_casual.png"
    - "preview_acc_lentes.png"
    - "preview_acc_rolex.png"
    # ... todos los accesorios
    
  vehiculos:
    - "preview_veh_bici.png"
    - "preview_veh_moto.png"
    - "preview_veh_chevy.png"
    - "preview_veh_sedan.png"
    - "preview_veh_deportivo.png"
    - "preview_veh_jet.png"
    # ... todos los vehículos
    
  propiedades:
    - "preview_pro_callejon.png"
    - "preview_pro_cuarto.png"
    - "preview_pro_depa.png"
    - "preview_pro_penthouse.png"
    - "preview_pro_mansion.png"
    - "preview_pro_palacio.png"
```

---

## 6.4 Assets de Herramientas

### Videos/GIFs de Ejercicios
```yaml
exercise_assets:
  gym:
    - "bench_press.gif"      # 320x240
    - "squat.gif"
    - "deadlift.gif"
    - "pullups.gif"
    # ... 20+ ejercicios
    
  facial:
    - "mewing_guide.mp4"     # Tutorial completo
    - "jaw_jut.gif"
    - "neck_curl.gif"
    - "cheek_lift.gif"
    # ... 8 ejercicios faciales
    
  stretching:
    - "cat_cow.gif"
    - "hip_flexor.gif"
    - "hamstring.gif"
    # ... 10+ estiramientos
```

### Audios
```yaml
audio_assets:
  meditation:
    - "awakening_5min.mp3"
    - "focus_10min.mp3"
    - "transcendence_20min.mp3"
    # ... 10 meditaciones
    
  binaural:
    - "alpha_10hz.mp3"
    - "theta_6hz.mp3"
    - "delta_2hz.mp3"
    # ... 5 tipos binaurales
    
  ambient:
    - "rain_soft.mp3"
    - "forest.mp3"
    - "coffee_shop.mp3"
    - "lofi_beats.mp3"
    # ... 12 soundscapes
    
  sfx:
    - "task_complete.mp3"
    - "btc_earned.mp3"
    - "level_up.mp3"
    - "heart_break.mp3"
    - "death_sound.mp3"
    - "resurrection.mp3"
    # ... efectos de sonido
```

---

## 6.5 Checklist de Assets

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         CHECKLIST DE ASSETS                                   ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  [ ] ÍCONOS                                                                  ║
║      [ ] Navegación (5 íconos × 3 tamaños = 15 archivos)                     ║
║      [ ] Vectores (5 íconos)                                                 ║
║      [ ] Salud (3 íconos + 1 animación)                                      ║
║      [ ] Economía (3 íconos)                                                 ║
║      [ ] Herramientas (9 íconos)                                             ║
║      [ ] Misc UI (20+ íconos)                                                ║
║                                                                              ║
║  [ ] IMÁGENES                                                                ║
║      [ ] Onboarding (3 fondos)                                               ║
║      [ ] Arquetipos base (6 renders × 1024px)                                ║
║      [ ] Backgrounds nivel (10 fondos × 1920px)                              ║
║      [ ] Store previews (~100 items × 512px)                                 ║
║      [ ] UI elements (botones, cards, badges)                                ║
║                                                                              ║
║  [ ] VIDEOS/GIFS                                                             ║
║      [ ] Ejercicios gym (20+ GIFs)                                           ║
║      [ ] Ejercicios faciales (8 GIFs + 1 video)                              ║
║      [ ] Stretching (10+ GIFs)                                               ║
║      [ ] Kegel animations (4 animaciones)                                    ║
║                                                                              ║
║  [ ] AUDIOS                                                                  ║
║      [ ] Meditaciones (10 tracks × 5-30 min)                                 ║
║      [ ] Binaurales (5 tracks)                                               ║
║      [ ] Ambient/Music (12 loops)                                            ║
║      [ ] SFX (20+ efectos)                                                   ║
║      [ ] Hipnosis base (6 tracks)                                            ║
║                                                                              ║
║  [ ] FONTS                                                                   ║
║      [ ] Primary: Inter (Regular, Medium, Bold)                              ║
║      [ ] Display: Space Grotesk (Bold)                                       ║
║      [ ] Mono: JetBrains Mono                                                ║
║                                                                              ║
║  TOTAL ESTIMADO: ~250 archivos de assets                                     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

# APÉNDICE: REFERENCIAS

## Documentos Relacionados

| Documento | Propósito | Referencia |
|-----------|-----------|------------|
| 01_PRD.md | Requisitos del producto | User Stories, Funcionalidades |
| 05_GDD.md | Mecánicas de juego | Sistemas, Balance |
| 07_UI_UX_Spec.md | Diseño de interfaces | Componentes, Flujos |
| INTERROGATORIO_V1.md | Especificaciones originales | Visión completa |

## Versionado

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | Enero 2026 | Documento inicial completo |

---

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                         FIN DEL DOCUMENTO                                    ║
║                                                                              ║
║                    Content Specification v1.0                                ║
║                    METAMEN100 - El Espejo Bio-Digital                        ║
║                                                                              ║
║                    Clasificación: TOP-100 WORLDWIDE READY                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
