import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Upload, ArrowRight } from "lucide-react"

interface FinalSupportProps {
  onUpload: () => void
}

export function FinalSupport({ onUpload }: FinalSupportProps) {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-4">
          Не хотите заполнять всё вручную?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Пришлите материалы проекта — мы всё равно сможем подготовить 
          структурированное предложение.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={onUpload}
            className="bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.12em] px-6 h-11"
          >
            <Upload className="mr-2 h-4 w-4" />
            Загрузить материалы
          </Button>
          <Button 
            asChild
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.12em] px-6 h-11"
          >
            <Link href="/pricing">
              Посмотреть форматы работы
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
