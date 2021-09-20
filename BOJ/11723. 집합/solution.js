// https://www.acmicpc.net/problem/11723
const query = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const len = +query[0];
let bit = 0;

for (let i = 1; i <= len; i += 1) {
    const [fn, x] = query[i];

    if (fn === 'add') bit |= (1 << x);
    else if (fn === 'remove') bit &= -1 * ~(1 << x);
    else if (fn === 'check') console.log(`${bit & (1 << x) ? 1 : 0}`);
    else if (fn === 'toggle') bit & (1 << x) ? bit &= -1 * ~(1 << x) : bit |= (1 << x);
    else if (fn === 'all') bit = (1 << 21) - 1;
    else bit = 0;
}