/**
 * METAMEN100 - Get Today Tasks Action
 * Acción para obtener tareas completadas hoy
 */

'use server';

import { createClient, requireAuth } from '@/lib/supabase/server';
import { error, ErrorCodes } from '@/actions/utils';
import type { ActionResult } from '@/actions/utils';

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
      return error('Error al cargar tareas', ErrorCodes.INTERNAL_ERROR);
    }

    const tasks = (data ?? []) as Array<{ task_id: string }>;
    return { success: true, data: tasks.map((t) => t.task_id) };
  } catch (err) {
    return err instanceof Error
      ? error(err.message)
      : error('Error interno', ErrorCodes.INTERNAL_ERROR);
  }
}
