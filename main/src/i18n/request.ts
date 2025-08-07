import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  let messages = {};

  messages = {
    ...(await import(`../messages/${locale}/login.json`)).default,
    ...(await import(`../messages/${locale}/error.json`)).default,
  };

  return {
    locale,
    messages: messages
  };
});