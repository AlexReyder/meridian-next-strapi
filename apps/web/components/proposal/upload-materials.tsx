"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Upload, FileText, Link as LinkIcon, X } from "lucide-react"

interface UploadMaterialsProps {
  onBack: () => void
  onSuccess: () => void
}

export function UploadMaterials({ onBack, onSuccess }: UploadMaterialsProps) {
  const [files, setFiles] = useState<string[]>([])
  const [links, setLinks] = useState<string[]>([])
  const [newLink, setNewLink] = useState("")

  const addLink = () => {
    if (newLink.trim()) {
      setLinks([...links, newLink.trim()])
      setNewLink("")
    }
  }

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index))
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="bg-card border border-border rounded-sm">
          {/* Header */}
          <div className="px-8 py-6 border-b border-border">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад к выбору
            </button>
            
            <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
              Есть материалы по проекту?
            </h2>
            <p className="text-sm text-muted-foreground">
              Загрузите brief, заметки, screenshots, PRD, ссылки или старые экраны — 
              этого достаточно, чтобы мы подготовили рекомендацию по следующему шагу.
            </p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Upload Zone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Загрузить файлы
              </label>
              <div className="border-2 border-dashed border-border rounded-sm p-10 text-center hover:border-foreground/30 transition-colors cursor-pointer">
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <p className="text-foreground mb-2">
                  Перетащите файлы сюда или нажмите для выбора
                </p>
                <p className="text-sm text-muted-foreground">
                  PDF, PNG, JPG, DOCX, ZIP — до 50 MB на файл
                </p>
              </div>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-sm">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{file}</span>
                      </div>
                      <button className="text-muted-foreground hover:text-foreground">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Links */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Добавить ссылки
              </label>
              <div className="flex gap-3">
                <Input 
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  placeholder="Figma, Google Docs, Notion, Miro..." 
                  className="h-10 flex-1" 
                  onKeyDown={(e) => e.key === "Enter" && addLink()}
                />
                <Button 
                  onClick={addLink}
                  variant="outline" 
                  className="h-10 px-4"
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>

              {links.length > 0 && (
                <div className="mt-4 space-y-2">
                  {links.map((link, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-sm">
                      <div className="flex items-center gap-3">
                        <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-foreground truncate max-w-[400px]">{link}</span>
                      </div>
                      <button 
                        onClick={() => removeLink(index)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Краткое описание проекта
              </label>
              <Textarea 
                placeholder="Расскажите, что вы планируете делать, какая главная задача, и что ожидаете получить..."
                rows={5}
              />
            </div>

            {/* Contact */}
            <div className="pt-6 border-t border-border">
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Контакт для связи
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Имя" className="h-10" />
                <Input type="email" placeholder="Email" className="h-10" />
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <button 
                onClick={onBack}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Отмена
              </button>
              
              <Button 
                onClick={onSuccess}
                className="bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.12em] px-6 h-10"
              >
                Отправить материалы
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
