import type { Empreendimento } from "@/lib/types/empreendimento"

export const montRoyalData: Empreendimento = {
  // Informações básicas
  id: 10,
  nome: "Mont Royal Condomínio Residencial",
  slug: "mont-royal",
  subtitulo: "Entregue",
  slogan: "Viva com elegância e sofisticação",

  // Localização
  localizacao: "Porto Feliz, São Paulo - SP",

  // Características do imóvel
  tipo: "Residencial",
  status: "Entregues",
  entrega: "2017",
  area: "45m² a 65m²",
  quartos: 2,
  vagas: 1,
  precoFormatado: "A partir de R$ 450.000",

  // Descrição principal
  descricao: `O Mont Royal é um empreendimento que combina elegância, sofisticação e qualidade de vida em um dos bairros mais desejados de São Paulo.

Com apartamentos de 2 dormitórios e uma completa área de lazer, o Mont Royal oferece o melhor em conforto e comodidade para você e sua família. Localizado estrategicamente na Vila Madalena, próximo a restaurantes, bares, shopping centers e com fácil acesso ao transporte público.

É o investimento perfeito para quem busca viver com estilo e praticidade na capital paulista.`,

  // Identidade visual
  identidadeVisual: {
    logo: "/empreendimentos/logos/logo-mont-royal.png",
    corPrimaria: "#8B5A3C", // Marrom elegante
    corSecundaria: "#2C1810", // Marrom escuro
    imagemBackground: "/empreendimentos/mont-royal/vitrine-mont-royal.webp",
  },

  // Imagens
  imagem: "/empreendimentos/mont-royal/galeria/fachada.webp",
  imagemDestaque: "/empreendimentos/mont-royal/vitrine-mont-royal.webp",

  // Galeria de imagens
  galeria: [
    "/empreendimentos/mont-royal/galeria/fachada.webp",
    "/empreendimentos/mont-royal/galeria/piscina.webp",
    "/empreendimentos/mont-royal/galeria/deck-solario.jpeg",
    "/empreendimentos/mont-royal/galeria/quadra.jpeg",
    "/empreendimentos/mont-royal/galeria/espaco-grill.jpeg",
    "/empreendimentos/mont-royal/galeria/salao-festas.jpeg",
  ],

  // Plantas
  plantas: [
    {
      id: 1,
      tipo: "2 Dormitórios - Tipo 1",
      area: "45m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/mont-royal/plantas/planta-final1.jpeg",
      preco: "A partir de R$ 450.000",
      descricao: "Apartamento compacto e funcional",
    },
    {
      id: 2,
      tipo: "2 Dormitórios - Tipo 2",
      area: "65m²",
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      imagem: "/empreendimentos/mont-royal/plantas/planta-final2.jpeg",
      preco: "A partir de R$ 550.000",
      descricao: "Apartamento amplo com 2 banheiros",
      destaque: true,
    },
  ],

  // Especificações técnicas
  especificacoes: {
    unidades: "120 apartamentos",
    andares: "15 andares",
    elevadores: "2 elevadores",
    entrega: "2025",
  },

  // Diferenciais
  diferenciais: [
    "Localização privilegiada na Vila Madalena",
    "Arquitetura moderna e sofisticada",
    "Área de lazer completa",
    "Segurança 24h",
    "Próximo ao metrô e transporte público",
    "Deck solário com vista panorâmica",
    "Espaço gourmet equipado",
    "Quadra poliesportiva",
  ],

  // Pontos de interesse
  pontos_interesse: [
    { nome: "Estação Vila Madalena", distancia: "800m", tipo: "transporte" },
    { nome: "Shopping Eldorado", distancia: "1,5km", tipo: "comercio" },
    { nome: "Parque Villa-Lobos", distancia: "2km", tipo: "lazer" },
    { nome: "Escolas", distancia: "300m", tipo: "educacao" },
    { nome: "Hospitais", distancia: "1km", tipo: "saude" },
    { nome: "Restaurantes", distancia: "200m", tipo: "comercio" },
  ],

  // SEO
  seo: {
    title: "Mont Royal Condomínio Residencial - Vila Madalena São Paulo",
    description:
      "Descubra o Mont Royal na Vila Madalena, apartamentos de 2 dormitórios com lazer completo e localização privilegiada em São Paulo.",
    keywords: "mont royal vila madalena, apartamentos são paulo, imóveis vila madalena, lançamento sp",
    ogTitle: "Mont Royal - Elegância e sofisticação na Vila Madalena",
    ogDescription: "Viva com estilo no Mont Royal, o empreendimento mais desejado da Vila Madalena.",
    ogImage: "/empreendimentos/mont-royal/vitrine-mont-royal.webp",
  },

  // Metadados
  ativo: true,
  destacado: true,
  tags: ["porto feliz", "condomínio fechado", "lazer completo", "entregues"],
  categoria: ["residencial", "condomínio clube"],
}
