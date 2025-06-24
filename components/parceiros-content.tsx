"use client"

import { motion } from "framer-motion"
import { CheckCircle, Globe, Users, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function ParceirosContent() {
  const otherPartners = [
    {
      name: "Banco do Brasil",
      logo: "/parceiros/banco-do-brasil.png",
      description: "Soluções financeiras e crédito imobiliário para seus projetos",
      services: ["Financiamento Imobiliário", "Crédito Empresarial", "Conta Corrente PJ"],
    },
    {
      name: "Safra",
      logo: "/parceiros/safra.png",
      description: "Banking privado e soluções de investimento personalizadas",
      services: ["Private Banking", "Gestão de Patrimônio", "Consultoria Financeira"],
    },
    {
      name: "Stuchi Imóveis",
      logo: "/parceiros/stuchi-imoveis.png",
      description: "Corretagem especializada em imóveis de alto padrão",
      services: ["Vendas Exclusivas", "Locação Premium", "Consultoria Imobiliária"],
    },
  ]

  return (
    <div className="bg-gray-50">
      {/* Seção 1: Vitrine Kabanna */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1A2D54] to-[#2A4A7A] p-2">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/parceiros/kabanna-vitrine.jpeg"
                  alt="Kabanna Real Estate - Invista com inteligência nos EUA"
                  width={1200}
                  height={600}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">VITRINE KABANNA</h2>
                  <p className="text-xl md:text-2xl text-white/90">Invista com inteligência nos EUA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção 2: Headline + Cadastro Kabanna */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Headline Sub-headline da Kabanna */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
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
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
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

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Quero Investir nos EUA
                  </button>
                </form>

                <div className="border-t border-white/20 pt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <span className="text-white/90">contato@kabanna.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span className="text-white/90">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-white/90">Pittsburgh, PA - USA</span>
                  </div>
                </div>
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
              className="bg-gray-50 rounded-3xl p-8 shadow-lg"
            >
              {/* Parceiros 1, 2, 3 */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {otherPartners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={50}
                          height={35}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-[#1A2D54] mb-2">{partner.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Área expandida para detalhes dos parceiros */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-[#1A2D54] mb-4">REDE DE PARCEIROS ESTRATÉGICOS</h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Uma rede sólida de parceiros financeiros e imobiliários para oferecer soluções completas e
                    personalizadas para cada projeto.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {otherPartners.map((partner, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="font-bold text-[#1A2D54] text-lg">{partner.name}</h4>
                      <div className="space-y-2">
                        {partner.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1A2D54] to-[#2A4A7A]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Users className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">SEJA NOSSO PARCEIRO</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Junte-se à nossa rede de parceiros e ofereça soluções completas aos seus clientes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Quero Ser Parceiro
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
