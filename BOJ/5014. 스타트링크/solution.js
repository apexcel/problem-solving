const [f, s, g, u, d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const bfs = begin => {
    const q = [[begin, 0]];
    const isVisited = Array(f + 1).fill(0);
    isVisited[begin] = 1;

    while (q.length) {
        const [cur, cnt] = q.shift();
        if (cur === g) {
            console.log(cnt)
            return;
        }

        const next = [cur + u, cur - d];
        for (let n of next) {
            if (!isVisited[n] && n <= f && n >= 1) {
                isVisited[n] = 1;
                q.push([n, cnt + 1]);
            }
        }
    }
    console.log('use the stairs');
}

bfs(s);