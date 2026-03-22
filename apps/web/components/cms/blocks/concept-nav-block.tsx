import Link from 'next/link'
import type { ConceptNavBlock } from '@/types/strapi'

export function ConceptNavBlockView({ block, locale }: { block: ConceptNavBlock; locale: string }) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  if (!block.items?.length) {
    return null
  }

  return (
    <section id={block.sectionId} className="py-10 lg:py-12" dir={dir}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {block.title ? (
          <h2 className="mb-6 font-serif text-2xl sm:text-3xl font-light text-foreground">{block.title}</h2>
        ) : null}
        <div className="flex flex-wrap gap-3">
          {block.items.map((item, index) => (
            <Link
              key={`${item.id ?? index}-${item.anchorId}`}
              href={`#${item.anchorId}`}
              className="rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
