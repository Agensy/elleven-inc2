# 🚨 INSTRUÇÕES OBRIGATÓRIAS - V0: Criar Novo Empreendimento

> **⚠️ LEIA COMPLETAMENTE ANTES DE COMEÇAR - Evita erros críticos de compatibilidade**

## 🎯 OBJETIVO
Criar novo empreendimento usando **APENAS** a interface `Empreendimento` do sistema componentizado.

## 📋 ESTRUTURA OBRIGATÓRIA

### ✅ TEMPLATE OBRIGATÓRIO A SEGUIR:

```typescript
import { Metadata } from "next"
import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { Empreendimento } from "@/lib/types/empreendimento"

// ✅ USAR SEMPRE ESTA INTERFACE
const [NOME]EmpreendimentoData: Empreendimento = {
  // === IDENTIFICAÇÃO (OBRIGATÓRIO) ===
  id: [NUMERO_SEQUENCIAL],
  slug: "[slug-do-empreendimento]",
  nome: "[NOME DO EMPREENDIMENTO]",
  subtitulo: "[SUBTÍTULO OU STATUS]",
  slogan: "[SLOGAN PRINCIPAL]",

  // === LOCALIZAÇÃO (OBRIGATÓRIO) ===
  localizacao: "[BAIRRO, CIDADE - ESTADO]",
  bairro: "[NOME DO BAIRRO]",
  endereco: {
    rua: "[NOME DA RUA]",
    numero: "[NÚMERO]",
    bairro: "[BAIRRO]", 
    cidade: "[CIDADE]",
    estado: "[ESTADO]",
    cep: "[CEP]"
  },
  coordenadas: {
    lat: [LATITUDE],
    lng: [LONGITUDE]
  },
  pontos_interesse: [
    { nome: "[NOME DO LOCAL]", distancia: "[DISTÂNCIA]", tipo: "shopping" },
    // Tipos válidos: "saude" | "shopping" | "transporte" | "comercio" | "parque" | "educacao"
  ],

  // === CARACTERÍSTICAS (OBRIGATÓRIO) ===
  tipo: "Studio" | "1 dormitório" | "2 dormitórios" | "3 dormitórios" | "Cobertura",
  status: "Breve lançamento" | "Lançamento" | "Em Obras" | "Entregues",
  area: "[ÁREA DOS APARTAMENTOS]",
  quartos: [NÚMERO DE QUARTOS],
  banheiros: [NÚMERO DE BANHEIROS], 
  vagas: [NÚMERO DE VAGAS],

  // === PREÇO E ENTREGA (OBRIGATÓRIO) ===
  preco: [VALOR_NUMERICO],
  precoFormatado: "A partir de R$ [VALOR_FORMATADO]",
  entrega: "[ANO DE ENTREGA]",

  // === CONTEÚDO (OBRIGATÓRIO) ===
  descricao: "[DESCRIÇÃO COMPLETA DO EMPREENDIMENTO]",
  destaque: "[PRINCIPAL DIFERENCIAL]",
  diferenciais: ["[DIFERENCIAL 1]", "[DIFERENCIAL 2]", "[DIFERENCIAL 3]"],

  // === MÍDIA (OBRIGATÓRIO) ===
  imagem: "/empreendimentos/[SLUG]/[IMAGEM-PRINCIPAL].jpg",
  imagemDestaque: "/empreendimentos/[SLUG]/[IMAGEM-DESTAQUE].jpg",
  galeria: [
    "/empreendimentos/[SLUG]/[IMAGEM-1].jpg",
    "/empreendimentos/[SLUG]/[IMAGEM-2].jpg",
    "/empreendimentos/[SLUG]/[IMAGEM-3].jpg"
    // ✅ SEMPRE ARRAY SIMPLES DE STRINGS
  ],

  // === IDENTIDADE VISUAL (OBRIGATÓRIO) ===
  identidadeVisual: {
    logo: "/empreendimentos/[SLUG]/logo-[NOME].png",
    corPrimaria: "#[COR_HEXADECIMAL]",
    corSecundaria: "#[COR_HEXADECIMAL]", 
    imagemBackground: "/empreendimentos/[SLUG]/background-[NOME].jpg"
    // ✅ PROPRIEDADE CRÍTICA: imagemBackground (não background!)
  },

  // === PLANTAS (OBRIGATÓRIO) ===
  plantas: [
    {
      id: 1,
      tipo: "[TIPO DA PLANTA]",
      area: "[ÁREA]",
      quartos: [NÚMERO],
      banheiros: [NÚMERO],
      vagas: [NÚMERO], 
      imagem: "/empreendimentos/[SLUG]/plantas/[PLANTA].jpg",
      preco: "[PREÇO FORMATADO]",
      descricao: "[DESCRIÇÃO DA PLANTA]",
      destaque: true // Primeira planta sempre true
    }
    // Adicionar mais plantas conforme necessário
  ],

  // === ESPECIFICAÇÕES (OBRIGATÓRIO) ===
  especificacoes: {
    unidades: "[NÚMERO] unidades",
    andares: "[NÚMERO] andares", 
    elevadores: "[NÚMERO] elevadores",
    entrega: "[ENTREGA FORMATADA]"
  },

  // === METADADOS (OBRIGATÓRIO) ===
  destacado: true, // true para empreendimentos em destaque
  ativo: true,     // sempre true
  tags: ["[TAG1]", "[TAG2]", "[TAG3]"],
  categoria: ["[CATEGORIA1]", "[CATEGORIA2]"]
}

// === METADATA (OBRIGATÓRIO) ===
export const metadata: Metadata = {
  title: `${[NOME]EmpreendimentoData.nome} | Elleven`,
  description: [NOME]EmpreendimentoData.descricao,
}

// === COMPONENTE (OBRIGATÓRIO) ===
export default function [NOME]EmpreendimentoPage() {
  return <EmpreendimentoPage data={[NOME]EmpreendimentoData} />
}
```

