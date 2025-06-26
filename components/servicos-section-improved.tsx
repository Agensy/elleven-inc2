"use client"
import { motion } from "framer-motion"
import { ClipboardList, Settings, Building2, Palette, Eye } from "lucide-react"

// =============================================================================
// DADOS DOS SERVIÇOS - MELHORADOS
// =============================================================================

const servicos = [
  {
    icon: ClipboardList,
    numero: "01",
    titulo: "Planejamento",
    subtitulo: "Estratégico",
    descricao:
      "Viabilidade técnica, anteprojetos arquitetônicos e análises jurídicas completas para garantir o sucesso do seu empreendimento.",
    itens: ["Viabilidade técnica", "Anteprojetos arquitetônicos", "Análises jurídicas completas"],
    cor: "blue",
  },
  {
    icon: Settings,
    numero: "02",
    titulo: "Gestão",
    subtitulo: "de Obras",
    descricao:
      "Gerenciamento completo e integrado: controle financeiro, contábil, jurídico e administração de contratos.",
    itens: ["Gestão financeira", "Controle contábil", "Administração de contratos"],
    cor: "blue",
  },
  {
    icon: Building2,
    numero: "03",
    titulo: "Incorporação",
    subtitulo: "Imobiliária",
    descricao: "Desenvolvimento completo do conceito inicial à entrega das chaves, com excelência em cada etapa.",
    itens: ["Incorporação completa", "Construção premium", "Entrega turnkey"],
    cor: "orange",
  },
  {
    icon: Palette,
    numero: "04",
    titulo: "Design",
    subtitulo: "de Interiores",
    descricao: "Projetos sofisticados de stands de vendas e ambientação personalizada que encantam e convertem.",
    itens: ["Stands de vendas", "Design de interiores", "Consultoria especializada"],
    cor: "blue",
  },
  {
    icon: Eye,
    numero: "05",
    titulo: "Acompanhamento",
    subtitulo: "Técnico",
    descricao: "Supervisão técnica rigorosa e controle de qualidade em todas as etapas da construção.",
    itens: ["Supervisão técnica", "Controle de qualidade", "Gestão de equipes"],
    cor: "blue",
  },
]

// =============================================================================
// COMPONENTE MELHORADO
// =============================================================================

export default function ServicosSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="section-clean">
      <div className="container-elleven">
        {/* Header Sofisticado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-6"></div>

          <h2 className="text-h1 mb-6">
            Juntos construiremos
            <br />
            <span className="text-gradient-orange">o seu sonho</span>
          </h2>

          <p className="text-body max-w-2xl mx-auto">
            Soluções completas em engenharia e incorporação imobiliária, com excelência técnica e sofisticação em cada
            etapa do seu projeto.
          </p>
        </motion.div>

        {/* Grid de Serviços Melhorado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {servicos.map((servico, index) => {
            const Icon = servico.icon
            const isDestaque = servico.cor === "orange"

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className={`
                  group relative overflow-hidden rounded-xl border transition-all duration-300
                  ${
                    isDestaque
                      ? "card-premium bg-gradient-to-br from-white to-orange-50/30 border-orange-100 shadow-lg"
                      : "card-clean hover:shadow-xl"
                  }
                `}
              >
                {/* Número Elegante */}
                <div className="absolute top-6 right-6 z-10">
                  <div
                    className={`
                    w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm
                    ${
                      isDestaque
                        ? "bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                    }
                    transition-all duration-300
                  `}
                  >
                    {servico.numero}
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-8">
                  {/* Ícone e Título */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`
                      flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300
                      ${
                        isDestaque
                          ? "bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600"
                          : "bg-gray-50 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                      }
                    `}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-h3 mb-1 leading-tight">
                        {servico.titulo}
                        <span className="block text-muted font-medium text-lg">{servico.subtitulo}</span>
                      </h3>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-body-small mb-6 leading-relaxed">{servico.descricao}</p>

                  {/* Lista de Itens Melhorada */}
                  <div className="space-y-3">
                    {servico.itens.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div
                          className={`
                          w-2 h-2 rounded-full flex-shrink-0
                          ${isDestaque ? "bg-orange-400" : "bg-blue-400"}
                        `}
                        />
                        <span className="text-body-small text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Borda Animada */}
                <div
                  className={`
                  absolute inset-x-0 bottom-0 h-1 transition-all duration-300 origin-left
                  ${
                    isDestaque
                      ? "bg-gradient-to-r from-orange-400 to-orange-500 scale-x-100"
                      : "bg-gradient-to-r from-blue-400 to-blue-500 scale-x-0 group-hover:scale-x-100"
                  }
                `}
                />

                {/* Efeito de Brilho no Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-h3 mb-4">Pronto para começar seu projeto?</h3>
            <p className="text-body mb-6 max-w-md mx-auto">
              Entre em contato conosco e descubra como podemos transformar sua visão em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">Falar com Especialista</button>
              <button className="btn-secondary px-8 py-3">Ver Portfólio</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
