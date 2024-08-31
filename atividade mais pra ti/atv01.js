const prompt = require('prompt-sync')()

let numero = Number(prompt("digite um numbero:"))

if (numero% 2 == 0)
    console.log("o número é par")
else
    console.log("o número é impar")

