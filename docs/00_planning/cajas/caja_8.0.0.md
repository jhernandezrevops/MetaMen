📦 CAJA 08: IA GENERATIVA
El Corazón Visual de MetaMen100

Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 08: IA GENERATIVA                                         ║
║                                                                                      ║
║    "El Espejo Bio-Digital que transforma sudor en píxeles de élite"                 ║
║                                                                                      ║
║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
║    │                                                                            │   ║
║    │   🔧 08.1 Pipeline       🔧 08.2 Prompts       🔧 08.3 Arquetipos         │   ║
║    │   Image Generation       Dynamic System        Identity Anchors            │   ║
║    │                                                                            │   ║
║    │   🔧 08.4 Vectores       🔧 08.5 Items         🔧 08.6 Entornos           │   ║
║    │   Body/Face Tokens       Equipment Tokens      Environment Tokens          │   ║
║    │                                                                            │   ║
║    │   🔧 08.7 Degradación    🔧 08.8 Queue         🔧 08.9 Storage            │   ║
║    │   Health Effects         Resilience System     Image Management            │   ║
║    │                                                                            │   ║
║    │   🔧 08.10 Integration                                                     │   ║
║    │   Avatar State Sync                                                        │   ║
║    │                                                                            │   ║
║    └────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                      ║
║    Responsable Generación: Claude → Antigravity                                     ║
║    Entregables: Servicios en /lib/ai + Edge Functions                              ║
║    Tiempo Estimado: 8-12 horas de desarrollo                                        ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ÍNDICE DE DESGLOSE ATÓMICO - CAJA 08

SUBCAJA 08.1: Pipeline de Generación de Imágenes
SUBCAJA 08.2: Sistema de Prompts Dinámicos
SUBCAJA 08.3: Tokens de Identidad (Arquetipos)
SUBCAJA 08.4: Tokens de Vectores
SUBCAJA 08.5: Tokens de Items Equipados
SUBCAJA 08.6: Tokens de Entorno
SUBCAJA 08.7: Sistema de Degradación Visual
SUBCAJA 08.8: Cola y Resiliencia
SUBCAJA 08.9: Storage de Imágenes
SUBCAJA 08.10: Integración con Avatar State


SUBCAJA 08.1: Pipeline de Generación de Imágenes
Arquitectura del Sistema de IA
Archivos a Crear
CopyRutas:
├── /src/lib/ai/
│   ├── index.ts                    # Export principal
│   ├── config.ts                   # Configuración de proveedores
│   ├── pipeline.ts                 # Orquestador principal
│   ├── providers/
│   │   ├── index.ts               # Factory de proveedores
│   │   ├── replicate.ts           # Integración Replicate
│   │   ├── gemini.ts              # Integración Gemini 3 Pro Image
│   │   └── types.ts               # Tipos compartidos
│   └── utils/
│       ├── retry.ts               # Lógica de reintentos
│       └── sanitize.ts            # Sanitización de prompts
│
├── /supabase/functions/
│   └── generate-avatar/
│       └── index.ts               # Edge Function de generación

Tamaño Estimado: ~800 líneas totales
Tiempo de Generación: 90-120 minutos
Estructura de Código
Copy08.1 Pipeline de Generación
│
├── 1. CONFIGURACIÓN DE PROVEEDORES
│   │
│   ├── 1.1 Estructura de Config
│   │   ├── Provider primario: Replicate (SDXL)
│   │   ├── Provider fallback: Gemini 3 Pro Image
│   │   ├── Timeouts por provider
│   │   ├── Límites de rate
│   │   └── Costos estimados por request
│   │
│   ├── 1.2 Variables de Entorno Requeridas
│   │   ├── REPLICATE_API_TOKEN
│   │   ├── GEMINI_API_KEY
│   │   ├── AI_PROVIDER_PRIMARY (default: 'replicate')
│   │   └── AI_GENERATION_TIMEOUT_MS (default: 45000)
│   │
│   └── 1.3 Tipos de Configuración
│       └── AIProviderConfig interface
│
├── 2. ORQUESTADOR DE PIPELINE
│   │
│   ├── 2.1 Flujo Principal
│   │   │
│   │   │  ┌─────────────────────────────────────────────────────────────┐
│   │   │  │                   PIPELINE DE GENERACIÓN                    │
│   │   │  └─────────────────────────────────────────────────────────────┘
│   │   │                              │
│   │   │                              ▼
│   │   │  ┌─────────────────────────────────────────────────────────────┐
│   │   │  │  1. TRIGGER                                                 │
│   │   │  │     - Judgement Night (cron)                                │
│   │   │  │     - Subida de nivel (event)                               │
│   │   │  │     - Compra de item (event)                                │
│   │   │  └─────────────────────────────────────────────────────────────┘
│   │   │                              │
│   │   │                              ▼
│   │   │  ┌─────────────────────────────────────────────────────────────┐
│   │   │  │  2. RECOLECCIÓN DE DATOS                                    │
│   │   │  │     - avatar_state (vectores actuales)                      │
│   │   │  │     - profile (arquetipo base)                              │
│   │   │  │     - inventory (items equipados)                           │
│   │   │  │     - subscription (status para prioridad)                  │
│   │   │  └─────────────────────────────────────────────────────────────┘
│   │   │                              │
│   │   │                              ▼
│   │   │  ┌─────────────────────────────────────────────────────────────┐
│   │   │  │  3. CONSTRUCCIÓN DE PROMPT                                  │
│   │   │  │     - buildPrompt(data) → { prompt, negativePrompt }        │
│   │   │  │     - Inyectar: identity + body + face + attire + env       │
│   │   │  │     - Aplicar degradación si health < 7                     │
│   │   │  └─────────────────────────────────────────────────────────────┘
│   │   │                              │
│   │   │                              ▼
│   │   │  ┌─────────────────────────────────────────────────────────────┐
│   │   │  │  4. LLAMADA A PROVIDER                                      │
│   │   │  │     - Try: Provider primario                                │
│   │   │  │     - Catch: Provider fallback                              │
│   │   │  │     - Retry: 3 intentos con backoff exponencial             │
│   │   │  └─────────────────────────────────────────────────────────────┘
│   │   │                              │
│   │   │                              ▼
│   │   │  ┌─────────────────────────────────────────────────────────────┐
│   │   │  │  5. POST-PROCESAMIENTO                                      │
│   │   │  │     - Validar imagen generada                               │
│   │   │  │     - Verificar content safety (opcional)                   │
│   │   │  │     - Comprimir si necesario                                │
│   │   │  └─────────────────────────────────────────────────────────────┘
│   │   │                              │
│   │   │                              ▼
│   │   │  ┌─────────────────────────────────────────────────────────────┐
│   │   │  │  6. STORAGE                                                 │
│   │   │  │     - Subir a Supabase Storage / R2                         │
│   │   │  │     - Obtener URL pública                                   │
│   │   │  │     - Cleanup de imagen anterior (opcional)                 │
│   │   │  └─────────────────────────────────────────────────────────────┘
│   │   │                              │
│   │   │                              ▼
│   │   │  ┌─────────────────────────────────────────────────────────────┐
│   │   │  │  7. ACTUALIZACIÓN DE DB                                     │
│   │   │  │     - UPDATE avatar_states SET last_image_url = ?           │
│   │   │  │     - INSERT image_generation_log                           │
│   │   │  └─────────────────────────────────────────────────────────────┘
│   │   │                              │
│   │   │                              ▼
│   │   │  ┌─────────────────────────────────────────────────────────────┐
│   │   │  │  8. NOTIFICACIÓN                                            │
│   │   │  │     - Realtime update para UI                               │
│   │   │  │     - Push notification "Tu avatar ha evolucionado"         │
│   │   │  └─────────────────────────────────────────────────────────────┘
│   │
│   ├── 2.2 Inputs del Pipeline
│   │   ├── userId: string
│   │   ├── trigger: 'judgement' | 'level_up' | 'item_purchase' | 'manual'
│   │   ├── priority: 'high' | 'normal' | 'low'
│   │   └── options?: { forceRegenerate?: boolean }
│   │
│   └── 2.3 Outputs del Pipeline
│       ├── success: boolean
│       ├── imageUrl?: string
│       ├── generationTimeMs: number
│       ├── provider: 'replicate' | 'gemini'
│       ├── promptUsed: string (para debugging)
│       └── error?: { code: string, message: string }
│
├── 3. INTEGRACIÓN CON REPLICATE
│   │
│   ├── 3.1 Modelo a Usar
│   │   ├── Base: stability-ai/sdxl (o versión más reciente)
│   │   ├── Alternativa: LoRA personalizado (futuro)
│   │   └── Resolución: 1024x1024 (premium) / 512x512 (fallback)
│   │
│   ├── 3.2 Parámetros de Generación
│   │   ├── num_inference_steps: 30 (balance calidad/velocidad)
│   │   ├── guidance_scale: 7.5 (adherencia al prompt)
│   │   ├── scheduler: 'K_EULER' (mejor para pixel art)
│   │   └── seed: -1 (random) o fijo para reproducibilidad
│   │
│   ├── 3.3 Manejo de Respuesta
│   │   ├── Polling vs Webhook
│   │   ├── Timeout handling
│   │   └── Error codes específicos de Replicate
│   │
│   └── 3.4 Código de Integración
│       └── [Implementación completa]
│
├── 4. INTEGRACIÓN CON GEMINI 3 PRO IMAGE
│   │
│   ├── 4.1 Configuración de API
│   │   ├── Endpoint: generativelanguage.googleapis.com
│   │   ├── Model: gemini-3-pro-image (o equivalente)
│   │   └── Auth: API Key
│   │
│   ├── 4.2 Parámetros de Generación
│   │   ├── Formato de prompt específico para Gemini
│   │   ├── Safety settings
│   │   └── Image dimensions
│   │
│   └── 4.3 Código de Integración
│       └── [Implementación completa]
│
├── 5. FACTORY DE PROVIDERS
│   │
│   ├── 5.1 Interfaz Común
│   │   └── interface AIProvider {
│   │         name: string;
│   │         generate(prompt: PromptData): Promise<GenerationResult>;
│   │         checkHealth(): Promise<boolean>;
│   │       }
│   │
│   ├── 5.2 Selección de Provider
│   │   ├── Primario: Basado en config
│   │   ├── Fallback: Si primario falla
│   │   └── Health check antes de usar
│   │
│   └── 5.3 Código del Factory
│       └── [Implementación completa]
│
└── 6. EDGE FUNCTION: generate-avatar
    │
    ├── 6.1 Propósito
    │   └── Ejecutar generación fuera del request principal
    │       (evita timeout de Vercel de 10s)
    │
    ├── 6.2 Trigger
    │   ├── Invocación desde Inngest/Queue
    │   └── Webhook interno
    │
    ├── 6.3 Estructura
    │   ├── Validar input
    │   ├── Ejecutar pipeline
    │   ├── Retornar resultado
    │   └── Log de ejecución
    │
    └── 6.4 Código Completo
        └── [Implementación]
Tareas Atómicas para 08.1 Pipeline
yamlCopyTAREA-08.1.1:
  Nombre: "Crear estructura de carpetas /lib/ai"
  Acción: "Crear carpetas y archivos base con exports"
  Responsable: Antigravity
  Input: "Estructura definida arriba"
  Output: "Carpetas creadas con archivos vacíos"
  Comando para Antigravity: |
    Crea la siguiente estructura:
    /src/lib/ai/
    ├── index.ts (export * from cada módulo)
    ├── config.ts
    ├── pipeline.ts
    ├── providers/
    │   ├── index.ts
    │   ├── replicate.ts
    │   ├── gemini.ts
    │   └── types.ts
    └── utils/
        ├── retry.ts
        └── sanitize.ts

TAREA-08.1.2:
  Nombre: "Definir tipos de IA"
  Acción: "Crear /lib/ai/providers/types.ts con interfaces"
  Responsable: Antigravity
  Input: "Interfaces definidas en estructura"
  Output: "Archivo con tipos TypeScript"
  Prompt para Antigravity: |
    Crea /src/lib/ai/providers/types.ts con:
    
    ```typescript
    export interface PromptData {
      positivePrompt: string;
      negativePrompt: string;
      seed?: number;
      width?: number;
      height?: number;
    }
    
    export interface GenerationResult {
      success: boolean;
      imageUrl?: string;
      imageBase64?: string;
      generationTimeMs: number;
      provider: 'replicate' | 'gemini';
      error?: {
        code: string;
        message: string;
        retryable: boolean;
      };
    }
    
    export interface AIProvider {
      name: 'replicate' | 'gemini';
      generate(data: PromptData): Promise<GenerationResult>;
      checkHealth(): Promise<boolean>;
    }
    
    export interface PipelineInput {
      userId: string;
      trigger: 'judgement' | 'level_up' | 'item_purchase' | 'manual';
      priority: 'high' | 'normal' | 'low';
      options?: {
        forceRegenerate?: boolean;
        seed?: number;
      };
    }
    
    export interface PipelineOutput extends GenerationResult {
      promptUsed: string;
      userId: string;
      dayNumber: number;
    }
    ```

