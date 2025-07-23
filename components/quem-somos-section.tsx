"use client"

import { useState, useEffect } from "react"

// Dados da equipe
const timeElleven = [
  {
    id: 1,
    nome: "Eduardo Rocha",
    cargo: ["Founder e CEO"],
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/1-EDUARDO-ROCHA.png", // Mantém a imagem existente
    descricao:
      "Executivo com uma combinação de visão estratégica e experiência prática, focado em construir negócios saudáveis e rentáveis. Com mais de 30 anos de trajetória no mundo corporativo e mais de 10 anos de atuação no setor de incorporação imobiliária, já entregou mais de 2.000 unidades habitacionais. Possui vasta experiência na execução de obras, acompanhando todo o ciclo de desenvolvimento, desde a concepção até a entrega das chaves. É bacharel em Administração de Empresas, pós-graduado em Marketing pela ESPM e possui MBA em Planejamento Estratégico pela Fundação Getúlio Vargas.",
  },
  {
    id: 2,
    nome: "Marco Túlio",
    cargo: ["Diretor Executivo", "Parcerias e Investidores"],
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/2-MARCO-TULIO.png", // Mantém a imagem existente
    descricao:
      "Possui mais de 28 anos de experiência em projetos de implementação, desenvolvimento, treinamento e vendas de softwares corporativos. Foi executivo na subsidiária brasileira da SAP, sócio fundador da Finity Consultoria e diretor de vendas na Spread Tecnologia e IntraGroup. Atualmente, aplica toda sua experiência em processos de negócios para impulsionar o crescimento do ecossistema da empresa no mercado imobiliário.",
  },
  {
    id: 3,
    nome: "Fernando Remor",
    cargo: ["Diretor Executivo", "Jurídico"],
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/3-FERNANDO-REMOR.png", // Mantém a imagem existente
    descricao:
      "Advogado graduado pela USP, com mais de 35 anos de experiência na advocacia. Sua trajetória inclui a participação em inúmeros negócios internacionais, com destaque para a assessoria a clientes estrangeiros interessados em fazer negócios no Brasil. Há 7 anos nos Estados Unidos, é empresário no ramo de house flipping em Pittsburgh, na Pensilvânia, além de ser especialista em operações estruturadas com fundos de investimentos.",
  },
  {
    id: 4,
    nome: "Mauro Resende",
    cargo: ["Diretor Executivo", "de Engenharia"],
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/4-MAURO-RESENDE.png", // Mantém a imagem existente
    descricao:
      "Engenheiro civil com mais de 40 anos de experiência em projetos de infraestrutura e saneamento. Foi responsável pela construção de mais de um milhão de metros quadrados, incluindo a execução de escolas, hospitais e unidades de saúde. Construindo mais de 10.000 unidades habitacionais, abrangendo os segmentos econômico, médio e alto padrão. Formado pela UFMG em 1981, com especializações em Administração (Mackenzie) e MBA em Gestão de Negócios Imobiliários (FGV), destacou-se em obras de sistemas de captação e tratamento de água, redes de esgoto, pontes, viadutos e empreendimentos imobiliários.",
  },
]

export default function QuemSomosSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Quem Somos
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Carregando...
            </p>
          </div>
        </div>
      </section>
    )
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

                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-orange-500/30 shadow-2xl">
                    <img
                      src={timeElleven[0].imagem || "/placeholder.svg"}
                      alt={timeElleven[0].nome}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
                  </div>

                  {/* Badge Founder */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg px-2.5">
                    Eduardo Rocha
                  </div>
                </div>
              </div>

              {/* Biografia do Eduardo */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{timeElleven[0].nome}</h3>
                  <div className="text-orange-500 font-medium text-lg uppercase tracking-wider mb-4">
                    {Array.isArray(timeElleven[0].cargo) ? (
                      timeElleven[0].cargo.map((line, index) => <span key={index} className="block">{line}</span>)
                    ) : (
                      timeElleven[0].cargo
                    )}
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-muted-foreground leading-relaxed text-base">{timeElleven[0].descricao}</p>
                </div>

                {/* Elementos decorativos */}
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                  <div className="w-8 h-1 bg-orange-500/60 rounded-full"></div>
                  <div className="w-4 h-1 bg-orange-500/30 rounded-full"></div>
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

                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <img
                      src={pessoa.imagem || "/placeholder.svg"}
                      alt={pessoa.nome}
                      className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Informações */}
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-orange-500 transition-colors duration-300">
                    {pessoa.nome}
                  </h4>
                  <div className="text-orange-500 font-medium text-sm uppercase tracking-wider">
                    {Array.isArray(pessoa.cargo) ? (
                      pessoa.cargo.map((line, index) => <span key={index} className="block">{line}</span>)
                    ) : (
                      pessoa.cargo
                    )}
                  </div>
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
