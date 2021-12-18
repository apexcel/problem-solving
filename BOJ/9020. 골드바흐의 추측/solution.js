const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const sieve = max => {
    const p = Array(max + 1).fill(1);
    p[0] = p[1] = 0;
    for (let i = 2; i * i < max + 1; i += 1) {
        for (let j = i + i; j < max + 1; j += i) {
            p[j] = 0;
        }
    }
    return p;    
};
const primes = sieve(10000);

const solution = n => {
    let i = j = n / 2;
    while (true) {
        if (primes[i] && primes[j]) return [i, j];
        i -= 1;
        j += 1;
    }
};

let res = '';
for (let i = 1; i <= +input[0]; i += 1) {
    const [a, b] = solution(+input[i]);
    res += `${a} ${b}\n`;
}
console.log(res);