TAREA-08.1.3:
  Nombre: "Implementar configuración de proveedores"
  Acción: "Crear /lib/ai/config.ts"
  Responsable: Antigravity
  Output: "Archivo de configuración completo"
  Prompt para Antigravity: |
    Crea /src/lib/ai/config.ts con:
    
    ```typescript
    import { z } from 'zod';
    
    const envSchema = z.object({
      REPLICATE_API_TOKEN: z.string().min(1),
      GEMINI_API_KEY: z.string().optional(),
      AI_PROVIDER_PRIMARY: z.enum(['replicate', 'gemini']).default('replicate'),
      AI_GENERATION_TIMEOUT_MS: z.coerce.number().default(45000),
      AI_MAX_RETRIES: z.coerce.number().default(3),
    });
    
    export const aiConfig = {
      providers: {
        replicate: {
          apiToken: process.env.REPLICATE_API_TOKEN!,
          model: 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b',
          defaultParams: {
            width: 1024,
            height: 1024,
            num_inference_steps: 30,
            guidance_scale: 7.5,
            scheduler: 'K_EULER',
          },
        },
        gemini: {
          apiKey: process.env.GEMINI_API_KEY,
          model: 'gemini-pro-vision', // Ajustar según API disponible
        },
      },
      primary: process.env.AI_PROVIDER_PRIMARY || 'replicate',
      timeout: parseInt(process.env.AI_GENERATION_TIMEOUT_MS || '45000'),
      maxRetries: parseInt(process.env.AI_MAX_RETRIES || '3'),
      retryDelayMs: [1000, 2000, 4000], // Backoff exponencial
    } as const;
    
    export type AIConfig = typeof aiConfig;
    ```

TAREA-08.1.4:
  Nombre: "Implementar utilidad de reintentos"
  Acción: "Crear /lib/ai/utils/retry.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/utils/retry.ts con lógica de retry con backoff:
    
    ```typescript
    import { aiConfig } from '../config';
    
    export interface RetryOptions {
      maxRetries?: number;
      delays?: number[];
      shouldRetry?: (error: unknown, attempt: number) => boolean;
    }
    
    export async function withRetry<T>(
      fn: () => Promise<T>,
      options: RetryOptions = {}
    ): Promise<T> {
      const maxRetries = options.maxRetries ?? aiConfig.maxRetries;
      const delays = options.delays ?? aiConfig.retryDelayMs;
      const shouldRetry = options.shouldRetry ?? defaultShouldRetry;
      
      let lastError: unknown;
      
      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          return await fn();
        } catch (error) {
          lastError = error;
          
          if (attempt === maxRetries || !shouldRetry(error, attempt)) {
            throw error;
          }
          
          const delay = delays[Math.min(attempt, delays.length - 1)];
          await sleep(delay);
        }
      }
      
      throw lastError;
    }
    
    function defaultShouldRetry(error: unknown, attempt: number): boolean {
      // Retry en errores de red o rate limiting
      if (error instanceof Error) {
        const message = error.message.toLowerCase();
        return (
          message.includes('timeout') ||
          message.includes('network') ||
          message.includes('rate limit') ||
          message.includes('429') ||
          message.includes('503')
        );
      }
      return false;
    }
    
    function sleep(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    ```

TAREA-08.1.5:
  Nombre: "Implementar provider de Replicate"
  Acción: "Crear /lib/ai/providers/replicate.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/providers/replicate.ts:
    
    ```typescript
    import Replicate from 'replicate';
    import { aiConfig } from '../config';
    import { withRetry } from '../utils/retry';
    import type { AIProvider, PromptData, GenerationResult } from './types';
    
    export class ReplicateProvider implements AIProvider {
      name = 'replicate' as const;
      private client: Replicate;
      
      constructor() {
        this.client = new Replicate({
          auth: aiConfig.providers.replicate.apiToken,
        });
      }
      
      async generate(data: PromptData): Promise<GenerationResult> {
        const startTime = Date.now();
        
        try {
          const output = await withRetry(async () => {
            const result = await this.client.run(
              aiConfig.providers.replicate.model,
              {
                input: {
                  prompt: data.positivePrompt,
                  negative_prompt: data.negativePrompt,
                  width: data.width ?? aiConfig.providers.replicate.defaultParams.width,
                  height: data.height ?? aiConfig.providers.replicate.defaultParams.height,
                  num_inference_steps: aiConfig.providers.replicate.defaultParams.num_inference_steps,
                  guidance_scale: aiConfig.providers.replicate.defaultParams.guidance_scale,
                  scheduler: aiConfig.providers.replicate.defaultParams.scheduler,
                  seed: data.seed ?? Math.floor(Math.random() * 2147483647),
                },
              }
            );
            return result;
          });
          
          // output es un array de URLs
          const imageUrl = Array.isArray(output) ? output[0] : output;
          
          return {
            success: true,
            imageUrl: imageUrl as string,
            generationTimeMs: Date.now() - startTime,
            provider: 'replicate',
          };
        } catch (error) {
          return {
            success: false,
            generationTimeMs: Date.now() - startTime,
            provider: 'replicate',
            error: {
              code: 'REPLICATE_ERROR',
              message: error instanceof Error ? error.message : 'Unknown error',
              retryable: false,
            },
          };
        }
      }
      
      async checkHealth(): Promise<boolean> {
        try {
          // Simple health check - verificar que el token es válido
          await this.client.models.get('stability-ai', 'sdxl');
          return true;
        } catch {
          return false;
        }
      }
    }
    ```

TAREA-08.1.6:
  Nombre: "Implementar provider de Gemini"
  Acción: "Crear /lib/ai/providers/gemini.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/providers/gemini.ts:
    
    ```typescript
    import { GoogleGenerativeAI } from '@google/generative-ai';
    import { aiConfig } from '../config';
    import { withRetry } from '../utils/retry';
    import type { AIProvider, PromptData, GenerationResult } from './types';
    
    export class GeminiProvider implements AIProvider {
      name = 'gemini' as const;
      private client: GoogleGenerativeAI | null;
      
      constructor() {
        const apiKey = aiConfig.providers.gemini.apiKey;
        this.client = apiKey ? new GoogleGenerativeAI(apiKey) : null;
      }
      
      async generate(data: PromptData): Promise<GenerationResult> {
        if (!this.client) {
          return {
            success: false,
            generationTimeMs: 0,
            provider: 'gemini',
            error: {
              code: 'GEMINI_NOT_CONFIGURED',
              message: 'Gemini API key not configured',
              retryable: false,
            },
          };
        }
        
        const startTime = Date.now();
        
        try {
          // Nota: Ajustar según la API real de Gemini para generación de imágenes
          // Este es un placeholder basado en la API de texto
          const model = this.client.getGenerativeModel({ 
            model: 'gemini-pro-vision' 
          });
          
          const result = await withRetry(async () => {
            const response = await model.generateContent([
              `Generate a pixel art image: ${data.positivePrompt}`,
              `Avoid: ${data.negativePrompt}`,
            ]);
            return response;
          });
          
          // Procesar respuesta de Gemini
          // Nota: La estructura real depende de la API de imágenes de Gemini
          const imageUrl = result.response.text(); // Placeholder
          
          return {
            success: true,
            imageUrl,
            generationTimeMs: Date.now() - startTime,
            provider: 'gemini',
          };
        } catch (error) {
          return {
            success: false,
            generationTimeMs: Date.now() - startTime,
            provider: 'gemini',
            error: {
              code: 'GEMINI_ERROR',
              message: error instanceof Error ? error.message : 'Unknown error',
              retryable: true,
            },
          };
        }
      }
      
      async checkHealth(): Promise<boolean> {
        if (!this.client) return false;
        try {
          const model = this.client.getGenerativeModel({ model: 'gemini-pro' });
          await model.generateContent('test');
          return true;
        } catch {
          return false;
        }
      }
    }
    ```

TAREA-08.1.7:
  Nombre: "Implementar factory de providers"
  Acción: "Crear /lib/ai/providers/index.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/providers/index.ts:
    
    ```typescript
    import { aiConfig } from '../config';
    import { ReplicateProvider } from './replicate';
    import { GeminiProvider } from './gemini';
    import type { AIProvider } from './types';
    
    export * from './types';
    
    const providers: Record<string, AIProvider> = {
      replicate: new ReplicateProvider(),
      gemini: new GeminiProvider(),
    };
    
    export function getProvider(name?: 'replicate' | 'gemini'): AIProvider {
      const providerName = name ?? aiConfig.primary;
      const provider = providers[providerName];
      
      if (!provider) {
        throw new Error(`AI Provider "${providerName}" not found`);
      }
      
      return provider;
    }
    
    export function getFallbackProvider(): AIProvider | null {
      const primaryName = aiConfig.primary;
      const fallbackName = primaryName === 'replicate' ? 'gemini' : 'replicate';
      
      try {
        return getProvider(fallbackName as 'replicate' | 'gemini');
      } catch {
        return null;
      }
    }
    
    export async function getHealthyProvider(): Promise<AIProvider> {
      const primary = getProvider();
      
      if (await primary.checkHealth()) {
        return primary;
      }
      
      const fallback = getFallbackProvider();
      if (fallback && await fallback.checkHealth()) {
        console.warn(`Primary provider unhealthy, using fallback: ${fallback.name}`);
        return fallback;
      }
      
      // Retornar primario de todas formas, el error se manejará después
      return primary;
    }
    ```

TAREA-08.1.8:
  Nombre: "Implementar pipeline principal"
  Acción: "Crear /lib/ai/pipeline.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/pipeline.ts (orquestador principal):
    
    ```typescript
    import { createClient } from '@/lib/supabase/server';
    import { getHealthyProvider, getFallbackProvider } from './providers';
    import { buildPrompt } from './prompts'; // Se creará en 08.2
    import { uploadImageToStorage, getPublicUrl } from './storage'; // Se creará en 08.9
    import type { PipelineInput, PipelineOutput } from './providers/types';
    
    export async function generateAvatarImage(
      input: PipelineInput
    ): Promise<PipelineOutput> {
      const supabase = await createClient();
      const startTime = Date.now();
      
      // 1. Recolectar datos del usuario
      const userData = await collectUserData(supabase, input.userId);
      
      if (!userData) {
        return {
          success: false,
          generationTimeMs: Date.now() - startTime,
          provider: 'replicate',
          promptUsed: '',
          userId: input.userId,
          dayNumber: 0,
          error: {
            code: 'USER_NOT_FOUND',
            message: 'User data not found',
            retryable: false,
          },
        };
      }
      
      // 2. Construir prompt
      const promptData = buildPrompt(userData);
      
      // 3. Obtener provider saludable
      const provider = await getHealthyProvider();
      
      // 4. Generar imagen
      let result = await provider.generate(promptData);
      
      // 5. Si falla, intentar con fallback
      if (!result.success && result.error?.retryable) {
        const fallback = getFallbackProvider();
        if (fallback) {
          console.log(`Retrying with fallback provider: ${fallback.name}`);
          result = await fallback.generate(promptData);
        }
      }
      
      // 6. Si éxito, procesar y guardar imagen
      if (result.success && result.imageUrl) {
        try {
          // Subir a storage propio
          const storedUrl = await uploadImageToStorage(
            result.imageUrl,
            input.userId,
            userData.avatarState.current_day
          );
          
          // Actualizar avatar_state
          await supabase
            .from('avatar_states')
            .update({
              last_image_url: storedUrl,
              last_image_generated_at: new Date().toISOString(),
            })
            .eq('user_id', input.userId);
          
          // Log de generación
          await supabase.from('image_generation_logs').insert({
            user_id: input.userId,
            day_number: userData.avatarState.current_day,
            provider: result.provider,
            prompt_used: promptData.positivePrompt,
            generation_time_ms: result.generationTimeMs,
            image_url: storedUrl,
            trigger: input.trigger,
            success: true,
          });
          
          result.imageUrl = storedUrl;
        } catch (storageError) {
          console.error('Storage error:', storageError);
          // Continuar con URL original de provider
        }
      } else {
        // Log de fallo
        await supabase.from('image_generation_logs').insert({
          user_id: input.userId,
          day_number: userData.avatarState.current_day,
          provider: result.provider,
          prompt_used: promptData.positivePrompt,
          generation_time_ms: result.generationTimeMs,
          error_message: result.error?.message,
          trigger: input.trigger,
          success: false,
        });
      }
      
      return {
        ...result,
        promptUsed: promptData.positivePrompt,
        userId: input.userId,
        dayNumber: userData.avatarState.current_day,
      };
    }
    
    async function collectUserData(supabase: any, userId: string) {
      // Obtener avatar_state
      const { data: avatarState } = await supabase
        .from('avatar_states')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (!avatarState) return null;
      
      // Obtener profile (arquetipo)
      const { data: profile } = await supabase
        .from('profiles')
        .select('base_avatar_id')
        .eq('id', userId)
        .single();
      
      // Obtener items equipados
      const { data: equippedItems } = await supabase
        .from('inventory')
        .select('item_id, store_items(name, ia_tag)')
        .eq('user_id', userId)
        .eq('equipped', true);
      
      return {
        avatarState,
        archetypeId: profile?.base_avatar_id ?? 1,
        equippedItems: equippedItems ?? [],
      };
    }
    ```

