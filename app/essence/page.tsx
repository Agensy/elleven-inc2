import type { Metadata } from "next"
import { EmpreendimentoPage } from "@/components/empreendimento"
import { essenceData } from "@/lib/data/essence-data"

export const metadata: Metadata = {
  title: essenceData.seo.title,
  description: essenceData.seo.description,
  keywords: essenceData.seo.keywords,
  openGraph: {
    title: essenceData.seo.ogTitle,
    description: essenceData.seo.ogDescription,
    images: [essenceData.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: essenceData.seo.ogTitle,
    description: essenceData.seo.ogDescription,
    images: [essenceData.seo.ogImage],
  },
}

export default function EssencePage() {
  return <EmpreendimentoPage data={essenceData} />
}
