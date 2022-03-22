const [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = +n;
const arr = input.split(' ').map(Number);
const ltor = Array(len).fill(-1);
const rtol = Array(len).fill(-1);

const LIS = (target, begin, order = true) => {
    let ret = target[begin];
    if (ret !== -1) return ret;
    ret = 1;

    if (order) {
        for (let i = begin; i >= 0; i -= 1) {
            if (arr[begin] > arr[i]) {
                ret = Math.max(ret, LIS(target, i, order) + 1);
            }
        }
    }
    else {
        for (let i = begin; i < len; i += 1) {
            if (arr[begin] > arr[i]) {
                ret = Math.max(ret, LIS(target, i, order) + 1);
            }
        }
    }
    return target[begin] = ret;
}

for (let i = 0; i < len; i += 1) {
    LIS(ltor, i);
    LIS(rtol, i, false);
}

const res = ltor.map((v, i) => rtol[i] + v);
let mx = -1;
for (let v of res) {
    if (mx < v) mx = v;
}
console.log(mx - 1);