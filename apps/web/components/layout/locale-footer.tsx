import Link from 'next/link'
import type { MenuItem } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'

type LocaleFooterProps = {
  locale: SiteLocale
  contactEmail?: string
  menuItems?: MenuItem[]
  siteName?: string
  siteDescription?: string
}

function localizedHref(locale: SiteLocale, href: string) {
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return href
  }

  const normalized = href === '/' ? '' : href
  return `/${locale}${normalized}`
}

export function LocaleFooter({
  locale,
  contactEmail,
  menuItems = [],
  siteName = 'Atelier Meridian',
  siteDescription,
}: LocaleFooterProps) {
  return (
    <footer className="border-t border-black/5 bg-muted/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <div className="text-xl font-semibold">{siteName}</div>
          {siteDescription ? <p className="max-w-xl text-muted-foreground">{siteDescription}</p> : null}
          {contactEmail ? (
            <a href={`mailto:${contactEmail}`} className="inline-block text-sm underline underline-offset-4">
              {contactEmail}
            </a>
          ) : null}
        </div>

        <div className="grid gap-3 text-sm">
          {menuItems.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={localizedHref(locale, item.href)}
              target={item.openInNewTab ? '_blank' : undefined}
              rel={item.openInNewTab ? 'noreferrer' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