TAREA-08.1.9:
  Nombre: "Crear Edge Function de generación"
  Acción: "Crear /supabase/functions/generate-avatar/index.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /supabase/functions/generate-avatar/index.ts:
    
    ```typescript
    import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
    import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
    
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    };
    
    serve(async (req) => {
      if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
      }
      
      try {
        const { userId, trigger, priority } = await req.json();
        
        // Validar input
        if (!userId || !trigger) {
          return new Response(
            JSON.stringify({ error: 'Missing required fields' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        // Crear cliente de Supabase
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        // Importar y ejecutar pipeline
        // Nota: En Deno, la importación será diferente
        // Este es un placeholder - la lógica real se adaptará
        
        const result = await generateAvatarImage({
          userId,
          trigger,
          priority: priority ?? 'normal',
        });
        
        return new Response(
          JSON.stringify(result),
          { 
            status: result.success ? 200 : 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      } catch (error) {
        console.error('Edge function error:', error);
        return new Response(
          JSON.stringify({ 
            error: error instanceof Error ? error.message : 'Unknown error' 
          }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    });
    ```

TAREA-08.1.10:
  Nombre: "Crear export principal de /lib/ai"
  Acción: "Crear /lib/ai/index.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/index.ts:
    
    ```typescript
    // Exports principales
    export { generateAvatarImage } from './pipeline';
    export { aiConfig } from './config';
    export { getProvider, getHealthyProvider } from './providers';
    export { buildPrompt } from './prompts';
    
    // Types
    export type {
      PromptData,
      GenerationResult,
      AIProvider,
      PipelineInput,
      PipelineOutput,
    } from './providers/types';
    ```

SUBCAJA 08.2: Sistema de Prompts Dinámicos
Construcción Inteligente de Prompts
Archivos a Crear
CopyRutas:
├── /src/lib/ai/prompts/
│   ├── index.ts                    # Export y buildPrompt
│   ├── templates.ts                # Templates base
│   ├── composer.ts                 # Compositor de prompts
│   └── types.ts                    # Tipos de prompts

Tamaño Estimado: ~600 líneas
Tiempo de Generación: 60-90 minutos
Estructura del Código
Copy08.2 Sistema de Prompts
│
├── 1. ARQUITECTURA DE PROMPTS
│   │
│   ├── 1.1 Estructura de un Prompt Completo
│   │   │
│   │   │  ┌─────────────────────────────────────────────────────────────┐
│   │   │  │  [STYLE_HEADER] - Inmutable                                 │
│   │   │  │  "8bit pixel art, game sprite, vibrant colors..."           │
│   │   │  ├─────────────────────────────────────────────────────────────┤
│   │   │  │  [IDENTITY_ANCHORS] - Basado en arquetipo (1-6)             │
│   │   │  │  "male, brown dreadlocks, warm brown skin..."               │
│   │   │  ├─────────────────────────────────────────────────────────────┤
│   │   │  │  [BODY_STATE] - Basado en fat_lvl + muscle_lvl              │
│   │   │  │  "athletic build, defined muscles, low body fat..."         │
│   │   │  ├─────────────────────────────────────────────────────────────┤
│   │   │  │  [FACE_STATE] - Basado en face_lvl                          │
│   │   │  │  "sharp jawline, defined cheekbones, symmetrical face..."   │
│   │   │  ├─────────────────────────────────────────────────────────────┤
│   │   │  │  [AURA_STATE] - Basado en aura_lvl                          │
│   │   │  │  "confident posture, intense gaze, commanding presence..."  │
│   │   │  ├─────────────────────────────────────────────────────────────┤
│   │   │  │  [ATTIRE_STATE] - Basado en wealth_lvl + items equipados    │
│   │   │  │  "wearing designer suit, gold watch, diamond ring..."       │
│   │   │  ├─────────────────────────────────────────────────────────────┤
│   │   │  │  [ENVIRONMENT] - Basado en env_lvl                          │
│   │   │  │  "luxury penthouse interior, city skyline view..."          │
│   │   │  ├─────────────────────────────────────────────────────────────┤
│   │   │  │  [DEGRADATION] - Si health < 7                              │
│   │   │  │  "tired eyes, slight dishevelment..."                       │
│   │   │  └─────────────────────────────────────────────────────────────┘
│   │   │
│   │   └── Orden de concatenación importa para coherencia
│   │
│   ├── 1.2 Negative Prompt (Inmutable)
│   │   └── "blurry, realistic, photograph, 3D render, anime, 
│   │        cartoon, deformed, bad anatomy, extra limbs, 
│   │        watermark, text, low quality, jpeg artifacts"
│   │
│   └── 1.3 Variaciones por Momento del Día (Opcional)
│       ├── Morning: Poses de inicio de día
│       ├── Afternoon: Poses de actividad
│       └── Evening: Poses de reflexión
│
├── 2. TEMPLATES BASE
│   │
│   ├── 2.1 STYLE_HEADER
│   │   └── "high quality 8bit pixel art style, retro game character,
│   │        vibrant colors, clean pixel edges, detailed sprite,
│   │        professional game art, sharp pixels, no anti-aliasing"
│   │
│   └── 2.2 NEGATIVE_PROMPT
│       └── [Lista completa de términos a evitar]
│
├── 3. COMPOSITOR DE PROMPTS
│   │
│   ├── 3.1 Función Principal: buildPrompt
│   │   ├── Input: UserData (avatarState, archetypeId, equippedItems)
│   │   ├── Output: { positivePrompt: string, negativePrompt: string }
│   │   └── Proceso:
│   │       1. Obtener identity anchors del arquetipo
│   │       2. Mapear vectores a tokens
│   │       3. Mapear items equipados a tokens
│   │       4. Mapear entorno a tokens
│   │       5. Aplicar degradación si necesario
│   │       6. Concatenar en orden correcto
│   │       7. Sanitizar resultado
│   │
│   ├── 3.2 Funciones Auxiliares
│   │   ├── getIdentityTokens(archetypeId: number): string
│   │   ├── getBodyTokens(fatLvl: number, muscleLvl: number): string
│   │   ├── getFaceTokens(faceLvl: number): string
│   │   ├── getAuraTokens(auraLvl: number): string
│   │   ├── getAttireTokens(wealthLvl: number, items: Item[]): string
│   │   ├── getEnvironmentTokens(envLvl: number): string
│   │   └── getDegradationTokens(healthPoints: number): string
│   │
│   └── 3.3 Sanitización
│       ├── Eliminar caracteres especiales
│       ├── Limitar longitud total (77 tokens max para SDXL)
│       └── Escapar comillas
│
└── 4. VALIDACIÓN
    │
    ├── 4.1 Validar que prompt no excede límite
    ├── 4.2 Validar que no contiene términos prohibidos
    └── 4.3 Log de prompt para debugging
Tareas Atómicas para 08.2 Prompts
yamlCopyTAREA-08.2.1:
  Nombre: "Crear estructura de carpetas /lib/ai/prompts"
  Acción: "Crear carpeta y archivos base"
  Responsable: Antigravity
  Comando: |
    Crear /src/lib/ai/prompts/ con:
    - index.ts
    - templates.ts
    - composer.ts
    - types.ts

TAREA-08.2.2:
  Nombre: "Definir tipos de prompts"
  Acción: "Crear /lib/ai/prompts/types.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/types.ts:
    
    ```typescript
    export interface UserDataForPrompt {
      avatarState: {
        aura_lvl: number;      // 1-13
        face_lvl: number;      // 1-13 (JAWLINE)
        wealth_lvl: number;    // 1-13
        muscle_lvl: number;    // 1-13
        fat_lvl: number;       // 13-1 (inverso)
        env_lvl: number;       // 1-13
        health_points: number; // 0-10 (expandible a 13)
        current_level: number; // 1-10
      };
      archetypeId: number;     // 1-6
      equippedItems: EquippedItem[];
    }
    
    export interface EquippedItem {
      item_id: number;
      store_items: {
        name: string;
        ia_tag: string;
      } | null;
    }
    
    export interface PromptComponents {
      style: string;
      identity: string;
      body: string;
      face: string;
      aura: string;
      attire: string;
      environment: string;
      degradation: string;
    }
    
    export interface BuiltPrompt {
      positivePrompt: string;
      negativePrompt: string;
      components: PromptComponents;
    }
    ```

TAREA-08.2.3:
  Nombre: "Crear templates base inmutables"
  Acción: "Crear /lib/ai/prompts/templates.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/templates.ts:
    
    ```typescript
    // === STYLE HEADER (Inmutable) ===
    export const STYLE_HEADER = `
      high quality 8bit pixel art style,
      retro game character sprite,
      vibrant saturated colors,
      clean crisp pixel edges,
      detailed character design,
      professional game art quality,
      sharp defined pixels,
      no anti-aliasing,
      consistent lighting,
      dynamic pose
    `.replace(/\s+/g, ' ').trim();
    
    // === NEGATIVE PROMPT (Inmutable) ===
    export const NEGATIVE_PROMPT = `
      blurry,
      realistic,
      photograph,
      photorealistic,
      3D render,
      3D,
      anime style,
      cartoon,
      deformed,
      bad anatomy,
      extra limbs,
      missing limbs,
      floating limbs,
      disconnected limbs,
      mutation,
      mutated,
      ugly,
      disgusting,
      watermark,
      signature,
      text,
      logo,
      low quality,
      low resolution,
      jpeg artifacts,
      compression artifacts,
      out of frame,
      cropped,
      worst quality,
      normal quality,
      bad proportions,
      gross proportions,
      malformed,
      disfigured,
      duplicate,
      error,
      username,
      artist name
    `.replace(/\s+/g, ' ').trim();
    
    // === MAX TOKEN LENGTH ===
    export const MAX_PROMPT_LENGTH = 300; // Caracteres aproximados para SDXL
    ```

TAREA-08.2.4:
  Nombre: "Implementar compositor de prompts"
  Acción: "Crear /lib/ai/prompts/composer.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/composer.ts (ver siguiente sección 08.3-08.7 para tokens):
    
    ```typescript
    import { STYLE_HEADER, NEGATIVE_PROMPT, MAX_PROMPT_LENGTH } from './templates';
    import { getIdentityTokens } from './tokens/identity';
    import { getBodyTokens } from './tokens/body';
    import { getFaceTokens } from './tokens/face';
    import { getAuraTokens } from './tokens/aura';
    import { getAttireTokens } from './tokens/attire';
    import { getEnvironmentTokens } from './tokens/environment';
    import { getDegradationTokens } from './tokens/degradation';
    import type { UserDataForPrompt, BuiltPrompt, PromptComponents } from './types';
    
    export function buildPrompt(userData: UserDataForPrompt): BuiltPrompt {
      const { avatarState, archetypeId, equippedItems } = userData;
      
      // Construir cada componente
      const components: PromptComponents = {
        style: STYLE_HEADER,
        identity: getIdentityTokens(archetypeId),
        body: getBodyTokens(avatarState.fat_lvl, avatarState.muscle_lvl),
        face: getFaceTokens(avatarState.face_lvl),
        aura: getAuraTokens(avatarState.aura_lvl),
        attire: getAttireTokens(avatarState.wealth_lvl, equippedItems),
        environment: getEnvironmentTokens(avatarState.env_lvl),
        degradation: avatarState.health_points < 7 
          ? getDegradationTokens(avatarState.health_points) 
          : '',
      };
      
      // Concatenar en orden de prioridad
      const parts = [
        components.style,
        components.identity,
        components.body,
        components.face,
        components.aura,
        components.attire,
        components.environment,
        components.degradation,
      ].filter(Boolean);
      
      let positivePrompt = parts.join(', ');
      
      // Sanitizar y truncar si necesario
      positivePrompt = sanitizePrompt(positivePrompt);
      
      if (positivePrompt.length > MAX_PROMPT_LENGTH) {
        positivePrompt = truncatePrompt(positivePrompt, MAX_PROMPT_LENGTH);
      }
      
      return {
        positivePrompt,
        negativePrompt: NEGATIVE_PROMPT,
        components,
      };
    }
    
    function sanitizePrompt(prompt: string): string {
      return prompt
        .replace(/[^\w\s,.-]/g, '') // Eliminar caracteres especiales
        .replace(/\s+/g, ' ')       // Normalizar espacios
        .trim();
    }
    
    function truncatePrompt(prompt: string, maxLength: number): string {
      if (prompt.length <= maxLength) return prompt;
      
      // Truncar en la última coma antes del límite
      const truncated = prompt.substring(0, maxLength);
      const lastComma = truncated.lastIndexOf(',');
      
      if (lastComma > maxLength * 0.7) {
        return truncated.substring(0, lastComma).trim();
      }
      
      return truncated.trim();
    }
    ```

