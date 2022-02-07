const [n, ...rest] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const radix = Array(8001).fill(0);
let mx = -987654321, mn = 987654321, sum = 0;
let res = '';

for (let i = 0; i < rest.length; i += 1) {
    const num = parseInt(rest[i]);
    sum += num;
    if (mx < num) mx = num;
    if (mn > num) mn = num;
    radix[num + 4000] += 1;
}
res += Math.round(sum / rest.length) + '\n';

let cnt = 0, median = 0;
for (median = mn + 4000; median <= mx + 4000; median += 1) {
    cnt += radix[median];
    if (cnt > Math.floor(rest.length / 2)) break;
}
res += (median - 4000) + '\n';

let modeMax = 0, mode = 0, flag = false;
for (let i = mn + 4000; i <= mx + 4000; i += 1) {
    if (radix[i] > modeMax) {
        modeMax = radix[i];
        mode = i - 4000;
        flag = true;
    }
    else if (radix[i] === modeMax && flag) {
        modeMax = radix[i];
        mode = i - 4000;
        flag = false;
    }
}

res += mode + '\n';
res += mx - mn + '\n';
console.log(res);