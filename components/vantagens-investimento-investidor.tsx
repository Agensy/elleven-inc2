"use client"

import { motion } from "framer-motion"
import { DollarSign, TrendingUp, Shield, BarChart3 } from "lucide-react"

const vantagens = [
  {
    icon: DollarSign,
    titulo: "Renda Extra",
    descricao:
      "Você já imaginou receber um pagamento sem trabalhar diretamente para isso? Isso é possível ao viver do aluguel do seu imóvel.",
    color: "green",
  },
  {
    icon: TrendingUp,
    titulo: "Valorização Constante",
    descricao:
      "O aumento populacional gera um acréscimo na demanda por moradias, o que resulta na alta dos preços de imóveis existentes.",
    color: "blue",
  },
  {
    icon: Shield,
    titulo: "Mais Segurança",
    descricao:
      "Mesmo em meio à crise, um imóvel consegue manter o seu valor. Por isso, é a alternativa mais segura para os investidores.",
    color: "orange",
  },
  {
    icon: BarChart3,
    titulo: "Menos Risco",
    descricao:
      "Fique livre de instabilidades como variações inflacionárias e quedas bruscas nas bolsas de valores. Com um imóvel, não há esse risco.",
    color: "purple",
  },
]

export default function VantagensInvestimento() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true },
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Faça um ótimo negócio com a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Elleven
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tenha uma oportunidade de renda praticamente vitalícia com os melhores investimentos imobiliários
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {vantagens.map((vantagem, index) => {
            const Icon = vantagem.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110
                  ${
                    vantagem.color === "green"
                      ? "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25"
                      : vantagem.color === "blue"
                        ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25"
                        : vantagem.color === "orange"
                          ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25"
                          : "bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/25"
                  }
                `}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {vantagem.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">{vantagem.descricao}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
