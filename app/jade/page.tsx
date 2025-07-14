import type { Metadata } from "next"
import { EmpreendimentoPage } from "@/components/empreendimento"
import { buscarEmpreendimentoPorSlug } from "@/lib/data/empreendimentos-master"

export const metadata: Metadata = {
  title: "Jade - Studios de Alto Padrão Bela Vista | Elleven Engenharia",
  description:
    "Jade - Studios de 26 a 32m² na Bela Vista, próximo à Av. Paulista. Rooftop com piscina aquecida, academia e vista panorâmica. A partir de R$ 390.000,00.",
  keywords: "jade bela vista, studios paulista, lançamento são paulo, bela vista, av paulista studios, studios alto padrão",
  openGraph: {
    title: "Jade Bela Vista - Viva o Extraordinário",
    description:
      "Studios de alto padrão na Bela Vista com localização privilegiada próxima à Av. Paulista. Rooftop exclusivo com piscina aquecida e infraestrutura completa.",
    images: [
      {
        url: "/empreendimentos/jade/fachadas/JADE_Cardim 01.jpeg",
        width: 1200,
        height: 630,
        alt: "Jade - Studios de Alto Padrão Bela Vista São Paulo",
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
