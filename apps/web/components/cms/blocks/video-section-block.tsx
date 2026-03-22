import type { VideoSectionBlock } from '@/types/strapi'

export function VideoSectionBlockView({ block }: { block: VideoSectionBlock }) {
  return (
    <section id={block.sectionId} className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-8 max-w-3xl space-y-4 text-center">
          {block.eyebrow ? <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">{block.eyebrow}</p> : null}
          {block.title ? <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{block.title}</h2> : null}
          {block.description ? <p className="text-base leading-8 text-muted-foreground">{block.description}</p> : null}
        </div>

        <div className="overflow-hidden rounded-[28px] border border-border/70 bg-black shadow-sm">
          <div className="aspect-video w-full">
            <iframe
              src={block.videoUrl}
              title={block.title || 'Video walkthrough'}
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {block.note ? <p className="mt-4 text-center text-sm text-muted-foreground">{block.note}</p> : null}
      </div>
    </section>
  )
}
