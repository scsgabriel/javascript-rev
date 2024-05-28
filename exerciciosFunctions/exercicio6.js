function primeiraFuncao(capitalInicial, taxaDeJurosSimples, tempoDeAplicacao){
    //fórmula: juros simples --> capital inicial * taxa de juros (números decimais) * tempo de aplicação (em anos)
    //fórmula do montante --> resultado dos jurtos simples + capital inicial
    let jurosSimples = capitalInicial * taxaDeJurosSimples * tempoDeAplicacao 
    return jurosSimples + capitalInicial;
}

function segundaFuncao(capitalInicial, taxaDeJurosComposta, periodoDeAplicacao){
    //fórmula: juros compostos --> montante (capital inicial + juros) = capital inicial * (1 + taxa do período) elevado a 'n' (n = números de períodos que o dinheiro é aplicado)
    //o número de períodos não é em anos.. pode ser bimestral, trimestral, semestral, anual, etc. o cálculo só leva em consideração a quantidade de vezes que a taxa é aplicada ao longo do tempo
    let montande = capitalInicial * (1 + taxaDeJurosComposta) ** periodoDeAplicacao; 
    return montande;
}

console.log(primeiraFuncao(1000, 0.1, 10).toFixed(2)); 
console.log(segundaFuncao(1000, 0.1, 10).toFixed(2));