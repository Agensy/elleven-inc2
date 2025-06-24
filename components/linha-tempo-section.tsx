"use client"

import { useState, useEffect } from "react"

// Dados dos projetos para a linha do tempo
const projetosRealizados = [
  {
    id: 1,
    nome: "Botanique",
    imagem: "/linha-tempo/botanique.jpg",
    entrega: "2015",
    mesEntrega: "Setembro",
    posicao: "bottom",
  },
  {
    id: 2,
    nome: "Essence",
    imagem: "/linha-tempo/essence.jpg",
    entrega: "2015",
    mesEntrega: "Setembro",
    posicao: "bottom",
  },
  {
    id: 3,
    nome: "Le Mont",
    imagem: "/linha-tempo/le-mont.jpg",
    entrega: "2016",
    mesEntrega: "Julho",
    posicao: "bottom",
  },
  {
    id: 4,
    nome: "Vert",
    imagem: "/linha-tempo/vert.jpg",
    entrega: "2016",
    mesEntrega: "Abril",
    posicao: "top",
  },
  {
    id: 5,
    nome: "Grand Parc",
    imagem: "/linha-tempo/grand-parc.jpg",
    entrega: "2016",
    mesEntrega: "Outubro",
    posicao: "top",
  },
]

const projetosEmAndamento = [
  {
    id: 6,
    nome: "Mont Royal",
    imagem: "/linha-tempo/mont-royal.jpg",
    entrega: "2017",
    mesEntrega: "Março",
    posicao: "bottom",
  },
  {
    id: 7,
    nome: "Quartier",
    imagem: "/linha-tempo/quartier.jpg",
    entrega: "2019",
    mesEntrega: "Maio",
    posicao: "bottom",
  },
  {
    id: 8,
    nome: "Le Mont 2",
    imagem: "/linha-tempo/le-mont-2.jpg",
    entrega: "2018",
    mesEntrega: "Julho",
    posicao: "top",
  },
  {
    id: 9,
    nome: "Grand Club Cotia",
    imagem: "/linha-tempo/grand-club-cotia.jpg",
    entrega: "2022",
    mesEntrega: "Janeiro",
    posicao: "top",
  },
  {
    id: 10,
    nome: "Icaraí Parque Clube",
    imagem: "/linha-tempo/icarai.jpg",
    entrega: "2026",
    mesEntrega: "Novembro",
    posicao: "top",
  },
]

interface ProjetoCardProps {
  projeto: (typeof projetosRealizados)[0]
  isTop?: boolean
}

function ProjetoCard({ projeto, isTop = false }: ProjetoCardProps) {
  return (
    <div className={`relative ${isTop ? "mb-16" : "mt-16"}`}>
      {/* Linha conectora principal */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-orange-500 ${
          isTop ? "top-full h-16" : "bottom-full h-16"
        }`}
      />

      {/* Marcador diamante */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-500 rotate-45 z-10 ${
          isTop ? "top-full mt-[60px]" : "bottom-full mb-[60px]"
        }`}
      />

      {/* Card do projeto */}
      <div className="max-w-48 mx-auto px-1">
        <img
          src={projeto.imagem || "/placeholder.svg"}
          alt={`Card do projeto ${projeto.nome}`}
          className="w-full h-auto rounded-xl"
        />
      </div>

      {/* Badge menor e mais compacto */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 ${isTop ? "top-full mt-16" : "bottom-full mb-16"}`}>
        <div className="group relative">
          {/* Badge principal - menor */}
          <div className="flex flex-col items-center bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 shadow-xl transition-all duration-300 hover:scale-105">
            {/* Status com ícone - compacto */}
            <div className="flex items-center gap-1 mb-0.5">
              <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="text-xs font-medium text-white/90 uppercase tracking-wider">Entregue</span>
            </div>

            {/* Ano principal - menor */}
            <div className="text-base font-bold text-white mb-0.5 tracking-tight">{projeto.entrega}</div>

            {/* Mês - menor */}
            <div className="text-xs text-white/80 font-medium">{projeto.mesEntrega}</div>
          </div>

          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* Sombra colorida */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-emerald-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
    </div>
  )
}

interface TimelineBlockProps {
  title: string
  projetos: typeof projetosRealizados
}

function TimelineBlock({ title, projetos }: TimelineBlockProps) {
  // Tratamento especial para "Projetos em Andamento"
  const formatTitle = (title: string) => {
    if (title === "Projetos em Andamento") {
      return ["Projetos em", "Andamento"]
    }
    return title.split(" ")
  }

  const titleWords = formatTitle(title)

  return (
    <div className="mb-24">
      {/* Timeline horizontal com título vertical */}
      <div className="relative flex items-center">
        {/* Badge vertical no lado esquerdo - mais próximo da linha */}
        <div className="flex-shrink-0 mr-4">
          <div className="group relative">
            {/* Badge com efeito de vidro melhorado */}
            <div className="bg-gradient-to-br from-orange-500/20 via-orange-400/15 to-orange-600/25 backdrop-blur-xl border border-orange-300/30 rounded-xl px-5 py-4 shadow-2xl transform -rotate-90 origin-center transition-all duration-300 hover:scale-105 hover:shadow-orange-500/20">
              <div className="text-center">
                {titleWords.map((word, index) => (
                  <div
                    key={index}
                    className="text-sm font-semibold text-white uppercase tracking-wide leading-tight drop-shadow-lg"
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>

            {/* Efeito de brilho interno */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl transform -rotate-90 origin-center opacity-60 pointer-events-none"></div>

            {/* Reflexo de vidro */}
            <div className="absolute top-1 left-1 right-1 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl transform -rotate-90 origin-center pointer-events-none"></div>

            {/* Sombra externa colorida no hover */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-orange-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 transform -rotate-90 origin-center"></div>
          </div>
        </div>

        {/* Container da timeline */}
        <div className="flex-1 relative">
          {/* Linha principal - branca */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2 z-0" />

          {/* Projetos em linha horizontal */}
          <div className="flex justify-between items-center min-h-[400px]">
            {projetos.map((projeto) => (
              <div key={projeto.id} className="flex-1 max-w-[200px]">
                <ProjetoCard projeto={projeto} isTop={projeto.posicao === "top"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LinhaTempoSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        {/* Bloco 1: Empreendimentos Realizados */}
        <TimelineBlock title="Empreendimentos Realizados" projetos={projetosRealizados} />

        {/* Bloco 2: Projetos em Andamento */}
        <TimelineBlock title="Projetos em Andamento" projetos={projetosEmAndamento} />
      </div>
    </section>
  )
}
