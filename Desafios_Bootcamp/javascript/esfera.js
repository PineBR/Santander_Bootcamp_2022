/*
Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). 
A fórmula para calcular o volume é: (4/3) * pi * R3. 
Considere (atribua) para pi o valor 3.14159.
Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.
*/
//const é uma constante que não pode ser redeclarada e nem reatribuída
// const deve receber um valor quando são declaradas
const PI = 3.14159;
// let é a declaração de uma variável que deve ser declaradas antes do uso, tem escopo de bloco
//let não pode ser redeclaradas 
let R = parseFloat(gets());
//parseFloat() é um método que analisa um valor como uma string e retorna o primeiro número
//parseFloat(value), gets() significa que pegar um valor atribuído pelo usuário
//Para precisão numérica utiliza-se o .toFixed(n)
let Vol = (4/3.0)*PI*(R**3);
print("VOLUME = " + Vol.toFixed(3));