import type { EmpreendimentoData } from "@/lib/types/empreendimento"

export const vertData: EmpreendimentoData = {
  // Identificação
  slug: "vert",
  nome: "Vert Condomínio Residencial",
  subtitulo: "Em Obras",
  slogan: "Um novo jeito de viver com qualidade e segurança",

  // Localização
  localizacao: "Itu, São Paulo - SP",
  endereco: {
    rua: "Rua das Flores",
    numero: "500",
    bairro: "Centro",
    cidade: "Itu",
    estado: "SP",
    cep: "13300-000",
  },

  // Características básicas
  tipo: "Residencial",
  status: "Em Obras",
  area: "42m² a 85m²",
  quartos: 2,
  vagas: 1,
  entrega: "2026",
  precoFormatado: "A partir de R$ 280.000",

  // Conteúdo principal
  descricao:
    "O Vert foi projetado com um único objetivo: elevar a qualidade de vida da sua família. Desde o terreno escolhido até os mínimos detalhes das áreas comuns e das plantas residenciais, tudo foi pensado para garantir conforto, praticidade e segurança. Um condomínio fechado com portaria 24h, diversos itens de lazer e apartamentos que oferecem o espaço ideal para viver com tranquilidade.",

  // Diferenciais
  diferenciais: [
    "Condomínio fechado com portaria 24h",
    "5 torres com 5 andares cada",
    "150 apartamentos com plantas otimizadas",
    "Quadra de street ball exclusiva",
    "Localização privilegiada em Itu",
    "Áreas paisagísticas para convivência",
  ],

  // Mídia
  imagem: "/empreendimentos/vert/galeria/fachada.png",
  imagemDestaque: "/empreendimentos/vert/hero-background.png",
  galeria: [
    "/empreendimentos/vert/galeria/fachada.png",
    "/empreendimentos/vert/galeria/salao-festas.png",
    "/empreendimentos/vert/galeria/espaco-grill.png",
    "/empreendimentos/vert/galeria/piscina.png",
    "/empreendimentos/vert/galeria/playground.png",
    "/empreendimentos/vert/galeria/vista-aerea.png",
  ],

  // Identidade visual
  identidadeVisual: {
    logo: "/empreendimentos/logos/logo-vert.png",
    corPrimaria: "#22C55E", // Verde vibrante
    corSecundaria: "#16A34A", // Verde escuro
    imagemBackground: "/empreendimentos/vert/hero-background.png",
  },

  // Plantas
  plantas: [
    {
      id: 1,
      tipo: "1 Dormitório",
      area: "42m²",
      quartos: 1,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/vert/plantas/planta-1dorm.png",
      preco: "A partir de R$ 280.000",
      descricao: "Apartamento compacto e funcional",
    },
    {
      id: 2,
      tipo: "2 Dormitórios",
      area: "47m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/vert/plantas/planta-2dorm-47.png",
      preco: "A partir de R$ 320.000",
      descricao: "Apartamento com boa distribuição",
    },
    {
      id: 3,
      tipo: "2 Dormitórios Plus",
      area: "50m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/vert/plantas/planta-2dorm-50.png",
      preco: "A partir de R$ 350.000",
      descricao: "Apartamento mais amplo",
    },
    {
      id: 4,
      tipo: "Cobertura Duplex",
      area: "85m²",
      quartos: 2,
      banheiros: 2,
      vagas: 2,
      imagem: "/empreendimentos/vert/plantas/planta-duplex.png",
      preco: "A partir de R$ 480.000",
      descricao: "Cobertura duplex com terraço",
      destaque: true,
    },
  ],

  // Especificações técnicas
  especificacoes: {
    unidades: "150 apartamentos",
    andares: "5 torres de 5 andares",
    elevadores: "1 elevador por torre",
    entrega: "2026",
  },

  // Pontos de interesse
  pontos_interesse: [
    { nome: "Shopping Itu", distancia: "1.5km", tipo: "comercio" },
    { nome: "Escolas", distancia: "500m", tipo: "educacao" },
    { nome: "Hospital", distancia: "2km", tipo: "saude" },
    { nome: "Centro de Itu", distancia: "1km", tipo: "comercio" },
  ],

  // Seções da página
  secoes: {
    hero: {
      titulo: "Um novo jeito de viver com qualidade e segurança",
      subtitulo: "Condomínio fechado com lazer completo em Itu",
      imagem: "/empreendimentos/vert/hero-background.png",
      ctas: ["Saiba Mais", "Agende uma Visita", "Quero Meu Vert"],
    },
    sobre: {
      titulo: "Conheça o Vert",
      conteudo:
        "O Vert foi projetado com um único objetivo: elevar a qualidade de vida da sua família. Desde o terreno escolhido até os mínimos detalhes das áreas comuns e das plantas residenciais, tudo foi pensado para garantir conforto, praticidade e segurança.",
      imagem: "/empreendimentos/vert/sobre-image.png",
    },
    informacoes: {
      localizacao: {
        titulo: "Localização Privilegiada",
        descricao: "Localizado em Itu, próximo a shoppings, escolas, supermercados, hospitais e muito mais.",
        imagem: "/empreendimentos/vert/localizacao.png",
      },
      lazer: {
        titulo: "Lazer Completo",
        descricao: "Piscina, quadra de street ball, salão de festas, espaço grill, playground e áreas paisagísticas.",
        imagem: "/empreendimentos/vert/lazer.png",
        itens: [
          "Piscina",
          "Quadra de street ball",
          "Salão de festas",
          "Espaço grill",
          "Playground",
          "Portaria com controle de acesso",
          "Áreas paisagísticas para convivência",
        ],
      },
      seguranca: {
        titulo: "Segurança 24h",
        descricao: "Condomínio fechado com portaria e segurança 24h, monitoramento e controle de visitantes.",
        imagem: "/empreendimentos/vert/seguranca.png",
      },
      investimento: {
        titulo: "Investimento Valorizado",
        descricao: "Localização estratégica em Itu, cidade em crescimento e alta valorização imobiliária.",
        imagem: "/empreendimentos/vert/investimento.png",
      },
    },
  },

  // SEO
  seo: {
    title: "Vert Itu - Condomínio fechado com lazer e segurança",
    description:
      "Conheça o Vert em Itu. Apartamentos de 1 e 2 dormitórios e coberturas duplex com lazer completo, segurança 24h e localização privilegiada.",
    keywords: "vert itu, apartamentos itu, condomínio fechado itu, morar em itu sp, lazer completo itu",
    ogTitle: "Vert Condomínio Residencial - Viva com qualidade",
    ogDescription:
      "Apartamentos em Itu com piscina, quadra, salão de festas e muito mais. Segurança e bem-estar para toda a família.",
    ogImage: "/empreendimentos/vert/og-image.png",
  },
}
