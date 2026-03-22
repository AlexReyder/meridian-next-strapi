import Link from 'next/link'

import type { SiteLocale } from '@/lib/i18n'
import {
  localizeHref,
  switchLocalePath,
  SUPPORTED_LOCALES,
} from '@/lib/routing'
import type { MenuItem } from '@/types/strapi'

type LocaleFooterProps = {
  locale: SiteLocale
  contactEmail?: string
  menuItems?: MenuItem[]
  siteName?: string
  siteDescription?: string
}

export function LocaleFooter({
  locale,
  contactEmail,
  menuItems = [],
  siteName = 'Atelier Meridian',
  siteDescription,
}: LocaleFooterProps) {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
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

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Navigation
          </h3>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={`${item.id}-${item.href}`}>
                <Link
                  href={localizeHref(locale, item.href)}
                  className="text-sm text-foreground/90 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Language
          </h3>
          <div className="flex gap-3">
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
    </footer>
  )
}
