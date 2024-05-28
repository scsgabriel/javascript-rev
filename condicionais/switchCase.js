const mediaFinal = function(nota){
    switch (Math.floor(nota)){ //não retorna condicional (true ou false)
        //nota aqui é o valor que o switch tá recebendo como parâmetro pra usar nos "cases"

        //Math.floor() arredonda um número pra baixo.. 
        //O número que for passado em flutuante no parâmetro, ele arredonda pra baixo e o número vira inteiro
       
        case 10:
        case 9:
        case 8:
        case 7: 
            console.log("Aprovado."); //executa nos casos das notas estarem entre 10 e 7
            break  //o break é usado pro switch encerrar assim que o case for satisfeito e seu código executado..
            /* sem o 'break' o switch executa todos os cases, independentemente (o que é errado, já que 
                ele só pode executar o case que for satisfeito no parâmetro */

        case 6: case 5: case 4: case 3: case 2: case 1: //os cases podem ficar na mesma linha de código
            console.log("Em recuperação!"); //executa nos casos das notas estarem entre 6 e 1
            break

        case 0:
            console.log("Reprovado"); ////executa no caso da nota ser zero
            break //como o case é 'zero', ele satisfaz a condição e executa o código.. após isso ele encerra o switch com o 'break'. 
        default: //caso seja passado qualquer valor que não esteja dentro da estrutura do switch case.
            console.log("Nota inválida.");
    }
}
mediaFinal(-1); 
//Não vai funcionar.. porque o switch case não funciona com true e false.. ele não funciona com validação.