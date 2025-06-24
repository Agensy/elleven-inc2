"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, Home, Dumbbell, Sparkles, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Helper functions
function getEmpreendimentoUrl(slug: string | null): string {
  if (!slug) return "/empreendimentos"
  const empreendimentoUrls: Record<string, string> = {
    jade: "/jade",
    obsidian: "/obsidian",
    "icarai-parque-clube": "/icarai-parque-clube",
  }
  return empreendimentoUrls[slug] || "/empreendimentos"
}

// Static banners data
const staticBanners = [
  {
    id: 1,
    titulo: "Jade",
    slug: "jade",
    subtitulo: "Elegância Urbana",
    slogan: "Viva com Elegância",
    localizacao: "São Paulo, SP",
    status: "Lançamento",
    descricao: "Empreendimento exclusivo com design contemporâneo e acabamentos sofisticados no coração da cidade.",
    preco: "A partir de R$ 750.000",
    entrega: "Junho 2026",
    imagem: "/empreendimentos/jade/fachada.jpg",
    imagemDestaque: "/empreendimentos/jade/fachada.jpg",
    video: false,
    destaque: "LANÇAMENTO",
    destaqueInfo: "Elegância",
    diferenciais: ["Design contemporâneo", "Localização central", "Acabamentos premium"],
    identidadeVisual: {
      logo: "/empreendimentos/jade/logo.png",
      corPrimaria: "#4CAF50",
      imagemBackground: "/empreendimentos/jade/background.png",
    },
  },
  {
    id: 2,
    titulo: "Obsidian",
    slug: "obsidian",
    subtitulo: "Viva a Exclusividade",
    slogan: "Viva a Exclusividade",
    localizacao: "São Paulo, SP",
    status: "Lançamento",
    descricao: "Empreendimento exclusivo com arquitetura moderna e acabamentos de luxo.",
    preco: "A partir de R$ 850.000",
    entrega: "Dezembro 2025",
    imagem: "/empreendimentos/obsidian/fachada.png",
    imagemDestaque: "/empreendimentos/obsidian/fachada.png",
    video: false,
    destaque: "LANÇAMENTO",
    destaqueInfo: "Exclusividade",
    diferenciais: ["Arquitetura moderna", "Acabamentos premium", "Localização privilegiada"],
    identidadeVisual: {
      logo: "/empreendimentos/obsidian/logo.png",
      corPrimaria: "#D4AF37",
      imagemBackground: "/empreendimentos/obsidian/background.png",
    },
  },
  {
    id: 3,
    titulo: "Icaraí Parque Clube",
    slug: "icarai-parque-clube",
    subtitulo: "Parque Clube",
    slogan: "Viva em Harmonia",
    localizacao: "Niterói, RJ",
    status: "Lançamento",
    descricao: "Residencial com infraestrutura completa de lazer e bem-estar.",
    preco: "A partir de R$ 650.000",
    entrega: "Março 2026",
    imagem: "/empreendimentos/icarai/fachada.jpg",
    imagemDestaque: "/empreendimentos/icarai/fachada.jpg",
    video: false,
    destaque: "LANÇAMENTO",
    destaqueInfo: "Parque Clube",
    diferenciais: ["Área de lazer completa", "Piscina aquecida", "Academia"],
    identidadeVisual: {
      logo: "/empreendimentos/icarai/logo.png",
      corPrimaria: "#8BC34A",
      imagemBackground: "/empreendimentos/icarai/background.jpg",
    },
  },
]

