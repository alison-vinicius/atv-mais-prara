const prompt = require('prompt-sync')()

console.log("===============================")
console.log("CALCULADORA    DE TRIANGULO    ")
console.log("===============================")
let a = Number(prompt("digite o valor A:"))
let b = Number(prompt("digite o valor B:"))
let c = Number(prompt("digite o valor C:"))
console.log("===============================")

if(a<b+c && b < a+c && c < a+b){
    let triangulo = "os lados formam um triangulo"
    if ( a == b && b == c ){
        console.log(triangulo + " equilatero")
    } else if(a!=b && b!= c){
        console.log(triangulo + " escaleno")
    } else if(a == b || a==c || b == c ){
        console.log(triangulo + " isoceles")
    }
} else{
    console.log("os lados não formam um triangulo")
}


