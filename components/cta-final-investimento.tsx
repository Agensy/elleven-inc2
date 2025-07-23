"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export default function CtaFinalInvestimento() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-xl opacity-30"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-lg opacity-25"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              transformar
            </span>{" "}
            seu futuro financeiro?
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Entre em contato e conheça nossos planos especiais para investidores como você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 group"
              onClick={() => window.open('https://wa.me/5511915373813?text=Quero%20saber%20mais%20sobre%20como%20investir', '_blank')}
            >
              Quero investir agora
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => window.open('https://wa.me/5511915373813?text=Quero%20saber%20mais%20sobre%20como%20investir', '_blank')}
            >
              Falar com especialista
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 cursor-pointer"
              onClick={() => window.open('tel:+5511915373813', '_self')}
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Ligue agora</h3>
              <p className="text-gray-300 text-sm mb-3">Fale diretamente com nossos especialistas</p>
              <p className="text-white font-medium">+55 11 91537-3813</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 cursor-pointer"
              onClick={() => window.open('mailto:sac@ellevenengenharia.com.br', '_self')}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Envie um e-mail</h3>
              <p className="text-gray-300 text-sm mb-3">Receba uma proposta personalizada</p>
              <p className="text-white font-medium">sac@ellevenengenharia.com.br</p>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Atendimento personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Sem taxas ocultas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Suporte completo</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
