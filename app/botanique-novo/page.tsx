import { EmpreendimentoPage } from "@/components/empreendimento/EmpreendimentoPage"
import { botaniqueData } from "@/lib/data/botanique-data"
import type { Empreendimento } from "@/lib/types/empreendimento"

// Converter os dados do botaniqueData para a interface Empreendimento
const botaniqueEmpreendimento: Empreendimento = {
  // Identificação básica
  id: botaniqueData.id,
  slug: botaniqueData.slug,
  nome: botaniqueData.nome,
  subtitulo: botaniqueData.subtitulo,
  slogan: botaniqueData.slogan,

  // Localização
  localizacao: botaniqueData.localizacao,
  bairro: botaniqueData.bairro,

  // Características básicas
  tipo: botaniqueData.tipo,
  status: botaniqueData.status,
  area: botaniqueData.area,
  quartos: botaniqueData.quartos,
  banheiros: botaniqueData.banheiros,
  vagas: botaniqueData.vagas,
  preco: botaniqueData.preco,
  precoFormatado: botaniqueData.precoFormatado,
  entrega: botaniqueData.entrega,

  // Descrição e imagem
  descricao: botaniqueData.descricao,
  imagem: botaniqueData.imagem,

  // Galeria
  galeria: botaniqueData.galeria,

  // Identidade visual - usando a logo correta
  identidadeVisual: {
    logo: "/empreendimentos/logos/logo-botanique.png", // ✅ Logo correta
    corPrimaria: botaniqueData.identidadeVisual.corPrimaria,
    corSecundaria: botaniqueData.identidadeVisual.corSecundaria,
    imagemBackground: botaniqueData.identidadeVisual.imagemBackground,
  },

  // Plantas
  plantas: botaniqueData.plantas,

  // Especificações
  especificacoes: botaniqueData.especificacoes,

  // Localização
  coordenadas: botaniqueData.coordenadas,
  pontos_interesse: botaniqueData.pontos_interesse,

  // Outros dados
  diferenciais: botaniqueData.diferenciais,
  destacado: botaniqueData.destacado,
  ativo: botaniqueData.ativo,
  tags: botaniqueData.tags,
  categoria: botaniqueData.categoria,
}

export default function BotaniqueNovoPage() {
  return <EmpreendimentoPage data={botaniqueEmpreendimento} />
}
