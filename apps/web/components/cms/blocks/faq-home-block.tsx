'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import type { FaqHomeBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'

export function FaqHomeBlockView({ block, locale }: { block: FaqHomeBlock; locale: SiteLocale }) {
  const isRtl = locale === 'ar'
  return (
    <section className="py-24 lg:py-32 bg-secondary/30" dir={isRtl ? 'rtl' : 'ltr'}><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl mb-16"><div className="flex items-center gap-3 mb-4"><div className="flex items-center">{isRtl ? <><span className="h-[2px] w-2 bg-signature-brass rounded-full" /><span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" /></> : <><span className="h-[2px] w-3 bg-signature-cobalt rounded-full" /><span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" /></>}</div><span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{block.eyebrow}</span></div><h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">{block.title}</h2></div><div className="max-w-3xl"><Accordion type="single" collapsible className="space-y-4">{block.items?.map((faq,index)=><AccordionItem key={faq.id ?? index} value={`item-${index}`} className="border border-border rounded-sm bg-card px-6 data-[state=open]:border-foreground/20"><AccordionTrigger className={`${isRtl ? 'text-right' : 'text-left'} font-serif text-lg text-foreground hover:no-underline py-5`}>{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></div></section>
  )
}
