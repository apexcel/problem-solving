const [iter, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

const solution = (map) => {
    const keys = Array.from(map.keys());
    const visited = Array(keys.length).fill(0);
    const picked = [];
    let ret = 0;

    const pick = (begin, depth, limit, candidates) => {
        if (depth === limit) {
            const sum = picked.reduce((acc, cur) => acc * map.get(cur).length, 1);
            ret += sum;
            return;
        }

        for (let i = begin; i < candidates.length; i += 1) {
            if (!visited[i]) {
                visited[i] = 1;
                picked.push(candidates[i]);
                pick(i + 1, depth + 1, limit, candidates);
                picked.pop();
                visited[i] = 0;
            }
        }
    }

    for (let i = 0; i < keys.length; i += 1) {
        pick(0, 0, i + 1, keys);
    }

    return ret;
}

const res = [];
for (let i = 0; i < data.length; i += 1) {
    const cnt = +data[i];
    const map = new Map();
    for (let j = 1; j <= cnt; j += 1) {
        const [_, part] = data[i + j].split(' ');
        map.set(part, map.get(part) + 1 || 1);
    }
    res.push(solution(map));
    i += cnt;
}
console.log(res.join('\n'));
