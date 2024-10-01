//evento para mostrar o texto quando clicar no ver mais (spam)

document.querySelector('.conteudo span').addEventListener('click', ()=>{
   var conteudo = document.querySelector('.conteudo p')

   if(conteudo.classList.contains('mostrarConteudo')){
       alert('Esconder conteúdo')
       conteudo.classList.remove('mostrarConteudo')
   }
   else{
        conteudo.classList.add('mostrarConteudo')
        alert('Mostrar conteúdo')
   }
})