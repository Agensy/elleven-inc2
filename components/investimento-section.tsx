"use client"

import { motion, useInView } from "framer-motion"
import { TrendingUp, ArrowRight, Target, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { staggerChildren: 0.1 },
}

export default function InvestimentoSection() {
  const textBlockRef = useRef(null)
  const imageBlockRef = useRef(null)
  const isInViewTextBlock = useInView(textBlockRef, { once: true })
  const isInViewImageBlock = useInView(imageBlockRef, { once: true })

  return (
    <section className="py-20 bg-[#1A2D54] text-white">
      {" "}
      {/* Fundo azul escuro principal e texto padrão branco */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bloco de Texto */}
          <motion.div
            ref={textBlockRef}
            initial="initial"
            animate={isInViewTextBlock ? "animate" : "initial"}
            variants={fadeInLeft}
            transition={fadeInLeft.transition}
          >
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight uppercase text-white" // Título branco
            >
              A rentabilidade
              <br />
              certa para o seu
              <br />
              investimento
            </h2>

            <p className="mb-10 leading-relaxed text-gray-300" style={{ fontSize: "0.875rem" }}>
              {" "}
              {/* Parágrafo cinza claro */}
              No mercado imobiliário, você encontra a segurança e rentabilidade que seu patrimônio merece. Invista em
              empreendimentos sólidos com potencial de valorização garantido.
            </p>

            <motion.div
              initial="initial"
              animate={isInViewTextBlock ? "animate" : "initial"}
              variants={staggerContainer}
              transition={staggerContainer.transition}
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
                  animate={isInViewTextBlock ? "animate" : "initial"}
                  variants={fadeInUp}
                  transition={fadeInUp.transition}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#2A3D64] hover:bg-[#3A4D74] transition-all duration-300 cursor-pointer group" // Fundo dos cards de feature ajustado para azul mais claro
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    {typeof item.icon === "string" ? (
                      <div className="text-white font-bold text-sm">%</div> // Texto do ícone branco
                    ) : (
                      <item.icon className="h-6 w-6 text-white" /> // Ícone branco
                    )}
                  </div>
                  <div>
                    <div
                      className="font-bold text-white group-hover:text-white transition-colors duration-300" // Título do item branco
                      style={{ fontSize: "1rem" }}
                    >
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-300">{item.subtitle}</div> {/* Subtítulo cinza claro */}
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
                className="border border-white text-white hover:border-white hover:bg-white/5 bg-transparent" // Borda branca sólida, fundo transparente, texto branco
              >
                Simular Investimento
              </Button>
            </div>
          </motion.div>

          {/* Bloco de Imagem */}
          <motion.div
            ref={imageBlockRef}
            initial="initial"
            animate={isInViewImageBlock ? "animate" : "initial"}
            variants={fadeInRight}
            transition={fadeInRight.transition}
            className="relative order-first lg:order-last"
          >
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homem-terno-investimento-5kKFFwfh6r3Cy9nptvdULYrDGlDVkP.png"
                alt="Especialista em investimentos imobiliários"
                className="w-full h-auto"
              />
              {/* Elementos decorativos melhorados */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>{" "}
              {/* Círculos decorativos brancos */}
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-lg animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Cards flutuantes com melhor posicionamento */}
            <motion.div
              initial="initial"
              animate={isInViewImageBlock ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ delay: 0.3, ...fadeInUp.transition }}
              className="absolute bottom-4 left-0 lg:-bottom-6 lg:-left-6 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-secondary mb-1">12%</div>{" "}
                {/* Cor secundária (laranja) para destaque */}
                <div className="text-xs lg:text-sm text-gray-700">Rentabilidade anual</div>{" "}
                {/* Texto cinza escuro para contraste no card branco */}
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate={isInViewImageBlock ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ delay: 0.5, ...fadeInUp.transition }}
              className="absolute top-4 right-0 lg:-top-6 lg:-right-6 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-3 lg:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="font-bold text-secondary mb-1" style={{ fontSize: "1rem" }}>
                  R$ 2M+
                </div>
                <div className="text-xs text-gray-700">Investimentos</div>{" "}
                {/* Texto cinza escuro para contraste no card branco */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
