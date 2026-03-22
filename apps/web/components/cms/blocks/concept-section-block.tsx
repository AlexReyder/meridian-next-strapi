import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ConceptSectionBlock } from '@/types/strapi'

export function ConceptSectionBlockView({ block, locale }: { block: ConceptSectionBlock; locale: string }) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const imageFirst = block.layout === 'imageLeft'

  return (
    <section id={block.sectionId} className="py-16 lg:py-20" dir={dir}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${imageFirst ? '' : 'lg:[&>*:first-child]:order-2'}`}>
          <div>
            {block.categoryLabel ? (
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{block.categoryLabel}</p>
            ) : null}
            <h2 className="font-serif text-3xl sm:text-4xl font-light leading-tight text-foreground">{block.title}</h2>
            {block.intro ? <p className="mt-5 text-base leading-relaxed text-muted-foreground">{block.intro}</p> : null}
            {block.details?.length ? (
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {block.details.map((item, index) => (
                  <div key={`${item.id ?? index}-${item.label}`} className="rounded-md border border-border/60 bg-card px-4 py-4">
                    <dt className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{item.label}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-foreground/90">{item.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {block.ctaHref ? (
              <div className="mt-8">
                <Link href={block.ctaHref} className="inline-flex items-center text-sm font-medium text-foreground hover:text-foreground/80">
                  {block.ctaLabel || 'Learn more'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>

          <div>
            {block.image?.url ? (
              <div className="overflow-hidden rounded-lg border border-border/60 bg-card shadow-sm">
                <Image
                  src={block.image.url}
                  alt={block.image.alternativeText || block.title}
                  width={block.image.width || 1400}
                  height={block.image.height || 900}
                  className="h-auto w-full"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] rounded-lg border border-border/60 bg-secondary/30" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
