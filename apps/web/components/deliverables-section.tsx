import { FileText, Users, GitBranch, LayoutGrid, Palette, MousePointer, Layers, FileCheck } from "lucide-react"

const deliverables = [
  {
    title: "Структурная рамка проекта",
    description: "Цели, контекст, границы scope — одним документом",
    icon: FileText,
  },
  {
    title: "Карта ролей и прав доступа",
    description: "Кто видит что и почему. Структура до проектирования экранов",
    icon: Users,
  },
  {
    title: "Core User Flows",
    description: "Основные сценарии использования в деталях",
    icon: GitBranch,
  },
  {
    title: "Экранная матрица",
    description: "Все экраны продукта, структурированные по ролям и состояниям",
    icon: LayoutGrid,
  },
  {
    title: "Визуальное направление",
    description: "Эстетика, стиль, референсы — согласованы до design-этапа",
    icon: Palette,
  },
  {
    title: "Интерактивный прототип",
    description: "Premium прототип для презентаций и тестирования",
    icon: MousePointer,
  },
  {
    title: "Базовая система компонентов",
    description: "Базовые компоненты, готовые к масштабированию",
    icon: Layers,
  },
  {
    title: "Сводка для передачи в разработку",
    description: "Всё, что нужно разработчику, чтобы начать без вопросов",
    icon: FileCheck,
  },
]

export function DeliverablesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          {/* Signature eyebrow accent */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
              <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Что входит в работу</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Что вы получаете на первом этапе
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, index) => (
            <div 
              key={item.title}
              className="group relative p-6 border border-border rounded-sm hover:border-foreground/20 hover:bg-secondary/30 transition-all duration-300"
            >
              {/* Accent edge on first card */}
              {index === 0 && (
                <div className="absolute top-0 left-0">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
                  <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
                </div>
              )}
              <div className="mb-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-signature-cobalt/10 transition-colors">
                <item.icon className="h-4 w-4 text-foreground group-hover:text-signature-cobalt transition-colors" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
