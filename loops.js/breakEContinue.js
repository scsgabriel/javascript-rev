//laço break 
const vect1 = [2, 34, 54656, 349, 2323, 123];

for(let iterar in vect1){
    if(iterar == 3){  //break interrompe o laço e vai pra próxima linha de código fora do laço
        break
    }
    console.log(`Índice: ${iterar} = Valor: ${vect1[iterar]}`);
}
console.log();

//continue
for(let iterar in vect1){
    if(iterar == 3){ //continue vai ignorar o índice e pular pro próximo índice do laço
        continue
    }
    console.log(`Índice: ${iterar} = Valor: ${vect1[iterar]}`)
}

//break funciona em estruturas: --> switch case / while / for
//continue funciona em estruturas: --> while / for

//o break e o continue respondem ao laço mais próximo deles..
/*em casos que houver um laço dentro de outro, e houver necessidade de dar break ou continue
no laço mais longe e não no mais próximo, será necessário criar um rótulo pra fazer
com que o break e o continue entendam que se trata do laço mais distante */

//exemplo
//criando o rótulo -->
rotulo: 
for(let iterar in vect1){
    for(let iterar2 in vect1){
        if(iterar == 2 && iterar2 == 3){
            break rotulo
        }
        console.log(`${iterar} = ${vect1[iterar]} | ${iterar2} = ${vect1[iterar2]}`);
    }
}