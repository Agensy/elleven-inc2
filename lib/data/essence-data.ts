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
  quartos: 4,
  vagas: 2,
  entrega: "2026",
  precoFormatado: "A partir de R$ 350.000",

  // Conteúdo principal
  descricao:
    "O Essence é um empreendimento exclusivo em Cotia, projetado para oferecer o equilíbrio perfeito entre design moderno, praticidade e qualidade de vida. Com 180 apartamentos distribuídos em 6 torres (Aspen, Bromus, Vetiver, Vitis e Verbena), o Essence oferece apartamentos de 2 a 4 dormitórios, incluindo coberturas duplex com terraços amplos.",

  // Diferenciais
  diferenciais: [
    "180 apartamentos em 6 torres",
    "Apartamentos de 2 a 4 dormitórios",
    "Coberturas duplex com terraços",
    "Piscina adulto e infantil",
    "Academia equipada",
    "Salão de festas com cozinha integrada",
    "Espaço gourmet com churrasqueira",
    "Quadra poliesportiva",
    "Área de convivência",
    "Localização privilegiada em Cotia",
  ],

  // Pontos de interesse
  pontos_interesse: [
    { nome: "Centro de Cotia", distancia: "3km", tipo: "comercio" },
    { nome: "Escolas", distancia: "800m", tipo: "educacao" },
    { nome: "Supermercados", distancia: "1km", tipo: "comercio" },
    { nome: "Shopping Granja Viana", distancia: "5km", tipo: "comercio" },
    { nome: "Estação Granja Viana", distancia: "4km", tipo: "transporte" },
  ],

  // Mídia
  imagem: "/empreendimentos/essence/galeria/fachada.webp",
  imagemDestaque: "/empreendimentos/essence/hero-background.webp",
  galeria: [
    "/empreendimentos/essence/galeria/fachada.webp",
    "/empreendimentos/essence/galeria/piscina.webp",
    "/empreendimentos/essence/galeria/deck-piscina.webp",
    "/empreendimentos/essence/galeria/salao-festas.webp",
    "/empreendimentos/essence/galeria/espaco-grill.webp",
    "/empreendimentos/essence/galeria/quadra.webp",
    "/empreendimentos/essence/galeria/area-convivencia.webp",
  ],

  // Identidade visual
  identidadeVisual: {
    logo: "/empreendimentos/logos/logo-essence.png",
    corPrimaria: "#F97316", // Orange-500
    corSecundaria: "#3B82F6", // Blue-500
    imagemBackground: "/empreendimentos/essence/hero-background.webp",
  },

  // Plantas atualizadas com as imagens reais
  plantas: [
    {
      id: 1,
      tipo: "2 Dormitórios",
      area: "40m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/essence/plantas/planta-2-dormitorios-alt.webp",
      preco: "A partir de R$ 350.000",
      descricao: "Apartamento compacto e funcional com sala integrada",
    },
    {
      id: 2,
      tipo: "2 Dormitórios Plus",
      area: "45m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/essence/plantas/planta-2-dormitorios.webp",
      preco: "A partir de R$ 380.000",
      descricao: "Apartamento com melhor distribuição e varanda",
    },
    {
      id: 3,
      tipo: "3 Dormitórios",
      area: "55m²",
      quartos: 3,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/essence/plantas/planta-3-dormitorios.webp",
      preco: "A partir de R$ 450.000",
      descricao: "Apartamento ideal para famílias com 3 quartos",
      destaque: true,
    },
    {
      id: 4,
      tipo: "Cobertura Duplex 3 Dorm",
      area: "85m²",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      imagem: "/empreendimentos/essence/plantas/planta-duplex-3-dormitorios.webp",
      preco: "A partir de R$ 650.000",
      descricao: "Cobertura duplex com terraço e área gourmet",
    },
    {
      id: 5,
      tipo: "Cobertura Duplex 4 Dorm",
      area: "95m²",
      quartos: 4,
      banheiros: 2,
      vagas: 2,
      imagem: "/empreendimentos/essence/plantas/planta-duplex-4-dormitorios.webp",
      preco: "A partir de R$ 750.000",
      descricao: "Cobertura duplex premium com 4 dormitórios",
    },
    {
      id: 6,
      tipo: "Cobertura Duplex 5 Dorm",
      area: "112m²",
      quartos: 5,
      banheiros: 3,
      vagas: 2,
      imagem: "/empreendimentos/essence/plantas/planta-duplex-5-dormitorios.webp",
      preco: "A partir de R$ 850.000",
      descricao: "Cobertura duplex exclusiva com terraço amplo e 5 dormitórios",
    },
  ],

  // Especificações técnicas
  especificacoes: {
    unidades: "180 apartamentos",
    andares: "6 torres (Aspen, Bromus, Vetiver, Vitis, Verbena)",
    elevadores: "2 elevadores por torre",
    entrega: "2026",
  },

  // Seções da página
  secoes: {
    hero: {
      titulo: "Viva a tranquilidade de estar em casa",
      subtitulo: "O Essence é o espaço ideal para quem busca lazer, conforto e bem-estar em Cotia.",
      imagem: "/empreendimentos/essence/hero-background.webp",
      ctas: ["Quero Saber Mais", "Agende sua Visita", "Baixar Catálogo"],
    },
    sobre: {
      titulo: "Conheça o Essence",
      conteudo:
        "O Essence é um empreendimento exclusivo em Cotia, projetado para oferecer o equilíbrio perfeito entre design moderno, praticidade e qualidade de vida. Com 180 apartamentos distribuídos em 6 torres, o Essence oferece apartamentos de 2 a 4 dormitórios, incluindo coberturas duplex com terraços amplos.",
      imagem: "/empreendimentos/essence/galeria/fachada.webp",
    },
    informacoes: {
      localizacao: {
        titulo: "Localização Privilegiada",
        descricao:
          "Rua dos Sonetos, 26 - Cotia/SP. Próximo a escolas, hospitais, supermercados, shoppings e muito mais.",
        imagem: "/empreendimentos/essence/galeria/area-convivencia.webp",
      },
      lazer: {
        titulo: "Lazer Completo",
        descricao:
          "Piscina adulto e infantil, salão de festas, espaço gourmet, quadra poliesportiva e área de convivência.",
        imagem: "/empreendimentos/essence/galeria/piscina.webp",
        itens: [
          "Piscina adulto e infantil",
          "Salão de festas com cozinha integrada",
          "Espaço gourmet com churrasqueira",
          "Quadra poliesportiva",
          "Área de convivência",
          "Deck com espreguiçadeiras",
        ],
      },
      seguranca: {
        titulo: "Segurança e Exclusividade",
        descricao:
          "Condomínio fechado com controle de acesso, portaria 24h e projeto paisagístico que garante privacidade.",
        imagem: "/empreendimentos/essence/galeria/fachada.webp",
      },
      investimento: {
        titulo: "Investimento Valorizado",
        descricao:
          "Localização estratégica em Cotia, com alta demanda imobiliária. Ideal para morar ou investir com retorno garantido.",
        imagem: "/empreendimentos/essence/implantacao.webp",
      },
    },
  },

  // SEO
  seo: {
    title: "Essence Cotia - Condomínio exclusivo com lazer completo",
    description:
      "Conheça o Essence em Cotia. 180 apartamentos de 2 a 4 dormitórios em 6 torres, lazer completo com piscina, quadra, salão de festas e espaço gourmet. Perfeito para sua família!",
    keywords:
      "essence cotia, apartamentos cotia, condomínio com lazer cotia, morar em cotia sp, cobertura duplex cotia, 6 torres cotia",
    ogTitle: "Essence Cotia - Viva o equilíbrio entre lazer e conforto",
    ogDescription:
      "180 apartamentos em Cotia com 2 a 4 dormitórios, coberturas duplex, piscina, salão de festas, espaço gourmet e muito mais. Segurança e comodidade para toda a família.",
    ogImage: "/empreendimentos/essence/vitrine-essence.webp",
  },
}
