"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  MapPin,
  Download,
  CheckCircle,
  Building,
  Star,
  ExternalLink,
  MessageCircle,
  Menu,
  X,
  Shield,
  Leaf,
  Diamond,
  TrendingUp,
  Dumbbell,
  Wine,
  Waves,
  Sparkles,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"
import Footer from "@/components/footer"

// Dados do Jade Premium
const jadePremium = {
  nome: "Jade",
  subtitulo: "RESIDÊNCIAS DE ALTO PADRÃO",
  slogan: "No Coração da Bela Vista",
  tagline: "Residências Exclusivas a Metros da Avenida Paulista",
  localizacao: "Bela Vista, São Paulo - SP",
  endereco: "Rua Maestro Cardim, 1028",
  preco: "A partir de R$ 390.000",
  unidades: "118 residências exclusivas",
  area: "25 a 40m²",
  entrega: "2025",
  tipo: "Studios de Alto Padrão",

  descricao:
    "Jade representa a convergência perfeita entre sofisticação urbana e localização privilegiada. No epicentro cultural de São Paulo, oferecemos studios de alto padrão para quem reconhece a raridade de um endereço verdadeiramente especial.",

  // Imagens premium
  imagem: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
  imagemHero: "/empreendimentos/jade/background-jade.jpeg",
  logo: "/empreendimentos/jade/logo-jade.png",

  // Galeria curada
  galeria: [
    {
      url: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
      categoria: "Fachada",
      titulo: "Vista Externa",
      descricao: "Arquitetura contemporânea sofisticada",
    },
    {
      url: "/empreendimentos/jade/galeria/rooftop.jpeg",
      categoria: "Rooftop",
      titulo: "Rooftop Premium",
      descricao: "Piscina aquecida com vista panorâmica",
    },
    {
      url: "/empreendimentos/jade/fachadas/JADE_Cardim 02.jpeg",
      categoria: "Lobby",
      titulo: "Lobby Sofisticado",
      descricao: "Recepção com pé-direito duplo",
    },
    {
      url: "/empreendimentos/jade/plantas/Planta Humanizada_ JADE.jpeg",
      categoria: "Studios",
      titulo: "Studios Inteligentes",
      descricao: "Espaços otimizados com acabamentos premium",
    },
    {
      url: "/empreendimentos/jade/fachadas/JADE_Cardim 03.jpeg",
      categoria: "Acabamentos",
      titulo: "Acabamentos Premium",
      descricao: "Materiais selecionados de alta qualidade",
    },
    {
      url: "/placeholder.svg?height=400&width=600",
      categoria: "Vista",
      titulo: "Vista Panorâmica",
      descricao: "Perspectiva privilegiada da cidade",
    },
  ],

  // Diferenciais premium
  diferenciais: [
    {
      icon: Building,
      titulo: "Arquitetura Contemporânea",
      descricao: "Projeto sofisticado com acabamentos premium",
      categoria: "design",
    },
    {
      icon: Star,
      titulo: "Alto Padrão",
      descricao: "Studios inteligentes de 25 a 40m² otimizados",
      categoria: "qualidade",
    },
    {
      icon: Diamond,
      titulo: "Exclusividade",
      descricao: "Apenas 118 residências selecionadas",
      categoria: "raridade",
    },
    {
      icon: MapPin,
      titulo: "Localização Única",
      descricao: "A 800 metros da Avenida Paulista",
      categoria: "localizacao",
    },
  ],

  // Experiências premium
  experiencias: [
    {
      icon: Waves,
      titulo: "Rooftop Exclusivo",
      descricao: "Piscina aquecida com vista panorâmica da cidade, equipada com tela de LED para experiências únicas.",
      categoria: "lazer",
    },
    {
      icon: Dumbbell,
      titulo: "Academia Privativa",
      descricao: "Espaço fitness equipado com aparelhos de última geração em ambiente climatizado.",
      categoria: "wellness",
    },
    {
      icon: Wine,
      titulo: "Lounge Gourmet",
      descricao: "Ambiente sofisticado para receber convidados com cozinha profissional integrada.",
      categoria: "social",
    },
    {
      icon: Sparkles,
      titulo: "Wellness Center",
      descricao: "Sauna premium para momentos de relaxamento e bem-estar.",
      categoria: "wellness",
    },
    {
      icon: CheckCircle,
      titulo: "Conveniências Exclusivas",
      descricao: "Lavanderia compartilhada e minimarket para máxima comodidade dos residentes.",
      categoria: "conveniencia",
    },
  ],

  // Proximidades estratégicas
  proximidades: [
    {
      categoria: "Saúde Premium",
      icon: "🏥",
      items: [
        { nome: "Hospital Beneficência Portuguesa", distancia: "190m", tempo: "3 min a pé" },
        { nome: "Hospital Dona Deola", distancia: "200m", tempo: "3 min a pé" },
      ],
    },
    {
      categoria: "Conectividade Urbana",
      icon: "🚇",
      items: [
        { nome: "Estação Brigadeiro - Linha Verde", distancia: "650m", tempo: "10 min a pé" },
        { nome: "Estação Vergueiro - Linha Azul", distancia: "1km", tempo: "12 min a pé" },
        { nome: "Estação Paraíso - Linhas Azul e Verde", distancia: "1,2km", tempo: "15 min a pé" },
      ],
    },
    {
      categoria: "Lifestyle & Cultura",
      icon: "🛍️",
      items: [
        { nome: "Shopping Pátio Paulista", distancia: "280m", tempo: "4 min a pé" },
        { nome: "Avenida Paulista", distancia: "700m", tempo: "10 min a pé" },
        { nome: "Instituto Tomie Ohtake", distancia: "700m", tempo: "10 min a pé" },
      ],
    },
  ],

  // Atributos únicos
  atributos: [
    {
      icon: Shield,
      titulo: "Segurança Blindada",
      descricao:
        "Sistema completo com portaria 24h, monitoramento integral, controle biométrico e segurança perimetral com sensores de movimento.",
      cor: "blue",
    },
    {
      icon: Leaf,
      titulo: "Sustentabilidade Premium",
      descricao:
        "Certificado com eficiência energética LED, sistema de reuso de águas pluviais, materiais sustentáveis certificados e paisagismo com espécies nativas.",
      cor: "green",
    },
    {
      icon: Diamond,
      titulo: "Acabamentos Diferenciados",
      descricao:
        "Seleção premium de materiais, projeto arquitetônico assinado e tecnologia de acesso inteligente para máximo conforto.",
      cor: "purple",
    },
    {
      icon: TrendingUp,
      titulo: "Investimento Estratégico",
      descricao:
        "Localização de valorização constante, alta demanda para locação, facilidade de revenda e retorno sobre investimento acima da média.",
      cor: "orange",
    },
  ],

  // Especificações do studio
  studio: {
    tipo: "Studio 26m²",
    area: "26m²",
    preco: "A partir de R$ 390.000",
    ambientes: [
      "Sala de Estar e Jantar | Integrada com cozinha gourmet",
      "Varanda Privativa | Vista privilegiada da cidade",
      "Banheiro Completo | Acabamentos em mármore",
      "Aproveitamento Inteligente | Cada metro pensado com precisão",
    ],
    especificacoes: [
      "Piso em porcelanato de alta qualidade",
      "Cozinha com bancada em granito",
      "Esquadrias em alumínio com vidros duplos",
      "Sistema de automação residencial",
      "Ar-condicionado split instalado",
    ],
    imagem: "/empreendimentos/jade/plantas/Planta Humanizada_ JADE.jpeg",
  },
}

