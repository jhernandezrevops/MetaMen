import type { Config } from 'tailwindcss';

/**
 * METAMEN100 Design System - Tailwind Configuration
 * Sistema de diseño "Dark Luxury" con estética premium
 *
 * @see docs/07_UI_UX_Spec.md para especificaciones completas
 */
const config: Config = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      // ============================================
      // COLORES DEL DESIGN SYSTEM
      // ============================================
      colors: {
        // Backgrounds
        'bg-primary': '#0A0A0B',
        'bg-secondary': '#111113',
        'bg-tertiary': '#1A1A1D',
        'bg-elevated': '#232326',

        // Text
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1AA',
        'text-tertiary': '#71717A',
        'text-muted': '#52525B',

        // Accents - Dorado (Éxito, Premium)
        'accent-gold': '#FFD700',
        'accent-gold-dim': '#B8860B',

        // Accents - Rojo (Peligro, Salud Baja)
        'accent-red': '#FF3B30',
        'accent-red-dim': '#8B0000',

        // Accents - Verde (Éxito, Completado)
        'accent-green': '#30D158',
        'accent-green-dim': '#228B22',

        // Accents - Azul (Info, Links)
        'accent-blue': '#0A84FF',

        // Accents - Púrpura (Premium Features)
        'accent-purple': '#BF5AF2',

        // Semantic
        success: '#30D158',
        warning: '#FFD60A',
        error: '#FF3B30',
        info: '#0A84FF',

        // Borders
        'border-default': '#27272A',
        'border-subtle': '#1F1F22',
        'border-strong': '#3F3F46',

        // Vectores del Avatar
        vector: {
          aura: '#BF5AF2', // Púrpura - Mental/Espiritual
          jawline: '#FF9F0A', // Naranja - Rostro
          wealth: '#FFD700', // Dorado - Productividad
          physique: '#30D158', // Verde - Físico
          env: '#0A84FF', // Azul - Entorno
        },
      },

      // ============================================
      // TIPOGRAFÍA
      // ============================================
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },

      // ============================================
      // ESPACIADO EXTENDIDO (base 4px)
      // ============================================
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },

      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },

      // ============================================
      // SOMBRAS CON EFECTOS GLOW
      // ============================================
      boxShadow: {
        // Glow Effects
        'glow-gold': '0 0 20px rgba(255, 215, 0, 0.3)',
        'glow-gold-strong': '0 0 40px rgba(255, 215, 0, 0.5)',
        'glow-red': '0 0 20px rgba(255, 59, 48, 0.3)',
        'glow-green': '0 0 20px rgba(48, 209, 88, 0.3)',
        'glow-blue': '0 0 20px rgba(10, 132, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(191, 90, 242, 0.3)',

        // Elevation Shadows
        elevated: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
        card: '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
      },

      // ============================================
      // ANIMACIONES
      // ============================================
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-out': 'fadeOut 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        shake: 'shake 0.5s ease-in-out',
        heartbeat: 'heartbeat 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },

      // ============================================
      // BACKDROP BLUR
      // ============================================
      backdropBlur: {
        xs: '2px',
      },

      // ============================================
      // Z-INDEX EXTENDIDO
      // ============================================
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },

  plugins: [
    // Plugin para clases de animation-delay
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
      const animationDelays: Record<string, Record<string, string>> = {
        '.animation-delay-100': { 'animation-delay': '100ms' },
        '.animation-delay-200': { 'animation-delay': '200ms' },
        '.animation-delay-300': { 'animation-delay': '300ms' },
        '.animation-delay-500': { 'animation-delay': '500ms' },
        '.animation-delay-700': { 'animation-delay': '700ms' },
        '.animation-delay-1000': { 'animation-delay': '1000ms' },
      };
      addUtilities(animationDelays);
    },
  ],
};

export default config;
