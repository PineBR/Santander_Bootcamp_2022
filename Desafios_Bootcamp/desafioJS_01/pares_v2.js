
function pares(N) {

    for (let i = 1; i <= N; i++){
        if(i % 2 === 0)
            print(`${i}^2 = ${i**2}`)
    }
    return N;
}

let N = 4;
console.log(pares(N));