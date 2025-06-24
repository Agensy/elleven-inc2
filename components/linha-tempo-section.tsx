"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Calendar, MapPin, Building } from "lucide-react"

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
    lancamento: "09/2012",
    localizacao: "Cotia, São Paulo",
    unidades: "180 Unidades",
    torres: "6 Torres",
    vgv: "R$ 29.088.000,00",
  },
  {
    id: 2,
    nome: "Essence",
    imagem: "/linha-tempo/essence.jpg",
    entrega: "2015",
    mesEntrega: "Setembro",
    status: "Entregue",
    categoria: "Realizado",
    lancamento: "09/2012",
    localizacao: "Cotia, São Paulo",
    unidades: "180 Unidades",
    torres: "6 Torres",
    vgv: "R$ 29.088.000,00",
  },
  {
    id: 3,
    nome: "Le Mont",
    imagem: "/linha-tempo/le-mont.jpg",
    entrega: "2016",
    mesEntrega: "Julho",
    status: "Entregue",
    categoria: "Realizado",
    lancamento: "04/2013",
    localizacao: "Cotia, São Paulo",
    unidades: "150 Unidades",
    torres: "5 Torres",
    vgv: "R$ 21.192.000,00",
  },
  {
    id: 4,
    nome: "Vert",
    imagem: "/linha-tempo/vert.jpg",
    entrega: "2016",
    mesEntrega: "Abril",
    status: "Entregue",
    categoria: "Realizado",
    lancamento: "10/2012",
    localizacao: "Itú, São Paulo",
    unidades: "100 Unidades",
    torres: "5 Torres",
    vgv: "R$ 11.900.000,00",
  },
  {
    id: 5,
    nome: "Grand Parc",
    imagem: "/linha-tempo/grand-parc.jpg",
    entrega: "2016",
    mesEntrega: "Outubro",
    status: "Entregue",
    categoria: "Realizado",
    lancamento: "01/2013",
    localizacao: "Itú, São Paulo",
    unidades: "192 Unidades",
    torres: "12 Torres",
    vgv: "R$ 25.435.000,00",
  },
  {
    id: 6,
    nome: "Mont Royal",
    imagem: "/linha-tempo/mont-royal.jpg",
    entrega: "2017",
    mesEntrega: "Março",
    status: "Entregue",
    categoria: "Realizado",
    lancamento: "2010",
    localizacao: "Cotia, São Paulo",
    unidades: "151 Unidades",
    torres: "5 Torres",
    vgv: "R$ 19.177.000,00",
  },
  {
    id: 7,
    nome: "Le Mont 2",
    imagem: "/linha-tempo/le-mont-2.jpg",
    entrega: "2018",
    mesEntrega: "Julho",
    status: "Entregue",
    categoria: "Realizado",
    lancamento: "2014",
    localizacao: "Cotia, São Paulo",
    unidades: "120 Unidades",
    torres: "4 Torres",
    vgv: "R$ 18.500.000,00",
  },
  {
    id: 8,
    nome: "Quartier",
    imagem: "/linha-tempo/quartier.jpg",
    entrega: "2019",
    mesEntrega: "Maio",
    status: "Entregue",
    categoria: "Realizado",
    lancamento: "2015",
    localizacao: "Cotia, São Paulo",
    unidades: "98 Unidades",
    torres: "3 Torres",
    vgv: "R$ 15.200.000,00",
  },
  {
    id: 9,
    nome: "Grand Club Cotia",
    imagem: "/linha-tempo/grand-club-cotia.jpg",
    entrega: "2022",
    mesEntrega: "Janeiro",
    status: "Entregue",
    categoria: "Realizado",
    lancamento: "2017",
    localizacao: "Cotia, São Paulo",
    unidades: "198 Unidades",
    torres: "8 Torres",
    vgv: "R$ 32.100.000,00",
  },
  {
    id: 10,
    nome: "Icaraí Parque Clube",
    imagem: "/linha-tempo/icarai.jpg",
    entrega: "2026",
    mesEntrega: "Novembro",
    status: "Em Andamento",
    categoria: "Em Andamento",
    lancamento: "2023",
    localizacao: "Salto, São Paulo",
    unidades: "408 Unidades",
    torres: "4 Torres",
    vgv: "R$ 55.000.000,00",
  },
]

interface ProjetoElementoProps {
  projeto: (typeof todosOsProjetos)[0]
  index: number
  isActive: boolean
  totalProjetos: number
}

