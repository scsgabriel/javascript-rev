//algumas funções de 'Object'

const pessoa = {
    nome: "Gabriel",
    idade: 26,
    profissao: "Desenvolvedor"
}

console.log(Object.keys(pessoa)); //vai retornar as 'chaves' que nesse caso são os atributos do objeto
console.log(Object.values(pessoa)); //vai retornar os valores dos atributos do objeto
console.log(Object.entries(pessoa)); //transforma o objeto numa lista de arrays
//retorna um array geral e dentro dele outros arrays menores (cada array contendo um atributo e um valor do objeto)

//Object.entries(pessoa) transforma o objeto pessoa numa lista de arrays
//com a notação ponto podemos chamar o forEach pra percorrer essa lista
Object.entries(pessoa).forEach(e => { //e = elemento
   console.log(e[0], e[1])  //0 representa a chave || 1 representa o valor
});
//o forEach percorre cada elemento do objeto pessoa

//da pra substituir o 'e' do forEach por um operador destructuring
Object.entries(pessoa).forEach(([chave, valor]) => { //substituição do 'e' pelo operador destructuring
    console.log(`${chave}: ${valor}`);    
});
//operador destructuring: porque o 'e' é o elemento do array, que contém key(chave) e value(value)
//o operador destructuring vai desestruturar os elementos do array, que nesse caso são key e value

//pra criar um novo atributo dentro do objeto pessoa
//e dar características a esse atributo.
Object.defineProperty(pessoa, 'dataDeNascimento', { //no parâmetro passamos o objeto e o atributo (dentro de aspas) que vai ser criado
    //ou modificado pelo método Object.defineProperty()
    enumerable: true, //pode ser listada? pode
    writable: false, //pode ter seu valor alterado? não (funciona parecido com o freeze)
    value: '01/12/2001' //valor no novo atributo criado
})
console.log(pessoa); //essas características são: o atributo pode pode ser listado e não pode ser modificado
//criar atributos dessa forma é importante pra ter um maior controle sobre os dados

//método que transfere atributos e valores --> Object.assign();
const objetoQueRecebe = {};
const a = {nome: "Gabriel"};
const b = {idade: 26};
const c = {nome: "Jeremias"}
Object.assign(objetoQueRecebe, a, b); //o primeiro parâmetro é o objeto que recebe 
//a partir do segundo parâmetro, todo objeto que for passado vai ser copiado pro objeto do 1° parâmtro
console.log(objetoQueRecebe);

//se objetos com mesmo atributo ou valor forem passados, eles sobrescreverão o objeto anterior
//ex
Object.assign(objetoQueRecebe, a, b, c); //o objeto 'c' tinha um atributo 'nome', igual o objeto 'a'
//como ele foi colocado depois nos parâmetros, o 'nome' do objeto 'c' sobrescreveu o 'nome' do objeto 'a'
console.log(objetoQueRecebe); 

