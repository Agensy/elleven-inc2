"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight, MapPin, Calendar, Home, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmpreendimentoHeroProps {
  empreendimento: any
}

export default function EmpreendimentoHero({ empreendimento }: EmpreendimentoHeroProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${empreendimento.imagens?.hero || "/empreendimentos/jade/background-jade.jpeg"}')`,
        }}
      />

      {/* Overlay for better text readability - same as main hero */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-blue-900/60 to-blue-950/80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Following main hero pattern */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-white max-w-4xl transition-all duration-1000 opacity-100 translate-y-0"
          >
            {/* Badge - Ultra Discrete like main hero */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <span className="text-xs font-normal text-white/70">{empreendimento.destaque}</span>
              </div>
            </div>

            {/* Main Title - Same typography as main hero */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg uppercase">
                <span className="block">{empreendimento.nome}</span>
                <span className="block text-3xl lg:text-4xl xl:text-5xl font-light mt-2">
                  {empreendimento.subtitulo}
                </span>
              </h1>
            </div>

            {/* Location and delivery info */}
            <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span>{empreendimento.localizacao}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-400" />
                <span>Entrega: {empreendimento.entrega}</span>
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mb-8">{empreendimento.descricao}</p>

            <div className="text-3xl font-bold text-orange-400 drop-shadow-lg mb-12">{empreendimento.preco}</div>

            {/* CTA Buttons - Enhanced with Light Effect like main hero */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-base font-semibold group transition-all duration-300 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
              >
                <span className="relative z-10 flex items-center">
                  Agendar Visita
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-white/10 to-orange-400/30 blur-md"></div>
                </div>
              </Button>

              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 text-white hover:text-white px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Ver Vídeo
              </Button>
            </div>
          </motion.div>

          {/* Info Card - Maintaining empreendimento specific functionality */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Informações Gerais</h3>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Home className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{empreendimento.especificacoes.unidades}</div>
                <div className="text-sm text-white/60">Unidades</div>
              </div>

              <div className="text-center">
                <div className="h-8 w-8 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-400 font-bold text-sm">{empreendimento.especificacoes.andares}</span>
                </div>
                <div className="text-2xl font-bold text-white">{empreendimento.especificacoes.andares}</div>
                <div className="text-sm text-white/60">Andares</div>
              </div>

              <div className="text-center">
                <Car className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{empreendimento.especificacoes.vagas}</div>
                <div className="text-sm text-white/60">Vagas</div>
              </div>

              <div className="text-center">
                <div className="h-8 w-8 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-400 font-bold text-xs">m²</span>
                </div>
                <div className="text-2xl font-bold text-white">{empreendimento.especificacoes.area}</div>
                <div className="text-sm text-white/60">Área</div>
              </div>
            </div>

            <Button className="w-full mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold transition-all duration-300 hover:scale-105">
              Baixar Material
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Same as main hero */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80">
        <span className="text-xs uppercase tracking-widest mb-4 font-medium">Scroll para explorar</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Elegant Top Border - Same as main hero */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 via-white/40 via-orange-400/60 to-transparent"></div>

      {/* Floating Particles Effect - Same as main hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-3000"></div>
      </div>
    </section>
  )
}
