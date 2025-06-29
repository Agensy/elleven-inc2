import type { EmpreendimentoData } from "@/lib/types/empreendimento"

export const essenceData: EmpreendimentoData = {
  // Identificação
  nome: "Essence",
  slug: "essence",
  subtitulo: "Em Obras",
  slogan: "Viva a tranquilidade de estar em casa",

  // Localização
  localizacao: "Cotia, São Paulo - SP",
  endereco: {
    rua: "Rua dos Sonetos",
    numero: "26",
    bairro: "Jardim Nova Vida",
    cidade: "Cotia",
    estado: "SP",
    cep: "06717-000",
  },

  // Características básicas
  tipo: "Residencial",
  status: "Em Obras",
  area: "40m² a 112m²",
  quartos: 3,
  vagas: 1,
  entrega: "2026",
  precoFormatado: "A partir de R$ 350.000",

  // Conteúdo principal
  descricao:
    "O Essence é um empreendimento exclusivo em Cotia, projetado para oferecer o equilíbrio perfeito entre design moderno, praticidade e qualidade de vida. Com apartamentos de 2 a 4 dormitórios, incluindo coberturas duplex com terraços amplos, o Essence traz espaços planejados para você viver com conforto e estilo.",

  // Diferenciais
  diferenciais: [
    "180 apartamentos em 6 torres",
    "Apartamentos de 2 a 4 dormitórios",
    "Coberturas duplex com terraços",
    "Piscina adulto e infantil",
    "Academia equipada",
    "Localização privilegiada em Cotia",
  ],

  // Pontos de interesse
  pontos_interesse: [
    { nome: "Centro de Cotia", distancia: "3km", tipo: "comercio" },
    { nome: "Escolas", distancia: "800m", tipo: "educacao" },
    { nome: "Supermercados", distancia: "1km", tipo: "comercio" },
    { nome: "Shopping", distancia: "2km", tipo: "comercio" },
  ],

  // Mídia
  imagem: "/empreendimentos/essence/galeria/fachada.png",
  imagemDestaque: "/empreendimentos/essence/hero-background.png",
  galeria: [
    "/empreendimentos/essence/galeria/fachada.png",
    "/empreendimentos/essence/galeria/condominio.png",
    "/empreendimentos/essence/galeria/piscina.png",
    "/empreendimentos/essence/galeria/salao-festas.png",
    "/empreendimentos/essence/galeria/academia.png",
    "/empreendimentos/essence/galeria/playground.png",
    "/empreendimentos/essence/galeria/espaco-grill.png",
    "/empreendimentos/essence/galeria/quadra.png",
  ],

  // Identidade visual
  identidadeVisual: {
    logo: "/empreendimentos/logos/logo-essence.png",
    corPrimaria: "#F97316", // Orange-500
    corSecundaria: "#3B82F6", // Blue-500
    imagemBackground: "/empreendimentos/essence/hero-background.png",
  },

  // Plantas
  plantas: [
    {
      id: 1,
      tipo: "2 Dormitórios",
      area: "40m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/essence/plantas/planta-2dorm-1.png",
      preco: "A partir de R$ 350.000",
      descricao: "Apartamento compacto e funcional",
    },
    {
      id: 2,
      tipo: "2 Dormitórios Plus",
      area: "45m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/essence/plantas/planta-2dorm-2.png",
      preco: "A partir de R$ 380.000",
      descricao: "Apartamento com melhor distribuição",
    },
    {
      id: 3,
      tipo: "3 Dormitórios",
      area: "55m²",
      quartos: 3,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/essence/plantas/planta-3dorm.png",
      preco: "A partir de R$ 450.000",
      descricao: "Apartamento ideal para famílias",
      destaque: true,
    },
    {
      id: 4,
      tipo: "Cobertura Duplex 3 Dorm",
      area: "85m²",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      imagem: "/empreendimentos/essence/plantas/planta-duplex-3dorm.png",
      preco: "A partir de R$ 650.000",
      descricao: "Cobertura duplex com terraço",
    },
    {
      id: 5,
      tipo: "Cobertura Duplex 4 Dorm",
      area: "112m²",
      quartos: 4,
      banheiros: 2,
      vagas: 2,
      imagem: "/empreendimentos/essence/plantas/planta-duplex-4dorm.png",
      preco: "A partir de R$ 850.000",
      descricao: "Cobertura duplex premium com terraço amplo",
    },
  ],

  // Especificações técnicas
  especificacoes: {
    unidades: "180 apartamentos",
    andares: "6 torres",
    elevadores: "2 elevadores por torre",
    entrega: "2026",
  },

  // Seções da página
  secoes: {
    hero: {
      titulo: "Viva a tranquilidade de estar em casa",
      subtitulo: "O Essence é o espaço ideal para quem busca lazer, conforto e bem-estar em Cotia.",
      imagem: "/empreendimentos/essence/hero-background.png",
      ctas: ["Quero Saber Mais", "Agende sua Visita", "Baixar Catálogo"],
    },
    sobre: {
      titulo: "Conheça o Essence",
      conteudo:
        "O Essence é um empreendimento exclusivo em Cotia, projetado para oferecer o equilíbrio perfeito entre design moderno, praticidade e qualidade de vida. Com apartamentos de 2 a 4 dormitórios, incluindo coberturas duplex com terraços amplos, o Essence traz espaços planejados para você viver com conforto e estilo.",
      imagem: "/empreendimentos/essence/sobre-image.png",
    },
    informacoes: {
      localizacao: {
        titulo: "Localização Privilegiada",
        descricao:
          "Rua dos Sonetos, 26 - Cotia/SP. Próximo a escolas, hospitais, supermercados, shoppings e muito mais.",
        imagem: "/empreendimentos/essence/localizacao.png",
      },
      lazer: {
        titulo: "Lazer Completo",
        descricao:
          "Piscina adulto e infantil, salão de festas, academia equipada, playground, espaço grill e quadra recreativa.",
        imagem: "/empreendimentos/essence/lazer.png",
        itens: [
          "Piscina adulto e infantil",
          "Salão de festas",
          "Academia equipada",
          "Playground",
          "Espaço grill",
          "Quadra recreativa",
        ],
      },
      seguranca: {
        titulo: "Segurança e Exclusividade",
        descricao:
          "Condomínio fechado com controle de acesso, portaria 24h e projeto paisagístico que garante privacidade.",
        imagem: "/empreendimentos/essence/seguranca.png",
      },
      investimento: {
        titulo: "Investimento Valorizado",
        descricao:
          "Localização estratégica em Cotia, com alta demanda imobiliária. Ideal para morar ou investir com retorno garantido.",
        imagem: "/empreendimentos/essence/investimento.png",
      },
    },
  },

  // SEO
  seo: {
    title: "Essence Cotia - Condomínio exclusivo com lazer completo",
    description:
      "Conheça o Essence em Cotia. Apartamentos de 2 a 4 dormitórios, lazer completo com piscina, quadra, salão de festas e academia. Perfeito para sua família!",
    keywords:
      "essence cotia, apartamentos cotia, condomínio com lazer cotia, morar em cotia sp, cobertura duplex cotia",
    ogTitle: "Essence Cotia - Viva o equilíbrio entre lazer e conforto",
    ogDescription:
      "Apartamentos em Cotia com 2 a 4 dormitórios, coberturas duplex, piscina, salão de festas e muito mais. Segurança e comodidade para toda a família.",
    ogImage: "/empreendimentos/essence/og-image.png",
  },
}
