/**
 * Utilitário centralizado para URLs de empreendimentos
 * Garante consistência em todos os componentes
 */

export interface EmpreendimentoRoute {
  slug: string
  url: string
  name: string
}

/**
 * Mapeamento centralizado de todas as rotas de empreendimentos
 */
export const EMPREENDIMENTO_ROUTES: Record<string, string> = {
  // Empreendimentos principais (lançamentos/destaque)
  jade: "/jade",
  obsidian: "/obsidian",
  "icarai-parque-clube": "/icarai",
  icarai: "/icarai", // Alias para compatibilidade

  // Empreendimentos entregues
  botanique: "/botanique",
  essence: "/essence",
  "le-mont": "/le-mont",
  "le-mont-2": "/le-mont-2",
  vert: "/vert",
  "grand-parc": "/grand-parc",
  "mont-royal": "/mont-royal",
  quartier: "/quartier",
  "grand-club-cotia": "/grand-club-cotia",
}

/**
 * Função principal para obter URL de empreendimento
 * Usada em todos os componentes para garantir consistência
 */
export function getEmpreendimentoUrl(slug: string | null | undefined): string {
  if (!slug) {
    return "/empreendimentos"
  }

  // Normalizar slug (remover espaços, converter para lowercase)
  const normalizedSlug = slug.toLowerCase().trim().replace(/\s+/g, "-")

  // Buscar URL no mapeamento
  const url = EMPREENDIMENTO_ROUTES[normalizedSlug]

  if (url) {
    return url
  }

  // Fallback: tentar com slug original
  const fallbackUrl = EMPREENDIMENTO_ROUTES[slug]
  if (fallbackUrl) {
    return fallbackUrl
  }

  // Último fallback: página de empreendimentos
  console.warn(`URL não encontrada para slug: ${slug}. Redirecionando para /empreendimentos`)
  return "/empreendimentos"
}

/**
 * Função para validar se uma rota de empreendimento existe
 */
export function isValidEmpreendimentoRoute(slug: string): boolean {
  const normalizedSlug = slug.toLowerCase().trim().replace(/\s+/g, "-")
  return normalizedSlug in EMPREENDIMENTO_ROUTES || slug in EMPREENDIMENTO_ROUTES
}

/**
 * Função para obter todas as rotas disponíveis
 */
export function getAllEmpreendimentoRoutes(): EmpreendimentoRoute[] {
  return Object.entries(EMPREENDIMENTO_ROUTES).map(([slug, url]) => ({
    slug,
    url,
    name: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  }))
}

/**
 * Função específica para links com âncoras (se necessário)
 */
export function getEmpreendimentoUrlWithAnchor(slug: string | null | undefined, anchor?: string): string {
  const baseUrl = getEmpreendimentoUrl(slug)

  if (anchor && baseUrl !== "/empreendimentos") {
    return `${baseUrl}#${anchor}`
  }

  return baseUrl
}
