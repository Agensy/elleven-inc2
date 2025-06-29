"use client"
import { motion } from "framer-motion"
import { ClipboardList, Settings, Building2, Palette, Eye } from "lucide-react"

// =============================================================================
// DADOS DOS SERVIÇOS - PADRÃO ELLEVEN EXATO
// =============================================================================

const servicos = [
  {
    icon: ClipboardList,
    numero: "1",
    titulo: "Planejamento",
    subtitulo: "Estratégico",
    descricao: "Viabilidade técnica, anteprojetos arquitetônicos e análises jurídicas completas.",
    itens: ["Viabilidade técnica", "Anteprojetos", "Análises jurídicas"],
  },
  {
    icon: Settings,
    numero: "2",
    titulo: "Gestão",
    subtitulo: "de Obras",
    descricao: "Gerenciamento completo: financeiro, contábil, jurídico e de contratos.",
    itens: ["Gestão financeira", "Controle contábil", "Administração de contratos"],
  },
  {
    icon: Building2,
    numero: "3",
    titulo: "Incorporação",
    subtitulo: "Imobiliária",
    descricao: "Desenvolvimento completo do conceito à entrega das chaves.",
    itens: ["Incorporação", "Construção", "Entrega turnkey"],
  },
  {
    icon: Palette,
    numero: "4",
    titulo: "Design",
    subtitulo: "de Interiores",
    descricao: "Projetos de stands de vendas e ambientação personalizada.",
    itens: ["Stands de vendas", "Design de interiores", "Consultoria"],
  },
  {
    icon: Eye,
    numero: "5",
    titulo: "Acompanhamento",
    subtitulo: "Técnico",
    descricao: "Supervisão técnica e controle de qualidade em todas as etapas.",
    itens: ["Supervisão técnica", "Controle de qualidade", "Gestão de equipes"],
  },
]

// =============================================================================
// COMPONENTE COM PADRÃO ELLEVEN EXATO - SEM CLASSES CONFLITANTES
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
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Exato da Imagem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2D54] mb-6 leading-tight uppercase tracking-tight">
            JUNTOS CONSTRUIREMOS
            <br />O SEU SONHO
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Soluções completas em engenharia e incorporação imobiliária, com excelência em cada etapa do seu projeto.
          </p>
        </motion.div>

        {/* Grid de Serviços - Layout Exato da Imagem */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Primeira linha - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {servicos.slice(0, 3).map((servico, index) => {
              const Icon = servico.icon

              return (
                <motion.div key={index} variants={cardVariants} className="group relative bg-white">
                  {/* Número no canto superior direito */}
                  <div className="absolute top-0 right-4 z-10">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">{servico.numero}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    {/* Header do Card com Ícone */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#1A2D54] flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <div className="flex-1 min-w-0 pt-2">
                        <h3 className="text-xl font-bold leading-tight">
                          <span className="text-[#1A2D54]">{servico.titulo}</span>{" "}
                          <span className="text-gray-500 font-normal">{servico.subtitulo}</span>
                        </h3>
                      </div>
                    </div>

                    {/* Descrição */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-base">{servico.descricao}</p>

                    {/* Lista de Itens */}
                    <div className="space-y-3">
                      {servico.itens.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Segunda linha - 2 cards centralizados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicos.slice(3, 5).map((servico, index) => {
              const Icon = servico.icon
              const realIndex = index + 3

              return (
                <motion.div key={realIndex} variants={cardVariants} className="group relative bg-white">
                  {/* Número no canto superior direito */}
                  <div className="absolute top-0 right-4 z-10">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">{servico.numero}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    {/* Header do Card com Ícone */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#1A2D54] flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <div className="flex-1 min-w-0 pt-2">
                        <h3 className="text-xl font-bold leading-tight">
                          <span className="text-[#1A2D54]">{servico.titulo}</span>{" "}
                          <span className="text-gray-500 font-normal">{servico.subtitulo}</span>
                        </h3>
                      </div>
                    </div>

                    {/* Descrição */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-base">{servico.descricao}</p>

                    {/* Lista de Itens */}
                    <div className="space-y-3">
                      {servico.itens.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
