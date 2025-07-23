/**
 * FORMULÁRIO COMPLETO PARA CADASTRO DE EMPREENDIMENTOS
 * 
 * Este formulário captura todas as informações necessárias para criar
 * um empreendimento completo no sistema, cobrindo todos os componentes
 * e funcionalidades implementadas.
 */

import type { EmpreendimentoTipo, EmpreendimentoStatus } from "@/lib/types/empreendimento"

// =============================================================================
// INTERFACE DO FORMULÁRIO COMPLETO
// =============================================================================

export interface FormularioEmpreendimentoCompleto {
  // ===== SEÇÃO 1: INFORMAÇÕES BÁSICAS =====
  informacoesBasicas: {
    nome: string                    // Nome do empreendimento
    slug: string                    // URL amigável (auto-gerado ou manual)
    subtitulo?: string              // Subtítulo opcional
    slogan?: string                 // Slogan/tagline do empreendimento
    descricao: string               // Descrição completa
    status: EmpreendimentoStatus    // Status atual do empreendimento
    entrega: string                 // Data/período de entrega
    ativo: boolean                  // Se está ativo no site
    destacado?: boolean             // Se aparece em destaque
  }

  // ===== SEÇÃO 2: LOCALIZAÇÃO E ENDEREÇO =====
  localizacao: {
    endereco: {
      rua: string                   // Rua completa
      numero: string                // Número
      bairro: string                // Bairro
      cidade: string                // Cidade
      estado: string                // Estado
      cep?: string                  // CEP (opcional)
    }
    localizacaoCompleta: string     // Endereço formatado para exibição
    coordenadas: {
      lat: number                   // Latitude para mapas
      lng: number                   // Longitude para mapas
    }
  }

  // ===== SEÇÃO 3: CARACTERÍSTICAS DO IMÓVEL =====
  caracteristicas: {
    tipo: EmpreendimentoTipo        // Tipo do empreendimento
    area: string                    // Área (ex: "45m² a 180m²")
    quartos: number                 // Número de quartos (0 para Studio)
    banheiros: number               // Número de banheiros
    vagas: number                   // Número de vagas (0 se não tiver)
  }

  // ===== SEÇÃO 4: PREÇOS E VALORES =====
  precificacao: {
    precoInicial: number            // Preço mínimo
    precoFinal?: number             // Preço máximo (opcional)
    precoFormatado: string          // Preço formatado para exibição
  }

  // ===== SEÇÃO 5: IMAGENS E MÍDIA =====
  midia: {
    imagemPrincipal: string         // Imagem principal/capa
    imagemDestaque?: string         // Imagem de destaque (opcional)
    galeria: string[]               // Array de URLs das imagens da galeria
  }

  // ===== SEÇÃO 6: IDENTIDADE VISUAL =====
  identidadeVisual: {
    corPrimaria: string             // Cor principal do empreendimento
    corSecundaria: string           // Cor secundária
    logo?: string                   // URL do logo (opcional)
    imagemBackground?: string       // Imagem de fundo (opcional)
  }

  // ===== SEÇÃO 7: DIFERENCIAIS E CARACTERÍSTICAS =====
  diferenciais: {
    lista: string[]                 // Lista de diferenciais
    tags: string[]                  // Tags para busca e filtros
    categoria: string[]             // Categorias do empreendimento
  }

  // ===== SEÇÃO 8: PONTOS DE INTERESSE =====
  pontosInteresse: Array<{
    nome: string                    // Nome do local
    distancia: string               // Distância (ex: "500m", "2km")
    tipo: "transporte" | "comercio" | "shopping" | "saude" | "educacao" | "parque" | "lazer"
  }>

  // ===== SEÇÃO 9: PLANTAS E TIPOLOGIAS =====
  plantas: Array<{
    id: number                      // ID único da planta
    nome: string                    // Nome da tipologia
    tipo: string                    // Tipo (Studio, Apartamento, etc.)
    area: string                    // Área da unidade
    quartos: number                 // Quartos (0 para Studio)
    banheiros: number               // Banheiros
    vagas: number                   // Vagas (0 se não tiver)
    imagem: string                  // URL da imagem da planta
    preco: string                   // Preço formatado
    descricao: string               // Descrição da tipologia
    destaque?: boolean              // Se é a planta em destaque
  }>

  // ===== SEÇÃO 10: ESPECIFICAÇÕES TÉCNICAS =====
  especificacoes: {
    unidades: string                // Número de unidades
    andares: string                 // Número de andares
    elevadores: string              // Informações sobre elevadores
    entrega: string                 // Data de entrega
    rooftop?: string                // Informações do rooftop (opcional)
    academia?: string               // Informações da academia (opcional)
  }

