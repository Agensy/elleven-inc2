"use client"

import { motion } from "framer-motion"
import { Home, Clock } from "lucide-react"

export default function PatrimonioResistente() {
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
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Home className="h-4 w-4" />
                Patrimônio Duradouro
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Seu patrimônio <span className="text-purple-600">resiste ao tempo</span> e aos fatores externos
              </h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Além de ser um bem durável, um imóvel não depende de fatores externos imediatos para manter seu valor.
                </p>
                <p>Assim, você garante liquidez e segurança patrimonial, criando um verdadeiro porto seguro.</p>
              </div>
            </div>

            {/* Características do Patrimônio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🏗️", title: "Bem Durável", desc: "Resiste ao tempo", color: "purple" },
                { icon: "💎", title: "Patrimônio Líquido", desc: "Fácil de vender", color: "blue" },
                { icon: "🔒", title: "Independente", desc: "Não depende de terceiros", color: "green" },
                { icon: "⚓", title: "Porto Seguro", desc: "Refúgio em crises", color: "orange" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300`}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Timeline de Durabilidade */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Durabilidade ao Longo do Tempo
              </h3>
              <div className="space-y-3">
                {[
                  { period: "5 anos", value: "Mantém valor", growth: "+15%" },
                  { period: "10 anos", value: "Valorização", growth: "+35%" },
                  { period: "20 anos", value: "Patrimônio sólido", growth: "+80%" },
                  { period: "30+ anos", value: "Legado familiar", growth: "+150%" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div>
                        <div className="font-medium text-gray-900">{item.period}</div>
                        <div className="text-sm text-gray-600">{item.value}</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">{item.growth}</div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl transform rotate-6 scale-105 opacity-60"></div>

              {/* Imagem principal */}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Homem+com+holograma+de+casa"
                  alt="Homem segurando um holograma em forma de casa"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Card flutuante */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">Anos de vida útil</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
