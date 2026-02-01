/**
 * METAMEN100 - Vitest Setup File
 * Configuración global para tests unitarios
 *
 * Este archivo se ejecuta antes de cada test suite
 */
import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';

// Limpiar mocks después de cada test
afterEach(() => {
  vi.clearAllMocks();
});

// Mock de ResizeObserver (no disponible en jsdom)
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock de IntersectionObserver (no disponible en jsdom)
const IntersectionObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
}));

// Mock de matchMedia (no disponible en jsdom)
const matchMediaMock = vi.fn((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

// Aplicar mocks globales
vi.stubGlobal('ResizeObserver', ResizeObserverMock);
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
vi.stubGlobal('matchMedia', matchMediaMock);
vi.stubGlobal('scrollTo', vi.fn());
