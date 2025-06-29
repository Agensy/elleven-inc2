import type { Metadata } from "next"
import { EmpreendimentoPage } from "@/components/empreendimento"
import { leMontData } from "@/lib/data/le-mont-data"

export const metadata: Metadata = {
  title: "Le Mont - Condomínio com Unidades Garden em Cotia | Elleven Engenharia",
  description:
    "Le Mont - Condomínio de 18.000m² em Cotia. 150 unidades, 1 e 2 dormitórios + Garden. Piscina, quadra, playground. Projeto Studio Gemini.",
  keywords: "le mont cotia, apartamentos cotia, condomínio fechado, apartamento com lazer cotia, investir em cotia",
  openGraph: {
    title: "Le Mont Cotia - Viva com conforto e segurança",
    description:
      "Condomínio fechado com lazer completo, piscina, quadra, salão de festas e muito mais. Apartamentos de 1 a 3 dormitórios em Cotia.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20-%20VITRINE_LE%20MONT%201-tpzwlGlJbz53ZZYI1khTDNV2R5Dxe7.jpeg",
        width: 1200,
        height: 630,
        alt: "Le Mont - Condomínio Residencial em Cotia",
      },
    ],
  },
}

export default function LeMontPage() {
  return <EmpreendimentoPage data={leMontData} />
}
