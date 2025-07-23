"use client"

import { empreendimentosMaster } from "@/lib/data/empreendimentos-master"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Empreendimento } from "@/lib/types/empreendimento"

export default function EmpreendimentosListingSimple() {
  // Filtrar apenas empreendimentos ativos
  const empreendimentosAtivos = empreendimentosMaster.filter((emp) => emp.ativo)
  
  console.log('=== EMPREENDIMENTOS LISTING SIMPLE ===')
  console.log('Total de empreendimentos no master:', empreendimentosMaster.length)
  console.log('Empreendimentos ativos:', empreendimentosAtivos.length)
  console.log('Lista de empreendimentos ativos:')
  empreendimentosAtivos.forEach((emp, index) => {
    console.log(`${index + 1}. ${emp.nome} (ID: ${emp.id}, Ativo: ${emp.ativo})`)
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Nossos Empreendimentos (Versão Simplificada)</h1>
        <p className="text-muted-foreground">
          Encontre o imóvel ideal para você. {empreendimentosAtivos.length} empreendimentos disponíveis.
        </p>
      </div>

      {/* Lista de empreendimentos */}
      {empreendimentosAtivos.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">Nenhum empreendimento ativo encontrado.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {empreendimentosAtivos.map((empreendimento, index) => (
            <EmpreendimentoCardSimple 
              key={empreendimento.id} 
              empreendimento={empreendimento} 
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function EmpreendimentoCardSimple({ 
  empreendimento, 
  index 
}: { 
  empreendimento: Empreendimento
  index: number
}) {
  console.log(`Renderizando card ${index + 1}: ${empreendimento.nome}`)
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      <div className="relative h-48">
        <Image
          src={empreendimento.imagem || "/placeholder.svg"}
          alt={empreendimento.nome}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            console.error(`Erro ao carregar imagem para ${empreendimento.nome}:`, empreendimento.imagem)
            e.currentTarget.src = "/placeholder.svg"
          }}
        />
        {empreendimento.destacado && (
          <Badge className="absolute top-3 left-3 bg-primary">Destaque</Badge>
        )}
        <Badge variant="secondary" className="absolute top-3 right-3">
          {empreendimento.status}
        </Badge>
        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
          #{index + 1}
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold line-clamp-1">{empreendimento.nome}</h3>
          {empreendimento.subtitulo && (
            <p className="text-sm text-muted-foreground">{empreendimento.subtitulo}</p>
          )}
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{empreendimento.localizacao}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-0">
        {/* Informações básicas */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-muted-foreground">Tipo:</span>
            <div className="font-medium">{empreendimento.tipo}</div>
          </div>
          <div>
            <span className="text-muted-foreground">Bairro:</span>
            <div className="font-medium">{empreendimento.bairro}</div>
          </div>
        </div>
        
        {/* Link para detalhes */}
        <Link 
          href={`/${empreendimento.slug}`}
          className="block w-full bg-primary text-primary-foreground text-center py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Ver Detalhes
        </Link>
      </CardContent>
    </Card>
  )
}
