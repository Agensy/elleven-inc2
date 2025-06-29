import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { botaniqueData } from "@/lib/data/botanique-data"
import { Empreendimento } from "@/lib/types/empreendimento"
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
    cep: "06700-000"
  },
  coordenadas: {
    lat: -23.6055,
    lng: -46.9185
  },
  pontos_interesse: [
    { nome: "Shopping Iguatemi Esplanada", distancia: "8km", tipo: "shopping" },
    { nome: "Shopping Granja Vianna", distancia: "6km", tipo: "shopping" },
    { nome: "Hospital Albert Einstein", distancia: "12km", tipo: "saude" },
    { nome: "Colégio Rio Branco", distancia: "5km", tipo: "educacao" }
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

  // Mídia
  imagem: botaniqueData.hero.backgroundImage,
  imagemDestaque: botaniqueData.sobre.imagem,
  galeria: botaniqueData.galeria.imagens.map(img => img.src),

  // Identidade visual
  identidadeVisual: {
    logo: botaniqueData.hero.logo || "/empreendimentos/botanique/logo-botanique.png",
    corPrimaria: botaniqueData.tema.corPrimaria,
    corSecundaria: botaniqueData.tema.corSecundaria,
    imagemBackground: botaniqueData.hero.backgroundImage
  },

  // Dados técnicos
  plantas: botaniqueData.plantas.tipologias.map((tip, index) => ({
    id: index + 1,
    tipo: tip.nome,
    area: tip.area,
    quartos: tip.quartos,
    banheiros: tip.banheiros,
    vagas: tip.vagas,
    imagem: tip.planta,
    preco: "Consulte valores",
    descricao: tip.caracteristicas.join(", "),
    destaque: index === 0
  })),
  especificacoes: {
    unidades: "150 unidades",
    andares: "5 andares",
    elevadores: "2 elevadores por torre",
    entrega: "Concluído em 2013"
  },

  // Metadados
  destacado: true,
  ativo: true,
  tags: ["concluido", "cotia", "bosque"],
  categoria: ["residencial", "condominio-fechado"]
}

export const metadata: Metadata = {
  title: botaniqueData.seo.title,
  description: botaniqueData.seo.description,
  keywords: botaniqueData.seo.keywords,
  openGraph: {
    title: botaniqueData.seo.ogTitle,
    description: botaniqueData.seo.ogDescription,
    images: [botaniqueData.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: botaniqueData.seo.ogTitle,
    description: botaniqueData.seo.ogDescription,
    images: [botaniqueData.seo.ogImage],
  },
}

export default function BotaniquePage() {
  return <EmpreendimentoPage data={botaniqueEmpreendimento} />
}
