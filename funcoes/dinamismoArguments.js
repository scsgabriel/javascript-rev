//como usar uma function com parâmetro dinâmico usando arguments
//arguments é um array que pode ser usado pra armazenar os valores passados no parâmetro da function
//arguments é um array vazio e dinâmico que é usado dentro de functions

function soma(){ //parâmetro vazio porque vai receber vários valores
    //quando nenhum parâmetro é passado aqui, o array interno arguments fica vazio e pode ser usado com dinamismo
    let soma = 0;
    //arguments recebe o que for passado no parâmetro vazio (valores ilimitados)
    for(let iterar in arguments){ 
        soma += arguments[iterar];
    }
    return soma;
    /*  --> dentro de arguments, nesse exemplo, eu já tenho um conjuntos de valores que foi passado 
    abaixo pelo parâmetro da função soma..
    --> dentro do escopo da function, soma começa com zero e recebe, de arguments no índice 'iterar' o valor
    correspondente conforme o laço for vai percorrendo..
    --> esse valor vai sendo somado ou concatenado a variável soma. */
    
}

//exemplos usando tipos numbers
console.log(soma()); //se nenhum valor como parâmetro for passado, ele vai começar com zero
console.log(soma(1, 5, 6)); //esse três valores foram passados pra dentro do array 'arguments' (como no restante dos exemplos)
console.log(soma(1.6, 1.6, 1.9, 6.3).toFixed(2)); //toFixed() me permite limitar o número de casas decimais em tipos flutuantes
console.log(soma(6, 5, 80, 123, 54, 99, 54, 21, 23, 45, 65)); 
console.log();

//exemplos usando Strings
console.log("Gabriel", "Ben", "Cavalcanti"); //ele vai concatenar os valores por serem strings
console.log("Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo");
console.log();

//nos testes, arguments não funciou dentro de arrow functions.. apenas em functions tradicionais nomeadas e anônimas