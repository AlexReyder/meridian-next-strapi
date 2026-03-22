import Link from "next/link"

const navColumns = [
  {
    title: "Решения",
    links: [
      { label: "Все решения", href: "/solutions" },
      { label: "Для стартапов", href: "/for-startups" },
      { label: "Для партнёров", href: "/for-agencies" },
      { label: "Концепты студии", href: "/concepts" },
    ],
  },
  {
    title: "Форматы",
    links: [
      { label: "Product Framing Sprint", href: "/pricing#framing" },
      { label: "Build-Ready Prototype", href: "/pricing#prototype" },
      { label: "Partner Desk", href: "/pricing#partner" },
    ],
  },
  {
    title: "Студия",
    links: [
      { label: "Как мы работаем", href: "/method" },
      { label: "Цены", href: "/pricing" },
      { label: "Получить предложение", href: "/get-proposal" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand with Signature Accent */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                {/* Signature chromatic mark - inverted for dark bg */}
                <div className="flex flex-col gap-0.5">
                  <div className="w-[3px] h-2 bg-signature-cobalt-soft rounded-full" />
                  <div className="w-[3px] h-1.5 bg-signature-brass-soft rounded-full" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-medium tracking-tight text-background">
                    Atelier Meridian
                  </span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-background/50 mt-1">
                    Product Architecture & Interface Studio
                  </span>
                </div>
              </Link>
              <p className="text-sm text-background/60 leading-relaxed max-w-sm">
                Бутиковая студия продуктовой архитектуры. Структурируем сложные digital-продукты до начала разработки.
              </p>
              <a 
                href="mailto:hello@atelier-meridian.com" 
                className="inline-block mt-6 text-sm text-background/80 hover:text-background transition-colors"
              >
                hello@atelier-meridian.com
              </a>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-6 lg:col-start-6">
              <div className="grid sm:grid-cols-3 gap-8">
                {navColumns.map((column) => (
                  <div key={column.title}>
                    <h4 className="text-xs uppercase tracking-[0.15em] text-background/50 mb-4">
                      {column.title}
                    </h4>
                    <ul className="space-y-3">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <Link 
                            href={link.href}
                            className="text-sm text-background/70 hover:text-background transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Language */}
            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.15em] text-background/50 mb-4">
                Язык
              </h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-background hover:text-background/80 transition-colors">
                  Русский
                </a>
                <a href="#" className="block text-sm text-background/50 hover:text-background/80 transition-colors">
                  English
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom with Signature Divider */}
        <div className="relative py-8">
          {/* Signature accent divider */}
          <div className="absolute top-0 left-0 right-0 flex items-center">
            <div className="flex-1 h-[1px] bg-background/10" />
            <div className="h-[2px] w-3 bg-signature-cobalt-soft/60 rounded-full mx-1" />
            <div className="h-[2px] w-2 bg-signature-brass-soft/60 rounded-full" />
            <div className="flex-1 h-[1px] bg-background/10" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/40">
              © 2026 Atelier Meridian. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
