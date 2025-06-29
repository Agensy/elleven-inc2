"use client"

import { useState } from "react"
import type { Empreendimento } from "@/lib/types/empreendimento"
import Footer from "@/components/footer"

// Importar todos os componentes de seção
import EmpreendimentoHeader from "./EmpreendimentoHeader"
import EmpreendimentoHero from "./EmpreendimentoHero"
import EmpreendimentoSobre from "./EmpreendimentoSobre"
import EmpreendimentoInformacoes from "./EmpreendimentoInformacoes"
import EmpreendimentoGaleria from "./EmpreendimentoGaleria"
import EmpreendimentoPlantas from "./EmpreendimentoPlantas"
import EmpreendimentoContato from "./EmpreendimentoContato"
import EmpreendimentoModalContato from "./EmpreendimentoModalContato"

interface EmpreendimentoPageProps {
  data: Empreendimento
}

export default function EmpreendimentoPage({ data }: EmpreendimentoPageProps) {
  const [showContact, setShowContact] = useState(false)

  const handleShowContact = () => setShowContact(true)
  const handleCloseContact = () => setShowContact(false)

  // Criar dados de informações baseados nos dados do empreendimento
  const informacoesData = [
    {
      id: "localizacao",
      titulo: "Localização",
      icon: "MapPin",
      detalhes: {
        titulo: "Localização Privilegiada",
        subtitulo: `Localizado em ${data.localizacao}`,
        pontos: (data.pontos_interesse || []).map((ponto) => ({
          titulo: ponto.nome,
          distancia: ponto.distancia,
        })),
        imagem: data.identidadeVisual?.imagemBackground || "/placeholder.svg",
      },
    },
    {
      id: "lazer",
      titulo: "Lazer",
      icon: "Waves",
      detalhes: {
        titulo: "Área de Lazer Completa",
        subtitulo: "Espaços pensados para seu bem-estar e diversão",
        pontos: (data.diferenciais || []).map((diferencial) => ({
          titulo: diferencial,
          distancia: "",
        })),
        imagem: data.galeria?.[0] || data.identidadeVisual?.imagemBackground || "/placeholder.svg",
      },
    },
    {
      id: "seguranca",
      titulo: "Segurança",
      icon: "Shield",
      detalhes: {
        titulo: "Segurança 24 Horas",
        subtitulo: "Tranquilidade para você e sua família",
        pontos: [
          { titulo: "Portaria 24h", distancia: "" },
          { titulo: "Circuito de câmeras", distancia: "" },
          { titulo: "Controle de acesso", distancia: "" },
        ],
        imagem: data.galeria?.[1] || data.identidadeVisual?.imagemBackground || "/placeholder.svg",
      },
    },
    {
      id: "investimento",
      titulo: "Investimento",
      icon: "TrendingUp",
      detalhes: {
        titulo: "Excelente Oportunidade",
        subtitulo: `${data.precoFormatado || "Consulte valores"} - ${data.status || "Disponível"}`,
        pontos: [
          { titulo: "Área", distancia: data.area || "N/A" },
          { titulo: "Quartos", distancia: data.quartos?.toString() || "N/A" },
          { titulo: "Vagas", distancia: data.vagas?.toString() || "N/A" },
          { titulo: "Entrega", distancia: data.entrega || "N/A" },
        ],
        imagem: data.galeria?.[2] || data.identidadeVisual?.imagemBackground || "/placeholder.svg",
      },
    },
  ]

  // Converter galeria para o formato esperado pelo componente
  const galeriaFormatada = (data.galeria || []).map((src, index) => ({
    url: src,
    titulo: `${data.nome} - Imagem ${index + 1}`,
    descricao: `Vista do empreendimento ${data.nome}`,
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Header com navegação interna */}
      <EmpreendimentoHeader nome={data.nome} onShowContact={handleShowContact} />

      {/* Hero Section */}
      <EmpreendimentoHero
        nome={data.nome}
        subtitulo={data.subtitulo || ""}
        slogan={data.slogan || ""}
        imagemBackground={data.identidadeVisual?.imagemBackground || "/placeholder.svg"}
        logo={data.identidadeVisual?.logo || "/placeholder.svg"}
        onShowContact={handleShowContact}
      />

      {/* Seção Sobre o Empreendimento */}
      <EmpreendimentoSobre
        nome={data.nome}
        descricao={data.descricao}
        tipo={data.tipo}
        area={data.area}
        endereco={
          data.endereco ? `${data.endereco.rua}, ${data.endereco.numero} - ${data.endereco.bairro}` : data.localizacao
        }
        localizacao={data.localizacao}
        imagemPrincipal={data.imagemDestaque || data.galeria?.[0] || data.imagem || "/placeholder.svg"}
      />

      {/* Informações com Sistema de Abas */}
      <EmpreendimentoInformacoes
        nome={data.nome}
        informacoes={informacoesData}
        endereco={
          data.endereco
            ? `${data.endereco.rua}, ${data.endereco.numero} - ${data.endereco.bairro}, ${data.endereco.cidade} - ${data.endereco.estado}`
            : data.localizacao
        }
      />

      {/* Galeria de Imagens */}
      <EmpreendimentoGaleria nome={data.nome} galeria={galeriaFormatada} />

      {/* Plantas e Ficha Técnica */}
      <EmpreendimentoPlantas
        nome={data.nome}
        plantas={data.plantas || []}
        especificacoes={data.especificacoes}
        corPrimaria={data.identidadeVisual?.corPrimaria || "#192849"}
      />

      {/* Seção de Contato */}
      <EmpreendimentoContato nome={data.nome} />

      {/* Footer Padrão do Site */}
      <Footer />

      {/* Modal de Contato */}
      <EmpreendimentoModalContato nome={data.nome} showContact={showContact} onClose={handleCloseContact} />
    </div>
  )
}
