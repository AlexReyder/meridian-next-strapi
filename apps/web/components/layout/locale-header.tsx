'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import { type SiteLocale } from '@/lib/i18n'
import { localizeHref, pagePath } from '@/lib/routing'
import type { MenuItem } from '@/types/strapi'
import { LanguageSwitcher } from '@/components/layout/language-switcher'

type LocaleHeaderProps = {
  locale: SiteLocale
  menuItems?: MenuItem[]
  siteName?: string
  siteTagline?: string
  ctaLabel?: string
  ctaHref?: string
}

const fallbackCtaLabel: Record<SiteLocale, string> = {
  ru: 'Получить предложение',
  en: 'Get proposal',
  ar: 'اطلب عرضًا',
}

const fallbackTagline = 'Product Architecture & Interface Studio'

export function LocaleHeader({
  locale,
  menuItems = [],
  siteName = 'Atelier Meridian',
  siteTagline = fallbackTagline,
  ctaLabel,
  ctaHref = '/get-proposal',
}: LocaleHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const localizedMenuItems = useMemo(
    () =>
      menuItems.map((item) => ({
        ...item,
        localizedHref: localizeHref(locale, item.href),
      })),
    [locale, menuItems],
  )

  const localizedCtaHref = localizeHref(locale, ctaHref)
  const ctaText = ctaLabel || fallbackCtaLabel[locale]

  const isActive = (href: string) => mounted && pathname === href

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={pagePath(locale, 'home')} className="flex items-center gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="w-[3px] h-2 bg-signature-cobalt rounded-full" />
                <div className="w-[3px] h-1.5 bg-signature-brass rounded-full" />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-lg font-medium tracking-tight text-foreground">
                  {siteName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {siteTagline}
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {localizedMenuItems.map((item) => (
              <Link
                key={`${item.id}-${item.href}`}
                href={item.localizedHref}
                target={item.openInNewTab ? '_blank' : undefined}
                rel={item.openInNewTab ? 'noreferrer' : undefined}
                className={`text-sm transition-colors duration-200 ${
                  isActive(item.localizedHref)
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher locale={locale} variant="header" />

            <Link
              href={localizedCtaHref}
              className={`hidden md:inline-flex items-center justify-center text-xs uppercase tracking-wider px-5 h-8 rounded-md font-medium transition-colors ${
                isActive(localizedCtaHref)
                  ? 'bg-accent/20 text-foreground border border-accent/40'
                  : 'bg-foreground text-background hover:bg-foreground/90'
              }`}
            >
              {ctaText}
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-6 space-y-4">
            {localizedMenuItems.map((item) => (
              <Link
                key={`${item.id}-${item.href}-mobile`}
                href={item.localizedHref}
                target={item.openInNewTab ? '_blank' : undefined}
                rel={item.openInNewTab ? 'noreferrer' : undefined}
                className={`block text-sm transition-colors ${
                  isActive(item.localizedHref)
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-border">
              <Link
                href={localizedCtaHref}
                className="flex w-full items-center justify-center bg-foreground text-background hover:bg-foreground/90 text-xs uppercase tracking-wider px-5 h-10 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
