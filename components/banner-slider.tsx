"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, Home, Dumbbell, Sparkles, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { buscarEmpreendimentosDestaque } from "@/lib/data/empreendimentos"
import { getImagesBySection } from "@/lib/data/images-catalog"
import { cn } from "@/lib/utils"

// Helper functions
function getEmpreendimentoUrl(slug: string | null): string {
  if (!slug) return "/empreendimentos"
  const empreendimentoUrls: Record<string, string> = {
    jade: "/jade",
    obsidian: "/obsidian",
    icarai: "/icarai-parque-clube",
    botanique: "/botanique",
    "grand-club-cotia": "/grand-club-cotia",
    "le-mont": "/le-mont",
    "le-mont-2": "/le-mont-2",
  }
  return empreendimentoUrls[slug] || "/empreendimentos"
}

function getEmpreendimentoHoverStyle(slug: string | null): string {
  if (!slug) return "hover:bg-white/10 hover:border-white/40"
  const hoverStyles: Record<string, string> = {
    jade: "hover:bg-green-900/20 hover:border-green-600/60",
    obsidian: "hover:bg-orange-900/20 hover:border-orange-600/60",
    icarai: "hover:bg-green-900/20 hover:border-green-600/60",
    botanique: "hover:bg-blue-900/20 hover:border-blue-600/60",
    "grand-club-cotia": "hover:bg-purple-900/20 hover:border-purple-600/60",
    "le-mont": "hover:bg-red-900/20 hover:border-red-600/60",
    "le-mont-2": "hover:bg-yellow-900/20 hover:border-yellow-600/60",
  }
  return hoverStyles[slug] || "hover:bg-white/10 hover:border-white/40"
}

function getEmpreendimentoTextHoverStyle(slug: string | null): string {
  if (!slug) return "hover:opacity-80"
  const textHoverStyles: Record<string, string> = {
    jade: "hover:text-green-400",
    obsidian: "hover:text-orange-400",
    icarai: "hover:text-green-400",
    botanique: "hover:text-blue-400",
    "grand-club-cotia": "hover:text-purple-400",
    "le-mont": "hover:text-red-400",
    "le-mont-2": "hover:text-yellow-400",
  }
  return textHoverStyles[slug] || "hover:opacity-80"
}

// Nova função para obter mídia do catálogo centralizado, garantindo status 'active'
function getMediaFromCatalog(sectionSlug: string, category: string): string | null {
  try {
    const sectionImages = getImagesBySection(sectionSlug.toUpperCase())
    const image = sectionImages.find((img) => img.category === category && img.status === "active")
    return image?.url || null
  } catch (error) {
    console.error("Erro ao buscar mídia do catálogo:", error)
    return null
  }
}

// Função para obter logos dos empreendimentos usando o catálogo
function getEmpreendimentoLogo(slug: string | null): string | null {
  if (!slug) return null

  try {
    // Mapear slug para seção do catálogo
    let sectionKey = slug
    if (sectionKey === "icarai-parque-clube") {
      sectionKey = "icarai"
    }

    return getMediaFromCatalog(sectionKey, "logo")
  } catch (error) {
    console.error("Erro ao buscar logo do empreendimento:", error)
    return null
  }
}

// Static data para placeholder inicial
const bannersPlaceholder = [
  {
    id: 1,
    titulo: "Em Breve",
    slug: null,
    subtitulo: "Novos Lançamentos",
    slogan: "Excelência em Construção",
    localizacao: "São Paulo, SP",
    status: "Aguarde",
    descricao: "Empreendimentos exclusivos em desenvolvimento. Cadastre-se para ser o primeiro a saber.",
    preco: "Valores em breve",
    entrega: "Em breve",
    imagem: "/placeholder.svg",
    imagemDestaque: "/placeholder.svg",
    video: false,
    destaque: "EM BREVE",
    destaqueInfo: "Novidades",
    diferenciais: ["Projetos exclusivos", "Localização privilegiada"],
    identidadeVisual: {
      logo: null,
      corPrimaria: "#D4AF37",
      imagemBackground: "/placeholder.svg",
    },
  },
]

