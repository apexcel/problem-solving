---
문제번호: 1520
문제이름: '내리막 길'
주소: 'https://www.acmicpc.net/problem/1520'
분류: ['다이나믹 프로그래밍', '그래프 이론', '그래프 탐색', '깊이 우선 탐색']
---

## 첫 번째 풀이

시간 초과

```js
const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [h, w] = info.split(' ').map(Number);
const mat = data.map(d => d.split(' ').map(Number));

const dirs = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0]
];

const visited = Array.from(Array(h), () => Array(w).fill(0));

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < h && x < w;

let cnt = 0;

const DFS = (x, y) => {
  if (y === h - 1 && x === w - 1) {
    cnt += 1;
    return;
  }

  for (const [dx, dy] of dirs) {
    const nx = x + dx, ny = y + dy;
    if (!isValidPosition(nx, ny) || visited[ny][nx]) continue;
    if (mat[y][x] > mat[ny][nx]) {
      visited[y][x] = 1;
      DFS(nx, ny);
      visited[y][x] = 0;
    }
  }
}

DFS(0, 0);
console.log(cnt);
```

## 두 번째 풀이

방문 체크대신 방문한 지점이 도달 가능한 경로의 일부면서 다른 경로로 갈 수 있을 때 dp배열에 값을 증가시킨다.

```js
const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [h, w] = info.split(' ').map(Number);
const mat = data.map(d => d.split(' ').map(Number));

const dirs = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0]
];
// 방문 체크 대신 분기 가능한지 확인
const dp = Array.from(Array(h), () => Array(w).fill(-1));

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < h && x < w;

const DFS = (x, y) => {
  // 도착 지점에 도달하면 1을 반환
  if (y === h - 1 && x === w - 1) {
    dp[y][x] = 0;
    return 1;
  }
  // 도달 가능한 경로의 일부라면 몇 번이나 분기 가능한지 
  if (dp[y][x] > -1) return dp[y][x];
  // 두 조건 모두 아니라면 0으로 초기화
  dp[y][x] = 0;

  for (const [dx, dy] of dirs) {
    const nx = x + dx, ny = y + dy;
    if (isValidPosition(nx, ny) && mat[y][x] > mat[ny][nx]) {
      // 현재 경로로 분기 가능한 횟수는 다음 분기 가능한 경로들의 합임
      dp[y][x] += DFS(nx, ny);
    }
  }

  return dp[y][x];
}

console.log(DFS(0, 0));
```