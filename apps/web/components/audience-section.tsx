import { ArrowRight } from "lucide-react"

const audiences = [
  {
    title: "Founders и startup-команды",
    problem: "Нужен дизайн сайта, landing page или mobile app для презентации инвестору",
    solution: "Превращаем идею в структурированный прототип сайта или приложения",
    result: "Investor-ready визуализация и понятный scope для первой версии",
  },
  {
    title: "Агентства и integrators",
    problem: "Нужен дизайн сайта, портала или системы для клиента, но нет ресурсов",
    solution: "White-label дизайн сайтов, mobile apps, B2B-систем под вашим брендом",
    result: "Готовый deliverable для вашего клиента без расширения штата",
  },
  {
    title: "B2B-команды и enterprise",
    problem: "Нужен дизайн портала, dashboard или внутренней системы с ясной логикой",
    solution: "Проектируем интерфейсы B2B-платформ, порталов и корпоративных систем",
    result: "Документация и прототип для уверенного старта разработки",
  },
]

export function AudienceSection() {
  return (
    <section id="startups" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          {/* Signature eyebrow accent */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
              <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Для кого</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Кому мы помогаем
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={audience.title}
              className="group relative flex flex-col p-8 lg:p-10 bg-card border border-border rounded-sm hover:border-foreground/20 transition-all duration-300 h-full"
            >
              {/* Accent edge on first card */}
              {index === 0 && (
                <div className="absolute top-0 left-0">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
                  <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
                </div>
              )}
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-8 min-h-[3.5rem] lg:min-h-[4rem]">
                {audience.title}
              </h3>
              
              <div className="flex-1 space-y-6">
                <div className="min-h-[5rem]">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Проблема</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.problem}
                  </p>
                </div>
                
                <div className="min-h-[5rem]">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Что упрощаем</p>
                  <p className="text-foreground leading-relaxed">
                    {audience.solution}
                  </p>
                </div>
                
                <div className="min-h-[4rem]">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Результат</p>
                  <p className="text-foreground leading-relaxed">
                    {audience.result}
                  </p>
                </div>
              </div>

              <a 
                href="#proposal" 
                className="inline-flex items-center gap-2 mt-8 pt-6 border-t border-border/60 text-sm text-foreground hover:text-signature-cobalt transition-colors group/link"
              >
                <span>Получить предложение</span>
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
