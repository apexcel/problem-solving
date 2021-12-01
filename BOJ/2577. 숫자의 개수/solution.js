let mul = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reduce((acc, cur) => acc * (+cur), 1);
const radix = Array(10).fill(0);
while (mul > 0) {
    radix[mul % 10] += 1;
    mul = Math.floor(mul / 10);
}
console.log(radix.join('\n'));