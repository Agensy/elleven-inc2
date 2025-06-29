import type { EmpreendimentoData } from "@/lib/types/empreendimento"

export const grandClubCotiaData: EmpreendimentoData = {
  // Identificação
  id: "grand-club-cotia",
  slug: "grand-club-cotia",
  nome: "Grand Club Cotia",
  subtitulo: "BREVE LANÇAMENTO",
  slogan: "Espaço, sofisticação e qualidade de vida em um só lugar",

  // SEO
  seo: {
    title: "Grand Club Cotia - Condomínio Clube Exclusivo em Cotia",
    description:
      "Conheça o Grand Club Cotia. Apartamentos de 1 e 2 dormitórios com lazer completo, segurança e localização privilegiada. Seu novo lar com alto padrão!",
    keywords: "grand club cotia, apartamentos cotia, condomínio clube sp, lazer completo cotia",
    ogTitle: "Grand Club Cotia - Viva com exclusividade e conforto",
    ogDescription:
      "O Grand Club Cotia oferece o que há de melhor em lazer, segurança e localização. Apartamentos de 1 e 2 dormitórios esperando por você.",
    ogImage: "/empreendimentos/grand-club-cotia/og-image.png",
  },

  // Hero Section
  hero: {
    backgroundImage: "/empreendimentos/grand-club-cotia/fachada-principal.webp",
    logo: "/empreendimentos/logos/logo-grand-club-cotia.png",
    titulo: "Grand Club Cotia",
    subtitulo: "Seu clube residencial exclusivo",
    ctas: [
      { texto: "Saiba Mais", tipo: "primary", acao: "#sobre" },
      { texto: "Agendar Visita", tipo: "secondary", acao: "#contato" },
      { texto: "Receber Material Completo", tipo: "outline", acao: "#contato" },
    ],
  },

  // Seção Sobre
  sobre: {
    titulo: "Conheça o Grand Club Cotia",
    descricao:
      "O Grand Club Cotia foi cuidadosamente projetado para proporcionar um estilo de vida único, onde a flexibilidade e o conforto são prioridades.\n\nCom plantas inteligentes que otimizam o espaço, o Grand Club oferece o equilíbrio perfeito entre sofisticação e praticidade. Aqui, sua família encontra a tranquilidade que merece, com ambientes amplos, bem iluminados e áreas externas ideais para o convívio diário.\n\nO grande destaque é o terraço, pensado para ser o refúgio favorito de todos, com vistas deslumbrantes e total privacidade. Além disso, o empreendimento conta com uma estrutura completa de lazer e diversão para todas as idades, garantindo momentos inesquecíveis o ano todo.",
    imagem: "/empreendimentos/grand-club-cotia/vitrine-grand-club.jpeg",
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
            "Situado em Cotia, uma cidade em constante crescimento e valorização. R. Geraldo Otaviano de Almeida, 1025 - Bairro Nakamura Park, Cotia - SP. Uma localização estratégica com fácil acesso a tudo que você precisa no dia a dia.",
          imagem: "/empreendimentos/grand-club-cotia/fachada-principal.webp",
          lista: [
            "🏫 Escolas e centros educacionais",
            "🛍️ Supermercados e shoppings",
            "🏥 Hospitais e clínicas",
            "🍽️ Restaurantes e bares",
            "💪 Academias",
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
          titulo: "Lazer e Comodidades Completas",
          descricao:
            "O Grand Club Cotia conta com uma infraestrutura completa de lazer e diversão para todas as idades em ambientes cuidadosamente planejados.",
          imagem: "/empreendimentos/grand-club-cotia/galeria/piscina.webp",
          lista: [
            "🏊 Piscina ampla",
            "🎯 Salão de festas decorado",
            "🏋 Estação fitness",
            "🍖 Churrasqueiras ao ar livre",
            "⚽ Quadra recreativa",
            "🏌 Mini golf",
            "🏞 Solarium e bosque para relaxar",
            "🧒 Playground",
            "🚲 Bicicletário",
            "🪢 Redário",
            "🍽 Espaço gourmet",
            "🌳 Bosque privativo",
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
            "Condomínio fechado com sistema completo de segurança, proporcionando tranquilidade total para você e sua família. Ambiente tranquilo e familiar, pensado para sua paz.",
          imagem: "/empreendimentos/grand-club-cotia/galeria/bosque.jpeg",
          lista: [
            "🛡️ Condomínio fechado com portaria 24h",
            "🚪 Acesso controlado para veículos e pedestres",
            "📹 Monitoramento por câmeras nas áreas comuns",
            "🏘️ Ambiente tranquilo e familiar",
            "🌿 Paisagismo planejado",
            "🚗 Estacionamento privativo",
            "🔐 Controle de acesso total",
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
            "Localização estratégica em Cotia, com alta demanda e constante expansão. Garantia de valorização patrimonial em uma das regiões mais promissoras de SP.",
          imagem: "/empreendimentos/grand-club-cotia/vitrine-grand-club.jpeg",
          lista: [
            "📈 Alta liquidez no mercado",
            "🏗️ Região em constante expansão",
            "💰 Potencial de valorização garantido",
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
        src: "/empreendimentos/grand-club-cotia/fachada-principal.webp",
        alt: "Entrada e fachada moderna",
        titulo: "Fachada Principal",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/salao-festas-interior.jpeg",
        alt: "Salão de festas equipado",
        titulo: "Salão de Festas",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/piscina.webp",
        alt: "Piscina com deck",
        titulo: "Piscina com Deck",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/playground.jpeg",
        alt: "Playground",
        titulo: "Playground Infantil",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/fitness.jpeg",
        alt: "Estação fitness",
        titulo: "Academia ao Ar Livre",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/churrasqueira.jpeg",
        alt: "Churrasqueiras e bosque",
        titulo: "Área Gourmet",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/quadra.jpeg",
        alt: "Quadra recreativa",
        titulo: "Quadra Esportiva",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/mini-golf.webp",
        alt: "Mini golf",
        titulo: "Campo de Mini Golf",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/bosque.jpeg",
        alt: "Bosque privativo",
        titulo: "Área de Contemplação",
      },
      {
        src: "/empreendimentos/grand-club-cotia/galeria/piscina-deck.webp",
        alt: "Deck da Piscina",
        titulo: "Área de Relaxamento",
      },
    ],
  },

  // Plantas
  plantas: {
    titulo: "Plantas Inteligentes",
    especificacoes: [
      { label: "Número de Torres", valor: "8 torres" },
      { label: "Total de Unidades", valor: "198 apartamentos" },
      { label: "Tipos de Unidades", valor: "1 e 2 dormitórios" },
      { label: "Metragens", valor: "31,06 m² • 43,05 m² • 46,32 m²" },
      { label: "Vagas", valor: "1 vaga por unidade" },
      { label: "Estrutura de Lazer", valor: "Piscina, fitness, salão de festas, quadra etc." },
      { label: "Segurança", valor: "Portaria 24h e controle de acesso" },
      { label: "Status", valor: "Breve Lançamento" },
    ],
    tipologias: [
      {
        nome: "1 Dormitório - Tipo 2",
        area: "31,06m²",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        planta: "/empreendimentos/grand-club-cotia/plantas/1-dormitorio-tipo2.jpeg",
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
        nome: "2 Dormitórios - Tipo 1",
        area: "43,05m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        planta: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-tipo1.jpeg",
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
        nome: "2 Dormitórios - Tipo 2",
        area: "46,32m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        planta: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-tipo2.jpeg",
        caracteristicas: [
          "Sala ampla",
          "Cozinha com área gourmet",
          "2 dormitórios espaçosos",
          "Banheiro social",
          "Área de serviço independente",
          "Sacada com churrasqueira",
        ],
      },
      {
        nome: "2 Dormitórios - Garden",
        area: "46,32m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        planta: "/empreendimentos/grand-club-cotia/plantas/2-dormitorios-giardino.jpeg",
        caracteristicas: [
          "Sala ampla",
          "Cozinha integrada",
          "2 dormitórios",
          "Banheiro social",
          "Área de serviço",
          "Jardim privativo",
          "Área externa exclusiva",
        ],
      },
    ],
  },

  // Contato
  contato: {
    titulo: "Garanta o melhor para sua família",
    subtitulo: "Fale com um especialista e receba as condições especiais de lançamento.",
    formulario: {
      campos: [
        { nome: "nome", tipo: "text", label: "Nome Completo", placeholder: "Seu nome completo", obrigatorio: true },
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
