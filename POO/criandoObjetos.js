//Resumo: formas de criar objetos

//1° forma de criar objetos:
//criando a partir da notação literal (usando as chaves)
const objeto1 = {
    nome: " ",
    tipo: " ",
    data: 101010
} 
console.log(objeto1 + "\n");
//-----------------------------------------------------------------------------------------------------

//2° forma de criar objetos: 
//criando a partir de uma instanciação (não precisando declarar chave valor)
const objeto2 = new Object; //sintaxe
objeto2.nome = "teste";
objeto2.idade = 50
console.log(objeto2 + "\n"); //e partir do objeto eu vou jogando dentro dele atributos e funcionalidades
//-----------------------------------------------------------------------------------------------------

//3° forma de criar um objeto: 
//usando functions constructors
function FuncaoConstrutora(nome, preco, desconto){
    this.nome = nome //o 'this' deixa o atributo visível globalmente (atributo fica PÚBLICO)
    this.getPrecoComDesconto = () => {
        return "R$ " + preco * ( + 1 - desconto);
    }
    //preco e desconto não estão acessíveis globalmente, porque não foram declarados com o 'this'
}
//como dentro da função construtora foram passados os atributos do objeto (1 público e 2 encapsaulados)
//vamos instanciar o objeto com os parâmetros que a função construtora pede

const produto1 = new FuncaoConstrutora("Rádio", 50, 0.5); //percentual sempre é começando do 0.. 10% é 0.1 | 1% é 0.01
console.log(produto1.getPrecoComDesconto());
//na forma como foi feito, apenas this.nome é público.. ou seja, apenas ele pode ser acessado e alterado em qualquer parte do programa
//enquanto 'preco' e 'desconto' estão encapsulados.
const produto2 = new FuncaoConstrutora("TV", 1000.99, 0.10);
console.log(produto2.getPrecoComDesconto());
console.log();
//-----------------------------------------------------------------------------------------------------

//4° forma de criar um objeto:
//usando a function factory (fábrica de objetos) 
//dentro da function factory temos o 'return' sempre!! ele quem vai retornar um objeto com chave e valor
function criarFuncionario(nome, salario, faltas){
    return { //retorna o objeto
        nome,
        salario,
        faltas,
        getSalario(){
            return ((salario / 30) * (30 - faltas));
        }
    }
}
//não precisamos usar o new pra instanciar objetos usando a function factory

const funcionario1 = criarFuncionario("Alfredo", 2000, 4);
const funcionario2 = criarFuncionario("Joaquim", 4500, 7);
console.log("R$ " + funcionario1.getSalario().toFixed(2), "\nR$ " + funcionario2.getSalario().toFixed(2));
console.log();
//-----------------------------------------------------------------------------------------------------

//5° forma de criar um objeto: 
//usando o "create", que é uma function que pertence a Object
const empresa = Object.create(null);
empresa.nome = "Google";
empresa.end = "United States of American";
empresa.tipo = "Big Tech"
console.log(empresa);
console.log();
//-----------------------------------------------------------------------------------------------------

//6° forma de criar objetos:
//Pelas classes
class Pessoa{
    constructor(){
        this.nome = "Joaozinho",
        this.idade = 10 + " " + "anos"
    }
}

const pessoa1 = new Pessoa();
console.log(pessoa1);

//Também podemos criar objetos com o JSON (forma de pegar arquivos de texto e transformar em um objeto)
