📦 CAJA 06: DASHBOARD Y UI
Desglose Atómico Completo

Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 06: DASHBOARD Y UI                                        ║
║                                                                                      ║
║    "El Dashboard es el centro de comando del METAMEN.                                ║
║     Cada pixel debe transmitir urgencia, progreso y estatus."                        ║
║                                                                                      ║
║    ┌────────────────────────────────────────────────────────────────────────────┐   ║
║    │                                                                            │   ║
║    │   📄 06.1 Layout          📄 06.2 Avatar         📄 06.3 Status Cards     │   ║
║    │   Principal               Display                Vectores/Salud/BTC       │   ║
║    │                                                                            │   ║
║    │   📄 06.4 Task List       📄 06.5 Calendario     📄 06.6 UI Components    │   ║
║    │   Tareas del Día          100 Días               Base Library             │   ║
║    │                                                                            │   ║
║    │   📄 06.7 Estados         📄 06.8 Animaciones    📄 06.9 Responsive       │   ║
║    │   Especiales              Micro-interactions     Mobile First             │   ║
║    │                                                                            │   ║
║    └────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                      ║
║    Responsable Generación: Claude → Antigravity                                     ║
║    Carpeta Principal: /src/app/(dashboard)/ + /src/components/                      ║
║    Tiempo Estimado Total: 12-16 horas de desarrollo                                 ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

ÍNDICE DE SUBCAJAS

SUBCAJA 06.1: Layout Principal y Navegación
SUBCAJA 06.2: Avatar Display (The Mirror)
SUBCAJA 06.3: Status Cards (Vectores, Salud, BTC)
SUBCAJA 06.4: Lista de Tareas del Día
SUBCAJA 06.5: Calendario de 100 Días
SUBCAJA 06.6: Componentes UI Base
SUBCAJA 06.7: Estados Especiales
SUBCAJA 06.8: Animaciones y Micro-interacciones
SUBCAJA 06.9: Responsive y Mobile First


SUBCAJA 06.1: Layout Principal y Navegación
Descripción
El layout define la estructura visual del Dashboard. Según el cuestionario2, debe seguir la estética de Supabase (Dark Mode) con acentos en Rojo Neón en lugar de verde.
Archivos a Crear
Copy/src/app/(dashboard)/layout.tsx
/src/app/(dashboard)/page.tsx
/src/components/layout/Sidebar.tsx
/src/components/layout/MobileNav.tsx
/src/components/layout/Header.tsx
/src/components/layout/UserMenu.tsx
Estructura del Layout
CopyDESKTOP (≥1024px)
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [SIDEBAR 250px]    │                    [MAIN CONTENT]                              │
│                    │  ┌─────────────────────────────────────────────────────────┐   │
│ ┌────────────────┐ │  │  HEADER: DAY [X]/100 + COUNTDOWN + WALLET               │   │
│ │  METAMEN100    │ │  └─────────────────────────────────────────────────────────┘   │
│ │    [LOGO]      │ │                                                                │
│ └────────────────┘ │  ┌──────────────────────────┐  ┌────────────────────────────┐  │
│                    │  │                          │  │                            │  │
│ ┌────────────────┐ │  │      AVATAR DISPLAY      │  │      STATUS CARDS          │  │
│ │ ► HQ (Inicio)  │ │  │      (The Mirror)        │  │  Health │ Level │ BTC      │  │
│ │   Protocol     │ │  │                          │  │                            │  │
│ │   Arsenal      │ │  │      [PIXEL ART          │  │  VECTORES:                 │  │
│ │   Market       │ │  │       CHARACTER]         │  │  AURA ████████░░           │  │
│ │   Profile      │ │  │                          │  │  JAWLINE ██████░░░         │  │
│ └────────────────┘ │  │                          │  │  WEALTH █████░░░░          │  │
│                    │  └──────────────────────────┘  │  PHYSIQUE ███████░░        │  │
│ ┌────────────────┐ │                                │  ENV ████░░░░░░            │  │
│ │ METAMEN-XXX    │ │  ┌──────────────────────────┐  └────────────────────────────┘  │
│ │ [Lvl] [Streak] │ │  │    TODAY'S TASKS          │                                 │
│ └────────────────┘ │  │  ☐ Meditación (15 BTC)    │  ┌────────────────────────────┐  │
│                    │  │  ☐ Fuerza (30 BTC)        │  │    TIME MATRIX (100 días)  │  │
│                    │  │  ☑ Lectura (15 BTC)       │  │  ╔═╦═╦═╦═╦═╦═╦═╗           │  │
│                    │  │  ☐ Journal (20 BTC)       │  │  ║✓║✓║✓║●║░║░║░║           │  │
│                    │  │  ☐ +2 más...              │  │  ╚═╩═╩═╩═╩═╩═╩═╝           │  │
│                    │  └──────────────────────────┘  └────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────┘

MOBILE (<768px)
┌─────────────────────────────────────────┐
│ ☰  DAY 14/100          ₿ 2,450   ≡     │  ← Header compacto
├─────────────────────────────────────────┤
│                                         │
│         [AVATAR DISPLAY]                │
│         (Cuadrado, centrado)            │
│                                         │
├─────────────────────────────────────────┤
│  ❤️ 8/10   ⭐ LVL 4   🔥 14 días        │  ← Status mini
├─────────────────────────────────────────┤
│  VECTORES (barras horizontales)         │
│  AURA ██████████░░░░░░░░░░  6.5         │
│  JAWLINE █████████░░░░░░░░  5.8         │
│  WEALTH ████████░░░░░░░░░░  5.2         │
│  PHYSIQUE ███████████░░░░░  7.1         │
│  ENV ██████░░░░░░░░░░░░░░░  4           │
├─────────────────────────────────────────┤
│  📋 TAREAS DE HOY (3/7)                 │
│  ┌─────────────────────────────────────┐│
│  │ ☐ Meditación        +15 BTC        ││
│  │ ☑ Lectura           +15 BTC ✓      ││
│  │ ☐ Fuerza            +30 BTC        ││
│  └─────────────────────────────────────┘│
├─────────────────────────────────────────┤
│  [HQ] [Protocol] [Arsenal] [Market] [⚙]│  ← Bottom Nav
└─────────────────────────────────────────┘
Tareas Atómicas para 06.1
yamlCopyTAREA-06.1.1:
  Nombre: "Crear estructura de carpetas de Dashboard"
  Archivo: "Carpeta /src/app/(dashboard)/"
  Acción: |
    Crear estructura:
    /src/app/(dashboard)/
    ├── layout.tsx
    ├── page.tsx
    ├── protocol/
    │   └── page.tsx
    ├── arsenal/
    │   └── page.tsx
    ├── market/
    │   └── page.tsx
    └── profile/
        └── page.tsx
  Responsable: Antigravity
  Prompt para Antigravity: |
    Crea la estructura de carpetas para el dashboard usando Next.js 14 App Router.
    El layout.tsx debe:
    - Ser un Server Component
    - Verificar autenticación con Supabase
    - Redirigir a /login si no hay sesión
    - Incluir el Sidebar en desktop y BottomNav en mobile
    - Usar el design system de colores del cuestionario2

TAREA-06.1.2:
  Nombre: "Implementar Dashboard Layout Principal"
  Archivo: "/src/app/(dashboard)/layout.tsx"
  Acción: |
    Server Component que:
    1. Verifica sesión de Supabase
    2. Obtiene datos básicos del usuario (profile, avatar_state)
    3. Renderiza Sidebar + Main Content
    4. Pasa datos a children via props o context
  Responsable: Antigravity
  Dependencias: ["TAREA-03.1.1", "TAREA-05.2.1"]
  Prompt para Antigravity: |
    Implementa el layout del dashboard:
    
    ```tsx
    // /src/app/(dashboard)/layout.tsx
    import { redirect } from 'next/navigation';
    import { createClient } from '@/lib/supabase/server';
    import { Sidebar } from '@/components/layout/Sidebar';
    import { MobileNav } from '@/components/layout/MobileNav';
    import { Header } from '@/components/layout/Header';
    
    export default async function DashboardLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      const supabase = await createClient();
      
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error || !user) {
        redirect('/login');
      }
      
      // Obtener datos del usuario
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      const { data: avatarState } = await supabase
        .from('avatar_states')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      const { data: wallet } = await supabase
        .from('wallets')
        .select('btc_balance')
        .eq('user_id', user.id)
        .single();
      
      return (
        <div className="flex h-screen bg-bg-primary">
          {/* Sidebar - Desktop only */}
          <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
            <Sidebar 
              profile={profile} 
              avatarState={avatarState} 
            />
          </aside>
          
          {/* Main content */}
          <div className="flex flex-col flex-1 lg:pl-64">
            <Header 
              currentDay={avatarState?.current_day ?? 1}
              btcBalance={wallet?.btc_balance ?? 0}
            />
            
            <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">
              {children}
            </main>
          </div>
          
          {/* Mobile Navigation - Mobile only */}
          <MobileNav className="lg:hidden" />
        </div>
      );
    }
    ```

TAREA-06.1.3:
  Nombre: "Implementar Sidebar Desktop"
  Archivo: "/src/components/layout/Sidebar.tsx"
  Acción: |
    Client Component con:
    - Logo MetaMen100 arriba
    - Enlaces de navegación con iconos
    - Indicador de ruta activa
    - Info del usuario abajo (nickname, nivel, racha)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el Sidebar:
    
    ```tsx
    'use client';
    
    import Link from 'next/link';
    import { usePathname } from 'next/navigation';
    import { cn } from '@/lib/utils';
    import { 
      Home, 
      ListChecks, 
      Wrench, 
      ShoppingBag, 
      User,
      Flame
    } from 'lucide-react';
    
    const NAV_ITEMS = [
      { href: '/dashboard', label: 'HQ', icon: Home },
      { href: '/dashboard/protocol', label: 'Protocol', icon: ListChecks },
      { href: '/dashboard/arsenal', label: 'Arsenal', icon: Wrench },
      { href: '/dashboard/market', label: 'Market', icon: ShoppingBag },
      { href: '/dashboard/profile', label: 'Profile', icon: User },
    ];
    
    interface SidebarProps {
      profile: {
        nickname: string;
      };
      avatarState: {
        current_level: number;
        streak_days: number;
      };
    }
    
    export function Sidebar({ profile, avatarState }: SidebarProps) {
      const pathname = usePathname();
      
      return (
        <div className="flex flex-col h-full bg-bg-secondary border-r border-white/10">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-white/10">
            <span className="text-xl font-bold text-white">
              META<span className="text-accent-red">MEN</span>100
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                    isActive
                      ? 'bg-accent-red/10 text-accent-red border-l-2 border-accent-red'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
          
          {/* User Info */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-bg-tertiary flex items-center justify-center">
                <span className="text-sm font-bold text-accent-red">
                  {avatarState.current_level}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {profile.nickname}
                </p>
                <div className="flex items-center gap-1 text-xs text-text-secondary">
                  <Flame className="w-3 h-3 text-orange-500" />
                  <span>{avatarState.streak_days} días</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    ```

