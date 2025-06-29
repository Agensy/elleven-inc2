import { Metadata } from "next"
import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { Empreendimento } from "@/lib/types/empreendimento"

// Dados de exemplo do Obsidian para demonstração do sistema componentizado
const obsidianData: Empreendimento = {
  id: 1,
  slug: "obsidian",
  nome: "OBSIDIAN",
  subtitulo: "LANÇAMENTO EXCLUSIVO",
  slogan: "Onde o Luxo Encontra a Sofisticação",
  localizacao: "Moema, São Paulo - SP",
  bairro: "Moema",
  endereco: {
    rua: "Av. Ibirapuera",
    numero: "2000",
    bairro: "Moema",
    cidade: "São Paulo",
    estado: "SP",
    cep: "04029-200"
  },
  coordenadas: {
    lat: -23.5858,
    lng: -46.6458
  },
  pontos_interesse: [],
  tipo: "2 dormitórios",
  status: "Lançamento",
  area: "40 a 80m²",
  quartos: 2,
  banheiros: 2,
  vagas: 1,
  preco: 650000,
  precoFormatado: "A partir de R$ 650.000",
  entrega: "2026",
  descricao: "No coração de Moema, São Paulo, o Obsidian é um endereço privilegiado que combina sofisticação urbana e exclusividade. Este bairro nobre, conhecido por sua excelente infraestrutura e proximidade com importantes centros empresariais, oferece a localização perfeita para quem busca qualidade de vida e valorização imobiliária.",
  destaque: "Uma oportunidade única para investidores exigentes",
  diferenciais: ["Localização Premium", "Infraestrutura Completa", "Segurança 24h"],
  imagem: "/empreendimentos/obsidian/fachada.png",
  imagemDestaque: "/empreendimentos/obsidian/background-obsidian.jpeg",
  galeria: [
    "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
    "/empreendimentos/obsidian/fachadas/fachada 002.jpeg",
    "/empreendimentos/obsidian/fachadas/fachada 003.jpeg",
    "/empreendimentos/obsidian/fachadas/fachada 004.jpeg"
  ],
  identidadeVisual: {
    logo: "/empreendimentos/obsidian/logo-obsidian.png",
    corPrimaria: "#192849",
    corSecundaria: "#FF6B35",
    imagemBackground: "/empreendimentos/obsidian/background-obsidian.jpeg"
  },
  plantas: [
    {
      id: 1,
      tipo: "Apartamento 55m²",
      area: "55m²",
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      imagem: "/empreendimentos/obsidian/planta-humanizada.jpg",
      preco: "A partir de R$ 650.000",
      descricao: "Apartamento de 2 dormitórios com living integrado e varanda gourmet",
      destaque: true
    }
  ],
  especificacoes: {
    unidades: "120 unidades",
    andares: "15 andares",
    elevadores: "2 elevadores",
    entrega: "2026"
  },
  destacado: true,
  ativo: true,
  tags: ["luxo", "moema", "premium"],
  categoria: ["residencial", "alto-padrao"]
}

export const metadata: Metadata = {
  title: `${obsidianData.nome} | Elleven`,
  description: obsidianData.descricao,
}

export default function ObsidianComponentizadoPage() {
  return <EmpreendimentoPage data={obsidianData} />
} 