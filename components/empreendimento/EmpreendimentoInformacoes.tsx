"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Waves, Shield, TrendingUp } from "lucide-react"
import { JadeEmpreendimentoInformacao } from "@/lib/types/jade-template"

// Mapeamento de ícones para strings
const iconMap = {
  MapPin,
  Waves,
  Shield,
  TrendingUp,
} as const

interface EmpreendimentoInformacoesProps {
  nome: string
  informacoes: JadeEmpreendimentoInformacao[]
  endereco?: string
}

export default function EmpreendimentoInformacoes({
  nome,
  informacoes,
  endereco
}: EmpreendimentoInformacoesProps) {
  // Filtrar informações válidas
  const informacoesValidas = informacoes.filter(info => 
    info && info.titulo && info.detalhes && 
    info.detalhes.titulo && info.detalhes.pontos && 
    info.detalhes.pontos.length > 0
  )
  
  // Se não há informações válidas, não renderizar o componente
  if (!informacoesValidas || informacoesValidas.length === 0) {
    return null
  }
  
  const [activeInfo, setActiveInfo] = useState(informacoesValidas[0]?.id || "localizacao")

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  // Função para obter os detalhes da informação ativa
  const getActiveInfoDetails = () => {
    return informacoesValidas.find((info) => info.id === activeInfo)?.detalhes
  }

  // Função para renderizar ícone de forma segura
  const renderIcon = (iconName: string, className: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    if (!IconComponent) return null
    return <IconComponent className={className} />
  }

  return (
    <section id="informacoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header da seção */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mb-6">INFORMAÇÕES DO EMPREENDIMENTO</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra o que torna o {nome} um empreendimento moderno, inteligente e sofisticado.
          </p>
        </motion.div>

        {/* Navegação por Abas */}
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8 overflow-x-auto">
              {informacoesValidas.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveInfo(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeInfo === tab.id
                      ? "border-[#192849] text-[#192849]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {renderIcon(tab.icon, "h-5 w-5")}
                  {tab.titulo}
                </button>
              ))}
            </nav>
          </div>

          {/* Conteúdo das Abas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInfo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[600px]"
            >
              {(() => {
                const activeDetails = getActiveInfoDetails()
                if (!activeDetails) return null

                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{activeDetails.titulo}</h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">{activeDetails.subtitulo}</p>

                      <ul className="space-y-4 mb-8">
                        {activeDetails.pontos.map((ponto, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#192849] rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <span className="font-medium text-gray-900">{ponto.titulo}:</span>
                              <span className="text-gray-600 ml-1">{ponto.distancia}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        {activeInfo === "localizacao" && endereco ? (
                          <div className="w-full h-96">
                            <iframe
                              src={`https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`Localização do ${nome} - ${endereco}`}
                            />
                          </div>
                        ) : (
                          <Image
                            src={activeDetails.imagem || "/placeholder.svg"}
                            alt={activeDetails.titulo}
                            width={600}
                            height={400}
                            className="w-full h-96 object-cover"
                          />
                        )}
                        <div className="p-4 bg-[#192849]/5">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#192849] rounded-full"></div>
                            <span className="text-sm font-medium text-[#192849]">{activeDetails.titulo}</span>
                          </div>
                          <p className="text-xs text-[#192849] mt-1">{activeDetails.subtitulo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
