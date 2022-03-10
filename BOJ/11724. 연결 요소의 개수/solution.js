const [g, ...infos] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [v, e] = g.split(' ').map(Number);

const list = Array.from(Array(v + 1), () => []);
const isVisited = Array(v + 1).fill(0);

let cnt = 0;

for (let info of infos) {
    const [from, to] = info.split(' ').map(Number);
    list[from].push(to);
    list[to].push(from);
}

const dfs = x => {
    isVisited[x] = 1;

    for (let vtx of list[x]) {
        if (isVisited[vtx]) continue;
        dfs(vtx);
    }
}

for (let i = 1; i <= v; i += 1) {
    if (isVisited[i]) continue;
    dfs(i);
    cnt += 1;
}
console.log(cnt);