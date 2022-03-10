const [info, ...nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);

let lo = 0, hi = 0, mid;
let balance;

const arr = nums.map(num => {
    num = parseInt(num);
    hi += num;
    lo = lo < num ? num : lo;
    return num;
});

while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    balance = mid;

    let count = arr.reduce((cnt, cur) => {
        if (balance - cur < 0) {
            balance = mid;
            cnt += 1;
        }
        balance -= cur;
        return cnt;
    }, 1);

    count > m ? lo = mid + 1 : hi = mid - 1;
}
console.log(mid);