const projects = [
  {
    title: "Сайты и корпоративные сайты",
    explanation: "От лендингов до сложных корпоративных сайтов с multiple user journeys.",
    useCase: "Клиенту нужен сильный сайт, а у вас нет внутренней UX/UI-команды или она занята.",
    output: "Структура, визуальное направление, prototype, build-ready интерфейсы."
  },
  {
    title: "Редизайн сайта и UX/UI-улучшение",
    explanation: "Переработка существующего сайта — от логики до визуала.",
    useCase: "Сайт клиента устарел, но нужно сохранить continuity и улучшить UX.",
    output: "UX-анализ, обновлённая структура, новый визуал, prototype."
  },
  {
    title: "Digital-системы и B2B-платформы",
    explanation: "Сложные интерфейсы с ролями, сценариями, модулями.",
    useCase: "Проект integrator-уровня, где важно собрать логику до разработки.",
    output: "Ролевая модель, экранная карта, ключевые интерфейсы, материалы для dev."
  },
  {
    title: "Клиентские порталы и dashboards",
    explanation: "Service portals, кабинеты, operational dashboards.",
    useCase: "Нужно сделать сложный инструмент понятным для конечного пользователя.",
    output: "Структура, user flows, ключевые экраны, prototype."
  },
  {
    title: "Mobile apps",
    explanation: "iOS/Android приложения с фокусом на UX и platform fit.",
    useCase: "Мобильное приложение для клиента, нужен premium interface layer.",
    output: "Flows, UI kit, prototype, build-ready экраны."
  },
  {
    title: "Прототипы для presale и client presentation",
    explanation: "Быстрая упаковка концепции в убедительный prototype.",
    useCase: "Тендер, pitch, presale — нужно показать решение до старта разработки.",
    output: "Concept package, интерактивный prototype, presentation materials."
  }
]

export function AgenciesProjects() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Signature eyebrow accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center">
            <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
            <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Типы проектов</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-14">
          С какими проектами подключаемся
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="relative bg-card rounded-sm border border-border p-6 lg:p-8 hover:border-foreground/20 transition-colors"
            >
              {index === 0 && (
                <div className="absolute top-0 left-0">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
                  <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
                </div>
              )}
              <h3 className="font-serif text-lg lg:text-xl font-light text-foreground mb-4">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.explanation}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-border/50">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">Типичный кейс</span>
                  <p className="mt-1 text-xs text-foreground/70 leading-relaxed">{project.useCase}</p>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">Output</span>
                  <p className="mt-1 text-xs text-foreground/70 leading-relaxed">{project.output}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
