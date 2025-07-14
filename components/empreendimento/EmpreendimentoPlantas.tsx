"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Download, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import EmpreendimentoPlantaModal from "./EmpreendimentoPlantaModal"

interface PlantaData {
  id: number
  tipo: string
  area: string
  quartos: number
  banheiros: number
  vagas: number
  imagem: string
  preco: string
  descricao: string
  destaque?: boolean
}

interface EspecificacaoData {
  label: string
  valor: string
}

interface TipologiaData {
  titulo?: string
  especificacoes?: EspecificacaoData[]
  tipologias?: Array<{
    nome: string
    area: string
    quartos: number
    banheiros: number
    vagas: number
    planta: string
    caracteristicas: string[]
  }>
}

interface EmpreendimentoPlantasProps {
  tipologia?: TipologiaData
  plantas?: PlantaData[]
  especificacoes?: {
    unidades: string
    andares: string
    elevadores: string
    entrega: string
  }
  nome?: string
  status?: "Breve lançamento" | "Lançamento" | "Em Obra" | "Entregue"
  corPrimaria?: string
}

export default function EmpreendimentoPlantas({
  tipologia,
  plantas = [],
  especificacoes,
  nome = "Empreendimento",
  status,
  corPrimaria = "#192849",
}: EmpreendimentoPlantasProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlanta, setSelectedPlanta] = useState<{ nome: string; imagem: string } | null>(null)

  const handleOpenModal = (planta: { nome: string; imagem: string }) => {
    setSelectedPlanta(planta)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedPlanta(null)
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  // Usar dados das plantas se disponível, senão usar tipologia
  const plantasParaExibir = plantas.length > 0 ? plantas : []
  const tipologiasParaExibir = tipologia?.tipologias || []



  // Pegar a primeira planta disponível para exibir
  const plantaPrincipal =
    plantasParaExibir[0] ||
    (tipologiasParaExibir[0]
      ? {
          id: 1,
          tipo: tipologiasParaExibir[0].nome,
          area: tipologiasParaExibir[0].area,
          quartos: tipologiasParaExibir[0].quartos,
          banheiros: tipologiasParaExibir[0].banheiros,
          vagas: tipologiasParaExibir[0].vagas,
          imagem: tipologiasParaExibir[0].planta,
          preco: "Consulte valores",
          descricao: tipologiasParaExibir[0].caracteristicas.join(", "),
          destaque: true,
        }
      : null)

  if (!plantaPrincipal) {
    return null // Não renderiza nada se não houver plantas
  }

  return (
    <>
      <section id="plantas" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Header da seção */}
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-gray-500 font-medium tracking-wider uppercase">
              TIPOLOGIA & ESPECIFICAÇÕES
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mt-4 mb-6">FICHA TÉCNICA</h2>
          </motion.div>

          {/* Grid duas colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {plantaPrincipal && (
              <motion.div {...fadeIn}>
                <div className="bg-gray-900 rounded-lg p-8 shadow-lg relative group">
                  <Image
                    src={plantaPrincipal.imagem || "/placeholder.svg?height=400&width=600"}
                    alt={plantaPrincipal.tipo}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      onClick={() => handleOpenModal({ nome: plantaPrincipal.tipo, imagem: plantaPrincipal.imagem })}
                      className="bg-white text-gray-900 hover:bg-gray-200"
                    >
                      <ZoomIn className="mr-2 h-4 w-4" />
                      Ver Planta Completa
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div {...fadeIn} className="space-y-6">
              {plantaPrincipal && (
                <div>
                  <h3 className="text-3xl font-light text-gray-900 mb-2">{plantaPrincipal.tipo}</h3>
                  {status !== "Entregue" && (
                    <div className="text-3xl font-bold text-[#192849] mb-6">{plantaPrincipal.preco || "Consulte valores"}</div>
                  )}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#192849] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Área: {plantaPrincipal.area}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#192849] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Quartos: {plantaPrincipal.quartos}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#192849] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Banheiros: {plantaPrincipal.banheiros}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#192849] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        {plantaPrincipal.tipo.toLowerCase().includes('studio') 
                          ? 'Varanda: Sim' 
                          : `Vagas: ${plantaPrincipal.vagas}`}
                      </span>
                    </div>
                    {plantaPrincipal.descricao && (
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#192849] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{plantaPrincipal.descricao}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}



              {plantaPrincipal && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#192849]/20 text-[#192849] hover:bg-[#192849]/10 bg-transparent w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Planta Técnica
                </Button>
              )}
            </motion.div>
          </div>

          {/* Mostrar outras plantas se houver */}
          {(plantasParaExibir.length > 1 || tipologiasParaExibir.length > 1) && (
            <motion.div {...fadeIn} className="mt-16">
              <h3 className="text-2xl font-bold text-[#192849] text-center mb-8">Outras Tipologias Disponíveis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plantasParaExibir.slice(1).map((planta) => (
                  <div key={planta.id} className="bg-white rounded-lg p-6 shadow-lg flex flex-col">
                    <div className="relative w-full h-40 bg-gray-100 rounded-md mb-4">
                      <Image
                        src={planta.imagem || "/placeholder.svg"}
                        alt={planta.tipo}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{planta.tipo}</h4>
                    <div className="space-y-1 text-sm text-gray-600 mb-4 flex-grow">
                      <p>Área: {planta.area}</p>
                      <p>Quartos: {planta.quartos}</p>
                    </div>
                    <Button
                      onClick={() => handleOpenModal({ nome: planta.tipo, imagem: planta.imagem })}
                      variant="outline"
                      className="w-full mt-auto"
                    >
                      Ver Planta
                    </Button>
                  </div>
                ))}
                {tipologiasParaExibir.slice(plantasParaExibir.length > 0 ? 0 : 1).map((tipologia, index) => (
                  <div key={`tipologia-${index}`} className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{tipologia.nome}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Área: {tipologia.area}</p>
                      <p>Quartos: {tipologia.quartos}</p>
                      <p>Banheiros: {tipologia.banheiros}</p>
                      <p>Vagas: {tipologia.vagas}</p>
                    </div>
                    {status !== "Entregue" && (
                      <div className="mt-4 text-lg font-bold" style={{ color: corPrimaria }}>
                        Consulte valores
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
      <EmpreendimentoPlantaModal isOpen={modalOpen} onClose={handleCloseModal} planta={selectedPlanta} />
    </>
  )
}
