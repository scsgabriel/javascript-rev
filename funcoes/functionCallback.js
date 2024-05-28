
//exemplo 1
console.log("Imprimindo callback com: índice + valor + estrutura do array: ");
const fabricantes = ["Ford", "Fiat", "Toyota"];

function imprimir(value, indice, arrayCompletoPercorrido){ //todo forEach percorre 3 parâmetros dentro do array
    console.log(indice, value, arrayCompletoPercorrido);
} 

fabricantes.forEach(imprimir); //ao chamar a function callback não é necessário usar parênteses
/*  o forEach acessa, em cada array: valor, índice e estrutura completa do array, exatamente nessa ordem */
//então a cada elemento do array, a function callback 'imprimir' pega: valor, indice e a estrutura do array e joga
//no console.log 

//se eu passar apenas um parâmetro na function de callback ele pega o valor.. se eu passar 2, ele pega valor e índice
console.log();

//exemplo2
console.log("Imprimindo callback com valor | índice + valor: ");
const alunos = ["Andressa", "Juninho", "Alessandra"];

function imprimir2(nome){
    console.log(nome);
}

alunos.forEach(imprimir2);
console.log();

//uma outra forma de fazer é criando uma function callback dentro for laço forEach
//exemplo 3
alunos.forEach(function(valor, indice){
    console.log(indice, valor);
}); //nesse exemplo vou imprimir valor e índice do array "alunos", a partir de uma nova function callback
console.log();

//também da pra usar uma arrow function como function callback
//exemplo4

console.log("Imprimindo callback em forma de arrow function: ")
alunos.forEach((valor, indice) => console.log(indice, valor)); //arrow function em sua forma reduzida com return implícito
console.log();
fabricantes.forEach((valor, indice) => console.log(indice, valor));

//toda vez que o forEach percorre um elemento, a function callback é disparada.
/* então: no índice zero a function foi disparada e pegou o valor e a chave do índice zero..
no índice 1 a mesma coisa.. e assim por diante. A cada evento do array o callback é disparado!! */

