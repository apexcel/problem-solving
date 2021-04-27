const d = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) =>
        x
            .trim()
            .split(" ")
            .map((x) => +x)
    );
const TC = +d[0];

/* ref: https://www.acmicpc.net/source/13375349 */

let output = "";
let s = 1;
for (let t = 0; t < TC; t++) {
    function bellmanford(startNode) {
        const dist = new Array(N + 1).fill(2 ** 50);
        let update;

        dist[startNode] = 0;
        for (let k = 1; k <= N; k++) {
            update = false;
            for (let here = 1; here <= N; ++here) {
                for (let i = 0; i < adj[here].length; i++) {
                    const [node, w] = adj[here][i];
                    if (dist[node] > dist[here] + w) {
                        if (node === startNode) return true;
                        dist[node] = dist[here] + w;
                        update = true;
                    }
                }
            }
            if (!update) return false;
        }
        return update;
    }
    const [N, M, W] = d[s];
    const adj = new Array(N + 1).fill(0).map((_) => []);

    for (let i = 1; i <= M; i++) {
        const [S, E, T] = d[s + i];
        adj[S].push([E, T]);
        adj[E].push([S, T]);
    }

    for (let i = M + 1; i <= M + W; i++) {
        const [S, E, T] = d[s + i];
        adj[S].push([E, -T]);
    }
    s += M + W + 1;
    if (bellmanford(1)) output += "YES\n";
    else output += "NO\n";
}
console.log(output);