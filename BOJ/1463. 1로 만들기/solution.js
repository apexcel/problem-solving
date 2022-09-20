const n = +require('fs').readFileSync('/dev/stdin').toString().trim();
const visited = Array(1e6 + 1).fill(0);
const dirs = [1, 2, 3];
const q = [1];
let head = 0;

while (head < q.length) {
    const x = q[head++];

    if (x === n) {
        console.log(visited[x]);
        process.exit(0);
    }

    for (const dx of dirs) {
        const nx = dx === 1 ? x + 1 : x * dx;
        if (nx > n || visited[nx]) continue;
        visited[nx] = visited[x] + 1;
        q.push(nx);
    }
}