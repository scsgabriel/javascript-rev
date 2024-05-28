//formas de atribuir valor aos objetos
//geralmente, se usa a notação 2 pontos pra atribuir valor a algum atributo do objeto
//porém é possível não usar 2 pontos quando já existe uma variável com valor e ela passa a integrar o objeto
//exemplo

let nome = "Gabriel";
let idade = 26;
let endereco = "Rua das ciências tecnológicas"

//se eu fosse criar tudo isso usando a notação 2 pontos, seria:
const pessoa = {
    nome: nome,
    idade: idade,
    endereco: endereco
} 
console.log(pessoa);
//uma forma simplificada de fazer a mesma coisa é:
const pessoa2 = {
    nome, 
    idade,
    endereco
}
console.log(pessoa2);
console.log();
//nos 2 objetos ele vai imprimir as mesmas informações

//também é possível usar o valor de uma variável pra se tornar um atributo, usando colchetes
//exemplo:
console.log("\n Notação usando colchetes: ");
let rua = "Avenida google"
let numero = 709;
const enderecamento = {[rua]: numero} //o valor na variável "rua" se tornou um atributo do objeto
//e "numero" passou a ser o seu valor
console.log(enderecamento);
//outra forma de fazer com um objeto já existente é:
enderecamento[rua] = numero;
console.log(enderecamento); //vai imprimir o mesmo resultado

//também há a forma simplificada de criar uma function dentro de um objeto
const exemplo = {
    falar: function(){ //forma antiga
        console.log("Forma antiga");
    }
}

const exemplo2 = {
    falar(){ //também poderia, no lugar de 'falar()' escrever 'function()', da no mesmo
        console.log("Forma nova.");
    }
}
exemplo.falar();
exemplo2.falar();