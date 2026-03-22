import type { Core } from '@strapi/strapi'
import { MERIDIAN_SEED } from './meridian-seed-data'
import { PHASE_E_PAGES } from './phase-e-pages-seed'
import { PHASE_F_PAGES } from './phase-f-pages-seed'

type SeedLocale = keyof typeof MERIDIAN_SEED.global

type AdditionalLocale = 'ru' | 'en' | 'ar'

type DocumentServiceResult<T> =
  | T[]
  | { results?: T[] }
  | { data?: T[] }

function firstResult<T>(value: DocumentServiceResult<T> | null | undefined): T | undefined {
  if (!value) return undefined
  if (Array.isArray(value)) return value[0]
  if ('results' in value && Array.isArray(value.results)) return value.results[0]
  if ('data' in value && Array.isArray(value.data)) return value.data[0]
  return undefined
}

async function upsertGlobal(strapi: Core.Strapi, locale: SeedLocale, overwrite: boolean) {
  const service = strapi.documents('api::global.global')
  const existing = await service.findFirst({
    locale,
    fields: ['documentId', 'siteName', 'siteDescription', 'contactEmail'],
  } as any)

  const data = MERIDIAN_SEED.global[locale]

  if (!existing) {
    await service.create({ locale, data } as any)
    strapi.log.info(`[seed] created global settings for ${locale}`)
    return
  }

  if (!overwrite) {
    strapi.log.info(`[seed] skipped global settings for ${locale} (already exists)`)
    return
  }

  await service.update({
    documentId: (existing as any).documentId,
    locale,
    data,
  } as any)

  strapi.log.info(`[seed] updated global settings for ${locale}`)
}

async function upsertPage(
  strapi: Core.Strapi,
  locale: string,
  slug: string,
  data: Record<string, unknown>,
  overwrite: boolean,
) {
  const service = strapi.documents('api::page.page')
  const existingMany = await service.findMany({
    locale,
    filters: { slug: { $eq: slug } },
    fields: ['documentId', 'slug'],
    pageSize: 1,
  } as any)

  const existing = firstResult(existingMany as any)

  if (!existing) {
    await service.create({ locale, data } as any)
    strapi.log.info(`[seed] created page ${slug} for ${locale}`)
    return
  }

  if (!overwrite) {
    strapi.log.info(`[seed] skipped page ${slug} for ${locale} (already exists)`)
    return
  }

  await service.update({
    documentId: (existing as any).documentId,
    locale,
    data,
  } as any)

  strapi.log.info(`[seed] updated page ${slug} for ${locale}`)
}

async function upsertHomePage(strapi: Core.Strapi, locale: SeedLocale, overwrite: boolean) {
  const base = MERIDIAN_SEED.pages.home.ru
  const localized = MERIDIAN_SEED.pages.home[locale]

  const data = {
    ...base,
    ...localized,
    blocks: localized.blocks.length > 0 ? localized.blocks : base.blocks,
  }

  await upsertPage(strapi, locale, 'home', data, overwrite)
}

async function upsertPhaseEPages(strapi: Core.Strapi, locale: AdditionalLocale, overwrite: boolean) {
  const pagesByLocale = PHASE_E_PAGES?.[locale] ?? []

  for (const page of pagesByLocale) {
    await upsertPage(strapi, locale, page.slug, page as any, overwrite)
  }
}

async function upsertPhaseFPages(strapi: Core.Strapi, locale: AdditionalLocale, overwrite: boolean) {
  const pagesByLocale = PHASE_F_PAGES?.[locale] ?? []

  for (const page of pagesByLocale) {
    await upsertPage(strapi, locale, page.slug, page as any, overwrite)
  }
}

export async function seedMeridianContent(strapi: Core.Strapi) {
  const overwrite = process.env.CMS_SEED_OVERWRITE === 'true'
  const locales = (process.env.CMS_SEED_LOCALES || 'ru,en,ar')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)

  const availablePhaseELocales = PHASE_E_PAGES ? Object.keys(PHASE_E_PAGES) : []
  const availablePhaseFLocales = PHASE_F_PAGES ? Object.keys(PHASE_F_PAGES) : []

  if (!PHASE_E_PAGES) {
    strapi.log.warn('[seed] PHASE_E_PAGES is undefined, phase E pages seeding will be skipped')
  }

  if (!PHASE_F_PAGES) {
    strapi.log.warn('[seed] PHASE_F_PAGES is undefined, phase F pages seeding will be skipped')
  }

  for (const locale of locales) {
    if (locale in MERIDIAN_SEED.global) {
      await upsertGlobal(strapi, locale as SeedLocale, overwrite)
      await upsertHomePage(strapi, locale as SeedLocale, overwrite)
    }

    if (availablePhaseELocales.includes(locale)) {
      await upsertPhaseEPages(strapi, locale as AdditionalLocale, overwrite)
    }

    if (availablePhaseFLocales.includes(locale)) {
      await upsertPhaseFPages(strapi, locale as AdditionalLocale, overwrite)
    }
  }
}
