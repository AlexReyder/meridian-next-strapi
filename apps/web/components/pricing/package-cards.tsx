import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const packages = [
  {
    id: "framing",
    name: "Product Framing Sprint",
    subtitle: "Структурирование продукта до начала дизайна и разработки",
    price: "$5,400",
    priceNote: "от",
    timeline: "Ориентир: 1–2 недели",
    forWhom: "Для founders, startup-команд и B2B-проектов, которым нужно сначала собрать продуктовую логику, роли, сценарии и scope.",
    includes: [
      "Структурная рамка проекта",
      "Роли и права доступа",
      "Ключевые пользовательские сценарии",
      "Экранная карта продукта",
      "Приоритеты и логика модулей",
      "Рекомендации по следующему этапу",
    ],
    cta: "Выбрать этот формат",
    ctaHref: "/get-proposal?package=framing",
    secondaryLink: "Подходит для старта продукта",
    secondaryHref: "/for-startups",
    featured: false,
  },
  {
    id: "prototype",
    name: "Build-Ready Prototype",
    subtitle: "Прототип и ключевые интерфейсы для презентации или передачи в разработку",
    price: "$6,900",
    priceNote: "от",
    timeline: "Ориентир: 2–4 недели",
    forWhom: "Для команд, которым нужен premium-прототип, понятная структура экранов и материалы, которые можно использовать для презентации или передачи в разработку.",
    includes: [
      "Продуктовая логика и user flows",
      "Набор ключевых интерфейсов",
      "Интерактивный прототип",
      "Визуальное направление",
      "Базовая система компонентов",
      "Сводка для передачи в разработку",
    ],
    cta: "Получить предложение",
    ctaHref: "/get-proposal?package=prototype",
    secondaryLink: "Посмотреть метод работы",
    secondaryHref: "/method",
    featured: true,
  },
  {
    id: "partner",
    name: "White-Label Partner Desk",
    subtitle: "Партнёрский формат для агентств, integrators и delivery-команд",
    price: "$6,500",
    priceNote: "от",
    timeline: "По scope проекта / возможен постоянный формат",
    forWhom: "Для партнёров, integrators и digital-команд, которым нужен внешний premium-партнёр по product architecture, UX и интерфейсам.",
    includes: [
      "White-label поддержка",
      "Упаковка концепций и presale-материалов",
      "Prototype и interface delivery",
      "Async-взаимодействие",
      "Структурные материалы для клиента",
      "Сводка для команды разработки",
    ],
    cta: "Обсудить формат",
    ctaHref: "/get-proposal?package=partner",
    secondaryLink: "Подробнее для партнёров",
    secondaryHref: "/for-agencies",
    featured: false,
  },
]

export function PackageCards() {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Форматы работы</p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Три формата работы
          </h2>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            Выберите подходящий формат — или расскажите о проекте, и мы порекомендуем оптимальный.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              id={pkg.id}
              className={`relative flex flex-col bg-card border rounded-sm overflow-hidden transition-all ${
                pkg.featured 
                  ? "border-foreground/30 shadow-lg lg:scale-[1.02]" 
                  : "border-border/60 hover:border-foreground/20"
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
              )}
              
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-serif text-xl lg:text-2xl font-light text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-border/50">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {pkg.priceNote}
                  </p>
                  <p className="text-3xl lg:text-4xl font-light text-foreground">
                    {pkg.price}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {pkg.timeline}
                  </p>
                </div>

                {/* For whom */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    Для кого
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {pkg.forWhom}
                  </p>
                </div>

                {/* Includes */}
                <div className="mb-8 flex-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    Что входит
                  </p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <Check className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="mt-auto space-y-3">
                  <Button 
                    asChild
                    className={`w-full h-11 text-[11px] uppercase tracking-[0.12em] ${
                      pkg.featured
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                    }`}
                  >
                    <Link href={pkg.ctaHref}>
                      {pkg.cta}
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Link 
                    href={pkg.secondaryHref}
                    className="block text-center text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {pkg.secondaryLink}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
