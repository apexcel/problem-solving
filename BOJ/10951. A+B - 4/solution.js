const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.output
});

rl.on('line', line => {
    const [a, b] = line.split(' ').map(v => +v);
    console.log(a + b);
}).on('close', () => process.exit());