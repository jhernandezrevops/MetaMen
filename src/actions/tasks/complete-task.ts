/**
 * METAMEN100 - Complete Task Action
 * Acción para completar una tarea
 */

'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { createClient, requireAuth } from '@/lib/supabase/server';
import { error, validateInput, ErrorCodes } from '@/actions/utils';
import type { ActionResult } from '@/actions/utils';

const completeTaskSchema = z.object({
  taskDefinitionId: z.string().uuid(),
  avatarId: z.string().uuid(),
});

export async function completeTask(input: unknown): Promise<ActionResult<Record<string, unknown>>> {
  try {
    const validation = await validateInput(completeTaskSchema, input);
    if (!validation.success) {
      return error(validation.error, ErrorCodes.VALIDATION_ERROR);
    }

    const { taskDefinitionId, avatarId } = validation.data;
    const user = await requireAuth();
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
      return error(rpcError.message, ErrorCodes.INTERNAL_ERROR);
    }

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/tasks');

    return { success: true, data: data as Record<string, unknown> };
  } catch (err) {
    return err instanceof Error
      ? error(err.message)
      : error('Error interno', ErrorCodes.INTERNAL_ERROR);
  }
}
