# 🚨 PROMPT PADRÃO - SEMPRE ENVIAR ANTES DE CRIAR EMPREENDIMENTO

**Copie e cole este texto ANTES de solicitar novo empreendimento ao V0:**

---

## 📋 INSTRUÇÕES OBRIGATÓRIAS PARA NOVO EMPREENDIMENTO

### ✅ USAR SEMPRE ESTA ESTRUTURA:

```typescript
import { Metadata } from "next"
import EmpreendimentoPage from "@/components/empreendimento/EmpreendimentoPage"
import { Empreendimento } from "@/lib/types/empreendimento"

const nomeEmpreendimentoData: Empreendimento = {
  // Campos obrigatórios com esta estrutura exata
  id: [NUMERO_UNICO],
  slug: "[slug-empreendimento]",
  nome: "[NOME]",
  localizacao: "[BAIRRO, CIDADE - SP]",
  bairro: "[BAIRRO]",
  tipo: "1 dormitório" | "2 dormitórios" | "3 dormitórios",
  status: "Lançamento" | "Em Obras" | "Entregues",
  area: "[XX a XXm²]",
  quartos: [NUMERO],
  banheiros: [NUMERO],
  vagas: [NUMERO],
  preco: [VALOR_NUMERICO],
  precoFormatado: "A partir de R$ [VALOR]",
  entrega: "[ANO]",
  descricao: "[TEXTO_DESCRICAO]",
  imagem: "/empreendimentos/[SLUG]/fachada.jpg",
  galeria: [
    "/empreendimentos/[SLUG]/imagem1.jpg",
    "/empreendimentos/[SLUG]/imagem2.jpg"
  ],
  // CRÍTICO: usar identidadeVisual.imagemBackground
  identidadeVisual: {
    logo: "/empreendimentos/[SLUG]/logo.png",
    corPrimaria: "#1A2D54",
    imagemBackground: "/empreendimentos/[SLUG]/background.jpg"
  },
  plantas: [{
    id: 1,
    tipo: "[TIPO_PLANTA]",
    area: "[AREA]",
    quartos: [NUM],
    banheiros: [NUM],
    vagas: [NUM],
    imagem: "/empreendimentos/[SLUG]/planta.jpg",
    preco: "[PRECO]",
    descricao: "[DESC]"
  }],
  // Outros campos obrigatórios...
}

export default function NomePage() {
  return <EmpreendimentoPage data={nomeEmpreendimentoData} />
}
```

### 🚫 NÃO USE:
- ❌ `EmpreendimentoData` (interface errada)
- ❌ `hero: { backgroundImage }` (estrutura errada)
- ❌ `galeria: { imagens: [] }` (estrutura complexa)
- ❌ `background:` (propriedade errada - use `imagemBackground`)

### ✅ SEMPRE USE:
- ✅ `Empreendimento` (interface correta)
- ✅ `identidadeVisual: { imagemBackground }` (propriedade correta)
- ✅ `galeria: ["url1", "url2"]` (array simples)

**⚠️ SEGUIR EXATAMENTE ESTA ESTRUTURA OU O SISTEMA DARÁ ERRO!** 