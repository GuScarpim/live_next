/**
 * Layout de Locale (Internacionalização)
 * Este layout é responsável por configurar a internacionalização para cada locale
 * suportado pela aplicação (pt, en, es).
 * 
 * Funcionalidades:
 * - Validação de locale suportado
 * - Configuração do NextIntlClientProvider para tradução
 * - Redirecionamento para 404 se locale não for válido
 * - Integração com sistema de roteamento internacional
 */
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; }>; // Parâmetro de locale da URL
}) {
  const { locale } = await params;
  
  // Verifica se o locale é válido, senão redireciona para 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>{children}</NextIntlClientProvider>
  );
}