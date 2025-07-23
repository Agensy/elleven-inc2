import Header from "@/components/header"
import EmpreendimentosHero from "@/components/empreendimentos-hero"
import EmpreendimentosListingSimple from "@/components/empreendimentos-listing-simple"
import Footer from "@/components/footer"

export default function EmpreendimentosSimplePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <EmpreendimentosHero />
      <EmpreendimentosListingSimple />
      <Footer />
    </main>
  )
}