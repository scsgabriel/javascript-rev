

//conceito de herança com o extends 
//as propriedades e características da classe pai são extendidas pra classe filho

//ideia: reutilização de código

// * pra extender uma classe pra outra usamos a palavra reservada --> extends (após o nome da classe)
// * pra setar as propriedades da classe que vieram do extends usamos a palavra reservada --> super

class Mamifero{
    constructor(patas) {
        this.patas = patas;
    }
}

let lobo = new Mamifero(4);
console.log(lobo.patas);  

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas); //o "super" permite realizar alteração diretamente no objeto filho
        //se eu n quiser alterar o valor, não preciso chamar o super 
        this.raca = raca
    }
    latir(){
        return console.log("au au");
    }
}

let spitz = new Cachorro(4, "Doby");
console.log(spitz.patas, spitz.raca);
spitz.latir();

//-------------------------------------------------------------------
//exemplo 2 de classe sem o super e com function criada na classe pai

class Carro{
    constructor(rodas, volante, passageiros){
        this.rodas = rodas,
        this.volante = volante,
        this.passageiros = passageiros
    }
    andar(){
        return console.log("60 km/h");
    };
    parar(){
        return console.log("0 km/h");
    }
}

let carro = new Carro(4, 1, 2);

class Chevrolet extends Carro{
    constructor(passageiros){
        super(4, 1, passageiros); //portas e volante eu defini como padrão e passageiros pra ser alterado dinamicamente no porâmetro
        //ao chamar o super, ele chama o constructor da classe pai e traz as propriedades dela pra classe filho
    }
}
//obs. eu não chamei dentro da classe filha nenhum método.. porém, na classe pai existem 2 métodos: andar() e parar()
//como usei o extends, a classe filha também pode usar esses métodos sem eu precisar declarar dentro dela

let onix = new Chevrolet(10); //10 passageiros
console.log(onix);
onix.andar(); //método herdado da classe pai
onix.parar(); //método herdado da classe pai





