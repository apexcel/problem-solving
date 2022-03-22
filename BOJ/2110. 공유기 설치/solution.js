const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, c] = info.split(' ').map(Number);
const axis = data.map(Number).sort((a, b) => a - b);

const isPossible = (gap) => {
    let mounted = 0, between = 0;
    for (let x of axis) {
        if (between <= x) {
            mounted += 1;
            between = x + gap;
        }
    }
    return mounted;
}

const solution = () => {
    let lo = 1, hi = axis.at(-1) - axis[0], mid, res = 0;
    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        if (isPossible(mid) >= c) {
            res = mid;
            lo = mid + 1
        }
        else hi = mid - 1;
    }
    return res;
}

console.log(solution());