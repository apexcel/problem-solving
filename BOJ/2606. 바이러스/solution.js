const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const graph = Array.from(Array(+input[0] + 1), () => []);
const isVisited = Array(+input[0] + 1).fill(0);
input.slice(2).forEach(pair => {
    const [from, to] = pair.split(' ');
    graph[from].push(to);
    graph[to].push(from);
});

const dfs = () => {
    const q = [graph[1]];
    let cnt = 0;
    while (q.length) {
        const cur = q.shift();
        for (let i = 0; i < cur.length; i += 1) {
            if (!isVisited[cur[i]]) {
                isVisited[cur[i]] = 1;
                cnt += 1;
                q.push(graph[cur[i]]);
            }
        }
    }
    console.log(cnt - 1);
}

dfs();