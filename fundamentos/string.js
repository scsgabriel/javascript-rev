//String
const nome = "Benny";
console.log(nome.charAt(0)); //essa função pega um caracter da String pelo índice dele
console.log(nome.charCodeAt(2)); //essa função me da o valor do elemento na tabela unicode
console.log(nome.indexOf("y")); //essa função diz em qual índice está o elemento 
console.log(nome.substring(1)); //essa função pega todo o restante da string a partir do índice informado no parâmetro
console.log(nome.substring(0, 3)); //essa mesma função também pode pegar apenas os elementos que eu quero entre um índice e outro;
console.log(nome.replace("y", "i")); //essa função substitui um caracter por outro;
console.log(nome.split("")); //corta os elementos e coloca cada um deles dentro de um array;

//Tamplate String
let concatenacao = "Gabriel";
console.log(`
Olá!
${concatenacao}, bom dia.
Tudo bem? `);  //ele considera cada espaço, ponto, etc. que eu fizer entre as crases.

console.log(`\nO resultado da soma 5 + 5 é: "
${5 + 5}.
Resultado final da soma.`); //da pra usar tudo dentro de ${}, sendo variáveis, condicionais, loops, operações aritiméticas, etc. TUDO!

    