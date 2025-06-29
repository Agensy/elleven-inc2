import type { Metadata } from "next"
import { EmpreendimentoPage } from "@/components/empreendimento"
import { montRoyalData } from "@/lib/data/mont-royal-data"

export const metadata: Metadata = {
  title: montRoyalData.seo.title,
  description: montRoyalData.seo.description,
  keywords: montRoyalData.seo.keywords,
  openGraph: {
    title: "Mont Royal Porto Feliz - Modernidade, conforto e bem-estar",
    description:
      "Condomínio fechado com lazer completo e localização estratégica. Viva com exclusividade e qualidade de vida.",
    images: [
      {
        url: montRoyalData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Mont Royal - Condomínio Residencial em Porto Feliz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: montRoyalData.seo.title,
    description: montRoyalData.seo.description,
    images: [montRoyalData.seo.ogImage],
  },
}

export default function MontRoyalPage() {
  return <EmpreendimentoPage data={montRoyalData} />
}
