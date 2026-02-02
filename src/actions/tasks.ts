/**
 * METAMEN100 - Tasks Server Actions
 * Acciones de servidor para gestión de tareas
 */

'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { createClient, requireAuth } from '@/lib/supabase/server';
import { success, error, validateInput, handleError, ErrorCodes } from './utils';
import type { ActionResult } from './utils';
import type { TaskDefinition } from '@/types/database.types';

// ============================================
// SCHEMAS
// ============================================

const completeTaskSchema = z.object({
  taskDefinitionId: z.string().uuid(),
  avatarId: z.string().uuid(),
});

// ============================================
// ACTIONS
// ============================================

/**
 * Obtiene todas las definiciones de tareas activas
 */
export async function getTaskDefinitions(): Promise<ActionResult<TaskDefinition[]>> {
  try {
    const supabase = await createClient();

    const { data, error: dbError } = await supabase
      .from('task_definitions')
      .select('*')
      .eq('is_active', true)
      .order('name');

    if (dbError) {
      console.error('[getTaskDefinitions]', dbError);
      return error('Error al cargar tareas', ErrorCodes.INTERNAL_ERROR);
    }

    return success((data ?? []) as unknown as TaskDefinition[]);
  } catch (err) {
    console.error('[getTaskDefinitions]', err);
    return handleError(err);
  }
}

/**
 * Obtiene las tareas completadas hoy por el usuario
 */
export async function getTodayTasks(): Promise<ActionResult<string[]>> {
  try {
    const user = await requireAuth();
    const supabase = await createClient();

    const { data, error: dbError } = await supabase
      .from('task_completions')
      .select('task_id')
      .eq('user_id', user.id)
      .gte('completed_at', new Date().toISOString().split('T')[0]);

    if (dbError) {
      console.error('[getTodayTasks]', dbError);
      return error('Error al cargar tareas', ErrorCodes.INTERNAL_ERROR);
    }

    const tasks = (data ?? []) as Array<{ task_id: string }>;
    return success(tasks.map((t) => t.task_id));
  } catch (err) {
    return handleError(err);
  }
}

/**
 * Completa una tarea
 */
export async function completeTask(input: unknown): Promise<ActionResult<Record<string, unknown>>> {
  try {
    // Validar input
    const validation = await validateInput(completeTaskSchema, input);
    if (!validation.success) {
      return error(validation.error, ErrorCodes.VALIDATION_ERROR);
    }

    const { taskDefinitionId, avatarId } = validation.data;
    const user = await requireAuth();

    // Llamar a la función de Postgres
    const supabase = await createClient();
    const rpc = supabase.rpc as unknown as (
      fn: string,
      params: Record<string, unknown>
    ) => Promise<{ data: unknown; error: Error | null }>;

    const { data, error: rpcError } = await rpc('complete_task', {
      p_task_definition_id: taskDefinitionId,
      p_user_id: user.id,
      p_avatar_id: avatarId,
    });

    if (rpcError) {
      console.error('[completeTask] RPC error:', rpcError);
      return error(rpcError.message, ErrorCodes.INTERNAL_ERROR);
    }

    // Revalidar cache
    revalidatePath('/dashboard');
    revalidatePath('/dashboard/tasks');

    return success(data as Record<string, unknown>);
  } catch (err) {
    console.error('[completeTask]', err);
    return handleError(err);
  }
}

/**
 * Verifica si una tarea ya fue completada hoy
 */
export async function isTaskCompletedToday(
  taskDefinitionId: string
): Promise<ActionResult<boolean>> {
  try {
    const user = await requireAuth();
    const supabase = await createClient();

    const { data, error: dbError } = await supabase
      .from('task_completions')
      .select('id')
      .eq('user_id', user.id)
      .eq('task_id', taskDefinitionId)
      .gte('completed_at', new Date().toISOString().split('T')[0])
      .maybeSingle();

    if (dbError) {
      console.error('[isTaskCompletedToday]', dbError);
      return error('Error al verificar tarea', ErrorCodes.INTERNAL_ERROR);
    }

    return success(!!data);
  } catch (err) {
    return handleError(err);
  }
}
