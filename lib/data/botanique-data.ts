import type { Empreendimento } from "@/lib/types/empreendimento"

export const botaniqueData: Empreendimento = {
  // Identificação básica
  id: 2,
  slug: "botanique",
  nome: "BOTANIQUE",
  subtitulo: "CONDOMÍNIO RESIDENCIAL",
  slogan: "Viva em harmonia com a natureza",

  // Localização
  localizacao: "Jardim Ísis, Cotia - SP",
  bairro: "Jardim Ísis",
  coordenadas: {
    lat: -23.6024,
    lng: -46.9292,
  },

  // Características básicas
  tipo: "2 e 3 dormitórios",
  status: "Entregues",
  area: "60 a 120m²",
  quartos: 3,
  banheiros: 2,
  vagas: 2,
  preco: 650000,
  precoFormatado: "A partir de R$ 650.000",
  entrega: "2020",

  // Descrição
  descricao:
    "O Botanique é um condomínio residencial que oferece o equilíbrio perfeito entre conforto urbano e contato com a natureza. Localizado em Cotia, proporciona qualidade de vida em um ambiente tranquilo e seguro.",

  // Imagem principal
  imagem: "/empreendimentos/botanique/1 - VITRINE_BOTANIQUE.jpg",

  // Galeria de imagens
  galeria: [
    "/empreendimentos/botanique/BOTANIQUE_1_FACHADA.jpg",
    "/empreendimentos/botanique/BOTANIQUE_2_VISTA AÉREA FACHADA .jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_3_SALÃO DE FESTAS.jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_4_ESPAÇO GRILL.jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_5_PLAYGROUND.jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_6_VISTA AÉREA.jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_7_IMPLANTAÇÃO.jpg",
    "/empreendimentos/botanique/galeria/BOTANIQUE_8_PISCINA.jpg",
  ],

  // Identidade visual
  identidadeVisual: {
    logo: "/empreendimentos/logos/logo-botanique.png",
    corPrimaria: "#6B8E23", // Verde oliva natural
    corSecundaria: "#8FBC8F", // Verde claro
    imagemBackground: "/empreendimentos/botanique/BOTANIQUE_2_VISTA AÉREA FACHADA .jpg",
  },

  // Plantas
  plantas: [
    {
      id: 1,
      tipo: "Apartamento 2 Dormitórios",
      area: "60m²",
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      imagem: "/empreendimentos/botanique/plantas/Planta 2 dormi.jpg",
      preco: "A partir de R$ 550.000",
      descricao: "Apartamento funcional com 2 dormitórios, sala integrada e varanda",
      destaque: false,
    },
    {
      id: 2,
      tipo: "Apartamento 3 Dormitórios",
      area: "85m²",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      imagem: "/empreendimentos/botanique/plantas/Planta 3 dormi.jpg",
      preco: "A partir de R$ 650.000",
      descricao: "Apartamento espaçoso com 3 dormitórios, suíte e varanda gourmet",
      destaque: true,
    },
    {
      id: 3,
      tipo: "Apartamento 3 Dormitórios - Tipo 2",
      area: "90m²",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      imagem: "/empreendimentos/botanique/plantas/Planta 3 dormi 2.jpg",
      preco: "A partir de R$ 680.000",
      descricao: "Apartamento premium com 3 dormitórios e layout otimizado",
      destaque: false,
    },
    {
      id: 4,
      tipo: "Cobertura Duplex - 1º Piso",
      area: "120m²",
      quartos: 3,
      banheiros: 3,
      vagas: 2,
      imagem: "/empreendimentos/botanique/plantas/cobertura duplex 1 piso.jpg",
      preco: "A partir de R$ 850.000",
      descricao: "Cobertura duplex com terraço privativo - Piso inferior",
      destaque: true,
    },
    {
      id: 5,
      tipo: "Cobertura Duplex - 2º Piso",
      area: "80m²",
      quartos: 1,
      banheiros: 1,
      vagas: 0,
      imagem: "/empreendimentos/botanique/plantas/cobertura duplex 2 piso.jpg",
      preco: "Área privativa da cobertura",
      descricao: "Cobertura duplex com terraço privativo - Piso superior",
      destaque: false,
    },
  ],

  // Especificações técnicas
  especificacoes: {
    unidades: "120",
    andares: "8",
    elevadores: "2",
    entrega: "2020",
  },



  // Pontos de interesse próximos
  pontos_interesse: [
    {
      nome: "Shopping Granja Vianna",
      distancia: "5 km",
      tipo: "shopping",
    },
    {
      nome: "Colégio Rio Branco",
      distancia: "3 km",
      tipo: "educacao",
    },
    {
      nome: "Hospital Albert Einstein",
      distancia: "8 km",
      tipo: "saude",
    },
    {
      nome: "Rodoanel Mário Covas",
      distancia: "2 km",
      tipo: "transporte",
    },
  ],

  // Diferenciais do empreendimento
  diferenciais: [
    "Localização privilegiada em Cotia",
    "Área verde preservada",
    "Segurança 24 horas",
    "Lazer completo para toda família",
    "Fácil acesso ao Rodoanel",
    "Próximo a escolas e comércios",
  ],

  // Configurações de exibição
  destacado: true,
  ativo: true,
  tags: ["natureza", "familia", "cotia", "entregues"],
  categoria: ["residencial", "apartamento"],
}
