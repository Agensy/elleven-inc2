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
  onShowContact: () => void
}

export default function EmpreendimentoHero({
  nome,
  subtitulo,
  slogan,
  imagemBackground,
  logo,
  onShowContact
}: EmpreendimentoHeroProps) {
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-20"
          >
            <button
              type="button"
              className="relative z-30 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-base font-semibold rounded-md transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                const message = `Olá! Quero saber mais sobre o empreendimento ${nome}.`
                const phoneNumber = '5511915373813'
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                console.log('=== BOTÃO TENHO INTERESSE CLICADO ===')
                console.log('Nome do empreendimento:', nome)
                console.log('Mensagem:', message)
                console.log('WhatsApp URL:', whatsappUrl)
                console.log('Tentando abrir WhatsApp...')
                
                try {
                  const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
                  if (opened) {
                    console.log('WhatsApp aberto com sucesso')
                  } else {
                    console.log('Pop-up bloqueado, tentando fallback')
                    window.location.href = whatsappUrl
                  }
                } catch (error) {
                  console.error('Erro ao abrir WhatsApp:', error)
                  window.location.href = whatsappUrl
                }
             }}
           >
             Tenho Interesse
           </button>
            <button
              type="button"
              className="relative z-30 bg-white/10 border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-base font-semibold rounded-md transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                const message = `Olá! Tenho interesse em investir no empreendimento ${nome}. Gostaria de mais informações.`
                const phoneNumber = '5511915373813'
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                console.log('=== BOTÃO QUERO INVESTIR CLICADO ===')
                console.log('Nome do empreendimento:', nome)
                console.log('Mensagem:', message)
                console.log('WhatsApp URL:', whatsappUrl)
                console.log('Tentando abrir WhatsApp...')
                
                try {
                  const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
                  if (opened) {
                    console.log('WhatsApp aberto com sucesso')
                  } else {
                    console.log('Pop-up bloqueado, tentando fallback')
                    window.location.href = whatsappUrl
                  }
                } catch (error) {
                  console.error('Erro ao abrir WhatsApp:', error)
                  window.location.href = whatsappUrl
                }
             }}
           >
             Quero Investir
           </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