export default function JadePremiumPage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [showContact, setShowContact] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null)
  const [headerOpacity, setHeaderOpacity] = useState(0)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    interesse: [] as string[],
  })

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
    viewport: { once: true },
  }

  // Navegação suave
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

  // Detectar scroll para header
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const opacity = Math.min(scrollY / 100, 0.95)
      setHeaderOpacity(opacity)

      // Detectar seção ativa
      const sections = ["hero", "residencias", "galeria", "plantas", "experiencias", "localizacao", "contato"]
      const scrollPosition = window.scrollY + 150

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        interesse: [...formData.interesse, interest],
      })
    } else {
      setFormData({
        ...formData,
        interesse: formData.interesse.filter((i) => i !== interest),
      })
    }
  }

  const navigationItems = [
    { id: "residencias", label: "Residências" },
    { id: "galeria", label: "Galeria" },
    { id: "plantas", label: "Plantas" },
    { id: "experiencias", label: "Experiências" },
    { id: "localizacao", label: "Localização" },
    { id: "contato", label: "Contato Exclusivo" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Elegante com Transparência */}
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

            {/* Logo Centralizado */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Image
                src={jadePremium.logo || "/placeholder.svg"}
                alt="Jade Logo"
                width={80}
                height={40}
                className="opacity-80"
              />
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.id ? "text-amber-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Menu Mobile */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm" onClick={() => setShowMobileMenu(!showMobileMenu)} className="p-2">
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            {/* CTA Sutil */}
            <div className="hidden md:block">
              <Button
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setShowContact(true)}
              >
                Agende Visita
              </Button>
            </div>
          </div>

          {/* Menu Mobile Dropdown */}
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
                        activeSection === item.id ? "bg-amber-50 text-amber-600" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section Premium */}
      <section id="hero" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={jadePremium.imagemHero || "/placeholder.svg"}
            alt={jadePremium.nome}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Badge de Exclusividade */}
        <div className="absolute top-24 right-8 z-20">
          <Badge className="bg-amber-500/90 text-white px-4 py-2 backdrop-blur-sm">Exclusivo</Badge>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">{jadePremium.nome}</h1>
              <p className="text-xl md:text-2xl font-light mb-4 opacity-90">{jadePremium.slogan}</p>
              <p className="text-lg md:text-xl mb-8 opacity-80">{jadePremium.tagline}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-90">{jadePremium.descricao}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm opacity-75 mb-1">{jadePremium.endereco}</p>
                <p className="text-sm opacity-75">{jadePremium.localizacao}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm opacity-75 mb-1">{jadePremium.unidades}</p>
                <p className="text-lg font-semibold">{jadePremium.preco}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 px-8 py-4 text-lg"
                onClick={() => setShowContact(true)}
              >
                Agende uma Visita Privativa
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Residências */}
      <section id="residencias" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="text-sm text-amber-600 font-medium tracking-wider uppercase mb-4 block">
                O Endereço que Define Exclusividade
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                Uma oportunidade rara para quem busca <span className="text-amber-600">distinção</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                No Jade, cada detalhe foi pensado para proporcionar uma experiência residencial única. Não se trata
                apenas de adquirir uma propriedade, mas de investir em um estilo de vida diferenciado no coração de uma
                das regiões mais cobiçadas de São Paulo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jadePremium.diferenciais.map((diferencial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <diferencial.icon className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{diferencial.titulo}</h3>
                      <p className="text-sm text-gray-600">{diferencial.descricao}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
              <Image
                src={jadePremium.imagem || "/placeholder.svg"}
                alt="Jade Fachada"
                width={600}
                height={500}
                className="rounded-lg object-cover w-full h-[500px] shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Investimento</p>
                  <p className="text-2xl font-bold text-gray-900">{jadePremium.preco}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galeria Exclusiva */}
      <section id="galeria" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-amber-600 font-medium tracking-wider uppercase">Galeria Exclusiva</span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
              Arquitetura que Inspira, <span className="text-amber-600">Design que Encanta</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra os ambientes cuidadosamente projetados do Jade através de nossa curadoria visual premium.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jadePremium.galeria.map((imagem, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedGalleryImage(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imagem.url || "/placeholder.svg"}
                    alt={imagem.titulo}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <Badge variant="outline" className="text-xs mb-2">
                    {imagem.categoria}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 mb-1">{imagem.titulo}</h3>
                  <p className="text-sm text-gray-600">{imagem.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-amber-200 text-amber-600 hover:bg-amber-50 bg-transparent"
            >
              Ver Galeria Completa
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Studios Inteligentes */}
      <section id="plantas" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-amber-600 font-medium tracking-wider uppercase">
              Studios Inteligentes & Especificações
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
              Espaços Otimizados, <span className="text-amber-600">Acabamentos Exclusivos</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div {...fadeIn}>
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <Image
                  src={jadePremium.studio.imagem || "/placeholder.svg"}
                  alt={jadePremium.studio.tipo}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-8">
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-2">{jadePremium.studio.tipo} - Tipologia Única</h3>
                <div className="text-3xl font-bold text-amber-600 mb-6">{jadePremium.studio.preco}</div>
              </div>

              <div className="space-y-4">
                {jadePremium.studio.ambientes.map((ambiente, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{ambiente}</span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Especificações Premium:</h4>
                <ul className="space-y-2">
                  {jadePremium.studio.especificacoes.map((spec, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="border-amber-200 text-amber-600 hover:bg-amber-50 bg-transparent w-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Baixar Planta Técnica
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiências Premium */}
      <section id="experiencias" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-amber-600 font-medium tracking-wider uppercase">Experiências Premium</span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
              Comodidades Pensadas para seu <span className="text-amber-600">Conforto</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jadePremium.experiencias.map((experiencia, index) => (
              <motion.div key={index} {...fadeIn} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                      <experiencia.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{experiencia.titulo}</h3>
                    <p className="text-gray-600 leading-relaxed">{experiencia.descricao}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização de Prestígio */}
      <section id="localizacao" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <span className="text-sm text-amber-600 font-medium tracking-wider uppercase">
                Localização de Prestígio
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-8">
                No Epicentro Cultural de <span className="text-amber-600">São Paulo</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                A Bela Vista não é apenas um bairro, é um estilo de vida. Residir no Jade significa estar a poucos
                passos dos principais centros culturais, gastronômicos e financeiros da capital, em uma região que
                combina tradição e modernidade de forma única.
              </p>

              <div className="space-y-8">
                {jadePremium.proximidades.map((categoria, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">{categoria.icon}</span>
                      {categoria.categoria}
                    </h3>
                    <div className="space-y-3">
                      {categoria.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <span className="text-gray-900 font-medium">{item.nome}</span>
                            <div className="text-sm text-gray-500">{item.tempo}</div>
                          </div>
                          <Badge variant="outline" className="text-amber-600 border-amber-200">
                            {item.distancia}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-100">
                <p className="text-gray-700 font-medium">
                  Uma localização que oferece o que há de mais sofisticado em São Paulo, literalmente na sua porta.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="bg-gray-100 rounded-lg h-[600px] flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <MapPin className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mapa Interativo</h3>
                  <p className="text-gray-600 mb-4">{jadePremium.endereco}</p>
                  <Button
                    variant="outline"
                    className="border-amber-200 text-amber-600 hover:bg-amber-50 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver no Google Maps
                  </Button>
                </div>

                {/* Pontos no mapa simulado */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais Únicos */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-amber-600 font-medium tracking-wider uppercase">Diferenciais Únicos</span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
              Atributos que Definem <span className="text-amber-600">Exclusividade</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jadePremium.atributos.map((atributo, index) => (
              <motion.div key={index} {...fadeIn} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                        atributo.cor === "blue"
                          ? "bg-blue-50"
                          : atributo.cor === "green"
                            ? "bg-green-50"
                            : atributo.cor === "purple"
                              ? "bg-purple-50"
                              : "bg-orange-50"
                      }`}
                    >
                      <atributo.icon
                        className={`h-8 w-8 ${
                          atributo.cor === "blue"
                            ? "text-blue-600"
                            : atributo.cor === "green"
                              ? "text-green-600"
                              : atributo.cor === "purple"
                                ? "text-purple-600"
                                : "text-orange-600"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{atributo.titulo}</h3>
                    <p className="text-gray-600 leading-relaxed">{atributo.descricao}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência Personalizada */}
      <section id="contato" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-12">
              <span className="text-sm text-amber-600 font-medium tracking-wider uppercase">
                Experiência Personalizada
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
                Agende sua <span className="text-amber-600">Visita Exclusiva</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Oferecemos um atendimento consultivo especializado para apresentar o Jade de forma personalizada. Nossa
                equipe está preparada para demonstrar todos os diferenciais que fazem deste endereço uma oportunidade
                única.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                    Consultoria Imobiliária Premium
                  </h3>

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
                      <label className="block text-sm font-medium text-gray-700 mb-3">Interesse</label>
                      <div className="flex gap-6">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="residir"
                            checked={formData.interesse.includes("residir")}
                            onCheckedChange={(checked) => handleInterestChange("residir", checked as boolean)}
                          />
                          <label htmlFor="residir" className="text-sm text-gray-700">
                            Residir
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="investir"
                            checked={formData.interesse.includes("investir")}
                            onCheckedChange={(checked) => handleInterestChange("investir", checked as boolean)}
                          />
                          <label htmlFor="investir" className="text-sm text-gray-700">
                            Investir
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white h-12 text-lg"
                    >
                      Solicitar Consultoria Exclusiva
                    </Button>
                  </form>

                  <p className="text-sm text-gray-500 text-center mt-6">
                    Atendimento personalizado com especialistas em investimentos imobiliários de alto padrão.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Flutuante */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </Button>
        <div className="absolute -top-12 right-0 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Atendimento VIP
        </div>
      </div>

      {/* Modal de Contato */}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Agende sua Visita</h3>
                <p className="text-gray-600">Experiência personalizada no Jade</p>
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
                  <Button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-600 text-white">
                    Agendar
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
                src={jadePremium.galeria[selectedGalleryImage].url || "/placeholder.svg"}
                alt={jadePremium.galeria[selectedGalleryImage].titulo}
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
                <h3 className="font-semibold mb-1">{jadePremium.galeria[selectedGalleryImage].titulo}</h3>
                <p className="text-sm opacity-90">{jadePremium.galeria[selectedGalleryImage].descricao}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
