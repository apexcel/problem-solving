const data = require('fs').readFileSync('./data.in').toString().trim().split('\n').map(Number);
data.pop();

const primes = Array(1000001).fill(1);
primes[0] = primes[1] = 0;
for (let i = 2; i * i < primes.length; i += 1) {
    if (!primes[i]) continue;
    for (let j = i * i; j < primes.length; j += i) {
        primes[j] = 0;
    }
}

let res = '';
for (let k of data) {
    for (let i = 3; i < primes.length; i += 1) {
        if (primes[i] && primes[k - i]) {
            res += `${k} = ${i} + ${k - i}\n`;
            break;
        }
    }
}
console.log(res);