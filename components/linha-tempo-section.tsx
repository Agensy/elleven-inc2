"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

// Dados dos projetos para a linha do tempo
const todosOsProjetos = [
  {
    id: 1,
    nome: "Botanique",
    imagem: "/linha-tempo/botanique.jpg",
    entrega: "2015",
    mesEntrega: "Setembro",
    status: "Entregue",
    categoria: "Realizado",
  },
  {
    id: 2,
    nome: "Essence",
    imagem: "/linha-tempo/essence.jpg",
    entrega: "2015",
    mesEntrega: "Setembro",
    status: "Entregue",
    categoria: "Realizado",
  },
  {
    id: 3,
    nome: "Le Mont",
    imagem: "/linha-tempo/le-mont.jpg",
    entrega: "2016",
    mesEntrega: "Julho",
    status: "Entregue",
    categoria: "Realizado",
  },
  {
    id: 4,
    nome: "Vert",
    imagem: "/linha-tempo/vert.jpg",
    entrega: "2016",
    mesEntrega: "Abril",
    status: "Entregue",
    categoria: "Realizado",
  },
  {
    id: 5,
    nome: "Grand Parc",
    imagem: "/linha-tempo/grand-parc.jpg",
    entrega: "2016",
    mesEntrega: "Outubro",
    status: "Entregue",
    categoria: "Realizado",
  },
  {
    id: 6,
    nome: "Mont Royal",
    imagem: "/linha-tempo/mont-royal.jpg",
    entrega: "2017",
    mesEntrega: "Março",
    status: "Entregue",
    categoria: "Realizado",
  },
  {
    id: 7,
    nome: "Le Mont 2",
    imagem: "/linha-tempo/le-mont-2.jpg",
    entrega: "2018",
    mesEntrega: "Julho",
    status: "Entregue",
    categoria: "Realizado",
  },
  {
    id: 8,
    nome: "Quartier",
    imagem: "/linha-tempo/quartier.jpg",
    entrega: "2019",
    mesEntrega: "Maio",
    status: "Entregue",
    categoria: "Realizado",
  },
  {
    id: 9,
    nome: "Grand Club Cotia",
    imagem: "/linha-tempo/grand-club-cotia.jpg",
    entrega: "2022",
    mesEntrega: "Janeiro",
    status: "Entregue",
    categoria: "Realizado",
  },
  {
    id: 10,
    nome: "Icaraí Parque Clube",
    imagem: "/linha-tempo/icarai.jpg",
    entrega: "2026",
    mesEntrega: "Novembro",
    status: "Em Andamento",
    categoria: "Em Andamento",
  },
]

interface ProjetoCardProps {
  projeto: (typeof todosOsProjetos)[0]
  isActive: boolean
  isAbove: boolean
}

function ProjetoCard({ projeto, isActive, isAbove }: ProjetoCardProps) {
  return (
    <div
      className={`flex-shrink-0 w-72 mx-6 transition-all duration-500 relative ${
        isActive ? "opacity-100 scale-125" : "opacity-100 scale-95"
      } ${isAbove ? "self-start" : "self-end"}`}
      style={{
        marginTop: isAbove ? "0" : "140px",
        marginBottom: isAbove ? "140px" : "0",
      }}
    >
      {/* Imagem com efeitos de destaque */}
      <div className="relative z-30">
        {/* Container da imagem */}
        <div className="relative overflow-hidden rounded-xl transition-all duration-500">
          <img
            src={projeto.imagem || "/placeholder.svg"}
            alt={`Projeto ${projeto.nome}`}
            className={`w-full object-cover rounded-xl transition-all duration-500 ${
              isActive 
                ? "brightness-110 contrast-110 saturate-110" 
                : "brightness-75 saturate-50 grayscale"
            }`}
          />

          {/* Indicador de pulso no canto inferior */}
          {isActive && (
            <div className="absolute bottom-3 left-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
              <div className="absolute top-0 left-0 w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
          )}
        </div>

        {/* Nome do projeto abaixo da imagem para projeto ativo */}
        {/* {isActive && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500/90 to-orange-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border border-orange-400/30">
            {projeto.nome}
          </div>
        )} */}
      </div>
    </div>
  )
}

