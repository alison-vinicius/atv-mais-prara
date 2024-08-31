const prompt = require('prompt-sync')()

let anterior = 1
let proximo = 1
let auxiliar


console.log("=============================")
console.log("    FIBONACCI 10 PRIMEIROS ")
console.log("=============================")

console.log(anterior)
console.log(proximo)


for(let i = 1; i <= 8; i++){
    console.log(anterior+proximo)
    auxiliar = anterior+proximo
    anterior = proximo
    proximo = auxiliar
}