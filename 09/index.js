/*Faça um programa que, a partir do número de lados de um polígono, imprima na tela a soma dos seus ângulos internos, conforme a fórmula abaixo:

Soma interna dos angulos do poligono = S = (n - 2) * 180
a = S/N


Onde:

S: soma dos ângulos internos do polígono
n: número de lados do polígono

Em seguida, calcule quanto vale cada um desses ângulos, caso eles sejam todos iguais, utilizando a fórmula abaixo:

 

Sendo:

a: o valor de cada ângulo em graus
*/


const somaLados = 6;

const somaInterna = (somaLados - 2) * 180;

const area = somaInterna / somaLados;

console.log(somaInterna);

console.log(area);

