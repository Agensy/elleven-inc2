"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface EmpreendimentoContatoProps {
  nome: string
}

export default function EmpreendimentoContato({ nome }: EmpreendimentoContatoProps) {
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
    // Redirecionar para WhatsApp com mensagem específica
    const message = `Quero saber mais sobre o empreendimento ${nome}. Meus dados: Nome: ${formData.nome}, Email: ${formData.email}, Telefone: ${formData.telefone}${formData.mensagem ? `, Mensagem: ${formData.mensagem}` : ''}`
    const whatsappUrl = `https://wa.me/5511915373813?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-20 bg-[#192849]/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mb-6">FALE COM ESPECIALISTA</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Entre em contato conosco e saiba mais sobre este empreendimento exclusivo.
            </p>
          </motion.div>

          <motion.div {...fadeIn}>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <Input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="w-full h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="w-full h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <Input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="+55 11 91537-3813"
                      required
                      className="w-full h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem (opcional)</label>
                    <Textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre seu interesse..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#1A2D54] hover:bg-[#152444] text-white h-12 text-lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
