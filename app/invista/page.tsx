import Header from "@/components/header"
import InvistaHero from "@/components/invista-hero"
import InvestimentoOpcoes from "@/components/investimento-opcoes"
import SimuladorAvancado from "@/components/simulador-avancado"
import VantagensInvestimento from "@/components/vantagens-investimento"
import ProcessoInvestimento from "@/components/processo-investimento"
import Footer from "@/components/footer"
import { Award, TrendingUp, Users } from "lucide-react"

export default function InvistaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <InvistaHero />
      {/* Cards Flutuantes de Estatísticas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Card Rentabilidade */}
            <div className="floating-card rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12%</div>
              <div className="text-sm text-gray-600 mb-2">Rentabilidade anual</div>
              <div className="text-sm text-gray-700">Acima da média do mercado imobiliário</div>
            </div>

            {/* Card Investimentos */}
            <div className="floating-card rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">R$ 2M+</div>
              <div className="text-sm text-gray-600 mb-2">Investimentos</div>
              <div className="text-sm text-gray-700">Volume total em projetos ativos</div>
            </div>

            {/* Card Satisfação */}
            <div className="floating-card rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A2D54] to-[#192849] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600 mb-2">Satisfação</div>
              <div className="text-sm text-gray-700">Clientes recomendam nossos serviços</div>
            </div>
          </div>
        </div>
      </section>
      <InvestimentoOpcoes />
      <SimuladorAvancado />
      <VantagensInvestimento />
      <ProcessoInvestimento />
      <Footer />
    </main>
  )
}
