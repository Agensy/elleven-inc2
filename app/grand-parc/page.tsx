import type { Metadata } from "next"
import { EmpreendimentoPage } from "@/components/empreendimento"
import { grandParcData } from "@/lib/data/grand-parc-data"

export const metadata: Metadata = {
  title: grandParcData.seo.title,
  description: grandParcData.seo.description,
  keywords: grandParcData.seo.keywords,
  openGraph: {
    title: grandParcData.seo.ogTitle,
    description: grandParcData.seo.ogDescription,
    images: [grandParcData.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: grandParcData.seo.ogTitle,
    description: grandParcData.seo.ogDescription,
    images: [grandParcData.seo.ogImage],
  },
}

export default function GrandParcPage() {
  return <EmpreendimentoPage data={grandParcData} />
}
