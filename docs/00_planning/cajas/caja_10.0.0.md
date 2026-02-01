📦 CAJA 10: MONETIZACIÓN (STRIPE)
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 10: MONETIZACIÓN (STRIPE)                                 ║
║                                                                                      ║
║    "El dinero es la sangre del sistema;                                             ║
║     sin flujo de pagos, el avatar muere antes de nacer"                             ║
║                                                                                      ║
║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
║    │                                                                            │   ║
║    │   💳 10.1 Setup       💳 10.2 Trial      💳 10.3 Checkout                 │   ║
║    │   Configuración       Sistema de         Flujo de Pago                     │   ║
║    │   de Stripe           Prueba             y Suscripción                     │   ║
║    │                                                                            │   ║
║    │   💳 10.4 Webhooks    💳 10.5 Limbo     💳 10.6 BTC                       │   ║
║    │   Eventos de          Modo de           Compra con                         │   ║
║    │   Stripe              Suspensión        Dinero Real                        │   ║
║    │                                                                            │   ║
║    │   💳 10.7 Portal      💳 10.8 Refunds   💳 10.9 Analytics                 │   ║
║    │   Customer Portal     Reembolsos y      Métricas de                        │   ║
║    │   de Stripe           Disputas          Revenue                            │   ║
║    │                                                                            │   ║
║    └────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                      ║
║    Responsable Docs: Claude │ Responsable Código: Antigravity                       ║
║    Dependencias: Caja 02 (Infra), Caja 03 (DB), Caja 05 (Auth)                     ║
║    Tiempo Estimado Total: 12-16 horas de desarrollo                                 ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ÍNDICE DE SUBCAJAS

SUBCAJA 10.1: Configuración de Stripe
SUBCAJA 10.2: Sistema de Trial
SUBCAJA 10.3: Checkout y Suscripciones
SUBCAJA 10.4: Webhooks de Stripe
SUBCAJA 10.5: Modo Limbo
SUBCAJA 10.6: Compra de BTC con Dinero Real
SUBCAJA 10.7: Customer Portal
SUBCAJA 10.8: Reembolsos y Disputas
SUBCAJA 10.9: Analytics de Revenue


SUBCAJA 10.1: Configuración de Stripe
Setup Inicial y Productos
Contexto del Negocio (desde cuestionario1)
yamlCopyModelo de Monetización: Freemium Progresivo
  - Trial: 5 días GRATIS (termina al intentar iniciar día 6)
  - Mensual: $19.90 USD/mes
  - Anual: $140 USD/año (40% descuento)
  
Punto de Conversión: Día 6 (Hito "Alucín")
  - El usuario ve su primer cambio visual significativo
  - Para continuar viendo y evolucionando, debe pagar

Compras Adicionales:
  - Packs de BTC (moneda virtual)
  - Items premium exclusivos (futuro)
Estructura de Archivos
Copysrc/
├── lib/
│   └── stripe/
│       ├── client.ts              # Cliente de Stripe (server-side)
│       ├── config.ts              # Configuración de productos/precios
│       ├── checkout.ts            # Funciones de checkout
│       ├── webhooks.ts            # Procesamiento de webhooks
│       ├── subscriptions.ts       # Gestión de suscripciones
│       ├── customer.ts            # Gestión de clientes
│       └── btc-packs.ts           # Compra de BTC
├── app/
│   └── api/
│       └── webhooks/
│           └── stripe/
│               └── route.ts       # Endpoint de webhooks
├── actions/
│   └── payments/
│       ├── create-checkout.ts     # Crear sesión de checkout
│       ├── create-portal.ts       # Crear sesión de portal
│       ├── cancel-subscription.ts # Cancelar suscripción
│       └── purchase-btc.ts        # Comprar BTC
└── components/
    └── payments/
        ├── PricingCard.tsx        # Card de precio
        ├── CheckoutButton.tsx     # Botón de checkout
        ├── SubscriptionStatus.tsx # Estado de suscripción
        └── BtcPackCard.tsx        # Card de pack de BTC
Tareas Atómicas para 10.1
yamlCopyTAREA-10.1.1:
  Nombre: "Crear cuenta de Stripe y obtener API keys"
  Tipo: Manual (Operador)
  Acción: |
    1. Ir a https://dashboard.stripe.com/register
    2. Crear cuenta con email de negocio
    3. Completar verificación de identidad
    4. Obtener API keys de Test Mode:
       - Publishable key (pk_test_...)
       - Secret key (sk_test_...)
    5. Guardar en gestor de secretos
  Output: "API keys de test disponibles"
  Criterio de Éxito: "Puedo hacer llamadas a Stripe API"

TAREA-10.1.2:
  Nombre: "Configurar variables de entorno de Stripe"
  Tipo: Código (Antigravity)
  Acción: "Agregar variables a .env.local y validar con Zod"
  Archivos:
    - .env.local
    - .env.example
    - src/lib/env.ts
  Contenido .env.local: |
    # Stripe
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
    STRIPE_SECRET_KEY=sk_test_...
    STRIPE_WEBHOOK_SECRET=whsec_...
    
    # Stripe Product IDs (se crean en tarea siguiente)
    STRIPE_PRODUCT_SUBSCRIPTION_ID=prod_...
    STRIPE_PRICE_MONTHLY_ID=price_...
    STRIPE_PRICE_YEARLY_ID=price_...
  Contenido env.ts (agregar): |
    // Stripe
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().startsWith('pk_'),
    STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
    STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_'),
  Criterio de Éxito: "La app arranca sin errores de env"

TAREA-10.1.3:
  Nombre: "Instalar dependencias de Stripe"
  Tipo: Comando (Antigravity)
  Comando: "pnpm add stripe @stripe/stripe-js"
  Criterio de Éxito: "Dependencias instaladas en package.json"

TAREA-10.1.4:
  Nombre: "Crear cliente de Stripe (server-side)"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/stripe/client.ts"
  Contenido: |
    import Stripe from 'stripe';
    import { env } from '@/lib/env';

    if (!env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not defined');
    }

    export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-04-10', // Usar versión más reciente estable
      typescript: true,
      appInfo: {
        name: 'MetaMen100',
        version: '1.0.0',
        url: 'https://metamen100.com',
      },
    });

    // Helper para verificar modo
    export const isTestMode = env.STRIPE_SECRET_KEY.startsWith('sk_test_');
  Criterio de Éxito: "Archivo creado y exporta cliente"

TAREA-10.1.5:
  Nombre: "Crear productos en Stripe Dashboard"
  Tipo: Manual (Operador)
  Acción: |
    1. Ir a Stripe Dashboard > Products
    2. Crear producto "MetaMen100 Elite"
       - Descripción: "Acceso completo al protocolo de 100 días"
       - Imagen: Logo de MetaMen100
    3. Crear precio mensual:
       - $19.90 USD
       - Recurring/Monthly
       - Lookup key: "metamen_monthly"
    4. Crear precio anual:
       - $140.00 USD (equivale a ~$11.67/mes, 40% descuento)
       - Recurring/Yearly
       - Lookup key: "metamen_yearly"
    5. Anotar IDs de producto y precios
  Output: |
    STRIPE_PRODUCT_SUBSCRIPTION_ID=prod_xxxxx
    STRIPE_PRICE_MONTHLY_ID=price_xxxxx
    STRIPE_PRICE_YEARLY_ID=price_xxxxx
  Criterio de Éxito: "Productos visibles en Dashboard de Stripe"

TAREA-10.1.6:
  Nombre: "Crear productos de BTC Packs en Stripe"
  Tipo: Manual (Operador)
  Acción: |
    1. Crear producto "BTC Pack - Starter"
       - One-time payment
       - $4.99 USD
       - Metadata: { btc_amount: 5000 }
       - Lookup key: "btc_pack_starter"
    2. Crear producto "BTC Pack - Popular"
       - One-time payment
       - $9.99 USD
       - Metadata: { btc_amount: 12000 } (20% bonus)
       - Lookup key: "btc_pack_popular"
    3. Crear producto "BTC Pack - Magnate"
       - One-time payment
       - $29.99 USD
       - Metadata: { btc_amount: 50000 } (66% bonus)
       - Lookup key: "btc_pack_magnate"
  Output: "3 productos de BTC creados con sus price IDs"

TAREA-10.1.7:
  Nombre: "Crear configuración de productos/precios"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/stripe/config.ts"
  Contenido: |
    import { env } from '@/lib/env';

    export const STRIPE_CONFIG = {
      // Suscripción principal
      subscription: {
        productId: env.STRIPE_PRODUCT_SUBSCRIPTION_ID,
        prices: {
          monthly: {
            id: env.STRIPE_PRICE_MONTHLY_ID,
            amount: 1990, // centavos
            currency: 'usd',
            interval: 'month' as const,
            displayPrice: '$19.90',
            displayInterval: 'mes',
          },
          yearly: {
            id: env.STRIPE_PRICE_YEARLY_ID,
            amount: 14000, // centavos
            currency: 'usd',
            interval: 'year' as const,
            displayPrice: '$140.00',
            displayInterval: 'año',
            savings: '40%',
          },
        },
      },

      // Packs de BTC
      btcPacks: {
        starter: {
          priceId: env.STRIPE_PRICE_BTC_STARTER_ID,
          btcAmount: 5000,
          price: 499,
          displayPrice: '$4.99',
          bonus: 0,
        },
        popular: {
          priceId: env.STRIPE_PRICE_BTC_POPULAR_ID,
          btcAmount: 12000,
          price: 999,
          displayPrice: '$9.99',
          bonus: 20, // 20% extra
          featured: true,
        },
        magnate: {
          priceId: env.STRIPE_PRICE_BTC_MAGNATE_ID,
          btcAmount: 50000,
          price: 2999,
          displayPrice: '$29.99',
          bonus: 66, // 66% extra
        },
      },

      // Trial
      trial: {
        days: 5, // 5 días de trial (termina día 6)
      },

      // URLs
      urls: {
        success: '/dashboard?payment=success',
        cancel: '/pricing?payment=cancelled',
        portalReturn: '/profile/subscription',
      },
    } as const;

    export type SubscriptionInterval = 'monthly' | 'yearly';
    export type BtcPackType = keyof typeof STRIPE_CONFIG.btcPacks;
  Criterio de Éxito: "Configuración exportada y tipada"

TAREA-10.1.8:
  Nombre: "Crear helper de Stripe para cliente (browser)"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/stripe/client-stripe.ts"
  Contenido: |
    import { loadStripe, Stripe } from '@stripe/stripe-js';
    import { env } from '@/lib/env';

    let stripePromise: Promise<Stripe | null>;

    export const getStripe = () => {
      if (!stripePromise) {
        stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
      }
      return stripePromise;
    };
  Criterio de Éxito: "Helper disponible para componentes cliente"

SUBCAJA 10.2: Sistema de Trial
5 Días de Prueba Gratuita
Lógica del Trial (desde cuestionario1)
yamlCopyDuración: 5 días
Inicio: Al completar onboarding
Fin: Al intentar iniciar el día 6

