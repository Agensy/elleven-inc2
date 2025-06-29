import type { Metadata } from "next"
import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { buscarEmpreendimentoPorSlug } from "@/lib/data/empreendimentos-master"

export const metadata: Metadata = {
  title: "Obsidian - Breve Lançamento Pinheiros by Gemini | Elleven Engenharia",
  description:
    "Obsidian - Breve lançamento em Pinheiros by Gemini. Apartamentos de alto padrão com design contemporâneo, próximo à Oscar Freire. Exclusividade e sofisticação.",
  keywords: "obsidian pinheiros, apartamentos pinheiros, gemini pinheiros, oscar freire apartamentos, alto padrão pinheiros",
  openGraph: {
    title: "Obsidian Pinheiros - Viva a Exclusividade",
    description:
      "Breve lançamento em Pinheiros by Gemini. Design contemporâneo com acabamentos premium, localização privilegiada próxima à Oscar Freire.",
    images: [
      {
        url: "/empreendimentos/obsidian/fachadas/fachada 001.jpeg",
        width: 1200,
        height: 630,
        alt: "Obsidian - Breve Lançamento Pinheiros",
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