function solution(N, roads, K) {
    const INF = 987654321;
    const adjMat = Array.from(Array(N + 1), () => Array(N + 1).fill(INF));

    for (let i = 0; i <= N; i += 1) {
        adjMat[i][i] = 0;
    }

    roads.forEach(([src, dest, weight]) => {
        adjMat[src][dest] = Math.min(adjMat[src][dest], weight);
        adjMat[dest][src] = Math.min(adjMat[dest][src], weight);
    })

    for (let k = 1; k <= N; k += 1) {
        for (let i = 1; i <= N; i += 1) {
            for (let j = 1; j <= N; j += 1) {
                adjMat[i][j] = Math.min(adjMat[i][j], adjMat[i][k] + adjMat[k][j]);
            }
        }
    }

    console.table(adjMat)

    const ret = adjMat[1].filter(v => v <= K).length;
    console.log(ret)
    return ret;
}

// solution(5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3)
solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4)