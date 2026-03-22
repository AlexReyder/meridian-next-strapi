import type { GlobalSettingsResponse, PageResponse, StrapiSingleResponse } from '@/types/strapi'
import { DEFAULT_LOCALE, type SiteLocale } from '@/lib/routing'

const STRAPI_URL = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_TOKEN

function createHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`
  }

  return headers
}

async function fetchFromStrapi<T>(path: string, next?: RequestInit['next']): Promise<T> {
  const response = await fetch(`${STRAPI_URL}${path}`, {
    headers: createHeaders(),
    next,
  })

  if (!response.ok) {
    throw new Error(`Strapi request failed: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

export async function getGlobalSettings(locale: SiteLocale = DEFAULT_LOCALE) {
  return fetchFromStrapi<StrapiSingleResponse<GlobalSettingsResponse>>(
    `/api/global?locale=${locale}&populate[favicon]=true&populate[menuItems]=true&populate[footerColumns][populate][items]=true&populate[footerLegalLinks]=true&populate[defaultSeo][populate][shareImage]=true`,
    {
      revalidate: 3600,
      tags: [`global:${locale}`],
    },
  )
}

export async function getPageBySlug(slug: string, locale: SiteLocale = DEFAULT_LOCALE) {
  const query = new URLSearchParams({
    locale,
    'filters[slug][$eq]': slug,
    'populate[seo][populate][shareImage]': 'true',
    'populate[blocks][on][page.hero][populate][primaryImage]': 'true',
    'populate[blocks][on][page.hero][populate][secondaryImage]': 'true',
    'populate[blocks][on][page.media-text][populate][image]': 'true',
    'populate[blocks][on][page.cards-grid][populate][items][populate][image]': 'true',
    'populate[blocks][on][page.video-section][populate][posterImage]': 'true',
    'populate[blocks][on][page.video-section][populate][highlights]': 'true',
    'populate[blocks][on][page.concept-nav][populate][items]': 'true',
    'populate[blocks][on][page.concept-section][populate][image]': 'true',
    'populate[blocks][on][page.concept-section][populate][details]': 'true',
  })

  return fetchFromStrapi<PageResponse>(`/api/pages?${query.toString()}`, {
    revalidate: 3600,
    tags: [`page:${locale}:${slug}`],
  })
}
