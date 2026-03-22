import type { StepsBlock } from '@/types/strapi'
import { cn } from '@/lib/utils'

export function StepsBlockView({ block }: { block: StepsBlock }) {
  const proposalVariant = block.variant === 'proposal'

  return (
    <section id={block.sectionId} className={cn('py-20 md:py-24', proposalVariant && 'bg-muted/30')}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl space-y-4">
          {block.eyebrow ? <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">{block.eyebrow}</p> : null}
          {block.title ? <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{block.title}</h2> : null}
          {block.description ? <p className="text-base leading-8 text-muted-foreground">{block.description}</p> : null}
        </div>

        <div className={cn('grid gap-6', proposalVariant ? 'md:grid-cols-3' : 'xl:grid-cols-5 md:grid-cols-2')}>
          {block.items?.map((item, index) => (
            <article key={item.id} className="rounded-[28px] border border-border/70 bg-background px-6 py-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-3xl font-semibold tracking-tight text-foreground/90">
                  {item.number || String(index + 1).padStart(2, '0')}
                </span>
                {index === 0 ? <span className="h-2 w-2 rounded-full bg-amber-500" /> : null}
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
              {item.description ? <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p> : null}
              {item.details?.length ? (
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/50" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
