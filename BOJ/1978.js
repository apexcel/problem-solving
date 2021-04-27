const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const tc = parseInt(input[0], 10);
const nums = input[1].split(' ').map(el => parseInt(el, 10)).filter(el => isPrime(el));

function isPrime(N) {
    if (N < 2) return false;
    if (N === 2) return true;
    for (let i = 2; i < N; i += 1) {
        if (N % i === 0) return false;
    }
    return true;
}

console.log(nums.length)
