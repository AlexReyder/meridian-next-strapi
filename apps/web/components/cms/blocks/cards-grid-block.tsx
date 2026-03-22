import type { CardsGridBlock } from '@/types/strapi'

export function CardsGridBlockView({ block }: { block: CardsGridBlock }) {
  return (
    <section id={block.sectionId} className="mx-auto max-w-7xl px-6 py-14">
      {block.title ? <h2 className="text-3xl font-semibold tracking-tight">{block.title}</h2> : null}
      {block.description ? <p className="mt-4 max-w-3xl text-muted-foreground">{block.description}</p> : null}
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {block.items?.map((item) => (
          <article key={item.id} className="rounded-3xl border border-black/5 bg-card p-6 shadow-sm">
            {item.image?.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.image.url} alt={item.image.alternativeText || item.title} className="mb-4 aspect-[4/3] w-full rounded-2xl object-cover" />
            ) : null}
            <h3 className="text-xl font-medium">{item.title}</h3>
            {item.description ? <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}
