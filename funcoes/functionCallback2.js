//comparativo de uma lógica sem callack x com callback

console.log("Lógica comum: ");
const notas = [4, 5, 6, 4.5, 3.3, 10, 8.8, 7.7, 7]; //array com várias notas
let notasBaixas = []; //um array vazio pra receber as notas baixas
let restoDasNotas = [];
for(let iterar in notas){ //um for que percorre todo o array notas
    if(notas[iterar] < 7){ /*se a nota no índice em que o for percorrer for menor que 7, essa nova vai ser armazenada 
    no array notas baixas.*/
        notasBaixas.push(notas[iterar]); //a função 'push' coloca um elemento dentro do array
    } else {
        restoDasNotas.push(notas[iterar]); //as notas que sobraram ficam armazenadas aqui
    }
}

console.log(notasBaixas);
console.log(restoDasNotas);
console.log();
// ----------------------------------------------------------------------

//resolvendo o mesmo problema usando function callback
//filter faz um filtro no arrayconforme a instrução que eu passar e retorna um booleano
console.log("Usando filter e uma callback tradicional: ");
let notasBaixas2 = [];
notasBaixas2 = notas.filter(function(nota){ //function callback que vai em notas e filtra cada nota do array e vê se ela é menor que 7.
    return nota < 7; //se for, retorna 'true' e a nota é armazenada no array notasBaixas2.
    //nota é cada elemento do array que a function 'filter' verifica.
}); 
console.log(notasBaixas2);
//importante: 'filter' não vai procurar no array pelo índice, mas pelo elemento (valor).

//arrow function como callback
console.log("\nUsando a function filter e o callback arrow function: ");
let notasBaixas3 = [];
notasBaixas3 = notas.filter((nota) => nota < 7); 
console.log(notasBaixas3);
//a lógica acontece assim: 
/*  filter vai no array notas e pega o próximo elemento e joga dentro do parâmetro nota.. após isso nota entra na condição
do booleano (nota < 7).. se for 'true' o filter pega esse valor e armazena dentro do novo array notasBaixas3 */

//e se eu quiser também armazenar o restante dos valores em outro array de valores maiores? 
//é possível usar o ternário na condição e armazenar o valor 'false' no array de notas restantes. 
//exemplo: 

const aleatorio = [1, 4, 3, 5, 6, 8, 9, 10];
let valoresMenores = [];
let restoDosValores = [];
aleatorio.filter((nota) => nota < 7 ? valoresMenores.push(nota) : restoDosValores.push(nota));
console.log(`\nValores menores: ${valoresMenores}`);
console.log(`Valores maiores: ${restoDosValores}`);

//também da pra criar uma forma de fazer isso com uma function callback que pode ser reutilizada..
const verificaSeEMenorQue7 = nota => nota < 7; //esse callback pode ser reutilizado em outros locais facilmente,
//com essa lógica da condição menor que 7 implementada nele.
let notasBaixas4 = [];
notasBaixas4 = notas.filter(verificaSeEMenorQue7);
console.log(notasBaixas4);

