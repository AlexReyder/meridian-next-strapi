import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const solutions = [
  {
    id: "website",
    title: "Дизайн сайтов и корпоративных сайтов",
    intro: "Для компаний, брендов и продуктов, которым нужен новый сайт или корпоративный сайт с сильной структурой и визуальной подачей.",
    whenRelevant: [
      "запускается новый сайт",
      "нужен корпоративный сайт",
      "нужна product / brand presentation",
      "сайт должен выглядеть сильнее и понятнее"
    ],
    whatWeClarify: [
      "структура сайта",
      "иерархия контента",
      "пользовательские сценарии",
      "ключевые страницы",
      "visual direction"
    ],
    whatClientReceives: [
      "структура сайта",
      "карта ключевых экранов",
      "prototype или визуальная концепция",
      "UI-направление",
      "материалы для следующего этапа"
    ],
    primaryCta: { label: "Получить предложение", href: "/get-proposal" },
    secondaryCta: null
  },
  {
    id: "redesign",
    title: "Редизайн сайта и UX/UI-улучшение",
    intro: "Для проектов, где сайт уже существует, но не даёт нужной ясности, доверия или конверсии.",
    whenRelevant: [
      "нужен редизайн сайта",
      "UX устарел или перегружен",
      "структура слабая",
      "нужна более сильная подача"
    ],
    whatWeClarify: [
      "что мешает восприятию",
      "какие страницы и блоки перегружают путь",
      "как пересобрать структуру",
      "как усилить interface clarity"
    ],
    whatClientReceives: [
      "новая структура",
      "пересобранная логика страниц",
      "redesign-концепция",
      "ключевые обновлённые интерфейсы",
      "материалы для реализации"
    ],
    primaryCta: { label: "Получить предложение", href: "/get-proposal" },
    secondaryCta: null
  },
  {
    id: "b2b",
    title: "Digital-системы и B2B-платформы",
    intro: "Для компаний, которым нужно превратить сложный workflow в понятную digital-систему.",
    whenRelevant: [
      "много ролей",
      "сложные процессы",
      "нужен dashboard / admin / B2B interface",
      "система должна быть рабочей, а не просто красивой"
    ],
    whatWeClarify: [
      "роли и права доступа",
      "пользовательские сценарии",
      "модульную структуру",
      "экранную логику",
      "приоритеты интерфейса"
    ],
    whatClientReceives: [
      "архитектуру системы",
      "карту ролей",
      "пользовательские сценарии",
      "экранную матрицу",
      "prototype ключевых экранов",
      "материалы для передачи в разработку"
    ],
    primaryCta: { label: "Получить предложение", href: "/get-proposal" },
    secondaryCta: null
  },
  {
    id: "portal",
    title: "Клиентские порталы и внутренние интерфейсы",
    intro: "Для client portals, account areas и внутренних интерфейсов, где важны навигация, понятность и удобство ежедневной работы.",
    whenRelevant: [
      "сложный кабинет",
      "непонятная навигация",
      "слабая структура внутренних экранов",
      "сервис выглядит фрагментированно"
    ],
    whatWeClarify: [
      "путь пользователя",
      "структуру разделов",
      "точки принятия решений",
      "UI-логику работы с данными и действиями"
    ],
    whatClientReceives: [
      "карта сценариев",
      "новая структура портала",
      "ключевые интерфейсные решения",
      "prototype flow",
      "основа для redesign / delivery"
    ],
    primaryCta: { label: "Получить предложение", href: "/get-proposal" },
    secondaryCta: null
  },
  {
    id: "mobile",
    title: "Мобильные приложения",
    intro: "Для mobile apps, где важны понятный user flow, platform fit и сильная визуальная подача.",
    whenRelevant: [
      "нужен дизайн нового приложения",
      "нужен redesign mobile app",
      "важно подготовить MVP или investor-ready concept",
      "нужен более сильный mobile UX/UI"
    ],
    whatWeClarify: [
      "mobile user flow",
      "структуру экранов",
      "приоритеты сценариев",
      "visual direction",
      "platform conventions"
    ],
    whatClientReceives: [
      "структуру приложения",
      "user flows",
      "ключевые mobile screens",
      "prototype",
      "материалы для следующего этапа"
    ],
    primaryCta: { label: "Получить предложение", href: "/get-proposal" },
    secondaryCta: null
  },
  {
    id: "presale",
    title: "Presale, prototype и white-label поддержка",
    intro: "Для партнёров, integrators и product-команд, которым нужно быстро подготовить strong concept, prototype или client-facing presentation.",
    whenRelevant: [
      "нужен presale-пакет",
      "важно выиграть pitch",
      "нужен white-label партнёр",
      "не хватает внутренних UX/UI-ресурсов"
    ],
    whatWeClarify: [
      "как показать решение",
      "какие экраны критичны",
      "как упаковать продуктовую идею",
      "как передать решение клиенту или dev team"
    ],
    whatClientReceives: [
      "concept package",
      "prototype",
      "ключевые интерфейсы",
      "premium visual packaging",
      "материалы для обсуждения или передачи в разработку"
    ],
    primaryCta: { label: "Для партнёров", href: "/for-agencies" },
    secondaryCta: { label: "Получить предложение", href: "/get-proposal" }
  }
]

export function SolutionDetails() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="space-y-24 lg:space-y-32">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              id={solution.id}
              className="scroll-mt-24"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] font-medium text-accent/60 tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-border/60" />
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left: Content */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-light leading-snug text-foreground">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    {solution.intro}
                  </p>

                  {/* When Relevant */}
                  <div className="mt-8">
                    <h4 className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-4">
                      Когда актуально
                    </h4>
                    <ul className="space-y-2">
                      {solution.whenRelevant.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-accent/50 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: What We Clarify & Results */}
                <div className="space-y-8">
                  {/* What We Clarify */}
                  <div className="bg-secondary/30 rounded border border-border/40 p-6">
                    <h4 className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-4">
                      Что помогаем прояснить
                    </h4>
                    <ul className="space-y-2.5">
                      {solution.whatWeClarify.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What Client Receives */}
                  <div className="bg-card rounded border border-border/60 p-6">
                    <h4 className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-4">
                      Что получает клиент
                    </h4>
                    <ul className="space-y-2.5">
                      {solution.whatClientReceives.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                          <Check className="w-4 h-4 text-accent/70 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={solution.primaryCta.href}
                      className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.15em] px-6 h-10 rounded-md font-medium transition-colors"
                    >
                      {solution.primaryCta.label}
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                    {solution.secondaryCta && (
                      <Link
                        href={solution.secondaryCta.href}
                        className="inline-flex items-center justify-center border border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.15em] px-6 h-10 rounded-md font-medium transition-colors"
                      >
                        {solution.secondaryCta.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
