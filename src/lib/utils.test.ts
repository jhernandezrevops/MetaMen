import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      expect(cn('w-full', 'h-full')).toBe('w-full h-full');
      expect(cn('w-full', undefined, 'h-full')).toBe('w-full h-full');
      expect(cn('w-full', null, 'h-full')).toBe('w-full h-full');
      expect(cn('w-full', false && 'bg-red-500', 'h-full')).toBe('w-full h-full');
    });

    it('should handle tailwind conflicts', () => {
      // tailwind-merge debería resolver conflictos
      expect(cn('px-2 py-1', 'p-4')).toBe('p-4');
      expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    });
  });
});
