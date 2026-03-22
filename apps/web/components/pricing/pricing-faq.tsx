"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Что входит в стартовую стоимость?",
    answer: "Стартовая стоимость включает базовый объём для типового проекта в данном формате. Точная стоимость определяется после анализа вашего brief и зависит от сложности, количества ролей, экранов и специфических требований.",
  },
  {
    question: "Получу ли я фиксированную цену сразу?",
    answer: "После отправки brief вы получите ориентир по стоимости в течение 24-48 часов. Если нужна точная фиксированная цена — мы проводим короткий scoping и предоставляем детальное предложение.",
  },
  {
    question: "Можно ли начать без звонков?",
    answer: "Да, мы работаем в async-first режиме. Вы можете отправить brief, получить рекомендацию и согласовать scope в письменном формате. Звонки — только по необходимости и с понятной повесткой.",
  },
  {
    question: "Какой формат подходит startup-команде?",
    answer: "Для ранних стадий рекомендуем Product Framing Sprint — это структурирование продукта до начала дизайна или разработки. Если уже нужен прототип для инвесторов или разработчиков — Build-Ready Prototype.",
  },
  {
    question: "Подходит ли это для B2B-систем и внутренних платформ?",
    answer: "Да, B2B-системы, порталы и внутренние инструменты — одна из наших специализаций. Мы структурируем сложную бизнес-логику, роли и права доступа, admin-панели и операционные интерфейсы.",
  },
  {
    question: "Работаете ли вы с white-label проектами?",
    answer: "Да, White-Label Partner Desk создан специально для агентств и integrators. Вы получаете premium-материалы под своим брендом для ваших клиентов.",
  },
  {
    question: "Подписываете ли вы NDA?",
    answer: "Да, это стандартная практика. Отправьте ваш NDA или используйте наш шаблон — подпишем до начала обсуждения деталей проекта.",
  },
  {
    question: "Что делать, если мне нужен нестандартный объём работ?",
    answer: "Опишите задачу в brief — мы предложим подходящий формат или создадим индивидуальный scope. Packages — это ориентиры, а не жёсткие рамки.",
  },
]

export function PricingFaq() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Вопросы</p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Частые вопросы о форматах и стоимости
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
