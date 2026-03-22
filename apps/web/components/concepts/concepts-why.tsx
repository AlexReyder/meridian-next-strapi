import { Search, Layers, Monitor, FileText } from "lucide-react"

const pillars = [
  {
    icon: Search,
    title: "Показывают глубину проработки",
    description: "Каждый концепт содержит продуктовую логику, сценарии и структуру — не только визуальную подачу.",
  },
  {
    icon: Layers,
    title: "Демонстрируют продуктовую логику",
    description: "Роли, workflow, экранная архитектура и приоритеты — то, что стоит за каждым интерфейсом.",
  },
  {
    icon: Monitor,
    title: "Помогают понять уровень интерфейсной подачи",
    description: "Визуальное качество, типографика, spacing и внимание к деталям определяют восприятие продукта.",
  },
  {
    icon: FileText,
    title: "Дают представление о том, что получает клиент",
    description: "Prototype, структура, visual direction и материалы для передачи в разработку.",
  },
]

export function ConceptsWhy() {
  return (
    <section className="py-20 lg:py-28 bg-[#1a1816] text-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-[1px] bg-signature-brass" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-background/50">
              Зачем это важно
            </span>
          </div>
          
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-background mb-6">
            Зачем мы показываем студийные концепты
          </h2>
          
          <p className="text-lg text-background/70 leading-relaxed">
            Студийные концепты позволяют показать не только визуальный уровень, но и способ мышления. 
            Они помогают увидеть, как мы собираем продукт из целей, ролей, сценариев, экранной структуры 
            и interface-направления ещё до начала разработки.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="group relative p-6 lg:p-8 bg-background/5 border border-background/10 rounded-sm hover:bg-background/10 hover:border-background/20 transition-all"
            >
              {/* Signature accent on first card */}
              {index === 0 && (
                <div className="absolute top-0 left-0">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-background/10 flex items-center justify-center">
                  <pillar.icon className="h-5 w-5 text-background/60" />
                </div>
                
                <div>
                  <h3 className="text-base font-medium text-background mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-background/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
