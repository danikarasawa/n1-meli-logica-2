// A Lumelância esta precisando de uma calculadora basica para auxiliar seus prestadores.

// O usuário deverá digitar:
//     - qual operação quer fazer (somar, subtrair, multiplicar e dividir)
//     - qual é o valor 1
//     - qual é o valor 2

// Crie um funções para calcular cada uma das operações.
// De acordo com a operação escolhida, utilize o switch para escolher a operação e printar o resultado.
// Caso o usuário não escolha nenhuma, deve mostrar "Operação inválida".

const r = require('readline-sync');
var functionChoice = (r.question('Digite a operacao, por favor (+, -, * ou /): '));
var value1 = parseInt(r.question('Digite o valor 1: '));
var value2 = parseInt(r.question('Digite o valor 2: '));

//ARROW FUNCTION > MUITO LEGAL, PRÁTICO E MENOS CÓDIGO
//soma = (v1, v2) => {return v1 + v2};
//subtracao = (v1, v2) => {return v1 - v2};
//multiplicacao = (v1, v2) => {return v1 * v2};
//divisao = (v1, v2) => {return v1 / v2};

function soma(value1, value2) {
    var result = value1 + value2;
    return result;
};

function subtrair(value1, value2) {
    var result = value1 - value2;
    return result;
};

function multi(value1, value2) {
    var result = value1 * value2;
    return result;
};

function dividir(value1, value2) {
    var result = value1 / value2;
    return result;
};

switch (functionChoice) {

    case '+':
        var res = soma(value1, value2);
            console.log(res);
        break;

    case '-':
            var res = subtrair(value1, value2);
            console.log(res);
        break;

    case '*':
            var res = multi(value1, value2);
            console.log(res);
        break;

    case '/':
            var res = dividir(value1, value2);
            console.log(res);
        break;

    default:
        console.log('Operação Inválida, amiga!');
};
