import type { FaqBlock } from '@/types/strapi'

export function FaqBlockView({ block }: { block: FaqBlock }) {
  return (
    <section id={block.sectionId} className="py-20 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        {block.title ? <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{block.title}</h2> : null}
        <div className="mt-8 space-y-4">
          {block.items?.map((item) => (
            <article key={item.id} className="rounded-[24px] border border-border/70 bg-background px-6 py-5 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight">{item.question}</h3>
              <div
                className="prose prose-neutral mt-3 max-w-none prose-p:text-sm prose-p:leading-7"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
