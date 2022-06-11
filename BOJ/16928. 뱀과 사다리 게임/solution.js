const [_, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const map = new Map();
data.forEach(d => {
    const [src, dest] = d.split(' ').map(Number);
    map.set(src, dest);
});

const BFS = (begin) => {
    const q = [[begin, 0]]
    const visited = Array(101).fill(0);
    visited[begin] = 1;

    while (q.length) {
        const [curr, cnt] = q.shift();

        if (curr === 100) {
            console.log(cnt);
            return;
        }

        for (let i = 1; i <= 6; i += 1) {
            let next = curr + i;
            if (next > 100 || visited[next]) continue;
            if (map.has(next)) next = map.get(next);
            visited[next] = 1;
            q.push([next, cnt + 1]);
        }
    }
}

BFS(1);