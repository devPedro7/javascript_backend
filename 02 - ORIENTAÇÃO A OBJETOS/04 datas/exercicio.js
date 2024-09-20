//CALCULE A DIFERENÇA DE DATAS

let data1 = new Date('09/19/2024')
let data2 = new Date('09/21/2024')



console.log(data1.getTime()); //PEGANDO OS MILISEGUNDOS

//calculando a diferença
var diferencaDatas = (data2.getTime() - data1.getTime()) / (1000 * 3600 * 24)

console.log(diferencaDatas);

//O CALCULO PARA PEGAR A DIFERENÇA É DIVIDIR POR MILISEGUNDOS (1000), MULTIPLICAR PELA QUANTIDADE DE SEGUNDOS EM 1 HORA (3600)
// E MULTIPLICAR PELA QUANTIDADE DE HORAS NO DIA (24). E AÍ SIM CONSEGUIMOS A DIFERENÇA!!!

