/**
 * Provider de Tema Global
 * Este componente gerencia o sistema de temas da aplicação (claro/escuro),
 * integrando com Zustand store e aplicando classes CSS dinamicamente.
 * 
 * Funcionalidades:
 * - Integração com store Zustand para estado global do tema
 * - Aplicação automática de classes CSS (dark mode)
 * - Prevenção de hidration mismatch com estado mounted
 * - Sincronização com preferências do usuário
 */
'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/core/store/theme.store';

export function ThemeProvider({ children }: { children: React.ReactNode; }) {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    // Aplica ou remove a classe 'dark' no elemento root conforme o tema
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Evita renderização durante hydration para prevenir mismatch
  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}