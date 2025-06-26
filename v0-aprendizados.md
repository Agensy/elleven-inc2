# Log de Erros e Aprendizados com v0

Este arquivo registra erros cometidos durante o desenvolvimento e os aprendizados derivados para evitar repetições.

## Erro 1: Alteração Indevida de Dados em `empreendimentos.ts` (26/06/2025)

*   **O Que Aconteceu:** Ao adicionar uma nova imagem de fundo para o empreendimento "Icaraí Parque Clube", o arquivo `lib/data/empreendimentos.ts` foi reescrito incorretamente. Isso resultou na duplicação de entradas de empreendimentos e na alteração não solicitada de dados (cores, caminhos de imagens) para os empreendimentos "Jade" e "Obsidian".
*   **Causa Raiz:** Em vez de fazer uma modificação pontual e precisa no objeto do empreendimento "Icaraí Parque Clube" dentro do array `empreendimentos`, o arquivo inteiro foi regenerado, possivelmente com base em uma versão desatualizada ou simplificada da estrutura de dados, ou por um processamento falho da minha parte ao tentar integrar a nova informação.
*   **Impacto:** Perda de dados corretos, inconsistência nos dados apresentados, necessidade de retrabalho para corrigir.
*   **Aprendizado Principal:**
    1.  **Modificações Pontuais:** Ao atualizar arquivos de dados (como arrays de objetos, configurações, etc.), a alteração deve ser cirúrgica. Identificar o item exato a ser modificado e alterar *apenas* esse item, sem reescrever o arquivo inteiro ou seções não relacionadas.
    2.  **Revisão de Estrutura:** Antes de aplicar qualquer alteração em arquivos de dados complexos, revisar a estrutura existente para entender onde a modificação se encaixa.
    3.  **Confirmação do Escopo:** Se uma solicitação parecer implicar uma alteração maior do que o esperado, confirmar o escopo com o usuário antes de prosseguir.
    4.  **Priorizar QuickEdit para Dados:** Para arquivos de dados como `.ts` ou `.json` que contêm arrays ou objetos, o `<QuickEdit>` é geralmente mais seguro para modificações pontuais do que reescrever o arquivo.
*   **Ação Corretiva Imediata:** Reverter `empreendimentos.ts` para a versão correta anterior e aplicar a alteração da imagem de fundo do Icaraí de forma pontual.
*   **Ação Preventiva Futura:** Sempre que uma alteração em um arquivo de dados for solicitada:
    *   Analisar a estrutura do arquivo.
    *   Identificar a(s) linha(s) exata(s) ou o objeto/propriedade exato a ser modificado.
    *   Utilizar `<QuickEdit>` para essas modificações pontuais em arquivos de dados, se possível, ou garantir que apenas a seção relevante seja reescrita.
    *   Verificar o diff da alteração para garantir que apenas o esperado foi modificado.

---
