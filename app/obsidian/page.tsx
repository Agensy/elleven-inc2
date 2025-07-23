import type { Metadata } from "next"
import { EmpreendimentoPage } from "@/components/empreendimento"
import { buscarEmpreendimentoPorSlug } from "@/lib/data/empreendimentos-master"

export const metadata: Metadata = {
  title: "Obsidian - Studios de Alto Padrão Pinheiros by Gemini | Elleven Engenharia",
  description:
    "Obsidian - Studios de alto padrão em Pinheiros by Gemini. A 40m da Oscar Freire e 100m do metrô. Design contemporâneo, acabamentos premium e localização privilegiada.",
  keywords: "obsidian pinheiros, studios pinheiros, gemini pinheiros, oscar freire apartamentos, alto padrão pinheiros, studios são paulo, pinheiros investimento",
  openGraph: {
    title: "Obsidian Pinheiros - Viva a Exclusividade",
    description:
      "Studios de alto padrão em Pinheiros by Gemini. A 40m da Oscar Freire e 100m do metrô. 41 unidades exclusivas com fechadura inteligente e rooftop com vista panorâmica.",
    images: [
      {
        url: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
        width: 1200,
        height: 630,
        alt: "Obsidian - Studios de Alto Padrão Pinheiros",
      },
    ],
  },
}

export default function ObsidianPage() {
  const obsidianData = buscarEmpreendimentoPorSlug("obsidian")
  
  if (!obsidianData) {
    return <div>Empreendimento não encontrado</div>
  }
  
  return <EmpreendimentoPage data={obsidianData} />
}
