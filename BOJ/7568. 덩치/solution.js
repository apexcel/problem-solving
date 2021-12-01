const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const grp = input.slice(1).map(v => {
    const [w, h] = v.split(' ');
    return [+w, +h];
});
let res = '';

for (let i = 0; i < grp.length; i += 1) {
    let rank = 1;
    for (let j = 0; j < grp.length; j += 1) {
        if (i === j) continue;
        if (grp[i][0] < grp[j][0] && grp[i][1] < grp[j][1]) rank += 1;
    }
    res += rank + ' ';
}
console.log(res);