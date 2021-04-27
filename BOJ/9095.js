const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(sc[0]), nums = sc.slice(1).map(v => +v);
let cache = [1, 2, 4, 7], p = '';

for (let i = 4; i <= 11; i += 1) {
    cache[i] = cache[i - 3] + cache[i - 2] + cache[i - 1];
}
nums.forEach(v => p += `${cache[v - 1]}\n`);
console.log(p);

/*
    1 => [1] 1개
    2 => [[1, 1], [2]] 2개
    3 => [[1,1,1], [1,2], [2,1], [3]] 3개
    4 => [[1,1,1,1], [1,1,2], [1,2,1], ..., [3, 1], [1, 3]] 7개

    1, 2, 3으로 만들 수 있는 경우의 수를 찾는 함수를 f라 할 때
    f(n) = f(n-3) + f(n-2) + f(n-1)의 규칙이 생긴다.
    4의 경우 3을 만드는 경우에 1을 더하고 [[1, 1, 1, 1], [1, 2, 1], [2, 1, 1], [3, 1]]
    3은 2를 만드는 경우에 2을 더하고 [[1, 1, 2], [2, 2]]
    2는 1을 만드는 경우에 3을 더하면 된다. [1, 3]
*/