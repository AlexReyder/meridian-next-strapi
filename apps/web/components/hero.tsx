"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categoryTags = [
  "Landing pages и сайты",
  "Web products",
  "Mobile apps",
  "MVP interfaces",
  "Investor-ready prototype",
  "Redesign"
]

// Real portfolio screenshots
const IMAGES = {
  dashboard: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b_-YLfXIBTYWrxNbzxLrJDGx60NVQVUoc.png",
  mobile: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile-eYpOKl8hCbLaEv636IYFSUfEBrMeeQ.png"
}

export function Hero() {
  return (
    <section className="relative pt-20 pb-8 lg:pt-24 lg:pb-12 overflow-hidden">
      {/* Premium warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#f5f3ef] pointer-events-none" />
      
      {/* Subtle architectural grid */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #9a9080 1px, transparent 1px), linear-gradient(to bottom, #9a9080 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-4">
          
          {/* =========================================== */}
          {/* LEFT: CONTENT BLOCK                        */}
          {/* Strong headline, subtext, CTAs, tags       */}
          {/* =========================================== */}
          <div className="w-full lg:w-[42%] xl:w-[40%] flex-shrink-0 lg:pt-8 xl:pt-12">
            {/* Signature eyebrow with chromatic accent */}
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="flex items-center">
                <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
                <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a9080]">UX/UI Design Studio</span>
            </div>
            
            {/* Large Editorial Headline */}
            <h1 className="font-serif text-[2.25rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem] font-light leading-[1.08] tracking-[-0.015em] text-[#2a2520]">
              <span className="block">Проектируем</span>
              <span className="block"><span className="font-normal">сайты</span>, digital&#8209;системы</span>
              <span className="block">и <span className="font-normal">mobile apps</span></span>
              <span className="block text-[#8a847a]">до начала разработки</span>
            </h1>
            
            <p className="mt-5 text-[14px] lg:text-[15px] text-[#6b6560] leading-[1.7] max-w-[420px]">
              Делаем дизайн сайтов, интерфейсов B2B-платформ и мобильных приложений 
              с продуктовой логикой и понятной структурой.
            </p>
            
            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              {/* Primary CTA */}
              <div className="relative group">
                <Button 
                  asChild
                  size="lg"
                  className="bg-[#2a2520] text-[#faf9f6] hover:bg-[#3a3530] text-[10px] uppercase tracking-[0.14em] px-6 h-10 rounded-[3px] shadow-sm"
                >
                  <Link href="/get-proposal">
                    Получить предложение
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-signature-cobalt to-signature-brass rounded-full transition-all duration-300 group-hover:w-3/4" />
              </div>
              
              {/* Secondary CTA */}
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-[#d4cfc5] text-[#5a554f] hover:bg-[#f0eee9] hover:border-[#c4bfb5] text-[10px] uppercase tracking-[0.14em] px-6 h-10 rounded-[3px]"
              >
                <Link href="/pricing">Посмотреть цены</Link>
              </Button>
            </div>

            {/* Category Tags */}
            <div className="mt-8 pt-5 border-t border-[#e8e5de]">
              <div className="flex flex-wrap gap-2">
                {categoryTags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1.5 text-[9px] uppercase tracking-[0.06em] text-[#8a847a] bg-[#faf9f6] border border-[#e8e5de] rounded-[3px] hover:border-[#d4cfc5] hover:text-[#6b6560] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================== */}
          {/* RIGHT: PREMIUM HERO COMPOSITION            */}
          {/* Laptop (60%) + Phone (40%) - Unified       */}
          {/* Reference: MacBook + iPhone composition    */}
          {/* =========================================== */}
          <div className="relative w-full lg:w-[58%] xl:w-[60%] h-[440px] sm:h-[480px] lg:h-[540px] xl:h-[580px]">
            
            {/* Composition container - right-aligned */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
              
              {/* Main composition wrapper */}
              <div className="relative w-full max-w-[520px] lg:max-w-[580px] xl:max-w-[640px] h-full">
                
                {/* ===== REFLECTIVE SURFACE / PLATFORM ===== */}
                {/* Subtle elevated platform for devices to sit on */}
                <div className="absolute bottom-[20px] sm:bottom-[25px] lg:bottom-[30px] left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-gradient-to-r from-transparent via-[#e0ddd5]/60 to-transparent rounded-full" />
                <div className="absolute bottom-[15px] sm:bottom-[18px] lg:bottom-[22px] left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-[#d4cfc5]/40 to-transparent rounded-full" />
                
                {/* ===== PRIMARY: MACBOOK / LAPTOP ===== */}
                {/* Dominant hero element - ~60% visual weight */}
                <div className="absolute top-[25px] sm:top-[30px] lg:top-[35px] left-1/2 -translate-x-[45%] w-[380px] sm:w-[440px] lg:w-[500px] xl:w-[560px] z-10">
                  
                  {/* Laptop screen assembly */}
                  <div className="relative">
                    {/* Screen outer shell - aluminum MacBook style */}
                    <div className="relative bg-gradient-to-b from-[#d8d4cc] via-[#ccc8c0] to-[#c0bbb2] rounded-t-[10px] lg:rounded-t-[12px] p-[3px] lg:p-[4px]">
                      
                      {/* Screen bezel */}
                      <div className="bg-[#1a1816] rounded-t-[8px] lg:rounded-t-[10px] p-[3px] lg:p-[4px]">
                        
                        {/* Camera notch area */}
                        <div className="flex justify-center py-[4px] lg:py-[5px]">
                          <div className="w-[6px] h-[6px] lg:w-[7px] lg:h-[7px] rounded-full bg-[#2a2824]" />
                        </div>
                        
                        {/* Screen */}
                        <div className="bg-[#0d0c0b] rounded-[3px] lg:rounded-[4px] overflow-hidden">
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                              src={IMAGES.dashboard}
                              alt="B2B platform dashboard - Taskio"
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 640px) 380px, (max-width: 1024px) 440px, (max-width: 1280px) 500px, 560px"
                              priority
                            />
                            {/* Subtle screen reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Screen hinge */}
                    <div className="flex justify-center">
                      <div className="w-[92%] h-[3px] lg:h-[4px] bg-gradient-to-b from-[#b8b4ac] to-[#a8a49c] rounded-b-[2px]" />
                    </div>
                  </div>
                  
                  {/* Laptop base / keyboard */}
                  <div className="relative -mt-[1px]">
                    {/* Base perspective effect */}
                    <div 
                      className="relative bg-gradient-to-b from-[#d4d0c8] via-[#ccc8c0] to-[#c0bcb4] rounded-b-[4px] lg:rounded-b-[5px] h-[12px] lg:h-[14px]"
                      style={{
                        clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)'
                      }}
                    >
                      {/* Trackpad indication */}
                      <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[18%] h-[1px] bg-[#b8b4ac]/50 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Laptop shadow on surface */}
                  <div className="absolute -bottom-[15px] lg:-bottom-[18px] left-1/2 -translate-x-1/2 w-[85%] h-[20px] lg:h-[25px] bg-gradient-to-b from-[#2a2520]/12 to-transparent rounded-[50%] blur-[8px]" />
                  
                  {/* Label - Digital System */}
                  <div className="absolute -left-4 lg:-left-6 top-[20%]">
                    <div className="relative inline-flex items-center px-2.5 py-1.5 lg:px-3 lg:py-2 bg-[#faf9f6]/95 backdrop-blur-sm border border-[#e0ddd5] rounded-[3px] shadow-[0_4px_12px_-3px_rgba(42,37,32,0.1)]">
                      <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[2px] h-3.5 bg-gradient-to-b from-signature-cobalt to-signature-brass rounded-full" />
                      <span className="text-[7px] lg:text-[8px] uppercase tracking-[0.14em] text-[#5a554f] font-medium">Digital-система</span>
                    </div>
                  </div>
                </div>

                {/* ===== SECONDARY: IPHONE ===== */}
                {/* Strong foreground accent - ~40% visual weight */}
                {/* Positioned to overlap laptop elegantly */}
                <div className="absolute bottom-[40px] sm:bottom-[50px] lg:bottom-[55px] right-[10px] sm:right-[15px] lg:right-[20px] xl:right-[25px] w-[105px] sm:w-[120px] lg:w-[138px] xl:w-[150px] z-20">
                  
                  {/* Phone frame - premium titanium */}
                  <div className="bg-gradient-to-b from-[#4a4540] via-[#3a3530] to-[#2a2520] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] xl:rounded-[35px] p-[2.5px] lg:p-[3px] shadow-[0_45px_90px_-20px_rgba(42,37,32,0.5),0_22px_45px_-12px_rgba(42,37,32,0.3)]">
                    
                    {/* Phone inner bezel */}
                    <div className="bg-[#1a1816] rounded-[22px] sm:rounded-[26px] lg:rounded-[30px] xl:rounded-[33px] p-[1.5px] lg:p-[2px]">
                      
                      {/* Phone screen */}
                      <div className="relative rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] xl:rounded-[31px] overflow-hidden">
                        
                        {/* Dynamic Island */}
                        <div className="absolute top-[5px] lg:top-[6px] left-1/2 -translate-x-1/2 w-[30%] h-[10px] lg:h-[12px] bg-[#1a1816] rounded-full z-10" />
                        
                        {/* Screen content */}
                        <div className="relative aspect-[9/19.5] overflow-hidden bg-white">
                          <Image
                            src={IMAGES.mobile}
                            alt="Mobile app - Current Vacancies"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 640px) 105px, (max-width: 1024px) 120px, (max-width: 1280px) 138px, 150px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone shadow */}
                  <div className="absolute -bottom-[12px] lg:-bottom-[15px] left-1/2 -translate-x-1/2 w-[80%] h-[18px] lg:h-[22px] bg-gradient-to-b from-[#2a2520]/15 to-transparent rounded-[50%] blur-[6px]" />
                  
                  {/* Label - Mobile App */}
                  <div className="absolute -right-3 lg:-right-5 top-[38%]">
                    <div className="relative inline-flex items-center px-2.5 py-1.5 lg:px-3 lg:py-2 bg-[#faf9f6]/95 backdrop-blur-sm border border-[#e0ddd5] rounded-[3px] shadow-[0_4px_12px_-3px_rgba(42,37,32,0.1)]">
                      <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[2px] h-3.5 bg-gradient-to-b from-signature-cobalt to-signature-brass rounded-full" />
                      <span className="text-[7px] lg:text-[8px] uppercase tracking-[0.14em] text-[#5a554f] font-medium">Mobile app</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
