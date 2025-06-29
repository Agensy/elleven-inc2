"use client"

import { useState } from "react"
import { Empreendimento } from "@/lib/types/empreendimento"
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

  // Adaptar dados para a estrutura esperada pelos componentes
  const enderecoCompleto = data.endereco 
    ? `${data.endereco.rua}, ${data.endereco.numero} - ${data.endereco.bairro}`
    : data.localizacao

  return (
    <div className="min-h-screen bg-white">
      {/* Header com navegação interna */}
      <EmpreendimentoHeader 
        nome={data.nome}
        onShowContact={handleShowContact}
      />

      {/* Hero Section */}
      <EmpreendimentoHero
        nome={data.nome}
        subtitulo={data.subtitulo || data.status}
        slogan={data.slogan || data.destaque || ""}
        imagemBackground={data.identidadeVisual.imagemBackground}
        logo={data.identidadeVisual.logo}
        onShowContact={handleShowContact}
      />

      {/* Seção Sobre o Empreendimento */}
      <EmpreendimentoSobre
        nome={data.nome}
        descricao={data.descricao}
        tipo={data.tipo}
        area={data.area}
        endereco={enderecoCompleto}
        localizacao={data.localizacao}
        imagemPrincipal={data.galeria[0] || data.imagem}
      />

      {/* Informações com Sistema de Abas */}
      <EmpreendimentoInformacoes
        nome={data.nome}
        informacoes={[]} // TODO: Mapear pontos_interesse para estrutura de abas
        endereco={enderecoCompleto}
      />

      {/* Galeria de Imagens */}
      <EmpreendimentoGaleria
        nome={data.nome}
        galeria={data.galeria}
      />

      {/* Plantas e Ficha Técnica */}
      <EmpreendimentoPlantas
        tipologia={data.plantas[0]} // TODO: Adaptar estrutura de plantas
      />

      {/* Seção de Contato */}
      <EmpreendimentoContato
        nome={data.nome}
      />

      {/* Footer Padrão do Site */}
      <Footer />

      {/* Modal de Contato */}
      <EmpreendimentoModalContato
        nome={data.nome}
        showContact={showContact}
        onClose={handleCloseContact}
      />
    </div>
  )
} 