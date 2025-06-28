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
  Home,
  MessageCircle,
  Menu,
  X,
  Shield,
  Waves,
  Eye,
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

// Dados do Jade - Informações reais do empreendimento
const jadeTemplate = {
  nome: "Jade",
  subtitulo: "BREVE LANÇAMENTO",
  slogan: "Onde Sofisticação e Exclusividade Se Encontram",
  localizacao: "Bela Vista, São Paulo - SP",
  endereco: "Rua Maestro Cardim, 1028",
  preco: "A partir de R$ 390.000",
  area: "25 a 40m²",
  entrega: "2025",
  tipo: "Studios de Alto Padrão",
  unidades: "118 unidades",

  // Descrição principal
  descricao:
    "No coração da Bela Vista, São Paulo, o Jade é um endereço privilegiado que combina sofisticação, tradição e conveniência. Este bairro, conhecido por sua rica vida cultural e excelente infraestrutura, oferece ótima proximidade com importantes pontos da cidade, como a Avenida Paulista, o Parque Trianon e os centros comerciais e gastronômicos de renomadas regiões como Vila Madalena e Itaim Bibi.",

  // Oportunidade rara - seção premium
  oportunidadeRara: {
    titulo: "Uma oportunidade rara para quem busca distinção",
    descricao:
      "O Jade oferece uma oportunidade única de investimento em uma das regiões mais valorizadas da cidade. Apartamentos sofisticados em um dos bairros mais valorizados de São Paulo, com segurança e exclusividade para seu investimento.",
  },

  // Imagens organizadas
  imagem: jadeMedia.fachadas[0]?.url || "/empreendimentos/jade/fachada.jpg",
  imagemDestaque: jadeMedia.background || "/empreendimentos/jade/background-jade.jpeg",
  logo: jadeMedia.logo || "/empreendimentos/jade/logo-jade.png",

  // Informações do empreendimento - 4 categorias principais
  informacoes: [
    {
      icon: MapPin,
      titulo: "Localização Privilegiada",
      subtitulo: "Próximo à Av. Paulista",
      descricao: "Próximo a hospitais, estações de metrô, shopping centers e à Av. Paulista.",
      cor: "teal",
    },
    {
      icon: Waves,
      titulo: "Lazer e Comodidades",
      subtitulo: "Infraestrutura Completa",
      descricao: "Completa infraestrutura de lazer e comodidades para seu conforto.",
      cor: "teal",
    },
    {
      icon: Shield,
      titulo: "Segurança e Exclusividade",
      subtitulo: "Sistema Completo",
      descricao: "Sistema de segurança completo para sua tranquilidade.",
      cor: "teal",
    },
    {
      icon: Building,
      titulo: "Investimento Valorizado",
      subtitulo: "A partir de R$ 390 mil",
      descricao: "Investimento em um dos bairros mais valorizados de São Paulo.",
      cor: "teal",
    },
  ],

  // Detalhes da localização
  localizacaoDetalhes: {
    titulo: "Localização Privilegiada",
    subtitulo: "No coração da Bela Vista, próximo aos principais pontos da cidade.",
    pontos: [
      "Hospital Beneficência Portuguesa (190m, 3 min a pé)",
      "Dona Deola - Hospital BP (200m, 3 min a pé)",
      "Estação Brigadeiro - Linha Verde (650m, 10 min a pé)",
      "Shopping Pátio Paulista (280m, 4 min a pé)",
      "Avenida Paulista (700m, 10 min a pé)",
      "Estação Vergueiro - Linha Azul (1km, 12 min a pé)",
      "Estação Paraíso - Linhas Azul e Verde (1,2km, 15 min a pé)",
    ],
    imagemPrincipal: jadeMedia.fachadas[0]?.url || "/empreendimentos/jade/fachada.jpg",
  },

  // Galeria expandida
  galeria: [
    {
      url: jadeMedia.fachadas[0]?.url || "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
      categoria: "Fachada",
      titulo: "Vista Externa Principal",
      descricao: "Arquitetura contemporânea sofisticada na Bela Vista",
    },
    {
      url: jadeMedia.rooftop || "/empreendimentos/jade/galeria/rooftop.jpeg",
      categoria: "Rooftop",
      titulo: "Rooftop com Piscina",
      descricao: "Piscina aquecida com vista panorâmica e tela de LED",
    },
    {
      url: jadeMedia.fachadas[1]?.url || "/empreendimentos/jade/fachadas/JADE_Cardim 02.jpeg",
      categoria: "Fachada",
      titulo: "Vista Lateral",
      descricao: "Design sofisticado com acabamentos premium",
    },
    {
      url: jadeMedia.fachadas[2]?.url || "/empreendimentos/jade/fachadas/JADE_Cardim 03.jpeg",
      categoria: "Perspectiva",
      titulo: "Vista Aérea",
      descricao: "Localização privilegiada no coração da Bela Vista",
    },
    {
      url: "/empreendimentos/jade/academia.webp",
      categoria: "Lazer",
      titulo: "Academia Equipada",
      descricao: "Espaço fitness completo com equipamentos modernos",
    },
    {
      url: "/empreendimentos/jade/lounge.webp",
      categoria: "Lazer",
      titulo: "Lounge Gourmet",
      descricao: "Espaço gourmet para confraternizações",
    },
  ],

  // Studio - Espaços Otimizados
  studio: {
    tipo: "Studio 26m²",
    subtitulo: "Alto Padrão",
    preco: "A partir de R$ 390.000",
    ambientes: [
      "Ampla sala de estar e jantar | Integrada com cozinha gourmet",
      "Cozinha integrada | Planejada com acabamentos premium",
      "Varanda | Vista privilegiada da cidade",
      "Banheiro completo | Acabamentos em materiais nobres",
    ],
    especificacoes: [
      "Piso em porcelanato de alta qualidade",
      "Cozinha planejada com bancada em granito",
      "Esquadrias em alumínio com vidros duplos",
      "Sistema de automação residencial",
      "Ar-condicionado split instalado",
      "Acabamentos premium em todos os ambientes",
    ],
    imagem: jadeMedia.planta || "/empreendimentos/jade/plantas/Planta Humanizada_ JADE.jpeg",
  },

  // Lazer e comodidades detalhadas
  lazer: [
    "Piscina aquecida com vista panorâmica",
    "Tela de LED no rooftop",
    "Academia equipada",
    "Sauna",
    "Lounge Gourmet",
    "Lavanderia compartilhada",
    "MiniMarket",
  ],

  // Segurança detalhada
  seguranca: [
    "Portaria 24h com equipe treinada",
    "Sistema de monitoramento completo",
    "Controle de acesso biométrico",
    "Elevadores com controle biométrico",
    "Segurança privativa",
    "Sensores de movimento",
    "Cerca eletrônica perimetral",
  ],

  // Sustentabilidade
  sustentabilidade: [
    "Eficiência energética com iluminação LED",
    "Sensores de presença",
    "Sistema de reuso de águas pluviais",
    "Materiais sustentáveis certificados",
    "Paisagismo com espécies nativas",
  ],

  // Especificações técnicas detalhadas
  especificacoes: {
    unidades: "118 unidades",
    andares: "15 andares",
    vagas: "Opcionais",
    area_total: "Studios de 25m² a 40m²",
    elevadores: "2 elevadores",
    entrega: "2025",
    construtora: "Elleven Engenharia",
    arquiteto: "Projeto arquitetônico diferenciado",
  },

  // Investimento
  investimento: {
    valor_inicial: "R$ 390.000",
    caracteristicas: [
      "Valorização constante",
      "Alta demanda de locação",
      "Retorno sobre investimento",
      "Facilidade de revenda",
      "Localização premium na Bela Vista",
      "Potencial de valorização acima da média",
    ],
  },
}

