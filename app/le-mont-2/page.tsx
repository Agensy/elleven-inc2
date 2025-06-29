import type { Metadata } from "next"
import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { buscarEmpreendimentoPorSlug } from "@/lib/data/empreendimentos-master"

export const metadata: Metadata = {
  title: "Le Mont 2 Cotia - Condomínio com lazer completo e segurança",
  description: "Descubra o Le Mont 2 em Cotia. Apartamentos de 1, 2 e 3 dormitórios com piscina, quadra, salão de festas e segurança 24h. Perfeito para sua família!",
  keywords: "le mont 2 cotia, apartamentos cotia, condomínio fechado cotia, lazer completo cotia, morar em cotia",
  openGraph: {
    title: "Le Mont 2 - Viva com conforto e segurança em Cotia",
    description: "Condomínio fechado com ampla área de lazer, piscina, quadra e mais. Apartamentos com 1 a 3 dormitórios, perfeitos para você.",
    images: [
      {
        url: "/empreendimentos/le-mont-2/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Le Mont 2 - Cotia",
      },
    ],
  },
}

export default function LeMont2Page() {
  const empreendimentoData = buscarEmpreendimentoPorSlug("le-mont-2")
  
  if (!empreendimentoData) {
    return <div>Empreendimento não encontrado</div>
  }
  
  return <EmpreendimentoPage data={empreendimentoData} />
} 