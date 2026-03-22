# HeroHome patch

Этот patch делает `HeroHome` самостоятельным CMS-компонентом без зависимости от legacy `@/components/hero`.

## Что входит
- `apps/cms/src/components/page/hero-home.json` — расширенная Strapi schema для HeroHome.
- `apps/web/components/cms/blocks/hero-home-block.tsx` — самостоятельный рендер HeroHome с сохранением текущей верстки и поддержкой RTL для Arabic.

## Что уже должно быть в проекте
- `types/strapi.ts` с типом `HeroHomeBlock`.
- seed `HOME_PAGE_SECTIONS_SEED` с полями HeroHome.
- `BlockRenderer` с кейсом `page.hero-home`.

## После применения
1. Перезапустите Strapi.
2. Если нужно обновить структуру в админке — пересоберите CMS.
3. Проверьте Home на `/ru`, `/en`, `/ar`.
