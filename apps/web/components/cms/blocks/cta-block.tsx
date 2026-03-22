import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { CtaBlock } from '@/types/strapi'

export function CtaBlockView({ block, locale }: { block: CtaBlock; locale: string }) {
  return (
    <section id={block.sectionId} className="mx-auto max-w-5xl px-6 py-14">
      <div className="rounded-[2rem] border border-black/5 bg-card px-8 py-12 shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight">{block.title}</h2>
        {block.description ? <p className="mt-4 max-w-2xl text-muted-foreground">{block.description}</p> : null}
        {block.buttonLabel && block.buttonHref ? (
          <div className="mt-6">
            <Button asChild>
              <Link href={block.buttonHref.startsWith('/') ? `/${locale}${block.buttonHref}` : block.buttonHref}>{block.buttonLabel}</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