Qué INCLUYE el trial:
  - Acceso completo a todas las herramientas
  - Generación de imagen diaria
  - Sistema de vectores completo
  - Tareas del protocolo

Qué pasa al terminar:
  - Se bloquea la evolución
  - Avatar entra en "estasis" (gris)
  - No se generan nuevas imágenes
  - Se muestra pantalla de pago con preview borroso del avatar nuevo
Tareas Atómicas para 10.2
yamlCopyTAREA-10.2.1:
  Nombre: "Agregar campo trial_ends_at a tabla subscriptions"
  Tipo: Migración SQL (Antigravity)
  Archivo: "supabase/migrations/20240120_add_trial_fields.sql"
  Contenido: |
    -- Agregar campos de trial a subscriptions
    ALTER TABLE subscriptions
    ADD COLUMN IF NOT EXISTS trial_ends_at TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS trial_started_at TIMESTAMPTZ;

    -- Comentarios
    COMMENT ON COLUMN subscriptions.trial_ends_at IS 
      'Fecha/hora exacta cuando termina el trial (5 días después del registro)';
    COMMENT ON COLUMN subscriptions.trial_started_at IS 
      'Fecha/hora cuando inició el trial';

    -- Actualizar usuarios existentes sin trial
    UPDATE subscriptions
    SET 
      trial_started_at = created_at,
      trial_ends_at = created_at + INTERVAL '5 days'
    WHERE status = 'trial' AND trial_ends_at IS NULL;
  Comando: "pnpm supabase db push"
  Criterio de Éxito: "Columnas agregadas a la tabla"

TAREA-10.2.2:
  Nombre: "Actualizar función de creación de usuario para incluir trial"
  Tipo: Migración SQL (Antigravity)
  Archivo: "supabase/migrations/20240121_update_new_user_function.sql"
  Contenido: |
    -- Actualizar función para incluir trial automático
    CREATE OR REPLACE FUNCTION handle_new_user()
    RETURNS TRIGGER AS $$
    DECLARE
      v_nickname TEXT;
      v_user_count INTEGER;
    BEGIN
      -- Generar nickname secuencial
      SELECT COUNT(*) + 1 INTO v_user_count FROM profiles;
      v_nickname := 'METAMEN-' || LPAD(v_user_count::TEXT, 4, '0');

      -- Crear profile
      INSERT INTO profiles (id, nickname, email)
      VALUES (NEW.id, v_nickname, NEW.email);

      -- Crear avatar_state
      INSERT INTO avatar_states (user_id)
      VALUES (NEW.id);

      -- Crear wallet
      INSERT INTO wallets (user_id, btc_balance)
      VALUES (NEW.id, 0);

      -- Crear subscription con trial de 5 días
      INSERT INTO subscriptions (
        user_id, 
        status, 
        trial_started_at, 
        trial_ends_at
      )
      VALUES (
        NEW.id, 
        'trial', 
        NOW(), 
        NOW() + INTERVAL '5 days'
      );

      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;
  Criterio de Éxito: "Nuevos usuarios tienen trial de 5 días automático"

TAREA-10.2.3:
  Nombre: "Crear función para verificar estado de trial"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/core/trial.ts"
  Contenido: |
    import type { Subscription } from '@/types/database';

    export interface TrialStatus {
      isInTrial: boolean;
      isTrialExpired: boolean;
      daysRemaining: number;
      hoursRemaining: number;
      trialEndsAt: Date | null;
      canAccessFeatures: boolean;
    }

    /**
     * Calcula el estado del trial de un usuario
     */
    export function getTrialStatus(subscription: Subscription): TrialStatus {
      const now = new Date();
      
      // Si no está en trial, no aplica
      if (subscription.status !== 'trial') {
        return {
          isInTrial: false,
          isTrialExpired: subscription.status === 'limbo' || subscription.status === 'cancelled',
          daysRemaining: 0,
          hoursRemaining: 0,
          trialEndsAt: null,
          canAccessFeatures: subscription.status === 'active',
        };
      }

      // Calcular tiempo restante
      const trialEndsAt = subscription.trial_ends_at 
        ? new Date(subscription.trial_ends_at) 
        : null;

      if (!trialEndsAt) {
        // Sin fecha de fin = trial inválido
        return {
          isInTrial: false,
          isTrialExpired: true,
          daysRemaining: 0,
          hoursRemaining: 0,
          trialEndsAt: null,
          canAccessFeatures: false,
        };
      }

      const msRemaining = trialEndsAt.getTime() - now.getTime();
      const hoursRemaining = Math.max(0, Math.floor(msRemaining / (1000 * 60 * 60)));
      const daysRemaining = Math.max(0, Math.ceil(hoursRemaining / 24));

      const isTrialExpired = msRemaining <= 0;

      return {
        isInTrial: !isTrialExpired,
        isTrialExpired,
        daysRemaining,
        hoursRemaining,
        trialEndsAt,
        canAccessFeatures: !isTrialExpired,
      };
    }

    /**
     * Verifica si el usuario puede continuar al siguiente día
     * REGLA: El trial termina al intentar iniciar el día 6
     */
    export function canAdvanceToNextDay(
      subscription: Subscription,
      currentDay: number
    ): { canAdvance: boolean; reason?: string } {
      // Si está activo (pagó), siempre puede avanzar
      if (subscription.status === 'active') {
        return { canAdvance: true };
      }

      // Si está en trial
      if (subscription.status === 'trial') {
        const trialStatus = getTrialStatus(subscription);
        
        // Trial expirado por tiempo
        if (trialStatus.isTrialExpired) {
          return { 
            canAdvance: false, 
            reason: 'TRIAL_EXPIRED_TIME' 
          };
        }

        // Día 6 o superior requiere pago (el trial cubre días 1-5)
        if (currentDay >= 5) { // Si está en día 5, el siguiente sería día 6
          return { 
            canAdvance: false, 
            reason: 'TRIAL_EXPIRED_DAY_LIMIT' 
          };
        }

        return { canAdvance: true };
      }

      // Limbo o cancelled
      return { 
        canAdvance: false, 
        reason: 'SUBSCRIPTION_INACTIVE' 
      };
    }
  Criterio de Éxito: "Funciones exportadas y testeables"

TAREA-10.2.4:
  Nombre: "Crear componente de countdown de trial"
  Tipo: Código (Antigravity)
  Archivo: "src/components/payments/TrialCountdown.tsx"
  Contenido: |
    'use client';

    import { useEffect, useState } from 'react';
    import { Clock, AlertTriangle } from 'lucide-react';
    import { cn } from '@/lib/utils';
    import type { TrialStatus } from '@/lib/core/trial';

    interface TrialCountdownProps {
      trialStatus: TrialStatus;
      className?: string;
    }

    export function TrialCountdown({ trialStatus, className }: TrialCountdownProps) {
      const [timeLeft, setTimeLeft] = useState(trialStatus.hoursRemaining);

      useEffect(() => {
        if (!trialStatus.isInTrial || !trialStatus.trialEndsAt) return;

        const interval = setInterval(() => {
          const now = new Date();
          const msRemaining = trialStatus.trialEndsAt!.getTime() - now.getTime();
          const hours = Math.max(0, Math.floor(msRemaining / (1000 * 60 * 60)));
          setTimeLeft(hours);

          if (hours <= 0) {
            clearInterval(interval);
          }
        }, 60000); // Actualizar cada minuto

        return () => clearInterval(interval);
      }, [trialStatus]);

      if (!trialStatus.isInTrial) return null;

      const isUrgent = trialStatus.daysRemaining <= 1;

      return (
        <div
          className={cn(
            'flex items-center gap-2 px-3 py-2 rounded-lg text-sm',
            isUrgent 
              ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
            className
          )}
        >
          {isUrgent ? (
            <AlertTriangle className="w-4 h-4" />
          ) : (
            <Clock className="w-4 h-4" />
          )}
          <span>
            {trialStatus.daysRemaining > 0 ? (
              <>
                Trial: <strong>{trialStatus.daysRemaining}</strong> día
                {trialStatus.daysRemaining !== 1 ? 's' : ''} restante
                {trialStatus.daysRemaining !== 1 ? 's' : ''}
              </>
            ) : (
              <>
                Trial: <strong>{timeLeft}</strong> hora
                {timeLeft !== 1 ? 's' : ''} restante
                {timeLeft !== 1 ? 's' : ''}
              </>
            )}
          </span>
        </div>
      );
    }
  Criterio de Éxito: "Componente renderiza countdown correcto"

