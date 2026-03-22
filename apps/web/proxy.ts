import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { LOCALE_COOKIE } from '@/lib/i18n'
import {
  DEFAULT_LOCALE,
  isSupportedLocale,
  parseLocalizedPathname,
  pagePath,
  resolveCanonicalSlug,
  SUPPORTED_LOCALES,
} from '@/lib/routing'

function detectLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value
  if (isSupportedLocale(cookieLocale)) {
    return cookieLocale
  }

  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) {
    return DEFAULT_LOCALE
  }

  const candidates = acceptLanguage
    .split(',')
    .map((item) => item.trim().split(';')[0]?.toLowerCase())
    .filter(Boolean) as string[]

  for (const candidate of candidates) {
    const base = candidate.split('-')[0]
    if (isSupportedLocale(base)) {
      return base
    }
  }

  return DEFAULT_LOCALE
}

function shouldBypass(pathname: string) {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/uploads') ||
    pathname === '/favicon.ico' ||
    pathname.includes('.')
  )
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (shouldBypass(pathname)) {
    return NextResponse.next()
  }

  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )

  if (!pathnameHasLocale) {
    const locale = detectLocale(request)
    const slug = resolveCanonicalSlug(pathname.replace(/^\/+/, '')) ?? 'home'
    const url = request.nextUrl.clone()
    url.pathname = pagePath(locale, slug)
    return NextResponse.redirect(url)
  }

  const { locale, slug, isLegacyAlias } = parseLocalizedPathname(pathname)

  if (isLegacyAlias) {
    const url = request.nextUrl.clone()
    url.pathname = pagePath(locale, slug)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
