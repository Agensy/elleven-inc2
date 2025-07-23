// Script de debug para verificar quantos empreendimentos estão sendo renderizados

// Função para contar empreendimentos na página
function contarEmpreendimentos() {
  const cards = document.querySelectorAll('[data-testid="empreendimento-card"], .empreendimento-card, [class*="EmpreendimentoCard"]');
  console.log('Cards encontrados por seletor específico:', cards.length);
  
  // Tentar outros seletores
  const cardsGeneric = document.querySelectorAll('.grid > div');
  console.log('Cards na grid:', cardsGeneric.length);
  
  // Verificar se há cards com imagens
  const cardsWithImages = document.querySelectorAll('img[alt*="empreendimento"], img[src*="empreendimentos"]');
  console.log('Cards com imagens de empreendimentos:', cardsWithImages.length);
  
  // Verificar se há links para empreendimentos
  const links = document.querySelectorAll('a[href*="/"]');
  const empreendimentoLinks = Array.from(links).filter(link => {
    const href = link.getAttribute('href');
    return href && (href.includes('le-mont') || href.includes('botanique') || href.includes('jade') || href.includes('obsidian') || href.includes('grand-club') || href.includes('vert') || href.includes('essence') || href.includes('grand-parc') || href.includes('mont-royal') || href.includes('quartier') || href.includes('icarai'));
  });
  console.log('Links para empreendimentos encontrados:', empreendimentoLinks.length);
  
  // Listar os links encontrados
  empreendimentoLinks.forEach((link, index) => {
    console.log(`${index + 1}. ${link.getAttribute('href')} - ${link.textContent.trim()}`);
  });
  
  return {
    cardsPorSeletor: cards.length,
    cardsNaGrid: cardsGeneric.length,
    cardsComImagens: cardsWithImages.length,
    linksEmpreendimentos: empreendimentoLinks.length
  };
}

// Função para verificar erros no console
function verificarErros() {
  console.log('=== VERIFICAÇÃO DE EMPREENDIMENTOS ===');
  const resultado = contarEmpreendimentos();
  console.log('Resultado da contagem:', resultado);
  
  // Verificar se há mensagens de erro
  const errorElements = document.querySelectorAll('[class*="error"], [class*="Error"]');
  console.log('Elementos de erro encontrados:', errorElements.length);
  
  // Verificar se há mensagem de "nenhum empreendimento encontrado"
  const noResults = document.querySelector('*');
  const bodyText = document.body.textContent;
  if (bodyText.includes('Nenhum empreendimento encontrado') || bodyText.includes('nenhum empreendimento')) {
    console.log('⚠️ ENCONTRADA MENSAGEM DE NENHUM RESULTADO');
  }
  
  console.log('=== FIM DA VERIFICAÇÃO ===');
}

// Executar verificação
verificarErros();

// Disponibilizar função globalmente
window.debugEmpreendimentos = verificarErros;