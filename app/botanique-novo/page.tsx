import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { botaniqueData } from "@/lib/data/botanique-data"
import type { Empreendimento } from "@/lib/types/empreendimento"
import type { Metadata } from "next"

// Converter dados do Botanique para interface Empreendimento
const botaniqueEmpreendimento: Empreendimento = {
  // Identificação
  id: 1,
  slug: botaniqueData.slug,
  nome: botaniqueData.nome,
  subtitulo: botaniqueData.subtitulo,
  slogan: botaniqueData.slogan,

  // Localização
  localizacao: "Chácara Roselândia, Cotia - SP",
  bairro: "Chácara Roselândia",
  endereco: {
    rua: "Estr. Ribeirão",
    numero: "550",
    bairro: "Chácara Roselândia",
    cidade: "Cotia",
    estado: "SP",
    cep: "06700-000",
  },
  coordenadas: {
    lat: -23.6055,
    lng: -46.9185,
  },
  pontos_interesse: [
    { nome: "Shopping Iguatemi Esplanada", distancia: "8km", tipo: "shopping" },
    { nome: "Shopping Granja Vianna", distancia: "6km", tipo: "shopping" },
    { nome: "Hospital Albert Einstein", distancia: "12km", tipo: "saude" },
    { nome: "Colégio Rio Branco", distancia: "5km", tipo: "educacao" },
  ],

  // Características básicas
  tipo: "3 dormitórios",
  status: "Entregues",
  area: "65 a 120m²",
  quartos: 3,
  banheiros: 2,
  vagas: 1,

  // Preço e entrega
  preco: 450000,
  precoFormatado: "A partir de R$ 450.000",
  entrega: "2013",

  // Conteúdo
  descricao: botaniqueData.sobre.descricao,
  destaque: "Bosque privativo de 4.500m²",
  diferenciais: ["150 Unidades", "5 Torres", "Bosque de 4.500m²", "Segurança 24h"],

  // Mídia - garantir que galeria seja um array válido
  imagem: botaniqueData.hero.backgroundImage,
  imagemDestaque: botaniqueData.sobre.imagem,
  galeria: botaniqueData.galeria?.imagens?.map((img) => img.src) || [
    "/empreendimentos/botanique/BOTANIQUE_1_FACHADA.jpg",
    "/empreendimentos/botanique/BOTANIQUE_2_VISTA AÉREA FACHADA .jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_3_SALÃO DE FESTAS.jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_4_ESPAÇO GRILL.jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_5_PLAYGROUND.jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_6_VISTA AÉREA.jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_7_IMPLANTAÇÃO.jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_8_PISCINA.jpg",
  ],

  // Identidade visual
  identidadeVisual: {
    logo: botaniqueData.hero?.logo || "/empreendimentos/botanique/logo-botanique.png",
    corPrimaria: botaniqueData.tema?.corPrimaria || "#2D5A27",
    corSecundaria: botaniqueData.tema?.corSecundaria || "#4A7C59",
    imagemBackground: botaniqueData.hero?.backgroundImage || "/empreendimentos/botanique/1 - VITRINE_BOTANIQUE.jpg",
  },

  // Dados técnicos
  plantas: botaniqueData.plantas?.tipologias?.map((tip, index) => ({
    id: index + 1,
    tipo: tip.nome,
    area: tip.area,
    quartos: tip.quartos,
    banheiros: tip.banheiros,
    vagas: tip.vagas,
    imagem: tip.planta,
    preco: "Consulte valores",
    descricao: tip.caracteristicas?.join(", ") || "",
    destaque: index === 0,
  })) || [
    {
      id: 1,
      tipo: "2 Dormitórios",
      area: "65m²",
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      imagem: "/empreendimentos/botanique/plantas/Planta 2 dormi.jpg",
      preco: "Consulte valores",
      descricao: "Apartamento com 2 dormitórios, sala, cozinha e área de serviço",
      destaque: true,
    },
    {
      id: 2,
      tipo: "3 Dormitórios",
      area: "85m²",
      quartos: 3,
      banheiros: 2,
      vagas: 1,
      imagem: "/empreendimentos/botanique/plantas/Planta 3 dormi.jpg",
      preco: "Consulte valores",
      descricao: "Apartamento com 3 dormitórios, sala, cozinha e área de serviço",
      destaque: false,
    },
  ],
  especificacoes: {
    unidades: "150 unidades",
    andares: "5 andares",
    elevadores: "2 elevadores por torre",
    entrega: "Concluído em 2013",
  },

  // Metadados
  destacado: true,
  ativo: true,
  tags: ["concluido", "cotia", "bosque"],
  categoria: ["residencial", "condominio-fechado"],
}

export const metadata: Metadata = {
  title: botaniqueData.seo?.title || "Botanique Novo - Elleven Engenharia",
  description: botaniqueData.seo?.description || "Empreendimento residencial em Cotia com bosque privativo",
  keywords: botaniqueData.seo?.keywords || "apartamento, cotia, bosque, residencial",
  openGraph: {
    title: botaniqueData.seo?.ogTitle || "Botanique Novo - Elleven Engenharia",
    description: botaniqueData.seo?.ogDescription || "Empreendimento residencial em Cotia com bosque privativo",
    images: [botaniqueData.seo?.ogImage || "/empreendimentos/botanique/1 - VITRINE_BOTANIQUE.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: botaniqueData.seo?.ogTitle || "Botanique Novo - Elleven Engenharia",
    description: botaniqueData.seo?.ogDescription || "Empreendimento residencial em Cotia com bosque privativo",
    images: [botaniqueData.seo?.ogImage || "/empreendimentos/botanique/1 - VITRINE_BOTANIQUE.jpg"],
  },
}

export default function BotaniquePage() {
  return <EmpreendimentoPage data={botaniqueEmpreendimento} />
}
