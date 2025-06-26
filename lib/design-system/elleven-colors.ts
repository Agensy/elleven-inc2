/**
 * SISTEMA DE CORES OFICIAL ELLEVEN
 * Baseado na logo e especificações da marca
 */

export const ELLEVEN_COLORS = {
  // Cores Principais
  white: "#ffffff",
  black97: "rgba(0, 0, 0, 0.97)", // H2 e H3
  black90: "rgba(0, 0, 0, 0.90)", // Parágrafos
  black70: "rgba(0, 0, 0, 0.70)", // Texto auxiliar
  black50: "rgba(0, 0, 0, 0.50)", // Placeholders

  // Azul dos Botões
  blue: "#1e40af",
  blueHover: "#1d4ed8",
  blueDark: "#1e3a8a",

  // Laranja - Apenas 5% para detalhes
  orange: "#f97316",
  orangeLight: "#fb923c",
  orangeSubtle: "#fed7aa",

  // Neutros
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
} as const

export const ELLEVEN_COMPONENTS = {
  // Tipografia
  typography: {
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
    body: "text-body",
    bodyLarge: "text-body-large",
    bodySmall: "text-body-small",
    muted: "text-muted",
    caption: "text-caption",
  },

  // Botões
  buttons: {
    primary: "btn-primary", // Azul com letra branca
    secondary: "btn-secondary", // Outline azul
    accent: "btn-accent", // Laranja - usar com moderação
  },

  // Cards
  cards: {
    clean: "card-clean",
    premium: "card-premium", // Com detalhe laranja
  },

  // Seções
  sections: {
    clean: "section-clean", // Fundo branco
    gray: "section-gray", // Fundo cinza claro
  },

  // Inputs
  inputs: {
    clean: "input-clean",
  },

  // Badges
  badges: {
    blue: "badge-blue",
    orange: "badge-orange", // Usar com moderação
  },

  // Detalhes Laranja - 5% do site
  accents: {
    line: "accent-line",
    dot: "accent-dot",
    border: "accent-border",
  },

  // Animações
  animations: {
    fadeIn: "fade-in",
    slideUp: "slide-up",
    hoverLift: "hover-lift",
  },
} as const

/**
 * Utilitário para aplicar classes de componente
 */
export function getEllevenClass(
  component: keyof typeof ELLEVEN_COMPONENTS,
  variant: string,
  additionalClasses?: string,
): string {
  const baseClass = ELLEVEN_COMPONENTS[component][variant as keyof (typeof ELLEVEN_COMPONENTS)[typeof component]]
  return additionalClasses ? `${baseClass} ${additionalClasses}` : baseClass
}

/**
 * Guia de uso das cores laranja (máximo 5% do site)
 */
export const ORANGE_USAGE_GUIDE = {
  allowed: [
    "accent-line", // Linhas de destaque
    "accent-dot", // Pontos decorativos
    "accent-border", // Bordas de destaque
    "btn-accent", // Botões especiais (CTA principal)
    "badge-orange", // Badges importantes
  ],
  avoid: ["Títulos principais", "Textos de parágrafo", "Fundos de seção", "Bordas de cards comuns", "Ícones regulares"],
} as const
