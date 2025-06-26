import type { Empreendimento, OpcoesFilter } from "@/lib/types/empreendimento"

// =============================================================================
// DADOS DOS EMPREENDIMENTOS
// =============================================================================

/**
 * Array principal com todos os empreendimentos
 * Atualmente vazio - adicione novos empreendimentos aqui
 */
export const empreendimentos: Empreendimento[] = [
  {
    id: "jade",
    nome: "Jade",
    slug: "jade",
    subtitulo: "Lançamento",
    slogan: "Sofisticação em cada detalhe",
    localizacao: "Bela Vista, São Paulo",
    status: "Lançamento",
    descricao: "Um empreendimento que redefine o conceito de luxo urbano no coração de São Paulo.",
    precoFormatado: "A partir de R$ 850.000",
    entrega: "2026",
    ativo: true,
    imagem: "/empreendimentos/jade/fachada-jade.webp",
    imagemDestaque: "/empreendimentos/jade/background-jade.jpeg",
    diferenciais: ["Studios de 25 a 40m²", "Localização privilegiada", "Acabamentos premium", "Rooftop exclusivo"],
    identidadeVisual: {
      corPrimaria: "#D4AF37",
      corSecundaria: "#1a1a1a",
      logo: "/empreendimentos/jade/logo-jade.png",
      imagemBackground: "/empreendimentos/jade/background-jade.jpeg",
    },
  },
  {
    id: "obsidian",
    nome: "Obsidian",
    slug: "obsidian",
    subtitulo: "Breve lançamento",
    slogan: "Elegância contemporânea",
    localizacao: "Vila Madalena, São Paulo",
    status: "Breve lançamento",
    descricao: "Arquitetura moderna e design sofisticado em um dos bairros mais desejados de São Paulo.",
    precoFormatado: "A partir de R$ 950.000",
    entrega: "2027",
    ativo: true,
    imagem: "/empreendimentos/obsidian/fachada-obsidian.png",
    imagemDestaque: "/empreendimentos/obsidian/background-obsidian.jpeg",
    diferenciais: ["Apartamentos de 45 a 65m²", "Design contemporâneo", "Área de lazer completa", "Sustentabilidade"],
    identidadeVisual: {
      corPrimaria: "#8B5CF6",
      corSecundaria: "#1e1b4b",
      logo: "/empreendimentos/obsidian/logo-obsidian.png",
      imagemBackground: "/empreendimentos/obsidian/background-obsidian.jpeg",
    },
  },
  {
    id: "icarai-parque-clube",
    nome: "Icaraí Parque Clube",
    slug: "icarai-parque-clube",
    subtitulo: "Em Obras",
    slogan: "Viva em harmonia com a natureza",
    localizacao: "Icaraí, Niterói",
    status: "Em Obras",
    descricao: "Um empreendimento único que combina o melhor da vida urbana com a tranquilidade da natureza.",
    precoFormatado: "A partir de R$ 750.000",
    entrega: "2025",
    ativo: true,
    imagem: "/empreendimentos/icarai-parque-clube/fachadas/ICARAI_TORRES DO ICARAI - FACHADA.jpeg",
    imagemDestaque: "/empreendimentos/icarai-parque-clube/background-icarai-abstract.png",
    diferenciais: [
      "Apartamentos de 60 a 120m²",
      "Vista para a Baía de Guanabara",
      "Clube completo",
      "Área verde preservada",
    ],
    identidadeVisual: {
      corPrimaria: "#10B981",
      corSecundaria: "#065F46",
      logo: "/empreendimentos/icarai-parque-clube/logo-icarai.png",
      imagemBackground: "/empreendimentos/icarai-parque-clube/background-icarai-abstract.png",
    },
  },
  {
    // Identificação
    id: 2,
    nome: "Obsidian",
    slug: "obsidian",
    subtitulo: "BREVE LANÇAMENTO",
    slogan: "Viva a Exclusividade.",

    // Localização
    localizacao: "Pinheiros, São Paulo - SP",
    bairro: "Pinheiros",
    endereco: {
      rua: "Rua Oscar Freire",
      numero: "40",
      bairro: "Pinheiros",
      cidade: "São Paulo",
      estado: "SP",
      cep: "05404-020",
    },
    coordenadas: {
      lat: -23.5625,
      lng: -46.6969,
    },
    pontos_interesse: [
      { nome: "Rua Oscar Freire", distancia: "40m", tipo: "comercio" },
      { nome: "Estação de Metrô Oscar Freire", distancia: "100m", tipo: "transporte" },
      { nome: "Hospital das Clínicas", distancia: "900m", tipo: "saude" },
      { nome: "Rua dos Pinheiros", distancia: "800m", tipo: "comercio" },
      { nome: "Instituto Tomie Ohtake", distancia: "700m", tipo: "comercio" },
    ],

    // Características básicas
    tipo: "1 dormitório",
    status: "Breve lançamento",
    area: "26 a 32m²",
    quartos: 1,
    banheiros: 1,
    vagas: 1,

    // Preço e entrega
    preco: 699000,
    entrega: "2025",

    // Conteúdo
    destaque: "LOCALIZAÇÃO PREMIUM",
    diferenciais: [
      "Localização Premium a 40m da Oscar Freire",
      "Apartamentos de Alto Padrão com design contemporâneo",
      "Sistema de segurança avançado com portaria 24h",
      "Controle de acesso biométrico e fechaduras inteligentes",
      "Sistema de monitoramento digital completo",
      "Wi-Fi nas áreas comuns",
      "Alta demanda para locação de curta temporada",
      "Materiais e acabamentos premium em todos os ambientes",
      "Design inteligente com aproveitamento máximo do espaço",
      "Iluminação natural com amplas janelas",
      "Investimento com valorização constante",
      "41 unidades exclusivas em região nobre",
    ],

    // Mídia - OTIMIZADA
    galeria: [
      "/empreendimentos/obsidian/background-obsidian.jpeg", // Corrigido
      "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
      "/empreendimentos/obsidian/fachadas/fachada 002.jpeg",
      "/empreendimentos/obsidian/fachadas/fachada 003.jpeg",
      "/empreendimentos/obsidian/fachadas/fachada 004.jpeg",
      "/empreendimentos/obsidian/logo-obsidian.png",
    ],

    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Studio de Luxo",
        area: "26 a 32m²",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/obsidian/plantas/studio-26m2.jpg",
        preco: "A partir de R$ 699.000",
        descricao:
          "Apartamento compacto com aproveitamento inteligente de espaço, ampla sala de estar e jantar, cozinha integrada, varanda e banheiro completo.",
        destaque: true,
      },
    ],
    especificacoes: {
      unidades: "41 unidades",
      andares: "A definir",
      elevadores: "A definir",
      entrega: "2025",
    },

    // Metadados
    destacado: true,
    tags: ["Studio", "Alto padrão", "Rooftop", "Tecnologia", "Pinheiros", "Oscar Freire"],
    categoria: ["Residencial", "Lançamento", "Premium", "Pinheiros"],
  },

  {
    // Identificação
    id: 4,
    nome: "Icaraí Parque Clube",
    slug: "icarai-parque-clube",
    subtitulo: "EM OBRAS",
    slogan: "Onde Natureza e Qualidade de Vida se Encontram.",

    // Localização
    localizacao: "Salto, São Paulo - SP",
    bairro: "Jardim D'Icaraí",
    endereco: {
      rua: "Avenida Brasília",
      numero: "739",
      bairro: "Jardim D'Icaraí",
      cidade: "Salto",
      estado: "SP",
      cep: "13320-000",
    },
    coordenadas: {
      lat: -23.2064,
      lng: -47.2896,
    },
    pontos_interesse: [
      { nome: "Centro de Salto", distancia: "2km", tipo: "comercio" },
      { nome: "Rodovia Castello Branco", distancia: "5km", tipo: "transporte" },
      { nome: "Shopping Itu Plaza", distancia: "15km", tipo: "shopping" },
      { nome: "Hospital Municipal de Salto", distancia: "3km", tipo: "saude" },
      { nome: "Estação Ferroviária de Salto", distancia: "4km", tipo: "transporte" },
    ],

    // Características básicas
    tipo: "3 dormitórios",
    status: "Em Obras",
    area: "55.000m²",
    quartos: 3,
    banheiros: 2,
    vagas: 1,

    // Preço e entrega
    preco: 480000,
    entrega: "Novembro 2026",

    // Conteúdo
    destaque: "INFRAESTRUTURA DE CLUBE",
    diferenciais: [
      "55.000m² de área total com muito verde",
      "408 unidades distribuídas em 4 torres modernas",
      "Piscina com raias para natação e área de lazer",
      "Pool bar com mesas e cadeiras para convivência",
      "Quadra de beach tennis profissional",
      "Quadra de tênis oficial",
      "Quadra poliesportiva completa",
      "Bicicletário moderno com suportes verticais",
      "Playground colorido com equipamentos modernos",
      "Praça de convivência com fogueira central",
      "Segurança 24 horas com portaria elegante",
      "Ampla área verde com paisagismo tropical",
    ],

    // Mídia - CORRIGIDA E OTIMIZADA
    galeria: [
      "/empreendimentos/icarai-parque-clube/background-icarai.png",
      "/empreendimentos/icarai-parque-clube/fachadas/ICARAI_TORRES DO ICARAI - FACHADA.jpeg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/1 - VITRINE_ICARAÍ.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_ÁREA DA PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_BEACH TENIS.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_QUADRA DE TENNIS.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_ESPAÇO GOURMET.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PLAYGROUND.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PORTARIA.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_ACADEMIA.jpg",
    ],

    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Apartamento 2 dormitórios",
        area: "58m²",
        quartos: 2,
        banheiros: 2,
        vagas: 1,
        imagem:
          "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_Z 38-icarai-planta-tipo-b-r03-alta-66m-270ef9e269db6fd88396e0ba56f02f2b0c970d4f.jpg",
        preco: "A partir de R$ 480.000",
        descricao: "Apartamento com 2 dormitórios, sala ampla, cozinha integrada, área de serviço e varanda.",
        destaque: false,
      },
      {
        id: 2,
        tipo: "Apartamento 3 dormitórios",
        area: "68m²",
        quartos: 3,
        banheiros: 2,
        vagas: 1,
        imagem:
          "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_Z 38-icarai-planta-tipo-a-r02-alta-75m-b612e3e6b3d5a2124b835d983f60e0771f4a3b4e.jpg",
        preco: "A partir de R$ 580.000",
        descricao: "Apartamento com 3 dormitórios, sendo 1 suíte, sala ampla, cozinha gourmet e varanda.",
        destaque: true,
      },
    ],
    especificacoes: {
      unidades: "408 unidades",
      andares: "4 torres",
      elevadores: "8 elevadores",
      entrega: "Novembro 2026",
    },

    // Metadados
    destacado: true,
    tags: ["Parque", "Clube", "Beach Tennis", "Salto", "SP", "Área Verde"],
    categoria: ["Residencial", "Lançamento", "Clube", "Natureza"],
  },

  {
    // Identificação
    id: 5,
    nome: "Botanique",
    slug: "botanique",
    subtitulo: "CONCLUÍDO",
    slogan: "Vida em Harmonia com a Natureza.",

    // Localização
    localizacao: "Cotia, São Paulo - SP",
    bairro: "Cotia",
    endereco: {
      rua: "Estr. Ribeirão",
      numero: "550",
      bairro: "Chácara Roselândia",
      cidade: "Cotia",
      estado: "SP",
      cep: "06709-015",
    },
    coordenadas: {
      lat: -23.6064,
      lng: -46.9196,
    },
    pontos_interesse: [
      { nome: "Shopping Granja Vianna", distancia: "3km", tipo: "shopping" },
      { nome: "Rodoanel Mário Covas", distancia: "5km", tipo: "transporte" },
      { nome: "Centro de Cotia", distancia: "8km", tipo: "comercio" },
      { nome: "Universidade São Judas", distancia: "10km", tipo: "educacao" },
      { nome: "Hospital Regional de Cotia", distancia: "12km", tipo: "saude" },
    ],

    // Características básicas
    tipo: "2 dormitórios",
    status: "Entregues",
    area: "50 a 85m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,

    // Preço e entrega
    preco: 450000,
    precoFormatado: "A partir de R$ 450.000",
    entrega: "2013",

    // Conteúdo
    descricao:
      "Um condomínio clube cuidadosamente projetado pensando na qualidade de vida de sua família. Localizado em Cotia, o Botanique possui uma extensa área verde preservada de 4.500m², que propicia um agradável contato com a natureza.",
    destaque: "ÁREA VERDE PRESERVADA",
    diferenciais: [
      "Área verde preservada de 4.500m²",
      "Piscina com deck e cascata",
      "Playground completo para crianças",
      "Churrasqueiras com área gourmet",
      "Salão de festas com espaço para TV",
      "Segurança 24 horas",
      "Paisagismo elaborado",
      "Localização privilegiada em Cotia",
    ],

    // Mídia
    imagem: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_1_FACHADA.jpg",
    imagemDestaque: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_1_FACHADA.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/1 - VITRINE_BOTANIQUE.jpg",
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_1_FACHADA.jpg",
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_8_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_5_PLAYGROUND.jpg",
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_4_ESPAÇO GRILL.jpg",
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_3_SALÃO DE FESTAS.jpg",
    ],

    // Identidade visual
    identidadeVisual: {
      logo: "/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_BOTANIQUE.png",
      corPrimaria: "#2E7D32", // Verde natureza
      corSecundaria: "#1B5E20", // Verde escuro
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/1 - VITRINE_BOTANIQUE.jpg",
    },

    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Apartamento 2 dormitórios",
        area: "50m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/Planta 2 dormi.jpg",
        preco: "A partir de R$ 450.000",
        descricao: "Apartamento com 2 dormitórios, sala e cozinha.",
        destaque: false,
      },
      {
        id: 2,
        tipo: "Apartamento 3 dormitórios",
        area: "85m²",
        quartos: 3,
        banheiros: 2,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/Planta 3 dormi.jpg",
        preco: "A partir de R$ 620.000",
        descricao: "Apartamento com 3 dormitórios, sendo 1 suíte, sala ampla e cozinha.",
        destaque: true,
      },
    ],
    especificacoes: {
      unidades: "150 unidades",
      andares: "15 andares",
      elevadores: "5 elevadores",
      entrega: "2013",
    },

    // Metadados
    destacado: false,
    ativo: true,
    tags: ["Área verde", "Natureza", "Família", "Cotia"],
    categoria: ["Residencial", "Concluído", "Clube"],
  },

  {
    // Identificação
    id: 6,
    nome: "Grand Club Cotia",
    slug: "grand-club-cotia",
    subtitulo: "CONCLUÍDO",
    slogan: "Estilo de Vida Único.",

    // Localização
    localizacao: "Cotia, São Paulo - SP",
    bairro: "Cotia",
    endereco: {
      rua: "R. Geraldo Otaviano de Almeida",
      numero: "1025",
      bairro: "Bairro Nakamura Park",
      cidade: "Cotia",
      estado: "SP",
      cep: "06717-140",
    },
    coordenadas: {
      lat: -23.6204,
      lng: -46.9108,
    },
    pontos_interesse: [
      { nome: "Rodoanel Mário Covas", distancia: "2km", tipo: "transporte" },
      { nome: "Shopping Granja Vianna", distancia: "4km", tipo: "shopping" },
      { nome: "Centro de Cotia", distancia: "6km", tipo: "comercio" },
      { nome: "Hospital Regional de Cotia", distancia: "8km", tipo: "saude" },
    ],

    // Características básicas
    tipo: "1 dormitório",
    status: "Entregues",
    area: "35 a 65m²",
    quartos: 1,
    banheiros: 1,
    vagas: 1,

    // Preço e entrega
    preco: 320000,
    precoFormatado: "A partir de R$ 320.000",
    entrega: "2019",

    // Conteúdo
    descricao:
      "O GRAND CLUB COTIA foi projetado para proporcionar um estilo de vida único, onde a flexibilidade e o conforto são prioridades. Suas plantas inteligentes foram pensadas para otimizar a distribuição e funcionalidade dos espaços.",
    destaque: "PLANTAS INTELIGENTES",
    diferenciais: [
      "Piscina com deck e área de descanso",
      "Salão de festas com decoração contemporânea",
      "Espaço fitness ao ar livre integrado à natureza",
      "Churrasqueiras com área gourmet",
      "Playground completo para crianças",
      "Mini campo de golfe",
      "Praças de convivência entre os edifícios",
      "Paisagismo com espécies nativas",
      "Segurança 24 horas com controle de acesso",
    ],

    // Mídia
    imagem: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FACHADA.jpg",
    imagemDestaque: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FACHADA.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/1 - VITRINE_GRANDCLUB.jpg",
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_GOLFE.jpg",
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FITNESS.jpg",
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PLAYGROUND.jpg",
    ],

    // Identidade visual
    identidadeVisual: {
      logo: "/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_GRAND CLUB COTIA.png",
      corPrimaria: "#7B1FA2", // Roxo elegante
      corSecundaria: "#4A148C", // Roxo escuro
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/1 - VITRINE_GRANDCLUB.jpg",
    },

    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Apartamento 1 dormitório",
        area: "35m²",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/planta-1dorm_tipo2.jpg",
        preco: "A partir de R$ 320.000",
        descricao: "Apartamento compacto com 1 dormitório, sala e cozinha integradas.",
        destaque: false,
      },
      {
        id: 2,
        tipo: "Apartamento 2 dormitórios",
        area: "65m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/planta-2dorms_tipo1.jpg",
        preco: "A partir de R$ 450.000",
        descricao: "Apartamento com 2 dormitórios, sala ampla e cozinha.",
        destaque: true,
      },
    ],
    especificacoes: {
      unidades: "198 unidades",
      andares: "16 andares",
      elevadores: "8 elevadores",
      entrega: "2019",
    },

    // Metadados
    destacado: false,
    ativo: true,
    tags: ["Mini golfe", "Fitness", "Cotia", "Clube"],
    categoria: ["Residencial", "Concluído", "Clube"],
  },

  {
    // Identificação
    id: 7,
    nome: "Le Mont",
    slug: "le-mont",
    subtitulo: "CONCLUÍDO",
    slogan: "Qualidade de Vida na Montanha.",

    // Localização
    localizacao: "Cotia, São Paulo - SP",
    bairro: "Cotia",
    endereco: {
      rua: "Estrada Morro Grande",
      numero: "3400",
      bairro: "Jardim Ísis",
      cidade: "Cotia",
      estado: "SP",
      cep: "06709-240",
    },
    coordenadas: {
      lat: -23.5892,
      lng: -46.9345,
    },
    pontos_interesse: [
      { nome: "Centro de Cotia", distancia: "5km", tipo: "comercio" },
      { nome: "Shopping Granja Vianna", distancia: "8km", tipo: "shopping" },
      { nome: "Rodoanel Mário Covas", distancia: "10km", tipo: "transporte" },
    ],

    // Características básicas
    tipo: "1 dormitório",
    status: "Entregues",
    area: "40 a 70m²",
    quartos: 1,
    banheiros: 1,
    vagas: 1,

    // Preço e entrega
    preco: 380000,
    precoFormatado: "A partir de R$ 380.000",
    entrega: "2016",

    // Conteúdo
    descricao:
      "O Condomínio Le Mont foi cuidadosamente projetado para proporcionar qualidade de vida à sua família, com segurança 24 horas, contando com uma extensa área verde preservada e uma variedade de opções de lazer.",
    destaque: "UNIDADES GARDEN",
    diferenciais: [
      "Unidades garden com acesso exclusivo ao jardim",
      "Piscina adulto e infantil",
      "Quadra poliesportiva",
      "Salão de festas com espaço gourmet",
      "Playground completo",
      "Churrasqueiras",
      "Segurança 24 horas",
      "Paisagismo elaborado",
    ],

    // Mídia
    imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_FACHADAS.jpg",
    imagemDestaque: "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_FACHADAS.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/LE MONT/1 - VITRINE_LE MONT 1.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_PLAYGROUND.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_SALÃO DE FESTAS.jpg",
    ],

    // Identidade visual
    identidadeVisual: {
      logo: "/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_LE MONT 1.png",
      corPrimaria: "#FF6F00", // Laranja montanha
      corSecundaria: "#E65100", // Laranja escuro
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/LE MONT/1 - VITRINE_LE MONT 1.jpg",
    },

    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Apartamento 1 dormitório",
        area: "40m²",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Ap Meio_F3_HR.jpg",
        preco: "A partir de R$ 380.000",
        descricao: "Apartamento com 1 dormitório, sala e cozinha.",
        destaque: false,
      },
      {
        id: 2,
        tipo: "Apartamento 2 dormitórios",
        area: "70m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Ap Ponta_F1_HR.jpg",
        preco: "A partir de R$ 520.000",
        descricao: "Apartamento com 2 dormitórios, sala ampla e cozinha.",
        destaque: true,
      },
    ],
    especificacoes: {
      unidades: "150 unidades",
      andares: "12 andares",
      elevadores: "5 elevadores",
      entrega: "2016",
    },

    // Metadados
    destacado: false,
    ativo: true,
    tags: ["Garden", "Área verde", "Cotia", "Montanha"],
    categoria: ["Residencial", "Concluído"],
  },

  {
    // Identificação
    id: 8,
    nome: "Le Mont 2",
    slug: "le-mont-2",
    subtitulo: "CONCLUÍDO",
    slogan: "Atenção aos Detalhes.",

    // Localização
    localizacao: "Cotia, São Paulo - SP",
    bairro: "Cotia",
    endereco: {
      rua: "Estrada Morro Grande",
      numero: "3502",
      bairro: "Jardim Ísis",
      cidade: "Cotia",
      estado: "SP",
      cep: "06709-240",
    },
    coordenadas: {
      lat: -23.5901,
      lng: -46.9352,
    },
    pontos_interesse: [
      { nome: "Centro de Cotia", distancia: "5km", tipo: "comercio" },
      { nome: "Shopping Granja Vianna", distancia: "8km", tipo: "shopping" },
      { nome: "Rodoanel Mário Covas", distancia: "10km", tipo: "transporte" },
    ],

    // Características básicas
    tipo: "2 dormitórios",
    status: "Entregues",
    area: "50 a 90m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,

    // Preço e entrega
    preco: 420000,
    precoFormatado: "A partir de R$ 420.000",
    entrega: "2017",

    // Conteúdo
    descricao:
      "O Condomínio Le Mont 2 foi planejado com atenção aos detalhes, focado na qualidade de vida de sua família. Com uma vasta área verde preservada e um ambiente que propicia o contato constante com a natureza.",
    destaque: "CONTATO COM A NATUREZA",
    diferenciais: [
      "Apartamentos de 1, 2 e 3 dormitórios",
      "Piscina adulto e infantil",
      "Salão de festas com espaço gourmet",
      "Churrasqueiras",
      "Playground",
      "Fitness",
      "Segurança 24 horas",
      "Paisagismo elaborado",
      "Próximo a comércios e serviços",
    ],

    // Mídia
    imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_FACHADA.jpg",
    imagemDestaque: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_FACHADA.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/LE MONT 2/1 - VITRINE_LE MONT 2.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_PLAYGROUND.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_SALÃO DE FESTAS.jpg",
    ],

    // Identidade visual
    identidadeVisual: {
      logo: "/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_LE MONT 2.png",
      corPrimaria: "#00796B", // Verde teal
      corSecundaria: "#004D40", // Verde teal escuro
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/1 - VITRINE_LE MONT 2.jpg",
    },

    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Apartamento 2 dormitórios",
        area: "50m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINO_2 dorm.jpg",
        preco: "A partir de R$ 420.000",
        descricao: "Apartamento com 2 dormitórios, sala e cozinha.",
        destaque: false,
      },
      {
        id: 2,
        tipo: "Apartamento 3 dormitórios",
        area: "90m²",
        quartos: 3,
        banheiros: 2,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINO_3 dorm.jpg",
        preco: "A partir de R$ 580.000",
        descricao: "Apartamento com 3 dormitórios, sendo 1 suíte, sala ampla e cozinha.",
        destaque: true,
      },
    ],
    especificacoes: {
      unidades: "120 unidades",
      andares: "10 andares",
      elevadores: "4 elevadores",
      entrega: "2017",
    },

    // Metadados
    destacado: false,
    ativo: true,
    tags: ["Área verde", "Fitness", "Cotia", "Natureza"],
    categoria: ["Residencial", "Concluído"],
  },
]

