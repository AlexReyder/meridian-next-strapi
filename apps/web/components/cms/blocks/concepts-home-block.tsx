'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { ConceptsHomeBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'

function ConceptCard({ concept, index, isRtl }: { concept: NonNullable<ConceptsHomeBlock['items']>[number]; index: number; isRtl: boolean }) {
  return (
    <div className="group relative flex-shrink-0 w-[88vw] sm:w-[520px] lg:w-[620px] bg-card border border-border rounded-sm overflow-hidden">
      {index === 0 && (
        <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} z-10`}>
          <div className={`absolute top-0 ${isRtl ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full'} w-4 h-[2px] bg-signature-cobalt`} />
          <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} h-4 w-[2px] bg-signature-cobalt rounded-b-full`} />
          <div className={`absolute top-[2px] ${isRtl ? 'right-4' : 'left-4'} w-2 h-[1.5px] bg-signature-brass/70 rounded-full`} />
        </div>
      )}
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] h-full">
        <div className="relative min-h-[260px] lg:min-h-[440px]">
          {concept.imageUrl ? <Image src={concept.imageUrl} alt={concept.imageAlt || concept.title} fill className="object-cover" sizes="(max-width: 1024px) 88vw, 340px" /> : null}
        </div>
        <div className="p-6 lg:p-8 flex flex-col">
          {concept.badge ? <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-5">{concept.badge}</span> : null}
          <h3 className="font-serif text-2xl lg:text-[1.95rem] leading-[1.18] text-foreground mb-6">{concept.title}</h3>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground flex-1">
            <div><p className="text-xs uppercase tracking-[0.14em] text-foreground/60 mb-2">{concept.challengeLabel}</p><p>{concept.challenge}</p></div>
            <div><p className="text-xs uppercase tracking-[0.14em] text-foreground/60 mb-2">{concept.structuredLabel}</p><p>{concept.structured}</p></div>
            <div><p className="text-xs uppercase tracking-[0.14em] text-foreground/60 mb-2">{concept.deliveredLabel}</p><p>{concept.delivered}</p></div>
          </div>
          <div className="mt-8 pt-6 border-t border-border/60">
            <Link href="/concepts" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-signature-cobalt transition-colors">{isRtl ? <ArrowLeft className="h-4 w-4" /> : null}<span>{isRtl ? 'عرض المفهوم' : 'Посмотреть концепт'}</span>{!isRtl ? <ArrowUpRight className="h-4 w-4" /> : null}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ConceptsHomeBlockView({ block, locale }: { block: ConceptsHomeBlock; locale: SiteLocale }) {
  const isRtl = locale === 'ar'
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(True)

  const updateButtons = useCallback(() => {
    const node = scrollRef.current
    if (!node) return
    const tolerance = 4
    setCanScrollPrev(node.scrollLeft > tolerance)
    setCanScrollNext(node.scrollLeft + node.clientWidth < node.scrollWidth - tolerance)
  }, [])

  useEffect(() => {
    updateButtons()
    const node = scrollRef.current
    if (!node) return
    node.addEventListener('scroll', updateButtons, { passive: true })
    window.addEventListener('resize', updateButtons)
    return () => {
      node.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [updateButtons])

  const scrollByCard = (direction: 'prev' | 'next') => {
    const node = scrollRef.current
    if (!node) return
    const amount = Math.round(node.clientWidth * 0.82)
    const delta = direction === 'next' ? amount : -amount
    node.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4"><div className="flex items-center">{isRtl ? <><span className="h-[2px] w-2 bg-signature-brass rounded-full" /><span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" /></> : <><span className="h-[2px] w-3 bg-signature-cobalt rounded-full" /><span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" /></>}</div><span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{block.eyebrow}</span></div>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">{block.title}</h2>
          </div>
          <div className="flex items-center gap-3 self-start lg:self-end">
            <button type="button" onClick={() => scrollByCard(isRtl ? 'next' : 'prev')} disabled={!canScrollPrev} className="w-11 h-11 rounded-full border border-border bg-card text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:border-foreground/20 transition-colors flex items-center justify-center">{isRtl ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}</button>
            <button type="button" onClick={() => scrollByCard(isRtl ? 'prev' : 'next')} disabled={!canScrollNext} className="w-11 h-11 rounded-full border border-border bg-card text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:border-foreground/20 transition-colors flex items-center justify-center">{isRtl ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}</button>
          </div>
        </div>
      </div>
      <div ref={scrollRef} className="overflow-x-auto no-scrollbar px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="flex gap-6 w-max pb-2">{block.items?.map((concept,index)=><ConceptCard key={concept.id ?? `${concept.title}-${index}`} concept={concept} index={index} isRtl={isRtl} />)}</div></div></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">{block.ctaHref ? <Link href={block.ctaHref} className="inline-flex items-center gap-2 text-sm text-foreground hover:text-signature-cobalt transition-colors">{isRtl ? <ArrowLeft className="h-4 w-4" /> : null}<span>{block.ctaLabel}</span>{!isRtl ? <ArrowUpRight className="h-4 w-4" /> : null}</Link> : null}</div>
    </section>
  )
}
