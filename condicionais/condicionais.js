
//condicional pra dar a média do aluno com 3 parâmetros
function mediaFinal(a, b, c){
    let resultado = (a + b + c) / 3;
    const resultadoFinal = () => {
        if(resultado >= 7){
            console.log("Sua média é: " + resultado.toFixed(2) + " e você está aprovado.")
        } else if (resultado < 7 && resultado > 0) {
            console.log("Sua média é: " + resultado.toFixed(2) + " e você está de recuperação.");
        } else {
            console.log("Sua nota é : " + resultado.toFixed(2) + ", você está reprovado!");
        }
    }

    return resultadoFinal();
}

mediaFinal(6, 0, 10);
console.log(); 

//condicional pra dizer se um número é menor que outro usando 2 parâmetros
function eMenor(numero1, numero2){
    if(numero1 < numero2){
        console.log(`Número ${numero1} é menor.`);
    } else if(numero1 == numero2){
        console.log(`Número ${numero1 + " e número " + numero2} são iguais.`);
    } else{
        console.log(`O número ${numero2} é menor.`);
    }
}

eMenor(1.50, 1.48);
console.log();

Number.prototype.entre = function(notaMinima, notaMaxima){
    return this >= notaMinima && this <= notaMaxima  //o 'this' pode receber tanto propriedades quanto métodos/funções do objeto global
    //nesse contexto, 'this' recebe o valor passado pelo usuário pra comparação das notas
    //logo.. (this) --> 0 <-- é igual ou maior que notaMinima? 
    
} 

const resultadoFinal = function(notaDoAluno){
    if(notaDoAluno.entre(7, 10)){
        console.log("Aprovado!");
    } else if(notaDoAluno.entre(1, 6)){
        console.log("Recuperação!");
    } else{ 
        console.log("Reprovado!");
    }
}

resultadoFinal(0);



