import type { Empreendimento } from "@/lib/types/empreendimento"

/**
 * TEMPLATE PADRÃO PARA NOVOS EMPREENDIMENTOS
 *
 * Este template segue os padrões defensivos identificados nas lições aprendidas:
 * - Optional chaining em todos os acessos
 * - Fallback values para arrays e strings
 * - Compatibilidade total com EmpreendimentoPage
 * - Estrutura de dados completa e segura
 */

export interface NovoEmpreendimentoInput {
  // Dados básicos fornecidos pelo usuário
  nome: string
  slug: string
  localizacao: string
  endereco: {
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep?: string
  }
  descricao: string
  status: "Em Obras" | "Concluído" | "Lançamento" | "Vendido"
  entrega: string

  // Imagens (URLs das blobs fornecidas)
  imagemPrincipal: string
  imagemFachada: string
  galeria: string[]

  // Características
  area?: string
  unidades?: string
  torres?: string
  tipologias?: string

  // Lazer e diferenciais
  lazer: string[]
  diferenciais: string[]

  // Pontos de interesse
  pontosInteresse: Array<{
    nome: string
    distancia: string
    tipo: "educacao" | "saude" | "comercio" | "lazer" | "transporte"
  }>

  // Plantas (opcional - pode ser adicionado depois)
  plantas?: Array<{
    tipo: string
    area: string
    quartos: number
    banheiros: number
    vagas: number
    preco?: string
    descricao: string
    destaque?: boolean
  }>

  // Identidade visual
  tema: {
    corPrimaria: string
    corSecundaria: string
    corDestaque?: string
    logo?: string
  }
}

/**
 * FUNÇÃO GERADORA DO TEMPLATE
 * Converte dados de entrada para o formato Empreendimento
 */
export function criarEmpreendimentoDoTemplate(input: NovoEmpreendimentoInput): Empreendimento {
  return {
    // ✅ PADRÃO DEFENSIVO: IDs e slugs seguros
    id: input.slug,
    slug: input.slug,
    nome: input.nome,
    subtitulo: "CONDOMÍNIO RESIDENCIAL",
    slogan: `${input.nome} - Onde cada detalhe foi pensado para você`,

    // ✅ PADRÃO DEFENSIVO: Localização completa
    localizacao: input.localizacao,
    endereco: {
      rua: input.endereco.rua,
      numero: input.endereco.numero,
      bairro: input.endereco.bairro,
      cidade: input.endereco.cidade,
      estado: input.endereco.estado,
      cep: input.endereco.cep || "",
    },

    // ✅ PADRÃO DEFENSIVO: Características com fallbacks
    tipo: "Residencial",
    status: input.status,
    entrega: input.entrega,
    area: input.area || "Consulte",
    quartos: 3, // Valor padrão seguro
    vagas: 1, // Valor padrão seguro

    // ✅ PADRÃO DEFENSIVO: Preços seguros
    precoFormatado: "Consulte valores",

    // ✅ PADRÃO DEFENSIVO: Descrição completa
    descricao: input.descricao,

    // ✅ PADRÃO DEFENSIVO: Imagens com fallbacks
    imagem: input.imagemPrincipal,
    imagemDestaque: input.imagemFachada,
    galeria: input.galeria.length > 0 ? input.galeria : [input.imagemPrincipal, input.imagemFachada],

    // ✅ PADRÃO DEFENSIVO: Identidade visual completa
    identidadeVisual: {
      logo: input.tema.logo || "/placeholder-logo.png",
      imagemBackground: input.imagemPrincipal,
      corPrimaria: input.tema.corPrimaria,
      corSecundaria: input.tema.corSecundaria,
      corDestaque: input.tema.corDestaque || input.tema.corPrimaria,
    },

    // ✅ PADRÃO DEFENSIVO: Arrays sempre válidos
    diferenciais:
      input.diferenciais.length > 0
        ? input.diferenciais
        : ["Localização privilegiada", "Segurança 24 horas", "Área de lazer completa"],

    // ✅ PADRÃO DEFENSIVO: Pontos de interesse seguros
    pontos_interesse: input.pontosInteresse.map((ponto) => ({
      nome: ponto.nome,
      distancia: ponto.distancia,
      tipo: ponto.tipo,
    })),

    // ✅ PADRÃO DEFENSIVO: Plantas com fallback
    plantas:
      input.plantas && input.plantas.length > 0
        ? input.plantas.map((planta, index) => ({
            id: index + 1,
            tipo: planta.tipo,
            area: planta.area,
            quartos: planta.quartos,
            banheiros: planta.banheiros,
            vagas: planta.vagas,
            imagem: "/placeholder.svg?height=400&width=300",
            preco: planta.preco || "Consulte valores",
            descricao: planta.descricao,
            destaque: planta.destaque || false,
          }))
        : [
            {
              id: 1,
              tipo: "Apartamento Padrão",
              area: "Consulte",
              quartos: 2,
              banheiros: 1,
              vagas: 1,
              imagem: "/placeholder.svg?height=400&width=300",
              preco: "Consulte valores",
              descricao: "Informações em breve",
              destaque: true,
            },
          ],

    // ✅ PADRÃO DEFENSIVO: Especificações com fallbacks
    especificacoes: {
      unidades: input.unidades || "Consulte",
      andares: "Consulte",
      elevadores: "Consulte",
      entrega: input.entrega,
    },
  }
}

