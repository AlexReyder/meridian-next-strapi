import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { ProposalHomeBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'
import { getHomeIcon } from '@/components/cms/blocks/home-icon-map'

export function ProposalHomeBlockView({ block, locale }: { block: ProposalHomeBlock; locale: SiteLocale }) {
  const isRtl = locale === 'ar'
  return (
    <section id={block.sectionId || 'proposal'} className="py-24 lg:py-32" dir={isRtl ? 'rtl' : 'ltr'}><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="bg-card border border-border rounded-sm p-10 lg:p-16"><div className="max-w-3xl mx-auto text-center"><h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">{block.title}</h2><p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">{block.description}</p></div><div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">{block.items?.map((step,index)=>{const Icon=getHomeIcon(step.icon); return <div key={step.id ?? `${step.title}-${index}`} className="text-center"><div className="relative inline-flex"><div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto"><Icon className="h-6 w-6 text-foreground" /></div>{index < (block.items?.length || 0)-1 && <div className={`hidden md:block absolute top-1/2 ${isRtl ? 'right-full' : 'left-full'} w-full h-px bg-border -translate-y-1/2`} />}</div><h3 className="mt-6 font-serif text-lg text-foreground">{step.title}</h3><p className="mt-2 text-sm text-muted-foreground">{step.description}</p></div>})}</div><div className="mt-16 text-center">{block.buttonHref ? <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 text-sm uppercase tracking-wider px-10 h-14"><Link href={block.buttonHref}>{isRtl ? <ArrowLeft className="ml-2 h-4 w-4" /> : null}{block.buttonLabel}{!isRtl ? <ArrowRight className="ml-2 h-4 w-4" /> : null}</Link></Button> : null}{block.note ? <p className="mt-4 text-sm text-muted-foreground">{block.note}</p> : null}</div></div></div></section>
  )
}
