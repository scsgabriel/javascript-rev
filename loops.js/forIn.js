//o 'for in' percorre por índice e não pelo valor

const vect = [10, 34, 4545, 50];
//sintaxe
for (i in vect){
    console.log(i); //assim ele imprime só os índices
}

for (let i in vect){
    console.log(vect[i]); //assim ele imprime os valores
}

for(i in vect){
    console.log(`Índice: ${i} e Valor: ${vect[i]}.`);
}
console.log();

//for in com um objeto

const pessoa = {
    nome: "Gabs",
    idade: 26,
    altura: 1.70,
    peso: 74
}

for(let iterar in pessoa){ //let faz o 'iterar' pertencer apenas o escopo do laço
    console.log(`Atributo do objeto: ${iterar} | Valor do objeto: ${pessoa[iterar]}`);
} //pra percorrer objetos o for in é interessante
//pra arrays 