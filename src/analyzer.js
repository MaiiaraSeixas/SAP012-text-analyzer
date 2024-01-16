const analyzer = {
  // Calcula a quantidade de palavras no texto.
  getWordCount: function (text) {
    return text.split(" ").length;
  },

  // Retorna o número total de caracteres no texto, incluindo espaços e pontuação.
  getCharacterCount: function (text) {
    return text.length;
  },
  // Conta os caracteres no texto, excluindo espaços e sinais de pontuação.
  getCharacterCountExcludingSpaces: function (text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (!text[i].match(/[\s.,/#!$%^&*;:{}=\-_`~()]/g)) {
        count++;
      }
    }
    return count;
  },

  // Determina quantos números estão presentes no texto.
  getNumberCount: function (text) {
    const matches = text.match(/\b\d+(?:\.\d+)?\b/g);
    if (matches) {
      return matches.length;
    } else {
      return 0;
    }
  },
  // Calcula a soma de todos os números no texto.
  getNumberSum: function (text) {
    const numbers = text.match(/\b\d+(?:\.\d+)?\b/g) || [];
    let sum = 0;
    for (const num of numbers) {
      sum += Number(num);
    }
    return sum;
  },
  // Calcula o comprimento médio das palavras no texto.
  getAverageWordLength: function (text) {
    const words = text.split(' ').filter(word => word);
    let totalLength = 0;
    for (const word of words) {
      totalLength += word.length;
    }
    return words.length ? parseFloat((totalLength / words.length).toFixed(2)) : 0;
  }
};

export default analyzer; 
