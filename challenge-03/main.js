
let myobj = {};

let pessoa = {
    nome: "Jose",
    sobrenome: "Andre",
    sexo: "Masculino",
    idade: 10,
    altura: 1.94,
    peso: 100,
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversario: function () {
        return this.idade += 1;
    },
    andar: function (valor) {
        this.caminhouQuantosMetros += valor;
        return this.andando = true;
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
    mostrarAltura: function () {
        return `Minha Altura é ${this.altura}m`;
    }
};

console.log(`Qual é a idade da pessoa: ${pessoa.idade}`);
console.log(`Qual é a peso da pessoa: ${pessoa.peso}`);
console.log(`Qual é a altura da pessoa: ${pessoa.altura}`);

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
console.log(`Aniversário da pessoa daqui a 3 anos: ${pessoa.fazerAniversario()}`);
console.log(`A idade atual da Pessoa é ${pessoa.idade}`); //14
pessoa.andar(50);
pessoa.andar(100);
console.log(pessoa.andar(20));
pessoa.parar();
console.log(pessoa.parar()); //false
console.log(pessoa.caminhouQuantosMetros); //170





