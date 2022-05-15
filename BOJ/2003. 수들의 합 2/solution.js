const [info, data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const nums = data.split(' ').map(Number);

let sum = 0, cnt = 0;
for (let i = 0, j = 0; j <= nums.length;) {
    if (sum <= m) {
        sum += nums[j];
        j += 1;
    }
    else {
        sum -= nums[i];
        i += 1;
    }
        
    if (sum === m) cnt += 1;
}

console.log(cnt);