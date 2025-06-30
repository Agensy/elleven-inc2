"use client"

import { motion } from "framer-motion"
import { Users, Megaphone, FileText, Handshake, Shield } from "lucide-react"

export default function ApoioElleven() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
    viewport: { once: true },
  }

  const services = [
    {
      icon: Megaphone,
      title: "Divulgação",
      description: "Divulgação do seu imóvel nos melhores canais",
      details: "Marketing profissional para atrair os melhores inquilinos",
    },
    {
      icon: FileText,
      title: "Administração",
      description: "Administração do contrato e locação",
      details: "Gestão completa de contratos, pagamentos e documentação",
    },
    {
      icon: Handshake,
      title: "Negociação",
      description: "Negociação com interessados",
      details: "Equipe especializada para conseguir as melhores condições",
    },
    {
      icon: Shield,
      title: "Garantias",
      description: "Obtenção de garantias que asseguram seu rendimento",
      details: "Proteção total do seu investimento com garantias sólidas",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Suporte Especializado
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Conte com a <span className="text-orange-600">Elleven</span> para garantir a eficácia do seu investimento
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Com a experiência da Elleven, você evita erros comuns que podem gerar prejuízos e tem muito mais facilidade
            em todas as etapas.
          </p>
        </motion.div>

        {/* Grid de Serviços */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-3 font-medium">{service.description}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{service.details}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Imagem da Equipe */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl transform rotate-1 scale-105 opacity-60"></div>

            {/* Imagem principal */}
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl">
              <img
                src="/placeholder.svg?height=300&width=800&text=Equipe+de+profissionais+sorrindo"
                alt="Equipe de profissionais sorrindo ou reunião com contrato"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Cards flutuantes */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Investimentos realizados</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
