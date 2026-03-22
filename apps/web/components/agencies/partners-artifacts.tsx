import { FileText, GitBranch, Map, Smartphone, Palette, Send } from "lucide-react"

const artifacts = [
  {
    icon: FileText,
    title: "Структура проекта",
    support: "Помогает согласовать scope с клиентом"
  },
  {
    icon: GitBranch,
    title: "Пользовательские сценарии",
    support: "Показывает логику решения без лишнего шума"
  },
  {
    icon: Map,
    title: "Экранная карта продукта",
    support: "Делает работу команды понятнее"
  },
  {
    icon: Smartphone,
    title: "Интерактивный прототип",
    support: "Усиливает client-facing presentation"
  },
  {
    icon: Palette,
    title: "Визуальное направление",
    support: "Помогает перейти к следующему этапу"
  },
  {
    icon: Send,
    title: "Материалы для передачи в разработку",
    support: "Упрощает передачу в разработку"
  }
]

export function PartnersArtifacts() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Signature eyebrow accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center">
            <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
            <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Deliverables</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-14">
          Что получает партнёрская команда
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact, index) => (
            <div 
              key={artifact.title}
              className="relative bg-card rounded-sm border border-border p-6 hover:border-foreground/20 transition-colors"
            >
              {index === 0 && (
                <div className="absolute top-0 left-0">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
                  <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
                </div>
              )}
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                <artifact.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-serif text-lg font-light text-foreground mb-2">
                {artifact.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {artifact.support}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
