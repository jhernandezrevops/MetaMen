/**
 * METAMEN100 - Shop Server Actions
 * Acciones de servidor para la tienda
 */

'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { createClient, requireAuth } from '@/lib/supabase/server';
import { success, error, validateInput, handleError, ErrorCodes } from './utils';
import type { ActionResult } from './utils';
import type { ShopItem, InventoryItem } from '@/types/database.types';

// ============================================
// SCHEMAS
// ============================================

const purchaseItemSchema = z.object({
  shopItemId: z.string().uuid(),
});

// ============================================
// ACTIONS
// ============================================

/**
 * Obtiene todos los items de la tienda disponibles
 */
export async function getShopItems(): Promise<ActionResult<ShopItem[]>> {
  try {
    const supabase = await createClient();

    const { data, error: dbError } = await supabase
      .from('shop_items')
      .select('*')
      .eq('is_active', true)
      .order('required_level')
      .order('price_btc');

    if (dbError) {
      console.error('[getShopItems]', dbError);
      return error('Error al cargar tienda', ErrorCodes.INTERNAL_ERROR);
    }

    return success((data ?? []) as unknown as ShopItem[]);
  } catch (err) {
    return handleError(err);
  }
}

/**
 * Obtiene el inventario del usuario
 */
export async function getInventory(): Promise<
  ActionResult<(InventoryItem & { shop_item: ShopItem })[]>
> {
  try {
    const user = await requireAuth();
    const supabase = await createClient();

    const { data, error: dbError } = await supabase
      .from('inventory_items')
      .select(
        `
        *,
        shop_item:shop_items(*)
      `
      )
      .eq('user_id', user.id);

    if (dbError) {
      console.error('[getInventory]', dbError);
      return error('Error al cargar inventario', ErrorCodes.INTERNAL_ERROR);
    }

    return success((data ?? []) as unknown as (InventoryItem & { shop_item: ShopItem })[]);
  } catch (err) {
    return handleError(err);
  }
}

/**
 * Compra un item de la tienda
 */
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
      console.error('[purchaseItem] RPC error:', rpcError);
      return error(rpcError.message, ErrorCodes.INTERNAL_ERROR);
    }

    revalidatePath('/dashboard/shop');
    revalidatePath('/dashboard/inventory');
    return success(data as Record<string, unknown>);
  } catch (err) {
    return handleError(err);
  }
}

/**
 * Equipa o desequipa un item
 */
export async function toggleEquipItem(
  inventoryItemId: string
): Promise<ActionResult<Record<string, unknown>>> {
  try {
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
      console.error('[toggleEquipItem] RPC error:', rpcError);
      return error(rpcError.message, ErrorCodes.INTERNAL_ERROR);
    }

    revalidatePath('/dashboard/inventory');
    return success(data as Record<string, unknown>);
  } catch (err) {
    return handleError(err);
  }
}
