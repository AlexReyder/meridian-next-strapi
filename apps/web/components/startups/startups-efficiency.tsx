import { Zap, RefreshCw, Users, Target } from "lucide-react"

const pillars = [
  {
    icon: Zap,
    title: "Быстрее за счёт структуры",
    description: "Чёткая методология и фокус на главном — без растянутых discovery-фаз и лишних этапов."
  },
  {
    icon: RefreshCw,
    title: "Меньше лишних итераций",
    description: "Правильно заданные вопросы в начале — меньше переделок в процессе."
  },
  {
    icon: Users,
    title: "Senior-подход без лишнего overhead",
    description: "Работа напрямую с senior-специалистами — без лишних слоёв менеджмента и растянутой коммуникации."
  },
  {
    icon: Target,
    title: "Удобно для pitch, MVP и следующего build-этапа",
    description: "Результат, который сразу можно показать, обсудить и передать в разработку."
  }
]

export function StartupsEfficiency() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Подход</span>
        </div>
        
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground mb-6">
            Почему это удобнее, чем длинный agency-процесс
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Стартапам редко нужен тяжёлый процесс с большим количеством созвонов, слоёв 
            и растянутой delivery-моделью. Им нужна ясность, скорость, приоритеты и сильная подача.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title}
              className="p-6 bg-card border border-border/60 rounded-sm hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-5">
                <pillar.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-serif text-lg font-light text-foreground mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
