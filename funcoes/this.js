//this

//this pode variar dependendo do contexto que ele é usado
//numa function tradicional, o this varia conforme quem chama a function..
/*por exemplo: no contexto do DOM, o this aponta, como padrão, pra o objeto glocal 'window'..
Se eu criar uma function tradicional que aponta pro body do HTML e uso o this nessa function, o this, dentro dessa function tradicional,
passa a apontar pro body do HMTL (mas só quando essa function é chamada ) */

//função tradicional é a função criada com "function".. o this varia de acordo com quem chamar a function tradicional
function teste(){
    console.log(typeof this);
}
teste();

//OBSERVAÇÃO
//dentro de uma function 'arrow function' o this nunca vai variar!!! O this é definido quando a arrow function é definida
const teste2 = () => {
    console.log(typeof this);
}
teste2();
//ou
const teste3 = () => console.log(typeof this);
teste3();
console.log();

//----------------------------------------------------------------------------------------------
//this e função 'bind'

//this dentro de um objeto
const pessoa = {
    saudacao: "Bom dia",
    falar(){ //sintaxe de uma function dentro de um objeto.. 
        console.log(this.saudacao); //escopo da função dentro de um objeto
        //dentro de um objeto, this é usado pra apontar pro atributo do objeto
    }
}
pessoa.falar(); //pra chamar a função do objeto é através do ponto --> nome do objeto + ponto + function

//quando eu crio uma variável e armazeno nela uma função que vem de um objeto, eu tenho conflitos..
/* porque o this do objeto vai continuar apontando pro objeto, e quando eu executar a função que foi armazenada
dentro da variável, o this não vai encontrar valor, porque a função agora aponta pra variável.. enquanto o this vai
procurar a referência dentro do objeto e não vai encontrar*/

//exemnplo
let funcaoFalar = pessoa.falar;
funcaoFalar(); //vai retornar undefined porque o 'this' tá apontando pra funcaoFalar e não tá encontrando os atributos do objeto pessoa.

//porén, com a função bind eu posso mudar isso. 
funcaoFalar = pessoa.falar.bind(pessoa); //aqui eu tô dizendo que o 'this' vai apontar pro objeto pessoa quando a function "funcaoFalar()" for chamada
funcaoFalar(); /*agora vai imprimir a função "falar" do objeto 'pessoa', porque o this, com a função bind, aponta pro objeto do parâmetro dentro
dentro da função bind */

//
function Pessoa(){
    this.idade = 0;
    
    setInterval(function(){
       this.idade++
       console.log(this.idade); 
    }.bind(this), 1000) //1000 milissegundos é igual a 1 segundo
    //bind faz referência ao 'this' da classe "Pessoa"
    //sem o 'bind' a refência do this é a 'idade' dentro da função setInterval()
}

//new Pessoa;
Pessoa();
console.log();

//------------------------------------------------------------------------------------------------

function comparandoThis(comparador){
    return comparador === this; //compara se o valor que vai vir pelo parâmetro é ESTRITAMENTE igual ao 'this'
}
console.log("Function tradicional: " + comparandoThis(global)); //global é equivalente ao objeto 'window' no contexto do DOM
//o retorno é 'true' porque mesmo 'this' sendo declarada no contexto da function comparandoThis..
//ela pode variar dependendo da contexto que ela é chamada (nesse caso, ela tá sendo chamada no contexto global)

//a correção disso dentro de uma function tradicional é feita com a função 'bind'

const objeto = {};
comparandoThis = comparandoThis.bind(objeto); //a function vai receber a 'function bind', que tá mudando pra onde o 'this' vai apontar
console.log("Função bind: " + comparandoThis(global)); //vai retornar 'false' porque 'this' agora tá amarrado pra apontar pro objeto
//graças a função bind, que torna isso possível.


//--------------------------------------------------------------------------------------------------------------------
const comparando2 = (comparador) => {
    return comparador === this //o retorno é 'false' porque 'this' pertence ao contexto da arrow function
}

console.log("Arron function: " + comparando2(global)); //vai retornar false porque o 'this' tá amarrado dentro de uma arrow function
//dentro do node.js o 'this' pertence a cada módulo(pasta/arquivo) onde ele é escrito -- ou seja --
//ele não pertence ao contexto global. Por isso é importante corrigir o problema da variação do 'this'
//porque se ele apontar pra onde não deve, podemos ter erros e bugs no programa, porque a function não vai fazer o que foi programada pra fazer.
console.log("Arrow function: " + comparando2(module.exports)); //apontando pro módulo atual onde esse código está sendo escrito.


