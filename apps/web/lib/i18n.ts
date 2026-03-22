import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  isSupportedLocale,
  type SiteLocale,
} from '@/lib/routing'

export { DEFAULT_LOCALE, SUPPORTED_LOCALES, isSupportedLocale }
export type { SiteLocale }

export const LOCALE_COOKIE = 'meridian-locale'

export function getDirection(locale: SiteLocale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}
