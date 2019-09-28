// 1 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa para printar todos os números pares de 1 a 100.
// - Números pares são todos os números que dividos por 2 tem resto 0
// - Qual operador que retorna o resto da divisão? Vamos usar ele!

const r = require('readline-sync');

//RODANDO
// let i = 1; 
// while (i <= 100) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// };

// 2 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// // Ex.: Usuário informa 5 e o programa retorna
// // *
// // * *
// // * * *
// // * * * * 
// // * * * * * 
// - Você pode concatenar uma string usando: + ou +=

//RODANDO
// let number = parseInt(r.question('Digite um numero de 1 a 10, por favor: '));
// let star = '';
// let i = 0;
// while(i < number){
//     star += "*";
//     console.log(star);    
//     i++;
// };

//COM DO WHILE
// let number = parseInt(r.question('Digite um numero de 1 a 10, por favor: '));
// let star = '';
// let i = 0;
// do{
//     star += "*";
//     console.log(star);    
//     i++;
// }while(i < number)

// 3- Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
// Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
// O programa vai dizer "Tchau [nome]" e finalizar o programa.

//RODANDO
// let name = r.question('Digite seu nome, por favor: ');
// console.log(`Olá, ${name}`);
// let text = "";

//USANDO WHILE
// while (text != 'tchau' && text != 'Tchau') {
//     text = r.question('Digite o que voce quiser, por favor. [Ou tchau pra sair] ');
//     console.log(`Você digitou ${text}`);
// }
// console.log(`Tchau ${name}`);

//USANDO DO WHILE
// do{
//     text = r.question('Digite o que voce quiser, por favor. [Ou tchau pra sair] ');
//     console.log(`Você digitou ${text}`);
// }while(text != 'tchau' && text != 'Tchau');
// console.log(`Tchau ${name}`);

//USANDO FOR
// for (; text != "Tchau" && text != "tchau";) {
//     text = r.question('Digite o que voce quiser, por favor. [Ou tchau pra sair] ');
//     console.log(`Você digitou ${text}`);
// }
// console.log(`Tchau ${name}`);

// 4 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um  programa contador de passos que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
// A meta a ser atingida é de 500 passos.

//RODANDO
// let meta = 0; 

// for (steps = 0; meta < 500; steps++) {
//     meta += parseInt(r.question("Digite uma quantidade de passos, por favor: "));
// }
// console.log("Parabéns! Você atingiu a meta de " + meta);

//OLHAR O CÓDIGO DA LUMA 
// let steps = 0;
// let meta = 500;

//     for (; steps < meta;){
//         meta += parseInt(r.question("Digite uma quantidade de passos, por favor: "));
// }
// console.log("Parabéns! Você atingiu a meta de " + meta);

// 5 - Crie um programa que conte de 10 até 1 de 1 em 1.

//OLHAR O CÓDIGO DA LUMA
// let i = 0; 
// while (i <= 10) {
//     console.log(i);
//     i--;
// };

// 6 - Crie um programa que receba o array = [5, 37, 18, 59, 12, -5] e faça as seguintes operações:
//     - Printe o maior;
//     - Printe o menor.

// let numbers = [5, 37, 18, 59, 12, -5]
// let max = ""; //PODE USAR A FUNÇÃO INFINITY OU -INFINITY
// let min = "";

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];        
//     }
//     if (numbers[i] < min) {
//         min = numbers[i];        
//     }
// }
// console.log("O maior número deste grupo é " + max);
// console.log("O maior número deste grupo é " + min);

