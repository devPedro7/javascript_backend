//PODEMOS REALIZAR ANIMAÇÕES COM O JAVASCRIPT + CSS

//EXEMPLO: NO HTML EXISTE UMA DIV COM O NOME DE  BOX, E NO CSS APLICAMOS O ESTILO, PORÉM GOSTARIA DE QUE ESSA CAIXA ANDASSE 
//90px PARA FRENTE. 

//PODEMOS FAZER DA SEGUINTE FORMA:
//CRIAR UM NOVO SELETOR ONDE NO CSS ELE IRÁ RECEBER A PROPIEDADE TRANSICTION E EDITAREMOS O COMPORTAMENTO COM EVENTOS NO JAVASCRIPT

var box = document.querySelector('.box') //SELECIONAMOS A CLASSE DA BOX

setTimeout(()=>{
    box.classList.add('anima')
}, 2000) //nesta função ele executa tudo o que está dentro do seu escopo UMA VEZ e você passa o momento em milisegundos

//FAZENDO A MESMA COISA ATRAVÉS DE UM EVENTO
/*box.addEventListener('click',()=>{
    box.classList.add('anima_volta')
}) quando clicar ele irá inserir uma classe que contém seus efeitos*/ 


setTimeout(()=>{
    box.classList.add('anima_volta')
}, 3000)
