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
  Play,
  CheckCircle,
  Calendar,
  Building,
  Users,
  Car,
  Ruler,
  Bath,
  Home,
  Star,
  ExternalLink,
  MessageCircle,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { getMediaByCategory } from "@/lib/data/media-catalog"
import Footer from "@/components/footer"

// Buscar imagens do catálogo
const jadeMedia = {
  background: getMediaByCategory("jade", "background")[0]?.url,
  logo: getMediaByCategory("jade", "logo")[0]?.url,
  fachadas: getMediaByCategory("jade", "fachada"),
  planta: getMediaByCategory("jade", "planta")[0]?.url,
  rooftop: getMediaByCategory("jade", "area-comum")[0]?.url,
}

// Dados do Jade - melhorados e expandidos
const jade = {
  nome: "Jade",
  subtitulo: "BREVE LANÇAMENTO",
  slogan: "Onde Sofisticação e Exclusividade Se Encontram",
  localizacao: "Bela Vista, São Paulo - SP",
  endereco: "Rua Maestro Cardim, 1028",
  preco: "A partir de R$ 390.000",
  area: "25 a 40m²",
  entrega: "2025",
  tipo: "Studio",
  descricao:
    "No coração da Bela Vista, São Paulo, o Jade representa um endereço privilegiado que combina sofisticação, tradição e conveniência. Este bairro, conhecido por sua rica vida cultural e excelente infraestrutura, oferece proximidade com importantes pontos da cidade.",

  // Especificações técnicas detalhadas
  especificacoes: {
    unidades: "48 unidades",
    andares: "12 andares",
    vagas: "1 vaga por unidade",
    area_total: "1.200m²",
    elevadores: "2 elevadores",
    entrega: "Dezembro 2025",
    construtora: "Elleven Engenharia",
    arquiteto: "Studio Gemini",
  },

  // Imagens organizadas
  imagem: jadeMedia.fachadas[0]?.url || "/empreendimentos/jade/fachada-jade.webp",
  imagemDestaque: jadeMedia.background || "/empreendimentos/jade/background-jade.webp",
  logo: jadeMedia.logo || "/empreendimentos/jade/logo-jade.png",

  // Galeria expandida
  galeria: [
    jadeMedia.fachadas[0]?.url || "/empreendimentos/jade/fachada-jade.webp",
    jadeMedia.rooftop || "/empreendimentos/jade/rooftop.webp",
    "/empreendimentos/jade/lobby.webp",
    "/empreendimentos/jade/fitness.webp",
    "/empreendimentos/jade/coworking.webp",
    "/empreendimentos/jade/terraco.webp",
  ],

  // Diferenciais reorganizados por categoria
  diferenciais: {
    localizacao: [
      "A 190m do Hospital Beneficência Portuguesa",
      "A 280m do Shopping Pátio Paulista",
      "A 650m da Estação Brigadeiro (Metrô)",
      "A 700m da Avenida Paulista",
    ],
    estrutura: [
      "Rooftop com piscina e vista panorâmica",
      "Lobby com pé-direito duplo",
      "Coworking exclusivo para moradores",
      "Academia equipada no terraço",
    ],
    tecnologia: [
      "Fechadura digital em todas as unidades",
      "Pontos USB em todos os ambientes",
      "Pré-instalação para automação residencial",
      "Sistema de segurança inteligente",
    ],
    sustentabilidade: [
      "Certificação AQUA em processo",
      "Sistema de reuso de água da chuva",
      "Iluminação LED em áreas comuns",
      "Jardins verticais no rooftop",
    ],
  },

  pontosInteresse: [
    { nome: "Hospital Beneficência Portuguesa", distancia: "190m", tipo: "saude", icon: "🏥" },
    { nome: "Shopping Pátio Paulista", distancia: "280m", tipo: "shopping", icon: "🛍️" },
    { nome: "Estação Brigadeiro", distancia: "650m", tipo: "transporte", icon: "🚇" },
    { nome: "Avenida Paulista", distancia: "700m", tipo: "comercial", icon: "🏢" },
    { nome: "Estação Vergueiro", distancia: "1km", tipo: "transporte", icon: "🚇" },
    { nome: "Parque Ibirapuera", distancia: "2.5km", tipo: "lazer", icon: "🌳" },
  ],

  plantas: [
    {
      tipo: "Studio 26m²",
      area: "26m²",
      preco: "A partir de R$ 390.000",
      quartos: 0,
      banheiros: 1,
      vagas: 1,
      caracteristicas: [
        "Cozinha americana integrada",
        "Varanda com churrasqueira",
        "Banheiro com box blindex",
        "Ponto para ar-condicionado",
        "Fechadura digital",
      ],
      imagem: jadeMedia.planta || "/empreendimentos/jade/plantas/studio-26m2.jpg",
    },
    {
      tipo: "Studio 32m²",
      area: "32m²",
      preco: "A partir de R$ 450.000",
      quartos: 0,
      banheiros: 1,
      vagas: 1,
      caracteristicas: [
        "Ambiente ampliado",
        "Closet integrado",
        "Varanda gourmet",
        "Bancada em granito",
        "Piso porcelanato",
      ],
      imagem: "/empreendimentos/jade/plantas/studio-32m2.jpg",
    },
  ],

  // Cronograma de obra
  cronograma: [
    { fase: "Fundação", status: "concluido", data: "Mar 2024" },
    { fase: "Estrutura", status: "em-andamento", data: "Set 2024" },
    { fase: "Alvenaria", status: "planejado", data: "Jan 2025" },
    { fase: "Acabamentos", status: "planejado", data: "Jun 2025" },
    { fase: "Entrega", status: "planejado", data: "Dez 2025" },
  ],
}

