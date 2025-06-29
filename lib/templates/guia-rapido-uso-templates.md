# ⚡ Guia Rápido: Como Usar os Templates

> **Processo completo para criar uma nova landing page de empreendimento em 30-60 minutos**

---

## 🎯 **Fluxo Completo de Criação**

### **Passo 1: Briefing (15-20 min)**
```bash
# 1. Copie o template de briefing
cp lib/templates/landing-page-template.md briefing-[nome-empreendimento].md

# 2. Preencha todas as variáveis {{VARIAVEL}}
# Use o exemplo Villa Moderna como referência
```

### **Passo 2: Organização de Imagens (10-15 min)**
```bash
# 1. Crie a pasta do empreendimento
mkdir public/empreendimentos/[slug-empreendimento]
mkdir public/empreendimentos/[slug-empreendimento]/galeria

# 2. Organize as imagens seguindo a estrutura:
# - background-hero.jpg (1920x1080)
# - logo.png (300x150 - opcional)
# - fachada-principal.jpg (800x600)
# - rooftop.jpg (800x600)
# - planta.jpg (600x400)
# - galeria/imagem-1.jpg... (400x300)
```

### **Passo 3: Arquivo de Dados (10-15 min)**
```bash
# 1. Copie o template de dados
cp lib/data/jade-template-example.ts lib/data/[nome-empreendimento]-data.ts

# 2. Preencha com os dados do briefing
# 3. Ajuste paths das imagens
```

### **Passo 4: Criação da Página (5-10 min)**
```bash
# 1. Crie a pasta da rota
mkdir app/[slug-empreendimento]

# 2. Crie o arquivo page.tsx
touch app/[slug-empreendimento]/page.tsx

# 3. Importe o componente template
```

---

## 📋 **Template de page.tsx**

```tsx
import { JadeTemplatePage } from '@/components/jade-template-page'
import { nomeEmpreendimentoData } from '@/lib/data/nome-empreendimento-data'

export default function NomeEmpreendimentoPage() {
  return <JadeTemplatePage data={nomeEmpreendimentoData} />
}

export async function generateMetadata() {
  return {
    title: nomeEmpreendimentoData.seo.title,
    description: nomeEmpreendimentoData.seo.description,
    keywords: nomeEmpreendimentoData.seo.keywords,
    openGraph: {
      title: nomeEmpreendimentoData.seo.openGraph.title,
      description: nomeEmpreendimentoData.seo.openGraph.description,
      images: [nomeEmpreendimentoData.seo.openGraph.image],
    },
  }
}
```

---

## 🗂️ **Estrutura de Arquivos Padrão**

```
projeto/
├── briefing-nome-empreendimento.md          # Seu briefing preenchido
├── app/
│   └── nome-empreendimento/
│       └── page.tsx                         # Página do empreendimento
├── lib/
│   └── data/
│       └── nome-empreendimento-data.ts      # Dados estruturados
└── public/
    └── empreendimentos/
        └── nome-empreendimento/
            ├── background-hero.jpg
            ├── logo.png
            ├── fachada-principal.jpg
            ├── rooftop.jpg
            ├── planta.jpg
            └── galeria/
                ├── imagem-1.jpg
                ├── imagem-2.jpg
                └── ...
```

---

## ✅ **Checklist Rápido**

### **Antes de Começar**
- [ ] Material fotográfico coletado
- [ ] Textos e especificações definidos
- [ ] Nome e slug do empreendimento decididos

### **Durante a Criação**
- [ ] Briefing completo preenchido
- [ ] Imagens organizadas nas pastas corretas
- [ ] Arquivo de dados criado e configurado
- [ ] Página criada e testada localmente

### **Antes de Publicar**
- [ ] SEO configurado (título, descrição, keywords)
- [ ] Todas as imagens carregando
- [ ] Formulário de contato funcionando
- [ ] Design responsivo testado

---

## 🚀 **Comandos Úteis**

### **Inicialização Rápida**
```bash
# Criar estrutura básica de um novo empreendimento
./scripts/create-empreendimento.sh nome-empreendimento
```

### **Desenvolvimento**
```bash
# Testar localmente
npm run dev

# Build para produção
npm run build
```

### **Otimização de Imagens**
```bash
# Comprimir imagens antes de subir
# Use ferramentas como TinyPNG ou ImageOptim
```

---

## 🎨 **Customizações Comuns**

### **Cores Específicas do Empreendimento**
```tsx
// No arquivo de dados, personalize as cores
colors: {
  primary: '#1A2D54',      // Azul padrão Elleven
  secondary: '#FF6B35',    // Laranja padrão
  accent: '#CUSTOM_COLOR', // Cor específica do projeto
}
```

### **Seções Extras ou Modificadas**
```tsx
// Adicione seções customizadas no componente
specialSections: {
  hasVirtualTour: true,
  hasFinancing: true,
  customCTA: 'Agende sua Visita',
}
```

---

## 🔧 **Solução de Problemas Comuns**

### **Imagens não carregam**
```bash
# Verifique se o path está correto
# Correto: /empreendimentos/nome/imagem.jpg
# Errado: /public/empreendimentos/nome/imagem.jpg
```

### **Erro de build**
```tsx
// Certifique-se que todos os campos obrigatórios estão preenchidos
// Verifique a tipagem no arquivo de dados
```

### **SEO não funcionando**
```tsx
// Verifique se generateMetadata() está exportada
// Confirme se os dados de SEO estão completos
```

---

## ⚡ **Dicas de Performance**

1. **Otimize imagens** antes de fazer upload
2. **Use WebP** quando possível para hero images
3. **Teste responsividade** em múltiplos dispositivos
4. **Valide SEO** com ferramentas online
5. **Minifique assets** para produção

---

## 📈 **Métricas de Sucesso**

### **Tempo de Criação**
- **Briefing completo:** 15-20 min
- **Organização de assets:** 10-15 min  
- **Implementação:** 10-15 min
- **Testes e ajustes:** 5-10 min
- **Total:** 40-60 min por empreendimento

### **Qualidade Garantida**
- ✅ Design consistente com padrão Jade
- ✅ SEO otimizado automaticamente
- ✅ Responsividade em todos devices
- ✅ Performance otimizada
- ✅ Acessibilidade garantida

---

## 🎯 **Próximos Passos Após Publicação**

1. **Teste completo** da página online
2. **Validação SEO** com Google Search Console
3. **Teste de formulários** de contato
4. **Analytics** configurado
5. **Compartilhamento** nas redes sociais

---

**💡 Com este fluxo, você cria landing pages premium profissionais em menos de 1 hora, mantendo toda a qualidade e consistência do padrão Elleven!** 