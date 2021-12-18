const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, k] = input[0].split(' ').map(Number), nums = input[1].split(' ').map(Number);
let val = 0;
const calc = x => {
    if (x > n) return;
    if (x > val) val = x;
    for (let i = 0; i < k; i += 1) {
        calc(x * 10 + nums[i]);
    }
};

calc(0);
console.log(val);