// Refatorada para buscar imagens do catálogo de forma explícita
function empreendimentoParaBanner(emp: any) {
  try {
    const sectionSlug = emp.slug
    let sectionKey = sectionSlug
    if (sectionKey === "icarai-parque-clube") {
      sectionKey = "icarai"
    }
    // Para outros slugs como "obsidian", "jade", etc., eles já correspondem ao prefixo da seção.
    const sectionNameInCatalog = sectionKey.toUpperCase()

    // Busca explícita das imagens no catálogo
    const logoUrl = getMediaFromCatalog(sectionNameInCatalog, "logo")
    const backgroundUrl = getMediaFromCatalog(sectionNameInCatalog, "background")
    const fachadaUrl = getMediaFromCatalog(sectionNameInCatalog, "fachada")

    return {
      id: emp.id,
      titulo: emp.nome,
      slug: emp.slug,
      subtitulo: emp.subtitulo || "Novo Empreendimento",
      slogan: emp.slogan || "Viva bem",
      localizacao: emp.localizacao,
      status: emp.status,
      descricao: emp.descricao,
      preco: emp.precoFormatado,
      entrega: emp.entrega,
      imagem: fachadaUrl || "/placeholder.svg",
      imagemDestaque: fachadaUrl || "/placeholder.svg",
      video: !!emp.video,
      destaque: emp.status.toUpperCase(),
      destaqueInfo: emp.destaque || emp.subtitulo,
      diferenciais: emp.diferenciais?.slice(0, 3) || ["Projeto exclusivo", "Localização premium"],
      identidadeVisual: {
        logo: logoUrl,
        corPrimaria: emp.identidadeVisual?.corPrimaria || "#D4AF37",
        imagemBackground: backgroundUrl || "/placeholder.svg",
      },
    }
  } catch (error) {
    console.error("Erro ao processar empreendimento para banner:", error)
    return bannersPlaceholder[0]
  }
}

