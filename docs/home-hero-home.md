# Home → HeroHome

## Цель
Перенести hero главной страницы в отдельный page-specific Strapi component `HeroHome` без изменения верстки и стилей.

## Что меняется
- В Strapi появляется новый компонент `page.hero-home`.
- `Page.blocks` начинает поддерживать `page.hero-home`.
- В frontend добавляется `HeroHomeBlockView` с текущей версткой из `components/hero.tsx` и RTL-адаптацией из `components/ar/hero-ar.tsx`.
- Seed для `home` в `ru / en / ar` переводит первый блок с `page.hero` на `page.hero-home`.

## Поля HeroHome
- `eyebrow`
- `titleHtml`
- `description`
- `supportingText`
- `primaryCtaLabel`
- `primaryCtaHref`
- `secondaryCtaLabel`
- `secondaryCtaHref`
- `tags[]`
- `dashboardImageUrl`
- `dashboardImageAlt`
- `dashboardBadge`
- `mobileImageUrl`
- `mobileImageAlt`
- `mobileBadge`

## Почему `titleHtml`
Для home hero заголовок уже отличается по разметке между локалями:
- RU/EN используют блочную композицию со span и частичным выделением;
- AR использует другой ритм и single-line heading.

`titleHtml` позволяет сохранить текущую типографику и line breaks без переписывания стилей.

## Что проверить после применения
1. Перезапустить Strapi.
2. Один раз запустить seed с `CMS_SEED_OVERWRITE=true`.
3. Проверить `/ru`, `/en`, `/ar`.
4. Открыть `Page -> home` в Strapi и убедиться, что первый блок стал `HeroHome`.
