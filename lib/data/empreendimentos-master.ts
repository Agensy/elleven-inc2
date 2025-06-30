import type { Empreendimento, OpcoesFilter } from "@/lib/types/empreendimento"

/**
 * Gera URL para página completa do empreendimento
 * Usa rotas diretas sem sufixo
 */
export function getEmpreendimentoUrl(slug: string): string {
  const routeMap: Record<string, string> = {
    "le-mont": "/le-mont",
    "le-mont-2": "/le-mont-2",
    botanique: "/botanique",
    jade: "/jade",
    obsidian: "/obsidian",
    "icarai-parque-clube": "/icarai",
    "grand-club-cotia": "/grand-club-cotia",
    vert: "/vert",
    essence: "/essence",
    "grand-parc": "/grand-parc",
    "mont-royal": "/mont-royal",
    quartier: "/quartier",
  }

  return routeMap[slug] || `/${slug}`
}

export const empreendimentosMaster: Empreendimento[] = [
  {
    id: "obsidian",
    slug: "obsidian",
    nome: "Obsidian",
    subtitulo: "Breve Lançamento Pinheiros by Gemini",
    descricao:
      "Localizado em Pinheiros-SP, um dos bairros mais nobres e valorizados da cidade, o OBSIDIAN é um empreendimento de alto padrão perfeito para quem busca um estilo de vida sofisticado, moderno e prático.",
    descricaoCompleta:
      "Com projeto arquitetônico inovador, o imóvel oferece máxima excelência em qualidade, conforto e funcionalidade, além de fácil acesso a centros comerciais e opções de lazer.",
    endereco: "Rua Artur de Azevedo, 132, Pinheiros, São Paulo - SP",
    status: "breve-lancamento",
    categoria: "alto-padrao",
    tipo: "Studios",
    imagemPrincipal: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
    imagemHero: "/empreendimentos/obsidian/background-obsidian.jpeg",
    logo: "/empreendimentos/obsidian/logo-obsidian.png",
    corPrimaria: "#1a1a1a",
    corSecundaria: "#333333",

    hero: {
      titulo: "Obsidian",
      subtitulo: "Viva a Exclusividade em Pinheiros",
      descricao:
        "Studios de alto padrão no coração de Pinheiros, com design sofisticado e localização privilegiada ao lado da Oscar Freire.",
      imagemFundo: "/empreendimentos/obsidian/background-obsidian.jpeg",
      cta: "Saiba Mais",
    },

    sobre: {
      titulo: "Conheça o Obsidian",
      descricao:
        "Localizado em Pinheiros-SP, um dos bairros mais nobres e valorizados da cidade, o OBSIDIAN é um empreendimento de alto padrão perfeito para quem busca um estilo de vida sofisticado, moderno e prático.",
      descricaoDetalhada:
        "Com projeto arquitetônico inovador, o imóvel oferece máxima excelência em qualidade, conforto e funcionalidade, além de fácil acesso a centros comerciais e opções de lazer.",
      imagem: "/empreendimentos/obsidian/fachadas/fachada 002.jpeg",
      caracteristicas: [
        "Studios de alto padrão (25 a 40m²)",
        "Infraestrutura completa de lazer",
        "Rooftop com vista panorâmica",
        "Sistema de segurança avançado",
        "Localização premium em Pinheiros",
      ],
    },

    informacoes: [
      {
        id: "localizacao",
        titulo: "Localização",
        icon: "MapPin",
        detalhes: {
          titulo: "Localização Premium",
          subtitulo: "No coração de Pinheiros, São Paulo, em um dos endereços mais desejados da cidade.",
          imagem: "/empreendimentos/obsidian/fachadas/fachada 003.jpeg",
          pontos: [
            { titulo: "Rua Oscar Freire", distancia: "40m (luxo e lifestyle)" },
            { titulo: "Estação Metrô Oscar Freire", distancia: "100m" },
            { titulo: "Rua dos Pinheiros", distancia: "800m (gastronomia e cultura)" },
            { titulo: "Hospital das Clínicas", distancia: "900m" },
            { titulo: "Instituto Tomie Ohtake", distancia: "700m" },
          ],
        },
      },
      {
        id: "seguranca",
        titulo: "Segurança",
        icon: "Shield",
        detalhes: {
          titulo: "Segurança Completa",
          subtitulo:
            "O Obsidian oferece um sistema de segurança avançado, garantindo tranquilidade total para você e sua família.",
          imagem: "/empreendimentos/obsidian/fachadas/fachada 004.jpeg",
          pontos: [
            { titulo: "Portaria 24h", distancia: "Equipe treinada, presente o tempo todo" },
            { titulo: "Sistema de monitoramento", distancia: "Câmeras em todas as áreas comuns" },
            { titulo: "Controle de acesso", distancia: "Sistema biométrico para moradores e visitantes" },
            { titulo: "Segurança perimetral", distancia: "Sensores de movimento e cerca eletrônica" },
          ],
        },
      },
      {
        id: "tecnologia",
        titulo: "Tecnologia",
        icon: "TrendingUp",
        detalhes: {
          titulo: "Tecnologia Avançada",
          subtitulo: "Sistemas inteligentes e modernos para máximo conforto e praticidade.",
          imagem: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
          pontos: [
            { titulo: "Acesso inteligente", distancia: "Fechaduras eletrônicas" },
            { titulo: "Sistema de aquecimento central", distancia: "Conforto térmico em todos os ambientes" },
            { titulo: "Infraestrutura para ar-condicionado", distancia: "Preparação completa" },
            { titulo: "Rooftop com tela de LED", distancia: "Entretenimento exclusivo" },
          ],
        },
      },
    ],

    tipologia: {
      titulo: "Plantas",
      especificacoes: [
        { label: "Tipo", valor: "Studios de alto padrão" },
        { label: "Área", valor: "25 a 40m²" },
        { label: "Entrega", valor: "Breve lançamento" },
        { label: "Unidades", valor: "Limitadas" },
      ],
      tipologias: [
        {
          nome: "Studio de Luxo",
          area: "25 a 40m²",
          quartos: 0,
          banheiros: 1,
          vagas: 0,
          planta: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
          caracteristicas: [
            "Ampla sala de estar e jantar",
            "Cozinha integrada",
            "Varanda",
            "Banheiro completo",
            "Acabamento premium",
          ],
        },
      ],
    },

    galeria: {
      titulo: "Galeria",
      imagens: [
        {
          src: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
          titulo: "Fachada Principal",
          alt: "Vista da fachada principal do Obsidian",
        },
        {
          src: "/empreendimentos/obsidian/fachadas/fachada 002.jpeg",
          titulo: "Vista Lateral",
          alt: "Vista lateral do empreendimento",
        },
        {
          src: "/empreendimentos/obsidian/fachadas/fachada 003.jpeg",
          titulo: "Entrada Principal",
          alt: "Hall de entrada do Obsidian",
        },
        {
          src: "/empreendimentos/obsidian/fachadas/fachada 004.jpeg",
          titulo: "Vista Noturna",
          alt: "Fachada iluminada durante a noite",
        },
      ],
    },

    diferenciais: [
      {
        titulo: "Sistema de Aquecimento Central",
        descricao: "Conforto térmico em todos os ambientes",
        icone: "Thermometer",
      },
      {
        titulo: "Fechadura Inteligente",
        descricao: "Acesso seguro e moderno",
        icone: "Key",
      },
      {
        titulo: "Rooftop Exclusivo",
        descricao: "Vista panorâmica com tela de LED",
        icone: "Eye",
      },
      {
        titulo: "Localização Privilegiada",
        descricao: "Ao lado da Oscar Freire e do metrô",
        icone: "MapPin",
      },
    ],

    lazer: [
      "Rooftop com vista panorâmica",
      "Piscina",
      "Espaço gourmet",
      "Academia",
      "Sala de jogos",
      "Área de convivência",
      "Tela de LED no rooftop",
    ],

    contato: {
      titulo: "Pronto para morar ou investir?",
      subtitulo:
        "Garanta seu imóvel no Obsidian e viva em um endereço exclusivo, com toda sofisticação, segurança e praticidade que você merece.",
      cta: "Quero Mais Informações",
    },
  },
]

