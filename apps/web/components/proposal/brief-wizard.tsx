"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Check, Upload, FileText, Clock, Target, Users, Layers, Paperclip, Mail } from "lucide-react"

interface BriefWizardProps {
  onBack: () => void
  onSuccess: () => void
  data: Record<string, unknown>
  setData: (data: Record<string, unknown>) => void
}

const steps = [
  { id: 1, title: "Тип проекта" },
  { id: 2, title: "Цель" },
  { id: 3, title: "Команда" },
  { id: 4, title: "Сложность" },
  { id: 5, title: "Материалы" },
  { id: 6, title: "Сроки" },
  { id: 7, title: "Контакты" },
]

const projectTypes = [
  { id: "website", label: "Сайт / корпоративный сайт", desc: "Лендинг, corporate website, product page" },
  { id: "website-redesign", label: "Редизайн сайта", desc: "UX/UI-улучшение существующего сайта" },
  { id: "b2b", label: "B2B-платформа", desc: "SaaS, marketplace, бизнес-система" },
  { id: "internal", label: "Внутренняя система", desc: "CRM, ERP, операционные инструменты" },
  { id: "portal", label: "Клиентский портал", desc: "Личный кабинет, self-service" },
  { id: "dashboard", label: "Dashboard / analytics", desc: "Аналитика, мониторинг, отчётность" },
  { id: "mobile", label: "Мобильное приложение", desc: "iOS, Android, кроссплатформа" },
  { id: "redesign", label: "Редизайн digital-продукта", desc: "UX/UI-улучшение системы или приложения" },
  { id: "presale", label: "Presale / investor prototype", desc: "Демо для fundraising или tender" },
  { id: "other", label: "Другое", desc: "Расскажите подробнее на следующих шагах" },
]

const projectGoals = [
  { id: "fundraising", label: "Fundraising / investor presentation" },
  { id: "pitch", label: "Pitch / tender / presale" },
  { id: "dev-handover", label: "Подготовка к передаче в разработку" },
  { id: "internal-launch", label: "Внутренний запуск / цифровизация" },
  { id: "redesign", label: "Redesign / UX-улучшение" },
  { id: "whitelabel", label: "White-label для клиента" },
  { id: "new-market", label: "Выход в новый рынок" },
  { id: "other", label: "Другое" },
]

const teamTypes = [
  { id: "founder", label: "Founder / startup team" },
  { id: "product", label: "In-house product team" },
  { id: "b2b", label: "B2B-компания / operations team" },
  { id: "agency", label: "Агентство / integrator" },
  { id: "consultant", label: "Консультант / партнёр" },
  { id: "other", label: "Другое" },
]

const existingMaterials = [
  { id: "notes", label: "Rough notes" },
  { id: "brief", label: "Product brief" },
  { id: "prd", label: "PRD / требования" },
  { id: "screens", label: "Текущие экраны" },
  { id: "legacy", label: "Старый продукт / legacy" },
  { id: "brand", label: "Brand assets" },
  { id: "wireframes", label: "Wireframes" },
  { id: "nothing", label: "Пока ничего" },
]

const timelineOptions = [
  { id: "asap", label: "ASAP" },
  { id: "2weeks", label: "До 2 недель" },
  { id: "1month", label: "До 1 месяца" },
  { id: "6weeks", label: "До 6 недель" },
  { id: "flexible", label: "Гибко" },
]

const budgetOptions = [
  { id: "3-5k", label: "$3k–$5k" },
  { id: "5-7k", label: "$5k–$7k" },
  { id: "7-10k", label: "$7k–$10k" },
  { id: "10-15k", label: "$10k–$15k" },
  { id: "15k+", label: "$15k+" },
  { id: "recommend", label: "Нужна рекомендация" },
]

