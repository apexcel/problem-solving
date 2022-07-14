const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const pairs = data.map(d => d.split(' ').map(Number));

const fnD = n => {
  const ret = 2 * n;
  return ret > 9999 ? ret % 10000 : ret;
}

const fnS = n => {
  const ret = n - 1;
  return n === 0 ? 9999 : ret;
}

const fnL = n => {
  const quot = ~~(n / 1000);
  const rem = n % 1000;
  return rem * 10 + quot;
}

const fnR = n => {
  const quot = ~~(n / 10);
  const rem = n % 10;
  return rem * 1000 + quot;
}

const fns = [
  ['D', fnD],
  ['S', fnS],
  ['L', fnL],
  ['R', fnR]
];

const visited = Array(10000);

const solution = (origin, target) => {
  const q = [[origin, '']];
  let head = 0;
  visited.fill(0);
  visited[origin] = 1;

  while (head < q.length) {
    const [cur, ops] = q[head];
    head += 1;
    if (cur === target) return ops;

    for (const [name, fn] of fns) {
      const next = fn(cur);
      if (!visited[next]) {
        visited[next] = 1;
        q.push([next, ops + name]);
      }
    }
  }
}

console.log(pairs.map(([origin, target]) => solution(origin, target)).join('\n'));