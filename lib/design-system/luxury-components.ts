/**
 * ELLEVEN LUXURY DESIGN SYSTEM
 *
 * Sistema de componentes padronizados para transmitir:
 * Sofisticação • Clean • Luxo • Minimalismo • Detalhe
 */

// =============================================================================
// CLASSES DE COMPONENTES PADRONIZADOS
// =============================================================================

export const LUXURY_COMPONENTS = {
  // Seções
  sections: {
    luxury: "section-luxury container-luxury",
    premium: "section-premium container-premium",
    elegant: "section-elegant container-elegant",
  },

  // Tipografia
  typography: {
    display: "text-display",
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
    bodyLarge: "text-body-large",
    body: "text-body",
    bodySmall: "text-body-small",
    muted: "text-muted",
    caption: "text-caption",
  },

  // Cards
  cards: {
    luxury: "card-luxury p-8 lg:p-10",
    premium: "card-premium p-6 lg:p-8",
    simple: "card-premium p-4 lg:p-6",
  },

  // Botões
  buttons: {
    luxury: "btn-luxury",
    gold: "btn-gold",
    outline: "btn-outline-luxury",
    ghost: "hover:bg-gray-50 transition-colors duration-200",
  },

  // Badges
  badges: {
    luxury: "badge-luxury",
    premium: "badge-premium",
    outline: "badge-outline",
  },

  // Inputs
  inputs: {
    luxury: "input-luxury",
  },

  // Animações
  animations: {
    fadeInUp: "fade-in-up",
    fadeInLeft: "fade-in-left",
    fadeInRight: "fade-in-right",
    hoverLift: "hover-lift",
    hoverGlow: "hover-glow",
    hoverScale: "hover-scale",
  },

  // Elementos decorativos
  decorative: {
    divider: "divider-luxury",
    accentLine: "accent-line",
    textGradient: "text-gradient-gold",
    pattern: "bg-pattern",
    glass: "glass-effect",
  },
} as const

// =============================================================================
// UTILITÁRIOS DE CLASSE
// =============================================================================

/**
 * Combina classes de componente de forma type-safe
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}

/**
 * Aplica classes de luxo baseado no tipo de componente
 */
export function getLuxuryClasses(
  component: keyof typeof LUXURY_COMPONENTS,
  variant: string,
  additionalClasses?: string,
): string {
  const baseClasses = LUXURY_COMPONENTS[component][variant as keyof (typeof LUXURY_COMPONENTS)[typeof component]]
  return cn(baseClasses, additionalClasses)
}

// =============================================================================
// CONFIGURAÇÕES DE TEMA
// =============================================================================

export const LUXURY_THEME = {
  colors: {
    navy: "#0A1628",
    navyLight: "#1A2D54",
    navyLighter: "#2A3D64",
    gold: "#D4AF37",
    goldLight: "#E6C55A",
    goldDark: "#B8941F",
    white: "#FFFFFF",
    cream: "#FEFDFB",
    pearl: "#F8F7F4",
    silver: "#E8E6E1",
    charcoal: "#2C2C2C",
    graphite: "#1A1A1A",
  },

  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1.25rem",
    lg: "2rem",
    xl: "3.25rem",
    "2xl": "5.25rem",
    "3xl": "8.5rem",
  },

  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },

  shadows: {
    subtle: "0 2px 8px rgba(10, 22, 40, 0.04)",
    soft: "0 4px 16px rgba(10, 22, 40, 0.08)",
    medium: "0 8px 32px rgba(10, 22, 40, 0.12)",
    strong: "0 16px 64px rgba(10, 22, 40, 0.16)",
    gold: "0 4px 20px rgba(212, 175, 55, 0.15)",
  },

  transitions: {
    fast: "0.15s cubic-bezier(0.4, 0, 0.2, 1)",
    normal: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const

// =============================================================================
// EXEMPLOS DE USO
// =============================================================================

/*
// Seção luxuosa
<section className={LUXURY_COMPONENTS.sections.luxury}>
  <h1 className={LUXURY_COMPONENTS.typography.display}>
    Título Principal
  </h1>
</section>

// Card premium
<div className={LUXURY_COMPONENTS.cards.luxury}>
  <h3 className={LUXURY_COMPONENTS.typography.h3}>
    Título do Card
  </h3>
  <p className={LUXURY_COMPONENTS.typography.body}>
    Conteúdo do card
  </p>
</div>

// Botão com animação
<button className={cn(
  LUXURY_COMPONENTS.buttons.luxury,
  LUXURY_COMPONENTS.animations.hoverLift
)}>
  Botão Luxuoso
</button>

// Usando utilitário
const cardClasses = getLuxuryClasses('cards', 'luxury', 'mb-8')
*/
