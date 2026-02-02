/**
 * METAMEN100 - Create Checkout Action
 * Acción para crear sesión de checkout de Stripe
 */

'use server';

import { z } from 'zod';
import { createClient, requireAuth } from '@/lib/supabase/server';
import { error, validateInput, ErrorCodes } from '@/actions/utils';
import type { ActionResult } from '@/actions/utils';
import { getServerEnv } from '@/lib/env';

const checkoutSchema = z.object({
  plan: z.enum(['monthly', 'yearly']),
  returnUrl: z.string().url(),
});

export async function createCheckout(input: unknown): Promise<ActionResult<{ url: string }>> {
  try {
    const validation = await validateInput(checkoutSchema, input);
    if (!validation.success) {
      return error(validation.error, ErrorCodes.VALIDATION_ERROR);
    }

    const { plan, returnUrl } = validation.data;
    const user = await requireAuth();
    const supabase = await createClient();
    // Env se usará cuando se implemente Stripe
    void getServerEnv();

    // Obtener datos del usuario
    const { data: userData } = await supabase
      .from('users')
      .select('id, email')
      .eq('supabase_user_id', user.id)
      .single();

    if (!userData) {
      return error('Usuario no encontrado', ErrorCodes.NOT_FOUND);
    }

    const userRecord = userData as unknown as { id: string; email: string };

    // Aquí se integraría con Stripe
    // Por ahora es un placeholder para la estructura
    console.info('[createCheckout] Creating checkout for:', {
      userId: userRecord.id,
      email: userRecord.email,
      plan,
      returnUrl,
    });

    // TODO: Integración real con Stripe
    // const stripe = new Stripe(env.STRIPE_SECRET_KEY);
    // const session = await stripe.checkout.sessions.create({...});

    return {
      success: true,
      data: { url: `${returnUrl}?checkout=success` },
    };
  } catch (err) {
    return err instanceof Error
      ? error(err.message)
      : error('Error interno', ErrorCodes.INTERNAL_ERROR);
  }
}