TAREA-08.2.5:
  Nombre: "Crear export principal de prompts"
  Acción: "Crear /lib/ai/prompts/index.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/index.ts:
    
    ```typescript
    export { buildPrompt } from './composer';
    export { STYLE_HEADER, NEGATIVE_PROMPT } from './templates';
    export type { 
      UserDataForPrompt, 
      EquippedItem, 
      BuiltPrompt, 
      PromptComponents 
    } from './types';
    ```

SUBCAJA 08.3: Tokens de Identidad (Arquetipos)
Las 6 Semillas Visuales Inmutables
Archivos a Crear
CopyRutas:
├── /src/lib/ai/prompts/tokens/
│   ├── identity.ts                 # Tokens de arquetipos

Tamaño Estimado: ~200 líneas
Tiempo de Generación: 30-45 minutos
Estructura del Código
Copy08.3 Tokens de Identidad
│
├── 1. PROPÓSITO
│   │
│   └── Los Identity Anchors son tokens INMUTABLES que definen
│       los rasgos faciales y físicos base de cada arquetipo.
│       Estos NO cambian a lo largo de los 100 días para mantener
│       la consistencia visual del personaje.
│
├── 2. LOS 6 ARQUETIPOS (del Cuestionario1)
│   │
│   ├── ARQUETIPO 1: "RASTAS"
│   │   ├── Descripción: Ex-gamer bonachón con dreadlocks
│   │   ├── Tokens de Identidad:
│   │   │   ├── Hair: "long brown dreadlocks, thick locks"
│   │   │   ├── Face: "round friendly face, wide nose, warm eyes"
│   │   │   ├── Skin: "warm brown skin tone"
│   │   │   └── Features: "gentle expression, soft features"
│   │   └── Lore: "Pasó años frente a la pantalla mientras 
│   │             su esposa lo engañaba en la habitación de al lado"
│   │
│   ├── ARQUETIPO 2: "EL MUSCLES"
│   │   ├── Descripción: Ex-cadenero, espalda ancha
│   │   ├── Tokens de Identidad:
│   │   │   ├── Hair: "bald head, clean shaved"
│   │   │   ├── Face: "square jaw, small intense eyes, thick neck"
│   │   │   ├── Skin: "tan skin tone"
│   │   │   └── Features: "intimidating look, heavy brow"
│   │   └── Lore: "Trabajó en antros hasta que un romance 
│   │             prohibido lo dejó sin nada"
│   │
│   ├── ARQUETIPO 3: "PECAS"
│   │   ├── Descripción: Genio cripto caído
│   │   ├── Tokens de Identidad:
│   │   │   ├── Hair: "curly reddish brown hair, messy"
│   │   │   ├── Face: "freckled face, thin features, sharp nose"
│   │   │   ├── Skin: "pale skin with freckles"
│   │   │   └── Features: "intelligent eyes, nervous look"
│   │   └── Lore: "Hizo millones en cripto y lo perdió todo 
│   │             apostando a la moneda equivocada"
│   │
│   ├── ARQUETIPO 4: "EL GREÑAS"
│   │   ├── Descripción: Rockero calvo con perilla
│   │   ├── Tokens de Identidad:
│   │   │   ├── Hair: "balding top with long hair in back, goatee"
│   │   │   ├── Face: "angular face, deep set eyes, weathered"
│   │   │   ├── Skin: "weathered skin"
│   │   │   └── Features: "rebellious look, tired eyes"
│   │   └── Lore: "La banda nunca despegó y la calvicie 
│   │             le ganó la batalla"
│   │
│   ├── ARQUETIPO 5: "EL RUBIO"
│   │   ├── Descripción: Galán de prepa pasado de moda
│   │   ├── Tokens de Identidad:
│   │   │   ├── Hair: "blonde wavy hair, styled back"
│   │   │   ├── Face: "strong jaw, blue eyes, handsome features"
│   │   │   ├── Skin: "fair skin"
│   │   │   └── Features: "charming smile, athletic bone structure"
│   │   └── Lore: "El más popular de la prepa, ahora olvidado 
│   │             y pasado de peso"
│   │
│   └── ARQUETIPO 6: "EL LIC"
│       ├── Descripción: Ejecutivo reemplazado por IA
│       ├── Tokens de Identidad:
│       │   ├── Hair: "black hair, receding hairline"
│       │   ├── Face: "rectangular glasses, stubble, tired eyes"
│       │   ├── Skin: "olive skin tone"
│       │   └── Features: "professional look, stressed expression"
│       └── Lore: "El algoritmo hizo su trabajo en 2 segundos 
│                 y él quedó obsoleto"
│
└── 3. IMPLEMENTACIÓN
    │
    └── Función getIdentityTokens(archetypeId: number): string
Tareas Atómicas para 08.3 Identity
yamlCopyTAREA-08.3.1:
  Nombre: "Crear carpeta de tokens"
  Acción: "Crear /lib/ai/prompts/tokens/"
  Responsable: Antigravity
  Comando: |
    mkdir -p /src/lib/ai/prompts/tokens

