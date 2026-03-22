# Phase 3 — home page seed + localized global settings

This patch focuses on the first real content workflow:

1. localized `Global` settings in Strapi,
2. automated seed for the `home` page,
3. boot-time content seeding for `ru`, `en`, `ar`.

## What changes

### Global settings

`global` becomes localized and now includes:
- `siteName`
- `siteDescription`
- `contactEmail`
- `menuItems`
- `defaultSeo`
- `favicon`

### Seeded content

When boot seeding is enabled, Strapi creates or updates:
- `global` for `ru`, `en`, `ar`
- `page` with `slug = home` for `ru`, `en`, `ar`

For `en` and `ar`, the script keeps locale-specific global settings and SEO, but reuses the Russian block list until real translations are entered.

## How to run

1. Make sure locales `ru`, `en`, and `ar` are added in the Strapi admin panel.
2. Set the default locale to `ru`.
3. Start Strapi with these environment variables:

```bash
CMS_SEED_ON_BOOT=true
CMS_SEED_OVERWRITE=false
CMS_SEED_LOCALES=ru,en,ar
```

If you want to refresh existing seeded content, set:

```bash
CMS_SEED_OVERWRITE=true
```

## Notes

- Seeding runs inside Strapi `bootstrap()`.
- It is safe to keep `CMS_SEED_ON_BOOT=false` in normal development after the initial seed.
- Once the customer sends the final translations, update the localized entries in Strapi directly.
Хорошо, тогда давай перейдем к главной странице home и начнем работать с ней. Будем поэтапно переносить компоненты. Нам необходимо сохранить верстку и стили. Также настроить максимальное редактирование контента. Важно учитывать RTL для AR. Можно взять верстку из ar папки в отправленном мною архиве. Начнем с Hero компонента.