export default function JadePage() {
  const [selectedPlanta, setSelectedPlanta] = useState(0)
  const [showContact, setShowContact] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
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

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
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

  // Detectar seção ativa no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "sobre", "plantas", "localizacao", "galeria", "cronograma"]
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
    { id: "sobre", label: "Sobre" },
    { id: "plantas", label: "Plantas" },
    { id: "localizacao", label: "Localização" },
    { id: "galeria", label: "Galeria" },
    { id: "cronograma", label: "Cronograma" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header com navegação interna */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
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
                    activeSection === item.id ? "text-orange-500" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
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
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
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
                        activeSection === item.id ? "bg-orange-50 text-orange-600" : "text-gray-600 hover:bg-gray-50"
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
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
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

      {/* Hero Section */}
      <section id="hero" className="relative h-screen overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <Image src={jade.imagem || "/placeholder.svg"} alt={jade.nome} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="bg-orange-500/90 text-white text-sm px-4 py-2 mb-6 backdrop-blur-sm">
                {jade.subtitulo}
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {jade.logo && (
                <div className="mb-6">
                  <Image
                    src={jade.logo || "/placeholder.svg"}
                    alt="Logo Jade"
                    width={140}
                    height={70}
                    className="filter brightness-0 invert"
                    priority
                  />
                </div>
              )}
              <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight tracking-wide">JADE</h1>
              <p className="text-xl md:text-2xl font-light mb-8 opacity-90 leading-relaxed">{jade.slogan}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-orange-400" />
                  <span className="text-sm font-medium">Localização</span>
                </div>
                <p className="text-sm opacity-90">{jade.localizacao}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="h-4 w-4 text-orange-400" />
                  <span className="text-sm font-medium">Tipologia</span>
                </div>
                <p className="text-sm opacity-90">{jade.area}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-orange-400" />
                  <span className="text-sm font-medium">Entrega</span>
                </div>
                <p className="text-sm opacity-90">{jade.entrega}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setShowContact(true)}
              >
                Tenho Interesse
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Tour Virtual
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl"
        >
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Investimento</p>
            <p className="text-2xl font-bold text-gray-900">{jade.preco}</p>
          </div>
        </motion.div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="text-sm text-orange-500 font-medium tracking-wider uppercase mb-4 block">
                Sobre o empreendimento
              </span>
              <h2 className="text-4xl font-light text-gray-900 mb-8 leading-tight">
                Luxo e <span className="text-orange-500">Comodidade</span> no Centro de São Paulo
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{jade.descricao}</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Com design contemporâneo e espaços otimizados, cada unidade foi pensada para proporcionar máximo
                conforto em um ambiente urbano dinâmico.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Building className="h-4 w-4 text-orange-500" />
                    Unidades
                  </h3>
                  <p className="text-gray-600">{jade.especificacoes.unidades}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    Entrega
                  </h3>
                  <p className="text-gray-600">{jade.especificacoes.entrega}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-orange-500" />
                    Arquiteto
                  </h3>
                  <p className="text-gray-600">{jade.especificacoes.arquiteto}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Ruler className="h-4 w-4 text-orange-500" />
                    Área Total
                  </h3>
                  <p className="text-gray-600">{jade.especificacoes.area_total}</p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => setShowContact(true)}
              >
                Solicitar Informações
              </Button>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
              <Image
                src={jadeMedia.rooftop || jade.imagemDestaque}
                alt="Interior do Jade"
                width={600}
                height={500}
                className="rounded-lg object-cover w-full h-[500px] shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Rooftop Exclusivo</h3>
                <p className="text-sm text-gray-600">Piscina, fitness e área de convivência com vista panorâmica</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">Diferenciais</span>
            <h2 className="text-4xl font-light text-gray-900 mt-4 mb-6">
              Por que escolher o <span className="text-orange-500">Jade</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os principais diferenciais que fazem do Jade um investimento único
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(jade.diferenciais).map(([categoria, items], index) => (
              <motion.div key={categoria} {...fadeIn} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize flex items-center gap-2">
                      {categoria === "localizacao" && <MapPin className="h-5 w-5 text-orange-500" />}
                      {categoria === "estrutura" && <Building className="h-5 w-5 text-orange-500" />}
                      {categoria === "tecnologia" && <Star className="h-5 w-5 text-orange-500" />}
                      {categoria === "sustentabilidade" && <CheckCircle className="h-5 w-5 text-orange-500" />}
                      {categoria}
                    </h3>
                    <ul className="space-y-3">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Plantas */}
      <section id="plantas" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">Plantas</span>
            <h2 className="text-4xl font-light text-gray-900 mt-4 mb-6">
              Nossos <span className="text-orange-500">Studios</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Espaços inteligentes e funcionais, projetados para otimizar cada metro quadrado
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12">
            {jade.plantas.map((planta, index) => (
              <Button
                key={index}
                variant={selectedPlanta === index ? "default" : "outline"}
                className={selectedPlanta === index ? "bg-orange-500 hover:bg-orange-600" : "bg-transparent"}
                onClick={() => setSelectedPlanta(index)}
              >
                {planta.tipo}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlanta}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            >
              <div className="relative">
                <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                  <Image
                    src={jade.plantas[selectedPlanta].imagem || "/placeholder.svg"}
                    alt={jade.plantas[selectedPlanta].tipo}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-light text-gray-900 mb-2">{jade.plantas[selectedPlanta].tipo}</h3>
                  <div className="text-3xl font-bold text-orange-500 mb-6">{jade.plantas[selectedPlanta].preco}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Ruler className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">{jade.plantas[selectedPlanta].area}</div>
                    <div className="text-sm text-gray-600">Área Total</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Bath className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">{jade.plantas[selectedPlanta].banheiros}</div>
                    <div className="text-sm text-gray-600">Banheiro</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Car className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">{jade.plantas[selectedPlanta].vagas}</div>
                    <div className="text-sm text-gray-600">Vaga</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Home className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">Studio</div>
                    <div className="text-sm text-gray-600">Tipologia</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Características</h4>
                  <ul className="space-y-2">
                    {jade.plantas[selectedPlanta].caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
                    onClick={() => setShowContact(true)}
                  >
                    Tenho Interesse
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50 flex-1 bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Planta
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Seção Localização */}
      <section id="localizacao" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">Localização</span>
              <h2 className="text-4xl font-light text-gray-900 mt-4 mb-8">
                Coração da <span className="text-orange-500">Bela Vista</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Estrategicamente localizado na Bela Vista, oferece acesso privilegiado aos principais pontos da cidade.
                Um endereço que combina tradição, cultura e modernidade.
              </p>

              <div className="space-y-4">
                {jade.pontosInteresse.map((ponto, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between py-4 px-4 bg-white rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{ponto.icon}</span>
                      <div>
                        <span className="text-gray-900 font-medium">{ponto.nome}</span>
                        <div className="text-sm text-gray-500 capitalize">{ponto.tipo}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-orange-600 border-orange-200">
                      {ponto.distancia}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  Endereço
                </h3>
                <p className="text-gray-700 mb-1">{jade.endereco}</p>
                <p className="text-gray-600">{jade.localizacao}</p>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="bg-gray-100 rounded-lg h-[600px] flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mapa Interativo</h3>
                  <p className="text-gray-600 mb-4">{jade.endereco}</p>
                  <Button
                    variant="outline"
                    className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver no Google Maps
                  </Button>
                </div>

                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Galeria */}
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">Galeria</span>
            <h2 className="text-4xl font-light text-gray-900 mt-4 mb-6">
              Conheça o <span className="text-orange-500">Jade</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore cada detalhe através de nossa galeria exclusiva
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jade.galeria.map((imagem, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Image
                  src={imagem || "/placeholder.svg"}
                  alt={`${jade.nome} - Imagem ${index + 1}`}
                  width={index === 0 ? 800 : 400}
                  height={index === 0 ? 600 : 300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-gray-900">
                    {index === 0
                      ? "Fachada Principal"
                      : index === 1
                        ? "Rooftop"
                        : index === 2
                          ? "Lobby"
                          : index === 3
                            ? "Fitness"
                            : index === 4
                              ? "Coworking"
                              : "Terraço"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Fazer Tour Virtual 360°
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Seção Cronograma */}
      <section id="cronograma" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">Cronograma</span>
            <h2 className="text-4xl font-light text-gray-900 mt-4 mb-6">
              Acompanhe o <span className="text-orange-500">Progresso</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparência total no desenvolvimento do seu investimento
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

              {jade.cronograma.map((fase, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">{fase.fase}</h3>
                      <p className="text-gray-600 mb-3">{fase.data}</p>
                      <Badge
                        className={`${
                          fase.status === "concluido"
                            ? "bg-green-100 text-green-800"
                            : fase.status === "em-andamento"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {fase.status === "concluido"
                          ? "✓ Concluído"
                          : fase.status === "em-andamento"
                            ? "🔄 Em Andamento"
                            : "📅 Planejado"}
                      </Badge>
                    </div>
                  </div>

                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                      fase.status === "concluido"
                        ? "bg-green-500"
                        : fase.status === "em-andamento"
                          ? "bg-orange-500"
                          : "bg-gray-300"
                    }`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/graphics/grafismos-1.png')] bg-repeat opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Realize o sonho do seu <span className="text-orange-500">primeiro imóvel</span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              O Jade oferece a oportunidade perfeita para quem busca um imóvel moderno, bem localizado e com excelente
              custo-benefício no centro de São Paulo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">48</div>
                <div className="text-sm opacity-75">Unidades Exclusivas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">190m</div>
                <div className="text-sm opacity-75">do Hospital Beneficência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">2025</div>
                <div className="text-sm opacity-75">Entrega Prevista</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => setShowContact(true)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Falar com Consultor
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar Material Completo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer padrão do site */}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tenho Interesse no Jade</h3>
                <p className="text-gray-600">Preencha seus dados e entraremos em contato</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <Input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                    className="w-full"
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
                    className="w-full"
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
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem (opcional)</label>
                  <Textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu interesse..."
                    rows={3}
                    className="w-full"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowContact(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Enviar
                  </Button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center mb-4">Ou entre em contato diretamente:</p>
                <div className="flex justify-center gap-4">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    Ligar
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
