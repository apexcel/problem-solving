const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(parseInt(line, 10));
});
rl.on('close', () => {
    const [x, y] = input;
    (x > 0) ? console.log(y > 0 ? 1 : 4) : console.log(y > 0 ? 2 : 3);
    process.exit();
});