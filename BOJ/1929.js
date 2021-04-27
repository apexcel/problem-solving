const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').filter(Boolean);
const min = parseInt(input[0], 10);
const max = parseInt(input[1], 10);
let str = '';
function isPrime(N) {
    if (N < 2) return false;
    for (let i = 2; i*i <= N; i += 1) {
        if (N % i === 0) return false;
    }
    return true;
}
for (let i = min; i <= max; i += 1) {
    if (isPrime(i)) str += i + '\n'; 
}
console.log(str);