const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' '));

const isConsecutive = (arr) => {
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i - 1] + 1 !== arr[i]) return false;
    }
    return true;
}

const solution = (data) => {
    const colors = new Map();
    const counter = Array(10).fill(0);
    const nums = data.map(([key, val]) => {
        const k = parseInt(val);
        colors.set(key, colors.has(key) ? [...colors.get(key), k].sort((a, b) => a - b) : [k])
        counter[k] += 1;
        return k;
    }).sort((a, b) => a - b);

    let score = 0;
    const calc = () => {
        if (colors.size === 1) {
            score = isConsecutive(nums) ? 900 : 600;
            score += nums.at(-1);
            return;
        }

        if (counter.includes(4)) {
            score = 800 + counter.indexOf(4);
            return;
        }

        if (counter.includes(3) && counter.includes(2)) {
            const a = counter.indexOf(3);
            const b = counter.indexOf(2);
            score = (a * 10) + b + 700;
            return;
        }

        if (isConsecutive(nums)) {
            score = 500 + nums.at(-1);
            return;
        }

        if (counter.includes(3)) {
            score = 400 + counter.indexOf(3);
            return
        }

        if (counter.includes(2)) {
            const a = counter.indexOf(2);
            const b = counter.lastIndexOf(2);
            score = a !== b ? (b * 10) + a + 300 : a + 200;
            return;
        }

        score = nums.at(-1) + 100;
    }
    calc();
    console.log(score);
}

solution(data);