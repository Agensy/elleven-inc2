"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Waves, Shield, TrendingUp } from "lucide-react"

// Mapeamento de ícones para strings
const iconMap = {
  MapPin,
  Waves,
  Shield,
  TrendingUp,
} as const

// Interface simplificada para informações
interface InformacaoSimples {
  id: string
  titulo: string
  icon: keyof typeof iconMap
}

interface EmpreendimentoInformacoesProps {
  nome: string
  informacoes: InformacaoSimples[]
  endereco?: string
}

export default function EmpreendimentoInformacoes({
  nome,
  informacoes,
  endereco
}: EmpreendimentoInformacoesProps) {
  const [activeInfo, setActiveInfo] = useState("localizacao")

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  // Dados padrão quando informações não estão disponíveis
  const informacoesPadrao: InformacaoSimples[] = [
    { id: "localizacao", titulo: "Localização", icon: "MapPin" },
    { id: "lazer", titulo: "Lazer", icon: "Waves" },
    { id: "seguranca", titulo: "Segurança", icon: "Shield" },
    { id: "investimento", titulo: "Investimento", icon: "TrendingUp" }
  ]

  const informacoesAtivas = informacoes.length > 0 ? informacoes : informacoesPadrao

  // Função para renderizar ícone de forma segura
  const renderIcon = (iconName: keyof typeof iconMap, className: string) => {
    const IconComponent = iconMap[iconName]
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
              {informacoesAtivas.map((tab) => (
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
              className="min-h-[400px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {informacoesAtivas.find(info => info.id === activeInfo)?.titulo}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Informações sobre {informacoesAtivas.find(info => info.id === activeInfo)?.titulo.toLowerCase()} do {nome}.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#192849] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Informações detalhadas disponíveis em breve.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {activeInfo === "localizacao" && endereco ? (
                      <div className="w-full h-96">
                        <iframe
                          src={`https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(endereco)}`}
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
                      <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
                        <p className="text-gray-500">Imagem em breve</p>
                      </div>
                    )}
                    <div className="p-4 bg-[#192849]/5">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#192849] rounded-full"></div>
                        <span className="text-sm font-medium text-[#192849]">
                          {informacoesAtivas.find(info => info.id === activeInfo)?.titulo}
                        </span>
                      </div>
                      <p className="text-xs text-[#192849] mt-1">{nome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 