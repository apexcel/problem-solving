const [n, ...cases] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let res = '';

for (let k = 0, offset = 0; k < +n; k += 1) {
    const end = +cases[offset];
    const candidates = Array(end + 1).fill(0);

    for (let i = 0; i < end; i += 1) {
        const [a, b] = cases[i + offset + 1].split(' ').map(Number);
        candidates[a] = b;
    }
    offset += end + 1;

    let cnt = 1;
    for (let i = 2, base = candidates[1]; i < candidates.length; i += 1) {
        if (base > candidates[i]) {
            base = candidates[i];
            cnt += 1;
        }
    }

    res += cnt + '\n';
}

console.log(res);