//por convenção, se inicia uma variável/atributo com underline
//pra evidenciar pra outros desenvolvedores que essa é uma variável "privada"
//que só deve ser acessada internamente 

//interessante pra usar como encapsulamento 
//interessante pra usar em validações de dados

const sequencia = {
    _valor: 1,
    get getValor(){ //get antes do nome do "método" é só por convenção
        return this._valor
    },
    set setValor(valor){ //set antes do nome do "método" é só por convenção
        if(valor > this._valor){
            this._valor = valor
        } else {
            return this._valor++
        }
    } 
}
/* esses getters e setters não funcionam como uma função.. onde passamos valores em parânteses como parâmetros..
pra passar valor no método 'set' se usa o sinal de atribuição: igual =  */


sequencia._valor = 10;
console.log(sequencia.setValor = 20);
sequencia.setValor = 22
sequencia.setValor = 11
sequencia.setValor = 19
console.log(sequencia.getValor);