/**
 * EXEMPLO PRÁTICO DE USO DO TEMPLATE
 *
 * Este arquivo mostra como usar o template para criar um novo empreendimento
 * seguindo todos os padrões defensivos identificados.
 */

import {
  type NovoEmpreendimentoInput,
  criarEmpreendimentoDoTemplate,
  gerarCodigoPagina,
} from "./novo-empreendimento-template"

// ✅ EXEMPLO: Dados de entrada para um novo empreendimento
const exemploEmpreendimento: NovoEmpreendimentoInput = {
  nome: "Residencial Exemplo",
  slug: "residencial-exemplo",
  localizacao: "São Paulo - SP",
  endereco: {
    rua: "Rua das Flores",
    numero: "123",
    bairro: "Jardim Exemplo",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567",
  },
  descricao:
    "Um empreendimento moderno e completo, pensado para oferecer qualidade de vida e conforto para toda a família. Com áreas de lazer diversificadas e localização privilegiada.",
  status: "Em Obras",
  entrega: "2025",
  area: "15.000 m²",
  unidades: "120",
  torres: "3",
  tipologias: "1, 2 e 3 dormitórios",

  // URLs das imagens (substituir pelas blobs reais)
  imagemPrincipal: "https://blob.v0.dev/exemplo-hero.jpeg",
  imagemFachada: "https://blob.v0.dev/exemplo-fachada.webp",
  galeria: [
    "https://blob.v0.dev/exemplo-fachada.webp",
    "https://blob.v0.dev/exemplo-piscina.webp",
    "https://blob.v0.dev/exemplo-playground.webp",
    "https://blob.v0.dev/exemplo-salao.webp",
    "https://blob.v0.dev/exemplo-quadra.webp",
    "https://blob.v0.dev/exemplo-portaria.webp",
  ],

  lazer: [
    "Piscina adulto e infantil",
    "Quadra poliesportiva",
    "Playground",
    "Salão de festas",
    "Espaço gourmet",
    "Academia",
  ],

  diferenciais: [
    "Localização privilegiada",
    "Segurança 24 horas",
    "Área verde preservada",
    "Fácil acesso ao transporte público",
    "Próximo a escolas e comércios",
  ],

  pontosInteresse: [
    { nome: "Estação de Metrô", distancia: "800m", tipo: "transporte" },
    { nome: "Shopping Center", distancia: "1,2km", tipo: "comercio" },
    { nome: "Hospital", distancia: "2km", tipo: "saude" },
    { nome: "Escola Municipal", distancia: "500m", tipo: "educacao" },
    { nome: "Parque Municipal", distancia: "1km", tipo: "lazer" },
  ],

  plantas: [
    {
      tipo: "1 Dormitório",
      area: "42 m²",
      quartos: 1,
      banheiros: 1,
      vagas: 1,
      preco: "A partir de R$ 280.000",
      descricao: "Apartamento compacto e funcional",
      destaque: false,
    },
    {
      tipo: "2 Dormitórios",
      area: "58 m²",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      preco: "A partir de R$ 350.000",
      descricao: "Apartamento ideal para casais",
      destaque: true,
    },
    {
      tipo: "3 Dormitórios",
      area: "72 m²",
      quartos: 3,
      banheiros: 2,
      vagas: 1,
      preco: "A partir de R$ 420.000",
      descricao: "Apartamento perfeito para famílias",
      destaque: false,
    },
  ],

  tema: {
    corPrimaria: "#1E3A8A",
    corSecundaria: "#3B82F6",
    corDestaque: "#F59E0B",
    logo: "/empreendimentos/logos/logo-exemplo.png",
  },
}

// ✅ GERAR OS DADOS DO EMPREENDIMENTO
export const exemploData = criarEmpreendimentoDoTemplate(exemploEmpreendimento)

// ✅ GERAR O CÓDIGO DA PÁGINA
export const exemploCodigoPagina = gerarCodigoPagina(exemploEmpreendimento)

// ✅ EXEMPLO DE COMO USAR:
console.log("Dados gerados:", exemploData)
console.log("Código da página:", exemploCodigoPagina.paginaTsx)
console.log("Código dos dados:", exemploCodigoPagina.dataTs)
console.log("Caminhos dos arquivos:", exemploCodigoPagina.caminhos)

/**
 * INSTRUÇÕES DE USO:
 *
 * 1. Copie este exemplo
 * 2. Substitua os dados pelos dados reais do empreendimento
 * 3. Execute criarEmpreendimentoDoTemplate() para gerar os dados
 * 4. Execute gerarCodigoPagina() para gerar o código
 * 5. Crie os arquivos nos caminhos indicados
 * 6. Salve as imagens na estrutura correta
 * 7. Teste a página
 */
