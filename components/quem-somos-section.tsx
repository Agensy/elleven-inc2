"use client"

import { useState, useEffect } from "react"

// Dados da equipe
const timeElleven = [
  {
    id: 1,
    nome: "Eduardo Rocha",
    cargo: "Founder & CEO",
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/1-EDUARDO-ROCHA.png",
    descricao:
      "Visionário empreendedor com mais de 15 anos de experiência no mercado imobiliário. Lidera a Elleven com foco em inovação e excelência, transformando projetos em realidade e superando expectativas dos clientes.",
  },
  {
    id: 2,
    nome: "Marco Tulio",
    cargo: "CTO & Co-founder",
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/2-MARCO-TULIO.png",
    descricao:
      "Especialista em tecnologia e desenvolvimento de projetos, combina expertise técnica com visão estratégica. Responsável pela implementação de soluções inovadoras que posicionam a Elleven na vanguarda do setor.",
  },
  {
    id: 3,
    nome: "Fernando Remor",
    cargo: "Diretor de Projetos",
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/3-FERNANDO-REMOR.png",
    descricao:
      "Com vasta experiência em gestão de projetos imobiliários, Fernando garante que cada empreendimento seja executado com precisão, qualidade e dentro dos prazos estabelecidos, mantendo os mais altos padrões da empresa.",
  },
  {
    id: 4,
    nome: "Mauro Resende",
    cargo: "Diretor Comercial",
    imagem: "https://agensya.com.br/wp-content/uploads/2025/06/4-MAURO-RESENDE.png",
    descricao:
      "Especialista em relacionamento com clientes e estratégias comerciais. Mauro lidera a equipe de vendas com foco em compreender as necessidades dos clientes e oferecer soluções personalizadas de alto valor.",
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
    <section className="py-20 bg-background relative overflow-hidden">
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
