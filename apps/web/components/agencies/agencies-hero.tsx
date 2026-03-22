"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const partnerTags = [
  "White-label",
  "Presale support",
  "Сайты",
  "Digital-системы",
  "Dashboards",
  "Portals",
  "Mobile apps",
  "Передача в разработку"
]

export function AgenciesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Signature eyebrow accent */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="flex items-center">
              <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
              <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Для партнёров</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light leading-[1.08] tracking-tight text-foreground text-balance">
            Для партнёров, которым нужен внешний <span className="font-medium">premium-партнёр</span> по интерфейсам и продуктовой структуре
          </h1>
          
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Подключаемся как внешний premium-партнёр для агентств, integrators и delivery-команд, 
            когда проекту нужны ясная продуктовая структура, сильный интерфейс и понятная передача 
            в разработку — будь то сайт, client portal, dashboard, digital-система или mobile app.
          </p>

          <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed">
            Подходит для white-label delivery, presale, redesign, сложных B2B-интерфейсов и client-facing product work.
          </p>

          {/* Partner Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {partnerTags.map((tag) => (
              <span 
                key={tag}
                className="inline-flex items-center px-3 py-1.5 bg-secondary/60 border border-border/50 rounded-sm text-[10px] uppercase tracking-wider text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Link 
                href="/get-proposal"
                className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.15em] px-7 h-12 rounded-md font-medium transition-colors"
              >
                Получить предложение
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-signature-cobalt to-signature-brass rounded-full transition-all duration-300 group-hover:w-1/2" />
            </div>
            <Link 
              href="/pricing"
              className="inline-flex items-center justify-center border border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.15em] px-7 h-12 rounded-md font-medium transition-colors"
            >
              Посмотреть цены
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
