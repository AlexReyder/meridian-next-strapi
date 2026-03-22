import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PricingFinalCta() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Следующий шаг</span>
            <span className="h-px w-8 bg-accent" />
          </div>
          
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Закажите дизайн сайта, системы или приложения
          </h2>
          
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Опишите проект — сайт, портал, B2B-платформу или mobile app. 
            Мы предложим формат, сроки и стоимость.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.15em] px-8 h-12"
            >
              <Link href="/get-proposal">
                Получить предложение
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.15em] px-8 h-12"
            >
              <Link href="/">На главную</Link>
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-12 text-xs text-muted-foreground/60 uppercase tracking-wider">
            Для сайтов · Digital-систем · Порталов · Mobile apps
          </p>
        </div>
      </div>
    </section>
  )
}
