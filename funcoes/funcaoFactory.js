//function factory (função fábrica) é uma função que retorna um objeto
//o intuito dela é criar novos objetos, basicamente

//factory simples
console.log("Criando pessoas com Factory Function: ");
function criarPessoa(){
    return { //retorna um objeto (chave/valor)
        nome: "Gab",
        idade: 26,
        emprego: "Programador"
    }
}

console.log(criarPessoa());
console.log();
//-------------------------------------------------------------------------

console.log("Criando produtos com Factory Function: ");
let produtos = []; //criei um array pra receber os produtos na medida em que os produtos forem sendo criados

function criarProduto(nome, preco, desc){ //classe factory | desc = desconto

    return { //todo objeto que for criado, será criado com esses atributos (nomne, preco e precoComDesconto)
        nome: nome,
        preco: "R$ " + preco,
        precoComDesconto: "R$ " + (preco - desc) 
    }
    
}

produtos.push((criarProduto("Computador", 1000, 100))); //acrescenta ao array um objeto 'produto' com: nome, preco e preço com desconto
produtos.push((criarProduto("Teclado", 350, 39)));
produtos.push((criarProduto("Mouse", 150, 25)));
for(i in produtos){
    console.log(produtos[i]);
} //imprime todos os produtos da lista



