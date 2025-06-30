"use client"

import { motion } from "framer-motion"
import { LineChart, Activity } from "lucide-react"

export default function EstabilidadeInvestimento() {
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
                  src="/placeholder.svg?height=400&width=400&text=Gráfico+estável+com+casa"
                  alt="Gráfico estável com uma casa no topo"
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
                  <div className="text-2xl font-bold text-blue-600">Estável</div>
                  <div className="text-sm text-gray-600">Sem volatilidade</div>
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
                  <Activity className="h-5 w-5 text-green-600" />
                  <div className="text-sm font-medium text-gray-900">Previsível</div>
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
                <LineChart className="h-4 w-4" />
                Estabilidade
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Livre-se de instabilidades e <span className="text-blue-600">durma tranquilo</span>
              </h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>Com imóveis, você se protege contra oscilações inflacionárias e quedas bruscas de mercado.</p>
                <p>
                  Seu patrimônio fica seguro, oferecendo previsibilidade e estabilidade que outros investimentos não
                  garantem.
                </p>
              </div>
            </div>

            {/* Benefícios da Estabilidade */}
            <div className="space-y-4">
              {[
                { icon: "🛡️", title: "Proteção contra inflação", desc: "Valor acompanha a inflação" },
                { icon: "📊", title: "Previsibilidade", desc: "Retornos mais consistentes" },
                { icon: "😴", title: "Tranquilidade", desc: "Sem preocupações diárias" },
                { icon: "🎯", title: "Foco no longo prazo", desc: "Estratégia sustentável" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{benefit.title}</div>
                    <div className="text-sm text-gray-600">{benefit.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
