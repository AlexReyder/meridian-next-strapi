import { Button } from "@/components/ui/button"
import { FileText, Upload, ArrowRight, Target, Users, Layers, ArrowUpRight } from "lucide-react"

interface ConversionPathsProps {
  onStartWizard: () => void
  onStartUpload: () => void
}

const processSteps = [
  {
    icon: Target,
    title: "Цели проекта",
    description: "Фиксируем, зачем нужен проект и какой результат для вас важен."
  },
  {
    icon: Users,
    title: "Роли и сценарии",
    description: "Определяем, кто будет работать с продуктом и какие сценарии критичны."
  },
  {
    icon: Layers,
    title: "Ограничения и scope",
    description: "Учитываем сроки, сложность, доступные материалы и объём проработки."
  },
  {
    icon: ArrowUpRight,
    title: "Следующий шаг",
    description: "Предлагаем подходящий формат работы, ориентир по срокам и стартовую стоимость."
  }
]

export function ConversionPaths({ onStartWizard, onStartUpload }: ConversionPathsProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Two action cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Path A: Brief Wizard */}
          <div className="group relative bg-card border border-border rounded-sm p-8 hover:border-accent/40 transition-colors">
            <div className="absolute top-6 right-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-accent" />
              </div>
            </div>
            
            <div className="pr-14">
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                Заполнить brief проекта
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Подходит, если вы хотите получить рекомендацию по формату работы, 
                ориентир по срокам и стартовую стоимость.
              </p>
            </div>
            
            <Button 
              onClick={onStartWizard}
              className="bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.12em] px-6 h-10"
            >
              Перейти к brief
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Path B: Upload Materials */}
          <div className="group relative bg-card border border-border rounded-sm p-8 hover:border-accent/40 transition-colors">
            <div className="absolute top-6 right-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Upload className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            
            <div className="pr-14">
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                Загрузить материалы проекта
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Подходит, если у вас уже есть notes, PRD, старые screens, 
                документы, ссылки или draft-описание проекта.
              </p>
            </div>
            
            <Button 
              onClick={onStartUpload}
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.12em] px-6 h-10"
            >
              Загрузить материалы
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Clear transition to explanation section */}
        <div className="mt-16 lg:mt-20">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px flex-1 bg-border/60" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">Что происходит дальше</span>
            <span className="h-px flex-1 bg-border/60" />
          </div>

          {/* Explanation block */}
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl lg:text-[1.75rem] font-light text-foreground mb-4">
              Как мы разбираем ваш проект
            </h3>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              После отправки brief или материалов мы структурируем задачу, определяем ограничения, 
              собираем ключевые сценарии и готовим понятный следующий шаг по проекту.
            </p>
          </div>

          {/* 4-step process row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {processSteps.map((step, index) => (
              <div 
                key={step.title}
                className="relative bg-secondary/30 border border-border/50 rounded-sm p-5"
              >
                {/* Step number */}
                <div className="absolute top-4 right-4 text-[10px] font-medium text-muted-foreground/40">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Icon */}
                <div className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center mb-4">
                  <step.icon className="h-4 w-4 text-foreground/70" />
                </div>
                
                {/* Content */}
                <h4 className="text-sm font-medium text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
