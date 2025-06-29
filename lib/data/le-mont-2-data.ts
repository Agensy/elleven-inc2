import type { Empreendimento } from "@/lib/types/empreendimento"

export const leMont2Data: Empreendimento = {
  id: 6, // Próximo ID sequencial
  slug: "le-mont-2",
  nome: "Le Mont 2",
  subtitulo: "CONDOMÍNIO RESIDENCIAL",
  slogan: "O equilíbrio perfeito entre conforto, segurança e qualidade de vida",
  
  localizacao: "Cotia, São Paulo - SP",
  bairro: "Jardim Isis",
  endereco: {
    rua: "Estrada Morro Grande",
    numero: "3502",
    bairro: "Jardim Isis",
    cidade: "Cotia",
    estado: "SP",
    cep: "06709-015"
  },
  coordenadas: { lat: -23.6037, lng: -46.9196 },
  
  tipo: "2 dormitórios",
  status: "Em Obras",
  entrega: "2025",
  area: "55m²",
  quartos: 2,
  banheiros: 2,
  vagas: 1,
  preco: 420000,
  precoFormatado: "A partir de R$ 420.000",
  
  descricao: "O Condomínio Le Mont 2 foi projetado com atenção aos mínimos detalhes, focado em oferecer qualidade de vida e bem-estar para sua família. Possui uma ampla área verde preservada e um ambiente que promove o contato com a natureza, além de segurança 24 horas em um espaço fechado e tranquilo. O empreendimento conta com infraestrutura de lazer completa: piscina adulto e infantil, quadra recreativa, salão de festas, playground e espaço grill. Localizado em Cotia, região em constante crescimento, próximo às principais rodovias como Raposo Tavares e Régis Bittencourt.",
  
  imagem: "/empreendimentos/le-mont-2/fachada-principal.webp",
  imagemDestaque: "/empreendimentos/le-mont-2/hero-background.webp",
  galeria: [
    "/empreendimentos/le-mont-2/galeria/entrada-fachada.webp",
    "/empreendimentos/le-mont-2/galeria/piscina.webp",
    "/empreendimentos/le-mont-2/galeria/salao-festas.webp",
    "/empreendimentos/le-mont-2/galeria/playground.webp",
    "/empreendimentos/le-mont-2/galeria/quadra-recreativa.webp",
    "/empreendimentos/le-mont-2/galeria/espaco-grill.webp",
    "/empreendimentos/le-mont-2/galeria/implantacao-geral.webp"
  ],
  
  identidadeVisual: {
    logo: "/empreendimentos/le-mont-2/logo-le-mont-2.png",
    corPrimaria: "#FF6B35",
    corSecundaria: "#2F4F4F",
    imagemBackground: "/empreendimentos/le-mont-2/hero-background.webp"
  },
  
  diferenciais: [
    "4 torres com 120 apartamentos",
    "Ampla área verde preservada",
    "Piscina adulto e infantil",
    "Quadra recreativa",
    "Salão de festas completo",
    "Playground equipado",
    "Espaço grill",
    "Portaria com segurança 24 horas",
    "Condomínio fechado com muros",
    "Próximo à Raposo Tavares",
    "Região em valorização"
  ],
  
  pontos_interesse: [
    { nome: "Rodovia Raposo Tavares", distancia: "2km", tipo: "transporte" },
    { nome: "Shopping Granja Viana", distancia: "8km", tipo: "comercio" },
    { nome: "Centro de Cotia", distancia: "3km", tipo: "comercio" },
    { nome: "Escolas da região", distancia: "1km", tipo: "educacao" },
    { nome: "Hospital Regional", distancia: "5km", tipo: "saude" },
    { nome: "Supermercados", distancia: "2km", tipo: "comercio" }
  ],
  
  plantas: [
    {
      id: 1,
      tipo: "1 Dormitório",
      area: "38m²",
      quartos: 1,
      banheiros: 1,
      vagas: 1,
      imagem: "/empreendimentos/le-mont-2/plantas/1-dormitorio.webp",
      preco: "A partir de R$ 320.000",
      descricao: "Apartamento compacto e funcional, ideal para jovens profissionais",
      destaque: false
    },
    {
      id: 2,
      tipo: "2 Dormitórios",
      area: "55m²",
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      imagem: "/empreendimentos/le-mont-2/plantas/2-dormitorios.webp",
      preco: "A partir de R$ 420.000",
      descricao: "Perfeito para casais e pequenas famílias",
      destaque: true
    },
    {
      id: 3,
      tipo: "3 Dormitórios",
      area: "70m²",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      imagem: "/empreendimentos/le-mont-2/plantas/3-dormitorios.webp",
      preco: "A partir de R$ 520.000",
      descricao: "Amplo espaço para famílias que valorizam conforto",
      destaque: false
    },
    {
      id: 4,
      tipo: "3 Dormitórios Duplex",
      area: "85m²",
      quartos: 3,
      banheiros: 3,
      vagas: 2,
      imagem: "/empreendimentos/le-mont-2/plantas/3-dormitorios-duplex.webp",
      preco: "A partir de R$ 620.000",
      descricao: "Cobertura duplex com área privativa e vista privilegiada",
      destaque: true
    }
  ],
  
  especificacoes: {
    unidades: "120 apartamentos",
    andares: "4 torres",
    elevadores: "2 elevadores por torre",
    entrega: "2025"
  },
  
  ativo: true,
  destacado: true,
  tags: ["cotia", "lazer completo", "segurança 24h", "área verde"],
  categoria: ["residencial", "condomínio clube"]
} 