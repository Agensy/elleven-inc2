"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ImagemGaleria } from "@/lib/types/empreendimento"

interface EmpreendimentoGaleriaProps {
  nome: string
  galeria: {
    titulo: string
    imagens: ImagemGaleria[]
  }
}

export default function EmpreendimentoGaleria({ nome, galeria }: EmpreendimentoGaleriaProps) {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <>
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mb-6">{galeria.titulo}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça cada detalhe através de nossa galeria exclusiva
            </p>
          </motion.div>

          {/* Grid 3x2 - Padrão 6 imagens iniciais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {galeria.imagens.slice(0, showAllImages ? galeria.imagens.length : 6).map((imagem, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg h-64"
                onClick={() => setSelectedGalleryImage(index)}
              >
                <Image
                  src={imagem.src || "/placeholder.svg"}
                  alt={`${nome} - Imagem ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-gray-900">{imagem.titulo}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botão Mostrar Mais - só aparece se houver mais de 6 imagens */}
          {galeria.imagens.length > 6 && (
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllImages(!showAllImages)}
                className="border-[#192849] text-[#192849] hover:bg-[#192849]/10 bg-transparent"
              >
                {showAllImages ? "Mostrar Menos" : "Mostrar Mais"}
                <ArrowLeft
                  className={`ml-2 h-4 w-4 transition-transform ${showAllImages ? "rotate-90" : "-rotate-90"}`}
                />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox da Galeria */}
      <AnimatePresence>
        {selectedGalleryImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedGalleryImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galeria.imagens[selectedGalleryImage].src || "/placeholder.svg"}
                alt={galeria.imagens[selectedGalleryImage].titulo}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedGalleryImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="font-semibold mb-1">{galeria.imagens[selectedGalleryImage].titulo}</h3>
                <p className="text-sm opacity-90">{galeria.imagens[selectedGalleryImage].alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
