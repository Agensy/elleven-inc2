import type { EmpreendimentoData } from "@/lib/types/empreendimento"

export const grandParcData: EmpreendimentoData = {
  // Identificação
  slug: "grand-parc",
  nome: "Grand Parc",
  subtitulo: "Em Obras",
  slogan: "Você não mora, você vive melhor!",

  // Localização
  localizacao: "Itu, São Paulo - SP",
  endereco: {
    rua: "Rua Luiz Carlos Boni",
    numero: "336",
    bairro: "Rancho Grande",
    cidade: "Itu",
    estado: "SP",
    cep: "13301-000",
  },

  // Características básicas
  tipo: "Residencial",
  status: "Em Obras",
  area: "40m² a 85m²",
  quartos: 3,
  vagas: 2,
  entrega: "2026",

  // Preço
  precoFormatado: "A partir de R$ 380.000",

  // Descrição
  descricao:
    "O Grand Parc foi projetado para oferecer o equilíbrio perfeito entre conforto, segurança e praticidade, em um ambiente exclusivo e cercado por áreas verdes. Localizado em Itu, o condomínio conta com portaria 24h, ampla infraestrutura de lazer e apartamentos com plantas inteligentes que garantem bem-estar para toda a família.",

  // Diferenciais
  diferenciais: [
    "12 torres em terreno de 13.390m²",
    "Portaria 24h com segurança total",
    "Piscina com deck e espaço relax",
    "Pista de caminhada exclusiva",
    "Poço artesiano sustentável",
    "Coberturas duplex com varandas",
  ],

  // Mídia
  imagem: "/empreendimentos/grand-parc/galeria/fachada.webp",
  imagemDestaque: "/empreendimentos/grand-parc/hero-background.webp",
  galeria: [
    "/empreendimentos/grand-parc/galeria/fachada.webp",
    "/empreendimentos/grand-parc/galeria/portaria.webp",
    "/empreendimentos/grand-parc/galeria/piscina.webp",
    "/empreendimentos/grand-parc/galeria/salao-festas.webp",
    "/empreendimentos/grand-parc/galeria/quadra.webp",
    "/empreendimentos/grand-parc/galeria/pista-caminhada.webp",
    "/empreendimentos/grand-parc/galeria/espaco-grill.webp",
    "/empreendimentos/grand-parc/galeria/playground.webp",
    "/empreendimentos/grand-parc/galeria/varanda.webp",
    "/empreendimentos/grand-parc/galeria/suite.webp",
  ],

  // Identidade visual
  identidadeVisual: {
    logo: "/empreendimentos/logos/logo-grand-parc.png",
    corPrimaria: "#059669", // Verde esmeralda
    corSecundaria: "#065F46", // Verde escuro
    imagemBackground: "/empreendimentos/grand-parc/hero-background.webp",
  },

  // Plantas
  plantas: [
    {
      id: 1,
      tipo: "2 Dormitórios - Tipo A",
      area: "40m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/grand-parc/plantas/tipo-a.webp",
      preco: "A partir de R$ 380.000",
      descricao: "Apartamento compacto com sala integrada",
    },
    {
      id: 2,
      tipo: "2 Dormitórios - Tipo B",
      area: "45m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/grand-parc/plantas/tipo-b.webp",
      preco: "A partir de R$ 420.000",
      descricao: "Apartamento com layout otimizado",
      destaque: true,
    },
    {
      id: 3,
      tipo: "Cobertura Duplex",
      area: "85m²",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      imagem: "/empreendimentos/grand-parc/plantas/duplex-superior.webp",
      preco: "A partir de R$ 650.000",
      descricao: "Cobertura duplex com varanda espaçosa",
    },
  ],

  // Especificações técnicas
  especificacoes: {
    unidades: "192 apartamentos",
    andares: "12 torres",
    elevadores: "2 elevadores por torre",
    entrega: "2026",
  },

  // Pontos de interesse
  pontos_interesse: [
    { nome: "Shopping Itu", distancia: "2km", tipo: "comercio" },
    { nome: "Escolas", distancia: "800m", tipo: "educacao" },
    { nome: "Hospital", distancia: "1.5km", tipo: "saude" },
    { nome: "Centro de Itu", distancia: "3km", tipo: "comercio" },
  ],

  // Seções da página
  secoes: {
    hero: {
      titulo: "Você não mora, você vive melhor!",
      subtitulo: "Espaço, sofisticação e qualidade de vida para toda a sua família.",
      imagem: "/empreendimentos/grand-parc/hero-background.webp",
      ctas: ["Quero Conhecer", "Agende uma Visita", "Fale com um Consultor"],
    },

    sobre: {
      titulo: "Conheça o Grand Parc",
      conteudo:
        "O Grand Parc foi projetado para oferecer o equilíbrio perfeito entre conforto, segurança e praticidade, em um ambiente exclusivo e cercado por áreas verdes. Localizado em Itu, o condomínio conta com portaria 24h, ampla infraestrutura de lazer e apartamentos com plantas inteligentes que garantem bem-estar para toda a família. Além disso, o empreendimento conta com poço artesiano, reforçando o compromisso com sustentabilidade e economia.",
      imagem: "/empreendimentos/grand-parc/galeria/suite.webp",
    },

    informacoes: {
      localizacao: {
        titulo: "Localização Privilegiada",
        descricao: "Rua Luiz Carlos Boni, 336 - Rancho Grande - Itu/SP",
        imagem: "/empreendimentos/grand-parc/implantacao.webp",
        pontos: [
          "Shopping",
          "Escolas",
          "Farmácias",
          "Supermercados",
          "Hospitais",
          "Restaurantes",
          "Bancos",
          "Academias",
        ],
      },

      lazer: {
        titulo: "Lazer e Comodidades",
        imagem: "/empreendimentos/grand-parc/galeria/piscina.webp",
        itens: [
          "Piscina com deck e espaço relax",
          "Salão de festas amplo e climatizado",
          "Quadra esportiva",
          "Playground",
          "Espaço grill com mobiliário",
          "Pista de caminhada",
          "Paisagismo com áreas de contemplação",
        ],
      },

      seguranca: {
        titulo: "Segurança e Exclusividade",
        imagem: "/empreendimentos/grand-parc/galeria/portaria.webp",
        itens: [
          "Portaria 24 horas com controle rigoroso de acesso",
          "Condomínio totalmente fechado",
          "Sistema de monitoramento e guarita blindada",
          "Paisagismo que garante discrição",
        ],
      },

      investimento: {
        titulo: "Investimento Valorizado",
        imagem: "/empreendimentos/grand-parc/galeria/varanda.webp",
        itens: [
          "Empreendimento em área de crescimento em Itu",
          "Ideal para famílias e investidores",
          "Segurança patrimonial e liquidez",
          "Infraestrutura completa que potencializa revenda",
        ],
      },
    },
  },

  // SEO
  seo: {
    title: "Grand Parc Itu - Condomínio com lazer completo e segurança",
    description:
      "Viva no Grand Parc em Itu. Apartamentos e duplex com 2 e 3 dormitórios, piscina, salão, quadra e portaria 24h. Qualidade de vida para toda a família.",
    keywords: "grand parc itu, apartamentos itu, condomínio itu, morar em itu, lazer em itu",
    ogTitle: "Grand Parc Itu - Viva com exclusividade e tranquilidade",
    ogDescription:
      "Conheça o Grand Parc. Condomínio fechado em Itu com piscina, espaço grill, pista de caminhada e muito mais. Segurança e bem-estar.",
    ogImage: "/empreendimentos/grand-parc/vitrine-grand-parc.webp",
  },
}
