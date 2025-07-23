"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Phone, Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

interface EmpreendimentoHeaderProps {
  nome: string
  onShowContact: () => void
}

export default function EmpreendimentoHeader({ nome, onShowContact }: EmpreendimentoHeaderProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [headerOpacity, setHeaderOpacity] = useState(0)

  // Navegação suave para seções
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setShowMobileMenu(false)
  }

  // Detectar scroll para header e seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const opacity = Math.min(scrollY / 100, 0.95)
      setHeaderOpacity(opacity)

      const sections = ["hero", "oportunidade", "informacoes", "galeria", "plantas", "contato"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { id: "oportunidade", label: "Sobre" },
    { id: "informacoes", label: "Informações" },
    { id: "galeria", label: "Galeria" },
    { id: "plantas", label: "Plantas" },
    { id: "contato", label: "Contato" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${headerOpacity})`,
        backdropFilter: headerOpacity > 0.1 ? "blur(10px)" : "none",
        borderBottom: headerOpacity > 0.1 ? "1px solid rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/empreendimentos">
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900 p-2 group">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Voltar
            </Button>
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === item.id ? "text-[#192849]" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#192849]"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Menu mobile */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setShowMobileMenu(!showMobileMenu)} className="p-2">
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* CTAs */}
          <div className="hidden md:flex gap-3">
            <Link href="https://drive.google.com/file/d/15ULczqGRGYk14Gx_7aXuhJHywwa6Aj7F/view?usp=drive_link" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 text-gray-600 hover:bg-gray-50 group bg-transparent"
              >
                <Download className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                Material
              </Button>
            </Link>
            <Button
              size="sm"
              className="bg-[#1A2D54] hover:bg-[#152444] text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={onShowContact}
            >
              <Phone className="h-4 w-4 mr-2" />
              Contato
            </Button>
          </div>
        </div>

        {/* Menu mobile dropdown */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 mt-4 pt-4"
            >
              <nav className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 px-3 rounded-lg transition-colors ${
                      activeSection === item.id ? "bg-[#192849]/5 text-[#192849]" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex gap-2 mt-4">
                  <Link href="https://drive.google.com/file/d/15ULczqGRGYk14Gx_7aXuhJHywwa6Aj7F/view?usp=drive_link" target="_blank" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Material
                    </Button>
                  </Link>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1A2D54] hover:bg-[#152444] text-white"
                    onClick={onShowContact}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contato
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
