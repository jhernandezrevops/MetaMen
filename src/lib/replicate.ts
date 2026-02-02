import Replicate from 'replicate';
import { getServerEnv } from '@/lib/env';

/**
 * METAMEN100 - Replicate Client
 * Cliente para interactuar con la API de Replicate para generación de imágenes
 *
 * @see docs/02_ADRs.md
 */

// Inicialización perezosa para evitar errores en build time si faltan env vars
let replicateInstance: Replicate | null = null;

export const getReplicateClient = () => {
  if (replicateInstance) return replicateInstance;

  const env = getServerEnv();

  if (!env.REPLICATE_API_TOKEN) {
    throw new Error('❌ REPLICATE_API_TOKEN no está configurado');
  }

  replicateInstance = new Replicate({
    auth: env.REPLICATE_API_TOKEN,
  });

  return replicateInstance;
};

/**
 * Genera un avatar usando el modelo configurado
 * @param prompt Prompt para la generación
 */
export const generateAvatarImage = async (prompt: string) => {
  const replicate = getReplicateClient();

  // Modelo: google/ideogen-image-v1 (Gemini 2.5 equiv) o similar configurado
  // Usamos el standard model por defecto si no se especifica otro
  const output = await replicate.run(
    'google/imagen-3', // Placeholder, actualizar con el modelo específico de ADRs
    {
      input: {
        prompt,
        aspect_ratio: '9:16',
        safety_filter_level: 'block_medium_and_above',
      },
    }
  );

  return output;
};
