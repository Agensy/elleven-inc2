// Mapeamento das plantas disponíveis por empreendimento
const plantasDisponiveis = {
  botanique: [
    "/empreendimentos/botanique/plantas/planta-2-dormi.webp",
    "/empreendimentos/botanique/plantas/planta-3-dormi.webp",
    "/empreendimentos/botanique/plantas/planta-3-dormi-2.webp",
    "/empreendimentos/botanique/plantas/cobertura-duplex-1-piso.webp",
    "/empreendimentos/botanique/plantas/cobertura-duplex-1-piso-2.webp",
    "/empreendimentos/botanique/plantas/cobertura-duplex-1-piso-3.webp",
    "/empreendimentos/botanique/plantas/cobertura-duplex-2-piso.webp",
    "/empreendimentos/botanique/plantas/cobertura-duplex-2-piso-2.webp",
    "/empreendimentos/botanique/plantas/cobertura-duplex-2-piso-3.webp",
    "/empreendimentos/botanique/plantas/implantacao-torres.webp",
  ],

  grandClubCotia: [
    "/empreendimentos/grand-club-cotia/plantas/1-dormitorio-tipo2.jpeg",
    "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-tipo1.jpeg",
    "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-tipo2.jpeg",
    "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-giardino.jpeg",
  ],

  grandParc: [
    "/empreendimentos/grand-parc/plantas/tipo-a.webp",
    "/empreendimentos/grand-parc/plantas/tipo-a-cotas.webp",
    "/empreendimentos/grand-parc/plantas/tipo-b.webp",
    "/empreendimentos/grand-parc/plantas/tipo-b-cotas.webp",
    "/empreendimentos/grand-parc/plantas/duplex-inferior.webp",
    "/empreendimentos/grand-parc/plantas/duplex-inferior-cotas.webp",
    "/empreendimentos/grand-parc/plantas/duplex-superior.webp",
    "/empreendimentos/grand-parc/plantas/duplex-superior-cotas.webp",
  ],

  leMont2: [
    "/empreendimentos/le-mont-2/plantas/2-dormitorios.jpeg",
    "/empreendimentos/le-mont-2/plantas/3-dormitorios.jpeg",
    "/empreendimentos/le-mont-2/plantas/cobertura-inferior-final-2-4.jpeg",
    "/empreendimentos/le-mont-2/plantas/cobertura-inferior-final-3-6.jpeg",
    "/empreendimentos/le-mont-2/plantas/cobertura-inferior-final-3-6-alt.jpeg",
    "/empreendimentos/le-mont-2/plantas/cobertura-superior-final-2-4.jpeg",
    "/empreendimentos/le-mont-2/plantas/cobertura-superior-final-3-6.jpeg",
  ],

  montRoyal: [
    "/empreendimentos/mont-royal/plantas/planta-final1.jpeg",
    "/empreendimentos/mont-royal/plantas/planta-final2.jpeg",
  ],

  quartier: [
    "/empreendimentos/quartier/plantas/planta-final-1.webp",
    "/empreendimentos/quartier/plantas/planta-final-2.webp",
  ],

  jade: ["/empreendimentos/jade/plantas/Planta Humanizada_ JADE.jpeg"],
}

// Empreendimentos SEM plantas disponíveis
const empreendimentosSemPlantas = ["icaraiParqueClube", "leMont", "essence", "vilaKoty", "valinhos", "vert"]

console.log("=== MAPEAMENTO DE PLANTAS DOS EMPREENDIMENTOS ===")
console.log("\n✅ EMPREENDIMENTOS COM PLANTAS:")
Object.entries(plantasDisponiveis).forEach(([slug, plantas]) => {
  console.log(`\n${slug.toUpperCase()}:`)
  plantas.forEach((planta) => console.log(`  - ${planta}`))
})

console.log("\n❌ EMPREENDIMENTOS SEM PLANTAS:")
empreendimentosSemPlantas.forEach((slug) => {
  console.log(`  - ${slug}`)
})

export { plantasDisponiveis, empreendimentosSemPlantas }
