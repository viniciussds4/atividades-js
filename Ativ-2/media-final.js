// Média final
const readline = require("readline-sync");

//Título
console.log("Média Final");

let nome = readline.question("Digite nome do Aluno: ");
let b1 = readline.questionFloat("Digite nota B1: ");
let b2 = readline.questionFloat("Digite nota B2: ");
let b3 = readline.questionFloat("Digite nota B3: ");
let b4 = readline.questionFloat("Digite nota B4: ");


//Utilizando operador aritmético
let mediaFinal = (b1 + b2 + b3 + b4) / 4

//Saída
console.log(`Olá aluno, ${nome}!`);
console.log(`Sua nota final é: ${mediaFinal.toFixed(1)}`);
    if (mediaFinal >= 7){
    console.log("Aprovado.");
    } else {
        console.log("Reprovado.");
    }