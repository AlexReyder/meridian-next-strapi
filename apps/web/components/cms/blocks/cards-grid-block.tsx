import Image from 'next/image'
import Link from 'next/link'
import type { CardsGridBlock } from '@/types/strapi'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

function gridColumns(columns?: CardsGridBlock['columns']) {
  switch (columns) {
    case '2':
      return 'md:grid-cols-2'
    case '4':
      return 'md:grid-cols-2 xl:grid-cols-4'
    case '3':
    default:
      return 'md:grid-cols-2 xl:grid-cols-3'
  }
}

function themeClass(theme?: CardsGridBlock['theme']) {
  switch (theme) {
    case 'dark':
      return 'bg-zinc-950 text-white'
    case 'muted':
      return 'bg-muted/40'
    default:
      return 'bg-transparent'
  }
}

export function CardsGridBlockView({ block, locale }: { block: CardsGridBlock; locale: string }) {
  const isDark = block.theme === 'dark'

  return (
    <section id={block.sectionId} className={cn('py-20 md:py-24', themeClass(block.theme))}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl space-y-4">
          {block.eyebrow ? (
            <p className={cn('text-sm uppercase tracking-[0.28em]', isDark ? 'text-white/70' : 'text-muted-foreground')}>
              {block.eyebrow}
            </p>
          ) : null}
          {block.title ? <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{block.title}</h2> : null}
          {block.description ? (
            <p className={cn('text-base leading-8', isDark ? 'text-white/75' : 'text-muted-foreground')}>
              {block.description}
            </p>
          ) : null}
        </div>

        <div className={cn('grid gap-6', gridColumns(block.columns))}>
          {block.items?.map((item, index) => (
            <article
              key={item.id}
              className={cn(
                'rounded-[28px] border px-6 py-6 shadow-sm',
                isDark ? 'border-white/10 bg-white/5' : 'border-border/70 bg-background',
                index === 0 && block.variant !== 'concepts' && 'relative overflow-hidden',
              )}
            >
              {index === 0 && block.variant !== 'concepts' ? (
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-400 to-transparent" />
              ) : null}

              {item.image?.url ? (
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-border/50 bg-muted">
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src={item.image.url}
                      alt={item.image.alternativeText || item.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 24vw, (min-width: 768px) 42vw, 100vw"
                      unoptimized
                    />
                  </div>
                </div>
              ) : null}

              <div className="space-y-3">
                {item.eyebrow ? (
                  <p className={cn('text-xs uppercase tracking-[0.18em]', isDark ? 'text-white/60' : 'text-muted-foreground')}>
                    {item.eyebrow}
                  </p>
                ) : null}
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                {item.description ? (
                  <p className={cn('text-sm leading-7', isDark ? 'text-white/75' : 'text-muted-foreground')}>
                    {item.description}
                  </p>
                ) : null}
                {item.buttonLabel && item.buttonHref ? (
                  <div className="pt-2">
                    <Button asChild variant={isDark ? 'secondary' : 'outline'}>
                      <Link href={`/${locale}${item.buttonHref === '/' ? '' : item.buttonHref}`}>{item.buttonLabel}</Link>
                    </Button>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
