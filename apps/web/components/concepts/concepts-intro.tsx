import { Layers, PenTool, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: Layers,
    title: "Сначала структура",
    description: "Цели, роли, сценарии и логика продукта",
  },
  {
    icon: PenTool,
    title: "Потом интерфейс",
    description: "Визуальное направление и экранная система",
  },
  {
    icon: ArrowRight,
    title: "Затем понятный следующий шаг",
    description: "Материалы для согласования и разработки",
  },
]

export function ConceptsIntro() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Title and Text */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-[1px] bg-signature-cobalt" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                О концептах
              </span>
            </div>
            
            <h2 className="font-serif text-2xl lg:text-3xl xl:text-4xl font-light leading-tight text-foreground mb-6">
              Что показывают эти концепты
            </h2>
            
            <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
              Каждый концепт — это пример того, как мы собираем продуктовую логику, роли, 
              сценарии, структуру экранов и визуальное направление до начала разработки. 
              Эти материалы помогают показать идею, согласовать решение и перейти к 
              следующему этапу работы.
            </p>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="group flex items-start gap-4 p-5 bg-background border border-border/60 rounded-sm hover:border-foreground/20 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-muted flex items-center justify-center">
                  <pillar.icon className="h-5 w-5 text-foreground/70" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-signature-cobalt font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-medium text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
