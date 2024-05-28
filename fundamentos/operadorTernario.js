//Usando arrow function

const resultado = (nota) => nota >= 7 ? "Aprovado" : "Reprovado";
            //variável  //condição      true           false
//o perador ternário funciona assim: nota é maior ou igual a 7? se sim: retorna "Aprovado" : se não, retorna "Reprovado".  
console.log(resultado(6)); //esse valor vai pra variável nota dentro do parâmetro

//o operador ternário é uma forma mais simples de fazer o que faria um if else

//outra forma de utilizar o operador ternário é retornando o seu valor pra dentro de uma variável

let nota1 = 8;
const resultado2 = nota1 >= 7 ? "aprovado" : "reprovado"; 
console.log(resultado2); //a variável vai retornar o resultado do operador ternário, nos casos de true ou false
