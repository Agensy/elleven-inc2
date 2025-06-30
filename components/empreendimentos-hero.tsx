"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, TrendingUp, Users } from "lucide-react"

export default function EmpreendimentosHero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const stats = [
    {
      icon: Building2,
      number: "15+",
      label: "Empreendimentos",
      description: "Projetos exclusivos",
    },
    {
      icon: MapPin,
      number: "8",
      label: "Localizações",
      description: "Regiões nobres",
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Satisfação",
      description: "Clientes satisfeitos",
    },
    {
      icon: Users,
      number: "500+",
      label: "Famílias",
      description: "Realizaram o sonho",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#192849] via-[#2a3f5f] to-[#1a2332]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        {...floatingAnimation}
        className="absolute top-1/4 left-10 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-60"
      />
      <motion.div
        {...floatingAnimation}
        transition={{ delay: 2, duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/3 right-16 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-40"
      />
      <motion.div
        {...floatingAnimation}
        transition={{ delay: 4, duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-50"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Building2 className="h-5 w-5 text-orange-400" />
            <span className="text-white font-medium">Portfólio Exclusivo</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Nossos{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Empreendimentos
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Descubra projetos únicos que combinam arquitetura inovadora, localização privilegiada e acabamentos de alto
            padrão para criar o lar dos seus sonhos.
          </motion.p>

          {/* Stats Grid */}
          <motion.div variants={fadeIn} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center group hover:bg-white/15 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-orange-400 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={fadeIn} className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm">Explore nossos projetos</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="w-1 h-3 bg-gradient-to-b from-orange-400 to-transparent rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  )
}
