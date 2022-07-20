/*
Leia um valor inteiro N. 
Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.
*/
// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
let lines = gets().split('\n');
// parseInt() é uma função que analisa um argumento de string e retorna um inteiro
// shift() é um método que remove o 1º item de um array ou retorna o elemento deslocado
var N = parseInt(lines.shift());
// loop que percorrer um bloco de código várias vezes
for (let i = 1; i <= N; i++) {
// if especifica um bloco de código a ser executado, se uma condição for verdadeira
// Condição para o núemro ser par
// === significa sinifica que o valor e tipo são identicos
	if (i % 2 ===  0 )
// O cifrão $ é um nome de variável válida, não muito comum em JavaScript
          print(`${i}^2 = ${ i**2}`);
}