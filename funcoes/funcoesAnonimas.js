//functions padrões podem ser nomeadas ou podem ser anônimas.
//functions anônimas = função sem nome
//todas as arrow functions são anônimas

const soma = function(a, b){ //a variável soma recebe uma function anônima 
    //quando isso acontece a variável também pode se comportar como una function
    return a * b;
}
console.log(soma(10, 10)); 
console.log();

const imprimirResultado = function(a, b, operacao = soma){ //se o parâmetro 'operação' não receber valor, por padrão ele executa a function soma()
    console.log(operacao(a, b));
}

imprimirResultado(10, 8); //o terceiro parâmetro precisa ser uma function (por causa do valor padrão no porâmetro "operacao")
//esse 2 parâmetros vão pra 'a' e 'b';

//eu também poderia fazer da seguinte forma:
imprimirResultado(10, 8, soma); //passar os parâmetros

//também poderia criar uma function anônima dentro do parâmetro pra alterar a function original nessa linha de código
imprimirResultado(10, 8, function(x, y){
    return x - y;
}); //ele vai pegar os 2 parâmetros numbers (10, 8) e vai passar os valores pra x, y na function anônima
//e vai retornar a instrução que estiver dentro dela, nesse caso.. x - y

//também é possível fazer isso usando uma arrow function
imprimirResultado(10, 8, (c, d) => c + d); 
// (c, d) são parâmetros da arrow function
//a operação 'c + d' é o return da arrow function

//também é possível criar uma function anônima dentro de um objeto
const pessoa = {
    falar: function(){
        console.log("Olá, sou uma function anônima dentro de um objeto.");
    }
}

pessoa.falar();

//a segunda sintaxe válida pra criar uma function anônima dentro de um objeto é:
const pessoa2 = {
    falando(){
        console.log("Olá de novo. Function reduzida :)");
    }
}
pessoa2.falando();

//a terceira sintaxe é uma arrow function
const pessoa3 = {
    falar2: () => {
        console.log("Opa, function com a sintaxe da arrow function!");
    }
}
pessoa3.falar2();