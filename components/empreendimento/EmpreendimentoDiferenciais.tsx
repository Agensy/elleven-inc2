"use client"

import { motion } from "framer-motion"
import { 
  Check, 
  Home, 
  Wifi, 
  Shield, 
  Thermometer, 
  Wind, 
  Camera, 
  Key, 
  Building, 
  Tv, 
  MapPin, 
  Train, 
  Palette, 
  Award, 
  TrendingUp, 
  DollarSign,
  Users,
  Zap,
  Sun,
  Car,
  Trees,
  Dumbbell,
  Utensils,
  Baby,
  Music,
  Waves
} from "lucide-react"

interface EmpreendimentoDiferenciaisProps {
  nome: string
  diferenciais: string[]
  corPrimaria?: string
}

export default function EmpreendimentoDiferenciais({ 
  nome, 
  diferenciais, 
  corPrimaria = "#192849" 
}: EmpreendimentoDiferenciaisProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true },
  }

  const itemVariant = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  }

  // Função para mapear diferencial para ícone apropriado
  const getIconForDifferential = (diferencial: string) => {
    const text = diferencial.toLowerCase()
    
    // Mapeamento baseado em palavras-chave
    if (text.includes('studio') || text.includes('apartamento') || text.includes('dormitório')) {
      return Home
    }
    if (text.includes('inteligente') || text.includes('smart') || text.includes('tecnologia')) {
      return Wifi
    }
    if (text.includes('segurança') || text.includes('portaria') || text.includes('monitoramento') || text.includes('biométrico')) {
      return Shield
    }
    if (text.includes('aquecimento') || text.includes('térmico')) {
      return Thermometer
    }
    if (text.includes('ar condicionado') || text.includes('ventilação')) {
      return Wind
    }
    if (text.includes('acesso') || text.includes('fechadura') || text.includes('entrada')) {
      return Key
    }
    if (text.includes('rooftop') || text.includes('cobertura') || text.includes('terraço')) {
      return Building
    }
    if (text.includes('tela') || text.includes('led') || text.includes('tv')) {
      return Tv
    }
    if (text.includes('localização') || text.includes('próximo') || text.includes('distância')) {
      return MapPin
    }
    if (text.includes('metrô') || text.includes('estação') || text.includes('transporte')) {
      return Train
    }
    if (text.includes('design') || text.includes('arquitetura') || text.includes('contemporâneo')) {
      return Palette
    }
    if (text.includes('premium') || text.includes('alto padrão') || text.includes('luxo') || text.includes('acabamento')) {
      return Award
    }
    if (text.includes('valorização') || text.includes('investimento') || text.includes('potencial')) {
      return TrendingUp
    }
    if (text.includes('locação') || text.includes('renda') || text.includes('revenda')) {
      return DollarSign
    }
    if (text.includes('piscina') || text.includes('aquática')) {
      return Waves
    }
    if (text.includes('academia') || text.includes('fitness')) {
      return Dumbbell
    }
    if (text.includes('playground') || text.includes('brinquedoteca') || text.includes('criança')) {
      return Baby
    }
    if (text.includes('churrasqueira') || text.includes('gourmet') || text.includes('cozinha')) {
      return Utensils
    }
    if (text.includes('salão') || text.includes('festa') || text.includes('evento')) {
      return Music
    }
    if (text.includes('área verde') || text.includes('bosque') || text.includes('natureza')) {
      return Trees
    }
    if (text.includes('vaga') || text.includes('garagem') || text.includes('estacionamento')) {
      return Car
    }
    if (text.includes('lazer') || text.includes('clube') || text.includes('diversão')) {
      return Users
    }
    if (text.includes('energia') || text.includes('elétrico') || text.includes('automação')) {
      return Zap
    }
    if (text.includes('vista') || text.includes('panorâmica') || text.includes('deck')) {
      return Sun
    }
    
    // Ícone padrão
    return Check
  }

  if (!diferenciais || diferenciais.length === 0) {
    return null
  }

  // Limita aos 6 principais diferenciais
  const principaisDiferenciais = diferenciais.slice(0, 6)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: corPrimaria }}>
              CARACTERÍSTICAS EXCLUSIVAS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#192849] mt-4 mb-6">
              PRINCIPAIS DIFERENCIAIS
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça as características únicas que fazem deste empreendimento uma escolha especial
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {principaisDiferenciais.map((diferencial, index) => {
              const IconComponent = getIconForDifferential(diferencial)
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariant}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: `${corPrimaria}15` }}
                  >
                    <IconComponent 
                      className="w-5 h-5" 
                      style={{ color: corPrimaria }}
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium leading-relaxed">
                      {diferencial}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 