//Resumo da revisão: criação, instanciação, acesso, adição, manipulação, exclusão de objetos

//forma de instanciar um objeto: 
const produto = new Object

//formas de adicionar um atributo ao objeto

//notação ponto
produto.nome = "Conjunto de utensílios."
produto.preco = 50
console.log(produto.nome, "R$ " + produto.preco);
console.log('-------------------------------------------------------');

//por meio de colchetes
//o que estiver entre colchetes é o atributo
produto['marcaDoProduto'] = 'Tramontina' 
//é uma forma de acessar quando queremos buscar pelo nome do produto e não pelo nome da variável
//mas a forma mais usada é a 'notação ponto'
console.log(produto);
console.log('-------------------------------------------------------');

//pra deletar usamos o 'delete' antes do objeto
delete produto.preco;
console.log(produto);
console.log('-------------------------------------------------------');
//também da pra usar o 'delete' pra excluir dados entre colchetes
delete produto['marcaDoProduto']
console.log(produto);
console.log('-------------------------------------------------------');

//eu posso criar um objeto dentro de outro objeto
const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Gabriel",
        idade: "26",
        endereco: {
            logradouro: "Rua dos exemplos",
            numero: "8080"
        }
    },
    motoristas: [{ //forma de criar um array de objetos
        nome: "Ana",
        idade: 40
    }, 
    {
        nome: "Ray",
        idade: 42
    },
    {
        nome: "F. Cezar",
        idade: 50
    }],

    imprimirObjetos: function(motoristas){ //motoristas tá recebendo o objeto carro
        for(let i in motoristas){ //mas o 'for' itera apenas sobre o array 'motoristas' que tá dentro do objeto 'carro'
            console.log(motoristas[i])
        }
    }
}

//se eu usar o 'delete' pra excluir uma propriedade, TUDO o que tiver na propriedade será excluído.
//exemplo: 
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
carro.imprimirObjetos(carro.motoristas);
delete carro.motoristas //como eu apaguei motoristas e tudo dele foi excluído junto, o return é undefined
console.log(carro.motoristas); 