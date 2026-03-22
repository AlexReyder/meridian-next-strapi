import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const trustLabels = [
  "Структурированная работа",
  "Готовность к разработке",
  "Партнёрский формат",
  "Прямое взаимодействие",
]

export function PricingHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Signature eyebrow accent */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="flex items-center">
              <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
              <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Форматы и стоимость</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light leading-[1.08] tracking-tight text-foreground text-balance">
            Цены и форматы работы
          </h1>
          
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Эти форматы подходят для проектов разного типа — от дизайна сайта или редизайна корпоративного сайта 
            до mobile app, клиентского портала или интерфейса сложной B2B-системы.
          </p>
          
          <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed max-w-2xl">
            Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями. 
            Сначала структура и объём — потом prototype и материалы для разработки.
          </p>

          {/* Trust labels */}
          <div className="mt-10 flex flex-wrap gap-3">
            {trustLabels.map((label) => (
              <span 
                key={label}
                className="inline-flex items-center px-4 py-2 bg-secondary/60 border border-border/50 rounded-sm text-xs uppercase tracking-wider text-foreground/70"
              >
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Button 
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.15em] px-7 h-12"
              >
                <Link href="/get-proposal">
                  Получить предложение
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-signature-cobalt to-signature-brass rounded-full transition-all duration-300 group-hover:w-1/2" />
            </div>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.15em] px-7 h-12"
            >
              <Link href="/method">Посмотреть метод</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
