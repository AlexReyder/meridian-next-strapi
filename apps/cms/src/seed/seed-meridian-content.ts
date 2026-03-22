import type { Core } from '@strapi/strapi'
import { MERIDIAN_SEED } from './meridian-seed-data'

const SUPPORTED_LOCALES = ['ru', 'en', 'ar'] as const

type SeedLocale = (typeof SUPPORTED_LOCALES)[number]
type PageSlug = keyof typeof MERIDIAN_SEED.pages

type DocumentRef = {
  documentId: string
}

function isSeedLocale(value: string): value is SeedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

async function ensureGlobalBase(strapi: Core.Strapi, overwrite: boolean): Promise<DocumentRef> {
  const service = strapi.documents('api::global.global')
  const existing = await service.findFirst({
    locale: 'ru',
    fields: ['documentId'],
  } as any)

  if (existing?.documentId) {
    if (overwrite) {
      await service.update({
        documentId: existing.documentId,
        locale: 'ru',
        data: MERIDIAN_SEED.global.ru,
      } as any)
      strapi.log.info('[seed] updated global settings for ru')
    } else {
      strapi.log.info('[seed] skipped global settings for ru (already exists)')
    }

    return { documentId: existing.documentId }
  }

  const created = await service.create({
    locale: 'ru',
    data: MERIDIAN_SEED.global.ru,
  } as any)

  strapi.log.info('[seed] created global settings for ru')
  return { documentId: created.documentId }
}

async function upsertGlobalLocale(strapi: Core.Strapi, documentId: string, locale: SeedLocale, overwrite: boolean) {
  if (locale === 'ru') return

  const service = strapi.documents('api::global.global')
  const existing = await service.findFirst({
    locale,
    fields: ['documentId', 'siteName'],
  } as any)

  if (existing && !overwrite) {
    strapi.log.info(`[seed] skipped global settings for ${locale} (already exists)`)
    return
  }

  try {
    await service.update({
      documentId,
      locale,
      data: MERIDIAN_SEED.global[locale],
    } as any)
    strapi.log.info(`[seed] upserted global settings for ${locale}`)
  } catch (error) {
    strapi.log.warn(`[seed] update fallback for global ${locale}: ${(error as Error).message}`)
    await service.create({
      locale,
      data: MERIDIAN_SEED.global[locale],
    } as any)
    strapi.log.info(`[seed] created standalone global settings for ${locale}`)
  }
}

async function ensurePageBase(strapi: Core.Strapi, slug: PageSlug, overwrite: boolean): Promise<DocumentRef> {
  const service = strapi.documents('api::page.page')
  const seed = MERIDIAN_SEED.pages[slug].ru

  const existing = await service.findFirst({
    locale: 'ru',
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: ['documentId', 'slug'],
  } as any)

  if (existing?.documentId) {
    if (overwrite) {
      await service.update({
        documentId: existing.documentId,
        locale: 'ru',
        data: seed,
      } as any)
      strapi.log.info(`[seed] updated page ${slug} for ru`)
    } else {
      strapi.log.info(`[seed] skipped page ${slug} for ru (already exists)`)
    }

    return { documentId: existing.documentId }
  }

  const created = await service.create({
    locale: 'ru',
    data: seed,
  } as any)

  strapi.log.info(`[seed] created page ${slug} for ru`)
  return { documentId: created.documentId }
}

async function upsertPageLocale(
  strapi: Core.Strapi,
  slug: PageSlug,
  documentId: string,
  locale: SeedLocale,
  overwrite: boolean,
) {
  if (locale === 'ru') return

  const service = strapi.documents('api::page.page')
  const existing = await service.findFirst({
    locale,
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: ['documentId', 'slug'],
  } as any)

  if (existing && !overwrite) {
    strapi.log.info(`[seed] skipped page ${slug} for ${locale} (already exists)`)
    return
  }

  try {
    await service.update({
      documentId,
      locale,
      data: MERIDIAN_SEED.pages[slug][locale],
    } as any)
    strapi.log.info(`[seed] upserted page ${slug} for ${locale}`)
  } catch (error) {
    strapi.log.warn(`[seed] update fallback for ${slug}/${locale}: ${(error as Error).message}`)
    await service.create({
      locale,
      data: MERIDIAN_SEED.pages[slug][locale],
    } as any)
    strapi.log.info(`[seed] created standalone page ${slug} for ${locale}`)
  }
}

export async function seedMeridianContent(strapi: Core.Strapi) {
  const overwrite = process.env.CMS_SEED_OVERWRITE === 'true'
  const locales = (process.env.CMS_SEED_LOCALES || 'ru,en,ar')
    .split(',')
    .map((value) => value.trim())
    .filter(isSeedLocale)

  const globalBase = await ensureGlobalBase(strapi, overwrite)
  for (const locale of locales) {
    await upsertGlobalLocale(strapi, globalBase.documentId, locale, overwrite)
  }

  for (const slug of Object.keys(MERIDIAN_SEED.pages) as PageSlug[]) {
    const pageBase = await ensurePageBase(strapi, slug, overwrite)
    for (const locale of locales) {
      await upsertPageLocale(strapi, slug, pageBase.documentId, locale, overwrite)
    }
  }
}
