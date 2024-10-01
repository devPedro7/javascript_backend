//spread É UMA FUNÇÃO JAVASCRIPT QUE PERMITE JUNTAR ARRRAYS E OBJETOS UTILIZANDO A NOTAÇÃO: ...nomeArray OU nomeObjeto


const personName = [{
    nome:'Pedro'
    },
    {
        nome:'Lucas'
    },
    {
        nome: 'Ribeiro'
    }
]


let names = [...personName,{
        nome:'Manel'
}]
console.log(names);