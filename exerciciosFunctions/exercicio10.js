function fatorial (numero) {
    if(numero == 0){
        return 1 //como é 'true', ele não executa mais o 'else' e, por consequência, não executa mais a função interna
    } else {
        return numero * fatorial(numero - 1) //o nome que se da quando usamos a própria função dentro dela mesma é 'recursão'
        //esse é um recurso que faz a função chamar ela mesma dentro dela
        //nesse caso, a função chama ela mesma reduzindo em -1 o valor que foi passado no parâmetro
        //quando o valor chegar a zero, vai cair no 'if' e retornar 1 

        //a lógica é: a função vai chamar a si mesma até que numero seja == 0 

    }

}

console.log(fatorial(4))