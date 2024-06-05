//regex = regular expression
//conceitulmente, regex serve pra validar strings, números e caracteres especiais, além de espaços.

//existe pra verificar se algo existe na string ou não.. e retorna 'true' ou 'false'
//existem 2 padrões de regex: objeto e barra barra //

//expressões regulares como objetos precisam ser instanciadas
//a instanciação é feita com o new RegExp() e dentro dos parênteses é colocada a string que vai ser procurada dentro de outras strings


//string --> verifica se uma palavra existe dentro de uma string
//1° forma de criar o regex (objeto): RegExp()

const regex1 = new RegExp('bola'); //padrão regex como um objeto
console.log(regex1.test("tem bola")); //a palavra 'bola' existe nesse teste, logo o retorno é 'true'
console.log(regex1.test("não tem")); //não existe a palavra bola nessa string.. logo o retorno é 'false'

//2° forma de usar o regex (barra barra //): /a string que vai ser procurada/
const regex2 = /dia/; //padrão regex barra barra
console.log(regex2.test("bom dia")); //vai encontrar "dia" e retornar 'true'
console.log(regex2.test("boa noite")); //não vai encontrar "dia" e vai retornar 'false'

//a string pode tá no meio de uma bagunça de caracteres.. se a palavra existir, ele vai retornar 'true'
//exemplo

let exemplo = "sdsdsdsdsd4455465656jesus30493049304dfdfedf";
const regex3 = /jesus/;
console.log(regex3.test(exemplo)); //vai retornar 'true', porque dentro da variável "exemplo" existe a palavra "jesus", em meio a bagunça da string