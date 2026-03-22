import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

import { LocaleFooter } from '@/components/layout/locale-footer'
import { LocaleHeader } from '@/components/layout/locale-header'
import { getDirection, isSupportedLocale, type SiteLocale } from '@/lib/i18n'
import { localeAlternates } from '@/lib/routing'
import { getGlobalSettings } from '@/lib/strapi'

import '../globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!isSupportedLocale(locale)) {
    return {}
  }

  const global = await getGlobalSettings(locale)
  const seo = global.data.defaultSeo

  return {
    title: seo?.metaTitle || global.data.siteName,
    description: seo?.metaDescription || global.data.siteDescription,
    icons: {
      icon: global.data.favicon?.url || undefined,
    },
    alternates: {
      canonical: localeAlternates('home')[locale],
      languages: localeAlternates('home'),
    },
  }
}

export function generateStaticParams() {
  return ['ru', 'en', 'ar'].map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!isSupportedLocale(locale)) {
    notFound()
  }

  const settings = await getGlobalSettings(locale as SiteLocale)

  return (
    <html
      lang={locale}
      dir={getDirection(locale as SiteLocale)}
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <LocaleHeader
          locale={locale as SiteLocale}
          menuItems={settings.data.menuItems}
        />
        <main>{children}</main>
        <LocaleFooter
          locale={locale as SiteLocale}
          contactEmail={settings.data.contactEmail}
          menuItems={settings.data.menuItems}
          siteName={settings.data.siteName}
          siteDescription={settings.data.siteDescription}
        />
        <Analytics />
      </body>
    </html>
  )
}
