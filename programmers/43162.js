// https://programmers.co.kr/learn/courses/30/lessons/43162

const dfs = (graph, current, isVisited) => {
    isVisited[current] = true;
    // 현재 정점과 연결된 정점들을 탐색
    for (let k = 0; k < graph[current].length; k += 1) {
        const next = graph[current][k];
        // 만약 연결된 정점이고 방문하지 않았다면
        if (next !== 0 && !isVisited[k]) {
            // 계속해서 탐색
            dfs(graph, k, isVisited);
        }
    }
};

const dfsAll = (n, computers) => {
    let count = 0;
    const isVisited = Array(n).fill(false);
    // 전체 정점들에 대해서 순회
    for (let i = 0; i < n; i += 1) {
        if (!isVisited[i]) {
            // 방문하지 않았다면 탐색
            dfs(computers, i, isVisited);
            // 호출된 횟수
            count += 1;
        }
    }
    console.log(count)
    return count;
};

dfsAll(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])
dfsAll(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])