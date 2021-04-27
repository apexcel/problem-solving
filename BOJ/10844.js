const n = parseInt(require('fs').readFileSync('/dev/stdin').toString(), 10);
const DIV = 1_000_000_000;
let list = Array.from(Array(2), () => Array(12).fill(0));
let ans = 9;

for (let i = 2; i < 11; i += 1) {
    list[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
    ans = 0;
    for (let j = 1; j < 11; j++) {
        list[i % 2][j] = (list[(i - 1) % 2][j - 1] + list[(i - 1) % 2][j + 1]) % DIV;
        ans = (ans + list[i % 2][j]) % DIV;
    }
}

console.log(ans);