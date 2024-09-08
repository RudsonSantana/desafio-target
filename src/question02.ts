import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countLetterA (input: string): { exists: boolean; count: number } {
  const regex = /a/gi;
  const matches = input.match(regex);

  return {
    exists: matches !== null,
    count: matches ? matches.length : 0,
  };
};

rl.question('Digite uma frase: ', (input: string) => {
  const result = countLetterA(input);

  if (result.exists) {
    console.log(`\nA letra 'a' aparece ${result.count} vezes.`);
  } else {
    console.log(`\nA letra 'a' não aparece na string.`);
  }

  rl.close();
});