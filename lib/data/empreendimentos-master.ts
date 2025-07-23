import type { Empreendimento, EmpreendimentoTipo, EmpreendimentoStatus, OpcoesFilter } from "@/lib/types/empreendimento"
import { botaniqueData } from "./botanique-data"
import { leMontData } from "./le-mont-data"
import { leMont2Data } from "./le-mont-2-data"
import { vertData } from "./vert-data"
import { essenceData } from "./essence-data"
import { grandParcData } from "./grand-parc-data"
import { montRoyalData } from "./mont-royal-data"
import { quartierData } from "./quartier-data"
import { obsidianData } from "./obsidian-data"

/**
 * =============================================================================
 * DADOS MESTRES DE TODOS OS EMPREENDIMENTOS
 * =============================================================================
 *
 * Este arquivo é a fonte única da verdade para todos os empreendimentos.
 * Usa as páginas COMPLETAS (-novo) como padrão.
 *
 * IMPORTANTE: Sempre use as páginas componentizadas como principal.
 */

// =============================================================================
// FUNÇÃO PARA URLS PADRONIZADAS
// =============================================================================

/**
 * Gera URL para página completa do empreendimento
 * Usa rotas diretas sem sufixo
 */
export function getEmpreendimentoUrl(slug: string): string {
  const routeMap: Record<string, string> = {
    "le-mont": "/le-mont",
    "le-mont-2": "/le-mont-2",
    botanique: "/botanique",
    jade: "/jade",
    obsidian: "/obsidian",
    "icarai-parque-clube": "/icarai",
    "grand-club-cotia": "/grand-club-cotia",
    vert: "/vert",
    essence: "/essence",
    "grand-parc": "/grand-parc",
    "mont-royal": "/mont-royal",
    quartier: "/quartier",
  }

  return routeMap[slug] || `/${slug}`
}

// =============================================================================
// FUNÇÃO PARA CONVERTER DADOS DO TEMPLATE
// =============================================================================

/**
 * Converte dados do template (EmpreendimentoData) para interface padrão (Empreendimento)
 */
function converterTemplateParaEmpreendimento(templateData: any, id: number): Empreendimento {
  return {
    id: id,
    slug: templateData.slug || `empreendimento-${id}`,
    nome: templateData.nome || "Nome não definido",
    subtitulo: templateData.subtitulo,
    slogan: templateData.slogan,

    // Localização - adaptado para interface padrão
    localizacao: templateData.localizacao || "Localização não definida",
    bairro: templateData.endereco?.bairro || "Bairro não definido",
    coordenadas: { lat: -23.5505, lng: -46.6333 }, // SP como padrão

    // Características básicas
    tipo: (templateData.tipo === "Residencial" ? "2 dormitórios" : templateData.tipo) as EmpreendimentoTipo,
    status: templateData.status as EmpreendimentoStatus,
    area: templateData.area || "Consulte",
    quartos: templateData.quartos || 2,
    banheiros: 2, // padrão
    vagas: templateData.vagas || 1,

    // Preço
    preco: 500000, // valor padrão para filtros
    precoFormatado: templateData.precoFormatado || "Consulte valores",
    entrega: templateData.entrega || "Em breve",

    // Conteúdo
    descricao: templateData.descricao || "",
    diferenciais: templateData.diferenciais || [],

    // Mídia
    imagem: templateData.imagem || "/placeholder.svg",
    imagemDestaque: templateData.imagemDestaque || templateData.imagem,
    galeria: templateData.galeria || [],

    // Identidade visual
    identidadeVisual: templateData.identidadeVisual || {
      logo: "/placeholder-logo.png",
      corPrimaria: "#000000",
      corSecundaria: "#666666",
      imagemBackground: templateData.imagem || "/placeholder.svg",
    },

    // Dados técnicos
    plantas: templateData.plantas || [],
    especificacoes: templateData.especificacoes || {
      unidades: "Consulte",
      andares: "Consulte",
      elevadores: "Consulte",
      entrega: templateData.entrega || "Em breve",
    },

    // Pontos de interesse
    pontos_interesse: templateData.pontos_interesse || [],

    // Metadados
    destacado: false,
    ativo: true,
    tags: [],
    categoria: ["residencial"],
  }
}

