#!/bin/bash

# 🚀 Git Helper Script - Elleven Inc
# Automatiza operações git comuns para desenvolvimento

set -e  # Para em caso de erro

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para mostrar help
show_help() {
    echo ""
    echo "${BLUE}🚀 Git Helper - Elleven Inc${NC}"
    echo ""
    echo "Uso: $0 [comando] [mensagem]"
    echo ""
    echo "Comandos disponíveis:"
    echo ""
    echo "  ${GREEN}push${NC} [mensagem]     - Adiciona, commita e faz push das mudanças"
    echo "  ${GREEN}save${NC} [mensagem]     - Apenas commita localmente (sem push)"
    echo "  ${RED}reset${NC}               - Volta para versão do GitHub (descarta mudanças locais)"
    echo "  ${YELLOW}status${NC}             - Mostra status atual"
    echo "  ${YELLOW}diff${NC}               - Mostra diferenças"
    echo "  ${YELLOW}log${NC}                - Mostra últimos commits"
    echo "  ${BLUE}help${NC}                - Mostra esta ajuda"
    echo ""
    echo "Exemplos:"
    echo "  $0 push \"Atualizar preços do Jade\""
    echo "  $0 save \"WIP: testando novas funcionalidades\""
    echo "  $0 reset"
    echo "  $0 status"
    echo ""
}

# Função para mostrar status
show_status() {
    echo ""
    echo "${BLUE}📊 Status atual:${NC}"
    git status
    
    echo ""
    echo "${BLUE}📈 Commits não enviados:${NC}"
    UNPUSHED=$(git log origin/main..HEAD --oneline)
    if [ -z "$UNPUSHED" ]; then
        echo "${GREEN}✅ Nenhum commit pendente${NC}"
    else
        echo "$UNPUSHED"
    fi
    echo ""
}

# Função para commit e push
git_push() {
    local message="$1"
    
    # Verificar se há mudanças (incluindo arquivos não rastreados)
    if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
        echo "${YELLOW}⚠️  Nenhuma mudança detectada${NC}"
        return 0
    fi
    
    # Se não foi fornecida mensagem, pedir uma
    if [ -z "$message" ]; then
        echo "${YELLOW}💬 Digite a mensagem do commit:${NC}"
        read -r message
    fi
    
    if [ -z "$message" ]; then
        echo "${RED}❌ Mensagem do commit é obrigatória${NC}"
        return 1
    fi
    
    echo ""
    echo "${BLUE}🔄 Processando mudanças...${NC}"
    
    # Mostrar o que vai ser commitado
    echo ""
    echo "${BLUE}📝 Arquivos que serão commitados:${NC}"
    git add .
    git status --porcelain
    
    echo ""
    echo "${BLUE}💾 Fazendo commit...${NC}"
    git commit -m "$message"
    
    echo ""
    echo "${BLUE}🚀 Enviando para GitHub...${NC}"
    git push origin main
    
    echo ""
    echo "${GREEN}✅ Sucesso! Mudanças enviadas para produção${NC}"
    echo ""
}

# Função para commit local apenas
git_save() {
    local message="$1"
    
    # Verificar se há mudanças (incluindo arquivos não rastreados)
    if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
        echo "${YELLOW}⚠️  Nenhuma mudança detectada${NC}"
        return 0
    fi
    
    # Se não foi fornecida mensagem, pedir uma
    if [ -z "$message" ]; then
        echo "${YELLOW}💬 Digite a mensagem do commit:${NC}"
        read -r message
    fi
    
    if [ -z "$message" ]; then
        echo "${RED}❌ Mensagem do commit é obrigatória${NC}"
        return 1
    fi
    
    echo ""
    echo "${BLUE}💾 Salvando mudanças localmente...${NC}"
    
    git add .
    git commit -m "$message"
    
    echo ""
    echo "${GREEN}✅ Commit salvo localmente (não enviado para GitHub)${NC}"
    echo "${YELLOW}💡 Use '$0 push' para enviar quando estiver pronto${NC}"
    echo ""
}

# Função para reset
git_reset() {
    echo ""
    echo "${RED}⚠️  ATENÇÃO: Isso vai descartar TODAS as mudanças locais!${NC}"
    echo "${YELLOW}📋 Mudanças que serão perdidas:${NC}"
    
    # Mostrar mudanças que serão perdidas
    if ! git diff --quiet || ! git diff --cached --quiet; then
        git status --porcelain
        echo ""
        echo "${YELLOW}❓ Tem certeza? (s/N):${NC}"
        read -r confirm
        
        if [[ $confirm =~ ^[Ss]$ ]]; then
            echo ""
            echo "${BLUE}🔄 Voltando para versão do GitHub...${NC}"
            git reset --hard origin/main
            git clean -fd  # Remove arquivos não rastreados
            echo ""
            echo "${GREEN}✅ Reset concluído! Ambiente limpo${NC}"
            echo ""
        else
            echo ""
            echo "${YELLOW}❌ Operação cancelada${NC}"
            echo ""
        fi
    else
        echo "${GREEN}✅ Nenhuma mudança local para descartar${NC}"
        echo ""
    fi
}

# Função para mostrar diff
show_diff() {
    echo ""
    echo "${BLUE}📝 Diferenças nos arquivos:${NC}"
    git diff
    
    if git diff --cached --quiet; then
        :
    else
        echo ""
        echo "${BLUE}📦 Mudanças já adicionadas (staged):${NC}"
        git diff --cached
    fi
    echo ""
}

# Função para mostrar log
show_log() {
    echo ""
    echo "${BLUE}📜 Últimos commits:${NC}"
    git log --oneline -10
    echo ""
}

# Função principal
main() {
    local command="$1"
    local message="$2"
    
    case "$command" in
        "push")
            git_push "$message"
            ;;
        "save")
            git_save "$message"
            ;;
        "reset")
            git_reset
            ;;
        "status")
            show_status
            ;;
        "diff")
            show_diff
            ;;
        "log")
            show_log
            ;;
        "help"|"--help"|"-h"|"")
            show_help
            ;;
        *)
            echo "${RED}❌ Comando desconhecido: $command${NC}"
            show_help
            exit 1
            ;;
    esac
}

# Verificar se estamos em um repositório git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "${RED}❌ Erro: Não é um repositório git${NC}"
    exit 1
fi

# Executar função principal com todos os argumentos
main "$@" 