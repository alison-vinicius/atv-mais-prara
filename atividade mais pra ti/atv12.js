const prompt = require('prompt-sync')()

let numero = Number(prompt("informe um numero para calcularmos a tabuada:"))

console.log("===========================")
console.log(`    TABUADA DO ${numero}    `)
console.log("===========================")
for(let i = 1; i <= 10; i++){
    console.log(`${numero} X ${i} = ${numero*i}`)
}

