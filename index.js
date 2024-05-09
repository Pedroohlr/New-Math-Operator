/**
 * Executa uma operação personalizada em dois números inteiros.
 * Primeiro, multiplica o primeiro dígito de cada número.
 * Em seguida, soma o segundo dígito de cada número.
 * Combina os dois resultados em uma string e converte para um número inteiro.
 * 
 * @param {number} number1 - O primeiro número inteiro.
 * @param {number} number2 - O segundo número inteiro.
 * @returns {number} O resultado da operação personalizada.
 */
function newOperator(number1, number2) {
  /**
   * Número recebido convertido em uma string.
   * @type {string}
   */
  const strNumber1 = number1.toString();
  
  /**
   * Vetor criado para separar a dezena e a unidade da variável strNumber1.
   * @type {number[]}
   */
  const vectorNumber1 = [];

  for (let i = 0; i < strNumber1.length; i++) {
    vectorNumber1.push(parseInt(strNumber1[i]));
  }

  /**
   * Número recebido convertido em uma string.
   * @type {string}
   */
  const strNumber2 = number2.toString();

  /**
   * Vetor criado para separar a dezena e a unidade da variável strNumber2.
   * @type {number[]}
   */
  const vectorNumber2 = [];

  for (let i = 0; i < strNumber2.length; i++) {
    vectorNumber2.push(parseInt(strNumber2[i]));
  }

  /**
   * Produto do primeiro dígito de cada número.
   * @type {number}
   */
  let tempValue1 = vectorNumber1[0] * vectorNumber2[0];

  /**
   * Soma do segundo dígito de cada número.
   * @type {number}
   */
  let tempValue2 = vectorNumber1[1] + vectorNumber2[1];

  /**
   * Resultado temporário, formando uma nova string a partir dos valores temporários.
   * @type {string}
   */
  const tempResult = tempValue1.toString() + tempValue2.toString(); 

  /**
   * Resultado final, convertendo a string resultante em um número inteiro.
   * @type {number}
   */
  let result = parseInt(tempResult);

  return result;
}

console.log(newOperator(23, 43));  // Exemplo de uso da função