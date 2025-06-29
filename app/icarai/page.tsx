import type { Metadata } from "next"
import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { buscarEmpreendimentoPorSlug } from "@/lib/data/empreendimentos-master"

export const metadata: Metadata = {
  title: "Icaraí Parque Clube - Em Obras em Salto SP | Elleven Engenharia",
  description:
    "Icaraí Parque Clube - Em obras em Salto SP. 408 unidades em 55.000m², apartamentos 2 e 3 dormitórios. Infraestrutura de clube, natureza e qualidade de vida.",
  keywords: "icarai salto, apartamentos salto, condomínio clube salto, parque clube, natureza salto, investir salto",
  openGraph: {
    title: "Icaraí Parque Clube - Natureza e Qualidade de Vida",
    description:
      "Em obras em Salto SP. 408 unidades com infraestrutura de clube em 55.000m². Apartamentos de 2 e 3 dormitórios cercados pela natureza.",
    images: [
      {
        url: "/empreendimentos/icarai-parque-clube/fachadas/ICARAI_TORRES DO ICARAI - FACHADA.jpeg",
        width: 1200,
        height: 630,
        alt: "Icaraí Parque Clube - Em Obras Salto SP",
      },
    ],
  },
}

export default function IcaraiPage() {
  const icaraiData = buscarEmpreendimentoPorSlug("icarai-parque-clube")
  
  if (!icaraiData) {
    return <div>Empreendimento não encontrado</div>
  }
  
  return <EmpreendimentoPage data={icaraiData} />
}
