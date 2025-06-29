import type { Empreendimento, OpcoesFilter } from "@/lib/types/empreendimento"

// =============================================================================
// DADOS DOS EMPREENDIMENTOS
// =============================================================================

/**
 * Array principal com todos os empreendimentos
 * Atualizado com informações das apresentações
 */
export const empreendimentos: Empreendimento[] = [
  {
    id: 1,
    nome: "Jade",
    slug: "jade",
    subtitulo: "Lançamento",
    slogan: "Viva o Extraordinário",
    localizacao: "Bela Vista, São Paulo - SP",
    bairro: "Bela Vista",
    coordenadas: { lat: -23.560448, lng: -46.650839 },
    status: "Lançamento",
    tipo: "2 dormitórios",
    area: "65m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    preco: 850000,
    descricao:
      "No coração da Bela Vista (SP), em São Paulo, é um endereço privilegiado que combina sofisticação, tradição e conveniência. Este bairro, conhecido por sua rica vida cultural e excelente infraestrutura, oferece ótima proximidade com importantes pontos da cidade, como a Avenida Paulista, o Parque Trianon e os centros comerciais e gastronômicos de renomadas regiões como Vila Madalena e Itaim Bibi.",
    precoFormatado: "A partir de R$ 850.000",
    entrega: "2026",
    ativo: true,
    imagem: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
    imagemDestaque: "/empreendimentos/jade/background-jade.jpeg",
    galeria: [
      "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
      "/empreendimentos/jade/fachadas/JADE_Cardim 02.jpeg",
      "/empreendimentos/jade/fachadas/JADE_Cardim 03.jpeg",
    ],
    plantas: [],
    diferenciais: [
      "Localização privilegiada próxima à Av. Paulista",
      "Acabamentos premium e design sofisticado",
      "Rooftop com piscina e vista panorâmica",
      "Áreas comuns equipadas e decoradas",
    ],
    identidadeVisual: {
      corPrimaria: "#D4AF37",
      corSecundaria: "#1a1a1a",
      logo: "/empreendimentos/jade/logo-jade.png",
      imagemBackground: "/empreendimentos/jade/background-jade.jpeg",
    },
    pontos_interesse: [
      { nome: "Avenida Paulista", distancia: "800m", tipo: "comercio" },
      { nome: "Estação de Metrô", distancia: "500m", tipo: "transporte" },
    ],
    especificacoes: {
      unidades: "100 unidades",
      andares: "20 andares",
      elevadores: "2 elevadores",
      entrega: "2026",
    },
    tags: ["luxo", "bela vista", "paulista"],
    categoria: ["residencial", "alto padrão"],
  },
  {
    id: 2,
    nome: "Obsidian",
    slug: "obsidian",
    subtitulo: "BREVE LANÇAMENTO by Gemini",
    slogan: "Viva a Exclusividade",
    localizacao: "Pinheiros, São Paulo - SP",
    bairro: "Pinheiros",
    coordenadas: { lat: -23.564608, lng: -46.682358 },
    status: "Breve lançamento",
    tipo: "2 dormitórios",
    area: "70m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    preco: 950000,
    descricao:
      "Localizado em Pinheiros-SP. Uma das regiões mais nobres e valorizadas da cidade, o OBSIDIAN de alto padrão é o empreendimento perfeito para quem busca um estilo de vida sofisticado, design, moderno e prático. Com projeto arquitetônico inovador, o imóvel foi desenvolvido para oferecer a máxima excelência em qualidade, conforto e funcionalidade. Com fácil acesso a centros comerciais e opções de lazer. É a opção ideal para quem busca conforto, sofisticação e praticidade.",
    precoFormatado: "A partir de R$ 950.000",
    entrega: "2027",
    ativo: true,
    imagem: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
    imagemDestaque: "/empreendimentos/obsidian/background-obsidian.jpeg",
    galeria: [
      "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
      "/empreendimentos/obsidian/fachadas/fachada 002.jpeg",
      "/empreendimentos/obsidian/fachadas/fachada 003.jpeg",
    ],
    plantas: [],
    diferenciais: [
      "Localização privilegiada em região nobre",
      "Design contemporâneo com acabamentos premium",
      "Áreas comuns equipadas e decoradas",
      "Tecnologia e sustentabilidade integradas",
    ],
    identidadeVisual: {
      corPrimaria: "#DBA47A",
      corSecundaria: "#2D2D2D",
      logo: "/empreendimentos/obsidian/logo-obsidian.png",
      imagemBackground: "/empreendimentos/obsidian/background-obsidian.jpeg",
    },
    pontos_interesse: [
      { nome: "Estação de Metrô Oscar Freire", distancia: "100m", tipo: "transporte" },
      { nome: "Oscar Freire", distancia: "40m", tipo: "comercio" },
    ],
    especificacoes: {
      unidades: "80 unidades",
      andares: "15 andares",
      elevadores: "2 elevadores",
      entrega: "2027",
    },
    tags: ["luxo", "pinheiros", "gemini"],
    categoria: ["residencial", "alto padrão"],
  },
  {
    id: 3,
    nome: "Icaraí Parque Clube",
    slug: "icarai-parque-clube",
    subtitulo: "Em Obras",
    slogan: "Onde Natureza e Qualidade de Vida se Encontram",
    localizacao: "Salto, São Paulo - SP",
    bairro: "Jardim D'Icaraí",
    coordenadas: { lat: -23.2, lng: -47.283333 },
    status: "Em Obras",
    tipo: "2 dormitórios",
    area: "75m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    preco: 750000,
    descricao:
      "Um lugar onde o equilíbrio entre qualidade de vida e o encanto da natureza cria o cenário perfeito para o seu novo lar. Com 55 mil metros quadrados, o Icaraí Parque Clube oferece uma experiência completa de moradia com infraestrutura de clube e a tranquilidade de um parque. Suas torres modernas com fachada contemporânea abrigam apartamentos funcionais e bem planejados, enquanto as áreas comuns proporcionam lazer e bem-estar para toda a família.",
    precoFormatado: "A partir de R$ 750.000",
    entrega: "Novembro 2026",
    ativo: true,
    imagem: "/empreendimentos/icarai-parque-clube/fachadas/ICARAI_TORRES DO ICARAI - FACHADA.jpeg",
    imagemDestaque: "/empreendimentos/icarai-parque-clube/background-icarai-abstract.png",
    galeria: ["/empreendimentos/icarai-parque-clube/fachadas/ICARAI_TORRES DO ICARAI - FACHADA.jpeg"],
    plantas: [],
    diferenciais: [
      "408 unidades distribuídas em 4 torres",
      "Apartamentos de 2 e 3 dormitórios",
      "Lazer completo com infraestrutura de clube",
      "55.000m² de área total preservada",
    ],
    identidadeVisual: {
      corPrimaria: "#10B981",
      corSecundaria: "#065F46",
      logo: "/empreendimentos/icarai-parque-clube/logo-icarai.png",
      imagemBackground: "/empreendimentos/icarai-parque-clube/background-icarai-abstract.png",
    },
    pontos_interesse: [
      { nome: "Centro de Salto", distancia: "3km", tipo: "comercio" },
      { nome: "Estação Salto", distancia: "5km", tipo: "transporte" },
    ],
    especificacoes: {
      unidades: "408 unidades",
      andares: "4 torres",
      elevadores: "2 elevadores por torre",
      entrega: "Novembro 2026",
    },
    tags: ["natureza", "salto", "clube"],
    categoria: ["residencial", "condomínio clube"],
  },
  {
    id: 4,
    nome: "Botanique Condomínio Residencial",
    slug: "botanique",
    subtitulo: "Condomínio Clube",
    slogan: "Viva ao lado de um bosque privativo de 4.500 m²",
    localizacao: "Chácara Roselândia, Cotia - SP",
    bairro: "Chácara Roselândia",
    coordenadas: { lat: -23.603889, lng: -46.918611 },
    status: "Lançamento",
    tipo: "2 dormitórios",
    area: "65m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    preco: 450000,
    descricao:
      "O Botanique foi cuidadosamente projetado para oferecer qualidade de vida incomparável à sua família. Localizado em Cotia, ao lado de uma área verde exclusiva de 4.500 m², o empreendimento é um verdadeiro convite ao bem-estar. Aqui você vive tranquilo, cercado pela natureza, mas com toda a conveniência de um condomínio clube. Condomínio fechado com segurança 24h, diversas opções de lazer para toda a família, ambientes integrados e modernos com varanda e cozinha americana. O equilíbrio perfeito entre o sossego do campo e a proximidade dos serviços essenciais de São Paulo.",
    precoFormatado: "Consulte condições especiais",
    entrega: "Em breve",
    ativo: true,
    imagem: "/empreendimentos/botanique/1 - VITRINE_BOTANIQUE.jpg",
    imagemDestaque: "/empreendimentos/botanique/BOTANIQUE_1_FACHADA.jpg",
    galeria: [
      "/empreendimentos/botanique/1 - VITRINE_BOTANIQUE.jpg",
      "/empreendimentos/botanique/BOTANIQUE_1_FACHADA.jpg",
      "/empreendimentos/botanique/BOTANIQUE_2_VISTA AÉREA FACHADA .jpg",
      "/empreendimentos/botanique/galeria/BOTANIQUE_3_SALÃO DE FESTAS.jpg",
      "/empreendimentos/botanique/galeria/BOTANIQUE_4_ESPAÇO GRILL.jpg",
      "/empreendimentos/botanique/galeria/BOTANIQUE_5_PLAYGROUND.jpg",
      "/empreendimentos/botanique/galeria/BOTANIQUE_6_VISTA AÉREA.jpg",
      "/empreendimentos/botanique/galeria/BOTANIQUE_8_PISCINA.jpg",
    ],
    plantas: [
      {
        id: 1,
        tipo: "2 Dormitórios",
        area: "65m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/botanique/plantas/Planta 2 dormi.jpg",
        preco: "A partir de R$ 450.000",
        descricao: "Apartamento de 2 dormitórios com varanda e cozinha americana",
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
        preco: "A partir de R$ 620.000",
        descricao: "Apartamento de 3 dormitórios com suite e varanda gourmet",
      },
      {
        id: 3,
        tipo: "Duplex 2 Dormitórios",
        area: "120m²",
        quartos: 2,
        banheiros: 2,
        vagas: 2,
        imagem: "/empreendimentos/botanique/plantas/cobertura duplex 1 piso.jpg",
        preco: "A partir de R$ 850.000",
        descricao: "Cobertura duplex com terraço privativo e 2 vagas",
      },
    ],
    diferenciais: [
      "Bosque privativo com 4.500 m² de área verde preservada",
      "Condomínio totalmente fechado com segurança 24h",
      "150 apartamentos distribuídos em 5 torres de 5 andares",
      "Apartamentos de 1, 2 e 3 dormitórios + Duplex",
      "Piscina adulto e infantil com área de lazer completa",
      "Espaço gourmet e salão de festas equipados",
      "Playground moderno e quadra recreativa",
      "Acesso direto à Rodovia Raposo Tavares",
    ],
    identidadeVisual: {
      corPrimaria: "#2D5016",
      corSecundaria: "#4A7C59",
      logo: "/empreendimentos/botanique/logo-botanique.png",
      imagemBackground: "/empreendimentos/botanique/BOTANIQUE_6_VISTA AÉREA.jpg",
    },
    pontos_interesse: [
      { nome: "Rodovia Raposo Tavares", distancia: "Acesso direto", tipo: "transporte" },
      { nome: "Shopping Iguatemi Esplanada", distancia: "8km", tipo: "shopping" },
      { nome: "Hospital Albert Einstein", distancia: "12km", tipo: "saude" },
      { nome: "Shopping Granja Vianna", distancia: "6km", tipo: "shopping" },
      { nome: "Colégio Rio Branco", distancia: "5km", tipo: "educacao" },
      { nome: "Parque Villa Lobos", distancia: "15km", tipo: "parque" },
    ],
    especificacoes: {
      unidades: "150 apartamentos",
      andares: "5 torres de 5 andares",
      elevadores: "1 elevador por torre",
      entrega: "Em breve",
    },
    tags: ["natureza", "cotia", "bosque", "condomínio clube"],
    categoria: ["residencial", "condomínio clube", "área verde"],
  },
  {
    id: 5,
    nome: "Le Mont Condomínio Residencial",
    slug: "le-mont",
    subtitulo: "Em Obras",
    slogan: "Um novo conceito de morar bem",
    localizacao: "Estrada Morro Grande, Cotia - SP",
    bairro: "Jardim Isis",
    coordenadas: { lat: -23.603889, lng: -46.918611 },
    status: "Em Obras",
    tipo: "2 dormitórios",
    area: "43m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    preco: 380000,
    descricao:
      "O Condomínio Le Mont foi cuidadosamente planejado para proporcionar qualidade de vida à sua família, com segurança 24 horas e uma ampla área verde preservada. Oferece diversas opções de lazer para todas as idades, incluindo piscina adulto e infantil, quadra recreativa, salão de festas, playground e espaço grill. Localizado em Cotia, próximo a escolas, creches, supermercados e comércio em geral.",
    precoFormatado: "A partir de R$ 380.000",
    entrega: "2026",
    ativo: true,
    imagem: "/empreendimentos/le-mont/fachada-principal.webp",
    imagemDestaque: "/empreendimentos/le-mont/hero-background.webp",
    galeria: [
      "/empreendimentos/le-mont/fachada-principal.webp",
      "/empreendimentos/le-mont/piscina.webp",
      "/empreendimentos/le-mont/playground.webp",
      "/empreendimentos/le-mont/churrasqueira.webp",
      "/empreendimentos/le-mont/salao-festas.webp",
      "/empreendimentos/le-mont/terraco.webp",
      "/empreendimentos/le-mont/portaria.webp",
      "/empreendimentos/le-mont/quadra.webp",
    ],
    plantas: [
      {
        id: 1,
        tipo: "1 Dormitório",
        area: "30m²",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        imagem: "/placeholder.svg?height=400&width=600",
        preco: "A partir de R$ 280.000",
        descricao: "Apartamento compacto e funcional de 1 dormitório",
      },
      {
        id: 2,
        tipo: "2 Dormitórios",
        area: "43m²",
        quartos: 2,
        banheiros: 2,
        vagas: 1,
        imagem: "/placeholder.svg?height=400&width=600",
        preco: "A partir de R$ 380.000",
        descricao: "Apartamento de 2 dormitórios com varanda",
        destaque: true,
      },
      {
        id: 3,
        tipo: "3 Dormitórios",
        area: "65m²",
        quartos: 3,
        banheiros: 2,
        vagas: 1,
        imagem: "/placeholder.svg?height=400&width=600",
        preco: "A partir de R$ 480.000",
        descricao: "Apartamento amplo de 3 dormitórios com suite",
      },
    ],
    diferenciais: [
      "150 unidades distribuídas em 5 torres",
      "Apartamentos de 1, 2 e 3 dormitórios",
      "Piscina adulto e infantil com área de lazer completa",
      "Quadra recreativa e playground moderno",
      "Salão de festas e espaço grill equipados",
      "Segurança 24h e condomínio fechado",
      "Localização privilegiada em Cotia",
      "Próximo a escolas, supermercados e comércio",
    ],
    identidadeVisual: {
      corPrimaria: "#4A5D23",
      corSecundaria: "#6B7A3A",
      logo: "/empreendimentos/logos/logo-le-mont-1.png",
      imagemBackground: "/empreendimentos/le-mont/hero-background.webp",
    },
    pontos_interesse: [
      { nome: "Centro de Cotia", distancia: "3km", tipo: "comercio" },
      { nome: "Shopping Iguatemi Esplanada", distancia: "8km", tipo: "shopping" },
      { nome: "Rodovia Raposo Tavares", distancia: "2km", tipo: "transporte" },
      { nome: "Escola Municipal", distancia: "1km", tipo: "educacao" },
      { nome: "Supermercado Extra", distancia: "1.5km", tipo: "comercio" },
      { nome: "Hospital Municipal", distancia: "4km", tipo: "saude" },
    ],
    especificacoes: {
      unidades: "150 apartamentos",
      andares: "5 torres",
      elevadores: "1 elevador por torre",
      entrega: "2026",
    },
    tags: ["cotia", "condomínio clube", "lazer completo", "segurança 24h"],
    categoria: ["residencial", "condomínio clube"],
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
  bairros: [
    "Bela Vista",
    "Pinheiros",
    "Vila Olímpia",
    "Jardins",
    "Morumbi",
    "Vila Madalena",
    "Icaraí",
    "Cotia",
    "Chácara Roselândia",
    "Jardim Isis",
  ],
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
