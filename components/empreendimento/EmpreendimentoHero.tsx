"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface EmpreendimentoHeroProps {
  nome: string
  subtitulo: string
  slogan: string
  imagemBackground: string
  logo?: string
  heroType?: "video" | "image" | "banner"
  status: "Breve lançamento" | "Lançamento" | "Em obras" | "Entregues"
  onShowContact: () => void
}

export default function EmpreendimentoHero({
  nome,
  subtitulo,
  slogan,
  imagemBackground,
  logo,
  heroType,
  status,
  onShowContact,
}: EmpreendimentoHeroProps) {
  // Define 'image' como o tipo padrão se heroType não for fornecido
  const finalHeroType = heroType || "image"

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-gray-50">
      <div className="absolute inset-0">
        <Image
          src={imagemBackground || "/placeholder.svg"}
          alt={nome}
          fill
          className="object-cover"
          priority
        />
        {/* Renderiza o gradiente escuro apenas se não for do tipo 'banner' */}
        {finalHeroType !== "banner" && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        )}
      </div>

      {/* Renderiza o conteúdo do hero apenas se não for do tipo 'banner' */}
      {finalHeroType !== "banner" && (
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <div className="max-w-4xl text-white text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                  <span className="text-xs font-normal text-white/70">{subtitulo}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {logo && (
                <div className="mb-6">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Logo ${nome}`}
                    width={140}
                    height={70}
                    className="filter brightness-0 invert mx-auto"
                    priority
                  />
                </div>
              )}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg uppercase mb-6 tracking-wide">
                {nome}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8 opacity-90 leading-relaxed">{slogan}</p>
            </motion.div>

            {/* Renderiza os botões apenas se não for um banner e o empreendimento não foi entregue */}
            {status !== "Entregues" && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-base font-semibold group transition-all duration-300 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
                  onClick={onShowContact}
                >
                  <span className="relative z-10 flex items-center">
                    Tenho Interesse
                    <ArrowLeft className="ml-2 h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
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
                  onClick={onShowContact}
                >
                  Quero Investir
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
