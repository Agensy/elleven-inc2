"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp } from "lucide-react"

export default function ValorizacaoConstante() {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Background decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl transform -rotate-6 scale-105 opacity-60"></div>

              {/* Imagem principal */}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Gráfico+subindo+com+casas"
                  alt="Gráfico subindo com casas no topo"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Cards flutuantes */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">+15%</div>
                  <div className="text-sm text-gray-600">Valorização anual</div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <div className="text-sm font-medium text-gray-900">Crescimento constante</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="h-4 w-4" />
                Valorização
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Aproveite a <span className="text-blue-600">valorização constante</span> dos imóveis
              </h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Com o crescimento populacional e o aumento da demanda por moradias, o preço dos imóveis tende a subir
                  continuamente.
                </p>
                <p>Seu investimento hoje poderá valer muito mais no futuro, maximizando seu patrimônio.</p>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15%", label: "Valorização média anual", color: "blue" },
                { value: "2x", label: "Valor em 5 anos", color: "green" },
                { value: "85%", label: "Imóveis se valorizam", color: "purple" },
                { value: "R$ 50k", label: "Ganho médio por ano", color: "orange" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-${stat.color}-50 border border-${stat.color}-100 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300`}
                >
                  <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
