// https://www.acmicpc.net/problem/1316
const query = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let cnt = 0;

for (let i = 1; i < query.length; i += 1) {
    const a = Array(26).fill(0);
    let prev;
    cnt += 1;

    for (let j = 0; j < query[i].length; j += 1) {
        const idx = query[i][j].charCodeAt(0) - 97;
        if (a[idx] === 0) {
            a[idx] = 1;
            prev = idx;
            continue;
        }
        else if (prev !== idx && a[idx] > 0) {
            cnt > 0 ? cnt -= 1 : cnt;
            break;
        }
    }
}

console.log(cnt);