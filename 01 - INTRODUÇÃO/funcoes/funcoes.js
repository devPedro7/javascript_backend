//FUNCOES SÃO TRECHOS DE CÓDIGOS QUE PODEMOS CHAMAR A QUALQUER MOMENTO NO CÓDIGO

//PARA DECLARAR UM FUNCÃO CHAMAMOS A PALAVRA: function + nome da função + () + {corpo da função}

//CRIANDO UMA FUNÇÃO
function printarConsole(){
    console.log('Chamada da função')
}

//PARA CHAMAR AS FUNÇÕES, DEVEMOS APENAS INSERIR SEU NOME + ()
printarConsole()

//AS FUNÇÕES PODEM RECEBER PARÂMETROS, QUE SÃO VALORES QUE ATRIBUIMOS DENTRO DOS PARÊNTESES QUE SERÃO PREENCHIDOS QUANDO FOMOS CHAMÁ-LAS
function cadastro(nome, idade){
    console.log("Este é o user cadastrado: " + nome);
    console.log("Sua idade é: " + idade);
}
cadastro('Pedro', 23)

//PODEMOS TER FUNÇÕES QUE APENAS RETORNAM ALGO
//QUANDO TEMOS UMA FUNÇÃO COM RETURN, ASSIM QUE ELA CAI NO RETURN, A EXECUÇÃO ACABA
function retornarNumero(numero){
    return numero
}
var num = retornarNumero(7)
console.log(num);

//FUNÇÃO COM VALIDAÇÃO CONDICIONAL
function validar(param){
    if(param === 1){
        return 'Ok'
    }
    else{
        return 'Fora da condição'
    }
}

var condicao = validar(7)
console.log(condicao);
