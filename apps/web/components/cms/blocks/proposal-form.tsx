'use client'

import { useMemo, useState } from 'react'
import { Loader2, Paperclip } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { FormSectionBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'

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

  const t = copy[locale]
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const alignment = locale === 'ar' ? 'text-right' : 'text-left'
  const hint = useMemo(() => {
    if (!block.acceptsFiles) return null
    return `${t.fileHint}. ${block.maxFileSizeMb || 50} MB max per file.`
  }, [block.acceptsFiles, block.maxFileSizeMb, t.fileHint])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState({ status: 'submitting' })

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.set('locale', locale)
    formData.set('pageTitle', pageTitle || block.title)
    formData.set('pageSlug', pageSlug || 'get-proposal')
    formData.set('maxFileSizeMb', String(block.maxFileSizeMb || 50))

    try {
      const response = await fetch('/api/proposal', {
        method: 'POST',
        body: formData,
      })

      const payload = (await response.json()) as {
        ok?: boolean
        message?: string
      }

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || t.errorFallback)
      }

      form.reset()
      setSelectedFiles([])
      setState({
        status: 'success',
        message: block.successMessage || t.successFallback,
      })
    } catch (error) {
      setState({
        status: 'error',
        message: error instanceof Error ? error.message : t.errorFallback,
      })
    }
  }

  return (
    <form className="space-y-4" dir={dir} onSubmit={handleSubmit}>
      <input type="hidden" name="honeypot" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-4 md:grid-cols-2">
        <label className={`space-y-2 ${alignment}`}>
          <span className="text-sm font-medium">{t.name}</span>
          <input className={inputClassName} name="name" required />
        </label>

        <label className={`space-y-2 ${alignment}`}>
          <span className="text-sm font-medium">{t.email}</span>
          <input className={inputClassName} type="email" name="email" required />
        </label>

        <label className={`space-y-2 ${alignment}`}>
          <span className="text-sm font-medium">{t.company}</span>
          <input className={inputClassName} name="company" />
        </label>

        <label className={`space-y-2 ${alignment}`}>
          <span className="text-sm font-medium">{t.role}</span>
          <input className={inputClassName} name="role" />
        </label>

        <label className={`space-y-2 ${alignment}`}>
          <span className="text-sm font-medium">{t.website}</span>
          <input className={inputClassName} type="url" name="website" placeholder="https://..." />
        </label>

        <label className={`space-y-2 ${alignment}`}>
          <span className="text-sm font-medium">{t.budget}</span>
          <input className={inputClassName} name="budget" />
        </label>

        <label className={`space-y-2 ${alignment}`}>
          <span className="text-sm font-medium">{t.timeline}</span>
          <input className={inputClassName} name="timeline" />
        </label>

        <label className={`space-y-2 ${alignment}`}>
          <span className="text-sm font-medium">{t.links}</span>
          <input className={inputClassName} name="links" placeholder="https://..." />
        </label>
      </div>

      <label className={`block space-y-2 ${alignment}`}>
        <span className="text-sm font-medium">{t.message}</span>
        <textarea className={textareaClassName} name="message" required />
      </label>

      {block.acceptsFiles ? (
        <label className={`block rounded-2xl border border-dashed border-border p-4 ${alignment}`}>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium">
            <Paperclip className="size-4" />
            <span>{t.files}</span>
          </div>
          <input
            className="block w-full text-sm"
            type="file"
            name="files"
            multiple
            onChange={(event) => setSelectedFiles(Array.from(event.currentTarget.files || []))}
          />
          {hint ? <p className="mt-2 text-xs text-muted-foreground">{hint}</p> : null}
          {selectedFiles.length ? (
            <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
              {selectedFiles.map((file) => (
                <li key={`${file.name}-${file.size}`}>{file.name}</li>
              ))}
            </ul>
          ) : null}
        </label>
      ) : null}

      <div className={`pt-2 ${alignment}`}>
        <Button type="submit" size="lg" className="w-full md:w-auto" disabled={state.status === 'submitting'}>
          {state.status === 'submitting' ? <Loader2 className="size-4 animate-spin" /> : null}
          {block.submitLabel || t.submitFallback}
        </Button>
      </div>

      {state.status === 'success' ? (
        <p className="text-sm text-emerald-600">{state.message}</p>
      ) : null}

      {state.status === 'error' ? (
        <p className="text-sm text-destructive">{state.message}</p>
      ) : null}
    </form>
  )
}