export default function LinhaTempoSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false) // Inicia desabilitado
  const [windowWidth, setWindowWidth] = useState(0) // Inicia com 0
  const [isMounted, setIsMounted] = useState(false)

  // Memoize navigation functions to prevent unnecessary re-renders
  const goToNext = useCallback(() => {
    setActiveProject((prev) => {
      if (prev === todosOsProjetos.length - 1) {
        return 0
      }
      return prev + 1
    })
  }, [])

  const goToPrevious = useCallback(() => {
    setActiveProject((prev) => (prev === 0 ? todosOsProjetos.length - 1 : prev - 1))
  }, [])

  const goToProject = useCallback((index: number) => {
    setActiveProject(index)
  }, [])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlay((prev) => !prev)
  }, [])

  // Handle mounting and window resize
  useEffect(() => {
    setIsMounted(true)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    // Enable autoplay after component is mounted
    const timer = setTimeout(() => {
      setIsAutoPlay(true)
    }, 1000)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timer)
    }
  }, [])

  // Auto-play functionality - only runs when component is mounted and autoplay is enabled
  useEffect(() => {
    if (!isAutoPlay || !isMounted) return

    const interval = setInterval(() => {
      setActiveProject((prev) => {
        if (prev === todosOsProjetos.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlay, isMounted])

  // Calculate translation para alinhar o projeto ativo exatamente com a caixa de detalhes
  const calculateTranslateX = useCallback(() => {
    if (!isMounted || windowWidth === 0) return 0

    const cardWidth = 288 // largura do card (w-72 = 288px)
    const cardMargin = 48 // margin horizontal total (mx-6 = 24px cada lado)
    const totalCardWidth = cardWidth + cardMargin // 336px total por card

    // Posição do centro da tela (onde a caixa de detalhes está)
    const screenCenter = windowWidth / 2

    // Posição do centro do card ativo
    const activeCardCenter = activeProject * totalCardWidth + cardWidth / 2 + cardMargin / 2

    // Calcular o deslocamento necessário para alinhar o centro do card com o centro da tela
    const translateX = screenCenter - activeCardCenter

    return translateX
  }, [isMounted, windowWidth, activeProject])

  const translateX = calculateTranslateX()

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <section className="py-20 relative overflow-hidden bg-blue-900">
        <div className="text-center py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-white/20 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-white/10 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background com a nova imagem */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/backgrounds/bloco.jpg')",
        }}
      />

      {/* Background Elements adicionais */}
      <div className="absolute inset-0">
        <div className="absolute top-14 right-7 w-22 h-22 bg-orange-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-14 left-7 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl" />
      </div>

      {/* Header da seção */}
      <div className="text-center mb-16 relative z-40 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">Nossa Trajetória</h2>
        <p className="text-lg text-white/80 max-w-xl mx-auto">Os projetos que marcaram nossa história de excelência</p>
      </div>

      {/* Timeline horizontal */}
      <div className="relative mb-12 z-20">
        {/* Linha principal */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-500/80 transform -translate-y-1/2 z-20" />

        {/* Marcações dos projetos na linha */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-25">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(${translateX}px)`,
              width: `${todosOsProjetos.length * 336}px`,
            }}
          >
            {todosOsProjetos.map((_, index) => (
              <div key={index} className="flex-shrink-0 w-72 mx-6 flex justify-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                    index === activeProject
                      ? "bg-orange-500 border-orange-300 scale-150 animate-pulse"
                      : "bg-orange-400/80 border-orange-300/80 scale-100"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Container dos projetos */}
        <div
          className="flex items-center py-12 transition-transform duration-700 ease-out relative z-30"
          style={{
            transform: `translateX(${translateX}px)`,
            width: `${todosOsProjetos.length * 336}px`,
          }}
        >
          {todosOsProjetos.map((projeto, index) => (
            <ProjetoCard
              key={projeto.id}
              projeto={projeto}
              isActive={index === activeProject}
              isAbove={index % 2 === 0}
            />
          ))}
        </div>
      </div>

      {/* Painel de Controle */}
      <div className="container mx-auto px-4 md:px-7 lg:px-14 relative z-40">
        <div className="space-y-4">
          {/* Informações do projeto ativo com efeito Liquid Glass */}
          <div className="text-center p-3">
            <div className="flex items-center justify-center gap-6">
              {/* Botão anterior */}
              <button
                onClick={goToPrevious}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Caixa de detalhes */}
              <div className="relative group overflow-hidden inline-block transition-all duration-500 hover:scale-105 transform-gpu">
                {/* Background principal com liquid glass */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-2xl rounded-2xl border border-white/30"></div>

                {/* Efeito de brilho animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out rounded-2xl"></div>

                {/* Borda interna brilhante */}
                <div className="absolute inset-0 rounded-2xl border border-white/40 group-hover:border-white/60 transition-colors duration-300"></div>

                {/* Reflexo superior */}
                <div className="absolute top-2 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"></div>

                {/* Reflexo lateral esquerdo */}
                <div className="absolute top-6 bottom-6 left-2 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent rounded-full"></div>

                {/* Conteúdo */}
                <div className="relative z-10 px-6 py-4">
                  <h3 className="text-xl font-bold text-white mb-1">{todosOsProjetos[activeProject]?.nome}</h3>
                  <div className="flex items-center justify-center gap-3 text-white/80 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-sm">{todosOsProjetos[activeProject]?.mesEntrega}</span>
                    </div>
                    <span>•</span>
                    <span className="font-semibold text-sm">{todosOsProjetos[activeProject]?.entrega}</span>
                    <span>•</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                        todosOsProjetos[activeProject]?.status === "Entregue"
                          ? "bg-emerald-500/20 text-emerald-100 border-emerald-400/30"
                          : "bg-orange-500/20 text-orange-100 border-orange-400/30"
                      }`}
                    >
                      {todosOsProjetos[activeProject]?.status}
                    </span>
                  </div>

                  {/* Botão Ver Detalhes simplificado */}
                  <button className="bg-orange-500/80 hover:bg-orange-500 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 border border-orange-400/30">
                    Ver Detalhes
                  </button>
                </div>
              </div>

              {/* Botão próximo */}
              <button
                onClick={goToNext}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Indicador de progresso e navegação por pontos */}
          <div className="flex flex-col items-center gap-3 p-3">
            {/* Barra de progresso */}
            <div className="w-56 bg-white/20 rounded-full h-1 overflow-hidden">
              <div
                className="bg-orange-500 h-full transition-all duration-700 ease-out"
                style={{ width: `${((activeProject + 1) / todosOsProjetos.length) * 100}%` }}
              />
            </div>

            {/* Navegação por pontos */}
            <div className="flex items-center gap-1 p-1">
              {todosOsProjetos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeProject ? "bg-orange-500 scale-125" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Contador */}
            <div className="text-white/60 text-sm p-1">
              {activeProject + 1} de {todosOsProjetos.length} projetos
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
