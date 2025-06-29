import { EmpreendimentoPage } from "@/components/empreendimento"
import { quartierData } from "@/lib/data/quartier-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: quartierData.seo.title,
  description: quartierData.seo.description,
  keywords: quartierData.seo.keywords,
  openGraph: {
    title: quartierData.seo.ogTitle,
    description: quartierData.seo.ogDescription,
    images: [quartierData.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: quartierData.seo.ogTitle,
    description: quartierData.seo.ogDescription,
    images: [quartierData.seo.ogImage],
  },
}

export default function QuartierPage() {
  return <EmpreendimentoPage data={quartierData} />
}
