import { Layers, Users, Building2, ArrowRightLeft } from "lucide-react"

const trustItems = [
  {
    icon: Layers,
    title: "Подходит для сложных workflow",
    description: "Структурируем многоуровневые процессы, role-based системы и enterprise-задачи",
  },
  {
    icon: Users,
    title: "Удобно для startup, B2B и enterprise",
    description: "Работаем с founders, product teams, агентствами и integrators",
  },
  {
    icon: Building2,
    title: "Поддерживает white-label модель",
    description: "Готовим материалы под бренд клиента для агентств и партнёров",
  },
  {
    icon: ArrowRightLeft,
    title: "Упрощает передачу в разработку",
    description: "Формируем build-ready материалы и документацию для разработки",
  },
]

export function TrustSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-4">
            Структурный intake для сложных digital-проектов
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Формат работы, который подходит для серьёзных продуктовых задач
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div 
              key={item.title}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
