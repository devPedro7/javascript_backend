//AGORA VAMOS AVANÇAR COM ORIENTAÇÃO A OBJETOS, VAMOS VER OS CONCEITOS DE CLASSE.

//CLASSE É UMA NOVA FUNCIONALIDADE NO JAVASCRIPT, ANTES UTILIZAVAMOS AS FUNÇÕES PARA TRABALHAR COM ORIENTAÇÃO A OBJETOS
//PARA CRIAR UMA CLASSE NÓS DEVEMOS CRIAR O ARQUIVO COM A PRIMEIRA LETRA MAIÚSCULA E NO ARQUIVO, INSERIR O NOME class + NOME DA CLASSE
//COM A PRIMEIRA LETRA MAIÚSCULA SEGUIDO DE {}

//CRIANDO A CLASSE ANIMAL
export class Animal {
    constructor(nome, classificacao) {
        this.nome = nome;
        this.classificacao = classificacao;
    }
}


