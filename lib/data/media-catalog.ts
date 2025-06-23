// Catálogo de Mídias dos Empreendimentos
// Este arquivo centraliza todos os links de imagens e vídeos dos empreendimentos

export interface MediaItem {
  name: string
  url: string
  type: "image" | "video"
  category: "background" | "logo" | "fachada" | "planta" | "area-comum" | "video-promocional" | "video-aereo"
  description?: string
}

export interface EmpreendimentoMedia {
  [key: string]: MediaItem[]
}

export const mediaCatalog: EmpreendimentoMedia = {
  jade: [
    {
      name: "BACKGROUND",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/FUNDO-JADE_-1-ORIGINAL-scaled.png",
      type: "image",
      category: "background",
      description: "Imagem de fundo principal do empreendimento Jade",
    },
    {
      name: "LOGO JADE",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/LOGO_JADE.png",
      type: "image",
      category: "logo",
      description: "Logo oficial do empreendimento Jade",
    },
    {
      name: "FACHADA",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/JADE_Cardim-01-scaled.jpg",
      type: "image",
      category: "fachada",
      description: "Vista principal da fachada do Jade",
    },
    {
      name: "FACHADA 2",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/JADE_Cardim-02-scaled.jpg",
      type: "image",
      category: "fachada",
      description: "Segunda vista da fachada do Jade",
    },
    {
      name: "FACHADA 3",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/JADE_Cardim-03-scaled.jpg",
      type: "image",
      category: "fachada",
      description: "Terceira vista da fachada do Jade",
    },
    {
      name: "ROOFTOP",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/rooftop-scaled.jpg",
      type: "image",
      category: "area-comum",
      description: "Área do rooftop do empreendimento",
    },
    {
      name: "PLANTA",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/Planta-Humanizada_-JADE-scaled.png",
      type: "image",
      category: "planta",
      description: "Planta humanizada do apartamento",
    },
    {
      name: "CENA AÉREA",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/CENA-AEREA-306_JADE.mp4",
      type: "video",
      category: "video-aereo",
      description: "Vídeo com vista aérea do empreendimento",
    },
    {
      name: "VINHETA",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/VINHETA-JADE.mp4",
      type: "video",
      category: "video-promocional",
      description: "Vinheta promocional do Jade",
    },
    {
      name: "ROOFTOP VIDEO",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/ROOFTOP_JADE.mp4",
      type: "video",
      category: "video-promocional",
      description: "Vídeo do rooftop do empreendimento",
    },
    {
      name: "FACHADA CENA",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/FACHADA-CENA-1_JADEmp4.mp4",
      type: "video",
      category: "video-promocional",
      description: "Vídeo da fachada do empreendimento",
    },
  ],
  obsidian: [
    {
      name: "BACKGROUND OBSIDIAN",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/FUNDO.png",
      type: "image",
      category: "background",
      description: "Imagem de fundo principal do empreendimento Obsidian",
    },
    {
      name: "LOGO OBSIDIAN",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/LOGO_OBSIDIAN.png",
      type: "image",
      category: "logo",
      description: "Logo oficial do empreendimento Obsidian",
    },
    {
      name: "FACHADA 01",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/fachada-001-scaled.png",
      type: "image",
      category: "fachada",
      description: "Primeira vista da fachada do Obsidian",
    },
    {
      name: "FACHADA 02",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/fachada-002-scaled.png",
      type: "image",
      category: "fachada",
      description: "Segunda vista da fachada do Obsidian",
    },
    {
      name: "FACHADA 03",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/fachada-003-scaled.png",
      type: "image",
      category: "fachada",
      description: "Terceira vista da fachada do Obsidian",
    },
    {
      name: "FACHADA 04",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/fachada-004-scaled.png",
      type: "image",
      category: "fachada",
      description: "Quarta vista da fachada do Obsidian",
    },
    {
      name: "VINHETA OBSIDIAN",
      url: "https://agensya.com.br/wp-content/uploads/2025/06/VINHETA-OBSIDIAN.mp4",
      type: "video",
      category: "video-promocional",
      description: "Vinheta promocional do Obsidian",
    },
  ],
}

// Funções utilitárias para acessar as mídias
export const getEmpreendimentoMedia = (empreendimento: string): MediaItem[] => {
  return mediaCatalog[empreendimento.toLowerCase()] || []
}

export const getMediaByCategory = (empreendimento: string, category: MediaItem["category"]): MediaItem[] => {
  const media = getEmpreendimentoMedia(empreendimento)
  return media.filter((item) => item.category === category)
}

export const getMediaByType = (empreendimento: string, type: MediaItem["type"]): MediaItem[] => {
  const media = getEmpreendimentoMedia(empreendimento)
  return media.filter((item) => item.type === type)
}

export const getAllImages = (empreendimento: string): MediaItem[] => {
  return getMediaByType(empreendimento, "image")
}

export const getAllVideos = (empreendimento: string): MediaItem[] => {
  return getMediaByType(empreendimento, "video")
}

// Exemplo de uso:
// const jadeImages = getAllImages('jade');
// const jadeFachadas = getMediaByCategory('jade', 'fachada');
// const jadeVideos = getAllVideos('jade');
const obsidianImages = getAllImages("obsidian")
const obsidianFachadas = getMediaByCategory("obsidian", "fachada")
const obsidianVideos = getAllVideos("obsidian")
