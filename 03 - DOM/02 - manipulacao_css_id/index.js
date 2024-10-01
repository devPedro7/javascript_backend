//PODEMOS MANIPULAR NOSSOS ELEMENTOS HTML E CSS PELO O id QUE ELES POSSUEM!

var elemento = document.getElementById('box')

elemento.style.width = 100
elemento.style.height = 100 
elemento.style.backgroundColor = 'red'
elemento.innerHTML = 'teste'
//alert(elemento.innerHTML)