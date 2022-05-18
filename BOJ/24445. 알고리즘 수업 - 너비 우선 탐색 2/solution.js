const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [V, E, begin] = info.split(' ').map(Number);
const graph = Array.from(Array(V + 1), () => []);

for (let d of data) {
    const [from, to] = d.split(' ');
    graph[from].push(to);
    graph[to].push(from);
}

graph.forEach(nodes => nodes.sort((a, b) => b - a));

const BFS = (begin) => {
    const q = [begin];
    const visited = Array(V + 1).fill(0);
    let cnt = 1;
    visited[begin] = cnt;

    while (q.length) {
        const curr = q.shift();

        for (let node of graph[curr]) {
            if (visited[node]) continue;
            cnt += 1;
            visited[node] = cnt;
            q.push(node);
        }
    }
    console.log(visited.slice(1).join('\n'));
}

BFS(begin);