function ProjetoElemento({ projeto, index, isActive, totalProjetos }: ProjetoElementoProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Calcular posição na timeline (0 a 100%)
  const positionPercent = (index / (totalProjetos - 1)) * 100

  // Alternar posição acima/abaixo da linha
  const isAbove = index % 2 === 0

  return (
    <>
      {/* Imagem Flutuante - SEM LIMITAÇÃO DE DIV */}
      <div
        className={`absolute transition-all duration-700 ease-out ${
          isActive ? "scale-110 opacity-100 z-20" : "scale-95 opacity-80 z-10"
        }`}
        style={{
          left: `${positionPercent}%`,
          top: isAbove ? "20%" : "60%",
          transform: "translateX(-50%)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative group cursor-pointer">
          <img
            src={projeto.imagem || "/placeholder.svg?height=200&width=280"}
            alt={`Projeto ${projeto.nome}`}
            className={`w-72 h-48 object-cover rounded-2xl shadow-2xl transition-all duration-700 ${
              isHovered ? "scale-105 brightness-110" : "scale-100 brightness-100"
            }`}
          />

          {/* Overlay sutil */}
          <div
            className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
              isHovered
                ? "bg-gradient-to-t from-black/60 via-transparent to-transparent"
                : "bg-gradient-to-t from-black/20 via-transparent to-transparent"
            }`}
          />

          {/* Conector para a linha */}
          <div
            className={`absolute ${
              isAbove ? "bottom-0 translate-y-full" : "top-0 -translate-y-full"
            } left-1/2 transform -translate-x-1/2`}
          >
            <div className={`w-0.5 ${isAbove ? "h-16" : "h-16"} bg-orange-500`}></div>
          </div>

          {/* Efeito de brilho no hover */}
          {isHovered && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse pointer-events-none"></div>
          )}

          {/* Borda de destaque para projeto ativo */}
          {isActive && (
            <div className="absolute inset-0 rounded-2xl border-4 border-orange-500 pointer-events-none"></div>
          )}
        </div>
      </div>

      {/* Badge Ancorado na Linha */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-700 ease-out z-30"
        style={{
          left: `${positionPercent}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Marcador na linha */}
        <div
          className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
            isActive ? "bg-orange-500 scale-125 shadow-orange-500/50" : "bg-orange-400 scale-100"
          }`}
        ></div>

        {/* Badge de informações */}
        <div className={`absolute ${isAbove ? "top-8" : "bottom-8"} left-1/2 transform -translate-x-1/2`}>
          <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-white/20 min-w-max">
            <div className="text-center">
              <div className="text-sm font-bold text-gray-800 mb-1">{projeto.nome}</div>
              <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                <Calendar className="w-3 h-3" />
                <span>
                  {projeto.mesEntrega} {projeto.entrega}
                </span>
              </div>
              <div
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                  projeto.status === "Entregue" ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"
                }`}
              >
                {projeto.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function LinhaTempoSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isAutoPlay || !isMounted) return

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % todosOsProjetos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, isMounted])

  const goToNext = () => {
    if (isMounted) {
      setActiveProject((prev) => (prev + 1) % todosOsProjetos.length)
    }
  }

  const goToPrevious = () => {
    if (isMounted) {
      setActiveProject((prev) => (prev === 0 ? todosOsProjetos.length - 1 : prev - 1))
    }
  }

  const goToProject = (index: number) => {
    if (isMounted) {
      setActiveProject(index)
    }
  }

  const toggleAutoPlay = () => {
    if (isMounted) {
      setIsAutoPlay(!isAutoPlay)
    }
  }

  if (!isMounted) {
    return null
  }

  const projetoAtivo = todosOsProjetos[activeProject]

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossa Trajetória</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {todosOsProjetos.length} projetos que marcaram nossa história de excelência
          </p>
        </div>

        {/* Timeline Container - Layout Livre */}
        <div className="relative h-[500px] mb-16">
          {/* Linha Principal */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-500 transform -translate-y-1/2 z-0" />

          {/* Elementos Flutuantes - SEM LIMITAÇÃO DE DIV */}
          {todosOsProjetos.map((projeto, index) => (
            <ProjetoElemento
              key={projeto.id}
              projeto={projeto}
              index={index}
              isActive={index === activeProject}
              totalProjetos={todosOsProjetos.length}
            />
          ))}
        </div>

        {/* Painel de Informações do Projeto Ativo */}
        <div className="text-center mb-12">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl px-8 py-6 border border-white/20 inline-block shadow-xl max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{projetoAtivo?.nome}</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                <div>
                  <div className="font-medium">Lançamento</div>
                  <div>{projetoAtivo?.lancamento}</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                <div>
                  <div className="font-medium">Localização</div>
                  <div>{projetoAtivo?.localizacao}</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Building className="w-4 h-4" />
                <div>
                  <div className="font-medium">Unidades</div>
                  <div>{projetoAtivo?.unidades}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-sm text-gray-600">{projetoAtivo?.torres}</span>
              <span>•</span>
              <span className="text-sm font-semibold text-gray-800">VGV: {projetoAtivo?.vgv}</span>
              <span>•</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  projetoAtivo?.status === "Entregue"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                Entregue em {projetoAtivo?.mesEntrega} {projetoAtivo?.entrega}
              </span>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              Ver Detalhes do Projeto
            </button>
          </div>
        </div>

        {/* Controles de Navegação */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={goToPrevious}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={toggleAutoPlay}
            className={`${
              isAutoPlay ? "bg-orange-500/20 border-orange-500/30" : "bg-white/10 border-white/20"
            } hover:bg-orange-500/30 backdrop-blur-sm border rounded-full p-4 transition-all duration-300 hover:scale-110`}
          >
            {isAutoPlay ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
          </button>

          <button
            onClick={goToNext}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Indicadores de Progresso */}
        <div className="flex flex-col items-center gap-4">
          {/* Barra de progresso */}
          <div className="w-80 bg-white/20 rounded-full h-1 overflow-hidden">
            <div
              className="bg-orange-500 h-full transition-all duration-700 ease-out"
              style={{ width: `${((activeProject + 1) / todosOsProjetos.length) * 100}%` }}
            />
          </div>

          {/* Navegação por pontos */}
          <div className="flex items-center gap-2">
            {todosOsProjetos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeProject
                    ? "bg-orange-500 scale-125 shadow-lg shadow-orange-500/50"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="text-white/60 text-sm">
            {activeProject + 1} de {todosOsProjetos.length} projetos
          </div>
        </div>
      </div>
    </section>
  )
}
