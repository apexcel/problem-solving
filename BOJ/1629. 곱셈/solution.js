const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

const exps = b.toString(2).split('').reverse().reduce((res, bit, i) =>{
    if (bit === '1') res.push([2 ** i, i]);
    return res;
}, []);

const dp = [a % c];
for (let i = 1, pow = 1; pow <= exps[exps.length - 1][0]; i += 1, pow *= 2) {
    dp[i] = (dp[i - 1] ** 2n) % c;
}

let res = 1n;
for (let i = 0; i < exps.length; i += 1) {
    res = (res * dp[exps[i][1]]) % c;
}
console.log(res.toString());