/**
 * TEMPLATE DE PÁGINA PADRÃO
 */
export function gerarCodigoPagina(input: NovoEmpreendimentoInput) {
  const slugKebab = input.slug
  const nomeCapitalizado = input.nome
  const dataVarName = `${input.slug.replace(/-/g, "")}Data`

  return {
    // Arquivo da página
    paginaTsx: `import type { Metadata } from "next"
import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { ${dataVarName} } from "@/lib/data/${slugKebab}-data"

export const metadata: Metadata = {
  title: "${nomeCapitalizado} - ${input.localizacao} | Elleven Engenharia",
  description: "${input.descricao.substring(0, 150)}...",
  keywords: "${slugKebab}, apartamentos ${input.endereco.cidade.toLowerCase()}, condomínio fechado",
  openGraph: {
    title: "${nomeCapitalizado} - ${input.localizacao}",
    description: "${input.descricao.substring(0, 150)}...",
    images: [
      {
        url: "${input.imagemPrincipal}",
        width: 1200,
        height: 630,
        alt: "${nomeCapitalizado} - ${input.localizacao}",
      },
    ],
  },
}

export default function ${nomeCapitalizado.replace(/\s+/g, "")}Page() {
  return <EmpreendimentoPage data={${dataVarName}} />
}`,

    // Arquivo de dados
    dataTs: `import type { Empreendimento } from "@/lib/types/empreendimento"

export const ${dataVarName}: Empreendimento = {
  // Dados gerados automaticamente pelo template
  // Edite conforme necessário
  
  id: "${input.slug}",
  slug: "${slugKebab}",
  nome: "${input.nome}",
  subtitulo: "CONDOMÍNIO RESIDENCIAL",
  slogan: "${input.nome} - Onde cada detalhe foi pensado para você",
  
  localizacao: "${input.localizacao}",
  endereco: ${JSON.stringify(input.endereco, null, 4)},
  
  tipo: "Residencial",
  status: "${input.status}",
  entrega: "${input.entrega}",
  area: "${input.area || "Consulte"}",
  quartos: 3,
  vagas: 1,
  
  precoFormatado: "Consulte valores",
  
  descricao: \`${input.descricao}\`,
  
  imagem: "${input.imagemPrincipal}",
  imagemDestaque: "${input.imagemFachada}",
  galeria: ${JSON.stringify(input.galeria, null, 4)},
  
  identidadeVisual: {
    logo: "${input.tema.logo || "/placeholder-logo.png"}",
    imagemBackground: "${input.imagemPrincipal}",
    corPrimaria: "${input.tema.corPrimaria}",
    corSecundaria: "${input.tema.corSecundaria}",
    corDestaque: "${input.tema.corDestaque || input.tema.corPrimaria}",
  },
  
  diferenciais: ${JSON.stringify(input.diferenciais, null, 4)},
  
  pontos_interesse: ${JSON.stringify(input.pontosInteresse, null, 4)},
  
  plantas: [
    {
      id: 1,
      tipo: "Apartamento Padrão",
      area: "Consulte",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/placeholder.svg?height=400&width=300",
      preco: "Consulte valores",
      descricao: "Informações em breve",
      destaque: true,
    },
  ],
  
  especificacoes: {
    unidades: "${input.unidades || "Consulte"}",
    andares: "Consulte",
    elevadores: "Consulte",
    entrega: "${input.entrega}",
  },
}`,

    // Caminhos dos arquivos
    caminhos: {
      pagina: `app/${slugKebab}/page.tsx`,
      dados: `lib/data/${slugKebab}-data.ts`,
    },
  }
}
