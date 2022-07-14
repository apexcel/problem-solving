// const [n, k] = require('fs').readFileSync('./data.in').toString().trim().split(' ').map(Number);
const n = 8, k = 3;
const test = Array(n + 1).fill(0).map((_, i) => i);

const tmp = []
const map = new Map();

let cnt = 0
const repeatedPermut = (depth) => {
  if (depth === k) {
    if (tmp.reduce((acc, cur) => acc + cur, 0) === n) {
      console.log(tmp);
      const key =`[${tmp.sort((a, b) => a - b).join(', ')}]`;
      map.set(key, map.get(key) + 1 || 1)
      cnt += 1;
    }
    return;
  }

  for (const divisor of test) {
    tmp.push(divisor);
    repeatedPermut(depth + 1);
    tmp.pop();
  }
};

repeatedPermut(0)
console.log(map)
