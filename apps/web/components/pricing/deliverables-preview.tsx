import Link from "next/link"

const deliverables = [
  {
    name: "Структура проекта",
    subtitle: "Фиксирует цели, ограничения и приоритеты",
    visual: "structure",
  },
  {
    name: "Пользовательские сценарии",
    subtitle: "Показывает ключевые сценарии и точки перехода",
    visual: "scenarios",
  },
  {
    name: "Экранная карта продукта",
    subtitle: "Собирает логику экранов в единую систему",
    visual: "screen-map",
  },
  {
    name: "Интерактивный прототип",
    subtitle: "Даёт visual preview будущего продукта",
    visual: "prototype",
  },
  {
    name: "Базовая система компонентов",
    subtitle: "Задаёт основу интерфейсной системы",
    visual: "design-system",
  },
  {
    name: "Материалы для передачи в разработку",
    subtitle: "Помогает команде перейти к разработке",
    visual: "dev-materials",
  },
]

// 1. Project Structure Document - Premium strategy document
function StructureVisual() {
  return (
    <div className="h-52 bg-gradient-to-br from-background/8 to-background/4 rounded border border-background/15 p-5 overflow-hidden relative">
      {/* Document header with status */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-background/10 border border-background/15 flex items-center justify-center">
            <svg className="w-4 h-4 text-background/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <div className="h-2.5 w-28 bg-background/20 rounded" />
            <div className="h-1.5 w-20 bg-background/10 rounded mt-1.5" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 px-2.5 bg-accent/20 rounded text-[7px] flex items-center justify-center text-background/60 border border-accent/30">Финал</div>
          <div className="h-5 px-2 bg-background/8 rounded text-[7px] flex items-center justify-center text-background/40">v2.1</div>
        </div>
      </div>
      
      {/* Document sections */}
      <div className="space-y-3">
        {/* Goals section */}
        <div className="p-3 bg-background/6 rounded-md border border-background/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-accent/40 rounded-full" />
            <div className="h-2 w-20 bg-background/20 rounded" />
          </div>
          <div className="pl-3 space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-background/20" />
              <div className="h-1.5 w-full bg-background/8 rounded" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-background/20" />
              <div className="h-1.5 w-4/5 bg-background/8 rounded" />
            </div>
          </div>
        </div>
        
        {/* Priorities grid */}
        <div className="grid grid-cols-3 gap-2">
          {['Scope', 'Ограничения', 'Приоритеты'].map((label, i) => (
            <div key={label} className="p-2 bg-background/5 rounded border border-background/8">
              <div className="text-[6px] uppercase tracking-wider text-background/30 mb-1.5">{label}</div>
              <div className="space-y-1">
                <div className="h-1 w-full bg-background/10 rounded" />
                <div className="h-1 w-3/4 bg-background/8 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative corner element */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
        <div className="flex -space-x-1">
          {[1,2].map(i => (
            <div key={i} className="w-4 h-4 rounded-full bg-background/10 border border-background/5" />
          ))}
        </div>
        <div className="text-[6px] text-background/30">2 автора</div>
      </div>
    </div>
  )
}

// 2. User Scenarios - Elegant flow diagram
function ScenariosVisual() {
  return (
    <div className="h-52 bg-gradient-to-br from-background/8 to-background/4 rounded border border-background/15 p-5 overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-5 bg-accent/40 rounded-full" />
          <div className="h-2 w-24 bg-background/15 rounded" />
        </div>
        <div className="text-[7px] text-background/40">4 сценария</div>
      </div>
      
      {/* Flow visualization */}
      <div className="relative h-32">
        {/* Start node */}
        <div className="absolute top-0 left-0 w-16 h-10 bg-accent/15 rounded-lg border border-accent/30 flex flex-col items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-accent/30 mb-1" />
          <div className="text-[6px] text-background/50">Вход</div>
        </div>
        
        {/* Connection path 1 */}
        <svg className="absolute top-5 left-16 w-8 h-px" viewBox="0 0 32 1">
          <line x1="0" y1="0.5" x2="32" y2="0.5" stroke="currentColor" strokeWidth="1" className="text-background/20" strokeDasharray="3 2" />
        </svg>
        
        {/* Decision node */}
        <div className="absolute top-0 left-24 w-20 h-10 bg-background/10 rounded-lg border border-background/20 flex items-center justify-center">
          <div className="text-center">
            <div className="h-1.5 w-12 bg-background/20 rounded mx-auto" />
            <div className="text-[5px] text-background/30 mt-1">Проверка</div>
          </div>
        </div>
        
        {/* Branch paths */}
        <svg className="absolute top-10 left-34 w-px h-6" viewBox="0 0 1 24">
          <line x1="0.5" y1="0" x2="0.5" y2="24" stroke="currentColor" strokeWidth="1" className="text-background/15" />
        </svg>
        <svg className="absolute top-5 left-44 w-10 h-px" viewBox="0 0 40 1">
          <line x1="0" y1="0.5" x2="40" y2="0.5" stroke="currentColor" strokeWidth="1" className="text-background/15" strokeDasharray="3 2" />
        </svg>
        
        {/* Branch node 1 */}
        <div className="absolute top-16 left-20 w-16 h-9 bg-background/8 rounded-lg border border-background/15 flex items-center justify-center">
          <div className="h-1.5 w-8 bg-background/15 rounded" />
        </div>
        
        {/* Branch node 2 - success path */}
        <div className="absolute top-0 right-4 w-18 h-10 bg-background/10 rounded-lg border border-background/20 flex items-center justify-center">
          <div className="h-1.5 w-10 bg-background/15 rounded" />
        </div>
        
        {/* Lower flow */}
        <div className="absolute bottom-0 left-0 w-14 h-8 bg-background/6 rounded-lg border border-background/12" />
        <div className="absolute bottom-0 left-16 w-14 h-8 bg-background/6 rounded-lg border border-background/12" />
        <div className="absolute bottom-0 left-32 w-14 h-8 bg-background/6 rounded-lg border border-background/12" />
        
        {/* End node */}
        <div className="absolute bottom-0 right-4 w-16 h-8 bg-accent/10 rounded-lg border border-accent/25 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full border-2 border-accent/40" />
        </div>
        
        {/* Connection indicators */}
        <div className="absolute top-12 left-10 w-2 h-2 rounded-full bg-background/25" />
        <div className="absolute top-12 left-28 w-2 h-2 rounded-full bg-background/25" />
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-3 left-5 flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded bg-accent/30" />
          <span className="text-[6px] text-background/40">Ключевые</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded bg-background/15" />
          <span className="text-[6px] text-background/40">Вторичные</span>
        </div>
      </div>
    </div>
  )
}

// 3. Screen Map - Product architecture board
function ScreenMapVisual() {
  return (
    <div className="h-52 bg-gradient-to-br from-background/8 to-background/4 rounded border border-background/15 p-5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-background/10 border border-background/15 flex items-center justify-center">
            <div className="w-2.5 h-2.5 grid grid-cols-2 gap-0.5">
              <div className="bg-background/30 rounded-sm" />
              <div className="bg-background/30 rounded-sm" />
              <div className="bg-background/30 rounded-sm" />
              <div className="bg-background/30 rounded-sm" />
            </div>
          </div>
          <div className="h-2 w-20 bg-background/15 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[7px] text-background/40">18 экранов</div>
          <div className="w-px h-3 bg-background/15" />
          <div className="text-[7px] text-background/40">4 модуля</div>
        </div>
      </div>
      
      {/* Screen matrix with module grouping */}
      <div className="space-y-3">
        {/* Module 1 */}
        <div className="flex gap-2">
          <div className="w-12 flex-shrink-0">
            <div className="text-[6px] uppercase tracking-wider text-background/30 mb-1">Core</div>
          </div>
          <div className="flex-1 grid grid-cols-5 gap-1.5">
            {[true, false, false, false, false].map((active, i) => (
              <div 
                key={i}
                className={`aspect-[3/4] rounded-sm border flex flex-col ${
                  active ? 'bg-accent/20 border-accent/40' : 'bg-background/8 border-background/15'
                }`}
              >
                <div className={`h-1.5 ${active ? 'bg-accent/30' : 'bg-background/15'} rounded-t-sm`} />
                <div className="flex-1 p-1">
                  <div className={`h-0.5 w-2/3 ${active ? 'bg-accent/20' : 'bg-background/10'} rounded mb-0.5`} />
                  <div className={`h-0.5 w-1/2 ${active ? 'bg-accent/15' : 'bg-background/8'} rounded`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Module 2 */}
        <div className="flex gap-2">
          <div className="w-12 flex-shrink-0">
            <div className="text-[6px] uppercase tracking-wider text-background/30 mb-1">Users</div>
          </div>
          <div className="flex-1 grid grid-cols-5 gap-1.5">
            {[false, false, true, false].map((highlight, i) => (
              <div 
                key={i}
                className={`aspect-[3/4] rounded-sm border ${
                  highlight ? 'bg-background/12 border-background/25' : 'bg-background/6 border-background/12'
                }`}
              />
            ))}
            <div className="aspect-[3/4] rounded-sm border border-dashed border-background/15 flex items-center justify-center">
              <div className="text-[8px] text-background/25">+</div>
            </div>
          </div>
        </div>
        
        {/* Module 3 */}
        <div className="flex gap-2">
          <div className="w-12 flex-shrink-0">
            <div className="text-[6px] uppercase tracking-wider text-background/30 mb-1">Admin</div>
          </div>
          <div className="flex-1 grid grid-cols-5 gap-1.5">
            {[false, false, false, false, false].map((_, i) => (
              <div 
                key={i}
                className="aspect-[3/4] rounded-sm border bg-background/5 border-background/10"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Status bar */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-sm bg-accent/30 border border-accent/50" />
            <span className="text-[6px] text-background/40">Готово</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-sm bg-background/12 border border-background/25" />
            <span className="text-[6px] text-background/40">В работе</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-sm bg-background/5 border border-background/10" />
            <span className="text-[6px] text-background/40">Запланировано</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// 4. Interactive Prototype - Polished interface preview
function PrototypeVisual() {
  return (
    <div className="h-52 bg-gradient-to-br from-background/8 to-background/4 rounded border border-background/15 p-4 overflow-hidden">
      <div className="flex gap-3 h-full">
        {/* Desktop frame */}
        <div className="flex-1 bg-background/10 rounded-lg border border-background/15 overflow-hidden shadow-lg shadow-black/10">
          {/* Browser chrome */}
          <div className="h-5 bg-background/12 border-b border-background/10 flex items-center px-2.5 gap-1.5">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-background/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-background/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-background/20" />
            </div>
            <div className="flex-1 mx-4 h-2.5 bg-background/8 rounded-sm border border-background/10 flex items-center px-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/30 mr-1" />
              <div className="h-1 w-16 bg-background/15 rounded-full" />
            </div>
          </div>
          
          {/* Dashboard content */}
          <div className="p-2.5 flex gap-2">
            {/* Sidebar */}
            <div className="w-10 space-y-1.5 py-1">
              <div className="w-full h-5 bg-accent/15 rounded border border-accent/25" />
              <div className="w-full h-5 bg-background/8 rounded" />
              <div className="w-full h-5 bg-background/8 rounded" />
              <div className="w-full h-5 bg-background/8 rounded" />
            </div>
            
            {/* Main area */}
            <div className="flex-1 space-y-2">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div className="h-2 w-16 bg-background/20 rounded" />
                <div className="flex gap-1">
                  <div className="h-4 w-8 bg-background/10 rounded" />
                  <div className="h-4 w-10 bg-accent/20 rounded" />
                </div>
              </div>
              
              {/* KPI cards */}
              <div className="grid grid-cols-3 gap-1.5">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-background/8 rounded p-1.5 border border-background/10">
                    <div className="h-1 w-6 bg-background/15 rounded mb-1" />
                    <div className="h-2.5 w-8 bg-background/20 rounded" />
                  </div>
                ))}
              </div>
              
              {/* Chart area */}
              <div className="bg-background/6 rounded p-2 border border-background/10 flex-1">
                <div className="flex items-end gap-1 h-10">
                  {[30, 45, 35, 60, 50, 70, 55, 80, 65].map((h, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-accent/20 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile frame */}
        <div className="w-16 bg-[#1a1a1a] rounded-xl border border-white/10 p-1 shadow-lg shadow-black/20">
          <div className="h-full bg-[#0a0a0a] rounded-lg overflow-hidden">
            {/* Status bar */}
            <div className="h-4 flex items-center justify-center">
              <div className="w-8 h-1 bg-white/20 rounded-full" />
            </div>
            {/* Content */}
            <div className="px-1.5 pb-2 space-y-1.5">
              <div className="h-2.5 bg-white/15 rounded" />
              <div className="space-y-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="p-1.5 bg-white/5 rounded border border-white/5">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded bg-white/10" />
                      <div className="flex-1">
                        <div className="h-1 w-8 bg-white/15 rounded" />
                        <div className="h-0.5 w-5 bg-white/8 rounded mt-0.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-5 bg-white/90 rounded flex items-center justify-center">
                <div className="text-[5px] text-black font-medium">Action</div>
              </div>
            </div>
            {/* Home indicator */}
            <div className="h-3 flex items-center justify-center">
              <div className="w-8 h-0.5 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 5. Design System - Component library
function DesignSystemVisual() {
  return (
    <div className="h-52 bg-gradient-to-br from-background/8 to-background/4 rounded border border-background/15 p-5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-background/10 border border-background/15 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-sm bg-background/25" />
          </div>
          <div className="h-2 w-24 bg-background/15 rounded" />
        </div>
        <div className="text-[7px] text-background/40">24 компонента</div>
      </div>
      
      {/* Component grid */}
      <div className="space-y-3">
        {/* Typography row */}
        <div className="flex items-center gap-4">
          <div className="w-14 text-[6px] uppercase tracking-wider text-background/30">Типографика</div>
          <div className="flex items-baseline gap-3">
            <div className="h-4 w-10 bg-background/20 rounded" />
            <div className="h-3 w-8 bg-background/15 rounded" />
            <div className="h-2.5 w-7 bg-background/12 rounded" />
            <div className="h-2 w-6 bg-background/10 rounded" />
          </div>
        </div>
        
        {/* Buttons row */}
        <div className="flex items-center gap-4">
          <div className="w-14 text-[6px] uppercase tracking-wider text-background/30">Кнопки</div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-14 bg-background/25 rounded flex items-center justify-center">
              <div className="h-1 w-8 bg-background/40 rounded" />
            </div>
            <div className="h-5 w-14 bg-transparent border border-background/25 rounded flex items-center justify-center">
              <div className="h-1 w-8 bg-background/25 rounded" />
            </div>
            <div className="h-5 w-8 bg-accent/25 rounded" />
          </div>
        </div>
        
        {/* Inputs row */}
        <div className="flex items-center gap-4">
          <div className="w-14 text-[6px] uppercase tracking-wider text-background/30">Поля</div>
          <div className="flex-1 flex items-center gap-2">
            <div className="flex-1 h-5 bg-background/6 border border-background/15 rounded flex items-center px-2">
              <div className="h-1 w-12 bg-background/15 rounded" />
            </div>
            <div className="w-20 h-5 bg-background/6 border border-background/15 rounded flex items-center justify-between px-2">
              <div className="h-1 w-8 bg-background/15 rounded" />
              <div className="w-2 h-2 border-r border-b border-background/20 rotate-45 -mt-0.5" />
            </div>
          </div>
        </div>
        
        {/* Cards row */}
        <div className="flex items-center gap-4">
          <div className="w-14 text-[6px] uppercase tracking-wider text-background/30">Карточки</div>
          <div className="flex gap-2">
            {[1, 2].map(i => (
              <div key={i} className="w-16 h-10 bg-background/8 border border-background/12 rounded p-1.5">
                <div className="h-1 w-8 bg-background/15 rounded mb-1" />
                <div className="h-0.5 w-full bg-background/8 rounded" />
                <div className="h-0.5 w-3/4 bg-background/8 rounded mt-0.5" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Colors row */}
        <div className="flex items-center gap-4">
          <div className="w-14 text-[6px] uppercase tracking-wider text-background/30">Палитра</div>
          <div className="flex gap-1.5">
            <div className="w-5 h-5 rounded-md bg-background/40 border border-background/20" />
            <div className="w-5 h-5 rounded-md bg-background/25 border border-background/15" />
            <div className="w-5 h-5 rounded-md bg-background/15 border border-background/10" />
            <div className="w-5 h-5 rounded-md bg-accent/40 border border-accent/30" />
            <div className="w-5 h-5 rounded-md bg-accent/25 border border-accent/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

// 6. Development Materials - Documentation for development team
function DevMaterialsVisual() {
  return (
    <div className="h-52 bg-gradient-to-br from-background/8 to-background/4 rounded border border-background/15 p-4 overflow-hidden">
      <div className="flex gap-3 h-full">
        {/* Annotated screen */}
        <div className="flex-1 bg-background/10 rounded-lg border border-background/15 p-3 relative">
          {/* Screen content */}
          <div className="h-4 bg-background/15 rounded mb-2" />
          <div className="h-6 bg-background/10 rounded mb-2" />
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="h-8 bg-background/8 rounded" />
            <div className="h-8 bg-background/8 rounded" />
          </div>
          <div className="h-5 bg-accent/15 rounded" />
          
          {/* Annotation markers */}
          <div className="absolute top-2 right-1 w-4 h-4 rounded-full bg-accent/40 border-2 border-accent/60 flex items-center justify-center shadow-sm">
            <span className="text-[6px] font-medium text-background/80">1</span>
          </div>
          <div className="absolute top-10 right-1 w-4 h-4 rounded-full bg-accent/40 border-2 border-accent/60 flex items-center justify-center shadow-sm">
            <span className="text-[6px] font-medium text-background/80">2</span>
          </div>
          <div className="absolute bottom-6 right-1 w-4 h-4 rounded-full bg-accent/40 border-2 border-accent/60 flex items-center justify-center shadow-sm">
            <span className="text-[6px] font-medium text-background/80">3</span>
          </div>
        </div>
        
        {/* Notes panel */}
        <div className="w-28 space-y-2">
          {/* Note 1 */}
          <div className="p-2 bg-background/8 rounded border border-background/12">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-3 h-3 rounded-full bg-accent/30 flex items-center justify-center">
                <span className="text-[5px] text-background/70">1</span>
              </div>
              <div className="h-1.5 w-12 bg-background/20 rounded" />
            </div>
            <div className="space-y-0.5 pl-1">
              <div className="h-1 w-full bg-background/10 rounded" />
              <div className="h-1 w-4/5 bg-background/8 rounded" />
            </div>
          </div>
          
          {/* Note 2 */}
          <div className="p-2 bg-background/8 rounded border border-background/12">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-3 h-3 rounded-full bg-accent/30 flex items-center justify-center">
                <span className="text-[5px] text-background/70">2</span>
              </div>
              <div className="h-1.5 w-10 bg-background/20 rounded" />
            </div>
            <div className="space-y-0.5 pl-1">
              <div className="h-1 w-full bg-background/10 rounded" />
              <div className="h-1 w-2/3 bg-background/8 rounded" />
            </div>
          </div>
          
          {/* Note 3 */}
          <div className="p-2 bg-background/8 rounded border border-background/12">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-3 h-3 rounded-full bg-accent/30 flex items-center justify-center">
                <span className="text-[5px] text-background/70">3</span>
              </div>
              <div className="h-1.5 w-8 bg-background/20 rounded" />
            </div>
            <div className="space-y-0.5 pl-1">
              <div className="h-1 w-full bg-background/10 rounded" />
            </div>
          </div>
          
          {/* Export button */}
          <div className="h-5 bg-background/20 rounded flex items-center justify-center gap-1">
            <svg className="w-2.5 h-2.5 text-background/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="text-[6px] text-background/50">Экспорт</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function DeliverableVisual({ type }: { type: string }) {
  switch (type) {
    case 'structure':
      return <StructureVisual />
    case 'scenarios':
      return <ScenariosVisual />
    case 'screen-map':
      return <ScreenMapVisual />
    case 'prototype':
      return <PrototypeVisual />
    case 'design-system':
      return <DesignSystemVisual />
    case 'dev-materials':
      return <DevMaterialsVisual />
    default:
      return null
  }
}

export function DeliverablesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-background/50 mb-4">Состав работ</p>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-background text-balance">
              Что входит в каждый формат работы
            </h2>
            <p className="mt-6 text-base text-background/60 leading-relaxed max-w-lg">
              Каждый артефакт — готовый к использованию материал, а не промежуточный набросок. 
              Реальные документы для продуктовой работы и передачи в разработку.
            </p>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/concepts"
              className="text-sm text-background/60 hover:text-background transition-colors underline underline-offset-4"
            >
              Посмотреть концепты
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {deliverables.map((item) => (
            <div 
              key={item.name}
              className="group"
            >
              {/* Premium visual mockup */}
              <DeliverableVisual type={item.visual} />
              
              {/* Label */}
              <div className="mt-6">
                <h3 className="font-serif text-lg text-background mb-1.5">{item.name}</h3>
                <p className="text-sm text-background/50 leading-relaxed">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-background/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-sm text-background/50">
            Это реальные, серьёзные материалы — не просто наборы слайдов.
          </p>
          <Link 
            href="/get-proposal"
            className="inline-flex items-center text-sm text-background hover:text-background/80 transition-colors group"
          >
            Получить предложение
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
