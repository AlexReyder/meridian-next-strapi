import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { SiteLocale } from '@/lib/i18n'
import { localizeHref } from '@/lib/routing'
import type { HeroHomeBlock } from '@/types/strapi'

const FALLBACK_IMAGES = {
  dashboard:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b_-YLfXIBTYWrxNbzxLrJDGx60NVQVUoc.png',
  mobile:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile-eYpOKl8hCbLaEv636IYFSUfEBrMeeQ.png',
} as const

function createMarkup(html?: string) {
  return { __html: html || '' }
}

export function HeroHomeBlockView({
  block,
  locale,
}: {
  block: HeroHomeBlock
  locale: SiteLocale
}) {
  const isArabic = locale === 'ar'
  const primaryHref = block.primaryCtaHref ? localizeHref(locale, block.primaryCtaHref) : undefined
  const secondaryHref = block.secondaryCtaHref
    ? localizeHref(locale, block.secondaryCtaHref)
    : undefined

  const dashboardImageUrl = block.dashboardImageUrl || FALLBACK_IMAGES.dashboard
  const mobileImageUrl = block.mobileImageUrl || FALLBACK_IMAGES.mobile

  return (
    <section className="relative overflow-hidden pb-8 pt-20 lg:pb-12 lg:pt-24">
      <div
        className={`pointer-events-none absolute inset-0 ${
          isArabic
            ? 'bg-gradient-to-bl from-[#faf9f6] via-[#f8f7f4] to-[#f5f3ef]'
            : 'bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#f5f3ef]'
        }`}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #9a9080 1px, transparent 1px), linear-gradient(to bottom, #9a9080 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        <div
          className={`flex flex-col gap-8 lg:gap-4 ${
            isArabic ? 'lg:flex-row-reverse lg:items-start' : 'lg:flex-row lg:items-start'
          }`}
        >
          <div className="w-full flex-shrink-0 lg:w-[42%] lg:pt-8 xl:w-[40%] xl:pt-12">
            <div className="mb-5 inline-flex items-center gap-3">
              <div className="flex items-center">
                {isArabic ? (
                  <>
                    <span className="h-[2px] w-2 rounded-full bg-signature-brass" />
                    <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt" />
                  </>
                ) : (
                  <>
                    <span className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
                    <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass" />
                  </>
                )}
              </div>
              {block.eyebrow ? (
                <span
                  className={`text-[#9a9080] ${
                    isArabic ? 'tracking-[0.15em]' : 'tracking-[0.2em]'
                  } text-[10px] uppercase`}
                >
                  {block.eyebrow}
                </span>
              ) : null}
            </div>

            <h1
              className={`font-serif font-light text-[#2a2520] ${
                isArabic
                  ? 'text-balance text-[2rem] leading-[1.3] tracking-tight sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem]'
                  : 'text-[2.25rem] leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem]'
              }`}
              dangerouslySetInnerHTML={createMarkup(block.titleHtml)}
            />

            {block.description ? (
              <p
                className={`mt-5 text-[14px] lg:text-[15px] text-[#6b6560] ${
                  isArabic ? 'max-w-[480px] leading-[1.8]' : 'max-w-[420px] leading-[1.7]'
                }`}
              >
                {block.description}
              </p>
            ) : null}

            {block.supportingText ? (
              <p className="mt-3 text-[12px] text-[#9a9080]">{block.supportingText}</p>
            ) : null}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {block.primaryCtaLabel && primaryHref ? (
                <div className="group relative">
                  <Button
                    asChild
                    size="lg"
                    className={`h-10 rounded-[3px] bg-[#2a2520] px-6 text-[10px] uppercase text-[#faf9f6] shadow-sm hover:bg-[#3a3530] ${
                      isArabic ? 'tracking-[0.12em]' : 'tracking-[0.14em]'
                    }`}
                  >
                    <Link href={primaryHref}>
                      {isArabic ? <ArrowLeft className="ml-2 h-3.5 w-3.5" /> : null}
                      {block.primaryCtaLabel}
                      {!isArabic ? <ArrowRight className="ml-2 h-3.5 w-3.5" /> : null}
                    </Link>
                  </Button>
                  <div
                    className={`absolute -bottom-[2px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-3/4 ${
                      isArabic
                        ? 'bg-gradient-to-r from-signature-brass to-signature-cobalt'
                        : 'bg-gradient-to-r from-signature-cobalt to-signature-brass'
                    }`}
                  />
                </div>
              ) : null}

              {block.secondaryCtaLabel && secondaryHref ? (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={`h-10 rounded-[3px] border-[#d4cfc5] px-6 text-[10px] text-[#5a554f] hover:border-[#c4bfb5] hover:bg-[#f0eee9] ${
                    isArabic ? 'tracking-[0.12em]' : 'tracking-[0.14em]'
                  } uppercase`}
                >
                  <Link href={secondaryHref}>{block.secondaryCtaLabel}</Link>
                </Button>
              ) : null}
            </div>

            {block.tags?.length ? (
              <div className="mt-8 border-t border-[#e8e5de] pt-5">
                <div className="flex flex-wrap gap-2">
                  {block.tags.map((tag, index) => (
                    <span
                      key={`${tag.label}-${index}`}
                      className={`inline-flex items-center rounded-[3px] border border-[#e8e5de] bg-[#faf9f6] px-2.5 py-1.5 text-[#8a847a] transition-all duration-300 hover:border-[#d4cfc5] hover:text-[#6b6560] ${
                        isArabic ? 'tracking-[0.04em]' : 'tracking-[0.06em]'
                      } text-[9px] uppercase`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="relative h-[440px] w-full lg:h-[540px] lg:w-[58%] xl:h-[580px] xl:w-[60%]">
            <div
              className={`absolute inset-0 flex items-center justify-center ${
                isArabic ? 'lg:justify-start' : 'lg:justify-end'
              }`}
            >
              <div className="relative h-full w-full max-w-[520px] lg:max-w-[580px] xl:max-w-[640px]">
                <div className="absolute bottom-[20px] left-1/2 h-[2px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#e0ddd5]/60 to-transparent sm:bottom-[25px] lg:bottom-[30px]" />
                <div className="absolute bottom-[15px] left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#d4cfc5]/40 to-transparent sm:bottom-[18px] lg:bottom-[22px]" />

                <div
                  className={`absolute top-[25px] left-1/2 z-10 w-[380px] sm:top-[30px] sm:w-[440px] lg:top-[35px] lg:w-[500px] xl:w-[560px] ${
                    isArabic ? '-translate-x-[55%]' : '-translate-x-[45%]'
                  }`}
                >
                  <div className="relative">
                    <div className="relative rounded-t-[10px] bg-gradient-to-b from-[#d8d4cc] via-[#ccc8c0] to-[#c0bbb2] p-[3px] lg:rounded-t-[12px] lg:p-[4px]">
                      <div className="rounded-t-[8px] bg-[#1a1816] p-[3px] lg:rounded-t-[10px] lg:p-[4px]">
                        <div className="flex justify-center py-[4px] lg:py-[5px]">
                          <div className="h-[6px] w-[6px] rounded-full bg-[#2a2824] lg:h-[7px] lg:w-[7px]" />
                        </div>
                        <div className="overflow-hidden rounded-[3px] bg-[#0d0c0b] lg:rounded-[4px]">
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                              src={dashboardImageUrl}
                              alt={block.dashboardImageAlt || 'Dashboard preview'}
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 640px) 380px, (max-width: 1024px) 440px, (max-width: 1280px) 500px, 560px"
                              priority
                              unoptimized
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="h-[3px] w-[92%] rounded-b-[2px] bg-gradient-to-b from-[#b8b4ac] to-[#a8a49c] lg:h-[4px]" />
                    </div>
                  </div>

                  <div className="relative -mt-[1px]">
                    <div
                      className="relative h-[12px] rounded-b-[4px] bg-gradient-to-b from-[#d4d0c8] via-[#ccc8c0] to-[#c0bcb4] lg:h-[14px] lg:rounded-b-[5px]"
                      style={{ clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)' }}
                    >
                      <div className="absolute bottom-[2px] left-1/2 h-[1px] w-[18%] -translate-x-1/2 rounded-full bg-[#b8b4ac]/50" />
                    </div>
                  </div>

                  <div className="absolute -bottom-[15px] left-1/2 h-[20px] w-[85%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-[#2a2520]/12 to-transparent blur-[8px] lg:-bottom-[18px] lg:h-[25px]" />

                  {block.dashboardBadge ? (
                    <div
                      className={`absolute top-[20%] ${
                        isArabic ? '-right-4 lg:-right-6' : '-left-4 lg:-left-6'
                      }`}
                    >
                      <div className="relative inline-flex items-center rounded-[3px] border border-[#e0ddd5] bg-[#faf9f6]/95 px-2.5 py-1.5 shadow-[0_4px_12px_-3px_rgba(42,37,32,0.1)] backdrop-blur-sm lg:px-3 lg:py-2">
                        <div
                          className={`absolute top-1/2 h-3.5 w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-signature-cobalt to-signature-brass ${
                            isArabic ? '-right-[1px]' : '-left-[1px]'
                          }`}
                        />
                        <span
                          className={`text-[7px] font-medium uppercase text-[#5a554f] lg:text-[8px] ${
                            isArabic ? 'tracking-[0.1em]' : 'tracking-[0.14em]'
                          }`}
                        >
                          {block.dashboardBadge}
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div
                  className={`absolute bottom-[40px] z-20 w-[105px] sm:bottom-[50px] sm:w-[120px] lg:bottom-[55px] lg:w-[138px] xl:w-[150px] ${
                    isArabic
                      ? 'left-[10px] sm:left-[15px] lg:left-[20px] xl:left-[25px]'
                      : 'right-[10px] sm:right-[15px] lg:right-[20px] xl:right-[25px]'
                  }`}
                >
                  <div className="rounded-[24px] bg-gradient-to-b from-[#4a4540] via-[#3a3530] to-[#2a2520] p-[2.5px] shadow-[0_45px_90px_-20px_rgba(42,37,32,0.5),0_22px_45px_-12px_rgba(42,37,32,0.3)] sm:rounded-[28px] lg:rounded-[32px] lg:p-[3px] xl:rounded-[35px]">
                    <div className="rounded-[22px] bg-[#1a1816] p-[1.5px] sm:rounded-[26px] lg:rounded-[30px] lg:p-[2px] xl:rounded-[33px]">
                      <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] xl:rounded-[31px]">
                        <div className="absolute left-1/2 top-[5px] z-10 h-[10px] w-[30%] -translate-x-1/2 rounded-full bg-[#1a1816] lg:top-[6px] lg:h-[12px]" />
                        <div className="relative aspect-[9/19.5] overflow-hidden bg-white">
                          <Image
                            src={mobileImageUrl}
                            alt={block.mobileImageAlt || 'Mobile preview'}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 640px) 105px, (max-width: 1024px) 120px, (max-width: 1280px) 138px, 150px"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-[12px] left-1/2 h-[18px] w-[80%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-[#2a2520]/15 to-transparent blur-[6px] lg:-bottom-[15px] lg:h-[22px]" />

                  {block.mobileBadge ? (
                    <div
                      className={`absolute top-[38%] ${
                        isArabic ? '-left-3 lg:-left-5' : '-right-3 lg:-right-5'
                      }`}
                    >
                      <div className="relative inline-flex items-center rounded-[3px] border border-[#e0ddd5] bg-[#faf9f6]/95 px-2.5 py-1.5 shadow-[0_4px_12px_-3px_rgba(42,37,32,0.1)] backdrop-blur-sm lg:px-3 lg:py-2">
                        <div
                          className={`absolute top-1/2 h-3.5 w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-signature-cobalt to-signature-brass ${
                            isArabic ? '-right-[1px]' : '-left-[1px]'
                          }`}
                        />
                        <span
                          className={`text-[7px] font-medium uppercase text-[#5a554f] lg:text-[8px] ${
                            isArabic ? 'tracking-[0.1em]' : 'tracking-[0.14em]'
                          }`}
                        >
                          {block.mobileBadge}
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
