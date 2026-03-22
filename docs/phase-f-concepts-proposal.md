# Phase F — Concepts + Get Proposal

Этот patch переносит в seed еще две страницы:

- `concepts`
- `get-proposal`

## Что входит

- `phase-f-pages-seed.ts` — seed-контент для `ru`, `en`, `ar`
- обновленный `seed-meridian-content.ts` — безопасный seed-layer с поддержкой `MERIDIAN_SEED`, `PHASE_E_PAGES` и `PHASE_F_PAGES`

## Что важно

### Concepts

`concepts` использует уже существующие block types:

- `page.hero`
- `page.rich-text`
- `page.concept-nav`
- `page.concept-section`
- `page.cards-grid`
- `page.video-section`
- `page.cta`

### Get Proposal

`get-proposal` в этом phase переносится как **CMS-driven intake page**, но пока без сложного wizard/upload flow из старого hardcoded frontend.

Используемые block types:

- `page.hero`
- `page.cards-grid`
- `page.steps`
- `page.form-section`
- `page.video-section`
- `page.faq`
- `page.cta`

Это дает уже рабочую CMS-driven страницу с:

- hero
- conversion paths
- project brief form
- trust section
- walkthrough
- faq
- final CTA

## Что остается на следующий этап

Следующий слой логично делать как отдельный phase:

1. заменить `form-section` на полноценный multi-step intake flow;
2. подключить реальную submit-логику;
3. upload -> S3;
4. email notification;
5. Arabic / RTL polish для proposal flow.

## Как запускать

```bash
CMS_SEED_ON_BOOT=true
CMS_SEED_OVERWRITE=false
CMS_SEED_LOCALES=ru,en,ar
```

Проверить после старта:

- `/ru/concepts`
- `/en/concepts`
- `/ar/concepts`
- `/ru/get-proposal`
- `/en/get-proposal`
- `/ar/get-proposal`
