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

type FooterLink = {
  label: string
  href: string
}

type FooterColumn = {
  title: string
  links: FooterLink[]
}

const FOOTER_COPY: Record<
  SiteLocale,
  {
    tagline: string
    languageTitle: string
    copyright: string
    privacy: string
    terms: string
    columnTitles: {
      solutions: string
      formats: string
      studio: string
    }
    labels: {
      solutions: string
      startups: string
      agencies: string
      concepts: string
      pricing: string
      method: string
      proposal: string
      framing: string
      prototype: string
      partnerDesk: string
    }
    languages: Record<SiteLocale, string>
  }
> = {
  ru: {
    tagline: 'Product Architecture & Interface Studio',
    languageTitle: 'Язык',
    copyright: '© 2026 Atelier Meridian. Все права защищены.',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    columnTitles: {
      solutions: 'Решения',
      formats: 'Форматы',
      studio: 'Студия',
    },
    labels: {
      solutions: 'Все решения',
      startups: 'Для стартапов',
      agencies: 'Для партнёров',
      concepts: 'Концепты студии',
      pricing: 'Цены',
      method: 'Как мы работаем',
      proposal: 'Получить предложение',
      framing: 'Product Framing Sprint',
      prototype: 'Build-Ready Prototype',
      partnerDesk: 'Partner Desk',
    },
    languages: {
      ru: 'Русский',
      en: 'English',
      ar: 'العربية',
    },
  },
  en: {
    tagline: 'Product Architecture & Interface Studio',
    languageTitle: 'Language',
    copyright: '© 2026 Atelier Meridian. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    columnTitles: {
      solutions: 'Solutions',
      formats: 'Formats',
      studio: 'Studio',
    },
    labels: {
      solutions: 'All solutions',
      startups: 'For Startups',
      agencies: 'For Partners',
      concepts: 'Studio Concepts',
      pricing: 'Pricing',
      method: 'How We Work',
      proposal: 'Get Proposal',
      framing: 'Product Framing Sprint',
      prototype: 'Build-Ready Prototype',
      partnerDesk: 'Partner Desk',
    },
    languages: {
      ru: 'Русский',
      en: 'English',
      ar: 'العربية',
    },
  },
  ar: {
    tagline: 'استوديو هندسة المنتجات والواجهات',
    languageTitle: 'اللغة',
    copyright: '© 2026 Atelier Meridian. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    columnTitles: {
      solutions: 'الحلول',
      formats: 'الصيغ',
      studio: 'الاستوديو',
    },
    labels: {
      solutions: 'جميع الحلول',
      startups: 'للشركات الناشئة',
      agencies: 'للشركاء',
      concepts: 'مفاهيم الاستوديو',
      pricing: 'الأسعار',
      method: 'كيف نعمل',
      proposal: 'اطلب عرضاً',
      framing: 'Product Framing Sprint',
      prototype: 'Build-Ready Prototype',
      partnerDesk: 'Partner Desk',
    },
    languages: {
      ru: 'Русский',
      en: 'English',
      ar: 'العربية',
    },
  },
}

function getFooterColumns(locale: SiteLocale): FooterColumn[] {
  const t = FOOTER_COPY[locale]

  return [
    {
      title: t.columnTitles.solutions,
      links: [
        { label: t.labels.solutions, href: '/solutions' },
        { label: t.labels.startups, href: '/for-startups' },
        { label: t.labels.agencies, href: '/for-agencies' },
        { label: t.labels.concepts, href: '/concepts' },
      ],
    },
    {
      title: t.columnTitles.formats,
      links: [
        { label: t.labels.framing, href: '/pricing#framing' },
        { label: t.labels.prototype, href: '/pricing#prototype' },
        { label: t.labels.partnerDesk, href: '/pricing#partner' },
      ],
    },
    {
      title: t.columnTitles.studio,
      links: [
        { label: t.labels.method, href: '/method' },
        { label: t.labels.pricing, href: '/pricing' },
        { label: t.labels.proposal, href: '/get-proposal' },
      ],
    },
  ]
}

export function LocaleFooter({
  locale,
  contactEmail,
  menuItems = [],
  siteName = 'Atelier Meridian',
  siteDescription,
}: LocaleFooterProps) {
  const copy = FOOTER_COPY[locale]
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const homeHref = locale === 'ru' ? '/ru' : `/${locale}`
  const description = siteDescription
  const footerColumns = getFooterColumns(locale)

  return (
    <footer className="bg-foreground text-background" dir={dir}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Link href={homeHref} className="mb-6 inline-flex items-center gap-3">
                <div className="flex flex-col gap-0.5">
                  <div className="h-2 w-[3px] rounded-full bg-signature-cobalt-soft" />
                  <div className="h-1.5 w-[3px] rounded-full bg-signature-brass-soft" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-medium tracking-tight text-background">
                    {siteName}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-background/50">
                    {copy.tagline}
                  </span>
                </div>
              </Link>

              {description ? (
                <p className="max-w-sm text-sm leading-relaxed text-background/60">
                  {description}
                </p>
              ) : null}

              {contactEmail ? (
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-6 inline-block text-sm text-background/80 transition-colors hover:text-background"
                >
                  {contactEmail}
                </a>
              ) : null}
            </div>

            <div className="lg:col-span-6 lg:col-start-6">
              <div className="grid gap-8 sm:grid-cols-3">
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    <h4 className="mb-4 text-xs uppercase tracking-[0.15em] text-background/50">
                      {column.title}
                    </h4>
                    <ul className="space-y-3">
                      {column.links.map((link) => (
                        <li key={`${column.title}-${link.href}`}>
                          <Link
                            href={localizeHref(locale, link.href)}
                            className="text-sm text-background/70 transition-colors hover:text-background"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="mb-4 text-xs uppercase tracking-[0.15em] text-background/50">
                {copy.languageTitle}
              </h4>
              <div className="space-y-2">
                {SUPPORTED_LOCALES.map((targetLocale) => (
                  <Link
                    key={targetLocale}
                    href={switchLocalePath(targetLocale, homeHref)}
                    className={`block text-sm transition-colors ${
                      targetLocale === locale
                        ? 'text-background'
                        : 'text-background/50 hover:text-background/80'
                    }`}
                  >
                    {copy.languages[targetLocale]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-8">
          <div className="absolute left-0 right-0 top-0 flex items-center">
            <div className="h-[1px] flex-1 bg-background/10" />
            <div className="mx-1 h-[2px] w-3 rounded-full bg-signature-cobalt-soft/60" />
            <div className="h-[2px] w-2 rounded-full bg-signature-brass-soft/60" />
            <div className="h-[1px] flex-1 bg-background/10" />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-background/40">{copy.copyright}</p>
            <div className="flex gap-6">
              <Link
                href={localizeHref(locale, '/privacy-policy')}
                className="text-xs text-background/40 transition-colors hover:text-background/60"
              >
                {copy.privacy}
              </Link>
              <Link
                href={localizeHref(locale, '/terms-of-use')}
                className="text-xs text-background/40 transition-colors hover:text-background/60"
              >
                {copy.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
