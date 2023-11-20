const valor = 80;

const produto = 129.99;

const valorDeDesconto = produto - valor;

const percentualTotal = 100;

const percentualRestante = (valorDeDesconto * percentualTotal) / produto;

console.log(percentualRestante.toFixed(2));