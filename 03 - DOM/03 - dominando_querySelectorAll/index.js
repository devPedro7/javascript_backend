//querySelectorAll - retorna  uma lista de elementos presentes no documento (usando ordenação de profundidade, pré-ordenada e 
//transversal dos nós do documento) que coincidam com o grupo de seletores especificados. O objeto retornado é uma NodeList


var els = document.querySelectorAll('.testes .inside-testes') //ele pega os elementos que inserimos dentro dos parametros
//e se tiver mais de um com a mesma class, nós apenas inserimos a posicao dele [0] ou [1], que automaticamente o elemento
//passado será editado

els[0].style.color = 'red'