export default function JadeTemplatePage() {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null)
  const [showContact, setShowContact] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [headerOpacity, setHeaderOpacity] = useState(0)
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

      {/* HERO DA JADE */}
      <section id="hero" className="relative h-screen overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <Image
            src={jadeTemplate.imagem || "/placeholder.svg"}
            alt={jadeTemplate.nome}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="bg-orange-500/90 text-white text-sm px-4 py-2 mb-6 backdrop-blur-sm">
                {jadeTemplate.subtitulo}
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {jadeTemplate.logo && (
                <div className="mb-6">
                  <Image
                    src={jadeTemplate.logo || "/placeholder.svg"}
                    alt="Logo Jade"
                    width={140}
                    height={70}
                    className="filter brightness-0 invert"
                    priority
                  />
                </div>
              )}
              <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight tracking-wide">JADE</h1>
              <p className="text-xl md:text-2xl font-light mb-8 opacity-90 leading-relaxed">{jadeTemplate.slogan}</p>
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
                <p className="text-sm opacity-90">{jadeTemplate.localizacao}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="h-4 w-4 text-orange-400" />
                  <span className="text-sm font-medium">Tipologia</span>
                </div>
                <p className="text-sm opacity-90">{jadeTemplate.area}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-orange-400" />
                  <span className="text-sm font-medium">Entrega</span>
                </div>
                <p className="text-sm opacity-90">{jadeTemplate.entrega}</p>
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
            <p className="text-2xl font-bold text-gray-900">{jadeTemplate.preco}</p>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2 - Uma oportunidade rara para quem busca distinção */}
      <section id="oportunidade" className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
              {jadeTemplate.oportunidadeRara.titulo}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">{jadeTemplate.oportunidadeRara.descricao}</p>
          </motion.div>
        </div>
      </section>

      {/* Informações do Empreendimento */}
      <section id="informacoes" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Informações do Empreendimento</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra o que torna o JADE um empreendimento moderno, inteligente e sofisticado no coração do Campo Belo.
            </p>
          </motion.div>

          {/* Grid de 4 informações principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {jadeTemplate.informacoes.map((info, index) => (
              <motion.div key={index} {...fadeIn} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.titulo}</h3>
                <h4 className="text-base font-medium text-teal-600 mb-3">{info.subtitulo}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{info.descricao}</p>
              </motion.div>
            ))}
          </div>

          {/* Seção com imagem e detalhes da localização */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="relative">
              <Image
                src={jadeTemplate.localizacaoDetalhes.imagemPrincipal || "/placeholder.svg"}
                alt="Campo Belo Premium"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[400px] shadow-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{jadeTemplate.localizacaoDetalhes.titulo}</h3>
                <p className="text-sm text-gray-600">{jadeTemplate.localizacaoDetalhes.subtitulo}</p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-6">
              <div>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{jadeTemplate.localizacaoDetalhes.titulo}</h3>
                <p className="text-gray-600 mb-6">{jadeTemplate.localizacaoDetalhes.subtitulo}</p>
              </div>

              <ul className="space-y-3">
                {jadeTemplate.localizacaoDetalhes.pontos.map((ponto, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{ponto}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-teal-600 hover:bg-teal-700 text-white mt-6" onClick={() => setShowContact(true)}>
                SAIBA MAIS
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO GALERIA */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Galeria</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça cada detalhe através de nossa galeria exclusiva
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jadeTemplate.galeria.map((imagem, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setSelectedGalleryImage(index)}
              >
                <Image
                  src={imagem.url || "/placeholder.svg"}
                  alt={`${jadeTemplate.nome} - Imagem ${index + 1}`}
                  width={index === 0 ? 800 : 400}
                  height={index === 0 ? 600 : 300}
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
        </div>
      </section>

      {/* Espaços Otimizados, Acabamentos Exclusivos */}
      <section id="plantas" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
              STUDIOS INTELIGENTES & ESPECIFICAÇÕES
            </span>
            <h2 className="text-4xl font-light text-gray-900 mt-4 mb-6">
              Espaços Otimizados, <span className="text-orange-500">Acabamentos Exclusivos</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div {...fadeIn}>
              <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
                <Image
                  src={jadeTemplate.studio.imagem || "/placeholder.svg"}
                  alt={jadeTemplate.studio.tipo}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-8">
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-2">
                  {jadeTemplate.studio.tipo} - {jadeTemplate.studio.subtitulo}
                </h3>
                <div className="text-3xl font-bold text-orange-500 mb-6">{jadeTemplate.studio.preco}</div>
              </div>

              <div className="space-y-4">
                {jadeTemplate.studio.ambientes.map((ambiente, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{ambiente}</span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Especificações Premium:</h4>
                <ul className="space-y-2">
                  {jadeTemplate.studio.especificacoes.map((spec, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent w-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Baixar Planta Técnica
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FALE COM ESPECIALISTA */}
      <section id="contato" className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="text-4xl font-light text-gray-900 mb-6">Fale com Especialista</h2>
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
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tenho Interesse no Jade</h3>
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
                  <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
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
                src={jadeTemplate.galeria[selectedGalleryImage].url || "/placeholder.svg"}
                alt={jadeTemplate.galeria[selectedGalleryImage].titulo}
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
                <h3 className="font-semibold mb-1">{jadeTemplate.galeria[selectedGalleryImage].titulo}</h3>
                <p className="text-sm opacity-90">{jadeTemplate.galeria[selectedGalleryImage].descricao}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
