import Link from 'next/link'
import type { HeroBlock } from '@/types/strapi'
import { Button } from '@/components/ui/button'

export function HeroBlockView({ block, locale }: { block: HeroBlock; locale: string }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        {block.eyebrow ? <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{block.eyebrow}</p> : null}
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">{block.title}</h1>
        {block.description ? <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{block.description}</p> : null}
        <div className="flex flex-wrap gap-3">
          {block.primaryCtaLabel && block.primaryCtaHref ? (
            <Button asChild>
              <Link href={block.primaryCtaHref.startsWith('/') ? `/${locale}${block.primaryCtaHref}` : block.primaryCtaHref}>
                {block.primaryCtaLabel}
              </Link>
            </Button>
          ) : null}
          {block.secondaryCtaLabel && block.secondaryCtaHref ? (
            <Button asChild variant="outline">
              <Link href={block.secondaryCtaHref.startsWith('/') ? `/${locale}${block.secondaryCtaHref}` : block.secondaryCtaHref}>
                {block.secondaryCtaLabel}
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
      {block.image?.url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={block.image.url} alt={block.image.alternativeText || block.title} className="h-full w-full rounded-3xl object-cover" />
      ) : null}
    </section>
  )
}
