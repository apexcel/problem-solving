const sc = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.trim().split(' ').map(e => parseInt(e, 10)));

const total = sc[0][0];
const INF = 987654321;
let ans = '';
let info = 1;

const BellmanFord = (V, g) => {
    // Infinity로 초기화 하면 안 됨
    const dist = new Array(V + 1).fill(INF);
    let update = false;
    dist[1] = 0;

    for (let iter = 1; iter <= V; iter += 1) {
        update = false;
        for (let curr = 1; curr <= V; curr += 1) {
            for (let i = 0; i < g[curr].length; i += 1) {
                const [node, weight] = g[curr][i];
                if (dist[node] > dist[curr] + weight) {
                    if (node === 1) return true;
                    dist[node] = dist[curr] + weight;
                    update = true;
                }
            }
        }
        if (!update) return false;
    }
    return update;
};

for (let i = 0; i < total; i += 1) {
    const [N, M, W] = sc[info];
    const g = Array.from(Array(N + 1), () => new Array);
    for (let i = 1; i <= M + W; i += 1) {
        const [S, E, T] = sc[info + i];
        if (i <= M) {
            g[S].push([E, T]);
            g[E].push([S, T]);
        }
        else {
            g[S].push([E, (-1 * T)]);
        }
    }
    info += M + W + 1;
    ans += BellmanFord(N, g) ? 'YES\n' : 'NO\n';
}
console.log(ans);