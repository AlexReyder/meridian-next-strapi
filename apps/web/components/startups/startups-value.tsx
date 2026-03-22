import { Lightbulb, Presentation, Rocket, ArrowRight as ArrowRightIcon } from "lucide-react"

const reasons = [
  {
    icon: Lightbulb,
    title: "Когда идея ещё не собрана в продукт",
    description: "Помогаем превратить rough concept в понятную структуру экранов, сценариев и приоритетов."
  },
  {
    icon: Presentation,
    title: "Когда нужно показать продукт инвестору",
    description: "Собираем investor-ready prototype и визуальную подачу, которая делает продукт понятнее и убедительнее."
  },
  {
    icon: Rocket,
    title: "Когда нужно запустить MVP быстрее",
    description: "Помогаем убрать лишнее, собрать основу интерфейсов и сфокусироваться на ключевых сценариях."
  },
  {
    icon: ArrowRightIcon,
    title: "Когда разработке нужен ясный следующий шаг",
    description: "Готовим материалы и интерфейсную логику так, чтобы команде было проще перейти к следующему этапу."
  }
]

export function StartupsValue() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Зачем приходят</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-6">
          Зачем стартапы приходят в Atelier Meridian
        </h2>

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
          На раннем этапе проекту редко нужен просто "дизайн". Чаще всего не хватает ясности: 
          что именно показать, какие сценарии важны, как собрать MVP, как упаковать продукт 
          для инвестора, клиента или разработки. Именно здесь мы подключаемся.
        </p>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div 
              key={reason.title}
              className="bg-card rounded border border-border/60 p-6 hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-5">
                <reason.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-serif text-lg font-light text-foreground mb-3 leading-snug">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
