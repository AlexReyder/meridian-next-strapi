import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const recommendations = [
  {
    condition: "Если у вас ещё нет чёткой структуры продукта",
    problem: "Идея есть, но непонятно, как разложить её на роли, экраны и сценарии использования",
    solution: "Product Framing Sprint поможет структурировать продукт до начала дизайна или разработки",
    package: "Product Framing Sprint",
    href: "/get-proposal?package=framing",
  },
  {
    condition: "Если нужно показать продукт или передать в разработку",
    problem: "Нужен прототип для инвесторов, презентации или интерфейсы, готовые к разработке",
    solution: "Build-Ready Prototype включает полный набор: сценарии, экраны, прототип, сводку для разработки",
    package: "Build-Ready Prototype",
    href: "/get-proposal?package=prototype",
  },
  {
    condition: "Если вы агентство или integrator",
    problem: "Нужен партнёр для продуктовой и UX-работы без найма штатной команды",
    solution: "White-Label Partner Desk — партнёрская модель с быстрой упаковкой и async-поддержкой",
    package: "White-Label Partner Desk",
    href: "/get-proposal?package=partner",
  },
]

export function ChoosingGuide() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Рекомендации</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground text-balance">
            Как понять, какой формат подходит вам
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {recommendations.map((rec, index) => (
            <div 
              key={rec.package}
              className="group relative bg-card border border-border/60 rounded-sm p-6 lg:p-8 hover:border-foreground/20 transition-colors"
            >
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                <span className="text-xs uppercase tracking-wider text-muted-foreground/50">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="pr-8">
                <p className="font-serif text-lg text-foreground leading-snug mb-4">
                  {rec.condition}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Ситуация</p>
                    <p className="text-sm text-foreground/70">{rec.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Решение</p>
                    <p className="text-sm text-foreground/70">{rec.solution}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <p className="text-xs uppercase tracking-wider text-accent mb-3">
                    Рекомендуем
                  </p>
                  <p className="font-serif text-base text-foreground mb-4">{rec.package}</p>
                  <Button 
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-foreground/15 text-foreground hover:bg-foreground/5 text-[10px] uppercase tracking-wider"
                  >
                    <Link href={rec.href}>
                      Выбрать
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
