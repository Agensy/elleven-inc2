import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { leMont2Data } from "@/lib/data/le-mont-2-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Le Mont 2 - Condomínio Residencial em Cotia | Elleven",
  description:
    "Le Mont 2 oferece apartamentos de 1, 2 e 3 dormitórios com lazer completo em Cotia. 120 unidades em 4 torres com piscina, quadra, playground e área gourmet.",
  keywords: "Le Mont 2, apartamentos Cotia, condomínio residencial, Jardim Isis, Elleven Engenharia",
  openGraph: {
    title: "Le Mont 2 - Condomínio Residencial em Cotia",
    description: "Apartamentos de 1, 2 e 3 dormitórios com lazer completo em Cotia",
    images: ["/empreendimentos/le-mont-2/fachada-principal.jpeg"],
  },
}

export default function LeMont2Page() {
  return <EmpreendimentoPage data={leMont2Data} />
}
