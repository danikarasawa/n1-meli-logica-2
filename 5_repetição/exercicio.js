// 1) Crie um programa para printar todos os números pares de 1 a 100.
// - Números pares são todos os números que dividos por 2 tem resto 0
// - Qual operador que retorna o resto da divisão? Vamos usar ele!

const r = require("readline-sync");

// let number = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// };

// 2) Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// // Ex.: Usuário informa 5 e o programa retorna
// // *
// // * *
// // * * *
// // * * * * 
// // * * * * * 
// - Você pode concatenar uma string usando: + ou +=

// let number = parseInt(r.question('Digite um numero de 1 a 10, por favor: '));
// let star = '';

// for(let i = 0; i < number; i++){
//     star += "*";
//     console.log(star);    
// };

// 3) Crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
// Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
// O programa vai dizer "Tchau [nome]" e finalizar o programa.
// - Aqui você pode usar while ou do/while para resolver

// let i = 0;
// let text = '';

// let text = console.log('Digite o que você quiser, por favor: ');

// do {
//     if (text !== 'tchau' || text !== 'Tchau') {
//         console.log(`Oi ${text}`);
//         console.log('Digite "tchau" a qualquer hora para sair')
//     }
// } while (text == 'tchau' || text == 'Tchau');
// console.log('Tchau~');

// let name = r.question('Digite o que voce quiser, por favor: ');
// console.log(`Olá, ${name}`);
// let text = "";

// do{
//     text = r.question('Digite o que voce quiser, por favor. Ou tchau pra sair: ');
//     console.log(`Você digitou ${text}`);
// }while(text != 'tchau');
// console.log(`Tchau ${name}`);

// 4) Crie um  programa contador de passos, que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
// A meta a ser atingida é de 500 passos.
// - Aqui você pode usar while ou do/while para resolver, mas tente resolver com o que você não utilizou no exercicio 3.

// for (let i = 0; i++;) {
//     let userChoice = console.log('Digite uma quantidade de passos: ');
//     if(i <= 500){
//         userChoice++;
//     }    
// };

let steps = 0;
const meta = 500;

while(steps<meta){
    steps += parseInt(r.question("Digite uma quantidade de passos, por favor: "));
}
console.log("Parabéns! Você atingiu a meta de " + steps);