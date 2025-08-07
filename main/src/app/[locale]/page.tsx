/**
 * Página Principal do Micro Frontend (MFE)
 * Esta é a página inicial do micro frontend que demonstra funcionalidades
 * avançadas como internacionalização, themes dinâmicos e autenticação.
 * 
 * Funcionalidades:
 * - Internacionalização com next-intl (suporte a PT, EN, ES)
 * - Sistema de themes (claro/escuro) com Zustand
 * - Logout com integração de API
 * - Seletor de idioma dinâmico
 * - Roteamento baseado em locale
 */
'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useRouter, usePathname } from 'next/navigation';

export default function Home() {
  const t = useTranslations('');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Função para alternar idioma da aplicação
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const segments = pathname.split('/');
    segments[1] = newLocale; // Substitui o locale na URL
    const newPath = segments.join('/');
    router.push(newPath);
  };

  // Função para realizar logout do usuário
  const handleLogout = async () => {
    try {
      await fetch('/api/logout'); // Chama API de logout
      router.push('/login'); // Redireciona para página de login
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground p-6 space-y-4">
      <div className="flex justify-between items-center">
        <ThemeToggle />

        <select
          defaultValue={currentLocale}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="en">English</option>
          <option value="pt">Português</option>
          <option value="es">Español</option>
        </select>
      </div>

      <div>{t('hello')}</div>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </main>
  );
}
