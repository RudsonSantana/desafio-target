import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPerfectSquare(x: number): boolean {
    const s = Math.sqrt(x);
    return (s * s === x);
}

function isFibonacci(num: number): boolean {
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

rl.question('Digite um número: ', (input: string) => {
    const num = parseInt(input);
    if (isFibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
    rl.close();
});