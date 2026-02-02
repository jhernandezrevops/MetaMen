/**
 * METAMEN100 - Avatar Server Actions
 * Acciones de servidor para gestión de avatares
 */

'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { createClient, requireAuth } from '@/lib/supabase/server';
import { success, error, validateInput, handleError, ErrorCodes } from './utils';
import type { ActionResult } from './utils';
import type { Avatar, AvatarVectors } from '@/types/database.types';

// ============================================
// SCHEMAS
// ============================================

const createAvatarSchema = z.object({
  name: z.string().min(1).max(100),
  archetype: z.enum(['rastas', 'muscles', 'pecas', 'grenas', 'rubio', 'lic']),
});

// ============================================
// ACTIONS
// ============================================

/**
 * Obtiene el avatar del usuario actual
 */
export async function getCurrentAvatar(): Promise<
  ActionResult<{ avatar: Avatar; vectors: AvatarVectors }>
> {
  try {
    const user = await requireAuth();
    const supabase = await createClient();

    // Obtener avatar
    const { data: avatarData, error: avatarError } = await supabase
      .from('avatars')
      .select('*')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .single();

    if (avatarError) {
      if (avatarError.code === 'PGRST116') {
        return error('No tienes un avatar activo', ErrorCodes.NOT_FOUND);
      }
      console.error('[getCurrentAvatar]', avatarError);
      return error('Error al cargar avatar', ErrorCodes.INTERNAL_ERROR);
    }

    const avatar = avatarData as unknown as Avatar;

    // Obtener vectores
    const { data: vectorsData, error: vectorsError } = await supabase
      .from('avatar_vectors')
      .select('*')
      .eq('avatar_id', avatar.id)
      .single();

    if (vectorsError) {
      console.error('[getCurrentAvatar] vectors:', vectorsError);
      return error('Error al cargar vectores', ErrorCodes.INTERNAL_ERROR);
    }

    return success({
      avatar,
      vectors: vectorsData as unknown as AvatarVectors,
    });
  } catch (err) {
    return handleError(err);
  }
}

/**
 * Crea un nuevo avatar para el usuario
 */
export async function createAvatar(input: unknown): Promise<ActionResult<Avatar>> {
  try {
    const validation = await validateInput(createAvatarSchema, input);
    if (!validation.success) {
      return error(validation.error, ErrorCodes.VALIDATION_ERROR);
    }

    const { name, archetype } = validation.data;
    const user = await requireAuth();
    const supabase = await createClient();

    // Verificar que no tenga avatar activo
    const { data: existing } = await supabase
      .from('avatars')
      .select('id')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .maybeSingle();

    if (existing) {
      return error('Ya tienes un avatar activo', ErrorCodes.ALREADY_EXISTS);
    }

    // Crear avatar
    const { data: avatarData, error: createError } = await supabase
      .from('avatars')
      // @ts-expect-error - Supabase types complexity
      .insert({
        user_id: user.id,
        name,
        archetype,
        status: 'active',
      })
      .select()
      .single();

    if (createError) {
      console.error('[createAvatar]', createError);
      return error('Error al crear avatar', ErrorCodes.INTERNAL_ERROR);
    }

    revalidatePath('/dashboard');
    return success(avatarData as unknown as Avatar);
  } catch (err) {
    return handleError(err);
  }
}

/**
 * Procesa el Judgement Night (cierre del día)
 */
export async function processJudgementNight(
  avatarId: string
): Promise<ActionResult<Record<string, unknown>>> {
  try {
    const user = await requireAuth();
    const supabase = await createClient();

    const rpc = supabase.rpc as unknown as (
      fn: string,
      params: Record<string, unknown>
    ) => Promise<{ data: unknown; error: Error | null }>;

    const { data, error: rpcError } = await rpc('process_judgement_night', {
      p_avatar_id: avatarId,
      p_user_id: user.id,
    });

    if (rpcError) {
      console.error('[processJudgementNight] RPC error:', rpcError);
      return error(rpcError.message, ErrorCodes.INTERNAL_ERROR);
    }

    revalidatePath('/dashboard');
    return success(data as Record<string, unknown>);
  } catch (err) {
    return handleError(err);
  }
}

/**
 * Resucita un avatar muerto
 */
export async function resurrectAvatar(
  avatarId: string
): Promise<ActionResult<Record<string, unknown>>> {
  try {
    const user = await requireAuth();
    const supabase = await createClient();

    const rpc = supabase.rpc as unknown as (
      fn: string,
      params: Record<string, unknown>
    ) => Promise<{ data: unknown; error: Error | null }>;

    const { data, error: rpcError } = await rpc('resurrect_avatar', {
      p_avatar_id: avatarId,
      p_user_id: user.id,
    });

    if (rpcError) {
      console.error('[resurrectAvatar] RPC error:', rpcError);
      return error(rpcError.message, ErrorCodes.INTERNAL_ERROR);
    }

    revalidatePath('/dashboard');
    return success(data as Record<string, unknown>);
  } catch (err) {
    return handleError(err);
  }
}

/**
 * Obtiene estadísticas del avatar
 */
export async function getAvatarStats(
  avatarId: string
): Promise<ActionResult<Record<string, unknown>>> {
  try {
    await requireAuth();
    const supabase = await createClient();

    const rpc = supabase.rpc as unknown as (
      fn: string,
      params: Record<string, unknown>
    ) => Promise<{ data: unknown; error: Error | null }>;

    const { data, error: rpcError } = await rpc('get_avatar_stats', {
      p_avatar_id: avatarId,
    });

    if (rpcError) {
      console.error('[getAvatarStats] RPC error:', rpcError);
      return error(rpcError.message, ErrorCodes.INTERNAL_ERROR);
    }

    return success(data as Record<string, unknown>);
  } catch (err) {
    return handleError(err);
  }
}
