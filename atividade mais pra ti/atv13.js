const prompt = require('prompt-sync')()
soma = 0;
quant_numeros = 0
numero = -1

while(true){
    let numero = Number(prompt("informe um numero decimal: "))
    
    if(numero == 0) break

    if(Number.isInteger(numero)){
        console.log("o numero que você digitou é inteiro. Por favor informe um numero decimal")
    } else{
        soma += numero
        quant_numeros += 1
    }
}

console.log(`media aritmética dos numeros digitados é: ${soma/quant_numeros}`)