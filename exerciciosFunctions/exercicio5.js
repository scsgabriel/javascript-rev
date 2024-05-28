
function troco(valor){
    return "R$ " + valor.toFixed(2);
}
console.log(troco(0.30000000000000000004));

//a função recebe como parâmetro um valor com uma infinidade de zeros. 
//a função interna toFixed() limita o número de casas decimais 