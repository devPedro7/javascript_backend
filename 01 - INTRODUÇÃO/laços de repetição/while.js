//OS LAÇOS DE REPETIÇÃO SERVEM PARA FACILITAR CHAMADAS REPETIDAS DE UM CÓDIGO, POIS EM VEZ DE IRMOS CHAMANDO DE UM POR UM 
//MANUALMENTE, UTILIZAMOS OS LAÇOS PARA FAZER ISSO POR NÓS.

//WHILE - VAI RODAR UM TRECHO DE CÓDIGO QUE VOCÊ INSERIR SE A CONDIÇÃO PRA ELE ACONTECER, FOR VERDADEIRA
var contador = 0
while(contador < 6){ //LEMOS A CONDIÇÃO - ENQUANTO
    console.log(`Contagem ${contador}`);
    contador++ //INCREMENTANDO +1 NA VARIÁVEL CONTADOR
}

//WHILE COM FUNÇÃO
function printarConsole(){
    console.log('Olá');
}

var cont = 0

while(cont < 5){
    printarConsole()

    cont++
}