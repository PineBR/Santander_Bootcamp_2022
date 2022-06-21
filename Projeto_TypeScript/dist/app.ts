let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

// Fazendo a tipagem de variável
function adicionarNumero(numero1: number, numero2: number) {
    return numero1 + numero2
}

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            //Automaticamente entende que é string, por isso deve converter em número
            console.log(adicionarNumero(Number(input1.value), Number(input2.value)))
        }
    })
}
