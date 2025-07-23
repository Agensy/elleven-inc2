import DebugEmpreendimentos from "@/components/debug-empreendimentos"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DebugEmpreendimentosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <DebugEmpreendimentos />
      </main>
      <Footer />
    </>
  )
}