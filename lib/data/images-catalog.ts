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
  JADE: "Empreendimento Jade",
  OBSIDIAN: "Empreendimento Obsidian",
  BOTANIQUE: "Empreendimento Botanique",
  GRAND_CLUB: "Grand Club Cotia",
  LE_MONT: "Le Mont",
  LE_MONT_2: "Le Mont 2",
  ICARAI: "Icaraí Parque Clube",

  // Recursos visuais
  BACKGROUNDS: "Backgrounds/Fundos",
  ICONS: "Ícones",
  LOGOS: "Logos e Marcas",
  PATTERNS: "Padrões e Texturas",
} as const

// =============================================================================
// ESTATÍSTICAS DO CATÁLOGO
// =============================================================================

export const getCatalogStats = () => {
  const totalImages = getAllImages().length
  const totalSections = imagesCatalog.length
  const imagesBySection = imagesCatalog.map((section) => ({
    section: section.sectionName,
    count: section.images.length,
  }))

  return {
    totalImages,
    totalSections,
    imagesBySection,
    lastUpdated: new Date().toISOString().split("T")[0],
  }
}

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
