import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a name ", (name) => {
  console.log(`Hi ${name}!`);
  rl.close();
});

