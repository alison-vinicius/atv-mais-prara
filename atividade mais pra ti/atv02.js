const prompt = require('prompt-sync')()

let idade = Number(prompt("digite sua idade:"))

if(idade >= 0 && idade <= 12){
    console.log("você é uma criança")
} else if(idade>= 13 && idade <= 17){
    console.log("você é um adolescente")
} else if(idade >= 18 && idade <= 59){
    console.log("voce é um adulto")
} else if(idade >= 60){
    console.log("você é idoso")
} else{
    console.log("sua idade é inválida")
}