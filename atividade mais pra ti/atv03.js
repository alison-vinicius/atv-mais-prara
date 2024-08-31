const prompt = require('prompt-sync')()

let nota = Number(prompt("digite sua nota:"))

if( nota >= 7 && nota <= 10){
    console.log("Aprovado")
} else if (nota >=5 && nota <= 7){
    console.log("Recuperação")
} else if(nota >= 0 && nota < 5){
    console.log("Reprovado")
} else{
    console.log("nota invalida")
}
