"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "С чего лучше начать: с brief или с материалов?",
    answer: "Если у вас есть готовые материалы (PRD, презентация, наброски) — можете приложить их сразу. Если проект ещё не оформлен — заполните короткий brief, и мы поможем структурировать задачу на основе ваших ответов."
  },
  {
    question: "Подходит ли это для сайта, digital-системы и mobile app?",
    answer: "Да, это основные типы задач, с которыми мы работаем. Сайты, корпоративные порталы, B2B-платформы, dashboards и мобильные приложения — всё это входит в наш фокус."
  },
  {
    question: "Можно ли прийти только с идеей?",
    answer: "Да. Большинство наших клиентов приходят именно на этой стадии — когда есть идея или бизнес-задача, но нет понятной структуры. Мы помогаем прояснить scope, роли и сценарии ещё до того, как начнётся визуальная работа."
  },
  {
    question: "Подходит ли это для redesign?",
    answer: "Да. Редизайн — одна из частых задач. Мы помогаем пересобрать структуру, улучшить UX и обновить визуальную подачу существующего сайта, системы или приложения."
  },
  {
    question: "Работаете ли вы white-label?",
    answer: "Да. Мы работаем с агентствами и integrators как внешний product/UX/UI-партнёр. Можем выступать под вашим брендом или совместно — без лишнего overhead и с понятным форматом delivery."
  },
  {
    question: "Вы помогаете только с визуалом или со структурой тоже?",
    answer: "Мы начинаем со структуры. Прежде чем рисовать экраны, мы помогаем прояснить роли, сценарии, приоритеты и логику продукта. Интерфейс строится на этой основе — и поэтому работает."
  },
  {
    question: "Подписываете ли вы NDA?",
    answer: "Да. Мы готовы подписать NDA до начала работы. Конфиденциальность — стандартная часть нашего процесса."
  },
  {
    question: "Как понять, какое решение подходит моему проекту?",
    answer: "Опишите задачу в brief — мы предложим подходящий формат, ориентир по срокам и стоимости. Если не уверены — просто напишите, что есть, и мы поможем определиться."
  }
]

export function SolutionsFaq() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Header */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Вопросы</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-foreground">
              Частые вопросы
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Ответы на основные вопросы о нашем подходе и форматах работы.
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-border/40"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