/* ------------------------------------------------------------------------
 * OPÇÕES DE FILTROS - (mantidas para compatibilidade de UI)
 * --------------------------------------------------------------------- */
export const opcoesFiltros: OpcoesFilter = {
  tipos: ["Studio", "1 dormitório", "2 dormitórios", "3 dormitórios", "Cobertura"],
  status: ["Lançamento", "Breve lançamento", "Em obras", "Entregues"],
  bairros: [
    "Bela Vista",
    "Pinheiros",
    "Jardim D'Icaraí",
    "Chácara Roselândia",
    "Jardim Isis",
    "Vila Olímpia",
    "Jardins",
    "Morumbi",
    "Vila Madalena",
    "Nakamura Park",
    "Centro",
    "Jardim Nova Vida",
    "Rancho Grande",
    "Jardim Primavera",
    "Jardim Portela",
  ],
  faixas: [
    { label: "Até R$ 300.000", min: 0, max: 300000 },
    { label: "R$ 300.000 - R$ 500.000", min: 300000, max: 500000 },
    { label: "R$ 500.000 - R$ 800.000", min: 500000, max: 800000 },
    { label: "R$ 800.000 - R$ 1.200.000", min: 800000, max: 1200000 },
    { label: "R$ 1.200.000 - R$ 2.000.000", min: 1200000, max: 2000000 },
    { label: "Acima de R$ 2.000.000", min: 2000000, max: Number.POSITIVE_INFINITY },
  ],
}

/* ------------------------------------------------------------------------
 * EXPORTS
 * --------------------------------------------------------------------- */
export default empreendimentosMaster

// Para manter compatibilidade com código existente
export const empreendimentos = empreendimentosMaster

/* Helpers mantidos para compatibilidade -------------------------------- */
export function buscarEmpreendimentoPorSlug(slug: string) {
  return empreendimentosMaster.find((e) => e.slug === slug)
}

export function buscarEmpreendimentosAtivos() {
  return empreendimentosMaster.filter((e) => e.ativo)
}

export function buscarEmpreendimentosDestaque() {
  return empreendimentosMaster.filter((e) => e.ativo && e.destacado)
}
