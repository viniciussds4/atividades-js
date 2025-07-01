// Média final
const readline = require("readline-sync");

//Título
console.log("Média Final");

let nome = readline.question("Digite nome do Aluno: ");
let B1 = readline.questionFloat("Digite nota B1: ");
let B2 = readline.questionFloat("Digite nota B2: ");
let B3 = readline.questionFloat("Digite nota B3: ");
let B4 = readline.questionFloat("Digite nota B4: ");


//Utilizando operador aritmético
let mediaFinal = (B1 + B2 + B3 + B4) / 4

//Saída
console.log(`Olá aluno, ${nome}!`);
console.log(`Sua nota final é: ${mediaFinal.toFixed(1)}.`);
    if (mediaFinal >= 7){
    console.log("Aprovado.");
    } else {
        console.log("Reprovado.");
    }