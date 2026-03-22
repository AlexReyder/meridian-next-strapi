import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { CtaBlock } from '@/types/strapi'
import { cn } from '@/lib/utils'

export function CtaBlockView({ block, locale }: { block: CtaBlock; locale: string }) {
  const dark = block.theme === 'dark'

  return (
    <section id={block.sectionId} className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn('rounded-[36px] border p-8 md:p-12', dark ? 'border-zinc-900 bg-zinc-950 text-white' : 'border-border/70 bg-muted/30')}>
          <div className="mx-auto max-w-3xl text-center">
            {block.eyebrow ? (
              <p className={cn('text-sm uppercase tracking-[0.28em]', dark ? 'text-white/65' : 'text-muted-foreground')}>
                {block.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{block.title}</h2>
            {block.description ? (
              <p className={cn('mt-5 text-base leading-8', dark ? 'text-white/75' : 'text-muted-foreground')}>
                {block.description}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {block.buttonLabel && block.buttonHref ? (
                <Button asChild size="lg" variant={dark ? 'secondary' : 'default'}>
                  <Link href={`/${locale}${block.buttonHref === '/' ? '' : block.buttonHref}`}>{block.buttonLabel}</Link>
                </Button>
              ) : null}
              {block.secondaryButtonLabel && block.secondaryButtonHref ? (
                <Button asChild size="lg" variant={dark ? 'outline' : 'outline'}>
                  <Link href={`/${locale}${block.secondaryButtonHref === '/' ? '' : block.secondaryButtonHref}`}>{block.secondaryButtonLabel}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
