# Template de Empreendimento para IA

**INSTRUÇÕES PARA IA:** Este documento serve como template para criação automática de páginas de empreendimentos. Leia cada seção e preencha as informações correspondentes no código da página.

---

## 📋 INFORMAÇÕES BÁSICAS

### Nome do Empreendimento
**Campo:** `nome`  
**Exemplo:** Novo Empreendimento Studios  
**Descrição:** Nome principal do empreendimento que aparecerá no título da página

### Slug da URL
**Campo:** `slug`  
**Exemplo:** novo-empreendimento-studios  
**Descrição:** URL amigável (sem espaços, acentos ou caracteres especiais)

### Subtítulo
**Campo:** `subtitulo`  
**Exemplo:** Lançamento Exclusivo  
**Descrição:** Texto secundário que aparece abaixo do nome principal

### Slogan/Tagline
**Campo:** `slogan`  
**Exemplo:** Viva o extraordinário  
**Descrição:** Frase de impacto para marketing

### Descrição Completa
**Campo:** `descricao`  
**Exemplo:** Studios modernos e funcionais no coração da cidade, com acabamentos de alto padrão e localização privilegiada.  
**Descrição:** Texto descritivo completo do empreendimento

### Status do Empreendimento
**Campo:** `status`  
**Opções:** Lançamento | Em Construção | Pronto para Morar | Entregue  
**Exemplo:** Lançamento

### Data de Entrega
**Campo:** `entrega`  
**Exemplo:** Dezembro 2025  
**Descrição:** Previsão de entrega do empreendimento

---

## 📍 LOCALIZAÇÃO

### Endereço Completo
**Campo:** `localizacao`  
**Exemplo:** Rua das Flores, 123 - Jardim Botânico, São Paulo - SP  
**Descrição:** Endereço formatado para exibição

### Bairro
**Campo:** `bairro`  
**Exemplo:** Jardim Botânico  
**Descrição:** Nome do bairro

### Coordenadas GPS
**Campo:** `coordenadas`  
**Exemplo:** { lat: -23.5505, lng: -46.6333 }  
**Descrição:** Latitude e longitude para mapas

---

## 🏠 CARACTERÍSTICAS DO IMÓVEL

### Tipo do Empreendimento
**Campo:** `tipo`  
**Opções:** Studio | 1 dormitório | 2 dormitórios | 3 dormitórios | 4 dormitórios | Cobertura  
**Exemplo:** Studio  
**Descrição:** Tipo principal das unidades

### Área das Unidades
**Campo:** `area`  
**Exemplo:** 25m² a 35m²  
**Descrição:** Faixa de área das unidades

### Número de Quartos
**Campo:** `quartos`  
**Exemplo:** 0 (para Studios) | 1, 2, 3, 4 (para apartamentos)  
**Descrição:** Quantidade de quartos. Studios = 0

### Número de Banheiros
**Campo:** `banheiros`  
**Exemplo:** 1  
**Descrição:** Quantidade de banheiros

### Número de Vagas
**Campo:** `vagas`  
**Exemplo:** 0 (para Studios sem vaga) | 1, 2, 3 (para apartamentos)  
**Descrição:** Quantidade de vagas de garagem

---

## 💰 PREÇOS

### Preço Inicial
**Campo:** `precoInicial`  
**Exemplo:** 280000  
**Descrição:** Menor preço em número (sem formatação)

### Preço Final
**Campo:** `precoFinal`  
**Exemplo:** 350000  
**Descrição:** Maior preço em número (opcional)

### Preço Formatado
**Campo:** `precoFormatado`  
**Exemplo:** A partir de R$ 280.000  
**Descrição:** Preço formatado para exibição

---

## 🖼️ IMAGENS

### Imagem Principal
**Campo:** `imagem`  
**Exemplo:** /images/novo-empreendimento/fachada-principal.jpg  
**Descrição:** Imagem de capa do empreendimento

### Imagem de Destaque
**Campo:** `imagemDestaque`  
**Exemplo:** /images/novo-empreendimento/vista-aerea.jpg  
**Descrição:** Imagem secundária (opcional)

