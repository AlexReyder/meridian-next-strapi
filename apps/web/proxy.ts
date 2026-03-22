import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DEFAULT_LOCALE, isSupportedLocale, LOCALE_COOKIE, SUPPORTED_LOCALES } from '@/lib/i18n'

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

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next()
  }

  const pathnameHasLocale = SUPPORTED_LOCALES.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  const locale = detectLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
