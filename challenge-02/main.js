function soma(num1, num2) {
    return (num1 + num2);
}

let chamando = soma(10, 5) + 5;

console.log(chamando);

let npro;

function functionstring(npro) {

    return `O valor da variável agora é ${npro}`;

}

console.log(functionstring(8)); // string

function FuncaoDesafio(argumento1, argumento2, argumento3) {

    if (argumento1 == null || argumento2 == null || argumento3 == null) {
        return console.log(`Preencha todos os valores corretamente!`)
    }

    return console.log(`Resultado da Multiplicação: ${(argumento1 * argumento2 * argumento3) + 2}`)

}
FuncaoDesafio(8, 8); //Preencha todos os valores corretamente!
FuncaoDesafio(10, 10, 10); //1002;

function Desafio2(string1, string2, string3) {

    if(string1 == undefined){

        return false;
    }
    else if(string2 == undefined && string3 == undefined) {
        return string1;
    }
    else if (string3 == undefined) {
        return string1 + string2;
    }
    else {
        return (string1 + string2) / string3;
    }

    return null
 

}

console.log(Desafio2()); //false
console.log(Desafio2(8)); // 8;
console.log(Desafio2(8,8)); // 16;
console.log(Desafio2(8,8,8)) // 2


