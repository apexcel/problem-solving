const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const Pythagorean = (a, b, c) => a ** 2 + b ** 2 === c ** 2;
let res = '';

rl.on('line', line => {
    const [a, b, c] = line.split(' ').map(Number).sort((a, b) => a - b);
    if (!a && !b && !c) {
        console.log(res);
        process.exit();
    }
    res += (Pythagorean(a, b, c) ? 'right' : 'wrong') + '\n';
});
