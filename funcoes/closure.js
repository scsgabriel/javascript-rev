const teste = 'Valor de teste NO CONTEXTO GLOBAL';

function funcaoExterna(){
    const teste = 'Valor de teste dentro da função externa'; //esse valor é o valor que vai ser considerado 
    //porque ele é o valor que está no contexto que envolve a funcaoInternaDeOutraFuncao() - isso que significa "Closure"
    //Closure: é o escopo que envolve, que fica entorno de uma function

    function funcaoInternaDeOutraFuncao(){
        return teste
    }
    return funcaoInternaDeOutraFuncao;
}

/* A função funcaoExterna() tem uma variável dentro dela chamada 'teste'..
No contexto global também existe uma função chamada teste..
No entanto, a função vai, primeiramente, reconhecer a variável que está mais próxima a ela.. nesse caso,
a mais próxima está interna a ela.
.
Dentro da funcaoExterna() eu criei uma função chamada funcaoInternaDeOutraFuncao()..
que recebe a variável teste como um retorno.. 
A função funcaoInternaDeOutraFuncao() passa a armazenar nela uma variável. Ela meio que se torna,
indiretamente, uma "variável" em forma de função.
Logo após eu retorno funcaoInternaDeOutraFuncao() para a funcaoExterna()..
Como funcaoInternaDeOutraFuncao() tinha dentro dela uma variável, e eu retorno isso pra funcaoExterna(),
a funcaoExterna() também vai ser simbolicamente uma variável.. porque vai estar armazenando dentro dela
a mesma variável que a funcaoInternaDeOutraFuncao() estava armazenando.
.
Se a função for chamada no cotnexto global, ela não irá imprimir o valor da variável.. porque a função, por natureza, 
não é uma variável, então é necessário criar uma variável no contexto global, que vai receber
a funcaoExterna() e essa variável sim poderá ser impressa no console com o valor que tava dentro da funcaoExterna(). */

//Como no exemplo prático abaixo:

const imprimindoValorDeVariavelQueEstaNaFuncao = funcaoExterna();
console.log(imprimindoValorDeVariavelQueEstaNaFuncao()); //vai imprimir porque é uma variável que faz papel de função, e não o contrário.
//essa variável, por receber uma função, deve ser executada como uma função, porque ela se torna uma função!