  // ===== SEÇÃO 11: INFORMAÇÕES PARA ABAS =====
  informacoesAbas?: Array<{
    id: string                      // ID único da aba
    titulo: string                  // Título da aba
    icon: string                    // Nome do ícone (Lucide)
    detalhes: {
      titulo: string                // Título do conteúdo
      subtitulo: string             // Subtítulo
      pontos: Array<{
        titulo: string              // Título do ponto
        distancia: string           // Valor/distância
      }>
      imagem: string                // URL da imagem
    }
  }>

  // ===== SEÇÃO 12: SEO E METADADOS =====
  seo?: {
    title: string                   // Título da página
    description: string             // Descrição meta
    keywords: string                // Palavras-chave
    ogTitle?: string                // Título Open Graph
    ogDescription?: string          // Descrição Open Graph
    ogImage?: string                // Imagem Open Graph
  }
}

// =============================================================================
// VALIDAÇÕES E REGRAS DE NEGÓCIO
// =============================================================================

export interface ValidacoesFormulario {
  // Campos obrigatórios sempre
  obrigatorios: {
    nome: boolean
    slug: boolean
    descricao: boolean
    status: boolean
    localizacao: boolean
    tipo: boolean
    area: boolean
    banheiros: boolean
    precoFormatado: boolean
    imagemPrincipal: boolean
    corPrimaria: boolean
  }

  // Campos condicionais baseados no tipo
  condicionais: {
    // Para Studios: quartos = 0, vagas pode ser 0
    studio: {
      quartos: 0
      vagas?: number
    }
    // Para outros tipos: quartos > 0
    apartamento: {
      quartos: number // > 0
      vagas: number
    }
  }

  // Validações de formato
  formatos: {
    slug: RegExp                    // Apenas letras, números e hífens
    coordenadas: {
      lat: { min: number, max: number }
      lng: { min: number, max: number }
    }
    cores: RegExp                   // Formato hexadecimal
    urls: RegExp                    // URLs válidas
  }
}

// =============================================================================
// CONFIGURAÇÕES DO FORMULÁRIO
// =============================================================================

export interface ConfiguracaoFormulario {
  // Seções que podem ser ocultadas baseado no tipo
  secoesDinamicas: {
    plantas: boolean                // Sempre visível
    pontosInteresse: boolean        // Sempre visível
    informacoesAbas: boolean        // Opcional
    rooftop: boolean                // Condicional
    academia: boolean               // Condicional
  }

  // Valores padrão
  padroes: {
    corPrimaria: string             // "#192849"
    corSecundaria: string           // "#8FBC8F"
    ativo: boolean                  // true
    destacado: boolean              // false
    quartos: number                 // 0 para Studio, 1+ para outros
    vagas: number                   // 0 para Studio, 1+ para outros
  }

  // Opções para selects
  opcoes: {
    tipos: EmpreendimentoTipo[]
    status: EmpreendimentoStatus[]
    tiposPontoInteresse: string[]
    icones: string[]                // Lista de ícones Lucide disponíveis
  }
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Gera slug automaticamente baseado no nome
 */
export function gerarSlug(nome: string): string {
  return nome
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '')    // Remove caracteres especiais
    .replace(/\s+/g, '-')            // Substitui espaços por hífens
    .replace(/-+/g, '-')             // Remove hífens duplicados
    .trim()
}

/**
 * Valida se o formulário está completo
 */
export function validarFormulario(dados: Partial<FormularioEmpreendimentoCompleto>): {
  valido: boolean
  erros: string[]
} {
  const erros: string[] = []

  // Validações básicas
  if (!dados.informacoesBasicas?.nome) erros.push('Nome é obrigatório')
  if (!dados.informacoesBasicas?.descricao) erros.push('Descrição é obrigatória')
  if (!dados.localizacao?.localizacaoCompleta) erros.push('Localização é obrigatória')
  if (!dados.caracteristicas?.tipo) erros.push('Tipo é obrigatório')
  if (!dados.midia?.imagemPrincipal) erros.push('Imagem principal é obrigatória')
  if (!dados.precificacao?.precoFormatado) erros.push('Preço é obrigatório')

  // Validações condicionais
  if (dados.caracteristicas?.tipo !== 'Studio' && (dados.caracteristicas?.quartos || 0) === 0) {
    erros.push('Quartos é obrigatório para apartamentos')
  }

  // Validações de formato
  if (dados.identidadeVisual?.corPrimaria && !/^#[0-9A-F]{6}$/i.test(dados.identidadeVisual.corPrimaria)) {
    erros.push('Cor primária deve estar no formato hexadecimal')
  }

  return {
    valido: erros.length === 0,
    erros
  }
}

