const [n, r, c] = require('fs').readFileSync('./data.in').toString().trim().split(' ').map(Number);
const SIZE = 2 << (n - 1);
let cnt = 0;

const getQuadrant = (row, col, half) => {
  let quad = 0;
  if (row >= half) quad += 2;
  if (col >= half) quad += 1;

  return quad;
}

const divide = (x, y, size) => {
  if (size <= 1) return;
  const half = size >> 1;
  const quad = getQuadrant(x, y, half);
  cnt += quad * (half ** 2);
  if (quad === 0) divide(x, y, half);
  if (quad === 1) divide(x, y - half, half);
  if (quad === 2) divide(x - half, y, half);
  if (quad === 3) divide(x - half, y - half, half);
}

divide(r, c, SIZE);
console.log(cnt);