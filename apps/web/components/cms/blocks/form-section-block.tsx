import { Button } from '@/components/ui/button'
import type { FormSectionBlock } from '@/types/strapi'

export function FormSectionBlockView({ block }: { block: FormSectionBlock }) {
  return (
    <section id={block.sectionId} className="py-20 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="rounded-[32px] border border-border/70 bg-background p-8 shadow-sm md:p-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{block.title}</h2>
            {block.description ? <p className="text-base leading-8 text-muted-foreground">{block.description}</p> : null}
          </div>

          <form className="mt-8 space-y-4">
            <input className="w-full rounded-xl border border-input px-4 py-3" placeholder="Name" type="text" />
            <input className="w-full rounded-xl border border-input px-4 py-3" placeholder="Email" type="email" />
            <textarea className="min-h-40 w-full rounded-xl border border-input px-4 py-3" placeholder="Project details" />
            {block.acceptsFiles ? (
              <div className="rounded-xl border border-dashed border-input p-4 text-sm text-muted-foreground">
                Attach file up to {block.maxFileSizeMb || 50} MB
              </div>
            ) : null}
            <div className="pt-2">
              <Button type="submit" size="lg" className="w-full">
                {block.submitLabel || 'Submit'}
              </Button>
            </div>
          </form>

          {block.successMessage ? <p className="mt-4 text-sm text-muted-foreground">{block.successMessage}</p> : null}
        </div>
      </div>
    </section>
  )
}
