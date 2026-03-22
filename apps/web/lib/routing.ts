export const SUPPORTED_LOCALES = ['ru', 'en', 'ar'] as const
export type SiteLocale = (typeof SUPPORTED_LOCALES)[number]
export const DEFAULT_LOCALE: SiteLocale = 'ru'

export const CANONICAL_PAGE_SLUGS = [
  'home',
  'solutions',
  'for-startups',
  'for-agencies',
  'pricing',
  'method',
  'concepts',
  'get-proposal',
] as const

export type CanonicalPageSlug = (typeof CANONICAL_PAGE_SLUGS)[number]

export const LOCALIZED_PREFIX: Record<SiteLocale, string> = {
  ru: '/ru',
  en: '/en',
  ar: '/ar',
}

export function isSupportedLocale(value: string): value is SiteLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

export function normalizeCanonicalSlug(value?: string | string[] | null): CanonicalPageSlug {
  const slug = Array.isArray(value) ? value.join('/') : value ?? 'home'
  if (!slug || slug === '/') return 'home'
  if ((CANONICAL_PAGE_SLUGS as readonly string[]).includes(slug)) return slug as CanonicalPageSlug
  return 'home'
}

export function pagePath(locale: SiteLocale, slug: CanonicalPageSlug | string = 'home') {
  const prefix = LOCALIZED_PREFIX[locale]
  if (!slug || slug === 'home' || slug === '/') return prefix
  return `${prefix}/${slug}`
}

export function switchLocalePath(currentLocale: SiteLocale, targetLocale: SiteLocale, slug?: string | string[] | null) {
  const canonicalSlug = normalizeCanonicalSlug(slug)
  if (currentLocale === targetLocale) return pagePath(targetLocale, canonicalSlug)
  return pagePath(targetLocale, canonicalSlug)
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === '/') return { locale: DEFAULT_LOCALE, slug: 'home' as CanonicalPageSlug }

  const parts = pathname.split('/').filter(Boolean)
  const maybeLocale = parts[0]
  const locale = isSupportedLocale(maybeLocale) ? maybeLocale : DEFAULT_LOCALE
  const slug = normalizeCanonicalSlug(parts.slice(isSupportedLocale(maybeLocale) ? 1 : 0).join('/'))

  return { locale, slug }
}
