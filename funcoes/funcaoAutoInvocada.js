// IIFE --> Immediately Invoked Function Expression

//essas funções executam tudo na hora que são criadas.. 

//são funções anônimas.. o que muda é que na sintaxe elas são escritas dentro de parânteses
//isso faz com que o conteúdo dessas funções não esteja disponível no contexto global, apenas interno a elas

(
    function(){
        console.log("Isso vai ser executado assim que eu der Ctrl + Alt + N");
    }
)() //esses 2 parênteses fazem parte da sintaxe... isso que faz a função ser autoexecutável
//esses parênteses invocam a função

//tudo o que eu fizer dentro dessa função vai ficar dentro dessa função.. ou seja, não vai influenciar ou interferir em nada
//que esteja no escopo global

//exemplo:

let exemplo = 50;

(
    function(){
        let exemplo = 69; //a variável exemplo que tá dentro da 'IIFE' tem o mesmo nome da variável global..
        //mas como ela tá dentro da function IIFE, ela não interfere na variável que tá fora. Fica restrita ao contexto da função 
        console.log(exemplo) //variável da função
    }
)()
console.log(exemplo); //variável no contexto global (como é node, contexto modular)