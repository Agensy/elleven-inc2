"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getEllevenLogo } from "@/lib/brand/elleven"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEmpreendimentosOpen, setIsEmpreendimentosOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/empreendimentos", label: "Empreendimentos" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/invista", label: "Invista" },
    { href: "/#parceiros", label: "Parceiros" },
    { href: "/#contato", label: "Contato" },
  ]

  const empreendimentosStatus = [
    { href: "/empreendimentos?status=breve-lancamento", label: "Breve Lançamento" },
    { href: "/empreendimentos?status=lancamento", label: "Lançamento" },
    { href: "/empreendimentos?status=em-obras", label: "Em Obras" },
    { href: "/empreendimentos?status=entregues", label: "Entregues" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src={isScrolled ? getEllevenLogo("header-dark") : getEllevenLogo("header-light")}
              alt="Elleven Engenharia"
              className="h-11 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation - Lighter Font Weight */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Empreendimentos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsEmpreendimentosOpen(true)}
              onMouseLeave={(e) => {
                // Verificar se o mouse está saindo para fora de toda a área do dropdown
                const rect = e.currentTarget.getBoundingClientRect()
                const { clientX, clientY } = e

                // Se o mouse está se movendo para baixo (para o dropdown), não fechar
                if (clientY > rect.bottom && clientX >= rect.left && clientX <= rect.right) {
                  return
                }

                // Delay para permitir movimento para o dropdown
                setTimeout(() => {
                  setIsEmpreendimentosOpen(false)
                }, 150)
              }}
            >
              <Link
                href="/empreendimentos"
                className={`relative transition-colors duration-200 group text-lg font-normal ${
                  isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                Empreendimentos
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-200 group-hover:w-full"></span>
              </Link>

              {/* Dropdown Menu */}
              {isEmpreendimentosOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsEmpreendimentosOpen(true)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setIsEmpreendimentosOpen(false)
                    }, 100)
                  }}
                >
                  {empreendimentosStatus.map((status) => (
                    <Link
                      key={status.href}
                      href={status.href}
                      className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors duration-200 text-base"
                    >
                      {status.label}
                    </Link>
                  ))}
                </motion.div>
              )}

              {/* Área invisível de conexão */}
              {isEmpreendimentosOpen && <div className="absolute top-full left-0 w-56 h-2 bg-transparent" />}
            </div>
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors duration-200 group text-lg font-normal ${
                  isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              className={`text-base px-6 py-3 shadow-none transition-all duration-300 ${
                isScrolled
                  ? "text-white"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white"
              }`}
              style={isScrolled ? { backgroundColor: "#1A2D54" } : {}}
              onMouseEnter={(e) => {
                if (isScrolled) e.currentTarget.style.backgroundColor = "#152444"
              }}
              onMouseLeave={(e) => {
                if (isScrolled) e.currentTarget.style.backgroundColor = "#1A2D54"
              }}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors duration-200 ${
              isScrolled
                ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu - Lighter Font Weight */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border border-border/50 mt-4 rounded-lg"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 py-3 px-2 rounded-md hover:bg-muted text-lg font-normal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 mt-4 border-t border-border/50">
                <Button
                  size="sm"
                  className="text-white text-base px-6 py-3 flex-1 shadow-none transition-all duration-200"
                  style={{ backgroundColor: "#1A2D54" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#152444")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A2D54")}
                >
                  Fale Conosco
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
