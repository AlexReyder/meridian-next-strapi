import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, MessageSquare, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Описываете задачу",
    description: "Заполняете brief или загружаете материалы",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Получаете рекомендацию",
    description: "Подходящий формат, сроки и стоимость",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Переходите к следующему шагу",
    description: "Согласование и старт работы",
  },
]

export function NoCallCta() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Старт без звонков</p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Получите рекомендацию по проекту без обязательного стартового звонка
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Оставьте brief — мы предложим подходящий формат, 
            ориентир по срокам и стартовую стоимость.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border border-border mb-6">
                <item.icon className="h-6 w-6 text-foreground/60" />
              </div>
              <p className="text-xs uppercase tracking-wider text-accent mb-2">{item.step}</p>
              <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.15em] px-8 h-12"
          >
            <Link href="/get-proposal">
              Получить предложение
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.15em] px-8 h-12"
          >
            <Link href="/get-proposal">Загрузить материалы</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
