//APRENDENDO REQUISIÇÃO COM fetch, ATUALMENTE MAIS UTILIZADO QUE O AJAX TRADICIONAL


//ESTRUTURA: GET
fetch('https://jsonplaceholder.typicode.com/todos/1')//AQUI PASSAMOS O ENDEREÇO DA API (URL)
.then(response => response.json()) //ARMAZENANDO A RESPOSTA DENTRO DO JSON
.then(json=> console.log(json))//POR ÚLTIMO PEGAMOS A RESPOSTA E JOGAMOS NO CONSOLE


//FAZENDO UMA URL DE POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',//TIPO DO METODO
    body: JSON.stringify({//CRIANDO O CADASTRO, CONVERTENDO PARA OBJETO
        title: 'Pedro Lucas',
        body:'Criando meu objeto',
        userId: 10
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
})
.then(response=> response.json())
.then(json=>console.log(json))//PRINTANDO A RESPOSTA DO INSERIDO COM SUCESSO