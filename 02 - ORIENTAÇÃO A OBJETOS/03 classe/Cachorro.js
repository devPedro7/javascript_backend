// No arquivo Cachorro.js
import { Animal } from "./Animal";

class Cachorro extends Animal {
    constructor(nome, classificacao) {
        super(nome, classificacao);
    }
}

let cachorro = new Cachorro('Neguinha', 'mamifero');

console.log(cachorro.nome);

//AQUI NÓS ACESSAMOS OS ATRIBUTOS DE ANIMAL, QUE EM ORIENTAÇÃO A OBJETOS É CONHECIDO COMO CLASSE MÃE E NÓS EXTENDEMOS A CLASSE QUE 
// ESSE TIPO DE AÇÃO SE CHAMA HERANÇA, NÓS HERDAMOS OS ATRIBUTOS E MÉTODOS DA CLASSE QUE NÓS EXTENDEMOS 

