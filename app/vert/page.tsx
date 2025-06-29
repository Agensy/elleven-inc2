import type { Metadata } from "next"
import { EmpreendimentoPage } from "@/components/empreendimento"
import { vertData } from "@/lib/data/vert-data"

export const metadata: Metadata = {
  title: vertData.seo.title,
  description: vertData.seo.description,
  keywords: vertData.seo.keywords,
  openGraph: {
    title: vertData.seo.ogTitle,
    description: vertData.seo.ogDescription,
    images: [vertData.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: vertData.seo.ogTitle,
    description: vertData.seo.ogDescription,
    images: [vertData.seo.ogImage],
  },
}

export default function VertPage() {
  return <EmpreendimentoPage data={vertData} />
}
