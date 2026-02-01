---
description: Resolver bugs con método científico
---

# ============================================
# WORKFLOW 3: DEBUGGING
# ============================================
name: "Debugging Sistemático"
description: "Resolver bugs con método científico"
trigger: "Cuando se reporta un bug"

steps:
  1_reproduccion:
    action: "Intentar reproducir el bug"
    document:
      - "Pasos exactos de reproducción"
      - "Comportamiento esperado vs actual"
      - "Entorno donde ocurre"
  
  2_analisis:
    action: "Analizar causa raíz"
    tools:
      - "Logs de Sentry"
      - "Métricas de PostHog"
      - "Stack traces"
  
  3_solucion:
    action: "Implementar fix"
    include:
      - "Fix del bug"
      - "Test de regresión"
      - "Documentación del fix"