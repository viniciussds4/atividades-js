//Novo Salário
const readline = require("readline-sync");

console.log("Novo Salario");

 //Utilizando codígo de exemplo em aula para a estruturação da atividade
let nome = readline.question("Digite seu nome: "); 
let salario = readline.questionFloat("Digite salario: "); 
let abono = readline.questionFloat("Digite abono: ");
// Utilizando operador aritmético
let novoSalario = salario + abono;


 //Saída 
console.log(`\nOlá, ${nome}!`); 
console.log(`Seu novo salario é: R$ ${novoSalario.toFixed(2)}.`);