"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Bed, Bath, Car, Calendar, Search, Filter, X } from "lucide-react"
import { empreendimentosMaster, opcoesFiltros, getEmpreendimentoUrl } from "@/lib/data/empreendimentos-master"
import type { Empreendimento } from "@/lib/types/empreendimento"
import Link from "next/link"
import Image from "next/image"

interface FiltrosAtivos {
  busca: string
  tipo: string
  status: string
  bairro: string
  faixa: string
}

export default function EmpreendimentosListing() {
  const [filtros, setFiltros] = useState<FiltrosAtivos>({
    busca: "",
    tipo: "all", // Updated default value
    status: "all", // Updated default value
    bairro: "all", // Updated default value
    faixa: "all", // Updated default value
  })

  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  // Filtrar empreendimentos baseado nos filtros ativos
  const empreendimentosFiltrados = useMemo(() => {
    let resultado = empreendimentosMaster.filter((emp) => emp.ativo)

    // Filtro por busca (nome ou localização)
    if (filtros.busca) {
      const termoBusca = filtros.busca.toLowerCase()
      resultado = resultado.filter(
        (emp) =>
          emp.nome.toLowerCase().includes(termoBusca) ||
          emp.localizacao.toLowerCase().includes(termoBusca) ||
          emp.bairro.toLowerCase().includes(termoBusca),
      )
    }

    // Filtro por tipo
    if (filtros.tipo !== "all") {
      resultado = resultado.filter((emp) => emp.tipo === filtros.tipo)
    }

    // Filtro por status
    if (filtros.status !== "all") {
      resultado = resultado.filter((emp) => emp.status === filtros.status)
    }

    // Filtro por bairro
    if (filtros.bairro !== "all") {
      resultado = resultado.filter((emp) => emp.bairro === filtros.bairro)
    }

    // Filtro por faixa de preço
    if (filtros.faixa !== "all") {
      const faixaSelecionada = opcoesFiltros.faixas.find((f) => f.label === filtros.faixa)
      if (faixaSelecionada) {
        resultado = resultado.filter((emp) => emp.preco >= faixaSelecionada.min && emp.preco <= faixaSelecionada.max)
      }
    }

    return resultado
  }, [filtros])

  const limparFiltros = () => {
    setFiltros({
      busca: "",
      tipo: "all", // Updated default value
      status: "all", // Updated default value
      bairro: "all", // Updated default value
      faixa: "all", // Updated default value
    })
  }

  const temFiltrosAtivos = Object.values(filtros).some((valor) => valor !== "all")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Nossos Empreendimentos</h1>
        <p className="text-muted-foreground">
          Encontre o imóvel ideal para você. {empreendimentosFiltrados.length} empreendimentos disponíveis.
        </p>
      </div>

      {/* Barra de busca e filtros */}
      <div className="mb-6 space-y-4">
        {/* Busca principal */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por nome ou localização..."
              value={filtros.busca}
              onChange={(e) => setFiltros((prev) => ({ ...prev, busca: e.target.value }))}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filtros
            {temFiltrosAtivos && (
              <Badge variant="secondary" className="ml-1">
                {Object.values(filtros).filter((v) => v !== "all").length}
              </Badge>
            )}
          </Button>
        </div>

        {/* Filtros avançados */}
        {mostrarFiltros && (
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Tipo</label>
                  <Select
                    value={filtros.tipo}
                    onValueChange={(value) => setFiltros((prev) => ({ ...prev, tipo: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os tipos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os tipos</SelectItem>
                      {opcoesFiltros.tipos.map((tipo) => (
                        <SelectItem key={tipo} value={tipo}>
                          {tipo}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Status</label>
                  <Select
                    value={filtros.status}
                    onValueChange={(value) => setFiltros((prev) => ({ ...prev, status: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os status</SelectItem>
                      {opcoesFiltros.status.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Bairro</label>
                  <Select
                    value={filtros.bairro}
                    onValueChange={(value) => setFiltros((prev) => ({ ...prev, bairro: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os bairros" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os bairros</SelectItem>
                      {opcoesFiltros.bairros.map((bairro) => (
                        <SelectItem key={bairro} value={bairro}>
                          {bairro}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Faixa de Preço</label>
                  <Select
                    value={filtros.faixa}
                    onValueChange={(value) => setFiltros((prev) => ({ ...prev, faixa: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todas as faixas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as faixas</SelectItem>
                      {opcoesFiltros.faixas.map((faixa) => (
                        <SelectItem key={faixa.label} value={faixa.label}>
                          {faixa.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {temFiltrosAtivos && (
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" onClick={limparFiltros} className="flex items-center gap-2 bg-transparent">
                    <X className="h-4 w-4" />
                    Limpar filtros
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Lista de empreendimentos */}
      {empreendimentosFiltrados.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">Nenhum empreendimento encontrado com os filtros selecionados.</p>
            <Button variant="outline" onClick={limparFiltros}>
              Limpar filtros
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {empreendimentosFiltrados.map((empreendimento) => (
            <EmpreendimentoCard key={empreendimento.id} empreendimento={empreendimento} />
          ))}
        </div>
      )}
    </div>
  )
}

function EmpreendimentoCard({ empreendimento }: { empreendimento: Empreendimento }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={empreendimento.imagem || "/placeholder.svg"}
          alt={empreendimento.nome}
          fill
          className="object-cover"
        />
        {empreendimento.destacado && <Badge className="absolute top-3 left-3 bg-primary">Destaque</Badge>}
        <Badge variant="secondary" className="absolute top-3 right-3">
          {empreendimento.status}
        </Badge>
      </div>

      <CardHeader>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{empreendimento.nome}</h3>
          {empreendimento.subtitulo && <p className="text-sm text-muted-foreground">{empreendimento.subtitulo}</p>}
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {empreendimento.localizacao}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Características */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            {empreendimento.quartos} dorm
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            {empreendimento.banheiros} banh
          </div>
          <div className="flex items-center gap-1">
            <Car className="h-4 w-4" />
            {empreendimento.vagas} vaga
          </div>
        </div>

        {/* Área e preço */}
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">A partir de {empreendimento.area}</p>
          <p className="text-lg font-semibold text-primary">{empreendimento.precoFormatado}</p>
        </div>

        {/* Entrega */}
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          Entrega: {empreendimento.entrega}
        </div>

        {/* Botão */}
        <Link href={getEmpreendimentoUrl(empreendimento.slug)}>
          <Button className="w-full">Ver Detalhes</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
