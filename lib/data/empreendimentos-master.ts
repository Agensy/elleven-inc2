import type { Empreendimento, EmpreendimentoTipo, EmpreendimentoStatus, OpcoesFilter } from "@/lib/types/empreendimento"
import { botaniqueData } from "./botanique-data"
import { leMontData } from "./le-mont-data"
import { leMont2Data } from "./le-mont-2-data"
import { vertData } from "./vert-data"
import { essenceData } from "./essence-data"
import { grandParcData } from "./grand-parc-data"
import { montRoyalData } from "./mont-royal-data"
import { quartierData } from "./quartier-data"
import { icaraiData } from "./icarai-data"
import { jadeData } from "./jade-data"
import { obsidianData } from "./obsidian-data"
import { grandClubCotiaData } from "./grand-club-cotia-data"

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
    quartos: Array.isArray(templateData.quartos) ? templateData.quartos[0] : templateData.quartos || 2,
    banheiros: 2, // padrão
    vagas: Array.isArray(templateData.vagas) ? templateData.vagas[0] : templateData.vagas || 0,

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
    ...converterTemplateParaEmpreendimento(botaniqueData, 2),
    slug: "botanique", // Para usar getEmpreendimentoUrl
    destacado: true,
    tags: ["natureza", "cotia", "bosque"],
    preco: 450000,
  },

  // VERT - NOVO EMPREENDIMENTO
  {
    ...converterTemplateParaEmpreendimento(vertData, 7),
    slug: "vert",
    destacado: true,
    tags: ["itu", "condomínio fechado", "street ball"],
    preco: 280000,
    bairro: "Centro",
    coordenadas: { lat: -23.2644, lng: -47.2996 }, // Itu, SP
  },

  // ESSENCE - NOVO EMPREENDIMENTO
  {
    ...converterTemplateParaEmpreendimento(essenceData, 8),
    slug: "essence",
    destacado: true,
    tags: ["cotia", "coberturas duplex", "academia"],
    preco: 350000,
    bairro: "Jardim Nova Vida",
    coordenadas: { lat: -23.6037, lng: -46.9189 }, // Cotia, SP
  },

  // GRAND PARC - NOVO EMPREENDIMENTO
  {
    ...converterTemplateParaEmpreendimento(grandParcData, 9),
    slug: "grand-parc",
    destacado: true,
    tags: ["itu", "pista de caminhada", "poço artesiano"],
    preco: 380000,
    bairro: "Rancho Grande",
    coordenadas: { lat: -23.2644, lng: -47.2996 }, // Itu, SP
  },

  // MONT ROYAL - NOVO EMPREENDIMENTO
  {
    ...converterTemplateParaEmpreendimento(montRoyalData, 10),
    slug: "mont-royal",
    destacado: true,
    tags: ["porto feliz", "espaço zen", "deck solário"],
    preco: 380000,
    bairro: "Jardim Primavera",
    coordenadas: { lat: -23.2144, lng: -47.5269 }, // Porto Feliz, SP
  },

  // QUARTIER - NOVO EMPREENDIMENTO
  {
    ...converterTemplateParaEmpreendimento(quartierData, 11),
    slug: "quartier",
    destacado: true,
    tags: ["itapevi", "castelo branco", "brinquedoteca"],
    preco: 310000,
    bairro: "Jardim Portela",
    coordenadas: { lat: -23.5489, lng: -46.9336 }, // Itapevi, SP
  },

  // GRAND CLUB COTIA - NOVO EMPREENDIMENTO
  {
    ...grandClubCotiaData,
    destacado: true,
  },

  // ICARAÍ - NOVO EMPREENDIMENTO
  {
    ...converterTemplateParaEmpreendimento(icaraiData, 3),
    slug: "icarai-parque-clube", // Para usar getEmpreendimentoUrl
    destacado: false,
    tags: ["salto", "parque clube", "natureza"],
    preco: 300000,
    bairro: "Centro",
    coordenadas: { lat: -23.2031, lng: -47.2881 }, // Salto, SP
  },

  // JADE - NOVO
  {
    ...converterTemplateParaEmpreendimento(jadeData, 4),
    slug: "jade", // Para usar getEmpreendimentoUrl
    destacado: true,
    tags: ["são paulo", "bela vista", "avenida paulista", "rooftop", "studios"],
    preco: 390000,
    bairro: "Bela Vista",
    coordenadas: { lat: -23.559, lng: -46.649 }, // Bela Vista, SP
  },

  // OBSIDIAN - NOVO
  {
    ...converterTemplateParaEmpreendimento(obsidianData, 5),
    slug: "obsidian", // Para usar getEmpreendimentoUrl
    destacado: true,
    tags: ["são paulo", "pinheiros", "oscar freire", "studios", "design", "luxo"],
    preco: 699000,
    bairro: "Pinheiros",
    coordenadas: { lat: -23.565, lng: -46.685 }, // Pinheiros, SP
  },
]

// =============================================================================
// FUNÇÕES AUXILIARES DE BUSCA
// =============================================================================

/**
 * Busca um empreendimento pelo slug
 */
export function buscarEmpreendimentoPorSlug(slug: string): Empreendimento | undefined {
  return empreendimentosMaster.find((e) => e.slug === slug)
}

/**
 * Retorna todos os empreendimentos ativos
 */
export function buscarEmpreendimentosAtivos(): Empreendimento[] {
  return empreendimentosMaster.filter((e) => e.ativo)
}

/**
 * Retorna os empreendimentos marcados como destaque
 */
export function buscarEmpreendimentosDestaque(): Empreendimento[] {
  return empreendimentosMaster.filter((e) => e.destacado)
}

/**
 * Adiciona um novo empreendimento à lista mestra
 * Útil para testes ou adições dinâmicas
 */
export function adicionarEmpreendimento(novoEmpreendimento: Empreendimento): void {
  empreendimentosMaster.push(novoEmpreendimento)
}

// =============================================================================
// FUNÇÕES PARA FILTROS DE BUSCA
// =============================================================================

/**
 * Retorna todas as opções de filtro disponíveis
 */
export function getOpcoesFiltro(): OpcoesFilter {
  const todosStatus = new Set<EmpreendimentoStatus>()
  const todosTipos = new Set<string>()
  const todosBairros = new Set<string>()

  empreendimentosMaster.forEach((e) => {
    todosStatus.add(e.status)
    todosTipos.add(e.tipo)
    todosBairros.add(e.bairro)
  })

  return {
    status: Array.from(todosStatus),
    tipos: Array.from(todosTipos),
    bairros: Array.from(todosBairros),
    faixas: [
      { label: "Até R$300.000", min: 0, max: 300000 },
      { label: "R$300.001 a R$500.000", min: 300001, max: 500000 },
      { label: "R$500.001 a R$800.000", min: 500001, max: 800000 },
      { label: "Acima de R$800.000", min: 800001, max: Number.POSITIVE_INFINITY },
    ],
  }
}

// =============================================================================
// CONFIGURAÇÕES DE FILTROS
// =============================================================================

/**
 * Opções disponíveis para os filtros de busca
 * Baseadas nos empreendimentos disponíveis
 */
export const opcoesFiltros: OpcoesFilter = {
  tipos: ["Studio", "1 dormitório", "2 dormitórios", "3 dormitórios", "Cobertura"],
  status: ["Breve lançamento", "Lançamento", "Em obras", "Entregues"],
  bairros: [
    "Bela Vista",
    "Pinheiros",
    "Jardim D'Icaraí",
    "Chácara Roselândia",
    "Jardim Isis",
    "Granja Viana",
    "Centro",
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
