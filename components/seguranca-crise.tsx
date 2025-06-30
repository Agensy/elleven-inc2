"use client"

import { motion } from "framer-motion"
import { Shield, Umbrella } from "lucide-react"

export default function SegurancaCrise() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                Segurança
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Invista com mais <span className="text-green-600">segurança</span> mesmo em tempos de crise
              </h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Diferente de ações e fundos voláteis, um imóvel mantém seu valor mesmo em cenários econômicos
                  desafiadores.
                </p>
                <p>Isso torna o setor imobiliário a escolha mais segura para proteger o seu capital.</p>
              </div>
            </div>

            {/* Comparativo */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Comparativo de Estabilidade</h3>
              <div className="space-y-3">
                {[
                  { type: "Imóveis", stability: 95, color: "green" },
                  { type: "Renda Fixa", stability: 80, color: "blue" },
                  { type: "Ações", stability: 45, color: "red" },
                  { type: "Criptomoedas", stability: 20, color: "orange" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-20 text-sm text-gray-600">{item.type}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.stability}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 bg-${item.color}-500 rounded-full`}
                      />
                    </div>
                    <div className="w-12 text-sm font-medium text-gray-900">{item.stability}%</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Background decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl transform rotate-6 scale-105 opacity-60"></div>

              {/* Imagem principal */}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Homem+com+guarda-chuva+protegendo+casa"
                  alt="Homem segurando um guarda-chuva que protege uma casa"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Card flutuante */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Umbrella className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Protegido</div>
                    <div className="text-sm text-gray-600">Contra crises</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
