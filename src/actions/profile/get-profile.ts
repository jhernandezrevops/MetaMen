/**
 * METAMEN100 - Get Profile Action
 * Acción para obtener el perfil completo del usuario
 */

'use server';

import { createClient, requireAuth } from '@/lib/supabase/server';
import { error, ErrorCodes } from '@/actions/utils';
import type { ActionResult } from '@/actions/utils';
import type { User, UserSettings, Avatar, AvatarVectors } from '@/types/database.types';

interface ProfileData {
  user: User;
  settings: UserSettings | null;
  avatar: Avatar | null;
  vectors: AvatarVectors | null;
}

export async function getProfile(): Promise<ActionResult<ProfileData>> {
  try {
    const user = await requireAuth();
    const supabase = await createClient();

    // Obtener datos del usuario
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('supabase_user_id', user.id)
      .single();

    if (userError || !userData) {
      return error('Usuario no encontrado', ErrorCodes.NOT_FOUND);
    }

    const userRecord = userData as unknown as { id: string };

    // Obtener settings
    const { data: settingsData } = await supabase
      .from('user_settings')
      .select('*')
      .eq('user_id', userRecord.id)
      .maybeSingle();

    // Obtener avatar activo
    const { data: avatarData } = await supabase
      .from('avatars')
      .select('*')
      .eq('user_id', userRecord.id)
      .eq('status', 'active')
      .maybeSingle();

    // Obtener vectores si hay avatar
    let vectorsData = null;
    if (avatarData) {
      const avatarRecord = avatarData as unknown as { id: string };
      const { data: vData } = await supabase
        .from('avatar_vectors')
        .select('*')
        .eq('avatar_id', avatarRecord.id)
        .maybeSingle();
      vectorsData = vData;
    }

    return {
      success: true,
      data: {
        user: userData as unknown as User,
        settings: settingsData as unknown as UserSettings | null,
        avatar: avatarData as unknown as Avatar | null,
        vectors: vectorsData as unknown as AvatarVectors | null,
      },
    };
  } catch (err) {
    return err instanceof Error
      ? error(err.message)
      : error('Error interno', ErrorCodes.INTERNAL_ERROR);
  }
}
