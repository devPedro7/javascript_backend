//O QUE É UMA PROMISSE: RETORNA O RESULTADO DE UMA FUNÇÃO RESOLVIDA(SUCESSO) OU REJEITADA
//A PROMISSE É UM CONRTATO, ELA IRÁ DE QUALQUER FORMA TRAZER O RESULTADO

function teste(){
    return new Promise((resolve, reject)=>{

        var erro = true

       // resolve("Promisse resolvida")
         
        if(erro){
            reject('Erro')
        }else{
            resolve('resolvido com sucesso')
        }
    })
}

teste().then((response)=>{
    alert(response)//then FAZ PARTE DA FUNÇÃO PROMISSE, E DENTRO DELA NÓS CRUAMOS UMA FUNÇÃO ANÔNIMA PARA CAPTURAR O RETORNO DO OBJETO. ELE PEGA O RES DO RESOLVE
}).catch((error)=>{
    alert(error) //PARA CAPTURAR O ERRO, TEMOS QUE CRIAR UM BLOCO CATCH E RECEBER O VALOR DO REJECT
})