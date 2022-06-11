const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [h, w] = info.split(' ').map(Number);
const mat = data.map(d => d.split(' ').map(Number));

const dirs = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0]
];

const dp = Array.from(Array(h), () => Array(w).fill(-1));

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < h && x < w;

const DFS = (x, y) => {
  if (y === h - 1 && x === w - 1) {
    dp[y][x] = 0;
    return 1;
  }
  if (dp[y][x] > -1) return dp[y][x];
  dp[y][x] = 0;

  for (const [dx, dy] of dirs) {
    const nx = x + dx, ny = y + dy;
    if (isValidPosition(nx, ny) && mat[y][x] > mat[ny][nx]) {
      dp[y][x] += DFS(nx, ny);
    }
  }

  return dp[y][x];
}

console.log(DFS(0, 0));