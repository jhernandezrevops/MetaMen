---
description: Mejorar código existente sin cambiar comportamiento
---

# ============================================
# WORKFLOW 2: REFACTORIZAR CÓDIGO
# ============================================
name: "Refactorización Quirúrgica"
description: "Mejorar código existente sin cambiar comportamiento"
trigger: "Cuando se detecta código de baja calidad"

steps:
  1_analisis:
    action: "Analizar código actual"
    identify:
      - "Code smells"
      - "Violaciones de SOLID"
      - "Oportunidades de mejora"
  
  2_propuesta:
    action: "Proponer refactorización"
    include:
      - "Antes y después del código"
      - "Justificación de cada cambio"
      - "Riesgos potenciales"
  
  3_implementacion:
    action: "Aplicar refactorización"
    verify:
      - "Tests existentes siguen pasando"
      - "Nuevos tests si es necesario"