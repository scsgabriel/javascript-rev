const soma = function (a, b) { //função armazenada em variável 
    return a + b;
}
console.log(soma(50, 50)); 

function subtracao(a, b){ //função tradiconal nomeada
    return a - b;
}
console.log(subtracao(100, 75));

const divisao = (a, b) => { //arrow function completa
    return a / b;
}
console.log(divisao(1000, 5));

const multiplicacao = (a, b) => a * b; //arrow function reduzida
console.log(multiplicacao(25, 25));

//----------------------------------------------

function calculaAMesmaCoisa(a, b){ //funcao que faz tudo de uma só vez (mas não de forma dinâmica)
    console.log((a + b), (a - b), (a * b), (a / b));
}  
calculaAMesmaCoisa(10, 2);