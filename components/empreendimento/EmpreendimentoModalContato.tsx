"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface EmpreendimentoModalContatoProps {
  nome: string
  showContact: boolean
  onClose: () => void
}

export default function EmpreendimentoModalContato({ 
  nome, 
  showContact, 
  onClose 
}: EmpreendimentoModalContatoProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário modal enviado:", formData)
    // Aqui você pode adicionar a lógica de envio do formulário
    onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <AnimatePresence>
      {showContact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tenho Interesse no {nome}</h3>
              <p className="text-gray-600">Preencha seus dados e entraremos em contato</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <Input 
                type="text" 
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Nome completo" 
                required 
                className="w-full" 
              />
              <Input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-mail" 
                required 
                className="w-full" 
              />
              <Input 
                type="tel" 
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder="Telefone" 
                required 
                className="w-full" 
              />

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="flex-1 bg-[#1A2D54] hover:bg-[#152444] text-white">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Enviar
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 