TAREA-10.2.5:
  Nombre: "Crear pantalla de trial expirado"
  Tipo: Código (Antigravity)
  Archivo: "src/components/payments/TrialExpiredModal.tsx"
  Contenido: |
    'use client';

    import { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Lock, Sparkles, ArrowRight } from 'lucide-react';
    import { Button } from '@/components/ui/Button';
    import { STRIPE_CONFIG } from '@/lib/stripe/config';
    import { createCheckoutSession } from '@/actions/payments/create-checkout';

    interface TrialExpiredModalProps {
      avatarPreviewUrl?: string; // Preview borroso del avatar día 6
    }

    export function TrialExpiredModal({ avatarPreviewUrl }: TrialExpiredModalProps) {
      const [isLoading, setIsLoading] = useState(false);
      const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

      const handleSubscribe = async () => {
        setIsLoading(true);
        try {
          const result = await createCheckoutSession({ interval: selectedPlan });
          if (result.success && result.url) {
            window.location.href = result.url;
          }
        } catch (error) {
          console.error('Checkout error:', error);
        } finally {
          setIsLoading(false);
        }
      };

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="max-w-lg w-full bg-bg-secondary rounded-2xl p-8 border border-white/10"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 mb-4">
                <Lock className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Tu Evolución Está en Pausa
              </h2>
              <p className="text-text-secondary">
                Has completado 5 días de prueba. Tu avatar está listo para el siguiente nivel.
              </p>
            </div>

            {/* Preview del avatar (borroso) */}
            {avatarPreviewUrl && (
              <div className="relative mb-8">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={avatarPreviewUrl}
                    alt="Tu siguiente nivel"
                    className="w-full blur-lg brightness-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                      <p className="text-white font-medium">Nivel 3: Alucín</p>
                      <p className="text-sm text-white/60">Desbloqueado</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Opciones de precio */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={cn(
                  'p-4 rounded-xl border-2 text-left transition-all',
                  selectedPlan === 'monthly'
                    ? 'border-accent-gold bg-accent-gold/10'
                    : 'border-white/10 hover:border-white/20'
                )}
              >
                <p className="text-sm text-text-secondary mb-1">Mensual</p>
                <p className="text-xl font-bold text-white">
                  {STRIPE_CONFIG.subscription.prices.monthly.displayPrice}
                  <span className="text-sm font-normal text-text-secondary">/mes</span>
                </p>
              </button>

              <button
                onClick={() => setSelectedPlan('yearly')}
                className={cn(
                  'p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden',
                  selectedPlan === 'yearly'
                    ? 'border-accent-gold bg-accent-gold/10'
                    : 'border-white/10 hover:border-white/20'
                )}
              >
                <div className="absolute top-0 right-0 bg-green-500 text-xs px-2 py-0.5 rounded-bl font-medium">
                  -40%
                </div>
                <p className="text-sm text-text-secondary mb-1">Anual</p>
                <p className="text-xl font-bold text-white">
                  {STRIPE_CONFIG.subscription.prices.yearly.displayPrice}
                  <span className="text-sm font-normal text-text-secondary">/año</span>
                </p>
              </button>
            </div>

            {/* Botón de acción */}
            <Button
              onClick={handleSubscribe}
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                'Procesando...'
              ) : (
                <>
                  Continuar Evolución
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>

            {/* Garantía */}
            <p className="text-center text-xs text-text-secondary mt-4">
              Cancela cuando quieras. Sin compromisos.
            </p>
          </motion.div>
        </motion.div>
      );
    }
  Criterio de Éxito: "Modal se muestra cuando trial expira"

TAREA-10.2.6:
  Nombre: "Integrar verificación de trial en Judgement Night"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/judgement/processor.ts (modificar)"
  Modificación: |
    // En executeJudgementNight, agregar verificación de trial ANTES de avanzar día

    import { canAdvanceToNextDay } from '@/lib/core/trial';

    // Dentro de la función, antes de avanzar el día:
    
    // VERIFICAR SI PUEDE AVANZAR (Trial check)
    const advanceCheck = canAdvanceToNextDay(
      context.subscription,
      context.avatarState.current_day
    );

    if (!advanceCheck.canAdvance) {
      // No avanzar el día, marcar como bloqueado
      await supabase
        .from('subscriptions')
        .update({ 
          status: 'limbo',
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId);

      // Notificar al usuario
      await notificationQueue.add('trial-expired', {
        userId,
        reason: advanceCheck.reason,
      });

      return {
        ...result,
        blocked: true,
        blockReason: advanceCheck.reason,
      };
    }

    // Continuar con el flujo normal...
  Criterio de Éxito: "Judgement Night no avanza si trial expiró"

TAREA-10.2.7:
  Nombre: "Crear cron job para verificar trials expirados"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/jobs/check-expired-trials.ts"
  Contenido: |
    import { createClient } from '@/lib/supabase/server';
    import { logger } from '@/lib/logger';

    /**
     * Job que se ejecuta cada hora para marcar trials expirados
     * y mover usuarios a modo limbo
     */
    export async function checkExpiredTrials() {
      const supabase = await createClient();
      const now = new Date().toISOString();

      logger.info({ action: 'check_expired_trials_start' });

      // Encontrar usuarios en trial que han expirado
      const { data: expiredTrials, error } = await supabase
        .from('subscriptions')
        .select('user_id, trial_ends_at')
        .eq('status', 'trial')
        .lt('trial_ends_at', now);

      if (error) {
        logger.error({ action: 'check_expired_trials_error', error: error.message });
        throw error;
      }

      if (!expiredTrials?.length) {
        logger.info({ action: 'check_expired_trials_none' });
        return { processed: 0 };
      }

      // Actualizar a limbo en batch
      const userIds = expiredTrials.map(t => t.user_id);

      const { error: updateError } = await supabase
        .from('subscriptions')
        .update({ 
          status: 'limbo',
          limbo_started_at: now,
        })
        .in('user_id', userIds);

      if (updateError) {
        logger.error({ action: 'check_expired_trials_update_error', error: updateError.message });
        throw updateError;
      }

      logger.info({ 
        action: 'check_expired_trials_complete', 
        processed: userIds.length 
      });

      return { processed: userIds.length };
    }
  Criterio de Éxito: "Job puede ejecutarse y actualiza estados"

TAREA-10.2.8:
  Nombre: "Registrar job de trials en Inngest"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/inngest/functions.ts (agregar)"
  Contenido: |
    import { inngest } from './client';
    import { checkExpiredTrials } from '@/lib/jobs/check-expired-trials';

    export const checkExpiredTrialsJob = inngest.createFunction(
      { id: 'check-expired-trials' },
      { cron: '0 * * * *' }, // Cada hora
      async ({ event, step }) => {
        const result = await step.run('check-trials', async () => {
          return await checkExpiredTrials();
        });

        return result;
      }
    );
  Criterio de Éxito: "Job registrado y programado"

TAREA-10.2.9:
  Nombre: "Escribir tests para sistema de trial"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/core/__tests__/trial.test.ts"
  Contenido: |
    import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
    import { getTrialStatus, canAdvanceToNextDay } from '../trial';
    import type { Subscription } from '@/types/database';

    describe('Trial System', () => {
      beforeEach(() => {
        vi.useFakeTimers();
      });

      afterEach(() => {
        vi.useRealTimers();
      });

      describe('getTrialStatus', () => {
        it('should return active trial with days remaining', () => {
          const now = new Date('2024-01-15T12:00:00Z');
          vi.setSystemTime(now);

          const subscription: Subscription = {
            id: '1',
            user_id: 'user-1',
            status: 'trial',
            trial_started_at: '2024-01-13T12:00:00Z',
            trial_ends_at: '2024-01-18T12:00:00Z', // 3 días después
            created_at: '2024-01-13T12:00:00Z',
          };

          const status = getTrialStatus(subscription);

          expect(status.isInTrial).toBe(true);
          expect(status.isTrialExpired).toBe(false);
          expect(status.daysRemaining).toBe(3);
          expect(status.canAccessFeatures).toBe(true);
        });

        it('should return expired trial when past end date', () => {
          const now = new Date('2024-01-20T12:00:00Z');
          vi.setSystemTime(now);

          const subscription: Subscription = {
            id: '1',
            user_id: 'user-1',
            status: 'trial',
            trial_started_at: '2024-01-13T12:00:00Z',
            trial_ends_at: '2024-01-18T12:00:00Z', // Ya pasó
            created_at: '2024-01-13T12:00:00Z',
          };

          const status = getTrialStatus(subscription);

          expect(status.isInTrial).toBe(false);
          expect(status.isTrialExpired).toBe(true);
          expect(status.daysRemaining).toBe(0);
          expect(status.canAccessFeatures).toBe(false);
        });

        it('should return canAccessFeatures true for active subscription', () => {
          const subscription: Subscription = {
            id: '1',
            user_id: 'user-1',
            status: 'active',
            stripe_subscription_id: 'sub_xxx',
            created_at: '2024-01-13T12:00:00Z',
          };

          const status = getTrialStatus(subscription);

          expect(status.isInTrial).toBe(false);
          expect(status.canAccessFeatures).toBe(true);
        });
      });

      describe('canAdvanceToNextDay', () => {
        it('should allow advance for active subscription', () => {
          const subscription: Subscription = {
            id: '1',
            user_id: 'user-1',
            status: 'active',
            created_at: '2024-01-13T12:00:00Z',
          };

          const result = canAdvanceToNextDay(subscription, 50);
          expect(result.canAdvance).toBe(true);
        });

        it('should block at day 5 for trial (day 6 requires payment)', () => {
          const now = new Date('2024-01-15T12:00:00Z');
          vi.setSystemTime(now);

          const subscription: Subscription = {
            id: '1',
            user_id: 'user-1',
            status: 'trial',
            trial_started_at: '2024-01-13T12:00:00Z',
            trial_ends_at: '2024-01-18T12:00:00Z',
            created_at: '2024-01-13T12:00:00Z',
          };

          // En día 5, intentando avanzar a día 6
          const result = canAdvanceToNextDay(subscription, 5);
          
          expect(result.canAdvance).toBe(false);
          expect(result.reason).toBe('TRIAL_EXPIRED_DAY_LIMIT');
        });

        it('should allow advance at day 4 for trial', () => {
          const now = new Date('2024-01-15T12:00:00Z');
          vi.setSystemTime(now);

          const subscription: Subscription = {
            id: '1',
            user_id: 'user-1',
            status: 'trial',
            trial_started_at: '2024-01-13T12:00:00Z',
            trial_ends_at: '2024-01-18T12:00:00Z',
            created_at: '2024-01-13T12:00:00Z',
          };

          const result = canAdvanceToNextDay(subscription, 4);
          expect(result.canAdvance).toBe(true);
        });
      });
    });
  Criterio de Éxito: "Tests pasan con vitest"

SUBCAJA 10.3: Checkout y Suscripciones
Flujo de Pago Principal
Tareas Atómicas para 10.3
yamlCopyTAREA-10.3.1:
  Nombre: "Crear Server Action para checkout de suscripción"
  Tipo: Código (Antigravity)
  Archivo: "src/actions/payments/create-checkout.ts"
  Contenido: |
    'use server';

    import { z } from 'zod';
    import { createClient } from '@/lib/supabase/server';
    import { stripe } from '@/lib/stripe/client';
    import { STRIPE_CONFIG, type SubscriptionInterval } from '@/lib/stripe/config';
    import { logger } from '@/lib/logger';

    const CreateCheckoutSchema = z.object({
      interval: z.enum(['monthly', 'yearly']),
    });

    export async function createCheckoutSession(
      input: z.infer<typeof CreateCheckoutSchema>
    ): Promise<{ success: boolean; url?: string; error?: string }> {
      try {
        // Validar input
        const parsed = CreateCheckoutSchema.parse(input);

        // Obtener usuario autenticado
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
          return { success: false, error: 'UNAUTHORIZED' };
        }

        // Obtener o crear Stripe Customer
        const { data: profile } = await supabase
          .from('profiles')
          .select('stripe_customer_id, email, nickname')
          .eq('id', user.id)
          .single();

        let stripeCustomerId = profile?.stripe_customer_id;

        if (!stripeCustomerId) {
          // Crear cliente en Stripe
          const customer = await stripe.customers.create({
            email: profile?.email || user.email,
            metadata: {
              supabase_user_id: user.id,
              nickname: profile?.nickname || '',
            },
          });

          stripeCustomerId = customer.id;

          // Guardar en profile
          await supabase
            .from('profiles')
            .update({ stripe_customer_id: stripeCustomerId })
            .eq('id', user.id);
        }

        // Obtener precio según intervalo
        const priceId = parsed.interval === 'monthly'
          ? STRIPE_CONFIG.subscription.prices.monthly.id
          : STRIPE_CONFIG.subscription.prices.yearly.id;

        // Crear sesión de checkout
        const session = await stripe.checkout.sessions.create({
          customer: stripeCustomerId,
          mode: 'subscription',
          payment_method_types: ['card'],
          line_items: [
            {
              price: priceId,
              quantity: 1,
            },
          ],
          success_url: `${process.env.NEXT_PUBLIC_APP_URL}${STRIPE_CONFIG.urls.success}`,
          cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}${STRIPE_CONFIG.urls.cancel}`,
          subscription_data: {
            metadata: {
              supabase_user_id: user.id,
            },
          },
          allow_promotion_codes: true,
          billing_address_collection: 'auto',
          customer_update: {
            address: 'auto',
            name: 'auto',
          },
        });

        logger.info({
          action: 'checkout_session_created',
          userId: user.id,
          interval: parsed.interval,
          sessionId: session.id,
        });

        return { success: true, url: session.url || undefined };

      } catch (error) {
        logger.error({
          action: 'checkout_session_error',
          error: error instanceof Error ? error.message : 'Unknown error',
        });

        if (error instanceof z.ZodError) {
          return { success: false, error: 'VALIDATION_ERROR' };
        }

        return { success: false, error: 'CHECKOUT_FAILED' };
      }
    }
  Criterio de Éxito: "Action crea sesión y retorna URL"

TAREA-10.3.2:
  Nombre: "Agregar campo stripe_customer_id a profiles"
  Tipo: Migración SQL (Antigravity)
  Archivo: "supabase/migrations/20240122_add_stripe_fields.sql"
  Contenido: |
    -- Agregar campos de Stripe a profiles
    ALTER TABLE profiles
    ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT UNIQUE;

    -- Agregar campos de Stripe a subscriptions
    ALTER TABLE subscriptions
    ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT UNIQUE,
    ADD COLUMN IF NOT EXISTS stripe_price_id TEXT,
    ADD COLUMN IF NOT EXISTS current_period_start TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS current_period_end TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS cancel_at_period_end BOOLEAN DEFAULT false,
    ADD COLUMN IF NOT EXISTS limbo_started_at TIMESTAMPTZ;

    -- Índices
    CREATE INDEX IF NOT EXISTS idx_profiles_stripe_customer 
      ON profiles(stripe_customer_id) WHERE stripe_customer_id IS NOT NULL;
    CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe 
      ON subscriptions(stripe_subscription_id) WHERE stripe_subscription_id IS NOT NULL;

    -- Comentarios
    COMMENT ON COLUMN profiles.stripe_customer_id IS 'ID del cliente en Stripe';
    COMMENT ON COLUMN subscriptions.stripe_subscription_id IS 'ID de la suscripción en Stripe';
    COMMENT ON COLUMN subscriptions.cancel_at_period_end IS 'Si está marcada para cancelar al final del periodo';
  Comando: "pnpm supabase db push"
  Criterio de Éxito: "Columnas agregadas"

TAREA-10.3.3:
  Nombre: "Crear componente CheckoutButton"
  Tipo: Código (Antigravity)
  Archivo: "src/components/payments/CheckoutButton.tsx"
  Contenido: |
    'use client';

    import { useState } from 'react';
    import { Button } from '@/components/ui/Button';
    import { createCheckoutSession } from '@/actions/payments/create-checkout';
    import type { SubscriptionInterval } from '@/lib/stripe/config';

    interface CheckoutButtonProps {
      interval: SubscriptionInterval;
      children: React.ReactNode;
      className?: string;
    }

    export function CheckoutButton({ interval, children, className }: CheckoutButtonProps) {
      const [isLoading, setIsLoading] = useState(false);

      const handleClick = async () => {
        setIsLoading(true);
        try {
          const result = await createCheckoutSession({ interval });
          
          if (result.success && result.url) {
            window.location.href = result.url;
          } else {
            // Mostrar error
            console.error('Checkout failed:', result.error);
            // TODO: Toast de error
          }
        } catch (error) {
          console.error('Checkout error:', error);
        } finally {
          setIsLoading(false);
        }
      };

      return (
        <Button
          onClick={handleClick}
          disabled={isLoading}
          className={className}
        >
          {isLoading ? 'Redirigiendo...' : children}
        </Button>
      );
    }
  Criterio de Éxito: "Botón redirige a Stripe Checkout"

TAREA-10.3.4:
  Nombre: "Crear página de pricing"
  Tipo: Código (Antigravity)
  Archivo: "src/app/(marketing)/pricing/page.tsx"
  Contenido: |
    import { Check } from 'lucide-react';
    import { CheckoutButton } from '@/components/payments/CheckoutButton';
    import { STRIPE_CONFIG } from '@/lib/stripe/config';

    const features = [
      'Protocolo completo de 100 días',
      'Avatar con IA generativa',
      'Generación de imagen diaria',
      '9 herramientas de desarrollo',
      'Sistema de gamificación completo',
      'Tienda de items y personalización',
      'Soporte prioritario',
    ];

    export default function PricingPage() {
      return (
        <div className="min-h-screen bg-bg-primary py-20">
          <div className="max-w-4xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-white mb-4">
                Invierte en Tu Transformación
              </h1>
              <p className="text-text-secondary text-lg">
                100 días para convertirte en tu mejor versión
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mensual */}
              <div className="bg-bg-secondary rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2">Mensual</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    {STRIPE_CONFIG.subscription.prices.monthly.displayPrice}
                  </span>
                  <span className="text-text-secondary">/mes</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <CheckoutButton interval="monthly" className="w-full">
                  Comenzar Ahora
                </CheckoutButton>
              </div>

              {/* Anual */}
              <div className="bg-bg-secondary rounded-2xl p-8 border-2 border-accent-gold relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-accent-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                  AHORRA 40%
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">Anual</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    {STRIPE_CONFIG.subscription.prices.yearly.displayPrice}
                  </span>
                  <span className="text-text-secondary">/año</span>
                  <p className="text-sm text-green-400 mt-1">
                    ~$11.67/mes (vs $19.90)
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <CheckoutButton interval="yearly" className="w-full bg-accent-gold text-black hover:bg-accent-gold/90">
                  Mejor Valor
                </CheckoutButton>
              </div>
            </div>

            {/* Garantía */}
            <p className="text-center text-text-secondary text-sm mt-8">
              Cancela cuando quieras. Sin compromisos. Sin preguntas.
            </p>
          </div>
        </div>
      );
    }
  Criterio de Éxito: "Página renderiza y botones funcionan"

TAREA-10.3.5:
  Nombre: "Crear componente de estado de suscripción"
  Tipo: Código (Antigravity)
  Archivo: "src/components/payments/SubscriptionStatus.tsx"
  Contenido: |
    'use client';

    import { format } from 'date-fns';
    import { es } from 'date-fns/locale';
    import { CreditCard, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
    import { Badge } from '@/components/ui/Badge';
    import type { Subscription } from '@/types/database';
    import { cn } from '@/lib/utils';

    interface SubscriptionStatusProps {
      subscription: Subscription;
      className?: string;
    }

    const STATUS_CONFIG = {
      trial: {
        label: 'Prueba Gratuita',
        color: 'bg-yellow-500/20 text-yellow-400',
        icon: Calendar,
      },
      active: {
        label: 'Activa',
        color: 'bg-green-500/20 text-green-400',
        icon: CheckCircle,
      },
      limbo: {
        label: 'Suspendida',
        color: 'bg-red-500/20 text-red-400',
        icon: AlertCircle,
      },
      cancelled: {
        label: 'Cancelada',
        color: 'bg-gray-500/20 text-gray-400',
        icon: AlertCircle,
      },
    };

    export function SubscriptionStatus({ subscription, className }: SubscriptionStatusProps) {
      const config = STATUS_CONFIG[subscription.status];
      const Icon = config.icon;

      return (
        <div className={cn('bg-bg-secondary rounded-xl p-6', className)}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Tu Suscripción
            </h3>
            <Badge className={config.color}>
              <Icon className="w-3 h-3 mr-1" />
              {config.label}
            </Badge>
          </div>

          <div className="space-y-3 text-sm">
            {subscription.status === 'trial' && subscription.trial_ends_at && (
              <div className="flex justify-between">
                <span className="text-text-secondary">Trial termina:</span>
                <span className="text-white">
                  {format(new Date(subscription.trial_ends_at), "d 'de' MMMM, yyyy", { locale: es })}
                </span>
              </div>
            )}

            {subscription.status === 'active' && subscription.current_period_end && (
              <>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Próximo cobro:</span>
                  <span className="text-white">
                    {format(new Date(subscription.current_period_end), "d 'de' MMMM, yyyy", { locale: es })}
                  </span>
                </div>
                {subscription.cancel_at_period_end && (
                  <div className="flex items-center gap-2 text-yellow-400 bg-yellow-500/10 rounded-lg p-3">
                    <AlertCircle className="w-4 h-4" />
                    <span>Se cancelará al final del periodo</span>
                  </div>
                )}
              </>
            )}

            {subscription.status === 'limbo' && (
              <div className="text-red-400 bg-red-500/10 rounded-lg p-3">
                <p>Tu acceso está suspendido. Actualiza tu método de pago para continuar.</p>
              </div>
            )}
          </div>
        </div>
      );
    }
  Criterio de Éxito: "Componente muestra estado correcto"

TAREA-10.3.6:
  Nombre: "Crear función para sincronizar suscripción desde Stripe"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/stripe/subscriptions.ts"
  Contenido: |
    import Stripe from 'stripe';
    import { createClient } from '@/lib/supabase/server';
    import { stripe } from './client';
    import { logger } from '@/lib/logger';
    import type { SubscriptionStatus } from '@/types/database';

    /**
     * Mapea el estado de Stripe a nuestro estado interno
     */
    function mapStripeStatus(stripeStatus: Stripe.Subscription.Status): SubscriptionStatus {
      switch (stripeStatus) {
        case 'active':
        case 'trialing':
          return 'active';
        case 'past_due':
        case 'unpaid':
          return 'limbo';
        case 'canceled':
        case 'incomplete_expired':
          return 'cancelled';
        default:
          return 'limbo';
      }
    }

    /**
     * Sincroniza los datos de suscripción desde Stripe a nuestra DB
     */
    export async function syncSubscriptionFromStripe(
      stripeSubscription: Stripe.Subscription
    ): Promise<void> {
      const supabase = await createClient();
      
      // Obtener user_id desde metadata
      const userId = stripeSubscription.metadata.supabase_user_id;
      
      if (!userId) {
        logger.error({
          action: 'sync_subscription_no_user',
          subscriptionId: stripeSubscription.id,
        });
        throw new Error('No user_id in subscription metadata');
      }

      const status = mapStripeStatus(stripeSubscription.status);
      const priceId = stripeSubscription.items.data[0]?.price.id;

      const updateData = {
        status,
        stripe_subscription_id: stripeSubscription.id,
        stripe_price_id: priceId,
        current_period_start: new Date(stripeSubscription.current_period_start * 1000).toISOString(),
        current_period_end: new Date(stripeSubscription.current_period_end * 1000).toISOString(),
        cancel_at_period_end: stripeSubscription.cancel_at_period_end,
        trial_ends_at: null, // Ya no está en trial
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('subscriptions')
        .update(updateData)
        .eq('user_id', userId);

      if (error) {
        logger.error({
          action: 'sync_subscription_error',
          userId,
          error: error.message,
        });
        throw error;
      }

      logger.info({
        action: 'subscription_synced',
        userId,
        status,
        subscriptionId: stripeSubscription.id,
      });
    }

    /**
     * Obtiene la suscripción activa de un usuario desde Stripe
     */
    export async function getStripeSubscription(
      stripeCustomerId: string
    ): Promise<Stripe.Subscription | null> {
      const subscriptions = await stripe.subscriptions.list({
        customer: stripeCustomerId,
        status: 'active',
        limit: 1,
      });

      return subscriptions.data[0] || null;
    }

    /**
     * Cancela una suscripción al final del periodo
     */
    export async function cancelSubscriptionAtPeriodEnd(
      stripeSubscriptionId: string
    ): Promise<Stripe.Subscription> {
      return await stripe.subscriptions.update(stripeSubscriptionId, {
        cancel_at_period_end: true,
      });
    }

    /**
     * Reactiva una suscripción cancelada
     */
    export async function reactivateSubscription(
      stripeSubscriptionId: string
    ): Promise<Stripe.Subscription> {
      return await stripe.subscriptions.update(stripeSubscriptionId, {
        cancel_at_period_end: false,
      });
    }
  Criterio de Éxito: "Funciones de sincronización completas"

SUBCAJA 10.4: Webhooks de Stripe
Procesamiento de Eventos
Eventos a Manejar
yamlCopyEventos Críticos:
  - checkout.session.completed: Usuario completó checkout
  - customer.subscription.created: Nueva suscripción
  - customer.subscription.updated: Cambio en suscripción
  - customer.subscription.deleted: Suscripción cancelada
  - invoice.paid: Pago exitoso
  - invoice.payment_failed: Pago fallido

Eventos de BTC Packs:
  - checkout.session.completed (mode: payment): Compra one-time
Tareas Atómicas para 10.4
yamlCopyTAREA-10.4.1:
  Nombre: "Crear endpoint de webhooks"
  Tipo: Código (Antigravity)
  Archivo: "src/app/api/webhooks/stripe/route.ts"
  Contenido: |
    import { headers } from 'next/headers';
    import { NextResponse } from 'next/server';
    import Stripe from 'stripe';
    import { stripe } from '@/lib/stripe/client';
    import { processWebhookEvent } from '@/lib/stripe/webhooks';
    import { logger } from '@/lib/logger';
    import { env } from '@/lib/env';

    export async function POST(request: Request) {
      const body = await request.text();
      const signature = headers().get('stripe-signature');

      if (!signature) {
        logger.warn({ action: 'webhook_no_signature' });
        return NextResponse.json(
          { error: 'No signature' },
          { status: 400 }
        );
      }

      let event: Stripe.Event;

      try {
        event = stripe.webhooks.constructEvent(
          body,
          signature,
          env.STRIPE_WEBHOOK_SECRET
        );
      } catch (err) {
        logger.error({
          action: 'webhook_signature_error',
          error: err instanceof Error ? err.message : 'Unknown',
        });
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 400 }
        );
      }

      logger.info({
        action: 'webhook_received',
        type: event.type,
        id: event.id,
      });

      try {
        await processWebhookEvent(event);
        
        return NextResponse.json({ received: true });
      } catch (error) {
        logger.error({
          action: 'webhook_processing_error',
          type: event.type,
          error: error instanceof Error ? error.message : 'Unknown',
        });
        
        // Retornar 200 para que Stripe no reintente
        // pero loggear el error para investigar
        return NextResponse.json({ received: true, error: 'Processing failed' });
      }
    }

    // Deshabilitar body parser de Next.js
    export const config = {
      api: {
        bodyParser: false,
      },
    };
  Criterio de Éxito: "Endpoint verifica firma y procesa eventos"

TAREA-10.4.2:
  Nombre: "Crear procesador de webhooks"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/stripe/webhooks.ts"
  Contenido: |
    import Stripe from 'stripe';
    import { createClient } from '@/lib/supabase/server';
    import { syncSubscriptionFromStripe } from './subscriptions';
    import { creditBtcPack } from './btc-packs';
    import { logger } from '@/lib/logger';

    export async function processWebhookEvent(event: Stripe.Event): Promise<void> {
      switch (event.type) {
        case 'checkout.session.completed':
          await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
          break;

        case 'customer.subscription.created':
        case 'customer.subscription.updated':
          await handleSubscriptionChange(event.data.object as Stripe.Subscription);
          break;

        case 'customer.subscription.deleted':
          await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
          break;

        case 'invoice.paid':
          await handleInvoicePaid(event.data.object as Stripe.Invoice);
          break;

        case 'invoice.payment_failed':
          await handlePaymentFailed(event.data.object as Stripe.Invoice);
          break;

        default:
          logger.info({ action: 'webhook_unhandled', type: event.type });
      }
    }

    async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
      logger.info({
        action: 'checkout_completed',
        sessionId: session.id,
        mode: session.mode,
      });

      if (session.mode === 'subscription') {
        // La suscripción se maneja en customer.subscription.created
        return;
      }

      if (session.mode === 'payment') {
        // Compra one-time (BTC packs)
        const userId = session.metadata?.supabase_user_id;
        const btcPackType = session.metadata?.btc_pack_type;

        if (userId && btcPackType) {
          await creditBtcPack(userId, btcPackType);
        }
      }
    }

    async function handleSubscriptionChange(subscription: Stripe.Subscription) {
      logger.info({
        action: 'subscription_changed',
        subscriptionId: subscription.id,
        status: subscription.status,
      });

      await syncSubscriptionFromStripe(subscription);
    }

    async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
      const supabase = await createClient();
      const userId = subscription.metadata.supabase_user_id;

      if (!userId) {
        logger.error({
          action: 'subscription_deleted_no_user',
          subscriptionId: subscription.id,
        });
        return;
      }

      // Marcar como cancelada
      await supabase
        .from('subscriptions')
        .update({
          status: 'cancelled',
          stripe_subscription_id: null,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', userId);

      logger.info({
        action: 'subscription_deleted',
        userId,
        subscriptionId: subscription.id,
      });
    }

    async function handleInvoicePaid(invoice: Stripe.Invoice) {
      // El pago exitoso se refleja en subscription.updated
      logger.info({
        action: 'invoice_paid',
        invoiceId: invoice.id,
        amountPaid: invoice.amount_paid,
      });
    }

    async function handlePaymentFailed(invoice: Stripe.Invoice) {
      const supabase = await createClient();
      
      // Obtener subscription para encontrar user_id
      if (!invoice.subscription) return;

      const subscriptionId = typeof invoice.subscription === 'string'
        ? invoice.subscription
        : invoice.subscription.id;

      // Encontrar usuario
      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('user_id')
        .eq('stripe_subscription_id', subscriptionId)
        .single();

      if (!subscription) {
        logger.error({
          action: 'payment_failed_no_subscription',
          subscriptionId,
        });
        return;
      }

      // Mover a limbo
      await supabase
        .from('subscriptions')
        .update({
          status: 'limbo',
          limbo_started_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', subscription.user_id);

      logger.warn({
        action: 'payment_failed_limbo',
        userId: subscription.user_id,
      });

      // TODO: Enviar notificación al usuario
    }
  Criterio de Éxito: "Todos los eventos manejados correctamente"

TAREA-10.4.3:
  Nombre: "Configurar webhook en Stripe Dashboard"
  Tipo: Manual (Operador)
  Acción: |
    1. Ir a Stripe Dashboard > Developers > Webhooks
    2. Click "Add endpoint"
    3. Endpoint URL: https://metamen100.com/api/webhooks/stripe
       (En desarrollo: usar Stripe CLI o ngrok)
    4. Seleccionar eventos:
       - checkout.session.completed
       - customer.subscription.created
       - customer.subscription.updated
       - customer.subscription.deleted
       - invoice.paid
       - invoice.payment_failed
    5. Copiar "Signing secret" (whsec_...)
    6. Agregar a .env.local como STRIPE_WEBHOOK_SECRET
  Output: "Webhook configurado en Stripe"

TAREA-10.4.4:
  Nombre: "Crear script de test local de webhooks"
  Tipo: Código (Antigravity)
  Archivo: "scripts/test-stripe-webhook.sh"
  Contenido: |
    #!/bin/bash
    
    # Este script usa Stripe CLI para reenviar webhooks localmente
    # Requiere: stripe CLI instalado y autenticado
    
    echo "Iniciando listener de webhooks de Stripe..."
    echo "Asegúrate de que tu servidor esté corriendo en localhost:3000"
    
    stripe listen --forward-to localhost:3000/api/webhooks/stripe
  Comando: "chmod +x scripts/test-stripe-webhook.sh"
  Criterio de Éxito: "Script ejecutable"

TAREA-10.4.5:
  Nombre: "Crear tabla de logs de webhooks"
  Tipo: Migración SQL (Antigravity)
  Archivo: "supabase/migrations/20240123_webhook_logs.sql"
  Contenido: |
    -- Tabla para auditoría de webhooks
    CREATE TABLE IF NOT EXISTS stripe_webhook_logs (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      event_id TEXT NOT NULL UNIQUE, -- ID del evento de Stripe
      event_type TEXT NOT NULL,
      processed_at TIMESTAMPTZ DEFAULT NOW(),
      success BOOLEAN NOT NULL,
      error_message TEXT,
      payload JSONB -- Guardar payload para debugging
    );

    -- Índice para búsqueda
    CREATE INDEX idx_webhook_logs_event_type ON stripe_webhook_logs(event_type);
    CREATE INDEX idx_webhook_logs_processed_at ON stripe_webhook_logs(processed_at);

    -- Política de retención: eliminar logs de más de 90 días
    -- (Implementar como cron job)
  Criterio de Éxito: "Tabla creada"

TAREA-10.4.6:
  Nombre: "Implementar idempotencia en webhooks"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/stripe/webhooks.ts (modificar)"
  Modificación: |
    // Al inicio de processWebhookEvent:
    
    export async function processWebhookEvent(event: Stripe.Event): Promise<void> {
      const supabase = await createClient();
      
      // Verificar si ya procesamos este evento (idempotencia)
      const { data: existingLog } = await supabase
        .from('stripe_webhook_logs')
        .select('id')
        .eq('event_id', event.id)
        .single();

      if (existingLog) {
        logger.info({
          action: 'webhook_duplicate_skipped',
          eventId: event.id,
          type: event.type,
        });
        return; // Ya procesado, ignorar
      }

      let success = true;
      let errorMessage: string | null = null;

      try {
        // Procesar según tipo...
        switch (event.type) {
          // ... casos existentes
        }
      } catch (error) {
        success = false;
        errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw error;
      } finally {
        // Registrar en log
        await supabase.from('stripe_webhook_logs').insert({
          event_id: event.id,
          event_type: event.type,
          success,
          error_message: errorMessage,
          payload: event.data.object,
        });
      }
    }
  Criterio de Éxito: "Webhooks duplicados no se procesan dos veces"

SUBCAJA 10.5: Modo Limbo
Suspensión por Falta de Pago
Lógica del Limbo (desde cuestionario1)
yamlCopyTrigger:
  - Trial expirado sin pago
  - Pago de suscripción fallido

Duración Máxima: 30 días

Efectos:
  - No se generan nuevas imágenes
  - Avatar se vuelve gris/estático
  - -1 corazón cada 3 días
  - Tareas bloqueadas
  - Solo puede ver estado y botón de pago

Salida:
  - Pagar reactiva la cuenta
  - 30 días sin pagar = cuenta cancelada
Tareas Atómicas para 10.5
yamlCopyTAREA-10.5.1:
  Nombre: "Crear función para entrar en modo limbo"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/core/limbo.ts"
  Contenido: |
    import { createClient } from '@/lib/supabase/server';
    import { logger } from '@/lib/logger';

    export interface LimboStatus {
      isInLimbo: boolean;
      daysInLimbo: number;
      healthLost: number;
      daysUntilDeath: number;
      canReactivate: boolean;
    }

    const LIMBO_MAX_DAYS = 30;
    const HEALTH_LOSS_INTERVAL_DAYS = 3;

    /**
     * Calcula el estado de limbo de un usuario
     */
    export function getLimboStatus(
      subscription: { status: string; limbo_started_at: string | null },
      currentHealth: number
    ): LimboStatus {
      if (subscription.status !== 'limbo' || !subscription.limbo_started_at) {
        return {
          isInLimbo: false,
          daysInLimbo: 0,
          healthLost: 0,
          daysUntilDeath: 0,
          canReactivate: true,
        };
      }

      const limboStart = new Date(subscription.limbo_started_at);
      const now = new Date();
      const msInLimbo = now.getTime() - limboStart.getTime();
      const daysInLimbo = Math.floor(msInLimbo / (1000 * 60 * 60 * 24));

      // Salud perdida: 1 corazón cada 3 días
      const healthLost = Math.floor(daysInLimbo / HEALTH_LOSS_INTERVAL_DAYS);
      
      // Días hasta muerte (salud 0) o cancelación (30 días)
      const daysUntilHealthDeath = currentHealth * HEALTH_LOSS_INTERVAL_DAYS;
      const daysUntilCancellation = LIMBO_MAX_DAYS - daysInLimbo;
      const daysUntilDeath = Math.min(daysUntilHealthDeath, daysUntilCancellation);

      return {
        isInLimbo: true,
        daysInLimbo,
        healthLost,
        daysUntilDeath: Math.max(0, daysUntilDeath),
        canReactivate: daysInLimbo < LIMBO_MAX_DAYS,
      };
    }

    /**
     * Procesa la degradación diaria de usuarios en limbo
     * (Ejecutar como cron job)
     */
    export async function processLimboDegradation(): Promise<{ processed: number }> {
      const supabase = await createClient();
      const now = new Date();

      // Obtener usuarios en limbo
      const { data: limboUsers, error } = await supabase
        .from('subscriptions')
        .select(`
          user_id,
          limbo_started_at,
          avatar_states (
            health_points
          )
        `)
        .eq('status', 'limbo')
        .not('limbo_started_at', 'is', null);

      if (error || !limboUsers) {
        logger.error({ action: 'limbo_fetch_error', error: error?.message });
        return { processed: 0 };
      }

      let processed = 0;

      for (const user of limboUsers) {
        const limboStart = new Date(user.limbo_started_at!);
        const daysInLimbo = Math.floor(
          (now.getTime() - limboStart.getTime()) / (1000 * 60 * 60 * 24)
        );

        // Verificar si hay que quitar salud (cada 3 días)
        const currentHealth = user.avatar_states?.[0]?.health_points ?? 10;
        const expectedHealthLoss = Math.floor(daysInLimbo / HEALTH_LOSS_INTERVAL_DAYS);
        const actualHealthLoss = 10 - currentHealth; // Asumiendo 10 inicial

        if (expectedHealthLoss > actualHealthLoss) {
          // Quitar salud
          const newHealth = Math.max(0, 10 - expectedHealthLoss);

          await supabase
            .from('avatar_states')
            .update({ health_points: newHealth })
            .eq('user_id', user.user_id);

          logger.info({
            action: 'limbo_health_loss',
            userId: user.user_id,
            newHealth,
            daysInLimbo,
          });

          // Si salud llega a 0, procesar muerte
          if (newHealth === 0) {
            // Importar y llamar processAvatarDeath
            const { processAvatarDeath } = await import('./death');
            await processAvatarDeath(user.user_id, 'limbo_health_depleted');
          }

          processed++;
        }

        // Verificar si pasaron 30 días
        if (daysInLimbo >= LIMBO_MAX_DAYS) {
          await supabase
            .from('subscriptions')
            .update({
              status: 'cancelled',
              updated_at: now.toISOString(),
            })
            .eq('user_id', user.user_id);

          logger.info({
            action: 'limbo_cancelled',
            userId: user.user_id,
            daysInLimbo,
          });

          processed++;
        }
      }

      return { processed };
    }
  Criterio de Éxito: "Funciones de limbo implementadas"

TAREA-10.5.2:
  Nombre: "Crear página/overlay de modo limbo"
  Tipo: Código (Antigravity)
  Archivo: "src/components/payments/LimboOverlay.tsx"
  Contenido: |
    'use client';

    import { useState } from 'react';
    import { motion } from 'framer-motion';
    import { AlertTriangle, Heart, Clock, CreditCard } from 'lucide-react';
    import { Button } from '@/components/ui/Button';
    import { createCheckoutSession } from '@/actions/payments/create-checkout';
    import type { LimboStatus } from '@/lib/core/limbo';

    interface LimboOverlayProps {
      limboStatus: LimboStatus;
      currentHealth: number;
    }

    export function LimboOverlay({ limboStatus, currentHealth }: LimboOverlayProps) {
      const [isLoading, setIsLoading] = useState(false);

      const handleReactivate = async () => {
        setIsLoading(true);
        try {
          const result = await createCheckoutSession({ interval: 'monthly' });
          if (result.success && result.url) {
            window.location.href = result.url;
          }
        } catch (error) {
          console.error('Reactivation error:', error);
        } finally {
          setIsLoading(false);
        }
      };

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-md w-full bg-bg-secondary rounded-2xl p-8 border border-red-500/30"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/20 mb-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Cuenta Suspendida
              </h2>
              <p className="text-text-secondary">
                Tu suscripción ha expirado. Tu avatar está en peligro.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-bg-tertiary rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">Días en suspensión</span>
                </div>
                <span className="text-xl font-bold text-yellow-400">
                  {limboStatus.daysInLimbo}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-bg-tertiary rounded-lg">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span className="text-white">Salud restante</span>
                </div>
                <span className="text-xl font-bold text-red-400">
                  {currentHealth}/10
                </span>
              </div>

              {limboStatus.daysUntilDeath > 0 && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm text-center">
                    ⚠️ Tu avatar morirá en <strong>{limboStatus.daysUntilDeath}</strong> días
                    si no reactivas tu cuenta
                  </p>
                </div>
              )}
            </div>

            {/* CTA */}
            {limboStatus.canReactivate ? (
              <Button
                onClick={handleReactivate}
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                {isLoading ? 'Procesando...' : 'Reactivar Cuenta'}
              </Button>
            ) : (
              <div className="text-center text-text-secondary">
                <p>El período de reactivación ha expirado.</p>
                <p className="text-sm mt-2">Contacta soporte para opciones.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      );
    }
  Criterio de Éxito: "Overlay muestra estado de limbo"

TAREA-10.5.3:
  Nombre: "Registrar job de procesamiento de limbo"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/inngest/functions.ts (agregar)"
  Contenido: |
    import { processLimboDegradation } from '@/lib/core/limbo';

    export const processLimboJob = inngest.createFunction(
      { id: 'process-limbo-degradation' },
      { cron: '0 0 * * *' }, // Diario a medianoche
      async ({ step }) => {
        const result = await step.run('process-limbo', async () => {
          return await processLimboDegradation();
        });

        return result;
      }
    );
  Criterio de Éxito: "Job registrado"

TAREA-10.5.4:
  Nombre: "Integrar verificación de limbo en middleware"
  Tipo: Código (Antigravity)
  Archivo: "src/middleware.ts (modificar)"
  Modificación: |
    // Agregar verificación de limbo para rutas protegidas
    
    // En las rutas del dashboard, verificar estado de suscripción
    // y redirigir a /reactivate si está en limbo
    
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      // El componente de layout manejará mostrar el overlay de limbo
      // No bloqueamos completamente, pero mostramos el overlay
    }
  Criterio de Éxito: "Usuarios en limbo ven overlay"

SUBCAJA 10.6: Compra de BTC con Dinero Real
Microtransacciones de Moneda Virtual
Tareas Atómicas para 10.6
yamlCopyTAREA-10.6.1:
  Nombre: "Crear Server Action para checkout de BTC packs"
  Tipo: Código (Antigravity)
  Archivo: "src/actions/payments/purchase-btc.ts"
  Contenido: |
    'use server';

    import { z } from 'zod';
    import { createClient } from '@/lib/supabase/server';
    import { stripe } from '@/lib/stripe/client';
    import { STRIPE_CONFIG, type BtcPackType } from '@/lib/stripe/config';
    import { logger } from '@/lib/logger';

    const PurchaseBtcSchema = z.object({
      packType: z.enum(['starter', 'popular', 'magnate']),
    });

    export async function createBtcCheckoutSession(
      input: z.infer<typeof PurchaseBtcSchema>
    ): Promise<{ success: boolean; url?: string; error?: string }> {
      try {
        const parsed = PurchaseBtcSchema.parse(input);
        
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
          return { success: false, error: 'UNAUTHORIZED' };
        }

        // Obtener Stripe customer ID
        const { data: profile } = await supabase
          .from('profiles')
          .select('stripe_customer_id')
          .eq('id', user.id)
          .single();

        if (!profile?.stripe_customer_id) {
          return { success: false, error: 'NO_CUSTOMER' };
        }

        const pack = STRIPE_CONFIG.btcPacks[parsed.packType];

        // Crear sesión de checkout (one-time payment)
        const session = await stripe.checkout.sessions.create({
          customer: profile.stripe_customer_id,
          mode: 'payment',
          payment_method_types: ['card'],
          line_items: [
            {
              price: pack.priceId,
              quantity: 1,
            },
          ],
          success_url: `${process.env.NEXT_PUBLIC_APP_URL}/store?purchase=success&pack=${parsed.packType}`,
          cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/store?purchase=cancelled`,
          metadata: {
            supabase_user_id: user.id,
            btc_pack_type: parsed.packType,
            btc_amount: pack.btcAmount.toString(),
          },
        });

        logger.info({
          action: 'btc_checkout_created',
          userId: user.id,
          packType: parsed.packType,
          btcAmount: pack.btcAmount,
        });

        return { success: true, url: session.url || undefined };

      } catch (error) {
        logger.error({
          action: 'btc_checkout_error',
          error: error instanceof Error ? error.message : 'Unknown',
        });
        return { success: false, error: 'CHECKOUT_FAILED' };
      }
    }
  Criterio de Éxito: "Action crea sesión de pago one-time"

