const [n, m, s] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

let cnt = 0;
for (let i = 0; i < m; i += 1) {
    if (s[i] === 'O') continue;
    let p = 0;
    while (s[i + 1] === 'O' && s[i + 2] === 'I') {
        p += 1;
        i += 2;
        if (p == n) {
            p -= 1;
            cnt += 1;
        }
    }
}
console.log(cnt);