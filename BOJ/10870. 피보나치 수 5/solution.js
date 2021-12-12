const n = +require('fs').readFileSync('/dev/stdin').toString();
const fib = x => {
    if (x <= 1) return x;
    return fib(x - 2) + fib(x - 1);
};
console.log(fib(n));