TAREA-10.6.2:
  Nombre: "Crear función para acreditar BTC pack"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/stripe/btc-packs.ts"
  Contenido: |
    import { createClient } from '@/lib/supabase/server';
    import { STRIPE_CONFIG, type BtcPackType } from './config';
    import { logger } from '@/lib/logger';

    /**
     * Acredita BTC a un usuario después de compra exitosa
     */
    export async function creditBtcPack(
      userId: string,
      packType: string
    ): Promise<void> {
      const supabase = await createClient();
      
      // Validar pack type
      if (!['starter', 'popular', 'magnate'].includes(packType)) {
        throw new Error(`Invalid pack type: ${packType}`);
      }

      const pack = STRIPE_CONFIG.btcPacks[packType as BtcPackType];
      const btcAmount = pack.btcAmount;

      // Usar transacción para actualizar wallet
      const { error } = await supabase.rpc('credit_btc_pack', {
        p_user_id: userId,
        p_btc_amount: btcAmount,
        p_pack_type: packType,
      });

      if (error) {
        logger.error({
          action: 'credit_btc_pack_error',
          userId,
          packType,
          error: error.message,
        });
        throw error;
      }

      logger.info({
        action: 'btc_pack_credited',
        userId,
        packType,
        btcAmount,
      });
    }
  Criterio de Éxito: "Función acredita BTC correctamente"

