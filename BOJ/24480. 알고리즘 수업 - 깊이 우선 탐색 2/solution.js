const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [V, E, begin] = info.split(' ').map(Number);

const graph = Array.from(Array(V + 1), () => []);

for (let edge of data) {
    const [from, to] = edge.split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

graph.forEach(nodes => nodes.sort((a, b) => b - a));

const visited = Array(V + 1).fill(0);
let depth = 1;

const DFS = (begin) => {
    visited[begin] = depth;
    for (let dest of graph[begin]) {
        if (visited[dest]) continue;
        depth += 1;
        DFS(dest);
    }
}
DFS(begin);

console.log(visited.slice(1).join('\n'));
