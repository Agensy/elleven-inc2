"use client"

import { empreendimentosMaster } from "@/lib/data/empreendimentos-master"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DebugEmpreendimentos() {
  const empreendimentosAtivos = empreendimentosMaster.filter(emp => emp.ativo)
  const empreendimentosInativos = empreendimentosMaster.filter(emp => !emp.ativo)
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Debug - Informações dos Empreendimentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{empreendimentosMaster.length}</div>
              <div className="text-sm text-muted-foreground">Total de Empreendimentos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{empreendimentosAtivos.length}</div>
              <div className="text-sm text-muted-foreground">Empreendimentos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{empreendimentosInativos.length}</div>
              <div className="text-sm text-muted-foreground">Empreendimentos Inativos</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Lista de Empreendimentos Ativos:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {empreendimentosAtivos.map((emp, index) => (
                <Card key={emp.id} className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{index + 1}. {emp.nome}</span>
                      {emp.destacado && <Badge variant="secondary">Destaque</Badge>}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div>ID: {emp.id}</div>
                      <div>Slug: {emp.slug}</div>
                      <div>Tipo: {emp.tipo}</div>
                      <div>Status: {emp.status}</div>
                      <div>Bairro: {emp.bairro}</div>
                      <div>Preço: R$ {emp.preco?.toLocaleString()}</div>
                      <div>Ativo: {emp.ativo ? '✅' : '❌'}</div>
                      <div>Imagem: {emp.imagem ? '✅' : '❌'}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {empreendimentosInativos.length > 0 && (
              <>
                <h3 className="text-lg font-semibold text-red-600">Empreendimentos Inativos:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {empreendimentosInativos.map((emp, index) => (
                    <Card key={emp.id} className="p-4 border-red-200">
                      <div className="space-y-2">
                        <span className="font-medium text-red-600">{index + 1}. {emp.nome}</span>
                        <div className="text-sm text-muted-foreground">
                          <div>ID: {emp.id}</div>
                          <div>Slug: {emp.slug}</div>
                          <div>Ativo: {emp.ativo ? '✅' : '❌'}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}