//PODEMOS ACESSAR NOSSOS ELEMENTOS HTML AO INVÉS DE ESTAR ESCREVENDO SCRIPTS NELES.
//APENAS INSERIR O ATRIBUTO ' src ' E APONTAR PARA O NOME DO ARQUIVO JAVASCRIPT

//MANIPULAÇÃO BÁSICA DOS DOCUMENTOS HTML:

//SELECIONAR TODOS OS <p> EXISTENTES NO DOCUMENTO E PEGAR O PRIMEIRO:
var paragrafo = document.getElementsByTagName('p')

//alert(paragrafo.length)//RETORNA TODOS OS ELEMENTOS DA TAG <p>

//OS ELEMENTOS HTML SÃO CONSIDERADOS OBJETOS E PODEMOS MANIPULÁ-LOS:
//alert(paragrafo[0].innerHTML)//O INNER HTML SERVE PARA MOSTRAR O VALOR DENTRO DO ELEMENTO E MANIPULAR TAMBÉM.
//SE EU TIVESSE MAIS DE UM ELEMENTO, EU PODERIA MOSTRAR OS DIFERENTES PARÁGRAFOS

//MODIFICANDO O VALOR
paragrafo[0].innerHTML = 'Elemento manipulado via JS!'
//alert(paragrafo.innerHTML)