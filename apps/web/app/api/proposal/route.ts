import { createHash, randomUUID } from 'node:crypto'

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'nodejs'

type Locale = 'ru' | 'en' | 'ar'

type UploadedFile = {
  key: string
  filename: string
  url: string
  contentType: string
  size: number
}

type StrapiSubmissionPayload = {
  locale: Locale
  pageSlug: string
  pageTitle?: string
  name: string
  email: string
  company?: string
  role?: string
  website?: string
  budget?: string
  timeline?: string
  message: string
  links?: string
  uploadedFiles: UploadedFile[]
  sourceIpHash?: string
  userAgent?: string
  status: 'pending' | 'emailed' | 'failed'
  emailSent: boolean
  failureReason?: string
  submittedAt: string
}

const proposalSchema = z.object({
  locale: z.enum(['ru', 'en', 'ar']).default('ru'),
  pageSlug: z.string().trim().min(1).default('get-proposal'),
  pageTitle: z.string().trim().max(200).optional().default('Get proposal'),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  role: z.string().trim().max(160).optional().or(z.literal('')),
  website: z.string().trim().max(240).optional().or(z.literal('')),
  budget: z.string().trim().max(160).optional().or(z.literal('')),
  timeline: z.string().trim().max(160).optional().or(z.literal('')),
  message: z.string().trim().min(10).max(5000),
  links: z.string().trim().max(5000).optional().or(z.literal('')),
  honeypot: z.string().max(0).optional().or(z.literal('')),
  startedAt: z.coerce.number().int().positive().optional(),
  maxFileSizeMb: z.coerce.number().int().positive().max(100).default(50),
})

const textLabels = {
  ru: {
    subjectPrefix: 'Новая заявка Meridian',
    heading: 'Новая заявка с сайта Meridian',
    genericError: 'Не удалось отправить заявку. Попробуйте еще раз.',
    tooFast: 'Форма отправлена слишком быстро. Попробуйте еще раз.',
    rateLimited: 'Слишком много попыток. Попробуйте снова через несколько минут.',
  },
  en: {
    subjectPrefix: 'New Meridian inquiry',
    heading: 'New website inquiry from Meridian',
    genericError: 'Failed to submit the form. Please try again.',
    tooFast: 'The form was submitted too quickly. Please try again.',
    rateLimited: 'Too many attempts. Please try again in a few minutes.',
  },
  ar: {
    subjectPrefix: 'طلب جديد من Meridian',
    heading: 'طلب جديد من موقع Meridian',
    genericError: 'تعذر إرسال النموذج. حاول مرة أخرى.',
    tooFast: 'تم إرسال النموذج بسرعة كبيرة. حاول مرة أخرى.',
    rateLimited: 'عدد المحاولات كبير جدًا. حاول مرة أخرى بعد بضع دقائق.',
  },
} as const

const MIN_FORM_FILL_MS = 2500
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const EMAIL_COOLDOWN_MS = 90 * 1000

const requestBuckets = new Map<string, { count: number; resetAt: number }>()
const emailCooldowns = new Map<string, number>()

function requireEnv(name: string) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

function getClientIp(request: Request) {
  const xForwardedFor = request.headers.get('x-forwarded-for')
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0]?.trim() || 'unknown'
  }

  return request.headers.get('x-real-ip') || 'unknown'
}

function hashIp(ip: string) {
  return createHash('sha256').update(ip).digest('hex')
}

