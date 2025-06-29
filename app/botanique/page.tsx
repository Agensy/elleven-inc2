"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Home, Shield, ArrowLeft, Building, TreePine, MapPin, Car, Bath, Ruler, Users, Waves, Phone, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados completos do Botanique baseados no briefing
const botanique = {
  nome: "Botanique Condomínio Residencial",
  slogan: "Viva ao lado de um bosque privativo de 4.500 m²",
  subtitulo: "Seu condomínio clube em Cotia, com lazer completo, segurança 24h e a tranquilidade que você merece.",
  endereco: "Estr. Ribeirão, 550 – Chácara Roselândia, Cotia – São Paulo",
  vgv: "R$ 19.177.000,00",
  terreno: "15.050 m²",
  areaVerde: "4.500 m²",
  unidades: 150,
  torres: 5,
  andares: 5,
  status: "Em breve",
  incorporacao: "Eleven Engenharia",
  
  descricao: "O Botanique foi cuidadosamente projetado para oferecer qualidade de vida incomparável à sua família. Localizado em Cotia, ao lado de uma área verde exclusiva de 4.500m², o empreendimento é um verdadeiro convite ao bem-estar. Aqui você vive tranquilo, cercado pela natureza, mas com toda a conveniência de um condomínio clube.",
  
  // Imagens organizadas
  imagens: {
    hero: "/empreendimentos/botanique/1 - VITRINE_BOTANIQUE.jpg",
    fachada: "/empreendimentos/botanique/BOTANIQUE_1_FACHADA.jpg",
    vistaAerea: "/empreendimentos/botanique/BOTANIQUE_2_VISTA AÉREA FACHADA .jpg",
    implantacao: "/empreendimentos/botanique/galeria/BOTANIQUE_7_IMPLANTAÇÃO.jpg",
  },
  
  // Galeria de lazer
  lazerGaleria: [
    {
      src: "/empreendimentos/botanique/galeria/BOTANIQUE_8_PISCINA.jpg",
      alt: "Piscina adulto e infantil",
      titulo: "Piscina"
    },
    {
      src: "/empreendimentos/botanique/galeria/BOTANIQUE_4_ESPAÇO GRILL.jpg",
      alt: "Espaço grill equipado",
      titulo: "Espaço Grill"
    },
    {
      src: "/empreendimentos/botanique/galeria/BOTANIQUE_3_SALÃO DE FESTAS.jpg",
      alt: "Salão de festas decorado",
      titulo: "Salão de Festas"
    },
    {
      src: "/empreendimentos/botanique/galeria/BOTANIQUE_5_PLAYGROUND.jpg",
      alt: "Playground completo",
      titulo: "Playground"
    },
    {
      src: "/empreendimentos/botanique/galeria/BOTANIQUE_6_VISTA AÉREA.jpg",
      alt: "Vista aérea do condomínio",
      titulo: "Vista Aérea"
    },
  ],
  
  // Tipologias disponíveis
  tipologias: [
    {
      nome: "1 Dormitório",
      area: "45m²",
      quartos: 1,
      banheiros: 1,
      vagas: 1,
      planta: "/empreendimentos/botanique/plantas/Planta 1 dormi.jpg",
      características: ["Varanda", "Cozinha americana"]
    },
    {
      nome: "2 Dormitórios",
      area: "65m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      planta: "/empreendimentos/botanique/plantas/Planta 2 dormi.jpg",
      características: ["Varanda gourmet", "Cozinha americana", "Living integrado"]
    },
    {
      nome: "3 Dormitórios",
      area: "85m²",
      quartos: 3,
      banheiros: 2,
      vagas: 1,
      planta: "/empreendimentos/botanique/plantas/Planta 3 dormi.jpg",
      características: ["Suíte", "Varanda gourmet", "Cozinha americana"]
    },
    {
      nome: "Duplex 2 Dormitórios",
      area: "120m²",
      quartos: 2,
      banheiros: 2,
      vagas: 2,
      planta: "/empreendimentos/botanique/plantas/cobertura duplex 1 piso.jpg",
      características: ["Terraço privativo", "2 vagas", "Duplex"]
    }
  ],
  
  // Pontos de interesse
  pontosInteresse: [
    "Rodovia Raposo Tavares - Acesso direto",
    "Shopping Iguatemi Esplanada - 8km",
    "Shopping Granja Vianna - 6km", 
    "Hospital Albert Einstein - 12km",
    "Colégio Rio Branco - 5km",
    "Escolas da região - 2-3km",
    "Supermercados - 1-2km",
    "Farmácias - 1km"
  ],
  
  // Lazer e comodidades
  lazer: [
    "Piscina adulto e infantil",
    "Espaço grill equipado",
    "Salão de festas",
    "Playground completo",
    "Quadra recreativa",
    "Varanda gourmet nos apartamentos",
    "Cozinha americana integrada"
  ],
  
  // Segurança
  seguranca: [
    "Condomínio totalmente fechado",
    "Portaria com controle de acesso",
    "Monitoramento e segurança 24h",
    "Áreas comuns cercadas por paisagismo"
  ],
  
  // Diferenciais de investimento
  investimento: [
    "Região em constante crescimento",
    "Potencial de valorização",
    "Novos empreendimentos na Raposo Tavares",
    "Ideal para viver ou investir"
  ]
}

