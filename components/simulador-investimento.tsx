"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function SimuladorInvestimento() {
  const [valorInvestimento, setValorInvestimento] = useState([300000])
  const [tempoInvestimento, setTempoInvestimento] = useState([10])
  const [rendimentoMensal, setRendimentoMensal] = useState(0)
  const [valorFinal, setValorFinal] = useState(0)

  // Cálculo simplificado de rentabilidade
  const calcularRentabilidade = () => {
    const valor = valorInvestimento[0]
    const anos = tempoInvestimento[0]
    const rentabilidadeAnual = 0.12 // 12% ao ano
    const aluguelMensal = valor * 0.006 // 0.6% ao mês de aluguel
    const valorizacao = valor * Math.pow(1 + rentabilidadeAnual, anos)

    setRendimentoMensal(aluguelMensal)
    setValorFinal(valorizacao)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 text-orange-600 text-sm font-medium mb-6">
            <Calculator className="h-4 w-4" />
            Simulador de Investimento
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simule seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              investimento
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra o potencial de rentabilidade do seu investimento imobiliário
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Simulador */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Configure seu investimento</h3>

              <div className="space-y-8">
                {/* Valor do Investimento */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold text-gray-700">
                    Valor do Investimento: R$ {valorInvestimento[0].toLocaleString("pt-BR")}
                  </Label>
                  <Slider
                    value={valorInvestimento}
                    onValueChange={setValorInvestimento}
                    max={1000000}
                    min={100000}
                    step={10000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>R$ 100.000</span>
                    <span>R$ 1.000.000</span>
                  </div>
                </div>

                {/* Tempo de Investimento */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold text-gray-700">
                    Tempo de Investimento: {tempoInvestimento[0]} anos
                  </Label>
                  <Slider
                    value={tempoInvestimento}
                    onValueChange={setTempoInvestimento}
                    max={30}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1 ano</span>
                    <span>30 anos</span>
                  </div>
                </div>

                {/* Botão Calcular */}
                <Button
                  onClick={calcularRentabilidade}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular Rentabilidade
                </Button>
              </div>
            </motion.div>

            {/* Resultados */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Projeção de Rentabilidade</h3>

              {/* Cards de Resultado */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="h-6 w-6" />
                    <span className="font-semibold">Renda Mensal Estimada</span>
                  </div>
                  <div className="text-3xl font-bold">
                    R$ {rendimentoMensal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </div>
                  <div className="text-green-100 text-sm mt-1">Baseado em 0,6% do valor do imóvel</div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="h-6 w-6" />
                    <span className="font-semibold">Valor Estimado em {tempoInvestimento[0]} anos</span>
                  </div>
                  <div className="text-3xl font-bold">
                    R$ {valorFinal.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-blue-100 text-sm mt-1">Considerando 12% de valorização anual</div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Calculator className="h-6 w-6" />
                    <span className="font-semibold">Retorno Total</span>
                  </div>
                  <div className="text-3xl font-bold">
                    {valorFinal > 0
                      ? `${(((valorFinal - valorInvestimento[0]) / valorInvestimento[0]) * 100).toFixed(1)}%`
                      : "0%"}
                  </div>
                  <div className="text-orange-100 text-sm mt-1">Valorização + renda de aluguel</div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-gray-100 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  * Os valores apresentados são estimativas baseadas em médias históricas do mercado imobiliário. A
                  rentabilidade real pode variar conforme localização, tipo de imóvel e condições de mercado.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
