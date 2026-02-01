📦 CAJA 05: AUTENTICACIÓN Y ONBOARDING
Desglose Atómico Completo

Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 05: AUTENTICACIÓN Y ONBOARDING                            ║
║                                                                                      ║
║    "La primera impresión define si el usuario se convierte en Leyenda               ║
║     o abandona antes de empezar"                                                     ║
║                                                                                      ║
║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
║    │                                                                            │   ║
║    │   📄 05.1 Landing     📄 05.2 Registro     📄 05.3 Verificación           │   ║
║    │   Page                Email/Google         Teléfono                        │   ║
║    │                                                                            │   ║
║    │   📄 05.4 Login       📄 05.5 Onboarding   📄 05.6 Selección              │   ║
║    │   Sistema             Wizard               Arquetipo                       │   ║
║    │                                                                            │   ║
║    │   📄 05.7 Juramento                                                        │   ║
║    │   y Activación                                                             │   ║
║    │                                                                            │   ║
║    └────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                      ║
║    Responsable: Claude (planificación) → Antigravity (implementación)               ║
║    Archivos a Crear: ~35 archivos                                                   ║
║    Tiempo Estimado: 8-12 horas de desarrollo                                        ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ÍNDICE DE SUBCAJAS

SUBCAJA 05.1: Landing Page
SUBCAJA 05.2: Sistema de Registro
SUBCAJA 05.3: Verificación de Teléfono
SUBCAJA 05.4: Sistema de Login
SUBCAJA 05.5: Onboarding Wizard
SUBCAJA 05.6: Selección de Arquetipo
SUBCAJA 05.7: Juramento y Activación


