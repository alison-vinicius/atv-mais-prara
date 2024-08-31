const prompt = require('prompt-sync')()
console.log("===============================")
console.log("       lOJA DAS MAÇÃS          ")
console.log("===============================")
let macas = Number(prompt("informe quantasmaças você comprou :"))
let preco

if(macas >= 12){
    console.log("total a pagar: R$", (macas*0.25).toFixed(2))
} else if( macas > 0 && macas < 12){
    console.log("total a pagar: R$", (macas*0.3).toFixed(2))
} else{
    console.log("quantidade de maças inválida")
}

console.log("===============================")