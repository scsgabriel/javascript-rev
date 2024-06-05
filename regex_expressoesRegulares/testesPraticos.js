//eu consigo utilizar regex pra validar se a string tem pelo menos 4 números 
let ano = /\d\d\d\d/;
console.log(ano.test("2050")); 
console.log(ano.test("letras")); 

//se eu quiser limitar a validação a realmente 2 caracteres, é possível através do length.
console.log(ano.test("2024") && "2024".length == 4); //vai retornar true porque o ano tem 4 caracteres 
console.log(ano.test("20").length == 2); //vai retornar false porque o ano tem 4 caracteres e não 2
console.log();


//consigo verificar se uma variável tem pelo menos 3 letras ou 3 números
let letras = /\w\w\w/;
console.log(letras.test("ted"));
console.log(letras.test(232));
console.log(letras.test(20));
console.log(letras.test("pé"));

