---
description: Template para nuevas Server Actions
---

# ============================================
# WORKFLOW 4: CREAR SERVER ACTION
# ============================================
name: "Crear Server Action"
description: "Template para nuevas Server Actions"
trigger: "Cuando se necesita una nueva Server Action"

template: |
  'use server';
  
  import { z } from 'zod';
  import { createClient } from '@/lib/supabase/server';
  import { revalidatePath } from 'next/cache';
  
  // Schema de validación
  const schema = z.object({
    // Define inputs aquí
  });
  
  type Input = z.infer<typeof schema>;
  
  interface Output {
    success: true;
    data: {
      // Define output aquí
    };
  }
  
  /**
   * [Descripción de la acción]
   * @param input - [Descripción del input]
   * @returns [Descripción del output]
   * @throws [Errores posibles]
   */
  export async function actionName(input: Input): Promise<Output> {
    try {
      // 1. Validar input
      const validated = schema.parse(input);
      
      // 2. Obtener cliente autenticado
      const supabase = createClient();
      
      // 3. Verificar autorización
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('UNAUTHORIZED');
      
      // 4. Ejecutar operación
      // ... lógica aquí
      
      // 5. Revalidar caches
      revalidatePath('/dashboard');
      
      return { success: true, data: {} };
    } catch (error) {
      // Manejo de errores estandarizado
      throw error;
    }
  }