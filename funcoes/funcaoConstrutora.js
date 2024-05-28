//a função construtora faz o que uma classe em JAVA faz!!

//pra usar precisa instanciar com new + o nome da classe
//os atributos e as variáveis dessa função são privadas

//this é usado pra referenciar o atributo

// pra criar atributos e funções privadas usamos: 'let' ou 'const'
// pra criar atributos e funções públicas usamos: 'this'

function Carro(velocidadeMaximna = 100, aumentoDaAceleracao = 10){ //padrão de escrita com letra maiúscula // essa function é como se fosse uma classe em JAVA
    let velocidadeAtual = 0; //esse é um atributo privado apenas da função Carro
    this.acelerar = function(){
        if(velocidadeAtual + aumentoDaAceleracao <= velocidadeMaximna ){ //se a velocidadeAtual + aumentoDaAceleracaa for menor ou igual a velocidade máx.
            velocidadeAtual = velocidadeAtual + aumentoDaAceleracao //então pode aumentar a velocidade atual no valor de aumentoDaAceleracao
        } else {
            velocidadeAtual = velocidadeMaximna; //se a velocidadeAtual ultrapassar a velocidadeMaxima, o 'else' faz a velocidadeAtual receber a velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){ //'this' diz que getVelocidadeAtual é um atributo público da função Carro
        return `A velocidade atual é ${velocidadeAtual} km/h.`; //um getter criado pra acesso do usuário a velocidade atual + concatenação
    } //pra criar uma function pública é necessário criar usando o 'this' + o nome do atributo que vai receber a function
    //se a function for um get ou um set, deve ser nomeada dessa forma

    //pra criar um atributo usamos --> 'this'
    //pra criar uma variável dentro da classe usamos --> 'let' ou 'const'
    //as variáveis e os atributos criados dentro de uma classe são privadas!! 
    //pra acessá-las é necessário criar um getter 
    //pra alterá-las é necessário criar um setter

}

//a função Carro() funciona como uma classe // logo.. 'prisma' é um objeto, que precisa ser instanciado. 
const prisma = new Carro(); 
prisma.acelerar(); //eu chamei o objeto prisma e pelo ponto executei a função 'acelerar()' 
prisma.acelerar(); //como eu chamei a função 'acelerar()' uma vez, a velocidadeAtual lá dentro já não é mais zero.
//eu chamei de novo, então a velocidade atual lá, que é 10, é levada em consideração e acrescida de mais 10.
console.log(prisma.getVelocidadeAtual());

const uno = new Carro(200, 300); //eu posso passar parâmetros pra função "classe"
//200 é a velocidadeMaxia e '300' é o aumentoDaAceleracao
uno.acelerar();
console.log(uno.getVelocidadeAtual()); //vai imprimir 200, porque a velocidadeMaxima está limitada a 100. 
