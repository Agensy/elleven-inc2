import type { Empreendimento } from "@/lib/types/empreendimento"

export const obsidianData: Empreendimento = {
  // Identificação
  id: 4,
  slug: "obsidian",
  nome: "Obsidian",
  subtitulo: "BREVE LANÇAMENTO by Gemini",
  slogan: "Viva a Exclusividade",

  // Localização
  localizacao: "Pinheiros, São Paulo - SP",
  bairro: "Pinheiros",
  coordenadas: { lat: -23.564608, lng: -46.682358 },

  // Características básicas
  tipo: "Studio",
  status: "Breve lançamento",
  entrega: "2027",
  area: "25–40 m²",
  quartos: 1,
  banheiros: 1,
  vagas: 0,
  preco: 699000,
  precoFormatado: "A partir de R$ 699.000",

  // Descrição
  descricao: "No coração de Pinheiros, um dos bairros mais desejados de São Paulo. Studios de alto padrão com design sofisticado e acabamento premium, próximo à Oscar Freire e ao metrô.",

  // Mídia
  imagem: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
  imagemDestaque: "/empreendimentos/obsidian/background-obsidian.jpeg",
  galeria: [
    "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
    "/empreendimentos/obsidian/fachadas/fachada 002.jpeg",
    "/empreendimentos/obsidian/fachadas/fachada 003.jpeg",
  ],

  // Identidade visual
  identidadeVisual: {
    logo: "/empreendimentos/obsidian/logo-obsidian.png",
    corPrimaria: "#DBA47A",
    corSecundaria: "#2D2D2D",
    imagemBackground: "/empreendimentos/obsidian/background-obsidian.jpeg",
  },

  // Diferenciais
  diferenciais: [
    "Localização privilegiada a 40m da Oscar Freire",
    "100m da Estação de Metrô Oscar Freire",
    "Studios com fechadura inteligente",
    "Sistema de aquecimento central",
    "Infraestrutura para ar-condicionado",
    "Tela de LED no rooftop",
    "Portaria 24h com sistema biométrico",
    "Materiais sustentáveis certificados",
  ],

  // Pontos de interesse
  pontos_interesse: [
    { nome: "Rua Oscar Freire", distancia: "40m", tipo: "comercio" },
    { nome: "Estação de Metrô Oscar Freire", distancia: "100m", tipo: "transporte" },
    { nome: "Hospital das Clínicas", distancia: "900m", tipo: "saude" },
    { nome: "Rua dos Pinheiros", distancia: "800m", tipo: "comercio" },
  ],

  // Plantas
  plantas: [
    {
      id: 1,
      tipo: "Studio Compacto",
      area: "25 m²",
      quartos: 1,
      banheiros: 1,
      vagas: 0,
      imagem: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
      preco: "A partir de R$ 699.000",
      descricao: "Studio compacto com design otimizado e acabamento premium",
      destaque: false,
    },
    {
      id: 2,
      tipo: "Studio Premium",
      area: "40 m²",
      quartos: 1,
      banheiros: 1,
      vagas: 0,
      imagem: "/empreendimentos/obsidian/fachadas/fachada 002.jpeg",
      preco: "A partir de R$ 899.000",
      descricao: "Studio premium com área ampliada e layout sofisticado",
      destaque: true,
    },
  ],

  // Especificações
  especificacoes: {
    unidades: "41 unidades",
    andares: "15 andares",
    elevadores: "2 elevadores",
    entrega: "2027",
    rooftop: "Área completa com vista panorâmica",
  },

  // Dados do sistema
  ativo: true,
  destacado: true,
  tags: ["luxo", "pinheiros", "gemini", "studios", "oscar-freire"],
  categoria: ["residencial", "alto padrão"],
}