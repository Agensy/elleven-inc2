import { JadeEmpreendimentoData } from "@/lib/types/jade-template"

// =============================================================================
// EXEMPLO DE DADOS PARA TEMPLATE JADE - EMPREENDIMENTO PREMIUM
// =============================================================================

export const exemploEmpreendimentoJade: JadeEmpreendimentoData = {
  // ===== INFORMAÇÕES BÁSICAS =====
  nome: "NOVO EMPREENDIMENTO",
  subtitulo: "BREVE LANÇAMENTO",
  slogan: "Onde Sofisticação e Exclusividade Se Encontram",
  localizacao: "Vila Madalena, São Paulo - SP",
  endereco: "Rua Augusta, 1234",
  preco: "A partir de R$ 450.000", // Opcional - pode ser removido
  area: "30 a 50m²",
  entrega: "2026",
  tipo: "Studios e 1 Dormitório",
  unidades: "96 unidades",

  // ===== DESCRIÇÃO PRINCIPAL =====
  descricao:
    "No coração da Vila Madalena, São Paulo, o [NOME] é um endereço privilegiado que combina sofisticação, tradição e conveniência. Este bairro, conhecido por sua rica vida cultural e excelente infraestrutura, oferece ótima proximidade com importantes pontos da cidade, como a Avenida Paulista, o Parque Ibirapuera e os centros comerciais e gastronômicos de renomadas regiões.",

  // ===== SEÇÃO OPORTUNIDADE RARA =====
  oportunidadeRara: {
    titulo: "Uma oportunidade rara para quem busca distinção",
    descricao:
      "O [NOME] oferece uma oportunidade única de investimento em uma das regiões mais valorizadas da cidade. Apartamentos sofisticados em um dos bairros mais desejados de São Paulo, com segurança e exclusividade para seu investimento.",
  },

  // ===== IMAGENS ORGANIZADAS =====
  imagens: {
    background: "/empreendimentos/novo-empreendimento/background.jpg",
    logo: "/empreendimentos/novo-empreendimento/logo.png",
    fachadas: [
      { url: "/empreendimentos/novo-empreendimento/fachada-01.jpg", categoria: "Fachada Principal" },
      { url: "/empreendimentos/novo-empreendimento/fachada-02.jpg", categoria: "Vista Lateral" },
      { url: "/empreendimentos/novo-empreendimento/fachada-03.jpg", categoria: "Vista Aérea" },
    ],
    planta: "/empreendimentos/novo-empreendimento/planta-humanizada.jpg",
    rooftop: "/empreendimentos/novo-empreendimento/rooftop.jpg",
  },

  // ===== SISTEMA DE ABAS COM INFORMAÇÕES DETALHADAS =====
  informacoes: [
    {
      id: "localizacao",
      icon: "MapPin",
      titulo: "Localização Privilegiada",
      subtitulo: "Próximo aos principais pontos",
      descricao: "Próximo a hospitais, estações de metrô, shopping centers e principais avenidas.",
      cor: "blue",
      detalhes: {
        titulo: "Localização Privilegiada",
        subtitulo: "No coração da Vila Madalena, próximo aos principais pontos da cidade",
        imagem: "/empreendimentos/novo-empreendimento/fachada-01.jpg",
        pontos: [
          {
            icon: "MapPin",
            titulo: "Shopping Vila Madalena",
            distancia: "300m (4 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Estação Fradique Coutinho",
            distancia: "500m (7 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Hospital Albert Einstein",
            distancia: "800m (12 min a pé)",
          },
          {
            icon: "MapPin",
            titulo: "Avenida Paulista",
            distancia: "2km (15 min de carro)",
          },
          {
            icon: "MapPin",
            titulo: "Parque Ibirapuera",
            distancia: "3km (20 min de carro)",
          },
          {
            icon: "MapPin",
            titulo: "Centro Empresarial",
            distancia: "1,5km (10 min de carro)",
          },
        ],
      },
    },
    {
      id: "lazer",
      icon: "Waves",
      titulo: "Lazer e Comodidades",
      subtitulo: "Infraestrutura Completa",
      descricao: "Completa infraestrutura de lazer e comodidades para seu conforto.",
      cor: "blue",
      detalhes: {
        titulo: "Lazer e Comodidades",
        subtitulo: "Infraestrutura completa para seu bem-estar e comodidade",
        imagem: "/empreendimentos/novo-empreendimento/rooftop.jpg",
        pontos: [
          {
            icon: "Waves",
            titulo: "Piscina Aquecida",
            distancia: "Com vista panorâmica da cidade",
          },
          {
            icon: "Eye",
            titulo: "Rooftop Gourmet",
            distancia: "Espaço para eventos e confraternizações",
          },
          {
            icon: "Dumbbell",
            titulo: "Academia Equipada",
            distancia: "Equipamentos modernos de última geração",
          },
          {
            icon: "Waves",
            titulo: "Spa e Sauna",
            distancia: "Espaço de relaxamento e bem-estar",
          },
          {
            icon: "Users",
            titulo: "Salão de Festas",
            distancia: "Área social para eventos especiais",
          },
          {
            icon: "Wifi",
            titulo: "Coworking",
            distancia: "Espaço de trabalho compartilhado",
          },
        ],
      },
    },
    {
      id: "seguranca",
      icon: "Shield",
      titulo: "Segurança e Exclusividade",
      subtitulo: "Sistema Completo",
      descricao: "Sistema de segurança completo para sua tranquilidade.",
      cor: "blue",
      detalhes: {
        titulo: "Segurança e Exclusividade",
        subtitulo: "Sistema de segurança completo para sua total tranquilidade",
        imagem: "/empreendimentos/novo-empreendimento/fachada-02.jpg",
        pontos: [
          {
            icon: "Shield",
            titulo: "Portaria 24h",
            distancia: "Equipe treinada e qualificada",
          },
          {
            icon: "Camera",
            titulo: "Sistema de Monitoramento",
            distancia: "CFTV completo em todas as áreas",
          },
          {
            icon: "Lock",
            titulo: "Controle de Acesso Digital",
            distancia: "Tecnologia avançada de segurança",
          },
          {
            icon: "Shield",
            titulo: "Elevadores Inteligentes",
            distancia: "Acesso controlado aos andares",
          },
          {
            icon: "Camera",
            titulo: "Sensores de Presença",
            distancia: "Detecção inteligente de movimento",
          },
          {
            icon: "Shield",
            titulo: "Sistema Perimetral",
            distancia: "Proteção completa do perímetro",
          },
        ],
      },
    },
    {
      id: "investimento",
      icon: "Building",
      titulo: "Investimento Valorizado",
      subtitulo: "Alto Potencial de Retorno",
      descricao: "Investimento em região valorizada com excelente potencial de valorização.",
      cor: "blue",
      detalhes: {
        titulo: "Investimento Valorizado",
        subtitulo: "Oportunidade única em uma das regiões mais valorizadas de São Paulo",
        imagem: "/empreendimentos/novo-empreendimento/fachada-03.jpg",
        pontos: [
          {
            icon: "TrendingUp",
            titulo: "Valorização Garantida",
            distancia: "Região com histórico de 15% ao ano",
          },
          {
            icon: "Home",
            titulo: "Alta Demanda Locativa",
            distancia: "Proximidade com centros empresariais",
          },
          {
            icon: "Building",
            titulo: "ROI Atrativo",
            distancia: "Retorno sobre investimento acima da média",
          },
          {
            icon: "TrendingUp",
            titulo: "Liquidez Garantida",
            distancia: "Facilidade de revenda pela localização",
          },
          {
            icon: "MapPin",
            titulo: "Localização Premium",
            distancia: "Vila Madalena - bairro mais desejado",
          },
          {
            icon: "Calendar",
            titulo: "Entrega Garantida",
            distancia: "Cronograma de obras rigorosamente seguido",
          },
        ],
      },
    },
  ],

  // ===== GALERIA COMPLETA =====
  galeria: [
    {
      url: "/empreendimentos/novo-empreendimento/fachada-01.jpg",
      categoria: "Fachada",
      titulo: "Vista Externa Principal",
      descricao: "Arquitetura contemporânea sofisticada na Vila Madalena",
    },
    {
      url: "/empreendimentos/novo-empreendimento/rooftop.jpg",
      categoria: "Rooftop",
      titulo: "Rooftop Gourmet",
      descricao: "Espaço gourmet com vista panorâmica da cidade",
    },
    {
      url: "/empreendimentos/novo-empreendimento/fachada-02.jpg",
      categoria: "Fachada",
      titulo: "Vista Lateral",
      descricao: "Design sofisticado com acabamentos premium",
    },
    {
      url: "/empreendimentos/novo-empreendimento/fachada-03.jpg",
      categoria: "Perspectiva",
      titulo: "Vista Aérea",
      descricao: "Localização privilegiada no coração da Vila Madalena",
    },
    {
      url: "/empreendimentos/novo-empreendimento/academia.jpg",
      categoria: "Lazer",
      titulo: "Academia Equipada",
      descricao: "Espaço fitness completo com equipamentos modernos",
    },
    {
      url: "/empreendimentos/novo-empreendimento/piscina.jpg",
      categoria: "Lazer",
      titulo: "Piscina Aquecida",
      descricao: "Piscina com deck e vista panorâmica",
    },
    {
      url: "/empreendimentos/novo-empreendimento/salao-festas.jpg",
      categoria: "Lazer",
      titulo: "Salão de Festas",
      descricao: "Espaço para eventos e confraternizações",
    },
    {
      url: "/empreendimentos/novo-empreendimento/coworking.jpg",
      categoria: "Trabalho",
      titulo: "Espaço Coworking",
      descricao: "Ambiente profissional para trabalho remoto",
    },
  ],

  // ===== TIPOLOGIA/PLANTAS =====
  tipologia: {
    tipo: "Studio 32m²",
    subtitulo: "Tipologia Inteligente",
    preco: "A partir de R$ 450.000",
    ambientes: [
      "Sala de Estar e Jantar | Integrada com cozinha gourmet",
      "Varanda Privativa | Vista privilegiada da cidade",
      "Banheiro Completo | Acabamentos em materiais nobres",
      "Aproveitamento Inteligente | Cada metro pensado com precisão",
    ],
    especificacoes: [
      "Piso em porcelanato de alta qualidade",
      "Cozinha com bancada em granito",
      "Esquadrias com vidros duplos",
      "Sistema de automação residencial",
      "Ar-condicionado split instalado",
      "Acabamentos premium em todos os ambientes",
    ],
    imagem: "/empreendimentos/novo-empreendimento/planta-humanizada.jpg",
  },

  // ===== METADADOS SEO (OPCIONAL) =====
  seo: {
    title: "NOVO EMPREENDIMENTO - Studios na Vila Madalena | Elleven Engenharia",
    description: "NOVO EMPREENDIMENTO - Studios sofisticados na Vila Madalena, São Paulo. A partir de R$ 450.000. Localização privilegiada com infraestrutura completa.",
    keywords: ["novo empreendimento", "vila madalena", "studio", "apartamento", "são paulo", "elleven engenharia"],
  },
}

// =============================================================================
// INSTRUÇÕES DE USO
// =============================================================================

/*
COMO USAR ESTE TEMPLATE:

1. COPIE este arquivo para: lib/data/[nome-empreendimento]-data.ts

2. SUBSTITUA todas as informações:
   - "NOVO EMPREENDIMENTO" → Nome real do empreendimento
   - "novo-empreendimento" → Slug do empreendimento
   - Todos os dados de exemplo por dados reais

3. ORGANIZE as imagens em:
   public/empreendimentos/[nome-empreendimento]/
   ├── background.jpg
   ├── logo.png
   ├── fachada-01.jpg
   ├── fachada-02.jpg
   ├── fachada-03.jpg
   ├── rooftop.jpg
   ├── planta-humanizada.jpg
   └── galeria/...

4. CRIE a página usando:
   app/[nome-empreendimento]/page.tsx

5. IMPORTE e use:
   import { dadosEmpreendimento } from "@/lib/data/[nome]-data"
   import JadeTemplatePage from "@/components/jade-template-page"
   
   export default function EmpreendimentoPage() {
     return <JadeTemplatePage data={dadosEmpreendimento} />
   }

TEMPO ESTIMADO: 30-60 minutos para criar um novo empreendimento
*/ 