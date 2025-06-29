import { Metadata } from "next"
import { EmpreendimentoPage } from "@/components/empreendimento"
import { JadeEmpreendimentoData } from "@/lib/types/jade-template"

// Dados do Obsidian usando a estrutura componentizada
const obsidianData: JadeEmpreendimentoData = {
  // Informações básicas
  nome: "OBSIDIAN",
  subtitulo: "LANÇAMENTO EXCLUSIVO",
  slogan: "Onde o Luxo Encontra a Sofisticação",
  localizacao: "Moema, São Paulo - SP",
  endereco: "Av. Ibirapuera, 2000",
  preco: "A partir de R$ 650.000",
  area: "40 a 80m²",
  entrega: "2026",
  tipo: "Apartamentos de 1 e 2 Dormitórios",
  unidades: "120 unidades",

  // Descrição principal
  descricao: 
    "No coração de Moema, São Paulo, o Obsidian é um endereço privilegiado que combina sofisticação urbana e exclusividade. Este bairro nobre, conhecido por sua excelente infraestrutura e proximidade com importantes centros empresariais, oferece a localização perfeita para quem busca qualidade de vida e valorização imobiliária.",

  // Seção oportunidade rara
  oportunidadeRara: {
    titulo: "Uma oportunidade única para investidores exigentes",
    descricao:
      "O Obsidian oferece apartamentos sofisticados em uma das regiões mais valorizadas de São Paulo, com infraestrutura premium e potencial de valorização excepcional.",
  },

  // Imagens organizadas
  imagens: {
    background: "/empreendimentos/obsidian/background-obsidian.jpeg",
    logo: "/empreendimentos/obsidian/logo-obsidian.png",
    fachadas: [
      { url: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg", categoria: "Fachada Principal" },
      { url: "/empreendimentos/obsidian/fachadas/fachada 002.jpeg", categoria: "Vista Lateral" },
      { url: "/empreendimentos/obsidian/fachadas/fachada 003.jpeg", categoria: "Vista Noturna" },
      { url: "/empreendimentos/obsidian/fachadas/fachada 004.jpeg", categoria: "Vista Aérea" },
    ],
    planta: "/empreendimentos/obsidian/planta-humanizada.jpg",
    rooftop: "/empreendimentos/obsidian/rooftop.jpg",
  },

  // Sistema de abas com informações detalhadas
  informacoes: [
    {
      id: "localizacao",
      icon: "MapPin",
      titulo: "Localização Premium",
      subtitulo: "Coração de Moema",
      descricao: "Localização estratégica em Moema, próximo aos principais centros empresariais e shopping centers.",
      cor: "blue",
      detalhes: {
        titulo: "Localização Premium",
        subtitulo: "No coração de Moema, próximo aos principais pontos da cidade",
        imagem: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
        pontos: [
          {
            icon: "MapPin",
            titulo: "Shopping Ibirapuera",
            distancia: "400m (5 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Parque Ibirapuera",
            distancia: "800m (10 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Estação Moema - Linha Lilás",
            distancia: "600m (8 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Hospital São Paulo",
            distancia: "1km (12 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Av. Paulista",
            distancia: "3km (15 min de carro)",
          },
          {
            icon: "MapPin",
            titulo: "Centro Empresarial Berrini",
            distancia: "4km (20 min de carro)",
          },
        ],
      },
    },
    {
      id: "lazer",
      icon: "Waves",
      titulo: "Lazer Exclusivo",
      subtitulo: "Infraestrutura Premium",
      descricao: "Comodidades exclusivas para um estilo de vida sofisticado e confortável.",
      cor: "blue",
      detalhes: {
        titulo: "Lazer Exclusivo",
        subtitulo: "Infraestrutura premium para seu bem-estar e lazer",
        imagem: "/empreendimentos/obsidian/rooftop.jpg",
        pontos: [
          {
            icon: "Waves",
            titulo: "Rooftop Infinity Pool",
            distancia: "Piscina infinita com vista panorâmica",
          },
          {
            icon: "Dumbbell",
            titulo: "Academia Techno Gym",
            distancia: "Equipamentos de última geração",
          },
          {
            icon: "Users",
            titulo: "Sky Lounge",
            distancia: "Ambiente exclusivo para eventos",
          },
          {
            icon: "Waves",
            titulo: "Spa Completo",
            distancia: "Sauna seca, sauna úmida e ofurô",
          },
          {
            icon: "Users",
            titulo: "Coworking Premium",
            distancia: "Espaços de trabalho sofisticados",
          },
          {
            icon: "Wifi",
            titulo: "Salão Gourmet",
            distancia: "Área gourmet com cozinha profissional",
          },
        ],
      },
    },
    {
      id: "seguranca",
      icon: "Shield",
      titulo: "Segurança Total",
      subtitulo: "Tecnologia Avançada",
      descricao: "Sistema de segurança de última geração para sua total tranquilidade.",
      cor: "blue",
      detalhes: {
        titulo: "Segurança Total",
        subtitulo: "Tecnologia de segurança avançada para máxima proteção",
        imagem: "/empreendimentos/obsidian/fachadas/fachada 002.jpeg",
        pontos: [
          {
            icon: "Shield",
            titulo: "Portaria Inteligente 24h",
            distancia: "Sistema automatizado de controle",
          },
          {
            icon: "Camera",
            titulo: "CFTV com IA",
            distancia: "Monitoramento inteligente completo",
          },
          {
            icon: "Lock",
            titulo: "Acesso Biométrico",
            distancia: "Reconhecimento facial e digital",
          },
          {
            icon: "Shield",
            titulo: "Elevadores Inteligentes",
            distancia: "Controle de acesso por pavimento",
          },
          {
            icon: "Camera",
            titulo: "Perímetro Protegido",
            distancia: "Sistema perimetral completo",
          },
          {
            icon: "Shield",
            titulo: "Central de Monitoramento",
            distancia: "Monitoramento 24h terceirizado",
          },
        ],
      },
    },
    {
      id: "investimento",
      icon: "TrendingUp",
      titulo: "Investimento Premium",
      subtitulo: "Alta Valorização",
      descricao: "Investimento em região nobre com histórico comprovado de valorização.",
      cor: "blue",
      detalhes: {
        titulo: "Investimento Premium",
        subtitulo: "Oportunidade única em uma das regiões mais valorizadas de São Paulo",
        imagem: "/empreendimentos/obsidian/fachadas/fachada 003.jpeg",
        pontos: [
          {
            icon: "TrendingUp",
            titulo: "Valorização Histórica",
            distancia: "Região com 18% de valorização anual",
          },
          {
            icon: "Home",
            titulo: "Demanda Locativa Premium",
            distancia: "Alta procura por executivos",
          },
          {
            icon: "Building",
            titulo: "ROI Excepcional",
            distancia: "Rentabilidade acima do mercado",
          },
          {
            icon: "TrendingUp",
            titulo: "Liquidez Garantida",
            distancia: "Moema - mercado sempre aquecido",
          },
          {
            icon: "MapPin",
            titulo: "Localização Nobre",
            distancia: "Moema - bairro consolidado",
          },
          {
            icon: "Calendar",
            titulo: "Entrega Garantida",
            distancia: "Construtora com histórico sólido",
          },
        ],
      },
    },
  ],

  // Galeria completa
  galeria: [
    {
      url: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
      categoria: "Fachada",
      titulo: "Fachada Principal",
      descricao: "Design contemporâneo sofisticado em Moema",
    },
    {
      url: "/empreendimentos/obsidian/rooftop.jpg",
      categoria: "Rooftop",
      titulo: "Rooftop Infinity",
      descricao: "Piscina infinita com vista panorâmica da cidade",
    },
    {
      url: "/empreendimentos/obsidian/fachadas/fachada 002.jpeg",
      categoria: "Fachada",
      titulo: "Vista Lateral",
      descricao: "Arquitetura premium com acabamentos exclusivos",
    },
    {
      url: "/empreendimentos/obsidian/fachadas/fachada 003.jpeg",
      categoria: "Noturna",
      titulo: "Vista Noturna",
      descricao: "Iluminação arquitetônica sofisticada",
    },
    {
      url: "/empreendimentos/obsidian/fachadas/fachada 004.jpeg",
      categoria: "Aérea",
      titulo: "Vista Aérea",
      descricao: "Localização privilegiada em Moema",
    },
    {
      url: "/empreendimentos/obsidian/academia.jpg",
      categoria: "Lazer",
      titulo: "Academia Premium",
      descricao: "Equipamentos Techno Gym de última geração",
    },
  ],

  // Tipologia/Plantas
  tipologia: {
    tipo: "Apartamento 55m²",
    subtitulo: "1 Dormitório Premium",
    preco: "A partir de R$ 650.000",
    ambientes: [
      "Living Ampliado | Integrado com varanda gourmet",
      "Suíte Master | Com closet e banheiro premium",
      "Cozinha Gourmet | Totalmente equipada e planejada",
      "Varanda Gourmet | Vista panorâmica da cidade",
    ],
    especificacoes: [
      "Piso em porcelanato Portobello",
      "Cozinha planejada com bancada de quartzo",
      "Esquadrias em alumínio com vidros laminados",
      "Sistema de automação residencial completo",
      "Ar-condicionado multi-split instalado",
      "Acabamentos premium em mármore Carrara",
    ],
    imagem: "/empreendimentos/obsidian/planta-humanizada.jpg",
  },

  // Metadados SEO
  seo: {
    title: "Obsidian - Apartamentos Premium em Moema | Elleven Engenharia",
    description: "Obsidian - Apartamentos sofisticados em Moema, São Paulo. A partir de R$ 650.000. Localização premium com infraestrutura completa.",
    keywords: ["obsidian", "moema", "apartamento", "premium", "são paulo", "elleven engenharia"],
  },
}

export const metadata: Metadata = {
  title: obsidianData.seo?.title || `${obsidianData.nome} | Elleven`,
  description: obsidianData.seo?.description || obsidianData.descricao,
}

export default function ObsidianComponentizadoPage() {
  return <EmpreendimentoPage data={obsidianData} />
} 