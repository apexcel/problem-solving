const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [0, 1];
const fib = k => {
    if (dp[k] > -1) return dp[k];
    return dp[k] = fib(k - 2) + fib(k - 1);
};
console.log(fib(n));