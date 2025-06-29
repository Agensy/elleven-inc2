// Tipos para o sistema de empreendimentos componentizado

export interface JadeEmpreendimentoGaleriaItem {
  url: string
  titulo: string
  descricao: string
}

export interface JadeEmpreendimentoInformacao {
  id: string
  titulo: string
  icon: string
  detalhes: {
    titulo: string
    subtitulo: string
    pontos: Array<{
      titulo: string
      distancia: string
    }>
    imagem: string
  }
}

export interface JadeEmpreendimentoTipologia {
  titulo: string
  especificacoes: Array<{
    label: string
    valor: string
  }>
  tipologias: Array<{
    nome: string
    area: string
    quartos: number
    banheiros: number
    vagas: number
    planta: string
    caracteristicas: string[]
  }>
}

export interface JadeEmpreendimentoData {
  nome: string
  subtitulo: string
  slogan: string
  descricao: string
  tipo: string
  area: string
  endereco: string
  localizacao: string
  imagens: {
    background: string
    logo: string
    rooftop?: string
    fachadas: JadeEmpreendimentoGaleriaItem[]
  }
  informacoes: JadeEmpreendimentoInformacao[]
  galeria: JadeEmpreendimentoGaleriaItem[]
  tipologia: JadeEmpreendimentoTipologia
}
