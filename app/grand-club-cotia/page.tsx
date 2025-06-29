import { grandClubCotiaData } from "@/lib/data/grand-club-cotia-data"
import { EmpreendimentoPage } from "@/components/empreendimento"

export async function generateMetadata() {
  const { seo } = grandClubCotiaData

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [seo.ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [seo.ogImage],
    },
  }
}

export default function GrandClubCotiaPage() {
  return <EmpreendimentoPage data={grandClubCotiaData} />
}
