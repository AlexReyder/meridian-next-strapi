import { randomUUID } from 'node:crypto'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { z } from 'zod'

export const runtime = 'nodejs'

const proposalSchema = z.object({
  locale: z.enum(['ru', 'en', 'ar']).default('ru'),
  pageSlug: z.string().min(1).default('get-proposal'),
  pageTitle: z.string().optional().default('Get proposal'),
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
  maxFileSizeMb: z.coerce.number().int().positive().max(100).default(50),
})

type UploadedFile = {
  key: string
  filename: string
  url: string
  contentType: string
  size: number
}

const textLabels = {
  ru: {
    subjectPrefix: 'Новая заявка Meridian',
    heading: 'Новая заявка с сайта Meridian',
  },
  en: {
    subjectPrefix: 'New Meridian inquiry',
    heading: 'New website inquiry from Meridian',
  },
  ar: {
    subjectPrefix: 'طلب جديد من Meridian',
    heading: 'طلب جديد من موقع Meridian',
  },
} as const

function requireEnv(name: string) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
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
    return forcePathStyle
      ? `${normalized}/${bucket}/${key}`
      : `${normalized}/${key}`
  }

  throw new Error('Missing S3_PUBLIC_BASE_URL or S3_ENDPOINT/S3_BUCKET to build public file URL')
}

async function uploadFiles(files: File[], locale: 'ru' | 'en' | 'ar'): Promise<UploadedFile[]> {
  if (!files.length) return []

  const bucket = requireEnv('S3_BUCKET')
  const client = createS3Client()
  const now = new Date()
  const datePrefix = `${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, '0')}/${String(
    now.getUTCDate(),
  ).padStart(2, '0')}`

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
    .split(/\r?\n/)
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
  locale: 'ru' | 'en' | 'ar'
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
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:600;">${escapeHtml(
          label,
        )}</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  const htmlLinks = links.length
    ? `<h3 style="margin:24px 0 8px;">Links</h3><ul>${links
        .map((link) => `<li><a href="${escapeHtml(link)}">${escapeHtml(link)}</a></li>`)
        .join('')}</ul>`
    : ''

  const htmlFiles = uploadedFiles.length
    ? `<h3 style="margin:24px 0 8px;">Files</h3><ul>${uploadedFiles
        .map(
          (file) =>
            `<li><a href="${escapeHtml(file.url)}">${escapeHtml(file.filename)}</a> — ${escapeHtml(
              toMb(file.size),
            )}</li>`,
        )
        .join('')}</ul>`
    : ''

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
      <h2 style="margin:0 0 16px;">${escapeHtml(labels.heading)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:760px;">${htmlRows}</table>
      <h3 style="margin:24px 0 8px;">Message</h3>
      <div style="white-space:pre-wrap;border:1px solid #ddd;padding:12px;border-radius:8px;">${escapeHtml(
        data.message,
      )}</div>
      ${htmlLinks}
      ${htmlFiles}
    </div>
  `.trim()

  const text = [
    labels.heading,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    data.message,
    '',
    links.length ? ['Links:', ...links, ''] : [],
    uploadedFiles.length
      ? [
          'Files:',
          ...uploadedFiles.map((file) => `${file.filename} (${toMb(file.size)}): ${file.url}`),
          '',
        ]
      : [],
  ]
    .flat()
    .join('\n')

  return { subject, html, text }
}

export async function POST(request: Request) {
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

    if (data.honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 })
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

    const transporter = createTransport()
    const to = requireEnv('PROPOSAL_TO_EMAIL')
    const from = process.env.SMTP_FROM || process.env.SMTP_USER

    const email = buildEmail({
      locale: data.locale,
      data,
      uploadedFiles,
    })

    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    })

    return NextResponse.json({
      ok: true,
      uploadedFiles,
    })
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
