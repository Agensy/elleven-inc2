# 🚀 Git Helper - Elleven Inc

Script para automatizar operações git comuns no desenvolvimento.

## 📋 Comandos Disponíveis

### 🚀 Push Automático
```bash
./git-helper.sh push "Sua mensagem de commit"
```
- Adiciona TODOS os arquivos (incluindo novos)
- Faz commit com a mensagem
- Faz push para GitHub
- **⚠️ VAI DIRETO PARA PRODUÇÃO!**

### 💾 Save Local
```bash
./git-helper.sh save "Mensagem do commit"
```
- Adiciona e commita apenas localmente
- **NÃO envia** para GitHub
- Útil para salvar progresso sem afetar produção

### ⚠️ Reset Seguro
```bash
./git-helper.sh reset
```
- Volta para versão exata do GitHub
- **DESCARTA** todas mudanças locais
- Pede confirmação antes de executar

### 📊 Verificações
```bash
./git-helper.sh status   # Ver status atual
./git-helper.sh diff     # Ver diferenças
./git-helper.sh log      # Ver últimos commits
```

## 🎯 Casos de Uso

### Workflow Rápido (Produção)
```bash
# Editar arquivos...
./git-helper.sh push "Atualizar preços do Jade"
# ↑ Vai direto para v0!
```

### Workflow Seguro (Desenvolvimento)
```bash
# Editar arquivos...
./git-helper.sh save "WIP: testando nova funcionalidade"
./git-helper.sh save "Corrigir bug X"
./git-helper.sh save "Finalizar funcionalidade Y"

# Quando estiver pronto:
./git-helper.sh push "Implementar funcionalidade Y completa"
```

### Workflow de Reversão
```bash
# Se algo deu errado:
./git-helper.sh reset
# ↑ Volta para estado do GitHub
```

## 🔄 Fluxo de Trabalho

```
Editar arquivos → save (local) → save (local) → push (produção)
                                              ↗
                               reset ← Problema detectado
```

## ⚡ Uso Rápido

| Comando | O que faz | Vai para produção? |
|---------|-----------|-------------------|
| `push` | Commit + Push | ✅ SIM |
| `save` | Apenas commit local | ❌ NÃO |
| `reset` | Volta versão GitHub | ❌ Desfaz tudo |
| `status` | Ver estado atual | ❌ Só visualiza |

## 🛡️ Segurança

- ⚠️ `push` = **Produção imediata**
- 💾 `save` = **Apenas local**
- 🔒 `reset` = **Pede confirmação**
- 👀 Mostra sempre o que vai ser alterado

## 📁 Instalação Global (Opcional)

Para usar de qualquer pasta:

```bash
# Copiar para pasta global
sudo cp git-helper.sh /usr/local/bin/git-helper
sudo chmod +x /usr/local/bin/git-helper

# Usar de qualquer lugar:
git-helper push "Mensagem"
``` 