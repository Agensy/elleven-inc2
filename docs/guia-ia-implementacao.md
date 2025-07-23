# Guia para IA - Como Implementar Empreendimentos

## 🎯 Objetivo

Este guia ensina como uma IA deve ler o **Template de Empreendimento** e implementar automaticamente as páginas de empreendimentos no código.

---

## 📖 Processo de Leitura do Template

### 1. **Análise do Template**
Quando receber informações sobre um empreendimento:

1. **Leia o arquivo:** `docs/template-empreendimento-ia.md`
2. **Identifique o tipo:** Studio, 1 dormitório, 2 dormitórios, etc.
3. **Colete todas as informações** seguindo cada seção do template
4. **Aplique as regras condicionais** baseadas no tipo

### 2. **Mapeamento de Campos**

| **Seção do Template** | **Campo no Código** | **Obrigatório** |
|----------------------|--------------------|-----------------|
| Nome do Empreendimento | `nome` | ✅ Sim |
| Slug da URL | `slug` | ✅ Sim |
| Tipo do Empreendimento | `tipo` | ✅ Sim |
| Área das Unidades | `area` | ✅ Sim |
| Número de Quartos | `quartos` | 🔄 Condicional |
| Número de Vagas | `vagas` | 🔄 Condicional |
| Preço Formatado | `precoFormatado` | ✅ Sim |
| Imagem Principal | `imagem` | ✅ Sim |
| Localização | `localizacao` | ✅ Sim |
| Descrição | `descricao` | ✅ Sim |

---

## 🔄 Regras de Renderização Condicional

### **Para Studios (quartos = 0):**