/**
 * Converte dados do formulário para o formato Empreendimento
 */
export function converterParaEmpreendimento(dados: FormularioEmpreendimentoCompleto): any {
  return {
    // Mapeamento completo dos dados do formulário
    // para a interface Empreendimento
    nome: dados.informacoesBasicas.nome,
    slug: dados.informacoesBasicas.slug,
    subtitulo: dados.informacoesBasicas.subtitulo,
    slogan: dados.informacoesBasicas.slogan,
    localizacao: dados.localizacao.localizacaoCompleta,
    bairro: dados.localizacao.endereco.bairro,
    coordenadas: dados.localizacao.coordenadas,
    status: dados.informacoesBasicas.status,
    tipo: dados.caracteristicas.tipo,
    area: dados.caracteristicas.area,
    quartos: dados.caracteristicas.quartos,
    banheiros: dados.caracteristicas.banheiros,
    vagas: dados.caracteristicas.vagas,
    preco: dados.precificacao.precoInicial,
    precoFormatado: dados.precificacao.precoFormatado,
    descricao: dados.informacoesBasicas.descricao,
    entrega: dados.informacoesBasicas.entrega,
    ativo: dados.informacoesBasicas.ativo,
    destacado: dados.informacoesBasicas.destacado,
    imagem: dados.midia.imagemPrincipal,
    imagemDestaque: dados.midia.imagemDestaque,
    galeria: dados.midia.galeria,
    plantas: dados.plantas,
    diferenciais: dados.diferenciais.lista,
    identidadeVisual: dados.identidadeVisual,
    pontos_interesse: dados.pontosInteresse,
    especificacoes: dados.especificacoes,
    tags: dados.diferenciais.tags,
    categoria: dados.diferenciais.categoria
  }
}

// =============================================================================
// EXEMPLO DE USO
// =============================================================================

export const exemploFormularioCompleto: FormularioEmpreendimentoCompleto = {
  informacoesBasicas: {
    nome: "Exemplo Residencial",
    slug: "exemplo-residencial",
    subtitulo: "Lançamento Exclusivo",
    slogan: "Viva o extraordinário",
    descricao: "Empreendimento moderno com acabamentos de alto padrão...",
    status: "Lançamento",
    entrega: "Dezembro 2025",
    ativo: true,
    destacado: false
  },
  localizacao: {
    endereco: {
      rua: "Rua Exemplo",
      numero: "123",
      bairro: "Bairro Exemplo",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01234-567"
    },
    localizacaoCompleta: "Rua Exemplo, 123 - Bairro Exemplo, São Paulo - SP",
    coordenadas: {
      lat: -23.5505,
      lng: -46.6333
    }
  },
  caracteristicas: {
    tipo: "2 dormitórios",
    area: "65m² a 85m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1
  },
  precificacao: {
    precoInicial: 450000,
    precoFinal: 650000,
    precoFormatado: "A partir de R$ 450.000"
  },
  midia: {
    imagemPrincipal: "/images/exemplo/fachada.jpg",
    imagemDestaque: "/images/exemplo/destaque.jpg",
    galeria: [
      "/images/exemplo/fachada.jpg",
      "/images/exemplo/lobby.jpg",
      "/images/exemplo/apartamento.jpg"
    ]
  },
  identidadeVisual: {
    corPrimaria: "#192849",
    corSecundaria: "#8FBC8F",
    logo: "/images/exemplo/logo.png"
  },
  diferenciais: {
    lista: [
      "Localização privilegiada",
      "Acabamentos de alto padrão",
      "Área de lazer completa"
    ],
    tags: ["lançamento", "2 dormitórios", "lazer"],
    categoria: ["residencial", "médio padrão"]
  },
  pontosInteresse: [
    {
      nome: "Shopping Center",
      distancia: "500m",
      tipo: "shopping"
    },
    {
      nome: "Estação de Metrô",
      distancia: "800m",
      tipo: "transporte"
    }
  ],
  plantas: [
    {
      id: 1,
      nome: "2 Dormitórios 65m²",
      tipo: "Apartamento",
      area: "65m²",
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      imagem: "/images/exemplo/planta-65.jpg",
      preco: "A partir de R$ 450.000",
      descricao: "Apartamento compacto e funcional",
      destaque: true
    }
  ],
  especificacoes: {
    unidades: "120 unidades",
    andares: "15 andares",
    elevadores: "2 elevadores",
    entrega: "Dezembro 2025",
    rooftop: "Piscina e área gourmet",
    academia: "Fitness completo"
  }
}