// =============================================================================
// CONFIGURAÇÕES DE FILTROS
// =============================================================================

/**
 * Opções disponíveis para os filtros de busca
 * Customize conforme necessário
 */
export const opcoesFiltros: OpcoesFilter = {
  tipos: ["Studio", "1 dormitório", "2 dormitórios", "3 dormitórios", "Cobertura"],
  status: ["Lançamento", "Breve lançamento", "Em Obras", "Entregues"],
  bairros: ["Bela Vista", "Pinheiros", "Vila Olímpia", "Jardins", "Morumbi", "Vila Madalena", "Icaraí", "Cotia"],
  faixas: [
    { label: "Até R$ 300.000", min: 0, max: 300000 },
    { label: "R$ 300.000 - R$ 500.000", min: 300000, max: 500000 },
    { label: "R$ 500.000 - R$ 800.000", min: 500000, max: 800000 },
    { label: "R$ 800.000 - R$ 1.200.000", min: 800000, max: 1200000 },
    { label: "R$ 1.200.000 - R$ 2.000.000", min: 1200000, max: 2000000 },
    { label: "Acima de R$ 2.000.000", min: 2000000, max: Number.POSITIVE_INFINITY },
  ],
}

// =============================================================================
// FUNÇÕES HELPER
// =============================================================================

/**
 * Busca um empreendimento pelo slug
 */
export function buscarEmpreendimentoPorSlug(slug: string): Empreendimento | undefined {
  return empreendimentos.find((emp) => emp.slug === slug)
}

/**
 * Retorna apenas empreendimentos ativos
 */
export function buscarEmpreendimentosAtivos(): Empreendimento[] {
  return empreendimentos.filter((emp) => emp.ativo)
}

/**
 * Retorna empreendimentos marcados como destaque
 */
export function buscarEmpreendimentosDestaque(): Empreendimento[] {
  return empreendimentos.filter((emp) => emp.ativo && emp.destacado)
}

/**
 * Gera um slug URL-friendly a partir do nome
 */
export function gerarSlug(nome: string): string {
  return nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/-+/g, "-") // Remove hífens duplicados
    .trim()
}
