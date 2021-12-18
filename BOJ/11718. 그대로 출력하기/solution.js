const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let str = '';
rl.on('line', line => {
    str += line + '\n';
}).on('close', () => {
    console.log(str);
    process.exit();
});