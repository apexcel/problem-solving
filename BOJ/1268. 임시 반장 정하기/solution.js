const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const matrix = data.map(d => d.split(' ').map(Number));
const cnt = Array(+n + 1).fill(0);

for (let y = 0; y < +n; y += 1) {
    const tmp = Array(+n + 1).fill(0);
    for (let x = 0; x < 5; x += 1) {
        const cur = matrix[y][x];
        tmp[y + 1] = 1;

        for (let k = 0; k < +n; k += 1) {
            const trg = matrix[k][x];
            if (!tmp[k + 1] && cur === trg) {
                cnt[y + 1] += 1;
                tmp[k + 1] = 1;
            }
        }
    }
}

let mx = -1, idx = -1;
for (let i = 1; i < cnt.length; i += 1) {
    if (cnt[i] > mx) {
        mx = cnt[i];
        idx = i;
    } 
}
console.log(idx);