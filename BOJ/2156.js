const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);
const n = sc[0]; 
let m = sc.slice(1);
m = [0, ...m];
// const tc = [
//     [6, 10, 13, 9, 8, 1],
//     [100, 1, 1, 100, 100, 1],
//     [100, 400, 2, 1, 4, 200],
// ];
// const testing = arrays => {
    // arrays.forEach(v => solution(v.length, v));
// }
// testing(tc);

const solution = (n, m) => {
    let c = Array(n+1).fill(0);
    c[1] = m[1]
    c[2] = c[1] + m[2]

    for (let i = 3; i <= n; i += 1) {
        c[i] = Math.max(c[i-2] + m[i], c[i-3] + m[i-1] + m[i]);
        c[i] = Math.max(c[i], c[i-1]);
    }
    console.log(c[n]);
    // console.table(c);
};

solution(n, m)

/*
    포도주를 2번 연속 안 먹을 경우가 있으니 이를 감안해야 한다.
    예시 배열 [1, 2, 3, ...]가 있을 경우 배열 맨 앞에 0을 삽입해야 한다.
*/