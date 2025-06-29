import Header from "@/components/header"
import InvestidorHero from "@/components/investidor-hero"
import VantagensInvestimento from "@/components/vantagens-investimento-investidor"
import PortoSeguro from "@/components/porto-seguro-section"
import ApoioElleven from "@/components/apoio-elleven-section"
import SimuladorInvestimento from "@/components/simulador-investimento"
import ProcessoInvestimento from "@/components/processo-investimento-investidor"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export default function InvestidorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <InvestidorHero />
      <VantagensInvestimento />
      <PortoSeguro />
      <SimuladorInvestimento />
      <ProcessoInvestimento />
      <ApoioElleven />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
