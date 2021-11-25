const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, x] = input[0].split(' ').map(v => +v)
const nums = input[1].split(' ');
let str = '';

for (let i = 0; i < nums.length; i += 1) {
    if (x > +nums[i]) str += `${nums[i]} `;
}
console.log(str);