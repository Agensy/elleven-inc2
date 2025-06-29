"use client"

import { motion } from "framer-motion"
import { Search, Calculator, FileText, Key, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const passos = [
  {
    numero: "01",
    icon: Search,
    titulo: "Análise de Perfil",
    descricao: "Entendemos seus objetivos, prazo e capacidade de investimento para encontrar a melhor oportunidade.",
    tempo: "1 dia",
  },
  {
    numero: "02",
    icon: Calculator,
    titulo: "Simulação Financeira",
    descricao: "Realizamos simulações detalhadas de financiamento e retorno sobre investimento.",
    tempo: "2-3 dias",
  },
  {
    numero: "03",
    icon: FileText,
    titulo: "Documentação",
    descricao: "Auxiliamos na preparação e análise de toda documentação necessária para o processo.",
    tempo: "5-7 dias",
  },
  {
    numero: "04",
    icon: Key,
    titulo: "Fechamento",
    descricao: "Acompanhamos todo o processo de compra até a entrega das chaves do seu imóvel.",
    tempo: "30-45 dias",
  },
  {
    numero: "05",
    icon: TrendingUp,
    titulo: "Acompanhamento",
    descricao: "Oferecemos suporte contínuo para maximizar o retorno do seu investimento.",
    tempo: "Contínuo",
  },
]

export default function ProcessoInvestimentoInvestidor() {
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
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              investir
            </span>{" "}
            com a Elleven
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nosso processo estruturado garante que você faça o melhor investimento para seu perfil
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {passos.map((passo, index) => {
            const Icon = passo.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Conteúdo */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                      {passo.numero}
                    </div>
                    <div className="text-sm text-orange-600 font-semibold bg-orange-100 px-3 py-1 rounded-full">
                      {passo.tempo}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">{passo.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{passo.descricao}</p>
                </div>

                {/* Ícone */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl flex items-center justify-center hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 transition-all duration-300 group">
                    <Icon className="h-12 w-12 text-gray-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pronto para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                começar?
              </span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Nossa equipe de especialistas está pronta para ajudar você a encontrar o investimento perfeito. Agende uma
              consulta gratuita e descubra as melhores oportunidades do mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-transparent"
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
