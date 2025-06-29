"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface EmpreendimentoSobreProps {
  nome: string
  descricao: string
  tipo: string
  area: string
  endereco: string
  localizacao: string
  imagemPrincipal: string
}

export default function EmpreendimentoSobre({
  nome,
  descricao,
  tipo,
  area,
  endereco,
  localizacao,
  imagemPrincipal
}: EmpreendimentoSobreProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <section id="oportunidade" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo de Texto */}
          <motion.div {...fadeIn} className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mb-6 leading-tight">
                CONHEÇA O {nome.toUpperCase()}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{descricao}</p>
            </div>

            {/* Grid de Informações */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Características */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Características</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Tipo</p>
                    <p className="text-gray-900">
                      {tipo} ({area})
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Lazer</p>
                    <p className="text-gray-900">Infraestrutura Completa</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Tecnologia</p>
                    <p className="text-gray-900">Acesso inteligente</p>
                  </div>
                </div>
              </div>

              {/* Localização */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Localização</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-900 font-medium">{endereco}</p>
                  </div>
                  <div>
                    <p className="text-gray-900">{localizacao}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div {...fadeIn} className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src={imagemPrincipal || "/placeholder.svg"}
                alt={`${nome} - Vista do empreendimento`}
                width={600}
                height={400}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
