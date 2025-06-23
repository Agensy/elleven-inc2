"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, Home, Dumbbell, Sparkles, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { buscarEmpreendimentosDestaque } from "@/lib/data/empreendimentos"
import { getMediaByCategory } from "@/lib/data/media-catalog"

// =============================================================================
// BANNER SLIDER - SEÇÃO 3 (APÓS HERO)
// Slider de empreendimentos com dados dinâmicos
// =============================================================================

// Helper para mapear slugs para suas páginas específicas
function getEmpreendimentoUrl(slug: string | null): string {
  if (!slug) return "/empreendimentos"

  const empreendimentoUrls: Record<string, string> = {
    jade: "/jade",
    obsidian: "/obsidian",
    icarai: "/icarai",
  }

  return empreendimentoUrls[slug] || "/empreendimentos"
}

// Helper para estilos hover por empreendimento
function getEmpreendimentoHoverStyle(slug: string | null): string {
  if (!slug) return "hover:bg-white/10 hover:border-white/40"

  const hoverStyles: Record<string, string> = {
    jade: "hover:bg-green-900/20 hover:border-green-600/60",
    obsidian: "hover:bg-orange-900/20 hover:border-orange-600/60",
    icarai: "hover:bg-blue-900/20 hover:border-blue-600/60",
  }

  return hoverStyles[slug] || "hover:bg-white/10 hover:border-white/40"
}

// Helper para estilos de texto hover por empreendimento
function getEmpreendimentoTextHoverStyle(slug: string | null): string {
  if (!slug) return "hover:opacity-80"

  const textHoverStyles: Record<string, string> = {
    jade: "hover:text-green-400",
    obsidian: "hover:text-orange-400",
    icarai: "hover:text-blue-400",
  }

  return textHoverStyles[slug] || "hover:opacity-80"
}

// Banners placeholder para quando não há empreendimentos
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

// Converter empreendimentos do sistema para formato de banner
function empreendimentoParaBanner(emp: any) {
  const backgroundImage = getMediaByCategory(emp.slug || emp.nome.toLowerCase(), "background")[0]
  const fachadaImage = getMediaByCategory(emp.slug || emp.nome.toLowerCase(), "fachada")[0]

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
    imagem: fachadaImage?.url || emp.imagemDestaque || emp.imagem,
    imagemDestaque: fachadaImage?.url || emp.imagem,
    video: !!emp.video,
    destaque: emp.status.toUpperCase(),
    destaqueInfo: emp.destaque || emp.subtitulo,
    diferenciais: emp.diferenciais?.slice(0, 3) || ["Projeto exclusivo", "Localização premium"],
    identidadeVisual: {
      ...emp.identidadeVisual,
      imagemBackground: backgroundImage?.url || emp.identidadeVisual?.imagemBackground,
    },
  }
}

// Buscar empreendimentos em destaque ou usar placeholders
const empreendimentosDestaque = buscarEmpreendimentosDestaque()
const banners =
  empreendimentosDestaque.length > 0 ? empreendimentosDestaque.map(empreendimentoParaBanner) : bannersPlaceholder

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false) // Iniciar como false
  const [direction, setDirection] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Mount effect - executar apenas uma vez
  useEffect(() => {
    setIsMounted(true)
    // Pequeno delay para garantir montagem completa
    const timer = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Auto-play effect - só executar após montagem
  useEffect(() => {
    if (!isAutoPlaying || !isMounted || banners.length <= 1) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isMounted, banners.length])

  // Navegação com useCallback
  const nextSlide = useCallback(() => {
    if (!isMounted) return
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % banners.length)
    setIsAutoPlaying(false)
  }, [isMounted, banners.length])

  const prevSlide = useCallback(() => {
    if (!isMounted) return
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
    setIsAutoPlaying(false)
  }, [isMounted, banners.length])

  const goToSlide = useCallback(
    (index: number) => {
      if (!isMounted) return
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
      setIsAutoPlaying(false)
    },
    [currentSlide, isMounted],
  )

  const currentBanner = banners[currentSlide] || banners[0]

  // Render de loading enquanto não montou
  if (!isMounted) {
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

  return (
    <section className="relative h-[75vh] md:h-[80vh] overflow-hidden bg-black">
      {/* Background com transição simplificada */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            {currentBanner.identidadeVisual?.imagemBackground || currentBanner.imagem ? (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                  style={{
                    backgroundImage: `url('${currentBanner.identidadeVisual?.imagemBackground || currentBanner.imagem}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
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

      {/* Content com transição única */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-8 max-w-7xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 50 : -50, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Texto - 7 colunas */}
              <div className="lg:col-span-7 space-y-8">
                {/* Logo */}
                {(currentBanner.identidadeVisual?.logo || currentBanner.slug === "jade") && (
                  <div>
                    <img
                      src={
                        currentBanner.slug === "jade"
                          ? getMediaByCategory("jade", "logo")[0]?.url || currentBanner.identidadeVisual?.logo
                          : currentBanner.identidadeVisual?.logo || "/placeholder.svg"
                      }
                      alt={`Logo ${currentBanner.titulo}`}
                      className="h-12 md:h-16 w-auto filter drop-shadow-lg"
                    />
                  </div>
                )}

                {/* Localização */}
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-white/60" />
                  <span
                    className="text-sm font-medium tracking-[0.1em] uppercase"
                    style={{ color: currentBanner.identidadeVisual?.corPrimaria || "#D4AF37" }}
                  >
                    {currentBanner.localizacao}
                  </span>
                </div>

                {/* HEADLINE PRINCIPAL */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
                  {currentBanner.slogan}
                </h1>

                {/* DESCRIÇÃO */}
                <p className="text-white/70 text-base leading-relaxed max-w-lg">{currentBanner.descricao}</p>

                {/* CTA */}
                <div className="pt-4">
                  <Link href={getEmpreendimentoUrl(currentBanner.slug)}>
                    <Button
                      variant="outline"
                      size="lg"
                      className={`group bg-transparent border-white/20 text-white transition-all duration-300 ${getEmpreendimentoHoverStyle(currentBanner.slug)}`}
                    >
                      Conhecer Mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagem - 5 colunas */}
              <div className="lg:col-span-5 relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  {/* Imagem principal */}
                  <img
                    src={currentBanner.imagemDestaque || "/placeholder.svg"}
                    alt={currentBanner.titulo}
                    className="w-full h-[500px] md:h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {/* Badge status */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg px-3 py-1.5 border border-white/20 shadow-xl">
                      <span className="text-white text-xs font-medium">{currentBanner.subtitulo}</span>
                    </div>
                  </div>

                  {/* Características */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Ícones de características */}
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

                    {/* Informações finais */}
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

                      {/* Ver detalhes */}
                      <div>
                        <Link href={getEmpreendimentoUrl(currentBanner.slug)}>
                          <button
                            className={`text-xs font-medium transition-all duration-300 flex items-center gap-1 ${getEmpreendimentoTextHoverStyle(currentBanner.slug)}`}
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

      {/* Controles */}
      {banners.length > 1 && (
        <NavigationControls
          currentSlide={currentSlide}
          bannersLength={banners.length}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          goToSlide={goToSlide}
        />
      )}

      {/* Barra de progresso */}
      {banners.length > 1 && <ProgressBar isAutoPlaying={isAutoPlaying} currentSlide={currentSlide} />}
    </section>
  )
}

// Componentes auxiliares
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
      {/* Setas de navegação */}
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

      {/* Dots indicator */}
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
