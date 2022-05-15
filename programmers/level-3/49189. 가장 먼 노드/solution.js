function solution(n, edges) {
    const graph = Array.from(Array(n + 1), () => []);
    const visited = Array(n + 1).fill(0);
    edges.forEach(([src, dest]) => {
        graph[src].push(dest);
        graph[dest].push(src);
    });
    const q = [[1, 0]];
    visited[1] = 1;
    let ret = 0, mx = 0;

    while (q.length) {
        const [node, cnt] = q.shift();

        if (cnt > mx) {
            mx = cnt;
            ret = 1;
        }
        else if (cnt === mx) {
            ret += 1;
        }

        for (let target of graph[node]) {
            if (visited[target]) continue;
            visited[target] = 1;
            q.push([target, cnt + 1]);
        }
    }

    console.log(ret);
}