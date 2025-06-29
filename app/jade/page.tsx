import type { Metadata } from "next"
import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { buscarEmpreendimentoPorSlug } from "@/lib/data/empreendimentos-master"

export const metadata: Metadata = {
  title: "Jade - Lançamento Bela Vista São Paulo | Elleven Engenharia",
  description:
    "Jade - Lançamento na Bela Vista, próximo à Av. Paulista. Apartamentos de 2 dormitórios com rooftop, piscina e vista panorâmica. Sofisticação e tradição.",
  keywords: "jade bela vista, apartamentos paulista, lançamento são paulo, bela vista, av paulista apartamentos",
  openGraph: {
    title: "Jade Bela Vista - Viva o Extraordinário",
    description:
      "Lançamento na Bela Vista com localização privilegiada próxima à Av. Paulista. Rooftop com piscina, acabamentos premium e design sofisticado.",
    images: [
      {
        url: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
        width: 1200,
        height: 630,
        alt: "Jade - Lançamento Bela Vista São Paulo",
      },
    ],
  },
}

export default function JadePage() {
  const jadeData = buscarEmpreendimentoPorSlug("jade")
  
  if (!jadeData) {
    return <div>Empreendimento não encontrado</div>
  }
  
  return <EmpreendimentoPage data={jadeData} />
}
