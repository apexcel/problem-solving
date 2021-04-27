const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => parseInt(v, 10));
const [n, m] = sc;
let temp = [];
let print = '';

const dfs = (k) => {
    if (k === m) {
        print += `${temp.join(' ')}\n`;
        return;
    }
    let min = Math.max(1, ...temp);
    for (let i = min; i <= n; i += 1) {
        temp.push(i);
        dfs(k+1);
        temp.pop();
    }
};

dfs(0);
console.log(print);
