const n = +require('fs').readFileSync('/dev/stdin').toString();
console.log(n === 0 ? 0 : (n * (n - 1) / 2));