import type { SiteLocale } from '@/lib/i18n'
import type { FormSectionBlock } from '@/types/strapi'

import { ProposalForm } from '@/components/cms/blocks/proposal-form'

export function FormSectionBlockView({
  block,
  locale,
  pageTitle,
  pageSlug,
}: {
  block: FormSectionBlock
  locale: SiteLocale
  pageTitle?: string
  pageSlug?: string
}) {
  const textAlign = locale === 'ar' ? 'text-right' : 'text-left'

  return (
    <section id={block.sectionId} className="mx-auto w-full max-w-5xl px-4 py-14 md:px-6 md:py-20">
      <div className={`mb-8 space-y-3 ${textAlign}`}>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{block.title}</h2>
        {block.description ? (
          <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{block.description}</p>
        ) : null}
      </div>

      <ProposalForm block={block} locale={locale} pageTitle={pageTitle} pageSlug={pageSlug} />
    </section>
  )
}
