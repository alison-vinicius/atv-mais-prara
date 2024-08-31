const prompt = require('prompt-sync')()

let soma = 0 

for(let i = 1; i <=5; i++){
    let num = Number(prompt(`digite o ${i} número:`))
    soma += num 
}

console.log(`a soma dos numeros digitados é ${soma}`)