const prompt = require('prompt-sync')()

function OrdemCrescente(num1, num2){
    console.log(num1, num2);
}




let numero1 = Number(prompt("digite o primeiro numero:"))
let numero2 = Number(prompt("digite o segundo número:"))

if(numero1 < numero2){
    OrdemCrescente(numero1,numero2)
} else{
    OrdemCrescente(numero2,numero1)
}