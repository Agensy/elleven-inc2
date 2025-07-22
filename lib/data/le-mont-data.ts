import type { Empreendimento } from "@/lib/types/empreendimento"

export const leMontData: Empreendimento = {
  // Identificação básica
  id: 1,
  slug: "le-mont-novo",
  nome: "Le Mont",
  subtitulo: "CONDOMÍNIO RESIDENCIAL",
  slogan: "Um novo conceito de morar bem",

  // Localização
  localizacao: "Cotia - SP",
  bairro: "Jardim Isis",
  coordenadas: {
    lat: -23.6036,
    lng: -46.9195
  },

  // Características básicas
  tipo: "Residencial",
  status: "Entregues",
  entrega: "2016",
  area: "18.000 m²",
  quartos: 3,
  banheiros: 2,
  vagas: 1,
  preco: 0,
  ativo: true,

  // Preços
  precoFormatado: "Consulte valores",

  // Descrição
  descricao:
    "O Condomínio Le Mont foi cuidadosamente planejado para proporcionar qualidade de vida à sua família, com segurança 24 horas e uma ampla área verde preservada. Oferece diversas opções de lazer para todas as idades, incluindo piscina adulto e infantil, quadra recreativa, salão de festas, playground e espaço grill. Tudo isso aliado a um projeto moderno e funcional. Localizado em Cotia, o Le Mont fica próximo a escolas, creches, supermercados e comércio em geral, dentro de um raio de até 2 km, além da proximidade com o Parque Aquático Thermas da Mata e o Animália Park.",

  // Imagens - usando padrão defensivo com fallbacks
  imagem:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20-%20VITRINE_LE%20MONT%201-tpzwlGlJbz53ZZYI1khTDNV2R5Dxe7.jpeg",
  imagemDestaque:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEMONT%201_FACHADAS-2zt9M2rb41LBAyeen7CpyxSCuR3Q2z.webp",
  galeria: [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEMONT%201_FACHADAS-2zt9M2rb41LBAyeen7CpyxSCuR3Q2z.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEMONT%201_PISCINA-OtF5QcSuKya0e6xDVehAUSh3xzRDzJ.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEMONT%201_SALA%CC%83O%20DE%20FESTAS-4iqlif3UDbmCRp09xKkntbTmddWvu0.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEMONT%201_PLAYGROUND-ujnePjKNufZSYyflgWHBklKJBGCwBt.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEMONT%201_CHURRASQUEIRA-1MbLkdo7Y5z8iWYjifh432hFcNEiT9.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEMONT%201_QUADRA-j1W459I6qnEs7zUOIz6aJcYmBkMwNt.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEMONT%201_TERRAC%CC%A7O-Zm10D4C7qDuA1mHasgVKJxIK2VDOEY.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEMONT%201_PORTARIA-aKeb6fAFvuXYJyVTgYWaAPnGK7Cwb7.webp",
  ],

  // Identidade Visual
  identidadeVisual: {
    logo: "/empreendimentos/logos/logo-le-mont-1-circle.png",
    imagemBackground:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20-%20VITRINE_LE%20MONT%201-tpzwlGlJbz53ZZYI1khTDNV2R5Dxe7.jpeg",
    corPrimaria: "#2F4F2F",
    corSecundaria: "#6B8E23"
  },

  // Campos obrigatórios adicionais
  tags: ["residencial", "condomínio", "cotia"],
  categoria: ["apartamento", "residencial"],

  // Diferenciais
  diferenciais: [
    "Piscina adulto e infantil",
    "Quadra poliesportiva",
    "Salão de festas completo",
    "Playground infantil",
    "Espaço grill com churrasqueira",
    "Área verde preservada",
    "Terraço gourmet",
    "Portaria 24 horas",
    "Condomínio fechado",
  ],

  // Pontos de Interesse
  pontos_interesse: [
    {
      nome: "Escolas e creches",
      distancia: "2 km",
      tipo: "educacao",
    },
    {
      nome: "Supermercados",
      distancia: "1,5 km",
      tipo: "comercio",
    },
    {
      nome: "Thermas da Mata",
      distancia: "5 km",
      tipo: "lazer",
    },
    {
      nome: "Animália Park",
      distancia: "8 km",
      tipo: "lazer",
    },
    {
      nome: "Shopping Granja Viana",
      distancia: "12 km",
      tipo: "comercio",
    },
  ],

  // Plantas - usando padrão defensivo
  plantas: [
    {
      id: 1,
      tipo: "1 Dormitório",
      area: "30,21 m²",
      quartos: 1,
      banheiros: 1,
      vagas: 1,
      imagem: "/placeholder.svg?height=400&width=300",
      preco: "Consulte valores",
      descricao: "Apartamento compacto com sala integrada, cozinha americana e área de serviço",
      destaque: false,
    },
    {
      id: 2,
      tipo: "2 Dormitórios",
      area: "43,87 m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/placeholder.svg?height=400&width=300",
      preco: "Consulte valores",
      descricao: "Apartamento com 2 dormitórios, sala de estar, cozinha e área de serviço",
      destaque: true,
    },
    {
      id: 3,
      tipo: "2 Dormitórios Plus",
      area: "46,38 m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/placeholder.svg?height=400&width=300",
      preco: "Consulte valores",
      descricao: "Apartamento ampliado com 2 dormitórios e sacada com churrasqueira",
      destaque: false,
    },
    {
      id: 4,
      tipo: "Garden 2 Dormitórios",
      area: "71,88 m²",
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      imagem: "/placeholder.svg?height=400&width=300",
      preco: "Consulte valores",
      descricao: "Unidade garden com acesso exclusivo ao jardim e área externa privativa",
      destaque: true,
    },
    {
      id: 5,
      tipo: "Garden 2 Dormitórios Plus",
      area: "84,53 m²",
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      imagem: "/placeholder.svg?height=400&width=300",
      preco: "Consulte valores",
      descricao: "Garden ampliado com suíte master e área externa generosa",
      destaque: false,
    },
  ],

  // Especificações técnicas
  especificacoes: {
    unidades: "150",
    andares: "5 pavimentos",
    elevadores: "1 por torre",
    entrega: "2016",
  },
}
