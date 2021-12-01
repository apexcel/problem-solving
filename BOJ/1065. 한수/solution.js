const n = +require('fs').readFileSync('/dev/stdin').toString();
let cnt = 0;
for (let i = 1; i <= n; i += 1) {
    let quot = i, rems = [], flag = 1;
    while (quot > 0) {
        rems.push(quot % 10);
        quot = Math.floor(quot / 10);
    }

    if (rems.length > 2) {
        const d = rems[0] - rems[1];
        for (let i = 2; i < rems.length; i += 1) {
            if (rems[i-1] - rems[i] !== d) flag = 0;
        }
    }

    if (flag) cnt += 1;
}

console.log(cnt);