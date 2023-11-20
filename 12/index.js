const montante = 90000;

const capitalInicial = 60000;

const numeroDeMeses = 24;

const taxaDeJuros = (montante / capitalInicial) ** (1 / numeroDeMeses) - 1; //Math.pow(montante / capitalInicial, 1 / numeroDeMeses) - 1  outro jeito de resolver;

const valorConvertido = taxaDeJuros * 100;

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${valorConvertido.toFixed(4)}%, pois após ${numeroDeMeses} meses você teve que pagar ${montante}`);

// perguntar forma de chegar a 1.703 pois quando o tofixed fica 3 ele arredonda pra 1.704;