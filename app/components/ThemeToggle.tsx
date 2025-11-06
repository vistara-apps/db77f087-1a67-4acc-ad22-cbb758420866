'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useTheme();

  return (
    <button
      onClick={toggleColorMode}
      className="p-2 hover:bg-primary/20 rounded-md transition-all border border-primary/30 hover:border-primary hover:shadow-neon-cyan relative group"
      aria-label="Toggle theme"
    >
      {colorMode === 'dark' ? (
        <Sun size={24} className="text-primary group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon size={24} className="text-primary group-hover:-rotate-12 transition-transform duration-500" />
      )}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-surface border border-primary/30 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
}
