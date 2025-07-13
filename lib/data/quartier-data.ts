import type { EmpreendimentoData } from "@/lib/types/empreendimento"

export const quartierData: any = {
  // Informações básicas
  nome: "Quartier Residencial Clube",
  slug: "quartier",
  subtitulo: "Em Obras",
  slogan: "O lar que conecta conforto, segurança e praticidade",

  // Localização
  localizacao: "Itapevi, São Paulo - SP",
  endereco: {
    rua: "Rua São Geraldo",
    numero: "89",
    bairro: "Jardim Portela",
    cidade: "Itapevi",
    estado: "SP",
    cep: "06694-000",
  },

  // Características do imóvel
  tipo: "Residencial",
  status: "Entregues",
  entrega: "2026",
  area: "36,60m² a 45,82m²",
  quartos: 2,
  vagas: 1,
  precoFormatado: "A partir de R$ 280.000",

  // Descrição principal
  descricao: `O Quartier é um residencial clube planejado para oferecer qualidade de vida, conforto e praticidade, com arquitetura contemporânea, traços retos e cores suaves.

Localizado estrategicamente em Itapevi, próximo à Rodovia Castelo Branco, o Quartier garante fácil acesso a São Paulo e às principais regiões comerciais. O projeto conta com apartamentos de 2 dormitórios, segurança 24h e diversas opções de lazer, incluindo piscina, salão de festas, quadra poliesportiva, brinquedoteca e mais.

É o empreendimento perfeito para quem busca um lar moderno, seguro e totalmente conectado à cidade.`,

  // Identidade visual
  identidadeVisual: {
    logo: "/empreendimentos/logos/logo-quartier.png",
    corPrimaria: "#DC2626", // Vermelho
    corSecundaria: "#1F2937", // Cinza escuro
    imagemBackground: "/empreendimentos/quartier/vitrine-quartier.webp",
  },

  // Imagens
  imagem: "/empreendimentos/quartier/galeria/fachada-moderna.webp",
  imagemDestaque: "/empreendimentos/quartier/vitrine-quartier.webp",

  // Galeria de imagens
  galeria: [
    "/empreendimentos/quartier/galeria/fachada-moderna.webp",
    "/empreendimentos/quartier/galeria/portaria-entrada.webp",
    "/empreendimentos/quartier/galeria/piscina.webp",
    "/empreendimentos/quartier/galeria/salao-de-festas.webp",
    "/empreendimentos/quartier/galeria/living-decorado.webp",
    "/empreendimentos/quartier/galeria/churrasqueira.webp",
    "/empreendimentos/quartier/galeria/playground.webp",
    "/empreendimentos/quartier/galeria/brinquedoteca.webp",
    "/empreendimentos/quartier/galeria/quadra.webp",
    "/empreendimentos/quartier/galeria/redario.webp",
    "/empreendimentos/quartier/galeria/bicicletario.webp",
    "/empreendimentos/quartier/galeria/implantacao.webp",
  ],

  // Plantas
  plantas: [
    {
      id: 1,
      tipo: "2 Dormitórios - Planta Final 1",
      area: "45,82m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/quartier/plantas/planta-final-1.webp",
      preco: "A partir de R$ 345.000",
      descricao: "Apartamento com sala ampla integrada e dois dormitórios bem distribuídos",
      destaque: true,
    },
    {
      id: 2,
      tipo: "2 Dormitórios - Planta Final 2",
      area: "43,31m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/quartier/plantas/planta-final-2.webp",
      preco: "A partir de R$ 320.000",
      descricao: "Apartamento funcional com cozinha integrada e varanda",
    },
    {
      id: 3,
      tipo: "2 Dormitórios - Torre 1 Compacto",
      area: "36,60m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/placeholder.svg?height=400&width=600",
      preco: "A partir de R$ 280.000",
      descricao: "Apartamento compacto e funcional na Torre 1",
    },
    {
      id: 4,
      tipo: "2 Dormitórios - Torre 1 Amplo",
      area: "45,33m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/placeholder.svg?height=400&width=600",
      preco: "A partir de R$ 340.000",
      descricao: "Apartamento mais amplo na Torre 1",
    },
    {
      id: 5,
      tipo: "2 Dormitórios - Torre 2 Funcional",
      area: "42,03m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/placeholder.svg?height=400&width=600",
      preco: "A partir de R$ 315.000",
      descricao: "Apartamento funcional na Torre 2",
    },
    {
      id: 6,
      tipo: "2 Dormitórios - Torre 2 Premium",
      area: "45,82m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/placeholder.svg?height=400&width=600",
      preco: "A partir de R$ 345.000",
      descricao: "Apartamento premium na Torre 2",
    },
  ],

  // Especificações técnicas
  especificacoes: {
    unidades: "198 apartamentos",
    andares: "2 torres",
    elevadores: "2 elevadores por torre",
    entrega: "2026",
  },

  // Diferenciais
  diferenciais: [
    "198 apartamentos em 2 torres modernas",
    "Arquitetura contemporânea com traços retos",
    "Próximo à Rodovia Castelo Branco",
    "Lazer completo com mais de 8 opções",
    "Segurança 24h com portaria",
    "240 vagas de garagem (198 + 40 visitantes + 2 carga/descarga)",
    "Bicicletário e redário exclusivos",
    "Living decorado e brinquedoteca",
  ],

  // Pontos de interesse
  pontos_interesse: [
    { nome: "Rodovia Castelo Branco", distancia: "1km", tipo: "transporte" },
    { nome: "Shopping Itapevi", distancia: "2km", tipo: "comercio" },
    { nome: "CPTM Itapevi", distancia: "3km", tipo: "transporte" },
    { nome: "Escolas", distancia: "500m", tipo: "educacao" },
    { nome: "Supermercados", distancia: "800m", tipo: "comercio" },
    { nome: "Hospitais", distancia: "1,5km", tipo: "saude" },
    { nome: "Universidades", distancia: "2,5km", tipo: "educacao" },
  ],

  // Seções da página
  secoes: {
    hero: {
      titulo: "O lar que conecta conforto, segurança e praticidade",
      subtitulo: "Viva a praticidade e qualidade de vida que você e sua família merecem",
      ctas: ["Quero Saber Mais", "Agendar Visita", "Receber Plantas"],
    },

    sobre: {
      titulo: "Conheça o Quartier",
      conteudo: `O Quartier é um residencial clube planejado para oferecer qualidade de vida, conforto e praticidade, com arquitetura contemporânea, traços retos e cores suaves.

Localizado estrategicamente em Itapevi, próximo à Rodovia Castelo Branco, o Quartier garante fácil acesso a São Paulo e às principais regiões comerciais. O projeto conta com apartamentos de 2 dormitórios, segurança 24h e diversas opções de lazer.

É o empreendimento perfeito para quem busca um lar moderno, seguro e totalmente conectado à cidade.`,
    },

    informacoes: {
      localizacao: {
        titulo: "Localização Estratégica",
        descricao:
          "Situado em Itapevi, com rápido acesso à Rodovia Castelo Branco e proximidade com shopping centers, escolas, supermercados e CPTM.",
      },

      lazer: {
        titulo: "Lazer e Comodidades",
        itens: [
          "Piscina adulto e infantil",
          "Salão de festas climatizado",
          "Living decorado com TV",
          "Espaço churrasqueira",
          "Playground e brinquedoteca",
          "Quadra poliesportiva",
          "Redário",
          "Bicicletário",
          "Portaria com controle de acesso",
        ],
      },

      seguranca: {
        titulo: "Segurança e Exclusividade",
        descricao:
          "Portaria com controle 24h, acesso monitorado para veículos e pedestres, estrutura de condomínio clube fechado e seguro.",
      },

      investimento: {
        titulo: "Investimento Valorizado",
        descricao:
          "Região em plena expansão imobiliária com alto potencial de valorização, infraestrutura completa e proximidade com polos empresariais e logísticos.",
      },
    },
  },

  // SEO
  seo: {
    title: "Quartier Residencial Clube Itapevi - Conforto e Modernidade",
    description:
      "Descubra o Quartier Residencial Clube em Itapevi, com apartamentos de 2 dormitórios, lazer completo e segurança 24h. Um novo estilo de vida!",
    keywords: "quartier itapevi, apartamentos na castelo branco, residencial clube itapevi, imóveis sp",
    ogTitle: "Quartier Residencial Clube - Seu novo lar em Itapevi",
    ogDescription: "Viva a qualidade de vida em um condomínio clube com lazer, segurança e praticidade em Itapevi.",
    ogImage: "/empreendimentos/quartier/vitrine-quartier.webp",
  },
}