### Galeria de Imagens
**Campo:** `galeria`  
**Exemplo:**
```
[
  "/images/novo-empreendimento/fachada.jpg",
  "/images/novo-empreendimento/lobby.jpg",
  "/images/novo-empreendimento/apartamento-decorado.jpg",
  "/images/novo-empreendimento/area-lazer.jpg"
]
```
**Descrição:** Array com URLs das imagens da galeria

---

## 🎨 IDENTIDADE VISUAL

### Cor Primária
**Campo:** `identidadeVisual.corPrimaria`  
**Exemplo:** #192849  
**Descrição:** Cor principal do empreendimento (formato hexadecimal)

### Cor Secundária
**Campo:** `identidadeVisual.corSecundaria`  
**Exemplo:** #8FBC8F  
**Descrição:** Cor secundária (formato hexadecimal)

### Logo
**Campo:** `identidadeVisual.logo`  
**Exemplo:** /images/novo-empreendimento/logo.png  
**Descrição:** URL do logo (opcional)

---

## ⭐ DIFERENCIAIS

### Lista de Diferenciais
**Campo:** `diferenciais`  
**Exemplo:**
```
[
  "Localização privilegiada",
  "Acabamentos de alto padrão",
  "Área de lazer completa",
  "Segurança 24h",
  "Próximo ao metrô"
]
```
**Descrição:** Array com os principais diferenciais

### Tags
**Campo:** `tags`  
**Exemplo:** ["studio", "lançamento", "centro", "metrô"]  
**Descrição:** Tags para busca e filtros

### Categoria
**Campo:** `categoria`  
**Exemplo:** ["residencial", "compacto", "urbano"]  
**Descrição:** Categorias do empreendimento

---

## 📍 PONTOS DE INTERESSE

### Lista de Pontos Próximos
**Campo:** `pontos_interesse`  
**Exemplo:**
```
[
  {
    "nome": "Estação de Metrô Consolação",
    "distancia": "300m",
    "tipo": "transporte"
  },
  {
    "nome": "Shopping Paulista",
    "distancia": "500m",
    "tipo": "shopping"
  },
  {
    "nome": "Hospital Sírio-Libanês",
    "distancia": "800m",
    "tipo": "saude"
  }
]
```
**Tipos disponíveis:** transporte, comercio, shopping, saude, educacao, parque, lazer

---

## 🏗️ PLANTAS E TIPOLOGIAS

### Lista de Plantas
**Campo:** `plantas`  
**Exemplo:**
```
[
  {
    "id": 1,
    "nome": "Studio 25m²",
    "tipo": "Studio",
    "area": "25m²",
    "quartos": 0,
    "banheiros": 1,
    "vagas": 0,
    "imagem": "/images/novo-empreendimento/planta-studio-25.jpg",
    "preco": "A partir de R$ 280.000",
    "descricao": "Studio compacto e funcional"
  },
  {
    "id": 2,
    "nome": "Studio 35m²",
    "tipo": "Studio",
    "area": "35m²",
    "quartos": 0,
    "banheiros": 1,
    "vagas": 1,
    "imagem": "/images/novo-empreendimento/planta-studio-35.jpg",
    "preco": "A partir de R$ 350.000",
    "descricao": "Studio amplo com vaga"
  }
]
```

---

## 🔧 ESPECIFICAÇÕES TÉCNICAS

### Número de Unidades
**Campo:** `especificacoes.unidades`  
**Exemplo:** 180 unidades  
**Descrição:** Total de unidades do empreendimento

### Número de Andares
**Campo:** `especificacoes.andares`  
**Exemplo:** 20 andares  
**Descrição:** Altura do edifício

### Elevadores
**Campo:** `especificacoes.elevadores`  
**Exemplo:** 3 elevadores  
**Descrição:** Quantidade e tipo de elevadores

### Data de Entrega
**Campo:** `especificacoes.entrega`  
**Exemplo:** Dezembro 2025  
**Descrição:** Previsão de entrega

### Rooftop (Opcional)
**Campo:** `especificacoes.rooftop`  
**Exemplo:** Piscina, churrasqueira e lounge  
**Descrição:** Amenidades do rooftop

### Academia (Opcional)
**Campo:** `especificacoes.academia`  
**Exemplo:** Fitness completo com equipamentos modernos  
**Descrição:** Detalhes da academia

