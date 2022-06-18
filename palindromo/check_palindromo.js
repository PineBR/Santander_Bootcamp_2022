/* 
Verifica de duas maneiras diferentes entre si, se uma String é um palíndromo.
Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa.
*/

//Solução 01
function palindromo1(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

//Solução 02
function palindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            //return false;
            return `Não é palíndromo.`
        }
    }
    // return true;
    return `É palíndromo.`
}
//faça o teste com os funções palindromo1 e palindromo2
console.log(palindromo2('asa'));