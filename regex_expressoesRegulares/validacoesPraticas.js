//validando domínios com regex

console.log("Validando domínio com regex");
let dominio = /[?www].\w+\.com.br|.com/; //o www é opcional por causa do operador Question
console.log(dominio.test("www.google.com.r"));
console.log(dominio.test("www.codandoprachuchu.com.br"));
console.log(dominio.test("codandoprachuchu.com"));
console.log(dominio.test("www.codandoprachuchu"));
console.log();

//validando e-mail com regex
console.log("Validando e-mail com regex");
let email = /\w+@+\w+\.\w+/;
console.log(email.test("gabriel@gmail.com")); //true
console.log(email.test("gabrielgmail.com")); //false 
console.log(email.test("gabriel@gmail")); //false
