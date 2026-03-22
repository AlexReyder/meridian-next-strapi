import Image from 'next/image'
import type { MediaTextBlock } from '@/types/strapi'
import { cn } from '@/lib/utils'

export function MediaTextBlockView({ block }: { block: MediaTextBlock }) {
  const imageFirst = block.mediaPosition === 'left'

  return (
    <section id={block.sectionId} className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn('grid items-center gap-10 lg:grid-cols-2', imageFirst && 'lg:[&>*:first-child]:order-1')}>
          <div className={cn('space-y-5', imageFirst && 'lg:order-2')}>
            {block.title ? <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{block.title}</h2> : null}
            {block.body ? (
              <div
                className="prose prose-neutral max-w-none prose-p:text-base prose-p:leading-8"
                dangerouslySetInnerHTML={{ __html: block.body }}
              />
            ) : null}
          </div>

          {block.image?.url ? (
            <div className={cn('relative overflow-hidden rounded-[28px] border border-border/60 bg-muted', imageFirst && 'lg:order-1')}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={block.image.url}
                  alt={block.imageAlt || block.image.alternativeText || block.title || 'Section image'}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  unoptimized
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
