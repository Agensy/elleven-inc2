"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Planta } from "@/lib/types/empreendimento"

interface EmpreendimentoPlantasProps {
  tipologia: Planta
}

export default function EmpreendimentoPlantas({ tipologia }: EmpreendimentoPlantasProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <section id="plantas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header da seção */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
            TIPOLOGIA & ESPECIFICAÇÕES
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mt-4 mb-6">
            FICHA TÉCNICA
          </h2>
        </motion.div>

        {/* Grid duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
              <Image
                src={tipologia.imagem || "/placeholder.svg"}
                alt={tipologia.tipo}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-6">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-2">
                {tipologia.tipo} - {tipologia.area}
              </h3>
              <div className="text-3xl font-bold text-[#192849] mb-6">{tipologia.preco}</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#192849] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{tipologia.quartos} dormitório(s)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#192849] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{tipologia.banheiros} banheiro(s)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#192849] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{tipologia.vagas} vaga(s) de garagem</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#192849] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Área: {tipologia.area}</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Descrição:</h4>
              <p className="text-gray-700">{tipologia.descricao}</p>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-[#192849]/20 text-[#192849] hover:bg-[#192849]/10 bg-transparent w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Baixar Planta Técnica
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 