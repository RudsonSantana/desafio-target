let INDICE: number = 12;
let SOMA: number = 0;
let K: number = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(`O valor final da SOMA é: \x1b[1m${SOMA}\x1b[0m`);