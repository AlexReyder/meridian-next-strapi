import type { Core } from '@strapi/strapi'
import { MERIDIAN_SEED } from './meridian-seed-data'
import { HOME_PAGE_SECTIONS_SEED } from './home-page-sections-seed'
import { PHASE_E_PAGES } from './phase-e-pages-seed'
import { PHASE_F_PAGES } from './phase-f-pages-seed'

type SeedLocale = keyof typeof MERIDIAN_SEED.global
type AdditionalLocale = 'ru' | 'en' | 'ar'

type DocumentServiceResult<T> = T[] | { results?: T[] } | { data?: T[] }

function firstResult<T>(value: DocumentServiceResult<T> | null | undefined): T | undefined {
  if (!value) return undefined
  if (Array.isArray(value)) return value[0]
  if ('results' in value && Array.isArray(value.results)) return value.results[0]
  if ('data' in value && Array.isArray(value.data)) return value.data[0]
  return undefined
}

async function upsertGlobal(strapi: Core.Strapi, locale: SeedLocale, overwrite: boolean) {
  const service = strapi.documents('api::global.global')
  const existing = await service.findFirst({ locale, fields: ['documentId', 'siteName'] } as any)
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
  await service.update({ documentId: (existing as any).documentId, locale, data } as any)
  strapi.log.info(`[seed] updated global settings for ${locale}`)
}

async function upsertPage(strapi: Core.Strapi, locale: string, slug: string, data: Record<string, unknown>, overwrite: boolean) {
  const service = strapi.documents('api::page.page')
  const existingMany = await service.findMany({ locale, filters: { slug: { $eq: slug } }, fields: ['documentId', 'slug'], pageSize: 1 } as any)
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
  await service.update({ documentId: (existing as any).documentId, locale, data } as any)
  strapi.log.info(`[seed] updated page ${slug} for ${locale}`)
}

async function upsertHomePage(strapi: Core.Strapi, locale: SeedLocale, overwrite: boolean) {
  const base = MERIDIAN_SEED.pages.home.ru
  const localized = MERIDIAN_SEED.pages.home[locale]
  const blocks = HOME_PAGE_SECTIONS_SEED[locale] ?? HOME_PAGE_SECTIONS_SEED.ru
  const data = {
    ...base,
    ...localized,
    blocks,
  }
  await upsertPage(strapi, locale, 'home', data, overwrite)
}

async function upsertPhasePages(strapi: Core.Strapi, locale: AdditionalLocale, overwrite: boolean, pages: any[] = []) {
  for (const page of pages) {
    await upsertPage(strapi, locale, page.slug, page as any, overwrite)
  }
}

export async function seedMeridianContent(strapi: Core.Strapi) {
  const overwrite = process.env.CMS_SEED_OVERWRITE === 'true'
  const locales = (process.env.CMS_SEED_LOCALES || 'ru,en,ar').split(',').map((v) => v.trim()).filter(Boolean)

  for (const locale of locales) {
    if (locale in MERIDIAN_SEED.global) {
      await upsertGlobal(strapi, locale as SeedLocale, overwrite)
      await upsertHomePage(strapi, locale as SeedLocale, overwrite)
    }

    if (PHASE_E_PAGES?.[locale as AdditionalLocale]) {
      await upsertPhasePages(strapi, locale as AdditionalLocale, overwrite, PHASE_E_PAGES[locale as AdditionalLocale])
    }

    if (PHASE_F_PAGES?.[locale as AdditionalLocale]) {
      await upsertPhasePages(strapi, locale as AdditionalLocale, overwrite, PHASE_F_PAGES[locale as AdditionalLocale])
    }
  }
}
