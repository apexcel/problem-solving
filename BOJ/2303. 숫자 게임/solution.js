const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const array = data.map(d => d.split(' ').map(Number));

const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);

const solution = () => {
    let tmp = [], tmpMax = -1, mx = -1, ret = 1;

    const pick = (arr, begin, depth) => {
        if (depth === 3) {
            tmpMax = Math.max(tmpMax, sum(tmp) % 10);
            return;
        }

        for (let i = begin; i < 5; i += 1) {
            tmp.push(arr[i]);
            pick(arr, i + 1, depth + 1);
            tmp.pop();
        }
    };

    array.forEach((nums, i) => {
        tmp = [], tmpMax = -1;
        pick(nums, 0, 0);
        if (mx <= tmpMax) {
            mx = tmpMax;
            ret = i + 1;
        }
    })

    console.log(ret);
}

solution();