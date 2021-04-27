const scan = require('fs').readFileSync('/dev/stdin').toString();
let cache = new BigInt64Array(91);
cache[0] = 0n, cache[1] = 1n, cache[2] = 1n;
const fib = (n) => {
    if (cache[n]) return cache[n];
    else {
        return cache[n] = BigInt(fib(n-1) + fib(n-2));
    }
}
console.log(fib(parseInt(scan, 10)).toString().replace('n', ''));