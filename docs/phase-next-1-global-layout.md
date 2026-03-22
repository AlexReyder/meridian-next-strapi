# Phase Next-1 — Header / Footer / Global Settings

## Что меняется
Эта фаза не меняет верстку и используемые стили `Header` / `Footer`.
Меняется только источник данных: вместо hardcoded массивов данные берутся из `Global` в Strapi.

## Что нужно сделать в Strapi
После применения patch откройте `Global` и заполните:
- `siteName`
- `siteTagline`
- `siteDescription`
- `contactEmail`
- `menuItems`
- `headerCtaLabel`
- `headerCtaHref`
- `footerColumns`
- `footerLegalLinks`
- `footerCopyright`
- `defaultSeo`
- `favicon`

## Что уже поддерживается
- Header menu из Strapi
- Footer columns из Strapi
- Footer legal links из Strapi
- Language switcher для `/ru /en /ar`
- Favicon и default SEO из Strapi

## Поведение по умолчанию
Если `footerColumns`, `footerLegalLinks`, `siteTagline`, `headerCtaLabel` или `footerCopyright`
не заполнены, frontend использует безопасные fallback-значения и продолжает работать.

## После применения patch
1. Перезапустите Strapi.
2. Убедитесь, что новый компонент `navigation.footer-column` появился.
3. Заполните `Global` хотя бы для `ru`.
4. Проверьте `/ru`, `/en`, `/ar`.
