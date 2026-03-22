import { Presentation, Palette, Layout, Send } from "lucide-react"

const values = [
  {
    icon: Presentation,
    title: "Presale и pitch support",
    problem: "Нужно быстро упаковать концепцию или подготовить client-facing материалы для тендера.",
    whenRelevant: "Pitch, тендер, presale-этап, client presentation.",
    whyHelpful: "Получаете premium concept package, который усиливает вашу позицию и ускоряет согласование."
  },
  {
    icon: Palette,
    title: "White-label интерфейсная работа",
    problem: "Нужен внешний UX/UI-партнёр, который работает под вашим брендом или в тени.",
    whenRelevant: "Агентская модель, субподряд, white-label delivery.",
    whyHelpful: "Ваш клиент видит только ваш бренд. Мы — невидимый premium-слой."
  },
  {
    icon: Layout,
    title: "Product structure before development",
    problem: "Перед стартом разработки нужно собрать логику продукта, роли, сценарии, экранную карту.",
    whenRelevant: "Перед kickoff, перед передачей dev-команде, после discovery.",
    whyHelpful: "Разработка стартует на понятном фундаменте — без хаоса и переделок."
  },
  {
    icon: Send,
    title: "Передача в разработку без хаоса",
    problem: "Дизайн готов, но dev-команда не понимает логику, сценарии или взаимосвязи экранов.",
    whenRelevant: "Перед стартом разработки, после завершения UI.",
    whyHelpful: "Структурированные материалы для dev-команды — понятно, что делать и почему."
  }
]

export function AgenciesValue() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Signature eyebrow accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center">
            <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
            <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Value</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-14">
          Где мы усиливаем партнёрские проекты
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="relative bg-card rounded-sm border border-border p-6 lg:p-8 hover:border-foreground/20 transition-colors"
            >
              {index === 0 && (
                <div className="absolute top-0 left-0">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
                  <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
                </div>
              )}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-light text-foreground pt-2">
                  {value.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Задача</span>
                  <p className="mt-1 text-sm text-foreground/80 leading-relaxed">{value.problem}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Когда актуально</span>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{value.whenRelevant}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Почему удобно</span>
                  <p className="mt-1 text-sm text-foreground/80 leading-relaxed">{value.whyHelpful}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
