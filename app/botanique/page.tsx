import type { Metadata } from "next"
import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { buscarEmpreendimentoPorSlug } from "@/lib/data/empreendimentos-master"

export const metadata: Metadata = {
  title: "Botanique - Condomínio ao lado de bosque privativo | Elleven Engenharia",
  description:
    "Botanique - Condomínio clube em Cotia com bosque privativo de 4.500m². 150 apartamentos, 1, 2 e 3 dormitórios + Duplex. Piscina, playground, segurança 24h.",
  keywords: "botanique cotia, apartamentos cotia, condomínio clube, bosque privativo, área verde cotia, investir em cotia",
  openGraph: {
    title: "Botanique Cotia - Viva ao lado de um bosque privativo",
    description:
      "Condomínio clube com bosque privativo de 4.500m², piscina, playground, salão de festas e segurança 24h. Apartamentos de 1 a 3 dormitórios + Duplex em Cotia.",
    images: [
      {
        url: "/empreendimentos/botanique/1 - VITRINE_BOTANIQUE.jpg",
        width: 1200,
        height: 630,
        alt: "Botanique - Condomínio Residencial em Cotia",
      },
    ],
  },
}

export default function BotaniquePage() {
  const botaniqueData = buscarEmpreendimentoPorSlug("botanique")
  
  if (!botaniqueData) {
    return <div>Empreendimento não encontrado</div>
  }
  
  return <EmpreendimentoPage data={botaniqueData} />
}
