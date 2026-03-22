'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import { LOCALE_COOKIE, SUPPORTED_LOCALES, type SiteLocale } from '@/lib/i18n'
import type { MenuItem } from '@/types/strapi'

type LocaleHeaderProps = {
  locale: SiteLocale
  menuItems?: MenuItem[]
}

function localizedHref(locale: SiteLocale, href: string) {
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return href
  }

  const normalized = href === '/' ? '' : href
  return `/${locale}${normalized}`
}

export function LocaleHeader({ locale, menuItems = [] }: LocaleHeaderProps) {
  const pathname = usePathname()

  const switchLanguageHref = (targetLocale: SiteLocale) => {
    if (!pathname) return `/${targetLocale}`

    const parts = pathname.split('/').filter(Boolean)
    if (parts.length === 0) return `/${targetLocale}`

    parts[0] = targetLocale
    return `/${parts.join('/')}`
  }

  const handleLanguageClick = (value: SiteLocale) => {
    document.cookie = `${LOCALE_COOKIE}=${value}; path=/; max-age=31536000; samesite=lax`
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href={`/${locale}`} className="text-lg font-semibold tracking-wide">
          Atelier Meridian
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {menuItems.map((item) => {
            const href = localizedHref(locale, item.href)
            const isActive = pathname === href

            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={href}
                className={isActive ? 'text-foreground' : 'text-muted-foreground transition hover:text-foreground'}
                target={item.openInNewTab ? '_blank' : undefined}
                rel={item.openInNewTab ? 'noreferrer' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Globe className="size-4 text-muted-foreground" />
          {SUPPORTED_LOCALES.map((item) => (
            <Link
              key={item}
              href={switchLanguageHref(item)}
              onClick={() => handleLanguageClick(item)}
              className={item === locale ? 'text-foreground' : 'text-muted-foreground'}
            >
              {item.toUpperCase()}
            </Link>
          ))}
          <Button asChild>
            <Link href={`/${locale}/get-proposal`}>Get proposal</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
