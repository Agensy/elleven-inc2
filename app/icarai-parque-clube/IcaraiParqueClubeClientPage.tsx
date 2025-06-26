"use client"
import { empreendimentos } from "@/lib/data/empreendimentos"
import { notFound } from "next/navigation"
import EmpreendimentoPageTemplate from "@/components/empreendimento-page-template"

export default function IcaraiParqueClubeClientPage() {
  const empreendimento = empreendimentos.find((emp) => emp.slug === "icarai-parque-clube")

  if (!empreendimento) {
    notFound()
  }

  return <EmpreendimentoPageTemplate empreendimento={empreendimento} />
}
