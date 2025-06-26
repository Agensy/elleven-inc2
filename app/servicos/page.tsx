import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

const servicos = [
  {
    title: "Incorporação e Construção",
    description:
      "Desenvolvimento completo de empreendimentos imobiliários, desde a concepção até a entrega das chaves.",
    features: [
      "Análise de viabilidade técnica e econômica",
      "Desenvolvimento de projetos arquitetônicos",
      "Gestão completa da obra",
      "Acompanhamento de cronograma e orçamento",
    ],
    icon: "/icons/incorporacao-construcao.svg",
  },
  {
    title: "Gestão de Obras",
    description: "Coordenação e supervisão técnica de obras com foco na qualidade, prazo e orçamento.",
    features: [
      "Planejamento e cronograma detalhado",
      "Controle de qualidade rigoroso",
      "Gestão de fornecedores e equipes",
      "Relatórios periódicos de progresso",
    ],
    icon: "/icons/gestao-de-obras.svg",
  },
  {
    title: "Planejamento Completo",
    description: "Consultoria especializada em planejamento estratégico para projetos imobiliários.",
    features: [
      "Estudos de mercado e localização",
      "Análise de investimento e retorno",
      "Estratégias de comercialização",
      "Assessoria jurídica e documental",
    ],
    icon: "/icons/planejamento-completo.svg",
  },
  {
    title: "Design de Interiores",
    description: "Projetos de ambientação e decoração que valorizam e personalizam os espaços.",
    features: [
      "Projetos de ambientação completa",
      "Seleção de materiais e acabamentos",
      "Mobiliário e decoração",
      "Acompanhamento da execução",
    ],
    icon: "/icons/design-interiores.svg",
  },
  {
    title: "Acompanhamento de Obras",
    description: "Supervisão técnica especializada para garantir a qualidade e conformidade da construção.",
    features: [
      "Vistorias técnicas regulares",
      "Controle de conformidade com projetos",
      "Relatórios técnicos detalhados",
      "Orientação para correções necessárias",
    ],
    icon: "/icons/acompanhamento-obras.svg",
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/backgrounds/bloco.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight uppercase">Nossos Serviços</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Soluções completas em engenharia e construção civil, do planejamento à entrega final
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Excelência em Cada Serviço</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um portfólio completo de serviços especializados para atender todas as necessidades do seu
              projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <img src={servico.icon || "/placeholder.svg"} alt={servico.title} className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{servico.title}</h3>
                    <p className="text-muted-foreground mb-6">{servico.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {servico.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Começar Seu Projeto?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua visão em realidade com nossa expertise em
            engenharia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-base font-semibold">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-base font-semibold border-white/30 text-white hover:bg-white/10"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
