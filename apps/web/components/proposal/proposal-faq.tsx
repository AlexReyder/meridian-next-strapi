"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Что я получу после отправки brief?",
    answer: "Вы получите структурированное предложение с рекомендацией по формату работы, ориентиром по срокам и стартовой стоимостью. Если потребуется уточнение — мы свяжемся с вами напрямую."
  },
  {
    question: "Можно ли работать без звонков?",
    answer: "Да. Мы поддерживаем no-call-first формат. Большинство вопросов решается через brief, email и asynchronous коммуникацию. Звонок нужен только для сложных случаев, и только по согласованию."
  },
  {
    question: "Поддерживаете ли вы white-label формат?",
    answer: "Да. Мы работаем с агентствами, integrators и консультантами, которые готовят материалы для своих клиентов. Все артефакты могут быть под ваш бренд."
  },
  {
    question: "Можно ли прийти с rough notes или старой системой?",
    answer: "Да. Вы можете загрузить любые материалы — заметки, screenshots, старые экраны, PRD или просто описание. Мы поможем структурировать проект с того места, где вы находитесь."
  },
  {
    question: "Работаете ли вы с multilingual-продуктами и Arabic / RTL?",
    answer: "Да. У нас есть опыт работы с многоязычными продуктами, включая арабский язык и RTL-интерфейсы. Это учитывается в оценке сложности."
  },
  {
    question: "Подписываете ли вы NDA?",
    answer: "Да. Если вам нужно защитить чувствительную информацию до отправки материалов — укажите это в форме, и мы подготовим NDA."
  },
  {
    question: "Получу ли я сразу фиксированную цену?",
    answer: "Вы получите стартовую стоимость и ориентир. Финальная цена зависит от глубины проработки, числа ролей, модулей и дополнительных требований. Мы не начинаем работу без согласованного scope."
  },
  {
    question: "Что делать, если я не уверен, какой формат мне нужен?",
    answer: "Заполните brief или загрузите материалы — мы предложим подходящий формат на основе ваших задач, сроков и бюджета."
  },
]

export function ProposalFAQ() {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-4">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-sm px-6 data-[state=open]:border-foreground/20"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
