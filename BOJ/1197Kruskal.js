const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [V, E] = fs[0].split(' ').map(v => parseInt(v, 10));
const temp = fs.slice(1);
const graph = [];

for (let i = 0; i < E; i += 1) {
    const t = temp[i].split(' ');
    graph[i] = [Number(t[0]), Number(t[1]), Number(t[2])];
}

const parent = [];
const rank = [];
let sum = 0;

const find = u => u === parent[u] ? u : parent[u] = find(parent[u]);
const union = (u, v) => {
    u = find(u), v = find(v);
    rank[u] > rank[v] ? parent[v] = u : parent[u] = v;
    if (rank[u] === rank[v]) rank[v] += 1;
};
for (let i = 1; i <= V; i += 1) {
    parent[i] = i;
    rank[i] = 0;
}
graph.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < graph.length; i += 1) {
    [u, v, w] = graph[i];
    if (find(u) !== find(v)) {
        union(u, v);
        sum += w;
    }
}
console.log(sum);