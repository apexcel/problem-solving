const [info, data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const nums = data.split(' ').map(Number).sort((a, b) => a - b);

const tmp = [], res = [];
const visited = Array(n).fill(0);

const pick = (depth) => {
    if (depth === m) {
        res.push(tmp.join(' '));
        return;
    }

    for (let i = 0; i < nums.length; i += 1) {
        if (visited[i]) continue;
        visited[i] = 1;
        tmp.push(nums[i]);
        pick(depth + 1);
        tmp.pop()
        visited[i] = 0;
    }
}

pick(0);
console.log(res.join('\n'));