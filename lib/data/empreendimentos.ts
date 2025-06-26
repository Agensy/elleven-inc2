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
    id: "jade",
    nome: "Jade",
    slug: "jade",
    subtitulo: "Lançamento",
    slogan: "🧪 TESTE - Sofisticação em Cada Detalhe",
    localizacao: "Bela Vista, São Paulo - SP",
    status: "Lançamento",
    descricao:
      "No coração da Bela Vista (SP), em São Paulo, é um endereço privilegiado que combina sofisticação, tradição e conveniência. Este bairro, conhecido por sua rica vida cultural e excelente infraestrutura, oferece ótima proximidade com importantes pontos da cidade, como a Avenida Paulista, o Parque Trianon e os centros comerciais e gastronômicos de renomadas regiões como Vila Madalena e Itaim Bibi.",
    precoFormatado: "A partir de R$ 850.000",
    entrega: "2026",
    ativo: true,
    imagem: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
    imagemDestaque: "/empreendimentos/jade/background-jade.jpeg",
    diferenciais: [
      "🧪 TESTE - Nova funcionalidade implementada hoje!",
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
  },
  {
    id: "obsidian",
    nome: "Obsidian",
    slug: "obsidian",
    subtitulo: "BREVE LANÇAMENTO by Gemini",
    slogan: "Viva a Exclusividade",
    localizacao: "Pinheiros, São Paulo - SP",
    status: "Breve lançamento",
    descricao:
      "Localizado em Pinheiros-SP. Uma das regiões mais nobres e valorizadas da cidade, o OBSIDIAN de alto padrão é o empreendimento perfeito para quem busca um estilo de vida sofisticado, design, moderno e prático. Com projeto arquitetônico inovador, o imóvel foi desenvolvido para oferecer a máxima excelência em qualidade, conforto e funcionalidade. Com fácil acesso a centros comerciais e opções de lazer. É a opção ideal para quem busca conforto, sofisticação e praticidade.",
    precoFormatado: "A partir de R$ 950.000",
    entrega: "2027",
    ativo: true,
    imagem: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
    imagemDestaque: "/empreendimentos/obsidian/background-obsidian.jpeg",
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
  },
  {
    id: "icarai-parque-clube",
    nome: "Icaraí Parque Clube",
    slug: "icarai-parque-clube",
    subtitulo: "Em Obras",
    slogan: "Onde Natureza e Qualidade de Vida se Encontram",
    localizacao: "Salto, São Paulo - SP",
    status: "Em Obras",
    descricao:
      "Um lugar onde o equilíbrio entre qualidade de vida e o encanto da natureza cria o cenário perfeito para o seu novo lar. Com 55 mil metros quadrados, o Icaraí Parque Clube oferece uma experiência completa de moradia com infraestrutura de clube e a tranquilidade de um parque. Suas torres modernas com fachada contemporânea abrigam apartamentos funcionais e bem planejados, enquanto as áreas comuns proporcionam lazer e bem-estar para toda a família.",
    precoFormatado: "A partir de R$ 750.000",
    entrega: "Novembro 2026",
    ativo: true,
    imagem: "/empreendimentos/icarai-parque-clube/fachadas/ICARAI_TORRES DO ICARAI - FACHADA.jpeg",
    imagemDestaque: "/empreendimentos/icarai-parque-clube/background-icarai-abstract.png",
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
    especificacoes: {
      unidades: "408 unidades",
      andares: "4 torres",
      arquiteto: "Studio Gemini",
      entrega: "Novembro 2026",
    },
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
