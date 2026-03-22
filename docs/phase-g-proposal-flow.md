# Phase G — proposal flow, uploads, SMTP

## Что добавлено
- `POST /api/proposal` в Next.js
- клиентская форма `ProposalForm`
- загрузка файлов в S3
- отправка письма через SMTP
- locale-aware UI для `ru / en / ar`
- `dir="rtl"` на форме для Arabic

## Переменные окружения для `apps/web`
```env
STRAPI_URL=http://localhost:1337
STRAPI_TOKEN=

SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
PROPOSAL_TO_EMAIL=

S3_BUCKET=
S3_REGION=us-east-1
S3_ENDPOINT=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
S3_FORCE_PATH_STYLE=true
S3_PUBLIC_BASE_URL=
```

## Поведение загрузки файлов
- в письме отправляются ссылки на S3-файлы
- если `S3_PUBLIC_BASE_URL` задан, ссылки строятся от него
- иначе используется `S3_ENDPOINT` и `S3_BUCKET`

## Что проверить
1. `pnpm --dir apps/web install`
2. заполнить env
3. открыть `/ru/get-proposal`
4. отправить форму без файла
5. отправить форму с файлом
6. проверить письмо
7. проверить ссылку на файл из письма

## Ограничения этого phase
- нет rate limiting
- нет CAPTCHA
- нет сохранения заявок в Strapi
- не реализован старый wizard/upload UX из legacy frontend

Следующий phase:
- антиспам
- сохранение заявок в Strapi
- расширение формы через CMS-поля
- финальный Arabic polish для proposal flow
