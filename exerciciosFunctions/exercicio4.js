function divisor(dividendo, divisor){
    let resultadoDaDivisao = dividendo / divisor;
    let restoDaDivisao = dividendo % divisor;
    return console.log(`O resultado da divisão é ${resultadoDaDivisao} e o resto da divisão é: ${restoDaDivisao}`);
}
divisor(20, 2);