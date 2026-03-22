import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Upload } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Signature divider accent */}
          <div className="flex items-center justify-center gap-0.5 mb-8">
            <div className="w-12 h-[1px] bg-border" />
            <div className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
            <div className="h-[2px] w-2 bg-signature-brass rounded-full" />
            <div className="w-12 h-[1px] bg-border" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Закажите дизайн сайта, digital-системы или мобильного приложения
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Опишите проект — сайт, портал, B2B-платформу или mobile app. 
            Мы подготовим структурированное предложение с форматом работы, сроками и стоимостью.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA with signature accent */}
            <div className="relative group">
              <Button 
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 text-sm uppercase tracking-wider px-10 h-14"
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
              className="border-foreground/20 text-foreground hover:bg-foreground/5 text-sm uppercase tracking-wider px-10 h-14"
            >
              <Link href="/pricing">
                Посмотреть цены
              </Link>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Для сайтов, корпоративных порталов, B2B-систем, dashboards и mobile apps
          </p>
        </div>
      </div>
    </section>
  )
}