TAREA-06.1.4:
  Nombre: "Implementar Mobile Bottom Navigation"
  Archivo: "/src/components/layout/MobileNav.tsx"
  Acción: |
    Client Component con:
    - Barra fija en la parte inferior
    - 5 iconos de navegación
    - Indicador de ruta activa
    - Safe area para notch/home indicator
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa la navegación móvil:
    
    ```tsx
    'use client';
    
    import Link from 'next/link';
    import { usePathname } from 'next/navigation';
    import { cn } from '@/lib/utils';
    import { Home, ListChecks, Wrench, ShoppingBag, User } from 'lucide-react';
    
    const NAV_ITEMS = [
      { href: '/dashboard', label: 'HQ', icon: Home },
      { href: '/dashboard/protocol', label: 'Protocol', icon: ListChecks },
      { href: '/dashboard/arsenal', label: 'Arsenal', icon: Wrench },
      { href: '/dashboard/market', label: 'Market', icon: ShoppingBag },
      { href: '/dashboard/profile', label: 'Profile', icon: User },
    ];
    
    export function MobileNav({ className }: { className?: string }) {
      const pathname = usePathname();
      
      return (
        <nav className={cn(
          'fixed bottom-0 left-0 right-0 bg-bg-secondary border-t border-white/10',
          'pb-safe', // Safe area for home indicator
          className
        )}>
          <div className="flex items-center justify-around h-16">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex flex-col items-center justify-center w-16 h-full',
                    'transition-colors',
                    isActive ? 'text-accent-red' : 'text-text-secondary'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px] mt-1">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      );
    }
    ```

TAREA-06.1.5:
  Nombre: "Implementar Header con Day Counter y Wallet"
  Archivo: "/src/components/layout/Header.tsx"
  Acción: |
    Client Component con:
    - Indicador de día actual (DAY X/100)
    - Countdown a Judgement Night
    - Balance de BTC
    - Menú de usuario (settings dropdown)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el Header:
    
    ```tsx
    'use client';
    
    import { useState, useEffect } from 'react';
    import { Bitcoin, Clock, Settings } from 'lucide-react';
    import { UserMenu } from './UserMenu';
    
    interface HeaderProps {
      currentDay: number;
      btcBalance: number;
    }
    
    export function Header({ currentDay, btcBalance }: HeaderProps) {
      const [timeToJudgement, setTimeToJudgement] = useState('');
      
      useEffect(() => {
        const calculateTimeRemaining = () => {
          const now = new Date();
          const midnight = new Date();
          midnight.setHours(24, 0, 0, 0);
          
          const diff = midnight.getTime() - now.getTime();
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          
          setTimeToJudgement(`${hours}h ${minutes}m`);
        };
        
        calculateTimeRemaining();
        const interval = setInterval(calculateTimeRemaining, 60000);
        
        return () => clearInterval(interval);
      }, []);
      
      return (
        <header className="sticky top-0 z-40 bg-bg-primary/95 backdrop-blur border-b border-white/10">
          <div className="flex items-center justify-between h-14 px-4 lg:px-6">
            {/* Day Counter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-text-secondary text-sm">DAY</span>
                <span className="text-white font-bold text-lg">
                  {currentDay}
                  <span className="text-text-secondary font-normal">/100</span>
                </span>
              </div>
              
              {/* Countdown */}
              <div className="hidden sm:flex items-center gap-1.5 text-sm text-text-secondary">
                <Clock className="w-4 h-4" />
                <span>Judgement in {timeToJudgement}</span>
              </div>
            </div>
            
            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* BTC Balance */}
              <div className="flex items-center gap-1.5 bg-bg-tertiary px-3 py-1.5 rounded-lg">
                <Bitcoin className="w-4 h-4 text-yellow-500" />
                <span className="text-white font-medium">
                  {btcBalance.toLocaleString()}
                </span>
              </div>
              
              {/* Settings/Menu */}
              <UserMenu />
            </div>
          </div>
        </header>
      );
    }
    ```

TAREA-06.1.6:
  Nombre: "Implementar User Menu Dropdown"
  Archivo: "/src/components/layout/UserMenu.tsx"
  Acción: |
    Client Component con:
    - Botón de settings
    - Dropdown con opciones
    - Logout action
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el menú de usuario con Radix UI Dropdown:
    
    ```tsx
    'use client';
    
    import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
    import { Settings, Moon, LogOut, Bell } from 'lucide-react';
    import { logout } from '@/actions/auth';
    
    export function UserMenu() {
      return (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <Settings className="w-5 h-5 text-text-secondary" />
            </button>
          </DropdownMenu.Trigger>
          
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[180px] bg-bg-secondary border border-white/10 rounded-lg p-1 shadow-xl"
              align="end"
              sideOffset={8}
            >
              <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-md cursor-pointer outline-none">
                <Bell className="w-4 h-4" />
                <span>Notificaciones</span>
              </DropdownMenu.Item>
              
              <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-md cursor-pointer outline-none">
                <Moon className="w-4 h-4" />
                <span>Tema</span>
              </DropdownMenu.Item>
              
              <DropdownMenu.Separator className="h-px bg-white/10 my-1" />
              
              <DropdownMenu.Item 
                className="flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-md cursor-pointer outline-none"
                onSelect={() => logout()}
              >
                <LogOut className="w-4 h-4" />
                <span>Cerrar Sesión</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      );
    }
    ```

TAREA-06.1.7:
  Nombre: "Crear página principal del Dashboard (HQ)"
  Archivo: "/src/app/(dashboard)/page.tsx"
  Acción: |
    Server Component que:
    - Obtiene datos actualizados del usuario
    - Renderiza los widgets principales
    - Compone Avatar, Status, Tasks, Calendar
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa la página principal del dashboard:
    
    ```tsx
    // /src/app/(dashboard)/page.tsx
    import { createClient } from '@/lib/supabase/server';
    import { redirect } from 'next/navigation';
    import { AvatarDisplay } from '@/components/dashboard/AvatarDisplay';
    import { StatusCards } from '@/components/dashboard/StatusCards';
    import { VectorBars } from '@/components/dashboard/VectorBars';
    import { TaskList } from '@/components/dashboard/TaskList';
    import { TimeMatrix } from '@/components/dashboard/TimeMatrix';
    
    export default async function DashboardPage() {
      const supabase = await createClient();
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) redirect('/login');
      
      // Obtener todos los datos necesarios
      const [
        { data: avatarState },
        { data: wallet },
        { data: todayTasks },
        { data: dailyLogs },
      ] = await Promise.all([
        supabase
          .from('avatar_states')
          .select('*')
          .eq('user_id', user.id)
          .single(),
        supabase
          .from('wallets')
          .select('btc_balance')
          .eq('user_id', user.id)
          .single(),
        supabase
          .from('daily_tasks')
          .select('*')
          .eq('user_id', user.id)
          .eq('day_number', avatarState?.current_day ?? 1)
          .order('created_at'),
        supabase
          .from('daily_logs')
          .select('day_number, status')
          .eq('user_id', user.id)
          .order('day_number'),
      ]);
      
      return (
        <div className="p-4 lg:p-6 space-y-6">
          {/* Grid principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Avatar + Status - Ocupa 8 columnas en desktop */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AvatarDisplay 
                  imageUrl={avatarState?.last_image_url}
                  level={avatarState?.current_level ?? 1}
                  isGenerating={!avatarState?.last_image_url}
                />
                <StatusCards 
                  health={avatarState?.health_points ?? 10}
                  maxHealth={10}
                  level={avatarState?.current_level ?? 1}
                  streak={avatarState?.streak_days ?? 0}
                  btc={wallet?.btc_balance ?? 0}
                />
              </div>
              
              {/* Vectores */}
              <VectorBars 
                aura={avatarState?.aura_lvl ?? 1}
                jawline={avatarState?.face_lvl ?? 1}
                wealth={avatarState?.wealth_lvl ?? 1}
                muscle={avatarState?.muscle_lvl ?? 1}
                fat={avatarState?.fat_lvl ?? 13}
                env={avatarState?.env_lvl ?? 1}
              />
            </div>
            
            {/* Sidebar derecho - 4 columnas */}
            <div className="lg:col-span-4 space-y-6">
              <TaskList tasks={todayTasks ?? []} />
              <TimeMatrix 
                currentDay={avatarState?.current_day ?? 1}
                logs={dailyLogs ?? []}
              />
            </div>
          </div>
        </div>
      );
    }
    ```

SUBCAJA 06.2: Avatar Display (The Mirror)
Descripción
El componente central que muestra la imagen generada por IA del avatar. Es el "espejo bio-digital" del sistema.
Archivos a Crear
Copy/src/components/dashboard/AvatarDisplay.tsx
/src/components/dashboard/AvatarSkeleton.tsx
/src/components/dashboard/AvatarFullscreen.tsx
Tareas Atómicas para 06.2
yamlCopyTAREA-06.2.1:
  Nombre: "Implementar AvatarDisplay Principal"
  Archivo: "/src/components/dashboard/AvatarDisplay.tsx"
  Acción: |
    Client Component con:
    - Imagen del avatar centrada
    - Marco decorativo que cambia según nivel
    - Estado de carga (skeleton/generating)
    - Click para abrir fullscreen
    - Badge de nivel
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el display del avatar:
    
    ```tsx
    'use client';
    
    import { useState } from 'react';
    import Image from 'next/image';
    import { cn } from '@/lib/utils';
    import { AvatarSkeleton } from './AvatarSkeleton';
    import { AvatarFullscreen } from './AvatarFullscreen';
    import { LEVEL_NAMES } from '@/lib/core/levels';
    
    interface AvatarDisplayProps {
      imageUrl: string | null;
      level: number;
      isGenerating?: boolean;
    }
    
    // Colores del marco según nivel
    const FRAME_COLORS = {
      low: 'border-gray-600',      // 1-3
      mid: 'border-blue-500',       // 4-6
      high: 'border-purple-500',    // 7-8
      elite: 'border-yellow-500',   // 9-10
      legend: 'border-gradient',    // 11-13
    };
    
    function getFrameColor(level: number): string {
      if (level <= 3) return FRAME_COLORS.low;
      if (level <= 6) return FRAME_COLORS.mid;
      if (level <= 8) return FRAME_COLORS.high;
      if (level <= 10) return FRAME_COLORS.elite;
      return FRAME_COLORS.legend;
    }
    
    export function AvatarDisplay({ 
      imageUrl, 
      level, 
      isGenerating = false 
    }: AvatarDisplayProps) {
      const [isFullscreen, setIsFullscreen] = useState(false);
      
      const frameColor = getFrameColor(level);
      const levelName = LEVEL_NAMES[level] ?? 'INDIGENTE';
      
      return (
        <>
          <div 
            className={cn(
              'relative aspect-square rounded-xl overflow-hidden',
              'border-2 transition-all duration-300',
              'cursor-pointer hover:scale-[1.02]',
              'bg-bg-tertiary',
              frameColor
            )}
            onClick={() => imageUrl && setIsFullscreen(true)}
          >
            {/* Badge de nivel */}
            <div className="absolute top-3 left-3 z-10">
              <span className={cn(
                'px-2 py-1 rounded text-xs font-bold',
                'bg-black/70 backdrop-blur',
                level >= 9 ? 'text-yellow-400' : 'text-white'
              )}>
                LVL {level} • {levelName}
              </span>
            </div>
            
            {/* Imagen o Skeleton */}
            {isGenerating || !imageUrl ? (
              <AvatarSkeleton />
            ) : (
              <Image
                src={imageUrl}
                alt="Tu Avatar"
                fill
                className="object-cover"
                priority
              />
            )}
            
            {/* Efecto de glow para niveles altos */}
            {level >= 7 && (
              <div className={cn(
                'absolute inset-0 pointer-events-none',
                'bg-gradient-radial from-transparent to-transparent',
                level >= 9 
                  ? 'via-yellow-500/10' 
                  : 'via-purple-500/10'
              )} />
            )}
          </div>
          
          {/* Modal Fullscreen */}
          <AvatarFullscreen
            isOpen={isFullscreen}
            onClose={() => setIsFullscreen(false)}
            imageUrl={imageUrl}
            level={level}
          />
        </>
      );
    }
    ```