TAREA-10.6.3:
  Nombre: "Crear función SQL para acreditar BTC"
  Tipo: Migración SQL (Antigravity)
  Archivo: "supabase/migrations/20240124_btc_pack_function.sql"
  Contenido: |
    -- Función para acreditar BTC pack de forma segura
    CREATE OR REPLACE FUNCTION credit_btc_pack(
      p_user_id UUID,
      p_btc_amount INTEGER,
      p_pack_type TEXT
    )
    RETURNS VOID AS $$
    BEGIN
      -- Actualizar wallet
      UPDATE wallets
      SET 
        btc_balance = btc_balance + p_btc_amount,
        total_earned = total_earned + p_btc_amount,
        updated_at = NOW()
      WHERE user_id = p_user_id;

      -- Registrar en activity_logs
      INSERT INTO activity_logs (user_id, action, details)
      VALUES (
        p_user_id,
        'btc_pack_purchased',
        jsonb_build_object(
          'pack_type', p_pack_type,
          'btc_amount', p_btc_amount
        )
      );
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;
  Criterio de Éxito: "Función SQL creada"

TAREA-10.6.4:
  Nombre: "Crear componente BtcPackCard"
  Tipo: Código (Antigravity)
  Archivo: "src/components/payments/BtcPackCard.tsx"
  Contenido: |
    'use client';

    import { useState } from 'react';
    import { Coins, Sparkles, Zap } from 'lucide-react';
    import { Button } from '@/components/ui/Button';
    import { createBtcCheckoutSession } from '@/actions/payments/purchase-btc';
    import { STRIPE_CONFIG, type BtcPackType } from '@/lib/stripe/config';
    import { cn } from '@/lib/utils';

    interface BtcPackCardProps {
      packType: BtcPackType;
      className?: string;
    }

    const PACK_ICONS = {
      starter: Coins,
      popular: Sparkles,
      magnate: Zap,
    };

    export function BtcPackCard({ packType, className }: BtcPackCardProps) {
      const [isLoading, setIsLoading] = useState(false);
      const pack = STRIPE_CONFIG.btcPacks[packType];
      const Icon = PACK_ICONS[packType];

      const handlePurchase = async () => {
        setIsLoading(true);
        try {
          const result = await createBtcCheckoutSession({ packType });
          if (result.success && result.url) {
            window.location.href = result.url;
          }
        } catch (error) {
          console.error('Purchase error:', error);
        } finally {
          setIsLoading(false);
        }
      };

      return (
        <div
          className={cn(
            'bg-bg-secondary rounded-xl p-6 border',
            pack.featured 
              ? 'border-accent-gold shadow-lg shadow-accent-gold/20' 
              : 'border-white/10',
            className
          )}
        >
          {pack.featured && (
            <div className="text-center mb-4">
              <span className="inline-block bg-accent-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                MÁS POPULAR
              </span>
            </div>
          )}

          <div className="flex items-center justify-center mb-4">
            <div className={cn(
              'w-16 h-16 rounded-full flex items-center justify-center',
              pack.featured ? 'bg-accent-gold/20' : 'bg-white/10'
            )}>
              <Icon className={cn(
                'w-8 h-8',
                pack.featured ? 'text-accent-gold' : 'text-white'
              )} />
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-white mb-1">
              {pack.btcAmount.toLocaleString()} <span className="text-lg">₿</span>
            </p>
            {pack.bonus > 0 && (
              <p className="text-sm text-green-400">
                +{pack.bonus}% bonus incluido
              </p>
            )}
          </div>

          <div className="text-center mb-6">
            <span className="text-2xl font-bold text-white">
              {pack.displayPrice}
            </span>
          </div>

          <Button
            onClick={handlePurchase}
            disabled={isLoading}
            className={cn(
              'w-full',
              pack.featured && 'bg-accent-gold text-black hover:bg-accent-gold/90'
            )}
          >
            {isLoading ? 'Procesando...' : 'Comprar'}
          </Button>
        </div>
      );
    }
  Criterio de Éxito: "Componente renderiza y funciona"

