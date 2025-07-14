import { Empreendimento } from "@/lib/types/empreendimento"

// A estrutura deste arquivo deve ser mais simples e será convertida
// para a interface 'Empreendimento' completa no arquivo master.
// Portanto, não usamos a interface EmpreendimentoData aqui diretamente.

export const icaraiData = {
  slug: "icarai-parque-clube",
  nome: "Icaraí Parque Clube",
  slogan: "A natureza exuberante encontra o conforto de um clube completo",
  status: "Em Obra",
  tipo: "Residencial",
  localizacao: "Salto, SP",
  endereco: {
    rua: "Av. Marechal Deodoro",
    numero: "s/n",
    bairro: "Centro",
    cidade: "Salto",
    estado: "SP",
  },
  area: "55m² a 70m²",
  quartos: [2, 3],
  vagas: [1, 2],
  precoFormatado: "Consulte valores",
  entrega: "Novembro/2026",
  imagemDestaque: "/empreendimentos/icarai-parque-clube/fachadas/ICARAI_TORRES DO ICARAI - FACHADA.jpeg",
  imagem: "/empreendimentos/icarai/background.jpg",
  galeria: [
    "/empreendimentos/icarai-parque-clube/fachadas/ICARAI_TORRES DO ICARAI - FACHADA.jpeg",
  ],
  identidadeVisual: {
    logo: "/empreendimentos/icarai/logo.png",
    corPrimaria: "#6E8B3D", // Verde do logo
    corSecundaria: "#4A4A4A", // Cinza escuro
    imagemBackground: "/empreendimentos/icarai-parque-clube/background-icarai.png",
  },
  descricao:
    "Localizado em Salto, o Icaraí Parque Clube é um empreendimento grandioso com 408 unidades distribuídas em uma área de 55.000m². Oferece apartamentos de 2 e 3 dormitórios, com uma infraestrutura completa de clube e lazer, cercado por uma natureza exuberante, ideal para quem busca qualidade de vida e um investimento seguro.",
  diferenciais: [
    "Infraestrutura de clube",
    "Ampla área verde com 55.000m²",
    "Apartamentos de 2 e 3 dormitórios",
    "Segurança 24 horas",
    "Localização privilegiada em Salto",
    "Contato direto com a natureza",
  ],
  plantas: [], // O tipo correto aqui é uma lista de objetos 'Planta'
  especificacoes: {
    unidades: "408",
    andares: "Consulte",
    elevadores: "Consulte",
    entrega: "Novembro/2026",
  },
  pontos_interesse: [
    {
      nome: "Centro de Salto",
      distancia: "5 min",
      tipo: "comercio",
    },
    {
      nome: "Parque Rocha Moutonnée",
      distancia: "10 min",
      tipo: "parque",
    },
  ],
} 