const prompt = require('prompt-sync')()

console.log("============================")
console.log("  CALCULADORA DE FATORIAL   ")
console.log("============================")

let numero = Number(prompt("digite um numero:"))
fatorial = 1

for(let i = numero; i > 1; i--){
    fatorial *= i
}

console.log(`o fatorial de ${numero} é ${fatorial}`)


