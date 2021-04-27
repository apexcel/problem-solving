const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const min = parseInt(input[0], 10);
const max = parseInt(input[1], 10);
let list = [];
function isPrime(N) {
    if (N < 2) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(N), 10); i += 1) {
        if (N % i === 0) return false;
    }
    return true;
}

for (let i = min; i <= max; i += 1) {
    if (isPrime(i)) {
        list.push(i);
    }
}

const res = list.sort((a, b) => a - b);
if (res.length < 1) {
    console.log(-1);
}
else {
    console.log(res.reduce((acc, cur) => acc + cur));
    console.log(res[0]);
}
