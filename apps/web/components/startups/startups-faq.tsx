"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Можно ли прийти только с идеей?",
    answer: "Да. Мы часто работаем с проектами на стадии идеи или rough concept. Помогаем превратить её в понятную структуру продукта, сценарии и первые интерфейсы."
  },
  {
    question: "Подходит ли это для MVP?",
    answer: "Да, это один из самых частых запросов. Помогаем сфокусировать MVP, определить приоритеты, убрать лишнее и собрать минимальный, но сильный набор интерфейсов."
  },
  {
    question: "Можно ли сделать сначала сайт, а потом продукт?",
    answer: "Да. Многие стартапы начинают с сайта для валидации или fundraising, а позже возвращаются за продуктом. Мы готовы к обоим сценариям."
  },
  {
    question: "Работаете ли вы с mobile apps?",
    answer: "Да. Помогаем с дизайном мобильных приложений для iOS и Android — от структуры и user flows до готового UI и материалов для разработки."
  },
  {
    question: "Подходит ли это для investor presentation?",
    answer: "Да. Собираем investor-ready prototype и визуальные материалы, которые помогают показать продукт убедительно и понятно."
  },
  {
    question: "Что делать, если у нас уже есть ранний дизайн?",
    answer: "Работаем с redesign существующих продуктов. Анализируем текущее состояние, определяем точки улучшения и предлагаем решение."
  },
  {
    question: "Вы помогаете только с визуалом или со структурой тоже?",
    answer: "Мы работаем со структурой продукта: сценарии, логика экранов, приоритеты, user flows. Визуальный дизайн — важная, но не единственная часть работы."
  },
  {
    question: "Как понять, какой формат работы нам нужен?",
    answer: "Опишите задачу через форму на сайте — мы предложим подходящий формат, ориентир по срокам и следующий шаг. Это бесплатно и ни к чему не обязывает."
  }
]

export function StartupsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">FAQ</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground mb-12">
          Частые вопросы
        </h2>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card border border-border/60 rounded-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="font-serif text-base lg:text-lg font-light text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
