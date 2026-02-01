---
description: Flujo completo para implementar una subcaja
---

# ============================================
# WORKFLOW 1: IMPLEMENTAR SUBCAJA
# ============================================
name: "Implementar Subcaja de METAMEN100"
description: "Flujo completo para implementar una subcaja"
trigger: "Cuando el usuario solicita implementar una subcaja"

steps:
  1_analisis:
    action: "Leer documentación de la subcaja"
    input: 
      - "/docs/caja_X.X.X.md"
      - "/docs/01_PRD.md" (sección relevante)
      - "/docs/03_TECH_SPEC.md" (sección relevante)
    output: "Resumen de requisitos y tareas atómicas"
  
  2_planificacion:
    action: "Crear plan de implementación"
    output:
      - "Lista de archivos a crear/modificar"
      - "Orden de implementación"
      - "Dependencias entre archivos"
  
  3_codigo:
    action: "Generar código siguiendo reglas del sistema"
    constraints:
      - "TypeScript estricto"
      - "Tests incluidos"
      - "JSDoc completo"
  
  4_validacion:
    action: "Verificar calidad del código"
    checks:
      - "pnpm type-check pasa"
      - "pnpm lint pasa"
      - "Cobertura de tests > 80%"
