import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const res = intlMiddleware(req);

  const token = req.cookies.get('token')?.value;
  const isAuthPage = req.nextUrl.pathname.includes('/login');
  if (!token && !isAuthPage) {
    const pathname = req.nextUrl.pathname;
    const locale = routing.locales.find((loc) =>
      pathname.startsWith(`/${loc}`)
    ) || routing.defaultLocale;

    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  return res;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
