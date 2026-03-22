import Image from 'next/image'
import Link from 'next/link'
import type { ConceptSectionBlock } from '@/types/strapi'

export function ConceptSectionBlockView({ block, locale }: { block: ConceptSectionBlock; locale: string }) {
  const isImageLeft = block.layout !== 'imageRight'
  const href = block.ctaHref ? `/${locale}${block.ctaHref === '/' ? '' : block.ctaHref}` : undefined

  return (
    <section id={block.sectionId} className="py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className={isImageLeft ? 'lg:order-1' : 'lg:order-2'}>
            {block.image?.url ? (
              <div className="relative overflow-hidden rounded-[24px] border border-border/70 bg-muted shadow-sm">
                <div className="relative aspect-[5/4] w-full">
                  <Image
                    src={block.image.url}
                    alt={block.image.alternativeText || block.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    unoptimized
                  />
                </div>
              </div>
            ) : null}
          </div>

          <div className={isImageLeft ? 'lg:order-2' : 'lg:order-1'}>
            {block.categoryLabel ? (
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">{block.categoryLabel}</p>
            ) : null}
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{block.title}</h2>
            {block.intro ? <p className="mt-5 text-base leading-8 text-muted-foreground">{block.intro}</p> : null}

            {block.details?.length ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {block.details.map((detail) => (
                  <div key={detail.id} className="rounded-[20px] border border-border/70 bg-background px-5 py-5 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{detail.label}</p>
                    <p className="mt-2 text-sm leading-7 text-foreground/80">{detail.value}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {href && block.ctaLabel ? (
              <div className="mt-8">
                <Link
                  href={href}
                  className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  {block.ctaLabel}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
