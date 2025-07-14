"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface EmpreendimentoPlantaModalProps {
  isOpen: boolean
  onClose: () => void
  planta: {
    nome: string
    imagem: string
  } | null
}

export default function EmpreendimentoPlantaModal({ isOpen, onClose, planta }: EmpreendimentoPlantaModalProps) {
  if (!planta) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white p-4 sm:p-6">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold text-gray-800">{planta.nome}</DialogTitle>
          <DialogClose asChild>
            <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
              <X className="h-6 w-6" />
              <span className="sr-only">Fechar</span>
            </button>
          </DialogClose>
        </DialogHeader>
        <div className="mt-4">
          <div className="relative w-full h-auto">
            <Image
              src={planta.imagem || "/placeholder.svg"}
              alt={`Planta do ${planta.nome}`}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