TAREA-10.6.5:
  Nombre: "Crear sección de BTC packs en tienda"
  Tipo: Código (Antigravity)
  Archivo: "src/components/store/BtcPacksSection.tsx"
  Contenido: |
    import { BtcPackCard } from '@/components/payments/BtcPackCard';
    import { STRIPE_CONFIG } from '@/lib/stripe/config';

    export function BtcPacksSection() {
      return (
        <section className="py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Inyección de Capital
            </h2>
            <p className="text-text-secondary">
              Acelera tu progreso con BTC adicionales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <BtcPackCard packType="starter" />
            <BtcPackCard packType="popular" />
            <BtcPackCard packType="magnate" />
          </div>

          <p className="text-center text-xs text-text-secondary mt-6">
            Los BTC son moneda virtual sin valor real. No son canjeables.
          </p>
        </section>
      );
    }
  Criterio de Éxito: "Sección integrada en tienda"

SUBCAJA 10.7: Customer Portal
Portal de Autoservicio de Stripe
Tareas Atómicas para 10.7
yamlCopyTAREA-10.7.1:
  Nombre: "Configurar Customer Portal en Stripe Dashboard"
  Tipo: Manual (Operador)
  Acción: |
    1. Ir a Stripe Dashboard > Settings > Customer portal
    2. Habilitar las siguientes opciones:
       - Update payment method
       - Cancel subscription
       - View invoice history
    3. Configurar política de cancelación:
       - At end of billing period
    4. Configurar mensaje de cancelación personalizado
    5. Guardar configuración
  Output: "Customer Portal configurado"

