
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    
    falar() {
        console.log("Olá, meu nome é " + this.nome);
    }
}

const pessoa2 = new Pessoa("Joseph");
pessoa2.falar();

//Criar a mesma ideia da classe pessoa, MAS.. dentro de una função construtora // function constructor

function Pessoa2(nome){
    this.nome = nome

    this.falando = function(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const pessoa1 = new Pessoa2("Gabriel Silva");
pessoa1.falando();

// o this é necessário em:
// 1) funções construtoras
// 2) classes

// o 'this' permite que eu tenha acesso aos atributos e varáveis das classes e as funções construtoras

//o 'this' não varia na função factory, mas varia em classes e em funções construtoras

//existem basicamente três formas de criar variáveis em javascript: 
//através de: classes, funções factory e funções construtoras.
