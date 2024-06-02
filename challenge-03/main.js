
let myobj = {};

let pessoa = {
    nome: String,
    sobrenome: String,
    sexo: String,
    idade: 10,
    altura:Number,
    peso: Number,
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversario: function () {
        return this.idade += 1;
    },
    andar: function (valor) {
        this.caminhouQuantosMetros += valor;
        this.andando = true;
    },
    parar: function () {
        return this.andando = false;
    },
    nomeCompleto: function () {
        return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
    },
    mostrarIdade: function () {
        return `Olá, eu tenho ${this.idade} anos!`;
    },
    mostrarPeso: function () {
        return `Eu peso ${this.peso} anos!`;
    },
    mostrarAltura: function(){
        return `Minha Altura é ${this.altura}m`;
    }
};

pessoa.andar(50);
console.log(pessoa.caminhouQuantosMetros)
console.log(pessoa.andando)
console.log(pessoa.parar())


