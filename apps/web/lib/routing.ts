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

const LEGACY_SLUG_ALIASES: Record<string, CanonicalPageSlug> = {
  'for-partners': 'for-agencies',
  'how-we-work': 'method',
}

export function isSupportedLocale(value: string | undefined | null): value is SiteLocale {
  return Boolean(value && (SUPPORTED_LOCALES as readonly string[]).includes(value))
}

export function isCanonicalPageSlug(value: string | undefined | null): value is CanonicalPageSlug {
  return Boolean(value && (CANONICAL_PAGE_SLUGS as readonly string[]).includes(value))
}

export function resolveCanonicalSlug(
  value?: string | string[] | null,
): CanonicalPageSlug | null {
  if (Array.isArray(value)) {
    if (value.length === 0) return 'home'
    return resolveCanonicalSlug(value.join('/'))
  }

  if (!value || value === '/' || value === 'home') {
    return 'home'
  }

  const normalized = value.replace(/^\/+|\/+$/g, '')

  if (isCanonicalPageSlug(normalized)) {
    return normalized
  }

  return LEGACY_SLUG_ALIASES[normalized] ?? null
}

export function pagePath(locale: SiteLocale, slug: CanonicalPageSlug = 'home') {
  if (slug === 'home') {
    return `/${locale}`
  }

  return `/${locale}/${slug}`
}

export function switchLocalePath(
  targetLocale: SiteLocale,
  pathname?: string | null,
) {
  const { slug } = parseLocalizedPathname(pathname ?? '/')
  return pagePath(targetLocale, slug)
}

export function parseLocalizedPathname(pathname: string): {
  locale: SiteLocale
  slug: CanonicalPageSlug
  isLegacyAlias: boolean
} {
  const parts = pathname.split('/').filter(Boolean)
  const firstPart = parts[0]
  const locale = isSupportedLocale(firstPart) ? firstPart : DEFAULT_LOCALE
  const slugParts = parts.slice(isSupportedLocale(firstPart) ? 1 : 0)
  const rawSlug = slugParts.join('/')

  if (!rawSlug) {
    return { locale, slug: 'home', isLegacyAlias: false }
  }

  if (isCanonicalPageSlug(rawSlug)) {
    return { locale, slug: rawSlug, isLegacyAlias: false }
  }

  const alias = LEGACY_SLUG_ALIASES[rawSlug]
  if (alias) {
    return { locale, slug: alias, isLegacyAlias: true }
  }

  return { locale, slug: 'home', isLegacyAlias: false }
}

export function normalizeRelativeHref(href: string): string {
  if (!href || href === '/') return 'home'
  return href.replace(/^\/+|\/+$/g, '')
}

export function localizeHref(locale: SiteLocale, href: string): string {
  if (!href) return pagePath(locale, 'home')

  if (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  ) {
    return href
  }

  const [pathnamePart, hashPart] = href.split('#')
  const canonicalSlug = resolveCanonicalSlug(normalizeRelativeHref(pathnamePart))
  const path = pagePath(locale, canonicalSlug ?? 'home')

  return hashPart ? `${path}#${hashPart}` : path
}

export function localeAlternates(
  slug: CanonicalPageSlug,
): Record<SiteLocale, string> {
  return {
    ru: pagePath('ru', slug),
    en: pagePath('en', slug),
    ar: pagePath('ar', slug),
  }
}
