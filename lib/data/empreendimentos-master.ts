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

/* =============================================================================
 * FUNÇÃO PARA URLS PADRONIZADAS
 * ========================================================================== */
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

/* =============================================================================
 * FUNÇÃO PARA CONVERTER DADOS DE TEMPLATE → INTERFACE PADRÃO
 * ========================================================================== */
function converterTemplateParaEmpreendimento(templateData: any, id: number): Empreendimento {
  return {
    /* IDs e Slug ----------------------------------------------------------- */
    id,
    slug: templateData.slug || `empreendimento-${id}`,
    nome: templateData.nome || "Nome não definido",
    subtitulo: templateData.subtitulo,
    slogan: templateData.slogan,

    /* Localização ---------------------------------------------------------- */
    localizacao: templateData.localizacao || "Localização não definida",
    bairro: templateData.endereco?.bairro || "Bairro não definido",
    coordenadas: { lat: -23.5505, lng: -46.6333 }, // São Paulo como fallback

    /* Características básicas --------------------------------------------- */
    tipo: (templateData.tipo === "Residencial" ? "2 dormitórios" : templateData.tipo) as EmpreendimentoTipo,
    status: templateData.status as EmpreendimentoStatus,
    area: templateData.area || "Consulte",
    quartos: Array.isArray(templateData.quartos) ? templateData.quartos[0] : templateData.quartos || 2,
    banheiros: 2,
    vagas: Array.isArray(templateData.vagas) ? templateData.vagas[0] : templateData.vagas || 0,

    /* Preço ---------------------------------------------------------------- */
    preco: 500_000,
    precoFormatado: templateData.precoFormatado || "Consulte valores",
    entrega: templateData.entrega || "Em breve",

    /* Conteúdo ------------------------------------------------------------- */
    descricao: templateData.descricao || "",
    diferenciais: templateData.diferenciais || [],

    /* Mídia ---------------------------------------------------------------- */
    imagem: templateData.imagem || "/placeholder.svg",
    imagemDestaque: templateData.imagemDestaque || templateData.imagem,
    galeria: templateData.galeria || [],

    /* Identidade visual ---------------------------------------------------- */
    identidadeVisual: templateData.identidadeVisual || {
      logo: "/placeholder-logo.png",
      corPrimaria: "#000000",
      corSecundaria: "#666666",
      imagemBackground: templateData.imagem || "/placeholder.svg",
    },

    /* Dados técnicos ------------------------------------------------------- */
    plantas: templateData.plantas || [],
    especificacoes: templateData.especificacoes || {
      unidades: "Consulte",
      andares: "Consulte",
      elevadores: "Consulte",
      entrega: templateData.entrega || "Em breve",
    },

    /* Pontos de interesse & metadados ------------------------------------- */
    pontos_interesse: templateData.pontos_interesse || [],
    destacado: false,
    ativo: true,
    tags: [],
    categoria: ["residencial"],
  }
}

/* =============================================================================
 * DADOS MESTRES (ARRAY PRINCIPAL)
 * ========================================================================== */
export const empreendimentosMaster: Empreendimento[] = [
  /* Exemplos — ajuste/adicione conforme necessário ----------------------- */
  {
    ...converterTemplateParaEmpreendimento(leMontData, 1),
    slug: "le-mont",
    destacado: true,
    preco: 380_000,
  },
  {
    ...leMont2Data,
    destacado: true,
  },
  {
    ...converterTemplateParaEmpreendimento(botaniqueData, 2),
    slug: "botanique",
    destacado: true,
    preco: 450_000,
  },
  {
    ...converterTemplateParaEmpreendimento(vertData, 3),
    slug: "vert",
    destacado: true,
    preco: 280_000,
  },
  {
    ...converterTemplateParaEmpreendimento(essenceData, 4),
    slug: "essence",
    destacado: true,
    preco: 350_000,
  },
  { ...converterTemplateParaEmpreendimento(grandParcData, 5), slug: "grand-parc", destacado: true },
  { ...converterTemplateParaEmpreendimento(montRoyalData, 6), slug: "mont-royal", destacado: true },
  { ...converterTemplateParaEmpreendimento(quartierData, 7), slug: "quartier", destacado: true },
  { ...grandClubCotiaData, destacado: true },
  { ...converterTemplateParaEmpreendimento(icaraiData, 8), slug: "icarai-parque-clube" },
  { ...converterTemplateParaEmpreendimento(jadeData, 9), slug: "jade", destacado: true },
  { ...converterTemplateParaEmpreendimento(obsidianData, 10), slug: "obsidian", destacado: true },
]

/* =============================================================================
 * HELPERS DE BUSCA
 * ========================================================================== */
export function buscarEmpreendimentoPorSlug(slug: string) {
  return empreendimentosMaster.find((e) => e.slug === slug)
}

export function buscarEmpreendimentosAtivos() {
  return empreendimentosMaster.filter((e) => e.ativo)
}

export function buscarEmpreendimentosDestaque() {
  return empreendimentosMaster.filter((e) => e.destacado)
}

export function adicionarEmpreendimento(novo: Empreendimento) {
  empreendimentosMaster.push(novo)
}

/* =============================================================================
 * GERAÇÃO DE OPÇÕES DE FILTRO
 * ========================================================================== */
export function getOpcoesFiltro(): OpcoesFilter {
  const statusSet = new Set<EmpreendimentoStatus>()
  const tiposSet = new Set<string>()
  const bairrosSet = new Set<string>()

  empreendimentosMaster.forEach((e) => {
    statusSet.add(e.status)
    tiposSet.add(e.tipo)
    bairrosSet.add(e.bairro)
  })

  return {
    status: [...statusSet],
    tipos: [...tiposSet],
    bairros: [...bairrosSet],
    faixas: [
      { label: "Até R$300.000", min: 0, max: 300_000 },
      { label: "R$300.001 a R$500.000", min: 300_001, max: 500_000 },
      { label: "R$500.001 a R$800.000", min: 500_001, max: 800_000 },
      { label: "Acima de R$800.000", min: 800_001, max: Number.POSITIVE_INFINITY },
    ],
  }
}

/* Exporta um snapshot pronto para consumo nos componentes ------------------- */
export const opcoesFiltros = getOpcoesFiltro()
