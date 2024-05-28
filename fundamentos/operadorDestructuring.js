//OPERADOR DESTRUCTURING COM OBJETOS

//esse operador retira valores de dentro de estruturas

//retirando valores de objetos com o operador destructuring
const pessoa = {
    nome: "Jose",
    idade: 20,
    endereco: {
        rua: "rua das familiares",
        numero: 503
    }
}

console.log(pessoa);

//operador destructuring
const {nome, idade} = pessoa; //retirando dados do objeto pessoa
//nome e idade agora são variáveis válidas, copiadas de dentro do objeto 
//por exemplo:

console.log(nome);
console.log(idade);

// --> destructuring com chaves: extração de objetos
// --> destructuring com colchetes: extração de arrays

//também é possível usar esse operador pra extrair valores de objetos que estão dentro de outros objetos
const {endereco: {rua, numero}} = pessoa; //retirando dados do objeto endereço que tá dentro do objeto pessoa
console.log(rua);
console.log(numero);

//OPERADOR DESTRUCTURING COM ARRAYS

//geralmente usado pra múltiplas atribuições de valores às variáveis

const [a, b, c] = [5, 50, 80]  
console.log(a, b, c); //a, b, c (que estão dentro do operador destructuring, recebem os valores do array)
