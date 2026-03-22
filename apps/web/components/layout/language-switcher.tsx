'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'

import { LOCALE_COOKIE, type SiteLocale } from '@/lib/i18n'
import { SUPPORTED_LOCALES, switchLocalePath } from '@/lib/routing'

type LanguageSwitcherProps = {
  locale: SiteLocale
  variant?: 'header' | 'footer'
  labelClassName?: string
}

export function LanguageSwitcher({
  locale,
  variant = 'header',
  labelClassName,
}: LanguageSwitcherProps) {
  const pathname = usePathname()

  const handleLanguageClick = (value: SiteLocale) => {
    document.cookie = `${LOCALE_COOKIE}=${value}; path=/; max-age=31536000; samesite=lax`
  }

  if (variant === 'footer') {
    return (
      <div className="space-y-2">
        {SUPPORTED_LOCALES.map((targetLocale) => {
          const isActive = targetLocale === locale

          return (
            <Link
              key={targetLocale}
              href={switchLocalePath(targetLocale, pathname)}
              onClick={() => handleLanguageClick(targetLocale)}
              className={`block text-sm transition-colors ${
                isActive
                  ? 'text-background'
                  : 'text-background/50 hover:text-background/80'
              }`}
            >
              {languageLabel(targetLocale)}
            </Link>
          )
        })}
      </div>
    )
  }

  return (
    <div className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground">
      <Globe className="h-3.5 w-3.5" />
      <div className="flex items-center gap-2">
        {SUPPORTED_LOCALES.map((targetLocale) => {
          const isActive = targetLocale === locale

          return (
            <Link
              key={targetLocale}
              href={switchLocalePath(targetLocale, pathname)}
              onClick={() => handleLanguageClick(targetLocale)}
              className={
                labelClassName ??
                `transition-colors ${isActive ? 'text-foreground' : 'hover:text-foreground'}`
              }
            >
              {targetLocale.toUpperCase()}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function languageLabel(locale: SiteLocale) {
  switch (locale) {
    case 'ru':
      return 'Русский'
    case 'en':
      return 'English'
    case 'ar':
      return 'العربية'
  }
}
