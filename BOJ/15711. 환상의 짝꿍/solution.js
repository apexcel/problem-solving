const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

const primes = Array(2000001).fill(1);

primes[0] = primes[1] = 0;
for (let i = 2; i < primes.length; i += 1) {
    if (!primes[i]) continue;
    for (let j = i * i; j < primes.length; j += i) {
        primes[j] = 0;
    }
}

const extracted = [];
for (let i = 2; i < primes.length; i += 1) {
    if (primes[i]) extracted.push(i);
}

const isPrime = x => {
    for (let i = 0; i < extracted.length && extracted[i] ** 2 <= x; i += 1) {
        if (x % extracted[i] === 0) return false;
    }
    return true;
}

let res = '';
for (let pair of data) {
    const [a, b] = pair.split(' ').map(Number);
    let sum = a + b, p = false;
    if (sum < 4) {
        p = false;
    }
    else if (sum % 2 === 0) p = true
    else p = isPrime(sum - 2);

    res += (p ? 'YES' : 'NO') + '\n';
}
console.log(res);