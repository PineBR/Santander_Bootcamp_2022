/*
Troca todos os elementos pares e diferentes de zero de um array por zero.
Se o array for vazio, retorne -1.
 */

function trocaPares(array) {

    if (!array.length) return console.log(-1)

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Já é zero!");         
        }else if (array[i] % 2 === 0) {
            console.log(`Susbstituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}
// faça os 2 testes para verificar as saídas
// let arr = [1, 3, 4, 80, 33, 23, 90]
// let arr = []
let array = [1, 3, 4, 80, 33, 23, 90];
console.log(trocaPares(array));