TAREA-06.2.2:
  Nombre: "Implementar AvatarSkeleton (Estado de carga)"
  Archivo: "/src/components/dashboard/AvatarSkeleton.tsx"
  Acción: |
    Componente que muestra mientras la imagen se genera:
    - Animación de scanlines (estilo terminal)
    - Texto "GENERATING..." pulsante
    - Efecto de procesamiento
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el skeleton del avatar:
    
    ```tsx
    'use client';
    
    import { motion } from 'framer-motion';
    
    export function AvatarSkeleton() {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-tertiary">
          {/* Scanlines effect */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.03) 2px,
                rgba(255,255,255,0.03) 4px
              )`,
            }}
          />
          
          {/* Processing animation */}
          <motion.div
            className="w-16 h-16 rounded-full border-2 border-accent-red border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Text */}
          <motion.p
            className="mt-4 text-sm font-mono text-accent-red"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            GENERATING...
          </motion.p>
          
          <p className="mt-2 text-xs text-text-secondary">
            Sincronizando tu nueva identidad
          </p>
        </div>
      );
    }
    ```

TAREA-06.2.3:
  Nombre: "Implementar AvatarFullscreen Modal"
  Archivo: "/src/components/dashboard/AvatarFullscreen.tsx"
  Acción: |
    Modal fullscreen para ver el avatar en detalle:
    - Imagen grande
    - Botón de compartir (futuro)
    - Botón de descargar (futuro)
    - Cerrar con click fuera o X
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el modal fullscreen:
    
    ```tsx
    'use client';
    
    import { useEffect } from 'react';
    import Image from 'next/image';
    import { motion, AnimatePresence } from 'framer-motion';
    import { X, Download, Share2 } from 'lucide-react';
    import { Button } from '@/components/ui/Button';
    
    interface AvatarFullscreenProps {
      isOpen: boolean;
      onClose: () => void;
      imageUrl: string | null;
      level: number;
    }
    
    export function AvatarFullscreen({
      isOpen,
      onClose,
      imageUrl,
      level,
    }: AvatarFullscreenProps) {
      // Cerrar con Escape
      useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
          if (e.key === 'Escape') onClose();
        };
        
        if (isOpen) {
          document.addEventListener('keydown', handleEscape);
          document.body.style.overflow = 'hidden';
        }
        
        return () => {
          document.removeEventListener('keydown', handleEscape);
          document.body.style.overflow = 'unset';
        };
      }, [isOpen, onClose]);
      
      if (!imageUrl) return null;
      
      return (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={onClose}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white"
                onClick={onClose}
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Image container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-2xl w-full aspect-square"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={imageUrl}
                  alt="Tu Avatar"
                  fill
                  className="object-contain rounded-xl"
                />
              </motion.div>
              
              {/* Actions */}
              <div className="absolute bottom-8 flex gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {/* TODO: Download */}}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {/* TODO: Share */}}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      );
    }
    ```

TAREA-06.2.4:
  Nombre: "Agregar hook useRealtimeAvatar"
  Archivo: "/src/hooks/useRealtimeAvatar.ts"
  Acción: |
    Hook que suscribe a cambios en tiempo real del avatar_state:
    - Detecta cuando cambia last_image_url
    - Actualiza el estado local
    - Trigger de animación cuando hay nueva imagen
  Responsable: Antigravity
  Dependencias: ["TAREA-03.8.x (Realtime)"]
  Prompt para Antigravity: |
    Implementa el hook de realtime:
    
    ```tsx
    'use client';
    
    import { useEffect, useState, useCallback } from 'react';
    import { createClient } from '@/lib/supabase/client';
    import type { AvatarState } from '@/types/database';
    
    export function useRealtimeAvatar(userId: string) {
      const [avatarState, setAvatarState] = useState<AvatarState | null>(null);
      const [isNewImage, setIsNewImage] = useState(false);
      
      const fetchAvatarState = useCallback(async () => {
        const supabase = createClient();
        const { data } = await supabase
          .from('avatar_states')
          .select('*')
          .eq('user_id', userId)
          .single();
        
        if (data) {
          setAvatarState(data);
        }
      }, [userId]);
      
      useEffect(() => {
        fetchAvatarState();
        
        const supabase = createClient();
        
        const channel = supabase
          .channel(`avatar-${userId}`)
          .on(
            'postgres_changes',
            {
              event: 'UPDATE',
              schema: 'public',
              table: 'avatar_states',
              filter: `user_id=eq.${userId}`,
            },
            (payload) => {
              const newState = payload.new as AvatarState;
              const oldState = avatarState;
              
              // Detectar si cambió la imagen
              if (oldState && newState.last_image_url !== oldState.last_image_url) {
                setIsNewImage(true);
                setTimeout(() => setIsNewImage(false), 3000);
              }
              
              setAvatarState(newState);
            }
          )
          .subscribe();
        
        return () => {
          supabase.removeChannel(channel);
        };
      }, [userId, fetchAvatarState]);
      
      return { avatarState, isNewImage };
    }
    ```

SUBCAJA 06.3: Status Cards (Vectores, Salud, BTC)
Descripción
Los componentes que muestran las métricas críticas del usuario: salud (corazones), nivel, racha, BTC, y los 5 vectores (AURA, JAWLINE, WEALTH, PHYSIQUE compuesto por muscle+fat, ENV).
Archivos a Crear
Copy/src/components/dashboard/StatusCards.tsx
/src/components/dashboard/HealthBar.tsx
/src/components/dashboard/VectorBars.tsx
/src/components/dashboard/VectorBar.tsx
/src/components/ui/ProgressBar.tsx
Tareas Atómicas para 06.3
yamlCopyTAREA-06.3.1:
  Nombre: "Implementar StatusCards Principal"
  Archivo: "/src/components/dashboard/StatusCards.tsx"
  Acción: |
    Grid de cards con:
    - HealthBar (corazones)
    - Level badge
    - Streak counter
    - BTC balance (si no está en header)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa las cards de status:
    
    ```tsx
    'use client';
    
    import { Heart, Star, Flame, TrendingUp } from 'lucide-react';
    import { HealthBar } from './HealthBar';
    import { LEVEL_NAMES } from '@/lib/core/levels';
    
    interface StatusCardsProps {
      health: number;
      maxHealth: number;
      level: number;
      streak: number;
      btc: number;
    }
    
    export function StatusCards({
      health,
      maxHealth,
      level,
      streak,
      btc,
    }: StatusCardsProps) {
      const levelName = LEVEL_NAMES[level] ?? 'INDIGENTE';
      
      return (
        <div className="bg-bg-secondary rounded-xl p-4 space-y-4">
          {/* Health Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-text-secondary flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-red-500" />
                Salud
              </span>
              <span className="text-sm font-medium text-white">
                {health}/{maxHealth}
              </span>
            </div>
            <HealthBar current={health} max={maxHealth} />
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            {/* Level */}
            <div className="bg-bg-tertiary rounded-lg p-3 text-center">
              <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
              <p className="text-lg font-bold text-white">{level}</p>
              <p className="text-[10px] text-text-secondary uppercase tracking-wide">
                {levelName}
              </p>
            </div>
            
            {/* Streak */}
            <div className="bg-bg-tertiary rounded-lg p-3 text-center">
              <Flame className="w-5 h-5 text-orange-500 mx-auto mb-1" />
              <p className="text-lg font-bold text-white">{streak}</p>
              <p className="text-[10px] text-text-secondary uppercase tracking-wide">
                Días
              </p>
            </div>
            
            {/* Day Progress */}
            <div className="bg-bg-tertiary rounded-lg p-3 text-center">
              <TrendingUp className="w-5 h-5 text-green-500 mx-auto mb-1" />
              <p className="text-lg font-bold text-white">
                {Math.round((level / 10) * 100)}%
              </p>
              <p className="text-[10px] text-text-secondary uppercase tracking-wide">
                Progreso
              </p>
            </div>
          </div>
        </div>
      );
    }
    ```

TAREA-06.3.2:
  Nombre: "Implementar HealthBar (Corazones)"
  Archivo: "/src/components/dashboard/HealthBar.tsx"
  Acción: |
    Visualización de corazones estilo Zelda:
    - Corazones llenos, parciales, vacíos
    - Animación de pérdida
    - Colores según estado (verde, amarillo, rojo)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa la barra de salud:
    
    ```tsx
    'use client';
    
    import { motion } from 'framer-motion';
    import { Heart } from 'lucide-react';
    import { cn } from '@/lib/utils';
    
    interface HealthBarProps {
      current: number;
      max: number;
    }
    
    export function HealthBar({ current, max }: HealthBarProps) {
      const percentage = (current / max) * 100;
      
      // Determinar color según porcentaje
      const getColor = () => {
        if (percentage > 70) return 'text-green-500';
        if (percentage > 30) return 'text-yellow-500';
        return 'text-red-500';
      };
      
      // Crear array de corazones
      const hearts = Array.from({ length: max }, (_, i) => {
        const isFilled = i < current;
        return { id: i, filled: isFilled };
      });
      
      return (
        <div className="flex items-center gap-1">
          {hearts.map((heart, index) => (
            <motion.div
              key={heart.id}
              initial={false}
              animate={{
                scale: heart.filled ? 1 : 0.8,
                opacity: heart.filled ? 1 : 0.3,
              }}
              transition={{ duration: 0.2 }}
            >
              <Heart
                className={cn(
                  'w-5 h-5 transition-colors',
                  heart.filled ? getColor() : 'text-gray-700',
                  heart.filled && 'fill-current'
                )}
              />
            </motion.div>
          ))}
        </div>
      );
    }
    ```

TAREA-06.3.3:
  Nombre: "Implementar VectorBars Container"
  Archivo: "/src/components/dashboard/VectorBars.tsx"
  Acción: |
    Container que muestra los 5 vectores del cuestionario1:
    - AURA (aura_lvl)
    - JAWLINE (face_lvl)
    - WEALTH (wealth_lvl)
    - PHYSIQUE (combinado muscle_lvl + fat_lvl)
    - ENV (env_lvl)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el container de vectores:
    
    ```tsx
    'use client';
    
    import { VectorBar } from './VectorBar';
    import { Brain, Smile, Briefcase, Dumbbell, Home } from 'lucide-react';
    
    interface VectorBarsProps {
      aura: number;      // 1-13
      jawline: number;   // 1-13 (face_lvl)
      wealth: number;    // 1-13
      muscle: number;    // 1-13
      fat: number;       // 13-1 (inverso)
      env: number;       // 1-13
    }
    
    export function VectorBars({
      aura,
      jawline,
      wealth,
      muscle,
      fat,
      env,
    }: VectorBarsProps) {
      // Calcular PHYSIQUE combinado
      // physique_score = (muscle_lvl + (14 - fat_lvl)) / 2
      const physique = (muscle + (14 - fat)) / 2;
      
      const vectors = [
        {
          id: 'aura',
          label: 'AURA',
          value: aura,
          max: 13,
          icon: Brain,
          color: 'purple',
          description: 'Presencia y energía mental',
        },
        {
          id: 'jawline',
          label: 'JAWLINE',
          value: jawline,
          max: 13,
          icon: Smile,
          color: 'cyan',
          description: 'Definición facial',
        },
        {
          id: 'wealth',
          label: 'WEALTH',
          value: wealth,
          max: 13,
          icon: Briefcase,
          color: 'yellow',
          description: 'Estatus económico',
        },
        {
          id: 'physique',
          label: 'PHYSIQUE',
          value: physique,
          max: 13,
          icon: Dumbbell,
          color: 'red',
          description: `Músculo: ${muscle.toFixed(1)} | Grasa: ${fat.toFixed(1)}`,
        },
        {
          id: 'env',
          label: 'ENV',
          value: env,
          max: 13,
          icon: Home,
          color: 'green',
          description: 'Entorno y escenario',
        },
      ];
      
      return (
        <div className="bg-bg-secondary rounded-xl p-4">
          <h3 className="text-sm font-medium text-text-secondary mb-4">
            VECTORES DE IDENTIDAD
          </h3>
          
          <div className="space-y-3">
            {vectors.map((vector) => (
              <VectorBar
                key={vector.id}
                label={vector.label}
                value={vector.value}
                max={vector.max}
                icon={vector.icon}
                color={vector.color}
                description={vector.description}
              />
            ))}
          </div>
        </div>
      );
    }
    ```

TAREA-06.3.4:
  Nombre: "Implementar VectorBar Individual"
  Archivo: "/src/components/dashboard/VectorBar.tsx"
  Acción: |
    Barra de progreso individual para cada vector:
    - Icono
    - Label
    - Barra con color
    - Valor numérico
    - Tooltip con descripción
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa la barra de vector individual:
    
    ```tsx
    'use client';
    
    import { LucideIcon } from 'lucide-react';
    import * as Tooltip from '@radix-ui/react-tooltip';
    import { cn } from '@/lib/utils';
    
    interface VectorBarProps {
      label: string;
      value: number;
      max: number;
      icon: LucideIcon;
      color: 'purple' | 'cyan' | 'yellow' | 'red' | 'green';
      description: string;
    }
    
    const COLOR_CLASSES = {
      purple: {
        bg: 'bg-purple-500/20',
        fill: 'bg-purple-500',
        text: 'text-purple-400',
      },
      cyan: {
        bg: 'bg-cyan-500/20',
        fill: 'bg-cyan-500',
        text: 'text-cyan-400',
      },
      yellow: {
        bg: 'bg-yellow-500/20',
        fill: 'bg-yellow-500',
        text: 'text-yellow-400',
      },
      red: {
        bg: 'bg-red-500/20',
        fill: 'bg-red-500',
        text: 'text-red-400',
      },
      green: {
        bg: 'bg-green-500/20',
        fill: 'bg-green-500',
        text: 'text-green-400',
      },
    };
    
    export function VectorBar({
      label,
      value,
      max,
      icon: Icon,
      color,
      description,
    }: VectorBarProps) {
      const percentage = (value / max) * 100;
      const colors = COLOR_CLASSES[color];
      
      return (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="flex items-center gap-3 cursor-help">
                {/* Icon */}
                <div className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center',
                  colors.bg
                )}>
                  <Icon className={cn('w-4 h-4', colors.text)} />
                </div>
                
                {/* Label + Bar */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-text-secondary">
                      {label}
                    </span>
                    <span className={cn('text-xs font-bold', colors.text)}>
                      {value.toFixed(1)}
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className={cn('h-2 rounded-full overflow-hidden', colors.bg)}>
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-500',
                        colors.fill
                      )}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </Tooltip.Trigger>
            
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-bg-tertiary border border-white/10 px-3 py-2 rounded-lg text-xs text-text-secondary max-w-xs"
                sideOffset={5}
              >
                {description}
                <Tooltip.Arrow className="fill-bg-tertiary" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      );
    }
    ```

TAREA-06.3.5:
  Nombre: "Implementar ProgressBar Base UI"
  Archivo: "/src/components/ui/ProgressBar.tsx"
  Acción: |
    Componente base reutilizable de barra de progreso:
    - Variantes de color
    - Animación de fill
    - Opcional: label y valor
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el componente base:
    
    ```tsx
    'use client';
    
    import { cn } from '@/lib/utils';
    
    interface ProgressBarProps {
      value: number;
      max?: number;
      variant?: 'default' | 'success' | 'warning' | 'danger';
      size?: 'sm' | 'md' | 'lg';
      showLabel?: boolean;
      className?: string;
    }
    
    const VARIANT_CLASSES = {
      default: 'bg-blue-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500',
    };
    
    const SIZE_CLASSES = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    };
    
    export function ProgressBar({
      value,
      max = 100,
      variant = 'default',
      size = 'md',
      showLabel = false,
      className,
    }: ProgressBarProps) {
      const percentage = Math.min(100, Math.max(0, (value / max) * 100));
      
      return (
        <div className={cn('w-full', className)}>
          {showLabel && (
            <div className="flex justify-between text-xs text-text-secondary mb-1">
              <span>{value}</span>
              <span>{max}</span>
            </div>
          )}
          
          <div className={cn(
            'w-full bg-white/10 rounded-full overflow-hidden',
            SIZE_CLASSES[size]
          )}>
            <div
              className={cn(
                'h-full rounded-full transition-all duration-500 ease-out',
                VARIANT_CLASSES[variant]
              )}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      );
    }
    ```

SUBCAJA 06.4: Lista de Tareas del Día
Descripción
El componente que muestra las tareas asignadas para el día actual y permite marcarlas como completadas.
Archivos a Crear
Copy/src/components/dashboard/TaskList.tsx
/src/components/dashboard/TaskItem.tsx
/src/components/dashboard/TaskCategory.tsx
Tareas Atómicas para 06.4
yamlCopyTAREA-06.4.1:
  Nombre: "Implementar TaskList Container"
  Archivo: "/src/components/dashboard/TaskList.tsx"
  Acción: |
    Container que agrupa las tareas por arquetipo:
    - Arquetipo Mental (AURA)
    - Arquetipo Cara (JAWLINE)
    - Arquetipo Productividad (WEALTH)
    - Arquetipo Físico (PHYSIQUE)
    - Contador de completadas/total
    - Progreso del día
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa la lista de tareas:
    
    ```tsx
    'use client';
    
    import { useMemo } from 'react';
    import { TaskItem } from './TaskItem';
    import { TaskCategory } from './TaskCategory';
    import { ProgressBar } from '@/components/ui/ProgressBar';
    import type { DailyTask } from '@/types/database';
    
    // Mapeo de categorías a arquetipos según cuestionario1
    const ARCHETYPE_MAP = {
      meditation: 'mental',
      cold_shower: 'mental',
      reading: 'mental',
      wake_early: 'mental',
      posture: 'cara',
      facial: 'cara',
      kegel: 'cara',
      journal: 'productividad',
      skill_learning: 'productividad',
      focus_work: 'productividad',
      strength: 'fisico',
      cardio: 'fisico',
      hydration: 'fisico',
    } as const;
    
    interface TaskListProps {
      tasks: DailyTask[];
    }
    
    export function TaskList({ tasks }: TaskListProps) {
      const completedCount = tasks.filter(t => t.status === 'completed').length;
      const totalCount = tasks.length;
      const completionPercentage = totalCount > 0 
        ? (completedCount / totalCount) * 100 
        : 0;
      
      // Agrupar tareas por arquetipo
      const groupedTasks = useMemo(() => {
        const groups: Record<string, DailyTask[]> = {
          mental: [],
          cara: [],
          productividad: [],
          fisico: [],
        };
        
        tasks.forEach(task => {
          const archetype = ARCHETYPE_MAP[task.category as keyof typeof ARCHETYPE_MAP];
          if (archetype) {
            groups[archetype].push(task);
          }
        });
        
        return groups;
      }, [tasks]);
      
      return (
        <div className="bg-bg-secondary rounded-xl p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-white">
              TAREAS DE HOY
            </h3>
            <span className="text-sm text-text-secondary">
              {completedCount}/{totalCount}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="mb-4">
            <ProgressBar 
              value={completionPercentage}
              variant={completionPercentage >= 80 ? 'success' : 'default'}
              size="sm"
            />
            <p className="text-xs text-text-secondary mt-1">
              {completionPercentage >= 80 
                ? '✓ Día válido para racha'
                : `Necesitas ${Math.ceil(totalCount * 0.8) - completedCount} más para el 80%`
              }
            </p>
          </div>
          
          {/* Tasks by archetype */}
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {Object.entries(groupedTasks).map(([archetype, archetypeTasks]) => {
              if (archetypeTasks.length === 0) return null;
              
              return (
                <TaskCategory 
                  key={archetype}
                  archetype={archetype}
                  tasks={archetypeTasks}
                />
              );
            })}
          </div>
        </div>
      );
    }
    ```

TAREA-06.4.2:
  Nombre: "Implementar TaskCategory"
  Archivo: "/src/components/dashboard/TaskCategory.tsx"
  Acción: |
    Agrupa tareas por arquetipo:
    - Header con nombre del arquetipo e icono
    - Lista de TaskItems
    - Colapsable (opcional)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el agrupador de categoría:
    
    ```tsx
    'use client';
    
    import { Brain, Smile, Briefcase, Dumbbell } from 'lucide-react';
    import { TaskItem } from './TaskItem';
    import type { DailyTask } from '@/types/database';
    
    const ARCHETYPE_CONFIG = {
      mental: {
        label: 'MENTAL',
        icon: Brain,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        vector: 'AURA',
      },
      cara: {
        label: 'CARA',
        icon: Smile,
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        vector: 'JAWLINE',
      },
      productividad: {
        label: 'PRODUCTIVIDAD',
        icon: Briefcase,
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        vector: 'WEALTH',
      },
      fisico: {
        label: 'FÍSICO',
        icon: Dumbbell,
        color: 'text-red-400',
        bg: 'bg-red-500/10',
        vector: 'PHYSIQUE',
      },
    };
    
    interface TaskCategoryProps {
      archetype: string;
      tasks: DailyTask[];
    }
    
    export function TaskCategory({ archetype, tasks }: TaskCategoryProps) {
      const config = ARCHETYPE_CONFIG[archetype as keyof typeof ARCHETYPE_CONFIG];
      
      if (!config) return null;
      
      const Icon = config.icon;
      const completedCount = tasks.filter(t => t.status === 'completed').length;
      
      return (
        <div>
          {/* Category header */}
          <div className="flex items-center gap-2 mb-2">
            <div className={`p-1.5 rounded ${config.bg}`}>
              <Icon className={`w-3.5 h-3.5 ${config.color}`} />
            </div>
            <span className={`text-xs font-medium ${config.color}`}>
              {config.label}
            </span>
            <span className="text-xs text-text-secondary">
              ({completedCount}/{tasks.length})
            </span>
            <span className="text-[10px] text-text-secondary ml-auto">
              → {config.vector}
            </span>
          </div>
          
          {/* Tasks */}
          <div className="space-y-1.5 pl-2">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      );
    }
    ```

TAREA-06.4.3:
  Nombre: "Implementar TaskItem"
  Archivo: "/src/components/dashboard/TaskItem.tsx"
  Acción: |
    Item individual de tarea:
    - Checkbox para completar
    - Nombre de la tarea
    - Recompensa en BTC
    - Estado visual (pendiente, completada)
    - Optimistic update al completar
  Responsable: Antigravity
  Dependencias: ["TAREA-04.x.x (Server Action completeTask)"]
  Prompt para Antigravity: |
    Implementa el item de tarea:
    
    ```tsx
    'use client';
    
    import { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Check, Bitcoin, Loader2 } from 'lucide-react';
    import { cn } from '@/lib/utils';
    import { completeTask } from '@/actions/tasks';
    import { useToast } from '@/hooks/useToast';
    import type { DailyTask } from '@/types/database';
    
    interface TaskItemProps {
      task: DailyTask;
    }
    
    export function TaskItem({ task }: TaskItemProps) {
      const [isLoading, setIsLoading] = useState(false);
      const [optimisticCompleted, setOptimisticCompleted] = useState(
        task.status === 'completed'
      );
      const { toast } = useToast();
      
      const isCompleted = optimisticCompleted || task.status === 'completed';
      
      const handleComplete = async () => {
        if (isCompleted || isLoading) return;
        
        setIsLoading(true);
        setOptimisticCompleted(true);
        
        try {
          const result = await completeTask({
            taskId: task.id,
            idempotencyKey: `${task.id}-${Date.now()}`,
          });
          
          if (!result.success) {
            setOptimisticCompleted(false);
            toast({
              type: 'error',
              message: result.message ?? 'Error al completar la tarea',
            });
          } else {
            toast({
              type: 'success',
              message: `+${task.btc_reward} BTC`,
            });
          }
        } catch (error) {
          setOptimisticCompleted(false);
          toast({
            type: 'error',
            message: 'Error de conexión',
          });
        } finally {
          setIsLoading(false);
        }
      };
      
      return (
        <motion.div
          layout
          className={cn(
            'flex items-center gap-3 p-2.5 rounded-lg transition-colors',
            'bg-bg-tertiary',
            isCompleted && 'opacity-60'
          )}
        >
          {/* Checkbox */}
          <button
            onClick={handleComplete}
            disabled={isCompleted || isLoading}
            className={cn(
              'w-5 h-5 rounded border-2 flex items-center justify-center',
              'transition-all duration-200',
              isCompleted
                ? 'bg-green-500 border-green-500'
                : 'border-white/30 hover:border-white/50'
            )}
          >
            {isLoading ? (
              <Loader2 className="w-3 h-3 text-white animate-spin" />
            ) : isCompleted ? (
              <Check className="w-3 h-3 text-white" />
            ) : null}
          </button>
          
          {/* Task info */}
          <div className="flex-1 min-w-0">
            <p className={cn(
              'text-sm',
              isCompleted ? 'text-text-secondary line-through' : 'text-white'
            )}>
              {task.title}
            </p>
          </div>
          
          {/* Reward */}
          <div className="flex items-center gap-1 text-xs">
            <Bitcoin className="w-3.5 h-3.5 text-yellow-500" />
            <span className={cn(
              isCompleted ? 'text-text-secondary' : 'text-yellow-500 font-medium'
            )}>
              +{task.btc_reward}
            </span>
          </div>
        </motion.div>
      );
    }
    ```

TAREA-06.4.4:
  Nombre: "Implementar animación de tarea completada"
  Archivo: "/src/components/dashboard/TaskItem.tsx" (extensión)
  Acción: |
    Añadir efectos visuales al completar:
    - Sonido de "coin" (opcional)
    - Partículas de BTC
    - Vibración háptica en mobile
  Responsable: Antigravity
  Prompt para Antigravity: |
    Añade animaciones de completado al TaskItem:
    
    - Al completar, mostrar animación de "+BTC" flotando
    - Efecto de confetti mínimo (3-5 partículas)
    - Sonido de moneda (si el usuario lo permite)
    - Vibración háptica si está disponible
    
    ```tsx
    // Añadir al handleComplete después del toast:
    
    // Vibración háptica
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Sonido (comentado hasta implementar sistema de audio)
    // playSound('coin');
    ```

SUBCAJA 06.5: Calendario de 100 Días (Time Matrix)
Descripción
Visualización del progreso en los 100 días. Muestra días pasados (éxito/fallo), día actual, y días futuros bloqueados.
Archivos a Crear
Copy/src/components/dashboard/TimeMatrix.tsx
/src/components/dashboard/DayCell.tsx
Tareas Atómicas para 06.5
yamlCopyTAREA-06.5.1:
  Nombre: "Implementar TimeMatrix Container"
  Archivo: "/src/components/dashboard/TimeMatrix.tsx"
  Acción: |
    Grid de 100 días:
    - Vista compacta (7 columnas x 15 filas aprox)
    - Día actual destacado
    - Días pasados con color según resultado
    - Días futuros bloqueados
    - Click en día pasado abre detalle
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el calendario de 100 días:
    
    ```tsx
    'use client';
    
    import { useMemo } from 'react';
    import { DayCell } from './DayCell';
    import type { DailyLog } from '@/types/database';
    
    interface TimeMatrixProps {
      currentDay: number;
      logs: Pick<DailyLog, 'day_number' | 'status'>[];
    }
    
    export function TimeMatrix({ currentDay, logs }: TimeMatrixProps) {
      // Crear mapa de logs por día
      const logMap = useMemo(() => {
        const map = new Map<number, string>();
        logs.forEach(log => {
          map.set(log.day_number, log.status);
        });
        return map;
      }, [logs]);
      
      // Crear array de 100 días
      const days = useMemo(() => {
        return Array.from({ length: 100 }, (_, i) => {
          const dayNumber = i + 1;
          const isPast = dayNumber < currentDay;
          const isCurrent = dayNumber === currentDay;
          const isFuture = dayNumber > currentDay;
          
          let status: 'success' | 'partial' | 'failed' | 'current' | 'future' = 'future';
          
          if (isPast) {
            const logStatus = logMap.get(dayNumber);
            status = (logStatus as typeof status) ?? 'failed';
          } else if (isCurrent) {
            status = 'current';
          }
          
          return {
            dayNumber,
            status,
            isPast,
            isCurrent,
            isFuture,
          };
        });
      }, [currentDay, logMap]);
      
      return (
        <div className="bg-bg-secondary rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-white">
              PROTOCOLO 100 DÍAS
            </h3>
            <span className="text-xs text-text-secondary">
              Día {currentDay}
            </span>
          </div>
          
          {/* Grid */}
          <div className="grid grid-cols-10 gap-1">
            {days.map((day) => (
              <DayCell key={day.dayNumber} {...day} />
            ))}
          </div>
          
          {/* Leyenda */}
          <div className="flex items-center gap-4 mt-3 text-[10px] text-text-secondary">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-sm bg-green-500" />
              <span>Éxito</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-sm bg-yellow-500" />
              <span>Parcial</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-sm bg-red-500" />
              <span>Fallo</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-sm bg-accent-red ring-2 ring-accent-red/50" />
              <span>Hoy</span>
            </div>
          </div>
        </div>
      );
    }
    ```

TAREA-06.5.2:
  Nombre: "Implementar DayCell"
  Archivo: "/src/components/dashboard/DayCell.tsx"
  Acción: |
    Celda individual del calendario:
    - Color según status
    - Tooltip con info del día
    - Click abre modal de detalle (días pasados)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa la celda del día:
    
    ```tsx
    'use client';
    
    import { useState } from 'react';
    import { motion } from 'framer-motion';
    import * as Tooltip from '@radix-ui/react-tooltip';
    import { Lock } from 'lucide-react';
    import { cn } from '@/lib/utils';
    
    interface DayCellProps {
      dayNumber: number;
      status: 'success' | 'partial' | 'failed' | 'current' | 'future';
      isPast: boolean;
      isCurrent: boolean;
      isFuture: boolean;
    }
    
    const STATUS_CLASSES = {
      success: 'bg-green-500',
      partial: 'bg-yellow-500',
      failed: 'bg-red-500/70',
      current: 'bg-accent-red ring-2 ring-accent-red/50',
      future: 'bg-white/5',
    };
    
    const STATUS_LABELS = {
      success: 'Día completado ✓',
      partial: 'Completado parcialmente',
      failed: 'Día fallido',
      current: 'Hoy',
      future: 'Bloqueado',
    };
    
    export function DayCell({
      dayNumber,
      status,
      isPast,
      isCurrent,
      isFuture,
    }: DayCellProps) {
      const [isHovered, setIsHovered] = useState(false);
      
      const handleClick = () => {
        if (isPast) {
          // TODO: Abrir modal con detalles del día
          console.log(`Ver detalles del día ${dayNumber}`);
        }
      };
      
      return (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <motion.button
                className={cn(
                  'relative aspect-square rounded-sm text-[8px] font-medium',
                  'transition-all duration-150',
                  STATUS_CLASSES[status],
                  isPast && 'cursor-pointer hover:ring-1 hover:ring-white/50',
                  isFuture && 'cursor-not-allowed opacity-50'
                )}
                onClick={handleClick}
                disabled={isFuture}
                whileHover={isPast ? { scale: 1.1 } : undefined}
                whileTap={isPast ? { scale: 0.95 } : undefined}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                {/* Day number - solo visible en hover o si es current */}
                {(isCurrent || isHovered) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white">
                    {dayNumber}
                  </span>
                )}
                
                {/* Lock icon para días futuros */}
                {isFuture && (
                  <Lock className="absolute inset-0 m-auto w-2 h-2 text-white/30" />
                )}
              </motion.button>
            </Tooltip.Trigger>
            
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-bg-tertiary border border-white/10 px-2 py-1 rounded text-xs text-white"
                sideOffset={5}
              >
                <div>
                  <span className="font-medium">Día {dayNumber}</span>
                  <span className="text-text-secondary ml-2">
                    {STATUS_LABELS[status]}
                  </span>
                </div>
                <Tooltip.Arrow className="fill-bg-tertiary" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      );
    }
    ```

TAREA-06.5.3:
  Nombre: "Implementar Modal de Detalle del Día"
  Archivo: "/src/components/dashboard/DayDetailModal.tsx"
  Acción: |
    Modal que muestra detalles de un día pasado:
    - Imagen del avatar de ese día
    - Tareas completadas/fallidas
    - BTC ganados
    - Vectores de ese día
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el modal de detalle:
    
    ```tsx
    'use client';
    
    import { useEffect, useState } from 'react';
    import Image from 'next/image';
    import { motion, AnimatePresence } from 'framer-motion';
    import { X, Check, XIcon, Bitcoin } from 'lucide-react';
    import { createClient } from '@/lib/supabase/client';
    import type { DailyLog } from '@/types/database';
    
    interface DayDetailModalProps {
      isOpen: boolean;
      onClose: () => void;
      dayNumber: number;
      userId: string;
    }
    
    export function DayDetailModal({
      isOpen,
      onClose,
      dayNumber,
      userId,
    }: DayDetailModalProps) {
      const [dayLog, setDayLog] = useState<DailyLog | null>(null);
      const [isLoading, setIsLoading] = useState(true);
      
      useEffect(() => {
        if (!isOpen) return;
        
        const fetchDayData = async () => {
          setIsLoading(true);
          const supabase = createClient();
          
          const { data } = await supabase
            .from('daily_logs')
            .select('*')
            .eq('user_id', userId)
            .eq('day_number', dayNumber)
            .single();
          
          setDayLog(data);
          setIsLoading(false);
        };
        
        fetchDayData();
      }, [isOpen, dayNumber, userId]);
      
      if (!isOpen) return null;
      
      return (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-bg-secondary rounded-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white">
                  Día {dayNumber}
                </h2>
                <button onClick={onClose} className="p-1 text-text-secondary hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {isLoading ? (
                <div className="h-48 flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-2 border-accent-red border-t-transparent rounded-full" />
                </div>
              ) : dayLog ? (
                <div className="space-y-4">
                  {/* Avatar de ese día */}
                  {dayLog.image_url && (
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src={dayLog.image_url}
                        alt={`Avatar día ${dayNumber}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-bg-tertiary rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-white">
                        {dayLog.tasks_completed}/{dayLog.tasks_total}
                      </p>
                      <p className="text-xs text-text-secondary">Tareas</p>
                    </div>
                    
                    <div className="bg-bg-tertiary rounded-lg p-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Bitcoin className="w-4 h-4 text-yellow-500" />
                        <span className="text-xl font-bold text-white">
                          {dayLog.btc_earned}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary">BTC</p>
                    </div>
                    
                    <div className="bg-bg-tertiary rounded-lg p-3 text-center">
                      <p className={`text-2xl font-bold ${
                        dayLog.health_change > 0 ? 'text-green-500' :
                        dayLog.health_change < 0 ? 'text-red-500' : 'text-white'
                      }`}>
                        {dayLog.health_change > 0 ? '+' : ''}{dayLog.health_change}
                      </p>
                      <p className="text-xs text-text-secondary">Salud</p>
                    </div>
                  </div>
                  
                  {/* Status */}
                  <div className={`px-4 py-2 rounded-lg text-center ${
                    dayLog.status === 'success' ? 'bg-green-500/20 text-green-400' :
                    dayLog.status === 'partial' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {dayLog.status === 'success' ? 'Día Completado ✓' :
                     dayLog.status === 'partial' ? 'Completado Parcialmente' :
                     'Día Fallido'}
                  </div>
                </div>
              ) : (
                <p className="text-center text-text-secondary py-8">
                  No se encontraron datos para este día
                </p>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      );
    }
    ```

SUBCAJA 06.6: Componentes UI Base
Descripción
Librería de componentes reutilizables siguiendo el design system del cuestionario2 (estilo Supabase Dark con acentos rojos).
Archivos a Crear
Copy/src/components/ui/Button.tsx
/src/components/ui/Input.tsx
/src/components/ui/Card.tsx
/src/components/ui/Badge.tsx
/src/components/ui/Modal.tsx
/src/components/ui/Toast.tsx
/src/components/ui/Skeleton.tsx
/src/components/ui/Spinner.tsx
Tareas Atómicas para 06.6
yamlCopyTAREA-06.6.1:
  Nombre: "Implementar Button Component"
  Archivo: "/src/components/ui/Button.tsx"
  Acción: |
    Botón con variantes:
    - primary (rojo neón)
    - secondary (borde blanco)
    - ghost (transparente)
    - danger (rojo sólido)
    Tamaños: sm, md, lg
    Estados: default, hover, active, disabled, loading
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el componente Button:
    
    ```tsx
    import { forwardRef } from 'react';
    import { Slot } from '@radix-ui/react-slot';
    import { cva, type VariantProps } from 'class-variance-authority';
    import { Loader2 } from 'lucide-react';
    import { cn } from '@/lib/utils';
    
    const buttonVariants = cva(
      'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:pointer-events-none disabled:opacity-50',
      {
        variants: {
          variant: {
            primary: 'bg-accent-red text-white hover:bg-accent-red/90 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]',
            secondary: 'border border-white/20 text-white hover:bg-white/5 hover:border-white/30',
            ghost: 'text-text-secondary hover:text-white hover:bg-white/5',
            danger: 'bg-red-600 text-white hover:bg-red-700',
          },
          size: {
            sm: 'h-8 px-3 text-sm',
            md: 'h-10 px-4 text-sm',
            lg: 'h-12 px-6 text-base',
          },
        },
        defaultVariants: {
          variant: 'primary',
          size: 'md',
        },
      }
    );
    
    export interface ButtonProps
      extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
      asChild?: boolean;
      isLoading?: boolean;
    }
    
    const Button = forwardRef<HTMLButtonElement, ButtonProps>(
      ({ className, variant, size, asChild = false, isLoading = false, children, disabled, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        
        return (
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            disabled={disabled || isLoading}
            {...props}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
          </Comp>
        );
      }
    );
    Button.displayName = 'Button';
    
    export { Button, buttonVariants };
    ```

TAREA-06.6.2:
  Nombre: "Implementar Input Component"
  Archivo: "/src/components/ui/Input.tsx"
  Acción: |
    Input con:
    - Label opcional
    - Error state
    - Icon izquierdo
    - Variantes de estilo
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el componente Input:
    
    ```tsx
    import { forwardRef } from 'react';
    import { cn } from '@/lib/utils';
    
    export interface InputProps
      extends React.InputHTMLAttributes<HTMLInputElement> {
      label?: string;
      error?: string;
      leftIcon?: React.ReactNode;
    }
    
    const Input = forwardRef<HTMLInputElement, InputProps>(
      ({ className, type, label, error, leftIcon, ...props }, ref) => {
        return (
          <div className="w-full">
            {label && (
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                {label}
              </label>
            )}
            
            <div className="relative">
              {leftIcon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
                  {leftIcon}
                </div>
              )}
              
              <input
                type={type}
                className={cn(
                  'flex h-10 w-full rounded-lg border bg-bg-tertiary px-3 py-2 text-sm text-white',
                  'placeholder:text-text-secondary',
                  'focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  error
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-white/10 hover:border-white/20',
                  leftIcon && 'pl-10',
                  className
                )}
                ref={ref}
                {...props}
              />
            </div>
            
            {error && (
              <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
          </div>
        );
      }
    );
    Input.displayName = 'Input';
    
    export { Input };
    ```

TAREA-06.6.3:
  Nombre: "Implementar Card Component"
  Archivo: "/src/components/ui/Card.tsx"
  Acción: |
    Card con:
    - Header, Content, Footer opcionales
    - Variantes: default, elevated, outlined
    - Padding configurable
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el componente Card:
    
    ```tsx
    import { cn } from '@/lib/utils';
    
    interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
      variant?: 'default' | 'elevated' | 'outlined';
    }
    
    function Card({ className, variant = 'default', ...props }: CardProps) {
      return (
        <div
          className={cn(
            'rounded-xl',
            variant === 'default' && 'bg-bg-secondary',
            variant === 'elevated' && 'bg-bg-secondary shadow-lg shadow-black/20',
            variant === 'outlined' && 'border border-white/10 bg-transparent',
            className
          )}
          {...props}
        />
      );
    }
    
    function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
      return (
        <div
          className={cn('p-4 border-b border-white/10', className)}
          {...props}
        />
      );
    }
    
    function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
      return (
        <div className={cn('p-4', className)} {...props} />
      );
    }
    
    function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
      return (
        <div
          className={cn('p-4 border-t border-white/10', className)}
          {...props}
        />
      );
    }
    
    export { Card, CardHeader, CardContent, CardFooter };
    ```

TAREA-06.6.4:
  Nombre: "Implementar Badge Component"
  Archivo: "/src/components/ui/Badge.tsx"
  Acción: |
    Badge con variantes de color para estados
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el componente Badge:
    
    ```tsx
    import { cva, type VariantProps } from 'class-variance-authority';
    import { cn } from '@/lib/utils';
    
    const badgeVariants = cva(
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
      {
        variants: {
          variant: {
            default: 'bg-white/10 text-white',
            success: 'bg-green-500/20 text-green-400',
            warning: 'bg-yellow-500/20 text-yellow-400',
            danger: 'bg-red-500/20 text-red-400',
            info: 'bg-blue-500/20 text-blue-400',
            premium: 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400',
          },
        },
        defaultVariants: {
          variant: 'default',
        },
      }
    );
    
    interface BadgeProps
      extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof badgeVariants> {}
    
    function Badge({ className, variant, ...props }: BadgeProps) {
      return (
        <span className={cn(badgeVariants({ variant }), className)} {...props} />
      );
    }
    
    export { Badge, badgeVariants };
    ```

TAREA-06.6.5:
  Nombre: "Implementar Toast/Notification System"
  Archivo: "/src/components/ui/Toast.tsx + /src/hooks/useToast.ts"
  Acción: |
    Sistema de notificaciones toast:
    - Tipos: success, error, warning, info
    - Auto-dismiss
    - Stack de múltiples toasts
    - Animación de entrada/salida
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el sistema de toasts usando Sonner:
    
    ```tsx
    // /src/components/ui/Toast.tsx
    'use client';
    
    import { Toaster as Sonner } from 'sonner';
    
    export function Toaster() {
      return (
        <Sonner
          theme="dark"
          className="toaster group"
          toastOptions={{
            classNames: {
              toast: 'group toast bg-bg-secondary border-white/10 text-white',
              description: 'text-text-secondary',
              actionButton: 'bg-accent-red text-white',
              cancelButton: 'bg-white/10 text-white',
            },
          }}
        />
      );
    }
    
    // /src/hooks/useToast.ts
    import { toast as sonnerToast } from 'sonner';
    
    interface ToastOptions {
      type: 'success' | 'error' | 'warning' | 'info';
      message: string;
      description?: string;
      duration?: number;
    }
    
    export function useToast() {
      const toast = ({ type, message, description, duration = 4000 }: ToastOptions) => {
        switch (type) {
          case 'success':
            sonnerToast.success(message, { description, duration });
            break;
          case 'error':
            sonnerToast.error(message, { description, duration });
            break;
          case 'warning':
            sonnerToast.warning(message, { description, duration });
            break;
          case 'info':
            sonnerToast.info(message, { description, duration });
            break;
        }
      };
      
      return { toast };
    }
    ```

TAREA-06.6.6:
  Nombre: "Implementar Skeleton Component"
  Archivo: "/src/components/ui/Skeleton.tsx"
  Acción: |
    Skeleton para estados de carga con animación pulse
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el componente Skeleton:
    
    ```tsx
    import { cn } from '@/lib/utils';
    
    function Skeleton({
      className,
      ...props
    }: React.HTMLAttributes<HTMLDivElement>) {
      return (
        <div
          className={cn(
            'animate-pulse rounded-md bg-white/10',
            className
          )}
          {...props}
        />
      );
    }
    
    export { Skeleton };
    ```

TAREA-06.6.7:
  Nombre: "Implementar Spinner Component"
  Archivo: "/src/components/ui/Spinner.tsx"
  Acción: |
    Spinner de carga con tamaños
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el componente Spinner:
    
    ```tsx
    import { cn } from '@/lib/utils';
    
    interface SpinnerProps {
      size?: 'sm' | 'md' | 'lg';
      className?: string;
    }
    
    const sizeClasses = {
      sm: 'w-4 h-4 border-2',
      md: 'w-8 h-8 border-2',
      lg: 'w-12 h-12 border-3',
    };
    
    export function Spinner({ size = 'md', className }: SpinnerProps) {
      return (
        <div
          className={cn(
            'rounded-full border-accent-red border-t-transparent animate-spin',
            sizeClasses[size],
            className
          )}
        />
      );
    }
    ```

SUBCAJA 06.7: Estados Especiales
Descripción
Pantallas y overlays para estados no-normales: muerte del avatar, modo limbo, trial expirado, sin conexión.
Archivos a Crear
Copy/src/components/states/DeathScreen.tsx
/src/components/states/LimboOverlay.tsx
/src/components/states/TrialExpiredOverlay.tsx
/src/components/states/OfflineIndicator.tsx
Tareas Atómicas para 06.7
yamlCopyTAREA-06.7.1:
  Nombre: "Implementar DeathScreen"
  Archivo: "/src/components/states/DeathScreen.tsx"
  Acción: |
    Pantalla completa cuando el avatar muere (0 corazones):
    - Animación dramática de muerte
    - Mensaje de lo perdido/conservado
    - Botón de "Renacer"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa la pantalla de muerte:
    
    ```tsx
    'use client';
    
    import { motion } from 'framer-motion';
    import { Skull, RefreshCw, Heart, Bitcoin, Flame } from 'lucide-react';
    import { Button } from '@/components/ui/Button';
    import { resurrectAvatar } from '@/actions/death';
    import { useState } from 'react';
    
    interface DeathScreenProps {
      onResurrect: () => void;
    }
    
    export function DeathScreen({ onResurrect }: DeathScreenProps) {
      const [isLoading, setIsLoading] = useState(false);
      
      const handleResurrect = async () => {
        setIsLoading(true);
        await resurrectAvatar();
        onResurrect();
      };
      
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Glitch effect overlay */}
          <div className="absolute inset-0 bg-red-900/20 animate-pulse" />
          
          <div className="text-center p-8 max-w-md relative z-10">
            {/* Skull animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 1 }}
              className="mb-8"
            >
              <Skull className="w-24 h-24 text-red-500 mx-auto" />
            </motion.div>
            
            {/* Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold text-red-500 mb-4"
            >
              SYSTEM FAILURE
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-text-secondary mb-8"
            >
              Tu avatar ha colapsado. La negligencia tiene consecuencias.
            </motion.p>
            
            {/* What's lost */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4"
            >
              <h3 className="text-red-400 font-medium mb-2">PERDIDO:</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li className="flex items-center gap-2">
                  <Dumbbell className="w-4 h-4" />
                  Progreso físico (fat_lvl → 13, muscle_lvl → 1)
                </li>
                <li className="flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  Racha de días → 0
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Nivel → 1 (Indigente)
                </li>
              </ul>
            </motion.div>
            
            {/* What's kept */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8"
            >
              <h3 className="text-green-400 font-medium mb-2">CONSERVADO:</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Progreso mental (AURA, JAWLINE, WEALTH)
                </li>
                <li className="flex items-center gap-2">
                  <Bitcoin className="w-4 h-4" />
                  Balance de BTC
                </li>
                <li className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Inventario (bloqueado hasta recuperar nivel)
                </li>
              </ul>
            </motion.div>
            
            {/* Resurrect button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <Button
                size="lg"
                onClick={handleResurrect}
                isLoading={isLoading}
                className="w-full"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                RENACER
              </Button>
              
              <p className="text-xs text-text-secondary mt-4">
                "El dolor de perder el físico enseña el valor del esfuerzo"
              </p>
            </motion.div>
          </div>
        </motion.div>
      );
    }
    ```

TAREA-06.7.2:
  Nombre: "Implementar LimboOverlay"
  Archivo: "/src/components/states/LimboOverlay.tsx"
  Acción: |
    Overlay cuando el usuario está en modo limbo:
    - Degradación visual del dashboard
    - Mensaje de advertencia
    - Contador de días restantes antes de muerte
    - Botón prominente de "Reactivar"
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el overlay de limbo:
    
    ```tsx
    'use client';
    
    import { motion } from 'framer-motion';
    import { AlertTriangle, CreditCard, Heart } from 'lucide-react';
    import { Button } from '@/components/ui/Button';
    import Link from 'next/link';
    
    interface LimboOverlayProps {
      daysInLimbo: number;
      healthRemaining: number;
    }
    
    export function LimboOverlay({ daysInLimbo, healthRemaining }: LimboOverlayProps) {
      const daysUntilDeath = Math.ceil((healthRemaining * 3)); // 1 corazón cada 3 días
      
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div className="text-center p-8 max-w-md">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            </motion.div>
            
            <h2 className="text-2xl font-bold text-yellow-500 mb-2">
              MODO LIMBO
            </h2>
            
            <p className="text-text-secondary mb-6">
              Tu suscripción ha expirado. Tu avatar se está deteriorando.
            </p>
            
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-red-400">
                <Heart className="w-5 h-5" />
                <span className="text-lg font-bold">
                  {healthRemaining} corazones restantes
                </span>
              </div>
              <p className="text-sm text-text-secondary mt-2">
                Tu avatar morirá en aproximadamente {daysUntilDeath} días
              </p>
            </div>
            
            <div className="space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link href="/dashboard/profile?tab=subscription">
                  <CreditCard className="w-5 h-5 mr-2" />
                  REACTIVAR SUSCRIPCIÓN
                </Link>
              </Button>
              
              <p className="text-xs text-text-secondary">
                Días en limbo: {daysInLimbo}/30
              </p>
            </div>
          </div>
        </motion.div>
      );
    }
    ```

TAREA-06.7.3:
  Nombre: "Implementar TrialExpiredOverlay"
  Archivo: "/src/components/states/TrialExpiredOverlay.tsx"
  Acción: |
    Overlay cuando el trial de 5 días termina:
    - Muestra preview del avatar evolucionado (día 6)
    - Mensaje de conversión
    - Botón de suscribirse
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el overlay de trial expirado:
    
    ```tsx
    'use client';
    
    import { motion } from 'framer-motion';
    import Image from 'next/image';
    import { Lock, Sparkles, ArrowRight } from 'lucide-react';
    import { Button } from '@/components/ui/Button';
    import Link from 'next/link';
    
    interface TrialExpiredOverlayProps {
      previewImageUrl?: string;
    }
    
    export function TrialExpiredOverlay({ previewImageUrl }: TrialExpiredOverlayProps) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/90"
        >
          <div className="text-center p-8 max-w-md">
            {/* Preview image with blur */}
            <div className="relative aspect-square max-w-xs mx-auto mb-6 rounded-xl overflow-hidden">
              {previewImageUrl ? (
                <>
                  <Image
                    src={previewImageUrl}
                    alt="Tu evolución"
                    fill
                    className="object-cover blur-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Lock className="w-12 h-12 text-white/70" />
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-bg-tertiary flex items-center justify-center">
                  <Lock className="w-12 h-12 text-white/30" />
                </div>
              )}
            </div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">EVOLUCIÓN DESBLOQUEADA</span>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">
                ¡Tu avatar ha evolucionado!
              </h2>
              
              <p className="text-text-secondary mb-6">
                Has completado 5 días. Tu nuevo estado espera ser revelado.
                Suscríbete para continuar tu transformación.
              </p>
              
              <Button asChild size="lg" className="w-full">
                <Link href="/checkout">
                  Ver mi evolución
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <p className="text-xs text-text-secondary mt-4">
                Solo $19.90 USD/mes • Cancela cuando quieras
              </p>
            </motion.div>
          </div>
        </motion.div>
      );
    }
    ```

TAREA-06.7.4:
  Nombre: "Implementar OfflineIndicator"
  Archivo: "/src/components/states/OfflineIndicator.tsx"
  Acción: |
    Indicador cuando el usuario pierde conexión:
    - Banner o badge discreto
    - Intento de reconexión automática
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el indicador de offline:
    
    ```tsx
    'use client';
    
    import { useEffect, useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { WifiOff } from 'lucide-react';
    
    export function OfflineIndicator() {
      const [isOffline, setIsOffline] = useState(false);
      
      useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);
        
        // Check initial state
        setIsOffline(!navigator.onLine);
        
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        
        return () => {
          window.removeEventListener('online', handleOnline);
          window.removeEventListener('offline', handleOffline);
        };
      }, []);
      
      return (
        <AnimatePresence>
          {isOffline && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 text-black py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2"
            >
              <WifiOff className="w-4 h-4" />
              Sin conexión. Reconectando...
            </motion.div>
          )}
        </AnimatePresence>
      );
    }
    ```

SUBCAJA 06.8: Animaciones y Micro-interacciones
Descripción
Efectos visuales que dan vida a la UI: transiciones, celebraciones, feedback.
Archivos a Crear
Copy/src/components/effects/BtcAnimation.tsx
/src/components/effects/LevelUpAnimation.tsx
/src/components/effects/ConfettiExplosion.tsx
/src/components/effects/HeartBreak.tsx
/src/lib/sounds.ts
Tareas Atómicas para 06.8
yamlCopyTAREA-06.8.1:
  Nombre: "Implementar BtcAnimation (Contador animado)"
  Archivo: "/src/components/effects/BtcAnimation.tsx"
  Acción: |
    Animación de BTC ganados:
    - Número que sube rápidamente (contador)
    - Efecto de "+XX" flotando
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa la animación de BTC:
    
    ```tsx
    'use client';
    
    import { useEffect, useState } from 'react';
    import { motion, useSpring, useTransform } from 'framer-motion';
    import { Bitcoin } from 'lucide-react';
    
    interface BtcAnimationProps {
      value: number;
      previousValue?: number;
    }
    
    export function BtcAnimation({ value, previousValue = 0 }: BtcAnimationProps) {
      const spring = useSpring(previousValue, {
        damping: 30,
        stiffness: 100,
      });
      
      const display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
      );
      
      useEffect(() => {
        spring.set(value);
      }, [spring, value]);
      
      return (
        <div className="flex items-center gap-1.5">
          <Bitcoin className="w-4 h-4 text-yellow-500" />
          <motion.span className="font-medium text-white">
            {display}
          </motion.span>
        </div>
      );
    }
    
    // Componente para mostrar "+XX" flotando
    export function BtcGainPopup({ amount, onComplete }: { amount: number; onComplete: () => void }) {
      return (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
          onAnimationComplete={onComplete}
          className="fixed text-yellow-500 font-bold text-lg pointer-events-none"
          style={{ left: '50%', top: '50%' }}
        >
          +{amount} BTC
        </motion.div>
      );
    }
    ```

TAREA-06.8.2:
  Nombre: "Implementar LevelUpAnimation"
  Archivo: "/src/components/effects/LevelUpAnimation.tsx"
  Acción: |
    Animación de subida de nivel:
    - Pantalla completa momentánea
    - Número de nivel grande
    - Nombre del nivel
    - Efecto de explosión/brillo
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa la animación de level up:
    
    ```tsx
    'use client';
    
    import { motion, AnimatePresence } from 'framer-motion';
    import { Star } from 'lucide-react';
    import { LEVEL_NAMES } from '@/lib/core/levels';
    
    interface LevelUpAnimationProps {
      isVisible: boolean;
      newLevel: number;
      onComplete: () => void;
    }
    
    export function LevelUpAnimation({
      isVisible,
      newLevel,
      onComplete,
    }: LevelUpAnimationProps) {
      const levelName = LEVEL_NAMES[newLevel] ?? 'DESCONOCIDO';
      
      return (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onAnimationComplete={() => {
                setTimeout(onComplete, 2000);
              }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            >
              {/* Radial glow */}
              <div className="absolute inset-0 bg-gradient-radial from-yellow-500/20 via-transparent to-transparent" />
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', duration: 0.8 }}
                >
                  <Star className="w-24 h-24 text-yellow-500 mx-auto fill-yellow-500" />
                </motion.div>
                
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold text-yellow-500 mt-6"
                >
                  NIVEL {newLevel}
                </motion.h1>
                
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl text-white mt-2"
                >
                  {levelName}
                </motion.p>
                
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-text-secondary mt-4"
                >
                  Tu avatar ha evolucionado
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      );
    }
    ```

TAREA-06.8.3:
  Nombre: "Implementar HeartBreakAnimation"
  Archivo: "/src/components/effects/HeartBreak.tsx"
  Acción: |
    Animación cuando se pierde un corazón:
    - Corazón que se rompe
    - Efecto de shake en la pantalla
    - Sonido (opcional)
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa la animación de pérdida de corazón:
    
    ```tsx
    'use client';
    
    import { motion, AnimatePresence } from 'framer-motion';
    import { Heart, HeartCrack } from 'lucide-react';
    
    interface HeartBreakProps {
      isVisible: boolean;
      onComplete: () => void;
    }
    
    export function HeartBreakAnimation({ isVisible, onComplete }: HeartBreakProps) {
      return (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onAnimationComplete={() => setTimeout(onComplete, 1000)}
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ 
                  scale: [1, 1.2, 0],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <HeartCrack className="w-32 h-32 text-red-500" />
              </motion.div>
              
              {/* Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 200,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute"
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      );
    }
    ```

TAREA-06.8.4:
  Nombre: "Configurar sistema de sonidos (opcional)"
  Archivo: "/src/lib/sounds.ts"
  Acción: |
    Sistema para reproducir sonidos de UI:
    - Sonido de moneda
    - Sonido de completado
    - Sonido de error
    - Respeta preferencias del usuario
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el sistema de sonidos:
    
    ```tsx
    // /src/lib/sounds.ts
    
    const SOUNDS = {
      coin: '/sounds/coin.mp3',
      complete: '/sounds/complete.mp3',
      error: '/sounds/error.mp3',
      levelUp: '/sounds/level-up.mp3',
    } as const;
    
    type SoundName = keyof typeof SOUNDS;
    
    let audioContext: AudioContext | null = null;
    const audioBuffers: Map<SoundName, AudioBuffer> = new Map();
    
    export async function initSounds(): Promise<void> {
      if (typeof window === 'undefined') return;
      
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Preload sounds
      await Promise.all(
        Object.entries(SOUNDS).map(async ([name, url]) => {
          try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioContext!.decodeAudioData(arrayBuffer);
            audioBuffers.set(name as SoundName, audioBuffer);
          } catch (error) {
            console.warn(`Failed to load sound: ${name}`);
          }
        })
      );
    }
    
    export function playSound(name: SoundName): void {
      // Check if sounds are enabled (localStorage preference)
      const soundsEnabled = localStorage.getItem('soundsEnabled') !== 'false';
      if (!soundsEnabled || !audioContext) return;
      
      const buffer = audioBuffers.get(name);
      if (!buffer) return;
      
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.start(0);
    }
    ```

SUBCAJA 06.9: Responsive y Mobile First
Descripción
Ajustes específicos para asegurar que la UI funcione perfectamente en todos los dispositivos.
Tareas Atómicas para 06.9
yamlCopyTAREA-06.9.1:
  Nombre: "Configurar Tailwind breakpoints y utilidades"
  Archivo: "/tailwind.config.ts"
  Acción: |
    Asegurar configuración correcta de:
    - Breakpoints (sm, md, lg, xl)
    - Safe area insets para mobile
    - Container queries si es necesario
  Responsable: Antigravity
  Prompt para Antigravity: |
    Revisa y ajusta la configuración de Tailwind:
    
    ```ts
    // tailwind.config.ts
    import type { Config } from 'tailwindcss';
    
    export default {
      content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
      theme: {
        extend: {
          colors: {
            'bg-primary': '#0A0A0B',
            'bg-secondary': '#111113',
            'bg-tertiary': '#1A1A1D',
            'text-primary': '#FFFFFF',
            'text-secondary': '#A1A1AA',
            'accent-red': '#FF3B30',
          },
          screens: {
            'xs': '475px',
            // defaults: sm: 640, md: 768, lg: 1024, xl: 1280, 2xl: 1536
          },
          spacing: {
            'safe-top': 'env(safe-area-inset-top)',
            'safe-bottom': 'env(safe-area-inset-bottom)',
            'safe-left': 'env(safe-area-inset-left)',
            'safe-right': 'env(safe-area-inset-right)',
          },
        },
      },
      plugins: [
        // Plugin para safe areas
        function({ addUtilities }) {
          addUtilities({
            '.pb-safe': {
              paddingBottom: 'env(safe-area-inset-bottom)',
            },
            '.pt-safe': {
              paddingTop: 'env(safe-area-inset-top)',
            },
          });
        },
      ],
    } satisfies Config;
    ```

TAREA-06.9.2:
  Nombre: "Auditar y ajustar Dashboard para mobile"
  Archivo: "Varios componentes"
  Acción: |
    Revisar cada componente del dashboard y asegurar:
    - Touch targets mínimo 44px
    - Texto legible en pantallas pequeñas
    - Scroll suave y natural
    - Sin overflow horizontal
  Responsable: Antigravity
  Prompt para Antigravity: |
    Realiza una auditoría de accesibilidad mobile:
    
    1. Revisa que todos los botones tengan al menos 44x44px
    2. Revisa que el texto mínimo sea 14px (preferiblemente 16px)
    3. Asegura que no haya overflow-x en ninguna pantalla
    4. Agrega snap scrolling donde sea apropiado
    5. Verifica que los modales sean usables en mobile

TAREA-06.9.3:
  Nombre: "Implementar PWA manifest y meta tags"
  Archivo: "/src/app/manifest.ts + layout.tsx"
  Acción: |
    Configurar la app como PWA:
    - Manifest con colores y nombre
    - Meta tags para iOS
    - Viewport configurado correctamente
  Responsable: Antigravity
  Prompt para Antigravity: |
    Implementa el manifest de PWA:
    
    ```ts
    // /src/app/manifest.ts
    import type { MetadataRoute } from 'next';
    
    export default function manifest(): MetadataRoute.Manifest {
      return {
        name: 'MetaMen100',
        short_name: 'MetaMen',
        description: 'Sistema Operativo de Conducta para Hombres',
        start_url: '/dashboard',
        display: 'standalone',
        background_color: '#0A0A0B',
        theme_color: '#FF3B30',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      };
    }
    ```
    
    Y en layout.tsx agregar:
    ```tsx
    export const metadata: Metadata = {
      title: 'MetaMen100',
      description: 'Sistema Operativo de Conducta',
      viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        userScalable: false,
        viewportFit: 'cover',
      },
      appleWebApp: {
        capable: true,
        statusBarStyle: 'black-translucent',
        title: 'MetaMen100',
      },
    };
    ```

TAREA-06.9.4:
  Nombre: "Test en dispositivos/simuladores"
  Archivo: "N/A - Testing manual"
  Acción: |
    Lista de verificación para testing:
    - [ ] iPhone SE (pantalla pequeña)
    - [ ] iPhone 14 Pro (notch)
    - [ ] Samsung Galaxy S21 (Android)
    - [ ] iPad (tablet)
    - [ ] Desktop 1920x1080
    - [ ] Desktop 1366x768
  Responsable: Manual
  Criterio de Éxito: "Todas las pantallas funcionan sin bugs visuales"

RESUMEN DE CAJA 06: DASHBOARD Y UI
Copy╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    📦 CAJA 06 - RESUMEN DE ENTREGABLES                              ║
║                                                                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                      ║
║  SUBCAJA                  │ ARCHIVOS                     │ TAREAS │ TIEMPO EST.     ║
║  ─────────────────────────┼──────────────────────────────┼────────┼───────────────  ║
║  06.1 Layout/Navegación   │ layout.tsx, Sidebar, etc.    │    7   │ 1.5-2 horas    ║
║  06.2 Avatar Display      │ AvatarDisplay, Skeleton      │    4   │ 1-1.5 horas    ║
║  06.3 Status Cards        │ StatusCards, VectorBars      │    5   │ 1.5-2 horas    ║
║  06.4 Task List           │ TaskList, TaskItem           │    4   │ 1.5-2 horas    ║
║  06.5 Time Matrix         │ TimeMatrix, DayCell          │    3   │ 1-1.5 horas    ║
║  06.6 UI Components       │ Button, Input, Card, etc.    │    7   │ 2-2.5 horas    ║
║  06.7 Estados Especiales  │ Death, Limbo, Trial          │    4   │ 1.5-2 horas    ║
║  06.8 Animaciones         │ BtcAnimation, LevelUp        │    4   │ 1-1.5 horas    ║
║  06.9 Responsive          │ Tailwind config, PWA         │    4   │ 1-1.5 horas    ║
║  ─────────────────────────┼──────────────────────────────┼────────┼───────────────  ║
║  TOTAL                    │ ~30 archivos                 │   42   │ 12-16 horas    ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

Dependencias de la Caja 06
CopyCAJA 06 depende de:
├── CAJA 02: Infraestructura (Supabase configurado)
├── CAJA 03: Base de Datos (Tablas creadas, RLS activo)
├── CAJA 04: Motor Core (Funciones de vectores, niveles)
└── CAJA 05: Autenticación (Sesiones funcionando)

Componentes que se usarán en CAJAS posteriores:
├── CAJA 07: Arsenal usará el Layout y componentes UI
├── CAJA 08: IA usará AvatarDisplay para mostrar imágenes
├── CAJA 09: Tienda usará componentes de cards y modales
└── CAJA 10: Pagos usará overlays de Trial/Limbo