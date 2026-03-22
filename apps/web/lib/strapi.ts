import type {
  GlobalSettingsResponse,
  PageResponse,
  StrapiSingleResponse,
} from '@/types/strapi'
import { DEFAULT_LOCALE, type SiteLocale } from '@/lib/routing'

const STRAPI_URL =
  process.env.STRAPI_URL ||
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  'http://localhost:1337'

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

async function fetchFromStrapi<T>(
  path: string,
  next?: RequestInit['next'],
): Promise<T> {
  const response = await fetch(`${STRAPI_URL}${path}`, {
    headers: createHeaders(),
    next,
  })

  if (!response.ok) {
    const body = await response.text().catch(() => '')
    throw new Error(
      `Strapi request failed: ${response.status} ${response.statusText}\nURL: ${STRAPI_URL}${path}\n${body}`,
    )
  }

  return response.json() as Promise<T>
}

export async function getGlobalSettings(
  locale: SiteLocale = DEFAULT_LOCALE,
) {
  const query = new URLSearchParams({
    locale,
    'populate[favicon]': 'true',
    'populate[menuItems]': 'true',
    'populate[footerColumns][populate][items]': 'true',
    'populate[footerLegalLinks]': 'true',
    'populate[defaultSeo][populate][shareImage]': 'true',
  })

  return fetchFromStrapi<StrapiSingleResponse<GlobalSettingsResponse>>(
    `/api/global?${query.toString()}`,
    {
      revalidate: 0,
      tags: [`global:${locale}`],
    },
  )
}

export async function getPageBySlug(
  slug: string,
  locale: SiteLocale = DEFAULT_LOCALE,
) {
  const query = new URLSearchParams({
    locale,
    'filters[slug][$eq]': slug,
    'populate[seo][populate][shareImage]': 'true',

    // Generic blocks
    'populate[blocks][on][page.hero][populate][primaryImage]': 'true',
    'populate[blocks][on][page.hero][populate][secondaryImage]': 'true',
    'populate[blocks][on][page.media-text][populate][image]': 'true',
    'populate[blocks][on][page.cards-grid][populate][items][populate][image]':
      'true',
    'populate[blocks][on][page.video-section][populate][posterImage]': 'true',
    'populate[blocks][on][page.video-section][populate][highlights]': 'true',
    'populate[blocks][on][page.concept-nav][populate][items]': 'true',
    'populate[blocks][on][page.concept-section][populate][image]': 'true',
    'populate[blocks][on][page.concept-section][populate][details]': 'true',
    'populate[blocks][on][page.faq][populate][items]': 'true',
    'populate[blocks][on][page.steps][populate][items]': 'true',
    'populate[blocks][on][page.statements-strip][populate][items]': 'true',

    // Home-specific blocks
    'populate[blocks][on][page.hero-home]': 'true',
    'populate[blocks][on][page.value-home]': 'true',
    'populate[blocks][on][page.deliverables-home]': 'true',
    'populate[blocks][on][page.why-home]': 'true',
    'populate[blocks][on][page.audience-home]': 'true',
    'populate[blocks][on][page.concepts-home]': 'true',
    'populate[blocks][on][page.method-home]': 'true',
    'populate[blocks][on][page.pricing-home]': 'true',
    'populate[blocks][on][page.proposal-home]': 'true',
    'populate[blocks][on][page.sample-preview-home]': 'true',
    'populate[blocks][on][page.trust-home]': 'true',
    'populate[blocks][on][page.faq-home]': 'true',
    'populate[blocks][on][page.final-cta-home]': 'true',
  })

  return fetchFromStrapi<PageResponse>(
    `/api/pages?${query.toString()}`,
    {
      revalidate: 0,
      tags: [`page:${locale}:${slug}`],
    },
  )
}