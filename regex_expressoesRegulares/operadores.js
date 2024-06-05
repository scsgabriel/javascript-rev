//operador de negação ^
//esse operador nega caracteres isolados.. se a string tiver mais de 1 caracter, o return é true
let negacao = /[^a]/
console.log(negacao.test('a')); //o 'a' tá isolado.. o return será false
console.log(negacao.test('abc')); //existem mais caracteres além do a, a negação não vai funcionar.. o return será true
console.log();

//eu posso delimitar o que será negado.. e assim, mesmo se houver mais de um caracter, se estiver dentro do que foi delimitado, será negado

let negacaoDelimitada = /[^a-l]/ //delimita de uma letra até outra letra
console.log(negacaoDelimitada.test("faca")); //vai retornar false == faca tem todas as letras que estão delimitadas pra serem negadas, do 'a' ao 'l'
//se eu colocar do 'a ao z' ele nega todas as letras e só aceita números, carcteres especiais, etc.
console.log();

//operador plus --> o número pode se repetir infinitas vezes..
//o return só será falso se a string estiver vazia
let operadorPlus = /\d+/
console.log(operadorPlus.test("11111111111111111111111111111111111"));
console.log(operadorPlus.test("")); //sem nada vai retornar 'false'
console.log();

//operador question --> ?
//o caractere que vem antes da interrogação é opcional.. ou seja, se ele não estiver na string, o return ainda assim será true
let operadorQuestion = /Gabrie?l/;
console.log(operadorQuestion.test("Gabriel"));
console.log(operadorQuestion.test("Gabril")); //sem a letra 'e' ele também retorna true porque entende que o "e" não é obrigatório na string
console.log(operadorQuestion.test("Gabrie")); //agora se o caractere que falta for o que vem depois da interrogação, ele retorna false
console.log();

//Operador de ocorrência precisa = validador de quantidade de números
//Eu posso delimitar a quantidade de números que eu quero entre chaves

let cep = /\d{5}-\d{3}/; //é o mesmo que dizer: eu quero apenas números | na 1° parte de 4 a 5 números | na 2° parte apenas 4 números
console.log(cep.test("05986-133"));
console.log(cep.test("00000-000"));
console.log(cep.test("3285-13434"));
console.log(cep.test("12-133224"));

let telefone = /\(\d{2}\)\d{4,5}-\d4/; //validando um telefone
console.log(telefone.test("(83)38544-1445"));