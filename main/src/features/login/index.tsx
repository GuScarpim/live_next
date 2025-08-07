/**
 * Feature de Login
 * Este componente implementa toda a funcionalidade de autenticação da aplicação,
 * incluindo formulário, validação e integração com APIs.
 * 
 * Funcionalidades:
 * - Formulário de login com validação React Hook Form
 * - Integração com sistema de themes
 * - Suporte completo à internacionalização
 * - Estados de loading durante autenticação
 * - Validação de formulário com Zod schemas
 * - Checkbox "Lembrar-me" para persistência de sessão
 */
'use client';

import { Button } from '@/components/ui/button';
import { useLogin } from './hooks/useLogin';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    errors,
    isLoading,
    handleLogin,
    setValue,
  } = useLogin();

  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full max-w-sm p-8 bg-card rounded-lg shadow-md border border-border"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-foreground">{t('title')}</h1>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            {t('email')}
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full px-3 py-2 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
            {t('password')}
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="w-full px-3 py-2 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
            disabled={isLoading}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register('rememberMe')}
              onChange={(e) => setValue('rememberMe', e.target.checked)}
              className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
              disabled={isLoading}
            />
            <span className="ml-2 text-sm text-muted-foreground">{t('rememberMe')}</span>
          </label>
        </div>

        <div className="flex items-center justify-center">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? t('loading') : t('submit')}
          </Button>
        </div>
      </form>
    </div>
  );
}