/*arrow function surgiu pela necessidade de fazer com que o 'this' permaneça invariável dentro da function,
independente de quem chamar a function*/

//this é fixo!! é limitado ao contexto onde a function é escrita, não varia nunca!! (dentro de arrow functions)

//arrow é uma fuction anônima.. isso significa que se eu quiser usar ela em algum lugar, preciso colocar ela dentro de uma variável

//arrow function padrão --> sintaxe
const testando = (a, b) => {
    return a + b;
}
console.log(testando(5, 5));

//arrow function reduzido: apenas se for usar um único parâmetro (sem parênteses, o parâmetro colocado após o sinal de atribuição e antes da flecha)
soma = a => a * a; //o 'return' é implícito
console.log(soma(5, 5));

//arrow function com parâmetro vazio --> sintaxe
falando = () => "Olá mundo!"
console.log(falando());
console.log();

//-------------------------------------------------------------------------------------------------------------

function Pessoa(){
    this.idade = 0; //this tá no contexto da function Pessoa, porém ela foi chamada no contexto da arrow function..
    //se fosse chamada dentro de uma outra function padrão, o 'this' não funcionaria.. porque deixaria de apontar pra pessoa (onde o atributo está)
    //e apontaria pra function setInterval, que não tem nenhum atributo declarado.

    //dentro da arrow function, isso é corrigido!! o 'this' continua apontando pro seu objeto de origem, independente de ser chamado em outro contexto
    //de functions, como no exemplo do 'setInterval()'.

    setInterval(() => { //forma de criar uma arrow function dentro de uma function padrão
        this.idade = this.idade + 1 
        console.log(this.idade);
    }, 1000); //num intervalo de 1000 milissegundos ou 1 segundo
}

new Pessoa //instanciando um objeto 