function isRateLimited(ip: string, email: string) {
  const now = Date.now()
  const ipKey = `ip:${hashIp(ip)}`
  const currentBucket = requestBuckets.get(ipKey)

  if (!currentBucket || currentBucket.resetAt <= now) {
    requestBuckets.set(ipKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
  } else if (currentBucket.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  } else {
    currentBucket.count += 1
    requestBuckets.set(ipKey, currentBucket)
  }

  const normalizedEmail = email.trim().toLowerCase()
  const emailLockUntil = emailCooldowns.get(normalizedEmail) || 0
  if (emailLockUntil > now) {
    return true
  }

  emailCooldowns.set(normalizedEmail, now + EMAIL_COOLDOWN_MS)
  return false
}

function createTransport() {
  const host = requireEnv('SMTP_HOST')
  const port = Number(process.env.SMTP_PORT || 587)
  const user = requireEnv('SMTP_USER')
  const pass = requireEnv('SMTP_PASS')
  const secure = process.env.SMTP_SECURE === 'true' || port === 465

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

function createS3Client() {
  const region = process.env.S3_REGION || process.env.AWS_REGION || 'us-east-1'
  const endpoint = process.env.S3_ENDPOINT
  const forcePathStyle = process.env.S3_FORCE_PATH_STYLE === 'true'

  return new S3Client({
    region,
    endpoint,
    forcePathStyle,
    credentials: {
      accessKeyId: requireEnv('S3_ACCESS_KEY_ID'),
      secretAccessKey: requireEnv('S3_SECRET_ACCESS_KEY'),
    },
  })
}

function buildPublicFileUrl(key: string) {
  const baseUrl = process.env.S3_PUBLIC_BASE_URL
  if (baseUrl) {
    return `${baseUrl.replace(/\/$/, '')}/${key}`
  }

  const endpoint = process.env.S3_ENDPOINT
  const bucket = process.env.S3_BUCKET
  const forcePathStyle = process.env.S3_FORCE_PATH_STYLE === 'true'

  if (endpoint && bucket) {
    const normalized = endpoint.replace(/\/$/, '')
    return forcePathStyle ? `${normalized}/${bucket}/${key}` : `${normalized}/${key}`
  }

  throw new Error('Missing S3_PUBLIC_BASE_URL or S3_ENDPOINT/S3_BUCKET to build public file URL')
}

async function uploadFiles(files: File[], locale: Locale): Promise<UploadedFile[]> {
  if (!files.length) return []

  const bucket = requireEnv('S3_BUCKET')
  const client = createS3Client()
  const now = new Date()
  const datePrefix = `${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, '0')}/${String(now.getUTCDate()).padStart(2, '0')}`
  const uploaded: UploadedFile[] = []

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-')
    const key = `proposal-uploads/${locale}/${datePrefix}/${randomUUID()}-${safeName}`

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: buffer,
        ContentType: file.type || 'application/octet-stream',
      }),
    )

    uploaded.push({
      key,
      filename: file.name,
      url: buildPublicFileUrl(key),
      contentType: file.type || 'application/octet-stream',
      size: file.size,
    })
  }

  return uploaded
}

function normalizeMultiline(value?: string) {
  return (value || '')
    .split(/?
/)
    .map((part) => part.trim())
    .filter(Boolean)
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function toMb(size: number) {
  return `${(size / (1024 * 1024)).toFixed(2)} MB`
}

function buildEmail({
  locale,
  data,
  uploadedFiles,
}: {
  locale: Locale
  data: z.infer<typeof proposalSchema>
  uploadedFiles: UploadedFile[]
}) {
  const labels = textLabels[locale]
  const links = normalizeMultiline(data.links)
  const subject = `${labels.subjectPrefix}: ${data.name}`

  const rows: Array<[string, string]> = [
    ['Page', `${data.pageTitle} (${data.pageSlug})`],
    ['Locale', data.locale],
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company || '—'],
    ['Role', data.role || '—'],
    ['Website', data.website || '—'],
    ['Budget', data.budget || '—'],
    ['Timeline', data.timeline || '—'],
  ]

  const htmlRows = rows
    .map(([label, value]) => `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 12px;">${escapeHtml(value)}</td></tr>`)
    .join('')

  const htmlLinks = links.length
    ? `<h3>Links</h3><ul>${links
        .map((link) => `<li><a href="${escapeHtml(link)}">${escapeHtml(link)}</a></li>`)
        .join('')}</ul>`
    : ''

  const htmlFiles = uploadedFiles.length
    ? `<h3>Files</h3><ul>${uploadedFiles
        .map((file) => `<li><a href="${escapeHtml(file.url)}">${escapeHtml(file.filename)}</a> — ${escapeHtml(toMb(file.size))}</li>`)
        .join('')}</ul>`
    : ''

  const html = `
    <h2>${escapeHtml(labels.heading)}</h2>
    <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;">${htmlRows}</table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap;">${escapeHtml(data.message)}</p>
    ${htmlLinks}
    ${htmlFiles}
  `.trim()

  const text = [
    labels.heading,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    data.message,
    '',
    ...(links.length ? ['Links:', ...links, ''] : []),
    ...(uploadedFiles.length
      ? ['Files:', ...uploadedFiles.map((file) => `${file.filename} (${toMb(file.size)}): ${file.url}`), '']
      : []),
  ].join('
')

  return { subject, html, text }
}

async function saveSubmissionToStrapi(data: StrapiSubmissionPayload) {
  const strapiUrl = process.env.STRAPI_URL
  const token = process.env.STRAPI_PROPOSAL_TOKEN || process.env.STRAPI_TOKEN

  if (!strapiUrl || !token) {
    return
  }

  const response = await fetch(`${strapiUrl.replace(/\/$/, '')}/api/proposal-submissions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
    cache: 'no-store',
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Failed to save submission in Strapi: ${response.status} ${body}`)
  }
}

