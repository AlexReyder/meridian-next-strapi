"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"

const navItems = [
  { label: "Решения", href: "/solutions" },
  { label: "Для стартапов", href: "/for-startups" },
  { label: "Для партнёров", href: "/for-agencies" },
  { label: "Цены", href: "/pricing" },
  { label: "Как мы работаем", href: "/method" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) => mounted && pathname === href

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with Signature Accent */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              {/* Signature chromatic mark */}
              <div className="flex flex-col gap-0.5">
                <div className="w-[3px] h-2 bg-signature-cobalt rounded-full" />
                <div className="w-[3px] h-1.5 bg-signature-brass rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-medium tracking-tight text-foreground">
                  Atelier Meridian
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Product Architecture & Interface Studio
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive(item.href) 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button 
              type="button"
              className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>RU</span>
            </button>
            <Link 
              href="/get-proposal"
              className={`hidden md:inline-flex items-center justify-center text-xs uppercase tracking-wider px-5 h-8 rounded-md font-medium transition-colors ${
                isActive("/get-proposal")
                  ? "bg-accent/20 text-foreground border border-accent/40"
                  : "bg-foreground text-background hover:bg-foreground/90"
              }`}
            >
              Получить предложение
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm transition-colors ${
                  isActive(item.href) 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link 
                href="/get-proposal"
                className="flex w-full items-center justify-center bg-foreground text-background hover:bg-foreground/90 text-xs uppercase tracking-wider px-5 h-10 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Получить предложение
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
