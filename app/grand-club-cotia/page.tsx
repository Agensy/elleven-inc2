import type { Metadata } from "next"
import { EmpreendimentoPage } from "@/components/empreendimento"
import { grandClubCotiaData } from "@/lib/data/grand-club-cotia-data"

export const metadata: Metadata = {
  title: "Grand Club Cotia - Condomínio Clube Exclusivo em Cotia",
  description:
    "Conheça o Grand Club Cotia. Apartamentos de 1 e 2 dormitórios com lazer completo, segurança e localização privilegiada. Seu novo lar com alto padrão!",
  keywords: "grand club cotia, apartamentos cotia, condomínio clube sp, lazer completo cotia",
  openGraph: {
    title: "Grand Club Cotia - Viva com exclusividade e conforto",
    description:
      "O Grand Club Cotia oferece o que há de melhor em lazer, segurança e localização. Apartamentos de 1 e 2 dormitórios esperando por você.",
    images: ["/empreendimentos/grand-club-cotia/fachada-principal.webp"],
  },
}

export default function GrandClubCotiaPage() {
  return <EmpreendimentoPage empreendimento={grandClubCotiaData} />
}
