import type { Empreendimento } from "@/lib/types/empreendimento"

export const grandClubCotiaData: Empreendimento = {
  // Identificação básica
  id: "grand-club-cotia",
  slug: "grand-club-cotia",
  nome: "Grand Club Cotia",
  subtitulo: "BREVE LANÇAMENTO",
  slogan: "Espaço, sofisticação e qualidade de vida em um só lugar",

  // Informações principais
  tipo: "Residencial",
  status: "Breve Lançamento",
  localizacao: "R. Geraldo Otaviano de Almeida, 1025 - Bairro Nakamura Park, Cotia - SP",
  area: "31,06m² a 46,32m²",
  quartos: 2,
  vagas: 1,
  entrega: "2025",
  precoFormatado: "A partir de R$ 165.000",

  // Descrição completa
  descricao:
    "O Grand Club Cotia foi cuidadosamente projetado para proporcionar um estilo de vida único, onde a flexibilidade e o conforto são prioridades. Com plantas inteligentes que otimizam o espaço, o Grand Club oferece o equilíbrio perfeito entre sofisticação e praticidade. Aqui, sua família encontra a tranquilidade que merece, com ambientes amplos, bem iluminados e áreas externas ideais para o convívio diário. O grande destaque é o terraço, pensado para ser o refúgio favorito de todos, com vistas deslumbrantes e total privacidade.",

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
    "Piscina ampla",
    "Salão de festas decorado",
    "Estação fitness",
    "Churrasqueiras ao ar livre",
    "Quadra recreativa",
    "Mini golf",
    "Solarium e bosque",
    "Playground",
    "Bicicletário",
    "Redário",
    "Espaço gourmet",
    "Bosque privativo",
  ],

  // Pontos de interesse
  pontos_interesse: [
    { nome: "Escolas e centros educacionais", distancia: "Próximo" },
    { nome: "Supermercados e shoppings", distancia: "Próximo" },
    { nome: "Hospitais e clínicas", distancia: "Próximo" },
    { nome: "Restaurantes e bares", distancia: "Próximo" },
    { nome: "Academias", distancia: "Próximo" },
    { nome: "Bancos e serviços", distancia: "Próximo" },
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
    entrega: "2025",
  },

  // Identidade visual
  identidadeVisual: {
    corPrimaria: "#B8860B",
    corSecundaria: "#1a1a1a",
    corDestaque: "#FFD700",
    imagemBackground: "/empreendimentos/grand-club-cotia/fachada-principal.webp",
    logo: "/empreendimentos/logos/logo-grand-club-cotia.png",
  },

  // SEO
  seo: {
    title: "Grand Club Cotia - Condomínio Clube Exclusivo em Cotia",
    description:
      "Conheça o Grand Club Cotia. Apartamentos de 1 e 2 dormitórios com lazer completo, segurança e localização privilegiada. Seu novo lar com alto padrão!",
    keywords: "grand club cotia, apartamentos cotia, condomínio clube sp, lazer completo cotia",
    ogTitle: "Grand Club Cotia - Viva com exclusividade e conforto",
    ogDescription:
      "O Grand Club Cotia oferece o que há de melhor em lazer, segurança e localização. Apartamentos de 1 e 2 dormitórios esperando por você.",
    ogImage: "/empreendimentos/grand-club-cotia/og-image.png",
  },
}
