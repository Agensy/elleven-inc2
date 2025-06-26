"use client"

import { motion } from "framer-motion"
import { TrendingUp, ArrowRight, DollarSign, Shield, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InvestimentoSectionImproved() {
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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.15 },
    viewport: { once: true },
  }

  const benefits = [
    {
      icon: TrendingUp,
      title: "Valorização",
      subtitle: "Constante",
      description: "Imóveis com potencial de valorização acima do mercado",
      color: "blue",
    },
    {
      icon: DollarSign,
      title: "Renda",
      subtitle: "Passiva",
      description: "Retorno financeiro mensal sem esforço adicional",
      color: "green",
    },
    {
      icon: Shield,
      title: "Segurança",
      subtitle: "Garantida",
      description: "Investimento em ativos tangíveis e seguros",
      color: "blue",
    },
    {
      icon: Percent,
      title: "Rentabilidade",
      subtitle: "Acima da média",
      description: "Performance superior aos investimentos tradicionais",
      color: "orange",
    },
  ]

  return (
    <section className="section-clean overflow-hidden">
      <div className="container-elleven">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Lado Esquerdo - Conteúdo */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header com linha de destaque */}
            <div className="space-y-6">
              <div className="accent-line"></div>

              <h2 className="text-h1 leading-tight">
                A rentabilidade
                <br />
                <span className="text-gradient-orange">certa</span> para o seu
                <br />
                investimento
              </h2>

              <p className="text-body-large max-w-lg">
                No mercado imobiliário, você encontra a segurança e rentabilidade que seu patrimônio merece. Invista em
                empreendimentos sólidos com potencial de valorização garantido.
              </p>
            </div>

            {/* Grid de Benefícios */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className={`group p-5 rounded-xl transition-all duration-300 cursor-pointer ${
                    benefit.color === "orange"
                      ? "card-premium border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50"
                      : "card-clean hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                      w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110
                      ${
                        benefit.color === "orange"
                          ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25"
                          : benefit.color === "green"
                            ? "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25"
                            : "bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25"
                      }
                    `}
                    >
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-h4 text-sm font-semibold">{benefit.title}</h4>
                        <span className="text-muted text-xs font-medium">{benefit.subtitle}</span>
                      </div>
                      <p className="text-body-small text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button className="btn-accent group shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30">
                Quero Investir
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button variant="outline" className="btn-secondary border-2">
                Simular Investimento
              </Button>
            </motion.div>
          </motion.div>

          {/* Lado Direito - Imagem e Cards Flutuantes */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Elementos decorativos de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-transparent rounded-3xl transform rotate-6 scale-105 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-50 via-transparent to-orange-50 rounded-3xl transform -rotate-3 scale-110 opacity-40"></div>

              {/* Imagem principal */}
              <div className="relative z-10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homem-terno-investimento-5kKFFwfh6r3Cy9nptvdULYrDGlDVkP.png"
                  alt="Especialista em investimentos imobiliários da Elleven"
                  className="w-full h-auto relative z-10 rounded-2xl"
                />
              </div>

              {/* Card Flutuante - Investimentos */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="absolute top-8 right-4 lg:-right-8 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center space-y-2">
                  <div className="text-2xl lg:text-3xl font-bold text-gradient-orange group-hover:scale-110 transition-transform duration-300">
                    R$ 2M+
                  </div>
                  <div className="text-xs lg:text-sm text-muted font-medium">Investimentos Realizados</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Card Flutuante - Rentabilidade */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="absolute bottom-8 left-4 lg:-left-8 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center space-y-2">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    12%
                  </div>
                  <div className="text-xs lg:text-sm text-muted font-medium">Rentabilidade Anual</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Elementos decorativos flutuantes */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-xl opacity-60"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full blur-lg opacity-50"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
