const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const V = +n;
const graph = Array.from(Array(V + 1), () => []);

data.forEach(d => {
    const [src, dest] = d.split(' ').map(Number);
    graph[src].push(dest);
    graph[dest].push(src);
});

const visited = Array(V + 1).fill(0);

const DFS = (curr, parent) => {
    if (visited[curr]) return;
    visited[curr] = parent;

    for (let node of graph[curr]) {
        DFS(node, curr);
    }
}

DFS(1, 0);

console.log(visited.slice(2).join('\n'));