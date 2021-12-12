const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
console.log(input[1].split(' ').reduce((cnt, num) => cnt = isPrime(num) ? cnt += 1 : cnt, 0));

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i += 1) {
        if (n % i === 0) return false;
    }
    return true;
}