export default function BotaniquePage() {
  // Scroll automático para a hero section se a URL contiver #hero
  useEffect(() => {
    if (window.location.hash === '#hero') {
      setTimeout(() => {
        const heroSection = document.getElementById('hero')
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header com botão voltar */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/empreendimentos">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Empreendimentos
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-[80vh] overflow-hidden">
        <Image
          src={botanique.imagens.hero}
          alt={botanique.nome}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{botanique.nome}</h1>
            <p className="text-xl md:text-2xl mb-6 font-light">{botanique.slogan}</p>
            <p className="text-lg mb-8 opacity-90">{botanique.subtitulo}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                <Phone className="h-5 w-5 mr-2" />
                Quero saber mais
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
                Agendar visita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Conheça o Botanique */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Conheça o {botanique.nome}
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {botanique.descricao}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{botanique.unidades}</div>
                  <div className="text-sm text-gray-600">Unidades</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{botanique.torres}</div>
                  <div className="text-sm text-gray-600">Torres</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{botanique.areaVerde}</div>
                  <div className="text-sm text-gray-600">Área Verde</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">24h</div>
                  <div className="text-sm text-gray-600">Segurança</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={botanique.imagens.fachada}
                alt="Fachada do Botanique"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Abas de Informações */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Informações do Empreendimento
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Conheça todos os detalhes que fazem do Botanique um lugar especial para sua família.
            </p>
          </div>

          <Tabs defaultValue="localizacao" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="localizacao" className="text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Localização
              </TabsTrigger>
              <TabsTrigger value="lazer" className="text-sm">
                <Waves className="h-4 w-4 mr-2" />
                Lazer
              </TabsTrigger>
              <TabsTrigger value="seguranca" className="text-sm">
                <Shield className="h-4 w-4 mr-2" />
                Segurança
              </TabsTrigger>
              <TabsTrigger value="investimento" className="text-sm">
                <Building className="h-4 w-4 mr-2" />
                Investimento
              </TabsTrigger>
            </TabsList>

            <TabsContent value="localizacao" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Localização Privilegiada</h3>
                  <p className="text-gray-600 mb-8">
                    {botanique.endereco}. Acesso fácil à Rodovia Raposo Tavares e próximo aos principais serviços da região.
                  </p>
                  <div className="space-y-3">
                    {botanique.pontosInteresse.map((ponto, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{ponto}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={botanique.imagens.vistaAerea}
                    alt="Vista aérea da localização"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="lazer" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Lazer e Comodidades</h3>
                  <p className="text-gray-600 mb-8">
                    Infraestrutura completa de lazer para toda a família, com piscina, playground e áreas gourmet.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {botanique.lazer.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {botanique.lazerGaleria.slice(0, 4).map((img, index) => (
                    <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="seguranca" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Segurança e Exclusividade</h3>
                  <p className="text-gray-600 mb-8">
                    Condomínio totalmente fechado com sistema completo de segurança para sua tranquilidade.
                  </p>
                  <div className="space-y-4">
                    {botanique.seguranca.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                        <Shield className="h-6 w-6 text-blue-600" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={botanique.imagens.fachada}
                    alt="Fachada com segurança"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="investimento" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Investimento Valorizado</h3>
                  <p className="text-gray-600 mb-8">
                    Região em constante crescimento com potencial de valorização. Ideal para viver ou investir.
                  </p>
                  <div className="space-y-4">
                    {botanique.investimento.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
                        <Building className="h-6 w-6 text-yellow-600" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white">
                    <h4 className="text-xl font-bold mb-2">VGV do Projeto</h4>
                    <p className="text-3xl font-bold">{botanique.vgv}</p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={botanique.imagens.implantacao}
                    alt="Implantação do projeto"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Galeria do Empreendimento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Galeria do Empreendimento
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {botanique.lazerGaleria.map((img, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">{img.titulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ficha Técnica */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Ficha Técnica
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Área do terreno</span>
                    <span className="text-gray-600">{botanique.terreno}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Área verde preservada</span>
                    <span className="text-gray-600">{botanique.areaVerde}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Torres</span>
                    <span className="text-gray-600">{botanique.torres} torres de {botanique.andares} andares</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Total de unidades</span>
                    <span className="text-gray-600">{botanique.unidades} apartamentos</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Tipologias</span>
                    <span className="text-gray-600">1, 2 e 3 dorms + Duplex</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">VGV</span>
                    <span className="text-gray-600">{botanique.vgv}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Segurança</span>
                    <span className="text-gray-600">Portaria 24h</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Incorporação</span>
                    <span className="text-gray-600">{botanique.incorporacao}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Garanta sua unidade no Botanique
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Preencha abaixo e nosso consultor entrará em contato para apresentar todas as condições especiais.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Conte-nos sobre seu interesse..."
                  />
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Aceito receber novidades por e-mail e WhatsApp
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                >
                  Enviar e agendar visita
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
