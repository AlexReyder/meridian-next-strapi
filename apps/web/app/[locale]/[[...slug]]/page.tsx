import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlockRenderer } from '@/components/cms/block-renderer'
import { isSupportedLocale, type SiteLocale } from '@/lib/i18n'
import { localeAlternates, resolveCanonicalSlug } from '@/lib/routing'
import { extractPage } from '@/lib/normalize-page'
import { getPageBySlug } from '@/lib/strapi'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>
}): Promise<Metadata> {
  const { locale, slug } = await params

  if (!isSupportedLocale(locale)) {
    return {}
  }

  const canonicalSlug = resolveCanonicalSlug(slug)
  if (!canonicalSlug) {
    return {}
  }

  const response = await getPageBySlug(canonicalSlug, locale as SiteLocale)
  const page = extractPage(response)

  if (!page) {
    return {}
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
    openGraph: page.seo?.shareImage?.url
      ? {
          images: [{ url: page.seo.shareImage.url }],
        }
      : undefined,
    alternates: {
      canonical: localeAlternates(canonicalSlug)[locale as SiteLocale],
      languages: localeAlternates(canonicalSlug),
    },
  }
}

export default async function CmsPageRoute({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>
}) {
  const { locale, slug } = await params

  if (!isSupportedLocale(locale)) {
    notFound()
  }

  const canonicalSlug = resolveCanonicalSlug(slug)
  if (!canonicalSlug) {
    notFound()
  }

  const response = await getPageBySlug(canonicalSlug, locale as SiteLocale)
  const page = extractPage(response)

  if (!page) {
    notFound()
  }

  return (
    <BlockRenderer
      blocks={page.blocks}
      locale={locale as SiteLocale}
      pageTitle={page.title}
      pageSlug={page.slug}
    />
  )
}
