import { ArrowDown } from "lucide-react"

const solutions = [
  {
    id: "website",
    title: "Дизайн сайтов и корпоративных сайтов",
    subtitle: "Для новых web-проектов, брендов и компаний, которым нужен сильный сайт с понятной структурой и premium подачей."
  },
  {
    id: "redesign",
    title: "Редизайн сайта и UX/UI-улучшение",
    subtitle: "Для случаев, когда сайт уже есть, но его нужно упростить, усилить визуально или перестроить по логике."
  },
  {
    id: "b2b",
    title: "Digital-системы и B2B-платформы",
    subtitle: "Для сложных интерфейсов, рабочих систем, dashboards и платформ, где важны роли, сценарии и структура."
  },
  {
    id: "portal",
    title: "Клиентские порталы и внутренние интерфейсы",
    subtitle: "Для кабинетов, service portals и operational tools, где нужно сделать продукт понятнее и удобнее."
  },
  {
    id: "mobile",
    title: "Мобильные приложения",
    subtitle: "Для mobile apps, где важны platform fit, сценарии и сильная interface-подача."
  },
  {
    id: "presale",
    title: "Presale, prototype и white-label поддержка",
    subtitle: "Для партнёров, integrators и команд, которым нужно быстро и убедительно упаковать решение для клиента или следующего этапа."
  }
]

export function SolutionsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Типы задач</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <a
              key={solution.id}
              href={`#${solution.id}`}
              className="group bg-card rounded border border-border/60 p-6 lg:p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col min-h-[220px]"
            >
              <h3 className="font-serif text-xl lg:text-[1.35rem] font-light leading-snug text-foreground group-hover:text-foreground/90 transition-colors">
                {solution.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                {solution.subtitle}
              </p>
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground group-hover:text-foreground/70 transition-colors">
                  Подробнее
                </span>
                <ArrowDown className="w-4 h-4 text-muted-foreground/50 group-hover:text-accent group-hover:translate-y-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
