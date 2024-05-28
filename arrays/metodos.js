//transformar as letras em maiúsculas
let nome = "Gabriel";
console.log(nome.toUpperCase());

//transformar as letras em minúsculas
let cidade = "JOÃO PESSOA";
console.log(cidade.toLocaleLowerCase());

//pop remove o último elemento de um array
let arrayExemplo = [50, 25, "casa", 10, 100];
console.log(arrayExemplo.pop()); //ele removeu o "aleluia"
console.log(arrayExemplo);

//push adiciona um elemento na última posição do array
arrayExemplo.push("testando o push");
console.log(arrayExemplo);

//unshift e shift fazem as mesmas coisas, porémn.. no começõ do array
arrayExemplo.unshift("adc na 1"); //unshift pra adicionar
console.log(arrayExemplo);

arrayExemplo.shift(); //shift pra remover 
console.log(arrayExemplo); 

//o indexOf faz o contrário.. ele me da índice da primeira vez que o elemento aparece no array
console.log(arrayExemplo.indexOf('casa')); //"casa" tá no índice 2

//indexOf encontra um índice de um elemento no array
//lastIndexOf encontra a última posição de um elemento aparece dentro de um array
//se um array tem 3 elementos iguais, o lastIndexOf pega o índice da última repetição do elemento
console.log(arrayExemplo.lastIndexOf('testando o push')); //10 é o índice 3 (o último nesse array)

//slice
//esse método recorta um array e coloca os elementos num outro array
let arraySlice = arrayExemplo.slice(3); //ele cortou a partir do elemento 3 até o último
//elemento do array e colocou os elementos em um novo array --> arraySlice
console.log(arraySlice);
//eu também posso delimitar esse recorte 
//colocando o índice inicial e dizendo até que índice eu quero que esse recorte aconteça

let novoExemplo = [123,456,567,7878,45,32];
let array2 = novoExemplo.slice(2,4); //ele vai pegar até o índice 3, o segundo valor é a parede onde ele o slice bate e para
console.log(array2);

//forEach
novoExemplo.forEach(indice => { //forEach percorre cada índice do array
    console.log(indice);
})

//include --> verifica se existe um elemento dentro do array e retorna um booleano
console.log(novoExemplo.includes(123));

//reverse --> inverte os elementos de um array de trás pra frente
console.log(novoExemplo);
console.log(novoExemplo.reverse()); //o array foi invertido

//trim --> remove todos os espaços entre uma string e outro elemento
//incluindo quebras de linhas.. se houver uma quebra de linha de uma sting pra outra, o trim vai retirar
let texto = "\n      Gabriel Silva  ";
console.log(texto);
let textoCorrigido = texto.trim();
console.log(textoCorrigido); 

//padStart --> ele preenche uma string até a string ter a quantidade de elementos pré definidas dentro do método
let stringPreenchida = 'oi';
//ele vai preencher a string com o caracter "a" até a string ter 5 elementos
console.log(stringPreenchida.padStart(5, 'a')); //a string deverá ter uma quantidade de 5 elementos

//split --> recorta a string
//é necessário definir o elemento que será usado como parâmetro pra recortar a string

let texto10 = 'Gabriel';
let texto10Cortado = texto10.split('') //quando não se define o que vai ser usado pra cortar, ele separa um elemento do outro na string
//os elementos recortados são colocados em um array
console.log(texto10Cortado);

//join -->  faz o contrário do split, ele junta os elementos de um array em uma única string usando um separador
console.log(texto10Cortado.join('')) //'' é o separador 

//usando outro exemplo de separador
console.log(texto10Cortado.join('-'));//- é o separador

//repeat --> repete um elemento string (a quantidade de repetição é definida dentro do parâmetro)
let stringRepetida = "Olá mundo. ";
console.log(stringRepetida.repeat(10)); //vai repetir a string 10 vezes

//rest operator --> permite adiiconar vários parâmetros numa function
function restOperador(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

restOperador(1,2,5,6,7,'opa',true); //aqui passei muitos parâmetros ao chamar a função
//mesmo dentro da própria sintaxe da função não tendo tantos parâmetros
//o ...args é o que torna possível adicionar parânetros numa quantidade diversa e indefinida ("infinita")

//operador destructuring com objetos --> permite criar variáveis copiando atributos de objetos
let carro = {
    rodas: 4,
    marca: 'ferrari',
    cor: 'preto'
}

const {rodas: variavelRodas, marca: variavelMarca, cor: variavelCor} = carro;
//leitura da sintaxe --> o atributo do objeto vai passar pra variável o atributo da chave do objeto
//a primeira chave do objeto carro é rodas, o atributo é 4, então 4 vai ser passado a variávelRodas
console.log(variavelRodas, variavelMarca, variavelCor);
//o destructuring descontrói o objeto e armazena em variáveis os elementos do objeto

//operador destructuring com arrays
//tem a mesma funcionalidade do destructuring de um objeto
//a diferença é que a forma de atribuir um elemento de um array a uma variável do destructuring é pelos índices
//exemplo
let destructuringArrays = [3,4,7,8,9,5];
const [indice0, indice1, indice2, indice3, indic4, indice5] = destructuringArrays;
//essas varíaveis vão recebendo dentro delas os elementos conforme a ordem do array, da esquerda pra direita
console.log(indice0, indice2, indice5);