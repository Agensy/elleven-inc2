"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  MapPin,
  Phone,
  Download,
  CheckCircle,
  Calendar,
  Building,
  Home,
  MessageCircle,
  Menu,
  X,
  Shield,
  Waves,
  Eye,
  TrendingUp,
  Users,
  Wifi,
  Dumbbell,
  Camera,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import Footer from "@/components/footer"
import { JadeEmpreendimentoData } from "@/lib/types/jade-template"

// Mapeamento de ícones para strings
const iconMap = {
  MapPin,
  Waves,
  Shield,
  Building,
  TrendingUp,
  Eye,
  Dumbbell,
  Users,
  Wifi,
  Camera,
  Lock,
  Home,
  Calendar,
} as const

interface JadeTemplatePageProps {
  data: JadeEmpreendimentoData
}

export default function JadeTemplatePage({ data }: JadeTemplatePageProps) {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null)
  const [showContact, setShowContact] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [headerOpacity, setHeaderOpacity] = useState(0)
  const [activeInfo, setActiveInfo] = useState("localizacao")
  const [showAllImages, setShowAllImages] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const navigationItems = [
    { id: "oportunidade", label: "Sobre" },
    { id: "informacoes", label: "Informações" },
    { id: "galeria", label: "Galeria" },
    { id: "plantas", label: "Plantas" },
    { id: "contato", label: "Contato" },
  ]

  // Função para obter os detalhes da informação ativa
  const getActiveInfoDetails = () => {
    return data.informacoes.find((info) => info.id === activeInfo)?.detalhes
  }

  // Função para renderizar ícone de forma segura
  const renderIcon = (iconName: string, className: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    if (!IconComponent) return null
    return <IconComponent className={className} />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header com navegação interna */}
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
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 text-gray-600 hover:bg-gray-50 group bg-transparent"
              >
                <Download className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                Material
              </Button>
              <Button
                size="sm"
                className="bg-[#1A2D54] hover:bg-[#152444] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setShowContact(true)}
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
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Material
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-[#1A2D54] hover:bg-[#152444] text-white"
                      onClick={() => setShowContact(true)}
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

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <Image
            src={data.imagens.background || "/placeholder.svg"}
            alt={data.nome}
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
                  <span className="text-xs font-normal text-white/70">{data.subtitulo}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {data.imagens.logo && (
                <div className="mb-6">
                  <Image
                    src={data.imagens.logo || "/placeholder.svg"}
                    alt={`Logo ${data.nome}`}
                    width={140}
                    height={70}
                    className="filter brightness-0 invert mx-auto"
                    priority
                  />
                </div>
              )}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg uppercase mb-6 tracking-wide">
                {data.nome}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8 opacity-90 leading-relaxed">{data.slogan}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-base font-semibold group transition-all duration-300 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
                onClick={() => setShowContact(true)}
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
                onClick={() => setShowContact(true)}
              >
                Quero Investir
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - Conheça o empreendimento */}
      <section id="oportunidade" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Conteúdo de Texto */}
            <motion.div {...fadeIn} className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mb-6 leading-tight">CONHEÇA O {data.nome.toUpperCase()}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{data.descricao}</p>
              </div>

              {/* Grid de Informações */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Características */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Características</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Tipo</p>
                      <p className="text-gray-900">
                        {data.tipo} ({data.area})
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Lazer</p>
                      <p className="text-gray-900">Infraestrutura Completa</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Tecnologia</p>
                      <p className="text-gray-900">Acesso inteligente</p>
                    </div>
                  </div>
                </div>

                {/* Localização */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Localização</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-900 font-medium">{data.endereco}</p>
                    </div>
                    <div>
                      <p className="text-gray-900">{data.localizacao}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Imagem */}
            <motion.div {...fadeIn} className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={data.imagens.rooftop || data.imagens.fachadas[0]?.url || "/placeholder.svg"}
                  alt={`${data.nome} - Vista do empreendimento`}
                  width={600}
                  height={400}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Informações do Empreendimento - ABAS HORIZONTAIS */}
      <section id="informacoes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Header da seção */}
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mb-6">INFORMAÇÕES DO EMPREENDIMENTO</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra o que torna o {data.nome} um empreendimento moderno, inteligente e sofisticado.
            </p>
          </motion.div>

          {/* Navegação por Abas */}
          <div className="max-w-6xl mx-auto">
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8 overflow-x-auto">
                {data.informacoes.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveInfo(tab.id)}
                    className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                      activeInfo === tab.id
                        ? "border-[#192849] text-[#192849]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {renderIcon(tab.icon, "h-5 w-5")}
                    {tab.titulo}
                  </button>
                ))}
              </nav>
            </div>

            {/* Conteúdo das Abas */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInfo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[600px]"
              >
                {(() => {
                  const activeDetails = getActiveInfoDetails()
                  if (!activeDetails) return null

                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{activeDetails.titulo}</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">{activeDetails.subtitulo}</p>

                        <ul className="space-y-4 mb-8">
                          {activeDetails.pontos.map((ponto, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-[#192849] rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">{ponto.titulo}:</span>
                                <span className="text-gray-600 ml-1">{ponto.distancia}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                          <Image
                            src={activeDetails.imagem || "/placeholder.svg"}
                            alt={activeDetails.titulo}
                            width={600}
                            height={400}
                            className="w-full h-96 object-cover"
                          />
                          <div className="p-4 bg-[#192849]/5">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-[#192849] rounded-full"></div>
                              <span className="text-sm font-medium text-[#192849]">{activeDetails.titulo}</span>
                            </div>
                            <p className="text-xs text-[#192849] mt-1">{activeDetails.subtitulo}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SEÇÃO GALERIA */}
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mb-6">GALERIA</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça cada detalhe através de nossa galeria exclusiva
            </p>
          </motion.div>

          {/* Grid 3x2 - Padrão 6 imagens iniciais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {data.galeria
              .slice(0, showAllImages ? data.galeria.length : 6)
              .map((imagem, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg h-64"
                  onClick={() => setSelectedGalleryImage(index)}
                >
                  <Image
                    src={imagem.url || "/placeholder.svg"}
                    alt={`${data.nome} - Imagem ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-gray-900">{imagem.titulo}</p>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Botão Mostrar Mais - só aparece se houver mais de 6 imagens */}
          {data.galeria.length > 6 && (
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllImages(!showAllImages)}
                className="border-[#192849] text-[#192849] hover:bg-[#192849]/10 bg-transparent"
              >
                {showAllImages ? "Mostrar Menos" : "Mostrar Mais"}
                <ArrowLeft className={`ml-2 h-4 w-4 transition-transform ${showAllImages ? "rotate-90" : "-rotate-90"}`} />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FICHA TÉCNICA */}
      <section id="plantas" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Header da seção */}
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
              TIPOLOGIA & ESPECIFICAÇÕES
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mt-4 mb-6">
              FICHA TÉCNICA
            </h2>
          </motion.div>

          {/* Grid duas colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeIn}>
              <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
                <Image
                  src={data.tipologia.imagem || "/placeholder.svg"}
                  alt={data.tipologia.tipo}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-6">
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-2">
                  {data.tipologia.tipo} - {data.tipologia.subtitulo}
                </h3>
                <div className="text-3xl font-bold text-[#192849] mb-6">{data.tipologia.preco}</div>
              </div>

              <div className="space-y-3">
                {data.tipologia.ambientes.map((ambiente, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#192849] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{ambiente}</span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Especificações Premium:</h4>
                <ul className="space-y-2">
                  {data.tipologia.especificacoes.map((spec, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#192849] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="border-[#192849]/20 text-[#192849] hover:bg-[#192849]/10 bg-transparent w-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Baixar Planta Técnica
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FALE COM ESPECIALISTA */}
      <section id="contato" className="py-20 bg-[#192849]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mb-6">FALE COM ESPECIALISTA</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Entre em contato conosco e saiba mais sobre este empreendimento exclusivo.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                      <Input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="w-full h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className="w-full h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                      <Input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        required
                        className="w-full h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem (opcional)</label>
                      <Textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Conte-nos sobre seu interesse..."
                        rows={4}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#1A2D54] hover:bg-[#152444] text-white h-12 text-lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER PADRÃO DO SITE */}
      <Footer />

      {/* Modal de contato */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowContact(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tenho Interesse no {data.nome}</h3>
                <p className="text-gray-600">Preencha seus dados e entraremos em contato</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <Input type="text" placeholder="Nome completo" required className="w-full" />
                <Input type="email" placeholder="E-mail" required className="w-full" />
                <Input type="tel" placeholder="Telefone" required className="w-full" />

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowContact(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" className="flex-1 bg-[#1A2D54] hover:bg-[#152444] text-white">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Enviar
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox da Galeria */}
      <AnimatePresence>
        {selectedGalleryImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedGalleryImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={data.galeria[selectedGalleryImage].url || "/placeholder.svg"}
                alt={data.galeria[selectedGalleryImage].titulo}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedGalleryImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="font-semibold mb-1">{data.galeria[selectedGalleryImage].titulo}</h3>
                <p className="text-sm opacity-90">{data.galeria[selectedGalleryImage].descricao}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 