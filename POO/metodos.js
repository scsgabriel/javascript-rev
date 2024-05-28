//metodo assign copia as propriedades de um objeto pra outro

let objeto1 = {
    nome: "gabriel",
    idade: 16
}

let objeto2 = {
    endereco: "rua das papoulas",
    numero: 5
}

Object.assign(objeto2, objeto1)
//leitura da sintaxe: objeto 2 vai receber as propriedades do objeto 1 

console.log(objeto2);

//keys pega a chave do objeto
//ele retorna um array com as chaves dentro
console.log(Object.keys(objeto1));

//mutability = criar um objeto idêntico ao outro
//ele não se torna apenas idêntico.. mas ele também está ligado ao objeto original
//toda alteração no objeto original refletirá no objeto mutado
let pessoa = {
    nome: "Kimetsu"
}

let et = pessoa; //mutando o objeto et do objeto pessoa

console.log(et); //et agora é um objeto idêntico, com as mesmas chaves e atributos do objeto pessoa
console.log(et === pessoa); //é estritamente igual