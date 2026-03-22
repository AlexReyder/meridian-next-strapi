import Link from 'next/link'
import type { ConceptNavBlock } from '@/types/strapi'

export function ConceptNavBlockView({ block }: { block: ConceptNavBlock }) {
  return (
    <section id={block.sectionId} className="border-y border-border/60 bg-muted/20 py-6">
      <div className="container mx-auto px-4 md:px-6">
        {block.title ? <p className="mb-4 text-sm uppercase tracking-[0.24em] text-muted-foreground">{block.title}</p> : null}
        <div className="flex flex-wrap gap-3">
          {block.items?.map((item) => (
            <Link
              key={item.id}
              href={`#${item.anchorId}`}
              className="rounded-full border border-border/70 bg-background px-4 py-2 text-sm transition-colors hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
