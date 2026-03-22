import type { RichTextBlock } from '@/types/strapi'

export function RichTextBlockView({ block }: { block: RichTextBlock }) {
  return (
    <section id={block.sectionId} className="py-20 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        {block.title ? <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{block.title}</h2> : null}
        <div
          className="prose prose-neutral mt-6 max-w-none prose-headings:font-semibold prose-p:text-base prose-p:leading-8"
          dangerouslySetInnerHTML={{ __html: block.body }}
        />
      </div>
    </section>
  )
}
