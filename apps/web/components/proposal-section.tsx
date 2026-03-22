import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Mail, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Оставьте бриф",
    description: "Опишите сайт, систему или приложение",
  },
  {
    icon: Mail,
    title: "Получите рекомендацию",
    description: "Формат, сроки и ориентир по стоимости",
  },
  {
    icon: CheckCircle,
    title: "Подтвердите следующий шаг",
    description: "Или пришлите дополнительные материалы",
  },
]

export function ProposalSection() {
  return (
    <section id="proposal" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-card border border-border rounded-sm p-10 lg:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
              Закажите дизайн сайта, системы или приложения
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Расскажите о проекте — сайт, портал, B2B-система или mobile app. 
              Мы предложим формат работы, сроки и стоимость без обязательного звонка.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="relative inline-flex">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                    <step.icon className="h-6 w-6 text-foreground" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-border -translate-y-1/2" />
                  )}
                </div>
                <h3 className="mt-6 font-serif text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 text-sm uppercase tracking-wider px-10 h-14"
            >
              <Link href="/get-proposal">
                Получить предложение
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Для сайта, mobile app, портала или digital-системы
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
