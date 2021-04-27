const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(sc[0], 10);
const m = parseInt(sc[1], 10);
const edges = sc.slice(2).map(v => v.split(' ').map(e => parseInt(e, 10)));

const parent = [], rank = [];
const makeSet = n => {
    for (let i = 0; i < n; i += 1) {
        parent[i] = i;
        rank[i] = 0;
    }
};

const find = u => {
    if (parent[u] === u) return u;
    return parent[u] = find(parent[u]);
}

const union = (u, v) => {
    u = find(u), v = find(v);
    if (rank[u] > rank[v]) {
        parent[v] = u;
    }
    else {
        parent[u] = v;
        if (rank[u] === rank[v]) {
            rank[v] += 1;
        }
    }
}

const G = [];
let sum = 0, count = 0;
for (let i = 0; i < m; i += 1) {
    const [u, v, w] = edges[i];
    G.push({
        u: u,
        v: v,
        w: w
    });
}
G.sort((a, b) => a.w - b.w);
makeSet(n);

while (count < n - 1) {
    const k = G.shift();
    if (find(k.u) !== find(k.v)) {
        sum += k.w;
        count += 1;
        union(k.u, k.v)
    }
}

console.log(sum);