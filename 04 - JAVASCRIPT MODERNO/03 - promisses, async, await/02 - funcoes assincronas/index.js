//FUNÇÕES ASSINCRONAS: É UMA FORMA MAIS ELEGANNTE DE LIDAR COM AS PROMISSES
//PARA UTILIZAR TEM QUE INSERIR O: async
//A FUNÇÃO ASSINCRONA NÃO ESPERA O QUE ESTÁ ANTES DELA PRA SER EXECUTADA, ELA EXECUTA ANTES.

//PODEMOS UTILIZAR O await DENTRO DAS NOSSAS FUNÇÕES async, QUE FUNCIONA COMO FORMA DE INTERVALO PRA FUNÇÃO. O QUE ESTIVER NO BLOCO DO AWAIT SÓ VAI SER EXECUTADO
//QUANDO O QUE ESTIVER NO AWAIT FOR RESOLVIDO COMO POR EXEMPLO: nossa promisse
//O AWAIT É IMPORTANTE POIS DEPENDENDO DO CASO, ELE SEGURA A FUNÇÃO ANÔNIMA A NÃO IR NA FRENTE

function teste(){
    return new Promise((resolve, reject)=>{

        
        var erro = false
        setTimeout(()=>{
            // resolve("Promisse resolvida")
              
             if(erro){
                 reject('Erro')
             }else{
                 resolve('resolvido com sucesso')
             }

        }, 3000)

    })
}


async function teste2(){
    await teste().then((res)=>{
        alert(res)
    })
    alert('olá, função assincrona')
}

teste2() //ESSA FUNÇÃO SÓ VAI SER EXECUTADA QUANDO A teste FOR