//FOREACH É UMA FORMA DE PERCORRER ARRAYS DE UM JEITO MAIS LIMPO E PRÁTICO.
//BASTANTE UTILIZADO COM ARRAYS E OBJETOS.

let nomes = ['Pedro', 'Lucas', 'Ribeiro']

//UTILIZANDO O FOREACH PARA PERCORRER O ARRAY DE nomes
nomes.forEach((value, index)=>{
   console.log(`O valor do elemento é: ${value} `);
   console.log(`A posição do elemento é: ${index}`)   
})

//O foreach É UMA FUNÇÃO QUE RECEBE DOIS PARâMETROS, O index E O value
//DECLARAMOS ELE COM UMA ARROW FUNCTION
//A ORDEM DEVE SER O value PRIMEIRO E O index SEGUNDO