TAREA-10.7.2:
  Nombre: "Crear Server Action para portal"
  Tipo: Código (Antigravity)
  Archivo: "src/actions/payments/create-portal.ts"
  Contenido: |
    'use server';

    import { createClient } from '@/lib/supabase/server';
    import { stripe } from '@/lib/stripe/client';
    import { STRIPE_CONFIG } from '@/lib/stripe/config';
    import { logger } from '@/lib/logger';

    export async function createPortalSession(): Promise<{
      success: boolean;
      url?: string;
      error?: string;
    }> {
      try {
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
          return { success: false, error: 'UNAUTHORIZED' };
        }

        const { data: profile } = await supabase
          .from('profiles')
          .select('stripe_customer_id')
          .eq('id', user.id)
          .single();

        if (!profile?.stripe_customer_id) {
          return { success: false, error: 'NO_CUSTOMER' };
        }

        const session = await stripe.billingPortal.sessions.create({
          customer: profile.stripe_customer_id,
          return_url: `${process.env.NEXT_PUBLIC_APP_URL}${STRIPE_CONFIG.urls.portalReturn}`,
        });

        logger.info({
          action: 'portal_session_created',
          userId: user.id,
        });

        return { success: true, url: session.url };

      } catch (error) {
        logger.error({
          action: 'portal_session_error',
          error: error instanceof Error ? error.message : 'Unknown',
        });
        return { success: false, error: 'PORTAL_FAILED' };
      }
    }
  Criterio de Éxito: "Action retorna URL del portal"

TAREA-10.7.3:
  Nombre: "Crear componente ManageSubscriptionButton"
  Tipo: Código (Antigravity)
  Archivo: "src/components/payments/ManageSubscriptionButton.tsx"
  Contenido: |
    'use client';

    import { useState } from 'react';
    import { Settings } from 'lucide-react';
    import { Button } from '@/components/ui/Button';
    import { createPortalSession } from '@/actions/payments/create-portal';

    interface ManageSubscriptionButtonProps {
      className?: string;
    }

    export function ManageSubscriptionButton({ className }: ManageSubscriptionButtonProps) {
      const [isLoading, setIsLoading] = useState(false);

      const handleClick = async () => {
        setIsLoading(true);
        try {
          const result = await createPortalSession();
          if (result.success && result.url) {
            window.location.href = result.url;
          }
        } catch (error) {
          console.error('Portal error:', error);
        } finally {
          setIsLoading(false);
        }
      };

      return (
        <Button
          onClick={handleClick}
          disabled={isLoading}
          variant="secondary"
          className={className}
        >
          <Settings className="w-4 h-4 mr-2" />
          {isLoading ? 'Cargando...' : 'Gestionar Suscripción'}
        </Button>
      );
    }
  Criterio de Éxito: "Botón redirige al portal"

TAREA-10.7.4:
  Nombre: "Crear página de gestión de suscripción"
  Tipo: Código (Antigravity)
  Archivo: "src/app/(dashboard)/profile/subscription/page.tsx"
  Contenido: |
    import { createClient } from '@/lib/supabase/server';
    import { redirect } from 'next/navigation';
    import { SubscriptionStatus } from '@/components/payments/SubscriptionStatus';
    import { ManageSubscriptionButton } from '@/components/payments/ManageSubscriptionButton';
    import { TrialCountdown } from '@/components/payments/TrialCountdown';
    import { getTrialStatus } from '@/lib/core/trial';

    export default async function SubscriptionPage() {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        redirect('/login');
      }

      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (!subscription) {
        redirect('/onboarding');
      }

      const trialStatus = getTrialStatus(subscription);

      return (
        <div className="max-w-2xl mx-auto py-8 px-4">
          <h1 className="text-2xl font-bold text-white mb-8">
            Tu Suscripción
          </h1>

          {trialStatus.isInTrial && (
            <TrialCountdown trialStatus={trialStatus} className="mb-6" />
          )}

          <SubscriptionStatus subscription={subscription} className="mb-6" />

          {subscription.status === 'active' && (
            <div className="flex justify-end">
              <ManageSubscriptionButton />
            </div>
          )}

          {(subscription.status === 'trial' || subscription.status === 'limbo') && (
            <div className="mt-6 p-4 bg-accent-gold/10 border border-accent-gold/30 rounded-lg">
              <p className="text-white mb-4">
                {subscription.status === 'trial'
                  ? 'Activa tu suscripción para continuar después del trial.'
                  : 'Reactiva tu cuenta para recuperar el acceso completo.'
                }
              </p>
              <CheckoutButton interval="monthly" className="w-full">
                {subscription.status === 'trial' ? 'Suscribirse' : 'Reactivar'}
              </CheckoutButton>
            </div>
          )}
        </div>
      );
    }
  Criterio de Éxito: "Página muestra estado y opciones"

