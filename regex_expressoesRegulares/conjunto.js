//conjunto de caracteres
//no regex é possível identificar se existem números numa string
const regex1 = /[0-9]/; //ele verifica números que que começam com 0 ao infinito e de 9 ao infinito
//resumindo... ele verifica se existe um número
//e retorna 'true' ou 'false'

console.log(regex1.test("Exite o número 60?")); //existe o número 60 - retorna true
console.log(regex1.test("Exite o número 999990?")); //existe o número 999990 - retorna true
console.log(regex1.test("Exite o número 0238472398470?")); //existe o número 0238472398470 - retorna true
console.log(regex1.test("Exite o número 10000?")); //existe o número 10000 - retorna true
console.log(regex1.test("Existe o número cinco?")); //não existem números nessa string - retorna false

