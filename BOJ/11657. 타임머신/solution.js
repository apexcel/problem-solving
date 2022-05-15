const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [V, E] = info.split(' ').map(Number);
const INF = Number.MAX_SAFE_INTEGER;
const graph = Array.from(Array(V + 1), () => []);

for (let datum of data) {
    const [from, to, weight] = datum.split(' ').map(Number);
    graph[from].push([to, weight]);
}


const BellmanFord = () => {
    const dist = Array(V + 1).fill(INF);
    let isUpdated;
    dist[1] = 0;

    for (let i = 1; i <= V; i += 1) {
        isUpdated = false;

        for (let curr = 1; curr <= V; curr += 1) {
            for (let [next, weight] of graph[curr]) {
                if (dist[curr] === INF) continue;
                if (dist[next] > dist[curr] + weight) {
                    dist[next] = dist[curr] + weight;
                    isUpdated = true;
                }
            }
        }

        if (!isUpdated) break;
    }

    if (isUpdated) {
        console.log(-1);
        return;
    }

    let res = '';
    for (let i = 2; i < dist.length; i += 1) {
        res += (dist[i] === INF ? -1 : dist[i]) + '\n';
    }
    console.log(res);
}

BellmanFord()