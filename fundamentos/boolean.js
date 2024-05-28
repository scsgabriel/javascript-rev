//booleans literais

let teste = true;
console.log(teste);

teste = false;
console.log(teste);

//exclamação => inverte o valor booleano
//! inverte | !! mantém o valor booleano original
//Exemplos
console.log();
console.log("Valor true que virou --> " + !true); //vai imprimir false porque ! inverte o valor booleano
console.log("Valor false que virou --> " + !false); //vai imprimir true porque ! inverte o valor booleano

//Duas exclamações mantém o sentido original do boolean
//Exemplos
console.log();
console.log("Valor 'true' continuou --> " + !!true); 
console.log("Valor 'false' continuou --> " + !!false);

//Todo valor que recebe 'uma exclamação' é FALSE | todo valor que recebe 'duas exclamações' é TRUE
console.log();
teste = 50;
console.log(!teste); //vai imprimir false
console.log(!!teste); //vai imprimir true

//Todos os números inteiros, positivos ou negativos, são "true"
//Com exceção do 0 
//Exemplos

console.log();
teste = 2;
console.log(!!teste); //vai imprimir true
teste = -10;
console.log(!!teste); //vai imprimir true
teste = 0;
console.log(!!teste); //vai imprimir false, porque o valor original do 0 é false.

//RESUMINDO, OS VALORES VERDADEIROS
console.log("\nValores verdadeiros: ");
console.log(!!true); //literal true retorna true
console.log(!!3); //inteiros retorna true
console.log(!!-3); //inteiros negativos retorna true
console.log(!!" "); //espaços na String retorna true
console.log(!!"texto"); //qualquer texto ou caracter (String) retorna true
console.log(!![]); //arrays retorna true
console.log(!!{}); //objetos retorna true
console.log(!!Infinity); //tipo infinito retorna true
console.log(!!(teste = 10)); //atribuição de valor retorna true (com exceção dos valores que retornam 'false')

//RESUMINDO, OS VALORES FALSOS:
console.log("\nValores falsos: ");
console.log(!!false); //tipo literal false retorna false
console.log(!!0); //zero retorna false
console.log(!!""); //String vazia retorna false
console.log(!!null); //nulo retorna false
console.log(!!NaN); //'não há número' retorna false
console.log(!!undefined); //underfined retorna false

//VALORES FALSOS E VERDADEIROS COM OPERADORES CONDICIONAIS
console.log();
console.log("Operadores condicionais: ");
console.log(!!(0 || null || NaN || "" || "Opaaa.") ); //Se apenas um for true, ele retorna true.
console.log(!!(0 && null || NaN )); //todos retornam falsos, então o retorno dessa sequência é false 
//Se retirar o !! o console.log imprime o primeiro valor true da lista.
console.log(0 || null || NaN || "" || "Opaaa."); //que nesse caso é o "Opaaa."

//Exemplo de lógica
let nome = undefined;
console.log(nome || "Não há nome nenhum."); //ele imprime o próximo true. 
console.log(nome); //e se tiver o valor falso sozinho, ele retorna o valor false

//Null --> o valor é nulo, existe, mas não aponta pra nada. (Não aponta pra nenhum endereço de memória)
//Underfined --> o valor não foi definido

console.log();
console.log("Valores Underfinde e Null");
let produto = {}; //objeto produto declarado sem propriedades
console.log(produto); //retorna um objeto vazio
console.log(produto.preco); //o atributo preço não existe.. o retorno é 'underfined'.. nem o atributo, nem o valor foram declarados.
produto.preco = 5.80; //atributo e valor declarados
console.log(produto); //retorna o atributo do objeto e o seu valor
console.log(produto.preco); //retorna o valor do atributo 'preco'
produto.preco = null;
console.log(produto); //o valor do atributo foi definido como nulo
