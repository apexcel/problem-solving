let [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
let bin = n.toString(2), res = 0;
for (let i = bin.length - 1; i >= 0 && bin.match(/1/g) && bin.match(/1/g).length > k; i -= 1) {
    if (bin[i] === '1') {
        n += 2 ** (bin.length - 1 - i);
        res += 2 ** (bin.length - 1 - i);
    }
    bin = n.toString(2);
}
console.log(res);