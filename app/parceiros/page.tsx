import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ParceirosHero from "@/components/parceiros-hero"
import ParceirosContent from "@/components/parceiros-content"

export const metadata: Metadata = {
  title: "Parceiros | Elleven Engenharia",
  description: "Conheça nossos parceiros estratégicos e as soluções completas que oferecemos em conjunto.",
}

export default function ParceirosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ParceirosHero />
      <ParceirosContent />
      <Footer />
    </main>
  )
}
