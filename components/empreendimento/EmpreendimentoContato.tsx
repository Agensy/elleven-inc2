"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface EmpreendimentoContatoProps {
  nome: string
  status?: "Breve lançamento" | "Lançamento" | "Em Obra" | "Entregue"
}

export default function EmpreendimentoContato({ nome, status }: EmpreendimentoContatoProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
    // Aqui você pode adicionar a lógica de envio do formulário
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511915373813"
    const message = `Olá! Tenho interesse no empreendimento ${nome}. Gostaria de mais informações.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase text-gray-500">
              ATENDIMENTO ESPECIALIZADO
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mt-4 mb-6">
              FALE COM UM CONSULTOR
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {status === "Entregue" 
                ? "Deseja saber mais dos nossos lançamentos? Preencha o formulário e entraremos em contato."
                : <>Interessado no <span className="font-medium text-gray-900">{nome}</span>? Preencha o formulário e entraremos em contato.</>
              }
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Coluna da Esquerda - Informações de Contato */}
            <motion.div {...fadeIn} className="lg:col-span-1 space-y-8">
              {/* Central de Vendas */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wide">
                  Central de Vendas
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+5511915373813" 
                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#192849] transition-colors">
                      <Phone className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">+55 11 91537-3813</span>
                  </a>

                  <button 
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group w-full text-left"
                  >
                    <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Falar pelo Whatsapp</span>
                  </button>

                  <div className="flex items-center gap-3 p-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-gray-700 font-medium">sac@ellevenengenharia.com.br</span>
                  </div>
                </div>
              </div>

              {/* Consultor */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Consultor Responsável</p>
                <p className="font-medium text-gray-900">[nome do consultor]</p>
              </div>
            </motion.div>

            {/* Coluna da Direita - Formulário */}
            <motion.div {...fadeIn} className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo*
                      </label>
                      <Input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="h-12 border-gray-200 focus:border-[#192849] focus:ring-[#192849]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone*
                      </label>
                      <Input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        required
                        className="h-12 border-gray-200 focus:border-[#192849] focus:ring-[#192849]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail*
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="h-12 border-gray-200 focus:border-[#192849] focus:ring-[#192849]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre seu interesse..."
                      rows={4}
                      className="border-gray-200 focus:border-[#192849] focus:ring-[#192849] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#192849] hover:bg-[#152444] text-white h-12 font-medium"
                  >
                    Enviar mensagem
                  </Button>

                  <p className="text-xs text-gray-500 text-center pt-2">
                    Ao enviar, você concorda com nossa política de privacidade e termos de uso.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
