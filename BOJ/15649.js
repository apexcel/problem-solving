const scan = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const [n, m] = scan;

let cache = [], seq = [];

const solution = (cnt) => {
    if (cnt === parseInt(m, 10)) {
        let str = '';
        for (let i = 0; i < m; i++) {
            str += `${seq[i]} `;
        }
        console.log(str);
    }

    for (let i = 1; i <= n; i++) {
        if (!cache[i]) {
            cache[i] = 1;
            seq[cnt] = i;
            solution(cnt+1);
            cache[i] = 0;
        }
    }
}

solution(0);