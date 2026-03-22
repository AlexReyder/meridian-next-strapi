import type { MediaTextBlock } from '@/types/strapi'
import { cn } from '@/lib/utils'

export function MediaTextBlockView({ block }: { block: MediaTextBlock }) {
  const imageFirst = block.mediaPosition === 'left'

  return (
    <section id={block.sectionId} className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-2 lg:items-center">
      <div className={cn(imageFirst ? 'lg:order-1' : 'lg:order-2')}>
        {block.image?.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={block.image.url}
            alt={block.imageAlt || block.image.alternativeText || block.title || 'Section image'}
            className="h-full w-full rounded-3xl object-cover"
          />
        ) : null}
      </div>
      <div className={cn(imageFirst ? 'lg:order-2' : 'lg:order-1')}>
        {block.title ? <h2 className="mb-4 text-3xl font-semibold tracking-tight">{block.title}</h2> : null}
        {block.body ? <div className="prose prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: block.body }} /> : null}
      </div>
    </section>
  )
}
