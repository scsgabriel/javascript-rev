//Faz a mesma coisa que o test(), porém retorna um objeto com alguma informações além do true ou false
/* 
    informações:
    índice, input, grupo
*/
//ele não retorna false, retorna null se não encontrar

let numeros = /\d/;
console.log(numeros.exec("tem um número 100 aqui"));
console.log(numeros.exec('apenas string de letras'));