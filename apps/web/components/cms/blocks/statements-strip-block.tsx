import type { StatementsStripBlock } from '@/types/strapi'

export function StatementsStripBlockView({ block }: { block: StatementsStripBlock }) {
  return (
    <section id={block.sectionId} className="py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-3 rounded-[28px] border border-border/70 bg-muted/30 p-6 md:grid-cols-2 xl:grid-cols-4">
          {block.items?.map((item) => (
            <div key={item.id} className="flex items-center gap-3 rounded-2xl bg-background px-4 py-4 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-foreground/90">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
