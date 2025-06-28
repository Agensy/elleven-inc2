"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background - YouTube carregando imediatamente */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://www.youtube.com/embed/Um-L2ckX2VA?autoplay=1&mute=1&controls=0&loop=1&playlist=Um-L2ckX2VA&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&start=0&end=0&showinfo=0&fs=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Overlay for better text readability - now with orange gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-blue-900/60 to-blue-950/80"></div>
      </div>

      {/* Main Content - Centralized */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white max-w-4xl mx-auto transition-all duration-1000 opacity-100 translate-y-0">
          {/* Badge - Ultra Discrete */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <span className="text-xs font-normal text-white/70">+15 anos de excelência</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg uppercase">
              <span className="block">Excelência do pequeno</span>
              <span className="block">ao grande detalhe.</span>
            </h1>
          </div>

          {/* CTA Buttons - Enhanced with Light Effect */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-base font-semibold group transition-all duration-300 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
            >
              <span className="relative z-10 flex items-center">
                Ver Empreendimentos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-white/10 to-orange-400/30 blur-md"></div>
              </div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 text-white hover:text-white px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
            >
              Invista
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80">
        <span className="text-xs uppercase tracking-widest mb-4 font-medium">Scroll para explorar</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Elegant Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 via-white/40 via-orange-400/60 to-transparent"></div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-3000"></div>
      </div>
    </section>
  )
}
