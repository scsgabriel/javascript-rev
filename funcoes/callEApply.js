//o que diferencia o call do apply é a forma de chamar os parâmetros
//no call() passamos primeiro o contexto(o objeto) e depois os parâmetros
//no apply() é a mesma coisa, mas os valores dos parâmetros precisam estar dentro de colchetes (array)

function getPreco(imposto = 0, moeda = "R$ "){
    return moeda + (this.preco) * (1 - this.desconto) * (1 - imposto);
    /*a lógica é: preco (1000) * 0,90 (que é o resultado de (1 - this.desconto), é igual a 900 --> 1.000 * 0,90 = 900,
     ou seja, os 10% de desconto aplicados*/
     /* a mesma coisa no imposto.. desconto de 10% (0.10) vai ser igual a 90 reais de imposto, porque foi feito em cima de 900 
     (valor com o desconto aplicado)  */ 
    
}d

const produto = {
    nome: "Notebook",
    preco: 1000,
    desconto: 0.10,
    getPreco
}

console.log(getPreco()); //retorna um NaN porque a função precisa ser chamada a partir de um contexto // retorno: NaN
console.log(produto.getPreco()); //chamando o método através da função padrão
console.log(getPreco.call()); //vai retornar um NaN porque dentro do 'call()' não tem contexto e nem parâmetros passados
console.log(getPreco.call(produto, 0.10, "$ ")); // <-- nos parâmetros temos: contexto onde a função é chamada + parâmetros
//produto é o contexto
//0.10 e "$" são os parâmetros passados
console.log(getPreco.apply(produto, [0.20, "R$ "]));
//aqui os parâmetros tão sendo passados dentro de colchetes (porque se trata de um array)

//entender porque a lógica da porcentagem não tá sendo aplicada corretamente no desconto