const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(Boolean);
for (let i = 1; i <= parseInt(input); i += 1) {
    const tc = input[i].toString().split(' ').map(el => parseInt(el));
    const avg = tc.slice(1).reduce((acc, cur) => acc + cur) / tc[0];
    let cnt = 0;

    tc.slice(1).forEach(el => el > avg ? cnt += 1 : 0);
    console.log(`${(cnt / tc[0] * 100).toFixed(3)}%`)
}
