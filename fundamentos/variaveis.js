// var

//só existem 2 escopos pra essa variável: 1) escopo global | 2) escopo da function
var nome = "variável no escopo global"; //escopo global: significa que var pode ser acessado de qualquer parte do meu programa

function teste(){  //escopo da function
    var nome = "nome dentro do escopo da function!"; 
    return console.log(nome);
}

//em outros escopos, variáveis var serão consideradas globais e poderão ser acessadas e sobrescritas em qualquer parte do programa.
//isso é ruim, por possibilitar possíveis futuros conflitos em casos de sobrescrita do var.

console.log(nome); //vai imprimir a variável do escopo global
teste(); /*vai imprimir a variável do escopo da function (mesmo elas tendo o mesmo nome,
                        desde que estejam dentro de escopos diferentes, não haverá conflitos). */

                        
// let

//let, diferente de var, fica visível apenas dentro do seu escopo, independente do escopo. 

console.log();
let numero = 50; //escopo global

{ //escopo de bloco 1
    let numero = 5;
    console.log(numero);
} 


{ //escopo de bloco 2
    let numero = 10;
    console.log(numero);
}

console.log(numero);
console.log();

//3 blocos diferentes com o mesmo nome de variável, mas let só considera a variável de dentro do seu próprio escopo.
//Isso já não funcionaria com var.. por exemplo:

var letra = "a"; //escopo global

{ //escopo de bloco 1
    var letra = "b";
    console.log(letra);
}

console.log(letra); //a variável do escopo 1, em var, também é global e está sobrescrevendo a variável fora do escopo 1. 
                    //nesse caso, o valor 'b' é impresso 2 vezes, substituindo (sobrescrevendo) 'a'.

//RESUMO
//var - tem escopo: 1) global; 2) escopo de function
//let - tem escopo: 1) global; 2) escopo de function; 3) escopo de blocos.

function name(){

}

let name = () => {

}

let name2 = (a, b) => a + b;
