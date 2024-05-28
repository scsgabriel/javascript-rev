//O ideal é ter functions que façam apenas uma coisa.. e não tenha múltiplas tarefas dentro delas

//parâmetros e retornos em javascript são opcionais (no sentido de não ser obrigatório)

//function literal
function exemplo( /* parâmetro*/ ){ 
    /* escopo do código que a function vai executar  */
    console.log("Funcão 1.");
}
//----------------------------------------------------------------------------------------------

//function dentro de uma variável
const exemplo2 = function(){
    console.log("Função 2.");
}
//----------------------------------------------------------------------------------------------

//function dentro de arrays
//é possível criar uma function literal dentro de um array e também passar as functions de variávels
const vect = [function(x){
    /* function literal no índice zero do array*/
    return console.log(x);
}, exemplo, exemplo2];

vect[0]("Função de dentro do vetor executada acessando o índice zero.");
console.log(vect[1]);
console.log(vect[2]);
console.log();

/*nos casos em que for necessário armazenar uma function dentro de um array, o comum é criar uma function fora do array primeiro
e só depois armazená-lo lá dentro --> como no exemplo1() e exemplo2()  */
//----------------------------------------------------------------------------------------------

//function como valor de um atributo de um objeto
const objeto = {
    falar: ""
}
objeto.falar = function(){
    return console.log("Olá, function como valor de um atributo de um objeto.");
}
objeto.falar(); 
//----------------------------------------------------------------------------------------------

//passando uma function como parâmetro de outra function
function rodando(start){
    start();
}
console.log();

rodando(function(){
    console.log("Function sendo passada como parâmetro pra dentro da function rodando");
}); //essa function tá sendo passada como parâmetro da function "rodando", que é o start()
//e dentro da function "rodando()" o "start()" tá sendo executado. 
//start recebe a function de parâmetro e passa pra start() dentro do escopo de rodando | e lá dentro a function start() é executada.
console.log();
//----------------------------------------------------------------------------------------------

//uma function também pode retornar outra function
function soma(a, b){
    return function(c){
        console.log("O resultado da soma é:", a + b + c);
    }
}

soma(5, 5)(10); //o segundo parêntese passa o parâmetro pra function que tá dentro da function soma() que tá recebendo "c"
//e a segunda function é responsável por realizar a execução do código que faz a soma;

//também é possível criar uma variável pra armazenar a function soma() 
//e depois chamar nessa variável o parâmetro da function dentro da function soma()
//por exemplo
const somando = soma(50, 50); //somando recebe a function soma()
somando(100); //somando chama o 3 parâmetro 


