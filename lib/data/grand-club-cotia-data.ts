import type { Empreendimento } from "@/lib/types/empreendimento"

export const grandClubCotiaData: Empreendimento = {
  // Identificação básica
  id: 9,
  slug: "grand-club-cotia",
  nome: "Grand Club Cotia",
  subtitulo: "Entregues",
  slogan: "Espaço, sofisticação e qualidade de vida em um só lugar",

  // Localização
  localizacao: "R. Geraldo Otaviano de Almeida, 1025 - Bairro Nakamura Park, Cotia - SP",
  bairro: "Nakamura Park",
  coordenadas: { lat: -23.6037, lng: -46.9189 },

  // Características básicas
  tipo: "2 dormitórios",
  status: "Entregues",
  area: "31,06m² a 46,32m²",
  quartos: 2,
  banheiros: 1,
  vagas: 1,
  entrega: "2022",
  preco: 220000,
  precoFormatado: "A partir de R$ 165.000",

  // Descrição completa
  descricao:
    "O Grand Club Cotia foi cuidadosamente projetado para proporcionar um estilo de vida único, onde a flexibilidade e o conforto são prioridades. Com plantas inteligentes que otimizam o espaço, o Grand Club oferece o equilíbrio perfeito entre sofisticação e praticidade. Aqui, sua família encontra a tranquilidade que merece, com ambientes amplos, bem iluminados e áreas externas ideais para o convívio diário. O grande destaque é o terraço, pensado para ser o refúgio favorito de todos, com vistas deslumbrantes e total privacidade. Além disso, o empreendimento conta com uma estrutura completa de lazer e diversão para todas as idades, garantindo momentos inesquecíveis o ano todo.",

  // Imagens
  imagem: "/empreendimentos/grand-club-cotia/fachada-principal.webp",
  imagemDestaque: "/empreendimentos/grand-club-cotia/vitrine-grand-club.jpeg",

  // Galeria de imagens
  galeria: [
    "/empreendimentos/grand-club-cotia/fachada-principal.webp",
    "/empreendimentos/grand-club-cotia/galeria/salao-festas-interior.jpeg",
    "/empreendimentos/grand-club-cotia/galeria/piscina.webp",
    "/empreendimentos/grand-club-cotia/galeria/playground.jpeg",
    "/empreendimentos/grand-club-cotia/galeria/fitness.jpeg",
    "/empreendimentos/grand-club-cotia/galeria/churrasqueira.jpeg",
    "/empreendimentos/grand-club-cotia/galeria/quadra.jpeg",
    "/empreendimentos/grand-club-cotia/galeria/mini-golf.webp",
    "/empreendimentos/grand-club-cotia/galeria/bosque.jpeg",
    "/empreendimentos/grand-club-cotia/galeria/piscina-deck.webp",
  ],

  // Diferenciais
  diferenciais: [
    "Piscina ampla com deck",
    "Salão de festas decorado",
    "Estação fitness completa",
    "Churrasqueiras ao ar livre",
    "Quadra recreativa",
    "Mini golf exclusivo",
    "Solarium e bosque para relaxar",
    "Playground infantil",
    "Bicicletário",
    "Redário",
    "Espaço gourmet",
    "Condomínio fechado com portaria 24h",
  ],

  // Pontos de interesse
  pontos_interesse: [
    { nome: "Escolas e centros educacionais", distancia: "Próximo", tipo: "educacao" },
    { nome: "Supermercados e shoppings", distancia: "Próximo", tipo: "comercio" },
    { nome: "Hospitais e clínicas", distancia: "Próximo", tipo: "saude" },
    { nome: "Restaurantes e bares", distancia: "Próximo", tipo: "comercio" },
    { nome: "Academias", distancia: "Próximo", tipo: "lazer" },
    { nome: "Bancos e serviços", distancia: "Próximo", tipo: "comercio" },
  ],

  // Plantas
  plantas: [
    {
      id: 1,
      tipo: "1 Dormitório - Tipo 2",
      area: "31,06m²",
      quartos: 1,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/grand-club-cotia/plantas/1-dormitorio-tipo2.jpeg",
      preco: "A partir de R$ 165.000",
      descricao: "Sala integrada, cozinha americana, dormitório com armário",
      destaque: false,
    },
    {
      id: 2,
      tipo: "2 Dormitórios - Tipo 1",
      area: "43,05m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-tipo1.jpeg",
      preco: "A partir de R$ 220.000",
      descricao: "Sala de estar, cozinha planejada, 2 dormitórios",
      destaque: true,
    },
    {
      id: 3,
      tipo: "2 Dormitórios - Tipo 2",
      area: "46,32m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-tipo2.jpeg",
      preco: "A partir de R$ 245.000",
      descricao: "Sala ampla, cozinha com área gourmet, sacada com churrasqueira",
      destaque: false,
    },
    {
      id: 4,
      tipo: "2 Dormitórios - Garden",
      area: "46,32m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-giardino.jpeg",
      preco: "A partir de R$ 265.000",
      descricao: "Jardim privativo, área externa exclusiva",
      destaque: false,
    },
  ],

  // Especificações técnicas
  especificacoes: {
    unidades: "198 apartamentos",
    andares: "8 torres",
    elevadores: "2 por torre",
    entrega: "2019",
  },

  // Identidade visual
  identidadeVisual: {
    corPrimaria: "#B8860B",
    corSecundaria: "#1a1a1a",
    logo: "/empreendimentos/logos/logo-grand-club-cotia.png",
    imagemBackground: "/empreendimentos/grand-club-cotia/fachada-principal.webp",
  },

  // Metadados
  ativo: true,
  destacado: true,
  tags: ["cotia", "condomínio clube", "breve lançamento", "lazer completo", "terraço"],
  categoria: ["residencial", "condomínio clube"],
}
