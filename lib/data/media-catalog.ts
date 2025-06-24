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
      name: "LOGO JADE",
      url: "/empreendimentos/jade/logo.webp",
      type: "image",
      category: "logo",
      description: "Logo oficial do empreendimento Jade",
    },
    {
      name: "FACHADA JADE",
      url: "/empreendimentos/jade/fachada.webp",
      type: "image",
      category: "fachada",
      description: "Vista principal da fachada do Jade",
    },
    {
      name: "BACKGROUND JADE",
      url: "/empreendimentos/jade/background.webp",
      type: "image",
      category: "background",
      description: "Imagem de fundo principal do empreendimento Jade",
    },
  ],
  obsidian: [
    {
      name: "LOGO OBSIDIAN",
      url: "/empreendimentos/obsidian/logo.png",
      type: "image",
      category: "logo",
      description: "Logo oficial do empreendimento Obsidian - Viva a Exclusividade by Gemini",
    },
    {
      name: "FACHADA OBSIDIAN",
      url: "/empreendimentos/obsidian/fachada.png",
      type: "image",
      category: "fachada",
      description: "Renderização da fachada moderna do Obsidian com arquitetura contemporânea",
    },
    {
      name: "BACKGROUND OBSIDIAN",
      url: "/empreendimentos/obsidian/background.png",
      type: "image",
      category: "background",
      description: "Background texturizado escuro para o empreendimento Obsidian",
    },
  ],
  icarai: [
    {
      name: "LOGO ICARAÍ",
      url: "/empreendimentos/icarai/logo.png",
      type: "image",
      category: "logo",
      description: "Logo oficial do empreendimento Icaraí Parque Clube",
    },
    {
      name: "FACHADA ICARAÍ",
      url: "/empreendimentos/icarai/fachada.jpg",
      type: "image",
      category: "fachada",
      description: "Vista principal da fachada das torres do Icaraí Parque Clube",
    },
    {
      name: "BACKGROUND ICARAÍ",
      url: "/empreendimentos/icarai/background.jpg",
      type: "image",
      category: "background",
      description: "Imagem da área da piscina do Icaraí Parque Clube para fundo do banner",
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