SUBCAJA 05.1: Landing Page
Primera Impresión del Usuario
Archivos a Crear
Copy📁 Archivos de Landing Page
│
├── src/app/(marketing)/page.tsx                    # Landing principal
├── src/app/(marketing)/layout.tsx                  # Layout de marketing
├── src/components/landing/HeroSection.tsx          # Sección hero
├── src/components/landing/SocialProof.tsx          # Marquee de logos
├── src/components/landing/VisualHook.tsx           # Teaser de evolución
├── src/components/landing/Footer.tsx               # Footer con links
├── src/components/landing/Navbar.tsx               # Navegación
└── src/components/landing/CTAButtons.tsx           # Botones de acción
Estructura de la Página
CopyLANDING PAGE - ESTRUCTURA
│
├── NAVBAR (Header)
│   ├── Logo METAMEN100 (izquierda)
│   ├── Links: Inicio | Cómo Funciona | Ayuda | Blog
│   └── Botón: [Iniciar Sesión] (derecha)
│
├── HERO SECTION
│   ├── Fondo: Negro absoluto (#000000)
│   ├── Logo METAMEN100 centrado (gran escala)
│   ├── Sin headline de texto (logo es el headline)
│   └── CTAs:
│       ├── [Iniciar Sesión] - Outline blanco con glow
│       └── [Regístrate Gratis] - Sólido rojo neón (#FF073A)
│
├── SOCIAL PROOF (Marquee)
│   ├── Header: "COMO LO VISTE EN"
│   └── Slider de logos (placeholders inicialmente)
│
├── VISUAL HOOK
│   ├── Teaser de evolución Indigente → Semi-Dios
│   ├── Mantener misterio (no revelar Nivel 10 completo)
│   └── Referencia: Estilo similar a ej_Landingpage_Secc_02.png
│
└── FOOTER
    ├── Social: Instagram, Bluesky, Facebook, Tumblr
    ├── Comunidad: Apoya, FAQ, Reportar Error, Solicitar Función
    └── Legal: © 2026, Privacidad, Términos
Especificación Visual (Referencia: Supabase Dark Mode)
typescriptCopy// Paleta de colores para Landing
const LANDING_COLORS = {
  // Fondos
  background: '#000000',           // Negro absoluto
  backgroundAlt: '#0A0A0A',        // Negro profundo para secciones
  
  // Textos
  textPrimary: '#FFFFFF',          // Blanco sólido
  textSecondary: '#A1A1AA',        // Gris para subtextos
  
  // Acentos
  accentRed: '#FF0000',            // Rojo sólido
  accentRedNeon: '#FF073A',        // Rojo neón (botones)
  accentWhiteNeon: '#F8FFFF',      // Blanco con glow cian
  
  // Efectos
  glowRed: '0 0 20px rgba(255, 7, 58, 0.5)',
  glowWhite: '0 0 15px rgba(255, 255, 255, 0.3)',
};
Tareas Atómicas para 05.1 Landing Page
yamlCopyTAREA-05.1.1:
  Nombre: "Crear layout de marketing"
  Archivo: "src/app/(marketing)/layout.tsx"
  Acción: |
    Layout para páginas públicas (landing, login, register)
    - Sin sidebar
    - Sin auth check
    - Navbar con logo y links
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el layout para el route group (marketing) en Next.js 14.
    
    Requisitos:
    - Fondo negro absoluto (#000000)
    - Navbar importado de @/components/landing/Navbar
    - Footer importado de @/components/landing/Footer
    - children renderizado entre Navbar y Footer
    - Metadata: title="MetaMen100 - Sistema Operativo de Conducta"
    
    ```tsx
    // src/app/(marketing)/layout.tsx
    import { Navbar } from '@/components/landing/Navbar';
    import { Footer } from '@/components/landing/Footer';
    
    export const metadata = {
      title: 'MetaMen100 - Sistema Operativo de Conducta',
      description: 'Transforma tu disciplina en estatus visual',
    };
    
    export default function MarketingLayout({ children }) {
      return (
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      );
    }
    ```

TAREA-05.1.2:
  Nombre: "Crear componente Navbar"
  Archivo: "src/components/landing/Navbar.tsx"
  Acción: |
    Barra de navegación para landing
    - Logo a la izquierda
    - Links al centro (desktop) / hamburger (mobile)
    - Botón Iniciar Sesión a la derecha
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente Navbar para la landing page.
    
    Requisitos:
    - 'use client' (tiene interactividad)
    - Logo: Importar SVG de @/components/icons/Logo
    - Links: Inicio, Cómo Funciona, Ayuda, Blog
    - Botón: "Iniciar Sesión" → Link a /login
    - Responsive: Links colapsados en mobile con hamburger menu
    - Sticky en scroll
    - Background transparente → negro al hacer scroll
    
    Estilos:
    - Height: 64px
    - Padding horizontal: 24px (mobile), 48px (desktop)
    - Transición de background en scroll
    
    Usa Zustand o useState para el estado del menú mobile.

TAREA-05.1.3:
  Nombre: "Crear componente HeroSection"
  Archivo: "src/components/landing/HeroSection.tsx"
  Acción: |
    Sección principal de la landing
    - Logo grande centrado
    - Botones de CTA
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente HeroSection.
    
    Estructura:
    ```
    <section className="min-h-screen flex flex-col items-center justify-center">
      <Logo className="w-80 md:w-[500px] mb-12" />
      <div className="flex gap-4">
        <CTAButton variant="outline" href="/login">Iniciar Sesión</CTAButton>
        <CTAButton variant="solid" href="/register">Regístrate Gratis</CTAButton>
      </div>
    </section>
    ```
    
    Requisitos:
    - Fondo: bg-black
    - Logo con animación sutil de "respiración" (pulse suave)
    - Botones con efectos de hover (glow)
    - Centrado vertical y horizontal
    - Responsive: Logo más pequeño en mobile

TAREA-05.1.4:
  Nombre: "Crear componente CTAButtons"
  Archivo: "src/components/landing/CTAButtons.tsx"
  Acción: |
    Botones estilizados para landing
    - Variante outline (blanco con glow)
    - Variante solid (rojo neón)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente CTAButtons con dos variantes.
    
    ```tsx
    interface CTAButtonProps {
      variant: 'outline' | 'solid';
      href: string;
      children: React.ReactNode;
    }
    
    const variants = {
      outline: `
        border-2 border-white text-white
        hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
        transition-shadow duration-300
      `,
      solid: `
        bg-[#FF073A] text-white border-2 border-[#FF073A]
        hover:shadow-[0_0_25px_rgba(255,7,58,0.6)]
        transition-shadow duration-300
      `,
    };
    ```
    
    - Padding: px-8 py-3
    - Font: font-semibold text-lg
    - Border-radius: rounded-lg
    - Usa <Link> de next/link

TAREA-05.1.5:
  Nombre: "Crear componente SocialProof"
  Archivo: "src/components/landing/SocialProof.tsx"
  Acción: |
    Marquee de logos "Como lo viste en"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente SocialProof con marquee animado.
    
    Estructura:
    ```
    <section className="py-16 bg-[#0A0A0A]">
      <h3 className="text-center text-white/50 text-sm uppercase tracking-widest mb-8">
        Como lo viste en
      </h3>
      <div className="overflow-hidden">
        <div className="flex animate-marquee">
          {/* Logos duplicados para loop infinito */}
        </div>
      </div>
    </section>
    ```
    
    Requisitos:
    - Animación CSS de marquee (scroll infinito)
    - Logos placeholder (rectángulos blancos al 50% opacity)
    - 6-8 logos en el slider
    - Velocidad: 30s para completar un ciclo
    
    CSS para animación:
    ```css
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    ```

TAREA-05.1.6:
  Nombre: "Crear componente VisualHook"
  Archivo: "src/components/landing/VisualHook.tsx"
  Acción: |
    Teaser visual de la evolución del avatar
    - Mostrar concepto de transformación
    - NO revelar estado final completo
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente VisualHook.
    
    Estructura:
    ```
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tu Disciplina, Visualizada
        </h2>
        <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Cada acción que realizas transforma tu avatar. 
          Cada día que fallas, sufre las consecuencias.
        </p>
        
        {/* Comparativa visual */}
        <div className="flex justify-center items-center gap-8">
          <div className="text-center">
            <div className="w-48 h-48 bg-gray-800 rounded-lg mb-4" />
            <span className="text-white/50">Día 1</span>
          </div>
          <ArrowRight className="text-[#FF073A]" />
          <div className="text-center">
            <div className="w-48 h-48 bg-gray-800 rounded-lg mb-4 
                          border-2 border-[#FF073A]/50" />
            <span className="text-white/50">Día 100</span>
          </div>
        </div>
      </div>
    </section>
    ```
    
    Nota: Las imágenes son placeholders por ahora.
    Se reemplazarán con assets reales en CAJA 08 (IA Generativa).

TAREA-05.1.7:
  Nombre: "Crear componente Footer"
  Archivo: "src/components/landing/Footer.tsx"
  Acción: |
    Footer con links y legal
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente Footer.
    
    Estructura en 4 columnas:
    1. Logo + © 2026 MetaMen100
    2. Social: Instagram, Bluesky, Facebook, Tumblr (iconos)
    3. Comunidad: Apoya, FAQ, Reportar Error, Solicitar Función
    4. Legal: Política de Privacidad, Términos y Condiciones
    
    Estilos:
    - Background: #0A0A0A
    - Padding: py-16 px-8
    - Links en text-white/50 hover:text-white
    - Grid 1 col mobile, 4 cols desktop
    
    Links son placeholders (#) por ahora.

TAREA-05.1.8:
  Nombre: "Crear página principal de landing"
  Archivo: "src/app/(marketing)/page.tsx"
  Acción: |
    Ensamblar todos los componentes
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página principal de landing ensamblando los componentes.
    
    ```tsx
    // src/app/(marketing)/page.tsx
    import { HeroSection } from '@/components/landing/HeroSection';
    import { SocialProof } from '@/components/landing/SocialProof';
    import { VisualHook } from '@/components/landing/VisualHook';
    
    export default function LandingPage() {
      return (
        <>
          <HeroSection />
          <SocialProof />
          <VisualHook />
        </>
      );
    }
    ```
    
    Nota: Es un Server Component (sin 'use client').

TAREA-05.1.9:
  Nombre: "Crear Splash Screen"
  Archivo: "src/components/landing/SplashScreen.tsx"
  Acción: |
    Pantalla de carga inicial con logo
    - Se muestra por 1-2 segundos
    - Transición suave a landing
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea un SplashScreen que se muestra al cargar la app.
    
    Requisitos:
    - Fondo negro absoluto
    - Logo centrado con efecto de "encendido" (fade in + scale)
    - Duración: 1.5 segundos
    - Después: fade out y mostrar contenido
    
    Implementación con Framer Motion:
    ```tsx
    'use client';
    
    import { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Logo } from '@/components/icons/Logo';
    
    export function SplashScreen({ children }) {
      const [showSplash, setShowSplash] = useState(true);
      
      useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 1500);
        return () => clearTimeout(timer);
      }, []);
      
      return (
        <AnimatePresence mode="wait">
          {showSplash ? (
            <motion.div
              key="splash"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Logo className="w-48" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      );
    }
    ```
    
    Integrar en layout.tsx de marketing.

TAREA-05.1.10:
  Nombre: "Crear Logo SVG como componente"
  Archivo: "src/components/icons/Logo.tsx"
  Acción: |
    Componente del logo METAMEN100
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea un componente Logo que renderiza el SVG del logo.
    
    Por ahora, usa un placeholder de texto estilizado:
    ```tsx
    interface LogoProps {
      className?: string;
    }
    
    export function Logo({ className }: LogoProps) {
      return (
        <div className={cn('font-bold tracking-tighter', className)}>
          <span className="text-white">META</span>
          <span className="text-[#FF073A]">MEN</span>
          <span className="text-white">100</span>
        </div>
      );
    }
    ```
    
    Nota: Se reemplazará con SVG real cuando el cliente lo proporcione.

SUBCAJA 05.2: Sistema de Registro
Crear Cuenta Nueva
Archivos a Crear
Copy📁 Archivos de Registro
│
├── src/app/(marketing)/register/page.tsx           # Página de registro
├── src/components/auth/RegisterForm.tsx            # Formulario de registro
├── src/components/auth/GoogleAuthButton.tsx        # Botón de Google
├── src/components/auth/AuthCard.tsx                # Card contenedor
├── src/actions/auth/register.ts                    # Server Action de registro
├── src/lib/validations/auth.ts                     # Schemas Zod para auth
└── src/lib/utils/nickname-generator.ts             # Generador de nicknames
Flujo de Registro
CopyFLUJO DE REGISTRO
│
├── 1. PANTALLA DE REGISTRO
│   ├── Opciones:
│   │   ├── Email + Password
│   │   └── Google OAuth
│   │
│   └── Campos para Email/Password:
│       ├── Email (required, valid format)
│       ├── Password (required, min 8 chars)
│       └── Checkbox: Acepto términos y política de privacidad
│
├── 2. AL ENVIAR FORMULARIO (Email/Password)
│   ├── Validar inputs con Zod
│   ├── Llamar a Supabase Auth signUp
│   ├── Si éxito:
│   │   ├── Trigger de Postgres crea entidades automáticamente
│   │   │   ├── profiles (con nickname auto: METAMEN-XXX)
│   │   │   ├── avatar_states (vectores iniciales)
│   │   │   ├── wallets (balance 0)
│   │   │   └── subscriptions (status: 'trial')
│   │   │
│   │   └── Redirigir a /verify-phone
│   │
│   └── Si error:
│       └── Mostrar mensaje de error específico
│
├── 3. AL USAR GOOGLE AUTH
│   ├── Redirect a Supabase OAuth
│   ├── Callback maneja creación de entidades
│   └── Redirigir a /verify-phone
│
└── 4. NICKNAME AUTOMÁTICO
    ├── Formato: METAMEN-{número_secuencial}
    ├── Ejemplos: METAMEN-001, METAMEN-002, METAMEN-1247
    └── Generado en el trigger de Postgres
Especificación Visual del Formulario
Copy┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                        [LOGO]                               │
│                                                             │
│                   Únete al Protocolo                        │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🔵 Continuar con Google                             │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│                    ─────── o ───────                        │
│                                                             │
│  Email                                                      │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ tu@email.com                                         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Contraseña                                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ••••••••                                     👁️     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ☐ Acepto los Términos de Servicio y la                    │
│    Política de Privacidad                                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              CREAR CUENTA                            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│              ¿Ya tienes cuenta? Inicia sesión              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
Tareas Atómicas para 05.2 Registro
yamlCopyTAREA-05.2.1:
  Nombre: "Crear schemas de validación para auth"
  Archivo: "src/lib/validations/auth.ts"
  Acción: |
    Schemas Zod para registro y login
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea los schemas de validación para autenticación con Zod.
    
    ```typescript
    // src/lib/validations/auth.ts
    import { z } from 'zod';
    
    export const registerSchema = z.object({
      email: z
        .string()
        .min(1, 'El email es requerido')
        .email('Formato de email inválido'),
      password: z
        .string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          'La contraseña debe contener mayúscula, minúscula y número'
        ),
      acceptTerms: z
        .boolean()
        .refine((val) => val === true, {
          message: 'Debes aceptar los términos y condiciones',
        }),
    });
    
    export const loginSchema = z.object({
      email: z
        .string()
        .min(1, 'El email es requerido')
        .email('Formato de email inválido'),
      password: z
        .string()
        .min(1, 'La contraseña es requerida'),
    });
    
    export const phoneVerificationSchema = z.object({
      phone: z
        .string()
        .min(10, 'Número de teléfono inválido')
        .regex(/^\+?[1-9]\d{9,14}$/, 'Formato de teléfono inválido'),
      code: z
        .string()
        .length(6, 'El código debe tener 6 dígitos')
        .regex(/^\d+$/, 'El código debe contener solo números'),
    });
    
    export type RegisterInput = z.infer<typeof registerSchema>;
    export type LoginInput = z.infer<typeof loginSchema>;
    export type PhoneVerificationInput = z.infer<typeof phoneVerificationSchema>;
    ```

TAREA-05.2.2:
  Nombre: "Crear generador de nicknames"
  Archivo: "src/lib/utils/nickname-generator.ts"
  Acción: |
    Función que genera nicknames secuenciales
    (Esto se usa en el trigger de Postgres, pero también en frontend para preview)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea una utilidad para generar nicknames.
    
    ```typescript
    // src/lib/utils/nickname-generator.ts
    
    /**
     * Genera un nickname en formato METAMEN-XXX
     * @param sequentialId - Número secuencial del usuario
     * @returns Nickname formateado
     */
    export function generateNickname(sequentialId: number): string {
      // Pad con ceros para consistencia visual
      const paddedId = sequentialId.toString().padStart(3, '0');
      return `METAMEN-${paddedId}`;
    }
    
    /**
     * Valida que un nickname tenga el formato correcto
     * @param nickname - Nickname a validar
     * @returns boolean
     */
    export function isValidNickname(nickname: string): boolean {
      return /^METAMEN-\d{3,}$/.test(nickname);
    }
    ```
    
    Nota: El número secuencial real viene de la DB (trigger).
    Esta función es para display/preview.

TAREA-05.2.3:
  Nombre: "Crear Server Action de registro"
  Archivo: "src/actions/auth/register.ts"
  Acción: |
    Server Action que maneja el registro de usuarios
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el Server Action para registro de usuarios.
    
    ```typescript
    // src/actions/auth/register.ts
    'use server';
    
    import { createClient } from '@/lib/supabase/server';
    import { registerSchema, type RegisterInput } from '@/lib/validations/auth';
    import { redirect } from 'next/navigation';
    import { headers } from 'next/headers';
    
    interface RegisterResult {
      success: boolean;
      error?: string;
      code?: string;
    }
    
    export async function registerWithEmail(
      rawInput: unknown
    ): Promise<RegisterResult> {
      // 1. Validar input
      const parseResult = registerSchema.safeParse(rawInput);
      
      if (!parseResult.success) {
        const firstError = parseResult.error.errors[0];
        return {
          success: false,
          error: firstError.message,
          code: 'VALIDATION_ERROR',
        };
      }
      
      const { email, password } = parseResult.data;
      
      // 2. Crear cliente de Supabase
      const supabase = await createClient();
      
      // 3. Intentar registro
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // El email confirmation está deshabilitado por ahora
          // La verificación real es por teléfono
          emailRedirectTo: `${getBaseUrl()}/auth/callback`,
        },
      });
      
      // 4. Manejar errores
      if (error) {
        console.error('[Register] Supabase error:', error);
        
        // Mapear errores comunes
        if (error.message.includes('already registered')) {
          return {
            success: false,
            error: 'Este email ya está registrado',
            code: 'EMAIL_EXISTS',
          };
        }
        
        return {
          success: false,
          error: 'Error al crear la cuenta. Intenta de nuevo.',
          code: 'SIGNUP_ERROR',
        };
      }
      
      // 5. Verificar que se creó el usuario
      if (!data.user) {
        return {
          success: false,
          error: 'No se pudo crear el usuario',
          code: 'USER_CREATION_FAILED',
        };
      }
      
      // 6. Éxito - redirigir a verificación de teléfono
      // El trigger de Postgres ya creó: profiles, avatar_states, wallets, subscriptions
      return { success: true };
    }
    
    function getBaseUrl(): string {
      const headersList = headers();
      const host = headersList.get('host') || 'localhost:3000';
      const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
      return `${protocol}://${host}`;
    }
    ```

TAREA-05.2.4:
  Nombre: "Crear componente AuthCard"
  Archivo: "src/components/auth/AuthCard.tsx"
  Acción: |
    Card contenedor reutilizable para formularios de auth
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el componente AuthCard.
    
    ```tsx
    // src/components/auth/AuthCard.tsx
    import { cn } from '@/lib/utils';
    import { Logo } from '@/components/icons/Logo';
    
    interface AuthCardProps {
      title: string;
      subtitle?: string;
      children: React.ReactNode;
      className?: string;
    }
    
    export function AuthCard({ title, subtitle, children, className }: AuthCardProps) {
      return (
        <div className={cn(
          'w-full max-w-md mx-auto',
          'bg-[#0A0A0A] border border-white/10 rounded-xl',
          'p-8 shadow-2xl',
          className
        )}>
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo className="text-2xl" />
          </div>
          
          {/* Título */}
          <h1 className="text-2xl font-bold text-center text-white mb-2">
            {title}
          </h1>
          
          {/* Subtítulo opcional */}
          {subtitle && (
            <p className="text-white/50 text-center text-sm mb-8">
              {subtitle}
            </p>
          )}
          
          {/* Contenido */}
          {children}
        </div>
      );
    }
    ```

TAREA-05.2.5:
  Nombre: "Crear componente GoogleAuthButton"
  Archivo: "src/components/auth/GoogleAuthButton.tsx"
  Acción: |
    Botón para OAuth con Google
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el botón de autenticación con Google.
    
    ```tsx
    // src/components/auth/GoogleAuthButton.tsx
    'use client';
    
    import { useState } from 'react';
    import { createClient } from '@/lib/supabase/client';
    import { GoogleIcon } from '@/components/icons/GoogleIcon';
    
    interface GoogleAuthButtonProps {
      mode: 'login' | 'register';
    }
    
    export function GoogleAuthButton({ mode }: GoogleAuthButtonProps) {
      const [isLoading, setIsLoading] = useState(false);
      
      const handleGoogleAuth = async () => {
        setIsLoading(true);
        
        const supabase = createClient();
        
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: `${window.location.origin}/auth/callback`,
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
          },
        });
        
        if (error) {
          console.error('[GoogleAuth] Error:', error);
          setIsLoading(false);
        }
        // Si no hay error, el usuario es redirigido a Google
      };
      
      return (
        <button
          onClick={handleGoogleAuth}
          disabled={isLoading}
          className={`
            w-full flex items-center justify-center gap-3
            px-4 py-3 rounded-lg
            bg-white text-black font-medium
            hover:bg-white/90 transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
          ) : (
            <>
              <GoogleIcon className="w-5 h-5" />
              Continuar con Google
            </>
          )}
        </button>
      );
    }
    ```

TAREA-05.2.6:
  Nombre: "Crear componente RegisterForm"
  Archivo: "src/components/auth/RegisterForm.tsx"
  Acción: |
    Formulario completo de registro
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el formulario de registro completo.
    
    ```tsx
    // src/components/auth/RegisterForm.tsx
    'use client';
    
    import { useState } from 'react';
    import { useRouter } from 'next/navigation';
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import Link from 'next/link';
    
    import { registerSchema, type RegisterInput } from '@/lib/validations/auth';
    import { registerWithEmail } from '@/actions/auth/register';
    import { GoogleAuthButton } from './GoogleAuthButton';
    import { Input } from '@/components/ui/Input';
    import { Button } from '@/components/ui/Button';
    import { Checkbox } from '@/components/ui/Checkbox';
    import { Eye, EyeOff } from 'lucide-react';
    
    export function RegisterForm() {
      const router = useRouter();
      const [showPassword, setShowPassword] = useState(false);
      const [serverError, setServerError] = useState<string | null>(null);
      
      const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
          email: '',
          password: '',
          acceptTerms: false,
        },
      });
      
      const onSubmit = async (data: RegisterInput) => {
        setServerError(null);
        
        const result = await registerWithEmail(data);
        
        if (!result.success) {
          setServerError(result.error || 'Error desconocido');
          return;
        }
        
        // Redirigir a verificación de teléfono
        router.push('/verify-phone');
      };
      
      return (
        <div className="space-y-6">
          {/* Google Auth */}
          <GoogleAuthButton mode="register" />
          
          {/* Separador */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0A0A0A] text-white/50">o</span>
            </div>
          </div>
          
          {/* Formulario Email/Password */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Error del servidor */}
            {serverError && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm">{serverError}</p>
              </div>
            )}
            
            {/* Email */}
            <div>
              <label className="block text-sm text-white/70 mb-2">Email</label>
              <Input
                type="email"
                placeholder="tu@email.com"
                {...register('email')}
                error={errors.email?.message}
              />
            </div>
            
            {/* Password */}
            <div>
              <label className="block text-sm text-white/70 mb-2">Contraseña</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mínimo 8 caracteres"
                  {...register('password')}
                  error={errors.password?.message}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            {/* Terms */}
            <div className="flex items-start gap-2">
              <Checkbox
                {...register('acceptTerms')}
                id="acceptTerms"
              />
              <label htmlFor="acceptTerms" className="text-sm text-white/70">
                Acepto los{' '}
                <Link href="/terms" className="text-[#FF073A] hover:underline">
                  Términos de Servicio
                </Link>{' '}
                y la{' '}
                <Link href="/privacy" className="text-[#FF073A] hover:underline">
                  Política de Privacidad
                </Link>
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-red-400 text-sm">{errors.acceptTerms.message}</p>
            )}
            
            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              isLoading={isSubmitting}
            >
              CREAR CUENTA
            </Button>
          </form>
          
          {/* Link a login */}
          <p className="text-center text-white/50 text-sm">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-white hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      );
    }
    ```

TAREA-05.2.7:
  Nombre: "Crear página de registro"
  Archivo: "src/app/(marketing)/register/page.tsx"
  Acción: |
    Página completa de registro
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página de registro.
    
    ```tsx
    // src/app/(marketing)/register/page.tsx
    import { redirect } from 'next/navigation';
    import { createClient } from '@/lib/supabase/server';
    import { AuthCard } from '@/components/auth/AuthCard';
    import { RegisterForm } from '@/components/auth/RegisterForm';
    
    export const metadata = {
      title: 'Crear Cuenta | MetaMen100',
    };
    
    export default async function RegisterPage() {
      // Verificar si ya está autenticado
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Si ya está autenticado, verificar si completó onboarding
        const { data: profile } = await supabase
          .from('profiles')
          .select('onboarding_completed, phone_verified')
          .eq('id', user.id)
          .single();
        
        if (!profile?.phone_verified) {
          redirect('/verify-phone');
        }
        
        if (!profile?.onboarding_completed) {
          redirect('/onboarding');
        }
        
        redirect('/dashboard');
      }
      
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <AuthCard
            title="Únete al Protocolo"
            subtitle="100 días para transformar tu identidad"
          >
            <RegisterForm />
          </AuthCard>
        </div>
      );
    }
    ```

TAREA-05.2.8:
  Nombre: "Crear callback de OAuth"
  Archivo: "src/app/auth/callback/route.ts"
  Acción: |
    Route handler para callback de OAuth (Google)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el route handler para el callback de OAuth.
    
    ```typescript
    // src/app/auth/callback/route.ts
    import { createClient } from '@/lib/supabase/server';
    import { NextResponse } from 'next/server';
    
    export async function GET(request: Request) {
      const requestUrl = new URL(request.url);
      const code = requestUrl.searchParams.get('code');
      const origin = requestUrl.origin;
      
      if (code) {
        const supabase = await createClient();
        
        // Intercambiar código por sesión
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        
        if (error) {
          console.error('[OAuth Callback] Error:', error);
          return NextResponse.redirect(`${origin}/login?error=oauth_error`);
        }
        
        // Verificar si el usuario necesita completar onboarding
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('phone_verified, onboarding_completed')
            .eq('id', user.id)
            .single();
          
          // Redirigir según estado
          if (!profile?.phone_verified) {
            return NextResponse.redirect(`${origin}/verify-phone`);
          }
          
          if (!profile?.onboarding_completed) {
            return NextResponse.redirect(`${origin}/onboarding`);
          }
          
          return NextResponse.redirect(`${origin}/dashboard`);
        }
      }
      
      // Si no hay código, redirigir a login
      return NextResponse.redirect(`${origin}/login`);
    }
    ```

SUBCAJA 05.3: Verificación de Teléfono
Anti-Multicuenta
Archivos a Crear
Copy📁 Archivos de Verificación de Teléfono
│
├── src/app/(marketing)/verify-phone/page.tsx       # Página de verificación
├── src/components/auth/PhoneVerificationForm.tsx   # Formulario de teléfono
├── src/components/auth/OTPInput.tsx                # Input para código OTP
├── src/actions/auth/verify-phone.ts                # Server Actions
└── src/lib/services/twilio.ts                      # Cliente de Twilio (futuro)
Flujo de Verificación
CopyFLUJO DE VERIFICACIÓN DE TELÉFONO
│
├── 1. USUARIO LLEGA A /verify-phone
│   ├── Verificar que está autenticado
│   ├── Verificar que phone_verified = false
│   └── Si ya verificado → redirigir a /onboarding
│
├── 2. PANTALLA DE INGRESO DE TELÉFONO
│   ├── Campo de teléfono con código de país
│   ├── Botón "Enviar código"
│   └── Nota: "Un número = Una vida"
│
├── 3. AL ENVIAR TELÉFONO
│   ├── Validar formato
│   ├── Verificar que no esté registrado con otro usuario
│   ├── Enviar SMS con código de 6 dígitos
│   └── Mostrar input de OTP
│
├── 4. PANTALLA DE INGRESO DE CÓDIGO
│   ├── 6 inputs para el código
│   ├── Countdown de 60 segundos
│   ├── Botón "Reenviar código"
│   └── Botón "Verificar"
│
├── 5. AL VERIFICAR CÓDIGO
│   ├── Validar código con Twilio/Supabase
│   ├── Si correcto:
│   │   ├── Actualizar phone y phone_verified en profiles
│   │   └── Redirigir a /onboarding
│   └── Si incorrecto:
│       ├── Mostrar error
│       └── Permitir reintento (máx 3)
│
└── 6. CONSIDERACIONES
    ├── Rate limit: 3 intentos de código por número
    ├── Rate limit: 5 envíos de SMS por hora
    └── Un número solo puede estar en una cuenta
Tareas Atómicas para 05.3 Verificación de Teléfono
yamlCopyTAREA-05.3.1:
  Nombre: "Crear componente OTPInput"
  Archivo: "src/components/auth/OTPInput.tsx"
  Acción: |
    Input especializado para códigos OTP de 6 dígitos
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea un componente OTPInput para códigos de verificación.
    
    Requisitos:
    - 6 inputs individuales
    - Auto-focus al siguiente input al escribir
    - Backspace navega al input anterior
    - Paste maneja los 6 dígitos de una vez
    - Solo acepta números
    - Callback onChange cuando los 6 dígitos están completos
    
    ```tsx
    // src/components/auth/OTPInput.tsx
    'use client';
    
    import { useRef, useState, KeyboardEvent, ClipboardEvent } from 'react';
    import { cn } from '@/lib/utils';
    
    interface OTPInputProps {
      length?: number;
      onComplete: (code: string) => void;
      disabled?: boolean;
      error?: boolean;
    }
    
    export function OTPInput({ 
      length = 6, 
      onComplete, 
      disabled = false,
      error = false 
    }: OTPInputProps) {
      const [values, setValues] = useState<string[]>(Array(length).fill(''));
      const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
      
      const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return; // Solo dígitos
        
        const newValues = [...values];
        newValues[index] = value.slice(-1); // Solo último carácter
        setValues(newValues);
        
        // Auto-focus al siguiente
        if (value && index < length - 1) {
          inputRefs.current[index + 1]?.focus();
        }
        
        // Check si está completo
        const fullCode = newValues.join('');
        if (fullCode.length === length) {
          onComplete(fullCode);
        }
      };
      
      const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !values[index] && index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      };
      
      const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, length);
        
        if (!/^\d+$/.test(pastedData)) return;
        
        const newValues = [...values];
        for (let i = 0; i < pastedData.length; i++) {
          newValues[i] = pastedData[i];
        }
        setValues(newValues);
        
        if (pastedData.length === length) {
          onComplete(pastedData);
        } else {
          inputRefs.current[pastedData.length]?.focus();
        }
      };
      
      return (
        <div className="flex gap-2 justify-center">
          {values.map((value, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              disabled={disabled}
              className={cn(
                'w-12 h-14 text-center text-2xl font-bold rounded-lg',
                'bg-black border-2 transition-all',
                'focus:outline-none focus:border-[#FF073A] focus:ring-2 focus:ring-[#FF073A]/20',
                error ? 'border-red-500' : 'border-white/20',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
            />
          ))}
        </div>
      );
    }
    ```

TAREA-05.3.2:
  Nombre: "Crear Server Actions para verificación de teléfono"
  Archivo: "src/actions/auth/verify-phone.ts"
  Acción: |
    Acciones para enviar y verificar código SMS
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea los Server Actions para verificación de teléfono.
    
    NOTA: Por ahora, simulamos la verificación sin Twilio real.
    En producción, se integrará con Twilio Verify.
    
    ```typescript
    // src/actions/auth/verify-phone.ts
    'use server';
    
    import { createClient } from '@/lib/supabase/server';
    import { phoneVerificationSchema } from '@/lib/validations/auth';
    import { z } from 'zod';
    
    // Almacenamiento temporal de códigos (en producción usar Redis)
    // Por ahora, usamos una tabla de Supabase
    
    interface SendCodeResult {
      success: boolean;
      error?: string;
    }
    
    interface VerifyCodeResult {
      success: boolean;
      error?: string;
    }
    
    export async function sendVerificationCode(
      phone: string
    ): Promise<SendCodeResult> {
      const supabase = await createClient();
      
      // 1. Obtener usuario actual
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        return { success: false, error: 'No autorizado' };
      }
      
      // 2. Validar formato de teléfono
      const phoneSchema = z.string().regex(/^\+?[1-9]\d{9,14}$/);
      const parseResult = phoneSchema.safeParse(phone);
      
      if (!parseResult.success) {
        return { success: false, error: 'Formato de teléfono inválido' };
      }
      
      // 3. Verificar que el teléfono no esté en uso
      const { data: existingUser } = await supabase
        .from('profiles')
        .select('id')
        .eq('phone', phone)
        .neq('id', user.id)
        .single();
      
      if (existingUser) {
        return { 
          success: false, 
          error: 'Este número ya está registrado con otra cuenta' 
        };
      }
      
      // 4. Generar código de 6 dígitos
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      
      // 5. Guardar código en DB (expira en 10 minutos)
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
      
      await supabase
        .from('verification_codes')
        .upsert({
          user_id: user.id,
          phone,
          code,
          expires_at: expiresAt.toISOString(),
          attempts: 0,
        }, {
          onConflict: 'user_id',
        });
      
      // 6. En desarrollo, log el código. En producción, enviar SMS.
      if (process.env.NODE_ENV === 'development') {
        console.log(`[DEV] Código de verificación para ${phone}: ${code}`);
      } else {
        // TODO: Integrar con Twilio Verify
        // await twilioClient.verify.v2.services(VERIFY_SID)
        //   .verifications.create({ to: phone, channel: 'sms' });
      }
      
      return { success: true };
    }
    
    export async function verifyPhoneCode(
      phone: string,
      code: string
    ): Promise<VerifyCodeResult> {
      const supabase = await createClient();
      
      // 1. Obtener usuario actual
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        return { success: false, error: 'No autorizado' };
      }
      
      // 2. Obtener código almacenado
      const { data: storedCode, error } = await supabase
        .from('verification_codes')
        .select('*')
        .eq('user_id', user.id)
        .eq('phone', phone)
        .single();
      
      if (error || !storedCode) {
        return { success: false, error: 'No se encontró código de verificación' };
      }
      
      // 3. Verificar intentos
      if (storedCode.attempts >= 3) {
        return { success: false, error: 'Demasiados intentos. Solicita un nuevo código.' };
      }
      
      // 4. Verificar expiración
      if (new Date(storedCode.expires_at) < new Date()) {
        return { success: false, error: 'El código ha expirado' };
      }
      
      // 5. Incrementar intentos
      await supabase
        .from('verification_codes')
        .update({ attempts: storedCode.attempts + 1 })
        .eq('user_id', user.id);
      
      // 6. Verificar código
      if (storedCode.code !== code) {
        return { success: false, error: 'Código incorrecto' };
      }
      
      // 7. Actualizar perfil
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          phone,
          phone_verified: true,
        })
        .eq('id', user.id);
      
      if (updateError) {
        console.error('[VerifyPhone] Error updating profile:', updateError);
        return { success: false, error: 'Error al actualizar el perfil' };
      }
      
      // 8. Limpiar código usado
      await supabase
        .from('verification_codes')
        .delete()
        .eq('user_id', user.id);
      
      return { success: true };
    }
    ```

TAREA-05.3.3:
  Nombre: "Crear migración para tabla verification_codes"
  Archivo: "supabase/migrations/XXXXXX_create_verification_codes.sql"
  Acción: |
    Tabla para almacenar códigos de verificación temporales
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la migración para la tabla de códigos de verificación.
    
    ```sql
    -- supabase/migrations/20250101000005_create_verification_codes.sql
    
    CREATE TABLE IF NOT EXISTS public.verification_codes (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
      phone VARCHAR(20) NOT NULL,
      code VARCHAR(6) NOT NULL,
      attempts INTEGER DEFAULT 0,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      
      -- Un usuario solo puede tener un código activo
      CONSTRAINT unique_user_verification UNIQUE (user_id)
    );
    
    -- Índice para búsqueda por usuario
    CREATE INDEX idx_verification_codes_user ON public.verification_codes(user_id);
    
    -- RLS
    ALTER TABLE public.verification_codes ENABLE ROW LEVEL SECURITY;
    
    -- Solo el service role puede acceder (los Server Actions usan service role)
    CREATE POLICY "Service role only" ON public.verification_codes
      FOR ALL USING (false);
    
    -- Función para limpiar códigos expirados (cron job)
    CREATE OR REPLACE FUNCTION public.cleanup_expired_verification_codes()
    RETURNS void AS $$
    BEGIN
      DELETE FROM public.verification_codes
      WHERE expires_at < NOW();
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;
    ```

TAREA-05.3.4:
  Nombre: "Crear componente PhoneVerificationForm"
  Archivo: "src/components/auth/PhoneVerificationForm.tsx"
  Acción: |
    Formulario completo de verificación de teléfono
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el formulario de verificación de teléfono.
    
    ```tsx
    // src/components/auth/PhoneVerificationForm.tsx
    'use client';
    
    import { useState, useEffect } from 'react';
    import { useRouter } from 'next/navigation';
    import { sendVerificationCode, verifyPhoneCode } from '@/actions/auth/verify-phone';
    import { Input } from '@/components/ui/Input';
    import { Button } from '@/components/ui/Button';
    import { OTPInput } from './OTPInput';
    
    type Step = 'phone' | 'code';
    
    export function PhoneVerificationForm() {
      const router = useRouter();
      const [step, setStep] = useState<Step>('phone');
      const [phone, setPhone] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const [countdown, setCountdown] = useState(0);
      
      // Countdown para reenvío
      useEffect(() => {
        if (countdown > 0) {
          const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
          return () => clearTimeout(timer);
        }
      }, [countdown]);
      
      const handleSendCode = async () => {
        setIsLoading(true);
        setError(null);
        
        const result = await sendVerificationCode(phone);
        
        setIsLoading(false);
        
        if (!result.success) {
          setError(result.error || 'Error al enviar código');
          return;
        }
        
        setStep('code');
        setCountdown(60);
      };
      
      const handleVerifyCode = async (code: string) => {
        setIsLoading(true);
        setError(null);
        
        const result = await verifyPhoneCode(phone, code);
        
        setIsLoading(false);
        
        if (!result.success) {
          setError(result.error || 'Error al verificar código');
          return;
        }
        
        // Éxito - redirigir a onboarding
        router.push('/onboarding');
      };
      
      const handleResendCode = async () => {
        if (countdown > 0) return;
        await handleSendCode();
      };
      
      return (
        <div className="space-y-6">
          {/* Mensaje de importancia */}
          <div className="p-4 bg-[#FF073A]/10 border border-[#FF073A]/20 rounded-lg">
            <p className="text-white/80 text-sm">
              <strong className="text-[#FF073A]">Un número = Una vida.</strong>
              <br />
              Tu teléfono se usa para evitar cuentas múltiples. 
              Si tu avatar muere, no podrás crear otra cuenta con este número.
            </p>
          </div>
          
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
          
          {step === 'phone' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Número de teléfono
                </label>
                <Input
                  type="tel"
                  placeholder="+52 55 1234 5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-lg"
                />
                <p className="text-white/40 text-xs mt-2">
                  Incluye el código de país (ej: +52 para México)
                </p>
              </div>
              
              <Button
                onClick={handleSendCode}
                variant="primary"
                className="w-full"
                isLoading={isLoading}
                disabled={phone.length < 10}
              >
                ENVIAR CÓDIGO
              </Button>
            </div>
          )}
          
          {step === 'code' && (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-white/70 mb-4">
                  Ingresa el código enviado a
                  <br />
                  <span className="text-white font-medium">{phone}</span>
                </p>
                
                <OTPInput
                  onComplete={handleVerifyCode}
                  disabled={isLoading}
                  error={!!error}
                />
              </div>
              
              <div className="text-center">
                {countdown > 0 ? (
                  <p className="text-white/50 text-sm">
                    Reenviar código en {countdown}s
                  </p>
                ) : (
                  <button
                    onClick={handleResendCode}
                    className="text-[#FF073A] text-sm hover:underline"
                    disabled={isLoading}
                  >
                    Reenviar código
                  </button>
                )}
              </div>
              
              <button
                onClick={() => setStep('phone')}
                className="w-full text-white/50 text-sm hover:text-white"
              >
                ← Cambiar número
              </button>
            </div>
          )}
        </div>
      );
    }
    ```

TAREA-05.3.5:
  Nombre: "Crear página de verificación de teléfono"
  Archivo: "src/app/(marketing)/verify-phone/page.tsx"
  Acción: |
    Página completa de verificación
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página de verificación de teléfono.
    
    ```tsx
    // src/app/(marketing)/verify-phone/page.tsx
    import { redirect } from 'next/navigation';
    import { createClient } from '@/lib/supabase/server';
    import { AuthCard } from '@/components/auth/AuthCard';
    import { PhoneVerificationForm } from '@/components/auth/PhoneVerificationForm';
    
    export const metadata = {
      title: 'Verificar Teléfono | MetaMen100',
    };
    
    export default async function VerifyPhonePage() {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      // Si no está autenticado, redirigir a registro
      if (!user) {
        redirect('/register');
      }
      
      // Verificar estado del perfil
      const { data: profile } = await supabase
        .from('profiles')
        .select('phone_verified, onboarding_completed')
        .eq('id', user.id)
        .single();
      
      // Si ya verificó el teléfono
      if (profile?.phone_verified) {
        if (!profile.onboarding_completed) {
          redirect('/onboarding');
        }
        redirect('/dashboard');
      }
      
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <AuthCard
            title="Verifica tu Teléfono"
            subtitle="Necesitamos confirmar tu identidad"
          >
            <PhoneVerificationForm />
          </AuthCard>
        </div>
      );
    }
    ```

SUBCAJA 05.4: Sistema de Login
Acceso para Usuarios Existentes
Archivos a Crear
Copy📁 Archivos de Login
│
├── src/app/(marketing)/login/page.tsx              # Página de login
├── src/components/auth/LoginForm.tsx               # Formulario de login
├── src/actions/auth/login.ts                       # Server Action de login
└── src/app/(marketing)/forgot-password/page.tsx    # Recuperación de contraseña
Tareas Atómicas para 05.4 Login
yamlCopyTAREA-05.4.1:
  Nombre: "Crear Server Action de login"
  Archivo: "src/actions/auth/login.ts"
  Acción: |
    Server Action para iniciar sesión
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el Server Action para login.
    
    ```typescript
    // src/actions/auth/login.ts
    'use server';
    
    import { createClient } from '@/lib/supabase/server';
    import { loginSchema, type LoginInput } from '@/lib/validations/auth';
    
    interface LoginResult {
      success: boolean;
      error?: string;
      code?: string;
      redirectTo?: string;
    }
    
    export async function loginWithEmail(rawInput: unknown): Promise<LoginResult> {
      // 1. Validar input
      const parseResult = loginSchema.safeParse(rawInput);
      
      if (!parseResult.success) {
        return {
          success: false,
          error: parseResult.error.errors[0].message,
          code: 'VALIDATION_ERROR',
        };
      }
      
      const { email, password } = parseResult.data;
      const supabase = await createClient();
      
      // 2. Intentar login
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error('[Login] Error:', error);
        
        if (error.message.includes('Invalid login credentials')) {
          return {
            success: false,
            error: 'Email o contraseña incorrectos',
            code: 'INVALID_CREDENTIALS',
          };
        }
        
        return {
          success: false,
          error: 'Error al iniciar sesión',
          code: 'LOGIN_ERROR',
        };
      }
      
      if (!data.user) {
        return {
          success: false,
          error: 'No se pudo obtener el usuario',
          code: 'USER_NOT_FOUND',
        };
      }
      
      // 3. Determinar redirección
      const { data: profile } = await supabase
        .from('profiles')
        .select('phone_verified, onboarding_completed')
        .eq('id', data.user.id)
        .single();
      
      let redirectTo = '/dashboard';
      
      if (!profile?.phone_verified) {
        redirectTo = '/verify-phone';
      } else if (!profile?.onboarding_completed) {
        redirectTo = '/onboarding';
      }
      
      return { success: true, redirectTo };
    }
    ```

TAREA-05.4.2:
  Nombre: "Crear componente LoginForm"
  Archivo: "src/components/auth/LoginForm.tsx"
  Acción: |
    Formulario de login
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el formulario de login similar al de registro pero simplificado.
    
    - Email
    - Password (con toggle de visibilidad)
    - Link "Olvidé mi contraseña"
    - Botón "INICIAR SESIÓN"
    - Google Auth button
    - Link a registro
    
    Usa el mismo patrón que RegisterForm pero con loginSchema.

TAREA-05.4.3:
  Nombre: "Crear página de login"
  Archivo: "src/app/(marketing)/login/page.tsx"
  Acción: |
    Página de login
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la página de login similar a la de registro.
    
    - Verificar si ya está autenticado → redirigir
    - AuthCard con LoginForm

TAREA-05.4.4:
  Nombre: "Crear Server Action de logout"
  Archivo: "src/actions/auth/logout.ts"
  Acción: |
    Server Action para cerrar sesión
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```typescript
    // src/actions/auth/logout.ts
    'use server';
    
    import { createClient } from '@/lib/supabase/server';
    import { redirect } from 'next/navigation';
    
    export async function logout() {
      const supabase = await createClient();
      await supabase.auth.signOut();
      redirect('/login');
    }
    ```

TAREA-05.4.5:
  Nombre: "Crear página de recuperación de contraseña"
  Archivo: "src/app/(marketing)/forgot-password/page.tsx"
  Acción: |
    Página para solicitar reset de contraseña
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea una página simple para recuperación de contraseña.
    
    - Input de email
    - Botón "Enviar link de recuperación"
    - Mensaje de confirmación
    
    Usa Supabase auth.resetPasswordForEmail()

SUBCAJA 05.5: Onboarding Wizard
Tutorial y Configuración Inicial
Archivos a Crear
Copy📁 Archivos de Onboarding
│
├── src/app/(protected)/onboarding/page.tsx         # Página contenedora
├── src/app/(protected)/onboarding/layout.tsx       # Layout sin sidebar
├── src/components/onboarding/OnboardingWizard.tsx  # Wizard principal
├── src/components/onboarding/WelcomeStep.tsx       # Paso 1: Bienvenida
├── src/components/onboarding/ArchetypeStep.tsx     # Paso 2: Selección arquetipo
├── src/components/onboarding/TutorialStep.tsx      # Paso 3: Tutorial vectores
├── src/components/onboarding/OathStep.tsx          # Paso 4: Juramento
├── src/components/onboarding/ProgressBar.tsx       # Barra de progreso
├── src/actions/onboarding/complete-step.ts         # Server Actions
└── src/lib/constants/archetypes.ts                 # Datos de los 6 arquetipos
Flujo del Onboarding
CopyFLUJO DE ONBOARDING (4 Pasos)
│
├── PASO 1: BIENVENIDA
│   ├── Texto con efecto terminal/typing
│   ├── "BIENVENIDO, METAMEN-XXX. HAS TOMADO EL CONTROL."
│   ├── Animación de "sistema iniciando"
│   └── Botón: "INICIAR PROTOCOLO"
│
├── PASO 2: SELECCIÓN DE ARQUETIPO (SEMILLA)
│   ├── Carrusel/slider de los 6 arquetipos
│   ├── Cada arquetipo muestra:
│   │   ├── Imagen (Nivel 1 - gordo)
│   │   ├── Nombre: "RASTAS", "EL MUSCLES", etc.
│   │   └── Lore (historia trágica)
│   ├── Selección inmutable durante el ciclo
│   └── Botón: "CONFIRMAR IDENTIDAD"
│
├── PASO 3: TUTORIAL DE VECTORES
│   ├── Explicación rápida del sistema
│   ├── Los 5 vectores (AURA, JAWLINE, WEALTH, PHYSIQUE, ENV)
│   ├── Sistema de salud (10 corazones)
│   ├── Judgement Night (cierre del día)
│   ├── Interactivo: resaltar elementos del HUD
│   └── Duración: ~30 segundos
│
└── PASO 4: EL JURAMENTO (Contrato)
    ├── Texto del compromiso:
    │   "YO, METAMEN-XXX, ME COMPROMETO A NO MENTIR A MI REFLEJO.
    │    ACEPTO QUE CADA ACCIÓN TIENE CONSECUENCIAS.
    │    MI AVATAR ES MI ESPEJO. SI FALLO, ÉL SUFRE.
    │    HOY COMIENZA MI TRANSFORMACIÓN DE 100 DÍAS."
    ├── Interacción: Press & Hold 3 segundos en huella
    ├── Animación de "sello biométrico"
    └── Al completar: Marcar onboarding_completed = true
Los 6 Arquetipos (Datos Oficiales del Cuestionario1)
typescriptCopy// src/lib/constants/archetypes.ts

export const ARCHETYPES = [
  {
    id: 1,
    name: 'RASTAS',
    fullName: 'El Rastas',
    description: 'Ex-gamer noble y bonachón',
    lore: `El Rastas es un hombre noble de los que se conocen como "bonachón", tanto así que su esposa tenía sus encuentros con su mejor amigo en la habitación de a un lado mientras el buen Rastas disputaba una partida de Minecraft.
    
Hasta que un día olvidó conectar los audífonos y la traición fue descubierta. Nadie sabe cómo pasó, pero el final de esta historia termina con nuestro protagonista durmiendo en las calles.

Dicen que en lugar de echar a su mujer, el que terminó echado fue él.`,
    visualDescription: 'Gordo, descuidado, no existe camisa en la que pueda meter su panza, pero sus rastas siguen impecables.',
    style: 'Ex-gamer en decadencia absoluta',
    // Identity anchors para IA
    iaAnchors: {
      hair: 'brown dreadlocks, thick messy locks',
      face: 'round friendly face, tired kind eyes, stubble',
      skin: 'warm brown skin',
    },
  },
  {
    id: 2,
    name: 'EL MUSCLES',
    fullName: 'El Muscles',
    description: 'Ex-cadenero caído en desgracia',
    lore: `Solía ser el "cadenero" más respetado de la zona de antros, su vida eran las pesas y la seguridad.

Todo acabó cuando un romance prohibido con la hija de un magnate local salió mal: lo dejó sin contactos, sin empleo y con una orden de restricción.

Cambió los batidos de proteína por los tamales de la esquina y la depresión lo convirtió en el "Tanque" que es hoy.`,
    visualDescription: 'Espalda ancha enterrada en grasa, camiseta de resaque que le queda como ombliguera y mirada de "ya no me importa nada".',
    style: 'Ex-seguridad urbana en modo sedentario',
    iaAnchors: {
      hair: 'bald head, shaved',
      face: 'square strong jaw under fat, small intense eyes, thick neck',
      skin: 'tan skin',
    },
  },
  {
    id: 3,
    name: 'PECAS',
    fullName: 'El Pecas',
    description: 'Genio cripto en bancarrota',
    lore: `Un genio de las computadoras que lo tuvo todo... en papel.

Apostó los ahorros de su vida (y los de sus padres) en una moneda que prometía llevarlo "a la luna", pero terminó estrellándose en el suelo.

Ahora vive en el cuarto de lavado de su tía, escondiéndose del mundo bajo su sudadera marrón mientras sueña con su antiguo estatus.`,
    visualDescription: 'Pelo rizado alborotado, cara pecosa y una sudadera que huele a encierro y papitas.',
    style: 'Genio informático en bancarrota emocional',
    iaAnchors: {
      hair: 'curly reddish brown hair, messy unkempt',
      face: 'freckled face, thin features, anxious eyes',
      skin: 'pale skin with freckles',
    },
  },
  {
    id: 4,
    name: 'EL GREÑAS',
    fullName: 'El Greñas',
    description: 'Rockero oldschool en el olvido',
    lore: `Lideraba una banda de rock pesado en los 90. Era el rey del escenario hasta que la calvicie y el streaming acabaron con su carrera.

Intentó poner un taller de motos, pero se comió las ganancias antes de abrir.

Vive de los recuerdos de sus giras mientras usa ropa de deporte que no conoce el gimnasio.`,
    visualDescription: 'Calvo impecable con una perilla tipo "candado" negro que es su último orgullo. Sudadera vieja y mirada de veterano olvidado.',
    style: 'Rockero "Old School" en el olvido',
    iaAnchors: {
      hair: 'bald on top, long grey hair in back, goatee beard',
      face: 'angular weathered face, deep set eyes, goatee',
      skin: 'weathered pale skin',
    },
  },
  {
    id: 5,
    name: 'EL RUBIO',
    fullName: 'El Rubio',
    description: 'Ex galán de prepa en decadencia',
    lore: `El "rubio galán" de la preparatoria que nunca aceptó que el tiempo pasa.

Después de que su banda de covers de Bon Jovi fracasara, se dedicó a la vida contemplativa (comer y dormir).

Su chaqueta de mezclilla es lo único que le queda de su época dorada, aunque ya no cierra ni por milagro de Dios.`,
    visualDescription: 'Pelo rubio spiky desordenado, vientre al aire libre y actitud de estrella de rock sin público.',
    style: 'Rebelde sin causa y sin condición física',
    iaAnchors: {
      hair: 'blonde wavy hair, messy spiky',
      face: 'handsome face under fat, blue eyes, stubble',
      skin: 'fair skin, reddish from sun',
    },
  },
  {
    id: 6,
    name: 'EL LIC',
    fullName: 'El Licenciado',
    description: 'Ejecutivo reemplazado por IA',
    lore: `Era el empleado del mes durante 5 años seguidos. Tenía el plan de retiro perfecto hasta que un software de inteligencia artificial hizo su trabajo en 2 segundos.

Lo despidieron un viernes por la tarde y para el lunes ya había descubierto que la comida rápida es la mejor terapia para el estrés de ser irrelevante.`,
    visualDescription: 'Cabello desordenado estilo afro, piel bronceada por esperar el camión y una playera gris que lucha por no explotar.',
    style: 'Ejecutivo caído en desgracia por la tecnología',
    iaAnchors: {
      hair: 'black curly hair, receding hairline, messy',
      face: 'rectangular glasses, tired eyes, stubble',
      skin: 'olive tan skin',
    },
  },
];

export type Archetype = typeof ARCHETYPES[number];
Tareas Atómicas para 05.5 Onboarding Wizard
yamlCopyTAREA-05.5.1:
  Nombre: "Crear constantes de arquetipos"
  Archivo: "src/lib/constants/archetypes.ts"
  Acción: |
    Exportar los 6 arquetipos con toda su información
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el archivo con los datos de los 6 arquetipos exactamente como
    se especifica arriba. Incluye:
    - id, name, fullName, description
    - lore (historia completa)
    - visualDescription
    - style
    - iaAnchors (tokens para la IA generativa)

TAREA-05.5.2:
  Nombre: "Crear layout protegido para onboarding"
  Archivo: "src/app/(protected)/onboarding/layout.tsx"
  Acción: |
    Layout sin sidebar para el wizard de onboarding
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea un layout minimalista para onboarding:
    - Fondo negro
    - Sin navbar ni sidebar
    - Solo el contenido centrado
    - Verifica auth pero NO verifica onboarding_completed

TAREA-05.5.3:
  Nombre: "Crear componente ProgressBar"
  Archivo: "src/components/onboarding/ProgressBar.tsx"
  Acción: |
    Barra de progreso estilo militar
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea una barra de progreso para el wizard.
    
    ```tsx
    interface ProgressBarProps {
      currentStep: number;
      totalSteps: number;
    }
    
    // Mostrar: "STEP 1/4: IDENTITY"
    // Con barra visual de progreso
    ```
    
    Estilo: Militar/técnico con fuente mono

TAREA-05.5.4:
  Nombre: "Crear componente WelcomeStep"
  Archivo: "src/components/onboarding/WelcomeStep.tsx"
  Acción: |
    Primer paso del wizard - Bienvenida
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el paso de bienvenida con:
    - Efecto de texto "typing" (como terminal)
    - Texto: "BIENVENIDO, {NICKNAME}. HAS TOMADO EL CONTROL."
    - Animación de "sistema iniciando"
    - Botón: "INICIAR PROTOCOLO"
    
    Usa Framer Motion para las animaciones.
    El nickname viene de props.

TAREA-05.5.5:
  Nombre: "Crear componente ArchetypeStep"
  Archivo: "src/components/onboarding/ArchetypeStep.tsx"
  Acción: |
    Segundo paso - Selección de arquetipo
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el selector de arquetipos con:
    - Carrusel/slider horizontal
    - Card grande para cada arquetipo mostrando:
      - Placeholder de imagen (cuadrado gris por ahora)
      - Nombre en grande
      - Lore (scrollable si es largo)
    - Indicadores de navegación (dots o flechas)
    - Botón "CONFIRMAR IDENTIDAD" (solo activo si hay selección)
    - Advertencia: "Esta elección es inmutable durante los 100 días"
    
    Importa ARCHETYPES de @/lib/constants/archetypes

TAREA-05.5.6:
  Nombre: "Crear componente TutorialStep"
  Archivo: "src/components/onboarding/TutorialStep.tsx"
  Acción: |
    Tercer paso - Tutorial de vectores
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el tutorial interactivo explicando:
    
    1. Los 5 vectores:
       - AURA: Tu presencia y energía mental
       - JAWLINE: Tu atractivo facial
       - WEALTH: Tu estatus económico percibido
       - PHYSIQUE: Tu composición corporal (músculo/grasa)
       - ENV: Tu entorno y escenario de vida
    
    2. Sistema de salud:
       - 10 corazones
       - Se pierden al fallar días
       - 0 corazones = muerte del avatar
    
    3. Judgement Night:
       - Al final de cada día, serás juzgado
       - < 80% de tareas = pierdes un corazón
    
    Formato: Slides o cards con animaciones.
    Botón "ENTENDIDO" al final.

TAREA-05.5.7:
  Nombre: "Crear componente OathStep"
  Archivo: "src/components/onboarding/OathStep.tsx"
  Acción: |
    Cuarto paso - Juramento
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el paso del juramento con:
    
    1. Texto del juramento (formateado):
       ```
       YO, {NICKNAME}, ME COMPROMETO A NO MENTIR A MI REFLEJO.
       
       ACEPTO QUE CADA ACCIÓN TIENE CONSECUENCIAS.
       
       MI AVATAR ES MI ESPEJO. SI FALLO, ÉL SUFRE.
       
       HOY COMIENZA MI TRANSFORMACIÓN DE 100 DÍAS.
       ```
    
    2. Botón de huella digital:
       - Instrucción: "Mantén presionado 3 segundos para firmar"
       - Ícono de huella digital
       - Animación de círculo de progreso al mantener presionado
       - Vibración háptica al completar (si está disponible)
       - Sonido de "sello" al completar
    
    3. Al completar:
       - Animación de confirmación (checkmark o similar)
       - Transición al dashboard

TAREA-05.5.8:
  Nombre: "Crear Server Actions para onboarding"
  Archivo: "src/actions/onboarding/complete-step.ts"
  Acción: |
    Actions para guardar progreso del onboarding
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```typescript
    // src/actions/onboarding/complete-step.ts
    'use server';
    
    import { createClient } from '@/lib/supabase/server';
    import { revalidatePath } from 'next/cache';
    
    export async function selectArchetype(archetypeId: number) {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        return { success: false, error: 'No autorizado' };
      }
      
      // Validar que archetypeId sea 1-6
      if (archetypeId < 1 || archetypeId > 6) {
        return { success: false, error: 'Arquetipo inválido' };
      }
      
      // Actualizar perfil
      const { error } = await supabase
        .from('profiles')
        .update({ base_avatar_id: archetypeId })
        .eq('id', user.id);
      
      if (error) {
        return { success: false, error: 'Error al guardar arquetipo' };
      }
      
      // También actualizar avatar_states
      await supabase
        .from('avatar_states')
        .update({ base_avatar_id: archetypeId })
        .eq('user_id', user.id);
      
      return { success: true };
    }
    
    export async function completeOnboarding() {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        return { success: false, error: 'No autorizado' };
      }
      
      // Verificar que tenga arquetipo seleccionado
      const { data: profile } = await supabase
        .from('profiles')
        .select('base_avatar_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.base_avatar_id) {
        return { success: false, error: 'Debes seleccionar un arquetipo' };
      }
      
      // Marcar onboarding como completado
      const { error } = await supabase
        .from('profiles')
        .update({ onboarding_completed: true })
        .eq('id', user.id);
      
      if (error) {
        return { success: false, error: 'Error al completar onboarding' };
      }
      
      revalidatePath('/dashboard');
      return { success: true };
    }
    ```

TAREA-05.5.9:
  Nombre: "Crear componente OnboardingWizard"
  Archivo: "src/components/onboarding/OnboardingWizard.tsx"
  Acción: |
    Wizard principal que maneja los pasos
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea el wizard que orquesta los 4 pasos:
    
    ```tsx
    'use client';
    
    import { useState } from 'react';
    import { useRouter } from 'next/navigation';
    import { WelcomeStep } from './WelcomeStep';
    import { ArchetypeStep } from './ArchetypeStep';
    import { TutorialStep } from './TutorialStep';
    import { OathStep } from './OathStep';
    import { ProgressBar } from './ProgressBar';
    import { selectArchetype, completeOnboarding } from '@/actions/onboarding/complete-step';
    
    interface OnboardingWizardProps {
      nickname: string;
    }
    
    export function OnboardingWizard({ nickname }: OnboardingWizardProps) {
      const router = useRouter();
      const [step, setStep] = useState(1);
      const [selectedArchetype, setSelectedArchetype] = useState<number | null>(null);
      
      const handleArchetypeSelect = async (id: number) => {
        setSelectedArchetype(id);
        const result = await selectArchetype(id);
        if (result.success) {
          setStep(3);
        }
      };
      
      const handleComplete = async () => {
        const result = await completeOnboarding();
        if (result.success) {
          router.push('/dashboard');
        }
      };
      
      return (
        <div className="min-h-screen bg-black flex flex-col">
          <ProgressBar currentStep={step} totalSteps={4} />
          
          <div className="flex-1 flex items-center justify-center p-4">
            {step === 1 && (
              <WelcomeStep 
                nickname={nickname} 
                onContinue={() => setStep(2)} 
              />
            )}
            
            {step === 2 && (
              <ArchetypeStep
                onSelect={handleArchetypeSelect}
              />
            )}
            
            {step === 3 && (
              <TutorialStep
                onContinue={() => setStep(4)}
              />
            )}
            
            {step === 4 && (
              <OathStep
                nickname={nickname}
                onComplete={handleComplete}
              />
            )}
          </div>
        </div>
      );
    }
    ```

TAREA-05.5.10:
  Nombre: "Crear página de onboarding"
  Archivo: "src/app/(protected)/onboarding/page.tsx"
  Acción: |
    Página contenedora del wizard
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```tsx
    // src/app/(protected)/onboarding/page.tsx
    import { redirect } from 'next/navigation';
    import { createClient } from '@/lib/supabase/server';
    import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';
    
    export const metadata = {
      title: 'Onboarding | MetaMen100',
    };
    
    export default async function OnboardingPage() {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        redirect('/login');
      }
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('nickname, phone_verified, onboarding_completed')
        .eq('id', user.id)
        .single();
      
      if (!profile?.phone_verified) {
        redirect('/verify-phone');
      }
      
      if (profile?.onboarding_completed) {
        redirect('/dashboard');
      }
      
      return <OnboardingWizard nickname={profile.nickname} />;
    }
    ```

SUBCAJA 05.6: Selección de Arquetipo
Las 6 Semillas de Identidad
(Esta subcaja está contenida dentro de 05.5 como el paso 2 del wizard, pero aquí detallamos más la implementación visual)
Diseño del Selector de Arquetipos
Copy┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        ELIGE TU SEMILLA                                     │
│                                                                             │
│   ← [PREV]  ┌─────────────────────────────────────┐  [NEXT] →              │
│             │                                     │                         │
│             │         [IMAGEN PLACEHOLDER]        │                         │
│             │            200x200px                │                         │
│             │                                     │                         │
│             ├─────────────────────────────────────┤                         │
│             │                                     │                         │
│             │         "EL RASTAS"                 │                         │
│             │                                     │                         │
│             │  Ex-gamer noble y bonachón          │                         │
│             │                                     │                         │
│             │  ────────────────────────           │                         │
│             │                                     │                         │
│             │  "El Rastas es un hombre noble      │                         │
│             │   de los que se conocen como        │                         │
│             │   bonachón, tanto así que su        │                         │
│             │   esposa tenía sus encuentros..."   │                         │
│             │                                     │                         │
│             │            [scroll ↓]               │                         │
│             │                                     │                         │
│             └─────────────────────────────────────┘                         │
│                                                                             │
│                        ○ ● ○ ○ ○ ○                                          │
│                        (indicadores)                                        │
│                                                                             │
│   ⚠️ Esta elección es INMUTABLE durante los 100 días                        │
│                                                                             │
│             ┌─────────────────────────────────────┐                         │
│             │       CONFIRMAR IDENTIDAD           │                         │
│             └─────────────────────────────────────┘                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
Tareas Atómicas para 05.6 (Detalle de ArchetypeStep)
yamlCopyTAREA-05.6.1:
  Nombre: "Crear componente ArchetypeCard"
  Archivo: "src/components/onboarding/ArchetypeCard.tsx"
  Acción: |
    Card individual para cada arquetipo
  Responsable: Antigravity
  Prompt para Antigravity: |
    ```tsx
    // src/components/onboarding/ArchetypeCard.tsx
    'use client';
    
    import { motion } from 'framer-motion';
    import { Archetype } from '@/lib/constants/archetypes';
    
    interface ArchetypeCardProps {
      archetype: Archetype;
      isSelected: boolean;
      onSelect: () => void;
    }
    
    export function ArchetypeCard({ archetype, isSelected, onSelect }: ArchetypeCardProps) {
      return (
        <motion.div
          className={`
            w-full max-w-md mx-auto
            bg-[#0A0A0A] rounded-xl overflow-hidden
            border-2 transition-colors
            ${isSelected ? 'border-[#FF073A]' : 'border-white/10'}
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSelect}
        >
          {/* Imagen placeholder */}
          <div className="w-full aspect-square bg-gray-800 flex items-center justify-center">
            <span className="text-white/30 text-sm">NIVEL 1</span>
          </div>
          
          {/* Info */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-1">
              {archetype.name}
            </h3>
            <p className="text-white/50 text-sm mb-4">
              {archetype.description}
            </p>
            
            {/* Lore con scroll */}
            <div className="h-32 overflow-y-auto text-white/70 text-sm">
              {archetype.lore.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-2">{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Indicador de selección */}
          {isSelected && (
            <div className="bg-[#FF073A] py-2 text-center">
              <span className="text-white font-medium text-sm">SELECCIONADO</span>
            </div>
          )}
        </motion.div>
      );
    }
    ```

TAREA-05.6.2:
  Nombre: "Crear carrusel de arquetipos"
  Archivo: "src/components/onboarding/ArchetypeCarousel.tsx"
  Acción: |
    Carrusel horizontal con swipe
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea un carrusel que:
    - Muestra un arquetipo a la vez
    - Soporta swipe en móvil
    - Tiene flechas de navegación en desktop
    - Tiene indicadores de posición (dots)
    - Usa Framer Motion para animaciones
    
    Puedes usar una librería como `embla-carousel-react` o implementar
    con Framer Motion drag gestures.

SUBCAJA 05.7: Juramento y Activación
El Contrato Final
(Detalle adicional del paso 4 del wizard)
Especificación del Juramento
typescriptCopy// Texto exacto del juramento
const OATH_TEXT = `
YO, {NICKNAME}, ME COMPROMETO A NO MENTIR A MI REFLEJO.

ACEPTO QUE CADA ACCIÓN TIENE CONSECUENCIAS.

MI AVATAR ES MI ESPEJO. SI FALLO, ÉL SUFRE.

HOY COMIENZA MI TRANSFORMACIÓN DE 100 DÍAS.
`;

// Configuración de la interacción
const OATH_CONFIG = {
  holdDuration: 3000, // 3 segundos
  hapticFeedback: true,
  soundOnComplete: '/sounds/seal.mp3',
  animationDuration: 500,
};
Tareas Atómicas para 05.7 Juramento
yamlCopyTAREA-05.7.1:
  Nombre: "Implementar OathStep completo"
  Archivo: "src/components/onboarding/OathStep.tsx"
  Acción: |
    Componente completo del juramento
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa OathStep con:
    
    1. Texto del juramento con animación de aparición
    2. Botón de huella con:
       - Estado: idle, pressing, complete
       - Círculo de progreso SVG
       - Vibración al completar
       - Sonido opcional
    3. Al completar:
       - Mostrar animación de confirmación
       - Llamar a completeOnboarding()
       - Redirigir a /dashboard
    
    ```tsx
    const FingerprintButton = ({ onComplete }) => {
      const [progress, setProgress] = useState(0);
      const [isHolding, setIsHolding] = useState(false);
      const intervalRef = useRef<NodeJS.Timeout>();
      
      const startHold = () => {
        setIsHolding(true);
        const startTime = Date.now();
        
        intervalRef.current = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const newProgress = Math.min(100, (elapsed / 3000) * 100);
          setProgress(newProgress);
          
          if (elapsed >= 3000) {
            clearInterval(intervalRef.current);
            if (navigator.vibrate) navigator.vibrate(200);
            onComplete();
          }
        }, 50);
      };
      
      const endHold = () => {
        setIsHolding(false);
        setProgress(0);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
      
      return (
        <button
          onMouseDown={startHold}
          onMouseUp={endHold}
          onMouseLeave={endHold}
          onTouchStart={startHold}
          onTouchEnd={endHold}
          className="relative w-32 h-32"
        >
          {/* Círculo de progreso SVG */}
          {/* Ícono de huella */}
        </button>
      );
    };
    ```

TAREA-05.7.2:
  Nombre: "Crear assets de sonido"
  Archivo: "public/sounds/seal.mp3"
  Acción: |
    Sonido corto para cuando se completa el juramento
  Responsable: Claude (buscar o generar)
  Nota: |
    Opciones:
    1. Usar librería de sonidos free (freesound.org)
    2. Generar con IA (ElevenLabs sound effects)
    3. Placeholder: usar Web Audio API para generar tono
    
    Por ahora, el sonido es opcional.
    Implementar toggle en settings para habilitarlo.

RESUMEN DE CAJA 05: AUTENTICACIÓN Y ONBOARDING
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 05 - RESUMEN DE ENTREGABLES                              ║
║                                                                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  SUBCAJA                  │ ARCHIVOS │ TAREAS │ TIEMPO EST. │ DEPENDENCIAS          ║
║  ─────────────────────────┼──────────┼────────┼─────────────┼────────────────────── ║
║  05.1 Landing Page        │    10    │   10   │ 2-3 horas   │ Ninguna               ║
║  05.2 Sistema de Registro │     7    │    8   │ 2-3 horas   │ 05.1                  ║
║  05.3 Verificación Tel.   │     5    │    5   │ 1-2 horas   │ 05.2                  ║
║  05.4 Sistema de Login    │     4    │    5   │ 1-2 horas   │ 05.2                  ║
║  05.5 Onboarding Wizard   │    10    │   10   │ 3-4 horas   │ 05.2, 05.3            ║
║  05.6 Selección Arquetipo │     2    │    2   │ 1 hora      │ 05.5                  ║
║  05.7 Juramento           │     2    │    2   │ 1 hora      │ 05.5                  ║
║  ─────────────────────────┼──────────┼────────┼─────────────┼────────────────────── ║
║  TOTAL                    │    40    │   42   │ 11-16 horas │                       ║
║                                                                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  ORDEN DE IMPLEMENTACIÓN RECOMENDADO:                                               ║
║                                                                                      ║
║  1. 05.2 Registro (incluye validaciones y Server Actions base)                      ║
║  2. 05.4 Login (reutiliza componentes de 05.2)                                      ║
║  3. 05.3 Verificación de teléfono                                                   ║
║  4. 05.1 Landing Page (puede hacerse en paralelo)                                   ║
║  5. 05.5 + 05.6 + 05.7 Onboarding completo                                          ║
║                                                                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  COMPONENTES UI REUTILIZABLES NECESARIOS:                                           ║
║                                                                                      ║
║  - Button (variantes: primary, secondary, ghost, danger)                            ║
║  - Input (con soporte para error)                                                   ║
║  - Checkbox                                                                         ║
║  - Card                                                                             ║
║  - Logo                                                                             ║
║                                                                                      ║
║  Nota: Estos deben existir en /components/ui/ (CAJA 06)                             ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

PROGRESO ACTUALIZADO
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                         PROGRESO DE DESGLOSE ATÓMICO                                 ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  📦 CAJA 01: Documentación Fundacional    │ 9 subcajas  │  92 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 02: Infraestructura y DevOps     │ 8 subcajas  │  50 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 03: Base de Datos y Backend      │ 8 subcajas  │  63 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 04: Motor Core (Lógica Pura)     │ 10 subcajas │  82 tareas │ ✅ COMPLETO  ║
║  📦 CAJA 05: Autenticación y Onboarding   │ 7 subcajas  │  42 tareas │ ✅ COMPLETO  ║
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  📦 CAJA 06: Dashboard y UI               │ 9 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 07: Arsenal de Herramientas      │ 10 subcajas │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 08: IA Generativa                │ 8 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 09: Economía y Tienda            │ 7 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 10: Monetización (Stripe)        │ 8 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 11: Notificaciones y Realtime    │ 6 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 12: Observabilidad y Calidad     │ 7 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
║  📦 CAJA 13: Lanzamiento y Operaciones    │ 7 subcajas  │  ?? tareas │ ⏳ PENDIENTE ║
║  ─────────────────────────────────────────┼─────────────┼────────────┼────────────  ║
║  TOTAL DESGLOSADO HASTA AHORA             │ 42 subcajas │ 329 tareas │ 5/13 CAJAS   ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