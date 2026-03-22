import Link from 'next/link'
import Image from 'next/image'
import type { HeroBlock } from '@/types/strapi'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react';

export function HeroBlockView({ block, locale }: { block: HeroBlock; locale: string }) {
  return (
    <section id={block.sectionId} className="relative overflow-hidden bg-gradient-to-b from-[#f7f1e8] via-background to-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            {block.eyebrow ? (
              <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">{block.eyebrow}</p>
            ) : null}

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
                {block.title}
              </h1>
              {block.description ? (
                <div
                  className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
                  dangerouslySetInnerHTML={{ __html: block.description }}
                />
              ) : null}
            </div>

            <div className="flex flex-wrap gap-3">
              {block.primaryCtaLabel && block.primaryCtaHref ? (
                <Button asChild size="lg"  className="bg-[#2a2520] text-[#faf9f6] hover:bg-[#3a3530] text-[10px] uppercase tracking-[0.14em] px-6 h-10 rounded-[3px] shadow-sm">
                  <Link href={`/${locale}${block.primaryCtaHref === '/' ? '' : block.primaryCtaHref}`}>{block.primaryCtaLabel}</Link>
                  {/* <ArrowRight className="ml-2 h-3.5 w-3.5" /> */}
                </Button>
              ) : null}
              {block.secondaryCtaLabel && block.secondaryCtaHref ? (
                <Button asChild size="lg" variant="outline">
                  <Link href={`/${locale}${block.secondaryCtaHref === '/' ? '' : block.secondaryCtaHref}`}>{block.secondaryCtaLabel}</Link>
                </Button>
              ) : null}
            </div>

            {block.tags?.length ? (
              <div className="flex flex-wrap gap-2 pt-2">
                {block.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative h-[420px] md:h-[560px]">
            <div className="absolute inset-x-10 bottom-2 h-10 rounded-full bg-black/5 blur-2xl" />

            {block.primaryImage?.url ? (
              <div className="absolute left-0 top-10 w-[82%] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_30px_70px_rgba(17,24,39,0.12)]">
                <div className="relative aspect-[16/10] w-full bg-muted">
                  <Image
                    src={block.primaryImage.url}
                    alt={block.primaryImage.alternativeText || block.primaryImageLabel || block.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    unoptimized
                  />
                </div>
                {block.primaryImageLabel ? (
                  <div className="border-t border-black/5 px-4 py-3 text-sm text-muted-foreground">{block.primaryImageLabel}</div>
                ) : null}
              </div>
            ) : null}

            {block.secondaryImage?.url ? (
              <div className="absolute bottom-0 right-0 w-[42%] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_30px_70px_rgba(17,24,39,0.18)]">
                <div className="relative aspect-[10/16] w-full bg-muted">
                  <Image
                    src={block.secondaryImage.url}
                    alt={block.secondaryImage.alternativeText || block.secondaryImageLabel || block.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 18vw, 45vw"
                    unoptimized
                  />
                </div>
                {block.secondaryImageLabel ? (
                  <div className="border-t border-black/5 px-4 py-3 text-sm text-muted-foreground">{block.secondaryImageLabel}</div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
