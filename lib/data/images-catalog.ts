// =============================================================================
// CATÁLOGO COMPLETO DE IMAGENS - ELLEVEN ENGENHARIA
// =============================================================================
// Este arquivo centraliza TODAS as imagens do site organizadas por seções
// Servidor: WordPress da Agensya
// Atualizado em: 23/06/2025

export interface ImageItem {
  id: string
  name: string
  description: string
  url: string
  category: string
  section: string
  alt: string
  usage: string[]
  dimensions?: string
  fileSize?: string
  dateAdded: string
  status?: "active" | "broken" | "pending"
}

export interface ImageSection {
  sectionName: string
  description: string
  images: ImageItem[]
}

// =============================================================================
// CATÁLOGO PRINCIPAL
// =============================================================================

export const imagesCatalog: ImageSection[] = [
  {
    sectionName: "QUEM_SOMOS",
    description: "Fotos da equipe/time da Elleven Engenharia",
    images: [
      {
        id: "img_mauro_resende_001",
        name: "MAURO RESENDE",
        description: "Foto profissional de Mauro Resende - Membro da equipe Elleven Engenharia",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/4-MAURO-RESENDE.png",
        category: "equipe",
        section: "QUEM_SOMOS",
        alt: "Mauro Resende - Elleven Engenharia",
        usage: ["quem-somos-section", "about-page", "team-section"],
        dateAdded: "2025-06-23",
        status: "active",
      },
      {
        id: "img_eduardo_rocha_001",
        name: "EDUARDO ROCHA",
        description: "Foto profissional de Eduardo Rocha - Membro da equipe Elleven Engenharia",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/1-EDUARDO-ROCHA.png",
        category: "equipe",
        section: "QUEM_SOMOS",
        alt: "Eduardo Rocha - Elleven Engenharia",
        usage: ["quem-somos-section", "about-page", "team-section"],
        dateAdded: "2025-06-23",
        status: "active",
      },
      {
        id: "img_fernando_remor_001",
        name: "FERNANDO REMOR",
        description: "Foto profissional de Fernando Remor - Membro da equipe Elleven Engenharia",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/3-FERNANDO-REMOR.png",
        category: "equipe",
        section: "QUEM_SOMOS",
        alt: "Fernando Remor - Elleven Engenharia",
        usage: ["quem-somos-section", "about-page", "team-section"],
        dateAdded: "2025-06-23",
        status: "active",
      },
      {
        id: "img_marco_tulio_001",
        name: "MARCO TULIO",
        description: "Foto profissional de Marco Tulio - Membro da equipe Elleven Engenharia",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/2-MARCO-TULIO.png",
        category: "equipe",
        section: "QUEM_SOMOS",
        alt: "Marco Tulio - Elleven Engenharia",
        usage: ["quem-somos-section", "about-page", "team-section"],
        dateAdded: "2025-06-23",
        status: "active",
      },
    ],
  },
  {
    sectionName: "OBSIDIAN",
    description: "Imagens do empreendimento Obsidian",
    images: [
      {
        id: "img_obsidian_logo_001",
        name: "LOGO OBSIDIAN",
        description: "Logo oficial do empreendimento Obsidian - 'Viva a Exclusividade' by Gemini",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/LOGO_OBSIDIAN.png",
        category: "logo",
        section: "OBSIDIAN",
        alt: "Logo Obsidian - Viva a Exclusividade",
        usage: ["banner-slider", "obsidian-page", "hero-section"],
        dateAdded: "2025-06-23",
        status: "active",
      },
      {
        id: "img_obsidian_fachada_001",
        name: "FACHADA OBSIDIAN",
        description: "Imagem da fachada do empreendimento Obsidian (placeholder)",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/fachada-001-scaled.png", // Placeholder, substituir com a URL real quando disponível
        category: "fachada",
        section: "OBSIDIAN",
        alt: "Fachada Obsidian",
        usage: ["banner-slider", "obsidian-page", "gallery"],
        dateAdded: "2025-06-23",
        status: "active", // Alterado para 'active' para ser exibido
      },
      {
        id: "img_obsidian_background_001",
        name: "BACKGROUND OBSIDIAN",
        description: "Imagem de fundo para o empreendimento Obsidian (placeholder)",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/FUNDO.png", // Placeholder, substituir com a URL real quando disponível
        category: "background",
        section: "OBSIDIAN",
        alt: "Background Obsidian",
        usage: ["banner-slider", "obsidian-page"],
        dateAdded: "2025-06-23",
        status: "active", // Alterado para 'active' para ser exibido
      },
    ],
  },
  {
    sectionName: "ICARAI",
    description: "Imagens do empreendimento Icaraí Parque Clube",
    images: [
      {
        id: "img_icarai_logo_001",
        name: "LOGO ICARAÍ",
        description: "Logo oficial do empreendimento Icaraí Parque Clube - Design moderno com símbolo circular verde",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/LOGO_ICARAI.png",
        category: "logo",
        section: "ICARAI",
        alt: "Logo Icaraí Parque Clube",
        usage: ["banner-slider", "icarai-page", "hero-section"],
        dateAdded: "2025-06-23",
        status: "active", // <-- GARANTINDO QUE ESTÁ ATIVO
      },
      {
        id: "img_icarai_fachada_001",
        name: "FACHADA ICARAÍ",
        description: "Fachada do empreendimento Icaraí - Torres do Icaraí",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/ICARAI_TORRES-DO-ICARAI-FACHADA-scaled.jpg",
        category: "fachada",
        section: "ICARAI",
        alt: "Fachada Icaraí Parque Clube - Torres do Icaraí",
        usage: ["banner-slider", "icarai-page", "gallery"],
        dateAdded: "2025-06-23",
        status: "active",
      },
      {
        id: "img_icarai_background_001",
        name: "BACKGROUND ICARAÍ",
        description: "Imagem de fundo para o empreendimento Icaraí (placeholder)",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/ICARAI_AREA-DA-PISCINA.jpg",
        category: "background",
        section: "ICARAI",
        alt: "Background Icaraí",
        usage: ["banner-slider", "icarai-page"],
        dateAdded: "2025-06-23",
        status: "active",
      },
    ],
  },
  {
    sectionName: "JADE",
    description: "Imagens do empreendimento Jade",
    images: [
      {
        id: "img_jade_logo_001",
        name: "LOGO JADE",
        description: "Logo oficial do empreendimento Jade",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/LOGO_JADE.png",
        category: "logo",
        section: "JADE",
        alt: "Logo Jade",
        usage: ["banner-slider", "jade-page", "hero-section"],
        dateAdded: "2025-06-23",
        status: "active",
      },
      {
        id: "img_jade_fachada_001",
        name: "FACHADA JADE",
        description: "Imagem da fachada do empreendimento Jade",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/JADE_Cardim-01-scaled.jpg",
        category: "fachada",
        section: "JADE",
        alt: "Fachada Jade",
        usage: ["banner-slider", "jade-page", "gallery"],
        dateAdded: "2025-06-23",
        status: "active",
      },
      {
        id: "img_jade_background_001",
        name: "BACKGROUND JADE",
        description: "Imagem de fundo para o empreendimento Jade",
        url: "https://agensya.com.br/wp-content/uploads/2025/06/FUNDO-JADE_-1-ORIGINAL-scaled.png",
        category: "background",
        section: "JADE",
        alt: "Background Jade",
        usage: ["banner-slider", "jade-page"],
        dateAdded: "2025-06-23",
        status: "active",
      },
    ],
  },
  {
    sectionName: "BOTANIQUE",
    description: "Imagens do empreendimento Botanique",
    images: [
      {
        id: "img_botanique_logo_001",
        name: "LOGO BOTANIQUE",
        description: "Logo oficial do empreendimento Botanique (placeholder)",
        url: "/placeholder.svg",
        category: "logo",
        section: "BOTANIQUE",
        alt: "Logo Botanique",
        usage: ["banner-slider", "botanique-page", "hero-section"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
      {
        id: "img_botanique_fachada_001",
        name: "FACHADA BOTANIQUE",
        description: "Imagem da fachada do empreendimento Botanique (placeholder)",
        url: "/placeholder.svg",
        category: "fachada",
        section: "BOTANIQUE",
        alt: "Fachada Botanique",
        usage: ["banner-slider", "botanique-page", "gallery"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
      {
        id: "img_botanique_background_001",
        name: "BACKGROUND BOTANIQUE",
        description: "Imagem de fundo para o empreendimento Botanique (placeholder)",
        url: "/placeholder.svg",
        category: "background",
        section: "BOTANIQUE",
        alt: "Background Botanique",
        usage: ["banner-slider", "botanique-page"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
    ],
  },
  {
    sectionName: "GRAND_CLUB",
    description: "Imagens do empreendimento Grand Club Cotia",
    images: [
      {
        id: "img_grand_club_logo_001",
        name: "LOGO GRAND CLUB",
        description: "Logo oficial do empreendimento Grand Club Cotia (placeholder)",
        url: "/placeholder.svg",
        category: "logo",
        section: "GRAND_CLUB",
        alt: "Logo Grand Club Cotia",
        usage: ["banner-slider", "grand-club-page", "hero-section"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
      {
        id: "img_grand_club_fachada_001",
        name: "FACHADA GRAND CLUB",
        description: "Imagem da fachada do empreendimento Grand Club Cotia (placeholder)",
        url: "/placeholder.svg",
        category: "fachada",
        section: "GRAND_CLUB",
        alt: "Fachada Grand Club Cotia",
        usage: ["banner-slider", "grand-club-page", "gallery"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
      {
        id: "img_grand_club_background_001",
        name: "BACKGROUND GRAND CLUB",
        description: "Imagem de fundo para o empreendimento Grand Club Cotia (placeholder)",
        url: "/placeholder.svg",
        category: "background",
        section: "GRAND_CLUB",
        alt: "Background Grand Club Cotia",
        usage: ["banner-slider", "grand-club-page"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
    ],
  },
  {
    sectionName: "LE_MONT",
    description: "Imagens do empreendimento Le Mont",
    images: [
      {
        id: "img_le_mont_logo_001",
        name: "LOGO LE MONT",
        description: "Logo oficial do empreendimento Le Mont (placeholder)",
        url: "/placeholder.svg",
        category: "logo",
        section: "LE_MONT",
        alt: "Logo Le Mont",
        usage: ["banner-slider", "le-mont-page", "hero-section"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
      {
        id: "img_le_mont_fachada_001",
        name: "FACHADA LE MONT",
        description: "Imagem da fachada do empreendimento Le Mont (placeholder)",
        url: "/placeholder.svg",
        category: "fachada",
        section: "LE_MONT",
        alt: "Fachada Le Mont",
        usage: ["banner-slider", "le-mont-page", "gallery"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
      {
        id: "img_le_mont_background_001",
        name: "BACKGROUND LE MONT",
        description: "Imagem de fundo para o empreendimento Le Mont (placeholder)",
        url: "/placeholder.svg",
        category: "background",
        section: "LE_MONT",
        alt: "Background Le Mont",
        usage: ["banner-slider", "le-mont-page"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
    ],
  },
  {
    sectionName: "LE_MONT_2",
    description: "Imagens do empreendimento Le Mont 2",
    images: [
      {
        id: "img_le_mont_2_logo_001",
        name: "LOGO LE MONT 2",
        description: "Logo oficial do empreendimento Le Mont 2 (placeholder)",
        url: "/placeholder.svg",
        category: "logo",
        section: "LE_MONT_2",
        alt: "Logo Le Mont 2",
        usage: ["banner-slider", "le-mont-2-page", "hero-section"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
      {
        id: "img_le_mont_2_fachada_001",
        name: "FACHADA LE MONT 2",
        description: "Imagem da fachada do empreendimento Le Mont 2 (placeholder)",
        url: "/placeholder.svg",
        category: "fachada",
        section: "LE_MONT_2",
        alt: "Fachada Le Mont 2",
        usage: ["banner-slider", "le-mont-2-page", "gallery"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
      {
        id: "img_le_mont_2_background_001",
        name: "BACKGROUND LE MONT 2",
        description: "Imagem de fundo para o empreendimento Le Mont 2 (placeholder)",
        url: "/placeholder.svg",
        category: "background",
        section: "LE_MONT_2",
        alt: "Background Le Mont 2",
        usage: ["banner-slider", "le-mont-2-page"],
        dateAdded: "2025-06-23",
        status: "pending",
      },
    ],
  },
]

// =============================================================================
// FUNÇÕES UTILITÁRIAS
// =============================================================================

export const addImageToSection = (sectionName: string, imageData: Omit<ImageItem, "id" | "dateAdded">): void => {
  const newImage: ImageItem = {
    ...imageData,
    id: `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    dateAdded: new Date().toISOString().split("T")[0],
  }

  const existingSection = imagesCatalog.find((section) => section.sectionName === sectionName)

  if (existingSection) {
    existingSection.images.push(newImage)
  } else {
    imagesCatalog.push({
      sectionName,
      description: `Seção ${sectionName}`,
      images: [newImage],
    })
  }
}

export const getImagesBySection = (sectionName: string): ImageItem[] => {
  const section = imagesCatalog.find((s) => s.sectionName === sectionName)
  return section ? section.images : []
}

export const getImagesByCategory = (category: string): ImageItem[] => {
  return imagesCatalog.flatMap((section) => section.images.filter((img) => img.category === category))
}

export const getAllImages = (): ImageItem[] => {
  return imagesCatalog.flatMap((section) => section.images)
}

export const getBrokenImages = (): ImageItem[] => {
  return getAllImages().filter((img) => img.status === "broken")
}

export const searchImages = (query: string): ImageItem[] => {
  const searchTerm = query.toLowerCase()
  return getAllImages().filter(
    (img) =>
      img.name.toLowerCase().includes(searchTerm) ||
      img.description.toLowerCase().includes(searchTerm) ||
      img.alt.toLowerCase().includes(searchTerm) ||
      img.category.toLowerCase().includes(searchTerm),
  )
}

// =============================================================================
// SEÇÕES PREVISTAS (serão populadas conforme você enviar)
// =============================================================================

export const SECTIONS_TEMPLATE = {
  // Seções principais do site
  HERO: "Hero/Banner Principal",
  QUEM_SOMOS: "Quem Somos Nós/Equipe", // ✅ ADICIONADA
  SOBRE: "Sobre a Empresa",
  SERVICOS: "Serviços",
  EMPREENDIMENTOS: "Empreendimentos",
  PARCEIROS: "Parceiros",
  CONTATO: "Contato",

  // Empreendimentos específicos
  JADE: "Empreendimento Jade", // ✅ ADICIONADA (placeholder)
  OBSIDIAN: "Empreendimento Obsidian", // ✅ LOGO ADICIONADA, PLACEHOLDERS ADICIONADOS
  BOTANIQUE: "Empreendimento Botanique", // ✅ ADICIONADA (placeholders)
  GRAND_CLUB: "Grand Club Cotia", // ✅ ADICIONADA (placeholders)
  LE_MONT: "Le Mont", // ✅ ADICIONADA (placeholders)
  LE_MONT_2: "Le Mont 2", // ✅ ADICIONADA (placeholders)
  ICARAI: "Icaraí Parque Clube", // ✅ LOGO E FACHADA ATIVAS, BACKGROUND PENDENTE

  // Recursos visuais
  BACKGROUNDS: "Backgrounds/Fundos",
  ICONS: "Ícones",
  LOGOS: "Logos e Marcas",
  PATTERNS: "Padrões e Texturas",
} as const

// =============================================================================
// DADOS ESPECÍFICOS DA EQUIPE
// =============================================================================

export const TEAM_MEMBERS = {
  MAURO_RESENDE: {
    name: "Mauro Resende",
    image: "https://agensya.com.br/wp-content/uploads/2025/06/4-MAURO-RESENDE.png",
    alt: "Mauro Resende - Elleven Engenharia",
  },
  EDUARDO_ROCHA: {
    name: "Eduardo Rocha",
    image: "https://agensya.com.br/wp-content/uploads/2025/06/1-EDUARDO-ROCHA.png",
    alt: "Eduardo Rocha - Elleven Engenharia",
  },
  FERNANDO_REMOR: {
    name: "Fernando Remor",
    image: "https://agensya.com.br/wp-content/uploads/2025/06/3-FERNANDO-REMOR.png",
    alt: "Fernando Remor - Elleven Engenharia",
  },
  MARCO_TULIO: {
    name: "Marco Tulio",
    image: "https://agensya.com.br/wp-content/uploads/2025/06/2-MARCO-TULIO.png",
    alt: "Marco Tulio - Elleven Engenharia",
  },
} as const

// =============================================================================
// DADOS ESPECÍFICOS DOS EMPREENDIMENTOS
// =============================================================================

export const OBSIDIAN_ASSETS = {
  LOGO: {
    name: "Logo Obsidian",
    url: "https://agensya.com.br/wp-content/uploads/2025/06/LOGO_OBSIDIAN.png",
    alt: "Logo Obsidian - Viva a Exclusividade",
  },
  FACHADA: {
    name: "Fachada Obsidian",
    url: "https://agensya.com.br/wp-content/uploads/2025/06/fachada-001-scaled.png", // ATUALIZE ESTE LINK COM A URL REAL DA FACHADA DO OBSIDIAN
    alt: "Fachada Obsidian",
  },
  BACKGROUND: {
    name: "Background Obsidian",
    url: "https://agensya.com.br/wp-content/uploads/2025/06/FUNDO.png", // ATUALIZE ESTE LINK COM A URL REAL DO BACKGROUND DO OBSIDIAN
    alt: "Background Obsidian",
  },
} as const

export const ICARAI_ASSETS = {
  LOGO: {
    name: "Logo Icaraí",
    url: "https://agensya.com.br/wp-content/uploads/2025/06/LOGO_ICARAI.png",
    alt: "Logo Icaraí Parque Clube",
  },
  FACHADA: {
    name: "Fachada Icaraí",
    url: "https://agensya.com.br/wp-content/uploads/2025/06/ICARAI_TORRES-DO-ICARAI-FACHADA-scaled.jpg",
    alt: "Fachada Icaraí Parque Clube - Torres do Icaraí",
  },
  BACKGROUND: {
    name: "Background Icaraí",
    url: "https://agensya.com.br/wp-content/uploads/2025/06/ICARAI_AREA-DA-PISCINA.jpg",
    alt: "Background Icaraí",
  },
} as const

export const JADE_ASSETS = {
  LOGO: {
    name: "Logo Jade",
    url: "https://agensya.com.br/wp-content/uploads/2025/06/LOGO_JADE.png", // URL real da logo Jade
    alt: "Logo Jade",
  },
  FACHADA: {
    name: "Fachada Jade",
    url: "https://agensya.com.br/wp-content/uploads/2025/06/JADE_Cardim-01-scaled.jpg", // URL real da fachada Jade
    alt: "Fachada Jade",
  },
  BACKGROUND: {
    name: "Background Jade",
    url: "https://agensya.com.br/wp-content/uploads/2025/06/FUNDO-JADE_-1-ORIGINAL-scaled.png", // URL real do background Jade
    alt: "Background Jade",
  },
} as const

export const BOTANIQUE_ASSETS = {
  LOGO: {
    name: "Logo Botanique",
    url: "/placeholder.svg",
    alt: "Logo Botanique",
  },
  FACHADA: {
    name: "Fachada Botanique",
    url: "/placeholder.svg",
    alt: "Fachada Botanique",
  },
  BACKGROUND: {
    name: "Background Botanique",
    url: "/placeholder.svg",
    alt: "Background Botanique",
  },
} as const

export const GRAND_CLUB_ASSETS = {
  LOGO: {
    name: "Logo Grand Club Cotia",
    url: "/placeholder.svg",
    alt: "Logo Grand Club Cotia",
  },
  FACHADA: {
    name: "Fachada Grand Club Cotia",
    url: "/placeholder.svg",
    alt: "Fachada Grand Club Cotia",
  },
  BACKGROUND: {
    name: "Background Grand Club Cotia",
    url: "/placeholder.svg",
    alt: "Background Grand Club Cotia",
  },
} as const

export const LE_MONT_ASSETS = {
  LOGO: {
    name: "Logo Le Mont",
    url: "/placeholder.svg",
    alt: "Logo Le Mont",
  },
  FACHADA: {
    name: "Fachada Le Mont",
    url: "/placeholder.svg",
    alt: "Fachada Le Mont",
  },
  BACKGROUND: {
    name: "Background Le Mont",
    url: "/placeholder.svg",
    alt: "Background Le Mont",
  },
} as const

export const LE_MONT_2_ASSETS = {
  LOGO: {
    name: "Logo Le Mont 2",
    url: "/placeholder.svg",
    alt: "Logo Le Mont 2",
  },
  FACHADA: {
    name: "Fachada Le Mont 2",
    url: "/placeholder.svg",
    alt: "Fachada Le Mont 2",
  },
  BACKGROUND: {
    name: "Background Le Mont 2",
    url: "/placeholder.svg",
    alt: "Background Le Mont 2",
  },
} as const

// =============================================================================
// ESTATÍSTICAS DO CATÁLOGO
// =============================================================================

export const getCatalogStats = () => {
  const totalImages = getAllImages().length
  const totalSections = imagesCatalog.length
  const brokenImages = getBrokenImages().length
  const imagesBySection = imagesCatalog.map((section) => ({
    section: section.sectionName,
    count: section.images.length,
  }))

  return {
    totalImages,
    totalSections,
    brokenImages,
    imagesBySection,
    lastUpdated: new Date().toISOString().split("T")[0],
  }
}
