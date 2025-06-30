"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// =============================================================================
// DADOS DOS PARCEIROS
// =============================================================================

interface Parceiro {
  id: number
  nome: string
  logo: string
  categoria: string
  descricao: string
  website?: string
}

const parceiros: Parceiro[] = [
  {
    id: 1,
    nome: "Banco do Brasil",
    logo: "/parceiros/bb-white.png",
    categoria: "financeira",
    descricao: "Soluções de financiamento imobiliário com as melhores taxas do mercado.",
  },
  {
    id: 2,
    nome: "Construz",
    logo: "/parceiros/construz-white.png",
    categoria: "construtora",
    descricao: "Parceria estratégica em projetos de construção e desenvolvimento urbano.",
  },
  {
    id: 3,
    nome: "Safra",
    logo: "/parceiros/safra-white.png",
    categoria: "financeira",
    descricao: "Banco premium com soluções financeiras exclusivas para investidores.",
  },
  {
    id: 4,
    nome: "Revolução",
    logo: "/parceiros/revolucao-white.png",
    categoria: "imobiliaria",
    descricao: "Inovação em vendas e marketing imobiliário com foco em resultados.",
  },
  {
    id: 5,
    nome: "Stuchi Imóveis",
    logo: "/parceiros/stuchi-imoveis-white.png",
    categoria: "imobiliaria",
    descricao: "Tradição e excelência no mercado imobiliário há mais de 20 anos.",
  },
  {
    id: 7,
    nome: "Stuchi",
    logo: "/parceiros/stuchi-white.png",
    categoria: "imobiliaria",
    descricao: "Grupo imobiliário com expertise em desenvolvimento e comercialização.",
  },
  {
    id: 8,
    nome: "Smart Solution",
    logo: "/parceiros/smart-solution-white.png",
    categoria: "tecnologia",
    descricao: "Soluções tecnológicas inteligentes para o setor imobiliário.",
  },
  {
    id: 9,
    nome: "Vinx",
    logo: "/parceiros/vinx-white.png",
    categoria: "imobiliaria",
    descricao: "Plataforma digital inovadora para transações imobiliárias.",
  },
  {
    id: 10,
    nome: "Kabanna",
    logo: "/parceiros/kabanna-white.png",
    categoria: "investimento",
    descricao:
      "Investimentos imobiliários nos EUA com modelo de participação nos lucros para investidores brasileiros.",
  },
  {
    id: 11,
    nome: "Itaú",
    logo: "/parceiros/itau-white.png",
    categoria: "financeira",
    descricao: "Tradição e excelência no mercado financeiro há mais de 90 anos.",
  },
  {
    id: 12,
    nome: "Caixa",
    logo: "/parceiros/caixa-white.png",
    categoria: "financeira",
    descricao: "Banco público com soluções habitacionais e de crédito imobiliário.",
  },
  {
    id: 13,
    nome: "Bradesco",
    logo: "/parceiros/bradesco-white.png",
    categoria: "financeira",
    descricao: "Um dos maiores bancos do Brasil com ampla gama de serviços financeiros.",
  },
  {
    id: 14,
    nome: "Gemini",
    logo: "/parceiros/gemini-white.png",
    categoria: "construtora",
    descricao: "Construtora especializada em empreendimentos residenciais de alto padrão.",
  },
  {
    id: 15,
    nome: "Santander",
    logo: "/parceiros/santander-white.png",
    categoria: "financeira",
    descricao: "Banco internacional com soluções financeiras inovadoras.",
  },
  {
    id: 16,
    nome: "Visconde",
    logo: "/parceiros/visconde-white.png",
    categoria: "imobiliaria",
    descricao: "Empresa especializada em desenvolvimento e comercialização imobiliária.",
  },
  {
    id: 17,
    nome: "Zatz",
    logo: "/parceiros/zatz-white.png",
    categoria: "juridica",
    descricao: "Escritório de advocacia especializado em direito imobiliário e empresarial.",
  },
]

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================

export default function ParceirosGrid() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(4)

  // Usar todos os parceiros sempre (sem filtros)
  const parceirosVisiveis = parceiros

  // Total de slides baseado na quantidade por slide
  const totalSlides = Math.ceil(parceirosVisiveis.length / slidesToShow)

  // Responsividade
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth
      if (width < 640) {
        setSlidesToShow(1) // Mobile: 1 por slide
      } else if (width < 768) {
        setSlidesToShow(2) // Small tablet: 2 por slide
      } else if (width < 1024) {
        setSlidesToShow(3) // Tablet: 3 por slide
      } else {
        setSlidesToShow(4) // Desktop: 4 por slide
      }
    }

    updateSlidesToShow()
    window.addEventListener("resize", updateSlidesToShow)
    return () => window.removeEventListener("resize", updateSlidesToShow)
  }, [])

  // Reset slide quando slidesToShow muda
  useEffect(() => {
    setCurrentSlide(0)
  }, [slidesToShow])

  // Navegação do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Auto-play
  useEffect(() => {
    if (totalSlides <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // 5 segundos por slide

    return () => clearInterval(interval)
  }, [totalSlides])

  // Função para obter parceiros do slide atual
  const getParceirosDoSlide = (slideIndex: number) => {
    const startIndex = slideIndex * slidesToShow
    const endIndex = startIndex + slidesToShow
    return parceirosVisiveis.slice(startIndex, endIndex)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <section className="section-padding bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-4" style={{ color: "#1A2D54" }}>
            Nossos Parceiros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Parcerias estratégicas que fortalecem nosso compromisso com a excelência
          </p>
        </motion.div>

        {/* Carrossel de Parceiros */}
        <div className="relative">
          {/* Arrow Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-white hover:border-orange-500/50 shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-white hover:border-orange-500/50 shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Slides Container */}
          <div className="relative h-80 overflow-hidden rounded-xl">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  slideIndex === currentSlide
                    ? "opacity-100 translate-x-0"
                    : slideIndex < currentSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <div className="h-full flex items-center justify-center p-4">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {getParceirosDoSlide(slideIndex).map((parceiro, index) => (
                      <div key={parceiro.id} className="flex justify-center">
                        <div className="w-full max-w-xs">
                          <ParceiroCard parceiro={parceiro} index={index} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-orange-500" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Indicador de slide atual */}
          {totalSlides > 1 && (
            <div className="text-center mt-4">
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1} de {totalSlides}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// COMPONENTE DO CARD
// =============================================================================

function ParceiroCard({
  parceiro,
  index,
}: {
  parceiro: Parceiro
  index: number
}) {
  return (
    <Link href="/parceiros#kabanna" scroll={true}>
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        className="group relative rounded-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 border border-slate-700 hover:border-orange-400"
      >
        {/* Logo centralizada */}
        <div className="flex items-center justify-center h-16 mb-4">
          {parceiro.logo ? (
            <img
              src={parceiro.logo || "/placeholder.svg"}
              alt={`Logo ${parceiro.nome}`}
              className="max-h-12 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-12 w-full bg-slate-700 rounded-lg">
              <span className="text-white font-semibold text-sm">Logo</span>
            </div>
          )}
        </div>

        {/* Nome do parceiro para identificação */}

        {/* Descrição centralizada */}
        <p className="text-xs text-slate-300 text-center leading-relaxed group-hover:text-slate-100 transition-colors duration-300 line-clamp-3">
          {parceiro.descricao}
        </p>

        {/* Badge da categoria */}

        {/* Linha decorativa inferior */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-xl" />
      </motion.div>
    </Link>
  )
}
