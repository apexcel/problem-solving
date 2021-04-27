const scan = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(el => Boolean(el)).map(el => parseInt(el, 10));
const tc = scan[0];
const n = scan.splice(1);
let cache = [0, 1, 1, 1];
const P = (k) => {
    if (k <= 0) return 0;
    if (cache[k]) return cache[k];
    cache[k] = P(k-2) + P(k-3);
    return cache[k];
};

for (let i = 0; i < tc; i++) {
    console.log(P(n[i]));
}