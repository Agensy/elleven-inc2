// =============================================================================
// TIPOS PARA TEMPLATE JADE - EMPREENDIMENTOS PREMIUM
// =============================================================================

export interface JadeEmpreendimentoMidia {
  background: string
  logo: string
  fachadas: Array<{ url: string; categoria?: string }>
  planta: string
  rooftop?: string
}

export interface JadeEmpreendimentoPonto {
  icon: string
  titulo: string
  distancia: string
}

export interface JadeEmpreendimentoInformacaoDetalhes {
  titulo: string
  subtitulo: string
  imagem: string
  pontos: JadeEmpreendimentoPonto[]
}

export interface JadeEmpreendimentoInformacao {
  id: "localizacao" | "lazer" | "seguranca" | "investimento"
  icon: string
  titulo: string
  subtitulo: string
  descricao: string
  cor: string
  detalhes: JadeEmpreendimentoInformacaoDetalhes
}

export interface JadeEmpreendimentoGaleriaItem {
  url: string
  categoria: string
  titulo: string
  descricao: string
}

export interface JadeEmpreendimentoTipologia {
  tipo: string
  subtitulo: string
  preco: string
  ambientes: string[]
  especificacoes: string[]
  imagem: string
}

export interface JadeEmpreendimentoOportunidade {
  titulo: string
  descricao: string
}

// =============================================================================
// INTERFACE PRINCIPAL DO TEMPLATE JADE
// =============================================================================

export interface JadeEmpreendimentoData {
  // Informações básicas
  nome: string
  subtitulo: string
  slogan: string
  localizacao: string
  endereco: string
  preco?: string // Opcional - pode ser removido
  area: string
  entrega: string
  tipo: string
  unidades: string

  // Descrição principal
  descricao: string

  // Seção de oportunidade especial
  oportunidadeRara: JadeEmpreendimentoOportunidade

  // Imagens organizadas
  imagens: JadeEmpreendimentoMidia

  // Sistema de abas com informações detalhadas
  informacoes: JadeEmpreendimentoInformacao[]

  // Galeria completa
  galeria: JadeEmpreendimentoGaleriaItem[]

  // Tipologia/Plantas
  tipologia: JadeEmpreendimentoTipologia

  // Metadados SEO (opcional)
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
  }
}

// =============================================================================
// CONFIGURAÇÕES PADRÃO
// =============================================================================

export const jadeTemplateDefaults = {
  subtitulo: "BREVE LANÇAMENTO",
  informacoesPadrao: {
    localizacao: {
      id: "localizacao" as const,
      icon: "MapPin",
      titulo: "Localização Privilegiada",
      subtitulo: "Próximo aos principais pontos",
      descricao: "Localização estratégica com fácil acesso a comércios, serviços e transporte público.",
      cor: "blue"
    },
    lazer: {
      id: "lazer" as const,
      icon: "Waves", 
      titulo: "Lazer e Comodidades",
      subtitulo: "Infraestrutura Completa",
      descricao: "Completa infraestrutura de lazer e comodidades para seu conforto.",
      cor: "blue"
    },
    seguranca: {
      id: "seguranca" as const,
      icon: "Shield",
      titulo: "Segurança e Exclusividade", 
      subtitulo: "Sistema Completo",
      descricao: "Sistema de segurança completo para sua tranquilidade.",
      cor: "blue"
    },
    investimento: {
      id: "investimento" as const,
      icon: "Building",
      titulo: "Investimento Valorizado",
      subtitulo: "Oportunidade única",
      descricao: "Investimento em região valorizada com alto potencial de retorno.",
      cor: "blue"
    }
  }
} 