export default function BannerSlider() {
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [direction, setDirection] = useState(0)

  // Refs para cleanup
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const mountedRef = useRef(false)

  // Garantir hidratação
  useEffect(() => {
    mountedRef.current = true
    setMounted(true)

    return () => {
      mountedRef.current = false
    }
  }, [])

  // Auto-play timer - apenas após montagem
  useEffect(() => {
    if (!mounted) return

    autoPlayTimerRef.current = setTimeout(() => {
      if (mountedRef.current) {
        setIsAutoPlaying(true)
      }
    }, 3000)

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current)
      }
    }
  }, [mounted])

  // Auto-play interval
  useEffect(() => {
    if (!mounted || !isAutoPlaying) return

    intervalRef.current = setInterval(() => {
      if (mountedRef.current) {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % staticBanners.length)
      }
    }, 6000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [mounted, isAutoPlaying])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current)
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (!mountedRef.current) return

    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % staticBanners.length)
    setIsAutoPlaying(false)

    // Clear existing timers
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current)
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [])

  const prevSlide = useCallback(() => {
    if (!mountedRef.current) return

    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + staticBanners.length) % staticBanners.length)
    setIsAutoPlaying(false)

    // Clear existing timers
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current)
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      if (!mountedRef.current) return

      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
      setIsAutoPlaying(false)

      // Clear existing timers
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current)
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    },
    [currentSlide],
  )

  // Renderização durante hidratação
  if (!mounted) {
    return (
      <section className="relative h-[75vh] md:h-[80vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-white text-xl">Carregando...</div>
        </div>
      </section>
    )
  }

  const currentBanner = staticBanners[currentSlide]

  return (
    <section className="relative h-[75vh] md:h-[80vh] overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {currentBanner.identidadeVisual?.imagemBackground ? (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${currentBanner.identidadeVisual.imagemBackground}')`,
                }}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-8 max-w-7xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 50 : -50, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Text Content */}
              <div className="lg:col-span-7 space-y-8">
                {currentBanner.identidadeVisual?.logo && (
                  <div>
                    <img
                      src={currentBanner.identidadeVisual.logo || "/placeholder.svg"}
                      alt={`Logo ${currentBanner.titulo}`}
                      className="h-12 md:h-16 w-auto filter drop-shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                      }}
                    />
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-white/60" />
                  <span
                    className="text-sm font-medium tracking-[0.1em] uppercase"
                    style={{ color: currentBanner.identidadeVisual?.corPrimaria || "#D4AF37" }}
                  >
                    {currentBanner.localizacao}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
                  {currentBanner.slogan}
                </h1>

                <p className="text-white/70 text-base leading-relaxed max-w-lg">{currentBanner.descricao}</p>

                <div className="pt-4">
                  <Link href={getEmpreendimentoUrl(currentBanner.slug)}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="group bg-transparent border-white/20 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                    >
                      Conhecer Mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image Content */}
              <div className="lg:col-span-5 relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={currentBanner.imagemDestaque || "/placeholder.svg"}
                    alt={currentBanner.titulo}
                    className="w-full h-[500px] md:h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg"
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent" />

                  <div className="absolute top-4 right-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg px-3 py-1.5 border border-white/20 shadow-xl">
                      <span className="text-white text-xs font-medium">{currentBanner.subtitulo}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 p-2">
                          <Home className="h-5 w-5 text-white" strokeWidth={1} />
                        </div>
                        <div className="text-xs text-white font-medium">STUDIOS</div>
                        <div className="text-xs text-white/80">25 a 40m²</div>
                      </div>

                      <div className="text-center">
                        <div className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 p-2">
                          <Dumbbell className="h-5 w-5 text-white" strokeWidth={1} />
                        </div>
                        <div className="text-xs text-white font-medium">SAÚDE</div>
                        <div className="text-xs text-white/80">Academia</div>
                      </div>

                      <div className="text-center">
                        <div className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 p-2">
                          <Coffee className="h-5 w-5 text-white" strokeWidth={1} />
                        </div>
                        <div className="text-xs text-white font-medium">BEM-ESTAR</div>
                        <div className="text-xs text-white/80">Sauna</div>
                      </div>

                      <div className="text-center">
                        <div className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 p-2">
                          <Sparkles className="h-5 w-5 text-white" strokeWidth={1} />
                        </div>
                        <div className="text-xs text-white font-medium">LAZER</div>
                        <div className="text-xs text-white/80">Piscina Aquecida</div>
                      </div>
                    </div>

                    <div className="flex items-end justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <MapPin
                            className="h-4 w-4"
                            style={{ color: currentBanner.identidadeVisual?.corPrimaria || "#D4AF37" }}
                          />
                          <span className="text-white text-sm font-medium">{currentBanner.localizacao}</span>
                        </div>
                      </div>

                      <div>
                        <Link href={getEmpreendimentoUrl(currentBanner.slug)}>
                          <button
                            className="text-xs font-medium transition-all duration-300 flex items-center gap-1 hover:opacity-80"
                            style={{ color: currentBanner.identidadeVisual?.corPrimaria || "#D4AF37" }}
                          >
                            Ver detalhes
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      {staticBanners.length > 1 && (
        <>
          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="h-14 w-14 md:h-12 md:w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="h-14 w-14 md:h-12 md:w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
            <div className="flex items-center gap-3">
              {staticBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="absolute top-0 left-0 right-0 z-30">
          <div className="h-0.5 bg-white/20">
            <motion.div
              key={currentSlide}
              className="h-full bg-white/60"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
