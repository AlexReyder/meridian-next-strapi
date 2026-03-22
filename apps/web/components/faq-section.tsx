"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "С какими проектами вы работаете?",
    answer: "Мы проектируем сайты, корпоративные порталы, B2B-платформы, клиентские системы, dashboards и мобильные приложения. Работаем как с новыми проектами, так и с редизайном существующих продуктов.",
  },
  {
    question: "Что я получу после отправки brief?",
    answer: "В течение 24-48 часов вы получите рекомендацию по формату работы, ориентир по срокам и стартовую стоимость — для сайта, системы или приложения любой сложности.",
  },
  {
    question: "Можно ли работать без звонков?",
    answer: "Да, мы работаем async-first. Большинство коммуникации происходит в письменном формате. Созвоны — по необходимости и с понятной agenda.",
  },
  {
    question: "Поддерживаете ли вы white-label формат?",
    answer: "Да. Для партнёров и integrators у нас есть White-Label Partner Desk. Вы получаете premium дизайн сайтов, систем и приложений под своим брендом.",
  },
  {
    question: "Можно ли прийти с существующим сайтом или системой для редизайна?",
    answer: "Конечно. Мы работаем как с идеями на этапе концепции, так и с редизайном существующих сайтов, порталов и digital-продуктов.",
  },
  {
    question: "Подписываете ли вы NDA?",
    answer: "Да, стандартная практика. Отправьте ваш NDA или используйте наш шаблон — подпишем до начала обсуждения деталей.",
  },
  {
    question: "Как быстро может стартовать проект?",
    answer: "Обычно через 3-5 рабочих дней после согласования scope и оплаты. При срочной необходимости — обсуждаем приоритетный старт.",
  },
  {
    question: "Вы помогаете только с дизайном или со структурой продукта тоже?",
    answer: "Мы начинаем со структуры. Product framing, UX-архитектура, роли и flows — это основа. Дизайн сайта, системы или приложения строится на этом фундаменте.",
  },
]

export function FaqSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          {/* Signature eyebrow accent */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
              <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">FAQ</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-sm bg-card px-6 data-[state=open]:border-foreground/20"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
