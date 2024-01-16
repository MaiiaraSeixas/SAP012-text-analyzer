import  analyzer  from './analyzer.js';
// Espera que todo o conteúdo da página seja carregado antes de executar o script

document.addEventListener('input', function () {
  const entradaTexto = document.querySelector('textarea[name="user-input"]');
  const contagemPalavras = document.querySelector('[data-testid="word-count"]');
  const contagemCaracteres = document.querySelector('[data-testid="character-count"]');
  const contagemCaracteresSemEspaco = document.querySelector('[data-testid="character-no-spaces-count"]');
  const contagemNumeros = document.querySelector('[data-testid="number-count"]');
  const somaNumeros = document.querySelector('[data-testid="number-sum"]');
  const comprimentoMedioPalavras = document.querySelector('[data-testid="word-length-average"]');
  const botaoReset = document.getElementById('reset-button');


  // Esta adicionando um evento que é acionado a cada tecla pressionada

  entradaTexto.addEventListener('input', function () {
    const texto = entradaTexto.value;

    // Está atualizando a pagina de acordo com os elementos do site e mostrando os resultados das análises que contem no analayzer
    contagemPalavras.textContent = 'Contagem de Palavras: ' + analyzer.getWordCount(texto);
    contagemCaracteres.textContent = 'Contagem de Caracteres: ' + analyzer.getCharacterCount(texto);
    contagemCaracteresSemEspaco.textContent = 'Caracteres sem Espaços e Pontuação: ' + analyzer.getCharacterCountExcludingSpaces(texto);
    contagemNumeros.textContent = 'Contagem de Números: ' + analyzer.getNumberCount(texto);
    somaNumeros.textContent = 'Soma Total dos Números: ' + analyzer.getNumberSum(texto);
    comprimentoMedioPalavras.textContent = 'Comprimento Médio das Palavras: ' + analyzer.getAverageWordLength(texto);
  });
  //Estou determinado que o botão de resetar, zere as funções declarando cada uma delas para zerar
  botaoReset.addEventListener('click', function () {
    entradaTexto.value = '';
    contagemPalavras.textContent = 'Contagem de Palavras: 0';
    contagemCaracteres.textContent = 'Contagem de Caracteres: 0';
    contagemCaracteresSemEspaco.textContent = 'Caracteres sem Espaços e Pontuação: 0';
    contagemNumeros.textContent = 'Contagem de Números: 0';
    somaNumeros.textContent = 'Soma Total dos Números: 0';
    comprimentoMedioPalavras.textContent = 'Comprimento Médio das Palavras: 0';
  });
});

