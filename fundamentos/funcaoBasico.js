//A maior parte das coisas em JavaScript é function, inclusive classes em JavaScript são functions.
//A base JavaScript são as functions. 

console.log(typeof Object); //o valor de retorno é uma function

function soma(a, b){
    return console.log(a + b);
}

//É possível atribuir a um parâmetro um valor definido caso ninguém agregue valor a ele
//Exemplo:
function multiplicacao(a, b = 2){ // b só valerá 2 se b não for definido depois.
    return console.log(a * b);
}
multiplicacao(5); //nesse caso.. o segundo parâmetro, b, não foi definido pra fazer o cálculo.. 
//logo, o 2 virá como valor padrão, que foi definido inicialmente no parâmetro.. 
//por isso nesse exemplo o valor será 10. --> 5 * 2 = 10

//arrow function
const somaArrow = (a, b) => { 
    return console.log(a + b);
}

somaArrow(5, 2);

//arrow function reduzida         
                                  //return
const subtracaoArrow = (a, b) => console.log(a - b); 
subtracaoArrow(70, 2);

const nomes = "nomes"
let nomes2 = "nomes"


