const nextOddNumber = (n: number): number => n + 2;

const nextDouble = (n: number): number => n * 2;

const nextSquare = (n: number): number => Math.pow(n, 2);

const nextEvenSquare = (n: number): number => Math.pow(n * 2, 2);

const nextFibonacci = (a: number, b: number): number => a + b;

const nextInMixedSequence = (n: number): number => n + 1;

console.log(`4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ____
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____
f) 2, 10, 12, 16, 17, 18, 19, ____

Respostas:\n`);

const a = nextOddNumber(7);
console.log(`a) Esta é uma sequência de números ímpares consecutivos. O próximo número será: \x1b[1m${a}\x1b[0m`);

const b = nextDouble(64);
console.log(`b) Esta é uma sequência onde cada número é o dobro do anterior. O próximo número será: \x1b[1m${b}\x1b[0m`);

const c = nextSquare(7);
console.log(`c) Esta é uma sequência dos quadrados dos números inteiros. O próximo número será: \x1b[1m${c}\x1b[0m`);

const d = nextEvenSquare(5);
console.log(`d) Esta é uma sequência dos quadrados dos números pares. O próximo número será: \x1b[1m${d}\x1b[0m`);

const e = nextFibonacci(5, 8);
console.log(`e) Esta é uma sequência de Fibonacci, onde cada número é a soma dos dois anteriores. O próximo número será: \x1b[1m${e}\x1b[0m`);

const f = nextInMixedSequence(19);
console.log(`f) Esta é uma sequência que parece misturar números que seguem padrões diferentes. O próximo número será: \x1b[1m${f}\x1b[0m`);
