const [n, input] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const table = {
    '000000': 'A',
    '001111': 'B',
    '010011': 'C',
    '011100': 'D',
    '100110': 'E',
    '101001': 'F',
    '110101': 'G',
    '111010': 'H',
}
let res = '';
for (let i = 0; i < input.length; i += 6) {
    const packet = input.slice(i, i + 6);
    let a, mx = 4;

    for (let [code, value] of Object.entries(table)) {
        const tmp = Array.prototype.reduce.call(code, (acc, cur, i) => acc += cur === packet[i] ? 1 : 0, 0);

        if (tmp > mx) {
            mx = tmp;
            a = value;
        }
    }

    if (!a) {
        console.log(Math.floor(i / 6) + 1);
        process.exit();
    }

    res += a;
}
console.log(res);