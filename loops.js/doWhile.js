function numeroAleatorio(min, max){
    const numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

let num; //na estrutura 'do while' não é necessário inicializar a variável externa
//porque ela vai ser inicializada dentro do bloco de execução do 'do while'

do{
    num = numeroAleatorio(-1, 5);
    console.log(`O número aleatório é ${num}`);
} while(num != -1);

//a diferença do while pro do while é que o do while executa pelo menos uma vez antes de entrar na condição do laço.

//'do while' quase não é usado entre os programadores. 
//a preferência é sempre pelo 'while'
