import { Suspense, lazy } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import { Skeleton } from "@/components/ui/skeleton"

// Lazy load dos componentes que não são críticos para o first paint
const BannerSlider = lazy(() => import("@/components/banner-slider"))
const QuemSomosSection = lazy(() => import("@/components/quem-somos-section"))
const LinhaTempoSection = lazy(() => import("@/components/linha-tempo-section"))
const EmpreendimentosSection = lazy(() => import("@/components/empreendimentos-section"))
const ServicosSection = lazy(() => import("@/components/servicos-section"))
const DiferenciaisSection = lazy(() => import("@/components/diferenciais-section"))
const InvestimentoSection = lazy(() => import("@/components/investimento-section"))
const ParceirosGrid = lazy(() => import("@/components/parceiros-grid"))
const SobreSection = lazy(() => import("@/components/sobre-section"))
const Footer = lazy(() => import("@/components/footer"))

// Componente de loading para seções
const SectionSkeleton = () => (
  <div className="py-16 px-8">
    <div className="container mx-auto space-y-8">
      <Skeleton className="h-12 w-64 mx-auto" />
      <Skeleton className="h-6 w-96 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    </div>
  </div>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      <Suspense fallback={<SectionSkeleton />}>
        <QuemSomosSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <LinhaTempoSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <BannerSlider />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <EmpreendimentosSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <DiferenciaisSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ServicosSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <InvestimentoSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ParceirosGrid />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <SobreSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </main>
  )
}
