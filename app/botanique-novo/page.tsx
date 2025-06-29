import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { botaniqueData } from "@/lib/data/botanique-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: botaniqueData.seo.title,
  description: botaniqueData.seo.description,
  keywords: botaniqueData.seo.keywords,
  openGraph: {
    title: botaniqueData.seo.ogTitle,
    description: botaniqueData.seo.ogDescription,
    images: [botaniqueData.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: botaniqueData.seo.ogTitle,
    description: botaniqueData.seo.ogDescription,
    images: [botaniqueData.seo.ogImage],
  },
}

export default function BotaniquePage() {
  return <EmpreendimentoPage data={botaniqueData} />
}
