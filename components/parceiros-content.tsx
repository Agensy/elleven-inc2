"use client"

import { motion } from "framer-motion"
import { CheckCircle, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ParceirosContent() {
  const otherPartners = [
    {
      name: "Banco do Brasil",
      logo: "/parceiros/bb-white.png",
      description: "Soluções financeiras e crédito imobiliário para seus projetos.",
      services: ["Financiamento Imobiliário", "Crédito Empresarial", "Conta Corrente PJ"],
    },
    {
      name: "Safra",
      logo: "/parceiros/safra-white.png",
      description: "Banking privado e soluções de investimento personalizadas.",
      services: ["Private Banking", "Gestão de Patrimônio", "Consultoria Financeira"],
    },
    {
      name: "Itaú",
      logo: "/parceiros/itau-white.png",
      description: "Um dos maiores bancos do Brasil, com ampla gama de produtos e serviços.",
      services: ["Contas", "Empréstimos", "Consórcios"],
    },
    {
      name: "CAIXA",
      logo: "/parceiros/caixa-white.png",
      description: "Banco público com foco em habitação e programas sociais.",
      services: ["Financiamento Habitacional", "FGTS", "Loterias"],
    },
    {
      name: "Bradesco",
      logo: "/parceiros/bradesco-white.png",
      description: "Soluções bancárias completas para pessoas físicas e jurídicas.",
      services: ["Crédito", "Investimentos", "Seguros"],
    },
    {
      name: "Santander",
      logo: "/parceiros/santander-white.png",
      description: "Serviços financeiros globais e soluções de crédito.",
      services: ["Financiamento", "Cartões", "Câmbio"],
    },
    {
      name: "Construz Construtora",
      logo: "/parceiros/construz-white.png",
      description: "Construção civil com foco em projetos residenciais e comerciais.",
      services: ["Edificações", "Reformas", "Infraestrutura"],
    },
    {
      name: "Gemini",
      logo: "/parceiros/gemini-white.png",
      description: "Construtora e incorporadora com vasta experiência no mercado.",
      services: ["Incorporação", "Construção", "Desenvolvimento Urbano"],
    },
    {
      name: "Revolução Gestão Condominial",
      logo: "/parceiros/revolucao-white.png",
      description: "Gestão completa e eficiente para condomínios residenciais e comerciais.",
      services: ["Administração", "Financeiro", "Jurídico"],
    },
    {
      name: "Stuchi Imóveis",
      logo: "/parceiros/stuchi-imoveis-white.png",
      description: "Corretagem especializada em imóveis de alto padrão.",
      services: ["Vendas Exclusivas", "Locação Premium", "Consultoria Imobiliária"],
    },
    {
      name: "Grupo Stuchi",
      logo: "/parceiros/stuchi-white.png",
      description: "Grupo empresarial com diversas atuações no mercado imobiliário.",
      services: ["Incorporação", "Construção", "Vendas"],
    },
    {
      name: "Vinx",
      logo: "/parceiros/vinx-white.png",
      description: "Plataforma de soluções digitais para o mercado imobiliário.",
      services: ["CRM Imobiliário", "Gestão de Vendas", "Marketing Digital"],
    },
    {
      name: "Visconde Construtora",
      logo: "/parceiros/visconde-white.png",
      description: "Construção e desenvolvimento de empreendimentos de alta qualidade.",
      services: ["Obras Residenciais", "Obras Comerciais", "Projetos Especiais"],
    },
    {
      name: "Smart Solution Technology",
      logo: "/parceiros/smart-solution-white.png",
      description: "Soluções tecnológicas inovadoras para o setor imobiliário.",
      services: ["Automação", "Sistemas de Gestão", "Consultoria Tech"],
    },
    {
      name: "Zatz",
      logo: "/parceiros/zatz-white.png",
      description: "Escritório de advocacia especializado em direito imobiliário e empresarial.",
      services: ["Consultoria Jurídica", "Contratos", "Regularização"],
    },
  ]

  return (
    <div className="bg-gray-50">
      {/* Seção 1: Headline + Cadastro Kabanna */}
      <section className="py-20 bg-gray-50">
        {" "}
        {/* Revertido para bg-gray-50 e removido text-white */}
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Headline Sub-headline da Kabanna */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg" // Revertido para bg-white e removido text-[#1A2D54]
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">K</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A2D54]">Kabanna Real Estate</h3>
                    <p className="text-gray-600">Parceiro Estratégico Internacional</p>
                  </div>
                </div>

                <h4 className="text-3xl font-bold text-[#1A2D54] leading-tight">
                  Planejamento Estratégico para Investimentos nos EUA
                </h4>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Oferecemos viabilidade técnica completa, anteprojetos arquitetônicos e análises jurídicas detalhadas
                  para garantir o sucesso dos seus investimentos imobiliários no mercado americano.
                </p>

                <div className="grid gap-3">
                  {[
                    "Viabilidade técnica completa",
                    "Anteprojetos arquitetônicos",
                    "Análises jurídicas detalhadas",
                    "Acompanhamento personalizado",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Cadastro/Contato da Kabanna */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1A2D54] to-[#2A4A7A] rounded-2xl p-8 shadow-lg text-white"
            >
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Cadastro / Contato</h3>
                  <p className="text-white/80">Kabanna Real Estate</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target as HTMLFormElement)
                  const nome = formData.get('nome')
                  const email = formData.get('email')
                  const telefone = formData.get('telefone')
                  const message = `Quero saber mais sobre como investir. Meus dados: Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`
                  const whatsappUrl = `https://wa.me/5511915373813?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                }}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="+55 11 91537-3813"
                      required
                    />
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Quero Investir nos EUA
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção 3: Outros Parceiros */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-[#1A2D54] mb-4">NOSSOS PARCEIROS</h3>
              <p className="text-lg text-gray-600">Parceiros estratégicos que fortalecem nossa rede de soluções</p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
              {otherPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1A2D54] to-[#2A4A7A] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-blue-700/50"
                >
                    <div className="w-full h-16 flex items-center justify-center mb-4">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={partner.name === "Itaú" ? 80 : 120}
                        height={partner.name === "Itaú" ? 40 : 60}
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAFISMOS%202-JV5guaGGiEfJGUwE62TQYXIxdjwm0m.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">SEJA NOSSO PARCEIRO</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Junte-se à nossa rede de parceiros e ofereça soluções completas aos seus clientes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511915373813?text=Quero%20me%20tornar%20parceiro%20da%20Elleven."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Quero Ser Parceiro
                </Button>
              </a>
              <a
                href="https://wa.me/5511915373813?text=Quero%20saber%20mais%20sobre%20me%20tornar%20parceiro%20da%20Elleven."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="ghost" className="border-2 border-white/30 text-white">
                  Saiba Mais
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
