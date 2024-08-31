const prompt = require('prompt-sync')()

let peso = Number(prompt("informe o seu peso:"))
let altura = Number(prompt("informe a sua altura:"))

let imc = (peso/(altura*altura))

if(imc < 18.5){
    console.log("baixo peso")
} else if(imc >= 18.5 && imc <= 24.9 ){
    console.log("peso normal")
} else if(imc >= 25 && imc <= 29.9){
    console.log("sobrepeso")
} else if(imc >= 30 ){
    console.log("obesidade")
}

    







