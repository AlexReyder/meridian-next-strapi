import { Button } from '@/components/ui/button'
import type { FormSectionBlock } from '@/types/strapi'

export function FormSectionBlockView({ block }: { block: FormSectionBlock }) {
  return (
    <section id={block.sectionId} className="mx-auto max-w-4xl px-6 py-14">
      <div className="rounded-[2rem] border border-black/5 bg-card px-8 py-10 shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight">{block.title}</h2>
        {block.description ? <p className="mt-4 text-muted-foreground">{block.description}</p> : null}
        <form className="mt-8 grid gap-4">
          <input className="h-12 rounded-xl border border-input bg-background px-4" placeholder="Name" />
          <input className="h-12 rounded-xl border border-input bg-background px-4" placeholder="Email" type="email" />
          <textarea className="min-h-32 rounded-xl border border-input bg-background px-4 py-3" placeholder="Tell us about your project" />
          {block.acceptsFiles ? <input className="rounded-xl border border-dashed border-input p-4" type="file" /> : null}
          <div>
            <Button type="submit">{block.submitLabel || 'Submit'}</Button>
          </div>
        </form>
        {block.successMessage ? <p className="mt-4 text-sm text-muted-foreground">{block.successMessage}</p> : null}
      </div>
    </section>
  )
}
