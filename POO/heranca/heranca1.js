//herança existe pra reutilização de códigos de um objeto pai em outros objetos filhos

//o conceito de herança em js tem a ver com os prototypes

const ferrari = {
    modelo: 'F40',
    velocidadeMax: 300
}

const volvo = {
    modelo: 'V50',
    velocidadeMax: 200
}

console.log(ferrari.__proto__); //o __proto__ diz quem é o prototype do objeto em questão (conceito de herança)
//quem é o objeto pai --> super objeto --> objeto prototype
//nesse caso ele vai retornar 'null' porque criei um objeto literal sem nenhuma herança de ninguém

//se eu procurar um atributo dentro do objeto ferrari, por exemplo, e ele não encontrar, o js vai tentar encontrar
//esse atributo dentro do prototype (objeto pai).. se ele não encontrar, retorna undefined 

//todo objeto criado aponta pra o Object.prototype, que é o último pai na hierarquia da herança
console.log(ferrari.__proto__ === Object.prototype); //vai retornar true porque o objeto ferrari tem relação de herança com o Object.prototype
console.log(volvo.__proto__ === Object.prototype);

//não existe nenhum prototype acima de Object.prototype.. e por padrão ele aponta pra null
console.log(Object.prototype.__proto__ === null); //vai retornar 'true'

//pra acessar o prototype de um objeto usamos: __proto__ (underline underline proto underline underline)
