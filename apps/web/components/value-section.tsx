import { TrendingUp, Trophy, Code } from "lucide-react"

const outcomes = [
  {
    label: "Raise",
    labelRu: "Привлечь инвестиции",
    description: "Investor-ready prototype сайта, web-продукта или mobile app. Визуализация, которая говорит на языке инвестора.",
    icon: TrendingUp,
  },
  {
    label: "Win",
    labelRu: "Выиграть сделку",
    description: "Presale материалы для сложных B2B-сделок. Понятная архитектура системы или портала, которая убеждает enterprise-клиентов.",
    icon: Trophy,
  },
  {
    label: "Build",
    labelRu: "Передать в разработку",
    description: "Build-ready дизайн сайта, системы или приложения. Разработчики понимают, что делать, без лишних вопросов.",
    icon: Code,
  },
]

export function ValueSection() {
  return (
    <section className="py-20 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          {/* Signature eyebrow accent */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
              <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями.
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Для проектов, которые нужно не просто нарисовать, а объяснить, согласовать и запустить
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {outcomes.map((outcome, index) => (
            <div 
              key={outcome.label} 
              className="group relative p-8 lg:p-10 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors duration-300"
            >
              {/* Signature accent edge on first card */}
              {index === 0 && (
                <div className="absolute top-0 left-0">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
                  <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
                </div>
              )}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <outcome.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.15em] text-signature-cobalt font-medium">
                    {outcome.label}
                  </span>
                  <span className="block text-lg font-serif text-foreground">
                    {outcome.labelRu}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