export async function POST(request: Request) {
  let strapiRecordCreated = false

  try {
    const formData = await request.formData()

    const parsed = proposalSchema.safeParse({
      locale: formData.get('locale'),
      pageSlug: formData.get('pageSlug'),
      pageTitle: formData.get('pageTitle'),
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      role: formData.get('role'),
      website: formData.get('website'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      message: formData.get('message'),
      links: formData.get('links'),
      honeypot: formData.get('honeypot'),
      startedAt: formData.get('startedAt'),
      maxFileSizeMb: formData.get('maxFileSizeMb'),
    })

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Validation failed',
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    const data = parsed.data
    const labels = textLabels[data.locale]

    if (data.honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    if (data.startedAt && Date.now() - data.startedAt < MIN_FORM_FILL_MS) {
      return NextResponse.json({ ok: false, message: labels.tooFast }, { status: 400 })
    }

    const ip = getClientIp(request)
    if (isRateLimited(ip, data.email)) {
      return NextResponse.json({ ok: false, message: labels.rateLimited }, { status: 429 })
    }

    const files = formData
      .getAll('files')
      .filter((value): value is File => value instanceof File && value.size > 0)

    const maxBytes = data.maxFileSizeMb * 1024 * 1024
    const tooLarge = files.find((file) => file.size > maxBytes)
    if (tooLarge) {
      return NextResponse.json(
        {
          ok: false,
          message: `File "${tooLarge.name}" exceeds the ${data.maxFileSizeMb} MB limit`,
        },
        { status: 400 },
      )
    }

    const uploadedFiles = await uploadFiles(files, data.locale)
    const sourceIpHash = hashIp(ip)
    const userAgent = request.headers.get('user-agent') || undefined
    const submittedAt = new Date().toISOString()

    await saveSubmissionToStrapi({
      locale: data.locale,
      pageSlug: data.pageSlug,
      pageTitle: data.pageTitle,
      name: data.name,
      email: data.email,
      company: data.company || undefined,
      role: data.role || undefined,
      website: data.website || undefined,
      budget: data.budget || undefined,
      timeline: data.timeline || undefined,
      message: data.message,
      links: data.links || undefined,
      uploadedFiles,
      sourceIpHash,
      userAgent,
      status: 'pending',
      emailSent: false,
      submittedAt,
    })
    strapiRecordCreated = true

    const transporter = createTransport()
    const to = requireEnv('PROPOSAL_TO_EMAIL')
    const from = process.env.SMTP_FROM || process.env.SMTP_USER
    const email = buildEmail({ locale: data.locale, data, uploadedFiles })

    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    })

    return NextResponse.json({ ok: true, uploadedFiles, storedInStrapi: strapiRecordCreated })
  } catch (error) {
    console.error('[proposal-route]', error)

    return NextResponse.json(
      {
        ok: false,
        message: 'Failed to submit proposal request',
      },
      { status: 500 },
    )
  }
}
