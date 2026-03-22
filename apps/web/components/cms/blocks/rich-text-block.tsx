import type { RichTextBlock } from '@/types/strapi'

export function RichTextBlockView({ block }: { block: RichTextBlock }) {
  return (
    <section id={block.sectionId} className="mx-auto max-w-4xl px-6 py-14">
      {block.title ? <h2 className="mb-6 text-3xl font-semibold tracking-tight">{block.title}</h2> : null}
      <div className="prose prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: block.body }} />
    </section>
  )
}
