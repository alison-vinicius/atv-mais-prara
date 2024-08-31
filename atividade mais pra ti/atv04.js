const prompt = require('prompt-sync')()

function Menu(){
    console.log("                M  E N U                 ")
    console.log("=========================================")
    console.log("selecione:")
    console.log(" 1 - PARA VER QUANTO ESTÁ O DOLLAR HOJE EM REAIS")
    console.log(" 2 - PARA SABER QUAIS SERÃO OS PRÓXIMOS JOGOS DA SELEÇÃO BRASILEIRA ")
    console.log(" 3 - SAIR")
}

function Resposta(opcao){
    switch(opcao){
        case 1:
            console.log("hoje no dia 30/08 o dollar está 5,61 reais")
            break
        case 2:
            console.log("PRÓXIMOS JOGOS:")
            console.log("Brasil x Equador - 06/09")
            console.log("Brasil x Paraguai - 06/09")
            break
        case 3:
            console.log("encerrando atendimento, obrigado por usar nosso programa")
            break
        default:
            console.log("opção invalida")
        
    }

}


Menu()
let opcao = Number(prompt("esolha sua opção:"))
Resposta(opcao)





// resposta(opcao)