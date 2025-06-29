import type { EmpreendimentoData } from "@/lib/types/empreendimento"
import { botaniqueData } from "./botanique-data"

export interface EmpreendimentoCompleto {
  id: string
  nome: string
  status: "Concluído" | "Em Construção" | "Parceria"
  tipo: "Residencial" | "Comercial"
  localizacao: {
    endereco: string
    cidade: string
    estado: string
  }
  conclusao: string
  arquiteto: string
  area: string
  descricao: string
  destaques: string[]
  caracteristicas: string[]
  unidades?: number
  torres?: number
  dormitorios?: string
  imagens: {
    vitrine: string
    galeria: string[]
    plantas?: string[]
  }
  logo?: string
}

// Dados centralizados de todos os empreendimentos
export const empreendimentosCompletos: Record<string, EmpreendimentoData> = {
  botanique: botaniqueData,

  grandClubCotia: {
    id: 2,
    slug: "grand-club-cotia",
    nome: "Grand Club Cotia",
    subtitulo: "CONDOMÍNIO RESIDENCIAL",
    slogan: "Viva com estilo e conforto",
    localizacao: "Cotia - SP",
    bairro: "Nakamura Park",
    tipo: "1 e 2 dormitórios",
    status: "Concluído",
    area: "45 a 70m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    preco: 450000,
    precoFormatado: "A partir de R$ 450.000",
    entrega: "2019",
    descricao:
      "O Grand Club Cotia foi projetado para proporcionar um estilo de vida único, onde a flexibilidade e o conforto são prioridades.",
    imagem: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/1 - VITRINE_GRANDCLUB.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FACHADA.jpg",
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PISCINA DECK.jpg",
    ],
    identidadeVisual: {
      logo: "/empreendimentos/logos/logo-grand-club-cotia.png",
      corPrimaria: "#B8860B",
      corSecundaria: "#DAA520",
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FACHADA.jpg",
    },
    plantas: [],
    especificacoes: {
      unidades: "198",
      andares: "8",
      elevadores: "2",
      entrega: "2019",
    },
    coordenadas: { lat: -23.6024, lng: -46.9292 },
    pontos_interesse: [],
    diferenciais: ["198 unidades", "8 Torres", "1 e 2 Dormitórios", "Lazer completo"],
    destacado: true,
    ativo: true,
    tags: ["cotia", "concluido"],
    categoria: ["residencial"],
  },

  icaraiParqueClube: {
    id: 3,
    slug: "icarai-parque-clube",
    nome: "Icaraí Parque Clube",
    subtitulo: "CONDOMÍNIO RESIDENCIAL",
    slogan: "Viva em harmonia com a natureza",
    localizacao: "Salto - SP",
    bairro: "Jardim D'Icaraí",
    tipo: "2 e 3 dormitórios",
    status: "Em Construção",
    area: "65 a 95m²",
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    preco: 580000,
    precoFormatado: "A partir de R$ 580.000",
    entrega: "2026",
    descricao:
      "Um lugar onde o equilíbrio entre qualidade de vida e o encanto da natureza cria o cenário perfeito para o seu novo lar.",
    imagem: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/1 - VITRINE_ICARAÍ.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_TORRES DO ICARAI - FACHADA.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PLAYGROUND.jpg",
    ],
    identidadeVisual: {
      logo: "/empreendimentos/logos/logo-icarai.png",
      corPrimaria: "#8FBC8F",
      corSecundaria: "#98FB98",
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_TORRES DO ICARAI - FACHADA.jpg",
    },
    plantas: [],
    especificacoes: {
      unidades: "408",
      andares: "12",
      elevadores: "3",
      entrega: "2026",
    },
    coordenadas: { lat: -23.2024, lng: -47.2892 },
    pontos_interesse: [],
    diferenciais: ["408 unidades", "4 Torres", "2 e 3 Dormitórios", "Lazer completo"],
    destacado: true,
    ativo: true,
    tags: ["salto", "em-construcao"],
    categoria: ["residencial"],
  },

  leMont: {
    id: 4,
    slug: "le-mont",
    nome: "Le Mont",
    subtitulo: "CONDOMÍNIO RESIDENCIAL",
    slogan: "Elegância e sofisticação",
    localizacao: "Cotia - SP",
    bairro: "Jardim Ísis",
    tipo: "1 e 2 dormitórios",
    status: "Concluído",
    area: "45 a 65m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    preco: 420000,
    precoFormatado: "A partir de R$ 420.000",
    entrega: "2016",
    descricao: "O Condomínio Le Mont foi cuidadosamente projetado para proporcionar qualidade de vida à sua família.",
    imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT/1 - VITRINE_LE MONT 1.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_FACHADAS.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_PISCINA.jpg",
    ],
    identidadeVisual: {
      logo: "/empreendimentos/logos/logo-le-mont-1-circle.png",
      corPrimaria: "#2F4F2F",
      corSecundaria: "#6B8E23",
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_FACHADAS.jpg",
    },
    plantas: [],
    especificacoes: {
      unidades: "150",
      andares: "6",
      elevadores: "2",
      entrega: "2016",
    },
    coordenadas: { lat: -23.6024, lng: -46.9292 },
    pontos_interesse: [],
    diferenciais: ["150 unidades", "5 Torres", "1 e 2 Dormitórios", "Unidades Garden"],
    destacado: true,
    ativo: true,
    tags: ["cotia", "concluido"],
    categoria: ["residencial"],
  },

  leMont2: {
    id: 5,
    slug: "le-mont-2",
    nome: "Le Mont 2",
    subtitulo: "CONDOMÍNIO RESIDENCIAL",
    slogan: "Continuidade da excelência",
    localizacao: "Cotia - SP",
    bairro: "Jardim Ísis",
    tipo: "1, 2 e 3 dormitórios",
    status: "Concluído",
    area: "45 a 85m²",
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    preco: 480000,
    precoFormatado: "A partir de R$ 480.000",
    entrega: "2017",
    descricao:
      "O Condomínio Le Mont 2 foi planejado com atenção aos detalhes, focado na qualidade de vida de sua família.",
    imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/1 - VITRINE_LE MONT 2.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_FACHADA.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_PISCINA.jpg",
    ],
    identidadeVisual: {
      logo: "/empreendimentos/logos/logo-le-mont-2.png",
      corPrimaria: "#FF8C00",
      corSecundaria: "#FFA500",
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_FACHADA.jpg",
    },
    plantas: [],
    especificacoes: {
      unidades: "120",
      andares: "8",
      elevadores: "2",
      entrega: "2017",
    },
    coordenadas: { lat: -23.6024, lng: -46.9292 },
    pontos_interesse: [],
    diferenciais: ["120 unidades", "4 Torres", "1, 2 e 3 Dormitórios", "Área de lazer completa"],
    destacado: true,
    ativo: true,
    tags: ["cotia", "concluido"],
    categoria: ["residencial"],
  },

  // Novos empreendimentos com as logos recebidas
  vilaKoty: {
    id: 6,
    slug: "vila-koty",
    nome: "Vila Koty",
    subtitulo: "CONDOMÍNIO RESIDENCIAL",
    slogan: "Estilo tropical e sofisticação",
    localizacao: "Cotia - SP",
    bairro: "Granja Viana",
    tipo: "2 e 3 dormitórios",
    status: "Lançamento",
    area: "70 a 110m²",
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    preco: 750000,
    precoFormatado: "A partir de R$ 750.000",
    entrega: "2025",
    descricao:
      "Vila Koty combina o charme tropical com a sofisticação urbana, oferecendo um estilo de vida único em Cotia.",
    imagem: "/placeholder.svg?height=400&width=600",
    galeria: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    identidadeVisual: {
      logo: "/empreendimentos/logos/logo-vila-koty.png",
      corPrimaria: "#D4AF37",
      corSecundaria: "#F4E4BC",
      imagemBackground: "/placeholder.svg?height=600&width=800",
    },
    plantas: [],
    especificacoes: {
      unidades: "80",
      andares: "4",
      elevadores: "1",
      entrega: "2025",
    },
    coordenadas: { lat: -23.6024, lng: -46.9292 },
    pontos_interesse: [],
    diferenciais: ["Design tropical", "Área gourmet", "Piscina resort", "Localização premium"],
    destacado: true,
    ativo: true,
    tags: ["cotia", "lancamento", "tropical"],
    categoria: ["residencial"],
  },

  valinhos: {
    id: 7,
    slug: "valinhos",
    nome: "Valinhos",
    subtitulo: "CONDOMÍNIO RESIDENCIAL",
    slogan: "Simplicidade e elegância",
    localizacao: "Valinhos - SP",
    bairro: "Centro",
    tipo: "2 e 3 dormitórios",
    status: "Em Construção",
    area: "65 a 90m²",
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    preco: 520000,
    precoFormatado: "A partir de R$ 520.000",
    entrega: "2025",
    descricao: "Empreendimento que valoriza a simplicidade e elegância, localizado no coração de Valinhos.",
    imagem: "/placeholder.svg?height=400&width=600",
    galeria: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    identidadeVisual: {
      logo: "/empreendimentos/logos/logo-valinhos.png",
      corPrimaria: "#2F4F2F",
      corSecundaria: "#6B8E23",
      imagemBackground: "/placeholder.svg?height=600&width=800",
    },
    plantas: [],
    especificacoes: {
      unidades: "96",
      andares: "6",
      elevadores: "2",
      entrega: "2025",
    },
    coordenadas: { lat: -22.9711, lng: -46.9956 },
    pontos_interesse: [],
    diferenciais: ["Design clean", "Localização central", "Acabamentos premium", "Área verde"],
    destacado: true,
    ativo: true,
    tags: ["valinhos", "em-construcao", "moderno"],
    categoria: ["residencial"],
  },

  vert: {
    id: 8,
    slug: "vert",
    nome: "Vert",
    subtitulo: "CONDOMÍNIO RESIDENCIAL",
    slogan: "Viva verde, viva melhor",
    localizacao: "São Paulo - SP",
    bairro: "Vila Madalena",
    tipo: "1 e 2 dormitórios",
    status: "Lançamento",
    area: "45 a 70m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    preco: 680000,
    precoFormatado: "A partir de R$ 680.000",
    entrega: "2026",
    descricao: "Vert representa a harmonia perfeita entre vida urbana e sustentabilidade, no coração da Vila Madalena.",
    imagem: "/placeholder.svg?height=400&width=600",
    galeria: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    identidadeVisual: {
      logo: "/empreendimentos/logos/logo-vert.png",
      corPrimaria: "#228B22",
      corSecundaria: "#32CD32",
      imagemBackground: "/placeholder.svg?height=600&width=800",
    },
    plantas: [],
    especificacoes: {
      unidades: "64",
      andares: "8",
      elevadores: "2",
      entrega: "2026",
    },
    coordenadas: { lat: -23.5505, lng: -46.6333 },
    pontos_interesse: [],
    diferenciais: ["Sustentabilidade", "Jardins verticais", "Coworking", "Vila Madalena"],
    destacado: true,
    ativo: true,
    tags: ["sao-paulo", "lancamento", "sustentavel"],
    categoria: ["residencial"],
  },

  quartier: {
    id: 9,
    slug: "quartier",
    nome: "Quartier",
    subtitulo: "RESIDENCIAL CLUBE",
    slogan: "Exclusividade e requinte",
    localizacao: "São Paulo - SP",
    bairro: "Moema",
    tipo: "3 e 4 dormitórios",
    status: "Lançamento",
    area: "95 a 140m²",
    quartos: 4,
    banheiros: 3,
    vagas: 2,
    preco: 1200000,
    precoFormatado: "A partir de R$ 1.200.000",
    entrega: "2026",
    descricao: "Quartier oferece o máximo em exclusividade e requinte, com infraestrutura de clube em Moema.",
    imagem: "/placeholder.svg?height=400&width=600",
    galeria: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    identidadeVisual: {
      logo: "/empreendimentos/logos/logo-quartier.png",
      corPrimaria: "#8B0000",
      corSecundaria: "#DC143C",
      imagemBackground: "/placeholder.svg?height=600&width=800",
    },
    plantas: [],
    especificacoes: {
      unidades: "48",
      andares: "12",
      elevadores: "3",
      entrega: "2026",
    },
    coordenadas: { lat: -23.5505, lng: -46.6333 },
    pontos_interesse: [],
    diferenciais: ["Spa completo", "Wine bar", "Concierge", "Alto padrão"],
    destacado: true,
    ativo: true,
    tags: ["sao-paulo", "lancamento", "luxo"],
    categoria: ["residencial"],
  },
}

// Função para buscar empreendimento por slug
export function getEmpreendimentoBySlug(slug: string): EmpreendimentoData | null {
  return empreendimentosCompletos[slug] || null
}

// Lista de todos os empreendimentos
export function getAllEmpreendimentos(): EmpreendimentoData[] {
  return Object.values(empreendimentosCompletos)
}

// Export individual para compatibilidade
export { botaniqueData }
