const input = require('fs').readFileSync('/dev/stdin').toString();
let ans = 0;
for (let i = 1; i <= input; i += 1) {
    ans += i;
}
console.log(ans)