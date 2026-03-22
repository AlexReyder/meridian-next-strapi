import { FileText, GitBranch, Layout, Play, Palette, Package } from "lucide-react"

const artifacts = [
  {
    icon: FileText,
    title: "Структура проекта",
    support: "помогает собрать продукт по логике"
  },
  {
    icon: GitBranch,
    title: "Пользовательские сценарии",
    support: "показывает ключевые сценарии и приоритеты"
  },
  {
    icon: Layout,
    title: "Экранная карта продукта",
    support: "превращает идею в понятную систему экранов"
  },
  {
    icon: Play,
    title: "Интерактивный прототип",
    support: "даёт сильный prototype для обсуждения и показа"
  },
  {
    icon: Palette,
    title: "Визуальное направление",
    support: "задаёт визуальный характер продукта"
  },
  {
    icon: Package,
    title: "Материалы для передачи в разработку",
    support: "помогает перейти к следующему этапу разработки"
  }
]

export function StartupsArtifacts() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Результат</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-12">
          Что получает founder в результате
        </h2>

        {/* Artifacts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((item) => (
            <div 
              key={item.title}
              className="group p-6 lg:p-8 bg-card border border-border/60 rounded-sm hover:border-accent/40 transition-colors"
            >
              {/* Icon with elegant preview area */}
              <div className="relative w-full aspect-[16/10] bg-secondary/50 rounded-sm mb-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                <item.icon className="h-8 w-8 text-foreground/40" />
              </div>
              
              <h3 className="font-serif text-lg font-light text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.support}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
