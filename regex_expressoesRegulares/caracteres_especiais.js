/* 

/\d/ --> aceita qualquer número (incluindo números que vem como string)
/./ --> aceita qualquer caractere, MENOS quebra de linha
/\D/ --> aceita caracteres que NÃO SÃO números
/\s/ --> aceita qualquer caractere de espaço em branco, tab e quebra de linha 
/\S/ --> aceita caractere que NÃO SEJA quebra de linha (parece o regex de ponto )
/\w/ --> aceita caracteres alfanuméricos.. qualquer letra ou qualquer número, mas não aceita caractere especial e nem quebra de linha
/\W/ --> aceita caractere que NÃO SEJA alfanumérico


no regex, se algo vier com acento cirunflexo significa 'negação'
exemplo: 

*/
console.log("/\d/");
let regexd = /\d/;
console.log(regexd.test("Bom dia") + " = string com espaço.");
console.log(regexd.test(" ") + " = espaço");
console.log(regexd.test("Friday") + " = string sem espaços.");
console.log(regexd.test(20932093) + " = números.");
console.log(regexd.test("12345545") + " = string de números."); //ele também reconhece os números mesmo vindo com string
console.log(regexd.test("@#$%") + " = caracteres de símbolos.");
console.log(regexd.test("\n") + " = quebra de linha.");
console.log();

console.log("/\./");
let regexPonto = /./;
console.log(regexPonto.test("Bom dia") + " = string com espaço.");
console.log(regexPonto.test(" ") + " = espaço");
console.log(regexPonto.test("Friday") + " = string sem espaços.");
console.log(regexPonto.test(20932093) + " = números.");
console.log(regexPonto.test("12345545") + " = string de números."); 
console.log(regexPonto.test("@#$%") + " = caracteres de símbolos.");
console.log(regexPonto.test("\n") + " = quebra de linha."); //só não aceita quebra de linha
console.log();

console.log("/\D/");
let regexD = /\D/;
console.log(regexD.test("Bom dia") + " = string com espaço.");
console.log(regexD.test(" ") + " = espaço");
console.log(regexD.test("Friday") + " = string sem espaços."); //só aceita letras
console.log(regexD.test(20932093) + " = números.");
console.log(regexD.test("12345545") + " = string de números."); 
console.log(regexD.test("@#$%") + " = caracteres de símbolos.");
console.log(regexD.test("\n") + " = quebra de linha."); 
console.log();

console.log("/\s/");
let regexs = /\s/;
console.log(regexs.test("Bom dia") + " = string com espaço.");
console.log(regexs.test(" ") + " = espaço");
console.log(regexs.test("Friday") + " = string sem espaços."); 
console.log(regexs.test(20932093) + " = números.");
console.log(regexs.test("12345545") + " = string de números."); 
console.log(regexs.test("@#$%") + " = caracteres de símbolos.");
console.log(regexs.test("\n") + " = quebra de linha."); 
console.log();

console.log("/\S/");
let regexS = /\S/;
console.log(regexS.test("Bom dia") + " = string com espaço.");
console.log(regexS.test(" ") + " = espaço");
console.log(regexS.test("Friday") + " = string sem espaços."); 
console.log(regexS.test(20932093) + " = números.");
console.log(regexS.test("12345545") + " = string de números."); 
console.log(regexS.test("@#$%") + " = caracteres de símbolos.");
console.log(regexS.test("\n") + " = quebra de linha."); 
console.log();

console.log("/\w/");
let regexw = /\w/;
console.log(regexw.test("Bom dia") + " = string com espaço.");
console.log(regexw.test(" ") + " = espaço");
console.log(regexw.test("Friday") + " = string sem espaços."); 
console.log(regexw.test(20932093) + " = números.");
console.log(regexw.test("12345545") + " = string de números."); 
console.log(regexw.test("@#$%") + " = caracteres de símbolos.");
console.log(regexw.test("\n") + " = quebra de linha."); 
console.log();

console.log("/\W/");
let regexW = /\W/;
console.log(regexW.test("Bom dia") + " = string com espaço.");
console.log(regexW.test(" ") + " = espaço");
console.log(regexW.test("Friday") + " = string sem espaços."); 
console.log(regexW.test(20932093) + " = números.");
console.log(regexW.test("12345545") + " = string de números."); 
console.log(regexW.test("@#$%") + " = caracteres de símbolos.");
console.log(regexW.test("\n") + " = quebra de linha."); 
console.log();