# Phase H — proposal hardening

## Что добавляет phase

- collection type `proposal-submission` в Strapi
- server-side сохранение заявок в Strapi из `POST /api/proposal`
- базовый антиспам:
  - honeypot
  - минимальное время заполнения формы
  - in-memory rate limit по IP и email cooldown
- proposal form UI с более аккуратным RTL/LTR поведением

## Что настроить в Strapi

1. Перезапустить Strapi после появления нового content type.
2. Создать Content API token с правами на `proposal-submission`:
   - `create`
3. При желании для админки дополнительно включить `find` / `findOne` только для авторизованных ролей.

## Env для web

- `STRAPI_URL`
- `STRAPI_PROPOSAL_TOKEN` или `STRAPI_TOKEN`
- SMTP переменные
- S3 переменные

## Важно

В репозитории был закоммичен `.env.example` с реальными значениями. Их нужно заменить на заглушки и немедленно ротировать в провайдере.
