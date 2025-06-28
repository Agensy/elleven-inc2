# Elleven Engenharia - Website

Site institucional da Elleven Engenharia, desenvolvido em Next.js 15 com TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
elleven-inc/
├── app/                    # App Router (Next.js 13+)
│   ├── contato/           # Página de contato
│   ├── empreendimentos/   # Listagem de empreendimentos
│   ├── empreendimento/    # Páginas dinâmicas de empreendimentos
│   ├── jade/              # Página específica do Jade
│   ├── obsidian/          # Página específica do Obsidian
│   └── ...
├── components/            # Componentes reutilizáveis
├── lib/                   # Utilitários e configurações
└── public/               # Arquivos estáticos
```

## 🛠️ Desenvolvimento

### Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start

# Deploy (push para ambos repositórios)
npm run deploy
```

## 📤 Deploy

**IMPORTANTE**: Este projeto possui dois repositórios remotos que devem ser mantidos sincronizados:

- **origin** (Agensy): `https://github.com/Agensy/elleven-inc.git`
- **tiago** (Tiago): `https://github.com/Tiagogomezdigital/elleven-inc.git`

### Como fazer deploy:

**Opção 1 - Usar o script automatizado:**
```bash
npm run deploy
```

**Opção 2 - Fazer manualmente:**
```bash
git add .
git commit -m "sua mensagem"
git push origin main
git push tiago main
```

### ⚠️ Lembrete para Assistentes IA

Sempre que for solicitado um push/deploy:
1. Verificar status do git
2. Adicionar arquivos (`git add .`)
3. Fazer commit com mensagem descritiva
4. **OBRIGATÓRIO**: Fazer push para AMBOS os repositórios
5. Confirmar que foi enviado para os dois

## 🎯 Funcionalidades Implementadas

- ✅ Redirecionamento de cards de parceiros para /parceiros
- ✅ Página de contato completa
- ✅ Scroll automático para hero sections
- ✅ Filtro preto e branco na linha do tempo
- ✅ Navegação otimizada entre seções
- ✅ Design responsivo
- ✅ Animações suaves
- ✅ SEO otimizado

## 🔧 Configuração Local

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute em desenvolvimento: `npm run dev`
4. Acesse: `http://localhost:3000`

## 📝 Notas de Desenvolvimento

- Sempre testar o build antes do deploy: `npm run build`
- Usar componentes do design system em `/components/ui/`
- Seguir padrões de nomenclatura estabelecidos
- Manter sincronização entre os dois repositórios
