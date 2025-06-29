# 🏗️ PROCESSO PADRÃO PARA NOVOS EMPREENDIMENTOS

## 📋 CHECKLIST PRÉ-CRIAÇÃO

### ✅ **1. INFORMAÇÕES BÁSICAS COLETADAS:**
- [ ] Nome do empreendimento
- [ ] Slug (nome-em-kebab-case)
- [ ] Localização completa
- [ ] Endereço detalhado
- [ ] Descrição completa
- [ ] Status atual
- [ ] Data de entrega

### ✅ **2. IMAGENS ORGANIZADAS:**
- [ ] Imagem principal/vitrine (hero)
- [ ] Imagem da fachada
- [ ] Galeria com pelo menos 6 imagens
- [ ] URLs das blobs coletadas
- [ ] Imagens salvas na estrutura correta

### ✅ **3. CARACTERÍSTICAS TÉCNICAS:**
- [ ] Área total
- [ ] Número de unidades
- [ ] Número de torres
- [ ] Tipologias disponíveis
- [ ] Plantas (se disponíveis)

### ✅ **4. DIFERENCIAIS E LAZER:**
- [ ] Lista de áreas de lazer
- [ ] Diferenciais únicos
- [ ] Pontos de interesse próximos
- [ ] Distâncias mapeadas

### ✅ **5. IDENTIDADE VISUAL:**
- [ ] Cores primária e secundária
- [ ] Logo (se disponível)
- [ ] Padrão visual definido

---

## 🔧 PROCESSO DE CRIAÇÃO

### **PASSO 1: Preparar os Dados**
\`\`\`typescript
const novoEmpreendimento: NovoEmpreendimentoInput = {
  nome: "Nome do Empreendimento",
  slug: "nome-do-empreendimento",
  localizacao: "Cidade - Estado",
  endereco: {
    rua: "Nome da Rua",
    numero: "123",
    bairro: "Nome do Bairro",
    cidade: "Nome da Cidade",
    estado: "SP",
    cep: "00000-000"
  },
  // ... resto dos dados
}
\`\`\`

### **PASSO 2: Gerar os Arquivos**
\`\`\`typescript
import { criarEmpreendimentoDoTemplate, gerarCodigoPagina } from "@/lib/templates/novo-empreendimento-template"

const dadosEmpreendimento = criarEmpreendimentoDoTemplate(novoEmpreendimento)
const codigoPagina = gerarCodigoPagina(novoEmpreendimento)
\`\`\`

### **PASSO 3: Criar os Arquivos**
1. **Página:** `app/[slug]/page.tsx`
2. **Dados:** `lib/data/[slug]-data.ts`
3. **Imagens:** Salvar todas as blobs na estrutura correta

### **PASSO 4: Testar**
- [ ] Página carrega sem erros
- [ ] Todas as imagens aparecem
- [ ] Dados estão corretos
- [ ] SEO configurado
- [ ] Responsivo funcionando

---

## 🛡️ PADRÕES DEFENSIVOS APLICADOS

### **✅ Optional Chaining:**
\`\`\`typescript
data.propriedade?.subpropriedade
\`\`\`

### **✅ Fallback Values:**
\`\`\`typescript
valor || "valor_padrao"
array || []
\`\`\`

### **✅ Arrays Seguros:**
\`\`\`typescript
(array || []).map(item => ...)
\`\`\`

### **✅ Props Opcionais:**
\`\`\`typescript
interface Props {
  dados?: Tipo
}
\`\`\`

### **✅ Renderização Condicional:**
\`\`\`typescript
if (!dados) return <FallbackComponent />
\`\`\`

---

## 📁 ESTRUTURA DE ARQUIVOS GERADA

\`\`\`
app/
  [slug]/
    page.tsx                 # Página do empreendimento

lib/
  data/
    [slug]-data.ts          # Dados estruturados

public/
  empreendimentos/
    [slug]/
      hero.webp             # Imagem principal
      fachada.webp          # Fachada
      galeria/
        imagem-1.webp       # Galeria
        imagem-2.webp
        ...
\`\`\`

---

## 🎯 EXEMPLO DE USO

\`\`\`typescript
// Dados de entrada
const leMontInput: NovoEmpreendimentoInput = {
  nome: "Le Mont",
  slug: "le-mont-novo",
  localizacao: "Cotia - SP",
  endereco: {
    rua: "Estrada Morro Grande",
    numero: "3400",
    bairro: "Jardim Isis",
    cidade: "Cotia",
    estado: "SP"
  },
  descricao: "Condomínio com lazer completo...",
  status: "Concluído",
  entrega: "2016",
  imagemPrincipal: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20-%20VITRINE_LE%20MONT%201-tpzwlGlJbz53ZZYI1khTDNV2R5Dxe7.jpeg",
  imagemFachada: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEMONT%201_FACHADAS-2zt9M2rb41LBAyeen7CpyxSCuR3Q2z.webp",
  galeria: ["url1", "url2", "url3"],
  lazer: ["Piscina", "Quadra", "Playground"],
  diferenciais: ["Segurança 24h", "Área verde"],
  pontosInteresse: [
    { nome: "Shopping", distancia: "2km", tipo: "comercio" }
  ],
  tema: {
    corPrimaria: "#2F4F2F",
    corSecundaria: "#6B8E23"
  }
}

// Gerar empreendimento
const leMontData = criarEmpreendimentoDoTemplate(leMontInput)
const codigoGerado = gerarCodigoPagina(leMontInput)
\`\`\`

---

## ⚠️ PONTOS DE ATENÇÃO

1. **Sempre usar o template** - Garante consistência
2. **Testar antes de publicar** - Verificar se não há erros
3. **Imagens otimizadas** - Converter blobs para webp
4. **SEO completo** - Title, description, keywords
5. **Dados defensivos** - Sempre com fallbacks
6. **Compatibilidade** - Seguir interface Empreendimento

---

## 🏆 RESULTADO ESPERADO

- ✅ **Zero erros** na criação
- ✅ **Compatibilidade total** com EmpreendimentoPage
- ✅ **SEO otimizado** automaticamente
- ✅ **Código defensivo** por padrão
- ✅ **Estrutura consistente** em todos os empreendimentos
- ✅ **Manutenibilidade** alta
