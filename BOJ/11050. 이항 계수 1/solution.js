const [n, k] = require('fs').readFileSync('./data.in').toString().trim().split(' ').map(Number);
const smaller = n - k > k ? k : n - k;
let res = 1;
if (k) {
    for (let i = 0; i < smaller; i += 1) {
        res *= (n - i) / (smaller - i);
    }
}
console.log(Math.round(res));
