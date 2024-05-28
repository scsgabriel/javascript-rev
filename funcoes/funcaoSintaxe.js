/* O interpretador do javascript, antes de executar os códigos do programa, ele lê e carrega todas as functions..
por esse motivo, se eu chamar uma function antes da estrutura de criação dela, ela será executada. mesmo
sendo o resultado de um código que vem depois.. */ 
// --> ATENÇÃO! mas isso só com functions declarations!!

//exemplo:
soma(5, 5); //mesmo sendo chamada acima do código de criação dela, ela será executada sem erros.. 
//simplesmente porque ela foi carregada pelo interpretador do javascript antes de executar os outros códigos.

//function declaration 
function soma(x, y){
    return console.log(x + y);
}

//function expression
const multiplicacao = function(x, y){
    return x * y;
}

//em resumo, variáveis criadas dentro de um escopo fechado não são acessadas pelo escopo global
//a menos que se crie um método que disponibilize essa variável pra acesso externo


