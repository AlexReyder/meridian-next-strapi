import Link from 'next/link'

import type { SiteLocale } from '@/lib/i18n'
import {
  localizeHref,
  switchLocalePath,
  SUPPORTED_LOCALES,
} from '@/lib/routing'
import type { FooterColumn, MenuItem } from '@/types/strapi'

type LocaleFooterProps = {
  locale: SiteLocale
  contactEmail?: string
  menuItems?: MenuItem[]
  footerColumns?: FooterColumn[]
  footerLegalLinks?: MenuItem[]
  footerCopyright?: string
  siteName?: string
  siteDescription?: string
}

export function LocaleFooter({
  locale,
  contactEmail,
  menuItems = [],
  footerColumns = [],
  footerLegalLinks = [],
  footerCopyright,
  siteName = 'Atelier Meridian',
  siteDescription,
}: LocaleFooterProps) {
  const columns = footerColumns.length
    ? footerColumns
    : [
        {
          id: 0,
          title: locale === 'ar' ? 'التنقل' : locale === 'en' ? 'Navigation' : 'Навигация',
          items: menuItems,
        },
      ]

  const languageTitle =
    locale === 'ar' ? 'اللغة' : locale === 'en' ? 'Language' : 'Язык'

  const copyrightText =
    footerCopyright ||
    (locale === 'ar'
      ? '© 2026 Atelier Meridian. جميع الحقوق محفوظة.'
      : locale === 'en'
        ? '© 2026 Atelier Meridian. All rights reserved.'
        : '© 2026 Atelier Meridian. Все права защищены.')

  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr_1fr]">
          <div className="space-y-4">
            <div>
              <p className="font-serif text-2xl">{siteName}</p>
              {siteDescription ? (
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  {siteDescription}
                </p>
              ) : null}
            </div>

            {contactEmail ? (
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm text-foreground underline-offset-4 hover:underline"
              >
                {contactEmail}
              </a>
            ) : null}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {columns.map((column, columnIndex) => (
              <div key={`${column.id ?? columnIndex}-${column.title}`}>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {(column.items ?? []).map((item) => (
                    <li key={`${item.id}-${item.href}`}>
                      <Link
                        href={localizeHref(locale, item.href)}
                        className="text-sm text-foreground/90 hover:text-foreground"
                        target={item.openInNewTab ? '_blank' : undefined}
                        rel={item.openInNewTab ? 'noreferrer' : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {languageTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              {SUPPORTED_LOCALES.map((targetLocale) => (
                <Link
                  key={targetLocale}
                  href={switchLocalePath(targetLocale, `/${locale}`)}
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                    targetLocale === locale
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border/60 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {targetLocale}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {footerLegalLinks.length > 0 || copyrightText ? (
          <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>{copyrightText}</p>

            {footerLegalLinks.length > 0 ? (
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {footerLegalLinks.map((item) => (
                  <Link
                    key={`${item.id}-${item.href}`}
                    href={localizeHref(locale, item.href)}
                    className="hover:text-foreground"
                    target={item.openInNewTab ? '_blank' : undefined}
                    rel={item.openInNewTab ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </footer>
  )
}
