"use client"

import { motion } from "framer-motion"
import { TrendingUp, ArrowRight, Target, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1 },
  viewport: { once: true },
}

export default function InvestimentoSection() {
  return (
    <section
      className="py-20 text-white relative overflow-hidden"
      style={{
        backgroundImage: "url(/backgrounds/rentabilidade-certa.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay para melhorar legibilidade do texto */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Bloco de Texto */}
          <motion.div initial="initial" whileInView="whileInView" variants={fadeInLeft} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight uppercase text-white">
              A rentabilidade
              <br />
              certa para o seu
              <br />
              investimento
            </h2>

            <p className="mb-10 leading-relaxed text-gray-300" style={{ fontSize: "0.875rem" }}>
              No mercado imobiliário, você encontra a segurança e rentabilidade que seu patrimônio merece. Invista em
              empreendimentos sólidos com potencial de valorização garantido.
            </p>

            <motion.div
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
            >
              {[
                { icon: TrendingUp, title: "Valorização", subtitle: "Constante" },
                { icon: DollarSign, title: "Renda", subtitle: "Passiva" },
                { icon: Target, title: "Segurança", subtitle: "Garantida" },
                { icon: "percent", title: "Rentabilidade", subtitle: "Acima da média" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  whileInView="whileInView"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#2A3D64] hover:bg-[#3A4D74] transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    {typeof item.icon === "string" ? (
                      <div className="text-white font-bold text-sm">%</div>
                    ) : (
                      <item.icon className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <div>
                    <div
                      className="font-bold text-white group-hover:text-white transition-colors duration-300"
                      style={{ fontSize: "1rem" }}
                    >
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-300">{item.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 shadow-glow-sm group text-white">
                Quero Investir
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                className="border border-white text-white hover:border-white hover:bg-white/5 bg-transparent"
              >
                Simular Investimento
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
