export const HOME_PAGE_SECTIONS_SEED = {
  ru: [
    {
      __component: 'page.hero-home',
      sectionId: 'hero',
      eyebrow: 'UX/UI Design Studio',
      titleHtml: '<span class="block">Проектируем</span><span class="block"><span class="font-normal">сайты</span>, digital&#8209;системы</span><span class="block">и <span class="font-normal">mobile apps</span></span><span class="block text-[#8a847a]">до начала разработки</span>',
      description: 'Делаем дизайн сайтов, интерфейсов B2B-платформ и мобильных приложений с продуктовой логикой и понятной структурой.',
      supportingText: 'Подходит для сайтов, корпоративных порталов, B2B‑систем, dashboards, mobile apps и редизайна.',
      primaryCtaLabel: 'Получить предложение',
      primaryCtaHref: '/get-proposal',
      secondaryCtaLabel: 'Посмотреть цены',
      secondaryCtaHref: '/pricing',
      tags: [
        { label: 'Landing pages и сайты' },
        { label: 'Web products' },
        { label: 'Mobile apps' },
        { label: 'MVP interfaces' },
        { label: 'Investor-ready prototype' },
        { label: 'Redesign' }
      ],
      primaryImageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b_-YLfXIBTYWrxNbzxLrJDGx60NVQVUoc.png',
      primaryImageAlt: 'B2B platform dashboard',
      primaryImageLabel: 'Digital System',
      secondaryImageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile-eYpOKl8hCbLaEv636IYFSUfEBrMeeQ.png',
      secondaryImageAlt: 'Mobile app preview',
      secondaryImageLabel: 'Mobile App'
    },
    {
      __component: 'page.value-home',
      sectionId: 'value',
      eyebrow: 'Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями.',
      title: 'Для проектов, которые нужно не просто нарисовать, а объяснить, согласовать и запустить',
      items: [
        { label: 'Raise', secondaryLabel: 'Привлечь инвестиции', description: 'Investor-ready prototype сайта, web‑продукта или mobile app. Визуализация, которая говорит на языке инвестора.', icon: 'trending-up' },
        { label: 'Win', secondaryLabel: 'Выиграть сделку', description: 'Presale материалы для сложных B2B‑сделок. Понятная архитектура системы или портала, которая убеждает enterprise‑клиентов.', icon: 'trophy' },
        { label: 'Build', secondaryLabel: 'Передать в разработку', description: 'Build-ready дизайн сайта, системы или приложения. Разработчики понимают, что делать, без лишних вопросов.', icon: 'code' }
      ]
    },
    {
      __component: 'page.deliverables-home',
      sectionId: 'deliverables',
      eyebrow: 'Что входит в работу',
      title: 'Что вы получаете на первом этапе',
      items: [
        { title: 'Структурная рамка проекта', description: 'Цели, контекст, границы scope — одним документом', icon: 'file-text' },
        { title: 'Карта ролей и прав доступа', description: 'Кто видит что и почему. Структура до проектирования экранов', icon: 'users' },
        { title: 'Core User Flows', description: 'Основные сценарии использования в деталях', icon: 'git-branch' },
        { title: 'Экранная матрица', description: 'Все экраны продукта, структурированные по ролям и состояниям', icon: 'layout-grid' },
        { title: 'Визуальное направление', description: 'Эстетика, стиль, референсы — согласованы до design-этапа', icon: 'palette' },
        { title: 'Интерактивный прототип', description: 'Premium прототип для презентаций и тестирования', icon: 'mouse-pointer' },
        { title: 'Базовая система компонентов', description: 'Базовые компоненты, готовые к масштабированию', icon: 'layers' },
        { title: 'Сводка для передачи в разработку', description: 'Всё, что нужно разработчику, чтобы начать без вопросов', icon: 'file-check' }
      ]
    },
    {
      __component: 'page.why-home',
      sectionId: 'why',
      eyebrow: 'Почему мы',
      title: 'Почему Atelier Meridian',
      description: 'Проектируем дизайн сайтов, digital-систем и мобильных приложений с продуктовым подходом.',
      items: [
        { title: 'Экспертный подход senior-уровня', description: 'Каждый проект ведёт опытный product-архитектор. Без junior-итераций, без пересогласований основ.' },
        { title: 'AI-ускоренный workflow', description: 'Используем AI для рутинных задач — больше времени на стратегические решения и качество.' },
        { title: 'Структурированные спринты', description: 'Понятный scope, фиксированные сроки, предсказуемый результат. Никаких сюрпризов.' },
        { title: 'Без agency overhead', description: 'Бутиковый формат без лишних слоёв менеджмента. Работаете напрямую с теми, кто делает.' }
      ]
    },
    {
      __component: 'page.audience-home',
      sectionId: 'startups',
      eyebrow: 'Для кого',
      title: 'Кому мы помогаем',
      items: [
        { title: 'Founders и startup-команды', problemLabel: 'Проблема', problem: 'Нужен дизайн сайта, landing page или mobile app для презентации инвестору', solutionLabel: 'Что упрощаем', solution: 'Превращаем идею в структурированный прототип сайта или приложения', resultLabel: 'Результат', result: 'Investor-ready визуализация и понятный scope для первой версии', ctaLabel: 'Получить предложение', ctaHref: '/get-proposal' },
        { title: 'Агентства и integrators', problemLabel: 'Проблема', problem: 'Нужен дизайн сайта, портала или системы для клиента, но нет ресурсов', solutionLabel: 'Что упрощаем', solution: 'White-label дизайн сайтов, mobile apps, B2B-систем под вашим брендом', resultLabel: 'Результат', result: 'Готовый deliverable для вашего клиента без расширения штата', ctaLabel: 'Получить предложение', ctaHref: '/get-proposal' },
        { title: 'B2B-команды и enterprise', problemLabel: 'Проблема', problem: 'Нужен дизайн портала, dashboard или внутренней системы с ясной логикой', solutionLabel: 'Что упрощаем', solution: 'Проектируем интерфейсы B2B-платформ, порталов и корпоративных систем', resultLabel: 'Результат', result: 'Документация и прототип для уверенного старта разработки', ctaLabel: 'Получить предложение', ctaHref: '/get-proposal' }
      ]
    },
    {
      __component: 'page.concepts-home',
      sectionId: 'concepts',
      eyebrow: 'Selected concepts',
      title: 'Концепты и направления, которые можно взять за основу проекта',
      ctaLabel: 'Все концепты',
      ctaHref: '/concepts',
      items: [
        { title: 'B2B-платформа и внутренняя система', badge: 'ДИЗАЙН B2B-СИСТЕМ', challengeLabel: 'Задача', challenge: 'Собрать в единую digital-систему сложный операционный workflow с несколькими ролями, сценариями согласования и dashboard-логикой.', structuredLabel: 'Что структурировали', structured: 'Роли и права доступа, ключевые пользовательские сценарии, экранную карту продукта, логику модулей и повседневные сценарии работы команды.', deliveredLabel: 'Что получилось', delivered: 'Premium prototype, визуальную систему интерфейсов, структуру ключевых экранов и материалы для передачи в разработку.', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_40_41-CePFENS9WLG2LnMAAvGPqCTSEXmfAA.png', imageAlt: 'B2B platform concept' },
        { title: 'Дизайн мобильного приложения', badge: 'ДИЗАЙН МОБИЛЬНЫХ ПРИЛОЖЕНИЙ', challengeLabel: 'Задача', challenge: 'Упаковать fintech-продукт в понятный mobile-first формат, который можно показать инвесторам и использовать как основу для следующего этапа product delivery.', structuredLabel: 'Что структурировали', structured: 'Пользовательские сценарии, onboarding flow, логику финансовых экранов, приоритетные модули и структуру mobile app.', deliveredLabel: 'Что получилось', delivered: 'Investor-ready prototype, визуальное направление, ключевые экраны приложения и материалы для следующего этапа разработки.', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_36_16-zSBwb23xZfTkH98sfm4PeJisalCp4J.png', imageAlt: 'Mobile app concept' },
        { title: 'Клиентский портал и dashboard', badge: 'PORTAL & DASHBOARD DESIGN', challengeLabel: 'Задача', challenge: 'Превратить сложный сервисный процесс в понятный client portal с прозрачной навигацией, workflow-логикой и role-based структурой.', structuredLabel: 'Что структурировали', structured: 'Архитектуру portal, пользовательские сценарии, статусы сервисных запросов, экранную матрицу и ключевые точки взаимодействия.', deliveredLabel: 'Что получилось', delivered: 'Структуру интерфейсов, prototype ключевых экранов, UI-направление и пакет материалов для передачи в разработку.', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_36_44-4Jg9PpfqhaWF1jqQJot1Qe8kayuahF.png', imageAlt: 'Portal concept' }
      ]
    },
    {
      __component: 'page.method-home',
      sectionId: 'method',
      eyebrow: 'Process',
      title: 'Метод работы',
      description: 'Async-first подход. Меньше лишних созвонов, понятный scope, быстрее согласование.',
      items: [
        { number: '01', title: 'Scope', description: 'Определяем границы проекта, роли, ключевые сценарии. Фиксируем scope до начала работы.', details: ['Асинхронный бриф', 'Документ по скоупу', 'Оценка сроков'] },
        { number: '02', title: 'Frame', description: 'Формулируем продуктовую логику. Структурная рамка проекта как основа всех решений.', details: ['Согласование целей', 'Карта ограничений', 'Критерии успеха'] },
        { number: '03', title: 'Architect', description: 'Проектируем UX-архитектуру: роли, flows, screen structure. До первого пикселя дизайна.', details: ['Карта ролей', 'Пользовательские сценарии', 'Экранная матрица'] },
        { number: '04', title: 'Design', description: 'Создаём premium интерфейсы. Визуальное направление, UI-система, интерактивный прототип.', details: ['Визуальное направление', 'UI-компоненты', 'Прототип'] },
        { number: '05', title: 'Deliver', description: 'Передаём в разработку с понятной документацией — без лишних вопросов.', details: ['Design system', 'Сводка для разработки', 'Developer support'] }
      ]
    },
    {
      __component: 'page.pricing-home',
      sectionId: 'formats',
      eyebrow: 'Packages',
      title: 'Форматы работы',
      items: [
        { name: 'Product Framing Sprint', price: 'от $5,400', timeline: '2-3 недели', description: 'Структурирование продукта с нуля. Product framing, роли, core flows, экранная матрица.', includes: ['Структурная рамка проекта', 'Карта ролей и прав', 'Core user flows', 'Экранная матрица', 'Рекомендации по визуальному направлению'], featured: false, buttonLabel: 'Получить предложение', buttonHref: '/get-proposal' },
        { name: 'Build-Ready Prototype', badge: 'Популярный выбор', price: 'от $6,900', timeline: '4-5 недель', description: 'Полный цикл от идеи до прототипа. Всё для презентации инвестору или старта разработки.', includes: ['Всё из Framing Sprint', 'Визуальное направление', 'Интерактивный прототип', 'Базовая система компонентов', 'Материалы для передачи в разработку'], featured: true, buttonLabel: 'Получить предложение', buttonHref: '/get-proposal' },
        { name: 'White-Label Partner Desk', price: 'от $6,500', timeline: 'Ongoing', description: 'Для партнёров и integrators. Продуктовый дизайн под вашим брендом для ваших клиентов.', includes: ['Выделенный capacity', 'White-label deliverables', 'Прямая коммуникация', 'Гибкий scope', 'Приоритетное планирование'], featured: false, buttonLabel: 'Получить предложение', buttonHref: '/get-proposal' }
      ]
    },
    {
      __component: 'page.proposal-home',
      sectionId: 'proposal',
      title: 'Закажите дизайн сайта, системы или приложения',
      description: 'Расскажите о проекте — сайт, портал, B2B‑система или mobile app. Мы предложим формат работы, сроки и стоимость без обязательного звонка.',
      items: [
        { title: 'Оставьте бриф', description: 'Опишите сайт, систему или приложение', icon: 'file-text' },
        { title: 'Получите рекомендацию', description: 'Формат, сроки и ориентир по стоимости', icon: 'mail' },
        { title: 'Подтвердите следующий шаг', description: 'Или пришлите дополнительные материалы', icon: 'check-circle' }
      ],
      buttonLabel: 'Получить предложение',
      buttonHref: '/get-proposal',
      note: 'Для сайта, mobile app, портала или digital‑системы'
    },
    {
      __component: 'page.sample-preview-home',
      sectionId: 'sample-preview',
      eyebrow: 'Материалы первого этапа',
      title: 'Что вы получаете на первом этапе',
      description: 'Структура, логика, прототип и документация — всё, что нужно для уверенного старта разработки.',
      items: [
        { title: 'Структурная рамка', subtitle: 'Цели, контекст, границы проекта', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%BC%D0%BA%D0%B0-ymV853nVDkOWvhLmmek2QmfUFbENUM.png', imageAlt: 'Strategic framing document' },
        { title: 'Архитектура сценариев', subtitle: 'Структура пользовательских flows', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B5%D0%B2%20-1nYqEzacq4GuL3RHRwA9Ss9VDASxnW.png', imageAlt: 'Flow architecture diagram' },
        { title: 'Экранная матрица', subtitle: 'Матрица экранов по ролям', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0%20-ERkytJ7R8AhKODiumExXqNLPexWfT8.png', imageAlt: 'Screen matrix' },
        { title: 'Интерактивный прототип', subtitle: 'Кликабельный прототип ключевых flows', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-sl3pKDIW3vAOChr0PT1KdWnbmO8RND.png', imageAlt: 'Interactive prototype' }
      ],
      note: 'Все материалы передаются в Figma с полной документацией и готовы к обсуждению с командой разработки.'
    },
    {
      __component: 'page.trust-home',
      sectionId: 'trust',
      items: [
        { text: 'Дизайн сайтов, порталов и B2B‑систем' },
        { text: 'Мобильные приложения и dashboards' },
        { text: 'Редизайн и UX/UI‑улучшение' },
        { text: 'От структуры до передачи в разработку' }
      ]
    },
    {
      __component: 'page.faq-home',
      sectionId: 'faq',
      eyebrow: 'FAQ',
      title: 'Частые вопросы',
      items: [
        { question: 'С какими проектами вы работаете?', answer: 'Мы проектируем сайты, корпоративные порталы, B2B‑платформы, клиентские системы, dashboards и мобильные приложения.' },
        { question: 'Что я получу после отправки brief?', answer: 'В течение 24–48 часов вы получите рекомендацию по формату работы, ориентир по срокам и стартовую стоимость.' },
        { question: 'Можно ли работать без звонков?', answer: 'Да, мы работаем async-first. Большинство коммуникации происходит в письменном формате.' },
        { question: 'Подписываете ли вы NDA?', answer: 'Да, стандартная практика. Отправьте ваш NDA или используйте наш шаблон — подпишем до начала обсуждения деталей.' }
      ]
    },
    {
      __component: 'page.final-cta-home',
      sectionId: 'final-cta',
      title: 'Закажите дизайн сайта, digital-системы или мобильного приложения',
      description: 'Опишите проект — сайт, портал, B2B‑платформу или mobile app. Мы подготовим структурированное предложение с форматом работы, сроками и стоимостью.',
      primaryButtonLabel: 'Получить предложение',
      primaryButtonHref: '/get-proposal',
      secondaryButtonLabel: 'Посмотреть цены',
      secondaryButtonHref: '/pricing',
      footnote: 'Для сайтов, корпоративных порталов, B2B‑систем, dashboards и mobile apps'
    }
  ],
  en: [
    { __component: 'page.hero-home', sectionId: 'hero', eyebrow: 'UX/UI Design Studio', titleHtml: '<span class="block">We design</span><span class="block"><span class="font-normal">websites</span>, digital systems</span><span class="block">and <span class="font-normal">mobile apps</span></span><span class="block text-[#8a847a]">before development starts</span>', description: 'We design websites, B2B platforms, and mobile apps with product logic and clear structure.', supportingText: 'Suitable for websites, portals, B2B systems, dashboards, mobile apps, and redesigns.', primaryCtaLabel: 'Get proposal', primaryCtaHref: '/get-proposal', secondaryCtaLabel: 'See pricing', secondaryCtaHref: '/pricing', tags: [{label:'Websites'},{label:'Web products'},{label:'Mobile apps'},{label:'B2B systems'},{label:'Investor-ready prototype'},{label:'Redesign'}], primaryImageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b_-YLfXIBTYWrxNbzxLrJDGx60NVQVUoc.png', primaryImageAlt: 'B2B platform dashboard', primaryImageLabel: 'Digital System', secondaryImageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile-eYpOKl8hCbLaEv636IYFSUfEBrMeeQ.png', secondaryImageAlt: 'Mobile app preview', secondaryImageLabel: 'Mobile App' },
    { __component: 'page.value-home', sectionId: 'value', eyebrow: 'Websites, digital systems, portals, dashboards, and mobile apps', title: 'For projects that need more than design — they need clarity, alignment, and a confident path forward', items: [ { label: 'Raise', description: 'Investor-ready prototype for your website, web product, or mobile app.', icon: 'trending-up' }, { label: 'Win', description: 'Presale materials for complex B2B deals and clear system architecture.', icon: 'trophy' }, { label: 'Build', description: 'Build-ready design for your website, platform, or app.', icon: 'code' } ] },
    { __component: 'page.deliverables-home', sectionId: 'deliverables', eyebrow: 'What You Receive', title: 'What clients receive at the first stage', items: [ { title: 'Project Framework', description: 'Goals, context, scope boundaries — all in one structured document', icon: 'file-text' }, { title: 'Roles & Permissions Map', description: 'Who sees what and why. Structure before screen design', icon: 'users' }, { title: 'Core User Flows', description: 'Key usage scenarios documented in detail', icon: 'git-branch' }, { title: 'Screen Matrix', description: 'All product screens organized by role and state', icon: 'layout-grid' } ] },
    { __component: 'page.why-home', sectionId: 'why', eyebrow: 'Why Us', title: 'Why Atelier Meridian', description: 'We design websites, digital systems, and mobile apps with a product-first approach.', items: [ { title: 'Senior-level expertise', description: 'Every project is led by an experienced product architect.' }, { title: 'AI-accelerated workflow', description: 'We use AI for routine tasks to free more time for strategy.' }, { title: 'Structured sprints', description: 'Clear scope, fixed timelines, predictable outcomes.' }, { title: 'No agency overhead', description: 'Boutique format without unnecessary management layers.' } ] },
    { __component: 'page.audience-home', sectionId: 'startups', eyebrow: 'Who we help', title: 'Who we help', items: [ { title: 'Founders & Startup Teams', problemLabel: 'Challenge', problem: 'Need a website, landing page, or mobile app to present to investors', solutionLabel: 'What we simplify', solution: 'We turn your idea into a structured prototype ready for stakeholders', resultLabel: 'Result', result: 'Investor-ready visualization and clear scope for version one', ctaLabel: 'Get proposal', ctaHref: '/get-proposal' }, { title: 'Agencies & Integrators', problemLabel: 'Challenge', problem: 'Need website, portal, or system design for a client but lack bandwidth', solutionLabel: 'What we simplify', solution: 'White-label design for websites, mobile apps, and B2B systems', resultLabel: 'Result', result: 'Client-ready deliverables without expanding your team', ctaLabel: 'Get proposal', ctaHref: '/get-proposal' }, { title: 'B2B Teams & Enterprise', problemLabel: 'Challenge', problem: 'Need a portal, dashboard, or internal system with clear logic', solutionLabel: 'What we simplify', solution: 'We design interfaces for B2B platforms, portals, and enterprise systems', resultLabel: 'Result', result: 'Documentation and prototype for a confident development start', ctaLabel: 'Get proposal', ctaHref: '/get-proposal' } ] },
    { __component: 'page.concepts-home', sectionId: 'concepts', eyebrow: 'Selected concepts', title: 'Concept directions you can use as a starting point', ctaLabel: 'All concepts', ctaHref: '/concepts', items: [ { title: 'B2B platform and internal system', badge: 'B2B SYSTEM DESIGN', challengeLabel: 'Challenge', challenge: 'Unify a complex operational workflow into one digital system.', structuredLabel: 'We structured', structured: 'Roles, permissions, key user scenarios, screen map, and module logic.', deliveredLabel: 'Delivered', delivered: 'Premium prototype, UI direction, key screens, and handoff materials.', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_40_41-CePFENS9WLG2LnMAAvGPqCTSEXmfAA.png', imageAlt: 'B2B system concept' }, { title: 'Mobile app design', badge: 'MOBILE APP DESIGN', challengeLabel: 'Challenge', challenge: 'Package a fintech product into a mobile-first format for investors and stakeholders.', structuredLabel: 'We structured', structured: 'User scenarios, onboarding, financial screens, and module priorities.', deliveredLabel: 'Delivered', delivered: 'Investor-ready prototype and a clear visual direction.', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_36_16-zSBwb23xZfTkH98sfm4PeJisalCp4J.png', imageAlt: 'Mobile concept' } ] },
    { __component: 'page.method-home', sectionId: 'method', eyebrow: 'Process', title: 'How we work', description: 'Async-first approach. Less unnecessary calls, clearer scope, faster decisions.', items: [ { number: '01', title: 'Scope', description: 'Define project boundaries, roles, and key scenarios before work begins.', details: ['Async brief', 'Scope document', 'Timeline estimate'] }, { number: '02', title: 'Frame', description: 'Shape product logic and the structural frame behind all decisions.', details: ['Goals alignment', 'Constraints map', 'Success criteria'] }, { number: '03', title: 'Architect', description: 'Design UX architecture: roles, flows, and screen structure before pixels.', details: ['Roles map', 'User scenarios', 'Screen matrix'] }, { number: '04', title: 'Design', description: 'Create premium interfaces, visual direction, UI system, and prototype.', details: ['Visual direction', 'UI components', 'Prototype'] }, { number: '05', title: 'Deliver', description: 'Hand off to development with clear documentation and support.', details: ['Design system', 'Developer handoff', 'Support'] } ] },
    { __component: 'page.pricing-home', sectionId: 'formats', eyebrow: 'Packages', title: 'Work formats', items: [ { name: 'Product Framing Sprint', price: 'from $5,400', timeline: '2–3 weeks', description: 'Structure a product from scratch.', includes: ['Project framework', 'Roles & permissions', 'Core user flows', 'Screen matrix'], buttonLabel: 'Get proposal', buttonHref: '/get-proposal' }, { name: 'Build-Ready Prototype', badge: 'Most popular', price: 'from $6,900', timeline: '4–5 weeks', description: 'Full cycle from idea to prototype.', includes: ['Everything in Framing Sprint', 'Visual direction', 'Interactive prototype', 'Developer handoff'], featured: true, buttonLabel: 'Get proposal', buttonHref: '/get-proposal' }, { name: 'White-Label Partner Desk', price: 'from $6,500', timeline: 'Ongoing', description: 'For agencies and integrators under your brand.', includes: ['Dedicated capacity', 'White-label deliverables', 'Direct communication'], buttonLabel: 'Get proposal', buttonHref: '/get-proposal' } ] },
    { __component: 'page.proposal-home', sectionId: 'proposal', title: 'Order website, system, or app design', description: 'Tell us about your project — website, portal, B2B system, or mobile app. We’ll propose a work format, timeline, and pricing.', items: [ { title: 'Submit a Brief', description: 'Describe your website, system, or app', icon: 'file-text' }, { title: 'Get a Recommendation', description: 'Format, timeline, and price estimate', icon: 'mail' }, { title: 'Confirm Next Step', description: 'Or send additional materials', icon: 'check-circle' } ], buttonLabel: 'Get proposal', buttonHref: '/get-proposal', note: 'For websites, mobile apps, portals, or digital systems' },
    { __component: 'page.sample-preview-home', sectionId: 'sample-preview', eyebrow: 'First Phase Deliverables', title: 'What you get in the first phase', description: 'Structure, logic, prototype, and documentation — everything needed for a confident dev kickoff.', items: [ { title: 'Structural Framework', subtitle: 'Goals, context, project boundaries', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-izxISwxnsh153iue55fxis0BfXpJZy.png' }, { title: 'Scenario Architecture', subtitle: 'User flow structure', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8-6Cd1Gr0fJ9T1bQvpwusenVE1qH0EeF.png' }, { title: 'Screen Matrix', subtitle: 'Role-based screen map', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20-CjniSYt05jhRhvZGAnVzEoa5nOSJcb.png' }, { title: 'Interactive Prototype', subtitle: 'Clickable prototype of key flows', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-f73wC5LUW8rwRcU9w00neMYkmRnmYY.png' } ], note: 'All materials are delivered in Figma with full documentation, ready to discuss with your dev team.' },
    { __component: 'page.trust-home', sectionId: 'trust', items: [ { text: 'Website, portal, and B2B system design' }, { text: 'Mobile apps and dashboards' }, { text: 'Redesign and UX/UI improvement' }, { text: 'From structure to developer handoff' } ] },
    { __component: 'page.faq-home', sectionId: 'faq', eyebrow: 'FAQ', title: 'Frequently asked questions', items: [ { question: 'What types of projects do you work on?', answer: 'We design websites, B2B platforms, client portals, dashboards, and mobile apps.' }, { question: 'What happens after I send the brief?', answer: 'Within 24–48 hours you get a recommended format, rough timeline, and a starting price range.' }, { question: 'Can we work without calls?', answer: 'Yes. We work async-first and use calls only when needed.' }, { question: 'Do you sign NDAs?', answer: 'Yes, standard practice. Send yours or use ours.' } ] },
    { __component: 'page.final-cta-home', sectionId: 'final-cta', title: 'Order design for your website, digital system, or mobile app', description: 'Describe the project and we’ll prepare a structured proposal with format, timeline, and pricing.', primaryButtonLabel: 'Get proposal', primaryButtonHref: '/get-proposal', secondaryButtonLabel: 'See pricing', secondaryButtonHref: '/pricing', footnote: 'For websites, portals, B2B systems, dashboards, and mobile apps' }
  ],
  ar: [
    { __component: 'page.hero-home', sectionId: 'hero', eyebrow: 'استوديو لبنية المنتجات وتصميم الواجهات', titleHtml: 'نصمم المواقع والأنظمة الرقمية وتطبيقات الجوال قبل أن تبدأ مرحلة التطوير', description: 'يساعد Atelier Meridian المؤسسين وفرق B2B والوكالات وشركاء التنفيذ على تحويل الفكرة الأولية إلى هيكل منتج واضح وواجهات متميزة.', supportingText: 'مناسب للمواقع، والأنظمة الرقمية، والبوابات، ولوحات التحكم، وتطبيقات الجوال، ومشاريع إعادة التصميم.', primaryCtaLabel: 'اطلب عرضاً', primaryCtaHref: '/get-proposal', secondaryCtaLabel: 'اطلع على الأسعار', secondaryCtaHref: '/pricing', tags: [{label:'المواقع'},{label:'مواقع الشركات'},{label:'الأنظمة الرقمية'},{label:'بوابات العملاء'},{label:'لوحات التحكم'},{label:'تطبيقات الجوال'}], primaryImageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b_-YLfXIBTYWrxNbzxLrJDGx60NVQVUoc.png', primaryImageAlt: 'B2B dashboard', primaryImageLabel: 'نظام رقمي', secondaryImageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile-eYpOKl8hCbLaEv636IYFSUfEBrMeeQ.png', secondaryImageAlt: 'Mobile app', secondaryImageLabel: 'تطبيق جوال' },
    { __component: 'page.value-home', sectionId: 'value', eyebrow: 'المواقع والأنظمة الرقمية والبوابات ولوحات التحكم وتطبيقات الجوال', title: 'للمشاريع التي تحتاج إلى أكثر من التصميم — تحتاج إلى وضوح وتوافق وخطوة تالية واثقة', items: [ { label: 'Raise', description: 'نموذج أولي جاهز للمستثمرين لموقعك أو منتجك الرقمي أو تطبيقك.', icon: 'trending-up' }, { label: 'Win', description: 'مواد presale وصفاً معمارياً واضحاً يقنع عملاء B2B.', icon: 'trophy' }, { label: 'Build', description: 'تصميم جاهز للتطوير للموقع أو المنصة أو التطبيق.', icon: 'code' } ] },
    { __component: 'page.deliverables-home', sectionId: 'deliverables', eyebrow: 'ما تحصل عليه', title: 'ما يحصل عليه العملاء في المرحلة الأولى', items: [ { title: 'إطار المشروع', description: 'الأهداف والسياق وحدود النطاق في وثيقة واحدة', icon: 'file-text' }, { title: 'خريطة الأدوار والصلاحيات', description: 'من يرى ماذا ولماذا قبل تصميم الشاشات', icon: 'users' }, { title: 'المسارات الأساسية للمستخدم', description: 'سيناريوهات الاستخدام الرئيسية بالتفصيل', icon: 'git-branch' }, { title: 'خريطة الشاشات', description: 'كل الشاشات منظّمة حسب الأدوار والحالات', icon: 'layout-grid' } ] },
    { __component: 'page.why-home', sectionId: 'why', eyebrow: 'لماذا نحن', title: 'لماذا Atelier Meridian', description: 'نصمم المواقع والأنظمة الرقمية وتطبيقات الموبايل بمنهجية تضع المنتج أولاً.', items: [ { title: 'خبرة على مستوى كبار المحترفين', description: 'كل مشروع يقوده معماري منتجات ذو خبرة.' }, { title: 'سير عمل معزز بالذكاء الاصطناعي', description: 'نستخدم الذكاء الاصطناعي للمهام الروتينية لتوفير وقت أكثر للقرارات الاستراتيجية.' }, { title: 'سباقات منظمة', description: 'نطاق واضح وجداول ثابتة ونتائج متوقعة.' }, { title: 'بدون أعباء الوكالات', description: 'نموذج بوتيكي بدون طبقات إدارية غير ضرورية.' } ] },
    { __component: 'page.audience-home', sectionId: 'startups', eyebrow: 'من نساعد', title: 'مع من نعمل', items: [ { title: 'المؤسسون وفرق الشركات الناشئة', problemLabel: 'التحدي', problem: 'تحتاج موقعاً أو صفحة هبوط أو تطبيق موبايل لعرضه على المستثمرين', solutionLabel: 'ما نبسطه', solution: 'نحوّل الفكرة إلى نموذج أولي منظم وجاهز لأصحاب المصلحة', resultLabel: 'النتيجة', result: 'عرض مرئي جاهز للمستثمرين ونطاق واضح للنسخة الأولى', ctaLabel: 'طلب عرض', ctaHref: '/get-proposal' }, { title: 'الوكالات والشركاء', problemLabel: 'التحدي', problem: 'تحتاج تصميم موقع أو بوابة أو نظام لعميل لكن ليس لديك القدرة', solutionLabel: 'ما نبسطه', solution: 'تصميم White-label للمواقع وتطبيقات الجوال وأنظمة B2B', resultLabel: 'النتيجة', result: 'تسليم جاهز لعميلك دون توسيع فريقك', ctaLabel: 'طلب عرض', ctaHref: '/get-proposal' }, { title: 'فرق B2B والشركات الكبرى', problemLabel: 'التحدي', problem: 'تحتاج بوابة أو لوحة تحكم أو نظاماً داخلياً بمنطق واضح', solutionLabel: 'ما نبسطه', solution: 'نصمم واجهات منصات B2B والبوابات والأنظمة المؤسسية', resultLabel: 'النتيجة', result: 'توثيق ونموذج أولي لبداية تطوير واثقة', ctaLabel: 'طلب عرض', ctaHref: '/get-proposal' } ] },
    { __component: 'page.concepts-home', sectionId: 'concepts', eyebrow: 'مفاهيم مختارة', title: 'مفاهيم واتجاهات يمكن استخدامها كنقطة انطلاق للمشروع', ctaLabel: 'كل المفاهيم', ctaHref: '/concepts', items: [ { title: 'منصة B2B ونظام داخلي', badge: 'تصميم أنظمة B2B', challengeLabel: 'التحدي', challenge: 'تجميع سير عمل تشغيلي معقد في نظام رقمي واحد.', structuredLabel: 'ما قمنا به', structured: 'هيكلة الأدوار والصلاحيات والسيناريوهات وخريطة الشاشات والمنطق العام.', deliveredLabel: 'المخرجات', delivered: 'نموذج أولي متميز واتجاه بصري وشاشات أساسية ومواد للتطوير.', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_40_41-CePFENS9WLG2LnMAAvGPqCTSEXmfAA.png', imageAlt: 'B2B concept' }, { title: 'تصميم تطبيق موبايل', badge: 'تصميم تطبيقات الجوال', challengeLabel: 'التحدي', challenge: 'تقديم منتج fintech بصيغة mobile-first يمكن عرضه على المستثمرين.', structuredLabel: 'ما قمنا به', structured: 'هيكلة السيناريوهات وonboarding وشاشات التمويل وأولويات الوحدات.', deliveredLabel: 'المخرجات', delivered: 'نموذج أولي جاهز للمستثمرين واتجاه بصري واضح.', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_36_16-zSBwb23xZfTkH98sfm4PeJisalCp4J.png', imageAlt: 'Mobile concept' } ] },
    { __component: 'page.method-home', sectionId: 'method', eyebrow: 'المنهجية', title: 'كيف نعمل', description: 'منهج async-first. مكالمات أقل، نطاق أوضح، واتخاذ قرار أسرع.', items: [ { number: '01', title: 'Scope', description: 'نحدد حدود المشروع والأدوار والسيناريوهات الأساسية قبل بدء العمل.', details: ['Brief غير متزامن', 'وثيقة النطاق', 'تقدير المدة'] }, { number: '02', title: 'Frame', description: 'نصوغ منطق المنتج والإطار الهيكلي الذي يبنى عليه كل قرار.', details: ['مواءمة الأهداف', 'خريطة القيود', 'معايير النجاح'] }, { number: '03', title: 'Architect', description: 'نصمم بنية UX: الأدوار والتدفقات وهيكل الشاشات قبل أول بكسل.', details: ['خريطة الأدوار', 'سيناريوهات المستخدم', 'مصفوفة الشاشات'] }, { number: '04', title: 'Design', description: 'ننشىء واجهات premium واتجاهاً بصرياً ونموذجاً أولياً.', details: ['اتجاه بصري', 'مكونات UI', 'نموذج أولي'] }, { number: '05', title: 'Deliver', description: 'نسلم إلى التطوير مع توثيق واضح ودعم.', details: ['Design system', 'مواد التسليم', 'دعم التطوير'] } ] },
    { __component: 'page.pricing-home', sectionId: 'formats', eyebrow: 'الباقات', title: 'صيغ العمل', items: [ { name: 'Product Framing Sprint', price: 'من $5,400', timeline: '2–3 أسابيع', description: 'هيكلة المنتج من الصفر.', includes: ['إطار المشروع', 'الأدوار والصلاحيات', 'المسارات الأساسية', 'مصفوفة الشاشات'], buttonLabel: 'اطلب عرضاً', buttonHref: '/get-proposal' }, { name: 'Build-Ready Prototype', badge: 'الخيار الأكثر طلباً', price: 'من $6,900', timeline: '4–5 أسابيع', description: 'من الفكرة إلى النموذج الأولي الجاهز.', includes: ['كل ما في Framing Sprint', 'اتجاه بصري', 'نموذج أولي', 'مواد التسليم'], featured: true, buttonLabel: 'اطلب عرضاً', buttonHref: '/get-proposal' }, { name: 'White-Label Partner Desk', price: 'من $6,500', timeline: 'مستمر', description: 'للوكالات وشركاء التنفيذ تحت علامتكم.', includes: ['قدرة مخصصة', 'White-label deliverables', 'تواصل مباشر'], buttonLabel: 'اطلب عرضاً', buttonHref: '/get-proposal' } ] },
    { __component: 'page.proposal-home', sectionId: 'proposal', title: 'اطلب تصميم موقع أو نظام أو تطبيق', description: 'أخبرنا عن مشروعك — موقع أو بوابة أو نظام B2B أو تطبيق جوال. سنقترح صيغة العمل والمدة والتكلفة.', items: [ { title: 'أرسل ملخصاً', description: 'صف موقعك أو نظامك أو تطبيقك', icon: 'file-text' }, { title: 'احصل على توصية', description: 'صيغة العمل والمدة والتكلفة التقديرية', icon: 'mail' }, { title: 'أكد الخطوة التالية', description: 'أو أرسل مواد إضافية', icon: 'check-circle' } ], buttonLabel: 'اطلب عرضاً', buttonHref: '/get-proposal', note: 'للمواقع والبوابات والأنظمة الرقمية وتطبيقات الجوال' },
    { __component: 'page.sample-preview-home', sectionId: 'sample-preview', eyebrow: 'مخرجات المرحلة الأولى', title: 'ما الذي تحصل عليه في المرحلة الأولى', description: 'هيكل ومنطق ونموذج أولي وتوثيق — كل ما تحتاجه لبداية تطوير واثقة.', items: [ { title: 'الإطار الهيكلي', subtitle: 'الأهداف والسياق وحدود المشروع', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%BC%D0%BA%D0%B0-ymV853nVDkOWvhLmmek2QmfUFbENUM.png' }, { title: 'بنية السيناريوهات', subtitle: 'هيكل تدفقات المستخدم', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B5%D0%B2%20-1nYqEzacq4GuL3RHRwA9Ss9VDASxnW.png' }, { title: 'مصفوفة الشاشات', subtitle: 'خريطة الشاشات حسب الأدوار', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0%20-ERkytJ7R8AhKODiumExXqNLPexWfT8.png' }, { title: 'نموذج أولي تفاعلي', subtitle: 'نموذج قابل للنقر للتدفقات الأساسية', imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-sl3pKDIW3vAOChr0PT1KdWnbmO8RND.png' } ], note: 'يتم تسليم جميع المواد في Figma مع توثيق كامل، وجاهزة للنقاش مع فريق التطوير.' },
    { __component: 'page.trust-home', sectionId: 'trust', items: [ { text: 'تصميم المواقع والبوابات وأنظمة B2B' }, { text: 'تطبيقات الجوال ولوحات التحكم' }, { text: 'إعادة التصميم وتحسين UX/UI' }, { text: 'من الهيكلة إلى التسليم للتطوير' } ] },
    { __component: 'page.faq-home', sectionId: 'faq', eyebrow: 'الأسئلة الشائعة', title: 'الأسئلة الشائعة', items: [ { question: 'ما أنواع المشاريع التي تعملون عليها؟', answer: 'نصمم المواقع ومنصات B2B والبوابات ولوحات التحكم وتطبيقات الجوال.' }, { question: 'ماذا يحدث بعد إرسال الملخص؟', answer: 'خلال 24–48 ساعة تحصل على توصية حول صيغة العمل والمدة والسعر المبدئي.' }, { question: 'هل يمكن العمل بدون مكالمات؟', answer: 'نعم. نعمل async-first ونستخدم المكالمات فقط عند الحاجة.' }, { question: 'هل توقّعون اتفاقيات عدم إفصاح؟', answer: 'نعم، هذه ممارسة اعتيادية. أرسل لنا اتفاقيتك أو استخدم نموذجنا.' } ] },
    { __component: 'page.final-cta-home', sectionId: 'final-cta', title: 'اطلب تصميم موقعك أو نظامك الرقمي أو تطبيقك', description: 'شاركنا تفاصيل المشروع وسنعد لك عرضاً منظماً مع الصيغة والمدة والتكلفة.', primaryButtonLabel: 'اطلب عرضاً', primaryButtonHref: '/get-proposal', secondaryButtonLabel: 'اطلع على الأسعار', secondaryButtonHref: '/pricing', footnote: 'للمواقع والبوابات والأنظمة الرقمية ولوحات التحكم وتطبيقات الجوال' }
  ]
} as const
