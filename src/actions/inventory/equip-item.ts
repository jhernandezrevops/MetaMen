/**
 * METAMEN100 - Equip Item Action
 * Acción para equipar/desequipar un item
 */

'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { createClient, requireAuth } from '@/lib/supabase/server';
import { error, ErrorCodes } from '@/actions/utils';
import type { ActionResult } from '@/actions/utils';

const equipItemSchema = z.object({
  inventoryItemId: z.string().uuid(),
});

export async function equipItem(input: unknown): Promise<ActionResult<Record<string, unknown>>> {
  try {
    const validation = equipItemSchema.safeParse(input);
    if (!validation.success) {
      return error('Invalid input', ErrorCodes.VALIDATION_ERROR);
    }

    const { inventoryItemId } = validation.data;
    const user = await requireAuth();
    const supabase = await createClient();

    const rpc = supabase.rpc as unknown as (
      fn: string,
      params: Record<string, unknown>
    ) => Promise<{ data: unknown; error: Error | null }>;

    const { data, error: rpcError } = await rpc('toggle_equip_item', {
      p_inventory_item_id: inventoryItemId,
      p_user_id: user.id,
    });

    if (rpcError) {
      return error(rpcError.message, ErrorCodes.INTERNAL_ERROR);
    }

    revalidatePath('/dashboard/inventory');

    return { success: true, data: data as Record<string, unknown> };
  } catch (err) {
    return err instanceof Error
      ? error(err.message)
      : error('Error interno', ErrorCodes.INTERNAL_ERROR);
  }
}
