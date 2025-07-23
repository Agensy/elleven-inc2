"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Enviar via WhatsApp
    const message = `Contato via site - Nome: ${formData.nome}, Email: ${formData.email}, Telefone: ${formData.telefone}, Assunto: ${formData.assunto}, Mensagem: ${formData.mensagem}`
    const whatsappUrl = `https://wa.me/5511915373813?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#1A2D54] to-[#2A4A7A] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="whileInView"
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Estamos prontos para transformar seus sonhos imobiliários em realidade. 
              Fale com nossos especialistas e descubra as melhores oportunidades de investimento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1A2D54]">Solicite Informações</CardTitle>
                  <p className="text-gray-600">Preencha o formulário e entraremos em contato em breve</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                        <Input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-[#1A2D54] focus:ring-[#1A2D54]"
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                        <Input
                          type="tel"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-[#1A2D54] focus:ring-[#1A2D54]"
                          placeholder="+55 11 91537-3813"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-[#1A2D54] focus:ring-[#1A2D54]"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                      <select
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2D54] focus:border-[#1A2D54]"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="empreendimento">Informações sobre Empreendimento</option>
                        <option value="investimento">Oportunidades de Investimento</option>
                        <option value="visita">Agendar Visita</option>
                        <option value="parceria">Parcerias</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                      <Textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-[#1A2D54] focus:ring-[#1A2D54] min-h-[120px]"
                        placeholder="Conte-nos como podemos ajudá-lo..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#1A2D54] hover:bg-[#152444] text-white py-3"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Contato Direto */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1A2D54] mb-6">Contato Direto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1A2D54] rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">+55 11 91537-3813</div>
                        <div className="text-sm text-gray-600">Plantão de Vendas</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1A2D54] rounded-full flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">+55 11 91537-3813</div>
                        <div className="text-sm text-gray-600">WhatsApp</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1A2D54] rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">sac@ellevenengenharia.com.br</div>
                        <div className="text-sm text-gray-600">E-mail principal</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Localização */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1A2D54] mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Nosso Escritório
                  </h3>
                  <div className="text-gray-700 mb-4">
                    <p>Avenida Cauaxi, 293 - Sala 1402</p>
                    <p>Alphaville, São Paulo - SP</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#1A2D54] mb-4">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">Horário de Funcionamento</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábados: 9h às 14h</p>
                    <p>Domingos: Fechado</p>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="shadow-lg bg-gradient-to-r from-[#1A2D54] to-[#2A4A7A] text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Precisa de Atendimento Urgente?</h3>
                  <p className="mb-6">Nossa equipe está sempre disponível para atendê-lo</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="outline" 
                      className="bg-white text-[#1A2D54] hover:bg-gray-100 border-white"
                      onClick={() => window.open('tel:+5511915373813', '_self')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Ligar Agora
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-white text-white hover:bg-white/10"
                      onClick={() => window.open('https://wa.me/5511915373813?text=Quero%20saber%20mais%20sobre%20os%20empreendimentos', '_blank')}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
