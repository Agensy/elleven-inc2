# 🚀 Git Helper - Elleven Inc

Script para automatizar operações git comuns no desenvolvimento.

## ⚡ Comando Rápido: `ell`

Use o comando curto **`ell`** (3 letras) da Elleven:

```bash
./ell push "Sua mensagem"    # Rápido e direto!
./ell save "Mensagem"        # Commit local
./ell reset                  # Volta versão GitHub  
./ell status                 # Ver status
```

## 📋 Comandos Disponíveis

### 🚀 Push Automático
```bash
./ell push "Sua mensagem de commit"
# OU
./git-helper.sh push "Sua mensagem de commit"
```
- Adiciona TODOS os arquivos (incluindo novos)
- Faz commit com a mensagem
- Faz push para GitHub
- **⚠️ VAI DIRETO PARA PRODUÇÃO!**

### 💾 Save Local
```bash
./ell save "Mensagem do commit"
# OU
./git-helper.sh save "Mensagem do commit"
```
- Adiciona e commita apenas localmente
- **NÃO envia** para GitHub
- Útil para salvar progresso sem afetar produção

### ⚠️ Reset Seguro
```bash
./ell reset
# OU
./git-helper.sh reset
```
- Volta para versão exata do GitHub
- **DESCARTA** todas mudanças locais
- Pede confirmação antes de executar

### 📊 Verificações
```bash
./ell status   # Ver status atual
./ell diff     # Ver diferenças  
./ell log      # Ver últimos commits
```

## 🎯 Casos de Uso

### Workflow Rápido (Produção)
```bash
# Editar arquivos...
./ell push "Atualizar preços do Jade"
# ↑ Vai direto para v0!
```

### Workflow Seguro (Desenvolvimento)
```bash
# Editar arquivos...
./ell save "WIP: testando nova funcionalidade"
./ell save "Corrigir bug X"
./ell save "Finalizar funcionalidade Y"

# Quando estiver pronto:
./ell push "Implementar funcionalidade Y completa"
```

### Workflow de Reversão
```bash
# Se algo deu errado:
./ell reset
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
| `./ell push` | Commit + Push | ✅ SIM |
| `./ell save` | Apenas commit local | ❌ NÃO |
| `./ell reset` | Volta versão GitHub | ❌ Desfaz tudo |
| `./ell status` | Ver estado atual | ❌ Só visualiza |

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