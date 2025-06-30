"use client"

import { motion } from "framer-motion"
import { DollarSign, TrendingUp } from "lucide-react"

export default function RendaVitalicia() {
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
                <DollarSign className="h-4 w-4" />
                Renda Passiva
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Faça um ótimo negócio e conquiste uma <span className="text-green-600">fonte de renda</span>{" "}
                praticamente vitalícia
              </h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>Já imaginou ter um fluxo constante de pagamentos sem precisar trabalhar diretamente por isso?</p>
                <p>
                  Ao investir em um imóvel para aluguel, você cria uma nova fonte de receita que pode complementar seu
                  salário ou mesmo se tornar sua principal renda no futuro.
                </p>
              </div>
            </div>

            {/* Benefícios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💰", title: "Renda Mensal", desc: "Pagamentos regulares" },
                { icon: "📈", title: "Crescimento", desc: "Valor aumenta com o tempo" },
                { icon: "🏠", title: "Patrimônio", desc: "Bem tangível e seguro" },
                { icon: "⏰", title: "Passivo", desc: "Trabalha para você" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{benefit.icon}</div>
                  <div className="font-semibold text-gray-900 mb-1">{benefit.title}</div>
                  <div className="text-sm text-gray-600">{benefit.desc}</div>
                </motion.div>
              ))}
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
                  src="/placeholder.svg?height=400&width=400&text=Homem+segurando+maquete+de+casa"
                  alt="Homem segurando uma maquete de casa entre as mãos"
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
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">R$ 3.500/mês</div>
                    <div className="text-sm text-gray-600">Renda estimada</div>
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
