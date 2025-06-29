"use client"

import { motion } from "framer-motion"
import { Megaphone, Settings, Handshake, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const servicos = [
  {
    icon: Megaphone,
    titulo: "Divulgação",
    descricao: "Marketing profissional para atrair os melhores inquilinos",
  },
  {
    icon: Settings,
    titulo: "Administração",
    descricao: "Gestão completa do seu imóvel sem dor de cabeça",
  },
  {
    icon: Handshake,
    titulo: "Negociação",
    descricao: "Expertise para conseguir os melhores valores de aluguel",
  },
  {
    icon: Shield,
    titulo: "Obtenção de Garantias",
    descricao: "Segurança total com garantias sólidas e confiáveis",
  },
]

export default function ApoioElevenSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
    viewport: { once: true },
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/brand/elleven/graphics/pattern-2.png')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Conte com a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Elleven
            </span>{" "}
            para garantir
            <br />a eficácia do seu investimento
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ter o apoio de uma Imobiliária referência neste ramo é fundamental para evitar prejuízos e ter mais
            facilidade e segurança durante o processo.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Auxiliamos na:</h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {servicos.map((servico, index) => {
              const Icon = servico.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {servico.titulo}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{servico.descricao}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* CTA Final */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Pronto para começar seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                investimento?
              </span>
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para ajudar você a encontrar o investimento perfeito e maximizar
              sua rentabilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-transparent"
              >
                Simular Investimento
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
