import type { EmpreendimentoData } from "@/lib/types/empreendimento"

export const grandClubCotiaData: EmpreendimentoData = {
  // Identificação
  id: "grand-club-cotia",
  slug: "grand-club-cotia",
  nome: "Grand Club Cotia",
  subtitulo: "EM OBRAS",
  slogan: "Conforto, lazer e exclusividade em um só lugar",

  // SEO
  seo: {
    title: "Grand Club Cotia - Lazer completo e segurança para sua família",
    description:
      "Conheça o Grand Club Cotia. Apartamentos de 1 e 2 dormitórios, áreas de lazer incríveis, bosque, mini golf, salão de festas e mais. Qualidade de vida em Cotia!",
    keywords: "grand club cotia, apartamentos cotia, condomínio clube cotia, lazer completo cotia, investir em cotia",
    ogTitle: "Grand Club Cotia - Viva com exclusividade",
    ogDescription:
      "Condomínio com lazer completo, segurança e áreas verdes para toda a família. Apartamentos inteligentes em Cotia.",
    ogImage: "/empreendimentos/grand-club-cotia/og-image.jpg",
  },

  // Hero Section
  hero: {
    backgroundImage: "/empreendimentos/grand-club-cotia/hero-background.jpg",
    logo: "/empreendimentos/logos/logo-grand-club-cotia.png",
    titulo: "Grand Club Cotia",
    subtitulo: "Um novo padrão de viver bem",
    ctas: [
      { texto: "Saiba Mais", tipo: "primary", acao: "#sobre" },
      { texto: "Agende sua Visita", tipo: "secondary", acao: "#contato" },
      { texto: "Fale com um Consultor", tipo: "outline", acao: "#contato" },
    ],
  },

  // Seção Sobre
  sobre: {
    titulo: "Conheça o Grand Club Cotia",
    descricao:
      "O Grand Club Cotia foi planejado para proporcionar um estilo de vida único, onde a flexibilidade e o conforto são prioridades. Suas plantas inteligentes otimizam a distribuição dos ambientes, equilibrando praticidade e sofisticação.\n\nAqui, sua família encontrará ambientes amplos e bem iluminados, além de um terraço especial, criando um espaço perfeito para o convívio diário. O destaque fica para o pet place e para as áreas de lazer cuidadosamente decoradas, que tornam a experiência ainda mais acolhedora.\n\nLocalizado em Cotia, o Grand Club Cotia está próximo de tudo que você precisa, em um ambiente seguro, cercado de verde e projetado para garantir total bem-estar.",
    imagem: "/empreendimentos/grand-club-cotia/sobre-image.jpg",
    destaques: [
      { numero: "198", texto: "Apartamentos" },
      { numero: "8", texto: "Torres" },
      { numero: "12", texto: "Itens de Lazer" },
      { numero: "24h", texto: "Segurança" },
    ],
  },

  // Informações (Abas)
  informacoes: {
    titulo: "Tudo que você precisa saber",
    subtitulo: "Informações completas sobre localização, lazer e investimento",
    abas: [
      {
        id: "localizacao",
        titulo: "Localização",
        icone: "MapPin",
        conteudo: {
          titulo: "Localização Privilegiada",
          descricao:
            "R. Geraldo Otaviano de Almeida, 1025 - Bairro Nakamura Park, Cotia - SP. Uma localização estratégica com fácil acesso a tudo que você precisa no dia a dia.",
          imagem: "/empreendimentos/grand-club-cotia/localizacao.jpg",
          lista: [
            "🏫 Escolas próximas",
            "🛒 Supermercados e comércios",
            "🏥 Hospitais e clínicas",
            "🍽️ Restaurantes e gastronomia",
            "💪 Academias e esportes",
            "🏦 Bancos e serviços",
            "🚌 Transporte público",
            "🛣️ Acesso às principais vias",
          ],
        },
      },
      {
        id: "lazer",
        titulo: "Lazer",
        icone: "Waves",
        conteudo: {
          titulo: "Lazer Completo para Toda Família",
          descricao:
            "Mais de 12 opções de lazer em um condomínio clube completo. Diversão garantida para todas as idades em ambientes cuidadosamente planejados.",
          imagem: "/empreendimentos/grand-club-cotia/lazer.jpg",
          lista: [
            "🏊 Piscina com deck",
            "🎉 Salão de festas",
            "💪 Estação fitness ao ar livre",
            "🔥 Churrasqueiras",
            "🎮 Playground",
            "⚽ Quadra recreativa",
            "⛳ Mini golf",
            "☀️ Solarium",
            "🌳 Bosque privativo",
            "🍽️ Espaço gourmet",
            "🚲 Bicicletário",
            "🛏️ Redário",
          ],
        },
      },
      {
        id: "seguranca",
        titulo: "Segurança",
        icone: "Shield",
        conteudo: {
          titulo: "Segurança e Exclusividade",
          descricao:
            "Condomínio fechado com sistema completo de segurança, proporcionando tranquilidade total para você e sua família.",
          imagem: "/empreendimentos/grand-club-cotia/seguranca.jpg",
          lista: [
            "🛡️ Portaria com segurança 24 horas",
            "📹 Monitoramento por câmeras",
            "🚪 Controle de acesso",
            "🏘️ Condomínio fechado",
            "🌿 Paisagismo planejado",
            "🚗 Estacionamento privativo",
            "🔐 Acesso controlado",
            "👮 Rondas de segurança",
          ],
        },
      },
      {
        id: "investimento",
        titulo: "Investimento",
        icone: "TrendingUp",
        conteudo: {
          titulo: "Investimento Valorizado",
          descricao:
            "Localização estratégica em Cotia, região com forte expansão imobiliária e alta demanda. Ideal para morar ou investir com segurança.",
          imagem: "/empreendimentos/grand-club-cotia/investimento.jpg",
          lista: [
            "📈 Alta liquidez no mercado",
            "🏗️ Região em expansão",
            "💰 Potencial de valorização",
            "🎯 Ideal para investimento",
            "🏠 Perfeito para moradia",
            "📊 VGV de R$ 32,67 milhões",
            "🔄 Facilidade de revenda",
            "💎 Empreendimento diferenciado",
          ],
          destaque: {
            titulo: "VGV Estimado",
            valor: "R$ 32.670.000",
          },
        },
      },
    ],
  },

  // Galeria
  galeria: {
    titulo: "Conheça cada detalhe",
    imagens: [
      {
        src: "/empreendimentos/grand-club-cotia/galeria/fachada.jpg",
        alt: "Fachada Grand Club Cotia",
        titulo: "Fachada Principal",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/salao-festas.jpg",
        alt: "Salão de Festas",
        titulo: "Salão de Festas",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/fitness.jpg",
        alt: "Estação Fitness",
        titulo: "Estação Fitness",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/piscina.jpg",
        alt: "Piscina",
        titulo: "Piscina",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/churrasqueira.jpg",
        alt: "Churrasqueiras",
        titulo: "Área de Churrasqueiras",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/playground.jpg",
        alt: "Playground",
        titulo: "Playground",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/quadra.jpg",
        alt: "Quadra Recreativa",
        titulo: "Quadra Recreativa",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/mini-golf.jpg",
        alt: "Mini Golf",
        titulo: "Mini Golf",
      },
    ],
  },

  // Plantas
  plantas: {
    titulo: "Plantas Inteligentes",
    especificacoes: [
      { label: "Torres", valor: "8 torres" },
      { label: "Total de unidades", valor: "198 apartamentos" },
      { label: "Tipologias", valor: "1 e 2 dormitórios" },
      { label: "Metragens", valor: "31,06m² a 46,32m²" },
      { label: "Vagas", valor: "1 vaga por unidade" },
      { label: "Áreas comuns", valor: "12 itens de lazer" },
      { label: "Segurança", valor: "Portaria 24h" },
      { label: "Entrega", valor: "Em obras" },
    ],
    tipologias: [
      {
        nome: "1 Dormitório",
        area: "31,06m²",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        planta: "/empreendimentos/grand-club-cotia/plantas/1-dormitorio.jpg",
        caracteristicas: [
          "Sala integrada",
          "Cozinha americana",
          "Dormitório com armário",
          "Banheiro completo",
          "Área de serviço",
          "Sacada",
        ],
      },
      {
        nome: "2 Dormitórios - 43,05m²",
        area: "43,05m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        planta: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-43.jpg",
        caracteristicas: [
          "Sala de estar",
          "Cozinha planejada",
          "2 dormitórios",
          "Banheiro social",
          "Área de serviço",
          "Sacada",
        ],
      },
      {
        nome: "2 Dormitórios - 46,32m²",
        area: "46,32m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        planta: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-46.jpg",
        caracteristicas: [
          "Sala ampla",
          "Cozinha com área gourmet",
          "2 dormitórios espaçosos",
          "Banheiro social",
          "Área de serviço independente",
          "Sacada com churrasqueira",
        ],
      },
    ],
  },

  // Contato
  contato: {
    titulo: "Garanta seu espaço no Grand Club Cotia",
    subtitulo: "Viva com mais qualidade e bem-estar. Entre em contato conosco!",
    formulario: {
      campos: [
        { nome: "nome", tipo: "text", label: "Nome completo", placeholder: "Seu nome completo", obrigatorio: true },
        { nome: "telefone", tipo: "tel", label: "Telefone", placeholder: "(11) 99999-9999", obrigatorio: true },
        { nome: "email", tipo: "email", label: "E-mail", placeholder: "seu@email.com", obrigatorio: true },
        {
          nome: "mensagem",
          tipo: "textarea",
          label: "Mensagem",
          placeholder: "Como podemos ajudá-lo?",
          obrigatorio: false,
        },
      ],
      botao: "Quero Saber Mais",
      checkbox: "Aceito receber informações sobre este e outros empreendimentos",
    },
  },

  // Tema
  tema: {
    corPrimaria: "#B8860B", // Dourado escuro
    corSecundaria: "#1a1a1a", // Preto
    corDestaque: "#FFD700", // Dourado claro
    backgroundPattern: "/empreendimentos/grand-club-cotia/pattern-background.png",
  },
}
