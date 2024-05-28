function ladosDoTriangulo(lado1, lado2, lado3){
    if(lado1 === lado2 && lado2 === lado3) {
        console.log("Esse triângulo é: Equilátero (Três lados iguais)")
    } else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log("Esse triângulo é: Isósceles (Dois lados iguais e um diferente.)");
    } else {
        console.log("Esse triângulo é: Escaleno (Todos os lados são diferentes)");
    }
}

ladosDoTriangulo(2, 1, 1);