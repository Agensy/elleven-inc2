import { Metadata } from "next"
import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { JadeEmpreendimentoData } from "@/lib/types/jade-template"

// Exemplo simples para V0 - Dados de empreendimento
const exemploEmpreendimentoData: JadeEmpreendimentoData = {
  // Informações básicas
  nome: "GRAND VILLA",
  subtitulo: "LANÇAMENTO EXCLUSIVO",
  slogan: "Onde Luxo e Sofisticação se Encontram",
  localizacao: "Vila Madalena, São Paulo - SP",
  endereco: "Rua Aspicuelta, 500",
  preco: "A partir de R$ 580.000",
  area: "35 a 70m²",
  entrega: "2026",
  tipo: "Studios e 1 Dormitório",
  unidades: "88 unidades",

  // Descrição principal
  descricao: "No coração da Vila Madalena, o Grand Villa oferece uma experiência única de moradia, combinando modernidade, conforto e localização privilegiada em um dos bairros mais desejados de São Paulo.",

  // Seção oportunidade rara
  oportunidadeRara: {
    titulo: "Uma oportunidade única para investidores",
    descricao: "O Grand Villa representa uma oportunidade excepcional de investimento em uma das regiões mais valorizadas de São Paulo."
  },

  // Imagens organizadas
  imagens: {
    background: "/empreendimentos/jade/background-jade.jpeg",
    logo: "/empreendimentos/jade/logo-jade.png",
    fachadas: [
      { url: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg", categoria: "Fachada Principal" },
      { url: "/empreendimentos/jade/fachadas/JADE_Cardim 02.jpeg", categoria: "Vista Lateral" },
    ],
    planta: "/empreendimentos/jade/plantas/Planta Humanizada_ JADE.jpeg",
    rooftop: "/empreendimentos/jade/galeria/rooftop.jpeg",
  },

  // Sistema de abas com informações detalhadas
  informacoes: [
    {
      id: "localizacao",
      icon: "MapPin",
      titulo: "Localização Premium",
      subtitulo: "Vila Madalena",
      descricao: "Localização privilegiada na Vila Madalena, próximo a restaurantes, bares e estações de metrô.",
      cor: "blue",
      detalhes: {
        titulo: "Localização Premium",
        subtitulo: "No coração da Vila Madalena, próximo aos principais pontos",
        imagem: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
        pontos: [
          { icon: "MapPin", titulo: "Shopping Vila Madalena", distancia: "300m (4 min a pé)" },
          { icon: "MapPin", titulo: "Estação Fradique Coutinho", distancia: "500m (7 min a pé)" },
          { icon: "MapPin", titulo: "Restaurantes e Bares", distancia: "100m (2 min a pé)" },
        ],
      },
    },
    {
      id: "lazer",
      icon: "Waves",
      titulo: "Lazer Completo",
      subtitulo: "Infraestrutura Premium",
      descricao: "Áreas de lazer completas para toda a família.",
      cor: "blue",
      detalhes: {
        titulo: "Lazer Completo",
        subtitulo: "Infraestrutura premium para seu bem-estar",
        imagem: "/empreendimentos/jade/galeria/rooftop.jpeg",
        pontos: [
          { icon: "Waves", titulo: "Piscina Adulto", distancia: "Com deck molhado" },
          { icon: "Dumbbell", titulo: "Academia", distancia: "Equipamentos modernos" },
          { icon: "Users", titulo: "Salão de Festas", distancia: "Para eventos especiais" },
        ],
      },
    },
    {
      id: "seguranca",
      icon: "Shield",
      titulo: "Segurança Total",
      subtitulo: "Sistema Completo",
      descricao: "Sistema de segurança completo para sua tranquilidade.",
      cor: "blue",
      detalhes: {
        titulo: "Segurança Total",
        subtitulo: "Proteção completa 24 horas",
        imagem: "/empreendimentos/jade/fachadas/JADE_Cardim 02.jpeg",
        pontos: [
          { icon: "Shield", titulo: "Portaria 24h", distancia: "Equipe qualificada" },
          { icon: "Camera", titulo: "CFTV Completo", distancia: "Monitoramento total" },
          { icon: "Lock", titulo: "Controle de Acesso", distancia: "Sistema digital" },
        ],
      },
    },
    {
      id: "investimento",
      icon: "TrendingUp",
      titulo: "Investimento Sólido",
      subtitulo: "Alta Valorização",
      descricao: "Investimento em região com alto potencial de valorização.",
      cor: "blue",
      detalhes: {
        titulo: "Investimento Sólido",
        subtitulo: "Oportunidade única de investimento",
        imagem: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
        pontos: [
          { icon: "TrendingUp", titulo: "Valorização Constante", distancia: "Região em crescimento" },
          { icon: "Home", titulo: "Alta Demanda", distancia: "Procura garantida" },
          { icon: "Building", titulo: "ROI Atrativo", distancia: "Retorno garantido" },
        ],
      },
    },
  ],

  // Galeria
  galeria: [
    {
      url: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
      categoria: "Fachada",
      titulo: "Fachada Principal",
      descricao: "Design contemporâneo na Vila Madalena",
    },
    {
      url: "/empreendimentos/jade/galeria/rooftop.jpeg",
      categoria: "Lazer",
      titulo: "Área de Lazer",
      descricao: "Piscina e área gourmet",
    },
    {
      url: "/empreendimentos/jade/fachadas/JADE_Cardim 02.jpeg",
      categoria: "Fachada",
      titulo: "Vista Lateral",
      descricao: "Arquitetura sofisticada",
    },
  ],

  // Tipologia
  tipologia: {
    tipo: "Studio 42m²",
    subtitulo: "Tipologia Inteligente",
    preco: "A partir de R$ 580.000",
    ambientes: [
      "Living Integrado | Sala e cozinha em conceito aberto",
      "Varanda Gourmet | Com vista privilegiada",
      "Banheiro Completo | Acabamentos premium",
      "Dormitório | Espaço otimizado e funcional",
    ],
    especificacoes: [
      "Piso em porcelanato de alta qualidade",
      "Cozinha planejada com bancada em granito",
      "Esquadrias com vidros duplos",
      "Ar-condicionado instalado",
      "Acabamentos premium",
    ],
    imagem: "/empreendimentos/jade/plantas/Planta Humanizada_ JADE.jpeg",
  },

  // SEO
  seo: {
    title: "Grand Villa - Vila Madalena | Elleven Engenharia",
    description: "Grand Villa - Studios e apartamentos na Vila Madalena. A partir de R$ 580.000.",
    keywords: ["grand villa", "vila madalena", "apartamento", "studio"],
  },
}

export const metadata: Metadata = {
  title: exemploEmpreendimentoData.seo?.title || `${exemploEmpreendimentoData.nome} | Elleven`,
  description: exemploEmpreendimentoData.seo?.description || exemploEmpreendimentoData.descricao,
}

export default function ExemploV0Page() {
  return <EmpreendimentoPage data={exemploEmpreendimentoData} />
} 