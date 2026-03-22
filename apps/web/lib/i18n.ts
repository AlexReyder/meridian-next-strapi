export const SUPPORTED_LOCALES = ['ru', 'en', 'ar'] as const
export type SiteLocale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: SiteLocale = 'ru'
export const LOCALE_COOKIE = 'meridian-locale'

export function isSupportedLocale(value: string | undefined | null): value is SiteLocale {
  return Boolean(value && SUPPORTED_LOCALES.includes(value as SiteLocale))
}

export function getDirection(locale: SiteLocale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}

export function normalizeSlug(slug?: string[]): string {
  if (!slug || slug.length === 0) {
    return 'home'
  }

  return slug.join('/')
}