export default function BannerSlider() {
  // Refs para controle de montagem
  const isMountedRef = useRef(false)
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Estados
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [direction, setDirection] = useState(0)
  const [bannersData, setBannersData] = useState<any[]>(bannersPlaceholder)
  const [isInitialized, setIsInitialized] = useState(false)

  // Função segura para atualizar estado
  const safeSetState = useCallback((updateFn: () => void) => {
    if (isMountedRef.current) {
      updateFn()
    }
  }, [])

  // Cleanup function
  const cleanup = useCallback(() => {
    // Limpar todos os timeouts
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout))
    timeoutRefs.current = []

    // Limpar interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  // Mount effect
  useEffect(() => {
    isMountedRef.current = true

    // Carregar dados de forma síncrona para evitar problemas
    const loadBannerData = () => {
      try {
        const destaque = buscarEmpreendimentosDestaque()
        const mappedBanners = destaque.length > 0 ? destaque.map(empreendimentoParaBanner) : bannersPlaceholder

        safeSetState(() => {
          setBannersData(mappedBanners)
          setIsInitialized(true)
        })
      } catch (error) {
        console.error("Erro ao carregar dados dos banners:", error)
        safeSetState(() => {
          setBannersData(bannersPlaceholder)
          setIsInitialized(true)
        })
      }
    }

    loadBannerData()

    // Cleanup na desmontagem
    return () => {
      isMountedRef.current = false
      cleanup()
    }
  }, [safeSetState, cleanup])

  // Auto-play initialization
  useEffect(() => {
    if (!isInitialized || bannersData.length <= 1) return

    const startTimer = setTimeout(() => {
      safeSetState(() => {
        setIsAutoPlaying(true)
      })
    }, 3000)

    timeoutRefs.current.push(startTimer)

    return () => {
      clearTimeout(startTimer)
    }
  }, [isInitialized, bannersData.length, safeSetState])

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying || !isInitialized || bannersData.length <= 1) return

    intervalRef.current = setInterval(() => {
      safeSetState(() => {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % bannersData.length)
      })
    }, 6000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isAutoPlaying, isInitialized, bannersData.length, safeSetState])

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (!isInitialized || bannersData.length === 0) return
    safeSetState(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % bannersData.length)
      setIsAutoPlaying(false)
    })
  }, [isInitialized, bannersData.length, safeSetState])

  const prevSlide = useCallback(() => {
    if (!isInitialized || bannersData.length === 0) return
    safeSetState(() => {
      setDirection(-1)
      setCurrentSlide((prev) => (prev - 1 + bannersData.length) % bannersData.length)
      setIsAutoPlaying(false)
    })
  }, [isInitialized, bannersData.length, safeSetState])

  const goToSlide = useCallback(
    (index: number) => {
      if (!isInitialized || bannersData.length === 0) return
      safeSetState(() => {
        setDirection(index > currentSlide ? 1 : -1)
        setCurrentSlide(index)
        setIsAutoPlaying(false)
      })
    },
    [currentSlide, isInitialized, bannersData.length, safeSetState],
  )

  // Loading state
  if (!isInitialized) {
    return (
      <section className="relative h-[75vh] md:h-[80vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
          </div>
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-white/60" />
                  <span className="text-sm font-medium tracking-[0.1em] uppercase text-[#D4AF37]">São Paulo, SP</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
                  Carregando...
                </h1>
                <p className="text-white/70 text-base leading-relaxed max-w-lg">Carregando conteúdo...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const currentBanner = bannersData[currentSlide]
  const isIcarai = currentBanner?.slug === "icarai-parque-clube"
  const isJade = currentBanner?.slug === "jade"

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
            {currentBanner?.identidadeVisual?.imagemBackground || currentBanner?.imagem ? (
              <>
                <div
                  className={cn(
                    "absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform",
                    isIcarai && "filter blur-sm",
                  )}
                  style={{
                    backgroundImage: `url('${currentBanner?.identidadeVisual?.imagemBackground || currentBanner?.imagem}')`,
                  }}
                />
                {isIcarai && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-teal-500/60 to-emerald-400/50" />
                )}
                {isJade && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </>
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
                {/* Logo para todos os empreendimentos */}
                {(() => {
                  const isIcarai = currentBanner?.slug === "icarai-parque-clube"
                  const logoUrl = getEmpreendimentoLogo(currentBanner?.slug)
                  return (
                    logoUrl && (
                      <div>
                        <img
                          src={logoUrl || "/placeholder.svg"}
                          alt={`Logo ${currentBanner?.titulo}`}
                          className={cn("w-auto filter drop-shadow-lg", isIcarai ? "h-16 md:h-20" : "h-12 md:h-16")}
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      </div>
                    )
                  )
                })()}

                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-white/60" />
                  <span
                    className="text-sm font-medium tracking-[0.1em] uppercase"
                    style={{ color: currentBanner?.identidadeVisual?.corPrimaria || "#D4AF37" }}
                  >
                    {currentBanner?.localizacao}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
                  {currentBanner?.slogan}
                </h1>

                <p className="text-white/70 text-base leading-relaxed max-w-lg">{currentBanner?.descricao}</p>

                <div className="pt-4">
                  <Link href={getEmpreendimentoUrl(currentBanner?.slug)}>
                    <Button
                      variant="outline"
                      size="lg"
                      className={`group bg-transparent border-white/20 text-white transition-all duration-300 ${getEmpreendimentoHoverStyle(currentBanner?.slug)}`}
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
                    src={currentBanner?.imagemDestaque || "/placeholder.svg"}
                    alt={currentBanner?.titulo}
                    className="w-full h-[500px] md:h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  <div className="absolute top-4 right-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg px-3 py-1.5 border border-white/20 shadow-xl">
                      <span className="text-white text-xs font-medium">{currentBanner?.subtitulo}</span>
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
                            style={{ color: currentBanner?.identidadeVisual?.corPrimaria || "#D4AF37" }}
                          />
                          <span className="text-white text-sm font-medium">{currentBanner?.localizacao}</span>
                        </div>
                      </div>

                      <div>
                        <Link href={getEmpreendimentoUrl(currentBanner?.slug)}>
                          <button
                            className={`text-xs font-medium transition-all duration-300 flex items-center gap-1 ${getEmpreendimentoTextHoverStyle(currentBanner?.slug)}`}
                            style={{ color: currentBanner?.identidadeVisual?.corPrimaria || "#D4AF37" }}
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
      {bannersData.length > 1 && (
        <NavigationControls
          currentSlide={currentSlide}
          bannersLength={bannersData.length}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          goToSlide={goToSlide}
        />
      )}

      {/* Progress Bar */}
      {bannersData.length > 1 && <ProgressBar isAutoPlaying={isAutoPlaying} currentSlide={currentSlide} />}
    </section>
  )
}

// Navigation Controls Component
function NavigationControls({
  currentSlide,
  bannersLength,
  nextSlide,
  prevSlide,
  goToSlide,
}: {
  currentSlide: number
  bannersLength: number
  nextSlide: () => void
  prevSlide: () => void
  goToSlide: (index: number) => void
}) {
  return (
    <>
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="h-14 w-14 md:h-12 md:w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="h-14 w-14 md:h-12 md:w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-3">
          {Array.from({ length: bannersLength }).map((_, index) => (
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
  )
}

// Progress Bar Component
function ProgressBar({ isAutoPlaying, currentSlide }: { isAutoPlaying: boolean; currentSlide: number }) {
  if (!isAutoPlaying) return null

  return (
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
  )
}
