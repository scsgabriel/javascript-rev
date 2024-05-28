let contador = 5;
let i = 0;

while(i <= contador){
    console.log(i);
    i++
} //estrutura "while" equivalente ao "for"
console.log();


//sintaxe do laço 'for'
const vect = [50, 676, 90, 156];

for(let i = 0; i < vect.length; i++){ //se i for iniciado sem o 'let' a variável contadora fica disponível no escopo global
                                //e isso não pode acontecer. 
    console.log(vect[i]);
} 