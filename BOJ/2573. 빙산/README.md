---
문제번호: 2573
문제이름: '빙산'
주소: 'https://www.acmicpc.net/problem/2573'
분류: ['구현', '그래프 이론', '그래프 탐색', '너비 우선 탐색', '깊이 우선 탐색']
---

# 풀이

빙하가 분리되었을 때를 어떻게 파악할 것인가에 대해 고민한 문제. 그래프상에서 절단점이나 절단선을 찾아야하는 문제인 줄 알았다. 그러나 답은 간단했다. 빙하가 한 덩어리라면 BFS로 탐색시 한 번에 모든 구역을 탐색할 것이므로 visited 배열에서 체크를 한다면 모두 true가 될 것이다. 따라서 모두 true라면 다시 BFS 탐색을 시도한다. 이 탐색에서 모두 true가 아니라면 2번 이상 탐색한 것이고 따라서 빙하는 2개 이상이다.

그러나 아래와 같이 코드를 작성하면 배열이 모두 빙하인 경우에 무한루프에 빠지는데, 다행히도 문제에서 첫 행과 열 그리고 마지막 행과 열에는 바다로 주어진다. 따라서 무한루프에 빠지지 않는 것.

```js
const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [h, w] = info.split(' ').map(Number);
const mat = data.map(d => d.split(' ').map(Number));

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < h && x < w;

const initMatrix = () => Array.from(Array(h), () => Array(w).fill(0));

// 방문한 빙하를 위한 배열
let isVisited = initMatrix();

const bfs = (x, y) => {
    const q = [[x, y]];
    // 빙하를 방문했다면 해당 빙하의 방문을 체크한다.
    isVisited[y][x] = 1;

    while (q.length) {
        const [cx, cy] = q.shift();

        for (let [dx, dy] of dir) {
            const nx = cx + dx, ny = cy + dy;
            // 다음에 방문할 곳이 빙하인지 그리고 아직 방문하지 않은 곳인지 검사
            if (isValidPosition(nx, ny) && !isVisited[ny][nx]) {
                // 다음 방문할 곳이 빙하라면 큐에 집어넣으면서 방문 체크를 한다.
                // 넣어면서 체크하는 이유는 중복 삽입 방지
                if (mat[ny][nx]) {
                    isVisited[ny][nx] = 1;
                    q.push([nx, ny]);
                }
                // 바다라면 빙하를 녹이는데 음수가 될 수 있으니 0보다 작으면 녹이지 않는다.
                else {
                    mat[cy][cx] += mat[cy][cx] ? -1 : 0;
                }
            }
        }
    }
}

const melt = (year) => {
    // 빙하의 개수
    // 만약 이 숫자가 0이라는 것은 더 이상 녹일 수 없다는 것이며
    // 2인경우 빙하가 2개 이상이라는 것
    let glaciers = 0;
    for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
            if (mat[y][x] && !isVisited[y][x]) {
                bfs(x, y);
                glaciers += 1;
            }
        }
    }

    if (glaciers >= 2) {
        console.log(year);
        process.exit();
    }
    else if (glaciers === 0) {
        console.log(0);
        process.exit();
    }

    isVisited = initMatrix();
    melt(year + 1);
}

melt(0);
```
