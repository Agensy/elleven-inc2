"use client"

import { useState, useEffect } from "react"

// Dados da equipe
const timeElleven = [
  {
    id: 1,
    nome: "Eduardo Rocha",
    cargo: "Founder e CEO",
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/1-EDUARDO-ROCHA.png", // Mantém a imagem existente
    descricao:
      "Executivo com mais de 30 anos no mundo corporativo e mais de 10 no setor imobiliário, com foco na construção de negócios rentáveis. Já entregou mais de 2.000 unidades habitacionais, atuando em todas as etapas dos projetos. É bacharel em Administração, pós-graduado em Marketing (ESPM) e possui MBA em Planejamento Estratégico (FGV).",
  },
  {
    id: 2,
    nome: "Marco Túlio",
    cargo: "Diretor Executivo de Parcerias e Investidores",
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/2-MARCO-TULIO.png", // Mantém a imagem existente
    descricao:
      "Com mais de 28 anos de carreira, acumula experiência em projetos de implementação, desenvolvimento e expansão de negócios. Atuou como executivo na SAP e fundou empresas de consultoria em tecnologia. Hoje, aplica seu conhecimento para acelerar o crescimento da Elleven no mercado imobiliário.",
  },
  {
    id: 3,
    nome: "Fernando Remor",
    cargo: "Diretor Executivo Jurídico",
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/3-FERNANDO-REMOR.png", // Mantém a imagem existente
    descricao:
      "Advogado formado pela USP, com mais de 35 anos de atuação. Sua experiência inclui assessoria em negócios internacionais e estruturação de operações para investidores estrangeiros no Brasil. Atua também como empresário no mercado imobiliário dos EUA, com foco em house flipping e fundos de investimento.",
  },
  {
    id: 4,
    nome: "Mauro Resende",
    cargo: "Diretor Executivo de Engenharia",
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/4-MAURO-RESENDE.png", // Mantém a imagem existente
    descricao:
      "Engenheiro civil com mais de 40 anos de experiência em infraestrutura e saneamento. Foi responsável por mais de um milhão de metros quadrados construídos e mais de 10 mil unidades habitacionais. É formado pela UFMG, com especializações em Administração (Mackenzie) e MBA em Gestão de Negócios Imobiliários (FGV).",
  },
]

export default function QuemSomosSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section
      className="py-20 bg-background relative overflow-hidden"
      style={{
        backgroundImage: "url(/graphics/grafismos-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-orange-50/20" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 uppercase" style={{ color: "#1A2D54" }}>
            Quem somos nós
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontSize: "0.875rem" }}>
            Conheça os profissionais visionários que lideram a Elleven Engenharia, combinando experiência, inovação e
            excelência em cada projeto.
          </p>
        </div>

        {/* Grid do Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {timeElleven.map((pessoa) => (
            <div key={pessoa.id} className="text-center group">
              {/* Foto */}
              <div className="relative mb-6 mx-auto w-48 h-48 lg:w-56 lg:h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/20 to-orange-200/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary/20 group-hover:border-secondary/40 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <img
                    src={pessoa.imagem || "/placeholder.svg"}
                    alt={pessoa.nome}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Informações */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                  {pessoa.nome}
                </h3>
                <p className="text-secondary font-medium text-sm uppercase tracking-wider">{pessoa.cargo}</p>
                <p
                  className="text-muted-foreground leading-relaxed mt-4 group-hover:text-foreground/80 transition-colors duration-300"
                  style={{ fontSize: "0.875rem" }}
                >
                  {pessoa.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
