import type { FormSectionBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'
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
  return (
    <section
      id={block.sectionId || undefined}
      className="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card p-8 shadow-sm">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {block.title}
          </h2>

          {block.description ? (
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              {block.description}
            </p>
          ) : null}
        </div>

        <div className="mt-8">
          <ProposalForm
            block={block}
            locale={locale}
            pageTitle={pageTitle}
            pageSlug={pageSlug}
          />
        </div>
      </div>
    </section>
  )
}
