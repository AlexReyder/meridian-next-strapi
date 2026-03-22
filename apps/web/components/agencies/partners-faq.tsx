"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Подходит ли это только для агентств?",
    answer: "Нет. Этот формат подходит для агентств, system integrators, outsourcing-команд, dev shops, delivery-команд и любых партнёров, которым нужен внешний premium UX/UI/product layer."
  },
  {
    question: "Можно ли подключаться white-label?",
    answer: "Да. Мы работаем под вашим брендом или в тени. Ваш клиент видит только вас. NDA, конфиденциальность и белая маркировка — стандартная практика."
  },
  {
    question: "Работаете ли вы с integrators и outsourcing-командами?",
    answer: "Да. Мы часто подключаемся к integrator-проектам, где нужно быстро собрать логику сложной системы и подготовить интерфейсы до или параллельно с разработкой."
  },
  {
    question: "Можно ли прийти только с client brief или rough notes?",
    answer: "Конечно. Мы работаем с любым уровнем готовности — от сырых заметок до детального ТЗ. Структурирование входных данных — часть нашей работы."
  },
  {
    question: "Подходит ли это для сайтов, portals и mobile apps?",
    answer: "Да. Мы работаем с сайтами, редизайном, client portals, dashboards, B2B-системами и mobile apps. Формат подходит для любых digital-продуктов."
  },
  {
    question: "Можно ли подключиться только на presale?",
    answer: "Да. Presale support — один из наших ключевых форматов. Помогаем упаковать концепцию, подготовить prototype и presentation materials для тендера или pitch."
  },
  {
    question: "Вы помогаете только с визуалом или со структурой тоже?",
    answer: "Мы всегда начинаем со структуры. Product framing, роли, сценарии, экранная карта — это основа. Визуал строится на этом фундаменте."
  },
  {
    question: "Как быстро можно стартовать?",
    answer: "Обычно через 3-5 рабочих дней после согласования scope. При срочной необходимости обсуждаем приоритетный старт."
  }
]

export function PartnersFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Signature eyebrow accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center">
            <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
            <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">FAQ</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-12">
          Частые вопросы
        </h2>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-sm bg-card px-6 data-[state=open]:border-foreground/20"
              >
                <AccordionTrigger className="text-left font-serif text-base lg:text-lg text-foreground hover:no-underline py-5">
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
