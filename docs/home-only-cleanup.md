# Home-only cleanup patch

Этот patch делает две вещи:

1. переносит все Home-блоки в `apps/web/components/cms/blocks/home`
2. упрощает frontend и Strapi до режима **Home-only**

## Что поменяно

- `BlockRenderer` рендерит только `page.*-home`
- `types/strapi.ts` оставляет только Home-блоки и global types
- `lib/strapi.ts` запрашивает только Home-блоки из dynamic zone
- `Page` schema в Strapi оставляет только Home template и Home blocks
- `seed-meridian-content.ts` заполняет только `Global` и `home`

## Что сделать после копирования файлов

1. Запустить cleanup script:
   - bash: `./scripts/cleanup-home-only.sh`
   - powershell: `./scripts/cleanup-home-only.ps1`
2. Перезапустить Strapi
3. Перезапустить Next.js
4. Проверить:
   - `/ru`
   - `/en`
   - `/ar`

## Важно

Home-блоки в этом patch все еще могут использовать legacy Home sections (`@/components/hero`, `@/components/value-section` и т.д.).
Это нормально как промежуточный шаг. Следующий этап — отвязать каждый `*Home` блок от legacy по одному.