## 🚫 ERROS CRÍTICOS A EVITAR

### ❌ NUNCA USE:
```typescript
// ❌ INTERFACE ERRADA
const data: EmpreendimentoData = { ... }

// ❌ ESTRUTURA COMPLEXA NA GALERIA  
galeria: { imagens: [{ src: "...", alt: "..." }] }

// ❌ PROPRIEDADE ERRADA
identidadeVisual: { background: "..." }

// ❌ ESTRUTURA COMPLEXA EM HERO
hero: { backgroundImage: "..." }
```

### ✅ SEMPRE USE:
```typescript
// ✅ INTERFACE CORRETA
const data: Empreendimento = { ... }

// ✅ GALERIA SIMPLES
galeria: ["url1", "url2", "url3"]

// ✅ PROPRIEDADE CORRETA  
identidadeVisual: { imagemBackground: "..." }

// ✅ SEM SEÇÕES HERO/SOBRE SEPARADAS
```

## 📁 ORGANIZAÇÃO DE ARQUIVOS

### ✅ ESTRUTURA OBRIGATÓRIA:
```
app/
└── [slug-empreendimento]/
    └── page.tsx                    // Página principal

public/
└── empreendimentos/
    └── [slug-empreendimento]/
        ├── background-[nome].jpg   // Hero background
        ├── logo-[nome].png         // Logo (opcional)
        ├── fachada-principal.jpg   // Imagem principal
        ├── destaque.jpg            // Imagem de destaque
        ├── galeria/                // Pasta da galeria
        │   ├── imagem-01.jpg
        │   ├── imagem-02.jpg
        │   └── imagem-03.jpg
        └── plantas/                // Pasta das plantas
            ├── planta-01.jpg
            └── planta-02.jpg
```

## ✅ CHECKLIST DE VALIDAÇÃO

Antes de enviar, verifique:

- [ ] **Interface:** Uso correto de `Empreendimento` (não `EmpreendimentoData`)
- [ ] **Identidade Visual:** Propriedade `imagemBackground` (não `background`)
- [ ] **Galeria:** Array simples de strings (não objetos complexos)
- [ ] **Plantas:** Array de objetos `Planta` (não estrutura aninhada)
- [ ] **Imagens:** Todas as URLs começam com `/empreendimentos/[slug]/`
- [ ] **Tipos:** Valores válidos para `tipo` e `status`
- [ ] **Coordenadas:** Latitude e longitude válidas
- [ ] **IDs únicos:** ID numérico único para o empreendimento
- [ ] **Slug único:** Slug único sem espaços ou caracteres especiais

