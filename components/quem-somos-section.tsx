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
        {/* Eduardo Rocha - Destaque Especial */}
        <div className="mb-16">
          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Foto do Eduardo */}
              <div className="text-center lg:text-left">
                <div className="relative mx-auto lg:mx-0 w-64 h-64 lg:w-80 lg:h-80">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-200/20 to-orange-200/20 blur-xl scale-110 opacity-70" />

                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-secondary/30 shadow-2xl">
                    <img
                      src={timeElleven[0].imagem || "/placeholder.svg"}
                      alt={timeElleven[0].nome}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
                  </div>

                  {/* Badge Founder */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg px-2.5">
                    Eduardo Rocha 
                  </div>
                </div>
              </div>

              {/* Biografia do Eduardo */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{timeElleven[0].nome}</h3>
                  <p className="text-secondary font-medium text-lg uppercase tracking-wider mb-4">
                    {timeElleven[0].cargo}
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-muted-foreground leading-relaxed text-base">{timeElleven[0].descricao}</p>
                </div>

                {/* Elementos decorativos */}
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-12 h-1 bg-secondary rounded-full"></div>
                  <div className="w-8 h-1 bg-secondary/60 rounded-full"></div>
                  <div className="w-4 h-1 bg-secondary/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outros Membros da Equipe */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Diretores Executivos</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {timeElleven.slice(1).map((pessoa) => (
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
                  <h4 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                    {pessoa.nome}
                  </h4>
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
      </div>
    </section>
  )
}
