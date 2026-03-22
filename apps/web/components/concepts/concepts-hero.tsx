import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

const tags = [
  "B2B-системы",
  "Mobile apps",
  "Websites",
  "SaaS",
  "Portals & dashboards",
  "Startup landing pages",
  "Booking platforms",
  "Prototype",
  "Материалы для передачи в разработку",
]

export function ConceptsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
        {/* Eyebrow with signature marks */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-1">
            <div className="w-2 h-[3px] bg-signature-cobalt rounded-full" />
            <div className="w-1 h-[3px] bg-signature-brass rounded-full" />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Studio Portfolio
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] text-foreground mb-8 max-w-4xl">
          Концепты студии
        </h1>

        {/* Subheadline */}
        <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-3xl mb-6">
          Демонстрационные проекты, показывающие, как Atelier Meridian подходит к сайтам, 
          digital-системам, web-продуктам, клиентским порталам и мобильным приложениям — 
          от продуктовой структуры до визуальной подачи и подготовки к разработке.
        </p>

        {/* Support line */}
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-10">
          Это не клиентские кейсы, а студийные концепты, созданные для демонстрации подхода, 
          уровня проработки и качества материалов.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <Link
            href="/get-proposal"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-sm text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            <Clock className="h-4 w-4" />
            Получить предложение
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-foreground rounded-sm text-sm font-medium hover:border-foreground/40 transition-colors"
          >
            Посмотреть цены
          </Link>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className={`text-xs px-3 py-1.5 rounded-sm border transition-colors ${
                index === 0
                  ? "border-signature-cobalt/30 text-signature-cobalt bg-signature-cobalt/5"
                  : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground/70"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
