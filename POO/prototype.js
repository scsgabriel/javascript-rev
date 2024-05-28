//prototype --> um objeto é protótipo de outro

//Object é o prototype de todo objeto novo sem antecedentes
//existem métodos que os objetos podem usar por causa do Object

//se um objeto é criado prototype de outro, caso o programa procure nele algum atributo e não encontre
//o programa irá procurar esse atributo no prototype dele, até encontrar 
//chamaos isso de FALLBACK

const pessoa = {
    nome: "Gabriel",
    idade: 10
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
//esse método verifica se existe uma propriedade no objeto
console.log(pessoa.hasOwnProperty('nome')); /* o objeto pessoa não tem o método hasOwnProperty(), porém..
o javascript faz um fallback e busca esse método lá no Object */
//fallback --> o javascript não acha num objeto, ele volta um objeto prototype até encontrar.

//logo, da pra usar esse método porque o objeto pessoa tem como prototype o Object, na hierarquia (Object é o objeto pai nesse caso)

let pessoaNova = Object.create(pessoa); //o objeto pessoaNova foi criado a partir do objeto pessoa
//logo, pessoa é o prototype de pessoaNova (objeto pai)
console.log(pessoaNova.hasOwnProperty('nome')); // o hasOwnProperty só verifica se as propriedades diretas do objeto
console.log('nome' in pessoaNova); //o "in" lewhatsva em consideração os propriedades diretas, mas também verifica os prototypes do objeto

//é possível criar um método do objeto -- ele é criado atrelado ao prototype do objeto
function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade
    //aqui dentro eu poderia criar o método "andar", mas vou criar fora, usando o prototype
}

Pessoa.prototype.andar = function(){ //a function "andar()" está atrelada ao prototype pessoa
    //e todo objeto nascido de pessoa poderá usar a function "andar()"
    return console.log("andando");
};

let pessoaComum = new Pessoa("Gabriel", 26);
pessoaComum.andar();

//Symbol --> é uma forma de criar uma propriedade de objeto CONSTANTE
function Cachorro(patas){
    this.patas = patas
}
let patas = Symbol();
Cachorro.prototype[patas] = 4;
let spitz = new Cachorro(patas);
//console.log(spitz.patas);  ---> não da pra acessar uma propriedade alterada pelo Symbol assim
//acessando propriedade criada com o Symbol:
console.log(Cachorro.prototype[patas]); //acessando diretamente da classe
//ou se eu quiser acessar a pripriedade do objeto criado a partir de Cachorro:
console.log(spitz[patas]); //acessando do objeto