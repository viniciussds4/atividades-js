//Valores Diferentes
const readline = require("readline-sync");

//Título
console.log("Valores Diferentes");

//Entrada de dados
let n1 = readline.questionFloat("Digite valor N1: ");
let n2 = readline.questionFloat("Digite valor N2: ");
let n3 = readline.questionFloat("Digite valor N3: ");
let n4 = readline.questionFloat("Digite valor N4: ");

let diferenca = (n1 * n2) - (n3 * n4);

//Saída
console.log(`A diferença é: ${diferenca.toFixed(1)}`);