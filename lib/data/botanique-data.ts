import type { EmpreendimentoData } from "@/lib/types/empreendimento"

export const botaniqueData: EmpreendimentoData = {
  // Identificação
  id: "botanique",
  slug: "botanique",
  nome: "Botanique Condomínio Residencial",
  subtitulo: "Viva ao lado de um bosque privativo de 4.500 m²",
  slogan: "O privilégio de morar junto a um bosque exclusivo",

  // SEO
  seo: {
    title: "Botanique Cotia - Condomínio com bosque privativo e lazer completo",
    description:
      "Conheça o Botanique em Cotia, apartamentos de 1 a 3 dormitórios e duplex, com bosque de 4.500 m², segurança 24h e lazer completo. Agende sua visita!",
    keywords: "botanique, apartamentos em cotia, condomínio com bosque, apartamentos com varanda, duplex cotia",
    ogTitle: "Botanique - Viva ao lado de um bosque exclusivo em Cotia",
    ogDescription:
      "Apartamentos de 1 a 3 dormitórios e coberturas duplex em um condomínio fechado com bosque privativo. Segurança e lazer para sua família.",
    ogImage: "/empreendimentos/botanique/1-vitrine-botanique.webp",
  },

  // Hero Section
  hero: {
    backgroundImage: "/empreendimentos/botanique/1-vitrine-botanique.webp",
    logo: "/empreendimentos/botanique/logo-botanique.png",
    titulo: "O privilégio de morar junto a um bosque exclusivo",
    subtitulo: "Condomínio residencial com 4.500 m² de área verde privativa em Cotia",
    ctas: [
      { texto: "Saiba Mais", tipo: "primary", acao: "scroll-sobre" },
      { texto: "Agende uma Visita", tipo: "secondary", acao: "modal-contato" },
      { texto: "Tour Virtual", tipo: "outline", acao: "tour-virtual" },
    ],
  },

  // Seção Sobre
  sobre: {
    titulo: "Conheça o Botanique",
    descricao:
      "O Botanique é um condomínio pensado para quem valoriza viver bem, em harmonia com a natureza e com o máximo de conforto. Localizado em Cotia, o projeto integra um bosque particular de 4.500 m², proporcionando tranquilidade e bem-estar a poucos minutos dos principais centros urbanos.\n\nSão apartamentos de 1 a 3 dormitórios e coberturas duplex com espaços amplos e varandas que convidam para momentos únicos. Tudo isso em um ambiente seguro, com portaria 24 horas, lazer completo e a conveniência de estar próximo a escolas, hospitais, shoppings, academias e muito mais.",
    imagem: "/empreendimentos/botanique/fachada-principal.webp",
    destaques: [
      { numero: "150", texto: "Unidades" },
      { numero: "5", texto: "Torres" },
      { numero: "4.500m²", texto: "Área Verde" },
      { numero: "24h", texto: "Segurança" },
    ],
  },

  // Informações (Sistema de Abas)
  informacoes: {
    titulo: "Informações do Empreendimento",
    subtitulo: "Conheça todos os detalhes que fazem do Botanique um lugar especial para sua família.",
    abas: [
      {
        id: "localizacao",
        titulo: "Localização",
        icone: "MapPin",
        conteudo: {
          titulo: "Localização Privilegiada",
          descricao:
            "Estr. Ribeirão, 550 - Chácara Roselândia, Cotia - SP. Fácil acesso à Rodovia Raposo Tavares e aos centros comerciais da região.",
          imagem: "/empreendimentos/botanique/vista-aerea-fachada.webp",
          lista: [
            "Rodovia Raposo Tavares - Acesso direto",
            "Shopping Iguatemi Esplanada - 8km",
            "Shopping Granja Vianna - 6km",
            "Hospital Albert Einstein - 12km",
            "Colégio Rio Branco - 5km",
            "Escolas da região - 2-3km",
            "Supermercados - 1-2km",
            "Farmácias - 1km",
          ],
        },
      },
      {
        id: "lazer",
        titulo: "Lazer",
        icone: "Waves",
        conteudo: {
          titulo: "Lazer e Comodidades",
          descricao: "Infraestrutura completa de lazer para toda a família, com piscina, playground e áreas gourmet.",
          imagem: "/empreendimentos/botanique/galeria/piscina.webp",
          lista: [
            "Bosque privativo de 4.500 m²",
            "Piscina adulto e infantil",
            "Salão de festas",
            "Playground",
            "Espaço grill",
            "Varandas gourmet",
          ],
        },
      },
      {
        id: "seguranca",
        titulo: "Segurança",
        icone: "Shield",
        conteudo: {
          titulo: "Segurança e Exclusividade",
          descricao: "Condomínio totalmente fechado com sistema completo de segurança para sua tranquilidade.",
          imagem: "/empreendimentos/botanique/fachada-principal.webp",
          lista: [
            "Portaria e vigilância 24 horas",
            "Acesso controlado",
            "Condomínio fechado com muros e monitoramento",
          ],
        },
      },
      {
        id: "investimento",
        titulo: "Investimento",
        icone: "Building",
        conteudo: {
          titulo: "Investimento Valorizado",
          descricao:
            "Projeto arquitetônico de qualidade e paisagismo integrado. Valorização constante na região de Cotia.",
          imagem: "/empreendimentos/botanique/galeria/vista-aerea.webp",
          lista: [
            "Região em constante crescimento",
            "Potencial de valorização",
            "Novos empreendimentos na Raposo Tavares",
            "Ideal para viver ou investir",
          ],
          destaque: {
            titulo: "VGV do Projeto",
            valor: "R$ 19.177.000,00",
          },
        },
      },
    ],
  },

  // Galeria
  galeria: {
    titulo: "Galeria do Empreendimento",
    imagens: [
      {
        src: "/empreendimentos/botanique/galeria/piscina.webp",
        alt: "Piscina adulto e infantil com deck e paisagismo tropical",
        titulo: "Piscina",
      },
      {
        src: "/empreendimentos/botanique/galeria/espaco-grill.webp",
        alt: "Espaço grill equipado com churrasqueira e área gourmet",
        titulo: "Espaço Grill",
      },
      {
        src: "/empreendimentos/botanique/galeria/salao-de-festas.webp",
        alt: "Salão de festas moderno com cozinha integrada",
        titulo: "Salão de Festas",
      },
      {
        src: "/empreendimentos/botanique/galeria/playground.webp",
        alt: "Playground completo em área verde preservada",
        titulo: "Playground",
      },
      {
        src: "/empreendimentos/botanique/galeria/vista-aerea.webp",
        alt: "Vista aérea da implantação do condomínio",
        titulo: "Vista Aérea",
      },
      {
        src: "/empreendimentos/botanique/fachada-principal.webp",
        alt: "Fachada das torres residenciais",
        titulo: "Fachada",
      },
    ],
  },

  // Plantas/Ficha Técnica
  plantas: {
    titulo: "Ficha Técnica",
    especificacoes: [
      { label: "Área do terreno", valor: "10.500m²" },
      { label: "Área verde preservada", valor: "4.500m²" },
      { label: "Torres", valor: "5 torres de 5 andares" },
      { label: "Total de unidades", valor: "150 apartamentos" },
      { label: "Tipologias", valor: "1, 2 e 3 dorms + Duplex" },
      { label: "VGV", valor: "R$ 19.177.000,00" },
      { label: "Segurança", valor: "Portaria 24h" },
      { label: "Incorporação", valor: "Elleven Engenharia" },
    ],
    imagemPrincipal: "/empreendimentos/botanique/plantas/implantacao-torres.webp",
    tipologias: [
      {
        nome: "2 Dormitórios",
        area: "65m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        planta: "/empreendimentos/botanique/plantas/planta-2-dormi.webp",
        caracteristicas: ["Varanda gourmet", "Cozinha americana", "Living integrado"],
      },
      {
        nome: "3 Dormitórios",
        area: "85m²",
        quartos: 3,
        banheiros: 2,
        vagas: 1,
        planta: "/empreendimentos/botanique/plantas/planta-3-dormi.webp",
        caracteristicas: ["Suíte", "Varanda gourmet", "Cozinha americana"],
      },
      {
        nome: "3 Dormitórios - Variação 2",
        area: "88m²",
        quartos: 3,
        banheiros: 2,
        vagas: 1,
        planta: "/empreendimentos/botanique/plantas/planta-3-dormi-2.webp",
        caracteristicas: ["Suíte", "Varanda gourmet", "Layout otimizado"],
      },
      {
        nome: "Duplex 2 Dormitórios - Piso 1",
        area: "120m²",
        quartos: 2,
        banheiros: 2,
        vagas: 2,
        planta: "/empreendimentos/botanique/plantas/cobertura-duplex-1-piso.webp",
        caracteristicas: ["Piso térreo", "Sala ampla", "Cozinha gourmet"],
      },
      {
        nome: "Duplex 2 Dormitórios - Piso 2",
        area: "120m²",
        quartos: 2,
        banheiros: 2,
        vagas: 2,
        planta: "/empreendimentos/botanique/plantas/cobertura-duplex-2-piso.webp",
        caracteristicas: ["Terraço privativo", "2 suítes", "Vista panorâmica"],
      },
    ],
  },

  // Contato
  contato: {
    titulo: "Garanta sua unidade no Botanique",
    subtitulo: "Preencha abaixo e nosso consultor entrará em contato para apresentar todas as condições especiais.",
    formulario: {
      campos: [
        { nome: "nome", tipo: "text", label: "Nome Completo", placeholder: "Seu nome completo", obrigatorio: true },
        {
          nome: "telefone",
          tipo: "tel",
          label: "Telefone/WhatsApp",
          placeholder: "(11) 99999-9999",
          obrigatorio: true,
        },
        { nome: "email", tipo: "email", label: "E-mail", placeholder: "seu@email.com", obrigatorio: true },
        {
          nome: "mensagem",
          tipo: "textarea",
          label: "Mensagem (opcional)",
          placeholder: "Conte-nos sobre seu interesse...",
          obrigatorio: false,
        },
      ],
      botao: "Enviar e agendar visita",
      checkbox: "Aceito receber novidades por e-mail e WhatsApp",
    },
  },

  // Configurações visuais
  tema: {
    corPrimaria: "#1A2D54",
    corSecundaria: "#152444",
    corDestaque: "#192849",
    backgroundPattern: "/empreendimentos/botanique/background-pattern.png",
  },
}
