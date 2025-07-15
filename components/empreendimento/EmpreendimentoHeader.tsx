import type React from "react"

interface EmpreendimentoHeaderProps {
  data: {
    nome: string
    endereco?: {
      rua?: string
      numero?: string
      bairro?: string
      cidade?: string
      estado?: string
    }
    imagens?: string[]
  }
}

const EmpreendimentoHeader: React.FC<EmpreendimentoHeaderProps> = ({ data }) => {
  const rua = data.endereco?.rua ?? ""
  const numero = data.endereco?.numero ?? ""
  const bairro = data.endereco?.bairro ?? ""
  const cidade = data.endereco?.cidade ?? ""
  const estado = data.endereco?.estado ?? ""

  return (
    <header>
      <h1>{data.nome}</h1>
      <p>
        {rua}, {numero} - {bairro}, {cidade} - {estado}
      </p>
      {data.imagens && data.imagens.length > 0 && (
        <img src={data.imagens[0] || "/placeholder.svg"} alt={`Imagem de ${data.nome}`} />
      )}
    </header>
  )
}

export default EmpreendimentoHeader
