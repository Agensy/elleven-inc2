"use client"

import { motion } from "framer-motion"

export default function ParceirosHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A2D54] via-[#2A4A7A] to-[#1A2D54]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">NOSSOS PARCEIROS</h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Soluções completas através de parcerias estratégicas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Conheça Nossas Parcerias
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Fale Conosco
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
