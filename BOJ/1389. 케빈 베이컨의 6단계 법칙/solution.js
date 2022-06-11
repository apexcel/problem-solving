const data = require('fs').readFileSync('./data.in').toString().trim().split('\n').map(d => d.split(' ').map(Number));
const [V, E] = data[0];
const graph = Array.from(Array(V + 1), () => []);

for (let i = 1; i < data.length; i += 1) {
    const [src, dest] = data[i];
    graph[src].push(dest);
    graph[dest].push(src);
}

const BFS = (begin) => {
    const q = [[begin, 0]];
    const visited = Array(V + 1).fill(0);
    visited[begin] = -1;

    while (q.length) {
        const [curr, cnt] = q.shift();

        for (let node of graph[curr]) {
            if (visited[node]) continue;
            visited[node] = cnt + 1;
            q.push([node, cnt + 1]);
        }
    }
    const ret = visited.reduce((sum, cur) => sum + cur, 1);
    return ret;
}

let mn = 987654321, idx = 1;
for (let i = 1; i <= V; i += 1) {
    const sum = BFS(i);
    if (mn > sum) {
        mn = sum;
        idx = i;
    }
}
console.log(idx);