// =============================================================================
// EMPREENDIMENTOS PRINCIPAIS
// =============================================================================

export const empreendimentosMaster: Empreendimento[] = [
  // EMPREENDIMENTOS CRIADOS VIA TEMPLATE
  {
    ...converterTemplateParaEmpreendimento(leMontData, 1),
    slug: "le-mont", // Para usar getEmpreendimentoUrl
    destacado: true,
    tags: ["cotia", "condomínio clube", "lazer completo"],
    preco: 380000,
  },

  // LE MONT 2 - NOVO EMPREENDIMENTO
  {
    ...leMont2Data,
    destacado: true,
  },

  // BOTANIQUE
  {
    ...botaniqueData,
    slug: "botanique", // Para usar getEmpreendimentoUrl
    destacado: true,
    tags: ["natureza", "cotia", "bosque"],
    preco: 450000,
  },

  // VERT - NOVO EMPREENDIMENTO
  {
    ...vertData,
    slug: "vert",
    destacado: true,
    tags: ["itu", "condomínio fechado", "street ball"],
    preco: 280000,
    bairro: "Centro",
    coordenadas: { lat: -23.2644, lng: -47.2996 }, // Itu, SP
  },

  // ESSENCE - NOVO EMPREENDIMENTO
  {
    ...essenceData,
    slug: "essence",
    destacado: true,
    tags: ["cotia", "coberturas duplex", "academia"],
    preco: 350000,
    bairro: "Jardim Nova Vida",
    coordenadas: { lat: -23.6037, lng: -46.9189 }, // Cotia, SP
  },

  // GRAND PARC - NOVO EMPREENDIMENTO
  {
    ...grandParcData,
    slug: "grand-parc",
    destacado: true,
    tags: ["itu", "pista de caminhada", "poço artesiano"],
    preco: 380000,
    bairro: "Rancho Grande",
    coordenadas: { lat: -23.2644, lng: -47.2996 }, // Itu, SP
  },

  // MONT ROYAL - NOVO EMPREENDIMENTO
  {
    ...montRoyalData,
    slug: "mont-royal",
    destacado: true,
    tags: ["porto feliz", "espaço zen", "deck solário"],
    preco: 380000,
    bairro: "Jardim Primavera",
    coordenadas: { lat: -23.2144, lng: -47.5269 }, // Porto Feliz, SP
  },

  // QUARTIER - NOVO EMPREENDIMENTO
  {
    ...quartierData,
    slug: "quartier",
    destacado: true,
    tags: ["itapevi", "castelo branco", "brinquedoteca"],
    preco: 310000,
    bairro: "Jardim Portela",
    coordenadas: { lat: -23.5489, lng: -46.9336 }, // Itapevi, SP
  },

  // GRAND CLUB COTIA - NOVO EMPREENDIMENTO
  {
    id: 9,
    nome: "Grand Club Cotia",
    slug: "grand-club-cotia",
    subtitulo: "Entregues",
    slogan: "Espaço, sofisticação e qualidade de vida em um só lugar",
    localizacao: "R. Geraldo Otaviano de Almeida, 1025 - Bairro Nakamura Park, Cotia - SP",
    bairro: "Nakamura Park",

    coordenadas: { lat: -23.6037, lng: -46.9189 },
    tipo: "2 dormitórios" as EmpreendimentoTipo,
    status: "Entregues" as EmpreendimentoStatus,
    entrega: "2022",
    area: "31,06m² a 46,32m²",
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    preco: 220000,
    precoFormatado: "A partir de R$ 165.000",
    descricao:
      "O Grand Club Cotia foi cuidadosamente projetado para proporcionar um estilo de vida único, onde a flexibilidade e o conforto são prioridades. Com plantas inteligentes que otimizam o espaço, o Grand Club oferece o equilíbrio perfeito entre sofisticação e praticidade. Aqui, sua família encontra a tranquilidade que merece, com ambientes amplos, bem iluminados e áreas externas ideais para o convívio diário. O grande destaque é o terraço, pensado para ser o refúgio favorito de todos, com vistas deslumbrantes e total privacidade. Além disso, o empreendimento conta com uma estrutura completa de lazer e diversão para todas as idades, garantindo momentos inesquecíveis o ano todo.",
    imagem: "/empreendimentos/grand-club-cotia/fachada-principal.webp",
    imagemDestaque: "/empreendimentos/grand-club-cotia/vitrine-grand-club.jpeg",
    galeria: [
      "/empreendimentos/grand-club-cotia/fachada-principal.webp",
      "/empreendimentos/grand-club-cotia/galeria/salao-festas-interior.jpeg",
      "/empreendimentos/grand-club-cotia/galeria/piscina.webp",
      "/empreendimentos/grand-club-cotia/galeria/playground.jpeg",
      "/empreendimentos/grand-club-cotia/galeria/fitness.jpeg",
      "/empreendimentos/grand-club-cotia/galeria/churrasqueira.jpeg",
      "/empreendimentos/grand-club-cotia/galeria/quadra.jpeg",
      "/empreendimentos/grand-club-cotia/galeria/mini-golf.webp",
      "/empreendimentos/grand-club-cotia/galeria/bosque.jpeg",
      "/empreendimentos/grand-club-cotia/galeria/piscina-deck.webp",
    ],
    identidadeVisual: {
      logo: "/empreendimentos/logos/logo-grand-club-cotia.png",
      corPrimaria: "#B8860B",
      corSecundaria: "#1a1a1a",
      imagemBackground: "/empreendimentos/grand-club-cotia/fachada-principal.webp",
    },
    diferenciais: [
      "Piscina ampla com deck",
      "Salão de festas decorado",
      "Estação fitness completa",
      "Churrasqueiras ao ar livre",
      "Quadra recreativa",
      "Mini golf exclusivo",
      "Solarium e bosque para relaxar",
      "Playground infantil",
      "Bicicletário",
      "Redário",
      "Espaço gourmet",
      "Condomínio fechado com portaria 24h",
    ],
    pontos_interesse: [
      { nome: "Escolas e centros educacionais", distancia: "Próximo", tipo: "educacao" },
      { nome: "Supermercados e shoppings", distancia: "Próximo", tipo: "comercio" },
      { nome: "Hospitais e clínicas", distancia: "Próximo", tipo: "saude" },
      { nome: "Restaurantes e bares", distancia: "Próximo", tipo: "comercio" },
      { nome: "Academias", distancia: "Próximo", tipo: "lazer" },
      { nome: "Bancos e serviços", distancia: "Próximo", tipo: "comercio" },
    ],
    plantas: [
      {
        id: 1,
        tipo: "1 Dormitório",
        area: "31,06m²",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/grand-club-cotia/plantas/1-dormitorio-tipo2.jpeg",
        preco: "A partir de R$ 165.000",
        descricao: "Apartamento compacto e funcional",
      },
      {
        id: 2,
        tipo: "2 Dormitórios",
        area: "43,05m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-tipo1.jpeg",
        preco: "A partir de R$ 220.000",
        descricao: "Apartamento com boa distribuição",
      },
      {
        id: 3,
        tipo: "2 Dormitórios Plus",
        area: "46,32m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-tipo2.jpeg",
        preco: "A partir de R$ 245.000",
        descricao: "Apartamento mais amplo com área gourmet",
        destaque: true,
      },
      {
        id: 4,
        tipo: "2 Dormitórios Garden",
        area: "46,32m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-giardino.jpeg",
        preco: "A partir de R$ 265.000",
        descricao: "Com jardim privativo e área externa exclusiva",
      },
    ],
    especificacoes: {
      unidades: "198 apartamentos em 8 torres",
      andares: "8 torres",
      elevadores: "2 por torre",
      entrega: "2025",
    },
    ativo: true,
    destacado: true,
    tags: ["cotia", "condomínio clube", "breve lançamento", "lazer completo", "terraço"],
    categoria: ["residencial", "condomínio clube"],
  },

  // JADE
  {
    id: 11,
    nome: "Jade",
    slug: "jade",
    subtitulo: "LANÇAMENTO EXCLUSIVO",
    slogan: "Studios sofisticados com lazer exclusivo, no coração da Bela Vista",
    localizacao: "Rua Maestro Cardim, 1028 - Bela Vista - São Paulo, SP",
    bairro: "Bela Vista",

    coordenadas: { lat: -23.560448, lng: -46.650839 },
    tipo: "Studio" as EmpreendimentoTipo,
    status: "Lançamento" as EmpreendimentoStatus,
    entrega: "2025",
    area: "25 a 40m²",
    quartos: 0,
    banheiros: 1,
    vagas: 0,
    preco: 390000,
    precoFormatado: "A partir de R$ 390.000",
    descricao:
      "Studios sofisticados com lazer exclusivo no coração da Bela Vista. Localização privilegiada próxima à Avenida Paulista, com acabamentos premium e áreas de lazer completas. Ideal para quem busca praticidade, conforto e alta valorização em uma das regiões mais nobres de São Paulo.",
    imagem: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
    imagemDestaque: "/empreendimentos/jade/fachadas/JADE_ROOFTOP.jpeg",
    galeria: [
      "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
      "/empreendimentos/jade/fachadas/JADE_Cardim 02.jpeg",
      "/empreendimentos/jade/fachadas/JADE_Cardim 03.jpeg",
      "/empreendimentos/jade/galeria/rooftop.jpeg",
    ],
    identidadeVisual: {
      logo: "/empreendimentos/jade/logo-jade.png",
      corPrimaria: "#D4AF37",
      corSecundaria: "#1a1a1a",
      imagemBackground: "/empreendimentos/jade/background-jade.jpeg",
    },
    diferenciais: [
      "Piscina aquecida com vista panorâmica",
      "Tela de LED no rooftop",
      "Academia equipada",
      "Sauna",
      "Lounge Gourmet",
      "Lavanderia compartilhada",
      "MiniMarket",
      "Portaria 24h",
      "Sistema de monitoramento",
      "Controle de acesso",
      "Elevadores com controle biométrico",
      "Segurança privativa",
    ],
    pontos_interesse: [
      { nome: "Hospital Beneficência Portuguesa", distancia: "0,19 km, 3 min a pé", tipo: "saude" },
      { nome: "Dona Deola (Hospital BP)", distancia: "0,2 km, 3 min a pé", tipo: "comercio" },
      { nome: "Estação Brigadeiro (Linha 2-Verde)", distancia: "0,65 km, 10 min a pé", tipo: "transporte" },
      { nome: "Estação Vergueiro (Linha 1-Azul)", distancia: "1,0 km, 12 min a pé", tipo: "transporte" },
      { nome: "Estação Paraíso (Linhas 1-Azul e 2-Verde)", distancia: "1,2 km, 15 min a pé", tipo: "transporte" },
      { nome: "Shopping Pátio Paulista", distancia: "0,28 km, 4 min a pé", tipo: "shopping" },
      { nome: "Avenida Paulista", distancia: "0,7 km, 10 min a pé", tipo: "comercio" },
    ],
    plantas: [
      {
        id: 1,
        tipo: "Studio",
        area: "25 a 40m²",
        banheiros: 1,
        imagem: "/empreendimentos/jade/plantas/JADE_Planta.webp",
        preco: "A partir de R$ 390.000",
        descricao: "Studios sofisticados com lazer exclusivo",
        destaque: true,
      },
    ],
    especificacoes: {
      unidades: "118 unidades",
      andares: "20 andares",
      elevadores: "2 elevadores",
      entrega: "2025",
      rooftop: "Piscina aquecida",
      academia: "Equipada e com sauna",
    },
    ativo: true,
    destacado: true,
    tags: ["luxo", "bela vista", "paulista", "studios"],
    categoria: ["residencial", "alto padrão"],
  },



  // OBSIDIAN - DADOS COMPLETOS REFATORADOS
  {
    ...obsidianData,
    destacado: true,
  },

  // ICARAÍ PARQUE CLUBE
  {
    id: 12,
    nome: "Icaraí Parque Clube",
    slug: "icarai-parque-clube",
    subtitulo: "Em Obras",
    slogan: "Onde Natureza e Qualidade de Vida se Encontram",
    localizacao: "Salto, São Paulo - SP",
    bairro: "Jardim D'Icaraí",

    coordenadas: { lat: -23.2, lng: -47.283333 },
    tipo: "2 dormitórios" as EmpreendimentoTipo,
    status: "Em obras" as EmpreendimentoStatus,
    entrega: "Novembro 2026",
    area: "75m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    preco: 750000,
    precoFormatado: "A partir de R$ 750.000",
    descricao:
      "Um lugar onde o equilíbrio entre qualidade de vida e o encanto da natureza cria o cenário perfeito para o seu novo lar. Com 55 mil metros quadrados, o Icaraí Parque Clube oferece uma experiência completa de moradia com infraestrutura de clube e a tranquilidade de um parque.",
    imagem: "/empreendimentos/icarai-parque-clube/fachadas/ICARAI_TORRES DO ICARAI - FACHADA.jpeg",
    imagemDestaque: "/empreendimentos/icarai-parque-clube/background-icarai-abstract.png",
    galeria: ["/empreendimentos/icarai-parque-clube/fachadas/ICARAI_TORRES DO ICARAI - FACHADA.jpeg"],
    identidadeVisual: {
      logo: "/empreendimentos/icarai-parque-clube/logo-icarai.png",
      corPrimaria: "#10B981",
      corSecundaria: "#065F46",
      imagemBackground: "/empreendimentos/icarai-parque-clube/background-icarai-abstract.png",
    },
    diferenciais: [
      "408 unidades distribuídas em 4 torres",
      "Apartamentos de 2 e 3 dormitórios",
      "Lazer completo com infraestrutura de clube",
      "55.000m² de área total preservada",
    ],
    pontos_interesse: [
      { nome: "Centro de Salto", distancia: "3km", tipo: "comercio" },
      { nome: "Estação Salto", distancia: "5km", tipo: "transporte" },
    ],
    plantas: [],
    especificacoes: {
      unidades: "408 unidades",
      andares: "4 torres",
      elevadores: "2 elevadores por torre",
      entrega: "Novembro 2026",
    },
    ativo: true,
    destacado: true,
    tags: ["natureza", "salto", "clube"],
    categoria: ["residencial", "condomínio clube"],
  },
]

