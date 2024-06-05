//match é igual ao exec e não é muito utilizado.. também retorna algumas informações a mais do que o test(), igual o método exec()
//ele é um método que faz parte do prototype String, não do regex.. por isso tem que ser usado direto na string

let teste = "o numero 100".match(/\d/); //mas diferente do exec() ele é usado direto na string
console.log(teste);
