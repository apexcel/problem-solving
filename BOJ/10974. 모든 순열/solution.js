const n = +require('fs').readFileSync('/dev/stdin').toString().trim();
const visited = Array(n + 1).fill(0);
const tmp = [];
const res = [];

const permut = depth => {
    if (depth === n) {
        res.push(tmp.join(' '));
        return;
    }

    for (let i = 1; i <= n; i += 1) {
        if (!visited[i]) {
            visited[i] = 1;
            tmp.push(i);
            permut(depth + 1);
            tmp.pop();
            visited[i] = 0;
        }
    }
}

permut(0);
console.log(res.join('\n'));