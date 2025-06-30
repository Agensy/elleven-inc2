import Header from "@/components/header"
import InvistaHeroRefatorado from "@/components/invista-hero-refatorado"
import RendaVitalicia from "@/components/renda-vitalicia"
import ValorizacaoConstante from "@/components/valorizacao-constante"
import SegurancaCrise from "@/components/seguranca-crise"
import EstabilidadeInvestimento from "@/components/estabilidade-investimento"
import PatrimonioResistente from "@/components/patrimonio-resistente"
import ApoioElleven from "@/components/apoio-elleven"
import CtaFinalInvestimento from "@/components/cta-final-investimento"
import Footer from "@/components/footer"

export default function InvistaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <InvistaHeroRefatorado />
      <RendaVitalicia />
      <ValorizacaoConstante />
      <SegurancaCrise />
      <EstabilidadeInvestimento />
      <PatrimonioResistente />
      <ApoioElleven />
      <CtaFinalInvestimento />
      <Footer />
    </main>
  )
}
