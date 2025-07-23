# Formulário Completo de Empreendimentos - Guia de Uso

## Visão Geral

O **Formulário Completo de Empreendimentos** foi desenvolvido com base na análise detalhada de todos os componentes existentes no sistema e nas necessidades identificadas durante a implementação do sistema de renderização condicional.

## 🎯 Objetivos do Formulário

### 1. **Cobertura Completa**
- Captura **100% das informações** necessárias para qualquer tipo de empreendimento
- Suporta desde **Studios** até **Apartamentos complexos**
- Inclui todos os dados para **SEO**, **galeria**, **plantas**, **especificações técnicas**

### 2. **Flexibilidade por Tipo**
- **Studios**: Quartos = 0, vagas opcionais
- **Apartamentos**: Quartos obrigatórios, vagas obrigatórias
- **Renderização condicional** automática baseada no tipo

### 3. **Validação Inteligente**
- Validações **condicionais** baseadas no tipo de empreendimento
- Verificação de **formatos** (URLs, cores, coordenadas)
- **Campos obrigatórios** dinâmicos

## 📋 Estrutura do Formulário

### **Seção 1: Informações Básicas**
\`\`\`typescript
informacoesBasicas: {
  nome: string                    // ✅ Obrigatório
  slug: string                    // ✅ Auto-gerado ou manual
  subtitulo?: string              // ⚪ Opcional
  slogan?: string                 // ⚪ Opcional
  descricao: string               // ✅ Obrigatório
  status: EmpreendimentoStatus    // ✅ Obrigatório
  entrega: string                 // ✅ Obrigatório
  ativo: boolean                  // ✅ Padrão: true
  destacado?: boolean             // ⚪ Padrão: false
}
\`\`\`

### **Seção 2: Localização e Endereço**
\`\`\`typescript
localizacao: {
  endereco: {                     // ✅ Completo
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep?: string
  }
  localizacaoCompleta: string     // ✅ Para exibição
  coordenadas: {                  // ✅ Para mapas
    lat: number
    lng: number
  }
}
\`\`\`

### **Seção 3: Características do Imóvel**
\`\`\`typescript
caracteristicas: {
  tipo: EmpreendimentoTipo        // ✅ Obrigatório
  area: string                    // ✅ Ex: "45m² a 180m²"
  quartos: number                 // 🔄 Condicional (0 para Studio)
  banheiros: number               // ✅ Obrigatório
  vagas: number                   // 🔄 Condicional (0 para Studio)
}
\`\`\`

### **Seção 4: Preços e Valores**
\`\`\`typescript
precificacao: {
  precoInicial: number            // ✅ Obrigatório
  precoFinal?: number             // ⚪ Opcional
  precoFormatado: string          // ✅ Para exibição
}
\`\`\`

### **Seção 5: Imagens e Mídia**
\`\`\`typescript
midia: {
  imagemPrincipal: string         // ✅ Obrigatório
  imagemDestaque?: string         // ⚪ Opcional
  galeria: string[]               // ✅ Array de URLs
}
\`\`\`

### **Seção 6: Identidade Visual**
\`\`\`typescript
identidadeVisual: {
  corPrimaria: string             // ✅ Formato hex
  corSecundaria: string           // ✅ Formato hex
  logo?: string                   // ⚪ Opcional
  imagemBackground?: string       // ⚪ Opcional
}
\`\`\`

### **Seção 7: Diferenciais e Características**
\`\`\`typescript
diferenciais: {
  lista: string[]                 // ✅ Lista de diferenciais
  tags: string[]                  // ✅ Para busca
  categoria: string[]             // ✅ Para filtros
}
\`\`\`

### **Seção 8: Pontos de Interesse**
\`\`\`typescript
pontosInteresse: Array<{
  nome: string                    // ✅ Nome do local
  distancia: string               // ✅ Ex: "500m", "2km"
  tipo: "transporte" | "comercio" | "shopping" | "saude" | "educacao" | "parque" | "lazer"
}>
\`\`\`

### **Seção 9: Plantas e Tipologias**
\`\`\`typescript
plantas: Array<{
  id: number                      // ✅ ID único
  nome: string                    // ✅ Nome da tipologia
  tipo: string                    // ✅ Tipo (Studio, Apartamento)
  area: string                    // ✅ Área da unidade
  quartos: number                 // 🔄 Condicional
  banheiros: number               // ✅ Obrigatório
  vagas: number                   // 🔄 Condicional
  imagem: string                  // ✅ URL da planta
  preco: string                   // ✅ Preço formatado
  descricao: string               // ✅ Descrição
  destaque?: boolean              // ⚪ Planta principal
}>
\`\`\`

### **Seção 10: Especificações Técnicas**
\`\`\`typescript
especificacoes: {
  unidades: string                // ✅ Número de unidades
  andares: string                 // ✅ Número de andares
  elevadores: string              // ✅ Info elevadores
  entrega: string                 // ✅ Data de entrega
  rooftop?: string                // ⚪ Info rooftop
  academia?: string               // ⚪ Info academia
}
\`\`\`

### **Seção 11: Informações para Abas**
\`\`\`typescript
informacoesAbas?: Array<{
  id: string                      // ✅ ID único
  titulo: string                  // ✅ Título da aba
  icon: string                    // ✅ Ícone Lucide
  detalhes: {
    titulo: string                // ✅ Título do conteúdo
    subtitulo: string             // ✅ Subtítulo
    pontos: Array<{
      titulo: string              // ✅ Título do ponto
      distancia: string           // ✅ Valor/distância
    }>
    imagem: string                // ✅ URL da imagem
  }
}>
\`\`\`

### **Seção 12: SEO e Metadados**
\`\`\`typescript
seo?: {
  title: string                   // ⚪ Título da página
  description: string             // ⚪ Descrição meta
  keywords: string                // ⚪ Palavras-chave
  ogTitle?: string                // ⚪ Título Open Graph
  ogDescription?: string          // ⚪ Descrição Open Graph
  ogImage?: string                // ⚪ Imagem Open Graph
}
\`\`\`

## 🔧 Funcionalidades Avançadas

### **1. Geração Automática de Slug**
\`\`\`typescript
gerarSlug("Novo Empreendimento Studios") // → "novo-empreendimento-studios"
\`\`\`

### **2. Validação Inteligente**
\`\`\`typescript
const { valido, erros } = validarFormulario(dadosFormulario)
if (!valido) {
  console.log("Erros encontrados:", erros)
}
\`\`\`

### **3. Conversão para Empreendimento**
\`\`\`typescript
const empreendimento = converterParaEmpreendimento(dadosFormulario)
\`\`\`

## 🎨 Renderização Condicional

### **Para Studios:**
- ❌ Campo "Quartos" não é exibido
- ❌ Campo "Vagas" pode ser ocultado se = 0
- ✅ Foco em "Área" e "Localização"

### **Para Apartamentos:**
- ✅ Todos os campos são exibidos
- ✅ "Quartos" e "Vagas" são obrigatórios
- ✅ Informações completas

## 📊 Vantagens do Formulário

### **1. Completude**
- ✅ **100% de cobertura** de todos os componentes
- ✅ **Nenhuma informação perdida** no processo
- ✅ **Compatibilidade total** com sistema existente

### **2. Flexibilidade**
- ✅ **Adaptação automática** por tipo de empreendimento
- ✅ **Campos condicionais** inteligentes
- ✅ **Validações dinâmicas**

### **3. Manutenibilidade**
- ✅ **Estrutura organizada** em seções lógicas
- ✅ **Tipagem completa** TypeScript
- ✅ **Documentação integrada**

### **4. Experiência do Usuário**
- ✅ **Interface adaptativa** baseada no tipo
- ✅ **Validação em tempo real**
- ✅ **Preenchimento inteligente**

### **5. SEO e Performance**
- ✅ **Metadados completos** para SEO
- ✅ **Renderização otimizada**
- ✅ **Carregamento condicional**

## 🚀 Como Implementar

### **1. Importar o Formulário**
\`\`\`typescript
import { 
  FormularioEmpreendimentoCompleto,
  validarFormulario,
  converterParaEmpreendimento,
  gerarSlug
} from '@/lib/templates/formulario-empreendimento-completo'
\`\`\`

### **2. Criar Estado do Formulário**
\`\`\`typescript
const [dadosFormulario, setDadosFormulario] = useState<Partial<FormularioEmpreendimentoCompleto>>({})
\`\`\`

### **3. Implementar Validação**
\`\`\`typescript
const handleSubmit = () => {
  const { valido, erros } = validarFormulario(dadosFormulario)
  
  if (!valido) {
    setErros(erros)
    return
  }
  
  const empreendimento = converterParaEmpreendimento(dadosFormulario as FormularioEmpreendimentoCompleto)
  // Salvar empreendimento...
}
\`\`\`

### **4. Renderização Condicional**
\`\`\`typescript
// Mostrar campo quartos apenas se não for Studio
{dadosFormulario.caracteristicas?.tipo !== 'Studio' && (
  <CampoQuartos />
)}

// Mostrar campo vagas apenas se > 0
{(dadosFormulario.caracteristicas?.vagas || 0) > 0 && (
  <CampoVagas />
)}
\`\`\`

## 📝 Exemplo Prático

\`\`\`typescript
// Exemplo de preenchimento para um Studio
const studioExample: FormularioEmpreendimentoCompleto = {
  informacoesBasicas: {
    nome: "Novo Empreendimento Studios",
slug: "novo-empreendimento-studios",
    descricao: "Studios modernos no coração da cidade",
    status: "Lançamento",
    entrega: "Dezembro 2025",
    ativo: true
  },
  caracteristicas: {
    tipo: "Studio",
    area: "25m² a 35m²",
    quartos: 0,        // ← Studio = 0 quartos
    banheiros: 1,
    vagas: 0           // ← Pode ser 0 para Studios
  },
  // ... resto das informações
}
\`\`\`

## 🔍 Validações Implementadas

### **Campos Obrigatórios:**
- ✅ Nome, descrição, localização
- ✅ Tipo, área, banheiros
- ✅ Preço formatado, imagem principal
- ✅ Cor primária e secundária

### **Validações Condicionais:**
- 🔄 **Studios**: quartos = 0, vagas opcional
- 🔄 **Apartamentos**: quartos > 0, vagas obrigatório

### **Validações de Formato:**
- 🎨 **Cores**: formato hexadecimal (#RRGGBB)
- 🌐 **URLs**: formato válido de URL
- 📍 **Coordenadas**: latitude/longitude válidas
- 🔗 **Slug**: apenas letras, números e hífens

## 💡 Próximos Passos

1. **Implementar Interface de Usuário** baseada neste formulário
2. **Criar Componentes Reutilizáveis** para cada seção
3. **Integrar com Sistema de Upload** para imagens
4. **Adicionar Preview em Tempo Real** do empreendimento
5. **Implementar Salvamento Automático** (draft)

---

**Este formulário representa a solução completa e definitiva para cadastro de empreendimentos, cobrindo 100% das necessidades identificadas e garantindo flexibilidade para diferentes tipos de propriedades.**
