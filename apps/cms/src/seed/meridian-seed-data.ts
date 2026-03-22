export const HOME_SEED = {
  ru: {
    global: {
      siteName: 'Atelier Meridian',
      siteDescription:
        'Бутиковая студия продуктовой архитектуры. Структурируем сложные digital-продукты до начала разработки.',
      contactEmail: 'hello@atelier-meridian.com',
      defaultSeo: {
        metaTitle: 'Atelier Meridian — Product Architecture & Interface Studio',
        metaDescription:
          'Проектируем сайты, digital-системы и mobile apps до начала разработки. Product framing, UX-архитектура и premium interface design.',
      },
      menuItems: [
        { label: 'Решения', href: '/solutions', openInNewTab: false },
        { label: 'Для стартапов', href: '/for-startups', openInNewTab: false },
        { label: 'Для партнёров', href: '/for-agencies', openInNewTab: false },
        { label: 'Цены', href: '/pricing', openInNewTab: false },
        { label: 'Как мы работаем', href: '/method', openInNewTab: false },
        { label: 'Концепты', href: '/concepts', openInNewTab: false },
        { label: 'Получить предложение', href: '/get-proposal', openInNewTab: false }
      ]
    },
    page: {
      title: 'Главная',
      slug: 'home',
      template: 'home',
      seo: {
        metaTitle: 'Atelier Meridian — Проектируем сайты, digital‑системы и mobile apps',
        metaDescription:
          'Делаем дизайн сайтов, интерфейсов B2B-платформ и мобильных приложений с продуктовой логикой и понятной структурой.'
      },
      blocks: [
        {
          __component: 'page.hero',
          eyebrow: 'UX/UI Design Studio',
          title: 'Проектируем сайты, digital‑системы и mobile apps до начала разработки',
          description:
            '<p>Делаем дизайн сайтов, интерфейсов B2B-платформ и мобильных приложений с продуктовой логикой и понятной структурой.</p>',
          primaryCtaLabel: 'Получить предложение',
          primaryCtaHref: '/get-proposal',
          secondaryCtaLabel: 'Посмотреть цены',
          secondaryCtaHref: '/pricing'
        },
        {
          __component: 'page.cards-grid',
          sectionId: 'value',
          title: 'Для проектов, которые нужно не просто нарисовать, а объяснить, согласовать и запустить',
          description:
            'Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями.',
          items: [
            {
              title: 'Raise — Привлечь инвестиции',
              description:
                'Investor-ready prototype сайта, web-продукта или mobile app. Визуализация, которая говорит на языке инвестора.'
            },
            {
              title: 'Win — Выиграть сделку',
              description:
                'Presale материалы для сложных B2B-сделок. Понятная архитектура системы или портала, которая убеждает enterprise-клиентов.'
            },
            {
              title: 'Build — Передать в разработку',
              description:
                'Build-ready дизайн сайта, системы или приложения. Разработчики понимают, что делать, без лишних вопросов.'
            }
          ]
        },
        {
          __component: 'page.cards-grid',
          sectionId: 'deliverables',
          title: 'Что вы получаете на первом этапе',
          description: 'Что входит в работу',
          items: [
            {
              title: 'Структурная рамка проекта',
              description: 'Цели, контекст, границы scope — одним документом.'
            },
            {
              title: 'Карта ролей и прав доступа',
              description: 'Кто видит что и почему. Структура до проектирования экранов.'
            },
            {
              title: 'Core User Flows',
              description: 'Основные сценарии использования в деталях.'
            },
            {
              title: 'Экранная матрица',
              description: 'Все экраны продукта, структурированные по ролям и состояниям.'
            },
            {
              title: 'Визуальное направление',
              description: 'Эстетика, стиль, референсы — согласованы до design-этапа.'
            },
            {
              title: 'Интерактивный прототип',
              description: 'Premium прототип для презентаций и тестирования.'
            },
            {
              title: 'Базовая система компонентов',
              description: 'Базовые компоненты, готовые к масштабированию.'
            },
            {
              title: 'Сводка для передачи в разработку',
              description: 'Всё, что нужно разработчику, чтобы начать без вопросов.'
            }
          ]
        },
        {
          __component: 'page.cards-grid',
          sectionId: 'why',
          title: 'Почему Atelier Meridian',
          description: 'Проектируем дизайн сайтов, digital-систем и мобильных приложений с продуктовым подходом.',
          items: [
            {
              title: 'Экспертный подход senior-уровня',
              description: 'Каждый проект ведёт опытный product-архитектор. Без junior-итераций, без пересогласований основ.'
            },
            {
              title: 'AI-ускоренный workflow',
              description: 'Используем AI для рутинных задач — больше времени на стратегические решения и качество.'
            },
            {
              title: 'Структурированные спринты',
              description: 'Понятный scope, фиксированные сроки, предсказуемый результат. Никаких сюрпризов.'
            },
            {
              title: 'Без agency overhead',
              description: 'Бутиковый формат без лишних слоёв менеджмента. Работаете напрямую с теми, кто делает.'
            }
          ]
        },
        {
          __component: 'page.cards-grid',
          sectionId: 'audience',
          title: 'Кому мы помогаем',
          description: 'Для кого',
          items: [
            {
              title: 'Founders и startup-команды',
              description:
                'Нужен дизайн сайта, landing page или mobile app для презентации инвестору. Превращаем идею в структурированный прототип сайта или приложения.'
            },
            {
              title: 'Агентства и integrators',
              description:
                'Нужен дизайн сайта, портала или системы для клиента, но нет ресурсов. White-label дизайн сайтов, mobile apps, B2B-систем под вашим брендом.'
            },
            {
              title: 'B2B-команды и enterprise',
              description:
                'Нужен дизайн портала, dashboard или внутренней системы с ясной логикой. Проектируем интерфейсы B2B-платформ, порталов и корпоративных систем.'
            }
          ]
        },
        {
          __component: 'page.cta',
          sectionId: 'concepts',
          title: 'Посмотреть типовые концепты студии',
          description:
            'Примеры направлений для B2B-платформ, мобильных приложений, клиентских порталов и premium сайтов.',
          buttonLabel: 'Посмотреть концепты',
          buttonHref: '/concepts'
        },
        {
          __component: 'page.cards-grid',
          sectionId: 'method',
          title: 'Метод работы',
          description: 'Async-first подход. Меньше лишних созвонов, понятный scope, быстрее согласование.',
          items: [
            {
              title: '01 — Scope',
              description: 'Определяем границы проекта, роли и ключевые сценарии. Асинхронный бриф, документ по scope, оценка сроков.'
            },
            {
              title: '02 — Frame',
              description: 'Формулируем продуктовую логику. Согласование целей, карта ограничений и критерии успеха.'
            },
            {
              title: '03 — Architect',
              description: 'Проектируем UX-архитектуру: роли, flows, screen structure. До первого пикселя дизайна.'
            },
            {
              title: '04 — Design',
              description: 'Создаём premium интерфейсы. Визуальное направление, UI-система и интерактивный прототип.'
            },
            {
              title: '05 — Deliver',
              description: 'Передаём в разработку с понятной документацией — без лишних вопросов.'
            }
          ]
        },
        {
          __component: 'page.cards-grid',
          sectionId: 'pricing',
          title: 'Форматы работы',
          description: 'Packages',
          items: [
            {
              title: 'Product Framing Sprint — от $5,400 / 2–3 недели',
              description:
                'Структурирование продукта с нуля: product framing, роли, core flows, экранная матрица, визуальные рекомендации.'
            },
            {
              title: 'Build-Ready Prototype — от $6,900 / 4–5 недель',
              description:
                'Полный цикл от идеи до прототипа. Всё для презентации инвестору или старта разработки.'
            },
            {
              title: 'White-Label Partner Desk — от $6,500 / ongoing',
              description:
                'Для партнёров и integrators. Продуктовый дизайн под вашим брендом для ваших клиентов.'
            }
          ]
        },
        {
          __component: 'page.cards-grid',
          sectionId: 'proposal-steps',
          title: 'Закажите дизайн сайта, системы или приложения',
          description:
            'Расскажите о проекте — сайт, портал, B2B-система или mobile app. Мы предложим формат работы, сроки и стоимость без обязательного звонка.',
          items: [
            {
              title: 'Оставьте бриф',
              description: 'Опишите сайт, систему или приложение.'
            },
            {
              title: 'Получите рекомендацию',
              description: 'Формат, сроки и ориентир по стоимости.'
            },
            {
              title: 'Подтвердите следующий шаг',
              description: 'Или пришлите дополнительные материалы.'
            }
          ]
        },
        {
          __component: 'page.form-section',
          sectionId: 'proposal-form',
          title: 'Получить предложение',
          description:
            'Для сайта, mobile app, портала или digital-системы. Файлы принимаются до 50 MB на файл.',
          submitLabel: 'Получить предложение',
          successMessage:
            'Спасибо. Мы получили ваш бриф и вернёмся с рекомендацией по формату работы, срокам и стоимости.',
          acceptsFiles: true,
          maxFileSizeMb: 50
        },
        {
          __component: 'page.cards-grid',
          sectionId: 'trust',
          title: 'Что мы проектируем',
          description: 'Сфокусированы на продуктах, которые нужно не только красиво показать, но и структурировать.',
          items: [
            { title: 'Дизайн сайтов, порталов и B2B-систем' },
            { title: 'Мобильные приложения и dashboards' },
            { title: 'Редизайн и UX/UI-улучшение' },
            { title: 'От структуры до передачи в разработку' }
          ]
        },
        {
          __component: 'page.faq',
          sectionId: 'faq',
          title: 'Частые вопросы',
          items: [
            {
              question: 'С какими проектами вы работаете?',
              answer:
                '<p>Мы проектируем сайты, корпоративные порталы, B2B-платформы, клиентские системы, dashboards и мобильные приложения. Работаем как с новыми проектами, так и с редизайном существующих продуктов.</p>'
            },
            {
              question: 'Что я получу после отправки brief?',
              answer:
                '<p>В течение 24–48 часов вы получите рекомендацию по формату работы, ориентир по срокам и стартовую стоимость — для сайта, системы или приложения любой сложности.</p>'
            },
            {
              question: 'Можно ли работать без звонков?',
              answer:
                '<p>Да, мы работаем async-first. Большинство коммуникации происходит в письменном формате. Созвоны — по необходимости и с понятной agenda.</p>'
            },
            {
              question: 'Поддерживаете ли вы white-label формат?',
              answer:
                '<p>Да. Для партнёров и integrators у нас есть White-Label Partner Desk. Вы получаете premium дизайн сайтов, систем и приложений под своим брендом.</p>'
            },
            {
              question: 'Можно ли прийти с существующим сайтом или системой для редизайна?',
              answer:
                '<p>Конечно. Мы работаем как с идеями на этапе концепции, так и с редизайном существующих сайтов, порталов и digital-продуктов.</p>'
            },
            {
              question: 'Подписываете ли вы NDA?',
              answer:
                '<p>Да, стандартная практика. Отправьте ваш NDA или используйте наш шаблон — подпишем до начала обсуждения деталей.</p>'
            },
            {
              question: 'Как быстро может стартовать проект?',
              answer:
                '<p>Обычно через 3–5 рабочих дней после согласования scope и оплаты. При срочной необходимости — обсуждаем приоритетный старт.</p>'
            },
            {
              question: 'Вы помогаете только с дизайном или со структурой продукта тоже?',
              answer:
                '<p>Мы начинаем со структуры. Product framing, UX-архитектура, роли и flows — это основа. Дизайн сайта, системы или приложения строится на этом фундаменте.</p>'
            }
          ]
        },
        {
          __component: 'page.cta',
          sectionId: 'final-cta',
          title: 'Закажите дизайн сайта, digital-системы или мобильного приложения',
          description:
            'Опишите проект — сайт, портал, B2B-платформу или mobile app. Мы подготовим структурированное предложение с форматом работы, сроками и стоимостью.',
          buttonLabel: 'Получить предложение',
          buttonHref: '/get-proposal'
        }
      ]
    }
  },
  en: {
    global: {
      siteName: 'Atelier Meridian',
      siteDescription:
        'Boutique product architecture studio. We structure complex digital products before development starts.',
      contactEmail: 'hello@atelier-meridian.com',
      defaultSeo: {
        metaTitle: 'Atelier Meridian — Product Architecture & Interface Studio',
        metaDescription:
          'We design websites, digital systems and mobile apps before development starts. Product framing, UX architecture and premium interface design.'
      },
      menuItems: [
        { label: 'Solutions', href: '/solutions', openInNewTab: false },
        { label: 'For startups', href: '/for-startups', openInNewTab: false },
        { label: 'For partners', href: '/for-agencies', openInNewTab: false },
        { label: 'Pricing', href: '/pricing', openInNewTab: false },
        { label: 'How we work', href: '/method', openInNewTab: false },
        { label: 'Concepts', href: '/concepts', openInNewTab: false },
        { label: 'Get proposal', href: '/get-proposal', openInNewTab: false }
      ]
    },
    page: {
      title: 'Home',
      slug: 'home',
      template: 'home',
      seo: {
        metaTitle: 'Atelier Meridian — Websites, digital systems and mobile apps',
        metaDescription:
          'We design websites, interfaces for B2B platforms and mobile applications with product logic and clear structure.'
      },
      blocks: []
    }
  },
  ar: {
    global: {
      siteName: 'Atelier Meridian',
      siteDescription:
        'استوديو متخصص في هيكلة المنتجات الرقمية. نساعد على تنظيم المنتجات المعقدة قبل بدء التطوير.',
      contactEmail: 'hello@atelier-meridian.com',
      defaultSeo: {
        metaTitle: 'Atelier Meridian — Product Architecture & Interface Studio',
        metaDescription:
          'نصمم المواقع والأنظمة الرقمية وتطبيقات الجوال قبل بدء التطوير مع منطق منتجي وبنية واضحة.'
      },
      menuItems: [
        { label: 'الحلول', href: '/solutions', openInNewTab: false },
        { label: 'للشركات الناشئة', href: '/for-startups', openInNewTab: false },
        { label: 'للشركاء', href: '/for-agencies', openInNewTab: false },
        { label: 'الأسعار', href: '/pricing', openInNewTab: false },
        { label: 'كيف نعمل', href: '/method', openInNewTab: false },
        { label: 'المفاهيم', href: '/concepts', openInNewTab: false },
        { label: 'احصل على عرض', href: '/get-proposal', openInNewTab: false }
      ]
    },
    page: {
      title: 'الرئيسية',
      slug: 'home',
      template: 'home',
      seo: {
        metaTitle: 'Atelier Meridian — تصميم المواقع والأنظمة الرقمية وتطبيقات الجوال',
        metaDescription:
          'نصمم المواقع وواجهات منصات B2B وتطبيقات الجوال بمنطق منتجي وبنية واضحة.'
      },
      blocks: []
    }
  }
} as const;
