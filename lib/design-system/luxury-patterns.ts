/**
 * PADRÕES DE DESIGN LUXUOSO
 *
 * Padrões reutilizáveis que transmitem sofisticação e elegância
 */

// =============================================================================
// PADRÕES DE LAYOUT
// =============================================================================

export const LUXURY_PATTERNS = {
  // Hero Sections
  hero: {
    luxury: `
      relative min-h-screen flex items-center justify-center
      bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
      overflow-hidden
    `,
    premium: `
      relative py-32 lg:py-40 
      bg-gradient-to-b from-white to-gray-50
    `,
    elegant: `
      relative py-24 lg:py-32
      bg-white
    `,
  },

  // Grid Layouts
  grid: {
    luxury: "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12",
    premium: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
    elegant: "grid grid-cols-1 md:grid-cols-2 gap-6",
  },

  // Content Layouts
  content: {
    centered: "max-w-4xl mx-auto text-center",
    split: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
    asymmetric: "grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16",
  },
} as const

// =============================================================================
// PADRÕES DE COMPONENTES
// =============================================================================

export const COMPONENT_PATTERNS = {
  // Card de Empreendimento
  propertyCard: `
    group relative overflow-hidden rounded-xl bg-white
    border border-gray-100 shadow-sm hover:shadow-xl
    transition-all duration-500 hover:-translate-y-2
  `,

  // Botão Call-to-Action
  ctaButton: `
    relative inline-flex items-center justify-center
    px-8 py-4 text-base font-semibold text-white
    bg-gradient-to-r from-slate-900 to-slate-700
    rounded-lg shadow-lg hover:shadow-xl
    transform transition-all duration-300 hover:-translate-y-1
    before:absolute before:inset-0 before:rounded-lg
    before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-600
    before:opacity-0 hover:before:opacity-100 before:transition-opacity
    overflow-hidden
  `,

  // Input Sofisticado
  luxuryInput: `
    w-full px-4 py-3 text-gray-900 bg-white border border-gray-200
    rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent
    transition-all duration-200 placeholder-gray-500
  `,

  // Badge de Status
  statusBadge: `
    inline-flex items-center px-3 py-1 text-xs font-medium
    bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900
    rounded-full shadow-sm
  `,
} as const

// =============================================================================
// PADRÕES DE ANIMAÇÃO
// =============================================================================

export const ANIMATION_PATTERNS = {
  // Entrada suave
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: "-50px" },
  },

  // Entrada lateral
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true },
  },

  // Escala suave
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true },
  },

  // Stagger para listas
  staggerContainer: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
    viewport: { once: true },
  },

  staggerItem: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
} as const

// =============================================================================
// PADRÕES DE HOVER
// =============================================================================

export const HOVER_PATTERNS = {
  // Elevação suave
  lift: "transition-transform duration-300 hover:-translate-y-1",

  // Brilho dourado
  goldGlow: "transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)]",

  // Escala sutil
  scale: "transition-transform duration-300 hover:scale-[1.02]",

  // Overlay escuro
  overlay: `
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-black before:opacity-0
    before:transition-opacity before:duration-300
    hover:before:opacity-10
  `,

  // Borda dourada
  goldBorder: `
    relative
    before:absolute before:inset-0 before:rounded-lg before:p-[1px]
    before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-600
    before:opacity-0 hover:before:opacity-100 before:transition-opacity
    before:-z-10
  `,
} as const

// =============================================================================
// UTILITÁRIOS DE PADRÃO
// =============================================================================

/**
 * Aplica padrão de animação Framer Motion
 */
export function getAnimationPattern(pattern: keyof typeof ANIMATION_PATTERNS) {
  return ANIMATION_PATTERNS[pattern]
}

/**
 * Combina padrões de hover
 */
export function combineHoverPatterns(...patterns: string[]): string {
  return patterns.join(" ")
}

/**
 * Gera classes para grid responsivo
 */
export function getResponsiveGrid(cols: { sm?: number; md?: number; lg?: number; xl?: number }): string {
  const classes = ["grid"]

  if (cols.sm) classes.push(`grid-cols-${cols.sm}`)
  if (cols.md) classes.push(`md:grid-cols-${cols.md}`)
  if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`)
  if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`)

  return classes.join(" ")
}

// =============================================================================
// EXEMPLOS DE USO
// =============================================================================

/*
// Hero luxuoso
<section className={LUXURY_PATTERNS.hero.luxury}>
  <motion.div {...getAnimationPattern('fadeInUp')}>
    <h1 className="text-display text-white">
      Título Elegante
    </h1>
  </motion.div>
</section>

// Grid de cards
<div className={LUXURY_PATTERNS.grid.luxury}>
  {items.map((item, index) => (
    <motion.div
      key={item.id}
      className={COMPONENT_PATTERNS.propertyCard}
      {...getAnimationPattern('fadeInUp')}
      transition={{ delay: index * 0.1 }}
    >
      {item.content}
    </motion.div>
  ))}
</div>

// Botão com hover patterns
<button className={combineHoverPatterns(
  COMPONENT_PATTERNS.ctaButton,
  HOVER_PATTERNS.lift,
  HOVER_PATTERNS.goldGlow
)}>
  Ação Principal
</button>
*/
