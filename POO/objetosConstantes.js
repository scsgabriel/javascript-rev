//objetos dentro de variávels apontam pra um endereço e não pra o valor que o objeto de fato possui
//por isso é possível, mesmo dentro de um const, trocar os valores de objetos
//porque o que de fato tá armazenado no const é a referência de endereço
//e não o objeto propriamente dito.. o endereço que aponta pra onde o objeto está armazenado

//exemplo
const pessoa = { 
    nome: "Gabriel"
}
console.log(pessoa);
pessoa.nome = "Harlequin";
console.log(pessoa); //fiz a troca do valor no atributo nome.. porém, o endereço dentro do const continua o mesmo

//se eu tentar mudar a referência de endereço do objeto (criando um novo objeto), aí sim o const não vai permitir
//exemplo

// --> pessoa = {nome: "Gertrudes"}; 

//vai dar erro de const, porque um novo objeto pede um novo endereçamento..
//e o endereço não pode mudar por estar dentro de um const

//formma de congelar um objeto pra que ele não sofra alterações nem em seu endereço, nem no objeto (valores e atributos)
Object.freeze(pessoa); //mudanças a partir daqui no objeto pessoa já não serão possíveis, porque Object.freeze congela o objeto
//e não permite nenhuma espécie de alterações nele
console.log("\nObject Freeze:");
pessoa.nome = "Testando a function Object.freeze(pessoa)"
console.log(pessoa); //o nome não foi alterado, como esperado.
//não é mais possível alterar, nem acrescentar ou excluir..
delete pessoa.nome;
console.log(pessoa);
pessoa.idade = 17;
console.log(pessoa);
//na prática o objeto, além do endereço, também se torna uma constante

//como criar um objeto constante desde o início:
const pessoaConstante = Object.freeze({nome: "Pessoa do objeto constante!"}); //nem a referência, nem o objeto podemn ser mexidos
console.log(pessoaConstante); 