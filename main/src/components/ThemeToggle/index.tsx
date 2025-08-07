/**
 * Componente Toggle de Tema
 * Este componente fornece um botão para alternar entre temas claro e escuro,
 * conectado ao store global de temas.
 * 
 * Funcionalidades:
 * - Botão de alternância entre temas (light/dark)
 * - Integração com Zustand store
 * - Feedback visual do tema atual
 * - Acessibilidade com aria-label
 */
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