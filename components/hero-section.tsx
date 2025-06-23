"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Mount effect - executar apenas uma vez
  useEffect(() => {
    setIsMounted(true)

    // Delay para garantir que o componente está totalmente montado
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Scroll effect - só executar após montagem
  useEffect(() => {
    if (!isMounted) return

    const handleScroll = () => {
      if (isMounted) {
        setScrollY(window.scrollY)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMounted])

  // Early return with static content if not mounted
  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="/background-elleven.png"
            alt="Vista panorâmica da cidade com apartamento moderno"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-blue-900/40 to-blue-950/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <span className="text-xs font-normal text-white/70">+15 anos de excelência</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg mb-12">
              <span className="block">Excelência do pequeno</span>
              <span className="block">ao grande detalhe.</span>
            </h1>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0">
        {/* Main Background Image with Parallax */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <img
            src="/background-elleven.png"
            alt="Vista panorâmica da cidade com apartamento moderno"
            className="w-full h-[120%] object-cover scale-105 blur-sm"
          />

          {/* Base Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-blue-900/40 to-blue-950/60"></div>
        </div>

        {/* Warm Light from Top Right - Parallax Layer 1 */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-radial from-orange-400/20 via-orange-500/12 via-amber-400/8 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * -0.3}px, ${scrollY * 0.2}px)`,
          }}
        ></div>

        {/* Secondary Warm Glow - Parallax Layer 2 */}
        <div
          className="absolute top-10 right-10 w-80 h-80 bg-gradient-radial from-yellow-300/15 via-orange-300/10 to-transparent rounded-full blur-2xl"
          style={{
            transform: `translate(${scrollY * -0.2}px, ${scrollY * 0.15}px)`,
          }}
        ></div>

        {/* Cool Light from Bottom Left - Parallax Layer 3 */}
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-blue-400/15 via-cyan-500/8 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.25}px, ${scrollY * -0.1}px)`,
          }}
        ></div>

        {/* Atmospheric Depth Layer - Slower Parallax */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-blue-900/20"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        ></div>

        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Main Content - Centralized with Parallax */}
      <div
        className="relative z-10 container mx-auto px-4"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      >
        <div
          className={`text-center text-white max-w-4xl mx-auto transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge - Ultra Discrete */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <span className="text-xs font-normal text-white/70">+15 anos de excelência</span>
            </div>
          </div>

          {/* Main Title - Fixo, sem alternância */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg">
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

      {/* Scroll Indicator - Enhanced with Parallax */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80"
        style={{
          transform: `translate(-50%, ${scrollY * -0.2}px)`,
        }}
      >
        <span className="text-xs uppercase tracking-widest mb-4 font-medium">Scroll para explorar</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Elegant Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 via-white/40 via-orange-400/60 to-transparent"></div>

      {/* Floating Particles Effect with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{
            transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.05}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-300/40 rounded-full animate-pulse delay-1000"
          style={{
            transform: `translate(${scrollY * 0.15}px, ${scrollY * -0.08}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse delay-2000"
          style={{
            transform: `translate(${scrollY * -0.12}px, ${scrollY * 0.1}px)`,
          }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-3000"
          style={{
            transform: `translate(${scrollY * 0.08}px, ${scrollY * -0.06}px)`,
          }}
        ></div>
      </div>
    </section>
  )
}
