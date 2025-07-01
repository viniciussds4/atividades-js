// Calculo Salário Líquido
const readline = require("readline-sync");

//Título
console.log("Calcule o Salario Lquido");

//Entrada de dados
let salarioBruto = readline.questionFloat("Digite valor Salario Bruto: ");
let adicionalNoturno = readline.questionFloat("Digite valor Adicional Noturno: ");
let horasExtras = readline.questionFloat("Digite valor Horas Extras: ");
let descontos = readline.questionFloat("Digite valor Desconto: ");

let novoSalario = (salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos);

//Saída
//console.log("Cálculo Salário Líquido")
console.log(`Salario liquido é: ${novoSalario.toFixed(2)}.`);
