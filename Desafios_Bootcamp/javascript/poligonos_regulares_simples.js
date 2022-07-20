/*
Na geometria Euclidiana, um polígono regular é um polígono em que todos os ângulos são iguais e todos os lados tem o mesmo comprimento. 
Um polígono simples é aquele cujos segmentos de reta não se interceptam. 
Você deve escrever um programa que, dados o número e o comprimento dos lados de um polígono regular, mostre seu perímetro.
*/
// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
let lines = gets().split("\n");
let line = lines.shift().split(' ');
// [posição do array]
const N = line[0]
const L = line[1]
// Number() pega o valor numérico da posição
const P = Number(N) * Number(L)
print(P);