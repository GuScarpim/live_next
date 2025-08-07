'use client';

import { useThemeStore } from '@/core/store/theme.store';
import { Button } from '../ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="hover:bg-accent hover:text-accent-foreground"
    >
      {theme === 'dark' ? (
        'dark'
      ) : (
        'light'
      )}
    </Button>
  );
}