TAREA-08.3.2:
  Nombre: "Implementar tokens de identidad"
  Acción: "Crear /lib/ai/prompts/tokens/identity.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/tokens/identity.ts:
    
    ```typescript
    /**
     * Identity Anchors - Tokens inmutables por arquetipo
     * Basados en los 6 personajes del Cuestionario1:
     * Rastas, Muscles, Pecas, Greñas, Rubio, Lic
     */
    
    interface ArchetypeIdentity {
      id: number;
      name: string;
      tokens: string;
    }
    
    const ARCHETYPE_IDENTITIES: ArchetypeIdentity[] = [
      {
        id: 1,
        name: 'Rastas',
        tokens: `
          male character,
          long brown dreadlocks hairstyle,
          thick rope-like locks,
          round friendly face,
          wide nose,
          warm brown eyes,
          warm brown skin tone,
          gentle expression,
          soft facial features
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        id: 2,
        name: 'Muscles',
        tokens: `
          male character,
          completely bald head,
          clean shaved scalp,
          square strong jaw,
          small intense eyes,
          thick muscular neck,
          tan skin tone,
          intimidating expression,
          heavy prominent brow
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        id: 3,
        name: 'Pecas',
        tokens: `
          male character,
          curly reddish brown hair,
          messy unkempt curls,
          freckled face,
          thin angular features,
          sharp pointed nose,
          pale skin with freckles,
          intelligent focused eyes,
          nervous anxious expression
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        id: 4,
        name: 'Greñas',
        tokens: `
          male character,
          balding top of head,
          long dark hair in back,
          black goatee beard,
          angular gaunt face,
          deep set tired eyes,
          weathered rough skin,
          rebellious defiant look,
          aged appearance
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        id: 5,
        name: 'Rubio',
        tokens: `
          male character,
          blonde wavy hair,
          hair styled back,
          strong defined jaw,
          bright blue eyes,
          handsome symmetrical features,
          fair light skin,
          charming confident smile,
          athletic bone structure
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        id: 6,
        name: 'Lic',
        tokens: `
          male character,
          black dark hair,
          receding hairline,
          rectangular frame glasses,
          facial stubble beard,
          tired exhausted eyes,
          olive skin tone,
          professional serious look,
          stressed worried expression
        `.replace(/\s+/g, ' ').trim(),
      },
    ];
    
    /**
     * Obtiene los tokens de identidad para un arquetipo
     * @param archetypeId - ID del arquetipo (1-6)
     * @returns Tokens de identidad como string
     */
    export function getIdentityTokens(archetypeId: number): string {
      const archetype = ARCHETYPE_IDENTITIES.find(a => a.id === archetypeId);
      
      if (!archetype) {
        console.warn(`Archetype ${archetypeId} not found, using default (1)`);
        return ARCHETYPE_IDENTITIES[0].tokens;
      }
      
      return archetype.tokens;
    }
    
    /**
     * Obtiene el nombre del arquetipo
     */
    export function getArchetypeName(archetypeId: number): string {
      const archetype = ARCHETYPE_IDENTITIES.find(a => a.id === archetypeId);
      return archetype?.name ?? 'Unknown';
    }
    
    // Export para testing
    export const _ARCHETYPE_IDENTITIES = ARCHETYPE_IDENTITIES;
    ```

SUBCAJA 08.4: Tokens de Vectores
Mapeo de Vectores a Descripción Visual
Archivos a Crear
CopyRutas:
├── /src/lib/ai/prompts/tokens/
│   ├── body.ts                     # Tokens de fat_lvl + muscle_lvl
│   ├── face.ts                     # Tokens de face_lvl (JAWLINE)
│   └── aura.ts                     # Tokens de aura_lvl

Tamaño Estimado: ~500 líneas
Tiempo de Generación: 60-90 minutos
Estructura del Código
Copy08.4 Tokens de Vectores
│
├── 1. VECTOR: PHYSIQUE (fat_lvl + muscle_lvl)
│   │
│   ├── 1.1 Lógica de Combinación
│   │   │
│   │   │  La apariencia física es una COMBINACIÓN de:
│   │   │  - fat_lvl (13→1, inverso: 13=obeso, 1=definido)
│   │   │  - muscle_lvl (1→13, lineal: 1=sin músculo, 13=muy musculoso)
│   │   │
│   │   │  Matriz de Estados:
│   │   │  ┌─────────────┬──────────────┬──────────────┬──────────────┐
│   │   │  │             │ Músculo Bajo │ Músculo Med  │ Músculo Alto │
│   │   │  │             │   (1-4)      │    (5-9)     │   (10-13)    │
│   │   │  ├─────────────┼──────────────┼──────────────┼──────────────┤
│   │   │  │ Grasa Alta  │   Obeso      │ Gordo Fuerte │   Powerlifter│
│   │   │  │  (10-13)    │   Fofo       │  (Bear mode) │   (Big boy)  │
│   │   │  ├─────────────┼──────────────┼──────────────┼──────────────┤
│   │   │  │ Grasa Media │   Skinny-Fat │   Normal     │   Atlético   │
│   │   │  │   (5-9)     │  (Dad bod)   │  (Average)   │   (Bulk)     │
│   │   │  ├─────────────┼──────────────┼──────────────┼──────────────┤
│   │   │  │ Grasa Baja  │   Flaco      │    Fit       │   Shredded   │
│   │   │  │   (1-4)     │  (Skinny)    │  (Defined)   │  (Aesthetic) │
│   │   │  └─────────────┴──────────────┴──────────────┴──────────────┘
│   │   │
│   │   └── Cada combinación tiene tokens específicos
│   │
│   ├── 1.2 Tokens por Estado
│   │   │
│   │   ├── OBESO_FOFO (fat:10-13, muscle:1-4):
│   │   │   "massive obese body, huge sagging belly, no muscle definition,
│   │   │    very wide body, fat arms, fat legs, no visible neck,
│   │   │    extremely overweight physique"
│   │   │
│   │   ├── GORDO_FUERTE (fat:10-13, muscle:5-9):
│   │   │   "heavy set body, large belly but with underlying strength,
│   │   │    thick arms, broad shoulders under fat, strongman physique"
│   │   │
│   │   ├── POWERLIFTER (fat:10-13, muscle:10-13):
│   │   │   "massive powerful body, huge muscles under fat layer,
│   │   │    extremely thick arms, barrel chest, powerlifter build"
│   │   │
│   │   ├── SKINNY_FAT (fat:5-9, muscle:1-4):
│   │   │   "soft body, small belly, thin arms, no muscle tone,
│   │   │    narrow shoulders, undefined physique, dad bod"
│   │   │
│   │   ├── NORMAL (fat:5-9, muscle:5-9):
│   │   │   "average body, slight belly, moderate muscle,
│   │   │    normal proportions, unremarkable physique"
│   │   │
│   │   ├── ATLETICO (fat:5-9, muscle:10-13):
│   │   │   "athletic build, some body fat, visible muscles,
│   │   │    broad shoulders, strong arms, bulk phase physique"
│   │   │
│   │   ├── FLACO (fat:1-4, muscle:1-4):
│   │   │   "very thin body, visible ribs, skinny arms,
│   │   │    no muscle mass, underweight appearance"
│   │   │
│   │   ├── FIT (fat:1-4, muscle:5-9):
│   │   │   "lean body, defined muscles, visible abs,
│   │   │    athletic proportions, healthy physique"
│   │   │
│   │   └── SHREDDED (fat:1-4, muscle:10-13):
│   │       "extremely muscular and defined, shredded physique,
│   │        visible veins, perfect V-taper, competition ready body,
│   │        8-pack abs, striated muscles"
│   │
│   └── 1.3 Función: getBodyTokens(fat_lvl, muscle_lvl)
│
├── 2. VECTOR: JAWLINE (face_lvl)
│   │
│   ├── 2.1 Lógica
│   │   │
│   │   │  face_lvl representa la definición facial, afectada por:
│   │   │  - Arquetipo Cara: postura, ejercicios faciales, kegel
│   │   │  - También afectado indirectamente por fat_lvl
│   │   │
│   │   │  Progresión Visual:
│   │   │  1-3:  Cara redonda, papada, sin definición
│   │   │  4-6:  Cara empezando a definirse, menos hinchazón
│   │   │  7-9:  Mandíbula visible, pómulos marcándose
│   │   │  10-13: Mandíbula cincelada, "Gigachad" level
│   │
│   ├── 2.2 Tokens por Rango
│   │   │
│   │   ├── FACE_LVL 1-3:
│   │   │   "round puffy face, double chin, no jaw definition,
│   │   │    soft undefined features, bloated cheeks"
│   │   │
│   │   ├── FACE_LVL 4-6:
│   │   │   "slightly defined face, minimal jaw showing,
│   │   │    reduced puffiness, emerging cheekbones"
│   │   │
│   │   ├── FACE_LVL 7-9:
│   │   │   "defined jawline, visible cheekbones,
│   │   │    angular face, masculine features"
│   │   │
│   │   └── FACE_LVL 10-13:
│   │       "extremely defined jawline, razor sharp jaw,
│   │        hollow cheeks, perfect facial symmetry,
│   │        model-tier bone structure, chad jawline"
│   │
│   └── 2.3 Función: getFaceTokens(face_lvl)
│
└── 3. VECTOR: AURA (aura_lvl)
    │
    ├── 3.1 Lógica
    │   │
    │   │  aura_lvl representa la presencia, energía y postura,
    │   │  afectada por Arquetipo Mental: meditación, lectura, etc.
    │   │
    │   │  Progresión Visual:
    │   │  1-3:  Derrotado, hombros caídos, mirada al suelo
    │   │  4-6:  Neutral, postura correcta básica
    │   │  7-9:  Confiado, pecho afuera, mirada directa
    │   │  10-13: Presencia dominante, aura visible, "alpha"
    │
    ├── 3.2 Tokens por Rango
    │   │
    │   ├── AURA_LVL 1-3:
    │   │   "defeated posture, hunched shoulders, looking down,
    │   │    sad tired expression, no confidence, slumped stance"
    │   │
    │   ├── AURA_LVL 4-6:
    │   │   "neutral posture, straight back, forward gaze,
    │   │    calm expression, relaxed stance"
    │   │
    │   ├── AURA_LVL 7-9:
    │   │   "confident posture, chest out, chin up,
    │   │    strong eye contact, commanding presence"
    │   │
    │   └── AURA_LVL 10-13:
    │       "dominant powerful stance, radiating confidence,
    │        intense focused gaze, alpha presence,
    │        glowing aura effect, magnetic energy"
    │
    └── 3.3 Función: getAuraTokens(aura_lvl)
Tareas Atómicas para 08.4 Vectores
yamlCopyTAREA-08.4.1:
  Nombre: "Implementar tokens de cuerpo (PHYSIQUE)"
  Acción: "Crear /lib/ai/prompts/tokens/body.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/tokens/body.ts:
    
    ```typescript
    /**
     * Tokens de cuerpo basados en fat_lvl (13→1) y muscle_lvl (1→13)
     * La combinación determina el tipo de cuerpo visual
     */
    
    type BodyType = 
      | 'obeso_fofo' 
      | 'gordo_fuerte' 
      | 'powerlifter'
      | 'skinny_fat' 
      | 'normal' 
      | 'atletico'
      | 'flaco' 
      | 'fit' 
      | 'shredded';
    
    const BODY_TOKENS: Record<BodyType, string> = {
      obeso_fofo: `
        massive obese body,
        huge sagging belly hanging over waist,
        no visible muscle definition,
        very wide rounded body shape,
        thick fat arms,
        thick fat legs,
        no visible neck,
        extremely overweight physique
      `.replace(/\s+/g, ' ').trim(),
      
      gordo_fuerte: `
        heavy set powerful body,
        large belly with underlying strength,
        thick strong arms under fat,
        broad shoulders under fat layer,
        strongman bear mode physique,
        bulky powerful frame
      `.replace(/\s+/g, ' ').trim(),
      
      powerlifter: `
        massive powerful body,
        huge muscles visible under fat layer,
        extremely thick muscular arms,
        barrel chest,
        powerlifter strongman build,
        intimidating size
      `.replace(/\s+/g, ' ').trim(),
      
      skinny_fat: `
        soft undefined body,
        small belly pouch,
        thin weak arms,
        no muscle tone,
        narrow sloped shoulders,
        undefined dad bod physique
      `.replace(/\s+/g, ' ').trim(),
      
      normal: `
        average body type,
        slight belly,
        moderate muscle tone,
        normal proportions,
        unremarkable standard physique
      `.replace(/\s+/g, ' ').trim(),
      
      atletico: `
        athletic muscular build,
        some body fat present,
        visible muscles underneath,
        broad strong shoulders,
        powerful arms,
        bulk phase athletic physique
      `.replace(/\s+/g, ' ').trim(),
      
      flaco: `
        very thin skinny body,
        visible ribs,
        skinny weak arms,
        no muscle mass,
        underweight bony appearance
      `.replace(/\s+/g, ' ').trim(),
      
      fit: `
        lean athletic body,
        defined visible muscles,
        visible abs,
        athletic V-taper proportions,
        healthy fit physique
      `.replace(/\s+/g, ' ').trim(),
      
      shredded: `
        extremely muscular shredded physique,
        ultra defined muscles,
        visible veins and vascularity,
        perfect V-taper silhouette,
        competition ready body,
        8-pack defined abs,
        striated muscle fibers visible,
        peak aesthetic physique
      `.replace(/\s+/g, ' ').trim(),
    };
    
    /**
     * Determina el tipo de cuerpo basado en fat y muscle levels
     */
    function getBodyType(fatLvl: number, muscleLvl: number): BodyType {
      // Categorizar grasa: alta (10-13), media (5-9), baja (1-4)
      const fatCategory = fatLvl >= 10 ? 'high' : fatLvl >= 5 ? 'mid' : 'low';
      
      // Categorizar músculo: bajo (1-4), medio (5-9), alto (10-13)
      const muscleCategory = muscleLvl <= 4 ? 'low' : muscleLvl <= 9 ? 'mid' : 'high';
      
      const matrix: Record<string, Record<string, BodyType>> = {
        high: { low: 'obeso_fofo', mid: 'gordo_fuerte', high: 'powerlifter' },
        mid: { low: 'skinny_fat', mid: 'normal', high: 'atletico' },
        low: { low: 'flaco', mid: 'fit', high: 'shredded' },
      };
      
      return matrix[fatCategory][muscleCategory];
    }
    
    /**
     * Obtiene los tokens de cuerpo para los niveles dados
     * @param fatLvl - Nivel de grasa (13=obeso, 1=definido)
     * @param muscleLvl - Nivel de músculo (1=sin músculo, 13=muy musculoso)
     */
    export function getBodyTokens(fatLvl: number, muscleLvl: number): string {
      const bodyType = getBodyType(fatLvl, muscleLvl);
      return BODY_TOKENS[bodyType];
    }
    
    // Export para testing
    export const _getBodyType = getBodyType;
    export const _BODY_TOKENS = BODY_TOKENS;
    ```

TAREA-08.4.2:
  Nombre: "Implementar tokens de cara (JAWLINE)"
  Acción: "Crear /lib/ai/prompts/tokens/face.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/tokens/face.ts:
    
    ```typescript
    /**
     * Tokens de cara basados en face_lvl (1→13)
     * Representa la definición facial y mandíbula (JAWLINE)
     */
    
    interface FaceTokenRange {
      min: number;
      max: number;
      tokens: string;
    }
    
    const FACE_TOKEN_RANGES: FaceTokenRange[] = [
      {
        min: 1,
        max: 3,
        tokens: `
          round puffy face,
          double chin visible,
          no jaw definition,
          soft undefined facial features,
          bloated swollen cheeks,
          facial fat obscuring bone structure
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 4,
        max: 6,
        tokens: `
          slightly defined face shape,
          minimal jaw starting to show,
          reduced facial puffiness,
          emerging cheekbone structure,
          less bloated appearance
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 7,
        max: 9,
        tokens: `
          defined angular jawline,
          visible prominent cheekbones,
          angular masculine face shape,
          clear facial definition,
          strong bone structure showing
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 10,
        max: 13,
        tokens: `
          extremely defined razor sharp jawline,
          hollow cheeks,
          perfect facial symmetry,
          model-tier bone structure,
          chad gigachad jawline,
          chiseled masculine features,
          prominent brow ridge,
          hunter eyes
        `.replace(/\s+/g, ' ').trim(),
      },
    ];
    
    /**
     * Obtiene los tokens de cara para el nivel dado
     * @param faceLvl - Nivel facial JAWLINE (1-13)
     */
    export function getFaceTokens(faceLvl: number): string {
      // Clamp to valid range
      const level = Math.max(1, Math.min(13, faceLvl));
      
      const range = FACE_TOKEN_RANGES.find(
        r => level >= r.min && level <= r.max
      );
      
      return range?.tokens ?? FACE_TOKEN_RANGES[0].tokens;
    }
    
    // Export para testing
    export const _FACE_TOKEN_RANGES = FACE_TOKEN_RANGES;
    ```

TAREA-08.4.3:
  Nombre: "Implementar tokens de aura (AURA)"
  Acción: "Crear /lib/ai/prompts/tokens/aura.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/tokens/aura.ts:
    
    ```typescript
    /**
     * Tokens de aura basados en aura_lvl (1→13)
     * Representa la presencia, postura y energía
     */
    
    interface AuraTokenRange {
      min: number;
      max: number;
      tokens: string;
    }
    
    const AURA_TOKEN_RANGES: AuraTokenRange[] = [
      {
        min: 1,
        max: 3,
        tokens: `
          defeated slumped posture,
          hunched drooping shoulders,
          looking down at ground,
          sad tired expression,
          no confidence visible,
          weak dejected stance,
          avoiding eye contact
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 4,
        max: 6,
        tokens: `
          neutral upright posture,
          straight back,
          forward neutral gaze,
          calm relaxed expression,
          balanced comfortable stance
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 7,
        max: 9,
        tokens: `
          confident powerful posture,
          chest out shoulders back,
          chin held high,
          strong direct eye contact,
          commanding presence,
          assertive body language
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 10,
        max: 13,
        tokens: `
          dominant powerful alpha stance,
          radiating pure confidence,
          intense piercing focused gaze,
          commanding dominant presence,
          subtle glowing aura effect around body,
          magnetic powerful energy,
          heroic victorious pose
        `.replace(/\s+/g, ' ').trim(),
      },
    ];
    
    /**
     * Obtiene los tokens de aura para el nivel dado
     * @param auraLvl - Nivel de aura (1-13)
     */
    export function getAuraTokens(auraLvl: number): string {
      const level = Math.max(1, Math.min(13, auraLvl));
      
      const range = AURA_TOKEN_RANGES.find(
        r => level >= r.min && level <= r.max
      );
      
      return range?.tokens ?? AURA_TOKEN_RANGES[0].tokens;
    }
    
    // Export para testing
    export const _AURA_TOKEN_RANGES = AURA_TOKEN_RANGES;
    ```

SUBCAJA 08.5: Tokens de Items Equipados
Traducción de Inventario a Descripción Visual
Archivos a Crear
CopyRutas:
├── /src/lib/ai/prompts/tokens/
│   └── attire.ts                   # Tokens de ropa y accesorios

Tamaño Estimado: ~250 líneas
Tiempo de Generación: 30-45 minutos
Estructura del Código
Copy08.5 Tokens de Items
│
├── 1. PROPÓSITO
│   │
│   └── Traducir los items equipados del inventario del usuario
│       a tokens descriptivos para el prompt de IA.
│       Cada item en store_items tiene un campo `ia_tag`.
│
├── 2. LÓGICA DE ATTIRE
│   │
│   ├── 2.1 Fuentes de Attire
│   │   │
│   │   │  El attire final viene de DOS fuentes:
│   │   │  1. wealth_lvl → Ropa BASE por nivel
│   │   │  2. Items equipados → OVERRIDE de items comprados
│   │   │
│   │   └── Items equipados tienen PRIORIDAD sobre defaults
│   │
│   ├── 2.2 Ropa Default por Nivel (si no hay items)
│   │   │
│   │   ├── Nivel 1-2 (Indigente/Arrimado):
│   │   │   "dirty torn clothes, ragged shirt, worn out pants"
│   │   │
│   │   ├── Nivel 3-4 (Alucín/Chalán):
│   │   │   "basic jeans, simple t-shirt, cheap sneakers"
│   │   │
│   │   ├── Nivel 5-6 (Godín/Acomodado):
│   │   │   "casual business clothes, polo shirt, chinos"
│   │   │
│   │   ├── Nivel 7-8 (Pudiente/Millonario):
│   │   │   "designer clothes, fitted suit, luxury watch"
│   │   │
│   │   └── Nivel 9-10 (Magnate/Semi-Dios):
│   │       "high fashion designer wear, custom tailored suit,
│   │        luxury accessories, expensive jewelry"
│   │
│   └── 2.3 Categorías de Items Equipables
│       ├── Ropa (Armadura)
│       ├── Relojes
│       ├── Cadenas/Joyería
│       ├── Lentes
│       └── Otros accesorios
│
├── 3. IMPLEMENTACIÓN
│   │
│   └── Función getAttireTokens(wealthLvl, equippedItems[])
│
└── 4. EJEMPLO DE FLUJO
    │
    └── Usuario Nivel 7 con:
        - wealth_lvl: 7
        - Equipped: ["Rolex Submariner", "Gold Chain"]
        
        Output: "designer clothes, fitted suit,
                 wearing Rolex Submariner luxury watch,
                 gold chain necklace"
Tareas Atómicas para 08.5 Items
yamlCopyTAREA-08.5.1:
  Nombre: "Implementar tokens de attire"
  Acción: "Crear /lib/ai/prompts/tokens/attire.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/tokens/attire.ts:
    
    ```typescript
    /**
     * Tokens de ropa y accesorios
     * Combina wealth_lvl (defaults) con items equipados (overrides)
     */
    
    import type { EquippedItem } from '../types';
    
    // Ropa default por nivel de wealth
    const DEFAULT_ATTIRE_BY_LEVEL: Record<string, string> = {
      '1-2': `
        dirty torn ragged clothes,
        stained worn out t-shirt,
        ripped old pants,
        no shoes or broken sandals
      `.replace(/\s+/g, ' ').trim(),
      
      '3-4': `
        basic blue jeans,
        simple plain t-shirt,
        cheap sneakers,
        fake gold chain,
        baseball cap
      `.replace(/\s+/g, ' ').trim(),
      
      '5-6': `
        casual business attire,
        clean polo shirt,
        khaki chinos,
        leather belt,
        simple wristwatch
      `.replace(/\s+/g, ' ').trim(),
      
      '7-8': `
        designer brand clothes,
        well fitted suit,
        silk tie,
        luxury wristwatch,
        leather dress shoes
      `.replace(/\s+/g, ' ').trim(),
      
      '9-10': `
        high fashion designer wear,
        custom tailored expensive suit,
        luxury brand accessories,
        expensive gold jewelry,
        premium leather shoes,
        designer sunglasses
      `.replace(/\s+/g, ' ').trim(),
    };
    
    /**
     * Obtiene el rango de nivel para lookup
     */
    function getLevelRange(wealthLvl: number): string {
      if (wealthLvl <= 2) return '1-2';
      if (wealthLvl <= 4) return '3-4';
      if (wealthLvl <= 6) return '5-6';
      if (wealthLvl <= 8) return '7-8';
      return '9-10';
    }
    
    /**
     * Extrae los ia_tags de los items equipados
     */
    function getEquippedItemTokens(equippedItems: EquippedItem[]): string[] {
      return equippedItems
        .filter(item => item.store_items?.ia_tag)
        .map(item => item.store_items!.ia_tag);
    }
    
    /**
     * Obtiene los tokens de attire combinando nivel y items equipados
     * @param wealthLvl - Nivel de wealth (1-13)
     * @param equippedItems - Array de items equipados del inventario
     */
    export function getAttireTokens(
      wealthLvl: number,
      equippedItems: EquippedItem[]
    ): string {
      // Obtener default por nivel
      const levelRange = getLevelRange(wealthLvl);
      const defaultAttire = DEFAULT_ATTIRE_BY_LEVEL[levelRange];
      
      // Obtener tokens de items equipados
      const itemTokens = getEquippedItemTokens(equippedItems);
      
      if (itemTokens.length === 0) {
        // Sin items equipados, usar solo default
        return defaultAttire;
      }
      
      // Combinar: primero los items específicos, luego complementar con default
      // Los items equipados tienen prioridad visual
      const combinedTokens = [
        ...itemTokens,
        defaultAttire, // Base que complementa
      ].join(', ');
      
      return combinedTokens;
    }
    
    // Export para testing
    export const _DEFAULT_ATTIRE_BY_LEVEL = DEFAULT_ATTIRE_BY_LEVEL;
    ```

SUBCAJA 08.6: Tokens de Entorno
Escenarios y Fondos por Nivel
Archivos a Crear
CopyRutas:
├── /src/lib/ai/prompts/tokens/
│   └── environment.ts              # Tokens de fondo/escenario

Tamaño Estimado: ~200 líneas
Tiempo de Generación: 30-45 minutos
Estructura del Código
Copy08.6 Tokens de Entorno
│
├── 1. PROGRESIÓN DE ENTORNOS
│   │
│   │  env_lvl (1-13) determina el fondo de la imagen.
│   │  La progresión refleja el ascenso socioeconómico:
│   │
│   │  Nivel 1-2:   🗑️ Calle / Bajo puente / Basurero
│   │  Nivel 3-4:   🏚️ Cuarto de servicio / Vecindad humilde
│   │  Nivel 5-6:   🏢 Oficina / Departamento básico
│   │  Nivel 7-8:   🏙️ Oficina ejecutiva / Condo moderno
│   │  Nivel 9-10:  🏰 Casa de lujo / Penthouse
│   │  Nivel 11-13: 🌟 Mansión / Yate / Jet privado (Post-game)
│
├── 2. TOKENS POR NIVEL DE ENTORNO
│   │
│   ├── ENV 1-2:
│   │   "dark dirty alley background,
│   │    trash and garbage around,
│   │    broken streetlights,
│   │    rainy night atmosphere,
│   │    urban decay setting"
│   │
│   ├── ENV 3-4:
│   │   "small humble room background,
│   │    simple bed,
│   │    peeling paint walls,
│   │    cramped living space,
│   │    modest poor interior"
│   │
│   ├── ENV 5-6:
│   │   "modern office background,
│   │    cubicle desk setup,
│   │    fluorescent lighting,
│   │    computer monitors,
│   │    professional workplace"
│   │
│   ├── ENV 7-8:
│   │   "luxury apartment background,
│   │    modern furniture,
│   │    city skyline view,
│   │    expensive decor,
│   │    high rise condo interior"
│   │
│   ├── ENV 9-10:
│   │   "luxury penthouse background,
│   │    floor to ceiling windows,
│   │    panoramic city night view,
│   │    designer furniture,
│   │    wealthy elite interior"
│   │
│   └── ENV 11-13 (Post-game):
│       "ultra luxury mansion background,
│        private yacht deck,
│        golden ornate decorations,
│        billionaire lifestyle setting"
│
└── 3. IMPLEMENTACIÓN
    │
    └── Función getEnvironmentTokens(env_lvl)
Tareas Atómicas para 08.6 Entorno
yamlCopyTAREA-08.6.1:
  Nombre: "Implementar tokens de entorno"
  Acción: "Crear /lib/ai/prompts/tokens/environment.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/tokens/environment.ts:
    
    ```typescript
    /**
     * Tokens de entorno/fondo basados en env_lvl (1-13)
     * Representa el escenario donde aparece el avatar
     */
    
    interface EnvironmentTokenRange {
      min: number;
      max: number;
      tokens: string;
    }
    
    const ENVIRONMENT_TOKEN_RANGES: EnvironmentTokenRange[] = [
      {
        min: 1,
        max: 2,
        tokens: `
          dark dirty alley background,
          trash garbage scattered around,
          broken flickering streetlights,
          rainy night gloomy atmosphere,
          urban decay abandoned setting,
          puddles on ground,
          graffiti walls
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 3,
        max: 4,
        tokens: `
          small humble room background,
          simple basic bed,
          peeling paint on walls,
          cramped tiny living space,
          modest poor interior,
          bare minimum furniture,
          single hanging lightbulb
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 5,
        max: 6,
        tokens: `
          modern office background,
          cubicle desk workspace,
          bright fluorescent lighting,
          computer monitors on desk,
          professional workplace setting,
          clean organized space
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 7,
        max: 8,
        tokens: `
          luxury modern apartment background,
          designer contemporary furniture,
          city skyline view through window,
          expensive tasteful decor,
          high rise condo interior,
          ambient mood lighting
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 9,
        max: 10,
        tokens: `
          luxury penthouse background,
          floor to ceiling glass windows,
          panoramic city night skyline view,
          designer furniture and art,
          wealthy elite interior design,
          champagne on table,
          marble floors
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        min: 11,
        max: 13,
        tokens: `
          ultra luxury mansion background,
          private yacht deck ocean view,
          golden ornate decorations,
          billionaire lifestyle setting,
          crystal chandeliers,
          exotic luxury everywhere,
          private jet interior
        `.replace(/\s+/g, ' ').trim(),
      },
    ];
    
    /**
     * Obtiene los tokens de entorno para el nivel dado
     * @param envLvl - Nivel de entorno (1-13)
     */
    export function getEnvironmentTokens(envLvl: number): string {
      const level = Math.max(1, Math.min(13, envLvl));
      
      const range = ENVIRONMENT_TOKEN_RANGES.find(
        r => level >= r.min && level <= r.max
      );
      
      return range?.tokens ?? ENVIRONMENT_TOKEN_RANGES[0].tokens;
    }
    
    // Export para testing
    export const _ENVIRONMENT_TOKEN_RANGES = ENVIRONMENT_TOKEN_RANGES;
    ```

SUBCAJA 08.7: Sistema de Degradación Visual
Efectos de Salud Baja
Archivos a Crear
CopyRutas:
├── /src/lib/ai/prompts/tokens/
│   └── degradation.ts              # Tokens de deterioro por salud baja

Tamaño Estimado: ~150 líneas
Tiempo de Generación: 20-30 minutos
Estructura del Código
Copy08.7 Degradación Visual
│
├── 1. PROPÓSITO
│   │
│   └── Cuando health_points < 7, el avatar muestra signos
│       visuales de deterioro para comunicar urgencia al usuario.
│
├── 2. NIVELES DE DEGRADACIÓN
│   │
│   ├── HEALTH 6-4 (Herido):
│   │   - Ojeras ligeras
│   │   - Expresión cansada
│   │   - Ropa ligeramente desordenada
│   │
│   ├── HEALTH 3-2 (Crítico):
│   │   - Ojeras pronunciadas
│   │   - Ojos rojos
│   │   - Pelo despeinado
│   │   - Ropa manchada
│   │   - Postura decaída (override de aura)
│   │
│   └── HEALTH 1 (Casi Muerto):
│   │   - Todo lo anterior más extremo
│   │   - Piel pálida/grisácea
│   │   - Expresión de derrota total
│   │   - Entorno sucio (override parcial de env)
│
└── 3. IMPLEMENTACIÓN
    │
    └── Función getDegradationTokens(health_points)
        - Si health >= 7: retorna string vacío
        - Si health < 7: retorna tokens de degradación
Tareas Atómicas para 08.7 Degradación
yamlCopyTAREA-08.7.1:
  Nombre: "Implementar tokens de degradación"
  Acción: "Crear /lib/ai/prompts/tokens/degradation.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/tokens/degradation.ts:
    
    ```typescript
    /**
     * Tokens de degradación visual por salud baja
     * Se aplican cuando health_points < 7
     */
    
    interface DegradationLevel {
      minHealth: number;
      maxHealth: number;
      tokens: string;
    }
    
    const DEGRADATION_LEVELS: DegradationLevel[] = [
      {
        minHealth: 4,
        maxHealth: 6,
        tokens: `
          slight dark circles under eyes,
          tired exhausted expression,
          slightly messy disheveled appearance,
          minor signs of fatigue
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        minHealth: 2,
        maxHealth: 3,
        tokens: `
          dark heavy bags under bloodshot eyes,
          very tired exhausted expression,
          messy unkempt greasy hair,
          wrinkled stained dirty clothes,
          slumped defeated posture,
          pale unhealthy skin,
          visible stress and strain
        `.replace(/\s+/g, ' ').trim(),
      },
      {
        minHealth: 0,
        maxHealth: 1,
        tokens: `
          severe dark circles sunken eyes,
          bloodshot red exhausted eyes,
          extremely disheveled messy appearance,
          dirty torn stained clothes,
          completely defeated slumped posture,
          sickly pale grayish skin tone,
          expression of total defeat and despair,
          trash and empty bottles around,
          signs of complete neglect
        `.replace(/\s+/g, ' ').trim(),
      },
    ];
    
    /**
     * Obtiene tokens de degradación basado en salud
     * @param healthPoints - Puntos de salud actuales (0-10)
     * @returns Tokens de degradación o string vacío si salud >= 7
     */
    export function getDegradationTokens(healthPoints: number): string {
      // No hay degradación si la salud es buena
      if (healthPoints >= 7) {
        return '';
      }
      
      const level = DEGRADATION_LEVELS.find(
        l => healthPoints >= l.minHealth && healthPoints <= l.maxHealth
      );
      
      return level?.tokens ?? '';
    }
    
    // Export para testing
    export const _DEGRADATION_LEVELS = DEGRADATION_LEVELS;
    ```

TAREA-08.7.2:
  Nombre: "Crear index de tokens"
  Acción: "Crear /lib/ai/prompts/tokens/index.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/prompts/tokens/index.ts:
    
    ```typescript
    // Export all token functions
    export { getIdentityTokens, getArchetypeName } from './identity';
    export { getBodyTokens } from './body';
    export { getFaceTokens } from './face';
    export { getAuraTokens } from './aura';
    export { getAttireTokens } from './attire';
    export { getEnvironmentTokens } from './environment';
    export { getDegradationTokens } from './degradation';
    ```

SUBCAJA 08.8: Cola y Resiliencia
Sistema de Queue y Manejo de Fallos
Archivos a Crear
CopyRutas:
├── /src/lib/ai/
│   ├── queue.ts                    # Integración con sistema de colas
│   └── fallback.ts                 # Estrategias de fallback

Tamaño Estimado: ~300 líneas
Tiempo de Generación: 45-60 minutos
Estructura del Código
Copy08.8 Cola y Resiliencia
│
├── 1. SISTEMA DE COLA
│   │
│   ├── 1.1 Propósito
│   │   └── La generación de imágenes toma 10-30 segundos.
│   │       No puede ejecutarse en el request principal.
│   │       Necesitamos un sistema de cola asíncrono.
│   │
│   ├── 1.2 Opciones de Implementación
│   │   ├── Opción A: Inngest (recomendado para simplicidad)
│   │   ├── Opción B: BullMQ + Redis
│   │   └── Opción C: Supabase Edge Functions + pg_cron
│   │
│   ├── 1.3 Flujo con Cola
│   │   │
│   │   │  1. Trigger (Judgement Night, Level Up, etc.)
│   │   │     ↓
│   │   │  2. Encolar job de generación
│   │   │     ↓
│   │   │  3. Worker procesa job
│   │   │     ↓
│   │   │  4. Resultado → DB + Realtime notification
│   │
│   └── 1.4 Prioridades
│       ├── HIGH: Subida de nivel (usuario activo esperando)
│       ├── NORMAL: Judgement Night (batch nocturno)
│       └── LOW: Regeneración manual
│
├── 2. ESTRATEGIAS DE FALLBACK
│   │
│   ├── 2.1 Fallback de Provider
│   │   └── Si Replicate falla → Intentar con Gemini
│   │
│   ├── 2.2 Fallback de Imagen
│   │   └── Si ambos providers fallan:
│   │       1. Usar última imagen generada
│   │       2. Mostrar placeholder con mensaje
│   │       3. Programar reintento en 1 hora
│   │
│   └── 2.3 Reintentos
│       ├── Máximo 3 intentos por job
│       ├── Backoff exponencial (1s, 2s, 4s)
│       └── Después de 3 fallos → Marcar como failed
│
├── 3. TABLA DE SEGUIMIENTO
│   │
│   └── image_generation_logs
│       ├── id, user_id, day_number
│       ├── status: 'pending' | 'processing' | 'completed' | 'failed'
│       ├── provider_used
│       ├── prompt_used
│       ├── generation_time_ms
│       ├── error_message
│       ├── retry_count
│       └── created_at, completed_at
│
└── 4. IMPLEMENTACIÓN
    │
    ├── queueImageGeneration(input)
    ├── processImageGenerationJob(job)
    └── handleGenerationFailure(userId, error)
Tareas Atómicas para 08.8 Cola
yamlCopyTAREA-08.8.1:
  Nombre: "Implementar integración con cola"
  Acción: "Crear /lib/ai/queue.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/queue.ts (usando Inngest como ejemplo):
    
    ```typescript
    /**
     * Integración con sistema de colas para generación de imágenes
     * Usando Inngest para simplicidad
     */
    
    import { Inngest } from 'inngest';
    import { generateAvatarImage } from './pipeline';
    import type { PipelineInput } from './providers/types';
    
    // Cliente de Inngest
    export const inngest = new Inngest({ 
      id: 'metamen100',
      eventKey: process.env.INNGEST_EVENT_KEY,
    });
    
    // Definir el evento
    export const imageGenerationEvent = inngest.createFunction(
      {
        id: 'generate-avatar-image',
        name: 'Generate Avatar Image',
        retries: 3,
      },
      { event: 'avatar/generate.requested' },
      async ({ event, step }) => {
        const input = event.data as PipelineInput;
        
        // Ejecutar generación
        const result = await step.run('generate-image', async () => {
          return generateAvatarImage(input);
        });
        
        // Si éxito, notificar
        if (result.success) {
          await step.run('notify-success', async () => {
            // Trigger realtime update o push notification
            console.log(`Image generated for user ${input.userId}`);
          });
        }
        
        return result;
      }
    );
    
    /**
     * Encola una solicitud de generación de imagen
     */
    export async function queueImageGeneration(input: PipelineInput): Promise<void> {
      await inngest.send({
        name: 'avatar/generate.requested',
        data: input,
      });
    }
    
    /**
     * Encola generación para múltiples usuarios (batch)
     * Usado en Judgement Night
     */
    export async function queueBatchImageGeneration(
      userIds: string[],
      trigger: PipelineInput['trigger']
    ): Promise<void> {
      const events = userIds.map(userId => ({
        name: 'avatar/generate.requested' as const,
        data: {
          userId,
          trigger,
          priority: 'normal' as const,
        },
      }));
      
      // Inngest permite enviar múltiples eventos
      await inngest.send(events);
    }
    ```

TAREA-08.8.2:
  Nombre: "Implementar estrategias de fallback"
  Acción: "Crear /lib/ai/fallback.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/fallback.ts:
    
    ```typescript
    /**
     * Estrategias de fallback para cuando la generación falla
     */
    
    import { createClient } from '@/lib/supabase/server';
    
    interface FallbackResult {
      imageUrl: string;
      isFallback: true;
      fallbackType: 'previous_image' | 'placeholder' | 'retry_scheduled';
      message: string;
    }
    
    /**
     * Obtiene la última imagen válida del usuario
     */
    export async function getPreviousImage(userId: string): Promise<string | null> {
      const supabase = await createClient();
      
      const { data } = await supabase
        .from('avatar_states')
        .select('last_image_url')
        .eq('user_id', userId)
        .single();
      
      return data?.last_image_url ?? null;
    }
    
    /**
     * URL del placeholder cuando no hay ninguna imagen
     */
    export const PLACEHOLDER_IMAGE_URL = '/images/avatar-placeholder.png';
    
    /**
     * Maneja el fallo de generación con estrategias de fallback
     */
    export async function handleGenerationFailure(
      userId: string,
      error: Error
    ): Promise<FallbackResult> {
      const supabase = await createClient();
      
      // Estrategia 1: Usar imagen anterior
      const previousImage = await getPreviousImage(userId);
      
      if (previousImage) {
        // Log del fallo
        await supabase.from('image_generation_logs').insert({
          user_id: userId,
          status: 'failed',
          error_message: error.message,
          fallback_used: 'previous_image',
        });
        
        return {
          imageUrl: previousImage,
          isFallback: true,
          fallbackType: 'previous_image',
          message: 'Tu evolución está en proceso. Mostrando última imagen.',
        };
      }
      
      // Estrategia 2: Placeholder
      return {
        imageUrl: PLACEHOLDER_IMAGE_URL,
        isFallback: true,
        fallbackType: 'placeholder',
        message: 'Generando tu avatar por primera vez...',
      };
    }
    
    /**
     * Programa un reintento de generación
     */
    export async function scheduleRetry(
      userId: string,
      delayMs: number = 3600000 // 1 hora por defecto
    ): Promise<void> {
      // En producción, esto entraría a una cola con delay
      console.log(`Retry scheduled for user ${userId} in ${delayMs}ms`);
      
      // Usando Inngest, sería algo como:
      // await inngest.send({
      //   name: 'avatar/generate.retry',
      //   data: { userId },
      //   ts: Date.now() + delayMs,
      // });
    }
    ```

SUBCAJA 08.9: Storage de Imágenes
Almacenamiento y CDN
Archivos a Crear
CopyRutas:
├── /src/lib/ai/
│   └── storage.ts                  # Funciones de storage

Tamaño Estimado: ~200 líneas
Tiempo de Generación: 30-45 minutos
Estructura del Código
Copy08.9 Storage de Imágenes
│
├── 1. ESTRATEGIA DE STORAGE
│   │
│   ├── 1.1 MVP: Supabase Storage
│   │   ├── Bucket: 'avatars'
│   │   ├── Path: {user_id}/day_{day_number}.png
│   │   ├── Público: Sí
│   │   └── CDN: Supabase incluido
│   │
│   └── 1.2 Escala: Cloudflare R2 (futuro)
│       ├── Más económico a escala
│       ├── CDN global integrado
│       └── Compatible con S3 API
│
├── 2. PROCESO DE UPLOAD
│   │
│   ├── 2.1 Flujo
│   │   1. Recibir URL de imagen de provider
│   │   2. Descargar imagen (fetch)
│   │   3. Validar (tipo, tamaño)
│   │   4. Subir a storage propio
│   │   5. Retornar URL pública
│   │
│   └── 2.2 Naming Convention
│       └── avatars/{user_id}/day_{day_number}_{timestamp}.png
│
├── 3. LIMPIEZA (Opcional)
│   │
│   └── Mantener últimas N imágenes por usuario
│       (para historial y comparación)
│
└── 4. IMPLEMENTACIÓN
    │
    ├── uploadImageToStorage(imageUrl, userId, dayNumber)
    ├── getPublicUrl(path)
    └── cleanupOldImages(userId, keepLast)
Tareas Atómicas para 08.9 Storage
yamlCopyTAREA-08.9.1:
  Nombre: "Implementar funciones de storage"
  Acción: "Crear /lib/ai/storage.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/storage.ts:
    
    ```typescript
    /**
     * Funciones de storage para imágenes generadas
     * MVP: Supabase Storage
     */
    
    import { createClient } from '@/lib/supabase/server';
    
    const BUCKET_NAME = 'avatars';
    const MAX_IMAGES_PER_USER = 100; // Mantener historial de 100 días
    
    /**
     * Genera el path para una imagen
     */
    function getImagePath(userId: string, dayNumber: number): string {
      const timestamp = Date.now();
      return `${userId}/day_${dayNumber}_${timestamp}.png`;
    }
    
    /**
     * Descarga una imagen desde URL externa
     */
    async function fetchImage(imageUrl: string): Promise<Blob> {
      const response = await fetch(imageUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status}`);
      }
      
      return response.blob();
    }
    
    /**
     * Valida que el blob sea una imagen válida
     */
    function validateImage(blob: Blob): void {
      const validTypes = ['image/png', 'image/jpeg', 'image/webp'];
      
      if (!validTypes.includes(blob.type)) {
        throw new Error(`Invalid image type: ${blob.type}`);
      }
      
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (blob.size > maxSize) {
        throw new Error(`Image too large: ${blob.size} bytes`);
      }
    }
    
    /**
     * Sube una imagen al storage y retorna la URL pública
     * @param imageUrl - URL de la imagen generada por el provider
     * @param userId - ID del usuario
     * @param dayNumber - Número del día actual
     */
    export async function uploadImageToStorage(
      imageUrl: string,
      userId: string,
      dayNumber: number
    ): Promise<string> {
      const supabase = await createClient();
      
      // Descargar imagen
      const imageBlob = await fetchImage(imageUrl);
      
      // Validar
      validateImage(imageBlob);
      
      // Generar path
      const path = getImagePath(userId, dayNumber);
      
      // Subir a Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(path, imageBlob, {
          contentType: imageBlob.type,
          upsert: false, // No sobrescribir
        });
      
      if (uploadError) {
        throw new Error(`Storage upload failed: ${uploadError.message}`);
      }
      
      // Obtener URL pública
      const { data: urlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(path);
      
      return urlData.publicUrl;
    }
    
    /**
     * Obtiene la URL pública de una imagen
     */
    export function getPublicUrl(path: string): string {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      return `${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/${path}`;
    }
    
    /**
     * Limpia imágenes antiguas, manteniendo las últimas N
     */
    export async function cleanupOldImages(
      userId: string,
      keepLast: number = MAX_IMAGES_PER_USER
    ): Promise<number> {
      const supabase = await createClient();
      
      // Listar todas las imágenes del usuario
      const { data: files, error: listError } = await supabase.storage
        .from(BUCKET_NAME)
        .list(userId, {
          sortBy: { column: 'created_at', order: 'desc' },
        });
      
      if (listError || !files) {
        console.error('Failed to list files:', listError);
        return 0;
      }
      
      // Si hay más del límite, eliminar las antiguas
      if (files.length <= keepLast) {
        return 0;
      }
      
      const filesToDelete = files
        .slice(keepLast)
        .map(f => `${userId}/${f.name}`);
      
      const { error: deleteError } = await supabase.storage
        .from(BUCKET_NAME)
        .remove(filesToDelete);
      
      if (deleteError) {
        console.error('Failed to delete old files:', deleteError);
        return 0;
      }
      
      return filesToDelete.length;
    }
    ```

TAREA-08.9.2:
  Nombre: "Crear bucket de storage en Supabase"
  Acción: "Configurar bucket 'avatars' en Supabase"
  Responsable: Manual / Antigravity
  Instrucciones: |
    1. Ir a Supabase Dashboard → Storage
    2. Crear bucket llamado 'avatars'
    3. Configurar como público
    4. Agregar política:
       
       -- Policy para que usuarios vean sus propias imágenes
       CREATE POLICY "Users can view own avatars"
       ON storage.objects FOR SELECT
       USING (
         bucket_id = 'avatars' AND
         (storage.foldername(name))[1] = auth.uid()::text
       );
       
       -- Policy para service role (upload desde backend)
       CREATE POLICY "Service role can upload"
       ON storage.objects FOR INSERT
       WITH CHECK (bucket_id = 'avatars');

SUBCAJA 08.10: Integración con Avatar State
Conexión con el Sistema Central
Archivos a Crear
CopyRutas:
├── /src/lib/ai/
│   └── integration.ts              # Funciones de integración

Tamaño Estimado: ~150 líneas
Tiempo de Generación: 20-30 minutos
Estructura del Código
Copy08.10 Integración
│
├── 1. PUNTOS DE INTEGRACIÓN
│   │
│   ├── 1.1 Desde Judgement Night
│   │   └── Al cerrar el día, encolar generación para usuarios activos
│   │
│   ├── 1.2 Desde Subida de Nivel
│   │   └── Al subir de nivel, regenerar inmediatamente
│   │
│   ├── 1.3 Desde Compra de Item
│   │   └── Al equipar item, regenerar para mostrar cambio
│   │
│   └── 1.4 Desde Dashboard (Realtime)
│   │   └── Suscripción a cambios en last_image_url
│
├── 2. ACTUALIZACIÓN DE UI
│   │
│   ├── 2.1 Realtime Subscription
│   │   └── Cuando last_image_url cambia → Actualizar avatar en UI
│   │
│   └── 2.2 Estados de Carga
│       ├── 'idle': Mostrando imagen actual
│       ├── 'generating': Spinner + mensaje
│       └── 'error': Fallback + mensaje de error
│
└── 3. IMPLEMENTACIÓN
    │
    ├── triggerImageGeneration(userId, trigger)
    ├── useAvatarImage(userId) - Hook de React
    └── subscribeToImageUpdates(userId, callback)
Tareas Atómicas para 08.10 Integración
yamlCopyTAREA-08.10.1:
  Nombre: "Implementar funciones de integración"
  Acción: "Crear /lib/ai/integration.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/lib/ai/integration.ts:
    
    ```typescript
    /**
     * Funciones de integración del sistema de IA con el resto de la app
     */
    
    import { createClient } from '@/lib/supabase/server';
    import { queueImageGeneration } from './queue';
    import type { PipelineInput } from './providers/types';
    
    /**
     * Dispara la generación de imagen para un usuario
     * Punto de entrada único para todos los triggers
     */
    export async function triggerImageGeneration(
      userId: string,
      trigger: PipelineInput['trigger'],
      options?: { priority?: PipelineInput['priority'] }
    ): Promise<void> {
      const priority = options?.priority ?? getPriorityForTrigger(trigger);
      
      await queueImageGeneration({
        userId,
        trigger,
        priority,
      });
      
      // Log de disparo
      const supabase = await createClient();
      await supabase.from('activity_logs').insert({
        user_id: userId,
        action: 'image_generation_triggered',
        details: { trigger, priority },
      });
    }
    
    /**
     * Determina la prioridad basada en el trigger
     */
    function getPriorityForTrigger(trigger: PipelineInput['trigger']): PipelineInput['priority'] {
      switch (trigger) {
        case 'level_up':
        case 'item_purchase':
          return 'high'; // Usuario probablemente esperando
        case 'manual':
          return 'normal';
        case 'judgement':
        default:
          return 'normal'; // Batch nocturno
      }
    }
    
    /**
     * Dispara generación para múltiples usuarios (usado en Judgement Night)
     */
    export async function triggerBatchGeneration(
      userIds: string[],
      trigger: PipelineInput['trigger'] = 'judgement'
    ): Promise<void> {
      // Importar aquí para evitar circular dependency
      const { queueBatchImageGeneration } = await import('./queue');
      await queueBatchImageGeneration(userIds, trigger);
    }
    
    /**
     * Verifica si un usuario tiene una generación pendiente
     */
    export async function hasP endingGeneration(userId: string): Promise<boolean> {
      const supabase = await createClient();
      
      const { data } = await supabase
        .from('image_generation_logs')
        .select('id')
        .eq('user_id', userId)
        .eq('status', 'pending')
        .limit(1);
      
      return (data?.length ?? 0) > 0;
    }
    ```

TAREA-08.10.2:
  Nombre: "Crear hook de React para imagen de avatar"
  Acción: "Crear /hooks/useAvatarImage.ts"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea /src/hooks/useAvatarImage.ts:
    
    ```typescript
    'use client';
    
    import { useEffect, useState } from 'react';
    import { createClient } from '@/lib/supabase/client';
    
    interface AvatarImageState {
      imageUrl: string | null;
      isGenerating: boolean;
      lastUpdated: Date | null;
      error: string | null;
    }
    
    const PLACEHOLDER_IMAGE = '/images/avatar-placeholder.png';
    
    /**
     * Hook para obtener y suscribirse a cambios en la imagen del avatar
     */
    export function useAvatarImage(userId: string | undefined) {
      const [state, setState] = useState<AvatarImageState>({
        imageUrl: null,
        isGenerating: false,
        lastUpdated: null,
        error: null,
      });
      
      useEffect(() => {
        if (!userId) return;
        
        const supabase = createClient();
        
        // Fetch inicial
        const fetchInitial = async () => {
          const { data, error } = await supabase
            .from('avatar_states')
            .select('last_image_url, last_image_generated_at')
            .eq('user_id', userId)
            .single();
          
          if (error) {
            setState(prev => ({ ...prev, error: error.message }));
            return;
          }
          
          setState({
            imageUrl: data?.last_image_url ?? PLACEHOLDER_IMAGE,
            isGenerating: false,
            lastUpdated: data?.last_image_generated_at 
              ? new Date(data.last_image_generated_at) 
              : null,
            error: null,
          });
        };
        
        fetchInitial();
        
        // Suscripción realtime
        const channel = supabase
          .channel(`avatar-image-${userId}`)
          .on(
            'postgres_changes',
            {
              event: 'UPDATE',
              schema: 'public',
              table: 'avatar_states',
              filter: `user_id=eq.${userId}`,
            },
            (payload) => {
              const newUrl = payload.new.last_image_url;
              const newTimestamp = payload.new.last_image_generated_at;
              
              setState(prev => ({
                ...prev,
                imageUrl: newUrl ?? prev.imageUrl,
                isGenerating: false,
                lastUpdated: newTimestamp ? new Date(newTimestamp) : prev.lastUpdated,
              }));
            }
          )
          .subscribe();
        
        return () => {
          supabase.removeChannel(channel);
        };
      }, [userId]);
      
      // Función para marcar como generando (llamar antes de trigger)
      const setGenerating = () => {
        setState(prev => ({ ...prev, isGenerating: true }));
      };
      
      return {
        ...state,
        setGenerating,
        displayUrl: state.imageUrl ?? PLACEHOLDER_IMAGE,
      };
    }
    ```

TAREA-08.10.3:
  Nombre: "Crear tabla image_generation_logs"
  Acción: "Agregar migración para tabla de logs"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea migración SQL para /supabase/migrations/:
    
    ```sql
    -- Tabla para tracking de generación de imágenes
    CREATE TABLE IF NOT EXISTS image_generation_logs (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
      day_number INTEGER NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending' 
        CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
      provider TEXT,
      prompt_used TEXT,
      generation_time_ms INTEGER,
      image_url TEXT,
      error_message TEXT,
      fallback_used TEXT,
      trigger TEXT NOT NULL,
      retry_count INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      completed_at TIMESTAMPTZ,
      
      CONSTRAINT valid_trigger CHECK (
        trigger IN ('judgement', 'level_up', 'item_purchase', 'manual')
      )
    );
    
    -- Índices
    CREATE INDEX idx_image_gen_logs_user ON image_generation_logs(user_id);
    CREATE INDEX idx_image_gen_logs_status ON image_generation_logs(status);
    CREATE INDEX idx_image_gen_logs_created ON image_generation_logs(created_at DESC);
    
    -- RLS
    ALTER TABLE image_generation_logs ENABLE ROW LEVEL SECURITY;
    
    CREATE POLICY "Users can view own generation logs"
      ON image_generation_logs FOR SELECT
      USING (auth.uid() = user_id);
    
    CREATE POLICY "Service role can manage all logs"
      ON image_generation_logs FOR ALL
      USING (auth.role() = 'service_role');
    ```

RESUMEN DE CAJA 08: IA GENERATIVA
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 08 - RESUMEN DE ENTREGABLES                              ║
║                                                                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  SUBCAJA                    │ ARCHIVOS                    │ TAREAS │ TIEMPO EST.    ║
║  ──────────────────────────┼─────────────────────────────┼────────┼──────────────  ║
║  08.1 Pipeline             │ /lib/ai/pipeline.ts + 6     │   10   │ 90-120 min    ║
║  08.2 Prompts System       │ /lib/ai/prompts/*.ts        │    5   │ 60-90 min     ║
║  08.3 Identity Tokens      │ tokens/identity.ts          │    2   │ 30-45 min     ║
║  08.4 Vector Tokens        │ tokens/body,face,aura.ts    │    3   │ 60-90 min     ║
║  08.5 Item Tokens          │ tokens/attire.ts            │    1   │ 30-45 min     ║
║  08.6 Environment Tokens   │ tokens/environment.ts       │    1   │ 30-45 min     ║
║  08.7 Degradation          │ tokens/degradation.ts       │    2   │ 20-30 min     ║
║  08.8 Queue & Resilience   │ /lib/ai/queue,fallback.ts   │    2   │ 45-60 min     ║
║  08.9 Storage              │ /lib/ai/storage.ts          │    2   │ 30-45 min     ║
║  08.10 Integration         │ /lib/ai/integration.ts      │    3   │ 20-30 min     ║
║  ──────────────────────────┼─────────────────────────────┼────────┼──────────────  ║
║  TOTAL                     │ ~15 archivos                │   31   │ 7-10 horas    ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ACTUALIZACIÓN DEL PROGRESO TOTAL
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                         PROGRESO DE DESGLOSE ATÓMICO                                 ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  📦 CAJA 01: Documentación Fundacional    │ 9 subcajas  │  92 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 02: Infraestructura y DevOps     │ 8 subcajas  │  50 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 03: Base de Datos y Backend      │ 8 subcajas  │  63 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 04: Motor Core (Lógica Pura)     │ 10 subcajas │  82 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 05: Autenticación y Onboarding   │ 7 subcajas  │  42 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 06: Dashboard y UI               │ 9 subcajas  │  42 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 07: Arsenal de Herramientas      │ 10 subcajas │  77 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 08: IA Generativa                │ 10 subcajas │  31 tareas │ ✅ COMPLETO  ║
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  📦 CAJA 09: Economía y Tienda            │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 10: Monetización (Stripe)        │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 11: Notificaciones y Realtime    │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 12: Observabilidad y Calidad     │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 13: Lanzamiento y Operaciones    │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  TOTAL DESGLOSADO HASTA AHORA             │ 71 subcajas │ 479 tareas │ 8/13 CAJAS   ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