---

## ℹ️ INFORMAÇÕES PARA ABAS (Opcional)

### Abas de Informações Detalhadas
**Campo:** `informacoes`  
**Exemplo:**
```
[
  {
    "id": "transporte",
    "titulo": "Transporte",
    "icon": "Train",
    "detalhes": {
      "titulo": "Mobilidade Urbana",
      "subtitulo": "Conectado aos principais pontos da cidade",
      "pontos": [
        {
          "titulo": "Metrô Consolação",
          "distancia": "300m"
        },
        {
          "titulo": "Estação Paulista",
          "distancia": "600m"
        }
      ],
      "imagem": "/images/novo-empreendimento/mapa-transporte.jpg"
    }
  },
  {
    "id": "comercio",
    "titulo": "Comércio",
    "icon": "ShoppingBag",
    "detalhes": {
      "titulo": "Conveniência Total",
      "subtitulo": "Tudo que você precisa por perto",
      "pontos": [
        {
          "titulo": "Shopping Paulista",
          "distancia": "500m"
        },
        {
          "titulo": "Mercado Extra",
          "distancia": "200m"
        }
      ],
      "imagem": "/images/novo-empreendimento/mapa-comercio.jpg"
    }
  }
]
```
**Ícones disponíveis:** Train, ShoppingBag, Hospital, GraduationCap, Trees, Coffee, MapPin

---

## 🔍 SEO E METADADOS (Opcional)

### Título da Página
**Campo:** `seo.title`  
**Exemplo:** Novo Empreendimento Studios - Lançamento no Centro de São Paulo  
**Descrição:** Título para SEO (máximo 60 caracteres)

### Descrição Meta
**Campo:** `seo.description`  
**Exemplo:** Studios modernos de 25m² a 35m² no centro de São Paulo. Localização privilegiada próximo ao metrô. A partir de R$ 280.000.  
**Descrição:** Descrição para SEO (máximo 160 caracteres)

### Palavras-chave
**Campo:** `seo.keywords`  
**Exemplo:** studio, apartamento, centro, são paulo, lançamento, metrô  
**Descrição:** Palavras-chave separadas por vírgula

---

## 🤖 INSTRUÇÕES PARA IA

### Como Usar Este Template:

1. **Leia cada seção** deste documento
2. **Identifique os campos** que precisam ser preenchidos
3. **Colete as informações** do empreendimento
4. **Preencha o código** da página usando os dados coletados
5. **Aplique renderização condicional** baseada no tipo:
   - **Studios**: `quartos = 0`, ocultar campo quartos na exibição
   - **Apartamentos**: `quartos > 0`, exibir todos os campos

### Regras de Renderização Condicional:

```typescript
// Para Studios (quartos = 0)
- NÃO exibir campo "Quartos" na interface
- Exibir "Vagas" apenas se > 0
- Focar em "Área" e "Localização"

// Para Apartamentos (quartos > 0)
- Exibir TODOS os campos
- "Quartos" e "Vagas" são obrigatórios
- Informações completas
```

### Validações Obrigatórias:

- ✅ **Nome** - sempre obrigatório
- ✅ **Descrição** - sempre obrigatório
- ✅ **Localização** - sempre obrigatório
- ✅ **Tipo** - sempre obrigatório
- ✅ **Área** - sempre obrigatório
- ✅ **Preço** - sempre obrigatório
- ✅ **Imagem Principal** - sempre obrigatório
- 🔄 **Quartos** - obrigatório apenas se não for Studio
- 🔄 **Vagas** - obrigatório para apartamentos, opcional para Studios

### Exemplo de Uso no Código:

```typescript
// Renderização condicional para quartos
{empreendimento.quartos > 0 && (
  <div className="campo-quartos">
    <span>{empreendimento.quartos} quartos</span>
  </div>
)}

// Renderização condicional para vagas
{empreendimento.vagas > 0 && (
  <div className="campo-vagas">
    <span>{empreendimento.vagas} vagas</span>
  </div>
)}
```

---

**Este template garante que todas as informações necessárias sejam coletadas e aplicadas corretamente no código, com renderização inteligente baseada no tipo de empreendimento.**