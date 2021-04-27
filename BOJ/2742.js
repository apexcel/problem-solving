const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let ans = '';
for (let i = input; i > 0; i -= 1) {
    if (i === 1) {
        ans += i;
    }
    else {
        ans += i + '\n';
    }
}
console.log(ans);