## 🎯 EXEMPLO PRÁTICO

```typescript
// ✅ EXEMPLO VÁLIDO E FUNCIONAL
const exemploEmpreendimento: Empreendimento = {
  id: 10,
  slug: "villa-moderna",
  nome: "VILLA MODERNA RESIDENCES", 
  subtitulo: "LANÇAMENTO EXCLUSIVO",
  slogan: "Modernidade e Conforto em Perfeita Harmonia",
  
  localizacao: "Pinheiros, São Paulo - SP",
  bairro: "Pinheiros",
  endereco: {
    rua: "Rua dos Pinheiros",
    numero: "1500", 
    bairro: "Pinheiros",
    cidade: "São Paulo",
    estado: "SP", 
    cep: "05422-000"
  },
  coordenadas: { lat: -23.5629, lng: -46.6967 },
  pontos_interesse: [
    { nome: "Shopping Eldorado", distancia: "800m", tipo: "shopping" },
    { nome: "Hospital Albert Einstein", distancia: "1.2km", tipo: "saude" }
  ],
  
  tipo: "2 dormitórios",
  status: "Lançamento", 
  area: "60 a 80m²",
  quartos: 2,
  banheiros: 2,
  vagas: 1,
  
  preco: 750000,
  precoFormatado: "A partir de R$ 750.000",
  entrega: "2026",
  
  descricao: "No vibrante bairro de Pinheiros...",
  destaque: "Localização premium em Pinheiros",
  diferenciais: ["Localização Premium", "Design Moderno", "Segurança 24h"],
  
  imagem: "/empreendimentos/villa-moderna/fachada-principal.jpg",
  imagemDestaque: "/empreendimentos/villa-moderna/destaque.jpg", 
  galeria: [
    "/empreendimentos/villa-moderna/galeria/imagem-01.jpg",
    "/empreendimentos/villa-moderna/galeria/imagem-02.jpg"
  ],
  
  identidadeVisual: {
    logo: "/empreendimentos/villa-moderna/logo-villa-moderna.png",
    corPrimaria: "#1A2D54",
    corSecundaria: "#FF6B35",
    imagemBackground: "/empreendimentos/villa-moderna/background-villa-moderna.jpg"
  },
  
  plantas: [{
    id: 1,
    tipo: "Apartamento 65m²",
    area: "65m²", 
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    imagem: "/empreendimentos/villa-moderna/plantas/planta-01.jpg",
    preco: "A partir de R$ 750.000",
    descricao: "2 dormitórios com varanda gourmet",
    destaque: true
  }],
  
  especificacoes: {
    unidades: "120 unidades",
    andares: "15 andares",
    elevadores: "3 elevadores", 
    entrega: "Dezembro de 2026"
  },
  
  destacado: true,
  ativo: true,
  tags: ["lancamento", "pinheiros", "moderno"],
  categoria: ["residencial", "alto-padrao"]
}
```

## 🚨 VERIFICAÇÃO FINAL

**Antes de implementar, responda:**

1. ✅ Estou usando a interface `Empreendimento`?
2. ✅ Tenho `identidadeVisual.imagemBackground`?
3. ✅ Minha galeria é um array simples de strings?
4. ✅ Minhas plantas seguem a interface `Planta[]`?
5. ✅ Todos os campos obrigatórios estão preenchidos?

**Se alguma resposta for NÃO, revise antes de continuar!**

---

## 💡 LEMBRE-SE

- **Sistema componentizado:** Usa interface `Empreendimento`
- **Compatibilidade:** Garantida seguindo esta estrutura
- **Performance:** Otimizada para esta interface específica
- **Manutenção:** Mais fácil com padrão único

**🎯 SIGA EXATAMENTE ESTA ESTRUTURA E O EMPREENDIMENTO FUNCIONARÁ PERFEITAMENTE!** 