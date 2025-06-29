"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const caracteristicas = [
  {
    titulo: "Bem Durável",
    descricao: "Investimento que resiste ao tempo e mantém seu valor",
  },
  {
    titulo: "Independente de Fatores Externos",
    descricao: "Não sofre com volatilidade do mercado financeiro",
  },
  {
    titulo: "Patrimônio Líquido",
    descricao: "Ativo tangível que pode ser convertido em dinheiro",
  },
]

export default function PortoSeguroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

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
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 text-orange-600 text-sm font-medium">
                <Shield className="h-4 w-4" />
                Investimento Seguro
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Tenha um{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  porto seguro
                </span>{" "}
                para os momentos de crise
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Um dos investimentos mais promissores e indicados para a atual conjuntura econômica.
              </p>
            </div>

            {/* Características */}
            <div className="space-y-4">
              {caracteristicas.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.titulo}</h4>
                    <p className="text-gray-600 text-sm">{item.descricao}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                Quero Investir
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Background decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-100 to-orange-100 rounded-3xl transform -rotate-2 scale-110"></div>

              {/* Conteúdo principal */}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="h-10 w-10 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Proteção Garantida</h3>
                    <p className="text-gray-600">Seu patrimônio seguro em qualquer cenário econômico</p>
                  </div>

                  {/* Estatísticas */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600 mb-1">85%</div>
                      <div className="text-xs text-gray-600">Menos volatilidade</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">20+</div>
                      <div className="text-xs text-gray-600">Anos de experiência</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos flutuantes */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-20 blur-xl"
              />

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20 blur-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
