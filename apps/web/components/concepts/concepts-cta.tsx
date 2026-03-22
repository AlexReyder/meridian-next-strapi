import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

export function ConceptsCta() {
  return (
    <section className="py-20 lg:py-28 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
        {/* Signature marks */}
        <div className="flex items-center justify-center gap-1 mb-8">
          <div className="w-3 h-[2px] bg-signature-cobalt rounded-full" />
          <div className="w-1.5 h-[2px] bg-signature-brass rounded-full" />
          <div className="w-1 h-[2px] bg-foreground/20 rounded-full" />
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground mb-6 text-balance">
          Хотите такой же уровень проработки для своего проекта?
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          Опишите задачу — мы предложим подходящий формат работы, ориентир по срокам и следующий шаг.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            href="/get-proposal"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-sm text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            <Clock className="h-4 w-4" />
            Получить предложение
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-sm text-sm font-medium hover:border-foreground/40 transition-colors"
          >
            Посмотреть цены
          </Link>
        </div>

        {/* Support line */}
        <p className="text-sm text-muted-foreground">
          Подходит для сайтов, digital-систем, client portals, dashboards, startup landing pages и mobile apps.
        </p>
      </div>
    </section>
  )
}
