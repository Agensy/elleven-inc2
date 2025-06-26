import type { Metadata } from "next"
import { empreendimentos } from "@/lib/data/empreendimentos"
import IcaraiParqueClubeClientPage from "./IcaraiParqueClubeClientPage"

export async function generateMetadata(): Promise<Metadata> {
  const empreendimento = empreendimentos.find((emp) => emp.slug === "icarai-parque-clube")

  if (!empreendimento) {
    return {
      title: "Empreendimento não encontrado | Elleven Engenharia",
    }
  }

  return {
    title: `${empreendimento.nome} - ${empreendimento.tipo} | Elleven Engenharia`,
    description: `${empreendimento.nome} - ${empreendimento.descricao}. ${empreendimento.precoFormatado}. Localização: ${empreendimento.localizacao}`,
    keywords: `${empreendimento.nome}, ${empreendimento.localizacao}, apartamento, ${empreendimento.tipo}, Elleven Engenharia`,
  }
}

export default function IcaraiParqueClubePage() {
  return <IcaraiParqueClubeClientPage />
}