SUBCAJA 10.8: Reembolsos y Disputas
Manejo de Situaciones Excepcionales
Tareas Atómicas para 10.8
yamlCopyTAREA-10.8.1:
  Nombre: "Crear política de reembolsos en documentación"
  Tipo: Documento (Claude)
  Archivo: "docs/REFUND_POLICY.md"
  Contenido: |
    # Política de Reembolsos - MetaMen100

    ## 1. Período de Prueba (Trial)
    - 5 días de prueba gratuita
    - No se realizan cobros durante el trial
    - No aplica reembolso (no hubo cobro)

    ## 2. Suscripciones

    ### 2.1 Primeros 7 días después del cobro
    - Reembolso completo disponible
    - Solicitar vía email a soporte@metamen100.com
    - Se procesa en 5-10 días hábiles
    - La cuenta se cancela inmediatamente

    ### 2.2 Después de 7 días
    - No se ofrecen reembolsos parciales
    - Puedes cancelar para que no se renueve
    - Mantienes acceso hasta fin del periodo pagado

    ## 3. Compras de BTC (Packs)
    - Los BTC son moneda virtual no canjeable
    - Las compras de BTC NO son reembolsables
    - Excepción: Error técnico comprobado

    ## 4. Proceso de Solicitud
    1. Enviar email a soporte@metamen100.com
    2. Incluir: Email de cuenta, razón, fecha de compra
    3. Respuesta en 24-48 horas

    ## 5. Disputas con Banco/Tarjeta
    - Intentar resolver con soporte primero
    - Chargebacks resultan en suspensión de cuenta
    - Reembolsos legítimos se procesan sin penalización
  Criterio de Éxito: "Documento creado"

TAREA-10.8.2:
  Nombre: "Configurar alertas de disputas en Stripe"
  Tipo: Manual (Operador)
  Acción: |
    1. En Stripe Dashboard > Settings > Email
    2. Habilitar notificaciones para:
       - Dispute created
       - Dispute updated
    3. Agregar email de soporte
  Output: "Alertas configuradas"

TAREA-10.8.3:
  Nombre: "Agregar manejo de webhook de disputas"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/stripe/webhooks.ts (agregar)"
  Modificación: |
    // Agregar al switch de eventos:

    case 'charge.dispute.created':
      await handleDisputeCreated(event.data.object as Stripe.Dispute);
      break;

    // Nueva función:
    async function handleDisputeCreated(dispute: Stripe.Dispute) {
      const supabase = await createClient();
      
      logger.warn({
        action: 'dispute_created',
        disputeId: dispute.id,
        amount: dispute.amount,
        reason: dispute.reason,
      });

      // Registrar en activity_logs para auditoría
      // El customer ID nos permite encontrar el usuario
      const { data: profile } = await supabase
        .from('profiles')
        .select('id, nickname, email')
        .eq('stripe_customer_id', dispute.customer)
        .single();

      if (profile) {
        await supabase.from('activity_logs').insert({
          user_id: profile.id,
          action: 'dispute_created',
          details: {
            dispute_id: dispute.id,
            amount: dispute.amount,
            reason: dispute.reason,
          },
        });

        // TODO: Enviar notificación al equipo de soporte
      }
    }
  Criterio de Éxito: "Disputas loggeadas correctamente"

SUBCAJA 10.9: Analytics de Revenue
Métricas de Monetización
Tareas Atómicas para 10.9
yamlCopyTAREA-10.9.1:
  Nombre: "Crear tabla de métricas de revenue"
  Tipo: Migración SQL (Antigravity)
  Archivo: "supabase/migrations/20240125_revenue_metrics.sql"
  Contenido: |
    -- Vista materializada para métricas de revenue
    CREATE MATERIALIZED VIEW IF NOT EXISTS revenue_metrics AS
    SELECT
      DATE_TRUNC('day', created_at) as date,
      COUNT(*) FILTER (WHERE status = 'active') as active_subscriptions,
      COUNT(*) FILTER (WHERE status = 'trial') as trial_users,
      COUNT(*) FILTER (WHERE status = 'limbo') as limbo_users,
      COUNT(*) FILTER (WHERE status = 'cancelled') as cancelled_users
    FROM subscriptions
    GROUP BY DATE_TRUNC('day', created_at);

    -- Índice para la vista
    CREATE UNIQUE INDEX idx_revenue_metrics_date ON revenue_metrics(date);

    -- Función para refrescar métricas (ejecutar diariamente)
    CREATE OR REPLACE FUNCTION refresh_revenue_metrics()
    RETURNS VOID AS $$
    BEGIN
      REFRESH MATERIALIZED VIEW CONCURRENTLY revenue_metrics;
    END;
    $$ LANGUAGE plpgsql;
  Criterio de Éxito: "Vista materializada creada"

TAREA-10.9.2:
  Nombre: "Integrar eventos de pago con PostHog"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/analytics/revenue-events.ts"
  Contenido: |
    import { posthog } from '@/lib/analytics/posthog';

    export const revenueEvents = {
      trialStarted: (userId: string) => {
        posthog.capture({
          distinctId: userId,
          event: 'trial_started',
        });
      },

      subscriptionStarted: (userId: string, interval: 'monthly' | 'yearly', amount: number) => {
        posthog.capture({
          distinctId: userId,
          event: 'subscription_started',
          properties: {
            interval,
            amount,
            currency: 'USD',
          },
        });
      },

      subscriptionRenewed: (userId: string, amount: number) => {
        posthog.capture({
          distinctId: userId,
          event: 'subscription_renewed',
          properties: { amount },
        });
      },

      subscriptionCancelled: (userId: string, reason?: string) => {
        posthog.capture({
          distinctId: userId,
          event: 'subscription_cancelled',
          properties: { reason },
        });
      },

      btcPackPurchased: (userId: string, packType: string, amount: number, btcAmount: number) => {
        posthog.capture({
          distinctId: userId,
          event: 'btc_pack_purchased',
          properties: {
            pack_type: packType,
            amount,
            btc_amount: btcAmount,
          },
        });
      },

      paymentFailed: (userId: string) => {
        posthog.capture({
          distinctId: userId,
          event: 'payment_failed',
        });
      },
    };
  Criterio de Éxito: "Eventos definidos"

TAREA-10.9.3:
  Nombre: "Integrar eventos en webhooks"
  Tipo: Código (Antigravity)
  Archivo: "src/lib/stripe/webhooks.ts (modificar)"
  Modificación: |
    // Importar al inicio:
    import { revenueEvents } from '@/lib/analytics/revenue-events';

    // En handleSubscriptionChange:
    if (subscription.status === 'active' && !existingSubscription) {
      // Nueva suscripción
      const interval = subscription.items.data[0].price.recurring?.interval;
      const amount = subscription.items.data[0].price.unit_amount || 0;
      revenueEvents.subscriptionStarted(userId, interval as 'monthly' | 'yearly', amount / 100);
    }

    // En handlePaymentFailed:
    revenueEvents.paymentFailed(subscription.user_id);

    // En creditBtcPack:
    revenueEvents.btcPackPurchased(userId, packType, pack.price, pack.btcAmount);
  Criterio de Éxito: "Eventos se envían a PostHog"

TAREA-10.9.4:
  Nombre: "Crear dashboard de revenue (admin)"
  Tipo: Código (Antigravity)
  Archivo: "src/app/(admin)/admin/revenue/page.tsx"
  Contenido: |
    // Dashboard simple para ver métricas clave
    // Solo accesible por admins
    
    import { createClient } from '@/lib/supabase/server';
    import { redirect } from 'next/navigation';

    export default async function RevenueDashboard() {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();

      // Verificar admin (implementar lógica real)
      // if (!isAdmin(user)) redirect('/dashboard');

      // Obtener métricas
      const { data: metrics } = await supabase
        .from('subscriptions')
        .select('status')
        .then(({ data }) => ({
          data: {
            total: data?.length || 0,
            active: data?.filter(s => s.status === 'active').length || 0,
            trial: data?.filter(s => s.status === 'trial').length || 0,
            limbo: data?.filter(s => s.status === 'limbo').length || 0,
          }
        }));

      return (
        <div className="p-8">
          <h1 className="text-2xl font-bold text-white mb-8">Revenue Dashboard</h1>
          
          <div className="grid grid-cols-4 gap-4">
            <MetricCard title="Total Usuarios" value={metrics?.total || 0} />
            <MetricCard title="Activos" value={metrics?.active || 0} color="green" />
            <MetricCard title="En Trial" value={metrics?.trial || 0} color="yellow" />
            <MetricCard title="En Limbo" value={metrics?.limbo || 0} color="red" />
          </div>
        </div>
      );
    }

    function MetricCard({ title, value, color = 'white' }: { 
      title: string; 
      value: number; 
      color?: string;
    }) {
      const colorClass = {
        white: 'text-white',
        green: 'text-green-400',
        yellow: 'text-yellow-400',
        red: 'text-red-400',
      }[color];

      return (
        <div className="bg-bg-secondary rounded-xl p-6">
          <p className="text-text-secondary text-sm mb-2">{title}</p>
          <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
        </div>
      );
    }
  Criterio de Éxito: "Dashboard muestra métricas básicas"

RESUMEN DE CAJA 10: MONETIZACIÓN (STRIPE)
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 10 - RESUMEN DE ENTREGABLES                              ║
║                                                                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  SUBCAJA                   │ ARCHIVOS                        │ TAREAS │ PRIORIDAD   ║
║  ─────────────────────────┼─────────────────────────────────┼────────┼───────────  ║
║  10.1 Setup de Stripe      │ client.ts, config.ts            │   8    │ P0 (Base)   ║
║  10.2 Sistema de Trial     │ trial.ts, TrialCountdown.tsx    │   9    │ P0 (Core)   ║
║  10.3 Checkout/Suscripción │ create-checkout.ts, pricing/    │   6    │ P0 (Core)   ║
║  10.4 Webhooks             │ /api/webhooks/stripe/route.ts   │   6    │ P0 (Core)   ║
║  10.5 Modo Limbo           │ limbo.ts, LimboOverlay.tsx      │   4    │ P1 (Import) ║
║  10.6 BTC Packs            │ purchase-btc.ts, btc-packs.ts   │   5    │ P2 (Revenue)║
║  10.7 Customer Portal      │ create-portal.ts                │   4    │ P1 (UX)     ║
║  10.8 Reembolsos           │ REFUND_POLICY.md, webhook       │   3    │ P2 (Ops)    ║
║  10.9 Analytics Revenue    │ revenue-events.ts               │   4    │ P2 (Growth) ║
║  ─────────────────────────┼─────────────────────────────────┼────────┼───────────  ║
║  TOTAL CAJA 10             │ ~20 archivos                    │   49   │             ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ACTUALIZACIÓN DEL PROGRESO GLOBAL
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
║  📦 CAJA 09: Economía y Tienda            │ 9 subcajas  │  59 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 10: Monetización (Stripe)        │ 9 subcajas  │  49 tareas │ ✅ COMPLETO  ║
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  📦 CAJA 11: Notificaciones y Realtime    │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 12: Observabilidad y Calidad     │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 13: Lanzamiento y Operaciones    │ ?? subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  TOTAL DESGLOSADO HASTA AHORA             │ 89 subcajas │ 587 tareas │ 10/13 CAJAS  ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