\`\`\`typescript
// ❌ NÃO renderizar campo quartos
{empreendimento.tipo !== 'Studio' && (
  <div className="quartos">
    <span>{empreendimento.quartos} quartos</span>
  </div>
)}

// ❌ NÃO renderizar vagas se = 0
{empreendimento.vagas > 0 && (
  <div className="vagas">
    <span>{empreendimento.vagas} vagas</span>
  </div>
)}

// ✅ Focar em área e localização
<div className="destaque-studio">
  <span className="area">{empreendimento.area}</span>
  <span className="localizacao">{empreendimento.localizacao}</span>
</div>
\`\`\`

### **Para Apartamentos (quartos > 0):**

\`\`\`typescript
// ✅ Renderizar TODOS os campos
<div className="caracteristicas-completas">
  <span>{empreendimento.quartos} quartos</span>
  <span>{empreendimento.banheiros} banheiros</span>
  <span>{empreendimento.vagas} vagas</span>
  <span>{empreendimento.area}</span>
</div>
\`\`\`

---

## 📝 Implementação Passo a Passo

### **Passo 1: Análise das Informações**

\`\`\`markdown
**Entrada da IA:**
"Criar página para Novo Empreendimento Studios, localizado na Rua das Flores, 123, 
com unidades de 25m² a 35m², sem quartos (Studio), preço a partir de R$ 280.000"

**Processamento da IA:**
1. Identificar tipo: "Studio" (quartos = 0)
2. Extrair informações:
   - Nome: "Novo Empreendimento Studios"
   - Localização: "Rua das Flores, 123"
   - Área: "25m² a 35m²"
   - Quartos: 0
   - Preço: "A partir de R$ 280.000"
\`\`\`

### **Passo 2: Aplicação das Regras**

\`\`\`typescript
// IA deve aplicar estas regras automaticamente:

const empreendimento = {
  nome: "Novo Empreendimento Studios",
slug: "novo-empreendimento-studios", // Auto-gerado
  tipo: "Studio",
  area: "25m² a 35m²",
  quartos: 0, // ← Studio = 0
  vagas: 0,   // ← Pode ser 0 para Studios
  precoFormatado: "A partir de R$ 280.000",
  // ... outras informações
}

// Renderização condicional automática:
const renderizarCaracteristicas = () => {
  return (
    <div className="caracteristicas">
      <span className="area">{empreendimento.area}</span>
      
      {/* ❌ NÃO renderizar quartos para Studios */}
      {empreendimento.quartos > 0 && (
        <span className="quartos">{empreendimento.quartos} quartos</span>
      )}
      
      <span className="banheiros">{empreendimento.banheiros} banheiros</span>
      
      {/* ❌ NÃO renderizar vagas se = 0 */}
      {empreendimento.vagas > 0 && (
        <span className="vagas">{empreendimento.vagas} vagas</span>
      )}
    </div>
  )
}
\`\`\`

### **Passo 3: Validação Automática**

\`\`\`typescript
// IA deve validar automaticamente:

const validarEmpreendimento = (dados) => {
  const erros = []
  
  // Validações obrigatórias
  if (!dados.nome) erros.push('Nome é obrigatório')
  if (!dados.descricao) erros.push('Descrição é obrigatória')
  if (!dados.localizacao) erros.push('Localização é obrigatória')
  
  // Validações condicionais
  if (dados.tipo !== 'Studio' && dados.quartos === 0) {
    erros.push('Apartamentos devem ter quartos > 0')
  }
  
  if (dados.tipo === 'Studio' && dados.quartos > 0) {
    erros.push('Studios devem ter quartos = 0')
  }
  
  return erros
}
\`\`\`

---

## 🎨 Componentes a Serem Atualizados

### **1. EmpreendimentoSobre.tsx**
\`\`\`typescript
// IA deve aplicar renderização condicional:

{/* Tipo - sempre mostrar */}
<div className="tipo">
  <span>{empreendimento.tipo}</span>
</div>

{/* Área - sempre mostrar */}
<div className="area">
  <span>{empreendimento.area}</span>
</div>

{/* Quartos - apenas se > 0 */}
{empreendimento.quartos > 0 && (
  <div className="quartos">
    <span>{empreendimento.quartos} quartos</span>
  </div>
)}

{/* Vagas - apenas se > 0 */}
{empreendimento.vagas > 0 && (
  <div className="vagas">
    <span>{empreendimento.vagas} vagas</span>
  </div>
)}
\`\`\`

### **2. EmpreendimentoPlantas.tsx**
\`\`\`typescript
// IA deve garantir que plantas tenham dados corretos:

const plantasFormatadas = empreendimento.plantas.map(planta => ({
  ...planta,
  quartos: planta.quartos || 0, // ← Garantir 0 para Studios
  vagas: planta.vagas || 0      // ← Garantir 0 se não tiver
}))
\`\`\`

### **3. EmpreendimentoPage.tsx**
\`\`\`typescript
// IA deve aplicar renderização condicional de seções:

{/* Sempre renderizar */}
<EmpreendimentoHero data={heroData} />
<EmpreendimentoSobre data={sobreData} />

{/* Renderizar apenas se tiver dados */}
{informacoesData && (
  <EmpreendimentoInformacoes data={informacoesData} />
)}

{/* Renderizar apenas se tiver galeria */}
{galeriaFormatada.length > 0 && (
  <EmpreendimentoGaleria data={galeriaData} />
)}

{/* Renderizar apenas se tiver plantas */}
{empreendimento.plantas && empreendimento.plantas.length > 0 && (
  <EmpreendimentoPlantas plantas={plantasFormatadas} />
)}
\`\`\`

---

## 🚀 Fluxo Completo de Implementação

### **1. Receber Informações**
\`\`\`
Input: "Criar empreendimento X com características Y"
\`\`\`

### **2. Processar Template**
\`\`\`
1. Ler template-empreendimento-ia.md
2. Extrair informações do input
3. Mapear para campos do template
4. Identificar tipo (Studio vs Apartamento)
\`\`\`

### **3. Aplicar Regras**
\`\`\`
1. Definir quartos (0 para Studio, >0 para apartamentos)
2. Definir vagas (opcional para Studio, obrigatório para apartamentos)
3. Aplicar renderização condicional
\`\`\`

### **4. Gerar Código**
\`\`\`
1. Atualizar empreendimentos-master.ts
2. Criar/atualizar página do empreendimento
3. Aplicar componentes com renderização condicional
\`\`\`

### **5. Validar Resultado**
\`\`\`
1. Verificar se campos obrigatórios estão preenchidos
2. Testar renderização condicional
3. Validar funcionamento da página
\`\`\`

---

## ✅ Checklist para IA

Antes de finalizar a implementação, verificar:

- [ ] **Nome** definido e único
- [ ] **Slug** gerado automaticamente (sem espaços/acentos)
- [ ] **Tipo** identificado corretamente
- [ ] **Quartos** = 0 para Studios, >0 para apartamentos
- [ ] **Vagas** opcional para Studios, obrigatório para apartamentos
- [ ] **Renderização condicional** aplicada em todos os componentes
- [ ] **Validações** passando sem erros
- [ ] **Página** funcionando corretamente
- [ ] **Dados** salvos em empreendimentos-master.ts

---

**Este guia garante que a IA implemente empreendimentos de forma consistente, inteligente e adaptativa, seguindo todas as regras de negócio estabelecidas.**
