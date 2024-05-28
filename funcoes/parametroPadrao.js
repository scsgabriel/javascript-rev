//formas de estabelecer um valor padrão nos parâmetros da function, caso nenhum valor seja passado

//primeira (mais antiga de se fazer)
function soma(a, b, c){
   a = a || 1; //a = a é o mesmo que dizer que 'a' tá recebendo o parâmetro que foi informado.. se ele não receber, recebe 1 como padrão 
   b = b || 1; //o valor padrão é definido do lado direito do operador lógico ' ou || ' 
   c = c || 1;
   return a + b + c;
} //essa forma, ainda que antiga, ainda é muito usada pra situações que não envolvem tipos numéricos.

//testando
console.log(soma()); //sem passar nenhum parâmetro ele recebe 1 como valor padrão nos três parâmetros (a, b, c) e vai resultar em 3
console.log(soma(5)); //ele somou 5 (passado pro parâmtro 'a') com 1 e 1 que não foram definidos e assumiram o valor padrão
console.log(soma(5, 5)); //'c' não foi definido e assumiu o valor padrão --> 5(a) + 5(b) + 1(valor padrão)
console.log(soma(5, 5, 5)); //a, b, c receberam os parâmetros
console.log(soma(0, 0, 0)); /* não vai funcionar.. zero por natureza retorna false.. dentro da function eu tô usando 
o operador lógico "ou || ".. logo ele vai retornar true ou false usando zero.. 
com números não é a melhor estratégia pra definir valores padrões nos parâmetros das functions */
console.log();

//---------------------------------------------------------------------------------------------------------------------------------
//segunda forma de fazer --> usando o operador lógico "diferente" + o underfined + o operador ternário
//sintaxe do operador ternário --> pergunta ? true : false (o retorno do operador ternário depende da pergunta)
 function soma2(a, b, c){
    a = a != undefined ? a : 1; 
    //'a' é diferente de undefined? se 'true' ele pega o valor de 'a' no parâmetro | se 'false' ele pega o valor padrão '1'
    b = b != undefined ? b : 1;
    c = c != undefined ? c : 1;
    return a + b + c; //retorna a soma dos três parâmetros
 }

console.log(soma2()); 
console.log(soma2(5)); 
console.log(soma2(5, 5)); 
console.log(soma2(5, 5, 5)); 
console.log(soma2(0, 0, 0)); //isso corrige o problema do zero..
//porque a lógica é: é diferente de undefined? true! então ele pode receber o zero como number pra executar a function, e não como retorno lógico
//como acontece no primeiro exemplo 
console.log();

//---------------------------------------------------------------------------------------------------------------------------------
//terceira forma de fazer --> usando o arguments + o operador ternário
function soma3(a, b, c){
    a = 0 in arguments ? a : 1; //sintaxe: índice + in arguments + operador ternário
    //logo.. 'a' é igual ao índice zero 'no = in' array 'arguments'? se 'true' pegue o valor de 'a' | se 'false' pegue o valor padrão.
    //'a' só seria 'false' se nenhum valor no parâmetro fosse passado pelo 'usuário' quando a function soma3() é chamada.
    b = 1 in arguments ? b : 1;
    c = 2 in arguments ? c : 1;
    return a + b + c;
}

console.log(soma3(), soma3(5), soma3(5, 5), soma3(5, 5, 5), soma3(0, 0, 0)); //imprimindo as functions na mesma linha 
console.log();

//---------------------------------------------------------------------------------------------------------------------------------
//quarta forma de fazer --> usando "Não é um número" como condição booleana + operador ternário
function soma4(a, b, c){ 
    a = isNaN(a) ? 1 : a; //sintaxe: 'a' não é um número? se 'true' retorne o valor padrão '1' | se 'false', ele é um número, então retorne 'a'.
    b = isNaN(b) ? 1 : b;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}
console.log(soma4(), soma4(5), soma4(5, 5), soma4(5, 5, 5), soma4(0, 0, 0)); //imprimindo as functions na mesma linha 
console.log();

//---------------------------------------------------------------------------------------------------------------------------------
//quinta forma de fazer --> é utilizando os recursos do javascript adicionados com o ecma script 2015
//ele permite criar os parâmetros padrões já dentro dos parênteses da function, sem a necessidade de criar uma lógica pra isso.
function soma5(a = 1, b = 1, c = 1){ //os valores padrões já são defidos aqui.. no caso, se o parâmetro não for passado no programa
    //a, b, c já têm o valor '1' como padrão estabelecido já na criação da function soma5();
    return a + b + c;
}

console.log(soma5(), soma5(5), soma5(5, 5), soma5(5, 5, 5), soma5(0, 0, 0)); //imprimindo as functions na mesma linha 
console.log();
