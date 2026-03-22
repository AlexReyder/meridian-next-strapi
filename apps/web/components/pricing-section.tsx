import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const packages = [
  {
    name: "Product Framing Sprint",
    price: "от $5,400",
    description: "Структурирование продукта с нуля. Product framing, роли, core flows, экранная матрица.",
    includes: [
      "Структурная рамка проекта",
      "Карта ролей и прав",
      "Core user flows",
      "Экранная матрица",
      "Рекомендации по визуальному направлению",
    ],
    timeline: "2-3 недели",
  },
  {
    name: "Build-Ready Prototype",
    price: "от $6,900",
    description: "Полный цикл от идеи до прототипа. Всё для презентации инвестору или старта разработки.",
    includes: [
      "Всё из Framing Sprint",
      "Визуальное направление",
      "Интерактивный прототип",
      "Базовая система компонентов",
      "Материалы для передачи в разработку",
    ],
    timeline: "4-5 недель",
    featured: true,
  },
  {
    name: "White-Label Partner Desk",
    price: "от $6,500",
    description: "Для партнёров и integrators. Продуктовый дизайн под вашим брендом для ваших клиентов.",
    includes: [
      "Выделенный capacity",
      "White-label deliverables",
      "Прямая коммуникация",
      "Гибкий scope",
      "Приоритетное планирование",
    ],
    timeline: "Ongoing",
  },
]

export function PricingSection() {
  return (
    <section id="formats" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          {/* Signature eyebrow accent */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
              <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Packages</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Форматы работы
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.name}
              className={`relative p-8 lg:p-10 rounded-sm border transition-all duration-300 ${
                pkg.featured 
                  ? "bg-foreground text-background border-foreground" 
                  : "bg-card border-border hover:border-foreground/20"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-8 text-[10px] uppercase tracking-[0.15em] bg-gradient-to-r from-signature-cobalt to-signature-cobalt-soft text-white px-3 py-1 rounded-sm">
                  Популярный выбор
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`font-serif text-xl lg:text-2xl mb-2 ${pkg.featured ? "text-background" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm leading-relaxed ${pkg.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>
              </div>
              
              <div className="mb-8">
                <span className={`font-serif text-3xl lg:text-4xl ${pkg.featured ? "text-background" : "text-foreground"}`}>
                  {pkg.price}
                </span>
                <span className={`ml-2 text-sm ${pkg.featured ? "text-background/60" : "text-muted-foreground"}`}>
                  / {pkg.timeline}
                </span>
              </div>
              
              <ul className="space-y-3 mb-10">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${pkg.featured ? "text-signature-brass" : "text-signature-cobalt"}`} />
                    <span className={`text-sm ${pkg.featured ? "text-background/80" : "text-muted-foreground"}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full text-xs uppercase tracking-wider ${
                  pkg.featured 
                    ? "bg-background text-foreground hover:bg-background/90" 
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                Получить предложение
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
