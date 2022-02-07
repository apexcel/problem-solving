const n = +require('fs').readFileSync('/dev/stdin').toString();
let a = 0, b = 1, c = 1;
for (let i = 3; i <= n; i += 1) {
    [a, b] = [b, c];
    c = (a + b) % 1000000007;
}
console.log(n === 0 ? 0 : c);
