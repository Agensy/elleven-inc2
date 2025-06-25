import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ParceirosContent from "@/components/parceiros-content"
import VitrineParceiros from "@/components/vitrine-parceiros"

export const metadata: Metadata = {
  title: "Parceiros | Elleven Engenharia",
  description: "Conheça nossos parceiros estratégicos e as soluções completas que oferecemos em conjunto.",
}

export default function ParceirosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* <ParceirosHero /> */}
      <VitrineParceiros />
      <ParceirosContent />
      <Footer />
    </main>
  )
}
