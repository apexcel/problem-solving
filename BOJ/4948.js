const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(Boolean).map(el => parseInt(el, 10));

// Sieve of Eratosthenes
// 0 = false, 1 = true
let soe = new Array((123456 * 2) + 1).fill(1);
let print = '';
soe[0] = soe[1] = 0;

for (let i = 2; i < soe.length; i += 1) {
    if (!soe[i]) continue;
    for (let j = i*2; j < soe.length; j += i) {
        soe[j] = 0;
    }
}

for (let i of input) {
    if (input[i] === 0) break;
    let cnt = 0;
    for (let j = i+1; j <= 2*i; j += 1) {
        soe[j] ? cnt += 1 : null;
    }
    cnt > 0 ? print += cnt + '\n' : null;
}
console.log(print);