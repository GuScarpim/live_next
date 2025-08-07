'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/core/store/theme.store';

export function ThemeProvider({ children }: { children: React.ReactNode; }) {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}