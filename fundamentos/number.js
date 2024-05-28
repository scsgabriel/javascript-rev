//saber se um numero é inteiro ou não

const numero1 = 5;
console.log(Number.isInteger(numero1)); //retorna um booleano

//controlando as casas decimais de tipos numéricos flutuantes

const peso1 = 1;
const peso2 = 2;

const nota1 = 9.871
const nota2 = 6.871

const resultado = nota1 * peso1 + nota2 * peso2;
const media = resultado / (peso1 + peso2);
console.log(media);

//pra controlar a quantidade de casas decimais, usamos a função toFixed() e dentro dela colocamos o limite de casas decimais
console.log(media.toFixed(2));

//transformando número em String
console.log(media.toString());

//transformando tipo numero em binário
console.log(media.toString(2)); //o número 2 dentro dos parênteses faz a função retornar um valor binário

