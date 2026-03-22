'use client'

import { useMemo, useRef, useState } from 'react'
import { Loader2, Paperclip, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { SiteLocale } from '@/lib/i18n'
import type { FormSectionBlock } from '@/types/strapi'

const copy = {
  ru: {
    name: 'Имя',
    email: 'Email',
    company: 'Компания',
    role: 'Роль / должность',
    website: 'Сайт',
    budget: 'Бюджет',
    timeline: 'Сроки',
    message: 'Опишите задачу',
    links: 'Ссылки на материалы',
    files: 'Файлы',
    fileHint: 'Можно прикрепить несколько файлов',
    successFallback: 'Спасибо. Мы получили заявку и свяжемся с вами.',
    submitFallback: 'Отправить заявку',
    errorFallback: 'Не удалось отправить заявку. Попробуйте еще раз.',
    removeFile: 'Удалить файл',
    maxFileLabel: 'Максимальный размер файла',
  },
  en: {
    name: 'Name',
    email: 'Email',
    company: 'Company',
    role: 'Role / title',
    website: 'Website',
    budget: 'Budget',
    timeline: 'Timeline',
    message: 'Tell us about the project',
    links: 'Links to materials',
    files: 'Files',
    fileHint: 'You can attach multiple files',
    successFallback: 'Thanks. We received your inquiry and will get back to you.',
    submitFallback: 'Submit request',
    errorFallback: 'Failed to submit the form. Please try again.',
    removeFile: 'Remove file',
    maxFileLabel: 'Max file size',
  },
  ar: {
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    company: 'الشركة',
    role: 'الدور / المسمى الوظيفي',
    website: 'الموقع',
    budget: 'الميزانية',
    timeline: 'المدة الزمنية',
    message: 'صف المشروع',
    links: 'روابط المواد',
    files: 'الملفات',
    fileHint: 'يمكنك إرفاق عدة ملفات',
    successFallback: 'شكرًا. استلمنا الطلب وسنتواصل معك.',
    submitFallback: 'إرسال الطلب',
    errorFallback: 'تعذر إرسال النموذج. حاول مرة أخرى.',
    removeFile: 'إزالة الملف',
    maxFileLabel: 'الحد الأقصى لحجم الملف',
  },
} as const

type ProposalFormProps = {
  block: FormSectionBlock
  locale: SiteLocale
  pageTitle?: string
  pageSlug?: string
}

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error'
  message?: string
}

const inputClassName =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground'
const textareaClassName = `${inputClassName} min-h-36 resize-y`

export function ProposalForm({ block, locale, pageTitle, pageSlug }: ProposalFormProps) {
  const [state, setState] = useState<FormState>({ status: 'idle' })
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const startedAtRef = useRef<number>(Date.now())
  const t = copy[locale]
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const alignment = locale === 'ar' ? 'text-right' : 'text-left'

  const hint = useMemo(() => {
    if (!block.acceptsFiles) return null
    return `${t.fileHint}. ${t.maxFileLabel}: ${block.maxFileSizeMb || 50} MB.`
  }, [block.acceptsFiles, block.maxFileSizeMb, t.fileHint, t.maxFileLabel])

  function handleFilesChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files || [])
    setSelectedFiles(files)
  }

  function removeFile(index: number) {
    setSelectedFiles((current) => current.filter((_, currentIndex) => currentIndex !== index))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState({ status: 'submitting' })

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.set('locale', locale)
    formData.set('pageTitle', pageTitle || block.title)
    formData.set('pageSlug', pageSlug || 'get-proposal')
    formData.set('maxFileSizeMb', String(block.maxFileSizeMb || 50))
    formData.set('startedAt', String(startedAtRef.current))

    const fileInput = form.elements.namedItem('files') as HTMLInputElement | null
    const files = Array.from(fileInput?.files || [])
    formData.delete('files')
    files.forEach((file) => formData.append('files', file))

    try {
      const response = await fetch('/api/proposal', {
        method: 'POST',
        body: formData,
      })

      const payload = (await response.json()) as { ok?: boolean; message?: string }
      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || t.errorFallback)
      }

      form.reset()
      setSelectedFiles([])
      setState({
        status: 'success',
        message: block.successMessage || t.successFallback,
      })
      startedAtRef.current = Date.now()
    } catch (error) {
      setState({
        status: 'error',
        message: error instanceof Error ? error.message : t.errorFallback,
      })
    }
  }

  return (
    <form className={`space-y-6 ${alignment}`} dir={dir} onSubmit={handleSubmit} noValidate>
      <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="block font-medium">{t.name}</span>
          <input className={inputClassName} name="name" required />
        </label>

        <label className="space-y-2 text-sm">
          <span className="block font-medium">{t.email}</span>
          <input className={inputClassName} type="email" name="email" required />
        </label>

        <label className="space-y-2 text-sm">
          <span className="block font-medium">{t.company}</span>
          <input className={inputClassName} name="company" />
        </label>

        <label className="space-y-2 text-sm">
          <span className="block font-medium">{t.role}</span>
          <input className={inputClassName} name="role" />
        </label>

        <label className="space-y-2 text-sm">
          <span className="block font-medium">{t.website}</span>
          <input className={inputClassName} type="url" name="website" />
        </label>

        <label className="space-y-2 text-sm">
          <span className="block font-medium">{t.budget}</span>
          <input className={inputClassName} name="budget" />
        </label>

        <label className="space-y-2 text-sm md:col-span-1">
          <span className="block font-medium">{t.timeline}</span>
          <input className={inputClassName} name="timeline" />
        </label>

        <label className="space-y-2 text-sm md:col-span-1">
          <span className="block font-medium">{t.links}</span>
          <textarea className={`${inputClassName} min-h-24 resize-y`} name="links" />
        </label>
      </div>

      <label className="space-y-2 text-sm">
        <span className="block font-medium">{t.message}</span>
        <textarea className={textareaClassName} name="message" required />
      </label>

      {block.acceptsFiles ? (
        <div className="space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
          <div className={`flex items-start gap-3 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
            <Paperclip className="mt-0.5 h-4 w-4 shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">{t.files}</p>
              {hint ? <p className="text-sm text-muted-foreground">{hint}</p> : null}
            </div>
          </div>

          <input
            className="block w-full text-sm"
            type="file"
            name="files"
            multiple
            onChange={handleFilesChange}
          />

          {selectedFiles.length ? (
            <ul className="space-y-2">
              {selectedFiles.map((file, index) => (
                <li
                  key={`${file.name}-${index}`}
                  className={`flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-3 py-2 text-sm ${locale === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:text-foreground"
                    aria-label={t.removeFile}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      {state.status === 'error' && state.message ? (
        <div className="rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
          {state.message}
        </div>
      ) : null}

      {state.status === 'success' && state.message ? (
        <div className="rounded-2xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-200">
          {state.message}
        </div>
      ) : null}

      <Button type="submit" disabled={state.status === 'submitting'} className="min-w-44">
        {state.status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        <span>{block.submitLabel || t.submitFallback}</span>
      </Button>
    </form>
  )
}
