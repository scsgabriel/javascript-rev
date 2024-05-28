function getElementoAleatorioEntre(min, max){   
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);  //retorna um número aleatório entre um número definido e outro.. ex: entre 1 e 10
} 

let numero = 0;

while(numero != -1){ //executa o código enquanto a condição for true
    numero = getElementoAleatorioEntre(-1, 5);
    console.log(`O resultado escolhido foi: ${numero}.`);
}