export function BriefWizard({ onBack, onSuccess, data, setData }: BriefWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedType, setSelectedType] = useState<string>("")
  const [selectedGoal, setSelectedGoal] = useState<string>("")
  const [selectedTeam, setSelectedTeam] = useState<string>("")
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [selectedTimeline, setSelectedTimeline] = useState<string>("")
  const [selectedBudget, setSelectedBudget] = useState<string>("")

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1)
    } else {
      onSuccess()
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      onBack()
    }
  }

  const toggleMaterial = (id: string) => {
    setSelectedMaterials(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,320px] gap-8 lg:gap-12">
          {/* Main Wizard */}
          <div className="bg-card border border-border rounded-sm">
            {/* Progress */}
            <div className="px-8 py-6 border-b border-border">
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={handlePrev}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {currentStep === 1 ? "Назад" : "Предыдущий шаг"}
                </button>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Шаг {currentStep} из 7
                </span>
              </div>
              
              {/* Step Indicators with Signature Accents */}
              <div className="flex gap-1.5">
                {steps.map((step) => (
                  <div 
                    key={step.id}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      step.id < currentStep 
                        ? "bg-signature-cobalt" 
                        : step.id === currentStep 
                          ? "bg-gradient-to-r from-signature-cobalt to-signature-brass" 
                          : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="p-8">
              {/* Step 1: Project Type */}
              {currentStep === 1 && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                    Что вы планируете делать?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    Выберите тип проекта, который лучше всего описывает вашу задачу
                  </p>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`text-left p-4 rounded-sm border transition-all ${
                          selectedType === type.id
                            ? "border-foreground bg-foreground/5"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <div className="font-medium text-sm text-foreground mb-1">
                          {type.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {type.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Project Goal */}
              {currentStep === 2 && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                    Какая у проекта главная задача сейчас?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    Это поможет нам предложить подходящий формат работы
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {projectGoals.map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => setSelectedGoal(goal.id)}
                        className={`text-left p-4 rounded-sm border transition-all ${
                          selectedGoal === goal.id
                            ? "border-foreground bg-foreground/5"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <div className="font-medium text-sm text-foreground">
                          {goal.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Team */}
              {currentStep === 3 && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                    Как лучше описать вашу команду?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    Это поможет адаптировать формат работы под ваш контекст
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {teamTypes.map((team) => (
                      <button
                        key={team.id}
                        onClick={() => setSelectedTeam(team.id)}
                        className={`text-left p-4 rounded-sm border transition-all ${
                          selectedTeam === team.id
                            ? "border-foreground bg-foreground/5"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <div className="font-medium text-sm text-foreground">
                          {team.label}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Название компании
                      </label>
                      <Input placeholder="Acme Inc." className="h-10" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Website
                      </label>
                      <Input placeholder="acme.com" className="h-10" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Рынок / регион
                      </label>
                      <Input placeholder="MENA, Europe, Global" className="h-10" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Complexity */}
              {currentStep === 4 && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                    Насколько сложный продукт или система?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    Эти параметры помогут оценить объём работы
                  </p>
                  
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          Количество ролей
                        </label>
                        <Input placeholder="2-3 роли" className="h-10" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          Примерное число экранов / модулей
                        </label>
                        <Input placeholder="10-20 экранов" className="h-10" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
                      {[
                        "Role-based permissions",
                        "Dashboard views",
                        "Mobile views",
                        "Prototype",
                        "Базовая система компонентов",
                        "Материалы для разработки",
                        "Multilingual support",
                        "Arabic / RTL",
                        "Есть брендинг",
                      ].map((item) => (
                        <label key={item} className="flex items-center gap-3 p-3 rounded-sm border border-border hover:border-foreground/30 cursor-pointer transition-colors">
                          <Checkbox id={item} />
                          <span className="text-sm text-foreground">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Materials */}
              {currentStep === 5 && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                    Какие материалы уже есть?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    Это поможет понять, с чего начать работу
                  </p>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                    {existingMaterials.map((material) => (
                      <button
                        key={material.id}
                        onClick={() => toggleMaterial(material.id)}
                        className={`text-left p-4 rounded-sm border transition-all ${
                          selectedMaterials.includes(material.id)
                            ? "border-foreground bg-foreground/5"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {selectedMaterials.includes(material.id) && (
                            <Check className="h-4 w-4 text-foreground" />
                          )}
                          <span className="font-medium text-sm text-foreground">
                            {material.label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Upload Zone */}
                  <div className="border-2 border-dashed border-border rounded-sm p-8 text-center hover:border-foreground/30 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-foreground mb-1">
                      Загрузите файлы, screenshots, документы или ссылки
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PDF, PNG, JPG, DOCX, Figma links
                    </p>
                  </div>
                </div>
              )}

              {/* Step 6: Timeline & Budget */}
              {currentStep === 6 && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                    Какие ожидания по срокам и бюджету?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    Это поможет подобрать оптимальный формат работы
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-3">
                        Ожидаемые сроки
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {timelineOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedTimeline(option.id)}
                            className={`px-4 py-2 rounded-sm border text-sm transition-all ${
                              selectedTimeline === option.id
                                ? "border-foreground bg-foreground text-background"
                                : "border-border text-foreground hover:border-foreground/30"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-3">
                        Ориентир по бюджету
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedBudget(option.id)}
                            className={`px-4 py-2 rounded-sm border text-sm transition-all ${
                              selectedBudget === option.id
                                ? "border-foreground bg-foreground text-background"
                                : "border-border text-foreground hover:border-foreground/30"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 7: Contact */}
              {currentStep === 7 && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                    Куда отправить предложение?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    Заполните контактные данные для получения рекомендации
                  </p>
                  
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          Имя *
                        </label>
                        <Input placeholder="Александр" className="h-10" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          Рабочий email *
                        </label>
                        <Input type="email" placeholder="alex@company.com" className="h-10" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          Компания
                        </label>
                        <Input placeholder="Acme Inc." className="h-10" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          Роль
                        </label>
                        <Input placeholder="Product Manager" className="h-10" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          Страна / регион
                        </label>
                        <Input placeholder="UAE" className="h-10" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Telegram / WhatsApp / телефон (необязательно)
                      </label>
                      <Input placeholder="+971 50 123 4567" className="h-10" />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Дополнительный комментарий
                      </label>
                      <Textarea placeholder="Расскажите о проекте подробнее..." rows={3} />
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <Checkbox id="no-call" className="mt-0.5" />
                        <span className="text-sm text-foreground">
                          Хочу получить no-call-first предложение
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <Checkbox id="expert" className="mt-0.5" />
                        <span className="text-sm text-foreground">
                          Готов к expert review, если это потребуется
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <Checkbox id="nda" className="mt-0.5" />
                        <span className="text-sm text-foreground">
                          Может понадобиться NDA до отправки чувствительных материалов
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <button 
                  onClick={handlePrev}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {currentStep === 1 ? "Отмена" : "Назад"}
                </button>
                
                <Button 
                  onClick={handleNext}
                  className="bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.12em] px-6 h-10"
                >
                  {currentStep === 7 ? "Отправить brief проекта" : "Далее"}
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sticky Side Panel */}
          <div className="hidden lg:block">
            <div className="sticky top-24 bg-card border border-border rounded-sm p-6">
              <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                Ваш brief
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FileText className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Тип проекта</div>
                    <div className="text-foreground">
                      {selectedType ? projectTypes.find(t => t.id === selectedType)?.label : "Не выбрано"}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Цель</div>
                    <div className="text-foreground">
                      {selectedGoal ? projectGoals.find(g => g.id === selectedGoal)?.label : "Не выбрано"}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Команда</div>
                    <div className="text-foreground">
                      {selectedTeam ? teamTypes.find(t => t.id === selectedTeam)?.label : "Не выбрано"}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Сроки</div>
                    <div className="text-foreground">
                      {selectedTimeline ? timelineOptions.find(t => t.id === selectedTimeline)?.label : "Не выбрано"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  После отправки вы получите
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" />
                    Рекомендацию по формату работы
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" />
                    Ориентир по срокам
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" />
                    Стартовую стоимость
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" />
                    Следующий шаг по проекту
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Финальный объём зависит от сложности, числа ролей, модулей, языков и глубины проработки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
