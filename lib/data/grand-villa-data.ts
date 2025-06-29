import { JadeEmpreendimentoData } from "@/lib/types/jade-template"

// =============================================================================
// GRAND VILLA RESIDENCES - EXEMPLO PRÁTICO DO TEMPLATE JADE
// =============================================================================

export const grandVillaData: JadeEmpreendimentoData = {
  // ===== INFORMAÇÕES BÁSICAS =====
  nome: "GRAND VILLA RESIDENCES",
  subtitulo: "LANÇAMENTO EXCLUSIVO",
  slogan: "O Luxo Redefinido no Coração da Cidade",
  localizacao: "Jardins, São Paulo - SP",
  endereco: "Alameda Franca, 888",
  preco: "A partir de R$ 1.200.000",
  area: "80 a 120m²",
  entrega: "2026",
  tipo: "2 e 3 Dormitórios de Alto Padrão",
  unidades: "48 unidades",

  // ===== DESCRIÇÃO PRINCIPAL =====
  descricao:
    "No exclusivo bairro dos Jardins, São Paulo, o Grand Villa Residences representa o auge da sofisticação em empreendimentos residenciais. Com apenas 48 unidades, este projeto oferece privacidade e exclusividade incomparáveis, combinando arquitetura contemporânea com acabamentos de altíssimo padrão em uma das regiões mais nobres da cidade.",

  // ===== SEÇÃO OPORTUNIDADE RARA =====
  oportunidadeRara: {
    titulo: "Uma oportunidade única para quem busca o extraordinário",
    descricao:
      "O Grand Villa Residences oferece uma oportunidade exclusiva de investimento no coração dos Jardins. Apartamentos de luxo em um dos endereços mais prestigiados de São Paulo, com segurança absoluta e valorização garantida para investidores exigentes.",
  },

  // ===== IMAGENS ORGANIZADAS =====
  imagens: {
    background: "/empreendimentos/grand-villa/background-luxury.jpg",
    logo: "/empreendimentos/grand-villa/logo-grand-villa.png",
    fachadas: [
      { url: "/empreendimentos/grand-villa/fachada-principal.jpg", categoria: "Fachada Principal" },
      { url: "/empreendimentos/grand-villa/fachada-lateral.jpg", categoria: "Vista Lateral" },
      { url: "/empreendimentos/grand-villa/vista-aerea.jpg", categoria: "Vista Aérea" },
    ],
    planta: "/empreendimentos/grand-villa/planta-3-dorm.jpg",
    rooftop: "/empreendimentos/grand-villa/rooftop-luxury.jpg",
  },

  // ===== SISTEMA DE ABAS COM INFORMAÇÕES DETALHADAS =====
  informacoes: [
    {
      id: "localizacao",
      icon: "MapPin",
      titulo: "Localização Exclusiva",
      subtitulo: "Coração dos Jardins",
      descricao: "Localização privilegiada no bairro mais nobre de São Paulo, próximo aos melhores restaurantes, shopping centers e serviços premium.",
      cor: "blue",
      detalhes: {
        titulo: "Localização Exclusiva",
        subtitulo: "No coração dos Jardins, cercado pelos melhores serviços da cidade",
        imagem: "/empreendimentos/grand-villa/fachada-principal.jpg",
        pontos: [
          {
            icon: "MapPin",
            titulo: "Shopping Jardins",
            distancia: "200m (3 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Museu de Arte de São Paulo",
            distancia: "400m (6 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Hospital Albert Einstein",
            distancia: "600m (8 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Avenida Paulista",
            distancia: "500m (7 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Parque Trianon",
            distancia: "300m (4 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Estação Trianon-MASP",
            distancia: "450m (6 min a pé)",
          },
        ],
      },
    },
    {
      id: "lazer",
      icon: "Waves",
      titulo: "Lazer Sofisticado",
      subtitulo: "Infraestrutura Premium",
      descricao: "Infraestrutura de lazer exclusiva com acabamentos luxuosos e serviços de hotelaria.",
      cor: "blue",
      detalhes: {
        titulo: "Lazer Sofisticado",
        subtitulo: "Infraestrutura premium com serviços de hotelaria",
        imagem: "/empreendimentos/grand-villa/rooftop-luxury.jpg",
        pontos: [
          {
            icon: "Waves",
            titulo: "Piscina Infinity",
            distancia: "Com borda infinita e aquecimento",
          },
          {
            icon: "Eye",
            titulo: "Terraço Panorâmico",
            distancia: "Vista 360° da cidade",
          },
          {
            icon: "Dumbbell",
            titulo: "Spa & Fitness Premium",
            distancia: "Equipamentos Technogym e tratamentos",
          },
          {
            icon: "Users",
            titulo: "Wine Bar Exclusivo",
            distancia: "Adega climatizada e degustação",
          },
          {
            icon: "Wifi",
            titulo: "Business Center",
            distancia: "Salas privativas para reuniões",
          },
          {
            icon: "Users",
            titulo: "Concierge 24h",
            distancia: "Serviços personalizados",
          },
        ],
      },
    },
    {
      id: "seguranca",
      icon: "Shield",
      titulo: "Segurança Absoluta",
      subtitulo: "Proteção Máxima",
      descricao: "Sistema de segurança militar com tecnologia de ponta para máxima proteção e privacidade.",
      cor: "blue",
      detalhes: {
        titulo: "Segurança Absoluta",
        subtitulo: "Sistema militar com tecnologia de ponta para máxima proteção",
        imagem: "/empreendimentos/grand-villa/fachada-lateral.jpg",
        pontos: [
          {
            icon: "Shield",
            titulo: "Portaria Blindada",
            distancia: "Equipe de segurança especializada",
          },
          {
            icon: "Camera",
            titulo: "CFTV Inteligente",
            distancia: "Reconhecimento facial e placas",
          },
          {
            icon: "Lock",
            titulo: "Acesso Biométrico Duplo",
            distancia: "Digital e íris para máxima segurança",
          },
          {
            icon: "Shield",
            titulo: "Blindagem Perimetral",
            distancia: "Proteção balística certificada",
          },
          {
            icon: "Camera",
            titulo: "Central de Monitoramento",
            distancia: "24h com comunicação direta PM",
          },
          {
            icon: "Shield",
            titulo: "Bunker de Segurança",
            distancia: "Abrigo seguro para emergências",
          },
        ],
      },
    },
    {
      id: "investimento",
      icon: "Building",
      titulo: "Investimento Blue Chip",
      subtitulo: "Valorização Garantida",
      descricao: "Investimento premium em localização única com histórico comprovado de valorização acima do mercado.",
      cor: "blue",
      detalhes: {
        titulo: "Investimento Blue Chip",
        subtitulo: "Valorização garantida no endereço mais prestigiado de São Paulo",
        imagem: "/empreendimentos/grand-villa/vista-aerea.jpg",
        pontos: [
          {
            icon: "TrendingUp",
            titulo: "Valorização Premium",
            distancia: "Jardins: +20% ao ano historicamente",
          },
          {
            icon: "Home",
            titulo: "Demanda Executiva",
            distancia: "Alta procura por locação premium",
          },
          {
            icon: "Building",
            titulo: "ROI Excepcional",
            distancia: "Retorno superior a títulos privados",
          },
          {
            icon: "TrendingUp",
            titulo: "Liquidez Imediata",
            distancia: "Facilidade de revenda garantida",
          },
          {
            icon: "MapPin",
            titulo: "Blue Chip Location",
            distancia: "Jardins - endereço mais valorizado",
          },
          {
            icon: "Calendar",
            titulo: "Patrimônio Familiar",
            distancia: "Investimento para gerações futuras",
          },
        ],
      },
    },
  ],

  // ===== GALERIA COMPLETA =====
  galeria: [
    {
      url: "/empreendimentos/grand-villa/fachada-principal.jpg",
      categoria: "Fachada",
      titulo: "Fachada Principal",
      descricao: "Arquitetura contemporânea assinada por escritório renomado",
    },
    {
      url: "/empreendimentos/grand-villa/rooftop-luxury.jpg",
      categoria: "Rooftop",
      titulo: "Rooftop Premium",
      descricao: "Terraço exclusivo com piscina infinity e vista panorâmica",
    },
    {
      url: "/empreendimentos/grand-villa/spa-fitness.jpg",
      categoria: "Lazer",
      titulo: "Spa & Fitness",
      descricao: "Centro de bem-estar com equipamentos Technogym",
    },
    {
      url: "/empreendimentos/grand-villa/wine-bar.jpg",
      categoria: "Lazer",
      titulo: "Wine Bar Exclusivo",
      descricao: "Adega climatizada com sommelier particular",
    },
    {
      url: "/empreendimentos/grand-villa/living-premium.jpg",
      categoria: "Interno",
      titulo: "Living Premium",
      descricao: "Apartamento decorado com móveis de design",
    },
    {
      url: "/empreendimentos/grand-villa/cozinha-gourmet.jpg",
      categoria: "Interno",
      titulo: "Cozinha Gourmet",
      descricao: "Cozinha integrada com equipamentos Miele",
    },
    {
      url: "/empreendimentos/grand-villa/suite-master.jpg",
      categoria: "Interno",
      titulo: "Suíte Master",
      descricao: "Suíte principal com closet e hidromassagem",
    },
    {
      url: "/empreendimentos/grand-villa/lobby-entrance.jpg",
      categoria: "Áreas Comuns",
      titulo: "Lobby de Entrada",
      descricao: "Hall social com pé-direito duplo e concierge",
    },
  ],

  // ===== TIPOLOGIA/PLANTAS =====
  tipologia: {
    tipo: "Apartamento 120m²",
    subtitulo: "3 Suítes Premium",
    preco: "A partir de R$ 1.200.000",
    ambientes: [
      "Living Amplo | 45m² com varanda gourmet integrada",
      "3 Suítes | Sendo 1 master com closet e hidro",
      "Cozinha Gourmet | Equipamentos Miele e ilha central",
      "Home Office | Ambiente reservado para trabalho",
      "Lavabo Social | Acabamentos em mármore Carrara",
      "2 Vagas na Garagem | Cobertas e demarcadas",
    ],
    especificacoes: [
      "Piso em mármore Carrara em áreas sociais",
      "Cozinha com equipamentos Miele integrados",
      "Esquadrias importadas com vidros laminados",
      "Sistema de automação Lutron completo",
      "Ar-condicionado VRV com controle individual",
      "Acabamentos assinados por arquiteto renomado",
      "Iluminação LED com dimmer em todos ambientes",
      "Hidromassagem Jacuzzi na suíte master",
    ],
    imagem: "/empreendimentos/grand-villa/planta-3-dorm.jpg",
  },

  // ===== METADADOS SEO =====
  seo: {
    title: "GRAND VILLA RESIDENCES - Apartamentos de Luxo nos Jardins | Elleven Engenharia",
    description: "Grand Villa Residences - Apartamentos de alto padrão nos Jardins, São Paulo. 2 e 3 dormitórios a partir de R$ 1.200.000. Localização exclusiva com infraestrutura premium.",
    keywords: ["grand villa residences", "jardins", "apartamento de luxo", "alto padrão", "são paulo", "elleven engenharia", "lançamento exclusivo"],
  },
} 