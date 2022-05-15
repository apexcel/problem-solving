const [e, s, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let cnt = 1;

while (1) {
    if ((cnt - e) % 15 === 0 && (cnt - s) % 28 === 0 && (cnt - m) % 19 === 0) {
        console.log(cnt);
        process.exit();
    }

    cnt += 1;
}