---
문제번호: 14503
문제이름: '로봇 청소기'
주소: 'https://www.acmicpc.net/problem/14503'
분류: ['구현', '시뮬레이션']
---

# 풀이

DFS 종료 후 이전 콜 스택으로 돌아오는 게 후진하는 조건이랑 같다고 생각했는데 그렇게 하면 틀리고 한 번 해당 방향으로 진입하면 다른 방향으로의 탐색은 하지 못하도록 바로 `return`하고 후진하는 조건을 따로 만들어 주어야 한다. 그렇지 않으면 콜 스택 종료 후 이전에 마무리 되지 않은 `for`문에 의해 방향이 바뀌기 때문.
**실패 케이스**

```js
const dfs = (x, y, look) => {
    if (!isVisited[y][x]) {
        cnt += 1;
        isVisited[y][x] = 1;
    }
    
    for (let i = 0; i < 4; i += 1) {
        look = (look + 3) % 4;
        const [dx, dy] = dir[look];
        const nx = x + dx, ny = y + dy;
        if (isValidPosition(nx, ny) && !isVisited[ny][nx] && !mat[ny][nx]) {
            dfs(nx, ny, look);
            // 갈 수 있는 곳이 없다면 콜 스택 종료후 여기로 돌아온다.
            // 만약 for문이 종료되지 않았다면 방향이 바뀌게 된다.
        }
    }
}
```

**성공 케이스**

```js
const dfs = (x, y, look) => {
    if (!isVisited[y][x]) {
        cnt += 1;
        isVisited[y][x] = 1;
    }
    
    for (let i = 0; i < 4; i += 1) {
        look = (look + 3) % 4;
        const [dx, dy] = dir[look];
        const nx = x + dx, ny = y + dy;
        if (isValidPosition(nx, ny) && !isVisited[ny][nx] && !mat[ny][nx]) {
            dfs(nx, ny, look);
            // 한 번 전진하면 방향을 바꾸지 않도록 바로 종료
            return;
        }
    }

    // 후진 하는 경우 가능한 위치내에 벽이 아닌경우 방향을 고정하고 후진한다.
    const [dx, dy] = dir[(look + 2) % 4];
    const nx = x + dx, ny = y + dy;
    if (isValidPosition(nx, ny) && !mat[ny][nx]) dfs(nx, ny, look);
}
```