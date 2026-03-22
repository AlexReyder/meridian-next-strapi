import type { FaqBlock } from '@/types/strapi'

export function FaqBlockView({ block }: { block: FaqBlock }) {
  return (
    <section id={block.sectionId} className="mx-auto max-w-5xl px-6 py-14">
      {block.title ? <h2 className="mb-8 text-3xl font-semibold tracking-tight">{block.title}</h2> : null}
      <div className="space-y-4">
        {block.items?.map((item) => (
          <article key={item.id} className="rounded-2xl border border-black/5 bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">{item.question}</h3>
            <div className="prose prose-neutral mt-3 max-w-none" dangerouslySetInnerHTML={{ __html: item.answer }} />
          </article>
        ))}
      </div>
    </section>
  )
}
