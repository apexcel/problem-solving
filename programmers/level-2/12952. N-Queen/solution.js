/**
 * 
 * @param {number} n
 * @returns {number} 
 */
const solution = (n) => {
  const mat = Array.from(Array(n), () => Array(n).fill(0));
  let queens = 0, ret = 0;

  const isAllocatable = (x, y) => {
    const srcSub = x - y, srcSum = x + y;
    for (let r = 0; r < n; r += 1) {
      for (let c = 0; c < n; c += 1) {
        if (r === y && c === x) continue;
        const curSub = c - r, curSum = c + r;
        if ((r === y || c === x || srcSub === curSub || srcSum === curSum) && mat[r][c] === 1) {
          return false;
        }
      }
    }
    return true;
  }

  const allocation = (y) => {
    if (y >= n && queens === n) {
      ret += 1;
      return;
    }

    for (let x = 0; x < n; x += 1) {
      if (isAllocatable(x, y)) {
        mat[y][x] = 1;
        queens += 1;
        allocation(y + 1);
        queens -= 1;
        mat[y][x] = 0;
      }
    }
  }

  allocation(0);
  return ret;
}

solution(5)