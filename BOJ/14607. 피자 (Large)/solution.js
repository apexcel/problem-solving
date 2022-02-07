const n = BigInt(require('fs').readFileSync('/dev/stdin').toString());
console.log(n === 0 ? 0n : (n * (n - 1n) / 2n).toString());