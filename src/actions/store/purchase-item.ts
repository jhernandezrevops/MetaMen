/**
 * METAMEN100 - Purchase Item Action
 * Acción para comprar un item de la tienda
 */

'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { createClient, requireAuth } from '@/lib/supabase/server';
import { error, validateInput, ErrorCodes } from '@/actions/utils';
import type { ActionResult } from '@/actions/utils';

const purchaseItemSchema = z.object({
  shopItemId: z.string().uuid(),
});

export async function purchaseItem(input: unknown): Promise<ActionResult<Record<string, unknown>>> {
  try {
    const validation = await validateInput(purchaseItemSchema, input);
    if (!validation.success) {
      return error(validation.error, ErrorCodes.VALIDATION_ERROR);
    }

    const { shopItemId } = validation.data;
    const user = await requireAuth();
    const supabase = await createClient();

    const rpc = supabase.rpc as unknown as (
      fn: string,
      params: Record<string, unknown>
    ) => Promise<{ data: unknown; error: Error | null }>;

    const { data, error: rpcError } = await rpc('purchase_shop_item', {
      p_shop_item_id: shopItemId,
      p_user_id: user.id,
    });

    if (rpcError) {
      return error(rpcError.message, ErrorCodes.INTERNAL_ERROR);
    }

    revalidatePath('/dashboard/shop');
    revalidatePath('/dashboard/inventory');

    return { success: true, data: data as Record<string, unknown> };
  } catch (err) {
    return err instanceof Error
      ? error(err.message)
      : error('Error interno', ErrorCodes.INTERNAL_ERROR);
  }
}
