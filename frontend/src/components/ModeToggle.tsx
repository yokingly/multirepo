'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
    >
      <div className="relative h-[1.2rem] w-[1.2rem]">
        <div className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">🌞</div>
        <div className="absolute top-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">🌙</div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
} 