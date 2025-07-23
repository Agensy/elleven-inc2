"use client"

import { useState, useEffect } from "react"
import { empreendimentosMaster } from "@/lib/data/empreendimentos-master"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TestEmpreendimentosPage() {
  const [empreendimentos, setEmpreendimentos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      console.log('=== TESTE DE CARREGAMENTO DE EMPREENDIMENTOS ===')
      console.log('Total de empreendimentos no master:', empreendimentosMaster.length)
      
      const ativos = empreendimentosMaster.filter(emp => emp.ativo)
      console.log('Empreendimentos ativos:', ativos.length)
      
      ativos.forEach((emp, index) => {
        console.log(`${index + 1}. ${emp.nome} (ID: ${emp.id}, Slug: ${emp.slug}, Ativo: ${emp.ativo})`);
      })
      
      setEmpreendimentos(ativos)
      setLoading(false)
    } catch (err) {
      console.error('Erro ao carregar empreendimentos:', err)
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
      setLoading(false)
    }
  }, [])

  const testarFiltros = () => {
    try {
      console.log('=== TESTE DE FILTROS ===')
      
      // Teste filtro por tipo
      const studios = empreendimentosMaster.filter(emp => emp.ativo && emp.tipo === 'Studio')
      console.log('Studios encontrados:', studios.length, studios.map(s => s.nome))
      
      // Teste filtro por status
      const lancamentos = empreendimentosMaster.filter(emp => emp.ativo && emp.status === 'Lançamento')
      console.log('Lançamentos encontrados:', lancamentos.length, lancamentos.map(l => l.nome))
      
      // Teste filtro por bairro
      const cotia = empreendimentosMaster.filter(emp => emp.ativo && emp.bairro.toLowerCase().includes('cotia'))
      console.log('Empreendimentos em Cotia:', cotia.length, cotia.map(c => c.nome))
      
      // Teste filtro por preço
      const ate500k = empreendimentosMaster.filter(emp => emp.ativo && emp.preco <= 500000)
      console.log('Empreendimentos até R$ 500k:', ate500k.length, ate500k.map(e => `${e.nome} - R$ ${e.preco}`))
      
    } catch (err) {
      console.error('Erro ao testar filtros:', err)
    }
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div>Carregando...</div>
        </main>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle className="text-red-600">Erro</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{error}</p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Teste de Carregamento de Empreendimentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{empreendimentosMaster.length}</div>
                    <div className="text-sm text-muted-foreground">Total no Master</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{empreendimentos.length}</div>
                    <div className="text-sm text-muted-foreground">Empreendimentos Ativos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {empreendimentosMaster.filter(emp => emp.destacado).length}
                    </div>
                    <div className="text-sm text-muted-foreground">Destacados</div>
                  </div>
                </div>
                
                <Button onClick={testarFiltros} className="w-full">
                  Testar Filtros (Ver Console)
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  <p>Abra o console do navegador (F12) para ver os logs detalhados.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {empreendimentos.map((emp, index) => (
              <Card key={emp.id} className="p-4">
                <div className="space-y-2">
                  <div className="font-medium">{index + 1}. {emp.nome}</div>
                  <div className="text-sm text-muted-foreground">
                    <div>Tipo: {emp.tipo}</div>
                    <div>Status: {emp.status}</div>
                    <div>Bairro: {emp.bairro}</div>
                    <div>Preço: R$ {emp.preco?.toLocaleString()}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
