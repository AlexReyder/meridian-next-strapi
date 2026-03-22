'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { LOCALE_COOKIE, type SiteLocale } from '@/lib/i18n'
import {
  localizeHref,
  switchLocalePath,
  SUPPORTED_LOCALES,
} from '@/lib/routing'
import type { MenuItem } from '@/types/strapi'

type LocaleHeaderProps = {
  locale: SiteLocale
  menuItems?: MenuItem[]
}

const proposalLabel: Record<SiteLocale, string> = {
  ru: 'Получить предложение',
  en: 'Get proposal',
  ar: 'اطلب عرضًا',
}

export function LocaleHeader({
  locale,
  menuItems = [],
}: LocaleHeaderProps) {
  const pathname = usePathname()

  const handleLanguageClick = (value: SiteLocale) => {
    document.cookie = `${LOCALE_COOKIE}=${value}; path=/; max-age=31536000; samesite=lax`
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href={`/${locale}`} className="flex flex-col">
          <span className="font-serif text-xl">Atelier Meridian</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Product Architecture & Interface Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {menuItems.map((item) => {
            const href = localizeHref(locale, item.href)
            const isActive = pathname === href

            return (
              <Link
                key={`${item.id}-${item.href}`}
                href={href}
                target={item.openInNewTab ? '_blank' : undefined}
                rel={item.openInNewTab ? 'noreferrer' : undefined}
                className={
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground transition-colors hover:text-foreground'
                }
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-border/60 px-2 py-1 sm:flex">
            {SUPPORTED_LOCALES.map((targetLocale) => (
              <Link
                key={targetLocale}
                href={switchLocalePath(targetLocale, pathname)}
                onClick={() => handleLanguageClick(targetLocale)}
                className={`rounded-full px-2 py-1 text-xs uppercase tracking-[0.2em] ${
                  targetLocale === locale
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {targetLocale}
              </Link>
            ))}
          </div>

          <Button asChild className="hidden sm:inline-flex">
            <Link href={localizeHref(locale, '/get-proposal')}>
              {proposalLabel[locale]}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
