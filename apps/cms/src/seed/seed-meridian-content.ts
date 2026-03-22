import type { Core } from '@strapi/strapi';
import { HOME_SEED } from './meridian-seed-data';

type SeedLocale = keyof typeof HOME_SEED;

type DocumentServiceResult<T> =
  | T[]
  | { results?: T[] }
  | { data?: T[] };

function firstResult<T>(value: DocumentServiceResult<T> | null | undefined): T | undefined {
  if (!value) return undefined;
  if (Array.isArray(value)) return value[0];
  if ('results' in value && Array.isArray(value.results)) return value.results[0];
  if ('data' in value && Array.isArray(value.data)) return value.data[0];
  return undefined;
}

async function upsertGlobal(strapi: Core.Strapi, locale: SeedLocale, overwrite: boolean) {
  const service = strapi.documents('api::global.global');

  const existing = await service.findFirst({
    locale,
    fields: ['documentId', 'siteName', 'siteDescription', 'contactEmail'],
  } as any);

  const data = HOME_SEED[locale].global;

  if (!existing) {
    await service.create({ locale, data } as any);
    strapi.log.info(`[seed] created global settings for ${locale}`);
    return;
  }

  if (!overwrite) {
    strapi.log.info(`[seed] skipped global settings for ${locale} (already exists)`);
    return;
  }

  await service.update({
    documentId: (existing as any).documentId,
    locale,
    data,
  } as any);
  strapi.log.info(`[seed] updated global settings for ${locale}`);
}

async function upsertHomePage(strapi: Core.Strapi, locale: SeedLocale, overwrite: boolean) {
  const service = strapi.documents('api::page.page');
  const base = HOME_SEED.ru.page;
  const localized = HOME_SEED[locale].page;

  const data = {
    ...base,
    ...localized,
    blocks: localized.blocks.length > 0 ? localized.blocks : base.blocks,
  };

  const existingMany = await service.findMany({
    locale,
    filters: { slug: { $eq: 'home' } },
    fields: ['documentId', 'slug'],
    pageSize: 1,
  } as any);

  const existing = firstResult(existingMany as any);

  if (!existing) {
    await service.create({ locale, data } as any);
    strapi.log.info(`[seed] created home page for ${locale}`);
    return;
  }

  if (!overwrite) {
    strapi.log.info(`[seed] skipped home page for ${locale} (already exists)`);
    return;
  }

  await service.update({
    documentId: (existing as any).documentId,
    locale,
    data,
  } as any);
  strapi.log.info(`[seed] updated home page for ${locale}`);
}

export async function seedMeridianContent(strapi: Core.Strapi) {
  const overwrite = process.env.CMS_SEED_OVERWRITE === 'true';
  const locales = (process.env.CMS_SEED_LOCALES || 'ru,en,ar')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean) as SeedLocale[];

  for (const locale of locales) {
    if (!(locale in HOME_SEED)) {
      strapi.log.warn(`[seed] unsupported seed locale: ${locale}`);
      continue;
    }

    await upsertGlobal(strapi, locale, overwrite);
    await upsertHomePage(strapi, locale, overwrite);
  }
}
