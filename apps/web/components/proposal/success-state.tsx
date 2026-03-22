import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Home, Layers, Upload } from "lucide-react"

const nextSteps = [
  { number: "01", title: "Review brief", description: "Изучаем материалы и требования" },
  { number: "02", title: "Recommend format", description: "Подбираем подходящий формат работы" },
  { number: "03", title: "Share timeline & price", description: "Отправляем сроки и стартовую стоимость" },
  { number: "04", title: "Request details", description: "Уточняем детали только при необходимости" },
]

export function SuccessState() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center">
            <Check className="h-10 w-10 text-accent" />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Ваш brief получен
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Мы готовим структурированное предложение по вашему проекту.
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-card border border-border rounded-sm p-8 mb-12">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 text-center">
            Что будет дальше
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {nextSteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-foreground">{step.number}</span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm mb-1">
                    {step.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            className="bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.12em] px-6 h-11"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Вернуться на главную
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.12em] px-6 h-11"
          >
            <Link href="/pricing">
              <Layers className="mr-2 h-4 w-4" />
              Посмотреть форматы работы
            </Link>
          </Button>
          <Button 
            asChild
            variant="ghost"
            className="text-muted-foreground hover:text-foreground text-[11px] uppercase tracking-[0.12em] px-6 h-11"
          >
            <Link href="/get-proposal">
              <Upload className="mr-2 h-4 w-4" />
              Загрузить ещё материалы
            </Link>
          </Button>
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Есть вопросы? Напишите на{" "}
            <a href="mailto:hello@atelier-meridian.com" className="text-foreground hover:underline">
              hello@atelier-meridian.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