// =============================================================================
// FUNÇÕES HELPER
// =============================================================================

/**
 * Busca um empreendimento pelo slug
 */
export function buscarEmpreendimentoPorSlug(slug: string): Empreendimento | undefined {
  return empreendimentosMaster.find((emp) => emp.slug === slug)
}

/**
 * Retorna apenas empreendimentos ativos
 */
export function buscarEmpreendimentosAtivos(): Empreendimento[] {
  return empreendimentosMaster.filter((emp) => emp.ativo)
}

/**
 * Retorna empreendimentos destacados
 */
export function buscarEmpreendimentosDestaque(): Empreendimento[] {
  return empreendimentosMaster.filter((emp) => emp.ativo && emp.destacado)
}

/**
 * Adiciona um novo empreendimento (para uso com template)
 */
export function adicionarEmpreendimento(novoEmpreendimento: Empreendimento): void {
  // Verifica se já existe
  const existe = empreendimentosMaster.find((emp) => emp.slug === novoEmpreendimento.slug)

  if (!existe) {
    empreendimentosMaster.push({
      ...novoEmpreendimento,
      ativo: true,
      destacado: false,
    })
  }
}

// =============================================================================
// EXPORTS PARA COMPATIBILIDADE
// =============================================================================

// Para manter compatibilidade com código existente
export const empreendimentos = empreendimentosMaster

// =============================================================================
// CONFIGURAÇÕES DE FILTROS
// =============================================================================

/**
 * Opções disponíveis para os filtros de busca
 * Baseadas nos empreendimentos disponíveis
 */
export const opcoesFiltros: OpcoesFilter = {
  tipos: ["Studio", "1 dormitório", "2 dormitórios", "3 dormitórios", "Cobertura"],
  status: ["Lançamento", "Breve lançamento", "Em obras", "Entregues"],
  bairros: [
    "Bela Vista",
    "Pinheiros",
    "Jardim D'Icaraí",
    "Chácara Roselândia",
    "Jardim Isis",
    "Vila Olímpia",
    "Jardins",
    "Morumbi",
    "Vila Madalena",
    "Nakamura Park", // Grand Club Cotia
    "Centro", // Vert
    "Jardim Nova Vida", // Essence
    "Rancho Grande", // Grand Parc
    "Jardim Primavera", // Mont Royal
    "Jardim Portela", // Quartier
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
