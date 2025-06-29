import type { EmpreendimentoData } from "@/lib/types/empreendimento"

export const montRoyalData: EmpreendimentoData = {
  // Identificação
  slug: "mont-royal",
  nome: "Mont Royal",
  subtitulo: "Em Obras",
  slogan: "Viva a felicidade todos os dias com modernidade, conforto e bem-estar",

  // Localização
  localizacao: "Porto Feliz, São Paulo - SP",
  endereco: {
    rua: "Rua Anita Garibaldi",
    numero: "901",
    bairro: "Jardim Primavera",
    cidade: "Porto Feliz",
    estado: "SP",
    cep: "18540-000",
  },

  // Características básicas
  tipo: "Residencial",
  status: "Em Obras",
  area: "Consulte",
  quartos: 2,
  vagas: 1,
  entrega: "2026",

  // Preço
  precoFormatado: "A partir de R$ 380.000",

  // Conteúdo principal
  descricao: `O Mont Royal foi pensado em cada detalhe para priorizar o bem-estar da sua família. Desde a escolha do terreno até o projeto arquitetônico das unidades e áreas comuns, tudo foi cuidadosamente planejado para oferecer conforto, segurança e praticidade.

Os apartamentos possuem plantas inteligentes, proporcionando espaço, funcionalidade e aconchego, sempre com o foco principal na qualidade de vida. Além disso, o condomínio oferece uma ampla área de lazer com mais de 3.000 m², perfeita para reunir amigos, descansar ou brincar com as crianças.

Localizado em Porto Feliz, o Mont Royal garante fácil acesso a comércios, escolas, supermercados, academias e hospitais, unindo praticidade e valorização do seu investimento.`,

  // Diferenciais
  diferenciais: [
    "7 torres com 168 apartamentos",
    "Mais de 3.000m² de área de lazer",
    "Deck solário com piscinas adulto e infantil",
    "Espaço zen para relaxamento",
    "Redário e praça de convivência",
    "Localização estratégica em Porto Feliz",
  ],

  // Mídia
  imagem: "/empreendimentos/mont-royal/fachada-principal.webp",
  imagemDestaque: "/empreendimentos/mont-royal/hero-background.webp",
  galeria: [
    "/empreendimentos/mont-royal/galeria/fachada.webp",
    "/empreendimentos/mont-royal/galeria/piscina.webp",
    "/empreendimentos/mont-royal/galeria/salao-festas.jpeg",
    "/empreendimentos/mont-royal/galeria/espaco-grill.jpeg",
    "/empreendimentos/mont-royal/galeria/quadra.jpeg",
    "/empreendimentos/mont-royal/galeria/deck-solario.jpeg",
  ],

  // Identidade visual
  identidadeVisual: {
    logo: "/empreendimentos/logos/logo-mont-royal.png",
    corPrimaria: "#1F2937", // Preto elegante
    corSecundaria: "#10B981", // Verde
    imagemBackground: "/empreendimentos/mont-royal/hero-background.webp",
  },

  // Plantas
  plantas: [
    {
      id: 1,
      tipo: "2 Dormitórios - Tipo 1",
      area: "45m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/mont-royal/plantas/planta-tipo-1.jpeg",
      preco: "A partir de R$ 380.000",
      descricao: "Apartamento com 2 dormitórios, sala, cozinha e área de serviço",
      destaque: true,
    },
    {
      id: 2,
      tipo: "2 Dormitórios - Tipo 2",
      area: "47m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/mont-royal/plantas/planta-tipo-2.jpeg",
      preco: "A partir de R$ 390.000",
      descricao: "Apartamento com layout otimizado e sacada",
    },
  ],

  // Especificações técnicas
  especificacoes: {
    unidades: "168 apartamentos",
    andares: "7 torres",
    elevadores: "2 elevadores por torre",
    entrega: "2026",
  },

  // Pontos de interesse
  pontos_interesse: [
    { nome: "Centro de Porto Feliz", distancia: "2km", tipo: "comercio" },
    { nome: "Escolas", distancia: "500m", tipo: "educacao" },
    { nome: "Supermercados", distancia: "800m", tipo: "comercio" },
    { nome: "Hospital", distancia: "1.5km", tipo: "saude" },
  ],

  // Seções da página
  secoes: {
    hero: {
      titulo: "Aqui, sua família encontra o equilíbrio perfeito",
      subtitulo: "Viva a felicidade todos os dias com modernidade, conforto e bem-estar",
      imagem: "/empreendimentos/mont-royal/hero-background.webp",
      ctas: ["Quero Conhecer", "Agende uma Visita", "Baixar Folder"],
    },

    sobre: {
      titulo: "Conheça o Mont Royal",
      conteudo: `O Mont Royal foi pensado em cada detalhe para priorizar o bem-estar da sua família. Desde a escolha do terreno até o projeto arquitetônico das unidades e áreas comuns, tudo foi cuidadosamente planejado para oferecer conforto, segurança e praticidade.

Os apartamentos possuem plantas inteligentes, proporcionando espaço, funcionalidade e aconchego, sempre com o foco principal na qualidade de vida. Além disso, o condomínio oferece uma ampla área de lazer com mais de 3.000 m², perfeita para reunir amigos, descansar ou brincar com as crianças.`,
      imagem: "/empreendimentos/mont-royal/galeria/piscina.webp",
    },

    informacoes: [
      {
        id: "localizacao",
        titulo: "Localização",
        conteudo:
          "Porto Feliz/SP - Próximo a escolas, shopping, supermercados, farmácias, hospitais, academias, restaurantes e bancos.",
        imagem: "/empreendimentos/mont-royal/galeria/fachada.webp",
        icone: "MapPin",
      },
      {
        id: "lazer",
        titulo: "Lazer e Comodidades",
        conteudo:
          "Deck solário com piscina adulto e infantil, quadra recreativa, salão de festas climatizado, espaço grill mobiliado, playground, praça de convivência, espaço zen para leitura e relaxamento, redário.",
        imagem: "/empreendimentos/mont-royal/galeria/deck-solario.jpeg",
        icone: "Waves",
      },
      {
        id: "seguranca",
        titulo: "Segurança e Exclusividade",
        conteudo:
          "Condomínio fechado com portaria 24h, controle rigoroso de acesso e monitoramento, projeto paisagístico que reforça privacidade e exclusividade.",
        imagem: "/empreendimentos/mont-royal/galeria/salao-festas.jpeg",
        icone: "Shield",
      },
      {
        id: "investimento",
        titulo: "Investimento Valorizado",
        conteudo:
          "Excelente localização em Porto Feliz, região em expansão. Potencial de valorização com infraestrutura completa. Ideal para famílias e investidores que buscam liquidez e retorno garantido.",
        imagem: "/empreendimentos/mont-royal/galeria/espaco-grill.jpeg",
        icone: "TrendingUp",
      },
    ],
  },

  // SEO
  seo: {
    title: "Mont Royal Porto Feliz - Condomínio com lazer completo",
    description:
      "Conheça o Mont Royal em Porto Feliz. Apartamentos com 2 dormitórios, piscina, quadra, salão de festas e mais de 3.000 m² de lazer. Viva com conforto e segurança!",
    keywords: ["mont royal porto feliz", "apartamentos porto feliz", "condomínio fechado sp", "morar em porto feliz"],
    ogImage: "/empreendimentos/mont-royal/vitrine-mont-royal.webp",
  },
}
